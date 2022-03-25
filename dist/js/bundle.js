/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black: #24292D;\n    --black-dimmer: #2B3137;\n    --gray: #58606a;\n    --border-gray: #e7e9ea;\n    --back-gray: #f6f8fa;\n    --white: #FFFFFF;\n    --red: #DB2C00;\n    --green: #2DA44E;\n    --blue: #0D74E7;\n    --blue2: #0969DA;\n    --purple: #6e5494;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--back-gray);\n}\n\n.logo {\n    height: 6rem;\n    font-size: 2.5rem;\n    font-weight: 700;\n    font-family: 'Poppins', sans-serif;\n    color: var(--black);\n    display: grid;\n    align-items: end;\n    justify-items: center;\n}\n\n.main {\n    width: 100%;\n    margin: 2rem 0;\n    display: grid;\n    justify-content: center;\n}\n\n.todo {\n    width: 36rem;\n    border-radius: .5rem;\n    box-shadow: 1px 1px 4px var(--border-gray);\n}\n\n.todo > .title {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    width: 100%;\n    height: 7rem;\n    padding: 2rem 3rem;\n    border: 1px solid var(--border-gray);\n    border-bottom: 0;\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.todo .date {\n    width: 7rem;\n    height: 3rem;\n    color: var(--gray);\n    display: grid;\n    grid-template-columns: 3rem 3rem;\n    grid-template-rows: 1.5rem 1.5rem;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.todo .day {\n    font-size: 3rem;\n    grid-row: 1 / 3;\n    grid-column: 1 / 2;\n}\n\n.todo .month {\n    justify-self: start;\n    align-self: end;\n    font-size: 1rem;\n    grid-row: 1 / 2;\n    grid-column: 2 / 3;\n    padding-left: 1rem;\n}\n\n.todo .year {\n    justify-self: start;\n    align-self: start;\n    font-size: 1rem;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    padding-left: 1rem;\n}\n\n\n.todo .weekday {\n    font-size: 1.5rem;\n    font-weight: 100;\n}\n\n.todo > .addItemContainer {\n    width: 100%;\n    height: 4rem;\n    font-size: 1.5rem;\n    border: 1px solid var(--border-gray);\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 3rem 1fr;\n    align-items: center;\n}\n\n.todo > .addItemContainer.alone {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n.todo .toggleAll {\n    appearance: none;\n}\n\n.todo .toggleAll::after {\n    font-size: 2rem;\n    margin: 0 .5rem;\n    content: \"radio_button_unchecked\";\n    color: var(--border-gray);\n}\n\n.todo .toggleAll:checked::after {\n    content: \"check_circle\";\n    color: var(--green);\n    opacity: .6;\n}\n\n.todo .toggleAll.hide {\n    opacity: 0;\n}\n\n.todo .addItemForm {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 100;\n    height: 100%;\n    width: 100%;\n    position: relative;\n}\n\n.todo .addItemLabel {\n    position: absolute;\n    left: 1px;\n    top: 1.2rem;\n    color: var(--border-gray);\n    user-select: none;\n}\n\n.todo .addItemLabel.hide {\n    display: none;\n}\n\n.todo .addItem {\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    border-top-right-radius: .5rem;\n    font-size: 1.5rem;\n    outline: none;\n    color: var(--black);\n}\n\n.todo .addItem.alone {\n    border-bottom-right-radius: .5rem;\n}\n\n.todo > .itemsBoard {\n    display: block;\n}\n\n.todo > .itemsBoard.hidden {\n    display: none;\n}\n\n.todo .item {\n    width: 100%;\n    margin: -1px 0;\n    height: 4rem;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5rem;\n    border: 1px solid var(--border-gray); \n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 3rem 1fr 3rem;\n    align-items: center;\n}\n\n.todo .item > .toggle {\n    appearance: none;\n}\n\n.todo .item > .toggle::after {\n    content: \"radio_button_unchecked\";\n    margin: 0 .75rem;\n    color: var(--border-gray);\n    opacity: .6;\n}\n\n.todo .item > .toggle:checked::after {\n    content: \"check_circle\";\n    color: var(--green);\n}\n\n.todo .item > .text {\n    height: 100%;\n    color: var(--gray);\n    display: grid;\n    align-items: center;\n}\n\n.todo .item.completed > .text {\n    opacity: .6;\n    text-decoration: line-through;\n}\n\n.todo .item > .text.editting {\n    outline-color: var(--border-gray);\n    background-color: var(--back-gray);\n}\n\n.todo .item > .delete {\n    opacity: 0;\n    justify-self: center;\n    cursor: pointer;\n    user-select: none;\n    margin-right: 1rem;\n}\n\n.todo .item:hover > .delete {\n    opacity: 1;\n    color: var(--red);\n}\n\n.todo .itemsFooter {\n    width: 100%;\n    height: 4rem;\n    font-size: .75rem;\n    font-family: 'Poppins', sans-serif;\n    border: 1px solid var(--border-gray);\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter > .activeItemsCount,\n.todo .itemsFooter > .completedItemsCount {\n    height: 2rem;\n    margin: 0 1rem;\n    color: var(--gray);\n    user-select: none;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n}\n\n.todo .itemsFooter > .activeItemsCount {\n    width: 4.5rem;\n}\n\n.todo .itemsFooter > .completedItemsCount {\n    width: 11rem;\n    border-radius: .25rem;\n    cursor: pointer;\n    border: 1px solid var(--border-gray);\n    background-color: var(--back-gray);\n}\n\n.todo .itemsFooter > .completedItemsCount.hide {\n    opacity: 0;\n    cursor: auto;\n}\n\n.todo .itemsFooter > .routes {\n    height: 2rem;\n    width: 14rem;\n    margin: 0 1rem;\n    user-select: none;\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 3rem 4rem 6rem;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n    gap: .5rem;\n}\n\n.todo .itemsFooter .route {\n    padding: .25rem .75rem;\n    color: var(--gray);\n    border-radius: .25rem;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter .route:hover {\n    border: 1px solid var(--border-gray);\n}\n\n.todo .itemsFooter .route.current {\n    background-color: var(--back-gray);\n    border: 1px solid var(--border-gray);\n}\n\n.footer {\n    height: 4.5rem;\n    width: 100%;\n    font-size: .75rem;\n    color: var(--gray);\n    display: grid;\n    grid-template-rows: repeat(3, 1.5rem);\n    align-items: center;\n    justify-items: center;\n}\n\n.footer .tip,\n.footer .copyright,\n.footer .year {\n    height: 1.5rem;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    gap: .25rem;\n}\n\n.footer a {\n    width: 1rem;\n    height: 1rem;\n}\n\n.footer .github {\n    width: 100%;\n    height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('./norm.css');\n@import url('https://fonts.googleapis.com/icon?family=Material+Icons');\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&family=Roboto:wght@100;400;500;700&display=swap');\n\n:root {\n    --black: #24292D;\n    --black-dimmer: #2B3137;\n    --gray: #58606a;\n    --border-gray: #e7e9ea;\n    --back-gray: #f6f8fa;\n    --white: #FFFFFF;\n    --red: #DB2C00;\n    --green: #2DA44E;\n    --blue: #0D74E7;\n    --blue2: #0969DA;\n    --purple: #6e5494;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--back-gray);\n}\n\n.logo {\n    height: 6rem;\n    font-size: 2.5rem;\n    font-weight: 700;\n    font-family: 'Poppins', sans-serif;\n    color: var(--black);\n    display: grid;\n    align-items: end;\n    justify-items: center;\n}\n\n.main {\n    width: 100%;\n    margin: 2rem 0;\n    display: grid;\n    justify-content: center;\n}\n\n.todo {\n    width: 36rem;\n    border-radius: .5rem;\n    box-shadow: 1px 1px 4px var(--border-gray);\n}\n\n.todo > .title {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    width: 100%;\n    height: 7rem;\n    padding: 2rem 3rem;\n    border: 1px solid var(--border-gray);\n    border-bottom: 0;\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.todo .date {\n    width: 7rem;\n    height: 3rem;\n    color: var(--gray);\n    display: grid;\n    grid-template-columns: 3rem 3rem;\n    grid-template-rows: 1.5rem 1.5rem;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.todo .day {\n    font-size: 3rem;\n    grid-row: 1 / 3;\n    grid-column: 1 / 2;\n}\n\n.todo .month {\n    justify-self: start;\n    align-self: end;\n    font-size: 1rem;\n    grid-row: 1 / 2;\n    grid-column: 2 / 3;\n    padding-left: 1rem;\n}\n\n.todo .year {\n    justify-self: start;\n    align-self: start;\n    font-size: 1rem;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    padding-left: 1rem;\n}\n\n\n.todo .weekday {\n    font-size: 1.5rem;\n    font-weight: 100;\n}\n\n.todo > .addItemContainer {\n    width: 100%;\n    height: 4rem;\n    font-size: 1.5rem;\n    border: 1px solid var(--border-gray);\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 3rem 1fr;\n    align-items: center;\n}\n\n.todo > .addItemContainer.alone {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n.todo .toggleAll {\n    appearance: none;\n}\n\n.todo .toggleAll::after {\n    font-size: 2rem;\n    margin: 0 .5rem;\n    content: \"radio_button_unchecked\";\n    color: var(--border-gray);\n}\n\n.todo .toggleAll:checked::after {\n    content: \"check_circle\";\n    color: var(--green);\n    opacity: .6;\n}\n\n.todo .toggleAll.hide {\n    opacity: 0;\n}\n\n.todo .addItemForm {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 100;\n    height: 100%;\n    width: 100%;\n    position: relative;\n}\n\n.todo .addItemLabel {\n    position: absolute;\n    left: 1px;\n    top: 1.2rem;\n    color: var(--border-gray);\n    user-select: none;\n}\n\n.todo .addItemLabel.hide {\n    display: none;\n}\n\n.todo .addItem {\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    border-top-right-radius: .5rem;\n    font-size: 1.5rem;\n    outline: none;\n    color: var(--black);\n}\n\n.todo .addItem.alone {\n    border-bottom-right-radius: .5rem;\n}\n\n.todo > .itemsBoard {\n    display: block;\n}\n\n.todo > .itemsBoard.hidden {\n    display: none;\n}\n\n.todo .item {\n    width: 100%;\n    margin: -1px 0;\n    height: 4rem;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5rem;\n    border: 1px solid var(--border-gray); \n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 3rem 1fr 3rem;\n    align-items: center;\n}\n\n.todo .item > .toggle {\n    appearance: none;\n}\n\n.todo .item > .toggle::after {\n    content: \"radio_button_unchecked\";\n    margin: 0 .75rem;\n    color: var(--border-gray);\n    opacity: .6;\n}\n\n.todo .item > .toggle:checked::after {\n    content: \"check_circle\";\n    color: var(--green);\n}\n\n.todo .item > .text {\n    height: 100%;\n    color: var(--gray);\n    display: grid;\n    align-items: center;\n}\n\n.todo .item.completed > .text {\n    opacity: .6;\n    text-decoration: line-through;\n}\n\n.todo .item > .text.editting {\n    outline-color: var(--border-gray);\n    background-color: var(--back-gray);\n}\n\n.todo .item > .delete {\n    opacity: 0;\n    justify-self: center;\n    cursor: pointer;\n    user-select: none;\n    margin-right: 1rem;\n}\n\n.todo .item:hover > .delete {\n    opacity: 1;\n    color: var(--red);\n}\n\n.todo .itemsFooter {\n    width: 100%;\n    height: 4rem;\n    font-size: .75rem;\n    font-family: 'Poppins', sans-serif;\n    border: 1px solid var(--border-gray);\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter > .activeItemsCount,\n.todo .itemsFooter > .completedItemsCount {\n    height: 2rem;\n    margin: 0 1rem;\n    color: var(--gray);\n    user-select: none;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n}\n\n.todo .itemsFooter > .activeItemsCount {\n    width: 4.5rem;\n}\n\n.todo .itemsFooter > .completedItemsCount {\n    width: 11rem;\n    border-radius: .25rem;\n    cursor: pointer;\n    border: 1px solid var(--border-gray);\n    background-color: var(--back-gray);\n}\n\n.todo .itemsFooter > .completedItemsCount.hide {\n    opacity: 0;\n    cursor: auto;\n}\n\n.todo .itemsFooter > .routes {\n    height: 2rem;\n    width: 14rem;\n    margin: 0 1rem;\n    user-select: none;\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 3rem 4rem 6rem;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n    gap: .5rem;\n}\n\n.todo .itemsFooter .route {\n    padding: .25rem .75rem;\n    color: var(--gray);\n    border-radius: .25rem;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter .route:hover {\n    border: 1px solid var(--border-gray);\n}\n\n.todo .itemsFooter .route.current {\n    background-color: var(--back-gray);\n    border: 1px solid var(--border-gray);\n}\n\n.footer {\n    height: 4.5rem;\n    width: 100%;\n    font-size: .75rem;\n    color: var(--gray);\n    display: grid;\n    grid-template-rows: repeat(3, 1.5rem);\n    align-items: center;\n    justify-items: center;\n}\n\n.footer .tip,\n.footer .copyright,\n.footer .year {\n    height: 1.5rem;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    gap: .25rem;\n}\n\n.footer a {\n    width: 1rem;\n    height: 1rem;\n}\n\n.footer .github {\n    width: 100%;\n    height: 100%;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ "./src/js/view.js");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.js */ "./src/js/model.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {

    const MyDate = (() => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
        function getToday() {
            const today  = new Date();
            const todayStr = today.toLocaleDateString("en-US", options) // Saturday, September 17, 2016
            return todayStr.split(', ');
        }
        
        return { getToday };
    })();

    function showDate() {
        let [weekday, monthDay, year] = MyDate.getToday();
        let [month, day] = monthDay.split(' ');
        month = month.slice(0, 3).toUpperCase();
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].showDate(weekday, day, month, year); 
    }

    function showFooter() {
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].showFooter();
    }

    const ItemsQueries = (() => {
        const queries = {
            'all': [],
            'active': [_model_js__WEBPACK_IMPORTED_MODULE_1__["default"].Query('completed', false)],
            'completed': [_model_js__WEBPACK_IMPORTED_MODULE_1__["default"].Query('completed', true)]
        };
        function get(route) {
            return queries[`${route}`];
        }

        return { get };
    })();

    function filterItems(route) {
        return _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].findItems(ItemsQueries.get(route));
    }

    function showItems() {
        const itemsObjArr = filterItems(_model_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentRoute());
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearItems();
        itemsObjArr.forEach((itemObj) => {
            _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].showItem(itemObj, (target) => {
                _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].bindToggleCompleted(target, toggleCompleted);
                _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].bindDeleteItem(target, deleteItem);
                _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].bindEditItem(target, editItem);
            });
        });
    }

    function updateItemsCount() {
        const activeCount = filterItems('active').length;
        const completedCount = filterItems('completed').length;
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateActiveItemsCount(activeCount);
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateCompletedItemsCount(completedCount);
        if (completedCount === 0) {
            _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].hideCompletedItemsCount();
        } else {
            _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].showCompletedItemsCount();
        }
        if (activeCount + completedCount === 0) {
            _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].hideItemsBoard();
            _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].hideToggleAll();
        } else {
            _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].showItemsBoard();
            if (activeCount > 0) {
                _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].toggleAllNotChecked();
            } else {
                _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].toggleAllChecked();
            }
        }
    }

    function enableAddItem() {
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].bindAddItem(addItem);
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].bindAddItemLabel();
    }

    function enableChangeRoute() {
        const currentRoute = _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentRoute();
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].bindChangeRoute(changeRoute, () => _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].markCurrentRoute(currentRoute));
    }

    function enableClearCompletedItems() {
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].bindClearCompletedItems(clearAllCompletedItems);
    }

    function enableToggleAll() {
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].bindToggleAll(toggleAll);
    }

    function addItem(text) {
        _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItem(text);
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearAddItemEle();
        showItems();
        updateItemsCount();
    }

    function toggleCompleted(itemId) {
        _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].toggleCompleted(itemId);
        showItems(); // must refresh current route.
        updateItemsCount();
    }

    function deleteItem(itemId) {
        _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteItem(itemId);
        updateItemsCount();
    }

    function editItem(itemId, itemValue, callback) {
        if (!itemValue) {
            _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteItem(itemId);
            updateItemsCount();
            callback(); // callback view if need to remove that item from view.
        } else {
            _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateItem(itemId, itemValue);
        }
    }

    function changeRoute(route) {
        _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentRoute(route);
        showItems();
    }

    function clearAllCompletedItems() {
        const completedItemsArr = _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].findItems(ItemsQueries.get('completed'));
        completedItemsArr.forEach((itemObj) => {
            const id = _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].Item.getId.call(itemObj);
            _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteItem(id);
        });
        showItems();
        updateItemsCount();
    }

    function toggleAll() {
        if (_model_js__WEBPACK_IMPORTED_MODULE_1__["default"].hasItem()) {
            const activeItemsArr = _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].findItems(ItemsQueries.get('active'));
            if (activeItemsArr.length > 0) { 
                _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].toggleAll(activeItemsArr);
            } else {
                _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].toggleAll(_model_js__WEBPACK_IMPORTED_MODULE_1__["default"].findItems(ItemsQueries.get('completed')));
            }
            showItems();
            updateItemsCount();
        }
    }

    return { showFooter, showDate, showItems, updateItemsCount, enableAddItem, enableChangeRoute, enableClearCompletedItems, enableToggleAll };

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
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./src/js/store.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {

    const Item = (() => {

        function create(text) {
            return {
                id: Date.now(),
                title: text,
                completed: false
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

        function toggleCompleted() {
            this.completed = !this.completed;
        }

        return { create, getId, getTitle, setTitle, hasCompleted, toggleCompleted  };

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

    function getCurrentRoute() {
        const route = _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentRoute();
        if (!route) {
            _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].setCurrentRoute('all');
            return _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentRoute();
        }
        return route;
    }

    function setCurrentRoute(route) {
        _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].setCurrentRoute(route);
    }

    function hasItem() {
        return _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasItem();
    }

    /* return an array of all exiting items */
    function findAllItems() {
        if (!hasItem()) return [];
        const itemsObj = _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].getItemsObject();
        const arr = [];
        for (const [key, value] of Object.entries(itemsObj)) {
            arr.push(itemsObj[`${key}`]);
        }
        return arr;
    }

    /* return a sub-array which meet the requirements of the query 
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

    function addItem(text) {
        _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
            const itemObj = Item.create(text);
            itemsObj[`${Item.getId.call(itemObj)}`] = itemObj;
        });
    }

    function deleteItem(itemId) {
        if (!hasItem()) return;
        _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
            delete itemsObj[`${itemId}`];
        });
    }

    function updateItem(itemId, itemValue) {
        if (!hasItem()) return;
        _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
            const itemObj = itemsObj[`${itemId}`];
            Item.setTitle.call(itemObj, itemValue);
        });
    }

    function toggleCompleted(itemId) {
        if (!hasItem()) return;
        _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
            const itemObj = itemsObj[`${itemId}`];
            Item.toggleCompleted.call(itemObj);
        });
    }

    function toggleAll(itemsArr) {
        _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
            itemsArr.forEach((itemObj) => {
                Item.toggleCompleted.call(itemsObj[`${Item.getId.call(itemObj)}`]);
            });
        });
    }

    return { Item, Query, getCurrentRoute, setCurrentRoute, hasItem, findItems, addItem, toggleCompleted, deleteItem, updateItem, toggleAll };

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {

    const itemsKey = 'todoItems';
    const routeKey = 'todoCurrentRoute';

    function hasItem() {
        const itemsStr = window.localStorage.getItem(itemsKey);
        if (itemsStr === '{}') return false;
        return true;
    }

    function getItemsObject() {
        const data = window.localStorage.getItem(itemsKey);
        if (data) return JSON.parse(data);
        return {};
    }

    function setItemsObject(itemsObj) {
        window.localStorage.setItem(itemsKey, JSON.stringify(itemsObj));
    }

    function updateItems(callback) {
        const itemsObj = getItemsObject();
        callback(itemsObj);
        setItemsObject(itemsObj);
    }

    function getCurrentRoute(route) {
        return window.localStorage.getItem(`${routeKey}`);
    }

    function setCurrentRoute(route) {
        window.localStorage.setItem(`${routeKey}`, route);
    }

    return { hasItem, getItemsObject, setItemsObject, updateItems, getCurrentRoute, setCurrentRoute };

})());

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {

    function renderItem(itemObj) {
        const str = 
        `<div class="item" data-id=${itemObj.id}>
            <input class="toggle material-icons" type="checkbox"> 
            <label class="text">${itemObj.title}</label>
            <i class="delete material-icons">clear</i>
        </div>`;
        return str;
    }

    function renderFooter(githubImg, year) {
        return `<div class="tip">Double click to edit todo.</div>
        <div class="copyright">Copyright MIT © hireme.shen@gmail.com &nbsp;|&nbsp; Source code - <a href="https://github.com/helloShen/todo"><img class="github" src="${githubImg}"></a></div>
        <div class="year">2021-${year}</div>`;
    }

    return { renderItem, renderFooter };

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
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./src/js/template.js");
/* harmony import */ var _assets_img_github_black_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/github_black.png */ "./src/assets/img/github_black.png");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {

    const todoEle = document.querySelector('.todo');
    const titleEle = todoEle.querySelector('.title');
    const dateEle = titleEle.querySelector('.date');
    const dayEle = dateEle.querySelector('.day');
    const monthEle = dateEle.querySelector('.month');
    const yearEle = dateEle.querySelector('.year');
    const weekdayEle = titleEle.querySelector('.weekday');
    const toggleAllEle = todoEle.querySelector('.toggleAll');
    const addItemContainerEle = todoEle.querySelector('.addItemContainer');
    const addItemEle = addItemContainerEle.querySelector('.addItem');
    const addItemLabelEle = addItemContainerEle.querySelector('.addItemLabel');
    const itemsBoardEle = todoEle.querySelector('.itemsBoard');
    const itemsContainerEle = itemsBoardEle.querySelector('.itemsContainer');
    const itemsFooterEle = itemsBoardEle.querySelector('.itemsFooter');
    const routeBtns = itemsFooterEle.querySelectorAll('.route');
    const activeCountEle = itemsFooterEle.querySelector('.activeItemsCount');
    const activeCountNumEle = activeCountEle.querySelector('.count');
    const completedCountEle = itemsFooterEle.querySelector('.completedItemsCount');
    const completedCountNumEle = completedCountEle.querySelector('.count');
    const footerEle = document.querySelector('.footer');

    function showDate(weekday, day, month, year) {
        dayEle.textContent = day;
        monthEle.textContent = month;
        yearEle.textContent = year;
        weekdayEle.textContent = weekday;
    }

    function clearAddItemEle() {
        addItemEle.value = '';
    }

    function bindAddItem(callback) {
        addItemEle.addEventListener('change', () => callback(addItemEle.value), false);
    }

    function bindAddItemLabel() {
        addItemEle.addEventListener('input', () => hideAddItemLabel());
        addItemEle.addEventListener('change', () => hideAddItemLabel());
    }

    function hideAddItemLabel() {
        if (addItemEle.value === '') {
            addItemLabelEle.classList.remove('hide');
        } else {
            addItemLabelEle.classList.add('hide');
        }
    }
    

    function bindToggleCompleted(target, callback) {
        const checkbox = target.querySelector('.toggle');
        checkbox.addEventListener('change', () => {
            target.classList.toggle('completed');
            callback(target.dataset.id);
        });
    }

    function bindDeleteItem(target, callback) {
        const btn = target.querySelector('.delete');
        btn.addEventListener('click', () => {
            target.remove();
            callback(target.dataset.id);
        });
    }

    function bindEditItem(target, callback) {
        const label = target.querySelector('.text');
        label.addEventListener('dblclick', () => {
            label.classList.add('editting');
            label.setAttribute('contenteditable', true);
            label.focus();
        });
        label.addEventListener('blur', () => {
            label.classList.remove('editting');
            label.setAttribute('contenteditable', false);
            callback(target.dataset.id, label.textContent, () => {
                removeElement(target);
            });
        });
        label.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') label.blur();
        });
    }

    function bindChangeRoute(eachBtnCallback, endingCallback) {
        routeBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                eachBtnCallback(btn.dataset.route);
                routeBtns.forEach((ele) => {
                    if (ele.classList.contains('current')) {
                        ele.classList.remove('current');
                    }
                });
                btn.classList.add('current');
            });
        });
        endingCallback();
    }

    function markCurrentRoute(route) {
        routeBtns.forEach((btn) => {
            if (btn.dataset.route === route) {
                btn.classList.add('current');
            }
        });
    }

    function bindClearCompletedItems(callback) {
        completedCountEle.addEventListener('click', () => callback());
    }

    function bindToggleAll(callback) {
        toggleAllEle.addEventListener('click', () => callback());
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
        itemsContainerEle.insertAdjacentHTML('beforeend', _template_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderItem(itemObj));
        const target = itemsContainerEle.querySelector(`.item[data-id="${itemObj.id}"]`);
        if (itemObj.completed) {
            target.classList.add('completed');
            const checkbox = target.querySelector('.toggle');
            checkbox.checked = true;
        }
        callback(target);
    }

    function showFooter() {
        const year = new Date().getFullYear();
        footerEle.insertAdjacentHTML('afterbegin', _template_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderFooter(_assets_img_github_black_png__WEBPACK_IMPORTED_MODULE_1__, year));
    }
    

    return { showDate, clearAddItemEle, bindAddItem, bindAddItemLabel, bindToggleCompleted, bindDeleteItem, bindEditItem, bindChangeRoute, markCurrentRoute, bindClearCompletedItems, bindToggleAll, updateActiveItemsCount, updateCompletedItemsCount, showCompletedItemsCount, hideCompletedItemsCount, hideItemsBoard, showItemsBoard, hideToggleAll, toggleAllChecked, toggleAllNotChecked, removeElement, clearItems, showItem, showFooter };

})());

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
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ "./src/js/controller.js");



