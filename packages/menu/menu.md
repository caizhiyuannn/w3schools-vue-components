# 菜单实现集合

菜单样式布局比较好处理， 通过 css 进行布局即可。

菜单点击状态， 通过 menu 容器进行集中收集 menu-item 各菜单项来进行管理。思路跟 tabs 差不过， 通过 `this.$slots.default` 获取子组件进行编排，逐一添加 index 进行索引标识。 `activeIndex` 保存点击状态， menu-item UI 组件判断父组件 `activeIndex === index` 则改变 css 点击样式。

## 顶部菜单

单纯顶部菜单比较好处理， 通过 css 进行布局即可。

## 响应式顶部菜单

知识点：

- 利用 `@media` 媒体查询，动态改变组件 css 完成隐藏和显示
- 使用 flexbox 切换布局
- 菜单 右边置顶 使用 `position` 定位

## 图标菜单

使用 Google material design icons
