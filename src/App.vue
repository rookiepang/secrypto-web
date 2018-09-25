<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import Home from '@/components/Home.vue';

export default {
  name: 'app',
  components: {
    Home,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Proxima Nova', 'Avenir', sans-serif, 'Open Sans', 'Avenir Next', Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
