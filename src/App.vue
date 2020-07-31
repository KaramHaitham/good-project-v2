<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ecf9ff;
  min-height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  //flex-direction: column;
  //display: flex;
}
</style>
