webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_jorge_Desktop_portfolio_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url.js */ \"./node_modules/core-js/modules/web.url.js\");\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ \"./node_modules/core-js/modules/web.url-search-params.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_SideBar_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SideBar.vue */ \"./src/components/SideBar.vue\");\n/* harmony import */ var _mixins_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mixins/toggle */ \"./src/mixins/toggle.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  mixins: [_mixins_toggle__WEBPACK_IMPORTED_MODULE_9__[\"default\"]],\n  components: {\n    SideBar: _components_SideBar_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n  },\n  data: function data() {\n    return {\n      data: \"\",\n      projects: []\n    };\n  },\n  head: {\n    title: function title() {\n      return {\n        inner: 'Jorge da Silva - Web Developer'\n      };\n    }\n  },\n  created: function created() {// this.getSiteSettings()\n    // this.getProjects()\n  },\n  methods: {\n    getSiteSettings: function getSiteSettings() {\n      var _this = this;\n\n      return Object(C_Users_jorge_Desktop_portfolio_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var api_url;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                api_url = new URL(location.href).href;\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"\".concat(api_url, \"api/settings\")).then(function (response) {\n                  _this.data = response.data[0];\n                });\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    openMenu: function openMenu() {\n      this.toggle(jquery__WEBPACK_IMPORTED_MODULE_10___default()(\".menu-main\"), \"active\", \"down\");\n      this.toggle(jquery__WEBPACK_IMPORTED_MODULE_10___default()(\".menu\"), \"active\", \"down\");\n      this.toggle(jquery__WEBPACK_IMPORTED_MODULE_10___default()(\".transition-div-1\"), \"transition-1\", \"transition-1-out\");\n      this.toggle(jquery__WEBPACK_IMPORTED_MODULE_10___default()(\".transition-div-2\"), \"transition-2\", \"transition-2-out\");\n      this.toggle(jquery__WEBPACK_IMPORTED_MODULE_10___default()(\".transition-div-3\"), \"transition-3\", \"transition-3-out\");\n      this.toggle(jquery__WEBPACK_IMPORTED_MODULE_10___default()(\"#canvas\"), \"z-index-0\", \"z-index-0\");\n    } // async getProjects() {\n    //   const api_url = new URL(location.href).href\n    //   await axios.get(`${api_url}api/projects`).then(response => {\n    //     this.projects = response.data\n    //   })\n    // }\n\n  },\n  computed: {\n    cssVars: function cssVars() {\n      return {\n        '--bg-color': this.data.color,\n        '--font-color': this.data.font_color\n      };\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0FwcC52dWU/MjM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm1haW5cIiA6c3R5bGU9XCJjc3NWYXJzXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwibWVudS1idXR0b25cIiB2LW9uOmNsaWNrPVwib3Blbk1lbnVcIiA+bWVudTwvYnV0dG9uPlxyXG4gICAgXHJcbiAgICA8U2lkZUJhciAvPlxyXG4gICAgPGNhbnZhcyBpZD1cImNhbnZhc1wiIHdpZHRoPVwiMTAwdndcIiBoZWlnaHQ9XCIxMDB2aFwiPjwvY2FudmFzPlxyXG4gICAgPGRpdj5laDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuL2NvbXBvbmVudHMvU2lkZUJhci52dWUnXHJcbmltcG9ydCB0b2dnbGUgZnJvbSAnLi9taXhpbnMvdG9nZ2xlJ1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnQXBwJyxcclxuICAgIG1peGluczogW3RvZ2dsZV0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIFNpZGVCYXJcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGRhdGE6IFwiXCIsXHJcbiAgICAgICAgcHJvamVjdHM6IFtdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoZWFkOiB7XHJcbiAgICAgIHRpdGxlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaW5uZXI6ICdKb3JnZSBkYSBTaWx2YSAtIFdlYiBEZXZlbG9wZXInXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgLy8gdGhpcy5nZXRTaXRlU2V0dGluZ3MoKVxyXG4gICAgICAvLyB0aGlzLmdldFByb2plY3RzKClcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGFzeW5jIGdldFNpdGVTZXR0aW5ncygpIHtcclxuICAgICAgICBjb25zdCBhcGlfdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKS5ocmVmXHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGAke2FwaV91cmx9YXBpL3NldHRpbmdzYCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhWzBdXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgb3Blbk1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGUoJChcIi5tZW51LW1haW5cIiksIFwiYWN0aXZlXCIsIFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZSgkKFwiLm1lbnVcIiksIFwiYWN0aXZlXCIsIFwiZG93blwiKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZSgkKFwiLnRyYW5zaXRpb24tZGl2LTFcIiksIFwidHJhbnNpdGlvbi0xXCIsIFwidHJhbnNpdGlvbi0xLW91dFwiKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZSgkKFwiLnRyYW5zaXRpb24tZGl2LTJcIiksIFwidHJhbnNpdGlvbi0yXCIsIFwidHJhbnNpdGlvbi0yLW91dFwiKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZSgkKFwiLnRyYW5zaXRpb24tZGl2LTNcIiksIFwidHJhbnNpdGlvbi0zXCIsIFwidHJhbnNpdGlvbi0zLW91dFwiKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZSgkKFwiI2NhbnZhc1wiKSwgXCJ6LWluZGV4LTBcIiwgXCJ6LWluZGV4LTBcIik7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIGFzeW5jIGdldFByb2plY3RzKCkge1xyXG4gICAgICAvLyAgIGNvbnN0IGFwaV91cmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpLmhyZWZcclxuICAgICAgLy8gICBhd2FpdCBheGlvcy5nZXQoYCR7YXBpX3VybH1hcGkvcHJvamVjdHNgKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgLy8gICAgIHRoaXMucHJvamVjdHMgPSByZXNwb25zZS5kYXRhXHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIGNzc1ZhcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICctLWJnLWNvbG9yJzogdGhpcy5kYXRhLmNvbG9yLFxyXG4gICAgICAgICAgJy0tZm9udC1jb2xvcic6IHRoaXMuZGF0YS5mb250X2NvbG9yXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuI2FwcCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzJjM2U1MDtcclxufVxyXG5cclxuLnotaW5kZXgge1xyXG4gICYtMCB7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gIH1cclxuICAmLTEge1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1heC13aWR0aDogMTAwdnc7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4ubWVudS1idXR0b24ge1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIHRvcDogMTVweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTU7XHJcbn1cclxuXHJcblxyXG4jY2FudmFzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQTdDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

})