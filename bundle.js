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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/todo_list.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class DomNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

  each(callback) {
    this.nodes.forEach(callback);
  }

  html(string) {
    if (!string) {
      return this.nodes[0].innerHTML;
    } else {
    this.each(node => {
      node.innerHTML = string;
    });
    }
  }

  empty() {
    this.each(node => {
      node.innerHTML = "";
    });
  }

  append(element) {
    if (typeof element === 'object' &&
        !(element instanceof DomNodeCollection)) {
      element = $b(element);
    }
    if (typeof element === "string") {
      this.each((node) => {
        node.innerHTML += element;
      });
    } else if (element instanceof DomNodeCollection) {
      this.each((node) => {
        element.each((el) => {
          node.appendChild(el);
        });
      });
    }
  }

  attr(key, value) {
    if (typeof value === "string") {
      this.each(node => node.setAttribute(key, value));
    } else {
      return this.nodes[0].getAttribute(key);
    }
  }

  addClass(name) {
    this.each(node => node.classList.add(name));
  }

  removeClass(name) {
    this.each(node => node.classList.remove(name));
  }

  toggleClass(name) {
    this.each(node => node.classList.toggle(name));
  }

  children() {
    let childNodes = [];
    this.each((node) => {
      const childNodeList = node.children;
      childNodes = childNodes.concat(Array.from(childNodeList));
    });
    return new DomNodeCollection(childNodes);
  }

  parent() {
    let parentNodes = [];
    this.each((node) => {
      const parentNodeList = node.parentNode;
      parentNodes = parentNodes.concat(Array.from(parentNodeList));
    });
    return new DomNodeCollection(parentNodes);
  }

  find(element) {
    let foundNodes = [];
    this.each((node) => {
      const nodeList = node.querySelectorAll(element);
      foundNodes = foundNodes.concat(Array.from(nodeList));
    });
    return new DomNodeCollection(foundNodes);
  }

  remove() {
    this.each(node => node.parentNode.removeChild(node));
  }

  on(eventName, callback) {
    this.each(node => {
      node.addEventListener(eventName, callback);
    });
  }

  off(eventName, callback) {
    this.each(node => {
      node.removeEventListener(eventName, callback);
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (DomNodeCollection);


/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection.js */ "./lib/dom_node_collection.js");


const _docReadyCallBacks = [];
let _docReady = false;

const $b = arg => {
  switch (typeof arg) {
    case "string":
      let nodeList = document.querySelectorAll(arg);
      nodeList = Array.from(nodeList);
      return new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__["default"](nodeList);
    case "object":
        if (arg instanceof HTMLElement) {
          return new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__["default"]([arg]);
        }
    case "function":
      return registerDocReadyCallback(arg);
  }
};
window.$b = $b;

const registerDocReadyCallback = fct => {
  if (!_docReady) {
    _docReadyCallBacks.push(fct);
  } else {
    fct();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  _docReady = true;
  _docReadyCallBacks.forEach(fct => fct());
});

$b.extend = (base, ...otherObjs) => {
  otherObjs.forEach((obj) => {
    for (const prop in obj) {
      base[prop] = obj[prop];
    }
  });
  return base;
};

$b.value = node => {
  return document.querySelector(node).value;
};


/* harmony default export */ __webpack_exports__["default"] = ($b);


/***/ }),

/***/ "./lib/todo_list.js":
/*!**************************!*\
  !*** ./lib/todo_list.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./lib/main.js");


Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["default"])(() => todoList());

const todoList = () => {
  addTodo();
  removeAll();
};

const addTodo = () => {
  Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["default"])(".add-todo").on("click",() => {
    let todo = _main_js__WEBPACK_IMPORTED_MODULE_0__["default"].value('.task');
    let radioName = Math.random();
    if (todo !== "") {
      Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ul").append(`<li>${todo}</li>
        <div class="radio-buttons">
          <input type="radio" checked name=${radioName}>not done</input>
          <input type="radio" name=${radioName}> done</input>
        </div>`);
        Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p").remove();
      clearInput();
    } else {
      Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ul").append("<p>Can not add blank item!</p>");
    }
    });
};

const removeAll = () => {
  Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["default"])(".remove-all").on("click",() => {
    Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ul").empty();});
};

const clearInput = () => {
  document.querySelector('.task').value = "";
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map