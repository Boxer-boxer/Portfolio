webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EntrySection.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var scroll_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scroll-watcher */ \"./node_modules/scroll-watcher/dist/scroll-watcher.min.js\");\n/* harmony import */ var scroll_watcher__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scroll_watcher__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'EntrySection',\n  props: {},\n  data: function data() {\n    return {\n      windowTop: window.top.scrollY,\n      devTitleMoveTopValue: 25,\n      devTitleMoveRightValue: 6,\n      devTitleMoveRightOriginalValue: 6,\n      mainTitleMoveTopValue: 68,\n      mainTitleMoveLeftValue: 23,\n      mainTitleMoveLeftOriginalValue: 23\n    };\n  },\n  methods: {\n    onResize: function onResize() {\n      this.windowWidth = window.innerWidth;\n    },\n    moveElement: function moveElement(distance, topValue, moveValue, originalValue) {\n      if (topValue + 200 >= distance) {\n        moveValue = distance * 1.05;\n\n        if (moveValue > originalValue) {\n          return moveValue;\n        } else {\n          return originalValue;\n        }\n      }\n    },\n    onScroll: function onScroll() {\n      this.windowTop = window.top.scrollY;\n      var scrollTop = this.windowTop;\n      var docHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.entry')[0].scrollHeight;\n      var scrollPercentRounded = Math.round(scrollTop / docHeight * 100);\n      this.devTitleMoveRightValue = this.moveElement(scrollPercentRounded, this.devTitleMoveTopValue, this.devTitleMoveRightValue, this.devTitleMoveRightOriginalValue);\n      this.mainTitleMoveLeftValue = this.moveElement(scrollPercentRounded, this.mainTitleMoveTopValue, this.mainTitleMoveLeftValue, this.mainTitleMoveLeftOriginalValue);\n    }\n  },\n  mounted: function mounted() {\n    window.addEventListener(\"scroll\", this.onScroll);\n  },\n  beforeDestroy: function beforeDestroy() {\n    window.removeEventListener(\"scroll\", this.onScroll);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvRW50cnlTZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRW50cnlTZWN0aW9uLnZ1ZT9mZmVmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgbWFpbiBlbnRyeVwiIGlkPVwiZW50cnlcIj5cclxuICAgIDwhLS0gPGNhbnZhcyBpZD1cImNhbnZhcy1sZWZ0XCIgY2xhc3M9XCJjYW52YXMtbGVmdFwiPjwvY2FudmFzPiAtLT5cclxuICAgIDxjYW52YXMgaWQ9XCJjYW52YXMtcmlnaHRcIiBjbGFzcz1cImNhbnZhcy1yaWdodFwiPjwvY2FudmFzPlxyXG4gICAgPGRpdiBjbGFzcz1cImJsYWNrLXN0cm9rZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGV2LXRpdGxlXCIgOnN0eWxlPVwiJ3JpZ2h0OicgKyBkZXZUaXRsZU1vdmVSaWdodFZhbHVlICsgJyU7IHRvcDonICsgZGV2VGl0bGVNb3ZlVG9wVmFsdWUgKyAnJSdcIj5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICBXZWIgRGV2ZWxvcGVyXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tdGl0bGVcIiA6c3R5bGU9XCInbGVmdDonICsgbWFpblRpdGxlTW92ZUxlZnRWYWx1ZSArICclOyB0b3A6JyArIG1haW5UaXRsZU1vdmVUb3BWYWx1ZSArICclJ1wiPlxyXG4gICAgICAgIDxoMT5cclxuICAgICAgICAgIEpvcmdlIGRhIFNpbHZhXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93LXByaW1hcnktbGVmdFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xyXG5pbXBvcnQgJ3Njcm9sbC13YXRjaGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnRW50cnlTZWN0aW9uJyxcclxuICBwcm9wczoge30sXHJcbiAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHdpbmRvd1RvcDogd2luZG93LnRvcC5zY3JvbGxZLFxyXG4gICAgICAgICAgZGV2VGl0bGVNb3ZlVG9wVmFsdWU6IDI1LFxyXG4gICAgICAgICAgZGV2VGl0bGVNb3ZlUmlnaHRWYWx1ZTogNixcclxuICAgICAgICAgIGRldlRpdGxlTW92ZVJpZ2h0T3JpZ2luYWxWYWx1ZTogNixcclxuICAgICAgICAgIG1haW5UaXRsZU1vdmVUb3BWYWx1ZTogNjgsXHJcbiAgICAgICAgICBtYWluVGl0bGVNb3ZlTGVmdFZhbHVlOiAyMyxcclxuICAgICAgICAgIG1haW5UaXRsZU1vdmVMZWZ0T3JpZ2luYWxWYWx1ZTogMjMsXHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25SZXNpemUoKSB7XHJcbiAgICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgfSxcclxuXHJcbiAgICBtb3ZlRWxlbWVudChkaXN0YW5jZSwgdG9wVmFsdWUsIG1vdmVWYWx1ZSwgb3JpZ2luYWxWYWx1ZSkge1xyXG4gICAgICBpZih0b3BWYWx1ZSArIDIwMCA+PSBkaXN0YW5jZSkge1xyXG4gICAgICAgIG1vdmVWYWx1ZSA9IGRpc3RhbmNlICogMS4wNTtcclxuICAgICAgICBpZihtb3ZlVmFsdWUgPiBvcmlnaW5hbFZhbHVlICkge1xyXG4gICAgICAgICAgcmV0dXJuIG1vdmVWYWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG9yaWdpbmFsVmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvblNjcm9sbCgpe1xyXG4gICAgICB0aGlzLndpbmRvd1RvcCA9IHdpbmRvdy50b3Auc2Nyb2xsWTtcclxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMud2luZG93VG9wO1xyXG4gICAgICBsZXQgZG9jSGVpZ2h0ID0gJCgnLmVudHJ5JylbMF0uc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICBsZXQgc2Nyb2xsUGVyY2VudFJvdW5kZWQgPSBNYXRoLnJvdW5kKChzY3JvbGxUb3AgLyBkb2NIZWlnaHQpICogMTAwKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuZGV2VGl0bGVNb3ZlUmlnaHRWYWx1ZSA9IHRoaXMubW92ZUVsZW1lbnQoc2Nyb2xsUGVyY2VudFJvdW5kZWQsIHRoaXMuZGV2VGl0bGVNb3ZlVG9wVmFsdWUsIHRoaXMuZGV2VGl0bGVNb3ZlUmlnaHRWYWx1ZSwgdGhpcy5kZXZUaXRsZU1vdmVSaWdodE9yaWdpbmFsVmFsdWUpO1xyXG4gICAgICB0aGlzLm1haW5UaXRsZU1vdmVMZWZ0VmFsdWUgPSB0aGlzLm1vdmVFbGVtZW50KHNjcm9sbFBlcmNlbnRSb3VuZGVkLCB0aGlzLm1haW5UaXRsZU1vdmVUb3BWYWx1ZSwgdGhpcy5tYWluVGl0bGVNb3ZlTGVmdFZhbHVlLCB0aGlzLm1haW5UaXRsZU1vdmVMZWZ0T3JpZ2luYWxWYWx1ZSk7XHJcblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpXHJcbiAgfSxcclxuICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbClcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCJAL2Fzc2V0cy9fdmFyaWFibGVzLnNjc3NcIjtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9ub3RvbiZmYW1pbHk9UmFsZXdheSZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5tYWluIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgLy8gdG9wOiA2OCU7XHJcbiAgLy8gbGVmdDogNTIlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAmOmhvdmVyIHtcclxuICAgIC5zaGFkb3ctcHJpbWFyeS1sZWZ0IHtcclxuICAgICAgLy8gYW5pbWF0aW9uOiB0aWx0IDNzIGluZmluaXRlIGZvcndhcmRzO1xyXG4vLyBwb2x5Z29uKDAgMTclLCAxMDAlIDAlLCA5NSUgMTAwJSwgMCUgODUlKVxyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMTclLCAxMDAlIDAlLCA5NSUgMTAwJSwgMCUgODUlKTtcclxuICAgIHRyYW5zaXRpb246IDAuMXMgbGluZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogM3B4IDZweCAycHggNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDk4JSAxMDAlLCAwJSAxMDAlKTtcclxuICAgIC8vIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgOTglIDEwMCUsIDAlIDEwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC03ZGVnKTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICRibGFjaztcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICR3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIC5zaGFkb3ctcHJpbWFyeS1sZWZ0IHtcclxuICAgIHRvcDogLTM1JTtcclxuICAgIGJvdHRvbTogLTEwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogLTEwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHNlY29uZGFyeSAwJSwgJHNlY29uZGFyeSAyNSUsICRwcmltYXJ5IDI1JSwgJHByaW1hcnkgMTAwJSk7ICA7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAyNSUsIDk2JSAwJSwgOTMlIDEwMCUsIDAlIDgwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTdkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZGV2LXRpdGxlIHtcclxuICAgIC8vIHRvcDogMjUlO1xyXG4gICAgcmlnaHQ6IDYlO1xyXG4gICAgLy8gcmlnaHQ6IHRoaXMubW92ZVJpZ2h0VmFsaWVcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGxpbmVyO1xyXG5cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICBib3R0b206IC0xcHg7XHJcbiAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gICAgICAgIH0gIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbm90b25cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcGFkZGluZzogN3B4IDdweCAycHggN3B4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xyXG5cclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJXZWIgRGV2ZWxvcGVyXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC0zMDAlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHRpbHQge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtMjBkZWcpO1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC0yMS41ZGVnKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtMjBkZWcpO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC0xOS41ZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTIwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5jYW52YXMtbGVmdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRvcDogMDtcclxuICAvLyBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAvLyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDE5MCUgMCUsIDEwMCUgMTAwJSwgMHB4IDEwMCUpO1xyXG59XHJcblxyXG4uY2FudmFzLXJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kOiBcclxuICBsaW5lYXItZ3JhZGllbnQoMjkwZGVnLCAkc2Vjb25kYXJ5IDAlLCAkc2Vjb25kYXJ5IDU1JSwgJGJsYWNrIDI1JSwgJGJsYWNrIDc1JSwgJHByaW1hcnkgNzUlKVxyXG4gIC8vIGxpbmVhci1ncmFkaWVudCgyOTBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMjUlLCByZ2JhKDAsMCwwLDEpIDI1JSwgcmdiYSgwLDAsMCwxKSAzNSUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMzUlKTtcclxuICAvLyBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRwcmltYXJ5IDAlLCAkcHJpbWFyeSAyNSUsICRzZWNvbmRhcnkgMjUlKTsgO1xyXG4gIC8vIGNsaXAtcGF0aDogcG9seWdvbigxMCUgMCUsIDEwMCUgMCUsIDEwMCUgMTAwJSwgMHB4IDEwMCUpO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ibGFjay1zdHJva2Uge1xyXG4gIGJhY2tncm91bmQ6ICRibGFjaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3MCU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxODVweDtcclxuICB0cmFuc2Zvcm06IHNrZXcoMGRlZywgLTdkZWcpO1xyXG59XHJcblxyXG48L3N0eWxlPlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUF4QkE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&\n");

/***/ })

})