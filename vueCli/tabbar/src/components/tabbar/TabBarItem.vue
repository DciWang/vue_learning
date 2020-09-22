<template>
        <div class="tab-bar-item" @click="tabBarItemClick()">
            <!--命两个具名插槽-->
            <div v-if="!isActive">
                <slot name="item-icon"></slot>
            </div>
            <div v-else>
                <slot name="item-icon-active"></slot>
            </div>
            <div :class="{active: isActive}" :style="activeStyle">
                <slot name="item-text"></slot>
            </div>
        </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        data() {
            return {
                // isActive: false
            }
        },
        methods:{
            tabBarItemClick(){
                this.$router.replace(this.link)
                // console.log(this.link)
            }
        },
        computed:{
            isActive(){
                console.log(this.link.indexOf(this.$route.path) !== -1)
                return this.link.indexOf(this.$route.path) !== -1
            },
            activeStyle(){
                return this.isActive? {color: this.activeColor}:{}
            }
        },
        props:{
            link:{
                type:String
            },
            activeColor:{
                type:String,
                default:'green'
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }

    .tab-bar-item img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }

    .active {
        color: #42b983;
    }
</style>
