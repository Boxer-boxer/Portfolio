webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EntrySection.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import $ from 'jquery'\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'EntrySection',\n  props: {},\n  data: function data() {\n    return {\n      windowTop: window.top.scrollY,\n      devTitleMoveRightValue: 6,\n      devTitleMoveRightOriginalValue: 6,\n      mainTitleMoveLeftValue: 48,\n      mainTitleMoveLeftOriginalValue: 48\n    };\n  },\n  methods: {\n    onResize: function onResize() {\n      this.windowWidth = window.innerWidth;\n    },\n    moveElement: function moveElement(originalValue, distance, moveValue) {\n      var movingValue = moveValue * distance;\n      console.log(movingValue);\n      moveValue = movingValue > originalValue ? movingValue : originalValue;\n      return moveValue;\n    },\n    onScroll: function onScroll() {\n      this.windowTop = window.top.scrollY;\n      var distance = this.windowTop * 0.0005;\n      this.devTitleMoveRightValue = this.moveElement(this.devTitleMoveRightOriginalValue, distance, this.devTitleMoveRightValue);\n      this.mainTitleMoveLeftValue = this.moveElement(this.mainTitleMoveLeftOriginalValue, distance, this.mainTitleMoveLeftValue);\n    }\n  },\n  mounted: function mounted() {\n    window.addEventListener(\"scroll\", this.onScroll);\n  },\n  beforeDestroy: function beforeDestroy() {\n    window.removeEventListener(\"scroll\", this.onScroll);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvRW50cnlTZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRW50cnlTZWN0aW9uLnZ1ZT9mZmVmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgbWFpblwiPlxyXG4gICAgPCEtLSA8Y2FudmFzIGlkPVwiY2FudmFzLWxlZnRcIiBjbGFzcz1cImNhbnZhcy1sZWZ0XCI+PC9jYW52YXM+IC0tPlxyXG4gICAgPGNhbnZhcyBpZD1cImNhbnZhcy1yaWdodFwiIGNsYXNzPVwiY2FudmFzLXJpZ2h0XCI+PC9jYW52YXM+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxhY2stc3Ryb2tlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkZXYtdGl0bGVcIiA6c3R5bGU9XCIncmlnaHQ6JyArIGRldlRpdGxlTW92ZVJpZ2h0VmFsdWUgKyAnJSdcIj5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICBXZWIgRGV2ZWxvcGVyXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tdGl0bGVcIiA6c3R5bGU9XCIncmlnaHQ6JyArIG1haW5UaXRsZU1vdmVMZWZ0VmFsdWUgKyAnJSdcIj5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICBKb3JnZSBkYSBTaWx2YVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvdy1wcmltYXJ5LWxlZnRcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnRW50cnlTZWN0aW9uJyxcclxuICBwcm9wczoge30sXHJcbiAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHdpbmRvd1RvcDogd2luZG93LnRvcC5zY3JvbGxZLFxyXG4gICAgICAgICAgZGV2VGl0bGVNb3ZlUmlnaHRWYWx1ZTogNixcclxuICAgICAgICAgIGRldlRpdGxlTW92ZVJpZ2h0T3JpZ2luYWxWYWx1ZTogNixcclxuICAgICAgICAgIG1haW5UaXRsZU1vdmVMZWZ0VmFsdWU6IDQ4LFxyXG4gICAgICAgICAgbWFpblRpdGxlTW92ZUxlZnRPcmlnaW5hbFZhbHVlOiA0OCxcclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvblJlc2l6ZSgpIHtcclxuICAgICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICB9LFxyXG4gICAgbW92ZUVsZW1lbnQob3JpZ2luYWxWYWx1ZSwgZGlzdGFuY2UsIG1vdmVWYWx1ZSkge1xyXG4gICAgICBsZXQgbW92aW5nVmFsdWUgPSBtb3ZlVmFsdWUgKiBkaXN0YW5jZTtcclxuICAgICAgY29uc29sZS5sb2cobW92aW5nVmFsdWUpXHJcbiAgICAgIG1vdmVWYWx1ZSA9IG1vdmluZ1ZhbHVlID4gb3JpZ2luYWxWYWx1ZSA/IG1vdmluZ1ZhbHVlIDogb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgcmV0dXJuIG1vdmVWYWx1ZTtcclxuICAgIH0sXHJcbiAgICBvblNjcm9sbCgpe1xyXG4gICAgICB0aGlzLndpbmRvd1RvcCA9IHdpbmRvdy50b3Auc2Nyb2xsWTtcclxuICAgICAgbGV0IGRpc3RhbmNlID0gKHRoaXMud2luZG93VG9wICogMC4wMDA1KVxyXG4gICAgICB0aGlzLmRldlRpdGxlTW92ZVJpZ2h0VmFsdWUgPSB0aGlzLm1vdmVFbGVtZW50KHRoaXMuZGV2VGl0bGVNb3ZlUmlnaHRPcmlnaW5hbFZhbHVlLCBkaXN0YW5jZSwgdGhpcy5kZXZUaXRsZU1vdmVSaWdodFZhbHVlKTtcclxuICAgICAgdGhpcy5tYWluVGl0bGVNb3ZlTGVmdFZhbHVlID0gdGhpcy5tb3ZlRWxlbWVudCh0aGlzLm1haW5UaXRsZU1vdmVMZWZ0T3JpZ2luYWxWYWx1ZSwgZGlzdGFuY2UsIHRoaXMubWFpblRpdGxlTW92ZUxlZnRWYWx1ZSk7XHJcblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpXHJcbiAgfSxcclxuICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbClcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCJAL2Fzc2V0cy9fdmFyaWFibGVzLnNjc3NcIjtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9ub3RvbiZmYW1pbHk9UmFsZXdheSZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5tYWluIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgdG9wOiA2OCU7XHJcbiAgcmlnaHQ6IDQ4JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgJjpob3ZlciB7XHJcbiAgICAuc2hhZG93LXByaW1hcnktbGVmdCB7XHJcbiAgICAgIC8vIGFuaW1hdGlvbjogdGlsdCAzcyBpbmZpbml0ZSBmb3J3YXJkcztcclxuLy8gcG9seWdvbigwIDE3JSwgMTAwJSAwJSwgOTUlIDEwMCUsIDAlIDg1JSlcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDE3JSwgMTAwJSAwJSwgOTUlIDEwMCUsIDAlIDg1JSk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDNweCA2cHggMnB4IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCA5OCUgMTAwJSwgMCUgMTAwJSk7XHJcbiAgICAvLyBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDk4JSAxMDAlLCAwJSAxMDAlKTtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtN2RlZyk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG4gIC5zaGFkb3ctcHJpbWFyeS1sZWZ0IHtcclxuICAgIHRvcDogLTM1JTtcclxuICAgIGJvdHRvbTogLTEwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogLTEwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHNlY29uZGFyeSAwJSwgJHNlY29uZGFyeSAyNSUsICRwcmltYXJ5IDI1JSwgJHByaW1hcnkgMTAwJSk7ICA7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAyNSUsIDk2JSAwJSwgOTMlIDEwMCUsIDAlIDgwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTdkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZGV2LXRpdGxlIHtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgcmlnaHQ6IDYlO1xyXG4gICAgLy8gcmlnaHQ6IHRoaXMubW92ZVJpZ2h0VmFsaWVcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgIGJvdHRvbTogLTFweDtcclxuICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnk7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTW9ub3RvblwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwYWRkaW5nOiA3cHggN3B4IDJweCA3cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XHJcblxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIldlYiBEZXZlbG9wZXJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogLTMwMCU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdGlsdCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC0yMGRlZyk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTIxLjVkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC0yMGRlZyk7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTE5LjVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtMjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmNhbnZhcy1sZWZ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgdG9wOiAwO1xyXG4gIC8vIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gIC8vIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMTkwJSAwJSwgMTAwJSAxMDAlLCAwcHggMTAwJSk7XHJcbn1cclxuXHJcbi5jYW52YXMtcmlnaHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQ6IFxyXG4gIGxpbmVhci1ncmFkaWVudCgyOTBkZWcsICRzZWNvbmRhcnkgMCUsICRzZWNvbmRhcnkgNTUlLCAkYmxhY2sgMjUlLCAkYmxhY2sgNzUlLCAkcHJpbWFyeSA3NSUpXHJcbiAgLy8gbGluZWFyLWdyYWRpZW50KDI5MGRlZywgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAyNSUsIHJnYmEoMCwwLDAsMSkgMjUlLCByZ2JhKDAsMCwwLDEpIDM1JSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAzNSUpO1xyXG4gIC8vIGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHByaW1hcnkgMCUsICRwcmltYXJ5IDI1JSwgJHNlY29uZGFyeSAyNSUpOyA7XHJcbiAgLy8gY2xpcC1wYXRoOiBwb2x5Z29uKDEwJSAwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwcHggMTAwJSk7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJsYWNrLXN0cm9rZSB7XHJcbiAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcwJTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBoZWlnaHQ6IDE4NXB4O1xyXG4gIHRyYW5zZm9ybTogc2tldygwZGVnLCAtN2RlZyk7XHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWhCQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&\n");

/***/ })

})