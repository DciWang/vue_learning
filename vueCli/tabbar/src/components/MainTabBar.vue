<template>
    <div>
        <tab-bar>
            <tab-bar-item link="/home" active-color="deeppink">
                <!--根据插槽名字将内容插进去-->
                <img slot="item-icon" src="../assets/img/tabbar/12库存-线性.png" alt="">
                <img slot="item-icon-active" src="../assets/img/tabbar/12库存.png" alt="">
                <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item link="/category" active-color="deeppink">
                <img slot="item-icon" src="../assets/img/tabbar/30应用程序-线性.png" alt="">
                <img slot="item-icon-active" src="../assets/img/tabbar/30应用程序.png" alt="">
                <div slot="item-text">分类</div>
            </tab-bar-item>
            <tab-bar-item link="/cart" active-color="deeppink">
                <img slot="item-icon" src="../assets/img/tabbar/05采购-线性.png" alt="">
                <img slot="item-icon-active" src="../assets/img/tabbar/05采购.png" alt="">
                <div slot="item-text">购物车</div>
            </tab-bar-item>
            <tab-bar-item link="/profile" active-color="deeppink">
                <img slot="item-icon" src="../assets/img/tabbar/224用户-线性.png" alt="">
                <img slot="item-icon-active" src="../assets/img/tabbar/224用户.png" alt="">
                <div slot="item-text">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import TabBar from "../components/tabbar/TabBar";
    import TabBarItem from "../components/tabbar/TabBarItem";

    export default {
        name: 'MainTabBar',
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>


<style scoped>

</style>