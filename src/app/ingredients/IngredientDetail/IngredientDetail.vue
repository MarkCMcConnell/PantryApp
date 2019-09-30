<template>
	<div>
		<h2>Detail Page for {{ ingredient.name }}</h2>
	</div>
</template>

<script>
export default {
	data () {
		return {
			ingredientId: this.$route.params.ingredientId,
			ingredient: this.$store.ingredients,
		}
	},
	mounted () {
		
	}
}
</script>

<style>

</style>
