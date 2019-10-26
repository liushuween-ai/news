import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register'
import PersonalCenter from '@/pages/PersonalCenter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      name:'LoginPage',
      component:Login
    },
    {
      path:'/register',
      name: 'registerPage',
      component: Register
    },
    {
      path: '/personalCenter',
      name: 'PersonalCenterPage',
      component: PersonalCenter
    }
  ]
})
