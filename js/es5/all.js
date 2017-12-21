'use strict';

var _tools = require('./tools.js');

var _tools2 = _interopRequireDefault(_tools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pentagon = document.querySelector('.pentagon-block');
var triangle = pentagon.querySelector('.pentagon-block__triangle');

var initialWidth = pentagon.clientWidth;

var setBordersWidth = function setBordersWidth(num) {
  var sideSize = num / 2;
  triangle.style.borderLeftWidth = sideSize + 'px';
  triangle.style.borderRightWidth = sideSize + 'px';
};

var onSizeChange = function onSizeChange() {
  var pentagonWidth = pentagon.clientWidth;

  (0, _tools2.default)(setBordersWidth);
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
