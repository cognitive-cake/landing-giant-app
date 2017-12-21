const card = document.querySelector('.price-card');
const pentagon = document.querySelector('.pentagon-block');
const triangle = pentagon.querySelector('.pentagon-block__triangle');

const initialWidth = pentagon.clientWidth;

const setBordersWidth = (num) => {
  const sideSize = num / 2;
  triangle.style.borderLeftWidth = `${sideSize}px`;
  triangle.style.borderRightWidth = `${sideSize}px`;
};

const onSizeChange = (event) => {
  const element = event.currentTarget;
  const elementWidth = element.clientWidth;

  setBordersWidth(elementWidth);
};

setBordersWidth(initialWidth);
card.addEventListener('resize', onSizeChange);
