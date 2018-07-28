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

eval("const MoveError = __webpack_require__(/*! ./moveError */ \"./lib/moveError.js\");\n\nclass Board {\n  constructor() {\n    this.grid = Board.makeGrid();\n  }\n\n  isEmptyPos(pos) {\n    if (!Board.isValidPos(pos)) {\n      throw new MoveError('Is not valid position!');\n    }\n\n    return (this.grid[pos[0]][pos[1]] === null);\n  }\n\n  isOver() {\n    if (this.winner() != null) {\n      return true;\n    }\n\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\n        if (this.isEmptyPos([rowIdx, colIdx])) {\n          return false;\n        }\n      }\n    }\n\n    return true;\n  }\n\n  placeMark(pos, mark) {\n    if (!this.isEmptyPos(pos)) {\n      throw new MoveError('Is not an empty position!');\n    }\n\n    this.grid[pos[0]][pos[1]] = mark;\n  }\n\n  print() {\n    const strs = [];\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\n      const marks = [];\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\n        marks.push(\n          this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : \" \"\n        );\n      }\n      strs.push(`${marks.join('|')}\\n`);\n    }\n\n    console.log(strs.join('-----\\n'));\n  }\n\n  winner() {\n    const posSeqs = [\n      [[0, 0], [0, 1], [0, 2]],\n      [[1, 0], [1, 1], [1, 2]],\n      [[2, 0], [2, 1], [2, 2]],\n      [[0, 0], [1, 0], [2, 0]],\n      [[0, 1], [1, 1], [2, 1]],\n      [[0, 2], [1, 2], [2, 2]],\n      [[0, 0], [1, 1], [2, 2]],\n      [[2, 0], [1, 1], [0, 2]]\n    ];\n\n    for (let i = 0; i < posSeqs.length; i++) {\n      const winner = this.winnerHelper(posSeqs[i]);\n      if (winner != null) {\n        return winner;\n      }\n    }\n\n    return null;\n  }\n\n  winnerHelper(posSeq) {\n    for (let markIdx = 0; markIdx < Board.marks.length; markIdx++) {\n      const targetMark = Board.marks[markIdx];\n      let winner = true;\n      for (let posIdx = 0; posIdx < 3; posIdx++) {\n        const pos = posSeq[posIdx];\n        const mark = this.grid[pos[0]][pos[1]];\n\n        if (mark != targetMark) {\n          winner = false;\n        }\n      }\n\n      if (winner) {\n        return targetMark;\n      }\n    }\n\n    return null;\n  }\n\n  static isValidPos(pos) {\n    return (0 <= pos[0]) &&\n    (pos[0] < 3) &&\n    (0 <= pos[1]) &&\n    (pos[1] < 3);\n  }\n\n  static makeGrid() {\n    const grid = [];\n\n    for (let i = 0; i < 3; i++) {\n      grid.push([]);\n      for (let j = 0; j < 3; j++) {\n        grid[i].push(null);\n      }\n    }\n\n    return grid;\n  }\n}\n\nBoard.marks = ['x', 'o'];\n\nmodule.exports = Board;\n\n\n//# sourceURL=webpack:///./lib/board.js?");

