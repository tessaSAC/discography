<template>
<div class="SingleGame">
  <div class="gameCover">
    <img :src="imgUrl" alt="">
  </div>

  <VRating
    :title="title"
    :hypes="hypes"
    :rating="rating"
    :releaseDate="releaseDate"
  >
  </VRating>
</div>
</template>

<script>
import VRating from '../views/VRating'

export default {
  components: {
    VRating,
  },

  // props: {
  //   gameTitle: {
  //     type: String,
  //     // required: true,
  //   },

  //   hypes: {
  //     type: Number,
  //     // required: true,
  //     default: 0,
  //   },

  //   rating: {
  //     type: Number,
  //     // required: true,
  //   },

  //   releaseDate: {
  //     type: Number,
  //     // required: true,
  //   },

  //   studio: {
  //     type: String,
  //     // required: true,
  //   },
  // },

  data: _ => ({
    title: '',
    hypes: 0,
    rating: 0,
    releaseDate: 0,
  }),

  created() {
    // TODO: Replace with call to get images, etc. for this game
    this.title = 'Hatoful Boyfriend Holiday Star'
    this.hypes = 34
    this.releaseDate = 1450155600
    this.rating = 53
  }
}
</script>

<style lang="scss" scoped>
$coverLength: 210px;

.SingleGame {
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
