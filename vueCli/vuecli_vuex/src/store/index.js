import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import a from  "./modules/a"
Vue.use(Vuex)

const state={
  counter:0,
  persons:[
    {id:1,name:"DciWang",age:18},
    {id:2,name:"kobe",age:24},
    {id:3,name:"macgranday",age:13},
    {id:4,name:"iverson",age:3},
  ],
  info:{id:1,name:"DciWang",age:18}
}

//vuecli_vuex 相当于java中的单例模式，用于组件的数据状态管理，比如头像、token等这样的数据,
export default new Vuex.Store({
  //用于保存状态（数据）,相当于单页面的 data属性
  //在一个项目种只new 一个Vuex.Store 保持 state的单一性
  state,
  //用于需要经过处理的状态(数据)，相当于单页面种的 computed 属性
  getters,
  //状态更新，vuecli_vuex.store状态的唯一提交方式：提交mutation
  //不要在里面进行任何异步操作
  mutations,
  //类似mutations，主要处理异步操作,但是不能直接修改state的制
  actions,
  //可以模块话进行划分
  modules: {
    a
  }
})
