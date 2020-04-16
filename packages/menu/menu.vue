<template>
  <div class="w3c__menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'w3cMenu',
  data() {
    return {
      menuItems: [],
      activeIndex: -1
    };
  },
  methods: {
    calcComponentInstance() {
      if (this.$slots.default) {
        const menuItemSlots = this.$slots.default.filter(
          vm => vm.componentOptions && vm.componentOptions.Ctor.options.name === 'w3cMenuItem'
        );

        const items = menuItemSlots.map(({ componentInstance }, index) => {
          componentInstance.index = index;
          return componentInstance;
        });

        const itemsChanged = !(
          items.length === this.menuItems.length &&
          items.every((node, index) => node === this.menuItems[index])
        );

        if (itemsChanged) {
          this.menuItems = items;
        }
      } else if (this.menuItems.length !== 0) {
        this.menuItems = [];
      }
    }
  },
  mounted() {
    this.calcComponentInstance();
  },
  updated() {
    this.calcComponentInstance();
  }
};
</script>

<style lang="scss" scoped>
.w3c__menu {
  display: flex;
  overflow: hidden;
  background: #333;
  color: white;
}
</style>