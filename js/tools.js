const TIME_PARAMETERS = {
  debounceInterval: 500,
};

let lastTimeout;

const debounce = (callback) => {
  if (lastTimeout) {
    window.clearTimeout(lastTimeout);
  }
  lastTimeout = window.setTimeout(callback, TIME_PARAMETERS.debounceInterval);
};

export default debounce;
