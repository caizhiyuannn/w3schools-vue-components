<template>
  <div class="app">
    <accordion-example></accordion-example>
    <tabs-example></tabs-example>
    <menu-example></menu-example>
  </div>
</template>

<script>
import Tabs from './views/tabs';
import Accordion from './views/accordion';
import Menu from './views/menu.vue';

export default {
  name: 'app',
  components: {
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