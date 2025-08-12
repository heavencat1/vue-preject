import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from "vue-axios"
import JsonViewer from 'vue-json-viewer'
Vue.use(VueAxios,axios)
Vue.use(JsonViewer)
Vue.use(ElementUI)


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
