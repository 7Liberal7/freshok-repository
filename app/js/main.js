$(function () {
  $('.main-slider__list').slick({
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-next slick-btn"><svg class="icon slick__svg slick__svg-left" style="width: 60px; height: 60px;"><use xlink:href="images/spriteimages/arrow-left.svg#arrow-left" ></use></svg></button >',
    nextArrow: '<button type="button" class="slick-prev slick-btn"><svg class="icon slick__svg slick__svg-right" style="width: 60px; height: 60px;"><use xlink:href="images/spriteimages/arrow-left.svg#arrow-left" ></use></svg></button >',
  });

  var mixer = mixitup('.best-products__list');
})