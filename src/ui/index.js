// Elements
import Button from './components/elements/button/index.js'
import Header from './components/elements/header/index.js'
import Divider from './components/elements/divider/index.js'
// Collections
// Views
// Modules
import Dimmer from './components/modules/dimmer/index.js'
import Progress from './components/modules/progress/index.js'
import Anime from './components/modules/anime/index.js'

const components = [
  Button,
  Header,
  Divider,
  Progress.progress
]

const install = function (Vue, options) {
  if (install.installed) return

  components.map(component => {
    Vue.component(component.name, component)
  })

  Vue.use(Anime.directive)
  Vue.use(Progress.directive)
  Vue.use(Dimmer.directive)
  Vue.prototype.$dimmer = Dimmer.dimmer
  Vue.prototype.$progress = Progress.progress
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}