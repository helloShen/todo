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
  /* Pre-define queries for three different routes: all, active and completed.
   * Model.find() function accepts only an array of Query as input to filter items we want. */
  const ItemsQuery = (() => {
    const queryBank = {
      all: [],
      active: [_model__WEBPACK_IMPORTED_MODULE_1__["default"].Query('completed', false)],
      completed: [_model__WEBPACK_IMPORTED_MODULE_1__["default"].Query('completed', true)],
    };

    function create(route) {
      return queryBank[route];
    }
    return {
      create,
    };
  })();

  /* Get the queries from ItemsQuery, and feed them to Model.findItems() function. */
  function filterItems(route) {
    const queries = ItemsQuery.create(route);
    return _model__WEBPACK_IMPORTED_MODULE_1__["default"].findItems(queries);
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
    const itemsArr = filterItems(_model__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentRoute());
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].clearItems();
    itemsArr.forEach((itemObj) => {
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
    const completedItemsArr = filterItems('completed');
    completedItemsArr.forEach((itemObj) => {
      _model__WEBPACK_IMPORTED_MODULE_1__["default"].deleteItem(itemObj.id);
    });
    showItems();
    updateItemsCount();
  }

  /* Main logic of "toggle all" button. */
  function toggleAll() {
    const activeItemsArr = filterItems('active');
    if (activeItemsArr.length > 0) {
      activeItemsArr.forEach((itemObj) => {
        _model__WEBPACK_IMPORTED_MODULE_1__["default"].toggleItemCompleted(itemObj.id);
      });
      showItems();
      updateItemsCount();
    } else {
      const completedItemsArr = filterItems('completed');
      if (completedItemsArr.length > 0) {
        completedItemsArr.forEach((itemObj) => {
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

    return {
      getToday,
    };
  })();

  function showDate() {
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].showDate(MyDate.getToday());
  }

  /* Call view to print footer. */
  function showFooter() {
    _view__WEBPACK_IMPORTED_MODULE_0__["default"].showFooter();
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
  const itemStorage = (0,_store__WEBPACK_IMPORTED_MODULE_0__["default"])('items', []);
  const currentRouteStorage = (0,_store__WEBPACK_IMPORTED_MODULE_0__["default"])('currentRoute', 'all');

  /* A factory function creating new item object. */
  const Item = (text) => ({
    id: Date.now(),
    title: text,
    completed: false,
  });

  /**
   * Query is a [key, value] pair.
   * Once a query is created, it's read-only.
   */
  const Query = (inKey, inValue) => {
    const key = inKey;
    const value = inValue;

    function getKey() {
      return key;
    }

    function getValue() {
      return value;
    }

    return {
      getKey,
      getValue,
    };
  };

  /* Return all items meet the requirements of the query.
   * Queries is an array of [key, value] pair */
  function findItems(queries) {
    return itemStorage.read().filter((itemObj) => {
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
    const itemsArr = itemStorage.read();
    itemsArr.push(Item(text));
    itemStorage.write(itemsArr);
  }

  /* Remove an item from storage. */
  function deleteItem(itemId) {
    const itemsArr = itemStorage.read();
    const id = (typeof itemId === 'string') ? parseInt(itemId, 10) : itemId;
    const idx = itemsArr.findIndex((ele) => ele.id === id);
    if (idx === -1) return;
    itemsArr.splice(idx, 1);
    itemStorage.write(itemsArr);
  }

  /* Update properties of an item. */
  function updateItem(itemId, query) {
    const itemsArr = itemStorage.read();
    const id = (typeof itemId === 'string') ? parseInt(itemId, 10) : itemId;
    const idx = itemsArr.findIndex((ele) => ele.id === id);
    if (idx === -1) return;
    itemsArr[idx][query.getKey()] = query.getValue();
    itemStorage.write(itemsArr);
  }

  /* Toggle item "completed" property. */
  function toggleItemCompleted(itemId) {
    const itemsArr = itemStorage.read();
    const id = (typeof itemId === 'string') ? parseInt(itemId, 10) : itemId;
    const idx = itemsArr.findIndex((ele) => ele.id === id);
    if (idx === -1) return;
    const target = itemsArr[idx];
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
    Query,
    findItems,
    addItem,
    deleteItem,
    updateItem,
    toggleItemCompleted,
    getCurrentRoute,
    setCurrentRoute,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((inName, inDefaultValue) => {
  const name = inName;
  const defaultValue = inDefaultValue;
  const storage = window.localStorage;
  let liveStorage;

  function read() {
    return liveStorage || JSON.parse(storage.getItem(name)) || defaultValue;
  }

  function write(data) {
    liveStorage = data;
    storage.setItem(name, JSON.stringify(data));
  }

  return { read, write };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFB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RUFBRSxxRUFBNEI7QUFDOUIsRUFBRSw2RUFBb0M7QUFDdEMsRUFBRSxtRUFBMEI7QUFDNUIsRUFBRSw0REFBbUI7QUFDckIsRUFBRSw2REFBb0I7QUFDdEIsRUFBRSxvRUFBMkI7QUFDN0IsRUFBRSw4REFBcUI7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Nzcy9ub3JtLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy9tb2RlbC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL3N0b3JlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy92aWV3LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm0uY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucyk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7NDAwOzcwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1ibGFjazogIzI0MjkyRDtcXG4gICAgLS1ibGFjay1kaW1tZXI6ICMyQjMxMzc7XFxuICAgIC0tZ3JheTogIzU4NjA2YTtcXG4gICAgLS1saWdodC1ncmF5OiAjOTQ5REE3O1xcbiAgICAtLWxpZ2h0ZXItZ3JheTogI0I0QkRDODtcXG4gICAgLS1ib3JkZXItZ3JheTogI2U3ZTllYTtcXG4gICAgLS1iYWNrLWdyYXk6ICNmNmY4ZmE7XFxuICAgIC0td2hpdGU6ICNGRkZGRkY7XFxuICAgIC0tcmVkOiAjREIyQzAwO1xcbiAgICAtLWdyZWVuOiAjMkRBNDRFO1xcbiAgICAtLWJsdWU6ICMwRDc0RTc7XFxuICAgIC0tYmx1ZTI6ICMwOTY5REE7XFxuICAgIC0tcHVycGxlOiAjNmU1NDk0O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDJyZW0gMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIHtcXG4gICAgd2lkdGg6IDM2cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4udG9kbyA+IC50aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogN3JlbTtcXG4gICAgcGFkZGluZzogMnJlbSAyLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b2RvIC5kYXRlIHtcXG4gICAgd2lkdGg6IDdyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gM3JlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVyZW0gMS41cmVtO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLmRheSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi50b2RvIC5tb250aCB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udG9kbyAueWVhciB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcblxcbi50b2RvIC53ZWVrZGF5IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi50b2RvID4gLmFkZEl0ZW1Db250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvID4gLmFkZEl0ZW1Db250YWluZXIuYWxvbmUge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi50b2RvIC50b2dnbGVBbGw6OmFmdGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMCAuNzVyZW07XFxuICAgIGNvbnRlbnQ6IFxcXCJyYWRpb19idXR0b25fdW5jaGVja2VkXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbDpjaGVja2VkOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJjaGVja19jaXJjbGVcXFwiO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBvcGFjaXR5OiAuNjtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbC5oaWRlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW1Gb3JtIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtTGFiZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDFweDtcXG4gICAgdG9wOiAxLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW1MYWJlbC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW0ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW0uYWxvbmUge1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVyZW07XFxufVxcblxcbi50b2RvID4gLml0ZW1zQm9hcmQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRvZG8gPiAuaXRlbXNCb2FyZC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kbyAuaXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IC0xcHggMDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAxZnIgM3JlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudG9nZ2xlIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwicmFkaW9fYnV0dG9uX3VuY2hlY2tlZFxcXCI7XFxuICAgIG1hcmdpbjogMCAuNzVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIG9wYWNpdHk6IC42O1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50b2dnbGU6Y2hlY2tlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiY2hlY2tfY2lyY2xlXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudGV4dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbS5jb21wbGV0ZWQgPiAudGV4dCB7XFxuICAgIG9wYWNpdHk6IC42O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudGV4dC5lZGl0dGluZyB7XFxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAuZGVsZXRlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW06aG92ZXIgPiAuZGVsZXRlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC41cmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuYWN0aXZlSXRlbXNDb3VudCxcXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuY29tcGxldGVkSXRlbXNDb3VudCB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5hY3RpdmVJdGVtc0NvdW50IHtcXG4gICAgd2lkdGg6IDQuNXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQge1xcbiAgICB3aWR0aDogMTFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5jb21wbGV0ZWRJdGVtc0NvdW50LmhpZGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBjdXJzb3I6IGF1dG87XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5yb3V0ZXMge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxNHJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSA0cmVtIDZyZW07XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgLnJvdXRlIHtcXG4gICAgcGFkZGluZzogLjI1cmVtIC43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZS5jdXJyZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiA0LjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmF5KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMS41cmVtKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIC50aXAsXFxuLmZvb3RlciAuY29weXJpZ2h0LFxcbi5mb290ZXIgLnllYXIge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuMjVyZW07XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5mb290ZXIgLmdpdGh1YiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXgu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SUFDdkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCcuL25vcm0uY3NzJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzQwMDs3MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tYmxhY2s6ICMyNDI5MkQ7XFxuICAgIC0tYmxhY2stZGltbWVyOiAjMkIzMTM3O1xcbiAgICAtLWdyYXk6ICM1ODYwNmE7XFxuICAgIC0tbGlnaHQtZ3JheTogIzk0OURBNztcXG4gICAgLS1saWdodGVyLWdyYXk6ICNCNEJEQzg7XFxuICAgIC0tYm9yZGVyLWdyYXk6ICNlN2U5ZWE7XFxuICAgIC0tYmFjay1ncmF5OiAjZjZmOGZhO1xcbiAgICAtLXdoaXRlOiAjRkZGRkZGO1xcbiAgICAtLXJlZDogI0RCMkMwMDtcXG4gICAgLS1ncmVlbjogIzJEQTQ0RTtcXG4gICAgLS1ibHVlOiAjMEQ3NEU3O1xcbiAgICAtLWJsdWUyOiAjMDk2OURBO1xcbiAgICAtLXB1cnBsZTogIzZlNTQ5NDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWdyYXkpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAycmVtIDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIHdpZHRoOiAzNnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLnRvZG8gPiAudGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDdyZW07XFxuICAgIHBhZGRpbmc6IDJyZW0gMi41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC41cmVtO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9kbyAuZGF0ZSB7XFxuICAgIHdpZHRoOiA3cmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDNyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS41cmVtIDEuNXJlbTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5kYXkge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4udG9kbyAubW9udGgge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLnRvZG8gLnllYXIge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG5cXG4udG9kbyAud2Vla2RheSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4udG9kbyA+IC5hZGRJdGVtQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyA+IC5hZGRJdGVtQ29udGFpbmVyLmFsb25lIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNXJlbTtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbCB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsOjphZnRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW46IDAgLjc1cmVtO1xcbiAgICBjb250ZW50OiBcXFwicmFkaW9fYnV0dG9uX3VuY2hlY2tlZFxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi50b2RvIC50b2dnbGVBbGw6Y2hlY2tlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiY2hlY2tfY2lyY2xlXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgb3BhY2l0eTogLjY7XFxufVxcblxcbi50b2RvIC50b2dnbGVBbGwuaGlkZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtRm9ybSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbUxhYmVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxcHg7XFxuICAgIHRvcDogMS4ycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmF5KTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtTGFiZWwuaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtLmFsb25lIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4udG9kbyA+IC5pdGVtc0JvYXJkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvID4gLml0ZW1zQm9hcmQuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLml0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAtMXB4IDA7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gMWZyIDNyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50b2dnbGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcXFwiO1xcbiAgICBtYXJnaW46IDAgLjc1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBvcGFjaXR5OiAuNjtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudG9nZ2xlOmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcImNoZWNrX2NpcmNsZVxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRleHQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW0uY29tcGxldGVkID4gLnRleHQge1xcbiAgICBvcGFjaXR5OiAuNjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRleHQuZWRpdHRpbmcge1xcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLmRlbGV0ZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi50b2RvIC5pdGVtOmhvdmVyID4gLmRlbGV0ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBmb250LXNpemU6IC43NXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmFjdGl2ZUl0ZW1zQ291bnQsXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuYWN0aXZlSXRlbXNDb3VudCB7XFxuICAgIHdpZHRoOiA0LjVyZW07XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5jb21wbGV0ZWRJdGVtc0NvdW50IHtcXG4gICAgd2lkdGg6IDExcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuY29tcGxldGVkSXRlbXNDb3VudC5oaWRlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgY3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAucm91dGVzIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMTRyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gNHJlbSA2cmVtO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZSB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbSAuNzVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciAucm91dGU6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciAucm91dGUuY3VycmVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGhlaWdodDogNC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IC43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDEuNXJlbSk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciAudGlwLFxcbi5mb290ZXIgLmNvcHlyaWdodCxcXG4uZm9vdGVyIC55ZWFyIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjI1cmVtO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uZm9vdGVyIC5naXRodWIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ub3JtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLypcbiAqIGNvbnRyb2xsZXIuanMgaXMgYSBnZW5lcmFsIG1hbmFnZXIuXG4gKiBIZSBpcyB0aGUgb25seSBvbmUgd2hvIGtub3dzIGFsbCB0aGUgbG9naWMgb2YgZGlmZmVyZW50IGZlYXR1cmVzLlxuICogQnV0IGhlIGlzIGJsaW5kIGZyb20gYm90aCBkYXRhIGFuZCBET00uXG4gKiBtb2RlbC5qcyBhbmQgdmlldy5qcyBkbyB0aGVzZSBjb25jcmV0ZSB0YXNrcyBmb3IgaGltLlxuICovXG5cbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gIC8qIFByZS1kZWZpbmUgcXVlcmllcyBmb3IgdGhyZWUgZGlmZmVyZW50IHJvdXRlczogYWxsLCBhY3RpdmUgYW5kIGNvbXBsZXRlZC5cbiAgICogTW9kZWwuZmluZCgpIGZ1bmN0aW9uIGFjY2VwdHMgb25seSBhbiBhcnJheSBvZiBRdWVyeSBhcyBpbnB1dCB0byBmaWx0ZXIgaXRlbXMgd2Ugd2FudC4gKi9cbiAgY29uc3QgSXRlbXNRdWVyeSA9ICgoKSA9PiB7XG4gICAgY29uc3QgcXVlcnlCYW5rID0ge1xuICAgICAgYWxsOiBbXSxcbiAgICAgIGFjdGl2ZTogW01vZGVsLlF1ZXJ5KCdjb21wbGV0ZWQnLCBmYWxzZSldLFxuICAgICAgY29tcGxldGVkOiBbTW9kZWwuUXVlcnkoJ2NvbXBsZXRlZCcsIHRydWUpXSxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlKHJvdXRlKSB7XG4gICAgICByZXR1cm4gcXVlcnlCYW5rW3JvdXRlXTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZSxcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8qIEdldCB0aGUgcXVlcmllcyBmcm9tIEl0ZW1zUXVlcnksIGFuZCBmZWVkIHRoZW0gdG8gTW9kZWwuZmluZEl0ZW1zKCkgZnVuY3Rpb24uICovXG4gIGZ1bmN0aW9uIGZpbHRlckl0ZW1zKHJvdXRlKSB7XG4gICAgY29uc3QgcXVlcmllcyA9IEl0ZW1zUXVlcnkuY3JlYXRlKHJvdXRlKTtcbiAgICByZXR1cm4gTW9kZWwuZmluZEl0ZW1zKHF1ZXJpZXMpO1xuICB9XG5cbiAgLyogVXBkYXRlIHRoZSBjb3VudCBudW1iZXIgb2YgdGhyZWUgZGlmZmVyZW50IHJvdXRlcyhhbGwsIGFjdGl2ZSBhbmQgY29tcGxldGVkKSBsaXN0ZWRcbiAgICogb24gdG9kbyBib2FyZC5cbiAgICogVGhlIGVudGlyZSBpdGVtcyBib2FyZCB3aWxsIGJlIGhpZGRlbiBpZiBubyBpdGVtcyBsZWZ0IGluIGl0ZW1zIGxpc3QuICovXG4gIGZ1bmN0aW9uIHVwZGF0ZUl0ZW1zQ291bnQoKSB7XG4gICAgY29uc3QgYWN0aXZlQ291bnQgPSBmaWx0ZXJJdGVtcygnYWN0aXZlJykubGVuZ3RoO1xuICAgIGNvbnN0IGNvbXBsZXRlZENvdW50ID0gZmlsdGVySXRlbXMoJ2NvbXBsZXRlZCcpLmxlbmd0aDtcbiAgICBWaWV3LnVwZGF0ZUFjdGl2ZUl0ZW1zQ291bnQoYWN0aXZlQ291bnQpO1xuICAgIFZpZXcudXBkYXRlQ29tcGxldGVkSXRlbXNDb3VudChjb21wbGV0ZWRDb3VudCk7XG4gICAgaWYgKGNvbXBsZXRlZENvdW50ID09PSAwKSB7XG4gICAgICBWaWV3LmhpZGVDb21wbGV0ZWRJdGVtc0NvdW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFZpZXcuc2hvd0NvbXBsZXRlZEl0ZW1zQ291bnQoKTtcbiAgICB9XG4gICAgaWYgKGFjdGl2ZUNvdW50ICsgY29tcGxldGVkQ291bnQgPT09IDApIHsgLy8gaGlkZSB0aGUgZW50aXJlIGl0ZW0gYm9hcmQgaWYgMCBpdGVtIGxlZnRcbiAgICAgIFZpZXcuaGlkZUl0ZW1zQm9hcmQoKTtcbiAgICAgIFZpZXcuaGlkZVRvZ2dsZUFsbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBWaWV3LnNob3dJdGVtc0JvYXJkKCk7XG4gICAgICBpZiAoYWN0aXZlQ291bnQgPiAwKSB7XG4gICAgICAgIFZpZXcudG9nZ2xlQWxsTm90Q2hlY2tlZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgVmlldy50b2dnbGVBbGxDaGVja2VkKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogR2V0IHRoZSBjdXJyZW50IHJvdXRlIGZyb20gc3RvcmFnZSxcbiAgICogZmlsdGVyIGl0ZW1zIHVuZGVyIGN1cnJlbnQgcm91dGUgYW5kIGNhbGwgdmlldyB0byBjcmVhdGUgaXRlbXMgY2FyZCBpbiBET00uXG4gICAqIFZpZXcuc2hvd0l0ZW0oKSBmdW5jdGlvbiByZXF1aXJlcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHRlbGwgaGltXG4gICAqIHdoaWNoIGJ1dHRvbnMgbmVlZCB0byBiZSBhY3RpdmF0ZWQgYWZ0ZXIgaXRlbSBjYXJkIGlzIGNyZWF0ZWQuICovXG4gIGZ1bmN0aW9uIHNob3dJdGVtcygpIHtcbiAgICBjb25zdCBpdGVtc0FyciA9IGZpbHRlckl0ZW1zKE1vZGVsLmdldEN1cnJlbnRSb3V0ZSgpKTtcbiAgICBWaWV3LmNsZWFySXRlbXMoKTtcbiAgICBpdGVtc0Fyci5mb3JFYWNoKChpdGVtT2JqKSA9PiB7XG4gICAgICBWaWV3LnNob3dJdGVtKGl0ZW1PYmosICh0YXJnZXQpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICAgIFZpZXcuYmluZFRvZ2dsZUNvbXBsZXRlZCh0YXJnZXQsIHRvZ2dsZUNvbXBsZXRlZCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgICBWaWV3LmJpbmREZWxldGVJdGVtKHRhcmdldCwgZGVsZXRlSXRlbSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgICBWaWV3LmJpbmRFZGl0SXRlbSh0YXJnZXQsIGVkaXRJdGVtKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyogTWFpbiBsb2dpYyBvZiBob3cgdG8gYWRkIGEgbmV3IGl0ZW0uICovXG4gIGZ1bmN0aW9uIGFkZEl0ZW0odGV4dCkge1xuICAgIE1vZGVsLmFkZEl0ZW0odGV4dCk7XG4gICAgVmlldy5jbGVhckFkZEl0ZW1FbGUoKTtcbiAgICBzaG93SXRlbXMoKTtcbiAgICB1cGRhdGVJdGVtc0NvdW50KCk7XG4gIH1cblxuICAvKiBNYWluIGxvZ2ljIG9mIHRvZ2dsaW5nIGFuIGl0ZW0gdG8gY29tcGxldGVkLiAqL1xuICBmdW5jdGlvbiB0b2dnbGVDb21wbGV0ZWQoaXRlbUlkKSB7XG4gICAgTW9kZWwudG9nZ2xlSXRlbUNvbXBsZXRlZChpdGVtSWQpO1xuICAgIHNob3dJdGVtcygpOyAvLyBtdXN0IHJlZnJlc2ggY3VycmVudCByb3V0ZS5cbiAgICB1cGRhdGVJdGVtc0NvdW50KCk7XG4gIH1cblxuICAvKiBNYWluIGxvZ2ljIG9mIHdoYXQgaGFwcGVuZCB3aGVuIGRlbGV0ZSBidXR0b24gaXMgY2xpY2tlZC4gKi9cbiAgZnVuY3Rpb24gZGVsZXRlSXRlbShpdGVtSWQpIHtcbiAgICBNb2RlbC5kZWxldGVJdGVtKGl0ZW1JZCk7XG4gICAgdXBkYXRlSXRlbXNDb3VudCgpO1xuICB9XG5cbiAgLyogTWFpbiBsb2dpbiBvZiBlZGl0aW5nIGFuIGl0ZW0uICovXG4gIGZ1bmN0aW9uIGVkaXRJdGVtKGl0ZW1JZCwgaXRlbVZhbHVlLCBjYWxsYmFjaykge1xuICAgIGlmICghaXRlbVZhbHVlKSB7XG4gICAgICBNb2RlbC5kZWxldGVJdGVtKGl0ZW1JZCk7XG4gICAgICB1cGRhdGVJdGVtc0NvdW50KCk7XG4gICAgICBjYWxsYmFjaygpOyAvLyBjYWxsYmFjayB2aWV3IGlmIG5lZWQgdG8gcmVtb3ZlIHRoYXQgaXRlbSBmcm9tIHZpZXcuXG4gICAgfSBlbHNlIHtcbiAgICAgIE1vZGVsLnVwZGF0ZUl0ZW0oaXRlbUlkLCBNb2RlbC5RdWVyeSgndGl0bGUnLCBpdGVtVmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICAvKiBNYWluIGxvZ2ljIG9mIHN3aXRjaGluZyByb3V0ZS4gKi9cbiAgZnVuY3Rpb24gY2hhbmdlUm91dGUocm91dGUpIHtcbiAgICBNb2RlbC5zZXRDdXJyZW50Um91dGUocm91dGUpO1xuICAgIHNob3dJdGVtcygpO1xuICB9XG5cbiAgLyogTWFpbiBsb2dpYyBvZiBcImNsZWFyIGFsbCBjb21wbGV0ZWRcIiBidXR0b24uICovXG4gIGZ1bmN0aW9uIGNsZWFyQWxsQ29tcGxldGVkSXRlbXMoKSB7XG4gICAgY29uc3QgY29tcGxldGVkSXRlbXNBcnIgPSBmaWx0ZXJJdGVtcygnY29tcGxldGVkJyk7XG4gICAgY29tcGxldGVkSXRlbXNBcnIuZm9yRWFjaCgoaXRlbU9iaikgPT4ge1xuICAgICAgTW9kZWwuZGVsZXRlSXRlbShpdGVtT2JqLmlkKTtcbiAgICB9KTtcbiAgICBzaG93SXRlbXMoKTtcbiAgICB1cGRhdGVJdGVtc0NvdW50KCk7XG4gIH1cblxuICAvKiBNYWluIGxvZ2ljIG9mIFwidG9nZ2xlIGFsbFwiIGJ1dHRvbi4gKi9cbiAgZnVuY3Rpb24gdG9nZ2xlQWxsKCkge1xuICAgIGNvbnN0IGFjdGl2ZUl0ZW1zQXJyID0gZmlsdGVySXRlbXMoJ2FjdGl2ZScpO1xuICAgIGlmIChhY3RpdmVJdGVtc0Fyci5sZW5ndGggPiAwKSB7XG4gICAgICBhY3RpdmVJdGVtc0Fyci5mb3JFYWNoKChpdGVtT2JqKSA9PiB7XG4gICAgICAgIE1vZGVsLnRvZ2dsZUl0ZW1Db21wbGV0ZWQoaXRlbU9iai5pZCk7XG4gICAgICB9KTtcbiAgICAgIHNob3dJdGVtcygpO1xuICAgICAgdXBkYXRlSXRlbXNDb3VudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb21wbGV0ZWRJdGVtc0FyciA9IGZpbHRlckl0ZW1zKCdjb21wbGV0ZWQnKTtcbiAgICAgIGlmIChjb21wbGV0ZWRJdGVtc0Fyci5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbXBsZXRlZEl0ZW1zQXJyLmZvckVhY2goKGl0ZW1PYmopID0+IHtcbiAgICAgICAgICBNb2RlbC50b2dnbGVJdGVtQ29tcGxldGVkKGl0ZW1PYmouaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2hvd0l0ZW1zKCk7XG4gICAgICAgIHVwZGF0ZUl0ZW1zQ291bnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiBDYWxsIFZpZXcgdG8gYmluZCBldmVudCBsaXN0ZW5lcnMgZm9yIGFkZGluZyBuZXcgaXRlbSBmZWF0dXJlLlxuICAgKiBNYWluIGxvZ2ljIGFkZEl0ZW0oKSBmdW5jdGlvbiBpcyBmZWQgYXMgYSBjYWxsYmFjayBmdW5jdGlvbi4gKi9cbiAgZnVuY3Rpb24gZW5hYmxlQWRkSXRlbSgpIHtcbiAgICBWaWV3LmJpbmRBZGRJdGVtKGFkZEl0ZW0pO1xuICAgIFZpZXcuYmluZEFkZEl0ZW1MYWJlbCgpO1xuICB9XG5cbiAgLyogQ2FsbCBWaWV3IHRvIGJpbmQgZXZlbnQgbGlzdGVuZXJzIGZvciByb3V0ZSBzd2l0Y2ggYnV0dG9ucy5cbiAgICogTWFpbiBsb2dpYyBmdW5jdGlvbiBjaGFuZ2VSb3V0ZSgpIGlzIGZlZCBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiAqL1xuICBmdW5jdGlvbiBlbmFibGVDaGFuZ2VSb3V0ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50Um91dGUgPSBNb2RlbC5nZXRDdXJyZW50Um91dGUoKTtcbiAgICBWaWV3LmJpbmRDaGFuZ2VSb3V0ZShjaGFuZ2VSb3V0ZSwgKCkgPT4gVmlldy5tYXJrQ3VycmVudFJvdXRlKGN1cnJlbnRSb3V0ZSkpO1xuICB9XG5cbiAgLyogQ2FsbCBWaWV3IHRvIGJpbmQgZXZlbnQgbGlzdGVuZXJzIGZvciBjbGVhciBidXR0b25zLlxuICAgKiBNYWluIGxvZ2ljIGNsZWFyQWxsQ29tcGxldGVkSXRlbSgpIGZ1bmN0aW9uIGlzIGZlZCBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiAqL1xuICBmdW5jdGlvbiBlbmFibGVDbGVhckNvbXBsZXRlZEl0ZW1zKCkge1xuICAgIFZpZXcuYmluZENsZWFyQ29tcGxldGVkSXRlbXMoY2xlYXJBbGxDb21wbGV0ZWRJdGVtcyk7XG4gIH1cblxuICAvKiBDYWxsIFZpZXcgdG8gYmluZCBldmVudCBsaXN0ZW5lcnMgZm9yIHRvZ2dsZUFsbCBidXR0b25zLlxuICAgKiBNYWluIGxvZ2ljIHRvZ2dsZUFsbCgpIGZ1bmN0aW9uIGlzIGZlZCBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiAqL1xuICBmdW5jdGlvbiBlbmFibGVUb2dnbGVBbGwoKSB7XG4gICAgVmlldy5iaW5kVG9nZ2xlQWxsKHRvZ2dsZUFsbCk7XG4gIH1cblxuICAvKiBGb3JtYXQgdGhlIGRhdGUuICovXG4gIGNvbnN0IE15RGF0ZSA9ICgoKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyxcbiAgICB9O1xuXG4gICAgLyogQ3V0IHRoZSBkYXRlIHN0cmluZyBpbnRvIHdlZWtkYXksIGRheSwgbW9udGggYW5kIHllYXIuIFZpZXcgbW9kdWxlIGtub3dzIGhvdyB0byBzaG93IHRoZW0uICovXG4gICAgZnVuY3Rpb24gZ2V0VG9kYXkoKSB7XG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCB0b2RheVN0ciA9IHRvZGF5LnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKTsgLy8gU2F0dXJkYXksIFNlcHRlbWJlciAxNywgMjAxNlxuICAgICAgY29uc3QgW3dlZWtkYXksIG1vbnRoRGF5LCB5ZWFyXSA9IHRvZGF5U3RyLnNwbGl0KCcsICcpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxuICAgICAgbGV0IFttb250aCwgZGF5XSA9IG1vbnRoRGF5LnNwbGl0KCcgJyk7XG4gICAgICBtb250aCA9IG1vbnRoLnNsaWNlKDAsIDMpLnRvVXBwZXJDYXNlKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3ZWVrZGF5LCBkYXksIG1vbnRoLCB5ZWFyLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0VG9kYXksXG4gICAgfTtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiBzaG93RGF0ZSgpIHtcbiAgICBWaWV3LnNob3dEYXRlKE15RGF0ZS5nZXRUb2RheSgpKTtcbiAgfVxuXG4gIC8qIENhbGwgdmlldyB0byBwcmludCBmb290ZXIuICovXG4gIGZ1bmN0aW9uIHNob3dGb290ZXIoKSB7XG4gICAgVmlldy5zaG93Rm9vdGVyKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNob3dGb290ZXIsXG4gICAgc2hvd0RhdGUsXG4gICAgc2hvd0l0ZW1zLFxuICAgIHVwZGF0ZUl0ZW1zQ291bnQsXG4gICAgZW5hYmxlQWRkSXRlbSxcbiAgICBlbmFibGVDaGFuZ2VSb3V0ZSxcbiAgICBlbmFibGVDbGVhckNvbXBsZXRlZEl0ZW1zLFxuICAgIGVuYWJsZVRvZ2dsZUFsbCxcbiAgfTtcbn0pKCk7XG4iLCIvKlxuICogQSBEQU8oRGF0YSBBY2Nlc3MgT2JqZWN0KSBBUEkuXG4gKiBJdCdzIGF3YXJlIG9mIHRoZSBkYXRhIHN0cnVjdHVyZSBvZiBJdGVtIGFuZCBvdGhlciBvYmplY3RzLlxuICogQW5kIGtub3dzIGhvdyB0byBpbnNlcnQsIHVwZGF0ZSwgZGVsZXRlIGFuZCByZWFkIHRoZXNlIGRhdGEuXG4gKi9cblxuaW1wb3J0IFN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBjb25zdCBpdGVtU3RvcmFnZSA9IFN0b3JlKCdpdGVtcycsIFtdKTtcbiAgY29uc3QgY3VycmVudFJvdXRlU3RvcmFnZSA9IFN0b3JlKCdjdXJyZW50Um91dGUnLCAnYWxsJyk7XG5cbiAgLyogQSBmYWN0b3J5IGZ1bmN0aW9uIGNyZWF0aW5nIG5ldyBpdGVtIG9iamVjdC4gKi9cbiAgY29uc3QgSXRlbSA9ICh0ZXh0KSA9PiAoe1xuICAgIGlkOiBEYXRlLm5vdygpLFxuICAgIHRpdGxlOiB0ZXh0LFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBRdWVyeSBpcyBhIFtrZXksIHZhbHVlXSBwYWlyLlxuICAgKiBPbmNlIGEgcXVlcnkgaXMgY3JlYXRlZCwgaXQncyByZWFkLW9ubHkuXG4gICAqL1xuICBjb25zdCBRdWVyeSA9IChpbktleSwgaW5WYWx1ZSkgPT4ge1xuICAgIGNvbnN0IGtleSA9IGluS2V5O1xuICAgIGNvbnN0IHZhbHVlID0gaW5WYWx1ZTtcblxuICAgIGZ1bmN0aW9uIGdldEtleSgpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldEtleSxcbiAgICAgIGdldFZhbHVlLFxuICAgIH07XG4gIH07XG5cbiAgLyogUmV0dXJuIGFsbCBpdGVtcyBtZWV0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHF1ZXJ5LlxuICAgKiBRdWVyaWVzIGlzIGFuIGFycmF5IG9mIFtrZXksIHZhbHVlXSBwYWlyICovXG4gIGZ1bmN0aW9uIGZpbmRJdGVtcyhxdWVyaWVzKSB7XG4gICAgcmV0dXJuIGl0ZW1TdG9yYWdlLnJlYWQoKS5maWx0ZXIoKGl0ZW1PYmopID0+IHtcbiAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgICAgcXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuICAgICAgICBpZiAoaXRlbU9ialtgJHtxdWVyeS5nZXRLZXkoKX1gXSAhPT0gcXVlcnkuZ2V0VmFsdWUoKSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICAvKiBDcmVhdGUgYSBuZXcgSXRlbSBvYmplY3QgYW5kIHNhdmUgaXQgaW50byBzdG9yYWdlLiAqL1xuICBmdW5jdGlvbiBhZGRJdGVtKHRleHQpIHtcbiAgICBjb25zdCBpdGVtc0FyciA9IGl0ZW1TdG9yYWdlLnJlYWQoKTtcbiAgICBpdGVtc0Fyci5wdXNoKEl0ZW0odGV4dCkpO1xuICAgIGl0ZW1TdG9yYWdlLndyaXRlKGl0ZW1zQXJyKTtcbiAgfVxuXG4gIC8qIFJlbW92ZSBhbiBpdGVtIGZyb20gc3RvcmFnZS4gKi9cbiAgZnVuY3Rpb24gZGVsZXRlSXRlbShpdGVtSWQpIHtcbiAgICBjb25zdCBpdGVtc0FyciA9IGl0ZW1TdG9yYWdlLnJlYWQoKTtcbiAgICBjb25zdCBpZCA9ICh0eXBlb2YgaXRlbUlkID09PSAnc3RyaW5nJykgPyBwYXJzZUludChpdGVtSWQsIDEwKSA6IGl0ZW1JZDtcbiAgICBjb25zdCBpZHggPSBpdGVtc0Fyci5maW5kSW5kZXgoKGVsZSkgPT4gZWxlLmlkID09PSBpZCk7XG4gICAgaWYgKGlkeCA9PT0gLTEpIHJldHVybjtcbiAgICBpdGVtc0Fyci5zcGxpY2UoaWR4LCAxKTtcbiAgICBpdGVtU3RvcmFnZS53cml0ZShpdGVtc0Fycik7XG4gIH1cblxuICAvKiBVcGRhdGUgcHJvcGVydGllcyBvZiBhbiBpdGVtLiAqL1xuICBmdW5jdGlvbiB1cGRhdGVJdGVtKGl0ZW1JZCwgcXVlcnkpIHtcbiAgICBjb25zdCBpdGVtc0FyciA9IGl0ZW1TdG9yYWdlLnJlYWQoKTtcbiAgICBjb25zdCBpZCA9ICh0eXBlb2YgaXRlbUlkID09PSAnc3RyaW5nJykgPyBwYXJzZUludChpdGVtSWQsIDEwKSA6IGl0ZW1JZDtcbiAgICBjb25zdCBpZHggPSBpdGVtc0Fyci5maW5kSW5kZXgoKGVsZSkgPT4gZWxlLmlkID09PSBpZCk7XG4gICAgaWYgKGlkeCA9PT0gLTEpIHJldHVybjtcbiAgICBpdGVtc0FycltpZHhdW3F1ZXJ5LmdldEtleSgpXSA9IHF1ZXJ5LmdldFZhbHVlKCk7XG4gICAgaXRlbVN0b3JhZ2Uud3JpdGUoaXRlbXNBcnIpO1xuICB9XG5cbiAgLyogVG9nZ2xlIGl0ZW0gXCJjb21wbGV0ZWRcIiBwcm9wZXJ0eS4gKi9cbiAgZnVuY3Rpb24gdG9nZ2xlSXRlbUNvbXBsZXRlZChpdGVtSWQpIHtcbiAgICBjb25zdCBpdGVtc0FyciA9IGl0ZW1TdG9yYWdlLnJlYWQoKTtcbiAgICBjb25zdCBpZCA9ICh0eXBlb2YgaXRlbUlkID09PSAnc3RyaW5nJykgPyBwYXJzZUludChpdGVtSWQsIDEwKSA6IGl0ZW1JZDtcbiAgICBjb25zdCBpZHggPSBpdGVtc0Fyci5maW5kSW5kZXgoKGVsZSkgPT4gZWxlLmlkID09PSBpZCk7XG4gICAgaWYgKGlkeCA9PT0gLTEpIHJldHVybjtcbiAgICBjb25zdCB0YXJnZXQgPSBpdGVtc0FycltpZHhdO1xuICAgIHRhcmdldC5jb21wbGV0ZWQgPSAhdGFyZ2V0LmNvbXBsZXRlZDtcbiAgICBpdGVtU3RvcmFnZS53cml0ZShpdGVtc0Fycik7XG4gIH1cblxuICAvKiBBIHdyYXBwZXIgZnVuY3Rpb24uIFNldCBjdXJyZW50IHJvdXRlIHRvIGRlZmF1bHQgdmFsdWUsIGlmIG5vIHJvdXRlIGV4aXRzLiAqL1xuICBmdW5jdGlvbiBnZXRDdXJyZW50Um91dGUoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRSb3V0ZVN0b3JhZ2UucmVhZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q3VycmVudFJvdXRlKHJvdXRlKSB7XG4gICAgY3VycmVudFJvdXRlU3RvcmFnZS53cml0ZShyb3V0ZSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIFF1ZXJ5LFxuICAgIGZpbmRJdGVtcyxcbiAgICBhZGRJdGVtLFxuICAgIGRlbGV0ZUl0ZW0sXG4gICAgdXBkYXRlSXRlbSxcbiAgICB0b2dnbGVJdGVtQ29tcGxldGVkLFxuICAgIGdldEN1cnJlbnRSb3V0ZSxcbiAgICBzZXRDdXJyZW50Um91dGUsXG4gIH07XG59KSgpO1xuIiwiLyogc3RvcmUuanMga25vd3Mgb25seSBob3cgdG8gcmVhZC93cml0ZSBzdHJpbmcgZGF0YSBmcm9tL3RvIERvY3VtZW50LmxvY2FsU3RvcmFnZS5cbiAqIEFsbCBpdGVtcyBhcmUgc3RvcmVkIGFzIGEgbG9uZyBzdHJpbmcgaW4gbG9jYWxTdG9yYWdlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGluTmFtZSwgaW5EZWZhdWx0VmFsdWUpID0+IHtcbiAgY29uc3QgbmFtZSA9IGluTmFtZTtcbiAgY29uc3QgZGVmYXVsdFZhbHVlID0gaW5EZWZhdWx0VmFsdWU7XG4gIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICBsZXQgbGl2ZVN0b3JhZ2U7XG5cbiAgZnVuY3Rpb24gcmVhZCgpIHtcbiAgICByZXR1cm4gbGl2ZVN0b3JhZ2UgfHwgSlNPTi5wYXJzZShzdG9yYWdlLmdldEl0ZW0obmFtZSkpIHx8IGRlZmF1bHRWYWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyaXRlKGRhdGEpIHtcbiAgICBsaXZlU3RvcmFnZSA9IGRhdGE7XG4gICAgc3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuXG4gIHJldHVybiB7IHJlYWQsIHdyaXRlIH07XG59O1xuIiwiLypcbiAqIEEgaGVscGVyIG9mIHZpZXcuanMuIE9ubHkgdXNlZCB0byBzdG9yZSBIVE1MIHRlbXBsYXRlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgZnVuY3Rpb24gcmVuZGVySXRlbShpdGVtT2JqKSB7XG4gICAgY29uc3Qgc3RyID0gYDxkaXYgY2xhc3M9XCJpdGVtXCIgZGF0YS1pZD0ke2l0ZW1PYmouaWR9PlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidG9nZ2xlIG1hdGVyaWFsLWljb25zXCIgdHlwZT1cImNoZWNrYm94XCI+IFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dFwiPiR7aXRlbU9iai50aXRsZX08L2xhYmVsPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJkZWxldGUgbWF0ZXJpYWwtaWNvbnNcIj5jbGVhcjwvaT5cbiAgICAgICAgPC9kaXY+YDtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyRm9vdGVyKGdpdGh1YkltZywgeWVhcikge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInRpcFwiPkRvdWJsZSBjbGljayB0byBlZGl0IHRvZG8uPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb3B5cmlnaHRcIj5Db3B5cmlnaHQgTUlUIMKpIGhpcmVtZS5zaGVuQGdtYWlsLmNvbSAmbmJzcDt8Jm5ic3A7IFNvdXJjZSBjb2RlIC0gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9oZWxsb1NoZW4vdG9kb1wiPjxpbWcgY2xhc3M9XCJnaXRodWJcIiBzcmM9XCIke2dpdGh1YkltZ31cIj48L2E+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ5ZWFyXCI+MjAyMS0ke3llYXJ9PC9kaXY+YDtcbiAgfVxuXG4gIHJldHVybiB7IHJlbmRlckl0ZW0sIHJlbmRlckZvb3RlciB9O1xufSkoKTtcbiIsIi8qXG4gKiBBbGwgRE9NIG1hbmlwdWxhdGlvbnMgZ28gdG8gdGhpcyBmaWxlLlxuICovXG5pbXBvcnQgVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSc7XG5pbXBvcnQgR2l0aHViSW1nIGZyb20gJy4uL2Fzc2V0cy9pbWcvZ2l0aHViX2JsYWNrLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gIGNvbnN0IHRvZG9FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kbycpO1xuICBjb25zdCB0aXRsZUVsZSA9IHRvZG9FbGUucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gIGNvbnN0IGRhdGVFbGUgPSB0aXRsZUVsZS5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuICBjb25zdCBkYXlFbGUgPSBkYXRlRWxlLnF1ZXJ5U2VsZWN0b3IoJy5kYXknKTtcbiAgY29uc3QgbW9udGhFbGUgPSBkYXRlRWxlLnF1ZXJ5U2VsZWN0b3IoJy5tb250aCcpO1xuICBjb25zdCB5ZWFyRWxlID0gZGF0ZUVsZS5xdWVyeVNlbGVjdG9yKCcueWVhcicpO1xuICBjb25zdCB3ZWVrZGF5RWxlID0gdGl0bGVFbGUucXVlcnlTZWxlY3RvcignLndlZWtkYXknKTtcbiAgY29uc3QgdG9nZ2xlQWxsRWxlID0gdG9kb0VsZS5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlQWxsJyk7XG4gIGNvbnN0IGFkZEl0ZW1Db250YWluZXJFbGUgPSB0b2RvRWxlLnF1ZXJ5U2VsZWN0b3IoJy5hZGRJdGVtQ29udGFpbmVyJyk7XG4gIGNvbnN0IGFkZEl0ZW1FbGUgPSBhZGRJdGVtQ29udGFpbmVyRWxlLnF1ZXJ5U2VsZWN0b3IoJy5hZGRJdGVtJyk7XG4gIGNvbnN0IGFkZEl0ZW1MYWJlbEVsZSA9IGFkZEl0ZW1Db250YWluZXJFbGUucXVlcnlTZWxlY3RvcignLmFkZEl0ZW1MYWJlbCcpO1xuICBjb25zdCBpdGVtc0JvYXJkRWxlID0gdG9kb0VsZS5xdWVyeVNlbGVjdG9yKCcuaXRlbXNCb2FyZCcpO1xuICBjb25zdCBpdGVtc0NvbnRhaW5lckVsZSA9IGl0ZW1zQm9hcmRFbGUucXVlcnlTZWxlY3RvcignLml0ZW1zQ29udGFpbmVyJyk7XG4gIGNvbnN0IGl0ZW1zRm9vdGVyRWxlID0gaXRlbXNCb2FyZEVsZS5xdWVyeVNlbGVjdG9yKCcuaXRlbXNGb290ZXInKTtcbiAgY29uc3Qgcm91dGVCdG5zID0gaXRlbXNGb290ZXJFbGUucXVlcnlTZWxlY3RvckFsbCgnLnJvdXRlJyk7XG4gIGNvbnN0IGFjdGl2ZUNvdW50RWxlID0gaXRlbXNGb290ZXJFbGUucXVlcnlTZWxlY3RvcignLmFjdGl2ZUl0ZW1zQ291bnQnKTtcbiAgY29uc3QgYWN0aXZlQ291bnROdW1FbGUgPSBhY3RpdmVDb3VudEVsZS5xdWVyeVNlbGVjdG9yKCcuY291bnQnKTtcbiAgY29uc3QgY29tcGxldGVkQ291bnRFbGUgPSBpdGVtc0Zvb3RlckVsZS5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkSXRlbXNDb3VudCcpO1xuICBjb25zdCBjb21wbGV0ZWRDb3VudE51bUVsZSA9IGNvbXBsZXRlZENvdW50RWxlLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudCcpO1xuICBjb25zdCBmb290ZXJFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XG5cbiAgZnVuY3Rpb24gc2hvd0RhdGUodG9kYXkpIHtcbiAgICBkYXlFbGUudGV4dENvbnRlbnQgPSB0b2RheS5kYXk7XG4gICAgbW9udGhFbGUudGV4dENvbnRlbnQgPSB0b2RheS5tb250aDtcbiAgICB5ZWFyRWxlLnRleHRDb250ZW50ID0gdG9kYXkueWVhcjtcbiAgICB3ZWVrZGF5RWxlLnRleHRDb250ZW50ID0gdG9kYXkud2Vla2RheTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQWRkSXRlbUVsZSgpIHtcbiAgICBhZGRJdGVtRWxlLnZhbHVlID0gJyc7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlQWRkSXRlbUxhYmVsKCkge1xuICAgIGlmIChhZGRJdGVtRWxlLnZhbHVlID09PSAnJykge1xuICAgICAgYWRkSXRlbUxhYmVsRWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkSXRlbUxhYmVsRWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYXJrQ3VycmVudFJvdXRlKHJvdXRlKSB7XG4gICAgcm91dGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgaWYgKGJ0bi5kYXRhc2V0LnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQWN0aXZlSXRlbXNDb3VudChjb3VudCkge1xuICAgIGFjdGl2ZUNvdW50TnVtRWxlLnRleHRDb250ZW50ID0gY291bnQ7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDb21wbGV0ZWRJdGVtc0NvdW50KGNvdW50KSB7XG4gICAgY29tcGxldGVkQ291bnROdW1FbGUudGV4dENvbnRlbnQgPSBjb3VudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dDb21wbGV0ZWRJdGVtc0NvdW50KCkge1xuICAgIGNvbXBsZXRlZENvdW50RWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVDb21wbGV0ZWRJdGVtc0NvdW50KCkge1xuICAgIGNvbXBsZXRlZENvdW50RWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dJdGVtc0JvYXJkKCkge1xuICAgIGl0ZW1zQm9hcmRFbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgYWRkSXRlbUNvbnRhaW5lckVsZS5jbGFzc0xpc3QucmVtb3ZlKCdhbG9uZScpO1xuICAgIGFkZEl0ZW1FbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWxvbmUnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVJdGVtc0JvYXJkKCkge1xuICAgIGl0ZW1zQm9hcmRFbGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgYWRkSXRlbUNvbnRhaW5lckVsZS5jbGFzc0xpc3QuYWRkKCdhbG9uZScpO1xuICAgIGFkZEl0ZW1FbGUuY2xhc3NMaXN0LmFkZCgnYWxvbmUnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVUb2dnbGVBbGwoKSB7XG4gICAgdG9nZ2xlQWxsRWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFsbENoZWNrZWQoKSB7XG4gICAgdG9nZ2xlQWxsRWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB0b2dnbGVBbGxFbGUuY2hlY2tlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVBbGxOb3RDaGVja2VkKCkge1xuICAgIHRvZ2dsZUFsbEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgdG9nZ2xlQWxsRWxlLmNoZWNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQodGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnJlbW92ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJJdGVtcygpIHtcbiAgICBpdGVtc0NvbnRhaW5lckVsZS5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dJdGVtKGl0ZW1PYmosIGNhbGxiYWNrKSB7XG4gICAgaXRlbXNDb250YWluZXJFbGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBUZW1wbGF0ZS5yZW5kZXJJdGVtKGl0ZW1PYmopKTtcbiAgICBjb25zdCB0YXJnZXQgPSBpdGVtc0NvbnRhaW5lckVsZS5xdWVyeVNlbGVjdG9yKGAuaXRlbVtkYXRhLWlkPVwiJHtpdGVtT2JqLmlkfVwiXWApO1xuICAgIGlmIChpdGVtT2JqLmNvbXBsZXRlZCkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgICAgY29uc3QgY2hlY2tib3ggPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnRvZ2dsZScpO1xuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuICAgIGNhbGxiYWNrKHRhcmdldCk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kQWRkSXRlbShjYWxsYmFjaykge1xuICAgIGFkZEl0ZW1FbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gY2FsbGJhY2soYWRkSXRlbUVsZS52YWx1ZSksIGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJpbmRBZGRJdGVtTGFiZWwoKSB7XG4gICAgYWRkSXRlbUVsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IGhpZGVBZGRJdGVtTGFiZWwoKSk7XG4gICAgYWRkSXRlbUVsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBoaWRlQWRkSXRlbUxhYmVsKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYmluZFRvZ2dsZUNvbXBsZXRlZCh0YXJnZXQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnRvZ2dsZScpO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcbiAgICAgIGNhbGxiYWNrKHRhcmdldC5kYXRhc2V0LmlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJpbmREZWxldGVJdGVtKHRhcmdldCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBidG4gPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRhcmdldC5yZW1vdmUoKTtcbiAgICAgIGNhbGxiYWNrKHRhcmdldC5kYXRhc2V0LmlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJpbmRFZGl0SXRlbSh0YXJnZXQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnRleHQnKTtcbiAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2VkaXR0aW5nJyk7XG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRydWUpO1xuICAgICAgbGFiZWwuZm9jdXMoKTtcbiAgICB9KTtcbiAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdHRpbmcnKTtcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgZmFsc2UpO1xuICAgICAgY2FsbGJhY2sodGFyZ2V0LmRhdGFzZXQuaWQsIGxhYmVsLnRleHRDb250ZW50LCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZUVsZW1lbnQodGFyZ2V0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSBsYWJlbC5ibHVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kQ2hhbmdlUm91dGUoZWFjaEJ0bkNhbGxiYWNrLCBlbmRpbmdDYWxsYmFjaykge1xuICAgIHJvdXRlQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZWFjaEJ0bkNhbGxiYWNrKGJ0bi5kYXRhc2V0LnJvdXRlKTtcbiAgICAgICAgcm91dGVCdG5zLmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgICAgIGlmIChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50JykpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGVuZGluZ0NhbGxiYWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kQ2xlYXJDb21wbGV0ZWRJdGVtcyhjYWxsYmFjaykge1xuICAgIGNvbXBsZXRlZENvdW50RWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FsbGJhY2soKSk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kVG9nZ2xlQWxsKGNhbGxiYWNrKSB7XG4gICAgdG9nZ2xlQWxsRWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FsbGJhY2soKSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93Rm9vdGVyKCkge1xuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgZm9vdGVyRWxlLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIFRlbXBsYXRlLnJlbmRlckZvb3RlcihHaXRodWJJbWcsIHllYXIpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2hvd0RhdGUsXG4gICAgY2xlYXJBZGRJdGVtRWxlLFxuICAgIGJpbmRBZGRJdGVtLFxuICAgIGJpbmRBZGRJdGVtTGFiZWwsXG4gICAgYmluZFRvZ2dsZUNvbXBsZXRlZCxcbiAgICBiaW5kRGVsZXRlSXRlbSxcbiAgICBiaW5kRWRpdEl0ZW0sXG4gICAgYmluZENoYW5nZVJvdXRlLFxuICAgIG1hcmtDdXJyZW50Um91dGUsXG4gICAgYmluZENsZWFyQ29tcGxldGVkSXRlbXMsXG4gICAgYmluZFRvZ2dsZUFsbCxcbiAgICB1cGRhdGVBY3RpdmVJdGVtc0NvdW50LFxuICAgIHVwZGF0ZUNvbXBsZXRlZEl0ZW1zQ291bnQsXG4gICAgc2hvd0NvbXBsZXRlZEl0ZW1zQ291bnQsXG4gICAgaGlkZUNvbXBsZXRlZEl0ZW1zQ291bnQsXG4gICAgaGlkZUl0ZW1zQm9hcmQsXG4gICAgc2hvd0l0ZW1zQm9hcmQsXG4gICAgaGlkZVRvZ2dsZUFsbCxcbiAgICB0b2dnbGVBbGxDaGVja2VkLFxuICAgIHRvZ2dsZUFsbE5vdENoZWNrZWQsXG4gICAgcmVtb3ZlRWxlbWVudCxcbiAgICBjbGVhckl0ZW1zLFxuICAgIHNob3dJdGVtLFxuICAgIHNob3dGb290ZXIsXG4gIH07XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vXCI7IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgY3NzIGZyb20gJy4uL2Nzcy9pbmRleC5jc3MnO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcblxuKCgpID0+IHtcbiAgQ29udHJvbGxlci5lbmFibGVBZGRJdGVtKCk7XG4gIENvbnRyb2xsZXIuZW5hYmxlQ2hhbmdlUm91dGUoKTtcbiAgQ29udHJvbGxlci5lbmFibGVDbGVhckNvbXBsZXRlZEl0ZW1zKCk7XG4gIENvbnRyb2xsZXIuZW5hYmxlVG9nZ2xlQWxsKCk7XG4gIENvbnRyb2xsZXIuc2hvd0RhdGUoKTtcbiAgQ29udHJvbGxlci5zaG93SXRlbXMoKTtcbiAgQ29udHJvbGxlci51cGRhdGVJdGVtc0NvdW50KCk7XG4gIENvbnRyb2xsZXIuc2hvd0Zvb3RlcigpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==