<template>
  <div class="container">
    <div class="item fixed">
      <div class="confirmation">
        <Project :project="this.getProject" />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "../components/Project.vue";
import { mapGetters } from "vuex";

export default {
  name: "Confirmation",
  components: {
    Project
  },
  computed: mapGetters(["getProject"])
};
</script>

<style scoped lang="scss" src="../assets/css/_confirmation.scss"></style>
