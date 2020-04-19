<template>
  <div class="frame">
    <iframe ref="frame" frameborder="0">
      <slot></slot>
    </iframe>
  </div>
</template>

<script>
import VueFrame from 'Vue';
export default {
  name: 'w3c-frame',
  data() {
    return {
      vm: null
    };
  },
  beforeUpdate() {
    this.vm.children = Object.freeze(this.$slots.default);
  },
  mounted() {
    const children = this.$slots.default;
    const dom = document.createElement('div');
    dom.id = 'appid';

    const framDocument = this.$refs.frame.contentWindow.document;
    framDocument.body.appendChild(dom);
    document.head.childNodes.forEach(n =>
      framDocument.head.appendChild(n.cloneNode(true))
    );

    const vm = new VueFrame({
      data() {
        return {
          children: Object.freeze(children)
        };
      },
      render(h) {
        return h('div', this.children);
      }
    });
    vm.$mount(dom);

    // this.vm = vm;
  }
};
</script>

<style lang="scss" scoped>
</style>