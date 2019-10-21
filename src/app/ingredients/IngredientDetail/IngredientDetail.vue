<template>
	<div>
		<h2>{{ ingredient.name }}</h2>
        <p>Type: {{ ingredient.type }}</p>
        <p>Size: {{ ingredient.size }} {{ ingredient.unit }}</p>
        <p v-if="ingredient.left <= 1">Amount left: {{ ingredient.left }} {{ ingredient.unit }}</p>
        <p v-if="ingredient.left > 1 && ingredient.unit === 'lb'">
            Amount left: {{ ingredient.left }} {{ ingredient.unit }}s
        </p>
	</div>
</template>

<script>
import ingredients from '../../../../data/data.js';

export default {
	data () {
		return {
			ingredient: this.$store.state.ingredients[this.$route.params.id],
		}
	},
}
</script>

<style>

</style>
