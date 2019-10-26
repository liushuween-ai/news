// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vant from 'vant'

//引入组件库
import Vant from 'vant';
//注册组件库
Vue.use(Vant);
//引入组件样式文件
import 'vant/lib/index.css';

import axios from 'axios';
Vue.prototype.$axios=axios;
axios.defaults.baseURL = "http://localhost:3000";
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
