<template>
  <v-container>
    <h2 class="mb-6">All Ringtones</h2>
    <v-row v-if="ringtones">
      <v-col cols="12" sm="6" v-for="(list, count) in ringtones" :key="count">
        <v-card color="info" class="pa-5">
          <h3 class="mb-6 font-weight-bold">Ringtones #{{ count + 1 }}</h3>
          <div v-for="(ringtone, c) in list" :key="c" class="mb-3">
            <h6 class="font-weight-regular">{{ ringtone.artist }}</h6>
            <div class="font-weight-bold">{{ ringtone.title }}</div>
          </div>
          <v-btn
            class="mt-4"
            x-large
            depressed
            :to="{ name: 'Ringtones', query: { n: count + 1 } }"
          >
            Click
          </v-btn>
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
