import Vue from 'vue'
import Router from 'vue-router'
import Login  from '@/components/Login'
import Home  from '@/components/Home'
import Nook  from '@/components/Nook'
import form from '@/components/form'

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
      path: '/Nook1',
      name: 'Nook',
      component: Nook
      // children:[
      //   {
      //     path: '/form',
      //     name: 'Nook-form',
      //     component: form
      //   }
      // ]
    }
  ]
})
