import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'

import Manager from '../views/manager/Index'
import Home from '../views/manager/Home'
import Order from '../views/manager/Order'
import User from '../views/manager/User'
import Income from '../views/manager/Income'



Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/login"
  },
  {
    path:'/manager',
    component:Manager,
    children:[{
      path:'home',
      component:Home
    },{
      path:'order',
      component:Order
    },{
      path:'user',
      component:User
    },{
      path:'income',
      component:Income
    }]
  },
  {
    path:'/login',
    component:Login
  }
]

const router = new VueRouter({
  routes
})

export default router
