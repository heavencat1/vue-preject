const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
    open:true,
    host:'localhost',
    port:9897,
    client: {
      overlay: false
    },
    proxy:{
      '/api':{
        target: process.env.VUE_APP_BASE_API,
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
  
})
