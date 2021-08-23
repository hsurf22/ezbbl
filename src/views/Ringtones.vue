<template>
  <v-container>
    <v-btn x-large text depressed :to="{ name: 'Home' }" class="mb-6">
      <v-icon class="mr-1">mdi-arrow-left-thick</v-icon>
      HOME
    </v-btn>

    <div class="mb-6">
      <h2>Ringtones #{{ number }}</h2>
      <div class="mt-4">Scan the QR code to navigate to this page.</div>
      <vue-qrcode :scale="7" :value="currentPage" />
    </div>

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
          <audio controls>
            <source
              :src="`${ringtonesBaseURL}${ringtone.file}`"
              type="audio/mpeg"
            />
            Your browser does not support the audio tag.
          </audio>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueQrcode from 'vue-qrcode';

export default {
  name: 'Download',
  components: { VueQrcode },
  data() {
    return { number: null };
  },
  computed: {
    currentPage() {
      return window.location.href;
    },
    ringtones() {
      return this.$store.getters.getRingtones;
    },
    ringtonesBaseURL() {
      return this.$store.getters.getRingtonesBaseURL;
    }
  },
  mounted() {
    this.number = this.$route.query.n;

    // This prevents the page from scrolling down to where it was previously.
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
    window.scrollTo(0, 0);
  }
};
</script>
