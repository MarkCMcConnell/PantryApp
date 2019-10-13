<template>
	<div>
		<h2>Detail Page for {{ ingredient.id }}</h2>
		<p>Name: {{ ingredient.name }}</p>
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
	// mounted () {
	// 	this.ingredient = this.id;
	// }
}
</script>

<style>

</style>
