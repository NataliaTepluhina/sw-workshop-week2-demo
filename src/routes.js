import Home from './views/Home.vue'
import ReleaseList from './views/ReleaseList.vue'
import Release from './views/Release.vue'

export default [
  { path: '/', component: Home, name: 'home' },
  {
    path: '/releases',
    component: ReleaseList,
    name: 'release-list',
  },
  {
    path: '/releases/:id',
    component: Release,
    name: 'release',
    props: true,
  },
]
