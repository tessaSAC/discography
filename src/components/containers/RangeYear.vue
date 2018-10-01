<template>
<div class="RangeYear">
  <VInput
    label="Release year"
    :error="error"
  >
    <div class="inputs">
      <VField
        placeholder="1900"
        :userInput="from"
        type="number"
        @inputChanged="updateInput($event, 'from')"
        @keyup.native.enter="fetchGames"
      />
      <!-- TODO: Is min and max required? They weren't in the wireframes. Let's take it out, idk how the API will handle this yet.-->

      <div class="labelTo">to</div>

      <VField
        placeholder="2018"
        :userInput="to"
        type="number"
        @inputChanged="updateInput($event, 'to')"
        @keyup.native.enter="fetchGames"
      />
    </div>
  </VInput>
</div>
</template>

<script>
import VField from '../views/VField'
import VInput from '../views/VInput'

export default {
  components: {
    VField,
    VInput,
  },

  data: _ => ({
    from: '',
    to: '',
    timeout: null,
  }),

  computed: {
    error() {
      // Theoretically a user can make an open-ended request but let's not go there...
      if (this.to && this.from && +this.to < +this.from)
        return 'Reverse time-travel not allowed'
    },
  },

  methods: {
    fetchGames() {
      if (!this.error) console.log('make the api call here')
    },

    updateInput(n, which) {
      this[which] = n
        .toString()
        .replace(/\D/g, '')
        .slice(0, 4)
    },
    emitYearChanges(from, to){
      this.$emit('yearFilterChanged', from, to)
    }
  },
  watch: {
    from: function (current, prev){
      if(!(this.to && this.to < this.from)){
        clearTimeout(this.timeout)
        this.timeout = setTimeout( this.emitYearChanges, 1000, current, this.to )
      }
    },
    to: function (current, prev){
      if(!(this.from && this.to < this.from)){
        clearTimeout(this.timeout)
        this.timeout = setTimeout( this.emitYearChanges, 1000, this.from, current )
      }
    }
  }
}
</script>

<style lang="scss">
.RangeYear {
  .VInput {
    .inputs {
      display: flex;
      flex-direction: row;
      align-items: center;

      .label {
        display: none;
      }

      .error {
        display: none;
      }
    }
  }

  .labelTo {
    @extend %typeParagraph;
    margin: 0 1rem;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
