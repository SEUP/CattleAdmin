import Vue from 'vue'
import Router from 'vue-router'
import Login  from '@/components/Login'
import Home  from '@/components/Home'
import Nook  from '@/components/Nook'
import pai from '@/components/paikung'

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
    }

, {
  path: '/paikung',
  name: 'pai',
  component: pai}
  ]
})
