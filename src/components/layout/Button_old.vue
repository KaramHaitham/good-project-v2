<template>
  <component
    :is="type"
    :href="href"
    :class="to ? 'button' : 'link'"
    @click="$router.push(to)"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "Button",
  props: {
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    }
  },
  computed: {
    type() {
      if (this.href) {
        return "a";
      } else {
        return "button";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.button {
  color: #ffffff;
  //padding: 0.8rem;
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
.link {
  //   display: inline-block;
  //   margin: 0.5em 0;
  //   padding: 1em 2em;
  //   background: #fff;
  //   border: 2px solid tomato;
  //   border-radius: 3px;
  //   color: tomato;
  //   font-family: "Quicksand", sans-serif;
  //   font-size: 1em;
  //   font-weight: 700;
  //   letter-spacing: 0.02em;
  //   line-height: 1;
  //   text-decoration: none;
  //   text-transform: uppercase;
  //   cursor: pointer;
  //   transition: 0.3s;
  padding: 10px;
  order: 1;
  position: relative;
  display: block;
  width: auto;
  text-decoration: none;
  color: rgb(15, 0, 0);

  &:hover::after {
    color: #ccc;
  }
}
</style>
