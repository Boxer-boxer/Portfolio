webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EntrySection.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nwindow.$ = jquery__WEBPACK_IMPORTED_MODULE_5___default.a;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'EntrySection',\n  props: {\n    background: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    }\n  },\n  methods: {\n    fadeInLetters: function fadeInLetters(elId) {\n      var letters = $(elId).text().split(\"\");\n      $(elId).text(\"\");\n      letters.forEach(function (item, index) {\n        var span = $(\"<span class='fade'>\").text(item);\n        $(elId).append(span);\n      });\n      $(document).find(\".fade\").each(function () {\n        var delay = Math.random();\n        var letter = $(this);\n        setTimeout(function () {\n          letter.animate({\n            \"opacity\": 1\n          }, delay * 500);\n        }, delay * 2000);\n      });\n    },\n    scrollEffect: function scrollEffect() {\n      $(window).scroll(function () {\n        var st = $(this).scrollTop();\n        var lastScrollTop = 0;\n\n        if (st > lastScrollTop) {\n          $(\".entry-section-parent\").addClass(\"p-5\");\n          console.log('down');\n        }\n\n        lastScrollTop = st;\n      });\n    }\n  },\n  mounted: function mounted() {\n    this.fadeInLetters(\"#EntryLetters\");\n    this.scrollEffect();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvRW50cnlTZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRW50cnlTZWN0aW9uLnZ1ZT9mZmVmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZW50cnktc2VjdGlvbi1wYXJlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJlbnRyeS1zZWN0aW9uIGNvbnRhaW5lci1mbHVpZCBwLTMgbS0wXCIgIDpzdHlsZT1cInsgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyByZXF1aXJlKGJhY2tncm91bmQuaW1hZ2UpICsgJyknIH1cIj4+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgIDxoMSBpZD1cIkVudHJ5TGV0dGVyc1wiPlRpbW90aHkgQmFkaXVrPC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiZW50cnktc3VidGl0bGVcIj50amJhZGl1a0BnbWFpbC5jb208L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImVudHJ5LXN1YnRpdGxlXCI+KzEgNDE2LTY4OC01NDExPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEpRdWVyeSBmcm9tICdqcXVlcnknXHJcbndpbmRvdy4kID0gSlF1ZXJ5XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0VudHJ5U2VjdGlvbicsXHJcbiAgcHJvcHM6IHtcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4geyB9XHJcbiAgICAgIH1cclxuICAgIH0gXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBmYWRlSW5MZXR0ZXJzKGVsSWQpe1xyXG4gICAgICB2YXIgbGV0dGVycyA9ICQoZWxJZCkudGV4dCgpLnNwbGl0KFwiXCIpO1xyXG4gICAgICAkKGVsSWQpLnRleHQoXCJcIik7XHJcbiAgXHJcbiAgICAgIGxldHRlcnMuZm9yRWFjaChmdW5jdGlvbihpdGVtLGluZGV4KXtcclxuICAgICAgICB2YXIgc3BhbiA9ICQoXCI8c3BhbiBjbGFzcz0nZmFkZSc+XCIpLnRleHQoaXRlbSk7XHJcbiAgICAgICAgJChlbElkKS5hcHBlbmQoc3Bhbik7XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAkKGRvY3VtZW50KS5maW5kKFwiLmZhZGVcIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBkZWxheSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgdmFyIGxldHRlciA9ICQodGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgbGV0dGVyLmFuaW1hdGUoe1wib3BhY2l0eVwiOjF9LGRlbGF5KjUwMCk7XHJcbiAgICAgICAgfSxkZWxheSoyMDAwKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2Nyb2xsRWZmZWN0KCl7XHJcbiAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgc3QgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIGxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHJcbiAgICAgICAgaWYgKHN0ID4gbGFzdFNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgICAkKFwiLmVudHJ5LXNlY3Rpb24tcGFyZW50XCIpLmFkZENsYXNzKFwicC01XCIpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3duJylcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdFNjcm9sbFRvcCA9IHN0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQoKXtcclxuICAgIHRoaXMuZmFkZUluTGV0dGVycyhcIiNFbnRyeUxldHRlcnNcIilcclxuICAgIHRoaXMuc2Nyb2xsRWZmZWN0KClcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JdGFsaWFuYSZmYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmZhZGV7XHJcbiAgb3BhY2l0eTowO1xyXG59XHJcblxyXG4uZW50cnktc2VjdGlvbi1wYXJlbnQge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmVudHJ5LXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIFxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMTYlLCAxMDAlIDE1JSwgMCA1MCUsIDAgNTElKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZW50cnktc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUE5QkE7QUFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"98add2f6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=template&id=abff467a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"98add2f6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EntrySection.vue?vue&type=template&id=abff467a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"entry-section-parent\" }, [\n    _c(\n      \"div\",\n      {\n        staticClass: \"entry-section container-fluid p-3 m-0\",\n        style: {\n          backgroundImage: \"url(\" + __webpack_require__(\"./src/components sync recursive\")(_vm.background.image) + \")\",\n        },\n      },\n      [_vm._v(\"> \"), _vm._m(0)]\n    ),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"text-left\" }, [\n      _c(\"h1\", { attrs: { id: \"EntryLetters\" } }, [_vm._v(\"Timothy Badiuk\")]),\n      _c(\"p\", { staticClass: \"entry-subtitle\" }, [\n        _vm._v(\"tjbadiuk@gmail.com\"),\n      ]),\n      _c(\"p\", { staticClass: \"entry-subtitle\" }, [_vm._v(\"+1 416-688-5411\")]),\n    ])\n  },\n]\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiOThhZGQyZjYtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL0VudHJ5U2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWJmZjQ2N2Emc2NvcGVkPXRydWUmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRW50cnlTZWN0aW9uLnZ1ZT9jNDBkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW50cnktc2VjdGlvbi1wYXJlbnRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJlbnRyeS1zZWN0aW9uIGNvbnRhaW5lci1mbHVpZCBwLTMgbS0wXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHJlcXVpcmUoX3ZtLmJhY2tncm91bmQuaW1hZ2UpICsgXCIpXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW192bS5fdihcIj4gXCIpLCBfdm0uX20oMCldXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbGVmdFwiIH0sIFtcbiAgICAgIF9jKFwiaDFcIiwgeyBhdHRyczogeyBpZDogXCJFbnRyeUxldHRlcnNcIiB9IH0sIFtfdm0uX3YoXCJUaW1vdGh5IEJhZGl1a1wiKV0pLFxuICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW50cnktc3VidGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcInRqYmFkaXVrQGdtYWlsLmNvbVwiKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW50cnktc3VidGl0bGVcIiB9LCBbX3ZtLl92KFwiKzEgNDE2LTY4OC01NDExXCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"98add2f6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=template&id=abff467a&scoped=true&\n");

/***/ })

})