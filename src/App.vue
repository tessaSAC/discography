<template>
<div id="app">
  <div class="leftSide">
    <div class="inputPanel">
      <div class="searchField">
        <VLabelFieldError label="Search">
          <VSearchField />
        </VLabelFieldError>
      </div>
      <div class="yearSort">
        <div class="yearSort">
          <VLabelFieldError label="Release year">
            <VReleaseYearFields />
          </VLabelFieldError>
        </div>
        <div class="leftmostField">
          <VLabelFieldError label="Sort by">
            <VDropdown
              :options="sortByMap"
              default="gameTitle"
            />
          </VLabelFieldError>
        </div>
      </div>
    </div>
    <div class="allGames">
      <VGameCard
        gameTitle="ing"
        :hypes="45"
        :rating="45.3"
        :releaseDate="20180830"
        studio="unicorn"
      />
    </div>
  </div>
  <VSingleGame
    gameTitle="ing"
    :hypes="45"
    :rating="45.3"
    :releaseDate="20180830"
    studio="unicorn"
  />
</div>
</template>
<script>
import VSingleGame from './components/VSingleGame'
import VGameCard from './components/VGameCard'
import VLabelFieldError from './components/VLabelFieldError'
import VSearchField from './components/VSearchField'
import VReleaseYearFields from './components/VReleaseYearFields'
import VDropdown from './components/VDropdown'


export default {
  name: 'app',

  components: {
    VGameCard,
    VSingleGame,
    VLabelFieldError,
    VSearchField,
    VReleaseYearFields,
    VDropdown,
  },

  data: _ => ({
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
    const headers = new Headers()
    headers.append('user-key', '99453e0146457eeb1ab3119be98ec0d2')
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json')
    fetch('https://api-endpoint.igdb.com/games/?fields=id,name,first_release_date,developers,hypes,rating,rating_count,summary&order=name:asc', {
      mode: 'no-cors',
      headers: headers,
    })
    // fetch('https://api-endpoint.igdb.com/headers/', {
    //   method: 'post',
    //   body: {
    //     "api_header": {
    //         "header": headers,
    //         "value": "localhost:8080",
    //     }
    //   },
    // })
    .then(res => console.log(JSON.stringify(res, null, 2)))
  },

  methods: {
    searchTermChanged() {
      //filterGames(searchTerm);
    },
    filterGames(searchTerm) {
      //filters the list of games
    }
  }

}
</script>

<style lang="scss">
#app {
  display: flex;
}

.leftSide {
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: column;
  padding: 0px 72px;
}

.inputPanel {
  padding: 24px 0px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  .searchField {
    width: 240px;
  }
  .yearSort {
    display: flex;
    flex-direction: row;
  }
}
.allGames {
  flex-grow: 1;
}

.VSingleGame {
  flex-shrink: 0;
  width: 480px;
  background-color: $colorsPaper;
  min-height: 100vh;
}

.leftmostField {
  margin-left: 36px;
  width: 324px;
}
</style>
