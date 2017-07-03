import Vue from 'vue'
import Router from 'vue-router'
import index from './index.vue'

// modules
import progress from '../ui/components/modules/progress/el.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '', component: index},
    {path: '/progress', component: progress}
  ]
})