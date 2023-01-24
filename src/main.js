import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
import VueToast from './plugins/vue-toast'
import VueDialog from './plugins/vue-dialog'
import './assets/css/iconfont.css'
import './styles/app.less'
import { currency } from './utils/currency'

Vue.config.productionTip = false

Vue.use(VeeValidate)
Vue.use(VueToast)
Vue.use(VueDialog)
Vue.filter('currency', currency)

/* eslint-disable no-new */

new Vue({
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
