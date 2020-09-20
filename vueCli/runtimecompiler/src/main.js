// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*引入 vue*/
import Vue from 'vue'
/*引入 App组件*/
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({

  el: '#app',
  /*注册组件*/
  components: { App },
  /*使用组件*/
  template: '<App/>'
})
