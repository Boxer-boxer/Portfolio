webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectSection.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProjectPopup_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectPopup.vue */ \"./src/components/ProjectPopup.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProjectSection',\n  components: {\n    ProjectPopup: _ProjectPopup_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function data() {\n    return {\n      projects: [{\n        \"id\": \"1\",\n        \"name\": \"Project 1\",\n        \"subtitle\": \"Subtitle 1 - Something something whatever\",\n        \"description\": \"blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas\",\n        \"img\": [\"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\", \"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\", \"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\", \"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\"]\n      }, {\n        \"id\": \"2\",\n        \"name\": \"Project 2\",\n        \"subtitle\": \"Subtitle 2 - Something something whatever\",\n        \"description\": \"blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas\",\n        \"img\": [\"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\"]\n      }, {\n        \"id\": \"3\",\n        \"name\": \"Project 2\",\n        \"subtitle\": \"Subtitle 3 - Something something whatever\",\n        \"description\": \"blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas\",\n        \"img\": [\"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\"]\n      }, {\n        \"id\": \"4\",\n        \"name\": \"Project 4\",\n        \"subtitle\": \"Subtitle 1 - Something something whatever\",\n        \"description\": \"blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas\",\n        \"img\": [\"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\"]\n      }, {\n        \"id\": \"5\",\n        \"name\": \"Project 6\",\n        \"subtitle\": \"Subtitle 1 - Something something whatever\",\n        \"description\": \"blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas\",\n        \"img\": [\"https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png\"]\n      }],\n      selectedProject: {},\n      dblock: false,\n      dnone: true\n    };\n  },\n  methods: {\n    showProject: function showProject(project) {\n      this.dblock = true;\n      this.dnone = false;\n      this.selectedProject = project;\n      console.log(this.selectedProject.id);\n    },\n    closePopup: function closePopup() {\n      this.dblock = false;\n      this.dnone = true;\n      console.log(\"wrh\");\n      console.log(this.selectedProject.id);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUHJvamVjdFNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Qcm9qZWN0U2VjdGlvbi52dWU/MDhkNyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInByb2plY3Qtc2VjdGlvbiBweC01IHB4LWxnLTUgcHktNCBteC0wXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtZm9yPVwicHJvamVjdCBpbiBwcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cInByb2plY3QuaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIDppZD1cImBwcm9qZWN0LSR7cHJvamVjdC5pZH1gXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbC1sZy0yIHB4LTAgY29sLW1kLTYgY29sLTEyIG1iLTQgcHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIDpkYXRhLXRhcmdldD1cImAjTW9kYWxQcm9qZWN0JHtwcm9qZWN0LmlkfWBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtb246Y2xpY2s9XCJzaG93UHJvamVjdChwcm9qZWN0KVwiPlxyXG4gICAgICAgICAgICA8aW1nIDpzcmM9XCJwcm9qZWN0LmltZ1swXVwiIDphbHQ9XCJgJHtwcm9qZWN0Lm5hbWV9IC0gJHtwcm9qZWN0LnN1YnRpdGxlfWBcIiBjbGFzcz1cInByb2plY3QtdGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwcm9qZWN0LW5hbWUgbXQtNFwiPnt7cHJvamVjdC5uYW1lfX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LXN1YnRpdGxlIG10LTJcIj57e3Byb2plY3Quc3VidGl0bGV9fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IFxyXG5cclxuICAgICAgICA8ZGl2IHJlZj1cImN1c3RvbVBvcHVwXCIgOmNsYXNzPVwieydkLWJsb2NrJzogZGJsb2NrLCAnZC1ub25lJyA6IGRub25lLCAncG9wdXAtYmcnOiAncG9wdXAtYmcnfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLXBvcHVwIGQtZmxleCBmbGV4LWNvbHVtbiBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1oZWFkIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtaGVhZC1jbG9zaW5nLWJ1dHRvblwiIHYtb246Y2xpY2s9XCJjbG9zZVBvcHVwXCI+eDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxQcm9qZWN0UG9wdXAgOnNlbGVjdGVkUHJvamVjdD1cInNlbGVjdGVkUHJvamVjdFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBQcm9qZWN0UG9wdXAgZnJvbSAnLi9Qcm9qZWN0UG9wdXAudnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdQcm9qZWN0U2VjdGlvbicsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgICBQcm9qZWN0UG9wdXBcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBwcm9qZWN0cyA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiIDogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIiA6IFwiUHJvamVjdCAxXCIsXHJcbiAgICAgICAgICAgICAgICBcInN1YnRpdGxlXCIgOiBcIlN1YnRpdGxlIDEgLSBTb21ldGhpbmcgc29tZXRoaW5nIHdoYXRldmVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiYmxhaGogYmxhaCB2YWxzbWtkYXNhc2ogYyBhc2pka2FzIGRhIGpzayBudmJzZmprdiBzZGprYmYgc2R2amtzZCBjZmFqIGNqIGNmYXNcIixcclxuICAgICAgICAgICAgICAgIFwiaW1nXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3Lm15ZG9tYWluZS5jb20vdGhtYi9IX2tkRFVucDNPV0tKWmtJWjM0c2JfWml2SFk9LzE0MDB4MTAwNC9maWx0ZXJzOm5vX3Vwc2NhbGUoKTptYXhfYnl0ZXMoMTUwMDAwKTpzdHJpcF9pY2MoKS9TY3JlZW5TaG90MjAxOS0wOS0xMWF0OS4xMS41MEFNLWNlNWY2NjhhMjI1NDQ0YmM4ZTM4ZjdjZWExZDczYzcyLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cubXlkb21haW5lLmNvbS90aG1iL0hfa2REVW5wM09XS0paa0laMzRzYl9aaXZIWT0vMTQwMHgxMDA0L2ZpbHRlcnM6bm9fdXBzY2FsZSgpOm1heF9ieXRlcygxNTAwMDApOnN0cmlwX2ljYygpL1NjcmVlblNob3QyMDE5LTA5LTExYXQ5LjExLjUwQU0tY2U1ZjY2OGEyMjU0NDRiYzhlMzhmN2NlYTFkNzNjNzIucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5teWRvbWFpbmUuY29tL3RobWIvSF9rZERVbnAzT1dLSlprSVozNHNiX1ppdkhZPS8xNDAweDEwMDQvZmlsdGVyczpub191cHNjYWxlKCk6bWF4X2J5dGVzKDE1MDAwMCk6c3RyaXBfaWNjKCkvU2NyZWVuU2hvdDIwMTktMDktMTFhdDkuMTEuNTBBTS1jZTVmNjY4YTIyNTQ0NGJjOGUzOGY3Y2VhMWQ3M2M3Mi5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3Lm15ZG9tYWluZS5jb20vdGhtYi9IX2tkRFVucDNPV0tKWmtJWjM0c2JfWml2SFk9LzE0MDB4MTAwNC9maWx0ZXJzOm5vX3Vwc2NhbGUoKTptYXhfYnl0ZXMoMTUwMDAwKTpzdHJpcF9pY2MoKS9TY3JlZW5TaG90MjAxOS0wOS0xMWF0OS4xMS41MEFNLWNlNWY2NjhhMjI1NDQ0YmM4ZTM4ZjdjZWExZDczYzcyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIiA6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCIgOiBcIlByb2plY3QgMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdWJ0aXRsZVwiIDogXCJTdWJ0aXRsZSAyIC0gU29tZXRoaW5nIHNvbWV0aGluZyB3aGF0ZXZlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImJsYWhqIGJsYWggdmFsc21rZGFzYXNqIGMgYXNqZGthcyBkYSBqc2sgbnZic2Zqa3Ygc2Rqa2JmIHNkdmprc2QgY2ZhaiBjaiBjZmFzXCIsXHJcbiAgICAgICAgICAgICAgICBcImltZ1wiOiBbXCJodHRwczovL3d3dy5teWRvbWFpbmUuY29tL3RobWIvSF9rZERVbnAzT1dLSlprSVozNHNiX1ppdkhZPS8xNDAweDEwMDQvZmlsdGVyczpub191cHNjYWxlKCk6bWF4X2J5dGVzKDE1MDAwMCk6c3RyaXBfaWNjKCkvU2NyZWVuU2hvdDIwMTktMDktMTFhdDkuMTEuNTBBTS1jZTVmNjY4YTIyNTQ0NGJjOGUzOGY3Y2VhMWQ3M2M3Mi5wbmdcIl1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIiA6IFwiM1wiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCIgOiBcIlByb2plY3QgMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdWJ0aXRsZVwiIDogXCJTdWJ0aXRsZSAzIC0gU29tZXRoaW5nIHNvbWV0aGluZyB3aGF0ZXZlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImJsYWhqIGJsYWggdmFsc21rZGFzYXNqIGMgYXNqZGthcyBkYSBqc2sgbnZic2Zqa3Ygc2Rqa2JmIHNkdmprc2QgY2ZhaiBjaiBjZmFzXCIsXHJcbiAgICAgICAgICAgICAgICBcImltZ1wiOiBbXCJodHRwczovL3d3dy5teWRvbWFpbmUuY29tL3RobWIvSF9rZERVbnAzT1dLSlprSVozNHNiX1ppdkhZPS8xNDAweDEwMDQvZmlsdGVyczpub191cHNjYWxlKCk6bWF4X2J5dGVzKDE1MDAwMCk6c3RyaXBfaWNjKCkvU2NyZWVuU2hvdDIwMTktMDktMTFhdDkuMTEuNTBBTS1jZTVmNjY4YTIyNTQ0NGJjOGUzOGY3Y2VhMWQ3M2M3Mi5wbmdcIl1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIiA6IFwiNFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCIgOiBcIlByb2plY3QgNFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdWJ0aXRsZVwiIDogXCJTdWJ0aXRsZSAxIC0gU29tZXRoaW5nIHNvbWV0aGluZyB3aGF0ZXZlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImJsYWhqIGJsYWggdmFsc21rZGFzYXNqIGMgYXNqZGthcyBkYSBqc2sgbnZic2Zqa3Ygc2Rqa2JmIHNkdmprc2QgY2ZhaiBjaiBjZmFzXCIsXHJcbiAgICAgICAgICAgICAgICBcImltZ1wiOiBbXCJodHRwczovL3d3dy5teWRvbWFpbmUuY29tL3RobWIvSF9rZERVbnAzT1dLSlprSVozNHNiX1ppdkhZPS8xNDAweDEwMDQvZmlsdGVyczpub191cHNjYWxlKCk6bWF4X2J5dGVzKDE1MDAwMCk6c3RyaXBfaWNjKCkvU2NyZWVuU2hvdDIwMTktMDktMTFhdDkuMTEuNTBBTS1jZTVmNjY4YTIyNTQ0NGJjOGUzOGY3Y2VhMWQ3M2M3Mi5wbmdcIl1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIiA6IFwiNVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCIgOiBcIlByb2plY3QgNlwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdWJ0aXRsZVwiIDogXCJTdWJ0aXRsZSAxIC0gU29tZXRoaW5nIHNvbWV0aGluZyB3aGF0ZXZlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImJsYWhqIGJsYWggdmFsc21rZGFzYXNqIGMgYXNqZGthcyBkYSBqc2sgbnZic2Zqa3Ygc2Rqa2JmIHNkdmprc2QgY2ZhaiBjaiBjZmFzXCIsXHJcbiAgICAgICAgICAgICAgICBcImltZ1wiOiBbXCJodHRwczovL3d3dy5teWRvbWFpbmUuY29tL3RobWIvSF9rZERVbnAzT1dLSlprSVozNHNiX1ppdkhZPS8xNDAweDEwMDQvZmlsdGVyczpub191cHNjYWxlKCk6bWF4X2J5dGVzKDE1MDAwMCk6c3RyaXBfaWNjKCkvU2NyZWVuU2hvdDIwMTktMDktMTFhdDkuMTEuNTBBTS1jZTVmNjY4YTIyNTQ0NGJjOGUzOGY3Y2VhMWQ3M2M3Mi5wbmdcIl1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBzZWxlY3RlZFByb2plY3Q6IHt9LFxyXG4gICAgICAgICAgZGJsb2NrOiBmYWxzZSxcclxuICAgICAgICAgIGRub25lOiB0cnVlXHJcbiAgICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHNob3dQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLmRibG9jayA9IHRydWVcclxuICAgICAgICB0aGlzLmRub25lID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkUHJvamVjdC5pZClcclxuICAgIH0sXHJcbiAgICBjbG9zZVBvcHVwKCl7XHJcbiAgICAgICAgICB0aGlzLmRibG9jayA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5kbm9uZSA9IHRydWVcclxuICAgICAgICBjb25zb2xlLmxvZyhcIndyaFwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRQcm9qZWN0LmlkKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUl0YWxpYW5hJmZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XHJcbi5wcm9qZWN0IHsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5wcm9qZWN0LXRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvamVjdC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnByb2plY3Qtc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ucHJvamVjdC10aHVtYm5haWwge1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgdHJhbnNpdGlvbjogMC43cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb3B1cC1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5YmZcclxufVxyXG5cclxuLmN1c3RvbS1wb3B1cCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBib3R0b206IDQwcHg7XHJcbiAgICBsZWZ0OiAyNHB4O1xyXG4gICAgcmlnaHQ6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvcHVwLWhlYWQtY2xvc2luZy1idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFqREE7QUFtREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBMURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"e4b7ee98-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e4b7ee98-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"project-section px-5 px-lg-5 py-4 mx-0\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"row justify-content-end\" },\n      [\n        _c(\"div\", { staticClass: \"col-lg-2\" }),\n        _vm._l(_vm.projects, function (project) {\n          return _c(\n            \"div\",\n            {\n              key: project.id,\n              staticClass: \"col-lg-2 px-0 col-md-6 col-12 mb-4 project\",\n              attrs: {\n                id: \"project-\" + project.id,\n                \"data-toggle\": \"modal\",\n                \"data-target\": \"#ModalProject\" + project.id,\n              },\n              on: {\n                click: function ($event) {\n                  return _vm.showProject(project)\n                },\n              },\n            },\n            [\n              _c(\"img\", {\n                staticClass: \"project-thumbnail\",\n                attrs: {\n                  src: project.img[0],\n                  alt: project.name + \" - \" + project.subtitle,\n                },\n              }),\n              _c(\"div\", [\n                _c(\"h2\", { staticClass: \"project-name mt-4\" }, [\n                  _vm._v(_vm._s(project.name)),\n                ]),\n                _c(\"p\", { staticClass: \"project-subtitle mt-2\" }, [\n                  _vm._v(_vm._s(project.subtitle)),\n                ]),\n              ]),\n            ]\n          )\n        }),\n        _c(\n          \"div\",\n          {\n            ref: \"customPopup\",\n            class: {\n              \"d-block\": _vm.dblock,\n              \"d-none\": _vm.dnone,\n              \"popup-bg\": \"popup-bg\",\n            },\n          },\n          [\n            _c(\n              \"div\",\n              { staticClass: \"custom-popup d-flex flex-column container\" },\n              [\n                _c(\n                  \"div\",\n                  { staticClass: \"popup-head d-flex justify-content-end my-4\" },\n                  [\n                    _c(\n                      \"div\",\n                      {\n                        staticClass: \"popup-head-closing-button\",\n                        on: { click: _vm.closePopup },\n                      },\n                      [_vm._v(\"x\")]\n                    ),\n                  ]\n                ),\n                _c(\"ProjectPopup\", {\n                  attrs: { selectedProject: _vm.selectedProject },\n                }),\n              ],\n              1\n            ),\n          ]\n        ),\n      ],\n      2\n    ),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiZTRiN2VlOTgtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL1Byb2plY3RTZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NjMyOTQ4OCZzY29wZWQ9dHJ1ZSYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0U2VjdGlvbi52dWU/YmNiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2plY3Qtc2VjdGlvbiBweC01IHB4LWxnLTUgcHktNCBteC0wXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IGp1c3RpZnktY29udGVudC1lbmRcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0yXCIgfSksXG4gICAgICAgIF92bS5fbChfdm0ucHJvamVjdHMsIGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBwcm9qZWN0LmlkLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtbGctMiBweC0wIGNvbC1tZC02IGNvbC0xMiBtYi00IHByb2plY3RcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJwcm9qZWN0LVwiICsgcHJvamVjdC5pZCxcbiAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI01vZGFsUHJvamVjdFwiICsgcHJvamVjdC5pZCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93UHJvamVjdChwcm9qZWN0KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJvamVjdC10aHVtYm5haWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc3JjOiBwcm9qZWN0LmltZ1swXSxcbiAgICAgICAgICAgICAgICAgIGFsdDogcHJvamVjdC5uYW1lICsgXCIgLSBcIiArIHByb2plY3Quc3VidGl0bGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvamVjdC1uYW1lIG10LTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb2plY3QubmFtZSkpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2plY3Qtc3VidGl0bGUgbXQtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvamVjdC5zdWJ0aXRsZSkpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogXCJjdXN0b21Qb3B1cFwiLFxuICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgXCJkLWJsb2NrXCI6IF92bS5kYmxvY2ssXG4gICAgICAgICAgICAgIFwiZC1ub25lXCI6IF92bS5kbm9uZSxcbiAgICAgICAgICAgICAgXCJwb3B1cC1iZ1wiOiBcInBvcHVwLWJnXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLXBvcHVwIGQtZmxleCBmbGV4LWNvbHVtbiBjb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwb3B1cC1oZWFkIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG15LTRcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBvcHVwLWhlYWQtY2xvc2luZy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VQb3B1cCB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcInhcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcIlByb2plY3RQb3B1cFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzZWxlY3RlZFByb2plY3Q6IF92bS5zZWxlY3RlZFByb2plY3QgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdLFxuICAgICAgMlxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"e4b7ee98-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProjectSection.vue?vue&type=template&id=96329488&scoped=true&\n");

/***/ })

})