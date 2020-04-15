<template>
  <div class="w3c__tabs" :class="{[`w3c__tabs_${position}`]: true}">
    <div class="w3c__tabs_nav" :class="{[`w3c__tabnav_${position}`]: true}">
      <button
        class="w3c__tab_button"
        v-for="(vnode, index) of panels"
        :key="index"
        @click="actionBehavior === 'click' ? currentName = vnode.name: null"
        @mouseover="actionBehavior === 'mouseover' ? currentName = vnode.name: null"
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
    },
    position: {
      default: 'top',
      type: String
    },
    actionBehavior: {
      default: 'click',
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

        // this.panels 赋值会触发更新，必须做判断，否则将会触发循环触发vue生命周期
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
$w3c__tab_border: 1px solid #ccc;

.w3c__tabs {
  display: flex;
  flex-direction: column;
}
.w3c__tabs_nav {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  background-color: #f1f1f1;
}

.w3c__tabs_left {
  flex-direction: row;
}
.w3c__tabs_top {
  flex-direction: column;
}

.w3c__tabs_bottom {
  flex-direction: column-reverse;
}
.w3c__tabs_right {
  flex-direction: row-reverse;
}

.w3c__tabnav_top,
.w3c__tabnav_bottom {
  flex-direction: row;
  border: $w3c__tab_border;
}

.w3c__tabnav_left,
.w3c__tabnav_right {
  flex-direction: column;
  border: $w3c__tab_border;
}

.w3c__tabnav_top {
  border-bottom: none;
}
.w3c__tabnav_bottom {
  border-top: none;
}
.w3c__tabnav_left {
  border-right: none;
}
.w3c__tabnav_right {
  border-left: none;
}

.w3c__tab_button {
  background-color: inherit;
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
  border: $w3c__tab_border;
  // border-top: none;
}
</style>