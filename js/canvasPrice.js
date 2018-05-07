const pricesSection = document.querySelector('.prices');
const arrayOfCards = pricesSection.querySelectorAll('.prices-card');
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
};

const getWidth = () => {
  const priceBlock = firstPriceCard.querySelector('.prices-card__price');
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

const drawPentagon = (canvas, fillStyle) => {
  const ctx = canvas.getContext('2d');
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

const createPriceCanvasElement = (singleCard) => {
  const backgroundCanvas = singleCard.querySelector('.canvas-price__background');
  const canvas = singleCard.querySelector('.canvas-price__canvas');
  const gradient = createGradient(canvas.getContext('2d'));

  setCanvasSize(backgroundCanvas);
  drawPentagon(backgroundCanvas, params.colorDefault);

  setCanvasSize(canvas);
  drawPentagon(canvas, gradient);
};

const canvasPriceRun = () => {
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
};

export default canvasPriceRun;
