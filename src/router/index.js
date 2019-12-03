// 导入 Vue
import Vue from 'vue'
// 导入 路由
import VueRouter from 'vue-router'
// use 一下
Vue.use(VueRouter)
// 导入 路由规则
import routes from '@/router/routes.js'


export default new VueRouter({
    routes
})