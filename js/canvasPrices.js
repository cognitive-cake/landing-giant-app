const pricesSection = document.querySelector('.prices');
const arrayOfCards = pricesSection.querySelectorAll('.price-card');
const firstPriceCard = arrayOfCards[0];

const params = {
  width: null,
  lastWidth: null,
  height: 120,
  triangleHeight: 40,
  rectHeight: () => params.height - params.triangleHeight,
  colorStart: '#fd712c',
  colorEnd: '#f21780',
  colorDefault: 'white',
  animationLength: 500,
};

const getWidth = () => {
  const priceBlock = firstPriceCard.querySelector('.price-card__price');
  params.width = priceBlock.clientWidth;
};

const setCanvasSize = (canvas) => {
  canvas.setAttribute('width', `${params.width}px`);
  canvas.setAttribute('height', `${params.height}px`);
};

const createGradient = (ctx) => {
  const gradient = ctx.createLinearGradient(0, 0, params.width, 0);
  gradient.addColorStop(0, params.colorStart);
  gradient.addColorStop(1, params.colorEnd);
  return gradient;
};

const drawPentagon = (canvas, fillStyle, alpha) => {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.globalAlpha = alpha;
  ctx.fillStyle = fillStyle;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(params.width, 0);
  ctx.lineTo(params.width, params.rectHeight());
  ctx.lineTo(params.width / 2, params.height);
  ctx.lineTo(0, params.rectHeight());
  ctx.fill();
};

// const drawAnimation = (startTime, canvas, ctx, color) => {
//   const intervalID = setInterval(() => {
//     const currTime = Date.now();
//     const progress = currTime - startTime;
//     const alphaValue = progress / params.animationLength;
//     drawPentagon(canvas, ctx, color, alphaValue);
//   }, 20);
//   setTimeout(() => clearInterval(intervalID), params.animationLength);
// };

const createPriceCanvasElement = (singleCard) => {
  // const wrapper = singleCard.querySelector('.price-card__wrapper');
  const backgroundCanvas = singleCard.querySelector('.price-canvas__background');
  const canvas = singleCard.querySelector('.price-canvas__canvas');
  const gradient = createGradient(canvas.getContext('2d'));


  setCanvasSize(backgroundCanvas);
  drawPentagon(backgroundCanvas, params.colorDefault, 1);

  setCanvasSize(canvas);
  drawPentagon(canvas, gradient, 1);

  // wrapper.addEventListener('mouseenter', () => {
  //   const startTime = Date.now();
  //   drawAnimation(startTime, canvas, ctx, gradient);
  // });


  // wrapper.addEventListener('mouseleave', () => {
  //   setTimeout(() => drawPentagon(canvas, ctx, params.colorDefault, 1), params.animationLength);
  // });
};

// Выполнение скрипта
getWidth();
arrayOfCards.forEach(createPriceCanvasElement);
params.lastWidth = params.width;

window.addEventListener('resize', () => {
  getWidth();
  if (params.lastWidth === params.width) {
    return;
  }
  arrayOfCards.forEach(createPriceCanvasElement);
  params.lastWidth = params.width;
});
