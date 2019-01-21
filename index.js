import jumpNumber from "./direcives/jumpNumber"

export default {
    install: function(Vue, options) {
        Vue.directive("jumpNumber", jumpNumber)
    }
  }

export {jumpNumber}