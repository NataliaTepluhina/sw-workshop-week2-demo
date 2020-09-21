import Cookies from 'js-cookie'

export default [
  { path: '/', component: () => import('./views/Home.vue'), name: 'home' },
  {
    path: '/releases',
    component: () => import('./views/ReleaseList.vue'),
    name: 'release-list',
  },
  {
    path: '/releases/:id',
    component: () => import('./views/Release.vue'),
    name: 'release',
    props: true,
  },
  {
    path: '/login',
    component: () => import('./views/Login.vue'),
    name: 'login',
    beforeEnter: (to, from, next) => {
      const isAuthenticated = Cookies.get('logged_in')

      if (isAuthenticated) next({ name: 'home' })
      else next()
    },
  },
  {
    path: '*',
    component: () => import('./views/NotFound.vue'),
  },
]
