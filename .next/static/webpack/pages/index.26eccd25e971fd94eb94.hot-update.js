webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Graph/Graph.js":
/*!***********************************!*\
  !*** ./components/Graph/Graph.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Graph; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-highcharts */ \"./node_modules/react-highcharts/dist/ReactHighcharts.js\");\n/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n\nvar _jsxFileName = \"/home/user/Documents/yashpro/git/crypto/components/Graph/Graph.js\";\n\n\nvar lineData = {\n  labels: ['1', '2', '3', '4', '5', '6'],\n  datasets: [{\n    label: '# of Votes',\n    data: [12, 19, 3, 5, 2, 3],\n    fill: false,\n    backgroundColor: 'rgb(255, 99, 132)',\n    borderColor: 'rgba(255, 99, 132, 0.2)'\n  }]\n};\nvar options = {\n  scales: {\n    yAxes: [{\n      ticks: {\n        beginAtZero: true\n      }\n    }]\n  }\n};\nreact_highcharts__WEBPACK_IMPORTED_MODULE_1___default.a.name('container', {\n  chart: {\n    type: 'areaspline'\n  },\n  title: {\n    text: 'Average fruit consumption during one week'\n  },\n  legend: {\n    layout: 'vertical',\n    align: 'left',\n    verticalAlign: 'top',\n    x: 150,\n    y: 100,\n    floating: true,\n    borderWidth: 1\n  },\n  xAxis: {\n    categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],\n    plotBands: [{\n      // visualize the weekend\n      from: 4.5,\n      to: 6.5,\n      color: 'rgba(68, 170, 213, .2)'\n    }]\n  },\n  yAxis: {\n    title: {\n      text: 'Fruit units'\n    }\n  },\n  tooltip: {\n    shared: true,\n    valueSuffix: ' units'\n  },\n  credits: {\n    enabled: false\n  },\n  plotOptions: {\n    areaspline: {\n      fillOpacity: 0.5\n    }\n  },\n  series: [{\n    name: 'John',\n    data: [3, 4, 3, 5, 4, 10, 12]\n  }, {\n    name: 'Jane',\n    data: [1, 3, 4, 3, 3, 5, 4]\n  }]\n});\nvar data = {\n  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],\n  datasets: [{\n    label: '# of Votes',\n    data: [12, 19, 3, 5, 2, 3],\n    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],\n    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)']\n  }]\n};\nfunction Graph() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"mt-5\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"row \",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"col-md-6\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"card-body my\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n            \"class\": \"highcharts-figure\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              id: \"container\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 118,\n              columnNumber: 5\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              \"class\": \"highcharts-description\",\n              children: \"This demo shows a smoothed area chart with an x-axis plot band highlighting an area of interest at the last two points. Plot bands and plot lines are commonly used to draw attention to certain areas or thresholds.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 5\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"col-md-6 my-card-margin\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"card-body\",\n          children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__[\"Line\"], {\n            data: lineData,\n            options: options\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 31\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 3\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 112,\n    columnNumber: 7\n  }, this);\n}\n_c = Graph;\n\nvar _c;\n\n$RefreshReg$(_c, \"Graph\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmFwaC9HcmFwaC5qcz85NTliIl0sIm5hbWVzIjpbImxpbmVEYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJmaWxsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJvcHRpb25zIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwiSGlnaGNoYXJ0cyIsIm5hbWUiLCJjaGFydCIsInR5cGUiLCJ0aXRsZSIsInRleHQiLCJsZWdlbmQiLCJsYXlvdXQiLCJhbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJ4IiwieSIsImZsb2F0aW5nIiwiYm9yZGVyV2lkdGgiLCJ4QXhpcyIsImNhdGVnb3JpZXMiLCJwbG90QmFuZHMiLCJmcm9tIiwidG8iLCJjb2xvciIsInlBeGlzIiwidG9vbHRpcCIsInNoYXJlZCIsInZhbHVlU3VmZml4IiwiY3JlZGl0cyIsImVuYWJsZWQiLCJwbG90T3B0aW9ucyIsImFyZWFzcGxpbmUiLCJmaWxsT3BhY2l0eSIsInNlcmllcyIsIkdyYXBoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsUUFBUSxHQUFHO0FBQ2JDLFFBQU0sRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixDQURLO0FBRWJDLFVBQVEsRUFBRSxDQUNSO0FBQ0VDLFNBQUssRUFBRSxZQURUO0FBRUVDLFFBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLENBQWxCLENBRlI7QUFHRUMsUUFBSSxFQUFFLEtBSFI7QUFJRUMsbUJBQWUsRUFBRSxtQkFKbkI7QUFLRUMsZUFBVyxFQUFFO0FBTGYsR0FEUTtBQUZHLENBQWpCO0FBYUUsSUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFFBQU0sRUFBRTtB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O0FBQUcsdUJBQU0sd0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQWNBO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLCtCQUNKO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsdUNBQTRCLHFFQUFDLG9EQUFEO0FBQU0sZ0JBQUksRUFBRTNDLFFBQVo7QUFBc0IsbUJBQU8sRUFBRVE7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNCRDtLQXZCcUJtQyxLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9HcmFwaC9HcmFwaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIaWdoY2hhcnRzIGZyb20gJ3JlYWN0LWhpZ2hjaGFydHMnXG5pbXBvcnQgeyBQaWUgLExpbmV9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5jb25zdCBsaW5lRGF0YSA9IHtcbiAgICBsYWJlbHM6IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnXSxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxuICAgICAgICBkYXRhOiBbMTIsIDE5LCAzLCA1LCAyLCAzXSxcbiAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNTUsIDk5LCAxMzIpJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKScsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIFxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHNjYWxlczoge1xuICAgICAgeUF4ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9O1xuSGlnaGNoYXJ0cy5uYW1lKCdjb250YWluZXInLCB7XG4gICAgY2hhcnQ6IHtcbiAgICAgICAgdHlwZTogJ2FyZWFzcGxpbmUnXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgICB0ZXh0OiAnQXZlcmFnZSBmcnVpdCBjb25zdW1wdGlvbiBkdXJpbmcgb25lIHdlZWsnXG4gICAgfSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgICAgbGF5b3V0OiAndmVydGljYWwnLFxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgICAgeDogMTUwLFxuICAgICAgICB5OiAxMDAsXG4gICAgICAgIGZsb2F0aW5nOiB0cnVlLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICBcbiAgICB9LFxuICAgIHhBeGlzOiB7XG4gICAgICAgIGNhdGVnb3JpZXM6IFtcbiAgICAgICAgICAgICdNb25kYXknLFxuICAgICAgICAgICAgJ1R1ZXNkYXknLFxuICAgICAgICAgICAgJ1dlZG5lc2RheScsXG4gICAgICAgICAgICAnVGh1cnNkYXknLFxuICAgICAgICAgICAgJ0ZyaWRheScsXG4gICAgICAgICAgICAnU2F0dXJkYXknLFxuICAgICAgICAgICAgJ1N1bmRheSdcbiAgICAgICAgXSxcbiAgICAgICAgcGxvdEJhbmRzOiBbeyAvLyB2aXN1YWxpemUgdGhlIHdlZWtlbmRcbiAgICAgICAgICAgIGZyb206IDQuNSxcbiAgICAgICAgICAgIHRvOiA2LjUsXG4gICAgICAgICAgICBjb2xvcjogJ3JnYmEoNjgsIDE3MCwgMjEzLCAuMiknXG4gICAgICAgIH1dXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogJ0ZydWl0IHVuaXRzJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0b29sdGlwOiB7XG4gICAgICAgIHNoYXJlZDogdHJ1ZSxcbiAgICAgICAgdmFsdWVTdWZmaXg6ICcgdW5pdHMnXG4gICAgfSxcbiAgICBjcmVkaXRzOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgfSxcbiAgICBwbG90T3B0aW9uczoge1xuICAgICAgICBhcmVhc3BsaW5lOiB7XG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMC41XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNlcmllczogW3tcbiAgICAgICAgbmFtZTogJ0pvaG4nLFxuICAgICAgICBkYXRhOiBbMywgNCwgMywgNSwgNCwgMTAsIDEyXVxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0phbmUnLFxuICAgICAgICBkYXRhOiBbMSwgMywgNCwgMywgMywgNSwgNF1cbiAgICB9XVxufSk7XG5jb25zdCBkYXRhID0ge1xuICAgIGxhYmVsczogWydSZWQnLCAnQmx1ZScsICdZZWxsb3cnLCAnR3JlZW4nLCAnUHVycGxlJywgJ09yYW5nZSddLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnIyBvZiBWb3RlcycsXG4gICAgICAgIGRhdGE6IFsxMiwgMTksIDMsIDUsIDIsIDNdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDAuMiknLFxuICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKScsXG4gICAgICAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAwLjIpJyxcbiAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDAuMiknLFxuICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDAuMiknLFxuICAgICAgICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMC4yKScsXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlckNvbG9yOiBbXG4gICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAxKScsXG4gICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXG4gICAgICAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAxKScsXG4gICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAxKScsXG4gICAgICAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMSknLFxuICAgICAgICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMSknLFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmFwaCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IG15XCI+XG4gICAgICBcbiAgICAgIDxmaWd1cmUgY2xhc3M9XCJoaWdoY2hhcnRzLWZpZ3VyZVwiPlxuICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj48L2Rpdj5cbiAgICA8cCBjbGFzcz1cImhpZ2hjaGFydHMtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgVGhpcyBkZW1vIHNob3dzIGEgc21vb3RoZWQgYXJlYSBjaGFydCB3aXRoIGFuIHgtYXhpcyBwbG90IGJhbmRcbiAgICAgICAgaGlnaGxpZ2h0aW5nIGFuIGFyZWEgb2YgaW50ZXJlc3QgYXQgdGhlIGxhc3QgdHdvIHBvaW50cy4gUGxvdCBiYW5kc1xuICAgICAgICBhbmQgcGxvdCBsaW5lcyBhcmUgY29tbW9ubHkgdXNlZCB0byBkcmF3IGF0dGVudGlvbiB0byBjZXJ0YWluIGFyZWFzIG9yXG4gICAgICAgIHRocmVzaG9sZHMuXG4gICAgPC9wPlxuPC9maWd1cmU+PC9kaXY+XG48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbXktY2FyZC1tYXJnaW5cIj5cbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj4gPExpbmUgZGF0YT17bGluZURhdGF9IG9wdGlvbnM9e29wdGlvbnN9IC8+PC9kaXY+XG4gPC9kaXY+XG48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Graph/Graph.js\n");

/***/ })

})