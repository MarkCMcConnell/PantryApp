import Vue from 'vue';
import Vuex from 'vuex';
import pantry from './modules/pantry';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        pantry,
    },
});
