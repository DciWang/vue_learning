<template>
    <div>
        <h3>我是档案</h3>
        <h3>{{data.id}}</h3>
        <h3>{{data.name}}</h3>
        <h3>{{data.age}}</h3>
        <h3>{{data}}</h3>


    </div>
</template>

<script>
    export default {
        name: "Profile",
        computed:{
            data(){
                return this.$route.query
            }
        }
    }
</script>

<style scoped>

</style>
