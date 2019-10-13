<template>
    <div>
        Uh oh. This page is not available.
        <a href="#" @click.prevent="back">Go Back</a>
    </div>
</template>

<script>
export default {
    methods: {
        back () {
            this.$router.go(-1);
        }
    }
}
</script>

<style>

</style>
