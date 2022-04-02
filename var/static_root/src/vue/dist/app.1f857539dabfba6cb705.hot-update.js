webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_jorge_Desktop_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url.js */ \"./node_modules/core-js/modules/web.url.js\");\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ \"./node_modules/core-js/modules/web.url-search-params.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_EntrySection_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/EntrySection.vue */ \"./src/components/EntrySection.vue\");\n/* harmony import */ var _components_ProjectSection_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ProjectSection.vue */ \"./src/components/ProjectSection.vue\");\n/* harmony import */ var _components_ContactSection_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ContactSection.vue */ \"./src/components/ContactSection.vue\");\n\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  components: {\n    EntrySection: _components_EntrySection_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    ProjectSection: _components_ProjectSection_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    ContactSection: _components_ContactSection_vue__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n  },\n  data: function data() {\n    return {\n      data: \"\",\n      projects: []\n    };\n  },\n  head: {\n    title: {\n      inner: 'Timothy Badiuk - Architect'\n    },\n    meta: [{\n      name: 'application-name',\n      content: 'Timothy Badiuk\\'s Portfolio'\n    }, {\n      name: 'description',\n      content: 'A description of the page',\n      id: 'desc'\n    }, // id to replace intead of create element\n    // ...\n    // Twitter\n    {\n      name: 'twitter:title',\n      content: 'Content Title'\n    }, // with shorthand\n    {\n      n: 'twitter:description',\n      c: 'Content description less than 200 characters'\n    }, // ...\n    // Google+ / Schema.org\n    {\n      itemprop: 'name',\n      content: 'Content Title'\n    }, {\n      itemprop: 'description',\n      content: 'Content Title'\n    }, // ...\n    // Facebook / Open Graph\n    {\n      property: 'fb:app_id',\n      content: '123456789'\n    }, {\n      property: 'og:title',\n      content: 'Content Title'\n    }, // with shorthand\n    {\n      p: 'og:image',\n      c: 'https://example.com/image.jpg'\n    } // ...\n    ]\n  },\n  created: function created() {\n    this.getSiteSettings();\n    this.getProjects();\n  },\n  methods: {\n    getSiteSettings: function getSiteSettings() {\n      var _this = this;\n\n      return Object(C_Users_jorge_Desktop_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var api_url;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                api_url = new URL(location.href).href;\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"\".concat(api_url, \"api/settings\")).then(function (response) {\n                  _this.data = response.data[0];\n                });\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    getProjects: function getProjects() {\n      var _this2 = this;\n\n      return Object(C_Users_jorge_Desktop_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var api_url;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                api_url = new URL(location.href).href;\n                _context2.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"\".concat(api_url, \"api/projects\")).then(function (response) {\n                  _this2.projects = response.data;\n                });\n\n              case 3:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    }\n  },\n  computed: {\n    cssVars: function cssVars() {\n      return {\n        '--bg-color': this.data.color,\n        '--font-color': this.data.font_color\n      };\n    },\n    entrySectionBackground: function entrySectionBackground() {\n      return {\n        \"image\": this.data.entry_section_background\n      };\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0FwcC52dWU/MjM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm1haW5cIiA6c3R5bGU9XCJjc3NWYXJzXCI+XHJcblxyXG4gICAgPEVudHJ5U2VjdGlvbiA6YmFja2dyb3VuZD1cImVudHJ5U2VjdGlvbkJhY2tncm91bmRcIiAvPlxyXG4gICAgPFByb2plY3RTZWN0aW9uIDpwcm9qZWN0cz1cInByb2plY3RzXCIgLz5cclxuICAgIDxDb250YWN0U2VjdGlvbiAvPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbiAgaW1wb3J0IEVudHJ5U2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvRW50cnlTZWN0aW9uLnZ1ZSdcclxuICBpbXBvcnQgUHJvamVjdFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RTZWN0aW9uLnZ1ZSdcclxuICBpbXBvcnQgQ29udGFjdFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdBcHAnLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBFbnRyeVNlY3Rpb24sXHJcbiAgICAgIFByb2plY3RTZWN0aW9uLFxyXG4gICAgICBDb250YWN0U2VjdGlvblxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0YTogXCJcIixcclxuICAgICAgICBwcm9qZWN0czogW11cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhlYWQ6IHtcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBpbm5lcjogJ1RpbW90aHkgQmFkaXVrIC0gQXJjaGl0ZWN0J1xyXG4gICAgICB9LFxyXG4gICAgICBtZXRhOiBbXHJcbiAgICAgIHsgbmFtZTogJ2FwcGxpY2F0aW9uLW5hbWUnLCBjb250ZW50OiAnVGltb3RoeSBCYWRpdWtcXCdzIFBvcnRmb2xpbycgfSxcclxuICAgICAgeyBuYW1lOiAnZGVzY3JpcHRpb24nLCBjb250ZW50OiAnQSBkZXNjcmlwdGlvbiBvZiB0aGUgcGFnZScsIGlkOiAnZGVzYycgfSwgLy8gaWQgdG8gcmVwbGFjZSBpbnRlYWQgb2YgY3JlYXRlIGVsZW1lbnRcclxuICAgICAgLy8gLi4uXHJcbiAgICAgIC8vIFR3aXR0ZXJcclxuICAgICAgeyBuYW1lOiAndHdpdHRlcjp0aXRsZScsIGNvbnRlbnQ6ICdDb250ZW50IFRpdGxlJyB9LFxyXG4gICAgICAvLyB3aXRoIHNob3J0aGFuZFxyXG4gICAgICB7IG46ICd0d2l0dGVyOmRlc2NyaXB0aW9uJywgYzogJ0NvbnRlbnQgZGVzY3JpcHRpb24gbGVzcyB0aGFuIDIwMCBjaGFyYWN0ZXJzJ30sXHJcbiAgICAgIC8vIC4uLlxyXG4gICAgICAvLyBHb29nbGUrIC8gU2NoZW1hLm9yZ1xyXG4gICAgICB7IGl0ZW1wcm9wOiAnbmFtZScsIGNvbnRlbnQ6ICdDb250ZW50IFRpdGxlJyB9LFxyXG4gICAgICB7IGl0ZW1wcm9wOiAnZGVzY3JpcHRpb24nLCBjb250ZW50OiAnQ29udGVudCBUaXRsZScgfSxcclxuICAgICAgLy8gLi4uXHJcbiAgICAgIC8vIEZhY2Vib29rIC8gT3BlbiBHcmFwaFxyXG4gICAgICB7IHByb3BlcnR5OiAnZmI6YXBwX2lkJywgY29udGVudDogJzEyMzQ1Njc4OScgfSxcclxuICAgICAgeyBwcm9wZXJ0eTogJ29nOnRpdGxlJywgY29udGVudDogJ0NvbnRlbnQgVGl0bGUnIH0sXHJcbiAgICAgIC8vIHdpdGggc2hvcnRoYW5kXHJcbiAgICAgIHsgcDogJ29nOmltYWdlJywgYzogJ2h0dHBzOi8vZXhhbXBsZS5jb20vaW1hZ2UuanBnJyB9LFxyXG4gICAgICAvLyAuLi5cclxuICAgIF0sXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgdGhpcy5nZXRTaXRlU2V0dGluZ3MoKVxyXG4gICAgICB0aGlzLmdldFByb2plY3RzKClcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGFzeW5jIGdldFNpdGVTZXR0aW5ncygpIHtcclxuICAgICAgICBjb25zdCBhcGlfdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKS5ocmVmXHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGAke2FwaV91cmx9YXBpL3NldHRpbmdzYCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhWzBdXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgZ2V0UHJvamVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgYXBpX3VybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZikuaHJlZlxyXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldChgJHthcGlfdXJsfWFwaS9wcm9qZWN0c2ApLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgY3NzVmFycygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgJy0tYmctY29sb3InOiB0aGlzLmRhdGEuY29sb3IsXHJcbiAgICAgICAgICAnLS1mb250LWNvbG9yJzogdGhpcy5kYXRhLmZvbnRfY29sb3JcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVudHJ5U2VjdGlvbkJhY2tncm91bmQoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgXCJpbWFnZVwiIDogdGhpcy5kYXRhLmVudHJ5X3NlY3Rpb25fYmFja2dyb3VuZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiNhcHAge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbn1cclxuLm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuXHJcbi50ZXh0LWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNlcmlmO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbltjbGFzc149bWF0ZXJpYWwtXSB7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbn1cclxuXHJcbi5zci1vbmx5IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaGlkZS1sZXR0ZXJzIHtcclxuICAvKiB3aWR0aDogMCFpbXBvcnRhbnQ7ICovXHJcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBmb250LXNpemU6IDA7XHJcbn1cclxuXHJcbi5zaG93LWxldHRlcnMge1xyXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jayFpbXBvcnRhbnQ7ICovXHJcbiAgb3BhY2l0eTogMSFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgLyogd2lkdGg6IGF1dG8haW1wb3J0YW50OyAqL1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFqQkE7QUFKQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVhBO0FBeERBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

})