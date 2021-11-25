$(function () {
  $('.main-slider__list').slick({
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-next slick-btn"><svg class="icon slick__svg slick__svg-left" style="width: 60px; height: 60px;"><use xlink:href="images/spriteimages/left.svg#left"></use></svg></button >',
    nextArrow: '<button type="button" class="slick-prev slick-btn"><svg class="icon slick__svg slick__svg-right" style="width: 60px; height: 60px;"><use xlink:href="images/spriteimages/left.svg#left"></use></svg></button >',
  });

  $('.partners__wrapper').slick({
    arrows: false,
    dots: false,
  });

  $('.header__products').on('click', function () {
    $('.catalog').toggleClass('catalog--active');
    $('.header__products').toggleClass('header__products--active');
  });

  var productsEl1 = document.querySelector('[data-ref="products-1"]');
  var discountsEl2 = document.querySelector('[data-ref="discounts-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(productsEl1, config);
  var mixer2 = mixitup(discountsEl2, config);
})