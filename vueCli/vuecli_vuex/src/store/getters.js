export default {
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
}