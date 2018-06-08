import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import userRoute from './user'
import roleRoute from './role'
import farmOwner from './farmOwner'


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
        farmOwner,
        userRoute,
        roleRoute,
        {
          path : "/test",
          name : "test",
          component : view("test")
        },{
          path : "/test2",
          name : "test2",
          component : view("test2")
        },{
          path : "/test3",
          name : "test3",
          component : view("test3")
        }
      ]
    }]
})
