import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/login',
    name: 'Login', 
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Register')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Search')
  },
  {
    path:'/',
    redirect:'home'
  }
]

const router = new VueRouter({
  routes
})

export default router
