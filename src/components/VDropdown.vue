<template>
<div class="VDropdown">
  <div class="simpleDropdownContainer" @focus="openDropdown()" @blur="closeDropdown()" :tabindex="ddIsDisabled ? -1 : 0">
    <div :class="ddClassObject"> 
      <div :class="{ 'selectedOption': true, 'isPlaceholder': isPlaceholder }">{{ options[selectedOption] }}</div>
    </div>
    <div v-if="ddIsOpen" class="simpleDropdownContainer--dropdownPanel">
      <ul>
        <li v-if="placeholder" class="dropdownOption disabled">{{ placeholder }}</li>
        <li class="dropdownOption" v-for="optionValue in Object.keys(options)" :key="optionValue" @click="selectOption(optionValue)">{{ options[optionValue] }}</li>
      </ul>
    </div>
  </div>
  <select class="force_hide">
    <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
    <option v-for="optionValue in Object.keys(options)" :key="optionValue" value="optionValue">
      {{ options[optionValue] }}
    </option>
  </select>
</div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object
    },
    placeholder: {
      type: String
    },
    default: {
      type: String
    },
  },
  data: _ => ({
    ddIsOpen: true,
    ddIsDisabled: false,
    selectedOption: ''
  }),
  mounted() {
    this.selectedOption = ( this.default ? this.default : ( this.placeholder ? this.placeholder : ''))
  },
  computed: {
    ddClassObject() {
      return {
        'simpleDropdown': true,
        'boxField': true,
        'disabled': this.ddIsDisabled,
      }
    },
    isPlaceholder() {
      if(this.placeholder) {
        return this.placeholder === this.selectedOption
      }
    }
  },
  methods: {
    openDropdown() {
      this.ddIsDisabled ? this.ddIsOpen = false : this.ddIsOpen = true
      this.$el.querySelector('.simpleDropdown').focus()
    },
    closeDropdown() {
      this.ddIsOpen = false
      this.blurDropdown()
    },
    selectOption(value) {
      this.selectedOption = value
      this.closeDropdown()
    },
    blurDropdown(){
      this.$el.querySelector('.simpleDropdown').blur()
      this.$el.querySelector('.simpleDropdownContainer').blur()
    }
  }
}
</script>

<style lang="scss" scoped>
.VDropdown {
  position: relative;
  width: 100%;
}
.force_hide {
  display: none !important;
}

.simpleDropdownContainer {
  position: relative;
  width: 100%;
  &:focus {
    outline: none;
  }
  .simpleDropdown{
    &::after {
      content:'▿';
      position: absolute;
      top: 6px;
      right: 1rem;
    }
  }
  .selectedOption {
    margin-top: 7px;
    width: auto;
  }
  &--dropdownPanel {
    position: absolute;
    top: 32px;
    left: 0px;
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 1px 4px 0px $colorsTextLight;
    ul {
      padding: 0;
    }
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
</style>
