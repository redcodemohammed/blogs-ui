const state = {
  user_token: localStorage.getItem('user_token')
}

export default {
  state: {
    ...state
  },
  getters: {
    is_logged_in({ user_token }) {
      return !!user_token;
    },
    token({ user_token }) { return user_token || undefined }
  },
  actions: {
    set_token({ commit }, user_token) {
      localStorage.setItem('user_token', user_token);
      commit('SET_TOKEN', user_token);
    }
  },
  mutations: {
    SET_TOKEN(state, user_token) {
      state.user_token = user_token;
    }
  }
}
