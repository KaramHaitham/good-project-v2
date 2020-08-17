<template>
  <div class="wrapper">
    <div class="card">
      <div class="card_image" @click="displayPage">
        <Slider :photos="this.project.photos" />
      </div>
      <!-- Card for project Display -->
      <div class="card_content" v-if="this.isConfirmed === false">
        <h2 class="card_title">{{ this.project.title }}</h2>
        <p class="card_text">{{ this.project.description }}</p>
        <div class="card-statistics">
          <div class="item">Don Gratuit : {{ this.project.donation_current }}</div>
          <div class="item">Donateurs : {{ this.project.donation_goal }}</div>
        </div>
        <Button :onClick="nav">donner Gratuitement</Button>
      </div>
      <!-- Card for project confirmation -->
      <div class="card_content" v-else>
        <h2 class="card_title">{{ this.project.title }}</h2>
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Project",
  data() {
    return {
      confirmationText: " Hurray ! what a social champion!"
    };
  },
  props: ["project", "order"],
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
      this.tgModal(false);
      this.$router.push("/");
    },
    displayPage() {
      this.$router.push("/displayProject");
      this.setProject(this.project);
      this.tgSelected(true);
    },
    ...mapActions([
      "tgIsDonating",
      "incrementDon",
      "setProject",
      "tgSelected",
      "tgModal",
      "setIsConfirmed"
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
    }
  },

  components: {
    Button,
    socialMedia,
    Slider
  },
  //watching for confirmation order from parent
  watch: {
    order: () => {
      if (this.order === "confirmed") {
        this.setIsConfirmed(true);
      } else {
        this.setIsConfirmed(false);
      }
    }
  },
  created() {
    if (!this.isDonating) {
      this.btnName = "Confirmation";
    }
    this.setConfirmation();
  }
};
</script>

<style scoped lang="scss" src="../assets/css/_project.scss"></style>