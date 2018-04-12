const buyButtons = document
  .querySelector('.prices')
  .querySelectorAll('.prices-card__button');

const PARAMS = {
  colorStart: '#fd712c',
  colorEnd: '#f21780',
};

buyButtons.forEach((node) => {
  const btnWidth = node.clientWidth;
  const btnHeight = node.clientHeight;

  const canvas = node.querySelector('.canvas-buy-button');
  canvas.setAttribute('width', `${btnWidth}px`);
  canvas.setAttribute('height', `${btnHeight}px`);

  const ctx = canvas.getContext('2d');

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, PARAMS.colorStart);
  gradient.addColorStop(1, PARAMS.colorEnd);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});
