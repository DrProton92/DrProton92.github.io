document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-portfolio-play]');
  if (!trigger) return;
  const player = document.getElementById(trigger.dataset.portfolioPlay);
  if (!player) return;
  player.play().catch(() => player.focus());
});

// Keep tracks from overlapping, including when native audio controls are used.
document.addEventListener('play', (event) => {
  if (!event.target.matches('.portfolio-card-audio audio')) return;
  document.querySelectorAll('.portfolio-card-audio audio').forEach((player) => {
    if (player !== event.target) player.pause();
  });
}, true);
