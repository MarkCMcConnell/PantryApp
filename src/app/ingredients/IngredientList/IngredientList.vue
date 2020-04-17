<template>
  <div>
    <ul>
      <li
        v-for="ingredient in ingredients"
        :key="ingredient.name"
        @click.prevent="showIngredient(ingredient.id)"
      >
        {{ ingredient.name }} - {{ ingredient.quantity }} {{ ingredient.unit }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ingredients: this.$store.state.pantry.ingredients,
    };
  },
  methods: {
    showIngredient (id) {
      this.$router.push({path: `/ingredients/${id}`});
    },
  },
};
</script>

<style scoped>
li {
  cursor: pointer;
  margin: 0.5em 0;
}
</style>
