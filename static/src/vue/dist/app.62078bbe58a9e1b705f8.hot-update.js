webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_jorge_Desktop_portfolio_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url.js */ \"./node_modules/core-js/modules/web.url.js\");\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ \"./node_modules/core-js/modules/web.url-search-params.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_SideBar_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SideBar.vue */ \"./src/components/SideBar.vue\");\n/* harmony import */ var _components_EntrySection_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/EntrySection.vue */ \"./src/components/EntrySection.vue\");\n/* harmony import */ var _mixins_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mixins/toggle */ \"./src/mixins/toggle.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_ProjectSection_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ProjectSection.vue */ \"./src/components/ProjectSection.vue\");\n\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"App\",\n  mixins: [_mixins_toggle__WEBPACK_IMPORTED_MODULE_10__[\"default\"]],\n  components: {\n    SideBar: _components_SideBar_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    EntrySection: _components_EntrySection_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    ProjectSection: _components_ProjectSection_vue__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n  },\n  data: function data() {\n    return {\n      data: \"\",\n      projects: []\n    };\n  },\n  head: {\n    title: function title() {\n      return {\n        inner: \"Jorge da Silva - Web Developer\"\n      };\n    }\n  },\n  created: function created() {\n    this.getSiteSettings();\n    this.getProjects();\n  },\n  mounted: function mounted() {\n    this.createWackStyle();\n  },\n  methods: {\n    createWackStyle: function createWackStyle() {\n      var el = jquery__WEBPACK_IMPORTED_MODULE_11___default()(\".wack-style\");\n\n      for (var x = 0; x < el.length; x++) {\n        var e = el[x];\n        console.log(e);\n        var content = e.data('content');\n\n        for (var i = 0; i < content.length; i++) {\n          var letter = content[i];\n          var spanEl = document.createElement(\"span\");\n          var cssClass = \"weh\";\n          spanEl.append(letter);\n          spanEl.className = cssClass;\n          e.append(spanEl);\n        }\n      } // console.log(el.html());\n\n    },\n    getProjects: function getProjects() {\n      var _this = this;\n\n      return Object(C_Users_jorge_Desktop_portfolio_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var api_url;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                api_url = new URL(location.href).href;\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"\".concat(api_url, \"api/projects\")).then(function (response) {\n                  _this.projects = response.data;\n                  console.log(_this.projects);\n                });\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    getSiteSettings: function getSiteSettings() {\n      var _this2 = this;\n\n      return Object(C_Users_jorge_Desktop_portfolio_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var api_url;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                api_url = new URL(location.href).href;\n                _context2.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"\".concat(api_url, \"api/settings\")).then(function (response) {\n                  _this2.data = response.data[0];\n                });\n\n              case 3:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    openMenu: function openMenu() {\n      this.toggle(jquery__WEBPACK_IMPORTED_MODULE_11___default()(\".menu-main\"), \"active\", \"down\");\n      this.toggle(jquery__WEBPACK_IMPORTED_MODULE_11___default()(\".menu\"), \"active\", \"down\");\n      this.toggle(jquery__WEBPACK_IMPORTED_MODULE_11___default()(\".transition-div-1\"), \"transition-1\", \"transition-1-out\");\n      this.toggle(jquery__WEBPACK_IMPORTED_MODULE_11___default()(\".transition-div-2\"), \"transition-2\", \"transition-2-out\");\n      this.toggle(jquery__WEBPACK_IMPORTED_MODULE_11___default()(\".transition-div-3\"), \"transition-3\", \"transition-3-out\");\n    }\n  },\n  computed: {\n    cssVars: function cssVars() {\n      return {\n        \"--bg-color\": this.data.color,\n        \"--font-color\": this.data.font_color\n      };\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0FwcC52dWU/MjM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm1haW5cIiA6c3R5bGU9XCJjc3NWYXJzXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwibWVudS1idXR0b25cIiB2LW9uOmNsaWNrPVwib3Blbk1lbnVcIj5tZW51PC9idXR0b24+XHJcblxyXG4gICAgPFNpZGVCYXIgLz5cclxuICAgIDxFbnRyeVNlY3Rpb24gLz5cclxuICAgIDxQcm9qZWN0U2VjdGlvbiA6cHJvamVjdHM9XCJ0aGlzLnByb2plY3RzXCIgLz5cclxuICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDEwMHZoXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuL2NvbXBvbmVudHMvU2lkZUJhci52dWVcIjtcclxuaW1wb3J0IEVudHJ5U2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0VudHJ5U2VjdGlvbi52dWVcIjtcclxuaW1wb3J0IHRvZ2dsZSBmcm9tIFwiLi9taXhpbnMvdG9nZ2xlXCI7XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IFByb2plY3RTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvUHJvamVjdFNlY3Rpb24udnVlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJBcHBcIixcclxuICBtaXhpbnM6IFt0b2dnbGVdLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFNpZGVCYXIsXHJcbiAgICBFbnRyeVNlY3Rpb24sXHJcbiAgICBQcm9qZWN0U2VjdGlvbixcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBcIlwiLFxyXG4gICAgICBwcm9qZWN0czogW10sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgaGVhZDoge1xyXG4gICAgdGl0bGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpbm5lcjogXCJKb3JnZSBkYSBTaWx2YSAtIFdlYiBEZXZlbG9wZXJcIixcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5nZXRTaXRlU2V0dGluZ3MoKTtcclxuICAgIHRoaXMuZ2V0UHJvamVjdHMoKTtcclxuICB9LFxyXG4gIG1vdW50ZWQoKXtcclxuICAgIHRoaXMuY3JlYXRlV2Fja1N0eWxlKCk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBjcmVhdGVXYWNrU3R5bGUoKSB7XHJcbiAgICAgIGxldCBlbCA9ICQoXCIud2Fjay1zdHlsZVwiKTtcclxuXHJcbiAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgZWwubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICBsZXQgZSA9IGVsW3hdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBlLmRhdGEoJ2NvbnRlbnQnKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGxldCBsZXR0ZXIgPSBjb250ZW50W2ldO1xyXG4gICAgICAgICAgbGV0IHNwYW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic3BhblwiIClcclxuICAgICAgICAgIGxldCBjc3NDbGFzcyA9IFwid2VoXCI7XHJcbiAgICAgICAgICBzcGFuRWwuYXBwZW5kKGxldHRlcilcclxuICAgICAgICAgIHNwYW5FbC5jbGFzc05hbWUgPSBjc3NDbGFzc1xyXG4gICAgICAgICAgZS5hcHBlbmQoc3BhbkVsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gY29uc29sZS5sb2coZWwuaHRtbCgpKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBnZXRQcm9qZWN0cygpIHtcclxuICAgICAgY29uc3QgYXBpX3VybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZikuaHJlZjtcclxuICAgICAgYXdhaXQgYXhpb3MuZ2V0KGAke2FwaV91cmx9YXBpL3Byb2plY3RzYCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2plY3RzKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZ2V0U2l0ZVNldHRpbmdzKCkge1xyXG4gICAgICBjb25zdCBhcGlfdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKS5ocmVmO1xyXG4gICAgICBhd2FpdCBheGlvcy5nZXQoYCR7YXBpX3VybH1hcGkvc2V0dGluZ3NgKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlLmRhdGFbMF07XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9wZW5NZW51KCkge1xyXG4gICAgICB0aGlzLnRvZ2dsZSgkKFwiLm1lbnUtbWFpblwiKSwgXCJhY3RpdmVcIiwgXCJkb3duXCIpO1xyXG4gICAgICB0aGlzLnRvZ2dsZSgkKFwiLm1lbnVcIiksIFwiYWN0aXZlXCIsIFwiZG93blwiKTtcclxuICAgICAgdGhpcy50b2dnbGUoJChcIi50cmFuc2l0aW9uLWRpdi0xXCIpLCBcInRyYW5zaXRpb24tMVwiLCBcInRyYW5zaXRpb24tMS1vdXRcIik7XHJcbiAgICAgIHRoaXMudG9nZ2xlKCQoXCIudHJhbnNpdGlvbi1kaXYtMlwiKSwgXCJ0cmFuc2l0aW9uLTJcIiwgXCJ0cmFuc2l0aW9uLTItb3V0XCIpO1xyXG4gICAgICB0aGlzLnRvZ2dsZSgkKFwiLnRyYW5zaXRpb24tZGl2LTNcIiksIFwidHJhbnNpdGlvbi0zXCIsIFwidHJhbnNpdGlvbi0zLW91dFwiKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgY3NzVmFycygpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBcIi0tYmctY29sb3JcIjogdGhpcy5kYXRhLmNvbG9yLFxyXG4gICAgICAgIFwiLS1mb250LWNvbG9yXCI6IHRoaXMuZGF0YS5mb250X2NvbG9yLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4jYXBwIHtcclxuICAvLyBmb250LWZhbWlseTogT3BlbiBTYW5zLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG59XHJcblxyXG4uei1pbmRleCB7XHJcbiAgJi0wIHtcclxuICAgIHotaW5kZXg6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgJi0xIHtcclxuICAgIHotaW5kZXg6IDEgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1heC13aWR0aDogMTAwdnc7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4ubWVudS1idXR0b24ge1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIHRvcDogMTVweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTU7XHJcbn1cclxuXHJcbiNjYW52YXMge1xyXG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyB3aWR0aDogMTAwJTtcclxufVxyXG48L3N0eWxlPlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0Q0E7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQXBFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

})