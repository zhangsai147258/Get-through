module.exports = {
  /* 
    如果是生产环境 publicPath '/未来部署的文件夹名字'
    如果是开发环境 publicPath '/'

    process.env.NODE_ENV

    npm run server  这个值是development
    npm run build 这个值是production
  */
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  devServer: {
    // 设置proxy后为你要代理的地址，然后真正的接口访问当前服务器地址http://localhost:8080
    proxy: 'http://localhost:3000'
    /* proxy: {
      '/yuedu': {
        target: 'http://localhost:3000',
        pathRewrite: {
          "^/yuedu": '/api'
        }
      }
    } */
  }
}