import Vue from 'vue'
// Docs: https://github.com/axios/axios
import axios from 'axios'
// Docs: https://baianat.github.io/vee-validate/
import VeeValidate from 'vee-validate'
import Clients from '@/components/layout/Clients.vue'
import router from '@/router'
import components from '@/components'
import store from '@/store'

Vue.use(components)
//Vue.use(VeeValidate)

Vue.config.productionTip = false
window.axios = axios
window.axios.defaults.headers.common = { 'X-Requested-With': 'XMLHttpRequest' }
window.axios.defaults.baseURL = `http://127.0.0.1:3333/`
/**
* Next we will register the CSRF Token as a common header with Axios so that
* all outgoing HTTP requests automatically have it attached. This is just
* a simple convenience so we don't have to attach every token manually.
*/
let token = document.querySelector('[name="csrf-token"]')
if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
  console.error(
    'CSRF token not found: https://adonisjs.com/docs/4.1/csrf-protection'
  )
}

new Vue({
  el: '#clients',
  data: {
    showModal: false
  },
  router,
  store,
  components: { Clients },
  template: '<Clients/>'
})