<template>
  <div class="example-carousel">
    <h3>轮播图(carousel)</h3>
    <w3c-carousel>
      <w3c-carousel-item class="example-carousel__item">
        <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" />
      </w3c-carousel-item>
      <w3c-carousel-item class="example-carousel__item">
        <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
      </w3c-carousel-item>

      <w3c-carousel-item class="example-carousel__item">
        <img src="https://www.w3schools.com/howto/img_lights_wide.jpg" />
      </w3c-carousel-item>
      <w3c-carousel-item class="example-carousel__item">
        <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" />
      </w3c-carousel-item>
    </w3c-carousel>
  </div>
</template>

<script>
export default {
  name: "ExampleCarousel",
};
</script>

<style lang="scss" scoped>
.example-carousel__item {
  background-color: white;
  box-sizing: border-box;

  & img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
}
</style>
