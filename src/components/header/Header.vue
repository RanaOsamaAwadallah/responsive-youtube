<template>
  <div class="header" :class="{ mobile: isMobile }">
    <img v-if="!isMobile" class="logo" alt="Youtube logo" src="../../assets/logo.png" />
    <img v-if="isMobile" class="mobile-logo" alt="Youtube logo" src="../../assets/logo-mobile.png" />
    <SearchBar :isMobile="isMobile" v-on:search-click="onSearchClick($event)" />
  </div>
</template>

<script>
import SearchBar from "../shared/search/search.component";
import { mapSearchListToVideoList } from "../../helpers/mappers";

export default {
  name: "Header",
  components: {
    SearchBar
  },
  props: {
    isMobile: Boolean
  },
  data: () => {
    return {
      videos: Array,
      isLoading: Boolean
    };
  },
  methods: {
    onSearchClick: function(searchValue) {
      this.getSearchedVideos(searchValue);
    },
    getSearchedVideos: function(searchValue) {
      this.isLoading = true;
      this.$gapi
        .request({
          path: "https://www.googleapis.com/youtube/v3/search?",
          method: "GET",
          params: {
            part: "snippet",
            maxResults: 5,
            q: searchValue
          }
        })
        .then(response => {
          this.videos = mapSearchListToVideoList(response);
          this.isLoading = false;
        });
    }
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
  &:not(.mobile) {
    -webkit-box-shadow: $box-shadow;
    -moz-box-shadow: $box-shadow;
    box-shadow: $box-shadow;
    position: fixed;
    top: 0;
    width: 100%;
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
