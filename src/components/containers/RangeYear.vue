<template>
<div class="RangeYear">
  <VInput label="Release year" class="inputs">
    <input
      v-model.trim="fromYear"
      placeholder="1900"
      type="number"
      min="1900"
      max="2018"
      class="boxField"
    />
    <!-- TODO: Is min and max required? They weren't in the wireframes. -->

    <div class="labelTo">to</div>

    <input
      v-model.trim="toYear"
      placeholder="2018"
      type="number"
      min="1900"
      max="2018"
      class="boxField"
    />
  </VInput>
</div>
</template>

<script>
import VInput from '../views/VInput'

export default {
  components: {
    VInput,
  },

  data: _ => ({
    fromYear: '',
    toYear: '',
  }),
}
</script>

<style lang="scss">
.RangeYear {
  .inputs {
    width: 100%;
    display: flex;

    .labelTo {
      @extend %typeParagraph;
      padding: 8px 12px;
    }
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .boxField {
    @extend %typeParagraph;
    height: 32px;
    width: 100%;
    padding: 0 1rem;
    border-radius: 4px;
    border: 1px solid $colorsTextLight;
  }
}
</style>