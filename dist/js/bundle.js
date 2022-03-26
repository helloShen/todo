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
		_view__WEBPACK_IMPORTED_MODULE_0__["default"].bindChangeRoute(changeRoute, () =>
			_view__WEBPACK_IMPORTED_MODULE_0__["default"].markCurrentRoute(currentRoute)
		);
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
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
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
				weekday,
				day,
				month,
				year,
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
		const id = typeof itemId === 'string' ? parseInt(itemId, 10) : itemId;
		const idx = itemsArr.findIndex((ele) => ele.id === id);
		if (idx === -1) return;
		itemsArr.splice(idx, 1);
		itemStorage.write(itemsArr);
	}

	/* Update properties of an item. */
	function updateItem(itemId, query) {
		const itemsArr = itemStorage.read();
		const id = typeof itemId === 'string' ? parseInt(itemId, 10) : itemId;
		const idx = itemsArr.findIndex((ele) => ele.id === id);
		if (idx === -1) return;
		itemsArr[idx][query.getKey()] = query.getValue();
		itemStorage.write(itemsArr);
	}

	/* Toggle item "completed" property. */
	function toggleItemCompleted(itemId) {
		const itemsArr = itemStorage.read();
		const id = typeof itemId === 'string' ? parseInt(itemId, 10) : itemId;
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
	const completedCountEle = itemsFooterEle.querySelector(
		'.completedItemsCount'
	);
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
		itemsContainerEle.insertAdjacentHTML(
			'beforeend',
			_template__WEBPACK_IMPORTED_MODULE_0__["default"].renderItem(itemObj)
		);
		const target = itemsContainerEle.querySelector(
			`.item[data-id="${itemObj.id}"]`
		);
		if (itemObj.completed) {
			target.classList.add('completed');
			const checkbox = target.querySelector('.toggle');
			checkbox.checked = true;
		}
		callback(target);
	}

	function bindAddItem(callback) {
		addItemEle.addEventListener(
			'change',
			() => callback(addItemEle.value),
			false
		);
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
		footerEle.insertAdjacentHTML(
			'afterbegin',
			_template__WEBPACK_IMPORTED_MODULE_0__["default"].renderFooter(_assets_img_github_black_png__WEBPACK_IMPORTED_MODULE_1__, year)
		);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZkE7QUFDbUM7QUFDRzs7QUFFdEM7QUFDQSxDQUFDLGlFQUF3QjtBQUN6QixDQUFDLHFFQUE0QjtBQUM3QixDQUFDLDZFQUFvQztBQUNyQyxDQUFDLG1FQUEwQjtBQUMzQixDQUFDLDREQUFtQjtBQUNwQixDQUFDLDZEQUFvQjtBQUNyQixDQUFDLG9FQUEyQjtBQUM1QixDQUFDLDhEQUFxQjtBQUN0QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3NzL25vcm0uY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL21vZGVsLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDs0MDA7NzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcblxcdC0tYmxhY2s6ICMyNDI5MmQ7XFxuXFx0LS1ibGFjay1kaW1tZXI6ICMyYjMxMzc7XFxuXFx0LS1ncmF5OiAjNTg2MDZhO1xcblxcdC0tbGlnaHQtZ3JheTogIzk0OWRhNztcXG5cXHQtLWxpZ2h0ZXItZ3JheTogI2I0YmRjODtcXG5cXHQtLWJvcmRlci1ncmF5OiAjZTdlOWVhO1xcblxcdC0tYmFjay1ncmF5OiAjZjZmOGZhO1xcblxcdC0td2hpdGU6ICNmZmZmZmY7XFxuXFx0LS1yZWQ6ICNkYjJjMDA7XFxuXFx0LS1ncmVlbjogIzJkYTQ0ZTtcXG5cXHQtLWJsdWU6ICMwZDc0ZTc7XFxuXFx0LS1ibHVlMjogIzA5NjlkYTtcXG5cXHQtLXB1cnBsZTogIzZlNTQ5NDtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG59XFxuXFxuLmxvZ28ge1xcblxcdGhlaWdodDogNnJlbTtcXG5cXHRmb250LXNpemU6IDIuNXJlbTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuXFx0Y29sb3I6IHZhcigtLWJsYWNrKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGFsaWduLWl0ZW1zOiBlbmQ7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAycmVtIDA7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8ge1xcblxcdHdpZHRoOiAzNnJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCA0cHggdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4udG9kbyA+IC50aXRsZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA3cmVtO1xcblxcdHBhZGRpbmc6IDJyZW0gMi41cmVtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG5cXHRib3JkZXItYm90dG9tOiAwO1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b2RvIC5kYXRlIHtcXG5cXHR3aWR0aDogN3JlbTtcXG5cXHRoZWlnaHQ6IDNyZW07XFxuXFx0Y29sb3I6IHZhcigtLWdyYXkpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDNyZW07XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVyZW0gMS41cmVtO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLmRheSB7XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdGdyaWQtcm93OiAxIC8gMztcXG5cXHRncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi50b2RvIC5tb250aCB7XFxuXFx0anVzdGlmeS1zZWxmOiBzdGFydDtcXG5cXHRhbGlnbi1zZWxmOiBlbmQ7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGdyaWQtcm93OiAxIC8gMjtcXG5cXHRncmlkLWNvbHVtbjogMiAvIDM7XFxuXFx0cGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udG9kbyAueWVhciB7XFxuXFx0anVzdGlmeS1zZWxmOiBzdGFydDtcXG5cXHRhbGlnbi1zZWxmOiBzdGFydDtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Z3JpZC1yb3c6IDIgLyAzO1xcblxcdGdyaWQtY29sdW1uOiAyIC8gMztcXG5cXHRwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi50b2RvIC53ZWVrZGF5IHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4udG9kbyA+IC5hZGRJdGVtQ29udGFpbmVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDRyZW07XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDFmcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyA+IC5hZGRJdGVtQ29udGFpbmVyLmFsb25lIHtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbCB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsOjphZnRlciB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0bWFyZ2luOiAwIDAuNzVyZW07XFxuXFx0Y29udGVudDogJ3JhZGlvX2J1dHRvbl91bmNoZWNrZWQnO1xcblxcdGNvbG9yOiB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi50b2RvIC50b2dnbGVBbGw6Y2hlY2tlZDo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICdjaGVja19jaXJjbGUnO1xcblxcdGNvbG9yOiB2YXIoLS1ncmVlbik7XFxuXFx0b3BhY2l0eTogMC42O1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsLmhpZGUge1xcblxcdG9wYWNpdHk6IDA7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtRm9ybSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW1MYWJlbCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDFweDtcXG5cXHR0b3A6IDEuMnJlbTtcXG5cXHRjb2xvcjogdmFyKC0tbGlnaHRlci1ncmF5KTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW1MYWJlbC5oaWRlIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbSB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJvcmRlcjogMHB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbS5hbG9uZSB7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8gPiAuaXRlbXNCb2FyZCB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvID4gLml0ZW1zQm9hcmQuaGlkZGVuIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kbyAuaXRlbSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAtMXB4IDA7XFxuXFx0aGVpZ2h0OiA0cmVtO1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gMWZyIDNyZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudG9nZ2xlIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZTo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICdyYWRpb19idXR0b25fdW5jaGVja2VkJztcXG5cXHRtYXJnaW46IDAgMC43NXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tYm9yZGVyLWdyYXkpO1xcblxcdG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudG9nZ2xlOmNoZWNrZWQ6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnY2hlY2tfY2lyY2xlJztcXG5cXHRjb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50ZXh0IHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Y29sb3I6IHZhcigtLWdyYXkpO1xcbiAgb3V0bGluZTogbm9uZTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtLmNvbXBsZXRlZCA+IC50ZXh0IHtcXG5cXHRvcGFjaXR5OiAwLjY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRleHQuZWRpdHRpbmcge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLmRlbGV0ZSB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udG9kbyAuaXRlbTpob3ZlciA+IC5kZWxldGUge1xcblxcdG9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA0cmVtO1xcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXG5cXHRmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuYWN0aXZlSXRlbXNDb3VudCxcXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuY29tcGxldGVkSXRlbXNDb3VudCB7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdG1hcmdpbjogMCAxcmVtO1xcblxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5hY3RpdmVJdGVtc0NvdW50IHtcXG5cXHR3aWR0aDogNC41cmVtO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuY29tcGxldGVkSXRlbXNDb3VudCB7XFxuXFx0d2lkdGg6IDExcmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuY29tcGxldGVkSXRlbXNDb3VudC5oaWRlIHtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdGN1cnNvcjogYXV0bztcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLnJvdXRlcyB7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdHdpZHRoOiAxNHJlbTtcXG5cXHRtYXJnaW46IDAgMXJlbTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gNHJlbSA2cmVtO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZSB7XFxuXFx0cGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xcblxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciAucm91dGU6aG92ZXIge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZS5jdXJyZW50IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWdyYXkpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLmZvb3RlciB7XFxuXFx0aGVpZ2h0OiA0LjVyZW07XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tbGlnaHRlci1ncmF5KTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDEuNXJlbSk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgLnRpcCxcXG4uZm9vdGVyIC5jb3B5cmlnaHQsXFxuLmZvb3RlciAueWVhciB7XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcblxcdHdpZHRoOiAxcmVtO1xcblxcdGhlaWdodDogMXJlbTtcXG59XFxuXFxuLmZvb3RlciAuZ2l0aHViIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHVCQUF1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O0NBQ2xCLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLGtDQUFrQztDQUNsQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLGlDQUFpQztDQUNqQyxrQkFBa0I7Q0FDbEIsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYixxQ0FBcUM7Q0FDckMsbUJBQW1CO0NBQ25CLHFCQUFxQjtBQUN0Qjs7QUFFQTs7O0NBR0MsY0FBYztDQUNkLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCcuL25vcm0uY3NzJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzQwMDs3MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuXFx0LS1ibGFjazogIzI0MjkyZDtcXG5cXHQtLWJsYWNrLWRpbW1lcjogIzJiMzEzNztcXG5cXHQtLWdyYXk6ICM1ODYwNmE7XFxuXFx0LS1saWdodC1ncmF5OiAjOTQ5ZGE3O1xcblxcdC0tbGlnaHRlci1ncmF5OiAjYjRiZGM4O1xcblxcdC0tYm9yZGVyLWdyYXk6ICNlN2U5ZWE7XFxuXFx0LS1iYWNrLWdyYXk6ICNmNmY4ZmE7XFxuXFx0LS13aGl0ZTogI2ZmZmZmZjtcXG5cXHQtLXJlZDogI2RiMmMwMDtcXG5cXHQtLWdyZWVuOiAjMmRhNDRlO1xcblxcdC0tYmx1ZTogIzBkNzRlNztcXG5cXHQtLWJsdWUyOiAjMDk2OWRhO1xcblxcdC0tcHVycGxlOiAjNmU1NDk0O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWdyYXkpO1xcbn1cXG5cXG4ubG9nbyB7XFxuXFx0aGVpZ2h0OiA2cmVtO1xcblxcdGZvbnQtc2l6ZTogMi41cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Zm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG5cXHRjb2xvcjogdmFyKC0tYmxhY2spO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0YWxpZ24taXRlbXM6IGVuZDtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXJnaW46IDJyZW0gMDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9kbyB7XFxuXFx0d2lkdGg6IDM2cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDRweCB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi50b2RvID4gLnRpdGxlIHtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDdyZW07XFxuXFx0cGFkZGluZzogMnJlbSAyLjVyZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcblxcdGJvcmRlci1ib3R0b206IDA7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvZG8gLmRhdGUge1xcblxcdHdpZHRoOiA3cmVtO1xcblxcdGhlaWdodDogM3JlbTtcXG5cXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gM3JlbTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDEuNXJlbSAxLjVyZW07XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuZGF5IHtcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0Z3JpZC1yb3c6IDEgLyAzO1xcblxcdGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLnRvZG8gLm1vbnRoIHtcXG5cXHRqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcblxcdGFsaWduLXNlbGY6IGVuZDtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Z3JpZC1yb3c6IDEgLyAyO1xcblxcdGdyaWQtY29sdW1uOiAyIC8gMztcXG5cXHRwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi50b2RvIC55ZWFyIHtcXG5cXHRqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcblxcdGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRncmlkLXJvdzogMiAvIDM7XFxuXFx0Z3JpZC1jb2x1bW46IDIgLyAzO1xcblxcdHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLnRvZG8gLndlZWtkYXkge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi50b2RvID4gLmFkZEl0ZW1Db250YWluZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogNHJlbTtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gMWZyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvID4gLmFkZEl0ZW1Db250YWluZXIuYWxvbmUge1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi50b2RvIC50b2dnbGVBbGw6OmFmdGVyIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRtYXJnaW46IDAgMC43NXJlbTtcXG5cXHRjb250ZW50OiAncmFkaW9fYnV0dG9uX3VuY2hlY2tlZCc7XFxuXFx0Y29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbDpjaGVja2VkOjphZnRlciB7XFxuXFx0Y29udGVudDogJ2NoZWNrX2NpcmNsZSc7XFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuKTtcXG5cXHRvcGFjaXR5OiAwLjY7XFxufVxcblxcbi50b2RvIC50b2dnbGVBbGwuaGlkZSB7XFxuXFx0b3BhY2l0eTogMDtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW1Gb3JtIHtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC13ZWlnaHQ6IDEwMDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbUxhYmVsIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogMXB4O1xcblxcdHRvcDogMS4ycmVtO1xcblxcdGNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbUxhYmVsLmhpZGUge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Ym9yZGVyOiAwcHg7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtLmFsb25lIHtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4udG9kbyA+IC5pdGVtc0JvYXJkIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRvZG8gPiAuaXRlbXNCb2FyZC5oaWRkZW4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvIC5pdGVtIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXJnaW46IC0xcHggMDtcXG5cXHRoZWlnaHQ6IDRyZW07XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAxZnIgM3JlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50b2dnbGUge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudG9nZ2xlOjphZnRlciB7XFxuXFx0Y29udGVudDogJ3JhZGlvX2J1dHRvbl91bmNoZWNrZWQnO1xcblxcdG1hcmdpbjogMCAwLjc1cmVtO1xcblxcdGNvbG9yOiB2YXIoLS1ib3JkZXItZ3JheSk7XFxuXFx0b3BhY2l0eTogMC42O1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50b2dnbGU6Y2hlY2tlZDo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICdjaGVja19jaXJjbGUnO1xcblxcdGNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRleHQge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxuICBvdXRsaW5lOiBub25lO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW0uY29tcGxldGVkID4gLnRleHQge1xcblxcdG9wYWNpdHk6IDAuNjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudGV4dC5lZGl0dGluZyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAuZGVsZXRlIHtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi50b2RvIC5pdGVtOmhvdmVyID4gLmRlbGV0ZSB7XFxuXFx0b3BhY2l0eTogMTtcXG5cXHRjb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDRyZW07XFxuXFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcblxcdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5hY3RpdmVJdGVtc0NvdW50LFxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5jb21wbGV0ZWRJdGVtc0NvdW50IHtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0bWFyZ2luOiAwIDFyZW07XFxuXFx0Y29sb3I6IHZhcigtLWdyYXkpO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmFjdGl2ZUl0ZW1zQ291bnQge1xcblxcdHdpZHRoOiA0LjVyZW07XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5jb21wbGV0ZWRJdGVtc0NvdW50IHtcXG5cXHR3aWR0aDogMTFyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5jb21wbGV0ZWRJdGVtc0NvdW50LmhpZGUge1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0Y3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAucm91dGVzIHtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0d2lkdGg6IDE0cmVtO1xcblxcdG1hcmdpbjogMCAxcmVtO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSA0cmVtIDZyZW07XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMC41cmVtO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgLnJvdXRlIHtcXG5cXHRwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XFxuXFx0Y29sb3I6IHZhcigtLWdyYXkpO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIC5yb3V0ZTpob3ZlciB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgLnJvdXRlLmN1cnJlbnQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG5cXHRoZWlnaHQ6IDQuNXJlbTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcblxcdGNvbG9yOiB2YXIoLS1saWdodGVyLWdyYXkpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMS41cmVtKTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciAudGlwLFxcbi5mb290ZXIgLmNvcHlyaWdodCxcXG4uZm9vdGVyIC55ZWFyIHtcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDAuMjVyZW07XFxufVxcblxcbi5mb290ZXIgYSB7XFxuXFx0d2lkdGg6IDFyZW07XFxuXFx0aGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uZm9vdGVyIC5naXRodWIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvbm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qXG4gKiBjb250cm9sbGVyLmpzIGlzIGEgZ2VuZXJhbCBtYW5hZ2VyLlxuICogSGUgaXMgdGhlIG9ubHkgb25lIHdobyBrbm93cyBhbGwgdGhlIGxvZ2ljIG9mIGRpZmZlcmVudCBmZWF0dXJlcy5cbiAqIEJ1dCBoZSBpcyBibGluZCBmcm9tIGJvdGggZGF0YSBhbmQgRE9NLlxuICogbW9kZWwuanMgYW5kIHZpZXcuanMgZG8gdGhlc2UgY29uY3JldGUgdGFza3MgZm9yIGhpbS5cbiAqL1xuXG5pbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHQvKiBQcmUtZGVmaW5lIHF1ZXJpZXMgZm9yIHRocmVlIGRpZmZlcmVudCByb3V0ZXM6IGFsbCwgYWN0aXZlIGFuZCBjb21wbGV0ZWQuXG5cdCAqIE1vZGVsLmZpbmQoKSBmdW5jdGlvbiBhY2NlcHRzIG9ubHkgYW4gYXJyYXkgb2YgUXVlcnkgYXMgaW5wdXQgdG8gZmlsdGVyIGl0ZW1zIHdlIHdhbnQuICovXG5cdGNvbnN0IEl0ZW1zUXVlcnkgPSAoKCkgPT4ge1xuXHRcdGNvbnN0IHF1ZXJ5QmFuayA9IHtcblx0XHRcdGFsbDogW10sXG5cdFx0XHRhY3RpdmU6IFtNb2RlbC5RdWVyeSgnY29tcGxldGVkJywgZmFsc2UpXSxcblx0XHRcdGNvbXBsZXRlZDogW01vZGVsLlF1ZXJ5KCdjb21wbGV0ZWQnLCB0cnVlKV0sXG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGNyZWF0ZShyb3V0ZSkge1xuXHRcdFx0cmV0dXJuIHF1ZXJ5QmFua1tyb3V0ZV07XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRjcmVhdGUsXG5cdFx0fTtcblx0fSkoKTtcblxuXHQvKiBHZXQgdGhlIHF1ZXJpZXMgZnJvbSBJdGVtc1F1ZXJ5LCBhbmQgZmVlZCB0aGVtIHRvIE1vZGVsLmZpbmRJdGVtcygpIGZ1bmN0aW9uLiAqL1xuXHRmdW5jdGlvbiBmaWx0ZXJJdGVtcyhyb3V0ZSkge1xuXHRcdGNvbnN0IHF1ZXJpZXMgPSBJdGVtc1F1ZXJ5LmNyZWF0ZShyb3V0ZSk7XG5cdFx0cmV0dXJuIE1vZGVsLmZpbmRJdGVtcyhxdWVyaWVzKTtcblx0fVxuXG5cdC8qIFVwZGF0ZSB0aGUgY291bnQgbnVtYmVyIG9mIHRocmVlIGRpZmZlcmVudCByb3V0ZXMoYWxsLCBhY3RpdmUgYW5kIGNvbXBsZXRlZCkgbGlzdGVkXG5cdCAqIG9uIHRvZG8gYm9hcmQuXG5cdCAqIFRoZSBlbnRpcmUgaXRlbXMgYm9hcmQgd2lsbCBiZSBoaWRkZW4gaWYgbm8gaXRlbXMgbGVmdCBpbiBpdGVtcyBsaXN0LiAqL1xuXHRmdW5jdGlvbiB1cGRhdGVJdGVtc0NvdW50KCkge1xuXHRcdGNvbnN0IGFjdGl2ZUNvdW50ID0gZmlsdGVySXRlbXMoJ2FjdGl2ZScpLmxlbmd0aDtcblx0XHRjb25zdCBjb21wbGV0ZWRDb3VudCA9IGZpbHRlckl0ZW1zKCdjb21wbGV0ZWQnKS5sZW5ndGg7XG5cdFx0Vmlldy51cGRhdGVBY3RpdmVJdGVtc0NvdW50KGFjdGl2ZUNvdW50KTtcblx0XHRWaWV3LnVwZGF0ZUNvbXBsZXRlZEl0ZW1zQ291bnQoY29tcGxldGVkQ291bnQpO1xuXHRcdGlmIChjb21wbGV0ZWRDb3VudCA9PT0gMCkge1xuXHRcdFx0Vmlldy5oaWRlQ29tcGxldGVkSXRlbXNDb3VudCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRWaWV3LnNob3dDb21wbGV0ZWRJdGVtc0NvdW50KCk7XG5cdFx0fVxuXHRcdGlmIChhY3RpdmVDb3VudCArIGNvbXBsZXRlZENvdW50ID09PSAwKSB7XG5cdFx0XHQvLyBoaWRlIHRoZSBlbnRpcmUgaXRlbSBib2FyZCBpZiAwIGl0ZW0gbGVmdFxuXHRcdFx0Vmlldy5oaWRlSXRlbXNCb2FyZCgpO1xuXHRcdFx0Vmlldy5oaWRlVG9nZ2xlQWxsKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFZpZXcuc2hvd0l0ZW1zQm9hcmQoKTtcblx0XHRcdGlmIChhY3RpdmVDb3VudCA+IDApIHtcblx0XHRcdFx0Vmlldy50b2dnbGVBbGxOb3RDaGVja2VkKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRWaWV3LnRvZ2dsZUFsbENoZWNrZWQoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiBHZXQgdGhlIGN1cnJlbnQgcm91dGUgZnJvbSBzdG9yYWdlLFxuXHQgKiBmaWx0ZXIgaXRlbXMgdW5kZXIgY3VycmVudCByb3V0ZSBhbmQgY2FsbCB2aWV3IHRvIGNyZWF0ZSBpdGVtcyBjYXJkIGluIERPTS5cblx0ICogVmlldy5zaG93SXRlbSgpIGZ1bmN0aW9uIHJlcXVpcmVzIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gdGVsbCBoaW1cblx0ICogd2hpY2ggYnV0dG9ucyBuZWVkIHRvIGJlIGFjdGl2YXRlZCBhZnRlciBpdGVtIGNhcmQgaXMgY3JlYXRlZC4gKi9cblx0ZnVuY3Rpb24gc2hvd0l0ZW1zKCkge1xuXHRcdGNvbnN0IGl0ZW1zQXJyID0gZmlsdGVySXRlbXMoTW9kZWwuZ2V0Q3VycmVudFJvdXRlKCkpO1xuXHRcdFZpZXcuY2xlYXJJdGVtcygpO1xuXHRcdGl0ZW1zQXJyLmZvckVhY2goKGl0ZW1PYmopID0+IHtcblx0XHRcdFZpZXcuc2hvd0l0ZW0oaXRlbU9iaiwgKHRhcmdldCkgPT4ge1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcblx0XHRcdFx0Vmlldy5iaW5kVG9nZ2xlQ29tcGxldGVkKHRhcmdldCwgdG9nZ2xlQ29tcGxldGVkKTtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG5cdFx0XHRcdFZpZXcuYmluZERlbGV0ZUl0ZW0odGFyZ2V0LCBkZWxldGVJdGVtKTtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG5cdFx0XHRcdFZpZXcuYmluZEVkaXRJdGVtKHRhcmdldCwgZWRpdEl0ZW0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKiBNYWluIGxvZ2ljIG9mIGhvdyB0byBhZGQgYSBuZXcgaXRlbS4gKi9cblx0ZnVuY3Rpb24gYWRkSXRlbSh0ZXh0KSB7XG5cdFx0TW9kZWwuYWRkSXRlbSh0ZXh0KTtcblx0XHRWaWV3LmNsZWFyQWRkSXRlbUVsZSgpO1xuXHRcdHNob3dJdGVtcygpO1xuXHRcdHVwZGF0ZUl0ZW1zQ291bnQoKTtcblx0fVxuXG5cdC8qIE1haW4gbG9naWMgb2YgdG9nZ2xpbmcgYW4gaXRlbSB0byBjb21wbGV0ZWQuICovXG5cdGZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlZChpdGVtSWQpIHtcblx0XHRNb2RlbC50b2dnbGVJdGVtQ29tcGxldGVkKGl0ZW1JZCk7XG5cdFx0c2hvd0l0ZW1zKCk7IC8vIG11c3QgcmVmcmVzaCBjdXJyZW50IHJvdXRlLlxuXHRcdHVwZGF0ZUl0ZW1zQ291bnQoKTtcblx0fVxuXG5cdC8qIE1haW4gbG9naWMgb2Ygd2hhdCBoYXBwZW5kIHdoZW4gZGVsZXRlIGJ1dHRvbiBpcyBjbGlja2VkLiAqL1xuXHRmdW5jdGlvbiBkZWxldGVJdGVtKGl0ZW1JZCkge1xuXHRcdE1vZGVsLmRlbGV0ZUl0ZW0oaXRlbUlkKTtcblx0XHR1cGRhdGVJdGVtc0NvdW50KCk7XG5cdH1cblxuXHQvKiBNYWluIGxvZ2luIG9mIGVkaXRpbmcgYW4gaXRlbS4gKi9cblx0ZnVuY3Rpb24gZWRpdEl0ZW0oaXRlbUlkLCBpdGVtVmFsdWUsIGNhbGxiYWNrKSB7XG5cdFx0aWYgKCFpdGVtVmFsdWUpIHtcblx0XHRcdE1vZGVsLmRlbGV0ZUl0ZW0oaXRlbUlkKTtcblx0XHRcdHVwZGF0ZUl0ZW1zQ291bnQoKTtcblx0XHRcdGNhbGxiYWNrKCk7IC8vIGNhbGxiYWNrIHZpZXcgaWYgbmVlZCB0byByZW1vdmUgdGhhdCBpdGVtIGZyb20gdmlldy5cblx0XHR9IGVsc2Uge1xuXHRcdFx0TW9kZWwudXBkYXRlSXRlbShpdGVtSWQsIE1vZGVsLlF1ZXJ5KCd0aXRsZScsIGl0ZW1WYWx1ZSkpO1xuXHRcdH1cblx0fVxuXG5cdC8qIE1haW4gbG9naWMgb2Ygc3dpdGNoaW5nIHJvdXRlLiAqL1xuXHRmdW5jdGlvbiBjaGFuZ2VSb3V0ZShyb3V0ZSkge1xuXHRcdE1vZGVsLnNldEN1cnJlbnRSb3V0ZShyb3V0ZSk7XG5cdFx0c2hvd0l0ZW1zKCk7XG5cdH1cblxuXHQvKiBNYWluIGxvZ2ljIG9mIFwiY2xlYXIgYWxsIGNvbXBsZXRlZFwiIGJ1dHRvbi4gKi9cblx0ZnVuY3Rpb24gY2xlYXJBbGxDb21wbGV0ZWRJdGVtcygpIHtcblx0XHRjb25zdCBjb21wbGV0ZWRJdGVtc0FyciA9IGZpbHRlckl0ZW1zKCdjb21wbGV0ZWQnKTtcblx0XHRjb21wbGV0ZWRJdGVtc0Fyci5mb3JFYWNoKChpdGVtT2JqKSA9PiB7XG5cdFx0XHRNb2RlbC5kZWxldGVJdGVtKGl0ZW1PYmouaWQpO1xuXHRcdH0pO1xuXHRcdHNob3dJdGVtcygpO1xuXHRcdHVwZGF0ZUl0ZW1zQ291bnQoKTtcblx0fVxuXG5cdC8qIE1haW4gbG9naWMgb2YgXCJ0b2dnbGUgYWxsXCIgYnV0dG9uLiAqL1xuXHRmdW5jdGlvbiB0b2dnbGVBbGwoKSB7XG5cdFx0Y29uc3QgYWN0aXZlSXRlbXNBcnIgPSBmaWx0ZXJJdGVtcygnYWN0aXZlJyk7XG5cdFx0aWYgKGFjdGl2ZUl0ZW1zQXJyLmxlbmd0aCA+IDApIHtcblx0XHRcdGFjdGl2ZUl0ZW1zQXJyLmZvckVhY2goKGl0ZW1PYmopID0+IHtcblx0XHRcdFx0TW9kZWwudG9nZ2xlSXRlbUNvbXBsZXRlZChpdGVtT2JqLmlkKTtcblx0XHRcdH0pO1xuXHRcdFx0c2hvd0l0ZW1zKCk7XG5cdFx0XHR1cGRhdGVJdGVtc0NvdW50KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGNvbXBsZXRlZEl0ZW1zQXJyID0gZmlsdGVySXRlbXMoJ2NvbXBsZXRlZCcpO1xuXHRcdFx0aWYgKGNvbXBsZXRlZEl0ZW1zQXJyLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29tcGxldGVkSXRlbXNBcnIuZm9yRWFjaCgoaXRlbU9iaikgPT4ge1xuXHRcdFx0XHRcdE1vZGVsLnRvZ2dsZUl0ZW1Db21wbGV0ZWQoaXRlbU9iai5pZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRzaG93SXRlbXMoKTtcblx0XHRcdFx0dXBkYXRlSXRlbXNDb3VudCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qIENhbGwgVmlldyB0byBiaW5kIGV2ZW50IGxpc3RlbmVycyBmb3IgYWRkaW5nIG5ldyBpdGVtIGZlYXR1cmUuXG5cdCAqIE1haW4gbG9naWMgYWRkSXRlbSgpIGZ1bmN0aW9uIGlzIGZlZCBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiAqL1xuXHRmdW5jdGlvbiBlbmFibGVBZGRJdGVtKCkge1xuXHRcdFZpZXcuYmluZEFkZEl0ZW0oYWRkSXRlbSk7XG5cdFx0Vmlldy5iaW5kQWRkSXRlbUxhYmVsKCk7XG5cdH1cblxuXHQvKiBDYWxsIFZpZXcgdG8gYmluZCBldmVudCBsaXN0ZW5lcnMgZm9yIHJvdXRlIHN3aXRjaCBidXR0b25zLlxuXHQgKiBNYWluIGxvZ2ljIGZ1bmN0aW9uIGNoYW5nZVJvdXRlKCkgaXMgZmVkIGFzIGEgY2FsbGJhY2sgZnVuY3Rpb24uICovXG5cdGZ1bmN0aW9uIGVuYWJsZUNoYW5nZVJvdXRlKCkge1xuXHRcdGNvbnN0IGN1cnJlbnRSb3V0ZSA9IE1vZGVsLmdldEN1cnJlbnRSb3V0ZSgpO1xuXHRcdFZpZXcuYmluZENoYW5nZVJvdXRlKGNoYW5nZVJvdXRlLCAoKSA9PlxuXHRcdFx0Vmlldy5tYXJrQ3VycmVudFJvdXRlKGN1cnJlbnRSb3V0ZSlcblx0XHQpO1xuXHR9XG5cblx0LyogQ2FsbCBWaWV3IHRvIGJpbmQgZXZlbnQgbGlzdGVuZXJzIGZvciBjbGVhciBidXR0b25zLlxuXHQgKiBNYWluIGxvZ2ljIGNsZWFyQWxsQ29tcGxldGVkSXRlbSgpIGZ1bmN0aW9uIGlzIGZlZCBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiAqL1xuXHRmdW5jdGlvbiBlbmFibGVDbGVhckNvbXBsZXRlZEl0ZW1zKCkge1xuXHRcdFZpZXcuYmluZENsZWFyQ29tcGxldGVkSXRlbXMoY2xlYXJBbGxDb21wbGV0ZWRJdGVtcyk7XG5cdH1cblxuXHQvKiBDYWxsIFZpZXcgdG8gYmluZCBldmVudCBsaXN0ZW5lcnMgZm9yIHRvZ2dsZUFsbCBidXR0b25zLlxuXHQgKiBNYWluIGxvZ2ljIHRvZ2dsZUFsbCgpIGZ1bmN0aW9uIGlzIGZlZCBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLiAqL1xuXHRmdW5jdGlvbiBlbmFibGVUb2dnbGVBbGwoKSB7XG5cdFx0Vmlldy5iaW5kVG9nZ2xlQWxsKHRvZ2dsZUFsbCk7XG5cdH1cblxuXHQvKiBGb3JtYXQgdGhlIGRhdGUuICovXG5cdGNvbnN0IE15RGF0ZSA9ICgoKSA9PiB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHtcblx0XHRcdHdlZWtkYXk6ICdsb25nJyxcblx0XHRcdHllYXI6ICdudW1lcmljJyxcblx0XHRcdG1vbnRoOiAnbG9uZycsXG5cdFx0XHRkYXk6ICdudW1lcmljJyxcblx0XHR9O1xuXG5cdFx0LyogQ3V0IHRoZSBkYXRlIHN0cmluZyBpbnRvIHdlZWtkYXksIGRheSwgbW9udGggYW5kIHllYXIuIFZpZXcgbW9kdWxlIGtub3dzIGhvdyB0byBzaG93IHRoZW0uICovXG5cdFx0ZnVuY3Rpb24gZ2V0VG9kYXkoKSB7XG5cdFx0XHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRjb25zdCB0b2RheVN0ciA9IHRvZGF5LnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKTsgLy8gU2F0dXJkYXksIFNlcHRlbWJlciAxNywgMjAxNlxuXHRcdFx0Y29uc3QgW3dlZWtkYXksIG1vbnRoRGF5LCB5ZWFyXSA9IHRvZGF5U3RyLnNwbGl0KCcsICcpO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxuXHRcdFx0bGV0IFttb250aCwgZGF5XSA9IG1vbnRoRGF5LnNwbGl0KCcgJyk7XG5cdFx0XHRtb250aCA9IG1vbnRoLnNsaWNlKDAsIDMpLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR3ZWVrZGF5LFxuXHRcdFx0XHRkYXksXG5cdFx0XHRcdG1vbnRoLFxuXHRcdFx0XHR5ZWFyLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0VG9kYXksXG5cdFx0fTtcblx0fSkoKTtcblxuXHRmdW5jdGlvbiBzaG93RGF0ZSgpIHtcblx0XHRWaWV3LnNob3dEYXRlKE15RGF0ZS5nZXRUb2RheSgpKTtcblx0fVxuXG5cdC8qIENhbGwgdmlldyB0byBwcmludCBmb290ZXIuICovXG5cdGZ1bmN0aW9uIHNob3dGb290ZXIoKSB7XG5cdFx0Vmlldy5zaG93Rm9vdGVyKCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHNob3dGb290ZXIsXG5cdFx0c2hvd0RhdGUsXG5cdFx0c2hvd0l0ZW1zLFxuXHRcdHVwZGF0ZUl0ZW1zQ291bnQsXG5cdFx0ZW5hYmxlQWRkSXRlbSxcblx0XHRlbmFibGVDaGFuZ2VSb3V0ZSxcblx0XHRlbmFibGVDbGVhckNvbXBsZXRlZEl0ZW1zLFxuXHRcdGVuYWJsZVRvZ2dsZUFsbCxcblx0fTtcbn0pKCk7XG4iLCIvKlxuICogQSBEQU8oRGF0YSBBY2Nlc3MgT2JqZWN0KSBBUEkuXG4gKiBJdCdzIGF3YXJlIG9mIHRoZSBkYXRhIHN0cnVjdHVyZSBvZiBJdGVtIGFuZCBvdGhlciBvYmplY3RzLlxuICogQW5kIGtub3dzIGhvdyB0byBpbnNlcnQsIHVwZGF0ZSwgZGVsZXRlIGFuZCByZWFkIHRoZXNlIGRhdGEuXG4gKi9cblxuaW1wb3J0IFN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRjb25zdCBpdGVtU3RvcmFnZSA9IFN0b3JlKCdpdGVtcycsIFtdKTtcblx0Y29uc3QgY3VycmVudFJvdXRlU3RvcmFnZSA9IFN0b3JlKCdjdXJyZW50Um91dGUnLCAnYWxsJyk7XG5cblx0LyogQSBmYWN0b3J5IGZ1bmN0aW9uIGNyZWF0aW5nIG5ldyBpdGVtIG9iamVjdC4gKi9cblx0Y29uc3QgSXRlbSA9ICh0ZXh0KSA9PiAoe1xuXHRcdGlkOiBEYXRlLm5vdygpLFxuXHRcdHRpdGxlOiB0ZXh0LFxuXHRcdGNvbXBsZXRlZDogZmFsc2UsXG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBRdWVyeSBpcyBhIFtrZXksIHZhbHVlXSBwYWlyLlxuXHQgKiBPbmNlIGEgcXVlcnkgaXMgY3JlYXRlZCwgaXQncyByZWFkLW9ubHkuXG5cdCAqL1xuXHRjb25zdCBRdWVyeSA9IChpbktleSwgaW5WYWx1ZSkgPT4ge1xuXHRcdGNvbnN0IGtleSA9IGluS2V5O1xuXHRcdGNvbnN0IHZhbHVlID0gaW5WYWx1ZTtcblxuXHRcdGZ1bmN0aW9uIGdldEtleSgpIHtcblx0XHRcdHJldHVybiBrZXk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldEtleSxcblx0XHRcdGdldFZhbHVlLFxuXHRcdH07XG5cdH07XG5cblx0LyogUmV0dXJuIGFsbCBpdGVtcyBtZWV0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHF1ZXJ5LlxuXHQgKiBRdWVyaWVzIGlzIGFuIGFycmF5IG9mIFtrZXksIHZhbHVlXSBwYWlyICovXG5cdGZ1bmN0aW9uIGZpbmRJdGVtcyhxdWVyaWVzKSB7XG5cdFx0cmV0dXJuIGl0ZW1TdG9yYWdlLnJlYWQoKS5maWx0ZXIoKGl0ZW1PYmopID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSB0cnVlO1xuXHRcdFx0cXVlcmllcy5mb3JFYWNoKChxdWVyeSkgPT4ge1xuXHRcdFx0XHRpZiAoaXRlbU9ialtgJHtxdWVyeS5nZXRLZXkoKX1gXSAhPT0gcXVlcnkuZ2V0VmFsdWUoKSkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSk7XG5cdH1cblxuXHQvKiBDcmVhdGUgYSBuZXcgSXRlbSBvYmplY3QgYW5kIHNhdmUgaXQgaW50byBzdG9yYWdlLiAqL1xuXHRmdW5jdGlvbiBhZGRJdGVtKHRleHQpIHtcblx0XHRjb25zdCBpdGVtc0FyciA9IGl0ZW1TdG9yYWdlLnJlYWQoKTtcblx0XHRpdGVtc0Fyci5wdXNoKEl0ZW0odGV4dCkpO1xuXHRcdGl0ZW1TdG9yYWdlLndyaXRlKGl0ZW1zQXJyKTtcblx0fVxuXG5cdC8qIFJlbW92ZSBhbiBpdGVtIGZyb20gc3RvcmFnZS4gKi9cblx0ZnVuY3Rpb24gZGVsZXRlSXRlbShpdGVtSWQpIHtcblx0XHRjb25zdCBpdGVtc0FyciA9IGl0ZW1TdG9yYWdlLnJlYWQoKTtcblx0XHRjb25zdCBpZCA9IHR5cGVvZiBpdGVtSWQgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQoaXRlbUlkLCAxMCkgOiBpdGVtSWQ7XG5cdFx0Y29uc3QgaWR4ID0gaXRlbXNBcnIuZmluZEluZGV4KChlbGUpID0+IGVsZS5pZCA9PT0gaWQpO1xuXHRcdGlmIChpZHggPT09IC0xKSByZXR1cm47XG5cdFx0aXRlbXNBcnIuc3BsaWNlKGlkeCwgMSk7XG5cdFx0aXRlbVN0b3JhZ2Uud3JpdGUoaXRlbXNBcnIpO1xuXHR9XG5cblx0LyogVXBkYXRlIHByb3BlcnRpZXMgb2YgYW4gaXRlbS4gKi9cblx0ZnVuY3Rpb24gdXBkYXRlSXRlbShpdGVtSWQsIHF1ZXJ5KSB7XG5cdFx0Y29uc3QgaXRlbXNBcnIgPSBpdGVtU3RvcmFnZS5yZWFkKCk7XG5cdFx0Y29uc3QgaWQgPSB0eXBlb2YgaXRlbUlkID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KGl0ZW1JZCwgMTApIDogaXRlbUlkO1xuXHRcdGNvbnN0IGlkeCA9IGl0ZW1zQXJyLmZpbmRJbmRleCgoZWxlKSA9PiBlbGUuaWQgPT09IGlkKTtcblx0XHRpZiAoaWR4ID09PSAtMSkgcmV0dXJuO1xuXHRcdGl0ZW1zQXJyW2lkeF1bcXVlcnkuZ2V0S2V5KCldID0gcXVlcnkuZ2V0VmFsdWUoKTtcblx0XHRpdGVtU3RvcmFnZS53cml0ZShpdGVtc0Fycik7XG5cdH1cblxuXHQvKiBUb2dnbGUgaXRlbSBcImNvbXBsZXRlZFwiIHByb3BlcnR5LiAqL1xuXHRmdW5jdGlvbiB0b2dnbGVJdGVtQ29tcGxldGVkKGl0ZW1JZCkge1xuXHRcdGNvbnN0IGl0ZW1zQXJyID0gaXRlbVN0b3JhZ2UucmVhZCgpO1xuXHRcdGNvbnN0IGlkID0gdHlwZW9mIGl0ZW1JZCA9PT0gJ3N0cmluZycgPyBwYXJzZUludChpdGVtSWQsIDEwKSA6IGl0ZW1JZDtcblx0XHRjb25zdCBpZHggPSBpdGVtc0Fyci5maW5kSW5kZXgoKGVsZSkgPT4gZWxlLmlkID09PSBpZCk7XG5cdFx0aWYgKGlkeCA9PT0gLTEpIHJldHVybjtcblx0XHRjb25zdCB0YXJnZXQgPSBpdGVtc0FycltpZHhdO1xuXHRcdHRhcmdldC5jb21wbGV0ZWQgPSAhdGFyZ2V0LmNvbXBsZXRlZDtcblx0XHRpdGVtU3RvcmFnZS53cml0ZShpdGVtc0Fycik7XG5cdH1cblxuXHQvKiBBIHdyYXBwZXIgZnVuY3Rpb24uIFNldCBjdXJyZW50IHJvdXRlIHRvIGRlZmF1bHQgdmFsdWUsIGlmIG5vIHJvdXRlIGV4aXRzLiAqL1xuXHRmdW5jdGlvbiBnZXRDdXJyZW50Um91dGUoKSB7XG5cdFx0cmV0dXJuIGN1cnJlbnRSb3V0ZVN0b3JhZ2UucmVhZCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0Q3VycmVudFJvdXRlKHJvdXRlKSB7XG5cdFx0Y3VycmVudFJvdXRlU3RvcmFnZS53cml0ZShyb3V0ZSk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdFF1ZXJ5LFxuXHRcdGZpbmRJdGVtcyxcblx0XHRhZGRJdGVtLFxuXHRcdGRlbGV0ZUl0ZW0sXG5cdFx0dXBkYXRlSXRlbSxcblx0XHR0b2dnbGVJdGVtQ29tcGxldGVkLFxuXHRcdGdldEN1cnJlbnRSb3V0ZSxcblx0XHRzZXRDdXJyZW50Um91dGUsXG5cdH07XG59KSgpO1xuIiwiLyogc3RvcmUuanMga25vd3Mgb25seSBob3cgdG8gcmVhZC93cml0ZSBzdHJpbmcgZGF0YSBmcm9tL3RvIERvY3VtZW50LmxvY2FsU3RvcmFnZS5cbiAqIEFsbCBpdGVtcyBhcmUgc3RvcmVkIGFzIGEgbG9uZyBzdHJpbmcgaW4gbG9jYWxTdG9yYWdlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGluTmFtZSwgaW5EZWZhdWx0VmFsdWUpID0+IHtcblx0Y29uc3QgbmFtZSA9IGluTmFtZTtcblx0Y29uc3QgZGVmYXVsdFZhbHVlID0gaW5EZWZhdWx0VmFsdWU7XG5cdGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuXHRsZXQgbGl2ZVN0b3JhZ2U7XG5cblx0ZnVuY3Rpb24gcmVhZCgpIHtcblx0XHRyZXR1cm4gbGl2ZVN0b3JhZ2UgfHwgSlNPTi5wYXJzZShzdG9yYWdlLmdldEl0ZW0obmFtZSkpIHx8IGRlZmF1bHRWYWx1ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIHdyaXRlKGRhdGEpIHtcblx0XHRsaXZlU3RvcmFnZSA9IGRhdGE7XG5cdFx0c3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblx0fVxuXG5cdHJldHVybiB7IHJlYWQsIHdyaXRlIH07XG59O1xuIiwiLypcbiAqIEEgaGVscGVyIG9mIHZpZXcuanMuIE9ubHkgdXNlZCB0byBzdG9yZSBIVE1MIHRlbXBsYXRlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0ZnVuY3Rpb24gcmVuZGVySXRlbShpdGVtT2JqKSB7XG5cdFx0Y29uc3Qgc3RyID0gYDxkaXYgY2xhc3M9XCJpdGVtXCIgZGF0YS1pZD0ke2l0ZW1PYmouaWR9PlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidG9nZ2xlIG1hdGVyaWFsLWljb25zXCIgdHlwZT1cImNoZWNrYm94XCI+IFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dFwiPiR7aXRlbU9iai50aXRsZX08L2xhYmVsPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJkZWxldGUgbWF0ZXJpYWwtaWNvbnNcIj5jbGVhcjwvaT5cbiAgICAgICAgPC9kaXY+YDtcblx0XHRyZXR1cm4gc3RyO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVuZGVyRm9vdGVyKGdpdGh1YkltZywgeWVhcikge1xuXHRcdHJldHVybiBgPGRpdiBjbGFzcz1cInRpcFwiPkRvdWJsZSBjbGljayB0byBlZGl0IHRvZG8uPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb3B5cmlnaHRcIj5Db3B5cmlnaHQgTUlUIMKpIGhpcmVtZS5zaGVuQGdtYWlsLmNvbSAmbmJzcDt8Jm5ic3A7IFNvdXJjZSBjb2RlIC0gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9oZWxsb1NoZW4vdG9kb1wiPjxpbWcgY2xhc3M9XCJnaXRodWJcIiBzcmM9XCIke2dpdGh1YkltZ31cIj48L2E+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ5ZWFyXCI+MjAyMS0ke3llYXJ9PC9kaXY+YDtcblx0fVxuXG5cdHJldHVybiB7IHJlbmRlckl0ZW0sIHJlbmRlckZvb3RlciB9O1xufSkoKTtcbiIsIi8qXG4gKiBBbGwgRE9NIG1hbmlwdWxhdGlvbnMgZ28gdG8gdGhpcyBmaWxlLlxuICovXG5pbXBvcnQgVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSc7XG5pbXBvcnQgR2l0aHViSW1nIGZyb20gJy4uL2Fzc2V0cy9pbWcvZ2l0aHViX2JsYWNrLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdGNvbnN0IHRvZG9FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kbycpO1xuXHRjb25zdCB0aXRsZUVsZSA9IHRvZG9FbGUucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG5cdGNvbnN0IGRhdGVFbGUgPSB0aXRsZUVsZS5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuXHRjb25zdCBkYXlFbGUgPSBkYXRlRWxlLnF1ZXJ5U2VsZWN0b3IoJy5kYXknKTtcblx0Y29uc3QgbW9udGhFbGUgPSBkYXRlRWxlLnF1ZXJ5U2VsZWN0b3IoJy5tb250aCcpO1xuXHRjb25zdCB5ZWFyRWxlID0gZGF0ZUVsZS5xdWVyeVNlbGVjdG9yKCcueWVhcicpO1xuXHRjb25zdCB3ZWVrZGF5RWxlID0gdGl0bGVFbGUucXVlcnlTZWxlY3RvcignLndlZWtkYXknKTtcblx0Y29uc3QgdG9nZ2xlQWxsRWxlID0gdG9kb0VsZS5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlQWxsJyk7XG5cdGNvbnN0IGFkZEl0ZW1Db250YWluZXJFbGUgPSB0b2RvRWxlLnF1ZXJ5U2VsZWN0b3IoJy5hZGRJdGVtQ29udGFpbmVyJyk7XG5cdGNvbnN0IGFkZEl0ZW1FbGUgPSBhZGRJdGVtQ29udGFpbmVyRWxlLnF1ZXJ5U2VsZWN0b3IoJy5hZGRJdGVtJyk7XG5cdGNvbnN0IGFkZEl0ZW1MYWJlbEVsZSA9IGFkZEl0ZW1Db250YWluZXJFbGUucXVlcnlTZWxlY3RvcignLmFkZEl0ZW1MYWJlbCcpO1xuXHRjb25zdCBpdGVtc0JvYXJkRWxlID0gdG9kb0VsZS5xdWVyeVNlbGVjdG9yKCcuaXRlbXNCb2FyZCcpO1xuXHRjb25zdCBpdGVtc0NvbnRhaW5lckVsZSA9IGl0ZW1zQm9hcmRFbGUucXVlcnlTZWxlY3RvcignLml0ZW1zQ29udGFpbmVyJyk7XG5cdGNvbnN0IGl0ZW1zRm9vdGVyRWxlID0gaXRlbXNCb2FyZEVsZS5xdWVyeVNlbGVjdG9yKCcuaXRlbXNGb290ZXInKTtcblx0Y29uc3Qgcm91dGVCdG5zID0gaXRlbXNGb290ZXJFbGUucXVlcnlTZWxlY3RvckFsbCgnLnJvdXRlJyk7XG5cdGNvbnN0IGFjdGl2ZUNvdW50RWxlID0gaXRlbXNGb290ZXJFbGUucXVlcnlTZWxlY3RvcignLmFjdGl2ZUl0ZW1zQ291bnQnKTtcblx0Y29uc3QgYWN0aXZlQ291bnROdW1FbGUgPSBhY3RpdmVDb3VudEVsZS5xdWVyeVNlbGVjdG9yKCcuY291bnQnKTtcblx0Y29uc3QgY29tcGxldGVkQ291bnRFbGUgPSBpdGVtc0Zvb3RlckVsZS5xdWVyeVNlbGVjdG9yKFxuXHRcdCcuY29tcGxldGVkSXRlbXNDb3VudCdcblx0KTtcblx0Y29uc3QgY29tcGxldGVkQ291bnROdW1FbGUgPSBjb21wbGV0ZWRDb3VudEVsZS5xdWVyeVNlbGVjdG9yKCcuY291bnQnKTtcblx0Y29uc3QgZm9vdGVyRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpO1xuXG5cdGZ1bmN0aW9uIHNob3dEYXRlKHRvZGF5KSB7XG5cdFx0ZGF5RWxlLnRleHRDb250ZW50ID0gdG9kYXkuZGF5O1xuXHRcdG1vbnRoRWxlLnRleHRDb250ZW50ID0gdG9kYXkubW9udGg7XG5cdFx0eWVhckVsZS50ZXh0Q29udGVudCA9IHRvZGF5LnllYXI7XG5cdFx0d2Vla2RheUVsZS50ZXh0Q29udGVudCA9IHRvZGF5LndlZWtkYXk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbGVhckFkZEl0ZW1FbGUoKSB7XG5cdFx0YWRkSXRlbUVsZS52YWx1ZSA9ICcnO1xuXHR9XG5cblx0ZnVuY3Rpb24gaGlkZUFkZEl0ZW1MYWJlbCgpIHtcblx0XHRpZiAoYWRkSXRlbUVsZS52YWx1ZSA9PT0gJycpIHtcblx0XHRcdGFkZEl0ZW1MYWJlbEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFkZEl0ZW1MYWJlbEVsZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gbWFya0N1cnJlbnRSb3V0ZShyb3V0ZSkge1xuXHRcdHJvdXRlQnRucy5mb3JFYWNoKChidG4pID0+IHtcblx0XHRcdGlmIChidG4uZGF0YXNldC5yb3V0ZSA9PT0gcm91dGUpIHtcblx0XHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZUl0ZW1zQ291bnQoY291bnQpIHtcblx0XHRhY3RpdmVDb3VudE51bUVsZS50ZXh0Q29udGVudCA9IGNvdW50O1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlQ29tcGxldGVkSXRlbXNDb3VudChjb3VudCkge1xuXHRcdGNvbXBsZXRlZENvdW50TnVtRWxlLnRleHRDb250ZW50ID0gY291bnQ7XG5cdH1cblxuXHRmdW5jdGlvbiBzaG93Q29tcGxldGVkSXRlbXNDb3VudCgpIHtcblx0XHRjb21wbGV0ZWRDb3VudEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBoaWRlQ29tcGxldGVkSXRlbXNDb3VudCgpIHtcblx0XHRjb21wbGV0ZWRDb3VudEVsZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBzaG93SXRlbXNCb2FyZCgpIHtcblx0XHRpdGVtc0JvYXJkRWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXHRcdGFkZEl0ZW1Db250YWluZXJFbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWxvbmUnKTtcblx0XHRhZGRJdGVtRWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2Fsb25lJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBoaWRlSXRlbXNCb2FyZCgpIHtcblx0XHRpdGVtc0JvYXJkRWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdGFkZEl0ZW1Db250YWluZXJFbGUuY2xhc3NMaXN0LmFkZCgnYWxvbmUnKTtcblx0XHRhZGRJdGVtRWxlLmNsYXNzTGlzdC5hZGQoJ2Fsb25lJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBoaWRlVG9nZ2xlQWxsKCkge1xuXHRcdHRvZ2dsZUFsbEVsZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cdH1cblxuXHRmdW5jdGlvbiB0b2dnbGVBbGxDaGVja2VkKCkge1xuXHRcdHRvZ2dsZUFsbEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0dG9nZ2xlQWxsRWxlLmNoZWNrZWQgPSB0cnVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG9nZ2xlQWxsTm90Q2hlY2tlZCgpIHtcblx0XHR0b2dnbGVBbGxFbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXHRcdHRvZ2dsZUFsbEVsZS5jaGVja2VkID0gZmFsc2U7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVFbGVtZW50KHRhcmdldCkge1xuXHRcdHRhcmdldC5yZW1vdmUoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNsZWFySXRlbXMoKSB7XG5cdFx0aXRlbXNDb250YWluZXJFbGUuaW5uZXJIVE1MID0gJyc7XG5cdH1cblxuXHRmdW5jdGlvbiBzaG93SXRlbShpdGVtT2JqLCBjYWxsYmFjaykge1xuXHRcdGl0ZW1zQ29udGFpbmVyRWxlLmluc2VydEFkamFjZW50SFRNTChcblx0XHRcdCdiZWZvcmVlbmQnLFxuXHRcdFx0VGVtcGxhdGUucmVuZGVySXRlbShpdGVtT2JqKVxuXHRcdCk7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gaXRlbXNDb250YWluZXJFbGUucXVlcnlTZWxlY3Rvcihcblx0XHRcdGAuaXRlbVtkYXRhLWlkPVwiJHtpdGVtT2JqLmlkfVwiXWBcblx0XHQpO1xuXHRcdGlmIChpdGVtT2JqLmNvbXBsZXRlZCkge1xuXHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuXHRcdFx0Y29uc3QgY2hlY2tib3ggPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnRvZ2dsZScpO1xuXHRcdFx0Y2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG5cdFx0fVxuXHRcdGNhbGxiYWNrKHRhcmdldCk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kQWRkSXRlbShjYWxsYmFjaykge1xuXHRcdGFkZEl0ZW1FbGUuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdCdjaGFuZ2UnLFxuXHRcdFx0KCkgPT4gY2FsbGJhY2soYWRkSXRlbUVsZS52YWx1ZSksXG5cdFx0XHRmYWxzZVxuXHRcdCk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kQWRkSXRlbUxhYmVsKCkge1xuXHRcdGFkZEl0ZW1FbGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBoaWRlQWRkSXRlbUxhYmVsKCkpO1xuXHRcdGFkZEl0ZW1FbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gaGlkZUFkZEl0ZW1MYWJlbCgpKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRUb2dnbGVDb21wbGV0ZWQodGFyZ2V0LCBjYWxsYmFjaykge1xuXHRcdGNvbnN0IGNoZWNrYm94ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUnKTtcblx0XHRjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHR0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG5cdFx0XHRjYWxsYmFjayh0YXJnZXQuZGF0YXNldC5pZCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kRGVsZXRlSXRlbSh0YXJnZXQsIGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgYnRuID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0YXJnZXQucmVtb3ZlKCk7XG5cdFx0XHRjYWxsYmFjayh0YXJnZXQuZGF0YXNldC5pZCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kRWRpdEl0ZW0odGFyZ2V0LCBjYWxsYmFjaykge1xuXHRcdGNvbnN0IGxhYmVsID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0Jyk7XG5cdFx0bGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRsYWJlbC5jbGFzc0xpc3QuYWRkKCdlZGl0dGluZycpO1xuXHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcblx0XHRcdGxhYmVsLmZvY3VzKCk7XG5cdFx0fSk7XG5cdFx0bGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcblx0XHRcdGxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXR0aW5nJyk7XG5cdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGZhbHNlKTtcblx0XHRcdGNhbGxiYWNrKHRhcmdldC5kYXRhc2V0LmlkLCBsYWJlbC50ZXh0Q29udGVudCwgKCkgPT4ge1xuXHRcdFx0XHRyZW1vdmVFbGVtZW50KHRhcmdldCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChlLmtleSA9PT0gJ0VudGVyJykgbGFiZWwuYmx1cigpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gYmluZENoYW5nZVJvdXRlKGVhY2hCdG5DYWxsYmFjaywgZW5kaW5nQ2FsbGJhY2spIHtcblx0XHRyb3V0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdGVhY2hCdG5DYWxsYmFjayhidG4uZGF0YXNldC5yb3V0ZSk7XG5cdFx0XHRcdHJvdXRlQnRucy5mb3JFYWNoKChlbGUpID0+IHtcblx0XHRcdFx0XHRpZiAoZWxlLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudCcpKSB7XG5cdFx0XHRcdFx0XHRlbGUuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRlbmRpbmdDYWxsYmFjaygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYmluZENsZWFyQ29tcGxldGVkSXRlbXMoY2FsbGJhY2spIHtcblx0XHRjb21wbGV0ZWRDb3VudEVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhbGxiYWNrKCkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYmluZFRvZ2dsZUFsbChjYWxsYmFjaykge1xuXHRcdHRvZ2dsZUFsbEVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhbGxiYWNrKCkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2hvd0Zvb3RlcigpIHtcblx0XHRjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXHRcdGZvb3RlckVsZS5pbnNlcnRBZGphY2VudEhUTUwoXG5cdFx0XHQnYWZ0ZXJiZWdpbicsXG5cdFx0XHRUZW1wbGF0ZS5yZW5kZXJGb290ZXIoR2l0aHViSW1nLCB5ZWFyKVxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHNob3dEYXRlLFxuXHRcdGNsZWFyQWRkSXRlbUVsZSxcblx0XHRiaW5kQWRkSXRlbSxcblx0XHRiaW5kQWRkSXRlbUxhYmVsLFxuXHRcdGJpbmRUb2dnbGVDb21wbGV0ZWQsXG5cdFx0YmluZERlbGV0ZUl0ZW0sXG5cdFx0YmluZEVkaXRJdGVtLFxuXHRcdGJpbmRDaGFuZ2VSb3V0ZSxcblx0XHRtYXJrQ3VycmVudFJvdXRlLFxuXHRcdGJpbmRDbGVhckNvbXBsZXRlZEl0ZW1zLFxuXHRcdGJpbmRUb2dnbGVBbGwsXG5cdFx0dXBkYXRlQWN0aXZlSXRlbXNDb3VudCxcblx0XHR1cGRhdGVDb21wbGV0ZWRJdGVtc0NvdW50LFxuXHRcdHNob3dDb21wbGV0ZWRJdGVtc0NvdW50LFxuXHRcdGhpZGVDb21wbGV0ZWRJdGVtc0NvdW50LFxuXHRcdGhpZGVJdGVtc0JvYXJkLFxuXHRcdHNob3dJdGVtc0JvYXJkLFxuXHRcdGhpZGVUb2dnbGVBbGwsXG5cdFx0dG9nZ2xlQWxsQ2hlY2tlZCxcblx0XHR0b2dnbGVBbGxOb3RDaGVja2VkLFxuXHRcdHJlbW92ZUVsZW1lbnQsXG5cdFx0Y2xlYXJJdGVtcyxcblx0XHRzaG93SXRlbSxcblx0XHRzaG93Rm9vdGVyLFxuXHR9O1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uL1wiOyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGNzcyBmcm9tICcuLi9jc3MvaW5kZXguY3NzJztcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5cbigoKSA9PiB7XG5cdENvbnRyb2xsZXIuZW5hYmxlQWRkSXRlbSgpO1xuXHRDb250cm9sbGVyLmVuYWJsZUNoYW5nZVJvdXRlKCk7XG5cdENvbnRyb2xsZXIuZW5hYmxlQ2xlYXJDb21wbGV0ZWRJdGVtcygpO1xuXHRDb250cm9sbGVyLmVuYWJsZVRvZ2dsZUFsbCgpO1xuXHRDb250cm9sbGVyLnNob3dEYXRlKCk7XG5cdENvbnRyb2xsZXIuc2hvd0l0ZW1zKCk7XG5cdENvbnRyb2xsZXIudXBkYXRlSXRlbXNDb3VudCgpO1xuXHRDb250cm9sbGVyLnNob3dGb290ZXIoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=