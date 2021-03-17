(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n<div class=\"user-login-main\">\t\n\t\t<div class=\"container-fluid px-0\">\n\t\t\t<div class=\"row no-gutters min-vh-100\">\n\t\t\t\t<div class=\"col-md-6 col-lg-5 col-xl-4 d-flex flex-column bg-light  user-login-left shadow-lg order-2 order-md-1\">\n\t\t\t\t\t<div class=\"user-login-inner\">\n\t\t\t\t\t\t<div class=\"user-login-logo mb-4\"> \n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t    <img src=\"assets/img/user-logo.png\" class=\"logo\" alt=\"logo\">\n\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-border\">\n\t\t\t\t\t\t\t<div form-group>\t\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"name\" type=\"text\" placeholder=\"Full Name\" ></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div form-group>\t\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-input type=\"number\" [(ngModel)]=\"phone\"  placeholder=\"Phone Number\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t<div form-group>\t\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"email\" type=\"email\" placeholder=\"Email Address\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t<div form-group>\t\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"password\" type=\"password\" placeholder=\"Password\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t<div form-group>\t\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"confirm_password\" type=\"password\" placeholder=\"Confirm Password\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\t\n                                <div class=\"checkbox\">\n                                    <div class=\"form-check checkbox-theme\">\n\t\t\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-label>By creating an account, you agree to <a class=\"btn-link\" href=\"javascript:void(0)\">Terms & Conditions </a> and <a class=\"btn-link\" href=\"javascript:void(0)\"> Privacy Policy </a>.</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</ion-item>\n                                    </div>\n                                </div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<a class=\"btn btn-primary btn-block text-uppercase my-4\" href=\"javascript:void(0)\" (click)=\"register(name,email,phone,password,confirm_password)\" >Register</a>\n\t\t\t\t\t\t\t<p class=\"register-here-btn\">Already have an account?<a routerLink=\"/login\" href=\"javascript:void(0)\"> Sign In!</a></p>\n\t\t\t\t\t\t</div>\t\t\t  \t\t\t  \n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\t\n\t\t\t\t<div mobile-none class=\"col-md-6 col-lg-7 col-xl-8 order-1 order-md-2\">\n\t\t\t\t\t<div class=\"user-hero-wrap d-flex align-items-center h-100\">\n\t\t\t\t\t\t<div class=\"user-hero-bg user-hero-bg-scroll\"></div>\n\t\t\t\t\t\t<!--div class=\"user-login-hero-content mx-auto w-100 h-100 d-flex flex-column\">\n\t\t\t\t\t\t\t<div class=\"row no-gutters my-auto py-5\">\n\t\t\t\t\t\t\t\t<div class=\"col-10 col-lg-9 mx-auto text-center\"> \t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t    </div-->\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .user-login-main [form-group] {\n  margin-bottom: 20px; }\n  ion-content .user-login-main [form-group] ion-item {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    border-radius: 0px;\n    --padding-start: 0px;\n    --background:transparent;\n    --inner-padding-end: 0px;\n    --min-height: 52px;\n    font-size: 14px;\n    --padding-bottom: 0px;\n    --padding-top: 0px; }\n  ion-content .user-login-main [form-group] ion-item ion-input {\n      color: #000;\n      --placeholder-opacity: 0.7; }\n  ion-content .user-login-main .checkbox .form-check {\n  padding-left: 0px; }\n  ion-content .user-login-main .checkbox .form-check ion-item {\n    --padding-start: 0px;\n    --inner-padding-end: 0px;\n    --min-height: 24px;\n    --background:transparent; }\n  ion-content .user-login-main .checkbox .form-check ion-item ion-label {\n      margin: 0px;\n      font-size: 14px;\n      color: #84757d;\n      white-space: initial;\n      font-weight: 500; }\n  ion-content .user-login-main .checkbox .form-check ion-item ion-label a {\n        color: var(--ion-color-primary); }\n  ion-content .user-login-main .checkbox .form-check ion-item ion-label a:hover {\n          color: var(--ion-color-secondary); }\n  ion-content .user-login-main .checkbox .form-check ion-item ion-checkbox {\n      margin: 0px 6px 0px 0px;\n      --size: 13px;\n      --border-width: 1px; }\n  @media (max-width: 767px) {\n  ion-content .user-login-main .user-login-left {\n    position: relative;\n    z-index: 1;\n    box-shadow: none; }\n    ion-content .user-login-main .user-login-left:before {\n      position: absolute;\n      content: \"\";\n      width: 100%;\n      height: 100%;\n      background: url('login.jpg') no-repeat center center/cover;\n      opacity: 0.05;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: -1; }\n    ion-content .user-login-main .user-login-left .user-login-inner {\n      padding: 30px; }\n  ion-content .user-login-main [mobile-none] {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFNRyxtQkFBbUIsRUFBQTtFQU50QjtJQVNJLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsb0JBQWdCO0lBQ2hCLHdCQUFhO0lBQ2Isd0JBQW9CO0lBQ3BCLGtCQUFhO0lBQ2IsZUFBZTtJQUNmLHFCQUFpQjtJQUNqQixrQkFBYyxFQUFBO0VBakJsQjtNQW9CUSxXQUFVO01BQ1YsMEJBQXNCLEVBQUE7RUFyQjlCO0VBNkJPLGlCQUFnQixFQUFBO0VBN0J2QjtJQWdDSyxvQkFBZ0I7SUFDaEIsd0JBQW9CO0lBQ2pCLGtCQUFhO0lBQ2hCLHdCQUFhLEVBQUE7RUFuQ2xCO01Bc0NNLFdBQVc7TUFDWCxlQUFlO01BQ2YsY0FBYztNQUNkLG9CQUFvQjtNQUNwQixnQkFBZ0IsRUFBQTtFQTFDdEI7UUE2Q1UsK0JBQStCLEVBQUE7RUE3Q3pDO1VBZ0RXLGlDQUFpQyxFQUFBO0VBaEQ1QztNQXNETSx1QkFBdUI7TUFDdkIsWUFBTztNQUNQLG1CQUFlLEVBQUE7RUFRckI7RUFDSTtJQU1BLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWUsRUFBQTtJQVJmO01BV0Msa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxXQUFXO01BQ1gsWUFBWTtNQUNaLDBEQUEyRTtNQUMzRSxhQUFhO01BQ2IsTUFBTTtNQUNOLE9BQU87TUFDUCxRQUFRO01BQ1IsU0FBUztNQUNULFdBQVUsRUFBQTtJQXJCWDtNQXlCQyxhQUFZLEVBQUE7RUF6QmI7SUE4QkcsYUFBWSxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudFxyXG57XHJcbiAgICAudXNlci1sb2dpbi1tYWluXHJcblx0e1xyXG5cdFx0W2Zvcm0tZ3JvdXBdXHJcblx0XHR7ICAgIFxyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdFx0XHRpb24taXRlbVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMHB4O1xyXG5cdFx0XHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG5cdFx0XHRcdC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuXHRcdFx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHRcdFx0LS1taW4taGVpZ2h0OiA1MnB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHQtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLXRvcDogMHB4O1x0XHJcblx0XHRcdFx0aW9uLWlucHV0XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdCAgICBjb2xvcjojMDAwO1xyXG5cdFx0XHRcdCAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNztcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0fVxyXG4gICAgICAgIC5jaGVja2JveFxyXG4gICAgICAgIHtcclxuXHRcdCAgICAuZm9ybS1jaGVja1xyXG5cdFx0XHR7XHJcblx0XHRcdCAgICBwYWRkaW5nLWxlZnQ6MHB4O1xyXG5cdFx0XHQgICAgaW9uLWl0ZW1cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuXHRcdFx0XHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdFx0XHQgICAgLS1taW4taGVpZ2h0OiAyNHB4O1x0XHJcblx0XHRcdFx0XHQtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzg0NzU3ZDtcclxuXHRcdFx0XHRcdFx0d2hpdGUtc3BhY2U6IGluaXRpYWw7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHRcdGFcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHRcdFx0XHRcdFx0XHQmOmhvdmVyXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdCAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHRcdFxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1jaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwcHggNnB4IDBweCAwcHg7XHJcblx0XHRcdFx0XHRcdC0tc2l6ZTogMTNweDtcdFxyXG5cdFx0XHRcdFx0XHQtLWJvcmRlci13aWR0aDogMXB4O1x0XHJcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVx0XHRcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgaW9uLWNvbnRlbnRcclxuXHR7XHJcblx0ICAgIC51c2VyLWxvZ2luLW1haW5cclxuXHRcdHtcclxuXHRcdCAgICAudXNlci1sb2dpbi1sZWZ0XHJcblx0XHRcdHtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0XHRib3gtc2hhZG93Om5vbmU7XHJcblx0XHRcdFx0JjpiZWZvcmUgXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2xvZ2luLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xyXG5cdFx0XHRcdFx0b3BhY2l0eTogMC4wNTtcclxuXHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0XHRyaWdodDogMDtcclxuXHRcdFx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0XHRcdHotaW5kZXg6LTE7XHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdFx0LnVzZXItbG9naW4taW5uZXJcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwYWRkaW5nOjMwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHQgICAgW21vYmlsZS1ub25lXVxyXG5cdFx0XHR7XHJcblx0XHRcdCAgICBkaXNwbGF5Om5vbmU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");






