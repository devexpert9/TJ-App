(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["interest-interest-module"],{

/***/ "./src/app/interest/interest.module.ts":
/*!*********************************************!*\
  !*** ./src/app/interest/interest.module.ts ***!
  \*********************************************/
/*! exports provided: InterestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestPageModule", function() { return InterestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _interest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interest.page */ "./src/app/interest/interest.page.ts");







var routes = [
    {
        path: '',
        component: _interest_page__WEBPACK_IMPORTED_MODULE_6__["InterestPage"]
    }
];
var InterestPageModule = /** @class */ (function () {
    function InterestPageModule() {
    }
    InterestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_interest_page__WEBPACK_IMPORTED_MODULE_6__["InterestPage"]]
        })
    ], InterestPageModule);
    return InterestPageModule;
}());



/***/ }),

/***/ "./src/app/interest/interest.page.html":
/*!*********************************************!*\
  !*** ./src/app/interest/interest.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"login-wrapper pb-70\">\n        <div class=\"container-fluid\">\n            <div class=\"row login-box\">\n\t\t\t\t<div style=\"background: #F7F7F8;width: 100%;padding: 10px 0;border-bottom: 1px solid #c3c3c3;\">\n\t\t\t\t\t<h4 style=\"color: #000;font-size: 14px;float: left;margin: 0 0 0 22px;font-weight: bold;\">\n                        What are your interests?\n                    </h4>\n                </div>\n\n                <div catCols style=\"height:400px;overflow-x:scroll;float: left;width: 100%;\">\n                    <ul>\n                        <li *ngFor=\"let cat of categories;\">\n                            <img src=\"{{proImage_url}}{{cat?.cat_image}}\" alt=\"\">\n                            <ion-label style='font-weight:bold'>\n                                {{cat?.cat_name}}\n                            </ion-label>\n                            <ion-checkbox color=\"dark\" (click)=\"addCheckbox($event,cat?.cat_id)\"></ion-checkbox>\n                        </li>\n                    </ul>\n                </div>\n\n                <div class=\"col-lg-5 col-md-12 col-sm-12 col-pad-0 align-self-center\" >&nbsp;</div>\n                <div class=\"col-lg-7 col-md-12 col-sm-12 col-pad-0 align-self-center\" style=\"margin:7px 0\">\n                \t<a href=\"javascript:void(0)\" class=\"btn-md btn-theme btn-block\" (click)=\"getCheckedBoxes()\" style=\"background:#7ac4ec;color: #fff;width: 50%;float: right;padding: 7px 0px;text-align: center;border-radius: 19px;\">\n\t\t\t\t\t\tContinue\n\t\t\t\t\t</a>\n                </div>\n            </div> \n        </div> \n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/interest/interest.page.scss":
/*!*********************************************!*\
  !*** ./src/app/interest/interest.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .login-wrapper [form-group] {\n  margin-bottom: 20px; }\n  ion-content .login-wrapper [form-group] label {\n    font-size: 14px;\n    margin-bottom: 9px;\n    display: block;\n    padding: 0px 0px;\n    color: #000; }\n  ion-content .login-wrapper [form-group] ion-item {\n    border: 1px solid #dbdbdb;\n    border-radius: 3px;\n    --padding-start: 18px;\n    --min-height: 40px;\n    font-size: 14px;\n    --padding-bottom: 0px;\n    --padding-top: 0px; }\n  ion-content .login-wrapper [form-group] ion-item ion-label {\n      margin: 0px;\n      display: flex; }\n  ion-content .login-wrapper [form-group] ion-item ion-label ion-icon {\n        color: var(--ion-color-primary);\n        font-size: 18px; }\n  ion-content .login-wrapper [form-group] ion-item ion-input {\n      color: #5d5d5d; }\n  ion-content .login-wrapper .checkbox .form-check {\n  padding-left: 0px; }\n  ion-content .login-wrapper .checkbox .form-check ion-item {\n    --padding-start: 0px;\n    --inner-padding-end: 0px;\n    --min-height: 24px;\n    --background:transparent; }\n  ion-content .login-wrapper .checkbox .form-check ion-item ion-label {\n      margin: 0px;\n      font-size: 14px;\n      color: #444;\n      font-weight: 600; }\n  ion-content .login-wrapper .checkbox .form-check ion-item ion-checkbox {\n      margin: 0px 6px 0px 0px;\n      --size: 13px;\n      --border-width: 1px; }\n  ion-content .login-wrapper .details [mnhead-sec] {\n  position: relative;\n  z-index: 1;\n  margin-bottom: 30px;\n  padding-bottom: 8px; }\n  ion-content .login-wrapper .details [mnhead-sec]:after {\n    position: absolute;\n    content: \"\";\n    bottom: 0px;\n    left: 0px;\n    width: 70px;\n    height: 3px;\n    background: var(--ion-color-primary);\n    z-index: -1; }\n  ion-content .login-wrapper .details [mnhead-sec] img {\n    display: block;\n    margin: 0px auto 20px;\n    max-width: 180px; }\n  ion-content .login-wrapper .details [mnhead-sec] p {\n    margin-top: 3px; }\n  [catCols] ul {\n  list-style: none;\n  padding: 15px;\n  margin: 0; }\n  [catCols] ul li {\n    position: relative;\n    margin-bottom: 15px;\n    margin-right: 15px;\n    display: inline-block;\n    width: 31%; }\n  [catCols] ul li img {\n      width: 100%;\n      height: 150px; }\n  [catCols] ul li ion-label {\n      color: #fff;\n      font-size: 16px;\n      position: absolute;\n      left: 0px;\n      bottom: 0px;\n      right: 0;\n      text-align: left;\n      background: -webkit-linear-gradient(top, rgba(255, 0, 0, 0), rgba(0, 0, 0, 0.6));\n      padding: 60px 10px 10px; }\n  [catCols] ul li ion-checkbox {\n      position: absolute;\n      right: 10px;\n      top: 10px; }\n  [catCols] ul li:nth-child(3n) {\n      margin-right: 0; }\n  @media (min-width: 768px) {\n  ion-content .login-wrapper .details [mnhead-sec] img {\n    display: none; } }\n  @media (max-width: 767px) {\n  ion-content .mobile-none {\n    display: none; }\n  ion-content .login-box {\n    background: transparent;\n    box-shadow: none;\n    border-radius: 0px; }\n  ion-content .login-wrapper:before {\n    background: rgba(255, 255, 255, 0.97); }\n  ion-content .login-wrapper .details [mnhead-sec] {\n    text-align: center;\n    margin-bottom: 25px;\n    padding-bottom: 0px; }\n    ion-content .login-wrapper .details [mnhead-sec]:after {\n      display: none; }\n  ion-content .login-wrapper [form-group] label {\n    font-size: 13px; }\n  ion-content .login-inner-form p {\n    text-align: center;\n    font-size: 12px; }\n  ion-content .login-inner-form h3 {\n    font-size: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvaW50ZXJlc3QvaW50ZXJlc3QucGFnZS5zY3NzIiwic3JjL2FwcC9pbnRlcmVzdC9pbnRlcmVzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFNRyxtQkFBbUIsRUFBQTtFQU50QjtJQVNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXLEVBQUE7RUFiZjtJQWlCSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFCQUFnQjtJQUNoQixrQkFBYTtJQUNiLGVBQWU7SUFDZixxQkFBaUI7SUFDakIsa0JBQWMsRUFBQTtFQXZCbEI7TUEwQlEsV0FBVTtNQUNiLGFBQWEsRUFBQTtFQTNCbEI7UUE4Qk0sK0JBQThCO1FBQzlCLGVBQWUsRUFBQTtFQS9CckI7TUFvQ1EsY0FBYSxFQUFBO0VBcENyQjtFQTRDTyxpQkFBZ0IsRUFBQTtFQTVDdkI7SUErQ0ssb0JBQWdCO0lBQ2hCLHdCQUFvQjtJQUNqQixrQkFBYTtJQUNoQix3QkFBYSxFQUFBO0VBbERsQjtNQXFETSxXQUFXO01BQ1gsZUFBZTtNQUNmLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTtFQXhEdEI7TUE0RE0sdUJBQXVCO01BQ3ZCLFlBQU87TUFDUCxtQkFBZSxFQUFBO0VBOURyQjtFQXVFTyxrQkFBaUI7RUFDcEIsVUFBUztFQUNULG1CQUFtQjtFQUNuQixtQkFBa0IsRUFBQTtFQTFFdEI7SUE2RVEsa0JBQWlCO0lBQ3BCLFdBQVU7SUFDVixXQUFVO0lBQ1YsU0FBUTtJQUNSLFdBQVU7SUFDVixXQUFVO0lBQ1Ysb0NBQW1DO0lBQ25DLFdBQVUsRUFBQTtFQXBGZjtJQXdGSyxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGdCQUFnQixFQUFBO0VBMUZyQjtJQThGSyxlQUFlLEVBQUE7RUMvQnBCO0VEd0NFLGdCQUFnQjtFQUNoQixhQUFZO0VBQ1osU0FBUSxFQUFBO0VDdENSO0lEd0NDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixVQUFTLEVBQUE7RUN0Q1I7TUR3Q0EsV0FBVTtNQUNWLGFBQWEsRUFBQTtFQ3RDYjtNRHlDQSxXQUFXO01BQ1gsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixTQUFRO01BQ1IsV0FBVTtNQUNWLFFBQU87TUFDUCxnQkFBZTtNQUNmLGdGQUF5RTtNQUN6RSx1QkFBc0IsRUFBQTtFQ3ZDdEI7TUQwQ0Esa0JBQWtCO01BQ2xCLFdBQVU7TUFDVixTQUFRLEVBQUE7RUN4Q1I7TUQyQ0EsZUFBYyxFQUFBO0VBUWxCO0VBQ0k7SUFVRSxhQUFZLEVBQUEsRUFDWjtFQU1OO0VBQ0k7SUFJRCxhQUFZLEVBQUE7RUFKWDtJQVFELHVCQUFzQjtJQUN0QixnQkFBZTtJQUNmLGtCQUFpQixFQUFBO0VBVmhCO0lBZ0JBLHFDQUF3QyxFQUFBO0VBaEJ4QztJQXlCQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQixFQUFBO0lBM0JwQjtNQThCRSxhQUFZLEVBQUE7RUE5QmQ7SUFzQ2dCLGVBQWUsRUFBQTtFQXRDL0I7SUE4Q0Esa0JBQWlCO0lBQ2xCLGVBQWUsRUFBQTtFQS9DZDtJQW1EQSxlQUFlLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2ludGVyZXN0L2ludGVyZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50XG57XG4gICAgLmxvZ2luLXdyYXBwZXJcblx0e1xuXHRcdFtmb3JtLWdyb3VwXVxuXHRcdHsgICAgXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdFx0bGFiZWwgXG5cdFx0XHR7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOXB4O1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0cGFkZGluZzogMHB4IDBweDtcblx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHR9XG5cdFx0XHRpb24taXRlbVxuXHRcdFx0e1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHRcdC0tcGFkZGluZy1zdGFydDogMThweDtcblx0XHRcdFx0LS1taW4taGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdC0tcGFkZGluZy1ib3R0b206IDBweDtcblx0XHRcdFx0LS1wYWRkaW5nLXRvcDogMHB4O1x0XHRcdFx0XG5cdFx0XHRcdGlvbi1sYWJlbFxuXHRcdFx0XHR7ICAgICBcblx0XHRcdFx0ICAgIG1hcmdpbjowcHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRpb24taWNvblxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aW9uLWlucHV0XG5cdFx0XHRcdHtcblx0XHRcdFx0ICAgIGNvbG9yOiM1ZDVkNWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cdFx0XHRcblx0XHR9XG4gICAgICAgIC5jaGVja2JveFxuICAgICAgICB7XG5cdFx0ICAgIC5mb3JtLWNoZWNrXG5cdFx0XHR7XG5cdFx0XHQgICAgcGFkZGluZy1sZWZ0OjBweDtcblx0XHRcdCAgICBpb24taXRlbVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG5cdFx0XHRcdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHRcdFx0XHQgICAgLS1taW4taGVpZ2h0OiAyNHB4O1x0XG5cdFx0XHRcdFx0LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWxcbiAgICAgICAgICAgICAgICAgICAge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzQ0NDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0fVx0XHRcbiAgICAgICAgICAgICAgICAgICAgaW9uLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIHtcblx0XHRcdFx0XHRcdG1hcmdpbjogMHB4IDZweCAwcHggMHB4O1xuXHRcdFx0XHRcdFx0LS1zaXplOiAxM3B4O1x0XG5cdFx0XHRcdFx0XHQtLWJvcmRlci13aWR0aDogMXB4O1x0XG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbiAgICAgICAgLmRldGFpbHNcbiAgICAgICAge1xuXHRcdCAgICBbbW5oZWFkLXNlY11cblx0XHRcdHtcblx0XHRcdCAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcblx0XHRcdFx0ei1pbmRleDoxO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTo4cHg7XG5cdFx0XHRcdCY6YWZ0ZXJcblx0XHRcdFx0e1xuXHRcdFx0XHQgICAgcG9zaXRpb246YWJzb2x1dGU7XG5cdFx0XHRcdFx0Y29udGVudDpcIlwiO1xuXHRcdFx0XHRcdGJvdHRvbTowcHg7XG5cdFx0XHRcdFx0bGVmdDowcHg7XG5cdFx0XHRcdFx0d2lkdGg6NzBweDtcblx0XHRcdFx0XHRoZWlnaHQ6M3B4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0XHRcdHotaW5kZXg6LTE7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW1nIFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0bWFyZ2luOiAwcHggYXV0byAyMHB4O1xuXHRcdFx0XHRcdG1heC13aWR0aDogMTgwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0cCBcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDNweDtcblx0XHRcdFx0fVx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fVx0XHRcblx0fVxufVxuXG5bY2F0Q29sc117XG5cdHVse1xuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0cGFkZGluZzoxNXB4O1xuXHRcdG1hcmdpbjowO1xuXHRcdGxpe1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcblx0XHRcdG1hcmdpbi1yaWdodDoxNXB4O1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0d2lkdGg6MzElO1xuXHRcdFx0aW1ne1xuXHRcdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDE1MHB4O1xuXHRcdFx0fVxuXHRcdFx0aW9uLWxhYmVse1xuXHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGxlZnQ6MHB4O1xuXHRcdFx0XHRib3R0b206MHB4O1xuXHRcdFx0XHRyaWdodDowO1xuXHRcdFx0XHR0ZXh0LWFsaWduOmxlZnQ7XG5cdFx0XHRcdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMCwwLDApLCByZ2JhKDAsMCwwLC42KSk7XG5cdFx0XHRcdHBhZGRpbmc6NjBweCAxMHB4IDEwcHg7XG5cdFx0XHR9XG5cdFx0XHRpb24tY2hlY2tib3h7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0cmlnaHQ6MTBweDtcblx0XHRcdFx0dG9wOjEwcHg7XG5cdFx0XHR9XG5cdFx0XHQmOm50aC1jaGlsZCgzbil7XG5cdFx0XHRcdG1hcmdpbi1yaWdodDowO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaW9uLWNvbnRlbnRcblx0e1xuXHRcdC5sb2dpbi13cmFwcGVyXG5cdFx0e1xuXHRcdCAgICAuZGV0YWlsc1xuXHRcdFx0e1xuXHRcdFx0XHRbbW5oZWFkLXNlY11cblx0XHRcdFx0eyBcblx0XHRcdFx0XHRpbWdcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRkaXNwbGF5Om5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBpb24tY29udGVudFxuXHR7XG5cdFx0Lm1vYmlsZS1ub25lXG5cdFx0e1xuXHRcdFx0ZGlzcGxheTpub25lO1xuXHRcdH1cblx0XHQubG9naW4tYm94XG5cdFx0e1xuXHRcdFx0YmFja2dyb3VuZDp0cmFuc3BhcmVudDtcblx0XHRcdGJveC1zaGFkb3c6bm9uZTtcblx0XHRcdGJvcmRlci1yYWRpdXM6MHB4O1xuXHRcdH1cblx0XHQubG9naW4td3JhcHBlclxuXHRcdHtcblx0XHRcdCY6YmVmb3JlIFxuXHRcdFx0e1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSAsIDI1NSAsIDI1NSAsIDAuOTcpO1xuXHRcdFx0fVx0XG5cdFx0fVxuXHRcdC5sb2dpbi13cmFwcGVyXG5cdFx0e1xuXHRcdFx0LmRldGFpbHNcblx0XHRcdHtcblx0XHRcdFx0W21uaGVhZC1zZWNdXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjVweDtcblx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMHB4O1x0XHRcdFxuXHRcdFx0XHRcdCY6YWZ0ZXIgXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZGlzcGxheTpub25lO1xuXHRcdFx0XHRcdH1cdFxuXHRcdFx0XHR9XHRcblx0XHRcdH1cblx0XHRcdFtmb3JtLWdyb3VwXVxuXHRcdFx0e1xuXHRcdFx0ICAgIGxhYmVsXG5cdFx0XHRcdHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1x0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LmxvZ2luLWlubmVyLWZvcm0gXG5cdFx0e1xuXHRcdFx0cFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdH1cblx0XHRcdGgzIFxuXHRcdFx0e1xuXHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHR9XHRcdFx0XG5cdFx0fVx0XG5cdH1cdFxufSIsImlvbi1jb250ZW50IC5sb2dpbi13cmFwcGVyIFtmb3JtLWdyb3VwXSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbiAgaW9uLWNvbnRlbnQgLmxvZ2luLXdyYXBwZXIgW2Zvcm0tZ3JvdXBdIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDBweCAwcHg7XG4gICAgY29sb3I6ICMwMDA7IH1cbiAgaW9uLWNvbnRlbnQgLmxvZ2luLXdyYXBwZXIgW2Zvcm0tZ3JvdXBdIGlvbi1pdGVtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE4cHg7XG4gICAgLS1taW4taGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4OyB9XG4gICAgaW9uLWNvbnRlbnQgLmxvZ2luLXdyYXBwZXIgW2Zvcm0tZ3JvdXBdIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgICAgIGlvbi1jb250ZW50IC5sb2dpbi13cmFwcGVyIFtmb3JtLWdyb3VwXSBpb24taXRlbSBpb24tbGFiZWwgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7IH1cbiAgICBpb24tY29udGVudCAubG9naW4td3JhcHBlciBbZm9ybS1ncm91cF0gaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgICAgIGNvbG9yOiAjNWQ1ZDVkOyB9XG5cbmlvbi1jb250ZW50IC5sb2dpbi13cmFwcGVyIC5jaGVja2JveCAuZm9ybS1jaGVjayB7XG4gIHBhZGRpbmctbGVmdDogMHB4OyB9XG4gIGlvbi1jb250ZW50IC5sb2dpbi13cmFwcGVyIC5jaGVja2JveCAuZm9ybS1jaGVjayBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tbWluLWhlaWdodDogMjRweDtcbiAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7IH1cbiAgICBpb24tY29udGVudCAubG9naW4td3JhcHBlciAuY2hlY2tib3ggLmZvcm0tY2hlY2sgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICBmb250LXdlaWdodDogNjAwOyB9XG4gICAgaW9uLWNvbnRlbnQgLmxvZ2luLXdyYXBwZXIgLmNoZWNrYm94IC5mb3JtLWNoZWNrIGlvbi1pdGVtIGlvbi1jaGVja2JveCB7XG4gICAgICBtYXJnaW46IDBweCA2cHggMHB4IDBweDtcbiAgICAgIC0tc2l6ZTogMTNweDtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7IH1cblxuaW9uLWNvbnRlbnQgLmxvZ2luLXdyYXBwZXIgLmRldGFpbHMgW21uaGVhZC1zZWNdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4OyB9XG4gIGlvbi1jb250ZW50IC5sb2dpbi13cmFwcGVyIC5kZXRhaWxzIFttbmhlYWQtc2VjXTphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB6LWluZGV4OiAtMTsgfVxuICBpb24tY29udGVudCAubG9naW4td3JhcHBlciAuZGV0YWlscyBbbW5oZWFkLXNlY10gaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDBweCBhdXRvIDIwcHg7XG4gICAgbWF4LXdpZHRoOiAxODBweDsgfVxuICBpb24tY29udGVudCAubG9naW4td3JhcHBlciAuZGV0YWlscyBbbW5oZWFkLXNlY10gcCB7XG4gICAgbWFyZ2luLXRvcDogM3B4OyB9XG5cbltjYXRDb2xzXSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMDsgfVxuICBbY2F0Q29sc10gdWwgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMxJTsgfVxuICAgIFtjYXRDb2xzXSB1bCBsaSBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDE1MHB4OyB9XG4gICAgW2NhdENvbHNdIHVsIGxpIGlvbi1sYWJlbCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC42KSk7XG4gICAgICBwYWRkaW5nOiA2MHB4IDEwcHggMTBweDsgfVxuICAgIFtjYXRDb2xzXSB1bCBsaSBpb24tY2hlY2tib3gge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICB0b3A6IDEwcHg7IH1cbiAgICBbY2F0Q29sc10gdWwgbGk6bnRoLWNoaWxkKDNuKSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGlvbi1jb250ZW50IC5sb2dpbi13cmFwcGVyIC5kZXRhaWxzIFttbmhlYWQtc2VjXSBpbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgaW9uLWNvbnRlbnQgLm1vYmlsZS1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIGlvbi1jb250ZW50IC5sb2dpbi1ib3gge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4OyB9XG4gIGlvbi1jb250ZW50IC5sb2dpbi13cmFwcGVyOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3KTsgfVxuICBpb24tY29udGVudCAubG9naW4td3JhcHBlciAuZGV0YWlscyBbbW5oZWFkLXNlY10ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7IH1cbiAgICBpb24tY29udGVudCAubG9naW4td3JhcHBlciAuZGV0YWlscyBbbW5oZWFkLXNlY106YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICBpb24tY29udGVudCAubG9naW4td3JhcHBlciBbZm9ybS1ncm91cF0gbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTNweDsgfVxuICBpb24tY29udGVudCAubG9naW4taW5uZXItZm9ybSBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4OyB9XG4gIGlvbi1jb250ZW50IC5sb2dpbi1pbm5lci1mb3JtIGgzIHtcbiAgICBmb250LXNpemU6IDIwcHg7IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/interest/interest.page.ts":
/*!*******************************************!*\
  !*** ./src/app/interest/interest.page.ts ***!
  \*******************************************/
