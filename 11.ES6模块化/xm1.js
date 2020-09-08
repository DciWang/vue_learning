let name = `小明`
let age = 18
let flag = true

function sum(num1, num2) {
    return num1 + num2
}

if (flag) {
    console.log(sum(20, 10));
}

/*导出变量，可以是函数和类*/
export {
    flag, sum
}
/*导出一个对象*/
export class Peron {
    run() {
        console.log("在奔跑");
    }
}
const adress=`北京`
/*导出一个变量，由调用者命名（这样的变量一个模块只能导入一个）*/
export default adress

