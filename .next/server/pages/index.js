module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./components/ClientSlide.js":
/*!***********************************!*\
  !*** ./components/ClientSlide.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\cmsinovark\\components\\ClientSlide.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ClientSlide extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
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
  }

  render() {
    const {
      items
    } = this.state;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
      itemsToScroll: 5,
      itemsToShow: 5,
      enableAutoPlay: true,
      autoPlaySpeed: 1500,
      children: items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: item.title
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 28
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ClientSlide);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Index.module.css */ "./pages/Index.module.css");
/* harmony import */ var _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "E:\\cmsinovark\\components\\Footer.js";



 // import './css/style.css';



 // import the library




const style = {
  col: {
    paddingLeft: 0,
    paddingRight: 0
  }
}; // import your icons

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["fas"]);

function Footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.footer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default.a, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text_center,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                src: "/images/inovark tech.png",
                width: "238",
                height: "80"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 1
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text_center,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.gray_color,
                children: ["   ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
                  icon: ['fas', 'envelope']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 47
                }, this), "   info@inovark.com"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 5
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default.a, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.foot_title1,
              children: "Quick Links"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.list,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.foot_list,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
                  className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.size,
                  icon: ['fas', 'chevron-right']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 10
                }, this), " About Us"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 10
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.foot_list,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
                  className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.size,
                  icon: ['fas', 'chevron-right']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 10
                }, this), " Products"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 10
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.foot_list,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
                  className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.size,
                  icon: ['fas', 'chevron-right']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 10
                }, this), " Services"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 10
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.foot_list,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
                  className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.size,
                  icon: ['fas', 'chevron-right']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 10
                }, this), " Contact Us"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 10
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 6
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default.a, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.foot_title,
              children: "PHOTO STREAM "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default.a, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default.a, {
                md: 4,
                className: style.col,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text_center,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.round,
                    src: "/images/footer/1.jpg",
                    width: "80",
                    height: "80"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 14
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default.a, {
                md: 4,
                className: style.col,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text_center,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.round,
                    src: "/images/footer/2.jpg",
                    width: "80",
                    height: "80"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 14
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default.a, {
                md: 4,
                className: style.col,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text_center,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.round,
                    src: "/images/footer/3.jpg",
                    width: "80",
                    height: "80"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 14
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default.a, {
                md: 4,
                className: style.col,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text_center,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.round1,
                    src: "/images/footer/4.jpg",
                    width: "80",
                    height: "80"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 14
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 3
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default.a, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.foot_title,
              children: "SOCIAL SHARE "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.social,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  src: "/images/social/twitter.svg",
                  width: "17",
                  height: "17"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 12
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  src: "/images/social/twitter.svg",
                  width: "17",
                  height: "17"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  src: "/images/social/twitter.svg",
                  width: "17",
                  height: "17"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 5
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 8
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 8
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/Index.module.css */ "./pages/Index.module.css");
/* harmony import */ var _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pages_Index_module_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "E:\\cmsinovark\\components\\Nav.js";





 // import './css/style.css';

function Navigation() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
      bg: "light",
      fixed: "top",
      expand: "lg",
      className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.shadow,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default.a.Brand, {
          href: "#home",
          className: "nav_left",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
            src: "/images/logo.png",
            width: "238",
            height: "80",
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default.a.Toggle, {
          "aria-controls": "basic-navbar-nav"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default.a.Collapse, {
          id: "basic-navbar-nav",
          className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.left_side,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a, {
            className: "pull-right",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
              href: "/Home",
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.nav_link,
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
              href: "/About",
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.nav_link,
              children: "About Us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
              href: "/Products",
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.nav_link,
              children: "Products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
              href: "/Services",
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.nav_link,
              children: "Services"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
              href: "/Careers",
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.nav_link,
              children: "Careers"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
              href: "/Contact",
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.nav_link,
              children: "Contact Us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/Slide.js":
/*!*****************************!*\
  !*** ./components/Slide.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Carousel */ "react-bootstrap/Carousel");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Index.module.css */ "./pages/Index.module.css");
/* harmony import */ var _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_Index_module_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "E:\\cmsinovark\\components\\Slide.js";






function Slide() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
      fade: true,
      className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.slide,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
          src: "/images/slides/market share.jpg",
          layout: "responsive",
          width: "1920",
          height: "538"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
          src: "/images/slides/world.jpg",
          layout: "responsive",
          width: "1920",
          height: "538"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 3
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 1
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Slide);

/***/ }),

/***/ "./content/home.md":
/*!*************************!*\
  !*** ./content/home.md ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(/*! react */ "react")

module.exports = { 
      attributes: {"title":"Inovark Technologies Editing","date":"2019-03-21T19:31:20.591Z","cats":[{"name":"adsd","description":"dsadsad"}]},
    
      react: 
      function (props) {
        Object.keys(props).forEach(function (key) {
          this[key] = props[key]
        })
        const markdown = /*#__PURE__*/React.createElement("div", {
  className: "frontmatter-markdown"
}, /*#__PURE__*/React.createElement("p", null, "welcome to ", /*#__PURE__*/React.createElement("strong", null, "inovark tech"), " This page is built with NextJS, and content is managed in Netlify CMS,"));
        return markdown
      }
    ,
     }

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    src: loader({
      src,
      quality,
      width: widths[last]
    }),
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ')
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./pages/Index.module.css":
/*!********************************!*\
  !*** ./pages/Index.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"red": "Index_red__iw9d-",
	"thumb": "Index_thumb__3Go8X",
	"padding": "Index_padding___-dHw",
	"padding1": "Index_padding1__3-xGS",
	"light_gray_bg": "Index_light_gray_bg__ih6JB",
	"nav_link": "Index_nav_link__wOEFJ",
	"left_side": "Index_left_side__1wly_",
	"text_center": "Index_text_center__2C5rU",
	"category": "Index_category__25dir",
	"list_icon": "Index_list_icon__V7H6r",
	"btn-primary": "Index_btn-primary__3WtRo",
	"paragraph": "Index_paragraph__1Jv9h",
	"list_group_item": "Index_list_group_item__1KQsu",
	"list-group-item": "Index_list-group-item__1JXjU",
	"table": "Index_table__3ISU3",
	"padding_none": "Index_padding_none__2JIMT",
	"padding_10": "Index_padding_10__3Wr1C",
	"border_none": "Index_border_none__fP7cI",
	"margin_10": "Index_margin_10__1tY2u",
	"clients": "Index_clients__1tue8",
	"white": "Index_white__5plGs",
	"img_line": "Index_img_line__SqMgI",
	"section": "Index_section__imm2D",
	"footer": "Index_footer__3ksGA",
	"gray_color": "Index_gray_color__26uOy",
	"foot_title": "Index_foot_title__1R7rS",
	"foot_title1": "Index_foot_title1__27Wtl",
	"size": "Index_size__FNCH2",
	"foot_list": "Index_foot_list__3SVZ3",
	"list": "Index_list__Bz0oy",
	"round": "Index_round__1W2ht",
	"round1": "Index_round1__2fy_b",
	"sub_bnr": "Index_sub_bnr__1Wlqs",
	"mission_box": "Index_mission_box__3-XxO",
	"mission_box_title": "Index_mission_box_title__28C8e",
	"mission_card_body": "Index_mission_card_body__1BJ8J",
	"mission_content": "Index_mission_content__2JY_f",
	"person": "Index_person__1lJzM",
	"product_bnr": "Index_product_bnr__2Kc4N",
	"product_content": "Index_product_content__EtBMW",
	"services_bnr": "Index_services_bnr__3qIep",
	"service_card": "Index_service_card__SGCfc",
	"service_title": "Index_service_title__2e5gX",
	"service_content": "Index_service_content__3XsEn",
	"careers_bnr": "Index_careers_bnr__29AZt",
	"job_box": "Index_job_box__2m49h",
	"job_content": "Index_job_content__1DkAk",
	"bg_primary": "Index_bg_primary__3rIZj",
	"close": "Index_close__2SICp",
	"job_list": "Index_job_list__1yisL",
	"modal_icon": "Index_modal_icon__FMlbW",
	"contact_bnr": "Index_contact_bnr__30tIh",
	"bg_black": "Index_bg_black__3T2s7",
	"contact_info": "Index_contact_info__3jAKx",
	"tech": "Index_tech__3fWd-",
	"mail": "Index_mail__1dnWf",
	"mail_icon": "Index_mail_icon__2WqSQ",
	"envelope_icon": "Index_envelope_icon__4Ay-5",
	"slide": "Index_slide__28NA1",
	"shadow": "Index_shadow__5m7P2"
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/home.md */ "./content/home.md");
/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_home_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var _Index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Index.module.css */ "./pages/Index.module.css");
/* harmony import */ var _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Index_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Slide */ "./components/Slide.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "react-bootstrap/ListGroup");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Card */ "react-bootstrap/Card");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Table */ "react-bootstrap/Table");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_ClientSlide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ClientSlide */ "./components/ClientSlide.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_19__);

