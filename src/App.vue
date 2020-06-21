<template>
  <div id="app">
    <Header :isMobile="isMobile()" />
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import { mixinDetictingMobile } from "./helpers/mixins";

export default {
  name: "App",
  components: {
    Header,
  },
  mixins: [mixinDetictingMobile],
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
