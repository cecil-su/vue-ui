// Elements
import Button from './components/elements/button/index.js'
import Header from './components/elements/header/index.js'
import Divider from './components/elements/divider/index.js'
// Collections
// Views
// Modules
const components = [
  Button,
  Header,
  Divider
]

export default function install (Vue, options) {
  console.log('ui installed')
  if (install.installed) return

  components.map(component => {
    Vue.component(component.name, component)
  })
}