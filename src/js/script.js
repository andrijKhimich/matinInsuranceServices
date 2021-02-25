const testimonialsSlider = $('#testimonialsSlider');

$(document).ready(function () {
  initTestimonialsSlider();

});

function initTestimonialsSlider() {
  const counter = $('#testimonialsSliderInfo');
  console.log(counter)
  $(testimonialsSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    counter.html('<span class="slider__number">' + (slick.slickCurrentSlide() + 1) + "/" + '</span>' + slick.slideCount);
  });

  $(testimonialsSlider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    speed: 800,
    arrows: true,
    prevArrow: $('#testimonialsPrev'),
    nextArrow: $('#testimonialsNext'),
    responsive: [{
      breakpoint: 991,
      settings: {
        adaptiveHeight: true
      }
    }]
  });
}