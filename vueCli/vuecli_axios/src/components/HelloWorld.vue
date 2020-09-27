<template>
    
</template>

<script>
    export default {
        name: "HelloWorld",
        data(){
            return{

            }
        },
        created() {
            import {request} from '../network/request';

            request({
                url: '/home/multidata'
            }, res => {
                console.log(res)
            }, err => {
                console.log(err)
            })
        }
    }
</script>

<style scoped>

</style>