webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EntrySection.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import $ from 'jquery'\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'EntrySection',\n  props: {},\n  data: function data() {\n    return {\n      windowTop: window.top.scrollY,\n      devTitleMoveTopValue: 25,\n      devTitleMoveRightValue: 6,\n      devTitleMoveRightOriginalValue: 6,\n      mainTitleMoveTopValue: 68,\n      mainTitleMoveLeftValue: 23,\n      mainTitleMoveLeftOriginalValue: 23\n    };\n  },\n  methods: {\n    onResize: function onResize() {\n      this.windowWidth = window.innerWidth;\n    },\n    moveElement: function moveElement(distance, topValue, moveValue, originalValue) {\n      if (topValue + 50 >= distance) {\n        moveValue = distance * 0.9;\n\n        if (moveValue > originalValue) {\n          return moveValue;\n        } else {\n          return originalValue;\n        }\n      }\n    },\n    onScroll: function onScroll() {\n      this.windowTop = window.top.scrollY;\n      var scrollTop = this.windowTop;\n      var docHeight = document.body.scrollHeight;\n      var winHeight = window.innerHeight;\n      var scrollPercent = scrollTop / (docHeight - winHeight);\n      var scrollPercentRounded = Math.round(scrollPercent * 100);\n      this.devTitleMoveRightValue = this.moveElement(scrollPercentRounded, this.devTitleMoveTopValue, this.devTitleMoveRightValue, this.devTitleMoveRightOriginalValue);\n      this.mainTitleMoveLeftValue = this.moveElement(scrollPercentRounded, this.mainTitleMoveTopValue, this.mainTitleMoveLeftValue, this.mainTitleMoveLeftOriginalValue);\n    }\n  },\n  mounted: function mounted() {\n    window.addEventListener(\"scroll\", this.onScroll);\n  },\n  beforeDestroy: function beforeDestroy() {\n    window.removeEventListener(\"scroll\", this.onScroll);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvRW50cnlTZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRW50cnlTZWN0aW9uLnZ1ZT9mZmVmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgbWFpblwiPlxyXG4gICAgPCEtLSA8Y2FudmFzIGlkPVwiY2FudmFzLWxlZnRcIiBjbGFzcz1cImNhbnZhcy1sZWZ0XCI+PC9jYW52YXM+IC0tPlxyXG4gICAgPGNhbnZhcyBpZD1cImNhbnZhcy1yaWdodFwiIGNsYXNzPVwiY2FudmFzLXJpZ2h0XCI+PC9jYW52YXM+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxhY2stc3Ryb2tlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkZXYtdGl0bGVcIiA6c3R5bGU9XCIncmlnaHQ6JyArIGRldlRpdGxlTW92ZVJpZ2h0VmFsdWUgKyAnJTsgdG9wOicgKyBkZXZUaXRsZU1vdmVUb3BWYWx1ZSArICclJ1wiPlxyXG4gICAgICAgIDxoMT5cclxuICAgICAgICAgIFdlYiBEZXZlbG9wZXJcclxuICAgICAgICA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWFpbi10aXRsZVwiIDpzdHlsZT1cIidsZWZ0OicgKyBtYWluVGl0bGVNb3ZlTGVmdFZhbHVlICsgJyU7IHRvcDonICsgbWFpblRpdGxlTW92ZVRvcFZhbHVlICsgJyUnXCI+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgSm9yZ2UgZGEgU2lsdmFcclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGFkb3ctcHJpbWFyeS1sZWZ0XCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0VudHJ5U2VjdGlvbicsXHJcbiAgcHJvcHM6IHt9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB3aW5kb3dUb3A6IHdpbmRvdy50b3Auc2Nyb2xsWSxcclxuICAgICAgICAgIGRldlRpdGxlTW92ZVRvcFZhbHVlOiAyNSxcclxuICAgICAgICAgIGRldlRpdGxlTW92ZVJpZ2h0VmFsdWU6IDYsXHJcbiAgICAgICAgICBkZXZUaXRsZU1vdmVSaWdodE9yaWdpbmFsVmFsdWU6IDYsXHJcbiAgICAgICAgICBtYWluVGl0bGVNb3ZlVG9wVmFsdWU6IDY4LFxyXG4gICAgICAgICAgbWFpblRpdGxlTW92ZUxlZnRWYWx1ZTogMjMsXHJcbiAgICAgICAgICBtYWluVGl0bGVNb3ZlTGVmdE9yaWdpbmFsVmFsdWU6IDIzLFxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uUmVzaXplKCkge1xyXG4gICAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcclxuICAgIH0sXHJcblxyXG4gICAgbW92ZUVsZW1lbnQoZGlzdGFuY2UsIHRvcFZhbHVlLCBtb3ZlVmFsdWUsIG9yaWdpbmFsVmFsdWUpIHtcclxuICAgICAgaWYodG9wVmFsdWUgKyA1MCA+PSBkaXN0YW5jZSkge1xyXG4gICAgICAgIG1vdmVWYWx1ZSA9IGRpc3RhbmNlICogMC45O1xyXG4gICAgICAgIGlmKG1vdmVWYWx1ZSA+IG9yaWdpbmFsVmFsdWUgKSB7XHJcbiAgICAgICAgICByZXR1cm4gbW92ZVZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gb3JpZ2luYWxWYWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uU2Nyb2xsKCl7XHJcbiAgICAgIHRoaXMud2luZG93VG9wID0gd2luZG93LnRvcC5zY3JvbGxZO1xyXG4gICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy53aW5kb3dUb3A7XHJcbiAgICAgIGxldCBkb2NIZWlnaHQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodDtcclxuICAgICAgbGV0IHdpbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgbGV0IHNjcm9sbFBlcmNlbnQgPSBzY3JvbGxUb3AgLyAoZG9jSGVpZ2h0IC0gd2luSGVpZ2h0KTtcclxuICAgICAgbGV0IHNjcm9sbFBlcmNlbnRSb3VuZGVkID0gTWF0aC5yb3VuZChzY3JvbGxQZXJjZW50ICogMTAwKTtcclxuXHJcbiAgICAgIHRoaXMuZGV2VGl0bGVNb3ZlUmlnaHRWYWx1ZSA9IHRoaXMubW92ZUVsZW1lbnQoc2Nyb2xsUGVyY2VudFJvdW5kZWQsIHRoaXMuZGV2VGl0bGVNb3ZlVG9wVmFsdWUsIHRoaXMuZGV2VGl0bGVNb3ZlUmlnaHRWYWx1ZSwgdGhpcy5kZXZUaXRsZU1vdmVSaWdodE9yaWdpbmFsVmFsdWUpO1xyXG4gICAgICB0aGlzLm1haW5UaXRsZU1vdmVMZWZ0VmFsdWUgPSB0aGlzLm1vdmVFbGVtZW50KHNjcm9sbFBlcmNlbnRSb3VuZGVkLCB0aGlzLm1haW5UaXRsZU1vdmVUb3BWYWx1ZSwgdGhpcy5tYWluVGl0bGVNb3ZlTGVmdFZhbHVlLCB0aGlzLm1haW5UaXRsZU1vdmVMZWZ0T3JpZ2luYWxWYWx1ZSk7XHJcblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpXHJcbiAgfSxcclxuICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbClcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCJAL2Fzc2V0cy9fdmFyaWFibGVzLnNjc3NcIjtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9ub3RvbiZmYW1pbHk9UmFsZXdheSZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5tYWluIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgLy8gdG9wOiA2OCU7XHJcbiAgLy8gbGVmdDogNTIlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAmOmhvdmVyIHtcclxuICAgIC5zaGFkb3ctcHJpbWFyeS1sZWZ0IHtcclxuICAgICAgLy8gYW5pbWF0aW9uOiB0aWx0IDNzIGluZmluaXRlIGZvcndhcmRzO1xyXG4vLyBwb2x5Z29uKDAgMTclLCAxMDAlIDAlLCA5NSUgMTAwJSwgMCUgODUlKVxyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMTclLCAxMDAlIDAlLCA5NSUgMTAwJSwgMCUgODUlKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogM3B4IDZweCAycHggNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDk4JSAxMDAlLCAwJSAxMDAlKTtcclxuICAgIC8vIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgOTglIDEwMCUsIDAlIDEwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC03ZGVnKTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICRibGFjaztcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICR3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcbiAgLnNoYWRvdy1wcmltYXJ5LWxlZnQge1xyXG4gICAgdG9wOiAtMzUlO1xyXG4gICAgYm90dG9tOiAtMTAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAtMTAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkc2Vjb25kYXJ5IDAlLCAkc2Vjb25kYXJ5IDI1JSwgJHByaW1hcnkgMjUlLCAkcHJpbWFyeSAxMDAlKTsgIDtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDI1JSwgOTYlIDAlLCA5MyUgMTAwJSwgMCUgODAlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtN2RlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcclxuICB9XHJcbn1cclxuXHJcbi5kZXYtdGl0bGUge1xyXG4gICAgLy8gdG9wOiAyNSU7XHJcbiAgICByaWdodDogNiU7XHJcbiAgICAvLyByaWdodDogdGhpcy5tb3ZlUmlnaHRWYWxpZVxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgYm90dG9tOiAtMXB4O1xyXG4gICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeTtcclxuICAgICAgICB9ICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogXCJNb25vdG9uXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHBhZGRpbmc6IDdweCA3cHggMnB4IDdweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcclxuXHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiV2ViIERldmVsb3BlclwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtMzAwJTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB0aWx0IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTIwZGVnKTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtMjEuNWRlZyk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgLTIwZGVnKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCAtMTkuNWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIC0yMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FudmFzLWxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB0b3A6IDA7XHJcbiAgLy8gYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgLy8gY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxOTAlIDAlLCAxMDAlIDEwMCUsIDBweCAxMDAlKTtcclxufVxyXG5cclxuLmNhbnZhcy1yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZDogXHJcbiAgbGluZWFyLWdyYWRpZW50KDI5MGRlZywgJHNlY29uZGFyeSAwJSwgJHNlY29uZGFyeSA1NSUsICRibGFjayAyNSUsICRibGFjayA3NSUsICRwcmltYXJ5IDc1JSlcclxuICAvLyBsaW5lYXItZ3JhZGllbnQoMjkwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDI1JSwgcmdiYSgwLDAsMCwxKSAyNSUsIHJnYmEoMCwwLDAsMSkgMzUlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDM1JSk7XHJcbiAgLy8gbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkcHJpbWFyeSAwJSwgJHByaW1hcnkgMjUlLCAkc2Vjb25kYXJ5IDI1JSk7IDtcclxuICAvLyBjbGlwLXBhdGg6IHBvbHlnb24oMTAlIDAlLCAxMDAlIDAlLCAxMDAlIDEwMCUsIDBweCAxMDAlKTtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYmxhY2stc3Ryb2tlIHtcclxuICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzAlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGhlaWdodDogMTg1cHg7XHJcbiAgdHJhbnNmb3JtOiBza2V3KDBkZWcsIC03ZGVnKTtcclxufVxyXG5cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQTFCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EntrySection.vue?vue&type=script&lang=js&\n");

/***/ })

})