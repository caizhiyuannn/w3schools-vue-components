<template>
  <div class="sidenav">
    <h3>侧边栏+内容遮罩(sidenav push opacity)</h3>
    <hr />
    <div class="content">
      <w3c-menu class="menu" :class="{ 'menu-width': openMenuActive }">
        <div>
          <span
            class="material-icons menu-button"
            role="button"
            @click="openMenu()"
            >close</span
          >
        </div>
        <w3c-menu-item>menu1</w3c-menu-item>
        <w3c-menu-item>menu2</w3c-menu-item>
        <w3c-menu-item>menu3</w3c-menu-item>
      </w3c-menu>
      <main :class="{ 'main-left': openMenuActive }">
        <div>
          <span
            class="material-icons menu-button"
            role="button"
            @click="openMenu()"
            >menu</span
          >
        </div>
        <div class="right">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo odio
          cum nam repellendus ipsum ullam magnam accusamus non. Perferendis sint
          quaerat debitis fugit assumenda ad in odio cum quos veniam.
          Dignissimos ab corporis dolorem mollitia enim consequuntur praesentium
          cumque placeat deserunt, illo quisquam? Omnis repudiandae iste
          doloribus maiores, quod, dignissimos adipisci sapiente fugiat
          doloremque laboriosam amet ab. Nisi consectetur harum saepe voluptates
          voluptatum modi illum reiciendis magni non veritatis vero repellendus
          eligendi eum, maxime quam pariatur ab rem placeat praesentium
          explicabo. Optio, assumenda quibusdam eius voluptatem alias officia
          rem molestiae error eum. Obcaecati autem porro, eveniet provident,
          consequuntur quaerat id expedita quo, nihil fuga repellat voluptate
          sint possimus impedit officia rerum! Quidem modi illo omnis incidunt
          natus nemo quisquam molestias! Magni tempora quaerat sequi, commodi
          vitae deserunt porro.
        </div>
      </main>
    </div>
    <div :class="{ wrapper: openMenuActive }" @click="openMenu()"></div>
  </div>
</template>

<script>
import MenuItem from "packages/menu/menu-item";
import Menu from "packages/menu/menu";
export default {
  name: "sidenav-push-opacity",
  components: {
    "w3c-menu": Menu,
    "w3c-menu-item": MenuItem,
  },
  data() {
    return {
      openMenuActive: false,
    };
  },
  methods: {
    openMenu() {
      this.openMenuActive = !this.openMenuActive;
    },
  },
};
</script>

<style lang="scss" scoped>
.sidenav {
  position: relative;
}
.content {
  display: flex;
  flex-direction: row;
  position: relative;
  height: 400px;
}
.menu {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  width: 0;
  transition: 0.5s;
  div:nth-of-type(1) {
    display: flex;
    justify-content: flex-end;
    padding: 14px 16px;
    &:hover {
      color: #ddd;
    }
  }
  material-icons {
    display: flex;
  }
}

.menu-width {
  width: 150px;
}
main {
  transition: margin-left 0.5s;
  padding: 16px;
  overflow: auto;
}
.menu-button {
  cursor: pointer;
}
.main-left {
  margin-left: 150px;
}

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
  z-index: 1000;
}
</style>
