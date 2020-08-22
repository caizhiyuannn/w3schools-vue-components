<template>
  <div class="example-button">
    <h3>按钮(button)</h3>
    <w3c-button type="success" @click="clickButton">success</w3c-button>
    <w3c-button type="warning"  @click="clickButton">warning</w3c-button>
    <w3c-button type="danger">danger</w3c-button>
    <w3c-button type="default" disabled>default</w3c-button>
  </div>
</template>

<script>
export default {
  name: "ExampleButton",
  methods: {
    clickButton(e) {
      console.log("click", e);
    },
  },
};
</script>

<style></style>
