import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Simple from "./views/Simple.vue"
import PromiseView from "./views/Promise.vue"
import Reactive from "./views/Reactive.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/simple',
      name: 'simple',
      component: Simple
    },
    {
      path: '/promise',
      name: 'promise',
      component: PromiseView
    },
    {
      path: '/reactive',
      name: 'reactive',
      component: Reactive
    },
  ]
})
