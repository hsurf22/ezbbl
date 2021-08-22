<template>
  <v-container>
    <v-btn v-if="false" :to="{ name: 'About' }">About</v-btn>

    <h3>Ringtones</h3>
    <div v-if="ringtones" class="ma-n2">
      <v-btn
        v-for="(ringtones, count) in ringtones"
        :key="count"
        class="ma-2"
        color="orange"
        :to="{ name: 'Download', query: { number: count + 1 } }"
      >
        #{{ count + 1 }}
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  computed: {
    ringtones() {
      return this.$store.getters.getRingtones;
    }
  },
  mounted() {}
};
</script>
