// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vant from 'vant'
// 引入axios组件
import axios from 'axios';

//引入组件库
import Vant from 'vant';
//注册组件库
Vue.use(Vant);
//引入组件样式文件
import 'vant/lib/index.css';


Vue.prototype.$axios=axios;
// 设置axios基准路径
axios.defaults.baseURL = "http://127.0.0.1:3000";
// axios.defaults.baseURL = "http://111.230.181.206:3000";
// axios.defaults.baseURL = "http://localhost:3000";

// 拦截响应
// 因为toast插件只能在组件里面用
import {Toast} from 'vant'
axios.interceptors.response.use(res=>{
  const {message,statusCode}=res.data
  if (message && statusCode == 401 ||res.data.statusCode == 400) {
    Toast.fail(message)
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
