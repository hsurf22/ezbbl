<template>
  <v-app>
    <v-main>
      <div class="primary py-10 mb-10">
        <v-container>
          <div
            :class="this.$vuetify.breakpoint.mdAndUp ? 'h2' : 'h3'"
            class="font-weight-bold white--text"
          >
            Welcome to <span class="info--text">ezBBL.com</span> Enjoy free
            ringtones.
          </div>
        </v-container>
      </div>

      <router-view />

      <div class="primary py-10 mt-10">
        <v-container>
          <h3 class="white--text">
            We are a small team of people who love creating ringtones.
          </h3>
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

<style lang="scss">
@import '@/css/global.scss';
</style>
