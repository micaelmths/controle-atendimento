import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import NovoPaciente from '../views/NovoPaciente.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/relatorio',
    name: 'Relatorio',
    component: Dashboard
  },
  {
    path: '/novopaciente',
    name: 'NovoPaciente',
    component: NovoPaciente
  }
]

const router = new VueRouter({
  routes
})

export default router
