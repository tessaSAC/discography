<template>
    <div class="VLabelFieldError">
        <div class="label"><label>{{ label }}</label></div>
        <slot @err="assignErrMsg()" @clearErr="clearErrMsg()"/>
        <div class="errorMsg">{{ errorMsg }}</div>
    </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
  },
  data: _ => ({
    errorMsg: '',
  }),
  methods: {
    assignErrMsg(payload) {
      this.errorMsg = payload.message
    },
    clearErrMsg() {
      this.errorMsg = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.VLabelFieldError {
  width: 100%;
  .label {
    width: 100%;
    height: 15px;
    margin-bottom: 9px;
  }
  .errorMsg {
    @extend %typeCaption;
    width: 100%;
    color: $colorsLove;
    margin-top: 6px;
    height: 15px;
  }
}
</style>
