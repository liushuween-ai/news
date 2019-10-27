// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vant from 'vant'
// 引入axios组件
import axios from 'axios';

//引入Vant组件库
import Vant from 'vant';

// 全局的路由守卫
// 路由：3.创建对象


router.beforeEach((to, from, next) => {
  const hasToken=localStorage.getItem('token');
  if (to.path === "/personalCenter") {
    if(hasToken){
      return next()
    }else{
      return next('/login')
    }
  }
  next()
})
//注册Vant组件库
Vue.use(Vant);
//引入Vant组件样式文件
import 'vant/lib/index.css';


Vue.prototype.$axios=axios;
// 设置axios基准路径
axios.defaults.baseURL = "http://127.0.0.1:3000";
// axios.defaults.baseURL = "http://111.230.181.206:3000";
// axios.defaults.baseURL = "http://localhost:3000";

// 拦截响应在数据返回的时候拦截
// 因为toast插件只能在组件里面用
import {Toast} from 'vant'
import VueRouter from 'vue-router';
axios.interceptors.response.use(res=>{
  const {message,statusCode}=res.data
  if (message && statusCode == 401 ||res.data.statusCode == 400) {
    Toast.fail(message)
  }
  if (message === "用户信息验证失败"){
    // 跳转到登录页
    router.push("/login");
  }
  return(res)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
