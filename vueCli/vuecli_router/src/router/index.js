//1.引入vue
import Vue from "vue"
//2.引入vue-router
import VueRouter from "vue-router";

//3.vue使用VueRouter插件
Vue.use(VueRouter)
//6.引入组件
import Home from "../views/Home";
import About from "../views/About";
import Mine from "../components/Mine";
//5.创建routes数组，里面包含router对象
const routes=[
    {
        path:"/home",
        component:Home
    },{
        path:"/about",
        component:About
    },


]
//4.创建一个VueRouter实例
const router=new VueRouter({
    routes

})
export default router;
