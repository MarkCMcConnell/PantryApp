import Vue from 'vue';
import Vuex from 'vuex';

// Mock data
import pantry from '../../data/data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ingredients: pantry,
  },
});
