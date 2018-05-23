(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var buyButtons = document.querySelector('.prices').querySelectorAll('.prices-card__button');

var PARAMS = {
  colorStart: '#fd712c',
  colorEnd: '#f21780'
};

var renderCanvasButton = function renderCanvasButton() {
  buyButtons.forEach(function (node) {
    var btnWidth = node.clientWidth;
    var btnHeight = node.clientHeight;

    var canvas = node.querySelector('.canvas-buy-button');
    canvas.setAttribute('width', btnWidth + 'px');
    canvas.setAttribute('height', btnHeight + 'px');

    var ctx = canvas.getContext('2d');

    var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, PARAMS.colorStart);
    gradient.addColorStop(1, PARAMS.colorEnd);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  });
};

exports.default = renderCanvasButton;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pricesSection = document.querySelector('.prices');
var arrayOfCards = pricesSection.querySelectorAll('.prices-card');
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
  var priceBlock = firstPriceCard.querySelector('.prices-card__price');
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

var drawPentagon = function drawPentagon(canvas, fillStyle) {
  var ctx = canvas.getContext('2d');
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
  var backgroundCanvas = singleCard.querySelector('.canvas-price__background');
  var canvas = singleCard.querySelector('.canvas-price__canvas');
  var gradient = createGradient(canvas.getContext('2d'));

  setCanvasSize(backgroundCanvas);
  drawPentagon(backgroundCanvas, params.colorDefault);

  setCanvasSize(canvas);
  drawPentagon(canvas, gradient);
};

var renderCanvasPrice = function renderCanvasPrice() {
  getWidth();
  arrayOfCards.forEach(createPriceCanvasElement);
  params.lastWidth = params.width;

  window.addEventListener('resize', function () {
    getWidth();
    if (params.lastWidth === params.width) {
      return;
    }
    arrayOfCards.forEach(createPriceCanvasElement);
    params.lastWidth = params.width;
  });
};

exports.default = renderCanvasPrice;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var renderGallerySlider = function renderGallerySlider() {
  return $('#first-slider').html('Test Test Test');
};

