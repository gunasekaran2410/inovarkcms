webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/react-bootstrap/esm/Col.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Col.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");





var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'col');
  var spans = [];
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var span;
    var offset;
    var order;

    if (typeof propValue === 'object' && propValue != null) {
      var _propValue$span = propValue.span;
      span = _propValue$span === void 0 ? true : _propValue$span;
      offset = propValue.offset;
      order = propValue.order;
    } else {
      span = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (span) spans.push(span === true ? "" + prefix + infix : "" + prefix + infix + "-" + span);
    if (order != null) classes.push("order" + infix + "-" + order);
    if (offset != null) classes.push("offset" + infix + "-" + offset);
  });

  if (!spans.length) {
    spans.push(prefix); // plain 'col'
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default.a.apply(void 0, [className].concat(spans, classes))
  }));
});
Col.displayName = 'Col';
/* harmony default export */ __webpack_exports__["default"] = (Col);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Container.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Container.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");





var defaultProps = {
  fluid: false
};
var Container = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      fluid = _ref.fluid,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "fluid", "as", "className"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'container');
  var suffix = typeof fluid === 'string' ? "-" + fluid : '-fluid';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, fluid ? "" + prefix + suffix : prefix)
  }));
});
Container.displayName = 'Container';
Container.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Row.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Row.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");





var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var defaultProps = {
  noGutters: false
};
var Row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      noGutters = _ref.noGutters,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "noGutters", "as"]);

  var decoratedBsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'row');
  var sizePrefix = decoratedBsPrefix + "-cols";
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var cols;

    if (propValue != null && typeof propValue === 'object') {
      cols = propValue.cols;
    } else {
      cols = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (cols != null) classes.push("" + sizePrefix + infix + "-" + cols);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default.a.apply(void 0, [className, decoratedBsPrefix, noGutters && 'no-gutters'].concat(classes))
  }));
});
Row.displayName = 'Row';
Row.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pc5_Documents_netlify_march13_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_pc5_Documents_netlify_march13_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_pc5_Documents_netlify_march13_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_pc5_Documents_netlify_march13_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_pc5_Documents_netlify_march13_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../content/home.md */ "./content/home.md");
/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_content_home_md__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var _Index_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Index.module.css */ "./pages/Index.module.css");
/* harmony import */ var _Index_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Index_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Slide */ "./components/Slide.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");







