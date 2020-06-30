<template>
  <div id="app">
    <Header v-cloak :isMobile="isMobile()" v-on:search-btn-click="getSearchedVideos($event)" />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/shared/header/Header.vue";
import { mixinDetictingMobile } from "./helpers/mixins";

export default {
  name: "App",
  mixins: [mixinDetictingMobile],
  components: {
    Header
  }
};
</script>

<style scoped lang="scss"></style>
