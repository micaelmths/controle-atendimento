<template>
  <v-footer color="purple darken-3 lighten-1" padless app>
    <v-row justify="center" no-gutters>
      <!-- rota para relatório -->
      <router-link to="/relatorio">
        <v-btn large color="white" text rounded class="mx-3">
          <i class="fas fa-chart-pie"></i>
        </v-btn>
      </router-link>
      <!-- rota para home -->
      <router-link to="/">
        <v-btn large color="white" text rounded class="mx-3">
          <i class="fas fa-home"></i>
        </v-btn>
      </router-link>
      <!-- rota para novo usuario -->
      <router-link to="/pacientes">
        <v-btn large color="white" text rounded class="mx-3">
          <i class="fas fa-user"></i>
        </v-btn>
      </router-link>
      <v-col class="purple darken-4 lighten-2 py-1 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Micael Ramos</strong> -
        Desenvolvedor Web
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'b-menu'
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--primary);
  padding: 0 30px;
  color: var(--textColorDark);
}
svg {
  font-size: 26px;
}
</style>
