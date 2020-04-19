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
  </div>
</template>

<script>
export default {
  name: 'menu-side-example',
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="scss" scoped>
.menu-wrapper {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
}
.menu {
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