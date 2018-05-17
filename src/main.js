// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
import VueToast from './plugins/vue-toast'
import VueDialog from './plugins/vue-dialog'
import './assets/css/iconfont.css'
import './assets/less/app.less'
import { currency } from './utils/currency'

Vue.config.productionTip = false

Vue.use(VeeValidate)
Vue.use(VueToast)
Vue.use(VueDialog)
Vue.filter('currency', currency)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
