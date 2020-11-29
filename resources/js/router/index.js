import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/pages/Landing'
import Error from '@/components/pages/Error'
import SecretPage from '@/components/pages/SecretPage'

Vue.use(Router)
//
export default new Router({
  mode: 'history', // use HTML5 history instead of hashes
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    },
    {
      path: '/404',
      name: 'SecretPage',
      component: SecretPage
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})