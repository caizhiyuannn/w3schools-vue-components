<template>
  <div class="tabs">
    <h3>tabs examples</h3>
    <hr />
    <w3c-tabs activeName="menu1" position="left">
      <w3c-tab-panel name="menu1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 1</w3c-tab-panel>
      <w3c-tab-panel name="menu2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 2</w3c-tab-panel>
      <w3c-tab-panel name="menu3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 3</w3c-tab-panel>
    </w3c-tabs>
    <w3c-tabs activeName="menu1" position="right">
      <w3c-tab-panel name="menu1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 1</w3c-tab-panel>
      <w3c-tab-panel name="menu2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 2</w3c-tab-panel>
      <w3c-tab-panel name="menu3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 3</w3c-tab-panel>
    </w3c-tabs>
    <w3c-tabs activeName="menu1" position="bottom">
      <w3c-tab-panel name="menu1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 1</w3c-tab-panel>
      <w3c-tab-panel name="menu2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 2</w3c-tab-panel>
      <w3c-tab-panel name="menu3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 3</w3c-tab-panel>
    </w3c-tabs>
    <w3c-tabs activeName="menu1" position="top">
      <w3c-tab-panel name="menu1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 1</w3c-tab-panel>
      <w3c-tab-panel name="menu2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 2</w3c-tab-panel>
      <w3c-tab-panel name="menu3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 3</w3c-tab-panel>
    </w3c-tabs>

    <h4>actionBehavior</h4>
    <hr />
    <w3c-tabs activeName="menu1" position="top" actionBehavior="mouseover">
      <w3c-tab-panel name="menu1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 1</w3c-tab-panel>
      <w3c-tab-panel name="menu2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 2</w3c-tab-panel>
      <w3c-tab-panel name="menu3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 3</w3c-tab-panel>
    </w3c-tabs>
  </div>
</template>

<script>
export default {
  name: 'tabs-example'
};
</script>

<style>
</style>