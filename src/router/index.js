import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Site from '@/components/Site'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/site',
      name: 'Site',
      component: Site
    }
  ]
})
