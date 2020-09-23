<template>
    <div>
        {{cCount}}
        {{$store.state.counter}}
    </div>

</template>

<script>
    export default {
        name: "HelloVueX",
        props:{
            cCount: Number
        }
    }
</script>

<style scoped>

</style>
