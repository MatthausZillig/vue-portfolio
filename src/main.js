import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(BootstrapVue);
Vue.use(Vuetify)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
