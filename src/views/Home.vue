<template>
  <div>
    <h1 v-if="!soundAssets">NULL</h1>
    <pre v-else>{{ soundAssets }}</pre>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  computed: {
    soundAssets() {
      return this.$store.getters.getSoundAssets;
    }
  },
  mounted() {}
};
</script>
