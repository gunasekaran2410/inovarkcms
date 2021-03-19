webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/react-bootstrap/esm/Card.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Card.js ***!
  \**************************************************/
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
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");
/* harmony import */ var _divWithClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./divWithClassName */ "./node_modules/react-bootstrap/esm/divWithClassName.js");
/* harmony import */ var _CardContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardContext */ "./node_modules/react-bootstrap/esm/CardContext.js");
/* harmony import */ var _CardImg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CardImg */ "./node_modules/react-bootstrap/esm/CardImg.js");









var DivStyledAsH5 = Object(_divWithClassName__WEBPACK_IMPORTED_MODULE_6__["default"])('h5');
var DivStyledAsH6 = Object(_divWithClassName__WEBPACK_IMPORTED_MODULE_6__["default"])('h6');
var CardBody = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-body');
var CardTitle = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-title', {
  Component: DivStyledAsH5
});
var CardSubtitle = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-subtitle', {
  Component: DivStyledAsH6
});
var CardLink = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-link', {
  Component: 'a'
});
var CardText = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-text', {
  Component: 'p'
});
var CardHeader = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-header');
var CardFooter = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-footer');
var CardImgOverlay = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-img-overlay');
var defaultProps = {
  body: false
};
var Card = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      bg = _ref.bg,
      text = _ref.text,
      border = _ref.border,
      body = _ref.body,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'card');
  var cardContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      cardHeaderBsPrefix: prefix + "-header"
    };
  }, [prefix]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CardContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: cardContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border)
  }), body ?
  /*#__PURE__*/
  // @ts-ignore
  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardBody, null, children) : children));
});
Card.displayName = 'Card';
Card.defaultProps = defaultProps;
Card.Img = _CardImg__WEBPACK_IMPORTED_MODULE_8__["default"];
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Body = CardBody;
Card.Link = CardLink;
Card.Text = CardText;
Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.ImgOverlay = CardImgOverlay;
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardImg.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardImg.js ***!
  \*****************************************************/
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
  variant: null
};
var CardImg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      variant = _ref.variant,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'img' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "variant", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'card-img');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(variant ? prefix + "-" + variant : prefix, className)
  }, props));
});
CardImg.displayName = 'CardImg';
CardImg.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (CardImg);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/divWithClassName.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/divWithClassName.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (className) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (p, ref) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, p, {
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(p.className, className)
    }));
  });
});

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
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");








