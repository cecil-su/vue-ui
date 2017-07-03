import directive from './directive.js'
import dimmer from './main.vue'

export default {
  install (Vue) {
    Vue.use(directive)
    Vue.prototype.$dimmer = dimmer
  },
  directive,
  dimmer
}