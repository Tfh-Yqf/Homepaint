"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************************************************************************************!*\
  !*** C:/Users/谭福华/Desktop/HousePaint/main.js?{"page":"pages%2Fnavigation%2FShouYe%2Fvideo%2Fvideo"} ***!
  \******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_navigation_ShouYe_video_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/navigation/ShouYe/video/video.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_navigation_ShouYe_video_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_navigation_ShouYe_video_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/navigation/ShouYe/video/video'\n        _pages_navigation_ShouYe_video_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_navigation_ShouYe_video_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBZ0Y7QUFDaEYsUUFBUSw2RkFBRztBQUNYLFFBQVEsNkZBQUc7QUFDWCxRQUFRLDZGQUFHO0FBQ1gsZ0JBQWdCLDZGQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9uYXZpZ2F0aW9uL1Nob3VZZS92aWRlby92aWRlby5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9uYXZpZ2F0aW9uL1Nob3VZZS92aWRlby92aWRlbydcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************************************************!*\
  !*** C:/Users/谭福华/Desktop/HousePaint/main.js?{"type":"appStyle"} ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************************************************************!*\
  !*** C:/Users/谭福华/Desktop/HousePaint/App.vue?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/谭福华/Desktop/HousePaint/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "STK",
      "src": "url('~@/static/ttf/STK.ttf')"
    },
    {
      "fontFamily": "pomo",
      "src": "url('~@/static/ttf/bomo.ttf')"
    }
  ],
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */
/*!********************************************************************************************!*\
  !*** C:/Users/谭福华/Desktop/HousePaint/pages/navigation/ShouYe/video/video.nvue?mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.nvue?vue&type=template&id=70200306&mpType=page */ 6);\n/* harmony import */ var _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.nvue?vue&type=script&lang=js&mpType=page */ 37);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 39).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 39).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"3609d16d\",\n  false,\n  _video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/navigation/ShouYe/video/video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcwMjAwMzA2Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIzNjA5ZDE2ZFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9uYXZpZ2F0aW9uL1Nob3VZZS92aWRlby92aWRlby5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**************************************************************************************************************************!*\
  !*** C:/Users/谭福华/Desktop/HousePaint/pages/navigation/ShouYe/video/video.nvue?vue&type=template&id=70200306&mpType=page ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=template&id=70200306&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_70200306_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/谭福华/Desktop/HousePaint/pages/navigation/ShouYe/video/video.nvue?vue&type=template&id=70200306&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 8)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c(
        "view",
        { staticClass: ["container"] },
        [
          _c(
            "view",
            {
              style:
                "width: " +
                _vm.windowWidth +
                "px; height: " +
                _vm.boxStyle.height +
                "px;",
            },
            [
              _c(
                "list",
                {
                  ref: "listBox",
                  attrs: {
                    loadmoreoffset: _vm.wHeight * 3,
                    showScrollbar: false,
                    pagingEnabled: true,
                    scrollable: true,
                  },
                  on: { loadmore: _vm.getData, scroll: _vm.scrolls },
                },
                [
                  _c(
                    "refresh",
                    {
                      staticClass: ["refresh"],
                      attrs: { display: _vm.refreshing ? "show" : "hide" },
                      on: {
                        refresh: _vm.onrefresh,
                        pullingdown: _vm.onpullingdown,
                      },
                    },
                    [
                      _c(
                        "loading",
                        { staticStyle: { backgroundColor: "#FFFFFF" } },
                        [
                          _c("u-image", {
                            style:
                              "width: 80upx; height: 40upx; margin-top: 80upx; margin-bottom: 30upx; margin-left: " +
                              (_vm.windowWidth - 200) +
                              "px;",
                            attrs: {
                              src: "/static/video/img/index/logins.gif",
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                  _vm._l(_vm.dataList, function (item, i) {
                    return _c(
                      "cell",
                      { key: i, appendAsTree: true, attrs: { append: "tree" } },
                      [
                        _c(
                          "div",
                          {
                            style:
                              "width: " +
                              _vm.windowWidth +
                              "px; height: " +
                              _vm.boxStyle.height +
                              "px;",
                            on: {
                              disappear: function ($event) {
                                _vm.stop()
                              },
                            },
                          },
                          [
                            Math.abs(_vm.k - i) <= 1
                              ? _c(
                                  "view",
                                  [
                                    _c(
                                      "view",
                                      { staticClass: ["root"] },
                                      [
                                        _c("u-video", {
                                          ref: "item" + i,
                                          refInFor: true,
                                          style: _vm.boxStyle,
                                          attrs: {
                                            id: item._id,
                                            loop: true,
                                            src: item.src,
                                            muted: item.isplay,
                                            enableProgressGesture: false,
                                            pageGesture: false,
                                            controls: false,
                                            httpCache: true,
                                            showLoading: false,
                                            showFullscreenBtn: false,
                                            showCenterPlayBtn: false,
                                            objectFit: _vm.object_fit,
                                          },
                                          on: {
                                            play: function ($event) {
                                              _vm.playIngs(i)
                                            },
                                            timeupdate: function ($event) {
                                              _vm.timeupdate($event, i)
                                            },
                                          },
                                        }),
                                        !item.playIng
                                          ? _c("u-image", {
                                              style:
                                                "width: " +
                                                _vm.windowWidth +
                                                "px; height: " +
                                                (_vm.wHeight -
                                                  _vm.deleteHeight) +
                                                "px; position: absolute;",
                                              attrs: {
                                                src:
                                                  item.src +
                                                  "?x-oss-process=video/snapshot,t_100,f_jpg",
                                                mode: _vm.mode,
                                              },
                                            })
                                          : _vm._e(),
                                      ],
                                      1
                                    ),
                                    _c(
                                      "view",
                                      {
                                        staticClass: ["videoHover"],
                                        style: _vm.boxStyle,
                                        on: {
                                          click: function ($event) {
                                            _vm.tapVideoHover(
                                              item.state,
                                              $event
                                            )
                                          },
                                          touchstart: _vm.touchstartHover,
                                        },
                                      },
                                      [
                                        item.state == "pause"
                                          ? _c("u-image", {
                                              staticClass: ["playState"],
                                              attrs: {
                                                src: "/static/video/img/index/play.png",
                                              },
                                            })
                                          : _vm._e(),
                                      ],
                                      1
                                    ),
                                    _c(
                                      "view",
                                      { staticClass: ["userInfo"] },
                                      [
                                        item.isShowProgressBarTime == false
                                          ? _c("u-image", {
                                              staticClass: ["userAvatar"],
                                              attrs: {
                                                src: item.href,
                                                mode: "aspectFill",
                                              },
                                              on: { click: _vm.tozuozhe },
                                            })
                                          : _vm._e(),
                                        item.isShowProgressBarTime == false
                                          ? _c(
                                              "view",
                                              {
                                                staticStyle: {
                                                  opacity: "0.9",
                                                  marginTop: "17px",
                                                },
                                                on: {
                                                  click: function ($event) {
                                                    _vm.cLike(item.like)
                                                  },
                                                },
                                              },
                                              [
                                                item.like
                                                  ? _c("u-image", {
                                                      staticStyle: {
                                                        width: "40px",
                                                        height: "40px",
                                                        position: "absolute",
                                                        right: "6px",
                                                      },
                                                      attrs: {
                                                        src: "/static/video/img/index/xin.png",
                                                      },
                                                    })
                                                  : _vm._e(),
                                                !item.like
                                                  ? _c("u-image", {
                                                      staticStyle: {
                                                        width: "40px",
                                                        height: "40px",
                                                        position: "absolute",
                                                        right: "6px",
                                                      },
                                                      attrs: {
                                                        src: "/static/video/img/index/xin-2.png",
                                                      },
                                                    })
                                                  : _vm._e(),
                                                _c(
                                                  "u-text",
                                                  {
                                                    class: {
                                                      likeNumActive: item.like,
                                                    },
                                                    staticStyle: {
                                                      color: "#FFFFFF",
                                                      marginTop: "5px",
                                                      fontSize: "14px",
                                                      textAlign: "center",
                                                      marginTop: "40px",
                                                      fontWeight: "bold",
                                                    },
                                                    appendAsTree: true,
                                                    attrs: { append: "tree" },
                                                  },
                                                  [_vm._v(_vm._s(item.like_n))]
                                                ),
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        item.isShowProgressBarTime == false
                                          ? _c(
                                              "view",
                                              {
                                                staticClass: ["comment"],
                                                staticStyle: {
                                                  opacity: "0.9",
                                                  marginTop: "17px",
                                                },
                                                on: {
                                                  click: function ($event) {
                                                    _vm.toComment(i)
                                                  },
                                                },
                                              },
                                              [
                                                _c("u-image", {
                                                  staticStyle: {
                                                    width: "35px",
                                                    height: "35px",
                                                    position: "absolute",
                                                    right: "7px",
                                                  },
                                                  attrs: {
                                                    src: "/static/video/img/index/liaotian-2.png",
                                                  },
                                                }),
                                                _c(
                                                  "u-text",
                                                  {
                                                    staticStyle: {
                                                      color: "#FFFFFF",
                                                      marginTop: "5px",
                                                      fontSize: "14px",
                                                      fontWeight: "bold",
                                                      textAlign: "center",
                                                      marginTop: "40px",
                                                    },
                                                    appendAsTree: true,
                                                    attrs: { append: "tree" },
                                                  },
                                                  [_vm._v(_vm._s(item.sms_n))]
                                                ),
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        item.isShowProgressBarTime == false
                                          ? _c(
                                              "view",
                                              {
                                                staticStyle: {
                                                  opacity: "0.9",
                                                  marginTop: "17px",
                                                },
                                                on: { click: _vm.share },
                                              },
                                              [
                                                _c("u-image", {
                                                  staticStyle: {
                                                    width: "40px",
                                                    height: "40px",
                                                    position: "absolute",
                                                    right: "5px",
                                                  },
                                                  attrs: {
                                                    src: "/static/video/img/index/share-fill.png",
                                                  },
                                                }),
                                                _c(
                                                  "u-text",
                                                  {
                                                    staticStyle: {
                                                      color: "#FFFFFF",
                                                      marginTop: "5px",
                                                      fontSize: "14px",
                                                      textAlign: "center",
                                                      fontWeight: "bold",
                                                      marginTop: "40px",
                                                    },
                                                    appendAsTree: true,
                                                    attrs: { append: "tree" },
                                                  },
                                                  [_vm._v("分享")]
                                                ),
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                      ],
                                      1
                                    ),
                                    _vm.dataList.length !== 0 &&
                                    _vm.dataList[_vm.k].isShowProgressBarTime ==
                                      false
                                      ? _c(
                                          "view",
                                          { staticClass: ["content"] },
                                          [
                                            _c(
                                              "u-text",
                                              {
                                                staticClass: ["userName"],
                                                style:
                                                  "width: " +
                                                  (_vm.windowWidth - 90) +
                                                  "px;",
                                                appendAsTree: true,
                                                attrs: { append: "tree" },
                                              },
                                              [_vm._v(_vm._s(item.title))]
                                            ),
                                            _c(
                                              "u-text",
                                              {
                                                staticClass: ["words"],
                                                style:
                                                  "width: " +
                                                  (_vm.windowWidth - 90) +
                                                  "px;",
                                                appendAsTree: true,
                                                attrs: { append: "tree" },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(item.msg) +
                                                    "-" +
                                                    _vm._s(_vm.k + 1)
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                    item.isShowimage == true
                                      ? _c("u-image", {
                                          style:
                                            "width: 120upx; height: 160upx; border-radius: 10upx; position: absolute; bottom: " +
                                            (_vm.ProgressBarBottom + 160) +
                                            "upx; left: " +
                                            (_vm.currentPositions - 15) +
                                            "px;",
                                          attrs: {
                                            src:
                                              item.src +
                                              "?x-oss-process=video/snapshot,t_" +
                                              _vm.currenttimes +
                                              "000,f_jpg",
                                            mode: "aspectFill",
                                          },
                                        })
                                      : _vm._e(),
                                  ],
                                  1
                                )
                              : _vm._e(),
                          ]
                        ),
                      ]
                    )
                  }),
                ],
                2
              ),
              _vm.dataList.length !== 0 &&
              _vm.dataList[_vm.k].isShowProgressBarTime == true
                ? _c(
                    "view",
                    {
                      style:
                        "position: absolute; bottom: " +
                        (_vm.ProgressBarBottom + this.windowWidth * 0.2) / 2 +
                        "px; left: " +
                        (_vm.windowWidth * 2 - this.windowWidth * 1.35) / 2 +
                        "px;",
                    },
                    [
                      _c(
                        "u-text",
                        {
                          staticStyle: {
                            fontSize: "22px",
                            fontWeight: "bold",
                            color: "#F1F1F1",
                          },
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.changeTime) +
                              " / " +
                              _vm._s(_vm.videoTimes)
                          ),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
              _vm.isDragging == false
                ? _c(
                    "view",
                    {
                      staticStyle: {
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                      },
                      on: {
                        touchmove: _vm.touchmove,
                        touchend: _vm.touchend,
                        touchstart: _vm.touchstart,
                      },
                    },
                    [
                      _c(
                        "u-text",
                        {
                          style:
                            "width: " + _vm.windowWidth + "px; opacity: 0;",
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(".")]
                      ),
                      _c("view", {
                        style:
                          "width: " +
                          _vm.windowWidth +
                          "px; height: 4upx; background-color: #C8C7CC; position: absolute; bottom: " +
                          _vm.ProgressBarBottom +
                          "upx; opacity: " +
                          _vm.ProgressBarOpacity +
                          ";",
                      }),
                      _vm.dataList.length !== 0 &&
                      _vm.dataList[_vm.k].isShowProgressBarTime == false
                        ? _c("view", {
                            style:
                              "width: " +
                              _vm.currentPosition +
                              "px; height: 4upx; background-color: #FFFFFF; position: absolute; bottom: " +
                              _vm.ProgressBarBottom +
                              "upx; left: 0; opacity: " +
                              (_vm.ProgressBarOpacity - 0.1) +
                              ";",
                          })
                        : _vm._e(),
                      _vm.dataList.length !== 0 &&
                      _vm.dataList[_vm.k].isShowProgressBarTime == true
                        ? _c("view", {
                            style:
                              "width: " +
                              _vm.currentPositions +
                              "px; height: 8upx; background-color: #FFFFFF; position: absolute; bottom: " +
                              _vm.ProgressBarBottom +
                              "upx; left: 0; opacity: " +
                              (_vm.ProgressBarOpacity + 0.05) +
                              ";",
                          })
                        : _vm._e(),
                      _vm.dataList.length !== 0 &&
                      _vm.dataList[_vm.k].isShowProgressBarTime == false
                        ? _c("view", {
                            style:
                              "width: 4px; height: 4px; background-color: #FFFFFF; border-radius: 10px; position: absolute; bottom: " +
                              (_vm.ProgressBarBottom - 2) +
                              "upx; left: " +
                              _vm.currentPosition +
                              "px; opacity: " +
                              _vm.ProgressBarOpacity +
                              ";",
                          })
                        : _vm._e(),
                      _vm.dataList.length !== 0 &&
                      _vm.dataList[_vm.k].isShowProgressBarTime == true
                        ? _c("view", {
                            style:
                              "width: " +
                              _vm.dotWidth +
                              "px; height: " +
                              _vm.dotWidth +
                              "px; background-color: #FFFFFF; border-radius: 10px; position: absolute; bottom: " +
                              (_vm.ProgressBarBottom - 5) +
                              "upx; left: " +
                              (_vm.currentPositions - 5) +
                              "px; opacity: " +
                              _vm.ProgressBarOpacity +
                              ";",
                          })
                        : _vm._e(),
                    ]
                  )
                : _vm._e(),
            ]
          ),
          _c(
            "uni-popup",
            {
              ref: "pinglun",
              attrs: { type: "bottom" },
              on: { touchmove: _vm.moveHandle },
            },
            [
              _c(
                "view",
                {
                  style:
                    "width: " +
                    _vm.windowWidth +
                    "px; height: " +
                    _vm.boxStyle.height / _vm.heightNum +
                    "px; background-color: #242424; border-top-left-radius: 10px; border-top-right-radius: 10px;",
                },
                [
                  _c("douyin-scrollview", {
                    attrs: {
                      Width: _vm.windowWidth,
                      Height: _vm.boxStyle.height / 1.23,
                      deleteIOSHeight: 36,
                      deleteAndroidHeight: 15,
                    },
                    on: { closeScrollview: _vm.closeScrollview },
                  }),
                ],
                1
              ),
            ]
          ),
        ],
        1
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!************************************************************************************************!*\
  !*** C:/Users/谭福华/Desktop/HousePaint/uni_modules/uni-popup/components/uni-popup/uni-popup.vue ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=template&id=7c43d41b& */ 9);\n/* harmony import */ var _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=script&lang=js& */ 33);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&lang=scss& */ 35).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&lang=scss& */ 35).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"99d4dade\",\n  false,\n  _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-popup/components/uni-popup/uni-popup.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0g7QUFDdEg7QUFDNkQ7QUFDTDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJEQUFtRDtBQUN2RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkRBQW1EO0FBQzVHOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjNDNkNDFiJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiOTlkNGRhZGVcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/谭福华/Desktop/HousePaint/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=template&id=7c43d41b& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=template&id=7c43d41b& */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/谭福华/Desktop/HousePaint/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=template&id=7c43d41b& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniTransition:
      __webpack_require__(/*! @/uni_modules/uni-transition/components/uni-transition/uni-transition.vue */ 11)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showPopup
    ? _c(
        "view",
        {
          staticClass: ["uni-popup"],
          class: [_vm.popupstyle, _vm.isDesktop ? "fixforpc-z-index" : ""],
        },
        [
          _c(
            "view",
            { on: { touchstart: _vm.touchstart } },
            [
              _vm.maskShow
                ? _c("uni-transition", {
                    key: "1",
                    attrs: {
                      name: "mask",
                      modeClass: "fade",
                      styles: _vm.maskClass,
                      duration: _vm.duration,
                      show: _vm.showTrans,
                    },
                    on: { click: _vm.onTap },
                  })
                : _vm._e(),
              _c(
                "uni-transition",
                {
                  key: "2",
                  attrs: {
                    modeClass: _vm.ani,
                    name: "content",
                    styles: _vm.transClass,
                    duration: _vm.duration,
                    show: _vm.showTrans,
                  },
                  on: { click: _vm.onTap },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: ["uni-popup__wrapper"],
                      class: [_vm.popupstyle],
                      style: { backgroundColor: _vm.bg },
                      on: { click: _vm.clear },
                    },
                    [_vm._t("default")],
                    2
                  ),
                ]
              ),
            ],
            1
          ),
        ]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!***************************************************************************************************************!*\
  !*** C:/Users/谭福华/Desktop/HousePaint/uni_modules/uni-transition/components/uni-transition/uni-transition.vue ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=template&id=6369f8c4& */ 12);\n/* harmony import */ var _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=script&lang=js& */ 14);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"3803cee8\",\n  false,\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-transition/components/uni-transition/uni-transition.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDcUs7QUFDckssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUsb0ZBQU07QUFDUixFQUFFLHlGQUFNO0FBQ1IsRUFBRSxrR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjM2OWY4YzQmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIzODAzY2VlOFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlfbW9kdWxlcy91bmktdHJhbnNpdGlvbi9jb21wb25lbnRzL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/谭福华/Desktop/HousePaint/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=template&id=6369f8c4& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=template&id=6369f8c4& */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 13 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/谭福华/Desktop/HousePaint/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=template&id=6369f8c4& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isShow
    ? _c(
        "view",
        {
          ref: "ani",
          class: _vm.customClass,
          style: _vm.transformStyles,
          attrs: { animation: _vm.animationData },
          on: { click: _vm.onClick },
        },
        [_vm._t("default")],
        2
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/谭福华/Desktop/HousePaint/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=script&lang=js& */ 15);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRhLENBQWdCLHdkQUFHLEVBQUMiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/谭福华/Desktop/HousePaint/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 17);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 24));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 25));\nvar _createAnimation = __webpack_require__(/*! ./createAnimation */ 28);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n/**\r\n * Transition 过渡动画\r\n * @description 简单过渡动画组件\r\n * @tutorial https://ext.dcloud.net.cn/plugin?id=985\r\n * @property {Boolean} show = [false|true] 控制组件显示或隐藏\r\n * @property {Array|String} modeClass = [fade|slide-top|slide-right|slide-bottom|slide-left|zoom-in|zoom-out] 过渡动画类型\r\n *  @value fade 渐隐渐出过渡\r\n *  @value slide-top 由上至下过渡\r\n *  @value slide-right 由右至左过渡\r\n *  @value slide-bottom 由下至上过渡\r\n *  @value slide-left 由左至右过渡\r\n *  @value zoom-in 由小到大过渡\r\n *  @value zoom-out 由大到小过渡\r\n * @property {Number} duration 过渡动画持续时间\r\n * @property {Object} styles 组件样式，同 css 样式，注意带’-‘连接符的属性需要使用小驼峰写法如：`backgroundColor:red`\r\n */\nvar _default2 = {\n  name: 'uniTransition',\n  emits: ['click', 'change'],\n  props: {\n    show: {\n      type: Boolean,\n      default: false\n    },\n    modeClass: {\n      type: [Array, String],\n      default: function _default() {\n        return 'fade';\n      }\n    },\n    duration: {\n      type: Number,\n      default: 300\n    },\n    styles: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    },\n    customClass: {\n      type: String,\n      default: ''\n    }\n  },\n  data: function data() {\n    return {\n      isShow: false,\n      transform: '',\n      opacity: 1,\n      animationData: {},\n      durationTime: 300,\n      config: {}\n    };\n  },\n  watch: {\n    show: {\n      handler: function handler(newVal) {\n        if (newVal) {\n          this.open();\n        } else {\n          // 避免上来就执行 close,导致动画错乱\n          if (this.isShow) {\n            this.close();\n          }\n        }\n      },\n      immediate: true\n    }\n  },\n  computed: {\n    // 生成样式数据\n    stylesObject: function stylesObject() {\n      var styles = _objectSpread(_objectSpread({}, this.styles), {}, {\n        'transition-duration': this.duration / 1000 + 's'\n      });\n      var transform = '';\n      for (var i in styles) {\n        var line = this.toLine(i);\n        transform += line + ':' + styles[i] + ';';\n      }\n      return transform;\n    },\n    // 初始化动画条件\n    transformStyles: function transformStyles() {\n      return 'transform:' + this.transform + ';' + 'opacity:' + this.opacity + ';' + this.stylesObject;\n    }\n  },\n  created: function created() {\n    // 动画默认配置\n    this.config = {\n      duration: this.duration,\n      timingFunction: 'ease',\n      transformOrigin: '50% 50%',\n      delay: 0\n    };\n    this.durationTime = this.duration;\n  },\n  methods: {\n    /**\r\n     *  ref 触发 初始化动画\r\n     */\n    init: function init() {\n      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      if (obj.duration) {\n        this.durationTime = obj.duration;\n      }\n      this.animation = (0, _createAnimation.createAnimation)(Object.assign(this.config, obj), this);\n    },\n    /**\r\n     * 点击组件触发回调\r\n     */\n    onClick: function onClick() {\n      this.$emit('click', {\n        detail: this.isShow\n      });\n    },\n    /**\r\n     * ref 触发 动画分组\r\n     * @param {Object} obj\r\n     */\n    step: function step(obj) {\n      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      if (!this.animation) return;\n      for (var i in obj) {\n        try {\n          if ((0, _typeof2.default)(obj[i]) === 'object') {\n            var _this$animation;\n            (_this$animation = this.animation)[i].apply(_this$animation, (0, _toConsumableArray2.default)(obj[i]));\n          } else {\n            this.animation[i](obj[i]);\n          }\n        } catch (e) {\n          __f__(\"error\", \"\\u65B9\\u6CD5 \".concat(i, \" \\u4E0D\\u5B58\\u5728\"), \" at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139\");\n        }\n      }\n      this.animation.step(config);\n      return this;\n    },\n    /**\r\n     *  ref 触发 执行动画\r\n     */\n    run: function run(fn) {\n      if (!this.animation) return;\n      this.animation.run(fn);\n    },\n    // 开始过度动画\n    open: function open() {\n      var _this = this;\n      clearTimeout(this.timer);\n      this.transform = '';\n      this.isShow = true;\n      var _this$styleInit = this.styleInit(false),\n        opacity = _this$styleInit.opacity,\n        transform = _this$styleInit.transform;\n      if (typeof opacity !== 'undefined') {\n        this.opacity = opacity;\n      }\n      this.transform = transform;\n      // 确保动态样式已经生效后，执行动画，如果不加 nextTick ，会导致 wx 动画执行异常\n      this.$nextTick(function () {\n        // TODO 定时器保证动画完全执行，目前有些问题，后面会取消定时器\n        _this.timer = setTimeout(function () {\n          _this.animation = (0, _createAnimation.createAnimation)(_this.config, _this);\n          _this.tranfromInit(false).step();\n          _this.animation.run();\n          _this.$emit('change', {\n            detail: _this.isShow\n          });\n        }, 20);\n      });\n    },\n    // 关闭过度动画\n    close: function close(type) {\n      var _this2 = this;\n      if (!this.animation) return;\n      this.tranfromInit(true).step().run(function () {\n        _this2.isShow = false;\n        _this2.animationData = null;\n        _this2.animation = null;\n        var _this2$styleInit = _this2.styleInit(false),\n          opacity = _this2$styleInit.opacity,\n          transform = _this2$styleInit.transform;\n        _this2.opacity = opacity || 1;\n        _this2.transform = transform;\n        _this2.$emit('change', {\n          detail: _this2.isShow\n        });\n      });\n    },\n    // 处理动画开始前的默认样式\n    styleInit: function styleInit(type) {\n      var _this3 = this;\n      var styles = {\n        transform: ''\n      };\n      var buildStyle = function buildStyle(type, mode) {\n        if (mode === 'fade') {\n          styles.opacity = _this3.animationType(type)[mode];\n        } else {\n          styles.transform += _this3.animationType(type)[mode] + ' ';\n        }\n      };\n      if (typeof this.modeClass === 'string') {\n        buildStyle(type, this.modeClass);\n      } else {\n        this.modeClass.forEach(function (mode) {\n          buildStyle(type, mode);\n        });\n      }\n      return styles;\n    },\n    // 处理内置组合动画\n    tranfromInit: function tranfromInit(type) {\n      var _this4 = this;\n      var buildTranfrom = function buildTranfrom(type, mode) {\n        var aniNum = null;\n        if (mode === 'fade') {\n          aniNum = type ? 0 : 1;\n        } else {\n          aniNum = type ? '-100%' : '0';\n          if (mode === 'zoom-in') {\n            aniNum = type ? 0.8 : 1;\n          }\n          if (mode === 'zoom-out') {\n            aniNum = type ? 1.2 : 1;\n          }\n          if (mode === 'slide-right') {\n            aniNum = type ? '100%' : '0';\n          }\n          if (mode === 'slide-bottom') {\n            aniNum = type ? '100%' : '0';\n          }\n        }\n        _this4.animation[_this4.animationMode()[mode]](aniNum);\n      };\n      if (typeof this.modeClass === 'string') {\n        buildTranfrom(type, this.modeClass);\n      } else {\n        this.modeClass.forEach(function (mode) {\n          buildTranfrom(type, mode);\n        });\n      }\n      return this.animation;\n    },\n    animationType: function animationType(type) {\n      return {\n        fade: type ? 1 : 0,\n        'slide-top': \"translateY(\".concat(type ? '0' : '-100%', \")\"),\n        'slide-right': \"translateX(\".concat(type ? '0' : '100%', \")\"),\n        'slide-bottom': \"translateY(\".concat(type ? '0' : '100%', \")\"),\n        'slide-left': \"translateX(\".concat(type ? '0' : '-100%', \")\"),\n        'zoom-in': \"scaleX(\".concat(type ? 1 : 0.8, \") scaleY(\").concat(type ? 1 : 0.8, \")\"),\n        'zoom-out': \"scaleX(\".concat(type ? 1 : 1.2, \") scaleY(\").concat(type ? 1 : 1.2, \")\")\n      };\n    },\n    // 内置动画类型与实际动画对应字典\n    animationMode: function animationMode() {\n      return {\n        fade: 'opacity',\n        'slide-top': 'translateY',\n        'slide-right': 'translateX',\n        'slide-bottom': 'translateY',\n        'slide-left': 'translateX',\n        'zoom-in': 'scale',\n        'zoom-out': 'scale'\n      };\n    },\n    // 驼峰转中横线\n    toLine: function toLine(name) {\n      return name.replace(/([A-Z])/g, '-$1').toLowerCase();\n    }\n  }\n};\nexports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 16)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXRyYW5zaXRpb24vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWUiXSwibmFtZXMiOlsibmFtZSIsImVtaXRzIiwicHJvcHMiLCJzaG93IiwidHlwZSIsImRlZmF1bHQiLCJtb2RlQ2xhc3MiLCJkdXJhdGlvbiIsInN0eWxlcyIsImN1c3RvbUNsYXNzIiwiZGF0YSIsImlzU2hvdyIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJhbmltYXRpb25EYXRhIiwiZHVyYXRpb25UaW1lIiwiY29uZmlnIiwid2F0Y2giLCJoYW5kbGVyIiwiaW1tZWRpYXRlIiwiY29tcHV0ZWQiLCJzdHlsZXNPYmplY3QiLCJ0cmFuc2Zvcm1TdHlsZXMiLCJjcmVhdGVkIiwidGltaW5nRnVuY3Rpb24iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJkZWxheSIsIm1ldGhvZHMiLCJpbml0Iiwib25DbGljayIsImRldGFpbCIsInN0ZXAiLCJydW4iLCJvcGVuIiwiY2xlYXJUaW1lb3V0IiwiY2xvc2UiLCJzdHlsZUluaXQiLCJidWlsZFN0eWxlIiwidHJhbmZyb21Jbml0IiwiYW5pTnVtIiwiYnVpbGRUcmFuZnJvbSIsImFuaW1hdGlvblR5cGUiLCJmYWRlIiwiYW5pbWF0aW9uTW9kZSIsInRvTGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkEsZ0JBZ0JBO0VBQ0FBO0VBQ0FDO0VBQ0FDO0lBQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7SUFDQUM7TUFDQUY7TUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQUU7TUFDQUg7TUFDQUM7SUFDQTtJQUNBRztNQUNBSjtNQUNBQztRQUNBO01BQ0E7SUFDQTtJQUNBSTtNQUNBTDtNQUNBQztJQUNBO0VBQ0E7RUFDQUs7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQWQ7TUFDQWU7UUFDQTtVQUNBO1FBQ0E7VUFDQTtVQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQSw2Q0FDQTtRQUNBO01BQUEsRUFDQTtNQUNBO01BQ0E7UUFDQTtRQUNBVDtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FVO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtNQUNBaEI7TUFDQWlCO01BQ0FDO01BQ0FDO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQUE7TUFDQTtRQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7UUFDQUM7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQUM7TUFBQTtNQUNBO01BQ0E7UUFDQTtVQUNBO1lBQUE7WUFDQTtVQUNBO1lBQ0E7VUFDQTtRQUNBO1VBQ0E7UUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBQztNQUNBO01BQ0E7TUFDQTtRQUFBckI7UUFBQUQ7TUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQTtRQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7WUFDQWtCO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBSztNQUFBO01BQ0E7TUFDQSx3QkFDQUosT0FDQUM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtVQUFBbkI7VUFBQUQ7UUFDQTtRQUNBO1FBQ0E7VUFDQWtCO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQU07TUFBQTtNQUNBO1FBQ0F4QjtNQUNBO01BQ0E7UUFDQTtVQUNBSjtRQUNBO1VBQ0FBO1FBQ0E7TUFDQTtNQUNBO1FBQ0E2QjtNQUNBO1FBQ0E7VUFDQUE7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTtRQUNBO1FBQ0E7VUFDQUM7UUFDQTtVQUNBQTtVQUNBO1lBQ0FBO1VBQ0E7VUFDQTtZQUNBQTtVQUNBO1VBQ0E7WUFDQUE7VUFDQTtVQUNBO1lBQ0FBO1VBQ0E7UUFDQTtRQUNBO01BQ0E7TUFDQTtRQUNBQztNQUNBO1FBQ0E7VUFDQUE7UUFDQTtNQUNBO01BRUE7SUFDQTtJQUNBQztNQUNBO1FBQ0FDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7UUFDQUQ7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUU7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDRCIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IHYtaWY9XCJpc1Nob3dcIiByZWY9XCJhbmlcIiA6YW5pbWF0aW9uPVwiYW5pbWF0aW9uRGF0YVwiIDpjbGFzcz1cImN1c3RvbUNsYXNzXCIgOnN0eWxlPVwidHJhbnNmb3JtU3R5bGVzXCIgQGNsaWNrPVwib25DbGlja1wiPjxzbG90Pjwvc2xvdD48L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2NyZWF0ZUFuaW1hdGlvbidcclxuXHJcbi8qKlxyXG4gKiBUcmFuc2l0aW9uIOi/h+a4oeWKqOeUu1xyXG4gKiBAZGVzY3JpcHRpb24g566A5Y2V6L+H5rih5Yqo55S757uE5Lu2XHJcbiAqIEB0dXRvcmlhbCBodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD05ODVcclxuICogQHByb3BlcnR5IHtCb29sZWFufSBzaG93ID0gW2ZhbHNlfHRydWVdIOaOp+WItue7hOS7tuaYvuekuuaIlumakOiXj1xyXG4gKiBAcHJvcGVydHkge0FycmF5fFN0cmluZ30gbW9kZUNsYXNzID0gW2ZhZGV8c2xpZGUtdG9wfHNsaWRlLXJpZ2h0fHNsaWRlLWJvdHRvbXxzbGlkZS1sZWZ0fHpvb20taW58em9vbS1vdXRdIOi/h+a4oeWKqOeUu+exu+Wei1xyXG4gKiAgQHZhbHVlIGZhZGUg5riQ6ZqQ5riQ5Ye66L+H5rihXHJcbiAqICBAdmFsdWUgc2xpZGUtdG9wIOeUseS4iuiHs+S4i+i/h+a4oVxyXG4gKiAgQHZhbHVlIHNsaWRlLXJpZ2h0IOeUseWPs+iHs+W3pui/h+a4oVxyXG4gKiAgQHZhbHVlIHNsaWRlLWJvdHRvbSDnlLHkuIvoh7PkuIrov4fmuKFcclxuICogIEB2YWx1ZSBzbGlkZS1sZWZ0IOeUseW3puiHs+WPs+i/h+a4oVxyXG4gKiAgQHZhbHVlIHpvb20taW4g55Sx5bCP5Yiw5aSn6L+H5rihXHJcbiAqICBAdmFsdWUgem9vbS1vdXQg55Sx5aSn5Yiw5bCP6L+H5rihXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBkdXJhdGlvbiDov4fmuKHliqjnlLvmjIHnu63ml7bpl7RcclxuICogQHByb3BlcnR5IHtPYmplY3R9IHN0eWxlcyDnu4Tku7bmoLflvI/vvIzlkIwgY3NzIOagt+W8j++8jOazqOaEj+W4puKAmS3igJjov57mjqXnrKbnmoTlsZ7mgKfpnIDopoHkvb/nlKjlsI/pqbzls7Dlhpnms5XlpoLvvJpgYmFja2dyb3VuZENvbG9yOnJlZGBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAndW5pVHJhbnNpdGlvbicsXHJcblx0ZW1pdHM6WydjbGljaycsJ2NoYW5nZSddLFxyXG5cdHByb3BzOiB7XHJcblx0XHRzaG93OiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0bW9kZUNsYXNzOiB7XHJcblx0XHRcdHR5cGU6IFtBcnJheSwgU3RyaW5nXSxcclxuXHRcdFx0ZGVmYXVsdCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gJ2ZhZGUnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkdXJhdGlvbjoge1xyXG5cdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdGRlZmF1bHQ6IDMwMFxyXG5cdFx0fSxcclxuXHRcdHN0eWxlczoge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHt9XHJcblx0XHRcdH1cclxuXHRcdH0sXG5cdFx0Y3VzdG9tQ2xhc3M6e1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogJydcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0aXNTaG93OiBmYWxzZSxcclxuXHRcdFx0dHJhbnNmb3JtOiAnJyxcclxuXHRcdFx0b3BhY2l0eTogMSxcclxuXHRcdFx0YW5pbWF0aW9uRGF0YToge30sXHJcblx0XHRcdGR1cmF0aW9uVGltZTogMzAwLFxyXG5cdFx0XHRjb25maWc6IHt9XHJcblx0XHR9XHJcblx0fSxcclxuXHR3YXRjaDoge1xyXG5cdFx0c2hvdzoge1xyXG5cdFx0XHRoYW5kbGVyKG5ld1ZhbCkge1xyXG5cdFx0XHRcdGlmIChuZXdWYWwpIHtcclxuXHRcdFx0XHRcdHRoaXMub3BlbigpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIOmBv+WFjeS4iuadpeWwseaJp+ihjCBjbG9zZSzlr7zoh7TliqjnlLvplJnkubFcclxuXHRcdFx0XHRcdGlmICh0aGlzLmlzU2hvdykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNsb3NlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdC8vIOeUn+aIkOagt+W8j+aVsOaNrlxyXG5cdFx0c3R5bGVzT2JqZWN0KCkge1xyXG5cdFx0XHRsZXQgc3R5bGVzID0ge1xyXG5cdFx0XHRcdC4uLnRoaXMuc3R5bGVzLFxyXG5cdFx0XHRcdCd0cmFuc2l0aW9uLWR1cmF0aW9uJzogdGhpcy5kdXJhdGlvbiAvIDEwMDAgKyAncydcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgdHJhbnNmb3JtID0gJydcclxuXHRcdFx0Zm9yIChsZXQgaSBpbiBzdHlsZXMpIHtcclxuXHRcdFx0XHRsZXQgbGluZSA9IHRoaXMudG9MaW5lKGkpXHJcblx0XHRcdFx0dHJhbnNmb3JtICs9IGxpbmUgKyAnOicgKyBzdHlsZXNbaV0gKyAnOydcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHJhbnNmb3JtXHJcblx0XHR9LFxyXG5cdFx0Ly8g5Yid5aeL5YyW5Yqo55S75p2h5Lu2XHJcblx0XHR0cmFuc2Zvcm1TdHlsZXMoKSB7XHJcblx0XHRcdHJldHVybiAndHJhbnNmb3JtOicgKyB0aGlzLnRyYW5zZm9ybSArICc7JyArICdvcGFjaXR5OicgKyB0aGlzLm9wYWNpdHkgKyAnOycgKyB0aGlzLnN0eWxlc09iamVjdFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdC8vIOWKqOeUu+m7mOiupOmFjee9rlxyXG5cdFx0dGhpcy5jb25maWcgPSB7XHJcblx0XHRcdGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxyXG5cdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxyXG5cdFx0XHR0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlJyxcclxuXHRcdFx0ZGVsYXk6IDBcclxuXHRcdH1cclxuXHRcdHRoaXMuZHVyYXRpb25UaW1lID0gdGhpcy5kdXJhdGlvblxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0LyoqXHJcblx0XHQgKiAgcmVmIOinpuWPkSDliJ3lp4vljJbliqjnlLtcclxuXHRcdCAqL1xyXG5cdFx0aW5pdChvYmogPSB7fSkge1xyXG5cdFx0XHRpZiAob2JqLmR1cmF0aW9uKSB7XHJcblx0XHRcdFx0dGhpcy5kdXJhdGlvblRpbWUgPSBvYmouZHVyYXRpb25cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbihPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBvYmopLHRoaXMpXHJcblx0XHR9LFxyXG5cdFx0LyoqXHJcblx0XHQgKiDngrnlh7vnu4Tku7bop6blj5Hlm57osINcclxuXHRcdCAqL1xyXG5cdFx0b25DbGljaygpIHtcclxuXHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snLCB7XHJcblx0XHRcdFx0ZGV0YWlsOiB0aGlzLmlzU2hvd1xyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICogcmVmIOinpuWPkSDliqjnlLvliIbnu4RcclxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuXHRcdCAqL1xyXG5cdFx0c3RlcChvYmosIGNvbmZpZyA9IHt9KSB7XHJcblx0XHRcdGlmICghdGhpcy5hbmltYXRpb24pIHJldHVyblxuXHRcdFx0Zm9yIChsZXQgaSBpbiBvYmopIHtcclxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmKHR5cGVvZiBvYmpbaV0gPT09ICdvYmplY3QnKXtcblx0XHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uW2ldKC4uLm9ialtpXSlcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uW2ldKG9ialtpXSlcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihg5pa55rOVICR7aX0g5LiN5a2Y5ZyoYClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5hbmltYXRpb24uc3RlcChjb25maWcpXG5cdFx0XHRyZXR1cm4gdGhpc1xyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICogIHJlZiDop6blj5Eg5omn6KGM5Yqo55S7XHJcblx0XHQgKi9cclxuXHRcdHJ1bihmbikge1xyXG5cdFx0XHRpZiAoIXRoaXMuYW5pbWF0aW9uKSByZXR1cm5cclxuXHRcdFx0dGhpcy5hbmltYXRpb24ucnVuKGZuKVxyXG5cdFx0fSxcclxuXHRcdC8vIOW8gOWni+i/h+W6puWKqOeUu1xyXG5cdFx0b3BlbigpIHtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXHJcblx0XHRcdHRoaXMudHJhbnNmb3JtID0gJydcclxuXHRcdFx0dGhpcy5pc1Nob3cgPSB0cnVlXHJcblx0XHRcdGxldCB7IG9wYWNpdHksIHRyYW5zZm9ybSB9ID0gdGhpcy5zdHlsZUluaXQoZmFsc2UpXHJcblx0XHRcdGlmICh0eXBlb2Ygb3BhY2l0eSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHR0aGlzLm9wYWNpdHkgPSBvcGFjaXR5XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cclxuXHRcdFx0Ly8g56Gu5L+d5Yqo5oCB5qC35byP5bey57uP55Sf5pWI5ZCO77yM5omn6KGM5Yqo55S777yM5aaC5p6c5LiN5YqgIG5leHRUaWNrIO+8jOS8muWvvOiHtCB3eCDliqjnlLvmiafooYzlvILluLhcclxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFRPRE8g5a6a5pe25Zmo5L+d6K+B5Yqo55S75a6M5YWo5omn6KGM77yM55uu5YmN5pyJ5Lqb6Zeu6aKY77yM5ZCO6Z2i5Lya5Y+W5raI5a6a5pe25ZmoXHJcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5hbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24odGhpcy5jb25maWcsIHRoaXMpXHJcblx0XHRcdFx0XHR0aGlzLnRyYW5mcm9tSW5pdChmYWxzZSkuc3RlcCgpXHJcblx0XHRcdFx0XHR0aGlzLmFuaW1hdGlvbi5ydW4oKVxyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xyXG5cdFx0XHRcdFx0XHRkZXRhaWw6IHRoaXMuaXNTaG93XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0sIDIwKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdC8vIOWFs+mXrei/h+W6puWKqOeUu1xyXG5cdFx0Y2xvc2UodHlwZSkge1xyXG5cdFx0XHRpZiAoIXRoaXMuYW5pbWF0aW9uKSByZXR1cm5cclxuXHRcdFx0dGhpcy50cmFuZnJvbUluaXQodHJ1ZSlcclxuXHRcdFx0XHQuc3RlcCgpXHJcblx0XHRcdFx0LnJ1bigoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmlzU2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0XHR0aGlzLmFuaW1hdGlvbkRhdGEgPSBudWxsXHJcblx0XHRcdFx0XHR0aGlzLmFuaW1hdGlvbiA9IG51bGxcclxuXHRcdFx0XHRcdGxldCB7IG9wYWNpdHksIHRyYW5zZm9ybSB9ID0gdGhpcy5zdHlsZUluaXQoZmFsc2UpXHJcblx0XHRcdFx0XHR0aGlzLm9wYWNpdHkgPSBvcGFjaXR5IHx8IDFcclxuXHRcdFx0XHRcdHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtXHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XHJcblx0XHRcdFx0XHRcdGRldGFpbDogdGhpcy5pc1Nob3dcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHQvLyDlpITnkIbliqjnlLvlvIDlp4vliY3nmoTpu5jorqTmoLflvI9cclxuXHRcdHN0eWxlSW5pdCh0eXBlKSB7XHJcblx0XHRcdGxldCBzdHlsZXMgPSB7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiAnJ1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBidWlsZFN0eWxlID0gKHR5cGUsIG1vZGUpID0+IHtcclxuXHRcdFx0XHRpZiAobW9kZSA9PT0gJ2ZhZGUnKSB7XHJcblx0XHRcdFx0XHRzdHlsZXMub3BhY2l0eSA9IHRoaXMuYW5pbWF0aW9uVHlwZSh0eXBlKVttb2RlXVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IHRoaXMuYW5pbWF0aW9uVHlwZSh0eXBlKVttb2RlXSArICcgJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMubW9kZUNsYXNzID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdGJ1aWxkU3R5bGUodHlwZSwgdGhpcy5tb2RlQ2xhc3MpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5tb2RlQ2xhc3MuZm9yRWFjaChtb2RlID0+IHtcclxuXHRcdFx0XHRcdGJ1aWxkU3R5bGUodHlwZSwgbW9kZSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBzdHlsZXNcclxuXHRcdH0sXHJcblx0XHQvLyDlpITnkIblhoXnva7nu4TlkIjliqjnlLtcclxuXHRcdHRyYW5mcm9tSW5pdCh0eXBlKSB7XHJcblx0XHRcdGxldCBidWlsZFRyYW5mcm9tID0gKHR5cGUsIG1vZGUpID0+IHtcclxuXHRcdFx0XHRsZXQgYW5pTnVtID0gbnVsbFxyXG5cdFx0XHRcdGlmIChtb2RlID09PSAnZmFkZScpIHtcclxuXHRcdFx0XHRcdGFuaU51bSA9IHR5cGUgPyAwIDogMVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gJy0xMDAlJyA6ICcwJ1xyXG5cdFx0XHRcdFx0aWYgKG1vZGUgPT09ICd6b29tLWluJykge1xyXG5cdFx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gMC44IDogMVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKG1vZGUgPT09ICd6b29tLW91dCcpIHtcclxuXHRcdFx0XHRcdFx0YW5pTnVtID0gdHlwZSA/IDEuMiA6IDFcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChtb2RlID09PSAnc2xpZGUtcmlnaHQnKSB7XHJcblx0XHRcdFx0XHRcdGFuaU51bSA9IHR5cGUgPyAnMTAwJScgOiAnMCdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChtb2RlID09PSAnc2xpZGUtYm90dG9tJykge1xyXG5cdFx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gJzEwMCUnIDogJzAnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuYW5pbWF0aW9uW3RoaXMuYW5pbWF0aW9uTW9kZSgpW21vZGVdXShhbmlOdW0pXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLm1vZGVDbGFzcyA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRidWlsZFRyYW5mcm9tKHR5cGUsIHRoaXMubW9kZUNsYXNzKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMubW9kZUNsYXNzLmZvckVhY2gobW9kZSA9PiB7XHJcblx0XHRcdFx0XHRidWlsZFRyYW5mcm9tKHR5cGUsIG1vZGUpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXMuYW5pbWF0aW9uXHJcblx0XHR9LFxyXG5cdFx0YW5pbWF0aW9uVHlwZSh0eXBlKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZmFkZTogdHlwZSA/IDEgOiAwLFxyXG5cdFx0XHRcdCdzbGlkZS10b3AnOiBgdHJhbnNsYXRlWSgke3R5cGUgPyAnMCcgOiAnLTEwMCUnfSlgLFxyXG5cdFx0XHRcdCdzbGlkZS1yaWdodCc6IGB0cmFuc2xhdGVYKCR7dHlwZSA/ICcwJyA6ICcxMDAlJ30pYCxcclxuXHRcdFx0XHQnc2xpZGUtYm90dG9tJzogYHRyYW5zbGF0ZVkoJHt0eXBlID8gJzAnIDogJzEwMCUnfSlgLFxyXG5cdFx0XHRcdCdzbGlkZS1sZWZ0JzogYHRyYW5zbGF0ZVgoJHt0eXBlID8gJzAnIDogJy0xMDAlJ30pYCxcclxuXHRcdFx0XHQnem9vbS1pbic6IGBzY2FsZVgoJHt0eXBlID8gMSA6IDAuOH0pIHNjYWxlWSgke3R5cGUgPyAxIDogMC44fSlgLFxyXG5cdFx0XHRcdCd6b29tLW91dCc6IGBzY2FsZVgoJHt0eXBlID8gMSA6IDEuMn0pIHNjYWxlWSgke3R5cGUgPyAxIDogMS4yfSlgXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvLyDlhoXnva7liqjnlLvnsbvlnovkuI7lrp7pmYXliqjnlLvlr7nlupTlrZflhbhcclxuXHRcdGFuaW1hdGlvbk1vZGUoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZmFkZTogJ29wYWNpdHknLFxyXG5cdFx0XHRcdCdzbGlkZS10b3AnOiAndHJhbnNsYXRlWScsXHJcblx0XHRcdFx0J3NsaWRlLXJpZ2h0JzogJ3RyYW5zbGF0ZVgnLFxyXG5cdFx0XHRcdCdzbGlkZS1ib3R0b20nOiAndHJhbnNsYXRlWScsXHJcblx0XHRcdFx0J3NsaWRlLWxlZnQnOiAndHJhbnNsYXRlWCcsXHJcblx0XHRcdFx0J3pvb20taW4nOiAnc2NhbGUnLFxyXG5cdFx0XHRcdCd6b29tLW91dCc6ICdzY2FsZSdcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vIOmpvOWzsOi9rOS4reaoque6v1xyXG5cdFx0dG9MaW5lKG5hbWUpIHtcclxuXHRcdFx0cmV0dXJuIG5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCAnLSQxJykudG9Mb3dlckNhc2UoKVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ }),
/* 17 */
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
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 18 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 21);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 22);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 23);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 19 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 20);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 20 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 21 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 22 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 20);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 23 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 24 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 25 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 26);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
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
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 26 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 24)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 27);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 27 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 24)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 28 */
/*!***************************************************************************************************************!*\
  !*** C:/Users/谭福华/Desktop/HousePaint/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 17);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createAnimation = createAnimation;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 25));\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 30));\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 31));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n// const defaultOption = {\n// \tduration: 300,\n// \ttimingFunction: 'linear',\n// \tdelay: 0,\n// \ttransformOrigin: '50% 50% 0'\n// }\n\nvar nvueAnimation = __webpack_provided_uni_dot_requireNativePlugin('animation');\nvar MPAnimation = /*#__PURE__*/function () {\n  function MPAnimation(options, _this) {\n    (0, _classCallCheck2.default)(this, MPAnimation);\n    this.options = options;\n    this.animation = uni.createAnimation(options);\n    this.currentStepAnimates = {};\n    this.next = 0;\n    this.$ = _this;\n  }\n  (0, _createClass2.default)(MPAnimation, [{\n    key: \"_nvuePushAnimates\",\n    value: function _nvuePushAnimates(type, args) {\n      var aniObj = this.currentStepAnimates[this.next];\n      var styles = {};\n      if (!aniObj) {\n        styles = {\n          styles: {},\n          config: {}\n        };\n      } else {\n        styles = aniObj;\n      }\n      if (animateTypes1.includes(type)) {\n        if (!styles.styles.transform) {\n          styles.styles.transform = '';\n        }\n        var unit = '';\n        if (type === 'rotate') {\n          unit = 'deg';\n        }\n        styles.styles.transform += \"\".concat(type, \"(\").concat(args + unit, \") \");\n      } else {\n        styles.styles[type] = \"\".concat(args);\n      }\n      this.currentStepAnimates[this.next] = styles;\n    }\n  }, {\n    key: \"_animateRun\",\n    value: function _animateRun() {\n      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var ref = this.$.$refs['ani'].ref;\n      if (!ref) return;\n      return new Promise(function (resolve, reject) {\n        nvueAnimation.transition(ref, _objectSpread({\n          styles: styles\n        }, config), function (res) {\n          resolve();\n        });\n      });\n    }\n  }, {\n    key: \"_nvueNextAnimate\",\n    value: function _nvueNextAnimate(animates) {\n      var _this2 = this;\n      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      var fn = arguments.length > 2 ? arguments[2] : undefined;\n      var obj = animates[step];\n      if (obj) {\n        var styles = obj.styles,\n          config = obj.config;\n        this._animateRun(styles, config).then(function () {\n          step += 1;\n          _this2._nvueNextAnimate(animates, step, fn);\n        });\n      } else {\n        this.currentStepAnimates = {};\n        typeof fn === 'function' && fn();\n        this.isEnd = true;\n      }\n    }\n  }, {\n    key: \"step\",\n    value: function step() {\n      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      this.currentStepAnimates[this.next].config = Object.assign({}, this.options, config);\n      this.currentStepAnimates[this.next].styles.transformOrigin = this.currentStepAnimates[this.next].config.transformOrigin;\n      this.next++;\n      return this;\n    }\n  }, {\n    key: \"run\",\n    value: function run(fn) {\n      this.isEnd = false;\n      var ref = this.$.$refs['ani'] && this.$.$refs['ani'].ref;\n      if (!ref) return;\n      this._nvueNextAnimate(this.currentStepAnimates, 0, fn);\n      this.next = 0;\n    }\n  }]);\n  return MPAnimation;\n}();\nvar animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY', 'translateZ'];\nvar animateTypes2 = ['opacity', 'backgroundColor'];\nvar animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];\nanimateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {\n  MPAnimation.prototype[type] = function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    this._nvuePushAnimates(type, args);\n    return this;\n  };\n});\nfunction createAnimation(option, _this) {\n  if (!_this) return;\n  clearTimeout(_this.timer);\n  return new MPAnimation(option, _this);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 29)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXRyYW5zaXRpb24vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi9jcmVhdGVBbmltYXRpb24uanMiXSwibmFtZXMiOlsibnZ1ZUFuaW1hdGlvbiIsInVuaSIsIk1QQW5pbWF0aW9uIiwib3B0aW9ucyIsIl90aGlzIiwiYW5pbWF0aW9uIiwiY3JlYXRlQW5pbWF0aW9uIiwiY3VycmVudFN0ZXBBbmltYXRlcyIsIm5leHQiLCIkIiwidHlwZSIsImFyZ3MiLCJhbmlPYmoiLCJzdHlsZXMiLCJjb25maWciLCJhbmltYXRlVHlwZXMxIiwiaW5jbHVkZXMiLCJ0cmFuc2Zvcm0iLCJ1bml0IiwicmVmIiwiJHJlZnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRyYW5zaXRpb24iLCJyZXMiLCJhbmltYXRlcyIsInN0ZXAiLCJmbiIsIm9iaiIsIl9hbmltYXRlUnVuIiwidGhlbiIsIl9udnVlTmV4dEFuaW1hdGUiLCJpc0VuZCIsIk9iamVjdCIsImFzc2lnbiIsInRyYW5zZm9ybU9yaWdpbiIsImFuaW1hdGVUeXBlczIiLCJhbmltYXRlVHlwZXMzIiwiY29uY2F0IiwiZm9yRWFjaCIsInByb3RvdHlwZSIsIl9udnVlUHVzaEFuaW1hdGVzIiwib3B0aW9uIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDhDQUF1QixDQUFDLFdBQVcsQ0FBQztBQUFBLElBRXBEQyxXQUFXO0VBQ2hCLHFCQUFZQyxPQUFPLEVBQUVDLEtBQUssRUFBRTtJQUFBO0lBQzNCLElBQUksQ0FBQ0QsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0UsU0FBUyxHQUFHSixHQUFHLENBQUNLLGVBQWUsQ0FBQ0gsT0FBTyxDQUFDO0lBQzdDLElBQUksQ0FBQ0ksbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHLENBQUM7SUFDYixJQUFJLENBQUNDLENBQUMsR0FBR0wsS0FBSztFQUVmO0VBQUM7SUFBQTtJQUFBLE9BRUQsMkJBQWtCTSxJQUFJLEVBQUVDLElBQUksRUFBRTtNQUM3QixJQUFJQyxNQUFNLEdBQUcsSUFBSSxDQUFDTCxtQkFBbUIsQ0FBQyxJQUFJLENBQUNDLElBQUksQ0FBQztNQUNoRCxJQUFJSyxNQUFNLEdBQUcsQ0FBQyxDQUFDO01BQ2YsSUFBSSxDQUFDRCxNQUFNLEVBQUU7UUFDWkMsTUFBTSxHQUFHO1VBQ1JBLE1BQU0sRUFBRSxDQUFDLENBQUM7VUFDVkMsTUFBTSxFQUFFLENBQUM7UUFDVixDQUFDO01BQ0YsQ0FBQyxNQUFNO1FBQ05ELE1BQU0sR0FBR0QsTUFBTTtNQUNoQjtNQUNBLElBQUlHLGFBQWEsQ0FBQ0MsUUFBUSxDQUFDTixJQUFJLENBQUMsRUFBRTtRQUNqQyxJQUFJLENBQUNHLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDSSxTQUFTLEVBQUU7VUFDN0JKLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDSSxTQUFTLEdBQUcsRUFBRTtRQUM3QjtRQUNBLElBQUlDLElBQUksR0FBRyxFQUFFO1FBQ2IsSUFBR1IsSUFBSSxLQUFLLFFBQVEsRUFBQztVQUNwQlEsSUFBSSxHQUFHLEtBQUs7UUFDYjtRQUNBTCxNQUFNLENBQUNBLE1BQU0sQ0FBQ0ksU0FBUyxjQUFPUCxJQUFJLGNBQUlDLElBQUksR0FBQ08sSUFBSSxPQUFJO01BQ3BELENBQUMsTUFBTTtRQUNOTCxNQUFNLENBQUNBLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLGFBQU1DLElBQUksQ0FBRTtNQUNoQztNQUNBLElBQUksQ0FBQ0osbUJBQW1CLENBQUMsSUFBSSxDQUFDQyxJQUFJLENBQUMsR0FBR0ssTUFBTTtJQUM3QztFQUFDO0lBQUE7SUFBQSxPQUNELHVCQUFzQztNQUFBLElBQTFCQSxNQUFNLHVFQUFHLENBQUMsQ0FBQztNQUFBLElBQUVDLE1BQU0sdUVBQUcsQ0FBQyxDQUFDO01BQ25DLElBQUlLLEdBQUcsR0FBRyxJQUFJLENBQUNWLENBQUMsQ0FBQ1csS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDRCxHQUFHO01BQ2pDLElBQUksQ0FBQ0EsR0FBRyxFQUFFO01BQ1YsT0FBTyxJQUFJRSxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7UUFDdkN2QixhQUFhLENBQUN3QixVQUFVLENBQUNMLEdBQUc7VUFDM0JOLE1BQU0sRUFBTkE7UUFBTSxHQUNIQyxNQUFNLEdBQ1AsVUFBQVcsR0FBRyxFQUFJO1VBQ1RILE9BQU8sRUFBRTtRQUNWLENBQUMsQ0FBQztNQUNILENBQUMsQ0FBQztJQUNIO0VBQUM7SUFBQTtJQUFBLE9BRUQsMEJBQWlCSSxRQUFRLEVBQWdCO01BQUE7TUFBQSxJQUFkQyxJQUFJLHVFQUFHLENBQUM7TUFBQSxJQUFFQyxFQUFFO01BQ3RDLElBQUlDLEdBQUcsR0FBR0gsUUFBUSxDQUFDQyxJQUFJLENBQUM7TUFDeEIsSUFBSUUsR0FBRyxFQUFFO1FBQ1IsSUFDQ2hCLE1BQU0sR0FFSGdCLEdBQUcsQ0FGTmhCLE1BQU07VUFDTkMsTUFBTSxHQUNIZSxHQUFHLENBRE5mLE1BQU07UUFFUCxJQUFJLENBQUNnQixXQUFXLENBQUNqQixNQUFNLEVBQUVDLE1BQU0sQ0FBQyxDQUFDaUIsSUFBSSxDQUFDLFlBQU07VUFDM0NKLElBQUksSUFBSSxDQUFDO1VBQ1QsTUFBSSxDQUFDSyxnQkFBZ0IsQ0FBQ04sUUFBUSxFQUFFQyxJQUFJLEVBQUVDLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUM7TUFDSCxDQUFDLE1BQU07UUFDTixJQUFJLENBQUNyQixtQkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDN0IsT0FBT3FCLEVBQUUsS0FBSyxVQUFVLElBQUlBLEVBQUUsRUFBRTtRQUNoQyxJQUFJLENBQUNLLEtBQUssR0FBRyxJQUFJO01BQ2xCO0lBQ0Q7RUFBQztJQUFBO0lBQUEsT0FFRCxnQkFBa0I7TUFBQSxJQUFibkIsTUFBTSx1RUFBRyxDQUFDLENBQUM7TUFLZixJQUFJLENBQUNQLG1CQUFtQixDQUFDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUNNLE1BQU0sR0FBR29CLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ2hDLE9BQU8sRUFBRVcsTUFBTSxDQUFDO01BQ3BGLElBQUksQ0FBQ1AsbUJBQW1CLENBQUMsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQ0ssTUFBTSxDQUFDdUIsZUFBZSxHQUFHLElBQUksQ0FBQzdCLG1CQUFtQixDQUFDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUNNLE1BQU0sQ0FBQ3NCLGVBQWU7TUFDdkgsSUFBSSxDQUFDNUIsSUFBSSxFQUFFO01BRVgsT0FBTyxJQUFJO0lBQ1o7RUFBQztJQUFBO0lBQUEsT0FFRCxhQUFJb0IsRUFBRSxFQUFFO01BUVAsSUFBSSxDQUFDSyxLQUFLLEdBQUcsS0FBSztNQUNsQixJQUFJZCxHQUFHLEdBQUcsSUFBSSxDQUFDVixDQUFDLENBQUNXLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUNYLENBQUMsQ0FBQ1csS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDRCxHQUFHO01BQ3hELElBQUcsQ0FBQ0EsR0FBRyxFQUFFO01BQ1QsSUFBSSxDQUFDYSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUN6QixtQkFBbUIsRUFBRSxDQUFDLEVBQUVxQixFQUFFLENBQUM7TUFDdEQsSUFBSSxDQUFDcEIsSUFBSSxHQUFHLENBQUM7SUFFZDtFQUFDO0VBQUE7QUFBQTtBQUlGLElBQU1PLGFBQWEsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUNySCxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQzlHLFlBQVksQ0FDWjtBQUNELElBQU1zQixhQUFhLEdBQUcsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUM7QUFDcEQsSUFBTUMsYUFBYSxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7QUFDM0V2QixhQUFhLENBQUN3QixNQUFNLENBQUNGLGFBQWEsRUFBRUMsYUFBYSxDQUFDLENBQUNFLE9BQU8sQ0FBQyxVQUFBOUIsSUFBSSxFQUFJO0VBQ2xFUixXQUFXLENBQUN1QyxTQUFTLENBQUMvQixJQUFJLENBQUMsR0FBRyxZQUFrQjtJQUFBLGtDQUFOQyxJQUFJO01BQUpBLElBQUk7SUFBQTtJQUs3QyxJQUFJLENBQUMrQixpQkFBaUIsQ0FBQ2hDLElBQUksRUFBRUMsSUFBSSxDQUFDO0lBRWxDLE9BQU8sSUFBSTtFQUNaLENBQUM7QUFDRixDQUFDLENBQUM7QUFFSyxTQUFTTCxlQUFlLENBQUNxQyxNQUFNLEVBQUV2QyxLQUFLLEVBQUU7RUFDOUMsSUFBRyxDQUFDQSxLQUFLLEVBQUU7RUFDWHdDLFlBQVksQ0FBQ3hDLEtBQUssQ0FBQ3lDLEtBQUssQ0FBQztFQUN6QixPQUFPLElBQUkzQyxXQUFXLENBQUN5QyxNQUFNLEVBQUV2QyxLQUFLLENBQUM7QUFDdEMsQyIsImZpbGUiOiIyOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGRlZmF1bHRPcHRpb24gPSB7XHJcbi8vIFx0ZHVyYXRpb246IDMwMCxcclxuLy8gXHR0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXHJcbi8vIFx0ZGVsYXk6IDAsXHJcbi8vIFx0dHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJSAwJ1xyXG4vLyB9XHJcblxyXG5jb25zdCBudnVlQW5pbWF0aW9uID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2FuaW1hdGlvbicpXHJcblxyXG5jbGFzcyBNUEFuaW1hdGlvbiB7XHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgX3RoaXMpIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcclxuXHRcdHRoaXMuYW5pbWF0aW9uID0gdW5pLmNyZWF0ZUFuaW1hdGlvbihvcHRpb25zKVxyXG5cdFx0dGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzID0ge31cclxuXHRcdHRoaXMubmV4dCA9IDBcclxuXHRcdHRoaXMuJCA9IF90aGlzXHJcblxyXG5cdH1cclxuXHJcblx0X252dWVQdXNoQW5pbWF0ZXModHlwZSwgYXJncykge1xyXG5cdFx0bGV0IGFuaU9iaiA9IHRoaXMuY3VycmVudFN0ZXBBbmltYXRlc1t0aGlzLm5leHRdXHJcblx0XHRsZXQgc3R5bGVzID0ge31cclxuXHRcdGlmICghYW5pT2JqKSB7XHJcblx0XHRcdHN0eWxlcyA9IHtcclxuXHRcdFx0XHRzdHlsZXM6IHt9LFxyXG5cdFx0XHRcdGNvbmZpZzoge31cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVzID0gYW5pT2JqXHJcblx0XHR9XHJcblx0XHRpZiAoYW5pbWF0ZVR5cGVzMS5pbmNsdWRlcyh0eXBlKSkge1xyXG5cdFx0XHRpZiAoIXN0eWxlcy5zdHlsZXMudHJhbnNmb3JtKSB7XHJcblx0XHRcdFx0c3R5bGVzLnN0eWxlcy50cmFuc2Zvcm0gPSAnJ1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB1bml0ID0gJydcclxuXHRcdFx0aWYodHlwZSA9PT0gJ3JvdGF0ZScpe1xyXG5cdFx0XHRcdHVuaXQgPSAnZGVnJ1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlcy5zdHlsZXMudHJhbnNmb3JtICs9IGAke3R5cGV9KCR7YXJncyt1bml0fSkgYFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVzLnN0eWxlc1t0eXBlXSA9IGAke2FyZ3N9YFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzW3RoaXMubmV4dF0gPSBzdHlsZXNcclxuXHR9XHJcblx0X2FuaW1hdGVSdW4oc3R5bGVzID0ge30sIGNvbmZpZyA9IHt9KSB7XHJcblx0XHRsZXQgcmVmID0gdGhpcy4kLiRyZWZzWydhbmknXS5yZWZcclxuXHRcdGlmICghcmVmKSByZXR1cm5cclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdG52dWVBbmltYXRpb24udHJhbnNpdGlvbihyZWYsIHtcclxuXHRcdFx0XHRzdHlsZXMsXHJcblx0XHRcdFx0Li4uY29uZmlnXHJcblx0XHRcdH0sIHJlcyA9PiB7XHJcblx0XHRcdFx0cmVzb2x2ZSgpXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0X252dWVOZXh0QW5pbWF0ZShhbmltYXRlcywgc3RlcCA9IDAsIGZuKSB7XHJcblx0XHRsZXQgb2JqID0gYW5pbWF0ZXNbc3RlcF1cclxuXHRcdGlmIChvYmopIHtcclxuXHRcdFx0bGV0IHtcclxuXHRcdFx0XHRzdHlsZXMsXHJcblx0XHRcdFx0Y29uZmlnXHJcblx0XHRcdH0gPSBvYmpcclxuXHRcdFx0dGhpcy5fYW5pbWF0ZVJ1bihzdHlsZXMsIGNvbmZpZykudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0c3RlcCArPSAxXHJcblx0XHRcdFx0dGhpcy5fbnZ1ZU5leHRBbmltYXRlKGFuaW1hdGVzLCBzdGVwLCBmbilcclxuXHRcdFx0fSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY3VycmVudFN0ZXBBbmltYXRlcyA9IHt9XHJcblx0XHRcdHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBmbigpXHJcblx0XHRcdHRoaXMuaXNFbmQgPSB0cnVlXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGVwKGNvbmZpZyA9IHt9KSB7XHJcblxyXG5cclxuXHJcblxyXG5cdFx0dGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzW3RoaXMubmV4dF0uY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCBjb25maWcpXHJcblx0XHR0aGlzLmN1cnJlbnRTdGVwQW5pbWF0ZXNbdGhpcy5uZXh0XS5zdHlsZXMudHJhbnNmb3JtT3JpZ2luID0gdGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzW3RoaXMubmV4dF0uY29uZmlnLnRyYW5zZm9ybU9yaWdpblxyXG5cdFx0dGhpcy5uZXh0KytcclxuXHJcblx0XHRyZXR1cm4gdGhpc1xyXG5cdH1cclxuXHJcblx0cnVuKGZuKSB7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdFx0dGhpcy5pc0VuZCA9IGZhbHNlXHJcblx0XHRsZXQgcmVmID0gdGhpcy4kLiRyZWZzWydhbmknXSAmJiB0aGlzLiQuJHJlZnNbJ2FuaSddLnJlZlxyXG5cdFx0aWYoIXJlZikgcmV0dXJuXHJcblx0XHR0aGlzLl9udnVlTmV4dEFuaW1hdGUodGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzLCAwLCBmbilcclxuXHRcdHRoaXMubmV4dCA9IDBcclxuXHJcblx0fVxyXG59XHJcblxyXG5cclxuY29uc3QgYW5pbWF0ZVR5cGVzMSA9IFsnbWF0cml4JywgJ21hdHJpeDNkJywgJ3JvdGF0ZScsICdyb3RhdGUzZCcsICdyb3RhdGVYJywgJ3JvdGF0ZVknLCAncm90YXRlWicsICdzY2FsZScsICdzY2FsZTNkJyxcclxuXHQnc2NhbGVYJywgJ3NjYWxlWScsICdzY2FsZVonLCAnc2tldycsICdza2V3WCcsICdza2V3WScsICd0cmFuc2xhdGUnLCAndHJhbnNsYXRlM2QnLCAndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJyxcclxuXHQndHJhbnNsYXRlWidcclxuXVxyXG5jb25zdCBhbmltYXRlVHlwZXMyID0gWydvcGFjaXR5JywgJ2JhY2tncm91bmRDb2xvciddXHJcbmNvbnN0IGFuaW1hdGVUeXBlczMgPSBbJ3dpZHRoJywgJ2hlaWdodCcsICdsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXVxyXG5hbmltYXRlVHlwZXMxLmNvbmNhdChhbmltYXRlVHlwZXMyLCBhbmltYXRlVHlwZXMzKS5mb3JFYWNoKHR5cGUgPT4ge1xyXG5cdE1QQW5pbWF0aW9uLnByb3RvdHlwZVt0eXBlXSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcclxuXHJcblxyXG5cclxuXHJcblx0XHR0aGlzLl9udnVlUHVzaEFuaW1hdGVzKHR5cGUsIGFyZ3MpXHJcblxyXG5cdFx0cmV0dXJuIHRoaXNcclxuXHR9XHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5pbWF0aW9uKG9wdGlvbiwgX3RoaXMpIHtcclxuXHRpZighX3RoaXMpIHJldHVyblxyXG5cdGNsZWFyVGltZW91dChfdGhpcy50aW1lcilcclxuXHRyZXR1cm4gbmV3IE1QQW5pbWF0aW9uKG9wdGlvbiwgX3RoaXMpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requireNativePlugin;
function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 30 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 31 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 26);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 32 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 33 */
/*!*************************************************************************************************************************!*\
  !*** C:/Users/谭福华/Desktop/HousePaint/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=script&lang=js& */ 34);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVhLENBQWdCLG1kQUFHLEVBQUMiLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/谭福华/Desktop/HousePaint/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/**\n * PopUp 弹出层\n * @description 弹出层组件，为了解决遮罩弹层的问题\n * @tutorial https://ext.dcloud.net.cn/plugin?id=329\n * @property {String} type = [top|center|bottom|left|right|message|dialog|share] 弹出方式\n * \t@value top 顶部弹出\n * \t@value center 中间弹出\n * \t@value bottom 底部弹出\n * \t@value left\t\t左侧弹出\n * \t@value right  右侧弹出\n * \t@value message 消息提示\n * \t@value dialog 对话框\n * \t@value share 底部分享示例\n * @property {Boolean} animation = [true|false] 是否开启动画\n * @property {Boolean} maskClick = [true|false] 蒙版点击是否关闭弹窗(废弃)\n * @property {Boolean} isMaskClick = [true|false] 蒙版点击是否关闭弹窗\n * @property {String}  backgroundColor 主窗口背景色\n * @property {String}  maskBackgroundColor 蒙版颜色\n * @property {Boolean} safeArea\t\t   是否适配底部安全区\n * @event {Function} change 打开关闭弹窗触发，e={show: false}\n * @event {Function} maskClick 点击遮罩触发\n */\nvar _default = {\n  name: 'uniPopup',\n  components: {},\n  emits: ['change', 'maskClick'],\n  props: {\n    // 开启动画\n    animation: {\n      type: Boolean,\n      default: true\n    },\n    // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层\n    // message: 消息提示 ; dialog : 对话框\n    type: {\n      type: String,\n      default: 'center'\n    },\n    // maskClick\n    isMaskClick: {\n      type: Boolean,\n      default: null\n    },\n    // TODO 2 个版本后废弃属性 ，使用 isMaskClick\n    maskClick: {\n      type: Boolean,\n      default: null\n    },\n    backgroundColor: {\n      type: String,\n      default: 'none'\n    },\n    safeArea: {\n      type: Boolean,\n      default: true\n    },\n    maskBackgroundColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.4)'\n    }\n  },\n  watch: {\n    /**\n     * 监听type类型\n     */\n    type: {\n      handler: function handler(type) {\n        if (!this.config[type]) return;\n        this[this.config[type]](true);\n      },\n      immediate: true\n    },\n    isDesktop: {\n      handler: function handler(newVal) {\n        if (!this.config[newVal]) return;\n        this[this.config[this.type]](true);\n      },\n      immediate: true\n    },\n    /**\n     * 监听遮罩是否可点击\n     * @param {Object} val\n     */\n    maskClick: {\n      handler: function handler(val) {\n        this.mkclick = val;\n      },\n      immediate: true\n    },\n    isMaskClick: {\n      handler: function handler(val) {\n        this.mkclick = val;\n      },\n      immediate: true\n    },\n    // H5 下禁止底部滚动\n    showPopup: function showPopup(show) {}\n  },\n  data: function data() {\n    return {\n      duration: 300,\n      ani: [],\n      showPopup: false,\n      showTrans: false,\n      popupWidth: 0,\n      popupHeight: 0,\n      config: {\n        top: 'top',\n        bottom: 'bottom',\n        center: 'center',\n        left: 'left',\n        right: 'right',\n        message: 'top',\n        dialog: 'center',\n        share: 'bottom'\n      },\n      maskClass: {\n        position: 'fixed',\n        bottom: 0,\n        top: 0,\n        left: 0,\n        right: 0,\n        backgroundColor: 'rgba(0, 0, 0, 0.4)'\n      },\n      transClass: {\n        position: 'fixed',\n        left: 0,\n        right: 0\n      },\n      maskShow: true,\n      mkclick: true,\n      popupstyle: this.isDesktop ? 'fixforpc-top' : 'top'\n    };\n  },\n  computed: {\n    isDesktop: function isDesktop() {\n      return this.popupWidth >= 500 && this.popupHeight >= 500;\n    },\n    bg: function bg() {\n      if (this.backgroundColor === '' || this.backgroundColor === 'none') {\n        return 'transparent';\n      }\n      return this.backgroundColor;\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n    var fixSize = function fixSize() {\n      var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),\n        windowWidth = _uni$getSystemInfoSyn.windowWidth,\n        windowHeight = _uni$getSystemInfoSyn.windowHeight,\n        windowTop = _uni$getSystemInfoSyn.windowTop,\n        safeArea = _uni$getSystemInfoSyn.safeArea,\n        screenHeight = _uni$getSystemInfoSyn.screenHeight,\n        safeAreaInsets = _uni$getSystemInfoSyn.safeAreaInsets;\n      _this.popupWidth = windowWidth;\n      _this.popupHeight = windowHeight + (windowTop || 0);\n      // TODO fix by mehaotian 是否适配底部安全区 ,目前微信ios 、和 app ios 计算有差异，需要框架修复\n      if (safeArea && _this.safeArea) {\n        _this.safeAreaInsets = safeAreaInsets.bottom;\n      } else {\n        _this.safeAreaInsets = 0;\n      }\n    };\n    fixSize();\n  },\n  // TODO vue2\n  destroyed: function destroyed() {\n    this.setH5Visible();\n  },\n  created: function created() {\n    // this.mkclick =  this.isMaskClick || this.maskClick\n    if (this.isMaskClick === null && this.maskClick === null) {\n      this.mkclick = true;\n    } else {\n      this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;\n    }\n    if (this.animation) {\n      this.duration = 300;\n    } else {\n      this.duration = 0;\n    }\n    // TODO 处理 message 组件生命周期异常的问题\n    this.messageChild = null;\n    // TODO 解决头条冒泡的问题\n    this.clearPropagation = false;\n    this.maskClass.backgroundColor = this.maskBackgroundColor;\n  },\n  methods: {\n    setH5Visible: function setH5Visible() {},\n    /**\n     * 公用方法，不显示遮罩层\n     */\n    closeMask: function closeMask() {\n      this.maskShow = false;\n    },\n    /**\n     * 公用方法，遮罩层禁止点击\n     */\n    disableMask: function disableMask() {\n      this.mkclick = false;\n    },\n    // TODO nvue 取消冒泡\n    clear: function clear(e) {\n      this.clearPropagation = true;\n    },\n    open: function open(direction) {\n      // fix by mehaotian 处理快速打开关闭的情况\n      if (this.showPopup) {\n        clearTimeout(this.timer);\n        this.showPopup = false;\n      }\n      var innerType = ['top', 'center', 'bottom', 'left', 'right', 'message', 'dialog', 'share'];\n      if (!(direction && innerType.indexOf(direction) !== -1)) {\n        direction = this.type;\n      }\n      if (!this.config[direction]) {\n        __f__(\"error\", '缺少类型：', direction, \" at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:280\");\n        return;\n      }\n      this[this.config[direction]]();\n      this.$emit('change', {\n        show: true,\n        type: direction\n      });\n    },\n    close: function close(type) {\n      var _this2 = this;\n      this.showTrans = false;\n      this.$emit('change', {\n        show: false,\n        type: this.type\n      });\n      clearTimeout(this.timer);\n      // // 自定义关闭事件\n      // this.customOpen && this.customClose()\n      this.timer = setTimeout(function () {\n        _this2.showPopup = false;\n      }, 300);\n    },\n    // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容\n    touchstart: function touchstart() {\n      this.clearPropagation = false;\n    },\n    onTap: function onTap() {\n      if (this.clearPropagation) {\n        // fix by mehaotian 兼容 nvue\n        this.clearPropagation = false;\n        return;\n      }\n      this.$emit('maskClick');\n      if (!this.mkclick) return;\n      this.close();\n    },\n    /**\n     * 顶部弹出样式处理\n     */\n    top: function top(type) {\n      var _this3 = this;\n      this.popupstyle = this.isDesktop ? 'fixforpc-top' : 'top';\n      this.ani = ['slide-top'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        right: 0,\n        backgroundColor: this.bg\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n      this.$nextTick(function () {\n        if (_this3.messageChild && _this3.type === 'message') {\n          _this3.messageChild.timerClose();\n        }\n      });\n    },\n    /**\n     * 底部弹出样式处理\n     */\n    bottom: function bottom(type) {\n      this.popupstyle = 'bottom';\n      this.ani = ['slide-bottom'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        right: 0,\n        bottom: 0,\n        paddingBottom: this.safeAreaInsets + 'px',\n        backgroundColor: this.bg\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    /**\n     * 中间弹出样式处理\n     */\n    center: function center(type) {\n      this.popupstyle = 'center';\n      this.ani = ['zoom-out', 'fade'];\n      this.transClass = {\n        position: 'fixed',\n        bottom: 0,\n        left: 0,\n        right: 0,\n        top: 0,\n        justifyContent: 'center',\n        alignItems: 'center'\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    left: function left(type) {\n      this.popupstyle = 'left';\n      this.ani = ['slide-left'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        bottom: 0,\n        top: 0,\n        backgroundColor: this.bg\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    right: function right(type) {\n      this.popupstyle = 'right';\n      this.ani = ['slide-right'];\n      this.transClass = {\n        position: 'fixed',\n        bottom: 0,\n        right: 0,\n        top: 0,\n        backgroundColor: this.bg\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 16)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cC52dWUiXSwibmFtZXMiOlsibmFtZSIsImNvbXBvbmVudHMiLCJlbWl0cyIsInByb3BzIiwiYW5pbWF0aW9uIiwidHlwZSIsImRlZmF1bHQiLCJpc01hc2tDbGljayIsIm1hc2tDbGljayIsImJhY2tncm91bmRDb2xvciIsInNhZmVBcmVhIiwibWFza0JhY2tncm91bmRDb2xvciIsIndhdGNoIiwiaGFuZGxlciIsImltbWVkaWF0ZSIsImlzRGVza3RvcCIsInNob3dQb3B1cCIsImRhdGEiLCJkdXJhdGlvbiIsImFuaSIsInNob3dUcmFucyIsInBvcHVwV2lkdGgiLCJwb3B1cEhlaWdodCIsImNvbmZpZyIsInRvcCIsImJvdHRvbSIsImNlbnRlciIsImxlZnQiLCJyaWdodCIsIm1lc3NhZ2UiLCJkaWFsb2ciLCJzaGFyZSIsIm1hc2tDbGFzcyIsInBvc2l0aW9uIiwidHJhbnNDbGFzcyIsIm1hc2tTaG93IiwibWtjbGljayIsInBvcHVwc3R5bGUiLCJjb21wdXRlZCIsImJnIiwibW91bnRlZCIsInVuaSIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0Iiwid2luZG93VG9wIiwic2NyZWVuSGVpZ2h0Iiwic2FmZUFyZWFJbnNldHMiLCJmaXhTaXplIiwiZGVzdHJveWVkIiwiY3JlYXRlZCIsIm1ldGhvZHMiLCJzZXRINVZpc2libGUiLCJjbG9zZU1hc2siLCJkaXNhYmxlTWFzayIsImNsZWFyIiwib3BlbiIsImNsZWFyVGltZW91dCIsImRpcmVjdGlvbiIsInNob3ciLCJjbG9zZSIsInRvdWNoc3RhcnQiLCJvblRhcCIsInBhZGRpbmdCb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQSxlQXVCQTtFQUNBQTtFQUNBQyxhQUlBO0VBQ0FDO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtJQUNBO0lBQ0E7SUFDQUQ7TUFDQUE7TUFDQUM7SUFDQTtJQUNBO0lBQ0FDO01BQ0FGO01BQ0FDO0lBQ0E7SUFDQTtJQUNBRTtNQUNBSDtNQUNBQztJQUNBO0lBQ0FHO01BQ0FKO01BQ0FDO0lBQ0E7SUFDQUk7TUFDQUw7TUFDQUM7SUFDQTtJQUNBSztNQUNBTjtNQUNBQztJQUNBO0VBQ0E7RUFFQU07SUFDQTtBQUNBO0FBQ0E7SUFDQVA7TUFDQVE7UUFDQTtRQUNBO01BQ0E7TUFDQUM7SUFDQTtJQUNBQztNQUNBRjtRQUNBO1FBQ0E7TUFDQTtNQUNBQztJQUNBO0lBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQU47TUFDQUs7UUFDQTtNQUNBO01BQ0FDO0lBQ0E7SUFDQVA7TUFDQU07UUFDQTtNQUNBO01BQ0FDO0lBQ0E7SUFDQTtJQUNBRSxxQ0FLQTtFQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUg7TUFDQUk7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUNBQztRQUNBQztRQUNBUjtRQUNBRDtRQUNBRztRQUNBQztRQUNBbkI7TUFDQTtNQUNBeUI7UUFDQUQ7UUFDQU47UUFDQUM7TUFDQTtNQUNBTztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQXZCO01BQ0E7SUFDQTtJQUNBd0I7TUFDQTtRQUNBO01BQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFBQTtJQUNBO01BQ0EsNEJBT0FDO1FBTkFDO1FBQ0FDO1FBQ0FDO1FBQ0FsQztRQUNBbUM7UUFDQUM7TUFFQTtNQUNBO01BQ0E7TUFDQTtRQUtBO01BRUE7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7RUFPQTtFQUVBO0VBQ0FDO0lBQ0E7RUFDQTtFQVFBQztJQUNBO0lBQ0E7TUFDQTtJQUNBO01BQ0E7SUFDQTtJQUNBO01BQ0E7SUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUMsdUNBS0E7SUFDQTtBQUNBO0FBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BSUE7SUFDQTtJQUVBQztNQUNBO01BQ0E7UUFDQUM7UUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBQztNQUNBO01BQ0E7UUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0FDO1FBQ0FyRDtNQUNBO0lBQ0E7SUFDQXNEO01BQUE7TUFDQTtNQUNBO1FBQ0FEO1FBQ0FyRDtNQUNBO01BQ0FtRDtNQUNBO01BQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FJO01BQ0E7SUFDQTtJQUVBQztNQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBckM7TUFBQTtNQUNBO01BQ0E7TUFDQTtRQUNBUztRQUNBTjtRQUNBQztRQUNBbkI7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FnQjtNQUNBO01BQ0E7TUFDQTtRQUNBUTtRQUNBTjtRQUNBQztRQUNBSDtRQUNBcUM7UUFDQXJEO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FpQjtNQUNBO01BQ0E7TUFDQTtRQUNBTztRQUtBUjtRQUNBRTtRQUNBQztRQUNBSjtRQUNBdUM7UUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQXJDO01BQ0E7TUFDQTtNQUNBO1FBQ0FNO1FBQ0FOO1FBQ0FGO1FBQ0FEO1FBQ0FmO01BS0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FtQjtNQUNBO01BQ0E7TUFDQTtRQUNBSztRQUNBUjtRQUNBRztRQUNBSjtRQUNBZjtNQUtBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiIzNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgdi1pZj1cInNob3dQb3B1cFwiIGNsYXNzPVwidW5pLXBvcHVwXCIgOmNsYXNzPVwiW3BvcHVwc3R5bGUsIGlzRGVza3RvcCA/ICdmaXhmb3JwYy16LWluZGV4JyA6ICcnXVwiPlxuXHRcdDx2aWV3IEB0b3VjaHN0YXJ0PVwidG91Y2hzdGFydFwiPlxuXHRcdFx0PHVuaS10cmFuc2l0aW9uIGtleT1cIjFcIiB2LWlmPVwibWFza1Nob3dcIiBuYW1lPVwibWFza1wiIG1vZGUtY2xhc3M9XCJmYWRlXCIgOnN0eWxlcz1cIm1hc2tDbGFzc1wiXG5cdFx0XHRcdDpkdXJhdGlvbj1cImR1cmF0aW9uXCIgOnNob3c9XCJzaG93VHJhbnNcIiBAY2xpY2s9XCJvblRhcFwiIC8+XG5cdFx0XHQ8dW5pLXRyYW5zaXRpb24ga2V5PVwiMlwiIDptb2RlLWNsYXNzPVwiYW5pXCIgbmFtZT1cImNvbnRlbnRcIiA6c3R5bGVzPVwidHJhbnNDbGFzc1wiIDpkdXJhdGlvbj1cImR1cmF0aW9uXCJcblx0XHRcdFx0OnNob3c9XCJzaG93VHJhbnNcIiBAY2xpY2s9XCJvblRhcFwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1wb3B1cF9fd3JhcHBlclwiIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBiZyB9XCIgOmNsYXNzPVwiW3BvcHVwc3R5bGVdXCIgQGNsaWNrPVwiY2xlYXJcIj5cblx0XHRcdFx0XHQ8c2xvdCAvPlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3VuaS10cmFuc2l0aW9uPlxuXHRcdDwvdmlldz5cblx0XHQ8IS0tICNpZmRlZiBINSAtLT5cblx0XHQ8a2V5cHJlc3Mgdi1pZj1cIm1hc2tTaG93XCIgQGVzYz1cIm9uVGFwXCIgLz5cblx0XHQ8IS0tICNlbmRpZiAtLT5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0Ly8gI2lmZGVmIEg1XG5cdGltcG9ydCBrZXlwcmVzcyBmcm9tICcuL2tleXByZXNzLmpzJ1xuXHQvLyAjZW5kaWZcblxuXHQvKipcblx0ICogUG9wVXAg5by55Ye65bGCXG5cdCAqIEBkZXNjcmlwdGlvbiDlvLnlh7rlsYLnu4Tku7bvvIzkuLrkuobop6PlhrPpga7nvanlvLnlsYLnmoTpl67pophcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTMyOVxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gdHlwZSA9IFt0b3B8Y2VudGVyfGJvdHRvbXxsZWZ0fHJpZ2h0fG1lc3NhZ2V8ZGlhbG9nfHNoYXJlXSDlvLnlh7rmlrnlvI9cblx0ICogXHRAdmFsdWUgdG9wIOmhtumDqOW8ueWHulxuXHQgKiBcdEB2YWx1ZSBjZW50ZXIg5Lit6Ze05by55Ye6XG5cdCAqIFx0QHZhbHVlIGJvdHRvbSDlupXpg6jlvLnlh7pcblx0ICogXHRAdmFsdWUgbGVmdFx0XHTlt6bkvqflvLnlh7pcblx0ICogXHRAdmFsdWUgcmlnaHQgIOWPs+S+p+W8ueWHulxuXHQgKiBcdEB2YWx1ZSBtZXNzYWdlIOa2iOaBr+aPkOekulxuXHQgKiBcdEB2YWx1ZSBkaWFsb2cg5a+56K+d5qGGXG5cdCAqIFx0QHZhbHVlIHNoYXJlIOW6lemDqOWIhuS6q+ekuuS+i1xuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFuaW1hdGlvbiA9IFt0cnVlfGZhbHNlXSDmmK/lkKblvIDlkK/liqjnlLtcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBtYXNrQ2xpY2sgPSBbdHJ1ZXxmYWxzZV0g6JKZ54mI54K55Ye75piv5ZCm5YWz6Zet5by556qXKOW6n+W8gylcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBpc01hc2tDbGljayA9IFt0cnVlfGZhbHNlXSDokpnniYjngrnlh7vmmK/lkKblhbPpl63lvLnnqpdcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9ICBiYWNrZ3JvdW5kQ29sb3Ig5Li756qX5Y+j6IOM5pmv6ImyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSAgbWFza0JhY2tncm91bmRDb2xvciDokpnniYjpopzoibJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBzYWZlQXJlYVx0XHQgICDmmK/lkKbpgILphY3lupXpg6jlronlhajljLpcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gY2hhbmdlIOaJk+W8gOWFs+mXreW8ueeql+inpuWPke+8jGU9e3Nob3c6IGZhbHNlfVxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBtYXNrQ2xpY2sg54K55Ye76YGu572p6Kem5Y+RXG5cdCAqL1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAndW5pUG9wdXAnLFxuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdC8vICNpZmRlZiBINVxuXHRcdFx0a2V5cHJlc3Ncblx0XHRcdC8vICNlbmRpZlxuXHRcdH0sXG5cdFx0ZW1pdHM6IFsnY2hhbmdlJywgJ21hc2tDbGljayddLFxuXHRcdHByb3BzOiB7XG5cdFx0XHQvLyDlvIDlkK/liqjnlLtcblx0XHRcdGFuaW1hdGlvbjoge1xuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5by55Ye65bGC57G75Z6L77yM5Y+v6YCJ5YC877yMdG9wOiDpobbpg6jlvLnlh7rlsYLvvJtib3R0b23vvJrlupXpg6jlvLnlh7rlsYLvvJtjZW50ZXLvvJrlhajlsY/lvLnlh7rlsYJcblx0XHRcdC8vIG1lc3NhZ2U6IOa2iOaBr+aPkOekuiA7IGRpYWxvZyA6IOWvueivneahhlxuXHRcdFx0dHlwZToge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICdjZW50ZXInXG5cdFx0XHR9LFxuXHRcdFx0Ly8gbWFza0NsaWNrXG5cdFx0XHRpc01hc2tDbGljazoge1xuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OiBudWxsXG5cdFx0XHR9LFxuXHRcdFx0Ly8gVE9ETyAyIOS4queJiOacrOWQjuW6n+W8g+WxnuaApyDvvIzkvb/nlKggaXNNYXNrQ2xpY2tcblx0XHRcdG1hc2tDbGljazoge1xuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OiBudWxsXG5cdFx0XHR9LFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJ25vbmUnXG5cdFx0XHR9LFxuXHRcdFx0c2FmZUFyZWE6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdG1hc2tCYWNrZ3JvdW5kQ29sb3I6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjQpJ1xuXHRcdFx0fSxcblx0XHR9LFxuXG5cdFx0d2F0Y2g6IHtcblx0XHRcdC8qKlxuXHRcdFx0ICog55uR5ZCsdHlwZeexu+Wei1xuXHRcdFx0ICovXG5cdFx0XHR0eXBlOiB7XG5cdFx0XHRcdGhhbmRsZXI6IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHRcdFx0XHRpZiAoIXRoaXMuY29uZmlnW3R5cGVdKSByZXR1cm5cblx0XHRcdFx0XHR0aGlzW3RoaXMuY29uZmlnW3R5cGVdXSh0cnVlKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRpc0Rlc2t0b3A6IHtcblx0XHRcdFx0aGFuZGxlcjogZnVuY3Rpb24obmV3VmFsKSB7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLmNvbmZpZ1tuZXdWYWxdKSByZXR1cm5cblx0XHRcdFx0XHR0aGlzW3RoaXMuY29uZmlnW3RoaXMudHlwZV1dKHRydWUpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICog55uR5ZCs6YGu572p5piv5ZCm5Y+v54K55Ye7XG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdH0gdmFsXG5cdFx0XHQgKi9cblx0XHRcdG1hc2tDbGljazoge1xuXHRcdFx0XHRoYW5kbGVyOiBmdW5jdGlvbih2YWwpIHtcblx0XHRcdFx0XHR0aGlzLm1rY2xpY2sgPSB2YWxcblx0XHRcdFx0fSxcblx0XHRcdFx0aW1tZWRpYXRlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0aXNNYXNrQ2xpY2s6IHtcblx0XHRcdFx0aGFuZGxlcjogZnVuY3Rpb24odmFsKSB7XG5cdFx0XHRcdFx0dGhpcy5ta2NsaWNrID0gdmFsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdC8vIEg1IOS4i+emgeatouW6lemDqOa7muWKqFxuXHRcdFx0c2hvd1BvcHVwKHNob3cpIHtcblx0XHRcdFx0Ly8gI2lmZGVmIEg1XG5cdFx0XHRcdC8vIGZpeCBieSBtZWhhb3RpYW4g5aSE55CGIGg1IOa7muWKqOepv+mAj+eahOmXrumimFxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gc2hvdyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXG5cdFx0XHRcdC8vICNlbmRpZlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGR1cmF0aW9uOiAzMDAsXG5cdFx0XHRcdGFuaTogW10sXG5cdFx0XHRcdHNob3dQb3B1cDogZmFsc2UsXG5cdFx0XHRcdHNob3dUcmFuczogZmFsc2UsXG5cdFx0XHRcdHBvcHVwV2lkdGg6IDAsXG5cdFx0XHRcdHBvcHVwSGVpZ2h0OiAwLFxuXHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHR0b3A6ICd0b3AnLFxuXHRcdFx0XHRcdGJvdHRvbTogJ2JvdHRvbScsXG5cdFx0XHRcdFx0Y2VudGVyOiAnY2VudGVyJyxcblx0XHRcdFx0XHRsZWZ0OiAnbGVmdCcsXG5cdFx0XHRcdFx0cmlnaHQ6ICdyaWdodCcsXG5cdFx0XHRcdFx0bWVzc2FnZTogJ3RvcCcsXG5cdFx0XHRcdFx0ZGlhbG9nOiAnY2VudGVyJyxcblx0XHRcdFx0XHRzaGFyZTogJ2JvdHRvbSdcblx0XHRcdFx0fSxcblx0XHRcdFx0bWFza0NsYXNzOiB7XG5cdFx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0XHRcdFx0Ym90dG9tOiAwLFxuXHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdHJpZ2h0OiAwLFxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC40KSdcblx0XHRcdFx0fSxcblx0XHRcdFx0dHJhbnNDbGFzczoge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdFx0cmlnaHQ6IDBcblx0XHRcdFx0fSxcblx0XHRcdFx0bWFza1Nob3c6IHRydWUsXG5cdFx0XHRcdG1rY2xpY2s6IHRydWUsXG5cdFx0XHRcdHBvcHVwc3R5bGU6IHRoaXMuaXNEZXNrdG9wID8gJ2ZpeGZvcnBjLXRvcCcgOiAndG9wJ1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdGlzRGVza3RvcCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucG9wdXBXaWR0aCA+PSA1MDAgJiYgdGhpcy5wb3B1cEhlaWdodCA+PSA1MDBcblx0XHRcdH0sXG5cdFx0XHRiZygpIHtcblx0XHRcdFx0aWYgKHRoaXMuYmFja2dyb3VuZENvbG9yID09PSAnJyB8fCB0aGlzLmJhY2tncm91bmRDb2xvciA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdFx0cmV0dXJuICd0cmFuc3BhcmVudCdcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1vdW50ZWQoKSB7XG5cdFx0XHRjb25zdCBmaXhTaXplID0gKCkgPT4ge1xuXHRcdFx0XHRjb25zdCB7XG5cdFx0XHRcdFx0d2luZG93V2lkdGgsXG5cdFx0XHRcdFx0d2luZG93SGVpZ2h0LFxuXHRcdFx0XHRcdHdpbmRvd1RvcCxcblx0XHRcdFx0XHRzYWZlQXJlYSxcblx0XHRcdFx0XHRzY3JlZW5IZWlnaHQsXG5cdFx0XHRcdFx0c2FmZUFyZWFJbnNldHNcblx0XHRcdFx0fSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpXG5cdFx0XHRcdHRoaXMucG9wdXBXaWR0aCA9IHdpbmRvd1dpZHRoXG5cdFx0XHRcdHRoaXMucG9wdXBIZWlnaHQgPSB3aW5kb3dIZWlnaHQgKyAod2luZG93VG9wIHx8IDApXG5cdFx0XHRcdC8vIFRPRE8gZml4IGJ5IG1laGFvdGlhbiDmmK/lkKbpgILphY3lupXpg6jlronlhajljLogLOebruWJjeW+ruS/oWlvcyDjgIHlkowgYXBwIGlvcyDorqHnrpfmnInlt67lvILvvIzpnIDopoHmoYbmnrbkv67lpI1cblx0XHRcdFx0aWYgKHNhZmVBcmVhICYmIHRoaXMuc2FmZUFyZWEpIHtcblx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOXG5cdFx0XHRcdFx0dGhpcy5zYWZlQXJlYUluc2V0cyA9IHNjcmVlbkhlaWdodCAtIHNhZmVBcmVhLmJvdHRvbVxuXHRcdFx0XHRcdC8vICNlbmRpZlxuXHRcdFx0XHRcdC8vICNpZm5kZWYgTVAtV0VJWElOXG5cdFx0XHRcdFx0dGhpcy5zYWZlQXJlYUluc2V0cyA9IHNhZmVBcmVhSW5zZXRzLmJvdHRvbVxuXHRcdFx0XHRcdC8vICNlbmRpZlxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2FmZUFyZWFJbnNldHMgPSAwXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZpeFNpemUoKVxuXHRcdFx0Ly8gI2lmZGVmIEg1XG5cdFx0XHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4U2l6ZSlcblx0XHRcdC8vIHRoaXMuJG9uY2UoJ2hvb2s6YmVmb3JlRGVzdHJveScsICgpID0+IHtcblx0XHRcdC8vIFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZpeFNpemUpXG5cdFx0XHQvLyB9KVxuXHRcdFx0Ly8gI2VuZGlmXG5cdFx0fSxcblx0XHQvLyAjaWZuZGVmIFZVRTNcblx0XHQvLyBUT0RPIHZ1ZTJcblx0XHRkZXN0cm95ZWQoKSB7XG5cdFx0XHR0aGlzLnNldEg1VmlzaWJsZSgpXG5cdFx0fSxcblx0XHQvLyAjZW5kaWZcblx0XHQvLyAjaWZkZWYgVlVFM1xuXHRcdC8vIFRPRE8gdnVlM1xuXHRcdHVubW91bnRlZCgpIHtcblx0XHRcdHRoaXMuc2V0SDVWaXNpYmxlKClcblx0XHR9LFxuXHRcdC8vICNlbmRpZlxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHQvLyB0aGlzLm1rY2xpY2sgPSAgdGhpcy5pc01hc2tDbGljayB8fCB0aGlzLm1hc2tDbGlja1xuXHRcdFx0aWYgKHRoaXMuaXNNYXNrQ2xpY2sgPT09IG51bGwgJiYgdGhpcy5tYXNrQ2xpY2sgPT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5ta2NsaWNrID0gdHJ1ZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5ta2NsaWNrID0gdGhpcy5pc01hc2tDbGljayAhPT0gbnVsbCA/IHRoaXMuaXNNYXNrQ2xpY2sgOiB0aGlzLm1hc2tDbGlja1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuYW5pbWF0aW9uKSB7XG5cdFx0XHRcdHRoaXMuZHVyYXRpb24gPSAzMDBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZHVyYXRpb24gPSAwXG5cdFx0XHR9XG5cdFx0XHQvLyBUT0RPIOWkhOeQhiBtZXNzYWdlIOe7hOS7tueUn+WRveWRqOacn+W8guW4uOeahOmXrumimFxuXHRcdFx0dGhpcy5tZXNzYWdlQ2hpbGQgPSBudWxsXG5cdFx0XHQvLyBUT0RPIOino+WGs+WktOadoeWGkuazoeeahOmXrumimFxuXHRcdFx0dGhpcy5jbGVhclByb3BhZ2F0aW9uID0gZmFsc2Vcblx0XHRcdHRoaXMubWFza0NsYXNzLmJhY2tncm91bmRDb2xvciA9IHRoaXMubWFza0JhY2tncm91bmRDb2xvclxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0c2V0SDVWaXNpYmxlKCkge1xuXHRcdFx0XHQvLyAjaWZkZWYgSDVcblx0XHRcdFx0Ly8gZml4IGJ5IG1laGFvdGlhbiDlpITnkIYgaDUg5rua5Yqo56m/6YCP55qE6Zeu6aKYXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSdcblx0XHRcdFx0Ly8gI2VuZGlmXG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiDlhaznlKjmlrnms5XvvIzkuI3mmL7npLrpga7nvanlsYJcblx0XHRcdCAqL1xuXHRcdFx0Y2xvc2VNYXNrKCkge1xuXHRcdFx0XHR0aGlzLm1hc2tTaG93ID0gZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIOWFrOeUqOaWueazle+8jOmBrue9qeWxguemgeatoueCueWHu1xuXHRcdFx0ICovXG5cdFx0XHRkaXNhYmxlTWFzaygpIHtcblx0XHRcdFx0dGhpcy5ta2NsaWNrID0gZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHQvLyBUT0RPIG52dWUg5Y+W5raI5YaS5rOhXG5cdFx0XHRjbGVhcihlKSB7XG5cdFx0XHRcdC8vICNpZm5kZWYgQVBQLU5WVUVcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0XHQvLyAjZW5kaWZcblx0XHRcdFx0dGhpcy5jbGVhclByb3BhZ2F0aW9uID0gdHJ1ZVxuXHRcdFx0fSxcblxuXHRcdFx0b3BlbihkaXJlY3Rpb24pIHtcblx0XHRcdFx0Ly8gZml4IGJ5IG1laGFvdGlhbiDlpITnkIblv6vpgJ/miZPlvIDlhbPpl63nmoTmg4XlhrVcblx0XHRcdFx0aWYgKHRoaXMuc2hvd1BvcHVwKSB7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG5cdFx0XHRcdFx0dGhpcy5zaG93UG9wdXAgPSBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBpbm5lclR5cGUgPSBbJ3RvcCcsICdjZW50ZXInLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnLCAnbWVzc2FnZScsICdkaWFsb2cnLCAnc2hhcmUnXVxuXHRcdFx0XHRpZiAoIShkaXJlY3Rpb24gJiYgaW5uZXJUeXBlLmluZGV4T2YoZGlyZWN0aW9uKSAhPT0gLTEpKSB7XG5cdFx0XHRcdFx0ZGlyZWN0aW9uID0gdGhpcy50eXBlXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCF0aGlzLmNvbmZpZ1tkaXJlY3Rpb25dKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcign57y65bCR57G75Z6L77yaJywgZGlyZWN0aW9uKVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXNbdGhpcy5jb25maWdbZGlyZWN0aW9uXV0oKVxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdFx0XHR0eXBlOiBkaXJlY3Rpb25cblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRjbG9zZSh0eXBlKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1RyYW5zID0gZmFsc2Vcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xuXHRcdFx0XHRcdHNob3c6IGZhbHNlLFxuXHRcdFx0XHRcdHR5cGU6IHRoaXMudHlwZVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lcilcblx0XHRcdFx0Ly8gLy8g6Ieq5a6a5LmJ5YWz6Zet5LqL5Lu2XG5cdFx0XHRcdC8vIHRoaXMuY3VzdG9tT3BlbiAmJiB0aGlzLmN1c3RvbUNsb3NlKClcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gZmFsc2Vcblx0XHRcdFx0fSwgMzAwKVxuXHRcdFx0fSxcblx0XHRcdC8vIFRPRE8g5aSE55CG5YaS5rOh5LqL5Lu277yM5aS05p2h55qE5YaS5rOh5LqL5Lu25pyJ6Zeu6aKYIO+8jOWFiOi/meagt+WFvOWuuVxuXHRcdFx0dG91Y2hzdGFydCgpIHtcblx0XHRcdFx0dGhpcy5jbGVhclByb3BhZ2F0aW9uID0gZmFsc2Vcblx0XHRcdH0sXG5cblx0XHRcdG9uVGFwKCkge1xuXHRcdFx0XHRpZiAodGhpcy5jbGVhclByb3BhZ2F0aW9uKSB7XG5cdFx0XHRcdFx0Ly8gZml4IGJ5IG1laGFvdGlhbiDlhbzlrrkgbnZ1ZVxuXHRcdFx0XHRcdHRoaXMuY2xlYXJQcm9wYWdhdGlvbiA9IGZhbHNlXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kZW1pdCgnbWFza0NsaWNrJylcblx0XHRcdFx0aWYgKCF0aGlzLm1rY2xpY2spIHJldHVyblxuXHRcdFx0XHR0aGlzLmNsb3NlKClcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIOmhtumDqOW8ueWHuuagt+W8j+WkhOeQhlxuXHRcdFx0ICovXG5cdFx0XHR0b3AodHlwZSkge1xuXHRcdFx0XHR0aGlzLnBvcHVwc3R5bGUgPSB0aGlzLmlzRGVza3RvcCA/ICdmaXhmb3JwYy10b3AnIDogJ3RvcCdcblx0XHRcdFx0dGhpcy5hbmkgPSBbJ3NsaWRlLXRvcCddXG5cdFx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdHJpZ2h0OiAwLFxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhpcy5iZ1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xuXHRcdFx0XHRpZiAodHlwZSkgcmV0dXJuXG5cdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gdHJ1ZVxuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLm1lc3NhZ2VDaGlsZCAmJiB0aGlzLnR5cGUgPT09ICdtZXNzYWdlJykge1xuXHRcdFx0XHRcdFx0dGhpcy5tZXNzYWdlQ2hpbGQudGltZXJDbG9zZSgpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICog5bqV6YOo5by55Ye65qC35byP5aSE55CGXG5cdFx0XHQgKi9cblx0XHRcdGJvdHRvbSh0eXBlKSB7XG5cdFx0XHRcdHRoaXMucG9wdXBzdHlsZSA9ICdib3R0b20nXG5cdFx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS1ib3R0b20nXVxuXHRcdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XG5cdFx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0XHRyaWdodDogMCxcblx0XHRcdFx0XHRib3R0b206IDAsXG5cdFx0XHRcdFx0cGFkZGluZ0JvdHRvbTogdGhpcy5zYWZlQXJlYUluc2V0cyArICdweCcsXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLmJnXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gVE9ETyDlhbzlrrkgdHlwZSDlsZ7mgKcg77yM5ZCO57ut5Lya5bqf5byDXG5cdFx0XHRcdGlmICh0eXBlKSByZXR1cm5cblx0XHRcdFx0dGhpcy5zaG93UG9wdXAgPSB0cnVlXG5cdFx0XHRcdHRoaXMuc2hvd1RyYW5zID0gdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICog5Lit6Ze05by55Ye65qC35byP5aSE55CGXG5cdFx0XHQgKi9cblx0XHRcdGNlbnRlcih0eXBlKSB7XG5cdFx0XHRcdHRoaXMucG9wdXBzdHlsZSA9ICdjZW50ZXInXG5cdFx0XHRcdHRoaXMuYW5pID0gWyd6b29tLW91dCcsICdmYWRlJ11cblx0XHRcdFx0dGhpcy50cmFuc0NsYXNzID0ge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cdFx0XHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHRcdFx0Ym90dG9tOiAwLFxuXHRcdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdFx0cmlnaHQ6IDAsXG5cdFx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xuXHRcdFx0XHRpZiAodHlwZSkgcmV0dXJuXG5cdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gdHJ1ZVxuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcblx0XHRcdH0sXG5cdFx0XHRsZWZ0KHR5cGUpIHtcblx0XHRcdFx0dGhpcy5wb3B1cHN0eWxlID0gJ2xlZnQnXG5cdFx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS1sZWZ0J11cblx0XHRcdFx0dGhpcy50cmFuc0NsYXNzID0ge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdFx0Ym90dG9tOiAwLFxuXHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmcsXG5cdFx0XHRcdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuXHRcdFx0XHRcdC8qICNlbmRpZiAqL1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xuXHRcdFx0XHRpZiAodHlwZSkgcmV0dXJuXG5cdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gdHJ1ZVxuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcblx0XHRcdH0sXG5cdFx0XHRyaWdodCh0eXBlKSB7XG5cdFx0XHRcdHRoaXMucG9wdXBzdHlsZSA9ICdyaWdodCdcblx0XHRcdFx0dGhpcy5hbmkgPSBbJ3NsaWRlLXJpZ2h0J11cblx0XHRcdFx0dGhpcy50cmFuc0NsYXNzID0ge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRcdGJvdHRvbTogMCxcblx0XHRcdFx0XHRyaWdodDogMCxcblx0XHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLmJnLFxuXHRcdFx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbidcblx0XHRcdFx0XHQvKiAjZW5kaWYgKi9cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBUT0RPIOWFvOWuuSB0eXBlIOWxnuaApyDvvIzlkI7nu63kvJrlup/lvINcblx0XHRcdFx0aWYgKHR5cGUpIHJldHVyblxuXHRcdFx0XHR0aGlzLnNob3dQb3B1cCA9IHRydWVcblx0XHRcdFx0dGhpcy5zaG93VHJhbnMgPSB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuXHQudW5pLXBvcHVwIHtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdHotaW5kZXg6IDk5O1xuXG5cdFx0LyogI2VuZGlmICovXG5cdFx0Ji50b3AsXG5cdFx0Ji5sZWZ0LFxuXHRcdCYucmlnaHQge1xuXHRcdFx0LyogI2lmZGVmIEg1ICovXG5cdFx0XHR0b3A6IHZhcigtLXdpbmRvdy10b3ApO1xuXHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHQvKiAjaWZuZGVmIEg1ICovXG5cdFx0XHR0b3A6IDA7XG5cdFx0XHQvKiAjZW5kaWYgKi9cblx0XHR9XG5cblx0XHQudW5pLXBvcHVwX193cmFwcGVyIHtcblx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHRcdC8qIGlwaG9uZXgg562J5a6J5YWo5Yy66K6+572u77yM5bqV6YOo5a6J5YWo5Yy66YCC6YWNICovXG5cdFx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0XHQvLyBwYWRkaW5nLWJvdHRvbTogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG5cdFx0XHQvLyBwYWRkaW5nLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuXHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHQmLmxlZnQsXG5cdFx0XHQmLnJpZ2h0IHtcblx0XHRcdFx0LyogI2lmZGVmIEg1ICovXG5cdFx0XHRcdHBhZGRpbmctdG9wOiB2YXIoLS13aW5kb3ctdG9wKTtcblx0XHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHRcdC8qICNpZm5kZWYgSDUgKi9cblx0XHRcdFx0cGFkZGluZy10b3A6IDA7XG5cdFx0XHRcdC8qICNlbmRpZiAqL1xuXHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5maXhmb3JwYy16LWluZGV4IHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ei1pbmRleDogOTk5O1xuXHRcdC8qICNlbmRpZiAqL1xuXHR9XG5cblx0LmZpeGZvcnBjLXRvcCB7XG5cdFx0dG9wOiAwO1xuXHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/谭福华/Desktop/HousePaint/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=style&index=0&lang=scss& */ 36);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 36 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/谭福华/Desktop/HousePaint/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-popup": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        16
      ]
    },
    ".top": {
      "top": [
        0,
        0,
        1,
        17
      ]
    },
    ".left": {
      "top": [
        0,
        0,
        1,
        17
      ]
    },
    ".right": {
      "top": [
        0,
        0,
        1,
        17
      ]
    }
  },
  ".uni-popup__wrapper": {
    ".uni-popup ": {
      "position": [
        "relative",
        0,
        1,
        18
      ]
    },
    ".uni-popup .left": {
      "paddingTop": [
        0,
        0,
        2,
        19
      ],
      "flex": [
        1,
        0,
        2,
        19
      ]
    },
    ".uni-popup .right": {
      "paddingTop": [
        0,
        0,
        2,
        19
      ],
      "flex": [
        1,
        0,
        2,
        19
      ]
    }
  },
  ".fixforpc-top": {
    "": {
      "top": [
        0,
        0,
        0,
        20
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 37 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/谭福华/Desktop/HousePaint/pages/navigation/ShouYe/video/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=script&lang=js&mpType=page */ 38);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQSthLENBQWdCLDJkQUFHLEVBQUMiLCJmaWxlIjoiMzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/谭福华/Desktop/HousePaint/pages/navigation/ShouYe/video/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, __webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import userList from './data.js'//这个是假数据\n/*\n引入评论组件\n*/\n// import douyinScrollview from '@/components/douyin-scrollview/douyin-scrollview.nvue'\nvar _default = {\n  data: function data() {\n    return {\n      //下面打🌟号的是必须要的基础字段\n      //下面打💗号的是拥有滑动条的必须字段\n      dataList: [],\n      //用于数据循环的列表🌟💗\n      wHeight: 0,\n      //获取的屏幕高度🌟💗\n      boxStyle: {\n        //视频，图片封面样式🌟💗\n        'height': 0,\n        'width': 0\n      },\n      k: 0,\n      //默认为0🌟💗\n      playIngIds: [],\n      //正在播放的视频id列队，列队用于处理滑动过快导致的跳频问题🌟💗\n      ready: false,\n      //可忽略\n      isDragging: false,\n      //false代表停止滑动🌟💗\n      refreshing: true,\n      //用于下拉刷新🌟💗\n      windowWidth: 0,\n      //获取屏幕宽度🌟💗\n      windowHeight: 0,\n      dex: [0, 0],\n      //用于判断是上滑还是下滑，第一个存旧值，第二个存新值【目前在1.0.7已经废弃】\n      currents: 0,\n      //用于左右滑动，0代表视频界面，1代表右滑界面🌟💗\n      platform: '',\n      //用于获取操作系统：ios、android🌟💗\n      playIng: false,\n      //用于视频初始化时是否播放，默认不播放🌟💗\n      videoTime: '',\n      //视频总时长，这个主要用来截取时间数值💗\n      videoTimes: '',\n      //视频时长，用这个来获取时间值，例如：00:30这个时间值💗\n      changeTime: '',\n      //显示滑动进度条时变化的时间💗\n      isShowimage: false,\n      //是否显示封面【1.0.4已废弃，但是意思需要记住】\n      currenttimes: 0,\n      //当前时间💗\n      isShowProgressBarTime: false,\n      //是否拖动进度条，如果拖动（true）则显示进度条时间，否则不显示（false）【1.0.4已废弃，但是意思需要记住】\n      ProgressBarOpacity: 0.7,\n      //进度条不拖动时的默认值，就是透明的💗\n      dotWidth: 0,\n      //播放的小圆点，默认没有💗\n      deleteHeight: 0,\n      //测试高度🌟💗\n      percent: 0,\n      //百分小数💗\n      currentPosition: 0,\n      //滑块当前位置💗//2.0已弃用，现已用于后端参数\n      currentPositions: 0,\n      //滑块当前位置的副本💗//2.0已弃用，现已用于后端参数\n      newTime: 0,\n      //跟手滑动后的最新时间💗\n      timeNumber: 0,\n      //🌟💗\n      ProgressBarBottom: 20,\n      //进度条离底部的距离💗\n      object_fit: 'contain',\n      //视频样式默认包含🌟💗\n      mode: 'aspectFit',\n      //图片封面样式🌟💗\n      timeout: \"\",\n      //🌟用来阻止 setTimeout()方法\n      voice: \"\",\n      //🌟用来阻止 setTimeout()方法\n      oldVideo: \"\",\n      isAutoplay: false,\n      //是否开启自动播放(默认不开启)\n      autoplayText: \"开启自动播放\",\n      timers: \"\",\n      // 引入评论 - 参数\n      heightNum: 1.18,\n      // 双击点赞参数\n      touchNum: 0,\n      aixinLeft: 0,\n      aixinTop: 0,\n      isShowAixin: false,\n      Rotate: 0\n    };\n  },\n  watch: {\n    k: function k(_k, old_k) {\n      var _this = this;\n      //监听 k 值的变化，可以控制视频的播放与暂停\n      __f__(\"log\", _k, \" at pages/navigation/ShouYe/video/video.nvue:223\");\n      this.dataList[old_k].state = 'stop'; //如果是被滑走的视频，就停止播放\n      this.dataList[old_k].playIng = false; //如果视频暂停，就加载封面\n      this.dataList[old_k].isplay = true;\n      uni.createVideoContext(this.dataList[old_k]._id, this).play();\n      clearTimeout(this.oldVideo);\n      this.oldVideo = setTimeout(function () {\n        uni.createVideoContext(_this.dataList[old_k]._id, _this).seek(0);\n        uni.createVideoContext(_this.dataList[old_k]._id, _this).pause();\n        __f__(\"log\", '预留第' + (old_k + 1) + '个视频：' + _this.dataList[old_k]._id, \" at pages/navigation/ShouYe/video/video.nvue:232\");\n      }, 500);\n      // 2.0版本已经去掉了下面这一句，视频不用暂停，只需要把声音禁止就行\n      // uni.createVideoContext(this.dataList[old_k]._id + '' + old_k,this).stop()//如果视频暂停，那么旧视频停止，这里的this.dataList[old_k]._id + '' + old_k，后面加 old_k 是为了每一个视频的 id 值不同，这样就可以大程度的避免串音问题\n      uni.createVideoContext(this.dataList[_k]._id, this).play();\n      __f__(\"log\", '已经暂停 --> 第' + (old_k + 1) + '个视频～', \" at pages/navigation/ShouYe/video/video.nvue:237\"); //提示\n      clearTimeout(this.voice);\n      this.voice = setTimeout(function () {\n        _this.dataList[_k].isplay = false;\n      }, 300);\n      setTimeout(function () {\n        _this.dataList[_k].playIng = true;\n      }, 850);\n      //【2.0版本更新内容】- start\n      var p = _k;\n      ++p;\n      setTimeout(function () {\n        uni.createVideoContext(_this.dataList[p]._id, _this).play();\n      }, 20);\n      clearTimeout(this.timeout);\n      this.timeout = setTimeout(function () {\n        uni.createVideoContext(_this.dataList[p]._id, _this).seek(0);\n        uni.createVideoContext(_this.dataList[p]._id, _this).pause();\n        __f__(\"log\", '预加载第' + (p + 1) + '个视频：' + _this.dataList[p]._id, \" at pages/navigation/ShouYe/video/video.nvue:255\");\n      }, 1500);\n      //【2.0版本更新内容】- end\n    }\n  },\n  onShow: function onShow() {\n    __f__(\"log\", '回到前台', \" at pages/navigation/ShouYe/video/video.nvue:261\");\n    if (this.dataList.length !== 0) {\n      this.dataList[this.k].state = 'play';\n      uni.createVideoContext(this.dataList[this.k]._id, this).play();\n    }\n  },\n  onHide: function onHide() {\n    this.dataList[this.k].state = 'pause'; //界面隐藏也要停止播放视频\n    uni.createVideoContext(this.dataList[this.k]._id, this).pause(); //暂停以后继续播放\n    __f__(\"log\", '到后台', \" at pages/navigation/ShouYe/video/video.nvue:270\");\n  },\n  onLoad: function onLoad() {\n    __f__(\"log\", '进入视频', \" at pages/navigation/ShouYe/video/video.nvue:273\");\n    this.platform = uni.getSystemInfoSync().platform;\n    var model = uni.getSystemInfoSync().model;\n    if (this.platform == 'ios' && (model !== 'iPhone6' || model !== 'iPhone6s' || model !== 'iPhone7' || model !== 'iPhone8')) {\n      this.deleteHeight = 32; //有 tabbar的 修改这里可以改变视频高度\n\n      /*\n      引入评论参数\n      */\n\n      this.heightNum = 1.27;\n    } else {\n      this.deleteHeight = 0;\n      /*\n      引入评论参数\n      */\n      this.heightNum = 1.18;\n    }\n    this.windowWidth = uni.getSystemInfoSync().screenWidth; //获取屏幕宽度\n    this.boxStyle.width = this.windowWidth + 'px'; //给宽度加px\n    this.wHeight = uni.getSystemInfoSync().screenHeight; //获取屏幕高度\n    this.boxStyle.height = this.wHeight - this.deleteHeight; //改变视频高度\n    this.get(); //这一步，加载视频数据\n  },\n  onReady: function onReady() {},\n  methods: {\n    autoPlay: function autoPlay() {\n      this.isAutoplay = !this.isAutoplay;\n      if (!this.isAutoplay) {\n        this.autoplayText = \"开启自动播放\";\n        uni.showToast({\n          title: \"关闭自动播放\",\n          icon: 'none',\n          duration: 3000\n        });\n      } else {\n        this.autoplayText = \"关闭自动播放\";\n        uni.showToast({\n          title: \"开启自动播放\",\n          icon: 'none',\n          duration: 3000\n        });\n      }\n    },\n    getData: function getData() {\n      var _this2 = this;\n      // 这里就是数据加载完以后再向后端发送数据的地方\n\n      uni.request({\n        url: 'https://bdb24c6d-8c19-4f80-8e7e-c9c9f037f131.bspapp.com/video',\n        method: 'POST',\n        data: {\n          info: 'get_video'\n        },\n        success: function success(res) {\n          var msg = res.data.data;\n          for (var i = 0; i < msg.length; i++) {\n            _this2.dataList.push(msg[i]);\n          }\n        }\n      });\n    },\n    touchstart: function touchstart(event) {\n      this.dataList[this.k].isShowimage = true; //刚触摸的时候就要显示预览视频图片了\n      this.dataList[this.k].isShowProgressBarTime = true; //显示时间线\n      this.ProgressBarOpacity = 1; //让滑块显示起来更明显一点\n      this.dotWidth = 10; //让点显示起来更明显一点\n    },\n    touchend: function touchend() {\n      //当手松开后，跳到最新时间\n      uni.createVideoContext(this.dataList[this.k]._id, this).seek(this.newTime);\n      if (this.dataList[this.k].state == 'pause') {\n        this.dataList[this.k].state = 'play';\n        uni.createVideoContext(this.dataList[this.k]._id, this).play();\n      }\n      this.dataList[this.k].isShowProgressBarTime = false; //触摸结束后，隐藏时间线\n      this.dataList[this.k].isShowimage = false; //触摸结束后，隐藏时间预览\n      this.ProgressBarOpacity = 0.5; //隐藏起来进度条，不那么明显了\n      this.dotWidth = 0; //隐藏起来进度条，不那么明显了\n    },\n    touchmove: function touchmove(event) {\n      //当手移动滑块时，计算位置、百分小数、新的时间\n      var msg = [];\n      if (this.videoTime !== '') {\n        msg = this.videoTime.split(':');\n      }\n      var timeNumber = Number(msg[0]) * 60 + Number(msg[1]);\n      this.currentPositions = event.changedTouches[0].screenX;\n      this.percent = this.currentPositions / this.windowWidth;\n      this.newTime = this.percent * timeNumber;\n      this.currenttimes = parseInt(this.newTime);\n      var theTime = this.newTime;\n      var middle = 0; // 分\n      if (theTime > 60) {\n        middle = parseInt(theTime / 60);\n        theTime = parseInt(theTime % 60);\n      }\n      this.changeTime = \"\".concat(Math.round(middle) > 9 ? Math.round(middle) : '0' + Math.round(middle), \":\").concat(Math.round(theTime) > 9 ? Math.round(theTime) : '0' + Math.round(theTime));\n    },\n    timeupdate: function timeupdate(event, index) {\n      var _this3 = this;\n      //计算滑块当前位置，计算当前百分小数\n      // console.log(index)\n      if (index == this.k) {\n        // console.log(event)\n        var currenttime = event.detail.currentTime;\n        this.timeNumber = Math.round(event.detail.duration);\n        this.getTime();\n        this.percent = currenttime / this.timeNumber;\n        this.currentPosition = this.windowWidth * this.percent;\n        var theTime = currenttime;\n        var middle = 0; // 分\n        if (theTime > 60) {\n          middle = parseInt(theTime / 60);\n          theTime = parseInt(theTime % 60);\n        }\n        this.changeTime = \"\".concat(Math.round(middle) > 9 ? Math.round(middle) : '0' + Math.round(middle), \":\").concat(Math.round(theTime) > 9 ? Math.round(theTime) : '0' + Math.round(theTime));\n        //自动切换视频\n        if (this.isAutoplay) {\n          //true,代表自动播放\n          if (Math.round(currenttime) == this.timeNumber - 1) {\n            var dom = __webpack_provided_uni_dot_requireNativePlugin('dom');\n            var doms = 'item' + (this.k + 1);\n            setTimeout(function () {\n              var el = _this3.$refs[doms][0];\n              dom.scrollToElement(el, {\n                offset: 0,\n                animated: true\n              });\n            }, 500);\n          }\n        }\n      }\n    },\n    getTime: function getTime() {\n      //得到时间函数\n      this.videoTime = this.formatSeconds(this.timeNumber);\n      // console.log(that.videoTime)\n      var msg = [];\n      if (this.videoTime !== '') {\n        msg = this.videoTime.split(':');\n      }\n      this.videoTimes = \"\".concat(msg[0] > 9 ? msg[0] : '0' + msg[0], \":\").concat(msg[1] > 9 ? msg[1] : '0' + msg[1]);\n    },\n    formatSeconds: function formatSeconds(value) {\n      //获取时间函数\n      var theTime = parseInt(value); // 秒\n      var middle = 0; // 分\n      if (theTime > 60) {\n        middle = parseInt(theTime / 60);\n        theTime = parseInt(theTime % 60);\n      }\n      return \"\".concat(middle > 9 ? middle : middle, \":\").concat(theTime > 9 ? theTime : theTime);\n    },\n    playIngs: function playIngs(index) {\n      //\n    },\n    moreVideo: function moreVideo(index) {},\n    toVideo: function toVideo(index) {},\n    erweima: function erweima() {},\n    tozuozhe: function tozuozhe() {\n      this.currents = 1; //点击头像以后就会切换\n    },\n    stop: function stop() {\n      // console.log('stop')\n    },\n    scrolls: function scrolls(event) {\n      var _this4 = this;\n      this.isDragging = event.isDragging;\n      if (!event.isDragging) {\n        //isDragging：判断用户是不是在滑动，滑动：true，停止滑动：false。我们要用户停止滑动时才给 k 赋值，这样就可以避免很多麻烦\n        var i = Math.round(Math.abs(event.contentOffset.y) / (this.wHeight - this.deleteHeight + 1)); //先用绝对值取出滑动的距离，然后除以屏幕高度，取一个整，就知道你现在滑动到哪一个视频了\n        if (i !== this.k) {\n          //这里加判断是因为这个方法会执行很多次，会造成重复请求，所以这里写一个限制\n          if (uni.getSystemInfoSync().platform == 'ios') {\n            this.k = i; //判断了用户没有滑动，确认了用户的确是在看这个视频，然后就赋值啦\n            this.dataList[this.k].state = 'play';\n            __f__(\"log\", '正在播放 --> 第' + (this.k + 1) + '个视频～', \" at pages/navigation/ShouYe/video/video.nvue:447\");\n          } else {\n            clearTimeout(this.timers);\n            this.timers = setTimeout(function () {\n              _this4.k = i; //判断了用户没有滑动，确认了用户的确是在看这个视频，然后就赋值啦\n              _this4.dataList[_this4.k].state = 'play';\n              __f__(\"log\", '正在播放 --> 第' + (_this4.k + 1) + '个视频～', \" at pages/navigation/ShouYe/video/video.nvue:453\");\n            }, 80);\n          }\n        }\n      }\n    },\n    get: function get() {\n      var _this5 = this;\n      this.dataList[0] = uni.getStorageSync('video_chuancan');\n      uni.request({\n        url: 'http://120.24.238.88:8146/homepaint/getvideo',\n        method: 'GET',\n        success: function success(res) {\n          __f__(\"log\", res, \" at pages/navigation/ShouYe/video/video.nvue:468\");\n          var msg = res.data;\n          // console.log(msg)\n          _this5.dataList = msg;\n          _this5.dataList[0] = uni.getStorageSync('video_chuancan');\n          _this5.dataList[0].state = \"play\";\n          setTimeout(function () {\n            //这里的延迟是为了避免执行时间太快而直接跳过执行的 bug\n            uni.createVideoContext(_this5.dataList[0]._id, _this5).seek(0);\n            uni.createVideoContext(_this5.dataList[0]._id, _this5).play();\n          }, 200);\n          _this5.dataList[0].isplay = false;\n          setTimeout(function () {\n            _this5.dataList[0].playIng = true;\n          }, 500);\n          var p = 0;\n          setTimeout(function () {\n            ++p;\n            uni.createVideoContext(_this5.dataList[p]._id, _this5).play();\n            setTimeout(function () {\n              uni.createVideoContext(_this5.dataList[p]._id, _this5).seek(0);\n              uni.createVideoContext(_this5.dataList[p]._id, _this5).pause();\n              __f__(\"log\", '预加载第' + (p + 1) + '个视频：' + _this5.dataList[p]._id, \" at pages/navigation/ShouYe/video/video.nvue:491\");\n            }, 2000);\n          }, 50);\n        }\n      });\n      // 这个方法主要就是用来第一次进入视频播放时用来处理的\n      // this.dataList = userList;//这个就是赋值加载视频啦\n      // uni.request({\n      // \turl: 'https://bdb24c6d-8c19-4f80-8e7e-c9c9f037f131.bspapp.com/video',\n      // \tmethod: 'POST',\n      // \tdata:{\n      // \t\tinfo: 'get_video'\n      // \t},\n      // \tsuccess: (res) => {\n\n      // \t}\n      // })\n    },\n    onpullingdown: function onpullingdown() {\n      // console.log('正在下拉刷新，此时手还在触摸没有松开')\n      this.refreshing = true;\n    },\n    onrefresh: function onrefresh() {\n      var _this6 = this;\n      // console.log('下拉刷新完毕，此时手松开了')\n      setTimeout(function () {\n        _this6.refreshing = false;\n      }, 1000);\n    },\n    // 双击点赞效果\n    touchstartHover: function touchstartHover(event) {\n      var _this7 = this;\n      if (this.touchNum >= 1) {\n        // console.log('双击 -- X坐标：'+ event.touches[0].screenX);\n        // console.log('双击 -- Y坐标：'+ event.touches[0].screenY);\n        this.aixinLeft = event.touches[0].screenX - 50;\n        this.aixinTop = event.touches[0].screenY - 50;\n        this.isShowAixin = true;\n        var max = 40;\n        var min = -40;\n        this.Rotate = Math.floor(Math.random() * (max - min + 1)) + min;\n        setTimeout(function () {\n          _this7.isShowAixin = false;\n        }, 700);\n        this.onTabItemTaps();\n      }\n    },\n    //点击播放&&暂停\n    tapVideoHover: function tapVideoHover(state, event) {\n      var _this8 = this;\n      this.dataList[this.k].isShowimage = false;\n      this.dataList[this.k].isShowProgressBarTime = false;\n      this.ProgressBarOpacity = 0.5;\n      this.dotWidth = 0;\n      __f__(\"log\", 'state--', state, \" at pages/navigation/ShouYe/video/video.nvue:541\");\n      // 1.启用双击点赞 --- start\n      this.touchNum++;\n      setTimeout(function () {\n        if (_this8.touchNum == 1) {\n          if (state == 'play' || state == 'continue') {\n            _this8.dataList[_this8.k].state = 'pause';\n          } else {\n            _this8.dataList[_this8.k].state = 'continue';\n          }\n          if (_this8.dataList[_this8.k].state == 'continue') {\n            uni.createVideoContext(_this8.dataList[_this8.k]._id, _this8).play(); //暂停以后继续播放\n          }\n\n          if (_this8.dataList[_this8.k].state == 'pause') {\n            uni.createVideoContext(_this8.dataList[_this8.k]._id, _this8).pause(); //暂停以后继续播放\n          }\n        }\n\n        if (_this8.touchNum >= 2) {\n          _this8.doubleLike();\n        }\n        _this8.touchNum = 0;\n      }, 200);\n      // --------------- ending\n      // 2. 不启用双击点赞 start\n      // if(state=='play'||state=='continue'){\n      // \tthis.dataList[this.k].state = 'pause';\n      // }else{\n      // \tthis.dataList[this.k].state = 'continue';\n      // }\n      // if(this.dataList[this.k].state == 'continue'){\n      // \tuni.createVideoContext(this.dataList[this.k]._id,this).play();//暂停以后继续播放\n      // }\n      // if(this.dataList[this.k].state == 'pause'){\n      // \tuni.createVideoContext(this.dataList[this.k]._id,this).pause();//暂停以后继续播放\n      // }\n      // --------------- ending\n    },\n    doubleLike: function doubleLike() {\n      if (this.dataList[this.k].like == false) {\n        this.dataList[this.k].like_n += 1;\n        this.dataList[this.k].like = true;\n      }\n      /*\n      点赞\n      */\n    },\n    toComment: function toComment(index) {\n      uni.showToast({\n        title: '加载中...',\n        icon: 'none',\n        position: 'bottom',\n        duration: 300\n      });\n      uni.setStorageSync(\"videoID\", this.dataList[index]._id);\n      this.$refs.pinglun.open('bottom');\n    },\n    share: function share() {\n      uni.showToast({\n        title: '分享',\n        icon: 'none'\n      });\n    },\n    wxh5Video: function wxh5Video() {\n      uni.navigateTo({\n        url: '../wxh5previewVideo/wxh5previewVideo'\n      });\n    },\n    previewVideo: function previewVideo() {\n      uni.navigateTo({\n        url: '../previewVideo/previewVideo'\n      });\n    },\n    toTwoVideo: function toTwoVideo() {\n      uni.navigateTo({\n        url: '../new_index/new_index'\n      });\n    },\n    tolistVideo: function tolistVideo() {\n      uni.navigateTo({\n        url: '../nvueSwiper/nvueSwiper'\n      });\n    },\n    cLike: function cLike(sss) {\n      this.dataList[this.k].like = !this.dataList[this.k].like;\n      var video = this.dataList[this.k];\n      sss ? video.like_n -= 1 : video.like_n += 1;\n      /*\n      点赞\n      */\n    },\n    moveHandle: function moveHandle() {},\n    closeScrollview: function closeScrollview() {\n      // 点击评论里面的叉叉，就会关闭评论\n      this.$refs.pinglun.close();\n    },\n    onTabItemTaps: function onTabItemTaps() {\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        var UIImpactFeedbackGenerator = plus.ios.importClass('UIImpactFeedbackGenerator');\n        var impact = new UIImpactFeedbackGenerator();\n        impact.prepare();\n        impact.init(1);\n        impact.impactOccurred();\n      }\n      if (uni.getSystemInfoSync().platform == \"android\") {\n        uni.vibrateShort({\n          success: function success() {\n            __f__(\"log\", '点击震动', \" at pages/navigation/ShouYe/video/video.nvue:649\");\n          }\n        });\n      }\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 16)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 29)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbmF2aWdhdGlvbi9TaG91WWUvdmlkZW8vdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwiZGF0YUxpc3QiLCJ3SGVpZ2h0IiwiYm94U3R5bGUiLCJrIiwicGxheUluZ0lkcyIsInJlYWR5IiwiaXNEcmFnZ2luZyIsInJlZnJlc2hpbmciLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsImRleCIsImN1cnJlbnRzIiwicGxhdGZvcm0iLCJwbGF5SW5nIiwidmlkZW9UaW1lIiwidmlkZW9UaW1lcyIsImNoYW5nZVRpbWUiLCJpc1Nob3dpbWFnZSIsImN1cnJlbnR0aW1lcyIsImlzU2hvd1Byb2dyZXNzQmFyVGltZSIsIlByb2dyZXNzQmFyT3BhY2l0eSIsImRvdFdpZHRoIiwiZGVsZXRlSGVpZ2h0IiwicGVyY2VudCIsImN1cnJlbnRQb3NpdGlvbiIsImN1cnJlbnRQb3NpdGlvbnMiLCJuZXdUaW1lIiwidGltZU51bWJlciIsIlByb2dyZXNzQmFyQm90dG9tIiwib2JqZWN0X2ZpdCIsIm1vZGUiLCJ0aW1lb3V0Iiwidm9pY2UiLCJvbGRWaWRlbyIsImlzQXV0b3BsYXkiLCJhdXRvcGxheVRleHQiLCJ0aW1lcnMiLCJoZWlnaHROdW0iLCJ0b3VjaE51bSIsImFpeGluTGVmdCIsImFpeGluVG9wIiwiaXNTaG93QWl4aW4iLCJSb3RhdGUiLCJ3YXRjaCIsInVuaSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJvblNob3ciLCJvbkhpZGUiLCJvbkxvYWQiLCJvblJlYWR5IiwibWV0aG9kcyIsImF1dG9QbGF5IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJnZXREYXRhIiwidXJsIiwibWV0aG9kIiwiaW5mbyIsInN1Y2Nlc3MiLCJ0b3VjaHN0YXJ0IiwidG91Y2hlbmQiLCJ0b3VjaG1vdmUiLCJtc2ciLCJtaWRkbGUiLCJ0aGVUaW1lIiwidGltZXVwZGF0ZSIsImRvbSIsIm9mZnNldCIsImFuaW1hdGVkIiwiZ2V0VGltZSIsImZvcm1hdFNlY29uZHMiLCJwbGF5SW5ncyIsIm1vcmVWaWRlbyIsInRvVmlkZW8iLCJlcndlaW1hIiwidG96dW96aGUiLCJzdG9wIiwic2Nyb2xscyIsImdldCIsIm9ucHVsbGluZ2Rvd24iLCJvbnJlZnJlc2giLCJ0b3VjaHN0YXJ0SG92ZXIiLCJ0YXBWaWRlb0hvdmVyIiwiZG91YmxlTGlrZSIsInRvQ29tbWVudCIsInBvc2l0aW9uIiwic2hhcmUiLCJ3eGg1VmlkZW8iLCJwcmV2aWV3VmlkZW8iLCJ0b1R3b1ZpZGVvIiwidG9saXN0VmlkZW8iLCJjTGlrZSIsInNzcyIsIm1vdmVIYW5kbGUiLCJjbG9zZVNjcm9sbHZpZXciLCJvblRhYkl0ZW1UYXBzIiwiaW1wYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLGVBSUE7RUFDQUE7SUFDQTtNQUNBO01BQ0E7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO1FBQUE7UUFDQTtRQUNBO01BQ0E7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BRUFDO01BQUE7TUFDQUM7TUFDQUM7TUFFQTtNQUNBQztNQUVBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBeEM7TUFBQTtNQUFBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQXlDO01BQ0FDO01BQ0E7UUFDQUQ7UUFDQUE7UUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBQTtNQUNBO01BQ0FDO01BQ0E7UUFDQTtNQUNBO01BQ0FDO1FBQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBQTtRQUNBRjtNQUNBO01BQ0FDO01BQ0E7UUFDQUQ7UUFDQUE7UUFDQTtNQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FHO0lBQ0E7SUFDQTtNQUNBO01BQ0FIO0lBQ0E7RUFDQTtFQUNBSTtJQUNBO0lBQ0FKO0lBQ0E7RUFDQTtFQUNBSztJQUNBO0lBQ0E7SUFDQTtJQUNBO01BQ0E7O01BRUE7QUFDQTtBQUNBOztNQUVBO0lBQ0E7TUFDQTtNQUNBO0FBQ0E7QUFDQTtNQUNBO0lBQ0E7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0E7RUFDQUMsNkJBQ0E7RUFDQUM7SUFDQUM7TUFDQTtNQUNBO1FBQ0E7UUFDQVI7VUFDQVM7VUFDQUM7VUFDQUM7UUFDQTtNQUNBO1FBQ0E7UUFDQVg7VUFDQVM7VUFDQUM7VUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBOztNQUVBWjtRQUNBYTtRQUNBQztRQUNBM0Q7VUFDQTREO1FBQ0E7UUFDQUM7VUFDQTtVQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBbEI7TUFDQTtRQUNBO1FBQ0FBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FtQjtNQUFBO01BQ0E7TUFDQTtRQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBQztRQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUFBO01BQUE7TUFDQTtNQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1VBQ0FGO1VBQ0FDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7VUFBQTtVQUNBO1lBQ0E7WUFDQTtZQUNBcEI7Y0FDQTtjQUNBc0I7Z0JBQ0FDO2dCQUNBQztjQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQVA7TUFDQTtNQUNBO0lBQ0E7SUFDQVE7TUFBQTtNQUNBO01BQ0E7TUFDQTtRQUNBUDtRQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBTztNQUNBO0lBQUEsQ0FDQTtJQUNBQyxzQ0FFQTtJQUNBQyxrQ0FFQTtJQUNBQyw2QkFFQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUFBLENBQ0E7SUFDQUM7TUFBQTtNQUNBO01BQ0E7UUFBQTtRQUNBO1FBQ0E7VUFBQTtVQUNBO1lBQ0E7WUFDQTtZQUNBO1VBQ0E7WUFDQWxDO1lBQ0E7Y0FDQTtjQUNBO2NBQ0E7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FtQztNQUFBO01BQ0E7TUFDQXBDO1FBQ0FhO1FBQ0FDO1FBQ0FFO1VBSUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0FkO1lBQ0E7WUFDQUY7WUFDQUE7VUFDQTtVQUVBO1VBQ0FFO1lBQ0E7VUFDQTtVQUNBO1VBQ0FBO1lBQ0E7WUFDQUY7WUFDQUU7Y0FDQUY7Y0FDQUE7Y0FDQTtZQUNBO1VBQ0E7UUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBOztNQUVBO01BQ0E7SUFDQTtJQUNBcUM7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBO01BQ0FwQztRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FxQztNQUFBO01BQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFBQTtRQUNBO1FBQ0FyQztVQUNBO1FBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBc0M7TUFBQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0F0QztRQUNBO1VBQ0E7WUFDQTtVQUNBO1lBQ0E7VUFDQTtVQUNBO1lBQ0FGO1VBQ0E7O1VBQ0E7WUFDQUE7VUFDQTtRQUNBOztRQUNBO1VBQ0E7UUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQXlDO01BQ0E7UUFDQTtRQUNBO01BQ0E7TUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBQztNQUVBMUM7UUFDQVM7UUFDQUM7UUFDQWlDO1FBQ0FoQztNQUNBO01BQ0FYO01BQ0E7SUFDQTtJQUNBNEM7TUFDQTVDO1FBQ0FTO1FBQ0FDO01BQ0E7SUFDQTtJQUNBbUM7TUFDQTdDO1FBQ0FhO01BQ0E7SUFDQTtJQUNBaUM7TUFDQTlDO1FBQ0FhO01BQ0E7SUFDQTtJQUNBa0M7TUFDQS9DO1FBQ0FhO01BQ0E7SUFDQTtJQUNBbUM7TUFDQWhEO1FBQ0FhO01BQ0E7SUFDQTtJQUNBb0M7TUFDQTtNQUNBO01BQ0FDO01BQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQUM7SUFDQUM7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFFQTtRQUNBO1FBQ0E7UUFDQUM7UUFDQUE7UUFDQUE7TUFDQTtNQUNBO1FBQ0F0RDtVQUNBZ0I7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUVBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHJcblx0XHQ8dmlldyA6c3R5bGU9XCInd2lkdGg6ICcrIHdpbmRvd1dpZHRoICsncHg7IGhlaWdodDogJysgYm94U3R5bGUuaGVpZ2h0ICsncHg7J1wiPlxuXHRcdFxuXHRcdFx0PCEtLSBcblx0XHRcdCAxLui/memHjOeahCBzd2lwZXIg5LiN5piv55So5p2l5o6n5Yi26KeG6aKR5ruR5Yqo55qE77yM6ICM5piv55So5p2l5o6n5Yi25bem5Y+z5ruR5Yqo55qE77yM5aaC5p6c5LiN6ZyA6KaB55qE5Y+v5Lul5pS55oiQIHZpZXdcblx0XHRcdCBcblx0XHRcdCAyLuS4uuS6hiDop4bpopHml6DpmZDliqDovb3vvIzlt7Lnu4/mioogMjEg6KGM55qEIGFwcGVhciDljrvmjonkuobvvIzliqDkuIrkuoYgbG9hZG1vcmUg5pa55rOV77yI56ysMTDooYzvvIlcblx0XHRcdCBcblx0XHRcdCAzLueUseS6juaWueazleavlOi+g+Wkmu+8jOWPr+S7pemHh+WPluS4i+mdoueahOaWueW8j+afpeeci+S7o+egge+8mlxuXHRcdFx0IO+8iDHvvIlNYWPvvJrmjInkvY8gb3B0aW9uIOmUru+8jOeEtuWQjueCueWHu+aWueazleWQje+8jOWNs+WPr+i3s+i9rOWIsOaWueazlVxuXHRcdFx0IO+8iDLvvIl3aW5kb3dz77ya5oyJ5L2PIEFsdCDplK7vvIznhLblkI7pvKDmoIflt6blh7vvvIzljbPlj6/ot7PovazliLDmlrnms5Vcblx0XHRcdCAtLT5cblx0XHRcdDxsaXN0IEBsb2FkbW9yZT1cImdldERhdGFcIiBAc2Nyb2xsPVwic2Nyb2xsc1wiIDpsb2FkbW9yZW9mZnNldD1cIndIZWlnaHQqM1wiIDpzaG93LXNjcm9sbGJhcj1cImZhbHNlXCIgcmVmPVwibGlzdEJveFwiIDpwYWdpbmdFbmFibGVkPVwidHJ1ZVwiIDpzY3JvbGxhYmxlPVwidHJ1ZVwiPlxuXHRcdFx0XHQ8IS0tIOWIt+aWsOaooeWdlyAtLT5cblx0XHRcdFx0PHJlZnJlc2ggY2xhc3M9XCJyZWZyZXNoXCIgQHJlZnJlc2g9XCJvbnJlZnJlc2hcIiBAcHVsbGluZ2Rvd249XCJvbnB1bGxpbmdkb3duXCIgOmRpc3BsYXk9XCJyZWZyZXNoaW5nID8gJ3Nob3cnIDogJ2hpZGUnXCI+XG5cdFx0XHRcdFx0PGxvYWRpbmcgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1wiPlxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIkAvc3RhdGljL3ZpZGVvL2ltZy9pbmRleC9sb2dpbnMuZ2lmXCIgOnN0eWxlPVwiJ3dpZHRoOiA4MHVweDsgaGVpZ2h0OiA0MHVweDsgbWFyZ2luLXRvcDogODB1cHg7IG1hcmdpbi1ib3R0b206IDMwdXB4OyBtYXJnaW4tbGVmdDogJysgKHdpbmRvd1dpZHRoIC0gMjAwKSArJ3B4OydcIj48L2ltYWdlPlxuXHRcdFx0XHRcdDwvbG9hZGluZz5cblx0XHRcdFx0PC9yZWZyZXNoPlxuXHRcdFx0XHRcblx0XHRcdFx0PCEtLSDlvqrnjq/mlbDmja4gLS0+XG5cdFx0XHRcdDxjZWxsIHYtZm9yPVwiKGl0ZW0saSkgaW4gZGF0YUxpc3RcIiA6a2V5PVwiaVwiPlxuXHRcdFx0XHRcdDwhLS0g55SoZGl25oqK6KeG6aKR5qih57uE5aWX6LW35p2lIC0tPlxuXHRcdFx0XHRcdDxkaXYgOnN0eWxlPVwiJ3dpZHRoOiAnKyB3aW5kb3dXaWR0aCArJ3B4OyBoZWlnaHQ6ICcrIGJveFN0eWxlLmhlaWdodCArJ3B4OydcIiBAZGlzYXBwZWFyPVwic3RvcCgpXCI+XG5cdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiTWF0aC5hYnMoay1pKTw9MVwiPlxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJvb3RcIj5cblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHQ8dmlkZW9cblx0XHRcdFx0XHRcdFx0XHRcdDpyZWY9XCInaXRlbScraVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6aWQ9XCJpdGVtLl9pZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6bG9vcD1cInRydWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0OnNyYz1cIml0ZW0uc3JjXCJcblx0XHRcdFx0XHRcdFx0XHRcdDptdXRlZD1cIml0ZW0uaXNwbGF5XCJcblx0XHRcdFx0XHRcdFx0XHRcdEBwbGF5PVwicGxheUluZ3MoaSlcIlx0XG5cdFx0XHRcdFx0XHRcdFx0XHQ6ZW5hYmxlLXByb2dyZXNzLWdlc3R1cmU9XCJmYWxzZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6cGFnZS1nZXN0dXJlPVwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0OmNvbnRyb2xzPVwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Omh0dHAtY2FjaGU9XCJ0cnVlXCJcblx0XHRcdFx0XHRcdFx0XHRcdDpzaG93LWxvYWRpbmc9XCJmYWxzZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6c2hvdy1mdWxsc2NyZWVuLWJ0bj1cImZhbHNlXCJcblx0XHRcdFx0XHRcdFx0XHRcdDpzaG93LWNlbnRlci1wbGF5LWJ0bj1cImZhbHNlXCJcblx0XHRcdFx0XHRcdFx0XHRcdDpzdHlsZT1cImJveFN0eWxlXCJcblx0XHRcdFx0XHRcdFx0XHRcdDpvYmplY3QtZml0PVwib2JqZWN0X2ZpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRAdGltZXVwZGF0ZT1cInRpbWV1cGRhdGUoJGV2ZW50LGkpXCJcblx0XHRcdFx0XHRcdFx0XHQ+PC92aWRlbz5cblx0XHRcdFx0XHRcdFx0XHQ8IS0tIOi/memHjOaYr+WwgemdoiAtLT5cblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHR2LWlmPVwiIWl0ZW0ucGxheUluZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6c3JjPVwiaXRlbS5zcmMrJz94LW9zcy1wcm9jZXNzPXZpZGVvL3NuYXBzaG90LHRfMTAwLGZfanBnJ1wiIFxuXHRcdFx0XHRcdFx0XHRcdFx0Om1vZGU9XCJtb2RlXCJcblx0XHRcdFx0XHRcdFx0XHRcdDpzdHlsZT1cIid3aWR0aDogJysgd2luZG93V2lkdGggKydweDsgaGVpZ2h0OiAnKyAod0hlaWdodCAtIGRlbGV0ZUhlaWdodCkgKydweDsgcG9zaXRpb246IGFic29sdXRlOydcIlxuXHRcdFx0XHRcdFx0XHRcdD48L2ltYWdlPlxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gXG5cdFx0XHRcdFx0XHRcdFx0bW9kZTog5Zu+54mH6KOB5Ymq44CB57yp5pS+55qE5qih5byPXG5cdFx0XHRcdFx0XHRcdFx0bW9kZSDmnIkgMTQg56eN5qih5byP77yM5YW25LitIDUg56eN5piv57yp5pS+5qih5byP77yMOSDnp43mmK/oo4HliarmqKHlvI/jgIJcblx0XHRcdFx0XHRcdFx0XHRodHRwczovL3VuaWFwcC5kY2xvdWQuaW8vY29tcG9uZW50L2ltYWdlXG5cdFx0XHRcdFx0XHRcdFx0IC0tPlxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdDwhLS0g55u05o6l55SoIHZpZXcg5bCx6KGM5LqG77yM5LiA5qC35piv5Y+v5Lul6KaG55uW5Y6f55Sf57uE5Lu255qEIC0tPlxuXHRcdFx0XHRcdFx0XHQ8IS0tIOi/meS4quaYr+aaguWBnOaXtuWHuueOsOeahOWbvuaghyAtLT5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2aWRlb0hvdmVyXCIgQGNsaWNrPVwidGFwVmlkZW9Ib3ZlcihpdGVtLnN0YXRlLCRldmVudClcIiBAdG91Y2hzdGFydD1cInRvdWNoc3RhcnRIb3ZlclwiIDpzdHlsZT1cImJveFN0eWxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJpdGVtLnN0YXRlPT0ncGF1c2UnXCIgY2xhc3M9XCJwbGF5U3RhdGVcIiBzcmM9XCJAL3N0YXRpYy92aWRlby9pbWcvaW5kZXgvcGxheS5wbmdcIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlckluZm9cIj5cblx0XHRcdFx0XHRcdFx0XHQ8IS0tIDEu5aS05YOPIC0tPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiaXRlbS5pc1Nob3dQcm9ncmVzc0JhclRpbWUgPT0gZmFsc2VcIiBAY2xpY2s9XCJ0b3p1b3poZVwiIGNsYXNzPVwidXNlckF2YXRhclwiIDpzcmM9XCJpdGVtLmhyZWZcIiBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHRcdFx0PCEtLSAyLueCuei1niAtLT5cblx0XHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiaXRlbS5pc1Nob3dQcm9ncmVzc0JhclRpbWUgPT0gZmFsc2VcIiBAY2xpY2s9XCJjTGlrZShpdGVtLmxpa2UpO1wiIHN0eWxlPVwib3BhY2l0eTogMC45OyBtYXJnaW4tdG9wOiAxN3B4O1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJpdGVtLmxpa2VcIiBzcmM9XCJAL3N0YXRpYy92aWRlby9pbWcvaW5kZXgveGluLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogNnB4O1wiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIiFpdGVtLmxpa2VcIiBzcmM9XCJAL3N0YXRpYy92aWRlby9pbWcvaW5kZXgveGluLTIucG5nXCIgc3R5bGU9XCJ3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiA2cHg7XCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiY29sb3I6ICNGRkZGRkY7IG1hcmdpbi10b3A6IDVweDsgZm9udC1zaXplOiAxNHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi10b3A6IDQwcHg7IGZvbnQtd2VpZ2h0OiBib2xkO1wiIDpjbGFzcz1cInsnbGlrZU51bUFjdGl2ZSc6aXRlbS5saWtlfVwiPnt7aXRlbS5saWtlX259fTwvdGV4dD5cblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0PCEtLSAzLuivhOiuuiAtLT5cblx0XHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiaXRlbS5pc1Nob3dQcm9ncmVzc0JhclRpbWUgPT0gZmFsc2VcIiBjbGFzcz1cImNvbW1lbnRcIiBAY2xpY2s9XCJ0b0NvbW1lbnQoaSlcIiBzdHlsZT1cIm9wYWNpdHk6IDAuOTsgbWFyZ2luLXRvcDogMTdweDtcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCJAL3N0YXRpYy92aWRlby9pbWcvaW5kZXgvbGlhb3RpYW4tMi5wbmdcIiBzdHlsZT1cIndpZHRoOiAzNXB4OyBoZWlnaHQ6IDM1cHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDdweDtcIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogI0ZGRkZGRjsgbWFyZ2luLXRvcDogNXB4OyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi10b3A6IDQwcHg7XCI+e3tpdGVtLnNtc19ufX08L3RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gNC7liIbkuqsgLS0+XG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cIml0ZW0uaXNTaG93UHJvZ3Jlc3NCYXJUaW1lID09IGZhbHNlXCIgQGNsaWNrPVwic2hhcmVcIiBzdHlsZT1cIm9wYWNpdHk6IDAuOTsgbWFyZ2luLXRvcDogMTdweDtcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCJAL3N0YXRpYy92aWRlby9pbWcvaW5kZXgvc2hhcmUtZmlsbC5wbmdcIiBzdHlsZT1cIndpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDVweDtcIj48L2ltYWdlPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogI0ZGRkZGRjsgbWFyZ2luLXRvcDogNXB4OyBmb250LXNpemU6IDE0cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbi10b3A6IDQwcHg7XCI+5YiG5LqrPC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHQ8IS0tIOacgOW6leS4i+eahOaWh+Wtl+mDqOWIhiAtLT5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCIgdi1pZj1cImRhdGFMaXN0Lmxlbmd0aCAhPT0gMCAmJiBkYXRhTGlzdFtrXS5pc1Nob3dQcm9ncmVzc0JhclRpbWUgPT0gZmFsc2VcIj5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVzZXJOYW1lXCIgOnN0eWxlPVwiJ3dpZHRoOiAnKyAod2luZG93V2lkdGggLSA5MCkgKydweDsnXCI+e3tpdGVtLnRpdGxlfX08L3RleHQ+PCEtLSBpPXt7aX19IC0tPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwid29yZHNcIiA6c3R5bGU9XCInd2lkdGg6ICcrICh3aW5kb3dXaWR0aCAtIDkwKSArJ3B4OydcIj57e2l0ZW0ubXNnfX0te3trKzF9fTwvdGV4dD48IS0tIGs9e3trfX0gLS0+XG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PCEtLSAxLuinhumikemihOiniOaXtueahOWbvueJh++8jGN1cnJlbnR0aW1lc++8muWwseaYr+iOt+WPluW9k+WJjea7keWdl+eahOaXtumXtOeCue+8jOWmguaenOS4jemcgOimge+8jOWPr+S7peazqOmHiuaOiSAtLT5cblx0XHRcdFx0XHRcdFx0PCEtLSAyLuWmguaenOS9v+eUqOS4i+mdoueahOinhumikemihOiniOeahOivneimgeazqOaEj+eahOaYr+inhumikemTvuaOpeacgOWlveaYr+mYv+mHjOS6keS4iueahO+8jOWboOS4ulxuXHRcdFx0XHRcdFx0XHRcdFx0aHR0cHM6Ly94eHh4eHh4eHgubXA0P3gtb3NzLXByb2Nlc3M9dmlkZW8vc25hcHNob3QsdF8xMDAwLGZfanBnXG5cdFx0XHRcdFx0XHRcdFx0XHTov5nkuKrmmK/pmL/ph4zkupHnmoTkuJzopb/vvIzoh7Pkuo7lhbbku5bnmoTop4bpopHmiKrluKfmiJHov5jmsqHmnInor5Xov4fjgIJcblx0XHRcdFx0XHRcdFx0XHRcdC0tPlxuXHRcdFx0XHRcdFx0XHQ8IS0tIDMu6Zi/6YeM5LqR6KeG6aKR5oiq5bin5Zyw5Z2A77yaaHR0cHM6Ly9oZWxwLmFsaXl1bi5jb20vZG9jdW1lbnRfZGV0YWlsLzY0NTU1Lmh0bWwgLS0+XG5cdFx0XHRcdFx0XHRcdDxpbWFnZVxuXHRcdFx0XHRcdFx0XHR2LWlmPVwiaXRlbS5pc1Nob3dpbWFnZSA9PSB0cnVlXCJcblx0XHRcdFx0XHRcdFx0XHQ6c3JjPVwiaXRlbS5zcmMrJz94LW9zcy1wcm9jZXNzPXZpZGVvL3NuYXBzaG90LHRfJysgY3VycmVudHRpbWVzICsnMDAwLGZfanBnJ1wiIFxuXHRcdFx0XHRcdFx0XHRcdG1vZGU9XCJhc3BlY3RGaWxsXCJcblx0XHRcdFx0XHRcdFx0XHQ6c3R5bGU9XCInd2lkdGg6IDEyMHVweDsgaGVpZ2h0OiAxNjB1cHg7IGJvcmRlci1yYWRpdXM6IDEwdXB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogJysgKFByb2dyZXNzQmFyQm90dG9tICsgMTYwKSArJ3VweDsgbGVmdDogJysgKGN1cnJlbnRQb3NpdGlvbnMgLSAxNSkgKydweDsnXCJcblx0XHRcdFx0XHRcdFx0PjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvY2VsbD5cblx0XHRcdDwvbGlzdD5cblx0XHRcdDwhLS0gMS7ms6jmhI/vvJrov5vluqbmnaHov5nnsbvmi5bmi73nmoTkuJzopb/kuI3og73mlL7ov5tibG9ja1xcY2VsbOi/meS6m+W+queOr+S9k+S4reeahO+8jOimgeS4jeeEtnRvdWNobW92ZeaWueazleS8muaNleaNieacieivryAtLT5cblx0XHRcdDx2aWV3IHYtaWY9XCJkYXRhTGlzdC5sZW5ndGggIT09IDAgJiYgZGF0YUxpc3Rba10uaXNTaG93UHJvZ3Jlc3NCYXJUaW1lID09IHRydWVcIiA6c3R5bGU9XCIncG9zaXRpb246IGFic29sdXRlOyBib3R0b206ICcrIChQcm9ncmVzc0JhckJvdHRvbSArIHRoaXMud2luZG93V2lkdGgqMC4yKS8yICsncHg7IGxlZnQ6ICcrICh3aW5kb3dXaWR0aCoyIC0gdGhpcy53aW5kb3dXaWR0aCoxLjM1KS8yICsncHg7J1wiPlxuXHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMjJweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjRjFGMUYxO1wiPnt7Y2hhbmdlVGltZX19IC8ge3t2aWRlb1RpbWVzfX08L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8IS0tIOi/memHjOWwseaYr+i/m+W6puadoeS6hu+8mue6r+aJi+W3pei/m+W6puadoe+8jOiwg+aVtOS9jee9rueahOivneWwseaKiuS7luS7rOeahCBib3R0b20g5pS55oiQ5LiA5LiL5bCx6KGM5LqGIC0tPlxuXHRcdFx0PHZpZXcgdi1pZj1cImlzRHJhZ2dpbmcgPT0gZmFsc2VcIiBAdG91Y2htb3ZlPVwidG91Y2htb3ZlXCIgQHRvdWNoZW5kPVwidG91Y2hlbmRcIiBAdG91Y2hzdGFydD1cInRvdWNoc3RhcnRcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAwOyBsZWZ0OiAwO1wiPlxuXHRcdFx0XHQ8IS0tIDEu6L+Z5LiA5q2l5b+F6aG75Yqg77yM5Li65LqG6YCC6YWN5L2O56uv5py65Z6LIC0tPlxuXHRcdFx0XHQ8dGV4dCA6c3R5bGU9XCInd2lkdGg6ICcrIHdpbmRvd1dpZHRoICsncHg7IG9wYWNpdHk6IDA7J1wiPi48L3RleHQ+XG5cdFx0XHRcdDwhLS0gMi7ov5nmmK/mnKrliqDovb3nmoTml7bnmoTlj7PovrnnmoTngbDoibLpg6jliIYgLS0+XG5cdFx0XHRcdDx2aWV3IDpzdHlsZT1cIid3aWR0aDogJysgd2luZG93V2lkdGggKydweDsgaGVpZ2h0OiA0dXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDN0NDOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogJysgUHJvZ3Jlc3NCYXJCb3R0b20gKyd1cHg7IG9wYWNpdHk6ICcrIFByb2dyZXNzQmFyT3BhY2l0eSArJzsnXCI+PC92aWV3PlxuXHRcdFx0XHQ8IS0tIDMu6L+Z6YeM5oiR6YeH55So55qE5YiG56a75byP5Yqe5rOV77ya5bCx5piv6K6p5ruR5Yqo5qC35byP5ZKM5LiN5ruR5Yqo55qE5qC35byP5YiG5byA77yM6L+Z5qC355u45LqS5LiN5bmy5omw77yM5Y+v5Lul6YG/5YWN6L+b5bqm5p2h6Zeq5Yqo55qE6Zeu6aKYIC0tPlxuXHRcdFx0XHQ8IS0tIDQu5rOo5oSP77yaaXNTaG93UHJvZ3Jlc3NCYXJUaW1lIOWKoOWFpeS6hui/lOWbnuaVsOaNruS4rSAtLT5cblx0XHRcdFx0PHZpZXcgdi1pZj1cImRhdGFMaXN0Lmxlbmd0aCAhPT0gMCAmJiBkYXRhTGlzdFtrXS5pc1Nob3dQcm9ncmVzc0JhclRpbWUgPT0gZmFsc2VcIiA6c3R5bGU9XCInd2lkdGg6ICcrIChjdXJyZW50UG9zaXRpb24pICsncHg7IGhlaWdodDogNHVweDsgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206ICcrIFByb2dyZXNzQmFyQm90dG9tICsndXB4OyBsZWZ0OiAwOyBvcGFjaXR5OiAnKyAoUHJvZ3Jlc3NCYXJPcGFjaXR5IC0gMC4xKSArJzsnXCI+PC92aWV3PlxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiZGF0YUxpc3QubGVuZ3RoICE9PSAwICYmIGRhdGFMaXN0W2tdLmlzU2hvd1Byb2dyZXNzQmFyVGltZSA9PSB0cnVlXCIgOnN0eWxlPVwiJ3dpZHRoOiAnKyAoY3VycmVudFBvc2l0aW9ucykgKydweDsgaGVpZ2h0OiA4dXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogJysgUHJvZ3Jlc3NCYXJCb3R0b20gKyd1cHg7IGxlZnQ6IDA7IG9wYWNpdHk6ICcrIChQcm9ncmVzc0Jhck9wYWNpdHkgKyAwLjA1KSArJzsnXCI+PC92aWV3PlxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiZGF0YUxpc3QubGVuZ3RoICE9PSAwICYmIGRhdGFMaXN0W2tdLmlzU2hvd1Byb2dyZXNzQmFyVGltZSA9PSBmYWxzZVwiIDpzdHlsZT1cIid3aWR0aDogNHB4OyBoZWlnaHQ6IDRweDsgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgYm9yZGVyLXJhZGl1czogMTBweDsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206ICcrIChQcm9ncmVzc0JhckJvdHRvbSAtIDIpICsndXB4OyBsZWZ0OiAnKyAoY3VycmVudFBvc2l0aW9uKSArJ3B4OyBvcGFjaXR5OiAnKyBQcm9ncmVzc0Jhck9wYWNpdHkgKyc7J1wiPjwvdmlldz5cblx0XHRcdFx0PHZpZXcgdi1pZj1cImRhdGFMaXN0Lmxlbmd0aCAhPT0gMCAmJiBkYXRhTGlzdFtrXS5pc1Nob3dQcm9ncmVzc0JhclRpbWUgPT0gdHJ1ZVwiIDpzdHlsZT1cIid3aWR0aDogJysgZG90V2lkdGggKydweDsgaGVpZ2h0OiAnKyBkb3RXaWR0aCArJ3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyBib3JkZXItcmFkaXVzOiAxMHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogJysgKFByb2dyZXNzQmFyQm90dG9tIC0gNSkgKyd1cHg7IGxlZnQ6ICcrIChjdXJyZW50UG9zaXRpb25zIC0gNSkgKydweDsgb3BhY2l0eTogJysgUHJvZ3Jlc3NCYXJPcGFjaXR5ICsnOydcIj48L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHRcdDwhLS1cblx0XHRcblx0XHTor7fliY3lvoAgZG91eWluLXNjcm9sbHZpZXcubnZ1ZSDmlofku7bmn6XnnItcblx0XHRcblx0XHTlt7Lnu4/lhajpg6jms6jph4pcblx0XHRcblx0XHQg6L+Z6YeM5bCx5piv5byV5YWl6K+E6K665o+S5Lu2XG5cdFx0IFxuXHRcdCBcblx0XHQgLS0+XG5cdFx0PHVuaS1wb3B1cCB0eXBlPVwiYm90dG9tXCIgcmVmPVwicGluZ2x1blwiIEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PVwibW92ZUhhbmRsZVwiPlxuXHRcdFx0PHZpZXcgOnN0eWxlPVwiJ3dpZHRoOiAnKyB3aW5kb3dXaWR0aCArJ3B4OyBoZWlnaHQ6ICcrIChib3hTdHlsZS5oZWlnaHQvaGVpZ2h0TnVtKSArJ3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0OyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4OyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDsnXCI+XG5cdFx0XHRcdDwhLS0gXG5cdFx0XHRcdCDms6jmhI/vvJpcblx0XHRcdFx0IGRlbGV0ZUlPU0hlaWdodFxuXHRcdFx0XHQgZGVsZXRlQW5kcm9pZEhlaWdodFxuXHRcdFx0XHQg6L+Z5Lik5Liq5Y+C5pWw55So5LqO5o6n5Yi26K+E6K66562J55qE6auY5bqmXG5cdFx0XHRcdCAtLT5cblx0XHRcdFx0PGRvdXlpbi1zY3JvbGx2aWV3XG5cdFx0XHRcdDpXaWR0aD1cIndpbmRvd1dpZHRoXCJcblx0XHRcdFx0OkhlaWdodD1cIihib3hTdHlsZS5oZWlnaHQvMS4yMylcIlxuXHRcdFx0XHQ6ZGVsZXRlSU9TSGVpZ2h0PVwiMzZcIlxuXHRcdFx0XHQ6ZGVsZXRlQW5kcm9pZEhlaWdodD1cIjE1XCJcblx0XHRcdFx0QGNsb3NlU2Nyb2xsdmlldz1cImNsb3NlU2Nyb2xsdmlld1wiXG5cdFx0XHRcdD48L2RvdXlpbi1zY3JvbGx2aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdW5pLXBvcHVwPlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0Ly8gaW1wb3J0IHVzZXJMaXN0IGZyb20gJy4vZGF0YS5qcycvL+i/meS4quaYr+WBh+aVsOaNrlxuXHQvKlxuXHTlvJXlhaXor4Torrrnu4Tku7Zcblx0Ki8gXG5cdC8vIGltcG9ydCBkb3V5aW5TY3JvbGx2aWV3IGZyb20gJ0AvY29tcG9uZW50cy9kb3V5aW4tc2Nyb2xsdmlldy9kb3V5aW4tc2Nyb2xsdmlldy5udnVlJ1xuXHRcclxuXHRcblx0XG5cdGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC8v5LiL6Z2i5omT8J+Mn+WPt+eahOaYr+W/hemhu+imgeeahOWfuuehgOWtl+autVxuXHRcdFx0XHQvL+S4i+mdouaJk/Cfkpflj7fnmoTmmK/mi6XmnInmu5HliqjmnaHnmoTlv4XpobvlrZfmrrVcblx0XHRcdFx0ZGF0YUxpc3Q6W10sLy/nlKjkuo7mlbDmja7lvqrnjq/nmoTliJfooajwn4yf8J+Sl1xuXHRcdFx0XHR3SGVpZ2h0OjAsLy/ojrflj5bnmoTlsY/luZXpq5jluqbwn4yf8J+Sl1xuXHRcdFx0XHRib3hTdHlsZTp7Ly/op4bpopHvvIzlm77niYflsIHpnaLmoLflvI/wn4yf8J+Sl1xuXHRcdFx0XHRcdCdoZWlnaHQnOiAwLFxuXHRcdFx0XHRcdCd3aWR0aCc6IDAsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGs6MCwvL+m7mOiupOS4ujDwn4yf8J+Sl1xuXHRcdFx0XHRwbGF5SW5nSWRzOltdLC8v5q2j5Zyo5pKt5pS+55qE6KeG6aKRaWTliJfpmJ/vvIzliJfpmJ/nlKjkuo7lpITnkIbmu5Hliqjov4flv6vlr7zoh7TnmoTot7PpopHpl67popjwn4yf8J+Sl1xuXHRcdFx0XHRyZWFkeTpmYWxzZSwvL+WPr+W/veeVpVxuXHRcdFx0XHRpc0RyYWdnaW5nOiBmYWxzZSwvL2ZhbHNl5Luj6KGo5YGc5q2i5ruR5Yqo8J+Mn/Cfkpdcblx0XHRcdFx0cmVmcmVzaGluZzogdHJ1ZSwvL+eUqOS6juS4i+aLieWIt+aWsPCfjJ/wn5KXXG5cdFx0XHRcdHdpbmRvd1dpZHRoOiAwLC8v6I635Y+W5bGP5bmV5a695bqm8J+Mn/Cfkpdcblx0XHRcdFx0d2luZG93SGVpZ2h0OiAwLFxuXHRcdFx0XHRkZXg6IFswLDBdLC8v55So5LqO5Yik5pat5piv5LiK5ruR6L+Y5piv5LiL5ruR77yM56ys5LiA5Liq5a2Y5pen5YC877yM56ys5LqM5Liq5a2Y5paw5YC844CQ55uu5YmN5ZyoMS4wLjflt7Lnu4/lup/lvIPjgJFcblx0XHRcdFx0Y3VycmVudHM6IDAsLy/nlKjkuo7lt6blj7Pmu5HliqjvvIww5Luj6KGo6KeG6aKR55WM6Z2i77yMMeS7o+ihqOWPs+a7keeVjOmdovCfjJ/wn5KXXG5cdFx0XHRcdHBsYXRmb3JtOiAnJywvL+eUqOS6juiOt+WPluaTjeS9nOezu+e7n++8mmlvc+OAgWFuZHJvaWTwn4yf8J+Sl1xuXHRcdFx0XHRwbGF5SW5nOiBmYWxzZSwvL+eUqOS6juinhumikeWIneWni+WMluaXtuaYr+WQpuaSreaUvu+8jOm7mOiupOS4jeaSreaUvvCfjJ/wn5KXXG5cdFx0XHRcdHZpZGVvVGltZTogJycsLy/op4bpopHmgLvml7bplb/vvIzov5nkuKrkuLvopoHnlKjmnaXmiKrlj5bml7bpl7TmlbDlgLzwn5KXXG5cdFx0XHRcdHZpZGVvVGltZXM6ICcnLC8v6KeG6aKR5pe26ZW/77yM55So6L+Z5Liq5p2l6I635Y+W5pe26Ze05YC877yM5L6L5aaC77yaMDA6MzDov5nkuKrml7bpl7TlgLzwn5KXXG5cdFx0XHRcdGNoYW5nZVRpbWU6ICcnLC8v5pi+56S65ruR5Yqo6L+b5bqm5p2h5pe25Y+Y5YyW55qE5pe26Ze08J+Sl1xuXHRcdFx0XHRpc1Nob3dpbWFnZTogZmFsc2UsLy/mmK/lkKbmmL7npLrlsIHpnaLjgJAxLjAuNOW3suW6n+W8g++8jOS9huaYr+aEj+aAnemcgOimgeiusOS9j+OAkVxuXHRcdFx0XHRjdXJyZW50dGltZXM6IDAsLy/lvZPliY3ml7bpl7Twn5KXXG5cdFx0XHRcdGlzU2hvd1Byb2dyZXNzQmFyVGltZTogZmFsc2UsLy/mmK/lkKbmi5bliqjov5vluqbmnaHvvIzlpoLmnpzmi5bliqjvvIh0cnVl77yJ5YiZ5pi+56S66L+b5bqm5p2h5pe26Ze077yM5ZCm5YiZ5LiN5pi+56S677yIZmFsc2XvvInjgJAxLjAuNOW3suW6n+W8g++8jOS9huaYr+aEj+aAnemcgOimgeiusOS9j+OAkVxuXHRcdFx0XHRQcm9ncmVzc0Jhck9wYWNpdHk6IDAuNywvL+i/m+W6puadoeS4jeaLluWKqOaXtueahOm7mOiupOWAvO+8jOWwseaYr+mAj+aYjueahPCfkpdcblx0XHRcdFx0ZG90V2lkdGg6IDAsLy/mkq3mlL7nmoTlsI/lnIbngrnvvIzpu5jorqTmsqHmnInwn5KXXG5cdFx0XHRcdGRlbGV0ZUhlaWdodDogMCwvL+a1i+ivlemrmOW6pvCfjJ/wn5KXXG5cdFx0XHRcdHBlcmNlbnQ6IDAsLy/nmb7liIblsI/mlbDwn5KXXG5cdFx0XHRcdGN1cnJlbnRQb3NpdGlvbjogMCwvL+a7keWdl+W9k+WJjeS9jee9rvCfkpcvLzIuMOW3suW8g+eUqO+8jOeOsOW3sueUqOS6juWQjuerr+WPguaVsFxuXHRcdFx0XHRjdXJyZW50UG9zaXRpb25zOiAwLC8v5ruR5Z2X5b2T5YmN5L2N572u55qE5Ymv5pys8J+Sly8vMi4w5bey5byD55So77yM546w5bey55So5LqO5ZCO56uv5Y+C5pWwXG5cdFx0XHRcdG5ld1RpbWU6IDAsLy/ot5/miYvmu5HliqjlkI7nmoTmnIDmlrDml7bpl7Twn5KXXG5cdFx0XHRcdHRpbWVOdW1iZXI6IDAsLy/wn4yf8J+Sl1xuXHRcdFx0XHRQcm9ncmVzc0JhckJvdHRvbTogMjAsLy/ov5vluqbmnaHnprvlupXpg6jnmoTot53nprvwn5KXXG5cdFx0XHRcdG9iamVjdF9maXQ6ICdjb250YWluJywvL+inhumikeagt+W8j+m7mOiupOWMheWQq/CfjJ/wn5KXXG5cdFx0XHRcdG1vZGU6ICdhc3BlY3RGaXQnLC8v5Zu+54mH5bCB6Z2i5qC35byP8J+Mn/Cfkpdcblx0XHRcdFx0dGltZW91dDogXCJcIiwvL/CfjJ/nlKjmnaXpmLvmraIgc2V0VGltZW91dCgp5pa55rOVXG5cdFx0XHRcdHZvaWNlOiBcIlwiLC8v8J+Mn+eUqOadpemYu+atoiBzZXRUaW1lb3V0KCnmlrnms5Vcblx0XHRcdFx0b2xkVmlkZW86IFwiXCIsXG5cdFx0XHRcdFxuXHRcdFx0XHRpc0F1dG9wbGF5OiBmYWxzZSwvL+aYr+WQpuW8gOWQr+iHquWKqOaSreaUvijpu5jorqTkuI3lvIDlkK8pXG5cdFx0XHRcdGF1dG9wbGF5VGV4dDogXCLlvIDlkK/oh6rliqjmkq3mlL5cIixcblx0XHRcdFx0dGltZXJzOiBcIlwiLFxuXHRcdFx0XHRcblx0XHRcdFx0Ly8g5byV5YWl6K+E6K66IC0g5Y+C5pWwXG5cdFx0XHRcdGhlaWdodE51bTogMS4xOCxcblx0XHRcdFx0XG5cdFx0XHRcdC8vIOWPjOWHu+eCuei1nuWPguaVsFxuXHRcdFx0XHR0b3VjaE51bTogMCxcblx0XHRcdFx0YWl4aW5MZWZ0OiAwLFxuXHRcdFx0XHRhaXhpblRvcDogMCxcblx0XHRcdFx0aXNTaG93QWl4aW46IGZhbHNlLFxuXHRcdFx0XHRSb3RhdGU6IDBcblx0XHRcdH1cbiAgICAgICAgfSxcblx0XHR3YXRjaDp7XG5cdFx0XHRrKGssb2xkX2spey8v55uR5ZCsIGsg5YC855qE5Y+Y5YyW77yM5Y+v5Lul5o6n5Yi26KeG6aKR55qE5pKt5pS+5LiO5pqC5YGcXG5cdFx0XHRcdGNvbnNvbGUubG9nKGspXG5cdFx0XHRcdHRoaXMuZGF0YUxpc3Rbb2xkX2tdLnN0YXRlID0gJ3N0b3AnLy/lpoLmnpzmmK/ooqvmu5HotbDnmoTop4bpopHvvIzlsLHlgZzmraLmkq3mlL5cblx0XHRcdFx0dGhpcy5kYXRhTGlzdFtvbGRfa10ucGxheUluZyA9IGZhbHNlLy/lpoLmnpzop4bpopHmmoLlgZzvvIzlsLHliqDovb3lsIHpnaJcblx0XHRcdFx0dGhpcy5kYXRhTGlzdFtvbGRfa10uaXNwbGF5ID0gdHJ1ZVxuXHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3Rbb2xkX2tdLl9pZCx0aGlzKS5wbGF5KClcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMub2xkVmlkZW8pXG5cdFx0XHRcdHRoaXMub2xkVmlkZW8gPSBzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W29sZF9rXS5faWQsdGhpcykuc2VlaygwKVxuXHRcdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFtvbGRfa10uX2lkLHRoaXMpLnBhdXNlKClcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn6aKE55WZ56ysJyArIChvbGRfayArIDEpICsgJ+S4quinhumike+8micgKyB0aGlzLmRhdGFMaXN0W29sZF9rXS5faWQpXG5cdFx0XHRcdH0sNTAwKVxuXHRcdFx0XHQvLyAyLjDniYjmnKzlt7Lnu4/ljrvmjonkuobkuIvpnaLov5nkuIDlj6XvvIzop4bpopHkuI3nlKjmmoLlgZzvvIzlj6rpnIDopoHmiorlo7Dpn7PnpoHmraLlsLHooYxcblx0XHRcdFx0Ly8gdW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W29sZF9rXS5faWQgKyAnJyArIG9sZF9rLHRoaXMpLnN0b3AoKS8v5aaC5p6c6KeG6aKR5pqC5YGc77yM6YKj5LmI5pen6KeG6aKR5YGc5q2i77yM6L+Z6YeM55qEdGhpcy5kYXRhTGlzdFtvbGRfa10uX2lkICsgJycgKyBvbGRfa++8jOWQjumdouWKoCBvbGRfayDmmK/kuLrkuobmr4/kuIDkuKrop4bpopHnmoQgaWQg5YC85LiN5ZCM77yM6L+Z5qC35bCx5Y+v5Lul5aSn56iL5bqm55qE6YG/5YWN5Liy6Z+z6Zeu6aKYXG5cdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFtrXS5faWQsdGhpcykucGxheSgpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygn5bey57uP5pqC5YGcIC0tPiDnrKwnICsgKG9sZF9rICsgMSkgKyAn5Liq6KeG6aKR772eJykvL+aPkOekulxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy52b2ljZSlcblx0XHRcdFx0dGhpcy52b2ljZSA9IHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdFx0XHR0aGlzLmRhdGFMaXN0W2tdLmlzcGxheSA9IGZhbHNlXG5cdFx0XHRcdH0sMzAwKVxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRcdFx0dGhpcy5kYXRhTGlzdFtrXS5wbGF5SW5nID0gdHJ1ZVxuXHRcdFx0XHR9LDg1MClcblx0XHRcdFx0Ly/jgJAyLjDniYjmnKzmm7TmlrDlhoXlrrnjgJEtIHN0YXJ0XG5cdFx0XHRcdHZhciBwID0ga1xuXHRcdFx0XHQrK3Bcblx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFtwXS5faWQsdGhpcykucGxheSgpXG5cdFx0XHRcdH0sMjApXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXG5cdFx0XHRcdHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbcF0uX2lkLHRoaXMpLnNlZWsoMClcblx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbcF0uX2lkLHRoaXMpLnBhdXNlKClcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn6aKE5Yqg6L2956ysJyArIChwICsgMSkgKyAn5Liq6KeG6aKR77yaJyArIHRoaXMuZGF0YUxpc3RbcF0uX2lkKVxuXHRcdFx0XHR9LDE1MDApXG5cdFx0XHRcdC8v44CQMi4w54mI5pys5pu05paw5YaF5a6544CRLSBlbmRcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uU2hvdygpe1xuXHRcdFx0Y29uc29sZS5sb2coJ+WbnuWIsOWJjeWPsCcpO1xuXHRcdFx0aWYodGhpcy5kYXRhTGlzdC5sZW5ndGggIT09IDApe1xuXHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uc3RhdGUgPSAncGxheSc7XG5cdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFt0aGlzLmtdLl9pZCx0aGlzKS5wbGF5KClcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uSGlkZSgpe1xuXHRcdFx0dGhpcy5kYXRhTGlzdFt0aGlzLmtdLnN0YXRlID0gJ3BhdXNlJzsvL+eVjOmdoumakOiXj+S5n+imgeWBnOatouaSreaUvuinhumikVxuXHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W3RoaXMua10uX2lkLHRoaXMpLnBhdXNlKCk7Ly/mmoLlgZzku6XlkI7nu6fnu63mkq3mlL5cblx0XHRcdGNvbnNvbGUubG9nKCfliLDlkI7lj7AnKTtcblx0XHR9LFxuXHRcdG9uTG9hZCgpe1xyXG5cdFx0XHRjb25zb2xlLmxvZygn6L+b5YWl6KeG6aKRJyk7XG5cdFx0XHR0aGlzLnBsYXRmb3JtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm1cblx0XHRcdHZhciBtb2RlbCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLm1vZGVsXG5cdFx0XHRpZih0aGlzLnBsYXRmb3JtID09ICdpb3MnICYmIChtb2RlbCAhPT0gJ2lQaG9uZTYnIHx8IG1vZGVsICE9PSAnaVBob25lNnMnIHx8IG1vZGVsICE9PSAnaVBob25lNycgfHwgbW9kZWwgIT09ICdpUGhvbmU4Jykpe1xuXHRcdFx0XHR0aGlzLmRlbGV0ZUhlaWdodCA9IDMyLy/mnIkgdGFiYmFy55qEIOS/ruaUuei/memHjOWPr+S7peaUueWPmOinhumikemrmOW6plxuXHRcdFx0XHRcblx0XHRcdFx0IC8qXG5cdFx0XHRcdCDlvJXlhaXor4Torrrlj4LmlbBcblx0XHRcdFx0ICovXG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLmhlaWdodE51bSA9IDEuMjdcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZGVsZXRlSGVpZ2h0ID0gMFxuXHRcdFx0XHQvKlxuXHRcdFx0XHTlvJXlhaXor4Torrrlj4LmlbBcblx0XHRcdFx0Ki9cblx0XHRcdFx0dGhpcy5oZWlnaHROdW0gPSAxLjE4XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRoaXMud2luZG93V2lkdGggPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zY3JlZW5XaWR0aC8v6I635Y+W5bGP5bmV5a695bqmXG5cdFx0XHR0aGlzLmJveFN0eWxlLndpZHRoID0gdGhpcy53aW5kb3dXaWR0aCArICdweCcvL+e7meWuveW6puWKoHB4XG5cdFx0XHR0aGlzLndIZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zY3JlZW5IZWlnaHQ7Ly/ojrflj5blsY/luZXpq5jluqZcblx0XHRcdHRoaXMuYm94U3R5bGUuaGVpZ2h0ID0gdGhpcy53SGVpZ2h0IC0gdGhpcy5kZWxldGVIZWlnaHQ7Ly/mlLnlj5jop4bpopHpq5jluqZcblx0XHRcdHRoaXMuZ2V0KCkvL+i/meS4gOatpe+8jOWKoOi9veinhumikeaVsOaNrlxuXHRcdH0sXG5cdFx0b25SZWFkeSgpIHtcblx0XHR9LFxuICAgICAgICBtZXRob2RzOiB7XG5cdFx0XHRhdXRvUGxheSgpeyBcblx0XHRcdFx0dGhpcy5pc0F1dG9wbGF5ID0gIXRoaXMuaXNBdXRvcGxheTtcblx0XHRcdFx0aWYoIXRoaXMuaXNBdXRvcGxheSl7XG5cdFx0XHRcdFx0dGhpcy5hdXRvcGxheVRleHQgPSBcIuW8gOWQr+iHquWKqOaSreaUvlwiXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogXCLlhbPpl63oh6rliqjmkq3mlL5cIixcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmF1dG9wbGF5VGV4dCA9IFwi5YWz6Zet6Ieq5Yqo5pKt5pS+XCJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiBcIuW8gOWQr+iHquWKqOaSreaUvlwiLFxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Z2V0RGF0YSgpe1xuXHRcdFx0XHQvLyDov5nph4zlsLHmmK/mlbDmja7liqDovb3lrozku6XlkI7lho3lkJHlkI7nq6/lj5HpgIHmlbDmja7nmoTlnLDmlrlcclxuXHRcdFx0XHRcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDogJ2h0dHBzOi8vYmRiMjRjNmQtOGMxOS00ZjgwLThlN2UtYzljOWYwMzdmMTMxLmJzcGFwcC5jb20vdmlkZW8nLFxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRcdGRhdGE6e1xuXHRcdFx0XHRcdFx0aW5mbzogJ2dldF92aWRlbydcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0XHRcdHZhciBtc2cgPSByZXMuZGF0YS5kYXRhXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmRhdGFMaXN0LnB1c2gobXNnW2ldKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHR0b3VjaHN0YXJ0KGV2ZW50KXtcblx0XHRcdFx0dGhpcy5kYXRhTGlzdFt0aGlzLmtdLmlzU2hvd2ltYWdlID0gdHJ1ZSAvL+WImuinpuaRuOeahOaXtuWAmeWwseimgeaYvuekuumihOiniOinhumikeWbvueJh+S6hlxuXHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uaXNTaG93UHJvZ3Jlc3NCYXJUaW1lID0gdHJ1ZSAvL+aYvuekuuaXtumXtOe6v1xuXHRcdFx0XHR0aGlzLlByb2dyZXNzQmFyT3BhY2l0eSA9IDEgLy/orqnmu5HlnZfmmL7npLrotbfmnaXmm7TmmI7mmL7kuIDngrlcblx0XHRcdFx0dGhpcy5kb3RXaWR0aCA9IDEwIC8v6K6p54K55pi+56S66LW35p2l5pu05piO5pi+5LiA54K5XG5cdFx0XHR9LFxuXHRcdFx0dG91Y2hlbmQoKXsvL+W9k+aJi+advuW8gOWQju+8jOi3s+WIsOacgOaWsOaXtumXtFxuXHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5faWQsdGhpcykuc2Vlayh0aGlzLm5ld1RpbWUpXG5cdFx0XHRcdGlmKHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5zdGF0ZSA9PSAncGF1c2UnKXtcblx0XHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uc3RhdGUgPSAncGxheSdcblx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5faWQsdGhpcykucGxheSgpXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5kYXRhTGlzdFt0aGlzLmtdLmlzU2hvd1Byb2dyZXNzQmFyVGltZSA9IGZhbHNlIC8v6Kem5pG457uT5p2f5ZCO77yM6ZqQ6JeP5pe26Ze057q/XG5cdFx0XHRcdHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5pc1Nob3dpbWFnZSA9IGZhbHNlIC8v6Kem5pG457uT5p2f5ZCO77yM6ZqQ6JeP5pe26Ze06aKE6KeIXG5cdFx0XHRcdHRoaXMuUHJvZ3Jlc3NCYXJPcGFjaXR5ID0gMC41IC8v6ZqQ6JeP6LW35p2l6L+b5bqm5p2h77yM5LiN6YKj5LmI5piO5pi+5LqGXG5cdFx0XHRcdHRoaXMuZG90V2lkdGggPSAwIC8v6ZqQ6JeP6LW35p2l6L+b5bqm5p2h77yM5LiN6YKj5LmI5piO5pi+5LqGXG5cdFx0XHR9LFxuXHRcdFx0dG91Y2htb3ZlKGV2ZW50KXsvL+W9k+aJi+enu+WKqOa7keWdl+aXtu+8jOiuoeeul+S9jee9ruOAgeeZvuWIhuWwj+aVsOOAgeaWsOeahOaXtumXtFxuXHRcdFx0XHR2YXIgbXNnID0gW11cblx0XHRcdFx0aWYodGhpcy52aWRlb1RpbWUgIT09ICcnKXtcblx0XHRcdFx0XHRtc2cgPSB0aGlzLnZpZGVvVGltZS5zcGxpdCgnOicpXG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHRpbWVOdW1iZXIgPSBOdW1iZXIobXNnWzBdKSo2MCArIE51bWJlcihtc2dbMV0pXG5cdFx0XHRcdHRoaXMuY3VycmVudFBvc2l0aW9ucyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblhcblx0XHRcdFx0dGhpcy5wZXJjZW50ID0gdGhpcy5jdXJyZW50UG9zaXRpb25zIC8gdGhpcy53aW5kb3dXaWR0aFxuXHRcdFx0XHR0aGlzLm5ld1RpbWUgPSB0aGlzLnBlcmNlbnQqdGltZU51bWJlciBcblx0XHRcdFx0dGhpcy5jdXJyZW50dGltZXMgPSBwYXJzZUludCh0aGlzLm5ld1RpbWUpXG5cdFx0XHRcdGxldCB0aGVUaW1lID0gdGhpcy5uZXdUaW1lXG5cdFx0XHRcdGxldCBtaWRkbGUgPSAwOy8vIOWIhlxuXHRcdFx0XHRpZih0aGVUaW1lID4gNjApIHtcblx0XHRcdFx0XHRtaWRkbGUgPSBwYXJzZUludCh0aGVUaW1lLzYwKTtcblx0XHRcdFx0XHR0aGVUaW1lID0gcGFyc2VJbnQodGhlVGltZSU2MCk7XHRcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmNoYW5nZVRpbWUgPSBgJHtNYXRoLnJvdW5kKG1pZGRsZSk+OT9NYXRoLnJvdW5kKG1pZGRsZSk6JzAnK01hdGgucm91bmQobWlkZGxlKX06JHtNYXRoLnJvdW5kKHRoZVRpbWUpPjk/TWF0aC5yb3VuZCh0aGVUaW1lKTonMCcrTWF0aC5yb3VuZCh0aGVUaW1lKX1gXG5cdFx0XHR9LFxuXHRcdFx0dGltZXVwZGF0ZShldmVudCxpbmRleCl7Ly/orqHnrpfmu5HlnZflvZPliY3kvY3nva7vvIzorqHnrpflvZPliY3nmb7liIblsI/mlbBcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coaW5kZXgpXG5cdFx0XHRcdGlmKGluZGV4ID09IHRoaXMuayl7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZXZlbnQpXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnR0aW1lID0gZXZlbnQuZGV0YWlsLmN1cnJlbnRUaW1lXG5cdFx0XHRcdFx0dGhpcy50aW1lTnVtYmVyID0gTWF0aC5yb3VuZChldmVudC5kZXRhaWwuZHVyYXRpb24pXG5cdFx0XHRcdFx0dGhpcy5nZXRUaW1lKClcblx0XHRcdFx0XHR0aGlzLnBlcmNlbnQgPSBjdXJyZW50dGltZS90aGlzLnRpbWVOdW1iZXJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IHRoaXMud2luZG93V2lkdGgqdGhpcy5wZXJjZW50XG5cdFx0XHRcdFx0bGV0IHRoZVRpbWUgPSBjdXJyZW50dGltZVxuXHRcdFx0XHRcdGxldCBtaWRkbGUgPSAwOy8vIOWIhlxuXHRcdFx0XHRcdGlmKHRoZVRpbWUgPiA2MCkge1xuXHRcdFx0XHRcdFx0bWlkZGxlID0gcGFyc2VJbnQodGhlVGltZS82MCk7XG5cdFx0XHRcdFx0XHR0aGVUaW1lID0gcGFyc2VJbnQodGhlVGltZSU2MCk7XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VUaW1lID0gYCR7TWF0aC5yb3VuZChtaWRkbGUpPjk/TWF0aC5yb3VuZChtaWRkbGUpOicwJytNYXRoLnJvdW5kKG1pZGRsZSl9OiR7TWF0aC5yb3VuZCh0aGVUaW1lKT45P01hdGgucm91bmQodGhlVGltZSk6JzAnK01hdGgucm91bmQodGhlVGltZSl9YFxuXHRcdFx0XHRcdC8v6Ieq5Yqo5YiH5o2i6KeG6aKRXG5cdFx0XHRcdFx0aWYodGhpcy5pc0F1dG9wbGF5KXsvL3RydWUs5Luj6KGo6Ieq5Yqo5pKt5pS+XG5cdFx0XHRcdFx0XHRpZihNYXRoLnJvdW5kKGN1cnJlbnR0aW1lKSA9PSB0aGlzLnRpbWVOdW1iZXIgLSAxKXtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZG9tID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2RvbScpXG5cdFx0XHRcdFx0XHRcdGxldCBkb21zID0gJ2l0ZW0nKyh0aGlzLmsrMSlcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHRcdFx0XHRcdGxldCBlbCA9IHRoaXMuJHJlZnNbZG9tc11bMF1cblx0XHRcdFx0XHRcdFx0XHRkb20uc2Nyb2xsVG9FbGVtZW50KGVsLHtcblx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldDogMCxcblx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVkOiB0cnVlXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fSw1MDApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Z2V0VGltZSgpey8v5b6X5Yiw5pe26Ze05Ye95pWwXG5cdFx0XHRcdHRoaXMudmlkZW9UaW1lID0gdGhpcy5mb3JtYXRTZWNvbmRzKHRoaXMudGltZU51bWJlcik7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoYXQudmlkZW9UaW1lKVxuXHRcdFx0XHR2YXIgbXNnID0gW11cblx0XHRcdFx0aWYodGhpcy52aWRlb1RpbWUgIT09ICcnKXtcblx0XHRcdFx0XHRtc2cgPSB0aGlzLnZpZGVvVGltZS5zcGxpdCgnOicpXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy52aWRlb1RpbWVzID0gYCR7bXNnWzBdPjk/bXNnWzBdOicwJyttc2dbMF19OiR7bXNnWzFdPjk/bXNnWzFdOicwJyttc2dbMV19YDtcblx0XHRcdH0sXG5cdFx0XHRmb3JtYXRTZWNvbmRzKHZhbHVlKSB7Ly/ojrflj5bml7bpl7Tlh73mlbBcblx0XHRcdFx0bGV0IHRoZVRpbWUgPSBwYXJzZUludCh2YWx1ZSk7Ly8g56eSXG5cdFx0XHRcdGxldCBtaWRkbGU9IDA7Ly8g5YiGXG5cdFx0XHRcdGlmKHRoZVRpbWUgPiA2MCkge1xuXHRcdFx0XHRcdG1pZGRsZT0gcGFyc2VJbnQodGhlVGltZS82MCk7XG5cdFx0XHRcdFx0dGhlVGltZSA9IHBhcnNlSW50KHRoZVRpbWUlNjApO1x0XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGAke21pZGRsZT45P21pZGRsZTptaWRkbGV9OiR7dGhlVGltZT45P3RoZVRpbWU6dGhlVGltZX1gO1xuXHRcdFx0fSxcblx0XHRcdHBsYXlJbmdzKGluZGV4KSB7XG5cdFx0XHRcdC8vXG5cdFx0XHR9LFxuXHRcdFx0bW9yZVZpZGVvKGluZGV4KXtcblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0dG9WaWRlbyhpbmRleCl7XG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdGVyd2VpbWEoKXtcblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0dG96dW96aGUoKXtcblx0XHRcdFx0dGhpcy5jdXJyZW50cyA9IDEvL+eCueWHu+WktOWDj+S7peWQjuWwseS8muWIh+aNolxuXHRcdFx0fSxcblx0XHRcdHN0b3AoKXtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3N0b3AnKVxuXHRcdFx0fSxcblx0XHRcdHNjcm9sbHMgKGV2ZW50KSB7XG5cdFx0XHRcdHRoaXMuaXNEcmFnZ2luZyA9IGV2ZW50LmlzRHJhZ2dpbmdcblx0XHRcdFx0aWYgKCFldmVudC5pc0RyYWdnaW5nKSB7Ly9pc0RyYWdnaW5n77ya5Yik5pat55So5oi35piv5LiN5piv5Zyo5ruR5Yqo77yM5ruR5Yqo77yadHJ1Ze+8jOWBnOatoua7keWKqO+8mmZhbHNl44CC5oiR5Lus6KaB55So5oi35YGc5q2i5ruR5Yqo5pe25omN57uZIGsg6LWL5YC877yM6L+Z5qC35bCx5Y+v5Lul6YG/5YWN5b6I5aSa6bq754OmXG5cdFx0XHRcdFx0dmFyIGkgPSBNYXRoLnJvdW5kKE1hdGguYWJzKGV2ZW50LmNvbnRlbnRPZmZzZXQueSkgLyAodGhpcy53SGVpZ2h0IC0gdGhpcy5kZWxldGVIZWlnaHQgKyAxKSkvL+WFiOeUqOe7neWvueWAvOWPluWHuua7keWKqOeahOi3neemu++8jOeEtuWQjumZpOS7peWxj+W5lemrmOW6pu+8jOWPluS4gOS4quaVtO+8jOWwseefpemBk+S9oOeOsOWcqOa7keWKqOWIsOWTquS4gOS4quinhumikeS6hlxuXHRcdFx0XHRcdGlmKGkgIT09IHRoaXMuayl7Ly/ov5nph4zliqDliKTmlq3mmK/lm6DkuLrov5nkuKrmlrnms5XkvJrmiafooYzlvojlpJrmrKHvvIzkvJrpgKDmiJDph43lpI3or7fmsYLvvIzmiYDku6Xov5nph4zlhpnkuIDkuKrpmZDliLZcblx0XHRcdFx0XHRcdGlmKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09ICdpb3MnKXtcblx0XHRcdFx0XHRcdFx0dGhpcy5rID0gaS8v5Yik5pat5LqG55So5oi35rKh5pyJ5ruR5Yqo77yM56Gu6K6k5LqG55So5oi355qE56Gu5piv5Zyo55yL6L+Z5Liq6KeG6aKR77yM54S25ZCO5bCx6LWL5YC85ZWmXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5zdGF0ZSA9ICdwbGF5J1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5q2j5Zyo5pKt5pS+IC0tPiDnrKwnICsgKHRoaXMuayArIDEpICsgJ+S4quinhumike+9nicpXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lcnMpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRpbWVycyA9IHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmsgPSBpLy/liKTmlq3kuobnlKjmiLfmsqHmnInmu5HliqjvvIznoa7orqTkuobnlKjmiLfnmoTnoa7mmK/lnKjnnIvov5nkuKrop4bpopHvvIznhLblkI7lsLHotYvlgLzllaZcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uc3RhdGUgPSAncGxheSdcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5q2j5Zyo5pKt5pS+IC0tPiDnrKwnICsgKHRoaXMuayArIDEpICsgJ+S4quinhumike+9nicpXG5cdFx0XHRcdFx0XHRcdH0sODApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Z2V0KCl7XHJcblx0XHRcdFx0dGhpcy5kYXRhTGlzdFswXSA9IHVuaS5nZXRTdG9yYWdlU3luYygndmlkZW9fY2h1YW5jYW4nKTtcclxuXHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6J2h0dHA6Ly8xMjAuMjQuMjM4Ljg4OjgxNDYvaG9tZXBhaW50L2dldHZpZGVvJyxcclxuXHRcdFx0XHRcdG1ldGhvZDonR0VUJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdFx0dmFyIG1zZyA9IHJlcy5kYXRhXHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKG1zZylcclxuXHRcdFx0XHRcdFx0dGhpcy5kYXRhTGlzdCA9IG1zZ1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFMaXN0WzBdID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd2aWRlb19jaHVhbmNhbicpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFMaXN0WzBdLnN0YXRlID0gXCJwbGF5XCI7XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdFx0XHQvL+i/memHjOeahOW7tui/n+aYr+S4uuS6humBv+WFjeaJp+ihjOaXtumXtOWkquW/q+iAjOebtOaOpei3s+i/h+aJp+ihjOeahCBidWdcclxuXHRcdFx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbMF0uX2lkLHRoaXMpLnNlZWsoMClcclxuXHRcdFx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbMF0uX2lkLHRoaXMpLnBsYXkoKVxyXG5cdFx0XHRcdFx0XHR9LDIwMClcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHRoaXMuZGF0YUxpc3RbMF0uaXNwbGF5ID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGF0YUxpc3RbMF0ucGxheUluZyA9IHRydWVcclxuXHRcdFx0XHRcdFx0fSw1MDApXHJcblx0XHRcdFx0XHRcdHZhciBwID0gMFxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0XHRcdFx0KytwXHJcblx0XHRcdFx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W3BdLl9pZCx0aGlzKS5wbGF5KClcclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbcF0uX2lkLHRoaXMpLnNlZWsoMClcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFtwXS5faWQsdGhpcykucGF1c2UoKVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+mihOWKoOi9veesrCcgKyAocCArIDEpICsgJ+S4quinhumike+8micgKyB0aGlzLmRhdGFMaXN0W3BdLl9pZClcclxuXHRcdFx0XHRcdFx0XHR9LDIwMDApXHJcblx0XHRcdFx0XHRcdH0sNTApXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8g6L+Z5Liq5pa55rOV5Li76KaB5bCx5piv55So5p2l56ys5LiA5qyh6L+b5YWl6KeG6aKR5pKt5pS+5pe255So5p2l5aSE55CG55qEXG5cdFx0XHRcdC8vIHRoaXMuZGF0YUxpc3QgPSB1c2VyTGlzdDsvL+i/meS4quWwseaYr+i1i+WAvOWKoOi9veinhumikeWVplxuXHRcdFx0XHQvLyB1bmkucmVxdWVzdCh7XG5cdFx0XHRcdC8vIFx0dXJsOiAnaHR0cHM6Ly9iZGIyNGM2ZC04YzE5LTRmODAtOGU3ZS1jOWM5ZjAzN2YxMzEuYnNwYXBwLmNvbS92aWRlbycsXG5cdFx0XHRcdC8vIFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdC8vIFx0ZGF0YTp7XG5cdFx0XHRcdC8vIFx0XHRpbmZvOiAnZ2V0X3ZpZGVvJ1xuXHRcdFx0XHQvLyBcdH0sXG5cdFx0XHRcdC8vIFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cblx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdC8vIH0pXG5cdFx0XHR9LFxuXHRcdFx0b25wdWxsaW5nZG93bigpe1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygn5q2j5Zyo5LiL5ouJ5Yi35paw77yM5q2k5pe25omL6L+Y5Zyo6Kem5pG45rKh5pyJ5p2+5byAJylcblx0XHRcdFx0dGhpcy5yZWZyZXNoaW5nID0gdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdG9ucmVmcmVzaCgpe1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygn5LiL5ouJ5Yi35paw5a6M5q+V77yM5q2k5pe25omL5p2+5byA5LqGJylcblx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHRcdHRoaXMucmVmcmVzaGluZyA9IGZhbHNlXG5cdFx0XHRcdH0sMTAwMClcblx0XHRcdH0sXG5cdFx0XHQvLyDlj4zlh7vngrnotZ7mlYjmnpxcblx0XHRcdHRvdWNoc3RhcnRIb3ZlcihldmVudCl7XG5cdFx0XHRcdGlmKHRoaXMudG91Y2hOdW0gPj0gMSl7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ+WPjOWHuyAtLSBY5Z2Q5qCH77yaJysgZXZlbnQudG91Y2hlc1swXS5zY3JlZW5YKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygn5Y+M5Ye7IC0tIFnlnZDmoIfvvJonKyBldmVudC50b3VjaGVzWzBdLnNjcmVlblkpO1xuXHRcdFx0XHRcdHRoaXMuYWl4aW5MZWZ0ID0gZXZlbnQudG91Y2hlc1swXS5zY3JlZW5YIC0gNTA7XG5cdFx0XHRcdFx0dGhpcy5haXhpblRvcCA9ICBldmVudC50b3VjaGVzWzBdLnNjcmVlblkgLSA1MDtcblx0XHRcdFx0XHR0aGlzLmlzU2hvd0FpeGluID0gdHJ1ZTtcblx0XHRcdFx0XHRsZXQgbWF4ID0gNDA7IGxldCBtaW4gPSAtNDA7XG5cdFx0XHRcdFx0dGhpcy5Sb3RhdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdFx0XHRcdHRoaXMuaXNTaG93QWl4aW4gPSBmYWxzZTtcblx0XHRcdFx0XHR9LDcwMClcblx0XHRcdFx0XHR0aGlzLm9uVGFiSXRlbVRhcHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8v54K55Ye75pKt5pS+JibmmoLlgZxcblx0XHRcdHRhcFZpZGVvSG92ZXIoc3RhdGUsZXZlbnQpe1xuXHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uaXNTaG93aW1hZ2UgPSBmYWxzZVxuXHRcdFx0XHR0aGlzLmRhdGFMaXN0W3RoaXMua10uaXNTaG93UHJvZ3Jlc3NCYXJUaW1lID0gZmFsc2Vcblx0XHRcdFx0dGhpcy5Qcm9ncmVzc0Jhck9wYWNpdHkgPSAwLjVcblx0XHRcdFx0dGhpcy5kb3RXaWR0aCA9IDBcblx0XHRcdFx0Y29uc29sZS5sb2coJ3N0YXRlLS0nLHN0YXRlKTtcblx0XHRcdFx0Ly8gMS7lkK/nlKjlj4zlh7vngrnotZ4gLS0tIHN0YXJ0XG5cdFx0XHRcdHRoaXMudG91Y2hOdW0rKztcblx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHRcdGlmKHRoaXMudG91Y2hOdW0gPT0gMSl7XG5cdFx0XHRcdFx0XHRpZihzdGF0ZT09J3BsYXknfHxzdGF0ZT09J2NvbnRpbnVlJyl7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5zdGF0ZSA9ICdwYXVzZSc7XG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhTGlzdFt0aGlzLmtdLnN0YXRlID0gJ2NvbnRpbnVlJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmKHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5zdGF0ZSA9PSAnY29udGludWUnKXtcblx0XHRcdFx0XHRcdFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W3RoaXMua10uX2lkLHRoaXMpLnBsYXkoKTsvL+aaguWBnOS7peWQjue7p+e7reaSreaUvlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYodGhpcy5kYXRhTGlzdFt0aGlzLmtdLnN0YXRlID09ICdwYXVzZScpe1xuXHRcdFx0XHRcdFx0XHR1bmkuY3JlYXRlVmlkZW9Db250ZXh0KHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5faWQsdGhpcykucGF1c2UoKTsvL+aaguWBnOS7peWQjue7p+e7reaSreaUvlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZih0aGlzLnRvdWNoTnVtID49IDIpe1xuXHRcdFx0XHRcdFx0dGhpcy5kb3VibGVMaWtlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMudG91Y2hOdW0gPSAwO1xuXHRcdFx0XHR9LDIwMClcblx0XHRcdFx0Ly8gLS0tLS0tLS0tLS0tLS0tIGVuZGluZ1xuXHRcdFx0XHQvLyAyLiDkuI3lkK/nlKjlj4zlh7vngrnotZ4gc3RhcnRcblx0XHRcdFx0Ly8gaWYoc3RhdGU9PSdwbGF5J3x8c3RhdGU9PSdjb250aW51ZScpe1xuXHRcdFx0XHQvLyBcdHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5zdGF0ZSA9ICdwYXVzZSc7XG5cdFx0XHRcdC8vIH1lbHNle1xuXHRcdFx0XHQvLyBcdHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5zdGF0ZSA9ICdjb250aW51ZSc7XG5cdFx0XHRcdC8vIH1cblx0XHRcdFx0Ly8gaWYodGhpcy5kYXRhTGlzdFt0aGlzLmtdLnN0YXRlID09ICdjb250aW51ZScpe1xuXHRcdFx0XHQvLyBcdHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodGhpcy5kYXRhTGlzdFt0aGlzLmtdLl9pZCx0aGlzKS5wbGF5KCk7Ly/mmoLlgZzku6XlkI7nu6fnu63mkq3mlL5cblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHQvLyBpZih0aGlzLmRhdGFMaXN0W3RoaXMua10uc3RhdGUgPT0gJ3BhdXNlJyl7XG5cdFx0XHRcdC8vIFx0dW5pLmNyZWF0ZVZpZGVvQ29udGV4dCh0aGlzLmRhdGFMaXN0W3RoaXMua10uX2lkLHRoaXMpLnBhdXNlKCk7Ly/mmoLlgZzku6XlkI7nu6fnu63mkq3mlL5cblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHQvLyAtLS0tLS0tLS0tLS0tLS0gZW5kaW5nXG5cdFx0XHR9LFxuXHRcdFx0ZG91YmxlTGlrZSgpe1xuXHRcdFx0XHRpZih0aGlzLmRhdGFMaXN0W3RoaXMua10ubGlrZSA9PSBmYWxzZSl7XG5cdFx0XHRcdFx0dGhpcy5kYXRhTGlzdFt0aGlzLmtdLmxpa2VfbiArPSAxO1xuXHRcdFx0XHRcdHRoaXMuZGF0YUxpc3RbdGhpcy5rXS5saWtlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvKlxuXHRcdFx0XHTngrnotZ5cblx0XHRcdFx0Ki9cblx0XHRcdH0sXG5cdFx0XHR0b0NvbW1lbnQoaW5kZXgpe1xuXHRcdFx0XHRcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0dGl0bGU6ICfliqDovb3kuK0uLi4nLFxuXHRcdFx0XHRcdGljb246ICdub25lJyxcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2JvdHRvbScsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDMwMFxuXHRcdFx0XHR9KVxuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJ2aWRlb0lEXCIsdGhpcy5kYXRhTGlzdFtpbmRleF0uX2lkKTtcblx0XHRcdFx0dGhpcy4kcmVmcy5waW5nbHVuLm9wZW4oJ2JvdHRvbScpXG5cdFx0XHR9LFxuXHRcdFx0c2hhcmUoKXtcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0dGl0bGU6ICfliIbkuqsnLFxuXHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdHd4aDVWaWRlbygpe1xuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0dXJsOiAnLi4vd3hoNXByZXZpZXdWaWRlby93eGg1cHJldmlld1ZpZGVvJ1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdHByZXZpZXdWaWRlbygpe1xuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0dXJsOiAnLi4vcHJldmlld1ZpZGVvL3ByZXZpZXdWaWRlbydcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHR0b1R3b1ZpZGVvKCl7XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHR1cmw6ICcuLi9uZXdfaW5kZXgvbmV3X2luZGV4J1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdHRvbGlzdFZpZGVvKCl7XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHR1cmw6ICcuLi9udnVlU3dpcGVyL252dWVTd2lwZXInXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Y0xpa2Uoc3NzKXtcblx0XHRcdFx0dGhpcy5kYXRhTGlzdFt0aGlzLmtdLmxpa2UgPSAhdGhpcy5kYXRhTGlzdFt0aGlzLmtdLmxpa2Vcblx0XHRcdFx0Y29uc3QgdmlkZW8gPSB0aGlzLmRhdGFMaXN0W3RoaXMua107XG5cdFx0XHRcdHNzcz92aWRlby5saWtlX24gLT0gMTp2aWRlby5saWtlX24gKz0gMTtcblx0XHRcdFx0Lypcblx0XHRcdFx054K56LWeXG5cdFx0XHRcdCovXG5cdFx0XHR9LFxuXHRcdFx0bW92ZUhhbmRsZSgpe30sXG5cdFx0XHRjbG9zZVNjcm9sbHZpZXcoKXtcblx0XHRcdFx0Ly8g54K55Ye76K+E6K666YeM6Z2i55qE5Y+J5Y+J77yM5bCx5Lya5YWz6Zet6K+E6K66XG5cdFx0XHRcdHRoaXMuJHJlZnMucGluZ2x1bi5jbG9zZSgpO1xuXHRcdFx0fSxcblx0XHRcdG9uVGFiSXRlbVRhcHMoKSB7XG5cdFx0XHQgICAgLy8gI2lmZGVmIEFQUC1QTFVTXG5cdFx0XHQgICAgaWYgKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09IFwiaW9zXCIpIHtcblx0XHRcdCAgICAgICAgbGV0IFVJSW1wYWN0RmVlZGJhY2tHZW5lcmF0b3IgPSBwbHVzLmlvcy5pbXBvcnRDbGFzcygnVUlJbXBhY3RGZWVkYmFja0dlbmVyYXRvcicpO1xuXHRcdFx0ICAgICAgICBsZXQgaW1wYWN0ID0gbmV3IFVJSW1wYWN0RmVlZGJhY2tHZW5lcmF0b3IoKTtcblx0XHRcdCAgICAgICAgaW1wYWN0LnByZXBhcmUoKTtcblx0XHRcdCAgICAgICAgaW1wYWN0LmluaXQoMSk7XG5cdFx0XHQgICAgICAgIGltcGFjdC5pbXBhY3RPY2N1cnJlZCgpO1xuXHRcdFx0ICAgIH1cblx0XHRcdCAgICBpZiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gXCJhbmRyb2lkXCIpIHtcblx0XHRcdCAgICAgICAgdW5pLnZpYnJhdGVTaG9ydCh7XG5cdFx0XHQgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHQgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eCueWHu+mch+WKqCcpO1xuXHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0ICAgICAgICB9KTtcblx0XHRcdCAgICB9XG5cdFx0XHQgICAgLy8gI2VuZGlmXG5cdFx0XHR9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbjxzdHlsZT5cblx0LmNvbnRhaW5lciB7YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDt9XG4gICAgLml0ZW0ge1xuXHRcdC8qIHdpZHRoIDogNzUwcnB4OyAqL1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR9XG5cdC52aWRlb0hvdmVye1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHRmbGV4OiAxO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFxuXHRcdC8qIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuXHRcdGJvcmRlci1jb2xvcjogI0RENTI0RDtcblx0XHRib3JkZXItd2lkdGg6IDFweDsgKi9cblx0fVxuXHQucGxheVN0YXRle1xuXHRcdHdpZHRoOiAgMTYwcnB4O1xuXHRcdGhlaWdodDogMTYwcnB4O1xuXHRcdG9wYWNpdHk6IDAuMjtcblx0fVxuXHQudXNlckluZm97XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJvdHRvbToxMTBweDtcblx0XHRyaWdodDogMTBweDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFxuXHR9XG5cdC51c2VyQXZhdGFye1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwMCU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRcdGJvcmRlci13aWR0aDogMnB4O1xuXHRcdGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcblx0fVxuXHQudXNlckF2YXRhcntcblx0XHR3aWR0aCA6IDEwMHJweDtcblx0XHRoZWlnaHQ6IDEwMHJweDtcblx0fVxuXHQubGlrZUljbywuc2hhcmVJY28sLmNvbW1lbnRJY297XG5cdFx0d2lkdGggOiA2MHJweDtcblx0XHRoZWlnaHQ6IDYwcnB4O1xuXHRcdG1hcmdpbi10b3A6IDE1cHg7XG5cdH1cblx0Lmxpa2VOdW0sLmNvbW1lbnROdW0sLnNoYXJlVGV4e1xuXHRcdGNvbG9yOiAjZmZmZmZmO1xuXHRcdGZvbnQtc2l6ZTogMzBycHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdG1hcmdpbjogNXB4O1xuXHR9XG5cdC5saWtlTnVtQWN0aXZle1xuXHRcdGNvbG9yOiByZWQ7XG5cdH1cblx0LmNvbnRlbnR7XG5cdCAgd2lkdGg6IDcyMHJweDtcblx0ICB6LWluZGV4OiA5OTtcblx0ICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgYm90dG9tOiAzMHB4O1xuXHQgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuXHQgIHBhZGRpbmc6IDE1cnB4O1xuXHQgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdCAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHQgIGNvbG9yOiAjZmZmZmZmO1xuXHR9XG5cdC51c2VyTmFtZSB7XG5cdCAgZm9udC1zaXplOiAzMHJweDtcblx0ICBjb2xvcjogI2ZmZmZmZjtcblx0ICBtYXJnaW4tdG9wOiA4MHVweDtcblx0fVxuXHQud29yZHMge1xuXHQgIG1hcmdpbi10b3A6IDEwcnB4O1xuXHQgIGZvbnQtc2l6ZTogMzBycHg7XG5cdCAgY29sb3I6ICNmZmZmZmY7XG5cdH1cblx0LnJvb3R7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcblx0fVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/谭福华/Desktop/HousePaint/pages/navigation/ShouYe/video/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 40);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 40 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/谭福华/Desktop/HousePaint/pages/navigation/ShouYe/video/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "": {
      "backgroundColor": [
        "#000000",
        0,
        0,
        0
      ]
    }
  },
  ".item": {
    "": {
      "backgroundColor": [
        "#000000",
        0,
        0,
        1
      ],
      "position": [
        "relative",
        0,
        0,
        1
      ]
    }
  },
  ".videoHover": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        2
      ],
      "top": [
        0,
        0,
        0,
        2
      ],
      "left": [
        0,
        0,
        0,
        2
      ],
      "flex": [
        1,
        0,
        0,
        2
      ],
      "backgroundColor": [
        "rgba(0,0,0,0.1)",
        0,
        0,
        2
      ],
      "justifyContent": [
        "center",
        0,
        0,
        2
      ],
      "alignItems": [
        "center",
        0,
        0,
        2
      ]
    }
  },
  ".playState": {
    "": {
      "width": [
        "160rpx",
        0,
        0,
        3
      ],
      "height": [
        "160rpx",
        0,
        0,
        3
      ],
      "opacity": [
        0.2,
        0,
        0,
        3
      ]
    }
  },
  ".userInfo": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        4
      ],
      "bottom": [
        "110",
        0,
        0,
        4
      ],
      "right": [
        "10",
        0,
        0,
        4
      ],
      "flexDirection": [
        "column",
        0,
        0,
        4
      ]
    }
  },
  ".userAvatar": {
    "": {
      "borderRadius": [
        500,
        0,
        0,
        5
      ],
      "marginBottom": [
        "15",
        0,
        0,
        5
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        5
      ],
      "borderWidth": [
        "2",
        0,
        0,
        5
      ],
      "borderColor": [
        "#ffffff",
        0,
        0,
        5
      ],
      "width": [
        "100rpx",
        0,
        0,
        6
      ],
      "height": [
        "100rpx",
        0,
        0,
        6
      ]
    }
  },
  ".likeIco": {
    "": {
      "width": [
        "60rpx",
        0,
        0,
        7
      ],
      "height": [
        "60rpx",
        0,
        0,
        7
      ],
      "marginTop": [
        "15",
        0,
        0,
        7
      ]
    }
  },
  ".shareIco": {
    "": {
      "width": [
        "60rpx",
        0,
        0,
        7
      ],
      "height": [
        "60rpx",
        0,
        0,
        7
      ],
      "marginTop": [
        "15",
        0,
        0,
        7
      ]
    }
  },
  ".commentIco": {
    "": {
      "width": [
        "60rpx",
        0,
        0,
        7
      ],
      "height": [
        "60rpx",
        0,
        0,
        7
      ],
      "marginTop": [
        "15",
        0,
        0,
        7
      ]
    }
  },
  ".likeNum": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        8
      ],
      "fontSize": [
        "30rpx",
        0,
        0,
        8
      ],
      "textAlign": [
        "center",
        0,
        0,
        8
      ],
      "marginTop": [
        "5",
        0,
        0,
        8
      ],
      "marginRight": [
        "5",
        0,
        0,
        8
      ],
      "marginBottom": [
        "5",
        0,
        0,
        8
      ],
      "marginLeft": [
        "5",
        0,
        0,
        8
      ]
    }
  },
  ".commentNum": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        8
      ],
      "fontSize": [
        "30rpx",
        0,
        0,
        8
      ],
      "textAlign": [
        "center",
        0,
        0,
        8
      ],
      "marginTop": [
        "5",
        0,
        0,
        8
      ],
      "marginRight": [
        "5",
        0,
        0,
        8
      ],
      "marginBottom": [
        "5",
        0,
        0,
        8
      ],
      "marginLeft": [
        "5",
        0,
        0,
        8
      ]
    }
  },
  ".shareTex": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        8
      ],
      "fontSize": [
        "30rpx",
        0,
        0,
        8
      ],
      "textAlign": [
        "center",
        0,
        0,
        8
      ],
      "marginTop": [
        "5",
        0,
        0,
        8
      ],
      "marginRight": [
        "5",
        0,
        0,
        8
      ],
      "marginBottom": [
        "5",
        0,
        0,
        8
      ],
      "marginLeft": [
        "5",
        0,
        0,
        8
      ]
    }
  },
  ".likeNumActive": {
    "": {
      "color": [
        "#FF0000",
        0,
        0,
        9
      ]
    }
  },
  ".content": {
    "": {
      "width": [
        "720rpx",
        0,
        0,
        10
      ],
      "zIndex": [
        99,
        0,
        0,
        10
      ],
      "position": [
        "absolute",
        0,
        0,
        10
      ],
      "bottom": [
        "30",
        0,
        0,
        10
      ],
      "paddingTop": [
        "15rpx",
        0,
        0,
        10
      ],
      "paddingRight": [
        "15rpx",
        0,
        0,
        10
      ],
      "paddingBottom": [
        "15rpx",
        0,
        0,
        10
      ],
      "paddingLeft": [
        "15rpx",
        0,
        0,
        10
      ],
      "flexDirection": [
        "column",
        0,
        0,
        10
      ],
      "justifyContent": [
        "flex-start",
        0,
        0,
        10
      ],
      "color": [
        "#ffffff",
        0,
        0,
        10
      ]
    }
  },
  ".userName": {
    "": {
      "fontSize": [
        "30rpx",
        0,
        0,
        11
      ],
      "color": [
        "#ffffff",
        0,
        0,
        11
      ],
      "marginTop": [
        "80upx",
        0,
        0,
        11
      ]
    }
  },
  ".words": {
    "": {
      "marginTop": [
        "10rpx",
        0,
        0,
        12
      ],
      "fontSize": [
        "30rpx",
        0,
        0,
        12
      ],
      "color": [
        "#ffffff",
        0,
        0,
        12
      ]
    }
  },
  ".root": {
    "": {
      "backgroundColor": [
        "#000000",
        0,
        0,
        13
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);