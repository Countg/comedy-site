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

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



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

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _providers_PodcastProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/PodcastProvider */ \"./providers/PodcastProvider.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_PodcastProvider__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__]);\n([_providers_PodcastProvider__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n // Your Podcast context provider\n\n// Framer Motion for animations\nfunction MyApp({ Component, pageProps, router }) {\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // Use useEffect to ensure this only runs client-side\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            setIsClient(true); // Client-specific logic\n        }\n    }[\"MyApp.useEffect\"], []);\n    // If it's not the client, show a loading state\n    if (!isClient) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/gavinstephens/Documents/Coding/comedy-site/pages/_app.js\",\n            lineNumber: 18,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"icon\",\n                href: \"/favicon.ico\",\n                sizes: \"any\"\n            }, void 0, false, {\n                fileName: \"/Users/gavinstephens/Documents/Coding/comedy-site/pages/_app.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers_PodcastProvider__WEBPACK_IMPORTED_MODULE_3__.PodProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        initial: \"pageInitial\",\n                        animate: \"pageAnimate\",\n                        variants: {\n                            pageInitial: {\n                                opacity: 0\n                            },\n                            pageAnimate: {\n                                opacity: 1\n                            }\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/Users/gavinstephens/Documents/Coding/comedy-site/pages/_app.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this)\n                    }, router, false, {\n                        fileName: \"/Users/gavinstephens/Documents/Coding/comedy-site/pages/_app.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/gavinstephens/Documents/Coding/comedy-site/pages/_app.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gavinstephens/Documents/Coding/comedy-site/pages/_app.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gavinstephens/Documents/Coding/comedy-site/pages/_app.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDYTtBQUNlLENBQUMsZ0NBQWdDO0FBQ3JEO0FBQ3ZDLCtCQUErQjtBQUVoQixTQUFTSSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUU7SUFDNUQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpDLHFEQUFxRDtJQUNyREMsZ0RBQVNBOzJCQUFDO1lBQ1JRLFlBQVksT0FBTyx3QkFBd0I7UUFDN0M7MEJBQUcsRUFBRTtJQUVMLCtDQUErQztJQUMvQyxJQUFJLENBQUNELFVBQVU7UUFDYixxQkFBTyw4REFBQ0U7c0JBQUk7Ozs7OztJQUNkO0lBRUEscUJBQ0UsOERBQUNDO1FBQUtDLE1BQUs7OzBCQUNULDhEQUFDQztnQkFBS0MsS0FBSTtnQkFBT0MsTUFBSztnQkFBZUMsT0FBTTs7Ozs7OzBCQUUzQyw4REFBQ0M7MEJBQ0MsNEVBQUNmLG1FQUFXQTs4QkFDViw0RUFBQ0MsaURBQU1BLENBQUNPLEdBQUc7d0JBRVRRLFNBQVE7d0JBQ1JDLFNBQVE7d0JBQ1JDLFVBQVU7NEJBQ1JDLGFBQWE7Z0NBQ1hDLFNBQVM7NEJBQ1g7NEJBQ0FDLGFBQWE7Z0NBQ1hELFNBQVM7NEJBQ1g7d0JBQ0Y7a0NBQ0EsNEVBQUNqQjs0QkFBVyxHQUFHQyxTQUFTOzs7Ozs7dUJBWG5CQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JqQiIsInNvdXJjZXMiOlsiL1VzZXJzL2dhdmluc3RlcGhlbnMvRG9jdW1lbnRzL0NvZGluZy9jb21lZHktc2l0ZS9wYWdlcy9fYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JzsgLy8gTWFyayB0aGlzIGZpbGUgYXMgYSBjbGllbnQgY29tcG9uZW50XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUG9kUHJvdmlkZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvUG9kY2FzdFByb3ZpZGVyJzsgLy8gWW91ciBQb2RjYXN0IGNvbnRleHQgcHJvdmlkZXJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuLy8gRnJhbWVyIE1vdGlvbiBmb3IgYW5pbWF0aW9uc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfSkge1xuICBjb25zdCBbaXNDbGllbnQsIHNldElzQ2xpZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBVc2UgdXNlRWZmZWN0IHRvIGVuc3VyZSB0aGlzIG9ubHkgcnVucyBjbGllbnQtc2lkZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzQ2xpZW50KHRydWUpOyAvLyBDbGllbnQtc3BlY2lmaWMgbG9naWNcbiAgfSwgW10pO1xuXG4gIC8vIElmIGl0J3Mgbm90IHRoZSBjbGllbnQsIHNob3cgYSBsb2FkaW5nIHN0YXRlXG4gIGlmICghaXNDbGllbnQpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgc2l6ZXM9J2FueScgLz5cblxuICAgICAgPGJvZHk+XG4gICAgICAgIDxQb2RQcm92aWRlcj5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAga2V5PXtyb3V0ZXJ9IC8vIEVuc3VyZXMgdGhhdCBtb3Rpb24gYW5pbWF0aW9uIHJlc2V0cyBvbiByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIGluaXRpYWw9J3BhZ2VJbml0aWFsJ1xuICAgICAgICAgICAgYW5pbWF0ZT0ncGFnZUFuaW1hdGUnXG4gICAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgICBwYWdlSW5pdGlhbDoge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHBhZ2VBbmltYXRlOiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgey8qIFJlbmRlciBjaGlsZHJlbiBjb250ZW50ICovfVxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9Qb2RQcm92aWRlcj5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQb2RQcm92aWRlciIsIm1vdGlvbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaXNDbGllbnQiLCJzZXRJc0NsaWVudCIsImRpdiIsImh0bWwiLCJsYW5nIiwibGluayIsInJlbCIsImhyZWYiLCJzaXplcyIsImJvZHkiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInZhcmlhbnRzIiwicGFnZUluaXRpYWwiLCJvcGFjaXR5IiwicGFnZUFuaW1hdGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./providers/PodcastProvider.js":
/*!**************************************!*\
  !*** ./providers/PodcastProvider.js ***!
  \**************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PodProvider: () => (/* binding */ PodProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   usePod: () => (/* binding */ usePod)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/* __next_internal_client_entry_do_not_use__ usePod,PodProvider,default auto */ \n\n\nconst API_URL = \"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spreaker.com%2Fshow%2F4245532%2Fepisodes%2Ffeed\";\nif (!API_URL) {\n    console.error('Missing NEXT_PUBLIC_PODCAST_URL environment variable!');\n}\nconst PodContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext();\nfunction usePod() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PodContext);\n}\nfunction PodProvider({ children }) {\n    const [eps, setEps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PodProvider.useEffect\": ()=>{\n            if (!API_URL) return;\n            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(API_URL).then({\n                \"PodProvider.useEffect\": (res)=>{\n                    setEps(res.data.items);\n                }\n            }[\"PodProvider.useEffect\"]).catch({\n                \"PodProvider.useEffect\": (err)=>{\n                    console.error('Failed to fetch episodes:', err);\n                }\n            }[\"PodProvider.useEffect\"]);\n        }\n    }[\"PodProvider.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PodContext.Provider, {\n        value: {\n            eps\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/gavinstephens/Documents/Coding/comedy-site/providers/PodcastProvider.js\",\n        lineNumber: 34,\n        columnNumber: 10\n    }, this);\n}\n// If you need to import as `import PodProvider from ...`\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PodProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wcm92aWRlcnMvUG9kY2FzdFByb3ZpZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFK0Q7QUFDckM7QUFFMUIsTUFBTUssVUFBVUMsZ0hBQW1DO0FBRW5ELElBQUksQ0FBQ0QsU0FBUztJQUNaSSxRQUFRQyxLQUFLLENBQUM7QUFDaEI7QUFFQSxNQUFNQywyQkFBYVgsZ0RBQW1CO0FBRS9CLFNBQVNhO0lBQ2QsT0FBT1YsaURBQVVBLENBQUNRO0FBQ3BCO0FBRU8sU0FBU0csWUFBWSxFQUFFQyxRQUFRLEVBQUU7SUFDdEMsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdoQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRWpDQyxnREFBU0E7aUNBQUM7WUFDUixJQUFJLENBQUNHLFNBQVM7WUFFZEQsaURBQ00sQ0FBQ0MsU0FDSmMsSUFBSTt5Q0FBQyxDQUFDQztvQkFDTEgsT0FBT0csSUFBSUMsSUFBSSxDQUFDQyxLQUFLO2dCQUN2Qjt3Q0FDQ0MsS0FBSzt5Q0FBQyxDQUFDQztvQkFDTmYsUUFBUUMsS0FBSyxDQUFDLDZCQUE2QmM7Z0JBQzdDOztRQUNKO2dDQUFHLEVBQUU7SUFFTCxxQkFBTyw4REFBQ2IsV0FBV2MsUUFBUTtRQUFDQyxPQUFPO1lBQUVWO1FBQUk7a0JBQUlEOzs7Ozs7QUFDL0M7QUFFQSx5REFBeUQ7QUFDekQsaUVBQWVELFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXZpbnN0ZXBoZW5zL0RvY3VtZW50cy9Db2RpbmcvY29tZWR5LXNpdGUvcHJvdmlkZXJzL1BvZGNhc3RQcm92aWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BPRENBU1RfVVJMO1xuXG5pZiAoIUFQSV9VUkwpIHtcbiAgY29uc29sZS5lcnJvcignTWlzc2luZyBORVhUX1BVQkxJQ19QT0RDQVNUX1VSTCBlbnZpcm9ubWVudCB2YXJpYWJsZSEnKTtcbn1cblxuY29uc3QgUG9kQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBvZCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoUG9kQ29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQb2RQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW2Vwcywgc2V0RXBzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghQVBJX1VSTCkgcmV0dXJuO1xuXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoQVBJX1VSTClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0RXBzKHJlcy5kYXRhLml0ZW1zKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZXBpc29kZXM6JywgZXJyKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxQb2RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGVwcyB9fT57Y2hpbGRyZW59PC9Qb2RDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuLy8gSWYgeW91IG5lZWQgdG8gaW1wb3J0IGFzIGBpbXBvcnQgUG9kUHJvdmlkZXIgZnJvbSAuLi5gXG5leHBvcnQgZGVmYXVsdCBQb2RQcm92aWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsImF4aW9zIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19QT0RDQVNUX1VSTCIsImNvbnNvbGUiLCJlcnJvciIsIlBvZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlUG9kIiwiUG9kUHJvdmlkZXIiLCJjaGlsZHJlbiIsImVwcyIsInNldEVwcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiaXRlbXMiLCJjYXRjaCIsImVyciIsIlByb3ZpZGVyIiwidmFsdWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./providers/PodcastProvider.js\n");

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