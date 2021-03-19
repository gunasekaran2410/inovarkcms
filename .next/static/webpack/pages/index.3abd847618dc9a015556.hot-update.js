webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/react-bootstrap/esm/ListGroup.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ListGroup.js ***!
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
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/lib/esm/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _AbstractNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AbstractNav */ "./node_modules/react-bootstrap/esm/AbstractNav.js");
/* harmony import */ var _ListGroupItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ListGroupItem */ "./node_modules/react-bootstrap/esm/ListGroupItem.js");









var defaultProps = {
  variant: undefined,
  horizontal: undefined
};
var ListGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (props, ref) {
  var _useUncontrolled = Object(uncontrollable__WEBPACK_IMPORTED_MODULE_5__["useUncontrolled"])(props, {
    activeKey: 'onSelect'
  }),
      className = _useUncontrolled.className,
      initialBsPrefix = _useUncontrolled.bsPrefix,
      variant = _useUncontrolled.variant,
      horizontal = _useUncontrolled.horizontal,
      _useUncontrolled$as = _useUncontrolled.as,
      as = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      controlledProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_useUncontrolled, ["className", "bsPrefix", "variant", "horizontal", "as"]);

  var bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__["useBootstrapPrefix"])(initialBsPrefix, 'list-group');
  var horizontalVariant;

  if (horizontal) {
    horizontalVariant = horizontal === true ? 'horizontal' : "horizontal-" + horizontal;
  } else {
    horizontalVariant = null;
  }

   true ? warning__WEBPACK_IMPORTED_MODULE_4___default()(!(horizontal && variant === 'flush'), '`variant="flush"` and `horizontal` should not be used together.') : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_AbstractNav__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, controlledProps, {
    as: as,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, variant && bsPrefix + "-" + variant, horizontalVariant && bsPrefix + "-" + horizontalVariant)
  }));
});
ListGroup.defaultProps = defaultProps;
ListGroup.displayName = 'ListGroup';
ListGroup.Item = _ListGroupItem__WEBPACK_IMPORTED_MODULE_8__["default"];
/* harmony default export */ __webpack_exports__["default"] = (ListGroup);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ListGroupItem.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ListGroupItem.js ***!
  \***********************************************************/
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
/* harmony import */ var _AbstractNavItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AbstractNavItem */ "./node_modules/react-bootstrap/esm/AbstractNavItem.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/esm/SelectableContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");







var defaultProps = {
  variant: undefined,
  active: false,
  disabled: false
};
var ListGroupItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      variant = _ref.variant,
      action = _ref.action,
      as = _ref.as,
      eventKey = _ref.eventKey,
      onClick = _ref.onClick,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "active", "disabled", "className", "variant", "action", "as", "eventKey", "onClick"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__["useBootstrapPrefix"])(bsPrefix, 'list-group-item');
  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (onClick) onClick(event);
  }, [disabled, onClick]);

  if (disabled && props.tabIndex === undefined) {
    props.tabIndex = -1;
    props['aria-disabled'] = true;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_AbstractNavItem__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    // TODO: Restrict eventKey to string in v5?
    eventKey: Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_5__["makeEventKey"])(eventKey, props.href) // eslint-disable-next-line no-nested-ternary
    ,
    as: as || (action ? props.href ? 'a' : 'button' : 'div'),
    onClick: handleClick,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, active && 'active', disabled && 'disabled', variant && bsPrefix + "-" + variant, action && bsPrefix + "-action")
  }));
});
ListGroupItem.defaultProps = defaultProps;
ListGroupItem.displayName = 'ListGroupItem';
/* harmony default export */ __webpack_exports__["default"] = (ListGroupItem);

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
/* harmony import */ var E_cmsinovark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_cmsinovark_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_cmsinovark_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_cmsinovark_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_cmsinovark_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var E_cmsinovark_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../content/home.md */ "./content/home.md");
/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_content_home_md__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var _Index_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Index.module.css */ "./pages/Index.module.css");
/* harmony import */ var _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Index_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Slide */ "./components/Slide.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "./node_modules/react-bootstrap/esm/ListGroup.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");








