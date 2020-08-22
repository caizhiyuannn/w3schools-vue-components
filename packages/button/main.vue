<template>
  <button
    class="button"
    :class="[
      `button-${type}`,
      {
        'is-disabled': disabled,
      },
    ]"
    @click="$emit('click', $event)"
    :disabled="disabled || loading"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "w3cButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: Boolean,
  },
};
</script>
<style lang="scss" scoped>
@mixin button-type($type, $bgColor, $hbgColor, $abgColor) {
  .button-#{$type} {
    background-color: $bgColor;
    &:hover {
      background-color: $hbgColor;
    }
    &:active {
      background-color: $abgColor;
    }
  }
}

.button {
  border: none;
  color: white;
  padding: 12px 16px;
  cursor: pointer;
  outline: none;
}

@include button-type(success, #4caf50, #46a049, #179b19);
@include button-type(info, #2196f3, #0b7dda, #0860a8);
@include button-type(warning, #ff9800, #e68a00, #ad6902);
@include button-type(danger, #f44336, #da190b, #a12a21);
@include button-type(default, #e7e7e7, #ddd, #cac7c7);

.button-default {
  color: black;
}

.is-disabled {
  cursor: not-allowed;
  &,
  &:hover,
  &:focus {
    background-color: #cac7c7;
  }
}
</style>
