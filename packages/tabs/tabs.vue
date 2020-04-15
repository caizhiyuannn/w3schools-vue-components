<template>
  <div class="w3c__tabs">
    <div class="w3c__tabs_nav">
      <button
        class="w3c__tab_button"
        v-for="(vnode, index) of panels"
        :key="index"
        @click="currentName = vnode.name"
        :class="{'is-active': currentName === vnode.name}"
      >{{ vnode.name }}</button>
    </div>
    <div class="w3c__tabs_panel">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'w3cTabs',
  props: {
    activeName: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      panels: [],
      currentName: ''
    };
  },
  methods: {
    calcPanelInstances(isForceUpdate = false) {
      if (this.$slots.default) {
        const panelSlots = this.$slots.default.filter(
          vn => vn.componentOptions.Ctor.options.name === 'w3cTabPanel'
        );
        const panes = panelSlots.map(
          ({ componentInstance }) => componentInstance
        );

        const panesChanged = !(
          panes.length === this.panels.length &&
          panes.every((pane, index) => pane === this.panels[index])
        );

        if (isForceUpdate || panesChanged) {
          this.panels = panes;
        }
      } else if (this.panels.length !== 0) {
        this.panels = [];
      }
    }
  },
  created() {
    if (!this.currentName) {
      this.currentName = this.activeName;
    }
  },
  mounted() {
    this.calcPanelInstances();
  },
  updated() {
    this.calcPanelInstances();
  }
};
</script>

<style lang="scss" scoped>
.w3c__tabs_nav {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}
.w3c__tab_button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 16px;
  transition: 0.3s;
  font-size: 17px;

  &:hover {
    background-color: #ccc;
  }
}

.is-active {
  background-color: #ccc;
}

.w3c__tabs_panel {
  display: block;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>