import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        info: '#ffc800'
      },
      dark: {
        info: '#ffc800'
      }
    }
  }
});
