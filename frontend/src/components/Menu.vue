<template>
  <div class="container">
    <!-- rota para relatório -->
    <router-link to="/relatorio">
      <span style="font-size:34px;">
        <i class="fas fa-chart-pie"></i>
      </span>
    </router-link>
    <!-- rota para home -->
    <router-link to="/">
      <span style="font-size:34px;">
        <i class="fas fa-home"></i>
      </span>
    </router-link>
    <!-- rota para novo usuario -->
    <router-link to="/novopaciente">
      <span style="font-size:34px;">
        <i class="fas fa-user-plus"></i>
      </span>
    </router-link>
  </div>
</template>

<script>
export default {

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
    color: var(--textColorDark)
  }
</style>
