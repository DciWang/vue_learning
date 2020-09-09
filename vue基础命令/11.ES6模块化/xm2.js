/*导入变量*/
import{flag,sum,Peron} from "./xm1.js";

if (flag){
    console.log(sum(30, 49));
}
const person=new Peron();
person.run()

/*直接以自己命名的方式导入*/
import addr from "./xm1.js"

console.log(addr);
/*将xm1.js文件中导出的全部文件都导入并以aaa命名*/
import * as aaa from "./xm1.js";

console.log(aaa.Peron);