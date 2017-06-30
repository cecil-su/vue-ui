import Vue from 'vue'
import app from './app'
import router from './router'
import ui from './ui/index'

Vue.use(ui)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<app />',
  components: { app }
})