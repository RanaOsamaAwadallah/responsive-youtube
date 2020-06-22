<template>
  <div id="app" :class="{mobile: isMobile()}">
    <Header :isMobile="isMobile()" v-on:search-btn-click="getSearchedVideos($event)" />
    <SearchResult :isMobile="isMobile()" :channels="channels" :videos="videos" class="body" />
  </div>
</template>

<script>
import Header from "./components/shared/header/Header.vue";
import SearchResult from "./components/search-result-list/search-result-list";
import { mixinDetictingMobile } from "./helpers/mixins";
import { mapSearchListToChannelAndVideoList } from "./helpers/mappers";

export default {
  name: "App",
  components: {
    Header,
    SearchResult
  },
  mixins: [mixinDetictingMobile],
  data: () => {
    return {
      videos: Array,
      channels: Array,
      isLoading: Boolean
    };
  },
  methods: {
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
          const responseLists = mapSearchListToChannelAndVideoList(response);
          this.videos = responseLists.videosList;
          this.channels = responseLists.channelList;
          this.isLoading = false;
        });
    }
  }
};
</script>

<style scoped lang="scss">
$padding: 0 20%;
$padding-mobile: 2% 5%;
#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &:not(.mobile) {
    & > div {
      padding: $padding;
    }
    .body {
      margin-top: 100px;
    }
  }
  &.mobile {
    & > div {
      padding: $padding-mobile;
    }
  }
}
</style>
