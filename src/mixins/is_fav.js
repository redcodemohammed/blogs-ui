export default id => {
  const fav_items = JSON.parse(localStorage.getItem('fav_items') || "[]");

  return fav_items.find(item => item.id == id) !== undefined
}
