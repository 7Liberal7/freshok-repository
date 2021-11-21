$(function () {
  $('.main-slider__list').slick({
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-next slick-btn"><svg class="icon slick__svg slick__svg-left" style="width: 60px; height: 60px;"><use xlink:href="images/spriteimages/arrow-left.svg#arrow-left"></use></svg></button >',
    nextArrow: '<button type="button" class="slick-prev slick-btn"><svg class="icon slick__svg slick__svg-right" style="width: 60px; height: 60px;"><use xlink:href="images/spriteimages/arrow-left.svg#arrow-left"></use></svg></button >',
  });

  // var mixer = mixitup('.best-products__list');

  // var mixer = mixitup('.discounts__list');

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
})