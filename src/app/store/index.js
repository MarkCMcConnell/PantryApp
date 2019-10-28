import Vue from 'vue';
import Vuex from 'vuex';
import ingredients from './modules/ingredients';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    ingredients,
  },
});
