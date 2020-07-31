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
    Project,
  },
  computed: mapGetters(["getProject"]),
  created() {
    console.log(this.getProject);
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  color: #efefef;
}

.container {
  background: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  min-height: 24em;
  max-width: 100%;
  max-height: 100%;

  position: absolute;

}

.item {
  max-width: 50%;
  background: gray;
}

.fixed {
  flex: none;
  max-width: 50%;
}

.confirmation {
  width: 50%;
  height: 50%;
  top: 5%;
  border-radius: 5px;
  position: relative;
}
</style>
