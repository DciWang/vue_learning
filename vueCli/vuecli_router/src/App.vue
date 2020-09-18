<template>
    <div id="app">
        <!--
        to:用于指定跳转的路径
        tag:用于指定渲染成什么样式，比如 渲染成<a>或者<li>或者<button>等
        replace:不会留下history记录，指定history的情况下，后退键不会返回到上一个页面中
        active-class: 将自身本来的样式绑定给 ** |如：active-class="active"
        -->
        <router-link to="/home" tag="button"   active-class="active" replace> 首页</router-link> |
        <router-link to="/about" tag="button"  active-class="active" replace> 关于</router-link>
        <router-view> </router-view>
    </div>
</template>
<script>
    export default {
        name :'App'
    }
</script>
<style>
    .active{
        color: red;
    }
</style>