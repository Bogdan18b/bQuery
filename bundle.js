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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DomNodeCollection = function () {
  function DomNodeCollection(nodes) {
    _classCallCheck(this, DomNodeCollection);

    this.nodes = nodes; // array of HTMLElements
  }

  _createClass(DomNodeCollection, [{
    key: "each",
    value: function each(callback) {
      this.nodes.forEach(callback); // I am using forEach in almost every function
    }
  }, {
    key: "html",
    value: function html(string) {
      if (!string) {
        return this.nodes[0].innerHTML;
      } else {
        this.each(function (node) {
          node.innerHTML = string;
        });
      }
    }
  }, {
    key: "empty",
    value: function empty() {
      this.each(function (node) {
        node.innerHTML = "";
      });
    }
  }, {
    key: "append",
    value: function append(element) {
      if ((typeof element === "undefined" ? "undefined" : _typeof(element)) === 'object' && !(element instanceof DomNodeCollection)) {
        element = $b(element);
      }
      if (typeof element === "string") {
        this.each(function (node) {
          node.innerHTML += element;
        });
      } else if (element instanceof DomNodeCollection) {
        this.each(function (node) {
          element.each(function (el) {
            node.appendChild(el);
          });
        });
      }
    }
  }, {
    key: "attr",
    value: function attr(key, value) {
      if (typeof value === "string") {
        this.each(function (node) {
          return node.setAttribute(key, value);
        });
      } else {
        return this.nodes[0].getAttribute(key);
      }
    }
  }, {
    key: "addClass",
    value: function addClass(name) {
      this.each(function (node) {
        return node.classList.add(name);
      });
    }
  }, {
    key: "removeClass",
    value: function removeClass(name) {
      this.each(function (node) {
        return node.classList.remove(name);
      });
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(name) {
      this.each(function (node) {
        return node.classList.toggle(name);
      });
    }
  }, {
    key: "children",
    value: function children() {
      var childNodes = [];
      this.each(function (node) {
        var childNodeList = node.children;
        childNodes = childNodes.concat(Array.from(childNodeList));
      });
      return new DomNodeCollection(childNodes);
    }
  }, {
    key: "parent",
    value: function parent() {
      var parentNodes = [];
      this.each(function (node) {
        var parentNodeList = node.parentNode;
        parentNodes = parentNodes.concat(Array.from(parentNodeList));
      });
      return new DomNodeCollection(parentNodes);
    }
  }, {
    key: "find",
    value: function find(element) {
      var foundNodes = [];
      this.each(function (node) {
        var nodeList = node.querySelectorAll(element);
        foundNodes = foundNodes.concat(Array.from(nodeList));
      });
      return new DomNodeCollection(foundNodes);
    }
  }, {
    key: "remove",
    value: function remove() {
      this.each(function (node) {
        return node.parentNode.removeChild(node);
      });
    }
  }, {
    key: "on",
    value: function on(eventName, callback) {
      this.each(function (node) {
        node.addEventListener(eventName, callback);
      });
    }
  }, {
    key: "off",
    value: function off(eventName, callback) {
      this.each(function (node) {
        node.removeEventListener(eventName, callback);
      });
    }
  }]);

  return DomNodeCollection;
}();

exports.default = DomNodeCollection;

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _dom_node_collection = __webpack_require__(/*! ./dom_node_collection.js */ "./lib/dom_node_collection.js");

var _dom_node_collection2 = _interopRequireDefault(_dom_node_collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _docReadyCallBacks = [];
var _docReady = false;

var $b = function $b(arg) {
  switch (typeof arg === "undefined" ? "undefined" : _typeof(arg)) {
    case "string":
      var nodeList = document.querySelectorAll(arg);
      nodeList = Array.from(nodeList);
      return new _dom_node_collection2.default(nodeList);
    case "object":
      if (arg instanceof HTMLElement) {
        return new _dom_node_collection2.default([arg]);
      }
    case "function":
      return registerDocReadyCallback(arg);
  }
};
window.$b = $b;

var registerDocReadyCallback = function registerDocReadyCallback(fct) {
  if (!_docReady) {
    _docReadyCallBacks.push(fct);
  } else {
    fct();
  }
};

document.addEventListener("DOMContentLoaded", function () {
  _docReady = true;
  _docReadyCallBacks.forEach(function (fct) {
    return fct();
  });
});

$b.extend = function (base) {
  for (var _len = arguments.length, otherObjs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    otherObjs[_key - 1] = arguments[_key];
  }

  otherObjs.forEach(function (obj) {
    for (var prop in obj) {
      base[prop] = obj[prop];
    }
  });
  return base;
};

module.exports = $b;

/***/ }),

/***/ "./lib/todo_list.js":
/*!**************************!*\
  !*** ./lib/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(/*! ./main.js */ "./lib/main.js");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _main2.default)(function () {
  return todoList();
});

var todoList = function todoList() {
  addTodo("buy milk");
};

var addTodo = function addTodo(name) {
  (0, _main2.default)("button").on("click", function () {
    return (0, _main2.default)("ul").append("<li>" + name + "</li>");
  });
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map