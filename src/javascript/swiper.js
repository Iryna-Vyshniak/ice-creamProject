(() => {
  var swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: true,
  });
  var swiper = new Swiper('.customersSwiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
})();
