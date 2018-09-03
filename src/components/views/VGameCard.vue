<template>
<div class="VGameCard">
  <VRating
    :title="title"
    :hypes="hypes"
    :rating="rating"
    :releaseDate="releaseDate"
  />

  <hr align="left">

  <div class="summary">
      {{ summary }}
  </div>
</div>
</template>

<script>
import VRating from './VRating'

export default {
  components: {
    VRating,
  },

  props: {
    title: {
      type: String,
      // required: true,
    },

    hypes: {
      type: Number,
      // required: true,
      default: 0,
    },

    rating: {
      type: Number,
      // required: true,
    },

    releaseDate: {
      type: Number,
      // required: true,
    },

    summary: {
      type: String,
      default: 'Summary text here',
    },
  },
}
</script>

<style lang="scss">
.VGameCard {
  height: 180px;
  padding: 18px 24px;
  display: flex;
  flex-direction: column;
  background: $colorsPaper;
  border-radius: 4px;
  box-shadow: 5px 6px 7px 0px $colorsTextLight;

  & + .VGameCard {
    margin-top: 24px;
  }

  .summary {
    @extend %typeParagraph;
    color: $colorsText;
    overflow-y: auto;
  }

  hr {  width: 90px; }
}
</style>
