<template>
  <div id="app">
    <Header :isMobile="true" />
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
