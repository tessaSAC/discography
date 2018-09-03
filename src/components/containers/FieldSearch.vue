<template>
<div class="FieldSearch">
  <VInput :label="label">
    <input
      v-model.trim="query"
      v-bind="$attrs"
      :placeholder="placeholder"
      class="input"
    />
    <div
      v-if="isSearched"
      class="cancelIcon"
      @click="clearSearch"
    >&times;</div>
  </VInput>
</div>
</template>

<script>
import VInput from '../views/VInput'

export default {
  components: {
    VInput,
  },

  props: {
    label: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: '',
    },
  },

  data: _ => ({
    query: '',
  }),

  computed: {
    isSearched() {
      return this.query.length
    },
  },

  methods: {
    clearSearch() {
      this.query = ''
    },
  },
}
</script>

<style lang="scss">
.FieldSearch {
  .input {
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
}
</style>
