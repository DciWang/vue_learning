import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//vuex 相当于java中的单例模式，用于组件的数据状态管理，比如头像、token等这样的数据
export default new Vuex.Store({
  //用于保存状态（数据）
  state: {
    counter:0
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
