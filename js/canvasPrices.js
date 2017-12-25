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

const drawPentagon = (canvas, ctx, fillStyle) => {
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


// Выполнение скрипта
getWidth();
for (let i = 0; i < arrayOfCards.length; i += 1) {
  const singleCard = arrayOfCards[i];
  const canvas = singleCard.querySelector('.price-canvas__canvas');
  const ctx = canvas.getContext('2d');
  const gradient = createGradient(ctx);

  setCanvasSize(canvas);
  drawPentagon(canvas, ctx, params.colorDefault);

  singleCard.addEventListener('mouseover', () => {
    drawPentagon(canvas, ctx, gradient);
  });

  singleCard.addEventListener('mouseleave', () => {
    drawPentagon(canvas, ctx, params.colorDefault);
  });
}

// window.addEventListener('resize', () => {
//   if (params.width === lastWidth) {
//     return;
//   }
//   redraw();
//   lastWidth = params.width;
// });
