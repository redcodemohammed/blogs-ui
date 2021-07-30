import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let timeout = null;

export default new Vuex.Store({
  state: {
    alert: {
      is_shown: false,
      text: null,
      color: null
    }
  },
  mutations: {
    TOGGLE_ALERT(state, payload) {
      state.alert = payload;

      if (payload.is_shown)
        timeout = setTimeout(() => {
          state.alert = { is_shown: false, color: null, text: null };
        }, 6000);

      else clearTimeout(timeout);
    }
  },
  actions: {
    toggle_alert({ commit }, payload) {
      commit('TOGGLE_ALERT', payload);
    }
  },
  getters: {
    alert({ alert }) {
      return alert;
    }
  },
  modules: {
  }
})
