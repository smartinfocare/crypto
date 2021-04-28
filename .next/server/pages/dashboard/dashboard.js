module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0G5g":
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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gSoM");


/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "8OQS":
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

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

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
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

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
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
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

  if (false) {}

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
    if (false) {}
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
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
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
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "gSoM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Dashboard; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/Header/Header.js


function Home() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
      className: "navbar",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        className: "form-inline",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          className: "form-control mr-sm-2",
          type: "search",
          placeholder: "Search",
          "aria-label": "Search"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          className: "btn btn-outline-dark text-white my-2 my-sm-0",
          type: "submit",
          children: "Search"
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./components/Details/DetailCard.js




function DetailCard() {
  const {
    0: myData,
    1: setMyData
  } = Object(external_react_["useState"])("");
  Object(external_react_["useEffect"])(() => {
    fetData();
  }, []);

  const fetData = async () => {
    const res = await fetch('https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest', {
      method: 'get',
      headers: {
        'X-CMC_PRO_API_KEY': '9737c94c-9839-4ab2-b161-616cefa64abf',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        "Access-Control-Allow-Headers": "x-requested-with, x-requested-by"
      }
    });
    let resData = await res.json();
    setMyData(resData.data);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "mt-5",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-md-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "card-counter-for-icon",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "fa-icon-colom",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
              "aria-hidden": "true",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                className: "my-image",
                src: "http://localhost:3000/bitcoin.png"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
            className: "count-numbers-icon",
            children: "Total Active Crypto Currency"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
            className: "count-numbers-icon my-heading text-success",
            children: myData.active_cryptocurrencies
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-md-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "card-counter-for-icon",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "fa-icon-colom",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
              "aria-hidden": "true",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                className: "my-image",
                src: "http://localhost:3000/bitcoin.png"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
            className: "count-numbers-icon",
            children: "Total Crypto Currency"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
            className: "count-numbers-icon my-heading text-success",
            children: myData.total_cryptocurrencies
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-md-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "card-counter-for-icon",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "fa-icon-colom",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
              "aria-hidden": "true",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                className: "my-image",
                src: "http://localhost:3000/bitcoin.png"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
            className: "count-numbers-icon",
            children: "Active Market Caps"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
            className: "count-numbers-icon my-heading text-success",
            children: myData.active_market_pairs
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-md-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "card-counter-for-icon",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "fa-icon-colom",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
              "aria-hidden": "true",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                className: "my-image",
                src: "http://localhost:3000/bitcoin.png"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
            className: "count-numbers-icon",
            children: "Coin Volume"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
            className: "count-numbers-icon my-heading text-success",
            children: myData.defi_24h_percentage_change.toFixed(2)
          })]
        })
      })]
    })
  });
}
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__("t3hY");

// CONCATENATED MODULE: ./components/Graph/Graph.js



const lineData = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    fill: false,
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgba(255, 99, 132, 0.2)'
  }]
};
const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};
const Graph_data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)']
  }]
};
function Graph() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "mt-5",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "row ",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-md-6",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "card-body my",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Line"], {
            data: lineData,
            options: options
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-md-6 my-card-margin",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "card-body",
          children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_chartjs_2_["Line"], {
            data: lineData,
            options: options
          })]
        })
      })]
    })
  });
}
// CONCATENATED MODULE: ./components/Table/Table.js



var axios = __webpack_require__("zr5I");


