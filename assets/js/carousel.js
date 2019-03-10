$(document).ready(function(){
  if (document.body.dir === "rtl") {
    var car_rtl = true;
  } else {
    var car_rtl = false;
  }

  $('#postsCrousel').slick({
    rtl: car_rtl,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    centerMode: true,
    dots: true,
    focusOnSelect: true,
    mobileFirst: true,
    responsive: [
      {breakpoint: 960,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 1,
         infinite: true,
         dots: false,
         centerMode: true,
       }},
    ]
  });
});
