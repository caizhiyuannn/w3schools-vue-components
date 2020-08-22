<template>
  <div class="pagination">
    <ul @click="pageClick" class="pagination__container">
      <li v-if="pageCount > 0" :class="{ active: currentPage === 1 }">1</li>
      <li v-if="showPrevButton" id="prev" class="material-icons">
        more_horiz
      </li>
      <li
        v-for="page in pages"
        :key="page"
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </li>
      <li v-if="showNextButton" id="next" class="material-icons">
        more_horiz
      </li>
      <li v-if="pageCount > 1" :class="{ active: currentPage === pageCount }">
        {{ pageCount }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "w3cPagination",
  props: {
    currentPage: Number,
    pageCount: Number,
    showPageCount: {
      type: Number,
      default: 6,
    },
  },
  data() {
    return {
      showPrevButton: false,
      showNextButton: false,
    };
  },
  methods: {
    pageClick(event) {
      const target = event.target;
      if (target.tagName === "UL") return;
      let newPage = Number(target.textContent);
      const offset = Math.floor(this.showPageCount / 2);
      if (target.id === "prev") {
        newPage = this.currentPage - offset;
      }
      if (target.id === "next") {
        newPage = this.currentPage + offset;
      }

      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageCount) {
        newPage = this.pageCount;
      }

      if (newPage !== this.currentPage) {
        this.$emit("change", newPage);
      }
    },
  },
  computed: {
    pages() {
      const showPageCount = this.showPageCount;
      const halfPageCount = (showPageCount - 1) / 2;
      let showPrev = false;
      let showNext = false;

      if (this.pageCount > showPageCount) {
        if (this.currentPage > this.showPageCount - halfPageCount) {
          showPrev = true;
        }

        if (this.currentPage < this.pageCount - halfPageCount) {
          showNext = true;
        }
      }
      let data = [];

      if (showPrev && !showNext) {
        const startPage = this.pageCount - showPageCount + 2;
        for (let i = startPage; i < this.pageCount; i++) {
          data.push(i);
        }
      } else if (!showPrev && showNext) {
        for (let i = 2; i <= this.showPageCount; i++) {
          data.push(i);
        }
      } else if (showPrev && showNext) {
        const offset = Math.floor((this.showPageCount - 1) / 2);
        for (
          let i = this.currentPage - offset;
          i <= this.currentPage + offset;
          i++
        ) {
          data.push(i);
        }
      } else {
        for (let i = 2; i < this.pageCount - 1; i++) {
          data.push(i);
        }
      }

      this.showPrevButton = showPrev;
      this.showNextButton = showNext;

      return data;
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination__container {
  list-style: none;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
}

.pagination__container li {
  float: left;
  padding: 8px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  text-align: center;
}

.pagination__container li:hover:not(.active) {
  background-color: #ddd;
}

.pagination__icon {
  display: flex;
}

.active {
  background-color: dodgerblue;
  color: white;
}
</style>
