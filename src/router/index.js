import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import userRoute from './user'
import roleRoute from './role'
import farmOwner from './farmOwner'
import chart from "./chart"

function view(name) {
  return function (resolve) {
    require(['@/components/' + name + '.vue'], resolve);
  }
}


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: view("Login")
    }, {
      path: '/admin',
      name: 'admin',
      component: view("AdminTemplate"),
      children: [
        {
          path: '',
          name: 'admin-home',
          component: view('Home')
        },
        {
          path: 'report',
          name: 'admin-report',
          component: view('Report')
        },
        {
          path: 'HomeFarmer',
          name: 'admin-HomeFarmer',
          component: view('HomeFarmer')
        },
        farmOwner,
        userRoute,
        roleRoute,
        chart,
      ]
    }]
})
