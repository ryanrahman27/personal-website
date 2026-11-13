// Shared project links reveal the matching write-up without closing other projects.
function revealResearchProject() {
  const id = location.hash.slice(1);
  const project = document.getElementById(id);
  if (!project?.matches('.research-project')) return;
  project.open = true;
  requestAnimationFrame(() => project.scrollIntoView({ block: 'start' }));
}
window.addEventListener('hashchange', revealResearchProject);
revealResearchProject();
document.querySelectorAll('.research-project').forEach(project => {
  project.addEventListener('toggle', () => {
    if (!project.open) project.querySelectorAll('video').forEach(video => video.pause());
  });
});
