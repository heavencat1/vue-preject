import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      token:''
    }
  },

  getters: {
    getUser(state){
      return state.user
    }
  },

  mutations: {
    setUser(state,user){
      state.user = user
    }
  },

  actions: {
    asyncSetUser(state,user){
      this.commit('setUser',user)
    }
  },

  modules: {

  }
})
