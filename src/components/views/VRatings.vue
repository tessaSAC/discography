<template>
<div class="VRatings">
  <div class="titleRating">
    <div class="gameTitle"><h1>{{ gameTitle }}</h1></div>
    <div class="hypesRatings"><p>{{ hypes }} <span class="heart">❤</span> | {{ rating }}% ({{ numRatings }})</p></div>
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

    numRatings: {
      type: Number,
      // required: true,
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

<style lang="scss">
@import 'src/styles/typographyExtends';

.VRatings {
  display: flex;
  flex-direction: column;

  .hypesRatings {
    flex: 0 0 auto;
    color: $colorsTextLight;

    .heart {
      color: $colorsLove;
    }
  }

  .titleRating {
    display: flex;
    flex-wrap: wrap;
  }

  .gameTitle {
    min-width: 400px;
    color: $colorsTextHeavy;
  }

  .releaseOn {
    @extend %typeParagraph;
  }
}
</style>
