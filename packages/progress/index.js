import w3cProgress from "./main";

w3cProgress.install = function(Vue) {
  Vue.component(w3cProgress.name, w3cProgress);
};

export default w3cProgress;
