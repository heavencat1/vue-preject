const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
    open:true,
    host:'localhost',
    port:9897,
    proxy:{
      '/api':{
        target:'http://127.0.0.1:8082',
        changeOrigin:true,
        pathRewrite:{
          '^/':''
        }
      }
    }
  }
  
})
