let numbers =[12,2,20,666,55,888,777]
/*filter  对数组中元素进行过滤*/
let filterList=numbers.filter( item => item>100)
console.log(filterList)
/*map 对数组中元素进行映射*/
let mappedList=numbers.map( item => (item+10)/2);
console.log(mappedList)
/*reduce 对数组中元素进行汇总*/
let sum =numbers.reduce((pre,n) => pre+n )
console.log(sum);