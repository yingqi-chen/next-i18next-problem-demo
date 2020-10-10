webpackHotUpdate_N_E("pages/_error",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fmnt%2Fc%2FUsers%2FCACABUTT%2Fnext-i18next%2Fexamples%2Fsimple%2Fpages%2F_error.js!./":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fmnt%2Fc%2FUsers%2FCACABUTT%2Fnext-i18next%2Fexamples%2Fsimple%2Fpages%2F_error.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_4__);



var _this = undefined,
    _jsxFileName = "/mnt/c/Users/CACABUTT/next-i18next/examples/simple/pages/_error.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Error = function Error(_ref) {
  var statusCode = _ref.statusCode,
      t = _ref.t;
  return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, statusCode ? t('error-with-status', {
    statusCode: statusCode
  }) : t('error-without-status'));
};

_c = Error;

Error.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var res, err, statusCode;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _ref2.res, err = _ref2.err;
            statusCode = null;

            if (res) {
              statusCode = res.statusCode;
            } else if (err) {
              statusCode = err.statusCode;
            }

            return _context.abrupt("return", {
              namespacesRequired: ['common'],
              statusCode: statusCode
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

Error.defaultProps = {
  statusCode: null
};
Error.propTypes = {
  statusCode: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_4__["withTranslation"])('common')(Error));

var _c;

$RefreshReg$(_c, "Error");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fZXJyb3IuanMiXSwibmFtZXMiOlsiRXJyb3IiLCJzdGF0dXNDb2RlIiwidCIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUFvRTtBQUMzRjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLE1BQUdDLFVBQUgsUUFBR0EsVUFBSDtBQUFBLE1BQWVDLENBQWYsUUFBZUEsQ0FBZjtBQUFBLFNBQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxVQUFVLEdBQ1BDLENBQUMsQ0FBQyxtQkFBRCxFQUFzQjtBQUFFRCxjQUFVLEVBQVZBO0FBQUYsR0FBdEIsQ0FETSxHQUVQQyxDQUFDLENBQUMsc0JBQUQsQ0FIUCxDQURZO0FBQUEsQ0FBZDs7S0FBTUYsSzs7QUFRTkEsS0FBSyxDQUFDRyxlQUFOO0FBQUEsK0xBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxlQUFULFNBQVNBLEdBQVQsRUFBY0MsR0FBZCxTQUFjQSxHQUFkO0FBQ2xCSixzQkFEa0IsR0FDTCxJQURLOztBQUV0QixnQkFBSUcsR0FBSixFQUFTO0FBQ0pILHdCQURJLEdBQ1dHLEdBRFgsQ0FDSkgsVUFESTtBQUVSLGFBRkQsTUFFTyxJQUFJSSxHQUFKLEVBQVM7QUFDWEosd0JBRFcsR0FDSUksR0FESixDQUNYSixVQURXO0FBRWY7O0FBTnFCLDZDQU9mO0FBQ0xLLGdDQUFrQixFQUFFLENBQUMsUUFBRCxDQURmO0FBRUxMLHdCQUFVLEVBQVZBO0FBRkssYUFQZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhQUQsS0FBSyxDQUFDTyxZQUFOLEdBQXFCO0FBQ25CTixZQUFVLEVBQUU7QUFETyxDQUFyQjtBQUlBRCxLQUFLLENBQUNRLFNBQU4sR0FBa0I7QUFDaEJQLFlBQVUsRUFBRVEsaURBQVMsQ0FBQ0MsTUFETjtBQUVoQlIsR0FBQyxFQUFFTyxpREFBUyxDQUFDRSxJQUFWLENBQWVDO0FBRkYsQ0FBbEI7QUFLZUMsNEhBQWUsQ0FBQyxRQUFELENBQWYsQ0FBMEJiLEtBQTFCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2Vycm9yLmZhODQ1ZWM5MDM3NjBjMTA3NTRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19lcnJvclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi9tbnQvYy9Vc2Vycy9DQUNBQlVUVC9uZXh0LWkxOG5leHQvZXhhbXBsZXMvc2ltcGxlL3BhZ2VzL19lcnJvci5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vaTE4bidcblxuY29uc3QgRXJyb3IgPSAoeyBzdGF0dXNDb2RlLCB0IH0pID0+IChcbiAgPHA+XG4gICAge3N0YXR1c0NvZGVcbiAgICAgID8gdCgnZXJyb3Itd2l0aC1zdGF0dXMnLCB7IHN0YXR1c0NvZGUgfSlcbiAgICAgIDogdCgnZXJyb3Itd2l0aG91dC1zdGF0dXMnKX1cbiAgPC9wPlxuKVxuXG5FcnJvci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXMsIGVyciB9KSA9PiB7XG4gIGxldCBzdGF0dXNDb2RlID0gbnVsbFxuICBpZiAocmVzKSB7XG4gICAgKHsgc3RhdHVzQ29kZSB9ID0gcmVzKVxuICB9IGVsc2UgaWYgKGVycikge1xuICAgICh7IHN0YXR1c0NvZGUgfSA9IGVycilcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWVzcGFjZXNSZXF1aXJlZDogWydjb21tb24nXSxcbiAgICBzdGF0dXNDb2RlLFxuICB9XG59XG5cbkVycm9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3RhdHVzQ29kZTogbnVsbCxcbn1cblxuRXJyb3IucHJvcFR5cGVzID0ge1xuICBzdGF0dXNDb2RlOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2NvbW1vbicpKEVycm9yKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==