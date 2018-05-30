import Vue from 'vue'
import Router from 'vue-router'
import Login  from '@/components/Login'
import Home  from '@/components/Home'
import Nook  from '@/components/Nook'
import Porramet  from '@/components/Porramet'

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
      path: '/Porramet',
      name: 'Porramet',
      component: Porramet
    }
  ]
})
