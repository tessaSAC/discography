<template>
<div class="VGameCard">
    <VRating
      :gameTitle="gameTitle"
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
    gameTitle: {
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

<style lang="scss" scoped>
.VGameCard {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 18px 24px;
  background-color: $colorsPaper;
  box-shadow: 5px 6px 7px 0px $colorsTextLight;
  margin-bottom: 24px;
  border-radius: 4px;
  height: 180px;

  .summary {
    @extend %typeParagraph;
    color: $colorsText;
    overflow-y: auto;
  }
}
hr {
  width: 90px;
}
</style>
