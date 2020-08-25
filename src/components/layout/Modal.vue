<template>
  <div class="container">
    <!-- If modal not displayed, Display it. -->
    <div class="overlay" :style="this.isPlaying ? 'display:none' : 'display:block'">
      <div class="overlay-content">
        <div v-if="(isDonating && !isPlaying) || (isDonating && donCounter > 0)">
          <h3>
            Clique sur play et regarde la vidéo pendant au moins 20 secondes
            pour faire ton don gratuitement
          </h3>

          <!-- Confirmation of Play, Close Modal & start the advertisment -->
          <div class="closebtn">
            <Button :onClick="startExp">Play</Button>
          </div>
          <div class="arr">
            <Arrows />
          </div>
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
    Project
  },
  data() {
    return {
      selectedPr: {}
    };
  },
  methods: {
    ...mapActions(["tgModal", "tgIsPlaying"]),
    startExp() {
      this.tgModal(true);
      this.tgIsPlaying(true);
    }
  },
  computed: mapGetters([
    "isPlaying",
    "getProject",
    "isDonating",
    "isSelected",
    "donCounter"
  ]),
  created() {
    if (this.getProject.length !== 0) {
      this.selectedPr = this.getProject;
    }
  }
};
</script>

<style scoped lang="scss" src="../../assets/css/layout/_modal.scss"></style>
