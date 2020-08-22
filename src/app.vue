<template>
  <div class="app">
    <W3cCard v-for="(comp, index) in comps" :key="index">
      <component :is="comp" />
    </W3cCard>
  </div>
</template>

<script>
import W3cCard from "./components/card";
import { genNames } from "./example-views";

const components = genNames();

export default {
  name: "app",
  components: {
    W3cCard,
    ...components,
  },
  computed: {
    comps: function() {
      const data = [];
      for (const key in components) {
        if (components.hasOwnProperty(key)) {
          const c = components[key];
          data.push(c.name);
        }
      }
      console.log(data);
      return data;
    },
  },
  methods: {
    action(event) {
      console.log("action...", event);
    },
  },
};
</script>
<style></style>
