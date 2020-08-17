<template>
  <div>
    <nav>
      <ul class="menu">
        <router-link to="/"
          ><li class="logo">
            <img
              src="../../assets/logo-official.png"
              width="170"
              height="95"
              alt="goodeed"
            /></li
        ></router-link>
        <li class="item" v-if="$route.name !== 'Donation'">
          <router-link to="/">Home</router-link>
        </li>
        <li class="item don">
          <router-link to="/about" v-if="$route.name !== 'Donation'"
            >About</router-link
          >
        </li>
        <li class="item" v-if="$route.name === 'Donation'">
          <a href="#">Don financé par </a>
        </li>
        <li class="item button" v-if="$route.name !== 'Donation'">
          <a href="#">Dons : {{ donCounter }}</a>
        </li>
        <li class="item button" v-if="isPlaying">
          <ProgressBar />
        </li>
      </ul>
    </nav>
    <div v-if="show"><Success /></div>
  </div>
</template>

<script>
import ProgressBar from "../layout/ProgressBar.vue";
import { mapGetters } from "vuex";
import Success from "./Success.vue";

export default {
  name: "Header",

  components: {
    ProgressBar,
    Success
  },
  data() {
    return {
      show: false
    };
  },

  watch: {
    donCounter: function() {
      this.show = true;
    }
  },

  computed: mapGetters(["isPlaying", "donCounter", "isConfirmed"])
};
</script>

<style scoped lang="scss" src="../../assets/css/layout/_header.scss"></style>
