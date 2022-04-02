webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_jorge_Desktop_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url.js */ \"./node_modules/core-js/modules/web.url.js\");\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ \"./node_modules/core-js/modules/web.url-search-params.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_EntrySection_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/EntrySection.vue */ \"./src/components/EntrySection.vue\");\n/* harmony import */ var _components_ProjectSection_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ProjectSection.vue */ \"./src/components/ProjectSection.vue\");\n/* harmony import */ var _components_ContactSection_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ContactSection.vue */ \"./src/components/ContactSection.vue\");\n\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  components: {\n    EntrySection: _components_EntrySection_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    ProjectSection: _components_ProjectSection_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    ContactSection: _components_ContactSection_vue__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n  },\n  data: function data() {\n    return {\n      data: \"\",\n      projects: \"\"\n    };\n  },\n  created: function created() {\n    this.getSiteSettings();\n  },\n  methods: {\n    getSiteSettings: function getSiteSettings() {\n      var _this = this;\n\n      return Object(C_Users_jorge_Desktop_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var api_url;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                api_url = new URL(location.href).href;\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"\".concat(api_url, \"api/settings\")).then(function (response) {\n                  _this.data = response.data[0];\n                });\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    getProjects: function getProjects() {\n      var _this2 = this;\n\n      return Object(C_Users_jorge_Desktop_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var api_url;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                api_url = new URL(location.href).href;\n                _context2.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"\".concat(api_url, \"api/projects\")).then(function (response) {\n                  _this2.projects = response.data[0];\n                });\n\n              case 3:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    }\n  },\n  computed: {\n    cssVars: function cssVars() {\n      return {\n        '--bg-color': this.data.color,\n        '--font-color': this.data.font_color\n      };\n    },\n    entrySectionBackground: function entrySectionBackground() {\n      return {\n        \"image\": this.data.entry_section_background\n      };\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0FwcC52dWU/MjM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtYWluXCIgOnN0eWxlPVwiY3NzVmFyc1wiPlxuXG4gICAgPEVudHJ5U2VjdGlvbiA6YmFja2dyb3VuZD1cImVudHJ5U2VjdGlvbkJhY2tncm91bmRcIiAvPlxuICAgIDxQcm9qZWN0U2VjdGlvbiAvPlxuICAgIDxDb250YWN0U2VjdGlvbiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbiAgaW1wb3J0IEVudHJ5U2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvRW50cnlTZWN0aW9uLnZ1ZSdcbiAgaW1wb3J0IFByb2plY3RTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Qcm9qZWN0U2VjdGlvbi52dWUnXG4gIGltcG9ydCBDb250YWN0U2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24udnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0FwcCcsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgRW50cnlTZWN0aW9uLFxuICAgICAgUHJvamVjdFNlY3Rpb24sXG4gICAgICBDb250YWN0U2VjdGlvblxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IFwiXCIsXG4gICAgICAgIHByb2plY3RzOiBcIlwiXG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgdGhpcy5nZXRTaXRlU2V0dGluZ3MoKVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgYXN5bmMgZ2V0U2l0ZVNldHRpbmdzKCkge1xuICAgICAgICBjb25zdCBhcGlfdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKS5ocmVmXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldChgJHthcGlfdXJsfWFwaS9zZXR0aW5nc2ApLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlLmRhdGFbMF1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhc3luYyBnZXRQcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3QgYXBpX3VybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZikuaHJlZlxuICAgICAgICBhd2FpdCBheGlvcy5nZXQoYCR7YXBpX3VybH1hcGkvcHJvamVjdHNgKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICB0aGlzLnByb2plY3RzID0gcmVzcG9uc2UuZGF0YVswXVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGNzc1ZhcnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgJy0tYmctY29sb3InOiB0aGlzLmRhdGEuY29sb3IsXG4gICAgICAgICAgJy0tZm9udC1jb2xvcic6IHRoaXMuZGF0YS5mb250X2NvbG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlbnRyeVNlY3Rpb25CYWNrZ3JvdW5kKCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgXCJpbWFnZVwiIDogdGhpcy5kYXRhLmVudHJ5X3NlY3Rpb25fYmFja2dyb3VuZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuI2FwcCB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuLm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzZXJpZjtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuW2NsYXNzXj1tYXRlcmlhbC1dIHtcbiAgZm9udC1zaXplOjE0cHg7XG59XG5cbi5zci1vbmx5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGUtbGV0dGVycyB7XG4gIC8qIHdpZHRoOiAwIWltcG9ydGFudDsgKi9cbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xuICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBmb250LXNpemU6IDA7XG59XG5cbi5zaG93LWxldHRlcnMge1xuICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2shaW1wb3J0YW50OyAqL1xuICBvcGFjaXR5OiAxIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxZW07XG4gIC8qIHdpZHRoOiBhdXRvIWltcG9ydGFudDsgKi9cbiAgdHJhbnNpdGlvbjogMC41czsgXG59XG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFYQTtBQTlCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

})