import Vue from 'vue'
import Dimmer from './main.vue'

export default function install (Vue) {
  if (Vue.prototype.$isServer) return

  let toggleDimmer = (el, binding) => {
    if (binding.value) {
      Vue.nextTick(() => {
        insertDom(el, el, binding)
      })
    }
  }

  let insertDom = (parent, el, binding) => {
    parent.appendChild(el.dimmer)
  }

  Vue.directive('dimmer', {
    bind: function (el, binding) {
      Dimmer.data = {
        text: el.getAttribute('dimmer-text')
      }
      let vm = new Vue(Dimmer).$mount()
      el.dimmer = vm.$el
      el.appendChild(vm.$el)
    },
    update: function (el, binding) {
      el.instance.setText(el.getAttribute('dimmer-text'))
    },
    unbind: function (el, binding) {
      if (el.domInserted) {

      } else {
        el.dimmer && el.dimmer.parentNode && el.dimmer.parentNode.removeChild(el.dimmer)
      }
    }
  })
}
