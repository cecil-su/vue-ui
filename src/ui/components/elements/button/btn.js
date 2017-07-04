import Vue from 'vue'
import Main from './main.vue'

const div = document.createElement('div')
const Btn = Vue.extend(Main)
Btn.show = (options) => {
  document.body.append(div)
  console.log(options.type)
  const propsData = Object.assign({}, options)
  const btn = new Btn({data: propsData}).$mount(div)
}

export default Btn