<template>
  <div class="menu">
    <w3c-menu>
      <w3c-menu-item @click="action">item1</w3c-menu-item>
      <w3c-menu-item>item1</w3c-menu-item>
      <w3c-menu-item>item1</w3c-menu-item>
    </w3c-menu>
  </div>
</template>

<script>
export default {
  name: 'menu-example',
  methods: {
    action() {
      console.log('click menu item1');
    }
  }
};
</script>

<style>
</style>