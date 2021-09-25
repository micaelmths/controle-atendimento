import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Paciente from '../views/Paciente.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/relatorio',
    name: 'Relatório',
    component: Dashboard
  },
  {
    path: '/pacientes',
    name: 'Paciente',
    component: Paciente
  }
]

const router = new VueRouter({
  routes
})

export default router
