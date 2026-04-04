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
      <div class="drawer-content">
        <div class="drawer-header">
          <div class="drawer-eyebrow">Navigation</div>
          <h3>Mon Petit Français</h3>
        </div>
        <div class="menu-items">${itemsHTML}</div>
      </div>
    </nav>

    <nav class="drawer-panel" id="drawer-opt">
      <div class="drawer-content">
        <div class="drawer-header">
          <div class="drawer-eyebrow">Settings</div>
          <h3>Options</h3>
        </div>
        <div id="opt-list-container">
           </div>
      </div>
    </nav>
  `;
  document.body.insertAdjacentHTML('afterbegin', navHTML);
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

document.addEventListener('DOMContentLoaded', injectNav);
