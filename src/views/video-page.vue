<template>
  <div class="video-page" :class="{ mobile: isMobile() }">
    Video PAge {{ $route.params.id }}
    <div class="video-page__video">
      <LazyYoutubeVideo :src="`https://www.youtube.com/embed/${this.$route.params.id}`" />
    </div>
    <div class="video-page__detalis"></div>
    <div class="video-page__related-videos"></div>
  </div>
</template>

<script>
import { mixinDetictingMobile } from "../helpers/mixins";
import LazyYoutubeVideo from "vue-lazy-youtube-video";

export default {
  name: "VideoPage",
  components: { LazyYoutubeVideo },
  mixins: [mixinDetictingMobile],
  data: function() {
    return {
      video: Object
    };
  },
  created() {
    this.$gapi
      .request({
        path: "https://www.googleapis.com/youtube/v3/videos",
        method: "GET",
        params: {
          id: this.$route.params.id
        }
      })
      .then(response => {
        this.video = response;
      });
  }
};
</script>

<style scoped lang="scss"></style>
