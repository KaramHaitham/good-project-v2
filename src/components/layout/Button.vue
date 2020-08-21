<template>
  <button @click="onClick" class="button" :class="theme">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    onClick: {
      type: Function,
      required: true
    },
    theme: {
      type: String,
      default: "default"
    }
  }
};
</script>

<style scoped lang="scss" src="../../assets/css/layout/_button.scss"></style>
