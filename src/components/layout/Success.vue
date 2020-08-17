<template>
  <div class="meter" :style="hide ? '' : 'display : none'">
    <span><span class="progress"></span></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bind: null,
      hide: true
    };
  },

  created() {
    this.bind = setTimeout(() => {
      this.hide = false;
    }, 1000);
  }
};
</script>

<style scoped lang="scss" src="../../assets/css/layout/_success.scss"></style>
