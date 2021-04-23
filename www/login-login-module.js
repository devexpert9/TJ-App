(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"login-wrapper pb-70\">\n        <div class=\"container-fluid\">\n            <div class=\"row login-box\">\n\t\t\t\t<div class=\"col-lg-5 col-md-12 col-sm-12 col-pad-0 bg-img align-self-center none-992 mobile-none\">\n                    <a (click)='goToHome()'>\n                        <img src=\"assets/img/footer-logo.png\" class=\"logo\" alt=\"logo\">\n                    </a>\n\t\t\t\t\t<h4>Connect.Shop.Share</h4>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Lorem Ipsum</p>\n                    <a href=\"javascript:void(0)\" routerLink=\"/register\" class=\"btn-outline\">Register</a>                    \n                </div>\n\t\t\t\t<div class=\"col-lg-7 col-md-12 col-sm-12 col-pad-0 align-self-center\">\n                    <div class=\"login-inner-form pl60\" sign-in>\n                        <div class=\"details\">\n\t\t\t\t\t\t\t<div mnhead-sec>\n\t\t\t\t\t\t\t\t<span (click)='goToHome()' style=\"\n    float: right;\n    margin: -14px -54px 0 27px;\n    background: #f1948f;\n    color: #fff;\n    padding: 0 9px 2px 9px;\n    border-radius: 100%;cursor: pointer;\n\">x</span>\n\t\t\t\t\t\t\t    <img src=\"assets/img/user-logo.png\" class=\"logo\" alt=\"logo\">\n\t\t\t\t\t\t\t\t<h3>Sign In to Your <span>Account</span></h3>\n\t\t\t\t\t\t\t\t<p>Enter your email address and password to login</p>\n\t\t\t\t\t\t\t</div>\n                            <div form-group>\n\t\t\t\t\t\t\t\t\t<label>Email Address</label>\n\t\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"mail\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"email\" placeholder=\"Enter Email Address / Phone\" ></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"lock\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t\t<ion-input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Enter Password\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t</div>\t\n                                <div class=\"checkbox\">\n                                    <div class=\"form-check checkbox-theme\">\n\t\t\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-label>Remember me</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t<ion-checkbox slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t\t</ion-item>\n                                    </div>\n                                    <a routerLink=\"/forgotpassword\" href=\"javascript:void(0)\">Forgot Password?</a>\n                                </div>\n                                <div class=\"form-group\">                                  \n                                    <a href=\"javascript:void(0)\" class=\"btn-md btn-theme btn-block\" (click)=\"login(email,password)\">Login</a>\n                                </div>\n                            <p class=\"register-here-btn\">Don't have an account?<a routerLink=\"/register\" href=\"javascript:void(0)\"> Register Here</a></p>\n                        </div>\n                    </div>\n                </div>\n            </div> \n        </div> \n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .login-wrapper [form-group] {\n  margin-bottom: 20px; }\n  ion-content .login-wrapper [form-group] label {\n    font-size: 14px;\n    margin-bottom: 9px;\n    display: block;\n    padding: 0px 0px;\n    color: #000; }\n  ion-content .login-wrapper [form-group] ion-item {\n    border: 1px solid #dbdbdb;\n    border-radius: 3px;\n    --padding-start: 18px;\n    --min-height: 40px;\n    font-size: 14px;\n    --padding-bottom: 0px;\n    --padding-top: 0px; }\n  ion-content .login-wrapper [form-group] ion-item ion-label {\n      margin: 0px;\n      display: flex; }\n  ion-content .login-wrapper [form-group] ion-item ion-label ion-icon {\n        color: var(--ion-color-primary);\n        font-size: 18px; }\n  ion-content .login-wrapper [form-group] ion-item ion-input {\n      color: #5d5d5d; }\n  ion-content .login-wrapper .checkbox .form-check {\n  padding-left: 0px; }\n  ion-content .login-wrapper .checkbox .form-check ion-item {\n    --padding-start: 0px;\n    --inner-padding-end: 0px;\n    --min-height: 24px;\n    --background:transparent; }\n  ion-content .login-wrapper .checkbox .form-check ion-item ion-label {\n      margin: 0px;\n      font-size: 14px;\n      color: #444;\n      font-weight: 600; }\n  ion-content .login-wrapper .checkbox .form-check ion-item ion-checkbox {\n      margin: 0px 6px 0px 0px;\n      --size: 13px;\n      --border-width: 1px; }\n  ion-content .login-wrapper .details [mnhead-sec] {\n  position: relative;\n  z-index: 1;\n  margin-bottom: 30px;\n  padding-bottom: 8px; }\n  ion-content .login-wrapper .details [mnhead-sec]:after {\n    position: absolute;\n    content: \"\";\n    bottom: 0px;\n    left: 0px;\n    width: 70px;\n    height: 3px;\n    background: var(--ion-color-primary);\n    z-index: -1; }\n  ion-content .login-wrapper .details [mnhead-sec] img {\n    display: block;\n    margin: 0px auto 20px;\n    max-width: 180px; }\n  ion-content .login-wrapper .details [mnhead-sec] p {\n    margin-top: 3px; }\n  @media (min-width: 768px) {\n  ion-content .login-wrapper .details [mnhead-sec] img {\n    display: none; } }\n  @media (max-width: 767px) {\n  ion-content .mobile-none {\n    display: none; }\n  ion-content .login-box {\n    background: transparent;\n    box-shadow: none;\n    border-radius: 0px; }\n  ion-content .login-wrapper:before {\n    background: rgba(255, 255, 255, 0.97); }\n  ion-content .login-wrapper .details [mnhead-sec] {\n    text-align: center;\n    margin-bottom: 25px;\n    padding-bottom: 0px; }\n    ion-content .login-wrapper .details [mnhead-sec]:after {\n      display: none; }\n  ion-content .login-wrapper [form-group] label {\n    font-size: 13px; }\n  ion-content .login-inner-form p {\n    text-align: center;\n    font-size: 12px; }\n  ion-content .login-inner-form h3 {\n    font-size: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBTUcsbUJBQW1CLEVBQUE7RUFOdEI7SUFTSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVyxFQUFBO0VBYmY7SUFpQkkseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQkFBZ0I7SUFDaEIsa0JBQWE7SUFDYixlQUFlO0lBQ2YscUJBQWlCO0lBQ2pCLGtCQUFjLEVBQUE7RUF2QmxCO01BMEJRLFdBQVU7TUFDYixhQUFhLEVBQUE7RUEzQmxCO1FBOEJNLCtCQUE4QjtRQUM5QixlQUFlLEVBQUE7RUEvQnJCO01Bb0NRLGNBQWEsRUFBQTtFQXBDckI7RUE0Q08saUJBQWdCLEVBQUE7RUE1Q3ZCO0lBK0NLLG9CQUFnQjtJQUNoQix3QkFBb0I7SUFDakIsa0JBQWE7SUFDaEIsd0JBQWEsRUFBQTtFQWxEbEI7TUFxRE0sV0FBVztNQUNYLGVBQWU7TUFDZixXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7RUF4RHRCO01BNERNLHVCQUF1QjtNQUN2QixZQUFPO01BQ1AsbUJBQWUsRUFBQTtFQTlEckI7RUF1RU8sa0JBQWlCO0VBQ3BCLFVBQVM7RUFDVCxtQkFBbUI7RUFDbkIsbUJBQWtCLEVBQUE7RUExRXRCO0lBNkVRLGtCQUFpQjtJQUNwQixXQUFVO0lBQ1YsV0FBVTtJQUNWLFNBQVE7SUFDUixXQUFVO0lBQ1YsV0FBVTtJQUNWLG9DQUFtQztJQUNuQyxXQUFVLEVBQUE7RUFwRmY7SUF3RkssY0FBYztJQUNkLHFCQUFxQjtJQUNyQixnQkFBZ0IsRUFBQTtFQTFGckI7SUE4RkssZUFBZSxFQUFBO0VBTXBCO0VBQ0k7SUFVRSxhQUFZLEVBQUEsRUFDWjtFQU1OO0VBQ0k7SUFJRCxhQUFZLEVBQUE7RUFKWDtJQVFELHVCQUFzQjtJQUN0QixnQkFBZTtJQUNmLGtCQUFpQixFQUFBO0VBVmhCO0lBZ0JBLHFDQUF3QyxFQUFBO0VBaEJ4QztJQXlCQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQixFQUFBO0lBM0JwQjtNQThCRSxhQUFZLEVBQUE7RUE5QmQ7SUFzQ2dCLGVBQWUsRUFBQTtFQXRDL0I7SUE4Q0Esa0JBQWlCO0lBQ2pCLGVBQWUsRUFBQTtFQS9DZjtJQW1EQSxlQUFlLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50XHJcbntcclxuICAgIC5sb2dpbi13cmFwcGVyXHJcblx0e1xyXG5cdFx0W2Zvcm0tZ3JvdXBdXHJcblx0XHR7ICAgIFxyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdFx0XHRsYWJlbCBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiA5cHg7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0cGFkZGluZzogMHB4IDBweDtcclxuXHRcdFx0XHRjb2xvcjogIzAwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpb24taXRlbVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2RiZGJkYjtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAxOHB4O1xyXG5cdFx0XHRcdC0tbWluLWhlaWdodDogNDBweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG5cdFx0XHRcdC0tcGFkZGluZy10b3A6IDBweDtcdFx0XHRcdFxyXG5cdFx0XHRcdGlvbi1sYWJlbFxyXG5cdFx0XHRcdHsgICAgIFxyXG5cdFx0XHRcdCAgICBtYXJnaW46MHB4O1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGlvbi1pY29uXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24taW5wdXRcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0ICAgIGNvbG9yOiM1ZDVkNWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHR9XHJcbiAgICAgICAgLmNoZWNrYm94XHJcbiAgICAgICAge1xyXG5cdFx0ICAgIC5mb3JtLWNoZWNrXHJcblx0XHRcdHtcclxuXHRcdFx0ICAgIHBhZGRpbmctbGVmdDowcHg7XHJcblx0XHRcdCAgICBpb24taXRlbVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG5cdFx0XHRcdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0XHRcdCAgICAtLW1pbi1oZWlnaHQ6IDI0cHg7XHRcclxuXHRcdFx0XHRcdC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjNDQ0O1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdFx0fVx0XHRcclxuICAgICAgICAgICAgICAgICAgICBpb24tY2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMHB4IDZweCAwcHggMHB4O1xyXG5cdFx0XHRcdFx0XHQtLXNpemU6IDEzcHg7XHRcclxuXHRcdFx0XHRcdFx0LS1ib3JkZXItd2lkdGg6IDFweDtcdFxyXG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuICAgICAgICAuZGV0YWlsc1xyXG4gICAgICAgIHtcclxuXHRcdCAgICBbbW5oZWFkLXNlY11cclxuXHRcdFx0e1xyXG5cdFx0XHQgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdFx0ei1pbmRleDoxO1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0XHRcdFx0cGFkZGluZy1ib3R0b206OHB4O1xyXG5cdFx0XHRcdCY6YWZ0ZXJcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0ICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdFx0Y29udGVudDpcIlwiO1xyXG5cdFx0XHRcdFx0Ym90dG9tOjBweDtcclxuXHRcdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdFx0d2lkdGg6NzBweDtcclxuXHRcdFx0XHRcdGhlaWdodDozcHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHRcdFx0XHRcdHotaW5kZXg6LTE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGltZyBcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdG1hcmdpbjogMHB4IGF1dG8gMjBweDtcclxuXHRcdFx0XHRcdG1heC13aWR0aDogMTgwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHAgXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogM3B4O1xyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9XHRcdFxyXG5cdH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGlvbi1jb250ZW50XHJcblx0e1xyXG5cdFx0LmxvZ2luLXdyYXBwZXJcclxuXHRcdHtcclxuXHRcdCAgICAuZGV0YWlsc1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0W21uaGVhZC1zZWNdXHJcblx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdGltZ1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5Om5vbmU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgaW9uLWNvbnRlbnRcclxuXHR7XHJcblx0XHQubW9iaWxlLW5vbmVcclxuXHRcdHtcclxuXHRcdFx0ZGlzcGxheTpub25lO1xyXG5cdFx0fVxyXG5cdFx0LmxvZ2luLWJveFxyXG5cdFx0e1xyXG5cdFx0XHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5cdFx0XHRib3gtc2hhZG93Om5vbmU7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6MHB4O1xyXG5cdFx0fVxyXG5cdFx0LmxvZ2luLXdyYXBwZXJcclxuXHRcdHtcclxuXHRcdFx0JjpiZWZvcmUgXHJcblx0XHRcdHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSAsIDI1NSAsIDI1NSAsIDAuOTcpO1xyXG5cdFx0XHR9XHRcclxuXHRcdH1cclxuXHRcdC5sb2dpbi13cmFwcGVyXHJcblx0XHR7XHJcblx0XHRcdC5kZXRhaWxzXHJcblx0XHRcdHtcclxuXHRcdFx0XHRbbW5oZWFkLXNlY11cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDBweDtcdFx0XHRcclxuXHRcdFx0XHRcdCY6YWZ0ZXIgXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdH1cdFxyXG5cdFx0XHR9XHJcblx0XHRcdFtmb3JtLWdyb3VwXVxyXG5cdFx0XHR7XHJcblx0XHRcdCAgICBsYWJlbFxyXG5cdFx0XHRcdHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5sb2dpbi1pbm5lci1mb3JtIFxyXG5cdFx0e1xyXG5cdFx0XHRwXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdH1cclxuXHRcdFx0aDMgXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdH1cdFxyXG5cdH1cdFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
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










var LoginPage = /** @class */ (function () {
    function LoginPage(globalFooService, toastController, userService, loadingController, router, events, socialAuthService, fb, googlePlus) {
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
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.goToHome = function () {
        this.router.navigate(['/blog']);
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        if (localStorage.getItem('sin_auth_token')) {
            this.router.navigate(['/blog']);
        }
        else {
            // alert('nahi hai');
        }
        if (this.loading != undefined) {
            this.stopLoading();
        }
    };
    LoginPage.prototype.login = function (email, password) {
        var _this = this;
        var IsNumber = false;
        var regexStr = /^(?:[1-9]\d*|\d)$/;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.errors.indexOf(email) >= 0) {
            this.presentToast('Please enter your email address or mobile number.', 'danger');
            return false;
        }
        else if (regexStr.test(String(email).toLowerCase())) {
            IsNumber = true;
        }
        else if (!re.test(String(email).toLowerCase()) && IsNumber == false) {
            this.presentToast('Please enter valid email address.', 'danger');
            return false;
        }
        else if (this.errors.indexOf(password) >= 0) {
            this.presentToast('Please enter your password.', 'danger');
            return false;
        }
        var dict = {
            email: IsNumber == true ? null : email,
            phone: IsNumber == true ? email : null,
            password: password
        };
        this.presentLoading();
        this.userService.postData(dict, 'loginUser').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                console.log(result);
                _this.presentToast('Login successfully!', 'success');
                var userId = _this.userService.encryptData(result.data.id, _this.ENC_SALT);
                localStorage.setItem('sin_auth_token', userId);
                localStorage.setItem('sin_auth_userId', result.data.id);
                localStorage.setItem('sin_auth_user_name', result.data.name + ' ' + result.data.last_name);
                localStorage.setItem('sin_auth_user_image', result.data.profile_picture);
                localStorage.setItem('sin_auth_user_email', result.data.email);
                localStorage.setItem('is_login', 'true');
                localStorage.setItem('sellerSwitched', 'false');
                _this.events.publish('user_logged_in:true', result.data);
                localStorage.setItem('comeFrom', 'login');
                _this.userService.postData({ 'guest_user_id': localStorage.getItem('guestUserId'), 'real_user_id': result.data.id }, 'replace_guestUser_to_realUser').subscribe(function (result1) {
                    _this.globalFooService.publishSomeData({
                        foo: { 'data': result.data, 'page': 'afterLoginUserName' }
                    });
                    if (result.data.type == 'user') {
                        if (result.data.interests == null) {
                            _this.router.navigate(['/interest']);
                        }
                        else {
                            _this.router.navigate(['/blog']);
                        }
                    }
                    else {
                        _this.router.navigate(['/blog']);
                    }
                });
            }
            else if (result.status == 2) {
                _this.presentToast('Your account is not active!', 'danger');
            }
            else {
                _this.presentToast('Invalid credentials!', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Technical error,Please try after some time.', 'danger');
        });
    };
    LoginPage.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            _this.socialLogin(userData.name, userData.email, userData.provider, userData.id);
        });
    };
    LoginPage.prototype.facebookLoginMobile = function () {
        var _this = this;
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            return _this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                if (_this.errors.indexOf(profile) == -1) {
                    // profile['picture_large']['data']['url']
                    _this.socialLogin(profile['name'], profile['email'], 'facebook', profile['id']);
                }
                else {
                    _this.presentToast('Error,Please try after some time.', 'danger');
                }
            });
        }).catch(function (e) {
            return _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    LoginPage.prototype.googleLoginMobile = function () {
        var _this = this;
        var ptr = this;
        this.googlePlus.login({}).then(function (res) {
            console.log(res);
            _this.presentLoading();
            var dict = {
                g_id: res.userId,
                email: res.email,
                picture: null,
                name: res.displayName.split(' ')[0],
                lname: res.displayName.split(' ')[1]
            };
            _this.socialLogin('', res.email, 'google', res.userId);
        })
            .catch(function (err) { return console.error(err); });
    };
    LoginPage.prototype.socialLogin = function (name, email, provider, id) {
        var _this = this;
        this.presentLoading();
        this.userService.postData({ name: name, email: email, phone: '', password: '', provider: provider, id: id }, 'socialLogin').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1 || result.status == 2) {
                _this.presentToast('Login successfully!', 'success');
                var userId = _this.userService.encryptData(result.data.id, _this.ENC_SALT);
                localStorage.setItem('sin_auth_token', userId);
                localStorage.setItem('sin_auth_user_name', result.data.name + ' ' + result.data.last_name);
                localStorage.setItem('sin_auth_user_image', result.data.profile_picture);
                _this.events.publish('user_logged_in:true', result.data);
                //this.router.navigate(['/home']);
                _this.userService.postData({ 'guest_user_id': localStorage.getItem('guestUserId'), 'real_user_id': result.data.id }, 'replace_guestUser_to_realUser').subscribe(function (result) {
                    _this.router.navigate(['/blog']);
                });
            }
            else {
                _this.presentToast('Invalid credentials!', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Technical error,Please try after some time.', 'danger');
        });
    };
    LoginPage.prototype.presentToast = function (message, color) {
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
    LoginPage.prototype.presentLoading = function () {
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
    LoginPage.prototype.stopLoading = function () {
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
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            providers: [_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]],
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_globalFooService_service__WEBPACK_IMPORTED_MODULE_6__["GlobalFooService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map