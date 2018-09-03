<template>
<div class="VRatings">
  <div class="rowTop">
    <h1>{{ title }}</h1>

    <div class="ratings"> <!-- TODO: Ing Shaun why was one text p and one div? -->
      {{ hypes }} <span class="heart">❤</span> | {{ rating }}% ({{ numRatings }})
    </div>
  </div>

  <div class="rowBottom">Released in {{ releaseMonth }} {{ releaseYear }}</div>
</div>
</template>

<script>
const locale = 'en-us'

export default {
  props: {
    title: {
      type: String,
      required: true,
    },

    hypes: {
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
  },

  computed: {
    date() {
      return new Date(this.releaseDate)
    },

    releaseMonth() {
      return this.date.toLocaleString(locale, { month: 'short' })
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

  .ratings {
    color: $colorsTextLight;
  }
  .heart {
    color: $colorsLove;
  }

  // TODO: Ing Shaun what is the space between each item?
  // (title and ratings, ratings and release)
  .rowTop {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .rowBottom {
    @extend %typeParagraph;
  }
}
</style>
