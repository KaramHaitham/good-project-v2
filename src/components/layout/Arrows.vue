<template>
  <span class="arrow  animate-right-to-left "></span>
</template>

<script>
export default {
  name: "Arrows"
};
</script>

<style lang="scss" scoped>
.arrow {
  display: inline-block;
  padding: 3px;
  border-radius: 5px 0px 0 5px;
  &:after {
    content: "";
    position: absolute;
    border-top: 11px solid transparent;
    border-bottom: 11px solid transparent;
    border-left: 11px solid white;
  }
}

.animate-right-to-left {
  animation-name: move-right-to-left;
  animation-duration: 1s;
  animation-delay: 0.1s;
  animation-iteration-count: infinite;
  animation-direction: alternative;
}

@keyframes move-right-to-left {
  0% {
    transform: translateX(-5%);
    box-shadow: -3px 5px 5px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: translateX(-60%);
    box-shadow: -3px 5px 5px rgba(0, 0, 0, 0.4);
  }
  100% {
    transform: translateX(-5%);
    box-shadow: -3px 5px 5px rgba(0, 0, 0, 0.2);
  }
}
</style>
