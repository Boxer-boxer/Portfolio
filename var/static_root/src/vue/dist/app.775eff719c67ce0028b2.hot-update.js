webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_jorge_Desktop_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url.js */ \"./node_modules/core-js/modules/web.url.js\");\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ \"./node_modules/core-js/modules/web.url-search-params.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_EntrySection_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/EntrySection.vue */ \"./src/components/EntrySection.vue\");\n/* harmony import */ var _components_ProjectSection_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ProjectSection.vue */ \"./src/components/ProjectSection.vue\");\n/* harmony import */ var _components_ContactSection_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ContactSection.vue */ \"./src/components/ContactSection.vue\");\n\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  components: {\n    EntrySection: _components_EntrySection_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    ProjectSection: _components_ProjectSection_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    ContactSection: _components_ContactSection_vue__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n  },\n  data: function data() {\n    return {\n      data: \"\",\n      projects: []\n    };\n  },\n  created: function created() {\n    this.getSiteSettings();\n    this.getProjects();\n  },\n  methods: {\n    getSiteSettings: function getSiteSettings() {\n      var _this = this;\n\n      return Object(C_Users_jorge_Desktop_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var api_url;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                api_url = new URL(location.href).href;\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"\".concat(api_url, \"api/settings\")).then(function (response) {\n                  _this.data = response.data[0];\n                });\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    getProjects: function getProjects() {\n      var _this2 = this;\n\n      return Object(C_Users_jorge_Desktop_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var api_url;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                api_url = new URL(location.href).href;\n                _context2.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"\".concat(api_url, \"api/projects\")).then(function (response) {\n                  _this2.projects = response.data;\n                });\n\n              case 3:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    }\n  },\n  computed: {\n    cssVars: function cssVars() {\n      return {\n        '--bg-color': this.data.color,\n        '--font-color': this.data.font_color\n      };\n    },\n    entrySectionBackground: function entrySectionBackground() {\n      return {\n        \"image\": this.data.entry_section_background\n      };\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0FwcC52dWU/MjM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtYWluXCIgOnN0eWxlPVwiY3NzVmFyc1wiPlxuXG4gICAgPEVudHJ5U2VjdGlvbiA6YmFja2dyb3VuZD1cImVudHJ5U2VjdGlvbkJhY2tncm91bmRcIiAvPlxuICAgIDxQcm9qZWN0U2VjdGlvbiA6cHJvamVjdHM9XCJwcm9qZWN0c1wiIC8+XG4gICAgPENvbnRhY3RTZWN0aW9uIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuICBpbXBvcnQgRW50cnlTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9FbnRyeVNlY3Rpb24udnVlJ1xuICBpbXBvcnQgUHJvamVjdFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RTZWN0aW9uLnZ1ZSdcbiAgaW1wb3J0IENvbnRhY3RTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQXBwJyxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBFbnRyeVNlY3Rpb24sXG4gICAgICBQcm9qZWN0U2VjdGlvbixcbiAgICAgIENvbnRhY3RTZWN0aW9uXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogXCJcIixcbiAgICAgICAgcHJvamVjdHM6IFtdXG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgdGhpcy5nZXRTaXRlU2V0dGluZ3MoKVxuICAgICAgdGhpcy5nZXRQcm9qZWN0cygpXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBhc3luYyBnZXRTaXRlU2V0dGluZ3MoKSB7XG4gICAgICAgIGNvbnN0IGFwaV91cmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpLmhyZWZcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGAke2FwaV91cmx9YXBpL3NldHRpbmdzYCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YVswXVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGdldFByb2plY3RzKCkge1xuICAgICAgICBjb25zdCBhcGlfdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKS5ocmVmXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldChgJHthcGlfdXJsfWFwaS9wcm9qZWN0c2ApLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMucHJvamVjdHMgPSByZXNwb25zZS5kYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgY3NzVmFycygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAnLS1iZy1jb2xvcic6IHRoaXMuZGF0YS5jb2xvcixcbiAgICAgICAgICAnLS1mb250LWNvbG9yJzogdGhpcy5kYXRhLmZvbnRfY29sb3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVudHJ5U2VjdGlvbkJhY2tncm91bmQoKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBcImltYWdlXCIgOiB0aGlzLmRhdGEuZW50cnlfc2VjdGlvbl9iYWNrZ3JvdW5kXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4jYXBwIHtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyYzNlNTA7XG59XG4ubWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG4udGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNlcmlmO1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuXG5bY2xhc3NePW1hdGVyaWFsLV0ge1xuICBmb250LXNpemU6MTRweDtcbn1cblxuLnNyLW9ubHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZS1sZXR0ZXJzIHtcbiAgLyogd2lkdGg6IDAhaW1wb3J0YW50OyAqL1xuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGZvbnQtc2l6ZTogMDtcbn1cblxuLnNob3ctbGV0dGVycyB7XG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jayFpbXBvcnRhbnQ7ICovXG4gIG9wYWNpdHk6IDEhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFlbTtcbiAgLyogd2lkdGg6IGF1dG8haW1wb3J0YW50OyAqL1xuICB0cmFuc2l0aW9uOiAwLjVzOyBcbn1cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBWEE7QUEvQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

})