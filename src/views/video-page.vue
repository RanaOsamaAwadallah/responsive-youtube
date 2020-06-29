<template>
  <div class="video-page" :class="{ mobile: isMobile() }">
    Video PAge {{ $route.params.id }}
    <div class="video-page__video"></div>
    <div class="video-page__detalis"></div>
    <div class="video-page__related-videos"></div>
  </div>
</template>

<script>
import { mixinDetictingMobile } from "../helpers/mixins";

export default {
  name: "VideoPage",
  components: {},
  mixins: [mixinDetictingMobile],
};
</script>

<style scoped lang="scss"></style>
