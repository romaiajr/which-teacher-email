import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Import Bootstrap an BootstrapVue CSS files (order is important)
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Import Firebase and Dependencies to use vue + firebase
import {firestorePlugin} from 'vuefire'
Vue.use(firestorePlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
