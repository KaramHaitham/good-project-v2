<template>
  <div class="wrapper">
    <div class="card">
      <div class="card_image" @click="displayPage">
        <Slider :photos="this.project.photos" />
      </div>
      <!-- Card for project Display -->
      <div class="card_content" v-if="this.isConfirmed === false">
        <h2 class="card_title">{{ this.project.title }}</h2>
        <p class="card_text">
          {{ this.project.description }}
        </p>
        <div class="card-statistics">
          <div class="item">
            Don Gratuit : {{ this.project.donation_current }}
          </div>
          <div class="item">Donateurs : {{ this.project.donation_goal }}</div>
        </div>
        <Button :onClick="nav">donner Gratuitement</Button>
      </div>
      <!-- Card for project confirmation -->
      <div class="card_content" v-else>
        <h2 class="card_title">{{ this.project.title }}</h2>
        <p class="card_text">
          {{ confirmationText }}
        </p>
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

<style scoped lang="scss">
.wrapper {
  display: inline-flex;
  padding: 1rem;
  color: #353e44;
  font-family: "Quicksand", serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
}

@media (min-width: 40rem) {
  .wrapper {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .wrapper {
    width: 33.3333%;
  }
}
.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  overflow: hidden;
}

.card_image {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  cursor: pointer;
}
.card_content {
  padding: 20px 20px 15px;
  background: linear-gradient(to bottom left, #e9f6fa 40%, #d2f0fa 100%);
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  zoom: 1;
}

.card_title {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}

.card_text {
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}
.card-statistics {
  display: flex;

  justify-content: space-between;
  padding: 10px 20px 15px;
  background: linear-gradient(to bottom left, #e9f6fa 40%, #d2f0fa 100%);
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  zoom: 1;
}
</style>
