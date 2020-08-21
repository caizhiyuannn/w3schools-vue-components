<template>
  <div class="slide-down" ref="slide">
    <h3>滚动激活菜单(slide down on scroll)</h3>
    <hr />
    <w3cmenu class="menu" :class="{ 'menu-active': menuActive }">
      <menu-item>menu1</menu-item>
      <menu-item>menu2</menu-item>
      <menu-item>menu3</menu-item>
    </w3cmenu>
    <div class="content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto
        optio iure. Voluptas labore distinctio est eligendi sit esse cumque
        saepe modi excepturi vitae eum, quam architecto tenetur culpa quaerat
        earum, accusamus aperiam quasi laboriosam fugiat doloremque dolore.
        Reprehenderit sequi sit, magni illo quibusdam hic, praesentium commodi
        adipisci ullam nam natus, dolorum nisi. Vitae architecto, dolorum
        dignissimos labore fuga iste, sunt esse eveniet reprehenderit quod nemo
        consequuntur aspernatur quas dicta deleniti! Architecto est facere amet
        explicabo facilis adipisci voluptas repellendus dolorum nostrum.
        Dignissimos dolores accusamus, enim commodi perferendis, veniam
        molestias, sit tempora omnis velit consequatur rerum. Sit iusto debitis
        repellat, magni nostrum iure expedita eum explicabo in totam accusantium
        minima ad ipsum dignissimos, nemo architecto iste quod nobis veniam
        dolor earum autem, dolores illo! Suscipit, facilis officiis! Labore?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa neque
        exercitationem omnis sequi consequuntur id esse laborum soluta. Cumque
        minus rerum a quae architecto dolor possimus, reprehenderit dignissimos
        fuga eaque adipisci porro sint voluptatum atque excepturi vitae.
        Deserunt tempore voluptatibus error eius laborum quos excepturi sint ut
        suscipit labore, praesentium velit blanditiis rerum veniam consequuntur
        possimus consequatur, illo ea accusamus quam! Eum, tenetur earum itaque
        quibusdam voluptates, eius perspiciatis nam illum quod ex esse dolorum
        sit. Quia modi nemo saepe repellendus quae. Qui vel, provident
        voluptatibus labore cum maiores, minus animi itaque temporibus veritatis
        officiis. At eveniet, recusandae eaque aliquid debitis illum natus
        voluptatum cum aspernatur illo nihil quisquam esse itaque alias optio
        consectetur vitae. Adipisci ducimus officiis eaque enim!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa neque
        exercitationem omnis sequi consequuntur id esse laborum soluta. Cumque
        minus rerum a quae architecto dolor possimus, reprehenderit dignissimos
        fuga eaque adipisci porro sint voluptatum atque excepturi vitae.
        Deserunt tempore voluptatibus error eius laborum quos excepturi sint ut
        suscipit labore, praesentium velit blanditiis rerum veniam consequuntur
        possimus consequatur, illo ea accusamus quam! Eum, tenetur earum itaque
        quibusdam voluptates, eius perspiciatis nam illum quod ex esse dolorum
        sit. Quia modi nemo saepe repellendus quae. Qui vel, provident
        voluptatibus labore cum maiores, minus animi itaque temporibus veritatis
        officiis. At eveniet, recusandae eaque aliquid debitis illum natus
        voluptatum cum aspernatur illo nihil quisquam esse itaque alias optio
        consectetur vitae. Adipisci ducimus officiis eaque enim!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa neque
        exercitationem omnis sequi consequuntur id esse laborum soluta. Cumque
        minus rerum a quae architecto dolor possimus, reprehenderit dignissimos
        fuga eaque adipisci porro sint voluptatum atque excepturi vitae.
        Deserunt tempore voluptatibus error eius laborum quos excepturi sint ut
        suscipit labore, praesentium velit blanditiis rerum veniam consequuntur
        possimus consequatur, illo ea accusamus quam! Eum, tenetur earum itaque
        quibusdam voluptates, eius perspiciatis nam illum quod ex esse dolorum
        sit. Quia modi nemo saepe repellendus quae. Qui vel, provident
        voluptatibus labore cum maiores, minus animi itaque temporibus veritatis
        officiis. At eveniet, recusandae eaque aliquid debitis illum natus
        voluptatum cum aspernatur illo nihil quisquam esse itaque alias optio
        consectetur vitae. Adipisci ducimus officiis eaque enim!
      </p>
    </div>
  </div>
</template>

<script>
import Menu from "packages/menu/menu";
import MenuItem from "packages/menu/menu-item";

export default {
  name: "slide-down-on-scroll-example",
  components: {
    w3cmenu: Menu,
    "menu-item": MenuItem,
  },
  data() {
    return {
      menuActive: false,
    };
  },
  mounted() {
    this.$refs.slide.addEventListener("scroll", (ev) => {
      if (ev.target.scrollTop > 20) {
        this.menuActive = true;
      } else {
        this.menuActive = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.slide-down {
  height: 400px;
  overflow: auto;
  position: relative;
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  transform: translateY(-100%);
  transition: transform 0.5s;
}

.menu-active {
  transform: translateY(0);
}
</style>
