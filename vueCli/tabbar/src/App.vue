<template>
  <div id="app">
  <tab-bar>
    <tab-bar-item>
      <!--根据插槽名字将内容插进去-->
      <img slot="item-icon" src="./assets/img/tabbar/12库存-线性.png" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/12库存.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-icon" src="./assets/img/tabbar/30应用程序-线性.png" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/30应用程序.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-icon" src="./assets/img/tabbar/05采购-线性.png" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/05采购.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-icon" src="./assets/img/tabbar/224用户-线性.png" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/224用户.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./views/TabBar";
  import TabBarItem from "./views/TabBarItem";
  export default {
    name:'Vue',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
@import "./assets/css/base.css";

</style>