/*! exports provided: InterestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestPage", function() { return InterestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_globalFooService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user/globalFooService.service */ "./src/app/services/user/globalFooService.service.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");










var InterestPage = /** @class */ (function () {
    function InterestPage(cd, globalFooService, toastController, userService, loadingController, router, events, socialAuthService, fb, googlePlus) {
        this.cd = cd;
        this.globalFooService = globalFooService;
        this.toastController = toastController;
        this.userService = userService;
        this.loadingController = loadingController;
        this.router = router;
        this.events = events;
        this.socialAuthService = socialAuthService;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.errors = ['', null, undefined];
        this.ENC_SALT = _config__WEBPACK_IMPORTED_MODULE_4__["config"].ENC_SALT;
        this.isBrowser = localStorage.getItem('isBrowser');
        this.checked = [];
        this.proImage_url = 'http://dev.indiit.solutions/TJ/dev/dev/public/uploads/category_images/';
    }
    InterestPage.prototype.ngOnInit = function () {
    };
    InterestPage.prototype.ionViewDidEnter = function () {
        if (localStorage.getItem('comeFrom') == 'login') {
            this.router.navigate(['/blog']);
            return;
        }
        this.getCategories();
    };
    InterestPage.prototype.addCheckbox = function (event, checkbox) {
        console.log(event);
        if (event.target.checked) {
            var index = this.removeCheckedFromArray(checkbox);
            this.checked.splice(index, 1);
        }
        else {
            this.checked.push(checkbox);
        }
    };
    InterestPage.prototype.getCategories = function () {
        var _this = this;
        this.userService.postData({}, 'getAllCategories').subscribe(function (result) {
            _this.stopLoading();
            _this.categories = result.data;
            _this.cd.detectChanges();
        }, function (err) {
            _this.stopLoading();
            _this.categories = [];
        });
    };
    //Removes checkbox from array when you uncheck it
    InterestPage.prototype.removeCheckedFromArray = function (checkbox) {
        return this.checked.findIndex(function (category) {
            return category === checkbox;
        });
    };
    //Empties array with checkedboxes
    InterestPage.prototype.emptyCheckedArray = function () {
        this.checked = [];
    };
    InterestPage.prototype.getCheckedBoxes = function () {
        var _this = this;
        console.log(this.checked);
        this.presentLoading();
        this.userService.postData({ user_id: localStorage.getItem('sin_auth_userId'), data: this.checked }, 'saveInterest').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                localStorage.removeItem('comeFrom');
                localStorage.setItem('comeFrom', 'login');
                _this.router.navigate(['/blog']);
            }
            else {
                _this.presentToast('Something went wrong please try after some time.', 'danger');
                return false;
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Something went wrong please try after some time.', 'danger');
            return false;
        });
    };
    InterestPage.prototype.login = function (cats) {
        console.log(cats);
    };
    InterestPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InterestPage.prototype.stopLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.loading != undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loading.dismiss()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        self = this;
                        setTimeout(function () {
                            self.stopLoading();
                        }, 1000);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InterestPage.prototype.presentToast = function (message, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 3000,
                            position: 'bottom',
                            color: color,
                            showCloseButton: true
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    InterestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interest',
            template: __webpack_require__(/*! ./interest.page.html */ "./src/app/interest/interest.page.html"),
            styles: [__webpack_require__(/*! ./interest.page.scss */ "./src/app/interest/interest.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services_user_globalFooService_service__WEBPACK_IMPORTED_MODULE_6__["GlobalFooService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"]])
    ], InterestPage);
    return InterestPage;
}());



/***/ })

}]);
//# sourceMappingURL=interest-interest-module.js.map