<template>
  <div class="app">
    <accordion-example></accordion-example>
    <tabs-example></tabs-example>
  </div>
</template>

<script>
import Tabs from './views/tabs';
import Accordion from './views/accordion';

export default {
  name: 'app',
  components: {
    'tabs-example': Tabs,
    'accordion-example': Accordion
  }
};
</script>
<style >
</style>