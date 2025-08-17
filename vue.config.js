const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.ROUTER_BASE,
  outputDir: 'dist',
  assetsDir: 'static',
  devServer:{
    open: true,
    host: '0.0.0.0',
    port: 9897,
    client: {
      overlay: false
    },
    proxy:{
      '/api':{
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
  
})
