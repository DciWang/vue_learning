<template>
    <div>
        <h5>我是消息</h5>
        <ul>
            <li v-for="(item,index) in message" :key="index">
                <a href="">{{item}}</a>

            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "HomeMessage",
        data(){
            return{
                message:['系统消息','女朋友的消息','骚扰消息']
            }
        }
    }
</script>

<style scoped>

</style>
//嵌套路由
