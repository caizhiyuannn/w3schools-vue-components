# 标签页实现

## 思路

- tab-panel： 实现面板内容， 通过 `$parent.currentName` 匹配面板名， 实现面板显示和隐藏。

- tabs：通过 flex-box css 样式完成导航位置定位 和 导航栏与面板排版布局。
  `this.$slots.default` 获取 tab-panel 内容，根据 tab-panel 指定 name 展示导航栏

- tabs props

  1. activeName：指定默认显示面板
  2. actionBehavior： 指定切换面板行为方式，`click` or `mouseover`
  3. position：指定导航栏方向位置， `left`, `right`, `top`, `bottom`

## 组件实现涉及知识点

- slot
- flex-box 盒子模型
- vue clss 绑定
- vue API：`vm.$parent`, `vm.$slots`

`vm.$slots` 可以用来筛选出 tab-panel 组件。
