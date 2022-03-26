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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\t--black: #24292d;\n\t--black-dimmer: #2b3137;\n\t--gray: #58606a;\n\t--light-gray: #949da7;\n\t--lighter-gray: #b4bdc8;\n\t--border-gray: #e7e9ea;\n\t--back-gray: #f6f8fa;\n\t--white: #ffffff;\n\t--red: #db2c00;\n\t--green: #2da44e;\n\t--blue: #0d74e7;\n\t--blue2: #0969da;\n\t--purple: #6e5494;\n}\n\nbody {\n\tmin-height: 100vh;\n\tbackground-color: var(--back-gray);\n}\n\n.logo {\n\theight: 6rem;\n\tfont-size: 2.5rem;\n\tfont-weight: 700;\n\tfont-family: 'Poppins', sans-serif;\n\tcolor: var(--black);\n\tdisplay: grid;\n\talign-items: end;\n\tjustify-items: center;\n}\n\n.main {\n\twidth: 100%;\n\tmargin: 2rem 0;\n\tdisplay: grid;\n\tjustify-content: center;\n}\n\n.todo {\n\twidth: 36rem;\n\tborder-radius: 0.5rem;\n\tbox-shadow: 1px 1px 4px var(--border-gray);\n}\n\n.todo > .title {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-weight: 500;\n\twidth: 100%;\n\theight: 7rem;\n\tpadding: 2rem 2.5rem;\n\tborder: 1px solid var(--border-gray);\n\tborder-bottom: 0;\n\tborder-top-left-radius: 0.5rem;\n\tborder-top-right-radius: 0.5rem;\n\tbackground-color: var(--white);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n\n.todo .date {\n\twidth: 7rem;\n\theight: 3rem;\n\tcolor: var(--gray);\n\tdisplay: grid;\n\tgrid-template-columns: 3rem 3rem;\n\tgrid-template-rows: 1.5rem 1.5rem;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.todo .day {\n\tfont-size: 3rem;\n\tgrid-row: 1 / 3;\n\tgrid-column: 1 / 2;\n}\n\n.todo .month {\n\tjustify-self: start;\n\talign-self: end;\n\tfont-size: 1rem;\n\tgrid-row: 1 / 2;\n\tgrid-column: 2 / 3;\n\tpadding-left: 1rem;\n}\n\n.todo .year {\n\tjustify-self: start;\n\talign-self: start;\n\tfont-size: 1rem;\n\tgrid-row: 2 / 3;\n\tgrid-column: 2 / 3;\n\tpadding-left: 1rem;\n}\n\n.todo .weekday {\n\tfont-size: 1.5rem;\n\tfont-weight: 100;\n}\n\n.todo > .addItemContainer {\n\twidth: 100%;\n\theight: 4rem;\n\tfont-size: 1.5rem;\n\tborder: 1px solid var(--border-gray);\n\tbackground-color: var(--white);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-template-columns: 3rem 1fr;\n\talign-items: center;\n}\n\n.todo > .addItemContainer.alone {\n\tborder-bottom-left-radius: 0.5rem;\n\tborder-bottom-right-radius: 0.5rem;\n}\n\n.todo .toggleAll {\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n}\n\n.todo .toggleAll::after {\n\tfont-size: 1.5rem;\n\tmargin: 0 0.75rem;\n\tcontent: 'radio_button_unchecked';\n\tcolor: var(--border-gray);\n}\n\n.todo .toggleAll:checked::after {\n\tcontent: 'check_circle';\n\tcolor: var(--green);\n\topacity: 0.6;\n}\n\n.todo .toggleAll.hide {\n\topacity: 0;\n}\n\n.todo .addItemForm {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-weight: 100;\n\theight: 100%;\n\twidth: 100%;\n\tposition: relative;\n}\n\n.todo .addItemLabel {\n\tposition: absolute;\n\tleft: 1px;\n\ttop: 1.2rem;\n\tcolor: var(--lighter-gray);\n\tuser-select: none;\n}\n\n.todo .addItemLabel.hide {\n\tdisplay: none;\n}\n\n.todo .addItem {\n\theight: 100%;\n\twidth: 100%;\n\tborder: 0px;\n\tborder-top-right-radius: 0.5rem;\n\tfont-size: 1.5rem;\n\toutline: none;\n\tcolor: var(--black);\n}\n\n.todo .addItem.alone {\n\tborder-bottom-right-radius: 0.5rem;\n}\n\n.todo > .itemsBoard {\n\tdisplay: block;\n}\n\n.todo > .itemsBoard.hidden {\n\tdisplay: none;\n}\n\n.todo .item {\n\twidth: 100%;\n\tmargin: -1px 0;\n\theight: 4rem;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 1.5rem;\n\tborder: 1px solid var(--border-gray);\n\tbackground-color: var(--white);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-template-columns: 3rem 1fr 3rem;\n\talign-items: center;\n}\n\n.todo .item > .toggle {\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n}\n\n.todo .item > .toggle::after {\n\tcontent: 'radio_button_unchecked';\n\tmargin: 0 0.75rem;\n\tcolor: var(--border-gray);\n\topacity: 0.6;\n}\n\n.todo .item > .toggle:checked::after {\n\tcontent: 'check_circle';\n\tcolor: var(--green);\n}\n\n.todo .item > .text {\n\theight: 100%;\n\tcolor: var(--gray);\n\tdisplay: grid;\n\talign-items: center;\n}\n\n.todo .item.completed > .text {\n\topacity: 0.6;\n\ttext-decoration: line-through;\n}\n\n.todo .item > .text.editting {\n\toutline-color: var(--border-gray);\n\tbackground-color: var(--back-gray);\n}\n\n.todo .item > .delete {\n\topacity: 0;\n\tjustify-self: center;\n\tcursor: pointer;\n\tuser-select: none;\n\tmargin-right: 1rem;\n}\n\n.todo .item:hover > .delete {\n\topacity: 1;\n\tcolor: var(--red);\n}\n\n.todo .itemsFooter {\n\twidth: 100%;\n\theight: 4rem;\n\tfont-size: 0.75rem;\n\tfont-family: 'Poppins', sans-serif;\n\tborder: 1px solid var(--border-gray);\n\tborder-bottom-left-radius: 0.5rem;\n\tborder-bottom-right-radius: 0.5rem;\n\tbackground-color: var(--white);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.todo .itemsFooter > .activeItemsCount,\n.todo .itemsFooter > .completedItemsCount {\n\theight: 2rem;\n\tmargin: 0 1rem;\n\tcolor: var(--gray);\n\tuser-select: none;\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-items: center;\n\tjustify-content: center;\n}\n\n.todo .itemsFooter > .activeItemsCount {\n\twidth: 4.5rem;\n}\n\n.todo .itemsFooter > .completedItemsCount {\n\twidth: 11rem;\n\tborder-radius: 0.25rem;\n\tcursor: pointer;\n\tborder: 1px solid var(--border-gray);\n\tbackground-color: var(--back-gray);\n}\n\n.todo .itemsFooter > .completedItemsCount.hide {\n\topacity: 0;\n\tcursor: auto;\n}\n\n.todo .itemsFooter > .routes {\n\theight: 2rem;\n\twidth: 14rem;\n\tmargin: 0 1rem;\n\tuser-select: none;\n\tcursor: pointer;\n\tdisplay: grid;\n\tgrid-template-columns: 3rem 4rem 6rem;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 0.5rem;\n}\n\n.todo .itemsFooter .route {\n\tpadding: 0.25rem 0.75rem;\n\tcolor: var(--gray);\n\tborder-radius: 0.25rem;\n\tdisplay: grid;\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.todo .itemsFooter .route:hover {\n\tborder: 1px solid var(--border-gray);\n}\n\n.todo .itemsFooter .route.current {\n\tbackground-color: var(--back-gray);\n\tborder: 1px solid var(--border-gray);\n}\n\n.footer {\n\theight: 4.5rem;\n\twidth: 100%;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 0.75rem;\n\tcolor: var(--lighter-gray);\n\tdisplay: grid;\n\tgrid-template-rows: repeat(3, 1.5rem);\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.footer .tip,\n.footer .copyright,\n.footer .year {\n\theight: 1.5rem;\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tgap: 0.25rem;\n}\n\n.footer a {\n\twidth: 1rem;\n\theight: 1rem;\n}\n\n.footer .github {\n\twidth: 100%;\n\theight: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAIA;CACC,gBAAgB;CAChB,uBAAuB;CACvB,eAAe;CACf,qBAAqB;CACrB,uBAAuB;CACvB,sBAAsB;CACtB,oBAAoB;CACpB,gBAAgB;CAChB,cAAc;CACd,gBAAgB;CAChB,eAAe;CACf,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,kCAAkC;AACnC;;AAEA;CACC,YAAY;CACZ,iBAAiB;CACjB,gBAAgB;CAChB,kCAAkC;CAClC,mBAAmB;CACnB,aAAa;CACb,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;CACC,WAAW;CACX,cAAc;CACd,aAAa;CACb,uBAAuB;AACxB;;AAEA;CACC,YAAY;CACZ,qBAAqB;CACrB,0CAA0C;AAC3C;;AAEA;CACC,iCAAiC;CACjC,gBAAgB;CAChB,WAAW;CACX,YAAY;CACZ,oBAAoB;CACpB,oCAAoC;CACpC,gBAAgB;CAChB,8BAA8B;CAC9B,+BAA+B;CAC/B,8BAA8B;CAC9B,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,8BAA8B;AAC/B;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,kBAAkB;CAClB,aAAa;CACb,gCAAgC;CAChC,iCAAiC;CACjC,sBAAsB;CACtB,mBAAmB;CACnB,uBAAuB;AACxB;;AAEA;CACC,eAAe;CACf,eAAe;CACf,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;CACnB,eAAe;CACf,eAAe;CACf,eAAe;CACf,kBAAkB;CAClB,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;CACnB,iBAAiB;CACjB,eAAe;CACf,eAAe;CACf,kBAAkB;CAClB,kBAAkB;AACnB;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;AACjB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,iBAAiB;CACjB,oCAAoC;CACpC,8BAA8B;CAC9B,aAAa;CACb,sBAAsB;CACtB,+BAA+B;CAC/B,mBAAmB;AACpB;;AAEA;CACC,iCAAiC;CACjC,kCAAkC;AACnC;;AAEA;CACC,wBAAwB;CACxB,qBAAqB;CACrB,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;CACjB,iBAAiB;CACjB,iCAAiC;CACjC,yBAAyB;AAC1B;;AAEA;CACC,uBAAuB;CACvB,mBAAmB;CACnB,YAAY;AACb;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,iCAAiC;CACjC,gBAAgB;CAChB,YAAY;CACZ,WAAW;CACX,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,SAAS;CACT,WAAW;CACX,0BAA0B;CAC1B,iBAAiB;AAClB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,WAAW;CACX,+BAA+B;CAC/B,iBAAiB;CACjB,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,kCAAkC;AACnC;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,WAAW;CACX,cAAc;CACd,YAAY;CACZ,iCAAiC;CACjC,iBAAiB;CACjB,oCAAoC;CACpC,8BAA8B;CAC9B,aAAa;CACb,sBAAsB;CACtB,oCAAoC;CACpC,mBAAmB;AACpB;;AAEA;CACC,wBAAwB;CACxB,qBAAqB;CACrB,gBAAgB;AACjB;;AAEA;CACC,iCAAiC;CACjC,iBAAiB;CACjB,yBAAyB;CACzB,YAAY;AACb;;AAEA;CACC,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,kBAAkB;CAClB,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,6BAA6B;AAC9B;;AAEA;CACC,iCAAiC;CACjC,kCAAkC;AACnC;;AAEA;CACC,UAAU;CACV,oBAAoB;CACpB,eAAe;CACf,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;CACC,UAAU;CACV,iBAAiB;AAClB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,kBAAkB;CAClB,kCAAkC;CAClC,oCAAoC;CACpC,iCAAiC;CACjC,kCAAkC;CAClC,8BAA8B;CAC9B,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,qBAAqB;AACtB;;AAEA;;CAEC,YAAY;CACZ,cAAc;CACd,kBAAkB;CAClB,iBAAiB;CACjB,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,qBAAqB;CACrB,uBAAuB;AACxB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,sBAAsB;CACtB,eAAe;CACf,oCAAoC;CACpC,kCAAkC;AACnC;;AAEA;CACC,UAAU;CACV,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,cAAc;CACd,iBAAiB;CACjB,eAAe;CACf,aAAa;CACb,qCAAqC;CACrC,sBAAsB;CACtB,mBAAmB;CACnB,uBAAuB;CACvB,WAAW;AACZ;;AAEA;CACC,wBAAwB;CACxB,kBAAkB;CAClB,sBAAsB;CACtB,aAAa;CACb,mBAAmB;CACnB,qBAAqB;AACtB;;AAEA;CACC,oCAAoC;AACrC;;AAEA;CACC,kCAAkC;CAClC,oCAAoC;AACrC;;AAEA;CACC,cAAc;CACd,WAAW;CACX,iCAAiC;CACjC,kBAAkB;CAClB,0BAA0B;CAC1B,aAAa;CACb,qCAAqC;CACrC,mBAAmB;CACnB,qBAAqB;AACtB;;AAEA;;;CAGC,cAAc;CACd,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,YAAY;AACb;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA;CACC,WAAW;CACX,YAAY;AACb","sourcesContent":["@import url('./norm.css');\n@import url('https://fonts.googleapis.com/icon?family=Material+Icons');\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&family=Roboto:wght@100;400;500;700&display=swap');\n\n:root {\n\t--black: #24292d;\n\t--black-dimmer: #2b3137;\n\t--gray: #58606a;\n\t--light-gray: #949da7;\n\t--lighter-gray: #b4bdc8;\n\t--border-gray: #e7e9ea;\n\t--back-gray: #f6f8fa;\n\t--white: #ffffff;\n\t--red: #db2c00;\n\t--green: #2da44e;\n\t--blue: #0d74e7;\n\t--blue2: #0969da;\n\t--purple: #6e5494;\n}\n\nbody {\n\tmin-height: 100vh;\n\tbackground-color: var(--back-gray);\n}\n\n.logo {\n\theight: 6rem;\n\tfont-size: 2.5rem;\n\tfont-weight: 700;\n\tfont-family: 'Poppins', sans-serif;\n\tcolor: var(--black);\n\tdisplay: grid;\n\talign-items: end;\n\tjustify-items: center;\n}\n\n.main {\n\twidth: 100%;\n\tmargin: 2rem 0;\n\tdisplay: grid;\n\tjustify-content: center;\n}\n\n.todo {\n\twidth: 36rem;\n\tborder-radius: 0.5rem;\n\tbox-shadow: 1px 1px 4px var(--border-gray);\n}\n\n.todo > .title {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-weight: 500;\n\twidth: 100%;\n\theight: 7rem;\n\tpadding: 2rem 2.5rem;\n\tborder: 1px solid var(--border-gray);\n\tborder-bottom: 0;\n\tborder-top-left-radius: 0.5rem;\n\tborder-top-right-radius: 0.5rem;\n\tbackground-color: var(--white);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n\n.todo .date {\n\twidth: 7rem;\n\theight: 3rem;\n\tcolor: var(--gray);\n\tdisplay: grid;\n\tgrid-template-columns: 3rem 3rem;\n\tgrid-template-rows: 1.5rem 1.5rem;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.todo .day {\n\tfont-size: 3rem;\n\tgrid-row: 1 / 3;\n\tgrid-column: 1 / 2;\n}\n\n.todo .month {\n\tjustify-self: start;\n\talign-self: end;\n\tfont-size: 1rem;\n\tgrid-row: 1 / 2;\n\tgrid-column: 2 / 3;\n\tpadding-left: 1rem;\n}\n\n.todo .year {\n\tjustify-self: start;\n\talign-self: start;\n\tfont-size: 1rem;\n\tgrid-row: 2 / 3;\n\tgrid-column: 2 / 3;\n\tpadding-left: 1rem;\n}\n\n.todo .weekday {\n\tfont-size: 1.5rem;\n\tfont-weight: 100;\n}\n\n.todo > .addItemContainer {\n\twidth: 100%;\n\theight: 4rem;\n\tfont-size: 1.5rem;\n\tborder: 1px solid var(--border-gray);\n\tbackground-color: var(--white);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-template-columns: 3rem 1fr;\n\talign-items: center;\n}\n\n.todo > .addItemContainer.alone {\n\tborder-bottom-left-radius: 0.5rem;\n\tborder-bottom-right-radius: 0.5rem;\n}\n\n.todo .toggleAll {\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n}\n\n.todo .toggleAll::after {\n\tfont-size: 1.5rem;\n\tmargin: 0 0.75rem;\n\tcontent: 'radio_button_unchecked';\n\tcolor: var(--border-gray);\n}\n\n.todo .toggleAll:checked::after {\n\tcontent: 'check_circle';\n\tcolor: var(--green);\n\topacity: 0.6;\n}\n\n.todo .toggleAll.hide {\n\topacity: 0;\n}\n\n.todo .addItemForm {\n\tfont-family: 'Roboto', sans-serif;\n\tfont-weight: 100;\n\theight: 100%;\n\twidth: 100%;\n\tposition: relative;\n}\n\n.todo .addItemLabel {\n\tposition: absolute;\n\tleft: 1px;\n\ttop: 1.2rem;\n\tcolor: var(--lighter-gray);\n\tuser-select: none;\n}\n\n.todo .addItemLabel.hide {\n\tdisplay: none;\n}\n\n.todo .addItem {\n\theight: 100%;\n\twidth: 100%;\n\tborder: 0px;\n\tborder-top-right-radius: 0.5rem;\n\tfont-size: 1.5rem;\n\toutline: none;\n\tcolor: var(--black);\n}\n\n.todo .addItem.alone {\n\tborder-bottom-right-radius: 0.5rem;\n}\n\n.todo > .itemsBoard {\n\tdisplay: block;\n}\n\n.todo > .itemsBoard.hidden {\n\tdisplay: none;\n}\n\n.todo .item {\n\twidth: 100%;\n\tmargin: -1px 0;\n\theight: 4rem;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 1.5rem;\n\tborder: 1px solid var(--border-gray);\n\tbackground-color: var(--white);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-template-columns: 3rem 1fr 3rem;\n\talign-items: center;\n}\n\n.todo .item > .toggle {\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n}\n\n.todo .item > .toggle::after {\n\tcontent: 'radio_button_unchecked';\n\tmargin: 0 0.75rem;\n\tcolor: var(--border-gray);\n\topacity: 0.6;\n}\n\n.todo .item > .toggle:checked::after {\n\tcontent: 'check_circle';\n\tcolor: var(--green);\n}\n\n.todo .item > .text {\n\theight: 100%;\n\tcolor: var(--gray);\n\tdisplay: grid;\n\talign-items: center;\n}\n\n.todo .item.completed > .text {\n\topacity: 0.6;\n\ttext-decoration: line-through;\n}\n\n.todo .item > .text.editting {\n\toutline-color: var(--border-gray);\n\tbackground-color: var(--back-gray);\n}\n\n.todo .item > .delete {\n\topacity: 0;\n\tjustify-self: center;\n\tcursor: pointer;\n\tuser-select: none;\n\tmargin-right: 1rem;\n}\n\n.todo .item:hover > .delete {\n\topacity: 1;\n\tcolor: var(--red);\n}\n\n.todo .itemsFooter {\n\twidth: 100%;\n\theight: 4rem;\n\tfont-size: 0.75rem;\n\tfont-family: 'Poppins', sans-serif;\n\tborder: 1px solid var(--border-gray);\n\tborder-bottom-left-radius: 0.5rem;\n\tborder-bottom-right-radius: 0.5rem;\n\tbackground-color: var(--white);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.todo .itemsFooter > .activeItemsCount,\n.todo .itemsFooter > .completedItemsCount {\n\theight: 2rem;\n\tmargin: 0 1rem;\n\tcolor: var(--gray);\n\tuser-select: none;\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-items: center;\n\tjustify-content: center;\n}\n\n.todo .itemsFooter > .activeItemsCount {\n\twidth: 4.5rem;\n}\n\n.todo .itemsFooter > .completedItemsCount {\n\twidth: 11rem;\n\tborder-radius: 0.25rem;\n\tcursor: pointer;\n\tborder: 1px solid var(--border-gray);\n\tbackground-color: var(--back-gray);\n}\n\n.todo .itemsFooter > .completedItemsCount.hide {\n\topacity: 0;\n\tcursor: auto;\n}\n\n.todo .itemsFooter > .routes {\n\theight: 2rem;\n\twidth: 14rem;\n\tmargin: 0 1rem;\n\tuser-select: none;\n\tcursor: pointer;\n\tdisplay: grid;\n\tgrid-template-columns: 3rem 4rem 6rem;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 0.5rem;\n}\n\n.todo .itemsFooter .route {\n\tpadding: 0.25rem 0.75rem;\n\tcolor: var(--gray);\n\tborder-radius: 0.25rem;\n\tdisplay: grid;\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.todo .itemsFooter .route:hover {\n\tborder: 1px solid var(--border-gray);\n}\n\n.todo .itemsFooter .route.current {\n\tbackground-color: var(--back-gray);\n\tborder: 1px solid var(--border-gray);\n}\n\n.footer {\n\theight: 4.5rem;\n\twidth: 100%;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 0.75rem;\n\tcolor: var(--lighter-gray);\n\tdisplay: grid;\n\tgrid-template-rows: repeat(3, 1.5rem);\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.footer .tip,\n.footer .copyright,\n.footer .year {\n\theight: 1.5rem;\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tgap: 0.25rem;\n}\n\n.footer a {\n\twidth: 1rem;\n\theight: 1rem;\n}\n\n.footer .github {\n\twidth: 100%;\n\theight: 100%;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdB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QUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ21DO0FBQ0c7O0FBRXRDO0FBQ0EsQ0FBQyxpRUFBd0I7QUFDekIsQ0FBQyxxRUFBNEI7QUFDN0IsQ0FBQyw2RUFBb0M7QUFDckMsQ0FBQyxtRUFBMEI7QUFDM0IsQ0FBQyw0REFBbUI7QUFDcEIsQ0FBQyw2REFBb0I7QUFDckIsQ0FBQyxvRUFBMkI7QUFDNUIsQ0FBQyw4REFBcUI7QUFDdEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Nzcy9ub3JtLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy9tb2RlbC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL3N0b3JlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy92aWV3LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm0uY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucyk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7NDAwOzcwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG5cXHQtLWJsYWNrOiAjMjQyOTJkO1xcblxcdC0tYmxhY2stZGltbWVyOiAjMmIzMTM3O1xcblxcdC0tZ3JheTogIzU4NjA2YTtcXG5cXHQtLWxpZ2h0LWdyYXk6ICM5NDlkYTc7XFxuXFx0LS1saWdodGVyLWdyYXk6ICNiNGJkYzg7XFxuXFx0LS1ib3JkZXItZ3JheTogI2U3ZTllYTtcXG5cXHQtLWJhY2stZ3JheTogI2Y2ZjhmYTtcXG5cXHQtLXdoaXRlOiAjZmZmZmZmO1xcblxcdC0tcmVkOiAjZGIyYzAwO1xcblxcdC0tZ3JlZW46ICMyZGE0NGU7XFxuXFx0LS1ibHVlOiAjMGQ3NGU3O1xcblxcdC0tYmx1ZTI6ICMwOTY5ZGE7XFxuXFx0LS1wdXJwbGU6ICM2ZTU0OTQ7XFxufVxcblxcbmJvZHkge1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi5sb2dvIHtcXG5cXHRoZWlnaHQ6IDZyZW07XFxuXFx0Zm9udC1zaXplOiAyLjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcblxcdGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRhbGlnbi1pdGVtczogZW5kO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMnJlbSAwO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIHtcXG5cXHR3aWR0aDogMzZyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLnRvZG8gPiAudGl0bGUge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogN3JlbTtcXG5cXHRwYWRkaW5nOiAycmVtIDIuNXJlbTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9kbyAuZGF0ZSB7XFxuXFx0d2lkdGg6IDdyZW07XFxuXFx0aGVpZ2h0OiAzcmVtO1xcblxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAzcmVtO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMS41cmVtIDEuNXJlbTtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5kYXkge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRncmlkLXJvdzogMSAvIDM7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4udG9kbyAubW9udGgge1xcblxcdGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuXFx0YWxpZ24tc2VsZjogZW5kO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRncmlkLXJvdzogMSAvIDI7XFxuXFx0Z3JpZC1jb2x1bW46IDIgLyAzO1xcblxcdHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLnRvZG8gLnllYXIge1xcblxcdGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuXFx0YWxpZ24tc2VsZjogc3RhcnQ7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGdyaWQtcm93OiAyIC8gMztcXG5cXHRncmlkLWNvbHVtbjogMiAvIDM7XFxuXFx0cGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udG9kbyAud2Vla2RheSB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLnRvZG8gPiAuYWRkSXRlbUNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA0cmVtO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAxZnI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gPiAuYWRkSXRlbUNvbnRhaW5lci5hbG9uZSB7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi50b2RvIC50b2dnbGVBbGwge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbDo6YWZ0ZXIge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdG1hcmdpbjogMCAwLjc1cmVtO1xcblxcdGNvbnRlbnQ6ICdyYWRpb19idXR0b25fdW5jaGVja2VkJztcXG5cXHRjb2xvcjogdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsOmNoZWNrZWQ6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnY2hlY2tfY2lyY2xlJztcXG5cXHRjb2xvcjogdmFyKC0tZ3JlZW4pO1xcblxcdG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbC5oaWRlIHtcXG5cXHRvcGFjaXR5OiAwO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbUZvcm0ge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHRmb250LXdlaWdodDogMTAwO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtTGFiZWwge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAxcHg7XFxuXFx0dG9wOiAxLjJyZW07XFxuXFx0Y29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtTGFiZWwuaGlkZSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW0ge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRib3JkZXI6IDBweDtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Y29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW0uYWxvbmUge1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi50b2RvID4gLml0ZW1zQm9hcmQge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udG9kbyA+IC5pdGVtc0JvYXJkLmhpZGRlbiB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLml0ZW0ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogLTFweCAwO1xcblxcdGhlaWdodDogNHJlbTtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDFmciAzcmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50b2dnbGU6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAncmFkaW9fYnV0dG9uX3VuY2hlY2tlZCc7XFxuXFx0bWFyZ2luOiAwIDAuNzVyZW07XFxuXFx0Y29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG5cXHRvcGFjaXR5OiAwLjY7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZTpjaGVja2VkOjphZnRlciB7XFxuXFx0Y29udGVudDogJ2NoZWNrX2NpcmNsZSc7XFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudGV4dCB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtLmNvbXBsZXRlZCA+IC50ZXh0IHtcXG5cXHRvcGFjaXR5OiAwLjY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRleHQuZWRpdHRpbmcge1xcblxcdG91dGxpbmUtY29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC5kZWxldGUge1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW06aG92ZXIgPiAuZGVsZXRlIHtcXG5cXHRvcGFjaXR5OiAxO1xcblxcdGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogNHJlbTtcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxuXFx0Zm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmFjdGl2ZUl0ZW1zQ291bnQsXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQge1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRtYXJnaW46IDAgMXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuYWN0aXZlSXRlbXNDb3VudCB7XFxuXFx0d2lkdGg6IDQuNXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQge1xcblxcdHdpZHRoOiAxMXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQuaGlkZSB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRjdXJzb3I6IGF1dG87XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5yb3V0ZXMge1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHR3aWR0aDogMTRyZW07XFxuXFx0bWFyZ2luOiAwIDFyZW07XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDRyZW0gNnJlbTtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciAucm91dGUge1xcblxcdHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgLnJvdXRlOmhvdmVyIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciAucm91dGUuY3VycmVudCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi5mb290ZXIge1xcblxcdGhlaWdodDogNC41cmVtO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxuXFx0Y29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxLjVyZW0pO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIC50aXAsXFxuLmZvb3RlciAuY29weXJpZ2h0LFxcbi5mb290ZXIgLnllYXIge1xcblxcdGhlaWdodDogMS41cmVtO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMC4yNXJlbTtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG5cXHR3aWR0aDogMXJlbTtcXG5cXHRoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5mb290ZXIgLmdpdGh1YiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtDQUNDLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQix1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtDQUNwQixnQkFBZ0I7Q0FDaEIsY0FB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QztBQUNyQzs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsaUNBQWlDO0NBQ2pDLGtCQUFrQjtDQUNsQiwwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLHFDQUFxQztDQUNyQyxtQkFBbUI7Q0FDbkIscUJBQXFCO0FBQ3RCOztBQUVBOzs7Q0FHQyxjQUFjO0NBQ2QsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJy4vbm9ybS5jc3MnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucycpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7NDAwOzcwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG5cXHQtLWJsYWNrOiAjMjQyOTJkO1xcblxcdC0tYmxhY2stZGltbWVyOiAjMmIzMTM3O1xcblxcdC0tZ3JheTogIzU4NjA2YTtcXG5cXHQtLWxpZ2h0LWdyYXk6ICM5NDlkYTc7XFxuXFx0LS1saWdodGVyLWdyYXk6ICNiNGJkYzg7XFxuXFx0LS1ib3JkZXItZ3JheTogI2U3ZTllYTtcXG5cXHQtLWJhY2stZ3JheTogI2Y2ZjhmYTtcXG5cXHQtLXdoaXRlOiAjZmZmZmZmO1xcblxcdC0tcmVkOiAjZGIyYzAwO1xcblxcdC0tZ3JlZW46ICMyZGE0NGU7XFxuXFx0LS1ibHVlOiAjMGQ3NGU3O1xcblxcdC0tYmx1ZTI6ICMwOTY5ZGE7XFxuXFx0LS1wdXJwbGU6ICM2ZTU0OTQ7XFxufVxcblxcbmJvZHkge1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stZ3JheSk7XFxufVxcblxcbi5sb2dvIHtcXG5cXHRoZWlnaHQ6IDZyZW07XFxuXFx0Zm9udC1zaXplOiAyLjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcblxcdGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRhbGlnbi1pdGVtczogZW5kO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMnJlbSAwO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIHtcXG5cXHR3aWR0aDogMzZyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHZhcigtLWJvcmRlci1ncmF5KTtcXG59XFxuXFxuLnRvZG8gPiAudGl0bGUge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogN3JlbTtcXG5cXHRwYWRkaW5nOiAycmVtIDIuNXJlbTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9kbyAuZGF0ZSB7XFxuXFx0d2lkdGg6IDdyZW07XFxuXFx0aGVpZ2h0OiAzcmVtO1xcblxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAzcmVtO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMS41cmVtIDEuNXJlbTtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5kYXkge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRncmlkLXJvdzogMSAvIDM7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4udG9kbyAubW9udGgge1xcblxcdGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuXFx0YWxpZ24tc2VsZjogZW5kO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRncmlkLXJvdzogMSAvIDI7XFxuXFx0Z3JpZC1jb2x1bW46IDIgLyAzO1xcblxcdHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLnRvZG8gLnllYXIge1xcblxcdGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuXFx0YWxpZ24tc2VsZjogc3RhcnQ7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGdyaWQtcm93OiAyIC8gMztcXG5cXHRncmlkLWNvbHVtbjogMiAvIDM7XFxuXFx0cGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udG9kbyAud2Vla2RheSB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLnRvZG8gPiAuYWRkSXRlbUNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA0cmVtO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3JlbSAxZnI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gPiAuYWRkSXRlbUNvbnRhaW5lci5hbG9uZSB7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi50b2RvIC50b2dnbGVBbGwge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbDo6YWZ0ZXIge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdG1hcmdpbjogMCAwLjc1cmVtO1xcblxcdGNvbnRlbnQ6ICdyYWRpb19idXR0b25fdW5jaGVja2VkJztcXG5cXHRjb2xvcjogdmFyKC0tYm9yZGVyLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAudG9nZ2xlQWxsOmNoZWNrZWQ6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnY2hlY2tfY2lyY2xlJztcXG5cXHRjb2xvcjogdmFyKC0tZ3JlZW4pO1xcblxcdG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnRvZG8gLnRvZ2dsZUFsbC5oaWRlIHtcXG5cXHRvcGFjaXR5OiAwO1xcbn1cXG5cXG4udG9kbyAuYWRkSXRlbUZvcm0ge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHRmb250LXdlaWdodDogMTAwO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtTGFiZWwge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAxcHg7XFxuXFx0dG9wOiAxLjJyZW07XFxuXFx0Y29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50b2RvIC5hZGRJdGVtTGFiZWwuaGlkZSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW0ge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRib3JkZXI6IDBweDtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Y29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLnRvZG8gLmFkZEl0ZW0uYWxvbmUge1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi50b2RvID4gLml0ZW1zQm9hcmQge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udG9kbyA+IC5pdGVtc0JvYXJkLmhpZGRlbiB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLml0ZW0ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogLTFweCAwO1xcblxcdGhlaWdodDogNHJlbTtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDFmciAzcmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50b2dnbGU6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAncmFkaW9fYnV0dG9uX3VuY2hlY2tlZCc7XFxuXFx0bWFyZ2luOiAwIDAuNzVyZW07XFxuXFx0Y29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG5cXHRvcGFjaXR5OiAwLjY7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZTpjaGVja2VkOjphZnRlciB7XFxuXFx0Y29udGVudDogJ2NoZWNrX2NpcmNsZSc7XFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudGV4dCB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtLmNvbXBsZXRlZCA+IC50ZXh0IHtcXG5cXHRvcGFjaXR5OiAwLjY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRleHQuZWRpdHRpbmcge1xcblxcdG91dGxpbmUtY29sb3I6IHZhcigtLWJvcmRlci1ncmF5KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC5kZWxldGUge1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW06aG92ZXIgPiAuZGVsZXRlIHtcXG5cXHRvcGFjaXR5OiAxO1xcblxcdGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogNHJlbTtcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxuXFx0Zm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmFjdGl2ZUl0ZW1zQ291bnQsXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQge1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRtYXJnaW46IDAgMXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgPiAuYWN0aXZlSXRlbXNDb3VudCB7XFxuXFx0d2lkdGg6IDQuNXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQge1xcblxcdHdpZHRoOiAxMXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLmNvbXBsZXRlZEl0ZW1zQ291bnQuaGlkZSB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRjdXJzb3I6IGF1dG87XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5yb3V0ZXMge1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHR3aWR0aDogMTRyZW07XFxuXFx0bWFyZ2luOiAwIDFyZW07XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDRyZW0gNnJlbTtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciAucm91dGUge1xcblxcdHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbXNGb290ZXIgLnJvdXRlOmhvdmVyIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciAucm91dGUuY3VycmVudCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ncmF5KTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxufVxcblxcbi5mb290ZXIge1xcblxcdGhlaWdodDogNC41cmVtO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxuXFx0Y29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JheSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxLjVyZW0pO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIC50aXAsXFxuLmZvb3RlciAuY29weXJpZ2h0LFxcbi5mb290ZXIgLnllYXIge1xcblxcdGhlaWdodDogMS41cmVtO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMC4yNXJlbTtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG5cXHR3aWR0aDogMXJlbTtcXG5cXHRoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5mb290ZXIgLmdpdGh1YiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ub3JtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLypcbiAqIGNvbnRyb2xsZXIuanMgaXMgYSBnZW5lcmFsIG1hbmFnZXIuXG4gKiBIZSBpcyB0aGUgb25seSBvbmUgd2hvIGtub3dzIGFsbCB0aGUgbG9naWMgb2YgZGlmZmVyZW50IGZlYXR1cmVzLlxuICogQnV0IGhlIGlzIGJsaW5kIGZyb20gYm90aCBkYXRhIGFuZCBET00uXG4gKiBtb2RlbC5qcyBhbmQgdmlldy5qcyBkbyB0aGVzZSBjb25jcmV0ZSB0YXNrcyBmb3IgaGltLlxuICovXG5cbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdC8qIFByZS1kZWZpbmUgcXVlcmllcyBmb3IgdGhyZWUgZGlmZmVyZW50IHJvdXRlczogYWxsLCBhY3RpdmUgYW5kIGNvbXBsZXRlZC5cblx0ICogTW9kZWwuZmluZCgpIGZ1bmN0aW9uIGFjY2VwdHMgb25seSBhbiBhcnJheSBvZiBRdWVyeSBhcyBpbnB1dCB0byBmaWx0ZXIgaXRlbXMgd2Ugd2FudC4gKi9cblx0Y29uc3QgSXRlbXNRdWVyeSA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgcXVlcnlCYW5rID0ge1xuXHRcdFx0YWxsOiBbXSxcblx0XHRcdGFjdGl2ZTogW01vZGVsLlF1ZXJ5KCdjb21wbGV0ZWQnLCBmYWxzZSldLFxuXHRcdFx0Y29tcGxldGVkOiBbTW9kZWwuUXVlcnkoJ2NvbXBsZXRlZCcsIHRydWUpXSxcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gY3JlYXRlKHJvdXRlKSB7XG5cdFx0XHRyZXR1cm4gcXVlcnlCYW5rW3JvdXRlXTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNyZWF0ZSxcblx0XHR9O1xuXHR9KSgpO1xuXG5cdC8qIEdldCB0aGUgcXVlcmllcyBmcm9tIEl0ZW1zUXVlcnksIGFuZCBmZWVkIHRoZW0gdG8gTW9kZWwuZmluZEl0ZW1zKCkgZnVuY3Rpb24uICovXG5cdGZ1bmN0aW9uIGZpbHRlckl0ZW1zKHJvdXRlKSB7XG5cdFx0Y29uc3QgcXVlcmllcyA9IEl0ZW1zUXVlcnkuY3JlYXRlKHJvdXRlKTtcblx0XHRyZXR1cm4gTW9kZWwuZmluZEl0ZW1zKHF1ZXJpZXMpO1xuXHR9XG5cblx0LyogVXBkYXRlIHRoZSBjb3VudCBudW1iZXIgb2YgdGhyZWUgZGlmZmVyZW50IHJvdXRlcyhhbGwsIGFjdGl2ZSBhbmQgY29tcGxldGVkKSBsaXN0ZWRcblx0ICogb24gdG9kbyBib2FyZC5cblx0ICogVGhlIGVudGlyZSBpdGVtcyBib2FyZCB3aWxsIGJlIGhpZGRlbiBpZiBubyBpdGVtcyBsZWZ0IGluIGl0ZW1zIGxpc3QuICovXG5cdGZ1bmN0aW9uIHVwZGF0ZUl0ZW1zQ291bnQoKSB7XG5cdFx0Y29uc3QgYWN0aXZlQ291bnQgPSBmaWx0ZXJJdGVtcygnYWN0aXZlJykubGVuZ3RoO1xuXHRcdGNvbnN0IGNvbXBsZXRlZENvdW50ID0gZmlsdGVySXRlbXMoJ2NvbXBsZXRlZCcpLmxlbmd0aDtcblx0XHRWaWV3LnVwZGF0ZUFjdGl2ZUl0ZW1zQ291bnQoYWN0aXZlQ291bnQpO1xuXHRcdFZpZXcudXBkYXRlQ29tcGxldGVkSXRlbXNDb3VudChjb21wbGV0ZWRDb3VudCk7XG5cdFx0aWYgKGNvbXBsZXRlZENvdW50ID09PSAwKSB7XG5cdFx0XHRWaWV3LmhpZGVDb21wbGV0ZWRJdGVtc0NvdW50KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFZpZXcuc2hvd0NvbXBsZXRlZEl0ZW1zQ291bnQoKTtcblx0XHR9XG5cdFx0aWYgKGFjdGl2ZUNvdW50ICsgY29tcGxldGVkQ291bnQgPT09IDApIHtcblx0XHRcdC8vIGhpZGUgdGhlIGVudGlyZSBpdGVtIGJvYXJkIGlmIDAgaXRlbSBsZWZ0XG5cdFx0XHRWaWV3LmhpZGVJdGVtc0JvYXJkKCk7XG5cdFx0XHRWaWV3LmhpZGVUb2dnbGVBbGwoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Vmlldy5zaG93SXRlbXNCb2FyZCgpO1xuXHRcdFx0aWYgKGFjdGl2ZUNvdW50ID4gMCkge1xuXHRcdFx0XHRWaWV3LnRvZ2dsZUFsbE5vdENoZWNrZWQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFZpZXcudG9nZ2xlQWxsQ2hlY2tlZCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qIEdldCB0aGUgY3VycmVudCByb3V0ZSBmcm9tIHN0b3JhZ2UsXG5cdCAqIGZpbHRlciBpdGVtcyB1bmRlciBjdXJyZW50IHJvdXRlIGFuZCBjYWxsIHZpZXcgdG8gY3JlYXRlIGl0ZW1zIGNhcmQgaW4gRE9NLlxuXHQgKiBWaWV3LnNob3dJdGVtKCkgZnVuY3Rpb24gcmVxdWlyZXMgYSBjYWxsYmFjayBmdW5jdGlvbiB0byB0ZWxsIGhpbVxuXHQgKiB3aGljaCBidXR0b25zIG5lZWQgdG8gYmUgYWN0aXZhdGVkIGFmdGVyIGl0ZW0gY2FyZCBpcyBjcmVhdGVkLiAqL1xuXHRmdW5jdGlvbiBzaG93SXRlbXMoKSB7XG5cdFx0Y29uc3QgaXRlbXNBcnIgPSBmaWx0ZXJJdGVtcyhNb2RlbC5nZXRDdXJyZW50Um91dGUoKSk7XG5cdFx0Vmlldy5jbGVhckl0ZW1zKCk7XG5cdFx0aXRlbXNBcnIuZm9yRWFjaCgoaXRlbU9iaikgPT4ge1xuXHRcdFx0Vmlldy5zaG93SXRlbShpdGVtT2JqLCAodGFyZ2V0KSA9PiB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuXHRcdFx0XHRWaWV3LmJpbmRUb2dnbGVDb21wbGV0ZWQodGFyZ2V0LCB0b2dnbGVDb21wbGV0ZWQpO1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcblx0XHRcdFx0Vmlldy5iaW5kRGVsZXRlSXRlbSh0YXJnZXQsIGRlbGV0ZUl0ZW0pO1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcblx0XHRcdFx0Vmlldy5iaW5kRWRpdEl0ZW0odGFyZ2V0LCBlZGl0SXRlbSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qIE1haW4gbG9naWMgb2YgaG93IHRvIGFkZCBhIG5ldyBpdGVtLiAqL1xuXHRmdW5jdGlvbiBhZGRJdGVtKHRleHQpIHtcblx0XHRNb2RlbC5hZGRJdGVtKHRleHQpO1xuXHRcdFZpZXcuY2xlYXJBZGRJdGVtRWxlKCk7XG5cdFx0c2hvd0l0ZW1zKCk7XG5cdFx0dXBkYXRlSXRlbXNDb3VudCgpO1xuXHR9XG5cblx0LyogTWFpbiBsb2dpYyBvZiB0b2dnbGluZyBhbiBpdGVtIHRvIGNvbXBsZXRlZC4gKi9cblx0ZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGVkKGl0ZW1JZCkge1xuXHRcdE1vZGVsLnRvZ2dsZUl0ZW1Db21wbGV0ZWQoaXRlbUlkKTtcblx0XHRzaG93SXRlbXMoKTsgLy8gbXVzdCByZWZyZXNoIGN1cnJlbnQgcm91dGUuXG5cdFx0dXBkYXRlSXRlbXNDb3VudCgpO1xuXHR9XG5cblx0LyogTWFpbiBsb2dpYyBvZiB3aGF0IGhhcHBlbmQgd2hlbiBkZWxldGUgYnV0dG9uIGlzIGNsaWNrZWQuICovXG5cdGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oaXRlbUlkKSB7XG5cdFx0TW9kZWwuZGVsZXRlSXRlbShpdGVtSWQpO1xuXHRcdHVwZGF0ZUl0ZW1zQ291bnQoKTtcblx0fVxuXG5cdC8qIE1haW4gbG9naW4gb2YgZWRpdGluZyBhbiBpdGVtLiAqL1xuXHRmdW5jdGlvbiBlZGl0SXRlbShpdGVtSWQsIGl0ZW1WYWx1ZSwgY2FsbGJhY2spIHtcblx0XHRpZiAoIWl0ZW1WYWx1ZSkge1xuXHRcdFx0TW9kZWwuZGVsZXRlSXRlbShpdGVtSWQpO1xuXHRcdFx0dXBkYXRlSXRlbXNDb3VudCgpO1xuXHRcdFx0Y2FsbGJhY2soKTsgLy8gY2FsbGJhY2sgdmlldyBpZiBuZWVkIHRvIHJlbW92ZSB0aGF0IGl0ZW0gZnJvbSB2aWV3LlxuXHRcdH0gZWxzZSB7XG5cdFx0XHRNb2RlbC51cGRhdGVJdGVtKGl0ZW1JZCwgTW9kZWwuUXVlcnkoJ3RpdGxlJywgaXRlbVZhbHVlKSk7XG5cdFx0fVxuXHR9XG5cblx0LyogTWFpbiBsb2dpYyBvZiBzd2l0Y2hpbmcgcm91dGUuICovXG5cdGZ1bmN0aW9uIGNoYW5nZVJvdXRlKHJvdXRlKSB7XG5cdFx0TW9kZWwuc2V0Q3VycmVudFJvdXRlKHJvdXRlKTtcblx0XHRzaG93SXRlbXMoKTtcblx0fVxuXG5cdC8qIE1haW4gbG9naWMgb2YgXCJjbGVhciBhbGwgY29tcGxldGVkXCIgYnV0dG9uLiAqL1xuXHRmdW5jdGlvbiBjbGVhckFsbENvbXBsZXRlZEl0ZW1zKCkge1xuXHRcdGNvbnN0IGNvbXBsZXRlZEl0ZW1zQXJyID0gZmlsdGVySXRlbXMoJ2NvbXBsZXRlZCcpO1xuXHRcdGNvbXBsZXRlZEl0ZW1zQXJyLmZvckVhY2goKGl0ZW1PYmopID0+IHtcblx0XHRcdE1vZGVsLmRlbGV0ZUl0ZW0oaXRlbU9iai5pZCk7XG5cdFx0fSk7XG5cdFx0c2hvd0l0ZW1zKCk7XG5cdFx0dXBkYXRlSXRlbXNDb3VudCgpO1xuXHR9XG5cblx0LyogTWFpbiBsb2dpYyBvZiBcInRvZ2dsZSBhbGxcIiBidXR0b24uICovXG5cdGZ1bmN0aW9uIHRvZ2dsZUFsbCgpIHtcblx0XHRjb25zdCBhY3RpdmVJdGVtc0FyciA9IGZpbHRlckl0ZW1zKCdhY3RpdmUnKTtcblx0XHRpZiAoYWN0aXZlSXRlbXNBcnIubGVuZ3RoID4gMCkge1xuXHRcdFx0YWN0aXZlSXRlbXNBcnIuZm9yRWFjaCgoaXRlbU9iaikgPT4ge1xuXHRcdFx0XHRNb2RlbC50b2dnbGVJdGVtQ29tcGxldGVkKGl0ZW1PYmouaWQpO1xuXHRcdFx0fSk7XG5cdFx0XHRzaG93SXRlbXMoKTtcblx0XHRcdHVwZGF0ZUl0ZW1zQ291bnQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgY29tcGxldGVkSXRlbXNBcnIgPSBmaWx0ZXJJdGVtcygnY29tcGxldGVkJyk7XG5cdFx0XHRpZiAoY29tcGxldGVkSXRlbXNBcnIubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjb21wbGV0ZWRJdGVtc0Fyci5mb3JFYWNoKChpdGVtT2JqKSA9PiB7XG5cdFx0XHRcdFx0TW9kZWwudG9nZ2xlSXRlbUNvbXBsZXRlZChpdGVtT2JqLmlkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHNob3dJdGVtcygpO1xuXHRcdFx0XHR1cGRhdGVJdGVtc0NvdW50KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyogQ2FsbCBWaWV3IHRvIGJpbmQgZXZlbnQgbGlzdGVuZXJzIGZvciBhZGRpbmcgbmV3IGl0ZW0gZmVhdHVyZS5cblx0ICogTWFpbiBsb2dpYyBhZGRJdGVtKCkgZnVuY3Rpb24gaXMgZmVkIGFzIGEgY2FsbGJhY2sgZnVuY3Rpb24uICovXG5cdGZ1bmN0aW9uIGVuYWJsZUFkZEl0ZW0oKSB7XG5cdFx0Vmlldy5iaW5kQWRkSXRlbShhZGRJdGVtKTtcblx0XHRWaWV3LmJpbmRBZGRJdGVtTGFiZWwoKTtcblx0fVxuXG5cdC8qIENhbGwgVmlldyB0byBiaW5kIGV2ZW50IGxpc3RlbmVycyBmb3Igcm91dGUgc3dpdGNoIGJ1dHRvbnMuXG5cdCAqIE1haW4gbG9naWMgZnVuY3Rpb24gY2hhbmdlUm91dGUoKSBpcyBmZWQgYXMgYSBjYWxsYmFjayBmdW5jdGlvbi4gKi9cblx0ZnVuY3Rpb24gZW5hYmxlQ2hhbmdlUm91dGUoKSB7XG5cdFx0Y29uc3QgY3VycmVudFJvdXRlID0gTW9kZWwuZ2V0Q3VycmVudFJvdXRlKCk7XG5cdFx0Vmlldy5iaW5kQ2hhbmdlUm91dGUoY2hhbmdlUm91dGUsICgpID0+XG5cdFx0XHRWaWV3Lm1hcmtDdXJyZW50Um91dGUoY3VycmVudFJvdXRlKVxuXHRcdCk7XG5cdH1cblxuXHQvKiBDYWxsIFZpZXcgdG8gYmluZCBldmVudCBsaXN0ZW5lcnMgZm9yIGNsZWFyIGJ1dHRvbnMuXG5cdCAqIE1haW4gbG9naWMgY2xlYXJBbGxDb21wbGV0ZWRJdGVtKCkgZnVuY3Rpb24gaXMgZmVkIGFzIGEgY2FsbGJhY2sgZnVuY3Rpb24uICovXG5cdGZ1bmN0aW9uIGVuYWJsZUNsZWFyQ29tcGxldGVkSXRlbXMoKSB7XG5cdFx0Vmlldy5iaW5kQ2xlYXJDb21wbGV0ZWRJdGVtcyhjbGVhckFsbENvbXBsZXRlZEl0ZW1zKTtcblx0fVxuXG5cdC8qIENhbGwgVmlldyB0byBiaW5kIGV2ZW50IGxpc3RlbmVycyBmb3IgdG9nZ2xlQWxsIGJ1dHRvbnMuXG5cdCAqIE1haW4gbG9naWMgdG9nZ2xlQWxsKCkgZnVuY3Rpb24gaXMgZmVkIGFzIGEgY2FsbGJhY2sgZnVuY3Rpb24uICovXG5cdGZ1bmN0aW9uIGVuYWJsZVRvZ2dsZUFsbCgpIHtcblx0XHRWaWV3LmJpbmRUb2dnbGVBbGwodG9nZ2xlQWxsKTtcblx0fVxuXG5cdC8qIEZvcm1hdCB0aGUgZGF0ZS4gKi9cblx0Y29uc3QgTXlEYXRlID0gKCgpID0+IHtcblx0XHRjb25zdCBvcHRpb25zID0ge1xuXHRcdFx0d2Vla2RheTogJ2xvbmcnLFxuXHRcdFx0eWVhcjogJ251bWVyaWMnLFxuXHRcdFx0bW9udGg6ICdsb25nJyxcblx0XHRcdGRheTogJ251bWVyaWMnLFxuXHRcdH07XG5cblx0XHQvKiBDdXQgdGhlIGRhdGUgc3RyaW5nIGludG8gd2Vla2RheSwgZGF5LCBtb250aCBhbmQgeWVhci4gVmlldyBtb2R1bGUga25vd3MgaG93IHRvIHNob3cgdGhlbS4gKi9cblx0XHRmdW5jdGlvbiBnZXRUb2RheSgpIHtcblx0XHRcdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblx0XHRcdGNvbnN0IHRvZGF5U3RyID0gdG9kYXkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIG9wdGlvbnMpOyAvLyBTYXR1cmRheSwgU2VwdGVtYmVyIDE3LCAyMDE2XG5cdFx0XHRjb25zdCBbd2Vla2RheSwgbW9udGhEYXksIHllYXJdID0gdG9kYXlTdHIuc3BsaXQoJywgJyk7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG5cdFx0XHRsZXQgW21vbnRoLCBkYXldID0gbW9udGhEYXkuc3BsaXQoJyAnKTtcblx0XHRcdG1vbnRoID0gbW9udGguc2xpY2UoMCwgMykudG9VcHBlckNhc2UoKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHdlZWtkYXksXG5cdFx0XHRcdGRheSxcblx0XHRcdFx0bW9udGgsXG5cdFx0XHRcdHllYXIsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRUb2RheSxcblx0XHR9O1xuXHR9KSgpO1xuXG5cdGZ1bmN0aW9uIHNob3dEYXRlKCkge1xuXHRcdFZpZXcuc2hvd0RhdGUoTXlEYXRlLmdldFRvZGF5KCkpO1xuXHR9XG5cblx0LyogQ2FsbCB2aWV3IHRvIHByaW50IGZvb3Rlci4gKi9cblx0ZnVuY3Rpb24gc2hvd0Zvb3RlcigpIHtcblx0XHRWaWV3LnNob3dGb290ZXIoKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0c2hvd0Zvb3Rlcixcblx0XHRzaG93RGF0ZSxcblx0XHRzaG93SXRlbXMsXG5cdFx0dXBkYXRlSXRlbXNDb3VudCxcblx0XHRlbmFibGVBZGRJdGVtLFxuXHRcdGVuYWJsZUNoYW5nZVJvdXRlLFxuXHRcdGVuYWJsZUNsZWFyQ29tcGxldGVkSXRlbXMsXG5cdFx0ZW5hYmxlVG9nZ2xlQWxsLFxuXHR9O1xufSkoKTtcbiIsIi8qXG4gKiBBIERBTyhEYXRhIEFjY2VzcyBPYmplY3QpIEFQSS5cbiAqIEl0J3MgYXdhcmUgb2YgdGhlIGRhdGEgc3RydWN0dXJlIG9mIEl0ZW0gYW5kIG90aGVyIG9iamVjdHMuXG4gKiBBbmQga25vd3MgaG93IHRvIGluc2VydCwgdXBkYXRlLCBkZWxldGUgYW5kIHJlYWQgdGhlc2UgZGF0YS5cbiAqL1xuXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdGNvbnN0IGl0ZW1TdG9yYWdlID0gU3RvcmUoJ2l0ZW1zJywgW10pO1xuXHRjb25zdCBjdXJyZW50Um91dGVTdG9yYWdlID0gU3RvcmUoJ2N1cnJlbnRSb3V0ZScsICdhbGwnKTtcblxuXHQvKiBBIGZhY3RvcnkgZnVuY3Rpb24gY3JlYXRpbmcgbmV3IGl0ZW0gb2JqZWN0LiAqL1xuXHRjb25zdCBJdGVtID0gKHRleHQpID0+ICh7XG5cdFx0aWQ6IERhdGUubm93KCksXG5cdFx0dGl0bGU6IHRleHQsXG5cdFx0Y29tcGxldGVkOiBmYWxzZSxcblx0fSk7XG5cblx0LyoqXG5cdCAqIFF1ZXJ5IGlzIGEgW2tleSwgdmFsdWVdIHBhaXIuXG5cdCAqIE9uY2UgYSBxdWVyeSBpcyBjcmVhdGVkLCBpdCdzIHJlYWQtb25seS5cblx0ICovXG5cdGNvbnN0IFF1ZXJ5ID0gKGluS2V5LCBpblZhbHVlKSA9PiB7XG5cdFx0Y29uc3Qga2V5ID0gaW5LZXk7XG5cdFx0Y29uc3QgdmFsdWUgPSBpblZhbHVlO1xuXG5cdFx0ZnVuY3Rpb24gZ2V0S2V5KCkge1xuXHRcdFx0cmV0dXJuIGtleTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0S2V5LFxuXHRcdFx0Z2V0VmFsdWUsXG5cdFx0fTtcblx0fTtcblxuXHQvKiBSZXR1cm4gYWxsIGl0ZW1zIG1lZXQgdGhlIHJlcXVpcmVtZW50cyBvZiB0aGUgcXVlcnkuXG5cdCAqIFF1ZXJpZXMgaXMgYW4gYXJyYXkgb2YgW2tleSwgdmFsdWVdIHBhaXIgKi9cblx0ZnVuY3Rpb24gZmluZEl0ZW1zKHF1ZXJpZXMpIHtcblx0XHRyZXR1cm4gaXRlbVN0b3JhZ2UucmVhZCgpLmZpbHRlcigoaXRlbU9iaikgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IHRydWU7XG5cdFx0XHRxdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XG5cdFx0XHRcdGlmIChpdGVtT2JqW2Ake3F1ZXJ5LmdldEtleSgpfWBdICE9PSBxdWVyeS5nZXRWYWx1ZSgpKSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9KTtcblx0fVxuXG5cdC8qIENyZWF0ZSBhIG5ldyBJdGVtIG9iamVjdCBhbmQgc2F2ZSBpdCBpbnRvIHN0b3JhZ2UuICovXG5cdGZ1bmN0aW9uIGFkZEl0ZW0odGV4dCkge1xuXHRcdGNvbnN0IGl0ZW1zQXJyID0gaXRlbVN0b3JhZ2UucmVhZCgpO1xuXHRcdGl0ZW1zQXJyLnB1c2goSXRlbSh0ZXh0KSk7XG5cdFx0aXRlbVN0b3JhZ2Uud3JpdGUoaXRlbXNBcnIpO1xuXHR9XG5cblx0LyogUmVtb3ZlIGFuIGl0ZW0gZnJvbSBzdG9yYWdlLiAqL1xuXHRmdW5jdGlvbiBkZWxldGVJdGVtKGl0ZW1JZCkge1xuXHRcdGNvbnN0IGl0ZW1zQXJyID0gaXRlbVN0b3JhZ2UucmVhZCgpO1xuXHRcdGNvbnN0IGlkID0gdHlwZW9mIGl0ZW1JZCA9PT0gJ3N0cmluZycgPyBwYXJzZUludChpdGVtSWQsIDEwKSA6IGl0ZW1JZDtcblx0XHRjb25zdCBpZHggPSBpdGVtc0Fyci5maW5kSW5kZXgoKGVsZSkgPT4gZWxlLmlkID09PSBpZCk7XG5cdFx0aWYgKGlkeCA9PT0gLTEpIHJldHVybjtcblx0XHRpdGVtc0Fyci5zcGxpY2UoaWR4LCAxKTtcblx0XHRpdGVtU3RvcmFnZS53cml0ZShpdGVtc0Fycik7XG5cdH1cblxuXHQvKiBVcGRhdGUgcHJvcGVydGllcyBvZiBhbiBpdGVtLiAqL1xuXHRmdW5jdGlvbiB1cGRhdGVJdGVtKGl0ZW1JZCwgcXVlcnkpIHtcblx0XHRjb25zdCBpdGVtc0FyciA9IGl0ZW1TdG9yYWdlLnJlYWQoKTtcblx0XHRjb25zdCBpZCA9IHR5cGVvZiBpdGVtSWQgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQoaXRlbUlkLCAxMCkgOiBpdGVtSWQ7XG5cdFx0Y29uc3QgaWR4ID0gaXRlbXNBcnIuZmluZEluZGV4KChlbGUpID0+IGVsZS5pZCA9PT0gaWQpO1xuXHRcdGlmIChpZHggPT09IC0xKSByZXR1cm47XG5cdFx0aXRlbXNBcnJbaWR4XVtxdWVyeS5nZXRLZXkoKV0gPSBxdWVyeS5nZXRWYWx1ZSgpO1xuXHRcdGl0ZW1TdG9yYWdlLndyaXRlKGl0ZW1zQXJyKTtcblx0fVxuXG5cdC8qIFRvZ2dsZSBpdGVtIFwiY29tcGxldGVkXCIgcHJvcGVydHkuICovXG5cdGZ1bmN0aW9uIHRvZ2dsZUl0ZW1Db21wbGV0ZWQoaXRlbUlkKSB7XG5cdFx0Y29uc3QgaXRlbXNBcnIgPSBpdGVtU3RvcmFnZS5yZWFkKCk7XG5cdFx0Y29uc3QgaWQgPSB0eXBlb2YgaXRlbUlkID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KGl0ZW1JZCwgMTApIDogaXRlbUlkO1xuXHRcdGNvbnN0IGlkeCA9IGl0ZW1zQXJyLmZpbmRJbmRleCgoZWxlKSA9PiBlbGUuaWQgPT09IGlkKTtcblx0XHRpZiAoaWR4ID09PSAtMSkgcmV0dXJuO1xuXHRcdGNvbnN0IHRhcmdldCA9IGl0ZW1zQXJyW2lkeF07XG5cdFx0dGFyZ2V0LmNvbXBsZXRlZCA9ICF0YXJnZXQuY29tcGxldGVkO1xuXHRcdGl0ZW1TdG9yYWdlLndyaXRlKGl0ZW1zQXJyKTtcblx0fVxuXG5cdC8qIEEgd3JhcHBlciBmdW5jdGlvbi4gU2V0IGN1cnJlbnQgcm91dGUgdG8gZGVmYXVsdCB2YWx1ZSwgaWYgbm8gcm91dGUgZXhpdHMuICovXG5cdGZ1bmN0aW9uIGdldEN1cnJlbnRSb3V0ZSgpIHtcblx0XHRyZXR1cm4gY3VycmVudFJvdXRlU3RvcmFnZS5yZWFkKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRDdXJyZW50Um91dGUocm91dGUpIHtcblx0XHRjdXJyZW50Um91dGVTdG9yYWdlLndyaXRlKHJvdXRlKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0UXVlcnksXG5cdFx0ZmluZEl0ZW1zLFxuXHRcdGFkZEl0ZW0sXG5cdFx0ZGVsZXRlSXRlbSxcblx0XHR1cGRhdGVJdGVtLFxuXHRcdHRvZ2dsZUl0ZW1Db21wbGV0ZWQsXG5cdFx0Z2V0Q3VycmVudFJvdXRlLFxuXHRcdHNldEN1cnJlbnRSb3V0ZSxcblx0fTtcbn0pKCk7XG4iLCIvKiBzdG9yZS5qcyBrbm93cyBvbmx5IGhvdyB0byByZWFkL3dyaXRlIHN0cmluZyBkYXRhIGZyb20vdG8gRG9jdW1lbnQubG9jYWxTdG9yYWdlLlxuICogQWxsIGl0ZW1zIGFyZSBzdG9yZWQgYXMgYSBsb25nIHN0cmluZyBpbiBsb2NhbFN0b3JhZ2UuICovXG5leHBvcnQgZGVmYXVsdCAoaW5OYW1lLCBpbkRlZmF1bHRWYWx1ZSkgPT4ge1xuXHRjb25zdCBuYW1lID0gaW5OYW1lO1xuXHRjb25zdCBkZWZhdWx0VmFsdWUgPSBpbkRlZmF1bHRWYWx1ZTtcblx0Y29uc3Qgc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG5cdGxldCBsaXZlU3RvcmFnZTtcblxuXHRmdW5jdGlvbiByZWFkKCkge1xuXHRcdHJldHVybiBsaXZlU3RvcmFnZSB8fCBKU09OLnBhcnNlKHN0b3JhZ2UuZ2V0SXRlbShuYW1lKSkgfHwgZGVmYXVsdFZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gd3JpdGUoZGF0YSkge1xuXHRcdGxpdmVTdG9yYWdlID0gZGF0YTtcblx0XHRzdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHR9XG5cblx0cmV0dXJuIHsgcmVhZCwgd3JpdGUgfTtcbn07XG4iLCIvKlxuICogQSBoZWxwZXIgb2Ygdmlldy5qcy4gT25seSB1c2VkIHRvIHN0b3JlIEhUTUwgdGVtcGxhdGVzLlxuICovXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRmdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW1PYmopIHtcblx0XHRjb25zdCBzdHIgPSBgPGRpdiBjbGFzcz1cIml0ZW1cIiBkYXRhLWlkPSR7aXRlbU9iai5pZH0+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0b2dnbGUgbWF0ZXJpYWwtaWNvbnNcIiB0eXBlPVwiY2hlY2tib3hcIj4gXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0XCI+JHtpdGVtT2JqLnRpdGxlfTwvbGFiZWw+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImRlbGV0ZSBtYXRlcmlhbC1pY29uc1wiPmNsZWFyPC9pPlxuICAgICAgICA8L2Rpdj5gO1xuXHRcdHJldHVybiBzdHI7XG5cdH1cblxuXHRmdW5jdGlvbiByZW5kZXJGb290ZXIoZ2l0aHViSW1nLCB5ZWFyKSB7XG5cdFx0cmV0dXJuIGA8ZGl2IGNsYXNzPVwidGlwXCI+RG91YmxlIGNsaWNrIHRvIGVkaXQgdG9kby48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvcHlyaWdodFwiPkNvcHlyaWdodCBNSVQgwqkgaGlyZW1lLnNoZW5AZ21haWwuY29tICZuYnNwO3wmbmJzcDsgU291cmNlIGNvZGUgLSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2hlbGxvU2hlbi90b2RvXCI+PGltZyBjbGFzcz1cImdpdGh1YlwiIHNyYz1cIiR7Z2l0aHViSW1nfVwiPjwvYT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInllYXJcIj4yMDIxLSR7eWVhcn08L2Rpdj5gO1xuXHR9XG5cblx0cmV0dXJuIHsgcmVuZGVySXRlbSwgcmVuZGVyRm9vdGVyIH07XG59KSgpO1xuIiwiLypcbiAqIEFsbCBET00gbWFuaXB1bGF0aW9ucyBnbyB0byB0aGlzIGZpbGUuXG4gKi9cbmltcG9ydCBUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcbmltcG9ydCBHaXRodWJJbWcgZnJvbSAnLi4vYXNzZXRzL2ltZy9naXRodWJfYmxhY2sucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0Y29uc3QgdG9kb0VsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvJyk7XG5cdGNvbnN0IHRpdGxlRWxlID0gdG9kb0VsZS5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcblx0Y29uc3QgZGF0ZUVsZSA9IHRpdGxlRWxlLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG5cdGNvbnN0IGRheUVsZSA9IGRhdGVFbGUucXVlcnlTZWxlY3RvcignLmRheScpO1xuXHRjb25zdCBtb250aEVsZSA9IGRhdGVFbGUucXVlcnlTZWxlY3RvcignLm1vbnRoJyk7XG5cdGNvbnN0IHllYXJFbGUgPSBkYXRlRWxlLnF1ZXJ5U2VsZWN0b3IoJy55ZWFyJyk7XG5cdGNvbnN0IHdlZWtkYXlFbGUgPSB0aXRsZUVsZS5xdWVyeVNlbGVjdG9yKCcud2Vla2RheScpO1xuXHRjb25zdCB0b2dnbGVBbGxFbGUgPSB0b2RvRWxlLnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGVBbGwnKTtcblx0Y29uc3QgYWRkSXRlbUNvbnRhaW5lckVsZSA9IHRvZG9FbGUucXVlcnlTZWxlY3RvcignLmFkZEl0ZW1Db250YWluZXInKTtcblx0Y29uc3QgYWRkSXRlbUVsZSA9IGFkZEl0ZW1Db250YWluZXJFbGUucXVlcnlTZWxlY3RvcignLmFkZEl0ZW0nKTtcblx0Y29uc3QgYWRkSXRlbUxhYmVsRWxlID0gYWRkSXRlbUNvbnRhaW5lckVsZS5xdWVyeVNlbGVjdG9yKCcuYWRkSXRlbUxhYmVsJyk7XG5cdGNvbnN0IGl0ZW1zQm9hcmRFbGUgPSB0b2RvRWxlLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtc0JvYXJkJyk7XG5cdGNvbnN0IGl0ZW1zQ29udGFpbmVyRWxlID0gaXRlbXNCb2FyZEVsZS5xdWVyeVNlbGVjdG9yKCcuaXRlbXNDb250YWluZXInKTtcblx0Y29uc3QgaXRlbXNGb290ZXJFbGUgPSBpdGVtc0JvYXJkRWxlLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtc0Zvb3RlcicpO1xuXHRjb25zdCByb3V0ZUJ0bnMgPSBpdGVtc0Zvb3RlckVsZS5xdWVyeVNlbGVjdG9yQWxsKCcucm91dGUnKTtcblx0Y29uc3QgYWN0aXZlQ291bnRFbGUgPSBpdGVtc0Zvb3RlckVsZS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlSXRlbXNDb3VudCcpO1xuXHRjb25zdCBhY3RpdmVDb3VudE51bUVsZSA9IGFjdGl2ZUNvdW50RWxlLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudCcpO1xuXHRjb25zdCBjb21wbGV0ZWRDb3VudEVsZSA9IGl0ZW1zRm9vdGVyRWxlLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0Jy5jb21wbGV0ZWRJdGVtc0NvdW50J1xuXHQpO1xuXHRjb25zdCBjb21wbGV0ZWRDb3VudE51bUVsZSA9IGNvbXBsZXRlZENvdW50RWxlLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudCcpO1xuXHRjb25zdCBmb290ZXJFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XG5cblx0ZnVuY3Rpb24gc2hvd0RhdGUodG9kYXkpIHtcblx0XHRkYXlFbGUudGV4dENvbnRlbnQgPSB0b2RheS5kYXk7XG5cdFx0bW9udGhFbGUudGV4dENvbnRlbnQgPSB0b2RheS5tb250aDtcblx0XHR5ZWFyRWxlLnRleHRDb250ZW50ID0gdG9kYXkueWVhcjtcblx0XHR3ZWVrZGF5RWxlLnRleHRDb250ZW50ID0gdG9kYXkud2Vla2RheTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNsZWFyQWRkSXRlbUVsZSgpIHtcblx0XHRhZGRJdGVtRWxlLnZhbHVlID0gJyc7XG5cdH1cblxuXHRmdW5jdGlvbiBoaWRlQWRkSXRlbUxhYmVsKCkge1xuXHRcdGlmIChhZGRJdGVtRWxlLnZhbHVlID09PSAnJykge1xuXHRcdFx0YWRkSXRlbUxhYmVsRWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YWRkSXRlbUxhYmVsRWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBtYXJrQ3VycmVudFJvdXRlKHJvdXRlKSB7XG5cdFx0cm91dGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuXHRcdFx0aWYgKGJ0bi5kYXRhc2V0LnJvdXRlID09PSByb3V0ZSkge1xuXHRcdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlQWN0aXZlSXRlbXNDb3VudChjb3VudCkge1xuXHRcdGFjdGl2ZUNvdW50TnVtRWxlLnRleHRDb250ZW50ID0gY291bnQ7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVDb21wbGV0ZWRJdGVtc0NvdW50KGNvdW50KSB7XG5cdFx0Y29tcGxldGVkQ291bnROdW1FbGUudGV4dENvbnRlbnQgPSBjb3VudDtcblx0fVxuXG5cdGZ1bmN0aW9uIHNob3dDb21wbGV0ZWRJdGVtc0NvdW50KCkge1xuXHRcdGNvbXBsZXRlZENvdW50RWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGhpZGVDb21wbGV0ZWRJdGVtc0NvdW50KCkge1xuXHRcdGNvbXBsZXRlZENvdW50RWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNob3dJdGVtc0JvYXJkKCkge1xuXHRcdGl0ZW1zQm9hcmRFbGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0YWRkSXRlbUNvbnRhaW5lckVsZS5jbGFzc0xpc3QucmVtb3ZlKCdhbG9uZScpO1xuXHRcdGFkZEl0ZW1FbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWxvbmUnKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGhpZGVJdGVtc0JvYXJkKCkge1xuXHRcdGl0ZW1zQm9hcmRFbGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0YWRkSXRlbUNvbnRhaW5lckVsZS5jbGFzc0xpc3QuYWRkKCdhbG9uZScpO1xuXHRcdGFkZEl0ZW1FbGUuY2xhc3NMaXN0LmFkZCgnYWxvbmUnKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGhpZGVUb2dnbGVBbGwoKSB7XG5cdFx0dG9nZ2xlQWxsRWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvZ2dsZUFsbENoZWNrZWQoKSB7XG5cdFx0dG9nZ2xlQWxsRWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblx0XHR0b2dnbGVBbGxFbGUuY2hlY2tlZCA9IHRydWU7XG5cdH1cblxuXHRmdW5jdGlvbiB0b2dnbGVBbGxOb3RDaGVja2VkKCkge1xuXHRcdHRvZ2dsZUFsbEVsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0dG9nZ2xlQWxsRWxlLmNoZWNrZWQgPSBmYWxzZTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQodGFyZ2V0KSB7XG5cdFx0dGFyZ2V0LnJlbW92ZSgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2xlYXJJdGVtcygpIHtcblx0XHRpdGVtc0NvbnRhaW5lckVsZS5pbm5lckhUTUwgPSAnJztcblx0fVxuXG5cdGZ1bmN0aW9uIHNob3dJdGVtKGl0ZW1PYmosIGNhbGxiYWNrKSB7XG5cdFx0aXRlbXNDb250YWluZXJFbGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuXHRcdFx0J2JlZm9yZWVuZCcsXG5cdFx0XHRUZW1wbGF0ZS5yZW5kZXJJdGVtKGl0ZW1PYmopXG5cdFx0KTtcblx0XHRjb25zdCB0YXJnZXQgPSBpdGVtc0NvbnRhaW5lckVsZS5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0YC5pdGVtW2RhdGEtaWQ9XCIke2l0ZW1PYmouaWR9XCJdYFxuXHRcdCk7XG5cdFx0aWYgKGl0ZW1PYmouY29tcGxldGVkKSB7XG5cdFx0XHR0YXJnZXQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG5cdFx0XHRjb25zdCBjaGVja2JveCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlJyk7XG5cdFx0XHRjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcblx0XHR9XG5cdFx0Y2FsbGJhY2sodGFyZ2V0KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRBZGRJdGVtKGNhbGxiYWNrKSB7XG5cdFx0YWRkSXRlbUVsZS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0J2NoYW5nZScsXG5cdFx0XHQoKSA9PiBjYWxsYmFjayhhZGRJdGVtRWxlLnZhbHVlKSxcblx0XHRcdGZhbHNlXG5cdFx0KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRBZGRJdGVtTGFiZWwoKSB7XG5cdFx0YWRkSXRlbUVsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IGhpZGVBZGRJdGVtTGFiZWwoKSk7XG5cdFx0YWRkSXRlbUVsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBoaWRlQWRkSXRlbUxhYmVsKCkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYmluZFRvZ2dsZUNvbXBsZXRlZCh0YXJnZXQsIGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgY2hlY2tib3ggPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnRvZ2dsZScpO1xuXHRcdGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcblx0XHRcdGNhbGxiYWNrKHRhcmdldC5kYXRhc2V0LmlkKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmREZWxldGVJdGVtKHRhcmdldCwgY2FsbGJhY2spIHtcblx0XHRjb25zdCBidG4gPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdHRhcmdldC5yZW1vdmUoKTtcblx0XHRcdGNhbGxiYWNrKHRhcmdldC5kYXRhc2V0LmlkKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRFZGl0SXRlbSh0YXJnZXQsIGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgbGFiZWwgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnRleHQnKTtcblx0XHRsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcblx0XHRcdGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2VkaXR0aW5nJyk7XG5cdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRydWUpO1xuXHRcdFx0bGFiZWwuZm9jdXMoKTtcblx0XHR9KTtcblx0XHRsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuXHRcdFx0bGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdHRpbmcnKTtcblx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgZmFsc2UpO1xuXHRcdFx0Y2FsbGJhY2sodGFyZ2V0LmRhdGFzZXQuaWQsIGxhYmVsLnRleHRDb250ZW50LCAoKSA9PiB7XG5cdFx0XHRcdHJlbW92ZUVsZW1lbnQodGFyZ2V0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUua2V5ID09PSAnRW50ZXInKSBsYWJlbC5ibHVyKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kQ2hhbmdlUm91dGUoZWFjaEJ0bkNhbGxiYWNrLCBlbmRpbmdDYWxsYmFjaykge1xuXHRcdHJvdXRlQnRucy5mb3JFYWNoKChidG4pID0+IHtcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0ZWFjaEJ0bkNhbGxiYWNrKGJ0bi5kYXRhc2V0LnJvdXRlKTtcblx0XHRcdFx0cm91dGVCdG5zLmZvckVhY2goKGVsZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50JykpIHtcblx0XHRcdFx0XHRcdGVsZS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdGVuZGluZ0NhbGxiYWNrKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kQ2xlYXJDb21wbGV0ZWRJdGVtcyhjYWxsYmFjaykge1xuXHRcdGNvbXBsZXRlZENvdW50RWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FsbGJhY2soKSk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kVG9nZ2xlQWxsKGNhbGxiYWNrKSB7XG5cdFx0dG9nZ2xlQWxsRWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FsbGJhY2soKSk7XG5cdH1cblxuXHRmdW5jdGlvbiBzaG93Rm9vdGVyKCkge1xuXHRcdGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cdFx0Zm9vdGVyRWxlLmluc2VydEFkamFjZW50SFRNTChcblx0XHRcdCdhZnRlcmJlZ2luJyxcblx0XHRcdFRlbXBsYXRlLnJlbmRlckZvb3RlcihHaXRodWJJbWcsIHllYXIpXG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0c2hvd0RhdGUsXG5cdFx0Y2xlYXJBZGRJdGVtRWxlLFxuXHRcdGJpbmRBZGRJdGVtLFxuXHRcdGJpbmRBZGRJdGVtTGFiZWwsXG5cdFx0YmluZFRvZ2dsZUNvbXBsZXRlZCxcblx0XHRiaW5kRGVsZXRlSXRlbSxcblx0XHRiaW5kRWRpdEl0ZW0sXG5cdFx0YmluZENoYW5nZVJvdXRlLFxuXHRcdG1hcmtDdXJyZW50Um91dGUsXG5cdFx0YmluZENsZWFyQ29tcGxldGVkSXRlbXMsXG5cdFx0YmluZFRvZ2dsZUFsbCxcblx0XHR1cGRhdGVBY3RpdmVJdGVtc0NvdW50LFxuXHRcdHVwZGF0ZUNvbXBsZXRlZEl0ZW1zQ291bnQsXG5cdFx0c2hvd0NvbXBsZXRlZEl0ZW1zQ291bnQsXG5cdFx0aGlkZUNvbXBsZXRlZEl0ZW1zQ291bnQsXG5cdFx0aGlkZUl0ZW1zQm9hcmQsXG5cdFx0c2hvd0l0ZW1zQm9hcmQsXG5cdFx0aGlkZVRvZ2dsZUFsbCxcblx0XHR0b2dnbGVBbGxDaGVja2VkLFxuXHRcdHRvZ2dsZUFsbE5vdENoZWNrZWQsXG5cdFx0cmVtb3ZlRWxlbWVudCxcblx0XHRjbGVhckl0ZW1zLFxuXHRcdHNob3dJdGVtLFxuXHRcdHNob3dGb290ZXIsXG5cdH07XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vXCI7IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgY3NzIGZyb20gJy4uL2Nzcy9pbmRleC5jc3MnO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcblxuKCgpID0+IHtcblx0Q29udHJvbGxlci5lbmFibGVBZGRJdGVtKCk7XG5cdENvbnRyb2xsZXIuZW5hYmxlQ2hhbmdlUm91dGUoKTtcblx0Q29udHJvbGxlci5lbmFibGVDbGVhckNvbXBsZXRlZEl0ZW1zKCk7XG5cdENvbnRyb2xsZXIuZW5hYmxlVG9nZ2xlQWxsKCk7XG5cdENvbnRyb2xsZXIuc2hvd0RhdGUoKTtcblx0Q29udHJvbGxlci5zaG93SXRlbXMoKTtcblx0Q29udHJvbGxlci51cGRhdGVJdGVtc0NvdW50KCk7XG5cdENvbnRyb2xsZXIuc2hvd0Zvb3RlcigpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==