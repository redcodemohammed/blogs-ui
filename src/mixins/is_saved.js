export default id => {
  const fav_items = JSON.parse(localStorage.getItem('saved_items') || "[]");

  return fav_items.find(item => item.id == id) !== undefined
}
