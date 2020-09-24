import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//vuex 相当于java中的单例模式，用于组件的数据状态管理，比如头像、token等这样的数据,
export default new Vuex.Store({
  //用于保存状态（数据）,相当于单页面的 data属性
  //在一个项目种只new 一个Vuex.Store 保持 state的单一性
  state: {
    counter:0,
    persons:[
        {id:1,name:"DciWang",age:18},
        {id:2,name:"kobe",age:24},
        {id:3,name:"macgranday",age:13},
        {id:4,name:"iverson",age:3},
    ]
  },
  //用于需要经过处理的状态(数据)，相当于单页面种的 computed 属性
  getters:{
    //传入一个参数，默认为state属性
    powerCount(state){
      return state.counter*state.counter
    },
    more20Per(state){
      return state.persons.filter(item => item.age >3)
      // return state.persons.filter(item => item.age>3)
    },
    //传入两个参数，默认第一哥参数为state，第二个参数为 getters
    more20PerLength(state,getters){
      return state.persons.length+getters.more20Per.length
    },
    //接收组件穿过来的参数
    morePerLengthCpn(state,getters){
      //返回一个函数让属性在组件中接收一个值
      return function (data) {
        return state.persons.length+getters.more20Per.length +data
      }
    },
  },
  //状态更新，vuex.store状态的唯一提交方式：提交mutation
  mutations: {
    addCount(state,payload){
      state.counter+=payload
    },
    delCount(state,payload){
      state.counter-=payload
    },
    //传入两个参数，默认第一哥参数为state，第二个参数为 组件传过来的对象参数
    addperson(state,payload){
      console.log(payload)
      state.persons.push(payload.newP)
    }
  },
  actions: {
  },
  modules: {
  }
})
