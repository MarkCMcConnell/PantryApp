<template>
  <div>
    <h1>Pantry View</h1>
    <IngredientList />
  </div>
</template>

<script>
// Components
import IngredientList from '../ingredients/IngredientList/IngredientList.vue';

export default {
  name: 'Pantry',
  components: {
    IngredientList
  }
};
</script>

<style>

</style>
