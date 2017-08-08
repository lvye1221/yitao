import Vue from 'vue'
import Router from 'vue-router'
import NavList from '@/components/NavList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NavList',
      component: NavList
    }
  ]
})
