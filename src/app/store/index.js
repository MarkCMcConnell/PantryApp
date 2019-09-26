import Vue from 'vue';
import Vuex from 'vuex';

// Mock data
import pantry from '../../../data/data';
console.log(pantry);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ingredients: pantry,
  },
});
