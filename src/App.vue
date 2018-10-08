<template>
<div id="app">
  <VGameFiltersAndList
    :games="games"
    :idSelected="idSelected"
    :startYear="startYear"
    :endYear="endYear"
    :searchTerm="searchTerm"
    :dropdownOptions="dropdownOptions"
    @searchTermChanged="applySearchTerm(...arguments)"
    @yearFilterChanged="applyYearFilter(...arguments)"
    @dropdownValueChanged="applySort(...arguments)"
    @gameSelected="idSelected = arguments[0]"
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
import VGameFiltersAndList from './components/views/VGameFiltersAndList'
import SingleGame from './components/containers/SingleGame'
import igdb from './api.js'
export default {
  name: 'app',

  components: {
    VGameFiltersAndList,
    SingleGame,
  },

  data: _ => ({
    games: [],

    idSelected: NaN,

    startYear: '',

    endYear: '',

    searchTerm: '',

    orderBy: 'name:asc',

    filterTimeout: null,

    dropdownOptions: {
      gameTitle: 'Game title (A to Z)',
      releaseDate: 'Recently released',
    },
  }),

  created() {
    // Seed games
    this.fetchNewGamesList()
  },
  computed: {
    selectedGame() {
      let gameMatch
      if (this.idSelected) {
        gameMatch = this.games.filter(game => game.id === this.idSelected)[0]
      }
      return gameMatch ? gameMatch : {}
    },
  },
  methods: {
    searchTermChanged() {
      //filterGames(searchTerm);
    },

    fetchNewGamesList() {
      igdb
        .list(this.searchTerm, this.startYear, this.endYear, '*', this.orderBy)
        .then(result => {
          const x = result.map(element => igdb.get(element.id))
          this.games = []
          Promise.all(x).then(res => {
            res.forEach(game => {
              game.popularity = game.popularity
                ? +parseFloat(game.popularity).toFixed(2)
                : 0
              this.games.push(game)
            })
          })
        })
      // console.log('Fetching list...')
    },

    applyFilter() {
      clearTimeout(this.filterTimeout)
      this.filterTimeout = setTimeout(this.fetchNewGamesList, 500)
    },
    applyYearFilter() {
      this.startYear = arguments[0] ? arguments[0] + '-01-01' : ''
      this.endYear = arguments[1] ? arguments[1] + '-12-31' : ''
      this.applyFilter()
    },
    applySort() {
      let newSort = ''
      if (arguments[0] === 'gameTitle') {
        newSort = 'name:asc'
      } else if (arguments[0] === 'releaseDate') {
        newSort = 'release_dates.date:desc'
      }
      if (this.orderBy !== newSort) {
        this.orderBy = newSort
        this.applyFilter()
      }
    },
    applySearchTerm() {
      this.searchTerm = arguments[0]
      this.applyFilter()
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
