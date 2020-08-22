<template>
  <div class="button-group">
    <h3>按钮组(button group)</h3>
    <w3c-button-group class="button-group__item">
      <w3c-button type="success">button1</w3c-button>
      <w3c-button type="success">button2</w3c-button>
      <w3c-button type="success">button3</w3c-button>
    </w3c-button-group>
    <w3c-button-group class="button-group__item">
      <w3c-button type="success">button1</w3c-button>
      <w3c-button type="warning">button2</w3c-button>
      <w3c-button type="success">button3</w3c-button>
    </w3c-button-group>
    <w3c-button-group class="button-group__item">
      <w3c-button type="warning">上一页</w3c-button>
      <w3c-button type="warning">下一页</w3c-button>
    </w3c-button-group>
  </div>
</template>

<script>
export default {
  name: "ExampleButtonGroup",
};
</script>

<style lang="scss" scoped>
.button-group__item {
  float: left;
  margin: 8px;
}
.button-group::after {
  content: "";
  display: block;
  clear: both;
}
</style>
