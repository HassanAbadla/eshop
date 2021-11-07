import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: Checkout,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
