<template>
  <div class="container">
    <div class="item">
      <Project v-for="pr in projects" :key="pr.id" :project="pr" :order="'not_confirmed'" />
    </div>
  </div>
</template>

<script>
import Project from "./Project";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProjectList",
  data() {
    return {
      projects: [],
      assos: [],
      ads: []
    };
  },
  components: {
    Project
  },
  computed: mapGetters(["isConfirmed"]),

  // Async js, Fetching data frim mock server, firebase.
  methods: {
    async getData() {
      try {
        let response = await this.$http.get(
          "https://goodproject-7340a.firebaseio.com/projectsData.json"
        );
        let data = await response.json();
        for (let key in data) {
          this.projects = [...data[key]];
        }
      } catch (error) {
        alert(error + " Server problem /:");
      }
    },
    async getAdCamps() {
      try {
        let response = await this.$http.get(
          "https://goodproject-7340a.firebaseio.com/adCampData.json"
        );
        let data = await response.json();
        for (let key in data) {
          this.ads = [...data[key]];
        }
        this.dispatchAdcamp(this.ads);
      } catch (error) {
        alert(error + " Server problem /:");
      }
    },
    async getAsso() {
      try {
        let response = await this.$http.get(
          "https://goodproject-7340a.firebaseio.com/asData.json"
        );
        let data = await response.json();
        for (let key in data) {
          this.assos = [...data[key]];
        }
        this.dispatchAsso(this.assos);
      } catch (error) {
        alert(error + " Server problem /:");
      }
    },
    // Initializing the env
    init() {
      this.tgSelected();
      this.tgIsPlaying();
      this.tgIsDonating();
      this.tgModal();
    },

    ...mapActions([
      "dispatchAdcamp",
      "dispatchAsso",
      "tgIsPlaying",
      "tgSelected",
      "tgIsDonating",
      "tgModal"
    ])
  },

  created() {
    this.getData();
    this.getAdCamps();
    this.getAsso();
  }
};
</script>

<style scoped lang="scss" src="../assets/css/_projectList.scss"></style>

