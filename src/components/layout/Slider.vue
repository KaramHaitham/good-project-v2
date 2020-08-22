<template>
  <div class="slider">
    <vue-flux
      :options="vfOptions"
      :images="vfImages"
      :transitions="vfTransitions"
      :captions="vfCaptions"
      ref="slider"
    >
      <template v-slot:preloader>
        <flux-preloader />
      </template>

      <template v-slot:pagination>
        <flux-pagination />
      </template>

      <template v-slot:index>
        <flux-index />
      </template>
    </vue-flux>
    <div class="project-logo">
      <img :src="prLogo" class="logo" alt="the logo" />
    </div>
  </div>
</template>

<script>
import { VueFlux, FluxIndex, FluxPagination, FluxPreloader } from "vue-flux";

export default {
  components: {
    VueFlux,
    FluxIndex,
    FluxPagination,
    FluxPreloader
  },

  data: () => ({
    vfOptions: {
      autoplay: true
    },
    vfImages: [],
    vfTransitions: ["fade"],
    vfCaptions: []
  }),
  props: ["photos", "prLogo"],
  created() {
    this.photos.map(p => this.vfImages.push(p));
  }
};
</script>

<style scoped lang="scss" src="../../assets/css/layout/_slider.scss"></style>
