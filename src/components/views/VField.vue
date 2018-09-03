<template>
<div class="VField">
  <VInput
    :label="label"
    :errorHandler="errorHandler"
  >
    <input
      v-model.trim="userInput"
      :placeholder="placeholder"
      class="input"
    />

    <div
      v-show="userInput"
      class="btnClear"
      @click="clearSearch"
    >&times;</div>

  </VInput>
</div>
</template>

<script>
import VInput from './VInput'

export default {
  components: {
    VInput,
  },

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
  },

  data: _ => ({
    userInput: '',
  }),

  computed: {
    error() {
      if (this.errorHandler) return errorHandler(this.userInput)
    },
  },

  watch: {
    userInput() {
      this.$emit('inputChanged', this.userInput)
    }
  },

  methods: {
    clearSearch() {
      this.userInput = ''
    },
  },
}
</script>

<style lang="scss">
.VField {
  position: relative;

  .VInput {
    .input {
      padding: 0 1.6rem 0 1rem;
    }
  }

  .btnClear {
    position: absolute;
    left: calc(100% - 1.4rem);
    bottom: 13px;
    background: #fff;
    color: $colorsTextLight;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
