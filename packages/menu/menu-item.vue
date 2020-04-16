<template>
  <div class="w3c__menu-item">
    <a
      :href="href"
      :class="{'w3c__menu-item-active': $parent.activeIndex === index}"
      @click="action($event)"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'w3cMenuItem',
  props: {
    href: {
      type: String
    }
  },
  data() {
    return {
      index: 0
    };
  },
  methods: {
    action(evt) {
      this.$parent.activeIndex = this.index;
      this.$emit('click', evt);
    }
  }
};
</script>

<style lang="scss" scoped>
.w3c__menu-item {
  display: flex;
}
.w3c__menu-item a {
  display: flex;
  padding: 14px 16px;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: #f2f2f2;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    color: black;
  }
}
.w3c__menu-item a.w3c__menu-item-active {
  background-color: #4caf50;
  color: white;
}
</style>