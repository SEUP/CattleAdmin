import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Chaow from '@/components/Chaow'
import Most from '@/components/Most'
import Nook from '@/components/Nook'
import Porramet from '@/components/Porramet'
import pai from '@/components/paikung'
import Eiei from '@/components/Eiei'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: view('Login')
    }, {
      path: '/Home',
      name: 'Home',
      component: Home
    }
