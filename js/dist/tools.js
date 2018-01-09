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
//# sourceMappingURL=tools.js.map
