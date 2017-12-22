const pricesSection = document.querySelector('.prices');
const firstPentagon = pricesSection.querySelector('.pentagon-block');
const allTriangles = pricesSection.querySelectorAll('.pentagon-block__triangle');

const initialWidth = firstPentagon.clientWidth;
let lastWidth = null;

const setBordersWidth = (num) => {
  lastWidth = num;
  const sideSize = num / 2;
  for (let i = 0; i < allTriangles.length; i += 1) {
    const triangle = allTriangles[i];
    triangle.style.borderLeftWidth = `${sideSize}px`;
    triangle.style.borderRightWidth = `${sideSize}px`;
  }
};

const onSizeChange = () => {
  const pentagonWidth = firstPentagon.clientWidth;
  if (pentagonWidth === lastWidth) {
    return;
  }

  setBordersWidth(pentagonWidth);
};

setBordersWidth(initialWidth);
window.addEventListener('resize', onSizeChange);
