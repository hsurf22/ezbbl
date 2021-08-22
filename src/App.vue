<template>
  <v-app>
    <v-main>
      <v-container>
        <h2>Welcome to ezBBL. Enjoy free ringtones.</h2>
      </v-container>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({}),
  beforeCreate() {
    this.$store.dispatch('setRingtones');
  }
};
</script>
