<template>
  <video
    id="my-video"
    class="video-js"
    preload="auto"
    width="640"
    height="336"
    poster="MY_VIDEO_POSTER.jpg"
    data-setup="{}"
    autoplay
    style="'{cursor: pointer}'"
  >
    <source :src="myVid" type="video/mp4" />
    <source :src="myVid" type="video/webm" />
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
      >
    </p>
  </video>
</template>

<script>
export default {
  props: ["myVid"]
};
</script>

<style scoped lang="scss"></style>
