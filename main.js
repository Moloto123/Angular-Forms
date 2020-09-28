(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Moloto\Desktop\Angular\Updated Project\my-dream-app\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details */ "hw5l");



class ApiService {
    constructor(Data) {
        this.Data = Data;
    }
    //function to return students list
    getStudents() {
        return this.Data.students;
    }
    //function persons array
    getUsers() {
        return this.Data.persons;
    }
    //get single user data
    getuserinfo(ref) {
        this.users = this.Data.persons;
        this.users.forEach(i => {
            this.person = i['users'];
        });
        return this.person.find(e => e.UserID === ref);
    }
    // get single user subjects
    getSubjects(ref) {
        this.users = this.Data.persons;
        this.users.forEach(i => {
            this.person = i['subjects'];
        });
        return this.person.find(e => e.UserID === ref);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_details__WEBPACK_IMPORTED_MODULE_1__["Details"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _details__WEBPACK_IMPORTED_MODULE_1__["Details"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'my-dream-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".pressme[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n}\r\n\r\n.pressme[_ngcontent-%COMP%]{\r\n  display: inline;\r\n  padding: 0.3em 1.2em;\r\n  margin: 0.3em 0.3em 0; \r\n  border-radius: 2em;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n  font-weight: 600;\r\n  color: red;\r\n  background-color: ivory;\r\n  transition: all 0.25;\r\n  border: red solid 2px;\r\n  \r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    flex-shrink: 0;\r\n    flex-grow: 0;\r\n    background:rgba(238, 238, 231, 0.842);\r\n    padding: 3px 5px;\r\n    width: 1320px;\r\n    height: 68px;\r\n  }\r\n\r\n.content[_ngcontent-%COMP%]{\r\n    flex-shrink: 1;\r\n    flex-grow: 1;\r\n    padding: 3px 5px;\r\n    position: relative;\r\n    overflow-y: auto;\r\n  }\r\n\r\n.footer[_ngcontent-%COMP%]{\r\n    flex-shrink: 0;\r\n    flex-grow: 0;\r\n    background: rgb(228, 228, 209);\r\n    padding: 3px 15px;\r\n  }\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: Lato;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #CFD8DC;\r\n    border-radius: 4px;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link {\r\n    color: #039be5;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: red;\r\n    background-color: #CFD8DC;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    color: #039be5;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsc0VBQXNFO0VBQ3RFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixxQkFBcUI7O0FBRXZCOztBQUlFO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0FBQ0E7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsaUJBQWlCO0VBQ25COztBQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUNBO0lBQ0UsVUFBVTtJQUNWLHlCQUF5QjtFQUMzQjs7QUFDQTtJQUNFLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG4ucHJlc3NtZXtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5wcmVzc21le1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwYWRkaW5nOiAwLjNlbSAxLjJlbTtcclxuICBtYXJnaW46IDAuM2VtIDAuM2VtIDA7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHJlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpdm9yeTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNTtcclxuICBib3JkZXI6IHJlZCBzb2xpZCAycHg7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5cclxuICAuaGVhZGVye1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjM4LCAyMzgsIDIzMSwgMC44NDIpO1xyXG4gICAgcGFkZGluZzogM3B4IDVweDtcclxuICAgIHdpZHRoOiAxMzIwcHg7XHJcbiAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgfVxyXG4gIC5jb250ZW50e1xyXG4gICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmZvb3RlcntcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgZmxleC1ncm93OiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIyOCwgMjI4LCAyMDkpO1xyXG4gICAgcGFkZGluZzogM3B4IDE1cHg7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgfVxyXG4gIFxyXG4gIG5hdiBhIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XHJcbiAgICBjb2xvcjogIzAzOWJlNTtcclxuICB9XHJcbiAgbmF2IGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XHJcbiAgfVxyXG4gIG5hdiBhLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzAzOWJlNTtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Y5Lh":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ProfileComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Student Name: ", ctx_r5.user.UserName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Student Role: ", ctx_r5.user.Bio, "");
} }
function ProfileComponent_div_26_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your Grades = ", ctx_r7.subjects.Marks, " You qualifies with Distinction*");
} }
function ProfileComponent_div_26_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your Grades = ", ctx_r8.subjects.Marks, " You qualifies");
} }
function ProfileComponent_div_26_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your Grades = ", ctx_r9.subjects.Marks, " You qualifies with Distinction*");
} }
function ProfileComponent_div_26_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your Grades = ", ctx_r10.subjects.Marks, " You qualifies for re-exam");
} }
function ProfileComponent_div_26_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your Grades = ", ctx_r11.subjects.Marks, " Sorry, You Failed Exam");
} }
function ProfileComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_div_26_div_7_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileComponent_div_26_div_8_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_div_26_div_9_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_div_26_div_10_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfileComponent_div_26_div_11_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Subject Name: ", ctx_r6.subjects.subjname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Subject Code: ", ctx_r6.subjects.suId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Subject Grades: ", ctx_r6.subjects.Marks, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.Ref == 53618203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.Ref == 53618204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.Ref == 53618205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.Ref == 53618206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.Ref == 53618207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Year Registered: ", ctx_r6.subjects.YearRgstrd, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Teaching Assistance: ", ctx_r6.subjects.TA, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Institution: ", ctx_r6.subjects.Institute, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Faculty: ", ctx_r6.subjects.College, "");
} }
class ProfileComponent {
    constructor(data, _route) {
        this.data = data;
        this._route = _route;
    }
    ngOnInit() {
        //get user id 
        this.Ref = this._route.snapshot.paramMap.get('ref');
        console.log('Ref', this.Ref);
        this.user = this.data.getuserinfo(this.Ref);
        console.log(this.user);
        // get subjects 
        this.subjects = this.data.getSubjects(this.Ref);
        console.log(this.subjects);
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 36, vars: 7, consts: [[1, "inner", 2, "background-image", "url('././assets/bd.jpg')"], [1, "with-overlay"], ["src", "././assets/logos.jpg", "alt", "image", 1, "weight"], ["href", "http://localhost:4200/landing", "id", "logo", 1, "homenavig"], [1, "heading"], [4, "ngIf"], [1, "heading", 2, "color", "white"], [1, "footer"], [1, "version-info"], ["href", "http://localhost:4200/landing", "target", "_blank", "rel", "", 1, "directories", 2, "color", "red"], ["src", "././assets/First.jpg", 1, "profilepic"], ["src", "././assets/Second.jpg", 1, "profilepic"], ["src", "././assets/Third.jpg", 1, "profilepic"], ["src", "././assets/Fourth.jpg", 1, "profilepic"], ["src", "././assets/Last.jpg", 1, "profilepic"], [1, "name", 2, "color", "white"], [1, "name", 2, "color", "red"], [1, "name", 2, "color", "green"], [1, "name", 2, "color", "blue"], [1, "name", 2, "color", "cyan"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "iLAB institute of Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "STUDENT FACT-FILE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileComponent_div_18_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileComponent_div_19_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProfileComponent_div_20_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileComponent_div_21_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfileComponent_div_22_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProfileComponent_div_23_Template, 6, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "INFOMATION ABOUT STUDENT SUBJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProfileComponent_div_26_Template, 20, 12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Developed by: Malema Moloto,J");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "CLICK ON THIS LINK ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0TO \"NAVIGATE\" HOME PAGE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Ref == 53618203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Ref == 53618204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Ref == 53618205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Ref == 53618206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Ref == 53618207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subjects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".with-overlay[_ngcontent-%COMP%] {\r\n  background: linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0,0.5));\r\n    background-position: right;\r\n    background-repeat: no-repeat;\r\n  }\r\n\r\n.inner[_ngcontent-%COMP%]{\r\n  background-size:cover;\r\n  background-position:center center;\r\n  background-attachment:fixed;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n  margin:0px; padding:0px;\r\n}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]{\r\n  z-index: 1;\r\n  position:fixed; \r\n  width:100%; \r\n  height:60px; \r\n  background:#06D85F;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color:red;\r\n  background:rgba(0,0,0,0.1); \r\n  display:inline-block; \r\n  padding:0px 30px; \r\n  height:60px;\r\n  line-height:60px; \r\n  text-align:center;\r\n  font-family: 'Roboto Slab', serif; \r\n  text-decoration:none;\r\n  text-transform:lowercase; \r\n  letter-spacing:2px; \r\n  font-weight:700;\r\n\r\n\r\n  font-size: 1em;\r\n  padding: 10px;\r\n  \r\n  border: 2px solid #06D85F;\r\n  border-radius: 20px/50px;\r\n  text-decoration: none;\r\n  cursor: progress;\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\n.homenavig[_ngcontent-%COMP%]:hover{\r\n  background: #06D85F;\r\n}\r\n\r\n.weight[_ngcontent-%COMP%]{\r\n    height: 120px;\r\n    width: 95px;\r\n    border-radius: 50%;\r\n  \r\n}\r\n\r\n.alert[_ngcontent-%COMP%]{\r\n  margin-top: 15px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.profilepic[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  width: 180px;\r\n  border-radius: 50%;\r\n  border: 1px solid #06D85F;\r\n}\r\n\r\n.profile-card[_ngcontent-%COMP%] {\r\n  border: 3px cyan solid;\r\n  padding: 15px;\r\n}\r\n\r\n.name[_ngcontent-%COMP%] {\r\n  font-family: \"veranda\", sans-serif;\r\n  font-size: 16px;\r\n  border-left: 2px brown solid;\r\n  padding-left: 15px;\r\n  \r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  \r\n \r\n\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 60px;\r\n    display: inline-block;\r\n    align-items: center;\r\n    font-weight: 600;\r\n  }\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n    color: #1976d2;\r\n    text-decoration: none;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: #125699;\r\n  }\r\n\r\n.header[_ngcontent-%COMP%]{\r\nflex-shrink: 0;\r\nflex-grow: 0;\r\nbackground: #039be5;\r\npadding: 3px 5px;\r\n\r\n}\r\n\r\n.content[_ngcontent-%COMP%]{\r\nflex-shrink: 1;\r\nflex-grow: 1;\r\npadding: 3px 5px;\r\nposition: relative;\r\noverflow-y: auto;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]{\r\nflex-shrink: 0;\r\nflex-grow: 0;\r\ncolor: #fff;\r\npadding: 3px 15px;\r\nwidth: 1333px;\r\n\r\n\r\nfont-size: 1em;\r\npadding: 10px;\r\ncolor: #fff;\r\nborder: 2px solid #06D85F;\r\nborder-radius: 20px/50px;\r\ntext-decoration: none;\r\ncursor: progress;\r\ntransition: all 0.3s ease-out;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\nfont-family: Lato;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]:hover {\r\n  background: #06D85F;\r\n}\r\n\r\n.directories[_ngcontent-%COMP%]{\r\n  font-size: 1em;\r\n  padding: 20px;\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsOERBQThEO0lBQzVELDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUI7O0FBRUY7RUFDRSxxQkFBcUI7RUFDckIsaUNBQWlDO0VBQ2pDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFVBQVUsRUFBRSxXQUFXO0FBQ3pCOztBQUVBO0VBR0Usc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZUFBZTs7O0VBR2YsY0FBYztFQUNkLGFBQWE7O0VBRWIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFRTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCOztBQUV0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBR0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsa0JBQWtCOztBQUVwQjs7QUFDQTtFQUNFLGtCQUFrQjs7OztBQUlwQjs7QUFPQztJQUNHLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0FBS0E7OztJQUdFLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUdBO0FBQ0YsY0FBYztBQUNkLFlBQVk7QUFDWixtQkFBbUI7QUFDbkIsZ0JBQWdCOztBQUVoQjs7QUFDQTtBQUNBLGNBQWM7QUFDZCxZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxjQUFjO0FBQ2QsWUFBWTtBQUNaLFdBQVc7QUFDWCxpQkFBaUI7QUFDakIsYUFBYTs7O0FBR2IsY0FBYztBQUNkLGFBQWE7QUFDYixXQUFXO0FBQ1gseUJBQXlCO0FBQ3pCLHdCQUF3QjtBQUN4QixxQkFBcUI7QUFDckIsZ0JBQWdCO0FBQ2hCLDZCQUE2QjtBQUM3Qjs7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLndpdGgtb3ZlcmxheSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsIDAuNSksIHJnYmEoMCwwLDAsMC41KSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG5cclxuLmlubmVye1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OmZpeGVkO1xyXG59XHJcblxyXG5odG1sLCBib2R5e1xyXG4gIG1hcmdpbjowcHg7IHBhZGRpbmc6MHB4O1xyXG59XHJcblxyXG4qLCAqOmFmdGVyLCAqOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuaGVhZGVye1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246Zml4ZWQ7IFxyXG4gIHdpZHRoOjEwMCU7IFxyXG4gIGhlaWdodDo2MHB4OyBcclxuICBiYWNrZ3JvdW5kOiMwNkQ4NUY7XHJcbn1cclxuXHJcbmhlYWRlciBhe1xyXG4gIGNvbG9yOnJlZDtcclxuICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4xKTsgXHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7IFxyXG4gIHBhZGRpbmc6MHB4IDMwcHg7IFxyXG4gIGhlaWdodDo2MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OjYwcHg7IFxyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjsgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06bG93ZXJjYXNlOyBcclxuICBsZXR0ZXItc3BhY2luZzoycHg7IFxyXG4gIGZvbnQtd2VpZ2h0OjcwMDtcclxuXHJcblxyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgXHJcbiAgYm9yZGVyOiAycHggc29saWQgIzA2RDg1RjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4LzUwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcHJvZ3Jlc3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5ob21lbmF2aWc6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzA2RDg1RjtcclxufVxyXG5cclxuICAud2VpZ2h0e1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiA5NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIFxyXG59XHJcblxyXG4uYWxlcnR7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlcGlje1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDZEODVGO1xyXG59XHJcblxyXG5cclxuLnByb2ZpbGUtY2FyZCB7XHJcbiAgYm9yZGVyOiAzcHggY3lhbiBzb2xpZDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi5uYW1lIHtcclxuICBmb250LWZhbWlseTogXCJ2ZXJhbmRhXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggYnJvd24gc29saWQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIFxyXG59XHJcbi5oZWFkaW5nIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgXHJcbiBcclxuXHJcbn1cclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG4gLnRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gXHJcbiBcclxuICBcclxuXHJcbiAgYSxcclxuICBhOnZpc2l0ZWQsXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzE5NzZkMjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxMjU2OTk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmhlYWRlcntcclxuZmxleC1zaHJpbms6IDA7XHJcbmZsZXgtZ3JvdzogMDtcclxuYmFja2dyb3VuZDogIzAzOWJlNTtcclxucGFkZGluZzogM3B4IDVweDtcclxuXHJcbn1cclxuLmNvbnRlbnR7XHJcbmZsZXgtc2hyaW5rOiAxO1xyXG5mbGV4LWdyb3c6IDE7XHJcbnBhZGRpbmc6IDNweCA1cHg7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxub3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmZvb3RlcntcclxuZmxleC1zaHJpbms6IDA7XHJcbmZsZXgtZ3JvdzogMDtcclxuY29sb3I6ICNmZmY7XHJcbnBhZGRpbmc6IDNweCAxNXB4O1xyXG53aWR0aDogMTMzM3B4O1xyXG5cclxuXHJcbmZvbnQtc2l6ZTogMWVtO1xyXG5wYWRkaW5nOiAxMHB4O1xyXG5jb2xvcjogI2ZmZjtcclxuYm9yZGVyOiAycHggc29saWQgIzA2RDg1RjtcclxuYm9yZGVyLXJhZGl1czogMjBweC81MHB4O1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbmN1cnNvcjogcHJvZ3Jlc3M7XHJcbnRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG59XHJcbnAge1xyXG5mb250LWZhbWlseTogTGF0bztcclxufVxyXG4uZm9vdGVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDZEODVGO1xyXG59XHJcblxyXG4uZGlyZWN0b3JpZXN7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/details */ "hw5l");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/api.service */ "H+bZ");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/landing/landing.component */ "fsYz");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/profile/profile.component */ "Y5Lh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








//enable us to use angular forms


class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
        _services_details__WEBPACK_IMPORTED_MODULE_0__["Details"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"],
        _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"],
                    _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
                ],
                providers: [
                    _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
                    _services_details__WEBPACK_IMPORTED_MODULE_0__["Details"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fsYz":
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function LandingComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r3);
} }
function LandingComponent_div_20_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r3);
} }
function LandingComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LandingComponent_div_20_div_1_Template, 4, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LandingComponent_div_20_ng_template_2_Template, 3, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r3 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r3 == "mohammed al-fatil* , (efficiency evangelist)" || items_r3 == "omar al somah* , (software engineer)")("ngIfElse", _r5);
} }
const _c0 = function (a2) { return ["/", "profile", a2]; };
function LandingComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u00A0\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_div_24_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.editParticipant(i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_div_24_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.deleteParticipant(i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usr_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, usr_r9.UserID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", usr_r9.UserName, " -serves as- \"", usr_r9.Bio, "\" ");
} }
function LandingComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_div_71_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.clickMe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.msg, " ");
} }
class LandingComponent {
    constructor(Data) {
        this.Data = Data;
        this.model = {};
        this.modelSTD = {};
        this.msg = "";
    }
    ngOnInit() {
        this.students = this.Data.getStudents();
        this.Users = this.Data.getUsers();
        //function using arrow functions
        this.Users.forEach(element => {
            console.log(element);
            this.Profiles = element["users"];
            console.log(this.Profiles);
        });
    }
    addParticipant() {
        this.Profiles.push(this.model);
        this.model = {};
        this.msg = "New Student Has Recently been Registered! ";
    }
    deleteParticipant(i) {
        this.Profiles.splice(i, 1);
        this.msg = "Student Details Has Recently been deleted! ";
    }
    editParticipant(STD) {
        this.modelSTD.UserName = this.Profiles[STD].UserName;
        this.modelSTD.Bio = this.Profiles[STD].Bio;
        this.myValue = STD;
    }
    updateParticipant() {
        let STD = this.myValue;
        for (let i = 0; i < this.Profiles.length; i++) {
            if (i == STD) {
                this.Profiles[i] = this.modelSTD;
                this.modelSTD = {};
                this.msg = "Student Details Has Recently been updated! ";
            }
        }
    }
    clickMe() {
        this.msg = "";
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 82, vars: 7, consts: [[1, "inner", 2, "background-image", "url('././assets/bd.jpg')"], [1, "with-overlay"], ["src", "././assets/logos.jpg", "alt", "image", 1, "weight"], ["href", "http://localhost:4200/landing", "id", "logo", 1, "homenavig"], [1, "heading", 2, "color", "white"], [1, "info", 2, "color", "white"], [4, "ngFor", "ngForOf"], ["action", "", "method", ""], ["for", "name", 1, "enter"], ["type", "text", "id", "name", "name", "UserName", 3, "ngModel", "ngModelChange"], [1, "Error", 2, "color", "red"], ["for", "Bio", 1, "enter", 2, "color", "white"], ["type", "text", "id", "Bio", "name", "Bio", "value", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "button", 2, "color", "red", 3, "click"], ["for", "name", 1, "enter", 2, "color", "white"], ["type", "text", "name", "UserName", "value", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Bio", "value", "", 3, "ngModel", "ngModelChange"], ["class", "popup", 4, "ngIf"], [1, "footer"], [1, "version-info"], ["href", "http://localhost:4200/landing", "target", "_blank", "rel", "", 1, "directories", 2, "color", "red"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [1, "name", 2, "color", "red"], [1, "name", 2, "color", "white"], ["routerLinkActive", "router-Link-active", 3, "routerLink"], [1, "progress", 3, "click"], [1, "popup"], ["href", "#", 1, "close", 3, "click"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "iLAB institute of Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "LIST OF STUDENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Student with highest marks have stars on their names and they appear in red:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LandingComponent_div_20_Template, 4, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CLICK ON THE DETAILS BELOW TO GO TO STUDENT'S PROFILE PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LandingComponent_div_24_Template, 11, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Student Update Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LandingComponent_Template_input_ngModelChange_32_listener($event) { return ctx.modelSTD.UserName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u00A0\u00A0* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Bio:\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LandingComponent_Template_input_ngModelChange_39_listener($event) { return ctx.modelSTD.Bio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u00A0\u00A0* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Process-Button: \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_45_listener() { return ctx.updateParticipant(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Update Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Add new Student's Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Name: \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LandingComponent_Template_input_ngModelChange_54_listener($event) { return ctx.model.UserName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " \u00A0\u00A0* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Bio:\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LandingComponent_Template_input_ngModelChange_61_listener($event) { return ctx.model.Bio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u00A0\u00A0* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Process-Button: \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_67_listener() { return ctx.addParticipant(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Process Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, LandingComponent_div_71_Template, 4, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Developed by: Malema Moloto,J");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "HEREYOU ARE, CURRENTLY ON THE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 LANDING PAGE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.students);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Profiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelSTD.UserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelSTD.Bio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.UserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.Bio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.msg);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], styles: [".with-overlay[_ngcontent-%COMP%] {\r\nbackground: linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0,0.5));\r\n  background-position: right;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.inner[_ngcontent-%COMP%]{\r\n   background-size:cover;\r\n   background-position:center center;\r\n   background-attachment:fixed;\r\n  \r\n }\r\n\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n  margin:0px; padding:0px;\r\n}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]{\r\n  z-index: 1;\r\n  position:fixed; \r\n  width:100%; \r\n  height:60px; \r\n  background: #06D85F;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color:red;\r\n  background:rgba(0,0,0,0.1); \r\n  display:inline-block; \r\n  padding:0px 30px; \r\n  height:60px;\r\n  line-height:60px; \r\n  text-align:center;\r\n  font-family: 'Roboto Slab', serif; \r\n  text-decoration:none;\r\n  text-transform:lowercase; \r\n  letter-spacing:2px; \r\n  font-weight:700;\r\n\r\n\r\n  font-size: 1em;\r\n  padding: 10px;\r\n  \r\n  border: 1px solid #06D85F;\r\n  border-radius: 20px/50px;\r\n  text-decoration: none;\r\n  cursor: progress;\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\n.homenavig[_ngcontent-%COMP%]:hover{\r\n  background: #06D85F;\r\n}\r\n\r\n.homenavig[_ngcontent-%COMP%]{\r\n  font-family: Calibri Light (Headings);\r\n}\r\n\r\nheader[_ngcontent-%COMP%]:hover {\r\n  background: #06D85F;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]:hover {\r\n  background: #06D85F;\r\n}\r\n\r\n.weight[_ngcontent-%COMP%]{\r\n  height: 120px;\r\n  width: 95px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.popup[_ngcontent-%COMP%] {\r\n  margin: 7px auto;\r\n  padding: 2px;\r\n  border-radius: 5px;\r\n  width: 85%;\r\n  position: relative;\r\n  transition: all 5s ease-in-out;\r\n\r\n\r\n\r\n  font-size: 1em;\r\n  padding: 20px;\r\n  color: red;\r\n  border: 2px solid #06D85F;\r\n  border-radius: 20px/50px;\r\n  text-decoration: none;\r\n  cursor: progress;\r\n  transition: all 0.3s ease-out;\r\n\r\n}\r\n\r\n.popup[_ngcontent-%COMP%]:hover {\r\n  background: #06D85F;\r\n}\r\n\r\n.popup[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 2px;\r\n  right: 3px;\r\n  transition: all 200ms;\r\n  font-size: 50px;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  color: #06D85F;\r\n\r\n\r\n}\r\n\r\n.popup[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\r\n  color: red;\r\n}\r\n\r\n.popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  max-height: 30%;\r\n  overflow: auto;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  border: 2px royalblue solid;\r\n  margin-top: 7px;\r\n  margin-bottom: 7px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  \r\n  \r\n  \r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  font-size: 1em;\r\n  padding: 10px;\r\n  color: #fff;\r\n  border: 2px solid #06D85F;\r\n  border-radius: 20px/50px;\r\n  text-decoration: none;\r\n  cursor: progress;\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  background: #06D85F;\r\n}\r\n\r\n.wait[_ngcontent-%COMP%] {\r\n  cursor: wait;\r\n}\r\n\r\n.progress[_ngcontent-%COMP%] {\r\n  cursor: progress;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]{\r\n  margin-top: 15px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.name[_ngcontent-%COMP%] {\r\n  font-family: \"veranda\", sans-serif;\r\n  font-size: 16px;\r\n  border-left: 2px brown solid;\r\n  padding-left: 10px;\r\n  margin-left: 15px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    border: 5px lightseagreen solid;\r\n    margin-top: 7px;\r\n    margin-bottom: 7px;\r\n\r\n\r\n  }\r\n\r\n.enter[_ngcontent-%COMP%] {\r\n  font-family: \"veranda\", sans-serif;\r\n  font-size: 16px;\r\n  border-left: 2px brown solid;\r\n  padding-left: 10px;\r\n  margin-left: 15px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n  font-family: \"veranda\", sans-serif;\r\n  font-size: 16px;\r\n  \r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  padding-left: 15px;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n        font-family: -apple-system, BlinkMacSystemFont,\r\n        \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \r\n        \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n        font-size: 14px;\r\n        color: #333;\r\n        box-sizing: border-box;\r\n    }\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        right: 0;\r\n        height: 60px;\r\n        display: inline-block;\r\n        align-items: center;\r\n        font-weight: 600;\r\n      }\r\n\r\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        margin: 0 16px;\r\n      }\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n        color: #1976d2;\r\n        text-decoration: none;\r\n      }\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n        color: #125699;\r\n      }\r\n\r\n.header[_ngcontent-%COMP%]{\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n  background: #039be5;\r\n  padding: 3px 5px;\r\n  width: 1350px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]{\r\n  flex-shrink: 1;\r\n  flex-grow: 1;\r\n  padding: 3px 5px;\r\n  position: relative;\r\n  overflow-y: auto;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]{\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n  color: #fff;\r\n  padding: 0px 5px;\r\n  width: 1333px;\r\n\r\n\r\n  font-size: 1em;\r\n  padding: 10px;\r\n  color: #fff;\r\n  border: 2px solid #06D85F;\r\n  border-radius: 20px/50px;\r\n  text-decoration: none;\r\n  cursor: progress;\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]:hover {\r\n  background: #06D85F;\r\n}\r\n\r\n.directories[_ngcontent-%COMP%]{\r\n  font-size: 1em;\r\n  padding: 20px;\r\n  color: red;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-family: Lato;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtBQUNBLDhEQUE4RDtFQUM1RCwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBO0dBQ0cscUJBQXFCO0dBQ3JCLGlDQUFpQztHQUNqQywyQkFBMkI7O0NBRTdCOztBQUdEO0VBQ0UsVUFBVSxFQUFFLFdBQVc7QUFDekI7O0FBRUE7RUFHRSxzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixlQUFlOzs7RUFHZixjQUFjO0VBQ2QsYUFBYTs7RUFFYix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDhCQUE4Qjs7OztFQUk5QixjQUFjO0VBQ2QsYUFBYTtFQUNiLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsNkJBQTZCOztBQUUvQjs7QUFHQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixjQUFjOzs7QUFHaEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFJQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7Ozs7QUFJckI7O0FBVUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUlBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQU1BO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFLQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUU7SUFDRSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGtCQUFrQjs7O0VBR3BCOztBQUdGO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlOztBQUVqQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBR0k7UUFDSTs7Z0VBRXdEO1FBQ3hELGVBQWU7UUFDZixXQUFXO1FBQ1gsc0JBQXNCO0lBQzFCOztBQUVDO1FBQ0csa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixPQUFPO1FBQ1AsUUFBUTtRQUNSLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLGdCQUFnQjtNQUNsQjs7QUFDQTtRQUNFLGNBQWM7TUFDaEI7O0FBTUE7OztRQUdFLGNBQWM7UUFDZCxxQkFBcUI7TUFDdkI7O0FBRUE7UUFDRSxjQUFjO01BQ2hCOztBQUdBO0VBQ0osY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTs7O0VBR2IsY0FBYztFQUNkLGFBQWE7RUFDYixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi53aXRoLW92ZXJsYXkge1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwgMC41KSwgcmdiYSgwLDAsMCwwLjUpKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uaW5uZXJ7XHJcbiAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgY2VudGVyO1xyXG4gICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7XHJcbiAgXHJcbiB9XHJcblxyXG5cclxuaHRtbCwgYm9keXtcclxuICBtYXJnaW46MHB4OyBwYWRkaW5nOjBweDtcclxufVxyXG5cclxuKiwgKjphZnRlciwgKjpiZWZvcmUge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbmhlYWRlcntcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOmZpeGVkOyBcclxuICB3aWR0aDoxMDAlOyBcclxuICBoZWlnaHQ6NjBweDsgXHJcbiAgYmFja2dyb3VuZDogIzA2RDg1RjtcclxufVxyXG5cclxuaGVhZGVyIGF7XHJcbiAgY29sb3I6cmVkO1xyXG4gIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjEpOyBcclxuICBkaXNwbGF5OmlubGluZS1ibG9jazsgXHJcbiAgcGFkZGluZzowcHggMzBweDsgXHJcbiAgaGVpZ2h0OjYwcHg7XHJcbiAgbGluZS1oZWlnaHQ6NjBweDsgXHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmOyBcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2U7IFxyXG4gIGxldHRlci1zcGFjaW5nOjJweDsgXHJcbiAgZm9udC13ZWlnaHQ6NzAwO1xyXG5cclxuXHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDZEODVGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHgvNTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwcm9ncmVzcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmhvbWVuYXZpZzpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjMDZEODVGO1xyXG59XHJcblxyXG4uaG9tZW5hdmlne1xyXG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJpIExpZ2h0IChIZWFkaW5ncyk7XHJcbn1cclxuXHJcbmhlYWRlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzA2RDg1RjtcclxufVxyXG5cclxuaGVhZGVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDZEODVGO1xyXG59XHJcblxyXG4ud2VpZ2h0e1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgd2lkdGg6IDk1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5cclxuLnBvcHVwIHtcclxuICBtYXJnaW46IDdweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2UtaW4tb3V0O1xyXG5cclxuXHJcblxyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDZEODVGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHgvNTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwcm9ncmVzcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuXHJcbn1cclxuXHJcblxyXG4ucG9wdXA6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwNkQ4NUY7XHJcbn1cclxuXHJcblxyXG5cclxuLnBvcHVwIC5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnB4O1xyXG4gIHJpZ2h0OiAzcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMwNkQ4NUY7XHJcblxyXG5cclxufVxyXG5cclxuLnBvcHVwIC5jbG9zZTpob3ZlciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4ucG9wdXAgLmNvbnRlbnQge1xyXG4gIG1heC1oZWlnaHQ6IDMwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuXHJcblxyXG4uY29udGFpbmVye1xyXG4gIGJvcmRlcjogMnB4IHJveWFsYmx1ZSBzb2xpZDtcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIFxyXG4gIFxyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzA2RDg1RjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4LzUwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcHJvZ3Jlc3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbn1cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzA2RDg1RjtcclxufVxyXG5cclxuXHJcblxyXG4ud2FpdCB7XHJcbiAgY3Vyc29yOiB3YWl0O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gIGN1cnNvcjogcHJvZ3Jlc3M7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uYWxlcnR7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5uYW1lIHtcclxuICBmb250LWZhbWlseTogXCJ2ZXJhbmRhXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggYnJvd24gc29saWQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBib3JkZXI6IDVweCBsaWdodHNlYWdyZWVuIHNvbGlkO1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG5cclxuXHJcbiAgfVxyXG4gXHJcblxyXG4uZW50ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcInZlcmFuZGFcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBicm93biBzb2xpZDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBmb250LWZhbWlseTogXCJ2ZXJhbmRhXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIFxyXG59XHJcbi5oZWFkaW5nIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbiAgXHJcblxyXG4gICAgOmhvc3Qge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXHJcbiAgICAgICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxyXG4gICAgICAgIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgICBcclxuICAgICAudG9vbGJhciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgICAgIC50b29sYmFyIGltZyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIFxyXG4gICAgICBhLFxyXG4gICAgICBhOnZpc2l0ZWQsXHJcbiAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMTI1Njk5O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAuaGVhZGVye1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xyXG4gIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgd2lkdGg6IDEzNTBweDtcclxufVxyXG4uY29udGVudHtcclxuICBmbGV4LXNocmluazogMTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgcGFkZGluZzogM3B4IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmZvb3RlcntcclxuICBmbGV4LXNocmluazogMDtcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMHB4IDVweDtcclxuICB3aWR0aDogMTMzM3B4O1xyXG5cclxuXHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDZEODVGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHgvNTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwcm9ncmVzcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmZvb3Rlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzA2RDg1RjtcclxufVxyXG5cclxuLmRpcmVjdG9yaWVze1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5wIHtcclxuICBmb250LWZhbWlseTogTGF0bztcclxufVxyXG5cclxuICAgXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "hw5l":
/*!*************************************!*\
  !*** ./src/app/services/details.ts ***!
  \*************************************/
/*! exports provided: Details */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
class Details {
    constructor() {
        this.students = [
            "omar al somah* , (software engineer)", "mohamed abdel shafy , (data center support specialist)",
            "mohammed al-fatil* , (efficiency evangelist)", "mohamed aboutrika , (iot developer)",
            "ahmed hassan , (devops engineer)"
        ];
        this.persons = [
            {
                "users": [
                    {
                        "UserID": "53618203",
                        "UserName": "Omar Al Somah",
                        "Bio": "software engineer"
                    },
                    {
                        "UserID": "53618204",
                        "UserName": "Mohamed Abdel Shafy",
                        "Bio": "data center support specialist"
                    },
                    {
                        "UserID": "53618205",
                        "UserName": "Mohammed Al-Fatil",
                        "Bio": "efficiency evangelist"
                    },
                    {
                        "UserID": "53618206",
                        "UserName": "Mohamed Aboutrika",
                        "Bio": "iot developer"
                    },
                    {
                        "UserID": "53618207",
                        "UserName": "Ahmed Hassan",
                        "Bio": "devops engineer"
                    }
                ],
                "subjects": [
                    {
                        "suId": "INF2641",
                        "UserID": "53618203",
                        "subjname": "BUSINESS INFORMATICS IIA",
                        "Marks": "91%",
                        "YearRgstrd": "SEM2-2020",
                        "TA": "PROF CC THERON",
                        "Institute": "iLAB INSTITUTE OF TECH",
                        "College": "SCHOOL OF COMPUTING"
                    },
                    {
                        "suId": "ICT2613",
                        "UserID": "53618204",
                        "subjname": "INTERNET PROGRAMMING",
                        "Marks": "58%",
                        "YearRgstrd": "SEM2-2020",
                        "TA": "MRS EA MEYBURGH",
                        "Institute": "iLAB INSTITUTE OF TECH",
                        "College": "SCHOOL OF COMPUTING"
                    },
                    {
                        "suId": "ICT3715",
                        "UserID": "53618205",
                        "subjname": "OPERATING SYSTEM PRACTICES",
                        "Marks": "98%",
                        "YearRgstrd": "SEM2-2020",
                        "TA": "MR J JANSE vVAN RENSBURG",
                        "Institute": "iLAB INSTITUTE OF TECH",
                        "College": "SCHOOL OF COMPUTING"
                    },
                    {
                        "suId": "MAC3704",
                        "UserID": "53618206",
                        "subjname": "SELECTED ACCOUNTNG SAMPLE GROUP STRUCTURES",
                        "Marks": "46%",
                        "YearRgstrd": "SEM2-2020",
                        "TA": "Mr AGJ MACHATINE",
                        "Institute": "iLAB INSTITUTE OF TECH",
                        "College": "SCHOOL OF ACCOUNTING"
                    },
                    {
                        "suId": "QMI4708",
                        "UserID": "53618207",
                        "subjname": " ELEMENTARY QUANTITATIVE METHODS",
                        "Marks": "31%",
                        "YearRgstrd": "SEM2-2020",
                        "TA": "MR Q ODENDAAL",
                        "Institute": "iLAB INSTITUTE OF TECH",
                        "College": "SCHOOL OF ECONOMICS"
                    },
                ]
            }
        ];
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/profile/profile.component */ "Y5Lh");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/landing/landing.component */ "fsYz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






const routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"] },
    { path: 'profile/:ref', component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map