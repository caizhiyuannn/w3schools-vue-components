<template>
  <div class="example-progres">
    <h3>进度条(progress)</h3>
    <w3c-progress
      :percent="percent"
      class="example-progress__item"
    ></w3c-progress>
    <w3c-progress
      :percent="percent"
      progress-color="red"
      class="example-progress__item"
    ></w3c-progress>
    <div class="example-progress__button--action">
      <w3c-button @click="increase">increase</w3c-button>
      <w3c-button @click="decrease">decrease</w3c-button>
      <w3c-button type="success" @click="autoIncrease">autoIncrease</w3c-button>
      <w3c-button type="warning" @click="percent = 0">reset</w3c-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExampleProgress",
  data() {
    return {
      percent: 20,
    };
  },

  methods: {
    increase() {
      this.percent += 10;
      this.percent = this.percent > 100 ? 100 : this.percent;
    },
    decrease() {
      this.percent -= 10;
      this.percent = this.percent < 0 ? 0 : this.percent;
    },
    autoIncrease() {
      let interval = setInterval(() => {
        this.percent++;
        if (this.percent > 100) clearInterval(interval);
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.example-progress__item {
  margin: 8px 0;
}
.example-progress__button--action {
  margin-top: 8px;
  & button {
    margin: 0 4px;
  }
}
</style>
