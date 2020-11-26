import { createRouter, createWebHashHistory } from 'vue-router'

import PortfolioView from './views/PortfolioView.vue'

const routes = [
  { path: '/', component: PortfolioView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'underline font-bold'
})

export default router