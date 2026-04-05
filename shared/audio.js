/* ══════════════════════════════════════════════
   Mon Petit Français — Audio Engine
   French speechSynthesis with female-preferred
   voice selection and adjustable playback speed.
   ══════════════════════════════════════════════ */

const Audio = (() => {
  let _voice     = null;
  let _rate      = parseFloat(localStorage.getItem('mpf-speed')) || 0.75;   // default: gentle pace for learners
  let _ready     = false;
  let _pending    = null;   // text queued before voices loaded
  let _activeBtn  = null;

  /* ── VOICE SELECTION ───────────────────────────
     Priority order:
     1. fr-FR female voices
     2. Any fr-FR voice
     3. Any fr- voice
     4. First available voice (fallback)
  ──────────────────────────────────────────────── */
  function _pickVoice(voices) {
    const fr = voices.filter(v => v.lang.startsWith('fr'));
    if (!fr.length) return voices[0] || null;
    const femaleKeywords = ['amélie', 'audrey', 'aurélie', 'céline', 'virginie', 'juliette', 'female', 'fr-fr-x-fra'];
    const female = fr.find(v => femaleKeywords.some(k => v.name.toLowerCase().includes(k)));
    if (female) return female;
    const frFR = fr.find(v => v.lang === 'fr-FR');  
    return frFR || fr[0];
  }

  function _loadVoices() {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length) {
      _voice = _pickVoice(voices);
      _ready = true;
      if (_pending) { speak(_pending.text, _pending.btn); _pending = null; }
    }
  }

  // Chrome/Android fires this event; Safari has voices immediately
  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = _loadVoices;
    _loadVoices(); // also try immediately (Firefox / Safari)
  }

  /* ── PUBLIC: SPEAK ─────────────────────────── */
  function speak(text, btn) {
    if (!window.speechSynthesis) return;

    // If not ready yet, queue
    if (!_ready) { _pending = { text, btn }; return; }

    // Cancel any current speech
    window.speechSynthesis.cancel();

    // Reset previous button state
    if (_activeBtn && _activeBtn !== btn) {
      _activeBtn.textContent = '▶';
      _activeBtn.classList.remove('playing');
    }

    const utt  = new SpeechSynthesisUtterance(text);
    utt.lang   = 'fr-FR';
    utt.rate   = _rate;
    utt.pitch  = 1.05;   // very slightly warmer
    if (_voice) utt.voice = _voice;

    _activeBtn = btn || null;

    if (btn) {
      btn.textContent = '■';
      btn.classList.add('playing');
    }

    utt.onend = utt.onerror = () => {
      if (btn) {
        btn.textContent = '▶';
        btn.classList.remove('playing');
      }
      _activeBtn = null;

      // Android Chrome workaround: synthesis can stall on long texts
      window.speechSynthesis.cancel();
    };

    // Android workaround: cancel + re-speak to unstick synthesis
    window.speechSynthesis.cancel();
    setTimeout(() => window.speechSynthesis.speak(utt), 50);
  }

  /* ── PUBLIC: TOGGLE (play or stop) ─────────── */
  function toggle(text, btn) {
    if (btn && btn.classList.contains('playing')) {
      window.speechSynthesis.cancel();
      btn.textContent = '▶';
      btn.classList.remove('playing');
      _activeBtn = null;
      return;
    }
    speak(text, btn);
  }

  /* ── PUBLIC: SET RATE ───────────────────────── */
  function setRate(rate) {
   _rate = rate;
    localStorage.setItem('mpf-speed', rate); // Sticky save
    document.querySelectorAll('.speed-btn').forEach(b => {
      b.classList.toggle('active', parseFloat(b.dataset.rate) === rate);
    });
  }

  /* ── PUBLIC: BUILD SPEED BAR ────────────────── */
  /*
   * Call this to insert the speed bar into a container element.
   * el: DOM element to append the bar into.
   * label (optional): override the label text.
   */
  function buildSpeedBar(el, label) {
    const bar = document.createElement('div');
    bar.className = 'speed-bar';
    bar.innerHTML = `
      <span class="speed-bar-label">${label || 'Speed'}</span>
      <button class="speed-btn" data-rate="0.25">0.25×</button>
      <button class="speed-btn" data-rate="0.5">0.5×</button>
      <button class="speed-btn active" data-rate="0.75">0.75×</button>
      <button class="speed-btn" data-rate="1">1×</button>
    `;
    bar.querySelectorAll('.speed-btn').forEach(btn => {
      btn.addEventListener('click', () => setRate(parseFloat(btn.dataset.rate)));
    });
    el.appendChild(bar);
    setRate(_rate); // Initialize UI state
  }

  /* ── PUBLIC: BUILD PLAY BUTTON ──────────────── */
  /*
   * Returns a ready-to-use play button element.
   * text: the French string to speak.
   */
  function buildPlayBtn(text) {
    const btn = document.createElement('button');
    btn.className   = 'play-btn';
    btn.textContent = '▶';
    btn.title       = 'Listen in French';
    btn.setAttribute('aria-label', 'Play French pronunciation');
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggle(text, btn);
    });
    return btn;
  }

  return { speak, toggle, setRate, buildSpeedBar, buildPlayBtn };
})();
