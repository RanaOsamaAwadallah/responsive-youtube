<template>
  <div class="header" :class="{ mobile: isMobile }">
    <img v-if="!isMobile" class="logo" alt="Youtube logo" src="../../../assets/logo.png" />
    <img
      v-if="isMobile"
      class="mobile-logo"
      alt="Youtube logo"
      src="../../../assets/logo-mobile.png"
    />
    <SearchBar :isMobile="isMobile" v-on:search-click="$emit('search-btn-click',$event)" />
  </div>
</template>

<script>
import SearchBar from "../search/search.component";

export default {
  name: "Header",
  components: {
    SearchBar
  },
  mounted: function() {
    this.$emit("search-btn-click", "");
  },
  props: {
    isMobile: Boolean
  }
};
</script>

<style lang="scss" scoped>
$box-shadow: 0px 0px 3px 2px #ccc;
.header {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  &:not(.mobile) {
    -webkit-box-shadow: $box-shadow;
    -moz-box-shadow: $box-shadow;
    box-shadow: $box-shadow;
    position: fixed;
    top: 0;
    width: 60%;
    background-color: white;
  }
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
