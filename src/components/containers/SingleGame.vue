<template>
<div class="SingleGame">
  <div
    v-if="id"
    :class="[ addAnimation ? 'fadeIn' : '' ]"
    @animationend="removeAnimation"
  >

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

  </div>
</div>
</template>

<script>
import VRatings from '../views/VRatings'

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

    title: {
      type: String,
      required: true,
    },

    imgUrl: {
      type: String,
      required: true,
    },
  },

  data: _ => ({
    addAnimation: false,
    hypes: 0,
    imgUrl: '',
    numRatings: 0,
    rating: 0,
    releaseDate: 0,
    title: '',
  }),

  // watch: {
  //   id() {
  //     this.addAnimation = true

  //     // TODO: Replace with call to get images, etc. for this game
  //     const games = [
  //       {
  //         id: 1,
  //         name: 'Hatoful Boyfriend Holiday Star',
  //         first_release_date: 1450155600,
  //         hypes: 34,
  //         imgUrl: `${this.baseUrl}testGames/hato.jpg`,
  //         rating: 53,
  //         rating_count: 5,
  //       },
  //       {
  //         id: 2,
  //         name: 'The Last of Us',
  //         first_release_date: 1371182400,
  //         hypes: 938,
  //         imgUrl: `${this.baseUrl}testGames/tlou.jpg`,
  //         rating: 95,
  //         rating_count: 98,
  //       },
  //     ]

  //     const selected = games.filter(game => game.id === this.id)[0]

  //     this.title = selected.name
  //     this.hypes = selected.hypes
  //     this.imgUrl = selected.imgUrl
  //     this.numRatings = selected.rating_count
  //     this.rating = selected.rating
  //     this.releaseDate = selected.first_release_date
  //   },
  // },

  methods: {
    removeAnimation() {
      this.addAnimation = false
    },
  },
}
</script>

<style lang="scss">
@import 'src/styles/mixins';
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

  // Animations:
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-24px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .fadeIn {
    @include anim();
    animation-name: fadeIn;
  }
}
</style>
