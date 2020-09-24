<template>
    <div>
        {{cCount}}
        {{$store.state.counter}}

    </div>

</template>

<script>
    export default {
        data(){
            return{

            }
        },
        name: "HelloVueX",
        props:{
            cCount: Number,
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
