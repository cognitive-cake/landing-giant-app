(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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
  var backgroundCanvas = singleCard.querySelector('.price-canvas__background');
  var canvas = singleCard.querySelector('.price-canvas__canvas');
  var gradient = createGradient(canvas.getContext('2d'));

  setCanvasSize(backgroundCanvas);
  drawPentagon(backgroundCanvas, params.colorDefault);

  setCanvasSize(canvas);
  drawPentagon(canvas, gradient);
};

// script run
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

},{}],2:[function(require,module,exports){
'use strict';

$('.reviews__header').append('p');

},{}],3:[function(require,module,exports){
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

},{}]},{},[1,2,3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9jYW52YXNQcmljZXMuanMiLCJqcy9yZXZpZXdzU2xpZGVyLmpzIiwianMvdG9vbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sZ0JBQWdCLFNBQVMsYUFBVCxDQUF1QixTQUF2QixDQUF0QjtBQUNBLElBQU0sZUFBZSxjQUFjLGdCQUFkLENBQStCLGFBQS9CLENBQXJCO0FBQ0EsSUFBTSxpQkFBaUIsYUFBYSxDQUFiLENBQXZCOztBQUVBLElBQU0sU0FBUztBQUNiLFNBQU8sSUFETTtBQUViLGFBQVcsSUFGRTtBQUdiLFVBQVEsR0FISztBQUliLGtCQUFnQixFQUpIO0FBS2IsY0FBWTtBQUFBLFdBQU0sT0FBTyxNQUFQLEdBQWdCLE9BQU8sY0FBN0I7QUFBQSxHQUxDO0FBTWIsY0FBWSxTQU5DO0FBT2IsWUFBVSxTQVBHO0FBUWIsZ0JBQWM7QUFSRCxDQUFmOztBQVdBLElBQU0sV0FBVyxTQUFYLFFBQVcsR0FBTTtBQUNyQixNQUFNLGFBQWEsZUFBZSxhQUFmLENBQTZCLG9CQUE3QixDQUFuQjtBQUNBLFNBQU8sS0FBUCxHQUFlLFdBQVcsV0FBMUI7QUFDRCxDQUhEOztBQUtBLElBQU0sZ0JBQWdCLFNBQWhCLGFBQWdCLENBQUMsTUFBRCxFQUFZO0FBQ2hDLFNBQU8sWUFBUCxDQUFvQixPQUFwQixFQUFnQyxPQUFPLEtBQXZDO0FBQ0EsU0FBTyxZQUFQLENBQW9CLFFBQXBCLEVBQWlDLE9BQU8sTUFBeEM7QUFDRCxDQUhEOztBQUtBLElBQU0saUJBQWlCLFNBQWpCLGNBQWlCLENBQUMsR0FBRCxFQUFTO0FBQzlCLE1BQU0sV0FBVyxJQUFJLG9CQUFKLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLE9BQU8sS0FBdEMsRUFBNkMsQ0FBN0MsQ0FBakI7QUFDQSxXQUFTLFlBQVQsQ0FBc0IsQ0FBdEIsRUFBeUIsT0FBTyxVQUFoQztBQUNBLFdBQVMsWUFBVCxDQUFzQixDQUF0QixFQUF5QixPQUFPLFFBQWhDO0FBQ0EsU0FBTyxRQUFQO0FBQ0QsQ0FMRDs7QUFPQSxJQUFNLGVBQWUsU0FBZixZQUFlLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBdUI7QUFDMUMsTUFBTSxNQUFNLE9BQU8sVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0EsTUFBSSxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixPQUFPLEtBQTNCLEVBQWtDLE9BQU8sTUFBekM7O0FBRUEsTUFBSSxTQUFKLEdBQWdCLFNBQWhCO0FBQ0EsTUFBSSxTQUFKO0FBQ0EsTUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQ7QUFDQSxNQUFJLE1BQUosQ0FBVyxPQUFPLEtBQWxCLEVBQXlCLENBQXpCO0FBQ0EsTUFBSSxNQUFKLENBQVcsT0FBTyxLQUFsQixFQUF5QixPQUFPLFVBQVAsRUFBekI7QUFDQSxNQUFJLE1BQUosQ0FBVyxPQUFPLEtBQVAsR0FBZSxDQUExQixFQUE2QixPQUFPLE1BQXBDO0FBQ0EsTUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLE9BQU8sVUFBUCxFQUFkO0FBQ0EsTUFBSSxJQUFKO0FBQ0QsQ0FaRDs7QUFjQSxJQUFNLDJCQUEyQixTQUEzQix3QkFBMkIsQ0FBQyxVQUFELEVBQWdCO0FBQy9DLE1BQU0sbUJBQW1CLFdBQVcsYUFBWCxDQUF5QiwyQkFBekIsQ0FBekI7QUFDQSxNQUFNLFNBQVMsV0FBVyxhQUFYLENBQXlCLHVCQUF6QixDQUFmO0FBQ0EsTUFBTSxXQUFXLGVBQWUsT0FBTyxVQUFQLENBQWtCLElBQWxCLENBQWYsQ0FBakI7O0FBRUEsZ0JBQWMsZ0JBQWQ7QUFDQSxlQUFhLGdCQUFiLEVBQStCLE9BQU8sWUFBdEM7O0FBRUEsZ0JBQWMsTUFBZDtBQUNBLGVBQWEsTUFBYixFQUFxQixRQUFyQjtBQUNELENBVkQ7O0FBWUE7QUFDQTtBQUNBLGFBQWEsT0FBYixDQUFxQix3QkFBckI7QUFDQSxPQUFPLFNBQVAsR0FBbUIsT0FBTyxLQUExQjs7QUFFQSxPQUFPLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdEM7QUFDQSxNQUFJLE9BQU8sU0FBUCxLQUFxQixPQUFPLEtBQWhDLEVBQXVDO0FBQ3JDO0FBQ0Q7QUFDRCxlQUFhLE9BQWIsQ0FBcUIsd0JBQXJCO0FBQ0EsU0FBTyxTQUFQLEdBQW1CLE9BQU8sS0FBMUI7QUFDRCxDQVBEOzs7OztBQy9EQSxFQUFFLGtCQUFGLEVBQXNCLE1BQXRCLENBQTZCLEdBQTdCOzs7Ozs7OztBQ0FBLElBQU0sa0JBQWtCO0FBQ3RCLG9CQUFrQjtBQURJLENBQXhCOztBQUlBLElBQUksb0JBQUo7O0FBRUEsSUFBTSxXQUFXLFNBQVgsUUFBVyxDQUFDLFFBQUQsRUFBYztBQUM3QixNQUFJLFdBQUosRUFBaUI7QUFDZixXQUFPLFlBQVAsQ0FBb0IsV0FBcEI7QUFDRDtBQUNELGdCQUFjLE9BQU8sVUFBUCxDQUFrQixRQUFsQixFQUE0QixnQkFBZ0IsZ0JBQTVDLENBQWQ7QUFDRCxDQUxEOztrQkFPZSxRIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IHByaWNlc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2VzJyk7XG5jb25zdCBhcnJheU9mQ2FyZHMgPSBwcmljZXNTZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmljZS1jYXJkJyk7XG5jb25zdCBmaXJzdFByaWNlQ2FyZCA9IGFycmF5T2ZDYXJkc1swXTtcblxuY29uc3QgcGFyYW1zID0ge1xuICB3aWR0aDogbnVsbCxcbiAgbGFzdFdpZHRoOiBudWxsLFxuICBoZWlnaHQ6IDEyMCxcbiAgdHJpYW5nbGVIZWlnaHQ6IDQwLFxuICByZWN0SGVpZ2h0OiAoKSA9PiBwYXJhbXMuaGVpZ2h0IC0gcGFyYW1zLnRyaWFuZ2xlSGVpZ2h0LFxuICBjb2xvclN0YXJ0OiAnI2ZkNzEyYycsXG4gIGNvbG9yRW5kOiAnI2YyMTc4MCcsXG4gIGNvbG9yRGVmYXVsdDogJ3doaXRlJyxcbn07XG5cbmNvbnN0IGdldFdpZHRoID0gKCkgPT4ge1xuICBjb25zdCBwcmljZUJsb2NrID0gZmlyc3RQcmljZUNhcmQucXVlcnlTZWxlY3RvcignLnByaWNlLWNhcmRfX3ByaWNlJyk7XG4gIHBhcmFtcy53aWR0aCA9IHByaWNlQmxvY2suY2xpZW50V2lkdGg7XG59O1xuXG5jb25zdCBzZXRDYW52YXNTaXplID0gKGNhbnZhcykgPT4ge1xuICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGAke3BhcmFtcy53aWR0aH1weGApO1xuICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBgJHtwYXJhbXMuaGVpZ2h0fXB4YCk7XG59O1xuXG5jb25zdCBjcmVhdGVHcmFkaWVudCA9IChjdHgpID0+IHtcbiAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgcGFyYW1zLndpZHRoLCAwKTtcbiAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIHBhcmFtcy5jb2xvclN0YXJ0KTtcbiAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIHBhcmFtcy5jb2xvckVuZCk7XG4gIHJldHVybiBncmFkaWVudDtcbn07XG5cbmNvbnN0IGRyYXdQZW50YWdvbiA9IChjYW52YXMsIGZpbGxTdHlsZSkgPT4ge1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbygwLCAwKTtcbiAgY3R4LmxpbmVUbyhwYXJhbXMud2lkdGgsIDApO1xuICBjdHgubGluZVRvKHBhcmFtcy53aWR0aCwgcGFyYW1zLnJlY3RIZWlnaHQoKSk7XG4gIGN0eC5saW5lVG8ocGFyYW1zLndpZHRoIC8gMiwgcGFyYW1zLmhlaWdodCk7XG4gIGN0eC5saW5lVG8oMCwgcGFyYW1zLnJlY3RIZWlnaHQoKSk7XG4gIGN0eC5maWxsKCk7XG59O1xuXG5jb25zdCBjcmVhdGVQcmljZUNhbnZhc0VsZW1lbnQgPSAoc2luZ2xlQ2FyZCkgPT4ge1xuICBjb25zdCBiYWNrZ3JvdW5kQ2FudmFzID0gc2luZ2xlQ2FyZC5xdWVyeVNlbGVjdG9yKCcucHJpY2UtY2FudmFzX19iYWNrZ3JvdW5kJyk7XG4gIGNvbnN0IGNhbnZhcyA9IHNpbmdsZUNhcmQucXVlcnlTZWxlY3RvcignLnByaWNlLWNhbnZhc19fY2FudmFzJyk7XG4gIGNvbnN0IGdyYWRpZW50ID0gY3JlYXRlR3JhZGllbnQoY2FudmFzLmdldENvbnRleHQoJzJkJykpO1xuXG4gIHNldENhbnZhc1NpemUoYmFja2dyb3VuZENhbnZhcyk7XG4gIGRyYXdQZW50YWdvbihiYWNrZ3JvdW5kQ2FudmFzLCBwYXJhbXMuY29sb3JEZWZhdWx0KTtcblxuICBzZXRDYW52YXNTaXplKGNhbnZhcyk7XG4gIGRyYXdQZW50YWdvbihjYW52YXMsIGdyYWRpZW50KTtcbn07XG5cbi8vIHNjcmlwdCBydW5cbmdldFdpZHRoKCk7XG5hcnJheU9mQ2FyZHMuZm9yRWFjaChjcmVhdGVQcmljZUNhbnZhc0VsZW1lbnQpO1xucGFyYW1zLmxhc3RXaWR0aCA9IHBhcmFtcy53aWR0aDtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgZ2V0V2lkdGgoKTtcbiAgaWYgKHBhcmFtcy5sYXN0V2lkdGggPT09IHBhcmFtcy53aWR0aCkge1xuICAgIHJldHVybjtcbiAgfVxuICBhcnJheU9mQ2FyZHMuZm9yRWFjaChjcmVhdGVQcmljZUNhbnZhc0VsZW1lbnQpO1xuICBwYXJhbXMubGFzdFdpZHRoID0gcGFyYW1zLndpZHRoO1xufSk7XG4iLCIkKCcucmV2aWV3c19faGVhZGVyJykuYXBwZW5kKCdwJyk7XG4iLCJjb25zdCBUSU1FX1BBUkFNRVRFUlMgPSB7XG4gIGRlYm91bmNlSW50ZXJ2YWw6IDUwMCxcbn07XG5cbmxldCBsYXN0VGltZW91dDtcblxuY29uc3QgZGVib3VuY2UgPSAoY2FsbGJhY2spID0+IHtcbiAgaWYgKGxhc3RUaW1lb3V0KSB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dChsYXN0VGltZW91dCk7XG4gIH1cbiAgbGFzdFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgVElNRV9QQVJBTUVURVJTLmRlYm91bmNlSW50ZXJ2YWwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVib3VuY2U7XG4iXX0=
