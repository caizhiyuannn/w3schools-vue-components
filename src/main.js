import Vue from 'vue';

import App from './app.vue';
import { loadW3CComponent } from './w3c-component';

loadW3CComponent(Vue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
