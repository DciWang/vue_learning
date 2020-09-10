const path=require('path')
module.exports={
    /*入口*/
    entry:'./src/main.js',
    /*出口*/
    output:{
        /*绝对路径*/
        path:path.resolve(__dirname,'dist'),
        /*文件名称*/
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // style-loader，负责将样式添加到dom中
                    { loader: 'style-loader' },
                    // css-loader, 只负责对css文件进行加载
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                ]
            },
            {
                test: /\.less$/,
                use: [
                    // style-loader，负责将样式添加到dom中
                    { loader: 'style-loader' },
                    // css-loader, 只负责对css文件进行加载
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    // style-loader
                    { loader: 'less-loader' },
                ]
            }
        ]
    }
}