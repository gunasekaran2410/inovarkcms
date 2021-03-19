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
        children: items.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: item.title
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 28
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
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

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-elastic-carousel/dist/index.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-elastic-carousel/dist/index.es.js ***!
  \**************************************************************/
/*! exports provided: default, consts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consts", function() { return consts; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-swipeable */ "./node_modules/react-swipeable/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var react_only_when__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-only-when */ "./node_modules/react-only-when/dist/index.es.js");








function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var noop = function noop() {};
var numberToArray = function numberToArray(n) {
  return _toConsumableArray(Array(n).keys());
};
var cssPrefix = function cssPrefix() {
  var prefix = "rec";
  var space = " ";
  var result = "".concat(prefix); // initial it with global prefix;
  // in case of an array we add the class prefix per item;

  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  var chainedClasses = classNames.reduce(function (acc, current) {
    if (current) {
      acc += "".concat(space).concat(prefix, "-").concat(current); // we must keep spaces between class names
    }

    return acc;
  }, "");
  result += chainedClasses;
  return result;
};
var pipe = function pipe() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function (x) {
    return fns.reduce(function (v, f) {
      return f(v);
    }, x);
  };
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  transition: all 0.3s ease;\n  font-size: 1.6em;\n  background-color: rgba(103, 58, 183, 0.1);\n  color: ", ";\n  box-shadow: 0 0 2px 0px #333;\n  border-radius: 50%;\n  border: none;\n  padding: 0;\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  line-height: 50px;\n  align-self: center;\n  cursor: pointer;\n  outline: none;\n  &:hover:enabled,\n  &:focus:enabled {\n    color: #fff;\n    background-color: rgba(103, 58, 183, 1);\n    box-shadow: 0 0 2px 0 #333;\n  }\n  &:disabled {\n    cursor: not-allowed;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Button = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].button.attrs(function (_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "button" : _ref$type;
  return {
    type: type
  };
})(_templateObject(), function (props) {
  return props.disabled ? "#999" : "#333";
});

var consts = {
  PREV: "PREV",
  NEXT: "NEXT",
  START: "flex-start",
  CENTER: "center",
  END: "flex-end"
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  overflow: hidden;\n  user-select: none;\n  justify-content: ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.attrs(function (_ref) {
  var style = _ref.style;
  return {
    style: style,
    className: cssPrefix("item-wrapper")
  };
})(_templateObject$1(), function (_ref2) {
  var itemPosition = _ref2.itemPosition;
  return itemPosition;
});
ItemWrapper.defaultProps = {
  style: {},
  itemPosition: consts.CENTER
};
ItemWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  itemPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([consts.START, consts.CENTER, consts.END])
};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  margin: 0 10px;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var SliderContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject$2());

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  flex-direction: ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

var calcLeft = function calcLeft(_ref) {
  var isRTL = _ref.isRTL,
      verticalMode = _ref.verticalMode,
      isSwiping = _ref.isSwiping,
      swipedSliderPosition = _ref.swipedSliderPosition,
      sliderPosition = _ref.sliderPosition;

  if (verticalMode || isRTL) {
    return "auto";
  } else {
    return "".concat(isSwiping ? swipedSliderPosition : sliderPosition, "px");
  }
};

var calcRight = function calcRight(_ref2) {
  var isRTL = _ref2.isRTL,
      verticalMode = _ref2.verticalMode,
      isSwiping = _ref2.isSwiping,
      swipedSliderPosition = _ref2.swipedSliderPosition,
      sliderPosition = _ref2.sliderPosition;

  if (!verticalMode && isRTL) {
    return "".concat(isSwiping ? swipedSliderPosition : sliderPosition, "px");
  } else {
    return "auto";
  }
};

var calcTop = function calcTop(_ref3) {
  var verticalMode = _ref3.verticalMode,
      isSwiping = _ref3.isSwiping,
      swipedSliderPosition = _ref3.swipedSliderPosition,
      sliderPosition = _ref3.sliderPosition;

  if (!verticalMode) {
    return "auto";
  } else {
    return "".concat(isSwiping ? swipedSliderPosition : sliderPosition, "px");
  }
};

var calcTransition = function calcTransition(_ref4) {
  var isSwiping = _ref4.isSwiping,
      transitionMs = _ref4.transitionMs,
      easing = _ref4.easing,
      tiltEasing = _ref4.tiltEasing;
  var duration = isSwiping ? 0 : transitionMs;
  var effectiveEasing = isSwiping ? tiltEasing : easing;
  return "all ".concat(duration, "ms ").concat(effectiveEasing);
}; // We use attributes (style) to bypass multiple creation of classes (dynamic styling)


var Slider = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.attrs(function (props) {
  return {
    style: {
      transition: calcTransition(props),
      left: calcLeft(props),
      right: calcRight(props),
      top: calcTop(props)
    }
  };
})(_templateObject$3(), function (_ref5) {
  var verticalMode = _ref5.verticalMode;
  return verticalMode ? "column" : "row";
}, function (_ref6) {
  var verticalMode = _ref6.verticalMode;
  return verticalMode ? "min-height: 100%;" : "";
}, function (_ref7) {
  var verticalMode = _ref7.verticalMode,
      outerSpacing = _ref7.outerSpacing;
  return verticalMode ? "" : "margin: 0 ".concat(outerSpacing, "px;");
});

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledCarousel = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.attrs(function (props) {
  return {
    style: {
      height: props.size.height
    }
  };
})(_templateObject$4());

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  direction: ", ";\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var CarouselWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject$5(), function (_ref) {
  var isRTL = _ref.isRTL;
  return isRTL ? "rtl" : "ltr";
});

var ItemWrapperContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(ItemWrapperContainer, _React$Component);

  var _super = _createSuper(ItemWrapperContainer);

  function ItemWrapperContainer() {
    var _this;

    _classCallCheck(this, ItemWrapperContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          id = _this$props.id;
      onClick(id);
    });

    return _this;
  }

  _createClass(ItemWrapperContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ItemWrapper, _extends({}, this.props, {
        onClick: this.onClick
      }));
    }
  }]);

  return ItemWrapperContainer;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

ItemWrapperContainer.defaultProps = {
  onClick: noop
};
ItemWrapperContainer.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

var Track = function Track(_ref) {
  var children = _ref.children,
      childWidth = _ref.childWidth,
      autoTabIndexVisibleItems = _ref.autoTabIndexVisibleItems,
      enableSwipe = _ref.enableSwipe,
      enableMouseSwipe = _ref.enableMouseSwipe,
      preventDefaultTouchmoveEvent = _ref.preventDefaultTouchmoveEvent,
      itemsToShow = _ref.itemsToShow,
      itemsToScroll = _ref.itemsToScroll,
      currentItem = _ref.currentItem,
      itemPosition = _ref.itemPosition,
      itemPadding = _ref.itemPadding,
      onSwiped = _ref.onSwiped,
      onSwiping = _ref.onSwiping,
      verticalMode = _ref.verticalMode,
      onItemClick = _ref.onItemClick;
  var width = "".concat(childWidth, "px");
  var paddingStyle = "".concat(itemPadding.join("px "), "px");
  var minVisibleItem = currentItem;
  var maxVisibleItem = currentItem + itemsToShow;
  var prevItem = minVisibleItem - itemsToScroll;
  var nextItem = maxVisibleItem + itemsToScroll;
  var originalChildren = react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.map(children, function (child, idx) {
    var isVisible = idx >= minVisibleItem && idx < maxVisibleItem;
    var isPrevItem = !isVisible && idx >= prevItem && idx < currentItem;
    var isNextItem = !isVisible && idx < nextItem && idx > currentItem;
    var itemClass = "carousel-item";
    var childToRender = autoTabIndexVisibleItems ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
      tabIndex: isVisible ? 0 : -1
    }) : child;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: cssPrefix(itemClass, "".concat(itemClass, "-").concat(idx), "".concat(itemClass, "-").concat(isVisible ? "visible" : "hidden"), isPrevItem && "".concat(itemClass, "-prev"), isNextItem && "".concat(itemClass, "-next"))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ItemWrapperContainer, {
      id: idx,
      itemPosition: itemPosition,
      style: {
        width: width,
        padding: paddingStyle
      },
      key: idx,
      onClick: onItemClick
    }, childToRender));
  });
  var toRender = enableSwipe ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_swipeable__WEBPACK_IMPORTED_MODULE_3__["Swipeable"], {
    style: {
      display: "flex",
      flexDirection: verticalMode ? "column" : "row"
    },
    stopPropagation: true,
    preventDefaultTouchmoveEvent: preventDefaultTouchmoveEvent,
    trackMouse: enableMouseSwipe,
    onSwiped: onSwiped,
    onSwiping: onSwiping,
    className: cssPrefix("swipable")
  }, originalChildren) : originalChildren;
  return toRender;
};

Track.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  itemsToShow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  noAutoTabbedItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  currentItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  itemPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  itemPadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  childWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  verticalMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  enableSwipe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  enableMouseSwipe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  preventDefaultTouchmoveEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onSwiped: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSwiping: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onItemClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

var directionIcons = {
  left: "❮",
  right: "❯",
  up: "❮",
  down: "❯"
};
var arrowClassname = cssPrefix("arrow");

var rotateStyle = function rotateStyle(direction) {
  var rotate = {};

  if (direction === Arrow.up || direction === Arrow.down) {
    rotate.transform = "rotate(90deg)";
  }

  return rotate;
};

var Arrow = function Arrow(_ref) {
  var direction = _ref.direction,
      onClick = _ref.onClick,
      icons = _ref.icons,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["direction", "onClick", "icons", "style"]);

  var arrows = _objectSpread2(_objectSpread2({}, directionIcons), icons);

  var styleObj = _objectSpread2(_objectSpread2({}, rotateStyle(direction)), style);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, _extends({
    tabIndex: 0,
    onClick: onClick,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(arrowClassname, "".concat(arrowClassname, "-").concat(direction)),
    style: styleObj
  }, rest), arrows[direction]);
};

Arrow.left = "left";
Arrow.right = "right";
Arrow.up = "up";
Arrow.down = "down";
Arrow.propTypes = {
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["left", "right", "up", "down"]).isRequired,
  icons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

var NEXT_ITEM = "NEXT_ITEM";
var PREV_ITEM = "PREV_ITEM";

var activeIndexReducer = function activeIndexReducer(state, action) {
  var limit = action.limit,
      itemsToScroll = action.itemsToScroll,
      type = action.type;

  switch (type) {
    case NEXT_ITEM:
      {
        var optimisticNextItem = state + itemsToScroll;
        var nextItem = limit >= optimisticNextItem ? optimisticNextItem : limit;
        return nextItem;
      }

    case PREV_ITEM:
      {
        var optimisticPrevItem = state - itemsToScroll;
        var prevItem = optimisticPrevItem >= limit ? optimisticPrevItem : limit;
        return prevItem;
      }

    default:
      return state;
  }
};

var nextItemAction = function nextItemAction(limit, itemsToScroll) {
  return {
    type: NEXT_ITEM,
    limit: limit,
    itemsToScroll: itemsToScroll
  };
};
var prevItemAction = function prevItemAction(limit, itemsToScroll) {
  return {
    type: PREV_ITEM,
    limit: limit,
    itemsToScroll: itemsToScroll
  };
};

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  padding: 0;\n  transition: all 250ms ease;\n  border: none;\n  margin: 5px;\n  background-color: ", ";\n  font-size: 1.3em;\n  content: \"\";\n  height: 10px;\n  width: 10px;\n  box-shadow: ", ";\n  border-radius: 50%;\n  outline: none;\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    box-shadow: ", ";\n  }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var boxShadow = "0 0 1px 2px rgba(0, 0, 0, 0.5)";
var activeBoxShadow = "0 0 1px 3px rgba(103,58,183,1)";
var hoveredBoxShadow = "0 0 1px 3px rgba(103,58,183,.5)";
var Dot = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].button.attrs(function (_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "button" : _ref$type;
  return {
    type: type
  };
})(_templateObject$6(), function (_ref2) {
  var active = _ref2.active;
  return active ? "rgba(103,58,183,.5)" : "transparent";
}, function (_ref3) {
  var active = _ref3.active;
  return active ? activeBoxShadow : boxShadow;
}, function (_ref4) {
  var active = _ref4.active;
  return active ? activeBoxShadow : hoveredBoxShadow;
});

var DotContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(DotContainer, _React$Component);

  var _super = _createSuper(DotContainer);

  function DotContainer() {
    var _this;

    _classCallCheck(this, DotContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          id = _this$props.id;
      onClick(id);
    });

    return _this;
  }

  _createClass(DotContainer, [{
    key: "render",
    value: function render() {
      var active = this.props.active;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Dot, {
        tabIndex: active ? -1 : 0,
        onClick: this.onClick,
        active: active,
        className: "".concat(cssPrefix("dot"), " ").concat(active ? cssPrefix("dot_active") : "")
      });
    }
  }]);

  return DotContainer;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

DotContainer.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 15px;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var Indicators = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject$7());

var Pagination = /*#__PURE__*/function (_React$Component) {
  _inherits(Pagination, _React$Component);

  var _super = _createSuper(Pagination);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _super.apply(this, arguments);
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          numOfPages = _this$props.numOfPages,
          activePage = _this$props.activePage,
          onClick = _this$props.onClick;
      var pages = numberToArray(numOfPages);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Indicators, {
        className: cssPrefix("pagination")
      }, pages.map(function (item, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DotContainer, {
          key: i,
          id: i,
          active: i === activePage,
          onClick: onClick
        });
      }));
    }
  }]);

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

Pagination.defaultProps = {
  onClick: noop
};
Pagination.propTypes = {
  numOfPages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  activePage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

var Carousel = /*#__PURE__*/function (_React$Component) {
  _inherits(Carousel, _React$Component);

  var _super = _createSuper(Carousel);

  function Carousel() {
    var _this;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      rootHeight: 0,
      childHeight: 0,
      sliderPosition: 0,
      swipedSliderPosition: 0,
      isSwiping: false,
      transitioning: false,
      transitionMs: _this.props.transitionMs,
      activeIndex: _this.props.initialActiveIndex || _this.props.initialFirstItem,
      // support deprecated  initialFirstItem
      pages: [],
      activePage: 0,
      sliderContainerWidth: 0
    });

    _defineProperty(_assertThisInitialized(_this), "setRef", function (name) {
      return function (ref) {
        return _this[name] = ref;
      };
    });

    _defineProperty(_assertThisInitialized(_this), "initResizeObserver", function () {
      _this.ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_5__["default"](function (entries, observer) {
        var _iterator = _createForOfIteratorHelper(entries),
            _step;

        try {
          var _loop = function _loop() {
            var entry = _step.value;

            if (entry.target === _this.sliderContainer) {
              // we are using rAF because it fixes the infinite refresh with gatsby (ssr?).
              // TBH, I'm not sure i fully understand why.
              // see https://github.com/sag1v/react-elastic-carousel/issues/107
              window.requestAnimationFrame(function () {
                _this.onContainerResize(entry);
              });
            }

            if (entry.target === _this.slider) {
              // we are using rAF because it fixes the infinite refresh with gatsby (ssr?).
              // TBH, I'm not sure i fully understand why
              // see https://github.com/sag1v/react-elastic-carousel/issues/107
              window.requestAnimationFrame(function () {
                _this.onSliderResize(entry);
              });
            }
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });

      _this.ro.observe(_this.sliderContainer);

      _this.ro.observe(_this.slider);
    });

    _defineProperty(_assertThisInitialized(_this), "unSubscribeObserver", function () {
      return _this.ro.disconnect();
    });

    _defineProperty(_assertThisInitialized(_this), "setAutoPlay", function () {
      var _this$getDerivedProps = _this.getDerivedPropsFromBreakPoint(),
          autoPlaySpeed = _this$getDerivedProps.autoPlaySpeed;

      _this.autoPlayIntervalId = setInterval(function () {
        var transitioning = _this.state.transitioning;

        if (!transitioning) {
          _this.slideNext();
        }
      }, autoPlaySpeed);
    });

    _defineProperty(_assertThisInitialized(_this), "removeAutoPlay", function () {
      if (_this.autoPlayIntervalId) {
        clearInterval(_this.autoPlayIntervalId);
        _this.autoPlayIntervalId = null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setPages", function () {
      var numOfPages = _this.getNumOfPages();

      var pages = numberToArray(numOfPages);

      _this.setState({
        pages: pages
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSliderTransitionEnd", function (fn) {
      _this.slider.addEventListener("transitionend", fn);
    });

    _defineProperty(_assertThisInitialized(_this), "removeSliderTransitionHook", function (fn) {
      _this.slider.removeEventListener("transitionend", fn);
    });

    _defineProperty(_assertThisInitialized(_this), "getDerivedPropsFromBreakPoint", function () {
      var _this$props = _this.props,
          breakPoints = _this$props.breakPoints,
          restOfProps = _objectWithoutProperties(_this$props, ["breakPoints"]);

      var sliderContainerWidth = _this.state.sliderContainerWidth; // default breakpoint from individual props

      var currentBreakPoint; // if breakpoints were added as props override the individual props

      if (breakPoints && breakPoints.length > 0) {
        currentBreakPoint = breakPoints.slice() // no mutations
        .reverse() // so we can find last match
        .find(function (bp) {
          return bp.width <= sliderContainerWidth;
        });

        if (!currentBreakPoint) {
          /* in case we don't have a lower width than sliderContainerWidth
           * this mostly happens in initilization when sliderContainerWidth is 0
           */
          currentBreakPoint = breakPoints[0];
        }
      } // merge direct props with current breakpoint Props


      return _objectSpread2(_objectSpread2({}, restOfProps), currentBreakPoint);
    });

    _defineProperty(_assertThisInitialized(_this), "updateSliderPosition", function () {
      _this.setState(function (state) {
        var _this$getDerivedProps2 = _this.getDerivedPropsFromBreakPoint(),
            children = _this$getDerivedProps2.children,
            verticalMode = _this$getDerivedProps2.verticalMode,
            itemsToShow = _this$getDerivedProps2.itemsToShow,
            transitionMs = _this$getDerivedProps2.transitionMs;

        var childHeight = state.childHeight,
            activeIndex = state.activeIndex;

        var childWidth = _this.calculateChildWidth();

        var totalItems = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(children).length;
        var hiddenSlots = totalItems - itemsToShow;
        var moveBy = activeIndex * -1;
        var emptySlots = itemsToShow - (totalItems - activeIndex);

        if (emptySlots > 0 && hiddenSlots > 0) {
          moveBy = emptySlots + activeIndex * -1;
        }

        var sliderPosition = (verticalMode ? childHeight : childWidth) * moveBy;
        var newActiveIndex = emptySlots > 0 ? activeIndex - emptySlots : activeIndex; // go back from 0ms to whatever set by the user
        // We were at 0ms because we wanted to disable animation on resize
        // see https://github.com/sag1v/react-elastic-carousel/issues/94

        window.requestAnimationFrame(function () {
          return _this.setState({
            transitionMs: transitionMs
          });
        });
        return {
          sliderPosition: sliderPosition,
          activeIndex: newActiveIndex < 0 ? 0 : newActiveIndex
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSliderResize", function (sliderNode) {
      var _this$getDerivedProps3 = _this.getDerivedPropsFromBreakPoint(),
          verticalMode = _this$getDerivedProps3.verticalMode,
          children = _this$getDerivedProps3.children,
          itemsToShow = _this$getDerivedProps3.itemsToShow;

      var sliderHeight = sliderNode.contentRect.height;
      var nextState = {};
      var childrenLength = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(children).length;

      if (verticalMode) {
        var childHeight = sliderHeight / childrenLength; // We use Math.min because we don't want to make the child smaller
        // if the number of children is smaller than itemsToShow.
        // (Because we do not want "empty slots")

        nextState.rootHeight = childHeight * Math.min(childrenLength, itemsToShow);
        nextState.childHeight = childHeight;
      } else {
        nextState.rootHeight = sliderHeight;
      }

      _this.setState(nextState);
    });

    _defineProperty(_assertThisInitialized(_this), "calculateChildWidth", function () {
      var sliderContainerWidth = _this.state.sliderContainerWidth;

      var _this$getDerivedProps4 = _this.getDerivedPropsFromBreakPoint(),
          verticalMode = _this$getDerivedProps4.verticalMode,
          itemsToShow = _this$getDerivedProps4.itemsToShow,
          showEmptySlots = _this$getDerivedProps4.showEmptySlots,
          children = _this$getDerivedProps4.children;
      /* based on slider container's width, get num of items to show
          * and calculate child's width (and update it in state)
          */


      var childrenLength = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(children).length;
      var childWidth = 0;

      if (verticalMode) {
        childWidth = sliderContainerWidth;
      } else {
        // When "showEmptySlots" is false
        // We use Math.min because we don't want to make the child smaller
        // if the number of children is smaller than itemsToShow.
        // (Because we do not want "empty slots")
        childWidth = sliderContainerWidth / (showEmptySlots ? itemsToShow : Math.min(childrenLength, itemsToShow));
      }

      return childWidth;
    });

    _defineProperty(_assertThisInitialized(_this), "onContainerResize", function (sliderContainerNode) {
      var newSliderContainerWidth = sliderContainerNode.contentRect.width; // update slider container width
      // disable animation on resize see https://github.com/sag1v/react-elastic-carousel/issues/94

      var _this$getDerivedProps5 = _this.getDerivedPropsFromBreakPoint(),
          outerSpacing = _this$getDerivedProps5.outerSpacing,
          initialVerticalMode = _this$getDerivedProps5.verticalMode;

      var containerWidth = newSliderContainerWidth - (initialVerticalMode ? 0 : outerSpacing * 2);

      if (_this.state.sliderContainerWidth === newSliderContainerWidth) {
        // prevent infinite loop
        return;
      }

      _this.setState({
        sliderContainerWidth: containerWidth,
        transitionMs: 0
      }, function () {
        // we must get these props inside setState (get future props because its async)
        var _this$getDerivedProps6 = _this.getDerivedPropsFromBreakPoint(),
            onResize = _this$getDerivedProps6.onResize,
            itemsToShow = _this$getDerivedProps6.itemsToShow,
            children = _this$getDerivedProps6.children;

        var childrenLength = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(children).length;

        _this.setState(function (currentState) {
          // We might need to change the selected index when the size of the container changes
          // we are making sure the selected index is not out of boundaries and respecting itemsToShow
          // This usually happens with breakpoints. see https://github.com/sag1v/react-elastic-carousel/issues/122
          var activeIndex = currentState.activeIndex; // we take the lowest, in case itemsToShow is greater than childrenLength

          var maxItemsToShow = Math.min(childrenLength, itemsToShow);
          var endLimit = childrenLength - maxItemsToShow;

          if (activeIndex > endLimit) {
            activeIndex = endLimit;
          }

          return {
            activeIndex: activeIndex
          };
        }, function () {
          /* Based on all of the above new data:
          * update slider position
          * get the new current breakpoint
          * pass the current breakpoint to the consumer's callback
          */
          _this.updateSliderPosition();

          var currentBreakPoint = _this.getDerivedPropsFromBreakPoint();

          onResize(currentBreakPoint);
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "tiltMovement", function (position) {
      var distance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 150;

      _this.setState(function (state) {
        return {
          isSwiping: true,
          swipedSliderPosition: position - distance
        };
      });

      setTimeout(function () {
        _this.setState({
          isSwiping: false,
          swipedSliderPosition: 0
        });
      }, duration);
    });

    _defineProperty(_assertThisInitialized(_this), "convertChildToCbObj", function (index) {
      var _this$getDerivedProps7 = _this.getDerivedPropsFromBreakPoint(),
          children = _this$getDerivedProps7.children; // support decimal itemsToShow


      var roundedIdx = Math.round(index);
      var child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(children)[roundedIdx];
      return {
        item: child.props,
        index: roundedIdx
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getNextItemIndex", function (currentIndex, getPrev) {
      var _this$getDerivedProps8 = _this.getDerivedPropsFromBreakPoint(),
          children = _this$getDerivedProps8.children,
          itemsToShow = _this$getDerivedProps8.itemsToShow,
          itemsToScroll = _this$getDerivedProps8.itemsToScroll;

      var childrenLength = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(children).length;
      var notEnoughItemsToShow = itemsToShow > childrenLength;
      var limit = getPrev ? 0 : childrenLength - itemsToShow;

      if (notEnoughItemsToShow) {
        limit = 0; // basically don't move
      }

      var nextAction = getPrev ? prevItemAction(0, itemsToScroll) : nextItemAction(limit, itemsToScroll);
      var nextItem = activeIndexReducer(currentIndex, nextAction);
      return nextItem;
    });

    _defineProperty(_assertThisInitialized(_this), "getNextItemObj", function (getPrev) {
      var _this$getDerivedProps9 = _this.getDerivedPropsFromBreakPoint(),
          children = _this$getDerivedProps9.children;

      var activeIndex = _this.state.activeIndex;

      var nextItemIndex = _this.getNextItemIndex(activeIndex, getPrev); // support decimal itemsToShow


      var roundedIdx = Math.round(nextItemIndex);
      var asElement = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(children)[roundedIdx];
      var asObj = {
        item: asElement.props,
        index: roundedIdx
      };
      return asObj;
    });

    _defineProperty(_assertThisInitialized(_this), "resetSwipe", function () {
      _this.setState({
        swipedSliderPosition: 0,
        transitioning: false,
        isSwiping: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwiping", function (data) {
      var deltaX = data.deltaX,
          absX = data.absX,
          deltaY = data.deltaY,
          absY = data.absY,
          dir = data.dir;

      _this.setState(function (state) {
        var childHeight = state.childHeight,
            activeIndex = state.activeIndex,
            sliderPosition = state.sliderPosition;

        var _this$getDerivedProps10 = _this.getDerivedPropsFromBreakPoint(),
            itemsToShow = _this$getDerivedProps10.itemsToShow,
            verticalMode = _this$getDerivedProps10.verticalMode,
            children = _this$getDerivedProps10.children,
            isRTL = _this$getDerivedProps10.isRTL;

        var childWidth = _this.calculateChildWidth(); // determine how far can user swipe


        var childrenLength = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(children).length;
        var goingNext = !verticalMode && dir === "Left" && !isRTL || !verticalMode && dir === "Right" && isRTL || verticalMode && dir === "Up";
        var goingBack = !verticalMode && dir === "Right" && !isRTL || !verticalMode && dir === "Left" && isRTL || verticalMode && dir === "Down";
        var horizontalSwipe = dir === "Left" || dir === "Right";
        var verticalSwipe = dir === "Up" || dir === "Down";
        var horizontalMode = !verticalMode;
        var distanceSwipe = 0;
        var horizontalEdgeStoppage = childWidth / 2;
        var verticalEdgeStoppage = childHeight / 2;

        if (verticalMode) {
          if (verticalSwipe) {
            var trackSize = childrenLength * childHeight;

            if (goingNext) {
              distanceSwipe = trackSize - childHeight * activeIndex - itemsToShow * childHeight + verticalEdgeStoppage;
            } else if (goingBack) {
              distanceSwipe = childHeight * activeIndex + verticalEdgeStoppage;
            }
          }
        } else {
          if (horizontalSwipe) {
            var _trackSize = childrenLength * childWidth;

            if (goingNext) {
              distanceSwipe = _trackSize - childWidth * activeIndex - itemsToShow * childWidth + horizontalEdgeStoppage;
            } else if (goingBack) {
              distanceSwipe = childWidth * activeIndex + horizontalEdgeStoppage;
            }
          }
        }

        var shouldHorizontalSkipUpdate = horizontalMode && verticalSwipe || horizontalMode && horizontalSwipe && absX > distanceSwipe;
        var shouldVerticalSkipUpdate = verticalMode && horizontalSwipe || verticalMode && verticalSwipe && absY > distanceSwipe;

        if (shouldHorizontalSkipUpdate || shouldVerticalSkipUpdate) {
          // bail out of state update
          return;
        }

        var swipedSliderPosition;

        if (horizontalSwipe) {
          if (isRTL) {
            swipedSliderPosition = sliderPosition + deltaX;
          } else {
            swipedSliderPosition = sliderPosition - deltaX;
          }
        } else {
          swipedSliderPosition = sliderPosition - deltaY;
        }

        return {
          swipedSliderPosition: swipedSliderPosition,
          isSwiping: true,
          transitioning: true
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwiped", function (data) {
      // we need to handle all scenarios:
      // 1. Horizontal mode - swipe left or right
      // 2. Horizontal mode with RTL - swipe left or right
      // 3. vertical mode - swipe up or down
      var absX = data.absX,
          absY = data.absY,
          dir = data.dir;
      var _this$state = _this.state,
          childHeight = _this$state.childHeight,
          activeIndex = _this$state.activeIndex;

      var _this$getDerivedProps11 = _this.getDerivedPropsFromBreakPoint(),
          verticalMode = _this$getDerivedProps11.verticalMode,
          isRTL = _this$getDerivedProps11.isRTL,
          itemsToScroll = _this$getDerivedProps11.itemsToScroll;

      var childWidth = _this.calculateChildWidth();

      var func = _this.resetSwipe;
      var minSwipeDistanceHorizontal = childWidth / 5;
      var minSwipeDistanceVertical = childHeight / 5;
      var swipedLeft = dir === "Left";
      var swipedRight = dir === "Right";
      var swipedUp = dir === "Up";
      var swipedDown = dir === "Down";
      var verticalGoSwipe = verticalMode && (swipedUp || swipedDown) && absY > minSwipeDistanceVertical;
      var horizontalGoSwipe = !verticalMode && (swipedRight || swipedLeft) && absX > minSwipeDistanceHorizontal;
      var goodToGo = false;

      if (verticalGoSwipe || horizontalGoSwipe) {
        goodToGo = true;
      }

      if (goodToGo) {
        // we should go to a different item
        // determine what method we need to invoke
        if (verticalMode) {
          // get number of slides from user's swiping
          var numberOfSlidesViaSwipe = Math.ceil((absY - minSwipeDistanceVertical) / childHeight); // if user swipes more than itemsToScroll then we want to bypass itemsToScroll for a smoother scroll

          var numberOfSlidesTogo = Math.max(itemsToScroll, numberOfSlidesViaSwipe);
          var backSlidesToGo = activeIndex - numberOfSlidesTogo;
          var forwardSlideTtoGo = activeIndex + numberOfSlidesTogo; // up or down

          if (swipedDown) {
            // func = this.onPrevStart;
            func = function func() {
              return _this.goTo(backSlidesToGo);
            };
          }

          if (swipedUp) {
            // func = this.onNextStart;
            func = function func() {
              return _this.goTo(forwardSlideTtoGo);
            };
          }
        } else {
          // get number of slides from user's swiping
          var _numberOfSlidesViaSwipe = Math.ceil((absX - minSwipeDistanceHorizontal) / childWidth); // if user swipes more than itemsToScroll then we want to bypass itemsToScroll for a smoother scroll


          var _numberOfSlidesTogo = Math.max(itemsToScroll, _numberOfSlidesViaSwipe);

          var _backSlidesToGo = activeIndex - _numberOfSlidesTogo;

          var _forwardSlideTtoGo = activeIndex + _numberOfSlidesTogo; // horizontal mode


          if (isRTL) {
            // flip sides
            if (swipedLeft) {
              // func = this.onPrevStart;
              func = function func() {
                return _this.goTo(_backSlidesToGo);
              };
            }

            if (swipedRight) {
              // func = this.onNextStart;
              func = function func() {
                return _this.goTo(_forwardSlideTtoGo);
              };
            }
          } else {
            // normal behavior
            if (swipedLeft) {
              // func = this.onNextStart;
              func = function func() {
                return _this.goTo(_forwardSlideTtoGo);
              };
            }

            if (swipedRight) {
              // func = this.onPrevStart;
              func = function func() {
                return _this.goTo(_backSlidesToGo);
              };
            }
          }
        }
      } // we are not "tilting" on edges, so we need to reset isSwiping and transitioning.
      // otherwise we wont slide back to edge


      _this.setState({
        isSwiping: false,
        transitioning: false
      });

      func({
        skipTilt: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onNextStart", function (options) {
      var _this$getDerivedProps12 = _this.getDerivedPropsFromBreakPoint(),
          onNextStart = _this$getDerivedProps12.onNextStart;

      var activeIndex = _this.state.activeIndex;

      var nextItemObj = _this.getNextItemObj();

      var prevItemObj = _this.convertChildToCbObj(activeIndex);

      onNextStart(prevItemObj, nextItemObj);

      _this.slideNext(options);
    });

    _defineProperty(_assertThisInitialized(_this), "onPrevStart", function (options) {
      var _this$getDerivedProps13 = _this.getDerivedPropsFromBreakPoint(),
          onPrevStart = _this$getDerivedProps13.onPrevStart;

      var activeIndex = _this.state.activeIndex;

      var nextItemObj = _this.getNextItemObj(true);

      var prevItemObj = _this.convertChildToCbObj(activeIndex);

      onPrevStart(prevItemObj, nextItemObj);

      _this.slidePrev(options);
    });

    _defineProperty(_assertThisInitialized(_this), "slideNext", function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var skipTilt = options.skipTilt;

      var _this$getDerivedProps14 = _this.getDerivedPropsFromBreakPoint(),
          enableTilt = _this$getDerivedProps14.enableTilt;

      var _this$state2 = _this.state,
          activeIndex = _this$state2.activeIndex,
          sliderPosition = _this$state2.sliderPosition;

      var nextItem = _this.getNextItemIndex(activeIndex, false);

      if (activeIndex !== nextItem) {
        _this.goTo(nextItem);
      } else if (enableTilt && !skipTilt) {
        _this.tiltMovement(sliderPosition, 20, 150);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slidePrev", function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var skipTilt = options.skipTilt;
      var activeIndex = _this.state.activeIndex;

      var _this$getDerivedProps15 = _this.getDerivedPropsFromBreakPoint(),
          enableTilt = _this$getDerivedProps15.enableTilt;

      var prevItem = _this.getNextItemIndex(activeIndex, true);

      if (activeIndex !== prevItem) {
        _this.goTo(prevItem);
      } else if (enableTilt && !skipTilt) {
        _this.tiltMovement(0, -20, 150);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onNextEnd", function () {
      var _this$getDerivedProps16 = _this.getDerivedPropsFromBreakPoint(),
          onNextEnd = _this$getDerivedProps16.onNextEnd,
          onChange = _this$getDerivedProps16.onChange;

      var _this$state3 = _this.state,
          activeIndex = _this$state3.activeIndex,
          activePage = _this$state3.activePage;

      var nextItemObj = _this.convertChildToCbObj(activeIndex);

      _this.removeSliderTransitionHook(_this.onNextEnd);

      _this.setState({
        transitioning: false
      });

      onChange && onChange(nextItemObj, activePage);
      onNextEnd(nextItemObj, activePage);
    });

    _defineProperty(_assertThisInitialized(_this), "onPrevEnd", function () {
      var _this$getDerivedProps17 = _this.getDerivedPropsFromBreakPoint(),
          onPrevEnd = _this$getDerivedProps17.onPrevEnd,
          onChange = _this$getDerivedProps17.onChange;

      var _this$state4 = _this.state,
          activeIndex = _this$state4.activeIndex,
          activePage = _this$state4.activePage;

      var nextItemObj = _this.convertChildToCbObj(activeIndex);

      _this.removeSliderTransitionHook(_this.onPrevEnd);

      _this.setState({
        transitioning: false
      });

      onChange && onChange(nextItemObj, activePage);
      onPrevEnd(nextItemObj, activePage);
    });

    _defineProperty(_assertThisInitialized(_this), "generatePositionUpdater", function (direction, nextItemId, verticalMode, rest) {
      return function (state) {
        var sliderPosition = state.sliderPosition,
            childHeight = state.childHeight,
            activeIndex = state.activeIndex;

        var childWidth = _this.calculateChildWidth();

        var newSliderPosition = 0;
        var childSize = verticalMode ? childHeight : childWidth;

        if (direction === consts.NEXT) {
          newSliderPosition = sliderPosition - childSize * (nextItemId - activeIndex);
        } else {
          newSliderPosition = sliderPosition + childSize * (activeIndex - nextItemId);
        }

        return _objectSpread2({
          sliderPosition: newSliderPosition,
          activeIndex: nextItemId,
          swipedSliderPosition: 0,
          isSwiping: false
        }, rest);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "goTo", function (nextItemId) {
      var _this$getDerivedProps18 = _this.getDerivedPropsFromBreakPoint(),
          children = _this$getDerivedProps18.children,
          verticalMode = _this$getDerivedProps18.verticalMode,
          itemsToShow = _this$getDerivedProps18.itemsToShow;

      var activeIndex = _this.state.activeIndex;
      var childrenLength = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(children).length;
      var safeNextItemId = Math.max(0, nextItemId); // don't allow negative numbers

      var isPrev = activeIndex > safeNextItemId;

      var nextAvailableItem = _this.getNextItemIndex(activeIndex, isPrev);

      var noChange = nextAvailableItem === activeIndex;
      var outOfBoundary = safeNextItemId + itemsToShow >= childrenLength;

      if (noChange) {
        return;
      }

      if (outOfBoundary) {
        // Either go to last index (respect itemsToShow) or 0 index if we can't fill the slider
        safeNextItemId = Math.max(0, childrenLength - itemsToShow);
      }

      var direction = consts.NEXT;
      var positionEndCb = _this.onNextEnd;

      if (isPrev) {
        direction = consts.PREV;
        positionEndCb = _this.onPrevEnd;
      }

      var stateUpdater = _this.generatePositionUpdater(direction, safeNextItemId, verticalMode, {
        transitioning: true
      });

      _this.setState(stateUpdater, function () {
        // callback
        pipe(_this.updateActivePage(), _this.onSliderTransitionEnd(positionEndCb));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getNumOfPages", function () {
      var _this$getDerivedProps19 = _this.getDerivedPropsFromBreakPoint(),
          children = _this$getDerivedProps19.children,
          itemsToShow = _this$getDerivedProps19.itemsToShow;

      var childrenLength = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(children).length;
      var safeItemsToShow = Math.max(itemsToShow, 1);
      var numOfPages = Math.ceil(childrenLength / safeItemsToShow);
      return numOfPages || 1;
    });

    _defineProperty(_assertThisInitialized(_this), "updateActivePage", function () {
      _this.setState(function (state) {
        var _this$getDerivedProps20 = _this.getDerivedPropsFromBreakPoint(),
            itemsToShow = _this$getDerivedProps20.itemsToShow,
            children = _this$getDerivedProps20.children;

        var activeIndex = state.activeIndex,
            activePage = state.activePage;

        var numOfPages = _this.getNumOfPages();

        var childrenLength = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(children).length;
        var inRangeItemsToShow = Math.min(childrenLength, itemsToShow); // watch out from 0 (so we wont divide by zero)

        var safeItemsToShow = Math.max(inRangeItemsToShow, 1);
        var newActivePage = Math.ceil(activeIndex / safeItemsToShow);
        var inRangeActivePageIndex = Math.min(numOfPages - 1, newActivePage);

        if (activePage !== inRangeActivePageIndex) {
          return {
            activePage: inRangeActivePageIndex
          };
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onIndicatorClick", function (indicatorId) {
      var _this$getDerivedProps21 = _this.getDerivedPropsFromBreakPoint(),
          itemsToShow = _this$getDerivedProps21.itemsToShow;

      var gotoIndex = indicatorId * itemsToShow;

      _this.setState({
        activePage: indicatorId
      });

      _this.goTo(gotoIndex);
    });

    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initResizeObserver();
      this.updateActivePage();
      this.setPages();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props2 = this.props,
          enableAutoPlay = _this$props2.enableAutoPlay,
          children = _this$props2.children,
          itemsToShow = _this$props2.itemsToShow,
          itemsToScroll = _this$props2.itemsToScroll,
          breakPoints = _this$props2.breakPoints;
      var _this$state5 = this.state,
          activeIndex = _this$state5.activeIndex,
          sliderContainerWidth = _this$state5.sliderContainerWidth;
      var nextItem = this.getNextItemIndex(activeIndex, false);
      var currentChildrenLength = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(children).length;
      var prevChildrenLength = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(prevProps.children).length; // update pages (for pagination)

      if (prevChildrenLength !== currentChildrenLength || prevProps.itemsToShow !== itemsToShow || prevProps.itemsToScroll !== itemsToScroll || prevProps.breakPoints !== breakPoints || sliderContainerWidth !== prevState.sliderContainerWidth) {
        // we mimic a container resize to recalculate item width when itemsToShow are updated
        this.onContainerResize({
          contentRect: {
            width: sliderContainerWidth
          }
        });
        this.setPages();
        this.updateActivePage();
      } // autoplay update


      if (activeIndex === nextItem) {
        this.removeAutoPlay();
      } else if (enableAutoPlay && !this.autoPlayIntervalId) {
        this.setAutoPlay();
      } else if (!enableAutoPlay && this.autoPlayIntervalId) {
        this.removeAutoPlay();
      }

      if (prevChildrenLength !== currentChildrenLength) {
        var _this$getDerivedProps22 = this.getDerivedPropsFromBreakPoint(),
            calculatedItemsToShow = _this$getDerivedProps22.itemsToShow; // number of items is reduced (we don't care if number of items is increased)
        // we need to check if our current index is not out of boundaries
        // we need to include itemsToShow so we can fill up the slots


        var lastIndex = currentChildrenLength - 1;
        var isOutOfRange = activeIndex + calculatedItemsToShow > lastIndex;

        if (isOutOfRange) {
          // we are out of boundaries, go "back" to last item of the list (respect itemsToShow)
          this.goTo(Math.max(0, currentChildrenLength - calculatedItemsToShow));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unSubscribeObserver();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state6 = this.state,
          activePage = _this$state6.activePage,
          isSwiping = _this$state6.isSwiping,
          sliderPosition = _this$state6.sliderPosition,
          swipedSliderPosition = _this$state6.swipedSliderPosition,
          rootHeight = _this$state6.rootHeight,
          pages = _this$state6.pages,
          activeIndex = _this$state6.activeIndex,
          transitionMs = _this$state6.transitionMs;

      var _this$getDerivedProps23 = this.getDerivedPropsFromBreakPoint(),
          className = _this$getDerivedProps23.className,
          style = _this$getDerivedProps23.style,
          itemsToShow = _this$getDerivedProps23.itemsToShow,
          itemsToScroll = _this$getDerivedProps23.itemsToScroll,
          verticalMode = _this$getDerivedProps23.verticalMode,
          isRTL = _this$getDerivedProps23.isRTL,
          easing = _this$getDerivedProps23.easing,
          tiltEasing = _this$getDerivedProps23.tiltEasing,
          children = _this$getDerivedProps23.children,
          focusOnSelect = _this$getDerivedProps23.focusOnSelect,
          autoTabIndexVisibleItems = _this$getDerivedProps23.autoTabIndexVisibleItems,
          itemPosition = _this$getDerivedProps23.itemPosition,
          itemPadding = _this$getDerivedProps23.itemPadding,
          outerSpacing = _this$getDerivedProps23.outerSpacing,
          enableSwipe = _this$getDerivedProps23.enableSwipe,
          enableMouseSwipe = _this$getDerivedProps23.enableMouseSwipe,
          pagination = _this$getDerivedProps23.pagination,
          showArrows = _this$getDerivedProps23.showArrows,
          disableArrowsOnEnd = _this$getDerivedProps23.disableArrowsOnEnd,
          preventDefaultTouchmoveEvent = _this$getDerivedProps23.preventDefaultTouchmoveEvent,
          renderArrow = _this$getDerivedProps23.renderArrow,
          renderPagination = _this$getDerivedProps23.renderPagination;

      var childWidth = this.calculateChildWidth();
      var numOfPages = this.getNumOfPages();
      /** Determine if arrows should be disabled */

      var canSlidePrev = activeIndex !== this.getNextItemIndex(activeIndex, true);
      var canSlideNext = activeIndex !== this.getNextItemIndex(activeIndex, false);
      var disabledPrevArrow = !canSlidePrev && disableArrowsOnEnd;
      var disabledNextArrow = !canSlideNext && disableArrowsOnEnd;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CarouselWrapper, {
        isRTL: isRTL,
        className: "".concat(cssPrefix("carousel-wrapper"), " ").concat(className),
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledCarousel, {
        className: cssPrefix("carousel"),
        size: {
          height: rootHeight
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_only_when__WEBPACK_IMPORTED_MODULE_6__["default"], {
        when: showArrows
      }, renderArrow ? renderArrow({
        type: consts.PREV,
        onClick: this.onPrevStart,
        isEdge: !canSlidePrev
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Arrow, {
        onClick: this.onPrevStart,
        direction: verticalMode ? Arrow.up : Arrow.left,
        disabled: disabledPrevArrow
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SliderContainer, {
        className: cssPrefix("slider-container"),
        ref: this.setRef("sliderContainer")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Slider, {
        verticalMode: verticalMode,
        isRTL: isRTL,
        easing: easing,
        sliderPosition: sliderPosition,
        swipedSliderPosition: swipedSliderPosition,
        isSwiping: isSwiping,
        transitionMs: transitionMs,
        tiltEasing: tiltEasing,
        className: cssPrefix("slider"),
        ref: this.setRef("slider"),
        outerSpacing: outerSpacing
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Track, {
        verticalMode: verticalMode,
        children: react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(children),
        childWidth: childWidth,
        currentItem: activeIndex,
        autoTabIndexVisibleItems: autoTabIndexVisibleItems,
        itemsToShow: itemsToShow,
        itemsToScroll: itemsToScroll,
        itemPosition: itemPosition,
        itemPadding: itemPadding,
        enableSwipe: enableSwipe,
        enableMouseSwipe: enableMouseSwipe,
        preventDefaultTouchmoveEvent: preventDefaultTouchmoveEvent,
        onSwiped: this.onSwiped,
        onSwiping: this.onSwiping,
        onItemClick: focusOnSelect ? this.goTo : undefined
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_only_when__WEBPACK_IMPORTED_MODULE_6__["default"], {
        when: showArrows
      }, renderArrow ? renderArrow({
        type: consts.NEXT,
        onClick: this.onNextStart,
        isEdge: !canSlideNext
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Arrow, {
        onClick: this.onNextStart,
        direction: verticalMode ? Arrow.down : Arrow.right,
        disabled: disabledNextArrow
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_only_when__WEBPACK_IMPORTED_MODULE_6__["default"], {
        when: pagination
      }, renderPagination ? renderPagination({
        pages: pages,
        activePage: activePage,
        onClick: this.onIndicatorClick
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Pagination, {
        numOfPages: numOfPages,
        activePage: activePage,
        onClick: this.onIndicatorClick
      })));
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

Carousel.defaultProps = {
  className: "",
  style: {},
  verticalMode: false,
  isRTL: false,
  initialFirstItem: 0,
  initialActiveIndex: 0,
  showArrows: true,
  showEmptySlots: false,
  disableArrowsOnEnd: true,
  pagination: true,
  easing: "ease",
  tiltEasing: "ease",
  transitionMs: 500,
  enableTilt: true,
  enableSwipe: true,
  enableMouseSwipe: true,
  preventDefaultTouchmoveEvent: false,
  focusOnSelect: false,
  autoTabIndexVisibleItems: true,
  itemsToShow: 1,
  itemsToScroll: 1,
  itemPosition: consts.CENTER,
  itemPadding: [0, 0, 0, 0],
  outerSpacing: 0,
  enableAutoPlay: false,
  autoPlaySpeed: 2000,
  // callbacks
  onChange: noop,
  onNextEnd: noop,
  onPrevEnd: noop,
  onNextStart: noop,
  onPrevStart: noop,
  onResize: noop
};
Carousel.propTypes = {
  /** Items to render */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,

  /** The css class for the root element */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** The style object for the root element */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /** Display the Carousel in a vertical layout */
  verticalMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Flip right to left */
  isRTL: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Show dots for paging */
  pagination: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Animation speed */
  transitionMs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /** transition easing pattern */
  easing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** transition easing pattern for the tilt */
  tiltEasing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** The "bump" animation when reaching the last item */
  enableTilt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Number of visible items  */
  itemsToShow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /** Number of items to scroll */
  itemsToScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /** Collection of objects with a width, itemsToShow and itemsToScroll  */
  breakPoints: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    itemsToShow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    itemsToScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })),

  /** The initial active index when the component mounts */
  initialActiveIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /** **DEPRECATED - use initialActiveIndex instead** The first items when the component mounts */
  initialFirstItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /** Show the arrow buttons */
  showArrows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Show empty slots when children.length < itemsToShow (not compatible with verticalMode yet !) */
  showEmptySlots: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Disables the arrow button when there are no more items */
  disableArrowsOnEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Go to item on click */
  focusOnSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Automatically inject `tabIndex:0` to visible items */
  autoTabIndexVisibleItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** A render prop for the arrow component
   * - ({type, onClick}) => <div onClick={onClick}>{type === 'prev' ? '<-' : '->'}</div>
   */
  renderArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /** A render prop for the pagination component
   * - ({ pages, activePage, onClick }) =>  <YourComponent/>
   */
  renderPagination: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /** Position the element relative to it's wrapper (use the consts object) - consts.START | consts.CENTER | consts.END */
  itemPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([consts.START, consts.CENTER, consts.END]),

  /** A padding for each element  */
  itemPadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /** A margin at the beginning and at the end of the carousel (not compatible with verticalMode yet !) */
  outerSpacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  // swipe

  /** Enable or disable swipe */
  enableSwipe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Enable or disable mouse swipe */
  enableMouseSwipe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Prevent page scroll on touchmove.
   * Use this to stop the browser from scrolling while a user swipes.
   * More details: https://github.com/FormidableLabs/react-swipeable#preventdefaulttouchmoveevent-details
   */
  preventDefaultTouchmoveEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // auto play

  /** Enable or disable auto play */
  enableAutoPlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Set auto play speed (ms) */
  autoPlaySpeed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  // callbacks

  /** A callback for the change of an item
   * - onChange(currentItemObject, currentPageIndex) => {} */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /** A callback for the beginning of the next transition
   * - onNextStart(prevItemObject, nextItemObject) => {} */
  onNextStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /** A callback for the beginning of the prev transition
   * - onPrevStart(prevItemObject, nextItemObject) => {} */
  onPrevStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /** A callback for the end of the next transition
   * - onNextEnd(nextItemObject, currentPageIndex) => {} */
  onNextEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /** A callback for the end of the prev transition
   * - onPrevEnd(nextItemObject, currentPageIndex) => {} */
  onPrevEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /** A callback for the "slider-container" resize
   * - onResize(currentBreakPoint) => {} */
  onResize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/react-only-when/dist/index.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-only-when/dist/index.es.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Only = function (_Component) {
  inherits(Only, _Component);

  function Only() {
    classCallCheck(this, Only);
    return possibleConstructorReturn(this, (Only.__proto__ || Object.getPrototypeOf(Only)).apply(this, arguments));
  }

  createClass(Only, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          when = _props.when,
          hiddenMode = _props.hiddenMode,
          className = _props.className;

      var singleChild = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children);
      var _singleChild$props = singleChild.props,
          style = _singleChild$props.style,
          restOfChildProps = objectWithoutProperties(_singleChild$props, ['style']);

      var extendedProps = _extends({}, restOfChildProps);

      var keepNode = hiddenMode && hiddenMode !== "withNull";

      if (keepNode) {
        if (hiddenMode === "withCss") {
          extendedProps.className = extendedProps.className + ' ' + className;
        } else {
          extendedProps.style = _extends({}, style, hiddenMode === "withDisplay" && { display: "none" }, hiddenMode === "withVisibility" && { visibility: "hidden" });
        }
      }
      var cloned = react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(singleChild, extendedProps);
      var toHide = keepNode ? cloned : null;

      return when ? singleChild : toHide;
    }
  }]);
  return Only;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Only.defaultProps = {
  hiddenMode: "withNull",
  className: "r-o_hidden"
};
Only.propTypes = {
  /** A single child element */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired,

  /** When true, children will rendered as is  */
  when: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,

  /** Determines how "react-only-when" should hide the child element 
   * "withNull": Will not render the child
   * "withDisplay": Will render the child with display:none  
   * "withVisibility": Will render the child with visibility:hidden
   * "withCss": Will render the child with a CSS class (you can pass it a custom className prop)
  */
  hiddenMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["withNull", "withDisplay", "withVisibility", "withCss"]),
  /** This is working in combination with hiddenMode={"withCss"}   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (Only);
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/react-swipeable/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-swipeable/es/index.js ***!
  \**************************************************/
/*! exports provided: DOWN, LEFT, RIGHT, Swipeable, UP, useSwipeable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN", function() { return DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT", function() { return RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swipeable", function() { return Swipeable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP", function() { return UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSwipeable", function() { return useSwipeable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var defaultProps = {
  preventDefaultTouchmoveEvent: false,
  delta: 10,
  rotationAngle: 0,
  trackMouse: false,
  trackTouch: true
};
var initialState = {
  xy: [0, 0],
  swiping: false,
  eventData: undefined,
  start: undefined
};
var LEFT = 'Left';
var RIGHT = 'Right';
var UP = 'Up';
var DOWN = 'Down';
var touchStart = 'touchstart';
var touchMove = 'touchmove';
var touchEnd = 'touchend';
var mouseMove = 'mousemove';
var mouseUp = 'mouseup';

function getDirection(absX, absY, deltaX, deltaY) {
  if (absX > absY) {
    if (deltaX > 0) {
      return LEFT;
    }

    return RIGHT;
  } else if (deltaY > 0) {
    return UP;
  }

  return DOWN;
}

function rotateXYByAngle(pos, angle) {
  if (angle === 0) return pos;
  var angleInRadians = Math.PI / 180 * angle;
  var x = pos[0] * Math.cos(angleInRadians) + pos[1] * Math.sin(angleInRadians);
  var y = pos[1] * Math.cos(angleInRadians) - pos[0] * Math.sin(angleInRadians);
  return [x, y];
}

function getHandlers(set, handlerProps) {
  var onStart = function onStart(event) {
    // if more than a single touch don't track, for now...
    if (event.touches && event.touches.length > 1) return;
    set(function (state, props) {
      // setup mouse listeners on document to track swipe since swipe can leave container
      if (props.trackMouse) {
        document.addEventListener(mouseMove, onMove);
        document.addEventListener(mouseUp, onUp);
      }

      var _ref = event.touches ? event.touches[0] : event,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      var xy = rotateXYByAngle([clientX, clientY], props.rotationAngle);
      return _extends({}, state, initialState, {
        eventData: {
          initial: [].concat(xy),
          first: true
        },
        xy: xy,
        start: event.timeStamp || 0
      });
    });
  };

  var onMove = function onMove(event) {
    set(function (state, props) {
      if (!state.xy[0] || !state.xy[1] || event.touches && event.touches.length > 1) {
        return state;
      }

      var _ref2 = event.touches ? event.touches[0] : event,
          clientX = _ref2.clientX,
          clientY = _ref2.clientY;

      var _rotateXYByAngle = rotateXYByAngle([clientX, clientY], props.rotationAngle),
          x = _rotateXYByAngle[0],
          y = _rotateXYByAngle[1];

      var deltaX = state.xy[0] - x;
      var deltaY = state.xy[1] - y;
      var absX = Math.abs(deltaX);
      var absY = Math.abs(deltaY);
      var time = (event.timeStamp || 0) - state.start;
      var velocity = Math.sqrt(absX * absX + absY * absY) / (time || 1); // if swipe is under delta and we have not started to track a swipe: skip update

      if (absX < props.delta && absY < props.delta && !state.swiping) return state;
      var dir = getDirection(absX, absY, deltaX, deltaY);

      var eventData = _extends({}, state.eventData, {
        event: event,
        absX: absX,
        absY: absY,
        deltaX: deltaX,
        deltaY: deltaY,
        velocity: velocity,
        dir: dir
      });

      props.onSwiping && props.onSwiping(eventData); // track if a swipe is cancelable(handler for swiping or swiped(dir) exists)
      // so we can call preventDefault if needed

      var cancelablePageSwipe = false;

      if (props.onSwiping || props.onSwiped || props["onSwiped" + dir]) {
        cancelablePageSwipe = true;
      }

      if (cancelablePageSwipe && props.preventDefaultTouchmoveEvent && props.trackTouch && event.cancelable) event.preventDefault(); // first is now always false

      return _extends({}, state, {
        eventData: _extends({}, eventData, {
          first: false
        }),
        swiping: true
      });
    });
  };

  var onEnd = function onEnd(event) {
    set(function (state, props) {
      var eventData;

      if (state.swiping) {
        eventData = _extends({}, state.eventData, {
          event: event
        });
        props.onSwiped && props.onSwiped(eventData);
        props["onSwiped" + eventData.dir] && props["onSwiped" + eventData.dir](eventData);
      }

      return _extends({}, state, initialState, {
        eventData: eventData
      });
    });
  };

  var cleanUpMouse = function cleanUpMouse() {
    // safe to just call removeEventListener
    document.removeEventListener(mouseMove, onMove);
    document.removeEventListener(mouseUp, onUp);
  };

  var onUp = function onUp(e) {
    cleanUpMouse();
    onEnd(e);
  };

  var attachTouch = function attachTouch(el) {
    if (el && el.addEventListener) {
      // attach touch event listeners and handlers
      var tls = [[touchStart, onStart], [touchMove, onMove], [touchEnd, onEnd]];
      tls.forEach(function (_ref3) {
        var e = _ref3[0],
            h = _ref3[1];
        return el.addEventListener(e, h);
      }); // return properly scoped cleanup method for removing listeners

      return function () {
        return tls.forEach(function (_ref4) {
          var e = _ref4[0],
              h = _ref4[1];
          return el.removeEventListener(e, h);
        });
      };
    }
  };

  var onRef = function onRef(el) {
    // "inline" ref functions are called twice on render, once with null then again with DOM element
    // ignore null here
    if (el === null) return;
    set(function (state, props) {
      // if the same DOM el as previous just return state
      if (state.el === el) return state;
      var addState = {}; // if new DOM el clean up old DOM and reset cleanUpTouch

      if (state.el && state.el !== el && state.cleanUpTouch) {
        state.cleanUpTouch();
        addState.cleanUpTouch = null;
      } // only attach if we want to track touch


      if (props.trackTouch && el) {
        addState.cleanUpTouch = attachTouch(el);
      } // store event attached DOM el for comparison, clean up, and re-attachment


      return _extends({}, state, {
        el: el
      }, addState);
    });
  }; // set ref callback to attach touch event listeners


  var output = {
    ref: onRef // if track mouse attach mouse down listener

  };

  if (handlerProps.trackMouse) {
    output.onMouseDown = onStart;
  }

  return [output, attachTouch];
}

function updateTransientState(state, props, attachTouch) {
  var addState = {}; // clean up touch handlers if no longer tracking touches

  if (!props.trackTouch && state.cleanUpTouch) {
    state.cleanUpTouch();
    addState.cleanUpTouch = null;
  } else if (props.trackTouch && !state.cleanUpTouch) {
    // attach/re-attach touch handlers
    if (state.el) {
      addState.cleanUpTouch = attachTouch(state.el);
    }
  }

  return _extends({}, state, addState);
}

function useSwipeable(props) {
  var trackMouse = props.trackMouse;
  var transientState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(_extends({}, initialState, {
    type: 'hook'
  }));
  var transientProps = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  transientProps.current = _extends({}, defaultProps, props);

  var _React$useMemo = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    return getHandlers(function (cb) {
      return transientState.current = cb(transientState.current, transientProps.current);
    }, {
      trackMouse: trackMouse
    });
  }, [trackMouse]),
      handlers = _React$useMemo[0],
      attachTouch = _React$useMemo[1];

  transientState.current = updateTransientState(transientState.current, transientProps.current, attachTouch);
  return handlers;
}
var Swipeable =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Swipeable, _React$PureComponent);

  function Swipeable(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _this._set = function (cb) {
      _this.transientState = cb(_this.transientState, _this.props);
    };

    _this.transientState = _extends({}, initialState, {
      type: 'class'
    });
    return _this;
  }

  var _proto = Swipeable.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style,
        _this$props$nodeName = _this$props.nodeName,
        nodeName = _this$props$nodeName === void 0 ? 'div' : _this$props$nodeName,
        innerRef = _this$props.innerRef,
        children = _this$props.children,
        trackMouse = _this$props.trackMouse;

    var _getHandlers = getHandlers(this._set, {
      trackMouse: trackMouse
    }),
        handlers = _getHandlers[0],
        attachTouch = _getHandlers[1];

    this.transientState = updateTransientState(this.transientState, this.props, attachTouch);
    var ref = innerRef ? function (el) {
      return innerRef(el), handlers.ref(el);
    } : handlers.ref;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nodeName, _extends({}, handlers, {
      className: className,
      style: style,
      ref: ref
    }), children);
  };

  return Swipeable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);
Swipeable.propTypes = {
  onSwiped: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSwiping: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSwipedUp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSwipedRight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSwipedDown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSwipedLeft: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  delta: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  preventDefaultTouchmoveEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  nodeName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  trackMouse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  trackTouch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  rotationAngle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
Swipeable.defaultProps = defaultProps;




/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }

    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;

        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;

                return true;
            }

            return false;
        });

        return result;
    }

    return (function () {
        function anonymous() {
            this.__entries__ = [];
        }

        var prototypeAccessors = { size: { configurable: true } };

        /**
         * @returns {boolean}
         */
        prototypeAccessors.size.get = function () {
            return this.__entries__.length;
        };

        /**
         * @param {*} key
         * @returns {*}
         */
        anonymous.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];

            return entry && entry[1];
        };

        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        anonymous.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([key, value]);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);

            if (~index) {
                entries.splice(index, 1);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };

        /**
         * @returns {void}
         */
        anonymous.prototype.clear = function () {
            this.__entries__.splice(0);
        };

        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        anonymous.prototype.forEach = function (callback, ctx) {
            var this$1 = this;
            if ( ctx === void 0 ) ctx = null;

            for (var i = 0, list = this$1.__entries__; i < list.length; i += 1) {
                var entry = list[i];

                callback.call(ctx, entry[1], entry[0]);
            }
        };

        Object.defineProperties( anonymous.prototype, prototypeAccessors );

        return anonymous;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }

    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }

    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }

    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }

    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;

/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
var throttle = function (callback, delay) {
    var leadingCall = false,
        trailingCall = false,
        lastCallTime = 0;

    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;

            callback();
        }

        if (trailingCall) {
            proxy();
        }
    }

    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }

    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();

        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }

            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;

            setTimeout(timeoutCallback, delay);
        }

        lastCallTime = timeStamp;
    }

    return proxy;
};

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;

// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';

/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = function() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];

    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
};

/**
 * Adds observer to observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be added.
 * @returns {void}
 */


/**
 * Holds reference to the controller's instance.
 *
 * @private {ResizeObserverController}
 */


/**
 * Keeps reference to the instance of MutationObserver.
 *
 * @private {MutationObserver}
 */

/**
 * Indicates whether DOM listeners have been added.
 *
 * @private {boolean}
 */
ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
    }

    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
        this.connect_();
    }
};

/**
 * Removes observer from observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be removed.
 * @returns {void}
 */
ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);

    // Remove observer if it's present in registry.
    if (~index) {
        observers.splice(index, 1);
    }

    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
        this.disconnect_();
    }
};

/**
 * Invokes the update of observers. It will continue running updates insofar
 * it detects changes.
 *
 * @returns {void}
 */
ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();

    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
        this.refresh();
    }
};

/**
 * Updates every observer from observers list and notifies them of queued
 * entries.
 *
 * @private
 * @returns {boolean} Returns "true" if any observer has detected changes in
 *  dimensions of it's elements.
 */
ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
    });

    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) { return observer.broadcastActive(); });

    return activeObservers.length > 0;
};

/**
 * Initializes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
        return;
    }

    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener('transitionend', this.onTransitionEnd_);

    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);

        this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        });
    } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);

        this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
};

/**
 * Removes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
        return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
};

/**
 * "Transitionend" event handler.
 *
 * @private
 * @param {TransitionEvent} event
 * @returns {void}
 */
ResizeObserverController.prototype.onTransitionEnd_ = function (ref) {
        var propertyName = ref.propertyName; if ( propertyName === void 0 ) propertyName = '';

    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
        this.refresh();
    }
};

/**
 * Returns instance of the ResizeObserverController.
 *
 * @returns {ResizeObserverController}
 */
ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
};

ResizeObserverController.instance_ = null;

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var i = 0, list = Object.keys(props); i < list.length; i += 1) {
        var key = list[i];

        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }

    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;

    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);

/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}

/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [], len = arguments.length - 1;
    while ( len-- > 0 ) positions[ len ] = arguments[ len + 1 ];

    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];

        return size + toFloat(value);
    }, 0);
}

/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};

    for (var i = 0, list = positions; i < list.length; i += 1) {
        var position = list[i];

        var value = styles['padding-' + position];

        paddings[position] = toFloat(value);
    }

    return paddings;
}

/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();

    return createRectInit(0, 0, bbox.width, bbox.height);
}

/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth;
    var clientHeight = target.clientHeight;

    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }

    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;

    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width),
        height = toFloat(styles.height);

    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }

    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;

        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }

        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }

    return createRectInit(paddings.left, paddings.top, width, height);
}

/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }

    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function'; };
})();

/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}

/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }

    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }

    return getHTMLElementContentRect(target);
}

/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(ref) {
    var x = ref.x;
    var y = ref.y;
    var width = ref.width;
    var height = ref.height;

    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);

    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });

    return rect;
}

/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = function(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);

    this.target = target;
};

/**
 * Updates content rectangle and tells whether it's width or height properties
 * have changed since the last broadcast.
 *
 * @returns {boolean}
 */


/**
 * Reference to the last observed content rectangle.
 *
 * @private {DOMRectInit}
 */


/**
 * Broadcasted width of content rectangle.
 *
 * @type {number}
 */
ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);

    this.contentRect_ = rect;

    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
};

/**
 * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
 * from the corresponding properties of the last observed content rectangle.
 *
 * @returns {DOMRectInit} Last observed content rectangle.
 */
ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;

    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;

    return rect;
};

var ResizeObserverEntry = function(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);

    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, { target: target, contentRect: contentRect });
};

var ResizeObserverSPI = function(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();

    if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
};

/**
 * Starts observing provided element.
 *
 * @param {Element} target - Element to be observed.
 * @returns {void}
 */


/**
 * Registry of the ResizeObservation instances.
 *
 * @private {Map<Element, ResizeObservation>}
 */


/**
 * Public ResizeObserver instance which will be passed to the callback
 * function and used as a value of it's "this" binding.
 *
 * @private {ResizeObserver}
 */

/**
 * Collection of resize observations that have detected changes in dimensions
 * of elements.
 *
 * @private {Array<ResizeObservation>}
 */
ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is already being observed.
    if (observations.has(target)) {
        return;
    }

    observations.set(target, new ResizeObservation(target));

    this.controller_.addObserver(this);

    // Force the update of observations.
    this.controller_.refresh();
};

/**
 * Stops observing provided element.
 *
 * @param {Element} target - Element to stop observing.
 * @returns {void}
 */
ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
        return;
    }

    observations.delete(target);

    if (!observations.size) {
        this.controller_.removeObserver(this);
    }
};

/**
 * Stops observing all elements.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
};

/**
 * Collects observation instances the associated element of which has changed
 * it's content rectangle.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.gatherActive = function () {
        var this$1 = this;

    this.clearActive();

    this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
            this$1.activeObservations_.push(observation);
        }
    });
};

/**
 * Invokes initial callback function with a list of ResizeObserverEntry
 * instances collected from active resize observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
        return;
    }

    var ctx = this.callbackCtx_;

    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });

    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
};

/**
 * Clears the collection of active observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
};

/**
 * Tells whether observer has active observations.
 *
 * @returns {boolean}
 */
ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
};

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();

/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = function(callback) {
    if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.');
    }
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);

    observers.set(this, observer);
};

// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        return (ref = observers.get(this))[method].apply(ref, arguments);
        var ref;
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }

    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return Ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return ye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return Le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return Ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return Ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return $e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return Ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return We; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return Xe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return Je; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.2.1",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),O={},R= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:undefined;function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?undefined:new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),k=new Map,x=new Map,V=1,B=function(e){if(k.has(e))return k.get(e);for(;x.has(V);)V++;var t=V++;return true&&((0|t)<0||t>1<<30)&&j(16,""+t),k.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},z=function(e,t){k.set(e,t),x.set(t,e)},L="style["+A+'][data-styled-version="5.2.1"]',G=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},Y=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},q=function(){return true?__webpack_require__.nc:undefined},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.2.1");var i=q();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(L),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=M(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(void 0!==i&&0!==a.length){var c=A+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.2.1"),se=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&false,this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=Ne(this.rules,e,t,n).join(""),i=ee(te(this.baseHash,s.length)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,s=void 0===e?E:e,i=s.options,a=void 0===i?E:i,c=s.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&ae.includes(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ue)||he}function me(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(de)||pe}function ye(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(e.stylisPlugins),n=t[0],s=t[1],c=fe(),u=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(de.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(e.children):undefined))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!_e(t[i])&&(S(t[i])?s.push.apply(s,e(t[i],i)):b(t[i])?s.push(be(i)+":",t[i],";"):s.push(be(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"]?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ne(g(w,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(g(e,n))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";try{Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(),Ie.has(n)||(console.warn(n),Ie.add(n))}catch(e){Ce.test(e.message)&&Ie.delete(n)}}},Oe=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return ee(ne(e)>>>0)};function ke(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var xe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Be(e,t,n){var r=e[n];xe(t)&&xe(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(xe(i))for(var a in i)Ve(a)&&Be(e,i[a],a)}return e}var ze=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),Le=ze.Consumer;function Ge(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),n=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:j(7)}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ze.Provider,{value:n},e.children):null}var Fe={};function Ye(e,t,n){var o=N(e),i=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.2.1"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r){return e.shouldForwardProp(n,r)&&t.shouldForwardProp(n,r)}:e.shouldForwardProp);var C,I=new se(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in b(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Oe(t,Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),s=me(),i=t?e.generateAndInjectStyles(E,o,s):e.generateAndInjectStyles(n,o,s);return true&&Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(i), true&&!t&&r&&r(i),i}(i,r,y, true?e.warnTooManyClasses:undefined),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"]):!N||Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(ke(e)?e:je(_(e)));return Ye(e,v({},o,{attrs:S,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), true&&(Pe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(f,g)),C.toString=function(){return"."+C.styledComponentId},i&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(r))return j(1,String(r));var s=function(){return t(r,o,Ae.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){qe[e]=qe(e)}));var He=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Ae.apply(void 0,[e].concat(n)),a="sc-global-"+Te(JSON.stringify(i)),u=new He(i,a);function l(e){var t=fe(),n=me(),o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&i.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])((function(){return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var s=v({},t,{theme:Oe(t,r,l.defaultProps)});u.renderStyles(e,s,n,o)}}return true&&Pe(a),react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(l)}function We(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ae.apply(void 0,[e].concat(n)).join(""),s=Te(o);return new ve(s,o)}var Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.2.1"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.2.1",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Je=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((function(t,n){var o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),i=e.defaultProps,a=Oe(t,o,i);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+_(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Xe=function(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze)},Ze={StyleSheet:Z,masterSheet:he}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ __webpack_exports__["default"] = (qe);
//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

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
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var _components_ClientSlide__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/ClientSlide */ "./components/ClientSlide.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");








var _jsxFileName = "E:\\cmsinovark\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(E_cmsinovark_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }















 // import the library



 // import your icons

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_22__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__["fas"]);

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
            lineNumber: 36,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slide__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.padding,
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 1
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 8
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_content_home_md__WEBPACK_IMPORTED_MODULE_9__["react"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
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
                        lineNumber: 67,
                        columnNumber: 21
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                        "class": "color-text",
                        children: cat.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 68,
                        columnNumber: 23
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        "class": "color-text h-125",
                        children: [" ", cat.description]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 69,
                        columnNumber: 23
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 19
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
                      variant: "primary",
                      size: "sm",
                      children: ["Read more \xA0\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FontAwesomeIcon"], {
                        icon: ['fas', 'chevron-circle-right']
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 23
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 17
                  }, _this)
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 5
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.light_gray_bg,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.padding,
              children: " WHY US "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 1
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.text_center,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__["default"], {
                horizontal: true,
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.list_group_item,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.category,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FontAwesomeIcon"], {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.list_icon,
                      icon: ['fas', 'user-alt']
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 5
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paragraph,
                      children: " Customer Focus"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 5
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 5
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 3
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.category,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FontAwesomeIcon"], {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.list_icon,
                      icon: ['fas', 'trophy']
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 5
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paragraph,
                      children: " Passion for Success"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 5
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 5
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 3
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.category,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FontAwesomeIcon"], {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.list_icon,
                      icon: ['fas', 'laptop']
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 5
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paragraph,
                      children: " Technical Knowledge"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 119,
                      columnNumber: 5
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 5
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 3
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.category,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FontAwesomeIcon"], {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.list_icon,
                      icon: ['fas', 'book']
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 5
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paragraph,
                      children: "  Integrity & Accountability"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 5
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 5
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 3
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_18__["default"].Item, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.category,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FontAwesomeIcon"], {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.list_icon,
                      icon: ['fas', 'frown']
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 5
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paragraph,
                      children: "   Excellence in Service "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 133,
                      columnNumber: 5
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 5
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 3
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 3
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 3
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 1
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 10
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.padding,
              children: " OUR MANTRA "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 3
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_14__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_19__["default"], {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.margin_10,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_19__["default"].Body, {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.padding_10,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_20__["default"], {
                    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.table,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.border_none,
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_16___default.a, {
                            width: "60",
                            height: "60",
                            src: "/images/innovate.svg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 149,
                            columnNumber: 9
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 148,
                          columnNumber: 7
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.border_none,
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                            children: "INNOVATE"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 152,
                            columnNumber: 9
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paragraph,
                            children: "Innovation is the ability to see change as an opportunity that unlocks new value. There is a way to do it better \u2013 we are finding it.s"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 153,
                            columnNumber: 9
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 151,
                          columnNumber: 7
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 147,
                        columnNumber: 5
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 3
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 3
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 3
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 1
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_19__["default"], {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.margin_10,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_19__["default"].Body, {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.padding_10,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_20__["default"], {
                    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.table,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.border_none,
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_16___default.a, {
                            width: "80",
                            height: "80",
                            src: "/images/implementation.svg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 169,
                            columnNumber: 9
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 168,
                          columnNumber: 7
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.border_none,
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                            children: "IMPLEMENT"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 172,
                            columnNumber: 9
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paragraph,
                            children: "An Innovation idea needs the right implementation to find success. It is not just the action, but right action determines the product fate. We focus on the right way of building the product with the right technology."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 173,
                            columnNumber: 9
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 171,
                          columnNumber: 7
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 167,
                        columnNumber: 5
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 166,
                      columnNumber: 3
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 165,
                    columnNumber: 3
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 3
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 1
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_19__["default"], {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.margin_10,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_19__["default"].Body, {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.padding_none,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_20__["default"], {
                    className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.table,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.border_none,
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_16___default.a, {
                            width: "120",
                            height: "120",
                            src: "/images/iteration.svg"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 189,
                            columnNumber: 9
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 188,
                          columnNumber: 7
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.border_none,
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                            children: "ITERATE"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 192,
                            columnNumber: 9
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paragraph,
                            children: "Change is the only thing that is constant. A product that does not iterate has an expiry date tagged to it as soon as it comes out. Through an iterative process, we can keep the original focus, validating for current situations, helping us keep the ideas fresh and products competitive."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 193,
                            columnNumber: 9
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 191,
                          columnNumber: 7
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 187,
                        columnNumber: 5
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 186,
                      columnNumber: 3
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 3
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 3
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 1
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 1
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 1
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.clients,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.padding1,
              children: " OUR AMAZING CLIENTS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 1
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ClientSlide__WEBPACK_IMPORTED_MODULE_21__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 1
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 1
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbGllbnRTbGlkZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2lzLXByb3AtdmFsaWQvZGlzdC9pcy1wcm9wLXZhbGlkLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L21lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L3VuaXRsZXNzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1lbGFzdGljLWNhcm91c2VsL2Rpc3QvaW5kZXguZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1vbmx5LXdoZW4vZGlzdC9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN3aXBlYWJsZS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbC9kaXN0L1Jlc2l6ZU9ic2VydmVyLmVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc2hhbGxvd2VxdWFsL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvZGlzdC9zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ2xpZW50U2xpZGUiLCJpdGVtcyIsImlkIiwidGl0bGUiLCJzdGF0ZSIsIm1hcCIsIml0ZW0iLCJDb21wb25lbnQiLCJsaWJyYXJ5IiwiYWRkIiwiZmFzIiwiSG9tZSIsImF0dHJpYnV0ZXMiLCJjYXRzIiwic3R5bGVzIiwicGFkZGluZyIsImNhdCIsImsiLCJ0aHVtYiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxpZ2h0X2dyYXlfYmciLCJ0ZXh0X2NlbnRlciIsImxpc3RfZ3JvdXBfaXRlbSIsImNhdGVnb3J5IiwibGlzdF9pY29uIiwicGFyYWdyYXBoIiwibWFyZ2luXzEwIiwicGFkZGluZ18xMCIsInRhYmxlIiwiYm9yZGVyX25vbmUiLCJwYWRkaW5nX25vbmUiLCJjbGllbnRzIiwicGFkZGluZzEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxXOzs7Ozs7Ozs7Ozs7Ozs7O2tRQUNJO0FBQ05DLFdBQUssRUFBRSxDQUNMO0FBQUNDLFVBQUUsRUFBRSxDQUFMO0FBQVFDLGFBQUssRUFBRTtBQUFmLE9BREssRUFFTDtBQUFDRCxVQUFFLEVBQUUsQ0FBTDtBQUFRQyxhQUFLLEVBQUU7QUFBZixPQUZLLEVBR0w7QUFBQ0QsVUFBRSxFQUFFLENBQUw7QUFBUUMsYUFBSyxFQUFFO0FBQWYsT0FISyxFQUlMO0FBQUNELFVBQUUsRUFBRSxDQUFMO0FBQVFDLGFBQUssRUFBRTtBQUFmLE9BSkssRUFLTDtBQUFDRCxVQUFFLEVBQUUsQ0FBTDtBQUFRQyxhQUFLLEVBQUU7QUFBZixPQUxLO0FBREQsSzs7Ozs7Ozs2QkFVRTtBQUFBOztBQUFBLFVBQ0FGLEtBREEsR0FDVSxLQUFLRyxLQURmLENBQ0FILEtBREE7QUFFUiwwQkFDRSxxRUFBQyw4REFBRDtBQUFBLGtCQUNHQSxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsOEJBQUk7QUFBQSxzQkFBb0JBLElBQUksQ0FBQ0g7QUFBekIsYUFBVUcsSUFBSSxDQUFDSixFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUo7QUFBQSxTQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBS0Q7Ozs7RUFsQnVCSywrQzs7QUFxQlhQLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUF1Qzs7QUFFdkMsazdIQUFrN0g7O0FBRWw3SCxZQUFZLGdFQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7OztBQ2RyQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHNFQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNSdkI7QUFBQTtBQUNBO0FBQ0EseUtBQXlLLE9BQU87QUFDaEw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsT0FBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixrQ0FBa0M7QUFDMUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVTs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0IseUJBQXlCLE9BQU87QUFDaEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRDtBQUNqRDs7QUFFQTtBQUNBO0FBQ0Esa0ZBQWtGLHFDQUFxQyx5Q0FBeUM7QUFDaEs7O0FBRUEscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlNQUFpTTtBQUNqTTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQSw2QkFBNkIsT0FBTztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0QsNkRBQTZELE9BQU87QUFDcEg7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsRUFBRTtBQUM3QjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdG1CMUI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsMkVBQVksRUFBQzs7Ozs7Ozs7Ozs7OztBQ2pEZjs7QUFFYixjQUFjLG1CQUFPLENBQUMsa0RBQVU7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsOENBQVE7QUFDbkMsbURBQW1EOztBQUVuRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNB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Q1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDJDQUEyQztBQUN6RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7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O0FBQUEsb0NBQ0E7QUFBSSx1QkFBUyxFQUFFbEIseURBQU0sQ0FBQ21CLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURBLGVBR0EscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhMTTtBQUFBLHNCQURGO0FBOExEOzs7O0VBak0rQjFCLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM5MWZmMmRjZTIzNThjOTdiMDQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtZWxhc3RpYy1jYXJvdXNlbCc7XHJcblxyXG5jbGFzcyBDbGllbnRTbGlkZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7aWQ6IDEsIHRpdGxlOiAnaXRlbSAjMSd9LFxyXG4gICAgICB7aWQ6IDIsIHRpdGxlOiAnaXRlbSAjMid9LFxyXG4gICAgICB7aWQ6IDMsIHRpdGxlOiAnaXRlbSAjMyd9LFxyXG4gICAgICB7aWQ6IDQsIHRpdGxlOiAnaXRlbSAjNCd9LFxyXG4gICAgICB7aWQ6IDUsIHRpdGxlOiAnaXRlbSAjNSd9XHJcbiAgICBdXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJvdXNlbD5cclxuICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gPGRpdiBrZXk9e2l0ZW0uaWR9PntpdGVtLnRpdGxlfTwvZGl2Pil9XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRTbGlkZTsiLCJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIHJlYWN0UHJvcHNSZWdleCA9IC9eKChjaGlsZHJlbnxkYW5nZXJvdXNseVNldElubmVySFRNTHxrZXl8cmVmfGF1dG9Gb2N1c3xkZWZhdWx0VmFsdWV8ZGVmYXVsdENoZWNrZWR8aW5uZXJIVE1MfHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ3xzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmd8dmFsdWVMaW5rfGFjY2VwdHxhY2NlcHRDaGFyc2V0fGFjY2Vzc0tleXxhY3Rpb258YWxsb3d8YWxsb3dVc2VyTWVkaWF8YWxsb3dQYXltZW50UmVxdWVzdHxhbGxvd0Z1bGxTY3JlZW58YWxsb3dUcmFuc3BhcmVuY3l8YWx0fGFzeW5jfGF1dG9Db21wbGV0ZXxhdXRvUGxheXxjYXB0dXJlfGNlbGxQYWRkaW5nfGNlbGxTcGFjaW5nfGNoYWxsZW5nZXxjaGFyU2V0fGNoZWNrZWR8Y2l0ZXxjbGFzc0lEfGNsYXNzTmFtZXxjb2xzfGNvbFNwYW58Y29udGVudHxjb250ZW50RWRpdGFibGV8Y29udGV4dE1lbnV8Y29udHJvbHN8Y29udHJvbHNMaXN0fGNvb3Jkc3xjcm9zc09yaWdpbnxkYXRhfGRhdGVUaW1lfGRlY29kaW5nfGRlZmF1bHR8ZGVmZXJ8ZGlyfGRpc2FibGVkfGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlfGRvd25sb2FkfGRyYWdnYWJsZXxlbmNUeXBlfGZvcm18Zm9ybUFjdGlvbnxmb3JtRW5jVHlwZXxmb3JtTWV0aG9kfGZvcm1Ob1ZhbGlkYXRlfGZvcm1UYXJnZXR8ZnJhbWVCb3JkZXJ8aGVhZGVyc3xoZWlnaHR8aGlkZGVufGhpZ2h8aHJlZnxocmVmTGFuZ3xodG1sRm9yfGh0dHBFcXVpdnxpZHxpbnB1dE1vZGV8aW50ZWdyaXR5fGlzfGtleVBhcmFtc3xrZXlUeXBlfGtpbmR8bGFiZWx8bGFuZ3xsaXN0fGxvYWRpbmd8bG9vcHxsb3d8bWFyZ2luSGVpZ2h0fG1hcmdpbldpZHRofG1heHxtYXhMZW5ndGh8bWVkaWF8bWVkaWFHcm91cHxtZXRob2R8bWlufG1pbkxlbmd0aHxtdWx0aXBsZXxtdXRlZHxuYW1lfG5vbmNlfG5vVmFsaWRhdGV8b3BlbnxvcHRpbXVtfHBhdHRlcm58cGxhY2Vob2xkZXJ8cGxheXNJbmxpbmV8cG9zdGVyfHByZWxvYWR8cHJvZmlsZXxyYWRpb0dyb3VwfHJlYWRPbmx5fHJlZmVycmVyUG9saWN5fHJlbHxyZXF1aXJlZHxyZXZlcnNlZHxyb2xlfHJvd3N8cm93U3BhbnxzYW5kYm94fHNjb3BlfHNjb3BlZHxzY3JvbGxpbmd8c2VhbWxlc3N8c2VsZWN0ZWR8c2hhcGV8c2l6ZXxzaXplc3xzbG90fHNwYW58c3BlbGxDaGVja3xzcmN8c3JjRG9jfHNyY0xhbmd8c3JjU2V0fHN0YXJ0fHN0ZXB8c3R5bGV8c3VtbWFyeXx0YWJJbmRleHx0YXJnZXR8dGl0bGV8dHlwZXx1c2VNYXB8dmFsdWV8d2lkdGh8d21vZGV8d3JhcHxhYm91dHxkYXRhdHlwZXxpbmxpc3R8cHJlZml4fHByb3BlcnR5fHJlc291cmNlfHR5cGVvZnx2b2NhYnxhdXRvQ2FwaXRhbGl6ZXxhdXRvQ29ycmVjdHxhdXRvU2F2ZXxjb2xvcnxpbmVydHxpdGVtUHJvcHxpdGVtU2NvcGV8aXRlbVR5cGV8aXRlbUlEfGl0ZW1SZWZ8b258cmVzdWx0c3xzZWN1cml0eXx1bnNlbGVjdGFibGV8YWNjZW50SGVpZ2h0fGFjY3VtdWxhdGV8YWRkaXRpdmV8YWxpZ25tZW50QmFzZWxpbmV8YWxsb3dSZW9yZGVyfGFscGhhYmV0aWN8YW1wbGl0dWRlfGFyYWJpY0Zvcm18YXNjZW50fGF0dHJpYnV0ZU5hbWV8YXR0cmlidXRlVHlwZXxhdXRvUmV2ZXJzZXxhemltdXRofGJhc2VGcmVxdWVuY3l8YmFzZWxpbmVTaGlmdHxiYXNlUHJvZmlsZXxiYm94fGJlZ2lufGJpYXN8Ynl8Y2FsY01vZGV8Y2FwSGVpZ2h0fGNsaXB8Y2xpcFBhdGhVbml0c3xjbGlwUGF0aHxjbGlwUnVsZXxjb2xvckludGVycG9sYXRpb258Y29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyc3xjb2xvclByb2ZpbGV8Y29sb3JSZW5kZXJpbmd8Y29udGVudFNjcmlwdFR5cGV8Y29udGVudFN0eWxlVHlwZXxjdXJzb3J8Y3h8Y3l8ZHxkZWNlbGVyYXRlfGRlc2NlbnR8ZGlmZnVzZUNvbnN0YW50fGRpcmVjdGlvbnxkaXNwbGF5fGRpdmlzb3J8ZG9taW5hbnRCYXNlbGluZXxkdXJ8ZHh8ZHl8ZWRnZU1vZGV8ZWxldmF0aW9ufGVuYWJsZUJhY2tncm91bmR8ZW5kfGV4cG9uZW50fGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWR8ZmlsbHxmaWxsT3BhY2l0eXxmaWxsUnVsZXxmaWx0ZXJ8ZmlsdGVyUmVzfGZpbHRlclVuaXRzfGZsb29kQ29sb3J8Zmxvb2RPcGFjaXR5fGZvY3VzYWJsZXxmb250RmFtaWx5fGZvbnRTaXplfGZvbnRTaXplQWRqdXN0fGZvbnRTdHJldGNofGZvbnRTdHlsZXxmb250VmFyaWFudHxmb250V2VpZ2h0fGZvcm1hdHxmcm9tfGZyfGZ4fGZ5fGcxfGcyfGdseXBoTmFtZXxnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbHxnbHlwaE9yaWVudGF0aW9uVmVydGljYWx8Z2x5cGhSZWZ8Z3JhZGllbnRUcmFuc2Zvcm18Z3JhZGllbnRVbml0c3xoYW5naW5nfGhvcml6QWR2WHxob3Jpek9yaWdpblh8aWRlb2dyYXBoaWN8aW1hZ2VSZW5kZXJpbmd8aW58aW4yfGludGVyY2VwdHxrfGsxfGsyfGszfGs0fGtlcm5lbE1hdHJpeHxrZXJuZWxVbml0TGVuZ3RofGtlcm5pbmd8a2V5UG9pbnRzfGtleVNwbGluZXN8a2V5VGltZXN8bGVuZ3RoQWRqdXN0fGxldHRlclNwYWNpbmd8bGlnaHRpbmdDb2xvcnxsaW1pdGluZ0NvbmVBbmdsZXxsb2NhbHxtYXJrZXJFbmR8bWFya2VyTWlkfG1hcmtlclN0YXJ0fG1hcmtlckhlaWdodHxtYXJrZXJVbml0c3xtYXJrZXJXaWR0aHxtYXNrfG1hc2tDb250ZW50VW5pdHN8bWFza1VuaXRzfG1hdGhlbWF0aWNhbHxtb2RlfG51bU9jdGF2ZXN8b2Zmc2V0fG9wYWNpdHl8b3BlcmF0b3J8b3JkZXJ8b3JpZW50fG9yaWVudGF0aW9ufG9yaWdpbnxvdmVyZmxvd3xvdmVybGluZVBvc2l0aW9ufG92ZXJsaW5lVGhpY2tuZXNzfHBhbm9zZTF8cGFpbnRPcmRlcnxwYXRoTGVuZ3RofHBhdHRlcm5Db250ZW50VW5pdHN8cGF0dGVyblRyYW5zZm9ybXxwYXR0ZXJuVW5pdHN8cG9pbnRlckV2ZW50c3xwb2ludHN8cG9pbnRzQXRYfHBvaW50c0F0WXxwb2ludHNBdFp8cHJlc2VydmVBbHBoYXxwcmVzZXJ2ZUFzcGVjdFJhdGlvfHByaW1pdGl2ZVVuaXRzfHJ8cmFkaXVzfHJlZlh8cmVmWXxyZW5kZXJpbmdJbnRlbnR8cmVwZWF0Q291bnR8cmVwZWF0RHVyfHJlcXVpcmVkRXh0ZW5zaW9uc3xyZXF1aXJlZEZlYXR1cmVzfHJlc3RhcnR8cmVzdWx0fHJvdGF0ZXxyeHxyeXxzY2FsZXxzZWVkfHNoYXBlUmVuZGVyaW5nfHNsb3BlfHNwYWNpbmd8c3BlY3VsYXJDb25zdGFudHxzcGVjdWxhckV4cG9uZW50fHNwZWVkfHNwcmVhZE1ldGhvZHxzdGFydE9mZnNldHxzdGREZXZpYXRpb258c3RlbWh8c3RlbXZ8c3RpdGNoVGlsZXN8c3RvcENvbG9yfHN0b3BPcGFjaXR5fHN0cmlrZXRocm91Z2hQb3NpdGlvbnxzdHJpa2V0aHJvdWdoVGhpY2tuZXNzfHN0cmluZ3xzdHJva2V8c3Ryb2tlRGFzaGFycmF5fHN0cm9rZURhc2hvZmZzZXR8c3Ryb2tlTGluZWNhcHxzdHJva2VMaW5lam9pbnxzdHJva2VNaXRlcmxpbWl0fHN0cm9rZU9wYWNpdHl8c3Ryb2tlV2lkdGh8c3VyZmFjZVNjYWxlfHN5c3RlbUxhbmd1YWdlfHRhYmxlVmFsdWVzfHRhcmdldFh8dGFyZ2V0WXx0ZXh0QW5jaG9yfHRleHREZWNvcmF0aW9ufHRleHRSZW5kZXJpbmd8dGV4dExlbmd0aHx0b3x0cmFuc2Zvcm18dTF8dTJ8dW5kZXJsaW5lUG9zaXRpb258dW5kZXJsaW5lVGhpY2tuZXNzfHVuaWNvZGV8dW5pY29kZUJpZGl8dW5pY29kZVJhbmdlfHVuaXRzUGVyRW18dkFscGhhYmV0aWN8dkhhbmdpbmd8dklkZW9ncmFwaGljfHZNYXRoZW1hdGljYWx8dmFsdWVzfHZlY3RvckVmZmVjdHx2ZXJzaW9ufHZlcnRBZHZZfHZlcnRPcmlnaW5YfHZlcnRPcmlnaW5ZfHZpZXdCb3h8dmlld1RhcmdldHx2aXNpYmlsaXR5fHdpZHRoc3x3b3JkU3BhY2luZ3x3cml0aW5nTW9kZXx4fHhIZWlnaHR8eDF8eDJ8eENoYW5uZWxTZWxlY3Rvcnx4bGlua0FjdHVhdGV8eGxpbmtBcmNyb2xlfHhsaW5rSHJlZnx4bGlua1JvbGV8eGxpbmtTaG93fHhsaW5rVGl0bGV8eGxpbmtUeXBlfHhtbEJhc2V8eG1sbnN8eG1sbnNYbGlua3x4bWxMYW5nfHhtbFNwYWNlfHl8eTF8eTJ8eUNoYW5uZWxTZWxlY3Rvcnx6fHpvb21BbmRQYW58Zm9yfGNsYXNzfGF1dG9mb2N1cyl8KChbRGRdW0FhXVtUdF1bQWFdfFtBYV1bUnJdW0lpXVtBYV18eCktLiopKSQvOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZmVlNjhhNGNkN2U2MDA5ZWY2MWQyM1xuXG52YXIgaW5kZXggPSBtZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHJldHVybiByZWFjdFByb3BzUmVnZXgudGVzdChwcm9wKSB8fCBwcm9wLmNoYXJDb2RlQXQoMCkgPT09IDExMVxuICAvKiBvICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgxKSA9PT0gMTEwXG4gIC8qIG4gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDIpIDwgOTE7XG59XG4vKiBaKzEgKi9cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTtcbiIsImZ1bmN0aW9uIHN0eWxpc19taW4gKFcpIHtcbiAgZnVuY3Rpb24gTShkLCBjLCBlLCBoLCBhKSB7XG4gICAgZm9yICh2YXIgbSA9IDAsIGIgPSAwLCB2ID0gMCwgbiA9IDAsIHEsIGcsIHggPSAwLCBLID0gMCwgaywgdSA9IGsgPSBxID0gMCwgbCA9IDAsIHIgPSAwLCBJID0gMCwgdCA9IDAsIEIgPSBlLmxlbmd0aCwgSiA9IEIgLSAxLCB5LCBmID0gJycsIHAgPSAnJywgRiA9ICcnLCBHID0gJycsIEM7IGwgPCBCOykge1xuICAgICAgZyA9IGUuY2hhckNvZGVBdChsKTtcbiAgICAgIGwgPT09IEogJiYgMCAhPT0gYiArIG4gKyB2ICsgbSAmJiAoMCAhPT0gYiAmJiAoZyA9IDQ3ID09PSBiID8gMTAgOiA0NyksIG4gPSB2ID0gbSA9IDAsIEIrKywgSisrKTtcblxuICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgaWYgKGwgPT09IEogJiYgKDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSksIDAgPCBmLnRyaW0oKS5sZW5ndGgpKSB7XG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgZiArPSBlLmNoYXJBdChsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnID0gNTk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgIGYgPSBmLnRyaW0oKTtcbiAgICAgICAgICAgIHEgPSBmLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBrID0gMTtcblxuICAgICAgICAgICAgZm9yICh0ID0gKytsOyBsIDwgQjspIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgICAgICAgICAgay0tO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodSA9IGwgKyAxOyB1IDwgSjsgKyt1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5jaGFyQ29kZUF0KHUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0MiA9PT0gZyAmJiA0MiA9PT0gZS5jaGFyQ29kZUF0KHUgLSAxKSAmJiBsICsgMiAhPT0gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0NyA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgIGZvciAoOyBsKysgPCBKICYmIGUuY2hhckNvZGVBdChsKSAhPT0gZzspIHtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKDAgPT09IGspIGJyZWFrO1xuICAgICAgICAgICAgICBsKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGsgPSBlLnN1YnN0cmluZyh0LCBsKTtcbiAgICAgICAgICAgIDAgPT09IHEgJiYgKHEgPSAoZiA9IGYucmVwbGFjZShjYSwgJycpLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocSkge1xuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSk7XG4gICAgICAgICAgICAgICAgZyA9IGYuY2hhckNvZGVBdCgxKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgciA9IGM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByID0gTztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBrID0gTShjLCByLCBrLCBnLCBhICsgMSk7XG4gICAgICAgICAgICAgICAgdCA9IGsubGVuZ3RoO1xuICAgICAgICAgICAgICAgIDAgPCBBICYmIChyID0gWChPLCBmLCBJKSwgQyA9IEgoMywgaywgciwgYywgRCwgeiwgdCwgZywgYSwgaCksIGYgPSByLmpvaW4oJycpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHQgPSAoayA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChnID0gMCwgayA9ICcnKSk7XG4gICAgICAgICAgICAgICAgaWYgKDAgPCB0KSBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGRhLCBlYSk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShmYSwgJyQxICQyJyk7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgayA9IDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKCdAJyArIGssIDMpID8gJ0Atd2Via2l0LScgKyBrICsgJ0AnICsgayA6ICdAJyArIGs7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArIGssIDExMiA9PT0gaCAmJiAoayA9IChwICs9IGssICcnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGsgPSAnJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIFgoYywgZiwgSSksIGssIGgsIGEgKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRiArPSBrO1xuICAgICAgICAgICAgayA9IEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgZiA9ICgwIDwgciA/IGYucmVwbGFjZShOLCAnJykgOiBmKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoMSA8ICh0ID0gZi5sZW5ndGgpKSBzd2l0Y2ggKDAgPT09IHUgJiYgKHEgPSBmLmNoYXJDb2RlQXQoMCksIDQ1ID09PSBxIHx8IDk2IDwgcSAmJiAxMjMgPiBxKSAmJiAodCA9IChmID0gZi5yZXBsYWNlKCcgJywgJzonKSkubGVuZ3RoKSwgMCA8IEEgJiYgdm9pZCAwICE9PSAoQyA9IEgoMSwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpKSAmJiAwID09PSAodCA9IChmID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGYgPSAnXFx4MDBcXHgwMCcpLCBxID0gZi5jaGFyQ29kZUF0KDApLCBnID0gZi5jaGFyQ29kZUF0KDEpLCBxKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIGlmICgxMDUgPT09IGcgfHwgOTkgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgIEcgKz0gZiArIGUuY2hhckF0KGwpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgNTggIT09IGYuY2hhckNvZGVBdCh0IC0gMSkgJiYgKHAgKz0gUChmLCBxLCBnLCBmLmNoYXJDb2RlQXQoMikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIDQ3ID09PSBiID8gYiA9IDAgOiAwID09PSAxICsgcSAmJiAxMDcgIT09IGggJiYgMCA8IGYubGVuZ3RoICYmIChyID0gMSwgZiArPSAnXFx4MDAnKTtcbiAgICAgICAgICAwIDwgQSAqIFkgJiYgSCgwLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCk7XG4gICAgICAgICAgeiA9IDE7XG4gICAgICAgICAgRCsrO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTk6XG4gICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgICAgICB6Kys7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB6Kys7XG4gICAgICAgICAgeSA9IGUuY2hhckF0KGwpO1xuXG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIG0gKyBiKSBzd2l0Y2ggKHgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICB5ID0gJyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAzMiAhPT0gZyAmJiAoeSA9ICcgJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcMCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFxmJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXHYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIChyID0gSSA9IDEsIHkgPSAnXFxmJyArIHkpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0gKyBFICYmIDAgPCB1KSBzd2l0Y2ggKGwgLSB1KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgMTEyID09PSB4ICYmIDU4ID09PSBlLmNoYXJDb2RlQXQobCAtIDMpICYmIChFID0geCk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAxMTEgPT09IEsgJiYgKEUgPSBLKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmICh1ID0gbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICYmIChyID0gMSwgeSArPSAnXFxyJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgMCA9PT0gYiAmJiAobiA9IG4gPT09IGcgPyAwIDogMCA9PT0gbiA/IGcgOiBuKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbS0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIHYtLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0pIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcSkgc3dpdGNoICgyICogeCArIDMgKiBLKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDUzMzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHEgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2Kys7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSArIHUgKyBrICYmIChrID0gMSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgaWYgKCEoMCA8IG4gKyBtICsgdikpIHN3aXRjaCAoYikge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoMiAqIGcgKyAzICogZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIzNTpcbiAgICAgICAgICAgICAgICAgICAgICBiID0gNDc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICAgICAgICAgICAgdCA9IGwsIGIgPSA0MjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgNDcgPT09IGcgJiYgNDIgPT09IHggJiYgdCArIDIgIT09IGwgJiYgKDMzID09PSBlLmNoYXJDb2RlQXQodCArIDIpICYmIChwICs9IGUuc3Vic3RyaW5nKHQsIGwgKyAxKSksIHkgPSAnJywgYiA9IDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMCA9PT0gYiAmJiAoZiArPSB5KTtcbiAgICAgIH1cblxuICAgICAgSyA9IHg7XG4gICAgICB4ID0gZztcbiAgICAgIGwrKztcbiAgICB9XG5cbiAgICB0ID0gcC5sZW5ndGg7XG5cbiAgICBpZiAoMCA8IHQpIHtcbiAgICAgIHIgPSBjO1xuICAgICAgaWYgKDAgPCBBICYmIChDID0gSCgyLCBwLCByLCBkLCBELCB6LCB0LCBoLCBhLCBoKSwgdm9pZCAwICE9PSBDICYmIDAgPT09IChwID0gQykubGVuZ3RoKSkgcmV0dXJuIEcgKyBwICsgRjtcbiAgICAgIHAgPSByLmpvaW4oJywnKSArICd7JyArIHAgKyAnfSc7XG5cbiAgICAgIGlmICgwICE9PSB3ICogRSkge1xuICAgICAgICAyICE9PSB3IHx8IEwocCwgMikgfHwgKEUgPSAwKTtcblxuICAgICAgICBzd2l0Y2ggKEUpIHtcbiAgICAgICAgICBjYXNlIDExMTpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoaGEsICc6LW1vei0kMScpICsgcDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTI6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKFEsICc6Oi13ZWJraXQtaW5wdXQtJDEnKSArIHAucmVwbGFjZShRLCAnOjotbW96LSQxJykgKyBwLnJlcGxhY2UoUSwgJzotbXMtaW5wdXQtJDEnKSArIHA7XG4gICAgICAgIH1cblxuICAgICAgICBFID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRyArIHAgKyBGO1xuICB9XG5cbiAgZnVuY3Rpb24gWChkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLnRyaW0oKS5zcGxpdChpYSk7XG4gICAgYyA9IGg7XG4gICAgdmFyIGEgPSBoLmxlbmd0aCxcbiAgICAgICAgbSA9IGQubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHZhciBiID0gMDtcblxuICAgICAgICBmb3IgKGQgPSAwID09PSBtID8gJycgOiBkWzBdICsgJyAnOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgY1tiXSA9IFooZCwgY1tiXSwgZSkudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2ID0gYiA9IDA7XG5cbiAgICAgICAgZm9yIChjID0gW107IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG07ICsrbikge1xuICAgICAgICAgICAgY1t2KytdID0gWihkW25dICsgJyAnLCBoW2JdLCBlKS50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFooZCwgYywgZSkge1xuICAgIHZhciBoID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIDMzID4gaCAmJiAoaCA9IChjID0gYy50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgc3dpdGNoIChoKSB7XG4gICAgICBjYXNlIDM4OlxuICAgICAgICByZXR1cm4gYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGNhc2UgNTg6XG4gICAgICAgIHJldHVybiBkLnRyaW0oKSArIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoMCA8IDEgKiBlICYmIDAgPCBjLmluZGV4T2YoJ1xcZicpKSByZXR1cm4gYy5yZXBsYWNlKEYsICg1OCA9PT0gZC5jaGFyQ29kZUF0KDApID8gJycgOiAnJDEnKSArIGQudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZCArIGM7XG4gIH1cblxuICBmdW5jdGlvbiBQKGQsIGMsIGUsIGgpIHtcbiAgICB2YXIgYSA9IGQgKyAnOycsXG4gICAgICAgIG0gPSAyICogYyArIDMgKiBlICsgNCAqIGg7XG5cbiAgICBpZiAoOTQ0ID09PSBtKSB7XG4gICAgICBkID0gYS5pbmRleE9mKCc6JywgOSkgKyAxO1xuICAgICAgdmFyIGIgPSBhLnN1YnN0cmluZyhkLCBhLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgIGIgPSBhLnN1YnN0cmluZygwLCBkKS50cmltKCkgKyBiICsgJzsnO1xuICAgICAgcmV0dXJuIDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKGIsIDEpID8gJy13ZWJraXQtJyArIGIgKyBiIDogYjtcbiAgICB9XG5cbiAgICBpZiAoMCA9PT0gdyB8fCAyID09PSB3ICYmICFMKGEsIDEpKSByZXR1cm4gYTtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAxMDE1OlxuICAgICAgICByZXR1cm4gOTcgPT09IGEuY2hhckNvZGVBdCgxMCkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk1MTpcbiAgICAgICAgcmV0dXJuIDExNiA9PT0gYS5jaGFyQ29kZUF0KDMpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NjM6XG4gICAgICAgIHJldHVybiAxMTAgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMTAwOTpcbiAgICAgICAgaWYgKDEwMCAhPT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5Njk6XG4gICAgICBjYXNlIDk0MjpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5Nzg6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDE5OlxuICAgICAgY2FzZSA5ODM6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgODgzOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg4KSkgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcbiAgICAgICAgaWYgKDAgPCBhLmluZGV4T2YoJ2ltYWdlLXNldCgnLCAxMSkpIHJldHVybiBhLnJlcGxhY2UoamEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMjpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNCkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDUpKSB7XG4gICAgICAgICAgY2FzZSAxMDM6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LScgKyBhLnJlcGxhY2UoJy1ncm93JywgJycpICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2dyb3cnLCAncG9zaXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnc2hyaW5rJywgJ25lZ2F0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnYmFzaXMnLCAncHJlZmVycmVkLXNpemUnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTY0OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMjM6XG4gICAgICAgIGlmICg5OSAhPT0gYS5jaGFyQ29kZUF0KDgpKSBicmVhaztcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKGEuaW5kZXhPZignOicsIDE1KSkucmVwbGFjZSgnZmxleC0nLCAnJykucmVwbGFjZSgnc3BhY2UtYmV0d2VlbicsICdqdXN0aWZ5Jyk7XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtcGFjaycgKyBiICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtcGFjaycgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDA1OlxuICAgICAgICByZXR1cm4ga2EudGVzdChhKSA/IGEucmVwbGFjZShhYSwgJzotd2Via2l0LScpICsgYS5yZXBsYWNlKGFhLCAnOi1tb3otJykgKyBhIDogYTtcblxuICAgICAgY2FzZSAxZTM6XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZygxMykudHJpbSgpO1xuICAgICAgICBjID0gYi5pbmRleE9mKCctJykgKyAxO1xuXG4gICAgICAgIHN3aXRjaCAoYi5jaGFyQ29kZUF0KDApICsgYi5jaGFyQ29kZUF0KGMpKSB7XG4gICAgICAgICAgY2FzZSAyMjY6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0YicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIzMjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiLXJsJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAnbHInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAxNzpcbiAgICAgICAgaWYgKC0xID09PSBhLmluZGV4T2YoJ3N0aWNreScsIDkpKSBicmVhaztcblxuICAgICAgY2FzZSA5NzU6XG4gICAgICAgIGMgPSAoYSA9IGQpLmxlbmd0aCAtIDEwO1xuICAgICAgICBiID0gKDMzID09PSBhLmNoYXJDb2RlQXQoYykgPyBhLnN1YnN0cmluZygwLCBjKSA6IGEpLnN1YnN0cmluZyhkLmluZGV4T2YoJzonLCA3KSArIDEpLnRyaW0oKTtcblxuICAgICAgICBzd2l0Y2ggKG0gPSBiLmNoYXJDb2RlQXQoMCkgKyAoYi5jaGFyQ29kZUF0KDcpIHwgMCkpIHtcbiAgICAgICAgICBjYXNlIDIwMzpcbiAgICAgICAgICAgIGlmICgxMTEgPiBiLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGE7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjA3OlxuICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgKDEwMiA8IG0gPyAnaW5saW5lLScgOiAnJykgKyAnYm94JykgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYS5yZXBsYWNlKGIsICctbXMtJyArIGIgKyAnYm94JykgKyAnOycgKyBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGEgKyAnOyc7XG5cbiAgICAgIGNhc2UgOTM4OlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg1KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNikpIHtcbiAgICAgICAgICBjYXNlIDEwNTpcbiAgICAgICAgICAgIHJldHVybiBiID0gYS5yZXBsYWNlKCctaXRlbXMnLCAnJyksICctd2Via2l0LScgKyBhICsgJy13ZWJraXQtYm94LScgKyBiICsgJy1tcy1mbGV4LScgKyBiICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWl0ZW0tJyArIGEucmVwbGFjZShiYSwgJycpICsgYTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtbGluZS1wYWNrJyArIGEucmVwbGFjZSgnYWxpZ24tY29udGVudCcsICcnKS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3MzpcbiAgICAgIGNhc2UgOTg5OlxuICAgICAgICBpZiAoNDUgIT09IGEuY2hhckNvZGVBdCgzKSB8fCAxMjIgPT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMxOlxuICAgICAgY2FzZSA5NTM6XG4gICAgICAgIGlmICghMCA9PT0gbGEudGVzdChkKSkgcmV0dXJuIDExNSA9PT0gKGIgPSBkLnN1YnN0cmluZyhkLmluZGV4T2YoJzonKSArIDEpKS5jaGFyQ29kZUF0KDApID8gUChkLnJlcGxhY2UoJ3N0cmV0Y2gnLCAnZmlsbC1hdmFpbGFibGUnKSwgYywgZSwgaCkucmVwbGFjZSgnOmZpbGwtYXZhaWxhYmxlJywgJzpzdHJldGNoJykgOiBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgYS5yZXBsYWNlKGIsICctbW96LScgKyBiLnJlcGxhY2UoJ2ZpbGwtJywgJycpKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2MjpcbiAgICAgICAgaWYgKGEgPSAnLXdlYmtpdC0nICsgYSArICgxMDIgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctbXMtJyArIGEgOiAnJykgKyBhLCAyMTEgPT09IGUgKyBoICYmIDEwNSA9PT0gYS5jaGFyQ29kZUF0KDEzKSAmJiAwIDwgYS5pbmRleE9mKCd0cmFuc2Zvcm0nLCAxMCkpIHJldHVybiBhLnN1YnN0cmluZygwLCBhLmluZGV4T2YoJzsnLCAyNykgKyAxKS5yZXBsYWNlKG1hLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgZnVuY3Rpb24gTChkLCBjKSB7XG4gICAgdmFyIGUgPSBkLmluZGV4T2YoMSA9PT0gYyA/ICc6JyA6ICd7JyksXG4gICAgICAgIGggPSBkLnN1YnN0cmluZygwLCAzICE9PSBjID8gZSA6IDEwKTtcbiAgICBlID0gZC5zdWJzdHJpbmcoZSArIDEsIGQubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIFIoMiAhPT0gYyA/IGggOiBoLnJlcGxhY2UobmEsICckMScpLCBlLCBjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVhKGQsIGMpIHtcbiAgICB2YXIgZSA9IFAoYywgYy5jaGFyQ29kZUF0KDApLCBjLmNoYXJDb2RlQXQoMSksIGMuY2hhckNvZGVBdCgyKSk7XG4gICAgcmV0dXJuIGUgIT09IGMgKyAnOycgPyBlLnJlcGxhY2Uob2EsICcgb3IgKCQxKScpLnN1YnN0cmluZyg0KSA6ICcoJyArIGMgKyAnKSc7XG4gIH1cblxuICBmdW5jdGlvbiBIKGQsIGMsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpIHtcbiAgICBmb3IgKHZhciBnID0gMCwgeCA9IGMsIHc7IGcgPCBBOyArK2cpIHtcbiAgICAgIHN3aXRjaCAodyA9IFNbZ10uY2FsbChCLCBkLCB4LCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSkge1xuICAgICAgICBjYXNlIHZvaWQgMDpcbiAgICAgICAgY2FzZSAhMTpcbiAgICAgICAgY2FzZSAhMDpcbiAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeCA9IHc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHggIT09IGMpIHJldHVybiB4O1xuICB9XG5cbiAgZnVuY3Rpb24gVChkKSB7XG4gICAgc3dpdGNoIChkKSB7XG4gICAgICBjYXNlIHZvaWQgMDpcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgQSA9IFMubGVuZ3RoID0gMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZCkgU1tBKytdID0gZDtlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIGQpIGZvciAodmFyIGMgPSAwLCBlID0gZC5sZW5ndGg7IGMgPCBlOyArK2MpIHtcbiAgICAgICAgICBUKGRbY10pO1xuICAgICAgICB9IGVsc2UgWSA9ICEhZCB8IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFQ7XG4gIH1cblxuICBmdW5jdGlvbiBVKGQpIHtcbiAgICBkID0gZC5wcmVmaXg7XG4gICAgdm9pZCAwICE9PSBkICYmIChSID0gbnVsbCwgZCA/ICdmdW5jdGlvbicgIT09IHR5cGVvZiBkID8gdyA9IDEgOiAodyA9IDIsIFIgPSBkKSA6IHcgPSAwKTtcbiAgICByZXR1cm4gVTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEIoZCwgYykge1xuICAgIHZhciBlID0gZDtcbiAgICAzMyA+IGUuY2hhckNvZGVBdCgwKSAmJiAoZSA9IGUudHJpbSgpKTtcbiAgICBWID0gZTtcbiAgICBlID0gW1ZdO1xuXG4gICAgaWYgKDAgPCBBKSB7XG4gICAgICB2YXIgaCA9IEgoLTEsIGMsIGUsIGUsIEQsIHosIDAsIDAsIDAsIDApO1xuICAgICAgdm9pZCAwICE9PSBoICYmICdzdHJpbmcnID09PSB0eXBlb2YgaCAmJiAoYyA9IGgpO1xuICAgIH1cblxuICAgIHZhciBhID0gTShPLCBlLCBjLCAwLCAwKTtcbiAgICAwIDwgQSAmJiAoaCA9IEgoLTIsIGEsIGUsIGUsIEQsIHosIGEubGVuZ3RoLCAwLCAwLCAwKSwgdm9pZCAwICE9PSBoICYmIChhID0gaCkpO1xuICAgIFYgPSAnJztcbiAgICBFID0gMDtcbiAgICB6ID0gRCA9IDE7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICB2YXIgY2EgPSAvXlxcMCsvZyxcbiAgICAgIE4gPSAvW1xcMFxcclxcZl0vZyxcbiAgICAgIGFhID0gLzogKi9nLFxuICAgICAga2EgPSAvem9vfGdyYS8sXG4gICAgICBtYSA9IC8oWyw6IF0pKHRyYW5zZm9ybSkvZyxcbiAgICAgIGlhID0gLyxcXHIrPy9nLFxuICAgICAgRiA9IC8oW1xcdFxcclxcbiBdKSpcXGY/Ji9nLFxuICAgICAgZmEgPSAvQChrXFx3KylcXHMqKFxcUyopXFxzKi8sXG4gICAgICBRID0gLzo6KHBsYWNlKS9nLFxuICAgICAgaGEgPSAvOihyZWFkLW9ubHkpL2csXG4gICAgICBHID0gL1tzdmhdXFx3Ky1bdGJscl17Mn0vLFxuICAgICAgZGEgPSAvXFwoXFxzKiguKilcXHMqXFwpL2csXG4gICAgICBvYSA9IC8oW1xcc1xcU10qPyk7L2csXG4gICAgICBiYSA9IC8tc2VsZnxmbGV4LS9nLFxuICAgICAgbmEgPSAvW15dKj8oOltycF1bZWxdYVtcXHctXSspW15dKi8sXG4gICAgICBsYSA9IC9zdHJldGNofDpcXHMqXFx3K1xcLSg/OmNvbnRlfGF2YWlsKS8sXG4gICAgICBqYSA9IC8oW14tXSkoaW1hZ2Utc2V0XFwoKS8sXG4gICAgICB6ID0gMSxcbiAgICAgIEQgPSAxLFxuICAgICAgRSA9IDAsXG4gICAgICB3ID0gMSxcbiAgICAgIE8gPSBbXSxcbiAgICAgIFMgPSBbXSxcbiAgICAgIEEgPSAwLFxuICAgICAgUiA9IG51bGwsXG4gICAgICBZID0gMCxcbiAgICAgIFYgPSAnJztcbiAgQi51c2UgPSBUO1xuICBCLnNldCA9IFU7XG4gIHZvaWQgMCAhPT0gVyAmJiBVKFcpO1xuICByZXR1cm4gQjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGlzX21pbjtcbiIsInZhciB1bml0bGVzc0tleXMgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBib3JkZXJJbWFnZU91dHNldDogMSxcbiAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgYm94RmxleDogMSxcbiAgYm94RmxleEdyb3VwOiAxLFxuICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gIGNvbHVtbkNvdW50OiAxLFxuICBjb2x1bW5zOiAxLFxuICBmbGV4OiAxLFxuICBmbGV4R3JvdzogMSxcbiAgZmxleFBvc2l0aXZlOiAxLFxuICBmbGV4U2hyaW5rOiAxLFxuICBmbGV4TmVnYXRpdmU6IDEsXG4gIGZsZXhPcmRlcjogMSxcbiAgZ3JpZFJvdzogMSxcbiAgZ3JpZFJvd0VuZDogMSxcbiAgZ3JpZFJvd1NwYW46IDEsXG4gIGdyaWRSb3dTdGFydDogMSxcbiAgZ3JpZENvbHVtbjogMSxcbiAgZ3JpZENvbHVtbkVuZDogMSxcbiAgZ3JpZENvbHVtblNwYW46IDEsXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcbiAgbXNHcmlkUm93OiAxLFxuICBtc0dyaWRSb3dTcGFuOiAxLFxuICBtc0dyaWRDb2x1bW46IDEsXG4gIG1zR3JpZENvbHVtblNwYW46IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bml0bGVzc0tleXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2lwZWFibGUgfSBmcm9tICdyZWFjdC1zd2lwZWFibGUnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCc7XG5pbXBvcnQgT25seSBmcm9tICdyZWFjdC1vbmx5LXdoZW4nO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcblxuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7XG4gIHZhciBpdDtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGlmIChpdCkgbyA9IGl0O1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzOiBGLFxuICAgICAgICBuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7XG4gICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogb1tpKytdXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9LFxuICAgICAgICBmOiBGXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSxcbiAgICAgIGRpZEVyciA9IGZhbHNlLFxuICAgICAgZXJyO1xuICByZXR1cm4ge1xuICAgIHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgfSxcbiAgICBuOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RlcCA9IGl0Lm5leHQoKTtcbiAgICAgIG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7XG4gICAgICByZXR1cm4gc3RlcDtcbiAgICB9LFxuICAgIGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBkaWRFcnIgPSB0cnVlO1xuICAgICAgZXJyID0gZTtcbiAgICB9LFxuICAgIGY6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdC5yZXR1cm4gIT0gbnVsbCkgaXQucmV0dXJuKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcbnZhciBudW1iZXJUb0FycmF5ID0gZnVuY3Rpb24gbnVtYmVyVG9BcnJheShuKSB7XG4gIHJldHVybiBfdG9Db25zdW1hYmxlQXJyYXkoQXJyYXkobikua2V5cygpKTtcbn07XG52YXIgY3NzUHJlZml4ID0gZnVuY3Rpb24gY3NzUHJlZml4KCkge1xuICB2YXIgcHJlZml4ID0gXCJyZWNcIjtcbiAgdmFyIHNwYWNlID0gXCIgXCI7XG4gIHZhciByZXN1bHQgPSBcIlwiLmNvbmNhdChwcmVmaXgpOyAvLyBpbml0aWFsIGl0IHdpdGggZ2xvYmFsIHByZWZpeDtcbiAgLy8gaW4gY2FzZSBvZiBhbiBhcnJheSB3ZSBhZGQgdGhlIGNsYXNzIHByZWZpeCBwZXIgaXRlbTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgY2xhc3NOYW1lcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBjbGFzc05hbWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGNoYWluZWRDbGFzc2VzID0gY2xhc3NOYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VycmVudCkge1xuICAgIGlmIChjdXJyZW50KSB7XG4gICAgICBhY2MgKz0gXCJcIi5jb25jYXQoc3BhY2UpLmNvbmNhdChwcmVmaXgsIFwiLVwiKS5jb25jYXQoY3VycmVudCk7IC8vIHdlIG11c3Qga2VlcCBzcGFjZXMgYmV0d2VlbiBjbGFzcyBuYW1lc1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIFwiXCIpO1xuICByZXN1bHQgKz0gY2hhaW5lZENsYXNzZXM7XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIHBpcGUgPSBmdW5jdGlvbiBwaXBlKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZucyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGZuc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIGZucy5yZWR1Y2UoZnVuY3Rpb24gKHYsIGYpIHtcbiAgICAgIHJldHVybiBmKHYpO1xuICAgIH0sIHgpO1xuICB9O1xufTtcblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0KCkge1xuICB2YXIgZGF0YSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoW1wiXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMywgNTgsIDE4MywgMC4xKTtcXG4gIGNvbG9yOiBcIiwgXCI7XFxuICBib3gtc2hhZG93OiAwIDAgMnB4IDBweCAjMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgJjpob3ZlcjplbmFibGVkLFxcbiAgJjpmb2N1czplbmFibGVkIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAzLCA1OCwgMTgzLCAxKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAwICMzMzM7XFxuICB9XFxuICAmOmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIH1cXG5cIl0pO1xuXG4gIF90ZW1wbGF0ZU9iamVjdCA9IGZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cbnZhciBCdXR0b24gPSBzdHlsZWQuYnV0dG9uLmF0dHJzKGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyBcImJ1dHRvblwiIDogX3JlZiR0eXBlO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVcbiAgfTtcbn0pKF90ZW1wbGF0ZU9iamVjdCgpLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmRpc2FibGVkID8gXCIjOTk5XCIgOiBcIiMzMzNcIjtcbn0pO1xuXG52YXIgY29uc3RzID0ge1xuICBQUkVWOiBcIlBSRVZcIixcbiAgTkVYVDogXCJORVhUXCIsXG4gIFNUQVJUOiBcImZsZXgtc3RhcnRcIixcbiAgQ0VOVEVSOiBcImNlbnRlclwiLFxuICBFTkQ6IFwiZmxleC1lbmRcIlxufTtcblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0JDEoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBcIiwgXCI7XFxuXCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3QkMSA9IGZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cbnZhciBJdGVtV3JhcHBlciA9IHN0eWxlZC5kaXYuYXR0cnMoZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIHN0eWxlID0gX3JlZi5zdHlsZTtcbiAgcmV0dXJuIHtcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgY2xhc3NOYW1lOiBjc3NQcmVmaXgoXCJpdGVtLXdyYXBwZXJcIilcbiAgfTtcbn0pKF90ZW1wbGF0ZU9iamVjdCQxKCksIGZ1bmN0aW9uIChfcmVmMikge1xuICB2YXIgaXRlbVBvc2l0aW9uID0gX3JlZjIuaXRlbVBvc2l0aW9uO1xuICByZXR1cm4gaXRlbVBvc2l0aW9uO1xufSk7XG5JdGVtV3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fSxcbiAgaXRlbVBvc2l0aW9uOiBjb25zdHMuQ0VOVEVSXG59O1xuSXRlbVdyYXBwZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGl0ZW1Qb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtjb25zdHMuU1RBUlQsIGNvbnN0cy5DRU5URVIsIGNvbnN0cy5FTkRdKVxufTtcblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0JDIoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCAxMHB4O1xcblwiXSk7XG5cbiAgX3RlbXBsYXRlT2JqZWN0JDIgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG52YXIgU2xpZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdihfdGVtcGxhdGVPYmplY3QkMigpKTtcblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0JDMoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogXCIsIFwiO1xcbiAgXCIsIFwiO1xcbiAgXCIsIFwiO1xcblwiXSk7XG5cbiAgX3RlbXBsYXRlT2JqZWN0JDMgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbnZhciBjYWxjTGVmdCA9IGZ1bmN0aW9uIGNhbGNMZWZ0KF9yZWYpIHtcbiAgdmFyIGlzUlRMID0gX3JlZi5pc1JUTCxcbiAgICAgIHZlcnRpY2FsTW9kZSA9IF9yZWYudmVydGljYWxNb2RlLFxuICAgICAgaXNTd2lwaW5nID0gX3JlZi5pc1N3aXBpbmcsXG4gICAgICBzd2lwZWRTbGlkZXJQb3NpdGlvbiA9IF9yZWYuc3dpcGVkU2xpZGVyUG9zaXRpb24sXG4gICAgICBzbGlkZXJQb3NpdGlvbiA9IF9yZWYuc2xpZGVyUG9zaXRpb247XG5cbiAgaWYgKHZlcnRpY2FsTW9kZSB8fCBpc1JUTCkge1xuICAgIHJldHVybiBcImF1dG9cIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoaXNTd2lwaW5nID8gc3dpcGVkU2xpZGVyUG9zaXRpb24gOiBzbGlkZXJQb3NpdGlvbiwgXCJweFwiKTtcbiAgfVxufTtcblxudmFyIGNhbGNSaWdodCA9IGZ1bmN0aW9uIGNhbGNSaWdodChfcmVmMikge1xuICB2YXIgaXNSVEwgPSBfcmVmMi5pc1JUTCxcbiAgICAgIHZlcnRpY2FsTW9kZSA9IF9yZWYyLnZlcnRpY2FsTW9kZSxcbiAgICAgIGlzU3dpcGluZyA9IF9yZWYyLmlzU3dpcGluZyxcbiAgICAgIHN3aXBlZFNsaWRlclBvc2l0aW9uID0gX3JlZjIuc3dpcGVkU2xpZGVyUG9zaXRpb24sXG4gICAgICBzbGlkZXJQb3NpdGlvbiA9IF9yZWYyLnNsaWRlclBvc2l0aW9uO1xuXG4gIGlmICghdmVydGljYWxNb2RlICYmIGlzUlRMKSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KGlzU3dpcGluZyA/IHN3aXBlZFNsaWRlclBvc2l0aW9uIDogc2xpZGVyUG9zaXRpb24sIFwicHhcIik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiYXV0b1wiO1xuICB9XG59O1xuXG52YXIgY2FsY1RvcCA9IGZ1bmN0aW9uIGNhbGNUb3AoX3JlZjMpIHtcbiAgdmFyIHZlcnRpY2FsTW9kZSA9IF9yZWYzLnZlcnRpY2FsTW9kZSxcbiAgICAgIGlzU3dpcGluZyA9IF9yZWYzLmlzU3dpcGluZyxcbiAgICAgIHN3aXBlZFNsaWRlclBvc2l0aW9uID0gX3JlZjMuc3dpcGVkU2xpZGVyUG9zaXRpb24sXG4gICAgICBzbGlkZXJQb3NpdGlvbiA9IF9yZWYzLnNsaWRlclBvc2l0aW9uO1xuXG4gIGlmICghdmVydGljYWxNb2RlKSB7XG4gICAgcmV0dXJuIFwiYXV0b1wiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChpc1N3aXBpbmcgPyBzd2lwZWRTbGlkZXJQb3NpdGlvbiA6IHNsaWRlclBvc2l0aW9uLCBcInB4XCIpO1xuICB9XG59O1xuXG52YXIgY2FsY1RyYW5zaXRpb24gPSBmdW5jdGlvbiBjYWxjVHJhbnNpdGlvbihfcmVmNCkge1xuICB2YXIgaXNTd2lwaW5nID0gX3JlZjQuaXNTd2lwaW5nLFxuICAgICAgdHJhbnNpdGlvbk1zID0gX3JlZjQudHJhbnNpdGlvbk1zLFxuICAgICAgZWFzaW5nID0gX3JlZjQuZWFzaW5nLFxuICAgICAgdGlsdEVhc2luZyA9IF9yZWY0LnRpbHRFYXNpbmc7XG4gIHZhciBkdXJhdGlvbiA9IGlzU3dpcGluZyA/IDAgOiB0cmFuc2l0aW9uTXM7XG4gIHZhciBlZmZlY3RpdmVFYXNpbmcgPSBpc1N3aXBpbmcgPyB0aWx0RWFzaW5nIDogZWFzaW5nO1xuICByZXR1cm4gXCJhbGwgXCIuY29uY2F0KGR1cmF0aW9uLCBcIm1zIFwiKS5jb25jYXQoZWZmZWN0aXZlRWFzaW5nKTtcbn07IC8vIFdlIHVzZSBhdHRyaWJ1dGVzIChzdHlsZSkgdG8gYnlwYXNzIG11bHRpcGxlIGNyZWF0aW9uIG9mIGNsYXNzZXMgKGR5bmFtaWMgc3R5bGluZylcblxuXG52YXIgU2xpZGVyID0gc3R5bGVkLmRpdi5hdHRycyhmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBzdHlsZToge1xuICAgICAgdHJhbnNpdGlvbjogY2FsY1RyYW5zaXRpb24ocHJvcHMpLFxuICAgICAgbGVmdDogY2FsY0xlZnQocHJvcHMpLFxuICAgICAgcmlnaHQ6IGNhbGNSaWdodChwcm9wcyksXG4gICAgICB0b3A6IGNhbGNUb3AocHJvcHMpXG4gICAgfVxuICB9O1xufSkoX3RlbXBsYXRlT2JqZWN0JDMoKSwgZnVuY3Rpb24gKF9yZWY1KSB7XG4gIHZhciB2ZXJ0aWNhbE1vZGUgPSBfcmVmNS52ZXJ0aWNhbE1vZGU7XG4gIHJldHVybiB2ZXJ0aWNhbE1vZGUgPyBcImNvbHVtblwiIDogXCJyb3dcIjtcbn0sIGZ1bmN0aW9uIChfcmVmNikge1xuICB2YXIgdmVydGljYWxNb2RlID0gX3JlZjYudmVydGljYWxNb2RlO1xuICByZXR1cm4gdmVydGljYWxNb2RlID8gXCJtaW4taGVpZ2h0OiAxMDAlO1wiIDogXCJcIjtcbn0sIGZ1bmN0aW9uIChfcmVmNykge1xuICB2YXIgdmVydGljYWxNb2RlID0gX3JlZjcudmVydGljYWxNb2RlLFxuICAgICAgb3V0ZXJTcGFjaW5nID0gX3JlZjcub3V0ZXJTcGFjaW5nO1xuICByZXR1cm4gdmVydGljYWxNb2RlID8gXCJcIiA6IFwibWFyZ2luOiAwIFwiLmNvbmNhdChvdXRlclNwYWNpbmcsIFwicHg7XCIpO1xufSk7XG5cbmZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCQ0KCkge1xuICB2YXIgZGF0YSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoW1wiXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiAxMDAlO1xcblwiXSk7XG5cbiAgX3RlbXBsYXRlT2JqZWN0JDQgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG52YXIgU3R5bGVkQ2Fyb3VzZWwgPSBzdHlsZWQuZGl2LmF0dHJzKGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4ge1xuICAgIHN0eWxlOiB7XG4gICAgICBoZWlnaHQ6IHByb3BzLnNpemUuaGVpZ2h0XG4gICAgfVxuICB9O1xufSkoX3RlbXBsYXRlT2JqZWN0JDQoKSk7XG5cbmZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCQ1KCkge1xuICB2YXIgZGF0YSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoW1wiXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpcmVjdGlvbjogXCIsIFwiO1xcblwiXSk7XG5cbiAgX3RlbXBsYXRlT2JqZWN0JDUgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG52YXIgQ2Fyb3VzZWxXcmFwcGVyID0gc3R5bGVkLmRpdihfdGVtcGxhdGVPYmplY3QkNSgpLCBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgaXNSVEwgPSBfcmVmLmlzUlRMO1xuICByZXR1cm4gaXNSVEwgPyBcInJ0bFwiIDogXCJsdHJcIjtcbn0pO1xuXG52YXIgSXRlbVdyYXBwZXJDb250YWluZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEl0ZW1XcmFwcGVyQ29udGFpbmVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEl0ZW1XcmFwcGVyQ29udGFpbmVyKTtcblxuICBmdW5jdGlvbiBJdGVtV3JhcHBlckNvbnRhaW5lcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSXRlbVdyYXBwZXJDb250YWluZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2xpY2sgPSBfdGhpcyRwcm9wcy5vbkNsaWNrLFxuICAgICAgICAgIGlkID0gX3RoaXMkcHJvcHMuaWQ7XG4gICAgICBvbkNsaWNrKGlkKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJdGVtV3JhcHBlckNvbnRhaW5lciwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtV3JhcHBlciwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEl0ZW1XcmFwcGVyQ29udGFpbmVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5JdGVtV3JhcHBlckNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uQ2xpY2s6IG5vb3Bcbn07XG5JdGVtV3JhcHBlckNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG52YXIgVHJhY2sgPSBmdW5jdGlvbiBUcmFjayhfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBjaGlsZFdpZHRoID0gX3JlZi5jaGlsZFdpZHRoLFxuICAgICAgYXV0b1RhYkluZGV4VmlzaWJsZUl0ZW1zID0gX3JlZi5hdXRvVGFiSW5kZXhWaXNpYmxlSXRlbXMsXG4gICAgICBlbmFibGVTd2lwZSA9IF9yZWYuZW5hYmxlU3dpcGUsXG4gICAgICBlbmFibGVNb3VzZVN3aXBlID0gX3JlZi5lbmFibGVNb3VzZVN3aXBlLFxuICAgICAgcHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudCA9IF9yZWYucHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudCxcbiAgICAgIGl0ZW1zVG9TaG93ID0gX3JlZi5pdGVtc1RvU2hvdyxcbiAgICAgIGl0ZW1zVG9TY3JvbGwgPSBfcmVmLml0ZW1zVG9TY3JvbGwsXG4gICAgICBjdXJyZW50SXRlbSA9IF9yZWYuY3VycmVudEl0ZW0sXG4gICAgICBpdGVtUG9zaXRpb24gPSBfcmVmLml0ZW1Qb3NpdGlvbixcbiAgICAgIGl0ZW1QYWRkaW5nID0gX3JlZi5pdGVtUGFkZGluZyxcbiAgICAgIG9uU3dpcGVkID0gX3JlZi5vblN3aXBlZCxcbiAgICAgIG9uU3dpcGluZyA9IF9yZWYub25Td2lwaW5nLFxuICAgICAgdmVydGljYWxNb2RlID0gX3JlZi52ZXJ0aWNhbE1vZGUsXG4gICAgICBvbkl0ZW1DbGljayA9IF9yZWYub25JdGVtQ2xpY2s7XG4gIHZhciB3aWR0aCA9IFwiXCIuY29uY2F0KGNoaWxkV2lkdGgsIFwicHhcIik7XG4gIHZhciBwYWRkaW5nU3R5bGUgPSBcIlwiLmNvbmNhdChpdGVtUGFkZGluZy5qb2luKFwicHggXCIpLCBcInB4XCIpO1xuICB2YXIgbWluVmlzaWJsZUl0ZW0gPSBjdXJyZW50SXRlbTtcbiAgdmFyIG1heFZpc2libGVJdGVtID0gY3VycmVudEl0ZW0gKyBpdGVtc1RvU2hvdztcbiAgdmFyIHByZXZJdGVtID0gbWluVmlzaWJsZUl0ZW0gLSBpdGVtc1RvU2Nyb2xsO1xuICB2YXIgbmV4dEl0ZW0gPSBtYXhWaXNpYmxlSXRlbSArIGl0ZW1zVG9TY3JvbGw7XG4gIHZhciBvcmlnaW5hbENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGlkeCkge1xuICAgIHZhciBpc1Zpc2libGUgPSBpZHggPj0gbWluVmlzaWJsZUl0ZW0gJiYgaWR4IDwgbWF4VmlzaWJsZUl0ZW07XG4gICAgdmFyIGlzUHJldkl0ZW0gPSAhaXNWaXNpYmxlICYmIGlkeCA+PSBwcmV2SXRlbSAmJiBpZHggPCBjdXJyZW50SXRlbTtcbiAgICB2YXIgaXNOZXh0SXRlbSA9ICFpc1Zpc2libGUgJiYgaWR4IDwgbmV4dEl0ZW0gJiYgaWR4ID4gY3VycmVudEl0ZW07XG4gICAgdmFyIGl0ZW1DbGFzcyA9IFwiY2Fyb3VzZWwtaXRlbVwiO1xuICAgIHZhciBjaGlsZFRvUmVuZGVyID0gYXV0b1RhYkluZGV4VmlzaWJsZUl0ZW1zID8gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgdGFiSW5kZXg6IGlzVmlzaWJsZSA/IDAgOiAtMVxuICAgIH0pIDogY2hpbGQ7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY3NzUHJlZml4KGl0ZW1DbGFzcywgXCJcIi5jb25jYXQoaXRlbUNsYXNzLCBcIi1cIikuY29uY2F0KGlkeCksIFwiXCIuY29uY2F0KGl0ZW1DbGFzcywgXCItXCIpLmNvbmNhdChpc1Zpc2libGUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCIpLCBpc1ByZXZJdGVtICYmIFwiXCIuY29uY2F0KGl0ZW1DbGFzcywgXCItcHJldlwiKSwgaXNOZXh0SXRlbSAmJiBcIlwiLmNvbmNhdChpdGVtQ2xhc3MsIFwiLW5leHRcIikpXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSXRlbVdyYXBwZXJDb250YWluZXIsIHtcbiAgICAgIGlkOiBpZHgsXG4gICAgICBpdGVtUG9zaXRpb246IGl0ZW1Qb3NpdGlvbixcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgcGFkZGluZzogcGFkZGluZ1N0eWxlXG4gICAgICB9LFxuICAgICAga2V5OiBpZHgsXG4gICAgICBvbkNsaWNrOiBvbkl0ZW1DbGlja1xuICAgIH0sIGNoaWxkVG9SZW5kZXIpKTtcbiAgfSk7XG4gIHZhciB0b1JlbmRlciA9IGVuYWJsZVN3aXBlID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVhYmxlLCB7XG4gICAgc3R5bGU6IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogdmVydGljYWxNb2RlID8gXCJjb2x1bW5cIiA6IFwicm93XCJcbiAgICB9LFxuICAgIHN0b3BQcm9wYWdhdGlvbjogdHJ1ZSxcbiAgICBwcmV2ZW50RGVmYXVsdFRvdWNobW92ZUV2ZW50OiBwcmV2ZW50RGVmYXVsdFRvdWNobW92ZUV2ZW50LFxuICAgIHRyYWNrTW91c2U6IGVuYWJsZU1vdXNlU3dpcGUsXG4gICAgb25Td2lwZWQ6IG9uU3dpcGVkLFxuICAgIG9uU3dpcGluZzogb25Td2lwaW5nLFxuICAgIGNsYXNzTmFtZTogY3NzUHJlZml4KFwic3dpcGFibGVcIilcbiAgfSwgb3JpZ2luYWxDaGlsZHJlbikgOiBvcmlnaW5hbENoaWxkcmVuO1xuICByZXR1cm4gdG9SZW5kZXI7XG59O1xuXG5UcmFjay5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgaXRlbXNUb1Nob3c6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbm9BdXRvVGFiYmVkSXRlbXM6IFByb3BUeXBlcy5ib29sLFxuICBjdXJyZW50SXRlbTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBpdGVtUG9zaXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGl0ZW1QYWRkaW5nOiBQcm9wVHlwZXMuYXJyYXksXG4gIGNoaWxkV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZlcnRpY2FsTW9kZTogUHJvcFR5cGVzLmJvb2wsXG4gIGVuYWJsZVN3aXBlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZW5hYmxlTW91c2VTd2lwZTogUHJvcFR5cGVzLmJvb2wsXG4gIHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQ6IFByb3BUeXBlcy5ib29sLFxuICBvblN3aXBlZDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU3dpcGluZzogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uSXRlbUNsaWNrOiBQcm9wVHlwZXMuZnVuY1xufTtcblxudmFyIGRpcmVjdGlvbkljb25zID0ge1xuICBsZWZ0OiBcIuKdrlwiLFxuICByaWdodDogXCLina9cIixcbiAgdXA6IFwi4p2uXCIsXG4gIGRvd246IFwi4p2vXCJcbn07XG52YXIgYXJyb3dDbGFzc25hbWUgPSBjc3NQcmVmaXgoXCJhcnJvd1wiKTtcblxudmFyIHJvdGF0ZVN0eWxlID0gZnVuY3Rpb24gcm90YXRlU3R5bGUoZGlyZWN0aW9uKSB7XG4gIHZhciByb3RhdGUgPSB7fTtcblxuICBpZiAoZGlyZWN0aW9uID09PSBBcnJvdy51cCB8fCBkaXJlY3Rpb24gPT09IEFycm93LmRvd24pIHtcbiAgICByb3RhdGUudHJhbnNmb3JtID0gXCJyb3RhdGUoOTBkZWcpXCI7XG4gIH1cblxuICByZXR1cm4gcm90YXRlO1xufTtcblxudmFyIEFycm93ID0gZnVuY3Rpb24gQXJyb3coX3JlZikge1xuICB2YXIgZGlyZWN0aW9uID0gX3JlZi5kaXJlY3Rpb24sXG4gICAgICBvbkNsaWNrID0gX3JlZi5vbkNsaWNrLFxuICAgICAgaWNvbnMgPSBfcmVmLmljb25zLFxuICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJkaXJlY3Rpb25cIiwgXCJvbkNsaWNrXCIsIFwiaWNvbnNcIiwgXCJzdHlsZVwiXSk7XG5cbiAgdmFyIGFycm93cyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBkaXJlY3Rpb25JY29ucyksIGljb25zKTtcblxuICB2YXIgc3R5bGVPYmogPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcm90YXRlU3R5bGUoZGlyZWN0aW9uKSksIHN0eWxlKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBfZXh0ZW5kcyh7XG4gICAgdGFiSW5kZXg6IDAsXG4gICAgb25DbGljazogb25DbGljayxcbiAgICBjbGFzc05hbWU6IGN4KGFycm93Q2xhc3NuYW1lLCBcIlwiLmNvbmNhdChhcnJvd0NsYXNzbmFtZSwgXCItXCIpLmNvbmNhdChkaXJlY3Rpb24pKSxcbiAgICBzdHlsZTogc3R5bGVPYmpcbiAgfSwgcmVzdCksIGFycm93c1tkaXJlY3Rpb25dKTtcbn07XG5cbkFycm93LmxlZnQgPSBcImxlZnRcIjtcbkFycm93LnJpZ2h0ID0gXCJyaWdodFwiO1xuQXJyb3cudXAgPSBcInVwXCI7XG5BcnJvdy5kb3duID0gXCJkb3duXCI7XG5BcnJvdy5wcm9wVHlwZXMgPSB7XG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcImxlZnRcIiwgXCJyaWdodFwiLCBcInVwXCIsIFwiZG93blwiXSkuaXNSZXF1aXJlZCxcbiAgaWNvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xufTtcblxudmFyIE5FWFRfSVRFTSA9IFwiTkVYVF9JVEVNXCI7XG52YXIgUFJFVl9JVEVNID0gXCJQUkVWX0lURU1cIjtcblxudmFyIGFjdGl2ZUluZGV4UmVkdWNlciA9IGZ1bmN0aW9uIGFjdGl2ZUluZGV4UmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHZhciBsaW1pdCA9IGFjdGlvbi5saW1pdCxcbiAgICAgIGl0ZW1zVG9TY3JvbGwgPSBhY3Rpb24uaXRlbXNUb1Njcm9sbCxcbiAgICAgIHR5cGUgPSBhY3Rpb24udHlwZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIE5FWFRfSVRFTTpcbiAgICAgIHtcbiAgICAgICAgdmFyIG9wdGltaXN0aWNOZXh0SXRlbSA9IHN0YXRlICsgaXRlbXNUb1Njcm9sbDtcbiAgICAgICAgdmFyIG5leHRJdGVtID0gbGltaXQgPj0gb3B0aW1pc3RpY05leHRJdGVtID8gb3B0aW1pc3RpY05leHRJdGVtIDogbGltaXQ7XG4gICAgICAgIHJldHVybiBuZXh0SXRlbTtcbiAgICAgIH1cblxuICAgIGNhc2UgUFJFVl9JVEVNOlxuICAgICAge1xuICAgICAgICB2YXIgb3B0aW1pc3RpY1ByZXZJdGVtID0gc3RhdGUgLSBpdGVtc1RvU2Nyb2xsO1xuICAgICAgICB2YXIgcHJldkl0ZW0gPSBvcHRpbWlzdGljUHJldkl0ZW0gPj0gbGltaXQgPyBvcHRpbWlzdGljUHJldkl0ZW0gOiBsaW1pdDtcbiAgICAgICAgcmV0dXJuIHByZXZJdGVtO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxudmFyIG5leHRJdGVtQWN0aW9uID0gZnVuY3Rpb24gbmV4dEl0ZW1BY3Rpb24obGltaXQsIGl0ZW1zVG9TY3JvbGwpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBORVhUX0lURU0sXG4gICAgbGltaXQ6IGxpbWl0LFxuICAgIGl0ZW1zVG9TY3JvbGw6IGl0ZW1zVG9TY3JvbGxcbiAgfTtcbn07XG52YXIgcHJldkl0ZW1BY3Rpb24gPSBmdW5jdGlvbiBwcmV2SXRlbUFjdGlvbihsaW1pdCwgaXRlbXNUb1Njcm9sbCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFBSRVZfSVRFTSxcbiAgICBsaW1pdDogbGltaXQsXG4gICAgaXRlbXNUb1Njcm9sbDogaXRlbXNUb1Njcm9sbFxuICB9O1xufTtcblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0JDYoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMTBweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogXCIsIFwiO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gICY6aG92ZXIsXFxuICAmOmZvY3VzIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiBcIiwgXCI7XFxuICB9XFxuXCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3QkNiA9IGZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cbnZhciBib3hTaGFkb3cgPSBcIjAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KVwiO1xudmFyIGFjdGl2ZUJveFNoYWRvdyA9IFwiMCAwIDFweCAzcHggcmdiYSgxMDMsNTgsMTgzLDEpXCI7XG52YXIgaG92ZXJlZEJveFNoYWRvdyA9IFwiMCAwIDFweCAzcHggcmdiYSgxMDMsNTgsMTgzLC41KVwiO1xudmFyIERvdCA9IHN0eWxlZC5idXR0b24uYXR0cnMoZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/IFwiYnV0dG9uXCIgOiBfcmVmJHR5cGU7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZVxuICB9O1xufSkoX3RlbXBsYXRlT2JqZWN0JDYoKSwgZnVuY3Rpb24gKF9yZWYyKSB7XG4gIHZhciBhY3RpdmUgPSBfcmVmMi5hY3RpdmU7XG4gIHJldHVybiBhY3RpdmUgPyBcInJnYmEoMTAzLDU4LDE4MywuNSlcIiA6IFwidHJhbnNwYXJlbnRcIjtcbn0sIGZ1bmN0aW9uIChfcmVmMykge1xuICB2YXIgYWN0aXZlID0gX3JlZjMuYWN0aXZlO1xuICByZXR1cm4gYWN0aXZlID8gYWN0aXZlQm94U2hhZG93IDogYm94U2hhZG93O1xufSwgZnVuY3Rpb24gKF9yZWY0KSB7XG4gIHZhciBhY3RpdmUgPSBfcmVmNC5hY3RpdmU7XG4gIHJldHVybiBhY3RpdmUgPyBhY3RpdmVCb3hTaGFkb3cgOiBob3ZlcmVkQm94U2hhZG93O1xufSk7XG5cbnZhciBEb3RDb250YWluZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERvdENvbnRhaW5lciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihEb3RDb250YWluZXIpO1xuXG4gIGZ1bmN0aW9uIERvdENvbnRhaW5lcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRG90Q29udGFpbmVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25DbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkNsaWNrID0gX3RoaXMkcHJvcHMub25DbGljayxcbiAgICAgICAgICBpZCA9IF90aGlzJHByb3BzLmlkO1xuICAgICAgb25DbGljayhpZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRG90Q29udGFpbmVyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGFjdGl2ZSA9IHRoaXMucHJvcHMuYWN0aXZlO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERvdCwge1xuICAgICAgICB0YWJJbmRleDogYWN0aXZlID8gLTEgOiAwLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNzc1ByZWZpeChcImRvdFwiKSwgXCIgXCIpLmNvbmNhdChhY3RpdmUgPyBjc3NQcmVmaXgoXCJkb3RfYWN0aXZlXCIpIDogXCJcIilcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEb3RDb250YWluZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkRvdENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5mdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QkNygpIHtcbiAgdmFyIGRhdGEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKFtcIlxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuXCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3QkNyA9IGZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cbnZhciBJbmRpY2F0b3JzID0gc3R5bGVkLmRpdihfdGVtcGxhdGVPYmplY3QkNygpKTtcblxudmFyIFBhZ2luYXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBhZ2luYXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoUGFnaW5hdGlvbik7XG5cbiAgZnVuY3Rpb24gUGFnaW5hdGlvbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFnaW5hdGlvbik7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGFnaW5hdGlvbiwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbnVtT2ZQYWdlcyA9IF90aGlzJHByb3BzLm51bU9mUGFnZXMsXG4gICAgICAgICAgYWN0aXZlUGFnZSA9IF90aGlzJHByb3BzLmFjdGl2ZVBhZ2UsXG4gICAgICAgICAgb25DbGljayA9IF90aGlzJHByb3BzLm9uQ2xpY2s7XG4gICAgICB2YXIgcGFnZXMgPSBudW1iZXJUb0FycmF5KG51bU9mUGFnZXMpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEluZGljYXRvcnMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjc3NQcmVmaXgoXCJwYWdpbmF0aW9uXCIpXG4gICAgICB9LCBwYWdlcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERvdENvbnRhaW5lciwge1xuICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICBpZDogaSxcbiAgICAgICAgICBhY3RpdmU6IGkgPT09IGFjdGl2ZVBhZ2UsXG4gICAgICAgICAgb25DbGljazogb25DbGlja1xuICAgICAgICB9KTtcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGFnaW5hdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuUGFnaW5hdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uQ2xpY2s6IG5vb3Bcbn07XG5QYWdpbmF0aW9uLnByb3BUeXBlcyA9IHtcbiAgbnVtT2ZQYWdlczogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBhY3RpdmVQYWdlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG52YXIgQ2Fyb3VzZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENhcm91c2VsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKENhcm91c2VsKTtcblxuICBmdW5jdGlvbiBDYXJvdXNlbCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2Fyb3VzZWwpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdGF0ZVwiLCB7XG4gICAgICByb290SGVpZ2h0OiAwLFxuICAgICAgY2hpbGRIZWlnaHQ6IDAsXG4gICAgICBzbGlkZXJQb3NpdGlvbjogMCxcbiAgICAgIHN3aXBlZFNsaWRlclBvc2l0aW9uOiAwLFxuICAgICAgaXNTd2lwaW5nOiBmYWxzZSxcbiAgICAgIHRyYW5zaXRpb25pbmc6IGZhbHNlLFxuICAgICAgdHJhbnNpdGlvbk1zOiBfdGhpcy5wcm9wcy50cmFuc2l0aW9uTXMsXG4gICAgICBhY3RpdmVJbmRleDogX3RoaXMucHJvcHMuaW5pdGlhbEFjdGl2ZUluZGV4IHx8IF90aGlzLnByb3BzLmluaXRpYWxGaXJzdEl0ZW0sXG4gICAgICAvLyBzdXBwb3J0IGRlcHJlY2F0ZWQgIGluaXRpYWxGaXJzdEl0ZW1cbiAgICAgIHBhZ2VzOiBbXSxcbiAgICAgIGFjdGl2ZVBhZ2U6IDAsXG4gICAgICBzbGlkZXJDb250YWluZXJXaWR0aDogMFxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldFJlZlwiLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzW25hbWVdID0gcmVmO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbml0UmVzaXplT2JzZXJ2ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMsIG9ic2VydmVyKSB7XG4gICAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlbnRyaWVzKSxcbiAgICAgICAgICAgIF9zdGVwO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoKSB7XG4gICAgICAgICAgICB2YXIgZW50cnkgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKGVudHJ5LnRhcmdldCA9PT0gX3RoaXMuc2xpZGVyQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgIC8vIHdlIGFyZSB1c2luZyByQUYgYmVjYXVzZSBpdCBmaXhlcyB0aGUgaW5maW5pdGUgcmVmcmVzaCB3aXRoIGdhdHNieSAoc3NyPykuXG4gICAgICAgICAgICAgIC8vIFRCSCwgSSdtIG5vdCBzdXJlIGkgZnVsbHkgdW5kZXJzdGFuZCB3aHkuXG4gICAgICAgICAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vc2FnMXYvcmVhY3QtZWxhc3RpYy1jYXJvdXNlbC9pc3N1ZXMvMTA3XG4gICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uQ29udGFpbmVyUmVzaXplKGVudHJ5KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbnRyeS50YXJnZXQgPT09IF90aGlzLnNsaWRlcikge1xuICAgICAgICAgICAgICAvLyB3ZSBhcmUgdXNpbmcgckFGIGJlY2F1c2UgaXQgZml4ZXMgdGhlIGluZmluaXRlIHJlZnJlc2ggd2l0aCBnYXRzYnkgKHNzcj8pLlxuICAgICAgICAgICAgICAvLyBUQkgsIEknbSBub3Qgc3VyZSBpIGZ1bGx5IHVuZGVyc3RhbmQgd2h5XG4gICAgICAgICAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vc2FnMXYvcmVhY3QtZWxhc3RpYy1jYXJvdXNlbC9pc3N1ZXMvMTA3XG4gICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uU2xpZGVyUmVzaXplKGVudHJ5KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgICBfbG9vcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMucm8ub2JzZXJ2ZShfdGhpcy5zbGlkZXJDb250YWluZXIpO1xuXG4gICAgICBfdGhpcy5yby5vYnNlcnZlKF90aGlzLnNsaWRlcik7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidW5TdWJzY3JpYmVPYnNlcnZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucm8uZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldEF1dG9QbGF5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRnZXREZXJpdmVkUHJvcHMgPSBfdGhpcy5nZXREZXJpdmVkUHJvcHNGcm9tQnJlYWtQb2ludCgpLFxuICAgICAgICAgIGF1dG9QbGF5U3BlZWQgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMuYXV0b1BsYXlTcGVlZDtcblxuICAgICAgX3RoaXMuYXV0b1BsYXlJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbmluZyA9IF90aGlzLnN0YXRlLnRyYW5zaXRpb25pbmc7XG5cbiAgICAgICAgaWYgKCF0cmFuc2l0aW9uaW5nKSB7XG4gICAgICAgICAgX3RoaXMuc2xpZGVOZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGF1dG9QbGF5U3BlZWQpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInJlbW92ZUF1dG9QbGF5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5hdXRvUGxheUludGVydmFsSWQpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChfdGhpcy5hdXRvUGxheUludGVydmFsSWQpO1xuICAgICAgICBfdGhpcy5hdXRvUGxheUludGVydmFsSWQgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldFBhZ2VzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBudW1PZlBhZ2VzID0gX3RoaXMuZ2V0TnVtT2ZQYWdlcygpO1xuXG4gICAgICB2YXIgcGFnZXMgPSBudW1iZXJUb0FycmF5KG51bU9mUGFnZXMpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBhZ2VzOiBwYWdlc1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25TbGlkZXJUcmFuc2l0aW9uRW5kXCIsIGZ1bmN0aW9uIChmbikge1xuICAgICAgX3RoaXMuc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGZuKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZW1vdmVTbGlkZXJUcmFuc2l0aW9uSG9va1wiLCBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIF90aGlzLnNsaWRlci5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBmbik7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ2V0RGVyaXZlZFByb3BzRnJvbUJyZWFrUG9pbnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYnJlYWtQb2ludHMgPSBfdGhpcyRwcm9wcy5icmVha1BvaW50cyxcbiAgICAgICAgICByZXN0T2ZQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfdGhpcyRwcm9wcywgW1wiYnJlYWtQb2ludHNcIl0pO1xuXG4gICAgICB2YXIgc2xpZGVyQ29udGFpbmVyV2lkdGggPSBfdGhpcy5zdGF0ZS5zbGlkZXJDb250YWluZXJXaWR0aDsgLy8gZGVmYXVsdCBicmVha3BvaW50IGZyb20gaW5kaXZpZHVhbCBwcm9wc1xuXG4gICAgICB2YXIgY3VycmVudEJyZWFrUG9pbnQ7IC8vIGlmIGJyZWFrcG9pbnRzIHdlcmUgYWRkZWQgYXMgcHJvcHMgb3ZlcnJpZGUgdGhlIGluZGl2aWR1YWwgcHJvcHNcblxuICAgICAgaWYgKGJyZWFrUG9pbnRzICYmIGJyZWFrUG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY3VycmVudEJyZWFrUG9pbnQgPSBicmVha1BvaW50cy5zbGljZSgpIC8vIG5vIG11dGF0aW9uc1xuICAgICAgICAucmV2ZXJzZSgpIC8vIHNvIHdlIGNhbiBmaW5kIGxhc3QgbWF0Y2hcbiAgICAgICAgLmZpbmQoZnVuY3Rpb24gKGJwKSB7XG4gICAgICAgICAgcmV0dXJuIGJwLndpZHRoIDw9IHNsaWRlckNvbnRhaW5lcldpZHRoO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWN1cnJlbnRCcmVha1BvaW50KSB7XG4gICAgICAgICAgLyogaW4gY2FzZSB3ZSBkb24ndCBoYXZlIGEgbG93ZXIgd2lkdGggdGhhbiBzbGlkZXJDb250YWluZXJXaWR0aFxuICAgICAgICAgICAqIHRoaXMgbW9zdGx5IGhhcHBlbnMgaW4gaW5pdGlsaXphdGlvbiB3aGVuIHNsaWRlckNvbnRhaW5lcldpZHRoIGlzIDBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjdXJyZW50QnJlYWtQb2ludCA9IGJyZWFrUG9pbnRzWzBdO1xuICAgICAgICB9XG4gICAgICB9IC8vIG1lcmdlIGRpcmVjdCBwcm9wcyB3aXRoIGN1cnJlbnQgYnJlYWtwb2ludCBQcm9wc1xuXG5cbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcmVzdE9mUHJvcHMpLCBjdXJyZW50QnJlYWtQb2ludCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidXBkYXRlU2xpZGVyUG9zaXRpb25cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyRnZXREZXJpdmVkUHJvcHMyID0gX3RoaXMuZ2V0RGVyaXZlZFByb3BzRnJvbUJyZWFrUG9pbnQoKSxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkZ2V0RGVyaXZlZFByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICAgIHZlcnRpY2FsTW9kZSA9IF90aGlzJGdldERlcml2ZWRQcm9wczIudmVydGljYWxNb2RlLFxuICAgICAgICAgICAgaXRlbXNUb1Nob3cgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMyLml0ZW1zVG9TaG93LFxuICAgICAgICAgICAgdHJhbnNpdGlvbk1zID0gX3RoaXMkZ2V0RGVyaXZlZFByb3BzMi50cmFuc2l0aW9uTXM7XG5cbiAgICAgICAgdmFyIGNoaWxkSGVpZ2h0ID0gc3RhdGUuY2hpbGRIZWlnaHQsXG4gICAgICAgICAgICBhY3RpdmVJbmRleCA9IHN0YXRlLmFjdGl2ZUluZGV4O1xuXG4gICAgICAgIHZhciBjaGlsZFdpZHRoID0gX3RoaXMuY2FsY3VsYXRlQ2hpbGRXaWR0aCgpO1xuXG4gICAgICAgIHZhciB0b3RhbEl0ZW1zID0gQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikubGVuZ3RoO1xuICAgICAgICB2YXIgaGlkZGVuU2xvdHMgPSB0b3RhbEl0ZW1zIC0gaXRlbXNUb1Nob3c7XG4gICAgICAgIHZhciBtb3ZlQnkgPSBhY3RpdmVJbmRleCAqIC0xO1xuICAgICAgICB2YXIgZW1wdHlTbG90cyA9IGl0ZW1zVG9TaG93IC0gKHRvdGFsSXRlbXMgLSBhY3RpdmVJbmRleCk7XG5cbiAgICAgICAgaWYgKGVtcHR5U2xvdHMgPiAwICYmIGhpZGRlblNsb3RzID4gMCkge1xuICAgICAgICAgIG1vdmVCeSA9IGVtcHR5U2xvdHMgKyBhY3RpdmVJbmRleCAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNsaWRlclBvc2l0aW9uID0gKHZlcnRpY2FsTW9kZSA/IGNoaWxkSGVpZ2h0IDogY2hpbGRXaWR0aCkgKiBtb3ZlQnk7XG4gICAgICAgIHZhciBuZXdBY3RpdmVJbmRleCA9IGVtcHR5U2xvdHMgPiAwID8gYWN0aXZlSW5kZXggLSBlbXB0eVNsb3RzIDogYWN0aXZlSW5kZXg7IC8vIGdvIGJhY2sgZnJvbSAwbXMgdG8gd2hhdGV2ZXIgc2V0IGJ5IHRoZSB1c2VyXG4gICAgICAgIC8vIFdlIHdlcmUgYXQgMG1zIGJlY2F1c2Ugd2Ugd2FudGVkIHRvIGRpc2FibGUgYW5pbWF0aW9uIG9uIHJlc2l6ZVxuICAgICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3NhZzF2L3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwvaXNzdWVzLzk0XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25NczogdHJhbnNpdGlvbk1zXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNsaWRlclBvc2l0aW9uOiBzbGlkZXJQb3NpdGlvbixcbiAgICAgICAgICBhY3RpdmVJbmRleDogbmV3QWN0aXZlSW5kZXggPCAwID8gMCA6IG5ld0FjdGl2ZUluZGV4XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblNsaWRlclJlc2l6ZVwiLCBmdW5jdGlvbiAoc2xpZGVyTm9kZSkge1xuICAgICAgdmFyIF90aGlzJGdldERlcml2ZWRQcm9wczMgPSBfdGhpcy5nZXREZXJpdmVkUHJvcHNGcm9tQnJlYWtQb2ludCgpLFxuICAgICAgICAgIHZlcnRpY2FsTW9kZSA9IF90aGlzJGdldERlcml2ZWRQcm9wczMudmVydGljYWxNb2RlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkZ2V0RGVyaXZlZFByb3BzMy5jaGlsZHJlbixcbiAgICAgICAgICBpdGVtc1RvU2hvdyA9IF90aGlzJGdldERlcml2ZWRQcm9wczMuaXRlbXNUb1Nob3c7XG5cbiAgICAgIHZhciBzbGlkZXJIZWlnaHQgPSBzbGlkZXJOb2RlLmNvbnRlbnRSZWN0LmhlaWdodDtcbiAgICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcbiAgICAgIHZhciBjaGlsZHJlbkxlbmd0aCA9IENoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmxlbmd0aDtcblxuICAgICAgaWYgKHZlcnRpY2FsTW9kZSkge1xuICAgICAgICB2YXIgY2hpbGRIZWlnaHQgPSBzbGlkZXJIZWlnaHQgLyBjaGlsZHJlbkxlbmd0aDsgLy8gV2UgdXNlIE1hdGgubWluIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCB0byBtYWtlIHRoZSBjaGlsZCBzbWFsbGVyXG4gICAgICAgIC8vIGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaXMgc21hbGxlciB0aGFuIGl0ZW1zVG9TaG93LlxuICAgICAgICAvLyAoQmVjYXVzZSB3ZSBkbyBub3Qgd2FudCBcImVtcHR5IHNsb3RzXCIpXG5cbiAgICAgICAgbmV4dFN0YXRlLnJvb3RIZWlnaHQgPSBjaGlsZEhlaWdodCAqIE1hdGgubWluKGNoaWxkcmVuTGVuZ3RoLCBpdGVtc1RvU2hvdyk7XG4gICAgICAgIG5leHRTdGF0ZS5jaGlsZEhlaWdodCA9IGNoaWxkSGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dFN0YXRlLnJvb3RIZWlnaHQgPSBzbGlkZXJIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2FsY3VsYXRlQ2hpbGRXaWR0aFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2xpZGVyQ29udGFpbmVyV2lkdGggPSBfdGhpcy5zdGF0ZS5zbGlkZXJDb250YWluZXJXaWR0aDtcblxuICAgICAgdmFyIF90aGlzJGdldERlcml2ZWRQcm9wczQgPSBfdGhpcy5nZXREZXJpdmVkUHJvcHNGcm9tQnJlYWtQb2ludCgpLFxuICAgICAgICAgIHZlcnRpY2FsTW9kZSA9IF90aGlzJGdldERlcml2ZWRQcm9wczQudmVydGljYWxNb2RlLFxuICAgICAgICAgIGl0ZW1zVG9TaG93ID0gX3RoaXMkZ2V0RGVyaXZlZFByb3BzNC5pdGVtc1RvU2hvdyxcbiAgICAgICAgICBzaG93RW1wdHlTbG90cyA9IF90aGlzJGdldERlcml2ZWRQcm9wczQuc2hvd0VtcHR5U2xvdHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRnZXREZXJpdmVkUHJvcHM0LmNoaWxkcmVuO1xuICAgICAgLyogYmFzZWQgb24gc2xpZGVyIGNvbnRhaW5lcidzIHdpZHRoLCBnZXQgbnVtIG9mIGl0ZW1zIHRvIHNob3dcbiAgICAgICAgICAqIGFuZCBjYWxjdWxhdGUgY2hpbGQncyB3aWR0aCAoYW5kIHVwZGF0ZSBpdCBpbiBzdGF0ZSlcbiAgICAgICAgICAqL1xuXG5cbiAgICAgIHZhciBjaGlsZHJlbkxlbmd0aCA9IENoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmxlbmd0aDtcbiAgICAgIHZhciBjaGlsZFdpZHRoID0gMDtcblxuICAgICAgaWYgKHZlcnRpY2FsTW9kZSkge1xuICAgICAgICBjaGlsZFdpZHRoID0gc2xpZGVyQ29udGFpbmVyV2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXaGVuIFwic2hvd0VtcHR5U2xvdHNcIiBpcyBmYWxzZVxuICAgICAgICAvLyBXZSB1c2UgTWF0aC5taW4gYmVjYXVzZSB3ZSBkb24ndCB3YW50IHRvIG1ha2UgdGhlIGNoaWxkIHNtYWxsZXJcbiAgICAgICAgLy8gaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBpcyBzbWFsbGVyIHRoYW4gaXRlbXNUb1Nob3cuXG4gICAgICAgIC8vIChCZWNhdXNlIHdlIGRvIG5vdCB3YW50IFwiZW1wdHkgc2xvdHNcIilcbiAgICAgICAgY2hpbGRXaWR0aCA9IHNsaWRlckNvbnRhaW5lcldpZHRoIC8gKHNob3dFbXB0eVNsb3RzID8gaXRlbXNUb1Nob3cgOiBNYXRoLm1pbihjaGlsZHJlbkxlbmd0aCwgaXRlbXNUb1Nob3cpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoaWxkV2lkdGg7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Db250YWluZXJSZXNpemVcIiwgZnVuY3Rpb24gKHNsaWRlckNvbnRhaW5lck5vZGUpIHtcbiAgICAgIHZhciBuZXdTbGlkZXJDb250YWluZXJXaWR0aCA9IHNsaWRlckNvbnRhaW5lck5vZGUuY29udGVudFJlY3Qud2lkdGg7IC8vIHVwZGF0ZSBzbGlkZXIgY29udGFpbmVyIHdpZHRoXG4gICAgICAvLyBkaXNhYmxlIGFuaW1hdGlvbiBvbiByZXNpemUgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zYWcxdi9yZWFjdC1lbGFzdGljLWNhcm91c2VsL2lzc3Vlcy85NFxuXG4gICAgICB2YXIgX3RoaXMkZ2V0RGVyaXZlZFByb3BzNSA9IF90aGlzLmdldERlcml2ZWRQcm9wc0Zyb21CcmVha1BvaW50KCksXG4gICAgICAgICAgb3V0ZXJTcGFjaW5nID0gX3RoaXMkZ2V0RGVyaXZlZFByb3BzNS5vdXRlclNwYWNpbmcsXG4gICAgICAgICAgaW5pdGlhbFZlcnRpY2FsTW9kZSA9IF90aGlzJGdldERlcml2ZWRQcm9wczUudmVydGljYWxNb2RlO1xuXG4gICAgICB2YXIgY29udGFpbmVyV2lkdGggPSBuZXdTbGlkZXJDb250YWluZXJXaWR0aCAtIChpbml0aWFsVmVydGljYWxNb2RlID8gMCA6IG91dGVyU3BhY2luZyAqIDIpO1xuXG4gICAgICBpZiAoX3RoaXMuc3RhdGUuc2xpZGVyQ29udGFpbmVyV2lkdGggPT09IG5ld1NsaWRlckNvbnRhaW5lcldpZHRoKSB7XG4gICAgICAgIC8vIHByZXZlbnQgaW5maW5pdGUgbG9vcFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2xpZGVyQ29udGFpbmVyV2lkdGg6IGNvbnRhaW5lcldpZHRoLFxuICAgICAgICB0cmFuc2l0aW9uTXM6IDBcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gd2UgbXVzdCBnZXQgdGhlc2UgcHJvcHMgaW5zaWRlIHNldFN0YXRlIChnZXQgZnV0dXJlIHByb3BzIGJlY2F1c2UgaXRzIGFzeW5jKVxuICAgICAgICB2YXIgX3RoaXMkZ2V0RGVyaXZlZFByb3BzNiA9IF90aGlzLmdldERlcml2ZWRQcm9wc0Zyb21CcmVha1BvaW50KCksXG4gICAgICAgICAgICBvblJlc2l6ZSA9IF90aGlzJGdldERlcml2ZWRQcm9wczYub25SZXNpemUsXG4gICAgICAgICAgICBpdGVtc1RvU2hvdyA9IF90aGlzJGdldERlcml2ZWRQcm9wczYuaXRlbXNUb1Nob3csXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJGdldERlcml2ZWRQcm9wczYuY2hpbGRyZW47XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikubGVuZ3RoO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChjdXJyZW50U3RhdGUpIHtcbiAgICAgICAgICAvLyBXZSBtaWdodCBuZWVkIHRvIGNoYW5nZSB0aGUgc2VsZWN0ZWQgaW5kZXggd2hlbiB0aGUgc2l6ZSBvZiB0aGUgY29udGFpbmVyIGNoYW5nZXNcbiAgICAgICAgICAvLyB3ZSBhcmUgbWFraW5nIHN1cmUgdGhlIHNlbGVjdGVkIGluZGV4IGlzIG5vdCBvdXQgb2YgYm91bmRhcmllcyBhbmQgcmVzcGVjdGluZyBpdGVtc1RvU2hvd1xuICAgICAgICAgIC8vIFRoaXMgdXN1YWxseSBoYXBwZW5zIHdpdGggYnJlYWtwb2ludHMuIHNlZSBodHRwczovL2dpdGh1Yi5jb20vc2FnMXYvcmVhY3QtZWxhc3RpYy1jYXJvdXNlbC9pc3N1ZXMvMTIyXG4gICAgICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gY3VycmVudFN0YXRlLmFjdGl2ZUluZGV4OyAvLyB3ZSB0YWtlIHRoZSBsb3dlc3QsIGluIGNhc2UgaXRlbXNUb1Nob3cgaXMgZ3JlYXRlciB0aGFuIGNoaWxkcmVuTGVuZ3RoXG5cbiAgICAgICAgICB2YXIgbWF4SXRlbXNUb1Nob3cgPSBNYXRoLm1pbihjaGlsZHJlbkxlbmd0aCwgaXRlbXNUb1Nob3cpO1xuICAgICAgICAgIHZhciBlbmRMaW1pdCA9IGNoaWxkcmVuTGVuZ3RoIC0gbWF4SXRlbXNUb1Nob3c7XG5cbiAgICAgICAgICBpZiAoYWN0aXZlSW5kZXggPiBlbmRMaW1pdCkge1xuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBlbmRMaW1pdDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4XG4gICAgICAgICAgfTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8qIEJhc2VkIG9uIGFsbCBvZiB0aGUgYWJvdmUgbmV3IGRhdGE6XG4gICAgICAgICAgKiB1cGRhdGUgc2xpZGVyIHBvc2l0aW9uXG4gICAgICAgICAgKiBnZXQgdGhlIG5ldyBjdXJyZW50IGJyZWFrcG9pbnRcbiAgICAgICAgICAqIHBhc3MgdGhlIGN1cnJlbnQgYnJlYWtwb2ludCB0byB0aGUgY29uc3VtZXIncyBjYWxsYmFja1xuICAgICAgICAgICovXG4gICAgICAgICAgX3RoaXMudXBkYXRlU2xpZGVyUG9zaXRpb24oKTtcblxuICAgICAgICAgIHZhciBjdXJyZW50QnJlYWtQb2ludCA9IF90aGlzLmdldERlcml2ZWRQcm9wc0Zyb21CcmVha1BvaW50KCk7XG5cbiAgICAgICAgICBvblJlc2l6ZShjdXJyZW50QnJlYWtQb2ludCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidGlsdE1vdmVtZW50XCIsIGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgICAgdmFyIGRpc3RhbmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAyMDtcbiAgICAgIHZhciBkdXJhdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMTUwO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpc1N3aXBpbmc6IHRydWUsXG4gICAgICAgICAgc3dpcGVkU2xpZGVyUG9zaXRpb246IHBvc2l0aW9uIC0gZGlzdGFuY2VcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzU3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgc3dpcGVkU2xpZGVyUG9zaXRpb246IDBcbiAgICAgICAgfSk7XG4gICAgICB9LCBkdXJhdGlvbik7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY29udmVydENoaWxkVG9DYk9ialwiLCBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHZhciBfdGhpcyRnZXREZXJpdmVkUHJvcHM3ID0gX3RoaXMuZ2V0RGVyaXZlZFByb3BzRnJvbUJyZWFrUG9pbnQoKSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJGdldERlcml2ZWRQcm9wczcuY2hpbGRyZW47IC8vIHN1cHBvcnQgZGVjaW1hbCBpdGVtc1RvU2hvd1xuXG5cbiAgICAgIHZhciByb3VuZGVkSWR4ID0gTWF0aC5yb3VuZChpbmRleCk7XG4gICAgICB2YXIgY2hpbGQgPSBDaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKVtyb3VuZGVkSWR4XTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW06IGNoaWxkLnByb3BzLFxuICAgICAgICBpbmRleDogcm91bmRlZElkeFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJnZXROZXh0SXRlbUluZGV4XCIsIGZ1bmN0aW9uIChjdXJyZW50SW5kZXgsIGdldFByZXYpIHtcbiAgICAgIHZhciBfdGhpcyRnZXREZXJpdmVkUHJvcHM4ID0gX3RoaXMuZ2V0RGVyaXZlZFByb3BzRnJvbUJyZWFrUG9pbnQoKSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJGdldERlcml2ZWRQcm9wczguY2hpbGRyZW4sXG4gICAgICAgICAgaXRlbXNUb1Nob3cgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHM4Lml0ZW1zVG9TaG93LFxuICAgICAgICAgIGl0ZW1zVG9TY3JvbGwgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHM4Lml0ZW1zVG9TY3JvbGw7XG5cbiAgICAgIHZhciBjaGlsZHJlbkxlbmd0aCA9IENoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmxlbmd0aDtcbiAgICAgIHZhciBub3RFbm91Z2hJdGVtc1RvU2hvdyA9IGl0ZW1zVG9TaG93ID4gY2hpbGRyZW5MZW5ndGg7XG4gICAgICB2YXIgbGltaXQgPSBnZXRQcmV2ID8gMCA6IGNoaWxkcmVuTGVuZ3RoIC0gaXRlbXNUb1Nob3c7XG5cbiAgICAgIGlmIChub3RFbm91Z2hJdGVtc1RvU2hvdykge1xuICAgICAgICBsaW1pdCA9IDA7IC8vIGJhc2ljYWxseSBkb24ndCBtb3ZlXG4gICAgICB9XG5cbiAgICAgIHZhciBuZXh0QWN0aW9uID0gZ2V0UHJldiA/IHByZXZJdGVtQWN0aW9uKDAsIGl0ZW1zVG9TY3JvbGwpIDogbmV4dEl0ZW1BY3Rpb24obGltaXQsIGl0ZW1zVG9TY3JvbGwpO1xuICAgICAgdmFyIG5leHRJdGVtID0gYWN0aXZlSW5kZXhSZWR1Y2VyKGN1cnJlbnRJbmRleCwgbmV4dEFjdGlvbik7XG4gICAgICByZXR1cm4gbmV4dEl0ZW07XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ2V0TmV4dEl0ZW1PYmpcIiwgZnVuY3Rpb24gKGdldFByZXYpIHtcbiAgICAgIHZhciBfdGhpcyRnZXREZXJpdmVkUHJvcHM5ID0gX3RoaXMuZ2V0RGVyaXZlZFByb3BzRnJvbUJyZWFrUG9pbnQoKSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJGdldERlcml2ZWRQcm9wczkuY2hpbGRyZW47XG5cbiAgICAgIHZhciBhY3RpdmVJbmRleCA9IF90aGlzLnN0YXRlLmFjdGl2ZUluZGV4O1xuXG4gICAgICB2YXIgbmV4dEl0ZW1JbmRleCA9IF90aGlzLmdldE5leHRJdGVtSW5kZXgoYWN0aXZlSW5kZXgsIGdldFByZXYpOyAvLyBzdXBwb3J0IGRlY2ltYWwgaXRlbXNUb1Nob3dcblxuXG4gICAgICB2YXIgcm91bmRlZElkeCA9IE1hdGgucm91bmQobmV4dEl0ZW1JbmRleCk7XG4gICAgICB2YXIgYXNFbGVtZW50ID0gQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbilbcm91bmRlZElkeF07XG4gICAgICB2YXIgYXNPYmogPSB7XG4gICAgICAgIGl0ZW06IGFzRWxlbWVudC5wcm9wcyxcbiAgICAgICAgaW5kZXg6IHJvdW5kZWRJZHhcbiAgICAgIH07XG4gICAgICByZXR1cm4gYXNPYmo7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVzZXRTd2lwZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN3aXBlZFNsaWRlclBvc2l0aW9uOiAwLFxuICAgICAgICB0cmFuc2l0aW9uaW5nOiBmYWxzZSxcbiAgICAgICAgaXNTd2lwaW5nOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Td2lwaW5nXCIsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB2YXIgZGVsdGFYID0gZGF0YS5kZWx0YVgsXG4gICAgICAgICAgYWJzWCA9IGRhdGEuYWJzWCxcbiAgICAgICAgICBkZWx0YVkgPSBkYXRhLmRlbHRhWSxcbiAgICAgICAgICBhYnNZID0gZGF0YS5hYnNZLFxuICAgICAgICAgIGRpciA9IGRhdGEuZGlyO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGNoaWxkSGVpZ2h0ID0gc3RhdGUuY2hpbGRIZWlnaHQsXG4gICAgICAgICAgICBhY3RpdmVJbmRleCA9IHN0YXRlLmFjdGl2ZUluZGV4LFxuICAgICAgICAgICAgc2xpZGVyUG9zaXRpb24gPSBzdGF0ZS5zbGlkZXJQb3NpdGlvbjtcblxuICAgICAgICB2YXIgX3RoaXMkZ2V0RGVyaXZlZFByb3BzMTAgPSBfdGhpcy5nZXREZXJpdmVkUHJvcHNGcm9tQnJlYWtQb2ludCgpLFxuICAgICAgICAgICAgaXRlbXNUb1Nob3cgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMxMC5pdGVtc1RvU2hvdyxcbiAgICAgICAgICAgIHZlcnRpY2FsTW9kZSA9IF90aGlzJGdldERlcml2ZWRQcm9wczEwLnZlcnRpY2FsTW9kZSxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkZ2V0RGVyaXZlZFByb3BzMTAuY2hpbGRyZW4sXG4gICAgICAgICAgICBpc1JUTCA9IF90aGlzJGdldERlcml2ZWRQcm9wczEwLmlzUlRMO1xuXG4gICAgICAgIHZhciBjaGlsZFdpZHRoID0gX3RoaXMuY2FsY3VsYXRlQ2hpbGRXaWR0aCgpOyAvLyBkZXRlcm1pbmUgaG93IGZhciBjYW4gdXNlciBzd2lwZVxuXG5cbiAgICAgICAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikubGVuZ3RoO1xuICAgICAgICB2YXIgZ29pbmdOZXh0ID0gIXZlcnRpY2FsTW9kZSAmJiBkaXIgPT09IFwiTGVmdFwiICYmICFpc1JUTCB8fCAhdmVydGljYWxNb2RlICYmIGRpciA9PT0gXCJSaWdodFwiICYmIGlzUlRMIHx8IHZlcnRpY2FsTW9kZSAmJiBkaXIgPT09IFwiVXBcIjtcbiAgICAgICAgdmFyIGdvaW5nQmFjayA9ICF2ZXJ0aWNhbE1vZGUgJiYgZGlyID09PSBcIlJpZ2h0XCIgJiYgIWlzUlRMIHx8ICF2ZXJ0aWNhbE1vZGUgJiYgZGlyID09PSBcIkxlZnRcIiAmJiBpc1JUTCB8fCB2ZXJ0aWNhbE1vZGUgJiYgZGlyID09PSBcIkRvd25cIjtcbiAgICAgICAgdmFyIGhvcml6b250YWxTd2lwZSA9IGRpciA9PT0gXCJMZWZ0XCIgfHwgZGlyID09PSBcIlJpZ2h0XCI7XG4gICAgICAgIHZhciB2ZXJ0aWNhbFN3aXBlID0gZGlyID09PSBcIlVwXCIgfHwgZGlyID09PSBcIkRvd25cIjtcbiAgICAgICAgdmFyIGhvcml6b250YWxNb2RlID0gIXZlcnRpY2FsTW9kZTtcbiAgICAgICAgdmFyIGRpc3RhbmNlU3dpcGUgPSAwO1xuICAgICAgICB2YXIgaG9yaXpvbnRhbEVkZ2VTdG9wcGFnZSA9IGNoaWxkV2lkdGggLyAyO1xuICAgICAgICB2YXIgdmVydGljYWxFZGdlU3RvcHBhZ2UgPSBjaGlsZEhlaWdodCAvIDI7XG5cbiAgICAgICAgaWYgKHZlcnRpY2FsTW9kZSkge1xuICAgICAgICAgIGlmICh2ZXJ0aWNhbFN3aXBlKSB7XG4gICAgICAgICAgICB2YXIgdHJhY2tTaXplID0gY2hpbGRyZW5MZW5ndGggKiBjaGlsZEhlaWdodDtcblxuICAgICAgICAgICAgaWYgKGdvaW5nTmV4dCkge1xuICAgICAgICAgICAgICBkaXN0YW5jZVN3aXBlID0gdHJhY2tTaXplIC0gY2hpbGRIZWlnaHQgKiBhY3RpdmVJbmRleCAtIGl0ZW1zVG9TaG93ICogY2hpbGRIZWlnaHQgKyB2ZXJ0aWNhbEVkZ2VTdG9wcGFnZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ29pbmdCYWNrKSB7XG4gICAgICAgICAgICAgIGRpc3RhbmNlU3dpcGUgPSBjaGlsZEhlaWdodCAqIGFjdGl2ZUluZGV4ICsgdmVydGljYWxFZGdlU3RvcHBhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChob3Jpem9udGFsU3dpcGUpIHtcbiAgICAgICAgICAgIHZhciBfdHJhY2tTaXplID0gY2hpbGRyZW5MZW5ndGggKiBjaGlsZFdpZHRoO1xuXG4gICAgICAgICAgICBpZiAoZ29pbmdOZXh0KSB7XG4gICAgICAgICAgICAgIGRpc3RhbmNlU3dpcGUgPSBfdHJhY2tTaXplIC0gY2hpbGRXaWR0aCAqIGFjdGl2ZUluZGV4IC0gaXRlbXNUb1Nob3cgKiBjaGlsZFdpZHRoICsgaG9yaXpvbnRhbEVkZ2VTdG9wcGFnZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ29pbmdCYWNrKSB7XG4gICAgICAgICAgICAgIGRpc3RhbmNlU3dpcGUgPSBjaGlsZFdpZHRoICogYWN0aXZlSW5kZXggKyBob3Jpem9udGFsRWRnZVN0b3BwYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzaG91bGRIb3Jpem9udGFsU2tpcFVwZGF0ZSA9IGhvcml6b250YWxNb2RlICYmIHZlcnRpY2FsU3dpcGUgfHwgaG9yaXpvbnRhbE1vZGUgJiYgaG9yaXpvbnRhbFN3aXBlICYmIGFic1ggPiBkaXN0YW5jZVN3aXBlO1xuICAgICAgICB2YXIgc2hvdWxkVmVydGljYWxTa2lwVXBkYXRlID0gdmVydGljYWxNb2RlICYmIGhvcml6b250YWxTd2lwZSB8fCB2ZXJ0aWNhbE1vZGUgJiYgdmVydGljYWxTd2lwZSAmJiBhYnNZID4gZGlzdGFuY2VTd2lwZTtcblxuICAgICAgICBpZiAoc2hvdWxkSG9yaXpvbnRhbFNraXBVcGRhdGUgfHwgc2hvdWxkVmVydGljYWxTa2lwVXBkYXRlKSB7XG4gICAgICAgICAgLy8gYmFpbCBvdXQgb2Ygc3RhdGUgdXBkYXRlXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN3aXBlZFNsaWRlclBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChob3Jpem9udGFsU3dpcGUpIHtcbiAgICAgICAgICBpZiAoaXNSVEwpIHtcbiAgICAgICAgICAgIHN3aXBlZFNsaWRlclBvc2l0aW9uID0gc2xpZGVyUG9zaXRpb24gKyBkZWx0YVg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN3aXBlZFNsaWRlclBvc2l0aW9uID0gc2xpZGVyUG9zaXRpb24gLSBkZWx0YVg7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlZFNsaWRlclBvc2l0aW9uID0gc2xpZGVyUG9zaXRpb24gLSBkZWx0YVk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN3aXBlZFNsaWRlclBvc2l0aW9uOiBzd2lwZWRTbGlkZXJQb3NpdGlvbixcbiAgICAgICAgICBpc1N3aXBpbmc6IHRydWUsXG4gICAgICAgICAgdHJhbnNpdGlvbmluZzogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Td2lwZWRcIiwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIC8vIHdlIG5lZWQgdG8gaGFuZGxlIGFsbCBzY2VuYXJpb3M6XG4gICAgICAvLyAxLiBIb3Jpem9udGFsIG1vZGUgLSBzd2lwZSBsZWZ0IG9yIHJpZ2h0XG4gICAgICAvLyAyLiBIb3Jpem9udGFsIG1vZGUgd2l0aCBSVEwgLSBzd2lwZSBsZWZ0IG9yIHJpZ2h0XG4gICAgICAvLyAzLiB2ZXJ0aWNhbCBtb2RlIC0gc3dpcGUgdXAgb3IgZG93blxuICAgICAgdmFyIGFic1ggPSBkYXRhLmFic1gsXG4gICAgICAgICAgYWJzWSA9IGRhdGEuYWJzWSxcbiAgICAgICAgICBkaXIgPSBkYXRhLmRpcjtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgIGNoaWxkSGVpZ2h0ID0gX3RoaXMkc3RhdGUuY2hpbGRIZWlnaHQsXG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBfdGhpcyRzdGF0ZS5hY3RpdmVJbmRleDtcblxuICAgICAgdmFyIF90aGlzJGdldERlcml2ZWRQcm9wczExID0gX3RoaXMuZ2V0RGVyaXZlZFByb3BzRnJvbUJyZWFrUG9pbnQoKSxcbiAgICAgICAgICB2ZXJ0aWNhbE1vZGUgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMxMS52ZXJ0aWNhbE1vZGUsXG4gICAgICAgICAgaXNSVEwgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMxMS5pc1JUTCxcbiAgICAgICAgICBpdGVtc1RvU2Nyb2xsID0gX3RoaXMkZ2V0RGVyaXZlZFByb3BzMTEuaXRlbXNUb1Njcm9sbDtcblxuICAgICAgdmFyIGNoaWxkV2lkdGggPSBfdGhpcy5jYWxjdWxhdGVDaGlsZFdpZHRoKCk7XG5cbiAgICAgIHZhciBmdW5jID0gX3RoaXMucmVzZXRTd2lwZTtcbiAgICAgIHZhciBtaW5Td2lwZURpc3RhbmNlSG9yaXpvbnRhbCA9IGNoaWxkV2lkdGggLyA1O1xuICAgICAgdmFyIG1pblN3aXBlRGlzdGFuY2VWZXJ0aWNhbCA9IGNoaWxkSGVpZ2h0IC8gNTtcbiAgICAgIHZhciBzd2lwZWRMZWZ0ID0gZGlyID09PSBcIkxlZnRcIjtcbiAgICAgIHZhciBzd2lwZWRSaWdodCA9IGRpciA9PT0gXCJSaWdodFwiO1xuICAgICAgdmFyIHN3aXBlZFVwID0gZGlyID09PSBcIlVwXCI7XG4gICAgICB2YXIgc3dpcGVkRG93biA9IGRpciA9PT0gXCJEb3duXCI7XG4gICAgICB2YXIgdmVydGljYWxHb1N3aXBlID0gdmVydGljYWxNb2RlICYmIChzd2lwZWRVcCB8fCBzd2lwZWREb3duKSAmJiBhYnNZID4gbWluU3dpcGVEaXN0YW5jZVZlcnRpY2FsO1xuICAgICAgdmFyIGhvcml6b250YWxHb1N3aXBlID0gIXZlcnRpY2FsTW9kZSAmJiAoc3dpcGVkUmlnaHQgfHwgc3dpcGVkTGVmdCkgJiYgYWJzWCA+IG1pblN3aXBlRGlzdGFuY2VIb3Jpem9udGFsO1xuICAgICAgdmFyIGdvb2RUb0dvID0gZmFsc2U7XG5cbiAgICAgIGlmICh2ZXJ0aWNhbEdvU3dpcGUgfHwgaG9yaXpvbnRhbEdvU3dpcGUpIHtcbiAgICAgICAgZ29vZFRvR28gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZ29vZFRvR28pIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkIGdvIHRvIGEgZGlmZmVyZW50IGl0ZW1cbiAgICAgICAgLy8gZGV0ZXJtaW5lIHdoYXQgbWV0aG9kIHdlIG5lZWQgdG8gaW52b2tlXG4gICAgICAgIGlmICh2ZXJ0aWNhbE1vZGUpIHtcbiAgICAgICAgICAvLyBnZXQgbnVtYmVyIG9mIHNsaWRlcyBmcm9tIHVzZXIncyBzd2lwaW5nXG4gICAgICAgICAgdmFyIG51bWJlck9mU2xpZGVzVmlhU3dpcGUgPSBNYXRoLmNlaWwoKGFic1kgLSBtaW5Td2lwZURpc3RhbmNlVmVydGljYWwpIC8gY2hpbGRIZWlnaHQpOyAvLyBpZiB1c2VyIHN3aXBlcyBtb3JlIHRoYW4gaXRlbXNUb1Njcm9sbCB0aGVuIHdlIHdhbnQgdG8gYnlwYXNzIGl0ZW1zVG9TY3JvbGwgZm9yIGEgc21vb3RoZXIgc2Nyb2xsXG5cbiAgICAgICAgICB2YXIgbnVtYmVyT2ZTbGlkZXNUb2dvID0gTWF0aC5tYXgoaXRlbXNUb1Njcm9sbCwgbnVtYmVyT2ZTbGlkZXNWaWFTd2lwZSk7XG4gICAgICAgICAgdmFyIGJhY2tTbGlkZXNUb0dvID0gYWN0aXZlSW5kZXggLSBudW1iZXJPZlNsaWRlc1RvZ287XG4gICAgICAgICAgdmFyIGZvcndhcmRTbGlkZVR0b0dvID0gYWN0aXZlSW5kZXggKyBudW1iZXJPZlNsaWRlc1RvZ287IC8vIHVwIG9yIGRvd25cblxuICAgICAgICAgIGlmIChzd2lwZWREb3duKSB7XG4gICAgICAgICAgICAvLyBmdW5jID0gdGhpcy5vblByZXZTdGFydDtcbiAgICAgICAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZ29UbyhiYWNrU2xpZGVzVG9Hbyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzd2lwZWRVcCkge1xuICAgICAgICAgICAgLy8gZnVuYyA9IHRoaXMub25OZXh0U3RhcnQ7XG4gICAgICAgICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYygpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmdvVG8oZm9yd2FyZFNsaWRlVHRvR28pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZ2V0IG51bWJlciBvZiBzbGlkZXMgZnJvbSB1c2VyJ3Mgc3dpcGluZ1xuICAgICAgICAgIHZhciBfbnVtYmVyT2ZTbGlkZXNWaWFTd2lwZSA9IE1hdGguY2VpbCgoYWJzWCAtIG1pblN3aXBlRGlzdGFuY2VIb3Jpem9udGFsKSAvIGNoaWxkV2lkdGgpOyAvLyBpZiB1c2VyIHN3aXBlcyBtb3JlIHRoYW4gaXRlbXNUb1Njcm9sbCB0aGVuIHdlIHdhbnQgdG8gYnlwYXNzIGl0ZW1zVG9TY3JvbGwgZm9yIGEgc21vb3RoZXIgc2Nyb2xsXG5cblxuICAgICAgICAgIHZhciBfbnVtYmVyT2ZTbGlkZXNUb2dvID0gTWF0aC5tYXgoaXRlbXNUb1Njcm9sbCwgX251bWJlck9mU2xpZGVzVmlhU3dpcGUpO1xuXG4gICAgICAgICAgdmFyIF9iYWNrU2xpZGVzVG9HbyA9IGFjdGl2ZUluZGV4IC0gX251bWJlck9mU2xpZGVzVG9nbztcblxuICAgICAgICAgIHZhciBfZm9yd2FyZFNsaWRlVHRvR28gPSBhY3RpdmVJbmRleCArIF9udW1iZXJPZlNsaWRlc1RvZ287IC8vIGhvcml6b250YWwgbW9kZVxuXG5cbiAgICAgICAgICBpZiAoaXNSVEwpIHtcbiAgICAgICAgICAgIC8vIGZsaXAgc2lkZXNcbiAgICAgICAgICAgIGlmIChzd2lwZWRMZWZ0KSB7XG4gICAgICAgICAgICAgIC8vIGZ1bmMgPSB0aGlzLm9uUHJldlN0YXJ0O1xuICAgICAgICAgICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZ29UbyhfYmFja1NsaWRlc1RvR28pO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3dpcGVkUmlnaHQpIHtcbiAgICAgICAgICAgICAgLy8gZnVuYyA9IHRoaXMub25OZXh0U3RhcnQ7XG4gICAgICAgICAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5nb1RvKF9mb3J3YXJkU2xpZGVUdG9Hbyk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vcm1hbCBiZWhhdmlvclxuICAgICAgICAgICAgaWYgKHN3aXBlZExlZnQpIHtcbiAgICAgICAgICAgICAgLy8gZnVuYyA9IHRoaXMub25OZXh0U3RhcnQ7XG4gICAgICAgICAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5nb1RvKF9mb3J3YXJkU2xpZGVUdG9Hbyk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzd2lwZWRSaWdodCkge1xuICAgICAgICAgICAgICAvLyBmdW5jID0gdGhpcy5vblByZXZTdGFydDtcbiAgICAgICAgICAgICAgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmdvVG8oX2JhY2tTbGlkZXNUb0dvKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gd2UgYXJlIG5vdCBcInRpbHRpbmdcIiBvbiBlZGdlcywgc28gd2UgbmVlZCB0byByZXNldCBpc1N3aXBpbmcgYW5kIHRyYW5zaXRpb25pbmcuXG4gICAgICAvLyBvdGhlcndpc2Ugd2Ugd29udCBzbGlkZSBiYWNrIHRvIGVkZ2VcblxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzU3dpcGluZzogZmFsc2UsXG4gICAgICAgIHRyYW5zaXRpb25pbmc6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgZnVuYyh7XG4gICAgICAgIHNraXBUaWx0OiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbk5leHRTdGFydFwiLCBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIF90aGlzJGdldERlcml2ZWRQcm9wczEyID0gX3RoaXMuZ2V0RGVyaXZlZFByb3BzRnJvbUJyZWFrUG9pbnQoKSxcbiAgICAgICAgICBvbk5leHRTdGFydCA9IF90aGlzJGdldERlcml2ZWRQcm9wczEyLm9uTmV4dFN0YXJ0O1xuXG4gICAgICB2YXIgYWN0aXZlSW5kZXggPSBfdGhpcy5zdGF0ZS5hY3RpdmVJbmRleDtcblxuICAgICAgdmFyIG5leHRJdGVtT2JqID0gX3RoaXMuZ2V0TmV4dEl0ZW1PYmooKTtcblxuICAgICAgdmFyIHByZXZJdGVtT2JqID0gX3RoaXMuY29udmVydENoaWxkVG9DYk9iaihhY3RpdmVJbmRleCk7XG5cbiAgICAgIG9uTmV4dFN0YXJ0KHByZXZJdGVtT2JqLCBuZXh0SXRlbU9iaik7XG5cbiAgICAgIF90aGlzLnNsaWRlTmV4dChvcHRpb25zKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblByZXZTdGFydFwiLCBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIF90aGlzJGdldERlcml2ZWRQcm9wczEzID0gX3RoaXMuZ2V0RGVyaXZlZFByb3BzRnJvbUJyZWFrUG9pbnQoKSxcbiAgICAgICAgICBvblByZXZTdGFydCA9IF90aGlzJGdldERlcml2ZWRQcm9wczEzLm9uUHJldlN0YXJ0O1xuXG4gICAgICB2YXIgYWN0aXZlSW5kZXggPSBfdGhpcy5zdGF0ZS5hY3RpdmVJbmRleDtcblxuICAgICAgdmFyIG5leHRJdGVtT2JqID0gX3RoaXMuZ2V0TmV4dEl0ZW1PYmoodHJ1ZSk7XG5cbiAgICAgIHZhciBwcmV2SXRlbU9iaiA9IF90aGlzLmNvbnZlcnRDaGlsZFRvQ2JPYmooYWN0aXZlSW5kZXgpO1xuXG4gICAgICBvblByZXZTdGFydChwcmV2SXRlbU9iaiwgbmV4dEl0ZW1PYmopO1xuXG4gICAgICBfdGhpcy5zbGlkZVByZXYob3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2xpZGVOZXh0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIHZhciBza2lwVGlsdCA9IG9wdGlvbnMuc2tpcFRpbHQ7XG5cbiAgICAgIHZhciBfdGhpcyRnZXREZXJpdmVkUHJvcHMxNCA9IF90aGlzLmdldERlcml2ZWRQcm9wc0Zyb21CcmVha1BvaW50KCksXG4gICAgICAgICAgZW5hYmxlVGlsdCA9IF90aGlzJGdldERlcml2ZWRQcm9wczE0LmVuYWJsZVRpbHQ7XG5cbiAgICAgIHZhciBfdGhpcyRzdGF0ZTIgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IF90aGlzJHN0YXRlMi5hY3RpdmVJbmRleCxcbiAgICAgICAgICBzbGlkZXJQb3NpdGlvbiA9IF90aGlzJHN0YXRlMi5zbGlkZXJQb3NpdGlvbjtcblxuICAgICAgdmFyIG5leHRJdGVtID0gX3RoaXMuZ2V0TmV4dEl0ZW1JbmRleChhY3RpdmVJbmRleCwgZmFsc2UpO1xuXG4gICAgICBpZiAoYWN0aXZlSW5kZXggIT09IG5leHRJdGVtKSB7XG4gICAgICAgIF90aGlzLmdvVG8obmV4dEl0ZW0pO1xuICAgICAgfSBlbHNlIGlmIChlbmFibGVUaWx0ICYmICFza2lwVGlsdCkge1xuICAgICAgICBfdGhpcy50aWx0TW92ZW1lbnQoc2xpZGVyUG9zaXRpb24sIDIwLCAxNTApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNsaWRlUHJldlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICB2YXIgc2tpcFRpbHQgPSBvcHRpb25zLnNraXBUaWx0O1xuICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gX3RoaXMuc3RhdGUuYWN0aXZlSW5kZXg7XG5cbiAgICAgIHZhciBfdGhpcyRnZXREZXJpdmVkUHJvcHMxNSA9IF90aGlzLmdldERlcml2ZWRQcm9wc0Zyb21CcmVha1BvaW50KCksXG4gICAgICAgICAgZW5hYmxlVGlsdCA9IF90aGlzJGdldERlcml2ZWRQcm9wczE1LmVuYWJsZVRpbHQ7XG5cbiAgICAgIHZhciBwcmV2SXRlbSA9IF90aGlzLmdldE5leHRJdGVtSW5kZXgoYWN0aXZlSW5kZXgsIHRydWUpO1xuXG4gICAgICBpZiAoYWN0aXZlSW5kZXggIT09IHByZXZJdGVtKSB7XG4gICAgICAgIF90aGlzLmdvVG8ocHJldkl0ZW0pO1xuICAgICAgfSBlbHNlIGlmIChlbmFibGVUaWx0ICYmICFza2lwVGlsdCkge1xuICAgICAgICBfdGhpcy50aWx0TW92ZW1lbnQoMCwgLTIwLCAxNTApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uTmV4dEVuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0RGVyaXZlZFByb3BzMTYgPSBfdGhpcy5nZXREZXJpdmVkUHJvcHNGcm9tQnJlYWtQb2ludCgpLFxuICAgICAgICAgIG9uTmV4dEVuZCA9IF90aGlzJGdldERlcml2ZWRQcm9wczE2Lm9uTmV4dEVuZCxcbiAgICAgICAgICBvbkNoYW5nZSA9IF90aGlzJGdldERlcml2ZWRQcm9wczE2Lm9uQ2hhbmdlO1xuXG4gICAgICB2YXIgX3RoaXMkc3RhdGUzID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBfdGhpcyRzdGF0ZTMuYWN0aXZlSW5kZXgsXG4gICAgICAgICAgYWN0aXZlUGFnZSA9IF90aGlzJHN0YXRlMy5hY3RpdmVQYWdlO1xuXG4gICAgICB2YXIgbmV4dEl0ZW1PYmogPSBfdGhpcy5jb252ZXJ0Q2hpbGRUb0NiT2JqKGFjdGl2ZUluZGV4KTtcblxuICAgICAgX3RoaXMucmVtb3ZlU2xpZGVyVHJhbnNpdGlvbkhvb2soX3RoaXMub25OZXh0RW5kKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0cmFuc2l0aW9uaW5nOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKG5leHRJdGVtT2JqLCBhY3RpdmVQYWdlKTtcbiAgICAgIG9uTmV4dEVuZChuZXh0SXRlbU9iaiwgYWN0aXZlUGFnZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25QcmV2RW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRnZXREZXJpdmVkUHJvcHMxNyA9IF90aGlzLmdldERlcml2ZWRQcm9wc0Zyb21CcmVha1BvaW50KCksXG4gICAgICAgICAgb25QcmV2RW5kID0gX3RoaXMkZ2V0RGVyaXZlZFByb3BzMTcub25QcmV2RW5kLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkZ2V0RGVyaXZlZFByb3BzMTcub25DaGFuZ2U7XG5cbiAgICAgIHZhciBfdGhpcyRzdGF0ZTQgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IF90aGlzJHN0YXRlNC5hY3RpdmVJbmRleCxcbiAgICAgICAgICBhY3RpdmVQYWdlID0gX3RoaXMkc3RhdGU0LmFjdGl2ZVBhZ2U7XG5cbiAgICAgIHZhciBuZXh0SXRlbU9iaiA9IF90aGlzLmNvbnZlcnRDaGlsZFRvQ2JPYmooYWN0aXZlSW5kZXgpO1xuXG4gICAgICBfdGhpcy5yZW1vdmVTbGlkZXJUcmFuc2l0aW9uSG9vayhfdGhpcy5vblByZXZFbmQpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRyYW5zaXRpb25pbmc6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UobmV4dEl0ZW1PYmosIGFjdGl2ZVBhZ2UpO1xuICAgICAgb25QcmV2RW5kKG5leHRJdGVtT2JqLCBhY3RpdmVQYWdlKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJnZW5lcmF0ZVBvc2l0aW9uVXBkYXRlclwiLCBmdW5jdGlvbiAoZGlyZWN0aW9uLCBuZXh0SXRlbUlkLCB2ZXJ0aWNhbE1vZGUsIHJlc3QpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIHNsaWRlclBvc2l0aW9uID0gc3RhdGUuc2xpZGVyUG9zaXRpb24sXG4gICAgICAgICAgICBjaGlsZEhlaWdodCA9IHN0YXRlLmNoaWxkSGVpZ2h0LFxuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBzdGF0ZS5hY3RpdmVJbmRleDtcblxuICAgICAgICB2YXIgY2hpbGRXaWR0aCA9IF90aGlzLmNhbGN1bGF0ZUNoaWxkV2lkdGgoKTtcblxuICAgICAgICB2YXIgbmV3U2xpZGVyUG9zaXRpb24gPSAwO1xuICAgICAgICB2YXIgY2hpbGRTaXplID0gdmVydGljYWxNb2RlID8gY2hpbGRIZWlnaHQgOiBjaGlsZFdpZHRoO1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IGNvbnN0cy5ORVhUKSB7XG4gICAgICAgICAgbmV3U2xpZGVyUG9zaXRpb24gPSBzbGlkZXJQb3NpdGlvbiAtIGNoaWxkU2l6ZSAqIChuZXh0SXRlbUlkIC0gYWN0aXZlSW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1NsaWRlclBvc2l0aW9uID0gc2xpZGVyUG9zaXRpb24gKyBjaGlsZFNpemUgKiAoYWN0aXZlSW5kZXggLSBuZXh0SXRlbUlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgICAgc2xpZGVyUG9zaXRpb246IG5ld1NsaWRlclBvc2l0aW9uLFxuICAgICAgICAgIGFjdGl2ZUluZGV4OiBuZXh0SXRlbUlkLFxuICAgICAgICAgIHN3aXBlZFNsaWRlclBvc2l0aW9uOiAwLFxuICAgICAgICAgIGlzU3dpcGluZzogZmFsc2VcbiAgICAgICAgfSwgcmVzdCk7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdvVG9cIiwgZnVuY3Rpb24gKG5leHRJdGVtSWQpIHtcbiAgICAgIHZhciBfdGhpcyRnZXREZXJpdmVkUHJvcHMxOCA9IF90aGlzLmdldERlcml2ZWRQcm9wc0Zyb21CcmVha1BvaW50KCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMxOC5jaGlsZHJlbixcbiAgICAgICAgICB2ZXJ0aWNhbE1vZGUgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMxOC52ZXJ0aWNhbE1vZGUsXG4gICAgICAgICAgaXRlbXNUb1Nob3cgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMxOC5pdGVtc1RvU2hvdztcblxuICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gX3RoaXMuc3RhdGUuYWN0aXZlSW5kZXg7XG4gICAgICB2YXIgY2hpbGRyZW5MZW5ndGggPSBDaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKS5sZW5ndGg7XG4gICAgICB2YXIgc2FmZU5leHRJdGVtSWQgPSBNYXRoLm1heCgwLCBuZXh0SXRlbUlkKTsgLy8gZG9uJ3QgYWxsb3cgbmVnYXRpdmUgbnVtYmVyc1xuXG4gICAgICB2YXIgaXNQcmV2ID0gYWN0aXZlSW5kZXggPiBzYWZlTmV4dEl0ZW1JZDtcblxuICAgICAgdmFyIG5leHRBdmFpbGFibGVJdGVtID0gX3RoaXMuZ2V0TmV4dEl0ZW1JbmRleChhY3RpdmVJbmRleCwgaXNQcmV2KTtcblxuICAgICAgdmFyIG5vQ2hhbmdlID0gbmV4dEF2YWlsYWJsZUl0ZW0gPT09IGFjdGl2ZUluZGV4O1xuICAgICAgdmFyIG91dE9mQm91bmRhcnkgPSBzYWZlTmV4dEl0ZW1JZCArIGl0ZW1zVG9TaG93ID49IGNoaWxkcmVuTGVuZ3RoO1xuXG4gICAgICBpZiAobm9DaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAob3V0T2ZCb3VuZGFyeSkge1xuICAgICAgICAvLyBFaXRoZXIgZ28gdG8gbGFzdCBpbmRleCAocmVzcGVjdCBpdGVtc1RvU2hvdykgb3IgMCBpbmRleCBpZiB3ZSBjYW4ndCBmaWxsIHRoZSBzbGlkZXJcbiAgICAgICAgc2FmZU5leHRJdGVtSWQgPSBNYXRoLm1heCgwLCBjaGlsZHJlbkxlbmd0aCAtIGl0ZW1zVG9TaG93KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRpcmVjdGlvbiA9IGNvbnN0cy5ORVhUO1xuICAgICAgdmFyIHBvc2l0aW9uRW5kQ2IgPSBfdGhpcy5vbk5leHRFbmQ7XG5cbiAgICAgIGlmIChpc1ByZXYpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gY29uc3RzLlBSRVY7XG4gICAgICAgIHBvc2l0aW9uRW5kQ2IgPSBfdGhpcy5vblByZXZFbmQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZVVwZGF0ZXIgPSBfdGhpcy5nZW5lcmF0ZVBvc2l0aW9uVXBkYXRlcihkaXJlY3Rpb24sIHNhZmVOZXh0SXRlbUlkLCB2ZXJ0aWNhbE1vZGUsIHtcbiAgICAgICAgdHJhbnNpdGlvbmluZzogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHN0YXRlVXBkYXRlciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICBwaXBlKF90aGlzLnVwZGF0ZUFjdGl2ZVBhZ2UoKSwgX3RoaXMub25TbGlkZXJUcmFuc2l0aW9uRW5kKHBvc2l0aW9uRW5kQ2IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldE51bU9mUGFnZXNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJGdldERlcml2ZWRQcm9wczE5ID0gX3RoaXMuZ2V0RGVyaXZlZFByb3BzRnJvbUJyZWFrUG9pbnQoKSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJGdldERlcml2ZWRQcm9wczE5LmNoaWxkcmVuLFxuICAgICAgICAgIGl0ZW1zVG9TaG93ID0gX3RoaXMkZ2V0RGVyaXZlZFByb3BzMTkuaXRlbXNUb1Nob3c7XG5cbiAgICAgIHZhciBjaGlsZHJlbkxlbmd0aCA9IENoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmxlbmd0aDtcbiAgICAgIHZhciBzYWZlSXRlbXNUb1Nob3cgPSBNYXRoLm1heChpdGVtc1RvU2hvdywgMSk7XG4gICAgICB2YXIgbnVtT2ZQYWdlcyA9IE1hdGguY2VpbChjaGlsZHJlbkxlbmd0aCAvIHNhZmVJdGVtc1RvU2hvdyk7XG4gICAgICByZXR1cm4gbnVtT2ZQYWdlcyB8fCAxO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInVwZGF0ZUFjdGl2ZVBhZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyRnZXREZXJpdmVkUHJvcHMyMCA9IF90aGlzLmdldERlcml2ZWRQcm9wc0Zyb21CcmVha1BvaW50KCksXG4gICAgICAgICAgICBpdGVtc1RvU2hvdyA9IF90aGlzJGdldERlcml2ZWRQcm9wczIwLml0ZW1zVG9TaG93LFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMyMC5jaGlsZHJlbjtcblxuICAgICAgICB2YXIgYWN0aXZlSW5kZXggPSBzdGF0ZS5hY3RpdmVJbmRleCxcbiAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSBzdGF0ZS5hY3RpdmVQYWdlO1xuXG4gICAgICAgIHZhciBudW1PZlBhZ2VzID0gX3RoaXMuZ2V0TnVtT2ZQYWdlcygpO1xuXG4gICAgICAgIHZhciBjaGlsZHJlbkxlbmd0aCA9IENoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmxlbmd0aDtcbiAgICAgICAgdmFyIGluUmFuZ2VJdGVtc1RvU2hvdyA9IE1hdGgubWluKGNoaWxkcmVuTGVuZ3RoLCBpdGVtc1RvU2hvdyk7IC8vIHdhdGNoIG91dCBmcm9tIDAgKHNvIHdlIHdvbnQgZGl2aWRlIGJ5IHplcm8pXG5cbiAgICAgICAgdmFyIHNhZmVJdGVtc1RvU2hvdyA9IE1hdGgubWF4KGluUmFuZ2VJdGVtc1RvU2hvdywgMSk7XG4gICAgICAgIHZhciBuZXdBY3RpdmVQYWdlID0gTWF0aC5jZWlsKGFjdGl2ZUluZGV4IC8gc2FmZUl0ZW1zVG9TaG93KTtcbiAgICAgICAgdmFyIGluUmFuZ2VBY3RpdmVQYWdlSW5kZXggPSBNYXRoLm1pbihudW1PZlBhZ2VzIC0gMSwgbmV3QWN0aXZlUGFnZSk7XG5cbiAgICAgICAgaWYgKGFjdGl2ZVBhZ2UgIT09IGluUmFuZ2VBY3RpdmVQYWdlSW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZlUGFnZTogaW5SYW5nZUFjdGl2ZVBhZ2VJbmRleFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uSW5kaWNhdG9yQ2xpY2tcIiwgZnVuY3Rpb24gKGluZGljYXRvcklkKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0RGVyaXZlZFByb3BzMjEgPSBfdGhpcy5nZXREZXJpdmVkUHJvcHNGcm9tQnJlYWtQb2ludCgpLFxuICAgICAgICAgIGl0ZW1zVG9TaG93ID0gX3RoaXMkZ2V0RGVyaXZlZFByb3BzMjEuaXRlbXNUb1Nob3c7XG5cbiAgICAgIHZhciBnb3RvSW5kZXggPSBpbmRpY2F0b3JJZCAqIGl0ZW1zVG9TaG93O1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZVBhZ2U6IGluZGljYXRvcklkXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMuZ29Ubyhnb3RvSW5kZXgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENhcm91c2VsLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuaW5pdFJlc2l6ZU9ic2VydmVyKCk7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2ZVBhZ2UoKTtcbiAgICAgIHRoaXMuc2V0UGFnZXMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZW5hYmxlQXV0b1BsYXkgPSBfdGhpcyRwcm9wczIuZW5hYmxlQXV0b1BsYXksXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgaXRlbXNUb1Nob3cgPSBfdGhpcyRwcm9wczIuaXRlbXNUb1Nob3csXG4gICAgICAgICAgaXRlbXNUb1Njcm9sbCA9IF90aGlzJHByb3BzMi5pdGVtc1RvU2Nyb2xsLFxuICAgICAgICAgIGJyZWFrUG9pbnRzID0gX3RoaXMkcHJvcHMyLmJyZWFrUG9pbnRzO1xuICAgICAgdmFyIF90aGlzJHN0YXRlNSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBfdGhpcyRzdGF0ZTUuYWN0aXZlSW5kZXgsXG4gICAgICAgICAgc2xpZGVyQ29udGFpbmVyV2lkdGggPSBfdGhpcyRzdGF0ZTUuc2xpZGVyQ29udGFpbmVyV2lkdGg7XG4gICAgICB2YXIgbmV4dEl0ZW0gPSB0aGlzLmdldE5leHRJdGVtSW5kZXgoYWN0aXZlSW5kZXgsIGZhbHNlKTtcbiAgICAgIHZhciBjdXJyZW50Q2hpbGRyZW5MZW5ndGggPSBDaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKS5sZW5ndGg7XG4gICAgICB2YXIgcHJldkNoaWxkcmVuTGVuZ3RoID0gQ2hpbGRyZW4udG9BcnJheShwcmV2UHJvcHMuY2hpbGRyZW4pLmxlbmd0aDsgLy8gdXBkYXRlIHBhZ2VzIChmb3IgcGFnaW5hdGlvbilcblxuICAgICAgaWYgKHByZXZDaGlsZHJlbkxlbmd0aCAhPT0gY3VycmVudENoaWxkcmVuTGVuZ3RoIHx8IHByZXZQcm9wcy5pdGVtc1RvU2hvdyAhPT0gaXRlbXNUb1Nob3cgfHwgcHJldlByb3BzLml0ZW1zVG9TY3JvbGwgIT09IGl0ZW1zVG9TY3JvbGwgfHwgcHJldlByb3BzLmJyZWFrUG9pbnRzICE9PSBicmVha1BvaW50cyB8fCBzbGlkZXJDb250YWluZXJXaWR0aCAhPT0gcHJldlN0YXRlLnNsaWRlckNvbnRhaW5lcldpZHRoKSB7XG4gICAgICAgIC8vIHdlIG1pbWljIGEgY29udGFpbmVyIHJlc2l6ZSB0byByZWNhbGN1bGF0ZSBpdGVtIHdpZHRoIHdoZW4gaXRlbXNUb1Nob3cgYXJlIHVwZGF0ZWRcbiAgICAgICAgdGhpcy5vbkNvbnRhaW5lclJlc2l6ZSh7XG4gICAgICAgICAgY29udGVudFJlY3Q6IHtcbiAgICAgICAgICAgIHdpZHRoOiBzbGlkZXJDb250YWluZXJXaWR0aFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0UGFnZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVQYWdlKCk7XG4gICAgICB9IC8vIGF1dG9wbGF5IHVwZGF0ZVxuXG5cbiAgICAgIGlmIChhY3RpdmVJbmRleCA9PT0gbmV4dEl0ZW0pIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBdXRvUGxheSgpO1xuICAgICAgfSBlbHNlIGlmIChlbmFibGVBdXRvUGxheSAmJiAhdGhpcy5hdXRvUGxheUludGVydmFsSWQpIHtcbiAgICAgICAgdGhpcy5zZXRBdXRvUGxheSgpO1xuICAgICAgfSBlbHNlIGlmICghZW5hYmxlQXV0b1BsYXkgJiYgdGhpcy5hdXRvUGxheUludGVydmFsSWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBdXRvUGxheSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJldkNoaWxkcmVuTGVuZ3RoICE9PSBjdXJyZW50Q2hpbGRyZW5MZW5ndGgpIHtcbiAgICAgICAgdmFyIF90aGlzJGdldERlcml2ZWRQcm9wczIyID0gdGhpcy5nZXREZXJpdmVkUHJvcHNGcm9tQnJlYWtQb2ludCgpLFxuICAgICAgICAgICAgY2FsY3VsYXRlZEl0ZW1zVG9TaG93ID0gX3RoaXMkZ2V0RGVyaXZlZFByb3BzMjIuaXRlbXNUb1Nob3c7IC8vIG51bWJlciBvZiBpdGVtcyBpcyByZWR1Y2VkICh3ZSBkb24ndCBjYXJlIGlmIG51bWJlciBvZiBpdGVtcyBpcyBpbmNyZWFzZWQpXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gY2hlY2sgaWYgb3VyIGN1cnJlbnQgaW5kZXggaXMgbm90IG91dCBvZiBib3VuZGFyaWVzXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gaW5jbHVkZSBpdGVtc1RvU2hvdyBzbyB3ZSBjYW4gZmlsbCB1cCB0aGUgc2xvdHNcblxuXG4gICAgICAgIHZhciBsYXN0SW5kZXggPSBjdXJyZW50Q2hpbGRyZW5MZW5ndGggLSAxO1xuICAgICAgICB2YXIgaXNPdXRPZlJhbmdlID0gYWN0aXZlSW5kZXggKyBjYWxjdWxhdGVkSXRlbXNUb1Nob3cgPiBsYXN0SW5kZXg7XG5cbiAgICAgICAgaWYgKGlzT3V0T2ZSYW5nZSkge1xuICAgICAgICAgIC8vIHdlIGFyZSBvdXQgb2YgYm91bmRhcmllcywgZ28gXCJiYWNrXCIgdG8gbGFzdCBpdGVtIG9mIHRoZSBsaXN0IChyZXNwZWN0IGl0ZW1zVG9TaG93KVxuICAgICAgICAgIHRoaXMuZ29UbyhNYXRoLm1heCgwLCBjdXJyZW50Q2hpbGRyZW5MZW5ndGggLSBjYWxjdWxhdGVkSXRlbXNUb1Nob3cpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMudW5TdWJzY3JpYmVPYnNlcnZlcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlNiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgYWN0aXZlUGFnZSA9IF90aGlzJHN0YXRlNi5hY3RpdmVQYWdlLFxuICAgICAgICAgIGlzU3dpcGluZyA9IF90aGlzJHN0YXRlNi5pc1N3aXBpbmcsXG4gICAgICAgICAgc2xpZGVyUG9zaXRpb24gPSBfdGhpcyRzdGF0ZTYuc2xpZGVyUG9zaXRpb24sXG4gICAgICAgICAgc3dpcGVkU2xpZGVyUG9zaXRpb24gPSBfdGhpcyRzdGF0ZTYuc3dpcGVkU2xpZGVyUG9zaXRpb24sXG4gICAgICAgICAgcm9vdEhlaWdodCA9IF90aGlzJHN0YXRlNi5yb290SGVpZ2h0LFxuICAgICAgICAgIHBhZ2VzID0gX3RoaXMkc3RhdGU2LnBhZ2VzLFxuICAgICAgICAgIGFjdGl2ZUluZGV4ID0gX3RoaXMkc3RhdGU2LmFjdGl2ZUluZGV4LFxuICAgICAgICAgIHRyYW5zaXRpb25NcyA9IF90aGlzJHN0YXRlNi50cmFuc2l0aW9uTXM7XG5cbiAgICAgIHZhciBfdGhpcyRnZXREZXJpdmVkUHJvcHMyMyA9IHRoaXMuZ2V0RGVyaXZlZFByb3BzRnJvbUJyZWFrUG9pbnQoKSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMyMy5jbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMyMy5zdHlsZSxcbiAgICAgICAgICBpdGVtc1RvU2hvdyA9IF90aGlzJGdldERlcml2ZWRQcm9wczIzLml0ZW1zVG9TaG93LFxuICAgICAgICAgIGl0ZW1zVG9TY3JvbGwgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMyMy5pdGVtc1RvU2Nyb2xsLFxuICAgICAgICAgIHZlcnRpY2FsTW9kZSA9IF90aGlzJGdldERlcml2ZWRQcm9wczIzLnZlcnRpY2FsTW9kZSxcbiAgICAgICAgICBpc1JUTCA9IF90aGlzJGdldERlcml2ZWRQcm9wczIzLmlzUlRMLFxuICAgICAgICAgIGVhc2luZyA9IF90aGlzJGdldERlcml2ZWRQcm9wczIzLmVhc2luZyxcbiAgICAgICAgICB0aWx0RWFzaW5nID0gX3RoaXMkZ2V0RGVyaXZlZFByb3BzMjMudGlsdEVhc2luZyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJGdldERlcml2ZWRQcm9wczIzLmNoaWxkcmVuLFxuICAgICAgICAgIGZvY3VzT25TZWxlY3QgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMyMy5mb2N1c09uU2VsZWN0LFxuICAgICAgICAgIGF1dG9UYWJJbmRleFZpc2libGVJdGVtcyA9IF90aGlzJGdldERlcml2ZWRQcm9wczIzLmF1dG9UYWJJbmRleFZpc2libGVJdGVtcyxcbiAgICAgICAgICBpdGVtUG9zaXRpb24gPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMyMy5pdGVtUG9zaXRpb24sXG4gICAgICAgICAgaXRlbVBhZGRpbmcgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMyMy5pdGVtUGFkZGluZyxcbiAgICAgICAgICBvdXRlclNwYWNpbmcgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMyMy5vdXRlclNwYWNpbmcsXG4gICAgICAgICAgZW5hYmxlU3dpcGUgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMyMy5lbmFibGVTd2lwZSxcbiAgICAgICAgICBlbmFibGVNb3VzZVN3aXBlID0gX3RoaXMkZ2V0RGVyaXZlZFByb3BzMjMuZW5hYmxlTW91c2VTd2lwZSxcbiAgICAgICAgICBwYWdpbmF0aW9uID0gX3RoaXMkZ2V0RGVyaXZlZFByb3BzMjMucGFnaW5hdGlvbixcbiAgICAgICAgICBzaG93QXJyb3dzID0gX3RoaXMkZ2V0RGVyaXZlZFByb3BzMjMuc2hvd0Fycm93cyxcbiAgICAgICAgICBkaXNhYmxlQXJyb3dzT25FbmQgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMyMy5kaXNhYmxlQXJyb3dzT25FbmQsXG4gICAgICAgICAgcHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudCA9IF90aGlzJGdldERlcml2ZWRQcm9wczIzLnByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQsXG4gICAgICAgICAgcmVuZGVyQXJyb3cgPSBfdGhpcyRnZXREZXJpdmVkUHJvcHMyMy5yZW5kZXJBcnJvdyxcbiAgICAgICAgICByZW5kZXJQYWdpbmF0aW9uID0gX3RoaXMkZ2V0RGVyaXZlZFByb3BzMjMucmVuZGVyUGFnaW5hdGlvbjtcblxuICAgICAgdmFyIGNoaWxkV2lkdGggPSB0aGlzLmNhbGN1bGF0ZUNoaWxkV2lkdGgoKTtcbiAgICAgIHZhciBudW1PZlBhZ2VzID0gdGhpcy5nZXROdW1PZlBhZ2VzKCk7XG4gICAgICAvKiogRGV0ZXJtaW5lIGlmIGFycm93cyBzaG91bGQgYmUgZGlzYWJsZWQgKi9cblxuICAgICAgdmFyIGNhblNsaWRlUHJldiA9IGFjdGl2ZUluZGV4ICE9PSB0aGlzLmdldE5leHRJdGVtSW5kZXgoYWN0aXZlSW5kZXgsIHRydWUpO1xuICAgICAgdmFyIGNhblNsaWRlTmV4dCA9IGFjdGl2ZUluZGV4ICE9PSB0aGlzLmdldE5leHRJdGVtSW5kZXgoYWN0aXZlSW5kZXgsIGZhbHNlKTtcbiAgICAgIHZhciBkaXNhYmxlZFByZXZBcnJvdyA9ICFjYW5TbGlkZVByZXYgJiYgZGlzYWJsZUFycm93c09uRW5kO1xuICAgICAgdmFyIGRpc2FibGVkTmV4dEFycm93ID0gIWNhblNsaWRlTmV4dCAmJiBkaXNhYmxlQXJyb3dzT25FbmQ7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxXcmFwcGVyLCB7XG4gICAgICAgIGlzUlRMOiBpc1JUTCxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjc3NQcmVmaXgoXCJjYXJvdXNlbC13cmFwcGVyXCIpLCBcIiBcIikuY29uY2F0KGNsYXNzTmFtZSksXG4gICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkQ2Fyb3VzZWwsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjc3NQcmVmaXgoXCJjYXJvdXNlbFwiKSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgIGhlaWdodDogcm9vdEhlaWdodFxuICAgICAgICB9XG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChPbmx5LCB7XG4gICAgICAgIHdoZW46IHNob3dBcnJvd3NcbiAgICAgIH0sIHJlbmRlckFycm93ID8gcmVuZGVyQXJyb3coe1xuICAgICAgICB0eXBlOiBjb25zdHMuUFJFVixcbiAgICAgICAgb25DbGljazogdGhpcy5vblByZXZTdGFydCxcbiAgICAgICAgaXNFZGdlOiAhY2FuU2xpZGVQcmV2XG4gICAgICB9KSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFycm93LCB7XG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25QcmV2U3RhcnQsXG4gICAgICAgIGRpcmVjdGlvbjogdmVydGljYWxNb2RlID8gQXJyb3cudXAgOiBBcnJvdy5sZWZ0LFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRQcmV2QXJyb3dcbiAgICAgIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2xpZGVyQ29udGFpbmVyLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY3NzUHJlZml4KFwic2xpZGVyLWNvbnRhaW5lclwiKSxcbiAgICAgICAgcmVmOiB0aGlzLnNldFJlZihcInNsaWRlckNvbnRhaW5lclwiKVxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2xpZGVyLCB7XG4gICAgICAgIHZlcnRpY2FsTW9kZTogdmVydGljYWxNb2RlLFxuICAgICAgICBpc1JUTDogaXNSVEwsXG4gICAgICAgIGVhc2luZzogZWFzaW5nLFxuICAgICAgICBzbGlkZXJQb3NpdGlvbjogc2xpZGVyUG9zaXRpb24sXG4gICAgICAgIHN3aXBlZFNsaWRlclBvc2l0aW9uOiBzd2lwZWRTbGlkZXJQb3NpdGlvbixcbiAgICAgICAgaXNTd2lwaW5nOiBpc1N3aXBpbmcsXG4gICAgICAgIHRyYW5zaXRpb25NczogdHJhbnNpdGlvbk1zLFxuICAgICAgICB0aWx0RWFzaW5nOiB0aWx0RWFzaW5nLFxuICAgICAgICBjbGFzc05hbWU6IGNzc1ByZWZpeChcInNsaWRlclwiKSxcbiAgICAgICAgcmVmOiB0aGlzLnNldFJlZihcInNsaWRlclwiKSxcbiAgICAgICAgb3V0ZXJTcGFjaW5nOiBvdXRlclNwYWNpbmdcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYWNrLCB7XG4gICAgICAgIHZlcnRpY2FsTW9kZTogdmVydGljYWxNb2RlLFxuICAgICAgICBjaGlsZHJlbjogQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbiksXG4gICAgICAgIGNoaWxkV2lkdGg6IGNoaWxkV2lkdGgsXG4gICAgICAgIGN1cnJlbnRJdGVtOiBhY3RpdmVJbmRleCxcbiAgICAgICAgYXV0b1RhYkluZGV4VmlzaWJsZUl0ZW1zOiBhdXRvVGFiSW5kZXhWaXNpYmxlSXRlbXMsXG4gICAgICAgIGl0ZW1zVG9TaG93OiBpdGVtc1RvU2hvdyxcbiAgICAgICAgaXRlbXNUb1Njcm9sbDogaXRlbXNUb1Njcm9sbCxcbiAgICAgICAgaXRlbVBvc2l0aW9uOiBpdGVtUG9zaXRpb24sXG4gICAgICAgIGl0ZW1QYWRkaW5nOiBpdGVtUGFkZGluZyxcbiAgICAgICAgZW5hYmxlU3dpcGU6IGVuYWJsZVN3aXBlLFxuICAgICAgICBlbmFibGVNb3VzZVN3aXBlOiBlbmFibGVNb3VzZVN3aXBlLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdFRvdWNobW92ZUV2ZW50OiBwcmV2ZW50RGVmYXVsdFRvdWNobW92ZUV2ZW50LFxuICAgICAgICBvblN3aXBlZDogdGhpcy5vblN3aXBlZCxcbiAgICAgICAgb25Td2lwaW5nOiB0aGlzLm9uU3dpcGluZyxcbiAgICAgICAgb25JdGVtQ2xpY2s6IGZvY3VzT25TZWxlY3QgPyB0aGlzLmdvVG8gOiB1bmRlZmluZWRcbiAgICAgIH0pKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE9ubHksIHtcbiAgICAgICAgd2hlbjogc2hvd0Fycm93c1xuICAgICAgfSwgcmVuZGVyQXJyb3cgPyByZW5kZXJBcnJvdyh7XG4gICAgICAgIHR5cGU6IGNvbnN0cy5ORVhULFxuICAgICAgICBvbkNsaWNrOiB0aGlzLm9uTmV4dFN0YXJ0LFxuICAgICAgICBpc0VkZ2U6ICFjYW5TbGlkZU5leHRcbiAgICAgIH0pIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQXJyb3csIHtcbiAgICAgICAgb25DbGljazogdGhpcy5vbk5leHRTdGFydCxcbiAgICAgICAgZGlyZWN0aW9uOiB2ZXJ0aWNhbE1vZGUgPyBBcnJvdy5kb3duIDogQXJyb3cucmlnaHQsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZE5leHRBcnJvd1xuICAgICAgfSkpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoT25seSwge1xuICAgICAgICB3aGVuOiBwYWdpbmF0aW9uXG4gICAgICB9LCByZW5kZXJQYWdpbmF0aW9uID8gcmVuZGVyUGFnaW5hdGlvbih7XG4gICAgICAgIHBhZ2VzOiBwYWdlcyxcbiAgICAgICAgYWN0aXZlUGFnZTogYWN0aXZlUGFnZSxcbiAgICAgICAgb25DbGljazogdGhpcy5vbkluZGljYXRvckNsaWNrXG4gICAgICB9KSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2luYXRpb24sIHtcbiAgICAgICAgbnVtT2ZQYWdlczogbnVtT2ZQYWdlcyxcbiAgICAgICAgYWN0aXZlUGFnZTogYWN0aXZlUGFnZSxcbiAgICAgICAgb25DbGljazogdGhpcy5vbkluZGljYXRvckNsaWNrXG4gICAgICB9KSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDYXJvdXNlbDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuQ2Fyb3VzZWwuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IFwiXCIsXG4gIHN0eWxlOiB7fSxcbiAgdmVydGljYWxNb2RlOiBmYWxzZSxcbiAgaXNSVEw6IGZhbHNlLFxuICBpbml0aWFsRmlyc3RJdGVtOiAwLFxuICBpbml0aWFsQWN0aXZlSW5kZXg6IDAsXG4gIHNob3dBcnJvd3M6IHRydWUsXG4gIHNob3dFbXB0eVNsb3RzOiBmYWxzZSxcbiAgZGlzYWJsZUFycm93c09uRW5kOiB0cnVlLFxuICBwYWdpbmF0aW9uOiB0cnVlLFxuICBlYXNpbmc6IFwiZWFzZVwiLFxuICB0aWx0RWFzaW5nOiBcImVhc2VcIixcbiAgdHJhbnNpdGlvbk1zOiA1MDAsXG4gIGVuYWJsZVRpbHQ6IHRydWUsXG4gIGVuYWJsZVN3aXBlOiB0cnVlLFxuICBlbmFibGVNb3VzZVN3aXBlOiB0cnVlLFxuICBwcmV2ZW50RGVmYXVsdFRvdWNobW92ZUV2ZW50OiBmYWxzZSxcbiAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gIGF1dG9UYWJJbmRleFZpc2libGVJdGVtczogdHJ1ZSxcbiAgaXRlbXNUb1Nob3c6IDEsXG4gIGl0ZW1zVG9TY3JvbGw6IDEsXG4gIGl0ZW1Qb3NpdGlvbjogY29uc3RzLkNFTlRFUixcbiAgaXRlbVBhZGRpbmc6IFswLCAwLCAwLCAwXSxcbiAgb3V0ZXJTcGFjaW5nOiAwLFxuICBlbmFibGVBdXRvUGxheTogZmFsc2UsXG4gIGF1dG9QbGF5U3BlZWQ6IDIwMDAsXG4gIC8vIGNhbGxiYWNrc1xuICBvbkNoYW5nZTogbm9vcCxcbiAgb25OZXh0RW5kOiBub29wLFxuICBvblByZXZFbmQ6IG5vb3AsXG4gIG9uTmV4dFN0YXJ0OiBub29wLFxuICBvblByZXZTdGFydDogbm9vcCxcbiAgb25SZXNpemU6IG5vb3Bcbn07XG5DYXJvdXNlbC5wcm9wVHlwZXMgPSB7XG4gIC8qKiBJdGVtcyB0byByZW5kZXIgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgLyoqIFRoZSBjc3MgY2xhc3MgZm9yIHRoZSByb290IGVsZW1lbnQgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBUaGUgc3R5bGUgb2JqZWN0IGZvciB0aGUgcm9vdCBlbGVtZW50ICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKiBEaXNwbGF5IHRoZSBDYXJvdXNlbCBpbiBhIHZlcnRpY2FsIGxheW91dCAqL1xuICB2ZXJ0aWNhbE1vZGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBGbGlwIHJpZ2h0IHRvIGxlZnQgKi9cbiAgaXNSVEw6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBTaG93IGRvdHMgZm9yIHBhZ2luZyAqL1xuICBwYWdpbmF0aW9uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQW5pbWF0aW9uIHNwZWVkICovXG4gIHRyYW5zaXRpb25NczogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKiogdHJhbnNpdGlvbiBlYXNpbmcgcGF0dGVybiAqL1xuICBlYXNpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIHRyYW5zaXRpb24gZWFzaW5nIHBhdHRlcm4gZm9yIHRoZSB0aWx0ICovXG4gIHRpbHRFYXNpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIFRoZSBcImJ1bXBcIiBhbmltYXRpb24gd2hlbiByZWFjaGluZyB0aGUgbGFzdCBpdGVtICovXG4gIGVuYWJsZVRpbHQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBOdW1iZXIgb2YgdmlzaWJsZSBpdGVtcyAgKi9cbiAgaXRlbXNUb1Nob3c6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqIE51bWJlciBvZiBpdGVtcyB0byBzY3JvbGwgKi9cbiAgaXRlbXNUb1Njcm9sbDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKiogQ29sbGVjdGlvbiBvZiBvYmplY3RzIHdpdGggYSB3aWR0aCwgaXRlbXNUb1Nob3cgYW5kIGl0ZW1zVG9TY3JvbGwgICovXG4gIGJyZWFrUG9pbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaXRlbXNUb1Nob3c6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaXRlbXNUb1Njcm9sbDogUHJvcFR5cGVzLm51bWJlclxuICB9KSksXG5cbiAgLyoqIFRoZSBpbml0aWFsIGFjdGl2ZSBpbmRleCB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzICovXG4gIGluaXRpYWxBY3RpdmVJbmRleDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKiogKipERVBSRUNBVEVEIC0gdXNlIGluaXRpYWxBY3RpdmVJbmRleCBpbnN0ZWFkKiogVGhlIGZpcnN0IGl0ZW1zIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHMgKi9cbiAgaW5pdGlhbEZpcnN0SXRlbTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKiogU2hvdyB0aGUgYXJyb3cgYnV0dG9ucyAqL1xuICBzaG93QXJyb3dzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogU2hvdyBlbXB0eSBzbG90cyB3aGVuIGNoaWxkcmVuLmxlbmd0aCA8IGl0ZW1zVG9TaG93IChub3QgY29tcGF0aWJsZSB3aXRoIHZlcnRpY2FsTW9kZSB5ZXQgISkgKi9cbiAgc2hvd0VtcHR5U2xvdHM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBEaXNhYmxlcyB0aGUgYXJyb3cgYnV0dG9uIHdoZW4gdGhlcmUgYXJlIG5vIG1vcmUgaXRlbXMgKi9cbiAgZGlzYWJsZUFycm93c09uRW5kOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogR28gdG8gaXRlbSBvbiBjbGljayAqL1xuICBmb2N1c09uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQXV0b21hdGljYWxseSBpbmplY3QgYHRhYkluZGV4OjBgIHRvIHZpc2libGUgaXRlbXMgKi9cbiAgYXV0b1RhYkluZGV4VmlzaWJsZUl0ZW1zOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQSByZW5kZXIgcHJvcCBmb3IgdGhlIGFycm93IGNvbXBvbmVudFxuICAgKiAtICh7dHlwZSwgb25DbGlja30pID0+IDxkaXYgb25DbGljaz17b25DbGlja30+e3R5cGUgPT09ICdwcmV2JyA/ICc8LScgOiAnLT4nfTwvZGl2PlxuICAgKi9cbiAgcmVuZGVyQXJyb3c6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKiBBIHJlbmRlciBwcm9wIGZvciB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAgICogLSAoeyBwYWdlcywgYWN0aXZlUGFnZSwgb25DbGljayB9KSA9PiAgPFlvdXJDb21wb25lbnQvPlxuICAgKi9cbiAgcmVuZGVyUGFnaW5hdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqIFBvc2l0aW9uIHRoZSBlbGVtZW50IHJlbGF0aXZlIHRvIGl0J3Mgd3JhcHBlciAodXNlIHRoZSBjb25zdHMgb2JqZWN0KSAtIGNvbnN0cy5TVEFSVCB8IGNvbnN0cy5DRU5URVIgfCBjb25zdHMuRU5EICovXG4gIGl0ZW1Qb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtjb25zdHMuU1RBUlQsIGNvbnN0cy5DRU5URVIsIGNvbnN0cy5FTkRdKSxcblxuICAvKiogQSBwYWRkaW5nIGZvciBlYWNoIGVsZW1lbnQgICovXG4gIGl0ZW1QYWRkaW5nOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgLyoqIEEgbWFyZ2luIGF0IHRoZSBiZWdpbm5pbmcgYW5kIGF0IHRoZSBlbmQgb2YgdGhlIGNhcm91c2VsIChub3QgY29tcGF0aWJsZSB3aXRoIHZlcnRpY2FsTW9kZSB5ZXQgISkgKi9cbiAgb3V0ZXJTcGFjaW5nOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvLyBzd2lwZVxuXG4gIC8qKiBFbmFibGUgb3IgZGlzYWJsZSBzd2lwZSAqL1xuICBlbmFibGVTd2lwZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEVuYWJsZSBvciBkaXNhYmxlIG1vdXNlIHN3aXBlICovXG4gIGVuYWJsZU1vdXNlU3dpcGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBQcmV2ZW50IHBhZ2Ugc2Nyb2xsIG9uIHRvdWNobW92ZS5cbiAgICogVXNlIHRoaXMgdG8gc3RvcCB0aGUgYnJvd3NlciBmcm9tIHNjcm9sbGluZyB3aGlsZSBhIHVzZXIgc3dpcGVzLlxuICAgKiBNb3JlIGRldGFpbHM6IGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3JtaWRhYmxlTGFicy9yZWFjdC1zd2lwZWFibGUjcHJldmVudGRlZmF1bHR0b3VjaG1vdmVldmVudC1kZXRhaWxzXG4gICAqL1xuICBwcmV2ZW50RGVmYXVsdFRvdWNobW92ZUV2ZW50OiBQcm9wVHlwZXMuYm9vbCxcbiAgLy8gYXV0byBwbGF5XG5cbiAgLyoqIEVuYWJsZSBvciBkaXNhYmxlIGF1dG8gcGxheSAqL1xuICBlbmFibGVBdXRvUGxheTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIFNldCBhdXRvIHBsYXkgc3BlZWQgKG1zKSAqL1xuICBhdXRvUGxheVNwZWVkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvLyBjYWxsYmFja3NcblxuICAvKiogQSBjYWxsYmFjayBmb3IgdGhlIGNoYW5nZSBvZiBhbiBpdGVtXG4gICAqIC0gb25DaGFuZ2UoY3VycmVudEl0ZW1PYmplY3QsIGN1cnJlbnRQYWdlSW5kZXgpID0+IHt9ICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKiogQSBjYWxsYmFjayBmb3IgdGhlIGJlZ2lubmluZyBvZiB0aGUgbmV4dCB0cmFuc2l0aW9uXG4gICAqIC0gb25OZXh0U3RhcnQocHJldkl0ZW1PYmplY3QsIG5leHRJdGVtT2JqZWN0KSA9PiB7fSAqL1xuICBvbk5leHRTdGFydDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqIEEgY2FsbGJhY2sgZm9yIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHByZXYgdHJhbnNpdGlvblxuICAgKiAtIG9uUHJldlN0YXJ0KHByZXZJdGVtT2JqZWN0LCBuZXh0SXRlbU9iamVjdCkgPT4ge30gKi9cbiAgb25QcmV2U3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKiBBIGNhbGxiYWNrIGZvciB0aGUgZW5kIG9mIHRoZSBuZXh0IHRyYW5zaXRpb25cbiAgICogLSBvbk5leHRFbmQobmV4dEl0ZW1PYmplY3QsIGN1cnJlbnRQYWdlSW5kZXgpID0+IHt9ICovXG4gIG9uTmV4dEVuZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqIEEgY2FsbGJhY2sgZm9yIHRoZSBlbmQgb2YgdGhlIHByZXYgdHJhbnNpdGlvblxuICAgKiAtIG9uUHJldkVuZChuZXh0SXRlbU9iamVjdCwgY3VycmVudFBhZ2VJbmRleCkgPT4ge30gKi9cbiAgb25QcmV2RW5kOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKiogQSBjYWxsYmFjayBmb3IgdGhlIFwic2xpZGVyLWNvbnRhaW5lclwiIHJlc2l6ZVxuICAgKiAtIG9uUmVzaXplKGN1cnJlbnRCcmVha1BvaW50KSA9PiB7fSAqL1xuICBvblJlc2l6ZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuZXhwb3J0IHsgY29uc3RzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lcy5qcy5tYXBcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxudmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxudmFyIE9ubHkgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBpbmhlcml0cyhPbmx5LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBPbmx5KCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIE9ubHkpO1xuICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChPbmx5Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT25seSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoT25seSwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICB3aGVuID0gX3Byb3BzLndoZW4sXG4gICAgICAgICAgaGlkZGVuTW9kZSA9IF9wcm9wcy5oaWRkZW5Nb2RlLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG5cbiAgICAgIHZhciBzaW5nbGVDaGlsZCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgdmFyIF9zaW5nbGVDaGlsZCRwcm9wcyA9IHNpbmdsZUNoaWxkLnByb3BzLFxuICAgICAgICAgIHN0eWxlID0gX3NpbmdsZUNoaWxkJHByb3BzLnN0eWxlLFxuICAgICAgICAgIHJlc3RPZkNoaWxkUHJvcHMgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyhfc2luZ2xlQ2hpbGQkcHJvcHMsIFsnc3R5bGUnXSk7XG5cbiAgICAgIHZhciBleHRlbmRlZFByb3BzID0gX2V4dGVuZHMoe30sIHJlc3RPZkNoaWxkUHJvcHMpO1xuXG4gICAgICB2YXIga2VlcE5vZGUgPSBoaWRkZW5Nb2RlICYmIGhpZGRlbk1vZGUgIT09IFwid2l0aE51bGxcIjtcblxuICAgICAgaWYgKGtlZXBOb2RlKSB7XG4gICAgICAgIGlmIChoaWRkZW5Nb2RlID09PSBcIndpdGhDc3NcIikge1xuICAgICAgICAgIGV4dGVuZGVkUHJvcHMuY2xhc3NOYW1lID0gZXh0ZW5kZWRQcm9wcy5jbGFzc05hbWUgKyAnICcgKyBjbGFzc05hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXh0ZW5kZWRQcm9wcy5zdHlsZSA9IF9leHRlbmRzKHt9LCBzdHlsZSwgaGlkZGVuTW9kZSA9PT0gXCJ3aXRoRGlzcGxheVwiICYmIHsgZGlzcGxheTogXCJub25lXCIgfSwgaGlkZGVuTW9kZSA9PT0gXCJ3aXRoVmlzaWJpbGl0eVwiICYmIHsgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGNsb25lZCA9IFJlYWN0LmNsb25lRWxlbWVudChzaW5nbGVDaGlsZCwgZXh0ZW5kZWRQcm9wcyk7XG4gICAgICB2YXIgdG9IaWRlID0ga2VlcE5vZGUgPyBjbG9uZWQgOiBudWxsO1xuXG4gICAgICByZXR1cm4gd2hlbiA/IHNpbmdsZUNoaWxkIDogdG9IaWRlO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gT25seTtcbn0oQ29tcG9uZW50KTtcblxuT25seS5kZWZhdWx0UHJvcHMgPSB7XG4gIGhpZGRlbk1vZGU6IFwid2l0aE51bGxcIixcbiAgY2xhc3NOYW1lOiBcInItb19oaWRkZW5cIlxufTtcbk9ubHkucHJvcFR5cGVzID0ge1xuICAvKiogQSBzaW5nbGUgY2hpbGQgZWxlbWVudCAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcblxuICAvKiogV2hlbiB0cnVlLCBjaGlsZHJlbiB3aWxsIHJlbmRlcmVkIGFzIGlzICAqL1xuICB3aGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gIC8qKiBEZXRlcm1pbmVzIGhvdyBcInJlYWN0LW9ubHktd2hlblwiIHNob3VsZCBoaWRlIHRoZSBjaGlsZCBlbGVtZW50IFxuICAgKiBcIndpdGhOdWxsXCI6IFdpbGwgbm90IHJlbmRlciB0aGUgY2hpbGRcbiAgICogXCJ3aXRoRGlzcGxheVwiOiBXaWxsIHJlbmRlciB0aGUgY2hpbGQgd2l0aCBkaXNwbGF5Om5vbmUgIFxuICAgKiBcIndpdGhWaXNpYmlsaXR5XCI6IFdpbGwgcmVuZGVyIHRoZSBjaGlsZCB3aXRoIHZpc2liaWxpdHk6aGlkZGVuXG4gICAqIFwid2l0aENzc1wiOiBXaWxsIHJlbmRlciB0aGUgY2hpbGQgd2l0aCBhIENTUyBjbGFzcyAoeW91IGNhbiBwYXNzIGl0IGEgY3VzdG9tIGNsYXNzTmFtZSBwcm9wKVxuICAqL1xuICBoaWRkZW5Nb2RlOiBQcm9wVHlwZXMub25lT2YoW1wid2l0aE51bGxcIiwgXCJ3aXRoRGlzcGxheVwiLCBcIndpdGhWaXNpYmlsaXR5XCIsIFwid2l0aENzc1wiXSksXG4gIC8qKiBUaGlzIGlzIHdvcmtpbmcgaW4gY29tYmluYXRpb24gd2l0aCBoaWRkZW5Nb2RlPXtcIndpdGhDc3NcIn0gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9ubHk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lcy5qcy5tYXBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQ6IGZhbHNlLFxuICBkZWx0YTogMTAsXG4gIHJvdGF0aW9uQW5nbGU6IDAsXG4gIHRyYWNrTW91c2U6IGZhbHNlLFxuICB0cmFja1RvdWNoOiB0cnVlXG59O1xudmFyIGluaXRpYWxTdGF0ZSA9IHtcbiAgeHk6IFswLCAwXSxcbiAgc3dpcGluZzogZmFsc2UsXG4gIGV2ZW50RGF0YTogdW5kZWZpbmVkLFxuICBzdGFydDogdW5kZWZpbmVkXG59O1xudmFyIExFRlQgPSAnTGVmdCc7XG52YXIgUklHSFQgPSAnUmlnaHQnO1xudmFyIFVQID0gJ1VwJztcbnZhciBET1dOID0gJ0Rvd24nO1xudmFyIHRvdWNoU3RhcnQgPSAndG91Y2hzdGFydCc7XG52YXIgdG91Y2hNb3ZlID0gJ3RvdWNobW92ZSc7XG52YXIgdG91Y2hFbmQgPSAndG91Y2hlbmQnO1xudmFyIG1vdXNlTW92ZSA9ICdtb3VzZW1vdmUnO1xudmFyIG1vdXNlVXAgPSAnbW91c2V1cCc7XG5cbmZ1bmN0aW9uIGdldERpcmVjdGlvbihhYnNYLCBhYnNZLCBkZWx0YVgsIGRlbHRhWSkge1xuICBpZiAoYWJzWCA+IGFic1kpIHtcbiAgICBpZiAoZGVsdGFYID4gMCkge1xuICAgICAgcmV0dXJuIExFRlQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJJR0hUO1xuICB9IGVsc2UgaWYgKGRlbHRhWSA+IDApIHtcbiAgICByZXR1cm4gVVA7XG4gIH1cblxuICByZXR1cm4gRE9XTjtcbn1cblxuZnVuY3Rpb24gcm90YXRlWFlCeUFuZ2xlKHBvcywgYW5nbGUpIHtcbiAgaWYgKGFuZ2xlID09PSAwKSByZXR1cm4gcG9zO1xuICB2YXIgYW5nbGVJblJhZGlhbnMgPSBNYXRoLlBJIC8gMTgwICogYW5nbGU7XG4gIHZhciB4ID0gcG9zWzBdICogTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpICsgcG9zWzFdICogTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICB2YXIgeSA9IHBvc1sxXSAqIE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSAtIHBvc1swXSAqIE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgcmV0dXJuIFt4LCB5XTtcbn1cblxuZnVuY3Rpb24gZ2V0SGFuZGxlcnMoc2V0LCBoYW5kbGVyUHJvcHMpIHtcbiAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KGV2ZW50KSB7XG4gICAgLy8gaWYgbW9yZSB0aGFuIGEgc2luZ2xlIHRvdWNoIGRvbid0IHRyYWNrLCBmb3Igbm93Li4uXG4gICAgaWYgKGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSByZXR1cm47XG4gICAgc2V0KGZ1bmN0aW9uIChzdGF0ZSwgcHJvcHMpIHtcbiAgICAgIC8vIHNldHVwIG1vdXNlIGxpc3RlbmVycyBvbiBkb2N1bWVudCB0byB0cmFjayBzd2lwZSBzaW5jZSBzd2lwZSBjYW4gbGVhdmUgY29udGFpbmVyXG4gICAgICBpZiAocHJvcHMudHJhY2tNb3VzZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlTW92ZSwgb25Nb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZVVwLCBvblVwKTtcbiAgICAgIH1cblxuICAgICAgdmFyIF9yZWYgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXSA6IGV2ZW50LFxuICAgICAgICAgIGNsaWVudFggPSBfcmVmLmNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSA9IF9yZWYuY2xpZW50WTtcblxuICAgICAgdmFyIHh5ID0gcm90YXRlWFlCeUFuZ2xlKFtjbGllbnRYLCBjbGllbnRZXSwgcHJvcHMucm90YXRpb25BbmdsZSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBpbml0aWFsU3RhdGUsIHtcbiAgICAgICAgZXZlbnREYXRhOiB7XG4gICAgICAgICAgaW5pdGlhbDogW10uY29uY2F0KHh5KSxcbiAgICAgICAgICBmaXJzdDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB4eTogeHksXG4gICAgICAgIHN0YXJ0OiBldmVudC50aW1lU3RhbXAgfHwgMFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIG9uTW92ZSA9IGZ1bmN0aW9uIG9uTW92ZShldmVudCkge1xuICAgIHNldChmdW5jdGlvbiAoc3RhdGUsIHByb3BzKSB7XG4gICAgICBpZiAoIXN0YXRlLnh5WzBdIHx8ICFzdGF0ZS54eVsxXSB8fCBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHZhciBfcmVmMiA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdIDogZXZlbnQsXG4gICAgICAgICAgY2xpZW50WCA9IF9yZWYyLmNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSA9IF9yZWYyLmNsaWVudFk7XG5cbiAgICAgIHZhciBfcm90YXRlWFlCeUFuZ2xlID0gcm90YXRlWFlCeUFuZ2xlKFtjbGllbnRYLCBjbGllbnRZXSwgcHJvcHMucm90YXRpb25BbmdsZSksXG4gICAgICAgICAgeCA9IF9yb3RhdGVYWUJ5QW5nbGVbMF0sXG4gICAgICAgICAgeSA9IF9yb3RhdGVYWUJ5QW5nbGVbMV07XG5cbiAgICAgIHZhciBkZWx0YVggPSBzdGF0ZS54eVswXSAtIHg7XG4gICAgICB2YXIgZGVsdGFZID0gc3RhdGUueHlbMV0gLSB5O1xuICAgICAgdmFyIGFic1ggPSBNYXRoLmFicyhkZWx0YVgpO1xuICAgICAgdmFyIGFic1kgPSBNYXRoLmFicyhkZWx0YVkpO1xuICAgICAgdmFyIHRpbWUgPSAoZXZlbnQudGltZVN0YW1wIHx8IDApIC0gc3RhdGUuc3RhcnQ7XG4gICAgICB2YXIgdmVsb2NpdHkgPSBNYXRoLnNxcnQoYWJzWCAqIGFic1ggKyBhYnNZICogYWJzWSkgLyAodGltZSB8fCAxKTsgLy8gaWYgc3dpcGUgaXMgdW5kZXIgZGVsdGEgYW5kIHdlIGhhdmUgbm90IHN0YXJ0ZWQgdG8gdHJhY2sgYSBzd2lwZTogc2tpcCB1cGRhdGVcblxuICAgICAgaWYgKGFic1ggPCBwcm9wcy5kZWx0YSAmJiBhYnNZIDwgcHJvcHMuZGVsdGEgJiYgIXN0YXRlLnN3aXBpbmcpIHJldHVybiBzdGF0ZTtcbiAgICAgIHZhciBkaXIgPSBnZXREaXJlY3Rpb24oYWJzWCwgYWJzWSwgZGVsdGFYLCBkZWx0YVkpO1xuXG4gICAgICB2YXIgZXZlbnREYXRhID0gX2V4dGVuZHMoe30sIHN0YXRlLmV2ZW50RGF0YSwge1xuICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgIGFic1g6IGFic1gsXG4gICAgICAgIGFic1k6IGFic1ksXG4gICAgICAgIGRlbHRhWDogZGVsdGFYLFxuICAgICAgICBkZWx0YVk6IGRlbHRhWSxcbiAgICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5LFxuICAgICAgICBkaXI6IGRpclxuICAgICAgfSk7XG5cbiAgICAgIHByb3BzLm9uU3dpcGluZyAmJiBwcm9wcy5vblN3aXBpbmcoZXZlbnREYXRhKTsgLy8gdHJhY2sgaWYgYSBzd2lwZSBpcyBjYW5jZWxhYmxlKGhhbmRsZXIgZm9yIHN3aXBpbmcgb3Igc3dpcGVkKGRpcikgZXhpc3RzKVxuICAgICAgLy8gc28gd2UgY2FuIGNhbGwgcHJldmVudERlZmF1bHQgaWYgbmVlZGVkXG5cbiAgICAgIHZhciBjYW5jZWxhYmxlUGFnZVN3aXBlID0gZmFsc2U7XG5cbiAgICAgIGlmIChwcm9wcy5vblN3aXBpbmcgfHwgcHJvcHMub25Td2lwZWQgfHwgcHJvcHNbXCJvblN3aXBlZFwiICsgZGlyXSkge1xuICAgICAgICBjYW5jZWxhYmxlUGFnZVN3aXBlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGFibGVQYWdlU3dpcGUgJiYgcHJvcHMucHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudCAmJiBwcm9wcy50cmFja1RvdWNoICYmIGV2ZW50LmNhbmNlbGFibGUpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIGZpcnN0IGlzIG5vdyBhbHdheXMgZmFsc2VcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBldmVudERhdGE6IF9leHRlbmRzKHt9LCBldmVudERhdGEsIHtcbiAgICAgICAgICBmaXJzdDogZmFsc2VcbiAgICAgICAgfSksXG4gICAgICAgIHN3aXBpbmc6IHRydWVcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBvbkVuZCA9IGZ1bmN0aW9uIG9uRW5kKGV2ZW50KSB7XG4gICAgc2V0KGZ1bmN0aW9uIChzdGF0ZSwgcHJvcHMpIHtcbiAgICAgIHZhciBldmVudERhdGE7XG5cbiAgICAgIGlmIChzdGF0ZS5zd2lwaW5nKSB7XG4gICAgICAgIGV2ZW50RGF0YSA9IF9leHRlbmRzKHt9LCBzdGF0ZS5ldmVudERhdGEsIHtcbiAgICAgICAgICBldmVudDogZXZlbnRcbiAgICAgICAgfSk7XG4gICAgICAgIHByb3BzLm9uU3dpcGVkICYmIHByb3BzLm9uU3dpcGVkKGV2ZW50RGF0YSk7XG4gICAgICAgIHByb3BzW1wib25Td2lwZWRcIiArIGV2ZW50RGF0YS5kaXJdICYmIHByb3BzW1wib25Td2lwZWRcIiArIGV2ZW50RGF0YS5kaXJdKGV2ZW50RGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIGluaXRpYWxTdGF0ZSwge1xuICAgICAgICBldmVudERhdGE6IGV2ZW50RGF0YVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGNsZWFuVXBNb3VzZSA9IGZ1bmN0aW9uIGNsZWFuVXBNb3VzZSgpIHtcbiAgICAvLyBzYWZlIHRvIGp1c3QgY2FsbCByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZU1vdmUsIG9uTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZVVwLCBvblVwKTtcbiAgfTtcblxuICB2YXIgb25VcCA9IGZ1bmN0aW9uIG9uVXAoZSkge1xuICAgIGNsZWFuVXBNb3VzZSgpO1xuICAgIG9uRW5kKGUpO1xuICB9O1xuXG4gIHZhciBhdHRhY2hUb3VjaCA9IGZ1bmN0aW9uIGF0dGFjaFRvdWNoKGVsKSB7XG4gICAgaWYgKGVsICYmIGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIC8vIGF0dGFjaCB0b3VjaCBldmVudCBsaXN0ZW5lcnMgYW5kIGhhbmRsZXJzXG4gICAgICB2YXIgdGxzID0gW1t0b3VjaFN0YXJ0LCBvblN0YXJ0XSwgW3RvdWNoTW92ZSwgb25Nb3ZlXSwgW3RvdWNoRW5kLCBvbkVuZF1dO1xuICAgICAgdGxzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgIHZhciBlID0gX3JlZjNbMF0sXG4gICAgICAgICAgICBoID0gX3JlZjNbMV07XG4gICAgICAgIHJldHVybiBlbC5hZGRFdmVudExpc3RlbmVyKGUsIGgpO1xuICAgICAgfSk7IC8vIHJldHVybiBwcm9wZXJseSBzY29wZWQgY2xlYW51cCBtZXRob2QgZm9yIHJlbW92aW5nIGxpc3RlbmVyc1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGxzLmZvckVhY2goZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgICAgICAgdmFyIGUgPSBfcmVmNFswXSxcbiAgICAgICAgICAgICAgaCA9IF9yZWY0WzFdO1xuICAgICAgICAgIHJldHVybiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGUsIGgpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHZhciBvblJlZiA9IGZ1bmN0aW9uIG9uUmVmKGVsKSB7XG4gICAgLy8gXCJpbmxpbmVcIiByZWYgZnVuY3Rpb25zIGFyZSBjYWxsZWQgdHdpY2Ugb24gcmVuZGVyLCBvbmNlIHdpdGggbnVsbCB0aGVuIGFnYWluIHdpdGggRE9NIGVsZW1lbnRcbiAgICAvLyBpZ25vcmUgbnVsbCBoZXJlXG4gICAgaWYgKGVsID09PSBudWxsKSByZXR1cm47XG4gICAgc2V0KGZ1bmN0aW9uIChzdGF0ZSwgcHJvcHMpIHtcbiAgICAgIC8vIGlmIHRoZSBzYW1lIERPTSBlbCBhcyBwcmV2aW91cyBqdXN0IHJldHVybiBzdGF0ZVxuICAgICAgaWYgKHN0YXRlLmVsID09PSBlbCkgcmV0dXJuIHN0YXRlO1xuICAgICAgdmFyIGFkZFN0YXRlID0ge307IC8vIGlmIG5ldyBET00gZWwgY2xlYW4gdXAgb2xkIERPTSBhbmQgcmVzZXQgY2xlYW5VcFRvdWNoXG5cbiAgICAgIGlmIChzdGF0ZS5lbCAmJiBzdGF0ZS5lbCAhPT0gZWwgJiYgc3RhdGUuY2xlYW5VcFRvdWNoKSB7XG4gICAgICAgIHN0YXRlLmNsZWFuVXBUb3VjaCgpO1xuICAgICAgICBhZGRTdGF0ZS5jbGVhblVwVG91Y2ggPSBudWxsO1xuICAgICAgfSAvLyBvbmx5IGF0dGFjaCBpZiB3ZSB3YW50IHRvIHRyYWNrIHRvdWNoXG5cblxuICAgICAgaWYgKHByb3BzLnRyYWNrVG91Y2ggJiYgZWwpIHtcbiAgICAgICAgYWRkU3RhdGUuY2xlYW5VcFRvdWNoID0gYXR0YWNoVG91Y2goZWwpO1xuICAgICAgfSAvLyBzdG9yZSBldmVudCBhdHRhY2hlZCBET00gZWwgZm9yIGNvbXBhcmlzb24sIGNsZWFuIHVwLCBhbmQgcmUtYXR0YWNobWVudFxuXG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZWw6IGVsXG4gICAgICB9LCBhZGRTdGF0ZSk7XG4gICAgfSk7XG4gIH07IC8vIHNldCByZWYgY2FsbGJhY2sgdG8gYXR0YWNoIHRvdWNoIGV2ZW50IGxpc3RlbmVyc1xuXG5cbiAgdmFyIG91dHB1dCA9IHtcbiAgICByZWY6IG9uUmVmIC8vIGlmIHRyYWNrIG1vdXNlIGF0dGFjaCBtb3VzZSBkb3duIGxpc3RlbmVyXG5cbiAgfTtcblxuICBpZiAoaGFuZGxlclByb3BzLnRyYWNrTW91c2UpIHtcbiAgICBvdXRwdXQub25Nb3VzZURvd24gPSBvblN0YXJ0O1xuICB9XG5cbiAgcmV0dXJuIFtvdXRwdXQsIGF0dGFjaFRvdWNoXTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVHJhbnNpZW50U3RhdGUoc3RhdGUsIHByb3BzLCBhdHRhY2hUb3VjaCkge1xuICB2YXIgYWRkU3RhdGUgPSB7fTsgLy8gY2xlYW4gdXAgdG91Y2ggaGFuZGxlcnMgaWYgbm8gbG9uZ2VyIHRyYWNraW5nIHRvdWNoZXNcblxuICBpZiAoIXByb3BzLnRyYWNrVG91Y2ggJiYgc3RhdGUuY2xlYW5VcFRvdWNoKSB7XG4gICAgc3RhdGUuY2xlYW5VcFRvdWNoKCk7XG4gICAgYWRkU3RhdGUuY2xlYW5VcFRvdWNoID0gbnVsbDtcbiAgfSBlbHNlIGlmIChwcm9wcy50cmFja1RvdWNoICYmICFzdGF0ZS5jbGVhblVwVG91Y2gpIHtcbiAgICAvLyBhdHRhY2gvcmUtYXR0YWNoIHRvdWNoIGhhbmRsZXJzXG4gICAgaWYgKHN0YXRlLmVsKSB7XG4gICAgICBhZGRTdGF0ZS5jbGVhblVwVG91Y2ggPSBhdHRhY2hUb3VjaChzdGF0ZS5lbCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgYWRkU3RhdGUpO1xufVxuXG5mdW5jdGlvbiB1c2VTd2lwZWFibGUocHJvcHMpIHtcbiAgdmFyIHRyYWNrTW91c2UgPSBwcm9wcy50cmFja01vdXNlO1xuICB2YXIgdHJhbnNpZW50U3RhdGUgPSBSZWFjdC51c2VSZWYoX2V4dGVuZHMoe30sIGluaXRpYWxTdGF0ZSwge1xuICAgIHR5cGU6ICdob29rJ1xuICB9KSk7XG4gIHZhciB0cmFuc2llbnRQcm9wcyA9IFJlYWN0LnVzZVJlZigpO1xuICB0cmFuc2llbnRQcm9wcy5jdXJyZW50ID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQcm9wcywgcHJvcHMpO1xuXG4gIHZhciBfUmVhY3QkdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXRIYW5kbGVycyhmdW5jdGlvbiAoY2IpIHtcbiAgICAgIHJldHVybiB0cmFuc2llbnRTdGF0ZS5jdXJyZW50ID0gY2IodHJhbnNpZW50U3RhdGUuY3VycmVudCwgdHJhbnNpZW50UHJvcHMuY3VycmVudCk7XG4gICAgfSwge1xuICAgICAgdHJhY2tNb3VzZTogdHJhY2tNb3VzZVxuICAgIH0pO1xuICB9LCBbdHJhY2tNb3VzZV0pLFxuICAgICAgaGFuZGxlcnMgPSBfUmVhY3QkdXNlTWVtb1swXSxcbiAgICAgIGF0dGFjaFRvdWNoID0gX1JlYWN0JHVzZU1lbW9bMV07XG5cbiAgdHJhbnNpZW50U3RhdGUuY3VycmVudCA9IHVwZGF0ZVRyYW5zaWVudFN0YXRlKHRyYW5zaWVudFN0YXRlLmN1cnJlbnQsIHRyYW5zaWVudFByb3BzLmN1cnJlbnQsIGF0dGFjaFRvdWNoKTtcbiAgcmV0dXJuIGhhbmRsZXJzO1xufVxudmFyIFN3aXBlYWJsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoU3dpcGVhYmxlLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3dpcGVhYmxlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkUHVyZUNvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuXG4gICAgX3RoaXMuX3NldCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgX3RoaXMudHJhbnNpZW50U3RhdGUgPSBjYihfdGhpcy50cmFuc2llbnRTdGF0ZSwgX3RoaXMucHJvcHMpO1xuICAgIH07XG5cbiAgICBfdGhpcy50cmFuc2llbnRTdGF0ZSA9IF9leHRlbmRzKHt9LCBpbml0aWFsU3RhdGUsIHtcbiAgICAgIHR5cGU6ICdjbGFzcydcbiAgICB9KTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3dpcGVhYmxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wcy5zdHlsZSxcbiAgICAgICAgX3RoaXMkcHJvcHMkbm9kZU5hbWUgPSBfdGhpcyRwcm9wcy5ub2RlTmFtZSxcbiAgICAgICAgbm9kZU5hbWUgPSBfdGhpcyRwcm9wcyRub2RlTmFtZSA9PT0gdm9pZCAwID8gJ2RpdicgOiBfdGhpcyRwcm9wcyRub2RlTmFtZSxcbiAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wcy5pbm5lclJlZixcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgdHJhY2tNb3VzZSA9IF90aGlzJHByb3BzLnRyYWNrTW91c2U7XG5cbiAgICB2YXIgX2dldEhhbmRsZXJzID0gZ2V0SGFuZGxlcnModGhpcy5fc2V0LCB7XG4gICAgICB0cmFja01vdXNlOiB0cmFja01vdXNlXG4gICAgfSksXG4gICAgICAgIGhhbmRsZXJzID0gX2dldEhhbmRsZXJzWzBdLFxuICAgICAgICBhdHRhY2hUb3VjaCA9IF9nZXRIYW5kbGVyc1sxXTtcblxuICAgIHRoaXMudHJhbnNpZW50U3RhdGUgPSB1cGRhdGVUcmFuc2llbnRTdGF0ZSh0aGlzLnRyYW5zaWVudFN0YXRlLCB0aGlzLnByb3BzLCBhdHRhY2hUb3VjaCk7XG4gICAgdmFyIHJlZiA9IGlubmVyUmVmID8gZnVuY3Rpb24gKGVsKSB7XG4gICAgICByZXR1cm4gaW5uZXJSZWYoZWwpLCBoYW5kbGVycy5yZWYoZWwpO1xuICAgIH0gOiBoYW5kbGVycy5yZWY7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUsIF9leHRlbmRzKHt9LCBoYW5kbGVycywge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBzdHlsZTogc3R5bGUsXG4gICAgICByZWY6IHJlZlxuICAgIH0pLCBjaGlsZHJlbik7XG4gIH07XG5cbiAgcmV0dXJuIFN3aXBlYWJsZTtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCk7XG5Td2lwZWFibGUucHJvcFR5cGVzID0ge1xuICBvblN3aXBlZDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU3dpcGluZzogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU3dpcGVkVXA6IFByb3BUeXBlcy5mdW5jLFxuICBvblN3aXBlZFJpZ2h0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Td2lwZWREb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Td2lwZWRMZWZ0OiBQcm9wVHlwZXMuZnVuYyxcbiAgZGVsdGE6IFByb3BUeXBlcy5udW1iZXIsXG4gIHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQ6IFByb3BUeXBlcy5ib29sLFxuICBub2RlTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJhY2tNb3VzZTogUHJvcFR5cGVzLmJvb2wsXG4gIHRyYWNrVG91Y2g6IFByb3BUeXBlcy5ib29sLFxuICBpbm5lclJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIHJvdGF0aW9uQW5nbGU6IFByb3BUeXBlcy5udW1iZXJcbn07XG5Td2lwZWFibGUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgeyBET1dOLCBMRUZULCBSSUdIVCwgU3dpcGVhYmxlLCBVUCwgdXNlU3dpcGVhYmxlIH07XG4iLCIvKipcclxuICogQSBjb2xsZWN0aW9uIG9mIHNoaW1zIHRoYXQgcHJvdmlkZSBtaW5pbWFsIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIEVTNiBjb2xsZWN0aW9ucy5cclxuICpcclxuICogVGhlc2UgaW1wbGVtZW50YXRpb25zIGFyZSBub3QgbWVhbnQgdG8gYmUgdXNlZCBvdXRzaWRlIG9mIHRoZSBSZXNpemVPYnNlcnZlclxyXG4gKiBtb2R1bGVzIGFzIHRoZXkgY292ZXIgb25seSBhIGxpbWl0ZWQgcmFuZ2Ugb2YgdXNlIGNhc2VzLlxyXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MsIHZhbGlkLWpzZG9jICovXG52YXIgTWFwU2hpbSA9IChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBNYXA7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGluZGV4IGluIHByb3ZpZGVkIGFycmF5IHRoYXQgbWF0Y2hlcyB0aGUgc3BlY2lmaWVkIGtleS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PEFycmF5Pn0gYXJyXHJcbiAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldEluZGV4KGFyciwga2V5KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSAtMTtcblxuICAgICAgICBhcnIuc29tZShmdW5jdGlvbiAoZW50cnksIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoZW50cnlbMF0gPT09IGtleSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGluZGV4O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gYW5vbnltb3VzKCkge1xuICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgc2l6ZTogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAqL1xuICAgICAgICBwcm90b3R5cGVBY2Nlc3NvcnMuc2l6ZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2VudHJpZXNfXy5sZW5ndGg7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAgICAgKi9cbiAgICAgICAgYW5vbnltb3VzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xuICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5fX2VudHJpZXNfX1tpbmRleF07XG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeVsxXTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cbiAgICAgICAgYW5vbnltb3VzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgodGhpcy5fX2VudHJpZXNfXywga2V5KTtcblxuICAgICAgICAgICAgaWYgKH5pbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX19baW5kZXhdWzFdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18ucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXG4gICAgICAgIGFub255bW91cy5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLl9fZW50cmllc19fO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgoZW50cmllcywga2V5KTtcblxuICAgICAgICAgICAgaWYgKH5pbmRleCkge1xuICAgICAgICAgICAgICAgIGVudHJpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xuICAgICAgICBhbm9ueW1vdXMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiAhIX5nZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xuICAgICAgICBhbm9ueW1vdXMucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXy5zcGxpY2UoMCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtjdHg9bnVsbF1cclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cbiAgICAgICAgYW5vbnltb3VzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjdHgpIHtcbiAgICAgICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKCBjdHggPT09IHZvaWQgMCApIGN0eCA9IG51bGw7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gdGhpcyQxLl9fZW50cmllc19fOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IGxpc3RbaV07XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGN0eCwgZW50cnlbMV0sIGVudHJ5WzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggYW5vbnltb3VzLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbiAgICAgICAgcmV0dXJuIGFub255bW91cztcbiAgICB9KCkpO1xufSkoKTtcblxuLyoqXHJcbiAqIERldGVjdHMgd2hldGhlciB3aW5kb3cgYW5kIGRvY3VtZW50IG9iamVjdHMgYXJlIGF2YWlsYWJsZSBpbiBjdXJyZW50IGVudmlyb25tZW50LlxyXG4gKi9cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCA9PT0gZG9jdW1lbnQ7XG5cbi8vIFJldHVybnMgZ2xvYmFsIG9iamVjdCBvZiBhIGN1cnJlbnQgZW52aXJvbm1lbnQuXG52YXIgZ2xvYmFsJDEgPSAoZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwuTWF0aCA9PT0gTWF0aCkge1xuICAgICAgICByZXR1cm4gZ2xvYmFsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09PSBNYXRoKSB7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PT0gTWF0aCkge1xuICAgICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgIHJldHVybiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xufSkoKTtcblxuLyoqXHJcbiAqIEEgc2hpbSBmb3IgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB3aGljaCBmYWxscyBiYWNrIHRvIHRoZSBzZXRUaW1lb3V0IGlmXHJcbiAqIGZpcnN0IG9uZSBpcyBub3Qgc3VwcG9ydGVkLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXF1ZXN0cycgaWRlbnRpZmllci5cclxuICovXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lJDEgPSAoZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEl0J3MgcmVxdWlyZWQgdG8gdXNlIGEgYm91bmRlZCBmdW5jdGlvbiBiZWNhdXNlIElFIHNvbWV0aW1lcyB0aHJvd3NcbiAgICAgICAgLy8gYW4gXCJJbnZhbGlkIGNhbGxpbmcgb2JqZWN0XCIgZXJyb3IgaWYgckFGIGlzIGludm9rZWQgd2l0aG91dCB0aGUgZ2xvYmFsXG4gICAgICAgIC8vIG9iamVjdCBvbiB0aGUgbGVmdCBoYW5kIHNpZGUuXG4gICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChnbG9iYWwkMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjYWxsYmFjaykgeyByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBjYWxsYmFjayhEYXRlLm5vdygpKTsgfSwgMTAwMCAvIDYwKTsgfTtcbn0pKCk7XG5cbi8vIERlZmluZXMgbWluaW11bSB0aW1lb3V0IGJlZm9yZSBhZGRpbmcgYSB0cmFpbGluZyBjYWxsLlxudmFyIHRyYWlsaW5nVGltZW91dCA9IDI7XG5cbi8qKlxyXG4gKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBlbnN1cmVzIHRoYXQgcHJvdmlkZWQgY2FsbGJhY2sgd2lsbCBiZVxyXG4gKiBpbnZva2VkIG9ubHkgb25jZSBkdXJpbmcgdGhlIHNwZWNpZmllZCBkZWxheSBwZXJpb2QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgZGVsYXkgcGVyaW9kLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgLSBEZWxheSBhZnRlciB3aGljaCB0byBpbnZva2UgY2FsbGJhY2suXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICovXG52YXIgdGhyb3R0bGUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGRlbGF5KSB7XG4gICAgdmFyIGxlYWRpbmdDYWxsID0gZmFsc2UsXG4gICAgICAgIHRyYWlsaW5nQ2FsbCA9IGZhbHNlLFxuICAgICAgICBsYXN0Q2FsbFRpbWUgPSAwO1xuXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VzIHRoZSBvcmlnaW5hbCBjYWxsYmFjayBmdW5jdGlvbiBhbmQgc2NoZWR1bGVzIG5ldyBpbnZvY2F0aW9uIGlmXHJcbiAgICAgKiB0aGUgXCJwcm94eVwiIHdhcyBjYWxsZWQgZHVyaW5nIGN1cnJlbnQgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVQZW5kaW5nKCkge1xuICAgICAgICBpZiAobGVhZGluZ0NhbGwpIHtcbiAgICAgICAgICAgIGxlYWRpbmdDYWxsID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhaWxpbmdDYWxsKSB7XG4gICAgICAgICAgICBwcm94eSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXkuIEl0IHdpbGwgZnVydGhlciBwb3N0cG9uZVxyXG4gICAgICogaW52b2NhdGlvbiBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZGVsZWdhdGluZyBpdCB0byB0aGVcclxuICAgICAqIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRpbWVvdXRDYWxsYmFjaygpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lJDEocmVzb2x2ZVBlbmRpbmcpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogU2NoZWR1bGVzIGludm9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gcHJveHkoKSB7XG4gICAgICAgIHZhciB0aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGlmIChsZWFkaW5nQ2FsbCkge1xuICAgICAgICAgICAgLy8gUmVqZWN0IGltbWVkaWF0ZWx5IGZvbGxvd2luZyBjYWxscy5cbiAgICAgICAgICAgIGlmICh0aW1lU3RhbXAgLSBsYXN0Q2FsbFRpbWUgPCB0cmFpbGluZ1RpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNjaGVkdWxlIG5ldyBjYWxsIHRvIGJlIGluIGludm9rZWQgd2hlbiB0aGUgcGVuZGluZyBvbmUgaXMgcmVzb2x2ZWQuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGltcG9ydGFudCBmb3IgXCJ0cmFuc2l0aW9uc1wiIHdoaWNoIG5ldmVyIGFjdHVhbGx5IHN0YXJ0XG4gICAgICAgICAgICAvLyBpbW1lZGlhdGVseSBzbyB0aGVyZSBpcyBhIGNoYW5jZSB0aGF0IHdlIG1pZ2h0IG1pc3Mgb25lIGlmIGNoYW5nZVxuICAgICAgICAgICAgLy8gaGFwcGVucyBhbWlkcyB0aGUgcGVuZGluZyBpbnZvY2F0aW9uLlxuICAgICAgICAgICAgdHJhaWxpbmdDYWxsID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxlYWRpbmdDYWxsID0gdHJ1ZTtcbiAgICAgICAgICAgIHRyYWlsaW5nQ2FsbCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRpbWVvdXRDYWxsYmFjaywgZGVsYXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdENhbGxUaW1lID0gdGltZVN0YW1wO1xuICAgIH1cblxuICAgIHJldHVybiBwcm94eTtcbn07XG5cbi8vIE1pbmltdW0gZGVsYXkgYmVmb3JlIGludm9raW5nIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2ZXJzLlxudmFyIFJFRlJFU0hfREVMQVkgPSAyMDtcblxuLy8gQSBsaXN0IG9mIHN1YnN0cmluZ3Mgb2YgQ1NTIHByb3BlcnRpZXMgdXNlZCB0byBmaW5kIHRyYW5zaXRpb24gZXZlbnRzIHRoYXRcbi8vIG1pZ2h0IGFmZmVjdCBkaW1lbnNpb25zIG9mIG9ic2VydmVkIGVsZW1lbnRzLlxudmFyIHRyYW5zaXRpb25LZXlzID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ3NpemUnLCAnd2VpZ2h0J107XG5cbi8vIENoZWNrIGlmIE11dGF0aW9uT2JzZXJ2ZXIgaXMgYXZhaWxhYmxlLlxudmFyIG11dGF0aW9uT2JzZXJ2ZXJTdXBwb3J0ZWQgPSB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8qKlxyXG4gKiBTaW5nbGV0b24gY29udHJvbGxlciBjbGFzcyB3aGljaCBoYW5kbGVzIHVwZGF0ZXMgb2YgUmVzaXplT2JzZXJ2ZXIgaW5zdGFuY2VzLlxyXG4gKi9cbnZhciBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNvbm5lY3RlZF8gPSBmYWxzZTtcbiAgICB0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfID0gZmFsc2U7XG4gICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBudWxsO1xuICAgIHRoaXMub2JzZXJ2ZXJzXyA9IFtdO1xuXG4gICAgdGhpcy5vblRyYW5zaXRpb25FbmRfID0gdGhpcy5vblRyYW5zaXRpb25FbmRfLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZWZyZXNoID0gdGhyb3R0bGUodGhpcy5yZWZyZXNoLmJpbmQodGhpcyksIFJFRlJFU0hfREVMQVkpO1xufTtcblxuLyoqXHJcbiAqIEFkZHMgb2JzZXJ2ZXIgdG8gb2JzZXJ2ZXJzIGxpc3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJTUEl9IG9ic2VydmVyIC0gT2JzZXJ2ZXIgdG8gYmUgYWRkZWQuXHJcbiAqIEByZXR1cm5zIHt2b2lkfVxyXG4gKi9cblxuXG4vKipcclxuICogSG9sZHMgcmVmZXJlbmNlIHRvIHRoZSBjb250cm9sbGVyJ3MgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwcml2YXRlIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9XHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBLZWVwcyByZWZlcmVuY2UgdG8gdGhlIGluc3RhbmNlIG9mIE11dGF0aW9uT2JzZXJ2ZXIuXHJcbiAqXHJcbiAqIEBwcml2YXRlIHtNdXRhdGlvbk9ic2VydmVyfVxyXG4gKi9cblxuLyoqXHJcbiAqIEluZGljYXRlcyB3aGV0aGVyIERPTSBsaXN0ZW5lcnMgaGF2ZSBiZWVuIGFkZGVkLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbn1cclxuICovXG5SZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmFkZE9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgaWYgKCF+dGhpcy5vYnNlcnZlcnNfLmluZGV4T2Yob2JzZXJ2ZXIpKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzXy5wdXNoKG9ic2VydmVyKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgbGlzdGVuZXJzIGlmIHRoZXkgaGF2ZW4ndCBiZWVuIGFkZGVkIHlldC5cbiAgICBpZiAoIXRoaXMuY29ubmVjdGVkXykge1xuICAgICAgICB0aGlzLmNvbm5lY3RfKCk7XG4gICAgfVxufTtcblxuLyoqXHJcbiAqIFJlbW92ZXMgb2JzZXJ2ZXIgZnJvbSBvYnNlcnZlcnMgbGlzdC5cclxuICpcclxuICogQHBhcmFtIHtSZXNpemVPYnNlcnZlclNQSX0gb2JzZXJ2ZXIgLSBPYnNlcnZlciB0byBiZSByZW1vdmVkLlxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICovXG5SZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXztcbiAgICB2YXIgaW5kZXggPSBvYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XG5cbiAgICAvLyBSZW1vdmUgb2JzZXJ2ZXIgaWYgaXQncyBwcmVzZW50IGluIHJlZ2lzdHJ5LlxuICAgIGlmICh+aW5kZXgpIHtcbiAgICAgICAgb2JzZXJ2ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGxpc3RlbmVycyBpZiBjb250cm9sbGVyIGhhcyBubyBjb25uZWN0ZWQgb2JzZXJ2ZXJzLlxuICAgIGlmICghb2JzZXJ2ZXJzLmxlbmd0aCAmJiB0aGlzLmNvbm5lY3RlZF8pIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0XygpO1xuICAgIH1cbn07XG5cbi8qKlxyXG4gKiBJbnZva2VzIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2ZXJzLiBJdCB3aWxsIGNvbnRpbnVlIHJ1bm5pbmcgdXBkYXRlcyBpbnNvZmFyXHJcbiAqIGl0IGRldGVjdHMgY2hhbmdlcy5cclxuICpcclxuICogQHJldHVybnMge3ZvaWR9XHJcbiAqL1xuUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjaGFuZ2VzRGV0ZWN0ZWQgPSB0aGlzLnVwZGF0ZU9ic2VydmVyc18oKTtcblxuICAgIC8vIENvbnRpbnVlIHJ1bm5pbmcgdXBkYXRlcyBpZiBjaGFuZ2VzIGhhdmUgYmVlbiBkZXRlY3RlZCBhcyB0aGVyZSBtaWdodFxuICAgIC8vIGJlIGZ1dHVyZSBvbmVzIGNhdXNlZCBieSBDU1MgdHJhbnNpdGlvbnMuXG4gICAgaWYgKGNoYW5nZXNEZXRlY3RlZCkge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG59O1xuXG4vKipcclxuICogVXBkYXRlcyBldmVyeSBvYnNlcnZlciBmcm9tIG9ic2VydmVycyBsaXN0IGFuZCBub3RpZmllcyB0aGVtIG9mIHF1ZXVlZFxyXG4gKiBlbnRyaWVzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBcInRydWVcIiBpZiBhbnkgb2JzZXJ2ZXIgaGFzIGRldGVjdGVkIGNoYW5nZXMgaW5cclxuICogIGRpbWVuc2lvbnMgb2YgaXQncyBlbGVtZW50cy5cclxuICovXG5SZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnVwZGF0ZU9ic2VydmVyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQ29sbGVjdCBvYnNlcnZlcnMgdGhhdCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXG4gICAgdmFyIGFjdGl2ZU9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXy5maWx0ZXIoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZlci5nYXRoZXJBY3RpdmUoKSwgb2JzZXJ2ZXIuaGFzQWN0aXZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBEZWxpdmVyIG5vdGlmaWNhdGlvbnMgaW4gYSBzZXBhcmF0ZSBjeWNsZSBpbiBvcmRlciB0byBhdm9pZCBhbnlcbiAgICAvLyBjb2xsaXNpb25zIGJldHdlZW4gb2JzZXJ2ZXJzLCBlLmcuIHdoZW4gbXVsdGlwbGUgaW5zdGFuY2VzIG9mXG4gICAgLy8gUmVzaXplT2JzZXJ2ZXIgYXJlIHRyYWNraW5nIHRoZSBzYW1lIGVsZW1lbnQgYW5kIHRoZSBjYWxsYmFjayBvZiBvbmVcbiAgICAvLyBvZiB0aGVtIGNoYW5nZXMgY29udGVudCBkaW1lbnNpb25zIG9mIHRoZSBvYnNlcnZlZCB0YXJnZXQuIFNvbWV0aW1lc1xuICAgIC8vIHRoaXMgbWF5IHJlc3VsdCBpbiBub3RpZmljYXRpb25zIGJlaW5nIGJsb2NrZWQgZm9yIHRoZSByZXN0IG9mIG9ic2VydmVycy5cbiAgICBhY3RpdmVPYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHsgcmV0dXJuIG9ic2VydmVyLmJyb2FkY2FzdEFjdGl2ZSgpOyB9KTtcblxuICAgIHJldHVybiBhY3RpdmVPYnNlcnZlcnMubGVuZ3RoID4gMDtcbn07XG5cbi8qKlxyXG4gKiBJbml0aWFsaXplcyBET00gbGlzdGVuZXJzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICovXG5SZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmNvbm5lY3RfID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIERvIG5vdGhpbmcgaWYgcnVubmluZyBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50IG9yIGlmIGxpc3RlbmVyc1xuICAgIC8vIGhhdmUgYmVlbiBhbHJlYWR5IGFkZGVkLlxuICAgIGlmICghaXNCcm93c2VyIHx8IHRoaXMuY29ubmVjdGVkXykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3Vic2NyaXB0aW9uIHRvIHRoZSBcIlRyYW5zaXRpb25lbmRcIiBldmVudCBpcyB1c2VkIGFzIGEgd29ya2Fyb3VuZCBmb3JcbiAgICAvLyBkZWxheWVkIHRyYW5zaXRpb25zLiBUaGlzIHdheSBpdCdzIHBvc3NpYmxlIHRvIGNhcHR1cmUgYXQgbGVhc3QgdGhlXG4gICAgLy8gZmluYWwgc3RhdGUgb2YgYW4gZWxlbWVudC5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZnJlc2gpO1xuXG4gICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJTdXBwb3J0ZWQpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnJlZnJlc2gpO1xuXG4gICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfLm9ic2VydmUoZG9jdW1lbnQsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCB0aGlzLnJlZnJlc2gpO1xuXG4gICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuY29ubmVjdGVkXyA9IHRydWU7XG59O1xuXG4vKipcclxuICogUmVtb3ZlcyBET00gbGlzdGVuZXJzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICovXG5SZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmRpc2Nvbm5lY3RfID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIERvIG5vdGhpbmcgaWYgcnVubmluZyBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50IG9yIGlmIGxpc3RlbmVyc1xuICAgIC8vIGhhdmUgYmVlbiBhbHJlYWR5IHJlbW92ZWQuXG4gICAgaWYgKCFpc0Jyb3dzZXIgfHwgIXRoaXMuY29ubmVjdGVkXykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMub25UcmFuc2l0aW9uRW5kXyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVmcmVzaCk7XG5cbiAgICBpZiAodGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8pIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8uZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIHRoaXMucmVmcmVzaCk7XG4gICAgfVxuXG4gICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBudWxsO1xuICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSBmYWxzZTtcbiAgICB0aGlzLmNvbm5lY3RlZF8gPSBmYWxzZTtcbn07XG5cbi8qKlxyXG4gKiBcIlRyYW5zaXRpb25lbmRcIiBldmVudCBoYW5kbGVyLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge1RyYW5zaXRpb25FdmVudH0gZXZlbnRcclxuICogQHJldHVybnMge3ZvaWR9XHJcbiAqL1xuUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmRfID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lID0gcmVmLnByb3BlcnR5TmFtZTsgaWYgKCBwcm9wZXJ0eU5hbWUgPT09IHZvaWQgMCApIHByb3BlcnR5TmFtZSA9ICcnO1xuXG4gICAgLy8gRGV0ZWN0IHdoZXRoZXIgdHJhbnNpdGlvbiBtYXkgYWZmZWN0IGRpbWVuc2lvbnMgb2YgYW4gZWxlbWVudC5cbiAgICB2YXIgaXNSZWZsb3dQcm9wZXJ0eSA9IHRyYW5zaXRpb25LZXlzLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gISF+cHJvcGVydHlOYW1lLmluZGV4T2Yoa2V5KTtcbiAgICB9KTtcblxuICAgIGlmIChpc1JlZmxvd1Byb3BlcnR5KSB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbn07XG5cbi8qKlxyXG4gKiBSZXR1cm5zIGluc3RhbmNlIG9mIHRoZSBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9XHJcbiAqL1xuUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZV8pIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZV8gPSBuZXcgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VfO1xufTtcblxuUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmluc3RhbmNlXyA9IG51bGw7XG5cbi8qKlxyXG4gKiBEZWZpbmVzIG5vbi13cml0YWJsZS9lbnVtZXJhYmxlIHByb3BlcnRpZXMgb2YgdGhlIHByb3ZpZGVkIHRhcmdldCBvYmplY3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgLSBPYmplY3QgZm9yIHdoaWNoIHRvIGRlZmluZSBwcm9wZXJ0aWVzLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBQcm9wZXJ0aWVzIHRvIGJlIGRlZmluZWQuXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRhcmdldCBvYmplY3QuXHJcbiAqL1xudmFyIGRlZmluZUNvbmZpZ3VyYWJsZSA9IChmdW5jdGlvbiAodGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gT2JqZWN0LmtleXMocHJvcHMpOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIga2V5ID0gbGlzdFtpXTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wc1trZXldLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn0pO1xuXG4vKipcclxuICogUmV0dXJucyB0aGUgZ2xvYmFsIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggcHJvdmlkZWQgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gKi9cbnZhciBnZXRXaW5kb3dPZiA9IChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgLy8gQXNzdW1lIHRoYXQgdGhlIGVsZW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgTm9kZSwgd2hpY2ggbWVhbnMgdGhhdCBpdFxuICAgIC8vIGhhcyB0aGUgXCJvd25lckRvY3VtZW50XCIgcHJvcGVydHkgZnJvbSB3aGljaCB3ZSBjYW4gcmV0cmlldmUgYVxuICAgIC8vIGNvcnJlc3BvbmRpbmcgZ2xvYmFsIG9iamVjdC5cbiAgICB2YXIgb3duZXJHbG9iYWwgPSB0YXJnZXQgJiYgdGFyZ2V0Lm93bmVyRG9jdW1lbnQgJiYgdGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cbiAgICAvLyBSZXR1cm4gdGhlIGxvY2FsIGdsb2JhbCBvYmplY3QgaWYgaXQncyBub3QgcG9zc2libGUgZXh0cmFjdCBvbmUgZnJvbVxuICAgIC8vIHByb3ZpZGVkIGVsZW1lbnQuXG4gICAgcmV0dXJuIG93bmVyR2xvYmFsIHx8IGdsb2JhbCQxO1xufSk7XG5cbi8vIFBsYWNlaG9sZGVyIG9mIGFuIGVtcHR5IGNvbnRlbnQgcmVjdGFuZ2xlLlxudmFyIGVtcHR5UmVjdCA9IGNyZWF0ZVJlY3RJbml0KDAsIDAsIDAsIDApO1xuXG4vKipcclxuICogQ29udmVydHMgcHJvdmlkZWQgc3RyaW5nIHRvIGEgbnVtYmVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHZhbHVlXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xuZnVuY3Rpb24gdG9GbG9hdCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwO1xufVxuXG4vKipcclxuICogRXh0cmFjdHMgYm9yZGVycyBzaXplIGZyb20gcHJvdmlkZWQgc3R5bGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlc1xyXG4gKiBAcGFyYW0gey4uLnN0cmluZ30gcG9zaXRpb25zIC0gQm9yZGVycyBwb3NpdGlvbnMgKHRvcCwgcmlnaHQsIC4uLilcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXG5mdW5jdGlvbiBnZXRCb3JkZXJzU2l6ZShzdHlsZXMpIHtcbiAgICB2YXIgcG9zaXRpb25zID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgIHdoaWxlICggbGVuLS0gPiAwICkgcG9zaXRpb25zWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHNpemUsIHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1snYm9yZGVyLScgKyBwb3NpdGlvbiArICctd2lkdGgnXTtcblxuICAgICAgICByZXR1cm4gc2l6ZSArIHRvRmxvYXQodmFsdWUpO1xuICAgIH0sIDApO1xufVxuXG4vKipcclxuICogRXh0cmFjdHMgcGFkZGluZ3Mgc2l6ZXMgZnJvbSBwcm92aWRlZCBzdHlsZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFBhZGRpbmdzIGJveC5cclxuICovXG5mdW5jdGlvbiBnZXRQYWRkaW5ncyhzdHlsZXMpIHtcbiAgICB2YXIgcG9zaXRpb25zID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcbiAgICB2YXIgcGFkZGluZ3MgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gcG9zaXRpb25zOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBsaXN0W2ldO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1sncGFkZGluZy0nICsgcG9zaXRpb25dO1xuXG4gICAgICAgIHBhZGRpbmdzW3Bvc2l0aW9uXSA9IHRvRmxvYXQodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBwYWRkaW5ncztcbn1cblxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgY29udGVudCByZWN0YW5nbGUgb2YgcHJvdmlkZWQgU1ZHIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U1ZHR3JhcGhpY3NFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHdoaWNoIG5lZWRzXHJcbiAqICAgICAgdG8gYmUgY2FsY3VsYXRlZC5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cbmZ1bmN0aW9uIGdldFNWR0NvbnRlbnRSZWN0KHRhcmdldCkge1xuICAgIHZhciBiYm94ID0gdGFyZ2V0LmdldEJCb3goKTtcblxuICAgIHJldHVybiBjcmVhdGVSZWN0SW5pdCgwLCAwLCBiYm94LndpZHRoLCBiYm94LmhlaWdodCk7XG59XG5cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHByb3ZpZGVkIEhUTUxFbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGZvciB3aGljaCB0byBjYWxjdWxhdGUgdGhlIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xuZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRDb250ZW50UmVjdCh0YXJnZXQpIHtcbiAgICAvLyBDbGllbnQgd2lkdGggJiBoZWlnaHQgcHJvcGVydGllcyBjYW4ndCBiZVxuICAgIC8vIHVzZWQgZXhjbHVzaXZlbHkgYXMgdGhleSBwcm92aWRlIHJvdW5kZWQgdmFsdWVzLlxuICAgIHZhciBjbGllbnRXaWR0aCA9IHRhcmdldC5jbGllbnRXaWR0aDtcbiAgICB2YXIgY2xpZW50SGVpZ2h0ID0gdGFyZ2V0LmNsaWVudEhlaWdodDtcblxuICAgIC8vIEJ5IHRoaXMgY29uZGl0aW9uIHdlIGNhbiBjYXRjaCBhbGwgbm9uLXJlcGxhY2VkIGlubGluZSwgaGlkZGVuIGFuZFxuICAgIC8vIGRldGFjaGVkIGVsZW1lbnRzLiBUaG91Z2ggZWxlbWVudHMgd2l0aCB3aWR0aCAmIGhlaWdodCBwcm9wZXJ0aWVzIGxlc3NcbiAgICAvLyB0aGFuIDAuNSB3aWxsIGJlIGRpc2NhcmRlZCBhcyB3ZWxsLlxuICAgIC8vXG4gICAgLy8gV2l0aG91dCBpdCB3ZSB3b3VsZCBuZWVkIHRvIGltcGxlbWVudCBzZXBhcmF0ZSBtZXRob2RzIGZvciBlYWNoIG9mXG4gICAgLy8gdGhvc2UgY2FzZXMgYW5kIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHBlcmZvcm0gYSBwcmVjaXNlIGFuZCBwZXJmb3JtYW5jZVxuICAgIC8vIGVmZmVjdGl2ZSB0ZXN0IGZvciBoaWRkZW4gZWxlbWVudHMuIEUuZy4gZXZlbiBqUXVlcnkncyAnOnZpc2libGUnIGZpbHRlclxuICAgIC8vIGdpdmVzIHdyb25nIHJlc3VsdHMgZm9yIGVsZW1lbnRzIHdpdGggd2lkdGggJiBoZWlnaHQgbGVzcyB0aGFuIDAuNS5cbiAgICBpZiAoIWNsaWVudFdpZHRoICYmICFjbGllbnRIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIGVtcHR5UmVjdDtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVzID0gZ2V0V2luZG93T2YodGFyZ2V0KS5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XG4gICAgdmFyIHBhZGRpbmdzID0gZ2V0UGFkZGluZ3Moc3R5bGVzKTtcbiAgICB2YXIgaG9yaXpQYWQgPSBwYWRkaW5ncy5sZWZ0ICsgcGFkZGluZ3MucmlnaHQ7XG4gICAgdmFyIHZlcnRQYWQgPSBwYWRkaW5ncy50b3AgKyBwYWRkaW5ncy5ib3R0b207XG5cbiAgICAvLyBDb21wdXRlZCBzdHlsZXMgb2Ygd2lkdGggJiBoZWlnaHQgYXJlIGJlaW5nIHVzZWQgYmVjYXVzZSB0aGV5IGFyZSB0aGVcbiAgICAvLyBvbmx5IGRpbWVuc2lvbnMgYXZhaWxhYmxlIHRvIEpTIHRoYXQgY29udGFpbiBub24tcm91bmRlZCB2YWx1ZXMuIEl0IGNvdWxkXG4gICAgLy8gYmUgcG9zc2libGUgdG8gdXRpbGl6ZSB0aGUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlmIG9ubHkgaXQncyBkYXRhIHdhc24ndFxuICAgIC8vIGFmZmVjdGVkIGJ5IENTUyB0cmFuc2Zvcm1hdGlvbnMgbGV0IGFsb25lIHBhZGRpbmdzLCBib3JkZXJzIGFuZCBzY3JvbGwgYmFycy5cbiAgICB2YXIgd2lkdGggPSB0b0Zsb2F0KHN0eWxlcy53aWR0aCksXG4gICAgICAgIGhlaWdodCA9IHRvRmxvYXQoc3R5bGVzLmhlaWdodCk7XG5cbiAgICAvLyBXaWR0aCAmIGhlaWdodCBpbmNsdWRlIHBhZGRpbmdzIGFuZCBib3JkZXJzIHdoZW4gdGhlICdib3JkZXItYm94JyBib3hcbiAgICAvLyBtb2RlbCBpcyBhcHBsaWVkIChleGNlcHQgZm9yIElFKS5cbiAgICBpZiAoc3R5bGVzLmJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgIC8vIEZvbGxvd2luZyBjb25kaXRpb25zIGFyZSByZXF1aXJlZCB0byBoYW5kbGUgSW50ZXJuZXQgRXhwbG9yZXIgd2hpY2hcbiAgICAgICAgLy8gZG9lc24ndCBpbmNsdWRlIHBhZGRpbmdzIGFuZCBib3JkZXJzIHRvIGNvbXB1dGVkIENTUyBkaW1lbnNpb25zLlxuICAgICAgICAvL1xuICAgICAgICAvLyBXZSBjYW4gc2F5IHRoYXQgaWYgQ1NTIGRpbWVuc2lvbnMgKyBwYWRkaW5ncyBhcmUgZXF1YWwgdG8gdGhlIFwiY2xpZW50XCJcbiAgICAgICAgLy8gcHJvcGVydGllcyB0aGVuIGl0J3MgZWl0aGVyIElFLCBhbmQgdGh1cyB3ZSBkb24ndCBuZWVkIHRvIHN1YnRyYWN0XG4gICAgICAgIC8vIGFueXRoaW5nLCBvciBhbiBlbGVtZW50IG1lcmVseSBkb2Vzbid0IGhhdmUgcGFkZGluZ3MvYm9yZGVycyBzdHlsZXMuXG4gICAgICAgIGlmIChNYXRoLnJvdW5kKHdpZHRoICsgaG9yaXpQYWQpICE9PSBjbGllbnRXaWR0aCkge1xuICAgICAgICAgICAgd2lkdGggLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAnbGVmdCcsICdyaWdodCcpICsgaG9yaXpQYWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTWF0aC5yb3VuZChoZWlnaHQgKyB2ZXJ0UGFkKSAhPT0gY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICBoZWlnaHQgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAndG9wJywgJ2JvdHRvbScpICsgdmVydFBhZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZvbGxvd2luZyBzdGVwcyBjYW4ndCBiZSBhcHBsaWVkIHRvIHRoZSBkb2N1bWVudCdzIHJvb3QgZWxlbWVudCBhcyBpdHNcbiAgICAvLyBjbGllbnRbV2lkdGgvSGVpZ2h0XSBwcm9wZXJ0aWVzIHJlcHJlc2VudCB2aWV3cG9ydCBhcmVhIG9mIHRoZSB3aW5kb3cuXG4gICAgLy8gQmVzaWRlcywgaXQncyBhcyB3ZWxsIG5vdCBuZWNlc3NhcnkgYXMgdGhlIDxodG1sPiBpdHNlbGYgbmVpdGhlciBoYXNcbiAgICAvLyByZW5kZXJlZCBzY3JvbGwgYmFycyBub3IgaXQgY2FuIGJlIGNsaXBwZWQuXG4gICAgaWYgKCFpc0RvY3VtZW50RWxlbWVudCh0YXJnZXQpKSB7XG4gICAgICAgIC8vIEluIHNvbWUgYnJvd3NlcnMgKG9ubHkgaW4gRmlyZWZveCwgYWN0dWFsbHkpIENTUyB3aWR0aCAmIGhlaWdodFxuICAgICAgICAvLyBpbmNsdWRlIHNjcm9sbCBiYXJzIHNpemUgd2hpY2ggY2FuIGJlIHJlbW92ZWQgYXQgdGhpcyBzdGVwIGFzIHNjcm9sbFxuICAgICAgICAvLyBiYXJzIGFyZSB0aGUgb25seSBkaWZmZXJlbmNlIGJldHdlZW4gcm91bmRlZCBkaW1lbnNpb25zICsgcGFkZGluZ3NcbiAgICAgICAgLy8gYW5kIFwiY2xpZW50XCIgcHJvcGVydGllcywgdGhvdWdoIHRoYXQgaXMgbm90IGFsd2F5cyB0cnVlIGluIENocm9tZS5cbiAgICAgICAgdmFyIHZlcnRTY3JvbGxiYXIgPSBNYXRoLnJvdW5kKHdpZHRoICsgaG9yaXpQYWQpIC0gY2xpZW50V2lkdGg7XG4gICAgICAgIHZhciBob3JpelNjcm9sbGJhciA9IE1hdGgucm91bmQoaGVpZ2h0ICsgdmVydFBhZCkgLSBjbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgLy8gQ2hyb21lIGhhcyBhIHJhdGhlciB3ZWlyZCByb3VuZGluZyBvZiBcImNsaWVudFwiIHByb3BlcnRpZXMuXG4gICAgICAgIC8vIEUuZy4gZm9yIGFuIGVsZW1lbnQgd2l0aCBjb250ZW50IHdpZHRoIG9mIDMxNC4ycHggaXQgc29tZXRpbWVzIGdpdmVzXG4gICAgICAgIC8vIHRoZSBjbGllbnQgd2lkdGggb2YgMzE1cHggYW5kIGZvciB0aGUgd2lkdGggb2YgMzE0LjdweCBpdCBtYXkgZ2l2ZVxuICAgICAgICAvLyAzMTRweC4gQW5kIGl0IGRvZXNuJ3QgaGFwcGVuIGFsbCB0aGUgdGltZS4gU28ganVzdCBpZ25vcmUgdGhpcyBkZWx0YVxuICAgICAgICAvLyBhcyBhIG5vbi1yZWxldmFudC5cbiAgICAgICAgaWYgKE1hdGguYWJzKHZlcnRTY3JvbGxiYXIpICE9PSAxKSB7XG4gICAgICAgICAgICB3aWR0aCAtPSB2ZXJ0U2Nyb2xsYmFyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGhvcml6U2Nyb2xsYmFyKSAhPT0gMSkge1xuICAgICAgICAgICAgaGVpZ2h0IC09IGhvcml6U2Nyb2xsYmFyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KHBhZGRpbmdzLmxlZnQsIHBhZGRpbmdzLnRvcCwgd2lkdGgsIGhlaWdodCk7XG59XG5cbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBwcm92aWRlZCBlbGVtZW50IGlzIGFuIGluc3RhbmNlIG9mIHRoZSBTVkdHcmFwaGljc0VsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXG52YXIgaXNTVkdHcmFwaGljc0VsZW1lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFNvbWUgYnJvd3NlcnMsIG5hbWVseSBJRSBhbmQgRWRnZSwgZG9uJ3QgaGF2ZSB0aGUgU1ZHR3JhcGhpY3NFbGVtZW50XG4gICAgLy8gaW50ZXJmYWNlLlxuICAgIGlmICh0eXBlb2YgU1ZHR3JhcGhpY3NFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5TVkdHcmFwaGljc0VsZW1lbnQ7IH07XG4gICAgfVxuXG4gICAgLy8gSWYgaXQncyBzbywgdGhlbiBjaGVjayB0aGF0IGVsZW1lbnQgaXMgYXQgbGVhc3QgYW4gaW5zdGFuY2Ugb2YgdGhlXG4gICAgLy8gU1ZHRWxlbWVudCBhbmQgdGhhdCBpdCBoYXMgdGhlIFwiZ2V0QkJveFwiIG1ldGhvZC5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0cmEtcGFyZW5zXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuU1ZHRWxlbWVudCAmJiB0eXBlb2YgdGFyZ2V0LmdldEJCb3ggPT09ICdmdW5jdGlvbic7IH07XG59KSgpO1xuXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgcHJvdmlkZWQgZWxlbWVudCBpcyBhIGRvY3VtZW50IGVsZW1lbnQgKDxodG1sPikuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXG5mdW5jdGlvbiBpc0RvY3VtZW50RWxlbWVudCh0YXJnZXQpIHtcbiAgICByZXR1cm4gdGFyZ2V0ID09PSBnZXRXaW5kb3dPZih0YXJnZXQpLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbn1cblxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgYW4gYXBwcm9wcmlhdGUgY29udGVudCByZWN0YW5nbGUgZm9yIHByb3ZpZGVkIGh0bWwgb3Igc3ZnIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBjb250ZW50IHJlY3RhbmdsZSBvZiB3aGljaCBuZWVkcyB0byBiZSBjYWxjdWxhdGVkLlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xuZnVuY3Rpb24gZ2V0Q29udGVudFJlY3QodGFyZ2V0KSB7XG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICAgICAgcmV0dXJuIGVtcHR5UmVjdDtcbiAgICB9XG5cbiAgICBpZiAoaXNTVkdHcmFwaGljc0VsZW1lbnQodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gZ2V0U1ZHQ29udGVudFJlY3QodGFyZ2V0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRDb250ZW50UmVjdCh0YXJnZXQpO1xufVxuXG4vKipcclxuICogQ3JlYXRlcyByZWN0YW5nbGUgd2l0aCBhbiBpbnRlcmZhY2Ugb2YgdGhlIERPTVJlY3RSZWFkT25seS5cclxuICogU3BlYzogaHR0cHM6Ly9kcmFmdHMuZnh0Zi5vcmcvZ2VvbWV0cnkvI2RvbXJlY3RyZWFkb25seVxyXG4gKlxyXG4gKiBAcGFyYW0ge0RPTVJlY3RJbml0fSByZWN0SW5pdCAtIE9iamVjdCB3aXRoIHJlY3RhbmdsZSdzIHgveSBjb29yZGluYXRlcyBhbmQgZGltZW5zaW9ucy5cclxuICogQHJldHVybnMge0RPTVJlY3RSZWFkT25seX1cclxuICovXG5mdW5jdGlvbiBjcmVhdGVSZWFkT25seVJlY3QocmVmKSB7XG4gICAgdmFyIHggPSByZWYueDtcbiAgICB2YXIgeSA9IHJlZi55O1xuICAgIHZhciB3aWR0aCA9IHJlZi53aWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gcmVmLmhlaWdodDtcblxuICAgIC8vIElmIERPTVJlY3RSZWFkT25seSBpcyBhdmFpbGFibGUgdXNlIGl0IGFzIGEgcHJvdG90eXBlIGZvciB0aGUgcmVjdGFuZ2xlLlxuICAgIHZhciBDb25zdHIgPSB0eXBlb2YgRE9NUmVjdFJlYWRPbmx5ICE9PSAndW5kZWZpbmVkJyA/IERPTVJlY3RSZWFkT25seSA6IE9iamVjdDtcbiAgICB2YXIgcmVjdCA9IE9iamVjdC5jcmVhdGUoQ29uc3RyLnByb3RvdHlwZSk7XG5cbiAgICAvLyBSZWN0YW5nbGUncyBwcm9wZXJ0aWVzIGFyZSBub3Qgd3JpdGFibGUgYW5kIG5vbi1lbnVtZXJhYmxlLlxuICAgIGRlZmluZUNvbmZpZ3VyYWJsZShyZWN0LCB7XG4gICAgICAgIHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIHRvcDogeSxcbiAgICAgICAgcmlnaHQ6IHggKyB3aWR0aCxcbiAgICAgICAgYm90dG9tOiBoZWlnaHQgKyB5LFxuICAgICAgICBsZWZ0OiB4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVjdDtcbn1cblxuLyoqXHJcbiAqIENyZWF0ZXMgRE9NUmVjdEluaXQgb2JqZWN0IGJhc2VkIG9uIHRoZSBwcm92aWRlZCBkaW1lbnNpb25zIGFuZCB0aGUgeC95IGNvb3JkaW5hdGVzLlxyXG4gKiBTcGVjOiBodHRwczovL2RyYWZ0cy5meHRmLm9yZy9nZW9tZXRyeS8jZGljdGRlZi1kb21yZWN0aW5pdFxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0geCAtIFggY29vcmRpbmF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHkgLSBZIGNvb3JkaW5hdGUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFJlY3RhbmdsZSdzIHdpZHRoLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gUmVjdGFuZ2xlJ3MgaGVpZ2h0LlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUmVjdEluaXQoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcbn1cblxuLyoqXHJcbiAqIENsYXNzIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIGNvbXB1dGF0aW9ucyBvZiB0aGUgY29udGVudCByZWN0YW5nbGUgb2ZcclxuICogcHJvdmlkZWQgRE9NIGVsZW1lbnQgYW5kIGZvciBrZWVwaW5nIHRyYWNrIG9mIGl0J3MgY2hhbmdlcy5cclxuICovXG52YXIgUmVzaXplT2JzZXJ2YXRpb24gPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICB0aGlzLmJyb2FkY2FzdFdpZHRoID0gMDtcbiAgICB0aGlzLmJyb2FkY2FzdEhlaWdodCA9IDA7XG4gICAgdGhpcy5jb250ZW50UmVjdF8gPSBjcmVhdGVSZWN0SW5pdCgwLCAwLCAwLCAwKTtcblxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xufTtcblxuLyoqXHJcbiAqIFVwZGF0ZXMgY29udGVudCByZWN0YW5nbGUgYW5kIHRlbGxzIHdoZXRoZXIgaXQncyB3aWR0aCBvciBoZWlnaHQgcHJvcGVydGllc1xyXG4gKiBoYXZlIGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgYnJvYWRjYXN0LlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXG5cblxuLyoqXHJcbiAqIFJlZmVyZW5jZSB0byB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICpcclxuICogQHByaXZhdGUge0RPTVJlY3RJbml0fVxyXG4gKi9cblxuXG4vKipcclxuICogQnJvYWRjYXN0ZWQgd2lkdGggb2YgY29udGVudCByZWN0YW5nbGUuXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xuUmVzaXplT2JzZXJ2YXRpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZWN0ID0gZ2V0Q29udGVudFJlY3QodGhpcy50YXJnZXQpO1xuXG4gICAgdGhpcy5jb250ZW50UmVjdF8gPSByZWN0O1xuXG4gICAgcmV0dXJuIHJlY3Qud2lkdGggIT09IHRoaXMuYnJvYWRjYXN0V2lkdGggfHwgcmVjdC5oZWlnaHQgIT09IHRoaXMuYnJvYWRjYXN0SGVpZ2h0O1xufTtcblxuLyoqXHJcbiAqIFVwZGF0ZXMgJ2Jyb2FkY2FzdFdpZHRoJyBhbmQgJ2Jyb2FkY2FzdEhlaWdodCcgcHJvcGVydGllcyB3aXRoIGEgZGF0YVxyXG4gKiBmcm9tIHRoZSBjb3JyZXNwb25kaW5nIHByb3BlcnRpZXMgb2YgdGhlIGxhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH0gTGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICovXG5SZXNpemVPYnNlcnZhdGlvbi5wcm90b3R5cGUuYnJvYWRjYXN0UmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVjdCA9IHRoaXMuY29udGVudFJlY3RfO1xuXG4gICAgdGhpcy5icm9hZGNhc3RXaWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSByZWN0LmhlaWdodDtcblxuICAgIHJldHVybiByZWN0O1xufTtcblxudmFyIFJlc2l6ZU9ic2VydmVyRW50cnkgPSBmdW5jdGlvbih0YXJnZXQsIHJlY3RJbml0KSB7XG4gICAgdmFyIGNvbnRlbnRSZWN0ID0gY3JlYXRlUmVhZE9ubHlSZWN0KHJlY3RJbml0KTtcblxuICAgIC8vIEFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmUgbm90IHdyaXRhYmxlXG4gICAgLy8gYW5kIGFyZSBhbHNvIG5vdCBlbnVtZXJhYmxlIGluIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24uXG4gICAgLy9cbiAgICAvLyBQcm9wZXJ0eSBhY2Nlc3NvcnMgYXJlIG5vdCBiZWluZyB1c2VkIGFzIHRoZXknZCByZXF1aXJlIHRvIGRlZmluZSBhXG4gICAgLy8gcHJpdmF0ZSBXZWFrTWFwIHN0b3JhZ2Ugd2hpY2ggbWF5IGNhdXNlIG1lbW9yeSBsZWFrcyBpbiBicm93c2VycyB0aGF0XG4gICAgLy8gZG9uJ3Qgc3VwcG9ydCB0aGlzIHR5cGUgb2YgY29sbGVjdGlvbnMuXG4gICAgZGVmaW5lQ29uZmlndXJhYmxlKHRoaXMsIHsgdGFyZ2V0OiB0YXJnZXQsIGNvbnRlbnRSZWN0OiBjb250ZW50UmVjdCB9KTtcbn07XG5cbnZhciBSZXNpemVPYnNlcnZlclNQSSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250cm9sbGVyLCBjYWxsYmFja0N0eCkge1xuICAgIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXyA9IFtdO1xuICAgIHRoaXMub2JzZXJ2YXRpb25zXyA9IG5ldyBNYXBTaGltKCk7XG5cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjYWxsYmFjayBwcm92aWRlZCBhcyBwYXJhbWV0ZXIgMSBpcyBub3QgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICB0aGlzLmNhbGxiYWNrXyA9IGNhbGxiYWNrO1xuICAgIHRoaXMuY29udHJvbGxlcl8gPSBjb250cm9sbGVyO1xuICAgIHRoaXMuY2FsbGJhY2tDdHhfID0gY2FsbGJhY2tDdHg7XG59O1xuXG4vKipcclxuICogU3RhcnRzIG9ic2VydmluZyBwcm92aWRlZCBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgb2JzZXJ2ZWQuXHJcbiAqIEByZXR1cm5zIHt2b2lkfVxyXG4gKi9cblxuXG4vKipcclxuICogUmVnaXN0cnkgb2YgdGhlIFJlc2l6ZU9ic2VydmF0aW9uIGluc3RhbmNlcy5cclxuICpcclxuICogQHByaXZhdGUge01hcDxFbGVtZW50LCBSZXNpemVPYnNlcnZhdGlvbj59XHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBQdWJsaWMgUmVzaXplT2JzZXJ2ZXIgaW5zdGFuY2Ugd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrXHJcbiAqIGZ1bmN0aW9uIGFuZCB1c2VkIGFzIGEgdmFsdWUgb2YgaXQncyBcInRoaXNcIiBiaW5kaW5nLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZSB7UmVzaXplT2JzZXJ2ZXJ9XHJcbiAqL1xuXG4vKipcclxuICogQ29sbGVjdGlvbiBvZiByZXNpemUgb2JzZXJ2YXRpb25zIHRoYXQgaGF2ZSBkZXRlY3RlZCBjaGFuZ2VzIGluIGRpbWVuc2lvbnNcclxuICogb2YgZWxlbWVudHMuXHJcbiAqXHJcbiAqIEBwcml2YXRlIHtBcnJheTxSZXNpemVPYnNlcnZhdGlvbj59XHJcbiAqL1xuUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC4nKTtcbiAgICB9XG5cbiAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cbiAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuRWxlbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgXCJFbGVtZW50XCIuJyk7XG4gICAgfVxuXG4gICAgdmFyIG9ic2VydmF0aW9ucyA9IHRoaXMub2JzZXJ2YXRpb25zXztcblxuICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIG9ic2VydmVkLlxuICAgIGlmIChvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9ic2VydmF0aW9ucy5zZXQodGFyZ2V0LCBuZXcgUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0KSk7XG5cbiAgICB0aGlzLmNvbnRyb2xsZXJfLmFkZE9ic2VydmVyKHRoaXMpO1xuXG4gICAgLy8gRm9yY2UgdGhlIHVwZGF0ZSBvZiBvYnNlcnZhdGlvbnMuXG4gICAgdGhpcy5jb250cm9sbGVyXy5yZWZyZXNoKCk7XG59O1xuXG4vKipcclxuICogU3RvcHMgb2JzZXJ2aW5nIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBzdG9wIG9ic2VydmluZy5cclxuICogQHJldHVybnMge3ZvaWR9XHJcbiAqL1xuUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xuICAgIH1cblxuICAgIC8vIERvIG5vdGhpbmcgaWYgY3VycmVudCBlbnZpcm9ubWVudCBkb2Vzbid0IGhhdmUgdGhlIEVsZW1lbnQgaW50ZXJmYWNlLlxuICAgIGlmICh0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgIShFbGVtZW50IGluc3RhbmNlb2YgT2JqZWN0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5FbGVtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSBcIkVsZW1lbnRcIi4nKTtcbiAgICB9XG5cbiAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xuXG4gICAgLy8gRG8gbm90aGluZyBpZiBlbGVtZW50IGlzIG5vdCBiZWluZyBvYnNlcnZlZC5cbiAgICBpZiAoIW9ic2VydmF0aW9ucy5oYXModGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb2JzZXJ2YXRpb25zLmRlbGV0ZSh0YXJnZXQpO1xuXG4gICAgaWYgKCFvYnNlcnZhdGlvbnMuc2l6ZSkge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xuICAgIH1cbn07XG5cbi8qKlxyXG4gKiBTdG9wcyBvYnNlcnZpbmcgYWxsIGVsZW1lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICovXG5SZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XG4gICAgdGhpcy5vYnNlcnZhdGlvbnNfLmNsZWFyKCk7XG4gICAgdGhpcy5jb250cm9sbGVyXy5yZW1vdmVPYnNlcnZlcih0aGlzKTtcbn07XG5cbi8qKlxyXG4gKiBDb2xsZWN0cyBvYnNlcnZhdGlvbiBpbnN0YW5jZXMgdGhlIGFzc29jaWF0ZWQgZWxlbWVudCBvZiB3aGljaCBoYXMgY2hhbmdlZFxyXG4gKiBpdCdzIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICovXG5SZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuZ2F0aGVyQWN0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcblxuICAgIHRoaXMub2JzZXJ2YXRpb25zXy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZhdGlvbikge1xuICAgICAgICBpZiAob2JzZXJ2YXRpb24uaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgdGhpcyQxLmFjdGl2ZU9ic2VydmF0aW9uc18ucHVzaChvYnNlcnZhdGlvbik7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbi8qKlxyXG4gKiBJbnZva2VzIGluaXRpYWwgY2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBhIGxpc3Qgb2YgUmVzaXplT2JzZXJ2ZXJFbnRyeVxyXG4gKiBpbnN0YW5jZXMgY29sbGVjdGVkIGZyb20gYWN0aXZlIHJlc2l6ZSBvYnNlcnZhdGlvbnMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHt2b2lkfVxyXG4gKi9cblJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5icm9hZGNhc3RBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gRG8gbm90aGluZyBpZiBvYnNlcnZlciBkb2Vzbid0IGhhdmUgYWN0aXZlIG9ic2VydmF0aW9ucy5cbiAgICBpZiAoIXRoaXMuaGFzQWN0aXZlKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdHggPSB0aGlzLmNhbGxiYWNrQ3R4XztcblxuICAgIC8vIENyZWF0ZSBSZXNpemVPYnNlcnZlckVudHJ5IGluc3RhbmNlIGZvciBldmVyeSBhY3RpdmUgb2JzZXJ2YXRpb24uXG4gICAgdmFyIGVudHJpZXMgPSB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubWFwKGZ1bmN0aW9uIChvYnNlcnZhdGlvbikge1xuICAgICAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyRW50cnkob2JzZXJ2YXRpb24udGFyZ2V0LCBvYnNlcnZhdGlvbi5icm9hZGNhc3RSZWN0KCkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jYWxsYmFja18uY2FsbChjdHgsIGVudHJpZXMsIGN0eCk7XG4gICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xufTtcblxuLyoqXHJcbiAqIENsZWFycyB0aGUgY29sbGVjdGlvbiBvZiBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICovXG5SZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuY2xlYXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnNwbGljZSgwKTtcbn07XG5cbi8qKlxyXG4gKiBUZWxscyB3aGV0aGVyIG9ic2VydmVyIGhhcyBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXG5SZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuaGFzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubGVuZ3RoID4gMDtcbn07XG5cbi8vIFJlZ2lzdHJ5IG9mIGludGVybmFsIG9ic2VydmVycy4gSWYgV2Vha01hcCBpcyBub3QgYXZhaWxhYmxlIHVzZSBjdXJyZW50IHNoaW1cbi8vIGZvciB0aGUgTWFwIGNvbGxlY3Rpb24gYXMgaXQgaGFzIGFsbCByZXF1aXJlZCBtZXRob2RzIGFuZCBiZWNhdXNlIFdlYWtNYXBcbi8vIGNhbid0IGJlIGZ1bGx5IHBvbHlmaWxsZWQgYW55d2F5LlxudmFyIG9ic2VydmVycyA9IHR5cGVvZiBXZWFrTWFwICE9PSAndW5kZWZpbmVkJyA/IG5ldyBXZWFrTWFwKCkgOiBuZXcgTWFwU2hpbSgpO1xuXG4vKipcclxuICogUmVzaXplT2JzZXJ2ZXIgQVBJLiBFbmNhcHN1bGF0ZXMgdGhlIFJlc2l6ZU9ic2VydmVyIFNQSSBpbXBsZW1lbnRhdGlvblxyXG4gKiBleHBvc2luZyBvbmx5IHRob3NlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdGhhdCBhcmUgZGVmaW5lZCBpbiB0aGUgc3BlYy5cclxuICovXG52YXIgUmVzaXplT2JzZXJ2ZXIgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXNpemVPYnNlcnZlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uLicpO1xuICAgIH1cbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xuICAgIH1cblxuICAgIHZhciBjb250cm9sbGVyID0gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XG4gICAgdmFyIG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyU1BJKGNhbGxiYWNrLCBjb250cm9sbGVyLCB0aGlzKTtcblxuICAgIG9ic2VydmVycy5zZXQodGhpcywgb2JzZXJ2ZXIpO1xufTtcblxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzIG9mIFJlc2l6ZU9ic2VydmVyLlxuWydvYnNlcnZlJywgJ3Vub2JzZXJ2ZScsICdkaXNjb25uZWN0J10uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAocmVmID0gb2JzZXJ2ZXJzLmdldCh0aGlzKSlbbWV0aG9kXS5hcHBseShyZWYsIGFyZ3VtZW50cyk7XG4gICAgICAgIHZhciByZWY7XG4gICAgfTtcbn0pO1xuXG52YXIgaW5kZXggPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIEV4cG9ydCBleGlzdGluZyBpbXBsZW1lbnRhdGlvbiBpZiBhdmFpbGFibGUuXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwkMS5SZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbCQxLlJlc2l6ZU9ic2VydmVyO1xuICAgIH1cblxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiLy9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQiwgY29tcGFyZSwgY29tcGFyZUNvbnRleHQpIHtcbiAgdmFyIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIG9iakEsIG9iakIpIDogdm9pZCAwO1xuXG4gIGlmIChyZXQgIT09IHZvaWQgMCkge1xuICAgIHJldHVybiAhIXJldDtcbiAgfVxuXG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgIW9iakEgfHwgdHlwZW9mIG9iakIgIT09IFwib2JqZWN0XCIgfHwgIW9iakIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGJIYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZChvYmpCKTtcblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBrZXlzQS5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNBW2lkeF07XG5cbiAgICBpZiAoIWJIYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlQSA9IG9iakFba2V5XTtcbiAgICB2YXIgdmFsdWVCID0gb2JqQltrZXldO1xuXG4gICAgcmV0ID0gY29tcGFyZSA/IGNvbXBhcmUuY2FsbChjb21wYXJlQ29udGV4dCwgdmFsdWVBLCB2YWx1ZUIsIGtleSkgOiB2b2lkIDA7XG5cbiAgICBpZiAocmV0ID09PSBmYWxzZSB8fCAocmV0ID09PSB2b2lkIDAgJiYgdmFsdWVBICE9PSB2YWx1ZUIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiaW1wb3J0e3R5cGVPZiBhcyBlLGlzRWxlbWVudCBhcyB0LGlzVmFsaWRFbGVtZW50VHlwZSBhcyBufWZyb21cInJlYWN0LWlzXCI7aW1wb3J0IHIse3VzZVN0YXRlIGFzIG8sdXNlQ29udGV4dCBhcyBzLHVzZU1lbW8gYXMgaSx1c2VFZmZlY3QgYXMgYSx1c2VSZWYgYXMgYyxjcmVhdGVFbGVtZW50IGFzIHUsdXNlRGVidWdWYWx1ZSBhcyBsLHVzZUxheW91dEVmZmVjdCBhcyBkfWZyb21cInJlYWN0XCI7aW1wb3J0IGggZnJvbVwic2hhbGxvd2VxdWFsXCI7aW1wb3J0IHAgZnJvbVwiQGVtb3Rpb24vc3R5bGlzXCI7aW1wb3J0IGYgZnJvbVwiQGVtb3Rpb24vdW5pdGxlc3NcIjtpbXBvcnQgbSBmcm9tXCJAZW1vdGlvbi9pcy1wcm9wLXZhbGlkXCI7aW1wb3J0IHkgZnJvbVwiaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NcIjtmdW5jdGlvbiB2KCl7cmV0dXJuKHY9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYoZVtyXT1uW3JdKX1yZXR1cm4gZX0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgZz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bZVswXV0scj0wLG89dC5sZW5ndGg7cjxvO3IrPTEpbi5wdXNoKHRbcl0sZVtyKzFdKTtyZXR1cm4gbn0sUz1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9PXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZcIltvYmplY3QgT2JqZWN0XVwiPT09KHQudG9TdHJpbmc/dC50b1N0cmluZygpOk9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSkmJiFlKHQpfSx3PU9iamVjdC5mcmVlemUoW10pLEU9T2JqZWN0LmZyZWV6ZSh7fSk7ZnVuY3Rpb24gYihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlfWZ1bmN0aW9uIF8oZSl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmXCJzdHJpbmdcIj09dHlwZW9mIGUmJmV8fGUuZGlzcGxheU5hbWV8fGUubmFtZXx8XCJDb21wb25lbnRcIn1mdW5jdGlvbiBOKGUpe3JldHVybiBlJiZcInN0cmluZ1wiPT10eXBlb2YgZS5zdHlsZWRDb21wb25lbnRJZH12YXIgQT1cInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19BVFRSfHxwcm9jZXNzLmVudi5TQ19BVFRSKXx8XCJkYXRhLXN0eWxlZFwiLEM9XCI1LjIuMVwiLEk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmXCJIVE1MRWxlbWVudFwiaW4gd2luZG93LFA9Qm9vbGVhbihcImJvb2xlYW5cIj09dHlwZW9mIFNDX0RJU0FCTEVfU1BFRURZP1NDX0RJU0FCTEVfU1BFRURZOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBwcm9jZXNzJiZ2b2lkIDAhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFkmJlwiXCIhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFk/XCJmYWxzZVwiIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZJiZwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHByb2Nlc3MmJnZvaWQgMCE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZJiZcIlwiIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFk/XCJmYWxzZVwiIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFkmJnByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZOlwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpLE89e30sUj1cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP3sxOlwiQ2Fubm90IGNyZWF0ZSBzdHlsZWQtY29tcG9uZW50IGZvciBjb21wb25lbnQ6ICVzLlxcblxcblwiLDI6XCJDYW4ndCBjb2xsZWN0IHN0eWxlcyBvbmNlIHlvdSd2ZSBjb25zdW1lZCBhIGBTZXJ2ZXJTdHlsZVNoZWV0YCdzIHN0eWxlcyEgYFNlcnZlclN0eWxlU2hlZXRgIGlzIGEgb25lIG9mZiBpbnN0YW5jZSBmb3IgZWFjaCBzZXJ2ZXItc2lkZSByZW5kZXIgY3ljbGUuXFxuXFxuLSBBcmUgeW91IHRyeWluZyB0byByZXVzZSBpdCBhY3Jvc3MgcmVuZGVycz9cXG4tIEFyZSB5b3UgYWNjaWRlbnRhbGx5IGNhbGxpbmcgY29sbGVjdFN0eWxlcyB0d2ljZT9cXG5cXG5cIiwzOlwiU3RyZWFtaW5nIFNTUiBpcyBvbmx5IHN1cHBvcnRlZCBpbiBhIE5vZGUuanMgZW52aXJvbm1lbnQ7IFBsZWFzZSBkbyBub3QgdHJ5IHRvIGNhbGwgdGhpcyBtZXRob2QgaW4gdGhlIGJyb3dzZXIuXFxuXFxuXCIsNDpcIlRoZSBgU3R5bGVTaGVldE1hbmFnZXJgIGV4cGVjdHMgYSB2YWxpZCB0YXJnZXQgb3Igc2hlZXQgcHJvcCFcXG5cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgY2xpZW50IGFuZCBpcyB5b3VyIHRhcmdldCBmYWxzeT9cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgc2VydmVyIGFuZCBpcyB0aGUgc2hlZXQgZmFsc3k/XFxuXFxuXCIsNTpcIlRoZSBjbG9uZSBtZXRob2QgY2Fubm90IGJlIHVzZWQgb24gdGhlIGNsaWVudCFcXG5cXG4tIEFyZSB5b3UgcnVubmluZyBpbiBhIGNsaWVudC1saWtlIGVudmlyb25tZW50IG9uIHRoZSBzZXJ2ZXI/XFxuLSBBcmUgeW91IHRyeWluZyB0byBydW4gU1NSIG9uIHRoZSBjbGllbnQ/XFxuXFxuXCIsNjpcIlRyeWluZyB0byBpbnNlcnQgYSBuZXcgc3R5bGUgdGFnLCBidXQgdGhlIGdpdmVuIE5vZGUgaXMgdW5tb3VudGVkIVxcblxcbi0gQXJlIHlvdSB1c2luZyBhIGN1c3RvbSB0YXJnZXQgdGhhdCBpc24ndCBtb3VudGVkP1xcbi0gRG9lcyB5b3VyIGRvY3VtZW50IG5vdCBoYXZlIGEgdmFsaWQgaGVhZCBlbGVtZW50P1xcbi0gSGF2ZSB5b3UgYWNjaWRlbnRhbGx5IHJlbW92ZWQgYSBzdHlsZSB0YWcgbWFudWFsbHk/XFxuXFxuXCIsNzonVGhlbWVQcm92aWRlcjogUGxlYXNlIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIFwidGhlbWVcIiBwcm9wIGZ1bmN0aW9uLCBlLmcuXFxuXFxuYGBganNcXG50aGVtZT17KCkgPT4gKHt9KX1cXG5gYGBcXG5cXG4nLDg6J1RoZW1lUHJvdmlkZXI6IFBsZWFzZSBtYWtlIHlvdXIgXCJ0aGVtZVwiIHByb3AgYW4gb2JqZWN0LlxcblxcbicsOTpcIk1pc3NpbmcgZG9jdW1lbnQgYDxoZWFkPmBcXG5cXG5cIiwxMDpcIkNhbm5vdCBmaW5kIGEgU3R5bGVTaGVldCBpbnN0YW5jZS4gVXN1YWxseSB0aGlzIGhhcHBlbnMgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGNvcGllcyBvZiBzdHlsZWQtY29tcG9uZW50cyBsb2FkZWQgYXQgb25jZS4gQ2hlY2sgb3V0IHRoaXMgaXNzdWUgZm9yIGhvdyB0byB0cm91Ymxlc2hvb3QgYW5kIGZpeCB0aGUgY29tbW9uIGNhc2VzIHdoZXJlIHRoaXMgc2l0dWF0aW9uIGNhbiBoYXBwZW46IGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy9pc3N1ZXMvMTk0MSNpc3N1ZWNvbW1lbnQtNDE3ODYyMDIxXFxuXFxuXCIsMTE6XCJfVGhpcyBlcnJvciB3YXMgcmVwbGFjZWQgd2l0aCBhIGRldi10aW1lIHdhcm5pbmcsIGl0IHdpbGwgYmUgZGVsZXRlZCBmb3IgdjQgZmluYWwuXyBbY3JlYXRlR2xvYmFsU3R5bGVdIHJlY2VpdmVkIGNoaWxkcmVuIHdoaWNoIHdpbGwgbm90IGJlIHJlbmRlcmVkLiBQbGVhc2UgdXNlIHRoZSBjb21wb25lbnQgd2l0aG91dCBwYXNzaW5nIGNoaWxkcmVuIGVsZW1lbnRzLlxcblxcblwiLDEyOlwiSXQgc2VlbXMgeW91IGFyZSBpbnRlcnBvbGF0aW5nIGEga2V5ZnJhbWUgZGVjbGFyYXRpb24gKCVzKSBpbnRvIGFuIHVudGFnZ2VkIHN0cmluZy4gVGhpcyB3YXMgc3VwcG9ydGVkIGluIHN0eWxlZC1jb21wb25lbnRzIHYzLCBidXQgaXMgbm90IGxvbmdlciBzdXBwb3J0ZWQgaW4gdjQgYXMga2V5ZnJhbWVzIGFyZSBub3cgaW5qZWN0ZWQgb24tZGVtYW5kLiBQbGVhc2Ugd3JhcCB5b3VyIHN0cmluZyBpbiB0aGUgY3NzXFxcXGBcXFxcYCBoZWxwZXIgd2hpY2ggZW5zdXJlcyB0aGUgc3R5bGVzIGFyZSBpbmplY3RlZCBjb3JyZWN0bHkuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hcGkjY3NzXFxuXFxuXCIsMTM6XCIlcyBpcyBub3QgYSBzdHlsZWQgY29tcG9uZW50IGFuZCBjYW5ub3QgYmUgcmVmZXJyZWQgdG8gdmlhIGNvbXBvbmVudCBzZWxlY3Rvci4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FkdmFuY2VkI3JlZmVycmluZy10by1vdGhlci1jb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMuXFxuXFxuXCIsMTQ6J1RoZW1lUHJvdmlkZXI6IFwidGhlbWVcIiBwcm9wIGlzIHJlcXVpcmVkLlxcblxcbicsMTU6XCJBIHN0eWxpcyBwbHVnaW4gaGFzIGJlZW4gc3VwcGxpZWQgdGhhdCBpcyBub3QgbmFtZWQuIFdlIG5lZWQgYSBuYW1lIGZvciBlYWNoIHBsdWdpbiB0byBiZSBhYmxlIHRvIHByZXZlbnQgc3R5bGluZyBjb2xsaXNpb25zIGJldHdlZW4gZGlmZmVyZW50IHN0eWxpcyBjb25maWd1cmF0aW9ucyB3aXRoaW4gdGhlIHNhbWUgYXBwLiBCZWZvcmUgeW91IHBhc3MgeW91ciBwbHVnaW4gdG8gYDxTdHlsZVNoZWV0TWFuYWdlciBzdHlsaXNQbHVnaW5zPXtbXX0+YCwgcGxlYXNlIG1ha2Ugc3VyZSBlYWNoIHBsdWdpbiBpcyB1bmlxdWVseS1uYW1lZCwgZS5nLlxcblxcbmBgYGpzXFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGltcG9ydGVkUGx1Z2luLCAnbmFtZScsIHsgdmFsdWU6ICdzb21lLXVuaXF1ZS1uYW1lJyB9KTtcXG5gYGBcXG5cXG5cIiwxNjpcIlJlYWNoZWQgdGhlIGxpbWl0IG9mIGhvdyBtYW55IHN0eWxlZCBjb21wb25lbnRzIG1heSBiZSBjcmVhdGVkIGF0IGdyb3VwICVzLlxcbllvdSBtYXkgb25seSBjcmVhdGUgdXAgdG8gMSwwNzMsNzQxLDgyNCBjb21wb25lbnRzLiBJZiB5b3UncmUgY3JlYXRpbmcgY29tcG9uZW50cyBkeW5hbWljYWxseSxcXG5hcyBmb3IgaW5zdGFuY2UgaW4geW91ciByZW5kZXIgbWV0aG9kIHRoZW4geW91IG1heSBiZSBydW5uaW5nIGludG8gdGhpcyBsaW1pdGF0aW9uLlxcblxcblwiLDE3OlwiQ1NTU3R5bGVTaGVldCBjb3VsZCBub3QgYmUgZm91bmQgb24gSFRNTFN0eWxlRWxlbWVudC5cXG5IYXMgc3R5bGVkLWNvbXBvbmVudHMnIHN0eWxlIHRhZyBiZWVuIHVubW91bnRlZCBvciBhbHRlcmVkIGJ5IGFub3RoZXIgc2NyaXB0P1xcblwifTp7fTtmdW5jdGlvbiBEKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGg8PTA/dm9pZCAwOmFyZ3VtZW50c1swXSx0PVtdLG49MSxyPWFyZ3VtZW50cy5sZW5ndGg7bjxyO24rPTEpdC5wdXNoKG48MHx8YXJndW1lbnRzLmxlbmd0aDw9bj92b2lkIDA6YXJndW1lbnRzW25dKTtyZXR1cm4gdC5mb3JFYWNoKChmdW5jdGlvbih0KXtlPWUucmVwbGFjZSgvJVthLXpdLyx0KX0pKSxlfWZ1bmN0aW9uIGooZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3Rocm93XCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVj9uZXcgRXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZC4gU2VlIGh0dHBzOi8vZ2l0LmlvL0pVSWFFI1wiK2UrXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIrKG4ubGVuZ3RoPjA/XCIgQXJnczogXCIrbi5qb2luKFwiLCBcIik6XCJcIikpOm5ldyBFcnJvcihELmFwcGx5KHZvaWQgMCxbUltlXV0uY29uY2F0KG4pKS50cmltKCkpfXZhciBUPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLmdyb3VwU2l6ZXM9bmV3IFVpbnQzMkFycmF5KDUxMiksdGhpcy5sZW5ndGg9NTEyLHRoaXMudGFnPWV9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5kZXhPZkdyb3VwPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49MDtuPGU7bisrKXQrPXRoaXMuZ3JvdXBTaXplc1tuXTtyZXR1cm4gdH0sdC5pbnNlcnRSdWxlcz1mdW5jdGlvbihlLHQpe2lmKGU+PXRoaXMuZ3JvdXBTaXplcy5sZW5ndGgpe2Zvcih2YXIgbj10aGlzLmdyb3VwU2l6ZXMscj1uLmxlbmd0aCxvPXI7ZT49bzspKG88PD0xKTwwJiZqKDE2LFwiXCIrZSk7dGhpcy5ncm91cFNpemVzPW5ldyBVaW50MzJBcnJheShvKSx0aGlzLmdyb3VwU2l6ZXMuc2V0KG4pLHRoaXMubGVuZ3RoPW87Zm9yKHZhciBzPXI7czxvO3MrKyl0aGlzLmdyb3VwU2l6ZXNbc109MH1mb3IodmFyIGk9dGhpcy5pbmRleE9mR3JvdXAoZSsxKSxhPTAsYz10Lmxlbmd0aDthPGM7YSsrKXRoaXMudGFnLmluc2VydFJ1bGUoaSx0W2FdKSYmKHRoaXMuZ3JvdXBTaXplc1tlXSsrLGkrKyl9LHQuY2xlYXJHcm91cD1mdW5jdGlvbihlKXtpZihlPHRoaXMubGVuZ3RoKXt2YXIgdD10aGlzLmdyb3VwU2l6ZXNbZV0sbj10aGlzLmluZGV4T2ZHcm91cChlKSxyPW4rdDt0aGlzLmdyb3VwU2l6ZXNbZV09MDtmb3IodmFyIG89bjtvPHI7bysrKXRoaXMudGFnLmRlbGV0ZVJ1bGUobil9fSx0LmdldEdyb3VwPWZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7aWYoZT49dGhpcy5sZW5ndGh8fDA9PT10aGlzLmdyb3VwU2l6ZXNbZV0pcmV0dXJuIHQ7Zm9yKHZhciBuPXRoaXMuZ3JvdXBTaXplc1tlXSxyPXRoaXMuaW5kZXhPZkdyb3VwKGUpLG89cituLHM9cjtzPG87cysrKXQrPXRoaXMudGFnLmdldFJ1bGUocykrXCIvKiFzYyovXFxuXCI7cmV0dXJuIHR9LGV9KCksaz1uZXcgTWFwLHg9bmV3IE1hcCxWPTEsQj1mdW5jdGlvbihlKXtpZihrLmhhcyhlKSlyZXR1cm4gay5nZXQoZSk7Zm9yKDt4LmhhcyhWKTspVisrO3ZhciB0PVYrKztyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYoKDB8dCk8MHx8dD4xPDwzMCkmJmooMTYsXCJcIit0KSxrLnNldChlLHQpLHguc2V0KHQsZSksdH0sTT1mdW5jdGlvbihlKXtyZXR1cm4geC5nZXQoZSl9LHo9ZnVuY3Rpb24oZSx0KXtrLnNldChlLHQpLHguc2V0KHQsZSl9LEw9XCJzdHlsZVtcIitBKyddW2RhdGEtc3R5bGVkLXZlcnNpb249XCI1LjIuMVwiXScsRz1uZXcgUmVnRXhwKFwiXlwiK0ErJ1xcXFwuZyhcXFxcZCspXFxcXFtpZD1cIihbXFxcXHdcXFxcZC1dKylcIlxcXFxdLio/XCIoW15cIl0qKScpLEY9ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcixvPW4uc3BsaXQoXCIsXCIpLHM9MCxpPW8ubGVuZ3RoO3M8aTtzKyspKHI9b1tzXSkmJmUucmVnaXN0ZXJOYW1lKHQscil9LFk9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49dC5pbm5lckhUTUwuc3BsaXQoXCIvKiFzYyovXFxuXCIpLHI9W10sbz0wLHM9bi5sZW5ndGg7bzxzO28rKyl7dmFyIGk9bltvXS50cmltKCk7aWYoaSl7dmFyIGE9aS5tYXRjaChHKTtpZihhKXt2YXIgYz0wfHBhcnNlSW50KGFbMV0sMTApLHU9YVsyXTswIT09YyYmKHoodSxjKSxGKGUsdSxhWzNdKSxlLmdldFRhZygpLmluc2VydFJ1bGVzKGMscikpLHIubGVuZ3RoPTB9ZWxzZSByLnB1c2goaSl9fX0scT1mdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsfSxIPWZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmhlYWQsbj1lfHx0LHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLG89ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuY2hpbGROb2RlcyxuPXQubGVuZ3RoO24+PTA7bi0tKXt2YXIgcj10W25dO2lmKHImJjE9PT1yLm5vZGVUeXBlJiZyLmhhc0F0dHJpYnV0ZShBKSlyZXR1cm4gcn19KG4pLHM9dm9pZCAwIT09bz9vLm5leHRTaWJsaW5nOm51bGw7ci5zZXRBdHRyaWJ1dGUoQSxcImFjdGl2ZVwiKSxyLnNldEF0dHJpYnV0ZShcImRhdGEtc3R5bGVkLXZlcnNpb25cIixcIjUuMi4xXCIpO3ZhciBpPXEoKTtyZXR1cm4gaSYmci5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLGkpLG4uaW5zZXJ0QmVmb3JlKHIscykscn0sJD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dGhpcy5lbGVtZW50PUgoZSk7dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSksdGhpcy5zaGVldD1mdW5jdGlvbihlKXtpZihlLnNoZWV0KXJldHVybiBlLnNoZWV0O2Zvcih2YXIgdD1kb2N1bWVudC5zdHlsZVNoZWV0cyxuPTAscj10Lmxlbmd0aDtuPHI7bisrKXt2YXIgbz10W25dO2lmKG8ub3duZXJOb2RlPT09ZSlyZXR1cm4gb31qKDE3KX0odCksdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7dHJ5e3JldHVybiB0aGlzLnNoZWV0Lmluc2VydFJ1bGUodCxlKSx0aGlzLmxlbmd0aCsrLCEwfWNhdGNoKGUpe3JldHVybiExfX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuc2hlZXQuZGVsZXRlUnVsZShlKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5zaGVldC5jc3NSdWxlc1tlXTtyZXR1cm4gdm9pZCAwIT09dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQuY3NzVGV4dD90LmNzc1RleHQ6XCJcIn0sZX0oKSxXPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgdD10aGlzLmVsZW1lbnQ9SChlKTt0aGlzLm5vZGVzPXQuY2hpbGROb2Rlcyx0aGlzLmxlbmd0aD0wfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0Lmluc2VydFJ1bGU9ZnVuY3Rpb24oZSx0KXtpZihlPD10aGlzLmxlbmd0aCYmZT49MCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkscj10aGlzLm5vZGVzW2VdO3JldHVybiB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKG4scnx8bnVsbCksdGhpcy5sZW5ndGgrKywhMH1yZXR1cm4hMX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGVzW2VdKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU8dGhpcy5sZW5ndGg/dGhpcy5ub2Rlc1tlXS50ZXh0Q29udGVudDpcIlwifSxlfSgpLFU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3RoaXMucnVsZXM9W10sdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU8PXRoaXMubGVuZ3RoJiYodGhpcy5ydWxlcy5zcGxpY2UoZSwwLHQpLHRoaXMubGVuZ3RoKyssITApfSx0LmRlbGV0ZVJ1bGU9ZnVuY3Rpb24oZSl7dGhpcy5ydWxlcy5zcGxpY2UoZSwxKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU8dGhpcy5sZW5ndGg/dGhpcy5ydWxlc1tlXTpcIlwifSxlfSgpLEo9SSxYPXtpc1NlcnZlcjohSSx1c2VDU1NPTUluamVjdGlvbjohUH0sWj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0LG4pe3ZvaWQgMD09PWUmJihlPUUpLHZvaWQgMD09PXQmJih0PXt9KSx0aGlzLm9wdGlvbnM9dih7fSxYLHt9LGUpLHRoaXMuZ3M9dCx0aGlzLm5hbWVzPW5ldyBNYXAobiksIXRoaXMub3B0aW9ucy5pc1NlcnZlciYmSSYmSiYmKEo9ITEsZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoTCksbj0wLHI9dC5sZW5ndGg7bjxyO24rKyl7dmFyIG89dFtuXTtvJiZcImFjdGl2ZVwiIT09by5nZXRBdHRyaWJ1dGUoQSkmJihZKGUsbyksby5wYXJlbnROb2RlJiZvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobykpfX0odGhpcykpfWUucmVnaXN0ZXJJZD1mdW5jdGlvbihlKXtyZXR1cm4gQihlKX07dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucz1mdW5jdGlvbih0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj0hMCksbmV3IGUodih7fSx0aGlzLm9wdGlvbnMse30sdCksdGhpcy5ncyxuJiZ0aGlzLm5hbWVzfHx2b2lkIDApfSx0LmFsbG9jYXRlR1NJbnN0YW5jZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5nc1tlXT0odGhpcy5nc1tlXXx8MCkrMX0sdC5nZXRUYWc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50YWd8fCh0aGlzLnRhZz0obj0odD10aGlzLm9wdGlvbnMpLmlzU2VydmVyLHI9dC51c2VDU1NPTUluamVjdGlvbixvPXQudGFyZ2V0LGU9bj9uZXcgVShvKTpyP25ldyAkKG8pOm5ldyBXKG8pLG5ldyBUKGUpKSk7dmFyIGUsdCxuLHIsb30sdC5oYXNOYW1lRm9ySWQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5uYW1lcy5oYXMoZSkmJnRoaXMubmFtZXMuZ2V0KGUpLmhhcyh0KX0sdC5yZWdpc3Rlck5hbWU9ZnVuY3Rpb24oZSx0KXtpZihCKGUpLHRoaXMubmFtZXMuaGFzKGUpKXRoaXMubmFtZXMuZ2V0KGUpLmFkZCh0KTtlbHNle3ZhciBuPW5ldyBTZXQ7bi5hZGQodCksdGhpcy5uYW1lcy5zZXQoZSxuKX19LHQuaW5zZXJ0UnVsZXM9ZnVuY3Rpb24oZSx0LG4pe3RoaXMucmVnaXN0ZXJOYW1lKGUsdCksdGhpcy5nZXRUYWcoKS5pbnNlcnRSdWxlcyhCKGUpLG4pfSx0LmNsZWFyTmFtZXM9ZnVuY3Rpb24oZSl7dGhpcy5uYW1lcy5oYXMoZSkmJnRoaXMubmFtZXMuZ2V0KGUpLmNsZWFyKCl9LHQuY2xlYXJSdWxlcz1mdW5jdGlvbihlKXt0aGlzLmdldFRhZygpLmNsZWFyR3JvdXAoQihlKSksdGhpcy5jbGVhck5hbWVzKGUpfSx0LmNsZWFyVGFnPWZ1bmN0aW9uKCl7dGhpcy50YWc9dm9pZCAwfSx0LnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmdldFRhZygpLG49dC5sZW5ndGgscj1cIlwiLG89MDtvPG47bysrKXt2YXIgcz1NKG8pO2lmKHZvaWQgMCE9PXMpe3ZhciBpPWUubmFtZXMuZ2V0KHMpLGE9dC5nZXRHcm91cChvKTtpZih2b2lkIDAhPT1pJiYwIT09YS5sZW5ndGgpe3ZhciBjPUErXCIuZ1wiK28rJ1tpZD1cIicrcysnXCJdJyx1PVwiXCI7dm9pZCAwIT09aSYmaS5mb3JFYWNoKChmdW5jdGlvbihlKXtlLmxlbmd0aD4wJiYodSs9ZStcIixcIil9KSkscis9XCJcIithK2MrJ3tjb250ZW50OlwiJyt1KydcIn0vKiFzYyovXFxuJ319fXJldHVybiByfSh0aGlzKX0sZX0oKSxLPS8oYSkoZCkvZ2ksUT1mdW5jdGlvbihlKXtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlKyhlPjI1PzM5Ojk3KSl9O2Z1bmN0aW9uIGVlKGUpe3ZhciB0LG49XCJcIjtmb3IodD1NYXRoLmFicyhlKTt0PjUyO3Q9dC81MnwwKW49USh0JTUyKStuO3JldHVybihRKHQlNTIpK24pLnJlcGxhY2UoSyxcIiQxLSQyXCIpfXZhciB0ZT1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj10Lmxlbmd0aDtuOyllPTMzKmVedC5jaGFyQ29kZUF0KC0tbik7cmV0dXJuIGV9LG5lPWZ1bmN0aW9uKGUpe3JldHVybiB0ZSg1MzgxLGUpfTtmdW5jdGlvbiByZShlKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrPTEpe3ZhciBuPWVbdF07aWYoYihuKSYmIU4obikpcmV0dXJuITF9cmV0dXJuITB9dmFyIG9lPW5lKFwiNS4yLjFcIiksc2U9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuKXt0aGlzLnJ1bGVzPWUsdGhpcy5zdGF0aWNSdWxlc0lkPVwiXCIsdGhpcy5pc1N0YXRpYz1cInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYodm9pZCAwPT09bnx8bi5pc1N0YXRpYykmJnJlKGUpLHRoaXMuY29tcG9uZW50SWQ9dCx0aGlzLmJhc2VIYXNoPXRlKG9lLHQpLHRoaXMuYmFzZVN0eWxlPW4sWi5yZWdpc3RlcklkKHQpfXJldHVybiBlLnByb3RvdHlwZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcz1mdW5jdGlvbihlLHQsbil7dmFyIHI9dGhpcy5jb21wb25lbnRJZCxvPVtdO2lmKHRoaXMuYmFzZVN0eWxlJiZvLnB1c2godGhpcy5iYXNlU3R5bGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoZSx0LG4pKSx0aGlzLmlzU3RhdGljJiYhbi5oYXNoKWlmKHRoaXMuc3RhdGljUnVsZXNJZCYmdC5oYXNOYW1lRm9ySWQocix0aGlzLnN0YXRpY1J1bGVzSWQpKW8ucHVzaCh0aGlzLnN0YXRpY1J1bGVzSWQpO2Vsc2V7dmFyIHM9TmUodGhpcy5ydWxlcyxlLHQsbikuam9pbihcIlwiKSxpPWVlKHRlKHRoaXMuYmFzZUhhc2gscy5sZW5ndGgpPj4+MCk7aWYoIXQuaGFzTmFtZUZvcklkKHIsaSkpe3ZhciBhPW4ocyxcIi5cIitpLHZvaWQgMCxyKTt0Lmluc2VydFJ1bGVzKHIsaSxhKX1vLnB1c2goaSksdGhpcy5zdGF0aWNSdWxlc0lkPWl9ZWxzZXtmb3IodmFyIGM9dGhpcy5ydWxlcy5sZW5ndGgsdT10ZSh0aGlzLmJhc2VIYXNoLG4uaGFzaCksbD1cIlwiLGQ9MDtkPGM7ZCsrKXt2YXIgaD10aGlzLnJ1bGVzW2RdO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBoKWwrPWgsXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKHU9dGUodSxoK2QpKTtlbHNlIGlmKGgpe3ZhciBwPU5lKGgsZSx0LG4pLGY9QXJyYXkuaXNBcnJheShwKT9wLmpvaW4oXCJcIik6cDt1PXRlKHUsZitkKSxsKz1mfX1pZihsKXt2YXIgbT1lZSh1Pj4+MCk7aWYoIXQuaGFzTmFtZUZvcklkKHIsbSkpe3ZhciB5PW4obCxcIi5cIittLHZvaWQgMCxyKTt0Lmluc2VydFJ1bGVzKHIsbSx5KX1vLnB1c2gobSl9fXJldHVybiBvLmpvaW4oXCIgXCIpfSxlfSgpLGllPS9eXFxzKlxcL1xcLy4qJC9nbSxhZT1bXCI6XCIsXCJbXCIsXCIuXCIsXCIjXCJdO2Z1bmN0aW9uIGNlKGUpe3ZhciB0LG4scixvLHM9dm9pZCAwPT09ZT9FOmUsaT1zLm9wdGlvbnMsYT12b2lkIDA9PT1pP0U6aSxjPXMucGx1Z2lucyx1PXZvaWQgMD09PWM/dzpjLGw9bmV3IHAoYSksZD1bXSxoPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQodCl7aWYodCl0cnl7ZSh0K1wifVwiKX1jYXRjaChlKXt9fXJldHVybiBmdW5jdGlvbihuLHIsbyxzLGksYSxjLHUsbCxkKXtzd2l0Y2gobil7Y2FzZSAxOmlmKDA9PT1sJiY2ND09PXIuY2hhckNvZGVBdCgwKSlyZXR1cm4gZShyK1wiO1wiKSxcIlwiO2JyZWFrO2Nhc2UgMjppZigwPT09dSlyZXR1cm4gcitcIi8qfCovXCI7YnJlYWs7Y2FzZSAzOnN3aXRjaCh1KXtjYXNlIDEwMjpjYXNlIDExMjpyZXR1cm4gZShvWzBdK3IpLFwiXCI7ZGVmYXVsdDpyZXR1cm4gcisoMD09PWQ/XCIvKnwqL1wiOlwiXCIpfWNhc2UtMjpyLnNwbGl0KFwiLyp8Ki99XCIpLmZvckVhY2godCl9fX0oKGZ1bmN0aW9uKGUpe2QucHVzaChlKX0pKSxmPWZ1bmN0aW9uKGUscixzKXtyZXR1cm4gMD09PXImJmFlLmluY2x1ZGVzKHNbbi5sZW5ndGhdKXx8cy5tYXRjaChvKT9lOlwiLlwiK3R9O2Z1bmN0aW9uIG0oZSxzLGksYSl7dm9pZCAwPT09YSYmKGE9XCImXCIpO3ZhciBjPWUucmVwbGFjZShpZSxcIlwiKSx1PXMmJmk/aStcIiBcIitzK1wiIHsgXCIrYytcIiB9XCI6YztyZXR1cm4gdD1hLG49cyxyPW5ldyBSZWdFeHAoXCJcXFxcXCIrbitcIlxcXFxiXCIsXCJnXCIpLG89bmV3IFJlZ0V4cChcIihcXFxcXCIrbitcIlxcXFxiKXsyLH1cIiksbChpfHwhcz9cIlwiOnMsdSl9cmV0dXJuIGwudXNlKFtdLmNvbmNhdCh1LFtmdW5jdGlvbihlLHQsbyl7Mj09PWUmJm8ubGVuZ3RoJiZvWzBdLmxhc3RJbmRleE9mKG4pPjAmJihvWzBdPW9bMF0ucmVwbGFjZShyLGYpKX0saCxmdW5jdGlvbihlKXtpZigtMj09PWUpe3ZhciB0PWQ7cmV0dXJuIGQ9W10sdH19XSkpLG0uaGFzaD11Lmxlbmd0aD91LnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC5uYW1lfHxqKDE1KSx0ZShlLHQubmFtZSl9KSw1MzgxKS50b1N0cmluZygpOlwiXCIsbX12YXIgdWU9ci5jcmVhdGVDb250ZXh0KCksbGU9dWUuQ29uc3VtZXIsZGU9ci5jcmVhdGVDb250ZXh0KCksaGU9KGRlLkNvbnN1bWVyLG5ldyBaKSxwZT1jZSgpO2Z1bmN0aW9uIGZlKCl7cmV0dXJuIHModWUpfHxoZX1mdW5jdGlvbiBtZSgpe3JldHVybiBzKGRlKXx8cGV9ZnVuY3Rpb24geWUoZSl7dmFyIHQ9byhlLnN0eWxpc1BsdWdpbnMpLG49dFswXSxzPXRbMV0sYz1mZSgpLHU9aSgoZnVuY3Rpb24oKXt2YXIgdD1jO3JldHVybiBlLnNoZWV0P3Q9ZS5zaGVldDplLnRhcmdldCYmKHQ9dC5yZWNvbnN0cnVjdFdpdGhPcHRpb25zKHt0YXJnZXQ6ZS50YXJnZXR9LCExKSksZS5kaXNhYmxlQ1NTT01JbmplY3Rpb24mJih0PXQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucyh7dXNlQ1NTT01JbmplY3Rpb246ITF9KSksdH0pLFtlLmRpc2FibGVDU1NPTUluamVjdGlvbixlLnNoZWV0LGUudGFyZ2V0XSksbD1pKChmdW5jdGlvbigpe3JldHVybiBjZSh7b3B0aW9uczp7cHJlZml4OiFlLmRpc2FibGVWZW5kb3JQcmVmaXhlc30scGx1Z2luczpufSl9KSxbZS5kaXNhYmxlVmVuZG9yUHJlZml4ZXMsbl0pO3JldHVybiBhKChmdW5jdGlvbigpe2gobixlLnN0eWxpc1BsdWdpbnMpfHxzKGUuc3R5bGlzUGx1Z2lucyl9KSxbZS5zdHlsaXNQbHVnaW5zXSksci5jcmVhdGVFbGVtZW50KHVlLlByb3ZpZGVyLHt2YWx1ZTp1fSxyLmNyZWF0ZUVsZW1lbnQoZGUuUHJvdmlkZXIse3ZhbHVlOmx9LFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/ci5DaGlsZHJlbi5vbmx5KGUuY2hpbGRyZW4pOmUuY2hpbGRyZW4pKX12YXIgdmU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dmFyIG49dGhpczt0aGlzLmluamVjdD1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PXBlKTt2YXIgcj1uLm5hbWUrdC5oYXNoO2UuaGFzTmFtZUZvcklkKG4uaWQscil8fGUuaW5zZXJ0UnVsZXMobi5pZCxyLHQobi5ydWxlcyxyLFwiQGtleWZyYW1lc1wiKSl9LHRoaXMudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gaigxMixTdHJpbmcobi5uYW1lKSl9LHRoaXMubmFtZT1lLHRoaXMuaWQ9XCJzYy1rZXlmcmFtZXMtXCIrZSx0aGlzLnJ1bGVzPXR9cmV0dXJuIGUucHJvdG90eXBlLmdldE5hbWU9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXBlKSx0aGlzLm5hbWUrZS5oYXNofSxlfSgpLGdlPS8oW0EtWl0pLyxTZT0vKFtBLVpdKS9nLHdlPS9ebXMtLyxFZT1mdW5jdGlvbihlKXtyZXR1cm5cIi1cIitlLnRvTG93ZXJDYXNlKCl9O2Z1bmN0aW9uIGJlKGUpe3JldHVybiBnZS50ZXN0KGUpP2UucmVwbGFjZShTZSxFZSkucmVwbGFjZSh3ZSxcIi1tcy1cIik6ZX12YXIgX2U9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWV8fCExPT09ZXx8XCJcIj09PWV9O2Z1bmN0aW9uIE5lKGUsbixyLG8pe2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgcyxpPVtdLGE9MCxjPWUubGVuZ3RoO2E8YzthKz0xKVwiXCIhPT0ocz1OZShlW2FdLG4scixvKSkmJihBcnJheS5pc0FycmF5KHMpP2kucHVzaC5hcHBseShpLHMpOmkucHVzaChzKSk7cmV0dXJuIGl9aWYoX2UoZSkpcmV0dXJuXCJcIjtpZihOKGUpKXJldHVyblwiLlwiK2Uuc3R5bGVkQ29tcG9uZW50SWQ7aWYoYihlKSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YobD1lKXx8bC5wcm90b3R5cGUmJmwucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR8fCFuKXJldHVybiBlO3ZhciB1PWUobik7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmdCh1KSYmY29uc29sZS53YXJuKF8oZSkrXCIgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlwiKSxOZSh1LG4scixvKX12YXIgbDtyZXR1cm4gZSBpbnN0YW5jZW9mIHZlP3I/KGUuaW5qZWN0KHIsbyksZS5nZXROYW1lKG8pKTplOlMoZSk/ZnVuY3Rpb24gZSh0LG4pe3ZhciByLG8scz1bXTtmb3IodmFyIGkgaW4gdCl0Lmhhc093blByb3BlcnR5KGkpJiYhX2UodFtpXSkmJihTKHRbaV0pP3MucHVzaC5hcHBseShzLGUodFtpXSxpKSk6Yih0W2ldKT9zLnB1c2goYmUoaSkrXCI6XCIsdFtpXSxcIjtcIik6cy5wdXNoKGJlKGkpK1wiOiBcIisocj1pLG51bGw9PShvPXRbaV0pfHxcImJvb2xlYW5cIj09dHlwZW9mIG98fFwiXCI9PT1vP1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIG98fDA9PT1vfHxyIGluIGY/U3RyaW5nKG8pLnRyaW0oKTpvK1wicHhcIikrXCI7XCIpKTtyZXR1cm4gbj9bbitcIiB7XCJdLmNvbmNhdChzLFtcIn1cIl0pOnN9KGUpOmUudG9TdHJpbmcoKX1mdW5jdGlvbiBBZShlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0PjE/dC0xOjApLHI9MTtyPHQ7cisrKW5bci0xXT1hcmd1bWVudHNbcl07cmV0dXJuIGIoZSl8fFMoZSk/TmUoZyh3LFtlXS5jb25jYXQobikpKTowPT09bi5sZW5ndGgmJjE9PT1lLmxlbmd0aCYmXCJzdHJpbmdcIj09dHlwZW9mIGVbMF0/ZTpOZShnKGUsbikpfXZhciBDZT0vaW52YWxpZCBob29rIGNhbGwvaSxJZT1uZXcgU2V0LFBlPWZ1bmN0aW9uKGUsdCl7aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVil7dmFyIG49XCJUaGUgY29tcG9uZW50IFwiK2UrKHQ/JyB3aXRoIHRoZSBpZCBvZiBcIicrdCsnXCInOlwiXCIpK1wiIGhhcyBiZWVuIGNyZWF0ZWQgZHluYW1pY2FsbHkuXFxuWW91IG1heSBzZWUgdGhpcyB3YXJuaW5nIGJlY2F1c2UgeW91J3ZlIGNhbGxlZCBzdHlsZWQgaW5zaWRlIGFub3RoZXIgY29tcG9uZW50LlxcblRvIHJlc29sdmUgdGhpcyBvbmx5IGNyZWF0ZSBuZXcgU3R5bGVkQ29tcG9uZW50cyBvdXRzaWRlIG9mIGFueSByZW5kZXIgbWV0aG9kIGFuZCBmdW5jdGlvbiBjb21wb25lbnQuXCI7dHJ5e2MoKSxJZS5oYXMobil8fChjb25zb2xlLndhcm4obiksSWUuYWRkKG4pKX1jYXRjaChlKXtDZS50ZXN0KGUubWVzc2FnZSkmJkllLmRlbGV0ZShuKX19fSxPZT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHZvaWQgMD09PW4mJihuPUUpLGUudGhlbWUhPT1uLnRoZW1lJiZlLnRoZW1lfHx0fHxuLnRoZW1lfSxSZT0vWyFcIiMkJSYnKCkqKywuLzo7PD0+P0BbXFxcXFxcXV5ge3x9fi1dKy9nLERlPS8oXi18LSQpL2c7ZnVuY3Rpb24gamUoZSl7cmV0dXJuIGUucmVwbGFjZShSZSxcIi1cIikucmVwbGFjZShEZSxcIlwiKX12YXIgVGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGVlKG5lKGUpPj4+MCl9O2Z1bmN0aW9uIGtlKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYoXCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVnx8ZS5jaGFyQXQoMCk9PT1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpKX12YXIgeGU9ZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZXx8XCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPT1lJiYhQXJyYXkuaXNBcnJheShlKX0sVmU9ZnVuY3Rpb24oZSl7cmV0dXJuXCJfX3Byb3RvX19cIiE9PWUmJlwiY29uc3RydWN0b3JcIiE9PWUmJlwicHJvdG90eXBlXCIhPT1lfTtmdW5jdGlvbiBCZShlLHQsbil7dmFyIHI9ZVtuXTt4ZSh0KSYmeGUocik/TWUocix0KTplW25dPXR9ZnVuY3Rpb24gTWUoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO2Zvcih2YXIgbz0wLHM9bjtvPHMubGVuZ3RoO28rKyl7dmFyIGk9c1tvXTtpZih4ZShpKSlmb3IodmFyIGEgaW4gaSlWZShhKSYmQmUoZSxpW2FdLGEpfXJldHVybiBlfXZhciB6ZT1yLmNyZWF0ZUNvbnRleHQoKSxMZT16ZS5Db25zdW1lcjtmdW5jdGlvbiBHZShlKXt2YXIgdD1zKHplKSxuPWkoKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7aWYoIWUpcmV0dXJuIGooMTQpO2lmKGIoZSkpe3ZhciBuPWUodCk7cmV0dXJuXCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVnx8bnVsbCE9PW4mJiFBcnJheS5pc0FycmF5KG4pJiZcIm9iamVjdFwiPT10eXBlb2Ygbj9uOmooNyl9cmV0dXJuIEFycmF5LmlzQXJyYXkoZSl8fFwib2JqZWN0XCIhPXR5cGVvZiBlP2ooOCk6dD92KHt9LHQse30sZSk6ZX0oZS50aGVtZSx0KX0pLFtlLnRoZW1lLHRdKTtyZXR1cm4gZS5jaGlsZHJlbj9yLmNyZWF0ZUVsZW1lbnQoemUuUHJvdmlkZXIse3ZhbHVlOm59LGUuY2hpbGRyZW4pOm51bGx9dmFyIEZlPXt9O2Z1bmN0aW9uIFllKGUsdCxuKXt2YXIgbz1OKGUpLGk9IWtlKGUpLGE9dC5hdHRycyxjPXZvaWQgMD09PWE/dzphLGQ9dC5jb21wb25lbnRJZCxoPXZvaWQgMD09PWQ/ZnVuY3Rpb24oZSx0KXt2YXIgbj1cInN0cmluZ1wiIT10eXBlb2YgZT9cInNjXCI6amUoZSk7RmVbbl09KEZlW25dfHwwKSsxO3ZhciByPW4rXCItXCIrVGUoXCI1LjIuMVwiK24rRmVbbl0pO3JldHVybiB0P3QrXCItXCIrcjpyfSh0LmRpc3BsYXlOYW1lLHQucGFyZW50Q29tcG9uZW50SWQpOmQscD10LmRpc3BsYXlOYW1lLGY9dm9pZCAwPT09cD9mdW5jdGlvbihlKXtyZXR1cm4ga2UoZSk/XCJzdHlsZWQuXCIrZTpcIlN0eWxlZChcIitfKGUpK1wiKVwifShlKTpwLGc9dC5kaXNwbGF5TmFtZSYmdC5jb21wb25lbnRJZD9qZSh0LmRpc3BsYXlOYW1lKStcIi1cIit0LmNvbXBvbmVudElkOnQuY29tcG9uZW50SWR8fGgsUz1vJiZlLmF0dHJzP0FycmF5LnByb3RvdHlwZS5jb25jYXQoZS5hdHRycyxjKS5maWx0ZXIoQm9vbGVhbik6YyxBPXQuc2hvdWxkRm9yd2FyZFByb3A7byYmZS5zaG91bGRGb3J3YXJkUHJvcCYmKEE9dC5zaG91bGRGb3J3YXJkUHJvcD9mdW5jdGlvbihuLHIpe3JldHVybiBlLnNob3VsZEZvcndhcmRQcm9wKG4scikmJnQuc2hvdWxkRm9yd2FyZFByb3AobixyKX06ZS5zaG91bGRGb3J3YXJkUHJvcCk7dmFyIEMsST1uZXcgc2UobixnLG8/ZS5jb21wb25lbnRTdHlsZTp2b2lkIDApLFA9SS5pc1N0YXRpYyYmMD09PWMubGVuZ3RoLE89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSx0LG4scil7dmFyIG89ZS5hdHRycyxpPWUuY29tcG9uZW50U3R5bGUsYT1lLmRlZmF1bHRQcm9wcyxjPWUuZm9sZGVkQ29tcG9uZW50SWRzLGQ9ZS5zaG91bGRGb3J3YXJkUHJvcCxoPWUuc3R5bGVkQ29tcG9uZW50SWQscD1lLnRhcmdldDtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZsKGgpO3ZhciBmPWZ1bmN0aW9uKGUsdCxuKXt2b2lkIDA9PT1lJiYoZT1FKTt2YXIgcj12KHt9LHQse3RoZW1lOmV9KSxvPXt9O3JldHVybiBuLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0LG4scyxpPWU7Zm9yKHQgaW4gYihpKSYmKGk9aShyKSksaSlyW3RdPW9bdF09XCJjbGFzc05hbWVcIj09PXQ/KG49b1t0XSxzPWlbdF0sbiYmcz9uK1wiIFwiK3M6bnx8cyk6aVt0XX0pKSxbcixvXX0oT2UodCxzKHplKSxhKXx8RSx0LG8pLHk9ZlswXSxnPWZbMV0sUz1mdW5jdGlvbihlLHQsbixyKXt2YXIgbz1mZSgpLHM9bWUoKSxpPXQ/ZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhFLG8scyk6ZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhuLG8scyk7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmbChpKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYhdCYmciYmcihpKSxpfShpLHIseSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP2Uud2FyblRvb01hbnlDbGFzc2VzOnZvaWQgMCksdz1uLF89Zy4kYXN8fHQuJGFzfHxnLmFzfHx0LmFzfHxwLE49a2UoXyksQT1nIT09dD92KHt9LHQse30sZyk6dCxDPXt9O2Zvcih2YXIgSSBpbiBBKVwiJFwiIT09SVswXSYmXCJhc1wiIT09SSYmKFwiZm9yd2FyZGVkQXNcIj09PUk/Qy5hcz1BW0ldOihkP2QoSSxtKTohTnx8bShJKSkmJihDW0ldPUFbSV0pKTtyZXR1cm4gdC5zdHlsZSYmZy5zdHlsZSE9PXQuc3R5bGUmJihDLnN0eWxlPXYoe30sdC5zdHlsZSx7fSxnLnN0eWxlKSksQy5jbGFzc05hbWU9QXJyYXkucHJvdG90eXBlLmNvbmNhdChjLGgsUyE9PWg/UzpudWxsLHQuY2xhc3NOYW1lLGcuY2xhc3NOYW1lKS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIiksQy5yZWY9dyx1KF8sQyl9KEMsZSx0LFApfTtyZXR1cm4gTy5kaXNwbGF5TmFtZT1mLChDPXIuZm9yd2FyZFJlZihPKSkuYXR0cnM9UyxDLmNvbXBvbmVudFN0eWxlPUksQy5kaXNwbGF5TmFtZT1mLEMuc2hvdWxkRm9yd2FyZFByb3A9QSxDLmZvbGRlZENvbXBvbmVudElkcz1vP0FycmF5LnByb3RvdHlwZS5jb25jYXQoZS5mb2xkZWRDb21wb25lbnRJZHMsZS5zdHlsZWRDb21wb25lbnRJZCk6dyxDLnN0eWxlZENvbXBvbmVudElkPWcsQy50YXJnZXQ9bz9lLnRhcmdldDplLEMud2l0aENvbXBvbmVudD1mdW5jdGlvbihlKXt2YXIgcj10LmNvbXBvbmVudElkLG89ZnVuY3Rpb24oZSx0KXtpZihudWxsPT1lKXJldHVybnt9O3ZhciBuLHIsbz17fSxzPU9iamVjdC5rZXlzKGUpO2ZvcihyPTA7cjxzLmxlbmd0aDtyKyspbj1zW3JdLHQuaW5kZXhPZihuKT49MHx8KG9bbl09ZVtuXSk7cmV0dXJuIG99KHQsW1wiY29tcG9uZW50SWRcIl0pLHM9ciYmcitcIi1cIisoa2UoZSk/ZTpqZShfKGUpKSk7cmV0dXJuIFllKGUsdih7fSxvLHthdHRyczpTLGNvbXBvbmVudElkOnN9KSxuKX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KEMsXCJkZWZhdWx0UHJvcHNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2ZvbGRlZERlZmF1bHRQcm9wc30sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuX2ZvbGRlZERlZmF1bHRQcm9wcz1vP01lKHt9LGUuZGVmYXVsdFByb3BzLHQpOnR9fSksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKFBlKGYsZyksQy53YXJuVG9vTWFueUNsYXNzZXM9ZnVuY3Rpb24oZSx0KXt2YXIgbj17fSxyPSExO3JldHVybiBmdW5jdGlvbihvKXtpZighciYmKG5bb109ITAsT2JqZWN0LmtleXMobikubGVuZ3RoPj0yMDApKXt2YXIgcz10Pycgd2l0aCB0aGUgaWQgb2YgXCInK3QrJ1wiJzpcIlwiO2NvbnNvbGUud2FybihcIk92ZXIgMjAwIGNsYXNzZXMgd2VyZSBnZW5lcmF0ZWQgZm9yIGNvbXBvbmVudCBcIitlK3MrXCIuXFxuQ29uc2lkZXIgdXNpbmcgdGhlIGF0dHJzIG1ldGhvZCwgdG9nZXRoZXIgd2l0aCBhIHN0eWxlIG9iamVjdCBmb3IgZnJlcXVlbnRseSBjaGFuZ2VkIHN0eWxlcy5cXG5FeGFtcGxlOlxcbiAgY29uc3QgQ29tcG9uZW50ID0gc3R5bGVkLmRpdi5hdHRycyhwcm9wcyA9PiAoe1xcbiAgICBzdHlsZToge1xcbiAgICAgIGJhY2tncm91bmQ6IHByb3BzLmJhY2tncm91bmQsXFxuICAgIH0sXFxuICB9KSlgd2lkdGg6IDEwMCU7YFxcblxcbiAgPENvbXBvbmVudCAvPlwiKSxyPSEwLG49e319fX0oZixnKSksQy50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiLlwiK0Muc3R5bGVkQ29tcG9uZW50SWR9LGkmJnkoQyxlLHthdHRyczohMCxjb21wb25lbnRTdHlsZTohMCxkaXNwbGF5TmFtZTohMCxmb2xkZWRDb21wb25lbnRJZHM6ITAsc2hvdWxkRm9yd2FyZFByb3A6ITAsc3R5bGVkQ29tcG9uZW50SWQ6ITAsdGFyZ2V0OiEwLHdpdGhDb21wb25lbnQ6ITB9KSxDfXZhciBxZT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24gZSh0LHIsbyl7aWYodm9pZCAwPT09byYmKG89RSksIW4ocikpcmV0dXJuIGooMSxTdHJpbmcocikpO3ZhciBzPWZ1bmN0aW9uKCl7cmV0dXJuIHQocixvLEFlLmFwcGx5KHZvaWQgMCxhcmd1bWVudHMpKX07cmV0dXJuIHMud2l0aENvbmZpZz1mdW5jdGlvbihuKXtyZXR1cm4gZSh0LHIsdih7fSxvLHt9LG4pKX0scy5hdHRycz1mdW5jdGlvbihuKXtyZXR1cm4gZSh0LHIsdih7fSxvLHthdHRyczpBcnJheS5wcm90b3R5cGUuY29uY2F0KG8uYXR0cnMsbikuZmlsdGVyKEJvb2xlYW4pfSkpfSxzfShZZSxlKX07W1wiYVwiLFwiYWJiclwiLFwiYWRkcmVzc1wiLFwiYXJlYVwiLFwiYXJ0aWNsZVwiLFwiYXNpZGVcIixcImF1ZGlvXCIsXCJiXCIsXCJiYXNlXCIsXCJiZGlcIixcImJkb1wiLFwiYmlnXCIsXCJibG9ja3F1b3RlXCIsXCJib2R5XCIsXCJiclwiLFwiYnV0dG9uXCIsXCJjYW52YXNcIixcImNhcHRpb25cIixcImNpdGVcIixcImNvZGVcIixcImNvbFwiLFwiY29sZ3JvdXBcIixcImRhdGFcIixcImRhdGFsaXN0XCIsXCJkZFwiLFwiZGVsXCIsXCJkZXRhaWxzXCIsXCJkZm5cIixcImRpYWxvZ1wiLFwiZGl2XCIsXCJkbFwiLFwiZHRcIixcImVtXCIsXCJlbWJlZFwiLFwiZmllbGRzZXRcIixcImZpZ2NhcHRpb25cIixcImZpZ3VyZVwiLFwiZm9vdGVyXCIsXCJmb3JtXCIsXCJoMVwiLFwiaDJcIixcImgzXCIsXCJoNFwiLFwiaDVcIixcImg2XCIsXCJoZWFkXCIsXCJoZWFkZXJcIixcImhncm91cFwiLFwiaHJcIixcImh0bWxcIixcImlcIixcImlmcmFtZVwiLFwiaW1nXCIsXCJpbnB1dFwiLFwiaW5zXCIsXCJrYmRcIixcImtleWdlblwiLFwibGFiZWxcIixcImxlZ2VuZFwiLFwibGlcIixcImxpbmtcIixcIm1haW5cIixcIm1hcFwiLFwibWFya1wiLFwibWFycXVlZVwiLFwibWVudVwiLFwibWVudWl0ZW1cIixcIm1ldGFcIixcIm1ldGVyXCIsXCJuYXZcIixcIm5vc2NyaXB0XCIsXCJvYmplY3RcIixcIm9sXCIsXCJvcHRncm91cFwiLFwib3B0aW9uXCIsXCJvdXRwdXRcIixcInBcIixcInBhcmFtXCIsXCJwaWN0dXJlXCIsXCJwcmVcIixcInByb2dyZXNzXCIsXCJxXCIsXCJycFwiLFwicnRcIixcInJ1YnlcIixcInNcIixcInNhbXBcIixcInNjcmlwdFwiLFwic2VjdGlvblwiLFwic2VsZWN0XCIsXCJzbWFsbFwiLFwic291cmNlXCIsXCJzcGFuXCIsXCJzdHJvbmdcIixcInN0eWxlXCIsXCJzdWJcIixcInN1bW1hcnlcIixcInN1cFwiLFwidGFibGVcIixcInRib2R5XCIsXCJ0ZFwiLFwidGV4dGFyZWFcIixcInRmb290XCIsXCJ0aFwiLFwidGhlYWRcIixcInRpbWVcIixcInRpdGxlXCIsXCJ0clwiLFwidHJhY2tcIixcInVcIixcInVsXCIsXCJ2YXJcIixcInZpZGVvXCIsXCJ3YnJcIixcImNpcmNsZVwiLFwiY2xpcFBhdGhcIixcImRlZnNcIixcImVsbGlwc2VcIixcImZvcmVpZ25PYmplY3RcIixcImdcIixcImltYWdlXCIsXCJsaW5lXCIsXCJsaW5lYXJHcmFkaWVudFwiLFwibWFya2VyXCIsXCJtYXNrXCIsXCJwYXRoXCIsXCJwYXR0ZXJuXCIsXCJwb2x5Z29uXCIsXCJwb2x5bGluZVwiLFwicmFkaWFsR3JhZGllbnRcIixcInJlY3RcIixcInN0b3BcIixcInN2Z1wiLFwidGV4dFwiLFwidHNwYW5cIl0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7cWVbZV09cWUoZSl9KSk7dmFyIEhlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3RoaXMucnVsZXM9ZSx0aGlzLmNvbXBvbmVudElkPXQsdGhpcy5pc1N0YXRpYz1yZShlKSxaLnJlZ2lzdGVySWQodGhpcy5jb21wb25lbnRJZCsxKX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5jcmVhdGVTdHlsZXM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIG89cihOZSh0aGlzLnJ1bGVzLHQsbixyKS5qb2luKFwiXCIpLFwiXCIpLHM9dGhpcy5jb21wb25lbnRJZCtlO24uaW5zZXJ0UnVsZXMocyxzLG8pfSx0LnJlbW92ZVN0eWxlcz1mdW5jdGlvbihlLHQpe3QuY2xlYXJSdWxlcyh0aGlzLmNvbXBvbmVudElkK2UpfSx0LnJlbmRlclN0eWxlcz1mdW5jdGlvbihlLHQsbixyKXtlPjImJloucmVnaXN0ZXJJZCh0aGlzLmNvbXBvbmVudElkK2UpLHRoaXMucmVtb3ZlU3R5bGVzKGUsbiksdGhpcy5jcmVhdGVTdHlsZXMoZSx0LG4scil9LGV9KCk7ZnVuY3Rpb24gJGUoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxvPTE7bzx0O28rKyluW28tMV09YXJndW1lbnRzW29dO3ZhciBpPUFlLmFwcGx5KHZvaWQgMCxbZV0uY29uY2F0KG4pKSxhPVwic2MtZ2xvYmFsLVwiK1RlKEpTT04uc3RyaW5naWZ5KGkpKSx1PW5ldyBIZShpLGEpO2Z1bmN0aW9uIGwoZSl7dmFyIHQ9ZmUoKSxuPW1lKCksbz1zKHplKSxsPWModC5hbGxvY2F0ZUdTSW5zdGFuY2UoYSkpLmN1cnJlbnQ7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmci5DaGlsZHJlbi5jb3VudChlLmNoaWxkcmVuKSYmY29uc29sZS53YXJuKFwiVGhlIGdsb2JhbCBzdHlsZSBjb21wb25lbnQgXCIrYStcIiB3YXMgZ2l2ZW4gY2hpbGQgSlNYLiBjcmVhdGVHbG9iYWxTdHlsZSBkb2VzIG5vdCByZW5kZXIgY2hpbGRyZW4uXCIpLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmkuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJi0xIT09ZS5pbmRleE9mKFwiQGltcG9ydFwiKX0pKSYmY29uc29sZS53YXJuKFwiUGxlYXNlIGRvIG5vdCB1c2UgQGltcG9ydCBDU1Mgc3ludGF4IGluIGNyZWF0ZUdsb2JhbFN0eWxlIGF0IHRoaXMgdGltZSwgYXMgdGhlIENTU09NIEFQSXMgd2UgdXNlIGluIHByb2R1Y3Rpb24gZG8gbm90IGhhbmRsZSBpdCB3ZWxsLiBJbnN0ZWFkLCB3ZSByZWNvbW1lbmQgdXNpbmcgYSBsaWJyYXJ5IHN1Y2ggYXMgcmVhY3QtaGVsbWV0IHRvIGluamVjdCBhIHR5cGljYWwgPGxpbms+IG1ldGEgdGFnIHRvIHRoZSBzdHlsZXNoZWV0LCBvciBzaW1wbHkgZW1iZWRkaW5nIGl0IG1hbnVhbGx5IGluIHlvdXIgaW5kZXguaHRtbCA8aGVhZD4gc2VjdGlvbiBmb3IgYSBzaW1wbGVyIGFwcC5cIiksZCgoZnVuY3Rpb24oKXtyZXR1cm4gaChsLGUsdCxvLG4pLGZ1bmN0aW9uKCl7cmV0dXJuIHUucmVtb3ZlU3R5bGVzKGwsdCl9fSksW2wsZSx0LG8sbl0pLG51bGx9ZnVuY3Rpb24gaChlLHQsbixyLG8pe2lmKHUuaXNTdGF0aWMpdS5yZW5kZXJTdHlsZXMoZSxPLG4sbyk7ZWxzZXt2YXIgcz12KHt9LHQse3RoZW1lOk9lKHQscixsLmRlZmF1bHRQcm9wcyl9KTt1LnJlbmRlclN0eWxlcyhlLHMsbixvKX19cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmUGUoYSksci5tZW1vKGwpfWZ1bmN0aW9uIFdlKGUpe1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJlwiUmVhY3ROYXRpdmVcIj09PW5hdmlnYXRvci5wcm9kdWN0JiZjb25zb2xlLndhcm4oXCJga2V5ZnJhbWVzYCBjYW5ub3QgYmUgdXNlZCBvbiBSZWFjdE5hdGl2ZSwgb25seSBvbiB0aGUgd2ViLiBUbyBkbyBhbmltYXRpb24gaW4gUmVhY3ROYXRpdmUgcGxlYXNlIHVzZSBBbmltYXRlZC5cIik7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3ZhciBvPUFlLmFwcGx5KHZvaWQgMCxbZV0uY29uY2F0KG4pKS5qb2luKFwiXCIpLHM9VGUobyk7cmV0dXJuIG5ldyB2ZShzLG8pfXZhciBVZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt2YXIgZT10aGlzO3RoaXMuX2VtaXRTaGVldENTUz1mdW5jdGlvbigpe3ZhciB0PWUuaW5zdGFuY2UudG9TdHJpbmcoKSxuPXEoKTtyZXR1cm5cIjxzdHlsZSBcIitbbiYmJ25vbmNlPVwiJytuKydcIicsQSsnPVwidHJ1ZVwiJywnZGF0YS1zdHlsZWQtdmVyc2lvbj1cIjUuMi4xXCInXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIikrXCI+XCIrdCtcIjwvc3R5bGU+XCJ9LHRoaXMuZ2V0U3R5bGVUYWdzPWZ1bmN0aW9uKCl7cmV0dXJuIGUuc2VhbGVkP2ooMik6ZS5fZW1pdFNoZWV0Q1NTKCl9LHRoaXMuZ2V0U3R5bGVFbGVtZW50PWZ1bmN0aW9uKCl7dmFyIHQ7aWYoZS5zZWFsZWQpcmV0dXJuIGooMik7dmFyIG49KCh0PXt9KVtBXT1cIlwiLHRbXCJkYXRhLXN0eWxlZC12ZXJzaW9uXCJdPVwiNS4yLjFcIix0LmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtfX2h0bWw6ZS5pbnN0YW5jZS50b1N0cmluZygpfSx0KSxvPXEoKTtyZXR1cm4gbyYmKG4ubm9uY2U9byksW3IuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsdih7fSxuLHtrZXk6XCJzYy0wLTBcIn0pKV19LHRoaXMuc2VhbD1mdW5jdGlvbigpe2Uuc2VhbGVkPSEwfSx0aGlzLmluc3RhbmNlPW5ldyBaKHtpc1NlcnZlcjohMH0pLHRoaXMuc2VhbGVkPSExfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0LmNvbGxlY3RTdHlsZXM9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc2VhbGVkP2ooMik6ci5jcmVhdGVFbGVtZW50KHllLHtzaGVldDp0aGlzLmluc3RhbmNlfSxlKX0sdC5pbnRlcmxlYXZlV2l0aE5vZGVTdHJlYW09ZnVuY3Rpb24oZSl7cmV0dXJuIGooMyl9LGV9KCksSmU9ZnVuY3Rpb24oZSl7dmFyIHQ9ci5mb3J3YXJkUmVmKChmdW5jdGlvbih0LG4pe3ZhciBvPXMoemUpLGk9ZS5kZWZhdWx0UHJvcHMsYT1PZSh0LG8saSk7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmdm9pZCAwPT09YSYmY29uc29sZS53YXJuKCdbd2l0aFRoZW1lXSBZb3UgYXJlIG5vdCB1c2luZyBhIFRoZW1lUHJvdmlkZXIgbm9yIHBhc3NpbmcgYSB0aGVtZSBwcm9wIG9yIGEgdGhlbWUgaW4gZGVmYXVsdFByb3BzIGluIGNvbXBvbmVudCBjbGFzcyBcIicrXyhlKSsnXCInKSxyLmNyZWF0ZUVsZW1lbnQoZSx2KHt9LHQse3RoZW1lOmEscmVmOm59KSl9KSk7cmV0dXJuIHkodCxlKSx0LmRpc3BsYXlOYW1lPVwiV2l0aFRoZW1lKFwiK18oZSkrXCIpXCIsdH0sWGU9ZnVuY3Rpb24oKXtyZXR1cm4gcyh6ZSl9LFplPXtTdHlsZVNoZWV0OlosbWFzdGVyU2hlZXQ6aGV9O1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJlwiUmVhY3ROYXRpdmVcIj09PW5hdmlnYXRvci5wcm9kdWN0JiZjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHlvdSd2ZSBpbXBvcnRlZCAnc3R5bGVkLWNvbXBvbmVudHMnIG9uIFJlYWN0IE5hdGl2ZS5cXG5QZXJoYXBzIHlvdSdyZSBsb29raW5nIHRvIGltcG9ydCAnc3R5bGVkLWNvbXBvbmVudHMvbmF0aXZlJz9cXG5SZWFkIG1vcmUgYWJvdXQgdGhpcyBhdCBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9iYXNpY3MjcmVhY3QtbmF0aXZlXCIpLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidGVzdFwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJih3aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXT13aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXXx8MCwxPT09d2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl0mJmNvbnNvbGUud2FybihcIkl0IGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNldmVyYWwgaW5zdGFuY2VzIG9mICdzdHlsZWQtY29tcG9uZW50cycgaW5pdGlhbGl6ZWQgaW4gdGhpcyBhcHBsaWNhdGlvbi4gVGhpcyBtYXkgY2F1c2UgZHluYW1pYyBzdHlsZXMgdG8gbm90IHJlbmRlciBwcm9wZXJseSwgZXJyb3JzIGR1cmluZyB0aGUgcmVoeWRyYXRpb24gcHJvY2VzcywgYSBtaXNzaW5nIHRoZW1lIHByb3AsIGFuZCBtYWtlcyB5b3VyIGFwcGxpY2F0aW9uIGJpZ2dlciB3aXRob3V0IGdvb2QgcmVhc29uLlxcblxcblNlZSBodHRwczovL3MtYy5zaC8yQkFYemVkIGZvciBtb3JlIGluZm8uXCIpLHdpbmRvd1tcIl9fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fXCJdKz0xKTtleHBvcnQgZGVmYXVsdCBxZTtleHBvcnR7VWUgYXMgU2VydmVyU3R5bGVTaGVldCxsZSBhcyBTdHlsZVNoZWV0Q29uc3VtZXIsdWUgYXMgU3R5bGVTaGVldENvbnRleHQseWUgYXMgU3R5bGVTaGVldE1hbmFnZXIsTGUgYXMgVGhlbWVDb25zdW1lcix6ZSBhcyBUaGVtZUNvbnRleHQsR2UgYXMgVGhlbWVQcm92aWRlcixaZSBhcyBfX1BSSVZBVEVfXywkZSBhcyBjcmVhdGVHbG9iYWxTdHlsZSxBZSBhcyBjc3MsTiBhcyBpc1N0eWxlZENvbXBvbmVudCxXZSBhcyBrZXlmcmFtZXMsWGUgYXMgdXNlVGhlbWUsQyBhcyB2ZXJzaW9uLEplIGFzIHdpdGhUaGVtZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcy5tYXBcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBhdHRyaWJ1dGVzLCByZWFjdCBhcyBIb21lQ29udGVudCB9IGZyb20gJy4uL2NvbnRlbnQvaG9tZS5tZCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5kZXgubW9kdWxlLmNzcydcbmltcG9ydCBTbGlkZSBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJ1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93J1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nXG5pbXBvcnQgTGlzdEdyb3VwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9MaXN0R3JvdXAnXG5pbXBvcnQgQ2FyZCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2FyZCdcbmltcG9ydCBUYWJsZSBmcm9tICdyZWFjdC1ib290c3RyYXAvVGFibGUnXG5pbXBvcnQgQ2xpZW50U2xpZGUgZnJvbSAnLi4vY29tcG9uZW50cy9DbGllbnRTbGlkZSc7XG5cblxuLy8gaW1wb3J0IHRoZSBsaWJyYXJ5XG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmltcG9ydCB7IGZhcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcblxuXG4vLyBpbXBvcnQgeW91ciBpY29uc1xuXG5saWJyYXJ5LmFkZChmYXMpO1xuXG4gXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHRpdGxlLCBjYXRzIH0gPSBhdHRyaWJ1dGVzO1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vaWRlbnRpdHkubmV0bGlmeS5jb20vdjEvbmV0bGlmeS1pZGVudGl0eS13aWRnZXQuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgIDxTbGlkZS8+XG4gICAgXG5cbiAgICB7LyogPGFydGljbGU+XG4gICAgICAgICAgPGgxID57dGl0bGV9PC9oMT5cbiAgICAgICAgICA8SG9tZUNvbnRlbnQgLz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7Y2F0cy5tYXAoKGNhdCwgaykgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtrfT5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvYXJ0aWNsZT4gKi99XG4gICAgPHNlY3Rpb24+XG4gICAgICAgXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuPGgzIGNsYXNzTmFtZT17c3R5bGVzLnBhZGRpbmd9ICA+e3RpdGxlfVxuPC9oMz5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8Q29udGFpbmVyPlxuICAgICAgIDxIb21lQ29udGVudCAvPlxuICAgICAgIDxSb3c+XG4gICAgICAge2NhdHMubWFwKChjYXQsIGspID0+IChcbiAgICAgICAgIFxuICAgIDxDb2wgeHM9ezZ9IG1kPXs0fSBrZXk9e2t9PlxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnRodW1ifT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24gY29saW8tbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiQ2xvdWQgY29tcHV0aW5nIGFyY2hpdGVjdHVyZSBcIiBzcmM9XCIvaW1hZ2VzL3doYXRfd2UvcHJvZHVjdF9kZXZlbG9wbWVudC5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGFsdD1cInByb2R1Y3QgZGV2ZWxvcG1lbnRcIiAvPiBcbiAgICAgICAgICAgICAgICAgICAgICA8aDEgIGNsYXNzPVwiY29sb3ItdGV4dFwiPntjYXQubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgIDxwICBjbGFzcz1cImNvbG9yLXRleHQgaC0xMjVcIj4ge2NhdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJzbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFJlYWQgbW9yZSAmbmJzcDsmbmJzcDsmbmJzcDsgXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFzJywgJ2NoZXZyb24tY2lyY2xlLXJpZ2h0J119IC8+XG5cblxuICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgPC9Db2w+XG4gICAgXG4gIFxuICAgICAgKSl9XG4gIDwvUm93PlxuICBcbjwvQ29udGFpbmVyPlxuICAgICA8L3NlY3Rpb24+XG5cblxuey8qIHdoeSB1cyAqL31cbjxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0X2dyYXlfYmd9PlxuICBcblxuPENvbnRhaW5lcj5cbjxoMyBjbGFzc05hbWU9e3N0eWxlcy5wYWRkaW5nfT4gV0hZIFVTIDwvaDM+XG4gIFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRfY2VudGVyfT5cbiAgPExpc3RHcm91cCBob3Jpem9udGFsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RfZ3JvdXBfaXRlbX0+XG5cbiAgPExpc3RHcm91cC5JdGVtPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PlxuICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9pY29ufSBpY29uPXtbJ2ZhcycsICd1c2VyLWFsdCddfSAvPlxuICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFncmFwaH0+IEN1c3RvbWVyIEZvY3VzPC9wPlxuICAgIDwvZGl2PlxuICA8L0xpc3RHcm91cC5JdGVtPlxuXG4gIDxMaXN0R3JvdXAuSXRlbT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT5cbiAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RfaWNvbn0gaWNvbj17WydmYXMnLCAndHJvcGh5J119IC8+XG4gICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT4gUGFzc2lvbiBmb3IgU3VjY2VzczwvcD5cbiAgICA8L2Rpdj5cbiAgPC9MaXN0R3JvdXAuSXRlbT5cblxuXG4gIDxMaXN0R3JvdXAuSXRlbT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT5cbiAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RfaWNvbn0gaWNvbj17WydmYXMnLCAnbGFwdG9wJ119IC8+XG4gICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT4gVGVjaG5pY2FsIEtub3dsZWRnZTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9MaXN0R3JvdXAuSXRlbT5cblxuICA8TGlzdEdyb3VwLkl0ZW0+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeX0+XG4gICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5saXN0X2ljb259IGljb249e1snZmFzJywgJ2Jvb2snXX0gLz5cbiAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PiAgSW50ZWdyaXR5ICYgQWNjb3VudGFiaWxpdHk8L3A+XG4gICAgPC9kaXY+XG4gIDwvTGlzdEdyb3VwLkl0ZW0+XG5cbiAgPExpc3RHcm91cC5JdGVtPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PlxuICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9pY29ufSBpY29uPXtbJ2ZhcycsICdmcm93biddfSAvPlxuICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFncmFwaH0+ICAgRXhjZWxsZW5jZSBpbiBTZXJ2aWNlIDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9MaXN0R3JvdXAuSXRlbT5cblxuXG48L0xpc3RHcm91cD5cbiAgPC9kaXY+XG48YnI+PC9icj48YnI+PC9icj5cbiAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnBhZGRpbmd9PiBPVVIgTUFOVFJBIDwvaDM+XG48Um93PlxuPENhcmQgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2luXzEwfT5cbiAgPENhcmQuQm9keSBjbGFzc05hbWU9e3N0eWxlcy5wYWRkaW5nXzEwfT5cbiAgPFRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cbiAgPHRib2R5PlxuICAgIDx0cj5cbiAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5ib3JkZXJfbm9uZX0+XG4gICAgICAgIDxJbWFnZSB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiNjBcIiBzcmM9XCIvaW1hZ2VzL2lubm92YXRlLnN2Z1wiLz5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuYm9yZGVyX25vbmV9PlxuICAgICAgICA8aDQ+SU5OT1ZBVEU8L2g0PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PlxuICAgICAgICBJbm5vdmF0aW9uIGlzIHRoZSBhYmlsaXR5IHRvIHNlZSBjaGFuZ2UgYXMgYW4gb3Bwb3J0dW5pdHkgdGhhdCB1bmxvY2tzIG5ldyB2YWx1ZS4gVGhlcmUgaXMgYSB3YXkgdG8gZG8gaXQgYmV0dGVyIOKAkyB3ZSBhcmUgZmluZGluZyBpdC5zXG4gICAgICAgIDwvcD5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgPC90Ym9keT5cbjwvVGFibGU+XG4gIDwvQ2FyZC5Cb2R5PlxuPC9DYXJkPlxuXG48Q2FyZCBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW5fMTB9PlxuICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT17c3R5bGVzLnBhZGRpbmdfMTB9PlxuICA8VGFibGUgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxuICA8dGJvZHk+XG4gICAgPHRyPlxuICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmJvcmRlcl9ub25lfT5cbiAgICAgICAgPEltYWdlIHdpZHRoPVwiODBcIiBoZWlnaHQ9XCI4MFwiIHNyYz1cIi9pbWFnZXMvaW1wbGVtZW50YXRpb24uc3ZnXCIvPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5ib3JkZXJfbm9uZX0+XG4gICAgICAgIDxoND5JTVBMRU1FTlQ8L2g0PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PlxuICAgICAgICBBbiBJbm5vdmF0aW9uIGlkZWEgbmVlZHMgdGhlIHJpZ2h0IGltcGxlbWVudGF0aW9uIHRvIGZpbmQgc3VjY2Vzcy4gSXQgaXMgbm90IGp1c3QgdGhlIGFjdGlvbiwgYnV0IHJpZ2h0IGFjdGlvbiBkZXRlcm1pbmVzIHRoZSBwcm9kdWN0IGZhdGUuIFdlIGZvY3VzIG9uIHRoZSByaWdodCB3YXkgb2YgYnVpbGRpbmcgdGhlIHByb2R1Y3Qgd2l0aCB0aGUgcmlnaHQgdGVjaG5vbG9neS5cbiAgICAgICAgPC9wPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICA8L3Rib2R5PlxuPC9UYWJsZT5cbiAgPC9DYXJkLkJvZHk+XG48L0NhcmQ+XG5cbjxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbl8xMH0+XG4gIDxDYXJkLkJvZHkgY2xhc3NOYW1lPXtzdHlsZXMucGFkZGluZ19ub25lfT5cbiAgPFRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cbiAgPHRib2R5PlxuICAgIDx0cj5cbiAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5ib3JkZXJfbm9uZX0+XG4gICAgICAgIDxJbWFnZSB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjEyMFwiIHNyYz1cIi9pbWFnZXMvaXRlcmF0aW9uLnN2Z1wiLz5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuYm9yZGVyX25vbmV9PlxuICAgICAgICA8aDQ+SVRFUkFURTwvaDQ+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgIENoYW5nZSBpcyB0aGUgb25seSB0aGluZyB0aGF0IGlzIGNvbnN0YW50LiBBIHByb2R1Y3QgdGhhdCBkb2VzIG5vdCBpdGVyYXRlIGhhcyBhbiBleHBpcnkgZGF0ZSB0YWdnZWQgdG8gaXQgYXMgc29vbiBhcyBpdCBjb21lcyBvdXQuIFRocm91Z2ggYW4gaXRlcmF0aXZlIHByb2Nlc3MsIHdlIGNhbiBrZWVwIHRoZSBvcmlnaW5hbCBmb2N1cywgdmFsaWRhdGluZyBmb3IgY3VycmVudCBzaXR1YXRpb25zLCBoZWxwaW5nIHVzIGtlZXAgdGhlIGlkZWFzIGZyZXNoIGFuZCBwcm9kdWN0cyBjb21wZXRpdGl2ZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICA8L3Rib2R5PlxuPC9UYWJsZT5cbiAgPC9DYXJkLkJvZHk+XG48L0NhcmQ+XG48L1Jvdz5cblxuPC9Db250YWluZXI+XG5cblxuXG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudHN9PlxuICBcbjxDb250YWluZXI+XG48aDMgY2xhc3NOYW1lPXtzdHlsZXMucGFkZGluZzF9PiBPVVIgQU1BWklORyBDTElFTlRTXG4gPC9oMz5cbjxDbGllbnRTbGlkZS8+XG48L0NvbnRhaW5lcj5cbjwvc2VjdGlvbj5cblxuXG5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=