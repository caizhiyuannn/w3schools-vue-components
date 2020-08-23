<template>
  <div class="carousel" :style="{ width, height }">
    <div class="carousel__container" ref="container">
      <slot></slot>
    </div>
    <w3c-button class="carousel__button--prev" @click="prev">
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </w3c-button>
    <w3c-button class="carousel__button--next" @click="next">
      <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </w3c-button>
  </div>
</template>

<script>
export default {
  name: "w3cCarousel",
  props: {
    width: {
      type: String,
      default: "400px",
    },
    height: {
      type: String,
      default: "200px",
    },
  },
  data() {
    return {
      items: [],
      rotateAngle: 0,
    };
  },
  methods: {
    calcItems() {
      this.items = this.$children.filter(
        (child) => child.$options.name === "w3cCarouselItem"
      );
    },
    updatePositions() {
      this.items.forEach((child) => child.setPosition());
    },
    setTransform() {
      const tz =
        Math.round(this.$el.clientWidth / 2) /
        Math.tan(Math.PI / this.items.length);
      this.$refs.container.style.transform = `translateZ(-${tz}px)`;
    },
    rotateY(angle) {
      const tz =
        Math.round(this.$el.clientWidth / 2) /
        Math.tan(Math.PI / this.items.length);
      this.$refs.container.style.transform = `translateZ(-${tz}px) rotateY(${angle}deg)`;
    },
    next() {
      const theta = Math.round(360 / this.items.length);
      this.rotateAngle -= theta;
      this.rotateY(this.rotateAngle);
    },
    prev() {
      const theta = Math.round(360 / this.items.length);
      this.rotateAngle += theta;
      this.rotateY(this.rotateAngle);
    },
  },
  mounted() {
    this.calcItems();
    this.setTransform();
    this.updatePositions();
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  overflow: hidden;
  perspective: 1000px;
  box-sizing: border-box;
}

.carousel__container {
  position: absolute;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
  box-sizing: border-box;
}

.carousel__button--prev {
  position: absolute;
  top: 50%;
  left: 8px;
  padding: 16px 10px;
  background-color: transparent;
  color: white;
  transform: translateY(-50%);
  &:hover {
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
}
.carousel__button--next {
  position: absolute;
  top: 50%;
  right: 8px;
  background-color: transparent;
  color: white;
  padding: 16px 10px;
  transform: translateY(-50%);
  &:hover {
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
}
</style>
