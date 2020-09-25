import Vue from "vue";
import {ADDCOUNT} from './mutations-type'

export default {
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

}