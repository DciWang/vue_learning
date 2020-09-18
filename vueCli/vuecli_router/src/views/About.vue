<template>
    <div>
        {{msg}}
        <h2>我是父组件</h2>
        <Mine :c-msg="book" @cpnclick="Click"></Mine>
        ---------------------------------------
        <h4>这是子组件传过来得数据：{{cpnClick}}</h4>
    </div>
</template>

<script>
    import Mine from "../components/Mine";
    export default {
        name: "About",
        data() {
            return {
                msg: "我是关于",
                book:"变成思想",
                cpnClick:''
            }
        },
        methods:{
            Click(item){
                console.log(item);
                this.cpnClick=item;

            }
        },
        components: {
            Mine
        }
    }
</script>

<style scoped>

</style>
