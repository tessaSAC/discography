<template>
<VField
  class="FieldSearch"
  placeholder="Find games by title"
  @inputChanged="searchTermChanged(...arguments)"
/>
</template>

<script>
import VField from '../views/VField'

export default {
  components: {
    VField,
  },
  methods: {
    searchTermChanged(){
      this.$emit('searchTermChanged', arguments[0])
    }
  }
}
</script>