exports.default = renderGallerySlider;

},{}],4:[function(require,module,exports){
'use strict';

var _canvasButton = require('./canvasButton');

var _canvasButton2 = _interopRequireDefault(_canvasButton);

var _canvasPrice = require('./canvasPrice');

var _canvasPrice2 = _interopRequireDefault(_canvasPrice);

var _gallerySlider = require('./gallerySlider');

var renderGallerySlider = _interopRequireWildcard(_gallerySlider);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _canvasButton2.default)();
(0, _canvasPrice2.default)();
renderGallerySlider();

},{"./canvasButton":1,"./canvasPrice":2,"./gallerySlider":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9jYW52YXNCdXR0b24uanMiLCJqcy9jYW52YXNQcmljZS5qcyIsImpzL2dhbGxlcnlTbGlkZXIuanMiLCJqcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQUEsSUFBTSxhQUFhLFNBQ2hCLGFBRGdCLENBQ0YsU0FERSxFQUVoQixnQkFGZ0IsQ0FFQyxzQkFGRCxDQUFuQjs7QUFJQSxJQUFNLFNBQVM7QUFDYixjQUFZLFNBREM7QUFFYixZQUFVO0FBRkcsQ0FBZjs7QUFLQSxJQUFNLHFCQUFxQixTQUFyQixrQkFBcUIsR0FBTTtBQUMvQixhQUFXLE9BQVgsQ0FBbUIsVUFBQyxJQUFELEVBQVU7QUFDM0IsUUFBTSxXQUFXLEtBQUssV0FBdEI7QUFDQSxRQUFNLFlBQVksS0FBSyxZQUF2Qjs7QUFFQSxRQUFNLFNBQVMsS0FBSyxhQUFMLENBQW1CLG9CQUFuQixDQUFmO0FBQ0EsV0FBTyxZQUFQLENBQW9CLE9BQXBCLEVBQWdDLFFBQWhDO0FBQ0EsV0FBTyxZQUFQLENBQW9CLFFBQXBCLEVBQWlDLFNBQWpDOztBQUVBLFFBQU0sTUFBTSxPQUFPLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjs7QUFFQSxRQUFNLFdBQVcsSUFBSSxvQkFBSixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixPQUFPLEtBQXRDLEVBQTZDLENBQTdDLENBQWpCO0FBQ0EsYUFBUyxZQUFULENBQXNCLENBQXRCLEVBQXlCLE9BQU8sVUFBaEM7QUFDQSxhQUFTLFlBQVQsQ0FBc0IsQ0FBdEIsRUFBeUIsT0FBTyxRQUFoQzs7QUFFQSxRQUFJLFNBQUosR0FBZ0IsUUFBaEI7QUFDQSxRQUFJLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLE9BQU8sS0FBMUIsRUFBaUMsT0FBTyxNQUF4QztBQUNELEdBaEJEO0FBaUJELENBbEJEOztrQkFvQmUsa0I7Ozs7Ozs7O0FD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QkFBckI7QUFDQSxXQUFPLFNBQVAsR0FBbUIsT0FBTyxLQUExQjtBQUNELEdBUEQ7QUFRRCxDQWJEOztrQkFlZSxpQjs7Ozs7Ozs7QUN6RWYsSUFBTSxzQkFBc0IsU0FBdEIsbUJBQXNCO0FBQUEsU0FBTSxFQUFFLGVBQUYsRUFBbUIsSUFBbkIsQ0FBd0IsZ0JBQXhCLENBQU47QUFBQSxDQUE1Qjs7a0JBRWUsbUI7Ozs7O0FDRmY7Ozs7QUFDQTs7OztBQUNBOztJQUFZLG1COzs7Ozs7QUFHWjtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBidXlCdXR0b25zID0gZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZXMnKVxuICAucXVlcnlTZWxlY3RvckFsbCgnLnByaWNlcy1jYXJkX19idXR0b24nKTtcblxuY29uc3QgUEFSQU1TID0ge1xuICBjb2xvclN0YXJ0OiAnI2ZkNzEyYycsXG4gIGNvbG9yRW5kOiAnI2YyMTc4MCcsXG59O1xuXG5jb25zdCByZW5kZXJDYW52YXNCdXR0b24gPSAoKSA9PiB7XG4gIGJ1eUJ1dHRvbnMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIGNvbnN0IGJ0bldpZHRoID0gbm9kZS5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBidG5IZWlnaHQgPSBub2RlLmNsaWVudEhlaWdodDtcblxuICAgIGNvbnN0IGNhbnZhcyA9IG5vZGUucXVlcnlTZWxlY3RvcignLmNhbnZhcy1idXktYnV0dG9uJyk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBgJHtidG5XaWR0aH1weGApO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAke2J0bkhlaWdodH1weGApO1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBjYW52YXMud2lkdGgsIDApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBQQVJBTVMuY29sb3JTdGFydCk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIFBBUkFNUy5jb2xvckVuZCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ2FudmFzQnV0dG9uO1xuIiwiY29uc3QgcHJpY2VzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZXMnKTtcbmNvbnN0IGFycmF5T2ZDYXJkcyA9IHByaWNlc1NlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLnByaWNlcy1jYXJkJyk7XG5jb25zdCBmaXJzdFByaWNlQ2FyZCA9IGFycmF5T2ZDYXJkc1swXTtcblxuY29uc3QgcGFyYW1zID0ge1xuICB3aWR0aDogbnVsbCxcbiAgbGFzdFdpZHRoOiBudWxsLFxuICBoZWlnaHQ6IDEyMCxcbiAgdHJpYW5nbGVIZWlnaHQ6IDQwLFxuICByZWN0SGVpZ2h0OiAoKSA9PiBwYXJhbXMuaGVpZ2h0IC0gcGFyYW1zLnRyaWFuZ2xlSGVpZ2h0LFxuICBjb2xvclN0YXJ0OiAnI2ZkNzEyYycsXG4gIGNvbG9yRW5kOiAnI2YyMTc4MCcsXG4gIGNvbG9yRGVmYXVsdDogJ3doaXRlJyxcbn07XG5cbmNvbnN0IGdldFdpZHRoID0gKCkgPT4ge1xuICBjb25zdCBwcmljZUJsb2NrID0gZmlyc3RQcmljZUNhcmQucXVlcnlTZWxlY3RvcignLnByaWNlcy1jYXJkX19wcmljZScpO1xuICBwYXJhbXMud2lkdGggPSBwcmljZUJsb2NrLmNsaWVudFdpZHRoO1xufTtcblxuY29uc3Qgc2V0Q2FudmFzU2l6ZSA9IChjYW52YXMpID0+IHtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBgJHtwYXJhbXMud2lkdGh9cHhgKTtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYCR7cGFyYW1zLmhlaWdodH1weGApO1xufTtcblxuY29uc3QgY3JlYXRlR3JhZGllbnQgPSAoY3R4KSA9PiB7XG4gIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHBhcmFtcy53aWR0aCwgMCk7XG4gIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBwYXJhbXMuY29sb3JTdGFydCk7XG4gIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBwYXJhbXMuY29sb3JFbmQpO1xuICByZXR1cm4gZ3JhZGllbnQ7XG59O1xuXG5jb25zdCBkcmF3UGVudGFnb24gPSAoY2FudmFzLCBmaWxsU3R5bGUpID0+IHtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICBjdHguZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oMCwgMCk7XG4gIGN0eC5saW5lVG8ocGFyYW1zLndpZHRoLCAwKTtcbiAgY3R4LmxpbmVUbyhwYXJhbXMud2lkdGgsIHBhcmFtcy5yZWN0SGVpZ2h0KCkpO1xuICBjdHgubGluZVRvKHBhcmFtcy53aWR0aCAvIDIsIHBhcmFtcy5oZWlnaHQpO1xuICBjdHgubGluZVRvKDAsIHBhcmFtcy5yZWN0SGVpZ2h0KCkpO1xuICBjdHguZmlsbCgpO1xufTtcblxuY29uc3QgY3JlYXRlUHJpY2VDYW52YXNFbGVtZW50ID0gKHNpbmdsZUNhcmQpID0+IHtcbiAgY29uc3QgYmFja2dyb3VuZENhbnZhcyA9IHNpbmdsZUNhcmQucXVlcnlTZWxlY3RvcignLmNhbnZhcy1wcmljZV9fYmFja2dyb3VuZCcpO1xuICBjb25zdCBjYW52YXMgPSBzaW5nbGVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYW52YXMtcHJpY2VfX2NhbnZhcycpO1xuICBjb25zdCBncmFkaWVudCA9IGNyZWF0ZUdyYWRpZW50KGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpKTtcblxuICBzZXRDYW52YXNTaXplKGJhY2tncm91bmRDYW52YXMpO1xuICBkcmF3UGVudGFnb24oYmFja2dyb3VuZENhbnZhcywgcGFyYW1zLmNvbG9yRGVmYXVsdCk7XG5cbiAgc2V0Q2FudmFzU2l6ZShjYW52YXMpO1xuICBkcmF3UGVudGFnb24oY2FudmFzLCBncmFkaWVudCk7XG59O1xuXG5jb25zdCByZW5kZXJDYW52YXNQcmljZSA9ICgpID0+IHtcbiAgZ2V0V2lkdGgoKTtcbiAgYXJyYXlPZkNhcmRzLmZvckVhY2goY3JlYXRlUHJpY2VDYW52YXNFbGVtZW50KTtcbiAgcGFyYW1zLmxhc3RXaWR0aCA9IHBhcmFtcy53aWR0aDtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIGdldFdpZHRoKCk7XG4gICAgaWYgKHBhcmFtcy5sYXN0V2lkdGggPT09IHBhcmFtcy53aWR0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhcnJheU9mQ2FyZHMuZm9yRWFjaChjcmVhdGVQcmljZUNhbnZhc0VsZW1lbnQpO1xuICAgIHBhcmFtcy5sYXN0V2lkdGggPSBwYXJhbXMud2lkdGg7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ2FudmFzUHJpY2U7XG4iLCJjb25zdCByZW5kZXJHYWxsZXJ5U2xpZGVyID0gKCkgPT4gJCgnI2ZpcnN0LXNsaWRlcicpLmh0bWwoJ1Rlc3QgVGVzdCBUZXN0Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhbGxlcnlTbGlkZXI7XG4iLCJpbXBvcnQgcmVuZGVyQ2FudmFzQnV0dG9uIGZyb20gJy4vY2FudmFzQnV0dG9uJztcbmltcG9ydCByZW5kZXJDYW52YXNQcmljZSBmcm9tICcuL2NhbnZhc1ByaWNlJztcbmltcG9ydCAqIGFzIHJlbmRlckdhbGxlcnlTbGlkZXIgZnJvbSAnLi9nYWxsZXJ5U2xpZGVyJztcblxuXG5yZW5kZXJDYW52YXNCdXR0b24oKTtcbnJlbmRlckNhbnZhc1ByaWNlKCk7XG5yZW5kZXJHYWxsZXJ5U2xpZGVyKCk7XG5cbiJdfQ==
