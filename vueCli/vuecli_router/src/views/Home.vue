<template>
    <div>
        <h2>我是主业</h2>
        {{msg}}
        <hr>
                <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/messages">消息</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "Home",
        data() {
            return {
                msg: '我是主业',
                path: '/home/news'
            }
        },
        //活跃之前
        activated() {
            console.log(this.path)
            this.$router.push(this.path)
        },
        //组件路由导航
        beforeRouteLeave(to, from, next) {
            this.path = this.$route.path
            next()
        }

    }
</script>

<style scoped>

</style>
