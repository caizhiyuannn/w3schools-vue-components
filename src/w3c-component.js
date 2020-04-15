import w3cAccordion from 'packages/accordion';
import w3cTabs from 'packages/tabs';
import w3cTabPanel from 'packages/tab-panel';

const components = [w3cAccordion, w3cTabPanel, w3cTabs];

export function loadW3CComponent(Vue) {
  components.forEach(component => Vue.use(component));
}
