  module.exports = {
    configureWebpack: {
        //配置路径相关的配置
        resolve: {
            //配置别名
            alias: {
                'assets': '@/assets',
                'commons': '@/commons',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}
