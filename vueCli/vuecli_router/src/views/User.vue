<template>
    <div>
        <h2>{{msg}}</h2>
        <h1>{{userId}}</h1>
    </div>

</template>

<script>
    export default {
        name: "User",
        data(){
            return{
                msg:'我是用户界面'
            }
        },
        computed:{
            userId(){
              return   this.$route.params.userId
            }

        }
    }
</script>

<style scoped>

</style>
