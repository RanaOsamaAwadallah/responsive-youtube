<template>
  <div id="app" :class="{mobile:isMobile()}">
    <Header v-cloak :isMobile="isMobile()" v-on:search-btn-click="getSearchedVideos($event)" />
    <router-view class="body" v-cloak :videos="videos" :errorMessage="errorMessage" />
  </div>
</template>

<script>
import Header from "./components/shared/header/Header.vue";
import { mixinDetictingMobile } from "./helpers/mixins";
import { mapSearchListToChannelAndVideoList } from "./helpers/mappers";

export default {
  name: "App",
  mixins: [mixinDetictingMobile],
  components: {
    Header
  },
  props: ["query"],
  data: () => {
    return {
      videos: Array,
      channels: Array,
      isLoading: Boolean,
      searchValue: String,
      nextPageToken: String,
      errorMessage: String
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    getSearchedVideos: function(searchValue) {
      this.isLoading = true;
      this.$router.replace({ name: "Search", query: { query: searchValue } });
      this.$gapi
        .request({
          path: "https://www.googleapis.com/youtube/v3/search?",
          method: "GET",
          params: {
            part: "snippet",
            maxResults: 15,
            q: searchValue || this.query,
            nextPageToken: this.nextPageToken
          }
        })
        .then(response => {
          const responseLists = mapSearchListToChannelAndVideoList(response);

          if (this.searchValue !== searchValue) {
            this.videos = responseLists.videosList;
            this.channels = responseLists.channelList;
            this.searchValue = searchValue;
          } else {
            this.videos.push(...responseLists.videosList);
            this.channels.push(...responseLists.channelList);
          }
          this.nextPageToken = responseLists.nextPageToken || "";
          this.isLoading = false;
          this.errorMessage = "";
        })
        .catch(response => {
          this.errorMessage = response.result.error.message;
        });
    },
    handleScroll: function() {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.getSearchedVideos(this.searchValue);
      }
    }
  }
};
</script>

<style scoped lang="scss">
$padding: 0 20%;
$padding-mobile: 2% 5%;
#app {
  [v-cloak] {
    display: none;
  }
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
