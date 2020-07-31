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
      hide: true,
    };
  },

  created() {
    this.bind = setTimeout(() => {
      this.hide = false;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.meter {
  height: 1.5px;
  position: relative;
  background: #f3efe6;
  overflow: hidden;
}

.meter span {
  display: block;
  height: 100%;
}

.progress {
  background-color: rgb(50, 168, 82);
  -webkit-animation: progressBar 0.5s ease-in-out;
  -webkit-animation-fill-mode: both;
  -moz-animation: progressBar 3s ease-in-out;
  -moz-animation-fill-mode: both;
}

@-webkit-keyframes progressBar {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@-moz-keyframes progressBar {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
