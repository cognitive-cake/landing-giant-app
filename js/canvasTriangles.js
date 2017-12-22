const pricesSection = document.querySelector('.prices');
const firstPentagon = pricesSection.querySelector('.pentagon-block');
const canvas = pricesSection.querySelector('.pentagon-block__triangle');
const ctx = canvas.getContext('2d');

const params = {
  width: firstPentagon.clientWidth,
  height: 40,
};

const initialWidth = firstPentagon.clientWidth;
let lastWidth = null;

const setSize = () => {
  canvas.setAttribute('width', `${params.width}px`);
  canvas.setAttribute('height', `${params.height}px`);
};

setSize();

