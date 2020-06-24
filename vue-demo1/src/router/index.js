// 1.引入vue vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/componerts/Index/index.vue'
import List from '@/componerts/List/index.vue'
import About from '@/componerts/About/index.vue'
import Detail from '@/componerts/Detail/index.vue'

console.log(VueRouter)
// 2.在vue中撒用router
Vue.use(VueRouter)

// 3.编写路由的参数
// export default new

export default new VueRouter({
// 所有路由配置的地方
  routes: [{
    path: '/',
    component: Index
  }, {
    path: '/list',
    component: List
  }, {
    path: '/about',
    component: About
  }, {
    path: '/detail',
    component: Detail,
  }]
})

// 4.将vue挂载到vue实例上

// 5.通过路由标签将页面挂载
// <router-view></router-view>
// 6.跳转路由的标签 to 表示跳转到哪里去
// <router-link to="/">指南</router-link>