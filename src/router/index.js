import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import DetailPage from '@/views/DetailPage.vue'
import Cart from '@/views/Cart.vue'
import Login from '@/views/Login.vue'
import Checkout from '@/views/Checkout.vue'
import Confirmation from '@/views/Confirmation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: Products
    },
    {
      path: '/details/:productId',
      name: 'detailpage',
      component: DetailPage
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/confirmation',
      name: 'Confirmation',
      component: Confirmation
    }
  ]
})

export default router