var _jsxFileName = "C:\\Users\\pc5\\Documents\\netlify_march13\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_pc5_Documents_netlify_march13_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_pc5_Documents_netlify_march13_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_pc5_Documents_netlify_march13_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var Home = /*#__PURE__*/function (_Component) {
  Object(C_Users_pc5_Documents_netlify_march13_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    Object(C_Users_pc5_Documents_netlify_march13_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Home);

    return _super.apply(this, arguments);
  }

  Object(C_Users_pc5_Documents_netlify_march13_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, [{
    key: "render",
    value: function render() {
      var _this = this;

      var title = _content_home_md__WEBPACK_IMPORTED_MODULE_8__["attributes"].title,
          cats = _content_home_md__WEBPACK_IMPORTED_MODULE_8__["attributes"].cats;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
            src: "https://identity.netlify.com/v1/netlify-identity-widget.js"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slide__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.red,
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_content_home_md__WEBPACK_IMPORTED_MODULE_8__["react"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: cats.map(function (cat, k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 15
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: " text-uppercase",
                children: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 1
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_content_home_md__WEBPACK_IMPORTED_MODULE_8__["react"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_13__["default"], {
                children: cats.map(function (cat, k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_14__["default"], {
                    xs: 6,
                    md: 4,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                      children: cat.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 46,
                      columnNumber: 8
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: cat.description
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 47,
                      columnNumber: 17
                    }, _this)]
                  }, k, true, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 5
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 5
        }, this)]
      }, void 0, true);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vQ29sLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL1Jvdy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRpdGxlIiwiYXR0cmlidXRlcyIsImNhdHMiLCJzdHlsZXMiLCJyZWQiLCJtYXAiLCJjYXQiLCJrIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUMwQztBQUNoRTtBQUNWO0FBQzJCO0FBQ3JEO0FBQ0EsdUJBQXVCLDRDQUFLO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHVHQUE2Qjs7QUFFM0MsZUFBZSx5RUFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBLHNCQUFzQiw0Q0FBSywwQkFBMEIsa0ZBQVEsR0FBRztBQUNoRTtBQUNBLGVBQWUsaURBQVU7QUFDekIsR0FBRztBQUNILENBQUM7QUFDRDtBQUNlLGtFQUFHLEU7Ozs7Ozs7Ozs7OztBQ2pEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUMwQztBQUNoRTtBQUNWO0FBQzJCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0Q0FBSztBQUNsQztBQUNBO0FBQ0E7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MkJBRGE7QUFBQSxpQkFBVDtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkU7QUFBQSxzQkFERjtBQStDRDs7OztFQWxEK0JHLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgyYjkxYTU5NGNhYTViNzY1ZjdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQm9vdHN0cmFwUHJlZml4IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbnZhciBERVZJQ0VfU0laRVMgPSBbJ3hsJywgJ2xnJywgJ21kJywgJ3NtJywgJ3hzJ107XG52YXIgQ29sID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoIC8vIE5lZWQgdG8gZGVmaW5lIHRoZSBkZWZhdWx0IFwiYXNcIiBkdXJpbmcgcHJvcCBkZXN0cnVjdHVyaW5nIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBzdHlsZWQtY29tcG9uZW50cyBnaXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9yZWFjdC1ib290c3RyYXAvaXNzdWVzLzM1OTVcbmZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGJzUHJlZml4ID0gX3JlZi5ic1ByZWZpeCxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAnZGl2JyA6IF9yZWYkYXMsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImJzUHJlZml4XCIsIFwiY2xhc3NOYW1lXCIsIFwiYXNcIl0pO1xuXG4gIHZhciBwcmVmaXggPSB1c2VCb290c3RyYXBQcmVmaXgoYnNQcmVmaXgsICdjb2wnKTtcbiAgdmFyIHNwYW5zID0gW107XG4gIHZhciBjbGFzc2VzID0gW107XG4gIERFVklDRV9TSVpFUy5mb3JFYWNoKGZ1bmN0aW9uIChicmtQb2ludCkge1xuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1ticmtQb2ludF07XG4gICAgZGVsZXRlIHByb3BzW2Jya1BvaW50XTtcbiAgICB2YXIgc3BhbjtcbiAgICB2YXIgb2Zmc2V0O1xuICAgIHZhciBvcmRlcjtcblxuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAnb2JqZWN0JyAmJiBwcm9wVmFsdWUgIT0gbnVsbCkge1xuICAgICAgdmFyIF9wcm9wVmFsdWUkc3BhbiA9IHByb3BWYWx1ZS5zcGFuO1xuICAgICAgc3BhbiA9IF9wcm9wVmFsdWUkc3BhbiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9wcm9wVmFsdWUkc3BhbjtcbiAgICAgIG9mZnNldCA9IHByb3BWYWx1ZS5vZmZzZXQ7XG4gICAgICBvcmRlciA9IHByb3BWYWx1ZS5vcmRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3BhbiA9IHByb3BWYWx1ZTtcbiAgICB9XG5cbiAgICB2YXIgaW5maXggPSBicmtQb2ludCAhPT0gJ3hzJyA/IFwiLVwiICsgYnJrUG9pbnQgOiAnJztcbiAgICBpZiAoc3Bhbikgc3BhbnMucHVzaChzcGFuID09PSB0cnVlID8gXCJcIiArIHByZWZpeCArIGluZml4IDogXCJcIiArIHByZWZpeCArIGluZml4ICsgXCItXCIgKyBzcGFuKTtcbiAgICBpZiAob3JkZXIgIT0gbnVsbCkgY2xhc3Nlcy5wdXNoKFwib3JkZXJcIiArIGluZml4ICsgXCItXCIgKyBvcmRlcik7XG4gICAgaWYgKG9mZnNldCAhPSBudWxsKSBjbGFzc2VzLnB1c2goXCJvZmZzZXRcIiArIGluZml4ICsgXCItXCIgKyBvZmZzZXQpO1xuICB9KTtcblxuICBpZiAoIXNwYW5zLmxlbmd0aCkge1xuICAgIHNwYW5zLnB1c2gocHJlZml4KTsgLy8gcGxhaW4gJ2NvbCdcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcy5hcHBseSh2b2lkIDAsIFtjbGFzc05hbWVdLmNvbmNhdChzcGFucywgY2xhc3NlcykpXG4gIH0pKTtcbn0pO1xuQ29sLmRpc3BsYXlOYW1lID0gJ0NvbCc7XG5leHBvcnQgZGVmYXVsdCBDb2w7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUJvb3RzdHJhcFByZWZpeCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBmbHVpZDogZmFsc2Vcbn07XG52YXIgQ29udGFpbmVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgZmx1aWQgPSBfcmVmLmZsdWlkLFxuICAgICAgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAnZGl2JyA6IF9yZWYkYXMsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiYnNQcmVmaXhcIiwgXCJmbHVpZFwiLCBcImFzXCIsIFwiY2xhc3NOYW1lXCJdKTtcblxuICB2YXIgcHJlZml4ID0gdXNlQm9vdHN0cmFwUHJlZml4KGJzUHJlZml4LCAnY29udGFpbmVyJyk7XG4gIHZhciBzdWZmaXggPSB0eXBlb2YgZmx1aWQgPT09ICdzdHJpbmcnID8gXCItXCIgKyBmbHVpZCA6ICctZmx1aWQnO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBmbHVpZCA/IFwiXCIgKyBwcmVmaXggKyBzdWZmaXggOiBwcmVmaXgpXG4gIH0pKTtcbn0pO1xuQ29udGFpbmVyLmRpc3BsYXlOYW1lID0gJ0NvbnRhaW5lcic7XG5Db250YWluZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VCb290c3RyYXBQcmVmaXggfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xudmFyIERFVklDRV9TSVpFUyA9IFsneGwnLCAnbGcnLCAnbWQnLCAnc20nLCAneHMnXTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIG5vR3V0dGVyczogZmFsc2Vcbn07XG52YXIgUm93ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBub0d1dHRlcnMgPSBfcmVmLm5vR3V0dGVycyxcbiAgICAgIF9yZWYkYXMgPSBfcmVmLmFzLFxuICAgICAgQ29tcG9uZW50ID0gX3JlZiRhcyA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcmVmJGFzLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJic1ByZWZpeFwiLCBcImNsYXNzTmFtZVwiLCBcIm5vR3V0dGVyc1wiLCBcImFzXCJdKTtcblxuICB2YXIgZGVjb3JhdGVkQnNQcmVmaXggPSB1c2VCb290c3RyYXBQcmVmaXgoYnNQcmVmaXgsICdyb3cnKTtcbiAgdmFyIHNpemVQcmVmaXggPSBkZWNvcmF0ZWRCc1ByZWZpeCArIFwiLWNvbHNcIjtcbiAgdmFyIGNsYXNzZXMgPSBbXTtcbiAgREVWSUNFX1NJWkVTLmZvckVhY2goZnVuY3Rpb24gKGJya1BvaW50KSB7XG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW2Jya1BvaW50XTtcbiAgICBkZWxldGUgcHJvcHNbYnJrUG9pbnRdO1xuICAgIHZhciBjb2xzO1xuXG4gICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb2xzID0gcHJvcFZhbHVlLmNvbHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbHMgPSBwcm9wVmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIGluZml4ID0gYnJrUG9pbnQgIT09ICd4cycgPyBcIi1cIiArIGJya1BvaW50IDogJyc7XG4gICAgaWYgKGNvbHMgIT0gbnVsbCkgY2xhc3Nlcy5wdXNoKFwiXCIgKyBzaXplUHJlZml4ICsgaW5maXggKyBcIi1cIiArIGNvbHMpO1xuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzLmFwcGx5KHZvaWQgMCwgW2NsYXNzTmFtZSwgZGVjb3JhdGVkQnNQcmVmaXgsIG5vR3V0dGVycyAmJiAnbm8tZ3V0dGVycyddLmNvbmNhdChjbGFzc2VzKSlcbiAgfSkpO1xufSk7XG5Sb3cuZGlzcGxheU5hbWUgPSAnUm93JztcblJvdy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5leHBvcnQgZGVmYXVsdCBSb3c7IiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVzLCByZWFjdCBhcyBIb21lQ29udGVudCB9IGZyb20gJy4uL2NvbnRlbnQvaG9tZS5tZCc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0luZGV4Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCBTbGlkZSBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZVwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInXHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1JvdydcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHsgdGl0bGUsIGNhdHMgfSA9IGF0dHJpYnV0ZXM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2lkZW50aXR5Lm5ldGxpZnkuY29tL3YxL25ldGxpZnktaWRlbnRpdHktd2lkZ2V0LmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uLz5cclxuICAgICAgICA8U2xpZGUvPlxyXG4gICAgXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnJlZH0+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8SG9tZUNvbnRlbnQgLz5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2NhdHMubWFwKChjYXQsIGspID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtrfT5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgIFxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG48aDMgY2xhc3NOYW1lPVwiIHRleHQtdXBwZXJjYXNlXCI+e3RpdGxlfVxyXG48L2gzPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgPEhvbWVDb250ZW50IC8+XHJcbiAgICAgICA8Um93PlxyXG4gICAgICAge2NhdHMubWFwKChjYXQsIGspID0+IChcclxuICAgIDxDb2wgeHM9ezZ9IG1kPXs0fSBrZXk9e2t9PlxyXG4gICAgICAgPGgyPntjYXQubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+e2NhdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L0NvbD5cclxuICBcclxuICAgICAgKSl9XHJcbiAgPC9Sb3c+XHJcbiAgXHJcbjwvQ29udGFpbmVyPlxyXG4gICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9