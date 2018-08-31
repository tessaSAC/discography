<template>
<div class="VDropdown">
  <select class="boxField">
    <option v-if="placeholder" value="-1" disabled>{{ placeholder }}</option>
    <option v-for="optionValue in Object.keys(options)" :key="optionValue" value="optionValue">{{ options[optionValue] }}</option>
  </select>
</div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object
    },
    placeholder: {
      type: String
    }
  }
}
</script>

<style>
</style>
