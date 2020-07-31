<template>
  <div class="container">
    <!-- If modal not displayed, Display it. -->
    <div
      class="overlay"
      :style="this.isPlaying ? 'display:none' : 'display:block'"
    >
      <div class="overlay-content">
        <div
          v-if="(isDonating && !isPlaying) || (isDonating && donCounter > 0)"
        >
          <p>
            Clique sur play et regarde la vidéo pendant au moins 20 secondes
            pour faire ton don gratuitement
          </p>
          <!-- Confirmation of Play, Close Modal & start the advertisment -->
          <div class="closebtn">
            <Button :onClick="startExp">Play</Button>
          </div>
          <div class="arr"><Arrows /></div>
        </div>
        <!-- Back after video for confirmation -->
        <div v-else class="confirmation">
          <Project :project="selectedPr" :order="'confirmed'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../layout/Button.vue";
import Arrows from "./Arrows.vue";
import Project from "../Project.vue";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "Modal",
  components: {
    Button,
    Arrows,
    Project,
  },
  data() {
    return {
      selectedPr: {},
    };
  },
  methods: {
    ...mapActions(["tgModal", "tgIsPlaying"]),
    startExp() {
      this.tgModal(true);
      this.tgIsPlaying(true);
    },
  },
  computed: mapGetters([
    "isPlaying",
    "getProject",
    "isDonating",
    "isSelected",
    "donCounter",
  ]),
  created() {
    if (this.getProject) {
      this.selectedPr = this.$store.state.projects.isProject;
    }
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
}

.container {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  position: absolute;
}
.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
  font-family: "Lato", sans-serif;
  width: 100%;
}

.closebtn {
  position: absolute;
  top: 50px;
  right: 48%;
  font-size: 60px;
  cursor: pointer;
}
.arr {
  position: absolute;
  top: 50px;
  right: 49%;
}
.confirmation {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  margin-left: 33%;
  margin-top: 7%;
  text-align: left;
  letter-spacing: 0.02em;
  font-size: 15px;
}
</style>
