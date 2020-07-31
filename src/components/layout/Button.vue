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
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  color: #ffffff;
  padding: 1em 2em;
  letter-spacing: 0.02em;
  font-size: 15px;
  border-radius: 4px;
  font-weight: 600;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: #1bbaff;
  transition: 0.3s;

  &:hover {
    background-color: #17a9e7;
  }
}
</style>
