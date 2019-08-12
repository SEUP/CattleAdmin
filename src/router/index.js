import Vue from 'vue'
import Router from 'vue-router'

import userRoute from './user'
import roleRoute from './role'
import farmOwner from './farmOwner'
import chart from "./chart"
import farmer from "./farmer"

function view(name) {
  return function (resolve) {
    require(['@/components/admin/' + name + '.vue'], resolve);
  }
}


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: view("login")
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: view("reset-password")
    },
    {
      path: '/admin',
      component: view("admin-template"),
      children: [
        {
          path: '',
          name: 'admin-home',
          component: view('home/index')
        },
        {
          path: 'report',
          name: 'admin/report',
          component: view('report')
        },
        farmer,
        farmOwner,
        userRoute,
        roleRoute,
        chart,
      ]
    }]
})
