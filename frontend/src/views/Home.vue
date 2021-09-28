<template>
  <v-container grid-list-xs fluid>
    <v-main>
      <v-col class="d-flex justify-end">
        <NovaSessao />
      </v-col>
      <v-spacer></v-spacer>
      <el-table :data="buscarSessoes()" style="width: 100%">
        <el-table-column
          :formatter="formatarData"
          sortable
          label="Data"
          prop="data"
          resizable
        >
        </el-table-column>
        <el-table-column
          :formatter="formatarHora"
          sortable
          label="Início"
          prop="horaInicial"
        >
        </el-table-column>
        <el-table-column
          :formatter="formatarNome"
          label="Pct(s)"
          prop="pacientes[0].nome"
        >
        </el-table-column>
        <el-table-column align="right">
          <template slot-scope="scope">
            <v-btn
              class="my-1"
              color="info"
              rounded
              small
              text
              @click="handleView(scope.$index, scope.row)"
            >
              <v-icon>fas fa-eye</v-icon>
            </v-btn>
          </template>
        </el-table-column>
      </el-table>
    </v-main>
  </v-container>
</template>

<script>
import NovaSessao from '@/components/sessoes/NovaSessao'
import mocks from '@/database/mocks.json'
import moment from 'moment'

export default {
  name: 'Home',
  components: {
    NovaSessao
  },
  data () {
    return {
      usuarioLogado: mocks.usuarioLogado,
      search: '',
      tableData: []
    }
  },
  computed: {
    sessoes () {
      return mocks.sessoes
    }
  },
  methods: {
    handleView (index, row) {
      console.log(index, row)
    },
    async carregarSessoes () {
      this.tableData = await mocks.sessoes.filter(sessao => {
        return sessao.profissional.id === this.usuarioLogado.id
      })
    },
    buscarSessoes () {
      if (this.search) {
        return this.tableData.filter(
          data =>
            !this.search ||
            data.nome.toLowerCase().includes(this.search.toLowerCase())
        )
      }
      return this.tableData
    },
    formatarData (row, column, cellValue, index) {
      return moment(String(cellValue)).format('DD/MM/YYYY')
    },
    formatarHora (row, column, cellValue, index) {
      return moment(String(cellValue)).format('HH:mm')
    },
    formatarNome (row, column, cellValue, index) {
      const conterPacientes = row.pacientes.length
      const arrNome = cellValue.split(' ')
      return conterPacientes > 1 ? `${arrNome[0]} +${conterPacientes - 1}` : arrNome[0]
    }
  },
  async mounted () {
    await this.carregarSessoes()
    this.formatarData()
  }
}
</script>
