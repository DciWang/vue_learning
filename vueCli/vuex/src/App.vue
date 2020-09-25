<template>
    <div id="app">


        <h1>-----App----</h1>
        <h2>{{message}}</h2>
        <h3>{{count}}</h3>
        <h2>
            应用vuex.store中的modules属性中的值
        </h2>
        <h3>{{$store.state.a.name}}</h3>
        <h3>{{$store.getters.fullname}}</h3>
        <h3>{{$store.getters.fullname2}}</h3>
        <h3>{{$store.getters.fullname3}}</h3>
        <button @click="aupname">moudle中的action</button>
        <button @click="upname()">修改modules中的名字</button>
        <h2>
            应用vuex.store中的state属性中的值
        </h2>
        <h3>{{$store.state.counter}}</h3>
        <h3>{{$store.state.persons}}</h3>
        <h3>{{$store.state.info}}</h3>
        <h2>
            应用vuex.store中的getters属性中的值
        </h2>
        <h3>{{$store.getters.powerCount}}</h3>
        <h3>{{$store.getters.more20Per}}</h3>
        <button @click="pushPer()">添加人员</button>
        <button @click="updatePer()">修改人员</button>
        <h3>{{$store.getters.more20PerLength}}</h3>

        <h3>{{$store.getters.morePerLengthCpn(10)}}</h3>


        <!--不推荐-->
        <button @click="increatmentClick()||$store.state.counter++">不推荐+</button>
        <button @click="decreatmentClick()||$store.state.counter--">不推荐-</button>
        <button @click="addcounts(5)">推荐+</button>
        <button @click="delcounts(5)">推荐-</button>
        <h1>-----HelloVue----</h1>

        <!--以父子组件的方式传数据-->
        <hellow-vuex :c-count="count"/>
    </div>
</template>
<script>
    import HellowVuex from "./views/HellowVuex";

    export default {
        name: 'App',
        data() {
            return {
                message: "你好哇， vuex",
                count: 0
            }
        },
        /*data 为负载 (payload)*/
        methods: {
            addcounts(payload) {
                this.$store.commit("ADDCOUNT", payload)
            },
            delcounts(payload) {
                this.$store.commit("delCount", payload)
            },
            pushPer() {
                const newP = {id: 5, name: 'james', age:35}
                const new1 = {id: 5, name: 'james', age:35}

                this.$store.commit({
                    type: "addperson",
                    newP,
                    new1,
                })
            },
            //第一种方式
            updatePer(){
                this.$store.dispatch('updatePerson',{
                    message:'我是携带的信息',
                    success(){
                        console.log('up成功')
                    }
                })
            },
            /*第二种方式*/
         /*   updatePer(){
               this.$store.dispatch('updatePerson','我是携带的信息').then(res =>{
                   console.log('up成功');
                   console.log(res);
               })
            },*/
            increatmentClick() {
                this.count++
            },
            decreatmentClick() {
                this.count--
            },
            upname(){
                const a="lv"
                this.$store.commit({
                    type:'upname',
                    a
                })
            },
            aupname(){
                this.$store.dispatch({
                    type:'aupnamew',
                    msg:'moudle 中的 action'
                })
            }
        },
        components: {
            HellowVuex
        }
    }
</script>
<style>


</style>
