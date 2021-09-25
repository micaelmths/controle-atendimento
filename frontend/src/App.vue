<template>
  <v-app id="app">
    <ToolNavBar />
    <router-view/>
    <Menu />
  </v-app>
</template>

<script>
import Menu from '@/components/Menu.vue'
import ToolNavBar from '@/components/ToolNavBar.vue'

export default {
  name: 'App',
  components: {
    Menu,
    ToolNavBar
  }
}
</script>

<style>
:root {
  --bg: #FFFFFF;
  --primary: #439FA5;
  --secondary: #EB5BA7;
  --textColor: #FFFFFF;
  --textColorDark: #0F0F0F;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  background: var(--bg);
}
a {
  color: inherit;
}
::-webkit-scrollbar {
 display: none;
}
</style>
