<template>
  <div class="app">
    <accordion-example></accordion-example>
    <tabs-example></tabs-example>
    <menu-example></menu-example>
    <menu-search-example />
  </div>
</template>

<script>
import Tabs from './views/tabs';
import Accordion from './views/accordion';
import Menu from './views/menu/menu.vue';
import MenuSearch from './views/menu/menu-search';

export default {
  name: 'app',
  components: {
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