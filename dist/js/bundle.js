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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black: #24292D;\n    --black-dimmer: #2B3137;\n    --gray: #58606a;\n    --light-gray: #949DA7;\n    --lighter-gray: #B4BDC8;\n    --border-gray: #e7e9ea;\n    --back-gray: #f6f8fa;\n    --white: #FFFFFF;\n    --red: #DB2C00;\n    --green: #2DA44E;\n    --blue: #0D74E7;\n    --blue2: #0969DA;\n    --purple: #6e5494;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--back-gray);\n}\n\n.logo {\n    height: 6rem;\n    font-size: 2.5rem;\n    font-weight: 700;\n    font-family: 'Poppins', sans-serif;\n    color: var(--black);\n    display: grid;\n    align-items: end;\n    justify-items: center;\n}\n\n.main {\n    width: 100%;\n    margin: 2rem 0;\n    display: grid;\n    justify-content: center;\n}\n\n.todo {\n    width: 36rem;\n    border-radius: .5rem;\n    box-shadow: 1px 1px 4px var(--border-gray);\n}\n\n.todo > .title {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    width: 100%;\n    height: 7rem;\n    padding: 2rem 2.5rem;\n    border: 1px solid var(--border-gray);\n    border-bottom: 0;\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.todo .date {\n    width: 7rem;\n    height: 3rem;\n    color: var(--gray);\n    display: grid;\n    grid-template-columns: 3rem 3rem;\n    grid-template-rows: 1.5rem 1.5rem;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.todo .day {\n    font-size: 3rem;\n    grid-row: 1 / 3;\n    grid-column: 1 / 2;\n}\n\n.todo .month {\n    justify-self: start;\n    align-self: end;\n    font-size: 1rem;\n    grid-row: 1 / 2;\n    grid-column: 2 / 3;\n    padding-left: 1rem;\n}\n\n.todo .year {\n    justify-self: start;\n    align-self: start;\n    font-size: 1rem;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    padding-left: 1rem;\n}\n\n\n.todo .weekday {\n    font-size: 1.5rem;\n    font-weight: 100;\n}\n\n.todo > .addItemContainer {\n    width: 100%;\n    height: 4rem;\n    font-size: 1.5rem;\n    border: 1px solid var(--border-gray);\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 3rem 1fr;\n    align-items: center;\n}\n\n.todo > .addItemContainer.alone {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n.todo .toggleAll {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n\n.todo .toggleAll::after {\n    font-size: 1.5rem;\n    margin: 0 .75rem;\n    content: \"radio_button_unchecked\";\n    color: var(--border-gray);\n}\n\n.todo .toggleAll:checked::after {\n    content: \"check_circle\";\n    color: var(--green);\n    opacity: .6;\n}\n\n.todo .toggleAll.hide {\n    opacity: 0;\n}\n\n.todo .addItemForm {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 100;\n    height: 100%;\n    width: 100%;\n    position: relative;\n}\n\n.todo .addItemLabel {\n    position: absolute;\n    left: 1px;\n    top: 1.2rem;\n    color: var(--lighter-gray);\n    user-select: none;\n}\n\n.todo .addItemLabel.hide {\n    display: none;\n}\n\n.todo .addItem {\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    border-top-right-radius: .5rem;\n    font-size: 1.5rem;\n    outline: none;\n    color: var(--black);\n}\n\n.todo .addItem.alone {\n    border-bottom-right-radius: .5rem;\n}\n\n.todo > .itemsBoard {\n    display: block;\n}\n\n.todo > .itemsBoard.hidden {\n    display: none;\n}\n\n.todo .item {\n    width: 100%;\n    margin: -1px 0;\n    height: 4rem;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5rem;\n    border: 1px solid var(--border-gray); \n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 3rem 1fr 3rem;\n    align-items: center;\n}\n\n.todo .item > .toggle {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n\n.todo .item > .toggle::after {\n    content: \"radio_button_unchecked\";\n    margin: 0 .75rem;\n    color: var(--border-gray);\n    opacity: .6;\n}\n\n.todo .item > .toggle:checked::after {\n    content: \"check_circle\";\n    color: var(--green);\n}\n\n.todo .item > .text {\n    height: 100%;\n    color: var(--gray);\n    display: grid;\n    align-items: center;\n}\n\n.todo .item.completed > .text {\n    opacity: .6;\n    text-decoration: line-through;\n}\n\n.todo .item > .text.editting {\n    outline-color: var(--border-gray);\n    background-color: var(--back-gray);\n}\n\n.todo .item > .delete {\n    opacity: 0;\n    justify-self: center;\n    cursor: pointer;\n    user-select: none;\n    margin-right: 1rem;\n}\n\n.todo .item:hover > .delete {\n    opacity: 1;\n    color: var(--red);\n}\n\n.todo .itemsFooter {\n    width: 100%;\n    height: 4rem;\n    font-size: .75rem;\n    font-family: 'Poppins', sans-serif;\n    border: 1px solid var(--border-gray);\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter > .activeItemsCount,\n.todo .itemsFooter > .completedItemsCount {\n    height: 2rem;\n    margin: 0 1rem;\n    color: var(--gray);\n    user-select: none;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n}\n\n.todo .itemsFooter > .activeItemsCount {\n    width: 4.5rem;\n}\n\n.todo .itemsFooter > .completedItemsCount {\n    width: 11rem;\n    border-radius: .25rem;\n    cursor: pointer;\n    border: 1px solid var(--border-gray);\n    background-color: var(--back-gray);\n}\n\n.todo .itemsFooter > .completedItemsCount.hide {\n    opacity: 0;\n    cursor: auto;\n}\n\n.todo .itemsFooter > .routes {\n    height: 2rem;\n    width: 14rem;\n    margin: 0 1rem;\n    user-select: none;\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 3rem 4rem 6rem;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n    gap: .5rem;\n}\n\n.todo .itemsFooter .route {\n    padding: .25rem .75rem;\n    color: var(--gray);\n    border-radius: .25rem;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter .route:hover {\n    border: 1px solid var(--border-gray);\n}\n\n.todo .itemsFooter .route.current {\n    background-color: var(--back-gray);\n    border: 1px solid var(--border-gray);\n}\n\n.footer {\n    height: 4.5rem;\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n    font-size: .75rem;\n    color: var(--lighter-gray);\n    display: grid;\n    grid-template-rows: repeat(3, 1.5rem);\n    align-items: center;\n    justify-items: center;\n}\n\n.footer .tip,\n.footer .copyright,\n.footer .year {\n    height: 1.5rem;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    gap: .25rem;\n}\n\n.footer a {\n    width: 1rem;\n    height: 1rem;\n}\n\n.footer .github {\n    width: 100%;\n    height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('./norm.css');\n@import url('https://fonts.googleapis.com/icon?family=Material+Icons');\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&family=Roboto:wght@100;400;500;700&display=swap');\n\n:root {\n    --black: #24292D;\n    --black-dimmer: #2B3137;\n    --gray: #58606a;\n    --light-gray: #949DA7;\n    --lighter-gray: #B4BDC8;\n    --border-gray: #e7e9ea;\n    --back-gray: #f6f8fa;\n    --white: #FFFFFF;\n    --red: #DB2C00;\n    --green: #2DA44E;\n    --blue: #0D74E7;\n    --blue2: #0969DA;\n    --purple: #6e5494;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--back-gray);\n}\n\n.logo {\n    height: 6rem;\n    font-size: 2.5rem;\n    font-weight: 700;\n    font-family: 'Poppins', sans-serif;\n    color: var(--black);\n    display: grid;\n    align-items: end;\n    justify-items: center;\n}\n\n.main {\n    width: 100%;\n    margin: 2rem 0;\n    display: grid;\n    justify-content: center;\n}\n\n.todo {\n    width: 36rem;\n    border-radius: .5rem;\n    box-shadow: 1px 1px 4px var(--border-gray);\n}\n\n.todo > .title {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    width: 100%;\n    height: 7rem;\n    padding: 2rem 2.5rem;\n    border: 1px solid var(--border-gray);\n    border-bottom: 0;\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.todo .date {\n    width: 7rem;\n    height: 3rem;\n    color: var(--gray);\n    display: grid;\n    grid-template-columns: 3rem 3rem;\n    grid-template-rows: 1.5rem 1.5rem;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.todo .day {\n    font-size: 3rem;\n    grid-row: 1 / 3;\n    grid-column: 1 / 2;\n}\n\n.todo .month {\n    justify-self: start;\n    align-self: end;\n    font-size: 1rem;\n    grid-row: 1 / 2;\n    grid-column: 2 / 3;\n    padding-left: 1rem;\n}\n\n.todo .year {\n    justify-self: start;\n    align-self: start;\n    font-size: 1rem;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    padding-left: 1rem;\n}\n\n\n.todo .weekday {\n    font-size: 1.5rem;\n    font-weight: 100;\n}\n\n.todo > .addItemContainer {\n    width: 100%;\n    height: 4rem;\n    font-size: 1.5rem;\n    border: 1px solid var(--border-gray);\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 3rem 1fr;\n    align-items: center;\n}\n\n.todo > .addItemContainer.alone {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n.todo .toggleAll {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n\n.todo .toggleAll::after {\n    font-size: 1.5rem;\n    margin: 0 .75rem;\n    content: \"radio_button_unchecked\";\n    color: var(--border-gray);\n}\n\n.todo .toggleAll:checked::after {\n    content: \"check_circle\";\n    color: var(--green);\n    opacity: .6;\n}\n\n.todo .toggleAll.hide {\n    opacity: 0;\n}\n\n.todo .addItemForm {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 100;\n    height: 100%;\n    width: 100%;\n    position: relative;\n}\n\n.todo .addItemLabel {\n    position: absolute;\n    left: 1px;\n    top: 1.2rem;\n    color: var(--lighter-gray);\n    user-select: none;\n}\n\n.todo .addItemLabel.hide {\n    display: none;\n}\n\n.todo .addItem {\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    border-top-right-radius: .5rem;\n    font-size: 1.5rem;\n    outline: none;\n    color: var(--black);\n}\n\n.todo .addItem.alone {\n    border-bottom-right-radius: .5rem;\n}\n\n.todo > .itemsBoard {\n    display: block;\n}\n\n.todo > .itemsBoard.hidden {\n    display: none;\n}\n\n.todo .item {\n    width: 100%;\n    margin: -1px 0;\n    height: 4rem;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5rem;\n    border: 1px solid var(--border-gray); \n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 3rem 1fr 3rem;\n    align-items: center;\n}\n\n.todo .item > .toggle {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n\n.todo .item > .toggle::after {\n    content: \"radio_button_unchecked\";\n    margin: 0 .75rem;\n    color: var(--border-gray);\n    opacity: .6;\n}\n\n.todo .item > .toggle:checked::after {\n    content: \"check_circle\";\n    color: var(--green);\n}\n\n.todo .item > .text {\n    height: 100%;\n    color: var(--gray);\n    display: grid;\n    align-items: center;\n}\n\n.todo .item.completed > .text {\n    opacity: .6;\n    text-decoration: line-through;\n}\n\n.todo .item > .text.editting {\n    outline-color: var(--border-gray);\n    background-color: var(--back-gray);\n}\n\n.todo .item > .delete {\n    opacity: 0;\n    justify-self: center;\n    cursor: pointer;\n    user-select: none;\n    margin-right: 1rem;\n}\n\n.todo .item:hover > .delete {\n    opacity: 1;\n    color: var(--red);\n}\n\n.todo .itemsFooter {\n    width: 100%;\n    height: 4rem;\n    font-size: .75rem;\n    font-family: 'Poppins', sans-serif;\n    border: 1px solid var(--border-gray);\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter > .activeItemsCount,\n.todo .itemsFooter > .completedItemsCount {\n    height: 2rem;\n    margin: 0 1rem;\n    color: var(--gray);\n    user-select: none;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n}\n\n.todo .itemsFooter > .activeItemsCount {\n    width: 4.5rem;\n}\n\n.todo .itemsFooter > .completedItemsCount {\n    width: 11rem;\n    border-radius: .25rem;\n    cursor: pointer;\n    border: 1px solid var(--border-gray);\n    background-color: var(--back-gray);\n}\n\n.todo .itemsFooter > .completedItemsCount.hide {\n    opacity: 0;\n    cursor: auto;\n}\n\n.todo .itemsFooter > .routes {\n    height: 2rem;\n    width: 14rem;\n    margin: 0 1rem;\n    user-select: none;\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 3rem 4rem 6rem;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n    gap: .5rem;\n}\n\n.todo .itemsFooter .route {\n    padding: .25rem .75rem;\n    color: var(--gray);\n    border-radius: .25rem;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter .route:hover {\n    border: 1px solid var(--border-gray);\n}\n\n.todo .itemsFooter .route.current {\n    background-color: var(--back-gray);\n    border: 1px solid var(--border-gray);\n}\n\n.footer {\n    height: 4.5rem;\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n    font-size: .75rem;\n    color: var(--lighter-gray);\n    display: grid;\n    grid-template-rows: repeat(3, 1.5rem);\n    align-items: center;\n    justify-items: center;\n}\n\n.footer .tip,\n.footer .copyright,\n.footer .year {\n    height: 1.5rem;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    gap: .25rem;\n}\n\n.footer a {\n    width: 1rem;\n    height: 1rem;\n}\n\n.footer .github {\n    width: 100%;\n    height: 100%;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/js/view.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/js/model.js");
/*
 * controller.js is a general manager.
 * He is the only one who knows all the logic of different features.
 * But he is blind from both data and DOM.
 * model.js and view.js do these concrete tasks for him.
 */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {
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
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].showDate(MyDate.getToday());
  }

  /* Call view to print footer. */
  function showFooter() {
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].showFooter();
  }

  /* Pre-define queries for three different routes: all, active and completed.
   * Model.find() function accepts only an array of Query as input to filter items we want. */
  const ItemsQuery = (route) => {
    const queryBank = {
      all: [],
      active: [_model__WEBPACK_IMPORTED_MODULE_1__["default"].Query('completed', false)],
      completed: [_model__WEBPACK_IMPORTED_MODULE_1__["default"].Query('completed', true)],
    };
    return queryBank[route];
  };

  /* Get the queries from ItemsQuery, and feed them to Model.findItems() function. */
  function filterItems(route) {
    return _model__WEBPACK_IMPORTED_MODULE_1__["default"].findItems(ItemsQuery(route));
  }

  /* Update the count number of three different routes(all, active and completed) listed
   * on todo board.
   * The entire items board will be hidden if no items left in items list. */
  function updateItemsCount() {
    const activeCount = filterItems('active').length;
    const completedCount = filterItems('completed').length;
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].updateActiveItemsCount(activeCount);
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].updateCompletedItemsCount(completedCount);
    if (completedCount === 0) {
      _view__WEBPACK_IMPORTED_MODULE_0__["default"].hideCompletedItemsCount();
    } else {
      _view__WEBPACK_IMPORTED_MODULE_0__["default"].showCompletedItemsCount();
    }
    if (activeCount + completedCount === 0) { // hide the entire item board if 0 item left
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
    const itemsObjArr = filterItems(_model__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentRoute());
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].clearItems();
    itemsObjArr.forEach((itemObj) => {
      _view__WEBPACK_IMPORTED_MODULE_0__["default"].showItem(itemObj, (target) => {
        // eslint-disable-next-line no-use-before-define
        _view__WEBPACK_IMPORTED_MODULE_0__["default"].bindToggleCompleted(target, toggleCompleted);
        // eslint-disable-next-line no-use-before-define
        _view__WEBPACK_IMPORTED_MODULE_0__["default"].bindDeleteItem(target, deleteItem);
        // eslint-disable-next-line no-use-before-define
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
    _model__WEBPACK_IMPORTED_MODULE_1__["default"].toggleCompleted(itemId);
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
      _model__WEBPACK_IMPORTED_MODULE_1__["default"].updateItem(itemId, itemValue);
    }
  }

  /* Main logic of switching route. */
  function changeRoute(route) {
    _model__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentRoute(route);
    showItems();
  }

  /* Main logic of "clear all completed" button. */
  function clearAllCompletedItems() {
    const completedItemsArr = _model__WEBPACK_IMPORTED_MODULE_1__["default"].findItems(ItemsQuery('completed'));
    completedItemsArr.forEach((itemObj) => {
      const id = _model__WEBPACK_IMPORTED_MODULE_1__["default"].Item.getId.call(itemObj);
      _model__WEBPACK_IMPORTED_MODULE_1__["default"].deleteItem(id);
    });
    showItems();
    updateItemsCount();
  }

  /* Main logic of "toggle all" button. */
  function toggleAll() {
    if (_model__WEBPACK_IMPORTED_MODULE_1__["default"].hasItem()) {
      const activeItemsArr = _model__WEBPACK_IMPORTED_MODULE_1__["default"].findItems(ItemsQuery('active'));
      if (activeItemsArr.length > 0) {
        _model__WEBPACK_IMPORTED_MODULE_1__["default"].toggleAll(activeItemsArr);
      } else {
        _model__WEBPACK_IMPORTED_MODULE_1__["default"].toggleAll(_model__WEBPACK_IMPORTED_MODULE_1__["default"].findItems(ItemsQuery('completed')));
      }
      showItems();
      updateItemsCount();
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
    const currentRoute = _model__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentRoute();
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].bindChangeRoute(changeRoute, () => _view__WEBPACK_IMPORTED_MODULE_0__["default"].markCurrentRoute(currentRoute));
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {
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
    const route = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentRoute();
    if (!route) {
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].setCurrentRoute(defaultRoute);
      return _store__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentRoute();
    }
    return route;
  }

  function setCurrentRoute(route) {
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].setCurrentRoute(route);
  }

  function hasItem() {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].hasItem();
  }

  /* return an array of all exiting items */
  function findAllItems() {
    if (!hasItem()) return [];
    const itemsObj = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getItemsObject();
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
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
      const itemObj = Item.create(text);
      // eslint-disable-next-line no-param-reassign
      itemsObj[`${Item.getId.call(itemObj)}`] = itemObj;
    });
  }

  /* Remove an item from storage. */
  function deleteItem(itemId) {
    if (!hasItem()) return;
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
      // eslint-disable-next-line no-param-reassign
      delete itemsObj[`${itemId}`];
    });
  }

  /* Update properties of an item. */
  function updateItem(itemId, itemValue) {
    if (!hasItem()) return;
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
      const itemObj = itemsObj[`${itemId}`];
      Item.setTitle.call(itemObj, itemValue);
    });
  }

  /* Update item "completed" property. */
  function toggleCompleted(itemId) {
    if (!hasItem()) return;
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
      const itemObj = itemsObj[`${itemId}`];
      Item.toggleCompleted.call(itemObj);
    });
  }

  /* Batch processing of toggling item "completed" property. */
  function toggleAll(itemsArr) {
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
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
    const str = `<div class="item" data-id=${itemObj.id}>
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
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/js/template.js");
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
    routeBtns.forEach((btn) => {
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
    const target = itemsContainerEle.querySelector(`.item[data-id="${itemObj.id}"]`);
    if (itemObj.completed) {
      target.classList.add('completed');
      const checkbox = target.querySelector('.toggle');
      checkbox.checked = true;
    }
    callback(target);
  }

  function bindAddItem(callback) {
    addItemEle.addEventListener('change', () => callback(addItemEle.value), false);
  }

  function bindAddItemLabel() {
    addItemEle.addEventListener('input', () => hideAddItemLabel());
    addItemEle.addEventListener('change', () => hideAddItemLabel());
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

  function bindClearCompletedItems(callback) {
    completedCountEle.addEventListener('click', () => callback());
  }

  function bindToggleAll(callback) {
    toggleAllEle.addEventListener('click', () => callback());
  }

  function showFooter() {
    const year = new Date().getFullYear();
    footerEle.insertAdjacentHTML('afterbegin', _template__WEBPACK_IMPORTED_MODULE_0__["default"].renderFooter(_assets_img_github_black_png__WEBPACK_IMPORTED_MODULE_1__, year));
  }

  return {
    showDate,
    clearAddItemEle,
    bindAddItem,
    bindAddItemLabel,
    bindToggleCompleted,
    bindDeleteItem,
    bindEditItem,
    bindChangeRoute,
    markCurrentRoute,
    bindClearCompletedItems,
    bindToggleAll,
    updateActiveItemsCount,
    updateCompletedItemsCount,
    showCompletedItemsCount,
    hideCompletedItemsCount,
    hideItemsBoard,
    showItemsBoard,
    hideToggleAll,
    toggleAllChecked,
    toggleAllNotChecked,
    removeElement,
    clearItems,
    showItem,
    showFooter,
  };
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
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/js/controller.js");
// eslint-disable-next-line no-unused-vars



(() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFB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RUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRCw0REFBbUI7QUFDekUscUVBQXFFLFdBQVc7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyw4REFBcUIsQ0FBQyx5REFBUztBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdE5MO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZkE7QUFDbUM7QUFDRzs7QUFFdEM7QUFDQSxFQUFFLGlFQUF3QjtBQUMxQixFQUFFLHFFQUE0QjtBQUM5QixFQUFFLDZFQUFvQztBQUN0QyxFQUFFLG1FQUEwQjtBQUM1QixFQUFFLDREQUFtQjtBQUNyQixFQUFFLDZEQUFvQjtBQUN0QixFQUFFLG9FQUEyQjtBQUM3QixFQUFFLDhEQUFxQjtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3NzL25vcm0uY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL21vZGVsLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDs0MDA7NzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJsYWNrOiAjMjQyOTJEO1xcbiAgICAtLWJsYWNrLWRpbW1lcjogIzJCMzEzNztcXG4gICAgLS1ncmF5OiAjNTg2MDZhO1xcbiAgICAtLWxpZ2h0LWdyYXk6ICM5NDlEQTc7XFxuICAgIC0tbGlnaHRlci1ncmF5OiAjQjRCREM4O1xcbiAgICAtLWJvcmRlci1ncmF5OiAjZTdlOWVhO1xcbiAgICAtLWJhY2stZ3JheTogI2Y2ZjhmYTtcXG4gICAgLS13aGl0ZTogI0ZGRkZGRjtcXG4gICAgLS1yZWQ6ICNEQjJDMDA7XFxuICAgIC0tZ3JlZW46ICMyREE0NEU7XFxuICAgIC0tYmx1ZTogIzBENzRFNztcXG4gICAgLS1ibHVlMjogIzA5NjlEQTtcXG4gICAgLS1wdXJwbGU6ICM2ZTU0OTQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMnJlbSAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICB3aWR0aDogMzZyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi50b2RvID4gLnRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA3cmVtO1xcbiAgICBwYWRkaW5nOiAycmVtIDIuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvZG8gLmRhdGUge1xcbiAgICB3aWR0aDogN3JlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAzcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNXJlbSAxLjVyZW07XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuZGF5IHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLnRvZG8gLm1vbnRoIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi50b2RvIC55ZWFyIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuXFxuLnRvZG8gLndlZWtkYXkge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLnRvZG8gPiAuYWRkSXRlbUNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gPiAuYWRkSXRlbUNvbnRhaW5lci5hbG9uZSB7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC41cmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVyZW07XFxufVxcblxcbi50b2RvIC50b2dnbGVBbGwge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbDo6YWZ0ZXIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAwIC43NXJlbTtcXG4gICAgY29udGVudDogXFxcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcXFwiO1xcbiAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsOmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcImNoZWNrX2NpcmNsZVxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIG9wYWNpdHk6IC42O1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsLmhpZGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbUZvcm0ge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW1MYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMXB4O1xcbiAgICB0b3A6IDEuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbUxhYmVsLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbS5hbG9uZSB7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNXJlbTtcXG59XFxuXFxuLnRvZG8gPiAuaXRlbXNCb2FyZCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udG9kbyA+IC5pdGVtc0JvYXJkLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvIC5pdGVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogLTFweCAwO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDFmciAzcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50b2dnbGUge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudG9nZ2xlOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJyYWRpb19idXR0b25fdW5jaGVja2VkXFxcIjtcXG4gICAgbWFyZ2luOiAwIC43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgb3BhY2l0eTogLjY7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZTpjaGVja2VkOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJjaGVja19jaXJjbGVcXFwiO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50ZXh0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtLmNvbXBsZXRlZCA+IC50ZXh0IHtcXG4gICAgb3BhY2l0eTogLjY7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50ZXh0LmVkaXR0aW5nIHtcXG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC5kZWxldGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udG9kbyAuaXRlbTpob3ZlciA+IC5kZWxldGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5hY3RpdmVJdGVtc0NvdW50LFxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5jb21wbGV0ZWRJdGVtc0NvdW50IHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmFjdGl2ZUl0ZW1zQ291bnQge1xcbiAgICB3aWR0aDogNC41cmVtO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuY29tcGxldGVkSXRlbXNDb3VudCB7XFxuICAgIHdpZHRoOiAxMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQuaGlkZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGN1cnNvcjogYXV0bztcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLnJvdXRlcyB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDE0cmVtO1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDRyZW0gNnJlbTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciAucm91dGUge1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gLjc1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgLnJvdXRlOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgLnJvdXRlLmN1cnJlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWdyYXkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDQuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxLjVyZW0pO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgLnRpcCxcXG4uZm9vdGVyIC5jb3B5cmlnaHQsXFxuLmZvb3RlciAueWVhciB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC4yNXJlbTtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLmZvb3RlciAuZ2l0aHViIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFD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O0lBQzFCLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJy4vbm9ybS5jc3MnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucycpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7NDAwOzcwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1ibGFjazogIzI0MjkyRDtcXG4gICAgLS1ibGFjay1kaW1tZXI6ICMyQjMxMzc7XFxuICAgIC0tZ3JheTogIzU4NjA2YTtcXG4gICAgLS1saWdodC1ncmF5OiAjOTQ5REE3O1xcbiAgICAtLWxpZ2h0ZXItZ3JheTogI0I0QkRDODtcXG4gICAgLS1ib3JkZXItZ3JheTogI2U3ZTllYTtcXG4gICAgLS1iYWNrLWdyYXk6ICNmNmY4ZmE7XFxuICAgIC0td2hpdGU6ICNGRkZGRkY7XFxuICAgIC0tcmVkOiAjREIyQzAwO1xcbiAgICAtLWdyZWVuOiAjMkRBNDRFO1xcbiAgICAtLWJsdWU6ICMwRDc0RTc7XFxuICAgIC0tYmx1ZTI6ICMwOTY5REE7XFxuICAgIC0tcHVycGxlOiAjNmU1NDk0O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDJyZW0gMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIHtcXG4gICAgd2lkdGg6IDM2cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4udG9kbyA+IC50aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogN3JlbTtcXG4gICAgcGFkZGluZzogMnJlbSAyLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b2RvIC5kYXRlIHtcXG4gICAgd2lkdGg6IDdyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gM3JlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVyZW0gMS41cmVtO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLmRheSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi50b2RvIC5tb250aCB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udG9kbyAueWVhciB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcblxcbi50b2RvIC53ZWVrZGF5IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi50b2RvID4gLmFkZEl0ZW1Db250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvID4gLmFkZEl0ZW1Db250YWluZXIuYWxvbmUge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi50b2RvIC50b2dnbGVBbGw6OmFmdGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMCAuNzVyZW07XFxuICAgIGNvbnRlbnQ6IFxcXCJyYWRpb19idXR0b25fdW5jaGVja2VkXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbDpjaGVja2VkOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJjaGVja19jaXJjbGVcXFwiO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBvcGFjaXR5OiAuNjtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbC5oaWRlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW1Gb3JtIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtTGFiZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDFweDtcXG4gICAgdG9wOiAxLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW1MYWJlbC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW0ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW0uYWxvbmUge1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVyZW07XFxufVxcblxcbi50b2RvID4gLml0ZW1zQm9hcmQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRvZG8gPiAuaXRlbXNCb2FyZC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kbyAuaXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IC0xcHggMDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAxZnIgM3JlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudG9nZ2xlIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwicmFkaW9fYnV0dG9uX3VuY2hlY2tlZFxcXCI7XFxuICAgIG1hcmdpbjogMCAuNzVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIG9wYWNpdHk6IC42O1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50b2dnbGU6Y2hlY2tlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiY2hlY2tfY2lyY2xlXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudGV4dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbS5jb21wbGV0ZWQgPiAudGV4dCB7XFxuICAgIG9wYWNpdHk6IC42O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudGV4dC5lZGl0dGluZyB7XFxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAuZGVsZXRlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW06aG92ZXIgPiAuZGVsZXRlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC41cmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuYWN0aXZlSXRlbXNDb3VudCxcXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuY29tcGxldGVkSXRlbXNDb3VudCB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5hY3RpdmVJdGVtc0NvdW50IHtcXG4gICAgd2lkdGg6IDQuNXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQge1xcbiAgICB3aWR0aDogMTFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5jb21wbGV0ZWRJdGVtc0NvdW50LmhpZGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBjdXJzb3I6IGF1dG87XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5yb3V0ZXMge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxNHJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSA0cmVtIDZyZW07XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgLnJvdXRlIHtcXG4gICAgcGFkZGluZzogLjI1cmVtIC43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZS5jdXJyZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiA0LjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmF5KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMS41cmVtKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIC50aXAsXFxuLmZvb3RlciAuY29weXJpZ2h0LFxcbi5mb290ZXIgLnllYXIge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuMjVyZW07XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5mb290ZXIgLmdpdGh1YiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25vcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKlxuICogY29udHJvbGxlci5qcyBpcyBhIGdlbmVyYWwgbWFuYWdlci5cbiAqIEhlIGlzIHRoZSBvbmx5IG9uZSB3aG8ga25vd3MgYWxsIHRoZSBsb2dpYyBvZiBkaWZmZXJlbnQgZmVhdHVyZXMuXG4gKiBCdXQgaGUgaXMgYmxpbmQgZnJvbSBib3RoIGRhdGEgYW5kIERPTS5cbiAqIG1vZGVsLmpzIGFuZCB2aWV3LmpzIGRvIHRoZXNlIGNvbmNyZXRlIHRhc2tzIGZvciBoaW0uXG4gKi9cblxuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcbmltcG9ydCBNb2RlbCBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgLyogRm9ybWF0IHRoZSBkYXRlLiAqL1xuICBjb25zdCBNeURhdGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsXG4gICAgfTtcblxuICAgIC8qIEN1dCB0aGUgZGF0ZSBzdHJpbmcgaW50byB3ZWVrZGF5LCBkYXksIG1vbnRoIGFuZCB5ZWFyLiBWaWV3IG1vZHVsZSBrbm93cyBob3cgdG8gc2hvdyB0aGVtLiAqL1xuICAgIGZ1bmN0aW9uIGdldFRvZGF5KCkge1xuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kYXlTdHIgPSB0b2RheS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgb3B0aW9ucyk7IC8vIFNhdHVyZGF5LCBTZXB0ZW1iZXIgMTcsIDIwMTZcbiAgICAgIGNvbnN0IFt3ZWVrZGF5LCBtb250aERheSwgeWVhcl0gPSB0b2RheVN0ci5zcGxpdCgnLCAnKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcbiAgICAgIGxldCBbbW9udGgsIGRheV0gPSBtb250aERheS5zcGxpdCgnICcpO1xuICAgICAgbW9udGggPSBtb250aC5zbGljZSgwLCAzKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2Vla2RheSwgZGF5LCBtb250aCwgeWVhcixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0VG9kYXkgfTtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiBzaG93RGF0ZSgpIHtcbiAgICBWaWV3LnNob3dEYXRlKE15RGF0ZS5nZXRUb2RheSgpKTtcbiAgfVxuXG4gIC8qIENhbGwgdmlldyB0byBwcmludCBmb290ZXIuICovXG4gIGZ1bmN0aW9uIHNob3dGb290ZXIoKSB7XG4gICAgVmlldy5zaG93Rm9vdGVyKCk7XG4gIH1cblxuICAvKiBQcmUtZGVmaW5lIHF1ZXJpZXMgZm9yIHRocmVlIGRpZmZlcmVudCByb3V0ZXM6IGFsbCwgYWN0aXZlIGFuZCBjb21wbGV0ZWQuXG4gICAqIE1vZGVsLmZpbmQoKSBmdW5jdGlvbiBhY2NlcHRzIG9ubHkgYW4gYXJyYXkgb2YgUXVlcnkgYXMgaW5wdXQgdG8gZmlsdGVyIGl0ZW1zIHdlIHdhbnQuICovXG4gIGNvbnN0IEl0ZW1zUXVlcnkgPSAocm91dGUpID0+IHtcbiAgICBjb25zdCBxdWVyeUJhbmsgPSB7XG4gICAgICBhbGw6IFtdLFxuICAgICAgYWN0aXZlOiBbTW9kZWwuUXVlcnkoJ2NvbXBsZXRlZCcsIGZhbHNlKV0sXG4gICAgICBjb21wbGV0ZWQ6IFtNb2RlbC5RdWVyeSgnY29tcGxldGVkJywgdHJ1ZSldLFxuICAgIH07XG4gICAgcmV0dXJuIHF1ZXJ5QmFua1tyb3V0ZV07XG4gIH07XG5cbiAgLyogR2V0IHRoZSBxdWVyaWVzIGZyb20gSXRlbXNRdWVyeSwgYW5kIGZlZWQgdGhlbSB0byBNb2RlbC5maW5kSXRlbXMoKSBmdW5jdGlvbi4gKi9cbiAgZnVuY3Rpb24gZmlsdGVySXRlbXMocm91dGUpIHtcbiAgICByZXR1cm4gTW9kZWwuZmluZEl0ZW1zKEl0ZW1zUXVlcnkocm91dGUpKTtcbiAgfVxuXG4gIC8qIFVwZGF0ZSB0aGUgY291bnQgbnVtYmVyIG9mIHRocmVlIGRpZmZlcmVudCByb3V0ZXMoYWxsLCBhY3RpdmUgYW5kIGNvbXBsZXRlZCkgbGlzdGVkXG4gICAqIG9uIHRvZG8gYm9hcmQuXG4gICAqIFRoZSBlbnRpcmUgaXRlbXMgYm9hcmQgd2lsbCBiZSBoaWRkZW4gaWYgbm8gaXRlbXMgbGVmdCBpbiBpdGVtcyBsaXN0LiAqL1xuICBmdW5jdGlvbiB1cGRhdGVJdGVtc0NvdW50KCkge1xuICAgIGNvbnN0IGFjdGl2ZUNvdW50ID0gZmlsdGVySXRlbXMoJ2FjdGl2ZScpLmxlbmd0aDtcbiAgICBjb25zdCBjb21wbGV0ZWRDb3VudCA9IGZpbHRlckl0ZW1zKCdjb21wbGV0ZWQnKS5sZW5ndGg7XG4gICAgVmlldy51cGRhdGVBY3RpdmVJdGVtc0NvdW50KGFjdGl2ZUNvdW50KTtcbiAgICBWaWV3LnVwZGF0ZUNvbXBsZXRlZEl0ZW1zQ291bnQoY29tcGxldGVkQ291bnQpO1xuICAgIGlmIChjb21wbGV0ZWRDb3VudCA9PT0gMCkge1xuICAgICAgVmlldy5oaWRlQ29tcGxldGVkSXRlbXNDb3VudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBWaWV3LnNob3dDb21wbGV0ZWRJdGVtc0NvdW50KCk7XG4gICAgfVxuICAgIGlmIChhY3RpdmVDb3VudCArIGNvbXBsZXRlZENvdW50ID09PSAwKSB7IC8vIGhpZGUgdGhlIGVudGlyZSBpdGVtIGJvYXJkIGlmIDAgaXRlbSBsZWZ0XG4gICAgICBWaWV3LmhpZGVJdGVtc0JvYXJkKCk7XG4gICAgICBWaWV3LmhpZGVUb2dnbGVBbGwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVmlldy5zaG93SXRlbXNCb2FyZCgpO1xuICAgICAgaWYgKGFjdGl2ZUNvdW50ID4gMCkge1xuICAgICAgICBWaWV3LnRvZ2dsZUFsbE5vdENoZWNrZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFZpZXcudG9nZ2xlQWxsQ2hlY2tlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIEdldCB0aGUgY3VycmVudCByb3V0ZSBmcm9tIHN0b3JhZ2UsXG4gICAqIGZpbHRlciBpdGVtcyB1bmRlciBjdXJyZW50IHJvdXRlIGFuZCBjYWxsIHZpZXcgdG8gY3JlYXRlIGl0ZW1zIGNhcmQgaW4gRE9NLlxuICAgKiBWaWV3LnNob3dJdGVtKCkgZnVuY3Rpb24gcmVxdWlyZXMgYSBjYWxsYmFjayBmdW5jdGlvbiB0byB0ZWxsIGhpbVxuICAgKiB3aGljaCBidXR0b25zIG5lZWQgdG8gYmUgYWN0aXZhdGVkIGFmdGVyIGl0ZW0gY2FyZCBpcyBjcmVhdGVkLiAqL1xuICBmdW5jdGlvbiBzaG93SXRlbXMoKSB7XG4gICAgY29uc3QgaXRlbXNPYmpBcnIgPSBmaWx0ZXJJdGVtcyhNb2RlbC5nZXRDdXJyZW50Um91dGUoKSk7XG4gICAgVmlldy5jbGVhckl0ZW1zKCk7XG4gICAgaXRlbXNPYmpBcnIuZm9yRWFjaCgoaXRlbU9iaikgPT4ge1xuICAgICAgVmlldy5zaG93SXRlbShpdGVtT2JqLCAodGFyZ2V0KSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgICBWaWV3LmJpbmRUb2dnbGVDb21wbGV0ZWQodGFyZ2V0LCB0b2dnbGVDb21wbGV0ZWQpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgICAgVmlldy5iaW5kRGVsZXRlSXRlbSh0YXJnZXQsIGRlbGV0ZUl0ZW0pO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgICAgVmlldy5iaW5kRWRpdEl0ZW0odGFyZ2V0LCBlZGl0SXRlbSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qIE1haW4gbG9naWMgb2YgaG93IHRvIGFkZCBhIG5ldyBpdGVtLiAqL1xuICBmdW5jdGlvbiBhZGRJdGVtKHRleHQpIHtcbiAgICBNb2RlbC5hZGRJdGVtKHRleHQpO1xuICAgIFZpZXcuY2xlYXJBZGRJdGVtRWxlKCk7XG4gICAgc2hvd0l0ZW1zKCk7XG4gICAgdXBkYXRlSXRlbXNDb3VudCgpO1xuICB9XG5cbiAgLyogTWFpbiBsb2dpYyBvZiB0b2dnbGluZyBhbiBpdGVtIHRvIGNvbXBsZXRlZC4gKi9cbiAgZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGVkKGl0ZW1JZCkge1xuICAgIE1vZGVsLnRvZ2dsZUNvbXBsZXRlZChpdGVtSWQpO1xuICAgIHNob3dJdGVtcygpOyAvLyBtdXN0IHJlZnJlc2ggY3VycmVudCByb3V0ZS5cbiAgICB1cGRhdGVJdGVtc0NvdW50KCk7XG4gIH1cblxuICAvKiBNYWluIGxvZ2ljIG9mIHdoYXQgaGFwcGVuZCB3aGVuIGRlbGV0ZSBidXR0b24gaXMgY2xpY2tlZC4gKi9cbiAgZnVuY3Rpb24gZGVsZXRlSXRlbShpdGVtSWQpIHtcbiAgICBNb2RlbC5kZWxldGVJdGVtKGl0ZW1JZCk7XG4gICAgdXBkYXRlSXRlbXNDb3VudCgpO1xuICB9XG5cbiAgLyogTWFpbiBsb2dpbiBvZiBlZGl0aW5nIGFuIGl0ZW0uICovXG4gIGZ1bmN0aW9uIGVkaXRJdGVtKGl0ZW1JZCwgaXRlbVZhbHVlLCBjYWxsYmFjaykge1xuICAgIGlmICghaXRlbVZhbHVlKSB7XG4gICAgICBNb2RlbC5kZWxldGVJdGVtKGl0ZW1JZCk7XG4gICAgICB1cGRhdGVJdGVtc0NvdW50KCk7XG4gICAgICBjYWxsYmFjaygpOyAvLyBjYWxsYmFjayB2aWV3IGlmIG5lZWQgdG8gcmVtb3ZlIHRoYXQgaXRlbSBmcm9tIHZpZXcuXG4gICAgfSBlbHNlIHtcbiAgICAgIE1vZGVsLnVwZGF0ZUl0ZW0oaXRlbUlkLCBpdGVtVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qIE1haW4gbG9naWMgb2Ygc3dpdGNoaW5nIHJvdXRlLiAqL1xuICBmdW5jdGlvbiBjaGFuZ2VSb3V0ZShyb3V0ZSkge1xuICAgIE1vZGVsLnNldEN1cnJlbnRSb3V0ZShyb3V0ZSk7XG4gICAgc2hvd0l0ZW1zKCk7XG4gIH1cblxuICAvKiBNYWluIGxvZ2ljIG9mIFwiY2xlYXIgYWxsIGNvbXBsZXRlZFwiIGJ1dHRvbi4gKi9cbiAgZnVuY3Rpb24gY2xlYXJBbGxDb21wbGV0ZWRJdGVtcygpIHtcbiAgICBjb25zdCBjb21wbGV0ZWRJdGVtc0FyciA9IE1vZGVsLmZpbmRJdGVtcyhJdGVtc1F1ZXJ5KCdjb21wbGV0ZWQnKSk7XG4gICAgY29tcGxldGVkSXRlbXNBcnIuZm9yRWFjaCgoaXRlbU9iaikgPT4ge1xuICAgICAgY29uc3QgaWQgPSBNb2RlbC5JdGVtLmdldElkLmNhbGwoaXRlbU9iaik7XG4gICAgICBNb2RlbC5kZWxldGVJdGVtKGlkKTtcbiAgICB9KTtcbiAgICBzaG93SXRlbXMoKTtcbiAgICB1cGRhdGVJdGVtc0NvdW50KCk7XG4gIH1cblxuICAvKiBNYWluIGxvZ2ljIG9mIFwidG9nZ2xlIGFsbFwiIGJ1dHRvbi4gKi9cbiAgZnVuY3Rpb24gdG9nZ2xlQWxsKCkge1xuICAgIGlmIChNb2RlbC5oYXNJdGVtKCkpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1zQXJyID0gTW9kZWwuZmluZEl0ZW1zKEl0ZW1zUXVlcnkoJ2FjdGl2ZScpKTtcbiAgICAgIGlmIChhY3RpdmVJdGVtc0Fyci5sZW5ndGggPiAwKSB7XG4gICAgICAgIE1vZGVsLnRvZ2dsZUFsbChhY3RpdmVJdGVtc0Fycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBNb2RlbC50b2dnbGVBbGwoTW9kZWwuZmluZEl0ZW1zKEl0ZW1zUXVlcnkoJ2NvbXBsZXRlZCcpKSk7XG4gICAgICB9XG4gICAgICBzaG93SXRlbXMoKTtcbiAgICAgIHVwZGF0ZUl0ZW1zQ291bnQoKTtcbiAgICB9XG4gIH1cblxuICAvKiBDYWxsIFZpZXcgdG8gYmluZCBldmVudCBsaXN0ZW5lcnMgZm9yIGFkZGluZyBuZXcgaXRlbSBmZWF0dXJlLlxuICAgKiBNYWluIGxvZ2ljIGFkZEl0ZW0oKSBmdW5jdGlvbiBpcyBmZWQgYXMgYSBjYWxsYmFjayBmdW5jdGlvbi4gKi9cbiAgZnVuY3Rpb24gZW5hYmxlQWRkSXRlbSgpIHtcbiAgICBWaWV3LmJpbmRBZGRJdGVtKGFkZEl0ZW0pO1xuICAgIFZpZXcuYmluZEFkZEl0ZW1MYWJlbCgpO1xuICB9XG5cbiAgLyogQ2FsbCBWaWV3IHRvIGJpbmQgZXZlbnQgbGlzdGVuZXJzIGZvciByb3V0ZSBzd2l0Y2ggYnV0dG9ucy5cbiAgICogTWFpbiBsb2dpYyBmdW5jdGlvbiBjaGFuZ2VSb3V0ZSgpIGlzIGZlZCBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiAqL1xuICBmdW5jdGlvbiBlbmFibGVDaGFuZ2VSb3V0ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50Um91dGUgPSBNb2RlbC5nZXRDdXJyZW50Um91dGUoKTtcbiAgICBWaWV3LmJpbmRDaGFuZ2VSb3V0ZShjaGFuZ2VSb3V0ZSwgKCkgPT4gVmlldy5tYXJrQ3VycmVudFJvdXRlKGN1cnJlbnRSb3V0ZSkpO1xuICB9XG5cbiAgLyogQ2FsbCBWaWV3IHRvIGJpbmQgZXZlbnQgbGlzdGVuZXJzIGZvciBjbGVhciBidXR0b25zLlxuICAgKiBNYWluIGxvZ2ljIGNsZWFyQWxsQ29tcGxldGVkSXRlbSgpIGZ1bmN0aW9uIGlzIGZlZCBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiAqL1xuICBmdW5jdGlvbiBlbmFibGVDbGVhckNvbXBsZXRlZEl0ZW1zKCkge1xuICAgIFZpZXcuYmluZENsZWFyQ29tcGxldGVkSXRlbXMoY2xlYXJBbGxDb21wbGV0ZWRJdGVtcyk7XG4gIH1cblxuICAvKiBDYWxsIFZpZXcgdG8gYmluZCBldmVudCBsaXN0ZW5lcnMgZm9yIHRvZ2dsZUFsbCBidXR0b25zLlxuICAgKiBNYWluIGxvZ2ljIHRvZ2dsZUFsbCgpIGZ1bmN0aW9uIGlzIGZlZCBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiAqL1xuICBmdW5jdGlvbiBlbmFibGVUb2dnbGVBbGwoKSB7XG4gICAgVmlldy5iaW5kVG9nZ2xlQWxsKHRvZ2dsZUFsbCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNob3dGb290ZXIsXG4gICAgc2hvd0RhdGUsXG4gICAgc2hvd0l0ZW1zLFxuICAgIHVwZGF0ZUl0ZW1zQ291bnQsXG4gICAgZW5hYmxlQWRkSXRlbSxcbiAgICBlbmFibGVDaGFuZ2VSb3V0ZSxcbiAgICBlbmFibGVDbGVhckNvbXBsZXRlZEl0ZW1zLFxuICAgIGVuYWJsZVRvZ2dsZUFsbCxcbiAgfTtcbn0pKCk7XG4iLCIvKlxuICogQSBEQU8oRGF0YSBBY2Nlc3MgT2JqZWN0KSBBUEkuXG4gKiBJdCdzIGF3YXJlIG9mIHRoZSBkYXRhIHN0cnVjdHVyZSBvZiBJdGVtIGFuZCBvdGhlciBvYmplY3RzLlxuICogQW5kIGtub3dzIGhvdyB0byBpbnNlcnQsIHVwZGF0ZSwgZGVsZXRlIGFuZCByZWFkIHRoZXNlIGRhdGEuXG4gKi9cblxuaW1wb3J0IFN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBjb25zdCBkZWZhdWx0Um91dGUgPSAnYWxsJztcblxuICAvKiBBIGZhY3RvcnkgZnVuY3Rpb24gY3JlYXRpbmcgbmV3IGl0ZW0gb2JqZWN0LiAqL1xuICBjb25zdCBJdGVtID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjcmVhdGUodGV4dCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IERhdGUubm93KCksXG4gICAgICAgIHRpdGxlOiB0ZXh0LFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNDb21wbGV0ZWQoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gICAgZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGVkKCkge1xuICAgICAgdGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZSxcbiAgICAgIGdldElkLFxuICAgICAgZ2V0VGl0bGUsXG4gICAgICBzZXRUaXRsZSxcbiAgICAgIGhhc0NvbXBsZXRlZCxcbiAgICAgIHRvZ2dsZUNvbXBsZXRlZCxcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qIFF1ZXJ5IGlzIGEgW2tleSwgdmFsdWVdIHBhaXIuXG4gICAgICogT25jZSBhIHF1ZXJ5IGlzIGNyZWF0ZWQsIGl0J3MgcmVhZC1vbmx5LiAqL1xuICBmdW5jdGlvbiBRdWVyeShpbktleSwgaW5WYWx1ZSkge1xuICAgIGNvbnN0IGtleSA9IGluS2V5O1xuICAgIGNvbnN0IHZhbHVlID0gaW5WYWx1ZTtcblxuICAgIGZ1bmN0aW9uIGdldEtleSgpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0S2V5LCBnZXRWYWx1ZSB9O1xuICB9XG5cbiAgLyogQSB3cmFwcGVyIGZ1bmN0aW9uLiBTZXQgY3VycmVudCByb3V0ZSB0byBkZWZhdWx0IHZhbHVlLCBpZiBubyByb3V0ZSBleGl0cy4gKi9cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFJvdXRlKCkge1xuICAgIGNvbnN0IHJvdXRlID0gU3RvcmUuZ2V0Q3VycmVudFJvdXRlKCk7XG4gICAgaWYgKCFyb3V0ZSkge1xuICAgICAgU3RvcmUuc2V0Q3VycmVudFJvdXRlKGRlZmF1bHRSb3V0ZSk7XG4gICAgICByZXR1cm4gU3RvcmUuZ2V0Q3VycmVudFJvdXRlKCk7XG4gICAgfVxuICAgIHJldHVybiByb3V0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEN1cnJlbnRSb3V0ZShyb3V0ZSkge1xuICAgIFN0b3JlLnNldEN1cnJlbnRSb3V0ZShyb3V0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNJdGVtKCkge1xuICAgIHJldHVybiBTdG9yZS5oYXNJdGVtKCk7XG4gIH1cblxuICAvKiByZXR1cm4gYW4gYXJyYXkgb2YgYWxsIGV4aXRpbmcgaXRlbXMgKi9cbiAgZnVuY3Rpb24gZmluZEFsbEl0ZW1zKCkge1xuICAgIGlmICghaGFzSXRlbSgpKSByZXR1cm4gW107XG4gICAgY29uc3QgaXRlbXNPYmogPSBTdG9yZS5nZXRJdGVtc09iamVjdCgpO1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIE9iamVjdC5lbnRyaWVzKGl0ZW1zT2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGFyci5wdXNoKGl0ZW1zT2JqW2Ake2tleX1gXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qIFJldHVybiBhIHN1Yi1hcnJheSB3aGljaCBtZWV0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHF1ZXJ5XG4gICAgICogcXVlcmllcyBpcyBhbiBhcnJheSBvZiBba2V5LCB2YWx1ZV0gcGFpciAqL1xuICBmdW5jdGlvbiBmaW5kSXRlbXMocXVlcmllcykge1xuICAgIGNvbnN0IGFsbEl0ZW1zQXJyID0gZmluZEFsbEl0ZW1zKCk7XG4gICAgcmV0dXJuIGFsbEl0ZW1zQXJyLmZpbHRlcigoaXRlbU9iaikgPT4ge1xuICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICBxdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XG4gICAgICAgIGlmIChpdGVtT2JqW2Ake3F1ZXJ5LmdldEtleSgpfWBdICE9PSBxdWVyeS5nZXRWYWx1ZSgpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qIENyZWF0ZSBhIG5ldyBJdGVtIG9iamVjdCBhbmQgc2F2ZSBpdCBpbnRvIHN0b3JhZ2UuICovXG4gIGZ1bmN0aW9uIGFkZEl0ZW0odGV4dCkge1xuICAgIFN0b3JlLnVwZGF0ZUl0ZW1zKChpdGVtc09iaikgPT4ge1xuICAgICAgY29uc3QgaXRlbU9iaiA9IEl0ZW0uY3JlYXRlKHRleHQpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBpdGVtc09ialtgJHtJdGVtLmdldElkLmNhbGwoaXRlbU9iail9YF0gPSBpdGVtT2JqO1xuICAgIH0pO1xuICB9XG5cbiAgLyogUmVtb3ZlIGFuIGl0ZW0gZnJvbSBzdG9yYWdlLiAqL1xuICBmdW5jdGlvbiBkZWxldGVJdGVtKGl0ZW1JZCkge1xuICAgIGlmICghaGFzSXRlbSgpKSByZXR1cm47XG4gICAgU3RvcmUudXBkYXRlSXRlbXMoKGl0ZW1zT2JqKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIGRlbGV0ZSBpdGVtc09ialtgJHtpdGVtSWR9YF07XG4gICAgfSk7XG4gIH1cblxuICAvKiBVcGRhdGUgcHJvcGVydGllcyBvZiBhbiBpdGVtLiAqL1xuICBmdW5jdGlvbiB1cGRhdGVJdGVtKGl0ZW1JZCwgaXRlbVZhbHVlKSB7XG4gICAgaWYgKCFoYXNJdGVtKCkpIHJldHVybjtcbiAgICBTdG9yZS51cGRhdGVJdGVtcygoaXRlbXNPYmopID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1PYmogPSBpdGVtc09ialtgJHtpdGVtSWR9YF07XG4gICAgICBJdGVtLnNldFRpdGxlLmNhbGwoaXRlbU9iaiwgaXRlbVZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qIFVwZGF0ZSBpdGVtIFwiY29tcGxldGVkXCIgcHJvcGVydHkuICovXG4gIGZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlZChpdGVtSWQpIHtcbiAgICBpZiAoIWhhc0l0ZW0oKSkgcmV0dXJuO1xuICAgIFN0b3JlLnVwZGF0ZUl0ZW1zKChpdGVtc09iaikgPT4ge1xuICAgICAgY29uc3QgaXRlbU9iaiA9IGl0ZW1zT2JqW2Ake2l0ZW1JZH1gXTtcbiAgICAgIEl0ZW0udG9nZ2xlQ29tcGxldGVkLmNhbGwoaXRlbU9iaik7XG4gICAgfSk7XG4gIH1cblxuICAvKiBCYXRjaCBwcm9jZXNzaW5nIG9mIHRvZ2dsaW5nIGl0ZW0gXCJjb21wbGV0ZWRcIiBwcm9wZXJ0eS4gKi9cbiAgZnVuY3Rpb24gdG9nZ2xlQWxsKGl0ZW1zQXJyKSB7XG4gICAgU3RvcmUudXBkYXRlSXRlbXMoKGl0ZW1zT2JqKSA9PiB7XG4gICAgICBpdGVtc0Fyci5mb3JFYWNoKChpdGVtT2JqKSA9PiB7XG4gICAgICAgIEl0ZW0udG9nZ2xlQ29tcGxldGVkLmNhbGwoaXRlbXNPYmpbYCR7SXRlbS5nZXRJZC5jYWxsKGl0ZW1PYmopfWBdKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBJdGVtLFxuICAgIFF1ZXJ5LFxuICAgIGdldEN1cnJlbnRSb3V0ZSxcbiAgICBzZXRDdXJyZW50Um91dGUsXG4gICAgaGFzSXRlbSxcbiAgICBmaW5kSXRlbXMsXG4gICAgYWRkSXRlbSxcbiAgICB0b2dnbGVDb21wbGV0ZWQsXG4gICAgZGVsZXRlSXRlbSxcbiAgICB1cGRhdGVJdGVtLFxuICAgIHRvZ2dsZUFsbCxcbiAgfTtcbn0pKCk7XG4iLCIvKiBzdG9yZS5qcyBrbm93cyBvbmx5IGhvdyB0byByZWFkL3dyaXRlIHN0cmluZyBkYXRhIGZyb20vdG8gRG9jdW1lbnQubG9jYWxTdG9yYWdlLlxuICogQWxsIGl0ZW1zIGFyZSBzdG9yZWQgYXMgYSBsb25nIHN0cmluZyBpbiBsb2NhbFN0b3JhZ2UuICovXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBjb25zdCBpdGVtc0tleSA9ICd0b2RvSXRlbXMnO1xuICBjb25zdCByb3V0ZUtleSA9ICd0b2RvQ3VycmVudFJvdXRlJztcblxuICAvKiBBIHNob3RjdXQgdG8gY2hlY2sgd2hldGhlciB0aGVyZSdzIGFueSBpdGVtIGxlZnQgaW4gc3RvcmFnZS4gKi9cbiAgZnVuY3Rpb24gaGFzSXRlbSgpIHtcbiAgICBjb25zdCBpdGVtc1N0ciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtc0tleSk7XG4gICAgaWYgKGl0ZW1zU3RyID09PSAne30nKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKiBHZXQgdGhlIGxvbmcgc3RyaW5nIG9mIGFsbCBpdGVtcy5cbiAgICogSlNPTi5wYXJzZSgpIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBzdHJpbmcgdG8gYW4gb2JqZWN0LiAqL1xuICBmdW5jdGlvbiBnZXRJdGVtc09iamVjdCgpIHtcbiAgICBjb25zdCBkYXRhID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW1zS2V5KTtcbiAgICBpZiAoZGF0YSkgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyogSlNPTi5zdHJpbmdpZnkoKSBmdW5jdGlvbiBjb252ZXJ0cyBhbiBsYXJnZSBvYmplY3QgKGNvbnRhaW5zIGFsbCBpdGVtcyBkYXRhKVxuICAgKiB0byBzdHJpbmcuXG4gICAqIEFuZCBwdXNoIHRoZSBsb25nIHN0cmluZyBpbnRvIGxvY2FsU3Ryb3JhZ2UuICovXG4gIGZ1bmN0aW9uIHNldEl0ZW1zT2JqZWN0KGl0ZW1zT2JqKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGl0ZW1zS2V5LCBKU09OLnN0cmluZ2lmeShpdGVtc09iaikpO1xuICB9XG5cbiAgLyogQSBoZWxwZXIgZnVuY3Rpb24gcmVhZC93cml0ZSBkYXRhIGZyb20vdG8gbG9jYWxTdG9yYWdlLFxuICAgKiBzbyB0aGF0IG1vZGVsLmpzIGNhbiBmb2N1cyBvbiBoaXMgd29yay4gKi9cbiAgZnVuY3Rpb24gdXBkYXRlSXRlbXMoY2FsbGJhY2spIHtcbiAgICBjb25zdCBpdGVtc09iaiA9IGdldEl0ZW1zT2JqZWN0KCk7XG4gICAgY2FsbGJhY2soaXRlbXNPYmopO1xuICAgIHNldEl0ZW1zT2JqZWN0KGl0ZW1zT2JqKTtcbiAgfVxuXG4gIC8qIFNpbXBseSByZWFkIGN1cnJlbnQgcm91dGUgZnJvbSBsb2NhbFN0b3JhZ2UuICovXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRSb3V0ZSgpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3JvdXRlS2V5fWApO1xuICB9XG5cbiAgLyogVXBkYXRlIGN1cnJlbnQgcm91dGUuICovXG4gIGZ1bmN0aW9uIHNldEN1cnJlbnRSb3V0ZShyb3V0ZSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtyb3V0ZUtleX1gLCByb3V0ZSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhhc0l0ZW0sXG4gICAgZ2V0SXRlbXNPYmplY3QsXG4gICAgc2V0SXRlbXNPYmplY3QsXG4gICAgdXBkYXRlSXRlbXMsXG4gICAgZ2V0Q3VycmVudFJvdXRlLFxuICAgIHNldEN1cnJlbnRSb3V0ZSxcbiAgfTtcbn0pKCk7XG4iLCIvKlxuICogQSBoZWxwZXIgb2Ygdmlldy5qcy4gT25seSB1c2VkIHRvIHN0b3JlIEhUTUwgdGVtcGxhdGVzLlxuICovXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBmdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW1PYmopIHtcbiAgICBjb25zdCBzdHIgPSBgPGRpdiBjbGFzcz1cIml0ZW1cIiBkYXRhLWlkPSR7aXRlbU9iai5pZH0+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0b2dnbGUgbWF0ZXJpYWwtaWNvbnNcIiB0eXBlPVwiY2hlY2tib3hcIj4gXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0XCI+JHtpdGVtT2JqLnRpdGxlfTwvbGFiZWw+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImRlbGV0ZSBtYXRlcmlhbC1pY29uc1wiPmNsZWFyPC9pPlxuICAgICAgICA8L2Rpdj5gO1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJGb290ZXIoZ2l0aHViSW1nLCB5ZWFyKSB7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidGlwXCI+RG91YmxlIGNsaWNrIHRvIGVkaXQgdG9kby48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvcHlyaWdodFwiPkNvcHlyaWdodCBNSVQgwqkgaGlyZW1lLnNoZW5AZ21haWwuY29tICZuYnNwO3wmbmJzcDsgU291cmNlIGNvZGUgLSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2hlbGxvU2hlbi90b2RvXCI+PGltZyBjbGFzcz1cImdpdGh1YlwiIHNyYz1cIiR7Z2l0aHViSW1nfVwiPjwvYT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInllYXJcIj4yMDIxLSR7eWVhcn08L2Rpdj5gO1xuICB9XG5cbiAgcmV0dXJuIHsgcmVuZGVySXRlbSwgcmVuZGVyRm9vdGVyIH07XG59KSgpO1xuIiwiLypcbiAqIEFsbCBET00gbWFuaXB1bGF0aW9ucyBnbyB0byB0aGlzIGZpbGUuXG4gKi9cbmltcG9ydCBUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcbmltcG9ydCBHaXRodWJJbWcgZnJvbSAnLi4vYXNzZXRzL2ltZy9naXRodWJfYmxhY2sucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgY29uc3QgdG9kb0VsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvJyk7XG4gIGNvbnN0IHRpdGxlRWxlID0gdG9kb0VsZS5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgY29uc3QgZGF0ZUVsZSA9IHRpdGxlRWxlLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG4gIGNvbnN0IGRheUVsZSA9IGRhdGVFbGUucXVlcnlTZWxlY3RvcignLmRheScpO1xuICBjb25zdCBtb250aEVsZSA9IGRhdGVFbGUucXVlcnlTZWxlY3RvcignLm1vbnRoJyk7XG4gIGNvbnN0IHllYXJFbGUgPSBkYXRlRWxlLnF1ZXJ5U2VsZWN0b3IoJy55ZWFyJyk7XG4gIGNvbnN0IHdlZWtkYXlFbGUgPSB0aXRsZUVsZS5xdWVyeVNlbGVjdG9yKCcud2Vla2RheScpO1xuICBjb25zdCB0b2dnbGVBbGxFbGUgPSB0b2RvRWxlLnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGVBbGwnKTtcbiAgY29uc3QgYWRkSXRlbUNvbnRhaW5lckVsZSA9IHRvZG9FbGUucXVlcnlTZWxlY3RvcignLmFkZEl0ZW1Db250YWluZXInKTtcbiAgY29uc3QgYWRkSXRlbUVsZSA9IGFkZEl0ZW1Db250YWluZXJFbGUucXVlcnlTZWxlY3RvcignLmFkZEl0ZW0nKTtcbiAgY29uc3QgYWRkSXRlbUxhYmVsRWxlID0gYWRkSXRlbUNvbnRhaW5lckVsZS5xdWVyeVNlbGVjdG9yKCcuYWRkSXRlbUxhYmVsJyk7XG4gIGNvbnN0IGl0ZW1zQm9hcmRFbGUgPSB0b2RvRWxlLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtc0JvYXJkJyk7XG4gIGNvbnN0IGl0ZW1zQ29udGFpbmVyRWxlID0gaXRlbXNCb2FyZEVsZS5xdWVyeVNlbGVjdG9yKCcuaXRlbXNDb250YWluZXInKTtcbiAgY29uc3QgaXRlbXNGb290ZXJFbGUgPSBpdGVtc0JvYXJkRWxlLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtc0Zvb3RlcicpO1xuICBjb25zdCByb3V0ZUJ0bnMgPSBpdGVtc0Zvb3RlckVsZS5xdWVyeVNlbGVjdG9yQWxsKCcucm91dGUnKTtcbiAgY29uc3QgYWN0aXZlQ291bnRFbGUgPSBpdGVtc0Zvb3RlckVsZS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlSXRlbXNDb3VudCcpO1xuICBjb25zdCBhY3RpdmVDb3VudE51bUVsZSA9IGFjdGl2ZUNvdW50RWxlLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudCcpO1xuICBjb25zdCBjb21wbGV0ZWRDb3VudEVsZSA9IGl0ZW1zRm9vdGVyRWxlLnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWRJdGVtc0NvdW50Jyk7XG4gIGNvbnN0IGNvbXBsZXRlZENvdW50TnVtRWxlID0gY29tcGxldGVkQ291bnRFbGUucXVlcnlTZWxlY3RvcignLmNvdW50Jyk7XG4gIGNvbnN0IGZvb3RlckVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKTtcblxuICBmdW5jdGlvbiBzaG93RGF0ZSh0b2RheSkge1xuICAgIGRheUVsZS50ZXh0Q29udGVudCA9IHRvZGF5LmRheTtcbiAgICBtb250aEVsZS50ZXh0Q29udGVudCA9IHRvZGF5Lm1vbnRoO1xuICAgIHllYXJFbGUudGV4dENvbnRlbnQgPSB0b2RheS55ZWFyO1xuICAgIHdlZWtkYXlFbGUudGV4dENvbnRlbnQgPSB0b2RheS53ZWVrZGF5O1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJBZGRJdGVtRWxlKCkge1xuICAgIGFkZEl0ZW1FbGUudmFsdWUgPSAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVBZGRJdGVtTGFiZWwoKSB7XG4gICAgaWYgKGFkZEl0ZW1FbGUudmFsdWUgPT09ICcnKSB7XG4gICAgICBhZGRJdGVtTGFiZWxFbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRJdGVtTGFiZWxFbGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcmtDdXJyZW50Um91dGUocm91dGUpIHtcbiAgICByb3V0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBpZiAoYnRuLmRhdGFzZXQucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVBY3RpdmVJdGVtc0NvdW50KGNvdW50KSB7XG4gICAgYWN0aXZlQ291bnROdW1FbGUudGV4dENvbnRlbnQgPSBjb3VudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNvbXBsZXRlZEl0ZW1zQ291bnQoY291bnQpIHtcbiAgICBjb21wbGV0ZWRDb3VudE51bUVsZS50ZXh0Q29udGVudCA9IGNvdW50O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0NvbXBsZXRlZEl0ZW1zQ291bnQoKSB7XG4gICAgY29tcGxldGVkQ291bnRFbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUNvbXBsZXRlZEl0ZW1zQ291bnQoKSB7XG4gICAgY29tcGxldGVkQ291bnRFbGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0l0ZW1zQm9hcmQoKSB7XG4gICAgaXRlbXNCb2FyZEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBhZGRJdGVtQ29udGFpbmVyRWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2Fsb25lJyk7XG4gICAgYWRkSXRlbUVsZS5jbGFzc0xpc3QucmVtb3ZlKCdhbG9uZScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUl0ZW1zQm9hcmQoKSB7XG4gICAgaXRlbXNCb2FyZEVsZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBhZGRJdGVtQ29udGFpbmVyRWxlLmNsYXNzTGlzdC5hZGQoJ2Fsb25lJyk7XG4gICAgYWRkSXRlbUVsZS5jbGFzc0xpc3QuYWRkKCdhbG9uZScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVRvZ2dsZUFsbCgpIHtcbiAgICB0b2dnbGVBbGxFbGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQWxsQ2hlY2tlZCgpIHtcbiAgICB0b2dnbGVBbGxFbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIHRvZ2dsZUFsbEVsZS5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFsbE5vdENoZWNrZWQoKSB7XG4gICAgdG9nZ2xlQWxsRWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB0b2dnbGVBbGxFbGUuY2hlY2tlZCA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudCh0YXJnZXQpIHtcbiAgICB0YXJnZXQucmVtb3ZlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckl0ZW1zKCkge1xuICAgIGl0ZW1zQ29udGFpbmVyRWxlLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0l0ZW0oaXRlbU9iaiwgY2FsbGJhY2spIHtcbiAgICBpdGVtc0NvbnRhaW5lckVsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIFRlbXBsYXRlLnJlbmRlckl0ZW0oaXRlbU9iaikpO1xuICAgIGNvbnN0IHRhcmdldCA9IGl0ZW1zQ29udGFpbmVyRWxlLnF1ZXJ5U2VsZWN0b3IoYC5pdGVtW2RhdGEtaWQ9XCIke2l0ZW1PYmouaWR9XCJdYCk7XG4gICAgaWYgKGl0ZW1PYmouY29tcGxldGVkKSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICBjb25zdCBjaGVja2JveCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlJyk7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgY2FsbGJhY2sodGFyZ2V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJpbmRBZGRJdGVtKGNhbGxiYWNrKSB7XG4gICAgYWRkSXRlbUVsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBjYWxsYmFjayhhZGRJdGVtRWxlLnZhbHVlKSwgZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gYmluZEFkZEl0ZW1MYWJlbCgpIHtcbiAgICBhZGRJdGVtRWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gaGlkZUFkZEl0ZW1MYWJlbCgpKTtcbiAgICBhZGRJdGVtRWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGhpZGVBZGRJdGVtTGFiZWwoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kVG9nZ2xlQ29tcGxldGVkKHRhcmdldCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBjaGVja2JveCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlJyk7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuICAgICAgY2FsbGJhY2sodGFyZ2V0LmRhdGFzZXQuaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYmluZERlbGV0ZUl0ZW0odGFyZ2V0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGJ0biA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyk7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgY2FsbGJhY2sodGFyZ2V0LmRhdGFzZXQuaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYmluZEVkaXRJdGVtKHRhcmdldCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBsYWJlbCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcudGV4dCcpO1xuICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgKCkgPT4ge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZWRpdHRpbmcnKTtcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSk7XG4gICAgICBsYWJlbC5mb2N1cygpO1xuICAgIH0pO1xuICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0dGluZycpO1xuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCBmYWxzZSk7XG4gICAgICBjYWxsYmFjayh0YXJnZXQuZGF0YXNldC5pZCwgbGFiZWwudGV4dENvbnRlbnQsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlRWxlbWVudCh0YXJnZXQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIGxhYmVsLmJsdXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJpbmRDaGFuZ2VSb3V0ZShlYWNoQnRuQ2FsbGJhY2ssIGVuZGluZ0NhbGxiYWNrKSB7XG4gICAgcm91dGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBlYWNoQnRuQ2FsbGJhY2soYnRuLmRhdGFzZXQucm91dGUpO1xuICAgICAgICByb3V0ZUJ0bnMuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICAgICAgaWYgKGVsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2N1cnJlbnQnKSkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZW5kaW5nQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJpbmRDbGVhckNvbXBsZXRlZEl0ZW1zKGNhbGxiYWNrKSB7XG4gICAgY29tcGxldGVkQ291bnRFbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYWxsYmFjaygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJpbmRUb2dnbGVBbGwoY2FsbGJhY2spIHtcbiAgICB0b2dnbGVBbGxFbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYWxsYmFjaygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dGb290ZXIoKSB7XG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICBmb290ZXJFbGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgVGVtcGxhdGUucmVuZGVyRm9vdGVyKEdpdGh1YkltZywgeWVhcikpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93RGF0ZSxcbiAgICBjbGVhckFkZEl0ZW1FbGUsXG4gICAgYmluZEFkZEl0ZW0sXG4gICAgYmluZEFkZEl0ZW1MYWJlbCxcbiAgICBiaW5kVG9nZ2xlQ29tcGxldGVkLFxuICAgIGJpbmREZWxldGVJdGVtLFxuICAgIGJpbmRFZGl0SXRlbSxcbiAgICBiaW5kQ2hhbmdlUm91dGUsXG4gICAgbWFya0N1cnJlbnRSb3V0ZSxcbiAgICBiaW5kQ2xlYXJDb21wbGV0ZWRJdGVtcyxcbiAgICBiaW5kVG9nZ2xlQWxsLFxuICAgIHVwZGF0ZUFjdGl2ZUl0ZW1zQ291bnQsXG4gICAgdXBkYXRlQ29tcGxldGVkSXRlbXNDb3VudCxcbiAgICBzaG93Q29tcGxldGVkSXRlbXNDb3VudCxcbiAgICBoaWRlQ29tcGxldGVkSXRlbXNDb3VudCxcbiAgICBoaWRlSXRlbXNCb2FyZCxcbiAgICBzaG93SXRlbXNCb2FyZCxcbiAgICBoaWRlVG9nZ2xlQWxsLFxuICAgIHRvZ2dsZUFsbENoZWNrZWQsXG4gICAgdG9nZ2xlQWxsTm90Q2hlY2tlZCxcbiAgICByZW1vdmVFbGVtZW50LFxuICAgIGNsZWFySXRlbXMsXG4gICAgc2hvd0l0ZW0sXG4gICAgc2hvd0Zvb3RlcixcbiAgfTtcbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBjc3MgZnJvbSAnLi4vY3NzL2luZGV4LmNzcyc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuXG4oKCkgPT4ge1xuICBDb250cm9sbGVyLmVuYWJsZUFkZEl0ZW0oKTtcbiAgQ29udHJvbGxlci5lbmFibGVDaGFuZ2VSb3V0ZSgpO1xuICBDb250cm9sbGVyLmVuYWJsZUNsZWFyQ29tcGxldGVkSXRlbXMoKTtcbiAgQ29udHJvbGxlci5lbmFibGVUb2dnbGVBbGwoKTtcbiAgQ29udHJvbGxlci5zaG93RGF0ZSgpO1xuICBDb250cm9sbGVyLnNob3dJdGVtcygpO1xuICBDb250cm9sbGVyLnVwZGF0ZUl0ZW1zQ291bnQoKTtcbiAgQ29udHJvbGxlci5zaG93Rm9vdGVyKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9