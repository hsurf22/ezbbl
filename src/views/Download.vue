<template>
  <v-container>
    <v-btn depressed :to="{ name: 'Home' }" color="primary" class="mb-15">
      <v-icon>mdi-arrow-left-thick</v-icon>
      Back
    </v-btn>

    <v-row v-if="ringtones">
      <v-col
        cols="12"
        md="6"
        v-for="(ringtone, key) in ringtones[number - 1]"
        :key="key"
      >
        <v-card color="orange">
          <v-card-text>
            <div>{{ ringtone.artist }}</div>
            <p class="text-h5 text--primary">{{ ringtone.title }}</p>
            <p>Remixed, Shortened</p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              depressed
              color="primary"
              :href="`${ringtonesBaseURL}${ringtone.file}`"
            >
              Download
            </v-btn>
          </v-card-actions>
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
