<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "w3cButtonGroup",
};
</script>

<style lang="scss" scoped>
.button-group {
  & button:not(:first-child) {
    border-left: 1px solid white;
  }
  & button:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  & button:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}
</style>
