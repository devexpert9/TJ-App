(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassword-forgotpassword-module"],{

/***/ "./src/app/forgotpassword/forgotpassword.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
  \*********************************************************/
/*! exports provided: ForgotpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/forgotpassword/forgotpassword.page.ts");







var routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordPage"]
    }
];
var ForgotpasswordPageModule = /** @class */ (function () {
    function ForgotpasswordPageModule() {
    }
    ForgotpasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordPage"]]
        })
    ], ForgotpasswordPageModule);
    return ForgotpasswordPageModule;
}());



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.html":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\t<div class=\"user-login-main\">\t\n\t\t<div class=\"container-fluid px-0\">\n\t\t\t<div class=\"row no-gutters min-vh-100\">\n\t\t\t\t<div class=\"col-md-6 col-lg-5 col-xl-4 d-flex flex-column bg-light  user-login-left shadow-lg order-2 order-md-1\">\n\t\t\t\t\t<div class=\"user-login-inner\">\n\t\t\t\t\t\t<div class=\"user-login-logo mb-4\"> \n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t    <img src=\"assets/img/user-logo.png\" class=\"logo\" alt=\"logo\">\n\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t\t<h2 class=\"mt-4 forgot-title\">Forgot password?</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-border\">\n\t\t\t\t\t\t\t<h4 class=\"text-center mb-3 titlecontent\">Enter the email address associated with your account.</h4>\n\t\t\t\t\t\t\t<div form-group>\t\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-input  type=\"email\" placeholder=\"Email Address\" [(ngModel)]=\"email\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!--div class=\"form-group\">\t\t\t\t\t\t\n\t\t\t\t\t\t\t    <input type=\"email\" class=\"form-control\" id=\"emailAddress\" required=\"\" placeholder=\"Enter Email or Mobile Number\">\n\t\t\t\t\t\t\t</div-->\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-block text-uppercase my-4\" type=\"submit\" (click)=\"sendEmail(email)\">Continue</button>\n\t\t\t\t\t\t\t<p class=\"register-here-btn\">Return to<a routerLink=\"/login\" href=\"javascript:void(0)\"> Login</a></p>\n\t\t\t\t\t\t</div>\t\t\t  \t\t\t  \n\t\t\t\t\t</div> \n\t\t\t\t</div>\t\t\t\t\n\t\t\t\t<div mobile-none class=\"col-md-6 col-lg-7 col-xl-8 order-1 order-md-2\">\n\t\t\t\t\t<div class=\"user-hero-wrap d-flex align-items-center h-100\">\n\t\t\t\t\t\t<div class=\"user-hero-bg user-hero-bg-scroll\"></div>\n\t\t\t\t\t\t\t<!--div class=\"user-login-hero-content mx-auto w-100 h-100 d-flex flex-column\">\n\t\t\t\t\t\t\t\t<div class=\"row no-gutters my-auto py-5\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-10 col-lg-9 mx-auto text-center\"> \t \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div-->\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .user-login-main [form-group] {\n  margin-bottom: 20px; }\n  ion-content .user-login-main [form-group] ion-item {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    border-radius: 0px;\n    --padding-start: 0px;\n    --background:transparent;\n    --inner-padding-end: 0px;\n    --min-height: 52px;\n    font-size: 14px;\n    --padding-bottom: 0px;\n    --padding-top: 0px; }\n  ion-content .user-login-main [form-group] ion-item ion-input {\n      color: #000;\n      --placeholder-opacity: 0.7; }\n  @media (max-width: 767px) {\n  ion-content .user-login-main .user-login-left {\n    position: relative;\n    z-index: 1;\n    box-shadow: none; }\n    ion-content .user-login-main .user-login-left:before {\n      position: absolute;\n      content: \"\";\n      width: 100%;\n      height: 100%;\n      background: url('login.jpg') no-repeat center center/cover;\n      opacity: 0.05;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: -1; }\n    ion-content .user-login-main .user-login-left .user-login-inner {\n      padding: 30px; }\n      ion-content .user-login-main .user-login-left .user-login-inner .user-login-logo {\n        margin-bottom: 5px !important; }\n        ion-content .user-login-main .user-login-left .user-login-inner .user-login-logo .forgot-title {\n          font-size: 20px;\n          margin-top: 15px !important; }\n      ion-content .user-login-main .user-login-left .user-login-inner .titlecontent {\n        font-size: 14px;\n        line-height: 24px;\n        color: #666; }\n  ion-content .user-login-main [mobile-none] {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBTUcsbUJBQW1CLEVBQUE7RUFOdEI7SUFTSSw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLG9CQUFnQjtJQUNoQix3QkFBYTtJQUNiLHdCQUFvQjtJQUNwQixrQkFBYTtJQUNiLGVBQWU7SUFDZixxQkFBaUI7SUFDakIsa0JBQWMsRUFBQTtFQWpCbEI7TUFvQlEsV0FBVTtNQUNWLDBCQUFzQixFQUFBO0VBTzlCO0VBQ0k7SUFNQSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFlLEVBQUE7SUFSZjtNQVdDLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsV0FBVztNQUNYLFlBQVk7TUFDWiwwREFBMkU7TUFDM0UsYUFBYTtNQUNiLE1BQU07TUFDTixPQUFPO01BQ1AsUUFBUTtNQUNSLFNBQVM7TUFDVCxXQUFVLEVBQUE7SUFyQlg7TUF5QkMsYUFBWSxFQUFBO01BekJiO1FBNEJLLDZCQUEyQixFQUFBO1FBNUJoQztVQStCTSxlQUFjO1VBQ2QsMkJBQXlCLEVBQUE7TUFoQy9CO1FBcUNFLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsV0FBVyxFQUFBO0VBdkNiO0lBNkNHLGFBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnRcclxue1xyXG4gICAgLnVzZXItbG9naW4tbWFpblxyXG5cdHtcclxuXHRcdFtmb3JtLWdyb3VwXVxyXG5cdFx0eyAgICBcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRcdFx0aW9uLWl0ZW1cclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDBweDtcclxuXHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuXHRcdFx0XHQtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0XHRcdC0tbWluLWhlaWdodDogNTJweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG5cdFx0XHRcdC0tcGFkZGluZy10b3A6IDBweDtcdFxyXG5cdFx0XHRcdGlvbi1pbnB1dFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHQgICAgY29sb3I6IzAwMDtcclxuXHRcdFx0XHQgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjc7XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdH1cdFxyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBpb24tY29udGVudFxyXG5cdHtcclxuXHQgICAgLnVzZXItbG9naW4tbWFpblxyXG5cdFx0e1xyXG5cdFx0ICAgIC51c2VyLWxvZ2luLWxlZnRcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHR6LWluZGV4OiAxO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHQmOmJlZm9yZSBcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvbG9naW4uanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XHJcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjA1O1xyXG5cdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRcdFx0ei1pbmRleDotMTtcclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XHQudXNlci1sb2dpbi1pbm5lclxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHBhZGRpbmc6MzBweDtcclxuXHRcdFx0XHRcdC51c2VyLWxvZ2luLWxvZ29cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdCAgICBtYXJnaW4tYm90dG9tOjVweCFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHQgICAgLmZvcmdvdC10aXRsZVxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCAgICBmb250LXNpemU6MjBweDtcclxuXHRcdFx0XHRcdFx0ICAgIG1hcmdpbi10b3A6MTVweCFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC50aXRsZWNvbnRlbnRcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjRweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICM2NjY7XHRcdFx0XHRcdCAgICBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdCAgICBbbW9iaWxlLW5vbmVdXHJcblx0XHRcdHtcclxuXHRcdFx0ICAgIGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
  \*******************************************************/
