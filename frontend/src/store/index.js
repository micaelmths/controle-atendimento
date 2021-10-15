import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // pacientes
    pacientes: []
  },
  mutations: {
    // pacientes
    listarPacientes: (state, pacientes) => {
      state.pacientes = pacientes
    }
  },
  actions: {
    // pacientes
    buscarPacientesApi: async ({ commit, state }, params) => {
      const { data } = await axios.get(`${api.apiURL}pacientes`)
      commit('listarPacientes', data)
      return data
    },
    deletarPaciente: async ({ commit, state }, params) => {
      await axios.delete(`${api.apiURL}pacientes/${params}`)

      const { data } = await axios.get(`${api.apiURL}pacientes`)
      commit('listarPacientes', data)
      console.log('state', state)
    }
  },
  modules: {
  }
})
