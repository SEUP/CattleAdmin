import Vue from 'vue'
import Router from 'vue-router'
import Login  from '@/components/Login'
import Home  from '@/components/Home'
import Chaow  from '@/components/Chaow'

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
    }
  ]
})
