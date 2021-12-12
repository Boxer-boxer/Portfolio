webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\n\n\nvar _withScopeId = function _withScopeId(n) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"pushScopeId\"])(\"data-v-96329488\"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"popScopeId\"])(), n;\n};\n\nvar _hoisted_1 = {\n  class: \"project-section py-4 container\"\n};\nvar _hoisted_2 = {\n  class: \"row justify-content-end\"\n};\nvar _hoisted_3 = [\"id\", \"data-target\", \"onClick\"];\nvar _hoisted_4 = [\"src\", \"alt\"];\nvar _hoisted_5 = {\n  class: \"project-name mt-4\"\n};\nvar _hoisted_6 = {\n  class: \"project-subtitle mt-2\"\n};\nvar _hoisted_7 = {\n  class: \"custom-popup\"\n};\nvar _hoisted_8 = {\n  class: \"popup-head d-flex justify-content-end p-4\"\n};\n\nvar _hoisted_9 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createElementVNode\"])(\"div\", {\n    class: \"popup-body\"\n  }, null, -1\n  /* HOISTED */\n  );\n});\n\nvar _hoisted_10 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createElementVNode\"])(\"div\", {\n    class: \"popup-footer\"\n  }, null, -1\n  /* HOISTED */\n  );\n});\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_projectPopup = Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"resolveComponent\"])(\"projectPopup\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createElementBlock\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createElementVNode\"])(\"div\", _hoisted_2, [(Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"renderList\"])($data.projects, function (project) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createElementBlock\"])(\"div\", {\n      key: project.id,\n      id: \"project-\".concat(project.id),\n      class: \"col-lg-3 col-md-6 col-12 mb-4 project\",\n      \"data-toggle\": \"modal\",\n      \"data-target\": \"#ModalProject\".concat(project.id),\n      onClick: function onClick($event) {\n        return $options.showProject(project);\n      }\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createElementVNode\"])(\"img\", {\n      src: project.img,\n      alt: \"\".concat(project.name, \" - \").concat(project.subtitle),\n      class: \"project-thumbnail\"\n    }, null, 8\n    /* PROPS */\n    , _hoisted_4), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createElementVNode\"])(\"div\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createElementVNode\"])(\"h2\", _hoisted_5, Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"toDisplayString\"])(project.name), 1\n    /* TEXT */\n    ), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createElementVNode\"])(\"p\", _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"toDisplayString\"])(project.subtitle), 1\n    /* TEXT */\n    )])], 8\n    /* PROPS */\n    , _hoisted_3);\n  }), 128\n  /* KEYED_FRAGMENT */\n  )), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createVNode\"])(_component_projectPopup, {\n    project: $data.selectedProject\n  }, null, 8\n  /* PROPS */\n  , [\"project\"]), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createElementVNode\"])(\"div\", {\n    ref: \"customPopup\",\n    class: Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"normalizeClass\"])({\n      'd-block': $data.dblock,\n      'd-none': $data.dnone,\n      'popup-bg': 'popup-bg'\n    })\n  }, [Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createElementVNode\"])(\"div\", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createTextVNode\"])(Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"toDisplayString\"])($data.selectedProject) + \" \", 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createElementVNode\"])(\"div\", _hoisted_8, [Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createElementVNode\"])(\"div\", {\n    class: \"popup-head-closing-button\",\n    onClick: _cache[0] || (_cache[0] = function () {\n      return $options.closePopup && $options.closePopup.apply($options, arguments);\n    })\n  }, \"x\")]), _hoisted_9, _hoisted_10])], 2\n  /* CLASS */\n  )])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0U2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTYzMjk0ODgmc2NvcGVkPXRydWUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0U2VjdGlvbi52dWU/NmVhMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInByb2plY3Qtc2VjdGlvbiBweS00IGNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgPGRpdiB2LWZvcj1cInByb2plY3QgaW4gcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJwcm9qZWN0LmlkXCJcclxuICAgICAgICAgICAgICAgICAgICA6aWQ9XCJgcHJvamVjdC0ke3Byb2plY3QuaWR9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtMTIgbWItNCBwcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgOmRhdGEtdGFyZ2V0PVwiYCNNb2RhbFByb2plY3Qke3Byb2plY3QuaWR9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1vbjpjbGljaz1cInNob3dQcm9qZWN0KHByb2plY3QpXCI+XHJcbiAgICAgICAgICAgIDxpbWcgOnNyYz1cInByb2plY3QuaW1nXCIgOmFsdD1cImAke3Byb2plY3QubmFtZX0gLSAke3Byb2plY3Quc3VidGl0bGV9YFwiIGNsYXNzPVwicHJvamVjdC10aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInByb2plY3QtbmFtZSBtdC00XCI+e3twcm9qZWN0Lm5hbWV9fTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3Qtc3VidGl0bGUgbXQtMlwiPnt7cHJvamVjdC5zdWJ0aXRsZX19PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPHByb2plY3RQb3B1cCBcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA6cHJvamVjdD1cInNlbGVjdGVkUHJvamVjdFwiIFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiByZWY9XCJjdXN0b21Qb3B1cFwiIDpjbGFzcz1cInsnZC1ibG9jayc6IGRibG9jaywgJ2Qtbm9uZScgOiBkbm9uZSwgJ3BvcHVwLWJnJzogJ3BvcHVwLWJnJ31cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1wb3B1cFwiID5cclxuICAgICAgICAgICAgICAgIHt7c2VsZWN0ZWRQcm9qZWN0fX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1oZWFkIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1oZWFkLWNsb3NpbmctYnV0dG9uXCIgdi1vbjpjbGljaz1cImNsb3NlUG9wdXBcIj54PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgcHJvamVjdFBvcHVwIGZyb20gJy4vcHJvamVjdFBvcHVwLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnUHJvamVjdCBTZWN0aW9uJyxcclxuICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIHByb2plY3RQb3B1cFxyXG4gICAgfSxcclxuICBwcm9wczoge1xyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHByb2plY3RzIDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCIgOiBcIjFcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiIDogXCJQcm9qZWN0IDFcIixcclxuICAgICAgICAgICAgICAgIFwic3VidGl0bGVcIiA6IFwiU3VidGl0bGUgMSAtIFNvbWV0aGluZyBzb21ldGhpbmcgd2hhdGV2ZXJcIixcclxuICAgICAgICAgICAgICAgIFwiaW1nXCI6IFwiaHR0cHM6Ly93d3cubXlkb21haW5lLmNvbS90aG1iL0hfa2REVW5wM09XS0paa0laMzRzYl9aaXZIWT0vMTQwMHgxMDA0L2ZpbHRlcnM6bm9fdXBzY2FsZSgpOm1heF9ieXRlcygxNTAwMDApOnN0cmlwX2ljYygpL1NjcmVlblNob3QyMDE5LTA5LTExYXQ5LjExLjUwQU0tY2U1ZjY2OGEyMjU0NDRiYzhlMzhmN2NlYTFkNzNjNzIucG5nXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiIDogXCIyXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIiA6IFwiUHJvamVjdCAyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN1YnRpdGxlXCIgOiBcIlN1YnRpdGxlIDEgLSBTb21ldGhpbmcgc29tZXRoaW5nIHdoYXRldmVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImltZ1wiOiBcImh0dHBzOi8vd3d3Lm15ZG9tYWluZS5jb20vdGhtYi9IX2tkRFVucDNPV0tKWmtJWjM0c2JfWml2SFk9LzE0MDB4MTAwNC9maWx0ZXJzOm5vX3Vwc2NhbGUoKTptYXhfYnl0ZXMoMTUwMDAwKTpzdHJpcF9pY2MoKS9TY3JlZW5TaG90MjAxOS0wOS0xMWF0OS4xMS41MEFNLWNlNWY2NjhhMjI1NDQ0YmM4ZTM4ZjdjZWExZDczYzcyLnBuZ1wiXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCIgOiBcIjNcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiIDogXCJQcm9qZWN0IDJcIixcclxuICAgICAgICAgICAgICAgIFwic3VidGl0bGVcIiA6IFwiU3VidGl0bGUgMSAtIFNvbWV0aGluZyBzb21ldGhpbmcgd2hhdGV2ZXJcIixcclxuICAgICAgICAgICAgICAgIFwiaW1nXCI6IFwiaHR0cHM6Ly93d3cubXlkb21haW5lLmNvbS90aG1iL0hfa2REVW5wM09XS0paa0laMzRzYl9aaXZIWT0vMTQwMHgxMDA0L2ZpbHRlcnM6bm9fdXBzY2FsZSgpOm1heF9ieXRlcygxNTAwMDApOnN0cmlwX2ljYygpL1NjcmVlblNob3QyMDE5LTA5LTExYXQ5LjExLjUwQU0tY2U1ZjY2OGEyMjU0NDRiYzhlMzhmN2NlYTFkNzNjNzIucG5nXCJcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIiA6IFwiNFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCIgOiBcIlByb2plY3QgMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdWJ0aXRsZVwiIDogXCJTdWJ0aXRsZSAxIC0gU29tZXRoaW5nIHNvbWV0aGluZyB3aGF0ZXZlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJpbWdcIjogXCJodHRwczovL3d3dy5teWRvbWFpbmUuY29tL3RobWIvSF9rZERVbnAzT1dLSlprSVozNHNiX1ppdkhZPS8xNDAweDEwMDQvZmlsdGVyczpub191cHNjYWxlKCk6bWF4X2J5dGVzKDE1MDAwMCk6c3RyaXBfaWNjKCkvU2NyZWVuU2hvdDIwMTktMDktMTFhdDkuMTEuNTBBTS1jZTVmNjY4YTIyNTQ0NGJjOGUzOGY3Y2VhMWQ3M2M3Mi5wbmdcIlxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiIDogXCI1XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIiA6IFwiUHJvamVjdCAyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN1YnRpdGxlXCIgOiBcIlN1YnRpdGxlIDEgLSBTb21ldGhpbmcgc29tZXRoaW5nIHdoYXRldmVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImltZ1wiOiBcImh0dHBzOi8vd3d3Lm15ZG9tYWluZS5jb20vdGhtYi9IX2tkRFVucDNPV0tKWmtJWjM0c2JfWml2SFk9LzE0MDB4MTAwNC9maWx0ZXJzOm5vX3Vwc2NhbGUoKTptYXhfYnl0ZXMoMTUwMDAwKTpzdHJpcF9pY2MoKS9TY3JlZW5TaG90MjAxOS0wOS0xMWF0OS4xMS41MEFNLWNlNWY2NjhhMjI1NDQ0YmM4ZTM4ZjdjZWExZDczYzcyLnBuZ1wiXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0OiBcIlwiLFxyXG4gICAgICAgICAgZGJsb2NrOiBmYWxzZSxcclxuICAgICAgICAgIGRub25lOiB0cnVlXHJcbiAgICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHNob3dQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLmRibG9jayA9IHRydWVcclxuICAgICAgICB0aGlzLmRub25lID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkUHJvamVjdClcclxuICAgIH0sXHJcbiAgICBjbG9zZVBvcHVwKCl7XHJcbiAgICAgICAgICB0aGlzLmRibG9jayA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5kbm9uZSA9IHRydWVcclxuICAgICAgICBjb25zb2xlLmxvZyhcIndyaFwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNBY3RpdmUpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SXRhbGlhbmEmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcclxuLnByb2plY3QgeyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5wcm9qZWN0LXRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvamVjdC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnByb2plY3Qtc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ucHJvamVjdC10aHVtYm5haWwge1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgdHJhbnNpdGlvbjogMC43cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBOzs7OztBQVVBOzs7QUFDQTs7O0FBUUE7OztBQUVBOzs7O0FBR0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7OztBQTNCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBTEE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTs7QUFWQTtBQVlBOztBQVpBO0FBZUE7QUFDQTtBQURBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQVJBO0FBT0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUpBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true\n");

/***/ })

})