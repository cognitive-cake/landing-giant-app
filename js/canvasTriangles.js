const pricesSection = document.querySelector('.prices');
const firstCard = pricesSection.querySelector('.price-card');
const firstPentagon = pricesSection.querySelector('.pentagon-block');
const canvas = pricesSection.querySelector('.pentagon-block__triangle');
const ctx = canvas.getContext('2d');

const params = {
  width: firstPentagon.clientWidth,
  height: 40,
  colorStart: '#fd712c',
  colorEnd: '#f21780',
};

const gradient = ctx.createLinearGradient(0, 0, params.width, 0);
gradient.addColorStop(0, params.colorStart);
gradient.addColorStop(1, params.colorEnd);

const initialWidth = firstPentagon.clientWidth;
let lastWidth = null;

const setSize = () => {
  canvas.setAttribute('width', `${params.width}px`);
  canvas.setAttribute('height', `${params.height}px`);
};

setSize();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(params.width, 0);
ctx.lineTo(params.width / 2, params.height);
ctx.fill();

firstCard.addEventListener('mouseover', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(params.width, 0);
  ctx.lineTo(params.width / 2, params.height);
  ctx.fill();
});

firstCard.addEventListener('mouseleave', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(params.width, 0);
  ctx.lineTo(params.width / 2, params.height);
  ctx.fill();
});
