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

/***/ "./components/Light/Light.styled.js":
/*!******************************************!*\
  !*** ./components/Light/Light.styled.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Icon: function() { return /* binding */ Icon; },\n/* harmony export */   LightButton: function() { return /* binding */ LightButton; },\n/* harmony export */   Name: function() { return /* binding */ Name; },\n/* harmony export */   State: function() { return /* binding */ State; },\n/* harmony export */   Text: function() { return /* binding */ Text; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  border: none;\\n  background-color: \",\n        \";\\n  backdrop-filter: blur(10px) brightness(1.2);\\n  border-radius: 8px;\\n  padding: 8px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  aspect-ratio: 1;\\n  width: 160px;\\n  gap: 12px;\\n  color: black;\\n  transition: background-color 0.2s;\\n\\n  &:hover {\\n    background-color: \",\n        \";\\n  }\\n\\n  &:active {\\n    background-color: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: 32px;\\n  filter: \",\n        \";\\n  transition: filter 0.2s;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  gap: 2px;\\n  font-size: 14px;\\n  align-items: flex-start;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-weight: bold;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  color: #666;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst LightButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button.withConfig({\n    displayName: \"Light.styled__LightButton\",\n    componentId: \"sc-bd50bf31-0\"\n})(_templateObject(), (param)=>{\n    let { $isOn } = param;\n    return $isOn ? \"rgb(255 255 255 / 0.5)\" : \"rgb(175 175 175 / 0.5)\";\n}, (param)=>{\n    let { $isOn } = param;\n    return $isOn ? \"rgb(255 255 255 / 0.55)\" : \"rgb(175 175 175 / 0.55)\";\n}, (param)=>{\n    let { $isOn } = param;\n    return $isOn ? \"rgb(255 255 255 / 0.6)\" : \"rgb(175 175 175 / 0.6)\";\n});\nconst Icon = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Light.styled__Icon\",\n    componentId: \"sc-bd50bf31-1\"\n})(_templateObject1(), (param)=>{\n    let { $isOn } = param;\n    return $isOn ? \"none\" : \"grayscale(100%)\";\n});\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Light.styled__Text\",\n    componentId: \"sc-bd50bf31-2\"\n})(_templateObject2());\nconst Name = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Light.styled__Name\",\n    componentId: \"sc-bd50bf31-3\"\n})(_templateObject3());\nconst State = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Light.styled__State\",\n    componentId: \"sc-bd50bf31-4\"\n})(_templateObject4());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpZ2h0L0xpZ2h0LnN0eWxlZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsTUFBTUMsY0FBY0QsZ0VBQWFFOzs7c0JBRWxCO1FBQUMsRUFBRUMsS0FBSyxFQUFFO1dBQzVCQSxRQUFRLDJCQUEyQjtBQUF1QixHQWN0QztRQUFDLEVBQUVBLEtBQUssRUFBRTtXQUM1QkEsUUFBUSw0QkFBNEI7QUFBd0IsR0FJMUM7UUFBQyxFQUFFQSxLQUFLLEVBQUU7V0FDNUJBLFFBQVEsMkJBQTJCO0FBQXVCLEdBRTlEO0FBRUssTUFBTUMsT0FBT0osNkRBQVVLOzs7dUJBRWxCO1FBQUMsRUFBRUYsS0FBSyxFQUFFO1dBQU1BLFFBQVEsU0FBUztBQUFnQixHQUUzRDtBQUVLLE1BQU1HLE9BQU9OLDZEQUFVSzs7O3VCQU01QjtBQUVLLE1BQU1FLE9BQU9QLDZEQUFVSzs7O3VCQUU1QjtBQUVLLE1BQU1HLFFBQVFSLDZEQUFVSzs7O3VCQUU3QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpZ2h0L0xpZ2h0LnN0eWxlZC5qcz9jZDM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBMaWdodEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyAkaXNPbiB9KSA9PlxuICAgICRpc09uID8gXCJyZ2IoMjU1IDI1NSAyNTUgLyAwLjUpXCIgOiBcInJnYigxNzUgMTc1IDE3NSAvIDAuNSlcIn07XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KSBicmlnaHRuZXNzKDEuMik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgd2lkdGg6IDE2MHB4O1xuICBnYXA6IDEycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgJGlzT24gfSkgPT5cbiAgICAgICRpc09uID8gXCJyZ2IoMjU1IDI1NSAyNTUgLyAwLjU1KVwiIDogXCJyZ2IoMTc1IDE3NSAxNzUgLyAwLjU1KVwifTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7ICRpc09uIH0pID0+XG4gICAgICAkaXNPbiA/IFwicmdiKDI1NSAyNTUgMjU1IC8gMC42KVwiIDogXCJyZ2IoMTc1IDE3NSAxNzUgLyAwLjYpXCJ9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSWNvbiA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZmlsdGVyOiAkeyh7ICRpc09uIH0pID0+ICgkaXNPbiA/IFwibm9uZVwiIDogXCJncmF5c2NhbGUoMTAwJSlcIil9O1xuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4ycztcbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5gO1xuXG5leHBvcnQgY29uc3QgTmFtZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0YXRlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICM2NjY7XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkxpZ2h0QnV0dG9uIiwiYnV0dG9uIiwiJGlzT24iLCJJY29uIiwiZGl2IiwiVGV4dCIsIk5hbWUiLCJTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Light/Light.styled.js\n"));

