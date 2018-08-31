<template>
<div id="app">
  <div class="allGames">
    <div class="inputPanel">
      <div class="searchField">
        <VLabelFieldError label="Search">
          <VSearchField placeholder="Search for games"/>
        </VLabelFieldError>
      </div>
      <div class="yearSort">
        <div class="yearRange">
          <VLabelFieldError label="Release year">
            <VReleaseYearFields />
          </VLabelFieldError>
        </div>
        <div class="leftmostField">
          <VLabelFieldError label="Sort by">
            <VDropdown :options="sortByMap" default="gameTitle" />
          </VLabelFieldError>
        </div>
      </div>
    </div>
    <VGameCard v-for="game in games" :key="game.id" :gameTitle="game.name" :hypes="game.hype" :rating="game.rating" :releaseDate="game.first_release_date" :summary="game.summary"/>
  </div>

  <VSingleGame gameTitle="ing" :hypes="45" :rating="45.3" :releaseDate="20180830" studio="unicorn" />
</div>
</template>

<script>
import VDropdown from './components/VDropdown'
import VLabelFieldError from './components/VLabelFieldError'
import VGameCard from './components/VGameCard'
import VReleaseYearFields from './components/VReleaseYearFields'
import VSearchField from './components/VSearchField'
import VSingleGame from './components/VSingleGame'

export default {
  name: 'app',

  components: {
    VDropdown,
    VLabelFieldError,
    VReleaseYearFields,
    VGameCard,
    VSearchField,
    VSingleGame,
  },

  data: _ => ({
    games: [],

    searchTerm: '',

    sortBy: 'gameTitle',

    sortByMap: {
      gameTitle: 'Game title (A to Z)',
      releaseDate: 'Release date (Newest to oldest)',
    },

    yearFilters: {
      from: '',
      to: '',
    },
  }),

  created() {
    // Seed games
    const fakeGames = [
      {
        id: 1,
        name: 'Hatoful Boyfriend Holiday Star',
        first_release_date: '1450155600',
        hypes: 34,
        rating: 53,
        rating_count: 5,
        summary: 'The birds of Hatoful Boyfriend are back in the remastered holiday-themed sequel Hatoful Boyfriend: Holiday Star. Travel to out-there worlds, meet interesting new chickadees, and find romance in the elegantly designed winter wonderlands.',
      },
      {
        id: 2,
        name: 'The Last of Us',
        first_release_date: '1371182400',
        hypes: 938,
        rating: 95,
        rating_count: 98,
        summary: 'Twenty years after a pandemic radically transformed known civilization, infected humans run amuck and survivors kill one another for sustenance and weapons - literally whatever they can get their hands on. Joel, a salty survivor, is hired to smuggle a fourteen-year-old girl, Ellie, out of a rough military quarantine, but what begins as a simple job quickly turns into a brutal journey across the country.',
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

<style lang="scss">
// Global border-box
body {
  margin: 0;

  & /deep/ * {
    box-sizing: border-box;
  }
}

#app {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}

.allGames {
  padding: 0px 72px;
  flex: 1;
}

.inputPanel {
  padding: 24px 0px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  .searchField {
    width: 240px;
    margin-right: 36px;
  }
  .yearSort {
    display: flex;
    flex-direction: row;
  }
}

.VSingleGame {
  height: 100vh;
  width: 480px;
  background: $colorsPaper;
}

.leftmostField {
  margin-left: 36px;
  width: 324px;
}

.yearRange {
  min-width: 180px;
}
</style>
