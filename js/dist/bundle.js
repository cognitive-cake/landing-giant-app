(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  (0, _tools2.default)(function () {
    return console.log('debounce!!!');
  });
  getWidth();
  if (params.lastWidth === params.width) {
    return;
  }
  arrayOfCards.forEach(createPriceCanvasElement);
  params.lastWidth = params.width;
});

},{"./tools":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TIME_PARAMETERS = {
  debounceInterval: 500
};

var lastTimeout = void 0;

var debounce = function debounce(callback) {
  if (lastTimeout) {
    window.clearTimeout(lastTimeout);
  }
  lastTimeout = window.setTimeout(callback, TIME_PARAMETERS.debounceInterval);
};

exports.default = debounce;

},{}]},{},[1,2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9jYW52YXNQcmljZXMuanMiLCJqcy90b29scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLFNBQVMsYUFBVCxDQUF1QixTQUF2QixDQUF0QjtBQUNBLElBQU0sZUFBZSxjQUFjLGdCQUFkLENBQStCLGFBQS9CLENBQXJCO0FBQ0EsSUFBTSxpQkFBaUIsYUFBYSxDQUFiLENBQXZCOztBQUVBLElBQU0sU0FBUztBQUNiLFNBQU8sSUFETTtBQUViLGFBQVcsSUFGRTtBQUdiLFVBQVEsR0FISztBQUliLGtCQUFnQixFQUpIO0FBS2IsY0FBWTtBQUFBLFdBQU0sT0FBTyxNQUFQLEdBQWdCLE9BQU8sY0FBN0I7QUFBQSxHQUxDO0FBTWIsY0FBWSxTQU5DO0FBT2IsWUFBVSxTQVBHO0FBUWIsZ0JBQWM7QUFSRCxDQUFmOztBQVdBLElBQU0sV0FBVyxTQUFYLFFBQVcsR0FBTTtBQUNyQixNQUFNLGFBQWEsZUFBZSxhQUFmLENBQTZCLG9CQUE3QixDQUFuQjtBQUNBLFNBQU8sS0FBUCxHQUFlLFdBQVcsV0FBMUI7QUFDRCxDQUhEOztBQUtBLElBQU0sZ0JBQWdCLFNBQWhCLGFBQWdCLENBQUMsTUFBRCxFQUFZO0FBQ2hDLFNBQU8sWUFBUCxDQUFvQixPQUFwQixFQUFnQyxPQUFPLEtBQXZDO0FBQ0EsU0FBTyxZQUFQLENBQW9CLFFBQXBCLEVBQWlDLE9BQU8sTUFBeEM7QUFDRCxDQUhEOztBQUtBLElBQU0saUJBQWlCLFNBQWpCLGNBQWlCLENBQUMsR0FBRCxFQUFTO0FBQzlCLE1BQU0sV0FBVyxJQUFJLG9CQUFKLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLE9BQU8sS0FBdEMsRUFBNkMsQ0FBN0MsQ0FBakI7QUFDQSxXQUFTLFlBQVQsQ0FBc0IsQ0FBdEIsRUFBeUIsT0FBTyxVQUFoQztBQUNBLFdBQVMsWUFBVCxDQUFzQixDQUF0QixFQUF5QixPQUFPLFFBQWhDO0FBQ0EsU0FBTyxRQUFQO0FBQ0QsQ0FMRDs7QUFPQSxJQUFNLGVBQWUsU0FBZixZQUFlLENBQUMsTUFBRCxFQUFTLEdBQVQsRUFBYyxTQUFkLEVBQTRCO0FBQy9DLE1BQUksU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsT0FBTyxLQUEzQixFQUFrQyxPQUFPLE1BQXpDO0FBQ0EsTUFBSSxTQUFKLEdBQWdCLFNBQWhCO0FBQ0EsTUFBSSxTQUFKO0FBQ0EsTUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQ7QUFDQSxNQUFJLE1BQUosQ0FBVyxPQUFPLEtBQWxCLEVBQXlCLENBQXpCO0FBQ0EsTUFBSSxNQUFKLENBQVcsT0FBTyxLQUFsQixFQUF5QixPQUFPLFVBQVAsRUFBekI7QUFDQSxNQUFJLE1BQUosQ0FBVyxPQUFPLEtBQVAsR0FBZSxDQUExQixFQUE2QixPQUFPLE1BQXBDO0FBQ0EsTUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLE9BQU8sVUFBUCxFQUFkO0FBQ0EsTUFBSSxJQUFKO0FBQ0QsQ0FWRDs7QUFZQSxJQUFNLDJCQUEyQixTQUEzQix3QkFBMkIsQ0FBQyxVQUFELEVBQWdCO0FBQy9DLE1BQU0sVUFBVSxXQUFXLGFBQVgsQ0FBeUIsc0JBQXpCLENBQWhCO0FBQ0EsTUFBTSxTQUFTLFdBQVcsYUFBWCxDQUF5Qix1QkFBekIsQ0FBZjtBQUNBLE1BQU0sTUFBTSxPQUFPLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLE1BQU0sV0FBVyxlQUFlLEdBQWYsQ0FBakI7O0FBRUEsZ0JBQWMsTUFBZDtBQUNBLGVBQWEsTUFBYixFQUFxQixHQUFyQixFQUEwQixPQUFPLFlBQWpDOztBQUVBLFVBQVEsZ0JBQVIsQ0FBeUIsV0FBekIsRUFBc0MsWUFBTTtBQUMxQyxpQkFBYSxNQUFiLEVBQXFCLEdBQXJCLEVBQTBCLFFBQTFCO0FBQ0QsR0FGRDs7QUFJQSxVQUFRLGdCQUFSLENBQXlCLFlBQXpCLEVBQXVDLFlBQU07QUFDM0MsaUJBQWEsTUFBYixFQUFxQixHQUFyQixFQUEwQixPQUFPLFlBQWpDO0FBQ0QsR0FGRDtBQUdELENBaEJEOztBQWtCQTtBQUNBO0FBQ0EsYUFBYSxPQUFiLENBQXFCLHdCQUFyQjtBQUNBLE9BQU8sU0FBUCxHQUFtQixPQUFPLEtBQTFCOztBQUVBLE9BQU8sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUN0Qyx1QkFBUztBQUFBLFdBQU0sUUFBUSxHQUFSLENBQVksYUFBWixDQUFOO0FBQUEsR0FBVDtBQUNBO0FBQ0EsTUFBSSxPQUFPLFNBQVAsS0FBcUIsT0FBTyxLQUFoQyxFQUF1QztBQUNyQztBQUNEO0FBQ0QsZUFBYSxPQUFiLENBQXFCLHdCQUFyQjtBQUNBLFNBQU8sU0FBUCxHQUFtQixPQUFPLEtBQTFCO0FBQ0QsQ0FSRDs7Ozs7Ozs7QUNyRUEsSUFBTSxrQkFBa0I7QUFDdEIsb0JBQWtCO0FBREksQ0FBeEI7O0FBSUEsSUFBSSxvQkFBSjs7QUFFQSxJQUFNLFdBQVcsU0FBWCxRQUFXLENBQUMsUUFBRCxFQUFjO0FBQzdCLE1BQUksV0FBSixFQUFpQjtBQUNmLFdBQU8sWUFBUCxDQUFvQixXQUFwQjtBQUNEO0FBQ0QsZ0JBQWMsT0FBTyxVQUFQLENBQWtCLFFBQWxCLEVBQTRCLGdCQUFnQixnQkFBNUMsQ0FBZDtBQUNELENBTEQ7O2tCQU9lLFEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdG9vbHMnO1xuXG5jb25zdCBwcmljZXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNlcycpO1xuY29uc3QgYXJyYXlPZkNhcmRzID0gcHJpY2VzU2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcucHJpY2UtY2FyZCcpO1xuY29uc3QgZmlyc3RQcmljZUNhcmQgPSBhcnJheU9mQ2FyZHNbMF07XG5cbmNvbnN0IHBhcmFtcyA9IHtcbiAgd2lkdGg6IG51bGwsXG4gIGxhc3RXaWR0aDogbnVsbCxcbiAgaGVpZ2h0OiAxMjAsXG4gIHRyaWFuZ2xlSGVpZ2h0OiA0MCxcbiAgcmVjdEhlaWdodDogKCkgPT4gcGFyYW1zLmhlaWdodCAtIHBhcmFtcy50cmlhbmdsZUhlaWdodCxcbiAgY29sb3JTdGFydDogJyNmZDcxMmMnLFxuICBjb2xvckVuZDogJyNmMjE3ODAnLFxuICBjb2xvckRlZmF1bHQ6ICd3aGl0ZScsXG59O1xuXG5jb25zdCBnZXRXaWR0aCA9ICgpID0+IHtcbiAgY29uc3QgcHJpY2VCbG9jayA9IGZpcnN0UHJpY2VDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZS1jYXJkX19wcmljZScpO1xuICBwYXJhbXMud2lkdGggPSBwcmljZUJsb2NrLmNsaWVudFdpZHRoO1xufTtcblxuY29uc3Qgc2V0Q2FudmFzU2l6ZSA9IChjYW52YXMpID0+IHtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBgJHtwYXJhbXMud2lkdGh9cHhgKTtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYCR7cGFyYW1zLmhlaWdodH1weGApO1xufTtcblxuY29uc3QgY3JlYXRlR3JhZGllbnQgPSAoY3R4KSA9PiB7XG4gIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHBhcmFtcy53aWR0aCwgMCk7XG4gIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBwYXJhbXMuY29sb3JTdGFydCk7XG4gIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBwYXJhbXMuY29sb3JFbmQpO1xuICByZXR1cm4gZ3JhZGllbnQ7XG59O1xuXG5jb25zdCBkcmF3UGVudGFnb24gPSAoY2FudmFzLCBjdHgsIGZpbGxTdHlsZSkgPT4ge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGN0eC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbygwLCAwKTtcbiAgY3R4LmxpbmVUbyhwYXJhbXMud2lkdGgsIDApO1xuICBjdHgubGluZVRvKHBhcmFtcy53aWR0aCwgcGFyYW1zLnJlY3RIZWlnaHQoKSk7XG4gIGN0eC5saW5lVG8ocGFyYW1zLndpZHRoIC8gMiwgcGFyYW1zLmhlaWdodCk7XG4gIGN0eC5saW5lVG8oMCwgcGFyYW1zLnJlY3RIZWlnaHQoKSk7XG4gIGN0eC5maWxsKCk7XG59O1xuXG5jb25zdCBjcmVhdGVQcmljZUNhbnZhc0VsZW1lbnQgPSAoc2luZ2xlQ2FyZCkgPT4ge1xuICBjb25zdCB3cmFwcGVyID0gc2luZ2xlQ2FyZC5xdWVyeVNlbGVjdG9yKCcucHJpY2UtY2FyZF9fd3JhcHBlcicpO1xuICBjb25zdCBjYW52YXMgPSBzaW5nbGVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZS1jYW52YXNfX2NhbnZhcycpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29uc3QgZ3JhZGllbnQgPSBjcmVhdGVHcmFkaWVudChjdHgpO1xuXG4gIHNldENhbnZhc1NpemUoY2FudmFzKTtcbiAgZHJhd1BlbnRhZ29uKGNhbnZhcywgY3R4LCBwYXJhbXMuY29sb3JEZWZhdWx0KTtcblxuICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICBkcmF3UGVudGFnb24oY2FudmFzLCBjdHgsIGdyYWRpZW50KTtcbiAgfSk7XG5cbiAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgIGRyYXdQZW50YWdvbihjYW52YXMsIGN0eCwgcGFyYW1zLmNvbG9yRGVmYXVsdCk7XG4gIH0pO1xufTtcblxuLy8g0JLRi9C/0L7Qu9C90LXQvdC40LUg0YHQutGA0LjQv9GC0LBcbmdldFdpZHRoKCk7XG5hcnJheU9mQ2FyZHMuZm9yRWFjaChjcmVhdGVQcmljZUNhbnZhc0VsZW1lbnQpO1xucGFyYW1zLmxhc3RXaWR0aCA9IHBhcmFtcy53aWR0aDtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgZGVib3VuY2UoKCkgPT4gY29uc29sZS5sb2coJ2RlYm91bmNlISEhJykpO1xuICBnZXRXaWR0aCgpO1xuICBpZiAocGFyYW1zLmxhc3RXaWR0aCA9PT0gcGFyYW1zLndpZHRoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFycmF5T2ZDYXJkcy5mb3JFYWNoKGNyZWF0ZVByaWNlQ2FudmFzRWxlbWVudCk7XG4gIHBhcmFtcy5sYXN0V2lkdGggPSBwYXJhbXMud2lkdGg7XG59KTtcbiIsImNvbnN0IFRJTUVfUEFSQU1FVEVSUyA9IHtcbiAgZGVib3VuY2VJbnRlcnZhbDogNTAwLFxufTtcblxubGV0IGxhc3RUaW1lb3V0O1xuXG5jb25zdCBkZWJvdW5jZSA9IChjYWxsYmFjaykgPT4ge1xuICBpZiAobGFzdFRpbWVvdXQpIHtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGxhc3RUaW1lb3V0KTtcbiAgfVxuICBsYXN0VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCBUSU1FX1BBUkFNRVRFUlMuZGVib3VuY2VJbnRlcnZhbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWJvdW5jZTtcbiJdfQ==