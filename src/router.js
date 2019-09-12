//导入路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import login from './components/login.vue'
import index from "./components/index.vue"

const routes=[
 {path:'/login',component:login},
 {path:'/',component:index},

]

// 实例化路由对象
const router = new VueRouter({
    mode: 'history',
     routes
})

 //导航前置守卫
 router.beforeEach((to, from, next) => {
    if(to.matched.length==0){
       next('/error');
    }else{
        next();
    }
 })
// 暴露路由
export default router