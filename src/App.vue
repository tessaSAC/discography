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
        <VDropdown />
      </div>
    </div>

    <VGameCard
      v-for="({ id, name, first_release_date, hypes, rating, rating_count, summary }) in games"
      :key="id"
      :id="id"
      :title="name"
      :hypes="hypes"
      :numRatings="rating_count"
      :rating="rating"
      :releaseDate="first_release_date"
      :selected="idSelected === id"
      :summary="summary"
      @gameSelected="id => idSelected = id"
    />
  </div>

  <SingleGame :id="idSelected" />
</div>
</template>

<script>
import FieldSearch from './components/containers/FieldSearch'
import RangeYear from './components/containers/RangeYear'
import SingleGame from './components/containers/SingleGame'
import VDropdown from './components/views/VDropdown'
import VGameCard from './components/views/VGameCard'

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
  }),

  created() {
    // Seed games
    const fakeGames = [
      {
        id: 1,
        name: 'Hatoful Boyfriend Holiday Star',
        first_release_date: 1450137600000,
        hypes: 34,
        rating: 53,
        rating_count: 5,
        summary:
          'The birds of Hatoful Boyfriend are back in the remastered holiday-themed sequel Hatoful Boyfriend: Holiday Star. Travel to out-there worlds, meet interesting new chickadees, and find romance in the elegantly designed winter wonderlands.',
      },
      {
        id: 2,
        name: 'The Last of Us',
        first_release_date: 1371182400000,
        hypes: 938,
        rating: 95,
        rating_count: 98,
        summary:
          'Twenty years after a pandemic radically transformed known civilization, infected humans run amuck and survivors kill one another for sustenance and weapons - literally whatever they can get their hands on. Joel, a salty survivor, is hired to smuggle a fourteen-year-old girl, Ellie, out of a rough military quarantine, but what begins as a simple job quickly turns into a brutal journey across the country.',
      },
    ]

    fakeGames.forEach(game => this.games.push(game))

    // const headers = new Headers()
    // headers.append('user-key', '99453e0146457eeb1ab3119be98ec0d2')
    // headers.append('Accept', 'application/json')
    // headers.append('Content-Type', 'application/json')
    // fetch(
    //   'https://api-endpoint.igdb.com/games/?fields=id,name,first_release_date,developers,hypes,rating,rating_count,summary&order=name:asc',
    //   {
    //     mode: 'no-cors',
    //     headers: headers,
    //   }
    // )
    //   // fetch('https://api-endpoint.igdb.com/headers/', {
    //   //   method: 'post',
    //   //   body: {
    //   //     "api_header": {
    //   //         "header": headers,
    //   //         "value": "localhost:8080",
    //   //     }
    //   //   },
    //   // })
    //   .then(res => console.log(JSON.stringify(res, null, 2)))
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
}

.RangeYear {
  width: 165px;
}

.VDropdown {
  margin-left: 16px;
  width: 192px;
}
</style>
