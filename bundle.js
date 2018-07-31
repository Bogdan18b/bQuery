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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/ttt-main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/board.js":
/*!**********************!*\
  !*** ./lib/board.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MoveError = __webpack_require__(/*! ./moveError */ "./lib/moveError.js");

var Board = function () {
  function Board() {
    _classCallCheck(this, Board);

    this.grid = Board.makeGrid();
  }

  _createClass(Board, [{
    key: 'isEmptyPos',
    value: function isEmptyPos(pos) {
      if (!Board.isValidPos(pos)) {
        throw new MoveError('Is not valid position!');
      }

      return this.grid[pos[0]][pos[1]] === null;
    }
  }, {
    key: 'isOver',
    value: function isOver() {
      if (this.winner() != null) {
        return true;
      }

      for (var rowIdx = 0; rowIdx < 3; rowIdx++) {
        for (var colIdx = 0; colIdx < 3; colIdx++) {
          if (this.isEmptyPos([rowIdx, colIdx])) {
            return false;
          }
        }
      }

      return true;
    }
  }, {
    key: 'placeMark',
    value: function placeMark(pos, mark) {
      if (!this.isEmptyPos(pos)) {
        throw new MoveError('Is not an empty position!');
      }

      this.grid[pos[0]][pos[1]] = mark;
    }
  }, {
    key: 'print',
    value: function print() {
      var strs = [];
      for (var rowIdx = 0; rowIdx < 3; rowIdx++) {
        var marks = [];
        for (var colIdx = 0; colIdx < 3; colIdx++) {
          marks.push(this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : " ");
        }
        strs.push(marks.join('|') + '\n');
      }

      console.log(strs.join('-----\n'));
    }
  }, {
    key: 'winner',
    value: function winner() {
      var posSeqs = [[[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 1], [1, 2]], [[2, 0], [2, 1], [2, 2]], [[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]], [[0, 0], [1, 1], [2, 2]], [[2, 0], [1, 1], [0, 2]]];

      for (var i = 0; i < posSeqs.length; i++) {
        var winner = this.winnerHelper(posSeqs[i]);
        if (winner != null) {
          return winner;
        }
      }

      return null;
    }
  }, {
    key: 'winnerHelper',
    value: function winnerHelper(posSeq) {
      for (var markIdx = 0; markIdx < Board.marks.length; markIdx++) {
        var targetMark = Board.marks[markIdx];
        var winner = true;
        for (var posIdx = 0; posIdx < 3; posIdx++) {
          var pos = posSeq[posIdx];
          var mark = this.grid[pos[0]][pos[1]];

          if (mark != targetMark) {
            winner = false;
          }
        }

        if (winner) {
          return targetMark;
        }
      }

      return null;
    }
  }], [{
    key: 'isValidPos',
    value: function isValidPos(pos) {
      return 0 <= pos[0] && pos[0] < 3 && 0 <= pos[1] && pos[1] < 3;
    }
  }, {
    key: 'makeGrid',
    value: function makeGrid() {
      var grid = [];

      for (var i = 0; i < 3; i++) {
        grid.push([]);
        for (var j = 0; j < 3; j++) {
          grid[i].push(null);
        }
      }

      return grid;
    }
  }]);

  return Board;
}();

Board.marks = ['x', 'o'];

module.exports = Board;

