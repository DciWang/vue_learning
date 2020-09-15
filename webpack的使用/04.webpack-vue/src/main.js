/*CommonJs导入*/
const {add, mul} = require('./js/aaa')
console.log(add(10, 20));
console.log(mul(20, 20));
/*es6 导入*/
const person = import('./js/bbb')
console.log(person);
/*css导入*/
require('./css/nomal.css')
require('./css/special.less')
/*vue导入*/
import Vue from 'vue'
import App from './vue/App.vue'
new Vue({
    el:'#app',
    template:`<App/>`,
    components:{
        App
    }
})

document.writeln("你好哇，银河")

//webpack打包
// webpack   ./src/main.js ./dist/bundle.js
