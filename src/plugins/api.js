const url = 'https://what-about-jeen.herokuapp.com/graphql'

export default (query) => {
  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  };

  return fetch(url, opts)
}
