import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path:'/',
    name:'index',
    component:() => import('@/views/t-header.vue')
},{
    path:'/login',
    name:'login',
    component:() => import('@/views/logPage.vue')
}
]

const router = new VueRouter({
    routes
})

export default router