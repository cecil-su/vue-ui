import Header from './main.vue'

Header.install = function (Vue) {
  Vue.component(Header.name, Header)
}

export default Header