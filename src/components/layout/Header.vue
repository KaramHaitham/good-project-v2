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
    Success,
  },
  data() {
    return {
      show: false,
    };
  },

  watch: {
    donCounter: function() {
      this.show = true;
    },
  },

  computed: mapGetters(["isPlaying", "donCounter", "isConfirmed"]),
};
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: sans-serif;
  font-size: 16px;
}
nav {
  padding: 0 15px;
}
.logo {
  order: 0;
  cursor: pointer;
}
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media all and (max-width: 600px) {
  .menu {
    flex-wrap: wrap;
    &__li {
      flex-basis: 100%;
    }
  }

  .don {
    order: 1;
  }
}

.don {
  flex: 1;
}

a {
  color: rgb(15, 0, 0);
  text-decoration: none;
}
ul {
  list-style-type: none;
}

img {
  max-width: 100%;
  height: auto;
}
.item {
  padding: 10px;
  order: 1;
  position: relative;
  display: block;
  width: auto;
}
.item.button {
  padding: 9px 5px;
}
.item:not(.button) a:hover,
.item a:hover::after {
  color: #ccc;
}
</style>
