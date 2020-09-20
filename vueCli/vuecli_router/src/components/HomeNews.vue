<template>
    <div>
        <h5>我是新闻</h5>
        <ul>
            <li v-for="(item,index) in news" :key="index">
                <a href="">{{item}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeNews",
        data(){
            return{
                news:['体育新闻','娱乐新闻','军事新闻']
            }
        }
    }
</script>

<style scoped>

</style>


//嵌套路由
