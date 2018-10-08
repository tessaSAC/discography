<template>
<div class="VGameFiltersAndList">
  <div class="filterBar">
    <FieldSearch
      label="Search"
      placeholder="Search for games"
      @searchTermChanged="applySearchTerm(...arguments)"
      :searchTerm="searchTerm"
    />
    <div class="filters">
      <RangeYear @yearFilterChanged="applyYearFilter(...arguments)"/>
      <VDropdown :options="dropdownOptions" selected="gameTitle" @dropdownValueChanged="applySort(...arguments)"/>
    </div>
  </div>

  <VGameCard
    v-for="({ id, name, created_at, popularity, esrb, rating_count, rating, summary }) in games"
    :key="id"
    :id="id"
    :title="name"
    :hypes="popularity"
    :numRatings="rating_count"
    :rating="rating"
    :releaseDate="created_at"
    :selected="idSelected === id"
    :summary="summary"
    @gameSelected="emitGameSelectionChange(id)"
  />
</div>
</template>

<script>
import FieldSearch from '../containers/FieldSearch'
import RangeYear from '../containers/RangeYear'
import VDropdown from '../views/VDropdown'
import VGameCard from '../views/VGameCard'

export default {
  components: {
    FieldSearch,
    RangeYear,
    VDropdown,
    VGameCard,
  },
  props: {
    games: {
      type: Array,
    },

    idSelected: {
      type: Number,
    },

    startYear: {
      type: Number,
    },

    endYear: {
      type: Number,
    },

    searchTerm: {
      type: String,
    },

    dropdownOptions: {
      type: Object,
      default: () => {
        return {
          gameTitle: 'Game title (A to Z)',
          releaseDate: 'Recently released',
        }
      },
    },
  },
  methods: {
    applySearchTerm() {
      this.$emit('searchTermChanged', arguments[0])
    },
    applyYearFilter() {
      this.$emit('yearFilterChanged', arguments[0])
    },
    applySort() {
      this.$emit('dropdownValueChanged', arguments[0])
    },
    emitGameSelectionChange(){
      this.$emit('gameSelected', arguments[0])
    }
  },
}
</script>

<style lang="scss">
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

.RangeYear {
  width: 165px;
}

.VDropdown {
  margin-left: 16px;
  width: 192px;
}

.VGameCard:last-of-type {
  margin-bottom: 72px;
}
</style>
