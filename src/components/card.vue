<template>
  <div class="w3c-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'w3c-card'
};
</script>
<style lang="scss" scoped>
.w3c-card {
  margin: 16px;
  box-shadow: 0 4px 10px 0 rgba($color: #000000, $alpha: 0.2),
    0 4px 20px 0 rgba($color: #000000, $alpha: 0.19);
  padding: 8px;
}
</style>