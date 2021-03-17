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

module.exports = "<ion-content>\n    <div class=\"login-wrapper pb-70\">\n        <div class=\"container-fluid\">\n            <div class=\"row login-box\">\n\t\t\t\t<div class=\"col-lg-5 col-md-12 col-sm-12 col-pad-0 bg-img align-self-center none-992 mobile-none\">\n                    <a href=\"javascript:void(0)\">\n                        <img src=\"assets/img/footer-logo.png\" class=\"logo\" alt=\"logo\">\n                    </a>\n\t\t\t\t\t<h4>Connect.Shop.Share</h4>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Lorem Ipsum</p>\n                    <a href=\"javascript:void(0)\" routerLink=\"/register\" class=\"btn-outline\">Register</a>                    \n                </div>\n\t\t\t\t<div class=\"col-lg-7 col-md-12 col-sm-12 col-pad-0 align-self-center\">\n                    <div class=\"login-inner-form pl60\" sign-in>\n                        <div class=\"details\">\n\t\t\t\t\t\t\t<div mnhead-sec>\n\t\t\t\t\t\t\t    <img src=\"assets/img/user-logo.png\" class=\"logo\" alt=\"logo\">\n\t\t\t\t\t\t\t\t<h3>Sign In to Your <span>Account</span></h3>\n\t\t\t\t\t\t\t\t<p>Enter your email address and password to login</p>\n\t\t\t\t\t\t\t</div>\n                            <div form-group>\n\t\t\t\t\t\t\t\t\t<label>Email Address</label>\n\t\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"mail\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"email\" placeholder=\"Enter Email Address / Phone\" ></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"lock\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t\t<ion-input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Enter Password\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t</div>\t\n                                <div class=\"checkbox\">\n                                    <div class=\"form-check checkbox-theme\">\n\t\t\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-label>Remember me</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t<ion-checkbox slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t\t</ion-item>\n                                    </div>\n                                    <a routerLink=\"/forgotpassword\" href=\"javascript:void(0)\">Forgot Password?</a>\n                                </div>\n                                <div class=\"form-group\">                                  \n                                    <a href=\"javascript:void(0)\" class=\"btn-md btn-theme btn-block\" (click)=\"login(email,password)\">Login</a>\n                                </div>\n                            <p class=\"register-here-btn\">Don't have an account?<a routerLink=\"/register\" href=\"javascript:void(0)\"> register for a seller’s account</a></p>\n                        </div>\n                    </div>\n                </div>\n            </div> \n        </div> \n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .login-wrapper [form-group] {\n  margin-bottom: 20px; }\n  ion-content .login-wrapper [form-group] label {\n    font-size: 14px;\n    margin-bottom: 9px;\n    display: block;\n    padding: 0px 0px;\n    color: #000; }\n  ion-content .login-wrapper [form-group] ion-item {\n    border: 1px solid #dbdbdb;\n    border-radius: 3px;\n    --padding-start: 18px;\n    --min-height: 40px;\n    font-size: 14px;\n    --padding-bottom: 0px;\n    --padding-top: 0px; }\n  ion-content .login-wrapper [form-group] ion-item ion-label {\n      margin: 0px;\n      display: flex; }\n  ion-content .login-wrapper [form-group] ion-item ion-label ion-icon {\n        color: var(--ion-color-primary);\n        font-size: 18px; }\n  ion-content .login-wrapper [form-group] ion-item ion-input {\n      color: #5d5d5d; }\n  ion-content .login-wrapper .checkbox .form-check {\n  padding-left: 0px; }\n  ion-content .login-wrapper .checkbox .form-check ion-item {\n    --padding-start: 0px;\n    --inner-padding-end: 0px;\n    --min-height: 24px;\n    --background:transparent; }\n  ion-content .login-wrapper .checkbox .form-check ion-item ion-label {\n      margin: 0px;\n      font-size: 14px;\n      color: #444;\n      font-weight: 600; }\n  ion-content .login-wrapper .checkbox .form-check ion-item ion-checkbox {\n      margin: 0px 6px 0px 0px;\n      --size: 13px;\n      --border-width: 1px; }\n  ion-content .login-wrapper .details [mnhead-sec] {\n  position: relative;\n  z-index: 1;\n  margin-bottom: 30px;\n  padding-bottom: 8px; }\n  ion-content .login-wrapper .details [mnhead-sec]:after {\n    position: absolute;\n    content: \"\";\n    bottom: 0px;\n    left: 0px;\n    width: 70px;\n    height: 3px;\n    background: var(--ion-color-primary);\n    z-index: -1; }\n  ion-content .login-wrapper .details [mnhead-sec] img {\n    display: block;\n    margin: 0px auto 20px;\n    max-width: 180px; }\n  ion-content .login-wrapper .details [mnhead-sec] p {\n    margin-top: 3px; }\n  @media (min-width: 768px) {\n  ion-content .login-wrapper .details [mnhead-sec] img {\n    display: none; } }\n  @media (max-width: 767px) {\n  ion-content .mobile-none {\n    display: none; }\n  ion-content .login-box {\n    background: transparent;\n    box-shadow: none;\n    border-radius: 0px; }\n  ion-content .login-wrapper:before {\n    background: rgba(255, 255, 255, 0.97); }\n  ion-content .login-wrapper .details [mnhead-sec] {\n    text-align: center;\n    margin-bottom: 25px;\n    padding-bottom: 0px; }\n    ion-content .login-wrapper .details [mnhead-sec]:after {\n      display: none; }\n  ion-content .login-wrapper [form-group] label {\n    font-size: 13px; }\n  ion-content .login-inner-form p {\n    text-align: center;\n    font-size: 12px; }\n  ion-content .login-inner-form h3 {\n    font-size: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFNRyxtQkFBbUIsRUFBQTtFQU50QjtJQVNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXLEVBQUE7RUFiZjtJQWlCSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFCQUFnQjtJQUNoQixrQkFBYTtJQUNiLGVBQWU7SUFDZixxQkFBaUI7SUFDakIsa0JBQWMsRUFBQTtFQXZCbEI7TUEwQlEsV0FBVTtNQUNiLGFBQWEsRUFBQTtFQTNCbEI7UUE4Qk0sK0JBQThCO1FBQzlCLGVBQWUsRUFBQTtFQS9CckI7TUFvQ1EsY0FBYSxFQUFBO0VBcENyQjtFQTRDTyxpQkFBZ0IsRUFBQTtFQTVDdkI7SUErQ0ssb0JBQWdCO0lBQ2hCLHdCQUFvQjtJQUNqQixrQkFBYTtJQUNoQix3QkFBYSxFQUFBO0VBbERsQjtNQXFETSxXQUFXO01BQ1gsZUFBZTtNQUNmLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTtFQXhEdEI7TUE0RE0sdUJBQXVCO01BQ3ZCLFlBQU87TUFDUCxtQkFBZSxFQUFBO0VBOURyQjtFQXVFTyxrQkFBaUI7RUFDcEIsVUFBUztFQUNULG1CQUFtQjtFQUNuQixtQkFBa0IsRUFBQTtFQTFFdEI7SUE2RVEsa0JBQWlCO0lBQ3BCLFdBQVU7SUFDVixXQUFVO0lBQ1YsU0FBUTtJQUNSLFdBQVU7SUFDVixXQUFVO0lBQ1Ysb0NBQW1DO0lBQ25DLFdBQVUsRUFBQTtFQXBGZjtJQXdGSyxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGdCQUFnQixFQUFBO0VBMUZyQjtJQThGSyxlQUFlLEVBQUE7RUFNcEI7RUFDSTtJQVVFLGFBQVksRUFBQSxFQUNaO0VBTU47RUFDSTtJQUlELGFBQVksRUFBQTtFQUpYO0lBUUQsdUJBQXNCO0lBQ3RCLGdCQUFlO0lBQ2Ysa0JBQWlCLEVBQUE7RUFWaEI7SUFnQkEscUNBQXdDLEVBQUE7RUFoQnhDO0lBeUJDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CLEVBQUE7SUEzQnBCO01BOEJFLGFBQVksRUFBQTtFQTlCZDtJQXNDZ0IsZUFBZSxFQUFBO0VBdEMvQjtJQThDQSxrQkFBaUI7SUFDakIsZUFBZSxFQUFBO0VBL0NmO0lBbURBLGVBQWUsRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnRcclxue1xyXG4gICAgLmxvZ2luLXdyYXBwZXJcclxuXHR7XHJcblx0XHRbZm9ybS1ncm91cF1cclxuXHRcdHsgICAgXHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHRcdGxhYmVsIFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDlweDtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRwYWRkaW5nOiAwcHggMHB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjMDAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlvbi1pdGVtXHJcblx0XHRcdHtcclxuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDE4cHg7XHJcblx0XHRcdFx0LS1taW4taGVpZ2h0OiA0MHB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHQtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLXRvcDogMHB4O1x0XHRcdFx0XHJcblx0XHRcdFx0aW9uLWxhYmVsXHJcblx0XHRcdFx0eyAgICAgXHJcblx0XHRcdFx0ICAgIG1hcmdpbjowcHg7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0aW9uLWljb25cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlvbi1pbnB1dFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHQgICAgY29sb3I6IzVkNWQ1ZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdH1cclxuICAgICAgICAuY2hlY2tib3hcclxuICAgICAgICB7XHJcblx0XHQgICAgLmZvcm0tY2hlY2tcclxuXHRcdFx0e1xyXG5cdFx0XHQgICAgcGFkZGluZy1sZWZ0OjBweDtcclxuXHRcdFx0ICAgIGlvbi1pdGVtXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcblx0XHRcdFx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHRcdFx0ICAgIC0tbWluLWhlaWdodDogMjRweDtcdFxyXG5cdFx0XHRcdFx0LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICM0NDQ7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHR9XHRcdFxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1jaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwcHggNnB4IDBweCAwcHg7XHJcblx0XHRcdFx0XHRcdC0tc2l6ZTogMTNweDtcdFxyXG5cdFx0XHRcdFx0XHQtLWJvcmRlci13aWR0aDogMXB4O1x0XHJcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG4gICAgICAgIC5kZXRhaWxzXHJcbiAgICAgICAge1xyXG5cdFx0ICAgIFttbmhlYWQtc2VjXVxyXG5cdFx0XHR7XHJcblx0XHRcdCAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0XHR6LWluZGV4OjE7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTo4cHg7XHJcblx0XHRcdFx0JjphZnRlclxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHQgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0XHRjb250ZW50OlwiXCI7XHJcblx0XHRcdFx0XHRib3R0b206MHB4O1xyXG5cdFx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0XHR3aWR0aDo3MHB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OjNweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG5cdFx0XHRcdFx0ei1pbmRleDotMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW1nIFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwcHggYXV0byAyMHB4O1xyXG5cdFx0XHRcdFx0bWF4LXdpZHRoOiAxODBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cCBcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzcHg7XHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH1cdFx0XHJcblx0fVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgaW9uLWNvbnRlbnRcclxuXHR7XHJcblx0XHQubG9naW4td3JhcHBlclxyXG5cdFx0e1xyXG5cdFx0ICAgIC5kZXRhaWxzXHJcblx0XHRcdHtcclxuXHRcdFx0XHRbbW5oZWFkLXNlY11cclxuXHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0aW1nXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBpb24tY29udGVudFxyXG5cdHtcclxuXHRcdC5tb2JpbGUtbm9uZVxyXG5cdFx0e1xyXG5cdFx0XHRkaXNwbGF5Om5vbmU7XHJcblx0XHR9XHJcblx0XHQubG9naW4tYm94XHJcblx0XHR7XHJcblx0XHRcdGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcblx0XHRcdGJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czowcHg7XHJcblx0XHR9XHJcblx0XHQubG9naW4td3JhcHBlclxyXG5cdFx0e1xyXG5cdFx0XHQmOmJlZm9yZSBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1ICwgMjU1ICwgMjU1ICwgMC45Nyk7XHJcblx0XHRcdH1cdFxyXG5cdFx0fVxyXG5cdFx0LmxvZ2luLXdyYXBwZXJcclxuXHRcdHtcclxuXHRcdFx0LmRldGFpbHNcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFttbmhlYWQtc2VjXVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMHB4O1x0XHRcdFxyXG5cdFx0XHRcdFx0JjphZnRlciBcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTpub25lO1xyXG5cdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0fVx0XHJcblx0XHRcdH1cclxuXHRcdFx0W2Zvcm0tZ3JvdXBdXHJcblx0XHRcdHtcclxuXHRcdFx0ICAgIGxhYmVsXHJcblx0XHRcdFx0e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmxvZ2luLWlubmVyLWZvcm0gXHJcblx0XHR7XHJcblx0XHRcdHBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRoMyBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0fVx0XHJcblx0fVx0XHJcbn0iXX0= */"

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
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");









var LoginPage = /** @class */ (function () {
    function LoginPage(toastController, userService, loadingController, router, events, socialAuthService, fb, googlePlus) {
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
    LoginPage.prototype.ionViewDidEnter = function () {
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
                _this.presentToast('Login successfully!', 'success');
                var userId = _this.userService.encryptData(result.data.id, _this.ENC_SALT);
                localStorage.setItem('sin_auth_token', userId);
                localStorage.setItem('sin_auth_user_name', result.data.name + ' ' + result.data.last_name);
                localStorage.setItem('sin_auth_user_image', result.data.profile_picture);
                _this.events.publish('user_logged_in:true', result.data);
                _this.userService.postData({ 'guest_user_id': localStorage.getItem('guestUserId'), 'real_user_id': result.data.id }, 'replace_guestUser_to_realUser').subscribe(function (result) {
                    _this.router.navigate(['/home']);
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
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID;
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
                    _this.router.navigate(['/home']);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__["Facebook"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map