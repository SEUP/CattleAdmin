import Vue from 'vue'
import Router from 'vue-router'
import Login  from '@/components/Login'
import Home  from '@/components/Home'
import Nook  from '@/components/Nook'
import Eiei from '@/components/Eiei'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/Home',
      name: 'Home',
      component: Home
    }, {
      path: '/Nook',
      name: 'Nook',
      component: Nook
    }, {
      path: '/Eiei',
      name: 'Eiei',
      component: Eiei
    }
  ]
})
