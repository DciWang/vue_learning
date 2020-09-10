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
                    // style-loader
                    { loader: 'style-loader' },
                    // css-loader
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                ]
            }
        ]
    }
}