<template>
  <div class="app">
    <w3c-card v-for="(comp, index) in comps" :key="index">
      <component :is="comp" />
    </w3c-card>
  </div>
</template>

<script>
import Card from "./components/card";
import Tabs from "./views/tabs";
import Accordion from "./views/accordion";
import Menu from "./views/menu/menu.vue";
import MenuSearch from "./views/menu/menu-search";
import MenuSide from "./views/menu/menu-side";
import MenuSidePush from "./views/menu/sidenav-push";
import MenuSidePushOpacity from "./views/menu/sidenav-push-opacity";
import MenuSlideDown from "./views/menu/slide-down";
import ExamplePagination from "./views/pagination";

export default {
  name: "app",
  components: {
    [MenuSlideDown.name]: MenuSlideDown,
    [MenuSidePushOpacity.name]: MenuSidePushOpacity,
    [MenuSidePush.name]: MenuSidePush,
    [Card.name]: Card,
    [MenuSide.name]: MenuSide,
    "menu-search-example": MenuSearch,
    "menu-example": Menu,
    "tabs-example": Tabs,
    "accordion-example": Accordion,
    ExamplePagination,
  },
  data() {
    return {
      comps: [
        Accordion.name,
        Tabs.name,
        Menu.name,
        MenuSearch.name,
        MenuSide.name,
        MenuSidePush.name,
        MenuSidePushOpacity.name,
        MenuSlideDown.name,
        ExamplePagination.name,
      ],
    };
  },
  methods: {
    action(event) {
      console.log("action...", event);
    },
  },
};
</script>
<style></style>
