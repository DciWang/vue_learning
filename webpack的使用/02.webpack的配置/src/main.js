/*CommonJs导入*/
const {add,mul}= require('./aaa')
console.log(add(10, 20));
console.log(mul(20, 20));
/*es6 导入*/
const person=import('./bbb')
console.log(person);

//webpack打包
// webpack   ./src/main.js ./lib/bundle.js
