import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Comparateur from '../components/Comparateur.vue'

const routes = [
  { path: '/', component: HelloWorld ,name: 'Incrementer' },
  { path: '/comparateur', component: Comparateur ,name: 'Comparateur' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router