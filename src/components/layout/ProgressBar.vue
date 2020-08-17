<template>
  <div class="basbar">
    <div class="progressbar">
      <div class="progressbar text-center" :style="{ width: progress * 10 + 'px' }">
        <!-- Display progress bar or confirmation button in header -->
        <span v-if="show">{{ this.progress }}</span>
        <template v-else>
          <span @click="endExp" :style="this.show ? '' : 'cursor: pointer;'">confirm donation</span>
          <div class="arr">
            <Arrow />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "./Arrows";
import { mapActions } from "vuex";
import { timerMixin } from "../../Mixins/TimerMixin";

export default {
  name: "ProgressBar",
  mixins: [timerMixin],
  components: { Arrow },
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
    ...mapActions(["tgModal", "tgIsDonating", "tgIsPlaying"])
  }
};
</script>

<style scoped lang="scss" src="../../assets/css/layout/progressBar.scss"></style>
