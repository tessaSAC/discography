<template>
<div class="VRating">
  <div class="titleRating">
    <div class="gameTitle"><h1>{{ gameTitle }}</h1></div>
    <div class="hypesRatings"><p>{{ hypes }} <span class="hype-heart">❤</span> | {{ rating }} %</p></div>
  </div>
  <div>Released in {{ releaseMonth }} {{ releaseYear }} by {{ studio }}</div>
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

    studio: {
      type: String,
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
</style>
