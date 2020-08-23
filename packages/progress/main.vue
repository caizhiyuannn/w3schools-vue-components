<template>
  <div class="progress">
    <div class="progress__container">
      <div
        id="progress__bar"
        ref="bar"
        :style="{ backgroundColor: progressColor }"
      ></div>
    </div>
    <div class="progress__percent">{{ realPercent }}%</div>
  </div>
</template>

<script>
export default {
  name: "w3cProgress",
  props: {
    percent: Number,
    progressColor: {
      type: String,
      default: "#4caf50",
    },
  },
  watch: {
    percent: function(val) {
      val = val >= 100 ? 100 : val;
      val = val < 0 ? 0 : val;
      this.renderProgress(val);
    },
  },
  computed: {
    realPercent: function() {
      if (this.percent > 100) return 100;
      else if (this.percent < 0) return 0;
      else return this.percent;
    },
  },
  methods: {
    renderProgress(val) {
      val = val > 100 ? 100 : val;
      val = val < 0 ? 0 : val;
      this.$refs.bar.style.width = val + "%";
    },
  },
  mounted() {
    this.renderProgress(this.percent);
  },
};
</script>
<style lang="scss" scoped>
.progress {
  width: 100%;
  display: flex;
  align-items: center;
}

.progress__container {
  width: 100%;
  height: 8px;
  background-color: #ddd;
}

#progress__bar {
  height: 100%;
}
.progress__percent {
  margin-left: 4px;
  min-width: 40px;
}
</style>
