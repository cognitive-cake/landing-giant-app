/* eslint-disable */

'use strict';

var pricesSection = document.querySelector('.prices');
var firstCard = pricesSection.querySelector('.price-card');
var firstPentagon = pricesSection.querySelector('.pentagon-block');
var canvas = pricesSection.querySelector('.pentagon-block__triangle');
var ctx = canvas.getContext('2d');

var params = {
  width: firstPentagon.clientWidth,
  height: 40,
  colorStart: '#fd712c',
  colorEnd: '#f21780'
};

var gradient = ctx.createLinearGradient(0, 0, params.width, 0);
gradient.addColorStop(0, params.colorStart);
gradient.addColorStop(1, params.colorEnd);

var initialWidth = firstPentagon.clientWidth;
var lastWidth = null;

var setSize = function setSize() {
  canvas.setAttribute('width', params.width + 'px');
  canvas.setAttribute('height', params.height + 'px');
};

setSize();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(params.width, 0);
ctx.lineTo(params.width / 2, params.height);
ctx.fill();

firstCard.addEventListener('mouseover', function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(params.width, 0);
  ctx.lineTo(params.width / 2, params.height);
  ctx.fill();
});

firstCard.addEventListener('mouseleave', function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(params.width, 0);
  ctx.lineTo(params.width / 2, params.height);
  ctx.fill();
});
'use strict';

var pricesSection = document.querySelector('.prices');
var firstPentagon = pricesSection.querySelector('.pentagon-block');
var allTriangles = pricesSection.querySelectorAll('.pentagon-block__triangle');

var initialWidth = firstPentagon.clientWidth;
var lastWidth = null;

var setBordersWidth = function setBordersWidth(num) {
  lastWidth = num;
  var sideSize = num / 2;
  for (var i = 0; i < allTriangles.length; i += 1) {
    var triangle = allTriangles[i];
    triangle.style.borderLeftWidth = sideSize + 'px';
    triangle.style.borderRightWidth = sideSize + 'px';
  }
};

var onSizeChange = function onSizeChange() {
  var pentagonWidth = firstPentagon.clientWidth;
  if (pentagonWidth === lastWidth) {
    return;
  }

  setBordersWidth(pentagonWidth);
};

setBordersWidth(initialWidth);
window.addEventListener('resize', onSizeChange);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TIME_PARAMETERS = {
  debounceInterval: 50000
};

var lastTimeout = void 0;

var debounce = function debounce(callback) {
  if (lastTimeout) {
    window.clearTimeout(lastTimeout);
  }
  lastTimeout = window.setTimeout(callback, TIME_PARAMETERS.debounceInterval);
};

exports.default = debounce;
//# sourceMappingURL=all.js.map
