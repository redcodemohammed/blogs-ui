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
  }
}
