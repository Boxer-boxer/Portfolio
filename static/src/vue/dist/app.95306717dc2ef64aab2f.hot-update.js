webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_jorge_Desktop_portfolio_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url.js */ \"./node_modules/core-js/modules/web.url.js\");\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ \"./node_modules/core-js/modules/web.url-search-params.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_SideBar_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SideBar.vue */ \"./src/components/SideBar.vue\");\n/* harmony import */ var _components_EntrySection_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/EntrySection.vue */ \"./src/components/EntrySection.vue\");\n/* harmony import */ var _mixins_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mixins/toggle */ \"./src/mixins/toggle.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_ProjectSection_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ProjectSection.vue */ \"./src/components/ProjectSection.vue\");\n\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  mixins: [_mixins_toggle__WEBPACK_IMPORTED_MODULE_10__[\"default\"]],\n  components: {\n    SideBar: _components_SideBar_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    EntrySection: _components_EntrySection_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    ProjectSection: _components_ProjectSection_vue__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n  },\n  data: function data() {\n    return {\n      data: \"\",\n      projects: []\n    };\n  },\n  head: {\n    title: function title() {\n      return {\n        inner: 'Jorge da Silva - Web Developer'\n      };\n    }\n  },\n  created: function created() {\n    this.getSiteSettings();\n    this.getProjects();\n  },\n  methods: {\n    getProjects: function getProjects() {\n      var _this = this;\n\n      return Object(C_Users_jorge_Desktop_portfolio_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var api_url;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                api_url = new URL(location.href).href;\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"\".concat(api_url, \"api/projects\")).then(function (response) {\n                  _this.projects = response.data;\n                });\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    getSiteSettings: function getSiteSettings() {\n      var _this2 = this;\n\n      return Object(C_Users_jorge_Desktop_portfolio_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var api_url;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                api_url = new URL(location.href).href;\n                _context2.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"\".concat(api_url, \"api/settings\")).then(function (response) {\n                  _this2.data = response.data[0];\n                });\n\n              case 3:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    openMenu: function openMenu() {\n      this.toggle(jquery__WEBPACK_IMPORTED_MODULE_11___default()(\".menu-main\"), \"active\", \"down\");\n      this.toggle(jquery__WEBPACK_IMPORTED_MODULE_11___default()(\".menu\"), \"active\", \"down\");\n      this.toggle(jquery__WEBPACK_IMPORTED_MODULE_11___default()(\".transition-div-1\"), \"transition-1\", \"transition-1-out\");\n      this.toggle(jquery__WEBPACK_IMPORTED_MODULE_11___default()(\".transition-div-2\"), \"transition-2\", \"transition-2-out\");\n      this.toggle(jquery__WEBPACK_IMPORTED_MODULE_11___default()(\".transition-div-3\"), \"transition-3\", \"transition-3-out\");\n    } // async getProjects() {\n    //   const api_url = new URL(location.href).href\n    //   await axios.get(`${api_url}api/projects`).then(response => {\n    //     this.projects = response.data\n    //   })\n    // }\n\n  },\n  computed: {\n    cssVars: function cssVars() {\n      return {\n        '--bg-color': this.data.color,\n        '--font-color': this.data.font_color\n      };\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0FwcC52dWU/MjM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm1haW5cIiA6c3R5bGU9XCJjc3NWYXJzXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwibWVudS1idXR0b25cIiB2LW9uOmNsaWNrPVwib3Blbk1lbnVcIiA+bWVudTwvYnV0dG9uPlxyXG4gICAgXHJcbiAgICA8U2lkZUJhciAvPlxyXG4gICAgPEVudHJ5U2VjdGlvbiAvPlxyXG4gICAgPFByb2plY3RTZWN0aW9uIDpwcm9qZWN0cz1cInRoaXMucHJvamVjdHNcIiAvPlxyXG4gICAgPGRpdiBzdHlsZT1cImhlaWdodDogMTAwdmhcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi9jb21wb25lbnRzL1NpZGVCYXIudnVlJ1xyXG5pbXBvcnQgRW50cnlTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9FbnRyeVNlY3Rpb24udnVlJ1xyXG5pbXBvcnQgdG9nZ2xlIGZyb20gJy4vbWl4aW5zL3RvZ2dsZSdcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgUHJvamVjdFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RTZWN0aW9uLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdBcHAnLFxyXG4gICAgbWl4aW5zOiBbdG9nZ2xlXSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgU2lkZUJhcixcclxuICAgICAgRW50cnlTZWN0aW9uLFxyXG4gICAgICAgIFByb2plY3RTZWN0aW9uXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBkYXRhOiBcIlwiLFxyXG4gICAgICAgIHByb2plY3RzOiBbXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGVhZDoge1xyXG4gICAgICB0aXRsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlubmVyOiAnSm9yZ2UgZGEgU2lsdmEgLSBXZWIgRGV2ZWxvcGVyJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgIHRoaXMuZ2V0U2l0ZVNldHRpbmdzKClcclxuICAgICAgdGhpcy5nZXRQcm9qZWN0cygpXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBhc3luYyBnZXRQcm9qZWN0cygpIHtcclxuICAgICAgICBjb25zdCBhcGlfdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKS5ocmVmXHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGAke2FwaV91cmx9YXBpL3Byb2plY3RzYCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgZ2V0U2l0ZVNldHRpbmdzKCkge1xyXG4gICAgICAgIGNvbnN0IGFwaV91cmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpLmhyZWZcclxuICAgICAgICBhd2FpdCBheGlvcy5nZXQoYCR7YXBpX3VybH1hcGkvc2V0dGluZ3NgKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlLmRhdGFbMF1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBvcGVuTWVudSgpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZSgkKFwiLm1lbnUtbWFpblwiKSwgXCJhY3RpdmVcIiwgXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlKCQoXCIubWVudVwiKSwgXCJhY3RpdmVcIiwgXCJkb3duXCIpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlKCQoXCIudHJhbnNpdGlvbi1kaXYtMVwiKSwgXCJ0cmFuc2l0aW9uLTFcIiwgXCJ0cmFuc2l0aW9uLTEtb3V0XCIpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlKCQoXCIudHJhbnNpdGlvbi1kaXYtMlwiKSwgXCJ0cmFuc2l0aW9uLTJcIiwgXCJ0cmFuc2l0aW9uLTItb3V0XCIpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlKCQoXCIudHJhbnNpdGlvbi1kaXYtM1wiKSwgXCJ0cmFuc2l0aW9uLTNcIiwgXCJ0cmFuc2l0aW9uLTMtb3V0XCIpO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyBhc3luYyBnZXRQcm9qZWN0cygpIHtcclxuICAgICAgLy8gICBjb25zdCBhcGlfdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKS5ocmVmXHJcbiAgICAgIC8vICAgYXdhaXQgYXhpb3MuZ2V0KGAke2FwaV91cmx9YXBpL3Byb2plY3RzYCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIC8vICAgICB0aGlzLnByb2plY3RzID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICBjc3NWYXJzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAnLS1iZy1jb2xvcic6IHRoaXMuZGF0YS5jb2xvcixcclxuICAgICAgICAgICctLWZvbnQtY29sb3InOiB0aGlzLmRhdGEuZm9udF9jb2xvclxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiNhcHAge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbn1cclxuXHJcbi56LWluZGV4IHtcclxuICAmLTAge1xyXG4gICAgei1pbmRleDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLTEge1xyXG4gICAgei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tZW51LWJ1dHRvbiB7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxNTtcclxufVxyXG5cclxuXHJcbiNjYW52YXMge1xyXG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyB3aWR0aDogMTAwJTtcclxufVxyXG48L3N0eWxlPlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBcERBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

})