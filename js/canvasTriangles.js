const pricesSection = document.querySelector('.prices');
const firstCard = pricesSection.querySelector('.price-card');
const priceBlock = firstCard.querySelector('.price-card__price');
const canvas = pricesSection.querySelector('.price-block__canvas');
const ctx = canvas.getContext('2d');

const params = {
  width: priceBlock.clientWidth,
  height: 120,
  triangleHeight: 40,
  rectHeight: () => params.height - params.triangleHeight,
  colorStart: '#fd712c',
  colorEnd: '#f21780',
};

const gradient = ctx.createLinearGradient(0, 0, params.width, 0);
gradient.addColorStop(0, params.colorStart);
gradient.addColorStop(1, params.colorEnd);

const initialWidth = firstCard.clientWidth;
let lastWidth = null;

const setSize = () => {
  canvas.setAttribute('width', `${params.width}px`);
  canvas.setAttribute('height', `${params.height}px`);
};

const drawPentagon = (fillStyle) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = fillStyle;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(params.width, 0);
  ctx.lineTo(params.width, params.rectHeight());
  ctx.lineTo(params.width / 2, params.height);
  ctx.lineTo(0, params.rectHeight());
  ctx.fill();
};

setSize();
drawPentagon('white');

firstCard.addEventListener('mouseover', () => {
  drawPentagon(gradient);
});

firstCard.addEventListener('mouseleave', () => {
  drawPentagon('white');
});
