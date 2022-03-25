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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black: #24292D;\n    --black-dimmer: #2B3137;\n    --gray: #58606a;\n    --border-gray: #e7e9ea;\n    --back-gray: #f6f8fa;\n    --white: #FFFFFF;\n    --red: #DB2C00;\n    --green: #2DA44E;\n    --blue: #0D74E7;\n    --blue2: #0969DA;\n    --purple: #6e5494;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--back-gray);\n}\n\n.logo {\n    height: 6rem;\n    font-size: 2.5rem;\n    font-weight: 700;\n    font-family: 'Poppins', sans-serif;\n    color: var(--black);\n    display: grid;\n    align-items: end;\n    justify-items: center;\n}\n\n.main {\n    width: 100%;\n    margin: 2rem 0;\n    display: grid;\n    justify-content: center;\n}\n\n.todo {\n    width: 36rem;\n    border-radius: .5rem;\n    box-shadow: 1px 1px 4px var(--border-gray);\n}\n\n.todo > .title {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    width: 100%;\n    height: 7rem;\n    padding: 2rem 3rem;\n    border: 1px solid var(--border-gray);\n    border-bottom: 0;\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.todo .date {\n    width: 7rem;\n    height: 3rem;\n    color: var(--gray);\n    display: grid;\n    grid-template-columns: 3rem 3rem;\n    grid-template-rows: 1.5rem 1.5rem;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.todo .day {\n    font-size: 3rem;\n    grid-row: 1 / 3;\n    grid-column: 1 / 2;\n}\n\n.todo .month {\n    justify-self: start;\n    align-self: end;\n    font-size: 1rem;\n    grid-row: 1 / 2;\n    grid-column: 2 / 3;\n    padding-left: 1rem;\n}\n\n.todo .year {\n    justify-self: start;\n    align-self: start;\n    font-size: 1rem;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    padding-left: 1rem;\n}\n\n\n.todo .weekday {\n    font-size: 1.5rem;\n    font-weight: 100;\n}\n\n.todo > .addItemContainer {\n    width: 100%;\n    height: 4rem;\n    font-size: 1.5rem;\n    border: 1px solid var(--border-gray);\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 3rem 1fr;\n    align-items: center;\n}\n\n.todo > .addItemContainer.alone {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n.todo .toggleAll {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n\n.todo .toggleAll::after {\n    font-size: 1.5rem;\n    margin: 0 .75rem;\n    content: \"radio_button_unchecked\";\n    color: var(--border-gray);\n}\n\n.todo .toggleAll:checked::after {\n    content: \"check_circle\";\n    color: var(--green);\n    opacity: .6;\n}\n\n.todo .toggleAll.hide {\n    opacity: 0;\n}\n\n.todo .addItemForm {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 100;\n    height: 100%;\n    width: 100%;\n    position: relative;\n}\n\n.todo .addItemLabel {\n    position: absolute;\n    left: 1px;\n    top: 1.2rem;\n    color: var(--border-gray);\n    user-select: none;\n}\n\n.todo .addItemLabel.hide {\n    display: none;\n}\n\n.todo .addItem {\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    border-top-right-radius: .5rem;\n    font-size: 1.5rem;\n    outline: none;\n    color: var(--black);\n}\n\n.todo .addItem.alone {\n    border-bottom-right-radius: .5rem;\n}\n\n.todo > .itemsBoard {\n    display: block;\n}\n\n.todo > .itemsBoard.hidden {\n    display: none;\n}\n\n.todo .item {\n    width: 100%;\n    margin: -1px 0;\n    height: 4rem;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5rem;\n    border: 1px solid var(--border-gray); \n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 3rem 1fr 3rem;\n    align-items: center;\n}\n\n.todo .item > .toggle {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n\n.todo .item > .toggle::after {\n    content: \"radio_button_unchecked\";\n    margin: 0 .75rem;\n    color: var(--border-gray);\n    opacity: .6;\n}\n\n.todo .item > .toggle:checked::after {\n    content: \"check_circle\";\n    color: var(--green);\n}\n\n.todo .item > .text {\n    height: 100%;\n    color: var(--gray);\n    display: grid;\n    align-items: center;\n}\n\n.todo .item.completed > .text {\n    opacity: .6;\n    text-decoration: line-through;\n}\n\n.todo .item > .text.editting {\n    outline-color: var(--border-gray);\n    background-color: var(--back-gray);\n}\n\n.todo .item > .delete {\n    opacity: 0;\n    justify-self: center;\n    cursor: pointer;\n    user-select: none;\n    margin-right: 1rem;\n}\n\n.todo .item:hover > .delete {\n    opacity: 1;\n    color: var(--red);\n}\n\n.todo .itemsFooter {\n    width: 100%;\n    height: 4rem;\n    font-size: .75rem;\n    font-family: 'Poppins', sans-serif;\n    border: 1px solid var(--border-gray);\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter > .activeItemsCount,\n.todo .itemsFooter > .completedItemsCount {\n    height: 2rem;\n    margin: 0 1rem;\n    color: var(--gray);\n    user-select: none;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n}\n\n.todo .itemsFooter > .activeItemsCount {\n    width: 4.5rem;\n}\n\n.todo .itemsFooter > .completedItemsCount {\n    width: 11rem;\n    border-radius: .25rem;\n    cursor: pointer;\n    border: 1px solid var(--border-gray);\n    background-color: var(--back-gray);\n}\n\n.todo .itemsFooter > .completedItemsCount.hide {\n    opacity: 0;\n    cursor: auto;\n}\n\n.todo .itemsFooter > .routes {\n    height: 2rem;\n    width: 14rem;\n    margin: 0 1rem;\n    user-select: none;\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 3rem 4rem 6rem;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n    gap: .5rem;\n}\n\n.todo .itemsFooter .route {\n    padding: .25rem .75rem;\n    color: var(--gray);\n    border-radius: .25rem;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter .route:hover {\n    border: 1px solid var(--border-gray);\n}\n\n.todo .itemsFooter .route.current {\n    background-color: var(--back-gray);\n    border: 1px solid var(--border-gray);\n}\n\n.footer {\n    height: 4.5rem;\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n    font-size: .75rem;\n    color: var(--gray);\n    display: grid;\n    grid-template-rows: repeat(3, 1.5rem);\n    align-items: center;\n    justify-items: center;\n}\n\n.footer .tip,\n.footer .copyright,\n.footer .year {\n    height: 1.5rem;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    gap: .25rem;\n}\n\n.footer a {\n    width: 1rem;\n    height: 1rem;\n}\n\n.footer .github {\n    width: 100%;\n    height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('./norm.css');\n@import url('https://fonts.googleapis.com/icon?family=Material+Icons');\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&family=Roboto:wght@100;400;500;700&display=swap');\n\n:root {\n    --black: #24292D;\n    --black-dimmer: #2B3137;\n    --gray: #58606a;\n    --border-gray: #e7e9ea;\n    --back-gray: #f6f8fa;\n    --white: #FFFFFF;\n    --red: #DB2C00;\n    --green: #2DA44E;\n    --blue: #0D74E7;\n    --blue2: #0969DA;\n    --purple: #6e5494;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--back-gray);\n}\n\n.logo {\n    height: 6rem;\n    font-size: 2.5rem;\n    font-weight: 700;\n    font-family: 'Poppins', sans-serif;\n    color: var(--black);\n    display: grid;\n    align-items: end;\n    justify-items: center;\n}\n\n.main {\n    width: 100%;\n    margin: 2rem 0;\n    display: grid;\n    justify-content: center;\n}\n\n.todo {\n    width: 36rem;\n    border-radius: .5rem;\n    box-shadow: 1px 1px 4px var(--border-gray);\n}\n\n.todo > .title {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    width: 100%;\n    height: 7rem;\n    padding: 2rem 3rem;\n    border: 1px solid var(--border-gray);\n    border-bottom: 0;\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.todo .date {\n    width: 7rem;\n    height: 3rem;\n    color: var(--gray);\n    display: grid;\n    grid-template-columns: 3rem 3rem;\n    grid-template-rows: 1.5rem 1.5rem;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.todo .day {\n    font-size: 3rem;\n    grid-row: 1 / 3;\n    grid-column: 1 / 2;\n}\n\n.todo .month {\n    justify-self: start;\n    align-self: end;\n    font-size: 1rem;\n    grid-row: 1 / 2;\n    grid-column: 2 / 3;\n    padding-left: 1rem;\n}\n\n.todo .year {\n    justify-self: start;\n    align-self: start;\n    font-size: 1rem;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    padding-left: 1rem;\n}\n\n\n.todo .weekday {\n    font-size: 1.5rem;\n    font-weight: 100;\n}\n\n.todo > .addItemContainer {\n    width: 100%;\n    height: 4rem;\n    font-size: 1.5rem;\n    border: 1px solid var(--border-gray);\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 3rem 1fr;\n    align-items: center;\n}\n\n.todo > .addItemContainer.alone {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n.todo .toggleAll {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n\n.todo .toggleAll::after {\n    font-size: 1.5rem;\n    margin: 0 .75rem;\n    content: \"radio_button_unchecked\";\n    color: var(--border-gray);\n}\n\n.todo .toggleAll:checked::after {\n    content: \"check_circle\";\n    color: var(--green);\n    opacity: .6;\n}\n\n.todo .toggleAll.hide {\n    opacity: 0;\n}\n\n.todo .addItemForm {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 100;\n    height: 100%;\n    width: 100%;\n    position: relative;\n}\n\n.todo .addItemLabel {\n    position: absolute;\n    left: 1px;\n    top: 1.2rem;\n    color: var(--border-gray);\n    user-select: none;\n}\n\n.todo .addItemLabel.hide {\n    display: none;\n}\n\n.todo .addItem {\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    border-top-right-radius: .5rem;\n    font-size: 1.5rem;\n    outline: none;\n    color: var(--black);\n}\n\n.todo .addItem.alone {\n    border-bottom-right-radius: .5rem;\n}\n\n.todo > .itemsBoard {\n    display: block;\n}\n\n.todo > .itemsBoard.hidden {\n    display: none;\n}\n\n.todo .item {\n    width: 100%;\n    margin: -1px 0;\n    height: 4rem;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5rem;\n    border: 1px solid var(--border-gray); \n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 3rem 1fr 3rem;\n    align-items: center;\n}\n\n.todo .item > .toggle {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n\n.todo .item > .toggle::after {\n    content: \"radio_button_unchecked\";\n    margin: 0 .75rem;\n    color: var(--border-gray);\n    opacity: .6;\n}\n\n.todo .item > .toggle:checked::after {\n    content: \"check_circle\";\n    color: var(--green);\n}\n\n.todo .item > .text {\n    height: 100%;\n    color: var(--gray);\n    display: grid;\n    align-items: center;\n}\n\n.todo .item.completed > .text {\n    opacity: .6;\n    text-decoration: line-through;\n}\n\n.todo .item > .text.editting {\n    outline-color: var(--border-gray);\n    background-color: var(--back-gray);\n}\n\n.todo .item > .delete {\n    opacity: 0;\n    justify-self: center;\n    cursor: pointer;\n    user-select: none;\n    margin-right: 1rem;\n}\n\n.todo .item:hover > .delete {\n    opacity: 1;\n    color: var(--red);\n}\n\n.todo .itemsFooter {\n    width: 100%;\n    height: 4rem;\n    font-size: .75rem;\n    font-family: 'Poppins', sans-serif;\n    border: 1px solid var(--border-gray);\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter > .activeItemsCount,\n.todo .itemsFooter > .completedItemsCount {\n    height: 2rem;\n    margin: 0 1rem;\n    color: var(--gray);\n    user-select: none;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n}\n\n.todo .itemsFooter > .activeItemsCount {\n    width: 4.5rem;\n}\n\n.todo .itemsFooter > .completedItemsCount {\n    width: 11rem;\n    border-radius: .25rem;\n    cursor: pointer;\n    border: 1px solid var(--border-gray);\n    background-color: var(--back-gray);\n}\n\n.todo .itemsFooter > .completedItemsCount.hide {\n    opacity: 0;\n    cursor: auto;\n}\n\n.todo .itemsFooter > .routes {\n    height: 2rem;\n    width: 14rem;\n    margin: 0 1rem;\n    user-select: none;\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 3rem 4rem 6rem;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n    gap: .5rem;\n}\n\n.todo .itemsFooter .route {\n    padding: .25rem .75rem;\n    color: var(--gray);\n    border-radius: .25rem;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter .route:hover {\n    border: 1px solid var(--border-gray);\n}\n\n.todo .itemsFooter .route.current {\n    background-color: var(--back-gray);\n    border: 1px solid var(--border-gray);\n}\n\n.footer {\n    height: 4.5rem;\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n    font-size: .75rem;\n    color: var(--gray);\n    display: grid;\n    grid-template-rows: repeat(3, 1.5rem);\n    align-items: center;\n    justify-items: center;\n}\n\n.footer .tip,\n.footer .copyright,\n.footer .year {\n    height: 1.5rem;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    gap: .25rem;\n}\n\n.footer a {\n    width: 1rem;\n    height: 1rem;\n}\n\n.footer .github {\n    width: 100%;\n    height: 100%;\n}\n"],"sourceRoot":""}]);
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
/*
 * controller.js is a general manager. 
 * He is the only one who knows all the logic of different features. 
 * But he is blind from both data and DOM. 
 * model.js and view.js do these concrete tasks for him.
 */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {

    /* Format the date. */
    const MyDate = (() => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
        function getToday() {
            const today  = new Date();
            const todayStr = today.toLocaleDateString("en-US", options) // Saturday, September 17, 2016
            return todayStr.split(', ');
        }
        
        return { getToday };
    })();

    /* Cut the date string into weekday, day, month and year. View module knows how to show them. */
    function showDate() {
        let [weekday, monthDay, year] = MyDate.getToday();
        let [month, day] = monthDay.split(' ');
        month = month.slice(0, 3).toUpperCase();
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].showDate(weekday, day, month, year); 
    }

    /* Call view to print footer. */
    function showFooter() {
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].showFooter();
    }

    /* Pre-define queries for three different routes: all, active and completed. 
     * Model.find() function accepts only an array of Query as input to filter items we want. */
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

    /* Get the queries from ItemsQueries, and feed them to Model.findItems() function. */
    function filterItems(route) {
        return _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].findItems(ItemsQueries.get(route));
    }

    /* Get the current route from storage, filter items under current route and call view to
     * create items card in DOM. 
     * View.showItem() function requires a callback function to tell him which buttons need
     * to be activated after item card is created.*/
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

    /* Update the count number of three different routes(all, active and completed) listed
     * on todo board.
     * The entire items board will be hidden if no items left in items list. */
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
        if (activeCount + completedCount === 0) { // hide the entire item board if 0 item left
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

    /* Call View to bind event listeners for adding new item feature. Main logic addItem() function
     * is fed as a callback function. */
    function enableAddItem() {
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].bindAddItem(addItem);
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].bindAddItemLabel();
    }

    /* Call View to bind event listeners for route switch buttons. Main logic function changeRoute()
     * is fed as a callback function. */
    function enableChangeRoute() {
        const currentRoute = _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentRoute();
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].bindChangeRoute(changeRoute, () => _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].markCurrentRoute(currentRoute));
    }

    /* Call View to bind event listeners for clear buttons. Main logic clearAllCompletedItem()
     * function is fed as a callback function. */
    function enableClearCompletedItems() {
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].bindClearCompletedItems(clearAllCompletedItems);
    }

    /* Call View to bind event listeners for toggleAll buttons. Main logic toggleAll() function is 
     * fed as a callback function. */
    function enableToggleAll() {
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].bindToggleAll(toggleAll);
    }

    /* Main logic of how to add a new item. */
    function addItem(text) {
        _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItem(text);
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearAddItemEle();
        showItems();
        updateItemsCount();
    }

    /* Main logic of toggling an item to completed. */
    function toggleCompleted(itemId) {
        _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].toggleCompleted(itemId);
        showItems(); // must refresh current route.
        updateItemsCount();
    }

    /* Main logic of what happend when delete button is clicked. */
    function deleteItem(itemId) {
        _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteItem(itemId);
        updateItemsCount();
    }

    /* Main login of editing an item. */
    function editItem(itemId, itemValue, callback) {
        if (!itemValue) {
            _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteItem(itemId);
            updateItemsCount();
            callback(); // callback view if need to remove that item from view.
        } else {
            _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateItem(itemId, itemValue);
        }
    }

    /* Main logic of switching route. */
    function changeRoute(route) {
        _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentRoute(route);
        showItems();
    }

    /* Main logic of "clear all completed" button. */
    function clearAllCompletedItems() {
        const completedItemsArr = _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].findItems(ItemsQueries.get('completed'));
        completedItemsArr.forEach((itemObj) => {
            const id = _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].Item.getId.call(itemObj);
            _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteItem(id);
        });
        showItems();
        updateItemsCount();
    }

    /* Main logic of "toggle all" button. */
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
/*
 * A DAO(Data Access Object) API. 
 * It's aware of the data structure of Item and other objects. 
 * And knows how to insert, update, delete and read these data.
 */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {

    const defaultRoute = 'all';

    /* A factory function creating new item object. */
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

    /* A wrapper function. Set current route to default value, if no route exits. */
    function getCurrentRoute() {
        const route = _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentRoute();
        if (!route) {
            _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].setCurrentRoute(defaultRoute);
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
        _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
            const itemObj = Item.create(text);
            itemsObj[`${Item.getId.call(itemObj)}`] = itemObj;
        });
    }

    /* Remove an item from storage. */
    function deleteItem(itemId) {
        if (!hasItem()) return;
        _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
            delete itemsObj[`${itemId}`];
        });
    }

    /* Update properties of an item. */
    function updateItem(itemId, itemValue) {
        if (!hasItem()) return;
        _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
            const itemObj = itemsObj[`${itemId}`];
            Item.setTitle.call(itemObj, itemValue);
        });
    }

    /* Update item "completed" property. */
    function toggleCompleted(itemId) {
        if (!hasItem()) return;
        _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
            const itemObj = itemsObj[`${itemId}`];
            Item.toggleCompleted.call(itemObj);
        });
    }

    /* Batch processing of toggling item "completed" property. */
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
/* 
 * store.js knows only how to read/write string data from/to Document.localStorage.
 * All items are stored as a long string in localStorage. 
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {

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

    /* JSON.stringify() function converts an large object (contains all items data) to string.
     * And push the long string into localStrorage. */
    function setItemsObject(itemsObj) {
        window.localStorage.setItem(itemsKey, JSON.stringify(itemsObj));
    }

    /* A helper function read/write data from/to localStorage, so that model.js can focus on his work. */
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
/*
 * A helper of view.js. Only used to store HTML templates.
 */
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
/*
 * All DOM manipulations go to this file. 
 */



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxP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VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmbUM7QUFDTTs7QUFFekM7QUFDQSxJQUFJLG9FQUF3QjtBQUM1QixJQUFJLHdFQUE0QjtBQUNoQyxJQUFJLGdGQUFvQztBQUN4QyxJQUFJLHNFQUEwQjtBQUM5QixJQUFJLCtEQUFtQjtBQUN2QixJQUFJLGdFQUFvQjtBQUN4QixJQUFJLHVFQUEyQjtBQUMvQixJQUFJLGlFQUFxQjtBQUN6QixDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jc3Mvbm9ybS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3NzL2luZGV4LmNzcz9mN2VhIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL3RlbXBsYXRlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvdmlldy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMpO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzQwMDs3MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmxhY2s6ICMyNDI5MkQ7XFxuICAgIC0tYmxhY2stZGltbWVyOiAjMkIzMTM3O1xcbiAgICAtLWdyYXk6ICM1ODYwNmE7XFxuICAgIC0tYm9yZGVyLWdyYXk6ICNlN2U5ZWE7XFxuICAgIC0tYmFjay1ncmF5OiAjZjZmOGZhO1xcbiAgICAtLXdoaXRlOiAjRkZGRkZGO1xcbiAgICAtLXJlZDogI0RCMkMwMDtcXG4gICAgLS1ncmVlbjogIzJEQTQ0RTtcXG4gICAgLS1ibHVlOiAjMEQ3NEU3O1xcbiAgICAtLWJsdWUyOiAjMDk2OURBO1xcbiAgICAtLXB1cnBsZTogIzZlNTQ5NDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWdyYXkpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAycmVtIDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIHdpZHRoOiAzNnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLnRvZG8gPiAudGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDdyZW07XFxuICAgIHBhZGRpbmc6IDJyZW0gM3JlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvZG8gLmRhdGUge1xcbiAgICB3aWR0aDogN3JlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAzcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNXJlbSAxLjVyZW07XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuZGF5IHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLnRvZG8gLm1vbnRoIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi50b2RvIC55ZWFyIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuXFxuLnRvZG8gLndlZWtkYXkge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLnRvZG8gPiAuYWRkSXRlbUNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gPiAuYWRkSXRlbUNvbnRhaW5lci5hbG9uZSB7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC41cmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVyZW07XFxufVxcblxcbi50b2RvIC50b2dnbGVBbGwge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbDo6YWZ0ZXIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAwIC43NXJlbTtcXG4gICAgY29udGVudDogXFxcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcXFwiO1xcbiAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsOmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcImNoZWNrX2NpcmNsZVxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIG9wYWNpdHk6IC42O1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsLmhpZGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbUZvcm0ge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW1MYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMXB4O1xcbiAgICB0b3A6IDEuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtTGFiZWwuaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtLmFsb25lIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4udG9kbyA+IC5pdGVtc0JvYXJkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvID4gLml0ZW1zQm9hcmQuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLml0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAtMXB4IDA7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gMWZyIDNyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50b2dnbGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcXFwiO1xcbiAgICBtYXJnaW46IDAgLjc1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBvcGFjaXR5OiAuNjtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudG9nZ2xlOmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcImNoZWNrX2NpcmNsZVxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRleHQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW0uY29tcGxldGVkID4gLnRleHQge1xcbiAgICBvcGFjaXR5OiAuNjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRleHQuZWRpdHRpbmcge1xcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLmRlbGV0ZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi50b2RvIC5pdGVtOmhvdmVyID4gLmRlbGV0ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBmb250LXNpemU6IC43NXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmFjdGl2ZUl0ZW1zQ291bnQsXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuYWN0aXZlSXRlbXNDb3VudCB7XFxuICAgIHdpZHRoOiA0LjVyZW07XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5jb21wbGV0ZWRJdGVtc0NvdW50IHtcXG4gICAgd2lkdGg6IDExcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuY29tcGxldGVkSXRlbXNDb3VudC5oaWRlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgY3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAucm91dGVzIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMTRyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gNHJlbSA2cmVtO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZSB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbSAuNzVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciAucm91dGU6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciAucm91dGUuY3VycmVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGhlaWdodDogNC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IC43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxLjVyZW0pO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgLnRpcCxcXG4uZm9vdGVyIC5jb3B5cmlnaHQsXFxuLmZvb3RlciAueWVhciB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC4yNXJlbTtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLmZvb3RlciAuZ2l0aHViIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2Isc0JBQXNCO0lB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QUFzQjtJQUN0QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCcuL25vcm0uY3NzJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzQwMDs3MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tYmxhY2s6ICMyNDI5MkQ7XFxuICAgIC0tYmxhY2stZGltbWVyOiAjMkIzMTM3O1xcbiAgICAtLWdyYXk6ICM1ODYwNmE7XFxuICAgIC0tYm9yZGVyLWdyYXk6ICNlN2U5ZWE7XFxuICAgIC0tYmFjay1ncmF5OiAjZjZmOGZhO1xcbiAgICAtLXdoaXRlOiAjRkZGRkZGO1xcbiAgICAtLXJlZDogI0RCMkMwMDtcXG4gICAgLS1ncmVlbjogIzJEQTQ0RTtcXG4gICAgLS1ibHVlOiAjMEQ3NEU3O1xcbiAgICAtLWJsdWUyOiAjMDk2OURBO1xcbiAgICAtLXB1cnBsZTogIzZlNTQ5NDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWdyYXkpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAycmVtIDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIHdpZHRoOiAzNnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLnRvZG8gPiAudGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDdyZW07XFxuICAgIHBhZGRpbmc6IDJyZW0gM3JlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvZG8gLmRhdGUge1xcbiAgICB3aWR0aDogN3JlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAzcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNXJlbSAxLjVyZW07XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuZGF5IHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLnRvZG8gLm1vbnRoIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi50b2RvIC55ZWFyIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuXFxuLnRvZG8gLndlZWtkYXkge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLnRvZG8gPiAuYWRkSXRlbUNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gPiAuYWRkSXRlbUNvbnRhaW5lci5hbG9uZSB7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC41cmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVyZW07XFxufVxcblxcbi50b2RvIC50b2dnbGVBbGwge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbDo6YWZ0ZXIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAwIC43NXJlbTtcXG4gICAgY29udGVudDogXFxcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcXFwiO1xcbiAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsOmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcImNoZWNrX2NpcmNsZVxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIG9wYWNpdHk6IC42O1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsLmhpZGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbUZvcm0ge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW1MYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMXB4O1xcbiAgICB0b3A6IDEuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtTGFiZWwuaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtLmFsb25lIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4udG9kbyA+IC5pdGVtc0JvYXJkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvID4gLml0ZW1zQm9hcmQuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLml0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAtMXB4IDA7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gMWZyIDNyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50b2dnbGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcXFwiO1xcbiAgICBtYXJnaW46IDAgLjc1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBvcGFjaXR5OiAuNjtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudG9nZ2xlOmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcImNoZWNrX2NpcmNsZVxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRleHQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW0uY29tcGxldGVkID4gLnRleHQge1xcbiAgICBvcGFjaXR5OiAuNjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRleHQuZWRpdHRpbmcge1xcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLmRlbGV0ZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi50b2RvIC5pdGVtOmhvdmVyID4gLmRlbGV0ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBmb250LXNpemU6IC43NXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmFjdGl2ZUl0ZW1zQ291bnQsXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuYWN0aXZlSXRlbXNDb3VudCB7XFxuICAgIHdpZHRoOiA0LjVyZW07XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5jb21wbGV0ZWRJdGVtc0NvdW50IHtcXG4gICAgd2lkdGg6IDExcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuY29tcGxldGVkSXRlbXNDb3VudC5oaWRlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgY3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAucm91dGVzIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMTRyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gNHJlbSA2cmVtO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZSB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbSAuNzVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciAucm91dGU6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciAucm91dGUuY3VycmVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGhlaWdodDogNC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IC43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxLjVyZW0pO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgLnRpcCxcXG4uZm9vdGVyIC5jb3B5cmlnaHQsXFxuLmZvb3RlciAueWVhciB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC4yNXJlbTtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLmZvb3RlciAuZ2l0aHViIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvbm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qXG4gKiBjb250cm9sbGVyLmpzIGlzIGEgZ2VuZXJhbCBtYW5hZ2VyLiBcbiAqIEhlIGlzIHRoZSBvbmx5IG9uZSB3aG8ga25vd3MgYWxsIHRoZSBsb2dpYyBvZiBkaWZmZXJlbnQgZmVhdHVyZXMuIFxuICogQnV0IGhlIGlzIGJsaW5kIGZyb20gYm90aCBkYXRhIGFuZCBET00uIFxuICogbW9kZWwuanMgYW5kIHZpZXcuanMgZG8gdGhlc2UgY29uY3JldGUgdGFza3MgZm9yIGhpbS5cbiAqL1xuXG5pbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcuanMnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXG4gICAgLyogRm9ybWF0IHRoZSBkYXRlLiAqL1xuICAgIGNvbnN0IE15RGF0ZSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9O1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0VG9kYXkoKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RheSAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgdG9kYXlTdHIgPSB0b2RheS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKSAvLyBTYXR1cmRheSwgU2VwdGVtYmVyIDE3LCAyMDE2XG4gICAgICAgICAgICByZXR1cm4gdG9kYXlTdHIuc3BsaXQoJywgJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7IGdldFRvZGF5IH07XG4gICAgfSkoKTtcblxuICAgIC8qIEN1dCB0aGUgZGF0ZSBzdHJpbmcgaW50byB3ZWVrZGF5LCBkYXksIG1vbnRoIGFuZCB5ZWFyLiBWaWV3IG1vZHVsZSBrbm93cyBob3cgdG8gc2hvdyB0aGVtLiAqL1xuICAgIGZ1bmN0aW9uIHNob3dEYXRlKCkge1xuICAgICAgICBsZXQgW3dlZWtkYXksIG1vbnRoRGF5LCB5ZWFyXSA9IE15RGF0ZS5nZXRUb2RheSgpO1xuICAgICAgICBsZXQgW21vbnRoLCBkYXldID0gbW9udGhEYXkuc3BsaXQoJyAnKTtcbiAgICAgICAgbW9udGggPSBtb250aC5zbGljZSgwLCAzKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBWaWV3LnNob3dEYXRlKHdlZWtkYXksIGRheSwgbW9udGgsIHllYXIpOyBcbiAgICB9XG5cbiAgICAvKiBDYWxsIHZpZXcgdG8gcHJpbnQgZm9vdGVyLiAqL1xuICAgIGZ1bmN0aW9uIHNob3dGb290ZXIoKSB7XG4gICAgICAgIFZpZXcuc2hvd0Zvb3RlcigpO1xuICAgIH1cblxuICAgIC8qIFByZS1kZWZpbmUgcXVlcmllcyBmb3IgdGhyZWUgZGlmZmVyZW50IHJvdXRlczogYWxsLCBhY3RpdmUgYW5kIGNvbXBsZXRlZC4gXG4gICAgICogTW9kZWwuZmluZCgpIGZ1bmN0aW9uIGFjY2VwdHMgb25seSBhbiBhcnJheSBvZiBRdWVyeSBhcyBpbnB1dCB0byBmaWx0ZXIgaXRlbXMgd2Ugd2FudC4gKi9cbiAgICBjb25zdCBJdGVtc1F1ZXJpZXMgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBxdWVyaWVzID0ge1xuICAgICAgICAgICAgJ2FsbCc6IFtdLFxuICAgICAgICAgICAgJ2FjdGl2ZSc6IFtNb2RlbC5RdWVyeSgnY29tcGxldGVkJywgZmFsc2UpXSxcbiAgICAgICAgICAgICdjb21wbGV0ZWQnOiBbTW9kZWwuUXVlcnkoJ2NvbXBsZXRlZCcsIHRydWUpXVxuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBnZXQocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBxdWVyaWVzW2Ake3JvdXRlfWBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgZ2V0IH07XG4gICAgfSkoKTtcblxuICAgIC8qIEdldCB0aGUgcXVlcmllcyBmcm9tIEl0ZW1zUXVlcmllcywgYW5kIGZlZWQgdGhlbSB0byBNb2RlbC5maW5kSXRlbXMoKSBmdW5jdGlvbi4gKi9cbiAgICBmdW5jdGlvbiBmaWx0ZXJJdGVtcyhyb3V0ZSkge1xuICAgICAgICByZXR1cm4gTW9kZWwuZmluZEl0ZW1zKEl0ZW1zUXVlcmllcy5nZXQocm91dGUpKTtcbiAgICB9XG5cbiAgICAvKiBHZXQgdGhlIGN1cnJlbnQgcm91dGUgZnJvbSBzdG9yYWdlLCBmaWx0ZXIgaXRlbXMgdW5kZXIgY3VycmVudCByb3V0ZSBhbmQgY2FsbCB2aWV3IHRvXG4gICAgICogY3JlYXRlIGl0ZW1zIGNhcmQgaW4gRE9NLiBcbiAgICAgKiBWaWV3LnNob3dJdGVtKCkgZnVuY3Rpb24gcmVxdWlyZXMgYSBjYWxsYmFjayBmdW5jdGlvbiB0byB0ZWxsIGhpbSB3aGljaCBidXR0b25zIG5lZWRcbiAgICAgKiB0byBiZSBhY3RpdmF0ZWQgYWZ0ZXIgaXRlbSBjYXJkIGlzIGNyZWF0ZWQuKi9cbiAgICBmdW5jdGlvbiBzaG93SXRlbXMoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zT2JqQXJyID0gZmlsdGVySXRlbXMoTW9kZWwuZ2V0Q3VycmVudFJvdXRlKCkpO1xuICAgICAgICBWaWV3LmNsZWFySXRlbXMoKTtcbiAgICAgICAgaXRlbXNPYmpBcnIuZm9yRWFjaCgoaXRlbU9iaikgPT4ge1xuICAgICAgICAgICAgVmlldy5zaG93SXRlbShpdGVtT2JqLCAodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgVmlldy5iaW5kVG9nZ2xlQ29tcGxldGVkKHRhcmdldCwgdG9nZ2xlQ29tcGxldGVkKTtcbiAgICAgICAgICAgICAgICBWaWV3LmJpbmREZWxldGVJdGVtKHRhcmdldCwgZGVsZXRlSXRlbSk7XG4gICAgICAgICAgICAgICAgVmlldy5iaW5kRWRpdEl0ZW0odGFyZ2V0LCBlZGl0SXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyogVXBkYXRlIHRoZSBjb3VudCBudW1iZXIgb2YgdGhyZWUgZGlmZmVyZW50IHJvdXRlcyhhbGwsIGFjdGl2ZSBhbmQgY29tcGxldGVkKSBsaXN0ZWRcbiAgICAgKiBvbiB0b2RvIGJvYXJkLlxuICAgICAqIFRoZSBlbnRpcmUgaXRlbXMgYm9hcmQgd2lsbCBiZSBoaWRkZW4gaWYgbm8gaXRlbXMgbGVmdCBpbiBpdGVtcyBsaXN0LiAqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUl0ZW1zQ291bnQoKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUNvdW50ID0gZmlsdGVySXRlbXMoJ2FjdGl2ZScpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY29tcGxldGVkQ291bnQgPSBmaWx0ZXJJdGVtcygnY29tcGxldGVkJykubGVuZ3RoO1xuICAgICAgICBWaWV3LnVwZGF0ZUFjdGl2ZUl0ZW1zQ291bnQoYWN0aXZlQ291bnQpO1xuICAgICAgICBWaWV3LnVwZGF0ZUNvbXBsZXRlZEl0ZW1zQ291bnQoY29tcGxldGVkQ291bnQpO1xuICAgICAgICBpZiAoY29tcGxldGVkQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgIFZpZXcuaGlkZUNvbXBsZXRlZEl0ZW1zQ291bnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFZpZXcuc2hvd0NvbXBsZXRlZEl0ZW1zQ291bnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlQ291bnQgKyBjb21wbGV0ZWRDb3VudCA9PT0gMCkgeyAvLyBoaWRlIHRoZSBlbnRpcmUgaXRlbSBib2FyZCBpZiAwIGl0ZW0gbGVmdFxuICAgICAgICAgICAgVmlldy5oaWRlSXRlbXNCb2FyZCgpO1xuICAgICAgICAgICAgVmlldy5oaWRlVG9nZ2xlQWxsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBWaWV3LnNob3dJdGVtc0JvYXJkKCk7XG4gICAgICAgICAgICBpZiAoYWN0aXZlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgVmlldy50b2dnbGVBbGxOb3RDaGVja2VkKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFZpZXcudG9nZ2xlQWxsQ2hlY2tlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogQ2FsbCBWaWV3IHRvIGJpbmQgZXZlbnQgbGlzdGVuZXJzIGZvciBhZGRpbmcgbmV3IGl0ZW0gZmVhdHVyZS4gTWFpbiBsb2dpYyBhZGRJdGVtKCkgZnVuY3Rpb25cbiAgICAgKiBpcyBmZWQgYXMgYSBjYWxsYmFjayBmdW5jdGlvbi4gKi9cbiAgICBmdW5jdGlvbiBlbmFibGVBZGRJdGVtKCkge1xuICAgICAgICBWaWV3LmJpbmRBZGRJdGVtKGFkZEl0ZW0pO1xuICAgICAgICBWaWV3LmJpbmRBZGRJdGVtTGFiZWwoKTtcbiAgICB9XG5cbiAgICAvKiBDYWxsIFZpZXcgdG8gYmluZCBldmVudCBsaXN0ZW5lcnMgZm9yIHJvdXRlIHN3aXRjaCBidXR0b25zLiBNYWluIGxvZ2ljIGZ1bmN0aW9uIGNoYW5nZVJvdXRlKClcbiAgICAgKiBpcyBmZWQgYXMgYSBjYWxsYmFjayBmdW5jdGlvbi4gKi9cbiAgICBmdW5jdGlvbiBlbmFibGVDaGFuZ2VSb3V0ZSgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFJvdXRlID0gTW9kZWwuZ2V0Q3VycmVudFJvdXRlKCk7XG4gICAgICAgIFZpZXcuYmluZENoYW5nZVJvdXRlKGNoYW5nZVJvdXRlLCAoKSA9PiBWaWV3Lm1hcmtDdXJyZW50Um91dGUoY3VycmVudFJvdXRlKSk7XG4gICAgfVxuXG4gICAgLyogQ2FsbCBWaWV3IHRvIGJpbmQgZXZlbnQgbGlzdGVuZXJzIGZvciBjbGVhciBidXR0b25zLiBNYWluIGxvZ2ljIGNsZWFyQWxsQ29tcGxldGVkSXRlbSgpXG4gICAgICogZnVuY3Rpb24gaXMgZmVkIGFzIGEgY2FsbGJhY2sgZnVuY3Rpb24uICovXG4gICAgZnVuY3Rpb24gZW5hYmxlQ2xlYXJDb21wbGV0ZWRJdGVtcygpIHtcbiAgICAgICAgVmlldy5iaW5kQ2xlYXJDb21wbGV0ZWRJdGVtcyhjbGVhckFsbENvbXBsZXRlZEl0ZW1zKTtcbiAgICB9XG5cbiAgICAvKiBDYWxsIFZpZXcgdG8gYmluZCBldmVudCBsaXN0ZW5lcnMgZm9yIHRvZ2dsZUFsbCBidXR0b25zLiBNYWluIGxvZ2ljIHRvZ2dsZUFsbCgpIGZ1bmN0aW9uIGlzIFxuICAgICAqIGZlZCBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiAqL1xuICAgIGZ1bmN0aW9uIGVuYWJsZVRvZ2dsZUFsbCgpIHtcbiAgICAgICAgVmlldy5iaW5kVG9nZ2xlQWxsKHRvZ2dsZUFsbCk7XG4gICAgfVxuXG4gICAgLyogTWFpbiBsb2dpYyBvZiBob3cgdG8gYWRkIGEgbmV3IGl0ZW0uICovXG4gICAgZnVuY3Rpb24gYWRkSXRlbSh0ZXh0KSB7XG4gICAgICAgIE1vZGVsLmFkZEl0ZW0odGV4dCk7XG4gICAgICAgIFZpZXcuY2xlYXJBZGRJdGVtRWxlKCk7XG4gICAgICAgIHNob3dJdGVtcygpO1xuICAgICAgICB1cGRhdGVJdGVtc0NvdW50KCk7XG4gICAgfVxuXG4gICAgLyogTWFpbiBsb2dpYyBvZiB0b2dnbGluZyBhbiBpdGVtIHRvIGNvbXBsZXRlZC4gKi9cbiAgICBmdW5jdGlvbiB0b2dnbGVDb21wbGV0ZWQoaXRlbUlkKSB7XG4gICAgICAgIE1vZGVsLnRvZ2dsZUNvbXBsZXRlZChpdGVtSWQpO1xuICAgICAgICBzaG93SXRlbXMoKTsgLy8gbXVzdCByZWZyZXNoIGN1cnJlbnQgcm91dGUuXG4gICAgICAgIHVwZGF0ZUl0ZW1zQ291bnQoKTtcbiAgICB9XG5cbiAgICAvKiBNYWluIGxvZ2ljIG9mIHdoYXQgaGFwcGVuZCB3aGVuIGRlbGV0ZSBidXR0b24gaXMgY2xpY2tlZC4gKi9cbiAgICBmdW5jdGlvbiBkZWxldGVJdGVtKGl0ZW1JZCkge1xuICAgICAgICBNb2RlbC5kZWxldGVJdGVtKGl0ZW1JZCk7XG4gICAgICAgIHVwZGF0ZUl0ZW1zQ291bnQoKTtcbiAgICB9XG5cbiAgICAvKiBNYWluIGxvZ2luIG9mIGVkaXRpbmcgYW4gaXRlbS4gKi9cbiAgICBmdW5jdGlvbiBlZGl0SXRlbShpdGVtSWQsIGl0ZW1WYWx1ZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFpdGVtVmFsdWUpIHtcbiAgICAgICAgICAgIE1vZGVsLmRlbGV0ZUl0ZW0oaXRlbUlkKTtcbiAgICAgICAgICAgIHVwZGF0ZUl0ZW1zQ291bnQoKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7IC8vIGNhbGxiYWNrIHZpZXcgaWYgbmVlZCB0byByZW1vdmUgdGhhdCBpdGVtIGZyb20gdmlldy5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE1vZGVsLnVwZGF0ZUl0ZW0oaXRlbUlkLCBpdGVtVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogTWFpbiBsb2dpYyBvZiBzd2l0Y2hpbmcgcm91dGUuICovXG4gICAgZnVuY3Rpb24gY2hhbmdlUm91dGUocm91dGUpIHtcbiAgICAgICAgTW9kZWwuc2V0Q3VycmVudFJvdXRlKHJvdXRlKTtcbiAgICAgICAgc2hvd0l0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyogTWFpbiBsb2dpYyBvZiBcImNsZWFyIGFsbCBjb21wbGV0ZWRcIiBidXR0b24uICovXG4gICAgZnVuY3Rpb24gY2xlYXJBbGxDb21wbGV0ZWRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgY29tcGxldGVkSXRlbXNBcnIgPSBNb2RlbC5maW5kSXRlbXMoSXRlbXNRdWVyaWVzLmdldCgnY29tcGxldGVkJykpO1xuICAgICAgICBjb21wbGV0ZWRJdGVtc0Fyci5mb3JFYWNoKChpdGVtT2JqKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IE1vZGVsLkl0ZW0uZ2V0SWQuY2FsbChpdGVtT2JqKTtcbiAgICAgICAgICAgIE1vZGVsLmRlbGV0ZUl0ZW0oaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2hvd0l0ZW1zKCk7XG4gICAgICAgIHVwZGF0ZUl0ZW1zQ291bnQoKTtcbiAgICB9XG5cbiAgICAvKiBNYWluIGxvZ2ljIG9mIFwidG9nZ2xlIGFsbFwiIGJ1dHRvbi4gKi9cbiAgICBmdW5jdGlvbiB0b2dnbGVBbGwoKSB7XG4gICAgICAgIGlmIChNb2RlbC5oYXNJdGVtKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1zQXJyID0gTW9kZWwuZmluZEl0ZW1zKEl0ZW1zUXVlcmllcy5nZXQoJ2FjdGl2ZScpKTtcbiAgICAgICAgICAgIGlmIChhY3RpdmVJdGVtc0Fyci5sZW5ndGggPiAwKSB7IFxuICAgICAgICAgICAgICAgIE1vZGVsLnRvZ2dsZUFsbChhY3RpdmVJdGVtc0Fycik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE1vZGVsLnRvZ2dsZUFsbChNb2RlbC5maW5kSXRlbXMoSXRlbXNRdWVyaWVzLmdldCgnY29tcGxldGVkJykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNob3dJdGVtcygpO1xuICAgICAgICAgICAgdXBkYXRlSXRlbXNDb3VudCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2hvd0Zvb3Rlciwgc2hvd0RhdGUsIHNob3dJdGVtcywgdXBkYXRlSXRlbXNDb3VudCwgZW5hYmxlQWRkSXRlbSwgZW5hYmxlQ2hhbmdlUm91dGUsIGVuYWJsZUNsZWFyQ29tcGxldGVkSXRlbXMsIGVuYWJsZVRvZ2dsZUFsbCB9O1xuXG59KSgpO1xuIiwiLypcbiAqIEEgREFPKERhdGEgQWNjZXNzIE9iamVjdCkgQVBJLiBcbiAqIEl0J3MgYXdhcmUgb2YgdGhlIGRhdGEgc3RydWN0dXJlIG9mIEl0ZW0gYW5kIG90aGVyIG9iamVjdHMuIFxuICogQW5kIGtub3dzIGhvdyB0byBpbnNlcnQsIHVwZGF0ZSwgZGVsZXRlIGFuZCByZWFkIHRoZXNlIGRhdGEuXG4gKi9cblxuaW1wb3J0IFN0b3JlIGZyb20gJy4vc3RvcmUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXG4gICAgY29uc3QgZGVmYXVsdFJvdXRlID0gJ2FsbCc7XG5cbiAgICAvKiBBIGZhY3RvcnkgZnVuY3Rpb24gY3JlYXRpbmcgbmV3IGl0ZW0gb2JqZWN0LiAqL1xuICAgIGNvbnN0IEl0ZW0gPSAoKCkgPT4ge1xuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZSh0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB0ZXh0LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRJZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhc0NvbXBsZXRlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiAhIXRoaXMuY29tcGxldGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGVkKCkge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBjcmVhdGUsIGdldElkLCBnZXRUaXRsZSwgc2V0VGl0bGUsIGhhc0NvbXBsZXRlZCwgdG9nZ2xlQ29tcGxldGVkICB9O1xuXG4gICAgfSkoKTtcblxuICAgIC8qIFF1ZXJ5IGlzIGEgW2tleSwgdmFsdWVdIHBhaXIuXG4gICAgICogT25jZSBhIHF1ZXJ5IGlzIGNyZWF0ZWQsIGl0J3MgcmVhZC1vbmx5LiAqL1xuICAgIGZ1bmN0aW9uIFF1ZXJ5KGluS2V5LCBpblZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGluS2V5O1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGluVmFsdWU7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0S2V5KCkge1xuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgZ2V0S2V5LCBnZXRWYWx1ZSB9O1xuICAgIH1cblxuICAgIC8qIEEgd3JhcHBlciBmdW5jdGlvbi4gU2V0IGN1cnJlbnQgcm91dGUgdG8gZGVmYXVsdCB2YWx1ZSwgaWYgbm8gcm91dGUgZXhpdHMuICovXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFJvdXRlKCkge1xuICAgICAgICBjb25zdCByb3V0ZSA9IFN0b3JlLmdldEN1cnJlbnRSb3V0ZSgpO1xuICAgICAgICBpZiAoIXJvdXRlKSB7XG4gICAgICAgICAgICBTdG9yZS5zZXRDdXJyZW50Um91dGUoZGVmYXVsdFJvdXRlKTtcbiAgICAgICAgICAgIHJldHVybiBTdG9yZS5nZXRDdXJyZW50Um91dGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudFJvdXRlKHJvdXRlKSB7XG4gICAgICAgIFN0b3JlLnNldEN1cnJlbnRSb3V0ZShyb3V0ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzSXRlbSgpIHtcbiAgICAgICAgcmV0dXJuIFN0b3JlLmhhc0l0ZW0oKTtcbiAgICB9XG5cbiAgICAvKiByZXR1cm4gYW4gYXJyYXkgb2YgYWxsIGV4aXRpbmcgaXRlbXMgKi9cbiAgICBmdW5jdGlvbiBmaW5kQWxsSXRlbXMoKSB7XG4gICAgICAgIGlmICghaGFzSXRlbSgpKSByZXR1cm4gW107XG4gICAgICAgIGNvbnN0IGl0ZW1zT2JqID0gU3RvcmUuZ2V0SXRlbXNPYmplY3QoKTtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGl0ZW1zT2JqKSkge1xuICAgICAgICAgICAgYXJyLnB1c2goaXRlbXNPYmpbYCR7a2V5fWBdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIC8qIFJldHVybiBhIHN1Yi1hcnJheSB3aGljaCBtZWV0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHF1ZXJ5IFxuICAgICAqIHF1ZXJpZXMgaXMgYW4gYXJyYXkgb2YgW2tleSwgdmFsdWVdIHBhaXIgKi9cbiAgICBmdW5jdGlvbiBmaW5kSXRlbXMocXVlcmllcykge1xuICAgICAgICBjb25zdCBhbGxJdGVtc0FyciA9IGZpbmRBbGxJdGVtcygpO1xuICAgICAgICByZXR1cm4gYWxsSXRlbXNBcnIuZmlsdGVyKChpdGVtT2JqKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHF1ZXJpZXMuZm9yRWFjaCgocXVlcnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbU9ialtgJHtxdWVyeS5nZXRLZXkoKX1gXSAhPT0gcXVlcnkuZ2V0VmFsdWUoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qIENyZWF0ZSBhIG5ldyBJdGVtIG9iamVjdCBhbmQgc2F2ZSBpdCBpbnRvIHN0b3JhZ2UuICovXG4gICAgZnVuY3Rpb24gYWRkSXRlbSh0ZXh0KSB7XG4gICAgICAgIFN0b3JlLnVwZGF0ZUl0ZW1zKChpdGVtc09iaikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbU9iaiA9IEl0ZW0uY3JlYXRlKHRleHQpO1xuICAgICAgICAgICAgaXRlbXNPYmpbYCR7SXRlbS5nZXRJZC5jYWxsKGl0ZW1PYmopfWBdID0gaXRlbU9iajtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyogUmVtb3ZlIGFuIGl0ZW0gZnJvbSBzdG9yYWdlLiAqL1xuICAgIGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oaXRlbUlkKSB7XG4gICAgICAgIGlmICghaGFzSXRlbSgpKSByZXR1cm47XG4gICAgICAgIFN0b3JlLnVwZGF0ZUl0ZW1zKChpdGVtc09iaikgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIGl0ZW1zT2JqW2Ake2l0ZW1JZH1gXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyogVXBkYXRlIHByb3BlcnRpZXMgb2YgYW4gaXRlbS4gKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVJdGVtKGl0ZW1JZCwgaXRlbVZhbHVlKSB7XG4gICAgICAgIGlmICghaGFzSXRlbSgpKSByZXR1cm47XG4gICAgICAgIFN0b3JlLnVwZGF0ZUl0ZW1zKChpdGVtc09iaikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbU9iaiA9IGl0ZW1zT2JqW2Ake2l0ZW1JZH1gXTtcbiAgICAgICAgICAgIEl0ZW0uc2V0VGl0bGUuY2FsbChpdGVtT2JqLCBpdGVtVmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiBVcGRhdGUgaXRlbSBcImNvbXBsZXRlZFwiIHByb3BlcnR5LiAqL1xuICAgIGZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlZChpdGVtSWQpIHtcbiAgICAgICAgaWYgKCFoYXNJdGVtKCkpIHJldHVybjtcbiAgICAgICAgU3RvcmUudXBkYXRlSXRlbXMoKGl0ZW1zT2JqKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtT2JqID0gaXRlbXNPYmpbYCR7aXRlbUlkfWBdO1xuICAgICAgICAgICAgSXRlbS50b2dnbGVDb21wbGV0ZWQuY2FsbChpdGVtT2JqKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyogQmF0Y2ggcHJvY2Vzc2luZyBvZiB0b2dnbGluZyBpdGVtIFwiY29tcGxldGVkXCIgcHJvcGVydHkuICovXG4gICAgZnVuY3Rpb24gdG9nZ2xlQWxsKGl0ZW1zQXJyKSB7XG4gICAgICAgIFN0b3JlLnVwZGF0ZUl0ZW1zKChpdGVtc09iaikgPT4ge1xuICAgICAgICAgICAgaXRlbXNBcnIuZm9yRWFjaCgoaXRlbU9iaikgPT4ge1xuICAgICAgICAgICAgICAgIEl0ZW0udG9nZ2xlQ29tcGxldGVkLmNhbGwoaXRlbXNPYmpbYCR7SXRlbS5nZXRJZC5jYWxsKGl0ZW1PYmopfWBdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBJdGVtLCBRdWVyeSwgZ2V0Q3VycmVudFJvdXRlLCBzZXRDdXJyZW50Um91dGUsIGhhc0l0ZW0sIGZpbmRJdGVtcywgYWRkSXRlbSwgdG9nZ2xlQ29tcGxldGVkLCBkZWxldGVJdGVtLCB1cGRhdGVJdGVtLCB0b2dnbGVBbGwgfTtcblxufSkoKTsiLCIvKiBcbiAqIHN0b3JlLmpzIGtub3dzIG9ubHkgaG93IHRvIHJlYWQvd3JpdGUgc3RyaW5nIGRhdGEgZnJvbS90byBEb2N1bWVudC5sb2NhbFN0b3JhZ2UuXG4gKiBBbGwgaXRlbXMgYXJlIHN0b3JlZCBhcyBhIGxvbmcgc3RyaW5nIGluIGxvY2FsU3RvcmFnZS4gXG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cbiAgICBjb25zdCBpdGVtc0tleSA9ICd0b2RvSXRlbXMnO1xuICAgIGNvbnN0IHJvdXRlS2V5ID0gJ3RvZG9DdXJyZW50Um91dGUnO1xuXG4gICAgLyogQSBzaG90Y3V0IHRvIGNoZWNrIHdoZXRoZXIgdGhlcmUncyBhbnkgaXRlbSBsZWZ0IGluIHN0b3JhZ2UuICovXG4gICAgZnVuY3Rpb24gaGFzSXRlbSgpIHtcbiAgICAgICAgY29uc3QgaXRlbXNTdHIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaXRlbXNLZXkpO1xuICAgICAgICBpZiAoaXRlbXNTdHIgPT09ICd7fScpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyogR2V0IHRoZSBsb25nIHN0cmluZyBvZiBhbGwgaXRlbXMuXG4gICAgICogSlNPTi5wYXJzZSgpIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBzdHJpbmcgdG8gYW4gb2JqZWN0LiAqL1xuICAgIGZ1bmN0aW9uIGdldEl0ZW1zT2JqZWN0KCkge1xuICAgICAgICBjb25zdCBkYXRhID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW1zS2V5KTtcbiAgICAgICAgaWYgKGRhdGEpIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLyogSlNPTi5zdHJpbmdpZnkoKSBmdW5jdGlvbiBjb252ZXJ0cyBhbiBsYXJnZSBvYmplY3QgKGNvbnRhaW5zIGFsbCBpdGVtcyBkYXRhKSB0byBzdHJpbmcuXG4gICAgICogQW5kIHB1c2ggdGhlIGxvbmcgc3RyaW5nIGludG8gbG9jYWxTdHJvcmFnZS4gKi9cbiAgICBmdW5jdGlvbiBzZXRJdGVtc09iamVjdChpdGVtc09iaikge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbXNLZXksIEpTT04uc3RyaW5naWZ5KGl0ZW1zT2JqKSk7XG4gICAgfVxuXG4gICAgLyogQSBoZWxwZXIgZnVuY3Rpb24gcmVhZC93cml0ZSBkYXRhIGZyb20vdG8gbG9jYWxTdG9yYWdlLCBzbyB0aGF0IG1vZGVsLmpzIGNhbiBmb2N1cyBvbiBoaXMgd29yay4gKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVJdGVtcyhjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBpdGVtc09iaiA9IGdldEl0ZW1zT2JqZWN0KCk7XG4gICAgICAgIGNhbGxiYWNrKGl0ZW1zT2JqKTtcbiAgICAgICAgc2V0SXRlbXNPYmplY3QoaXRlbXNPYmopO1xuICAgIH1cblxuICAgIC8qIFNpbXBseSByZWFkIGN1cnJlbnQgcm91dGUgZnJvbSBsb2NhbFN0b3JhZ2UuICovXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFJvdXRlKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3JvdXRlS2V5fWApO1xuICAgIH1cblxuICAgIC8qIFVwZGF0ZSBjdXJyZW50IHJvdXRlLiAqL1xuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRSb3V0ZShyb3V0ZSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7cm91dGVLZXl9YCwgcm91dGUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGhhc0l0ZW0sIGdldEl0ZW1zT2JqZWN0LCBzZXRJdGVtc09iamVjdCwgdXBkYXRlSXRlbXMsIGdldEN1cnJlbnRSb3V0ZSwgc2V0Q3VycmVudFJvdXRlIH07XG5cbn0pKCk7IiwiLypcbiAqIEEgaGVscGVyIG9mIHZpZXcuanMuIE9ubHkgdXNlZCB0byBzdG9yZSBIVE1MIHRlbXBsYXRlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckl0ZW0oaXRlbU9iaikge1xuICAgICAgICBjb25zdCBzdHIgPSBcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJpdGVtXCIgZGF0YS1pZD0ke2l0ZW1PYmouaWR9PlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidG9nZ2xlIG1hdGVyaWFsLWljb25zXCIgdHlwZT1cImNoZWNrYm94XCI+IFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dFwiPiR7aXRlbU9iai50aXRsZX08L2xhYmVsPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJkZWxldGUgbWF0ZXJpYWwtaWNvbnNcIj5jbGVhcjwvaT5cbiAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJGb290ZXIoZ2l0aHViSW1nLCB5ZWFyKSB7XG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInRpcFwiPkRvdWJsZSBjbGljayB0byBlZGl0IHRvZG8uPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb3B5cmlnaHRcIj5Db3B5cmlnaHQgTUlUIMKpIGhpcmVtZS5zaGVuQGdtYWlsLmNvbSAmbmJzcDt8Jm5ic3A7IFNvdXJjZSBjb2RlIC0gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9oZWxsb1NoZW4vdG9kb1wiPjxpbWcgY2xhc3M9XCJnaXRodWJcIiBzcmM9XCIke2dpdGh1YkltZ31cIj48L2E+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ5ZWFyXCI+MjAyMS0ke3llYXJ9PC9kaXY+YDtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZW5kZXJJdGVtLCByZW5kZXJGb290ZXIgfTtcblxufSkoKTtcblxuICAgICIsIi8qXG4gKiBBbGwgRE9NIG1hbmlwdWxhdGlvbnMgZ28gdG8gdGhpcyBmaWxlLiBcbiAqL1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUuanMnO1xuaW1wb3J0IEdpdGh1YkltZyBmcm9tICcuLi9hc3NldHMvaW1nL2dpdGh1Yl9ibGFjay5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXG4gICAgY29uc3QgdG9kb0VsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvJyk7XG4gICAgY29uc3QgdGl0bGVFbGUgPSB0b2RvRWxlLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuICAgIGNvbnN0IGRhdGVFbGUgPSB0aXRsZUVsZS5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuICAgIGNvbnN0IGRheUVsZSA9IGRhdGVFbGUucXVlcnlTZWxlY3RvcignLmRheScpO1xuICAgIGNvbnN0IG1vbnRoRWxlID0gZGF0ZUVsZS5xdWVyeVNlbGVjdG9yKCcubW9udGgnKTtcbiAgICBjb25zdCB5ZWFyRWxlID0gZGF0ZUVsZS5xdWVyeVNlbGVjdG9yKCcueWVhcicpO1xuICAgIGNvbnN0IHdlZWtkYXlFbGUgPSB0aXRsZUVsZS5xdWVyeVNlbGVjdG9yKCcud2Vla2RheScpO1xuICAgIGNvbnN0IHRvZ2dsZUFsbEVsZSA9IHRvZG9FbGUucXVlcnlTZWxlY3RvcignLnRvZ2dsZUFsbCcpO1xuICAgIGNvbnN0IGFkZEl0ZW1Db250YWluZXJFbGUgPSB0b2RvRWxlLnF1ZXJ5U2VsZWN0b3IoJy5hZGRJdGVtQ29udGFpbmVyJyk7XG4gICAgY29uc3QgYWRkSXRlbUVsZSA9IGFkZEl0ZW1Db250YWluZXJFbGUucXVlcnlTZWxlY3RvcignLmFkZEl0ZW0nKTtcbiAgICBjb25zdCBhZGRJdGVtTGFiZWxFbGUgPSBhZGRJdGVtQ29udGFpbmVyRWxlLnF1ZXJ5U2VsZWN0b3IoJy5hZGRJdGVtTGFiZWwnKTtcbiAgICBjb25zdCBpdGVtc0JvYXJkRWxlID0gdG9kb0VsZS5xdWVyeVNlbGVjdG9yKCcuaXRlbXNCb2FyZCcpO1xuICAgIGNvbnN0IGl0ZW1zQ29udGFpbmVyRWxlID0gaXRlbXNCb2FyZEVsZS5xdWVyeVNlbGVjdG9yKCcuaXRlbXNDb250YWluZXInKTtcbiAgICBjb25zdCBpdGVtc0Zvb3RlckVsZSA9IGl0ZW1zQm9hcmRFbGUucXVlcnlTZWxlY3RvcignLml0ZW1zRm9vdGVyJyk7XG4gICAgY29uc3Qgcm91dGVCdG5zID0gaXRlbXNGb290ZXJFbGUucXVlcnlTZWxlY3RvckFsbCgnLnJvdXRlJyk7XG4gICAgY29uc3QgYWN0aXZlQ291bnRFbGUgPSBpdGVtc0Zvb3RlckVsZS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlSXRlbXNDb3VudCcpO1xuICAgIGNvbnN0IGFjdGl2ZUNvdW50TnVtRWxlID0gYWN0aXZlQ291bnRFbGUucXVlcnlTZWxlY3RvcignLmNvdW50Jyk7XG4gICAgY29uc3QgY29tcGxldGVkQ291bnRFbGUgPSBpdGVtc0Zvb3RlckVsZS5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkSXRlbXNDb3VudCcpO1xuICAgIGNvbnN0IGNvbXBsZXRlZENvdW50TnVtRWxlID0gY29tcGxldGVkQ291bnRFbGUucXVlcnlTZWxlY3RvcignLmNvdW50Jyk7XG4gICAgY29uc3QgZm9vdGVyRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpO1xuXG4gICAgZnVuY3Rpb24gc2hvd0RhdGUod2Vla2RheSwgZGF5LCBtb250aCwgeWVhcikge1xuICAgICAgICBkYXlFbGUudGV4dENvbnRlbnQgPSBkYXk7XG4gICAgICAgIG1vbnRoRWxlLnRleHRDb250ZW50ID0gbW9udGg7XG4gICAgICAgIHllYXJFbGUudGV4dENvbnRlbnQgPSB5ZWFyO1xuICAgICAgICB3ZWVrZGF5RWxlLnRleHRDb250ZW50ID0gd2Vla2RheTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckFkZEl0ZW1FbGUoKSB7XG4gICAgICAgIGFkZEl0ZW1FbGUudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kQWRkSXRlbShjYWxsYmFjaykge1xuICAgICAgICBhZGRJdGVtRWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGNhbGxiYWNrKGFkZEl0ZW1FbGUudmFsdWUpLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZEFkZEl0ZW1MYWJlbCgpIHtcbiAgICAgICAgYWRkSXRlbUVsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IGhpZGVBZGRJdGVtTGFiZWwoKSk7XG4gICAgICAgIGFkZEl0ZW1FbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gaGlkZUFkZEl0ZW1MYWJlbCgpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlQWRkSXRlbUxhYmVsKCkge1xuICAgICAgICBpZiAoYWRkSXRlbUVsZS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGFkZEl0ZW1MYWJlbEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRJdGVtTGFiZWxFbGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgZnVuY3Rpb24gYmluZFRvZ2dsZUNvbXBsZXRlZCh0YXJnZXQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUnKTtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgICAgY2FsbGJhY2sodGFyZ2V0LmRhdGFzZXQuaWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kRGVsZXRlSXRlbSh0YXJnZXQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyk7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKHRhcmdldC5kYXRhc2V0LmlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZEVkaXRJdGVtKHRhcmdldCwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnRleHQnKTtcbiAgICAgICAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdlZGl0dGluZycpO1xuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgICAgICAgIGxhYmVsLmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdHRpbmcnKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgZmFsc2UpO1xuICAgICAgICAgICAgY2FsbGJhY2sodGFyZ2V0LmRhdGFzZXQuaWQsIGxhYmVsLnRleHRDb250ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudCh0YXJnZXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykgbGFiZWwuYmx1cigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kQ2hhbmdlUm91dGUoZWFjaEJ0bkNhbGxiYWNrLCBlbmRpbmdDYWxsYmFjaykge1xuICAgICAgICByb3V0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZWFjaEJ0bkNhbGxiYWNrKGJ0bi5kYXRhc2V0LnJvdXRlKTtcbiAgICAgICAgICAgICAgICByb3V0ZUJ0bnMuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbmRpbmdDYWxsYmFjaygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcmtDdXJyZW50Um91dGUocm91dGUpIHtcbiAgICAgICAgcm91dGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICAgICAgaWYgKGJ0bi5kYXRhc2V0LnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpbmRDbGVhckNvbXBsZXRlZEl0ZW1zKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbXBsZXRlZENvdW50RWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FsbGJhY2soKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZFRvZ2dsZUFsbChjYWxsYmFjaykge1xuICAgICAgICB0b2dnbGVBbGxFbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYWxsYmFjaygpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVBY3RpdmVJdGVtc0NvdW50KGNvdW50KSB7XG4gICAgICAgIGFjdGl2ZUNvdW50TnVtRWxlLnRleHRDb250ZW50ID0gY291bnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29tcGxldGVkSXRlbXNDb3VudChjb3VudCkge1xuICAgICAgICBjb21wbGV0ZWRDb3VudE51bUVsZS50ZXh0Q29udGVudCA9IGNvdW50O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dDb21wbGV0ZWRJdGVtc0NvdW50KCkge1xuICAgICAgICBjb21wbGV0ZWRDb3VudEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUNvbXBsZXRlZEl0ZW1zQ291bnQoKSB7XG4gICAgICAgIGNvbXBsZXRlZENvdW50RWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93SXRlbXNCb2FyZCgpIHtcbiAgICAgICAgaXRlbXNCb2FyZEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgYWRkSXRlbUNvbnRhaW5lckVsZS5jbGFzc0xpc3QucmVtb3ZlKCdhbG9uZScpO1xuICAgICAgICBhZGRJdGVtRWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2Fsb25lJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUl0ZW1zQm9hcmQoKSB7XG4gICAgICAgIGl0ZW1zQm9hcmRFbGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGFkZEl0ZW1Db250YWluZXJFbGUuY2xhc3NMaXN0LmFkZCgnYWxvbmUnKTtcbiAgICAgICAgYWRkSXRlbUVsZS5jbGFzc0xpc3QuYWRkKCdhbG9uZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVUb2dnbGVBbGwoKSB7XG4gICAgICAgIHRvZ2dsZUFsbEVsZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7IFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUFsbENoZWNrZWQoKSB7XG4gICAgICAgIHRvZ2dsZUFsbEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIHRvZ2dsZUFsbEVsZS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVBbGxOb3RDaGVja2VkKCkge1xuICAgICAgICB0b2dnbGVBbGxFbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB0b2dnbGVBbGxFbGUuY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckl0ZW1zKCkge1xuICAgICAgICBpdGVtc0NvbnRhaW5lckVsZS5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93SXRlbShpdGVtT2JqLCBjYWxsYmFjaykge1xuICAgICAgICBpdGVtc0NvbnRhaW5lckVsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIFRlbXBsYXRlLnJlbmRlckl0ZW0oaXRlbU9iaikpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBpdGVtc0NvbnRhaW5lckVsZS5xdWVyeVNlbGVjdG9yKGAuaXRlbVtkYXRhLWlkPVwiJHtpdGVtT2JqLmlkfVwiXWApO1xuICAgICAgICBpZiAoaXRlbU9iai5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUnKTtcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKHRhcmdldCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0Zvb3RlcigpIHtcbiAgICAgICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgZm9vdGVyRWxlLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIFRlbXBsYXRlLnJlbmRlckZvb3RlcihHaXRodWJJbWcsIHllYXIpKTtcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4geyBzaG93RGF0ZSwgY2xlYXJBZGRJdGVtRWxlLCBiaW5kQWRkSXRlbSwgYmluZEFkZEl0ZW1MYWJlbCwgYmluZFRvZ2dsZUNvbXBsZXRlZCwgYmluZERlbGV0ZUl0ZW0sIGJpbmRFZGl0SXRlbSwgYmluZENoYW5nZVJvdXRlLCBtYXJrQ3VycmVudFJvdXRlLCBiaW5kQ2xlYXJDb21wbGV0ZWRJdGVtcywgYmluZFRvZ2dsZUFsbCwgdXBkYXRlQWN0aXZlSXRlbXNDb3VudCwgdXBkYXRlQ29tcGxldGVkSXRlbXNDb3VudCwgc2hvd0NvbXBsZXRlZEl0ZW1zQ291bnQsIGhpZGVDb21wbGV0ZWRJdGVtc0NvdW50LCBoaWRlSXRlbXNCb2FyZCwgc2hvd0l0ZW1zQm9hcmQsIGhpZGVUb2dnbGVBbGwsIHRvZ2dsZUFsbENoZWNrZWQsIHRvZ2dsZUFsbE5vdENoZWNrZWQsIHJlbW92ZUVsZW1lbnQsIGNsZWFySXRlbXMsIHNob3dJdGVtLCBzaG93Rm9vdGVyIH07XG5cbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vXCI7IiwiaW1wb3J0IGNzcyBmcm9tICcuLi9jc3MvaW5kZXguY3NzJztcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5cbigoKSA9PiB7XG4gICAgQ29udHJvbGxlci5lbmFibGVBZGRJdGVtKCk7XG4gICAgQ29udHJvbGxlci5lbmFibGVDaGFuZ2VSb3V0ZSgpO1xuICAgIENvbnRyb2xsZXIuZW5hYmxlQ2xlYXJDb21wbGV0ZWRJdGVtcygpO1xuICAgIENvbnRyb2xsZXIuZW5hYmxlVG9nZ2xlQWxsKCk7XG4gICAgQ29udHJvbGxlci5zaG93RGF0ZSgpO1xuICAgIENvbnRyb2xsZXIuc2hvd0l0ZW1zKCk7XG4gICAgQ29udHJvbGxlci51cGRhdGVJdGVtc0NvdW50KCk7XG4gICAgQ29udHJvbGxlci5zaG93Rm9vdGVyKCk7XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==