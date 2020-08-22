<template>
  <div class="menu-side">
    <h3>Side navigation example</h3>
    <hr />
    <div class="menu-control" @click="show = !show">
      <span class="material-icons">menu</span>
    </div>
    <transition name="fade">
      <w3c-menu class="menu" v-show="show">
        <div class="close" @click="show = !show">
          <span class="material-icons">close</span>
        </div>
        <w3c-menu-item>menu1</w3c-menu-item>
        <w3c-menu-item>menu2</w3c-menu-item>
        <w3c-menu-item>menu3</w3c-menu-item>
        <w3c-menu-item>menu4</w3c-menu-item>
      </w3c-menu>
    </transition>
    <div class="content">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
      aperiam voluptatum ipsa amet? Quos eligendi rerum a cumque ipsa, ex quae
      delectus? Error consectetur illum maiores eius fugit iste neque.
    </div>
  </div>
</template>

<script>
export default {
  name: "ExampleMenuSide",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-side {
  position: relative;
  height: 400px;
  width: 100%;
  overflow: hidden;
}
.menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 250px;
}

.close {
  padding: 14px 16px;
  margin-left: auto;
  .material-icons {
    cursor: pointer;
    &:hover {
      color: #ddd;
    }
  }
}
.menu-control {
  .material-icons {
    cursor: pointer;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: width 0.5s cubic-bezier(0.42, 0, 0.58, 1);
}

.fade-enter,
.fade-leave-to {
  width: 0;
}
</style>
