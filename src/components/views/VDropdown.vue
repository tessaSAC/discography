<template>
<VInput class="VDropdown" label="Sort by">
  <div
    class="dropdownContainer"
    :tabindex="ddIsDisabled ? -1 : 0"
    @focus="openDropdown"
    @blur="closeDropdown"
  >
    <div :class="ddClassObject">  <!-- TODO: Does this need to be a separate div? -->
      <div :class="{ 'selectedOption': true, 'isPlaceholder': isPlaceholder }">
        {{ options[selectedOption] }}
      </div>
    </div>

    <div v-if="ddIsOpen" class="dropdownPanel">  <!-- TODO: Does this need to be a separate div? -->
      <ul>
        <li v-if="placeholder" class="dropdownOption disabled">{{ placeholder }}</li>
        <li class="dropdownOption" v-for="optionValue in Object.keys(options)" :key="optionValue" @click="selectOption(optionValue)">{{
          options[optionValue] }}</li>
      </ul>
    </div>
  </div>

  <select class="force_hide">
    <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>

    <option v-for="optionValue in Object.keys(options)" :key="optionValue" value="optionValue">
      {{ options[optionValue] }}
    </option>
  </select>
</VInput>
</template>

<script>
import VInput from '../views/VInput'

export default {
  components: {
    VInput,
  },

  props: {
    // options: {
    //   type: Object,  // TODO: why Object?
    // },
    // placeholder: {
    //   type: String,
    //   default: '',
    // },
    // default: {  // Why come up with original name instead of using HTML name ('selected')?
    //   type: String,  // So this is String but options are Object? API is unclear
    //   required: false,
    // },
  },

  data: _ => ({
    ddIsOpen: false,
    ddIsDisabled: false, // Wireframes don't specify this?
    selectedOption: '',

    sortBy: 'gameTitle',

    options: {
      gameTitle: 'Game title (A to Z)',
      releaseDate: 'Release date (Newest to oldest)',
    },
  }),

  computed: {
    ddClassObject() {
      return {
        dropdown: true,
        boxField: true,
        disabled: this.ddIsDisabled,
        focused: this.ddIsOpen,
      }
    },

    isPlaceholder() {
      if (this.placeholder) {
        return this.placeholder === this.selectedOption
      }
    },
  },

  mounted() {
    // TODO: This does not belong in mounted
    this.selectedOption = this.default // TODO: Remove nested ternary exp if possible
      ? this.default
      : this.placeholder
        ? this.placeholder
        : ''
  },

  methods: {
    blurDropdown() {
      this.$el.querySelector('.dropdown').blur() // TODO: this is suspicious
      this.$el.querySelector('.dropdownContainer').blur() // what is going on here?
    },

    closeDropdown() {
      this.ddIsOpen = false
      this.blurDropdown()
    },

    openDropdown() {
      this.ddIsDisabled ? (this.ddIsOpen = false) : (this.ddIsOpen = true)
    },

    selectOption(value) {
      this.selectedOption = value
      this.closeDropdown()
    },
  },
}
</script>

<style lang="scss">
.VDropdown {
  position: relative;
  width: 100%;

  .force_hide {
    display: none !important; // TODO: why do you need !important
  }

  .boxField {
    @extend %typeParagraph;
    height: 32px;
    width: 100%;
    padding: 0 1rem;
    border-radius: 4px;
    border: 1px solid $colorsTextLight;
  }

  .dropdownContainer {
    width: 100%;
    position: relative;

    &:focus {
      outline: none;
    }

    .dropdown {
      &::after {
        // TODO: better to find a non-pseudoclass way -- see TheTopNavbar in UX app
        content: '▿';
        position: absolute;
        top: 6px;
        right: 1rem;
      }

      &.focused {
        outline: 5px auto -webkit-focus-ring-color;
      }
    }

    .selectedOption {
      margin-top: 7px;
      width: auto;
    }

    .dropdownPanel {
      width: 100%;
      position: absolute;
      top: 32px;
      left: 0px;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0px 1px 4px 0px $colorsTextLight;

      li {
        @extend %typeParagraph;
        list-style: none;
        padding: 7px 1rem;

        &:hover {
          background-color: $colorsPaper;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
