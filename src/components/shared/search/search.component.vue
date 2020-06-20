<template>
  <div class="search-bar">
    <input
      class="search-bar-input"
      type="text"
      placeholder="Search"
      aria-label="Search"
    />
    <button class="search-bar-button">
      <font-awesome-icon icon="search" size="md" />
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
$border-color: #cacaca;
$border-radius: 0.188em;
.search-bar {
  display: flex;
  height: 32px;
  margin-left: 5%;
  width: 100%;
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
    }
  }
}
</style>
