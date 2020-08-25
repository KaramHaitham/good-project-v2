<template>
  <div class="donCounterBasbar">
    <div class="donCounterbar" :style="{ width: calcPercentage() + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: "donnationCounter",
  props: ["dons", "goal"],
  methods: {
    calcPercentage() {
      const percentage = Math.round((100 * this.dons) / this.goal);
      this.$emit("set-perc", percentage);
      return percentage;
    },
  },
};
</script>

<style
  scoped
  lang="scss"
  src="../../assets/css/layout/_donationCounter.scss"
></style>
