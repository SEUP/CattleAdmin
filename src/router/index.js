import Vue from 'vue'
import Router from 'vue-router'
import Login  from '@/components/Login'
import Home  from '@/components/Home'

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
      children : [
        {
          path : '',
          name : 'admin-home',
          component : view('Home')
        },
        {
          path : 'usermanagement',
          name : 'admin-usermanagement',
          component : view('UserManagement')
        }, {
          path : 'permissions',
          name : 'admin-permissions',
          component : view('permissions')
        }, {
          path : 'userShow',
          name : 'admin-user',
          component : view('fromUser')
        },
      ]

}]})
