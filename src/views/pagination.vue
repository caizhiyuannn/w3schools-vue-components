<template>
  <div class="pagination">
    <h3>分页功能(pagination)</h3>
    <w3cPagination
      :page-count="20"
      :current-page="currentPage"
      @change="currentChange"
    />
  </div>
</template>

<script>
export default {
  name: "ExamplePagination",
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    currentChange(event) {
      console.log(event);
      this.currentPage = event;
    },
  },
};
</script>

<style></style>
