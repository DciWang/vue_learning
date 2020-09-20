//1.引入vue
import Vue from "vue"
//2.引入vue-router
import VueRouter from "vue-router";

//3.vue使用VueRouter插件
Vue.use(VueRouter)
//6.引入组件(非懒加载方式)
// import Home from "../views/Home";
// import About from "../views/About";
// import User from "../views/User";
//6.引入组件(懒加载方式)
const Home=() => import("../views/Home")
const About=() => import("../views/About")
const User=() => import("../views/User")
const HomeNews = () => import ("../components/HomeNews");
const HomeMessage = () => import ("../components/HomeMessage");
const Profile=() => import("../views/Profile")
//5.创建routes数组，里面包含router对象
const routes = [
    {
        path: '/',
        //重定向页面
        redirect: '/home'
    },
    {
        path: "/home",
        component: Home,
        //元数据（描述数据的数据）
        meta:{
            title:'主页'
        },
        //路由嵌套
        children:[
            // {
            //     path: '',
            //     redirect:'news'
            // },
            {
                path:'news',
                component:HomeNews
            },
            {
                path:'messages',
                component:HomeMessage
            },
        ]
    },
    {
        path: "/about",
        component: About,
        meta:{
            title:'关于'
        },
    },
    /*动态路由*/
    {
        path: "/user/:userId",
        component: User,
        meta:{
            title:'我的'
        },
    },
    {
        path: "/profile",
        component: Profile,
        meta:{
            title:'档案'
        },
    },



];
//4.创建一个VueRouter实例
const router = new VueRouter({
    routes,
    // 默认hash模式，改为h5的history模式
    mode:'history',
     linkActiveClass:'active'
})

//全局路由导航
//前置钩子（守卫）（前置回调）
router.beforeEach(((to, from, next) => {
    //从from跳转到to
    document.title=to.matched[0].meta.title
    //进入下一步
    next()
}))

export default router;
