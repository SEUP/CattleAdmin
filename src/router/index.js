import Vue from 'vue'
import Router from 'vue-router'

import userRoute from './user'
import roleRoute from './role'
import farmOwner from './farmOwner'
import chart from "./chart"
import farmer from "./farmer"

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
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: view("ResetPassword")
    },
    {
      path: '/admin',
      name: 'admin',
      component: view("AdminTemplate"),
      children: [
        {
          path: '',
          name: 'admin-home',
          component: view('admin/Home/index')
        },
        {
          path: 'report',
          name: 'admin/report',
          component: view('Report')
        },
        farmer,
        farmOwner,
        userRoute,
        roleRoute,
        chart,
      ]
    }]
})