var RegisterPage = /** @class */ (function () {
    function RegisterPage(toastController, userService, loadingController, router, events) {
        this.toastController = toastController;
        this.userService = userService;
        this.loadingController = loadingController;
        this.router = router;
        this.events = events;
        this.errors = ['', null, undefined];
        this.ENC_SALT = _config__WEBPACK_IMPORTED_MODULE_5__["config"].ENC_SALT;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.register = function (name, email, phone, password, confirm_password) {
        var _this = this;
        if (this.errors.indexOf(name) >= 0) {
            this.presentToast('Please enter your name.', 'danger');
            return false;
        }
        // if(this.errors.indexOf(email) >= 0){
        // 	this.presentToast('Please enter your email address.','danger');
        // 	return false;
        // }
        if (this.errors.indexOf(phone) >= 0) {
            this.presentToast('Please enter your phone number.', 'danger');
            return false;
        }
        console.log(email);
        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!reg.test(String(email).toLowerCase()) && email != undefined && email != '') {
            this.presentToast('Please enter valid email address.', 'danger');
            return false;
        }
        if (this.errors.indexOf(password) >= 0) {
            this.presentToast('Please enter your password.', 'danger');
            return false;
        }
        if (password.length < 6) {
            this.presentToast('Please enter atleast 6 digits password.', 'danger');
            return false;
        }
        if (this.errors.indexOf(confirm_password) >= 0) {
            this.presentToast('Please enter confirm password.', 'danger');
            return false;
        }
        if (password != confirm_password) {
            this.presentToast('Password and Confirm password should be same.', 'danger');
            return false;
        }
        this.presentLoading();
        var dict = {
            name: name,
            email: email == undefined ? '' : email,
            phone: phone,
            password: password,
            provider: 'Direct'
        };
        this.userService.postData(dict, 'registerUser').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.presentToast('Registered successfully!', 'success');
                var userId = _this.userService.encryptData(result.data.id, _this.ENC_SALT);
                localStorage.setItem('sin_auth_token', userId);
                localStorage.setItem('sin_auth_user_name', result.data.name + ' ' + result.data.last_name);
                localStorage.setItem('sin_auth_user_image', result.data.profile_picture);
                _this.events.publish('user_logged_in:true', result.data);
                //this.router.navigate(['/home']);
                _this.userService.postData({ 'guest_user_id': localStorage.getItem('guestUserId'), 'real_user_id': result.data.id }, 'replace_guestUser_to_realUser').subscribe(function (result) {
                    _this.router.navigate(['/home']);
                });
            }
            else if (result.status == 2) {
                _this.presentToast('Your provided Email or Number has already been used. Please use another Email address or phone number.', 'danger');
            }
            else if (result.status == 3) {
                _this.presentToast('Your provided Number has already been used. Please use another Phone number.', 'danger');
            }
            else {
                _this.presentToast('Error while signing up! Please try later.', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Technical error,Please try after some time.', 'danger');
        });
    };
    RegisterPage.prototype.presentToast = function (message, color) {
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
    RegisterPage.prototype.presentLoading = function () {
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
    RegisterPage.prototype.stopLoading = function () {
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
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map