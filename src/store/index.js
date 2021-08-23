import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let ringtonesBaseURL = null;

if (process.env.NODE_ENV === 'development') {
  //console.log('In Dev Mode');
  ringtonesBaseURL = 'http://localhost/data/ringtones';
} else {
  //console.log('In Live Mode');
  ringtonesBaseURL = 'https://ezbbl.com/data/ringtones';
}

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
