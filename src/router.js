//导入路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import login from './components/login.vue'
import index from "./components/index.vue"
import arclist from "./components/arclist.vue"
import column from "./components/column.vue"
import advertising from "./components/advertising.vue"
import live from "./components/live.vue"
import radio from "./components/radio.vue"
import increase from "./components/increase.vue"


const routes=[
 {path:'/login',component:login},
 {path:'/',component:index,children:[
   {path:'arclist',component:arclist},
   {path:'column',component:column},
   {path:'advertising',component:advertising},
   {path:'live',component:live},
   {path:'radio',component:radio},
   {path:'increase',component:increase},
 ]},
 
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