/***/ }),

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DomNodeCollection {\n  constructor(htmlElements) {\n    this.htmlElements = htmlElements;\n  }\n\n  html(element) {\n    if (typeof element === 'string') {\n      this.htmlElements.map(el => {\n        return el.innerHTML = element;\n      });\n    } else if (this.htmlElements.length > 0) {\n      return this.htmlElements[0].innerHTML;\n    }\n  }\n\n  empty() {\n    this.html(\"\");\n  }\n\n  append(element) {\n    switch (typeof element) {\n      case \"string\":\n        this.htmlElements.map(el => {\n        return el.innerHTML += element;\n        });\n      case \"HTMLElement\":\n        this.htmlElements.map(el => {\n        return el.innerHTML += element.outerHTML;\n        });\n      default:\n        element.htmlElements.forEach(el => {\n          this.htmlElements.forEach(el => {\n            el.innerHTML += el.outerHTML;\n          });\n        });\n    }\n  }\n\n  attr(key, val) {\n    if (typeof val === 'string') {\n      this.htmlElements.map(el => {\n        el.setAttribute(key, val);\n      });\n    } else {\n      this[0].getAttribute(key);\n    }\n  }\n\n  addClass(className) {\n    this.htmlElements.map(el => {\n      el.classList.add(className);\n    });\n  }\n\n  removeClass(className){\n    this.htmlElements.map(el => {\n      el.classList.remove(className);\n    });\n  }\n\n  toggleClass(className){\n    this.htmlElements.map(el => {\n      el.classList.toggle(className);\n    });\n  }\n\n  children() {\n    let dependents = [];\n    this.htmlElements.forEach(el => {\n      let nodelist = el.children;\n      nodelist = Array.from(nodelist);\n      dependents = dependents.concat(nodelist);\n    });\n    return new DomNodeCollection(dependents);\n  }\n\n  parent() {\n    let parentsNode = [];\n    this.htmlElements.forEach(el => {\n      parentsNode.push(el.parentNode);\n    });\n    return new DomNodeCollection(parentsNode);\n  }\n\n  find(selector) {\n    let results = [];\n    this.htmlElements.forEach(el => {\n      let nodeList = el.querySelectorAll(selector);\n      results = results.concat(Array.from(nodeList));\n    });\n    return new DomNodeCollection(results);\n  }\n\n  remove() {\n    this.htmlElements.map(el => el.remove());\n  }\n\n  on(eventName, callback) {\n    this.htmlElements.forEach(el => {\n      el.addEventListener(eventName, callback);\n    });\n  }\n\n  off(eventName) {\n    this.htmlElements.forEach(el => {\n      el.removeEventListener(eventName);\n    });\n  }\n\n\n\n}\n\nmodule.exports = DomNodeCollection;\n\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./lib/board.js\");\nconst MoveError = __webpack_require__(/*! ./moveError */ \"./lib/moveError.js\");\n\nclass Game {\n  constructor() {\n    this.board = new Board();\n    this.currentPlayer = Board.marks[0];\n  }\n\n  isOver() {\n    return this.board.isOver();\n  }\n\n  playMove(pos) {\n    this.board.placeMark(pos, this.currentPlayer);\n    this.swapTurn();\n  }\n\n  promptMove(reader, callback) {\n    const game = this;\n\n    this.board.print();\n    console.log(`Current Turn: ${this.currentPlayer}`);\n\n    reader.question('Enter rowIdx: ', rowIdxStr => {\n      const rowIdx = parseInt(rowIdxStr);\n      reader.question('Enter colIdx: ', colIdxStr => {\n        const colIdx = parseInt(colIdxStr);\n        callback([rowIdx, colIdx]);\n      });\n    });\n  }\n\n  run(reader, gameCompletionCallback) {\n    this.promptMove(reader, move => {\n      try {\n        this.playMove(move);\n      } catch (e) {\n        if (e instanceof MoveError) {\n          console.log(e.msg);\n        } else {\n          throw e;\n        }\n      }\n\n      if (this.isOver()) {\n        this.board.print();\n        if (this.winner()) {\n          console.log(`${this.winner()} has won!`);\n        } else {\n          console.log('NO ONE WINS!');\n        }\n        gameCompletionCallback();\n      } else {\n        // continue loop\n        this.run(reader, gameCompletionCallback);\n      }\n    });\n  }\n\n  swapTurn() {\n    if (this.currentPlayer === Board.marks[0]) {\n      this.currentPlayer = Board.marks[1];\n    } else {\n      this.currentPlayer = Board.marks[0];\n    }\n  }\n\n  winner() {\n    return this.board.winner();\n  }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n\nconst _docReadyCallBacks = [];\nlet _docReady = false;\n\nconst $b = arg => {\n  switch (typeof arg) {\n    case \"string\":\n      let nodeList = document.querySelectorAll(arg);\n      nodeList = Array.from(nodeList);\n      return new DomNodeCollection(nodeList);\n    case \"HTMLElement\":\n      return new DomNodeCollection([arg]);\n      case \"function\":\n      return registerDocReadyCallback(arg);\n  }\n};\nwindow.$b = $b;\n\nconst registerDocReadyCallback = fct => {\n  if (!_docReady) {\n    _docReadyCallBacks.push(fct);\n  } else {\n    fct();\n  }\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  _docReady = true;\n  _docReadyCallBacks.forEach(fct => fct());\n});\n\n$b.extend = (base, ...otherObjs) => {\n  otherObjs.forEach((obj) => {\n    for (const prop in obj) {\n      base[prop] = obj[prop];\n    }\n  });\n  return base;\n};\n\nmodule.exports = $b;\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ }),

/***/ "./lib/moveError.js":
/*!**************************!*\
  !*** ./lib/moveError.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst MoveError = function (msg) { this.msg = msg; };\n\nmodule.exports = MoveError;\n\n\n//# sourceURL=webpack:///./lib/moveError.js?");

/***/ }),

/***/ "./lib/ttt-main.js":
/*!*************************!*\
  !*** ./lib/ttt-main.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const View = __webpack_require__(/*! ./ttt-view */ \"./lib/ttt-view.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./lib/game.js\");\nconst $b = __webpack_require__(/*! ./main */ \"./lib/main.js\");\n\n$( () => {\n  const rootEl = $('.ttt');\n  const game = new Game();\n  new View(game, rootEl);\n});\n\n\n//# sourceURL=webpack:///./lib/ttt-main.js?");

/***/ }),

/***/ "./lib/ttt-view.js":
/*!*************************!*\
  !*** ./lib/ttt-view.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const $b = __webpack_require__(/*! ./main */ \"./lib/main.js\");\n\nclass View {\n  constructor(game, $el) {\n    this.game = game;\n    this.$el = $el;\n\n    this.setupBoard();\n    this.bindEvents();\n  }\n\n  bindEvents() {\n    this.$el.on(\"click\", \"li\", ( event => {\n      const $square = $(event.currentTarget);\n      this.makeMove($square);\n    }));\n  }\n\n  makeMove($square) {\n    const pos = $square.data(\"pos\");\n    const currentPlayer = this.game.currentPlayer;\n\n    try {\n      this.game.playMove(pos);\n    } catch (e) {\n      alert(\"This \" + e.msg.toLowerCase());\n      return;\n    }\n\n    $square.addClass(currentPlayer);\n\n    if (this.game.isOver()) {\n      this.$el.off(\"click\");\n      this.$el.addClass(\"game-over\");\n\n      const winner = this.game.winner();\n      const $figcaption = $(\"<figcaption>\");\n\n      if (winner) {\n        this.$el.addClass(`winner-${winner}`);\n        $figcaption.html(`You win, ${winner}!`);\n      } else {\n        $figcaption.html(\"It's a draw!\");\n      }\n\n      this.$el.append($figcaption);\n    }\n  }\n\n  setupBoard() {\n    const $ul = $(\"<ul>\");\n\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\n        let $li = $(\"<li>\");\n        $li.data(\"pos\", [rowIdx, colIdx]);\n\n        $ul.append($li);\n      }\n    }\n\n    this.$el.append($ul);\n  }\n}\n\nmodule.exports = View;\n\n\n//# sourceURL=webpack:///./lib/ttt-view.js?");

/***/ })

/******/ });