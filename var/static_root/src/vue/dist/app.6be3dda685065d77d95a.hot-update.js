webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectSection.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProjectPopup_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectPopup.vue */ \"./src/components/ProjectPopup.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProjectSection',\n  components: {\n    ProjectPopup: _ProjectPopup_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  props: {\n    projects: {\n      type: Array,\n      default: function _default() {\n        return [];\n      }\n    }\n  },\n  data: function data() {\n    return {\n      selectedProject: {},\n      dblock: false,\n      dnone: true // projects: []\n\n    };\n  },\n  methods: {\n    showProject: function showProject(project) {\n      this.dblock = true;\n      this.dnone = false;\n      this.selectedProject = project;\n    },\n    closePopup: function closePopup() {\n      this.dblock = false;\n      this.dnone = true;\n    }\n  } //   mounted(){\n  //   }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUHJvamVjdFNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Qcm9qZWN0U2VjdGlvbi52dWU/MDhkNyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInByb2plY3Qtc2VjdGlvbiBweC01IHB4LWxnLTUgcHktNCBteC0wXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtZm9yPVwicHJvamVjdCBpbiBwcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cInByb2plY3QuaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIDppZD1cImBwcm9qZWN0LSR7cHJvamVjdC5pZH1gXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbC1sZy0yIHBsLWxnLTEgY29sLTQgcHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmRhdGEtdGFyZ2V0PVwiYCNNb2RhbFByb2plY3Qke3Byb2plY3QuaWR9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1vbjpjbGljaz1cInNob3dQcm9qZWN0KHByb2plY3QpXCI+XHJcbiAgICAgICAgICAgIDxpbWcgOnNyYz1cInByb2plY3QuaW1hZ2VzWzBdLmltYWdlXCIgOmFsdD1cImAke3Byb2plY3QubmFtZX0gLSAke3Byb2plY3Quc3VidGl0bGV9YFwiIGNsYXNzPVwicHJvamVjdC10aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzPVwicHJvamVjdC1uYW1lIG10LTRcIj57e3Byb2plY3QucHJvamVjdF9uYW1lfX08L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3Qtc3VidGl0bGUgbXQtMlwiPnt7cHJvamVjdC5wcm9qZWN0X3N1YnRpdGxlfX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8ZGl2IHJlZj1cImN1c3RvbVBvcHVwXCIgOmNsYXNzPVwieydkLWJsb2NrJzogZGJsb2NrLCAnZC1ub25lJyA6IGRub25lLCAncG9wdXAtYmcnOiAncG9wdXAtYmcnfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLXBvcHVwIGQtZmxleCBmbGV4LWNvbHVtbiBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1oZWFkIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1oZWFkLWNsb3NpbmctYnV0dG9uIHB5LTJcIiB2LW9uOmNsaWNrPVwiY2xvc2VQb3B1cFwiPng8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8UHJvamVjdFBvcHVwIDpzZWxlY3RlZFByb2plY3Q9XCJzZWxlY3RlZFByb2plY3RcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgUHJvamVjdFBvcHVwIGZyb20gJy4vUHJvamVjdFBvcHVwLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnUHJvamVjdFNlY3Rpb24nLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgICAgUHJvamVjdFBvcHVwXHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgcHJvamVjdHM6IHtcclxuICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gW11cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZWxlY3RlZFByb2plY3Q6IHt9LFxyXG4gICAgICAgIGRibG9jazogZmFsc2UsXHJcbiAgICAgICAgZG5vbmU6IHRydWUsXHJcbiAgICAgICAgLy8gcHJvamVjdHM6IFtdXHJcbiAgICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHNob3dQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLmRibG9jayA9IHRydWVcclxuICAgICAgICB0aGlzLmRub25lID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RcclxuICAgIH0sXHJcbiAgICBjbG9zZVBvcHVwKCl7XHJcbiAgICAgICAgdGhpcy5kYmxvY2sgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZG5vbmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuLy8gICBtb3VudGVkKCl7XHJcbi8vICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SXRhbGlhbmEmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcclxuLnByb2plY3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAucHJvamVjdC10aHVtYm5haWwge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByb2plY3QtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LXN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuLnByb2plY3QtdGh1bWJuYWlsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgdHJhbnNpdGlvbjogMC43cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb3B1cC1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5YmZcclxufVxyXG5cclxuLmN1c3RvbS1wb3B1cCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDY1cHg7XHJcbiAgICBib3R0b206IDQwcHg7XHJcbiAgICBsZWZ0OiAyNHB4O1xyXG4gICAgcmlnaHQ6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KXtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb3B1cC1oZWFkLWNsb3NpbmctYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG48L3N0eWxlPlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBbENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a9757f6c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a9757f6c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"project-section px-5 px-lg-5 py-4 mx-0\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"row justify-content-end\" },\n      [\n        _c(\"div\", { staticClass: \"col-lg-2\" }),\n        _vm._l(_vm.projects, function (project) {\n          return _c(\n            \"div\",\n            {\n              key: project.id,\n              staticClass: \"col-lg-2 pl-lg-1 col-4 project\",\n              attrs: {\n                id: \"project-\" + project.id,\n                \"data-toggle\": \"modal\",\n                \"data-target\": \"#ModalProject\" + project.id,\n              },\n              on: {\n                click: function ($event) {\n                  return _vm.showProject(project)\n                },\n              },\n            },\n            [\n              _c(\"img\", {\n                staticClass: \"project-thumbnail\",\n                attrs: {\n                  src: project.images[0].image,\n                  alt: project.name + \" - \" + project.subtitle,\n                },\n              }),\n              _c(\"h2\", { staticClass: \"project-name mt-4\" }, [\n                _vm._v(_vm._s(project.project_name)),\n              ]),\n              _c(\"p\", { staticClass: \"project-subtitle mt-2\" }, [\n                _vm._v(_vm._s(project.project_subtitle)),\n              ]),\n            ]\n          )\n        }),\n        _c(\n          \"div\",\n          {\n            ref: \"customPopup\",\n            class: {\n              \"d-block\": _vm.dblock,\n              \"d-none\": _vm.dnone,\n              \"popup-bg\": \"popup-bg\",\n            },\n          },\n          [\n            _c(\n              \"div\",\n              { staticClass: \"custom-popup d-flex flex-column container\" },\n              [\n                _c(\n                  \"div\",\n                  { staticClass: \"popup-head d-flex justify-content-end \" },\n                  [\n                    _c(\n                      \"div\",\n                      {\n                        staticClass: \"popup-head-closing-button py-2\",\n                        on: { click: _vm.closePopup },\n                      },\n                      [_vm._v(\"x\")]\n                    ),\n                  ]\n                ),\n                _c(\"ProjectPopup\", {\n                  attrs: { selectedProject: _vm.selectedProject },\n                }),\n              ],\n              1\n            ),\n          ]\n        ),\n      ],\n      2\n    ),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiYTk3NTdmNmMtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL1Byb2plY3RTZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NjMyOTQ4OCZzY29wZWQ9dHJ1ZSYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0U2VjdGlvbi52dWU/Y2Y3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2plY3Qtc2VjdGlvbiBweC01IHB4LWxnLTUgcHktNCBteC0wXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IGp1c3RpZnktY29udGVudC1lbmRcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0yXCIgfSksXG4gICAgICAgIF92bS5fbChfdm0ucHJvamVjdHMsIGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBwcm9qZWN0LmlkLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtbGctMiBwbC1sZy0xIGNvbC00IHByb2plY3RcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJwcm9qZWN0LVwiICsgcHJvamVjdC5pZCxcbiAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI01vZGFsUHJvamVjdFwiICsgcHJvamVjdC5pZCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93UHJvamVjdChwcm9qZWN0KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJvamVjdC10aHVtYm5haWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc3JjOiBwcm9qZWN0LmltYWdlc1swXS5pbWFnZSxcbiAgICAgICAgICAgICAgICAgIGFsdDogcHJvamVjdC5uYW1lICsgXCIgLSBcIiArIHByb2plY3Quc3VidGl0bGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9qZWN0LW5hbWUgbXQtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb2plY3QucHJvamVjdF9uYW1lKSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9qZWN0LXN1YnRpdGxlIG10LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9qZWN0LnByb2plY3Rfc3VidGl0bGUpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZWY6IFwiY3VzdG9tUG9wdXBcIixcbiAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgIFwiZC1ibG9ja1wiOiBfdm0uZGJsb2NrLFxuICAgICAgICAgICAgICBcImQtbm9uZVwiOiBfdm0uZG5vbmUsXG4gICAgICAgICAgICAgIFwicG9wdXAtYmdcIjogXCJwb3B1cC1iZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1wb3B1cCBkLWZsZXggZmxleC1jb2x1bW4gY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9wdXAtaGVhZCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBvcHVwLWhlYWQtY2xvc2luZy1idXR0b24gcHktMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZVBvcHVwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwieFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFwiUHJvamVjdFBvcHVwXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNlbGVjdGVkUHJvamVjdDogX3ZtLnNlbGVjdGVkUHJvamVjdCB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a9757f6c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true&\n");

/***/ })

})