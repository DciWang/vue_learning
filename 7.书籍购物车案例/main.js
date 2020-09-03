const app=new Vue({
    el:'#app',
    data:{
        books:[
            {
                id:1,
                name:'算法导论',
                date: '2020-9',
                price: 29.00,
                count: 1
            },   {
                id:2,
                name:'golang',
                date: '2020-9',
                price: 99.00,
                count: 1
            },   {
                id:3,
                name:'java',
                date: '2020-9',
                price: 89.00,
                count: 1
            },   {
                id:4,
                name:'c',
                date: '2020-9',
                price: 69.00,
                count: 1
            },   {
                id:5,
                name:'c++',
                date: '2020-9',
                price: 99.00,
                count: 1
            },   {
                id:6,
                name:'vue',
                date: '2020-9',
                price: 159.00,
                count: 1
            }
        ],

    },methods:{
        decrementBtn(index){
            this.books[index].count--
        },
        incrementBtn(index){
            this.books[index].count ++
        },
        deleteHandler(index){
            this.books.splice(index,1)
        }
    },
    //过滤
    filters:{
        showPrice(price){
            // return '¥'+price.toFixed(2)
        }
    },
    computed:{
       finalPrice(){
           let finalPrice=0;
           // for (let argument of this.books) {
           //     finalPrice+=argument.price*argument.count
           // }
            finalPrice =this.books.reduce((pre,book) => pre+book.price*book.count);
           console.log(finalPrice)
           return finalPrice;
       },


    }
})