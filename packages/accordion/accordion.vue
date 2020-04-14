<template>
  <div class="w3c__accordion">
    <button class="w3c__accordion_button" :class="{ 'is-active': isActive}" @click="handleClick()">
      <slot name="title">{{title}}</slot>
    </button>
    <div class="w3c__accordion_panel" :class="{'show': isActive}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'w3cAccordion',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    handleClick: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
.w3c__accordion {
  width: 100%;
}

.w3c__accordion_button {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
  &:hover {
    background-color: #ccc;
  }
}

.is-active {
  background-color: #ccc;
}

.w3c__accordion_panel {
  padding: 0 8px;
  display: none;
  background-color: white;
  overflow: hidden;
}

.show {
  display: block;
}
</style>