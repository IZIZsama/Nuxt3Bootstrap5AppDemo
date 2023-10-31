import { createRouter, createWebHistory } from 'vue-router'
import WeeklyPage from '@/pages/WeeklyPage.vue'
import Description from '@/pages/Description.vue'

const routes = [
  { path: '/weekly', component: WeeklyPage },
  { path: '/description', component: Description }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
