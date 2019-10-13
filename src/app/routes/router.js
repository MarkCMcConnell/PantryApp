import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Pantry from '../views/Pantry.vue';
import About from '../views/About.vue';
import Error from '../views/404.vue';

import IngredientDetail from '../ingredients/IngredientDetail/IngredientDetail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/ingredients/:id',
      name: 'ingredientDetail',
      component: IngredientDetail,
      props: true,
    },
    {
      path: '/pantry',
      name: 'pantry',
      component: Pantry,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/*',
      name: '404',
      component: Error,
    },
  ],
  mode: 'history',
});
