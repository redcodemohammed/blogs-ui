const url = 'https://what-about-jeen.herokuapp.com/graphql'
import store from "../store/index";
export default (query) => {
  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": "Bearer " + store.getters.token },
    body: JSON.stringify({ query })
  };

  return fetch(url, opts)
}
