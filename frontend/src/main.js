import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import vuetify from './plugins/vuetify'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/pt-br'

Vue.config.productionTip = false

Vue.use(Element, { locale })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
