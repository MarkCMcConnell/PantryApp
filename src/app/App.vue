<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
// Components
import NavBar from './components/ui/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">

</style>
