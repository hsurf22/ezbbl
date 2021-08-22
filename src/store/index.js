import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const ringtonesBaseURL = 'http://localhost/Ringtones';

export default new Vuex.Store({
  state: {
    ringtones: null,
    ringtonesBaseURL: ringtonesBaseURL
  },
  mutations: {
    setRingtones(state, payload) {
      state.ringtones = payload;
    }
  },
  actions: {
    async setRingtones(state) {
      await axios.get(`${ringtonesBaseURL}/index.json`).then((resp) => {
        state.commit('setRingtones', resp.data);
      });
    }
  },
  modules: {},
  getters: {
    getRingtones: (state) => state.ringtones,
    getRingtonesBaseURL: (state) => state.ringtonesBaseURL
  }
});
