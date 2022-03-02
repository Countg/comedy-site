/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_PodcastProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/PodcastProvider */ \"./providers/PodcastProvider.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers_PodcastProvider__WEBPACK_IMPORTED_MODULE_2__.PodProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/gavinstephens/Documents/Coding/comedy-app/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/gavinstephens/Documents/Coding/comedy-app/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDNEI7U0FFakRDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQ0hILG1FQUFXOzhGQUNURSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tZWR5LWFwcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyBQb2RQcm92aWRlciB9IGZyb20gJy4uL3Byb3ZpZGVycy9Qb2RjYXN0UHJvdmlkZXInO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8UG9kUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qb2RQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUG9kUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./providers/PodcastProvider.js":
/*!**************************************!*\
  !*** ./providers/PodcastProvider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usePod\": () => (/* binding */ usePod),\n/* harmony export */   \"PodProvider\": () => (/* binding */ PodProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst API_URL = \"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spreaker.com%2Fshow%2F4245532%2Fepisodes%2Ffeed\";\nconst PodContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nfunction usePod() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PodContext);\n}\nfunction PodProvider({ children  }) {\n    const { 0: eps , 1: setEps  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function episodeGetter() {\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get(API_URL).then((res)=>{\n            setEps(res.data.items);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        episodeGetter();\n    }, []);\n    const value = {\n        eps\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PodContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/gavinstephens/Documents/Coding/comedy-app/providers/PodcastProvider.js\",\n        lineNumber: 34,\n        columnNumber: 10\n    }, this));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wcm92aWRlcnMvUG9kY2FzdFByb3ZpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNyQztBQUV6QixLQUFLLENBQUNLLE9BQU8sR0FBR0MsZ0hBQW1DO0FBRW5ELEtBQUssQ0FBQ0csVUFBVSxpQkFBR1QsMERBQW1CO0FBRS9CLFNBQVNXLE1BQU0sR0FBRyxDQUFDO0lBQ3hCLE1BQU0sQ0FBQ1IsaURBQVUsQ0FBQ00sVUFBVTtBQUM5QixDQUFDO0FBRU0sU0FBU0csV0FBVyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pDLEtBQUssTUFBRUMsR0FBRyxNQUFFQyxNQUFNLE1BQUlkLCtDQUFRLENBQUMsQ0FBQyxDQUFDO2FBRXhCZSxhQUFhLEdBQUcsQ0FBQztRQUN4QlosZ0RBQ00sQ0FBQ0MsT0FBTyxFQUNYYSxJQUFJLEVBQUVDLEdBQUcsR0FBSyxDQUFDO1lBQ2RKLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDQyxJQUFJLENBQUNDLEtBQUs7UUFDdkIsQ0FBQyxFQUNBQyxLQUFLLEVBQUVDLEdBQUcsR0FBSyxDQUFDO1lBQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBRURyQixnREFBUyxLQUFPLENBQUM7UUFDZmMsYUFBYTtJQUNmLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxLQUFLLENBQUNVLEtBQUssR0FBRyxDQUFDO1FBQ2JaLEdBQUc7SUFDTCxDQUFDO0lBRUQsTUFBTSw2RUFBRUwsVUFBVSxDQUFDa0IsUUFBUTtRQUFDRCxLQUFLLEVBQUVBLEtBQUs7a0JBQUdiLFFBQVE7Ozs7OztBQUNyRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tZWR5LWFwcC8uL3Byb3ZpZGVycy9Qb2RjYXN0UHJvdmlkZXIuanM/YzE2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QT0RDQVNUX1VSTDtcblxuY29uc3QgUG9kQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBvZCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoUG9kQ29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQb2RQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW2Vwcywgc2V0RXBzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBmdW5jdGlvbiBlcGlzb2RlR2V0dGVyKCkge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KEFQSV9VUkwpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldEVwcyhyZXMuZGF0YS5pdGVtcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBlcGlzb2RlR2V0dGVyKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB2YWx1ZSA9IHtcbiAgICBlcHMsXG4gIH07XG5cbiAgcmV0dXJuIDxQb2RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvUG9kQ29udGV4dC5Qcm92aWRlcj47XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJheGlvcyIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfUE9EQ0FTVF9VUkwiLCJQb2RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZVBvZCIsIlBvZFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJlcHMiLCJzZXRFcHMiLCJlcGlzb2RlR2V0dGVyIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJpdGVtcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./providers/PodcastProvider.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();