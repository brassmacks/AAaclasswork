/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n// spacerock inherits from MovingObject\n\nAsteroid.COLOR = function() {\n    return \"#653D34\";\n};\nAsteroid.RADIUS = function() {\n    return 50;\n};\n\n\nfunction Asteroid(pos){\n    \n    const options = {\n        color : Asteroid.COLOR(),\n        vel : Util.randomVec(Math.floor(Math.random() * 10)),\n        pos : pos,\n        radius : Asteroid.RADIUS()\n    };\n    MovingObject.call(this, options);\n        \n    }\nUtil.inherits(Asteroid, MovingObject);\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nwindow.MovingObject = MovingObject;\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nwindow.Asteroid = Asteroid;\nconst mo = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 10,\n    color: \"#00FF00\"\n  });\nconst stroid = new Asteroid(20,20);\nconst to = new MovingObject({\n    pos: [60, 30],\n    vel: [10, 10],\n    radius: 10,\n    color: \"#00FF00\"\n});\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n    const screen = document.getElementById(\"game-canvas\");\n    const ctx = screen.getContext(\"2d\");\n      mo.draw(ctx);\n      mo.move();\n    to.draw(ctx);\n      \n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("// base class for anything that moves\n\n\nfunction MovingObject(options) {\n    //  debugger\n    this.pos = options.pos; // 2d array x,y\n    this.vel = options.vel; \n    this.radius = options.radius;\n    this.color = options.color;\n\n}\n// MovingObject.prototype.move\nMovingObject.prototype.move = function(){\n    this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]];\n    \n};\n\n\n// MovingObject.prototype.draw(ctx)\nMovingObject.prototype.draw = function(ctx){\n   \n    ctx.beginPath();\n    ctx.fillStyle = this.color; \n    ctx.arc(this.pos[0],this.pos[1], this.radius, 0, 2*Math.PI, false);\n    ctx.fill();\n\n};\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\nMovingObject.prototype.collideWith = function(otherObject) {\n\n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("// utility code, vector math and what have you\nconst Util = {\n    inherits(childClass, parentClass) {\n      function Surrogate(){}\n      Surrogate.prototype = parentClass.prototype;\n      childClass.prototype = new Surrogate();\n      childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n\n  };\n  \n  module.exports = Util;\n\n\n//# sourceURL=webpack:///./src/utils.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;