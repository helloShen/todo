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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black: #24292D;\n    --black-dimmer: #2B3137;\n    --gray: #58606a;\n    --light-gray: #949DA7;\n    --lighter-gray: #B4BDC8;\n    --border-gray: #e7e9ea;\n    --back-gray: #f6f8fa;\n    --white: #FFFFFF;\n    --red: #DB2C00;\n    --green: #2DA44E;\n    --blue: #0D74E7;\n    --blue2: #0969DA;\n    --purple: #6e5494;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--back-gray);\n}\n\n.logo {\n    height: 6rem;\n    font-size: 2.5rem;\n    font-weight: 700;\n    font-family: 'Poppins', sans-serif;\n    color: var(--black);\n    display: grid;\n    align-items: end;\n    justify-items: center;\n}\n\n.main {\n    width: 100%;\n    margin: 2rem 0;\n    display: grid;\n    justify-content: center;\n}\n\n.todo {\n    width: 36rem;\n    border-radius: .5rem;\n    box-shadow: 1px 1px 4px var(--border-gray);\n}\n\n.todo > .title {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    width: 100%;\n    height: 7rem;\n    padding: 2rem 3rem;\n    border: 1px solid var(--border-gray);\n    border-bottom: 0;\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.todo .date {\n    width: 7rem;\n    height: 3rem;\n    color: var(--gray);\n    display: grid;\n    grid-template-columns: 3rem 3rem;\n    grid-template-rows: 1.5rem 1.5rem;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.todo .day {\n    font-size: 3rem;\n    grid-row: 1 / 3;\n    grid-column: 1 / 2;\n}\n\n.todo .month {\n    justify-self: start;\n    align-self: end;\n    font-size: 1rem;\n    grid-row: 1 / 2;\n    grid-column: 2 / 3;\n    padding-left: 1rem;\n}\n\n.todo .year {\n    justify-self: start;\n    align-self: start;\n    font-size: 1rem;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    padding-left: 1rem;\n}\n\n\n.todo .weekday {\n    font-size: 1.5rem;\n    font-weight: 100;\n}\n\n.todo > .addItemContainer {\n    width: 100%;\n    height: 4rem;\n    font-size: 1.5rem;\n    border: 1px solid var(--border-gray);\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 3rem 1fr;\n    align-items: center;\n}\n\n.todo > .addItemContainer.alone {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n.todo .toggleAll {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n\n.todo .toggleAll::after {\n    font-size: 1.5rem;\n    margin: 0 .75rem;\n    content: \"radio_button_unchecked\";\n    color: var(--border-gray);\n}\n\n.todo .toggleAll:checked::after {\n    content: \"check_circle\";\n    color: var(--green);\n    opacity: .6;\n}\n\n.todo .toggleAll.hide {\n    opacity: 0;\n}\n\n.todo .addItemForm {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 100;\n    height: 100%;\n    width: 100%;\n    position: relative;\n}\n\n.todo .addItemLabel {\n    position: absolute;\n    left: 1px;\n    top: 1.2rem;\n    color: var(--lighter-gray);\n    user-select: none;\n}\n\n.todo .addItemLabel.hide {\n    display: none;\n}\n\n.todo .addItem {\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    border-top-right-radius: .5rem;\n    font-size: 1.5rem;\n    outline: none;\n    color: var(--black);\n}\n\n.todo .addItem.alone {\n    border-bottom-right-radius: .5rem;\n}\n\n.todo > .itemsBoard {\n    display: block;\n}\n\n.todo > .itemsBoard.hidden {\n    display: none;\n}\n\n.todo .item {\n    width: 100%;\n    margin: -1px 0;\n    height: 4rem;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5rem;\n    border: 1px solid var(--border-gray); \n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 3rem 1fr 3rem;\n    align-items: center;\n}\n\n.todo .item > .toggle {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n\n.todo .item > .toggle::after {\n    content: \"radio_button_unchecked\";\n    margin: 0 .75rem;\n    color: var(--border-gray);\n    opacity: .6;\n}\n\n.todo .item > .toggle:checked::after {\n    content: \"check_circle\";\n    color: var(--green);\n}\n\n.todo .item > .text {\n    height: 100%;\n    color: var(--gray);\n    display: grid;\n    align-items: center;\n}\n\n.todo .item.completed > .text {\n    opacity: .6;\n    text-decoration: line-through;\n}\n\n.todo .item > .text.editting {\n    outline-color: var(--border-gray);\n    background-color: var(--back-gray);\n}\n\n.todo .item > .delete {\n    opacity: 0;\n    justify-self: center;\n    cursor: pointer;\n    user-select: none;\n    margin-right: 1rem;\n}\n\n.todo .item:hover > .delete {\n    opacity: 1;\n    color: var(--red);\n}\n\n.todo .itemsFooter {\n    width: 100%;\n    height: 4rem;\n    font-size: .75rem;\n    font-family: 'Poppins', sans-serif;\n    border: 1px solid var(--border-gray);\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter > .activeItemsCount,\n.todo .itemsFooter > .completedItemsCount {\n    height: 2rem;\n    margin: 0 1rem;\n    color: var(--gray);\n    user-select: none;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n}\n\n.todo .itemsFooter > .activeItemsCount {\n    width: 4.5rem;\n}\n\n.todo .itemsFooter > .completedItemsCount {\n    width: 11rem;\n    border-radius: .25rem;\n    cursor: pointer;\n    border: 1px solid var(--border-gray);\n    background-color: var(--back-gray);\n}\n\n.todo .itemsFooter > .completedItemsCount.hide {\n    opacity: 0;\n    cursor: auto;\n}\n\n.todo .itemsFooter > .routes {\n    height: 2rem;\n    width: 14rem;\n    margin: 0 1rem;\n    user-select: none;\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 3rem 4rem 6rem;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n    gap: .5rem;\n}\n\n.todo .itemsFooter .route {\n    padding: .25rem .75rem;\n    color: var(--gray);\n    border-radius: .25rem;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter .route:hover {\n    border: 1px solid var(--border-gray);\n}\n\n.todo .itemsFooter .route.current {\n    background-color: var(--back-gray);\n    border: 1px solid var(--border-gray);\n}\n\n.footer {\n    height: 4.5rem;\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n    font-size: .75rem;\n    color: var(--lighter-gray);\n    display: grid;\n    grid-template-rows: repeat(3, 1.5rem);\n    align-items: center;\n    justify-items: center;\n}\n\n.footer .tip,\n.footer .copyright,\n.footer .year {\n    height: 1.5rem;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    gap: .25rem;\n}\n\n.footer a {\n    width: 1rem;\n    height: 1rem;\n}\n\n.footer .github {\n    width: 100%;\n    height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('./norm.css');\n@import url('https://fonts.googleapis.com/icon?family=Material+Icons');\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&family=Roboto:wght@100;400;500;700&display=swap');\n\n:root {\n    --black: #24292D;\n    --black-dimmer: #2B3137;\n    --gray: #58606a;\n    --light-gray: #949DA7;\n    --lighter-gray: #B4BDC8;\n    --border-gray: #e7e9ea;\n    --back-gray: #f6f8fa;\n    --white: #FFFFFF;\n    --red: #DB2C00;\n    --green: #2DA44E;\n    --blue: #0D74E7;\n    --blue2: #0969DA;\n    --purple: #6e5494;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--back-gray);\n}\n\n.logo {\n    height: 6rem;\n    font-size: 2.5rem;\n    font-weight: 700;\n    font-family: 'Poppins', sans-serif;\n    color: var(--black);\n    display: grid;\n    align-items: end;\n    justify-items: center;\n}\n\n.main {\n    width: 100%;\n    margin: 2rem 0;\n    display: grid;\n    justify-content: center;\n}\n\n.todo {\n    width: 36rem;\n    border-radius: .5rem;\n    box-shadow: 1px 1px 4px var(--border-gray);\n}\n\n.todo > .title {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    width: 100%;\n    height: 7rem;\n    padding: 2rem 3rem;\n    border: 1px solid var(--border-gray);\n    border-bottom: 0;\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.todo .date {\n    width: 7rem;\n    height: 3rem;\n    color: var(--gray);\n    display: grid;\n    grid-template-columns: 3rem 3rem;\n    grid-template-rows: 1.5rem 1.5rem;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.todo .day {\n    font-size: 3rem;\n    grid-row: 1 / 3;\n    grid-column: 1 / 2;\n}\n\n.todo .month {\n    justify-self: start;\n    align-self: end;\n    font-size: 1rem;\n    grid-row: 1 / 2;\n    grid-column: 2 / 3;\n    padding-left: 1rem;\n}\n\n.todo .year {\n    justify-self: start;\n    align-self: start;\n    font-size: 1rem;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    padding-left: 1rem;\n}\n\n\n.todo .weekday {\n    font-size: 1.5rem;\n    font-weight: 100;\n}\n\n.todo > .addItemContainer {\n    width: 100%;\n    height: 4rem;\n    font-size: 1.5rem;\n    border: 1px solid var(--border-gray);\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 3rem 1fr;\n    align-items: center;\n}\n\n.todo > .addItemContainer.alone {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n.todo .toggleAll {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n\n.todo .toggleAll::after {\n    font-size: 1.5rem;\n    margin: 0 .75rem;\n    content: \"radio_button_unchecked\";\n    color: var(--border-gray);\n}\n\n.todo .toggleAll:checked::after {\n    content: \"check_circle\";\n    color: var(--green);\n    opacity: .6;\n}\n\n.todo .toggleAll.hide {\n    opacity: 0;\n}\n\n.todo .addItemForm {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 100;\n    height: 100%;\n    width: 100%;\n    position: relative;\n}\n\n.todo .addItemLabel {\n    position: absolute;\n    left: 1px;\n    top: 1.2rem;\n    color: var(--lighter-gray);\n    user-select: none;\n}\n\n.todo .addItemLabel.hide {\n    display: none;\n}\n\n.todo .addItem {\n    height: 100%;\n    width: 100%;\n    border: 0px;\n    border-top-right-radius: .5rem;\n    font-size: 1.5rem;\n    outline: none;\n    color: var(--black);\n}\n\n.todo .addItem.alone {\n    border-bottom-right-radius: .5rem;\n}\n\n.todo > .itemsBoard {\n    display: block;\n}\n\n.todo > .itemsBoard.hidden {\n    display: none;\n}\n\n.todo .item {\n    width: 100%;\n    margin: -1px 0;\n    height: 4rem;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.5rem;\n    border: 1px solid var(--border-gray); \n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 3rem 1fr 3rem;\n    align-items: center;\n}\n\n.todo .item > .toggle {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n\n.todo .item > .toggle::after {\n    content: \"radio_button_unchecked\";\n    margin: 0 .75rem;\n    color: var(--border-gray);\n    opacity: .6;\n}\n\n.todo .item > .toggle:checked::after {\n    content: \"check_circle\";\n    color: var(--green);\n}\n\n.todo .item > .text {\n    height: 100%;\n    color: var(--gray);\n    display: grid;\n    align-items: center;\n}\n\n.todo .item.completed > .text {\n    opacity: .6;\n    text-decoration: line-through;\n}\n\n.todo .item > .text.editting {\n    outline-color: var(--border-gray);\n    background-color: var(--back-gray);\n}\n\n.todo .item > .delete {\n    opacity: 0;\n    justify-self: center;\n    cursor: pointer;\n    user-select: none;\n    margin-right: 1rem;\n}\n\n.todo .item:hover > .delete {\n    opacity: 1;\n    color: var(--red);\n}\n\n.todo .itemsFooter {\n    width: 100%;\n    height: 4rem;\n    font-size: .75rem;\n    font-family: 'Poppins', sans-serif;\n    border: 1px solid var(--border-gray);\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n    background-color: var(--white);\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter > .activeItemsCount,\n.todo .itemsFooter > .completedItemsCount {\n    height: 2rem;\n    margin: 0 1rem;\n    color: var(--gray);\n    user-select: none;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n}\n\n.todo .itemsFooter > .activeItemsCount {\n    width: 4.5rem;\n}\n\n.todo .itemsFooter > .completedItemsCount {\n    width: 11rem;\n    border-radius: .25rem;\n    cursor: pointer;\n    border: 1px solid var(--border-gray);\n    background-color: var(--back-gray);\n}\n\n.todo .itemsFooter > .completedItemsCount.hide {\n    opacity: 0;\n    cursor: auto;\n}\n\n.todo .itemsFooter > .routes {\n    height: 2rem;\n    width: 14rem;\n    margin: 0 1rem;\n    user-select: none;\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 3rem 4rem 6rem;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-content: center;\n    gap: .5rem;\n}\n\n.todo .itemsFooter .route {\n    padding: .25rem .75rem;\n    color: var(--gray);\n    border-radius: .25rem;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter .route:hover {\n    border: 1px solid var(--border-gray);\n}\n\n.todo .itemsFooter .route.current {\n    background-color: var(--back-gray);\n    border: 1px solid var(--border-gray);\n}\n\n.footer {\n    height: 4.5rem;\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n    font-size: .75rem;\n    color: var(--lighter-gray);\n    display: grid;\n    grid-template-rows: repeat(3, 1.5rem);\n    align-items: center;\n    justify-items: center;\n}\n\n.footer .tip,\n.footer .copyright,\n.footer .year {\n    height: 1.5rem;\n    display: grid;\n    grid-auto-flow: column;\n    align-items: center;\n    gap: .25rem;\n}\n\n.footer a {\n    width: 1rem;\n    height: 1rem;\n}\n\n.footer .github {\n    width: 100%;\n    height: 100%;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFB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O1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2ZtQztBQUNNOztBQUV6QztBQUNBLElBQUksb0VBQXdCO0FBQzVCLElBQUksd0VBQTRCO0FBQ2hDLElBQUksZ0ZBQW9DO0FBQ3hDLElBQUksc0VBQTBCO0FBQzlCLElBQUksK0RBQW1CO0FBQ3ZCLElBQUksZ0VBQW9CO0FBQ3hCLElBQUksdUVBQTJCO0FBQy9CLElBQUksaUVBQXFCO0FBQ3pCLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Nzcy9ub3JtLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy9tb2RlbC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL3N0b3JlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy92aWV3LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm0uY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucyk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7NDAwOzcwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1ibGFjazogIzI0MjkyRDtcXG4gICAgLS1ibGFjay1kaW1tZXI6ICMyQjMxMzc7XFxuICAgIC0tZ3JheTogIzU4NjA2YTtcXG4gICAgLS1saWdodC1ncmF5OiAjOTQ5REE3O1xcbiAgICAtLWxpZ2h0ZXItZ3JheTogI0I0QkRDODtcXG4gICAgLS1ib3JkZXItZ3JheTogI2U3ZTllYTtcXG4gICAgLS1iYWNrLWdyYXk6ICNmNmY4ZmE7XFxuICAgIC0td2hpdGU6ICNGRkZGRkY7XFxuICAgIC0tcmVkOiAjREIyQzAwO1xcbiAgICAtLWdyZWVuOiAjMkRBNDRFO1xcbiAgICAtLWJsdWU6ICMwRDc0RTc7XFxuICAgIC0tYmx1ZTI6ICMwOTY5REE7XFxuICAgIC0tcHVycGxlOiAjNmU1NDk0O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDJyZW0gMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIHtcXG4gICAgd2lkdGg6IDM2cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4udG9kbyA+IC50aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogN3JlbTtcXG4gICAgcGFkZGluZzogMnJlbSAzcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC41cmVtO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9kbyAuZGF0ZSB7XFxuICAgIHdpZHRoOiA3cmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDNyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS41cmVtIDEuNXJlbTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5kYXkge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4udG9kbyAubW9udGgge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLnRvZG8gLnllYXIge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG5cXG4udG9kbyAud2Vla2RheSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4udG9kbyA+IC5hZGRJdGVtQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyA+IC5hZGRJdGVtQ29udGFpbmVyLmFsb25lIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNXJlbTtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbCB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsOjphZnRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW46IDAgLjc1cmVtO1xcbiAgICBjb250ZW50OiBcXFwicmFkaW9fYnV0dG9uX3VuY2hlY2tlZFxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi50b2RvIC50b2dnbGVBbGw6Y2hlY2tlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiY2hlY2tfY2lyY2xlXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgb3BhY2l0eTogLjY7XFxufVxcblxcbi50b2RvIC50b2dnbGVBbGwuaGlkZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtRm9ybSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbUxhYmVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxcHg7XFxuICAgIHRvcDogMS4ycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmF5KTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtTGFiZWwuaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtLmFsb25lIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4udG9kbyA+IC5pdGVtc0JvYXJkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvID4gLml0ZW1zQm9hcmQuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLml0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAtMXB4IDA7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gMWZyIDNyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50b2dnbGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcXFwiO1xcbiAgICBtYXJnaW46IDAgLjc1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBvcGFjaXR5OiAuNjtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudG9nZ2xlOmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcImNoZWNrX2NpcmNsZVxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRleHQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW0uY29tcGxldGVkID4gLnRleHQge1xcbiAgICBvcGFjaXR5OiAuNjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRleHQuZWRpdHRpbmcge1xcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLmRlbGV0ZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi50b2RvIC5pdGVtOmhvdmVyID4gLmRlbGV0ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBmb250LXNpemU6IC43NXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmFjdGl2ZUl0ZW1zQ291bnQsXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuYWN0aXZlSXRlbXNDb3VudCB7XFxuICAgIHdpZHRoOiA0LjVyZW07XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5jb21wbGV0ZWRJdGVtc0NvdW50IHtcXG4gICAgd2lkdGg6IDExcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuY29tcGxldGVkSXRlbXNDb3VudC5oaWRlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgY3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAucm91dGVzIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMTRyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gNHJlbSA2cmVtO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZSB7XFxuICAgIHBhZGRpbmc6IC4yNXJlbSAuNzVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciAucm91dGU6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciAucm91dGUuY3VycmVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGhlaWdodDogNC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IC43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDEuNXJlbSk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciAudGlwLFxcbi5mb290ZXIgLmNvcHlyaWdodCxcXG4uZm9vdGVyIC55ZWFyIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjI1cmVtO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uZm9vdGVyIC5naXRodWIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFD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cnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDs0MDA7NzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLWJsYWNrOiAjMjQyOTJEO1xcbiAgICAtLWJsYWNrLWRpbW1lcjogIzJCMzEzNztcXG4gICAgLS1ncmF5OiAjNTg2MDZhO1xcbiAgICAtLWxpZ2h0LWdyYXk6ICM5NDlEQTc7XFxuICAgIC0tbGlnaHRlci1ncmF5OiAjQjRCREM4O1xcbiAgICAtLWJvcmRlci1ncmF5OiAjZTdlOWVhO1xcbiAgICAtLWJhY2stZ3JheTogI2Y2ZjhmYTtcXG4gICAgLS13aGl0ZTogI0ZGRkZGRjtcXG4gICAgLS1yZWQ6ICNEQjJDMDA7XFxuICAgIC0tZ3JlZW46ICMyREE0NEU7XFxuICAgIC0tYmx1ZTogIzBENzRFNztcXG4gICAgLS1ibHVlMjogIzA5NjlEQTtcXG4gICAgLS1wdXJwbGU6ICM2ZTU0OTQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMnJlbSAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICB3aWR0aDogMzZyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi50b2RvID4gLnRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA3cmVtO1xcbiAgICBwYWRkaW5nOiAycmVtIDNyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b2RvIC5kYXRlIHtcXG4gICAgd2lkdGg6IDdyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gM3JlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVyZW0gMS41cmVtO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLmRheSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi50b2RvIC5tb250aCB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udG9kbyAueWVhciB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcblxcbi50b2RvIC53ZWVrZGF5IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi50b2RvID4gLmFkZEl0ZW1Db250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvID4gLmFkZEl0ZW1Db250YWluZXIuYWxvbmUge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi50b2RvIC50b2dnbGVBbGw6OmFmdGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMCAuNzVyZW07XFxuICAgIGNvbnRlbnQ6IFxcXCJyYWRpb19idXR0b25fdW5jaGVja2VkXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbDpjaGVja2VkOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJjaGVja19jaXJjbGVcXFwiO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBvcGFjaXR5OiAuNjtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbC5oaWRlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW1Gb3JtIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtTGFiZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDFweDtcXG4gICAgdG9wOiAxLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW1MYWJlbC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW0ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW0uYWxvbmUge1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVyZW07XFxufVxcblxcbi50b2RvID4gLml0ZW1zQm9hcmQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRvZG8gPiAuaXRlbXNCb2FyZC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kbyAuaXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IC0xcHggMDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAxZnIgM3JlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudG9nZ2xlIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwicmFkaW9fYnV0dG9uX3VuY2hlY2tlZFxcXCI7XFxuICAgIG1hcmdpbjogMCAuNzVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIG9wYWNpdHk6IC42O1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50b2dnbGU6Y2hlY2tlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiY2hlY2tfY2lyY2xlXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudGV4dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbS5jb21wbGV0ZWQgPiAudGV4dCB7XFxuICAgIG9wYWNpdHk6IC42O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudGV4dC5lZGl0dGluZyB7XFxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAuZGVsZXRlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW06aG92ZXIgPiAuZGVsZXRlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC41cmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuYWN0aXZlSXRlbXNDb3VudCxcXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuY29tcGxldGVkSXRlbXNDb3VudCB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5hY3RpdmVJdGVtc0NvdW50IHtcXG4gICAgd2lkdGg6IDQuNXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQge1xcbiAgICB3aWR0aDogMTFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5jb21wbGV0ZWRJdGVtc0NvdW50LmhpZGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBjdXJzb3I6IGF1dG87XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5yb3V0ZXMge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxNHJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSA0cmVtIDZyZW07XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgLnJvdXRlIHtcXG4gICAgcGFkZGluZzogLjI1cmVtIC43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZS5jdXJyZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiA0LjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmF5KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMS41cmVtKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIC50aXAsXFxuLmZvb3RlciAuY29weXJpZ2h0LFxcbi5mb290ZXIgLnllYXIge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuMjVyZW07XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5mb290ZXIgLmdpdGh1YiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25vcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKlxuICogY29udHJvbGxlci5qcyBpcyBhIGdlbmVyYWwgbWFuYWdlci4gXG4gKiBIZSBpcyB0aGUgb25seSBvbmUgd2hvIGtub3dzIGFsbCB0aGUgbG9naWMgb2YgZGlmZmVyZW50IGZlYXR1cmVzLiBcbiAqIEJ1dCBoZSBpcyBibGluZCBmcm9tIGJvdGggZGF0YSBhbmQgRE9NLiBcbiAqIG1vZGVsLmpzIGFuZCB2aWV3LmpzIGRvIHRoZXNlIGNvbmNyZXRlIHRhc2tzIGZvciBoaW0uXG4gKi9cblxuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3LmpzJztcbmltcG9ydCBNb2RlbCBmcm9tICcuL21vZGVsLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblxuICAgIC8qIEZvcm1hdCB0aGUgZGF0ZS4gKi9cbiAgICBjb25zdCBNeURhdGUgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0geyB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfTtcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldFRvZGF5KCkge1xuICAgICAgICAgICAgY29uc3QgdG9kYXkgID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5U3RyID0gdG9kYXkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucykgLy8gU2F0dXJkYXksIFNlcHRlbWJlciAxNywgMjAxNlxuICAgICAgICAgICAgcmV0dXJuIHRvZGF5U3RyLnNwbGl0KCcsICcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4geyBnZXRUb2RheSB9O1xuICAgIH0pKCk7XG5cbiAgICAvKiBDdXQgdGhlIGRhdGUgc3RyaW5nIGludG8gd2Vla2RheSwgZGF5LCBtb250aCBhbmQgeWVhci4gVmlldyBtb2R1bGUga25vd3MgaG93IHRvIHNob3cgdGhlbS4gKi9cbiAgICBmdW5jdGlvbiBzaG93RGF0ZSgpIHtcbiAgICAgICAgbGV0IFt3ZWVrZGF5LCBtb250aERheSwgeWVhcl0gPSBNeURhdGUuZ2V0VG9kYXkoKTtcbiAgICAgICAgbGV0IFttb250aCwgZGF5XSA9IG1vbnRoRGF5LnNwbGl0KCcgJyk7XG4gICAgICAgIG1vbnRoID0gbW9udGguc2xpY2UoMCwgMykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgVmlldy5zaG93RGF0ZSh3ZWVrZGF5LCBkYXksIG1vbnRoLCB5ZWFyKTsgXG4gICAgfVxuXG4gICAgLyogQ2FsbCB2aWV3IHRvIHByaW50IGZvb3Rlci4gKi9cbiAgICBmdW5jdGlvbiBzaG93Rm9vdGVyKCkge1xuICAgICAgICBWaWV3LnNob3dGb290ZXIoKTtcbiAgICB9XG5cbiAgICAvKiBQcmUtZGVmaW5lIHF1ZXJpZXMgZm9yIHRocmVlIGRpZmZlcmVudCByb3V0ZXM6IGFsbCwgYWN0aXZlIGFuZCBjb21wbGV0ZWQuIFxuICAgICAqIE1vZGVsLmZpbmQoKSBmdW5jdGlvbiBhY2NlcHRzIG9ubHkgYW4gYXJyYXkgb2YgUXVlcnkgYXMgaW5wdXQgdG8gZmlsdGVyIGl0ZW1zIHdlIHdhbnQuICovXG4gICAgY29uc3QgSXRlbXNRdWVyaWVzID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcXVlcmllcyA9IHtcbiAgICAgICAgICAgICdhbGwnOiBbXSxcbiAgICAgICAgICAgICdhY3RpdmUnOiBbTW9kZWwuUXVlcnkoJ2NvbXBsZXRlZCcsIGZhbHNlKV0sXG4gICAgICAgICAgICAnY29tcGxldGVkJzogW01vZGVsLlF1ZXJ5KCdjb21wbGV0ZWQnLCB0cnVlKV1cbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gZ2V0KHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gcXVlcmllc1tgJHtyb3V0ZX1gXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGdldCB9O1xuICAgIH0pKCk7XG5cbiAgICAvKiBHZXQgdGhlIHF1ZXJpZXMgZnJvbSBJdGVtc1F1ZXJpZXMsIGFuZCBmZWVkIHRoZW0gdG8gTW9kZWwuZmluZEl0ZW1zKCkgZnVuY3Rpb24uICovXG4gICAgZnVuY3Rpb24gZmlsdGVySXRlbXMocm91dGUpIHtcbiAgICAgICAgcmV0dXJuIE1vZGVsLmZpbmRJdGVtcyhJdGVtc1F1ZXJpZXMuZ2V0KHJvdXRlKSk7XG4gICAgfVxuXG4gICAgLyogR2V0IHRoZSBjdXJyZW50IHJvdXRlIGZyb20gc3RvcmFnZSwgZmlsdGVyIGl0ZW1zIHVuZGVyIGN1cnJlbnQgcm91dGUgYW5kIGNhbGwgdmlldyB0b1xuICAgICAqIGNyZWF0ZSBpdGVtcyBjYXJkIGluIERPTS4gXG4gICAgICogVmlldy5zaG93SXRlbSgpIGZ1bmN0aW9uIHJlcXVpcmVzIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gdGVsbCBoaW0gd2hpY2ggYnV0dG9ucyBuZWVkXG4gICAgICogdG8gYmUgYWN0aXZhdGVkIGFmdGVyIGl0ZW0gY2FyZCBpcyBjcmVhdGVkLiovXG4gICAgZnVuY3Rpb24gc2hvd0l0ZW1zKCkge1xuICAgICAgICBjb25zdCBpdGVtc09iakFyciA9IGZpbHRlckl0ZW1zKE1vZGVsLmdldEN1cnJlbnRSb3V0ZSgpKTtcbiAgICAgICAgVmlldy5jbGVhckl0ZW1zKCk7XG4gICAgICAgIGl0ZW1zT2JqQXJyLmZvckVhY2goKGl0ZW1PYmopID0+IHtcbiAgICAgICAgICAgIFZpZXcuc2hvd0l0ZW0oaXRlbU9iaiwgKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgICAgIFZpZXcuYmluZFRvZ2dsZUNvbXBsZXRlZCh0YXJnZXQsIHRvZ2dsZUNvbXBsZXRlZCk7XG4gICAgICAgICAgICAgICAgVmlldy5iaW5kRGVsZXRlSXRlbSh0YXJnZXQsIGRlbGV0ZUl0ZW0pO1xuICAgICAgICAgICAgICAgIFZpZXcuYmluZEVkaXRJdGVtKHRhcmdldCwgZWRpdEl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qIFVwZGF0ZSB0aGUgY291bnQgbnVtYmVyIG9mIHRocmVlIGRpZmZlcmVudCByb3V0ZXMoYWxsLCBhY3RpdmUgYW5kIGNvbXBsZXRlZCkgbGlzdGVkXG4gICAgICogb24gdG9kbyBib2FyZC5cbiAgICAgKiBUaGUgZW50aXJlIGl0ZW1zIGJvYXJkIHdpbGwgYmUgaGlkZGVuIGlmIG5vIGl0ZW1zIGxlZnQgaW4gaXRlbXMgbGlzdC4gKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVJdGVtc0NvdW50KCkge1xuICAgICAgICBjb25zdCBhY3RpdmVDb3VudCA9IGZpbHRlckl0ZW1zKCdhY3RpdmUnKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZENvdW50ID0gZmlsdGVySXRlbXMoJ2NvbXBsZXRlZCcpLmxlbmd0aDtcbiAgICAgICAgVmlldy51cGRhdGVBY3RpdmVJdGVtc0NvdW50KGFjdGl2ZUNvdW50KTtcbiAgICAgICAgVmlldy51cGRhdGVDb21wbGV0ZWRJdGVtc0NvdW50KGNvbXBsZXRlZENvdW50KTtcbiAgICAgICAgaWYgKGNvbXBsZXRlZENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICBWaWV3LmhpZGVDb21wbGV0ZWRJdGVtc0NvdW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBWaWV3LnNob3dDb21wbGV0ZWRJdGVtc0NvdW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZUNvdW50ICsgY29tcGxldGVkQ291bnQgPT09IDApIHsgLy8gaGlkZSB0aGUgZW50aXJlIGl0ZW0gYm9hcmQgaWYgMCBpdGVtIGxlZnRcbiAgICAgICAgICAgIFZpZXcuaGlkZUl0ZW1zQm9hcmQoKTtcbiAgICAgICAgICAgIFZpZXcuaGlkZVRvZ2dsZUFsbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVmlldy5zaG93SXRlbXNCb2FyZCgpO1xuICAgICAgICAgICAgaWYgKGFjdGl2ZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIFZpZXcudG9nZ2xlQWxsTm90Q2hlY2tlZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBWaWV3LnRvZ2dsZUFsbENoZWNrZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIENhbGwgVmlldyB0byBiaW5kIGV2ZW50IGxpc3RlbmVycyBmb3IgYWRkaW5nIG5ldyBpdGVtIGZlYXR1cmUuIE1haW4gbG9naWMgYWRkSXRlbSgpIGZ1bmN0aW9uXG4gICAgICogaXMgZmVkIGFzIGEgY2FsbGJhY2sgZnVuY3Rpb24uICovXG4gICAgZnVuY3Rpb24gZW5hYmxlQWRkSXRlbSgpIHtcbiAgICAgICAgVmlldy5iaW5kQWRkSXRlbShhZGRJdGVtKTtcbiAgICAgICAgVmlldy5iaW5kQWRkSXRlbUxhYmVsKCk7XG4gICAgfVxuXG4gICAgLyogQ2FsbCBWaWV3IHRvIGJpbmQgZXZlbnQgbGlzdGVuZXJzIGZvciByb3V0ZSBzd2l0Y2ggYnV0dG9ucy4gTWFpbiBsb2dpYyBmdW5jdGlvbiBjaGFuZ2VSb3V0ZSgpXG4gICAgICogaXMgZmVkIGFzIGEgY2FsbGJhY2sgZnVuY3Rpb24uICovXG4gICAgZnVuY3Rpb24gZW5hYmxlQ2hhbmdlUm91dGUoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3V0ZSA9IE1vZGVsLmdldEN1cnJlbnRSb3V0ZSgpO1xuICAgICAgICBWaWV3LmJpbmRDaGFuZ2VSb3V0ZShjaGFuZ2VSb3V0ZSwgKCkgPT4gVmlldy5tYXJrQ3VycmVudFJvdXRlKGN1cnJlbnRSb3V0ZSkpO1xuICAgIH1cblxuICAgIC8qIENhbGwgVmlldyB0byBiaW5kIGV2ZW50IGxpc3RlbmVycyBmb3IgY2xlYXIgYnV0dG9ucy4gTWFpbiBsb2dpYyBjbGVhckFsbENvbXBsZXRlZEl0ZW0oKVxuICAgICAqIGZ1bmN0aW9uIGlzIGZlZCBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiAqL1xuICAgIGZ1bmN0aW9uIGVuYWJsZUNsZWFyQ29tcGxldGVkSXRlbXMoKSB7XG4gICAgICAgIFZpZXcuYmluZENsZWFyQ29tcGxldGVkSXRlbXMoY2xlYXJBbGxDb21wbGV0ZWRJdGVtcyk7XG4gICAgfVxuXG4gICAgLyogQ2FsbCBWaWV3IHRvIGJpbmQgZXZlbnQgbGlzdGVuZXJzIGZvciB0b2dnbGVBbGwgYnV0dG9ucy4gTWFpbiBsb2dpYyB0b2dnbGVBbGwoKSBmdW5jdGlvbiBpcyBcbiAgICAgKiBmZWQgYXMgYSBjYWxsYmFjayBmdW5jdGlvbi4gKi9cbiAgICBmdW5jdGlvbiBlbmFibGVUb2dnbGVBbGwoKSB7XG4gICAgICAgIFZpZXcuYmluZFRvZ2dsZUFsbCh0b2dnbGVBbGwpO1xuICAgIH1cblxuICAgIC8qIE1haW4gbG9naWMgb2YgaG93IHRvIGFkZCBhIG5ldyBpdGVtLiAqL1xuICAgIGZ1bmN0aW9uIGFkZEl0ZW0odGV4dCkge1xuICAgICAgICBNb2RlbC5hZGRJdGVtKHRleHQpO1xuICAgICAgICBWaWV3LmNsZWFyQWRkSXRlbUVsZSgpO1xuICAgICAgICBzaG93SXRlbXMoKTtcbiAgICAgICAgdXBkYXRlSXRlbXNDb3VudCgpO1xuICAgIH1cblxuICAgIC8qIE1haW4gbG9naWMgb2YgdG9nZ2xpbmcgYW4gaXRlbSB0byBjb21wbGV0ZWQuICovXG4gICAgZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGVkKGl0ZW1JZCkge1xuICAgICAgICBNb2RlbC50b2dnbGVDb21wbGV0ZWQoaXRlbUlkKTtcbiAgICAgICAgc2hvd0l0ZW1zKCk7IC8vIG11c3QgcmVmcmVzaCBjdXJyZW50IHJvdXRlLlxuICAgICAgICB1cGRhdGVJdGVtc0NvdW50KCk7XG4gICAgfVxuXG4gICAgLyogTWFpbiBsb2dpYyBvZiB3aGF0IGhhcHBlbmQgd2hlbiBkZWxldGUgYnV0dG9uIGlzIGNsaWNrZWQuICovXG4gICAgZnVuY3Rpb24gZGVsZXRlSXRlbShpdGVtSWQpIHtcbiAgICAgICAgTW9kZWwuZGVsZXRlSXRlbShpdGVtSWQpO1xuICAgICAgICB1cGRhdGVJdGVtc0NvdW50KCk7XG4gICAgfVxuXG4gICAgLyogTWFpbiBsb2dpbiBvZiBlZGl0aW5nIGFuIGl0ZW0uICovXG4gICAgZnVuY3Rpb24gZWRpdEl0ZW0oaXRlbUlkLCBpdGVtVmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghaXRlbVZhbHVlKSB7XG4gICAgICAgICAgICBNb2RlbC5kZWxldGVJdGVtKGl0ZW1JZCk7XG4gICAgICAgICAgICB1cGRhdGVJdGVtc0NvdW50KCk7XG4gICAgICAgICAgICBjYWxsYmFjaygpOyAvLyBjYWxsYmFjayB2aWV3IGlmIG5lZWQgdG8gcmVtb3ZlIHRoYXQgaXRlbSBmcm9tIHZpZXcuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBNb2RlbC51cGRhdGVJdGVtKGl0ZW1JZCwgaXRlbVZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIE1haW4gbG9naWMgb2Ygc3dpdGNoaW5nIHJvdXRlLiAqL1xuICAgIGZ1bmN0aW9uIGNoYW5nZVJvdXRlKHJvdXRlKSB7XG4gICAgICAgIE1vZGVsLnNldEN1cnJlbnRSb3V0ZShyb3V0ZSk7XG4gICAgICAgIHNob3dJdGVtcygpO1xuICAgIH1cblxuICAgIC8qIE1haW4gbG9naWMgb2YgXCJjbGVhciBhbGwgY29tcGxldGVkXCIgYnV0dG9uLiAqL1xuICAgIGZ1bmN0aW9uIGNsZWFyQWxsQ29tcGxldGVkSXRlbXMoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZEl0ZW1zQXJyID0gTW9kZWwuZmluZEl0ZW1zKEl0ZW1zUXVlcmllcy5nZXQoJ2NvbXBsZXRlZCcpKTtcbiAgICAgICAgY29tcGxldGVkSXRlbXNBcnIuZm9yRWFjaCgoaXRlbU9iaikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBNb2RlbC5JdGVtLmdldElkLmNhbGwoaXRlbU9iaik7XG4gICAgICAgICAgICBNb2RlbC5kZWxldGVJdGVtKGlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNob3dJdGVtcygpO1xuICAgICAgICB1cGRhdGVJdGVtc0NvdW50KCk7XG4gICAgfVxuXG4gICAgLyogTWFpbiBsb2dpYyBvZiBcInRvZ2dsZSBhbGxcIiBidXR0b24uICovXG4gICAgZnVuY3Rpb24gdG9nZ2xlQWxsKCkge1xuICAgICAgICBpZiAoTW9kZWwuaGFzSXRlbSgpKSB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJdGVtc0FyciA9IE1vZGVsLmZpbmRJdGVtcyhJdGVtc1F1ZXJpZXMuZ2V0KCdhY3RpdmUnKSk7XG4gICAgICAgICAgICBpZiAoYWN0aXZlSXRlbXNBcnIubGVuZ3RoID4gMCkgeyBcbiAgICAgICAgICAgICAgICBNb2RlbC50b2dnbGVBbGwoYWN0aXZlSXRlbXNBcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBNb2RlbC50b2dnbGVBbGwoTW9kZWwuZmluZEl0ZW1zKEl0ZW1zUXVlcmllcy5nZXQoJ2NvbXBsZXRlZCcpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaG93SXRlbXMoKTtcbiAgICAgICAgICAgIHVwZGF0ZUl0ZW1zQ291bnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHNob3dGb290ZXIsIHNob3dEYXRlLCBzaG93SXRlbXMsIHVwZGF0ZUl0ZW1zQ291bnQsIGVuYWJsZUFkZEl0ZW0sIGVuYWJsZUNoYW5nZVJvdXRlLCBlbmFibGVDbGVhckNvbXBsZXRlZEl0ZW1zLCBlbmFibGVUb2dnbGVBbGwgfTtcblxufSkoKTtcbiIsIi8qXG4gKiBBIERBTyhEYXRhIEFjY2VzcyBPYmplY3QpIEFQSS4gXG4gKiBJdCdzIGF3YXJlIG9mIHRoZSBkYXRhIHN0cnVjdHVyZSBvZiBJdGVtIGFuZCBvdGhlciBvYmplY3RzLiBcbiAqIEFuZCBrbm93cyBob3cgdG8gaW5zZXJ0LCB1cGRhdGUsIGRlbGV0ZSBhbmQgcmVhZCB0aGVzZSBkYXRhLlxuICovXG5cbmltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblxuICAgIGNvbnN0IGRlZmF1bHRSb3V0ZSA9ICdhbGwnO1xuXG4gICAgLyogQSBmYWN0b3J5IGZ1bmN0aW9uIGNyZWF0aW5nIG5ldyBpdGVtIG9iamVjdC4gKi9cbiAgICBjb25zdCBJdGVtID0gKCgpID0+IHtcblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGUodGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgICB0aXRsZTogdGV4dCxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYXNDb21wbGV0ZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gISF0aGlzLmNvbXBsZXRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlLCBnZXRJZCwgZ2V0VGl0bGUsIHNldFRpdGxlLCBoYXNDb21wbGV0ZWQsIHRvZ2dsZUNvbXBsZXRlZCAgfTtcblxuICAgIH0pKCk7XG5cbiAgICAvKiBRdWVyeSBpcyBhIFtrZXksIHZhbHVlXSBwYWlyLlxuICAgICAqIE9uY2UgYSBxdWVyeSBpcyBjcmVhdGVkLCBpdCdzIHJlYWQtb25seS4gKi9cbiAgICBmdW5jdGlvbiBRdWVyeShpbktleSwgaW5WYWx1ZSkge1xuICAgICAgICBjb25zdCBrZXkgPSBpbktleTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpblZhbHVlO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldEtleSgpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGdldEtleSwgZ2V0VmFsdWUgfTtcbiAgICB9XG5cbiAgICAvKiBBIHdyYXBwZXIgZnVuY3Rpb24uIFNldCBjdXJyZW50IHJvdXRlIHRvIGRlZmF1bHQgdmFsdWUsIGlmIG5vIHJvdXRlIGV4aXRzLiAqL1xuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRSb3V0ZSgpIHtcbiAgICAgICAgY29uc3Qgcm91dGUgPSBTdG9yZS5nZXRDdXJyZW50Um91dGUoKTtcbiAgICAgICAgaWYgKCFyb3V0ZSkge1xuICAgICAgICAgICAgU3RvcmUuc2V0Q3VycmVudFJvdXRlKGRlZmF1bHRSb3V0ZSk7XG4gICAgICAgICAgICByZXR1cm4gU3RvcmUuZ2V0Q3VycmVudFJvdXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRSb3V0ZShyb3V0ZSkge1xuICAgICAgICBTdG9yZS5zZXRDdXJyZW50Um91dGUocm91dGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc0l0ZW0oKSB7XG4gICAgICAgIHJldHVybiBTdG9yZS5oYXNJdGVtKCk7XG4gICAgfVxuXG4gICAgLyogcmV0dXJuIGFuIGFycmF5IG9mIGFsbCBleGl0aW5nIGl0ZW1zICovXG4gICAgZnVuY3Rpb24gZmluZEFsbEl0ZW1zKCkge1xuICAgICAgICBpZiAoIWhhc0l0ZW0oKSkgcmV0dXJuIFtdO1xuICAgICAgICBjb25zdCBpdGVtc09iaiA9IFN0b3JlLmdldEl0ZW1zT2JqZWN0KCk7XG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhpdGVtc09iaikpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKGl0ZW1zT2JqW2Ake2tleX1gXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICAvKiBSZXR1cm4gYSBzdWItYXJyYXkgd2hpY2ggbWVldCB0aGUgcmVxdWlyZW1lbnRzIG9mIHRoZSBxdWVyeSBcbiAgICAgKiBxdWVyaWVzIGlzIGFuIGFycmF5IG9mIFtrZXksIHZhbHVlXSBwYWlyICovXG4gICAgZnVuY3Rpb24gZmluZEl0ZW1zKHF1ZXJpZXMpIHtcbiAgICAgICAgY29uc3QgYWxsSXRlbXNBcnIgPSBmaW5kQWxsSXRlbXMoKTtcbiAgICAgICAgcmV0dXJuIGFsbEl0ZW1zQXJyLmZpbHRlcigoaXRlbU9iaikgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICBxdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1PYmpbYCR7cXVlcnkuZ2V0S2V5KCl9YF0gIT09IHF1ZXJ5LmdldFZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiBDcmVhdGUgYSBuZXcgSXRlbSBvYmplY3QgYW5kIHNhdmUgaXQgaW50byBzdG9yYWdlLiAqL1xuICAgIGZ1bmN0aW9uIGFkZEl0ZW0odGV4dCkge1xuICAgICAgICBTdG9yZS51cGRhdGVJdGVtcygoaXRlbXNPYmopID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1PYmogPSBJdGVtLmNyZWF0ZSh0ZXh0KTtcbiAgICAgICAgICAgIGl0ZW1zT2JqW2Ake0l0ZW0uZ2V0SWQuY2FsbChpdGVtT2JqKX1gXSA9IGl0ZW1PYmo7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qIFJlbW92ZSBhbiBpdGVtIGZyb20gc3RvcmFnZS4gKi9cbiAgICBmdW5jdGlvbiBkZWxldGVJdGVtKGl0ZW1JZCkge1xuICAgICAgICBpZiAoIWhhc0l0ZW0oKSkgcmV0dXJuO1xuICAgICAgICBTdG9yZS51cGRhdGVJdGVtcygoaXRlbXNPYmopID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBpdGVtc09ialtgJHtpdGVtSWR9YF07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qIFVwZGF0ZSBwcm9wZXJ0aWVzIG9mIGFuIGl0ZW0uICovXG4gICAgZnVuY3Rpb24gdXBkYXRlSXRlbShpdGVtSWQsIGl0ZW1WYWx1ZSkge1xuICAgICAgICBpZiAoIWhhc0l0ZW0oKSkgcmV0dXJuO1xuICAgICAgICBTdG9yZS51cGRhdGVJdGVtcygoaXRlbXNPYmopID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1PYmogPSBpdGVtc09ialtgJHtpdGVtSWR9YF07XG4gICAgICAgICAgICBJdGVtLnNldFRpdGxlLmNhbGwoaXRlbU9iaiwgaXRlbVZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyogVXBkYXRlIGl0ZW0gXCJjb21wbGV0ZWRcIiBwcm9wZXJ0eS4gKi9cbiAgICBmdW5jdGlvbiB0b2dnbGVDb21wbGV0ZWQoaXRlbUlkKSB7XG4gICAgICAgIGlmICghaGFzSXRlbSgpKSByZXR1cm47XG4gICAgICAgIFN0b3JlLnVwZGF0ZUl0ZW1zKChpdGVtc09iaikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbU9iaiA9IGl0ZW1zT2JqW2Ake2l0ZW1JZH1gXTtcbiAgICAgICAgICAgIEl0ZW0udG9nZ2xlQ29tcGxldGVkLmNhbGwoaXRlbU9iaik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qIEJhdGNoIHByb2Nlc3Npbmcgb2YgdG9nZ2xpbmcgaXRlbSBcImNvbXBsZXRlZFwiIHByb3BlcnR5LiAqL1xuICAgIGZ1bmN0aW9uIHRvZ2dsZUFsbChpdGVtc0Fycikge1xuICAgICAgICBTdG9yZS51cGRhdGVJdGVtcygoaXRlbXNPYmopID0+IHtcbiAgICAgICAgICAgIGl0ZW1zQXJyLmZvckVhY2goKGl0ZW1PYmopID0+IHtcbiAgICAgICAgICAgICAgICBJdGVtLnRvZ2dsZUNvbXBsZXRlZC5jYWxsKGl0ZW1zT2JqW2Ake0l0ZW0uZ2V0SWQuY2FsbChpdGVtT2JqKX1gXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgSXRlbSwgUXVlcnksIGdldEN1cnJlbnRSb3V0ZSwgc2V0Q3VycmVudFJvdXRlLCBoYXNJdGVtLCBmaW5kSXRlbXMsIGFkZEl0ZW0sIHRvZ2dsZUNvbXBsZXRlZCwgZGVsZXRlSXRlbSwgdXBkYXRlSXRlbSwgdG9nZ2xlQWxsIH07XG5cbn0pKCk7IiwiLyogXG4gKiBzdG9yZS5qcyBrbm93cyBvbmx5IGhvdyB0byByZWFkL3dyaXRlIHN0cmluZyBkYXRhIGZyb20vdG8gRG9jdW1lbnQubG9jYWxTdG9yYWdlLlxuICogQWxsIGl0ZW1zIGFyZSBzdG9yZWQgYXMgYSBsb25nIHN0cmluZyBpbiBsb2NhbFN0b3JhZ2UuIFxuICovXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXG4gICAgY29uc3QgaXRlbXNLZXkgPSAndG9kb0l0ZW1zJztcbiAgICBjb25zdCByb3V0ZUtleSA9ICd0b2RvQ3VycmVudFJvdXRlJztcblxuICAgIC8qIEEgc2hvdGN1dCB0byBjaGVjayB3aGV0aGVyIHRoZXJlJ3MgYW55IGl0ZW0gbGVmdCBpbiBzdG9yYWdlLiAqL1xuICAgIGZ1bmN0aW9uIGhhc0l0ZW0oKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zU3RyID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW1zS2V5KTtcbiAgICAgICAgaWYgKGl0ZW1zU3RyID09PSAne30nKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qIEdldCB0aGUgbG9uZyBzdHJpbmcgb2YgYWxsIGl0ZW1zLlxuICAgICAqIEpTT04ucGFyc2UoKSBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgc3RyaW5nIHRvIGFuIG9iamVjdC4gKi9cbiAgICBmdW5jdGlvbiBnZXRJdGVtc09iamVjdCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtc0tleSk7XG4gICAgICAgIGlmIChkYXRhKSByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8qIEpTT04uc3RyaW5naWZ5KCkgZnVuY3Rpb24gY29udmVydHMgYW4gbGFyZ2Ugb2JqZWN0IChjb250YWlucyBhbGwgaXRlbXMgZGF0YSkgdG8gc3RyaW5nLlxuICAgICAqIEFuZCBwdXNoIHRoZSBsb25nIHN0cmluZyBpbnRvIGxvY2FsU3Ryb3JhZ2UuICovXG4gICAgZnVuY3Rpb24gc2V0SXRlbXNPYmplY3QoaXRlbXNPYmopIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGl0ZW1zS2V5LCBKU09OLnN0cmluZ2lmeShpdGVtc09iaikpO1xuICAgIH1cblxuICAgIC8qIEEgaGVscGVyIGZ1bmN0aW9uIHJlYWQvd3JpdGUgZGF0YSBmcm9tL3RvIGxvY2FsU3RvcmFnZSwgc28gdGhhdCBtb2RlbC5qcyBjYW4gZm9jdXMgb24gaGlzIHdvcmsuICovXG4gICAgZnVuY3Rpb24gdXBkYXRlSXRlbXMoY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaXRlbXNPYmogPSBnZXRJdGVtc09iamVjdCgpO1xuICAgICAgICBjYWxsYmFjayhpdGVtc09iaik7XG4gICAgICAgIHNldEl0ZW1zT2JqZWN0KGl0ZW1zT2JqKTtcbiAgICB9XG5cbiAgICAvKiBTaW1wbHkgcmVhZCBjdXJyZW50IHJvdXRlIGZyb20gbG9jYWxTdG9yYWdlLiAqL1xuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRSb3V0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtyb3V0ZUtleX1gKTtcbiAgICB9XG5cbiAgICAvKiBVcGRhdGUgY3VycmVudCByb3V0ZS4gKi9cbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50Um91dGUocm91dGUpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3JvdXRlS2V5fWAsIHJvdXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBoYXNJdGVtLCBnZXRJdGVtc09iamVjdCwgc2V0SXRlbXNPYmplY3QsIHVwZGF0ZUl0ZW1zLCBnZXRDdXJyZW50Um91dGUsIHNldEN1cnJlbnRSb3V0ZSB9O1xuXG59KSgpOyIsIi8qXG4gKiBBIGhlbHBlciBvZiB2aWV3LmpzLiBPbmx5IHVzZWQgdG8gc3RvcmUgSFRNTCB0ZW1wbGF0ZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW1PYmopIHtcbiAgICAgICAgY29uc3Qgc3RyID0gXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiaXRlbVwiIGRhdGEtaWQ9JHtpdGVtT2JqLmlkfT5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInRvZ2dsZSBtYXRlcmlhbC1pY29uc1wiIHR5cGU9XCJjaGVja2JveFwiPiBcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInRleHRcIj4ke2l0ZW1PYmoudGl0bGV9PC9sYWJlbD5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZGVsZXRlIG1hdGVyaWFsLWljb25zXCI+Y2xlYXI8L2k+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyRm9vdGVyKGdpdGh1YkltZywgeWVhcikge1xuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJ0aXBcIj5Eb3VibGUgY2xpY2sgdG8gZWRpdCB0b2RvLjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29weXJpZ2h0XCI+Q29weXJpZ2h0IE1JVCDCqSBoaXJlbWUuc2hlbkBnbWFpbC5jb20gJm5ic3A7fCZuYnNwOyBTb3VyY2UgY29kZSAtIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaGVsbG9TaGVuL3RvZG9cIj48aW1nIGNsYXNzPVwiZ2l0aHViXCIgc3JjPVwiJHtnaXRodWJJbWd9XCI+PC9hPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwieWVhclwiPjIwMjEtJHt5ZWFyfTwvZGl2PmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmVuZGVySXRlbSwgcmVuZGVyRm9vdGVyIH07XG5cbn0pKCk7XG5cbiAgICAiLCIvKlxuICogQWxsIERPTSBtYW5pcHVsYXRpb25zIGdvIHRvIHRoaXMgZmlsZS4gXG4gKi9cbmltcG9ydCBUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbmltcG9ydCBHaXRodWJJbWcgZnJvbSAnLi4vYXNzZXRzL2ltZy9naXRodWJfYmxhY2sucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblxuICAgIGNvbnN0IHRvZG9FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kbycpO1xuICAgIGNvbnN0IHRpdGxlRWxlID0gdG9kb0VsZS5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgICBjb25zdCBkYXRlRWxlID0gdGl0bGVFbGUucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbiAgICBjb25zdCBkYXlFbGUgPSBkYXRlRWxlLnF1ZXJ5U2VsZWN0b3IoJy5kYXknKTtcbiAgICBjb25zdCBtb250aEVsZSA9IGRhdGVFbGUucXVlcnlTZWxlY3RvcignLm1vbnRoJyk7XG4gICAgY29uc3QgeWVhckVsZSA9IGRhdGVFbGUucXVlcnlTZWxlY3RvcignLnllYXInKTtcbiAgICBjb25zdCB3ZWVrZGF5RWxlID0gdGl0bGVFbGUucXVlcnlTZWxlY3RvcignLndlZWtkYXknKTtcbiAgICBjb25zdCB0b2dnbGVBbGxFbGUgPSB0b2RvRWxlLnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGVBbGwnKTtcbiAgICBjb25zdCBhZGRJdGVtQ29udGFpbmVyRWxlID0gdG9kb0VsZS5xdWVyeVNlbGVjdG9yKCcuYWRkSXRlbUNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGFkZEl0ZW1FbGUgPSBhZGRJdGVtQ29udGFpbmVyRWxlLnF1ZXJ5U2VsZWN0b3IoJy5hZGRJdGVtJyk7XG4gICAgY29uc3QgYWRkSXRlbUxhYmVsRWxlID0gYWRkSXRlbUNvbnRhaW5lckVsZS5xdWVyeVNlbGVjdG9yKCcuYWRkSXRlbUxhYmVsJyk7XG4gICAgY29uc3QgaXRlbXNCb2FyZEVsZSA9IHRvZG9FbGUucXVlcnlTZWxlY3RvcignLml0ZW1zQm9hcmQnKTtcbiAgICBjb25zdCBpdGVtc0NvbnRhaW5lckVsZSA9IGl0ZW1zQm9hcmRFbGUucXVlcnlTZWxlY3RvcignLml0ZW1zQ29udGFpbmVyJyk7XG4gICAgY29uc3QgaXRlbXNGb290ZXJFbGUgPSBpdGVtc0JvYXJkRWxlLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtc0Zvb3RlcicpO1xuICAgIGNvbnN0IHJvdXRlQnRucyA9IGl0ZW1zRm9vdGVyRWxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3V0ZScpO1xuICAgIGNvbnN0IGFjdGl2ZUNvdW50RWxlID0gaXRlbXNGb290ZXJFbGUucXVlcnlTZWxlY3RvcignLmFjdGl2ZUl0ZW1zQ291bnQnKTtcbiAgICBjb25zdCBhY3RpdmVDb3VudE51bUVsZSA9IGFjdGl2ZUNvdW50RWxlLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudCcpO1xuICAgIGNvbnN0IGNvbXBsZXRlZENvdW50RWxlID0gaXRlbXNGb290ZXJFbGUucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZEl0ZW1zQ291bnQnKTtcbiAgICBjb25zdCBjb21wbGV0ZWRDb3VudE51bUVsZSA9IGNvbXBsZXRlZENvdW50RWxlLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudCcpO1xuICAgIGNvbnN0IGZvb3RlckVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKTtcblxuICAgIGZ1bmN0aW9uIHNob3dEYXRlKHdlZWtkYXksIGRheSwgbW9udGgsIHllYXIpIHtcbiAgICAgICAgZGF5RWxlLnRleHRDb250ZW50ID0gZGF5O1xuICAgICAgICBtb250aEVsZS50ZXh0Q29udGVudCA9IG1vbnRoO1xuICAgICAgICB5ZWFyRWxlLnRleHRDb250ZW50ID0geWVhcjtcbiAgICAgICAgd2Vla2RheUVsZS50ZXh0Q29udGVudCA9IHdlZWtkYXk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJBZGRJdGVtRWxlKCkge1xuICAgICAgICBhZGRJdGVtRWxlLnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZEFkZEl0ZW0oY2FsbGJhY2spIHtcbiAgICAgICAgYWRkSXRlbUVsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBjYWxsYmFjayhhZGRJdGVtRWxlLnZhbHVlKSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpbmRBZGRJdGVtTGFiZWwoKSB7XG4gICAgICAgIGFkZEl0ZW1FbGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBoaWRlQWRkSXRlbUxhYmVsKCkpO1xuICAgICAgICBhZGRJdGVtRWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGhpZGVBZGRJdGVtTGFiZWwoKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUFkZEl0ZW1MYWJlbCgpIHtcbiAgICAgICAgaWYgKGFkZEl0ZW1FbGUudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBhZGRJdGVtTGFiZWxFbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkSXRlbUxhYmVsRWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIGZ1bmN0aW9uIGJpbmRUb2dnbGVDb21wbGV0ZWQodGFyZ2V0LCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlJyk7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKHRhcmdldC5kYXRhc2V0LmlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZERlbGV0ZUl0ZW0odGFyZ2V0LCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBidG4gPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlKCk7XG4gICAgICAgICAgICBjYWxsYmFjayh0YXJnZXQuZGF0YXNldC5pZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpbmRFZGl0SXRlbSh0YXJnZXQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0Jyk7XG4gICAgICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZWRpdHRpbmcnKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSk7XG4gICAgICAgICAgICBsYWJlbC5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXR0aW5nJyk7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGZhbHNlKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKHRhcmdldC5kYXRhc2V0LmlkLCBsYWJlbC50ZXh0Q29udGVudCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQodGFyZ2V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIGxhYmVsLmJsdXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZENoYW5nZVJvdXRlKGVhY2hCdG5DYWxsYmFjaywgZW5kaW5nQ2FsbGJhY2spIHtcbiAgICAgICAgcm91dGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVhY2hCdG5DYWxsYmFjayhidG4uZGF0YXNldC5yb3V0ZSk7XG4gICAgICAgICAgICAgICAgcm91dGVCdG5zLmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZW5kaW5nQ2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXJrQ3VycmVudFJvdXRlKHJvdXRlKSB7XG4gICAgICAgIHJvdXRlQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgICAgIGlmIChidG4uZGF0YXNldC5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kQ2xlYXJDb21wbGV0ZWRJdGVtcyhjYWxsYmFjaykge1xuICAgICAgICBjb21wbGV0ZWRDb3VudEVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhbGxiYWNrKCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpbmRUb2dnbGVBbGwoY2FsbGJhY2spIHtcbiAgICAgICAgdG9nZ2xlQWxsRWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FsbGJhY2soKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQWN0aXZlSXRlbXNDb3VudChjb3VudCkge1xuICAgICAgICBhY3RpdmVDb3VudE51bUVsZS50ZXh0Q29udGVudCA9IGNvdW50O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbXBsZXRlZEl0ZW1zQ291bnQoY291bnQpIHtcbiAgICAgICAgY29tcGxldGVkQ291bnROdW1FbGUudGV4dENvbnRlbnQgPSBjb3VudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93Q29tcGxldGVkSXRlbXNDb3VudCgpIHtcbiAgICAgICAgY29tcGxldGVkQ291bnRFbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVDb21wbGV0ZWRJdGVtc0NvdW50KCkge1xuICAgICAgICBjb21wbGV0ZWRDb3VudEVsZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0l0ZW1zQm9hcmQoKSB7XG4gICAgICAgIGl0ZW1zQm9hcmRFbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGFkZEl0ZW1Db250YWluZXJFbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWxvbmUnKTtcbiAgICAgICAgYWRkSXRlbUVsZS5jbGFzc0xpc3QucmVtb3ZlKCdhbG9uZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVJdGVtc0JvYXJkKCkge1xuICAgICAgICBpdGVtc0JvYXJkRWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBhZGRJdGVtQ29udGFpbmVyRWxlLmNsYXNzTGlzdC5hZGQoJ2Fsb25lJyk7XG4gICAgICAgIGFkZEl0ZW1FbGUuY2xhc3NMaXN0LmFkZCgnYWxvbmUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlVG9nZ2xlQWxsKCkge1xuICAgICAgICB0b2dnbGVBbGxFbGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpOyBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVBbGxDaGVja2VkKCkge1xuICAgICAgICB0b2dnbGVBbGxFbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB0b2dnbGVBbGxFbGUuY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlQWxsTm90Q2hlY2tlZCgpIHtcbiAgICAgICAgdG9nZ2xlQWxsRWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgdG9nZ2xlQWxsRWxlLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVFbGVtZW50KHRhcmdldCkge1xuICAgICAgICB0YXJnZXQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJdGVtcygpIHtcbiAgICAgICAgaXRlbXNDb250YWluZXJFbGUuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0l0ZW0oaXRlbU9iaiwgY2FsbGJhY2spIHtcbiAgICAgICAgaXRlbXNDb250YWluZXJFbGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBUZW1wbGF0ZS5yZW5kZXJJdGVtKGl0ZW1PYmopKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gaXRlbXNDb250YWluZXJFbGUucXVlcnlTZWxlY3RvcihgLml0ZW1bZGF0YS1pZD1cIiR7aXRlbU9iai5pZH1cIl1gKTtcbiAgICAgICAgaWYgKGl0ZW1PYmouY29tcGxldGVkKSB7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlJyk7XG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayh0YXJnZXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dGb290ZXIoKSB7XG4gICAgICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGZvb3RlckVsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBUZW1wbGF0ZS5yZW5kZXJGb290ZXIoR2l0aHViSW1nLCB5ZWFyKSk7XG4gICAgfVxuICAgIFxuXG4gICAgcmV0dXJuIHsgc2hvd0RhdGUsIGNsZWFyQWRkSXRlbUVsZSwgYmluZEFkZEl0ZW0sIGJpbmRBZGRJdGVtTGFiZWwsIGJpbmRUb2dnbGVDb21wbGV0ZWQsIGJpbmREZWxldGVJdGVtLCBiaW5kRWRpdEl0ZW0sIGJpbmRDaGFuZ2VSb3V0ZSwgbWFya0N1cnJlbnRSb3V0ZSwgYmluZENsZWFyQ29tcGxldGVkSXRlbXMsIGJpbmRUb2dnbGVBbGwsIHVwZGF0ZUFjdGl2ZUl0ZW1zQ291bnQsIHVwZGF0ZUNvbXBsZXRlZEl0ZW1zQ291bnQsIHNob3dDb21wbGV0ZWRJdGVtc0NvdW50LCBoaWRlQ29tcGxldGVkSXRlbXNDb3VudCwgaGlkZUl0ZW1zQm9hcmQsIHNob3dJdGVtc0JvYXJkLCBoaWRlVG9nZ2xlQWxsLCB0b2dnbGVBbGxDaGVja2VkLCB0b2dnbGVBbGxOb3RDaGVja2VkLCByZW1vdmVFbGVtZW50LCBjbGVhckl0ZW1zLCBzaG93SXRlbSwgc2hvd0Zvb3RlciB9O1xuXG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uL1wiOyIsImltcG9ydCBjc3MgZnJvbSAnLi4vY3NzL2luZGV4LmNzcyc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuXG4oKCkgPT4ge1xuICAgIENvbnRyb2xsZXIuZW5hYmxlQWRkSXRlbSgpO1xuICAgIENvbnRyb2xsZXIuZW5hYmxlQ2hhbmdlUm91dGUoKTtcbiAgICBDb250cm9sbGVyLmVuYWJsZUNsZWFyQ29tcGxldGVkSXRlbXMoKTtcbiAgICBDb250cm9sbGVyLmVuYWJsZVRvZ2dsZUFsbCgpO1xuICAgIENvbnRyb2xsZXIuc2hvd0RhdGUoKTtcbiAgICBDb250cm9sbGVyLnNob3dJdGVtcygpO1xuICAgIENvbnRyb2xsZXIudXBkYXRlSXRlbXNDb3VudCgpO1xuICAgIENvbnRyb2xsZXIuc2hvd0Zvb3RlcigpO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=