import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/pages/Anwender/LandingPage.vue'
import LoginPage from '@/pages/Anwender/LoginPage.vue'
import RegisterPage from '@/pages/Anwender/RegisterPage.vue'


const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
 {
  path: '/register',
  name: 'Registrierung',
  component: RegisterPage
}

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
