<template>
<div id="app">
  <div class="gamesList">
    <div class="filterBar">
      <FieldSearch
        label="Search"
        placeholder="Search for games"
      />
      <div class="filters">
        <RangeYear />
        <VDropdown :options="dropdownOptions" selected="gameTitle"/>
      </div>
    </div>

    <VGameCard
      v-for="({ id, name, created_at, popularity, esrb, rating_count, summary }) in games"
      :key="id"
      :id="id"
      :title="name"
      :hypes="popularity"
      :numRatings="rating_count"
      :rating="rating"
      :releaseDate="created_at"
      :selected="idSelected === id"
      :summary="summary"
      @gameSelected="id => idSelected = id"
    />
  </div>

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
import FieldSearch from './components/containers/FieldSearch'
import RangeYear from './components/containers/RangeYear'
import SingleGame from './components/containers/SingleGame'
import VDropdown from './components/views/VDropdown'
import VGameCard from './components/views/VGameCard'
import igdb from './api.js'
export default {
  name: 'app',

  components: {
    FieldSearch,
    RangeYear,
    VDropdown,
    VGameCard,
    SingleGame,
  },

  data: _ => ({
    games: [],

    idSelected: NaN,

    dropdownOptions: {
      gameTitle: 'Game title (A to Z)',
      releaseDate: 'Recently released',
    },
  }),

  created() {
    // Seed games
    igdb.list('', '1999', '2002').then(result => {
      const x = result.map(element => igdb.get(element.id))
      Promise.all(x).then(res => res.forEach(game => this.games.push(game)))
    })
  },
  computed: {
    selectedGame() {
      if (this.idSelected) {
        return this.games.filter(game => game.id === this.idSelected)[0]
      } else {
        return {}
      }
    },
  },
  methods: {
    searchTermChanged() {
      //filterGames(searchTerm);
    },
    // filterGames(searchTerm) {
    //   //filters the list of games
    // },
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

.gamesList {
  padding: 0px 72px;
  flex: 1;
}

.filterBar {
  padding: 24px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filters {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 36px;
}

.FieldSearch {
  width: 240px;
}

.SingleGame {
  min-width: 480px; // needs to be `min-width` b/c flex messes with `widths`
  background: $colorsPaper;
  position: sticky;
  top: 0px;
}

.RangeYear {
  width: 165px;
}

.VDropdown {
  margin-left: 16px;
  width: 192px;
}
</style>
