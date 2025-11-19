// script.js - comportamiento mínimo pero útil
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeBtn = document.getElementById('themeToggle');
  const toggleBioBtn = document.getElementById('toggleBio');
  const bio = document.getElementById('bio');

  // Inicializar tema desde localStorage (si hay)
  const saved = localStorage.getItem('theme') || 'light';
  if (saved === 'dark') body.classList.add('dark');
  themeBtn.textContent = body.classList.contains('dark') ? 'Modo Claro' : 'Modo Oscuro';

  themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    themeBtn.textContent = isDark ? 'Modo Claro' : 'Modo Oscuro';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Expandir / contraer biografía
  toggleBioBtn.addEventListener('click', () => {
    const collapsed = bio.classList.toggle('collapsed');
    toggleBioBtn.textContent = collapsed ? 'Leer más' : 'Leer menos';
    // Pequeña animación de scroll si se expandió
    if (!collapsed) {
      bio.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  // Accesibilidad: atajo teclado "t" para alternar tema
  window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 't' && !e.metaKey && !e.ctrlKey) {
      themeBtn.click();
    }
  });
});
