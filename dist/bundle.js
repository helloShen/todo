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
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black: black;\n    --gray: gray;\n    --red: red;\n}\n\nbody {\n    min-height: 100vh;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo {\n    width: 24rem;\n}\n\n.todo > input.addItem {\n    width: 100%;\n    height: 4rem;\n    font-size: 1.5rem;\n}\n\n.todo > .itemsBoard {\n    display: block;\n}\n\n.todo > .itemsBoard.hidden {\n    display: none;\n}\n\n.todo .item {\n    width: 100%;\n    height: 4rem;\n    font-size: 1.5rem;\n    border: 1px solid var(--black); \n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 2rem 1fr 2rem;\n    align-items: center;\n}\n\n.todo .item.completed {\n    color: var(--gray);\n}\n\n.todo .item > .toggle,\n.todo .item > .delete {\n    justify-self: center;\n}\n\n.todo .item > .text {\n    height: 100%;\n    display: grid;\n    align-items: center;\n}\n\n.todo .item > .text.editting {\n    font-size: 1rem;\n}\n\n.todo .item > .delete {\n    cursor: pointer;\n    user-select: none;\n}\n\n.todo .item > .delete:hover {\n    color: var(--red);\n}\n\n.todo .itemsFooter {\n    width: 100%;\n    height: 4rem;\n    display: grid;\n    grid-auto-flow: column;\n    gap: .5rem;\n}\n\n.todo .itemsFooter > .route {\n    height: 4rem;\n    padding: 1rem;\n    border: 1px solid var(--black);\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter > .route.current {\n    background-color: var(--red);\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAGA;IACI,cAAc;IACd,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,8BAA8B;IAC9B,aAAa;IACb,sBAAsB;IACtB,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,4BAA4B;AAChC","sourcesContent":["@import url('./norm.css');\n@import url('https://fonts.googleapis.com/icon?family=Material+Icons');\n\n:root {\n    --black: black;\n    --gray: gray;\n    --red: red;\n}\n\nbody {\n    min-height: 100vh;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo {\n    width: 24rem;\n}\n\n.todo > input.addItem {\n    width: 100%;\n    height: 4rem;\n    font-size: 1.5rem;\n}\n\n.todo > .itemsBoard {\n    display: block;\n}\n\n.todo > .itemsBoard.hidden {\n    display: none;\n}\n\n.todo .item {\n    width: 100%;\n    height: 4rem;\n    font-size: 1.5rem;\n    border: 1px solid var(--black); \n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 2rem 1fr 2rem;\n    align-items: center;\n}\n\n.todo .item.completed {\n    color: var(--gray);\n}\n\n.todo .item > .toggle,\n.todo .item > .delete {\n    justify-self: center;\n}\n\n.todo .item > .text {\n    height: 100%;\n    display: grid;\n    align-items: center;\n}\n\n.todo .item > .text.editting {\n    font-size: 1rem;\n}\n\n.todo .item > .delete {\n    cursor: pointer;\n    user-select: none;\n}\n\n.todo .item > .delete:hover {\n    color: var(--red);\n}\n\n.todo .itemsFooter {\n    width: 100%;\n    height: 4rem;\n    display: grid;\n    grid-auto-flow: column;\n    gap: .5rem;\n}\n\n.todo .itemsFooter > .route {\n    height: 4rem;\n    padding: 1rem;\n    border: 1px solid var(--black);\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.todo .itemsFooter > .route.current {\n    background-color: var(--red);\n}\n"],"sourceRoot":""}]);
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

    function tryToggleItemsBoard() {
        if (_model_js__WEBPACK_IMPORTED_MODULE_1__["default"].hasItem()) {
            _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].showItemsBoard();
        } else {
            _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].hideItemsBoard();
        }
    }

    function showItems() {
        const route = _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentRoute();
        const itemsObjArr = _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItemsArray(route);
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearItems();
        itemsObjArr.forEach((itemObj) => {
            _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].showItem(itemObj, (target) => {
                bindToggleCompleted(target);
                bindDeleteItem(target);
                bindEditItem(target);
            });
        });
        tryToggleItemsBoard();
    }

    function bindAddItem() {
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].whenAddItem(addItem);
    }

    function bindToggleCompleted(target) {
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].whenToggleCompleted(target, toggleCompleted);
    }

    function bindDeleteItem(target) {
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].whenDeleteItem(target, deleteItem);
    }

    function bindEditItem(target) {
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].whenEditItem(target, editItem);
    }

    function addItem(target) {
        _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItem(target.value);
        _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearAddItemEle();
        showItems();
    }

    function toggleCompleted(target) {
        _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].toggleCompleted(target.dataset.id);
        showItems(); // must refresh current route.
    }

    function deleteItem(target) {
        _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteItem(target.dataset.id);
        tryToggleItemsBoard();
    }

    function editItem(target, itemValue) {
        if (!itemValue) {
            _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteItem(target.dataset.id);
            _view_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeElement(target);
            tryToggleItemsBoard();
        } else {
            _model_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateItem(target.dataset.id, itemValue);
        }
    }

    return { showItems, bindAddItem };

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
            return this.completed;
        }

        function toggleCompleted() {
            this.completed = !this.completed;
        }

        return { create, getId, getTitle, setTitle, hasCompleted, toggleCompleted  };

    })();

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

    function getItemsArray(route) {
        if (!_store_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasItem()) return [];
        const itemsObj = _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].getItemsObject();
        return Object.getOwnPropertyNames(itemsObj).reduce((arr, name) => {
            const itemObj = itemsObj[`${name}`];
            if (route) {
                switch (route) {
                    case 'all': 
                        arr.push(itemObj);
                        break;
                    case 'active': 
                        if (!Item.hasCompleted.call(itemObj)) {
                            arr.push(itemObj);
                        }
                        break;
                    case 'complete':
                        if (Item.hasCompleted.call(itemObj)) {
                            arr.push(itemObj);
                        }
                        break;
                }
            }
            return arr;
        },[]);
    }

    function addItem(text) {
        _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
            const itemObj = Item.create(text);
            itemsObj[`${Item.getId.call(itemObj)}`] = itemObj;
        });
    }

    function toggleCompleted(itemId) {
        if (!_store_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasItem()) return;
        _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
            const itemObj = itemsObj[`${itemId}`];
            Item.toggleCompleted.call(itemObj);
        });
    }

    function deleteItem(itemId) {
        if (!_store_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasItem()) return;
        _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
            delete itemsObj[`${itemId}`];
        });
    }

    function updateItem(itemId, itemValue) {
        if (!_store_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasItem()) return;
        _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateItems((itemsObj) => {
            const itemObj = itemsObj[`${itemId}`];
            Item.setTitle.call(itemObj, itemValue);
        });
    }

    return { Item, getCurrentRoute, setCurrentRoute, hasItem, getItemsArray, addItem, toggleCompleted, deleteItem, updateItem };

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
            <input class="toggle" type="checkbox"> 
            <label class="text">${itemObj.title}</label>
            <i class="delete material-icons">clear</i>
        </div>`;
        return str;
    }

    return { renderItem };

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {

    const todoEle = document.querySelector('.todo');
    const addItemEle = document.querySelector('.todo > .addItem');
    const itemsBoardEle = document.querySelector('.todo > .itemsBoard');
    const itemsContainerEle = document.querySelector('.todo .itemsContainer');

    function clearAddItemEle() {
        addItemEle.value = '';
    }

    function showItemsBoard() {
        if (itemsBoardEle.classList.contains('hidden')) {
            itemsBoardEle.classList.remove('hidden');
        } 
    }

    function hideItemsBoard() {
        if (!itemsBoardEle.classList.contains('hidden')) {
            itemsBoardEle.classList.add('hidden');
        }
    }

    function tryToHideItemsBoard() {
        const items = itemsContainerEle.querySelectorAll('.item');
        if (items.length === 0) hideItemsBoard();
    }

    function whenAddItem(callback) {
        addItemEle.addEventListener('change', () => callback(addItemEle), false);
    }

    function whenToggleCompleted(target, callback) {
        const checkbox = target.querySelector('.toggle');
        checkbox.addEventListener('change', () => {
            target.classList.toggle('completed');
            callback(target);
        });
    }

    function whenDeleteItem(target, callback) {
        const btn = target.querySelector('.delete');
        btn.addEventListener('click', () => {
            target.remove();
            callback(target);
        });
    }

    function whenEditItem(target, callback) {
        const label = target.querySelector('.text');
        label.addEventListener('dblclick', () => {
            label.classList.add('editting');
            label.setAttribute('contenteditable', true);
            label.focus();
        });
        label.addEventListener('blur', () => {
            label.classList.remove('editting');
            label.setAttribute('contenteditable', false);
            callback(target, label.textContent);
        });
        label.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') label.blur();
        });
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

    return { clearAddItemEle, hideItemsBoard, tryToHideItemsBoard, showItemsBoard, whenAddItem, whenToggleCompleted, whenDeleteItem, whenEditItem, removeElement, clearItems, showItem };

})());

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
    _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].bindAddItem();
    _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].showItems();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQSxhQUFhOztBQUViLENBQUMsR0FBRzs7Ozs7O1VDeEZKO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ007O0FBRXpDO0FBQ0EsSUFBSSxrRUFBc0I7QUFDMUIsSUFBSSxnRUFBb0I7QUFDeEIsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3NzL25vcm0uY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL21vZGVsLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJsYWNrOiBibGFjaztcXG4gICAgLS1ncmF5OiBncmF5O1xcbiAgICAtLXJlZDogcmVkO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICB3aWR0aDogMjRyZW07XFxufVxcblxcbi50b2RvID4gaW5wdXQuYWRkSXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udG9kbyA+IC5pdGVtc0JvYXJkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvID4gLml0ZW1zQm9hcmQuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gLml0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spOyBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIDFmciAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbS5jb21wbGV0ZWQge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxufVxcblxcbi50b2RvIC5pdGVtID4gLnRvZ2dsZSxcXG4udG9kbyAuaXRlbSA+IC5kZWxldGUge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudGV4dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudGV4dC5lZGl0dGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAuZGVsZXRlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAuZGVsZXRlOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5yb3V0ZSB7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtc0Zvb3RlciA+IC5yb3V0ZS5jdXJyZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCcuL25vcm0uY3NzJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tYmxhY2s6IGJsYWNrO1xcbiAgICAtLWdyYXk6IGdyYXk7XFxuICAgIC0tcmVkOiByZWQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIHdpZHRoOiAyNHJlbTtcXG59XFxuXFxuLnRvZG8gPiBpbnB1dC5hZGRJdGVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50b2RvID4gLml0ZW1zQm9hcmQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRvZG8gPiAuaXRlbXNCb2FyZC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kbyAuaXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7IFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gMWZyIDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5pdGVtLmNvbXBsZXRlZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG59XFxuXFxuLnRvZG8gLml0ZW0gPiAudG9nZ2xlLFxcbi50b2RvIC5pdGVtID4gLmRlbGV0ZSB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50ZXh0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC50ZXh0LmVkaXR0aW5nIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC5kZWxldGUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udG9kbyAuaXRlbSA+IC5kZWxldGU6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLnJvdXRlIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLml0ZW1zRm9vdGVyID4gLnJvdXRlLmN1cnJlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ub3JtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3LmpzJztcbmltcG9ydCBNb2RlbCBmcm9tICcuL21vZGVsLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIHRyeVRvZ2dsZUl0ZW1zQm9hcmQoKSB7XG4gICAgICAgIGlmIChNb2RlbC5oYXNJdGVtKCkpIHtcbiAgICAgICAgICAgIFZpZXcuc2hvd0l0ZW1zQm9hcmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFZpZXcuaGlkZUl0ZW1zQm9hcmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dJdGVtcygpIHtcbiAgICAgICAgY29uc3Qgcm91dGUgPSBNb2RlbC5nZXRDdXJyZW50Um91dGUoKTtcbiAgICAgICAgY29uc3QgaXRlbXNPYmpBcnIgPSBNb2RlbC5nZXRJdGVtc0FycmF5KHJvdXRlKTtcbiAgICAgICAgVmlldy5jbGVhckl0ZW1zKCk7XG4gICAgICAgIGl0ZW1zT2JqQXJyLmZvckVhY2goKGl0ZW1PYmopID0+IHtcbiAgICAgICAgICAgIFZpZXcuc2hvd0l0ZW0oaXRlbU9iaiwgKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgICAgIGJpbmRUb2dnbGVDb21wbGV0ZWQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBiaW5kRGVsZXRlSXRlbSh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGJpbmRFZGl0SXRlbSh0YXJnZXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0cnlUb2dnbGVJdGVtc0JvYXJkKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZEFkZEl0ZW0oKSB7XG4gICAgICAgIFZpZXcud2hlbkFkZEl0ZW0oYWRkSXRlbSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZFRvZ2dsZUNvbXBsZXRlZCh0YXJnZXQpIHtcbiAgICAgICAgVmlldy53aGVuVG9nZ2xlQ29tcGxldGVkKHRhcmdldCwgdG9nZ2xlQ29tcGxldGVkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kRGVsZXRlSXRlbSh0YXJnZXQpIHtcbiAgICAgICAgVmlldy53aGVuRGVsZXRlSXRlbSh0YXJnZXQsIGRlbGV0ZUl0ZW0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpbmRFZGl0SXRlbSh0YXJnZXQpIHtcbiAgICAgICAgVmlldy53aGVuRWRpdEl0ZW0odGFyZ2V0LCBlZGl0SXRlbSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkSXRlbSh0YXJnZXQpIHtcbiAgICAgICAgTW9kZWwuYWRkSXRlbSh0YXJnZXQudmFsdWUpO1xuICAgICAgICBWaWV3LmNsZWFyQWRkSXRlbUVsZSgpO1xuICAgICAgICBzaG93SXRlbXMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVDb21wbGV0ZWQodGFyZ2V0KSB7XG4gICAgICAgIE1vZGVsLnRvZ2dsZUNvbXBsZXRlZCh0YXJnZXQuZGF0YXNldC5pZCk7XG4gICAgICAgIHNob3dJdGVtcygpOyAvLyBtdXN0IHJlZnJlc2ggY3VycmVudCByb3V0ZS5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVJdGVtKHRhcmdldCkge1xuICAgICAgICBNb2RlbC5kZWxldGVJdGVtKHRhcmdldC5kYXRhc2V0LmlkKTtcbiAgICAgICAgdHJ5VG9nZ2xlSXRlbXNCb2FyZCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVkaXRJdGVtKHRhcmdldCwgaXRlbVZhbHVlKSB7XG4gICAgICAgIGlmICghaXRlbVZhbHVlKSB7XG4gICAgICAgICAgICBNb2RlbC5kZWxldGVJdGVtKHRhcmdldC5kYXRhc2V0LmlkKTtcbiAgICAgICAgICAgIFZpZXcucmVtb3ZlRWxlbWVudCh0YXJnZXQpO1xuICAgICAgICAgICAgdHJ5VG9nZ2xlSXRlbXNCb2FyZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTW9kZWwudXBkYXRlSXRlbSh0YXJnZXQuZGF0YXNldC5pZCwgaXRlbVZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHNob3dJdGVtcywgYmluZEFkZEl0ZW0gfTtcblxufSkoKTtcbiIsImltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblxuICAgIGNvbnN0IEl0ZW0gPSAoKCkgPT4ge1xuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZSh0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB0ZXh0LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRJZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhc0NvbXBsZXRlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlLCBnZXRJZCwgZ2V0VGl0bGUsIHNldFRpdGxlLCBoYXNDb21wbGV0ZWQsIHRvZ2dsZUNvbXBsZXRlZCAgfTtcblxuICAgIH0pKCk7XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50Um91dGUoKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlID0gU3RvcmUuZ2V0Q3VycmVudFJvdXRlKCk7XG4gICAgICAgIGlmICghcm91dGUpIHtcbiAgICAgICAgICAgIFN0b3JlLnNldEN1cnJlbnRSb3V0ZSgnYWxsJyk7XG4gICAgICAgICAgICByZXR1cm4gU3RvcmUuZ2V0Q3VycmVudFJvdXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRSb3V0ZShyb3V0ZSkge1xuICAgICAgICBTdG9yZS5zZXRDdXJyZW50Um91dGUocm91dGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc0l0ZW0oKSB7XG4gICAgICAgIHJldHVybiBTdG9yZS5oYXNJdGVtKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SXRlbXNBcnJheShyb3V0ZSkge1xuICAgICAgICBpZiAoIVN0b3JlLmhhc0l0ZW0oKSkgcmV0dXJuIFtdO1xuICAgICAgICBjb25zdCBpdGVtc09iaiA9IFN0b3JlLmdldEl0ZW1zT2JqZWN0KCk7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhpdGVtc09iaikucmVkdWNlKChhcnIsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1PYmogPSBpdGVtc09ialtgJHtuYW1lfWBdO1xuICAgICAgICAgICAgaWYgKHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbGwnOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGl0ZW1PYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FjdGl2ZSc6IFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFJdGVtLmhhc0NvbXBsZXRlZC5jYWxsKGl0ZW1PYmopKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaXRlbU9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29tcGxldGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEl0ZW0uaGFzQ29tcGxldGVkLmNhbGwoaXRlbU9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpdGVtT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhcnI7XG4gICAgICAgIH0sW10pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEl0ZW0odGV4dCkge1xuICAgICAgICBTdG9yZS51cGRhdGVJdGVtcygoaXRlbXNPYmopID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1PYmogPSBJdGVtLmNyZWF0ZSh0ZXh0KTtcbiAgICAgICAgICAgIGl0ZW1zT2JqW2Ake0l0ZW0uZ2V0SWQuY2FsbChpdGVtT2JqKX1gXSA9IGl0ZW1PYmo7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlZChpdGVtSWQpIHtcbiAgICAgICAgaWYgKCFTdG9yZS5oYXNJdGVtKCkpIHJldHVybjtcbiAgICAgICAgU3RvcmUudXBkYXRlSXRlbXMoKGl0ZW1zT2JqKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtT2JqID0gaXRlbXNPYmpbYCR7aXRlbUlkfWBdO1xuICAgICAgICAgICAgSXRlbS50b2dnbGVDb21wbGV0ZWQuY2FsbChpdGVtT2JqKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlSXRlbShpdGVtSWQpIHtcbiAgICAgICAgaWYgKCFTdG9yZS5oYXNJdGVtKCkpIHJldHVybjtcbiAgICAgICAgU3RvcmUudXBkYXRlSXRlbXMoKGl0ZW1zT2JqKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgaXRlbXNPYmpbYCR7aXRlbUlkfWBdO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVJdGVtKGl0ZW1JZCwgaXRlbVZhbHVlKSB7XG4gICAgICAgIGlmICghU3RvcmUuaGFzSXRlbSgpKSByZXR1cm47XG4gICAgICAgIFN0b3JlLnVwZGF0ZUl0ZW1zKChpdGVtc09iaikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbU9iaiA9IGl0ZW1zT2JqW2Ake2l0ZW1JZH1gXTtcbiAgICAgICAgICAgIEl0ZW0uc2V0VGl0bGUuY2FsbChpdGVtT2JqLCBpdGVtVmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBJdGVtLCBnZXRDdXJyZW50Um91dGUsIHNldEN1cnJlbnRSb3V0ZSwgaGFzSXRlbSwgZ2V0SXRlbXNBcnJheSwgYWRkSXRlbSwgdG9nZ2xlQ29tcGxldGVkLCBkZWxldGVJdGVtLCB1cGRhdGVJdGVtIH07XG5cbn0pKCk7IiwiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblxuICAgIGNvbnN0IGl0ZW1zS2V5ID0gJ3RvZG9JdGVtcyc7XG4gICAgY29uc3Qgcm91dGVLZXkgPSAndG9kb0N1cnJlbnRSb3V0ZSc7XG5cbiAgICBmdW5jdGlvbiBoYXNJdGVtKCkge1xuICAgICAgICBjb25zdCBpdGVtc1N0ciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtc0tleSk7XG4gICAgICAgIGlmIChpdGVtc1N0ciA9PT0gJ3t9JykgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJdGVtc09iamVjdCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtc0tleSk7XG4gICAgICAgIGlmIChkYXRhKSByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEl0ZW1zT2JqZWN0KGl0ZW1zT2JqKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShpdGVtc0tleSwgSlNPTi5zdHJpbmdpZnkoaXRlbXNPYmopKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVJdGVtcyhjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBpdGVtc09iaiA9IGdldEl0ZW1zT2JqZWN0KCk7XG4gICAgICAgIGNhbGxiYWNrKGl0ZW1zT2JqKTtcbiAgICAgICAgc2V0SXRlbXNPYmplY3QoaXRlbXNPYmopO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRSb3V0ZShyb3V0ZSkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3JvdXRlS2V5fWApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRSb3V0ZShyb3V0ZSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7cm91dGVLZXl9YCwgcm91dGUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGhhc0l0ZW0sIGdldEl0ZW1zT2JqZWN0LCBzZXRJdGVtc09iamVjdCwgdXBkYXRlSXRlbXMsIGdldEN1cnJlbnRSb3V0ZSwgc2V0Q3VycmVudFJvdXRlIH07XG5cbn0pKCk7IiwiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckl0ZW0oaXRlbU9iaikge1xuICAgICAgICBjb25zdCBzdHIgPSBcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJpdGVtXCIgZGF0YS1pZD0ke2l0ZW1PYmouaWR9PlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidG9nZ2xlXCIgdHlwZT1cImNoZWNrYm94XCI+IFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dFwiPiR7aXRlbU9iai50aXRsZX08L2xhYmVsPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJkZWxldGUgbWF0ZXJpYWwtaWNvbnNcIj5jbGVhcjwvaT5cbiAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZW5kZXJJdGVtIH07XG5cbn0pKCk7XG5cbiAgICAiLCJpbXBvcnQgVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cbiAgICBjb25zdCB0b2RvRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8nKTtcbiAgICBjb25zdCBhZGRJdGVtRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8gPiAuYWRkSXRlbScpO1xuICAgIGNvbnN0IGl0ZW1zQm9hcmRFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kbyA+IC5pdGVtc0JvYXJkJyk7XG4gICAgY29uc3QgaXRlbXNDb250YWluZXJFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kbyAuaXRlbXNDb250YWluZXInKTtcblxuICAgIGZ1bmN0aW9uIGNsZWFyQWRkSXRlbUVsZSgpIHtcbiAgICAgICAgYWRkSXRlbUVsZS52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dJdGVtc0JvYXJkKCkge1xuICAgICAgICBpZiAoaXRlbXNCb2FyZEVsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICBpdGVtc0JvYXJkRWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVJdGVtc0JvYXJkKCkge1xuICAgICAgICBpZiAoIWl0ZW1zQm9hcmRFbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICAgICAgaXRlbXNCb2FyZEVsZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyeVRvSGlkZUl0ZW1zQm9hcmQoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gaXRlbXNDb250YWluZXJFbGUucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0nKTtcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkgaGlkZUl0ZW1zQm9hcmQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3aGVuQWRkSXRlbShjYWxsYmFjaykge1xuICAgICAgICBhZGRJdGVtRWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGNhbGxiYWNrKGFkZEl0ZW1FbGUpLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2hlblRvZ2dsZUNvbXBsZXRlZCh0YXJnZXQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUnKTtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgICAgY2FsbGJhY2sodGFyZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2hlbkRlbGV0ZUl0ZW0odGFyZ2V0LCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBidG4gPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlKCk7XG4gICAgICAgICAgICBjYWxsYmFjayh0YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3aGVuRWRpdEl0ZW0odGFyZ2V0LCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBsYWJlbCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcudGV4dCcpO1xuICAgICAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2VkaXR0aW5nJyk7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRydWUpO1xuICAgICAgICAgICAgbGFiZWwuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0dGluZycpO1xuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCBmYWxzZSk7XG4gICAgICAgICAgICBjYWxsYmFjayh0YXJnZXQsIGxhYmVsLnRleHRDb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSBsYWJlbC5ibHVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckl0ZW1zKCkge1xuICAgICAgICBpdGVtc0NvbnRhaW5lckVsZS5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93SXRlbShpdGVtT2JqLCBjYWxsYmFjaykge1xuICAgICAgICBpdGVtc0NvbnRhaW5lckVsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIFRlbXBsYXRlLnJlbmRlckl0ZW0oaXRlbU9iaikpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBpdGVtc0NvbnRhaW5lckVsZS5xdWVyeVNlbGVjdG9yKGAuaXRlbVtkYXRhLWlkPVwiJHtpdGVtT2JqLmlkfVwiXWApO1xuICAgICAgICBpZiAoaXRlbU9iai5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUnKTtcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKHRhcmdldCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY2xlYXJBZGRJdGVtRWxlLCBoaWRlSXRlbXNCb2FyZCwgdHJ5VG9IaWRlSXRlbXNCb2FyZCwgc2hvd0l0ZW1zQm9hcmQsIHdoZW5BZGRJdGVtLCB3aGVuVG9nZ2xlQ29tcGxldGVkLCB3aGVuRGVsZXRlSXRlbSwgd2hlbkVkaXRJdGVtLCByZW1vdmVFbGVtZW50LCBjbGVhckl0ZW1zLCBzaG93SXRlbSB9O1xuXG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3NzIGZyb20gJy4uL2Nzcy9pbmRleC5jc3MnO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyLmpzJztcblxuKCgpID0+IHtcbiAgICBDb250cm9sbGVyLmJpbmRBZGRJdGVtKCk7XG4gICAgQ29udHJvbGxlci5zaG93SXRlbXMoKTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9