import Vue from 'vue'
import Router from 'vue-router'

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
        }
      ]
    }
  ]
})
