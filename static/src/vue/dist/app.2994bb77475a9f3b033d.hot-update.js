webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectSection.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProjectPopup_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectPopup.vue */ \"./src/components/ProjectPopup.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProjectSection',\n  components: {\n    ProjectPopup: _ProjectPopup_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function data() {\n    return {\n      projects: [{\n        \"id\": \"1\",\n        \"name\": \"Project 1\",\n        \"subtitle\": \"Subtitle 1 - Something something whatever\",\n        \"description\": \"blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas\",\n        \"img\": [\"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\", \"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\", \"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\", \"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\"]\n      }, {\n        \"id\": \"2\",\n        \"name\": \"Project 2\",\n        \"subtitle\": \"Subtitle 1 - Something something whatever\",\n        \"description\": \"blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas\",\n        \"img\": [\"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\"]\n      }, {\n        \"id\": \"3\",\n        \"name\": \"Project 2\",\n        \"subtitle\": \"Subtitle 1 - Something something whatever\",\n        \"description\": \"blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas\",\n        \"img\": [\"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\"]\n      }, {\n        \"id\": \"4\",\n        \"name\": \"Project 2\",\n        \"subtitle\": \"Subtitle 1 - Something something whatever\",\n        \"description\": \"blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas\",\n        \"img\": [\"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\"]\n      }, {\n        \"id\": \"5\",\n        \"name\": \"Project 2\",\n        \"subtitle\": \"Subtitle 1 - Something something whatever\",\n        \"description\": \"blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas\",\n        \"img\": [\"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\"]\n      }],\n      selectedProject: {},\n      dblock: false,\n      dnone: true\n    };\n  },\n  methods: {\n    showProject: function showProject(project) {\n      this.dblock = true;\n      this.dnone = false;\n      this.selectedProject = project;\n      console.log(this.selectedProject);\n    },\n    closePopup: function closePopup() {\n      this.dblock = false;\n      this.dnone = true;\n      console.log(\"wrh\");\n      console.log(this.isActive);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUHJvamVjdFNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Qcm9qZWN0U2VjdGlvbi52dWU/MDhkNyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInByb2plY3Qtc2VjdGlvbiBweS00IGNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgPGRpdiB2LWZvcj1cInByb2plY3QgaW4gcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJwcm9qZWN0LmlkXCJcclxuICAgICAgICAgICAgICAgICAgICA6aWQ9XCJgcHJvamVjdC0ke3Byb2plY3QuaWR9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtMTIgbWItNCBwcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgOmRhdGEtdGFyZ2V0PVwiYCNNb2RhbFByb2plY3Qke3Byb2plY3QuaWR9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1vbjpjbGljaz1cInNob3dQcm9qZWN0KHByb2plY3QpXCI+XHJcbiAgICAgICAgICAgIDxpbWcgOnNyYz1cInByb2plY3QuaW1nXCIgOmFsdD1cImAke3Byb2plY3QubmFtZX0gLSAke3Byb2plY3Quc3VidGl0bGV9YFwiIGNsYXNzPVwicHJvamVjdC10aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInByb2plY3QtbmFtZSBtdC00XCI+e3twcm9qZWN0Lm5hbWV9fTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3Qtc3VidGl0bGUgbXQtMlwiPnt7cHJvamVjdC5zdWJ0aXRsZX19PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gXHJcblxyXG4gICAgICAgIDxkaXYgcmVmPVwiY3VzdG9tUG9wdXBcIiA6Y2xhc3M9XCJ7J2QtYmxvY2snOiBkYmxvY2ssICdkLW5vbmUnIDogZG5vbmUsICdwb3B1cC1iZyc6ICdwb3B1cC1iZyd9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tcG9wdXAgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtaGVhZCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtaGVhZC1jbG9zaW5nLWJ1dHRvblwiIHYtb246Y2xpY2s9XCJjbG9zZVBvcHVwXCI+eDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxQcm9qZWN0UG9wdXAgOnByb2plY3Q9XCJzZWxlY3RlZFByb2plY3RcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgUHJvamVjdFBvcHVwIGZyb20gJy4vUHJvamVjdFBvcHVwLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnUHJvamVjdFNlY3Rpb24nLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgICAgUHJvamVjdFBvcHVwXHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcHJvamVjdHMgOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIiA6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCIgOiBcIlByb2plY3QgMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdWJ0aXRsZVwiIDogXCJTdWJ0aXRsZSAxIC0gU29tZXRoaW5nIHNvbWV0aGluZyB3aGF0ZXZlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImJsYWhqIGJsYWggdmFsc21rZGFzYXNqIGMgYXNqZGthcyBkYSBqc2sgbnZic2Zqa3Ygc2Rqa2JmIHNkdmprc2QgY2ZhaiBjaiBjZmFzXCIsXHJcbiAgICAgICAgICAgICAgICBcImltZ1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5teWRvbWFpbmUuY29tL3RobWIvSF9rZERVbnAzT1dLSlprSVozNHNiX1ppdkhZPS8xNDAweDEwMDQvZmlsdGVyczpub191cHNjYWxlKCk6bWF4X2J5dGVzKDE1MDAwMCk6c3RyaXBfaWNjKCkvU2NyZWVuU2hvdDIwMTktMDktMTFhdDkuMTEuNTBBTS1jZTVmNjY4YTIyNTQ0NGJjOGUzOGY3Y2VhMWQ3M2M3Mi5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3Lm15ZG9tYWluZS5jb20vdGhtYi9IX2tkRFVucDNPV0tKWmtJWjM0c2JfWml2SFk9LzE0MDB4MTAwNC9maWx0ZXJzOm5vX3Vwc2NhbGUoKTptYXhfYnl0ZXMoMTUwMDAwKTpzdHJpcF9pY2MoKS9TY3JlZW5TaG90MjAxOS0wOS0xMWF0OS4xMS41MEFNLWNlNWY2NjhhMjI1NDQ0YmM4ZTM4ZjdjZWExZDczYzcyLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cubXlkb21haW5lLmNvbS90aG1iL0hfa2REVW5wM09XS0paa0laMzRzYl9aaXZIWT0vMTQwMHgxMDA0L2ZpbHRlcnM6bm9fdXBzY2FsZSgpOm1heF9ieXRlcygxNTAwMDApOnN0cmlwX2ljYygpL1NjcmVlblNob3QyMDE5LTA5LTExYXQ5LjExLjUwQU0tY2U1ZjY2OGEyMjU0NDRiYzhlMzhmN2NlYTFkNzNjNzIucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5teWRvbWFpbmUuY29tL3RobWIvSF9rZERVbnAzT1dLSlprSVozNHNiX1ppdkhZPS8xNDAweDEwMDQvZmlsdGVyczpub191cHNjYWxlKCk6bWF4X2J5dGVzKDE1MDAwMCk6c3RyaXBfaWNjKCkvU2NyZWVuU2hvdDIwMTktMDktMTFhdDkuMTEuNTBBTS1jZTVmNjY4YTIyNTQ0NGJjOGUzOGY3Y2VhMWQ3M2M3Mi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCIgOiBcIjJcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiIDogXCJQcm9qZWN0IDJcIixcclxuICAgICAgICAgICAgICAgIFwic3VidGl0bGVcIiA6IFwiU3VidGl0bGUgMSAtIFNvbWV0aGluZyBzb21ldGhpbmcgd2hhdGV2ZXJcIixcclxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJibGFoaiBibGFoIHZhbHNta2Rhc2FzaiBjIGFzamRrYXMgZGEganNrIG52YnNmamt2IHNkamtiZiBzZHZqa3NkIGNmYWogY2ogY2Zhc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJpbWdcIjogW1wiaHR0cHM6Ly93d3cubXlkb21haW5lLmNvbS90aG1iL0hfa2REVW5wM09XS0paa0laMzRzYl9aaXZIWT0vMTQwMHgxMDA0L2ZpbHRlcnM6bm9fdXBzY2FsZSgpOm1heF9ieXRlcygxNTAwMDApOnN0cmlwX2ljYygpL1NjcmVlblNob3QyMDE5LTA5LTExYXQ5LjExLjUwQU0tY2U1ZjY2OGEyMjU0NDRiYzhlMzhmN2NlYTFkNzNjNzIucG5nXCJdXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCIgOiBcIjNcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiIDogXCJQcm9qZWN0IDJcIixcclxuICAgICAgICAgICAgICAgIFwic3VidGl0bGVcIiA6IFwiU3VidGl0bGUgMSAtIFNvbWV0aGluZyBzb21ldGhpbmcgd2hhdGV2ZXJcIixcclxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJibGFoaiBibGFoIHZhbHNta2Rhc2FzaiBjIGFzamRrYXMgZGEganNrIG52YnNmamt2IHNkamtiZiBzZHZqa3NkIGNmYWogY2ogY2Zhc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJpbWdcIjogW1wiaHR0cHM6Ly93d3cubXlkb21haW5lLmNvbS90aG1iL0hfa2REVW5wM09XS0paa0laMzRzYl9aaXZIWT0vMTQwMHgxMDA0L2ZpbHRlcnM6bm9fdXBzY2FsZSgpOm1heF9ieXRlcygxNTAwMDApOnN0cmlwX2ljYygpL1NjcmVlblNob3QyMDE5LTA5LTExYXQ5LjExLjUwQU0tY2U1ZjY2OGEyMjU0NDRiYzhlMzhmN2NlYTFkNzNjNzIucG5nXCJdXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCIgOiBcIjRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiIDogXCJQcm9qZWN0IDJcIixcclxuICAgICAgICAgICAgICAgIFwic3VidGl0bGVcIiA6IFwiU3VidGl0bGUgMSAtIFNvbWV0aGluZyBzb21ldGhpbmcgd2hhdGV2ZXJcIixcclxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJibGFoaiBibGFoIHZhbHNta2Rhc2FzaiBjIGFzamRrYXMgZGEganNrIG52YnNmamt2IHNkamtiZiBzZHZqa3NkIGNmYWogY2ogY2Zhc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJpbWdcIjogW1wiaHR0cHM6Ly93d3cubXlkb21haW5lLmNvbS90aG1iL0hfa2REVW5wM09XS0paa0laMzRzYl9aaXZIWT0vMTQwMHgxMDA0L2ZpbHRlcnM6bm9fdXBzY2FsZSgpOm1heF9ieXRlcygxNTAwMDApOnN0cmlwX2ljYygpL1NjcmVlblNob3QyMDE5LTA5LTExYXQ5LjExLjUwQU0tY2U1ZjY2OGEyMjU0NDRiYzhlMzhmN2NlYTFkNzNjNzIucG5nXCJdXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCIgOiBcIjVcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiIDogXCJQcm9qZWN0IDJcIixcclxuICAgICAgICAgICAgICAgIFwic3VidGl0bGVcIiA6IFwiU3VidGl0bGUgMSAtIFNvbWV0aGluZyBzb21ldGhpbmcgd2hhdGV2ZXJcIixcclxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJibGFoaiBibGFoIHZhbHNta2Rhc2FzaiBjIGFzamRrYXMgZGEganNrIG52YnNmamt2IHNkamtiZiBzZHZqa3NkIGNmYWogY2ogY2Zhc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJpbWdcIjogW1wiaHR0cHM6Ly93d3cubXlkb21haW5lLmNvbS90aG1iL0hfa2REVW5wM09XS0paa0laMzRzYl9aaXZIWT0vMTQwMHgxMDA0L2ZpbHRlcnM6bm9fdXBzY2FsZSgpOm1heF9ieXRlcygxNTAwMDApOnN0cmlwX2ljYygpL1NjcmVlblNob3QyMDE5LTA5LTExYXQ5LjExLjUwQU0tY2U1ZjY2OGEyMjU0NDRiYzhlMzhmN2NlYTFkNzNjNzIucG5nXCJdXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0OiB7fSxcclxuICAgICAgICAgIGRibG9jazogZmFsc2UsXHJcbiAgICAgICAgICBkbm9uZTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBzaG93UHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy5kYmxvY2sgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5kbm9uZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZFByb2plY3QpXHJcbiAgICB9LFxyXG4gICAgY2xvc2VQb3B1cCgpe1xyXG4gICAgICAgICAgdGhpcy5kYmxvY2sgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZG5vbmUgPSB0cnVlXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ3cmhcIilcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzQWN0aXZlKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUl0YWxpYW5hJmZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XHJcbi5wcm9qZWN0IHsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAucHJvamVjdC10aHVtYm5haWwge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByb2plY3QtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnByb2plY3QtdGh1bWJuYWlsIHtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucG9wdXAtYmcge1xyXG4gICAgYmFja2dyb3VuZDogIzE5MTkxOWJmXHJcbn1cclxuXHJcbi5jdXN0b20tcG9wdXAge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgYm90dG9tOiA0MHB4O1xyXG4gICAgbGVmdDogMjRweDtcclxuICAgIHJpZ2h0OiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG59XHJcblxyXG4ucG9wdXAtaGVhZC1jbG9zaW5nLWJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBakRBO0FBbURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQTFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=script&lang=js&\n");

/***/ })

})