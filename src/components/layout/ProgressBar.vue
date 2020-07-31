<template>
  <div class="basbar">
    <div class="progressbar">
      <div
        class="progressbar text-center"
        :style="{ width: progress * 10 + 'px' }"
      >
        <!-- Display progress bar or confirmation button in header -->
        <span v-if="show">{{ this.progress }}</span>
        <template v-else
          ><span @click="endExp" :style="this.show ? '' : 'cursor: pointer;'"
            >confirm donation</span
          >
          <div class="arr"><Arrow /></div>
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
    ...mapActions(["tgModal", "tgIsDonating", "tgIsPlaying"]),
  },
};
</script>

<style lang="scss" scoped>
.progressbar {
  height: 25px;
  margin: auto;
  transition: width 2s;
  background-color: #1bbaff;
  margin: 0;
  color: white;
  width: 0;
  border-radius: 1px;
  background: #1bbaff;
}
.basbar {
  border-radius: 10px;
  border: 2px solid #1bbaff;
  width: 200px;
  height: 25px;
}

.text-center {
  text-align: center;
  font-weight: 600;
}

.shake:hover {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
.arr {
  position: absolute;
  top: 0;
  right: 10%;
}
</style>
