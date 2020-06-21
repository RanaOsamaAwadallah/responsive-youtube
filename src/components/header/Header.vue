<template>
  <div class="header" :class="{ mobile: isMobile }">
    <img
      v-if="!isMobile"
      class="logo"
      alt="Youtube logo"
      src="../../assets/logo.png"
    />
    <img
      v-if="isMobile"
      class="mobile-logo"
      alt="Youtube logo"
      src="../../assets/logo-mobile.png"
    />
    <SearchBar :isMobile="isMobile" />
  </div>
</template>

<script>
import SearchBar from "../shared/search/search.component";
export default {
  name: "Header",
  components: {
    SearchBar,
  },
  props: {
    isMobile: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.mobile {
    background-color: #d40f1c;
    padding: 10px;
    height: auto;
  }
  .logo {
    width: 80px;
    height: 24px;
  }
  .mobile-logo {
    width: 35px;
    height: 24px;
  }
}
</style>
