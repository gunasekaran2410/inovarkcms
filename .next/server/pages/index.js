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
      expand: "lg",
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
            lineNumber: 17,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default.a.Toggle, {
          "aria-controls": "basic-navbar-nav"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default.a.Collapse, {
          id: "basic-navbar-nav",
          className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.left_side,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a, {
            className: "pull-right",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
              href: "#home",
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.nav_link,
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
              href: "#link",
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.nav_link,
              children: "About Us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
              href: "#link",
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.nav_link,
              children: "Products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
              href: "#link",
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.nav_link,
              children: "Services"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
              href: "#link",
              className: _pages_Index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.nav_link,
              children: "Contact Us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
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

var _jsxFileName = "E:\\cmsinovark\\components\\Slide.js";





function Slide() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
      fade: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
          src: "/images/slides/market share.jpg",
          layout: "responsive",
          width: "1920",
          height: "538"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
          src: "/images/slides/world.jpg",
          layout: "responsive",
          width: "1920",
          height: "538"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 3
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 1
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
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
	"round1": "Index_round1__2fy_b"
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/home.md */ "./content/home.md");
/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_home_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var _Index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Index.module.css */ "./pages/Index.module.css");
/* harmony import */ var _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Index_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Slide */ "./components/Slide.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "react-bootstrap/ListGroup");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Card */ "react-bootstrap/Card");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/Table */ "react-bootstrap/Table");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_ClientSlide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ClientSlide */ "./components/ClientSlide.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__);

