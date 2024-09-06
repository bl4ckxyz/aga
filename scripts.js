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

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bonuscode_casinos_com/./src/scss/main.scss?");
    
    /***/ }),
    
    /***/ "./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\n\n\n//# sourceURL=webpack://bonuscode_casinos_com/./src/index.js?");
    
    /***/ }),
    
    /***/ "./src/js/back-to-top.js":
    /*!*******************************!*\
      !*** ./src/js/back-to-top.js ***!
      \*******************************/
    /***/ (() => {
    
    eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  let scrollToTop = document.querySelector(\".scroll-to-top\");\n\n  if (scrollToTop) {\n    window.onscroll = function () {\n      if (pageYOffset >= 200) {\n        scrollToTop.style.visibility = \"visible\";\n      } else {\n        scrollToTop.style.visibility = \"hidden\";\n      }\n    };\n\n    scrollToTop.onclick = function () {\n      scrollTo(document.body, 0, 0);\n    };\n  }\n});\n\n\n//# sourceURL=webpack://bonuscode_casinos_com/./src/js/back-to-top.js?");
    
    /***/ }),
    
    /***/ "./src/js/bonus.js":
    /*!*************************!*\
      !*** ./src/js/bonus.js ***!
      \*************************/
    /***/ (() => {
    
    eval("jQuery(document).ready(function ($) {\n  $(\".hero__bonus-terms\").hover(\n    function () {\n      $(this).closest(\".hero__bonus\").find(\".hero__bonus-abs\").addClass(\"show\");\n    },\n    function () {\n      $(this)\n        .closest(\".hero__bonus\")\n        .find(\".hero__bonus-abs\")\n        .removeClass(\"show\");\n    }\n  );\n\n  $(\".hero__bonus-abs\").hover(\n    function () {\n      $(this).addClass(\"show\");\n    },\n    function () {\n      $(this).removeClass(\"show\");\n    }\n  );\n});\n\n\n//# sourceURL=webpack://bonuscode_casinos_com/./src/js/bonus.js?");
    
    /***/ }),
    
    /***/ "./src/js/main.js":
    /*!************************!*\
      !*** ./src/js/main.js ***!
      \************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _table_of_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-of-content */ \"./src/js/table-of-content.js\");\n/* harmony import */ var _table_of_content__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_table_of_content__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _show_hide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-hide */ \"./src/js/show-hide.js\");\n/* harmony import */ var _show_hide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_show_hide__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _back_to_top__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./back-to-top */ \"./src/js/back-to-top.js\");\n/* harmony import */ var _back_to_top__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_back_to_top__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _bonus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bonus */ \"./src/js/bonus.js\");\n/* harmony import */ var _bonus__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bonus__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n//# sourceURL=webpack://bonuscode_casinos_com/./src/js/main.js?");
    
    /***/ }),
    
    /***/ "./src/js/show-hide.js":
    /*!*****************************!*\
      !*** ./src/js/show-hide.js ***!
      \*****************************/
    /***/ (() => {
    
    eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  const buttons = document.querySelectorAll(\".reviews__item-arrow\");\n\n  if (buttons) {\n    buttons.forEach((button) => {\n      button.addEventListener(\"click\", function () {\n        const targetId = this.parentElement.getAttribute(\"data-target\");\n        const info = document.querySelector(`[data-info=\"${targetId}\"]`);\n\n        info.classList.toggle(\"reviews__item-active\");\n      });\n    });\n  }\n});\n\n\n//# sourceURL=webpack://bonuscode_casinos_com/./src/js/show-hide.js?");
    
    /***/ }),
    
    /***/ "./src/js/table-of-content.js":
    /*!************************************!*\
      !*** ./src/js/table-of-content.js ***!
      \************************************/
    /***/ (() => {
    
    eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  const headings = Array.from(document.querySelectorAll(\"h2\"));\n\n  if (headings.length === 0) {\n    let tableOfContent = document.querySelector(\".table-of-content\");\n    if (tableOfContent) {\n      tableOfContent.style.display = \"none\";\n    }\n    return;\n  }\n\n  let idCounter = 1;\n\n  headings.forEach((heading) => {\n    const uniqueId = `title-${idCounter}`;\n    heading.setAttribute(\"id\", uniqueId);\n    idCounter++;\n  });\n\n  const tocList = document.createElement(\"ul\");\n  tocList.classList.add(\"table-of-content__list\");\n\n  headings.forEach((heading) => {\n    const tocItem = document.createElement(\"li\");\n    tocItem.classList.add(\"hidden\");\n    const anchor = document.createElement(\"a\");\n    anchor.setAttribute(\"href\", `#${heading.id}`);\n    anchor.textContent = heading.textContent;\n    tocItem.appendChild(anchor);\n    tocList.appendChild(tocItem);\n  });\n\n  let tableOfContent = document.getElementById(\"tableOfContents\");\n  if (tableOfContent) {\n    tableOfContent.appendChild(tocList);\n\n    let acc = document.getElementsByClassName(\"table-of-content__title\");\n    let i;\n\n    for (i = 0; i < acc.length; i++) {\n      acc[i].addEventListener(\"click\", function () {\n        this.classList.toggle(\"table-of-content--active\");\n        let panel = this.nextElementSibling;\n        panel.classList.toggle(\"table-of-content__list--active\");\n      });\n    }\n  }\n});\n\n\n//# sourceURL=webpack://bonuscode_casinos_com/./src/js/table-of-content.js?");
    
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
    /******/ 	
    /******/ 	// startup
    /******/ 	// Load entry module and return exports
    /******/ 	// This entry module can't be inlined because the eval devtool is used.
    /******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
    /******/ 	
    /******/ })()
    ;