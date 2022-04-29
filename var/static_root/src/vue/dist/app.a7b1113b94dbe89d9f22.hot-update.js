webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EntrySection.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var scroll_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scroll-watcher */ \"./node_modules/scroll-watcher/dist/scroll-watcher.min.js\");\n/* harmony import */ var scroll_watcher__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scroll_watcher__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'EntrySection',\n  props: {},\n  data: function data() {\n    return {\n      windowTop: window.top.scrollY,\n      devTitleMoveTopValue: 25,\n      devTitleMoveRightValue: 6,\n      devTitleMoveRightOriginalValue: 6,\n      mainTitleMoveTopValue: 68,\n      mainTitleMoveLeftValue: 23,\n      mainTitleMoveLeftOriginalValue: 23\n    };\n  },\n  methods: {\n    onResize: function onResize() {\n      this.windowWidth = window.innerWidth;\n    },\n    moveElement: function moveElement(distance, topValue, moveValue, originalValue) {\n      if (topValue + 200 >= distance) {\n        moveValue = distance * 1.05;\n\n        if (moveValue > originalValue) {\n          return moveValue;\n        } else {\n          return originalValue;\n        }\n      }\n    },\n    onScroll: function onScroll() {\n      this.windowTop = window.top.scrollY;\n      var scrollTop = this.windowTop;\n      var docHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.entry')[0].scrollHeight;\n      var scrollPercentRounded = Math.round(scrollTop / docHeight * 100);\n      this.devTitleMoveRightValue = this.moveElement(scrollPercentRounded, this.devTitleMoveTopValue, this.devTitleMoveRightValue, this.devTitleMoveRightOriginalValue);\n      this.mainTitleMoveLeftValue = this.moveElement(scrollPercentRounded, this.mainTitleMoveTopValue, this.mainTitleMoveLeftValue, this.mainTitleMoveLeftOriginalValue);\n    }\n  },\n  created: function created() {\n    var scroll = new scroll_watcher__WEBPACK_IMPORTED_MODULE_1___default.a();\n    console.log(scroll);\n    scroll.watch(\"#dev-title\").on(\"enter\", function (evt) {\n      console.log(\"I'm partially inside viewport\");\n      console.log(evt);\n    }).on(\"enter:full\", function (evt) {\n      console.log(\"I'm entirely within the viewport\");\n      console.log(evt);\n    }).on(\"exit:partial\", function (evt) {\n      console.log(\"I'm partially out of viewport\");\n      console.log(evt);\n    }).on(\"exit\", function (evt) {\n      console.log(\"I'm out of viewport\");\n      console.log(evt);\n    });\n  },\n  mounted: function mounted() {\n    window.addEventListener(\"scroll\", this.onScroll);\n  },\n  beforeDestroy: function beforeDestroy() {\n    window.removeEventListener(\"scroll\", this.onScroll);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvRW50cnlTZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRW50cnlTZWN0aW9uLnZ1ZT9mZmVmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgbWFpbiBlbnRyeVwiIGlkPVwiZW50cnlcIj5cclxuICAgIDwhLS0gPGNhbnZhcyBpZD1cImNhbnZhcy1sZWZ0XCIgY2xhc3M9XCJjYW52YXMtbGVmdFwiPjwvY2FudmFzPiAtLT5cclxuICAgIDxjYW52YXMgaWQ9XCJjYW52YXMtcmlnaHRcIiBjbGFzcz1cImNhbnZhcy1yaWdodFwiPjwvY2FudmFzPlxyXG4gICAgPGRpdiBjbGFzcz1cImJsYWNrLXN0cm9rZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGV2LXRpdGxlXCIgaWQ9XCJkZXYtdGl0bGVcIiA6c3R5bGU9XCIncmlnaHQ6JyArIGRldlRpdGxlTW92ZVJpZ2h0VmFsdWUgKyAnJTsgdG9wOicgKyBkZXZUaXRsZU1vdmVUb3BWYWx1ZSArICclJ1wiPlxyXG4gICAgICAgIDxoMT5cclxuICAgICAgICAgIFdlYiBEZXZlbG9wZXJcclxuICAgICAgICA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWFpbi10aXRsZVwiIDpzdHlsZT1cIidsZWZ0OicgKyBtYWluVGl0bGVNb3ZlTGVmdFZhbHVlICsgJyU7IHRvcDonICsgbWFpblRpdGxlTW92ZVRvcFZhbHVlICsgJyUnXCI+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgSm9yZ2UgZGEgU2lsdmFcclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGFkb3ctcHJpbWFyeS1sZWZ0XCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgU2Nyb2xsV2F0Y2hlciBmcm9tICdzY3JvbGwtd2F0Y2hlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0VudHJ5U2VjdGlvbicsXHJcbiAgcHJvcHM6IHt9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB3aW5kb3dUb3A6IHdpbmRvdy50b3Auc2Nyb2xsWSxcclxuICAgICAgICAgIGRldlRpdGxlTW92ZVRvcFZhbHVlOiAyNSxcclxuICAgICAgICAgIGRldlRpdGxlTW92ZVJpZ2h0VmFsdWU6IDYsXHJcbiAgICAgICAgICBkZXZUaXRsZU1vdmVSaWdodE9yaWdpbmFsVmFsdWU6IDYsXHJcbiAgICAgICAgICBtYWluVGl0bGVNb3ZlVG9wVmFsdWU6IDY4LFxyXG4gICAgICAgICAgbWFpblRpdGxlTW92ZUxlZnRWYWx1ZTogMjMsXHJcbiAgICAgICAgICBtYWluVGl0bGVNb3ZlTGVmdE9yaWdpbmFsVmFsdWU6IDIzLFxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uUmVzaXplKCkge1xyXG4gICAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcclxuICAgIH0sXHJcblxyXG4gICAgbW92ZUVsZW1lbnQoZGlzdGFuY2UsIHRvcFZhbHVlLCBtb3ZlVmFsdWUsIG9yaWdpbmFsVmFsdWUpIHtcclxuICAgICAgaWYodG9wVmFsdWUgKyAyMDAgPj0gZGlzdGFuY2UpIHtcclxuICAgICAgICBtb3ZlVmFsdWUgPSBkaXN0YW5jZSAqIDEuMDU7XHJcbiAgICAgICAgaWYobW92ZVZhbHVlID4gb3JpZ2luYWxWYWx1ZSApIHtcclxuICAgICAgICAgIHJldHVybiBtb3ZlVmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBvcmlnaW5hbFZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25TY3JvbGwoKXtcclxuICAgICAgdGhpcy53aW5kb3dUb3AgPSB3aW5kb3cudG9wLnNjcm9sbFk7XHJcbiAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLndpbmRvd1RvcDtcclxuICAgICAgbGV0IGRvY0hlaWdodCA9ICQoJy5lbnRyeScpWzBdLnNjcm9sbEhlaWdodDtcclxuICAgICAgbGV0IHNjcm9sbFBlcmNlbnRSb3VuZGVkID0gTWF0aC5yb3VuZCgoc2Nyb2xsVG9wIC8gZG9jSGVpZ2h0KSAqIDEwMCk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmRldlRpdGxlTW92ZVJpZ2h0VmFsdWUgPSB0aGlzLm1vdmVFbGVtZW50KHNjcm9sbFBlcmNlbnRSb3VuZGVkLCB0aGlzLmRldlRpdGxlTW92ZVRvcFZhbHVlLCB0aGlzLmRldlRpdGxlTW92ZVJpZ2h0VmFsdWUsIHRoaXMuZGV2VGl0bGVNb3ZlUmlnaHRPcmlnaW5hbFZhbHVlKTtcclxuICAgICAgdGhpcy5tYWluVGl0bGVNb3ZlTGVmdFZhbHVlID0gdGhpcy5tb3ZlRWxlbWVudChzY3JvbGxQZXJjZW50Um91bmRlZCwgdGhpcy5tYWluVGl0bGVNb3ZlVG9wVmFsdWUsIHRoaXMubWFpblRpdGxlTW92ZUxlZnRWYWx1ZSwgdGhpcy5tYWluVGl0bGVNb3ZlTGVmdE9yaWdpbmFsVmFsdWUpO1xyXG5cclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB2YXIgc2Nyb2xsID0gbmV3IFNjcm9sbFdhdGNoZXIoKTtcclxuICAgIGNvbnNvbGUubG9nKHNjcm9sbClcclxuICAgIHNjcm9sbFxyXG4gICAgICAud2F0Y2goXCIjZGV2LXRpdGxlXCIpXHJcbiAgICAgIC5vbihcImVudGVyXCIsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSSdtIHBhcnRpYWxseSBpbnNpZGUgdmlld3BvcnRcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZ0KVxyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJlbnRlcjpmdWxsXCIsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSSdtIGVudGlyZWx5IHdpdGhpbiB0aGUgdmlld3BvcnRcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZ0KVxyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJleGl0OnBhcnRpYWxcIiwgZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJJ20gcGFydGlhbGx5IG91dCBvZiB2aWV3cG9ydFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhldnQpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcImV4aXRcIiwgZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJJ20gb3V0IG9mIHZpZXdwb3J0XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2dClcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbClcclxuICB9LFxyXG4gIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsKVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCBcIkAvYXNzZXRzL192YXJpYWJsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb25vdG9uJmZhbWlseT1SYWxld2F5JmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLm1haW4ge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5tYWluLXRpdGxlIHtcclxuICAvLyB0b3A6IDY4JTtcclxuICAvLyBsZWZ0OiA1MiU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICY6aG92ZXIge1xyXG4gICAgLnNoYWRvdy1wcmltYXJ5LWxlZnQge1xyXG4gICAgICAvLyBhbmltYXRpb246IHRpbHQgM3MgaW5maW5pdGUgZm9yd2FyZHM7XHJcbi8vIHBvbHlnb24oMCAxNyUsIDEwMCUgMCUsIDk1JSAxMDAlLCAwJSA4NSUpXHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAxNyUsIDEwMCUgMCUsIDk1JSAxMDAlLCAwJSA4NSUpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xcyBsaW5lcjtcclxuICAgIH1cclxuICB9XHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAzcHggNnB4IDJweCA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgOTglIDEwMCUsIDAlIDEwMCUpO1xyXG4gICAgLy8gY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCA5OCUgMTAwJSwgMCUgMTAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTdkZWcpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgJHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbiAgLnNoYWRvdy1wcmltYXJ5LWxlZnQge1xyXG4gICAgdG9wOiAtMzUlO1xyXG4gICAgYm90dG9tOiAtMTAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAtMTAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkc2Vjb25kYXJ5IDAlLCAkc2Vjb25kYXJ5IDI1JSwgJHByaW1hcnkgMjUlLCAkcHJpbWFyeSAxMDAlKTsgIDtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDI1JSwgOTYlIDAlLCA5MyUgMTAwJSwgMCUgODAlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtN2RlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcclxuICB9XHJcbn1cclxuXHJcbi5kZXYtdGl0bGUge1xyXG4gICAgLy8gdG9wOiAyNSU7XHJcbiAgICByaWdodDogNiU7XHJcbiAgICAvLyByaWdodDogdGhpcy5tb3ZlUmlnaHRWYWxpZVxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRyYW5zaXRpb246IDAuMXMgbGluZXI7XHJcblxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgIGJvdHRvbTogLTFweDtcclxuICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnk7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTW9ub3RvblwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwYWRkaW5nOiA3cHggN3B4IDJweCA3cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XHJcblxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIldlYiBEZXZlbG9wZXJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogLTMwMCU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdGlsdCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC0yMGRlZyk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTIxLjVkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC0yMGRlZyk7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTE5LjVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtMjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmNhbnZhcy1sZWZ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgdG9wOiAwO1xyXG4gIC8vIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gIC8vIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMTkwJSAwJSwgMTAwJSAxMDAlLCAwcHggMTAwJSk7XHJcbn1cclxuXHJcbi5jYW52YXMtcmlnaHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQ6IFxyXG4gIGxpbmVhci1ncmFkaWVudCgyOTBkZWcsICRzZWNvbmRhcnkgMCUsICRzZWNvbmRhcnkgNTUlLCAkYmxhY2sgMjUlLCAkYmxhY2sgNzUlLCAkcHJpbWFyeSA3NSUpXHJcbiAgLy8gbGluZWFyLWdyYWRpZW50KDI5MGRlZywgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAyNSUsIHJnYmEoMCwwLDAsMSkgMjUlLCByZ2JhKDAsMCwwLDEpIDM1JSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAzNSUpO1xyXG4gIC8vIGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHByaW1hcnkgMCUsICRwcmltYXJ5IDI1JSwgJHNlY29uZGFyeSAyNSUpOyA7XHJcbiAgLy8gY2xpcC1wYXRoOiBwb2x5Z29uKDEwJSAwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwcHggMTAwJSk7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJsYWNrLXN0cm9rZSB7XHJcbiAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcwJTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBoZWlnaHQ6IDE4NXB4O1xyXG4gIHRyYW5zZm9ybTogc2tldygwZGVnLCAtN2RlZyk7XHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQXhCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&\n");

/***/ })

})