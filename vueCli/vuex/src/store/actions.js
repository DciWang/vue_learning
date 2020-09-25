export default {
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
}