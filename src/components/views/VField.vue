<template>
<div class="VField">
  <VInput
    :label="label"
    :errorHandler="errorHandler"
  >
    <input
      v-bind="$attrs"
      v-model.trim="updatedInput"
      :placeholder="placeholder"
      class="input"
    />

  </VInput>
</div>
</template>

<script>
import VInput from './VInput'

export default {
  components: {
    VInput,
  },

  inheritAttrs: false,

  props: {
    errorHandler: {
      type: Function,
      required: false,
    },

    label: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: '',
    },

    userInput: {
      type: String,
      default: '',
    },
  },

  data: _ => ({
    updatedInput: '',
  }),
  mounted(){
    this.updatedInput = this.userInput
  },
  computed: {
    error() {
      if (this.errorHandler) return errorHandler(this.updatedInput)
    },
  },

  watch: {
    updatedInput() {
      this.$emit('inputChanged', this.updatedInput)
    },
  },

  // updated() {
  //   // Hack to allow parent to force-edit `this.updatedInput` where it normally wouldn't because `this.userInput` looks unchanged
  //   // This fails cause userInput is static, and updated is called everytime the input changes.
  //   this.updatedInput = this.userInput
  // },
}
</script>

<style lang="scss">
.VField {
  position: relative;
}
</style>
