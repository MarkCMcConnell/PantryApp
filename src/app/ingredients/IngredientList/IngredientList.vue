<template>
    <div>
        <ul>
            <li
                v-for="ingredient in ingredients"
                :key="ingredient.name"
            >
                {{ ingredient.name }} - {{ ingredient.quantity }}{{ ingredient.unit }}
            </li>
        </ul>
    </div>
</template>

<script>
import IngredientDetail from './IngredientDetail.vue';

export default {
    components: {
        IngredientDetail,
    },
    data () {
        return {
            ingredients: this.$store.state.ingredients,
        }
    }
}
</script>

<style>

</style>
