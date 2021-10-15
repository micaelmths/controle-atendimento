<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-col class="d-flex justify-end">
          <v-btn color="success" dark rounded v-bind="attrs" v-on="on">
            <v-icon>fas fa-plus</v-icon>
          </v-btn>
        </v-col>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Novo Paciente</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="nomePaciente"
                  label="Nome completo"
                  required
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="success" @click="salvarNovoPaciente">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios'
import api from '@/api'
import mocks from '@/database/mocks.json'

export default {
  data () {
    return {
      dialog: false,
      nomePaciente: ''
    }
  },
  methods: {
    async salvarNovoPaciente () {
      if (this.nomePaciente) {
        await axios.post(`${api.apiURL}pacientes`, {
          nome: this.nomePaciente,
          usuario_id: mocks.usuarioLogado.id
        })
        this.$emit('evtCarregarPacientes')
        this.nomePaciente = ''
        this.dialog = false
        this.$notify({
          title: 'Sucesso',
          message: 'Paciente Adicionado',
          type: 'success'
        })
      } else {
        alert('Você precisa digitar um nome.')
      }
    }
  }
}
</script>

<style></style>
