<template>
  <div class="container">
    <!-- <HelloWorld msg="Welcome" /> -->
    <h1>Projects List</h1>
    <ProjectList />
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectList from "../components/ProjectList.vue";

export default {
  name: "Home",
  components: {
    ProjectList,
  },
};
</script>
<style lang="scss" scoped>
* {
  padding: 0 15px;
}
</style>
