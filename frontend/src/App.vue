<template>
  <div id="app">
    <router-view/>
    <Menu/>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
:root {
  --bg: #FAFAFA;
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
</style>
