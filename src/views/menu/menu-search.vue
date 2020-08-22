<template>
  <div class="menu-search">
    <h3>菜单搜索示例(menu search)</h3>
    <hr />
    <div class="menu-flex">
      <div class="left-side">
        <h2>Menu</h2>
        <input
          type="text"
          v-model="searchText"
          placeholder="Search.."
          title="Type in a category"
          id="search"
        />
        <w3c-menu class="menus">
          <w3c-menu-item v-for="(menu, index) of menuLists" :key="index">{{ menu.name }}</w3c-menu-item>
        </w3c-menu>
      </div>
      <div
        class="right-side"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, est accusantium. Quas dolore iusto esse? Unde aliquam est tempore, omnis perferendis ab delectus vel sequi consequuntur fuga deserunt aliquid voluptatum eveniet quaerat modi! Aperiam impedit in corrupti soluta animi iste aliquid est eveniet nesciunt sapiente temporibus, sunt, quod aliquam quam. Corporis et, eveniet itaque facilis tempore rerum quibusdam, illo atque similique maxime ratione laborum repellat quos odio quo molestiae? Facere perferendis consequatur voluptates, nulla, explicabo sint vitae eum, repellat facilis voluptate error exercitationem eveniet dolorem non veritatis ipsa. Dolorem dicta qui autem itaque quam fuga sunt, est culpa impedit eligendi necessitatibus officiis, ducimus, libero iste repudiandae in eos vero debitis voluptates! Fuga, cumque! Pariatur, distinctio vel modi corrupti sequi ad mollitia ipsa at, esse nesciunt voluptas provident accusamus.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExampleMenuSearch',
  data() {
    return {
      searchText: '',
      menus: [
        {
          name: 'javascript'
        },
        {
          name: 'python'
        },
        {
          name: 'SQL'
        },
        {
          name: 'Node.js'
        },
        {
          name: 'CSS'
        },
        {
          name: 'HTML'
        }
      ]
    };
  },
  computed: {
    menuLists: function() {
      return this.menus.filter(v =>
        v.name.toLowerCase().includes(this.searchText.toLowerCase().trim())
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.menu-flex {
  display: flex;
}
.left-side {
  flex: 35%;
  padding: 15px 0;
  background-color: #ddd;
  box-sizing: border-box;
}

.right-side {
  box-sizing: border-box;
  flex: 65%;
  padding: 15px;
}

#search {
  width: 100%;
  font-size: 18px;
  box-sizing: border-box;
  padding: 11px;
  border: 1px solid #ddd;
}

.menus {
  display: flex;
  flex-direction: column;
}
</style>