/*! exports provided: ForgotpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function() { return ForgotpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(toastController, userService, loadingController, router, events) {
        this.toastController = toastController;
        this.userService = userService;
        this.loadingController = loadingController;
        this.router = router;
        this.events = events;
        this.errors = ['', null, undefined];
        this.ENC_SALT = _config__WEBPACK_IMPORTED_MODULE_4__["config"].ENC_SALT;
        this.isBrowser = localStorage.getItem('isBrowser');
    }
    ForgotpasswordPage.prototype.ngOnInit = function () {
    };
    ForgotpasswordPage.prototype.ionViewDidEnter = function () {
        if (this.loading != undefined) {
            this.stopLoading();
        }
    };
    ForgotpasswordPage.prototype.sendEmail = function (email) {
        var _this = this;
        if (this.errors.indexOf(email) >= 0) {
            this.presentToast('Please enter your email address.', 'danger');
            return false;
        }
        this.presentLoading();
        this.userService.postData({ email: email }, 'forgotPassword').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                //this.presentToast('Password reset link has been sent to your email address!','success');
                localStorage.setItem('email', email);
                _this.router.navigate(['/authentication-otp']);
            }
            else {
                _this.presentToast('We\'re sorry. We weren\'t able to identify the provided email.', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Technical error,Please try after some time.', 'danger');
        });
    };
    ForgotpasswordPage.prototype.stopLoading = function () {
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
    ForgotpasswordPage.prototype.presentToast = function (message, color) {
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
    ForgotpasswordPage.prototype.presentLoading = function () {
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
    ForgotpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! ./forgotpassword.page.html */ "./src/app/forgotpassword/forgotpassword.page.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.page.scss */ "./src/app/forgotpassword/forgotpassword.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgotpassword-forgotpassword-module.js.map