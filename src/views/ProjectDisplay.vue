<template>
  <div class="container">
    <!-- top -->
    <section class="section-primary">
      <div class="project-slider"></div>
      <!-- slider -->
      <Slider src="url" :photos="this.selectedPr.photos"> </Slider>

      <div class="project-side">
        <div class="images">
          <img src="" alt="logo" /> <img src="" alt="flage" />{{
            this.selectedPr.country
          }}<img />
        </div>
        <div class="project-statistics">
          <div class="item">
            Don Gratuit : {{ this.selectedPr.donation_current }}
          </div>
          <div class="item">
            Donateurs : {{ this.selectedPr.donation_goal }}
          </div>
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
        <div>
          {{ this.selectedPr.description }}
        </div>
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
      selectedPr: {},
    };
  },
  methods: {
    nav() {
      this.tgSelected();
      this.$router.push("donation");
    },
    ...mapActions(["tgSelected"]),
  },

  computed: mapGetters(["isSelected"]),
  created() {
    this.selectedPr = this.$store.state.projects.isProject;
  },
};
</script>

<style lang="scss" scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  margin: 1% 1% 1% 1%;
  text-rendering: optimizeLegibility;
  zoom: 1;
}

.container {
  width: 960px;
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  border-left: 1px solid #dfe6eb;
  border-right: 1px solid #dfe6eb;
}

@media screen and (min-width: 992px) {
  .container {
    width: 970px;
  }
}

@media screen and (min-width: 768px) {
  .container {
    width: 970px;
  }
}
@media screen and (min-width: 768px) {
  .container {
    width: 970px;
  }
}

.section-primary {
  background: white;
  display: flex;
  width: 96%;
  margin: 1% 3% 1% 2%;
  padding: 1% 2% 1% 2%;
}

.project-slider {
}

.project-side {
  display: flex;
  flex-flow: column wrap;
  width: 28%;
  //margin-left: 10px;
  margin: auto;
}
.images {
  display: flex;
  justify-content: space-between;
}
.project-statistics {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;
  background: white;
}
.item {
  align-self: flex-end;
}

.btn {
  text-decoration: none;
}

.section-seconday {
  display: flex;
  justify-content: space-around;
  height: 50%;
  width: 96%;
  justify-items: center;
  margin: 1% 3% 1% 2%;
  flex: 100;
}

.secondry-content {
  -ms-flex: none;
  flex: none;
  width: 100%;
  padding: 0 15px;
  margin-top: 30px;
  flex: 200;
}

.secondary-side {
  //display: flex;
  //flex-flow: column wrap;
  width: 25%;
  justify-content: space-around;
  //margin: auto;
  justify-content: center;
  justify-items: center;
  align-items: center;
}

div {
  display: block;
}
</style>
