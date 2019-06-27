module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__("Bhuq");
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js


function getPrototypeOf_getPrototypeOf(o) {
  getPrototypeOf_getPrototypeOf = set_prototype_of_default.a ? get_prototype_of_default.a : function _getPrototypeOf(o) {
    return o.__proto__ || get_prototype_of_default()(o);
  };
  return getPrototypeOf_getPrototypeOf(o);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./common/BodyCopy/styles.scss
var styles = __webpack_require__("oxQi");
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// CONCATENATED MODULE: ./common/BodyCopy/index.js



var BodyCopy_BodyCopy = function BodyCopy(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return external_react_default.a.createElement("p", {
    className: "".concat(styles_default.a.body, " ").concat(className)
  }, children);
};

/* harmony default export */ var common_BodyCopy = (BodyCopy_BodyCopy);
// EXTERNAL MODULE: ./common/BodyCopySmall/styles.scss
var BodyCopySmall_styles = __webpack_require__("goGh");
var BodyCopySmall_styles_default = /*#__PURE__*/__webpack_require__.n(BodyCopySmall_styles);

// CONCATENATED MODULE: ./common/BodyCopySmall/index.js



var BodyCopySmall_BodyCopySmall = function BodyCopySmall(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return external_react_default.a.createElement("p", {
    className: "".concat(BodyCopySmall_styles_default.a.body, " ").concat(className)
  }, children);
};

/* harmony default export */ var common_BodyCopySmall = (BodyCopySmall_BodyCopySmall);
// CONCATENATED MODULE: ./common/index.js


// EXTERNAL MODULE: ./components/Homepage/styles.scss
var Homepage_styles = __webpack_require__("uEI6");
var Homepage_styles_default = /*#__PURE__*/__webpack_require__.n(Homepage_styles);

// CONCATENATED MODULE: ./components/Homepage/index.js





var Homepage_Title = function Title() {
  return external_react_default.a.createElement("h1", {
    className: Homepage_styles_default.a.title
  }, "Gummi");
};

var Homepage_SubTitle = function SubTitle() {
  return external_react_default.a.createElement("h3", {
    className: Homepage_styles_default.a.subTitle
  }, "Software Engineering Consultancy");
};

var Homepage_Technologies = function Technologies() {
  return external_react_default.a.createElement("div", {
    className: Homepage_styles_default.a.technologies
  }, external_react_default.a.createElement(common_BodyCopy, {
    className: Homepage_styles_default.a.techCopy
  }, "Specialising in Javascript and associated frontend technologies."));
};

var Homepage_Footer = function Footer() {
  return external_react_default.a.createElement("div", {
    className: Homepage_styles_default.a.footer
  }, external_react_default.a.createElement(common_BodyCopySmall, {
    className: Homepage_styles_default.a.attribution
  }, "Icon made by ", external_react_default.a.createElement("a", {
    href: "https://www.flaticon.com/authors/eucalyp",
    title: "Eucalyp"
  }, "Eucalyp"), " and is licensed by ", external_react_default.a.createElement("a", {
    href: "http://creativecommons.org/licenses/by/3.0/",
    title: "Creative Commons BY 3.0",
    target: "_blank"
  }, "CC 3.0 BY")), external_react_default.a.createElement(common_BodyCopySmall, {
    className: Homepage_styles_default.a.footerCopy
  }, "Registered in England & Wales No: 11531499"));
};

var Homepage_GetInTouch = function GetInTouch() {
  return external_react_default.a.createElement("div", {
    className: Homepage_styles_default.a.getInTouch
  }, external_react_default.a.createElement("a", {
    href: "mailto:jamieallen59@gmail.com",
    className: Homepage_styles_default.a.emailLink
  }, external_react_default.a.createElement("img", {
    className: Homepage_styles_default.a.businessCard,
    src: "/static/business-card.png"
  }), external_react_default.a.createElement(common_BodyCopy, null, "Get in touch")));
};

var Homepage_Helmet = function Helmet() {
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Gummi"), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/apple-touch-icon.png"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/static/favicon-32x32.png"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/static/favicon-16x16.png"
  }), external_react_default.a.createElement("link", {
    rel: "manifest",
    href: "/static/site.webmanifest"
  }), external_react_default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#da532c"
  }), external_react_default.a.createElement("meta", {
    name: "theme-color",
    content: "#ffffff"
  }));
};

var Homepage_Homepage = function Homepage() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Homepage_Helmet, null), external_react_default.a.createElement("div", {
    className: Homepage_styles_default.a.wrapper
  }, external_react_default.a.createElement("div", {
    className: Homepage_styles_default.a.content
  }, external_react_default.a.createElement(Homepage_Title, null), external_react_default.a.createElement(Homepage_SubTitle, null), external_react_default.a.createElement(Homepage_Technologies, null), external_react_default.a.createElement(Homepage_GetInTouch, null)), external_react_default.a.createElement(Homepage_Footer, null)));
};

/* harmony default export */ var components_Homepage = (Homepage_Homepage);
// CONCATENATED MODULE: ./general/Fonts.js
var FontFaceObserver = __webpack_require__("SspK");

var Fonts = function Fonts() {
  var link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=PT+Serif&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
  var roboto = new FontFaceObserver('Roboto');
  roboto.load().then(function () {
    document.documentElement.classList.add('roboto');
  });
};

/* harmony default export */ var general_Fonts = (Fonts);
// CONCATENATED MODULE: ./pages/index.js









var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      general_Fonts();
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(components_Homepage, null);
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "SspK":
/***/ (function(module, exports) {

module.exports = require("fontfaceobserver");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "goGh":
/***/ (function(module, exports) {

module.exports = {
	"body": "body___1GEW8"
};

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oxQi":
/***/ (function(module, exports) {

module.exports = {
	"body": "body___hRld0"
};

/***/ }),

/***/ "uEI6":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "wrapper___3PFEl",
	"content": "content____q_V_",
	"title": "title___q5ktf",
	"subTitle": "subTitle___Yt65Y",
	"technologies": "technologies___1I-kr",
	"techCopy": "techCopy___KrFYb",
	"workedWith": "workedWith___1naXg",
	"footer": "footer___26WKH",
	"attribution": "attribution___3SntY",
	"footerCopy": "footerCopy___1idC8",
	"getInTouch": "getInTouch___3aDvr",
	"emailLink": "emailLink___2VKFZ",
	"businessCard": "businessCard___1OwVj"
};

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });