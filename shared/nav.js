/* shared/nav.js */

const BASE = '/Mon-Petit-Francais';

const NAV_ITEMS = [
  { path: '/', href: `${BASE}/index.html`, icon: '🏠', label: 'Accueil', sub: 'Home — all modules' },
  { path: '/sounds/', href: `${BASE}/sounds/index.html`, icon: '🔤', label: 'Les sons du français', sub: 'How French sounds work' }, 
  { path: '/vocab/', href: `${BASE}/vocab/index.html`, icon: '🗂️', label: 'Le vocabulaire', sub: 'Words to know' },
  { path: '/flashcards/', href: `${BASE}/flashcards/index.html`, icon: '🃏', label: 'Flashcards', sub: 'Practice vocabulary' },
  { path: '/phrases/', href: `${BASE}/phrases/index.html`, icon: '📖', label: 'Parcourir les phrases', sub: 'Browse phrases by topic' },
  { path: '/conversations/', href: `${BASE}/conversations/index.html`, icon: '💬', label: 'Scripts de conversation', sub: 'Practice full conversations' },
];

// Adventurous Rank Definitions
const LEVELS = [
  { id: 'a0', label: 'Le Débutant', sub: 'Starting from zero' },
  { id: 'a1', label: 'L’Explorateur', sub: 'Basic interactions' },
  { id: 'a2', label: 'Le Voyageur', sub: 'Routine exchanges' },
  { id: 'b1', label: 'Le Citadin', sub: 'Daily fluency' },
  { id: 'b2', label: 'L’Ambassadeur', sub: 'Complex discussions' },
  { id: 'c1', label: 'Le Sage', sub: 'Fluent and nuanced' }
];

// Sticky Settings Retrieval
let userSettings = {
  level: localStorage.getItem('mpf-level') || 'a0',
  strictLevel: localStorage.getItem('mpf-strict-level') === 'true',
  speed: parseFloat(localStorage.getItem('mpf-speed')) || 0.75
};

function isActive(item) {
  const stripped = window.location.pathname.replace(BASE, '').replace(/\/?$/, '/');
  if (item.path === '/') return stripped === '/' || stripped === '/index.html/';
  return stripped.startsWith(item.path);
}

function injectNav() {
  const itemsHTML = NAV_ITEMS.map(item => `
    <a class="menu-item${isActive(item) ? ' active' : ''}" href="${item.href}">
      <span class="menu-item-icon">${item.icon}</span>
      <div>
        <div class="menu-item-label">${item.label}</div>
        <div class="menu-item-sub">${item.sub}</div>
      </div>
    </a>
  `).join('');

    const navHTML = `
    <div class="nav-container">
      <button class="nav-btn" id="btn-nav" onclick="toggleDrawer('nav')" title="Navigation">🧭</button>
      <button class="nav-btn" id="btn-opt" onclick="toggleDrawer('opt')" title="Options">⚙️</button>
    </div>

    <div class="menu-overlay" id="menu-overlay" onclick="closeAllDrawers()"></div>

    <nav class="drawer-panel" id="drawer-nav">
      </nav>

    <nav class="drawer-panel" id="drawer-opt">
      <div class="drawer-content">
        <div class="drawer-header">
          <div class="drawer-eyebrow">Settings</div>
          <h3>Options</h3>
        </div>
        
        <div id="opt-speed-container" class="opt-section" style="display:none;">
           <div class="opt-section-label">Vitesse de lecture (Speed)</div>
           <div id="speed-bar-target"></div>
        </div>

        <div id="opt-level-container" class="opt-section" style="display:none;">
           <div class="opt-section-label">Votre Rang (Your Rank)</div>
           <div class="level-selector">
              ${LEVELS.map(lvl => `
                <button class="lvl-btn ${userSettings.level === lvl.id ? 'active' : ''}" 
                        onclick="updateGlobalLevel('${lvl.id}')" 
                        data-lvl="${lvl.id}">
                  <span class="lvl-name">${lvl.label}</span>
                  <span class="lvl-sub">${lvl.sub}</span>
                </button>
              `).join('')}
           </div>
           
           <label class="strict-toggle">
              <input type="checkbox" id="strict-level-check" 
                     ${userSettings.strictLevel ? 'checked' : ''} 
                     onchange="updateStrictLevel(this.checked)">
              <span>Show only this level</span>
           </label>
        </div>
      </div>
    </nav>
  `;
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  
  // Build the speed bar immediately upon injection
  if (window.Audio) {
    Audio.buildSpeedBar(document.getElementById('speed-bar-target'));
  }

}

function toggleDrawer(type) {
  const isNav = type === 'nav';
  const target = document.getElementById(isNav ? 'drawer-nav' : 'drawer-opt');
  const other = document.getElementById(isNav ? 'drawer-opt' : 'drawer-nav');
  const btnTgt = document.getElementById(isNav ? 'btn-nav' : 'btn-opt');
  const btnOth = document.getElementById(isNav ? 'btn-opt' : 'btn-nav');

  const isOpen = target.classList.toggle('open');
  other.classList.remove('open');
  btnOth.classList.remove('active');
  btnTgt.classList.toggle('active', isOpen);
  document.getElementById('menu-overlay').classList.toggle('open', isOpen);
}

function closeAllDrawers() {
  document.querySelectorAll('.drawer-panel, .nav-btn, .menu-overlay').forEach(el => el.classList.remove('open', 'active'));
}

function toggleMenu() {
  const drawer = document.getElementById('menu-drawer');
  const overlay = document.getElementById('menu-overlay');
  const btn = document.getElementById('hamburger-btn');
  const open = drawer.classList.toggle('open');
  overlay.classList.toggle('open', open);
  btn.classList.toggle('open', open);
}

function closeMenu() {
  document.getElementById('menu-drawer')?.classList.remove('open');
  document.getElementById('menu-overlay')?.classList.remove('open');
  document.getElementById('hamburger-btn')?.classList.remove('open');
}

/* Bridging function to the vocab page modal */
function toggleOptionsModal() {
  if (typeof window.toggleVocabOptions === 'function') {
    window.toggleVocabOptions();
  }
}

// Global Update Functions (Sticky Logic)
window.updateGlobalLevel = function(lvlId) {
  userSettings.level = lvlId;
  localStorage.setItem('mpf-level', lvlId);
  
  document.querySelectorAll('.lvl-btn').forEach(b => 
    b.classList.toggle('active', b.dataset.lvl === lvlId)
  );

  window.dispatchEvent(new CustomEvent('mpfSettingsChanged', { detail: userSettings }));
};

window.updateStrictLevel = function(isStrict) {
  userSettings.strictLevel = isStrict;
  localStorage.setItem('mpf-strict-level', isStrict);
  window.dispatchEvent(new CustomEvent('mpfSettingsChanged', { detail: userSettings }));
};

// Toggle visibility based on module requirements
window.enableOptions = function(optionsList) {
  optionsList.forEach(optKey => {
    const el = document.getElementById(`opt-${optKey.toLowerCase()}-container`);
    if (el) el.style.display = 'block';
  });
};

document.addEventListener('DOMContentLoaded', injectNav);