var _jsxFileName = "E:\\cmsinovark\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













 // import the library



 // import your icons

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_20__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["fas"]);

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
            lineNumber: 33,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slide__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.padding,
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 1
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 8
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_content_home_md__WEBPACK_IMPORTED_MODULE_9__["react"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
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
                        lineNumber: 64,
                        columnNumber: 21
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                        "class": "color-text",
                        children: cat.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 65,
                        columnNumber: 23
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        "class": "color-text h-125",
                        children: [" ", cat.description]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                        columnNumber: 23
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 19
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
                      variant: "primary",
                      size: "sm",
                      children: ["Read more \xA0\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
                        icon: ['fas', 'chevron-circle-right']
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 71,
                        columnNumber: 23
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 17
                  }, _this)
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 5
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.light_gray_bg,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.padding,
              children: " WHY US "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 1
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.text_center,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__["default"], {
                horizontal: true,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.category,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.list_icon,
                      icon: ['fas', 'user-alt']
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 5
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paragraph,
                      children: " Customer Focus"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 5
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 5
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 3
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.category,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.list_icon,
                      icon: ['fas', 'trophy']
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 5
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paragraph,
                      children: " Passion for Success"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 5
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 5
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 3
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.category,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.list_icon,
                      icon: ['fas', 'laptop']
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 5
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paragraph,
                      children: " Technical Knowledge"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 116,
                      columnNumber: 5
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 5
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 3
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.category,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.list_icon,
                      icon: ['fas', 'book']
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 5
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paragraph,
                      children: "  Integrity & Accountability"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 5
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 5
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 3
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.category,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.list_icon,
                      icon: ['fas', 'frown']
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 129,
                      columnNumber: 5
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paragraph,
                      children: "   Excellence in Service "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 130,
                      columnNumber: 5
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 5
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 3
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 3
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 3
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 1
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 10
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.padding,
              children: " OUR MANTRA "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 3
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_14__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_19__["default"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_19__["default"].Body, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 3
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 1
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 1
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 1
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vQ2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vQ2FyZEltZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vZGl2V2l0aENsYXNzTmFtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsibGlicmFyeSIsImFkZCIsImZhcyIsIkhvbWUiLCJ0aXRsZSIsImF0dHJpYnV0ZXMiLCJjYXRzIiwic3R5bGVzIiwicGFkZGluZyIsIm1hcCIsImNhdCIsImsiLCJ0aHVtYiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxpZ2h0X2dyYXlfYmciLCJ0ZXh0X2NlbnRlciIsImNhdGVnb3J5IiwibGlzdF9pY29uIiwicGFyYWdyYXBoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBEO0FBQzBDO0FBQ2hFO0FBQ0c7QUFDYztBQUNDO0FBQ0o7QUFDVjtBQUNSO0FBQ2hDLG9CQUFvQixpRUFBZ0I7QUFDcEMsb0JBQW9CLGlFQUFnQjtBQUNwQyxlQUFlLG1FQUFrQjtBQUNqQyxnQkFBZ0IsbUVBQWtCO0FBQ2xDO0FBQ0EsQ0FBQztBQUNELG1CQUFtQixtRUFBa0I7QUFDckM7QUFDQSxDQUFDO0FBQ0QsZUFBZSxtRUFBa0I7QUFDakM7QUFDQSxDQUFDO0FBQ0QsZUFBZSxtRUFBa0I7QUFDakM7QUFDQSxDQUFDO0FBQ0QsaUJBQWlCLG1FQUFrQjtBQUNuQyxpQkFBaUIsbUVBQWtCO0FBQ25DLHFCQUFxQixtRUFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRDQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNB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O0FBQUE7QUFBQTtBQUFBLG9CQTlDRixlQStDQSxxRUFBQyw0REFBRDtBQUFBLHFDQUNBLHFFQUFDLDZEQUFEO0FBQUEsdUNBRUUscUVBQUMsNkRBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkEvQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkExRE07QUFBQSxzQkFERjtBQWdJRDs7OztFQW5JK0JZLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA4ZGEyOTc0Yjk1ZjhlZGE1MjMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUJvb3RzdHJhcFByZWZpeCB9IGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgY3JlYXRlV2l0aEJzUHJlZml4IGZyb20gJy4vY3JlYXRlV2l0aEJzUHJlZml4JztcbmltcG9ydCBkaXZXaXRoQ2xhc3NOYW1lIGZyb20gJy4vZGl2V2l0aENsYXNzTmFtZSc7XG5pbXBvcnQgQ2FyZENvbnRleHQgZnJvbSAnLi9DYXJkQ29udGV4dCc7XG5pbXBvcnQgQ2FyZEltZyBmcm9tICcuL0NhcmRJbWcnO1xudmFyIERpdlN0eWxlZEFzSDUgPSBkaXZXaXRoQ2xhc3NOYW1lKCdoNScpO1xudmFyIERpdlN0eWxlZEFzSDYgPSBkaXZXaXRoQ2xhc3NOYW1lKCdoNicpO1xudmFyIENhcmRCb2R5ID0gY3JlYXRlV2l0aEJzUHJlZml4KCdjYXJkLWJvZHknKTtcbnZhciBDYXJkVGl0bGUgPSBjcmVhdGVXaXRoQnNQcmVmaXgoJ2NhcmQtdGl0bGUnLCB7XG4gIENvbXBvbmVudDogRGl2U3R5bGVkQXNINVxufSk7XG52YXIgQ2FyZFN1YnRpdGxlID0gY3JlYXRlV2l0aEJzUHJlZml4KCdjYXJkLXN1YnRpdGxlJywge1xuICBDb21wb25lbnQ6IERpdlN0eWxlZEFzSDZcbn0pO1xudmFyIENhcmRMaW5rID0gY3JlYXRlV2l0aEJzUHJlZml4KCdjYXJkLWxpbmsnLCB7XG4gIENvbXBvbmVudDogJ2EnXG59KTtcbnZhciBDYXJkVGV4dCA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC10ZXh0Jywge1xuICBDb21wb25lbnQ6ICdwJ1xufSk7XG52YXIgQ2FyZEhlYWRlciA9IGNyZWF0ZVdpdGhCc1ByZWZpeCgnY2FyZC1oZWFkZXInKTtcbnZhciBDYXJkRm9vdGVyID0gY3JlYXRlV2l0aEJzUHJlZml4KCdjYXJkLWZvb3RlcicpO1xudmFyIENhcmRJbWdPdmVybGF5ID0gY3JlYXRlV2l0aEJzUHJlZml4KCdjYXJkLWltZy1vdmVybGF5Jyk7XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBib2R5OiBmYWxzZVxufTtcbnZhciBDYXJkID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBiZyA9IF9yZWYuYmcsXG4gICAgICB0ZXh0ID0gX3JlZi50ZXh0LFxuICAgICAgYm9yZGVyID0gX3JlZi5ib3JkZXIsXG4gICAgICBib2R5ID0gX3JlZi5ib2R5LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAnZGl2JyA6IF9yZWYkYXMsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImJzUHJlZml4XCIsIFwiY2xhc3NOYW1lXCIsIFwiYmdcIiwgXCJ0ZXh0XCIsIFwiYm9yZGVyXCIsIFwiYm9keVwiLCBcImNoaWxkcmVuXCIsIFwiYXNcIl0pO1xuXG4gIHZhciBwcmVmaXggPSB1c2VCb290c3RyYXBQcmVmaXgoYnNQcmVmaXgsICdjYXJkJyk7XG4gIHZhciBjYXJkQ29udGV4dCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXJkSGVhZGVyQnNQcmVmaXg6IHByZWZpeCArIFwiLWhlYWRlclwiXG4gICAgfTtcbiAgfSwgW3ByZWZpeF0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY2FyZENvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBwcmVmaXgsIGJnICYmIFwiYmctXCIgKyBiZywgdGV4dCAmJiBcInRleHQtXCIgKyB0ZXh0LCBib3JkZXIgJiYgXCJib3JkZXItXCIgKyBib3JkZXIpXG4gIH0pLCBib2R5ID9cbiAgLyojX19QVVJFX18qL1xuICAvLyBAdHMtaWdub3JlXG4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZEJvZHksIG51bGwsIGNoaWxkcmVuKSA6IGNoaWxkcmVuKSk7XG59KTtcbkNhcmQuZGlzcGxheU5hbWUgPSAnQ2FyZCc7XG5DYXJkLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbkNhcmQuSW1nID0gQ2FyZEltZztcbkNhcmQuVGl0bGUgPSBDYXJkVGl0bGU7XG5DYXJkLlN1YnRpdGxlID0gQ2FyZFN1YnRpdGxlO1xuQ2FyZC5Cb2R5ID0gQ2FyZEJvZHk7XG5DYXJkLkxpbmsgPSBDYXJkTGluaztcbkNhcmQuVGV4dCA9IENhcmRUZXh0O1xuQ2FyZC5IZWFkZXIgPSBDYXJkSGVhZGVyO1xuQ2FyZC5Gb290ZXIgPSBDYXJkRm9vdGVyO1xuQ2FyZC5JbWdPdmVybGF5ID0gQ2FyZEltZ092ZXJsYXk7XG5leHBvcnQgZGVmYXVsdCBDYXJkOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VCb290c3RyYXBQcmVmaXggfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogbnVsbFxufTtcbnZhciBDYXJkSW1nID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoIC8vIE5lZWQgdG8gZGVmaW5lIHRoZSBkZWZhdWx0IFwiYXNcIiBkdXJpbmcgcHJvcCBkZXN0cnVjdHVyaW5nIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBzdHlsZWQtY29tcG9uZW50cyBnaXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9yZWFjdC1ib290c3RyYXAvaXNzdWVzLzM1OTVcbmZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGJzUHJlZml4ID0gX3JlZi5ic1ByZWZpeCxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgdmFyaWFudCA9IF9yZWYudmFyaWFudCxcbiAgICAgIF9yZWYkYXMgPSBfcmVmLmFzLFxuICAgICAgQ29tcG9uZW50ID0gX3JlZiRhcyA9PT0gdm9pZCAwID8gJ2ltZycgOiBfcmVmJGFzLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJic1ByZWZpeFwiLCBcImNsYXNzTmFtZVwiLCBcInZhcmlhbnRcIiwgXCJhc1wiXSk7XG5cbiAgdmFyIHByZWZpeCA9IHVzZUJvb3RzdHJhcFByZWZpeChic1ByZWZpeCwgJ2NhcmQtaW1nJyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXModmFyaWFudCA/IHByZWZpeCArIFwiLVwiICsgdmFyaWFudCA6IHByZWZpeCwgY2xhc3NOYW1lKVxuICB9LCBwcm9wcykpO1xufSk7XG5DYXJkSW1nLmRpc3BsYXlOYW1lID0gJ0NhcmRJbWcnO1xuQ2FyZEltZy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5leHBvcnQgZGVmYXVsdCBDYXJkSW1nOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwLCByZWYpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIHAsIHtcbiAgICAgIHJlZjogcmVmLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHAuY2xhc3NOYW1lLCBjbGFzc05hbWUpXG4gICAgfSkpO1xuICB9KTtcbn0pOyIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBhdHRyaWJ1dGVzLCByZWFjdCBhcyBIb21lQ29udGVudCB9IGZyb20gJy4uL2NvbnRlbnQvaG9tZS5tZCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5kZXgubW9kdWxlLmNzcydcbmltcG9ydCBTbGlkZSBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJ1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93J1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nXG5pbXBvcnQgTGlzdEdyb3VwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9MaXN0R3JvdXAnXG5pbXBvcnQgQ2FyZCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2FyZCdcblxuLy8gaW1wb3J0IHRoZSBsaWJyYXJ5XG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmltcG9ydCB7IGZhcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcblxuXG4vLyBpbXBvcnQgeW91ciBpY29uc1xuXG5saWJyYXJ5LmFkZChmYXMpO1xuXG4gXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHRpdGxlLCBjYXRzIH0gPSBhdHRyaWJ1dGVzO1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vaWRlbnRpdHkubmV0bGlmeS5jb20vdjEvbmV0bGlmeS1pZGVudGl0eS13aWRnZXQuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgIDxTbGlkZS8+XG4gICAgXG5cbiAgICB7LyogPGFydGljbGU+XG4gICAgICAgICAgPGgxID57dGl0bGV9PC9oMT5cbiAgICAgICAgICA8SG9tZUNvbnRlbnQgLz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7Y2F0cy5tYXAoKGNhdCwgaykgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtrfT5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvYXJ0aWNsZT4gKi99XG4gICAgPHNlY3Rpb24+XG4gICAgICAgXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuPGgzIGNsYXNzTmFtZT17c3R5bGVzLnBhZGRpbmd9ICA+e3RpdGxlfVxuPC9oMz5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8Q29udGFpbmVyPlxuICAgICAgIDxIb21lQ29udGVudCAvPlxuICAgICAgIDxSb3c+XG4gICAgICAge2NhdHMubWFwKChjYXQsIGspID0+IChcbiAgICAgICAgIFxuICAgIDxDb2wgeHM9ezZ9IG1kPXs0fSBrZXk9e2t9PlxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnRodW1ifT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24gY29saW8tbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiQ2xvdWQgY29tcHV0aW5nIGFyY2hpdGVjdHVyZSBcIiBzcmM9XCIvaW1hZ2VzL3doYXRfd2UvcHJvZHVjdF9kZXZlbG9wbWVudC5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGFsdD1cInByb2R1Y3QgZGV2ZWxvcG1lbnRcIiAvPiBcbiAgICAgICAgICAgICAgICAgICAgICA8aDEgIGNsYXNzPVwiY29sb3ItdGV4dFwiPntjYXQubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgIDxwICBjbGFzcz1cImNvbG9yLXRleHQgaC0xMjVcIj4ge2NhdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJzbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFJlYWQgbW9yZSAmbmJzcDsmbmJzcDsmbmJzcDsgXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFzJywgJ2NoZXZyb24tY2lyY2xlLXJpZ2h0J119IC8+XG5cblxuICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgPC9Db2w+XG4gICAgXG4gIFxuICAgICAgKSl9XG4gIDwvUm93PlxuICBcbjwvQ29udGFpbmVyPlxuICAgICA8L3NlY3Rpb24+XG5cblxuey8qIHdoeSB1cyAqL31cbjxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0X2dyYXlfYmd9PlxuICBcblxuPENvbnRhaW5lcj5cbjxoMyBjbGFzc05hbWU9e3N0eWxlcy5wYWRkaW5nfT4gV0hZIFVTIDwvaDM+XG4gIFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRfY2VudGVyfT5cbiAgPExpc3RHcm91cCBob3Jpem9udGFsID5cblxuICA8TGlzdEdyb3VwLkl0ZW0+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeX0+XG4gICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5saXN0X2ljb259IGljb249e1snZmFzJywgJ3VzZXItYWx0J119IC8+XG4gICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT4gQ3VzdG9tZXIgRm9jdXM8L3A+XG4gICAgPC9kaXY+XG4gIDwvTGlzdEdyb3VwLkl0ZW0+XG5cbiAgPExpc3RHcm91cC5JdGVtPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PlxuICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9pY29ufSBpY29uPXtbJ2ZhcycsICd0cm9waHknXX0gLz5cbiAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PiBQYXNzaW9uIGZvciBTdWNjZXNzPC9wPlxuICAgIDwvZGl2PlxuICA8L0xpc3RHcm91cC5JdGVtPlxuXG5cbiAgPExpc3RHcm91cC5JdGVtPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PlxuICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9pY29ufSBpY29uPXtbJ2ZhcycsICdsYXB0b3AnXX0gLz5cbiAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PiBUZWNobmljYWwgS25vd2xlZGdlPC9wPlxuICAgIDwvZGl2PlxuICA8L0xpc3RHcm91cC5JdGVtPlxuXG4gIDxMaXN0R3JvdXAuSXRlbT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT5cbiAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RfaWNvbn0gaWNvbj17WydmYXMnLCAnYm9vayddfSAvPlxuICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFncmFwaH0+ICBJbnRlZ3JpdHkgJiBBY2NvdW50YWJpbGl0eTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9MaXN0R3JvdXAuSXRlbT5cblxuICA8TGlzdEdyb3VwLkl0ZW0+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeX0+XG4gICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5saXN0X2ljb259IGljb249e1snZmFzJywgJ2Zyb3duJ119IC8+XG4gICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT4gICBFeGNlbGxlbmNlIGluIFNlcnZpY2UgPC9wPlxuICAgIDwvZGl2PlxuICA8L0xpc3RHcm91cC5JdGVtPlxuXG5cbjwvTGlzdEdyb3VwPlxuICA8L2Rpdj5cbjxicj48L2JyPjxicj48L2JyPlxuICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMucGFkZGluZ30+IE9VUiBNQU5UUkEgPC9oMz5cbjxSb3c+XG48Q2FyZD5cblxuICA8Q2FyZC5Cb2R5PlxuICBcbiAgPC9DYXJkLkJvZHk+XG48L0NhcmQ+XG48L1Jvdz5cblxuPC9Db250YWluZXI+XG5cblxuPC9zZWN0aW9uPlxuXG5cblxuXG4gICAgICA8Lz5cbiAgICApXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9