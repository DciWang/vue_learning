<template>
  <div id="app">
    <h1>-----App----</h1>
    <h2>{{message}}</h2>
    <h3>{{count}}</h3>
    <h3>{{$store.state.counter}}</h3>
    <!--不推荐-->
    <button @click="increatmentClick()||$store.state.counter++">+</button>
    <button @click="decreatmentClick()||$store.state.counter--">-</button>
    <h1>-----HelloVue----</h1>

    <!--以父子组件的方式传数据-->
    <hellow-vuex  :c-count="count"/>
  </div>
</template>
<script>
  import HellowVuex from "./views/HellowVuex";
  export default {
    name:'App',
    data(){
      return{
        message:"你好哇， vuex",
        count: 0
      }
    },
    methods:{
      increatmentClick(){
        this.count++
      },
      decreatmentClick(){
        this.count --
      }
    },
    components:{
      HellowVuex
    }
  }
</script>
<style>


</style>
