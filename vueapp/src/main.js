import Vue from 'vue'
import App from './App.vue'
import EasySlider from 'vue-easy-slider'
import VueHead from 'vue-head'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab)

Vue.config.productionTip = false

Vue.use(EasySlider)
Vue.use(VueHead)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
