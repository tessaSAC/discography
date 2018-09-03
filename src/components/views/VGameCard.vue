<template>
<div
  class="VGameCard"
  :class="{ selected: selected }"
  @click="$emit('gameSelected', id)"
>
  <VRatings
    :title="title"
    :hypes="hypes"
    :rating="rating"
    :numRatings="numRatings"
    :releaseDate="releaseDate"
  />

  <div class="divider" />

  <div class="summary">{{ summary }}</div>
</div>
</template>

<script>
import VRatings from './VRatings'

export default {
  components: {
    VRatings,
  },

  props: {
    hypes: {
      type: Number,
      required: true,
    },

    id: {
      type: Number,
      required: true,
    },

    numRatings: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
    },

    releaseDate: {
      type: Number,
      required: true,
    },

    selected: {
      type: Boolean,
      default: false,
    },

    summary: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.VGameCard {
  height: 180px;
  display: flex;
  flex-direction: column;
  background: $colorsPaper;
  border-radius: 4px;
  box-shadow: 5px 6px 7px 0px $colorsTextLight;
  padding: 18px 24px;

  & + .VGameCard {
    margin-top: 24px;
  }

  &.selected {
    position: relative;
    left: -13px;
    top: -14px;
    box-shadow: 18px 20px 10px 0px $colorsTextLight;
  }

  .divider {
    width: 90px;
    height: 1px;
    margin-top: 12px;
    margin-bottom: 9px;
    background: $colorsTextLight;
  }

  .summary {
    // TODO: Ing Shaun what is line spacing as summary looks odd!
    overflow-y: auto;
    @extend %typeParagraph;
    color: $colorsText;
  }
}
</style>
