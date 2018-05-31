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
        },
        {
          path : 'chaow',
          name : 'admin-chaow',
          component : view('Chaow')
        },
        {
          path : 'got',
          name : 'admin-got',
          component : view('Got')
        },{
          path : 'porramet',
          name : 'admin-porramet',
          component : view('Porramet')
        },
        {
          path : 'paikung1',
          name : 'admin-paikung',
          component : view('paikung1')
        },
        {
          path : 'nook',
          name : 'admin-nook',
          component : view('Nook')
        }
      ]
    }
  ]
})