var _jsxFileName = "E:\\cmsinovark\\pages\\index.js";















 // import the library



 // import your icons

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_17__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_19__["fas"]);
function Home() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_16__["useRouter"])();
  let {
    title,
    cats
  } = _content_home_md__WEBPACK_IMPORTED_MODULE_2__["attributes"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
      columnNumber: 6
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slide__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.section,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.padding,
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 1
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_content_home_md__WEBPACK_IMPORTED_MODULE_2__["react"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 8
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default.a, {
          children: cats.map((cat, k) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8___default.a, {
            xs: 6,
            md: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.thumb,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "button colio-link",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
                  alt: "Cloud computing architecture ",
                  src: "/images/what_we/product_development.png",
                  width: "100",
                  height: "100",
                  alt: "product development"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "color-text",
                  children: cat.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "color-text h-125",
                  children: [" ", cat.description]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
                variant: "primary",
                size: "sm",
                children: ["Read more \xA0\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeIcon"], {
                  icon: ['fas', 'chevron-circle-right']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 17
            }, this)
          }, k, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 5
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 8
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 8
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.light_gray_bg,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.padding,
          children: " WHY US "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text_center,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11___default.a, {
            horizontal: true,
            style: {
              background: 'transparent'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.category,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeIcon"], {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.list_icon,
                  icon: ['fas', 'user-alt']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.paragraph,
                  children: " Customer Focus"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 7
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 7
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.category,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeIcon"], {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.list_icon,
                  icon: ['fas', 'trophy']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.paragraph,
                  children: " Passion for Success"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 7
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 7
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.category,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeIcon"], {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.list_icon,
                  icon: ['fas', 'laptop']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.paragraph,
                  children: " Technical Knowledge"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 7
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 7
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.category,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeIcon"], {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.list_icon,
                  icon: ['fas', 'book']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.paragraph,
                  children: "  Integrity & Accountability"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 7
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 7
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.category,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeIcon"], {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.list_icon,
                  icon: ['fas', 'frown']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.paragraph,
                  children: "   Excellence in Service "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 7
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 7
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 5
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 12
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.padding,
          children: " OUR MANTRA "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.margin_10,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12___default.a.Body, {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.padding_10,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_13___default.a, {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.table,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.border_none,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
                        width: "60",
                        height: "60",
                        src: "/images/innovate.svg"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 135,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 9
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.border_none,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                        children: "INNOVATE"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 138,
                        columnNumber: 11
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.paragraph,
                        children: "Innovation is the ability to see change as an opportunity that unlocks new value. There is a way to do it better \u2013 we are finding it.s"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 139,
                        columnNumber: 11
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 9
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 5
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 5
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 3
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.margin_10,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12___default.a.Body, {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.padding_10,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_13___default.a, {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.table,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.border_none,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
                        width: "80",
                        height: "80",
                        src: "/images/implementation.svg"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 155,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 154,
                      columnNumber: 9
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.border_none,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                        children: "IMPLEMENT"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 158,
                        columnNumber: 11
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.paragraph,
                        children: "An Innovation idea needs the right implementation to find success. It is not just the action, but right action determines the product fate. We focus on the right way of building the product with the right technology."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 11
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 9
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 5
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 5
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 3
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.margin_10,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_12___default.a.Body, {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.padding_none,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_13___default.a, {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.table,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.border_none,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
                        width: "120",
                        height: "120",
                        src: "/images/iteration.svg"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 175,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 174,
                      columnNumber: 9
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.border_none,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                        children: "ITERATE"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 178,
                        columnNumber: 11
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.paragraph,
                        children: "Change is the only thing that is constant. A product that does not iterate has an expiry date tagged to it as soon as it comes out. Through an iterative process, we can keep the original focus, validating for current situations, helping us keep the ideas fresh and products competitive."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 179,
                        columnNumber: 11
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 177,
                      columnNumber: 9
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 5
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 5
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 3
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 1
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.clients,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.padding1,
          children: " OUR AMAZING CLIENTS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ClientSlide__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 3
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.section,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.padding,
          children: " OUR TECHNOLOGIES"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text_center,
          children: " WE TRUST IN LONG LASTING PARTNERSHIPS WITH THE MOST IMPORTANT BRANDS ON THE MARKET"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
          src: "/images/tech.png",
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.img_line,
          width: "2314",
          height: "718"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 3
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 3
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Card":
/*!***************************************!*\
  !*** external "react-bootstrap/Card" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Card");

/***/ }),

/***/ "react-bootstrap/Carousel":
/*!*******************************************!*\
  !*** external "react-bootstrap/Carousel" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Carousel");

/***/ }),

/***/ "react-bootstrap/Col":
/*!**************************************!*\
  !*** external "react-bootstrap/Col" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "react-bootstrap/ListGroup":
/*!********************************************!*\
  !*** external "react-bootstrap/ListGroup" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/ListGroup");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ "react-bootstrap/Table":
/*!****************************************!*\
  !*** external "react-bootstrap/Table" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Table");

/***/ }),

/***/ "react-elastic-carousel":
/*!*****************************************!*\
  !*** external "react-elastic-carousel" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-elastic-carousel");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NsaWVudFNsaWRlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9ob21lLm1kIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9JbmRleC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9MaXN0R3JvdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1lbGFzdGljLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ2xpZW50U2xpZGUiLCJDb21wb25lbnQiLCJpdGVtcyIsImlkIiwidGl0bGUiLCJyZW5kZXIiLCJzdGF0ZSIsIm1hcCIsIml0ZW0iLCJzdHlsZSIsImNvbCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibGlicmFyeSIsImFkZCIsImZhcyIsIkZvb3RlciIsInN0eWxlcyIsImZvb3RlciIsInRleHRfY2VudGVyIiwiZ3JheV9jb2xvciIsImZvb3RfdGl0bGUxIiwibGlzdCIsImZvb3RfbGlzdCIsInNpemUiLCJmb290X3RpdGxlIiwicm91bmQiLCJyb3VuZDEiLCJzb2NpYWwiLCJOYXZpZ2F0aW9uIiwic2hhZG93IiwibGVmdF9zaWRlIiwibmF2X2xpbmsiLCJTbGlkZSIsInNsaWRlIiwiZ2xvYmFsIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImRldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImxvYWRlciIsInBhdGgiLCJkb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJhIiwic2l6ZXMiLCJsYXlvdXQiLCJwZXJjZW50U2l6ZXMiLCJtIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIndpZHRocyIsInMiLCJraW5kIiwid2lkdGgiLCJ3IiwicCIsInNyY1NldCIsImdldFdpZHRocyIsImxhc3QiLCJzcmMiLCJpIiwibG9hZCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwiY29uZmlnTG9hZGVyIiwidW5vcHRpbWl6ZWQiLCJwcmlvcml0eSIsImFsbCIsInJlc3QiLCJ1bnNpemVkIiwiQm9vbGVhbiIsIkpTT04iLCJsb2FkaW5nIiwiaXNMYXp5Iiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid2lkdGhJbnQiLCJnZXRJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW1nU3R5bGUiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsImhlaWdodCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpc05hTiIsIndyYXBwZXJTdHlsZSIsIm92ZXJmbG93Iiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nQXR0cmlidXRlcyIsImdlbmVyYXRlSW1nQXR0cnMiLCJxdWFsaXR5IiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibm9ybWFsaXplU3JjIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImNvbnNvbGUiLCJjb25maWdEb21haW5zIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwic2V0UmVmIiwiZWwiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImNhbGxiYWNrIiwiSG9tZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNhdHMiLCJhdHRyaWJ1dGVzIiwic2VjdGlvbiIsImNhdCIsImsiLCJ0aHVtYiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxpZ2h0X2dyYXlfYmciLCJiYWNrZ3JvdW5kIiwiY2F0ZWdvcnkiLCJsaXN0X2ljb24iLCJwYXJhZ3JhcGgiLCJtYXJnaW5fMTAiLCJwYWRkaW5nXzEwIiwidGFibGUiLCJib3JkZXJfbm9uZSIsInBhZGRpbmdfbm9uZSIsImNsaWVudHMiLCJwYWRkaW5nMSIsImltZ19saW5lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBTixTQUEwQkMsK0NBQTFCLENBQW9DO0FBQUE7QUFBQTs7QUFBQSxtQ0FDMUI7QUFDTkMsV0FBSyxFQUFFLENBQ0w7QUFBQ0MsVUFBRSxFQUFFLENBQUw7QUFBUUMsYUFBSyxFQUFFO0FBQWYsT0FESyxFQUVMO0FBQUNELFVBQUUsRUFBRSxDQUFMO0FBQVFDLGFBQUssRUFBRTtBQUFmLE9BRkssRUFHTDtBQUFDRCxVQUFFLEVBQUUsQ0FBTDtBQUFRQyxhQUFLLEVBQUU7QUFBZixPQUhLLEVBSUw7QUFBQ0QsVUFBRSxFQUFFLENBQUw7QUFBUUMsYUFBSyxFQUFFO0FBQWYsT0FKSyxFQUtMO0FBQUNELFVBQUUsRUFBRSxDQUFMO0FBQVFDLGFBQUssRUFBRTtBQUFmLE9BTEssRUFNTDtBQUFDRCxVQUFFLEVBQUUsQ0FBTDtBQUFRQyxhQUFLLEVBQUU7QUFBZixPQU5LLEVBT0w7QUFBQ0QsVUFBRSxFQUFFLENBQUw7QUFBUUMsYUFBSyxFQUFFO0FBQWYsT0FQSyxFQVFMO0FBQUNELFVBQUUsRUFBRSxDQUFMO0FBQVFDLGFBQUssRUFBRTtBQUFmLE9BUkssRUFTTDtBQUFDRCxVQUFFLEVBQUUsQ0FBTDtBQUFRQyxhQUFLLEVBQUU7QUFBZixPQVRLLEVBVUw7QUFBQ0QsVUFBRSxFQUFFLEVBQUw7QUFBU0MsYUFBSyxFQUFFO0FBQWhCLE9BVks7QUFERCxLQUQwQjtBQUFBOztBQWdCbENDLFFBQU0sR0FBSTtBQUNSLFVBQU07QUFBRUg7QUFBRixRQUFZLEtBQUtJLEtBQXZCO0FBQ0Esd0JBQ0UscUVBQUMsNkRBQUQ7QUFBVSxtQkFBYSxFQUFFLENBQXpCO0FBQTRCLGlCQUFXLEVBQUUsQ0FBekM7QUFBNEMsb0JBQWMsTUFBMUQ7QUFBMkQsbUJBQWEsRUFBRSxJQUExRTtBQUFBLGdCQUNHSixLQUFLLENBQUNLLEdBQU4sQ0FBVUMsSUFBSSxpQkFBSTtBQUFBLGtCQUFvQkEsSUFBSSxDQUFDSjtBQUF6QixTQUFVSSxJQUFJLENBQUNMLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFsQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtEOztBQXZCaUM7O0FBMEJyQkgsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTVMsS0FBSyxHQUFHO0FBRVZDLEtBQUcsRUFBRTtBQUNEQyxlQUFXLEVBQUUsQ0FEWjtBQUVEQyxnQkFBWSxFQUFFO0FBRmI7QUFGSyxDQUFkLEMsQ0FPQTs7QUFFQUMseUVBQU8sQ0FBQ0MsR0FBUixDQUFZQyxzRUFBWjs7QUFNQSxTQUFTQyxNQUFULEdBQWlCO0FBQ2Isc0JBQ0k7QUFBQSwyQkFFRDtBQUFTLGVBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsTUFBM0I7QUFBQSw2QkFDQSxxRUFBQyxnRUFBRDtBQUFBLCtCQUNHLHFFQUFDLDBEQUFEO0FBQUEsa0NBQ04scUVBQUMsMERBQUQ7QUFBQSxvQ0FDQTtBQUFLLHVCQUFTLEVBQUVELDhEQUFNLENBQUNFLFdBQXZCO0FBQUEscUNBQ0oscUVBQUMsaURBQUQ7QUFBTyxtQkFBRyxFQUFDLDBCQUFYO0FBQXNDLHFCQUFLLEVBQUMsS0FBNUM7QUFBa0Qsc0JBQU0sRUFBQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEQSxlQUlBO0FBQUssdUJBQVMsRUFBRUYsOERBQU0sQ0FBQ0UsV0FBdkI7QUFBQSxxQ0FDSTtBQUFLLHlCQUFTLEVBQUVGLDhEQUFNLENBQUNHLFVBQXZCO0FBQUEsK0NBQXNDLHFFQUFDLDhFQUFEO0FBQWlCLHNCQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsVUFBUjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFETSxlQVNOLHFFQUFDLDBEQUFEO0FBQUEsb0NBQ0E7QUFBSyx1QkFBUyxFQUFFSCw4REFBTSxDQUFDSSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEQSxlQUVDO0FBQUksdUJBQVMsRUFBRUosOERBQU0sQ0FBQ0ssSUFBdEI7QUFBQSxzQ0FDSTtBQUFJLHlCQUFTLEVBQUVMLDhEQUFNLENBQUNNLFNBQXRCO0FBQUEsd0NBQ0EscUVBQUMsOEVBQUQ7QUFBaUIsMkJBQVMsRUFBRU4sOERBQU0sQ0FBQ08sSUFBbkM7QUFBeUMsc0JBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxlQUFSO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBSUk7QUFBSSx5QkFBUyxFQUFFUCw4REFBTSxDQUFDTSxTQUF0QjtBQUFBLHdDQUNBLHFFQUFDLDhFQUFEO0FBQWlCLDJCQUFTLEVBQUVOLDhEQUFNLENBQUNPLElBQW5DO0FBQXlDLHNCQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsZUFBUjtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKSixlQU9JO0FBQUkseUJBQVMsRUFBRVAsOERBQU0sQ0FBQ00sU0FBdEI7QUFBQSx3Q0FDQSxxRUFBQyw4RUFBRDtBQUFpQiwyQkFBUyxFQUFFTiw4REFBTSxDQUFDTyxJQUFuQztBQUF5QyxzQkFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLGVBQVI7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEosZUFVSTtBQUFJLHlCQUFTLEVBQUVQLDhEQUFNLENBQUNNLFNBQXRCO0FBQUEsd0NBQ0EscUVBQUMsOEVBQUQ7QUFBaUIsMkJBQVMsRUFBRU4sOERBQU0sQ0FBQ08sSUFBbkM7QUFBeUMsc0JBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxlQUFSO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVE0sZUE0Qk4scUVBQUMsMERBQUQ7QUFBQSxvQ0FDQTtBQUFLLHVCQUFTLEVBQUVQLDhEQUFNLENBQUNRLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURBLGVBRUYscUVBQUMsMERBQUQ7QUFBQSxzQ0FDSSxxRUFBQywwREFBRDtBQUFLLGtCQUFFLEVBQUUsQ0FBVDtBQUFZLHlCQUFTLEVBQUVoQixLQUFLLENBQUNDLEdBQTdCO0FBQUEsdUNBQ0E7QUFBSywyQkFBUyxFQUFFTyw4REFBTSxDQUFDRSxXQUF2QjtBQUFBLHlDQUNPLHFFQUFDLGlEQUFEO0FBQU8sNkJBQVMsRUFBRUYsOERBQU0sQ0FBQ1MsS0FBekI7QUFBZ0MsdUJBQUcsRUFBQyxzQkFBcEM7QUFBMkQseUJBQUssRUFBQyxJQUFqRTtBQUFzRSwwQkFBTSxFQUFDO0FBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQU1JLHFFQUFDLDBEQUFEO0FBQUssa0JBQUUsRUFBRSxDQUFUO0FBQVkseUJBQVMsRUFBRWpCLEtBQUssQ0FBQ0MsR0FBN0I7QUFBQSx1Q0FDQTtBQUFLLDJCQUFTLEVBQUVPLDhEQUFNLENBQUNFLFdBQXZCO0FBQUEseUNBQ08scUVBQUMsaURBQUQ7QUFBTyw2QkFBUyxFQUFFRiw4REFBTSxDQUFDUyxLQUF6QjtBQUFnQyx1QkFBRyxFQUFDLHNCQUFwQztBQUEyRCx5QkFBSyxFQUFDLElBQWpFO0FBQXNFLDBCQUFNLEVBQUM7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5KLGVBV0kscUVBQUMsMERBQUQ7QUFBSyxrQkFBRSxFQUFFLENBQVQ7QUFBWSx5QkFBUyxFQUFFakIsS0FBSyxDQUFDQyxHQUE3QjtBQUFBLHVDQUNBO0FBQUssMkJBQVMsRUFBRU8sOERBQU0sQ0FBQ0UsV0FBdkI7QUFBQSx5Q0FDTyxxRUFBQyxpREFBRDtBQUFPLDZCQUFTLEVBQUVGLDhEQUFNLENBQUNTLEtBQXpCO0FBQWdDLHVCQUFHLEVBQUMsc0JBQXBDO0FBQTJELHlCQUFLLEVBQUMsSUFBakU7QUFBc0UsMEJBQU0sRUFBQztBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWEosZUFnQkkscUVBQUMsMERBQUQ7QUFBSyxrQkFBRSxFQUFFLENBQVQ7QUFBWSx5QkFBUyxFQUFFakIsS0FBSyxDQUFDQyxHQUE3QjtBQUFBLHVDQUNBO0FBQUssMkJBQVMsRUFBRU8sOERBQU0sQ0FBQ0UsV0FBdkI7QUFBQSx5Q0FDTyxxRUFBQyxpREFBRDtBQUFPLDZCQUFTLEVBQUVGLDhEQUFNLENBQUNVLE1BQXpCO0FBQWlDLHVCQUFHLEVBQUMsc0JBQXJDO0FBQTRELHlCQUFLLEVBQUMsSUFBbEU7QUFBdUUsMEJBQU0sRUFBQztBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBNUJNLGVBcUROLHFFQUFDLDBEQUFEO0FBQUEsb0NBQ0E7QUFBSyx1QkFBUyxFQUFFViw4REFBTSxDQUFDUSxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEQSxlQUVBO0FBQUksdUJBQVMsRUFBRVIsOERBQU0sQ0FBQ1csTUFBdEI7QUFBQSxzQ0FDSTtBQUFBLHVDQUNHLHFFQUFDLGlEQUFEO0FBQU8scUJBQUcsRUFBQyw0QkFBWDtBQUF3Qyx1QkFBSyxFQUFDLElBQTlDO0FBQW1ELHdCQUFNLEVBQUM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFJSTtBQUFBLHVDQUNBLHFFQUFDLGlEQUFEO0FBQU8scUJBQUcsRUFBQyw0QkFBWDtBQUF3Qyx1QkFBSyxFQUFDLElBQTlDO0FBQW1ELHdCQUFNLEVBQUM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkosZUFPSTtBQUFBLHVDQUNBLHFFQUFDLGlEQUFEO0FBQU8scUJBQUcsRUFBQyw0QkFBWDtBQUF3Qyx1QkFBSyxFQUFDLElBQTlDO0FBQW1ELHdCQUFNLEVBQUM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyRE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUErRUg7O0FBRWNaLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFQSxTQUFTYSxVQUFULEdBQXFCO0FBQ2pCLHNCQUNJO0FBQUEsMkJBRUkscUVBQUMsNkRBQUQ7QUFBUSxRQUFFLEVBQUMsT0FBWDtBQUFtQixXQUFLLEVBQUMsS0FBekI7QUFBK0IsWUFBTSxFQUFDLElBQXRDO0FBQTJDLGVBQVMsRUFBRVosOERBQU0sQ0FBQ2EsTUFBN0Q7QUFBQSw2QkFDQTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNWLHFFQUFDLDZEQUFELENBQVEsS0FBUjtBQUFjLGNBQUksRUFBQyxPQUFuQjtBQUEyQixtQkFBUyxFQUFDLFVBQXJDO0FBQUEsaUNBRUUscUVBQUMsaURBQUQ7QUFBTyxlQUFHLEVBQUMsa0JBQVg7QUFBOEIsaUJBQUssRUFBQyxLQUFwQztBQUEwQyxrQkFBTSxFQUFDLElBQWpEO0FBQXNELGVBQUcsRUFBQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEVSxlQU1WLHFFQUFDLDZEQUFELENBQVEsTUFBUjtBQUFlLDJCQUFjO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTlUsZUFPVixxRUFBQyw2REFBRCxDQUFRLFFBQVI7QUFBaUIsWUFBRSxFQUFDLGtCQUFwQjtBQUF1QyxtQkFBUyxFQUFFYiw4REFBTSxDQUFDYyxTQUF6RDtBQUFBLGlDQUNFLHFFQUFDLDBEQUFEO0FBQUsscUJBQVMsRUFBQyxZQUFmO0FBQUEsb0NBQ0UscUVBQUMsMERBQUQsQ0FBSyxJQUFMO0FBQVUsa0JBQUksRUFBQyxPQUFmO0FBQXVCLHVCQUFTLEVBQUVkLDhEQUFNLENBQUNlLFFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUUscUVBQUMsMERBQUQsQ0FBSyxJQUFMO0FBQVUsa0JBQUksRUFBQyxRQUFmO0FBQXdCLHVCQUFTLEVBQUVmLDhEQUFNLENBQUNlLFFBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBR0UscUVBQUMsMERBQUQsQ0FBSyxJQUFMO0FBQVUsa0JBQUksRUFBQyxXQUFmO0FBQTJCLHVCQUFTLEVBQUVmLDhEQUFNLENBQUNlLFFBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGLGVBSUUscUVBQUMsMERBQUQsQ0FBSyxJQUFMO0FBQVUsa0JBQUksRUFBQyxXQUFmO0FBQTJCLHVCQUFTLEVBQUVmLDhEQUFNLENBQUNlLFFBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLGVBS0UscUVBQUMsMERBQUQsQ0FBSyxJQUFMO0FBQVUsa0JBQUksRUFBQyxVQUFmO0FBQTBCLHVCQUFTLEVBQUVmLDhEQUFNLENBQUNlLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGLGVBTUUscUVBQUMsMERBQUQsQ0FBSyxJQUFMO0FBQVUsa0JBQUksRUFBQyxVQUFmO0FBQTBCLHVCQUFTLEVBQUVmLDhEQUFNLENBQUNlLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUFU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTZCSDs7QUFFY0gseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0ksS0FBVCxHQUFnQjtBQUNkLHNCQUNJO0FBQUEsMkJBRU4scUVBQUMsK0RBQUQ7QUFBVSxVQUFJLE1BQWQ7QUFBZSxlQUFTLEVBQUVoQiw4REFBTSxDQUFDaUIsS0FBakM7QUFBQSw4QkFDRSxxRUFBQywrREFBRCxDQUFVLElBQVY7QUFBQSwrQkFNRSxxRUFBQyxpREFBRDtBQUFPLGFBQUcsRUFBQyxpQ0FBWDtBQUE2QyxnQkFBTSxFQUFDLFlBQXBEO0FBQWlFLGVBQUssRUFBQyxNQUF2RTtBQUE4RSxnQkFBTSxFQUFDO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFVRSxxRUFBQywrREFBRCxDQUFVLElBQVY7QUFBQSwrQkFDQSxxRUFBQyxpREFBRDtBQUFPLGFBQUcsRUFBQywwQkFBWDtBQUFzQyxnQkFBTSxFQUFDLFlBQTdDO0FBQTBELGVBQUssRUFBQyxNQUFoRTtBQUF1RSxnQkFBTSxFQUFDO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRk07QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0JEOztBQUVjRCxvRUFBZixFOzs7Ozs7Ozs7OztBQ2pDQSxjQUFjLG1CQUFPLENBQUMsb0JBQU87O0FBRTdCLGtCO0FBQ0EsbUJBQW1CLGtGQUFrRixzQ0FBc0MsRUFBRTs7QUFFN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxNOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUNBOztBQUNBOztBQUNBOztBQU1BOztBQUVBLFVBQW1DO0FBQ2pDO0FBQUVFLFFBQUQsc0JBQUNBLEdBQUQsSUFBQ0E7QUFHSjs7QUFBQSxNQUFNQyxvQkFBb0IsR0FBRyxrQkFBN0IsU0FBNkIsQ0FBN0I7QUFhQSxNQUFNQyxPQUFPLEdBQUcsUUFHZCxDQUNBLFVBREEsV0FDQSxDQURBLEVBRUEsZUFGQSxnQkFFQSxDQUZBLEVBR0EsV0FIQSxZQUdBLENBSEEsRUFJQSxZQVBGLGFBT0UsQ0FKQSxDQUhjLENBQWhCO0FBVUEsTUFBTUMsbUJBQW1CLEdBQUcsNkNBQTVCLFNBQTRCLENBQTVCO0FBc0NBLE1BQU07QUFDSkMsYUFBVyxFQURQO0FBRUpDLFlBQVUsRUFGTjtBQUdKQyxRQUFNLEVBSEY7QUFJSkMsTUFBSSxFQUpBO0FBS0pDLFNBQU8sRUFMSDtBQUFBLElBT0ZDLDBKQUF5REMsYUFQN0QsbUIsQ0FRQTs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQyxHQUFELG1CQUF1QixHQUF4QyxnQkFBaUIsQ0FBakI7QUFDQUMsaUJBQWlCLENBQWpCQSxLQUF1QixVQUFVQyxDQUFDLEdBQWxDRDtBQUNBRCxRQUFRLENBQVJBLEtBQWMsVUFBVUUsQ0FBQyxHQUF6QkY7O0FBRUEseUNBSXlDO0FBQ3ZDLE1BQUlHLEtBQUssS0FBS0MsTUFBTSxLQUFOQSxVQUFxQkEsTUFBTSxLQUF6QyxZQUFTLENBQVQsRUFBNkQ7QUFDM0Q7QUFDQSxVQUFNQyxZQUFZLEdBQUcsQ0FBQyxHQUFHRixLQUFLLENBQUxBLFNBQUosb0JBQUlBLENBQUosTUFBK0NHLENBQUQsSUFDakVDLFFBQVEsQ0FBQ0QsQ0FBQyxDQURaLENBQ1ksQ0FBRixDQURXLENBQXJCOztBQUdBLFFBQUlELFlBQVksQ0FBaEIsUUFBeUI7QUFDdkIsWUFBTUcsYUFBYSxHQUFHQyxJQUFJLENBQUpBLElBQVMsR0FBVEEsZ0JBQXRCO0FBQ0EsYUFBTztBQUNMQyxjQUFNLEVBQUVWLFFBQVEsQ0FBUkEsT0FDTFcsQ0FBRCxJQUFPQSxDQUFDLElBQUlWLGlCQUFpQixDQUFqQkEsQ0FBaUIsQ0FBakJBLEdBRlQsYUFDR0QsQ0FESDtBQUlMWSxZQUFJLEVBSk47QUFBTyxPQUFQO0FBT0Y7O0FBQUEsV0FBTztBQUFFRixZQUFNLEVBQVI7QUFBb0JFLFVBQUksRUFBL0I7QUFBTyxLQUFQO0FBRUY7O0FBQUEsTUFDRSw2QkFDQVIsTUFBTSxLQUROLFVBRUFBLE1BQU0sS0FIUixjQUlFO0FBQ0EsV0FBTztBQUFFTSxZQUFNLEVBQVI7QUFBNkJFLFVBQUksRUFBeEM7QUFBTyxLQUFQO0FBR0Y7O0FBQUEsUUFBTUYsTUFBTSxHQUFHLENBQ2IsR0FBRyxTQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFRRyxLQUFLLEdBQUc7QUFBaEI7QUFBQSxRQUNHQyxDQUFELElBQU9kLFFBQVEsQ0FBUkEsS0FBZWUsQ0FBRCxJQUFPQSxDQUFDLElBQXRCZixNQUFnQ0EsUUFBUSxDQUFDQSxRQUFRLENBQVJBLFNBWHRELENBV3FELENBRGpELENBVEMsQ0FEVSxDQUFmO0FBZUEsU0FBTztBQUFBO0FBQVVZLFFBQUksRUFBckI7QUFBTyxHQUFQO0FBbUJGOztBQUFBLDBCQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUEwQixDQUExQixFQVF1QztBQUNyQyxtQkFBaUI7QUFDZixXQUFPO0FBQUE7QUFBT0ksWUFBTSxFQUFiO0FBQTBCYixXQUFLLEVBQXRDO0FBQU8sS0FBUDtBQUdGOztBQUFBLFFBQU07QUFBQTtBQUFBO0FBQUEsTUFBbUJjLFNBQVMsZ0JBQWxDLEtBQWtDLENBQWxDO0FBQ0EsUUFBTUMsSUFBSSxHQUFHUixNQUFNLENBQU5BLFNBQWI7QUFFQSxTQUFPO0FBQ0xTLE9BQUcsRUFBRXhCLE1BQU0sQ0FBQztBQUFBO0FBQUE7QUFBZ0JrQixXQUFLLEVBQUVILE1BQU0sQ0FEcEMsSUFDb0M7QUFBN0IsS0FBRCxDQUROO0FBRUxQLFNBQUssRUFBRSxVQUFVUyxJQUFJLEtBQWQsZ0JBRkY7QUFHTEksVUFBTSxFQUFFTixNQUFNLENBQU5BLElBRUosVUFDRyxHQUFFZixNQUFNLENBQUM7QUFBQTtBQUFBO0FBQWdCa0IsV0FBSyxFQUF0QjtBQUFDLEtBQUQsQ0FBNkIsSUFDcENELElBQUksS0FBSkEsVUFBbUJRLENBQUMsR0FBRyxDQUN4QixHQUFFUixJQUxERixTQUhWLElBR1VBO0FBSEgsR0FBUDtBQWNGOztBQUFBLG1CQUFnRDtBQUM5QyxNQUFJLGFBQUosVUFBMkI7QUFDekI7QUFFRjs7QUFBQSxNQUFJLGFBQUosVUFBMkI7QUFDekIsV0FBT0gsUUFBUSxJQUFmLEVBQWUsQ0FBZjtBQUVGOztBQUFBO0FBR0Y7O0FBQUEseUNBQTJEO0FBQ3pELFFBQU1jLElBQUksR0FBRzlCLE9BQU8sQ0FBUEEsSUFBYixZQUFhQSxDQUFiOztBQUNBLFlBQVU7QUFDUixXQUFPOEIsSUFBSTtBQUFHQyxVQUFJLEVBQVA7QUFBQSxPQUFYLFdBQVcsRUFBWDtBQUVGOztBQUFBLFFBQU0sVUFDSCx5REFBd0RDLHFDQUV2RCxlQUFjQyxZQUhsQixFQUFNLENBQU47QUFPYTs7QUFBQSxxQkFjQTtBQUFBLE1BZGU7QUFBQTtBQUFBO0FBRzVCQyxlQUFXLEdBSGlCO0FBSTVCQyxZQUFRLEdBSm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZNUIvQixVQUFNLEdBWnNCO0FBQUEsTUFjZjtBQUFBLE1BRFZnQyxHQUNVO0FBQ2IsTUFBSUMsSUFBeUIsR0FBN0I7QUFDQSxNQUFJeEIsTUFBZ0MsR0FBR0QsS0FBSyxrQkFBNUM7QUFDQSxNQUFJMEIsT0FBTyxHQUFYOztBQUNBLE1BQUksYUFBSixNQUF1QjtBQUNyQkEsV0FBTyxHQUFHQyxPQUFPLENBQUNGLElBQUksQ0FBdEJDLE9BQWlCLENBQWpCQSxDQURxQixDQUVyQjs7QUFDQSxXQUFPRCxJQUFJLENBQVgsU0FBVyxDQUFYO0FBSEYsU0FJTyxJQUFJLFlBQUosTUFBc0I7QUFDM0I7QUFDQSxRQUFJQSxJQUFJLENBQVIsUUFBaUJ4QixNQUFNLEdBQUd3QixJQUFJLENBQWJ4QixPQUZVLENBSTNCOztBQUNBLFdBQU93QixJQUFJLENBQVgsUUFBVyxDQUFYO0FBR0Y7O0FBQUEsWUFBMkM7QUFDekMsUUFBSSxDQUFKLEtBQVU7QUFDUixZQUFNLFVBQ0gsMEhBQXlIRyxJQUFJLENBQUpBLFVBQ3hIO0FBQUE7QUFBQTtBQUR3SEE7QUFDeEgsT0FEd0hBLENBRDVILEVBQU0sQ0FBTjtBQU1GOztBQUFBLFFBQUksQ0FBQ3ZDLG1CQUFtQixDQUFuQkEsU0FBTCxNQUFLQSxDQUFMLEVBQTJDO0FBQ3pDLFlBQU0sVUFDSCxtQkFBa0IyQixHQUFJLDhDQUE2Q2YsTUFBTyxzQkFBcUJaLG1CQUFtQixDQUFuQkEscUJBRGxHLEdBQU0sQ0FBTjtBQU1GOztBQUFBLFFBQUksQ0FBQ0Ysb0JBQW9CLENBQXBCQSxTQUFMLE9BQUtBLENBQUwsRUFBNkM7QUFDM0MsWUFBTSxVQUNILG1CQUFrQjZCLEdBQUksK0NBQThDYSxPQUFRLHNCQUFxQjFDLG9CQUFvQixDQUFwQkEscUJBRHBHLEdBQU0sQ0FBTjtBQU1GOztBQUFBLFFBQUlvQyxRQUFRLElBQUlNLE9BQU8sS0FBdkIsUUFBb0M7QUFDbEMsWUFBTSxVQUNILG1CQUFrQmIsR0FEckIsaUZBQU0sQ0FBTjtBQUlGOztBQUFBLGlCQUFhO0FBQ1gsWUFBTSxVQUNILG1CQUFrQkEsR0FEckIsaUdBQU0sQ0FBTjtBQUlIO0FBRUQ7O0FBQUEsTUFBSWMsTUFBTSxHQUNSLGNBQWNELE9BQU8sS0FBUEEsVUFBc0IsbUJBRHRDLFdBQ0UsQ0FERjs7QUFFQSxNQUFJYixHQUFHLElBQUlBLEdBQUcsQ0FBSEEsV0FBWCxPQUFXQSxDQUFYLEVBQW9DO0FBQ2xDO0FBQ0FNLGVBQVcsR0FBWEE7QUFDQVEsVUFBTSxHQUFOQTtBQUdGOztBQUFBLFFBQU0sMEJBQTBCLHNDQUFrQztBQUNoRUMsY0FBVSxFQURzRDtBQUVoRUMsWUFBUSxFQUFFLENBRlo7QUFBa0UsR0FBbEMsQ0FBaEM7QUFJQSxRQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFFQSxRQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBdkIsS0FBdUIsQ0FBdkI7QUFDQSxRQUFNQyxTQUFTLEdBQUdELE1BQU0sQ0FBeEIsTUFBd0IsQ0FBeEI7QUFDQSxRQUFNRSxVQUFVLEdBQUdGLE1BQU0sQ0FBekIsT0FBeUIsQ0FBekI7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFJRyxRQUFxQyxHQUFHO0FBQzFDQyxjQUFVLEVBQUVOLFNBQVMsZUFEcUI7QUFHMUNPLFlBQVEsRUFIa0M7QUFJMUNDLE9BQUcsRUFKdUM7QUFLMUNDLFFBQUksRUFMc0M7QUFNMUNDLFVBQU0sRUFOb0M7QUFPMUNDLFNBQUssRUFQcUM7QUFTMUNDLGFBQVMsRUFUaUM7QUFVMUNDLFdBQU8sRUFWbUM7QUFXMUNDLFVBQU0sRUFYb0M7QUFZMUNDLFVBQU0sRUFab0M7QUFjMUNDLFdBQU8sRUFkbUM7QUFlMUN2QyxTQUFLLEVBZnFDO0FBZ0IxQ3dDLFVBQU0sRUFoQm9DO0FBaUIxQ0MsWUFBUSxFQWpCa0M7QUFrQjFDQyxZQUFRLEVBbEJrQztBQW1CMUNDLGFBQVMsRUFuQmlDO0FBb0IxQ0MsYUFBUyxFQXBCaUM7QUFBQTtBQUE1QztBQUE0QyxHQUE1Qzs7QUF5QkEsTUFDRSxtQ0FDQSxxQkFEQSxlQUVBckQsTUFBTSxLQUhSLFFBSUU7QUFDQTtBQUNBLFVBQU1zRCxRQUFRLEdBQUduQixTQUFTLEdBQTFCO0FBQ0EsVUFBTW9CLFVBQVUsR0FBR0MsS0FBSyxDQUFMQSxRQUFLLENBQUxBLFlBQTRCLEdBQUVGLFFBQVEsR0FBRyxHQUE1RDs7QUFDQSxRQUFJdEQsTUFBTSxLQUFWLGNBQTZCO0FBQzNCO0FBQ0F5RCxrQkFBWSxHQUFHO0FBQ2JULGVBQU8sRUFETTtBQUViVSxnQkFBUSxFQUZLO0FBR2JuQixnQkFBUSxFQUhLO0FBS2JLLGlCQUFTLEVBTEk7QUFNYkcsY0FBTSxFQU5SVTtBQUFlLE9BQWZBO0FBUUFFLGdCQUFVLEdBQUc7QUFBRVgsZUFBTyxFQUFUO0FBQW9CSixpQkFBUyxFQUE3QjtBQUFiZTtBQUFhLE9BQWJBO0FBVkYsV0FXTyxJQUFJM0QsTUFBTSxLQUFWLGFBQTRCO0FBQ2pDO0FBQ0F5RCxrQkFBWSxHQUFHO0FBQ2JULGVBQU8sRUFETTtBQUViRyxnQkFBUSxFQUZLO0FBR2JPLGdCQUFRLEVBSEs7QUFJYm5CLGdCQUFRLEVBSks7QUFLYkssaUJBQVMsRUFMSTtBQU1iRyxjQUFNLEVBTlJVO0FBQWUsT0FBZkE7QUFRQUUsZ0JBQVUsR0FBRztBQUNYZixpQkFBUyxFQURFO0FBRVhJLGVBQU8sRUFGSTtBQUdYRyxnQkFBUSxFQUhWUTtBQUFhLE9BQWJBO0FBS0FDLGNBQVEsR0FBSSxlQUFjM0IsUUFBUyxhQUFZRSxTQUEvQ3lCO0FBZkssV0FnQkEsSUFBSTVELE1BQU0sS0FBVixTQUF3QjtBQUM3QjtBQUNBeUQsa0JBQVksR0FBRztBQUNiQyxnQkFBUSxFQURLO0FBRWJkLGlCQUFTLEVBRkk7QUFHYkksZUFBTyxFQUhNO0FBSWJULGdCQUFRLEVBSks7QUFLYjlCLGFBQUssRUFMUTtBQU1id0MsY0FBTSxFQU5SUTtBQUFlLE9BQWZBO0FBU0g7QUE5Q0QsU0E4Q08sSUFDTCxtQ0FDQSxxQkFEQSxlQUVBekQsTUFBTSxLQUhELFFBSUw7QUFDQTtBQUNBeUQsZ0JBQVksR0FBRztBQUNiVCxhQUFPLEVBRE07QUFFYlUsY0FBUSxFQUZLO0FBSWJuQixjQUFRLEVBSks7QUFLYkMsU0FBRyxFQUxVO0FBTWJDLFVBQUksRUFOUztBQU9iQyxZQUFNLEVBUE87QUFRYkMsV0FBSyxFQVJRO0FBVWJDLGVBQVMsRUFWSTtBQVdiRyxZQUFNLEVBWFJVO0FBQWUsS0FBZkE7QUFOSyxTQW1CQTtBQUNMO0FBQ0EsY0FBMkM7QUFDekMsWUFBTSxVQUNILG1CQUFrQjFDLEdBRHJCLHlFQUFNLENBQU47QUFJSDtBQUVEOztBQUFBLE1BQUk4QyxhQUFnQyxHQUFHO0FBQ3JDOUMsT0FBRyxFQURrQztBQUdyQ0gsVUFBTSxFQUgrQjtBQUlyQ2IsU0FBSyxFQUpQO0FBQXVDLEdBQXZDOztBQU9BLGlCQUFlO0FBQ2I4RCxpQkFBYSxHQUFHQyxnQkFBZ0IsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUkvQnJELFdBQUssRUFKMEI7QUFLL0JzRCxhQUFPLEVBTHdCO0FBQUE7QUFBakNGO0FBQWlDLEtBQUQsQ0FBaENBO0FBV0Y7O0FBQUEsZUFBYTtBQUNYSixnQkFBWSxHQUFaQTtBQUNBRSxjQUFVLEdBQVZBO0FBQ0F0QixZQUFRLEdBQVJBO0FBRUY7O0FBQUEsc0JBQ0U7QUFBSyxTQUFLLEVBQVY7QUFBQSxLQUNHc0IsVUFBVSxnQkFDVDtBQUFLLFNBQUssRUFBVjtBQUFBLEtBQ0dDLFFBQVEsZ0JBQ1A7QUFDRSxTQUFLLEVBQUU7QUFDTFQsY0FBUSxFQURIO0FBRUxILGFBQU8sRUFGRjtBQUdMRCxZQUFNLEVBSEQ7QUFJTEQsWUFBTSxFQUpEO0FBS0xELGFBQU8sRUFOWDtBQUNTLEtBRFQ7QUFRRSxPQUFHLEVBUkw7QUFTRSxtQkFURjtBQVVFLFFBQUksRUFWTjtBQVdFLE9BQUcsRUFBRyw2QkFBNEIsK0JBWjdCO0FBQ1AsSUFETyxHQUZGLElBQ1QsQ0FEUyxHQURiLG1CQW9CRTtBQUdFLFlBQVEsRUFIVjtBQUlFLGFBQVMsRUFKWDtBQUtFLE9BQUcsRUFMTDtBQU1FLFNBQUssRUExQlQ7QUFvQkUsS0FwQkYsRUE0Qkd2QixRQUFRO0FBQUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQUMsTUFBRCw0QkFDRTtBQUNFLE9BQUcsRUFDRCxZQUNBdUMsYUFBYSxDQURiLE1BRUFBLGFBQWEsQ0FGYixTQUdBQSxhQUFhLENBTGpCO0FBT0UsT0FBRyxFQVBMO0FBUUUsTUFBRSxFQVJKO0FBU0UsUUFBSSxFQUFFQSxhQUFhLENBQWJBLHFCQUFtQ0EsYUFBYSxDQUFDOUMsR0FUekQsQ0FVRTtBQVZGO0FBV0UsZUFBVyxFQUFFOEMsYUFBYSxDQUFDakQsTUFYN0IsQ0FZRTtBQVpGO0FBYUUsY0FBVSxFQUFFaUQsYUFBYSxDQXBCdEI7QUFPTCxJQURGLENBTk8sR0E3QmIsSUFDRSxDQURGO0FBeURGLEMsQ0FBQTs7O0FBRUEsMkJBQTJDO0FBQ3pDLFNBQU85QyxHQUFHLENBQUhBLENBQUcsQ0FBSEEsV0FBaUJBLEdBQUcsQ0FBSEEsTUFBakJBLENBQWlCQSxDQUFqQkEsR0FBUDtBQUdGOztBQUFBLHFCQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFyQjtBQUFxQixDQUFyQixFQUtvQztBQUNsQztBQUNBLFFBQU1pRCxNQUFNLEdBQUcsMkJBQTJCLE9BQTFDLEtBQWUsQ0FBZjtBQUNBLE1BQUlDLFlBQVksR0FBaEI7O0FBQ0EsZUFBYTtBQUNYRCxVQUFNLENBQU5BLEtBQVksT0FBWkE7QUFHRjs7QUFBQSxNQUFJQSxNQUFNLENBQVYsUUFBbUI7QUFDakJDLGdCQUFZLEdBQUcsTUFBTUQsTUFBTSxDQUFOQSxLQUFyQkMsR0FBcUJELENBQXJCQztBQUVGOztBQUFBLFNBQVEsR0FBRS9DLElBQUssR0FBRWdELFlBQVksS0FBTSxHQUFFRCxZQUFyQztBQUdGOztBQUFBLHNCQUFzQjtBQUFBO0FBQUE7QUFBdEI7QUFBc0IsQ0FBdEIsRUFBNkU7QUFDM0UsU0FBUSxHQUFFL0MsSUFBSyxHQUFFZ0QsWUFBWSxLQUFNLFlBQVd6RCxLQUE5QztBQUdGOztBQUFBLDBCQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUEwQixDQUExQixFQUtvQztBQUNsQztBQUNBLFFBQU11RCxNQUFNLEdBQUcsc0JBQXNCLE9BQXRCLE9BQW9DLFFBQVFELE9BQU8sSUFBbEUsTUFBbUQsQ0FBcEMsQ0FBZjtBQUNBLE1BQUlFLFlBQVksR0FBR0QsTUFBTSxDQUFOQSxZQUFuQjtBQUNBLFNBQVEsR0FBRTlDLElBQUssR0FBRStDLFlBQWEsR0FBRUMsWUFBWSxLQUE1QztBQUdGOztBQUFBLHVCQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUF2QjtBQUF1QixDQUF2QixFQUtvQztBQUNsQyxZQUEyQztBQUN6QyxVQUFNQyxhQUFhLEdBQW5CLEdBRHlDLENBR3pDOztBQUNBLFFBQUksQ0FBSixLQUFVQSxhQUFhLENBQWJBO0FBQ1YsUUFBSSxDQUFKLE9BQVlBLGFBQWEsQ0FBYkE7O0FBRVosUUFBSUEsYUFBYSxDQUFiQSxTQUFKLEdBQThCO0FBQzVCLFlBQU0sVUFDSCxvQ0FBbUNBLGFBQWEsQ0FBYkEsVUFFbEMsZ0dBQStGeEMsSUFBSSxDQUFKQSxVQUMvRjtBQUFBO0FBQUE7QUFEK0ZBO0FBQy9GLE9BRCtGQSxDQUhuRyxFQUFNLENBQU47QUFTRjs7QUFBQSxRQUFJWixHQUFHLENBQUhBLFdBQUosSUFBSUEsQ0FBSixFQUEwQjtBQUN4QixZQUFNLFVBQ0gsd0JBQXVCQSxHQUQxQiwwR0FBTSxDQUFOO0FBS0Y7O0FBQUEsUUFBSSxDQUFDQSxHQUFHLENBQUhBLFdBQUQsR0FBQ0EsQ0FBRCxJQUFKLGVBQTJDO0FBQ3pDOztBQUNBLFVBQUk7QUFDRnFELGlCQUFTLEdBQUcsUUFBWkEsR0FBWSxDQUFaQTtBQUNBLE9BRkYsQ0FFRSxZQUFZO0FBQ1pDLGVBQU8sQ0FBUEE7QUFDQSxjQUFNLFVBQ0gsd0JBQXVCdEQsR0FEMUIsaUlBQU0sQ0FBTjtBQUtGOztBQUFBLFVBQUksQ0FBQ3VELGFBQWEsQ0FBYkEsU0FBdUJGLFNBQVMsQ0FBckMsUUFBS0UsQ0FBTCxFQUFpRDtBQUMvQyxjQUFNLFVBQ0gscUJBQW9CdkQsR0FBSSxrQ0FBaUNxRCxTQUFTLENBQUNHLFFBQXBFLCtEQUFDLEdBREgsb0VBQU0sQ0FBTjtBQUtIO0FBQ0Y7QUFFRDs7QUFBQSxTQUFRLEdBQUVyRCxJQUFLLFFBQU9zRCxrQkFBa0IsS0FBTSxNQUFLL0QsS0FBTSxNQUFLc0QsT0FBTyxJQUFJLEVBQXpFO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3aEJNLE1BQU1VLG1CQUFtQixHQUM3QiwrQkFBK0JDLElBQUksQ0FBcEMsbUJBQUMsSUFDRCxjQUVrQjtBQUNoQixNQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBaEIsR0FBWUEsRUFBWjtBQUNBLFNBQU9DLFVBQVUsQ0FBQyxZQUFZO0FBQzVCQyxNQUFFLENBQUM7QUFDREMsZ0JBQVUsRUFEVDtBQUVEQyxtQkFBYSxFQUFFLFlBQVk7QUFDekIsZUFBTzNFLElBQUksQ0FBSkEsT0FBWSxNQUFNdUUsSUFBSSxDQUFKQSxRQUF6QixLQUFtQixDQUFadkUsQ0FBUDtBQUhKeUU7QUFBRyxLQUFELENBQUZBO0FBRGUsS0FBakIsQ0FBaUIsQ0FBakI7QUFORzs7OztBQWdCQSxNQUFNRyxrQkFBa0IsR0FDNUIsK0JBQStCUCxJQUFJLENBQXBDLGtCQUFDLElBQ0QsY0FBeUM7QUFDdkMsU0FBT1EsWUFBWSxDQUFuQixFQUFtQixDQUFuQjtBQUhHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNQOztBQUNBOztBQWNBLE1BQU1DLHVCQUF1QixHQUFHLGdDQUFoQzs7QUFFTyx5QkFBNEM7QUFBQTtBQUE1QztBQUE0QyxDQUE1QyxFQUdxRDtBQUMxRCxRQUFNQyxVQUFtQixHQUFHckQsUUFBUSxJQUFJLENBQXhDO0FBRUEsUUFBTXNELFNBQVMsR0FBRyxXQUFsQixNQUFrQixHQUFsQjtBQUNBLFFBQU0sd0JBQXdCLHFCQUE5QixLQUE4QixDQUE5QjtBQUVBLFFBQU1DLE1BQU0sR0FBRyx3QkFDWkMsRUFBRCxJQUFrQjtBQUNoQixRQUFJRixTQUFTLENBQWIsU0FBdUI7QUFDckJBLGVBQVMsQ0FBVEE7QUFDQUEsZUFBUyxDQUFUQTtBQUdGOztBQUFBLFFBQUlELFVBQVUsSUFBZCxTQUEyQjs7QUFFM0IsUUFBSUcsRUFBRSxJQUFJQSxFQUFFLENBQVosU0FBc0I7QUFDcEJGLGVBQVMsQ0FBVEEsVUFBb0JHLE9BQU8sS0FFeEJ4RCxTQUFELElBQWVBLFNBQVMsSUFBSXlELFVBQVUsQ0FGYixTQUVhLENBRmIsRUFHekI7QUFIRko7QUFHRSxPQUh5QixDQUEzQkE7QUFNSDtBQWhCWSxLQWlCYix5QkFqQkYsT0FpQkUsQ0FqQmEsQ0FBZjtBQW9CQSx3QkFBVSxNQUFNO0FBQ2QsUUFBSSxDQUFKLHlCQUE4QjtBQUM1QixVQUFJLENBQUosU0FBYztBQUNaLGNBQU1LLFlBQVksR0FBRyw4Q0FBb0IsTUFBTUQsVUFBVSxDQUF6RCxJQUF5RCxDQUFwQyxDQUFyQjtBQUNBLGVBQU8sTUFBTSw2Q0FBYixZQUFhLENBQWI7QUFFSDtBQUNGO0FBUEQsS0FPRyxDQVBILE9BT0csQ0FQSDtBQVNBLFNBQU8sU0FBUCxPQUFPLENBQVA7QUFHRjs7QUFBQSw2Q0FJYztBQUNaLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE2QkUsY0FBYyxDQUFqRCxPQUFpRCxDQUFqRDtBQUNBQyxVQUFRLENBQVJBO0FBRUFDLFVBQVEsQ0FBUkE7QUFDQSxTQUFPLHFCQUEyQjtBQUNoQ0QsWUFBUSxDQUFSQTtBQUNBQyxZQUFRLENBQVJBLG1CQUZnQyxDQUloQzs7QUFDQSxRQUFJRCxRQUFRLENBQVJBLFNBQUosR0FBeUI7QUFDdkJDLGNBQVEsQ0FBUkE7QUFDQUMsZUFBUyxDQUFUQTtBQUVIO0FBVEQ7QUFZRjs7QUFBQSxNQUFNQSxTQUFTLEdBQUcsSUFBbEIsR0FBa0IsRUFBbEI7O0FBQ0EsaUNBQXdFO0FBQ3RFLFFBQU03SSxFQUFFLEdBQUc4SSxPQUFPLENBQVBBLGNBQVg7QUFDQSxNQUFJQyxRQUFRLEdBQUdGLFNBQVMsQ0FBVEEsSUFBZixFQUFlQSxDQUFmOztBQUNBLGdCQUFjO0FBQ1o7QUFHRjs7QUFBQSxRQUFNRixRQUFRLEdBQUcsSUFBakIsR0FBaUIsRUFBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUcseUJBQTBCSSxPQUFELElBQWE7QUFDckRBLFdBQU8sQ0FBUEEsUUFBaUJDLEtBQUQsSUFBVztBQUN6QixZQUFNQyxRQUFRLEdBQUdQLFFBQVEsQ0FBUkEsSUFBYU0sS0FBSyxDQUFuQyxNQUFpQk4sQ0FBakI7QUFDQSxZQUFNNUQsU0FBUyxHQUFHa0UsS0FBSyxDQUFMQSxrQkFBd0JBLEtBQUssQ0FBTEEsb0JBQTFDOztBQUNBLFVBQUlDLFFBQVEsSUFBWixXQUEyQjtBQUN6QkEsZ0JBQVEsQ0FBUkEsU0FBUSxDQUFSQTtBQUVIO0FBTkRGO0FBRGUsS0FBakIsT0FBaUIsQ0FBakI7QUFVQUgsV0FBUyxDQUFUQSxRQUVHRSxRQUFRLEdBQUc7QUFBQTtBQUFBO0FBRmRGO0FBRWMsR0FGZEE7QUFRQTtBQUNELEM7Ozs7Ozs7Ozs7O0FDM0dELGlCQUFpQixtQkFBTyxDQUFDLHFFQUFxQjs7Ozs7Ozs7Ozs7O0FDQTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBQ0E7QUFDQTtDQUtBOztBQUVBbkksMEVBQU8sQ0FBQ0MsR0FBUixDQUFZQyxzRUFBWjtBQUdlLFNBQVN1SSxJQUFULEdBQWdCO0FBQzdCLFFBQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7QUFDQSxNQUFJO0FBQUVwSixTQUFGO0FBQVNxSjtBQUFULE1BQWtCQywyREFBdEI7QUFDQSxzQkFBTztBQUFBLDRCQUNKLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0s7QUFBUSxXQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURJLGVBSUQscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpDLGVBS0QscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxDLGVBTUQ7QUFBUyxlQUFTLEVBQUV6SSx3REFBTSxDQUFDMEksT0FBM0I7QUFBQSw4QkFFRDtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLCtCQUNQO0FBQUksbUJBQVMsRUFBRTFJLHdEQUFNLENBQUM4RSxPQUF0QjtBQUFBLG9CQUFrQzNGO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkMsZUFNRCxxRUFBQyxnRUFBRDtBQUFBLGdDQUNBLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFFQSxxRUFBQywwREFBRDtBQUFBLG9CQUNDcUosSUFBSSxDQUFDbEosR0FBTCxDQUFTLENBQUNxSixHQUFELEVBQU1DLENBQU4sa0JBRWIscUVBQUMsMERBQUQ7QUFBSyxjQUFFLEVBQUUsQ0FBVDtBQUFZLGNBQUUsRUFBRSxDQUFoQjtBQUFBLG1DQUNZO0FBQVMsdUJBQVMsRUFBRTVJLHdEQUFNLENBQUM2SSxLQUEzQjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxtQkFBZjtBQUFBLHdDQUNFLHFFQUFDLGlEQUFEO0FBQU8scUJBQUcsRUFBQywrQkFBWDtBQUEyQyxxQkFBRyxFQUFDLHlDQUEvQztBQUF5Rix1QkFBSyxFQUFDLEtBQS9GO0FBQXFHLHdCQUFNLEVBQUMsS0FBNUc7QUFBa0gscUJBQUcsRUFBQztBQUF0SDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBRUk7QUFBSywyQkFBUyxFQUFDLFlBQWY7QUFBQSw0QkFBNkJGLEdBQUcsQ0FBQ0c7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSixlQUdJO0FBQUksMkJBQVMsRUFBQyxrQkFBZDtBQUFBLGtDQUFtQ0gsR0FBRyxDQUFDSSxXQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBTU0scUVBQUMsOERBQUQ7QUFBUSx1QkFBTyxFQUFDLFNBQWhCO0FBQTBCLG9CQUFJLEVBQUMsSUFBL0I7QUFBQSxrRUFHQSxxRUFBQywrRUFBRDtBQUFpQixzQkFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLHNCQUFSO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURaLGFBQXdCSCxDQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZJO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOQyxlQTRDVDtBQUFTLGVBQVMsRUFBRTVJLHdEQUFNLENBQUNnSixhQUEzQjtBQUFBLDhCQUdFLHFFQUFDLGdFQUFEO0FBQUEsZ0NBQ0E7QUFBSSxtQkFBUyxFQUFFaEosd0RBQU0sQ0FBQzhFLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBR0U7QUFBSyxtQkFBUyxFQUFFOUUsd0RBQU0sQ0FBQ0UsV0FBdkI7QUFBQSxpQ0FDQSxxRUFBQyxpRUFBRDtBQUFXLHNCQUFVLE1BQXJCO0FBQXNCLGlCQUFLLEVBQUU7QUFBRStJLHdCQUFVLEVBQUU7QUFBZCxhQUE3QjtBQUFBLG9DQUVBLHFFQUFDLGlFQUFELENBQVcsSUFBWDtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBRWpKLHdEQUFNLENBQUNrSixRQUF2QjtBQUFBLHdDQUNBLHFFQUFDLCtFQUFEO0FBQWlCLDJCQUFTLEVBQUVsSix3REFBTSxDQUFDbUosU0FBbkM7QUFBOEMsc0JBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxVQUFSO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREEsZUFFQTtBQUFHLDJCQUFTLEVBQUVuSix3REFBTSxDQUFDb0osU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGQSxlQVNBLHFFQUFDLGlFQUFELENBQVcsSUFBWDtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBRXBKLHdEQUFNLENBQUNrSixRQUF2QjtBQUFBLHdDQUNBLHFFQUFDLCtFQUFEO0FBQWlCLDJCQUFTLEVBQUVsSix3REFBTSxDQUFDbUosU0FBbkM7QUFBOEMsc0JBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxRQUFSO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREEsZUFFQTtBQUFHLDJCQUFTLEVBQUVuSix3REFBTSxDQUFDb0osU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFUQSxlQWlCQSxxRUFBQyxpRUFBRCxDQUFXLElBQVg7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUVwSix3REFBTSxDQUFDa0osUUFBdkI7QUFBQSx3Q0FDQSxxRUFBQywrRUFBRDtBQUFpQiwyQkFBUyxFQUFFbEosd0RBQU0sQ0FBQ21KLFNBQW5DO0FBQThDLHNCQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsUUFBUjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURBLGVBRUE7QUFBRywyQkFBUyxFQUFFbkosd0RBQU0sQ0FBQ29KLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBakJBLGVBd0JBLHFFQUFDLGlFQUFELENBQVcsSUFBWDtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBRXBKLHdEQUFNLENBQUNrSixRQUF2QjtBQUFBLHdDQUNBLHFFQUFDLCtFQUFEO0FBQWlCLDJCQUFTLEVBQUVsSix3REFBTSxDQUFDbUosU0FBbkM7QUFBOEMsc0JBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREEsZUFFQTtBQUFHLDJCQUFTLEVBQUVuSix3REFBTSxDQUFDb0osU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF4QkEsZUErQkEscUVBQUMsaUVBQUQsQ0FBVyxJQUFYO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFFcEosd0RBQU0sQ0FBQ2tKLFFBQXZCO0FBQUEsd0NBQ0EscUVBQUMsK0VBQUQ7QUFBaUIsMkJBQVMsRUFBRWxKLHdEQUFNLENBQUNtSixTQUFuQztBQUE4QyxzQkFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLE9BQVI7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEQSxlQUVBO0FBQUcsMkJBQVMsRUFBRW5KLHdEQUFNLENBQUNvSixTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQS9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBNkNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0NBLGVBNkNTO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0NULGVBOENFO0FBQUksbUJBQVMsRUFBRXBKLHdEQUFNLENBQUM4RSxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5Q0YsZUErQ0EscUVBQUMsMERBQUQ7QUFBQSxrQ0FDQSxxRUFBQyw0REFBRDtBQUFNLHFCQUFTLEVBQUU5RSx3REFBTSxDQUFDcUosU0FBeEI7QUFBQSxtQ0FDRSxxRUFBQyw0REFBRCxDQUFNLElBQU47QUFBVyx1QkFBUyxFQUFFckosd0RBQU0sQ0FBQ3NKLFVBQTdCO0FBQUEscUNBQ0EscUVBQUMsNkRBQUQ7QUFBTyx5QkFBUyxFQUFFdEosd0RBQU0sQ0FBQ3VKLEtBQXpCO0FBQUEsdUNBQ0E7QUFBQSx5Q0FDRTtBQUFBLDRDQUNFO0FBQUksK0JBQVMsRUFBRXZKLHdEQUFNLENBQUN3SixXQUF0QjtBQUFBLDZDQUNFLHFFQUFDLGlEQUFEO0FBQU8sNkJBQUssRUFBQyxJQUFiO0FBQWtCLDhCQUFNLEVBQUMsSUFBekI7QUFBOEIsMkJBQUcsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixlQUlFO0FBQUksK0JBQVMsRUFBRXhKLHdEQUFNLENBQUN3SixXQUF0QjtBQUFBLDhDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLGVBRUU7QUFBRyxpQ0FBUyxFQUFFeEosd0RBQU0sQ0FBQ29KLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGVBcUJBLHFFQUFDLDREQUFEO0FBQU0scUJBQVMsRUFBRXBKLHdEQUFNLENBQUNxSixTQUF4QjtBQUFBLG1DQUNFLHFFQUFDLDREQUFELENBQU0sSUFBTjtBQUFXLHVCQUFTLEVBQUVySix3REFBTSxDQUFDc0osVUFBN0I7QUFBQSxxQ0FDQSxxRUFBQyw2REFBRDtBQUFPLHlCQUFTLEVBQUV0Six3REFBTSxDQUFDdUosS0FBekI7QUFBQSx1Q0FDQTtBQUFBLHlDQUNFO0FBQUEsNENBQ0U7QUFBSSwrQkFBUyxFQUFFdkosd0RBQU0sQ0FBQ3dKLFdBQXRCO0FBQUEsNkNBQ0UscUVBQUMsaURBQUQ7QUFBTyw2QkFBSyxFQUFDLElBQWI7QUFBa0IsOEJBQU0sRUFBQyxJQUF6QjtBQUE4QiwyQkFBRyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLGVBSUU7QUFBSSwrQkFBUyxFQUFFeEosd0RBQU0sQ0FBQ3dKLFdBQXRCO0FBQUEsOENBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsZUFFRTtBQUFHLGlDQUFTLEVBQUV4Six3REFBTSxDQUFDb0osU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBckJBLGVBeUNBLHFFQUFDLDREQUFEO0FBQU0scUJBQVMsRUFBRXBKLHdEQUFNLENBQUNxSixTQUF4QjtBQUFBLG1DQUNFLHFFQUFDLDREQUFELENBQU0sSUFBTjtBQUFXLHVCQUFTLEVBQUVySix3REFBTSxDQUFDeUosWUFBN0I7QUFBQSxxQ0FDQSxxRUFBQyw2REFBRDtBQUFPLHlCQUFTLEVBQUV6Six3REFBTSxDQUFDdUosS0FBekI7QUFBQSx1Q0FDQTtBQUFBLHlDQUNFO0FBQUEsNENBQ0U7QUFBSSwrQkFBUyxFQUFFdkosd0RBQU0sQ0FBQ3dKLFdBQXRCO0FBQUEsNkNBQ0UscUVBQUMsaURBQUQ7QUFBTyw2QkFBSyxFQUFDLEtBQWI7QUFBbUIsOEJBQU0sRUFBQyxLQUExQjtBQUFnQywyQkFBRyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLGVBSUU7QUFBSSwrQkFBUyxFQUFFeEosd0RBQU0sQ0FBQ3dKLFdBQXRCO0FBQUEsOENBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsZUFFRTtBQUFHLGlDQUFTLEVBQUV4Six3REFBTSxDQUFDb0osU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBekNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFrSEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxIRixlQW1IRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVDUyxlQW1LUDtBQUFTLGVBQVMsRUFBRXBKLHdEQUFNLENBQUMwSixPQUEzQjtBQUFBLDZCQUVBLHFFQUFDLGdFQUFEO0FBQUEsZ0NBQ0E7QUFBSSxtQkFBUyxFQUFFMUosd0RBQU0sQ0FBQzJKLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBR0EscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbktPLGVBNktQO0FBQVMsZUFBUyxFQUFFM0osd0RBQU0sQ0FBQzBJLE9BQTNCO0FBQUEsNkJBQ0EscUVBQUMsZ0VBQUQ7QUFBQSxnQ0FDQTtBQUFJLG1CQUFTLEVBQUUxSSx3REFBTSxDQUFDOEUsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFJQTtBQUFHLG1CQUFTLEVBQUU5RSx3REFBTSxDQUFDRSxXQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKQSxlQU9BLHFFQUFDLGlEQUFEO0FBQU8sYUFBRyxFQUFDLGtCQUFYO0FBQThCLG1CQUFTLEVBQUVGLHdEQUFNLENBQUM0SixRQUFoRDtBQUEwRCxlQUFLLEVBQUMsTUFBaEU7QUFBdUUsZ0JBQU0sRUFBQztBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3S08sZUF3TFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhMTyxlQXdMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeExFLGVBd0xHO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4TEgsZUEwTFAscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFMTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQThMRCxDOzs7Ozs7Ozs7OztBQy9ORCw4RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1lbGFzdGljLWNhcm91c2VsJztcclxuXHJcbmNsYXNzIENsaWVudFNsaWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtpZDogMSwgdGl0bGU6ICdpdGVtICMxJ30sXHJcbiAgICAgIHtpZDogMiwgdGl0bGU6ICdpdGVtICMyJ30sXHJcbiAgICAgIHtpZDogMywgdGl0bGU6ICdpdGVtICMzJ30sXHJcbiAgICAgIHtpZDogNCwgdGl0bGU6ICdpdGVtICM0J30sXHJcbiAgICAgIHtpZDogNSwgdGl0bGU6ICdpdGVtICM1J30sXHJcbiAgICAgIHtpZDogNiwgdGl0bGU6ICdpdGVtICM2J30sXHJcbiAgICAgIHtpZDogNywgdGl0bGU6ICdpdGVtICM3J30sXHJcbiAgICAgIHtpZDogOCwgdGl0bGU6ICdpdGVtICM4J30sXHJcbiAgICAgIHtpZDogOSwgdGl0bGU6ICdpdGVtICM5J30sXHJcbiAgICAgIHtpZDogMTAsIHRpdGxlOiAnaXRlbSAjMTAnfVxyXG4gICAgXVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2Fyb3VzZWwgaXRlbXNUb1Njcm9sbD17NX0gaXRlbXNUb1Nob3c9ezV9IGVuYWJsZUF1dG9QbGF5IGF1dG9QbGF5U3BlZWQ9ezE1MDB9PlxyXG4gICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiA8ZGl2IGtleT17aXRlbS5pZH0+e2l0ZW0udGl0bGV9PC9kaXY+KX1cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudFNsaWRlOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3BhZ2VzL0luZGV4Lm1vZHVsZS5jc3MnO1xyXG4vLyBpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcidcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93J1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXHJcblxyXG4vLyBpbXBvcnQgdGhlIGxpYnJhcnlcclxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIFxyXG4gICAgY29sOiB7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6IDAsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAwXHJcbiAgICB9XHJcbn07XHJcbi8vIGltcG9ydCB5b3VyIGljb25zXHJcblxyXG5saWJyYXJ5LmFkZChmYXMpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgPENvbD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF9jZW50ZXJ9PlxyXG48SW1hZ2Ugc3JjPVwiL2ltYWdlcy9pbm92YXJrIHRlY2gucG5nXCIgd2lkdGg9XCIyMzhcIiBoZWlnaHQ9XCI4MFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF9jZW50ZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JheV9jb2xvcn0+ICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcycsICdlbnZlbG9wZSddfSAvPiAgIGluZm9AaW5vdmFyay5jb208L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvQ29sPlxyXG4gICAgPENvbD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdF90aXRsZTF9PlF1aWNrIExpbmtzPC9kaXY+XHJcbiAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxyXG4gICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdF9saXN0fT5cclxuICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5zaXplfSBpY29uPXtbJ2ZhcycsICdjaGV2cm9uLXJpZ2h0J119IC8+IEFib3V0IFVzXHJcbiAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5mb290X2xpc3R9PlxyXG4gICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLnNpemV9IGljb249e1snZmFzJywgJ2NoZXZyb24tcmlnaHQnXX0gLz4gUHJvZHVjdHNcclxuICAgICAgICAgPC9saT5cclxuICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmZvb3RfbGlzdH0+XHJcbiAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuc2l6ZX0gaWNvbj17WydmYXMnLCAnY2hldnJvbi1yaWdodCddfSAvPiBTZXJ2aWNlc1xyXG4gICAgICAgICA8L2xpPlxyXG4gICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdF9saXN0fT5cclxuICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5zaXplfSBpY29uPXtbJ2ZhcycsICdjaGV2cm9uLXJpZ2h0J119IC8+IENvbnRhY3QgVXNcclxuICAgICAgICAgPC9saT5cclxuICAgICAgICBcclxuICAgICA8L3VsPlxyXG4gXHJcbiAgICA8L0NvbD5cclxuICAgIDxDb2w+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RfdGl0bGV9PlBIT1RPIFNUUkVBTSA8L2Rpdj5cclxuICA8Um93PlxyXG4gICAgICA8Q29sIG1kPXs0fSBjbGFzc05hbWU9e3N0eWxlLmNvbH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF9jZW50ZXJ9PlxyXG4gICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLnJvdW5kfSBzcmM9XCIvaW1hZ2VzL2Zvb3Rlci8xLmpwZ1wiIHdpZHRoPVwiODBcIiBoZWlnaHQ9XCI4MFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBtZD17NH0gY2xhc3NOYW1lPXtzdHlsZS5jb2x9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRfY2VudGVyfT5cclxuICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5yb3VuZH0gc3JjPVwiL2ltYWdlcy9mb290ZXIvMi5qcGdcIiB3aWR0aD1cIjgwXCIgaGVpZ2h0PVwiODBcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgbWQ9ezR9IGNsYXNzTmFtZT17c3R5bGUuY29sfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0X2NlbnRlcn0+XHJcbiAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMucm91bmR9IHNyYz1cIi9pbWFnZXMvZm9vdGVyLzMuanBnXCIgd2lkdGg9XCI4MFwiIGhlaWdodD1cIjgwXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIG1kPXs0fSBjbGFzc05hbWU9e3N0eWxlLmNvbH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF9jZW50ZXJ9PlxyXG4gICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLnJvdW5kMX0gc3JjPVwiL2ltYWdlcy9mb290ZXIvNC5qcGdcIiB3aWR0aD1cIjgwXCIgaGVpZ2h0PVwiODBcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9Db2w+XHJcbiAgPC9Sb3c+XHJcbiAgICA8L0NvbD5cclxuICAgIDxDb2w+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RfdGl0bGV9PlNPQ0lBTCBTSEFSRSA8L2Rpdj5cclxuICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9PlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9zb2NpYWwvdHdpdHRlci5zdmdcIiB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTdcIi8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvc29jaWFsL3R3aXR0ZXIuc3ZnXCIgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjE3XCIvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL3NvY2lhbC90d2l0dGVyLnN2Z1wiIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxN1wiLz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDwvQ29sPlxyXG4gIDwvUm93PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3BhZ2VzL0luZGV4Lm1vZHVsZS5jc3MnO1xuXG4vLyBpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIE5hdmlnYXRpb24oKXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8TmF2YmFyIGJnPVwibGlnaHRcIiBmaXhlZD1cInRvcFwiIGV4cGFuZD1cImxnXCIgY2xhc3NOYW1lPXtzdHlsZXMuc2hhZG93fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCIgY2xhc3NOYW1lPVwibmF2X2xlZnRcIj4gIFxuICBcbiAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIHdpZHRoPVwiMjM4XCIgaGVpZ2h0PVwiODBcIiBhbHQ9XCJMb2dvXCIvPlxuXG4gIDwvTmF2YmFyLkJyYW5kPlxuICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCIgY2xhc3NOYW1lPXtzdHlsZXMubGVmdF9zaWRlfT5cbiAgICA8TmF2IGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj5cbiAgICAgIDxOYXYuTGluayBocmVmPVwiL0hvbWVcIiBjbGFzc05hbWU9e3N0eWxlcy5uYXZfbGlua30+SG9tZTwvTmF2Lkxpbms+XG4gICAgICA8TmF2LkxpbmsgaHJlZj1cIi9BYm91dFwiIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9saW5rfT5BYm91dCBVczwvTmF2Lkxpbms+XG4gICAgICA8TmF2LkxpbmsgaHJlZj1cIi9Qcm9kdWN0c1wiIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9saW5rfT5Qcm9kdWN0czwvTmF2Lkxpbms+XG4gICAgICA8TmF2LkxpbmsgaHJlZj1cIi9TZXJ2aWNlc1wiIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9saW5rfSA+U2VydmljZXM8L05hdi5MaW5rPlxuICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvQ2FyZWVyc1wiIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9saW5rfSA+Q2FyZWVyczwvTmF2Lkxpbms+XG4gICAgICA8TmF2LkxpbmsgaHJlZj1cIi9Db250YWN0XCIgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2xpbmt9PkNvbnRhY3QgVXM8L05hdi5MaW5rPlxuXG4gICAgPC9OYXY+XG5cbiAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gIDwvZGl2PlxuPC9OYXZiYXI+XG5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb24iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJvdXNlbCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wYWdlcy9JbmRleC5tb2R1bGUuY3NzJ1xuXG5mdW5jdGlvbiBTbGlkZSgpe1xuICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgIFxuPENhcm91c2VsIGZhZGUgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGV9PlxuICA8Q2Fyb3VzZWwuSXRlbT5cbiAgICB7LyogPGltZ1xuICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXG4gICAgICBzcmM9XCJodHRwOi8vd3d3Lmlub3ZhcmsuY29tL2Fzc2V0cy9pbWFnZXMvc2xpZGVzL21hcmtldCUyMHNoYXJlLmpwZ1wiXG4gICAgICBhbHQ9XCJGaXJzdCBzbGlkZVwiXG4gICAgLz4gKi99XG4gICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvc2xpZGVzL21hcmtldCBzaGFyZS5qcGdcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9XCIxOTIwXCIgaGVpZ2h0PVwiNTM4XCIgIC8+XG4gXG4gIDwvQ2Fyb3VzZWwuSXRlbT5cbiAgPENhcm91c2VsLkl0ZW0+XG4gIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL3NsaWRlcy93b3JsZC5qcGdcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9XCIxOTIwXCIgaGVpZ2h0PVwiNTM4XCIgIC8+XG5cbiBcbiAgPC9DYXJvdXNlbC5JdGVtPlxuICBcbjwvQ2Fyb3VzZWw+XG5cbiAgICAgICAgICBcbiAgICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlXG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JylcblxubW9kdWxlLmV4cG9ydHMgPSB7IFxuICAgICAgYXR0cmlidXRlczoge1widGl0bGVcIjpcIklub3ZhcmsgVGVjaG5vbG9naWVzIEVkaXRpbmdcIixcImRhdGVcIjpcIjIwMTktMDMtMjFUMTk6MzE6MjAuNTkxWlwiLFwiY2F0c1wiOlt7XCJuYW1lXCI6XCJhZHNkXCIsXCJkZXNjcmlwdGlvblwiOlwiZHNhZHNhZFwifV19LFxuICAgIFxuICAgICAgcmVhY3Q6IFxuICAgICAgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICB0aGlzW2tleV0gPSBwcm9wc1trZXldXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG1hcmtkb3duID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICBjbGFzc05hbWU6IFwiZnJvbnRtYXR0ZXItbWFya2Rvd25cIlxufSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwid2VsY29tZSB0byBcIiwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJpbm92YXJrIHRlY2hcIiksIFwiIFRoaXMgcGFnZSBpcyBidWlsdCB3aXRoIE5leHRKUywgYW5kIGNvbnRlbnQgaXMgbWFuYWdlZCBpbiBOZXRsaWZ5IENNUyxcIikpO1xuICAgICAgICByZXR1cm4gbWFya2Rvd25cbiAgICAgIH1cbiAgICAsXG4gICAgIH0iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXIgPSAocmVzb2x2ZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG50eXBlIERlZmF1bHRJbWFnZUxvYWRlclByb3BzID0gSW1hZ2VMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8XG4gIExvYWRlclZhbHVlLFxuICAocHJvcHM6IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcbj4oW1xuICBbJ2ltZ2l4JywgaW1naXhMb2FkZXJdLFxuICBbJ2Nsb3VkaW5hcnknLCBjbG91ZGluYXJ5TG9hZGVyXSxcbiAgWydha2FtYWknLCBha2FtYWlMb2FkZXJdLFxuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWUsXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgY29uc3QgcGVyY2VudFNpemVzID0gWy4uLnNpemVzLm1hdGNoQWxsKC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nKV0ubWFwKChtKSA9PlxuICAgICAgcGFyc2VJbnQobVsyXSlcbiAgICApXG4gICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoXG4gICAgICAgICAgKHMpID0+IHMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICksXG4gICAgICAgIGtpbmQ6ICd3JyxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBhbGxTaXplcywga2luZDogJ3cnIH1cbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fFxuICAgIGxheW91dCA9PT0gJ2ZpbGwnIHx8XG4gICAgbGF5b3V0ID09PSAncmVzcG9uc2l2ZSdcbiAgKSB7XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcywga2luZDogJ3cnIH1cbiAgfVxuXG4gIGNvbnN0IHdpZHRocyA9IFtcbiAgICAuLi5uZXcgU2V0KFxuICAgICAgLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgW3dpZHRoLCB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovXS5tYXAoXG4gICAgICAgICh3KSA9PiBhbGxTaXplcy5maW5kKChwKSA9PiBwID49IHcpIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICApXG4gICAgKSxcbiAgXVxuICByZXR1cm4geyB3aWR0aHMsIGtpbmQ6ICd4JyB9XG59XG5cbnR5cGUgR2VuSW1nQXR0cnNEYXRhID0ge1xuICBzcmM6IHN0cmluZ1xuICB1bm9wdGltaXplZDogYm9vbGVhblxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4gIGxvYWRlcjogSW1hZ2VMb2FkZXJcbiAgd2lkdGg/OiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxuICBzaXplcz86IHN0cmluZ1xufVxuXG50eXBlIEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICBzcmM6IHN0cmluZ1xuICBzcmNTZXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe1xuICBzcmMsXG4gIHVub3B0aW1pemVkLFxuICBsYXlvdXQsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxuICBzaXplcyxcbiAgbG9hZGVyLFxufTogR2VuSW1nQXR0cnNEYXRhKTogR2VuSW1nQXR0cnNSZXN1bHQge1xuICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICByZXR1cm4geyBzcmMsIHNyY1NldDogdW5kZWZpbmVkLCBzaXplczogdW5kZWZpbmVkIH1cbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGhzLCBraW5kIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpXG4gIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMVxuXG4gIHJldHVybiB7XG4gICAgc3JjOiBsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3aWR0aHNbbGFzdF0gfSksXG4gICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgc3JjU2V0OiB3aWR0aHNcbiAgICAgIC5tYXAoXG4gICAgICAgICh3LCBpKSA9PlxuICAgICAgICAgIGAke2xvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHcgfSl9ICR7XG4gICAgICAgICAgICBraW5kID09PSAndycgPyB3IDogaSArIDFcbiAgICAgICAgICB9JHtraW5kfWBcbiAgICAgIClcbiAgICAgIC5qb2luKCcsICcpLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgbG9hZGVyID0gZGVmYXVsdEltYWdlTG9hZGVyLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgdmlzaWJpbGl0eTogaXNWaXNpYmxlID8gJ2luaGVyaXQnIDogJ2hpZGRlbicsXG5cbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgIT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludFxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYFxuICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmdUb3AgfVxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YFxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0SW50LFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgPT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcblxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6XG4gICAgICAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICBzaXplczogdW5kZWZpbmVkLFxuICB9XG5cbiAgaWYgKGlzVmlzaWJsZSkge1xuICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgIHNyYyxcbiAgICAgIHVub3B0aW1pemVkLFxuICAgICAgbGF5b3V0LFxuICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgIHNpemVzLFxuICAgICAgbG9hZGVyLFxuICAgIH0pXG4gIH1cblxuICBpZiAodW5zaXplZCkge1xuICAgIHdyYXBwZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIHNpemVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBpbWdTdHlsZSA9IHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIHtzaXplclN0eWxlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzaXplclN0eWxlfT5cbiAgICAgICAgICB7c2l6ZXJTdmcgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHt0b0Jhc2U2NChzaXplclN2Zyl9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3NldFJlZn1cbiAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgLz5cbiAgICAgIHtwcmlvcml0eSA/IChcbiAgICAgICAgLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAgICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICdfX25pbWctJyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmNTZXQgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwiaW1hZ2VcIlxuICAgICAgICAgICAgaHJlZj17aW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyY31cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNyY3NldD17aW1nQXR0cmlidXRlcy5zcmNTZXR9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgcGFyYW1zID0gWydhdXRvPWZvcm1hdCcsICdmaXQ9bWF4JywgJ3c9JyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncT0nICsgcXVhbGl0eSlcbiAgfVxuXG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKVxuICB9XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YFxufVxuXG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoIH06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWBcbn1cblxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJyZWRcIjogXCJJbmRleF9yZWRfX2l3OWQtXCIsXG5cdFwidGh1bWJcIjogXCJJbmRleF90aHVtYl9fM0dvOFhcIixcblx0XCJwYWRkaW5nXCI6IFwiSW5kZXhfcGFkZGluZ19fXy1kSHdcIixcblx0XCJwYWRkaW5nMVwiOiBcIkluZGV4X3BhZGRpbmcxX18zLXhHU1wiLFxuXHRcImxpZ2h0X2dyYXlfYmdcIjogXCJJbmRleF9saWdodF9ncmF5X2JnX19paDZKQlwiLFxuXHRcIm5hdl9saW5rXCI6IFwiSW5kZXhfbmF2X2xpbmtfX3dPRUZKXCIsXG5cdFwibGVmdF9zaWRlXCI6IFwiSW5kZXhfbGVmdF9zaWRlX18xd2x5X1wiLFxuXHRcInRleHRfY2VudGVyXCI6IFwiSW5kZXhfdGV4dF9jZW50ZXJfXzJDNXJVXCIsXG5cdFwiY2F0ZWdvcnlcIjogXCJJbmRleF9jYXRlZ29yeV9fMjVkaXJcIixcblx0XCJsaXN0X2ljb25cIjogXCJJbmRleF9saXN0X2ljb25fX1Y3SDZyXCIsXG5cdFwiYnRuLXByaW1hcnlcIjogXCJJbmRleF9idG4tcHJpbWFyeV9fM1d0Um9cIixcblx0XCJwYXJhZ3JhcGhcIjogXCJJbmRleF9wYXJhZ3JhcGhfXzFKdjloXCIsXG5cdFwibGlzdF9ncm91cF9pdGVtXCI6IFwiSW5kZXhfbGlzdF9ncm91cF9pdGVtX18xS1FzdVwiLFxuXHRcImxpc3QtZ3JvdXAtaXRlbVwiOiBcIkluZGV4X2xpc3QtZ3JvdXAtaXRlbV9fMUpYalVcIixcblx0XCJ0YWJsZVwiOiBcIkluZGV4X3RhYmxlX18zSVNVM1wiLFxuXHRcInBhZGRpbmdfbm9uZVwiOiBcIkluZGV4X3BhZGRpbmdfbm9uZV9fMkpJTVRcIixcblx0XCJwYWRkaW5nXzEwXCI6IFwiSW5kZXhfcGFkZGluZ18xMF9fM1dyMUNcIixcblx0XCJib3JkZXJfbm9uZVwiOiBcIkluZGV4X2JvcmRlcl9ub25lX19mUDdjSVwiLFxuXHRcIm1hcmdpbl8xMFwiOiBcIkluZGV4X21hcmdpbl8xMF9fMXRZMnVcIixcblx0XCJjbGllbnRzXCI6IFwiSW5kZXhfY2xpZW50c19fMXR1ZThcIixcblx0XCJ3aGl0ZVwiOiBcIkluZGV4X3doaXRlX181cGxHc1wiLFxuXHRcImltZ19saW5lXCI6IFwiSW5kZXhfaW1nX2xpbmVfX1NxTWdJXCIsXG5cdFwic2VjdGlvblwiOiBcIkluZGV4X3NlY3Rpb25fX2ltbTJEXCIsXG5cdFwiZm9vdGVyXCI6IFwiSW5kZXhfZm9vdGVyX18za3NHQVwiLFxuXHRcImdyYXlfY29sb3JcIjogXCJJbmRleF9ncmF5X2NvbG9yX18yNnVPeVwiLFxuXHRcImZvb3RfdGl0bGVcIjogXCJJbmRleF9mb290X3RpdGxlX18xUjdyU1wiLFxuXHRcImZvb3RfdGl0bGUxXCI6IFwiSW5kZXhfZm9vdF90aXRsZTFfXzI3V3RsXCIsXG5cdFwic2l6ZVwiOiBcIkluZGV4X3NpemVfX0ZOQ0gyXCIsXG5cdFwiZm9vdF9saXN0XCI6IFwiSW5kZXhfZm9vdF9saXN0X18zU1ZaM1wiLFxuXHRcImxpc3RcIjogXCJJbmRleF9saXN0X19CejBveVwiLFxuXHRcInJvdW5kXCI6IFwiSW5kZXhfcm91bmRfXzFXMmh0XCIsXG5cdFwicm91bmQxXCI6IFwiSW5kZXhfcm91bmQxX18yZnlfYlwiLFxuXHRcInN1Yl9ibnJcIjogXCJJbmRleF9zdWJfYm5yX18xV2xxc1wiLFxuXHRcIm1pc3Npb25fYm94XCI6IFwiSW5kZXhfbWlzc2lvbl9ib3hfXzMtWHhPXCIsXG5cdFwibWlzc2lvbl9ib3hfdGl0bGVcIjogXCJJbmRleF9taXNzaW9uX2JveF90aXRsZV9fMjhDOGVcIixcblx0XCJtaXNzaW9uX2NhcmRfYm9keVwiOiBcIkluZGV4X21pc3Npb25fY2FyZF9ib2R5X18xQko4SlwiLFxuXHRcIm1pc3Npb25fY29udGVudFwiOiBcIkluZGV4X21pc3Npb25fY29udGVudF9fMkpZX2ZcIixcblx0XCJwZXJzb25cIjogXCJJbmRleF9wZXJzb25fXzFsSnpNXCIsXG5cdFwicHJvZHVjdF9ibnJcIjogXCJJbmRleF9wcm9kdWN0X2Jucl9fMktjNE5cIixcblx0XCJwcm9kdWN0X2NvbnRlbnRcIjogXCJJbmRleF9wcm9kdWN0X2NvbnRlbnRfX0V0Qk1XXCIsXG5cdFwic2VydmljZXNfYm5yXCI6IFwiSW5kZXhfc2VydmljZXNfYm5yX18zcUllcFwiLFxuXHRcInNlcnZpY2VfY2FyZFwiOiBcIkluZGV4X3NlcnZpY2VfY2FyZF9fU0dDZmNcIixcblx0XCJzZXJ2aWNlX3RpdGxlXCI6IFwiSW5kZXhfc2VydmljZV90aXRsZV9fMmU1Z1hcIixcblx0XCJzZXJ2aWNlX2NvbnRlbnRcIjogXCJJbmRleF9zZXJ2aWNlX2NvbnRlbnRfXzNYc0VuXCIsXG5cdFwiY2FyZWVyc19ibnJcIjogXCJJbmRleF9jYXJlZXJzX2Jucl9fMjlBWnRcIixcblx0XCJqb2JfYm94XCI6IFwiSW5kZXhfam9iX2JveF9fMm00OWhcIixcblx0XCJqb2JfY29udGVudFwiOiBcIkluZGV4X2pvYl9jb250ZW50X18xRGtBa1wiLFxuXHRcImJnX3ByaW1hcnlcIjogXCJJbmRleF9iZ19wcmltYXJ5X18zcklaalwiLFxuXHRcImNsb3NlXCI6IFwiSW5kZXhfY2xvc2VfXzJTSUNwXCIsXG5cdFwiam9iX2xpc3RcIjogXCJJbmRleF9qb2JfbGlzdF9fMXlpc0xcIixcblx0XCJtb2RhbF9pY29uXCI6IFwiSW5kZXhfbW9kYWxfaWNvbl9fRk1sYldcIixcblx0XCJjb250YWN0X2JuclwiOiBcIkluZGV4X2NvbnRhY3RfYm5yX18zMHRJaFwiLFxuXHRcImJnX2JsYWNrXCI6IFwiSW5kZXhfYmdfYmxhY2tfXzNUMnM3XCIsXG5cdFwiY29udGFjdF9pbmZvXCI6IFwiSW5kZXhfY29udGFjdF9pbmZvX18zakFLeFwiLFxuXHRcInRlY2hcIjogXCJJbmRleF90ZWNoX18zZldkLVwiLFxuXHRcIm1haWxcIjogXCJJbmRleF9tYWlsX18xZG5XZlwiLFxuXHRcIm1haWxfaWNvblwiOiBcIkluZGV4X21haWxfaWNvbl9fMldxU1FcIixcblx0XCJlbnZlbG9wZV9pY29uXCI6IFwiSW5kZXhfZW52ZWxvcGVfaWNvbl9fNEF5LTVcIixcblx0XCJzbGlkZVwiOiBcIkluZGV4X3NsaWRlX18yOE5BMVwiLFxuXHRcInNoYWRvd1wiOiBcIkluZGV4X3NoYWRvd19fNW03UDJcIlxufTtcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgYXR0cmlidXRlcywgcmVhY3QgYXMgSG9tZUNvbnRlbnQgfSBmcm9tICcuLi9jb250ZW50L2hvbWUubWQnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0luZGV4Lm1vZHVsZS5jc3MnXG5pbXBvcnQgU2xpZGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcidcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1JvdydcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJ1xuaW1wb3J0IExpc3RHcm91cCBmcm9tICdyZWFjdC1ib290c3RyYXAvTGlzdEdyb3VwJ1xuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnXG5pbXBvcnQgVGFibGUgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1RhYmxlJ1xuaW1wb3J0IENsaWVudFNsaWRlIGZyb20gJy4uL2NvbXBvbmVudHMvQ2xpZW50U2xpZGUnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbi8vIGltcG9ydCB0aGUgbGlicmFyeVxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgeyBmYXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5cblxuLy8gaW1wb3J0IHlvdXIgaWNvbnNcblxubGlicmFyeS5hZGQoZmFzKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBsZXQgeyB0aXRsZSwgY2F0cyB9ID0gYXR0cmlidXRlcztcbiAgcmV0dXJuIDxkaXY+XG4gICAgIDxIZWFkPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9pZGVudGl0eS5uZXRsaWZ5LmNvbS92MS9uZXRsaWZ5LWlkZW50aXR5LXdpZGdldC5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAgPFNsaWRlLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICAgXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuPGgzIGNsYXNzTmFtZT17c3R5bGVzLnBhZGRpbmd9ICA+e3RpdGxlfVxuPC9oMz5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8Q29udGFpbmVyPlxuICAgICAgIDxIb21lQ29udGVudCAvPlxuICAgICAgIDxSb3c+XG4gICAgICAge2NhdHMubWFwKChjYXQsIGspID0+IChcbiAgICAgICAgIFxuICAgIDxDb2wgeHM9ezZ9IG1kPXs0fSBrZXk9e2t9PlxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnRodW1ifT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGNvbGlvLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cIkNsb3VkIGNvbXB1dGluZyBhcmNoaXRlY3R1cmUgXCIgc3JjPVwiL2ltYWdlcy93aGF0X3dlL3Byb2R1Y3RfZGV2ZWxvcG1lbnQucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBhbHQ9XCJwcm9kdWN0IGRldmVsb3BtZW50XCIgLz4gXG4gICAgICAgICAgICAgICAgICAgICAgPGgxICBjbGFzc05hbWU9XCJjb2xvci10ZXh0XCI+e2NhdC5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgIGNsYXNzTmFtZT1cImNvbG9yLXRleHQgaC0xMjVcIj4ge2NhdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJzbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFJlYWQgbW9yZSAmbmJzcDsmbmJzcDsmbmJzcDsgXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFzJywgJ2NoZXZyb24tY2lyY2xlLXJpZ2h0J119IC8+XG5cblxuICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgPC9Db2w+XG4gICAgXG4gIFxuICAgICAgKSl9XG4gIDwvUm93PlxuICBcbjwvQ29udGFpbmVyPlxuICAgICA8L3NlY3Rpb24+XG4gICAgIFxuey8qIHdoeSB1cyAqL31cbjxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0X2dyYXlfYmd9PlxuICBcblxuICA8Q29udGFpbmVyPlxuICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMucGFkZGluZ30+IFdIWSBVUyA8L2gzPlxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF9jZW50ZXJ9PlxuICAgIDxMaXN0R3JvdXAgaG9yaXpvbnRhbCBzdHlsZT17eyBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnfX0+XG4gIFxuICAgIDxMaXN0R3JvdXAuSXRlbT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PlxuICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5saXN0X2ljb259IGljb249e1snZmFzJywgJ3VzZXItYWx0J119IC8+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PiBDdXN0b21lciBGb2N1czwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gIFxuICAgIDxMaXN0R3JvdXAuSXRlbT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PlxuICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5saXN0X2ljb259IGljb249e1snZmFzJywgJ3Ryb3BoeSddfSAvPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT4gUGFzc2lvbiBmb3IgU3VjY2VzczwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gIFxuICBcbiAgICA8TGlzdEdyb3VwLkl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT5cbiAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9pY29ufSBpY29uPXtbJ2ZhcycsICdsYXB0b3AnXX0gLz5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFncmFwaH0+IFRlY2huaWNhbCBLbm93bGVkZ2U8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpc3RHcm91cC5JdGVtPlxuICBcbiAgICA8TGlzdEdyb3VwLkl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT5cbiAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9pY29ufSBpY29uPXtbJ2ZhcycsICdib29rJ119IC8+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PiAgSW50ZWdyaXR5ICYgQWNjb3VudGFiaWxpdHk8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpc3RHcm91cC5JdGVtPlxuICBcbiAgICA8TGlzdEdyb3VwLkl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT5cbiAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9pY29ufSBpY29uPXtbJ2ZhcycsICdmcm93biddfSAvPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT4gICBFeGNlbGxlbmNlIGluIFNlcnZpY2UgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgXG4gIFxuICA8L0xpc3RHcm91cD5cbiAgICA8L2Rpdj5cbiAgPGJyPjwvYnI+PGJyPjwvYnI+XG4gICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnBhZGRpbmd9PiBPVVIgTUFOVFJBIDwvaDM+XG4gIDxSb3c+XG4gIDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbl8xMH0+XG4gICAgPENhcmQuQm9keSBjbGFzc05hbWU9e3N0eWxlcy5wYWRkaW5nXzEwfT5cbiAgICA8VGFibGUgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxuICAgIDx0Ym9keT5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmJvcmRlcl9ub25lfT5cbiAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XCI2MFwiIGhlaWdodD1cIjYwXCIgc3JjPVwiL2ltYWdlcy9pbm5vdmF0ZS5zdmdcIi8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5ib3JkZXJfbm9uZX0+XG4gICAgICAgICAgPGg0PklOTk9WQVRFPC9oND5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgIElubm92YXRpb24gaXMgdGhlIGFiaWxpdHkgdG8gc2VlIGNoYW5nZSBhcyBhbiBvcHBvcnR1bml0eSB0aGF0IHVubG9ja3MgbmV3IHZhbHVlLiBUaGVyZSBpcyBhIHdheSB0byBkbyBpdCBiZXR0ZXIg4oCTIHdlIGFyZSBmaW5kaW5nIGl0LnNcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gIDwvVGFibGU+XG4gICAgPC9DYXJkLkJvZHk+XG4gIDwvQ2FyZD5cbiAgXG4gIDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbl8xMH0+XG4gICAgPENhcmQuQm9keSBjbGFzc05hbWU9e3N0eWxlcy5wYWRkaW5nXzEwfT5cbiAgICA8VGFibGUgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxuICAgIDx0Ym9keT5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmJvcmRlcl9ub25lfT5cbiAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XCI4MFwiIGhlaWdodD1cIjgwXCIgc3JjPVwiL2ltYWdlcy9pbXBsZW1lbnRhdGlvbi5zdmdcIi8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5ib3JkZXJfbm9uZX0+XG4gICAgICAgICAgPGg0PklNUExFTUVOVDwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICBBbiBJbm5vdmF0aW9uIGlkZWEgbmVlZHMgdGhlIHJpZ2h0IGltcGxlbWVudGF0aW9uIHRvIGZpbmQgc3VjY2Vzcy4gSXQgaXMgbm90IGp1c3QgdGhlIGFjdGlvbiwgYnV0IHJpZ2h0IGFjdGlvbiBkZXRlcm1pbmVzIHRoZSBwcm9kdWN0IGZhdGUuIFdlIGZvY3VzIG9uIHRoZSByaWdodCB3YXkgb2YgYnVpbGRpbmcgdGhlIHByb2R1Y3Qgd2l0aCB0aGUgcmlnaHQgdGVjaG5vbG9neS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gIDwvVGFibGU+XG4gICAgPC9DYXJkLkJvZHk+XG4gIDwvQ2FyZD5cbiAgXG4gIDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbl8xMH0+XG4gICAgPENhcmQuQm9keSBjbGFzc05hbWU9e3N0eWxlcy5wYWRkaW5nX25vbmV9PlxuICAgIDxUYWJsZSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0+XG4gICAgPHRib2R5PlxuICAgICAgPHRyPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuYm9yZGVyX25vbmV9PlxuICAgICAgICAgIDxJbWFnZSB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjEyMFwiIHNyYz1cIi9pbWFnZXMvaXRlcmF0aW9uLnN2Z1wiLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmJvcmRlcl9ub25lfT5cbiAgICAgICAgICA8aDQ+SVRFUkFURTwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICBDaGFuZ2UgaXMgdGhlIG9ubHkgdGhpbmcgdGhhdCBpcyBjb25zdGFudC4gQSBwcm9kdWN0IHRoYXQgZG9lcyBub3QgaXRlcmF0ZSBoYXMgYW4gZXhwaXJ5IGRhdGUgdGFnZ2VkIHRvIGl0IGFzIHNvb24gYXMgaXQgY29tZXMgb3V0LiBUaHJvdWdoIGFuIGl0ZXJhdGl2ZSBwcm9jZXNzLCB3ZSBjYW4ga2VlcCB0aGUgb3JpZ2luYWwgZm9jdXMsIHZhbGlkYXRpbmcgZm9yIGN1cnJlbnQgc2l0dWF0aW9ucywgaGVscGluZyB1cyBrZWVwIHRoZSBpZGVhcyBmcmVzaCBhbmQgcHJvZHVjdHMgY29tcGV0aXRpdmUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuICA8L1RhYmxlPlxuICAgIDwvQ2FyZC5Cb2R5PlxuICA8L0NhcmQ+XG4gIDwvUm93PlxuICBcbiAgPC9Db250YWluZXI+XG4gIFxuICA8YnIvPlxuICA8YnIvPlxuICBcbiAgPC9zZWN0aW9uPlxuXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudHN9PlxuICBcbiAgPENvbnRhaW5lcj5cbiAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnBhZGRpbmcxfT4gT1VSIEFNQVpJTkcgQ0xJRU5UU1xuICAgPC9oMz5cbiAgPENsaWVudFNsaWRlLz5cbiAgPC9Db250YWluZXI+XG4gIDwvc2VjdGlvbj5cbiAgXG4gIFxuICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgPENvbnRhaW5lcj5cbiAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnBhZGRpbmd9PiBPVVIgVEVDSE5PTE9HSUVTXG4gIFxuICAgPC9oMz5cbiAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF9jZW50ZXJ9PiBXRSBUUlVTVCBJTiBMT05HIExBU1RJTkcgUEFSVE5FUlNISVBTIFdJVEggVEhFIE1PU1QgSU1QT1JUQU5UIEJSQU5EUyBPTiBUSEUgTUFSS0VUXG4gIDwvcD5cbiAgXG4gIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL3RlY2gucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW1nX2xpbmV9IHdpZHRoPVwiMjMxNFwiIGhlaWdodD1cIjcxOFwiIC8+XG4gIDwvQ29udGFpbmVyPlxuICA8L3NlY3Rpb24+XG4gIDxici8+PGJyLz48YnIvPlxuICBcbiAgPEZvb3Rlci8+XG5cblxuICA8L2Rpdj5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9DYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQ29sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0xpc3RHcm91cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTmF2XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZWxhc3RpYy1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==