<template>
    <div id="app">
        <!--
        to:用于指定跳转的路径
        tag:用于指定渲染成什么样式，比如 渲染成<a>或者<li>或者<button>等
        replace:不会留下history记录，指定history的情况下，后退键不会返回到上一个页面中
        active-class: 将自身本来的样式绑定给 ** |如：active-class="active"
        -->
        <router-link to="/home" tag="button"   active-class="active" replace> 首页</router-link> |
<!--        <button @click="aboutClick()" active-class="active">关于</button> |-->
        <router-link to="/about" tag="button"  active-class="active" replace> 关于</router-link> |
        <!--动态路由-->
        <router-link :to="'/user/'+userId" tag="button"   active-class="active" replace> 我的</router-link>  |
<!--        query  给路由传递参数（ router-link 标签形式）-->
        <!--<router-link :to="{path:'/profile',query:{id:'001',name:'DciWang',age:25}}" tag="button" active-class="active" replace>档案</router-link>-->
<!--        query  给路由传递参数（ router-link 代码形式）-->
        <button @click="profileClick()" >档案</button>
            <keep-alive>
                <router-view> </router-view>
            </keep-alive>


    </div>
</template>
<script>
    export default {
        name :'App',
        data(){
            return{
                userId:'001'
            }
        },
        methods:{

            // aboutClick(){
            //     //通过代码的方式修改路由  vue- router
            //     //push =>pushState
            //     //this.$router.push('/home')
            //    this.$router.replace('about')
            //
            // }

            profileClick(){
                this.$router.replace({
                    path:'/profile',
                    query:{id:'001',name:'DciWang',age:25}
                })
            }
        }
    }
</script>
<style>
    .active{
        color: red;
    }
</style>
