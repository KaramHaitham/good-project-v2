<template>
  <!-- show progress bar only-->
  <div>
    <div class="basbar" v-if="show">
      <div class="progressbar">
        <div
          class="progressbar text-center"
          :style="{ width: progress * 10 + 'px' }"
        >
          <div>{{ this.progress }}</div>
        </div>
      </div>
    </div>
    <!-- Show button only -->
    <div v-else class="confirmationButton">
      <Button
        :onClick="endExp"
        :class="btnTheme"
        :style="this.show ? '' : 'cursor: pointer;'"
      >
        confirm donation
        <div class="arr">
          <Arrow />
        </div>
      </Button>
    </div>
  </div>
</template>

<script>
import Arrow from "./Arrows";
import Button from "./Button";
import { mapActions } from "vuex";
import { timerMixin } from "../../Mixins/TimerMixin";

export default {
  name: "ProgressBar",
  mixins: [timerMixin],
  components: { Arrow, Button },
  data() {
    return {
      btnTheme: "confirm",
    };
  },
  //Timer controls
  methods: {
    endExp() {
      this.tgShow(false);

      //display confirmation modal
      this.tgModal(false);
      this.tgIsPlaying(false);
      this.tgIsDonating(false);
      this.progress = 0;
    },
    ...mapActions(["tgModal", "tgIsDonating", "tgIsPlaying"]),
  },
};
</script>

<style
  scoped
  lang="scss"
  src="../../assets/css/layout/progressBar.scss"
></style>
