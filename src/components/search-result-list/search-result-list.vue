<template>
  <div class="search-result" :class="{ mobile: isMobile }">
    <div v-for="(video, index) in videos" :key="index + video.title" class="video-list-item">
      <router-link :to="{ name: 'Video', params: { id: video.id } }">
        <div class="video-list-item__img">
          <img :src="video.thumbnails.medium.url" />
        </div>
      </router-link>
      <div class="video-list-item__data">
        <router-link :to="{ name: 'Video', params: { id: video.id } }">
          <div class="title">{{ video.title }}</div>
        </router-link>
        <div class="channel-name">{{ video.channelTitle }}</div>
        <div class="description" v-if="!isMobile">{{ video.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search-result",
  props: {
    isMobile: Boolean,
    channels: Array,
    videos: Array
  },
  methods: {
    openVideo: function(id) {
      this.$router.go({ path: `/video/${id}` });
    }
  }
};
</script>

<style lang="scss" scoped>
$faded-font-color: #606060;
.search-result {
  .video-list-item {
    display: flex;
    margin-bottom: 2%;

    .video-list-item__img img {
      width: 246px;
      height: 138px;
      margin-right: 16px;
      cursor: pointer;
    }
    .video-list-item__data {
      .title {
        color: black;
        overflow: hidden;
        font-size: 1.2rem;
        font-weight: 400;
        text-overflow: ellipsis;
        white-space: normal;
        padding-bottom: 5px;
        cursor: pointer;
      }

      .channel-name,
      .description {
        color: $faded-font-color;
        font-size: 0.8rem;
        margin-bottom: 1%;
      }
    }
  }
  &.mobile {
    .video-list-item__img img {
      height: auto;
      width: 175px;
    }
    .video-list-item__data {
      .title {
        font-size: 0.9rem;
        padding-bottom: 5px;
      }

      .channel-name,
      .description {
        color: $faded-font-color;
        font-size: 0.8rem;
        margin-bottom: 1%;
      }
    }
  }
}
</style>
