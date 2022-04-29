webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EntrySection.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'EntrySection',\n  props: {},\n  data: function data() {\n    return {\n      windowTop: window.top.scrollY,\n      devTitleMoveTopValue: 25,\n      devTitleMoveRightValue: 6,\n      devTitleMoveRightOriginalValue: 6,\n      mainTitleMoveTopValue: 68,\n      mainTitleMoveLeftValue: 23,\n      mainTitleMoveLeftOriginalValue: 23\n    };\n  },\n  methods: {\n    onResize: function onResize() {\n      this.windowWidth = window.innerWidth;\n    },\n    moveElement: function moveElement(distance, topValue, moveValue, originalValue) {\n      if (topValue + 20 >= distance) {\n        moveValue = distance * 1;\n\n        if (moveValue > originalValue) {\n          return moveValue;\n        } else {\n          return originalValue;\n        }\n      }\n    },\n    onScroll: function onScroll() {\n      this.windowTop = window.top.scrollY;\n      var scrollTop = this.windowTop;\n      var docHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.entry')[0].scrollHeight;\n      var scrollPercentRounded = Math.round(scrollTop / docHeight * 100);\n      this.devTitleMoveRightValue = this.moveElement(scrollPercentRounded, this.devTitleMoveTopValue, this.devTitleMoveRightValue, this.devTitleMoveRightOriginalValue);\n      this.mainTitleMoveLeftValue = this.moveElement(scrollPercentRounded, this.mainTitleMoveTopValue, this.mainTitleMoveLeftValue, this.mainTitleMoveLeftOriginalValue);\n    }\n  },\n  mounted: function mounted() {\n    window.addEventListener(\"scroll\", this.onScroll);\n  },\n  beforeDestroy: function beforeDestroy() {\n    window.removeEventListener(\"scroll\", this.onScroll);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvRW50cnlTZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRW50cnlTZWN0aW9uLnZ1ZT9mZmVmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgbWFpbiBlbnRyeVwiIGlkPVwiZW50cnlcIj5cclxuICAgIDwhLS0gPGNhbnZhcyBpZD1cImNhbnZhcy1sZWZ0XCIgY2xhc3M9XCJjYW52YXMtbGVmdFwiPjwvY2FudmFzPiAtLT5cclxuICAgIDxjYW52YXMgaWQ9XCJjYW52YXMtcmlnaHRcIiBjbGFzcz1cImNhbnZhcy1yaWdodFwiPjwvY2FudmFzPlxyXG4gICAgPGRpdiBjbGFzcz1cImJsYWNrLXN0cm9rZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGV2LXRpdGxlXCIgOnN0eWxlPVwiJ3JpZ2h0OicgKyBkZXZUaXRsZU1vdmVSaWdodFZhbHVlICsgJyU7IHRvcDonICsgZGV2VGl0bGVNb3ZlVG9wVmFsdWUgKyAnJSdcIj5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICBXZWIgRGV2ZWxvcGVyXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tdGl0bGVcIiA6c3R5bGU9XCInbGVmdDonICsgbWFpblRpdGxlTW92ZUxlZnRWYWx1ZSArICclOyB0b3A6JyArIG1haW5UaXRsZU1vdmVUb3BWYWx1ZSArICclJ1wiPlxyXG4gICAgICAgIDxoMT5cclxuICAgICAgICAgIEpvcmdlIGRhIFNpbHZhXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93LXByaW1hcnktbGVmdFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdFbnRyeVNlY3Rpb24nLFxyXG4gIHByb3BzOiB7fSxcclxuICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgd2luZG93VG9wOiB3aW5kb3cudG9wLnNjcm9sbFksXHJcbiAgICAgICAgICBkZXZUaXRsZU1vdmVUb3BWYWx1ZTogMjUsXHJcbiAgICAgICAgICBkZXZUaXRsZU1vdmVSaWdodFZhbHVlOiA2LFxyXG4gICAgICAgICAgZGV2VGl0bGVNb3ZlUmlnaHRPcmlnaW5hbFZhbHVlOiA2LFxyXG4gICAgICAgICAgbWFpblRpdGxlTW92ZVRvcFZhbHVlOiA2OCxcclxuICAgICAgICAgIG1haW5UaXRsZU1vdmVMZWZ0VmFsdWU6IDIzLFxyXG4gICAgICAgICAgbWFpblRpdGxlTW92ZUxlZnRPcmlnaW5hbFZhbHVlOiAyMyxcclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvblJlc2l6ZSgpIHtcclxuICAgICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVFbGVtZW50KGRpc3RhbmNlLCB0b3BWYWx1ZSwgbW92ZVZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XHJcbiAgICAgIGlmKHRvcFZhbHVlICsgMjAgPj0gZGlzdGFuY2UpIHtcclxuICAgICAgICBtb3ZlVmFsdWUgPSBkaXN0YW5jZSAqIDE7XHJcbiAgICAgICAgaWYobW92ZVZhbHVlID4gb3JpZ2luYWxWYWx1ZSApIHtcclxuICAgICAgICAgIHJldHVybiBtb3ZlVmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBvcmlnaW5hbFZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25TY3JvbGwoKXtcclxuICAgICAgdGhpcy53aW5kb3dUb3AgPSB3aW5kb3cudG9wLnNjcm9sbFk7XHJcbiAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLndpbmRvd1RvcDtcclxuICAgICAgbGV0IGRvY0hlaWdodCA9ICQoJy5lbnRyeScpWzBdLnNjcm9sbEhlaWdodDtcclxuICAgICAgbGV0IHNjcm9sbFBlcmNlbnRSb3VuZGVkID0gTWF0aC5yb3VuZCgoc2Nyb2xsVG9wIC8gZG9jSGVpZ2h0KSAqIDEwMCk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmRldlRpdGxlTW92ZVJpZ2h0VmFsdWUgPSB0aGlzLm1vdmVFbGVtZW50KHNjcm9sbFBlcmNlbnRSb3VuZGVkLCB0aGlzLmRldlRpdGxlTW92ZVRvcFZhbHVlLCB0aGlzLmRldlRpdGxlTW92ZVJpZ2h0VmFsdWUsIHRoaXMuZGV2VGl0bGVNb3ZlUmlnaHRPcmlnaW5hbFZhbHVlKTtcclxuICAgICAgdGhpcy5tYWluVGl0bGVNb3ZlTGVmdFZhbHVlID0gdGhpcy5tb3ZlRWxlbWVudChzY3JvbGxQZXJjZW50Um91bmRlZCwgdGhpcy5tYWluVGl0bGVNb3ZlVG9wVmFsdWUsIHRoaXMubWFpblRpdGxlTW92ZUxlZnRWYWx1ZSwgdGhpcy5tYWluVGl0bGVNb3ZlTGVmdE9yaWdpbmFsVmFsdWUpO1xyXG5cclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsKVxyXG4gIH0sXHJcbiAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwiQC9hc3NldHMvX3ZhcmlhYmxlcy5zY3NzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbm90b24mZmFtaWx5PVJhbGV3YXkmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4ubWFpbiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gIC8vIHRvcDogNjglO1xyXG4gIC8vIGxlZnQ6IDUyJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgJjpob3ZlciB7XHJcbiAgICAuc2hhZG93LXByaW1hcnktbGVmdCB7XHJcbiAgICAgIC8vIGFuaW1hdGlvbjogdGlsdCAzcyBpbmZpbml0ZSBmb3J3YXJkcztcclxuLy8gcG9seWdvbigwIDE3JSwgMTAwJSAwJSwgOTUlIDEwMCUsIDAlIDg1JSlcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDE3JSwgMTAwJSAwJSwgOTUlIDEwMCUsIDAlIDg1JSk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGxpbmVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDNweCA2cHggMnB4IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCA5OCUgMTAwJSwgMCUgMTAwJSk7XHJcbiAgICAvLyBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDk4JSAxMDAlLCAwJSAxMDAlKTtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtN2RlZyk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICAuc2hhZG93LXByaW1hcnktbGVmdCB7XHJcbiAgICB0b3A6IC0zNSU7XHJcbiAgICBib3R0b206IC0xMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IC0xMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRzZWNvbmRhcnkgMCUsICRzZWNvbmRhcnkgMjUlLCAkcHJpbWFyeSAyNSUsICRwcmltYXJ5IDEwMCUpOyAgO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMjUlLCA5NiUgMCUsIDkzJSAxMDAlLCAwJSA4MCUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC03ZGVnKTtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xyXG4gIH1cclxufVxyXG5cclxuLmRldi10aXRsZSB7XHJcbiAgICAvLyB0b3A6IDI1JTtcclxuICAgIHJpZ2h0OiA2JTtcclxuICAgIC8vIHJpZ2h0OiB0aGlzLm1vdmVSaWdodFZhbGllXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xcyBsaW5lcjtcclxuXHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgYm90dG9tOiAtMXB4O1xyXG4gICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeTtcclxuICAgICAgICB9ICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogXCJNb25vdG9uXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHBhZGRpbmc6IDdweCA3cHggMnB4IDdweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcclxuXHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiV2ViIERldmVsb3BlclwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtMzAwJTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB0aWx0IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTIwZGVnKTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtMjEuNWRlZyk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTIwZGVnKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtMTkuNWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC0yMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FudmFzLWxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB0b3A6IDA7XHJcbiAgLy8gYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgLy8gY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxOTAlIDAlLCAxMDAlIDEwMCUsIDBweCAxMDAlKTtcclxufVxyXG5cclxuLmNhbnZhcy1yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZDogXHJcbiAgbGluZWFyLWdyYWRpZW50KDI5MGRlZywgJHNlY29uZGFyeSAwJSwgJHNlY29uZGFyeSA1NSUsICRibGFjayAyNSUsICRibGFjayA3NSUsICRwcmltYXJ5IDc1JSlcclxuICAvLyBsaW5lYXItZ3JhZGllbnQoMjkwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDI1JSwgcmdiYSgwLDAsMCwxKSAyNSUsIHJnYmEoMCwwLDAsMSkgMzUlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDM1JSk7XHJcbiAgLy8gbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkcHJpbWFyeSAwJSwgJHByaW1hcnkgMjUlLCAkc2Vjb25kYXJ5IDI1JSk7IDtcclxuICAvLyBjbGlwLXBhdGg6IHBvbHlnb24oMTAlIDAlLCAxMDAlIDAlLCAxMDAlIDEwMCUsIDBweCAxMDAlKTtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYmxhY2stc3Ryb2tlIHtcclxuICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzAlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGhlaWdodDogMTg1cHg7XHJcbiAgdHJhbnNmb3JtOiBza2V3KDBkZWcsIC03ZGVnKTtcclxufVxyXG5cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUF4QkE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&\n");

/***/ })

})