<template>
<div class="SingleGame">
  <template v-if="id">
    <div class="gameCover">
      <img :src="imgUrl" :alt="title">
    </div>

    <VRatings
      :title="title"
      :hypes="hypes"
      :numRatings="numRatings"
      :rating="rating"
      :releaseDate="releaseDate"
    />
  </template>
</div>
</template>

<script>
import VRatings from '../views/VRatings'

export default {
  components: {
    VRatings,
  },

  props: {
    id: {
      type: Number,
      required: false,
    },
  },

  data: _ => ({
    baseUrl: process.env.BASE_URL,  // TODO: Delete after adding working API call

    hypes: 0,
    imgUrl: '',
    numRatings: 0,
    rating: 0,
    releaseDate: 0,
    title: '',
  }),

  watch: {
    id() {
      // TODO: Replace with call to get images, etc. for this game
      const games = [
        {
          id: 1,
          name: 'Hatoful Boyfriend Holiday Star',
          first_release_date: 1450155600,
          hypes: 34,
          imgUrl: `${ this.baseUrl }testGames/hato.jpg`,
          rating: 53,
          rating_count: 5,
        },
        {
          id: 2,
          name: 'The Last of Us',
          first_release_date: 1371182400,
          hypes: 938,
          imgUrl: `${ this.baseUrl }testGames/tlou.jpg`,
          rating: 95,
          rating_count: 98,
        },
      ]

      const selected = games.filter(game => game.id === this.id)[0]
      console.log(selected.imgUrl)
      this.title = selected.name
      this.hypes = selected.hypes
      this.imgUrl = selected.imgUrl
      this.numRatings = selected.rating_count
      this.rating = selected.rating
      this.releaseDate = selected.first_release_date
    }
  }
}
</script>

<style lang="scss">
$coverLength: 210px;

.SingleGame {
  padding: 72px 48px;

  .gameCover {
    width: $coverLength;
    height: $coverLength;

    margin-bottom: 36px;

    img {
      width: 100%;
      height: 100%;
      object-position: 0 0;
      object-fit: cover;
    }
  }
}
</style>
