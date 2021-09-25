<template>
  <v-container grid-list-xs fluid>
    <v-main>
      <el-table
        :data="
          tableData.filter(
            data =>
              !search || data.nome.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 100%"
      >
        <el-table-column label="Nome" prop="nome"> </el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="Buscar paciente"
              :items="scope"
            />
          </template>
          <template slot-scope="scope" >
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >Editar</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Deletar</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </v-main>
  </v-container>
</template>

<script>
import mocks from '@/database/mocks.json'

export default {
  data () {
    return {
      search: '',
      tableData: []
    }
  },
  computed: {
    pacientes () {
      return mocks.pacientes
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    async carregarPacientes () {
      this.tableData = await mocks.pacientes
    }
  },
  async mounted () {
    await this.carregarPacientes()
  }
}
</script>

<style></style>
