webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ClientSlide.js":
/*!***********************************!*\
  !*** ./components/ClientSlide.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_cmsinovark_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_cmsinovark_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_cmsinovark_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var E_cmsinovark_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_cmsinovark_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var E_cmsinovark_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var E_cmsinovark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-elastic-carousel */ "./node_modules/react-elastic-carousel/dist/index.es.js");








var _jsxFileName = "E:\\cmsinovark\\components\\ClientSlide.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var ClientSlide = /*#__PURE__*/function (_Component) {
  Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ClientSlide, _Component);

  var _super = _createSuper(ClientSlide);

  function ClientSlide() {
    var _this;

    Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClientSlide);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      items: [{
        id: 1,
        title: 'item #1'
      }, {
        id: 2,
        title: 'item #2'
      }, {
        id: 3,
        title: 'item #3'
      }, {
        id: 4,
        title: 'item #4'
      }, {
        id: 5,
        title: 'item #5'
      }, {
        id: 6,
        title: 'item #6'
      }, {
        id: 7,
        title: 'item #7'
      }, {
        id: 8,
        title: 'item #8'
      }, {
        id: 9,
        title: 'item #9'
      }, {
        id: 10,
        title: 'item #10'
      }]
    });

    return _this;
  }

  Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ClientSlide, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.state.items;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
        itemsToScroll: 2,
        itemsToShow: 2,
        children: items.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: item.title
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 28
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }, this);
    }
  }]);

  return ClientSlide;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ClientSlide);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbGllbnRTbGlkZS5qcyJdLCJuYW1lcyI6WyJDbGllbnRTbGlkZSIsIml0ZW1zIiwiaWQiLCJ0aXRsZSIsInN0YXRlIiwibWFwIiwiaXRlbSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLFc7Ozs7Ozs7Ozs7Ozs7Ozs7a1FBQ0k7QUFDTkMsV0FBSyxFQUFFLENBQ0w7QUFBQ0MsVUFBRSxFQUFFLENBQUw7QUFBUUMsYUFBSyxFQUFFO0FBQWYsT0FESyxFQUVMO0FBQUNELFVBQUUsRUFBRSxDQUFMO0FBQVFDLGFBQUssRUFBRTtBQUFmLE9BRkssRUFHTDtBQUFDRCxVQUFFLEVBQUUsQ0FBTDtBQUFRQyxhQUFLLEVBQUU7QUFBZixPQUhLLEVBSUw7QUFBQ0QsVUFBRSxFQUFFLENBQUw7QUFBUUMsYUFBSyxFQUFFO0FBQWYsT0FKSyxFQUtMO0FBQUNELFVBQUUsRUFBRSxDQUFMO0FBQVFDLGFBQUssRUFBRTtBQUFmLE9BTEssRUFNTDtBQUFDRCxVQUFFLEVBQUUsQ0FBTDtBQUFRQyxhQUFLLEVBQUU7QUFBZixPQU5LLEVBT0w7QUFBQ0QsVUFBRSxFQUFFLENBQUw7QUFBUUMsYUFBSyxFQUFFO0FBQWYsT0FQSyxFQVFMO0FBQUNELFVBQUUsRUFBRSxDQUFMO0FBQVFDLGFBQUssRUFBRTtBQUFmLE9BUkssRUFTTDtBQUFDRCxVQUFFLEVBQUUsQ0FBTDtBQUFRQyxhQUFLLEVBQUU7QUFBZixPQVRLLEVBVUw7QUFBQ0QsVUFBRSxFQUFFLEVBQUw7QUFBU0MsYUFBSyxFQUFFO0FBQWhCLE9BVks7QUFERCxLOzs7Ozs7OzZCQWVFO0FBQUE7O0FBQUEsVUFDQUYsS0FEQSxHQUNVLEtBQUtHLEtBRGYsQ0FDQUgsS0FEQTtBQUVSLDBCQUNFLHFFQUFDLDhEQUFEO0FBQVUscUJBQWEsRUFBRSxDQUF6QjtBQUE0QixtQkFBVyxFQUFFLENBQXpDO0FBQUEsa0JBQ0dBLEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSw4QkFBSTtBQUFBLHNCQUFvQkEsSUFBSSxDQUFDSDtBQUF6QixhQUFVRyxJQUFJLENBQUNKLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBSjtBQUFBLFNBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFLRDs7OztFQXZCdUJLLCtDOztBQTBCWFAsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWVhNmIxZDU4M2M2NmQ1ZTY2NmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1lbGFzdGljLWNhcm91c2VsJztcclxuXHJcbmNsYXNzIENsaWVudFNsaWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtpZDogMSwgdGl0bGU6ICdpdGVtICMxJ30sXHJcbiAgICAgIHtpZDogMiwgdGl0bGU6ICdpdGVtICMyJ30sXHJcbiAgICAgIHtpZDogMywgdGl0bGU6ICdpdGVtICMzJ30sXHJcbiAgICAgIHtpZDogNCwgdGl0bGU6ICdpdGVtICM0J30sXHJcbiAgICAgIHtpZDogNSwgdGl0bGU6ICdpdGVtICM1J30sXHJcbiAgICAgIHtpZDogNiwgdGl0bGU6ICdpdGVtICM2J30sXHJcbiAgICAgIHtpZDogNywgdGl0bGU6ICdpdGVtICM3J30sXHJcbiAgICAgIHtpZDogOCwgdGl0bGU6ICdpdGVtICM4J30sXHJcbiAgICAgIHtpZDogOSwgdGl0bGU6ICdpdGVtICM5J30sXHJcbiAgICAgIHtpZDogMTAsIHRpdGxlOiAnaXRlbSAjMTAnfVxyXG4gICAgXVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2Fyb3VzZWwgaXRlbXNUb1Njcm9sbD17Mn0gaXRlbXNUb1Nob3c9ezJ9PlxyXG4gICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiA8ZGl2IGtleT17aXRlbS5pZH0+e2l0ZW0udGl0bGV9PC9kaXY+KX1cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudFNsaWRlOyJdLCJzb3VyY2VSb290IjoiIn0=