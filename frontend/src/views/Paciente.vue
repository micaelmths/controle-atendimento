<template>
  <v-container grid-list-xs fluid>
    <v-main>
      <v-col class="d-flex justify-end">
        <NovoPaciente @evtCarregarPacientes="buscarPacientesApi"/>
      </v-col>
      <v-spacer></v-spacer>
      <el-table :data="buscarPacientes()" style="width: 100%">
        <el-table-column sortable label="Nome" prop="nome"> </el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              :scope="scope"
              size="mini"
              placeholder="Buscar paciente"
            />
          </template>
          <template slot-scope="scope">

            <v-btn
              class="my-1"
              color="warning"
              rounded
              small
              text
              @click="handleEdit(scope.$index, scope.row)"
            >
              <v-icon>fas fa-edit</v-icon>
            </v-btn>
            <v-btn
              class="my-1"
              color="error"
              rounded
              small
              text
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              <v-icon>fas fa-trash-alt</v-icon>
            </v-btn>
          </template>
        </el-table-column>
      </el-table>
    </v-main>
  </v-container>
</template>

<script>
import NovoPaciente from '@/components/pacientes/NovoPaciente.vue'
import mocks from '@/database/mocks.json'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    NovoPaciente
  },
  data () {
    return {
      search: '',
      tableData: [],
      usuarioLogado: mocks.usuarioLogado
    }
  },
  computed: {
    ...mapState(['pacientes'])
  },
  methods: {
    ...mapActions(['buscarPacientesApi', 'deletarPaciente']),
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      this.$confirm(`Deseja deletar ${row.nome} ?`, {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        title: 'Deletar paciente',
        type: 'error'
      }).then(() => {
        this.deletarPaciente(row.id)
        this.$message({
          type: 'success',
          message: 'Paciente deletado'
        })
      }).catch(() => {

      })
    },
    abrirModalNovoCliente () {
      this.$refs.abrirModalNovoCliente.show()
    },
    async carregarPacientes () {
      this.tableData = await this.pacientes.filter(paciente => {
        return paciente.usuario_id.id === this.usuarioLogado.id
      })
    },
    buscarPacientes () {
      if (this.search) {
        return this.tableData.filter(
          data =>
            !this.search ||
            data.nome.toLowerCase().includes(this.search.toLowerCase())
        )
      }
      return this.tableData
    }
  },
  watch: {
    pacientes () {
      this.carregarPacientes()
    }
  },
  async mounted () {
    this.buscarPacientesApi()
  },
  async created () {
    await this.carregarPacientes()
  }
}
</script>

<style></style>
