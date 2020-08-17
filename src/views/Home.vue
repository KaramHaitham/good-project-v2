<template>
  <div class="container">
    <!-- <HelloWorld msg="Welcome" /> -->
    <h1 :style="pad">Projects List</h1>
    <ProjectList />
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectList from "../components/ProjectList.vue";

export default {
  name: "Home",
  components: {
    ProjectList
  },
  data() {
    return {
      pad: {
        padding: "0 40px"
      }
    };
  }
};
</script>
