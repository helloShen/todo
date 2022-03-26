/* store.js knows only how to read/write string data from/to Document.localStorage.
 * All items are stored as a long string in localStorage. */
export default (() => {
  const itemsKey = 'todoItems';
  const routeKey = 'todoCurrentRoute';

  /* A shotcut to check whether there's any item left in storage. */
  function hasItem() {
    const itemsStr = window.localStorage.getItem(itemsKey);
    if (itemsStr === '{}') return false;
    return true;
  }

  /* Get the long string of all items.
   * JSON.parse() function converts the string to an object. */
  function getItemsObject() {
    const data = window.localStorage.getItem(itemsKey);
    if (data) return JSON.parse(data);
    return {};
  }

  /* JSON.stringify() function converts an large object (contains all items data)
   * to string.
   * And push the long string into localStrorage. */
  function setItemsObject(itemsObj) {
    window.localStorage.setItem(itemsKey, JSON.stringify(itemsObj));
  }

  /* A helper function read/write data from/to localStorage,
   * so that model.js can focus on his work. */
  function updateItems(callback) {
    const itemsObj = getItemsObject();
    callback(itemsObj);
    setItemsObject(itemsObj);
  }

  /* Simply read current route from localStorage. */
  function getCurrentRoute() {
    return window.localStorage.getItem(`${routeKey}`);
  }

  /* Update current route. */
  function setCurrentRoute(route) {
    window.localStorage.setItem(`${routeKey}`, route);
  }

  return {
    hasItem,
    getItemsObject,
    setItemsObject,
    updateItems,
    getCurrentRoute,
    setCurrentRoute,
  };
})();
