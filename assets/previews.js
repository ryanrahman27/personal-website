// Previews play only on interaction; project titles remain navigation links.
document.querySelectorAll('.motion-preview').forEach(preview => {
  const video = preview.querySelector('video');
  const image = preview.querySelector('img');
  const trigger = video || preview.querySelector('.media-trigger');
  const still = image?.getAttribute('src');
  const name = preview.dataset.previewName || 'Rocky';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let hovered = false, focused = false, manual = null, playing = false, visible = true;
  if (video) {
    video.controls = false;
    video.muted = true;
    video.loop = true;
    video.tabIndex = 0;
    video.setAttribute('role', 'button');
  }
  function label() {
    trigger.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} ${name} preview`);
    trigger.setAttribute('aria-pressed', String(playing));
  }
  function update() {
    const next = visible && !document.hidden && (manual ?? (!reduced.matches && (hovered || focused)));
    if (next !== playing) {
      playing = next;
      if (video) {
        if (playing) video.play().then(() => { if (!playing) video.pause(); }).catch(() => { playing = false; label(); });
        else video.pause();
      } else image.src = playing ? preview.dataset.animation : still;
    }
    label();
  }
  trigger.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { hovered = true; update(); } });
  trigger.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') { hovered = false; focused = false; manual = null; update(); } });
  trigger.addEventListener('focus', () => { focused = trigger.matches(':focus-visible'); update(); });
  trigger.addEventListener('blur', () => { focused = false; manual = null; update(); });
  trigger.addEventListener('click', () => { manual = !playing; update(); });
  if (video) trigger.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); manual = !playing; update(); }
  });
  reduced.addEventListener('change', () => { manual = null; update(); });
  document.addEventListener('visibilitychange', update);
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    if (!visible) { manual = null; hovered = false; focused = false; }
    update();
  }).observe(preview);
  label();
});
