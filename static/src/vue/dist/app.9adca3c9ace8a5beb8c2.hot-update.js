webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EntrySection.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import $ from 'jquery'\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'EntrySection',\n  props: {},\n  data: function data() {\n    return {\n      windowTop: window.top.scrollY,\n      devTitleMoveTopValue: 25,\n      devTitleMoveRightValue: 6,\n      devTitleMoveRightOriginalValue: 6,\n      mainTitleMoveTopValue: 68,\n      mainTitleMoveLeftValue: 23,\n      mainTitleMoveLeftOriginalValue: 23\n    };\n  },\n  methods: {\n    onResize: function onResize() {\n      this.windowWidth = window.innerWidth;\n    },\n    moveElement: function moveElement(originalValue, distance, topValue, moveValue) {\n      if (topValue > distance) {} // let distance = (scrollPercentRounded)\n\n\n      var movingValue = Math.pow(moveValue, distance); // console.log(movingValue)\n\n      moveValue = movingValue > originalValue ? movingValue : originalValue;\n      return moveValue;\n    },\n    onScroll: function onScroll() {\n      this.windowTop = window.top.scrollY;\n      var scrollTop = this.windowTop;\n      var docHeight = document.body.scrollHeight;\n      var winHeight = window.innerHeight;\n      var scrollPercent = scrollTop / (docHeight - winHeight);\n      var scrollPercentRounded = Math.round(scrollPercent * 100); // document.title = `(${scrollPercentRounded}%) ${originalTitle}`;\n\n      console.log(scrollPercentRounded);\n      this.devTitleMoveRightValue = this.moveElement(this.devTitleMoveRightOriginalValue, scrollPercentRounded, devTitleMoveTopValue, this.devTitleMoveRightValue);\n      this.mainTitleMoveLeftValue = this.moveElement(this.mainTitleMoveLeftOriginalValue, scrollPercentRounded, mainTitleMoveTopValue, this.mainTitleMoveLeftValue);\n    }\n  },\n  mounted: function mounted() {\n    window.addEventListener(\"scroll\", this.onScroll);\n  },\n  beforeDestroy: function beforeDestroy() {\n    window.removeEventListener(\"scroll\", this.onScroll);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvRW50cnlTZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRW50cnlTZWN0aW9uLnZ1ZT9mZmVmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgbWFpblwiPlxyXG4gICAgPCEtLSA8Y2FudmFzIGlkPVwiY2FudmFzLWxlZnRcIiBjbGFzcz1cImNhbnZhcy1sZWZ0XCI+PC9jYW52YXM+IC0tPlxyXG4gICAgPGNhbnZhcyBpZD1cImNhbnZhcy1yaWdodFwiIGNsYXNzPVwiY2FudmFzLXJpZ2h0XCI+PC9jYW52YXM+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxhY2stc3Ryb2tlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkZXYtdGl0bGVcIiA6c3R5bGU9XCIncmlnaHQ6JyArIGRldlRpdGxlTW92ZVJpZ2h0VmFsdWUgKyAnJTsgdG9wOicgKyBkZXZUaXRsZU1vdmVUb3BWYWx1ZSArICclJ1wiPlxyXG4gICAgICAgIDxoMT5cclxuICAgICAgICAgIFdlYiBEZXZlbG9wZXJcclxuICAgICAgICA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWFpbi10aXRsZVwiIDpzdHlsZT1cIidsZWZ0OicgKyBtYWluVGl0bGVNb3ZlTGVmdFZhbHVlICsgJyU7IHRvcDonICsgbWFpblRpdGxlTW92ZVRvcFZhbHVlICsgJyUnXCI+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgSm9yZ2UgZGEgU2lsdmFcclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGFkb3ctcHJpbWFyeS1sZWZ0XCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0VudHJ5U2VjdGlvbicsXHJcbiAgcHJvcHM6IHt9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB3aW5kb3dUb3A6IHdpbmRvdy50b3Auc2Nyb2xsWSxcclxuICAgICAgICAgIGRldlRpdGxlTW92ZVRvcFZhbHVlOiAyNSxcclxuICAgICAgICAgIGRldlRpdGxlTW92ZVJpZ2h0VmFsdWU6IDYsXHJcbiAgICAgICAgICBkZXZUaXRsZU1vdmVSaWdodE9yaWdpbmFsVmFsdWU6IDYsXHJcbiAgICAgICAgICBtYWluVGl0bGVNb3ZlVG9wVmFsdWU6IDY4LFxyXG4gICAgICAgICAgbWFpblRpdGxlTW92ZUxlZnRWYWx1ZTogMjMsXHJcbiAgICAgICAgICBtYWluVGl0bGVNb3ZlTGVmdE9yaWdpbmFsVmFsdWU6IDIzLFxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uUmVzaXplKCkge1xyXG4gICAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcclxuICAgIH0sXHJcbiAgICBtb3ZlRWxlbWVudChvcmlnaW5hbFZhbHVlLCBkaXN0YW5jZSwgdG9wVmFsdWUsIG1vdmVWYWx1ZSkge1xyXG4gICAgICBpZih0b3BWYWx1ZSA+IGRpc3RhbmNlKSB7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIC8vIGxldCBkaXN0YW5jZSA9IChzY3JvbGxQZXJjZW50Um91bmRlZClcclxuXHJcbiAgICAgIGxldCBtb3ZpbmdWYWx1ZSA9IG1vdmVWYWx1ZSAqKiBkaXN0YW5jZTtcclxuICAgICAgLy8gY29uc29sZS5sb2cobW92aW5nVmFsdWUpXHJcbiAgICAgIG1vdmVWYWx1ZSA9IG1vdmluZ1ZhbHVlID4gb3JpZ2luYWxWYWx1ZSA/IG1vdmluZ1ZhbHVlIDogb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgcmV0dXJuIG1vdmVWYWx1ZTtcclxuICAgIH0sXHJcbiAgICBvblNjcm9sbCgpe1xyXG4gICAgICB0aGlzLndpbmRvd1RvcCA9IHdpbmRvdy50b3Auc2Nyb2xsWTtcclxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMud2luZG93VG9wO1xyXG4gICAgICBsZXQgZG9jSGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgIGxldCB3aW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIGxldCBzY3JvbGxQZXJjZW50ID0gc2Nyb2xsVG9wIC8gKGRvY0hlaWdodCAtIHdpbkhlaWdodCk7XHJcbiAgICAgIGxldCBzY3JvbGxQZXJjZW50Um91bmRlZCA9IE1hdGgucm91bmQoc2Nyb2xsUGVyY2VudCAqIDEwMCk7XHJcbiAgLy8gZG9jdW1lbnQudGl0bGUgPSBgKCR7c2Nyb2xsUGVyY2VudFJvdW5kZWR9JSkgJHtvcmlnaW5hbFRpdGxlfWA7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNjcm9sbFBlcmNlbnRSb3VuZGVkKVxyXG5cclxuICAgICAgdGhpcy5kZXZUaXRsZU1vdmVSaWdodFZhbHVlID0gdGhpcy5tb3ZlRWxlbWVudCh0aGlzLmRldlRpdGxlTW92ZVJpZ2h0T3JpZ2luYWxWYWx1ZSwgc2Nyb2xsUGVyY2VudFJvdW5kZWQsIGRldlRpdGxlTW92ZVRvcFZhbHVlLCB0aGlzLmRldlRpdGxlTW92ZVJpZ2h0VmFsdWUpO1xyXG4gICAgICB0aGlzLm1haW5UaXRsZU1vdmVMZWZ0VmFsdWUgPSB0aGlzLm1vdmVFbGVtZW50KHRoaXMubWFpblRpdGxlTW92ZUxlZnRPcmlnaW5hbFZhbHVlLCBzY3JvbGxQZXJjZW50Um91bmRlZCwgbWFpblRpdGxlTW92ZVRvcFZhbHVlLCB0aGlzLm1haW5UaXRsZU1vdmVMZWZ0VmFsdWUpO1xyXG5cclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsKVxyXG4gIH0sXHJcbiAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwiQC9hc3NldHMvX3ZhcmlhYmxlcy5zY3NzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbm90b24mZmFtaWx5PVJhbGV3YXkmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4ubWFpbiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gIC8vIHRvcDogNjglO1xyXG4gIC8vIGxlZnQ6IDUyJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgJjpob3ZlciB7XHJcbiAgICAuc2hhZG93LXByaW1hcnktbGVmdCB7XHJcbiAgICAgIC8vIGFuaW1hdGlvbjogdGlsdCAzcyBpbmZpbml0ZSBmb3J3YXJkcztcclxuLy8gcG9seWdvbigwIDE3JSwgMTAwJSAwJSwgOTUlIDEwMCUsIDAlIDg1JSlcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDE3JSwgMTAwJSAwJSwgOTUlIDEwMCUsIDAlIDg1JSk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDNweCA2cHggMnB4IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCA5OCUgMTAwJSwgMCUgMTAwJSk7XHJcbiAgICAvLyBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDk4JSAxMDAlLCAwJSAxMDAlKTtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtN2RlZyk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG4gIC5zaGFkb3ctcHJpbWFyeS1sZWZ0IHtcclxuICAgIHRvcDogLTM1JTtcclxuICAgIGJvdHRvbTogLTEwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogLTEwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHNlY29uZGFyeSAwJSwgJHNlY29uZGFyeSAyNSUsICRwcmltYXJ5IDI1JSwgJHByaW1hcnkgMTAwJSk7ICA7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAyNSUsIDk2JSAwJSwgOTMlIDEwMCUsIDAlIDgwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTdkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZGV2LXRpdGxlIHtcclxuICAgIC8vIHRvcDogMjUlO1xyXG4gICAgcmlnaHQ6IDYlO1xyXG4gICAgLy8gcmlnaHQ6IHRoaXMubW92ZVJpZ2h0VmFsaWVcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgIGJvdHRvbTogLTFweDtcclxuICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnk7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTW9ub3RvblwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwYWRkaW5nOiA3cHggN3B4IDJweCA3cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XHJcblxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIldlYiBEZXZlbG9wZXJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogLTMwMCU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdGlsdCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC0yMGRlZyk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTIxLjVkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC0yMGRlZyk7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTE5LjVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtMjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmNhbnZhcy1sZWZ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgdG9wOiAwO1xyXG4gIC8vIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gIC8vIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMTkwJSAwJSwgMTAwJSAxMDAlLCAwcHggMTAwJSk7XHJcbn1cclxuXHJcbi5jYW52YXMtcmlnaHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQ6IFxyXG4gIGxpbmVhci1ncmFkaWVudCgyOTBkZWcsICRzZWNvbmRhcnkgMCUsICRzZWNvbmRhcnkgNTUlLCAkYmxhY2sgMjUlLCAkYmxhY2sgNzUlLCAkcHJpbWFyeSA3NSUpXHJcbiAgLy8gbGluZWFyLWdyYWRpZW50KDI5MGRlZywgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAyNSUsIHJnYmEoMCwwLDAsMSkgMjUlLCByZ2JhKDAsMCwwLDEpIDM1JSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAzNSUpO1xyXG4gIC8vIGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHByaW1hcnkgMCUsICRwcmltYXJ5IDI1JSwgJHNlY29uZGFyeSAyNSUpOyA7XHJcbiAgLy8gY2xpcC1wYXRoOiBwb2x5Z29uKDEwJSAwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwcHggMTAwJSk7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJsYWNrLXN0cm9rZSB7XHJcbiAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcwJTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBoZWlnaHQ6IDE4NXB4O1xyXG4gIHRyYW5zZm9ybTogc2tldygwZGVnLCAtN2RlZyk7XHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUE1QkE7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbERBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&\n");

/***/ })

})