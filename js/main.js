async function loadProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666; padding: 40px;">Los proyectos se cargarán aquí desde la base de datos</p>';
}

async function loadNotes() {
  const bitacoraFeed = document.getElementById('bitacora-feed');
  if (!bitacoraFeed) return;

  bitacoraFeed.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666; padding: 40px;">Las notas de la bitácora se cargarán aquí desde la base de datos</p>';
  setupFilters();
}

function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
  loadNotes();
});
