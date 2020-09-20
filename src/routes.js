import Home from './views/Home.vue'
import ReleaseList from './views/ReleaseList.vue'

export default [
  { path: '/', component: Home, name: 'home' },
  { path: '/releases', component: ReleaseList, name: 'release-list' },
]
