<template>
  <div class="app">
    <accordion-example></accordion-example>
    <tabs-example></tabs-example>
    <menu-example></menu-example>
    <menu-search-example />
    <menu-side-example />
  </div>
</template>

<script>
import Tabs from './views/tabs';
import Accordion from './views/accordion';
import Menu from './views/menu/menu.vue';
import MenuSearch from './views/menu/menu-search';
import MenuSide from './views/menu/menu-side';

export default {
  name: 'app',
  components: {
    [MenuSide.name]: MenuSide,
    'menu-search-example': MenuSearch,
    'menu-example': Menu,
    'tabs-example': Tabs,
    'accordion-example': Accordion
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