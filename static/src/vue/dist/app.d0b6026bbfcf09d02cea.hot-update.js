webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EntrySection.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import $ from 'jquery'\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'EntrySection',\n  props: {},\n  data: function data() {\n    return {\n      windowTop: window.top.scrollY,\n      devTitleMoveRightValue: '6',\n      devTitleMoveRightOriginalValue: '6',\n      mainTitleMoveLeftValue: \"48\",\n      mainTitleMoveLeftOriginalValue: '48'\n    };\n  },\n  methods: {\n    onResize: function onResize() {\n      this.windowWidth = window.innerWidth;\n    },\n    onScroll: function onScroll() {\n      this.windowTop = window.top.scrollY;\n      var distance = this.windowTop * 0.05;\n      var original_pos = this.devTitleMoveRightOriginalValue;\n      this.devTitleMoveRightValue = distance > original_pos ? distance : this.devTitleMoveRightValue;\n    }\n  },\n  mounted: function mounted() {\n    window.addEventListener(\"scroll\", this.onScroll);\n  },\n  beforeDestroy: function beforeDestroy() {\n    window.removeEventListener(\"scroll\", this.onScroll);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvRW50cnlTZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRW50cnlTZWN0aW9uLnZ1ZT9mZmVmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgbWFpblwiPlxyXG4gICAgPCEtLSA8Y2FudmFzIGlkPVwiY2FudmFzLWxlZnRcIiBjbGFzcz1cImNhbnZhcy1sZWZ0XCI+PC9jYW52YXM+IC0tPlxyXG4gICAgPGNhbnZhcyBpZD1cImNhbnZhcy1yaWdodFwiIGNsYXNzPVwiY2FudmFzLXJpZ2h0XCI+PC9jYW52YXM+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxhY2stc3Ryb2tlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkZXYtdGl0bGVcIiA6c3R5bGU9XCIncmlnaHQ6JyArIGRldlRpdGxlTW92ZVJpZ2h0VmFsdWUgKyAnJSdcIj5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICBXZWIgRGV2ZWxvcGVyXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tdGl0bGVcIj5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICBKb3JnZSBkYSBTaWx2YVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvdy1wcmltYXJ5LWxlZnRcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnRW50cnlTZWN0aW9uJyxcclxuICBwcm9wczoge30sXHJcbiAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHdpbmRvd1RvcDogd2luZG93LnRvcC5zY3JvbGxZLFxyXG4gICAgICAgICAgZGV2VGl0bGVNb3ZlUmlnaHRWYWx1ZTogJzYnLFxyXG4gICAgICAgICAgZGV2VGl0bGVNb3ZlUmlnaHRPcmlnaW5hbFZhbHVlOiAnNicsXHJcbiAgICAgICAgICBtYWluVGl0bGVNb3ZlTGVmdFZhbHVlOiBcIjQ4XCIsXHJcbiAgICAgICAgICBtYWluVGl0bGVNb3ZlTGVmdE9yaWdpbmFsVmFsdWU6ICc0OCcsXHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25SZXNpemUoKSB7XHJcbiAgICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgfSxcclxuICAgIG9uU2Nyb2xsKCl7XHJcbiAgICAgIHRoaXMud2luZG93VG9wID0gd2luZG93LnRvcC5zY3JvbGxZO1xyXG4gICAgICBsZXQgZGlzdGFuY2UgPSAodGhpcy53aW5kb3dUb3AgKiAwLjA1KVxyXG4gICAgICBsZXQgb3JpZ2luYWxfcG9zID0gdGhpcy5kZXZUaXRsZU1vdmVSaWdodE9yaWdpbmFsVmFsdWVcclxuICAgICAgdGhpcy5kZXZUaXRsZU1vdmVSaWdodFZhbHVlID0gZGlzdGFuY2UgPiBvcmlnaW5hbF9wb3MgPyBkaXN0YW5jZSA6IHRoaXMuZGV2VGl0bGVNb3ZlUmlnaHRWYWx1ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsKVxyXG4gIH0sXHJcbiAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwiQC9hc3NldHMvX3ZhcmlhYmxlcy5zY3NzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbm90b24mZmFtaWx5PVJhbGV3YXkmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4ubWFpbiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gIHRvcDogNjglO1xyXG4gIHJpZ2h0OiA0OCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICY6aG92ZXIge1xyXG4gICAgLnNoYWRvdy1wcmltYXJ5LWxlZnQge1xyXG4gICAgICAvLyBhbmltYXRpb246IHRpbHQgM3MgaW5maW5pdGUgZm9yd2FyZHM7XHJcbi8vIHBvbHlnb24oMCAxNyUsIDEwMCUgMCUsIDk1JSAxMDAlLCAwJSA4NSUpXHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAxNyUsIDEwMCUgMCUsIDk1JSAxMDAlLCAwJSA4NSUpO1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAzcHggNnB4IDJweCA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgOTglIDEwMCUsIDAlIDEwMCUpO1xyXG4gICAgLy8gY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCA5OCUgMTAwJSwgMCUgMTAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTdkZWcpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgJHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIH1cclxuICAuc2hhZG93LXByaW1hcnktbGVmdCB7XHJcbiAgICB0b3A6IC0zNSU7XHJcbiAgICBib3R0b206IC0xMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IC0xMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRzZWNvbmRhcnkgMCUsICRzZWNvbmRhcnkgMjUlLCAkcHJpbWFyeSAyNSUsICRwcmltYXJ5IDEwMCUpOyAgO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMjUlLCA5NiUgMCUsIDkzJSAxMDAlLCAwJSA4MCUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC03ZGVnKTtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xyXG4gIH1cclxufVxyXG5cclxuLmRldi10aXRsZSB7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHJpZ2h0OiA2JTtcclxuICAgIC8vIHJpZ2h0OiB0aGlzLm1vdmVSaWdodFZhbGllXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICBib3R0b206IC0xcHg7XHJcbiAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gICAgICAgIH0gIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbm90b25cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcGFkZGluZzogN3B4IDdweCAycHggN3B4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xyXG5cclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJXZWIgRGV2ZWxvcGVyXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC0zMDAlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHRpbHQge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtMjBkZWcpO1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC0yMS41ZGVnKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtMjBkZWcpO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC0xOS41ZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTIwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5jYW52YXMtbGVmdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRvcDogMDtcclxuICAvLyBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAvLyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDE5MCUgMCUsIDEwMCUgMTAwJSwgMHB4IDEwMCUpO1xyXG59XHJcblxyXG4uY2FudmFzLXJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kOiBcclxuICBsaW5lYXItZ3JhZGllbnQoMjkwZGVnLCAkc2Vjb25kYXJ5IDAlLCAkc2Vjb25kYXJ5IDU1JSwgJGJsYWNrIDI1JSwgJGJsYWNrIDc1JSwgJHByaW1hcnkgNzUlKVxyXG4gIC8vIGxpbmVhci1ncmFkaWVudCgyOTBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMjUlLCByZ2JhKDAsMCwwLDEpIDI1JSwgcmdiYSgwLDAsMCwxKSAzNSUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMzUlKTtcclxuICAvLyBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRwcmltYXJ5IDAlLCAkcHJpbWFyeSAyNSUsICRzZWNvbmRhcnkgMjUlKTsgO1xyXG4gIC8vIGNsaXAtcGF0aDogcG9seWdvbigxMCUgMCUsIDEwMCUgMCUsIDEwMCUgMTAwJSwgMHB4IDEwMCUpO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ibGFjay1zdHJva2Uge1xyXG4gIGJhY2tncm91bmQ6ICRibGFjaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3MCU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxODVweDtcclxuICB0cmFuc2Zvcm06IHNrZXcoMGRlZywgLTdkZWcpO1xyXG59XHJcblxyXG48L3N0eWxlPlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&\n");

/***/ })

})