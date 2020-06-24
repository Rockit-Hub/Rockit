// 1.引入vue vuex
import Vue from 'vue'
// vuex 是一个众泰管理器
import Vuex from 'vuex'
// 2.使用vuex
Vue.use(Vuex)

// 3.导出数据
export default new Vuex.Store({
  // vuex中属性有哪些
  state: {
    counr: 0,
    // 判断用户是否登录 0 表示没有登录 1 表示登录
    isLogin: 0,
  }
})

// 4.挂载的实例上
