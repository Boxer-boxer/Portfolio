webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EntrySection.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'EntrySection',\n  props: {},\n  data: function data() {\n    return {\n      windowTop: window.top.scrollY,\n      devTitleMoveTopValue: 25,\n      devTitleMoveRightValue: 6,\n      devTitleMoveRightOriginalValue: 6,\n      mainTitleMoveTopValue: 68,\n      mainTitleMoveLeftValue: 23,\n      mainTitleMoveLeftOriginalValue: 23\n    };\n  },\n  methods: {\n    onResize: function onResize() {\n      this.windowWidth = window.innerWidth;\n    },\n    moveElement: function moveElement(distance, topValue, moveValue, originalValue) {\n      // console.log('topValue')\n      // console.log(topValue)\n      // console.log('distance')\n      console.log(distance);\n\n      if (topValue >= distance) {\n        moveValue = distance * 2.5;\n\n        if (moveValue > originalValue) {\n          return moveValue;\n        } else {\n          return originalValue;\n        }\n      }\n    },\n    onScroll: function onScroll() {\n      this.windowTop = window.top.scrollY;\n      var scrollTop = this.windowTop;\n      var docHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main')[0].scrollHeight;\n      var winHeight = window.innerHeight;\n      var scrollPercent = scrollTop / (docHeight - winHeight);\n      var scrollPercentRounded = Math.round(scrollPercent * 100); // this.devTitleMoveRightValue = this.moveElement(scrollPercentRounded, this.devTitleMoveTopValue, this.devTitleMoveRightValue, this.devTitleMoveRightOriginalValue);\n\n      this.mainTitleMoveLeftValue = this.moveElement(scrollPercentRounded, this.mainTitleMoveTopValue, this.mainTitleMoveLeftValue, this.mainTitleMoveLeftOriginalValue);\n    }\n  },\n  mounted: function mounted() {\n    window.addEventListener(\"scroll\", this.onScroll);\n  },\n  beforeDestroy: function beforeDestroy() {\n    window.removeEventListener(\"scroll\", this.onScroll);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvRW50cnlTZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRW50cnlTZWN0aW9uLnZ1ZT9mZmVmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgbWFpblwiIGlkPVwiZW50cnlcIj5cclxuICAgIDwhLS0gPGNhbnZhcyBpZD1cImNhbnZhcy1sZWZ0XCIgY2xhc3M9XCJjYW52YXMtbGVmdFwiPjwvY2FudmFzPiAtLT5cclxuICAgIDxjYW52YXMgaWQ9XCJjYW52YXMtcmlnaHRcIiBjbGFzcz1cImNhbnZhcy1yaWdodFwiPjwvY2FudmFzPlxyXG4gICAgPGRpdiBjbGFzcz1cImJsYWNrLXN0cm9rZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGV2LXRpdGxlXCIgOnN0eWxlPVwiJ3JpZ2h0OicgKyBkZXZUaXRsZU1vdmVSaWdodFZhbHVlICsgJyU7IHRvcDonICsgZGV2VGl0bGVNb3ZlVG9wVmFsdWUgKyAnJSdcIj5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICBXZWIgRGV2ZWxvcGVyXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tdGl0bGVcIiA6c3R5bGU9XCInbGVmdDonICsgbWFpblRpdGxlTW92ZUxlZnRWYWx1ZSArICclOyB0b3A6JyArIG1haW5UaXRsZU1vdmVUb3BWYWx1ZSArICclJ1wiPlxyXG4gICAgICAgIDxoMT5cclxuICAgICAgICAgIEpvcmdlIGRhIFNpbHZhXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93LXByaW1hcnktbGVmdFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdFbnRyeVNlY3Rpb24nLFxyXG4gIHByb3BzOiB7fSxcclxuICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgd2luZG93VG9wOiB3aW5kb3cudG9wLnNjcm9sbFksXHJcbiAgICAgICAgICBkZXZUaXRsZU1vdmVUb3BWYWx1ZTogMjUsXHJcbiAgICAgICAgICBkZXZUaXRsZU1vdmVSaWdodFZhbHVlOiA2LFxyXG4gICAgICAgICAgZGV2VGl0bGVNb3ZlUmlnaHRPcmlnaW5hbFZhbHVlOiA2LFxyXG4gICAgICAgICAgbWFpblRpdGxlTW92ZVRvcFZhbHVlOiA2OCxcclxuICAgICAgICAgIG1haW5UaXRsZU1vdmVMZWZ0VmFsdWU6IDIzLFxyXG4gICAgICAgICAgbWFpblRpdGxlTW92ZUxlZnRPcmlnaW5hbFZhbHVlOiAyMyxcclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvblJlc2l6ZSgpIHtcclxuICAgICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVFbGVtZW50KGRpc3RhbmNlLCB0b3BWYWx1ZSwgbW92ZVZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0b3BWYWx1ZScpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRvcFZhbHVlKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZygnZGlzdGFuY2UnKVxyXG4gICAgICBjb25zb2xlLmxvZyhkaXN0YW5jZSlcclxuICAgICAgaWYodG9wVmFsdWUgPj0gZGlzdGFuY2UpIHtcclxuICAgICAgICBtb3ZlVmFsdWUgPSBkaXN0YW5jZSAqIDIuNTtcclxuICAgICAgICBpZihtb3ZlVmFsdWUgPiBvcmlnaW5hbFZhbHVlICkge1xyXG4gICAgICAgICAgcmV0dXJuIG1vdmVWYWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG9yaWdpbmFsVmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvblNjcm9sbCgpe1xyXG4gICAgICB0aGlzLndpbmRvd1RvcCA9IHdpbmRvdy50b3Auc2Nyb2xsWTtcclxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMud2luZG93VG9wO1xyXG4gICAgICBsZXQgZG9jSGVpZ2h0ID0gJCgnLm1haW4nKVswXS5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgIGxldCB3aW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIGxldCBzY3JvbGxQZXJjZW50ID0gc2Nyb2xsVG9wIC8gKGRvY0hlaWdodCAtIHdpbkhlaWdodCk7XHJcbiAgICAgIGxldCBzY3JvbGxQZXJjZW50Um91bmRlZCA9IE1hdGgucm91bmQoc2Nyb2xsUGVyY2VudCAqIDEwMCk7XHJcblxyXG4gICAgICAvLyB0aGlzLmRldlRpdGxlTW92ZVJpZ2h0VmFsdWUgPSB0aGlzLm1vdmVFbGVtZW50KHNjcm9sbFBlcmNlbnRSb3VuZGVkLCB0aGlzLmRldlRpdGxlTW92ZVRvcFZhbHVlLCB0aGlzLmRldlRpdGxlTW92ZVJpZ2h0VmFsdWUsIHRoaXMuZGV2VGl0bGVNb3ZlUmlnaHRPcmlnaW5hbFZhbHVlKTtcclxuICAgICAgdGhpcy5tYWluVGl0bGVNb3ZlTGVmdFZhbHVlID0gdGhpcy5tb3ZlRWxlbWVudChzY3JvbGxQZXJjZW50Um91bmRlZCwgdGhpcy5tYWluVGl0bGVNb3ZlVG9wVmFsdWUsIHRoaXMubWFpblRpdGxlTW92ZUxlZnRWYWx1ZSwgdGhpcy5tYWluVGl0bGVNb3ZlTGVmdE9yaWdpbmFsVmFsdWUpO1xyXG5cclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsKVxyXG4gIH0sXHJcbiAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwiQC9hc3NldHMvX3ZhcmlhYmxlcy5zY3NzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbm90b24mZmFtaWx5PVJhbGV3YXkmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4ubWFpbiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gIC8vIHRvcDogNjglO1xyXG4gIC8vIGxlZnQ6IDUyJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgJjpob3ZlciB7XHJcbiAgICAuc2hhZG93LXByaW1hcnktbGVmdCB7XHJcbiAgICAgIC8vIGFuaW1hdGlvbjogdGlsdCAzcyBpbmZpbml0ZSBmb3J3YXJkcztcclxuLy8gcG9seWdvbigwIDE3JSwgMTAwJSAwJSwgOTUlIDEwMCUsIDAlIDg1JSlcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDE3JSwgMTAwJSAwJSwgOTUlIDEwMCUsIDAlIDg1JSk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDNweCA2cHggMnB4IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCA5OCUgMTAwJSwgMCUgMTAwJSk7XHJcbiAgICAvLyBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDk4JSAxMDAlLCAwJSAxMDAlKTtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtN2RlZyk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG4gIC5zaGFkb3ctcHJpbWFyeS1sZWZ0IHtcclxuICAgIHRvcDogLTM1JTtcclxuICAgIGJvdHRvbTogLTEwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogLTEwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHNlY29uZGFyeSAwJSwgJHNlY29uZGFyeSAyNSUsICRwcmltYXJ5IDI1JSwgJHByaW1hcnkgMTAwJSk7ICA7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAyNSUsIDk2JSAwJSwgOTMlIDEwMCUsIDAlIDgwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTdkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZGV2LXRpdGxlIHtcclxuICAgIC8vIHRvcDogMjUlO1xyXG4gICAgcmlnaHQ6IDYlO1xyXG4gICAgLy8gcmlnaHQ6IHRoaXMubW92ZVJpZ2h0VmFsaWVcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgIGJvdHRvbTogLTFweDtcclxuICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnk7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTW9ub3RvblwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwYWRkaW5nOiA3cHggN3B4IDJweCA3cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XHJcblxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIldlYiBEZXZlbG9wZXJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogLTMwMCU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdGlsdCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC0yMGRlZyk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTIxLjVkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC0yMGRlZyk7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTE5LjVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtMjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmNhbnZhcy1sZWZ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgdG9wOiAwO1xyXG4gIC8vIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gIC8vIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMTkwJSAwJSwgMTAwJSAxMDAlLCAwcHggMTAwJSk7XHJcbn1cclxuXHJcbi5jYW52YXMtcmlnaHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQ6IFxyXG4gIGxpbmVhci1ncmFkaWVudCgyOTBkZWcsICRzZWNvbmRhcnkgMCUsICRzZWNvbmRhcnkgNTUlLCAkYmxhY2sgMjUlLCAkYmxhY2sgNzUlLCAkcHJpbWFyeSA3NSUpXHJcbiAgLy8gbGluZWFyLWdyYWRpZW50KDI5MGRlZywgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAyNSUsIHJnYmEoMCwwLDAsMSkgMjUlLCByZ2JhKDAsMCwwLDEpIDM1JSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAzNSUpO1xyXG4gIC8vIGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHByaW1hcnkgMCUsICRwcmltYXJ5IDI1JSwgJHNlY29uZGFyeSAyNSUpOyA7XHJcbiAgLy8gY2xpcC1wYXRoOiBwb2x5Z29uKDEwJSAwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwcHggMTAwJSk7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJsYWNrLXN0cm9rZSB7XHJcbiAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcwJTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBoZWlnaHQ6IDE4NXB4O1xyXG4gIHRyYW5zZm9ybTogc2tldygwZGVnLCAtN2RlZyk7XHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUE5QkE7QUFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcERBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&\n");

/***/ })

})