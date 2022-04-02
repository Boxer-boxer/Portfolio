webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectSection.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_jorge_Desktop_portfolio_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url.js */ \"./node_modules/core-js/modules/web.url.js\");\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ \"./node_modules/core-js/modules/web.url-search-params.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ProjectPopup_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProjectPopup.vue */ \"./src/components/ProjectPopup.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProjectSection',\n  components: {\n    ProjectPopup: _ProjectPopup_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  },\n  props: {\n    projects: {\n      type: Array,\n      default: function _default() {\n        return [];\n      }\n    }\n  },\n  data: function data() {\n    return {\n      selectedProject: {},\n      dblock: false,\n      dnone: true\n    };\n  },\n  methods: {\n    getSiteSettings: function getSiteSettings() {\n      var _this = this;\n\n      return Object(C_Users_jorge_Desktop_portfolio_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var api_url;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                api_url = new URL(location.href).href;\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(\"\".concat(api_url, \"api/settings\")).then(function (response) {\n                  _this.data = response.data[0];\n                  console.log(_this.data);\n                });\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    showProject: function showProject(project) {\n      this.dblock = true;\n      this.dnone = false;\n      this.selectedProject = project;\n    },\n    closePopup: function closePopup() {\n      this.dblock = false;\n      this.dnone = true;\n    }\n  },\n  created: function created() {\n    this.getSiteSettings();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUHJvamVjdFNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Qcm9qZWN0U2VjdGlvbi52dWU/MDhkNyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInByb2plY3Qtc2VjdGlvbiBweC01IHB4LWxnLTUgcHktNCBteC0wXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtZm9yPVwicHJvamVjdCBpbiBwcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cInByb2plY3QuaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIDppZD1cImBwcm9qZWN0LSR7cHJvamVjdC5pZH1gXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbC1sZy0yIHBsLWxnLTEgY29sLW1kLTYgY29sLTEyIG1iLTQgcHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmRhdGEtdGFyZ2V0PVwiYCNNb2RhbFByb2plY3Qke3Byb2plY3QuaWR9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1vbjpjbGljaz1cInNob3dQcm9qZWN0KHByb2plY3QpXCI+XHJcbiAgICAgICAgICAgIDxpbWcgOnNyYz1cInByb2plY3QuaW1hZ2VzWzBdLmltYWdlXCIgOmFsdD1cImAke3Byb2plY3QubmFtZX0gLSAke3Byb2plY3Quc3VidGl0bGV9YFwiIGNsYXNzPVwicHJvamVjdC10aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwcm9qZWN0LW5hbWUgbXQtNFwiPnt7cHJvamVjdC5wcm9qZWN0X25hbWV9fTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3Qtc3VidGl0bGUgbXQtMlwiPnt7cHJvamVjdC5wcm9qZWN0X3N1YnRpdGxlfX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPGRpdiByZWY9XCJjdXN0b21Qb3B1cFwiIDpjbGFzcz1cInsnZC1ibG9jayc6IGRibG9jaywgJ2Qtbm9uZScgOiBkbm9uZSwgJ3BvcHVwLWJnJzogJ3BvcHVwLWJnJ31cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1wb3B1cCBkLWZsZXggZmxleC1jb2x1bW4gY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtaGVhZCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtaGVhZC1jbG9zaW5nLWJ1dHRvbiBweS0yXCIgdi1vbjpjbGljaz1cImNsb3NlUG9wdXBcIj54PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPFByb2plY3RQb3B1cCA6c2VsZWN0ZWRQcm9qZWN0PVwic2VsZWN0ZWRQcm9qZWN0XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFByb2plY3RQb3B1cCBmcm9tICcuL1Byb2plY3RQb3B1cC52dWUnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnUHJvamVjdFNlY3Rpb24nLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgICAgUHJvamVjdFBvcHVwXHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgcHJvamVjdHM6IHtcclxuICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gWyBdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0OiB7fSxcclxuICAgICAgICBkYmxvY2s6IGZhbHNlLFxyXG4gICAgICAgIGRub25lOiB0cnVlXHJcbiAgICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGdldFNpdGVTZXR0aW5ncygpIHtcclxuICAgIGNvbnN0IGFwaV91cmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpLmhyZWZcclxuICAgIGF3YWl0IGF4aW9zLmdldChgJHthcGlfdXJsfWFwaS9zZXR0aW5nc2ApLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlLmRhdGFbMF1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpXHJcbiAgICB9KVxyXG4gICAgfSxcclxuICAgIHNob3dQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLmRibG9jayA9IHRydWVcclxuICAgICAgICB0aGlzLmRub25lID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RcclxuICAgIH0sXHJcbiAgICBjbG9zZVBvcHVwKCl7XHJcbiAgICAgICAgdGhpcy5kYmxvY2sgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZG5vbmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuICBjcmVhdGVkKCl7XHJcbiAgICAgIHRoaXMuZ2V0U2l0ZVNldHRpbmdzKClcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JdGFsaWFuYSZmYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4ucHJvamVjdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5wcm9qZWN0LXRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvamVjdC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxufVxyXG5cclxuLnByb2plY3Qtc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvamVjdC10aHVtYm5haWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLnBvcHVwLWJnIHtcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MTliZlxyXG59XHJcblxyXG4uY3VzdG9tLXBvcHVwIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNjVweDtcclxuICAgIGJvdHRvbTogNDBweDtcclxuICAgIGxlZnQ6IDI0cHg7XHJcbiAgICByaWdodDogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHhcclxuICAgIH1cclxufVxyXG5cclxuLnBvcHVwLWhlYWQtY2xvc2luZy1idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFrQkE7QUFDQTtBQUNBO0FBeENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=script&lang=js&\n");

/***/ })

})