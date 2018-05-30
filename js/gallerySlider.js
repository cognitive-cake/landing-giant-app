const renderGallerySlider = () => {
  $('#placeholder').html('work in progress');

  $('#slider-gallery-prev').click((e) => {
    e.preventDefault();
    alert('click on left btn');
  });

  $('#slider-gallery-next').click((e) => {
    e.preventDefault();
    alert('click on right btn');
  });
};

export default renderGallerySlider;
