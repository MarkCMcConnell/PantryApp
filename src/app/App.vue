<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
// Components
import NavBar from './shared/components/ui/NavBar/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">

</style>
