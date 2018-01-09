'use strict';

var _tools = require('./tools');

var _tools2 = _interopRequireDefault(_tools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pricesSection = document.querySelector('.prices');
var arrayOfCards = pricesSection.querySelectorAll('.price-card');
var firstPriceCard = arrayOfCards[0];

var params = {
  width: null,
  lastWidth: null,
  height: 120,
  triangleHeight: 40,
  rectHeight: function rectHeight() {
    return params.height - params.triangleHeight;
  },
  colorStart: '#fd712c',
  colorEnd: '#f21780',
  colorDefault: 'white'
};

var getWidth = function getWidth() {
  var priceBlock = firstPriceCard.querySelector('.price-card__price');
  params.width = priceBlock.clientWidth;
};

var setCanvasSize = function setCanvasSize(canvas) {
  canvas.setAttribute('width', params.width + 'px');
  canvas.setAttribute('height', params.height + 'px');
};

var createGradient = function createGradient(ctx) {
  var gradient = ctx.createLinearGradient(0, 0, params.width, 0);
  gradient.addColorStop(0, params.colorStart);
  gradient.addColorStop(1, params.colorEnd);
  return gradient;
};

var drawPentagon = function drawPentagon(canvas, ctx, fillStyle) {
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

var createPriceCanvasElement = function createPriceCanvasElement(singleCard) {
  var wrapper = singleCard.querySelector('.price-card__wrapper');
  var canvas = singleCard.querySelector('.price-canvas__canvas');
  var ctx = canvas.getContext('2d');
  var gradient = createGradient(ctx);

  setCanvasSize(canvas);
  drawPentagon(canvas, ctx, params.colorDefault);

  wrapper.addEventListener('mouseover', function () {
    drawPentagon(canvas, ctx, gradient);
  });

  wrapper.addEventListener('mouseleave', function () {
    drawPentagon(canvas, ctx, params.colorDefault);
  });
};

// Выполнение скрипта
getWidth();
arrayOfCards.forEach(createPriceCanvasElement);
params.lastWidth = params.width;

window.addEventListener('resize', function () {
  (0, _tools2.default)();
  getWidth();
  if (params.lastWidth === params.width) {
    return;
  }
  arrayOfCards.forEach(createPriceCanvasElement);
  params.lastWidth = params.width;
});
//# sourceMappingURL=canvasPrices.js.map
