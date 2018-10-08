<template>
<div id="app">
  <VGameFiltersAndList
    :idSelected="idSelected"
    selectable
    @selectedGameChanged="setSelectedGame(...arguments)"
  />
  <SingleGame
    :id="selectedGame.id"
    :title="selectedGame.name"
    :hypes="selectedGame.popularity"
    :numRatings="selectedGame.rating_count"
    :rating="selectedGame.rating"
    :releaseDate="selectedGame.created_at"
    :imgUrl="selectedGame.cover ? selectedGame.cover.url : ''"
  />
</div>
</template>

<script>
import VGameFiltersAndList from './components/export/VGameFiltersAndList'
import SingleGame from './components/export/SingleGame'
export default {
  name: 'app',

  components: {
    VGameFiltersAndList,
    SingleGame,
  },

  data: _ => ({
    idSelected: NaN,
    selectedGame: {},
  }),

  methods: {
    setSelectedGame() {
      this.idSelected = arguments[0]
      this.selectedGame = arguments[1]
    },
  },
}
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
  width: 100vw;
  overflow: auto;
  display: flex;
  flex-direction: row;
}

.VGameFiltersAndList {
  padding: 0px 72px;
  flex: 1;
}

.SingleGame {
  min-width: 480px; // needs to be `min-width` b/c flex messes with `widths`
  flex: 0;
  background: $colorsPaper;
  position: sticky;
  top: 0px;
}
</style>
