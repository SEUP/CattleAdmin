import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

import userRoute from './user'
import roleRoute from './role'


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
        userRoute,
        roleRoute,
        {
          path : "/test",
          name : "test",
          component : view("test")
        }
      ]
    }]
})
