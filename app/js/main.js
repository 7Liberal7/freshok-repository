$(function () {
  $('.main-slider__list').slick({
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-next slick-btn"><svg class="icon slick__svg slick__svg-left" style="width: 60px; height: 60px;"><use xlink:href="images/spriteimages/left.svg#left"></use></svg></button >',
    nextArrow: '<button type="button" class="slick-prev slick-btn"><svg class="icon slick__svg slick__svg-right" style="width: 60px; height: 60px;"><use xlink:href="images/spriteimages/left.svg#left"></use></svg></button >',
  });
  // а я же и запуск слайдера могу из jquery в обычный вид переделать? Но я так понимаю это не имеет смысла, потому что все равно сам слайдер это jquery
  $('.partners__wrapper').slick({
    arrows: false,
    dots: false,
  });

  // ток ошибки странные вылетают в консоль, но работает же)
  document.querySelector('.card-product__counter--plus').addEventListener('click', plus);
  document.querySelector('.card-product__counter--minus').addEventListener('click', minus);

  let present = 0

  function plus() {
    if (present > 98) {
      alert('Число не может быть больше 99 или меньше 0, пожалуйста проверьте свое число')
      // я вот сделал, мне кажется что лучше же окно какое-то всплывающее сделать вместо алерта или алерт используется в реальности?
      any();
    }
    present = Number(present) + Number(1)
    console.log(present);
    document.querySelector('.card-product__counter--number').value = present;
    any();
  }

  function minus() {
    if (present < 1) {
      alert('Число не может быть больше 99 или меньше 0, пожалуйста проверьте свое число')
      any();
    }
    present = Number(present) - Number(1)
    console.log(present);
    document.querySelector('.card-product__counter--number').value = present;
    any();
  }

  document.querySelector('.icon--cart').addEventListener('click', cartadd);

  function cartadd() {
    document.querySelector('.cart').classList.toggle('cart--active');
  }

  document.querySelector('.cart__close').addEventListener('click', cartremove);

  function cartremove() {
    document.querySelector('.cart').classList.remove('cart--active');
  }

  document.querySelector('.header__products').addEventListener('click', catalogProducts);

  function catalogProducts() {
    document.querySelector('.catalog').classList.toggle('catalog--active');
    document.querySelector('.header__products').classList.toggle('header__products--active');
  }

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