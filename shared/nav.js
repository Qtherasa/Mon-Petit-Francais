/* ============================================================
   shared/nav.js
   Single source of truth for site navigation.
   Injects hamburger, overlay, and drawer into every page.
   ============================================================ */

const BASE = '/Mon-Petit-Francais';

const NAV_ITEMS = [
  {
    path: '/',
    href: `${BASE}/index.html`,
    icon: '🏠',
    label: 'Accueil',
    sub:   'Home — all modules',
  },
  {
    path: '/phrases/',
    href: `${BASE}/phrases/index.html`,
    icon: '📖',
    label: 'Parcourir les phrases',
    sub:   'Browse phrases by topic',
  },
  {
    path: '/conversations/',
    href: `${BASE}/conversations/index.html`,
    icon: '💬',
    label: 'Scripts de conversation',
    sub:   'Practice full conversations',
  },
  {
    path: '/sounds/',
    href: `${BASE}/sounds/index.html`,
    icon: '🔤',
    label: 'Les sons du français',
    sub:   'How French sounds work',
  },
  {
    path: '/flashcards/',
    href: `${BASE}/flashcards/index.html`,
    icon: '🃏',
    label: 'Flashcards',
    sub:   'Practice vocabulary',
  },
];

/* ── Active detection ───────────────────────────────────────
   Strips the base and matches against the current pathname.  */
function isActive(item) {
  const stripped = window.location.pathname
    .replace(BASE, '')   // remove /Mon-Petit-Francais
    .replace(/\/?$/, '/'); // normalise trailing slash

  if (item.path === '/') {
    // Home is only active when we're exactly at the root
    return stripped === '/' || stripped === '/index.html/';
  }
  return stripped.startsWith(item.path);
}

/* ── Build & inject ─────────────────────────────────────── */
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
    <!-- HAMBURGER -->
    <button class="hamburger-btn" id="hamburger-btn" onclick="toggleMenu()" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>

    <!-- OVERLAY -->
    <div class="menu-overlay" id="menu-overlay" onclick="closeMenu()"></div>

    <!-- DRAWER -->
    <nav class="menu-drawer" id="menu-drawer">
      <div class="menu-header">
        <div class="menu-eyebrow">Navigation</div>
        <h3>Mon Petit Français</h3>
      </div>
      <div class="menu-items">
        ${itemsHTML}
      </div>
    </nav>
  `;

  // Insert at the very start of <body> so z-index stacking is predictable
  document.body.insertAdjacentHTML('afterbegin', navHTML);
}

/* ── Toggle functions (called by injected HTML) ─────────── */
function toggleMenu() {
  const drawer  = document.getElementById('menu-drawer');
  const overlay = document.getElementById('menu-overlay');
  const btn     = document.getElementById('hamburger-btn');
  const open    = drawer.classList.toggle('open');
  overlay.classList.toggle('open', open);
  btn.classList.toggle('open', open);
}

function closeMenu() {
  document.getElementById('menu-drawer') ?.classList.remove('open');
  document.getElementById('menu-overlay')?.classList.remove('open');
  document.getElementById('hamburger-btn')?.classList.remove('open');
}

/* ── Run on DOM ready ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', injectNav);
