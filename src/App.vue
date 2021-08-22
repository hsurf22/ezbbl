<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>Welcome to ezBBL. Enjoy free ringtones.</h1>
      </v-container>

      <router-view />

      <div class="primary mt-10">
        <v-container>
          <h2 class="white--text">
            We are a small team of people who love creating ringtones.
          </h2>
        </v-container>
      </div>
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
