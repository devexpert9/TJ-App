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

module.exports = "<ion-content>\n<div class=\"user-login-main\">\t\n\t\t<div class=\"container-fluid px-0\">\n\t\t\t<div class=\"row no-gutters min-vh-100\">\n\t\t\t\t<div class=\"col-md-6 col-lg-5 col-xl-4 d-flex flex-column bg-light  user-login-left shadow-lg order-2 order-md-1\">\n\t\t\t\t\t<div class=\"user-login-inner\">\n\t\t\t\t\t\t<div class=\"user-login-logo mb-4\"> \n\t\t\t\t\t\t\t<a (click)='goToHome()'>\n\t\t\t\t\t\t\t    <img src=\"assets/img/user-logo.png\" class=\"logo\" alt=\"logo\">\n\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-border\">\n\t\t\t\t\t\t\t<div form-group>\t\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"name\" type=\"text\" placeholder=\"Full Name\" ></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div form-group>\t\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-input type=\"number\" [(ngModel)]=\"phone\"  placeholder=\"Phone Number\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t<div form-group>\t\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"email\" type=\"email\" placeholder=\"Email Address\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t<div form-group>\t\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"password\" type=\"password\" placeholder=\"Password\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t<div form-group>\t\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"confirm_password\" type=\"password\" placeholder=\"Confirm Password\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div form-group>\t\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Register As\" [(ngModel)]=\"type\"  style='padding-left:0px'>\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"user\">User</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"seller\">Seller</ion-select-option>\n\t\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\t\n                            <div class=\"checkbox\">\n                                <div class=\"form-check checkbox-theme\">\n\t\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t<ion-label>By creating an account, you agree to <a class=\"btn-link\" href=\"javascript:void(0)\">Terms & Conditions </a> and <a class=\"btn-link\" href=\"javascript:void(0)\"> Privacy Policy </a>.</ion-label>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</ion-item>\n                                </div>\n                            </div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<a class=\"btn btn-primary btn-block text-uppercase my-4\" href=\"javascript:void(0)\" (click)=\"register(name,email,phone,password,confirm_password,type)\" >\n\t\t\t\t\t\t\t\tRegister\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<p class=\"register-here-btn\">Already have an account?<a routerLink=\"/login\" href=\"javascript:void(0)\"> Sign In!</a></p>\n\t\t\t\t\t\t</div>\t\t\t  \t\t\t  \n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\t\n\t\t\t\t<div mobile-none class=\"col-md-6 col-lg-7 col-xl-8 order-1 order-md-2\">\n\t\t\t\t\t<div class=\"user-hero-wrap d-flex align-items-center h-100\">\n\t\t\t\t\t\t<div class=\"user-hero-bg user-hero-bg-scroll\"></div>\n\t\t\t\t\t\t<!--div class=\"user-login-hero-content mx-auto w-100 h-100 d-flex flex-column\">\n\t\t\t\t\t\t\t<div class=\"row no-gutters my-auto py-5\">\n\t\t\t\t\t\t\t\t<div class=\"col-10 col-lg-9 mx-auto text-center\"> \t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t    </div-->\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .user-login-main [form-group] {\n  margin-bottom: 20px; }\n  ion-content .user-login-main [form-group] ion-item {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    border-radius: 0px;\n    --padding-start: 0px;\n    --background:transparent;\n    --inner-padding-end: 0px;\n    --min-height: 52px;\n    font-size: 14px;\n    --padding-bottom: 0px;\n    --padding-top: 0px; }\n  ion-content .user-login-main [form-group] ion-item ion-input {\n      color: #000;\n      --placeholder-opacity: 0.7; }\n  ion-content .user-login-main .checkbox .form-check {\n  padding-left: 0px; }\n  ion-content .user-login-main .checkbox .form-check ion-item {\n    --padding-start: 0px;\n    --inner-padding-end: 0px;\n    --min-height: 24px;\n    --background:transparent; }\n  ion-content .user-login-main .checkbox .form-check ion-item ion-label {\n      margin: 0px;\n      font-size: 14px;\n      color: #84757d;\n      white-space: initial;\n      font-weight: 500; }\n  ion-content .user-login-main .checkbox .form-check ion-item ion-label a {\n        color: var(--ion-color-primary); }\n  ion-content .user-login-main .checkbox .form-check ion-item ion-label a:hover {\n          color: var(--ion-color-secondary); }\n  ion-content .user-login-main .checkbox .form-check ion-item ion-checkbox {\n      margin: 0px 6px 0px 0px;\n      --size: 13px;\n      --border-width: 1px; }\n  .select-placeholder {\n  color: currentColor !important;\n  opacity: 0.66 !important; }\n  @media (max-width: 767px) {\n  ion-content .user-login-main .user-login-left {\n    position: relative;\n    z-index: 1;\n    box-shadow: none; }\n    ion-content .user-login-main .user-login-left:before {\n      position: absolute;\n      content: \"\";\n      width: 100%;\n      height: 100%;\n      background: url('login.jpg') no-repeat center center/cover;\n      opacity: 0.05;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: -1; }\n    ion-content .user-login-main .user-login-left .user-login-inner {\n      padding: 30px; }\n  ion-content .user-login-main [mobile-none] {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBUUcsbUJBQW1CLEVBQUE7RUFSdEI7SUFXSSw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLG9CQUFnQjtJQUNoQix3QkFBYTtJQUNiLHdCQUFvQjtJQUNwQixrQkFBYTtJQUNiLGVBQWU7SUFDZixxQkFBaUI7SUFDakIsa0JBQWMsRUFBQTtFQW5CbEI7TUFzQlEsV0FBVTtNQUNWLDBCQUFzQixFQUFBO0VBdkI5QjtFQStCTyxpQkFBZ0IsRUFBQTtFQS9CdkI7SUFrQ0ssb0JBQWdCO0lBQ2hCLHdCQUFvQjtJQUNqQixrQkFBYTtJQUNoQix3QkFBYSxFQUFBO0VBckNsQjtNQXdDTSxXQUFXO01BQ1gsZUFBZTtNQUNmLGNBQWM7TUFDZCxvQkFBb0I7TUFDcEIsZ0JBQWdCLEVBQUE7RUE1Q3RCO1FBK0NVLCtCQUErQixFQUFBO0VBL0N6QztVQWtEVyxpQ0FBaUMsRUFBQTtFQWxENUM7TUF3RE0sdUJBQXVCO01BQ3ZCLFlBQU87TUFDUCxtQkFBZSxFQUFBO0VBUXJCO0VBQ0ssOEJBQTZCO0VBQzdCLHdCQUF1QixFQUFBO0VBRzVCO0VBQ0k7SUFNQSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFlLEVBQUE7SUFSZjtNQVdDLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsV0FBVztNQUNYLFlBQVk7TUFDWiwwREFBMkU7TUFDM0UsYUFBYTtNQUNiLE1BQU07TUFDTixPQUFPO01BQ1AsUUFBUTtNQUNSLFNBQVM7TUFDVCxXQUFVLEVBQUE7SUFyQlg7TUF5QkMsYUFBWSxFQUFBO0VBekJiO0lBOEJHLGFBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnRcclxue1xyXG5cdFxyXG5cclxuICAgIC51c2VyLWxvZ2luLW1haW5cclxuXHR7XHJcblx0XHRbZm9ybS1ncm91cF1cclxuXHRcdHsgICAgXHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHRcdGlvbi1pdGVtXHJcblx0XHRcdHtcclxuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAwcHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcblx0XHRcdFx0LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdFx0XHQtLW1pbi1oZWlnaHQ6IDUycHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdC0tcGFkZGluZy1ib3R0b206IDBweDtcclxuXHRcdFx0XHQtLXBhZGRpbmctdG9wOiAwcHg7XHRcclxuXHRcdFx0XHRpb24taW5wdXRcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0ICAgIGNvbG9yOiMwMDA7XHJcblx0XHRcdFx0ICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC43O1x0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHR9XHJcbiAgICAgICAgLmNoZWNrYm94XHJcbiAgICAgICAge1xyXG5cdFx0ICAgIC5mb3JtLWNoZWNrXHJcblx0XHRcdHtcclxuXHRcdFx0ICAgIHBhZGRpbmctbGVmdDowcHg7XHJcblx0XHRcdCAgICBpb24taXRlbVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG5cdFx0XHRcdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0XHRcdCAgICAtLW1pbi1oZWlnaHQ6IDI0cHg7XHRcclxuXHRcdFx0XHRcdC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjODQ3NTdkO1xyXG5cdFx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogaW5pdGlhbDtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdFx0YVxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG5cdFx0XHRcdFx0XHRcdCY6aG92ZXJcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0ICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWNoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDBweCA2cHggMHB4IDBweDtcclxuXHRcdFx0XHRcdFx0LS1zaXplOiAxM3B4O1x0XHJcblx0XHRcdFx0XHRcdC0tYm9yZGVyLXdpZHRoOiAxcHg7XHRcclxuXHRcdFx0XHRcdH1cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHRcdFxyXG5cdH1cclxufVxyXG5cclxuLnNlbGVjdC1wbGFjZWhvbGRlciB7XHJcblx0ICAgIGNvbG9yOiBjdXJyZW50Q29sb3IhaW1wb3J0YW50O1xyXG5cdCAgICBvcGFjaXR5OiAwLjY2IWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGlvbi1jb250ZW50XHJcblx0e1xyXG5cdCAgICAudXNlci1sb2dpbi1tYWluXHJcblx0XHR7XHJcblx0XHQgICAgLnVzZXItbG9naW4tbGVmdFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzpub25lO1xyXG5cdFx0XHRcdCY6YmVmb3JlIFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9sb2dpbi5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxuXHRcdFx0XHRcdG9wYWNpdHk6IDAuMDU7XHJcblx0XHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdFx0XHRib3R0b206IDA7XHJcblx0XHRcdFx0XHR6LWluZGV4Oi0xO1xyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRcdC51c2VyLWxvZ2luLWlubmVyXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cGFkZGluZzozMHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0ICAgIFttb2JpbGUtbm9uZV1cclxuXHRcdFx0e1xyXG5cdFx0XHQgICAgZGlzcGxheTpub25lO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59Il19 */"

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
    RegisterPage.prototype.goToHome = function () {
        this.router.navigate(['/home']);
    };
    RegisterPage.prototype.register = function (name, email, phone, password, confirm_password, type) {
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
        if (this.errors.indexOf(type) >= 0) {
            this.presentToast('Please enter type.', 'danger');
            return false;
        }
        this.presentLoading();
        var dict = {
            name: name,
            email: email == undefined ? '' : email,
            phone: phone,
            password: password,
            type: type,
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
                    // window.location.reload();
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