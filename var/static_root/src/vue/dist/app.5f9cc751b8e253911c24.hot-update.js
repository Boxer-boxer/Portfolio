webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_jorge_Desktop_portfolio_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url.js */ \"./node_modules/core-js/modules/web.url.js\");\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ \"./node_modules/core-js/modules/web.url-search-params.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_EntrySection_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/EntrySection.vue */ \"./src/components/EntrySection.vue\");\n/* harmony import */ var _components_ProjectSection_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ProjectSection.vue */ \"./src/components/ProjectSection.vue\");\n/* harmony import */ var _components_ProjectSection_vue__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_ProjectSection_vue__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  components: {\n    EntrySection: _components_EntrySection_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    ProjectSection: _components_ProjectSection_vue__WEBPACK_IMPORTED_MODULE_9___default.a\n  },\n  data: function data() {\n    return {\n      data: \"\"\n    };\n  },\n  created: function created() {\n    this.getSiteSettings();\n  },\n  methods: {\n    getSiteSettings: function getSiteSettings() {\n      var _this = this;\n\n      return Object(C_Users_jorge_Desktop_portfolio_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var api_url;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                api_url = new URL(location.href).href;\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"\".concat(api_url, \"api/settings\")).then(function (response) {\n                  _this.data = response.data[0];\n                  console.log(_this.data);\n                });\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    }\n  },\n  computed: {\n    cssVars: function cssVars() {\n      return {\n        '--bg-color': this.data.color,\n        '--font-color': this.data.font_color\n      };\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAudnVlPzNkZmQiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibWFpblwiIDpzdHlsZT1cImNzc1ZhcnNcIj5cblxuICAgIDxFbnRyeVNlY3Rpb24vPlxuICAgIDxQcm9qZWN0U2VjdGlvbi8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuICBpbXBvcnQgRW50cnlTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9FbnRyeVNlY3Rpb24udnVlJ1xuICBpbXBvcnQgUHJvamVjdFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RTZWN0aW9uLnZ1ZSdcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0FwcCcsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgRW50cnlTZWN0aW9uLFxuICAgICAgUHJvamVjdFNlY3Rpb25cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiBcIlwiLFxuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgIHRoaXMuZ2V0U2l0ZVNldHRpbmdzKClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGFzeW5jIGdldFNpdGVTZXR0aW5ncygpIHtcbiAgICAgICAgY29uc3QgYXBpX3VybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZikuaHJlZlxuICAgICAgICBhd2FpdCBheGlvcy5nZXQoYCR7YXBpX3VybH1hcGkvc2V0dGluZ3NgKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhWzBdXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGNzc1ZhcnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgJy0tYmctY29sb3InOiB0aGlzLmRhdGEuY29sb3IsXG4gICAgICAgICAgJy0tZm9udC1jb2xvcic6IHRoaXMuZGF0YS5mb250X2NvbG9yXG4gICAgICAgIH1cbiAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuI2FwcCB7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuLm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6ICdJdGFsaWFuYScsIHNlcmlmO1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUF2QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProjectSection.vue?vue&type=script&lang=js":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/projectPopup.vue?vue&type=script&lang=js":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/projectPopup.vue?vue&type=template&id=df3868ba&scoped=true":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProjectSection.vue?vue&type=style&index=0&id=96329488&scoped=true&lang=scss":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/projectPopup.vue?vue&type=style&index=0&id=df3868ba&scoped=true&lang=scss":
false,

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProjectSection.vue?vue&type=style&index=0&id=96329488&scoped=true&lang=scss":
false,

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/projectPopup.vue?vue&type=style&index=0&id=df3868ba&scoped=true&lang=scss":
false,

/***/ "./src/components/ProjectSection.vue":
/*!*******************************************!*\
  !*** ./src/components/ProjectSection.vue ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0U2VjdGlvbi52dWUuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProjectSection.vue\n");

/***/ }),

/***/ "./src/components/ProjectSection.vue?vue&type=script&lang=js":
false,

/***/ "./src/components/ProjectSection.vue?vue&type=style&index=0&id=96329488&scoped=true&lang=scss":
false,

/***/ "./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true":
false,

/***/ "./src/components/projectPopup.vue":
false,

/***/ "./src/components/projectPopup.vue?vue&type=script&lang=js":
false,

/***/ "./src/components/projectPopup.vue?vue&type=style&index=0&id=df3868ba&scoped=true&lang=scss":
false,

/***/ "./src/components/projectPopup.vue?vue&type=template&id=df3868ba&scoped=true":
false

})