// import Swiper JS
import Swiper from './node_modules/swiper/swiper-bundle.min.mjs';
// import Swiper styles


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 600,
  
});
 const swiper2 = new Swiper(".swiper-container-feedback", {
  direction: 'horizontal',
  speed: 600,
  nextEl: '.feedback__scroller__r',
  prevEl: 'feedback__scroller__l'
 })