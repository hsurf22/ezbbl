<template>
  <v-container>
    <h3>Ringtones</h3>
    <v-row v-if="ringtones">
      <v-col cols="12" sm="6" v-for="(list, count) in ringtones" :key="count">
        <v-card color="orange">
          <v-card-text>
            <p class="text-h5 text--primary">#{{ count + 1 }}</p>
            <div v-for="(ringtone, c) in list" :key="c" class="mb-3">
              <div>{{ ringtone.artist }}</div>
              <h3>{{ ringtone.title }}</h3>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              depressed
              color="primary"
              :to="{ name: 'Download', query: { number: count + 1 } }"
            >
              Go
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
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
