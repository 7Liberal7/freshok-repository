$(function () {
  $('.discounts__list').slick({
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/arrow-left.svg" alt="стрелка лево"></button>',
    nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/arrow-right.svg" alt="стрелка право"></button>',
  });

  var mixer = mixitup('.gallery-list');
})