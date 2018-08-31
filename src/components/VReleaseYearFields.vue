<template>
  <div class="VReleaseYearFields">
    <div class="yearField fromYear">
      <input type="number" min="1900" max="2018" v-model.trim="fromYear" placeholder="1900" class="boxField"/>
    </div>
    <div class="toSeperator">to</div>
    <div class="yearField toYear">
      <input type="number" min="1900" max="2018" v-model.trim="toYear" placeholder="2018" class="boxField"/>
    </div>
  </div>
</template>

<script>
export default {
  data: _ => ({
    fromYear: '',
    toYear: '',
  }),
}
</script>

<style lang="scss" scoped>
.VReleaseYearFields {
  width: 100%;
  display: flex;

  .toSeperator {
    @extend %typeParagraph;
    padding: 8px 12px;
  }
}
</style>
