webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EntrySection.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var scroll_watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scroll-watcher */ \"./node_modules/scroll-watcher/dist/scroll-watcher.min.js\");\n/* harmony import */ var scroll_watcher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scroll_watcher__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import $ from 'jquery';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'EntrySection',\n  props: {},\n  data: function data() {\n    return {};\n  },\n  methods: {\n    onScrollElement: function onScrollElement(element, outClass) {\n      // Pass function\n      var scroll = new scroll_watcher__WEBPACK_IMPORTED_MODULE_0___default.a(); // console.log(element.target)\n\n      scroll.watch(element).on(\"enter\", function (evt) {\n        // element.toggleClass(outClass)\n        element.classlist.remove(outClass);\n        console.log(\"I'm partially inside viewport\");\n        console.log(evt);\n      }) // .on(\"enter:full\", function(evt) {\n      // console.log(\"I'm entirely within the viewport\");\n      // console.log(evt)\n      // })\n      .on(\"exit:partial\", function (evt) {\n        element.classlist.add(outClass);\n        console.log(\"I'm partially out of viewport\");\n        console.log(evt);\n      }); // .on(\"exit\", function(evt) {\n      // console.log(\"I'm out of viewport\");\n      // console.log(evt)\n      // });\n    }\n  },\n  mounted: function mounted() {\n    var devtitle = document.getElementById('dev-title');\n    var maintitle = document.getElementById('main-title');\n    this.onScrollElement(devtitle, \"dev-title-out\");\n    this.onScrollElement(maintitle, \"main-title-out\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvRW50cnlTZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRW50cnlTZWN0aW9uLnZ1ZT9mZmVmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgbWFpbiBlbnRyeVwiIGlkPVwiZW50cnlcIj5cclxuICAgIDwhLS0gPGNhbnZhcyBpZD1cImNhbnZhcy1sZWZ0XCIgY2xhc3M9XCJjYW52YXMtbGVmdFwiPjwvY2FudmFzPiAtLT5cclxuICAgIDxjYW52YXMgaWQ9XCJjYW52YXMtcmlnaHRcIiBjbGFzcz1cImNhbnZhcy1yaWdodFwiPjwvY2FudmFzPlxyXG4gICAgPGRpdiBjbGFzcz1cImJsYWNrLXN0cm9rZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGV2LXRpdGxlXCIgaWQ9XCJkZXYtdGl0bGVcIj5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICBXZWIgRGV2ZWxvcGVyXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tdGl0bGVcIiBpZD1cIm1haW4tdGl0bGVcIj5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICBKb3JnZSBkYSBTaWx2YVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvdy1wcmltYXJ5LWxlZnRcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBTY3JvbGxXYXRjaGVyIGZyb20gJ3Njcm9sbC13YXRjaGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnRW50cnlTZWN0aW9uJyxcclxuICBwcm9wczoge30sXHJcbiAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25TY3JvbGxFbGVtZW50KGVsZW1lbnQsIG91dENsYXNzKXtcclxuICAgICAgLy8gUGFzcyBmdW5jdGlvblxyXG4gICAgICB2YXIgc2Nyb2xsID0gbmV3IFNjcm9sbFdhdGNoZXIoKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudC50YXJnZXQpXHJcbiAgICAgIHNjcm9sbFxyXG4gICAgICAgIC53YXRjaChlbGVtZW50KVxyXG4gICAgICAgIC5vbihcImVudGVyXCIsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgLy8gZWxlbWVudC50b2dnbGVDbGFzcyhvdXRDbGFzcylcclxuICAgICAgICAgIGVsZW1lbnQuY2xhc3NsaXN0LnJlbW92ZShvdXRDbGFzcylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSdtIHBhcnRpYWxseSBpbnNpZGUgdmlld3BvcnRcIik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhldnQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyAub24oXCJlbnRlcjpmdWxsXCIsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJJ20gZW50aXJlbHkgd2l0aGluIHRoZSB2aWV3cG9ydFwiKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2dClcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC5vbihcImV4aXQ6cGFydGlhbFwiLCBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgIGVsZW1lbnQuY2xhc3NsaXN0LmFkZChvdXRDbGFzcylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSdtIHBhcnRpYWxseSBvdXQgb2Ygdmlld3BvcnRcIik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhldnQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyAub24oXCJleGl0XCIsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJJ20gb3V0IG9mIHZpZXdwb3J0XCIpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZXZ0KVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGxldCBkZXZ0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXYtdGl0bGUnKTtcclxuICAgIGxldCBtYWludGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi10aXRsZScpXHJcblxyXG4gICAgdGhpcy5vblNjcm9sbEVsZW1lbnQoZGV2dGl0bGUsIFwiZGV2LXRpdGxlLW91dFwiKTtcclxuICAgIHRoaXMub25TY3JvbGxFbGVtZW50KG1haW50aXRsZSwgXCJtYWluLXRpdGxlLW91dFwiKTtcclxuICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwiQC9hc3NldHMvX3ZhcmlhYmxlcy5zY3NzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbm90b24mZmFtaWx5PVJhbGV3YXkmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4ubWFpbiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gIHRvcDogNjUlO1xyXG4gIGxlZnQ6IDMwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgJi1vdXQge1xyXG4gICAgbGVmdDogMjAwJVxyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIC5zaGFkb3ctcHJpbWFyeS1sZWZ0IHtcclxuICAgICAgLy8gYW5pbWF0aW9uOiB0aWx0IDNzIGluZmluaXRlIGZvcndhcmRzO1xyXG4vLyBwb2x5Z29uKDAgMTclLCAxMDAlIDAlLCA5NSUgMTAwJSwgMCUgODUlKVxyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMTclLCAxMDAlIDAlLCA5NSUgMTAwJSwgMCUgODUlKTtcclxuICAgIHRyYW5zaXRpb246IDAuMXMgbGluZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogM3B4IDZweCAycHggNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDk4JSAxMDAlLCAwJSAxMDAlKTtcclxuICAgIC8vIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgOTglIDEwMCUsIDAlIDEwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC03ZGVnKTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICRibGFjaztcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICR3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIC5zaGFkb3ctcHJpbWFyeS1sZWZ0IHtcclxuICAgIHRvcDogLTM1JTtcclxuICAgIGJvdHRvbTogLTEwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogLTEwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHNlY29uZGFyeSAwJSwgJHNlY29uZGFyeSAyNSUsICRwcmltYXJ5IDI1JSwgJHByaW1hcnkgMTAwJSk7ICA7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAyNSUsIDk2JSAwJSwgOTMlIDEwMCUsIDAlIDgwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTdkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZGV2LXRpdGxlIHtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgcmlnaHQ6IDYlO1xyXG4gICAgLy8gcmlnaHQ6IHRoaXMubW92ZVJpZ2h0VmFsaWVcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGxpbmVyO1xyXG4gICAgJi1vdXQge1xyXG4gICAgICAgIHJpZ2h0OiAyMDAlXHJcbiAgICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICBib3R0b206IC0xcHg7XHJcbiAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gICAgICAgIH0gIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbm90b25cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcGFkZGluZzogN3B4IDdweCAycHggN3B4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xyXG5cclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJXZWIgRGV2ZWxvcGVyXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC0zMDAlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHRpbHQge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtMjBkZWcpO1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC0yMS41ZGVnKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtMjBkZWcpO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC0xOS41ZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTIwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5jYW52YXMtbGVmdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRvcDogMDtcclxuICAvLyBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAvLyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDE5MCUgMCUsIDEwMCUgMTAwJSwgMHB4IDEwMCUpO1xyXG59XHJcblxyXG4uY2FudmFzLXJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kOiBcclxuICBsaW5lYXItZ3JhZGllbnQoMjkwZGVnLCAkc2Vjb25kYXJ5IDAlLCAkc2Vjb25kYXJ5IDU1JSwgJGJsYWNrIDI1JSwgJGJsYWNrIDc1JSwgJHByaW1hcnkgNzUlKVxyXG4gIC8vIGxpbmVhci1ncmFkaWVudCgyOTBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMjUlLCByZ2JhKDAsMCwwLDEpIDI1JSwgcmdiYSgwLDAsMCwxKSAzNSUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMzUlKTtcclxuICAvLyBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRwcmltYXJ5IDAlLCAkcHJpbWFyeSAyNSUsICRzZWNvbmRhcnkgMjUlKTsgO1xyXG4gIC8vIGNsaXAtcGF0aDogcG9seWdvbigxMCUgMCUsIDEwMCUgMCUsIDEwMCUgMTAwJSwgMHB4IDEwMCUpO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ibGFjay1zdHJva2Uge1xyXG4gIGJhY2tncm91bmQ6ICRibGFjaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3MCU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxODVweDtcclxuICB0cmFuc2Zvcm06IHNrZXcoMGRlZywgLTdkZWcpO1xyXG59XHJcblxyXG48L3N0eWxlPlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUE0QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBekNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&\n");

/***/ })

})