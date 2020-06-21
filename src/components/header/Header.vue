<template>
  <div class="header">
    <img v-if="!isMobile" alt="Vue logo" src="../../assets/logo.png" />
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from "../shared/search/search.component";
export default {
  name: "Header",
  components: {
    SearchBar
  },
  props: {
    isMobile: Boolean
  }
};
</script>

<style scoped>
.header {
  height: 56px;
  display: flex;
  justify-content: space-between;
}
img {
  width: 80px;
  height: 24px;
}
</style>
