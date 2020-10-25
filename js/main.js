$(function () {

   $('.reviews-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev arrow-left"><img src="images/arrow.svg"></button>',
      nextArrow: '<button type="button" class="slick-next arrow-right"><img src="images/arrow.svg"></button>',
      responsive: [
         {
            breakpoint: 560,
            settings: {
               arrows: false
            }
         }
      ]
   });
});

document.querySelector('.burger__btn').addEventListener('click', function () {
   document.querySelector('.header-menu__list').classList.toggle('header-menu__list--active');
   document.querySelector('.btn-line').classList.toggle('btn-line--active');
   document.querySelector('body').classList.toggle('lock');
});

// document.querySelector('.burger__btn').onclick = function () {
//    document.querySelector('.btn-line').classList.toggle('btn-line--active');
// }