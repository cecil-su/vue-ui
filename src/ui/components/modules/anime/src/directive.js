import Vue from 'vue'
import Main from './main.vue'
import { iconHandle } from './mo.js'
import Anime from './anime.js'

export default function install (Vue) {
  if (Vue.$isServer) return 

  Vue.directive('mo', {
    bind: function (el, binding) {
      if (binding.modifiers.icon) {
        iconHandle(el)
      }
    },
    update: function () {},
    unbind: function () {}
  })

  Vue.directive('anime', {
    bind: function (el, binding) {
      let isFunction  = typeof binding.value === 'function'
      if (binding.modifiers.els) {
        isFunction ? binding.value(new Anime(el.children)) : new Anime(el.children, binding.value)
      } else {
        isFunction ? binding.value(new Anime(el)) : new Anime(el, binding.value)
      }
    },
    update: function () {},
    unbind: function () {}
  })
}