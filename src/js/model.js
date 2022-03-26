/*
 * A DAO(Data Access Object) API.
 * It's aware of the data structure of Item and other objects.
 * And knows how to insert, update, delete and read these data.
 */

import Store from './store';

export default (() => {
  const defaultRoute = 'all';

  /* A factory function creating new item object. */
  const Item = (() => {
    function create(text) {
      return {
        id: Date.now(),
        title: text,
        completed: false,
      };
    }

    function getId() {
      return this.id;
    }

    function getTitle() {
      return this.title;
    }

    function setTitle(title) {
      this.title = title;
    }

    function hasCompleted() {
      return !!this.completed;
    }

    // eslint-disable-next-line no-shadow
    function toggleCompleted() {
      this.completed = !this.completed;
    }

    return {
      create,
      getId,
      getTitle,
      setTitle,
      hasCompleted,
      toggleCompleted,
    };
  })();

  /* Query is a [key, value] pair.
     * Once a query is created, it's read-only. */
  function Query(inKey, inValue) {
    const key = inKey;
    const value = inValue;

    function getKey() {
      return key;
    }

    function getValue() {
      return value;
    }

    return { getKey, getValue };
  }

  /* A wrapper function. Set current route to default value, if no route exits. */
  function getCurrentRoute() {
    const route = Store.getCurrentRoute();
    if (!route) {
      Store.setCurrentRoute(defaultRoute);
      return Store.getCurrentRoute();
    }
    return route;
  }

  function setCurrentRoute(route) {
    Store.setCurrentRoute(route);
  }

  function hasItem() {
    return Store.hasItem();
  }

  /* return an array of all exiting items */
  function findAllItems() {
    if (!hasItem()) return [];
    const itemsObj = Store.getItemsObject();
    const arr = [];
    // eslint-disable-next-line no-unused-vars
    Object.entries(itemsObj).forEach(([key, value]) => {
      arr.push(itemsObj[`${key}`]);
    });
    return arr;
  }

  /* Return a sub-array which meet the requirements of the query
     * queries is an array of [key, value] pair */
  function findItems(queries) {
    const allItemsArr = findAllItems();
    return allItemsArr.filter((itemObj) => {
      let result = true;
      queries.forEach((query) => {
        if (itemObj[`${query.getKey()}`] !== query.getValue()) {
          result = false;
        }
      });
      return result;
    });
  }

  /* Create a new Item object and save it into storage. */
  function addItem(text) {
    Store.updateItems((itemsObj) => {
      const itemObj = Item.create(text);
      // eslint-disable-next-line no-param-reassign
      itemsObj[`${Item.getId.call(itemObj)}`] = itemObj;
    });
  }

  /* Remove an item from storage. */
  function deleteItem(itemId) {
    if (!hasItem()) return;
    Store.updateItems((itemsObj) => {
      // eslint-disable-next-line no-param-reassign
      delete itemsObj[`${itemId}`];
    });
  }

  /* Update properties of an item. */
  function updateItem(itemId, itemValue) {
    if (!hasItem()) return;
    Store.updateItems((itemsObj) => {
      const itemObj = itemsObj[`${itemId}`];
      Item.setTitle.call(itemObj, itemValue);
    });
  }

  /* Update item "completed" property. */
  function toggleCompleted(itemId) {
    if (!hasItem()) return;
    Store.updateItems((itemsObj) => {
      const itemObj = itemsObj[`${itemId}`];
      Item.toggleCompleted.call(itemObj);
    });
  }

  /* Batch processing of toggling item "completed" property. */
  function toggleAll(itemsArr) {
    Store.updateItems((itemsObj) => {
      itemsArr.forEach((itemObj) => {
        Item.toggleCompleted.call(itemsObj[`${Item.getId.call(itemObj)}`]);
      });
    });
  }

  return {
    Item,
    Query,
    getCurrentRoute,
    setCurrentRoute,
    hasItem,
    findItems,
    addItem,
    toggleCompleted,
    deleteItem,
    updateItem,
    toggleAll,
  };
})();
