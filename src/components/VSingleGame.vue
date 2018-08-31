<template>
<div class="VSingleGame">
  <div class="gameCover">
    <img src="" alt="">
  </div>

  <VRating
    :gameTitle="gameTitle"
    :hypes="hypes"
    :rating="rating"
    :releaseDate="releaseDate"
    :studio="studio"
  >
  </VRating>
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

    studio: {
      type: String,
      // required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
$coverLength: 210px;

.VSingleGame {
  padding: 72px 48px;
}

.gameCover {
  width: $coverLength;
  height: $coverLength;

  margin-bottom: 36px;

  img {
    object-position: 0 0;
    object-fit: cover;
  }
}
</style>
