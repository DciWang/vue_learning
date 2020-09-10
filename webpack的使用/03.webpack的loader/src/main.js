/*CommonJs导入*/
const {add,mul}= require('./js/aaa')
console.log(add(10, 20));
console.log(mul(20, 20));
/*es6 导入*/
const person=import('./js/bbb')
console.log(person);
/*css导入*/
require ('./css/nomal.css')

//webpack打包
// webpack   ./src/main.js ./dist/bundle.js
