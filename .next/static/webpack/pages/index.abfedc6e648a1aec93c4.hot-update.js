webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reflexbox */ \"./node_modules/reflexbox/dist/index.js\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rebass */ \"./node_modules/rebass/dist/index.esm.js\");\n/* harmony import */ var react_wavify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-wavify */ \"./node_modules/react-wavify/lib/index.module.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/pages/index.js\",\n    _s = $RefreshSig$(),\n    _this = undefined;\n\nfunction _templateObject() {\n  var data = Object(_Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\n    margin: 0;\\n    padding: 0;\\n\\n    .wave-container {\\n        margin-top: 10vh;\\n\\n        h1 {\\n            text-align: center;\\n            color: #7fffd4;\\n        }\\n\\n        h2 {\\n            text-align: center;\\n            color: #7fffd4;\\n            font-size: 3rem;\\n        }\\n    }\\n    \\n    .resume-text-button-container {\\n        display: flex;\\n        flex-direction: row;\\n        justify-content: center;\\n        align-content: center;\\n        align-items: center;\\n        gap: 1vw;\\n\\n        h3 {\\n            color: #fff;\\n        }\\n        /* Button {\\n        } */\\n        .icon {\\n            height: 35px;\\n            background-color: #000000;\\n            color: #fff;\\n            cursor: pointer;\\n            border-radius: 50%;\\n        }\\n    }\\n\\n    .wave {\\n        height: 50vh;\\n        m\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nfunction download() {\n  _s();\n\n  var API_URL = \"http://localhost:1337\";\n\n  var _useState = useState(false),\n      _useState2 = Object(_Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState, 2),\n      download = _useState2[0],\n      setDownload = _useState2[1];\n\n  fetch(\"\".concat(API_URL, \"/downloads\"), {\n    method: \"GET\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    }\n  }).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    return console.log(data);\n  })[\"catch\"](function (error) {\n    console.log(\"Error : \", error);\n  });\n\n  var handleDownload = function handleDownload(e) {\n    e.preventDefault();\n    setIsDownloaded(true);\n  };\n}\n\n_s(download, \"ypxyTIlIzY1A0l3dAlAyg9TTLYQ=\");\n\nvar Home = function Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(HomeStyled, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n        className: \"wave-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n          children: \"Hi, I'm Nick Perry!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n          children: \" -Software Developer- \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n          className: \"resume-text-button-container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n            children: \"Download my resume\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            href: \"resume.pdf\",\n            target: \"_blank\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n              className: \"icon\",\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faArrowAltCircleDown\"]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_wavify__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          className: \"wave\",\n          fill: \"url(#gradient)\",\n          options: {\n            amplitude: 20,\n            speed: 0.25,\n            points: 4\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"defs\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"linearGradient\", {\n              id: \"gradient\",\n              gradientTransform: \"rotate(90deg)\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"stop\", {\n                offset: \"10%\",\n                stopColor: \"#552586\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"stop\", {\n                offset: \"90%\",\n                stopColor: \"#B589D6\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_c = Home;\nvar HomeStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c2 = HomeStyled;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"HomeStyled\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJkb3dubG9hZCIsIkFQSV9VUkwiLCJwcm9jZXNzIiwidXNlU3RhdGUiLCJzZXREb3dubG9hZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaGFuZGxlRG93bmxvYWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRJc0Rvd25sb2FkZWQiLCJIb21lIiwiZmFBcnJvd0FsdENpcmNsZURvd24iLCJhbXBsaXR1ZGUiLCJzcGVlZCIsInBvaW50cyIsIkhvbWVTdHlsZWQiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLE1BQ1JDLE9BRFEsR0FDSUMsdUJBREo7O0FBQUEsa0JBRWdCQyxRQUFRLENBQUMsS0FBRCxDQUZ4QjtBQUFBO0FBQUEsTUFFVEgsUUFGUztBQUFBLE1BRUNJLFdBRkQ7O0FBSWhCQyxPQUFLLFdBQ0VKLE9BREYsaUJBQ3VCO0FBQ3BCSyxVQUFNLEVBQUUsS0FEWTtBQUVwQkMsV0FBTyxFQUFFO0FBQ0wsc0JBQWlCO0FBRFo7QUFGVyxHQUR2QixDQUFMLENBT0NDLElBUEQsQ0FPTSxVQUFBQyxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxHQVBkLEVBUUNGLElBUkQsQ0FRTSxVQUFBRyxJQUFJO0FBQUEsV0FBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosQ0FBSjtBQUFBLEdBUlYsV0FTTyxVQUFDRyxLQUFELEVBQVc7QUFDZEYsV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkMsS0FBeEI7QUFDSCxHQVhEOztBQWFBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsbUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDSCxHQUhEO0FBS0g7O0dBdEJRbEIsUTs7QUF3QlQsSUFBTW1CLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFFZixzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLFVBQUQ7QUFBQSw2QkFDSSxxRUFBQyw2Q0FBRDtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0kscUVBQUMsNkNBQUQ7QUFBSyxtQkFBUyxFQUFDLDhCQUFmO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFHLGdCQUFJLEVBQUMsWUFBUjtBQUFxQixrQkFBTSxFQUFDLFFBQTVCO0FBQUEsbUNBQ0kscUVBQUMsOEVBQUQ7QUFBaUIsdUJBQVMsRUFBQyxNQUEzQjtBQUFrQyxrQkFBSSxFQUFFQyxzRkFBb0JBO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQVNJLHFFQUFDLG9EQUFEO0FBQU0sbUJBQVMsRUFBQyxNQUFoQjtBQUF1QixjQUFJLEVBQUMsZ0JBQTVCO0FBQTZDLGlCQUFPLEVBQUU7QUFBRUMscUJBQVMsRUFBRSxFQUFiO0FBQWlCQyxpQkFBSyxFQUFFLElBQXhCO0FBQThCQyxrQkFBTSxFQUFFO0FBQXRDLFdBQXREO0FBQUEsaUNBQ0k7QUFBQSxtQ0FDSTtBQUFnQixnQkFBRSxFQUFDLFVBQW5CO0FBQThCLCtCQUFpQixFQUFDLGVBQWhEO0FBQUEsc0NBQ0k7QUFBTSxzQkFBTSxFQUFDLEtBQWI7QUFBbUIseUJBQVMsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBTSxzQkFBTSxFQUFDLEtBQWI7QUFBbUIseUJBQVMsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQXdCSCxDQTFCRDs7S0FBTUosSTtBQTRCTixJQUFNSyxVQUFVLEdBQUdDLHVEQUFNLENBQUNDLEdBQVYsbUJBQWhCO01BQU1GLFU7QUFnRFNMLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZWZsZXhib3gnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmViYXNzJztcbmltcG9ydCBXYXZlIGZyb20gJ3JlYWN0LXdhdmlmeSc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFBcnJvd0FsdENpcmNsZURvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5mdW5jdGlvbiBkb3dubG9hZCgpIHtcbiAgICBjb25zdCB7IEFQSV9VUkwgfSA9IHByb2Nlc3MuZW52O1xuICAgIGNvbnN0IFtkb3dubG9hZCwgc2V0RG93bmxvYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgZmV0Y2goXG4gICAgICAgIGAke0FQSV9VUkx9L2Rvd25sb2Fkc2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiIDogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIDogXCIsIGVycm9yKVxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlRG93bmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldElzRG93bmxvYWRlZCh0cnVlKVxuICAgIH1cblxufVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIb21lU3R5bGVkPlxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwid2F2ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkhpLCBJJ20gTmljayBQZXJyeSE8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDI+IC1Tb2Z0d2FyZSBEZXZlbG9wZXItIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwicmVzdW1lLXRleHQtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkRvd25sb2FkIG15IHJlc3VtZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicmVzdW1lLnBkZlwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwiaWNvblwiIGljb249e2ZhQXJyb3dBbHRDaXJjbGVEb3dufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPFdhdmUgY2xhc3NOYW1lPVwid2F2ZVwiIGZpbGw9XCJ1cmwoI2dyYWRpZW50KVwiIG9wdGlvbnM9e3sgYW1wbGl0dWRlOiAyMCwgc3BlZWQ6IDAuMjUsIHBvaW50czogNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImdyYWRpZW50XCIgZ3JhZGllbnRUcmFuc2Zvcm09XCJyb3RhdGUoOTBkZWcpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwJVwiIHN0b3BDb2xvcj1cIiM1NTI1ODZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI5MCVcIiBzdG9wQ29sb3I9XCIjQjU4OUQ2XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgICAgICA8L1dhdmU+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0hvbWVTdHlsZWQ+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmNvbnN0IEhvbWVTdHlsZWQgPSBzdHlsZWQuZGl2YFxuXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAud2F2ZS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjN2ZmZmQ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICM3ZmZmZDQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnJlc3VtZS10ZXh0LWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDF2dztcblxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAvKiBCdXR0b24ge1xuICAgICAgICB9ICovXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC53YXZlIHtcbiAgICAgICAgaGVpZ2h0OiA1MHZoO1xuICAgICAgICBtXG4gICAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})