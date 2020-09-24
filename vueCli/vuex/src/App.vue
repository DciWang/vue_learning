<template>
    <div id="app">
        <h1>-----App----</h1>
        <h2>{{message}}</h2>
        <h3>{{count}}</h3>
        <h2>
            应用vuex.store中的state属性中的值
        </h2>
        <h3>{{$store.state.counter}}</h3>
        <h3>{{$store.state.persons}}</h3>
        <h2>
            应用vuex.store中的getters属性中的值
        </h2>
        <h3>{{$store.getters.powerCount}}</h3>
        <h3>{{$store.getters.more20Per}}</h3>
        <button @click="pushPer()">添加人员</button>
        <h3>{{$store.getters.more20PerLength}}</h3>

        <h3>{{$store.getters.morePerLengthCpn(10)}}</h3>


        <!--不推荐-->
        <button @click="increatmentClick()||$store.state.counter++">不推荐+</button>
        <button @click="decreatmentClick()||$store.state.counter--">不推荐-</button>
        <button @click="addcount(5)">推荐+</button>
        <button @click="delcount(5)">推荐-</button>
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
            addcount(payload) {
                this.$store.commit("addCount", payload)
            },
            delcount(payload) {
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
            increatmentClick() {
                this.count++
            },
            decreatmentClick() {
                this.count--
            }
        },
        components: {
            HellowVuex
        }
    }
</script>
<style>


</style>
