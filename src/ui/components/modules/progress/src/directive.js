import Vue from 'vue'
import Progress from './main.vue'

export default function install (Vue) {
  if (Vue.$isServer) return 

  Vue.directive('progress', {
    bind: function (el, binding) {
      if (binding.modifiers.top) {
        // Progress.data.attached = 'top'
        Progress.data = {
          attached: 'top'
        }
      } else if (binding.modifiers.bottom) {
        Progress.data = {
          attached: 'bottom'
        }
      }
      let vm = new Vue(Progress).$mount()
      el.appendChild(vm.$el)
    },
    update: function () {},
    unbind: function () {}
  })
}