<template>
  <v-container>
    <v-btn x-large text depressed :to="{ name: 'Home' }" class="mb-6">
      <v-icon class="mr-1">mdi-arrow-left-thick</v-icon>
      HOME
    </v-btn>

    <h2 class="mb-6">Ringtones #{{ number }}</h2>

    <v-row v-if="ringtones">
      <v-col
        cols="12"
        md="6"
        v-for="(ringtone, key) in ringtones[number - 1]"
        :key="key"
      >
        <v-card color="info" class="pa-5">
          <div class="font-weight-bold">{{ ringtone.artist }}</div>
          <div class="mb-2 font-weight-bold text-h5 text--primary">
            {{ ringtone.title }}
          </div>
          <div class="mb-6">Remixed, Shortened</div>
          <v-btn
            x-large
            depressed
            :href="`${ringtonesBaseURL}${ringtone.file}`"
          >
            Download
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Download',
  components: {},
  data() {
    return { number: null };
  },
  computed: {
    ringtones() {
      return this.$store.getters.getRingtones;
    },
    ringtonesBaseURL() {
      return this.$store.getters.getRingtonesBaseURL;
    }
  },
  mounted() {
    this.number = this.$route.query.number;
  }
};
</script>
