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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usePod\": () => (/* binding */ usePod),\n/* harmony export */   \"PodProvider\": () => (/* binding */ PodProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst API_URL = process.env.NEXT_PUBLIC_PODCAST_URL;\nconst PodContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nfunction usePod() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PodContext);\n}\nfunction PodProvider({ children  }) {\n    const { 0: eps , 1: setEps  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function episodeGetter() {\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get(API_URL).then((res)=>{\n            setEps(res.data.items);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        episodeGetter();\n    }, []);\n    const value = {\n        eps\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PodContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/gavinstephens/Documents/Coding/comedy-app/providers/PodcastProvider.js\",\n        lineNumber: 34,\n        columnNumber: 10\n    }, this));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wcm92aWRlcnMvUG9kY2FzdFByb3ZpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNyQztBQUV6QixLQUFLLENBQUNLLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLHVCQUF1QjtBQUVuRCxLQUFLLENBQUNDLFVBQVUsaUJBQUdULDBEQUFtQjtBQUUvQixTQUFTVyxNQUFNLEdBQUcsQ0FBQztJQUN4QixNQUFNLENBQUNSLGlEQUFVLENBQUNNLFVBQVU7QUFDOUIsQ0FBQztBQUVNLFNBQVNHLFdBQVcsQ0FBQyxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN6QyxLQUFLLE1BQUVDLEdBQUcsTUFBRUMsTUFBTSxNQUFJZCwrQ0FBUSxDQUFDLENBQUMsQ0FBQzthQUV4QmUsYUFBYSxHQUFHLENBQUM7UUFDeEJaLGdEQUNNLENBQUNDLE9BQU8sRUFDWGEsSUFBSSxFQUFFQyxHQUFHLEdBQUssQ0FBQztZQUNkSixNQUFNLENBQUNJLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLO1FBQ3ZCLENBQUMsRUFDQUMsS0FBSyxFQUFFQyxHQUFHLEdBQUssQ0FBQztZQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUVEckIsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZjLGFBQWE7SUFDZixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsS0FBSyxDQUFDVSxLQUFLLEdBQUcsQ0FBQztRQUNiWixHQUFHO0lBQ0wsQ0FBQztJQUVELE1BQU0sNkVBQUVMLFVBQVUsQ0FBQ2tCLFFBQVE7UUFBQ0QsS0FBSyxFQUFFQSxLQUFLO2tCQUFHYixRQUFROzs7Ozs7QUFDckQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbWVkeS1hcHAvLi9wcm92aWRlcnMvUG9kY2FzdFByb3ZpZGVyLmpzP2MxNjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUE9EQ0FTVF9VUkw7XG5cbmNvbnN0IFBvZENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQb2QoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KFBvZENvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUG9kUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtlcHMsIHNldEVwc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgZnVuY3Rpb24gZXBpc29kZUdldHRlcigpIHtcbiAgICBheGlvc1xuICAgICAgLmdldChBUElfVVJMKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRFcHMocmVzLmRhdGEuaXRlbXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZXBpc29kZUdldHRlcigpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdmFsdWUgPSB7XG4gICAgZXBzLFxuICB9O1xuXG4gIHJldHVybiA8UG9kQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L1BvZENvbnRleHQuUHJvdmlkZXI+O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiYXhpb3MiLCJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1BPRENBU1RfVVJMIiwiUG9kQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQb2QiLCJQb2RQcm92aWRlciIsImNoaWxkcmVuIiwiZXBzIiwic2V0RXBzIiwiZXBpc29kZUdldHRlciIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiaXRlbXMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./providers/PodcastProvider.js\n");

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