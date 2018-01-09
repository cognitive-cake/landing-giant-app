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
//# sourceMappingURL=responsiveTriangles.js.map
