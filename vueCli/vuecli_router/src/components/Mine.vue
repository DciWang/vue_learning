<template>
    <div>
        <h2>{{msg}}</h2>
        <h3>{{cMsg}}</h3>
        <ul>
            <li v-for="item in sports">
                <button @click="put(item)">{{item}}</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Mine",
        data(){
            return{
                msg:"我是子组件",
                sports:[1,2,3,4,5]
            }
        },
        methods:{
            put(item){
                this.$emit("cpnclick",item)
            }
        },
        props:{
            cMsg:{
                type:String,
                default:"jvm",
                required:true
            }

        }
    }
</script>

<style scoped>

</style>