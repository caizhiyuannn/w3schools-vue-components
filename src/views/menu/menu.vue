<template>
  <div class="menu">
    <h3>菜单示例(menu)</h3>
    <hr />
    <w3c-menu>
      <w3c-menu-item @click="action">item1</w3c-menu-item>
      <w3c-menu-item>item1</w3c-menu-item>
      <w3c-menu-item>item1</w3c-menu-item>
    </w3c-menu>

    <h3>响应式菜单示例(responsive top navigation)</h3>
    <hr />
    <w3c-menu class="responsive-menu" :class="{active: menuActive}">
      <w3c-menu-item @click="action" class="menu-item">item1</w3c-menu-item>
      <w3c-menu-item class="menu-item">item1</w3c-menu-item>
      <w3c-menu-item class="menu-item">item1</w3c-menu-item>
      <div class="menu-icon" @click="menuActive = !menuActive">
        <span class="material-icons">menu</span>
      </div>
    </w3c-menu>

    <h3>responsive top navigation with icons example</h3>
    <hr />
    <w3c-menu>
      <w3c-menu-item @click="action">
        <span class="material-icons menu-item-icon">bookmark</span>
        <span>item1</span>
      </w3c-menu-item>
      <w3c-menu-item>
        <span class="material-icons menu-item-icon">extension</span>
        <span>item1</span>
      </w3c-menu-item>
      <w3c-menu-item>
        <span class="material-icons menu-item-icon">favorite</span>
        <span>item1</span>
      </w3c-menu-item>
    </w3c-menu>
  </div>
</template>

<script>
export default {
  name: 'ExampleMenu',
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    action() {
      console.log('click menu item1');
    }
  }
};
</script>

<style lang="scss" scoped>
.responsive-menu {
  display: flex;
}

.responsive-menu .menu-icon {
  margin-left: auto;
  display: none;
}

.menu-item-icon {
  padding: 0 4px;
}

@media screen and (max-width: 600px) {
  .responsive-menu .menu-item:not(:first-child) {
    display: none;
  }
  .responsive-menu .menu-icon {
    margin-left: auto;
    display: flex;
    padding: 14px 16px;
    cursor: pointer;
  }

  .responsive-menu.active {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .responsive-menu.active .menu-item {
    display: block;
  }
  .responsive-menu.active .menu-icon {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>