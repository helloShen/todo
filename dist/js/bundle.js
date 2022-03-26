/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/js/view.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/js/model.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * controller.js is a general manager.
 * He is the only one who knows all the logic of different features.
 * But he is blind from both data and DOM.
 * model.js and view.js do these concrete tasks for him.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  /* Pre-define queries for three different routes: all, active and completed.
   * Model.find() function accepts only an array of Query as input to filter items we want. */
  var ItemsQuery = function () {
    var queryBank = {
      all: [],
      active: [_model__WEBPACK_IMPORTED_MODULE_1__["default"].Query('completed', false)],
      completed: [_model__WEBPACK_IMPORTED_MODULE_1__["default"].Query('completed', true)]
    };

    function create(route) {
      return queryBank[route];
    }

    return {
      create: create
    };
  }();
  /* Get the queries from ItemsQuery, and feed them to Model.findItems() function. */


  function filterItems(route) {
    var queries = ItemsQuery.create(route);
    return _model__WEBPACK_IMPORTED_MODULE_1__["default"].findItems(queries);
  }
  /* Update the count number of three different routes(all, active and completed) listed
   * on todo board.
   * The entire items board will be hidden if no items left in items list. */


  function updateItemsCount() {
    var activeCount = filterItems('active').length;
    var completedCount = filterItems('completed').length;
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].updateActiveItemsCount(activeCount);
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].updateCompletedItemsCount(completedCount);

    if (completedCount === 0) {
      _view__WEBPACK_IMPORTED_MODULE_0__["default"].hideCompletedItemsCount();
    } else {
      _view__WEBPACK_IMPORTED_MODULE_0__["default"].showCompletedItemsCount();
    }

    if (activeCount + completedCount === 0) {
      // hide the entire item board if 0 item left
      _view__WEBPACK_IMPORTED_MODULE_0__["default"].hideItemsBoard();
      _view__WEBPACK_IMPORTED_MODULE_0__["default"].hideToggleAll();
    } else {
      _view__WEBPACK_IMPORTED_MODULE_0__["default"].showItemsBoard();

      if (activeCount > 0) {
        _view__WEBPACK_IMPORTED_MODULE_0__["default"].toggleAllNotChecked();
      } else {
        _view__WEBPACK_IMPORTED_MODULE_0__["default"].toggleAllChecked();
      }
    }
  }
  /* Get the current route from storage,
   * filter items under current route and call view to create items card in DOM.
   * View.showItem() function requires a callback function to tell him
   * which buttons need to be activated after item card is created. */


  function showItems() {
    var itemsArr = filterItems(_model__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentRoute());
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].clearItems();
    itemsArr.forEach(function (itemObj) {
      _view__WEBPACK_IMPORTED_MODULE_0__["default"].showItem(itemObj, function (target) {
        // eslint-disable-next-line no-use-before-define
        _view__WEBPACK_IMPORTED_MODULE_0__["default"].bindToggleCompleted(target, toggleCompleted); // eslint-disable-next-line no-use-before-define

        _view__WEBPACK_IMPORTED_MODULE_0__["default"].bindDeleteItem(target, deleteItem); // eslint-disable-next-line no-use-before-define

        _view__WEBPACK_IMPORTED_MODULE_0__["default"].bindEditItem(target, editItem);
      });
    });
  }
  /* Main logic of how to add a new item. */


  function addItem(text) {
    _model__WEBPACK_IMPORTED_MODULE_1__["default"].addItem(text);
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].clearAddItemEle();
    showItems();
    updateItemsCount();
  }
  /* Main logic of toggling an item to completed. */


  function toggleCompleted(itemId) {
    _model__WEBPACK_IMPORTED_MODULE_1__["default"].toggleItemCompleted(itemId);
    showItems(); // must refresh current route.

    updateItemsCount();
  }
  /* Main logic of what happend when delete button is clicked. */


  function deleteItem(itemId) {
    _model__WEBPACK_IMPORTED_MODULE_1__["default"].deleteItem(itemId);
    updateItemsCount();
  }
  /* Main login of editing an item. */


  function editItem(itemId, itemValue, callback) {
    if (!itemValue) {
      _model__WEBPACK_IMPORTED_MODULE_1__["default"].deleteItem(itemId);
      updateItemsCount();
      callback(); // callback view if need to remove that item from view.
    } else {
      _model__WEBPACK_IMPORTED_MODULE_1__["default"].updateItem(itemId, _model__WEBPACK_IMPORTED_MODULE_1__["default"].Query('title', itemValue));
    }
  }
  /* Main logic of switching route. */


  function changeRoute(route) {
    _model__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentRoute(route);
    showItems();
  }
  /* Main logic of "clear all completed" button. */


  function clearAllCompletedItems() {
    var completedItemsArr = filterItems('completed');
    completedItemsArr.forEach(function (itemObj) {
      _model__WEBPACK_IMPORTED_MODULE_1__["default"].deleteItem(itemObj.id);
    });
    showItems();
    updateItemsCount();
  }
  /* Main logic of "toggle all" button. */


  function toggleAll() {
    var activeItemsArr = filterItems('active');

    if (activeItemsArr.length > 0) {
      activeItemsArr.forEach(function (itemObj) {
        _model__WEBPACK_IMPORTED_MODULE_1__["default"].toggleItemCompleted(itemObj.id);
      });
      showItems();
      updateItemsCount();
    } else {
      var completedItemsArr = filterItems('completed');

      if (completedItemsArr.length > 0) {
        completedItemsArr.forEach(function (itemObj) {
          _model__WEBPACK_IMPORTED_MODULE_1__["default"].toggleItemCompleted(itemObj.id);
        });
        showItems();
        updateItemsCount();
      }
    }
  }
  /* Call View to bind event listeners for adding new item feature.
   * Main logic addItem() function is fed as a callback function. */


  function enableAddItem() {
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].bindAddItem(addItem);
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].bindAddItemLabel();
  }
  /* Call View to bind event listeners for route switch buttons.
   * Main logic function changeRoute() is fed as a callback function. */


  function enableChangeRoute() {
    var currentRoute = _model__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentRoute();
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].bindChangeRoute(changeRoute, function () {
      return _view__WEBPACK_IMPORTED_MODULE_0__["default"].markCurrentRoute(currentRoute);
    });
  }
  /* Call View to bind event listeners for clear buttons.
   * Main logic clearAllCompletedItem() function is fed as a callback function. */


  function enableClearCompletedItems() {
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].bindClearCompletedItems(clearAllCompletedItems);
  }
  /* Call View to bind event listeners for toggleAll buttons.
   * Main logic toggleAll() function is fed as a callback function. */


  function enableToggleAll() {
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].bindToggleAll(toggleAll);
  }
  /* Format the date. */


  var MyDate = function () {
    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    /* Cut the date string into weekday, day, month and year. View module knows how to show them. */

    function getToday() {
      var today = new Date();
      var todayStr = today.toLocaleDateString('en-US', options); // Saturday, September 17, 2016

      var _todayStr$split = todayStr.split(', '),
          _todayStr$split2 = _slicedToArray(_todayStr$split, 3),
          weekday = _todayStr$split2[0],
          monthDay = _todayStr$split2[1],
          year = _todayStr$split2[2]; // eslint-disable-next-line prefer-const


      var _monthDay$split = monthDay.split(' '),
          _monthDay$split2 = _slicedToArray(_monthDay$split, 2),
          month = _monthDay$split2[0],
          day = _monthDay$split2[1];

      month = month.slice(0, 3).toUpperCase();
      return {
        weekday: weekday,
        day: day,
        month: month,
        year: year
      };
    }

    return {
      getToday: getToday
    };
  }();

  function showDate() {
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].showDate(MyDate.getToday());
  }
  /* Call view to print footer. */


  function showFooter() {
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].showFooter();
  }

  return {
    showFooter: showFooter,
    showDate: showDate,
    showItems: showItems,
    updateItemsCount: updateItemsCount,
    enableAddItem: enableAddItem,
    enableChangeRoute: enableChangeRoute,
    enableClearCompletedItems: enableClearCompletedItems,
    enableToggleAll: enableToggleAll
  };
})());

/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/js/store.js");
/*
 * A DAO(Data Access Object) API.
 * It's aware of the data structure of Item and other objects.
 * And knows how to insert, update, delete and read these data.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  var itemStorage = (0,_store__WEBPACK_IMPORTED_MODULE_0__["default"])('items', []);
  var currentRouteStorage = (0,_store__WEBPACK_IMPORTED_MODULE_0__["default"])('currentRoute', 'all');
  /* A factory function creating new item object. */

  var Item = function Item(text) {
    return {
      id: Date.now(),
      title: text,
      completed: false
    };
  };
  /**
   * Query is a [key, value] pair.
   * Once a query is created, it's read-only.
   */


  var Query = function Query(inKey, inValue) {
    var key = inKey;
    var value = inValue;

    function getKey() {
      return key;
    }

    function getValue() {
      return value;
    }

    return {
      getKey: getKey,
      getValue: getValue
    };
  };
  /* Return all items meet the requirements of the query.
   * Queries is an array of [key, value] pair */


  function findItems(queries) {
    return itemStorage.read().filter(function (itemObj) {
      var result = true;
      queries.forEach(function (query) {
        if (itemObj["".concat(query.getKey())] !== query.getValue()) {
          result = false;
        }
      });
      return result;
    });
  }
  /* Create a new Item object and save it into storage. */


  function addItem(text) {
    var itemsArr = itemStorage.read();
    itemsArr.push(Item(text));
    itemStorage.write(itemsArr);
  }
  /* Remove an item from storage. */


  function deleteItem(itemId) {
    var itemsArr = itemStorage.read();
    var id = typeof itemId === 'string' ? parseInt(itemId, 10) : itemId;
    var idx = itemsArr.findIndex(function (ele) {
      return ele.id === id;
    });
    if (idx === -1) return;
    itemsArr.splice(idx, 1);
    itemStorage.write(itemsArr);
  }
  /* Update properties of an item. */


  function updateItem(itemId, query) {
    var itemsArr = itemStorage.read();
    var id = typeof itemId === 'string' ? parseInt(itemId, 10) : itemId;
    var idx = itemsArr.findIndex(function (ele) {
      return ele.id === id;
    });
    if (idx === -1) return;
    itemsArr[idx][query.getKey()] = query.getValue();
    itemStorage.write(itemsArr);
  }
  /* Toggle item "completed" property. */


  function toggleItemCompleted(itemId) {
    var itemsArr = itemStorage.read();
    var id = typeof itemId === 'string' ? parseInt(itemId, 10) : itemId;
    var idx = itemsArr.findIndex(function (ele) {
      return ele.id === id;
    });
    if (idx === -1) return;
    var target = itemsArr[idx];
    target.completed = !target.completed;
    itemStorage.write(itemsArr);
  }
  /* A wrapper function. Set current route to default value, if no route exits. */


  function getCurrentRoute() {
    return currentRouteStorage.read();
  }

  function setCurrentRoute(route) {
    currentRouteStorage.write(route);
  }

  return {
    Query: Query,
    findItems: findItems,
    addItem: addItem,
    deleteItem: deleteItem,
    updateItem: updateItem,
    toggleItemCompleted: toggleItemCompleted,
    getCurrentRoute: getCurrentRoute,
    setCurrentRoute: setCurrentRoute
  };
})());

/***/ }),

/***/ "./src/js/store.js":
/*!*************************!*\
  !*** ./src/js/store.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* store.js knows only how to read/write string data from/to Document.localStorage.
 * All items are stored as a long string in localStorage. */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (inName, inDefaultValue) {
  var name = inName;
  var defaultValue = inDefaultValue;
  var storage = window.localStorage;
  var liveStorage;

  function read() {
    return liveStorage || JSON.parse(storage.getItem(name)) || defaultValue;
  }

  function write(data) {
    liveStorage = data;
    storage.setItem(name, JSON.stringify(data));
  }

  return {
    read: read,
    write: write
  };
});

/***/ }),

