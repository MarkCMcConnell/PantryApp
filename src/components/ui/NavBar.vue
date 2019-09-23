<template>
  <nav>
    <ul>
      <router-link
        to="/"
        exact
        class="navLink"
      >
        Home
      </router-link>
      <router-link
        to="/pantry"
        class="navLink"
      >
        Pantry
      </router-link>
      <router-link
        to="/about"
        class="navLink"
      >
        About
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="scss">
	ul {
		display: inline-block;

		.navLink {
			padding: .25rem .25rem;
			text-decoration: none;
			color: red;

			&:visited {
				color: red;
			}
		}
	}
</style>
