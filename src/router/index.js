import Vue from 'vue'
import VueRouter from 'vue-router'
//import Es6 from '../views/es6/index.vue'

Vue.use(VueRouter)
import Layout from '@/layout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect:'/index',
    children:[{
      path:'index',
      name:'index',
      component:()=>import('@/views/home/index'),
      meta:{title:'首页', icon:'el-icon-s-home'}
    }]
  },
  
  {
    path: '/es6',
    component: Layout,
    children: [
      {
        path: 'es6',
        name: 'es6',
        component: () => import('@/views/es6/index'),
        meta: { title: 'ES6', icon: 'el-icon-s-order' }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
