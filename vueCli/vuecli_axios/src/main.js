import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


axios({
    url: 'http://123.207.32.32:8000/home/multidata',
    method: 'get',
}).then(res => {
    console.log(res.data)
})
axios({
    url: 'http://123.207.32.32:8000/home/data',
    //get请求的参数拼接，相当于：http://123.207.32.32:8000/home/data?type=pop&page=1;
    params: {
        type: 'pop',
        page: 1
    }
}).then(res => {
    console.log(res.data)
})

//并列请求
axios.all([axios({
    url: 'http://123.207.32.32:8000/home/multidata',
    params: {
        type: 'pop',
        page: 1
    }
}),
    axios({
        url: 'http://123.207.32.32:8000/home/multidata',
        method: 'get',
    })]).then(res => {
    console.log(res)
    //分别打印
    console.log(res[0])
    console.log(res[1])
});


axios.all([
    axios({
        url: 'http://123.207.32.32:8000/home/multidata',
        method: 'get'
    }),
    axios({
        url: 'http://123.207.32.32:8000/home/multidata',
        params: {
            type: 'pop',
            page: 1
        }
    })
//分别拿到两个请求中的数据
]).then(axios.spread((res1, res2) => {
    console.log(res1);
    console.log(res2)
}));

/*创建对应的axios实例*/
const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
})
const instance2 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
})

axios.all([
    //实例1
    instance1({
        url: '/home/multidata',
        method: 'get'
    }),
    //实例2
    instance2({
        url: '/home/data?type=pop&page=1',
        params: {
            type: 'pop',
            page: 1
        }
    })]).then(axios.spread((res1, res2) => {
    console.log(res1);
    console.log(res2)
}));

import {request} from '../src/network/request';

/*
request({
    url: '/home/multidata'
}, res => {
    console.log(res)
}, err => {
    console.log(err)
})
*/

//最后使用方式
request({
    url: '/home/multidata'
}).then(res=>{
    console.log(res)
}).catch(err =>{
    console.log(err)
})