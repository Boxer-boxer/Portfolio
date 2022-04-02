webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectSection.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_jorge_Desktop_portfolio_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url.js */ \"./node_modules/core-js/modules/web.url.js\");\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ \"./node_modules/core-js/modules/web.url-search-params.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ProjectPopup_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProjectPopup.vue */ \"./src/components/ProjectPopup.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProjectSection',\n  components: {\n    ProjectPopup: _ProjectPopup_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  },\n  props: {// projects: {\n    //     type: Array,\n    //     default: function () {\n    //       return [ ]\n    //   }\n    // }\n  },\n  data: function data() {\n    return {\n      selectedProject: {},\n      dblock: false,\n      dnone: true\n    };\n  },\n  methods: {\n    getSiteSettings: function getSiteSettings() {\n      var _this = this;\n\n      return Object(C_Users_jorge_Desktop_portfolio_portfolio_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var api_url;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                api_url = new URL(location.href).href;\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(\"\".concat(api_url, \"api/projects\")).then(function (response) {\n                  _this.data.projects = response.data[0];\n                });\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    showProject: function showProject(project) {\n      this.dblock = true;\n      this.dnone = false;\n      this.selectedProject = project;\n    },\n    closePopup: function closePopup() {\n      this.dblock = false;\n      this.dnone = true;\n    }\n  },\n  created: function created() {\n    this.getSiteSettings();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUHJvamVjdFNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Qcm9qZWN0U2VjdGlvbi52dWU/MDhkNyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInByb2plY3Qtc2VjdGlvbiBweC01IHB4LWxnLTUgcHktNCBteC0wXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtZm9yPVwicHJvamVjdCBpbiBwcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cInByb2plY3QuaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIDppZD1cImBwcm9qZWN0LSR7cHJvamVjdC5pZH1gXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbC1sZy0yIHBsLWxnLTEgY29sLW1kLTYgY29sLTEyIG1iLTQgcHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmRhdGEtdGFyZ2V0PVwiYCNNb2RhbFByb2plY3Qke3Byb2plY3QuaWR9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1vbjpjbGljaz1cInNob3dQcm9qZWN0KHByb2plY3QpXCI+XHJcbiAgICAgICAgICAgIDxpbWcgOnNyYz1cInByb2plY3QuaW1hZ2VzWzBdLmltYWdlXCIgOmFsdD1cImAke3Byb2plY3QubmFtZX0gLSAke3Byb2plY3Quc3VidGl0bGV9YFwiIGNsYXNzPVwicHJvamVjdC10aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwcm9qZWN0LW5hbWUgbXQtNFwiPnt7cHJvamVjdC5wcm9qZWN0X25hbWV9fTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3Qtc3VidGl0bGUgbXQtMlwiPnt7cHJvamVjdC5wcm9qZWN0X3N1YnRpdGxlfX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPGRpdiByZWY9XCJjdXN0b21Qb3B1cFwiIDpjbGFzcz1cInsnZC1ibG9jayc6IGRibG9jaywgJ2Qtbm9uZScgOiBkbm9uZSwgJ3BvcHVwLWJnJzogJ3BvcHVwLWJnJ31cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1wb3B1cCBkLWZsZXggZmxleC1jb2x1bW4gY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtaGVhZCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtaGVhZC1jbG9zaW5nLWJ1dHRvbiBweS0yXCIgdi1vbjpjbGljaz1cImNsb3NlUG9wdXBcIj54PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPFByb2plY3RQb3B1cCA6c2VsZWN0ZWRQcm9qZWN0PVwic2VsZWN0ZWRQcm9qZWN0XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFByb2plY3RQb3B1cCBmcm9tICcuL1Byb2plY3RQb3B1cC52dWUnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnUHJvamVjdFNlY3Rpb24nLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgICAgUHJvamVjdFBvcHVwXHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgLy8gcHJvamVjdHM6IHtcclxuICAgIC8vICAgICB0eXBlOiBBcnJheSxcclxuICAgIC8vICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICByZXR1cm4gWyBdXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0OiB7fSxcclxuICAgICAgICBkYmxvY2s6IGZhbHNlLFxyXG4gICAgICAgIGRub25lOiB0cnVlXHJcbiAgICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGdldFNpdGVTZXR0aW5ncygpIHtcclxuICAgIGNvbnN0IGFwaV91cmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpLmhyZWZcclxuICAgIGF3YWl0IGF4aW9zLmdldChgJHthcGlfdXJsfWFwaS9wcm9qZWN0c2ApLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wcm9qZWN0cyA9IHJlc3BvbnNlLmRhdGFbMF1cclxuICAgIH0pXHJcbiAgICB9LFxyXG4gICAgc2hvd1Byb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMuZGJsb2NrID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuZG5vbmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdFxyXG4gICAgfSxcclxuICAgIGNsb3NlUG9wdXAoKXtcclxuICAgICAgICB0aGlzLmRibG9jayA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5kbm9uZSA9IHRydWVcclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZWQoKXtcclxuICAgICAgdGhpcy5nZXRTaXRlU2V0dGluZ3MoKVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUl0YWxpYW5hJmZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XHJcbi5wcm9qZWN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgLnByb2plY3QtdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvamVjdC1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRodW1ibmFpbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucG9wdXAtYmcge1xyXG4gICAgYmFja2dyb3VuZDogIzE5MTkxOWJmXHJcbn1cclxuXHJcbi5jdXN0b20tcG9wdXAge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA2NXB4O1xyXG4gICAgYm90dG9tOiA0MHB4O1xyXG4gICAgbGVmdDogMjRweDtcclxuICAgIHJpZ2h0OiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCl7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweFxyXG4gICAgfVxyXG59XHJcblxyXG4ucG9wdXAtaGVhZC1jbG9zaW5nLWJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBdkNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=script&lang=js&\n");

/***/ })

})