import w3cMenu from './menu';
import w3cMenuItem from './menu-item';

w3cMenu.install = function(Vue) {
  Vue.component(w3cMenu.name, w3cMenu);
};

w3cMenuItem.install = function(Vue) {
  Vue.component(w3cMenuItem.name, w3cMenuItem);
};

export { w3cMenuItem, w3cMenu };
