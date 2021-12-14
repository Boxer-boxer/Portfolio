webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EntrySection.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'EntrySection',\n  props: {\n    background: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    }\n  },\n  methods: {\n    fadeInLetters: function fadeInLetters(elId) {\n      var letters = jquery__WEBPACK_IMPORTED_MODULE_5___default()(elId).text().split(\"\");\n      jquery__WEBPACK_IMPORTED_MODULE_5___default()(elId).text(\"\");\n      letters.forEach(function (item, index) {\n        if (index === 0) {\n          var span = jquery__WEBPACK_IMPORTED_MODULE_5___default()(\"<span class='fade initials'>\").text(item);\n          jquery__WEBPACK_IMPORTED_MODULE_5___default()(elId).append(span);\n        } else if (letters[index - 1] === \" \") {\n          var _span = jquery__WEBPACK_IMPORTED_MODULE_5___default()(\"<span class='fade initials'>\").text(item);\n\n          jquery__WEBPACK_IMPORTED_MODULE_5___default()(elId).append(_span);\n        } else {\n          var _span2 = jquery__WEBPACK_IMPORTED_MODULE_5___default()(\"<span class='fade'>\").text(item);\n\n          jquery__WEBPACK_IMPORTED_MODULE_5___default()(elId).append(_span2);\n        }\n      });\n      jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).find(\".fade\").each(function () {\n        var delay = Math.random();\n        var letter = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this);\n        setTimeout(function () {\n          letter.animate({\n            \"opacity\": 1\n          }, delay * 500);\n        }, delay * 2000);\n      });\n    },\n    scrollEffect: function scrollEffect() {\n      jquery__WEBPACK_IMPORTED_MODULE_5___default()(window).scroll(function () {\n        var st = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).scrollTop();\n        var lastScrollTop = 0;\n\n        if (st > lastScrollTop) {\n          jquery__WEBPACK_IMPORTED_MODULE_5___default()(\".entry-section-parent\").addClass(\"p-5\"); // $('.fade').not(\".initials\").addClass('p-4')\n\n          jquery__WEBPACK_IMPORTED_MODULE_5___default()('.initials').addClass('mx-1');\n          jquery__WEBPACK_IMPORTED_MODULE_5___default()('.entry-letters').addClass('sticky-initials');\n        } else {\n          jquery__WEBPACK_IMPORTED_MODULE_5___default()(\".entry-section-parent\").removeClass(\"p-5\");\n          jquery__WEBPACK_IMPORTED_MODULE_5___default()('.initials').removeClass('mx-1');\n          jquery__WEBPACK_IMPORTED_MODULE_5___default()('.entry-letters').removeClass('sticky-initials');\n        }\n\n        lastScrollTop = st;\n      });\n    }\n  },\n  mounted: function mounted() {\n    this.fadeInLetters(\"#EntryLetters\");\n    this.scrollEffect();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvRW50cnlTZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRW50cnlTZWN0aW9uLnZ1ZT9mZmVmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZW50cnktc2VjdGlvbi1wYXJlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJlbnRyeS1zZWN0aW9uIGNvbnRhaW5lci1mbHVpZCBwLTMgbS0wIHBvc2l0aW9uLXJlbGF0aXZlXCIgIDpzdHlsZT1cIntiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoIC8nICsgYmFja2dyb3VuZC5pbWFnZSArICcpJyB9XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkYXJrLW92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImVudHJ5LWNvbnRlbnQgdy0xMDAgaC0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3M9XCJzci1vbmx5XCI+VGltb3RoeSBCYWRpdWs8L2gxPlxyXG4gICAgICAgICAgPGgxIGNsYXNzPVwiZW50cnktbGV0dGVyc1wiIGlkPVwiRW50cnlMZXR0ZXJzXCI+VGltb3RoeSBCYWRpdWs8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVudHJ5LWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOnRqYmFkaXVrQGdtYWlsLmNvbVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbXItMlwiPmVtYWlsPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwidGVsOjQxNi02ODgtNTQxMVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5waG9uZTwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdFbnRyeVNlY3Rpb24nLFxyXG4gIHByb3BzOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgfVxyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZmFkZUluTGV0dGVyczogZnVuY3Rpb24oZWxJZCl7XHJcbiAgICAgIHZhciBsZXR0ZXJzID0gJChlbElkKS50ZXh0KCkuc3BsaXQoXCJcIik7XHJcbiAgICAgICQoZWxJZCkudGV4dChcIlwiKTtcclxuICBcclxuICAgICAgbGV0dGVycy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KXtcclxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgIGxldCBzcGFuID0gJChcIjxzcGFuIGNsYXNzPSdmYWRlIGluaXRpYWxzJz5cIikudGV4dChpdGVtKTtcclxuICAgICAgICAgICQoZWxJZCkuYXBwZW5kKHNwYW4pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobGV0dGVyc1tpbmRleCAtIDFdID09PSBcIiBcIikge1xyXG4gICAgICAgICAgbGV0IHNwYW4gPSAkKFwiPHNwYW4gY2xhc3M9J2ZhZGUgaW5pdGlhbHMnPlwiKS50ZXh0KGl0ZW0pO1xyXG4gICAgICAgICAgJChlbElkKS5hcHBlbmQoc3Bhbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBzcGFuID0gJChcIjxzcGFuIGNsYXNzPSdmYWRlJz5cIikudGV4dChpdGVtKTtcclxuICAgICAgICAgICQoZWxJZCkuYXBwZW5kKHNwYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgICQoZG9jdW1lbnQpLmZpbmQoXCIuZmFkZVwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGRlbGF5ID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB2YXIgbGV0dGVyID0gJCh0aGlzKTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBsZXR0ZXIuYW5pbWF0ZSh7XCJvcGFjaXR5XCI6MX0sZGVsYXkqNTAwKTtcclxuICAgICAgICB9LGRlbGF5KjIwMDApO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc2Nyb2xsRWZmZWN0OiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgbGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5cclxuICAgICAgICBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgICAkKFwiLmVudHJ5LXNlY3Rpb24tcGFyZW50XCIpLmFkZENsYXNzKFwicC01XCIpO1xyXG4gICAgICAgICAgLy8gJCgnLmZhZGUnKS5ub3QoXCIuaW5pdGlhbHNcIikuYWRkQ2xhc3MoJ3AtNCcpXHJcbiAgICAgICAgICAkKCcuaW5pdGlhbHMnKS5hZGRDbGFzcygnbXgtMScpXHJcbiAgICAgICAgICAkKCcuZW50cnktbGV0dGVycycpLmFkZENsYXNzKCdzdGlja3ktaW5pdGlhbHMnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKFwiLmVudHJ5LXNlY3Rpb24tcGFyZW50XCIpLnJlbW92ZUNsYXNzKFwicC01XCIpXHJcbiAgICAgICAgICAkKCcuaW5pdGlhbHMnKS5yZW1vdmVDbGFzcygnbXgtMScpXHJcbiAgICAgICAgICAkKCcuZW50cnktbGV0dGVycycpLnJlbW92ZUNsYXNzKCdzdGlja3ktaW5pdGlhbHMnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc3Q7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpe1xyXG4gICAgdGhpcy5mYWRlSW5MZXR0ZXJzKFwiI0VudHJ5TGV0dGVyc1wiKVxyXG4gICAgdGhpcy5zY3JvbGxFZmZlY3QoKVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUl0YWxpYW5hJmZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uZmFkZXtcclxuICBvcGFjaXR5OjA7XHJcbn1cclxuXHJcbi5zdGlja3ktaW5pdGlhbHMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgLmQtbm9uZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uZGFyay1vdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICBvcGFjaXR5OiAwLjQ7XHJcblxyXG59XHJcblxyXG4uZW50cnktc2VjdGlvbi1wYXJlbnQge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmVudHJ5LWxldHRlcnMge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMS4ycHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcblxyXG4uZW50cnktZm9vdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmVudHJ5LWNvbnRlbnQge1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5lbnRyeS1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBcclxuICAgIC8vICY6YWZ0ZXIge1xyXG4gICAgLy8gICAgIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDE2JSwgMTAwJSAxNSUsIDAgNTAlLCAwIDUxJSk7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gICAgIHRvcDogMDtcclxuICAgIC8vICAgICBib3R0b206IDA7XHJcbiAgICAvLyAgICAgbGVmdDogMDtcclxuICAgIC8vICAgICByaWdodDogMDtcclxuICAgIC8vIH1cclxuICAgXHJcbn1cclxuXHJcbi5lbnRyeS1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDRweDtcclxufVxyXG5cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBOUNBO0FBZ0RBO0FBQ0E7QUFDQTtBQUNBO0FBN0RBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&\n");

/***/ })

})