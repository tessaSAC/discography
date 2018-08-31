<template>
    <div class="VSearchField">
        <input v-model.trim="searchTerm" v-bind="$attrs" class="boxField"/>
        <div v-if="isSearched" class="cancelIcon" @click="clearSearch()"> &times; </div>
    </div>
</template>

<script>
export default {
  data: _ => ({
    searchTerm: '',
  }),
  computed: {
    isSearched() {
      return this.searchTerm.length > 0
    },
  },
  methods: {
    clearSearch() {
      this.searchTerm = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.VSearchField {
  width: 100%;
  position: relative;

  .cancelIcon {
    position: absolute;
    top: 8px;
    right: 12px;

    &:hover {
      cursor: pointer;
      color: $colorsTextLight;
    }
  }
}
</style>
