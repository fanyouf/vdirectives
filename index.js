import directives from "./directives/index"

export default {
    install: function(Vue, options) {
        Object.keys(directives).forEach(key => {
            Vue.directive(key, directives[key]);
        });
    }
}

export {directives}