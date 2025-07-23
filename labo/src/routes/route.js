import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Comparateur from '../components/Comparateur.vue'

const routes = [
  { path: '/', component: HelloWorld ,name: 'Home' },
  { path: '/comparateur', component: Comparateur ,name: 'Comparateur' }
]

const router = createRouter({
  history: createWebHistory('/liyanadev/'),
  routes
})

export default router