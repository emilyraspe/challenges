"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/lights",{

/***/ "./components/Lights/index.js":
/*!************************************!*\
  !*** ./components/Lights/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Lights; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Light */ \"./components/Light/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  list-style-type: none;\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 32px;\\n  padding: 0;\\n  margin: 0;\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst StyledLights = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ul.withConfig({\n    displayName: \"Lights__StyledLights\",\n    componentId: \"sc-ddb5fe8e-0\"\n})(_templateObject());\n_c = StyledLights;\nfunction Lights(param) {\n    let { lights, toggleLight } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledLights, {\n        children: lights.map((light)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Light__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    light: light,\n                    onToggle: toggleLight\n                }, void 0, false, {\n                    fileName: \"/Users/emilyraspe/Documents/Spiced/challenges/react/global-state/react-global-state_lights/components/Lights/index.js\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, this)\n            }, light.id, false, {\n                fileName: \"/Users/emilyraspe/Documents/Spiced/challenges/react/global-state/react-global-state_lights/components/Lights/index.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/emilyraspe/Documents/Spiced/challenges/react/global-state/react-global-state_lights/components/Lights/index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Lights;\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledLights\");\n$RefreshReg$(_c1, \"Lights\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpZ2h0cy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNWO0FBRTdCLE1BQU1FLGVBQWVGLDREQUFTRzs7OztLQUF4QkQ7QUFVUyxTQUFTRSxPQUFPLEtBQXVCO1FBQXZCLEVBQUVDLE1BQU0sRUFBRUMsV0FBVyxFQUFFLEdBQXZCO0lBQzdCLHFCQUNFLDhEQUFDSjtrQkFDRUcsT0FBT0UsSUFBSSxDQUFDQyxzQkFDWCw4REFBQ0M7MEJBQ0MsNEVBQUNSLDhDQUFLQTtvQkFBQ08sT0FBT0E7b0JBQU9FLFVBQVVKOzs7Ozs7ZUFEeEJFLE1BQU1HOzs7Ozs7Ozs7O0FBTXZCO01BVndCUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpZ2h0cy9pbmRleC5qcz8yYWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTGlnaHQgZnJvbSBcIi4uL0xpZ2h0XCI7XG5cbmNvbnN0IFN0eWxlZExpZ2h0cyA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMzJweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpZ2h0cyh7IGxpZ2h0cywgdG9nZ2xlTGlnaHQgfSkge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRMaWdodHM+XG4gICAgICB7bGlnaHRzLm1hcCgobGlnaHQpID0+IChcbiAgICAgICAgPGxpIGtleT17bGlnaHQuaWR9PlxuICAgICAgICAgIDxMaWdodCBsaWdodD17bGlnaHR9IG9uVG9nZ2xlPXt0b2dnbGVMaWdodH0gLz5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvU3R5bGVkTGlnaHRzPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkxpZ2h0IiwiU3R5bGVkTGlnaHRzIiwidWwiLCJMaWdodHMiLCJsaWdodHMiLCJ0b2dnbGVMaWdodCIsIm1hcCIsImxpZ2h0IiwibGkiLCJvblRvZ2dsZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Lights/index.js\n"));

/***/ })

});