webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EntrySection.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'EntrySection',\n  props: {},\n  methods: {\n    fadeInLetters: function fadeInLetters(elId) {\n      var letters = $(elId).text().split(\"\"); // Remove the original string.\n\n      $(elId).text(\"\");\n      letters.forEach(function (item, index) {\n        var span = $(\"<span class='fade'>\").text(item);\n        $(elId).append(span);\n      });\n      $(document).find(\".fade\").each(function () {\n        var delay = Math.random();\n        var letter = $(this);\n        setTimeout(function () {\n          letter.animate({\n            \"opacity\": 1\n          }, delay * 1000);\n        }, delay * 3000);\n      });\n    }\n  },\n  mounted: function mounted() {\n    this.fadeInLetters(\"#EntryLetters\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvRW50cnlTZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRW50cnlTZWN0aW9uLnZ1ZT9mZmVmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZW50cnktc2VjdGlvbiBjb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICA8aDEgaWQ9XCJFbnRyeUxldHRlcnNcIj5UaW1vdGh5IEJhZGl1azwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJlbnRyeS1zdWJ0aXRsZVwiPnRqYmFkaXVrQGdtYWlsLmNvbTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cImVudHJ5LXN1YnRpdGxlXCI+KzEgNDE2LTY4OC01NDExPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0VudHJ5U2VjdGlvbicsXHJcbiAgcHJvcHM6IHtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGZhZGVJbkxldHRlcnMoZWxJZCl7XHJcbiAgICAgIHZhciBsZXR0ZXJzID0gJChlbElkKS50ZXh0KCkuc3BsaXQoXCJcIik7XHJcbiAgICAgIC8vIFJlbW92ZSB0aGUgb3JpZ2luYWwgc3RyaW5nLlxyXG4gICAgICAkKGVsSWQpLnRleHQoXCJcIik7XHJcbiAgXHJcbiAgICAgIGxldHRlcnMuZm9yRWFjaChmdW5jdGlvbihpdGVtLGluZGV4KXtcclxuICAgICAgICB2YXIgc3BhbiA9ICQoXCI8c3BhbiBjbGFzcz0nZmFkZSc+XCIpLnRleHQoaXRlbSk7XHJcbiAgICAgICAgJChlbElkKS5hcHBlbmQoc3Bhbik7XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAkKGRvY3VtZW50KS5maW5kKFwiLmZhZGVcIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBkZWxheSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgdmFyIGxldHRlciA9ICQodGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgbGV0dGVyLmFuaW1hdGUoe1wib3BhY2l0eVwiOjF9LGRlbGF5KjEwMDApO1xyXG4gICAgICAgIH0sZGVsYXkqMzAwMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpe1xyXG4gICAgdGhpcy5mYWRlSW5MZXR0ZXJzKFwiI0VudHJ5TGV0dGVyc1wiKVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUl0YWxpYW5hJmZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uZmFkZXtcclxuICBvcGFjaXR5OjA7XHJcbn1cclxuXHJcbi5lbnRyeS1zZWN0aW9uIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDMycHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIFxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMTYlLCAxMDAlIDE1JSwgMCA1MCUsIDAgNTElKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZW50cnktc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQXFCQTtBQUNBO0FBQ0E7QUEzQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&\n");

/***/ })

})