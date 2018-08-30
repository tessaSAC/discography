<template>
<div id="app">
  <div class="allGames">
    <VRating gameTitle="Heavy Rain" hypes="214" rating="92.4" />
  </div>
  <VSingleGame />
</div>
</template>

<script>
import VRating from './components/VRating'
import VSingleGame from './components/VSingleGame'

export default {
  name: 'app',

  components: {
    VRating,
    VSingleGame,
  },

  data: _ => ({
    searchTerm: '',

    sortByMap: {
      gameTitle: 'Game title (A to Z)',
      releaseDate: 'Release date (Newest to oldest)',
    },

    sortBy: 'gameTitle',

    yearFilters: {
      from: '',
      to: '',
    },
  }),

  created() {},

  methods: {
    searchTermChanged() {
      filterGames(searchTerm);
    },
    filterGames(searchTerm) {
      //filters the list of games
    }
  }

}
</script>

<style lang="scss">
#app {
}

.VSingleGame {
  width: 480px;
}
</style>
