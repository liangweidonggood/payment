import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import myinput from './components/index'
import axios from 'axios'
import store from './store'
Vue.use(myinput)
Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
if (sessionStorage.getItem('token')) {
    axios.defaults.headers.common['Authentication-Token'] = sessionStorage.getItem('token');
    store.commit('set_token', sessionStorage.getItem('token'))
}
//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  const role = sessionStorage.getItem('token');
  if (!role && to.path !== '/login') {
    // next('/login');
      next()
  } else if (to.meta.permission) {
    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
      next()
    // role === 'admin' ? next() : next('/403');
  } else {
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
      Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
        confirmButtonText: '确定'
      });
    } else {
      next();
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
