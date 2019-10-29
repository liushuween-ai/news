import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register'
import PersonalCenter from '@/pages/PersonalCenter'
import EditData from '@/pages/EditData'
import MyConcern from '@/pages/MyConcern'
import MyComments from '@/pages/MyComments'
import MyCollections from '@/pages/MyCollections'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
    },{
      path: '/editData',
      name: 'editDataPage',
      component: EditData
    },
    {
      path:'/myConcern',
      name:'myConcernPage',
      component: MyConcern
    },
    {
      path:'/myComments',
      name:'myCommentsPage',
      component: MyComments
    },
    {
      path:'/myCollections',
      name:'myCollectionsPage',
      component: MyCollections
    }
  ]
})
