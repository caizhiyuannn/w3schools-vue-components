<template>
  <div class="carousel-item" :style="{ width, height }" ref="item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "w3cCarouselItem",
  data() {
    return {
      width: this.$parent.width,
      height: this.$parent.height,
    };
  },
  methods: {
    setTransform(angle, dist) {
      console.log(angle, dist);
      this.$refs.item.style.transform = `rotateY(${angle}deg) translateZ(${dist}px)`;
    },
    setPosition() {
      const len = this.$parent.items.length;
      const w = this.$refs.item.clientWidth;
      const idx = this.$parent.items.indexOf(this);
      const theta = Math.round(360 / len);
      const tz = Math.round(w / 2) / Math.tan(Math.PI / len);
      this.setTransform(idx * theta, tz);
    },
  },
  created() {
    this.$parent && this.$parent.updatePositions();
  },
};
</script>

<style lang="scss" scoped>
.carousel-item {
  position: absolute;
  border: 1px solid blue;
  overflow: hidden;
}
</style>