var _jsxFileName = "E:\\cmsinovark\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












 // import the library



 // import your icons

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_19__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__["fas"]);

var Home = /*#__PURE__*/function (_Component) {
  Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    return _super.apply(this, arguments);
  }

  Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "render",
    value: function render() {
      var _this = this;

      var title = _content_home_md__WEBPACK_IMPORTED_MODULE_9__["attributes"].title,
          cats = _content_home_md__WEBPACK_IMPORTED_MODULE_9__["attributes"].cats;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
            src: "https://identity.netlify.com/v1/netlify-identity-widget.js"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slide__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.padding,
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 1
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 8
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_content_home_md__WEBPACK_IMPORTED_MODULE_9__["react"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_14__["default"], {
              children: cats.map(function (cat, k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_15__["default"], {
                  xs: 6,
                  md: 4,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
                    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.thumb,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      "class": "button colio-link",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_16___default.a, Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
                        alt: "Cloud computing architecture ",
                        src: "/images/what_we/product_development.png",
                        width: "100",
                        height: "100"
                      }, "alt", "product development"), void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 62,
                        columnNumber: 21
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                        "class": "color-text",
                        children: cat.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 63,
                        columnNumber: 23
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        "class": "color-text h-125",
                        children: [" ", cat.description]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 64,
                        columnNumber: 23
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 19
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
                      variant: "primary",
                      size: "sm",
                      children: ["Read more \xA0\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeIcon"], {
                        icon: ['fas', 'chevron-circle-right']
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 69,
                        columnNumber: 23
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 17
                  }, _this)
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 5
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.light_gray_bg,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.padding,
            children: " WHY US "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__["default"], {
          horizontal: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
            children: "This"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 3
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
            children: "ListGroup"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 3
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
            children: "renders"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 3
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
            children: "horizontally!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 3
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 1
        }, this)]
      }, void 0, true);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vTGlzdEdyb3VwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9MaXN0R3JvdXBJdGVtLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFzIiwiSG9tZSIsInRpdGxlIiwiYXR0cmlidXRlcyIsImNhdHMiLCJzdHlsZXMiLCJwYWRkaW5nIiwibWFwIiwiY2F0IiwiayIsInRodW1iIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibGlnaHRfZ3JheV9iZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBEO0FBQzBDO0FBQ2hFO0FBQ1Y7QUFDSTtBQUNtQjtBQUNJO0FBQ2I7QUFDSTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0Q0FBSztBQUNsQyx5QkFBeUIsc0VBQWU7QUFDeEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVHQUE2Qjs7QUFFckQsaUJBQWlCLHlFQUFrQjtBQUNuQzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsRUFBRSxLQUFxQyxHQUFHLDhDQUFPLDRHQUE0RyxTQUFNO0FBQ25LLHNCQUFzQiw0Q0FBSyxlQUFlLG9EQUFXLEVBQUUsa0ZBQVE7QUFDL0Q7QUFDQSxHQUFHO0FBQ0g7QUFDQSxlQUFlLGlEQUFVO0FBQ3pCLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGlCQUFpQixzREFBYTtBQUNmLHdFQUFTLEU7Ozs7Ozs7Ozs7OztBQzdDeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEWixtQkFBd0JILENBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRmE7QUFBQSxlQUFUO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CRSxlQTBETjtBQUFTLG1CQUFTLEVBQUVKLHlEQUFNLENBQUNRLGFBQTNCO0FBQUEsaUNBRUU7QUFBSSxxQkFBUyxFQUFFUix5REFBTSxDQUFDQyxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBMURNLGVBZ0VOLHFFQUFDLGtFQUFEO0FBQVcsb0JBQVUsTUFBckI7QUFBQSxrQ0FDRSxxRUFBQyxrRUFBRCxDQUFXLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRSxxRUFBQyxrRUFBRCxDQUFXLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRSxxRUFBQyxrRUFBRCxDQUFXLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsZUFJRSxxRUFBQyxrRUFBRCxDQUFXLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhFTTtBQUFBLHNCQURGO0FBNEVEOzs7O0VBL0UrQlEsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2FiZDg0NzYxOGRjOWEwMTU1NTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCB7IHVzZVVuY29udHJvbGxlZCB9IGZyb20gJ3VuY29udHJvbGxhYmxlJztcbmltcG9ydCB7IHVzZUJvb3RzdHJhcFByZWZpeCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgQWJzdHJhY3ROYXYgZnJvbSAnLi9BYnN0cmFjdE5hdic7XG5pbXBvcnQgTGlzdEdyb3VwSXRlbSBmcm9tICcuL0xpc3RHcm91cEl0ZW0nO1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogdW5kZWZpbmVkLFxuICBob3Jpem9udGFsOiB1bmRlZmluZWRcbn07XG52YXIgTGlzdEdyb3VwID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIF91c2VVbmNvbnRyb2xsZWQgPSB1c2VVbmNvbnRyb2xsZWQocHJvcHMsIHtcbiAgICBhY3RpdmVLZXk6ICdvblNlbGVjdCdcbiAgfSksXG4gICAgICBjbGFzc05hbWUgPSBfdXNlVW5jb250cm9sbGVkLmNsYXNzTmFtZSxcbiAgICAgIGluaXRpYWxCc1ByZWZpeCA9IF91c2VVbmNvbnRyb2xsZWQuYnNQcmVmaXgsXG4gICAgICB2YXJpYW50ID0gX3VzZVVuY29udHJvbGxlZC52YXJpYW50LFxuICAgICAgaG9yaXpvbnRhbCA9IF91c2VVbmNvbnRyb2xsZWQuaG9yaXpvbnRhbCxcbiAgICAgIF91c2VVbmNvbnRyb2xsZWQkYXMgPSBfdXNlVW5jb250cm9sbGVkLmFzLFxuICAgICAgYXMgPSBfdXNlVW5jb250cm9sbGVkJGFzID09PSB2b2lkIDAgPyAnZGl2JyA6IF91c2VVbmNvbnRyb2xsZWQkYXMsXG4gICAgICBjb250cm9sbGVkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdXNlVW5jb250cm9sbGVkLCBbXCJjbGFzc05hbWVcIiwgXCJic1ByZWZpeFwiLCBcInZhcmlhbnRcIiwgXCJob3Jpem9udGFsXCIsIFwiYXNcIl0pO1xuXG4gIHZhciBic1ByZWZpeCA9IHVzZUJvb3RzdHJhcFByZWZpeChpbml0aWFsQnNQcmVmaXgsICdsaXN0LWdyb3VwJyk7XG4gIHZhciBob3Jpem9udGFsVmFyaWFudDtcblxuICBpZiAoaG9yaXpvbnRhbCkge1xuICAgIGhvcml6b250YWxWYXJpYW50ID0gaG9yaXpvbnRhbCA9PT0gdHJ1ZSA/ICdob3Jpem9udGFsJyA6IFwiaG9yaXpvbnRhbC1cIiArIGhvcml6b250YWw7XG4gIH0gZWxzZSB7XG4gICAgaG9yaXpvbnRhbFZhcmlhbnQgPSBudWxsO1xuICB9XG5cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKGhvcml6b250YWwgJiYgdmFyaWFudCA9PT0gJ2ZsdXNoJyksICdgdmFyaWFudD1cImZsdXNoXCJgIGFuZCBgaG9yaXpvbnRhbGAgc2hvdWxkIG5vdCBiZSB1c2VkIHRvZ2V0aGVyLicpIDogdm9pZCAwO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQWJzdHJhY3ROYXYsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZlxuICB9LCBjb250cm9sbGVkUHJvcHMsIHtcbiAgICBhczogYXMsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYnNQcmVmaXgsIHZhcmlhbnQgJiYgYnNQcmVmaXggKyBcIi1cIiArIHZhcmlhbnQsIGhvcml6b250YWxWYXJpYW50ICYmIGJzUHJlZml4ICsgXCItXCIgKyBob3Jpem9udGFsVmFyaWFudClcbiAgfSkpO1xufSk7XG5MaXN0R3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuTGlzdEdyb3VwLmRpc3BsYXlOYW1lID0gJ0xpc3RHcm91cCc7XG5MaXN0R3JvdXAuSXRlbSA9IExpc3RHcm91cEl0ZW07XG5leHBvcnQgZGVmYXVsdCBMaXN0R3JvdXA7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFic3RyYWN0TmF2SXRlbSBmcm9tICcuL0Fic3RyYWN0TmF2SXRlbSc7XG5pbXBvcnQgeyBtYWtlRXZlbnRLZXkgfSBmcm9tICcuL1NlbGVjdGFibGVDb250ZXh0JztcbmltcG9ydCB7IHVzZUJvb3RzdHJhcFByZWZpeCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiB1bmRlZmluZWQsXG4gIGFjdGl2ZTogZmFsc2UsXG4gIGRpc2FibGVkOiBmYWxzZVxufTtcbnZhciBMaXN0R3JvdXBJdGVtID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgYWN0aXZlID0gX3JlZi5hY3RpdmUsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHZhcmlhbnQgPSBfcmVmLnZhcmlhbnQsXG4gICAgICBhY3Rpb24gPSBfcmVmLmFjdGlvbixcbiAgICAgIGFzID0gX3JlZi5hcyxcbiAgICAgIGV2ZW50S2V5ID0gX3JlZi5ldmVudEtleSxcbiAgICAgIG9uQ2xpY2sgPSBfcmVmLm9uQ2xpY2ssXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImJzUHJlZml4XCIsIFwiYWN0aXZlXCIsIFwiZGlzYWJsZWRcIiwgXCJjbGFzc05hbWVcIiwgXCJ2YXJpYW50XCIsIFwiYWN0aW9uXCIsIFwiYXNcIiwgXCJldmVudEtleVwiLCBcIm9uQ2xpY2tcIl0pO1xuXG4gIGJzUHJlZml4ID0gdXNlQm9vdHN0cmFwUHJlZml4KGJzUHJlZml4LCAnbGlzdC1ncm91cC1pdGVtJyk7XG4gIHZhciBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvbkNsaWNrKSBvbkNsaWNrKGV2ZW50KTtcbiAgfSwgW2Rpc2FibGVkLCBvbkNsaWNrXSk7XG5cbiAgaWYgKGRpc2FibGVkICYmIHByb3BzLnRhYkluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICBwcm9wcy50YWJJbmRleCA9IC0xO1xuICAgIHByb3BzWydhcmlhLWRpc2FibGVkJ10gPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFic3RyYWN0TmF2SXRlbSwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgLy8gVE9ETzogUmVzdHJpY3QgZXZlbnRLZXkgdG8gc3RyaW5nIGluIHY1P1xuICAgIGV2ZW50S2V5OiBtYWtlRXZlbnRLZXkoZXZlbnRLZXksIHByb3BzLmhyZWYpIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICxcbiAgICBhczogYXMgfHwgKGFjdGlvbiA/IHByb3BzLmhyZWYgPyAnYScgOiAnYnV0dG9uJyA6ICdkaXYnKSxcbiAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBic1ByZWZpeCwgYWN0aXZlICYmICdhY3RpdmUnLCBkaXNhYmxlZCAmJiAnZGlzYWJsZWQnLCB2YXJpYW50ICYmIGJzUHJlZml4ICsgXCItXCIgKyB2YXJpYW50LCBhY3Rpb24gJiYgYnNQcmVmaXggKyBcIi1hY3Rpb25cIilcbiAgfSkpO1xufSk7XG5MaXN0R3JvdXBJdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbkxpc3RHcm91cEl0ZW0uZGlzcGxheU5hbWUgPSAnTGlzdEdyb3VwSXRlbSc7XG5leHBvcnQgZGVmYXVsdCBMaXN0R3JvdXBJdGVtOyIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBhdHRyaWJ1dGVzLCByZWFjdCBhcyBIb21lQ29udGVudCB9IGZyb20gJy4uL2NvbnRlbnQvaG9tZS5tZCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5kZXgubW9kdWxlLmNzcydcbmltcG9ydCBTbGlkZSBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJ1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93J1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nXG5pbXBvcnQgTGlzdEdyb3VwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9MaXN0R3JvdXAnXG5cbi8vIGltcG9ydCB0aGUgbGlicmFyeVxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgeyBmYXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5cbi8vIGltcG9ydCB5b3VyIGljb25zXG5cbmxpYnJhcnkuYWRkKGZhcyk7XG5cbiBcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgdGl0bGUsIGNhdHMgfSA9IGF0dHJpYnV0ZXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9pZGVudGl0eS5uZXRsaWZ5LmNvbS92MS9uZXRsaWZ5LWlkZW50aXR5LXdpZGdldC5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAgPFNsaWRlLz5cbiAgICBcblxuICAgIHsvKiA8YXJ0aWNsZT5cbiAgICAgICAgICA8aDEgPnt0aXRsZX08L2gxPlxuICAgICAgICAgIDxIb21lQ29udGVudCAvPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtjYXRzLm1hcCgoY2F0LCBrKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2t9PlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9hcnRpY2xlPiAqL31cbiAgICA8c2VjdGlvbj5cbiAgICAgICBcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG48aDMgY2xhc3NOYW1lPXtzdHlsZXMucGFkZGluZ30gID57dGl0bGV9XG48L2gzPlxuICAgICAgIDwvZGl2PlxuICAgICAgIDxDb250YWluZXI+XG4gICAgICAgPEhvbWVDb250ZW50IC8+XG4gICAgICAgPFJvdz5cbiAgICAgICB7Y2F0cy5tYXAoKGNhdCwgaykgPT4gKFxuICAgICAgICAgXG4gICAgPENvbCB4cz17Nn0gbWQ9ezR9IGtleT17a30+XG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMudGh1bWJ9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbiBjb2xpby1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9XCJDbG91ZCBjb21wdXRpbmcgYXJjaGl0ZWN0dXJlIFwiIHNyYz1cIi9pbWFnZXMvd2hhdF93ZS9wcm9kdWN0X2RldmVsb3BtZW50LnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgYWx0PVwicHJvZHVjdCBkZXZlbG9wbWVudFwiIC8+IFxuICAgICAgICAgICAgICAgICAgICAgIDxoMSAgY2xhc3M9XCJjb2xvci10ZXh0XCI+e2NhdC5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgIGNsYXNzPVwiY29sb3ItdGV4dCBoLTEyNVwiPiB7Y2F0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgUmVhZCBtb3JlICZuYnNwOyZuYnNwOyZuYnNwOyBcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXMnLCAnY2hldnJvbi1jaXJjbGUtcmlnaHQnXX0gLz5cblxuXG4gICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L0NvbD5cbiAgICBcbiAgXG4gICAgICApKX1cbiAgPC9Sb3c+XG4gIFxuPC9Db250YWluZXI+XG4gICAgIDwvc2VjdGlvbj5cblxuXG57Lyogd2h5IHVzICovfVxuPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRfZ3JheV9iZ30+XG4gIFxuICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMucGFkZGluZ30+IFdIWSBVUyA8L2gzPlxuXG48L3NlY3Rpb24+XG5cbjxMaXN0R3JvdXAgaG9yaXpvbnRhbD5cbiAgPExpc3RHcm91cC5JdGVtPlRoaXM8L0xpc3RHcm91cC5JdGVtPlxuICA8TGlzdEdyb3VwLkl0ZW0+TGlzdEdyb3VwPC9MaXN0R3JvdXAuSXRlbT5cbiAgPExpc3RHcm91cC5JdGVtPnJlbmRlcnM8L0xpc3RHcm91cC5JdGVtPlxuICA8TGlzdEdyb3VwLkl0ZW0+aG9yaXpvbnRhbGx5ITwvTGlzdEdyb3VwLkl0ZW0+XG48L0xpc3RHcm91cD5cblxuXG5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=