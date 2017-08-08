import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import navList from '@/components/NavList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navList',
      component: navList
    }
  ]
})
