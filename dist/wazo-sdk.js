(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"));
	else if(typeof define === 'function' && define.amd)
		define(["axios"], factory);
	else if(typeof exports === 'object')
		exports["@wazo/sdk"] = factory(require("axios"));
	else
		root["@wazo/sdk"] = factory(root["axios"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_axios__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/auth/index.js":
/*!*******************************!*\
  !*** ./src/api/auth/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('api/auth/0.1/token');


/***/ }),

/***/ "./src/api/auth/log-in.js":
/*!********************************!*\
  !*** ./src/api/auth/log-in.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/api/auth/index.js");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token */ "./src/api/auth/token.js");






const handleResponse = (response, callback) => {
  _config__WEBPACK_IMPORTED_MODULE_1__["default"].token = response.data.data.token;
  _token__WEBPACK_IMPORTED_MODULE_3__["default"].set(response.data.data);

  console.log(_token__WEBPACK_IMPORTED_MODULE_3__["default"].get());

  window.localStorage.setItem('wazoAuth', JSON.stringify(response.data.data));

  if (callback) {
    callback(_config__WEBPACK_IMPORTED_MODULE_1__["default"].token);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((params) => {
  const url = `https://${_config__WEBPACK_IMPORTED_MODULE_1__["default"].server}/${___WEBPACK_IMPORTED_MODULE_2__["default"]}`;
  const data = {
    backend: 'wazo_user',
    expiration: params.expiration || 3600,
  };
  const config = {
    auth: {
      username: params.username,
      password: params.password,
    },
  };

  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data, config)
    .then(response => handleResponse(response, params.callback));
});


/***/ }),

/***/ "./src/api/auth/log-out.js":
/*!*********************************!*\
  !*** ./src/api/auth/log-out.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/api/auth/index.js");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token */ "./src/api/auth/token.js");






const handleResponse = (callback) => {
  _token__WEBPACK_IMPORTED_MODULE_3__["default"].data = null;

  window.localStorage.removeItem('wazoAuth');

  if (callback) {
    callback(_config__WEBPACK_IMPORTED_MODULE_1__["default"].token);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((params) => {
  if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].token) {
    const url = `https://${_config__WEBPACK_IMPORTED_MODULE_1__["default"].server}/${___WEBPACK_IMPORTED_MODULE_2__["default"]}/${_config__WEBPACK_IMPORTED_MODULE_1__["default"].token}`;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(url)
      .then(handleResponse(params.callback));
  }
});


/***/ }),

/***/ "./src/api/auth/token.js":
/*!*******************************!*\
  !*** ./src/api/auth/token.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class {
  constructor() {
    this.data = null;
  }

  get() {
    return JSON.parse(this.data).token;
  }

  set(data) {
    this.data = data;
  }

  stringify() {
    return JSON.stringify(this.data);
  }
});


/***/ }),

/***/ "./src/application.js":
/*!****************************!*\
  !*** ./src/application.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_auth_log_in__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/auth/log-in */ "./src/api/auth/log-in.js");
/* harmony import */ var _api_auth_log_out__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/auth/log-out */ "./src/api/auth/log-out.js");



/* harmony default export */ __webpack_exports__["default"] = (class {
  constructor(server) {
    this.logIn = _api_auth_log_in__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.logOut = _api_auth_log_out__WEBPACK_IMPORTED_MODULE_1__["default"];

    this.server = server;
  }
});


/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  server: null,
});


/***/ }),

/***/ "./src/config/init.js":
/*!****************************!*\
  !*** ./src/config/init.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/config/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((params) => {
  _index__WEBPACK_IMPORTED_MODULE_0__["default"].server = params.server;
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application */ "./src/application.js");
/* harmony import */ var _config_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/init */ "./src/config/init.js");
/* harmony import */ var _api_auth_log_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/auth/log-in */ "./src/api/auth/log-in.js");
/* harmony import */ var _api_auth_log_out__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/auth/log-out */ "./src/api/auth/log-out.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  client: _application__WEBPACK_IMPORTED_MODULE_0__["default"],
  init: _config_init__WEBPACK_IMPORTED_MODULE_1__["default"],
  logIn: _api_auth_log_in__WEBPACK_IMPORTED_MODULE_2__["default"],
  logOut: _api_auth_log_out__WEBPACK_IMPORTED_MODULE_3__["default"],
});


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_axios__;

/***/ })

/******/ });
});
//# sourceMappingURL=wazo-sdk.js.map