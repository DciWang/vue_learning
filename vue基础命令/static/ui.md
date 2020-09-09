#vue
##v-for:遍历
 v-for=" item in datalist" :key="item.id"
##v-on:监听
 v-on:click="add"   等同与   @click="add()"  触发事件
##MVVM   Model View View Model
##vue生命周期 (Vue对象内部对一些函数的回调),也叫钩子（hook）函数
beforeCreate(){}，
created(){console.log("做一些网络请求")}，
beforeMounted(){}, 
//更新dom
beforeUpdate(){},
updated(){}，
beforeMount(){},
mounted(){}，
//销毁Vue
beforedestory(){},
destoryed(){}
##插值操作
###Mustache
将data中的文本数据，插入到HTML中，数据是响应式的
   <h2>{{ message + "李银河"}}</h2>    
###v-once  
会让该指令修饰的标签的数据不是响应式的
  <h2 v-once>{{ message + "李银河"}}</h2>
###v-html
如果服务器返回一个a标签，v-html会把这个标签解析成链接
  <h2 v-html="link"></h2>
###v-text
跟mustache语法作用一样，，通常情况下，接受一个String类型
   <h2 v-text="message"></h2>
###v-pre
被该指令修饰的标签，data中的文本数据，不会被解析到HTML中
   <h2 v-pre>{{ message + "李银河"}}</h2>   
###v-clock
某些情况下，浏览器会直接显示还没有来得及解析的Mustache标签
<div id="app" v-clock>{{ message}}</div>   
###v-bind 
动态绑定        <h2 :class="{active:isActive,isLine:false}">当前计数：{{count}}</h2>
###动态绑定style
动态绑定class有两种方式
    ·对象语法 
    ·数组语法

    
