webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"98add2f6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"98add2f6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"project-section py-4 container\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"row justify-content-end\" },\n      [\n        _vm._l(_vm.projects, function (project) {\n          return _c(\n            \"div\",\n            {\n              key: project.id,\n              staticClass: \"col-lg-3 col-md-6 col-12 mb-4 project\",\n              attrs: {\n                id: \"project-\" + project.id,\n                \"data-toggle\": \"modal\",\n                \"data-target\": \"#ModalProject\" + project.id,\n              },\n              on: {\n                click: function ($event) {\n                  return _vm.showProject(project)\n                },\n              },\n            },\n            [\n              _c(\"img\", {\n                staticClass: \"project-thumbnail\",\n                attrs: {\n                  src: project.img,\n                  alt: project.name + \" - \" + project.subtitle,\n                },\n              }),\n              _c(\"div\", [\n                _c(\"h2\", { staticClass: \"project-name mt-4\" }, [\n                  _vm._v(_vm._s(project.name)),\n                ]),\n                _c(\"p\", { staticClass: \"project-subtitle mt-2\" }, [\n                  _vm._v(_vm._s(project.subtitle)),\n                ]),\n              ]),\n            ]\n          )\n        }),\n        _c(\n          \"div\",\n          {\n            ref: \"customPopup\",\n            class: {\n              \"d-block\": _vm.dblock,\n              \"d-none\": _vm.dnone,\n              \"popup-bg\": \"popup-bg\",\n            },\n          },\n          [\n            _c(\n              \"div\",\n              { staticClass: \"custom-popup d-flex flex-column\" },\n              [\n                _c(\n                  \"div\",\n                  { staticClass: \"popup-head d-flex justify-content-end p-4\" },\n                  [\n                    _c(\n                      \"div\",\n                      {\n                        staticClass: \"popup-head-closing-button\",\n                        on: { click: _vm.closePopup },\n                      },\n                      [_vm._v(\"x\")]\n                    ),\n                  ]\n                ),\n                _c(\"ProjectPopup\", { attrs: { project: _vm.selectedProject } }),\n              ],\n              1\n            ),\n          ]\n        ),\n      ],\n      2\n    ),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiOThhZGQyZjYtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL1Byb2plY3RTZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NjMyOTQ4OCZzY29wZWQ9dHJ1ZSYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0U2VjdGlvbi52dWU/YmMyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2plY3Qtc2VjdGlvbiBweS00IGNvbnRhaW5lclwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyBqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl9sKF92bS5wcm9qZWN0cywgZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IHByb2plY3QuaWQsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1sZy0zIGNvbC1tZC02IGNvbC0xMiBtYi00IHByb2plY3RcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJwcm9qZWN0LVwiICsgcHJvamVjdC5pZCxcbiAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI01vZGFsUHJvamVjdFwiICsgcHJvamVjdC5pZCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93UHJvamVjdChwcm9qZWN0KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJvamVjdC10aHVtYm5haWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc3JjOiBwcm9qZWN0LmltZyxcbiAgICAgICAgICAgICAgICAgIGFsdDogcHJvamVjdC5uYW1lICsgXCIgLSBcIiArIHByb2plY3Quc3VidGl0bGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvamVjdC1uYW1lIG10LTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb2plY3QubmFtZSkpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2plY3Qtc3VidGl0bGUgbXQtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvamVjdC5zdWJ0aXRsZSkpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogXCJjdXN0b21Qb3B1cFwiLFxuICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgXCJkLWJsb2NrXCI6IF92bS5kYmxvY2ssXG4gICAgICAgICAgICAgIFwiZC1ub25lXCI6IF92bS5kbm9uZSxcbiAgICAgICAgICAgICAgXCJwb3B1cC1iZ1wiOiBcInBvcHVwLWJnXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLXBvcHVwIGQtZmxleCBmbGV4LWNvbHVtblwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBvcHVwLWhlYWQgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgcC00XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwb3B1cC1oZWFkLWNsb3NpbmctYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlUG9wdXAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJ4XCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXCJQcm9qZWN0UG9wdXBcIiwgeyBhdHRyczogeyBwcm9qZWN0OiBfdm0uc2VsZWN0ZWRQcm9qZWN0IH0gfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXSxcbiAgICAgIDJcbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"98add2f6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true&\n");

/***/ })

})