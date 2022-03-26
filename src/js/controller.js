/*
 * controller.js is a general manager.
 * He is the only one who knows all the logic of different features.
 * But he is blind from both data and DOM.
 * model.js and view.js do these concrete tasks for him.
 */

import View from './view';
import Model from './model';

export default (() => {
  /* Format the date. */
  const MyDate = (() => {
    const options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    };

    /* Cut the date string into weekday, day, month and year. View module knows how to show them. */
    function getToday() {
      const today = new Date();
      const todayStr = today.toLocaleDateString('en-US', options); // Saturday, September 17, 2016
      const [weekday, monthDay, year] = todayStr.split(', ');
      // eslint-disable-next-line prefer-const
      let [month, day] = monthDay.split(' ');
      month = month.slice(0, 3).toUpperCase();
      return {
        weekday, day, month, year,
      };
    }

    return { getToday };
  })();

  function showDate() {
    View.showDate(MyDate.getToday());
  }

  /* Call view to print footer. */
  function showFooter() {
    View.showFooter();
  }

  /* Pre-define queries for three different routes: all, active and completed.
   * Model.find() function accepts only an array of Query as input to filter items we want. */
  const ItemsQuery = (route) => {
    const queryBank = {
      all: [],
      active: [Model.Query('completed', false)],
      completed: [Model.Query('completed', true)],
    };
    return queryBank[route];
  };

  /* Get the queries from ItemsQuery, and feed them to Model.findItems() function. */
  function filterItems(route) {
    return Model.findItems(ItemsQuery(route));
  }

  /* Update the count number of three different routes(all, active and completed) listed
   * on todo board.
   * The entire items board will be hidden if no items left in items list. */
  function updateItemsCount() {
    const activeCount = filterItems('active').length;
    const completedCount = filterItems('completed').length;
    View.updateActiveItemsCount(activeCount);
    View.updateCompletedItemsCount(completedCount);
    if (completedCount === 0) {
      View.hideCompletedItemsCount();
    } else {
      View.showCompletedItemsCount();
    }
    if (activeCount + completedCount === 0) { // hide the entire item board if 0 item left
      View.hideItemsBoard();
      View.hideToggleAll();
    } else {
      View.showItemsBoard();
      if (activeCount > 0) {
        View.toggleAllNotChecked();
      } else {
        View.toggleAllChecked();
      }
    }
  }

  /* Get the current route from storage,
   * filter items under current route and call view to create items card in DOM.
   * View.showItem() function requires a callback function to tell him
   * which buttons need to be activated after item card is created. */
  function showItems() {
    const itemsObjArr = filterItems(Model.getCurrentRoute());
    View.clearItems();
    itemsObjArr.forEach((itemObj) => {
      View.showItem(itemObj, (target) => {
        // eslint-disable-next-line no-use-before-define
        View.bindToggleCompleted(target, toggleCompleted);
        // eslint-disable-next-line no-use-before-define
        View.bindDeleteItem(target, deleteItem);
        // eslint-disable-next-line no-use-before-define
        View.bindEditItem(target, editItem);
      });
    });
  }

  /* Main logic of how to add a new item. */
  function addItem(text) {
    Model.addItem(text);
    View.clearAddItemEle();
    showItems();
    updateItemsCount();
  }

  /* Main logic of toggling an item to completed. */
  function toggleCompleted(itemId) {
    Model.toggleCompleted(itemId);
    showItems(); // must refresh current route.
    updateItemsCount();
  }

  /* Main logic of what happend when delete button is clicked. */
  function deleteItem(itemId) {
    Model.deleteItem(itemId);
    updateItemsCount();
  }

  /* Main login of editing an item. */
  function editItem(itemId, itemValue, callback) {
    if (!itemValue) {
      Model.deleteItem(itemId);
      updateItemsCount();
      callback(); // callback view if need to remove that item from view.
    } else {
      Model.updateItem(itemId, itemValue);
    }
  }

  /* Main logic of switching route. */
  function changeRoute(route) {
    Model.setCurrentRoute(route);
    showItems();
  }

  /* Main logic of "clear all completed" button. */
  function clearAllCompletedItems() {
    const completedItemsArr = Model.findItems(ItemsQuery('completed'));
    completedItemsArr.forEach((itemObj) => {
      const id = Model.Item.getId.call(itemObj);
      Model.deleteItem(id);
    });
    showItems();
    updateItemsCount();
  }

  /* Main logic of "toggle all" button. */
  function toggleAll() {
    if (Model.hasItem()) {
      const activeItemsArr = Model.findItems(ItemsQuery('active'));
      if (activeItemsArr.length > 0) {
        Model.toggleAll(activeItemsArr);
      } else {
        Model.toggleAll(Model.findItems(ItemsQuery('completed')));
      }
      showItems();
      updateItemsCount();
    }
  }

  /* Call View to bind event listeners for adding new item feature.
   * Main logic addItem() function is fed as a callback function. */
  function enableAddItem() {
    View.bindAddItem(addItem);
    View.bindAddItemLabel();
  }

  /* Call View to bind event listeners for route switch buttons.
   * Main logic function changeRoute() is fed as a callback function. */
  function enableChangeRoute() {
    const currentRoute = Model.getCurrentRoute();
    View.bindChangeRoute(changeRoute, () => View.markCurrentRoute(currentRoute));
  }

  /* Call View to bind event listeners for clear buttons.
   * Main logic clearAllCompletedItem() function is fed as a callback function. */
  function enableClearCompletedItems() {
    View.bindClearCompletedItems(clearAllCompletedItems);
  }

  /* Call View to bind event listeners for toggleAll buttons.
   * Main logic toggleAll() function is fed as a callback function. */
  function enableToggleAll() {
    View.bindToggleAll(toggleAll);
  }

  return {
    showFooter,
    showDate,
    showItems,
    updateItemsCount,
    enableAddItem,
    enableChangeRoute,
    enableClearCompletedItems,
    enableToggleAll,
  };
})();
