<template>
<div class="VRating">
  <div class="titleRating">
    <div class="gameTitle"><h1>{{ gameTitle }}</h1></div>
    <div class="hypesRatings"><p>{{ hypes }} <span class="hype-heart">❤</span> | {{ rating }} %</p></div>
  </div>
  <div class="releaseOn">Released in {{ releaseMonth }} {{ releaseYear }}</div>
</div>
</template>

<script>
export default {
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
  },

  computed: {
    date() {
      return new Date(this.releaseDate)
    },

    releaseMonth() {
      return this.date.getMonth()
    },

    releaseYear() {
      return this.date.getFullYear()
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'src/styles/typographyExtends';

.VRating {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
.hypesRatings {
  flex: 0 0 auto;
  color: $colorsTextLight;

  .hype-heart {
    color: $colorsLove;
  }
}
.titleRating {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
}

.gameTitle {
  flex-grow: 1;
  min-width: 400px;
  color: $colorsTextHeavy;
}

.releaseOn {
  @extend %typeParagraph;
}
</style>
