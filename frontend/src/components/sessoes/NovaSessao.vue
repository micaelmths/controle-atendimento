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
          <span class="text-h5">Nova Sessão</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Nome completo" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="success" @click="dialog = false">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

export default {
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style></style>
