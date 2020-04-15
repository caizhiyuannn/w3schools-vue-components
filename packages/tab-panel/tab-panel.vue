<template>
  <div class="w3c__tab_panel" v-if="loaded || active" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'w3cTabPanel',
  props: {
    name: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      index: null,
      loaded: false
    };
  },
  computed: {
    active() {
      const active = this.$parent.currentName === (this.name || this.index);
      if (active) {
        this.loaded = true;
      }
      return active;
    }
  }
};
</script>

<style>
</style>