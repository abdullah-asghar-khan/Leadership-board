/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/form.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/form.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {


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
  
  /***/ "./src/css/form.css":
  /*!**************************!*\
    !*** ./src/css/form.css ***!
    \**************************/
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
  /* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/form.css");
  
        
        
        
        
        
        
        
        
        
  
  var options = {};
  
  options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
  options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
  
        options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
      
  options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
  options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());
  
  var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);
  
  
  
  
         /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);
  
  
  /***/ }),
  
  /***/ "./src/css/recentScore.css":
  /*!*********************************!*\
    !*** ./src/css/recentScore.css ***!
    \*********************************/
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
  /* harmony import */ var _node_modules_css_loader_dist_cjs_js_recentScore_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./recentScore.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/recentScore.css");
  
        
        
        
        
        
        
        
        
        
  
  var options = {};
  
  options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
  options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
  
        options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
      
  options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
  options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());
  
  var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_recentScore_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);
  
  
  
  
         /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_recentScore_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_recentScore_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_recentScore_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);
  
  
  /***/ }),
  
  /***/ "./src/style.css":
  /*!***********************!*\
    !*** ./src/style.css ***!
    \***********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
  /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
  /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
  /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
  /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
  /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");
  
        
        
        
        
        
        
        
        
        
  
  var options = {};
  
  options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
  options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
  
        options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
      
  options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
  options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());
  
  var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);
  
  
  
  
         /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);
  
  
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
  
  /***/ "./src/modules/addScore.js":
  /*!*********************************!*\
    !*** ./src/modules/addScore.js ***!
    \*********************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  const app = document.getElementById('content');
  
  const addScore = `
  <section class="add-score-section">
              <form action="" class="add-score-form">
                  <h3>Add your score</h3>
                  <input type="text" placeholder="Your name" id="name-input" class="input-el"> <br>
                  <input type="number" placeholder="Your score" id="score-input" class="input-el"> <br>
                  <button type="submit" class="btn add-score-btn">Submit</button>
              </form>
          </section>`;
  
  const renderAddScore = () => {
    app.insertAdjacentHTML('beforeend', addScore);
  };
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAddScore);
  
  /***/ }),
  
  /***/ "./src/modules/data.js":
  /*!*****************************!*\
    !*** ./src/modules/data.js ***!
    \*****************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "fetchScore": () => (/* binding */ fetchScore),
  /* harmony export */   "setScore": () => (/* binding */ setScore)
  /* harmony export */ });
  const setScore = async (data, id) => {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  
  const fetchScore = async (id) => {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  };
  
  
  
  
  /***/ }),
  
  /***/ "./src/modules/recentScore.js":
  /*!************************************!*\
    !*** ./src/modules/recentScore.js ***!
    \************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  const app = document.getElementById('content');
  
  const recentScore = `
  <section class="score-section">
              <div>
                  <h3 class="score-header">Recent scores</h3>
                  <button type="button" class="btn btn-refresh">Refresh</button>
              </div>
              <div class="score-wrap">
                  <ul id="scores-board" class="scores">
                      
                  </ul>
              </div>
          </section>`;
  
  const renderRecentScore = () => {
    app.insertAdjacentHTML('afterbegin', recentScore);
  };
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderRecentScore);
  
  /***/ }),
  
  /***/ "./src/modules/theme.js":
  /*!******************************!*\
    !*** ./src/modules/theme.js ***!
    \******************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  const themeEvent = () => {
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  };
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeEvent);
  
  
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
  /******/ 	/* webpack/runtime/nonce */
  /******/ 	(() => {
  /******/ 		__webpack_require__.nc = undefined;
  /******/ 	})();
  /******/ 	
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
  /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _modules_recentScore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/recentScore.js */ "./src/modules/recentScore.js");
  /* harmony import */ var _modules_addScore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addScore.js */ "./src/modules/addScore.js");
  /* harmony import */ var _modules_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/theme.js */ "./src/modules/theme.js");
  /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
  /* harmony import */ var _css_recentScore_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/recentScore.css */ "./src/css/recentScore.css");
  /* harmony import */ var _css_form_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/form.css */ "./src/css/form.css");
  /* harmony import */ var _modules_data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/data.js */ "./src/modules/data.js");
  
  
  
  
  
  
  
  
  (0,_modules_recentScore_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_addScore_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_theme_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  
  const gameId = 'mwS97TlFoKbsfoq1MUzG';
  
  const displayScore = (array) => {
    const scoresBoard = document.querySelector('#scores-board');
    array.forEach((element) => {
      const liEl = document.createElement('li');
      liEl.classList.add('player');
      const inEl = `
      <div class="player-image">
          <span class="iconify shield" data-icon="mdi:shield-star"></span>
      </div>
      <div class="player-name">
          <h4>${element.user}</h4>
          <p>${element.score}</p>
      </div>
      `;
      liEl.insertAdjacentHTML('beforeend', inEl);
      scoresBoard.appendChild(liEl);
    });
  };
  
  const clearItems = () => {
    const scoresBoard = document.querySelector('#scores-board');
    while (scoresBoard.firstChild) {
      scoresBoard.removeChild(scoresBoard.firstChild);
    }
  };
  
  const displayAddMessage = (addForm, message, classNam) => {
    const span = document.createElement('span');
    span.className = classNam;
    span.textContent = message;
    addForm.appendChild(span);
    setTimeout(() => span.remove(), 4000);
  };
  
  // Add Score Event
  const refreshBtn = document.querySelector('.btn-refresh');
  const addScoreForm = document.querySelector('.add-score-form');
  
  addScoreForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name-input');
    const score = document.querySelector('#score-input');
  
    if (name.value === '' || score.value === '') {
      const message = 'One or two of the form field cannot be empty';
      displayAddMessage(addScoreForm, message, 'empty-message');
    } else {
      const newUserScore = {
        user: name.value,
        score: score.value,
      };
      (0,_modules_data_js__WEBPACK_IMPORTED_MODULE_6__.setScore)(newUserScore, gameId)
        .then((response) => {
          displayAddMessage(addScoreForm, response.result, 'add-message');
        });
      name.value = '';
      score.value = '';
    }
