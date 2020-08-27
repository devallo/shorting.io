import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

Vue.config.productionTip = false
/*
    Color Scheme

Primary: #439CEF
Secondary: #ad1e7a
Gradient: #439CEF #975BBA #ad1e7a
*/
Vue.use(Vuesax, {
  colors: {
    primary: '#439CEF',
    dark: '#ad1e7a'
  }
})

Vue.prototype.$navbar

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