var _jsxFileName = "E:\\cmsinovark\\pages\\index.js";
















 // import the library



 // import your icons

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__["fas"]);
function Main() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_17__["useRouter"])();
  let {
    title,
    cats
  } = _content_home_md__WEBPACK_IMPORTED_MODULE_3__["attributes"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slide__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.section,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.padding,
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 1
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_content_home_md__WEBPACK_IMPORTED_MODULE_3__["react"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 8
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default.a, {
          children: cats.map((cat, k) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9___default.a, {
            xs: 6,
            md: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.thumb,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "button colio-link",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {
                  alt: "Cloud computing architecture ",
                  src: "/images/what_we/product_development.png",
                  width: "100",
                  height: "100",
                  alt: "product development"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "color-text",
                  children: cat.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "color-text h-125",
                  children: [" ", cat.description]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
                variant: "primary",
                size: "sm",
                children: ["Read more \xA0\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeIcon"], {
                  icon: ['fas', 'chevron-circle-right']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, this)
          }, k, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 5
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 8
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 8
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.light_gray_bg,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.padding,
          children: " WHY US "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.text_center,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_12___default.a, {
            horizontal: true,
            style: {
              background: 'transparent'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_12___default.a.Item, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.category,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeIcon"], {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list_icon,
                  icon: ['fas', 'user-alt']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.paragraph,
                  children: " Customer Focus"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 7
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 7
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_12___default.a.Item, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.category,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeIcon"], {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list_icon,
                  icon: ['fas', 'trophy']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.paragraph,
                  children: " Passion for Success"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 7
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 7
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_12___default.a.Item, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.category,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeIcon"], {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list_icon,
                  icon: ['fas', 'laptop']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.paragraph,
                  children: " Technical Knowledge"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 7
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 7
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_12___default.a.Item, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.category,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeIcon"], {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list_icon,
                  icon: ['fas', 'book']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.paragraph,
                  children: "  Integrity & Accountability"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 7
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 7
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_12___default.a.Item, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.category,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeIcon"], {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list_icon,
                  icon: ['fas', 'frown']
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.paragraph,
                  children: "   Excellence in Service "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 7
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 7
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 5
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 12
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.padding,
          children: " OUR MANTRA "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13___default.a, {
            className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.margin_10,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13___default.a.Body, {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.padding_10,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_14___default.a, {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.table,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.border_none,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {
                        width: "60",
                        height: "60",
                        src: "/images/innovate.svg"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 135,
                      columnNumber: 9
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.border_none,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                        children: "INNOVATE"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 139,
                        columnNumber: 11
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.paragraph,
                        children: "Innovation is the ability to see change as an opportunity that unlocks new value. There is a way to do it better \u2013 we are finding it.s"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 140,
                        columnNumber: 11
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 9
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 5
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
            columnNumber: 3
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13___default.a, {
            className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.margin_10,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13___default.a.Body, {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.padding_10,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_14___default.a, {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.table,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.border_none,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {
                        width: "80",
                        height: "80",
                        src: "/images/implementation.svg"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 156,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 9
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.border_none,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                        children: "IMPLEMENT"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 11
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.paragraph,
                        children: "An Innovation idea needs the right implementation to find success. It is not just the action, but right action determines the product fate. We focus on the right way of building the product with the right technology."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 160,
                        columnNumber: 11
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 158,
                      columnNumber: 9
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 5
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
            columnNumber: 3
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13___default.a, {
            className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.margin_10,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_13___default.a.Body, {
              className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.padding_none,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_14___default.a, {
                className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.table,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.border_none,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {
                        width: "120",
                        height: "120",
                        src: "/images/iteration.svg"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 176,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 175,
                      columnNumber: 9
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.border_none,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                        children: "ITERATE"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 179,
                        columnNumber: 11
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.paragraph,
                        children: "Change is the only thing that is constant. A product that does not iterate has an expiry date tagged to it as soon as it comes out. Through an iterative process, we can keep the original focus, validating for current situations, helping us keep the ideas fresh and products competitive."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 180,
                        columnNumber: 11
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 178,
                      columnNumber: 9
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 5
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
            columnNumber: 3
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 1
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.clients,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.padding1,
          children: " OUR AMAZING CLIENTS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ClientSlide__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 3
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.section,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.padding,
          children: " OUR TECHNOLOGIES"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.text_center,
          children: " WE TRUST IN LONG LASTING PARTNERSHIPS WITH THE MOST IMPORTANT BRANDS ON THE MARKET"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {
          src: "/images/tech.png",
          className: _Index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.img_line,
          width: "2314",
          height: "718"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 3
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 3
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NsaWVudFNsaWRlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9ob21lLm1kIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9JbmRleC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9MaXN0R3JvdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1lbGFzdGljLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ2xpZW50U2xpZGUiLCJDb21wb25lbnQiLCJpdGVtcyIsImlkIiwidGl0bGUiLCJyZW5kZXIiLCJzdGF0ZSIsIm1hcCIsIml0ZW0iLCJzdHlsZSIsImNvbCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibGlicmFyeSIsImFkZCIsImZhcyIsIkZvb3RlciIsInN0eWxlcyIsImZvb3RlciIsInRleHRfY2VudGVyIiwiZ3JheV9jb2xvciIsImZvb3RfdGl0bGUxIiwibGlzdCIsImZvb3RfbGlzdCIsInNpemUiLCJmb290X3RpdGxlIiwicm91bmQiLCJyb3VuZDEiLCJzb2NpYWwiLCJOYXZpZ2F0aW9uIiwibGVmdF9zaWRlIiwibmF2X2xpbmsiLCJTbGlkZSIsImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsInNpemVzIiwibGF5b3V0IiwicGVyY2VudFNpemVzIiwibSIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJ3aWR0aHMiLCJzIiwia2luZCIsIndpZHRoIiwidyIsInAiLCJzcmNTZXQiLCJnZXRXaWR0aHMiLCJsYXN0Iiwic3JjIiwiaSIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsImNvbmZpZ0xvYWRlciIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwibG9hZGluZyIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25zb2xlIiwiY29uZmlnRG9tYWlucyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInNldFJlZiIsImVsIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJjYWxsYmFjayIsIk1haW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjYXRzIiwiYXR0cmlidXRlcyIsInNlY3Rpb24iLCJjYXQiLCJrIiwidGh1bWIiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJsaWdodF9ncmF5X2JnIiwiYmFja2dyb3VuZCIsImNhdGVnb3J5IiwibGlzdF9pY29uIiwicGFyYWdyYXBoIiwibWFyZ2luXzEwIiwicGFkZGluZ18xMCIsInRhYmxlIiwiYm9yZGVyX25vbmUiLCJwYWRkaW5nX25vbmUiLCJjbGllbnRzIiwicGFkZGluZzEiLCJpbWdfbGluZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLDhEOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztBQUVBLE1BQU1BLFdBQU4sU0FBMEJDLCtDQUExQixDQUFvQztBQUFBO0FBQUE7O0FBQUEsbUNBQzFCO0FBQ05DLFdBQUssRUFBRSxDQUNMO0FBQUNDLFVBQUUsRUFBRSxDQUFMO0FBQVFDLGFBQUssRUFBRTtBQUFmLE9BREssRUFFTDtBQUFDRCxVQUFFLEVBQUUsQ0FBTDtBQUFRQyxhQUFLLEVBQUU7QUFBZixPQUZLLEVBR0w7QUFBQ0QsVUFBRSxFQUFFLENBQUw7QUFBUUMsYUFBSyxFQUFFO0FBQWYsT0FISyxFQUlMO0FBQUNELFVBQUUsRUFBRSxDQUFMO0FBQVFDLGFBQUssRUFBRTtBQUFmLE9BSkssRUFLTDtBQUFDRCxVQUFFLEVBQUUsQ0FBTDtBQUFRQyxhQUFLLEVBQUU7QUFBZixPQUxLLEVBTUw7QUFBQ0QsVUFBRSxFQUFFLENBQUw7QUFBUUMsYUFBSyxFQUFFO0FBQWYsT0FOSyxFQU9MO0FBQUNELFVBQUUsRUFBRSxDQUFMO0FBQVFDLGFBQUssRUFBRTtBQUFmLE9BUEssRUFRTDtBQUFDRCxVQUFFLEVBQUUsQ0FBTDtBQUFRQyxhQUFLLEVBQUU7QUFBZixPQVJLLEVBU0w7QUFBQ0QsVUFBRSxFQUFFLENBQUw7QUFBUUMsYUFBSyxFQUFFO0FBQWYsT0FUSyxFQVVMO0FBQUNELFVBQUUsRUFBRSxFQUFMO0FBQVNDLGFBQUssRUFBRTtBQUFoQixPQVZLO0FBREQsS0FEMEI7QUFBQTs7QUFnQmxDQyxRQUFNLEdBQUk7QUFDUixVQUFNO0FBQUVIO0FBQUYsUUFBWSxLQUFLSSxLQUF2QjtBQUNBLHdCQUNFLHFFQUFDLDZEQUFEO0FBQVUsbUJBQWEsRUFBRSxDQUF6QjtBQUE0QixpQkFBVyxFQUFFLENBQXpDO0FBQTRDLG9CQUFjLE1BQTFEO0FBQTJELG1CQUFhLEVBQUUsSUFBMUU7QUFBQSxnQkFDR0osS0FBSyxDQUFDSyxHQUFOLENBQVVDLElBQUksaUJBQUk7QUFBQSxrQkFBb0JBLElBQUksQ0FBQ0o7QUFBekIsU0FBVUksSUFBSSxDQUFDTCxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBbEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRDs7QUF2QmlDOztBQTBCckJILDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1TLEtBQUssR0FBRztBQUVWQyxLQUFHLEVBQUU7QUFDREMsZUFBVyxFQUFFLENBRFo7QUFFREMsZ0JBQVksRUFBRTtBQUZiO0FBRkssQ0FBZCxDLENBT0E7O0FBRUFDLHlFQUFPLENBQUNDLEdBQVIsQ0FBWUMsc0VBQVo7O0FBTUEsU0FBU0MsTUFBVCxHQUFpQjtBQUNiLHNCQUNJO0FBQUEsMkJBRUQ7QUFBUyxlQUFTLEVBQUVDLDhEQUFNLENBQUNDLE1BQTNCO0FBQUEsNkJBQ0EscUVBQUMsZ0VBQUQ7QUFBQSwrQkFDRyxxRUFBQywwREFBRDtBQUFBLGtDQUNOLHFFQUFDLDBEQUFEO0FBQUEsb0NBQ0E7QUFBSyx1QkFBUyxFQUFFRCw4REFBTSxDQUFDRSxXQUF2QjtBQUFBLHFDQUNKLHFFQUFDLGlEQUFEO0FBQU8sbUJBQUcsRUFBQywwQkFBWDtBQUFzQyxxQkFBSyxFQUFDLEtBQTVDO0FBQWtELHNCQUFNLEVBQUM7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREEsZUFJQTtBQUFLLHVCQUFTLEVBQUVGLDhEQUFNLENBQUNFLFdBQXZCO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFFRiw4REFBTSxDQUFDRyxVQUF2QjtBQUFBLCtDQUFzQyxxRUFBQyw4RUFBRDtBQUFpQixzQkFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLFVBQVI7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRE0sZUFTTixxRUFBQywwREFBRDtBQUFBLG9DQUNBO0FBQUssdUJBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREEsZUFFQztBQUFJLHVCQUFTLEVBQUVKLDhEQUFNLENBQUNLLElBQXRCO0FBQUEsc0NBQ0k7QUFBSSx5QkFBUyxFQUFFTCw4REFBTSxDQUFDTSxTQUF0QjtBQUFBLHdDQUNBLHFFQUFDLDhFQUFEO0FBQWlCLDJCQUFTLEVBQUVOLDhEQUFNLENBQUNPLElBQW5DO0FBQXlDLHNCQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsZUFBUjtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUlJO0FBQUkseUJBQVMsRUFBRVAsOERBQU0sQ0FBQ00sU0FBdEI7QUFBQSx3Q0FDQSxxRUFBQyw4RUFBRDtBQUFpQiwyQkFBUyxFQUFFTiw4REFBTSxDQUFDTyxJQUFuQztBQUF5QyxzQkFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLGVBQVI7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkosZUFPSTtBQUFJLHlCQUFTLEVBQUVQLDhEQUFNLENBQUNNLFNBQXRCO0FBQUEsd0NBQ0EscUVBQUMsOEVBQUQ7QUFBaUIsMkJBQVMsRUFBRU4sOERBQU0sQ0FBQ08sSUFBbkM7QUFBeUMsc0JBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxlQUFSO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBKLGVBVUk7QUFBSSx5QkFBUyxFQUFFUCw4REFBTSxDQUFDTSxTQUF0QjtBQUFBLHdDQUNBLHFFQUFDLDhFQUFEO0FBQWlCLDJCQUFTLEVBQUVOLDhEQUFNLENBQUNPLElBQW5DO0FBQXlDLHNCQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsZUFBUjtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRNLGVBNEJOLHFFQUFDLDBEQUFEO0FBQUEsb0NBQ0E7QUFBSyx1QkFBUyxFQUFFUCw4REFBTSxDQUFDUSxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEQSxlQUVGLHFFQUFDLDBEQUFEO0FBQUEsc0NBQ0kscUVBQUMsMERBQUQ7QUFBSyxrQkFBRSxFQUFFLENBQVQ7QUFBWSx5QkFBUyxFQUFFaEIsS0FBSyxDQUFDQyxHQUE3QjtBQUFBLHVDQUNBO0FBQUssMkJBQVMsRUFBRU8sOERBQU0sQ0FBQ0UsV0FBdkI7QUFBQSx5Q0FDTyxxRUFBQyxpREFBRDtBQUFPLDZCQUFTLEVBQUVGLDhEQUFNLENBQUNTLEtBQXpCO0FBQWdDLHVCQUFHLEVBQUMsc0JBQXBDO0FBQTJELHlCQUFLLEVBQUMsSUFBakU7QUFBc0UsMEJBQU0sRUFBQztBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFNSSxxRUFBQywwREFBRDtBQUFLLGtCQUFFLEVBQUUsQ0FBVDtBQUFZLHlCQUFTLEVBQUVqQixLQUFLLENBQUNDLEdBQTdCO0FBQUEsdUNBQ0E7QUFBSywyQkFBUyxFQUFFTyw4REFBTSxDQUFDRSxXQUF2QjtBQUFBLHlDQUNPLHFFQUFDLGlEQUFEO0FBQU8sNkJBQVMsRUFBRUYsOERBQU0sQ0FBQ1MsS0FBekI7QUFBZ0MsdUJBQUcsRUFBQyxzQkFBcEM7QUFBMkQseUJBQUssRUFBQyxJQUFqRTtBQUFzRSwwQkFBTSxFQUFDO0FBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFOSixlQVdJLHFFQUFDLDBEQUFEO0FBQUssa0JBQUUsRUFBRSxDQUFUO0FBQVkseUJBQVMsRUFBRWpCLEtBQUssQ0FBQ0MsR0FBN0I7QUFBQSx1Q0FDQTtBQUFLLDJCQUFTLEVBQUVPLDhEQUFNLENBQUNFLFdBQXZCO0FBQUEseUNBQ08scUVBQUMsaURBQUQ7QUFBTyw2QkFBUyxFQUFFRiw4REFBTSxDQUFDUyxLQUF6QjtBQUFnQyx1QkFBRyxFQUFDLHNCQUFwQztBQUEyRCx5QkFBSyxFQUFDLElBQWpFO0FBQXNFLDBCQUFNLEVBQUM7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVhKLGVBZ0JJLHFFQUFDLDBEQUFEO0FBQUssa0JBQUUsRUFBRSxDQUFUO0FBQVkseUJBQVMsRUFBRWpCLEtBQUssQ0FBQ0MsR0FBN0I7QUFBQSx1Q0FDQTtBQUFLLDJCQUFTLEVBQUVPLDhEQUFNLENBQUNFLFdBQXZCO0FBQUEseUNBQ08scUVBQUMsaURBQUQ7QUFBTyw2QkFBUyxFQUFFRiw4REFBTSxDQUFDVSxNQUF6QjtBQUFpQyx1QkFBRyxFQUFDLHNCQUFyQztBQUE0RCx5QkFBSyxFQUFDLElBQWxFO0FBQXVFLDBCQUFNLEVBQUM7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTVCTSxlQXFETixxRUFBQywwREFBRDtBQUFBLG9DQUNBO0FBQUssdUJBQVMsRUFBRVYsOERBQU0sQ0FBQ1EsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREEsZUFFQTtBQUFJLHVCQUFTLEVBQUVSLDhEQUFNLENBQUNXLE1BQXRCO0FBQUEsc0NBQ0k7QUFBQSx1Q0FDRyxxRUFBQyxpREFBRDtBQUFPLHFCQUFHLEVBQUMsNEJBQVg7QUFBd0MsdUJBQUssRUFBQyxJQUE5QztBQUFtRCx3QkFBTSxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBSUk7QUFBQSx1Q0FDQSxxRUFBQyxpREFBRDtBQUFPLHFCQUFHLEVBQUMsNEJBQVg7QUFBd0MsdUJBQUssRUFBQyxJQUE5QztBQUFtRCx3QkFBTSxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpKLGVBT0k7QUFBQSx1Q0FDQSxxRUFBQyxpREFBRDtBQUFPLHFCQUFHLEVBQUMsNEJBQVg7QUFBd0MsdUJBQUssRUFBQyxJQUE5QztBQUFtRCx3QkFBTSxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBckRNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0VIOztBQUVjWixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBRUEsU0FBU2EsVUFBVCxHQUFxQjtBQUNqQixzQkFDSTtBQUFBLDJCQUVJLHFFQUFDLDZEQUFEO0FBQVEsUUFBRSxFQUFDLE9BQVg7QUFBbUIsWUFBTSxFQUFDLElBQTFCO0FBQUEsNkJBQ0E7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDVixxRUFBQyw2REFBRCxDQUFRLEtBQVI7QUFBYyxjQUFJLEVBQUMsT0FBbkI7QUFBMkIsbUJBQVMsRUFBQyxVQUFyQztBQUFBLGlDQUVFLHFFQUFDLGlEQUFEO0FBQU8sZUFBRyxFQUFDLGtCQUFYO0FBQThCLGlCQUFLLEVBQUMsS0FBcEM7QUFBMEMsa0JBQU0sRUFBQyxJQUFqRDtBQUFzRCxlQUFHLEVBQUM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFUsZUFNVixxRUFBQyw2REFBRCxDQUFRLE1BQVI7QUFBZSwyQkFBYztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5VLGVBT1YscUVBQUMsNkRBQUQsQ0FBUSxRQUFSO0FBQWlCLFlBQUUsRUFBQyxrQkFBcEI7QUFBdUMsbUJBQVMsRUFBRVosOERBQU0sQ0FBQ2EsU0FBekQ7QUFBQSxpQ0FDRSxxRUFBQywwREFBRDtBQUFLLHFCQUFTLEVBQUMsWUFBZjtBQUFBLG9DQUNFLHFFQUFDLDBEQUFELENBQUssSUFBTDtBQUFVLGtCQUFJLEVBQUMsT0FBZjtBQUF1Qix1QkFBUyxFQUFFYiw4REFBTSxDQUFDYyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFLHFFQUFDLDBEQUFELENBQUssSUFBTDtBQUFVLGtCQUFJLEVBQUMsT0FBZjtBQUF1Qix1QkFBUyxFQUFFZCw4REFBTSxDQUFDYyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFLHFFQUFDLDBEQUFELENBQUssSUFBTDtBQUFVLGtCQUFJLEVBQUMsT0FBZjtBQUF1Qix1QkFBUyxFQUFFZCw4REFBTSxDQUFDYyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRixlQUlFLHFFQUFDLDBEQUFELENBQUssSUFBTDtBQUFVLGtCQUFJLEVBQUMsT0FBZjtBQUF1Qix1QkFBUyxFQUFFZCw4REFBTSxDQUFDYyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixlQUtFLHFFQUFDLDBEQUFELENBQUssSUFBTDtBQUFVLGtCQUFJLEVBQUMsT0FBZjtBQUF1Qix1QkFBUyxFQUFFZCw4REFBTSxDQUFDYyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0Qkg7O0FBRWNGLHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0csS0FBVCxHQUFnQjtBQUNkLHNCQUNJO0FBQUEsMkJBRU4scUVBQUMsK0RBQUQ7QUFBVSxVQUFJLE1BQWQ7QUFBQSw4QkFDRSxxRUFBQywrREFBRCxDQUFVLElBQVY7QUFBQSwrQkFNRSxxRUFBQyxpREFBRDtBQUFPLGFBQUcsRUFBQyxpQ0FBWDtBQUE2QyxnQkFBTSxFQUFDLFlBQXBEO0FBQWlFLGVBQUssRUFBQyxNQUF2RTtBQUE4RSxnQkFBTSxFQUFDO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFVRSxxRUFBQywrREFBRCxDQUFVLElBQVY7QUFBQSwrQkFDQSxxRUFBQyxpREFBRDtBQUFPLGFBQUcsRUFBQywwQkFBWDtBQUFzQyxnQkFBTSxFQUFDLFlBQTdDO0FBQTBELGVBQUssRUFBQyxNQUFoRTtBQUF1RSxnQkFBTSxFQUFDO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRk07QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0JEOztBQUVjQSxvRUFBZixFOzs7Ozs7Ozs7OztBQ2hDQSxjQUFjLG1CQUFPLENBQUMsb0JBQU87O0FBRTdCLGtCO0FBQ0EsbUJBQW1CLGtGQUFrRixzQ0FBc0MsRUFBRTs7QUFFN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxNOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUNBOztBQUNBOztBQUNBOztBQU1BOztBQUVBLFVBQW1DO0FBQ2pDO0FBQUVDLFFBQUQsc0JBQUNBLEdBQUQsSUFBQ0E7QUFHSjs7QUFBQSxNQUFNQyxvQkFBb0IsR0FBRyxrQkFBN0IsU0FBNkIsQ0FBN0I7QUFhQSxNQUFNQyxPQUFPLEdBQUcsUUFHZCxDQUNBLFVBREEsV0FDQSxDQURBLEVBRUEsZUFGQSxnQkFFQSxDQUZBLEVBR0EsV0FIQSxZQUdBLENBSEEsRUFJQSxZQVBGLGFBT0UsQ0FKQSxDQUhjLENBQWhCO0FBVUEsTUFBTUMsbUJBQW1CLEdBQUcsNkNBQTVCLFNBQTRCLENBQTVCO0FBc0NBLE1BQU07QUFDSkMsYUFBVyxFQURQO0FBRUpDLFlBQVUsRUFGTjtBQUdKQyxRQUFNLEVBSEY7QUFJSkMsTUFBSSxFQUpBO0FBS0pDLFNBQU8sRUFMSDtBQUFBLElBT0ZDLDBKQUF5REMsYUFQN0QsbUIsQ0FRQTs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQyxHQUFELG1CQUF1QixHQUF4QyxnQkFBaUIsQ0FBakI7QUFDQUMsaUJBQWlCLENBQWpCQSxLQUF1QixVQUFVQyxDQUFDLEdBQWxDRDtBQUNBRCxRQUFRLENBQVJBLEtBQWMsVUFBVUUsQ0FBQyxHQUF6QkY7O0FBRUEseUNBSXlDO0FBQ3ZDLE1BQUlHLEtBQUssS0FBS0MsTUFBTSxLQUFOQSxVQUFxQkEsTUFBTSxLQUF6QyxZQUFTLENBQVQsRUFBNkQ7QUFDM0Q7QUFDQSxVQUFNQyxZQUFZLEdBQUcsQ0FBQyxHQUFHRixLQUFLLENBQUxBLFNBQUosb0JBQUlBLENBQUosTUFBK0NHLENBQUQsSUFDakVDLFFBQVEsQ0FBQ0QsQ0FBQyxDQURaLENBQ1ksQ0FBRixDQURXLENBQXJCOztBQUdBLFFBQUlELFlBQVksQ0FBaEIsUUFBeUI7QUFDdkIsWUFBTUcsYUFBYSxHQUFHQyxJQUFJLENBQUpBLElBQVMsR0FBVEEsZ0JBQXRCO0FBQ0EsYUFBTztBQUNMQyxjQUFNLEVBQUVWLFFBQVEsQ0FBUkEsT0FDTFcsQ0FBRCxJQUFPQSxDQUFDLElBQUlWLGlCQUFpQixDQUFqQkEsQ0FBaUIsQ0FBakJBLEdBRlQsYUFDR0QsQ0FESDtBQUlMWSxZQUFJLEVBSk47QUFBTyxPQUFQO0FBT0Y7O0FBQUEsV0FBTztBQUFFRixZQUFNLEVBQVI7QUFBb0JFLFVBQUksRUFBL0I7QUFBTyxLQUFQO0FBRUY7O0FBQUEsTUFDRSw2QkFDQVIsTUFBTSxLQUROLFVBRUFBLE1BQU0sS0FIUixjQUlFO0FBQ0EsV0FBTztBQUFFTSxZQUFNLEVBQVI7QUFBNkJFLFVBQUksRUFBeEM7QUFBTyxLQUFQO0FBR0Y7O0FBQUEsUUFBTUYsTUFBTSxHQUFHLENBQ2IsR0FBRyxTQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFRRyxLQUFLLEdBQUc7QUFBaEI7QUFBQSxRQUNHQyxDQUFELElBQU9kLFFBQVEsQ0FBUkEsS0FBZWUsQ0FBRCxJQUFPQSxDQUFDLElBQXRCZixNQUFnQ0EsUUFBUSxDQUFDQSxRQUFRLENBQVJBLFNBWHRELENBV3FELENBRGpELENBVEMsQ0FEVSxDQUFmO0FBZUEsU0FBTztBQUFBO0FBQVVZLFFBQUksRUFBckI7QUFBTyxHQUFQO0FBbUJGOztBQUFBLDBCQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUEwQixDQUExQixFQVF1QztBQUNyQyxtQkFBaUI7QUFDZixXQUFPO0FBQUE7QUFBT0ksWUFBTSxFQUFiO0FBQTBCYixXQUFLLEVBQXRDO0FBQU8sS0FBUDtBQUdGOztBQUFBLFFBQU07QUFBQTtBQUFBO0FBQUEsTUFBbUJjLFNBQVMsZ0JBQWxDLEtBQWtDLENBQWxDO0FBQ0EsUUFBTUMsSUFBSSxHQUFHUixNQUFNLENBQU5BLFNBQWI7QUFFQSxTQUFPO0FBQ0xTLE9BQUcsRUFBRXhCLE1BQU0sQ0FBQztBQUFBO0FBQUE7QUFBZ0JrQixXQUFLLEVBQUVILE1BQU0sQ0FEcEMsSUFDb0M7QUFBN0IsS0FBRCxDQUROO0FBRUxQLFNBQUssRUFBRSxVQUFVUyxJQUFJLEtBQWQsZ0JBRkY7QUFHTEksVUFBTSxFQUFFTixNQUFNLENBQU5BLElBRUosVUFDRyxHQUFFZixNQUFNLENBQUM7QUFBQTtBQUFBO0FBQWdCa0IsV0FBSyxFQUF0QjtBQUFDLEtBQUQsQ0FBNkIsSUFDcENELElBQUksS0FBSkEsVUFBbUJRLENBQUMsR0FBRyxDQUN4QixHQUFFUixJQUxERixTQUhWLElBR1VBO0FBSEgsR0FBUDtBQWNGOztBQUFBLG1CQUFnRDtBQUM5QyxNQUFJLGFBQUosVUFBMkI7QUFDekI7QUFFRjs7QUFBQSxNQUFJLGFBQUosVUFBMkI7QUFDekIsV0FBT0gsUUFBUSxJQUFmLEVBQWUsQ0FBZjtBQUVGOztBQUFBO0FBR0Y7O0FBQUEseUNBQTJEO0FBQ3pELFFBQU1jLElBQUksR0FBRzlCLE9BQU8sQ0FBUEEsSUFBYixZQUFhQSxDQUFiOztBQUNBLFlBQVU7QUFDUixXQUFPOEIsSUFBSTtBQUFHQyxVQUFJLEVBQVA7QUFBQSxPQUFYLFdBQVcsRUFBWDtBQUVGOztBQUFBLFFBQU0sVUFDSCx5REFBd0RDLHFDQUV2RCxlQUFjQyxZQUhsQixFQUFNLENBQU47QUFPYTs7QUFBQSxxQkFjQTtBQUFBLE1BZGU7QUFBQTtBQUFBO0FBRzVCQyxlQUFXLEdBSGlCO0FBSTVCQyxZQUFRLEdBSm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZNUIvQixVQUFNLEdBWnNCO0FBQUEsTUFjZjtBQUFBLE1BRFZnQyxHQUNVO0FBQ2IsTUFBSUMsSUFBeUIsR0FBN0I7QUFDQSxNQUFJeEIsTUFBZ0MsR0FBR0QsS0FBSyxrQkFBNUM7QUFDQSxNQUFJMEIsT0FBTyxHQUFYOztBQUNBLE1BQUksYUFBSixNQUF1QjtBQUNyQkEsV0FBTyxHQUFHQyxPQUFPLENBQUNGLElBQUksQ0FBdEJDLE9BQWlCLENBQWpCQSxDQURxQixDQUVyQjs7QUFDQSxXQUFPRCxJQUFJLENBQVgsU0FBVyxDQUFYO0FBSEYsU0FJTyxJQUFJLFlBQUosTUFBc0I7QUFDM0I7QUFDQSxRQUFJQSxJQUFJLENBQVIsUUFBaUJ4QixNQUFNLEdBQUd3QixJQUFJLENBQWJ4QixPQUZVLENBSTNCOztBQUNBLFdBQU93QixJQUFJLENBQVgsUUFBVyxDQUFYO0FBR0Y7O0FBQUEsWUFBMkM7QUFDekMsUUFBSSxDQUFKLEtBQVU7QUFDUixZQUFNLFVBQ0gsMEhBQXlIRyxJQUFJLENBQUpBLFVBQ3hIO0FBQUE7QUFBQTtBQUR3SEE7QUFDeEgsT0FEd0hBLENBRDVILEVBQU0sQ0FBTjtBQU1GOztBQUFBLFFBQUksQ0FBQ3ZDLG1CQUFtQixDQUFuQkEsU0FBTCxNQUFLQSxDQUFMLEVBQTJDO0FBQ3pDLFlBQU0sVUFDSCxtQkFBa0IyQixHQUFJLDhDQUE2Q2YsTUFBTyxzQkFBcUJaLG1CQUFtQixDQUFuQkEscUJBRGxHLEdBQU0sQ0FBTjtBQU1GOztBQUFBLFFBQUksQ0FBQ0Ysb0JBQW9CLENBQXBCQSxTQUFMLE9BQUtBLENBQUwsRUFBNkM7QUFDM0MsWUFBTSxVQUNILG1CQUFrQjZCLEdBQUksK0NBQThDYSxPQUFRLHNCQUFxQjFDLG9CQUFvQixDQUFwQkEscUJBRHBHLEdBQU0sQ0FBTjtBQU1GOztBQUFBLFFBQUlvQyxRQUFRLElBQUlNLE9BQU8sS0FBdkIsUUFBb0M7QUFDbEMsWUFBTSxVQUNILG1CQUFrQmIsR0FEckIsaUZBQU0sQ0FBTjtBQUlGOztBQUFBLGlCQUFhO0FBQ1gsWUFBTSxVQUNILG1CQUFrQkEsR0FEckIsaUdBQU0sQ0FBTjtBQUlIO0FBRUQ7O0FBQUEsTUFBSWMsTUFBTSxHQUNSLGNBQWNELE9BQU8sS0FBUEEsVUFBc0IsbUJBRHRDLFdBQ0UsQ0FERjs7QUFFQSxNQUFJYixHQUFHLElBQUlBLEdBQUcsQ0FBSEEsV0FBWCxPQUFXQSxDQUFYLEVBQW9DO0FBQ2xDO0FBQ0FNLGVBQVcsR0FBWEE7QUFDQVEsVUFBTSxHQUFOQTtBQUdGOztBQUFBLFFBQU0sMEJBQTBCLHNDQUFrQztBQUNoRUMsY0FBVSxFQURzRDtBQUVoRUMsWUFBUSxFQUFFLENBRlo7QUFBa0UsR0FBbEMsQ0FBaEM7QUFJQSxRQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFFQSxRQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBdkIsS0FBdUIsQ0FBdkI7QUFDQSxRQUFNQyxTQUFTLEdBQUdELE1BQU0sQ0FBeEIsTUFBd0IsQ0FBeEI7QUFDQSxRQUFNRSxVQUFVLEdBQUdGLE1BQU0sQ0FBekIsT0FBeUIsQ0FBekI7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFJRyxRQUFxQyxHQUFHO0FBQzFDQyxjQUFVLEVBQUVOLFNBQVMsZUFEcUI7QUFHMUNPLFlBQVEsRUFIa0M7QUFJMUNDLE9BQUcsRUFKdUM7QUFLMUNDLFFBQUksRUFMc0M7QUFNMUNDLFVBQU0sRUFOb0M7QUFPMUNDLFNBQUssRUFQcUM7QUFTMUNDLGFBQVMsRUFUaUM7QUFVMUNDLFdBQU8sRUFWbUM7QUFXMUNDLFVBQU0sRUFYb0M7QUFZMUNDLFVBQU0sRUFab0M7QUFjMUNDLFdBQU8sRUFkbUM7QUFlMUN2QyxTQUFLLEVBZnFDO0FBZ0IxQ3dDLFVBQU0sRUFoQm9DO0FBaUIxQ0MsWUFBUSxFQWpCa0M7QUFrQjFDQyxZQUFRLEVBbEJrQztBQW1CMUNDLGFBQVMsRUFuQmlDO0FBb0IxQ0MsYUFBUyxFQXBCaUM7QUFBQTtBQUE1QztBQUE0QyxHQUE1Qzs7QUF5QkEsTUFDRSxtQ0FDQSxxQkFEQSxlQUVBckQsTUFBTSxLQUhSLFFBSUU7QUFDQTtBQUNBLFVBQU1zRCxRQUFRLEdBQUduQixTQUFTLEdBQTFCO0FBQ0EsVUFBTW9CLFVBQVUsR0FBR0MsS0FBSyxDQUFMQSxRQUFLLENBQUxBLFlBQTRCLEdBQUVGLFFBQVEsR0FBRyxHQUE1RDs7QUFDQSxRQUFJdEQsTUFBTSxLQUFWLGNBQTZCO0FBQzNCO0FBQ0F5RCxrQkFBWSxHQUFHO0FBQ2JULGVBQU8sRUFETTtBQUViVSxnQkFBUSxFQUZLO0FBR2JuQixnQkFBUSxFQUhLO0FBS2JLLGlCQUFTLEVBTEk7QUFNYkcsY0FBTSxFQU5SVTtBQUFlLE9BQWZBO0FBUUFFLGdCQUFVLEdBQUc7QUFBRVgsZUFBTyxFQUFUO0FBQW9CSixpQkFBUyxFQUE3QjtBQUFiZTtBQUFhLE9BQWJBO0FBVkYsV0FXTyxJQUFJM0QsTUFBTSxLQUFWLGFBQTRCO0FBQ2pDO0FBQ0F5RCxrQkFBWSxHQUFHO0FBQ2JULGVBQU8sRUFETTtBQUViRyxnQkFBUSxFQUZLO0FBR2JPLGdCQUFRLEVBSEs7QUFJYm5CLGdCQUFRLEVBSks7QUFLYkssaUJBQVMsRUFMSTtBQU1iRyxjQUFNLEVBTlJVO0FBQWUsT0FBZkE7QUFRQUUsZ0JBQVUsR0FBRztBQUNYZixpQkFBUyxFQURFO0FBRVhJLGVBQU8sRUFGSTtBQUdYRyxnQkFBUSxFQUhWUTtBQUFhLE9BQWJBO0FBS0FDLGNBQVEsR0FBSSxlQUFjM0IsUUFBUyxhQUFZRSxTQUEvQ3lCO0FBZkssV0FnQkEsSUFBSTVELE1BQU0sS0FBVixTQUF3QjtBQUM3QjtBQUNBeUQsa0JBQVksR0FBRztBQUNiQyxnQkFBUSxFQURLO0FBRWJkLGlCQUFTLEVBRkk7QUFHYkksZUFBTyxFQUhNO0FBSWJULGdCQUFRLEVBSks7QUFLYjlCLGFBQUssRUFMUTtBQU1id0MsY0FBTSxFQU5SUTtBQUFlLE9BQWZBO0FBU0g7QUE5Q0QsU0E4Q08sSUFDTCxtQ0FDQSxxQkFEQSxlQUVBekQsTUFBTSxLQUhELFFBSUw7QUFDQTtBQUNBeUQsZ0JBQVksR0FBRztBQUNiVCxhQUFPLEVBRE07QUFFYlUsY0FBUSxFQUZLO0FBSWJuQixjQUFRLEVBSks7QUFLYkMsU0FBRyxFQUxVO0FBTWJDLFVBQUksRUFOUztBQU9iQyxZQUFNLEVBUE87QUFRYkMsV0FBSyxFQVJRO0FBVWJDLGVBQVMsRUFWSTtBQVdiRyxZQUFNLEVBWFJVO0FBQWUsS0FBZkE7QUFOSyxTQW1CQTtBQUNMO0FBQ0EsY0FBMkM7QUFDekMsWUFBTSxVQUNILG1CQUFrQjFDLEdBRHJCLHlFQUFNLENBQU47QUFJSDtBQUVEOztBQUFBLE1BQUk4QyxhQUFnQyxHQUFHO0FBQ3JDOUMsT0FBRyxFQURrQztBQUdyQ0gsVUFBTSxFQUgrQjtBQUlyQ2IsU0FBSyxFQUpQO0FBQXVDLEdBQXZDOztBQU9BLGlCQUFlO0FBQ2I4RCxpQkFBYSxHQUFHQyxnQkFBZ0IsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUkvQnJELFdBQUssRUFKMEI7QUFLL0JzRCxhQUFPLEVBTHdCO0FBQUE7QUFBakNGO0FBQWlDLEtBQUQsQ0FBaENBO0FBV0Y7O0FBQUEsZUFBYTtBQUNYSixnQkFBWSxHQUFaQTtBQUNBRSxjQUFVLEdBQVZBO0FBQ0F0QixZQUFRLEdBQVJBO0FBRUY7O0FBQUEsc0JBQ0U7QUFBSyxTQUFLLEVBQVY7QUFBQSxLQUNHc0IsVUFBVSxnQkFDVDtBQUFLLFNBQUssRUFBVjtBQUFBLEtBQ0dDLFFBQVEsZ0JBQ1A7QUFDRSxTQUFLLEVBQUU7QUFDTFQsY0FBUSxFQURIO0FBRUxILGFBQU8sRUFGRjtBQUdMRCxZQUFNLEVBSEQ7QUFJTEQsWUFBTSxFQUpEO0FBS0xELGFBQU8sRUFOWDtBQUNTLEtBRFQ7QUFRRSxPQUFHLEVBUkw7QUFTRSxtQkFURjtBQVVFLFFBQUksRUFWTjtBQVdFLE9BQUcsRUFBRyw2QkFBNEIsK0JBWjdCO0FBQ1AsSUFETyxHQUZGLElBQ1QsQ0FEUyxHQURiLG1CQW9CRTtBQUdFLFlBQVEsRUFIVjtBQUlFLGFBQVMsRUFKWDtBQUtFLE9BQUcsRUFMTDtBQU1FLFNBQUssRUExQlQ7QUFvQkUsS0FwQkYsRUE0Qkd2QixRQUFRO0FBQUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQUMsTUFBRCw0QkFDRTtBQUNFLE9BQUcsRUFDRCxZQUNBdUMsYUFBYSxDQURiLE1BRUFBLGFBQWEsQ0FGYixTQUdBQSxhQUFhLENBTGpCO0FBT0UsT0FBRyxFQVBMO0FBUUUsTUFBRSxFQVJKO0FBU0UsUUFBSSxFQUFFQSxhQUFhLENBQWJBLHFCQUFtQ0EsYUFBYSxDQUFDOUMsR0FUekQsQ0FVRTtBQVZGO0FBV0UsZUFBVyxFQUFFOEMsYUFBYSxDQUFDakQsTUFYN0IsQ0FZRTtBQVpGO0FBYUUsY0FBVSxFQUFFaUQsYUFBYSxDQXBCdEI7QUFPTCxJQURGLENBTk8sR0E3QmIsSUFDRSxDQURGO0FBeURGLEMsQ0FBQTs7O0FBRUEsMkJBQTJDO0FBQ3pDLFNBQU85QyxHQUFHLENBQUhBLENBQUcsQ0FBSEEsV0FBaUJBLEdBQUcsQ0FBSEEsTUFBakJBLENBQWlCQSxDQUFqQkEsR0FBUDtBQUdGOztBQUFBLHFCQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFyQjtBQUFxQixDQUFyQixFQUtvQztBQUNsQztBQUNBLFFBQU1pRCxNQUFNLEdBQUcsMkJBQTJCLE9BQTFDLEtBQWUsQ0FBZjtBQUNBLE1BQUlDLFlBQVksR0FBaEI7O0FBQ0EsZUFBYTtBQUNYRCxVQUFNLENBQU5BLEtBQVksT0FBWkE7QUFHRjs7QUFBQSxNQUFJQSxNQUFNLENBQVYsUUFBbUI7QUFDakJDLGdCQUFZLEdBQUcsTUFBTUQsTUFBTSxDQUFOQSxLQUFyQkMsR0FBcUJELENBQXJCQztBQUVGOztBQUFBLFNBQVEsR0FBRS9DLElBQUssR0FBRWdELFlBQVksS0FBTSxHQUFFRCxZQUFyQztBQUdGOztBQUFBLHNCQUFzQjtBQUFBO0FBQUE7QUFBdEI7QUFBc0IsQ0FBdEIsRUFBNkU7QUFDM0UsU0FBUSxHQUFFL0MsSUFBSyxHQUFFZ0QsWUFBWSxLQUFNLFlBQVd6RCxLQUE5QztBQUdGOztBQUFBLDBCQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUEwQixDQUExQixFQUtvQztBQUNsQztBQUNBLFFBQU11RCxNQUFNLEdBQUcsc0JBQXNCLE9BQXRCLE9BQW9DLFFBQVFELE9BQU8sSUFBbEUsTUFBbUQsQ0FBcEMsQ0FBZjtBQUNBLE1BQUlFLFlBQVksR0FBR0QsTUFBTSxDQUFOQSxZQUFuQjtBQUNBLFNBQVEsR0FBRTlDLElBQUssR0FBRStDLFlBQWEsR0FBRUMsWUFBWSxLQUE1QztBQUdGOztBQUFBLHVCQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUF2QjtBQUF1QixDQUF2QixFQUtvQztBQUNsQyxZQUEyQztBQUN6QyxVQUFNQyxhQUFhLEdBQW5CLEdBRHlDLENBR3pDOztBQUNBLFFBQUksQ0FBSixLQUFVQSxhQUFhLENBQWJBO0FBQ1YsUUFBSSxDQUFKLE9BQVlBLGFBQWEsQ0FBYkE7O0FBRVosUUFBSUEsYUFBYSxDQUFiQSxTQUFKLEdBQThCO0FBQzVCLFlBQU0sVUFDSCxvQ0FBbUNBLGFBQWEsQ0FBYkEsVUFFbEMsZ0dBQStGeEMsSUFBSSxDQUFKQSxVQUMvRjtBQUFBO0FBQUE7QUFEK0ZBO0FBQy9GLE9BRCtGQSxDQUhuRyxFQUFNLENBQU47QUFTRjs7QUFBQSxRQUFJWixHQUFHLENBQUhBLFdBQUosSUFBSUEsQ0FBSixFQUEwQjtBQUN4QixZQUFNLFVBQ0gsd0JBQXVCQSxHQUQxQiwwR0FBTSxDQUFOO0FBS0Y7O0FBQUEsUUFBSSxDQUFDQSxHQUFHLENBQUhBLFdBQUQsR0FBQ0EsQ0FBRCxJQUFKLGVBQTJDO0FBQ3pDOztBQUNBLFVBQUk7QUFDRnFELGlCQUFTLEdBQUcsUUFBWkEsR0FBWSxDQUFaQTtBQUNBLE9BRkYsQ0FFRSxZQUFZO0FBQ1pDLGVBQU8sQ0FBUEE7QUFDQSxjQUFNLFVBQ0gsd0JBQXVCdEQsR0FEMUIsaUlBQU0sQ0FBTjtBQUtGOztBQUFBLFVBQUksQ0FBQ3VELGFBQWEsQ0FBYkEsU0FBdUJGLFNBQVMsQ0FBckMsUUFBS0UsQ0FBTCxFQUFpRDtBQUMvQyxjQUFNLFVBQ0gscUJBQW9CdkQsR0FBSSxrQ0FBaUNxRCxTQUFTLENBQUNHLFFBQXBFLCtEQUFDLEdBREgsb0VBQU0sQ0FBTjtBQUtIO0FBQ0Y7QUFFRDs7QUFBQSxTQUFRLEdBQUVyRCxJQUFLLFFBQU9zRCxrQkFBa0IsS0FBTSxNQUFLL0QsS0FBTSxNQUFLc0QsT0FBTyxJQUFJLEVBQXpFO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3aEJNLE1BQU1VLG1CQUFtQixHQUM3QiwrQkFBK0JDLElBQUksQ0FBcEMsbUJBQUMsSUFDRCxjQUVrQjtBQUNoQixNQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBaEIsR0FBWUEsRUFBWjtBQUNBLFNBQU9DLFVBQVUsQ0FBQyxZQUFZO0FBQzVCQyxNQUFFLENBQUM7QUFDREMsZ0JBQVUsRUFEVDtBQUVEQyxtQkFBYSxFQUFFLFlBQVk7QUFDekIsZUFBTzNFLElBQUksQ0FBSkEsT0FBWSxNQUFNdUUsSUFBSSxDQUFKQSxRQUF6QixLQUFtQixDQUFadkUsQ0FBUDtBQUhKeUU7QUFBRyxLQUFELENBQUZBO0FBRGUsS0FBakIsQ0FBaUIsQ0FBakI7QUFORzs7OztBQWdCQSxNQUFNRyxrQkFBa0IsR0FDNUIsK0JBQStCUCxJQUFJLENBQXBDLGtCQUFDLElBQ0QsY0FBeUM7QUFDdkMsU0FBT1EsWUFBWSxDQUFuQixFQUFtQixDQUFuQjtBQUhHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNQOztBQUNBOztBQWNBLE1BQU1DLHVCQUF1QixHQUFHLGdDQUFoQzs7QUFFTyx5QkFBNEM7QUFBQTtBQUE1QztBQUE0QyxDQUE1QyxFQUdxRDtBQUMxRCxRQUFNQyxVQUFtQixHQUFHckQsUUFBUSxJQUFJLENBQXhDO0FBRUEsUUFBTXNELFNBQVMsR0FBRyxXQUFsQixNQUFrQixHQUFsQjtBQUNBLFFBQU0sd0JBQXdCLHFCQUE5QixLQUE4QixDQUE5QjtBQUVBLFFBQU1DLE1BQU0sR0FBRyx3QkFDWkMsRUFBRCxJQUFrQjtBQUNoQixRQUFJRixTQUFTLENBQWIsU0FBdUI7QUFDckJBLGVBQVMsQ0FBVEE7QUFDQUEsZUFBUyxDQUFUQTtBQUdGOztBQUFBLFFBQUlELFVBQVUsSUFBZCxTQUEyQjs7QUFFM0IsUUFBSUcsRUFBRSxJQUFJQSxFQUFFLENBQVosU0FBc0I7QUFDcEJGLGVBQVMsQ0FBVEEsVUFBb0JHLE9BQU8sS0FFeEJ4RCxTQUFELElBQWVBLFNBQVMsSUFBSXlELFVBQVUsQ0FGYixTQUVhLENBRmIsRUFHekI7QUFIRko7QUFHRSxPQUh5QixDQUEzQkE7QUFNSDtBQWhCWSxLQWlCYix5QkFqQkYsT0FpQkUsQ0FqQmEsQ0FBZjtBQW9CQSx3QkFBVSxNQUFNO0FBQ2QsUUFBSSxDQUFKLHlCQUE4QjtBQUM1QixVQUFJLENBQUosU0FBYztBQUNaLGNBQU1LLFlBQVksR0FBRyw4Q0FBb0IsTUFBTUQsVUFBVSxDQUF6RCxJQUF5RCxDQUFwQyxDQUFyQjtBQUNBLGVBQU8sTUFBTSw2Q0FBYixZQUFhLENBQWI7QUFFSDtBQUNGO0FBUEQsS0FPRyxDQVBILE9BT0csQ0FQSDtBQVNBLFNBQU8sU0FBUCxPQUFPLENBQVA7QUFHRjs7QUFBQSw2Q0FJYztBQUNaLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE2QkUsY0FBYyxDQUFqRCxPQUFpRCxDQUFqRDtBQUNBQyxVQUFRLENBQVJBO0FBRUFDLFVBQVEsQ0FBUkE7QUFDQSxTQUFPLHFCQUEyQjtBQUNoQ0QsWUFBUSxDQUFSQTtBQUNBQyxZQUFRLENBQVJBLG1CQUZnQyxDQUloQzs7QUFDQSxRQUFJRCxRQUFRLENBQVJBLFNBQUosR0FBeUI7QUFDdkJDLGNBQVEsQ0FBUkE7QUFDQUMsZUFBUyxDQUFUQTtBQUVIO0FBVEQ7QUFZRjs7QUFBQSxNQUFNQSxTQUFTLEdBQUcsSUFBbEIsR0FBa0IsRUFBbEI7O0FBQ0EsaUNBQXdFO0FBQ3RFLFFBQU0zSSxFQUFFLEdBQUc0SSxPQUFPLENBQVBBLGNBQVg7QUFDQSxNQUFJQyxRQUFRLEdBQUdGLFNBQVMsQ0FBVEEsSUFBZixFQUFlQSxDQUFmOztBQUNBLGdCQUFjO0FBQ1o7QUFHRjs7QUFBQSxRQUFNRixRQUFRLEdBQUcsSUFBakIsR0FBaUIsRUFBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUcseUJBQTBCSSxPQUFELElBQWE7QUFDckRBLFdBQU8sQ0FBUEEsUUFBaUJDLEtBQUQsSUFBVztBQUN6QixZQUFNQyxRQUFRLEdBQUdQLFFBQVEsQ0FBUkEsSUFBYU0sS0FBSyxDQUFuQyxNQUFpQk4sQ0FBakI7QUFDQSxZQUFNNUQsU0FBUyxHQUFHa0UsS0FBSyxDQUFMQSxrQkFBd0JBLEtBQUssQ0FBTEEsb0JBQTFDOztBQUNBLFVBQUlDLFFBQVEsSUFBWixXQUEyQjtBQUN6QkEsZ0JBQVEsQ0FBUkEsU0FBUSxDQUFSQTtBQUVIO0FBTkRGO0FBRGUsS0FBakIsT0FBaUIsQ0FBakI7QUFVQUgsV0FBUyxDQUFUQSxRQUVHRSxRQUFRLEdBQUc7QUFBQTtBQUFBO0FBRmRGO0FBRWMsR0FGZEE7QUFRQTtBQUNELEM7Ozs7Ozs7Ozs7O0FDM0dELGlCQUFpQixtQkFBTyxDQUFDLHFFQUFxQjs7Ozs7Ozs7Ozs7O0FDQTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFDQTtBQUNBO0NBS0E7O0FBRUFqSSwwRUFBTyxDQUFDQyxHQUFSLENBQVlDLHNFQUFaO0FBR2UsU0FBU3FJLElBQVQsR0FBZ0I7QUFDN0IsUUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4QjtBQUNBLE1BQUk7QUFBRWxKLFNBQUY7QUFBU21KO0FBQVQsTUFBa0JDLDJEQUF0QjtBQUNBLHNCQUFPO0FBQUEsNEJBQ0oscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSztBQUFRLFdBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREksZUFJRCxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkMsZUFLRCxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEMsZUFNRDtBQUFTLGVBQVMsRUFBRXZJLHdEQUFNLENBQUN3SSxPQUEzQjtBQUFBLDhCQUVEO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsK0JBQ1A7QUFBSSxtQkFBUyxFQUFFeEksd0RBQU0sQ0FBQzRFLE9BQXRCO0FBQUEsb0JBQWtDekY7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURPO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQyxlQU1ELHFFQUFDLGdFQUFEO0FBQUEsZ0NBQ0EscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVBLHFFQUFDLDBEQUFEO0FBQUEsb0JBQ0NtSixJQUFJLENBQUNoSixHQUFMLENBQVMsQ0FBQ21KLEdBQUQsRUFBTUMsQ0FBTixrQkFFYixxRUFBQywwREFBRDtBQUFLLGNBQUUsRUFBRSxDQUFUO0FBQVksY0FBRSxFQUFFLENBQWhCO0FBQUEsbUNBQ1k7QUFBUyx1QkFBUyxFQUFFMUksd0RBQU0sQ0FBQzJJLEtBQTNCO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLG1CQUFmO0FBQUEsd0NBQ0UscUVBQUMsa0RBQUQ7QUFBTyxxQkFBRyxFQUFDLCtCQUFYO0FBQTJDLHFCQUFHLEVBQUMseUNBQS9DO0FBQXlGLHVCQUFLLEVBQUMsS0FBL0Y7QUFBcUcsd0JBQU0sRUFBQyxLQUE1RztBQUFrSCxxQkFBRyxFQUFDO0FBQXRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFFSTtBQUFLLDJCQUFTLEVBQUMsWUFBZjtBQUFBLDRCQUE2QkYsR0FBRyxDQUFDRztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKLGVBR0k7QUFBSSwyQkFBUyxFQUFDLGtCQUFkO0FBQUEsa0NBQW1DSCxHQUFHLENBQUNJLFdBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFNTSxxRUFBQyw4REFBRDtBQUFRLHVCQUFPLEVBQUMsU0FBaEI7QUFBMEIsb0JBQUksRUFBQyxJQUEvQjtBQUFBLGtFQUdBLHFFQUFDLCtFQUFEO0FBQWlCLHNCQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsc0JBQVI7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFosYUFBd0JILENBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkk7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5DLGVBNENUO0FBQVMsZUFBUyxFQUFFMUksd0RBQU0sQ0FBQzhJLGFBQTNCO0FBQUEsOEJBR0UscUVBQUMsZ0VBQUQ7QUFBQSxnQ0FDQTtBQUFJLG1CQUFTLEVBQUU5SSx3REFBTSxDQUFDNEUsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFHRTtBQUFLLG1CQUFTLEVBQUU1RSx3REFBTSxDQUFDRSxXQUF2QjtBQUFBLGlDQUNBLHFFQUFDLGlFQUFEO0FBQVcsc0JBQVUsTUFBckI7QUFBc0IsaUJBQUssRUFBRTtBQUFFNkksd0JBQVUsRUFBRTtBQUFkLGFBQTdCO0FBQUEsb0NBRUEscUVBQUMsaUVBQUQsQ0FBVyxJQUFYO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFFL0ksd0RBQU0sQ0FBQ2dKLFFBQXZCO0FBQUEsd0NBQ0EscUVBQUMsK0VBQUQ7QUFBaUIsMkJBQVMsRUFBRWhKLHdEQUFNLENBQUNpSixTQUFuQztBQUE4QyxzQkFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLFVBQVI7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEQSxlQUVBO0FBQUcsMkJBQVMsRUFBRWpKLHdEQUFNLENBQUNrSixTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZBLGVBU0EscUVBQUMsaUVBQUQsQ0FBVyxJQUFYO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFFbEosd0RBQU0sQ0FBQ2dKLFFBQXZCO0FBQUEsd0NBQ0EscUVBQUMsK0VBQUQ7QUFBaUIsMkJBQVMsRUFBRWhKLHdEQUFNLENBQUNpSixTQUFuQztBQUE4QyxzQkFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLFFBQVI7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEQSxlQUVBO0FBQUcsMkJBQVMsRUFBRWpKLHdEQUFNLENBQUNrSixTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRBLGVBaUJBLHFFQUFDLGlFQUFELENBQVcsSUFBWDtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBRWxKLHdEQUFNLENBQUNnSixRQUF2QjtBQUFBLHdDQUNBLHFFQUFDLCtFQUFEO0FBQWlCLDJCQUFTLEVBQUVoSix3REFBTSxDQUFDaUosU0FBbkM7QUFBOEMsc0JBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxRQUFSO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREEsZUFFQTtBQUFHLDJCQUFTLEVBQUVqSix3REFBTSxDQUFDa0osU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFqQkEsZUF3QkEscUVBQUMsaUVBQUQsQ0FBVyxJQUFYO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFFbEosd0RBQU0sQ0FBQ2dKLFFBQXZCO0FBQUEsd0NBQ0EscUVBQUMsK0VBQUQ7QUFBaUIsMkJBQVMsRUFBRWhKLHdEQUFNLENBQUNpSixTQUFuQztBQUE4QyxzQkFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLE1BQVI7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEQSxlQUVBO0FBQUcsMkJBQVMsRUFBRWpKLHdEQUFNLENBQUNrSixTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXhCQSxlQStCQSxxRUFBQyxpRUFBRCxDQUFXLElBQVg7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUVsSix3REFBTSxDQUFDZ0osUUFBdkI7QUFBQSx3Q0FDQSxxRUFBQywrRUFBRDtBQUFpQiwyQkFBUyxFQUFFaEosd0RBQU0sQ0FBQ2lKLFNBQW5DO0FBQThDLHNCQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsT0FBUjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURBLGVBRUE7QUFBRywyQkFBUyxFQUFFakosd0RBQU0sQ0FBQ2tKLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUE2Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3Q0EsZUE2Q1M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3Q1QsZUE4Q0U7QUFBSSxtQkFBUyxFQUFFbEosd0RBQU0sQ0FBQzRFLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlDRixlQStDQSxxRUFBQywwREFBRDtBQUFBLGtDQUNBLHFFQUFDLDREQUFEO0FBQU0scUJBQVMsRUFBRTVFLHdEQUFNLENBQUNtSixTQUF4QjtBQUFBLG1DQUNFLHFFQUFDLDREQUFELENBQU0sSUFBTjtBQUFXLHVCQUFTLEVBQUVuSix3REFBTSxDQUFDb0osVUFBN0I7QUFBQSxxQ0FDQSxxRUFBQyw2REFBRDtBQUFPLHlCQUFTLEVBQUVwSix3REFBTSxDQUFDcUosS0FBekI7QUFBQSx1Q0FDQTtBQUFBLHlDQUNFO0FBQUEsNENBQ0U7QUFBSSwrQkFBUyxFQUFFckosd0RBQU0sQ0FBQ3NKLFdBQXRCO0FBQUEsNkNBQ0UscUVBQUMsa0RBQUQ7QUFBTyw2QkFBSyxFQUFDLElBQWI7QUFBa0IsOEJBQU0sRUFBQyxJQUF6QjtBQUE4QiwyQkFBRyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLGVBSUU7QUFBSSwrQkFBUyxFQUFFdEosd0RBQU0sQ0FBQ3NKLFdBQXRCO0FBQUEsOENBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsZUFFRTtBQUFHLGlDQUFTLEVBQUV0Six3REFBTSxDQUFDa0osU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsZUFxQkEscUVBQUMsNERBQUQ7QUFBTSxxQkFBUyxFQUFFbEosd0RBQU0sQ0FBQ21KLFNBQXhCO0FBQUEsbUNBQ0UscUVBQUMsNERBQUQsQ0FBTSxJQUFOO0FBQVcsdUJBQVMsRUFBRW5KLHdEQUFNLENBQUNvSixVQUE3QjtBQUFBLHFDQUNBLHFFQUFDLDZEQUFEO0FBQU8seUJBQVMsRUFBRXBKLHdEQUFNLENBQUNxSixLQUF6QjtBQUFBLHVDQUNBO0FBQUEseUNBQ0U7QUFBQSw0Q0FDRTtBQUFJLCtCQUFTLEVBQUVySix3REFBTSxDQUFDc0osV0FBdEI7QUFBQSw2Q0FDRSxxRUFBQyxrREFBRDtBQUFPLDZCQUFLLEVBQUMsSUFBYjtBQUFrQiw4QkFBTSxFQUFDLElBQXpCO0FBQThCLDJCQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsZUFJRTtBQUFJLCtCQUFTLEVBQUV0Six3REFBTSxDQUFDc0osV0FBdEI7QUFBQSw4Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixlQUVFO0FBQUcsaUNBQVMsRUFBRXRKLHdEQUFNLENBQUNrSixTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQkEsZUF5Q0EscUVBQUMsNERBQUQ7QUFBTSxxQkFBUyxFQUFFbEosd0RBQU0sQ0FBQ21KLFNBQXhCO0FBQUEsbUNBQ0UscUVBQUMsNERBQUQsQ0FBTSxJQUFOO0FBQVcsdUJBQVMsRUFBRW5KLHdEQUFNLENBQUN1SixZQUE3QjtBQUFBLHFDQUNBLHFFQUFDLDZEQUFEO0FBQU8seUJBQVMsRUFBRXZKLHdEQUFNLENBQUNxSixLQUF6QjtBQUFBLHVDQUNBO0FBQUEseUNBQ0U7QUFBQSw0Q0FDRTtBQUFJLCtCQUFTLEVBQUVySix3REFBTSxDQUFDc0osV0FBdEI7QUFBQSw2Q0FDRSxxRUFBQyxrREFBRDtBQUFPLDZCQUFLLEVBQUMsS0FBYjtBQUFtQiw4QkFBTSxFQUFDLEtBQTFCO0FBQWdDLDJCQUFHLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsZUFJRTtBQUFJLCtCQUFTLEVBQUV0Six3REFBTSxDQUFDc0osV0FBdEI7QUFBQSw4Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixlQUVFO0FBQUcsaUNBQVMsRUFBRXRKLHdEQUFNLENBQUNrSixTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF6Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQWtIRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEhGLGVBbUhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUNTLGVBbUtQO0FBQVMsZUFBUyxFQUFFbEosd0RBQU0sQ0FBQ3dKLE9BQTNCO0FBQUEsNkJBRUEscUVBQUMsZ0VBQUQ7QUFBQSxnQ0FDQTtBQUFJLG1CQUFTLEVBQUV4Six3REFBTSxDQUFDeUosUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFHQSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuS08sZUE2S1A7QUFBUyxlQUFTLEVBQUV6Six3REFBTSxDQUFDd0ksT0FBM0I7QUFBQSw2QkFDQSxxRUFBQyxnRUFBRDtBQUFBLGdDQUNBO0FBQUksbUJBQVMsRUFBRXhJLHdEQUFNLENBQUM0RSxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUlBO0FBQUcsbUJBQVMsRUFBRTVFLHdEQUFNLENBQUNFLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpBLGVBT0EscUVBQUMsa0RBQUQ7QUFBTyxhQUFHLEVBQUMsa0JBQVg7QUFBOEIsbUJBQVMsRUFBRUYsd0RBQU0sQ0FBQzBKLFFBQWhEO0FBQTBELGVBQUssRUFBQyxNQUFoRTtBQUF1RSxnQkFBTSxFQUFDO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdLTyxlQXdMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeExPLGVBd0xGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4TEUsZUF3TEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhMSCxlQTBMUCxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUxPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBOExELEM7Ozs7Ozs7Ozs7O0FDaE9ELDhEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnO1xyXG5cclxuY2xhc3MgQ2xpZW50U2xpZGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgaXRlbXM6IFtcclxuICAgICAge2lkOiAxLCB0aXRsZTogJ2l0ZW0gIzEnfSxcclxuICAgICAge2lkOiAyLCB0aXRsZTogJ2l0ZW0gIzInfSxcclxuICAgICAge2lkOiAzLCB0aXRsZTogJ2l0ZW0gIzMnfSxcclxuICAgICAge2lkOiA0LCB0aXRsZTogJ2l0ZW0gIzQnfSxcclxuICAgICAge2lkOiA1LCB0aXRsZTogJ2l0ZW0gIzUnfSxcclxuICAgICAge2lkOiA2LCB0aXRsZTogJ2l0ZW0gIzYnfSxcclxuICAgICAge2lkOiA3LCB0aXRsZTogJ2l0ZW0gIzcnfSxcclxuICAgICAge2lkOiA4LCB0aXRsZTogJ2l0ZW0gIzgnfSxcclxuICAgICAge2lkOiA5LCB0aXRsZTogJ2l0ZW0gIzknfSxcclxuICAgICAge2lkOiAxMCwgdGl0bGU6ICdpdGVtICMxMCd9XHJcbiAgICBdXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJvdXNlbCBpdGVtc1RvU2Nyb2xsPXs1fSBpdGVtc1RvU2hvdz17NX0gZW5hYmxlQXV0b1BsYXkgYXV0b1BsYXlTcGVlZD17MTUwMH0+XHJcbiAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IDxkaXYga2V5PXtpdGVtLmlkfT57aXRlbS50aXRsZX08L2Rpdj4pfVxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50U2xpZGU7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcGFnZXMvSW5kZXgubW9kdWxlLmNzcyc7XHJcbi8vIGltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJ1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnXHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCdcclxuXHJcbi8vIGltcG9ydCB0aGUgbGlicmFyeVxyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgXHJcbiAgICBjb2w6IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDogMCxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6IDBcclxuICAgIH1cclxufTtcclxuLy8gaW1wb3J0IHlvdXIgaWNvbnNcclxuXHJcbmxpYnJhcnkuYWRkKGZhcyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICA8Q29sPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0X2NlbnRlcn0+XHJcbjxJbWFnZSBzcmM9XCIvaW1hZ2VzL2lub3ZhcmsgdGVjaC5wbmdcIiB3aWR0aD1cIjIzOFwiIGhlaWdodD1cIjgwXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0X2NlbnRlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmF5X2NvbG9yfT4gICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFzJywgJ2VudmVsb3BlJ119IC8+ICAgaW5mb0Bpbm92YXJrLmNvbTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9Db2w+XHJcbiAgICA8Q29sPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290X3RpdGxlMX0+UXVpY2sgTGlua3M8L2Rpdj5cclxuICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XHJcbiAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5mb290X2xpc3R9PlxyXG4gICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLnNpemV9IGljb249e1snZmFzJywgJ2NoZXZyb24tcmlnaHQnXX0gLz4gQWJvdXQgVXNcclxuICAgICAgICAgPC9saT5cclxuICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmZvb3RfbGlzdH0+XHJcbiAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuc2l6ZX0gaWNvbj17WydmYXMnLCAnY2hldnJvbi1yaWdodCddfSAvPiBQcm9kdWN0c1xyXG4gICAgICAgICA8L2xpPlxyXG4gICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdF9saXN0fT5cclxuICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5zaXplfSBpY29uPXtbJ2ZhcycsICdjaGV2cm9uLXJpZ2h0J119IC8+IFNlcnZpY2VzXHJcbiAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5mb290X2xpc3R9PlxyXG4gICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLnNpemV9IGljb249e1snZmFzJywgJ2NoZXZyb24tcmlnaHQnXX0gLz4gQ29udGFjdCBVc1xyXG4gICAgICAgICA8L2xpPlxyXG4gICAgICAgIFxyXG4gICAgIDwvdWw+XHJcbiBcclxuICAgIDwvQ29sPlxyXG4gICAgPENvbD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdF90aXRsZX0+UEhPVE8gU1RSRUFNIDwvZGl2PlxyXG4gIDxSb3c+XHJcbiAgICAgIDxDb2wgbWQ9ezR9IGNsYXNzTmFtZT17c3R5bGUuY29sfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0X2NlbnRlcn0+XHJcbiAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMucm91bmR9IHNyYz1cIi9pbWFnZXMvZm9vdGVyLzEuanBnXCIgd2lkdGg9XCI4MFwiIGhlaWdodD1cIjgwXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIG1kPXs0fSBjbGFzc05hbWU9e3N0eWxlLmNvbH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF9jZW50ZXJ9PlxyXG4gICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLnJvdW5kfSBzcmM9XCIvaW1hZ2VzL2Zvb3Rlci8yLmpwZ1wiIHdpZHRoPVwiODBcIiBoZWlnaHQ9XCI4MFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBtZD17NH0gY2xhc3NOYW1lPXtzdHlsZS5jb2x9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRfY2VudGVyfT5cclxuICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5yb3VuZH0gc3JjPVwiL2ltYWdlcy9mb290ZXIvMy5qcGdcIiB3aWR0aD1cIjgwXCIgaGVpZ2h0PVwiODBcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgbWQ9ezR9IGNsYXNzTmFtZT17c3R5bGUuY29sfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0X2NlbnRlcn0+XHJcbiAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMucm91bmQxfSBzcmM9XCIvaW1hZ2VzL2Zvb3Rlci80LmpwZ1wiIHdpZHRoPVwiODBcIiBoZWlnaHQ9XCI4MFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbD5cclxuICA8L1Jvdz5cclxuICAgIDwvQ29sPlxyXG4gICAgPENvbD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdF90aXRsZX0+U09DSUFMIFNIQVJFIDwvZGl2PlxyXG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbH0+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL3NvY2lhbC90d2l0dGVyLnN2Z1wiIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxN1wiLz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9zb2NpYWwvdHdpdHRlci5zdmdcIiB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTdcIi8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvc29jaWFsL3R3aXR0ZXIuc3ZnXCIgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjE3XCIvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPC9Db2w+XHJcbiAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcGFnZXMvSW5kZXgubW9kdWxlLmNzcyc7XG4vLyBpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIE5hdmlnYXRpb24oKXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8TmF2YmFyIGJnPVwibGlnaHRcIiBleHBhbmQ9XCJsZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgPE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIiBjbGFzc05hbWU9XCJuYXZfbGVmdFwiPiAgXG4gIFxuICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgd2lkdGg9XCIyMzhcIiBoZWlnaHQ9XCI4MFwiIGFsdD1cIkxvZ29cIi8+XG5cbiAgPC9OYXZiYXIuQnJhbmQ+XG4gIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cbiAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0X3NpZGV9PlxuICAgIDxOYXYgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPlxuICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjaG9tZVwiIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9saW5rfT5Ib21lPC9OYXYuTGluaz5cbiAgICAgIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIiBjbGFzc05hbWU9e3N0eWxlcy5uYXZfbGlua30+QWJvdXQgVXM8L05hdi5MaW5rPlxuICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9saW5rfT5Qcm9kdWN0czwvTmF2Lkxpbms+XG4gICAgICA8TmF2LkxpbmsgaHJlZj1cIiNsaW5rXCIgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2xpbmt9ID5TZXJ2aWNlczwvTmF2Lkxpbms+XG4gICAgICA8TmF2LkxpbmsgaHJlZj1cIiNsaW5rXCIgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2xpbmt9PkNvbnRhY3QgVXM8L05hdi5MaW5rPlxuXG4gICAgPC9OYXY+XG5cbiAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gIDwvZGl2PlxuPC9OYXZiYXI+XG5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb24iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJvdXNlbCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5mdW5jdGlvbiBTbGlkZSgpe1xuICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgIFxuPENhcm91c2VsIGZhZGU+XG4gIDxDYXJvdXNlbC5JdGVtPlxuICAgIHsvKiA8aW1nXG4gICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcbiAgICAgIHNyYz1cImh0dHA6Ly93d3cuaW5vdmFyay5jb20vYXNzZXRzL2ltYWdlcy9zbGlkZXMvbWFya2V0JTIwc2hhcmUuanBnXCJcbiAgICAgIGFsdD1cIkZpcnN0IHNsaWRlXCJcbiAgICAvPiAqL31cbiAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9zbGlkZXMvbWFya2V0IHNoYXJlLmpwZ1wiIGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD1cIjE5MjBcIiBoZWlnaHQ9XCI1MzhcIiAgLz5cbiBcbiAgPC9DYXJvdXNlbC5JdGVtPlxuICA8Q2Fyb3VzZWwuSXRlbT5cbiAgPEltYWdlIHNyYz1cIi9pbWFnZXMvc2xpZGVzL3dvcmxkLmpwZ1wiIGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD1cIjE5MjBcIiBoZWlnaHQ9XCI1MzhcIiAgLz5cblxuIFxuICA8L0Nhcm91c2VsLkl0ZW0+XG4gIFxuPC9DYXJvdXNlbD5cblxuICAgICAgICAgIFxuICAgICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgXG4gICAgICBhdHRyaWJ1dGVzOiB7XCJ0aXRsZVwiOlwiSW5vdmFyayBUZWNobm9sb2dpZXMgRWRpdGluZ1wiLFwiZGF0ZVwiOlwiMjAxOS0wMy0yMVQxOTozMToyMC41OTFaXCIsXCJjYXRzXCI6W3tcIm5hbWVcIjpcImFkc2RcIixcImRlc2NyaXB0aW9uXCI6XCJkc2Fkc2FkXCJ9XX0sXG4gICAgXG4gICAgICByZWFjdDogXG4gICAgICBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgbWFya2Rvd24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gIGNsYXNzTmFtZTogXCJmcm9udG1hdHRlci1tYXJrZG93blwiXG59LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJ3ZWxjb21lIHRvIFwiLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcImlub3ZhcmsgdGVjaFwiKSwgXCIgVGhpcyBwYWdlIGlzIGJ1aWx0IHdpdGggTmV4dEpTLCBhbmQgY29udGVudCBpcyBtYW5hZ2VkIGluIE5ldGxpZnkgQ01TLFwiKSk7XG4gICAgICAgIHJldHVybiBtYXJrZG93blxuICAgICAgfVxuICAgICxcbiAgICAgfSIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9oZWFkJ1xuaW1wb3J0IHsgdG9CYXNlNjQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NCdcbmltcG9ydCB7XG4gIEltYWdlQ29uZmlnLFxuICBpbWFnZUNvbmZpZ0RlZmF1bHQsXG4gIExvYWRlclZhbHVlLFxuICBWQUxJRF9MT0FERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgOyhnbG9iYWwgYXMgYW55KS5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlXG59XG5cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gWydsYXp5JywgJ2VhZ2VyJywgdW5kZWZpbmVkXSBhcyBjb25zdFxudHlwZSBMb2FkaW5nVmFsdWUgPSB0eXBlb2YgVkFMSURfTE9BRElOR19WQUxVRVNbbnVtYmVyXVxuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlciA9IChyZXNvbHZlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXJQcm9wcyA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgd2lkdGg6IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG59XG5cbnR5cGUgRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMgPSBJbWFnZUxvYWRlclByb3BzICYgeyByb290OiBzdHJpbmcgfVxuXG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcDxcbiAgTG9hZGVyVmFsdWUsXG4gIChwcm9wczogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuPihbXG4gIFsnaW1naXgnLCBpbWdpeExvYWRlcl0sXG4gIFsnY2xvdWRpbmFyeScsIGNsb3VkaW5hcnlMb2FkZXJdLFxuICBbJ2FrYW1haScsIGFrYW1haUxvYWRlcl0sXG4gIFsnZGVmYXVsdCcsIGRlZmF1bHRMb2FkZXJdLFxuXSlcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIEltZ0VsZW1lbnRTdHlsZSA9IE5vbk51bGxhYmxlPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ11bJ3N0eWxlJ10+XG5cbmV4cG9ydCB0eXBlIEltYWdlUHJvcHMgPSBPbWl0PFxuICBKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddLFxuICAnc3JjJyB8ICdzcmNTZXQnIHwgJ3JlZicgfCAnd2lkdGgnIHwgJ2hlaWdodCcgfCAnbG9hZGluZycgfCAnc3R5bGUnXG4+ICYge1xuICBzcmM6IHN0cmluZ1xuICBsb2FkZXI/OiBJbWFnZUxvYWRlclxuICBxdWFsaXR5PzogbnVtYmVyIHwgc3RyaW5nXG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2FkaW5nPzogTG9hZGluZ1ZhbHVlXG4gIHVub3B0aW1pemVkPzogYm9vbGVhblxuICBvYmplY3RGaXQ/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdEZpdCddXG4gIG9iamVjdFBvc2l0aW9uPzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RQb3NpdGlvbiddXG59ICYgKFxuICAgIHwge1xuICAgICAgICB3aWR0aD86IG5ldmVyXG4gICAgICAgIGhlaWdodD86IG5ldmVyXG4gICAgICAgIC8qKiBAZGVwcmVjYXRlZCBVc2UgYGxheW91dD1cImZpbGxcImAgaW5zdGVhZCAqL1xuICAgICAgICB1bnNpemVkOiB0cnVlXG4gICAgICB9XG4gICAgfCB7IHdpZHRoPzogbmV2ZXI7IGhlaWdodD86IG5ldmVyOyBsYXlvdXQ6ICdmaWxsJyB9XG4gICAgfCB7XG4gICAgICAgIHdpZHRoOiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgbGF5b3V0PzogRXhjbHVkZTxMYXlvdXRWYWx1ZSwgJ2ZpbGwnPlxuICAgICAgfVxuICApXG5cbmNvbnN0IHtcbiAgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzLFxuICBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzLFxuICBsb2FkZXI6IGNvbmZpZ0xvYWRlcixcbiAgcGF0aDogY29uZmlnUGF0aCxcbiAgZG9tYWluczogY29uZmlnRG9tYWlucyxcbn0gPVxuICAoKHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIGFzIGFueSkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZSxcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbLi4uc2l6ZXMubWF0Y2hBbGwoLyhefFxccykoMT9cXGQ/XFxkKXZ3L2cpXS5tYXAoKG0pID0+XG4gICAgICBwYXJzZUludChtWzJdKVxuICAgIClcbiAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxXG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcihcbiAgICAgICAgICAocykgPT4gcyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgKSxcbiAgICAgICAga2luZDogJ3cnLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB3aWR0aHM6IGFsbFNpemVzLCBraW5kOiAndycgfVxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8XG4gICAgbGF5b3V0ID09PSAnZmlsbCcgfHxcbiAgICBsYXlvdXQgPT09ICdyZXNwb25zaXZlJ1xuICApIHtcbiAgICByZXR1cm4geyB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLCBraW5kOiAndycgfVxuICB9XG5cbiAgY29uc3Qgd2lkdGhzID0gW1xuICAgIC4uLm5ldyBTZXQoXG4gICAgICAvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICBbd2lkdGgsIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi9dLm1hcChcbiAgICAgICAgKHcpID0+IGFsbFNpemVzLmZpbmQoKHApID0+IHAgPj0gdykgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgIClcbiAgICApLFxuICBdXG4gIHJldHVybiB7IHdpZHRocywga2luZDogJ3gnIH1cbn1cblxudHlwZSBHZW5JbWdBdHRyc0RhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgbG9hZGVyOiBJbWFnZUxvYWRlclxuICB3aWR0aD86IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG4gIHNpemVzPzogc3RyaW5nXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHNyY1NldDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQsXG4gIGxheW91dCxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG4gIHNpemVzLFxuICBsb2FkZXIsXG59OiBHZW5JbWdBdHRyc0RhdGEpOiBHZW5JbWdBdHRyc1Jlc3VsdCB7XG4gIGlmICh1bm9wdGltaXplZCkge1xuICAgIHJldHVybiB7IHNyYywgc3JjU2V0OiB1bmRlZmluZWQsIHNpemVzOiB1bmRlZmluZWQgfVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aHMsIGtpbmQgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcylcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgcmV0dXJuIHtcbiAgICBzcmM6IGxvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KSxcbiAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICBzcmNTZXQ6IHdpZHRoc1xuICAgICAgLm1hcChcbiAgICAgICAgKHcsIGkpID0+XG4gICAgICAgICAgYCR7bG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICAgIH0ke2tpbmR9YFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW50KHg6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHhcbiAgfVxuICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSB7XG4gIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpXG4gIGlmIChsb2FkKSB7XG4gICAgcmV0dXJuIGxvYWQoeyByb290OiBjb25maWdQYXRoLCAuLi5sb2FkZXJQcm9wcyB9KVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7VkFMSURfTE9BREVSUy5qb2luKFxuICAgICAgJywgJ1xuICAgICl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyAnaW5oZXJpdCcgOiAnaGlkZGVuJyxcblxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17c2V0UmVmfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc2l6ZXM9e2ltZ0F0dHJpYnV0ZXMuc2l6ZXN9XG4gICAgICAgICAgPjwvbGluaz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW11cblxuICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpXG4gICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpXG5cbiAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICBsZXQgcGFyc2VkU3JjOiBVUkxcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJlZFwiOiBcIkluZGV4X3JlZF9faXc5ZC1cIixcblx0XCJ0aHVtYlwiOiBcIkluZGV4X3RodW1iX18zR284WFwiLFxuXHRcInBhZGRpbmdcIjogXCJJbmRleF9wYWRkaW5nX19fLWRId1wiLFxuXHRcInBhZGRpbmcxXCI6IFwiSW5kZXhfcGFkZGluZzFfXzMteEdTXCIsXG5cdFwibGlnaHRfZ3JheV9iZ1wiOiBcIkluZGV4X2xpZ2h0X2dyYXlfYmdfX2loNkpCXCIsXG5cdFwibmF2X2xpbmtcIjogXCJJbmRleF9uYXZfbGlua19fd09FRkpcIixcblx0XCJsZWZ0X3NpZGVcIjogXCJJbmRleF9sZWZ0X3NpZGVfXzF3bHlfXCIsXG5cdFwidGV4dF9jZW50ZXJcIjogXCJJbmRleF90ZXh0X2NlbnRlcl9fMkM1clVcIixcblx0XCJjYXRlZ29yeVwiOiBcIkluZGV4X2NhdGVnb3J5X18yNWRpclwiLFxuXHRcImxpc3RfaWNvblwiOiBcIkluZGV4X2xpc3RfaWNvbl9fVjdINnJcIixcblx0XCJidG4tcHJpbWFyeVwiOiBcIkluZGV4X2J0bi1wcmltYXJ5X18zV3RSb1wiLFxuXHRcInBhcmFncmFwaFwiOiBcIkluZGV4X3BhcmFncmFwaF9fMUp2OWhcIixcblx0XCJsaXN0X2dyb3VwX2l0ZW1cIjogXCJJbmRleF9saXN0X2dyb3VwX2l0ZW1fXzFLUXN1XCIsXG5cdFwibGlzdC1ncm91cC1pdGVtXCI6IFwiSW5kZXhfbGlzdC1ncm91cC1pdGVtX18xSlhqVVwiLFxuXHRcInRhYmxlXCI6IFwiSW5kZXhfdGFibGVfXzNJU1UzXCIsXG5cdFwicGFkZGluZ19ub25lXCI6IFwiSW5kZXhfcGFkZGluZ19ub25lX18ySklNVFwiLFxuXHRcInBhZGRpbmdfMTBcIjogXCJJbmRleF9wYWRkaW5nXzEwX18zV3IxQ1wiLFxuXHRcImJvcmRlcl9ub25lXCI6IFwiSW5kZXhfYm9yZGVyX25vbmVfX2ZQN2NJXCIsXG5cdFwibWFyZ2luXzEwXCI6IFwiSW5kZXhfbWFyZ2luXzEwX18xdFkydVwiLFxuXHRcImNsaWVudHNcIjogXCJJbmRleF9jbGllbnRzX18xdHVlOFwiLFxuXHRcIndoaXRlXCI6IFwiSW5kZXhfd2hpdGVfXzVwbEdzXCIsXG5cdFwiaW1nX2xpbmVcIjogXCJJbmRleF9pbWdfbGluZV9fU3FNZ0lcIixcblx0XCJzZWN0aW9uXCI6IFwiSW5kZXhfc2VjdGlvbl9faW1tMkRcIixcblx0XCJmb290ZXJcIjogXCJJbmRleF9mb290ZXJfXzNrc0dBXCIsXG5cdFwiZ3JheV9jb2xvclwiOiBcIkluZGV4X2dyYXlfY29sb3JfXzI2dU95XCIsXG5cdFwiZm9vdF90aXRsZVwiOiBcIkluZGV4X2Zvb3RfdGl0bGVfXzFSN3JTXCIsXG5cdFwiZm9vdF90aXRsZTFcIjogXCJJbmRleF9mb290X3RpdGxlMV9fMjdXdGxcIixcblx0XCJzaXplXCI6IFwiSW5kZXhfc2l6ZV9fRk5DSDJcIixcblx0XCJmb290X2xpc3RcIjogXCJJbmRleF9mb290X2xpc3RfXzNTVlozXCIsXG5cdFwibGlzdFwiOiBcIkluZGV4X2xpc3RfX0J6MG95XCIsXG5cdFwicm91bmRcIjogXCJJbmRleF9yb3VuZF9fMVcyaHRcIixcblx0XCJyb3VuZDFcIjogXCJJbmRleF9yb3VuZDFfXzJmeV9iXCJcbn07XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYXR0cmlidXRlcywgcmVhY3QgYXMgSG9tZUNvbnRlbnQgfSBmcm9tICcuLi9jb250ZW50L2hvbWUubWQnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0luZGV4Lm1vZHVsZS5jc3MnXG5pbXBvcnQgU2xpZGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcidcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1JvdydcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJ1xuaW1wb3J0IExpc3RHcm91cCBmcm9tICdyZWFjdC1ib290c3RyYXAvTGlzdEdyb3VwJ1xuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnXG5pbXBvcnQgVGFibGUgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1RhYmxlJ1xuaW1wb3J0IENsaWVudFNsaWRlIGZyb20gJy4uL2NvbXBvbmVudHMvQ2xpZW50U2xpZGUnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbi8vIGltcG9ydCB0aGUgbGlicmFyeVxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgeyBmYXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5cblxuLy8gaW1wb3J0IHlvdXIgaWNvbnNcblxubGlicmFyeS5hZGQoZmFzKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBsZXQgeyB0aXRsZSwgY2F0cyB9ID0gYXR0cmlidXRlcztcbiAgcmV0dXJuIDxkaXY+XG4gICAgIDxIZWFkPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9pZGVudGl0eS5uZXRsaWZ5LmNvbS92MS9uZXRsaWZ5LWlkZW50aXR5LXdpZGdldC5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAgPFNsaWRlLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICAgXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuPGgzIGNsYXNzTmFtZT17c3R5bGVzLnBhZGRpbmd9ICA+e3RpdGxlfVxuPC9oMz5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8Q29udGFpbmVyPlxuICAgICAgIDxIb21lQ29udGVudCAvPlxuICAgICAgIDxSb3c+XG4gICAgICAge2NhdHMubWFwKChjYXQsIGspID0+IChcbiAgICAgICAgIFxuICAgIDxDb2wgeHM9ezZ9IG1kPXs0fSBrZXk9e2t9PlxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnRodW1ifT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGNvbGlvLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cIkNsb3VkIGNvbXB1dGluZyBhcmNoaXRlY3R1cmUgXCIgc3JjPVwiL2ltYWdlcy93aGF0X3dlL3Byb2R1Y3RfZGV2ZWxvcG1lbnQucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBhbHQ9XCJwcm9kdWN0IGRldmVsb3BtZW50XCIgLz4gXG4gICAgICAgICAgICAgICAgICAgICAgPGgxICBjbGFzc05hbWU9XCJjb2xvci10ZXh0XCI+e2NhdC5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgIGNsYXNzTmFtZT1cImNvbG9yLXRleHQgaC0xMjVcIj4ge2NhdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJzbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFJlYWQgbW9yZSAmbmJzcDsmbmJzcDsmbmJzcDsgXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFzJywgJ2NoZXZyb24tY2lyY2xlLXJpZ2h0J119IC8+XG5cblxuICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgPC9Db2w+XG4gICAgXG4gIFxuICAgICAgKSl9XG4gIDwvUm93PlxuICBcbjwvQ29udGFpbmVyPlxuICAgICA8L3NlY3Rpb24+XG4gICAgIFxuey8qIHdoeSB1cyAqL31cbjxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0X2dyYXlfYmd9PlxuICBcblxuICA8Q29udGFpbmVyPlxuICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMucGFkZGluZ30+IFdIWSBVUyA8L2gzPlxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF9jZW50ZXJ9PlxuICAgIDxMaXN0R3JvdXAgaG9yaXpvbnRhbCBzdHlsZT17eyBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnfX0+XG4gIFxuICAgIDxMaXN0R3JvdXAuSXRlbT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PlxuICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5saXN0X2ljb259IGljb249e1snZmFzJywgJ3VzZXItYWx0J119IC8+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PiBDdXN0b21lciBGb2N1czwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gIFxuICAgIDxMaXN0R3JvdXAuSXRlbT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PlxuICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5saXN0X2ljb259IGljb249e1snZmFzJywgJ3Ryb3BoeSddfSAvPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT4gUGFzc2lvbiBmb3IgU3VjY2VzczwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gIFxuICBcbiAgICA8TGlzdEdyb3VwLkl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT5cbiAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9pY29ufSBpY29uPXtbJ2ZhcycsICdsYXB0b3AnXX0gLz5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFncmFwaH0+IFRlY2huaWNhbCBLbm93bGVkZ2U8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpc3RHcm91cC5JdGVtPlxuICBcbiAgICA8TGlzdEdyb3VwLkl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT5cbiAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9pY29ufSBpY29uPXtbJ2ZhcycsICdib29rJ119IC8+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PiAgSW50ZWdyaXR5ICYgQWNjb3VudGFiaWxpdHk8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpc3RHcm91cC5JdGVtPlxuICBcbiAgICA8TGlzdEdyb3VwLkl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT5cbiAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9pY29ufSBpY29uPXtbJ2ZhcycsICdmcm93biddfSAvPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT4gICBFeGNlbGxlbmNlIGluIFNlcnZpY2UgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgXG4gIFxuICA8L0xpc3RHcm91cD5cbiAgICA8L2Rpdj5cbiAgPGJyPjwvYnI+PGJyPjwvYnI+XG4gICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnBhZGRpbmd9PiBPVVIgTUFOVFJBIDwvaDM+XG4gIDxSb3c+XG4gIDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbl8xMH0+XG4gICAgPENhcmQuQm9keSBjbGFzc05hbWU9e3N0eWxlcy5wYWRkaW5nXzEwfT5cbiAgICA8VGFibGUgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxuICAgIDx0Ym9keT5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmJvcmRlcl9ub25lfT5cbiAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XCI2MFwiIGhlaWdodD1cIjYwXCIgc3JjPVwiL2ltYWdlcy9pbm5vdmF0ZS5zdmdcIi8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5ib3JkZXJfbm9uZX0+XG4gICAgICAgICAgPGg0PklOTk9WQVRFPC9oND5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgIElubm92YXRpb24gaXMgdGhlIGFiaWxpdHkgdG8gc2VlIGNoYW5nZSBhcyBhbiBvcHBvcnR1bml0eSB0aGF0IHVubG9ja3MgbmV3IHZhbHVlLiBUaGVyZSBpcyBhIHdheSB0byBkbyBpdCBiZXR0ZXIg4oCTIHdlIGFyZSBmaW5kaW5nIGl0LnNcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gIDwvVGFibGU+XG4gICAgPC9DYXJkLkJvZHk+XG4gIDwvQ2FyZD5cbiAgXG4gIDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbl8xMH0+XG4gICAgPENhcmQuQm9keSBjbGFzc05hbWU9e3N0eWxlcy5wYWRkaW5nXzEwfT5cbiAgICA8VGFibGUgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxuICAgIDx0Ym9keT5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmJvcmRlcl9ub25lfT5cbiAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XCI4MFwiIGhlaWdodD1cIjgwXCIgc3JjPVwiL2ltYWdlcy9pbXBsZW1lbnRhdGlvbi5zdmdcIi8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5ib3JkZXJfbm9uZX0+XG4gICAgICAgICAgPGg0PklNUExFTUVOVDwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICBBbiBJbm5vdmF0aW9uIGlkZWEgbmVlZHMgdGhlIHJpZ2h0IGltcGxlbWVudGF0aW9uIHRvIGZpbmQgc3VjY2Vzcy4gSXQgaXMgbm90IGp1c3QgdGhlIGFjdGlvbiwgYnV0IHJpZ2h0IGFjdGlvbiBkZXRlcm1pbmVzIHRoZSBwcm9kdWN0IGZhdGUuIFdlIGZvY3VzIG9uIHRoZSByaWdodCB3YXkgb2YgYnVpbGRpbmcgdGhlIHByb2R1Y3Qgd2l0aCB0aGUgcmlnaHQgdGVjaG5vbG9neS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gIDwvVGFibGU+XG4gICAgPC9DYXJkLkJvZHk+XG4gIDwvQ2FyZD5cbiAgXG4gIDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbl8xMH0+XG4gICAgPENhcmQuQm9keSBjbGFzc05hbWU9e3N0eWxlcy5wYWRkaW5nX25vbmV9PlxuICAgIDxUYWJsZSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0+XG4gICAgPHRib2R5PlxuICAgICAgPHRyPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuYm9yZGVyX25vbmV9PlxuICAgICAgICAgIDxJbWFnZSB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjEyMFwiIHNyYz1cIi9pbWFnZXMvaXRlcmF0aW9uLnN2Z1wiLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmJvcmRlcl9ub25lfT5cbiAgICAgICAgICA8aDQ+SVRFUkFURTwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICBDaGFuZ2UgaXMgdGhlIG9ubHkgdGhpbmcgdGhhdCBpcyBjb25zdGFudC4gQSBwcm9kdWN0IHRoYXQgZG9lcyBub3QgaXRlcmF0ZSBoYXMgYW4gZXhwaXJ5IGRhdGUgdGFnZ2VkIHRvIGl0IGFzIHNvb24gYXMgaXQgY29tZXMgb3V0LiBUaHJvdWdoIGFuIGl0ZXJhdGl2ZSBwcm9jZXNzLCB3ZSBjYW4ga2VlcCB0aGUgb3JpZ2luYWwgZm9jdXMsIHZhbGlkYXRpbmcgZm9yIGN1cnJlbnQgc2l0dWF0aW9ucywgaGVscGluZyB1cyBrZWVwIHRoZSBpZGVhcyBmcmVzaCBhbmQgcHJvZHVjdHMgY29tcGV0aXRpdmUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuICA8L1RhYmxlPlxuICAgIDwvQ2FyZC5Cb2R5PlxuICA8L0NhcmQ+XG4gIDwvUm93PlxuICBcbiAgPC9Db250YWluZXI+XG4gIFxuICA8YnIvPlxuICA8YnIvPlxuICBcbiAgPC9zZWN0aW9uPlxuXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudHN9PlxuICBcbiAgPENvbnRhaW5lcj5cbiAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnBhZGRpbmcxfT4gT1VSIEFNQVpJTkcgQ0xJRU5UU1xuICAgPC9oMz5cbiAgPENsaWVudFNsaWRlLz5cbiAgPC9Db250YWluZXI+XG4gIDwvc2VjdGlvbj5cbiAgXG4gIFxuICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgPENvbnRhaW5lcj5cbiAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnBhZGRpbmd9PiBPVVIgVEVDSE5PTE9HSUVTXG4gIFxuICAgPC9oMz5cbiAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF9jZW50ZXJ9PiBXRSBUUlVTVCBJTiBMT05HIExBU1RJTkcgUEFSVE5FUlNISVBTIFdJVEggVEhFIE1PU1QgSU1QT1JUQU5UIEJSQU5EUyBPTiBUSEUgTUFSS0VUXG4gIDwvcD5cbiAgXG4gIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL3RlY2gucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW1nX2xpbmV9IHdpZHRoPVwiMjMxNFwiIGhlaWdodD1cIjcxOFwiIC8+XG4gIDwvQ29udGFpbmVyPlxuICA8L3NlY3Rpb24+XG4gIDxici8+PGJyLz48YnIvPlxuICBcbiAgPEZvb3Rlci8+XG5cblxuICA8L2Rpdj5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9DYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQ29sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0xpc3RHcm91cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTmF2XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZWxhc3RpYy1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==