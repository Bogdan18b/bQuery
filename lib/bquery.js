/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DomNodeCollection {\n  constructor(htmlElements) {\n    this.htmlElements = htmlElements;\n  }\n\n  html(element) {\n    if (typeof element === 'string') {\n      this.htmlElements.map(el => {\n        return el.innerHTML = element;\n      });\n    } else if (this.htmlElements.length > 0) {\n      return this.htmlElements[0].innerHTML;\n    }\n  }\n\n  empty() {\n    this.html(\"\");\n  }\n\n  append(element) {\n    switch (typeof element) {\n      case \"string\":\n        this.htmlElements.map(el => {\n        return el.innerHTML += element;\n        });\n      case \"HTMLElement\":\n        this.htmlElements.map(el => {\n        return el.innerHTML += element.outerHTML;\n        });\n      default:\n        element.htmlElements.forEach(el => {\n          this.htmlElements.forEach(el => {\n            el.innerHTML += el.outerHTML;\n          });\n        });\n    }\n  }\n\n  attr(key, val) {\n    if (typeof val === 'string') {\n      this.htmlElements.map(el => {\n        el.setAttribute(key, val);\n      });\n    } else {\n      this[0].getAttribute(key);\n    }\n  }\n\n  addClass(className) {\n    this.htmlElements.map(el => {\n      el.classList.add(className);\n    });\n  }\n\n  removeClass(className){\n    this.htmlElements.map(el => {\n      el.classList.remove(className);\n    });\n  }\n\n  toggleClass(className){\n    this.htmlElements.map(el => {\n      el.classList.toggle(className);\n    });\n  }\n\n  children() {\n    let dependents = [];\n    this.htmlElements.forEach(el => {\n      let nodelist = el.children;\n      nodelist = Array.from(nodelist);\n      dependents = dependents.concat(nodelist);\n    });\n    return new DomNodeCollection(dependents);\n  }\n\n  parent() {\n    let parentsNode = [];\n    this.htmlElements.forEach(el => {\n      parentsNode.push(el.parentNode);\n    });\n    return new DomNodeCollection(parentsNode);\n  }\n\n  find(selector) {\n    let results = [];\n    this.htmlElements.forEach(el => {\n      let nodeList = el.querySelectorAll(selector);\n      results = results.concat(Array.from(nodeList));\n    });\n    return new DomNodeCollection(results);\n  }\n\n  remove() {\n    this.htmlElements.map(el => el.remove());\n  }\n\n  on(eventName, callback) {\n    this.htmlElements.forEach(el => {\n      el.addEventListener(eventName, callback);\n    });\n  }\n\n  off(eventName) {\n    this.htmlElements.forEach(el => {\n      el.removeEventListener(eventName);\n    });\n  }\n\n\n\n}\n\nmodule.exports = DomNodeCollection;\n\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n\nconst _docReadyCallBacks = [];\nlet _docReady = false;\n\nconst $b = arg => {\n  switch (typeof arg) {\n    case \"string\":\n      let nodeList = document.querySelectorAll(arg);\n      nodeList = Array.from(nodeList);\n      return new DomNodeCollection(nodeList);\n    case \"HTMLElement\":\n      return new DomNodeCollection([arg]);\n      case \"function\":\n      return registerDocReadyCallback(arg);\n  }\n};\nwindow.$b = $b;\n\nconst registerDocReadyCallback = fct => {\n  if (!_docReady) {\n    _docReadyCallBacks.push(fct);\n  } else {\n    fct();\n  }\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  _docReady = true;\n  _docReadyCallBacks.forEach(fct => fct());\n});\n\n$b.extend = (base, ...otherObjs) => {\n  otherObjs.forEach((obj) => {\n    for (const prop in obj) {\n      base[prop] = obj[prop];\n    }\n  });\n  return base;\n};\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });