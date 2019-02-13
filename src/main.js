import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(BootstrapVue);
Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
