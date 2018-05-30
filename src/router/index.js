import Vue from 'vue'
import Router from 'vue-router'
import Login  from '@/components/Login'
import Home  from '@/components/Home'
import Chaow  from '@/components/Chaow'
import Most  from '@/components/Most'
import Nook  from '@/components/Nook'
import Porramet  from '@/components/Porramet'
import pai from '@/components/paikung'
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
    },{
      path: '/chaow',
      name: 'chaow',
      component: Chaow
    }, {
      path: '/Nook',
      name: 'Nook',
      component: Nook
    }, {
      path: '/Porramet',
      name: 'Porramet',
      component: Porramet
    }, {
      path: '/Eiei',
      name: 'Eiei',
      component: Eiei
    }, {
      path: '/Most',
      name: 'Most',
      component: Most
    }

, {
  path: '/paikung',
  name: 'pai',
  component: pai}
  ]
})
