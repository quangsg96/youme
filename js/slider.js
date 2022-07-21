$(document).ready(function () {
  // SLIDER COVER
  $(".container-header__cover > .owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    responsive: {
      319: {
        items: 1,
      },
    },
  });

  // BODY SLIDER 1
  $(".body-slider__wrapper--1 > .owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    autoplayTimeout: 2000,
    autoplay: true,
    responsive: {
      319: {
        items: 3,
      },
      479: {
        items: 2,
        margin: 20,
      },
      1023: {
        margin: 20,
        items: 6,
      },
      1279: {
        margin: 10,
        items: 6,
      },
      1919: {
        margin: 0,
        items: 6,
      },
    },
  });

  // BODY SLIDER 2
  $(".body-slider__wrapper--2 > .owl-carousel").owlCarousel({
    navigationText: [
      '<ion-icon name="chevron-forward-outline"></ion-icon>',
      '<ion-icon name="chevron-back-outline"></ion-icon>',
    ],
    responsive: {
      319: {
        items: 3,
        nav: true,
      },
      479: {
        items: 2,
        nav: true,
      },
      1023: {
        items: 5,
        nav: false,
      },
    },
  });

  // BODY SLIDER 3
  $(".body-slider__wrapper--3 > .owl-carousel").owlCarousel({
    loop: true,
    responsive: {
      319: {
        items: 3,
        margin: 25,
      },
      479: {
        items: 2,
        margin: 20,
      },
      767: {
        items: 2,
        margin: 10,
      },
      1023: {
        items: 3,
        margin: 0,
      },
      1279: {
        items: 4,
        margin: 10,
      },
      1365: {
        items: 4,
        margin: 15,
      },
      1440: {
        items: 4,
        margin: 15,
      },
      1919: {
        items: 4,
        margin: 20,
      },
    },
  });

  // BODY SLIDER 4
  $(".body-slider__wrapper--4 > .owl-carousel").owlCarousel({
    loop: true,
    responsive: {
      319: {
        items: 3,
        margin: 25,
      },
      479: {
        items: 2,
        margin: 20,
      },
      767: {
        items: 2,
        margin: 10,
      },
      1023: {
        items: 3,
        margin: 0,
      },
      1279: {
        items: 4,
        margin: 10,
      },
      1365: {
        items: 4,
        margin: 15,
      },
      1440: {
        items: 4,
        margin: 15,
      },
      1919: {
        items: 4,
        margin: 20,
      },
    },
  });
});
