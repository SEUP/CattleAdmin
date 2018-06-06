import Vue from 'vue'
import Router from 'vue-router'
import Login  from '@/components/Login'
import Home  from '@/components/Home'
import pai from '@/components/paikung'

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
          path : 'chaow',
          name : 'admin-chaow',
          component : view('Chaow')
        },
        {

          path: 'most',
          name: 'admin-most',
          component: view('Most')
        },
        {
          path : 'most-farm',
          name : 'admin-mostfarm',
          component : view('Mostfarm')
        },
        {
          path : 'usermanagement',
          name : 'admin-usermanagement',
          component : view('UserManagement')
        },
        {
          path : 'got',
          name : 'admin-got',
          component : view('Got')
        },
        {
          path : 'gotji',
          name : 'admin-gotji',
          component : view('gotji')
        },{
          path : 'porramet',
          name : 'admin-porramet',
          component : view('Porramet')
        },{
          path : 'porramet-table',
          name : 'admin-porramet-table',
          component : view('PorrametTableFarmOwners')
        },
        {
          path : 'userShow',
          name : 'admin-user',
          component : view('fromUser')
        },
        {
          path : 'nook',
          name : 'admin-nook',
          component : view('Nook')
        },
        {
          path : 'ford',
          name : 'admin-ford',
          component : view('ford')
        }
      ]
    }
      path: '/Home',
      name: 'Home',
      component: Home

}, {
  path: '/paikung',
  name: 'pai',
  component: pai}
  ]
})
