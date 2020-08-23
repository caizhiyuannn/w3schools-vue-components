import w3cCarousel from "./main";
import w3cCarouselItem from "./item";

w3cCarousel.install = function(Vue) {
  Vue.component(w3cCarousel.name, w3cCarousel);
};

w3cCarouselItem.install = function(Vue) {
  Vue.component(w3cCarouselItem.name, w3cCarouselItem);
};

export { w3cCarousel, w3cCarouselItem };
