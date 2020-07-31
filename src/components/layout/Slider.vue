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
  </div>
</template>

<script>
import { VueFlux, FluxIndex, FluxPagination, FluxPreloader } from "vue-flux";

export default {
  components: {
    VueFlux,
    FluxIndex,
    FluxPagination,
    FluxPreloader,
  },

  data: () => ({
    vfOptions: {
      autoplay: true,
    },
    vfImages: [],
    vfTransitions: ["fade"],
    vfCaptions: [],
  }),
  props: ["photos"],
  created() {
    this.photos.map((p) => this.vfImages.push(p));
  },
};
</script>
<style lang="scss" scoped>
.slider {
  height: 100%;
  max-height: 400px;
  width: 100%;
  max-width: 600px;
}
</style>
