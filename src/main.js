import Vue from 'vue'
import App from './App.vue'
import router from './router'   //路由相关配置
import store from './vuex'   //状态管理
import ElementUI from 'element-ui'  //ui库
import './assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
//import api from '@/api'
import axios from 'axios'
//import './mock.js'
//axios.defaults.baseURL = "http://172.16.5.112:8080/";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.use(ElementUI);
Vue.config.productionTip = false;
//Vue.prototype.api = api; 
Vue.prototype.$http=axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



/*new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})*/