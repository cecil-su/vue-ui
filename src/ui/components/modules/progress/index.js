import directive from './src/directive.js'
import progress from './src/index.js'

export default {
  install (Vue) {
    Vue.use(directive)
    Vue.prototype.$progress = progress
  },
  directive,
  progress
}