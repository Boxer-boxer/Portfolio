webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EntrySection.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nwindow.$ = jquery__WEBPACK_IMPORTED_MODULE_5___default.a;\nglobal.$ = jquery__WEBPACK_IMPORTED_MODULE_5___default.a;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'EntrySection',\n  props: {\n    background: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    }\n  },\n  methods: {\n    fadeInLetters: function fadeInLetters(elId) {\n      var letters = $(elId).text().split(\"\");\n      $(elId).text(\"\");\n      letters.forEach(function (item) {\n        var span = $(\"<span class='fade'>\").text(item);\n        $(elId).append(span);\n      });\n      $(document).find(\".fade\").each(function () {\n        var delay = Math.random();\n        var letter = $(this);\n        setTimeout(function () {\n          letter.animate({\n            \"opacity\": 1\n          }, delay * 500);\n        }, delay * 2000);\n      });\n    },\n    scrollEffect: function scrollEffect() {\n      $(window).scroll(function () {\n        var st = $(this).scrollTop();\n        var lastScrollTop = 0;\n\n        if (st > lastScrollTop) {\n          $(\".entry-section-parent\").addClass(\"p-5\");\n          console.log('down');\n        }\n\n        lastScrollTop = st;\n      });\n    }\n  },\n  mounted: function mounted() {\n    this.fadeInLetters(\"#EntryLetters\");\n    this.scrollEffect();\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvRW50cnlTZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRW50cnlTZWN0aW9uLnZ1ZT9mZmVmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZW50cnktc2VjdGlvbi1wYXJlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJlbnRyeS1zZWN0aW9uIGNvbnRhaW5lci1mbHVpZCBwLTMgbS0wXCIgIDpzdHlsZT1cIntiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoIC8nICsgYmFja2dyb3VuZC5pbWFnZSArICcpJyB9XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgIDxoMSBjbGFzcz1cInNyLW9ubHlcIj5UaW1vdGh5IEJhZGl1azwvaDE+XHJcbiAgICAgICAgICA8aDEgaWQ9XCJFbnRyeUxldHRlcnNcIj5UaW1vdGh5IEJhZGl1azwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImVudHJ5LXN1YnRpdGxlXCI+dGpiYWRpdWtAZ21haWwuY29tPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJlbnRyeS1zdWJ0aXRsZVwiPisxIDQxNi02ODgtNTQxMTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBKUXVlcnkgZnJvbSAnanF1ZXJ5J1xyXG53aW5kb3cuJCA9IEpRdWVyeVxyXG5nbG9iYWwuJCA9IEpRdWVyeVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdFbnRyeVNlY3Rpb24nLFxyXG4gIHByb3BzOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgfVxyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZmFkZUluTGV0dGVycyhlbElkKXtcclxuICAgICAgdmFyIGxldHRlcnMgPSAkKGVsSWQpLnRleHQoKS5zcGxpdChcIlwiKTtcclxuICAgICAgJChlbElkKS50ZXh0KFwiXCIpO1xyXG4gIFxyXG4gICAgICBsZXR0ZXJzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgdmFyIHNwYW4gPSAkKFwiPHNwYW4gY2xhc3M9J2ZhZGUnPlwiKS50ZXh0KGl0ZW0pO1xyXG4gICAgICAgICQoZWxJZCkuYXBwZW5kKHNwYW4pO1xyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgJChkb2N1bWVudCkuZmluZChcIi5mYWRlXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgZGVsYXkgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIHZhciBsZXR0ZXIgPSAkKHRoaXMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgIGxldHRlci5hbmltYXRlKHtcIm9wYWNpdHlcIjoxfSxkZWxheSo1MDApO1xyXG4gICAgICAgIH0sZGVsYXkqMjAwMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNjcm9sbEVmZmVjdCgpe1xyXG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHN0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAgICAgICBsZXQgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG4gICAgICAgIGlmIChzdCA+IGxhc3RTY3JvbGxUb3ApIHtcclxuICAgICAgICAgICAgJChcIi5lbnRyeS1zZWN0aW9uLXBhcmVudFwiKS5hZGRDbGFzcyhcInAtNVwiKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG93bicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxhc3RTY3JvbGxUb3AgPSBzdDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCl7XHJcbiAgICB0aGlzLmZhZGVJbkxldHRlcnMoXCIjRW50cnlMZXR0ZXJzXCIpXHJcbiAgICB0aGlzLnNjcm9sbEVmZmVjdCgpXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SXRhbGlhbmEmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5mYWRle1xyXG4gIG9wYWNpdHk6MDtcclxufVxyXG5cclxuLmVudHJ5LXNlY3Rpb24tcGFyZW50IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5lbnRyeS1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDE2JSwgMTAwJSAxNSUsIDAgNTAlLCAwIDUxJSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmVudHJ5LXN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogNHB4O1xyXG59XHJcblxyXG48L3N0eWxlPlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBOUJBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBN0NBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&\n");

/***/ })

})