/***/ "./src/js/template.js":
/*!****************************!*\
  !*** ./src/js/template.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * A helper of view.js. Only used to store HTML templates.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  function renderItem(itemObj) {
    var str = "<div class=\"item\" data-id=".concat(itemObj.id, ">\n            <input class=\"toggle material-icons\" type=\"checkbox\"> \n            <label class=\"text\">").concat(itemObj.title, "</label>\n            <i class=\"delete material-icons\">clear</i>\n        </div>");
    return str;
  }

  function renderFooter(githubImg, year) {
    return "<div class=\"tip\">Double click to edit todo.</div>\n        <div class=\"copyright\">Copyright MIT \xA9 hireme.shen@gmail.com &nbsp;|&nbsp; Source code - <a href=\"https://github.com/helloShen/todo\"><img class=\"github\" src=\"".concat(githubImg, "\"></a></div>\n        <div class=\"year\">2021-").concat(year, "</div>");
  }

  return {
    renderItem: renderItem,
    renderFooter: renderFooter
  };
})());

/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/js/template.js");
/* harmony import */ var _assets_img_github_black_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/github_black.png */ "./src/assets/img/github_black.png");
/*
 * All DOM manipulations go to this file.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  var todoEle = document.querySelector('.todo');
  var titleEle = todoEle.querySelector('.title');
  var dateEle = titleEle.querySelector('.date');
  var dayEle = dateEle.querySelector('.day');
  var monthEle = dateEle.querySelector('.month');
  var yearEle = dateEle.querySelector('.year');
  var weekdayEle = titleEle.querySelector('.weekday');
  var toggleAllEle = todoEle.querySelector('.toggleAll');
  var addItemContainerEle = todoEle.querySelector('.addItemContainer');
  var addItemEle = addItemContainerEle.querySelector('.addItem');
  var addItemLabelEle = addItemContainerEle.querySelector('.addItemLabel');
  var itemsBoardEle = todoEle.querySelector('.itemsBoard');
  var itemsContainerEle = itemsBoardEle.querySelector('.itemsContainer');
  var itemsFooterEle = itemsBoardEle.querySelector('.itemsFooter');
  var routeBtns = itemsFooterEle.querySelectorAll('.route');
  var activeCountEle = itemsFooterEle.querySelector('.activeItemsCount');
  var activeCountNumEle = activeCountEle.querySelector('.count');
  var completedCountEle = itemsFooterEle.querySelector('.completedItemsCount');
  var completedCountNumEle = completedCountEle.querySelector('.count');
  var footerEle = document.querySelector('.footer');

  function showDate(today) {
    dayEle.textContent = today.day;
    monthEle.textContent = today.month;
    yearEle.textContent = today.year;
    weekdayEle.textContent = today.weekday;
  }

  function clearAddItemEle() {
    addItemEle.value = '';
  }

  function hideAddItemLabel() {
    if (addItemEle.value === '') {
      addItemLabelEle.classList.remove('hide');
    } else {
      addItemLabelEle.classList.add('hide');
    }
  }

  function markCurrentRoute(route) {
    routeBtns.forEach(function (btn) {
      if (btn.dataset.route === route) {
        btn.classList.add('current');
      }
    });
  }

  function updateActiveItemsCount(count) {
    activeCountNumEle.textContent = count;
  }

  function updateCompletedItemsCount(count) {
    completedCountNumEle.textContent = count;
  }

  function showCompletedItemsCount() {
    completedCountEle.classList.remove('hide');
  }

  function hideCompletedItemsCount() {
    completedCountEle.classList.add('hide');
  }

  function showItemsBoard() {
    itemsBoardEle.classList.remove('hidden');
    addItemContainerEle.classList.remove('alone');
    addItemEle.classList.remove('alone');
  }

  function hideItemsBoard() {
    itemsBoardEle.classList.add('hidden');
    addItemContainerEle.classList.add('alone');
    addItemEle.classList.add('alone');
  }

  function hideToggleAll() {
    toggleAllEle.classList.add('hide');
  }

  function toggleAllChecked() {
    toggleAllEle.classList.remove('hide');
    toggleAllEle.checked = true;
  }

  function toggleAllNotChecked() {
    toggleAllEle.classList.remove('hide');
    toggleAllEle.checked = false;
  }

  function removeElement(target) {
    target.remove();
  }

  function clearItems() {
    itemsContainerEle.innerHTML = '';
  }

  function showItem(itemObj, callback) {
    itemsContainerEle.insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_0__["default"].renderItem(itemObj));
    var target = itemsContainerEle.querySelector(".item[data-id=\"".concat(itemObj.id, "\"]"));

    if (itemObj.completed) {
      target.classList.add('completed');
      var checkbox = target.querySelector('.toggle');
      checkbox.checked = true;
    }

    callback(target);
  }

  function bindAddItem(callback) {
    addItemEle.addEventListener('change', function () {
      return callback(addItemEle.value);
    }, false);
  }

  function bindAddItemLabel() {
    addItemEle.addEventListener('input', function () {
      return hideAddItemLabel();
    });
    addItemEle.addEventListener('change', function () {
      return hideAddItemLabel();
    });
  }

  function bindToggleCompleted(target, callback) {
    var checkbox = target.querySelector('.toggle');
    checkbox.addEventListener('change', function () {
      target.classList.toggle('completed');
      callback(target.dataset.id);
    });
  }

  function bindDeleteItem(target, callback) {
    var btn = target.querySelector('.delete');
    btn.addEventListener('click', function () {
      target.remove();
      callback(target.dataset.id);
    });
  }

  function bindEditItem(target, callback) {
    var label = target.querySelector('.text');
    label.addEventListener('dblclick', function () {
      label.classList.add('editting');
      label.setAttribute('contenteditable', true);
      label.focus();
    });
    label.addEventListener('blur', function () {
      label.classList.remove('editting');
      label.setAttribute('contenteditable', false);
      callback(target.dataset.id, label.textContent, function () {
        removeElement(target);
      });
    });
    label.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') label.blur();
    });
  }

  function bindChangeRoute(eachBtnCallback, endingCallback) {
    routeBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        eachBtnCallback(btn.dataset.route);
        routeBtns.forEach(function (ele) {
          if (ele.classList.contains('current')) {
            ele.classList.remove('current');
          }
        });
        btn.classList.add('current');
      });
    });
    endingCallback();
  }

  function bindClearCompletedItems(callback) {
    completedCountEle.addEventListener('click', function () {
      return callback();
    });
  }

  function bindToggleAll(callback) {
    toggleAllEle.addEventListener('click', function () {
      return callback();
    });
  }

  function showFooter() {
    var year = new Date().getFullYear();
    footerEle.insertAdjacentHTML('afterbegin', _template__WEBPACK_IMPORTED_MODULE_0__["default"].renderFooter(_assets_img_github_black_png__WEBPACK_IMPORTED_MODULE_1__, year));
  }

  return {
    showDate: showDate,
    clearAddItemEle: clearAddItemEle,
    bindAddItem: bindAddItem,
    bindAddItemLabel: bindAddItemLabel,
    bindToggleCompleted: bindToggleCompleted,
    bindDeleteItem: bindDeleteItem,
    bindEditItem: bindEditItem,
    bindChangeRoute: bindChangeRoute,
    markCurrentRoute: markCurrentRoute,
    bindClearCompletedItems: bindClearCompletedItems,
    bindToggleAll: bindToggleAll,
    updateActiveItemsCount: updateActiveItemsCount,
    updateCompletedItemsCount: updateCompletedItemsCount,
    showCompletedItemsCount: showCompletedItemsCount,
    hideCompletedItemsCount: hideCompletedItemsCount,
    hideItemsBoard: hideItemsBoard,
    showItemsBoard: showItemsBoard,
    hideToggleAll: hideToggleAll,
    toggleAllChecked: toggleAllChecked,
    toggleAllNotChecked: toggleAllNotChecked,
    removeElement: removeElement,
    clearItems: clearItems,
    showItem: showItem,
    showFooter: showFooter
  };
})());

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_norm_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./norm.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/norm.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_norm_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&family=Roboto:wght@100;400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\t--black: #24292d;\n\t--black-dimmer: #2b3137;\n\t--gray: #58606a;\n\t--light-gray: #949da7;\n\t--lighter-gray: #b4bdc8;\n\t--border-gray: #e7e9ea;\n\t--back-gray: #f6f8fa;\n\t--white: #ffffff;\n\t--red: #db2c00;\n\t--green: #2da44e;\n\t--blue: #0d74e7;\n\t--blue2: #0969da;\n\t--purple: #6e5494;\n}\n\nbody {\n\tmin-height: 100vh;\n\tbackground-color: var(--back-gray);\n}\n\n.logo {\n\theight: 6rem;\n\tfont-size: 2.5rem;\n\tfont-weight: 700;\n\tfont-family: 'Poppins', sans-serif;\n\tcolor: var(--black);\n\tdisplay: grid;\n\talign-items: end;\n\tjustify-items: center;\n}\n\n.main {\n\twidth: 100%;\n\tmargin: 2rem 0;\n\tdisplay: grid;\n\tjustify-content: center;\n}\n\n.todo {\n\twidth: 36rem;\n\tborder-radius: 0.5rem;\n\tbox-shadow: 1px 1px 4px var(--border-gray);\n}\n\n.todo > .title {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-weight: 500;\n\twidth: 100%;\n\theight: 7rem;\n\tpadding: 2rem 2.5rem;\n\tborder: 1px solid var(--border-gray);\n\tborder-bottom: 0;\n\tborder-top-left-radius: 0.5rem;\n\tborder-top-right-radius: 0.5rem;\n\tbackground-color: var(--white);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n\n.todo .date {\n\twidth: 7rem;\n\theight: 3rem;\n\tcolor: var(--gray);\n\tdisplay: grid;\n\tgrid-template-columns: 3rem 3rem;\n\tgrid-template-rows: 1.5rem 1.5rem;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.todo .day {\n\tfont-size: 3rem;\n\tgrid-row: 1 / 3;\n\tgrid-column: 1 / 2;\n}\n\n.todo .month {\n\tjustify-self: start;\n\talign-self: end;\n\tfont-size: 1rem;\n\tgrid-row: 1 / 2;\n\tgrid-column: 2 / 3;\n\tpadding-left: 1rem;\n}\n\n.todo .year {\n\tjustify-self: start;\n\talign-self: start;\n\tfont-size: 1rem;\n\tgrid-row: 2 / 3;\n\tgrid-column: 2 / 3;\n\tpadding-left: 1rem;\n}\n\n.todo .weekday {\n\tfont-size: 1.5rem;\n\tfont-weight: 100;\n}\n\n.todo > .addItemContainer {\n\twidth: 100%;\n\theight: 4rem;\n\tfont-size: 1.5rem;\n\tborder: 1px solid var(--border-gray);\n\tbackground-color: var(--white);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-template-columns: 3rem 1fr;\n\talign-items: center;\n}\n\n.todo > .addItemContainer.alone {\n\tborder-bottom-left-radius: 0.5rem;\n\tborder-bottom-right-radius: 0.5rem;\n}\n\n.todo .toggleAll {\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n}\n\n.todo .toggleAll::after {\n\tfont-size: 1.5rem;\n\tmargin: 0 0.75rem;\n\tcontent: 'radio_button_unchecked';\n\tcolor: var(--border-gray);\n}\n\n.todo .toggleAll:checked::after {\n\tcontent: 'check_circle';\n\tcolor: var(--green);\n\topacity: 0.6;\n}\n\n.todo .toggleAll.hide {\n\topacity: 0;\n}\n\n.todo .addItemForm {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-weight: 100;\n\theight: 100%;\n\twidth: 100%;\n\tposition: relative;\n}\n\n.todo .addItemLabel {\n\tposition: absolute;\n\tleft: 1px;\n\ttop: 1.2rem;\n\tcolor: var(--lighter-gray);\n\tuser-select: none;\n}\n\n.todo .addItemLabel.hide {\n\tdisplay: none;\n}\n\n.todo .addItem {\n\theight: 100%;\n\twidth: 100%;\n\tborder: 0px;\n\tborder-top-right-radius: 0.5rem;\n\tfont-size: 1.5rem;\n\toutline: none;\n\tcolor: var(--black);\n}\n\n.todo .addItem.alone {\n\tborder-bottom-right-radius: 0.5rem;\n}\n\n.todo > .itemsBoard {\n\tdisplay: block;\n}\n\n.todo > .itemsBoard.hidden {\n\tdisplay: none;\n}\n\n.todo .item {\n\twidth: 100%;\n\tmargin: -1px 0;\n\theight: 4rem;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 1.5rem;\n\tborder: 1px solid var(--border-gray);\n\tbackground-color: var(--white);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-template-columns: 3rem 1fr 3rem;\n\talign-items: center;\n}\n\n.todo .item > .toggle {\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n}\n\n.todo .item > .toggle::after {\n\tcontent: 'radio_button_unchecked';\n\tmargin: 0 0.75rem;\n\tcolor: var(--border-gray);\n\topacity: 0.6;\n}\n\n.todo .item > .toggle:checked::after {\n\tcontent: 'check_circle';\n\tcolor: var(--green);\n}\n\n.todo .item > .text {\n\theight: 100%;\n\tcolor: var(--gray);\n  outline: none;\n\tdisplay: grid;\n\talign-items: center;\n}\n\n.todo .item.completed > .text {\n\topacity: 0.6;\n\ttext-decoration: line-through;\n}\n\n.todo .item > .text.editting {\n  border: 1px solid var(--border-gray);\n  border-radius: .25rem;\n\tbackground-color: var(--back-gray);\n}\n\n.todo .item > .delete {\n\topacity: 0;\n\tjustify-self: center;\n\tcursor: pointer;\n\tuser-select: none;\n\tmargin-right: 1rem;\n}\n\n.todo .item:hover > .delete {\n\topacity: 1;\n\tcolor: var(--red);\n}\n\n.todo .itemsFooter {\n\twidth: 100%;\n\theight: 4rem;\n\tfont-size: 0.75rem;\n\tfont-family: 'Poppins', sans-serif;\n\tborder: 1px solid var(--border-gray);\n\tborder-bottom-left-radius: 0.5rem;\n\tborder-bottom-right-radius: 0.5rem;\n\tbackground-color: var(--white);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.todo .itemsFooter > .activeItemsCount,\n.todo .itemsFooter > .completedItemsCount {\n\theight: 2rem;\n\tmargin: 0 1rem;\n\tcolor: var(--gray);\n\tuser-select: none;\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-items: center;\n\tjustify-content: center;\n}\n\n.todo .itemsFooter > .activeItemsCount {\n\twidth: 4.5rem;\n}\n\n.todo .itemsFooter > .completedItemsCount {\n\twidth: 11rem;\n\tborder-radius: 0.25rem;\n\tcursor: pointer;\n\tborder: 1px solid var(--border-gray);\n\tbackground-color: var(--back-gray);\n}\n\n.todo .itemsFooter > .completedItemsCount.hide {\n\topacity: 0;\n\tcursor: auto;\n}\n\n.todo .itemsFooter > .routes {\n\theight: 2rem;\n\twidth: 14rem;\n\tmargin: 0 1rem;\n\tuser-select: none;\n\tcursor: pointer;\n\tdisplay: grid;\n\tgrid-template-columns: 3rem 4rem 6rem;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 0.5rem;\n}\n\n.todo .itemsFooter .route {\n\tpadding: 0.25rem 0.75rem;\n\tcolor: var(--gray);\n\tborder-radius: 0.25rem;\n\tdisplay: grid;\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.todo .itemsFooter .route:hover {\n\tborder: 1px solid var(--border-gray);\n}\n\n.todo .itemsFooter .route.current {\n\tbackground-color: var(--back-gray);\n\tborder: 1px solid var(--border-gray);\n}\n\n.footer {\n\theight: 4.5rem;\n\twidth: 100%;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 0.75rem;\n\tcolor: var(--lighter-gray);\n\tdisplay: grid;\n\tgrid-template-rows: repeat(3, 1.5rem);\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.footer .tip,\n.footer .copyright,\n.footer .year {\n\theight: 1.5rem;\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tgap: 0.25rem;\n}\n\n.footer a {\n\twidth: 1rem;\n\theight: 1rem;\n}\n\n.footer .github {\n\twidth: 100%;\n\theight: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('./norm.css');\n@import url('https://fonts.googleapis.com/icon?family=Material+Icons');\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&family=Roboto:wght@100;400;500;700&display=swap');\n\n:root {\n\t--black: #24292d;\n\t--black-dimmer: #2b3137;\n\t--gray: #58606a;\n\t--light-gray: #949da7;\n\t--lighter-gray: #b4bdc8;\n\t--border-gray: #e7e9ea;\n\t--back-gray: #f6f8fa;\n\t--white: #ffffff;\n\t--red: #db2c00;\n\t--green: #2da44e;\n\t--blue: #0d74e7;\n\t--blue2: #0969da;\n\t--purple: #6e5494;\n}\n\nbody {\n\tmin-height: 100vh;\n\tbackground-color: var(--back-gray);\n}\n\n.logo {\n\theight: 6rem;\n\tfont-size: 2.5rem;\n\tfont-weight: 700;\n\tfont-family: 'Poppins', sans-serif;\n\tcolor: var(--black);\n\tdisplay: grid;\n\talign-items: end;\n\tjustify-items: center;\n}\n\n.main {\n\twidth: 100%;\n\tmargin: 2rem 0;\n\tdisplay: grid;\n\tjustify-content: center;\n}\n\n.todo {\n\twidth: 36rem;\n\tborder-radius: 0.5rem;\n\tbox-shadow: 1px 1px 4px var(--border-gray);\n}\n\n.todo > .title {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-weight: 500;\n\twidth: 100%;\n\theight: 7rem;\n\tpadding: 2rem 2.5rem;\n\tborder: 1px solid var(--border-gray);\n\tborder-bottom: 0;\n\tborder-top-left-radius: 0.5rem;\n\tborder-top-right-radius: 0.5rem;\n\tbackground-color: var(--white);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n\n.todo .date {\n\twidth: 7rem;\n\theight: 3rem;\n\tcolor: var(--gray);\n\tdisplay: grid;\n\tgrid-template-columns: 3rem 3rem;\n\tgrid-template-rows: 1.5rem 1.5rem;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.todo .day {\n\tfont-size: 3rem;\n\tgrid-row: 1 / 3;\n\tgrid-column: 1 / 2;\n}\n\n.todo .month {\n\tjustify-self: start;\n\talign-self: end;\n\tfont-size: 1rem;\n\tgrid-row: 1 / 2;\n\tgrid-column: 2 / 3;\n\tpadding-left: 1rem;\n}\n\n.todo .year {\n\tjustify-self: start;\n\talign-self: start;\n\tfont-size: 1rem;\n\tgrid-row: 2 / 3;\n\tgrid-column: 2 / 3;\n\tpadding-left: 1rem;\n}\n\n.todo .weekday {\n\tfont-size: 1.5rem;\n\tfont-weight: 100;\n}\n\n.todo > .addItemContainer {\n\twidth: 100%;\n\theight: 4rem;\n\tfont-size: 1.5rem;\n\tborder: 1px solid var(--border-gray);\n\tbackground-color: var(--white);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-template-columns: 3rem 1fr;\n\talign-items: center;\n}\n\n.todo > .addItemContainer.alone {\n\tborder-bottom-left-radius: 0.5rem;\n\tborder-bottom-right-radius: 0.5rem;\n}\n\n.todo .toggleAll {\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n}\n\n.todo .toggleAll::after {\n\tfont-size: 1.5rem;\n\tmargin: 0 0.75rem;\n\tcontent: 'radio_button_unchecked';\n\tcolor: var(--border-gray);\n}\n\n.todo .toggleAll:checked::after {\n\tcontent: 'check_circle';\n\tcolor: var(--green);\n\topacity: 0.6;\n}\n\n.todo .toggleAll.hide {\n\topacity: 0;\n}\n\n.todo .addItemForm {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-weight: 100;\n\theight: 100%;\n\twidth: 100%;\n\tposition: relative;\n}\n\n.todo .addItemLabel {\n\tposition: absolute;\n\tleft: 1px;\n\ttop: 1.2rem;\n\tcolor: var(--lighter-gray);\n\tuser-select: none;\n}\n\n.todo .addItemLabel.hide {\n\tdisplay: none;\n}\n\n.todo .addItem {\n\theight: 100%;\n\twidth: 100%;\n\tborder: 0px;\n\tborder-top-right-radius: 0.5rem;\n\tfont-size: 1.5rem;\n\toutline: none;\n\tcolor: var(--black);\n}\n\n.todo .addItem.alone {\n\tborder-bottom-right-radius: 0.5rem;\n}\n\n.todo > .itemsBoard {\n\tdisplay: block;\n}\n\n.todo > .itemsBoard.hidden {\n\tdisplay: none;\n}\n\n.todo .item {\n\twidth: 100%;\n\tmargin: -1px 0;\n\theight: 4rem;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 1.5rem;\n\tborder: 1px solid var(--border-gray);\n\tbackground-color: var(--white);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-template-columns: 3rem 1fr 3rem;\n\talign-items: center;\n}\n\n.todo .item > .toggle {\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n}\n\n.todo .item > .toggle::after {\n\tcontent: 'radio_button_unchecked';\n\tmargin: 0 0.75rem;\n\tcolor: var(--border-gray);\n\topacity: 0.6;\n}\n\n.todo .item > .toggle:checked::after {\n\tcontent: 'check_circle';\n\tcolor: var(--green);\n}\n\n.todo .item > .text {\n\theight: 100%;\n\tcolor: var(--gray);\n  outline: none;\n\tdisplay: grid;\n\talign-items: center;\n}\n\n.todo .item.completed > .text {\n\topacity: 0.6;\n\ttext-decoration: line-through;\n}\n\n.todo .item > .text.editting {\n  border: 1px solid var(--border-gray);\n  border-radius: .25rem;\n\tbackground-color: var(--back-gray);\n}\n\n.todo .item > .delete {\n\topacity: 0;\n\tjustify-self: center;\n\tcursor: pointer;\n\tuser-select: none;\n\tmargin-right: 1rem;\n}\n\n.todo .item:hover > .delete {\n\topacity: 1;\n\tcolor: var(--red);\n}\n\n.todo .itemsFooter {\n\twidth: 100%;\n\theight: 4rem;\n\tfont-size: 0.75rem;\n\tfont-family: 'Poppins', sans-serif;\n\tborder: 1px solid var(--border-gray);\n\tborder-bottom-left-radius: 0.5rem;\n\tborder-bottom-right-radius: 0.5rem;\n\tbackground-color: var(--white);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.todo .itemsFooter > .activeItemsCount,\n.todo .itemsFooter > .completedItemsCount {\n\theight: 2rem;\n\tmargin: 0 1rem;\n\tcolor: var(--gray);\n\tuser-select: none;\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-items: center;\n\tjustify-content: center;\n}\n\n.todo .itemsFooter > .activeItemsCount {\n\twidth: 4.5rem;\n}\n\n.todo .itemsFooter > .completedItemsCount {\n\twidth: 11rem;\n\tborder-radius: 0.25rem;\n\tcursor: pointer;\n\tborder: 1px solid var(--border-gray);\n\tbackground-color: var(--back-gray);\n}\n\n.todo .itemsFooter > .completedItemsCount.hide {\n\topacity: 0;\n\tcursor: auto;\n}\n\n.todo .itemsFooter > .routes {\n\theight: 2rem;\n\twidth: 14rem;\n\tmargin: 0 1rem;\n\tuser-select: none;\n\tcursor: pointer;\n\tdisplay: grid;\n\tgrid-template-columns: 3rem 4rem 6rem;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 0.5rem;\n}\n\n.todo .itemsFooter .route {\n\tpadding: 0.25rem 0.75rem;\n\tcolor: var(--gray);\n\tborder-radius: 0.25rem;\n\tdisplay: grid;\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.todo .itemsFooter .route:hover {\n\tborder: 1px solid var(--border-gray);\n}\n\n.todo .itemsFooter .route.current {\n\tbackground-color: var(--back-gray);\n\tborder: 1px solid var(--border-gray);\n}\n\n.footer {\n\theight: 4.5rem;\n\twidth: 100%;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 0.75rem;\n\tcolor: var(--lighter-gray);\n\tdisplay: grid;\n\tgrid-template-rows: repeat(3, 1.5rem);\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.footer .tip,\n.footer .copyright,\n.footer .year {\n\theight: 1.5rem;\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tgap: 0.25rem;\n}\n\n.footer a {\n\twidth: 1rem;\n\theight: 1rem;\n}\n\n.footer .github {\n\twidth: 100%;\n\theight: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/norm.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/norm.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/css/norm.css"],"names":[],"mappings":"AAAA;;;IAGI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd","sourcesContent":["*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/img/github_black.png":
/*!*****************************************!*\
  !*** ./src/assets/img/github_black.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d8c6d6c90bdccf76d860.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/js/controller.js");
// eslint-disable-next-line no-unused-vars



(function () {
  _controller__WEBPACK_IMPORTED_MODULE_1__["default"].enableAddItem();
  _controller__WEBPACK_IMPORTED_MODULE_1__["default"].enableChangeRoute();
  _controller__WEBPACK_IMPORTED_MODULE_1__["default"].enableClearCompletedItems();
  _controller__WEBPACK_IMPORTED_MODULE_1__["default"].enableToggleAll();
  _controller__WEBPACK_IMPORTED_MODULE_1__["default"].showDate();
  _controller__WEBPACK_IMPORTED_MODULE_1__["default"].showItems();
  _controller__WEBPACK_IMPORTED_MODULE_1__["default"].updateItemsCount();
  _controller__WEBPACK_IMPORTED_MODULE_1__["default"].showFooter();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxL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QUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxZQUFNO0FBQ040RixFQUFBQSxpRUFBQTtBQUNBQSxFQUFBQSxxRUFBQTtBQUNBQSxFQUFBQSw2RUFBQTtBQUNBQSxFQUFBQSxtRUFBQTtBQUNBQSxFQUFBQSw0REFBQTtBQUNBQSxFQUFBQSw2REFBQTtBQUNBQSxFQUFBQSxvRUFBQTtBQUNBQSxFQUFBQSw4REFBQTtBQUNBLENBVEQsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvanMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL21vZGVsLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3NzL25vcm0uY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBjb250cm9sbGVyLmpzIGlzIGEgZ2VuZXJhbCBtYW5hZ2VyLlxuICogSGUgaXMgdGhlIG9ubHkgb25lIHdobyBrbm93cyBhbGwgdGhlIGxvZ2ljIG9mIGRpZmZlcmVudCBmZWF0dXJlcy5cbiAqIEJ1dCBoZSBpcyBibGluZCBmcm9tIGJvdGggZGF0YSBhbmQgRE9NLlxuICogbW9kZWwuanMgYW5kIHZpZXcuanMgZG8gdGhlc2UgY29uY3JldGUgdGFza3MgZm9yIGhpbS5cbiAqL1xuXG5pbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHQvKiBQcmUtZGVmaW5lIHF1ZXJpZXMgZm9yIHRocmVlIGRpZmZlcmVudCByb3V0ZXM6IGFsbCwgYWN0aXZlIGFuZCBjb21wbGV0ZWQuXG5cdCAqIE1vZGVsLmZpbmQoKSBmdW5jdGlvbiBhY2NlcHRzIG9ubHkgYW4gYXJyYXkgb2YgUXVlcnkgYXMgaW5wdXQgdG8gZmlsdGVyIGl0ZW1zIHdlIHdhbnQuICovXG5cdGNvbnN0IEl0ZW1zUXVlcnkgPSAoKCkgPT4ge1xuXHRcdGNvbnN0IHF1ZXJ5QmFuayA9IHtcblx0XHRcdGFsbDogW10sXG5cdFx0XHRhY3RpdmU6IFtNb2RlbC5RdWVyeSgnY29tcGxldGVkJywgZmFsc2UpXSxcblx0XHRcdGNvbXBsZXRlZDogW01vZGVsLlF1ZXJ5KCdjb21wbGV0ZWQnLCB0cnVlKV0sXG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGNyZWF0ZShyb3V0ZSkge1xuXHRcdFx0cmV0dXJuIHF1ZXJ5QmFua1tyb3V0ZV07XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRjcmVhdGUsXG5cdFx0fTtcblx0fSkoKTtcblxuXHQvKiBHZXQgdGhlIHF1ZXJpZXMgZnJvbSBJdGVtc1F1ZXJ5LCBhbmQgZmVlZCB0aGVtIHRvIE1vZGVsLmZpbmRJdGVtcygpIGZ1bmN0aW9uLiAqL1xuXHRmdW5jdGlvbiBmaWx0ZXJJdGVtcyhyb3V0ZSkge1xuXHRcdGNvbnN0IHF1ZXJpZXMgPSBJdGVtc1F1ZXJ5LmNyZWF0ZShyb3V0ZSk7XG5cdFx0cmV0dXJuIE1vZGVsLmZpbmRJdGVtcyhxdWVyaWVzKTtcblx0fVxuXG5cdC8qIFVwZGF0ZSB0aGUgY291bnQgbnVtYmVyIG9mIHRocmVlIGRpZmZlcmVudCByb3V0ZXMoYWxsLCBhY3RpdmUgYW5kIGNvbXBsZXRlZCkgbGlzdGVkXG5cdCAqIG9uIHRvZG8gYm9hcmQuXG5cdCAqIFRoZSBlbnRpcmUgaXRlbXMgYm9hcmQgd2lsbCBiZSBoaWRkZW4gaWYgbm8gaXRlbXMgbGVmdCBpbiBpdGVtcyBsaXN0LiAqL1xuXHRmdW5jdGlvbiB1cGRhdGVJdGVtc0NvdW50KCkge1xuXHRcdGNvbnN0IGFjdGl2ZUNvdW50ID0gZmlsdGVySXRlbXMoJ2FjdGl2ZScpLmxlbmd0aDtcblx0XHRjb25zdCBjb21wbGV0ZWRDb3VudCA9IGZpbHRlckl0ZW1zKCdjb21wbGV0ZWQnKS5sZW5ndGg7XG5cdFx0Vmlldy51cGRhdGVBY3RpdmVJdGVtc0NvdW50KGFjdGl2ZUNvdW50KTtcblx0XHRWaWV3LnVwZGF0ZUNvbXBsZXRlZEl0ZW1zQ291bnQoY29tcGxldGVkQ291bnQpO1xuXHRcdGlmIChjb21wbGV0ZWRDb3VudCA9PT0gMCkge1xuXHRcdFx0Vmlldy5oaWRlQ29tcGxldGVkSXRlbXNDb3VudCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRWaWV3LnNob3dDb21wbGV0ZWRJdGVtc0NvdW50KCk7XG5cdFx0fVxuXHRcdGlmIChhY3RpdmVDb3VudCArIGNvbXBsZXRlZENvdW50ID09PSAwKSB7XG5cdFx0XHQvLyBoaWRlIHRoZSBlbnRpcmUgaXRlbSBib2FyZCBpZiAwIGl0ZW0gbGVmdFxuXHRcdFx0Vmlldy5oaWRlSXRlbXNCb2FyZCgpO1xuXHRcdFx0Vmlldy5oaWRlVG9nZ2xlQWxsKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFZpZXcuc2hvd0l0ZW1zQm9hcmQoKTtcblx0XHRcdGlmIChhY3RpdmVDb3VudCA+IDApIHtcblx0XHRcdFx0Vmlldy50b2dnbGVBbGxOb3RDaGVja2VkKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRWaWV3LnRvZ2dsZUFsbENoZWNrZWQoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiBHZXQgdGhlIGN1cnJlbnQgcm91dGUgZnJvbSBzdG9yYWdlLFxuXHQgKiBmaWx0ZXIgaXRlbXMgdW5kZXIgY3VycmVudCByb3V0ZSBhbmQgY2FsbCB2aWV3IHRvIGNyZWF0ZSBpdGVtcyBjYXJkIGluIERPTS5cblx0ICogVmlldy5zaG93SXRlbSgpIGZ1bmN0aW9uIHJlcXVpcmVzIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gdGVsbCBoaW1cblx0ICogd2hpY2ggYnV0dG9ucyBuZWVkIHRvIGJlIGFjdGl2YXRlZCBhZnRlciBpdGVtIGNhcmQgaXMgY3JlYXRlZC4gKi9cblx0ZnVuY3Rpb24gc2hvd0l0ZW1zKCkge1xuXHRcdGNvbnN0IGl0ZW1zQXJyID0gZmlsdGVySXRlbXMoTW9kZWwuZ2V0Q3VycmVudFJvdXRlKCkpO1xuXHRcdFZpZXcuY2xlYXJJdGVtcygpO1xuXHRcdGl0ZW1zQXJyLmZvckVhY2goKGl0ZW1PYmopID0+IHtcblx0XHRcdFZpZXcuc2hvd0l0ZW0oaXRlbU9iaiwgKHRhcmdldCkgPT4ge1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcblx0XHRcdFx0Vmlldy5iaW5kVG9nZ2xlQ29tcGxldGVkKHRhcmdldCwgdG9nZ2xlQ29tcGxldGVkKTtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG5cdFx0XHRcdFZpZXcuYmluZERlbGV0ZUl0ZW0odGFyZ2V0LCBkZWxldGVJdGVtKTtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG5cdFx0XHRcdFZpZXcuYmluZEVkaXRJdGVtKHRhcmdldCwgZWRpdEl0ZW0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKiBNYWluIGxvZ2ljIG9mIGhvdyB0byBhZGQgYSBuZXcgaXRlbS4gKi9cblx0ZnVuY3Rpb24gYWRkSXRlbSh0ZXh0KSB7XG5cdFx0TW9kZWwuYWRkSXRlbSh0ZXh0KTtcblx0XHRWaWV3LmNsZWFyQWRkSXRlbUVsZSgpO1xuXHRcdHNob3dJdGVtcygpO1xuXHRcdHVwZGF0ZUl0ZW1zQ291bnQoKTtcblx0fVxuXG5cdC8qIE1haW4gbG9naWMgb2YgdG9nZ2xpbmcgYW4gaXRlbSB0byBjb21wbGV0ZWQuICovXG5cdGZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlZChpdGVtSWQpIHtcblx0XHRNb2RlbC50b2dnbGVJdGVtQ29tcGxldGVkKGl0ZW1JZCk7XG5cdFx0c2hvd0l0ZW1zKCk7IC8vIG11c3QgcmVmcmVzaCBjdXJyZW50IHJvdXRlLlxuXHRcdHVwZGF0ZUl0ZW1zQ291bnQoKTtcblx0fVxuXG5cdC8qIE1haW4gbG9naWMgb2Ygd2hhdCBoYXBwZW5kIHdoZW4gZGVsZXRlIGJ1dHRvbiBpcyBjbGlja2VkLiAqL1xuXHRmdW5jdGlvbiBkZWxldGVJdGVtKGl0ZW1JZCkge1xuXHRcdE1vZGVsLmRlbGV0ZUl0ZW0oaXRlbUlkKTtcblx0XHR1cGRhdGVJdGVtc0NvdW50KCk7XG5cdH1cblxuXHQvKiBNYWluIGxvZ2luIG9mIGVkaXRpbmcgYW4gaXRlbS4gKi9cblx0ZnVuY3Rpb24gZWRpdEl0ZW0oaXRlbUlkLCBpdGVtVmFsdWUsIGNhbGxiYWNrKSB7XG5cdFx0aWYgKCFpdGVtVmFsdWUpIHtcblx0XHRcdE1vZGVsLmRlbGV0ZUl0ZW0oaXRlbUlkKTtcblx0XHRcdHVwZGF0ZUl0ZW1zQ291bnQoKTtcblx0XHRcdGNhbGxiYWNrKCk7IC8vIGNhbGxiYWNrIHZpZXcgaWYgbmVlZCB0byByZW1vdmUgdGhhdCBpdGVtIGZyb20gdmlldy5cblx0XHR9IGVsc2Uge1xuXHRcdFx0TW9kZWwudXBkYXRlSXRlbShpdGVtSWQsIE1vZGVsLlF1ZXJ5KCd0aXRsZScsIGl0ZW1WYWx1ZSkpO1xuXHRcdH1cblx0fVxuXG5cdC8qIE1haW4gbG9naWMgb2Ygc3dpdGNoaW5nIHJvdXRlLiAqL1xuXHRmdW5jdGlvbiBjaGFuZ2VSb3V0ZShyb3V0ZSkge1xuXHRcdE1vZGVsLnNldEN1cnJlbnRSb3V0ZShyb3V0ZSk7XG5cdFx0c2hvd0l0ZW1zKCk7XG5cdH1cblxuXHQvKiBNYWluIGxvZ2ljIG9mIFwiY2xlYXIgYWxsIGNvbXBsZXRlZFwiIGJ1dHRvbi4gKi9cblx0ZnVuY3Rpb24gY2xlYXJBbGxDb21wbGV0ZWRJdGVtcygpIHtcblx0XHRjb25zdCBjb21wbGV0ZWRJdGVtc0FyciA9IGZpbHRlckl0ZW1zKCdjb21wbGV0ZWQnKTtcblx0XHRjb21wbGV0ZWRJdGVtc0Fyci5mb3JFYWNoKChpdGVtT2JqKSA9PiB7XG5cdFx0XHRNb2RlbC5kZWxldGVJdGVtKGl0ZW1PYmouaWQpO1xuXHRcdH0pO1xuXHRcdHNob3dJdGVtcygpO1xuXHRcdHVwZGF0ZUl0ZW1zQ291bnQoKTtcblx0fVxuXG5cdC8qIE1haW4gbG9naWMgb2YgXCJ0b2dnbGUgYWxsXCIgYnV0dG9uLiAqL1xuXHRmdW5jdGlvbiB0b2dnbGVBbGwoKSB7XG5cdFx0Y29uc3QgYWN0aXZlSXRlbXNBcnIgPSBmaWx0ZXJJdGVtcygnYWN0aXZlJyk7XG5cdFx0aWYgKGFjdGl2ZUl0ZW1zQXJyLmxlbmd0aCA+IDApIHtcblx0XHRcdGFjdGl2ZUl0ZW1zQXJyLmZvckVhY2goKGl0ZW1PYmopID0+IHtcblx0XHRcdFx0TW9kZWwudG9nZ2xlSXRlbUNvbXBsZXRlZChpdGVtT2JqLmlkKTtcblx0XHRcdH0pO1xuXHRcdFx0c2hvd0l0ZW1zKCk7XG5cdFx0XHR1cGRhdGVJdGVtc0NvdW50KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGNvbXBsZXRlZEl0ZW1zQXJyID0gZmlsdGVySXRlbXMoJ2NvbXBsZXRlZCcpO1xuXHRcdFx0aWYgKGNvbXBsZXRlZEl0ZW1zQXJyLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29tcGxldGVkSXRlbXNBcnIuZm9yRWFjaCgoaXRlbU9iaikgPT4ge1xuXHRcdFx0XHRcdE1vZGVsLnRvZ2dsZUl0ZW1Db21wbGV0ZWQoaXRlbU9iai5pZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRzaG93SXRlbXMoKTtcblx0XHRcdFx0dXBkYXRlSXRlbXNDb3VudCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qIENhbGwgVmlldyB0byBiaW5kIGV2ZW50IGxpc3RlbmVycyBmb3IgYWRkaW5nIG5ldyBpdGVtIGZlYXR1cmUuXG5cdCAqIE1haW4gbG9naWMgYWRkSXRlbSgpIGZ1bmN0aW9uIGlzIGZlZCBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiAqL1xuXHRmdW5jdGlvbiBlbmFibGVBZGRJdGVtKCkge1xuXHRcdFZpZXcuYmluZEFkZEl0ZW0oYWRkSXRlbSk7XG5cdFx0Vmlldy5iaW5kQWRkSXRlbUxhYmVsKCk7XG5cdH1cblxuXHQvKiBDYWxsIFZpZXcgdG8gYmluZCBldmVudCBsaXN0ZW5lcnMgZm9yIHJvdXRlIHN3aXRjaCBidXR0b25zLlxuXHQgKiBNYWluIGxvZ2ljIGZ1bmN0aW9uIGNoYW5nZVJvdXRlKCkgaXMgZmVkIGFzIGEgY2FsbGJhY2sgZnVuY3Rpb24uICovXG5cdGZ1bmN0aW9uIGVuYWJsZUNoYW5nZVJvdXRlKCkge1xuXHRcdGNvbnN0IGN1cnJlbnRSb3V0ZSA9IE1vZGVsLmdldEN1cnJlbnRSb3V0ZSgpO1xuXHRcdFZpZXcuYmluZENoYW5nZVJvdXRlKGNoYW5nZVJvdXRlLCAoKSA9PlxuXHRcdFx0Vmlldy5tYXJrQ3VycmVudFJvdXRlKGN1cnJlbnRSb3V0ZSlcblx0XHQpO1xuXHR9XG5cblx0LyogQ2FsbCBWaWV3IHRvIGJpbmQgZXZlbnQgbGlzdGVuZXJzIGZvciBjbGVhciBidXR0b25zLlxuXHQgKiBNYWluIGxvZ2ljIGNsZWFyQWxsQ29tcGxldGVkSXRlbSgpIGZ1bmN0aW9uIGlzIGZlZCBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiAqL1xuXHRmdW5jdGlvbiBlbmFibGVDbGVhckNvbXBsZXRlZEl0ZW1zKCkge1xuXHRcdFZpZXcuYmluZENsZWFyQ29tcGxldGVkSXRlbXMoY2xlYXJBbGxDb21wbGV0ZWRJdGVtcyk7XG5cdH1cblxuXHQvKiBDYWxsIFZpZXcgdG8gYmluZCBldmVudCBsaXN0ZW5lcnMgZm9yIHRvZ2dsZUFsbCBidXR0b25zLlxuXHQgKiBNYWluIGxvZ2ljIHRvZ2dsZUFsbCgpIGZ1bmN0aW9uIGlzIGZlZCBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiAqL1xuXHRmdW5jdGlvbiBlbmFibGVUb2dnbGVBbGwoKSB7XG5cdFx0Vmlldy5iaW5kVG9nZ2xlQWxsKHRvZ2dsZUFsbCk7XG5cdH1cblxuXHQvKiBGb3JtYXQgdGhlIGRhdGUuICovXG5cdGNvbnN0IE15RGF0ZSA9ICgoKSA9PiB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHtcblx0XHRcdHdlZWtkYXk6ICdsb25nJyxcblx0XHRcdHllYXI6ICdudW1lcmljJyxcblx0XHRcdG1vbnRoOiAnbG9uZycsXG5cdFx0XHRkYXk6ICdudW1lcmljJyxcblx0XHR9O1xuXG5cdFx0LyogQ3V0IHRoZSBkYXRlIHN0cmluZyBpbnRvIHdlZWtkYXksIGRheSwgbW9udGggYW5kIHllYXIuIFZpZXcgbW9kdWxlIGtub3dzIGhvdyB0byBzaG93IHRoZW0uICovXG5cdFx0ZnVuY3Rpb24gZ2V0VG9kYXkoKSB7XG5cdFx0XHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRjb25zdCB0b2RheVN0ciA9IHRvZGF5LnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKTsgLy8gU2F0dXJkYXksIFNlcHRlbWJlciAxNywgMjAxNlxuXHRcdFx0Y29uc3QgW3dlZWtkYXksIG1vbnRoRGF5LCB5ZWFyXSA9IHRvZGF5U3RyLnNwbGl0KCcsICcpO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxuXHRcdFx0bGV0IFttb250aCwgZGF5XSA9IG1vbnRoRGF5LnNwbGl0KCcgJyk7XG5cdFx0XHRtb250aCA9IG1vbnRoLnNsaWNlKDAsIDMpLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR3ZWVrZGF5LFxuXHRcdFx0XHRkYXksXG5cdFx0XHRcdG1vbnRoLFxuXHRcdFx0XHR5ZWFyLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0VG9kYXksXG5cdFx0fTtcblx0fSkoKTtcblxuXHRmdW5jdGlvbiBzaG93RGF0ZSgpIHtcblx0XHRWaWV3LnNob3dEYXRlKE15RGF0ZS5nZXRUb2RheSgpKTtcblx0fVxuXG5cdC8qIENhbGwgdmlldyB0byBwcmludCBmb290ZXIuICovXG5cdGZ1bmN0aW9uIHNob3dGb290ZXIoKSB7XG5cdFx0Vmlldy5zaG93Rm9vdGVyKCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHNob3dGb290ZXIsXG5cdFx0c2hvd0RhdGUsXG5cdFx0c2hvd0l0ZW1zLFxuXHRcdHVwZGF0ZUl0ZW1zQ291bnQsXG5cdFx0ZW5hYmxlQWRkSXRlbSxcblx0XHRlbmFibGVDaGFuZ2VSb3V0ZSxcblx0XHRlbmFibGVDbGVhckNvbXBsZXRlZEl0ZW1zLFxuXHRcdGVuYWJsZVRvZ2dsZUFsbCxcblx0fTtcbn0pKCk7XG4iLCIvKlxuICogQSBEQU8oRGF0YSBBY2Nlc3MgT2JqZWN0KSBBUEkuXG4gKiBJdCdzIGF3YXJlIG9mIHRoZSBkYXRhIHN0cnVjdHVyZSBvZiBJdGVtIGFuZCBvdGhlciBvYmplY3RzLlxuICogQW5kIGtub3dzIGhvdyB0byBpbnNlcnQsIHVwZGF0ZSwgZGVsZXRlIGFuZCByZWFkIHRoZXNlIGRhdGEuXG4gKi9cblxuaW1wb3J0IFN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRjb25zdCBpdGVtU3RvcmFnZSA9IFN0b3JlKCdpdGVtcycsIFtdKTtcblx0Y29uc3QgY3VycmVudFJvdXRlU3RvcmFnZSA9IFN0b3JlKCdjdXJyZW50Um91dGUnLCAnYWxsJyk7XG5cblx0LyogQSBmYWN0b3J5IGZ1bmN0aW9uIGNyZWF0aW5nIG5ldyBpdGVtIG9iamVjdC4gKi9cblx0Y29uc3QgSXRlbSA9ICh0ZXh0KSA9PiAoe1xuXHRcdGlkOiBEYXRlLm5vdygpLFxuXHRcdHRpdGxlOiB0ZXh0LFxuXHRcdGNvbXBsZXRlZDogZmFsc2UsXG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBRdWVyeSBpcyBhIFtrZXksIHZhbHVlXSBwYWlyLlxuXHQgKiBPbmNlIGEgcXVlcnkgaXMgY3JlYXRlZCwgaXQncyByZWFkLW9ubHkuXG5cdCAqL1xuXHRjb25zdCBRdWVyeSA9IChpbktleSwgaW5WYWx1ZSkgPT4ge1xuXHRcdGNvbnN0IGtleSA9IGluS2V5O1xuXHRcdGNvbnN0IHZhbHVlID0gaW5WYWx1ZTtcblxuXHRcdGZ1bmN0aW9uIGdldEtleSgpIHtcblx0XHRcdHJldHVybiBrZXk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldEtleSxcblx0XHRcdGdldFZhbHVlLFxuXHRcdH07XG5cdH07XG5cblx0LyogUmV0dXJuIGFsbCBpdGVtcyBtZWV0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHF1ZXJ5LlxuXHQgKiBRdWVyaWVzIGlzIGFuIGFycmF5IG9mIFtrZXksIHZhbHVlXSBwYWlyICovXG5cdGZ1bmN0aW9uIGZpbmRJdGVtcyhxdWVyaWVzKSB7XG5cdFx0cmV0dXJuIGl0ZW1TdG9yYWdlLnJlYWQoKS5maWx0ZXIoKGl0ZW1PYmopID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSB0cnVlO1xuXHRcdFx0cXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuXHRcdFx0XHRpZiAoaXRlbU9ialtgJHtxdWVyeS5nZXRLZXkoKX1gXSAhPT0gcXVlcnkuZ2V0VmFsdWUoKSkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSk7XG5cdH1cblxuXHQvKiBDcmVhdGUgYSBuZXcgSXRlbSBvYmplY3QgYW5kIHNhdmUgaXQgaW50byBzdG9yYWdlLiAqL1xuXHRmdW5jdGlvbiBhZGRJdGVtKHRleHQpIHtcblx0XHRjb25zdCBpdGVtc0FyciA9IGl0ZW1TdG9yYWdlLnJlYWQoKTtcblx0XHRpdGVtc0Fyci5wdXNoKEl0ZW0odGV4dCkpO1xuXHRcdGl0ZW1TdG9yYWdlLndyaXRlKGl0ZW1zQXJyKTtcblx0fVxuXG5cdC8qIFJlbW92ZSBhbiBpdGVtIGZyb20gc3RvcmFnZS4gKi9cblx0ZnVuY3Rpb24gZGVsZXRlSXRlbShpdGVtSWQpIHtcblx0XHRjb25zdCBpdGVtc0FyciA9IGl0ZW1TdG9yYWdlLnJlYWQoKTtcblx0XHRjb25zdCBpZCA9IHR5cGVvZiBpdGVtSWQgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQoaXRlbUlkLCAxMCkgOiBpdGVtSWQ7XG5cdFx0Y29uc3QgaWR4ID0gaXRlbXNBcnIuZmluZEluZGV4KChlbGUpID0+IGVsZS5pZCA9PT0gaWQpO1xuXHRcdGlmIChpZHggPT09IC0xKSByZXR1cm47XG5cdFx0aXRlbXNBcnIuc3BsaWNlKGlkeCwgMSk7XG5cdFx0aXRlbVN0b3JhZ2Uud3JpdGUoaXRlbXNBcnIpO1xuXHR9XG5cblx0LyogVXBkYXRlIHByb3BlcnRpZXMgb2YgYW4gaXRlbS4gKi9cblx0ZnVuY3Rpb24gdXBkYXRlSXRlbShpdGVtSWQsIHF1ZXJ5KSB7XG5cdFx0Y29uc3QgaXRlbXNBcnIgPSBpdGVtU3RvcmFnZS5yZWFkKCk7XG5cdFx0Y29uc3QgaWQgPSB0eXBlb2YgaXRlbUlkID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KGl0ZW1JZCwgMTApIDogaXRlbUlkO1xuXHRcdGNvbnN0IGlkeCA9IGl0ZW1zQXJyLmZpbmRJbmRleCgoZWxlKSA9PiBlbGUuaWQgPT09IGlkKTtcblx0XHRpZiAoaWR4ID09PSAtMSkgcmV0dXJuO1xuXHRcdGl0ZW1zQXJyW2lkeF1bcXVlcnkuZ2V0S2V5KCldID0gcXVlcnkuZ2V0VmFsdWUoKTtcblx0XHRpdGVtU3RvcmFnZS53cml0ZShpdGVtc0Fycik7XG5cdH1cblxuXHQvKiBUb2dnbGUgaXRlbSBcImNvbXBsZXRlZFwiIHByb3BlcnR5LiAqL1xuXHRmdW5jdGlvbiB0b2dnbGVJdGVtQ29tcGxldGVkKGl0ZW1JZCkge1xuXHRcdGNvbnN0IGl0ZW1zQXJyID0gaXRlbVN0b3JhZ2UucmVhZCgpO1xuXHRcdGNvbnN0IGlkID0gdHlwZW9mIGl0ZW1JZCA9PT0gJ3N0cmluZycgPyBwYXJzZUludChpdGVtSWQsIDEwKSA6IGl0ZW1JZDtcblx0XHRjb25zdCBpZHggPSBpdGVtc0Fyci5maW5kSW5kZXgoKGVsZSkgPT4gZWxlLmlkID09PSBpZCk7XG5cdFx0aWYgKGlkeCA9PT0gLTEpIHJldHVybjtcblx0XHRjb25zdCB0YXJnZXQgPSBpdGVtc0FycltpZHhdO1xuXHRcdHRhcmdldC5jb21wbGV0ZWQgPSAhdGFyZ2V0LmNvbXBsZXRlZDtcblx0XHRpdGVtU3RvcmFnZS53cml0ZShpdGVtc0Fycik7XG5cdH1cblxuXHQvKiBBIHdyYXBwZXIgZnVuY3Rpb24uIFNldCBjdXJyZW50IHJvdXRlIHRvIGRlZmF1bHQgdmFsdWUsIGlmIG5vIHJvdXRlIGV4aXRzLiAqL1xuXHRmdW5jdGlvbiBnZXRDdXJyZW50Um91dGUoKSB7XG5cdFx0cmV0dXJuIGN1cnJlbnRSb3V0ZVN0b3JhZ2UucmVhZCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0Q3VycmVudFJvdXRlKHJvdXRlKSB7XG5cdFx0Y3VycmVudFJvdXRlU3RvcmFnZS53cml0ZShyb3V0ZSk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdFF1ZXJ5LFxuXHRcdGZpbmRJdGVtcyxcblx0XHRhZGRJdGVtLFxuXHRcdGRlbGV0ZUl0ZW0sXG5cdFx0dXBkYXRlSXRlbSxcblx0XHR0b2dnbGVJdGVtQ29tcGxldGVkLFxuXHRcdGdldEN1cnJlbnRSb3V0ZSxcblx0XHRzZXRDdXJyZW50Um91dGUsXG5cdH07XG59KSgpO1xuIiwiLyogc3RvcmUuanMga25vd3Mgb25seSBob3cgdG8gcmVhZC93cml0ZSBzdHJpbmcgZGF0YSBmcm9tL3RvIERvY3VtZW50LmxvY2FsU3RvcmFnZS5cbiAqIEFsbCBpdGVtcyBhcmUgc3RvcmVkIGFzIGEgbG9uZyBzdHJpbmcgaW4gbG9jYWxTdG9yYWdlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGluTmFtZSwgaW5EZWZhdWx0VmFsdWUpID0+IHtcblx0Y29uc3QgbmFtZSA9IGluTmFtZTtcblx0Y29uc3QgZGVmYXVsdFZhbHVlID0gaW5EZWZhdWx0VmFsdWU7XG5cdGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuXHRsZXQgbGl2ZVN0b3JhZ2U7XG5cblx0ZnVuY3Rpb24gcmVhZCgpIHtcblx0XHRyZXR1cm4gbGl2ZVN0b3JhZ2UgfHwgSlNPTi5wYXJzZShzdG9yYWdlLmdldEl0ZW0obmFtZSkpIHx8IGRlZmF1bHRWYWx1ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIHdyaXRlKGRhdGEpIHtcblx0XHRsaXZlU3RvcmFnZSA9IGRhdGE7XG5cdFx0c3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblx0fVxuXG5cdHJldHVybiB7IHJlYWQsIHdyaXRlIH07XG59O1xuIiwiLypcbiAqIEEgaGVscGVyIG9mIHZpZXcuanMuIE9ubHkgdXNlZCB0byBzdG9yZSBIVE1MIHRlbXBsYXRlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0ZnVuY3Rpb24gcmVuZGVySXRlbShpdGVtT2JqKSB7XG5cdFx0Y29uc3Qgc3RyID0gYDxkaXYgY2xhc3M9XCJpdGVtXCIgZGF0YS1pZD0ke2l0ZW1PYmouaWR9PlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidG9nZ2xlIG1hdGVyaWFsLWljb25zXCIgdHlwZT1cImNoZWNrYm94XCI+IFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dFwiPiR7aXRlbU9iai50aXRsZX08L2xhYmVsPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJkZWxldGUgbWF0ZXJpYWwtaWNvbnNcIj5jbGVhcjwvaT5cbiAgICAgICAgPC9kaXY+YDtcblx0XHRyZXR1cm4gc3RyO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVuZGVyRm9vdGVyKGdpdGh1YkltZywgeWVhcikge1xuXHRcdHJldHVybiBgPGRpdiBjbGFzcz1cInRpcFwiPkRvdWJsZSBjbGljayB0byBlZGl0IHRvZG8uPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb3B5cmlnaHRcIj5Db3B5cmlnaHQgTUlUIMKpIGhpcmVtZS5zaGVuQGdtYWlsLmNvbSAmbmJzcDt8Jm5ic3A7IFNvdXJjZSBjb2RlIC0gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9oZWxsb1NoZW4vdG9kb1wiPjxpbWcgY2xhc3M9XCJnaXRodWJcIiBzcmM9XCIke2dpdGh1YkltZ31cIj48L2E+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ5ZWFyXCI+MjAyMS0ke3llYXJ9PC9kaXY+YDtcblx0fVxuXG5cdHJldHVybiB7IHJlbmRlckl0ZW0sIHJlbmRlckZvb3RlciB9O1xufSkoKTtcbiIsIi8qXG4gKiBBbGwgRE9NIG1hbmlwdWxhdGlvbnMgZ28gdG8gdGhpcyBmaWxlLlxuICovXG5pbXBvcnQgVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSc7XG5pbXBvcnQgR2l0aHViSW1nIGZyb20gJy4uL2Fzc2V0cy9pbWcvZ2l0aHViX2JsYWNrLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdGNvbnN0IHRvZG9FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kbycpO1xuXHRjb25zdCB0aXRsZUVsZSA9IHRvZG9FbGUucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG5cdGNvbnN0IGRhdGVFbGUgPSB0aXRsZUVsZS5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuXHRjb25zdCBkYXlFbGUgPSBkYXRlRWxlLnF1ZXJ5U2VsZWN0b3IoJy5kYXknKTtcblx0Y29uc3QgbW9udGhFbGUgPSBkYXRlRWxlLnF1ZXJ5U2VsZWN0b3IoJy5tb250aCcpO1xuXHRjb25zdCB5ZWFyRWxlID0gZGF0ZUVsZS5xdWVyeVNlbGVjdG9yKCcueWVhcicpO1xuXHRjb25zdCB3ZWVrZGF5RWxlID0gdGl0bGVFbGUucXVlcnlTZWxlY3RvcignLndlZWtkYXknKTtcblx0Y29uc3QgdG9nZ2xlQWxsRWxlID0gdG9kb0VsZS5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlQWxsJyk7XG5cdGNvbnN0IGFkZEl0ZW1Db250YWluZXJFbGUgPSB0b2RvRWxlLnF1ZXJ5U2VsZWN0b3IoJy5hZGRJdGVtQ29udGFpbmVyJyk7XG5cdGNvbnN0IGFkZEl0ZW1FbGUgPSBhZGRJdGVtQ29udGFpbmVyRWxlLnF1ZXJ5U2VsZWN0b3IoJy5hZGRJdGVtJyk7XG5cdGNvbnN0IGFkZEl0ZW1MYWJlbEVsZSA9IGFkZEl0ZW1Db250YWluZXJFbGUucXVlcnlTZWxlY3RvcignLmFkZEl0ZW1MYWJlbCcpO1xuXHRjb25zdCBpdGVtc0JvYXJkRWxlID0gdG9kb0VsZS5xdWVyeVNlbGVjdG9yKCcuaXRlbXNCb2FyZCcpO1xuXHRjb25zdCBpdGVtc0NvbnRhaW5lckVsZSA9IGl0ZW1zQm9hcmRFbGUucXVlcnlTZWxlY3RvcignLml0ZW1zQ29udGFpbmVyJyk7XG5cdGNvbnN0IGl0ZW1zRm9vdGVyRWxlID0gaXRlbXNCb2FyZEVsZS5xdWVyeVNlbGVjdG9yKCcuaXRlbXNGb290ZXInKTtcblx0Y29uc3Qgcm91dGVCdG5zID0gaXRlbXNGb290ZXJFbGUucXVlcnlTZWxlY3RvckFsbCgnLnJvdXRlJyk7XG5cdGNvbnN0IGFjdGl2ZUNvdW50RWxlID0gaXRlbXNGb290ZXJFbGUucXVlcnlTZWxlY3RvcignLmFjdGl2ZUl0ZW1zQ291bnQnKTtcblx0Y29uc3QgYWN0aXZlQ291bnROdW1FbGUgPSBhY3RpdmVDb3VudEVsZS5xdWVyeVNlbGVjdG9yKCcuY291bnQnKTtcblx0Y29uc3QgY29tcGxldGVkQ291bnRFbGUgPSBpdGVtc0Zvb3RlckVsZS5xdWVyeVNlbGVjdG9yKFxuXHRcdCcuY29tcGxldGVkSXRlbXNDb3VudCdcblx0KTtcblx0Y29uc3QgY29tcGxldGVkQ291bnROdW1FbGUgPSBjb21wbGV0ZWRDb3VudEVsZS5xdWVyeVNlbGVjdG9yKCcuY291bnQnKTtcblx0Y29uc3QgZm9vdGVyRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpO1xuXG5cdGZ1bmN0aW9uIHNob3dEYXRlKHRvZGF5KSB7XG5cdFx0ZGF5RWxlLnRleHRDb250ZW50ID0gdG9kYXkuZGF5O1xuXHRcdG1vbnRoRWxlLnRleHRDb250ZW50ID0gdG9kYXkubW9udGg7XG5cdFx0eWVhckVsZS50ZXh0Q29udGVudCA9IHRvZGF5LnllYXI7XG5cdFx0d2Vla2RheUVsZS50ZXh0Q29udGVudCA9IHRvZGF5LndlZWtkYXk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbGVhckFkZEl0ZW1FbGUoKSB7XG5cdFx0YWRkSXRlbUVsZS52YWx1ZSA9ICcnO1xuXHR9XG5cblx0ZnVuY3Rpb24gaGlkZUFkZEl0ZW1MYWJlbCgpIHtcblx0XHRpZiAoYWRkSXRlbUVsZS52YWx1ZSA9PT0gJycpIHtcblx0XHRcdGFkZEl0ZW1MYWJlbEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFkZEl0ZW1MYWJlbEVsZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gbWFya0N1cnJlbnRSb3V0ZShyb3V0ZSkge1xuXHRcdHJvdXRlQnRucy5mb3JFYWNoKChidG4pID0+IHtcblx0XHRcdGlmIChidG4uZGF0YXNldC5yb3V0ZSA9PT0gcm91dGUpIHtcblx0XHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZUl0ZW1zQ291bnQoY291bnQpIHtcblx0XHRhY3RpdmVDb3VudE51bUVsZS50ZXh0Q29udGVudCA9IGNvdW50O1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlQ29tcGxldGVkSXRlbXNDb3VudChjb3VudCkge1xuXHRcdGNvbXBsZXRlZENvdW50TnVtRWxlLnRleHRDb250ZW50ID0gY291bnQ7XG5cdH1cblxuXHRmdW5jdGlvbiBzaG93Q29tcGxldGVkSXRlbXNDb3VudCgpIHtcblx0XHRjb21wbGV0ZWRDb3VudEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBoaWRlQ29tcGxldGVkSXRlbXNDb3VudCgpIHtcblx0XHRjb21wbGV0ZWRDb3VudEVsZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBzaG93SXRlbXNCb2FyZCgpIHtcblx0XHRpdGVtc0JvYXJkRWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXHRcdGFkZEl0ZW1Db250YWluZXJFbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWxvbmUnKTtcblx0XHRhZGRJdGVtRWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2Fsb25lJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBoaWRlSXRlbXNCb2FyZCgpIHtcblx0XHRpdGVtc0JvYXJkRWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdGFkZEl0ZW1Db250YWluZXJFbGUuY2xhc3NMaXN0LmFkZCgnYWxvbmUnKTtcblx0XHRhZGRJdGVtRWxlLmNsYXNzTGlzdC5hZGQoJ2Fsb25lJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBoaWRlVG9nZ2xlQWxsKCkge1xuXHRcdHRvZ2dsZUFsbEVsZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cdH1cblxuXHRmdW5jdGlvbiB0b2dnbGVBbGxDaGVja2VkKCkge1xuXHRcdHRvZ2dsZUFsbEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0dG9nZ2xlQWxsRWxlLmNoZWNrZWQgPSB0cnVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG9nZ2xlQWxsTm90Q2hlY2tlZCgpIHtcblx0XHR0b2dnbGVBbGxFbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXHRcdHRvZ2dsZUFsbEVsZS5jaGVja2VkID0gZmFsc2U7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVFbGVtZW50KHRhcmdldCkge1xuXHRcdHRhcmdldC5yZW1vdmUoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNsZWFySXRlbXMoKSB7XG5cdFx0aXRlbXNDb250YWluZXJFbGUuaW5uZXJIVE1MID0gJyc7XG5cdH1cblxuXHRmdW5jdGlvbiBzaG93SXRlbShpdGVtT2JqLCBjYWxsYmFjaykge1xuXHRcdGl0ZW1zQ29udGFpbmVyRWxlLmluc2VydEFkamFjZW50SFRNTChcblx0XHRcdCdiZWZvcmVlbmQnLFxuXHRcdFx0VGVtcGxhdGUucmVuZGVySXRlbShpdGVtT2JqKVxuXHRcdCk7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gaXRlbXNDb250YWluZXJFbGUucXVlcnlTZWxlY3Rvcihcblx0XHRcdGAuaXRlbVtkYXRhLWlkPVwiJHtpdGVtT2JqLmlkfVwiXWBcblx0XHQpO1xuXHRcdGlmIChpdGVtT2JqLmNvbXBsZXRlZCkge1xuXHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuXHRcdFx0Y29uc3QgY2hlY2tib3ggPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnRvZ2dsZScpO1xuXHRcdFx0Y2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG5cdFx0fVxuXHRcdGNhbGxiYWNrKHRhcmdldCk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kQWRkSXRlbShjYWxsYmFjaykge1xuXHRcdGFkZEl0ZW1FbGUuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdCdjaGFuZ2UnLFxuXHRcdFx0KCkgPT4gY2FsbGJhY2soYWRkSXRlbUVsZS52YWx1ZSksXG5cdFx0XHRmYWxzZVxuXHRcdCk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kQWRkSXRlbUxhYmVsKCkge1xuXHRcdGFkZEl0ZW1FbGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBoaWRlQWRkSXRlbUxhYmVsKCkpO1xuXHRcdGFkZEl0ZW1FbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gaGlkZUFkZEl0ZW1MYWJlbCgpKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRUb2dnbGVDb21wbGV0ZWQodGFyZ2V0LCBjYWxsYmFjaykge1xuXHRcdGNvbnN0IGNoZWNrYm94ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUnKTtcblx0XHRjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHR0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG5cdFx0XHRjYWxsYmFjayh0YXJnZXQuZGF0YXNldC5pZCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kRGVsZXRlSXRlbSh0YXJnZXQsIGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgYnRuID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0YXJnZXQucmVtb3ZlKCk7XG5cdFx0XHRjYWxsYmFjayh0YXJnZXQuZGF0YXNldC5pZCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kRWRpdEl0ZW0odGFyZ2V0LCBjYWxsYmFjaykge1xuXHRcdGNvbnN0IGxhYmVsID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0Jyk7XG5cdFx0bGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRsYWJlbC5jbGFzc0xpc3QuYWRkKCdlZGl0dGluZycpO1xuXHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcblx0XHRcdGxhYmVsLmZvY3VzKCk7XG5cdFx0fSk7XG5cdFx0bGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcblx0XHRcdGxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXR0aW5nJyk7XG5cdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGZhbHNlKTtcblx0XHRcdGNhbGxiYWNrKHRhcmdldC5kYXRhc2V0LmlkLCBsYWJlbC50ZXh0Q29udGVudCwgKCkgPT4ge1xuXHRcdFx0XHRyZW1vdmVFbGVtZW50KHRhcmdldCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChlLmtleSA9PT0gJ0VudGVyJykgbGFiZWwuYmx1cigpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gYmluZENoYW5nZVJvdXRlKGVhY2hCdG5DYWxsYmFjaywgZW5kaW5nQ2FsbGJhY2spIHtcblx0XHRyb3V0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdGVhY2hCdG5DYWxsYmFjayhidG4uZGF0YXNldC5yb3V0ZSk7XG5cdFx0XHRcdHJvdXRlQnRucy5mb3JFYWNoKChlbGUpID0+IHtcblx0XHRcdFx0XHRpZiAoZWxlLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudCcpKSB7XG5cdFx0XHRcdFx0XHRlbGUuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRlbmRpbmdDYWxsYmFjaygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYmluZENsZWFyQ29tcGxldGVkSXRlbXMoY2FsbGJhY2spIHtcblx0XHRjb21wbGV0ZWRDb3VudEVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhbGxiYWNrKCkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYmluZFRvZ2dsZUFsbChjYWxsYmFjaykge1xuXHRcdHRvZ2dsZUFsbEVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhbGxiYWNrKCkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2hvd0Zvb3RlcigpIHtcblx0XHRjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXHRcdGZvb3RlckVsZS5pbnNlcnRBZGphY2VudEhUTUwoXG5cdFx0XHQnYWZ0ZXJiZWdpbicsXG5cdFx0XHRUZW1wbGF0ZS5yZW5kZXJGb290ZXIoR2l0aHViSW1nLCB5ZWFyKVxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHNob3dEYXRlLFxuXHRcdGNsZWFyQWRkSXRlbUVsZSxcblx0XHRiaW5kQWRkSXRlbSxcblx0XHRiaW5kQWRkSXRlbUxhYmVsLFxuXHRcdGJpbmRUb2dnbGVDb21wbGV0ZWQsXG5cdFx0YmluZERlbGV0ZUl0ZW0sXG5cdFx0YmluZEVkaXRJdGVtLFxuXHRcdGJpbmRDaGFuZ2VSb3V0ZSxcblx0XHRtYXJrQ3VycmVudFJvdXRlLFxuXHRcdGJpbmRDbGVhckNvbXBsZXRlZEl0ZW1zLFxuXHRcdGJpbmRUb2dnbGVBbGwsXG5cdFx0dXBkYXRlQWN0aXZlSXRlbXNDb3VudCxcblx0XHR1cGRhdGVDb21wbGV0ZWRJdGVtc0NvdW50LFxuXHRcdHNob3dDb21wbGV0ZWRJdGVtc0NvdW50LFxuXHRcdGhpZGVDb21wbGV0ZWRJdGVtc0NvdW50LFxuXHRcdGhpZGVJdGVtc0JvYXJkLFxuXHRcdHNob3dJdGVtc0JvYXJkLFxuXHRcdGhpZGVUb2dnbGVBbGwsXG5cdFx0dG9nZ2xlQWxsQ2hlY2tlZCxcblx0XHR0b2dnbGVBbGxOb3RDaGVja2VkLFxuXHRcdHJlbW92ZUVsZW1lbnQsXG5cdFx0Y2xlYXJJdGVtcyxcblx0XHRzaG93SXRlbSxcblx0XHRzaG93Rm9vdGVyLFxuXHR9O1xufSkoKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm0uY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucyk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7NDAwOzcwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG5cXHQtLWJsYWNrOiAjMjQyOTJkO1xcblxcdC0tYmxhY2stZGltbWVyOiAjMmIzMTM3O1xcblxcdC0tZ3JheTogIzU4NjA2YTtcXG5cXHQtLWxpZ2h0LWdyYXk6ICM5NDlkYTc7XFxuXFx0LS1saWdodGVyLWdyYXk6ICNiNGJkYzg7XFxuXFx0LS1ib3JkZXItZ3JheTogI2U3ZTllYTtcXG5cXHQtLWJhY2stZ3JheTogI2Y2ZjhmYTtcXG5cXHQtLXdoaXRlOiAjZmZmZmZmO1xcblxcdC0tcmVkOiAjZGIyYzAwO1xcblxcdC0tZ3JlZW46ICMyZGE0NGU7XFxuXFx0LS1ibHVlOiAjMGQ3NGU3O1xcblxcdC0tYmx1ZTI6ICMwOTY5ZGE7XFxuXFx0LS1wdXJwbGU6ICM2ZTU0OTQ7XFxufVxcblxcbmJvZHkge1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi5sb2dvIHtcXG5cXHRoZWlnaHQ6IDZyZW07XFxuXFx0Zm9udC1zaXplOiAyLjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcblxcdGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRhbGlnbi1pdGVtczogZW5kO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMnJlbSAwO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIHtcXG5cXHR3aWR0aDogMzZyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLnRvZG8gPiAudGl0bGUge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogN3JlbTtcXG5cXHRwYWRkaW5nOiAycmVtIDIuNXJlbTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9kbyAuZGF0ZSB7XFxuXFx0d2lkdGg6IDdyZW07XFxuXFx0aGVpZ2h0OiAzcmVtO1xcblxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAzcmVtO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMS41cmVtIDEuNXJlbTtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5kYXkge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRncmlkLXJvdzogMSAvIDM7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4udG9kbyAubW9udGgge1xcblxcdGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuXFx0YWxpZ24tc2VsZjogZW5kO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRncmlkLXJvdzogMSAvIDI7XFxuXFx0Z3JpZC1jb2x1bW46IDIgLyAzO1xcblxcdHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLnRvZG8gLnllYXIge1xcblxcdGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuXFx0YWxpZ24tc2VsZjogc3RhcnQ7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGdyaWQtcm93OiAyIC8gMztcXG5cXHRncmlkLWNvbHVtbjogMiAvIDM7XFxuXFx0cGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udG9kbyAud2Vla2RheSB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLnRvZG8gPiAuYWRkSXRlbUNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA0cmVtO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAxZnI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gPiAuYWRkSXRlbUNvbnRhaW5lci5hbG9uZSB7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi50b2RvIC50b2dnbGVBbGwge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbDo6YWZ0ZXIge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdG1hcmdpbjogMCAwLjc1cmVtO1xcblxcdGNvbnRlbnQ6ICdyYWRpb19idXR0b25fdW5jaGVja2VkJztcXG5cXHRjb2xvcjogdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsOmNoZWNrZWQ6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnY2hlY2tfY2lyY2xlJztcXG5cXHRjb2xvcjogdmFyKC0tZ3JlZW4pO1xcblxcdG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbC5oaWRlIHtcXG5cXHRvcGFjaXR5OiAwO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbUZvcm0ge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHRmb250LXdlaWdodDogMTAwO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtTGFiZWwge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAxcHg7XFxuXFx0dG9wOiAxLjJyZW07XFxuXFx0Y29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtTGFiZWwuaGlkZSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW0ge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRib3JkZXI6IDBweDtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Y29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW0uYWxvbmUge1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi50b2RvID4gLml0ZW1zQm9hcmQge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udG9kbyA+IC5pdGVtc0JvYXJkLmhpZGRlbiB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLml0ZW0ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogLTFweCAwO1xcblxcdGhlaWdodDogNHJlbTtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDFmciAzcmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50b2dnbGU6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAncmFkaW9fYnV0dG9uX3VuY2hlY2tlZCc7XFxuXFx0bWFyZ2luOiAwIDAuNzVyZW07XFxuXFx0Y29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG5cXHRvcGFjaXR5OiAwLjY7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZTpjaGVja2VkOjphZnRlciB7XFxuXFx0Y29udGVudDogJ2NoZWNrX2NpcmNsZSc7XFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudGV4dCB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbS5jb21wbGV0ZWQgPiAudGV4dCB7XFxuXFx0b3BhY2l0eTogMC42O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50ZXh0LmVkaXR0aW5nIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC5kZWxldGUge1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW06aG92ZXIgPiAuZGVsZXRlIHtcXG5cXHRvcGFjaXR5OiAxO1xcblxcdGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogNHJlbTtcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxuXFx0Zm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmFjdGl2ZUl0ZW1zQ291bnQsXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQge1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRtYXJnaW46IDAgMXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuYWN0aXZlSXRlbXNDb3VudCB7XFxuXFx0d2lkdGg6IDQuNXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQge1xcblxcdHdpZHRoOiAxMXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQuaGlkZSB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRjdXJzb3I6IGF1dG87XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5yb3V0ZXMge1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHR3aWR0aDogMTRyZW07XFxuXFx0bWFyZ2luOiAwIDFyZW07XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDRyZW0gNnJlbTtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciAucm91dGUge1xcblxcdHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgLnJvdXRlOmhvdmVyIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciAucm91dGUuY3VycmVudCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi5mb290ZXIge1xcblxcdGhlaWdodDogNC41cmVtO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxuXFx0Y29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxLjVyZW0pO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIC50aXAsXFxuLmZvb3RlciAuY29weXJpZ2h0LFxcbi5mb290ZXIgLnllYXIge1xcblxcdGhlaWdodDogMS41cmVtO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMC4yNXJlbTtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG5cXHR3aWR0aDogMXJlbTtcXG5cXHRoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5mb290ZXIgLmdpdGh1YiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtDQUNDLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQix1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtDQUNwQixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixrQ0FBa0M7Q0FDbEMsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGNBQWM7Q0FDZCxhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHFCQUFxQjtDQUNyQiwwQ0FBMEM7QUFDM0M7O0FBRUE7Q0FDQyxpQ0FBaUM7Q0FDakMsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCLG9DQUFvQztDQUNwQyxnQkFBZ0I7Q0FDaEIsOEJBQThCO0NBQzlCLCtCQUErQjtDQUMvQiw4QkFBOEI7Q0FDOUIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLGdDQUFnQztDQUNoQyxpQ0FBaUM7Q0FDakMsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YsZUFBZTtDQUNmLGVBQWU7Q0FD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ZUFBZTtDQUNmLGFBQWE7Q0FDYixxQ0FBcUM7Q0FDckMsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsV0FBVztBQUNaOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxrQ0FBa0M7Q0FDbEMsb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0MsY0FBYztDQUNkLFdBQVc7Q0FDWCxpQ0FBaUM7Q0FDakMsa0JBQWtCO0NBQ2xCLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2IscUNBQXFDO0NBQ3JDLG1CQUFtQjtDQUNuQixxQkFBcUI7QUFDdEI7O0FBRUE7OztDQUdDLGNBQWM7Q0FDZCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnLi9ub3JtLmNzcycpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDs0MDA7NzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcblxcdC0tYmxhY2s6ICMyNDI5MmQ7XFxuXFx0LS1ibGFjay1kaW1tZXI6ICMyYjMxMzc7XFxuXFx0LS1ncmF5OiAjNTg2MDZhO1xcblxcdC0tbGlnaHQtZ3JheTogIzk0OWRhNztcXG5cXHQtLWxpZ2h0ZXItZ3JheTogI2I0YmRjODtcXG5cXHQtLWJvcmRlci1ncmF5OiAjZTdlOWVhO1xcblxcdC0tYmFjay1ncmF5OiAjZjZmOGZhO1xcblxcdC0td2hpdGU6ICNmZmZmZmY7XFxuXFx0LS1yZWQ6ICNkYjJjMDA7XFxuXFx0LS1ncmVlbjogIzJkYTQ0ZTtcXG5cXHQtLWJsdWU6ICMwZDc0ZTc7XFxuXFx0LS1ibHVlMjogIzA5NjlkYTtcXG5cXHQtLXB1cnBsZTogIzZlNTQ5NDtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG59XFxuXFxuLmxvZ28ge1xcblxcdGhlaWdodDogNnJlbTtcXG5cXHRmb250LXNpemU6IDIuNXJlbTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuXFx0Y29sb3I6IHZhcigtLWJsYWNrKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGFsaWduLWl0ZW1zOiBlbmQ7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAycmVtIDA7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8ge1xcblxcdHdpZHRoOiAzNnJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCA0cHggdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4udG9kbyA+IC50aXRsZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA3cmVtO1xcblxcdHBhZGRpbmc6IDJyZW0gMi41cmVtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG5cXHRib3JkZXItYm90dG9tOiAwO1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b2RvIC5kYXRlIHtcXG5cXHR3aWR0aDogN3JlbTtcXG5cXHRoZWlnaHQ6IDNyZW07XFxuXFx0Y29sb3I6IHZhcigtLWdyYXkpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDNyZW07XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVyZW0gMS41cmVtO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLmRheSB7XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdGdyaWQtcm93OiAxIC8gMztcXG5cXHRncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi50b2RvIC5tb250aCB7XFxuXFx0anVzdGlmeS1zZWxmOiBzdGFydDtcXG5cXHRhbGlnbi1zZWxmOiBlbmQ7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGdyaWQtcm93OiAxIC8gMjtcXG5cXHRncmlkLWNvbHVtbjogMiAvIDM7XFxuXFx0cGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udG9kbyAueWVhciB7XFxuXFx0anVzdGlmeS1zZWxmOiBzdGFydDtcXG5cXHRhbGlnbi1zZWxmOiBzdGFydDtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Z3JpZC1yb3c6IDIgLyAzO1xcblxcdGdyaWQtY29sdW1uOiAyIC8gMztcXG5cXHRwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi50b2RvIC53ZWVrZGF5IHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4udG9kbyA+IC5hZGRJdGVtQ29udGFpbmVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDRyZW07XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDFmcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyA+IC5hZGRJdGVtQ29udGFpbmVyLmFsb25lIHtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbCB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsOjphZnRlciB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0bWFyZ2luOiAwIDAuNzVyZW07XFxuXFx0Y29udGVudDogJ3JhZGlvX2J1dHRvbl91bmNoZWNrZWQnO1xcblxcdGNvbG9yOiB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi50b2RvIC50b2dnbGVBbGw6Y2hlY2tlZDo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICdjaGVja19jaXJjbGUnO1xcblxcdGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuXFx0b3BhY2l0eTogMC42O1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsLmhpZGUge1xcblxcdG9wYWNpdHk6IDA7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtRm9ybSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW1MYWJlbCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDFweDtcXG5cXHR0b3A6IDEuMnJlbTtcXG5cXHRjb2xvcjogdmFyKC0tbGlnaHRlci1ncmF5KTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW1MYWJlbC5oaWRlIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbSB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJvcmRlcjogMHB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbS5hbG9uZSB7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8gPiAuaXRlbXNCb2FyZCB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvID4gLml0ZW1zQm9hcmQuaGlkZGVuIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kbyAuaXRlbSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAtMXB4IDA7XFxuXFx0aGVpZ2h0OiA0cmVtO1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gMWZyIDNyZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudG9nZ2xlIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZTo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICdyYWRpb19idXR0b25fdW5jaGVja2VkJztcXG5cXHRtYXJnaW46IDAgMC43NXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tYm9yZGVyLWdyYXkpO1xcblxcdG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudG9nZ2xlOmNoZWNrZWQ6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnY2hlY2tfY2lyY2xlJztcXG5cXHRjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50ZXh0IHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Y29sb3I6IHZhcigtLWdyYXkpO1xcbiAgb3V0bGluZTogbm9uZTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtLmNvbXBsZXRlZCA+IC50ZXh0IHtcXG5cXHRvcGFjaXR5OiAwLjY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRleHQuZWRpdHRpbmcge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLmRlbGV0ZSB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udG9kbyAuaXRlbTpob3ZlciA+IC5kZWxldGUge1xcblxcdG9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA0cmVtO1xcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXG5cXHRmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuYWN0aXZlSXRlbXNDb3VudCxcXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuY29tcGxldGVkSXRlbXNDb3VudCB7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdG1hcmdpbjogMCAxcmVtO1xcblxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5hY3RpdmVJdGVtc0NvdW50IHtcXG5cXHR3aWR0aDogNC41cmVtO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuY29tcGxldGVkSXRlbXNDb3VudCB7XFxuXFx0d2lkdGg6IDExcmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuY29tcGxldGVkSXRlbXNDb3VudC5oaWRlIHtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdGN1cnNvcjogYXV0bztcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLnJvdXRlcyB7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdHdpZHRoOiAxNHJlbTtcXG5cXHRtYXJnaW46IDAgMXJlbTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gNHJlbSA2cmVtO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZSB7XFxuXFx0cGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xcblxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciAucm91dGU6aG92ZXIge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZS5jdXJyZW50IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWdyYXkpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLmZvb3RlciB7XFxuXFx0aGVpZ2h0OiA0LjVyZW07XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tbGlnaHRlci1ncmF5KTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDEuNXJlbSk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgLnRpcCxcXG4uZm9vdGVyIC5jb3B5cmlnaHQsXFxuLmZvb3RlciAueWVhciB7XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcblxcdHdpZHRoOiAxcmVtO1xcblxcdGhlaWdodDogMXJlbTtcXG59XFxuXFxuLmZvb3RlciAuZ2l0aHViIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25vcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBjc3MgZnJvbSAnLi4vY3NzL2luZGV4LmNzcyc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuXG4oKCkgPT4ge1xuXHRDb250cm9sbGVyLmVuYWJsZUFkZEl0ZW0oKTtcblx0Q29udHJvbGxlci5lbmFibGVDaGFuZ2VSb3V0ZSgpO1xuXHRDb250cm9sbGVyLmVuYWJsZUNsZWFyQ29tcGxldGVkSXRlbXMoKTtcblx0Q29udHJvbGxlci5lbmFibGVUb2dnbGVBbGwoKTtcblx0Q29udHJvbGxlci5zaG93RGF0ZSgpO1xuXHRDb250cm9sbGVyLnNob3dJdGVtcygpO1xuXHRDb250cm9sbGVyLnVwZGF0ZUl0ZW1zQ291bnQoKTtcblx0Q29udHJvbGxlci5zaG93Rm9vdGVyKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbIlZpZXciLCJNb2RlbCIsIkl0ZW1zUXVlcnkiLCJxdWVyeUJhbmsiLCJhbGwiLCJhY3RpdmUiLCJRdWVyeSIsImNvbXBsZXRlZCIsImNyZWF0ZSIsInJvdXRlIiwiZmlsdGVySXRlbXMiLCJxdWVyaWVzIiwiZmluZEl0ZW1zIiwidXBkYXRlSXRlbXNDb3VudCIsImFjdGl2ZUNvdW50IiwibGVuZ3RoIiwiY29tcGxldGVkQ291bnQiLCJ1cGRhdGVBY3RpdmVJdGVtc0NvdW50IiwidXBkYXRlQ29tcGxldGVkSXRlbXNDb3VudCIsImhpZGVDb21wbGV0ZWRJdGVtc0NvdW50Iiwic2hvd0NvbXBsZXRlZEl0ZW1zQ291bnQiLCJoaWRlSXRlbXNCb2FyZCIsImhpZGVUb2dnbGVBbGwiLCJzaG93SXRlbXNCb2FyZCIsInRvZ2dsZUFsbE5vdENoZWNrZWQiLCJ0b2dnbGVBbGxDaGVja2VkIiwic2hvd0l0ZW1zIiwiaXRlbXNBcnIiLCJnZXRDdXJyZW50Um91dGUiLCJjbGVhckl0ZW1zIiwiZm9yRWFjaCIsIml0ZW1PYmoiLCJzaG93SXRlbSIsInRhcmdldCIsImJpbmRUb2dnbGVDb21wbGV0ZWQiLCJ0b2dnbGVDb21wbGV0ZWQiLCJiaW5kRGVsZXRlSXRlbSIsImRlbGV0ZUl0ZW0iLCJiaW5kRWRpdEl0ZW0iLCJlZGl0SXRlbSIsImFkZEl0ZW0iLCJ0ZXh0IiwiY2xlYXJBZGRJdGVtRWxlIiwiaXRlbUlkIiwidG9nZ2xlSXRlbUNvbXBsZXRlZCIsIml0ZW1WYWx1ZSIsImNhbGxiYWNrIiwidXBkYXRlSXRlbSIsImNoYW5nZVJvdXRlIiwic2V0Q3VycmVudFJvdXRlIiwiY2xlYXJBbGxDb21wbGV0ZWRJdGVtcyIsImNvbXBsZXRlZEl0ZW1zQXJyIiwiaWQiLCJ0b2dnbGVBbGwiLCJhY3RpdmVJdGVtc0FyciIsImVuYWJsZUFkZEl0ZW0iLCJiaW5kQWRkSXRlbSIsImJpbmRBZGRJdGVtTGFiZWwiLCJlbmFibGVDaGFuZ2VSb3V0ZSIsImN1cnJlbnRSb3V0ZSIsImJpbmRDaGFuZ2VSb3V0ZSIsIm1hcmtDdXJyZW50Um91dGUiLCJlbmFibGVDbGVhckNvbXBsZXRlZEl0ZW1zIiwiYmluZENsZWFyQ29tcGxldGVkSXRlbXMiLCJlbmFibGVUb2dnbGVBbGwiLCJiaW5kVG9nZ2xlQWxsIiwiTXlEYXRlIiwib3B0aW9ucyIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJnZXRUb2RheSIsInRvZGF5IiwiRGF0ZSIsInRvZGF5U3RyIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic3BsaXQiLCJtb250aERheSIsInNsaWNlIiwidG9VcHBlckNhc2UiLCJzaG93RGF0ZSIsInNob3dGb290ZXIiLCJTdG9yZSIsIml0ZW1TdG9yYWdlIiwiY3VycmVudFJvdXRlU3RvcmFnZSIsIkl0ZW0iLCJub3ciLCJ0aXRsZSIsImluS2V5IiwiaW5WYWx1ZSIsImtleSIsInZhbHVlIiwiZ2V0S2V5IiwiZ2V0VmFsdWUiLCJyZWFkIiwiZmlsdGVyIiwicmVzdWx0IiwicXVlcnkiLCJwdXNoIiwid3JpdGUiLCJwYXJzZUludCIsImlkeCIsImZpbmRJbmRleCIsImVsZSIsInNwbGljZSIsImluTmFtZSIsImluRGVmYXVsdFZhbHVlIiwibmFtZSIsImRlZmF1bHRWYWx1ZSIsInN0b3JhZ2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJsaXZlU3RvcmFnZSIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJkYXRhIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInJlbmRlckl0ZW0iLCJzdHIiLCJyZW5kZXJGb290ZXIiLCJnaXRodWJJbWciLCJUZW1wbGF0ZSIsIkdpdGh1YkltZyIsInRvZG9FbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aXRsZUVsZSIsImRhdGVFbGUiLCJkYXlFbGUiLCJtb250aEVsZSIsInllYXJFbGUiLCJ3ZWVrZGF5RWxlIiwidG9nZ2xlQWxsRWxlIiwiYWRkSXRlbUNvbnRhaW5lckVsZSIsImFkZEl0ZW1FbGUiLCJhZGRJdGVtTGFiZWxFbGUiLCJpdGVtc0JvYXJkRWxlIiwiaXRlbXNDb250YWluZXJFbGUiLCJpdGVtc0Zvb3RlckVsZSIsInJvdXRlQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhY3RpdmVDb3VudEVsZSIsImFjdGl2ZUNvdW50TnVtRWxlIiwiY29tcGxldGVkQ291bnRFbGUiLCJjb21wbGV0ZWRDb3VudE51bUVsZSIsImZvb3RlckVsZSIsInRleHRDb250ZW50IiwiaGlkZUFkZEl0ZW1MYWJlbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImJ0biIsImRhdGFzZXQiLCJjb3VudCIsImNoZWNrZWQiLCJyZW1vdmVFbGVtZW50IiwiaW5uZXJIVE1MIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY2hlY2tib3giLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlIiwibGFiZWwiLCJzZXRBdHRyaWJ1dGUiLCJmb2N1cyIsImUiLCJibHVyIiwiZWFjaEJ0bkNhbGxiYWNrIiwiZW5kaW5nQ2FsbGJhY2siLCJjb250YWlucyIsImdldEZ1bGxZZWFyIiwiY3NzIiwiQ29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=