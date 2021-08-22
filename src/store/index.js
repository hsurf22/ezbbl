import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const urlSoundAssets = 'http://localhost/SoundAssets/index.json';
const headers = { Accept: 'application/json' };

export default new Vuex.Store({
  state: {
    soundAssets: null
  },
  mutations: {
    setSoundAssets(state, payload) {
      state.soundAssets = payload;
    }
  },
  actions: {
    async setSoundAssets(state) {
      const assets = await fetch(urlSoundAssets, { headers });
      const assetsJson = await assets.json();
      state.commit('setSoundAssets', assetsJson);
    }
  },
  modules: {},
  getters: {
    getSoundAssets: (state) => state.soundAssets
  }
});
