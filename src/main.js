import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
Swiper.use([Navigation, Pagination, Keyboard, Mousewheel]);

import 'swiper/css/bundle';

new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: { sensitivity: 1 },
  // количество слайдов для показа
  slidesPerView: 1,

  // бесконечное прокручивание слайдов
  loop: true,
});