/***/ }),

/***/ "./components/Light/index.js":
/*!***********************************!*\
  !*** ./components/Light/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Light; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Light_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Light.styled */ \"./components/Light/Light.styled.js\");\n\n\n\nfunction Light(param) {\n    let { name, isOn, onToggle } = param;\n    /* const [isOn, setIsOn] = useState(false); */ function handleToggle() {\n        setIsOn((isOn)=>!isOn);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Light_styled__WEBPACK_IMPORTED_MODULE_2__.LightButton, {\n        type: \"button\",\n        onClick: ()=>{\n            handleToggle();\n        },\n        $isOn: isOn,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Light_styled__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n                $isOn: isOn,\n                children: \"\\uD83D\\uDCA1\"\n            }, void 0, false, {\n                fileName: \"/Users/emilyraspe/Documents/Spiced/challenges/react/global-state/react-global-state_lights/components/Light/index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Light_styled__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Light_styled__WEBPACK_IMPORTED_MODULE_2__.Name, {\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyraspe/Documents/Spiced/challenges/react/global-state/react-global-state_lights/components/Light/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Light_styled__WEBPACK_IMPORTED_MODULE_2__.State, {\n                        children: isOn ? \"On\" : \"Off\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyraspe/Documents/Spiced/challenges/react/global-state/react-global-state_lights/components/Light/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyraspe/Documents/Spiced/challenges/react/global-state/react-global-state_lights/components/Light/index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emilyraspe/Documents/Spiced/challenges/react/global-state/react-global-state_lights/components/Light/index.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Light;\nvar _c;\n$RefreshReg$(_c, \"Light\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpZ2h0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFDcUM7QUFFdkQsU0FBU00sTUFBTSxLQUF3QjtRQUF4QixFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFLEdBQXhCO0lBQzVCLDRDQUE0QyxHQUU1QyxTQUFTQztRQUNQQyxRQUFRLENBQUNILE9BQVMsQ0FBQ0E7SUFDckI7SUFFQSxxQkFDRSw4REFBQ1Asc0RBQVdBO1FBQ1ZXLE1BQUs7UUFDTEMsU0FBUztZQUNQSDtRQUNGO1FBQ0FJLE9BQU9OOzswQkFFUCw4REFBQ04sK0NBQUlBO2dCQUFDWSxPQUFPTjswQkFBTTs7Ozs7OzBCQUNuQiw4REFBQ0wsK0NBQUlBOztrQ0FDSCw4REFBQ0MsK0NBQUlBO2tDQUFFRzs7Ozs7O2tDQUNQLDhEQUFDRixnREFBS0E7a0NBQUVHLE9BQU8sT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0tBdEJ3QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaWdodC9pbmRleC5qcz8zNmVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaWdodEJ1dHRvbiwgSWNvbiwgVGV4dCwgTmFtZSwgU3RhdGUgfSBmcm9tIFwiLi9MaWdodC5zdHlsZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlnaHQoeyBuYW1lLCBpc09uLCBvblRvZ2dsZSB9KSB7XG4gIC8qIGNvbnN0IFtpc09uLCBzZXRJc09uXSA9IHVzZVN0YXRlKGZhbHNlKTsgKi9cblxuICBmdW5jdGlvbiBoYW5kbGVUb2dnbGUoKSB7XG4gICAgc2V0SXNPbigoaXNPbikgPT4gIWlzT24pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGlnaHRCdXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBoYW5kbGVUb2dnbGUoKTtcbiAgICAgIH19XG4gICAgICAkaXNPbj17aXNPbn1cbiAgICA+XG4gICAgICA8SWNvbiAkaXNPbj17aXNPbn0+8J+SoTwvSWNvbj5cbiAgICAgIDxUZXh0PlxuICAgICAgICA8TmFtZT57bmFtZX08L05hbWU+XG4gICAgICAgIDxTdGF0ZT57aXNPbiA/IFwiT25cIiA6IFwiT2ZmXCJ9PC9TdGF0ZT5cbiAgICAgIDwvVGV4dD5cbiAgICA8L0xpZ2h0QnV0dG9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGlnaHRCdXR0b24iLCJJY29uIiwiVGV4dCIsIk5hbWUiLCJTdGF0ZSIsIkxpZ2h0IiwibmFtZSIsImlzT24iLCJvblRvZ2dsZSIsImhhbmRsZVRvZ2dsZSIsInNldElzT24iLCJ0eXBlIiwib25DbGljayIsIiRpc09uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Light/index.js\n"));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Light */ \"./components/Light/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const initialLights = [\n        {\n            id: 1,\n            name: \"Living Room\",\n            isOn: false\n        },\n        {\n            id: 2,\n            name: \"Kitchen\",\n            isOn: false\n        },\n        {\n            id: 3,\n            name: \"Bedroom\",\n            isOn: false\n        },\n        {\n            id: 4,\n            name: \"Bathroom\",\n            isOn: false\n        },\n        {\n            id: 5,\n            name: \"Garage\",\n            isOn: false\n        },\n        {\n            id: 6,\n            name: \"Porge\",\n            isOn: false\n        },\n        {\n            id: 7,\n            name: \"Garden\",\n            isOn: false\n        },\n        {\n            id: 8,\n            name: \"Office\",\n            isOn: false\n        }\n    ];\n    const [isOn, setIsOn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialLights);\n    function handleToggle() {\n        setIsOn((isOn)=>!isOn);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/emilyraspe/Documents/Spiced/challenges/react/global-state/react-global-state_lights/pages/_app.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Light__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onToggle: ()=>handleToggle(light.id)\n            }, void 0, false, {\n                fileName: \"/Users/emilyraspe/Documents/Spiced/challenges/react/global-state/react-global-state_lights/pages/_app.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/emilyraspe/Documents/Spiced/challenges/react/global-state/react-global-state_lights/pages/_app.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emilyraspe/Documents/Spiced/challenges/react/global-state/react-global-state_lights/pages/_app.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"aMlM0YbcwIFCaMkKFRUqATGIKWo=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDTTtBQUNUO0FBQ007QUFFeEIsU0FBU0ksSUFBSSxLQUF3QjtRQUF4QixFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUF4Qjs7SUFDMUIsTUFBTUMsZ0JBQWdCO1FBQ3BCO1lBQUVDLElBQUk7WUFBR0MsTUFBTTtZQUFlQyxNQUFNO1FBQU07UUFDMUM7WUFBRUYsSUFBSTtZQUFHQyxNQUFNO1lBQVdDLE1BQU07UUFBTTtRQUN0QztZQUFFRixJQUFJO1lBQUdDLE1BQU07WUFBV0MsTUFBTTtRQUFNO1FBQ3RDO1lBQUVGLElBQUk7WUFBR0MsTUFBTTtZQUFZQyxNQUFNO1FBQU07UUFDdkM7WUFBRUYsSUFBSTtZQUFHQyxNQUFNO1lBQVVDLE1BQU07UUFBTTtRQUNyQztZQUFFRixJQUFJO1lBQUdDLE1BQU07WUFBU0MsTUFBTTtRQUFNO1FBQ3BDO1lBQUVGLElBQUk7WUFBR0MsTUFBTTtZQUFVQyxNQUFNO1FBQU07UUFDckM7WUFBRUYsSUFBSTtZQUFHQyxNQUFNO1lBQVVDLE1BQU07UUFBTTtLQUN0QztJQUVELE1BQU0sQ0FBQ0EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQ0s7SUFFakMsU0FBU0s7UUFDUEQsUUFBUSxDQUFDRCxPQUFTLENBQUNBO0lBQ3JCO0lBRUEscUJBQ0UsOERBQUNULDBEQUFNQTs7MEJBQ0wsOERBQUNELCtDQUFXQTs7Ozs7MEJBQ1osOERBQUNHLHlEQUFLQTtnQkFBQ1UsVUFBVSxJQUFNRCxhQUFhRSxNQUFNTjs7Ozs7OzBCQUMxQyw4REFBQ0g7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCO0dBekJ3QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaWdodCBmcm9tIFwiQC9jb21wb25lbnRzL0xpZ2h0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgaW5pdGlhbExpZ2h0cyA9IFtcbiAgICB7IGlkOiAxLCBuYW1lOiBcIkxpdmluZyBSb29tXCIsIGlzT246IGZhbHNlIH0sXG4gICAgeyBpZDogMiwgbmFtZTogXCJLaXRjaGVuXCIsIGlzT246IGZhbHNlIH0sXG4gICAgeyBpZDogMywgbmFtZTogXCJCZWRyb29tXCIsIGlzT246IGZhbHNlIH0sXG4gICAgeyBpZDogNCwgbmFtZTogXCJCYXRocm9vbVwiLCBpc09uOiBmYWxzZSB9LFxuICAgIHsgaWQ6IDUsIG5hbWU6IFwiR2FyYWdlXCIsIGlzT246IGZhbHNlIH0sXG4gICAgeyBpZDogNiwgbmFtZTogXCJQb3JnZVwiLCBpc09uOiBmYWxzZSB9LFxuICAgIHsgaWQ6IDcsIG5hbWU6IFwiR2FyZGVuXCIsIGlzT246IGZhbHNlIH0sXG4gICAgeyBpZDogOCwgbmFtZTogXCJPZmZpY2VcIiwgaXNPbjogZmFsc2UgfSxcbiAgXTtcblxuICBjb25zdCBbaXNPbiwgc2V0SXNPbl0gPSB1c2VTdGF0ZShpbml0aWFsTGlnaHRzKTtcblxuICBmdW5jdGlvbiBoYW5kbGVUb2dnbGUoKSB7XG4gICAgc2V0SXNPbigoaXNPbikgPT4gIWlzT24pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8TGlnaHQgb25Ub2dnbGU9eygpID0+IGhhbmRsZVRvZ2dsZShsaWdodC5pZCl9PjwvTGlnaHQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJMYXlvdXQiLCJ1c2VTdGF0ZSIsIkxpZ2h0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaW5pdGlhbExpZ2h0cyIsImlkIiwibmFtZSIsImlzT24iLCJzZXRJc09uIiwiaGFuZGxlVG9nZ2xlIiwib25Ub2dnbGUiLCJsaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});