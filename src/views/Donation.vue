<template>
  <div class="container">
    <!-- Starting the the Donation exp via Modal -->
    <Modal />
    <div class="content" v-if="isPlaying === true">
      <div class="logo">{{ title }}</div>
      <Video :myVid="uri" @click="redirect" />
    </div>
  </div>
</template>

<script>
import Video from "../components/Video.vue";
import Modal from "../components/layout/Modal.vue";
import { mapGetters } from "vuex";
import { timerMixin } from "../Mixins/TimerMixin"

export default {
  name: "Donation",
  mixins: [timerMixin],
  data() {
    return {
      campaigns: [],
      uri: "",
      title: "",
      redirect: "",
      binder:null,
      timer:0,
    };
  },

  components: {
    Video,
    Modal,
  },
  computed: mapGetters(["isPlaying", "getCampaigns"]),
  //fetch ads from store and chose a random campaign to play
  created() {
    const rand = Math.floor(Math.ceil(Math.random() * 3) - 1);
    const arr = [];
    for (let key in this.getCampaigns) {
      arr.push(this.getCampaigns[key]);
    }
    this.campaigns = arr;
    this.uri = this.campaigns[rand].video_uri;
    this.title = this.campaigns[rand].title;
    this.redirect = this.campaigns[rand].redirect_uri;
  },

// Assuring that the user stays 20secs , Not completeted,
//Started Implimenting the Mix'ins to share same code as progress bar ...
// // Warning before leaving
//   beforeRouteLeave(to, from, next) {
//     const answer = window.confirm(
//       "Do you really want to leave?  Must stay 20 secs to save Lives!!!     Click cancel to stay"
//     );
//     if (answer) {
//       next();
//     } else {
//       next(false);
//     }
//   },
};
</script>

<style scoped lang="scss">
* {
  border-radius: 5px;
  box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1);
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-self: center;
}
.container {
  min-height: 100vh;
  width: 100%;
  color: #fff;
  background: #7455a0;
  padding: 0 2% 0 2%;
  position: absolute;
}

.logo {
  width: 20%;
  height: 100px;
  margin-top: 5%;
  margin-bottom: 5%;
  border: 1px;
  background: transparent;
  position: relative;
}

.content {
  width: 50%;
  height: 50%;
  top: 5%;
  border-radius: 5px;
  position: relative;
}
</style>
