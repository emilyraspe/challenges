"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Light */ \"./components/Light/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const initialLights = [\n        {\n            id: 1,\n            name: \"Living Room\",\n            isOn: false\n        },\n        {\n            id: 2,\n            name: \"Kitchen\",\n            isOn: false\n        },\n        {\n            id: 3,\n            name: \"Bedroom\",\n            isOn: false\n        },\n        {\n            id: 4,\n            name: \"Bathroom\",\n            isOn: false\n        },\n        {\n            id: 5,\n            name: \"Garage\",\n            isOn: false\n        },\n        {\n            id: 6,\n            name: \"Porge\",\n            isOn: false\n        },\n        {\n            id: 7,\n            name: \"Garden\",\n            isOn: false\n        },\n        {\n            id: 8,\n            name: \"Office\",\n            isOn: false\n        }\n    ];\n    const [isOn, setIsOn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialLights);\n    isOn.map((light)=>{\n        console.log(\"Light id\", light.id);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/emilyraspe/Documents/Spiced/challenges/react/global-state/react-global-state_lights/pages/_app.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/emilyraspe/Documents/Spiced/challenges/react/global-state/react-global-state_lights/pages/_app.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emilyraspe/Documents/Spiced/challenges/react/global-state/react-global-state_lights/pages/_app.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"aMlM0YbcwIFCaMkKFRUqATGIKWo=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDTTtBQUNUO0FBQ007QUFFeEIsU0FBU0ksSUFBSSxLQUF3QjtRQUF4QixFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUF4Qjs7SUFDMUIsTUFBTUMsZ0JBQWdCO1FBQ3BCO1lBQUVDLElBQUk7WUFBR0MsTUFBTTtZQUFlQyxNQUFNO1FBQU07UUFDMUM7WUFBRUYsSUFBSTtZQUFHQyxNQUFNO1lBQVdDLE1BQU07UUFBTTtRQUN0QztZQUFFRixJQUFJO1lBQUdDLE1BQU07WUFBV0MsTUFBTTtRQUFNO1FBQ3RDO1lBQUVGLElBQUk7WUFBR0MsTUFBTTtZQUFZQyxNQUFNO1FBQU07UUFDdkM7WUFBRUYsSUFBSTtZQUFHQyxNQUFNO1lBQVVDLE1BQU07UUFBTTtRQUNyQztZQUFFRixJQUFJO1lBQUdDLE1BQU07WUFBU0MsTUFBTTtRQUFNO1FBQ3BDO1lBQUVGLElBQUk7WUFBR0MsTUFBTTtZQUFVQyxNQUFNO1FBQU07UUFDckM7WUFBRUYsSUFBSTtZQUFHQyxNQUFNO1lBQVVDLE1BQU07UUFBTTtLQUN0QztJQUVELE1BQU0sQ0FBQ0EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQ0s7SUFFakNHLEtBQUtFLElBQUksQ0FBQ0M7UUFDUkMsUUFBUUMsSUFBSSxZQUFZRixNQUFNTDtJQUNoQztJQUVBLHFCQUNFLDhEQUFDUCwwREFBTUE7OzBCQUNMLDhEQUFDRCwrQ0FBV0E7Ozs7OzBCQUVaLDhEQUFDSztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHOUI7R0F6QndCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpZ2h0IGZyb20gXCJAL2NvbXBvbmVudHMvTGlnaHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBpbml0aWFsTGlnaHRzID0gW1xuICAgIHsgaWQ6IDEsIG5hbWU6IFwiTGl2aW5nIFJvb21cIiwgaXNPbjogZmFsc2UgfSxcbiAgICB7IGlkOiAyLCBuYW1lOiBcIktpdGNoZW5cIiwgaXNPbjogZmFsc2UgfSxcbiAgICB7IGlkOiAzLCBuYW1lOiBcIkJlZHJvb21cIiwgaXNPbjogZmFsc2UgfSxcbiAgICB7IGlkOiA0LCBuYW1lOiBcIkJhdGhyb29tXCIsIGlzT246IGZhbHNlIH0sXG4gICAgeyBpZDogNSwgbmFtZTogXCJHYXJhZ2VcIiwgaXNPbjogZmFsc2UgfSxcbiAgICB7IGlkOiA2LCBuYW1lOiBcIlBvcmdlXCIsIGlzT246IGZhbHNlIH0sXG4gICAgeyBpZDogNywgbmFtZTogXCJHYXJkZW5cIiwgaXNPbjogZmFsc2UgfSxcbiAgICB7IGlkOiA4LCBuYW1lOiBcIk9mZmljZVwiLCBpc09uOiBmYWxzZSB9LFxuICBdO1xuXG4gIGNvbnN0IFtpc09uLCBzZXRJc09uXSA9IHVzZVN0YXRlKGluaXRpYWxMaWdodHMpO1xuXG4gIGlzT24ubWFwKChsaWdodCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiTGlnaHQgaWRcIiwgbGlnaHQuaWQpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cblxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwiTGF5b3V0IiwidXNlU3RhdGUiLCJMaWdodCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImluaXRpYWxMaWdodHMiLCJpZCIsIm5hbWUiLCJpc09uIiwic2V0SXNPbiIsIm1hcCIsImxpZ2h0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});