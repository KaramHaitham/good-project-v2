<template>
  <button @click="onClick" class="button">
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
    }
  }
};
</script>

<style scoped lang="scss" src="../../assets/css/layout/_button.scss"></style>
