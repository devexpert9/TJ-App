(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-otp-authentication-otp-module"],{

/***/ "./src/app/authentication-otp/authentication-otp.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentication-otp/authentication-otp.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationOtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationOtpPageModule", function() { return AuthenticationOtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _authentication_otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication-otp.page */ "./src/app/authentication-otp/authentication-otp.page.ts");







var routes = [
    {
        path: '',
        component: _authentication_otp_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationOtpPage"]
    }
];
var AuthenticationOtpPageModule = /** @class */ (function () {
    function AuthenticationOtpPageModule() {
    }
    AuthenticationOtpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_authentication_otp_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationOtpPage"]]
        })
    ], AuthenticationOtpPageModule);
    return AuthenticationOtpPageModule;
}());



/***/ }),

/***/ "./src/app/authentication-otp/authentication-otp.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/authentication-otp/authentication-otp.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\t<div class=\"user-login-main\">\t\n\t\t<div class=\"container-fluid px-0\">\n\t\t\t<div class=\"row no-gutters min-vh-100\">\n\t\t\t\t<div class=\"col-md-6 col-lg-5 col-xl-4 d-flex flex-column bg-light  user-login-left shadow-lg order-2 order-md-1\">\n\t\t\t\t\t<div class=\"user-login-inner\">\n\t\t\t\t\t\t<div class=\"user-login-logo mb-4\"> \n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t    <img src=\"assets/img/user-logo.png\" class=\"logo\" alt=\"logo\">\n\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t\t<h2 class=\"mt-4 forgot-title\">Authentication required</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-border\">\n\t\t\t\t\t\t\t<h4 class=\"text-center mb-3 titlecontent\">For your security, we've sent an OTP to provided email. Please enter it below to complete the verification.</h4>\n\t\t\t\t\t\t\t<div form-group>\t\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"mail\" class=\"ion-hide-lg-up\"></ion-icon><ion-input  type=\"number\" placeholder=\"Enter OTP\" [(ngModel)]=\"otp\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<ion-button  expand=\"full\" color=\"darkred\" (click)=\"validateOTP(otp)\" style=\"position:initial;height: 39px;width: 50%;margin: 0 auto; margin-bottom:1.5rem!important;\">Continue</ion-button>\n\n\t\t\t\t\t\t\t<p class=\"register-here-btn\">Return to<a routerLink=\"/forgotpassword\" href=\"javascript:void(0)\"> Forgot Password Page</a></p>\n\t\t\t\t\t\t</div>\t\t\t  \t\t\t  \n\t\t\t\t\t</div> \n\t\t\t\t</div>\t\t\t\t\n\t\t\t\t<div mobile-none class=\"col-md-6 col-lg-7 col-xl-8 order-1 order-md-2\">\n\t\t\t\t\t<div class=\"user-hero-wrap d-flex align-items-center h-100\">\n\t\t\t\t\t\t<div class=\"user-hero-bg user-hero-bg-scroll\"></div>\n\t\t\t\t\t\t\t<!--div class=\"user-login-hero-content mx-auto w-100 h-100 d-flex flex-column\">\n\t\t\t\t\t\t\t\t<div class=\"row no-gutters my-auto py-5\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-10 col-lg-9 mx-auto text-center\"> \t \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div-->\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/authentication-otp/authentication-otp.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/authentication-otp/authentication-otp.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .user-login-main [form-group] {\n  margin-bottom: 20px; }\n  ion-content .user-login-main [form-group] ion-item {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    border-radius: 0px;\n    --padding-start: 0px;\n    --background:transparent;\n    --inner-padding-end: 0px;\n    --min-height: 52px;\n    font-size: 14px;\n    --padding-bottom: 0px;\n    --padding-top: 0px; }\n  ion-content .user-login-main [form-group] ion-item ion-input {\n      color: #000;\n      --placeholder-opacity: 0.7; }\n  @media (max-width: 767px) {\n  ion-content .user-login-main .user-login-left {\n    position: relative;\n    z-index: 1;\n    box-shadow: none; }\n    ion-content .user-login-main .user-login-left:before {\n      position: absolute;\n      content: \"\";\n      width: 100%;\n      height: 100%;\n      background: url('login.jpg') no-repeat center center/cover;\n      opacity: 0.05;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: -1; }\n    ion-content .user-login-main .user-login-left .user-login-inner {\n      padding: 30px; }\n      ion-content .user-login-main .user-login-left .user-login-inner .user-login-logo {\n        margin-bottom: 5px !important; }\n        ion-content .user-login-main .user-login-left .user-login-inner .user-login-logo .forgot-title {\n          font-size: 20px;\n          margin-top: 15px !important; }\n      ion-content .user-login-main .user-login-left .user-login-inner .titlecontent {\n        font-size: 14px;\n        line-height: 24px;\n        color: #666; }\n  ion-content .user-login-main [mobile-none] {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvYXV0aGVudGljYXRpb24tb3RwL2F1dGhlbnRpY2F0aW9uLW90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFNRyxtQkFBbUIsRUFBQTtFQU50QjtJQVNJLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsb0JBQWdCO0lBQ2hCLHdCQUFhO0lBQ2Isd0JBQW9CO0lBQ3BCLGtCQUFhO0lBQ2IsZUFBZTtJQUNmLHFCQUFpQjtJQUNqQixrQkFBYyxFQUFBO0VBakJsQjtNQW9CUSxXQUFVO01BQ1YsMEJBQXNCLEVBQUE7RUFPOUI7RUFDSTtJQU1BLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWUsRUFBQTtJQVJmO01BV0Msa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxXQUFXO01BQ1gsWUFBWTtNQUNaLDBEQUEyRTtNQUMzRSxhQUFhO01BQ2IsTUFBTTtNQUNOLE9BQU87TUFDUCxRQUFRO01BQ1IsU0FBUztNQUNULFdBQVUsRUFBQTtJQXJCWDtNQXlCQyxhQUFZLEVBQUE7TUF6QmI7UUE0QkssNkJBQTJCLEVBQUE7UUE1QmhDO1VBK0JNLGVBQWM7VUFDZCwyQkFBeUIsRUFBQTtNQWhDL0I7UUFxQ0UsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixXQUFXLEVBQUE7RUF2Q2I7SUE2Q0csYUFBWSxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi1vdHAvYXV0aGVudGljYXRpb24tb3RwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50XG57XG4gICAgLnVzZXItbG9naW4tbWFpblxuXHR7XG5cdFx0W2Zvcm0tZ3JvdXBdXG5cdFx0eyAgICBcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0XHRpb24taXRlbVxuXHRcdFx0e1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMHB4O1xuXHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcblx0XHRcdFx0LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuXHRcdFx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cdFx0XHRcdC0tbWluLWhlaWdodDogNTJweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHQtLXBhZGRpbmctYm90dG9tOiAwcHg7XG5cdFx0XHRcdC0tcGFkZGluZy10b3A6IDBweDtcdFxuXHRcdFx0XHRpb24taW5wdXRcblx0XHRcdFx0e1xuXHRcdFx0XHQgICAgY29sb3I6IzAwMDtcblx0XHRcdFx0ICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC43O1x0XG5cdFx0XHRcdH1cblx0XHRcdH1cdFx0XHRcblx0XHR9XHRcblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBpb24tY29udGVudFxuXHR7XG5cdCAgICAudXNlci1sb2dpbi1tYWluXG5cdFx0e1xuXHRcdCAgICAudXNlci1sb2dpbi1sZWZ0XG5cdFx0XHR7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0ei1pbmRleDogMTtcblx0XHRcdFx0Ym94LXNoYWRvdzpub25lO1xuXHRcdFx0XHQmOmJlZm9yZSBcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvbG9naW4uanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XG5cdFx0XHRcdFx0b3BhY2l0eTogMC4wNTtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0ei1pbmRleDotMTtcblx0XHRcdFx0fVx0XHRcdFx0XG5cdFx0XHRcdC51c2VyLWxvZ2luLWlubmVyXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwYWRkaW5nOjMwcHg7XG5cdFx0XHRcdFx0LnVzZXItbG9naW4tbG9nb1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgICAgbWFyZ2luLWJvdHRvbTo1cHghaW1wb3J0YW50O1xuXHRcdFx0XHRcdCAgICAuZm9yZ290LXRpdGxlXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQgICAgZm9udC1zaXplOjIwcHg7XG5cdFx0XHRcdFx0XHQgICAgbWFyZ2luLXRvcDoxNXB4IWltcG9ydGFudDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnRpdGxlY29udGVudFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICM2NjY7XHRcdFx0XHRcdCAgICBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQgICAgW21vYmlsZS1ub25lXVxuXHRcdFx0e1xuXHRcdFx0ICAgIGRpc3BsYXk6bm9uZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/authentication-otp/authentication-otp.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/authentication-otp/authentication-otp.page.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationOtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationOtpPage", function() { return AuthenticationOtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuthenticationOtpPage = /** @class */ (function () {
    function AuthenticationOtpPage(toastController, userService, loadingController, router, events) {
        this.toastController = toastController;
        this.userService = userService;
        this.loadingController = loadingController;
        this.router = router;
        this.events = events;
        this.errors = ['', null, undefined];
        this.ENC_SALT = _config__WEBPACK_IMPORTED_MODULE_4__["config"].ENC_SALT;
        this.isBrowser = localStorage.getItem('isBrowser');
        this.email = localStorage.getItem('email');
    }
    AuthenticationOtpPage.prototype.ngOnInit = function () {
    };
    AuthenticationOtpPage.prototype.resendOTP = function () {
        var _this = this;
        this.presentLoading();
        this.userService.postData({ email: this.email }, 'forgotPassword').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.presentToast('A new OTP has been sent to your email.', 'success');
            }
            else {
                _this.presentToast('Technical error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Technical error,Please try after some time.', 'danger');
        });
    };
    AuthenticationOtpPage.prototype.validateOTP = function (otp) {
        var _this = this;
        if (this.errors.indexOf(otp) >= 0) {
            this.presentToast('Please enter your otp sent over your email address.', 'danger');
            return false;
        }
        this.presentLoading();
        this.userService.postData({ otp: otp, email: this.email }, 'validateOtp').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                //this.presentToast('Password reset link has been sent to your email address!','success');
                _this.router.navigate(['/reset-password']);
            }
            else {
                _this.presentToast('Invalid code. Please check your code and try again.', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Technical error,Please try after some time.', 'danger');
        });
    };
    AuthenticationOtpPage.prototype.stopLoading = function () {
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
    AuthenticationOtpPage.prototype.presentToast = function (message, color) {
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
    AuthenticationOtpPage.prototype.presentLoading = function () {
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
    AuthenticationOtpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authentication-otp',
            template: __webpack_require__(/*! ./authentication-otp.page.html */ "./src/app/authentication-otp/authentication-otp.page.html"),
            styles: [__webpack_require__(/*! ./authentication-otp.page.scss */ "./src/app/authentication-otp/authentication-otp.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], AuthenticationOtpPage);
    return AuthenticationOtpPage;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-otp-authentication-otp-module.js.map