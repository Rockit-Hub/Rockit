import Vue from 'vue';
import ElementUI from 'element-ui'
import App from './App.vue';
import router from './router/index'
import store from './store'
import 'css/common.less'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

console.log(router)
new Vue({
  // 第4步执行的地方
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');