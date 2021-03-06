import w3cAccordion from "packages/accordion";
import w3cTabs from "packages/tabs";
import w3cTabPanel from "packages/tab-panel";
import { w3cMenu, w3cMenuItem } from "packages/menu";
import w3cPagination from "packages/pagination";
import w3cButton from "packages/button";
import w3cButtonGroup from "packages/button-group";
import { w3cCarousel, w3cCarouselItem } from "packages/carousel";
import w3cProgress from 'packages/progress';

const components = [
  w3cAccordion,
  w3cTabPanel,
  w3cTabs,
  w3cMenu,
  w3cMenuItem,
  w3cPagination,
  w3cButton,
  w3cButtonGroup,
  w3cCarousel,
  w3cCarouselItem,
  w3cProgress,
];

export function loadW3CComponent(Vue) {
  components.forEach((component) => Vue.use(component));
}
