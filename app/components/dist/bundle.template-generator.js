(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(3);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TplGenController = function TplGenController() {
	  _classCallCheck(this, TplGenController);
	};
	
	exports["default"] = TplGenController;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var TplGenDirective = (function () {
	  function TplGenDirective() {
	    _classCallCheck(this, TplGenDirective);
	
	    this.restrict = 'AE';
	    this.templateUrl = 'sanji-bundle-template-generator.html';
	  }
	
	  _createClass(TplGenDirective, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      TplGenDirective.instance = new TplGenDirective();
	      return TplGenDirective.instance;
	    }
	  }]);
	
	  return TplGenDirective;
	})();
	
	exports['default'] = TplGenDirective;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(4);
	
	var _controllerJs = __webpack_require__(1);
	
	var _controllerJs2 = _interopRequireDefault(_controllerJs);
	
	var _directiveJs = __webpack_require__(2);
	
	var _directiveJs2 = _interopRequireDefault(_directiveJs);
	
	if (false) {
	  // eslint-disable-line no-undef
	  require('bootstrap');
	  require('angular');
	  require('angular-animate');
	  require('angular-sanji-window');
	}
	
	angular.module('webapp.template-generator', []).controller('TplGenController', _controllerJs2['default']).directive('templateGenerator', _directiveJs2['default'].directiveFactory);

/***/ },
/* 4 */
/***/ function(module, exports) {

	var v1="<p>template generator</p>";
	window.angular.module(["ng"]).run(["$templateCache",function(c){c.put("sanji-bundle-template-generator.html", v1)}]);
	module.exports=v1;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=bundle.template-generator.js.map