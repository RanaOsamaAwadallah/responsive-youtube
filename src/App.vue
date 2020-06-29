<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mixinDetictingMobile } from "./helpers/mixins";

export default {
  name: "App",
  mixins: [mixinDetictingMobile],
};
</script>

<style scoped lang="scss"></style>
