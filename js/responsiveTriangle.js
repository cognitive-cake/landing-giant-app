import debounce from './tools.js';

const pentagon = document.querySelector('.pentagon-block');
const triangle = pentagon.querySelector('.pentagon-block__triangle');

const initialWidth = pentagon.clientWidth;

const setBordersWidth = (num) => {
  const sideSize = num / 2;
  triangle.style.borderLeftWidth = `${sideSize}px`;
  triangle.style.borderRightWidth = `${sideSize}px`;
};

const onSizeChange = () => {
  const pentagonWidth = pentagon.clientWidth;

  debounce(setBordersWidth);
};

setBordersWidth(initialWidth);
window.addEventListener('resize', onSizeChange);
