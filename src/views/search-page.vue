<template>
  <div class="search-page" :class="{ mobile: isMobile() }">
    <div v-if="errorMessage">{{ this.errorMessage }}</div>
    <!-- To be replaced with body and routes -->
    <SearchResult v-else :isMobile="isMobile()" :channels="channels" :videos="videos" class="body" />
  </div>
</template>

<script>
import SearchResult from "../components/search-result-list/search-result-list";
import { mixinDetictingMobile } from "../helpers/mixins";

export default {
  name: "SearchPage",
  components: {
    SearchResult
  },
  mixins: [mixinDetictingMobile],
  props: ["videos"]
};
</script>

<style scoped lang="scss">
</style>
