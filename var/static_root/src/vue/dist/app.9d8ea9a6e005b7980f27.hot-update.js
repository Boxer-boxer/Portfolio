webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectSection.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProjectPopup_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectPopup.vue */ \"./src/components/ProjectPopup.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProjectSection',\n  components: {\n    ProjectPopup: _ProjectPopup_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function data() {\n    return {\n      projects: [{\n        \"id\": \"1\",\n        \"name\": \"Project 1\",\n        \"subtitle\": \"Subtitle 1 - Something something whatever\",\n        \"description\": \"blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas\",\n        \"img\": [\"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\", \"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\", \"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\", \"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\"]\n      }, {\n        \"id\": \"2\",\n        \"name\": \"Project 2\",\n        \"subtitle\": \"Subtitle 2 - Something something whatever\",\n        \"description\": \"blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas\",\n        \"img\": [\"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\"]\n      }, {\n        \"id\": \"3\",\n        \"name\": \"Project 2\",\n        \"subtitle\": \"Subtitle 3 - Something something whatever\",\n        \"description\": \"blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas\",\n        \"img\": [\"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\"]\n      }, {\n        \"id\": \"4\",\n        \"name\": \"Project 4\",\n        \"subtitle\": \"Subtitle 1 - Something something whatever\",\n        \"description\": \"blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas\",\n        \"img\": [\"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\"]\n      }, {\n        \"id\": \"5\",\n        \"name\": \"Project 6\",\n        \"subtitle\": \"Subtitle 1 - Something something whatever\",\n        \"description\": \"blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas\",\n        \"img\": [\"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\"]\n      }],\n      selectedProject: {},\n      dblock: false,\n      dnone: true\n    };\n  },\n  methods: {\n    showProject: function showProject(project) {\n      this.dblock = true;\n      this.dnone = false;\n      this.selectedProject = project;\n      console.log(this.selectedProject.id);\n    },\n    closePopup: function closePopup() {\n      this.dblock = false;\n      this.dnone = true;\n      console.log(\"wrh\");\n      console.log(this.selectedProject.id);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUHJvamVjdFNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Qcm9qZWN0U2VjdGlvbi52dWU/MDhkNyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInByb2plY3Qtc2VjdGlvbiBweC01IHB4LWxnLTUgcHktNCBjb250YWluZXIgbXgtMFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgPGRpdiB2LWZvcj1cInByb2plY3QgaW4gcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJwcm9qZWN0LmlkXCJcclxuICAgICAgICAgICAgICAgICAgICA6aWQ9XCJgcHJvamVjdC0ke3Byb2plY3QuaWR9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtMTIgbWItNCBwcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgOmRhdGEtdGFyZ2V0PVwiYCNNb2RhbFByb2plY3Qke3Byb2plY3QuaWR9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1vbjpjbGljaz1cInNob3dQcm9qZWN0KHByb2plY3QpXCI+XHJcbiAgICAgICAgICAgIDxpbWcgOnNyYz1cInByb2plY3QuaW1nWzBdXCIgOmFsdD1cImAke3Byb2plY3QubmFtZX0gLSAke3Byb2plY3Quc3VidGl0bGV9YFwiIGNsYXNzPVwicHJvamVjdC10aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInByb2plY3QtbmFtZSBtdC00XCI+e3twcm9qZWN0Lm5hbWV9fTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3Qtc3VidGl0bGUgbXQtMlwiPnt7cHJvamVjdC5zdWJ0aXRsZX19PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gXHJcblxyXG4gICAgICAgIDxkaXYgcmVmPVwiY3VzdG9tUG9wdXBcIiA6Y2xhc3M9XCJ7J2QtYmxvY2snOiBkYmxvY2ssICdkLW5vbmUnIDogZG5vbmUsICdwb3B1cC1iZyc6ICdwb3B1cC1iZyd9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tcG9wdXAgZC1mbGV4IGZsZXgtY29sdW1uIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWhlYWQgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1oZWFkLWNsb3NpbmctYnV0dG9uXCIgdi1vbjpjbGljaz1cImNsb3NlUG9wdXBcIj54PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPFByb2plY3RQb3B1cCA6c2VsZWN0ZWRQcm9qZWN0PVwic2VsZWN0ZWRQcm9qZWN0XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFByb2plY3RQb3B1cCBmcm9tICcuL1Byb2plY3RQb3B1cC52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ1Byb2plY3RTZWN0aW9uJyxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICAgIFByb2plY3RQb3B1cFxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHByb2plY3RzIDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCIgOiBcIjFcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiIDogXCJQcm9qZWN0IDFcIixcclxuICAgICAgICAgICAgICAgIFwic3VidGl0bGVcIiA6IFwiU3VidGl0bGUgMSAtIFNvbWV0aGluZyBzb21ldGhpbmcgd2hhdGV2ZXJcIixcclxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJibGFoaiBibGFoIHZhbHNta2Rhc2FzaiBjIGFzamRrYXMgZGEganNrIG52YnNmamt2IHNkamtiZiBzZHZqa3NkIGNmYWogY2ogY2Zhc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJpbWdcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cubXlkb21haW5lLmNvbS90aG1iL0hfa2REVW5wM09XS0paa0laMzRzYl9aaXZIWT0vMTQwMHgxMDA0L2ZpbHRlcnM6bm9fdXBzY2FsZSgpOm1heF9ieXRlcygxNTAwMDApOnN0cmlwX2ljYygpL1NjcmVlblNob3QyMDE5LTA5LTExYXQ5LjExLjUwQU0tY2U1ZjY2OGEyMjU0NDRiYzhlMzhmN2NlYTFkNzNjNzIucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5teWRvbWFpbmUuY29tL3RobWIvSF9rZERVbnAzT1dLSlprSVozNHNiX1ppdkhZPS8xNDAweDEwMDQvZmlsdGVyczpub191cHNjYWxlKCk6bWF4X2J5dGVzKDE1MDAwMCk6c3RyaXBfaWNjKCkvU2NyZWVuU2hvdDIwMTktMDktMTFhdDkuMTEuNTBBTS1jZTVmNjY4YTIyNTQ0NGJjOGUzOGY3Y2VhMWQ3M2M3Mi5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3Lm15ZG9tYWluZS5jb20vdGhtYi9IX2tkRFVucDNPV0tKWmtJWjM0c2JfWml2SFk9LzE0MDB4MTAwNC9maWx0ZXJzOm5vX3Vwc2NhbGUoKTptYXhfYnl0ZXMoMTUwMDAwKTpzdHJpcF9pY2MoKS9TY3JlZW5TaG90MjAxOS0wOS0xMWF0OS4xMS41MEFNLWNlNWY2NjhhMjI1NDQ0YmM4ZTM4ZjdjZWExZDczYzcyLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cubXlkb21haW5lLmNvbS90aG1iL0hfa2REVW5wM09XS0paa0laMzRzYl9aaXZIWT0vMTQwMHgxMDA0L2ZpbHRlcnM6bm9fdXBzY2FsZSgpOm1heF9ieXRlcygxNTAwMDApOnN0cmlwX2ljYygpL1NjcmVlblNob3QyMDE5LTA5LTExYXQ5LjExLjUwQU0tY2U1ZjY2OGEyMjU0NDRiYzhlMzhmN2NlYTFkNzNjNzIucG5nXCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiIDogXCIyXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIiA6IFwiUHJvamVjdCAyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN1YnRpdGxlXCIgOiBcIlN1YnRpdGxlIDIgLSBTb21ldGhpbmcgc29tZXRoaW5nIHdoYXRldmVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiYmxhaGogYmxhaCB2YWxzbWtkYXNhc2ogYyBhc2pka2FzIGRhIGpzayBudmJzZmprdiBzZGprYmYgc2R2amtzZCBjZmFqIGNqIGNmYXNcIixcclxuICAgICAgICAgICAgICAgIFwiaW1nXCI6IFtcImh0dHBzOi8vd3d3Lm15ZG9tYWluZS5jb20vdGhtYi9IX2tkRFVucDNPV0tKWmtJWjM0c2JfWml2SFk9LzE0MDB4MTAwNC9maWx0ZXJzOm5vX3Vwc2NhbGUoKTptYXhfYnl0ZXMoMTUwMDAwKTpzdHJpcF9pY2MoKS9TY3JlZW5TaG90MjAxOS0wOS0xMWF0OS4xMS41MEFNLWNlNWY2NjhhMjI1NDQ0YmM4ZTM4ZjdjZWExZDczYzcyLnBuZ1wiXVxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiIDogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIiA6IFwiUHJvamVjdCAyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN1YnRpdGxlXCIgOiBcIlN1YnRpdGxlIDMgLSBTb21ldGhpbmcgc29tZXRoaW5nIHdoYXRldmVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiYmxhaGogYmxhaCB2YWxzbWtkYXNhc2ogYyBhc2pka2FzIGRhIGpzayBudmJzZmprdiBzZGprYmYgc2R2amtzZCBjZmFqIGNqIGNmYXNcIixcclxuICAgICAgICAgICAgICAgIFwiaW1nXCI6IFtcImh0dHBzOi8vd3d3Lm15ZG9tYWluZS5jb20vdGhtYi9IX2tkRFVucDNPV0tKWmtJWjM0c2JfWml2SFk9LzE0MDB4MTAwNC9maWx0ZXJzOm5vX3Vwc2NhbGUoKTptYXhfYnl0ZXMoMTUwMDAwKTpzdHJpcF9pY2MoKS9TY3JlZW5TaG90MjAxOS0wOS0xMWF0OS4xMS41MEFNLWNlNWY2NjhhMjI1NDQ0YmM4ZTM4ZjdjZWExZDczYzcyLnBuZ1wiXVxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiIDogXCI0XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIiA6IFwiUHJvamVjdCA0XCIsXHJcbiAgICAgICAgICAgICAgICBcInN1YnRpdGxlXCIgOiBcIlN1YnRpdGxlIDEgLSBTb21ldGhpbmcgc29tZXRoaW5nIHdoYXRldmVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiYmxhaGogYmxhaCB2YWxzbWtkYXNhc2ogYyBhc2pka2FzIGRhIGpzayBudmJzZmprdiBzZGprYmYgc2R2amtzZCBjZmFqIGNqIGNmYXNcIixcclxuICAgICAgICAgICAgICAgIFwiaW1nXCI6IFtcImh0dHBzOi8vd3d3Lm15ZG9tYWluZS5jb20vdGhtYi9IX2tkRFVucDNPV0tKWmtJWjM0c2JfWml2SFk9LzE0MDB4MTAwNC9maWx0ZXJzOm5vX3Vwc2NhbGUoKTptYXhfYnl0ZXMoMTUwMDAwKTpzdHJpcF9pY2MoKS9TY3JlZW5TaG90MjAxOS0wOS0xMWF0OS4xMS41MEFNLWNlNWY2NjhhMjI1NDQ0YmM4ZTM4ZjdjZWExZDczYzcyLnBuZ1wiXVxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiIDogXCI1XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIiA6IFwiUHJvamVjdCA2XCIsXHJcbiAgICAgICAgICAgICAgICBcInN1YnRpdGxlXCIgOiBcIlN1YnRpdGxlIDEgLSBTb21ldGhpbmcgc29tZXRoaW5nIHdoYXRldmVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiYmxhaGogYmxhaCB2YWxzbWtkYXNhc2ogYyBhc2pka2FzIGRhIGpzayBudmJzZmprdiBzZGprYmYgc2R2amtzZCBjZmFqIGNqIGNmYXNcIixcclxuICAgICAgICAgICAgICAgIFwiaW1nXCI6IFtcImh0dHBzOi8vd3d3Lm15ZG9tYWluZS5jb20vdGhtYi9IX2tkRFVucDNPV0tKWmtJWjM0c2JfWml2SFk9LzE0MDB4MTAwNC9maWx0ZXJzOm5vX3Vwc2NhbGUoKTptYXhfYnl0ZXMoMTUwMDAwKTpzdHJpcF9pY2MoKS9TY3JlZW5TaG90MjAxOS0wOS0xMWF0OS4xMS41MEFNLWNlNWY2NjhhMjI1NDQ0YmM4ZTM4ZjdjZWExZDczYzcyLnBuZ1wiXVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIHNlbGVjdGVkUHJvamVjdDoge30sXHJcbiAgICAgICAgICBkYmxvY2s6IGZhbHNlLFxyXG4gICAgICAgICAgZG5vbmU6IHRydWVcclxuICAgICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2hvd1Byb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMuZGJsb2NrID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuZG5vbmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRQcm9qZWN0LmlkKVxyXG4gICAgfSxcclxuICAgIGNsb3NlUG9wdXAoKXtcclxuICAgICAgICAgIHRoaXMuZGJsb2NrID0gZmFsc2VcclxuICAgICAgICB0aGlzLmRub25lID0gdHJ1ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwid3JoXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZFByb2plY3QuaWQpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SXRhbGlhbmEmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcclxuLnByb2plY3QgeyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgLnByb2plY3QtdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRodW1ibmFpbCB7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLnBvcHVwLWJnIHtcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MTliZlxyXG59XHJcblxyXG4uY3VzdG9tLXBvcHVwIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGJvdHRvbTogNDBweDtcclxuICAgIGxlZnQ6IDI0cHg7XHJcbiAgICByaWdodDogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucG9wdXAtaGVhZC1jbG9zaW5nLWJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBakRBO0FBbURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQTFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"e4b7ee98-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e4b7ee98-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"project-section px-5 px-lg-5 py-4 container mx-0\" },\n    [\n      _c(\n        \"div\",\n        { staticClass: \"row justify-content-end\" },\n        [\n          _vm._l(_vm.projects, function (project) {\n            return _c(\n              \"div\",\n              {\n                key: project.id,\n                staticClass: \"col-lg-3 col-md-6 col-12 mb-4 project\",\n                attrs: {\n                  id: \"project-\" + project.id,\n                  \"data-toggle\": \"modal\",\n                  \"data-target\": \"#ModalProject\" + project.id,\n                },\n                on: {\n                  click: function ($event) {\n                    return _vm.showProject(project)\n                  },\n                },\n              },\n              [\n                _c(\"img\", {\n                  staticClass: \"project-thumbnail\",\n                  attrs: {\n                    src: project.img[0],\n                    alt: project.name + \" - \" + project.subtitle,\n                  },\n                }),\n                _c(\"div\", [\n                  _c(\"h2\", { staticClass: \"project-name mt-4\" }, [\n                    _vm._v(_vm._s(project.name)),\n                  ]),\n                  _c(\"p\", { staticClass: \"project-subtitle mt-2\" }, [\n                    _vm._v(_vm._s(project.subtitle)),\n                  ]),\n                ]),\n              ]\n            )\n          }),\n          _c(\n            \"div\",\n            {\n              ref: \"customPopup\",\n              class: {\n                \"d-block\": _vm.dblock,\n                \"d-none\": _vm.dnone,\n                \"popup-bg\": \"popup-bg\",\n              },\n            },\n            [\n              _c(\n                \"div\",\n                { staticClass: \"custom-popup d-flex flex-column container\" },\n                [\n                  _c(\n                    \"div\",\n                    {\n                      staticClass: \"popup-head d-flex justify-content-end my-4\",\n                    },\n                    [\n                      _c(\n                        \"div\",\n                        {\n                          staticClass: \"popup-head-closing-button\",\n                          on: { click: _vm.closePopup },\n                        },\n                        [_vm._v(\"x\")]\n                      ),\n                    ]\n                  ),\n                  _c(\"ProjectPopup\", {\n                    attrs: { selectedProject: _vm.selectedProject },\n                  }),\n                ],\n                1\n              ),\n            ]\n          ),\n        ],\n        2\n      ),\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiZTRiN2VlOTgtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL1Byb2plY3RTZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NjMyOTQ4OCZzY29wZWQ9dHJ1ZSYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0U2VjdGlvbi52dWU/YmNiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicHJvamVjdC1zZWN0aW9uIHB4LTUgcHgtbGctNSBweS00IGNvbnRhaW5lciBteC0wXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3cganVzdGlmeS1jb250ZW50LWVuZFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX2woX3ZtLnByb2plY3RzLCBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBwcm9qZWN0LmlkLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1sZy0zIGNvbC1tZC02IGNvbC0xMiBtYi00IHByb2plY3RcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwicHJvamVjdC1cIiArIHByb2plY3QuaWQsXG4gICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjTW9kYWxQcm9qZWN0XCIgKyBwcm9qZWN0LmlkLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd1Byb2plY3QocHJvamVjdClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByb2plY3QtdGh1bWJuYWlsXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IHByb2plY3QuaW1nWzBdLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6IHByb2plY3QubmFtZSArIFwiIC0gXCIgKyBwcm9qZWN0LnN1YnRpdGxlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvamVjdC1uYW1lIG10LTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvamVjdC5uYW1lKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2plY3Qtc3VidGl0bGUgbXQtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9qZWN0LnN1YnRpdGxlKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcImN1c3RvbVBvcHVwXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgXCJkLWJsb2NrXCI6IF92bS5kYmxvY2ssXG4gICAgICAgICAgICAgICAgXCJkLW5vbmVcIjogX3ZtLmRub25lLFxuICAgICAgICAgICAgICAgIFwicG9wdXAtYmdcIjogXCJwb3B1cC1iZ1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1wb3B1cCBkLWZsZXggZmxleC1jb2x1bW4gY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBvcHVwLWhlYWQgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbXktNFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwb3B1cC1oZWFkLWNsb3NpbmctYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VQb3B1cCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJ4XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcIlByb2plY3RQb3B1cFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNlbGVjdGVkUHJvamVjdDogX3ZtLnNlbGVjdGVkUHJvamVjdCB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"e4b7ee98-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true&\n");

/***/ })

})