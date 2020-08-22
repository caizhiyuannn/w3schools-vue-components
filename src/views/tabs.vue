<template>
  <div class="tabs">
    <h3>标签示例(tabs)</h3>
    <hr />
    <h4>position = left</h4>
    <w3c-tabs activeName="menu1" position="left">
      <w3c-tab-panel name="menu1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 1</w3c-tab-panel>
      <w3c-tab-panel name="menu2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 2</w3c-tab-panel>
      <w3c-tab-panel name="menu3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 3</w3c-tab-panel>
    </w3c-tabs>
    <h4>position = right</h4>
    <w3c-tabs activeName="menu1" position="right">
      <w3c-tab-panel name="menu1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 1</w3c-tab-panel>
      <w3c-tab-panel name="menu2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 2</w3c-tab-panel>
      <w3c-tab-panel name="menu3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 3</w3c-tab-panel>
    </w3c-tabs>
    <h4>position = bottom</h4>
    <w3c-tabs activeName="menu1" position="bottom">
      <w3c-tab-panel name="menu1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 1</w3c-tab-panel>
      <w3c-tab-panel name="menu2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 2</w3c-tab-panel>
      <w3c-tab-panel name="menu3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 3</w3c-tab-panel>
    </w3c-tabs>
    <h4>position = top</h4>
    <w3c-tabs activeName="menu1" position="top">
      <w3c-tab-panel name="menu1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 1</w3c-tab-panel>
      <w3c-tab-panel name="menu2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 2</w3c-tab-panel>
      <w3c-tab-panel name="menu3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 3</w3c-tab-panel>
    </w3c-tabs>

    <h4>激活行为，鼠标移动示例(actionBehavior)</h4>
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
  name: 'ExampleTabs'
};
</script>

<style>
</style>