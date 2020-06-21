<template>
  <div class="search-bar" :class="{ mobile: isMobile }">
    <input
      class="search-bar-input"
      type="text"
      placeholder="Search YouYube"
      aria-label="Search"
      v-model="searchText"
    />
    <button
      v-show="isMobile && searchText"
      class="search-bar-clear-button"
      @click="clearSearchText()"
    >
      <font-awesome-icon icon="window-close" size="lg" />
    </button>
    <button class="search-bar-button">
      <font-awesome-icon icon="search" size="lg" />
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    isMobile: Boolean,
  },
  data: () => {
    return {
      searchText: "",
    };
  },
  methods: {
    clearSearchText: function() {
      this.searchText = "";
    },
  },
};
</script>

<style scoped lang="scss">
$border-color: #cacaca;
$border-radius: 0.188em;
$placeholder-mobile-color: white;
.search-bar {
  display: flex;
  height: 32px;
  width: 100%;
  margin-left: 5%;
  &.mobile {
    .search-bar-input {
      background-color: transparent;
      border: none;
      outline: none;
      &::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: $placeholder-mobile-color;
        opacity: 1; /* Firefox */
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: $placeholder-mobile-color;
      }

      &::-ms-input-placeholder {
        /* Microsoft Edge */
        color: $placeholder-mobile-color;
      }
      &:focus {
        background-color: white;
        border: none;
      }
    }
    .search-bar-button {
      flex-grow: 1;
      border: none;
      background-color: transparent;
      color: white;
      &:active,
      &:focus {
        background-color: transparent;
        border: none;
      }
    }
    .search-bar-clear-button {
      background-color: white;
      border: none;
      svg {
        color: grey;
      }
    }
  }
  .search-bar-input {
    flex-grow: 9;
    border: 1px solid $border-color;
    border-right: none;
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
    padding: 0 1em;
  }
  .search-bar-button {
    flex-grow: 1;
    border: 1px solid $border-color;
    border-top-right-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    background-color: #ededed;
    &:active,
    &:focus {
      background-color: #d3d3d3;
      border: 1px solid $border-color;
      outline: none;
    }
  }
}
</style>
