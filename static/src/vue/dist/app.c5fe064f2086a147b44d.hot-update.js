webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EntrySection.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import $ from 'jquery'\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'EntrySection',\n  props: {},\n  data: function data() {\n    return {\n      windowTop: window.top.scrollY,\n      devTitleMoveRightValue: '6',\n      devTitleMoveRightOriginalValue: '6',\n      mainTitleMoveLeftValue: \"48\",\n      mainTitleMoveLeftOriginalValue: '48'\n    };\n  },\n  methods: {\n    onResize: function onResize() {\n      this.windowWidth = window.innerWidth;\n    },\n    moveElement: function moveElement(originalValue, distance, moveValue) {\n      var devTitleMoveRightOriginalValue = originalValue;\n      moveValue = distance > devTitleMoveRightOriginalValue ? distance : moveValue;\n    },\n    onScroll: function onScroll() {\n      this.windowTop = window.top.scrollY;\n      var distance = this.windowTop * 0.05;\n      this.moveElement(this.devTitleMoveRightOriginalValue, distance, this.devTitleMoveRightValue);\n    }\n  },\n  mounted: function mounted() {\n    window.addEventListener(\"scroll\", this.onScroll);\n  },\n  beforeDestroy: function beforeDestroy() {\n    window.removeEventListener(\"scroll\", this.onScroll);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvRW50cnlTZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRW50cnlTZWN0aW9uLnZ1ZT9mZmVmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgbWFpblwiPlxyXG4gICAgPCEtLSA8Y2FudmFzIGlkPVwiY2FudmFzLWxlZnRcIiBjbGFzcz1cImNhbnZhcy1sZWZ0XCI+PC9jYW52YXM+IC0tPlxyXG4gICAgPGNhbnZhcyBpZD1cImNhbnZhcy1yaWdodFwiIGNsYXNzPVwiY2FudmFzLXJpZ2h0XCI+PC9jYW52YXM+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxhY2stc3Ryb2tlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkZXYtdGl0bGVcIiA6c3R5bGU9XCIncmlnaHQ6JyArIGRldlRpdGxlTW92ZVJpZ2h0VmFsdWUgKyAnJSdcIj5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICBXZWIgRGV2ZWxvcGVyXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tdGl0bGVcIiA6c3R5bGU9XCIncmlnaHQnICsgbWFpblRpdGxlTW92ZUxlZnRWYWx1ZSArICclJ1wiPlxyXG4gICAgICAgIDxoMT5cclxuICAgICAgICAgIEpvcmdlIGRhIFNpbHZhXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93LXByaW1hcnktbGVmdFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdFbnRyeVNlY3Rpb24nLFxyXG4gIHByb3BzOiB7fSxcclxuICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgd2luZG93VG9wOiB3aW5kb3cudG9wLnNjcm9sbFksXHJcbiAgICAgICAgICBkZXZUaXRsZU1vdmVSaWdodFZhbHVlOiAnNicsXHJcbiAgICAgICAgICBkZXZUaXRsZU1vdmVSaWdodE9yaWdpbmFsVmFsdWU6ICc2JyxcclxuICAgICAgICAgIG1haW5UaXRsZU1vdmVMZWZ0VmFsdWU6IFwiNDhcIixcclxuICAgICAgICAgIG1haW5UaXRsZU1vdmVMZWZ0T3JpZ2luYWxWYWx1ZTogJzQ4JyxcclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvblJlc2l6ZSgpIHtcclxuICAgICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICB9LFxyXG4gICAgbW92ZUVsZW1lbnQob3JpZ2luYWxWYWx1ZSwgZGlzdGFuY2UsIG1vdmVWYWx1ZSkge1xyXG4gICAgICBsZXQgZGV2VGl0bGVNb3ZlUmlnaHRPcmlnaW5hbFZhbHVlID0gb3JpZ2luYWxWYWx1ZVxyXG4gICAgICBtb3ZlVmFsdWUgPSBkaXN0YW5jZSA+IGRldlRpdGxlTW92ZVJpZ2h0T3JpZ2luYWxWYWx1ZSA/IGRpc3RhbmNlIDogbW92ZVZhbHVlO1xyXG5cclxuICAgIH0sXHJcbiAgICBvblNjcm9sbCgpe1xyXG4gICAgICB0aGlzLndpbmRvd1RvcCA9IHdpbmRvdy50b3Auc2Nyb2xsWTtcclxuICAgICAgbGV0IGRpc3RhbmNlID0gKHRoaXMud2luZG93VG9wICogMC4wNSlcclxuICAgICAgdGhpcy5tb3ZlRWxlbWVudCh0aGlzLmRldlRpdGxlTW92ZVJpZ2h0T3JpZ2luYWxWYWx1ZSwgZGlzdGFuY2UsIHRoaXMuZGV2VGl0bGVNb3ZlUmlnaHRWYWx1ZSlcclxuXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbClcclxuICB9LFxyXG4gIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsKVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCBcIkAvYXNzZXRzL192YXJpYWJsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb25vdG9uJmZhbWlseT1SYWxld2F5JmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLm1haW4ge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5tYWluLXRpdGxlIHtcclxuICB0b3A6IDY4JTtcclxuICByaWdodDogNDglO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAmOmhvdmVyIHtcclxuICAgIC5zaGFkb3ctcHJpbWFyeS1sZWZ0IHtcclxuICAgICAgLy8gYW5pbWF0aW9uOiB0aWx0IDNzIGluZmluaXRlIGZvcndhcmRzO1xyXG4vLyBwb2x5Z29uKDAgMTclLCAxMDAlIDAlLCA5NSUgMTAwJSwgMCUgODUlKVxyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMTclLCAxMDAlIDAlLCA5NSUgMTAwJSwgMCUgODUlKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogM3B4IDZweCAycHggNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDk4JSAxMDAlLCAwJSAxMDAlKTtcclxuICAgIC8vIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgOTglIDEwMCUsIDAlIDEwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC03ZGVnKTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICRibGFjaztcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICR3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcbiAgLnNoYWRvdy1wcmltYXJ5LWxlZnQge1xyXG4gICAgdG9wOiAtMzUlO1xyXG4gICAgYm90dG9tOiAtMTAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAtMTAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkc2Vjb25kYXJ5IDAlLCAkc2Vjb25kYXJ5IDI1JSwgJHByaW1hcnkgMjUlLCAkcHJpbWFyeSAxMDAlKTsgIDtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDI1JSwgOTYlIDAlLCA5MyUgMTAwJSwgMCUgODAlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtN2RlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcclxuICB9XHJcbn1cclxuXHJcbi5kZXYtdGl0bGUge1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICByaWdodDogNiU7XHJcbiAgICAvLyByaWdodDogdGhpcy5tb3ZlUmlnaHRWYWxpZVxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgYm90dG9tOiAtMXB4O1xyXG4gICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeTtcclxuICAgICAgICB9ICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogXCJNb25vdG9uXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHBhZGRpbmc6IDdweCA3cHggMnB4IDdweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcclxuXHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiV2ViIERldmVsb3BlclwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtMzAwJTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB0aWx0IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTIwZGVnKTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtMjEuNWRlZyk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTIwZGVnKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtMTkuNWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC0yMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FudmFzLWxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB0b3A6IDA7XHJcbiAgLy8gYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgLy8gY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxOTAlIDAlLCAxMDAlIDEwMCUsIDBweCAxMDAlKTtcclxufVxyXG5cclxuLmNhbnZhcy1yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZDogXHJcbiAgbGluZWFyLWdyYWRpZW50KDI5MGRlZywgJHNlY29uZGFyeSAwJSwgJHNlY29uZGFyeSA1NSUsICRibGFjayAyNSUsICRibGFjayA3NSUsICRwcmltYXJ5IDc1JSlcclxuICAvLyBsaW5lYXItZ3JhZGllbnQoMjkwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDI1JSwgcmdiYSgwLDAsMCwxKSAyNSUsIHJnYmEoMCwwLDAsMSkgMzUlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDM1JSk7XHJcbiAgLy8gbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkcHJpbWFyeSAwJSwgJHByaW1hcnkgMjUlLCAkc2Vjb25kYXJ5IDI1JSk7IDtcclxuICAvLyBjbGlwLXBhdGg6IHBvbHlnb24oMTAlIDAlLCAxMDAlIDAlLCAxMDAlIDEwMCUsIDBweCAxMDAlKTtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYmxhY2stc3Ryb2tlIHtcclxuICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzAlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGhlaWdodDogMTg1cHg7XHJcbiAgdHJhbnNmb3JtOiBza2V3KDBkZWcsIC03ZGVnKTtcclxufVxyXG5cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&\n");

/***/ })

})