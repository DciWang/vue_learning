<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--使用子组件-->
    <HelloWorld/>
  </div>
</template>

<script>
  /*导入子组件*/
import HelloWorld from './components/HelloWorld'
/*导出组件*/
export default {
  /*组件名称*/
  name: 'App',
  /*注册子组件*/
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