(() => {
    _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].enableAddItem();
    _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].enableChangeRoute();
    _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].enableClearCompletedItems();
    _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].enableToggleAll();
    _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].showDate();
    _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].showItems();
    _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateItemsCount();
    _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].showFooter();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZ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RUFBMEI7QUFDOUIsSUFBSSwrREFBbUI7QUFDdkIsSUFBSSxnRUFBb0I7QUFDeEIsSUFBSSx1RUFBMkI7QUFDL0IsSUFBSSxpRUFBcUI7QUFDekIsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3NzL25vcm0uY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL21vZGVsLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDs0MDA7NzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJsYWNrOiAjMjQyOTJEO1xcbiAgICAtLWJsYWNrLWRpbW1lcjogIzJCMzEzNztcXG4gICAgLS1ncmF5OiAjNTg2MDZhO1xcbiAgICAtLWJvcmRlci1ncmF5OiAjZTdlOWVhO1xcbiAgICAtLWJhY2stZ3JheTogI2Y2ZjhmYTtcXG4gICAgLS13aGl0ZTogI0ZGRkZGRjtcXG4gICAgLS1yZWQ6ICNEQjJDMDA7XFxuICAgIC0tZ3JlZW46ICMyREE0NEU7XFxuICAgIC0tYmx1ZTogIzBENzRFNztcXG4gICAgLS1ibHVlMjogIzA5NjlEQTtcXG4gICAgLS1wdXJwbGU6ICM2ZTU0OTQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMnJlbSAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICB3aWR0aDogMzZyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi50b2RvID4gLnRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA3cmVtO1xcbiAgICBwYWRkaW5nOiAycmVtIDNyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b2RvIC5kYXRlIHtcXG4gICAgd2lkdGg6IDdyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gM3JlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVyZW0gMS41cmVtO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLmRheSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi50b2RvIC5tb250aCB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udG9kbyAueWVhciB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcblxcbi50b2RvIC53ZWVrZGF5IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi50b2RvID4gLmFkZEl0ZW1Db250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvID4gLmFkZEl0ZW1Db250YWluZXIuYWxvbmUge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbDo6YWZ0ZXIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbjogMCAuNXJlbTtcXG4gICAgY29udGVudDogXFxcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcXFwiO1xcbiAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsOmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcImNoZWNrX2NpcmNsZVxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIG9wYWNpdHk6IC42O1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsLmhpZGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbUZvcm0ge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW1MYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMXB4O1xcbiAgICB0b3A6IDEuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtTGFiZWwuaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtLmFsb25lIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4udG9kbyA+IC5pdGVtc0JvYXJkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvID4gLml0ZW1zQm9hcmQuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLml0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAtMXB4IDA7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gMWZyIDNyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwicmFkaW9fYnV0dG9uX3VuY2hlY2tlZFxcXCI7XFxuICAgIG1hcmdpbjogMCAuNzVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIG9wYWNpdHk6IC42O1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50b2dnbGU6Y2hlY2tlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiY2hlY2tfY2lyY2xlXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudGV4dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbS5jb21wbGV0ZWQgPiAudGV4dCB7XFxuICAgIG9wYWNpdHk6IC42O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudGV4dC5lZGl0dGluZyB7XFxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAuZGVsZXRlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW06aG92ZXIgPiAuZGVsZXRlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC41cmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuYWN0aXZlSXRlbXNDb3VudCxcXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuY29tcGxldGVkSXRlbXNDb3VudCB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5hY3RpdmVJdGVtc0NvdW50IHtcXG4gICAgd2lkdGg6IDQuNXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQge1xcbiAgICB3aWR0aDogMTFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5jb21wbGV0ZWRJdGVtc0NvdW50LmhpZGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBjdXJzb3I6IGF1dG87XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5yb3V0ZXMge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxNHJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSA0cmVtIDZyZW07XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgLnJvdXRlIHtcXG4gICAgcGFkZGluZzogLjI1cmVtIC43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZS5jdXJyZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiA0LjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IC43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxLjVyZW0pO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgLnRpcCxcXG4uZm9vdGVyIC5jb3B5cmlnaHQsXFxuLmZvb3RlciAueWVhciB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC4yNXJlbTtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLmZvb3RlciAuZ2l0aHViIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxt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QVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnLi9ub3JtLmNzcycpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDs0MDA7NzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLWJsYWNrOiAjMjQyOTJEO1xcbiAgICAtLWJsYWNrLWRpbW1lcjogIzJCMzEzNztcXG4gICAgLS1ncmF5OiAjNTg2MDZhO1xcbiAgICAtLWJvcmRlci1ncmF5OiAjZTdlOWVhO1xcbiAgICAtLWJhY2stZ3JheTogI2Y2ZjhmYTtcXG4gICAgLS13aGl0ZTogI0ZGRkZGRjtcXG4gICAgLS1yZWQ6ICNEQjJDMDA7XFxuICAgIC0tZ3JlZW46ICMyREE0NEU7XFxuICAgIC0tYmx1ZTogIzBENzRFNztcXG4gICAgLS1ibHVlMjogIzA5NjlEQTtcXG4gICAgLS1wdXJwbGU6ICM2ZTU0OTQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMnJlbSAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICB3aWR0aDogMzZyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi50b2RvID4gLnRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA3cmVtO1xcbiAgICBwYWRkaW5nOiAycmVtIDNyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b2RvIC5kYXRlIHtcXG4gICAgd2lkdGg6IDdyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gM3JlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVyZW0gMS41cmVtO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLmRheSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi50b2RvIC5tb250aCB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udG9kbyAueWVhciB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcblxcbi50b2RvIC53ZWVrZGF5IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi50b2RvID4gLmFkZEl0ZW1Db250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvID4gLmFkZEl0ZW1Db250YWluZXIuYWxvbmUge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbDo6YWZ0ZXIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbjogMCAuNXJlbTtcXG4gICAgY29udGVudDogXFxcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcXFwiO1xcbiAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsOmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcImNoZWNrX2NpcmNsZVxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIG9wYWNpdHk6IC42O1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsLmhpZGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbUZvcm0ge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW1MYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMXB4O1xcbiAgICB0b3A6IDEuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtTGFiZWwuaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtLmFsb25lIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4udG9kbyA+IC5pdGVtc0JvYXJkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvID4gLml0ZW1zQm9hcmQuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLml0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAtMXB4IDA7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gMWZyIDNyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwicmFkaW9fYnV0dG9uX3VuY2hlY2tlZFxcXCI7XFxuICAgIG1hcmdpbjogMCAuNzVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIG9wYWNpdHk6IC42O1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50b2dnbGU6Y2hlY2tlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiY2hlY2tfY2lyY2xlXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudGV4dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbS5jb21wbGV0ZWQgPiAudGV4dCB7XFxuICAgIG9wYWNpdHk6IC42O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudGV4dC5lZGl0dGluZyB7XFxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAuZGVsZXRlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW06aG92ZXIgPiAuZGVsZXRlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC41cmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuYWN0aXZlSXRlbXNDb3VudCxcXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuY29tcGxldGVkSXRlbXNDb3VudCB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5hY3RpdmVJdGVtc0NvdW50IHtcXG4gICAgd2lkdGg6IDQuNXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQge1xcbiAgICB3aWR0aDogMTFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5jb21wbGV0ZWRJdGVtc0NvdW50LmhpZGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBjdXJzb3I6IGF1dG87XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5yb3V0ZXMge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxNHJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSA0cmVtIDZyZW07XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgLnJvdXRlIHtcXG4gICAgcGFkZGluZzogLjI1cmVtIC43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZS5jdXJyZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiA0LjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IC43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxLjVyZW0pO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgLnRpcCxcXG4uZm9vdGVyIC5jb3B5cmlnaHQsXFxuLmZvb3RlciAueWVhciB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC4yNXJlbTtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLmZvb3RlciAuZ2l0aHViIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvbm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldy5qcyc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9tb2RlbC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cbiAgICBjb25zdCBNeURhdGUgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0geyB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfTtcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldFRvZGF5KCkge1xuICAgICAgICAgICAgY29uc3QgdG9kYXkgID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5U3RyID0gdG9kYXkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucykgLy8gU2F0dXJkYXksIFNlcHRlbWJlciAxNywgMjAxNlxuICAgICAgICAgICAgcmV0dXJuIHRvZGF5U3RyLnNwbGl0KCcsICcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4geyBnZXRUb2RheSB9O1xuICAgIH0pKCk7XG5cbiAgICBmdW5jdGlvbiBzaG93RGF0ZSgpIHtcbiAgICAgICAgbGV0IFt3ZWVrZGF5LCBtb250aERheSwgeWVhcl0gPSBNeURhdGUuZ2V0VG9kYXkoKTtcbiAgICAgICAgbGV0IFttb250aCwgZGF5XSA9IG1vbnRoRGF5LnNwbGl0KCcgJyk7XG4gICAgICAgIG1vbnRoID0gbW9udGguc2xpY2UoMCwgMykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgVmlldy5zaG93RGF0ZSh3ZWVrZGF5LCBkYXksIG1vbnRoLCB5ZWFyKTsgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0Zvb3RlcigpIHtcbiAgICAgICAgVmlldy5zaG93Rm9vdGVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgSXRlbXNRdWVyaWVzID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcXVlcmllcyA9IHtcbiAgICAgICAgICAgICdhbGwnOiBbXSxcbiAgICAgICAgICAgICdhY3RpdmUnOiBbTW9kZWwuUXVlcnkoJ2NvbXBsZXRlZCcsIGZhbHNlKV0sXG4gICAgICAgICAgICAnY29tcGxldGVkJzogW01vZGVsLlF1ZXJ5KCdjb21wbGV0ZWQnLCB0cnVlKV1cbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gZ2V0KHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gcXVlcmllc1tgJHtyb3V0ZX1gXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGdldCB9O1xuICAgIH0pKCk7XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJJdGVtcyhyb3V0ZSkge1xuICAgICAgICByZXR1cm4gTW9kZWwuZmluZEl0ZW1zKEl0ZW1zUXVlcmllcy5nZXQocm91dGUpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93SXRlbXMoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zT2JqQXJyID0gZmlsdGVySXRlbXMoTW9kZWwuZ2V0Q3VycmVudFJvdXRlKCkpO1xuICAgICAgICBWaWV3LmNsZWFySXRlbXMoKTtcbiAgICAgICAgaXRlbXNPYmpBcnIuZm9yRWFjaCgoaXRlbU9iaikgPT4ge1xuICAgICAgICAgICAgVmlldy5zaG93SXRlbShpdGVtT2JqLCAodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgVmlldy5iaW5kVG9nZ2xlQ29tcGxldGVkKHRhcmdldCwgdG9nZ2xlQ29tcGxldGVkKTtcbiAgICAgICAgICAgICAgICBWaWV3LmJpbmREZWxldGVJdGVtKHRhcmdldCwgZGVsZXRlSXRlbSk7XG4gICAgICAgICAgICAgICAgVmlldy5iaW5kRWRpdEl0ZW0odGFyZ2V0LCBlZGl0SXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlSXRlbXNDb3VudCgpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlQ291bnQgPSBmaWx0ZXJJdGVtcygnYWN0aXZlJykubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb21wbGV0ZWRDb3VudCA9IGZpbHRlckl0ZW1zKCdjb21wbGV0ZWQnKS5sZW5ndGg7XG4gICAgICAgIFZpZXcudXBkYXRlQWN0aXZlSXRlbXNDb3VudChhY3RpdmVDb3VudCk7XG4gICAgICAgIFZpZXcudXBkYXRlQ29tcGxldGVkSXRlbXNDb3VudChjb21wbGV0ZWRDb3VudCk7XG4gICAgICAgIGlmIChjb21wbGV0ZWRDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgVmlldy5oaWRlQ29tcGxldGVkSXRlbXNDb3VudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVmlldy5zaG93Q29tcGxldGVkSXRlbXNDb3VudCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3RpdmVDb3VudCArIGNvbXBsZXRlZENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICBWaWV3LmhpZGVJdGVtc0JvYXJkKCk7XG4gICAgICAgICAgICBWaWV3LmhpZGVUb2dnbGVBbGwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFZpZXcuc2hvd0l0ZW1zQm9hcmQoKTtcbiAgICAgICAgICAgIGlmIChhY3RpdmVDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBWaWV3LnRvZ2dsZUFsbE5vdENoZWNrZWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVmlldy50b2dnbGVBbGxDaGVja2VkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmFibGVBZGRJdGVtKCkge1xuICAgICAgICBWaWV3LmJpbmRBZGRJdGVtKGFkZEl0ZW0pO1xuICAgICAgICBWaWV3LmJpbmRBZGRJdGVtTGFiZWwoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmFibGVDaGFuZ2VSb3V0ZSgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFJvdXRlID0gTW9kZWwuZ2V0Q3VycmVudFJvdXRlKCk7XG4gICAgICAgIFZpZXcuYmluZENoYW5nZVJvdXRlKGNoYW5nZVJvdXRlLCAoKSA9PiBWaWV3Lm1hcmtDdXJyZW50Um91dGUoY3VycmVudFJvdXRlKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5hYmxlQ2xlYXJDb21wbGV0ZWRJdGVtcygpIHtcbiAgICAgICAgVmlldy5iaW5kQ2xlYXJDb21wbGV0ZWRJdGVtcyhjbGVhckFsbENvbXBsZXRlZEl0ZW1zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmFibGVUb2dnbGVBbGwoKSB7XG4gICAgICAgIFZpZXcuYmluZFRvZ2dsZUFsbCh0b2dnbGVBbGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEl0ZW0odGV4dCkge1xuICAgICAgICBNb2RlbC5hZGRJdGVtKHRleHQpO1xuICAgICAgICBWaWV3LmNsZWFyQWRkSXRlbUVsZSgpO1xuICAgICAgICBzaG93SXRlbXMoKTtcbiAgICAgICAgdXBkYXRlSXRlbXNDb3VudCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlZChpdGVtSWQpIHtcbiAgICAgICAgTW9kZWwudG9nZ2xlQ29tcGxldGVkKGl0ZW1JZCk7XG4gICAgICAgIHNob3dJdGVtcygpOyAvLyBtdXN0IHJlZnJlc2ggY3VycmVudCByb3V0ZS5cbiAgICAgICAgdXBkYXRlSXRlbXNDb3VudCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oaXRlbUlkKSB7XG4gICAgICAgIE1vZGVsLmRlbGV0ZUl0ZW0oaXRlbUlkKTtcbiAgICAgICAgdXBkYXRlSXRlbXNDb3VudCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVkaXRJdGVtKGl0ZW1JZCwgaXRlbVZhbHVlLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIWl0ZW1WYWx1ZSkge1xuICAgICAgICAgICAgTW9kZWwuZGVsZXRlSXRlbShpdGVtSWQpO1xuICAgICAgICAgICAgdXBkYXRlSXRlbXNDb3VudCgpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTsgLy8gY2FsbGJhY2sgdmlldyBpZiBuZWVkIHRvIHJlbW92ZSB0aGF0IGl0ZW0gZnJvbSB2aWV3LlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTW9kZWwudXBkYXRlSXRlbShpdGVtSWQsIGl0ZW1WYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VSb3V0ZShyb3V0ZSkge1xuICAgICAgICBNb2RlbC5zZXRDdXJyZW50Um91dGUocm91dGUpO1xuICAgICAgICBzaG93SXRlbXMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckFsbENvbXBsZXRlZEl0ZW1zKCkge1xuICAgICAgICBjb25zdCBjb21wbGV0ZWRJdGVtc0FyciA9IE1vZGVsLmZpbmRJdGVtcyhJdGVtc1F1ZXJpZXMuZ2V0KCdjb21wbGV0ZWQnKSk7XG4gICAgICAgIGNvbXBsZXRlZEl0ZW1zQXJyLmZvckVhY2goKGl0ZW1PYmopID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gTW9kZWwuSXRlbS5nZXRJZC5jYWxsKGl0ZW1PYmopO1xuICAgICAgICAgICAgTW9kZWwuZGVsZXRlSXRlbShpZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzaG93SXRlbXMoKTtcbiAgICAgICAgdXBkYXRlSXRlbXNDb3VudCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUFsbCgpIHtcbiAgICAgICAgaWYgKE1vZGVsLmhhc0l0ZW0oKSkge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlSXRlbXNBcnIgPSBNb2RlbC5maW5kSXRlbXMoSXRlbXNRdWVyaWVzLmdldCgnYWN0aXZlJykpO1xuICAgICAgICAgICAgaWYgKGFjdGl2ZUl0ZW1zQXJyLmxlbmd0aCA+IDApIHsgXG4gICAgICAgICAgICAgICAgTW9kZWwudG9nZ2xlQWxsKGFjdGl2ZUl0ZW1zQXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTW9kZWwudG9nZ2xlQWxsKE1vZGVsLmZpbmRJdGVtcyhJdGVtc1F1ZXJpZXMuZ2V0KCdjb21wbGV0ZWQnKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hvd0l0ZW1zKCk7XG4gICAgICAgICAgICB1cGRhdGVJdGVtc0NvdW50KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBzaG93Rm9vdGVyLCBzaG93RGF0ZSwgc2hvd0l0ZW1zLCB1cGRhdGVJdGVtc0NvdW50LCBlbmFibGVBZGRJdGVtLCBlbmFibGVDaGFuZ2VSb3V0ZSwgZW5hYmxlQ2xlYXJDb21wbGV0ZWRJdGVtcywgZW5hYmxlVG9nZ2xlQWxsIH07XG5cbn0pKCk7XG4iLCJpbXBvcnQgU3RvcmUgZnJvbSAnLi9zdG9yZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cbiAgICBjb25zdCBJdGVtID0gKCgpID0+IHtcblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGUodGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgICB0aXRsZTogdGV4dCxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYXNDb21wbGV0ZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gISF0aGlzLmNvbXBsZXRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlLCBnZXRJZCwgZ2V0VGl0bGUsIHNldFRpdGxlLCBoYXNDb21wbGV0ZWQsIHRvZ2dsZUNvbXBsZXRlZCAgfTtcblxuICAgIH0pKCk7XG5cbiAgICAvKiBRdWVyeSBpcyBhIFtrZXksIHZhbHVlXSBwYWlyLlxuICAgICAqIE9uY2UgYSBxdWVyeSBpcyBjcmVhdGVkLCBpdCdzIHJlYWQtb25seS4gKi9cbiAgICBmdW5jdGlvbiBRdWVyeShpbktleSwgaW5WYWx1ZSkge1xuICAgICAgICBjb25zdCBrZXkgPSBpbktleTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpblZhbHVlO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldEtleSgpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGdldEtleSwgZ2V0VmFsdWUgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50Um91dGUoKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlID0gU3RvcmUuZ2V0Q3VycmVudFJvdXRlKCk7XG4gICAgICAgIGlmICghcm91dGUpIHtcbiAgICAgICAgICAgIFN0b3JlLnNldEN1cnJlbnRSb3V0ZSgnYWxsJyk7XG4gICAgICAgICAgICByZXR1cm4gU3RvcmUuZ2V0Q3VycmVudFJvdXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRSb3V0ZShyb3V0ZSkge1xuICAgICAgICBTdG9yZS5zZXRDdXJyZW50Um91dGUocm91dGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc0l0ZW0oKSB7XG4gICAgICAgIHJldHVybiBTdG9yZS5oYXNJdGVtKCk7XG4gICAgfVxuXG4gICAgLyogcmV0dXJuIGFuIGFycmF5IG9mIGFsbCBleGl0aW5nIGl0ZW1zICovXG4gICAgZnVuY3Rpb24gZmluZEFsbEl0ZW1zKCkge1xuICAgICAgICBpZiAoIWhhc0l0ZW0oKSkgcmV0dXJuIFtdO1xuICAgICAgICBjb25zdCBpdGVtc09iaiA9IFN0b3JlLmdldEl0ZW1zT2JqZWN0KCk7XG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhpdGVtc09iaikpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKGl0ZW1zT2JqW2Ake2tleX1gXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICAvKiByZXR1cm4gYSBzdWItYXJyYXkgd2hpY2ggbWVldCB0aGUgcmVxdWlyZW1lbnRzIG9mIHRoZSBxdWVyeSBcbiAgICAgKiBxdWVyaWVzIGlzIGFuIGFycmF5IG9mIFtrZXksIHZhbHVlXSBwYWlyICovXG4gICAgZnVuY3Rpb24gZmluZEl0ZW1zKHF1ZXJpZXMpIHtcbiAgICAgICAgY29uc3QgYWxsSXRlbXNBcnIgPSBmaW5kQWxsSXRlbXMoKTtcbiAgICAgICAgcmV0dXJuIGFsbEl0ZW1zQXJyLmZpbHRlcigoaXRlbU9iaikgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICBxdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1PYmpbYCR7cXVlcnkuZ2V0S2V5KCl9YF0gIT09IHF1ZXJ5LmdldFZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRJdGVtKHRleHQpIHtcbiAgICAgICAgU3RvcmUudXBkYXRlSXRlbXMoKGl0ZW1zT2JqKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtT2JqID0gSXRlbS5jcmVhdGUodGV4dCk7XG4gICAgICAgICAgICBpdGVtc09ialtgJHtJdGVtLmdldElkLmNhbGwoaXRlbU9iail9YF0gPSBpdGVtT2JqO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVJdGVtKGl0ZW1JZCkge1xuICAgICAgICBpZiAoIWhhc0l0ZW0oKSkgcmV0dXJuO1xuICAgICAgICBTdG9yZS51cGRhdGVJdGVtcygoaXRlbXNPYmopID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBpdGVtc09ialtgJHtpdGVtSWR9YF07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUl0ZW0oaXRlbUlkLCBpdGVtVmFsdWUpIHtcbiAgICAgICAgaWYgKCFoYXNJdGVtKCkpIHJldHVybjtcbiAgICAgICAgU3RvcmUudXBkYXRlSXRlbXMoKGl0ZW1zT2JqKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtT2JqID0gaXRlbXNPYmpbYCR7aXRlbUlkfWBdO1xuICAgICAgICAgICAgSXRlbS5zZXRUaXRsZS5jYWxsKGl0ZW1PYmosIGl0ZW1WYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlZChpdGVtSWQpIHtcbiAgICAgICAgaWYgKCFoYXNJdGVtKCkpIHJldHVybjtcbiAgICAgICAgU3RvcmUudXBkYXRlSXRlbXMoKGl0ZW1zT2JqKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtT2JqID0gaXRlbXNPYmpbYCR7aXRlbUlkfWBdO1xuICAgICAgICAgICAgSXRlbS50b2dnbGVDb21wbGV0ZWQuY2FsbChpdGVtT2JqKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlQWxsKGl0ZW1zQXJyKSB7XG4gICAgICAgIFN0b3JlLnVwZGF0ZUl0ZW1zKChpdGVtc09iaikgPT4ge1xuICAgICAgICAgICAgaXRlbXNBcnIuZm9yRWFjaCgoaXRlbU9iaikgPT4ge1xuICAgICAgICAgICAgICAgIEl0ZW0udG9nZ2xlQ29tcGxldGVkLmNhbGwoaXRlbXNPYmpbYCR7SXRlbS5nZXRJZC5jYWxsKGl0ZW1PYmopfWBdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBJdGVtLCBRdWVyeSwgZ2V0Q3VycmVudFJvdXRlLCBzZXRDdXJyZW50Um91dGUsIGhhc0l0ZW0sIGZpbmRJdGVtcywgYWRkSXRlbSwgdG9nZ2xlQ29tcGxldGVkLCBkZWxldGVJdGVtLCB1cGRhdGVJdGVtLCB0b2dnbGVBbGwgfTtcblxufSkoKTsiLCJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXG4gICAgY29uc3QgaXRlbXNLZXkgPSAndG9kb0l0ZW1zJztcbiAgICBjb25zdCByb3V0ZUtleSA9ICd0b2RvQ3VycmVudFJvdXRlJztcblxuICAgIGZ1bmN0aW9uIGhhc0l0ZW0oKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zU3RyID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW1zS2V5KTtcbiAgICAgICAgaWYgKGl0ZW1zU3RyID09PSAne30nKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEl0ZW1zT2JqZWN0KCkge1xuICAgICAgICBjb25zdCBkYXRhID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW1zS2V5KTtcbiAgICAgICAgaWYgKGRhdGEpIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0SXRlbXNPYmplY3QoaXRlbXNPYmopIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGl0ZW1zS2V5LCBKU09OLnN0cmluZ2lmeShpdGVtc09iaikpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUl0ZW1zKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zT2JqID0gZ2V0SXRlbXNPYmplY3QoKTtcbiAgICAgICAgY2FsbGJhY2soaXRlbXNPYmopO1xuICAgICAgICBzZXRJdGVtc09iamVjdChpdGVtc09iaik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFJvdXRlKHJvdXRlKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7cm91dGVLZXl9YCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudFJvdXRlKHJvdXRlKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtyb3V0ZUtleX1gLCByb3V0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaGFzSXRlbSwgZ2V0SXRlbXNPYmplY3QsIHNldEl0ZW1zT2JqZWN0LCB1cGRhdGVJdGVtcywgZ2V0Q3VycmVudFJvdXRlLCBzZXRDdXJyZW50Um91dGUgfTtcblxufSkoKTsiLCJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXG4gICAgZnVuY3Rpb24gcmVuZGVySXRlbShpdGVtT2JqKSB7XG4gICAgICAgIGNvbnN0IHN0ciA9IFxuICAgICAgICBgPGRpdiBjbGFzcz1cIml0ZW1cIiBkYXRhLWlkPSR7aXRlbU9iai5pZH0+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0b2dnbGUgbWF0ZXJpYWwtaWNvbnNcIiB0eXBlPVwiY2hlY2tib3hcIj4gXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0XCI+JHtpdGVtT2JqLnRpdGxlfTwvbGFiZWw+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImRlbGV0ZSBtYXRlcmlhbC1pY29uc1wiPmNsZWFyPC9pPlxuICAgICAgICA8L2Rpdj5gO1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckZvb3RlcihnaXRodWJJbWcsIHllYXIpIHtcbiAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidGlwXCI+RG91YmxlIGNsaWNrIHRvIGVkaXQgdG9kby48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvcHlyaWdodFwiPkNvcHlyaWdodCBNSVQgwqkgaGlyZW1lLnNoZW5AZ21haWwuY29tICZuYnNwO3wmbmJzcDsgU291cmNlIGNvZGUgLSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2hlbGxvU2hlbi90b2RvXCI+PGltZyBjbGFzcz1cImdpdGh1YlwiIHNyYz1cIiR7Z2l0aHViSW1nfVwiPjwvYT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInllYXJcIj4yMDIxLSR7eWVhcn08L2Rpdj5gO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlbmRlckl0ZW0sIHJlbmRlckZvb3RlciB9O1xuXG59KSgpO1xuXG4gICAgIiwiaW1wb3J0IFRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUuanMnO1xuaW1wb3J0IEdpdGh1YkltZyBmcm9tICcuLi9hc3NldHMvaW1nL2dpdGh1Yl9ibGFjay5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXG4gICAgY29uc3QgdG9kb0VsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvJyk7XG4gICAgY29uc3QgdGl0bGVFbGUgPSB0b2RvRWxlLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuICAgIGNvbnN0IGRhdGVFbGUgPSB0aXRsZUVsZS5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuICAgIGNvbnN0IGRheUVsZSA9IGRhdGVFbGUucXVlcnlTZWxlY3RvcignLmRheScpO1xuICAgIGNvbnN0IG1vbnRoRWxlID0gZGF0ZUVsZS5xdWVyeVNlbGVjdG9yKCcubW9udGgnKTtcbiAgICBjb25zdCB5ZWFyRWxlID0gZGF0ZUVsZS5xdWVyeVNlbGVjdG9yKCcueWVhcicpO1xuICAgIGNvbnN0IHdlZWtkYXlFbGUgPSB0aXRsZUVsZS5xdWVyeVNlbGVjdG9yKCcud2Vla2RheScpO1xuICAgIGNvbnN0IHRvZ2dsZUFsbEVsZSA9IHRvZG9FbGUucXVlcnlTZWxlY3RvcignLnRvZ2dsZUFsbCcpO1xuICAgIGNvbnN0IGFkZEl0ZW1Db250YWluZXJFbGUgPSB0b2RvRWxlLnF1ZXJ5U2VsZWN0b3IoJy5hZGRJdGVtQ29udGFpbmVyJyk7XG4gICAgY29uc3QgYWRkSXRlbUVsZSA9IGFkZEl0ZW1Db250YWluZXJFbGUucXVlcnlTZWxlY3RvcignLmFkZEl0ZW0nKTtcbiAgICBjb25zdCBhZGRJdGVtTGFiZWxFbGUgPSBhZGRJdGVtQ29udGFpbmVyRWxlLnF1ZXJ5U2VsZWN0b3IoJy5hZGRJdGVtTGFiZWwnKTtcbiAgICBjb25zdCBpdGVtc0JvYXJkRWxlID0gdG9kb0VsZS5xdWVyeVNlbGVjdG9yKCcuaXRlbXNCb2FyZCcpO1xuICAgIGNvbnN0IGl0ZW1zQ29udGFpbmVyRWxlID0gaXRlbXNCb2FyZEVsZS5xdWVyeVNlbGVjdG9yKCcuaXRlbXNDb250YWluZXInKTtcbiAgICBjb25zdCBpdGVtc0Zvb3RlckVsZSA9IGl0ZW1zQm9hcmRFbGUucXVlcnlTZWxlY3RvcignLml0ZW1zRm9vdGVyJyk7XG4gICAgY29uc3Qgcm91dGVCdG5zID0gaXRlbXNGb290ZXJFbGUucXVlcnlTZWxlY3RvckFsbCgnLnJvdXRlJyk7XG4gICAgY29uc3QgYWN0aXZlQ291bnRFbGUgPSBpdGVtc0Zvb3RlckVsZS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlSXRlbXNDb3VudCcpO1xuICAgIGNvbnN0IGFjdGl2ZUNvdW50TnVtRWxlID0gYWN0aXZlQ291bnRFbGUucXVlcnlTZWxlY3RvcignLmNvdW50Jyk7XG4gICAgY29uc3QgY29tcGxldGVkQ291bnRFbGUgPSBpdGVtc0Zvb3RlckVsZS5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkSXRlbXNDb3VudCcpO1xuICAgIGNvbnN0IGNvbXBsZXRlZENvdW50TnVtRWxlID0gY29tcGxldGVkQ291bnRFbGUucXVlcnlTZWxlY3RvcignLmNvdW50Jyk7XG4gICAgY29uc3QgZm9vdGVyRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpO1xuXG4gICAgZnVuY3Rpb24gc2hvd0RhdGUod2Vla2RheSwgZGF5LCBtb250aCwgeWVhcikge1xuICAgICAgICBkYXlFbGUudGV4dENvbnRlbnQgPSBkYXk7XG4gICAgICAgIG1vbnRoRWxlLnRleHRDb250ZW50ID0gbW9udGg7XG4gICAgICAgIHllYXJFbGUudGV4dENvbnRlbnQgPSB5ZWFyO1xuICAgICAgICB3ZWVrZGF5RWxlLnRleHRDb250ZW50ID0gd2Vla2RheTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckFkZEl0ZW1FbGUoKSB7XG4gICAgICAgIGFkZEl0ZW1FbGUudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kQWRkSXRlbShjYWxsYmFjaykge1xuICAgICAgICBhZGRJdGVtRWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGNhbGxiYWNrKGFkZEl0ZW1FbGUudmFsdWUpLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZEFkZEl0ZW1MYWJlbCgpIHtcbiAgICAgICAgYWRkSXRlbUVsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IGhpZGVBZGRJdGVtTGFiZWwoKSk7XG4gICAgICAgIGFkZEl0ZW1FbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gaGlkZUFkZEl0ZW1MYWJlbCgpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlQWRkSXRlbUxhYmVsKCkge1xuICAgICAgICBpZiAoYWRkSXRlbUVsZS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGFkZEl0ZW1MYWJlbEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRJdGVtTGFiZWxFbGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgZnVuY3Rpb24gYmluZFRvZ2dsZUNvbXBsZXRlZCh0YXJnZXQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUnKTtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgICAgY2FsbGJhY2sodGFyZ2V0LmRhdGFzZXQuaWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kRGVsZXRlSXRlbSh0YXJnZXQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyk7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKHRhcmdldC5kYXRhc2V0LmlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZEVkaXRJdGVtKHRhcmdldCwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnRleHQnKTtcbiAgICAgICAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdlZGl0dGluZycpO1xuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgICAgICAgIGxhYmVsLmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdHRpbmcnKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgZmFsc2UpO1xuICAgICAgICAgICAgY2FsbGJhY2sodGFyZ2V0LmRhdGFzZXQuaWQsIGxhYmVsLnRleHRDb250ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudCh0YXJnZXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykgbGFiZWwuYmx1cigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kQ2hhbmdlUm91dGUoZWFjaEJ0bkNhbGxiYWNrLCBlbmRpbmdDYWxsYmFjaykge1xuICAgICAgICByb3V0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZWFjaEJ0bkNhbGxiYWNrKGJ0bi5kYXRhc2V0LnJvdXRlKTtcbiAgICAgICAgICAgICAgICByb3V0ZUJ0bnMuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbmRpbmdDYWxsYmFjaygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcmtDdXJyZW50Um91dGUocm91dGUpIHtcbiAgICAgICAgcm91dGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICAgICAgaWYgKGJ0bi5kYXRhc2V0LnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpbmRDbGVhckNvbXBsZXRlZEl0ZW1zKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbXBsZXRlZENvdW50RWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FsbGJhY2soKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZFRvZ2dsZUFsbChjYWxsYmFjaykge1xuICAgICAgICB0b2dnbGVBbGxFbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYWxsYmFjaygpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVBY3RpdmVJdGVtc0NvdW50KGNvdW50KSB7XG4gICAgICAgIGFjdGl2ZUNvdW50TnVtRWxlLnRleHRDb250ZW50ID0gY291bnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29tcGxldGVkSXRlbXNDb3VudChjb3VudCkge1xuICAgICAgICBjb21wbGV0ZWRDb3VudE51bUVsZS50ZXh0Q29udGVudCA9IGNvdW50O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dDb21wbGV0ZWRJdGVtc0NvdW50KCkge1xuICAgICAgICBjb21wbGV0ZWRDb3VudEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUNvbXBsZXRlZEl0ZW1zQ291bnQoKSB7XG4gICAgICAgIGNvbXBsZXRlZENvdW50RWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93SXRlbXNCb2FyZCgpIHtcbiAgICAgICAgaXRlbXNCb2FyZEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgYWRkSXRlbUNvbnRhaW5lckVsZS5jbGFzc0xpc3QucmVtb3ZlKCdhbG9uZScpO1xuICAgICAgICBhZGRJdGVtRWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2Fsb25lJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUl0ZW1zQm9hcmQoKSB7XG4gICAgICAgIGl0ZW1zQm9hcmRFbGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGFkZEl0ZW1Db250YWluZXJFbGUuY2xhc3NMaXN0LmFkZCgnYWxvbmUnKTtcbiAgICAgICAgYWRkSXRlbUVsZS5jbGFzc0xpc3QuYWRkKCdhbG9uZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVUb2dnbGVBbGwoKSB7XG4gICAgICAgIHRvZ2dsZUFsbEVsZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7IFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUFsbENoZWNrZWQoKSB7XG4gICAgICAgIHRvZ2dsZUFsbEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIHRvZ2dsZUFsbEVsZS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVBbGxOb3RDaGVja2VkKCkge1xuICAgICAgICB0b2dnbGVBbGxFbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB0b2dnbGVBbGxFbGUuY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckl0ZW1zKCkge1xuICAgICAgICBpdGVtc0NvbnRhaW5lckVsZS5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93SXRlbShpdGVtT2JqLCBjYWxsYmFjaykge1xuICAgICAgICBpdGVtc0NvbnRhaW5lckVsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIFRlbXBsYXRlLnJlbmRlckl0ZW0oaXRlbU9iaikpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBpdGVtc0NvbnRhaW5lckVsZS5xdWVyeVNlbGVjdG9yKGAuaXRlbVtkYXRhLWlkPVwiJHtpdGVtT2JqLmlkfVwiXWApO1xuICAgICAgICBpZiAoaXRlbU9iai5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUnKTtcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKHRhcmdldCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0Zvb3RlcigpIHtcbiAgICAgICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgZm9vdGVyRWxlLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIFRlbXBsYXRlLnJlbmRlckZvb3RlcihHaXRodWJJbWcsIHllYXIpKTtcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4geyBzaG93RGF0ZSwgY2xlYXJBZGRJdGVtRWxlLCBiaW5kQWRkSXRlbSwgYmluZEFkZEl0ZW1MYWJlbCwgYmluZFRvZ2dsZUNvbXBsZXRlZCwgYmluZERlbGV0ZUl0ZW0sIGJpbmRFZGl0SXRlbSwgYmluZENoYW5nZVJvdXRlLCBtYXJrQ3VycmVudFJvdXRlLCBiaW5kQ2xlYXJDb21wbGV0ZWRJdGVtcywgYmluZFRvZ2dsZUFsbCwgdXBkYXRlQWN0aXZlSXRlbXNDb3VudCwgdXBkYXRlQ29tcGxldGVkSXRlbXNDb3VudCwgc2hvd0NvbXBsZXRlZEl0ZW1zQ291bnQsIGhpZGVDb21wbGV0ZWRJdGVtc0NvdW50LCBoaWRlSXRlbXNCb2FyZCwgc2hvd0l0ZW1zQm9hcmQsIGhpZGVUb2dnbGVBbGwsIHRvZ2dsZUFsbENoZWNrZWQsIHRvZ2dsZUFsbE5vdENoZWNrZWQsIHJlbW92ZUVsZW1lbnQsIGNsZWFySXRlbXMsIHNob3dJdGVtLCBzaG93Rm9vdGVyIH07XG5cbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vXCI7IiwiaW1wb3J0IGNzcyBmcm9tICcuLi9jc3MvaW5kZXguY3NzJztcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5cbigoKSA9PiB7XG4gICAgQ29udHJvbGxlci5lbmFibGVBZGRJdGVtKCk7XG4gICAgQ29udHJvbGxlci5lbmFibGVDaGFuZ2VSb3V0ZSgpO1xuICAgIENvbnRyb2xsZXIuZW5hYmxlQ2xlYXJDb21wbGV0ZWRJdGVtcygpO1xuICAgIENvbnRyb2xsZXIuZW5hYmxlVG9nZ2xlQWxsKCk7XG4gICAgQ29udHJvbGxlci5zaG93RGF0ZSgpO1xuICAgIENvbnRyb2xsZXIuc2hvd0l0ZW1zKCk7XG4gICAgQ29udHJvbGxlci51cGRhdGVJdGVtc0NvdW50KCk7XG4gICAgQ29udHJvbGxlci5zaG93Rm9vdGVyKCk7XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==