<template>
  <div class="app">
    <w3c-card v-for="(comp, index) in comps" :key="index">
      <component :is="comp" />
    </w3c-card>
  </div>
</template>

<script>
import Tabs from './views/tabs';
import Accordion from './views/accordion';
import Menu from './views/menu/menu.vue';
import MenuSearch from './views/menu/menu-search';
import MenuSide from './views/menu/menu-side';
import Card from './components/card';

export default {
  name: 'app',
  components: {
    [Card.name]: Card,
    [MenuSide.name]: MenuSide,
    'menu-search-example': MenuSearch,
    'menu-example': Menu,
    'tabs-example': Tabs,
    'accordion-example': Accordion
  },
  data() {
    return {
      comps: [
        Accordion.name,
        Tabs.name,
        Menu.name,
        MenuSearch.name,
        MenuSide.name
      ]
    };
  },
  methods: {
    action(event) {
      console.log('action...', event);
    }
  }
};
</script>
<style >
</style>