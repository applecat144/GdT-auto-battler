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
        IDnum = 0;

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
    }
};

let armyA = (armyModule)(`A`);
let armyB = (armyModule)(`B`);

armyA.addUnit('Gaetan', 'Conscrits', 'inf', 2, null, 4, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyA.addUnit('Gaetan', 'Lanciers', 'inf', 4, null, 8, 2, 4, 2, 3, 0, 2, 0, 0, 0, 0, 0, 0, -2, 0);
armyA.addUnit('Gaetan', 'Cavalerie lourde', 'cav', 4, -2, 10, 4, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyA.addUnit('Gaetan', 'Archers d\'élite', 'mis', 1, 6, 8, 3, 6, 3, 5, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);


armyB.addUnit('Gérard', 'Conscrits', 'inf', 2, null, 4, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyB.addUnit('Gérard', 'Lanciers', 'inf', 4, null, 8, 2, 4, 2, 3, 0, 2, 0, 0, 0, 0, 0, 0, -2, 0);
armyB.addUnit('Gérard', 'Cavalerie lourde', 'cav', 4, -2, 10, 4, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyB.addUnit('Gérard', 'Archers d\'élite', 'mis', 1, 6, 8, 3, 6, 3, 5, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);

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

let typeSwitch = [`mis`, `cav`, `inf`];

function rangePhase() {

    let typeSwitch = [`mis`, `cav`, `inf`];

    let aMissiles = [];

    let a = armyA.getArmy();

    for (let key in a) {

        if (key === `armyID`) {
            continue;
        }

        a[key].forEach((unit) => {
            if (!unit.isEngaged && (unit.di || unit.di === 0)) {
                aMissiles.push(unit);
            }
        })

    }

    let bMissiles = [];

    let b = armyB.getArmy();

    for (let key in b) {

        if (key === `armyID`) {
            continue;
        }

        b[key].forEach((unit) => {
            if (!unit.isEngaged && (unit.di || unit.di === 0)) {
                bMissiles.push(unit)
            }
        })
    }

    let i = 0;

    do {
        /* if (!b[`mis`] && !b[`cav`] && !b[`inf`]) {

            let error = `ERR rangePhase : army B is no more`;
            console.log(error);
            alert(error);
            return -1

        }

        let list;

        do {
            let switchRoll = getRandomInt(0, 2);
            list = b[typeSwitch[switchRoll]];
        } while (!list[0]);

        let shooter = aMissiles[i];

        let target = shooter.diTarget = list[getRandomInt(0, (list.length - 1))];

        console.log(`${shooter.inID} targets ${target.inID} for range attack`);

        let diBonus = `diVs` + firstToUpper(target.type);

        if (shooter[diBonus]) {
            shooter.di += shooter[diBonus];
            console.log(`rangePhase : apply ${shooter[diBonus]} bonys to ${shooter.inID}'s Di`);
        } else {
            console.log(`rangePhase : no Di bonus to apply against this type`);
        }

        if (target.deVsMis) {
            target.de += target.deVsMis;
            console.log(`rangePhase : apply ${target.deVsMis} bonus to ${target.inID}'s De`);
        } else {
            console.log(`rangePhase : no bonus De against range attacks`)
        }

        let result = attackRoll(shooter.inID, shooter.di, target.inID, target.de);

        switch (result) {
            case 'miss':
                console.log(`rangePhase : ${shooter.inID} shoots at ${target.inID} and miss !`);
                break;

            case 'hit':
                console.log(`rangePhase : ${shooter.inID} shoots at ${target.inID} and hit !`);
                armyB.woundUnit(target.inID);
                break;

            case 'crit':
                console.log(`rangePhase : ${shooter.inID} shoots at ${target.inID} and crits !`);
                armyB.woundUnit(target.inID);
                armyB.route(target.inID);
                break;
        }
 */
        missileVolley(i, aMissiles, b, armyB);
        missileVolley(i, bMissiles, a, armyA);

        i++;
    } while (aMissiles[i] || bMissiles[i])

}

rangePhase();

function missileVolley(i, missileList, armyList, armyModuleCallback) {

    if (!armyList[`mis`] && !armyList[`cav`] && !armyList[`inf`]) {

        let error = `ERR rangePhase : army B is no more`;
        console.log(error);
        alert(error);
        return -1

    }

    let list;

    do {
        let switchRoll = getRandomInt(0, 2);
        list = armyList[typeSwitch[switchRoll]];
    } while (!list[0]);

    let shooter = missileList[i];

    let target = shooter.diTarget = list[getRandomInt(0, (list.length - 1))];

    console.log(`${shooter.inID} targets ${target.inID} for range attack`);

    let diBonus = `diVs` + firstToUpper(target.type);

    if (shooter[diBonus]) {
        shooter.di += shooter[diBonus];
        console.log(`rangePhase : apply ${shooter[diBonus]} bonys to ${shooter.inID}'s Di`);
    } else {
        console.log(`rangePhase : no Di bonus to apply against this type`);
    }

    if (target.deVsMis) {
        target.de += target.deVsMis;
        console.log(`rangePhase : apply ${target.deVsMis} bonus to ${target.inID}'s De`);
    } else {
        console.log(`rangePhase : no bonus De against range attacks`)
    }

    let result = attackRoll(shooter.inID, shooter.di, target.inID, target.de);

    switch (result) {
        case 'miss':
            console.log(`rangePhase : ${shooter.inID} shoots at ${target.inID} and miss !`);
            break;

        case 'hit':
            console.log(`rangePhase : ${shooter.inID} shoots at ${target.inID} and hit !`);
            armyModuleCallback.woundUnit(target.inID);
            break;

        case 'crit':
            console.log(`rangePhase : ${shooter.inID} shoots at ${target.inID} and crits !`);
            armyModuleCallback.woundUnit(target.inID);
            armyModuleCallback.route(target.inID);
            break;
    }
} 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhO0FBQy9FOztBQUVBO0FBQ0Esd0NBQXdDLGNBQWMsWUFBWSxhQUFhO0FBQy9FO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsY0FBYyxZQUFZLGFBQWE7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHVtbXktd2Vic2l0ZS1zdGFydGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9kdW1teS13ZWJzaXRlLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2R1bW15LXdlYnNpdGUtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2R1bW15LXdlYnNpdGUtc3RhcnRlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9kdW1teS13ZWJzaXRlLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZHVtbXktd2Vic2l0ZS1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kdW1teS13ZWJzaXRlLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZHVtbXktd2Vic2l0ZS1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2R1bW15LXdlYnNpdGUtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2R1bW15LXdlYnNpdGUtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2R1bW15LXdlYnNpdGUtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kdW1teS13ZWJzaXRlLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZHVtbXktd2Vic2l0ZS1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kdW1teS13ZWJzaXRlLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kdW1teS13ZWJzaXRlLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kdW1teS13ZWJzaXRlLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2R1bW15LXdlYnNpdGUtc3RhcnRlci8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7OztFQUdFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmNvbnN0IGZpcnN0VG9VcHBlciA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICBsZXQgYXJyID0gc3RyLnNwbGl0KFwiXCIpO1xuXG4gICAgYXJyWzBdID0gYXJyWzBdLnRvVXBwZXJDYXNlKCk7XG5cbiAgICBsZXQgdXBwZWQgPSBcIlwiO1xuXG4gICAgYXJyLmZvckVhY2goKGxldHRlcikgPT4geyB1cHBlZCArPSBsZXR0ZXIgfSk7XG5cbiAgICByZXR1cm4gdXBwZWQ7XG59XG5cbmNvbnN0IGRpY2UxMCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSArIDEpO1xufVxuXG5jb25zdCBnZXRSYW5kb21JbnQgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuY29uc3QgdW5pdEZhYyA9IGZ1bmN0aW9uIChvd25lciwgbmFtZSwgdHlwZSwgaW5JRCwgbWUsIGRpLCBkZSwgbXYsIG1vLCBlbiwgY28sIGNoYXJnZUJvbnVzLCBtZVZzQ2F2LCBtZVZzSW5mLCBtZVZzTWlzLFxuICAgIGRpVnNDYXYsIGRpVnNJbmYsIGRpVnNNaXMsIGRlVnNDYXYsIGRlVnNJbmYsIGRlVnNNaXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBvd25lcixcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgaW5JRCxcbiAgICAgICAgbWUsXG4gICAgICAgIGRpLFxuICAgICAgICBkZSxcbiAgICAgICAgbXYsXG4gICAgICAgIG1vLFxuICAgICAgICBlbixcbiAgICAgICAgY28sXG4gICAgICAgIGNoYXJnZUJvbnVzLFxuICAgICAgICBtZVZzQ2F2LFxuICAgICAgICBtZVZzSW5mLFxuICAgICAgICBtZVZzTWlzLFxuICAgICAgICBkaVZzQ2F2LFxuICAgICAgICBkaVZzSW5mLFxuICAgICAgICBkaVZzTWlzLFxuICAgICAgICBkZVZzQ2F2LFxuICAgICAgICBkZVZzSW5mLFxuICAgICAgICBkZVZzTWlzLFxuICAgICAgICBpc0VuZ2FnZWQ6IG51bGwsXG4gICAgICAgIGlzRmxlZWluZzogMCxcbiAgICAgICAgd291bmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW4gLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmxlZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNGbGVlaW5nID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZsZWVpbmcgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdG9wRmxlZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNGbGVlaW5nID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZsZWVpbmcgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbmdhZ2U6IGZ1bmN0aW9uICh0YXJnZXRJRCkge1xuICAgICAgICAgICAgdGhpcy5pc0VuZ2FnZWQgPSB0YXJnZXRJRDtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzZW5nYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmlzRW5nYWdlZCA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIG1pc3NpbGVUYXJnZXQ6IGZ1bmN0aW9uICh0YXJnZXRJRCkge1xuICAgICAgICAgICAgdGhpcy5kaVRhcmdldCA9IHRhcmdldElEO1xuICAgICAgICB9LFxuICAgICAgICBtZWxlZVRhcmdldDogZnVuY3Rpb24gKHRhcmdldElEKSB7XG4gICAgICAgICAgICB0aGlzLm1lVGFyZ2V0ID0gdGFyZ2V0SUQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGFybXlNb2R1bGUgPSBmdW5jdGlvbiAobGV0dGVyKSB7XG5cbiAgICBsZXQgSURudW0gPSAwO1xuXG4gICAgbGV0IGFybXkgPSB7XG4gICAgICAgIGFybXlJRDogYGFybXlgICsgbGV0dGVyLFxuICAgICAgICBtaXM6IFtdLFxuICAgICAgICBjYXY6IFtdLFxuICAgICAgICBpbmY6IFtdXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QXJteSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFybXk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TWlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJteVtgbWlzYF07XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q2F2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJteVtgY2F2YF07XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SW5mID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJteVtgaW5mYF07XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRBcm15ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBJRG51bSA9IDA7XG5cbiAgICAgICAgYXJteS5taXMgPSBbXTtcbiAgICAgICAgYXJteS5jYXYgPSBbXTtcbiAgICAgICAgYXJteS5pbmYgPSBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRVbml0ID0gZnVuY3Rpb24gKG93bmVyLCBuYW1lLCB0eXBlLCBtZSwgZGksIGRlLCBtdiwgbW8sIGVuLCBjbywgY2hhcmdlQm9udXMsIG1lVnNDYXYsIG1lVnNJbmYsIG1lVnNNaXMsXG4gICAgICAgIGRpVnNDYXYsIGRpVnNJbmYsIGRpVnNNaXMsIGRlVnNDYXYsIGRlVnNJbmYsIGRlVnNNaXMpIHtcblxuICAgICAgICBsZXQgaW5JRCA9IGxldHRlciArIGAuYCArIHR5cGUgKyBgLWAgKyBJRG51bTtcblxuICAgICAgICBJRG51bSsrO1xuXG4gICAgICAgIGxldCBuZXdVbml0ID0gdW5pdEZhYyhvd25lciwgbmFtZSwgdHlwZSwgaW5JRCwgbWUsIGRpLCBkZSwgbXYsIG1vLCBlbiwgY28sIGNoYXJnZUJvbnVzLCBtZVZzQ2F2LCBtZVZzSW5mLCBtZVZzTWlzLFxuICAgICAgICAgICAgZGlWc0NhdiwgZGlWc0luZiwgZGlWc01pcywgZGVWc0NhdiwgZGVWc0luZiwgZGVWc01pcyk7XG5cbiAgICAgICAgaWYgKGFybXlbbmV3VW5pdC50eXBlXSkge1xuXG4gICAgICAgICAgICBhcm15W25ld1VuaXQudHlwZV0ucHVzaChuZXdVbml0KTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7bmV3VW5pdC5pbklEfSBzdWNjZXNzZnVsbHkgY3JlYXRlZGApXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IGBFUlIgYWRkVW5pdCA6IHVuaXQgdHlwZSBkb2Vzbid0IGV4aXN0YDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcblxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFVuaXRJbmRleEJ5SWQgPSBmdW5jdGlvbiAoSUQpIHtcblxuICAgICAgICAvLyB0aGlzIGZ1bmN0aW9uIHRha2VzIGFuIElEIGFuZCByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBhcnJheSBhbmQgdGhlIGluZGV4IGluIHRoYXQgYXJyYXkgb2YgdGhlXG4gICAgICAgIC8vIGlucHV0ZWQgSUQuXG5cbiAgICAgICAgbGV0IHR5cGUgPSBJRC5zcGxpdChcIi1cIilbMF0uc3BsaXQoXCIuXCIpWzFdO1xuXG4gICAgICAgIGlmIChhcm15W3R5cGVdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJteVt0eXBlXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChhcm15W3R5cGVdW2ldLmluSUQgPT09IElEKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IHR5cGUsIGluZGV4OiBpIH07XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IChhcm15W3R5cGVdLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlcnJvciA9IGBFUlIgZ2V0VW5pdEluZGV4QnlJZCA6IHVuaXQgJyR7SUR9JyBub3QgZm91bmRgO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGFybXlbdHlwZV0pIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IGBFUlIgZ2V0VW5pdEluZGV4QnlJZCA6IHVuaXQgJHtJRH0gbm90IGZvdW5kYDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcblxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gYEVSUiBnZXRVbml0SW5kZXhCeUlkIDogJHtJRH0gdW5pdCB0eXBlIGRvZXNuJ3QgZXhpc3RgO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRVbml0ID0gZnVuY3Rpb24gKElEKSB7XG4gICAgICAgIGxldCBhY2Nlc3MgPSBnZXRVbml0SW5kZXhCeUlkKElEKTtcblxuICAgICAgICBpZiAoYWNjZXNzID09PSAtMSkge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gYEVSUiBnZXRVbml0IDogJHtJRH0gbm90IGZvdW5kYDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcm15W2FjY2Vzcy50eXBlXVthY2Nlc3MuaW5kZXhdO1xuICAgIH1cblxuICAgIGNvbnN0IHdvdW5kVW5pdCA9IGZ1bmN0aW9uIChJRCkge1xuXG4gICAgICAgIGxldCBhY2Nlc3MgPSBnZXRVbml0SW5kZXhCeUlkKElEKTtcblxuICAgICAgICBpZiAoYWNjZXNzID09PSAtMSkge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gYEVSUiB3b3VuZFVuaXQgOiAke0lEfSBub3QgZm91bmRgO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJteVthY2Nlc3MudHlwZV1bYWNjZXNzLmluZGV4XS53b3VuZCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhgd291bmRVbml0IDogJHtJRH0gZ290IHdvdW5kZWRgKTtcblxuICAgICAgICBpZiAoYXJteVthY2Nlc3MudHlwZV1bYWNjZXNzLmluZGV4XS5lbiA8PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgd291bmRVbml0IDogJHtJRH0gZ290IGtpbGxlZGApO1xuICAgICAgICAgICAga2lsbFVuaXQoSUQpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBraWxsVW5pdCA9IGZ1bmN0aW9uIChJRCkge1xuXG4gICAgICAgIGxldCBhY2Nlc3MgPSBnZXRVbml0SW5kZXhCeUlkKElEKTtcblxuICAgICAgICBpZiAoYWNjZXNzID09PSAtMSkge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gYEVSUiBraWxsVW5pdCA6ICR7SUR9IG5vdCBmb3VuZGA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJteVthY2Nlc3MudHlwZV1bYWNjZXNzLmluZGV4XS5lbiA+IDApIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IGBFUlIga2lsbFVuaXQgOiB1bml0IGlzbid0IGRlYWRgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcm15W2FjY2Vzcy50eXBlXS5zcGxpY2UoYWNjZXNzLmluZGV4LCAxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBraWxsVW5pdCA6ICR7SUR9IGdvdCBraWxsZWRgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gZnVuY3Rpb24gKElEKSB7XG5cbiAgICAgICAgbGV0IGFjY2VzcyA9IGdldFVuaXRJbmRleEJ5SWQoSUQpO1xuXG4gICAgICAgIGlmIChhY2Nlc3MgPT09IC0xKSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBgRVJSIHJvdXRlIDogJHtJRH0gbm90IGZvdW5kYDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcm15W2FjY2Vzcy50eXBlXVthY2Nlc3MuaW5kZXhdLmlzRmxlZWluZyA9PT0gMCkge1xuICAgICAgICAgICAgYXJteVthY2Nlc3MudHlwZV1bYWNjZXNzLmluZGV4XS5mbGVlKCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByb3V0ZTogJHtJRH0gaXMgcm91dGluZyAhYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRVJSIHJvdXRlIDogJHtJRH0gaXMgYWxyZWFkeSByb3V0ZWRgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHVucm91dGUgPSBmdW5jdGlvbiAoSUQpIHtcblxuICAgICAgICBsZXQgYWNjZXNzID0gZ2V0VW5pdEluZGV4QnlJZChJRCk7XG5cbiAgICAgICAgaWYgKGFjY2VzcyA9PT0gLTEpIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IGBFUlIgdW5yb3V0ZSA6ICR7SUR9IG5vdCBmb3VuZGA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJteVthY2Nlc3MudHlwZV1bYWNjZXNzLmluZGV4XS5pc0ZsZWVpbmcgPT09IDEpIHtcbiAgICAgICAgICAgIGFybXlbYWNjZXNzLnR5cGVdW2FjY2Vzcy5pbmRleF0uc3RvcEZsZWUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB1bnJvdXRlOiAke0lEfSByYWxsaWVkICFgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB1bnJvdXRlIDogJHtJRH0gaXMgbm90IHJvdXRlZGApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW5nYWdlVW5pdCA9IGZ1bmN0aW9uIChJRCwgdGFyZ2V0SUQpIHtcbiAgICAgICAgbGV0IGFjY2VzcyA9IGdldFVuaXRJbmRleEJ5SWQoSUQpO1xuXG4gICAgICAgIGlmIChhY2Nlc3MgPT09IC0xKSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBgRVJSIGVuZ2FnZVVuaXQgOiAke0lEfSBub3QgZm91bmRgO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9O1xuXG4gICAgICAgIGFybXlbYWNjZXNzLnR5cGVdW2FjY2Vzcy5pbmRleF0uZW5nYWdlKHRhcmdldElEKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgZW5nYWdlVW5pdCA6ICR7SUR9IGVuZ2FnZWQgaW4gbWVsZWUgd2l0aCAke3RhcmdldElEfWApO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc2VuZ2FnZVVuaXQgPSBmdW5jdGlvbiAoSUQpIHtcbiAgICAgICAgbGV0IGFjY2VzcyA9IGdldFVuaXRJbmRleEJ5SWQoSUQpO1xuXG4gICAgICAgIGlmIChhY2Nlc3MgPT09IC0xKSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBgRVJSIGVuZ2FnZVVuaXQgOiAke0lEfSBub3QgZm91bmRgO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9O1xuXG4gICAgICAgIGFybXlbYWNjZXNzLnR5cGVdW2FjY2Vzcy5pbmRleF0uZGlzZW5nYWdlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBlbmdhZ2VVbml0IDogJHtJRH0gZGlzZW5nYWdlZCBmcm9tIG1lbGVlYCk7XG4gICAgfVxuXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldEFybXksXG4gICAgICAgIGdldE1pcyxcbiAgICAgICAgZ2V0Q2F2LFxuICAgICAgICBnZXRJbmYsXG4gICAgICAgIHJlc2V0QXJteSxcbiAgICAgICAgYWRkVW5pdCxcbiAgICAgICAgZ2V0VW5pdEluZGV4QnlJZCxcbiAgICAgICAgZ2V0VW5pdCxcbiAgICAgICAgd291bmRVbml0LFxuICAgICAgICBraWxsVW5pdCxcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHVucm91dGUsXG4gICAgICAgIGVuZ2FnZVVuaXQsXG4gICAgICAgIGRpc2VuZ2FnZVVuaXQsXG4gICAgfVxufTtcblxubGV0IGFybXlBID0gKGFybXlNb2R1bGUpKGBBYCk7XG5sZXQgYXJteUIgPSAoYXJteU1vZHVsZSkoYEJgKTtcblxuYXJteUEuYWRkVW5pdCgnR2FldGFuJywgJ0NvbnNjcml0cycsICdpbmYnLCAyLCBudWxsLCA0LCAyLCAwLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbmFybXlBLmFkZFVuaXQoJ0dhZXRhbicsICdMYW5jaWVycycsICdpbmYnLCA0LCBudWxsLCA4LCAyLCA0LCAyLCAzLCAwLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAtMiwgMCk7XG5hcm15QS5hZGRVbml0KCdHYWV0YW4nLCAnQ2F2YWxlcmllIGxvdXJkZScsICdjYXYnLCA0LCAtMiwgMTAsIDQsIDIsIDIsIDQsIDIsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuYXJteUEuYWRkVW5pdCgnR2FldGFuJywgJ0FyY2hlcnMgZFxcJ8OpbGl0ZScsICdtaXMnLCAxLCA2LCA4LCAzLCA2LCAzLCA1LCAwLCAwLCAwLCAwLCAyLCAwLCAwLCAwLCAwLCAwKTtcblxuXG5hcm15Qi5hZGRVbml0KCdHw6lyYXJkJywgJ0NvbnNjcml0cycsICdpbmYnLCAyLCBudWxsLCA0LCAyLCAwLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbmFybXlCLmFkZFVuaXQoJ0fDqXJhcmQnLCAnTGFuY2llcnMnLCAnaW5mJywgNCwgbnVsbCwgOCwgMiwgNCwgMiwgMywgMCwgMiwgMCwgMCwgMCwgMCwgMCwgMCwgLTIsIDApO1xuYXJteUIuYWRkVW5pdCgnR8OpcmFyZCcsICdDYXZhbGVyaWUgbG91cmRlJywgJ2NhdicsIDQsIC0yLCAxMCwgNCwgMiwgMiwgNCwgMiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG5hcm15Qi5hZGRVbml0KCdHw6lyYXJkJywgJ0FyY2hlcnMgZFxcJ8OpbGl0ZScsICdtaXMnLCAxLCA2LCA4LCAzLCA2LCAzLCA1LCAwLCAwLCAwLCAwLCAyLCAwLCAwLCAwLCAwLCAwKTtcblxuZnVuY3Rpb24gYXR0YWNrUm9sbChhdGtJRCwgYXRrLCBkZWZJRCwgZGVmKSB7XG4gICAgbGV0IHJvbGwgPSBkaWNlMTAoKTtcbiAgICBsZXQgYXRrVmFsdWUgPSByb2xsICsgYXRrO1xuXG4gICAgLyogY29uc29sZS5sb2coYXRrSUQpO1xuICAgIGNvbnNvbGUubG9nKGF0ayk7XG4gICAgY29uc29sZS5sb2coZGVmSUQpO1xuICAgIGNvbnNvbGUubG9nKGRlZik7ICovXG5cbiAgICBpZiAoYXRrVmFsdWUgPCBkZWYpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7YXRrSUR9IG1pc3MgJHtkZWZJRH0gKHJvbGwgJHtyb2xsfSlgKTtcbiAgICAgICAgcmV0dXJuICdtaXNzJztcbiAgICB9IGVsc2UgaWYgKGF0a1ZhbHVlID49IChkZWYgKiAyKSkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGAke2F0a0lEfSBoaXQgJHtkZWZJRH0gKHJvbGwgJHtyb2xsfSkgYW5kIGNyaXRgKTtcbiAgICAgICAgcmV0dXJuICdjcml0J1xuICAgIH0gZWxzZSBpZiAoYXRrVmFsdWUgPj0gZGVmKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2F0a0lEfSBoaXQgJHtkZWZJRH0gKHJvbGwgJHtyb2xsfSlgKTtcbiAgICAgICAgcmV0dXJuICdoaXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFUlIgYXR0YWNrUm9sbCA6IGJhZCB2YWx1ZXNgKTtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9CYXR0bGUoKSB7XG5cblxuICAgIGxldCB0eXBlU3dpdGNoID0gW2BtaXNgLCBgY2F2YCwgYGluZmBdO1xuXG4gICAgLy8gbWlzc2lsZSBwaGFzZVxuXG4gICAgZnVuY3Rpb24gc2V0TWlzc2lsZVRhcmdldHMoKSB7XG4gICAgICAgIGxldCBhTWlzc2lsZXMgPSBhcm15QS5nZXRNaXMoKTtcbiAgICAgICAgbGV0IGJNaXNzaWxlcyA9IGFybXlCLmdldE1pcygpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYU1pc3NpbGVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBwcmVSb2xsID0gZ2V0UmFuZG9tSW50KDAsIDIpO1xuXG4gICAgICAgICAgICBsZXQgbGlzdCA9IGFybXlCLmdldEFybXkoKVt0eXBlU3dpdGNoW3ByZVJvbGxdXTtcblxuICAgICAgICAgICAgbGV0IG1haW5Sb2xsID0gZ2V0UmFuZG9tSW50KDAsIChsaXN0Lmxlbmd0aCAtIDEpKTtcblxuICAgICAgICAgICAgbGV0IHRhcmdldElEID0gbGlzdFttYWluUm9sbF0uaW5JRDtcblxuICAgICAgICAgICAgYXJteUEubWlzc2lsZVRhcmdldChhTWlzc2lsZXNbaV0uaW5JRCwgdGFyZ2V0SUQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiTWlzc2lsZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgbGV0IHByZVJvbGwgPSBnZXRSYW5kb21JbnQoMCwgMik7XG5cbiAgICAgICAgICAgIGxldCBsaXN0ID0gYXJteUEuZ2V0QXJteSgpW3R5cGVTd2l0Y2hbcHJlUm9sbF1dO1xuXG4gICAgICAgICAgICBsZXQgbWFpblJvbGwgPSBnZXRSYW5kb21JbnQoMCwgKGxpc3QubGVuZ3RoIC0gMSkpO1xuXG4gICAgICAgICAgICBsZXQgdGFyZ2V0SUQgPSBsaXN0W21haW5Sb2xsXS5pbklEO1xuXG4gICAgICAgICAgICBhcm15Qi5taXNzaWxlVGFyZ2V0KGJNaXNzaWxlc1tpXS5pbklELCB0YXJnZXRJRCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRNaXNzaWxlVGFyZ2V0cygpO1xuXG4gICAgZnVuY3Rpb24gbWlzc2lsZVZvbGxleSgpIHtcbiAgICAgICAgbGV0IGFNaXNzaWxlcyA9IGFybXlBLmdldE1pcygpO1xuICAgICAgICBsZXQgYk1pc3NpbGVzID0gYXJteUIuZ2V0TWlzKCk7XG4gICAgICAgIGxldCBpID0gMDtcblxuICAgICAgICBkbyB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpO1xuXG4gICAgICAgICAgICBpZiAoYU1pc3NpbGVzW2ldKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1pc3NpbGUgPSBhTWlzc2lsZXNbaV07XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGFybXlCLmdldFVuaXQobWlzc2lsZS5kaVRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGlCb251cyA9IGBkaVZzYCArIGZpcnN0VG9VcHBlcih0YXJnZXQudHlwZSk7IC8vIG5lZWQgdG8gc2V0IGZpcnN0IGxldHRlciBvZiB0eXBlIHRvIHVwcGVyIGNhc2UgdG8gbWF0Y2ggY2FtZWwgY2FzZTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpQm9udXMpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWlzc2lsZVtkaUJvbnVzXSk7XG5cbiAgICAgICAgICAgICAgICBtaXNzaWxlLmRpICs9IG1pc3NpbGVbZGlCb251c107XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmRlICs9IHRhcmdldC5kZVZzTWlzO1xuXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF0dGFja1JvbGwobWlzc2lsZS5pbklELCBtaXNzaWxlLmRpLCB0YXJnZXQuaW5JRCwgdGFyZ2V0LmRlKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ21pc3MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaGl0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFybXlCLndvdW5kVW5pdCh0YXJnZXQuaW5JRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjcml0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFybXlCLndvdW5kVW5pdCh0YXJnZXQuaW5JRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcm15Qi5yb3V0ZSh0YXJnZXQuaW5JRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChiTWlzc2lsZXNbaV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgbWlzc2lsZSA9IGJNaXNzaWxlc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gYXJteUEuZ2V0VW5pdChtaXNzaWxlLmRpVGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGxldCBkaUJvbnVzID0gYGRpVnNgICsgZmlyc3RUb1VwcGVyKHRhcmdldC50eXBlKTsgLy8gbmVlZCB0byBzZXQgZmlyc3QgbGV0dGVyIG9mIHR5cGUgdG8gdXBwZXIgY2FzZSB0byBtYXRjaCBjYW1lbCBjYXNlO1xuXG4gICAgICAgICAgICAgICAgbWlzc2lsZS5kaSArPSBtaXNzaWxlW2RpQm9udXNdO1xuICAgICAgICAgICAgICAgIHRhcmdldC5kZSArPSB0YXJnZXQuZGVWc01pcztcblxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBhdHRhY2tSb2xsKG1pc3NpbGUuaW5JRCwgbWlzc2lsZS5kaSwgdGFyZ2V0LmluSUQsIHRhcmdldC5kZSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdtaXNzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2hpdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcm15QS53b3VuZFVuaXQodGFyZ2V0LmluSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY3JpdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcm15QS53b3VuZFVuaXQodGFyZ2V0LmluSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJteUEucm91dGUodGFyZ2V0LmluSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpKys7XG5cbiAgICAgICAgfSB3aGlsZSAoYU1pc3NpbGVzW2ldICYmIGJNaXNzaWxlc1tpXSk7XG4gICAgfVxuXG4gICAgbWlzc2lsZVZvbGxleSgpO1xufVxuXG5sZXQgdHlwZVN3aXRjaCA9IFtgbWlzYCwgYGNhdmAsIGBpbmZgXTtcblxuZnVuY3Rpb24gcmFuZ2VQaGFzZSgpIHtcblxuICAgIGxldCB0eXBlU3dpdGNoID0gW2BtaXNgLCBgY2F2YCwgYGluZmBdO1xuXG4gICAgbGV0IGFNaXNzaWxlcyA9IFtdO1xuXG4gICAgbGV0IGEgPSBhcm15QS5nZXRBcm15KCk7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gYSkge1xuXG4gICAgICAgIGlmIChrZXkgPT09IGBhcm15SURgKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFba2V5XS5mb3JFYWNoKCh1bml0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXVuaXQuaXNFbmdhZ2VkICYmICh1bml0LmRpIHx8IHVuaXQuZGkgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgYU1pc3NpbGVzLnB1c2godW5pdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBsZXQgYk1pc3NpbGVzID0gW107XG5cbiAgICBsZXQgYiA9IGFybXlCLmdldEFybXkoKTtcblxuICAgIGZvciAobGV0IGtleSBpbiBiKSB7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gYGFybXlJRGApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYltrZXldLmZvckVhY2goKHVuaXQpID0+IHtcbiAgICAgICAgICAgIGlmICghdW5pdC5pc0VuZ2FnZWQgJiYgKHVuaXQuZGkgfHwgdW5pdC5kaSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBiTWlzc2lsZXMucHVzaCh1bml0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGxldCBpID0gMDtcblxuICAgIGRvIHtcbiAgICAgICAgLyogaWYgKCFiW2BtaXNgXSAmJiAhYltgY2F2YF0gJiYgIWJbYGluZmBdKSB7XG5cbiAgICAgICAgICAgIGxldCBlcnJvciA9IGBFUlIgcmFuZ2VQaGFzZSA6IGFybXkgQiBpcyBubyBtb3JlYDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiAtMVxuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGlzdDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZXQgc3dpdGNoUm9sbCA9IGdldFJhbmRvbUludCgwLCAyKTtcbiAgICAgICAgICAgIGxpc3QgPSBiW3R5cGVTd2l0Y2hbc3dpdGNoUm9sbF1dO1xuICAgICAgICB9IHdoaWxlICghbGlzdFswXSk7XG5cbiAgICAgICAgbGV0IHNob290ZXIgPSBhTWlzc2lsZXNbaV07XG5cbiAgICAgICAgbGV0IHRhcmdldCA9IHNob290ZXIuZGlUYXJnZXQgPSBsaXN0W2dldFJhbmRvbUludCgwLCAobGlzdC5sZW5ndGggLSAxKSldO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3Nob290ZXIuaW5JRH0gdGFyZ2V0cyAke3RhcmdldC5pbklEfSBmb3IgcmFuZ2UgYXR0YWNrYCk7XG5cbiAgICAgICAgbGV0IGRpQm9udXMgPSBgZGlWc2AgKyBmaXJzdFRvVXBwZXIodGFyZ2V0LnR5cGUpO1xuXG4gICAgICAgIGlmIChzaG9vdGVyW2RpQm9udXNdKSB7XG4gICAgICAgICAgICBzaG9vdGVyLmRpICs9IHNob290ZXJbZGlCb251c107XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcmFuZ2VQaGFzZSA6IGFwcGx5ICR7c2hvb3RlcltkaUJvbnVzXX0gYm9ueXMgdG8gJHtzaG9vdGVyLmluSUR9J3MgRGlgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByYW5nZVBoYXNlIDogbm8gRGkgYm9udXMgdG8gYXBwbHkgYWdhaW5zdCB0aGlzIHR5cGVgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQuZGVWc01pcykge1xuICAgICAgICAgICAgdGFyZ2V0LmRlICs9IHRhcmdldC5kZVZzTWlzO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHJhbmdlUGhhc2UgOiBhcHBseSAke3RhcmdldC5kZVZzTWlzfSBib251cyB0byAke3RhcmdldC5pbklEfSdzIERlYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcmFuZ2VQaGFzZSA6IG5vIGJvbnVzIERlIGFnYWluc3QgcmFuZ2UgYXR0YWNrc2ApXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gYXR0YWNrUm9sbChzaG9vdGVyLmluSUQsIHNob290ZXIuZGksIHRhcmdldC5pbklELCB0YXJnZXQuZGUpO1xuXG4gICAgICAgIHN3aXRjaCAocmVzdWx0KSB7XG4gICAgICAgICAgICBjYXNlICdtaXNzJzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmFuZ2VQaGFzZSA6ICR7c2hvb3Rlci5pbklEfSBzaG9vdHMgYXQgJHt0YXJnZXQuaW5JRH0gYW5kIG1pc3MgIWApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdoaXQnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGByYW5nZVBoYXNlIDogJHtzaG9vdGVyLmluSUR9IHNob290cyBhdCAke3RhcmdldC5pbklEfSBhbmQgaGl0ICFgKTtcbiAgICAgICAgICAgICAgICBhcm15Qi53b3VuZFVuaXQodGFyZ2V0LmluSUQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdjcml0JzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmFuZ2VQaGFzZSA6ICR7c2hvb3Rlci5pbklEfSBzaG9vdHMgYXQgJHt0YXJnZXQuaW5JRH0gYW5kIGNyaXRzICFgKTtcbiAgICAgICAgICAgICAgICBhcm15Qi53b3VuZFVuaXQodGFyZ2V0LmluSUQpO1xuICAgICAgICAgICAgICAgIGFybXlCLnJvdXRlKHRhcmdldC5pbklEKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICovXG4gICAgICAgIG1pc3NpbGVWb2xsZXkoaSwgYU1pc3NpbGVzLCBiLCBhcm15Qik7XG4gICAgICAgIG1pc3NpbGVWb2xsZXkoaSwgYk1pc3NpbGVzLCBhLCBhcm15QSk7XG5cbiAgICAgICAgaSsrO1xuICAgIH0gd2hpbGUgKGFNaXNzaWxlc1tpXSB8fCBiTWlzc2lsZXNbaV0pXG5cbn1cblxucmFuZ2VQaGFzZSgpO1xuXG5mdW5jdGlvbiBtaXNzaWxlVm9sbGV5KGksIG1pc3NpbGVMaXN0LCBhcm15TGlzdCwgYXJteU1vZHVsZUNhbGxiYWNrKSB7XG5cbiAgICBpZiAoIWFybXlMaXN0W2BtaXNgXSAmJiAhYXJteUxpc3RbYGNhdmBdICYmICFhcm15TGlzdFtgaW5mYF0pIHtcblxuICAgICAgICBsZXQgZXJyb3IgPSBgRVJSIHJhbmdlUGhhc2UgOiBhcm15IEIgaXMgbm8gbW9yZWA7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICByZXR1cm4gLTFcblxuICAgIH1cblxuICAgIGxldCBsaXN0O1xuXG4gICAgZG8ge1xuICAgICAgICBsZXQgc3dpdGNoUm9sbCA9IGdldFJhbmRvbUludCgwLCAyKTtcbiAgICAgICAgbGlzdCA9IGFybXlMaXN0W3R5cGVTd2l0Y2hbc3dpdGNoUm9sbF1dO1xuICAgIH0gd2hpbGUgKCFsaXN0WzBdKTtcblxuICAgIGxldCBzaG9vdGVyID0gbWlzc2lsZUxpc3RbaV07XG5cbiAgICBsZXQgdGFyZ2V0ID0gc2hvb3Rlci5kaVRhcmdldCA9IGxpc3RbZ2V0UmFuZG9tSW50KDAsIChsaXN0Lmxlbmd0aCAtIDEpKV07XG5cbiAgICBjb25zb2xlLmxvZyhgJHtzaG9vdGVyLmluSUR9IHRhcmdldHMgJHt0YXJnZXQuaW5JRH0gZm9yIHJhbmdlIGF0dGFja2ApO1xuXG4gICAgbGV0IGRpQm9udXMgPSBgZGlWc2AgKyBmaXJzdFRvVXBwZXIodGFyZ2V0LnR5cGUpO1xuXG4gICAgaWYgKHNob290ZXJbZGlCb251c10pIHtcbiAgICAgICAgc2hvb3Rlci5kaSArPSBzaG9vdGVyW2RpQm9udXNdO1xuICAgICAgICBjb25zb2xlLmxvZyhgcmFuZ2VQaGFzZSA6IGFwcGx5ICR7c2hvb3RlcltkaUJvbnVzXX0gYm9ueXMgdG8gJHtzaG9vdGVyLmluSUR9J3MgRGlgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgcmFuZ2VQaGFzZSA6IG5vIERpIGJvbnVzIHRvIGFwcGx5IGFnYWluc3QgdGhpcyB0eXBlYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5kZVZzTWlzKSB7XG4gICAgICAgIHRhcmdldC5kZSArPSB0YXJnZXQuZGVWc01pcztcbiAgICAgICAgY29uc29sZS5sb2coYHJhbmdlUGhhc2UgOiBhcHBseSAke3RhcmdldC5kZVZzTWlzfSBib251cyB0byAke3RhcmdldC5pbklEfSdzIERlYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coYHJhbmdlUGhhc2UgOiBubyBib251cyBEZSBhZ2FpbnN0IHJhbmdlIGF0dGFja3NgKVxuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSBhdHRhY2tSb2xsKHNob290ZXIuaW5JRCwgc2hvb3Rlci5kaSwgdGFyZ2V0LmluSUQsIHRhcmdldC5kZSk7XG5cbiAgICBzd2l0Y2ggKHJlc3VsdCkge1xuICAgICAgICBjYXNlICdtaXNzJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByYW5nZVBoYXNlIDogJHtzaG9vdGVyLmluSUR9IHNob290cyBhdCAke3RhcmdldC5pbklEfSBhbmQgbWlzcyAhYCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdoaXQnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYHJhbmdlUGhhc2UgOiAke3Nob290ZXIuaW5JRH0gc2hvb3RzIGF0ICR7dGFyZ2V0LmluSUR9IGFuZCBoaXQgIWApO1xuICAgICAgICAgICAgYXJteU1vZHVsZUNhbGxiYWNrLndvdW5kVW5pdCh0YXJnZXQuaW5JRCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdjcml0JzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByYW5nZVBoYXNlIDogJHtzaG9vdGVyLmluSUR9IHNob290cyBhdCAke3RhcmdldC5pbklEfSBhbmQgY3JpdHMgIWApO1xuICAgICAgICAgICAgYXJteU1vZHVsZUNhbGxiYWNrLndvdW5kVW5pdCh0YXJnZXQuaW5JRCk7XG4gICAgICAgICAgICBhcm15TW9kdWxlQ2FsbGJhY2sucm91dGUodGFyZ2V0LmluSUQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=