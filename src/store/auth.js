const state = {
  user_token: null
}

export default {
  state: {
    ...state
  },
  getters: {
    is_logged_in({ user_token }) {
      return !!user_token;
    }
  },
  actions: {
    set_token({ commit }, user_token) {
      commit('SET_TOKEN', user_token);
    }
  },
  mutations: {
    SET_TOKEN(state, user_token) {
      state.user_token = user_token;
    }
  }
}
