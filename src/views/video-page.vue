<template>
  <div id="video-page" :class="{ mobile: isMobile() }">
    <div class="video-page__video">
      <LazyYoutubeVideo
        :src="`https://www.youtube.com/embed/${$route.params.id}`"
      />
    </div>
    <div class="video-page__detalis">
      <div class="video-title">{{ videoTitle }}</div>
      <div class="channel-title">{{ channelTitle }}</div>
    </div>
    <div class="video-page__related-videos">
      <SearchResult :isMobile="isMobile()" :videos="relatedVideos" />
    </div>
  </div>
</template>

<script>
import { mixinDetictingMobile } from "../helpers/mixins";
import LazyYoutubeVideo from "vue-lazy-youtube-video";
import SearchResult from "../components/search-result-list/search-result-list";
import { mapSearchListToChannelAndVideoList } from "../helpers/mappers";
import { handleScrollToBottom } from "../helpers/services";

export default {
  name: "VideoPage",
  components: { LazyYoutubeVideo, SearchResult },
  mixins: [mixinDetictingMobile],
  props: ["videos"],
  data: function() {
    return {
      relatedVideos: Array,
      isLoading: Boolean,
      nextPageToken: String,
      errorMessage: String,
    };
  },
  computed: {
    video() {
      return this.videos.find((video) => video.id === this.$route.params.id);
    },
    videoTitle() {
      return this.videos ? this.video.title : "";
    },
    channelTitle() {
      return this.videos ? this.video.channelTitle : "";
    },
  },
  beforeDestroy() {
    document
      .getElementById("video-page")
      .removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.getRelatedVideos();
    document
      .getElementById("video-page")
      .addEventListener("scroll", this.handleScroll);
  },
  methods: {
    getRelatedVideos() {
      const _this = this;
      this.$gapi
        .request({
          path: `https://www.googleapis.com/youtube/v3/search`,
          method: "GET",
          params: {
            part: "snippet",
            type: "video",
            id: this.$route.params.id,
          },
        })
        .then((response) => {
          const responseLists = mapSearchListToChannelAndVideoList(response);

          if (typeof _this.relatedVideos !== "object") {
            _this.relatedVideos = responseLists.videosList;
          } else {
            _this.relatedVideos.push(...responseLists.videosList);
          }
          _this.nextPageToken = responseLists.nextPageToken || "";
          _this.isLoading = false;
          _this.errorMessage = "";
        })
        .catch((response) => {
          _this.errorMessage = response.result.error.message;
        });
    },
    handleScroll: function() {
      let el = document.getElementById("video-page");
      handleScrollToBottom(el, this.getRelatedVideos);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/_variables.scss";

.video-page__detalis {
  border-bottom: 1px solid #dedede;
  line-height: 2rem;
  padding: 15px 0;
  margin-bottom: 15px;

  .video-title {
    font-weight: normal;
    font-size: 1.5rem;
  }

  .channel-title {
    color: $faded-font-color;
    font-size: 1.2rem;
  }
}
</style>
