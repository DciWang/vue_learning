const a={
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

export default a