webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"06a866c2-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"06a866c2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"project-section px-5 px-lg-5 py-4 mx-0\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"row justify-content-end\" },\n      [\n        _c(\"div\", { staticClass: \"col-lg-2\" }),\n        _vm._l(_vm.projects, function (project) {\n          return _c(\n            \"div\",\n            {\n              key: project.id,\n              staticClass: \"pl-lg-1 col-4 project\",\n              attrs: {\n                id: \"project-\" + project.id,\n                \"data-toggle\": \"modal\",\n                \"data-target\": \"#ModalProject\" + project.id,\n              },\n              on: {\n                click: function ($event) {\n                  return _vm.showProject(project)\n                },\n              },\n            },\n            [\n              _c(\"img\", {\n                staticClass: \"project-thumbnail\",\n                attrs: {\n                  src: project.images[0].image,\n                  alt: project.name + \" - \" + project.subtitle,\n                },\n              }),\n              _c(\"h2\", { staticClass: \"project-name mt-4\" }, [\n                _vm._v(_vm._s(project.project_name)),\n              ]),\n              _c(\"p\", { staticClass: \"project-subtitle mt-2\" }, [\n                _vm._v(_vm._s(project.project_subtitle)),\n              ]),\n            ]\n          )\n        }),\n        _c(\n          \"div\",\n          {\n            ref: \"customPopup\",\n            class: {\n              \"d-block\": _vm.dblock,\n              \"d-none\": _vm.dnone,\n              \"popup-bg\": \"popup-bg\",\n            },\n          },\n          [\n            _c(\n              \"div\",\n              { staticClass: \"custom-popup d-flex flex-column container\" },\n              [\n                _c(\n                  \"div\",\n                  { staticClass: \"popup-head d-flex justify-content-end \" },\n                  [\n                    _c(\n                      \"div\",\n                      {\n                        staticClass: \"popup-head-closing-button py-2\",\n                        on: { click: _vm.closePopup },\n                      },\n                      [_vm._v(\"x\")]\n                    ),\n                  ]\n                ),\n                _c(\"ProjectPopup\", {\n                  attrs: { selectedProject: _vm.selectedProject },\n                }),\n              ],\n              1\n            ),\n          ]\n        ),\n      ],\n      2\n    ),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiMDZhODY2YzItdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL1Byb2plY3RTZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NjMyOTQ4OCZzY29wZWQ9dHJ1ZSYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0U2VjdGlvbi52dWU/M2QyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2plY3Qtc2VjdGlvbiBweC01IHB4LWxnLTUgcHktNCBteC0wXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IGp1c3RpZnktY29udGVudC1lbmRcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0yXCIgfSksXG4gICAgICAgIF92bS5fbChfdm0ucHJvamVjdHMsIGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBwcm9qZWN0LmlkLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwbC1sZy0xIGNvbC00IHByb2plY3RcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJwcm9qZWN0LVwiICsgcHJvamVjdC5pZCxcbiAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI01vZGFsUHJvamVjdFwiICsgcHJvamVjdC5pZCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93UHJvamVjdChwcm9qZWN0KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJvamVjdC10aHVtYm5haWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc3JjOiBwcm9qZWN0LmltYWdlc1swXS5pbWFnZSxcbiAgICAgICAgICAgICAgICAgIGFsdDogcHJvamVjdC5uYW1lICsgXCIgLSBcIiArIHByb2plY3Quc3VidGl0bGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9qZWN0LW5hbWUgbXQtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb2plY3QucHJvamVjdF9uYW1lKSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9qZWN0LXN1YnRpdGxlIG10LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9qZWN0LnByb2plY3Rfc3VidGl0bGUpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZWY6IFwiY3VzdG9tUG9wdXBcIixcbiAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgIFwiZC1ibG9ja1wiOiBfdm0uZGJsb2NrLFxuICAgICAgICAgICAgICBcImQtbm9uZVwiOiBfdm0uZG5vbmUsXG4gICAgICAgICAgICAgIFwicG9wdXAtYmdcIjogXCJwb3B1cC1iZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1wb3B1cCBkLWZsZXggZmxleC1jb2x1bW4gY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9wdXAtaGVhZCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBvcHVwLWhlYWQtY2xvc2luZy1idXR0b24gcHktMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZVBvcHVwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwieFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFwiUHJvamVjdFBvcHVwXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNlbGVjdGVkUHJvamVjdDogX3ZtLnNlbGVjdGVkUHJvamVjdCB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"06a866c2-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true&\n");

/***/ })

})