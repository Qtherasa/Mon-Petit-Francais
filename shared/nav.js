/* ══════════════════════════════════════════════
   Mon Petit Français — Shared Navigation JS
   Hamburger menu open/close logic.
   Include after the nav HTML on every page.
   ══════════════════════════════════════════════ */

function toggleMenu() {
  const btn     = document.getElementById('hamburger-btn');
  const overlay = document.getElementById('menu-overlay');
  const drawer  = document.getElementById('menu-drawer');
  const isOpen  = drawer.classList.contains('open');
  if (isOpen) { closeMenu(); } else {
    btn.classList.add('open');
    overlay.classList.add('open');
    drawer.classList.add('open');
  }
}

function closeMenu() {
  document.getElementById('hamburger-btn').classList.remove('open');
  document.getElementById('menu-overlay').classList.remove('open');
  document.getElementById('menu-drawer').classList.remove('open');
}

/* Close on Escape key */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});
