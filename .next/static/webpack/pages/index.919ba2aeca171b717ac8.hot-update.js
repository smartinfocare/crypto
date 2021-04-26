webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Graph/Graph.js":
/*!***********************************!*\
  !*** ./components/Graph/Graph.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Graph; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n\nvar _jsxFileName = \"/home/user/Documents/yashpro/git/crypto/components/Graph/Graph.js\";\n\nvar lineData = {\n  labels: ['1', '2', '3', '4', '5', '6'],\n  datasets: [{\n    label: '# of Votes',\n    data: [12, 19, 3, 5, 2, 3],\n    fill: false,\n    backgroundColor: 'rgb(255, 99, 132)',\n    borderColor: 'rgba(255, 99, 132, 0.2)'\n  }]\n};\nvar options = {\n  scales: {\n    yAxes: [{\n      ticks: {\n        beginAtZero: true\n      }\n    }]\n  }\n};\nvar data = {\n  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],\n  datasets: [{\n    label: '# of Votes',\n    data: [12, 19, 3, 5, 2, 3],\n    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],\n    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)']\n  }]\n};\nfunction Graph() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"mt-5\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"row \",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"col-md-6\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"card-body my\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__[\"Line\"], {\n            data: lineData,\n            options: options\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 5\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"col-md-6 my-card-margin\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"card-body\",\n          children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__[\"Line\"], {\n            data: lineData,\n            options: options\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 31\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 3\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 7\n  }, this);\n}\n_c = Graph;\n\nvar _c;\n\n$RefreshReg$(_c, \"Graph\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmFwaC9HcmFwaC5qcz85NTliIl0sIm5hbWVzIjpbImxpbmVEYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJmaWxsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJvcHRpb25zIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwiR3JhcGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUNBLElBQU1BLFFBQVEsR0FBRztBQUNiQyxRQUFNLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FESztBQUViQyxVQUFRLEVBQUUsQ0FDUjtBQUNFQyxTQUFLLEVBQUUsWUFEVDtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixDQUFsQixDQUZSO0FBR0VDLFFBQUksRUFBRSxLQUhSO0FBSUVDLG1CQUFlLEVBQUUsbUJBSm5CO0FBS0VDLGVBQVcsRUFBRTtBQUxmLEdBRFE7QUFGRyxDQUFqQjtBQWFFLElBQU1DLE9BQU8sR0FBRztBQUNkQyxRQUFNLEVBQUU7QUFDTkMsU0FBSyxFQUFFLENBQ0w7QUFDRUMsV0FBSyxFQUFFO0FBQ0xDLG1CQUFXLEVBQUU7QUFEUjtBQURULEtBREs7QUFERDtBQURNLENBQWhCO0FBWUYsSUFBTVIsSUFBSSxHQUFHO0FBQ1RILFFBQU0sRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFFBQWhCLEVBQTBCLE9BQTFCLEVBQW1DLFFBQW5DLEVBQTZDLFFBQTdDLENBREM7QUFFVEMsVUFBUSxFQUFFLENBQ1I7QUFDRUMsU0FBSyxFQUFFLFlBRFQ7QUFFRUMsUUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FGUjtBQUdFRSxtQkFBZSxFQUFFLENBQ2YseUJBRGUsRUFFZix5QkFGZSxFQUdmLHlCQUhlLEVBSWYseUJBSmUsRUFLZiwwQkFMZSxFQU1mLHlCQU5lLENBSG5CO0FBV0VDLGVBQVcsRUFBRSxDQUNYLHVCQURXLEVBRVgsdUJBRlcsRUFHWCx1QkFIVyxFQUlYLHVCQUpXLEVBS1gsd0JBTFcsRUFNWCx1QkFOVztBQVhmLEdBRFE7QUFGRCxDQUFiO0FBeUJlLFNBQVNNLEtBQVQsR0FBaUI7QUFDNUIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDJCQUNBO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDQTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLCtCQUNBO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsaUNBRUYscUVBQUMsb0RBQUQ7QUFBTSxnQkFBSSxFQUFFYixRQUFaO0FBQXNCLG1CQUFPLEVBQUVRO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBTUE7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUEsK0JBQ0o7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSx1Q0FBNEIscUVBQUMsb0RBQUQ7QUFBTSxnQkFBSSxFQUFFUixRQUFaO0FBQXNCLG1CQUFPLEVBQUVRO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDtLQWZxQkssSyIsImZpbGUiOiIuL2NvbXBvbmVudHMvR3JhcGgvR3JhcGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFBpZSAsTGluZX0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcbmNvbnN0IGxpbmVEYXRhID0ge1xuICAgIGxhYmVsczogWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNiddLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnIyBvZiBWb3RlcycsXG4gICAgICAgIGRhdGE6IFsxMiwgMTksIDMsIDUsIDIsIDNdLFxuICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI1NSwgOTksIDEzMiknLFxuICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjIpJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgc2NhbGVzOiB7XG4gICAgICB5QXhlczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH07XG4gIFxuY29uc3QgZGF0YSA9IHtcbiAgICBsYWJlbHM6IFsnUmVkJywgJ0JsdWUnLCAnWWVsbG93JywgJ0dyZWVuJywgJ1B1cnBsZScsICdPcmFuZ2UnXSxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxuICAgICAgICBkYXRhOiBbMTIsIDE5LCAzLCA1LCAyLCAzXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjIpJyxcbiAgICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDAuMiknLFxuICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKScsXG4gICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAwLjIpJyxcbiAgICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAwLjIpJyxcbiAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDAuMiknLFxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJDb2xvcjogW1xuICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMSknLFxuICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknLFxuICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxuICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxuICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDEpJyxcbiAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJyxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JhcGgoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBteVwiPlxuICAgICAgXG4gICAgPExpbmUgZGF0YT17bGluZURhdGF9IG9wdGlvbnM9e29wdGlvbnN9IC8+PC9kaXY+XG48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbXktY2FyZC1tYXJnaW5cIj5cbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj4gPExpbmUgZGF0YT17bGluZURhdGF9IG9wdGlvbnM9e29wdGlvbnN9IC8+PC9kaXY+XG4gPC9kaXY+XG48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Graph/Graph.js\n");

/***/ })

})