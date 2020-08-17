<template>
  <div class="container">
    <!-- top -->
    <section class="section-primary">
      <div class="project-slider"></div>
      <!-- slider -->
      <Slider src="url" :photos="this.selectedPr.photos"></Slider>

      <div class="project-side">
        <div class="images">
          <img src alt="logo" />
          <img src alt />
          {{
          this.selectedPr.country
          }}
          <img />
        </div>
        <div class="project-statistics">
          <div class="item">Don Gratuit : {{ this.selectedPr.donation_current }}</div>
          <div class="item">Donateurs : {{ this.selectedPr.donation_goal }}</div>
        </div>

        <Button :onClick="nav">Donner gratuitement</Button>
        <div class="why-donnat">
          L’accès aux vacances à toujours été une des priorités du Secours
          populaire français. C’est pourquoi l'association se mobilise chaque
        </div>
        <div class="share-project">Facebook and social medial</div>
      </div>
    </section>

    <!-- bottom -->
    <section class="section-seconday">
      <div class="secondry-content">
        <h1>{{ this.selectedPr.title }}</h1>
        <div>{{ this.selectedPr.description }}</div>
      </div>
      <div class="secondary-side">
        Secours populaire français. C’est pourquoi l'association se mobilise
        chaque L’accès aux vacances à toujours été une des priorités du Secours
        populaire français. C’est pourquoi l'association se mobilise chaque
        L’accès aux vacances à toujours été une des priorités du Secours
        populaire français. C’est pourquoi l'association se Secours populaire
        français. C’est pourquoi l'association se mobilise chaque L’accès aux
        vacances à toujours été une des priorités du Secours populaire français.
        C’est pourquoi l'association se mobilise chaque L’accès aux vacances à
        toujours
      </div>
    </section>
  </div>
</template>

<script>
import Slider from "../components/layout/Slider.vue";
import Button from "../components/layout/Button.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProjectDiplay",
  components: { Slider, Button },
  data() {
    return {
      selectedPr: {}
    };
  },
  methods: {
    nav() {
      this.tgSelected();
      this.$router.push("donation");
    },
    ...mapActions(["tgSelected"])
  },

  computed: mapGetters(["isSelected"]),
  created() {
    this.selectedPr = this.$store.state.projects.isProject;
  }
};
</script>

<style scoped lang="scss" src="../assets/css/views/_projectDisplay.scss"></style>
