function toggleFloatingMenu() {
  const menu = document.getElementById('floatingSubMenu');
  const icon = document.getElementById('menuToggleIcon');

  const isOpen = menu.style.display === 'flex';
  menu.style.display = isOpen ? 'none' : 'flex';

  icon.textContent = isOpen ? '☰' : '✖';
  icon.classList.toggle('rotate');
}
