import Vue from 'vue'
import Vuex from 'vuex'
import {ADDCOUNT} from './mutations-type'

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
    ],
    info:{id:1,name:"DciWang",age:18}
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
  //不要在里面进行任何异步操作
  mutations: {
    //正确的命名方式
    ADDCOUNT(state,payload){
      state.counter+=payload
    },
    delCount(state,payload){
      state.counter-=payload
    },
    //传入两个参数，默认第一哥参数为state，第二个参数为 组件传过来的对象参数
    addperson(state,payload){
      console.log(payload)
      state.persons.push(payload.newP)
    },
    upperson(state){
      Vue.delete(state.info,'id')
    }

  },
  //类似mutations，主要处理异步操作,但是不能直接修改state的制
  actions: {
    //context（上下文） 为默认参数,第二个参数为组件传来的参数（payload）
    /*第一种方式*/
    updatePerson(context,payload){
      setTimeout(()=>{
        //如果异步修改state中的某个状态，先在组件通过 $store.dispatch()调用actions中方法，然后在actions中的方法调用 mutations中的方法
        context.commit("upperson")
        console.log(payload.message);
        payload.success();
      },1000)
    }
    /*第二种方式*/
 /*   updatePer(context,payload){
     return  new Promise((resolve, reject) => {
        setTimeout(()=>{
          context.commit('upperson');
          console.log(payload);
          resolve('1111')
        },1000)
      })
    }*/
  },
  modules: {
    a:{
      state:{
        name:'曹家',
      },
      mutations:{
        upname(state,payload){
         state.name=payload.a
        },
        upname2(state){
         state.name='驴'
        },
      },
      getters:{
        //一个参数代表本模块中的state
        fullname(state){
          return state.name +'1111'
        },
        //两个参数代，第一个参数代表本模块中的state，第二个参数代表本模块中的getters
        fullname2(state,getters){
          return getters.fullname+'2222'
        },
        //两个参数代，第一个参数代表本模块中的state，第二个参数代表本模块中的getters，第三个参数代表父级state
        fullname3(state,getters,rootState){
          return  state.name+ getters.fullname+rootState.persons[0].name

        },


      },

      actions:{
        aupnamew(context,payload){
         setTimeout(()=>{
           context.commit('upname2')
           console.log(payload.msg);
         },1000)
        }

      },
    }
  }
})