function Table() {
  const data = [{
    id: 1,
    price: "1500",
    amount: "52000",
    total: "$53500"
  }, {
    id: 2,
    price: "1500",
    amount: "52000",
    total: "$53500"
  }, {
    id: 3,
    price: "1500",
    amount: "52000",
    total: "$53500"
  }, {
    id: 4,
    price: "1500",
    amount: "52000",
    total: "$53500"
  }, {
    id: 8,
    price: "1500",
    amount: "52000",
    total: "$53500"
  }, {
    id: 9,
    price: "1500",
    amount: "52000",
    total: "$53500"
  }, {
    id: 10,
    price: "1500",
    amount: "52000",
    total: "$53500"
  }, {
    id: 11,
    price: "1500",
    amount: "52000",
    total: "$53500"
  }];
  Object(external_react_["useEffect"])(() => {
    fetData();
  }, []);

  const fetData = async () => {
    const res = await fetch('https://cors-anywhere.herokuapp.com/https://apiv2.bitcoinaverage.com/constants/exchangerates/global', {
      method: 'get',
      headers: {
        'x-ba-key': 'MGQ3ODg5MWJhN2NjNGU1ZTkzMDQzZDM0YWQ2MzgwZTM',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        "Access-Control-Allow-Headers": "x-requested-with, x-requested-by"
      }
    });
    const coountryData = await res.json();
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "mt-5",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "row text-white",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-md-6",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "card-body my-table-card",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-md-11",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                className: "my-heading",
                children: "Sell Order"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-md-1",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-three-dots-vertical",
                viewBox: "0 0 16 16",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                  d: "M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                })
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "row mt-2",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-md-12",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "dropdown",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  className: "btn btn-secondary dropdown-toggle",
                  href: "#",
                  role: "button",
                  id: "dropdownMenuLink",
                  "data-toggle": "dropdown",
                  "aria-haspopup": "true",
                  "aria-expanded": "false",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    "aria-hidden": "true",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      className: "my-image-white-table  ",
                      src: "http://localhost:3000/whitelitecoin.png"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    className: "t-text",
                    children: "Lite coin"
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "dropdown-menu",
                  "aria-labelledby": "dropdownMenuLink",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    className: "dropdown-item",
                    href: "#",
                    children: "Action"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    className: "dropdown-item",
                    href: "#",
                    children: "Another action"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    className: "dropdown-item",
                    href: "#",
                    children: "Something else here"
                  })]
                })]
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("table", {
            className: "table mt-3 my-table",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "my-heading",
                    children: "Price"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "my-heading",
                    children: "Amount"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "my-heading",
                    children: "Total"
                  })
                })]
              })
            }), data.map(element => /*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: element.price
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: element.amount
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: element.total
                })]
              })
            }, element.id))]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
          className: "btn mt-button-table",
          children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi my-ico bi-arrow-down-square-fill",
            viewBox: "0 0 16 16",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"
            })
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-md-6",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "card-body my-table-card",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-md-11",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                className: "my-heading",
                children: "Buy Order"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-md-1",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-three-dots-vertical",
                viewBox: "0 0 16 16",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                  d: "M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                })
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "row mt-2",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-md-12",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "dropdown",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  className: "btn btn-secondary dropdown-toggle",
                  href: "#",
                  role: "button",
                  id: "dropdownMenuLink",
                  "data-toggle": "dropdown",
                  "aria-haspopup": "true",
                  "aria-expanded": "false",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    "aria-hidden": "true",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      className: "my-image-white-table",
                      src: "http://localhost:3000/whitemonero.png"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    className: "t-text",
                    children: "Monero"
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "dropdown-menu",
                  "aria-labelledby": "dropdownMenuLink",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    className: "dropdown-item",
                    href: "#",
                    children: "Action"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    className: "dropdown-item",
                    href: "#",
                    children: "Another action"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    className: "dropdown-item",
                    href: "#",
                    children: "Something else here"
                  })]
                })]
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("table", {
            className: "table mt-3 my-table",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "my-heading",
                    children: "Price"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "my-heading",
                    children: "Amount"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "my-heading",
                    children: "Total"
                  })
                })]
              })
            }), data.map(element => /*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: element.price
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: element.amount
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: element.total
                })]
              })
            }, element.id))]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
          className: "btn mt-button-table",
          children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-arrow-down-square-fill my-ico",
            viewBox: "0 0 16 16",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"
            })
          })]
        })]
      })]
    })
  });
}
// CONCATENATED MODULE: ./components/Tiles/Tiles.js


function Tile() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "row mt-5",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-md-6",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "card-body newcard1",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
            className: "card-title my-heading",
            children: "Main Balance"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "80000"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-md-12 my-card-margin",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "row ",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-md-4",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "card-text my-heading",
                    children: "Valid to"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "card-text my-heading",
                    children: "CardHolder"
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-md-4",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "card-text",
                    children: "8/21"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "card-text",
                    children: "Yash Kumar"
                  })
                })]
              })]
            })
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-md-6",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "card-body newcard2",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
            className: "card-title my-heading",
            children: "Main Balance"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "80000"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-md-12 my-card-margin",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-md-4",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "card-text my-heading",
                    children: "Valid to"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "card-text my-heading",
                    children: "CardHolder"
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-md-4",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "card-text",
                    children: "8/21"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "card-text",
                    children: "Yash Kumar"
                  })
                })]
              })]
            })
          })]
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "row mt-5",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-md-6",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "card-body newcard3",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
            className: "card-title my-heading",
            children: "Main Balance"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "80000"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-md-12 my-card-margin",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-md-4",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "card-text my-heading",
                    children: "Valid to"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "card-text my-heading",
                    children: "CardHolder"
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-md-4",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "card-text",
                    children: "8/21"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "card-text",
                    children: "Yash Kumar"
                  })
                })]
              })]
            })
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-md-6",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "card-body newcard4",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
            className: "card-title my-heading",
            children: "Main Balance"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "80000"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-md-12 my-card-margin",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-md-4",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "card-text my-heading",
                    children: "Valid to"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "card-text my-heading",
                    children: "CardHolder"
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-md-4",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "card-text",
                    children: "8/21"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "card-text",
                    children: "Yash Kumar"
                  })
                })]
              })]
            })
          })]
        })
      })]
    })]
  });
}
// CONCATENATED MODULE: ./components/DashboardForm/DashboardForm.js


function DashboardForm() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "row mt-5",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "col-md-12",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "card-body ",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-md-10",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
              className: "my-heading",
              children: "Quick trade"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "my-para",
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-md-2",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "form-row align-items-center",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "col-auto my-1",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "mr-sm-2 sr-only",
                  htmlFor: "inlineFormCustomSelect",
                  children: "Preference"
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
                  className: "custom-select mr-sm-2",
                  id: "inlineFormCustomSelect",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                    defaultChecked: true,
                    children: "Yearly(2021)"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                    value: "1",
                    children: "One"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                    value: "2",
                    children: "Two"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                    value: "3",
                    children: "Three"
                  })]
                })]
              })
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "form-group",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "input-group mb-2",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "input-group-prepend",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "input-group-text",
                  children: "Account BTC"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                className: "form-control",
                id: "inlineFormInputGroup"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "form-group",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "input-group mb-2",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "input-group-prepend",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "input-group-text",
                  children: "Price BPL"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                className: "form-control",
                id: "inlineFormInputGroup"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "form-group",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "input-group mb-2",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "input-group-prepend",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "input-group-text",
                  children: "Fee (1%)"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                className: "form-control",
                id: "inlineFormInputGroup"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "form-group",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "input-group mb-2",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "input-group-prepend",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "input-group-text",
                  children: "Total BPL"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                className: "form-control",
                id: "inlineFormInputGroup"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-md-10",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "my-para",
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-md-1",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
                type: "submit",
                className: "btn btn-success",
                children: ["buy ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  fill: "currentColor",
                  className: "bi bi-arrow-down-right",
                  viewBox: "0 0 16 16",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                    fillRule: "evenodd",
                    d: "M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"
                  })
                }), "  "]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-md-1",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
                type: "submit",
                className: "btn btn-danger",
                children: ["sell   ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  fill: "currentColor",
                  className: "bi bi-arrow-up-left",
                  viewBox: "0 0 16 16",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                    fillRule: "evenodd",
                    d: "M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z"
                  })
                })]
              })
            })]
          })]
        })]
      })
    })
  });
}
// CONCATENATED MODULE: ./components/TradingActivityTable/TradingActivityTable.js


function TradingActivityTable() {
  const demoData = [{
    id: 1,
    name: "Bitcoin",
    time: "12:41pm",
    price: "+$50000",
    status: "completed"
  }, {
    id: 2,
    name: "Etherum",
    time: "12:41pm",
    price: "+$50000",
    status: "Pending"
  }, {
    id: 3,
    name: "Monero",
    time: "12:41pm",
    price: "-$912",
    status: "Canceled"
  }, {
    id: 4,
    name: "Litecoin",
    time: "12:41pm",
    price: "+$50000",
    status: "completed"
  }, {
    id: 5,
    name: "Bitcoin",
    time: "12:41pm",
    price: "+$50000",
    status: "completed"
  }, {
    id: 6,
    name: "Monero",
    time: "12:41pm",
    price: "-$912",
    status: "Canceled"
  }, {
    id: 7,
    name: "Litecoin",
    time: "12:41pm",
    price: "-$912",
    status: "Canceled"
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "row mt-5",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "col-md-12",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "card-body ",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-md-9",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
              className: "my-heading",
              children: "Recent Tranding Activities"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "my-para",
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-md-3",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "btn-group btn-group-toggle",
              "data-toggle": "buttons",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                className: "btn btn-secondary active",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  type: "radio",
                  name: "options",
                  id: "option1",
                  autoComplete: "off",
                  defaultChecked: true
                }), " Monthly"]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                className: "btn btn-secondary",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  type: "radio",
                  name: "options",
                  id: "option2",
                  autoComplete: "off"
                }), " Weekly"]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                className: "btn btn-secondary",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  type: "radio",
                  name: "options",
                  id: "option3",
                  autoComplete: "off"
                }), " Today"]
              })]
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "my-table",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("table", {
            className: "table",
            children: [demoData.map(element => /*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
                children: [element.status == "completed" ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
                    type: "submit",
                    className: "btn btn-success",
                    children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      fill: "currentColor",
                      className: "bi bi-arrow-down-right",
                      viewBox: "0 0 16 16",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                        fillRule: "evenodd",
                        d: "M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"
                      })
                    }), " "]
                  })
                }) : '', element.status == "Pending" ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
                    type: "submit",
                    className: "btn btn-secondary",
                    children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      fill: "currentColor",
                      className: "bi bi-arrow-up-left",
                      viewBox: "0 0 16 16",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                        fillRule: "evenodd",
                        d: "M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z"
                      })
                    })]
                  })
                }) : '', element.status == "Canceled" ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
                    type: "submit",
                    className: "btn btn-danger",
                    children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      fill: "currentColor",
                      className: "bi bi-arrow-up-left",
                      viewBox: "0 0 16 16",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                        fillRule: "evenodd",
                        d: "M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z"
                      })
                    })]
                  })
                }) : '', element.name == "Bitcoin" ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    "aria-hidden": "true",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      className: "currency ",
                      src: "http://localhost:3000/bitcoin.png"
                    })
                  }), element.name]
                }) : '', element.name == "Litecoin" ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    "aria-hidden": "true",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      className: "currency ",
                      src: "http://localhost:3000/litecoin.png"
                    })
                  }), element.name]
                }) : '', element.name == "Monero" ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    "aria-hidden": "true",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      className: "currency ",
                      src: "http://localhost:3000/monero.png"
                    })
                  }), element.name]
                }) : '', element.name == "Etherum" ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    "aria-hidden": "true",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      className: "currency ",
                      src: "http://localhost:3000/etherum.png"
                    })
                  }), element.name]
                }) : '', /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: element.time
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: element.price
                }), element.status == "completed" ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    className: "badge rounded-pill bg-success",
                    children: "Completed"
                  })
                }) : '', element.status == "Pending" ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    className: "badge rounded-pill bg-secondary",
                    children: "Pending"
                  })
                }) : '', element.status == "Canceled" ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    className: "badge rounded-pill bg-danger",
                    children: "Canceled"
                  })
                }) : '']
              })
            }, element.id)), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {})]
              })
            })]
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
        className: "btn mt-button btn-warning",
        children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "currentColor",
          className: "bi bi-arrow-down-square-fill",
          viewBox: "0 0 16 16",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"
          })
        })]
      })]
    })
  });
}
// CONCATENATED MODULE: ./components/Contact/Contact.js


function Contact() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "row mt-5",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "col-md-12",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "card-body ",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-md-10",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
              className: "my-heading",
              children: "Quick Transfer"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "my-para",
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-md-2",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "form-row align-items-center",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "col-auto my-1",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "mr-sm-2 sr-only",
                  htmlFor: "inlineFormCustomSelect",
                  children: "Preference"
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
                  className: "custom-select mr-sm-2",
                  id: "inlineFormCustomSelect",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                    defaultChecked: true,
                    children: "Yearly(2021)"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                    value: "1",
                    children: "One"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                    value: "2",
                    children: "Two"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                    value: "3",
                    children: "Three"
                  })]
                })]
              })
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("form", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "form-group",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "input-group mb-2",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "input-group-prepend",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "input-group-text ",
                  children: "Account BTC"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                className: "form-control",
                id: "inlineFormInputGroup"
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-md-9",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
              className: "my-heading",
              children: "Recent Contacts"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-md-3 ",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "#",
              className: "my-view",
              children: "viewmore"
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row  mt-4 text-center text-lg-left",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-3 col-md-4 col-6",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "#",
              className: "d-block mb-4 h-100",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                className: "img-fluid img-thumbnail",
                src: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
                alt: ""
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-3 col-md-4 col-6",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "#",
              className: "d-block mb-4 h-100",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                className: "img-fluid img-thumbnail",
                src: "https://source.unsplash.com/aob0ukAYfuI/400x300",
                alt: ""
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-3 col-md-4 col-6",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "#",
              className: "d-block mb-4 h-100",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                className: "img-fluid img-thumbnail",
                src: "https://source.unsplash.com/EUfxH-pze7s/400x300",
                alt: ""
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-3 col-md-4 col-6",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "#",
              className: "d-block mb-4 h-100",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                className: "img-fluid img-thumbnail",
                src: "https://source.unsplash.com/M185_qYH8vg/400x300",
                alt: ""
              })
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-md-5",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "my-para",
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-md-7",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              className: "btn btn-voilet",
              type: "button",
              children: "Transfer Now"
            })
          })]
        })]
      })
    })
  });
}
// CONCATENATED MODULE: ./components/Footer/Footer.js

function Footer() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
    className: "mt-3 text-center"
  });
}
// CONCATENATED MODULE: ./components/information/information.js



function Information(data) {
  const {
    0: cryptoData,
    1: setCryptoData
  } = Object(external_react_["useState"])(data.myData.data);
  const {
    0: isLoad,
    1: setIsLoad
  } = Object(external_react_["useState"])(true);

  const showAll = () => {
    isLoad == true ? setIsLoad(false) : setIsLoad(true);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "row mt-5",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "col-md-12",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "card-body ",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-md-9",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
              className: "my-heading",
              children: "Crypto Information"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "my-para",
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "my-table",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("table", {
            className: "table mt-3 my-table",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "my-heading",
                    children: "Logo"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "my-heading",
                    children: "Name"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "my-heading",
                    children: "Rank"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "my-heading",
                    children: "Price"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "my-heading",
                    children: "Hourly change"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "my-heading",
                    children: "Created At "
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "my-heading",
                    children: "Last Updated"
                  })
                })]
              })
            }), isLoad == true ? cryptoData.slice(0, 10).map(element => /*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: `https://s2.coinmarketcap.com/static/img/coins/64x64/${element.id}.png`,
                    className: "cryptoLogo"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: element.name
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: element.cmc_rank
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                  children: ["$", element.quote.USD.price.toFixed(2)]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: element.quote.USD.percent_change_1h.toFixed(2)
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: `${element.date_added.substring(8, 10)}-${element.date_added.substring(5, 7)}-${element.date_added.substring(0, 4)}`
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: `${element.last_updated.substring(8, 10)}-${element.last_updated.substring(5, 7)}-${element.last_updated.substring(0, 4)}`
                })]
              })
            }, element.id)) : cryptoData.map(element => /*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: `https://s2.coinmarketcap.com/static/img/coins/64x64/${element.id}.png`,
                    className: "cryptoLogo"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: element.name
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: element.cmc_rank
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                  children: ["$", element.quote.USD.price.toFixed(2)]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: element.quote.USD.percent_change_1h.toFixed(2)
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: `${element.date_added.substring(8, 10)}-${element.date_added.substring(5, 7)}-${element.date_added.substring(0, 4)}`
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                  children: `${element.last_updated.substring(8, 10)}-${element.last_updated.substring(5, 7)}-${element.last_updated.substring(0, 4)}`
                })]
              })
            }, element.id))]
          })
        })]
      }), isLoad == true ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
        className: "btn mt-button btn-warning",
        onClick: () => showAll(),
        children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "currentColor",
          className: "bi bi-arrow-down-square-fill",
          viewBox: "0 0 16 16",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"
          })
        })]
      }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
        className: "btn mt-button btn-warning",
        onClick: () => showAll(),
        children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "currentColor",
          className: "bi bi-arrow-down-square-fill",
          viewBox: "0 0 16 16",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"
          })
        })]
      })]
    })
  });
}
// CONCATENATED MODULE: ./pages/dashboard/dashboard.js












function Dashboard(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "allBody",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Home, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "container text-white",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row mt-5",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-md-8",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "h1 dash_heading",
            children: "Dashboard"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-md-2",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
            className: "btn btn-secondary form-control my-dash-drop  dropdown-toggle",
            href: "#",
            role: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
              className: "fa fa-cloud",
              "aria-hidden": "true"
            }), " Medan-IND"]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "dropdown-menu",
            "aria-labelledby": "dropdownMenuLink",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "dropdown-item",
              href: "#",
              children: "Action"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "dropdown-item",
              href: "#",
              children: "Another action"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "dropdown-item",
              href: "#",
              children: "Something else here"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-md-2",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "date",
            className: "form-control textbox-n",
            placeholder: "yash"
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DetailCard, {
        className: "mt-5"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Graph, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Table, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DashboardForm, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Tile, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Information, {
        myData: props.data
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(TradingActivityTable, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Contact, {})]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {})]
  });
}

/***/ }),

/***/ "pVnL":
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

/***/ "t3hY":
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });