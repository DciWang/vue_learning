import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("../views/home/Home")
const Category = () => import("../views/category/Category")
const Cart = () => import("../views/cart/Cart")
const Profile = () => import("../views/profile/Profile")
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: Home,
    component: Home,
    meta: {
      title: '主页'
    }
  },
  {
    path: '/category',
    name: Category,
    component: Category,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart',
    name: Cart,
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    name: Profile,
    component: Profile,
    meta: {
      title: '我的'
    }
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
})
router.beforeEach(((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
}))

export default router
