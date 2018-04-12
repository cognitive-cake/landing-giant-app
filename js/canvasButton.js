const buyButtons = document
  .querySelector('.prices')
  .querySelectorAll('.prices-card__button');

buyButtons.forEach((node) => {
  const btnWidth = node.clientWidth;
  const btnHeight = node.clientHeight;

  const canvas = node.querySelector('.canvas-buy-button');
  canvas.setAttribute('width', `${btnWidth}px`);
  canvas.setAttribute('height', `${btnHeight}px`);

  const ctx = canvas.getContext('2d');

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, '#fd712c');
  gradient.addColorStop(1, '#f21780');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});
