"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/Touring/Touring.js":
/*!***************************************!*\
  !*** ./Components/Touring/Touring.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _this = undefined;\nvar Touring = function(param) {\n    var item = param.item;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"touring\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: item.location.toUpperCase()\n                }, void 0, false, {\n                    fileName: \"/Users/gavinstephens/Documents/Coding/comedy-app/Components/Touring/Touring.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: item.summary.toUpperCase()\n                }, void 0, false, {\n                    fileName: \"/Users/gavinstephens/Documents/Coding/comedy-app/Components/Touring/Touring.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: moment__WEBPACK_IMPORTED_MODULE_3___default()(item.start.dateTime).format('dddd MMM Do YYYY')\n                }, void 0, false, {\n                    fileName: \"/Users/gavinstephens/Documents/Coding/comedy-app/Components/Touring/Touring.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: moment__WEBPACK_IMPORTED_MODULE_3___default()(item.start.dateTime).format('LT')\n                }, void 0, false, {\n                    fileName: \"/Users/gavinstephens/Documents/Coding/comedy-app/Components/Touring/Touring.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: item.description,\n                    target: \"_blank\",\n                    title: \"Comedy show @ \".concat(item.summary, \" \").concat(item.location),\n                    className: \"ticket-btn bouncy\",\n                    children: \"TICKETS\"\n                }, void 0, false, {\n                    fileName: \"/Users/gavinstephens/Documents/Coding/comedy-app/Components/Touring/Touring.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, item.id, true, {\n            fileName: \"/Users/gavinstephens/Documents/Coding/comedy-app/Components/Touring/Touring.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_c = Touring;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Touring);\nvar _c;\n$RefreshReg$(_c, \"Touring\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL1RvdXJpbmcvVG91cmluZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ0c7QUFDRDtBQUVJOztBQUUvQixHQUFLLENBQUNJLE9BQU8sR0FBRyxRQUFRLFFBQU0sQ0FBQztRQUFaQyxJQUFJLFNBQUpBLElBQUk7SUFDckIsTUFBTTs4RkFFREMsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBUzs7NEZBQ3JCQyxDQUFDOzhCQUFFSCxJQUFJLENBQUNJLFFBQVEsQ0FBQ0MsV0FBVzs7Ozs7OzRGQUM1QkMsQ0FBRTs4QkFBRU4sSUFBSSxDQUFDTyxPQUFPLENBQUNGLFdBQVc7Ozs7Ozs0RkFDNUJHLENBQUU7OEJBQUVYLDZDQUFNLENBQUNHLElBQUksQ0FBQ1MsS0FBSyxDQUFDQyxRQUFRLEVBQUVDLE1BQU0sQ0FBQyxDQUFrQjs7Ozs7OzRGQUN6RFIsQ0FBQzs4QkFBRU4sNkNBQU0sQ0FBQ0csSUFBSSxDQUFDUyxLQUFLLENBQUNDLFFBQVEsRUFBRUMsTUFBTSxDQUFDLENBQUk7Ozs7Ozs0RkFDMUNDLENBQUM7b0JBQ0FDLElBQUksRUFBRWIsSUFBSSxDQUFDYyxXQUFXO29CQUN0QkMsTUFBTSxFQUFDLENBQVE7b0JBQ2ZDLEtBQUssRUFBRyxDQUFjLGdCQUFrQmhCLE1BQWEsQ0FBN0JBLElBQUksQ0FBQ08sT0FBTyxFQUFDLENBQUMsSUFBZ0IsT0FBZFAsSUFBSSxDQUFDSSxRQUFRO29CQUNyREYsU0FBUyxFQUFDLENBQW1COzhCQUFDLENBRWhDOzs7Ozs7O1dBWDRCRixJQUFJLENBQUNpQixFQUFFOzs7Ozs7QUFlM0MsQ0FBQztLQWxCS2xCLE9BQU87QUFvQmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL1RvdXJpbmcvVG91cmluZy5qcz82Y2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQgeyBpc0RhdGUgfSBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBUb3VyaW5nID0gKHsgaXRlbSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b3VyaW5nJyBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICA8cD57aXRlbS5sb2NhdGlvbi50b1VwcGVyQ2FzZSgpfTwvcD5cbiAgICAgICAgPGgzPntpdGVtLnN1bW1hcnkudG9VcHBlckNhc2UoKX08L2gzPlxuICAgICAgICA8aDQ+e21vbWVudChpdGVtLnN0YXJ0LmRhdGVUaW1lKS5mb3JtYXQoJ2RkZGQgTU1NIERvIFlZWVknKX08L2g0PlxuICAgICAgICA8cD57bW9tZW50KGl0ZW0uc3RhcnQuZGF0ZVRpbWUpLmZvcm1hdCgnTFQnKX08L3A+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICB0aXRsZT17YENvbWVkeSBzaG93IEAgJHtpdGVtLnN1bW1hcnl9ICR7aXRlbS5sb2NhdGlvbn1gfVxuICAgICAgICAgIGNsYXNzTmFtZT0ndGlja2V0LWJ0biBib3VuY3knPlxuICAgICAgICAgIFRJQ0tFVFNcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3VyaW5nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIm1vbWVudCIsImlzRGF0ZSIsIlRvdXJpbmciLCJpdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImxvY2F0aW9uIiwidG9VcHBlckNhc2UiLCJoMyIsInN1bW1hcnkiLCJoNCIsInN0YXJ0IiwiZGF0ZVRpbWUiLCJmb3JtYXQiLCJhIiwiaHJlZiIsImRlc2NyaXB0aW9uIiwidGFyZ2V0IiwidGl0bGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Touring/Touring.js\n");

/***/ })

});