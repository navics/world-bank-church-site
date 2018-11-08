import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Beliefs from '@/components/Beliefs'
import Intro from '@/components/Intro'
import Spirituality from '@/components/Spirituality'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/intro',
      name: 'Intro',
      component: Intro
    }, {
      path: '/Beliefs',
      name: 'Beliefs',
      component: Beliefs
    }, {
      path: '/Spirituality',
      name: 'Spirituality',
      component: Spirituality
    }
  ]
})
