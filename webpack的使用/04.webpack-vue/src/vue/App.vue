<template>
    <div>{{msg}}</div>
    <cpn></cpn>
</template>

<script>
    import cpn from './Cpn.vue'
    export default {
        name: "App",
        data(){
          return{
            msg:"Hello Vue.js"
          }
        },
        components:{
            cpn
        }
    }
</script>

<style scoped>

</style>
