<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import "./assets/css/app.scss";
import Header from "./components/layout/Header.vue";
export default {
  components: {
    Header
  }
};
</script>