/***/ }),

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = DomNodeCollection;

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = __webpack_require__(/*! ./board */ "./lib/board.js");
var MoveError = __webpack_require__(/*! ./moveError */ "./lib/moveError.js");

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.board = new Board();
    this.currentPlayer = Board.marks[0];
  }

  _createClass(Game, [{
    key: "isOver",
    value: function isOver() {
      return this.board.isOver();
    }
  }, {
    key: "playMove",
    value: function playMove(pos) {
      this.board.placeMark(pos, this.currentPlayer);
      this.swapTurn();
    }
  }, {
    key: "promptMove",
    value: function promptMove(reader, callback) {
      var game = this;

      this.board.print();
      console.log("Current Turn: " + this.currentPlayer);

      reader.question('Enter rowIdx: ', function (rowIdxStr) {
        var rowIdx = parseInt(rowIdxStr);
        reader.question('Enter colIdx: ', function (colIdxStr) {
          var colIdx = parseInt(colIdxStr);
          callback([rowIdx, colIdx]);
        });
      });
    }
  }, {
    key: "run",
    value: function run(reader, gameCompletionCallback) {
      var _this = this;

      this.promptMove(reader, function (move) {
        try {
          _this.playMove(move);
        } catch (e) {
          if (e instanceof MoveError) {
            console.log(e.msg);
          } else {
            throw e;
          }
        }

        if (_this.isOver()) {
          _this.board.print();
          if (_this.winner()) {
            console.log(_this.winner() + " has won!");
          } else {
            console.log('NO ONE WINS!');
          }
          gameCompletionCallback();
        } else {
          // continue loop
          _this.run(reader, gameCompletionCallback);
        }
      });
    }
  }, {
    key: "swapTurn",
    value: function swapTurn() {
      if (this.currentPlayer === Board.marks[0]) {
        this.currentPlayer = Board.marks[1];
      } else {
        this.currentPlayer = Board.marks[0];
      }
    }
  }, {
    key: "winner",
    value: function winner() {
      return this.board.winner();
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ "./lib/dom_node_collection.js");

var _docReadyCallBacks = [];
var _docReady = false;

var $b = function $b(arg) {
  switch (typeof arg === "undefined" ? "undefined" : _typeof(arg)) {
    case "string":
      var nodeList = document.querySelectorAll(arg);
      nodeList = Array.from(nodeList);
      return new DomNodeCollection(nodeList);
    case "object":
      if (arg instanceof HTMLElement) {
        return new DomNodeCollection([arg]);
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

/***/ "./lib/moveError.js":
/*!**************************!*\
  !*** ./lib/moveError.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MoveError = function MoveError(msg) {
  this.msg = msg;
};

module.exports = MoveError;

/***/ }),

/***/ "./lib/ttt-main.js":
/*!*************************!*\
  !*** ./lib/ttt-main.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var View = __webpack_require__(/*! ./ttt-view */ "./lib/ttt-view.js");
var Game = __webpack_require__(/*! ./game */ "./lib/game.js");
var $b = __webpack_require__(/*! ./main */ "./lib/main.js");

$(function () {
  var rootEl = $('.ttt');
  var game = new Game();
  new View(game, rootEl);
});

/***/ }),

/***/ "./lib/ttt-view.js":
/*!*************************!*\
  !*** ./lib/ttt-view.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
  function View(game, $el) {
    _classCallCheck(this, View);

    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  _createClass(View, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.$el.on("click", "li", function (event) {
        var $square = $(event.currentTarget);
        _this.makeMove($square);
      });
    }
  }, {
    key: "makeMove",
    value: function makeMove($square) {
      var pos = $square.data("pos");
      var currentPlayer = this.game.currentPlayer;

      try {
        this.game.playMove(pos);
      } catch (e) {
        alert("This " + e.msg.toLowerCase());
        return;
      }

      $square.addClass(currentPlayer);

      if (this.game.isOver()) {
        this.$el.off("click");
        this.$el.addClass("game-over");

        var winner = this.game.winner();
        var $figcaption = $("<figcaption>");

        if (winner) {
          this.$el.addClass("winner-" + winner);
          $figcaption.html("You win, " + winner + "!");
        } else {
          $figcaption.html("It's a draw!");
        }

        this.$el.append($figcaption);
      }
    }
  }, {
    key: "setupBoard",
    value: function setupBoard() {
      var $ul = $("<ul>");

      for (var rowIdx = 0; rowIdx < 3; rowIdx++) {
        for (var colIdx = 0; colIdx < 3; colIdx++) {
          var $li = $("<li>");
          $li.data("pos", [rowIdx, colIdx]);

          $ul.append($li);
        }
      }

      this.$el.append($ul);
    }
  }]);

  return View;
}();

module.exports = View;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map