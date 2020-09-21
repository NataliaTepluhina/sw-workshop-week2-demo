import Vue from 'vue'
import App from './App.vue'
import '@/assets/tailwind.css'
import VueRouter from 'vue-router'
import routes from './routes'
import Cookies from 'js-cookie'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = Cookies.get('logged_in')

  if (to.name !== 'login' && !isAuthenticated)
    next({ name: 'login', query: { route: to.name } })
  else next()
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
