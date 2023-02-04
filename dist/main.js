/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  list-style: none;\n  text-decoration: none;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;;;EAGE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf","sourcesContent":["html {\n    box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  list-style: none;\n  text-decoration: none;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

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
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const firstToUpper = function (str) {
    let arr = str.split("");

    arr[0] = arr[0].toUpperCase();

    let upped = "";

    arr.forEach((letter) => { upped += letter });

    return upped;
}

const dice10 = function () {
    return Math.floor(Math.random() * 9 + 1);
}

const getRandomInt = function (min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
};

const unitFac = function (owner, name, type, inID, me, di, de, mv, mo, en, co, chargeBonus, meVsCav, meVsInf, meVsMis,
    diVsCav, diVsInf, diVsMis, deVsCav, deVsInf, deVsMis) {
    return {
        owner,
        name,
        type,
        inID,
        me,
        di,
        de,
        mv,
        mo,
        en,
        co,
        chargeBonus,
        meVsCav,
        meVsInf,
        meVsMis,
        diVsCav,
        diVsInf,
        diVsMis,
        deVsCav,
        deVsInf,
        deVsMis,
        meTarget: null,
        diTarget: null,
        isEngaged: null,
        isFleeing: 0,
        wound: function () {
            if (this.en > 0) {
                this.en -= 1;
            }
        },
        flee: function () {
            if (this.isFleeing === 0) {
                this.isFleeing = 1;
            }
        },
        stopFlee: function () {
            if (this.isFleeing === 1) {
                this.isFleeing = 0;
            }
        },
        engage: function (targetID) {
            this.isEngaged = targetID;
        },
        disengage: function () {
            this.isEngaged = null;
        },
        missileTarget: function (targetID) {
            this.diTarget = targetID;
        },
        meleeTarget: function (targetID) {
            this.meTarget = targetID;
        }
    }
}

const armyModule = function (letter) {

    let IDnum = 0;

    let army = {
        armyID: `army` + letter,
        mis: [],
        cav: [],
        inf: []
    }

    const getArmy = function () {
        return army;
    }

    const getMis = function () {
        return army[`mis`];
    }

    const getCav = function () {
        return army[`cav`];
    }

    const getInf = function () {
        return army[`inf`];
    }

    const resetArmy = function () {
        ID = 0;

        army.mis = [];
        army.cav = [];
        army.inf = [];
    }

    const addUnit = function (owner, name, type, me, di, de, mv, mo, en, co, chargeBonus, meVsCav, meVsInf, meVsMis,
        diVsCav, diVsInf, diVsMis, deVsCav, deVsInf, deVsMis) {

        let inID = letter + `.` + type + `-` + IDnum;

        IDnum++;

        let newUnit = unitFac(owner, name, type, inID, me, di, de, mv, mo, en, co, chargeBonus, meVsCav, meVsInf, meVsMis,
            diVsCav, diVsInf, diVsMis, deVsCav, deVsInf, deVsMis);

        if (army[newUnit.type]) {

            army[newUnit.type].push(newUnit);

            console.log(`${newUnit.inID} successfully created`)

        } else {
            let error = `ERR addUnit : unit type doesn't exist`;
            console.log(error);
            alert(error);

            return -1;
        }
    };

    const getUnitIndexById = function (ID) {

        // this function takes an ID and returns an object containing the array and the index in that array of the
        // inputed ID.

        let type = ID.split("-")[0].split(".")[1];

        if (army[type].length > 0) {
            for (let i = 0; i < army[type].length; i++) {
                if (army[type][i].inID === ID) {
                    return { type: type, index: i };

                } else if (i === (army[type].length - 1)) {
                    let error = `ERR getUnitIndexById : unit '${ID}' not found`;
                    console.log(error);
                    alert(error);

                    return -1;
                }
            }
        } else if (army[type]) {
            let error = `ERR getUnitIndexById : unit ${ID} not found`;
            console.log(error);
            alert(error);

            return -1;
        } else {
            let error = `ERR getUnitIndexById : ${ID} unit type doesn't exist`;
            console.log(error);
            alert(error);

            return -1;
        }
    }

    const getUnit = function (ID) {
        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR getUnit : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        }

        return army[access.type][access.index];
    }

    const woundUnit = function (ID) {

        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR woundUnit : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        }

        army[access.type][access.index].wound();
        console.log(`woundUnit : ${ID} got wounded`);

        if (army[access.type][access.index].en <= 0) {
            console.log(`woundUnit : ${ID} got killed`);
            killUnit(ID);
        }

    }

    const killUnit = function (ID) {

        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR killUnit : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        }

        if (army[access.type][access.index].en > 0) {
            let error = `ERR killUnit : unit isn't dead`
            console.log(error);
            alert(error);
        } else {
            army[access.type].splice(access.index, 1);
            console.log(`killUnit : ${ID} got killed`);
        }
    }

    const route = function (ID) {

        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR route : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        }

        if (army[access.type][access.index].isFleeing === 0) {
            army[access.type][access.index].flee();

            console.log(`route: ${ID} is routing !`);
        } else {
            console.log(`ERR route : ${ID} is already routed`);
        }
    }

    const unroute = function (ID) {

        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR unroute : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        }

        if (army[access.type][access.index].isFleeing === 1) {
            army[access.type][access.index].stopFlee();
            console.log(`unroute: ${ID} rallied !`);
        } else {
            console.log(`unroute : ${ID} is not routed`);
        }
    }

    const engageUnit = function (ID, targetID) {
        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR engageUnit : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        };

        army[access.type][access.index].engage(targetID);

        console.log(`engageUnit : ${ID} engaged in melee with ${targetID}`);
    }

    const disengageUnit = function (ID) {
        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR engageUnit : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        };

        army[access.type][access.index].disengage();
        console.log(`engageUnit : ${ID} disengaged from melee`);
    }

    const missileTarget = function (ID, targetID) {
        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR missileTarget : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        };

        /* if (access[access.type][access.index].di === null) {
            let error = `ERR missileTarget : ${ID} have no missile attack`;
            console.log(error);
            alert(error);
            return -1;
        } */

        army[access.type][access.index].missileTarget(targetID);

        console.log(`missileTarget : ${ID} targets ${targetID} at range`);
    }

    const meleeTarget = function (ID, targetID) {
        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR missileTarget : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        };

        army[access.type][access.index].meleeTarget(targetID);

        console.log(`meleeTarget : ${ID} targets ${targetID} for melee`);
    }

    return {
        getArmy,
        getMis,
        getCav,
        getInf,
        resetArmy,
        addUnit,
        getUnitIndexById,
        getUnit,
        woundUnit,
        killUnit,
        route,
        unroute,
        engageUnit,
        disengageUnit,
        missileTarget,
        meleeTarget,
    }
};

