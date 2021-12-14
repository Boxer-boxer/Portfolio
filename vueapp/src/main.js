import Vue from 'vue'
import App from './App.vue'
import EasySlider from 'vue-easy-slider'

Vue.config.productionTip = false

Vue.use(EasySlider)

new Vue({
  render: h => h(App),
}).$mount('#app')
