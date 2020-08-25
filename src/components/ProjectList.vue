<template>
  <div class="container">
    <div class="item">
      <Project
        v-for="pr in getProjects"
        :key="pr.id"
        :project="pr"
        :order="'not_confirmed'"
      />
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
      ads: [],
    };
  },
  components: {
    Project,
  },
  computed: mapGetters([
    "isConfirmed",
    "getProjects",
    "getProject",
    "donCounter"
  ]),

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
        this.dispatchProjects(this.projects);
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

        let innerList = [];
        for (let key in data) {
          innerList.push(data[key]);
        }
        this.dispatchAsso(innerList[0]);
      } catch (error) {
        alert(error + " Server problem /:");
      }
      //dirty workaround the firebase dummy server delay
      this.$forceUpdate();
    },
    // Initializing the env
    init() {
      this.tgSelected(false);
      this.tgIsPlaying(false);
      this.tgIsDonating(false);
      this.tgModal(false);
    },
    ...mapActions([
      "dispatchAdcamp",
      "dispatchAsso",
      "tgIsPlaying",
      "tgSelected",
      "tgIsDonating",
      "tgModal",
      "dispatchProjects",
    ]),
  },
  created() {
    //condition to avoid repetetive http requests
    if (this.donCounter === 0) {
      this.getData();
      this.getAdCamps();
      this.getAsso();
      this.init();
    }
  },
};
</script>

<style scoped lang="scss" src="../assets/css/_projectList.scss"></style>