let armyA = (armyModule)(`A`);
let armyB = (armyModule)(`B`);

armyA.addUnit('Gaetan', 'Conscrits', 'inf', 2, null, 4, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyA.addUnit('Gaetan', 'Lanciers', 'inf', 4, null, 8, 2, 4, 2, 3, 0, 2, 0, 0, 0, 0, 0, 0, -2, 0);
armyA.addUnit('Gaetan', 'Cavalerie lourde', 'cav', 4, -2, 10, 4, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyA.addUnit('Gaetan', 'Archers d\'élite', 'mis', 1, 6, 8, 3, 6, 3, 5, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0);


armyB.addUnit('Gérard', 'Conscrits', 'inf', 2, null, 4, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyB.addUnit('Gérard', 'Lanciers', 'inf', 4, null, 8, 2, 4, 2, 3, 0, 2, 0, 0, 0, 0, 0, 0, -2, 0);
armyB.addUnit('Gérard', 'Cavalerie lourde', 'cav', 4, -2, 10, 4, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyB.addUnit('Gérard', 'Archers d\'élite', 'mis', 1, 6, 8, 3, 6, 3, 5, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0);

function attackRoll(atkID, atk, defID, def) {
    let roll = dice10();
    let atkValue = roll + atk;

    /* console.log(atkID);
    console.log(atk);
    console.log(defID);
    console.log(def); */

    if (atkValue < def) {
        console.log(`${atkID} miss ${defID} (roll ${roll})`);
        return 'miss';
    } else if (atkValue >= (def * 2)) {

        console.log(`${atkID} hit ${defID} (roll ${roll}) and crit`);
        return 'crit'
    } else if (atkValue >= def) {
        console.log(`${atkID} hit ${defID} (roll ${roll})`);
        return 'hit';
    } else {
        console.log(`ERR attackRoll : bad values`);
        return -1;
    }
}

function toBattle() {


    let typeSwitch = [`mis`, `cav`, `inf`];

    // missile phase

    function setMissileTargets() {
        let aMissiles = armyA.getMis();
        let bMissiles = armyB.getMis();

        for (let i = 0; i < aMissiles.length; i++) {

            let preRoll = getRandomInt(0, 2);

            let list = armyB.getArmy()[typeSwitch[preRoll]];

            let mainRoll = getRandomInt(0, (list.length - 1));

            let targetID = list[mainRoll].inID;

            armyA.missileTarget(aMissiles[i].inID, targetID);
        }

        for (let i = 0; i < bMissiles.length; i++) {

            let preRoll = getRandomInt(0, 2);

            let list = armyA.getArmy()[typeSwitch[preRoll]];

            let mainRoll = getRandomInt(0, (list.length - 1));

            let targetID = list[mainRoll].inID;

            armyB.missileTarget(bMissiles[i].inID, targetID);
        }
    }

    setMissileTargets();

    function missileVolley() {
        let aMissiles = armyA.getMis();
        let bMissiles = armyB.getMis();
        let i = 0;

        do {

            console.log(i);

            if (aMissiles[i]) {
                let missile = aMissiles[i];
                let target = armyB.getUnit(missile.diTarget);

                let diBonus = `diVs` + firstToUpper(target.type); // need to set first letter of type to upper case to match camel case;

                console.log(diBonus);

                console.log(missile[diBonus]);

                missile.di += missile[diBonus];
                target.de += target.deVsMis;

                let result = attackRoll(missile.inID, missile.di, target.inID, target.de);

                switch (result) {
                    case 'miss':
                        break;

                    case 'hit':
                        armyB.woundUnit(target.inID);
                        break;

                    case 'crit':
                        armyB.woundUnit(target.inID);
                        armyB.route(target.inID);
                        break;
                }
            }

            if (bMissiles[i]) {
                let missile = bMissiles[i];
                let target = armyA.getUnit(missile.diTarget);

                let diBonus = `diVs` + firstToUpper(target.type); // need to set first letter of type to upper case to match camel case;

                missile.di += missile[diBonus];
                target.de += target.deVsMis;

                let result = attackRoll(missile.inID, missile.di, target.inID, target.de);

                switch (result) {
                    case 'miss':
                        break;

                    case 'hit':
                        armyA.woundUnit(target.inID);
                        break;

                    case 'crit':
                        armyA.woundUnit(target.inID);
                        armyA.route(target.inID);
                        break;
                }
            }

            i++;

        } while (aMissiles[i] && bMissiles[i]);
    }

    missileVolley();
}

toBattle();
console.log(armyA.getArmy());
console.log(armyB.getArmy());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0VBQWtFOztBQUVsRTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrRUFBa0U7O0FBRWxFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHVtbXktd2Vic2l0ZS1zdGFydGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9kdW1teS13ZWJzaXRlLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2R1bW15LXdlYnNpdGUtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2R1bW15LXdlYnNpdGUtc3RhcnRlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9kdW1teS13ZWJzaXRlLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZHVtbXktd2Vic2l0ZS1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kdW1teS13ZWJzaXRlLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZHVtbXktd2Vic2l0ZS1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2R1bW15LXdlYnNpdGUtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2R1bW15LXdlYnNpdGUtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2R1bW15LXdlYnNpdGUtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kdW1teS13ZWJzaXRlLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZHVtbXktd2Vic2l0ZS1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kdW1teS13ZWJzaXRlLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kdW1teS13ZWJzaXRlLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kdW1teS13ZWJzaXRlLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2R1bW15LXdlYnNpdGUtc3RhcnRlci8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7OztFQUdFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmNvbnN0IGZpcnN0VG9VcHBlciA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICBsZXQgYXJyID0gc3RyLnNwbGl0KFwiXCIpO1xuXG4gICAgYXJyWzBdID0gYXJyWzBdLnRvVXBwZXJDYXNlKCk7XG5cbiAgICBsZXQgdXBwZWQgPSBcIlwiO1xuXG4gICAgYXJyLmZvckVhY2goKGxldHRlcikgPT4geyB1cHBlZCArPSBsZXR0ZXIgfSk7XG5cbiAgICByZXR1cm4gdXBwZWQ7XG59XG5cbmNvbnN0IGRpY2UxMCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSArIDEpO1xufVxuXG5jb25zdCBnZXRSYW5kb21JbnQgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuY29uc3QgdW5pdEZhYyA9IGZ1bmN0aW9uIChvd25lciwgbmFtZSwgdHlwZSwgaW5JRCwgbWUsIGRpLCBkZSwgbXYsIG1vLCBlbiwgY28sIGNoYXJnZUJvbnVzLCBtZVZzQ2F2LCBtZVZzSW5mLCBtZVZzTWlzLFxuICAgIGRpVnNDYXYsIGRpVnNJbmYsIGRpVnNNaXMsIGRlVnNDYXYsIGRlVnNJbmYsIGRlVnNNaXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBvd25lcixcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgaW5JRCxcbiAgICAgICAgbWUsXG4gICAgICAgIGRpLFxuICAgICAgICBkZSxcbiAgICAgICAgbXYsXG4gICAgICAgIG1vLFxuICAgICAgICBlbixcbiAgICAgICAgY28sXG4gICAgICAgIGNoYXJnZUJvbnVzLFxuICAgICAgICBtZVZzQ2F2LFxuICAgICAgICBtZVZzSW5mLFxuICAgICAgICBtZVZzTWlzLFxuICAgICAgICBkaVZzQ2F2LFxuICAgICAgICBkaVZzSW5mLFxuICAgICAgICBkaVZzTWlzLFxuICAgICAgICBkZVZzQ2F2LFxuICAgICAgICBkZVZzSW5mLFxuICAgICAgICBkZVZzTWlzLFxuICAgICAgICBtZVRhcmdldDogbnVsbCxcbiAgICAgICAgZGlUYXJnZXQ6IG51bGwsXG4gICAgICAgIGlzRW5nYWdlZDogbnVsbCxcbiAgICAgICAgaXNGbGVlaW5nOiAwLFxuICAgICAgICB3b3VuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbiAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmbGVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0ZsZWVpbmcgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmxlZWluZyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN0b3BGbGVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0ZsZWVpbmcgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmxlZWluZyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVuZ2FnZTogZnVuY3Rpb24gKHRhcmdldElEKSB7XG4gICAgICAgICAgICB0aGlzLmlzRW5nYWdlZCA9IHRhcmdldElEO1xuICAgICAgICB9LFxuICAgICAgICBkaXNlbmdhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFbmdhZ2VkID0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgbWlzc2lsZVRhcmdldDogZnVuY3Rpb24gKHRhcmdldElEKSB7XG4gICAgICAgICAgICB0aGlzLmRpVGFyZ2V0ID0gdGFyZ2V0SUQ7XG4gICAgICAgIH0sXG4gICAgICAgIG1lbGVlVGFyZ2V0OiBmdW5jdGlvbiAodGFyZ2V0SUQpIHtcbiAgICAgICAgICAgIHRoaXMubWVUYXJnZXQgPSB0YXJnZXRJRDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgYXJteU1vZHVsZSA9IGZ1bmN0aW9uIChsZXR0ZXIpIHtcblxuICAgIGxldCBJRG51bSA9IDA7XG5cbiAgICBsZXQgYXJteSA9IHtcbiAgICAgICAgYXJteUlEOiBgYXJteWAgKyBsZXR0ZXIsXG4gICAgICAgIG1pczogW10sXG4gICAgICAgIGNhdjogW10sXG4gICAgICAgIGluZjogW11cbiAgICB9XG5cbiAgICBjb25zdCBnZXRBcm15ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJteTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRNaXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcm15W2BtaXNgXTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDYXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcm15W2BjYXZgXTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJbmYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcm15W2BpbmZgXTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNldEFybXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIElEID0gMDtcblxuICAgICAgICBhcm15Lm1pcyA9IFtdO1xuICAgICAgICBhcm15LmNhdiA9IFtdO1xuICAgICAgICBhcm15LmluZiA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFVuaXQgPSBmdW5jdGlvbiAob3duZXIsIG5hbWUsIHR5cGUsIG1lLCBkaSwgZGUsIG12LCBtbywgZW4sIGNvLCBjaGFyZ2VCb251cywgbWVWc0NhdiwgbWVWc0luZiwgbWVWc01pcyxcbiAgICAgICAgZGlWc0NhdiwgZGlWc0luZiwgZGlWc01pcywgZGVWc0NhdiwgZGVWc0luZiwgZGVWc01pcykge1xuXG4gICAgICAgIGxldCBpbklEID0gbGV0dGVyICsgYC5gICsgdHlwZSArIGAtYCArIElEbnVtO1xuXG4gICAgICAgIElEbnVtKys7XG5cbiAgICAgICAgbGV0IG5ld1VuaXQgPSB1bml0RmFjKG93bmVyLCBuYW1lLCB0eXBlLCBpbklELCBtZSwgZGksIGRlLCBtdiwgbW8sIGVuLCBjbywgY2hhcmdlQm9udXMsIG1lVnNDYXYsIG1lVnNJbmYsIG1lVnNNaXMsXG4gICAgICAgICAgICBkaVZzQ2F2LCBkaVZzSW5mLCBkaVZzTWlzLCBkZVZzQ2F2LCBkZVZzSW5mLCBkZVZzTWlzKTtcblxuICAgICAgICBpZiAoYXJteVtuZXdVbml0LnR5cGVdKSB7XG5cbiAgICAgICAgICAgIGFybXlbbmV3VW5pdC50eXBlXS5wdXNoKG5ld1VuaXQpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtuZXdVbml0LmluSUR9IHN1Y2Nlc3NmdWxseSBjcmVhdGVkYClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gYEVSUiBhZGRVbml0IDogdW5pdCB0eXBlIGRvZXNuJ3QgZXhpc3RgO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VW5pdEluZGV4QnlJZCA9IGZ1bmN0aW9uIChJRCkge1xuXG4gICAgICAgIC8vIHRoaXMgZnVuY3Rpb24gdGFrZXMgYW4gSUQgYW5kIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGFycmF5IGFuZCB0aGUgaW5kZXggaW4gdGhhdCBhcnJheSBvZiB0aGVcbiAgICAgICAgLy8gaW5wdXRlZCBJRC5cblxuICAgICAgICBsZXQgdHlwZSA9IElELnNwbGl0KFwiLVwiKVswXS5zcGxpdChcIi5cIilbMV07XG5cbiAgICAgICAgaWYgKGFybXlbdHlwZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcm15W3R5cGVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFybXlbdHlwZV1baV0uaW5JRCA9PT0gSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogdHlwZSwgaW5kZXg6IGkgfTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gKGFybXlbdHlwZV0ubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yID0gYEVSUiBnZXRVbml0SW5kZXhCeUlkIDogdW5pdCAnJHtJRH0nIG5vdCBmb3VuZGA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYXJteVt0eXBlXSkge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gYEVSUiBnZXRVbml0SW5kZXhCeUlkIDogdW5pdCAke0lEfSBub3QgZm91bmRgO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBgRVJSIGdldFVuaXRJbmRleEJ5SWQgOiAke0lEfSB1bml0IHR5cGUgZG9lc24ndCBleGlzdGA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBhbGVydChlcnJvcik7XG5cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFVuaXQgPSBmdW5jdGlvbiAoSUQpIHtcbiAgICAgICAgbGV0IGFjY2VzcyA9IGdldFVuaXRJbmRleEJ5SWQoSUQpO1xuXG4gICAgICAgIGlmIChhY2Nlc3MgPT09IC0xKSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBgRVJSIGdldFVuaXQgOiAke0lEfSBub3QgZm91bmRgO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFybXlbYWNjZXNzLnR5cGVdW2FjY2Vzcy5pbmRleF07XG4gICAgfVxuXG4gICAgY29uc3Qgd291bmRVbml0ID0gZnVuY3Rpb24gKElEKSB7XG5cbiAgICAgICAgbGV0IGFjY2VzcyA9IGdldFVuaXRJbmRleEJ5SWQoSUQpO1xuXG4gICAgICAgIGlmIChhY2Nlc3MgPT09IC0xKSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBgRVJSIHdvdW5kVW5pdCA6ICR7SUR9IG5vdCBmb3VuZGA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBhcm15W2FjY2Vzcy50eXBlXVthY2Nlc3MuaW5kZXhdLndvdW5kKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGB3b3VuZFVuaXQgOiAke0lEfSBnb3Qgd291bmRlZGApO1xuXG4gICAgICAgIGlmIChhcm15W2FjY2Vzcy50eXBlXVthY2Nlc3MuaW5kZXhdLmVuIDw9IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB3b3VuZFVuaXQgOiAke0lEfSBnb3Qga2lsbGVkYCk7XG4gICAgICAgICAgICBraWxsVW5pdChJRCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IGtpbGxVbml0ID0gZnVuY3Rpb24gKElEKSB7XG5cbiAgICAgICAgbGV0IGFjY2VzcyA9IGdldFVuaXRJbmRleEJ5SWQoSUQpO1xuXG4gICAgICAgIGlmIChhY2Nlc3MgPT09IC0xKSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBgRVJSIGtpbGxVbml0IDogJHtJRH0gbm90IGZvdW5kYDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcm15W2FjY2Vzcy50eXBlXVthY2Nlc3MuaW5kZXhdLmVuID4gMCkge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gYEVSUiBraWxsVW5pdCA6IHVuaXQgaXNuJ3QgZGVhZGBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFybXlbYWNjZXNzLnR5cGVdLnNwbGljZShhY2Nlc3MuaW5kZXgsIDEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYGtpbGxVbml0IDogJHtJRH0gZ290IGtpbGxlZGApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSBmdW5jdGlvbiAoSUQpIHtcblxuICAgICAgICBsZXQgYWNjZXNzID0gZ2V0VW5pdEluZGV4QnlJZChJRCk7XG5cbiAgICAgICAgaWYgKGFjY2VzcyA9PT0gLTEpIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IGBFUlIgcm91dGUgOiAke0lEfSBub3QgZm91bmRgO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFybXlbYWNjZXNzLnR5cGVdW2FjY2Vzcy5pbmRleF0uaXNGbGVlaW5nID09PSAwKSB7XG4gICAgICAgICAgICBhcm15W2FjY2Vzcy50eXBlXVthY2Nlc3MuaW5kZXhdLmZsZWUoKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYHJvdXRlOiAke0lEfSBpcyByb3V0aW5nICFgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFUlIgcm91dGUgOiAke0lEfSBpcyBhbHJlYWR5IHJvdXRlZGApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdW5yb3V0ZSA9IGZ1bmN0aW9uIChJRCkge1xuXG4gICAgICAgIGxldCBhY2Nlc3MgPSBnZXRVbml0SW5kZXhCeUlkKElEKTtcblxuICAgICAgICBpZiAoYWNjZXNzID09PSAtMSkge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gYEVSUiB1bnJvdXRlIDogJHtJRH0gbm90IGZvdW5kYDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcm15W2FjY2Vzcy50eXBlXVthY2Nlc3MuaW5kZXhdLmlzRmxlZWluZyA9PT0gMSkge1xuICAgICAgICAgICAgYXJteVthY2Nlc3MudHlwZV1bYWNjZXNzLmluZGV4XS5zdG9wRmxlZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHVucm91dGU6ICR7SUR9IHJhbGxpZWQgIWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHVucm91dGUgOiAke0lEfSBpcyBub3Qgcm91dGVkYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbmdhZ2VVbml0ID0gZnVuY3Rpb24gKElELCB0YXJnZXRJRCkge1xuICAgICAgICBsZXQgYWNjZXNzID0gZ2V0VW5pdEluZGV4QnlJZChJRCk7XG5cbiAgICAgICAgaWYgKGFjY2VzcyA9PT0gLTEpIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IGBFUlIgZW5nYWdlVW5pdCA6ICR7SUR9IG5vdCBmb3VuZGA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH07XG5cbiAgICAgICAgYXJteVthY2Nlc3MudHlwZV1bYWNjZXNzLmluZGV4XS5lbmdhZ2UodGFyZ2V0SUQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBlbmdhZ2VVbml0IDogJHtJRH0gZW5nYWdlZCBpbiBtZWxlZSB3aXRoICR7dGFyZ2V0SUR9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzZW5nYWdlVW5pdCA9IGZ1bmN0aW9uIChJRCkge1xuICAgICAgICBsZXQgYWNjZXNzID0gZ2V0VW5pdEluZGV4QnlJZChJRCk7XG5cbiAgICAgICAgaWYgKGFjY2VzcyA9PT0gLTEpIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IGBFUlIgZW5nYWdlVW5pdCA6ICR7SUR9IG5vdCBmb3VuZGA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH07XG5cbiAgICAgICAgYXJteVthY2Nlc3MudHlwZV1bYWNjZXNzLmluZGV4XS5kaXNlbmdhZ2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coYGVuZ2FnZVVuaXQgOiAke0lEfSBkaXNlbmdhZ2VkIGZyb20gbWVsZWVgKTtcbiAgICB9XG5cbiAgICBjb25zdCBtaXNzaWxlVGFyZ2V0ID0gZnVuY3Rpb24gKElELCB0YXJnZXRJRCkge1xuICAgICAgICBsZXQgYWNjZXNzID0gZ2V0VW5pdEluZGV4QnlJZChJRCk7XG5cbiAgICAgICAgaWYgKGFjY2VzcyA9PT0gLTEpIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IGBFUlIgbWlzc2lsZVRhcmdldCA6ICR7SUR9IG5vdCBmb3VuZGA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyogaWYgKGFjY2Vzc1thY2Nlc3MudHlwZV1bYWNjZXNzLmluZGV4XS5kaSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gYEVSUiBtaXNzaWxlVGFyZ2V0IDogJHtJRH0gaGF2ZSBubyBtaXNzaWxlIGF0dGFja2A7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gKi9cblxuICAgICAgICBhcm15W2FjY2Vzcy50eXBlXVthY2Nlc3MuaW5kZXhdLm1pc3NpbGVUYXJnZXQodGFyZ2V0SUQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBtaXNzaWxlVGFyZ2V0IDogJHtJRH0gdGFyZ2V0cyAke3RhcmdldElEfSBhdCByYW5nZWApO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbGVlVGFyZ2V0ID0gZnVuY3Rpb24gKElELCB0YXJnZXRJRCkge1xuICAgICAgICBsZXQgYWNjZXNzID0gZ2V0VW5pdEluZGV4QnlJZChJRCk7XG5cbiAgICAgICAgaWYgKGFjY2VzcyA9PT0gLTEpIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IGBFUlIgbWlzc2lsZVRhcmdldCA6ICR7SUR9IG5vdCBmb3VuZGA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH07XG5cbiAgICAgICAgYXJteVthY2Nlc3MudHlwZV1bYWNjZXNzLmluZGV4XS5tZWxlZVRhcmdldCh0YXJnZXRJRCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coYG1lbGVlVGFyZ2V0IDogJHtJRH0gdGFyZ2V0cyAke3RhcmdldElEfSBmb3IgbWVsZWVgKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRBcm15LFxuICAgICAgICBnZXRNaXMsXG4gICAgICAgIGdldENhdixcbiAgICAgICAgZ2V0SW5mLFxuICAgICAgICByZXNldEFybXksXG4gICAgICAgIGFkZFVuaXQsXG4gICAgICAgIGdldFVuaXRJbmRleEJ5SWQsXG4gICAgICAgIGdldFVuaXQsXG4gICAgICAgIHdvdW5kVW5pdCxcbiAgICAgICAga2lsbFVuaXQsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICB1bnJvdXRlLFxuICAgICAgICBlbmdhZ2VVbml0LFxuICAgICAgICBkaXNlbmdhZ2VVbml0LFxuICAgICAgICBtaXNzaWxlVGFyZ2V0LFxuICAgICAgICBtZWxlZVRhcmdldCxcbiAgICB9XG59O1xuXG5sZXQgYXJteUEgPSAoYXJteU1vZHVsZSkoYEFgKTtcbmxldCBhcm15QiA9IChhcm15TW9kdWxlKShgQmApO1xuXG5hcm15QS5hZGRVbml0KCdHYWV0YW4nLCAnQ29uc2NyaXRzJywgJ2luZicsIDIsIG51bGwsIDQsIDIsIDAsIDIsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuYXJteUEuYWRkVW5pdCgnR2FldGFuJywgJ0xhbmNpZXJzJywgJ2luZicsIDQsIG51bGwsIDgsIDIsIDQsIDIsIDMsIDAsIDIsIDAsIDAsIDAsIDAsIDAsIDAsIC0yLCAwKTtcbmFybXlBLmFkZFVuaXQoJ0dhZXRhbicsICdDYXZhbGVyaWUgbG91cmRlJywgJ2NhdicsIDQsIC0yLCAxMCwgNCwgMiwgMiwgNCwgMiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG5hcm15QS5hZGRVbml0KCdHYWV0YW4nLCAnQXJjaGVycyBkXFwnw6lsaXRlJywgJ21pcycsIDEsIDYsIDgsIDMsIDYsIDMsIDUsIDAsIDAsIDAsIDAsIDAsIDIsIDAsIDAsIDAsIDApO1xuXG5cbmFybXlCLmFkZFVuaXQoJ0fDqXJhcmQnLCAnQ29uc2NyaXRzJywgJ2luZicsIDIsIG51bGwsIDQsIDIsIDAsIDIsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuYXJteUIuYWRkVW5pdCgnR8OpcmFyZCcsICdMYW5jaWVycycsICdpbmYnLCA0LCBudWxsLCA4LCAyLCA0LCAyLCAzLCAwLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAtMiwgMCk7XG5hcm15Qi5hZGRVbml0KCdHw6lyYXJkJywgJ0NhdmFsZXJpZSBsb3VyZGUnLCAnY2F2JywgNCwgLTIsIDEwLCA0LCAyLCAyLCA0LCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbmFybXlCLmFkZFVuaXQoJ0fDqXJhcmQnLCAnQXJjaGVycyBkXFwnw6lsaXRlJywgJ21pcycsIDEsIDYsIDgsIDMsIDYsIDMsIDUsIDAsIDAsIDAsIDAsIDAsIDIsIDAsIDAsIDAsIDApO1xuXG5mdW5jdGlvbiBhdHRhY2tSb2xsKGF0a0lELCBhdGssIGRlZklELCBkZWYpIHtcbiAgICBsZXQgcm9sbCA9IGRpY2UxMCgpO1xuICAgIGxldCBhdGtWYWx1ZSA9IHJvbGwgKyBhdGs7XG5cbiAgICAvKiBjb25zb2xlLmxvZyhhdGtJRCk7XG4gICAgY29uc29sZS5sb2coYXRrKTtcbiAgICBjb25zb2xlLmxvZyhkZWZJRCk7XG4gICAgY29uc29sZS5sb2coZGVmKTsgKi9cblxuICAgIGlmIChhdGtWYWx1ZSA8IGRlZikge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHthdGtJRH0gbWlzcyAke2RlZklEfSAocm9sbCAke3JvbGx9KWApO1xuICAgICAgICByZXR1cm4gJ21pc3MnO1xuICAgIH0gZWxzZSBpZiAoYXRrVmFsdWUgPj0gKGRlZiAqIDIpKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coYCR7YXRrSUR9IGhpdCAke2RlZklEfSAocm9sbCAke3JvbGx9KSBhbmQgY3JpdGApO1xuICAgICAgICByZXR1cm4gJ2NyaXQnXG4gICAgfSBlbHNlIGlmIChhdGtWYWx1ZSA+PSBkZWYpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7YXRrSUR9IGhpdCAke2RlZklEfSAocm9sbCAke3JvbGx9KWApO1xuICAgICAgICByZXR1cm4gJ2hpdCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coYEVSUiBhdHRhY2tSb2xsIDogYmFkIHZhbHVlc2ApO1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b0JhdHRsZSgpIHtcblxuXG4gICAgbGV0IHR5cGVTd2l0Y2ggPSBbYG1pc2AsIGBjYXZgLCBgaW5mYF07XG5cbiAgICAvLyBtaXNzaWxlIHBoYXNlXG5cbiAgICBmdW5jdGlvbiBzZXRNaXNzaWxlVGFyZ2V0cygpIHtcbiAgICAgICAgbGV0IGFNaXNzaWxlcyA9IGFybXlBLmdldE1pcygpO1xuICAgICAgICBsZXQgYk1pc3NpbGVzID0gYXJteUIuZ2V0TWlzKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhTWlzc2lsZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgbGV0IHByZVJvbGwgPSBnZXRSYW5kb21JbnQoMCwgMik7XG5cbiAgICAgICAgICAgIGxldCBsaXN0ID0gYXJteUIuZ2V0QXJteSgpW3R5cGVTd2l0Y2hbcHJlUm9sbF1dO1xuXG4gICAgICAgICAgICBsZXQgbWFpblJvbGwgPSBnZXRSYW5kb21JbnQoMCwgKGxpc3QubGVuZ3RoIC0gMSkpO1xuXG4gICAgICAgICAgICBsZXQgdGFyZ2V0SUQgPSBsaXN0W21haW5Sb2xsXS5pbklEO1xuXG4gICAgICAgICAgICBhcm15QS5taXNzaWxlVGFyZ2V0KGFNaXNzaWxlc1tpXS5pbklELCB0YXJnZXRJRCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJNaXNzaWxlcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBsZXQgcHJlUm9sbCA9IGdldFJhbmRvbUludCgwLCAyKTtcblxuICAgICAgICAgICAgbGV0IGxpc3QgPSBhcm15QS5nZXRBcm15KClbdHlwZVN3aXRjaFtwcmVSb2xsXV07XG5cbiAgICAgICAgICAgIGxldCBtYWluUm9sbCA9IGdldFJhbmRvbUludCgwLCAobGlzdC5sZW5ndGggLSAxKSk7XG5cbiAgICAgICAgICAgIGxldCB0YXJnZXRJRCA9IGxpc3RbbWFpblJvbGxdLmluSUQ7XG5cbiAgICAgICAgICAgIGFybXlCLm1pc3NpbGVUYXJnZXQoYk1pc3NpbGVzW2ldLmluSUQsIHRhcmdldElEKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE1pc3NpbGVUYXJnZXRzKCk7XG5cbiAgICBmdW5jdGlvbiBtaXNzaWxlVm9sbGV5KCkge1xuICAgICAgICBsZXQgYU1pc3NpbGVzID0gYXJteUEuZ2V0TWlzKCk7XG4gICAgICAgIGxldCBiTWlzc2lsZXMgPSBhcm15Qi5nZXRNaXMoKTtcbiAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgIGRvIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coaSk7XG5cbiAgICAgICAgICAgIGlmIChhTWlzc2lsZXNbaV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgbWlzc2lsZSA9IGFNaXNzaWxlc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gYXJteUIuZ2V0VW5pdChtaXNzaWxlLmRpVGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGxldCBkaUJvbnVzID0gYGRpVnNgICsgZmlyc3RUb1VwcGVyKHRhcmdldC50eXBlKTsgLy8gbmVlZCB0byBzZXQgZmlyc3QgbGV0dGVyIG9mIHR5cGUgdG8gdXBwZXIgY2FzZSB0byBtYXRjaCBjYW1lbCBjYXNlO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGlCb251cyk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtaXNzaWxlW2RpQm9udXNdKTtcblxuICAgICAgICAgICAgICAgIG1pc3NpbGUuZGkgKz0gbWlzc2lsZVtkaUJvbnVzXTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuZGUgKz0gdGFyZ2V0LmRlVnNNaXM7XG5cbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXR0YWNrUm9sbChtaXNzaWxlLmluSUQsIG1pc3NpbGUuZGksIHRhcmdldC5pbklELCB0YXJnZXQuZGUpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWlzcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdoaXQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJteUIud291bmRVbml0KHRhcmdldC5pbklEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NyaXQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJteUIud291bmRVbml0KHRhcmdldC5pbklEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFybXlCLnJvdXRlKHRhcmdldC5pbklEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJNaXNzaWxlc1tpXSkge1xuICAgICAgICAgICAgICAgIGxldCBtaXNzaWxlID0gYk1pc3NpbGVzW2ldO1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBhcm15QS5nZXRVbml0KG1pc3NpbGUuZGlUYXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRpQm9udXMgPSBgZGlWc2AgKyBmaXJzdFRvVXBwZXIodGFyZ2V0LnR5cGUpOyAvLyBuZWVkIHRvIHNldCBmaXJzdCBsZXR0ZXIgb2YgdHlwZSB0byB1cHBlciBjYXNlIHRvIG1hdGNoIGNhbWVsIGNhc2U7XG5cbiAgICAgICAgICAgICAgICBtaXNzaWxlLmRpICs9IG1pc3NpbGVbZGlCb251c107XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmRlICs9IHRhcmdldC5kZVZzTWlzO1xuXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF0dGFja1JvbGwobWlzc2lsZS5pbklELCBtaXNzaWxlLmRpLCB0YXJnZXQuaW5JRCwgdGFyZ2V0LmRlKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ21pc3MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaGl0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFybXlBLndvdW5kVW5pdCh0YXJnZXQuaW5JRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjcml0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFybXlBLndvdW5kVW5pdCh0YXJnZXQuaW5JRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcm15QS5yb3V0ZSh0YXJnZXQuaW5JRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGkrKztcblxuICAgICAgICB9IHdoaWxlIChhTWlzc2lsZXNbaV0gJiYgYk1pc3NpbGVzW2ldKTtcbiAgICB9XG5cbiAgICBtaXNzaWxlVm9sbGV5KCk7XG59XG5cbnRvQmF0dGxlKCk7XG5jb25zb2xlLmxvZyhhcm15QS5nZXRBcm15KCkpO1xuY29uc29sZS5sb2coYXJteUIuZ2V0QXJteSgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=