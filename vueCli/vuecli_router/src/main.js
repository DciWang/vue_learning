import Vue from 'vue'
import App from './App.vue'
//引入“./router”  自动扫描文件夹下面得  index.js文件，等同于  import router from './router/index.js'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  //使用router里面得组件
  router,
  render: h => h(App)
}).$mount('#app')
