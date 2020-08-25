<template>
  <div class="wrapper">
    <div class="card">
      <div class="card_image" @click="displayPage">
        <Slider :photos="project.photos" :prLogo="logo" />
      </div>
      <!-- Card for project Display -->
      <div class="card_content" v-if="this.isConfirmed === false">
        <h2 class="card_title">{{ project.title }}</h2>
        <p class="card_text">{{ project.description }}</p>
        <div class="card-statistics">
          <div>
            <b
              ><span>{{ project.donation_current }}</span></b
            >
            <span>donateurs</span>
          </div>

          <div>
            <b>{{ donPercentage }}</b
            ><span>%</span>
          </div>
        </div>
        <DonnationCounter
          :dons="project.donation_current"
          :goal="project.donation_goal"
          @set-perc="getPercentage"
        />
        <Button :onClick="nav">donner Gratuitement</Button>
      </div>
      <!-- Card for project confirmation -->
      <div class="card_content" v-else>
        <h2 class="card_title">{{ project.title }}</h2>
        <p class="card_text">{{ confirmationText }}</p>
        <socialMedia />
        <Button :onClick="nav">Confirmation</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./layout/Button.vue";
import socialMedia from "./layout/socialMedia.vue";
import Slider from "../components/layout/Slider.vue";
import DonnationCounter from "./layout/donationCounter.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Project",
  data() {
    return {
      confirmationText: " Hurray ! what a social champion!",
      donPercentage: 0,
      logo: ""
    };
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    order: String
  },
  computed: mapGetters(["isDonating", "isConfirmed"]),

  methods: {
    nav() {
      //Starting the donation exp
      if (this.isConfirmed === false) {
        this.startExp();
      } else {
        // back from donation exp,to the listing page & THE END !!!
        this.endExp();
      }
    },
    startExp() {
      this.$router.push("/donation");
      this.setProject(this.project);
      this.tgIsDonating(true);
      this.tgSelected(true);
    },
    endExp() {
      this.tgIsDonating(false);
      this.tgSelected(false);
      this.incrementDon();
      this.updateProject();
      this.tgModal(false);
      this.$router.push("/");
    },
    displayPage() {
      this.$router.push("/displayProject");
      this.setProject(this.project);
      this.tgSelected(true);
    },
    updateProject() {
      // preparing new project object
      const newProject = {
        ...this.project,
        donation_current: this.project.donation_current + 1,
      };
      this.dispUpdatedProject(newProject);
    },
    //matching the project asso_id to the real asso then attributing its logo to the project listed
    mapAssoLogoToProject() {
      const allAssos = this.$store.state.projects.Assos;

      const foundAsso = allAssos.find(el => el._id === this.project.asso_id);
      if (foundAsso) {
        this.logo = foundAsso.logo;
      }
    },
    ...mapActions([
      "tgIsDonating",
      "incrementDon",
      "setProject",
      "tgSelected",
      "tgModal",
      "setIsConfirmed",
      "dispUpdatedProject",
    ]),
    setConfirmation() {
      if (this.order === "confirmed") {
        this.setIsConfirmed(true);
      } else {
        this.setIsConfirmed(false);
      }
    },
    beforDestroy() {
      this.endExp();
    },
    getPercentage(perc) {
      this.donPercentage = perc;
      if (this.donPercentage > 100) {
        this.donPercentage = 100;
      }
    },
  },

  components: {
    Button,
    socialMedia,
    Slider,
    DonnationCounter,
  },
  //watching for confirmation order from parent
  watch: {
    order: () => {
      if (this.order === "confirmed") {
        this.setIsConfirmed(true);
      } else {
        this.setIsConfirmed(false);
      }
    },
  },

  created() {
    // first
    this.mapAssoLogoToProject();
    //then
    if (!this.isDonating) {
      this.btnName = "Confirmation";
    }
    this.setConfirmation();
  },
};
</script>

<style scoped lang="scss" src="../assets/css/_project.scss"></style>
