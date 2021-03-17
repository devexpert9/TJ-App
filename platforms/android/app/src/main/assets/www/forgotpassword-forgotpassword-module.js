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

module.exports = "ion-content .user-login-main [form-group] {\n  margin-bottom: 20px; }\n  ion-content .user-login-main [form-group] ion-item {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    border-radius: 0px;\n    --padding-start: 0px;\n    --background:transparent;\n    --inner-padding-end: 0px;\n    --min-height: 52px;\n    font-size: 14px;\n    --padding-bottom: 0px;\n    --padding-top: 0px; }\n  ion-content .user-login-main [form-group] ion-item ion-input {\n      color: #000;\n      --placeholder-opacity: 0.7; }\n  @media (max-width: 767px) {\n  ion-content .user-login-main .user-login-left {\n    position: relative;\n    z-index: 1;\n    box-shadow: none; }\n    ion-content .user-login-main .user-login-left:before {\n      position: absolute;\n      content: \"\";\n      width: 100%;\n      height: 100%;\n      background: url('login.jpg') no-repeat center center/cover;\n      opacity: 0.05;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: -1; }\n    ion-content .user-login-main .user-login-left .user-login-inner {\n      padding: 30px; }\n      ion-content .user-login-main .user-login-left .user-login-inner .user-login-logo {\n        margin-bottom: 5px !important; }\n        ion-content .user-login-main .user-login-left .user-login-inner .user-login-logo .forgot-title {\n          font-size: 20px;\n          margin-top: 15px !important; }\n      ion-content .user-login-main .user-login-left .user-login-inner .titlecontent {\n        font-size: 14px;\n        line-height: 24px;\n        color: #666; }\n  ion-content .user-login-main [mobile-none] {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFNRyxtQkFBbUIsRUFBQTtFQU50QjtJQVNJLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsb0JBQWdCO0lBQ2hCLHdCQUFhO0lBQ2Isd0JBQW9CO0lBQ3BCLGtCQUFhO0lBQ2IsZUFBZTtJQUNmLHFCQUFpQjtJQUNqQixrQkFBYyxFQUFBO0VBakJsQjtNQW9CUSxXQUFVO01BQ1YsMEJBQXNCLEVBQUE7RUFPOUI7RUFDSTtJQU1BLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWUsRUFBQTtJQVJmO01BV0Msa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxXQUFXO01BQ1gsWUFBWTtNQUNaLDBEQUEyRTtNQUMzRSxhQUFhO01BQ2IsTUFBTTtNQUNOLE9BQU87TUFDUCxRQUFRO01BQ1IsU0FBUztNQUNULFdBQVUsRUFBQTtJQXJCWDtNQXlCQyxhQUFZLEVBQUE7TUF6QmI7UUE0QkssNkJBQTJCLEVBQUE7UUE1QmhDO1VBK0JNLGVBQWM7VUFDZCwyQkFBeUIsRUFBQTtNQWhDL0I7UUFxQ0UsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixXQUFXLEVBQUE7RUF2Q2I7SUE2Q0csYUFBWSxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudFxyXG57XHJcbiAgICAudXNlci1sb2dpbi1tYWluXHJcblx0e1xyXG5cdFx0W2Zvcm0tZ3JvdXBdXHJcblx0XHR7ICAgIFxyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdFx0XHRpb24taXRlbVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMHB4O1xyXG5cdFx0XHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG5cdFx0XHRcdC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuXHRcdFx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHRcdFx0LS1taW4taGVpZ2h0OiA1MnB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHQtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLXRvcDogMHB4O1x0XHJcblx0XHRcdFx0aW9uLWlucHV0XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdCAgICBjb2xvcjojMDAwO1xyXG5cdFx0XHRcdCAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNztcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0fVx0XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGlvbi1jb250ZW50XHJcblx0e1xyXG5cdCAgICAudXNlci1sb2dpbi1tYWluXHJcblx0XHR7XHJcblx0XHQgICAgLnVzZXItbG9naW4tbGVmdFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzpub25lO1xyXG5cdFx0XHRcdCY6YmVmb3JlIFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9sb2dpbi5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxuXHRcdFx0XHRcdG9wYWNpdHk6IDAuMDU7XHJcblx0XHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdFx0XHRib3R0b206IDA7XHJcblx0XHRcdFx0XHR6LWluZGV4Oi0xO1xyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRcdC51c2VyLWxvZ2luLWlubmVyXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cGFkZGluZzozMHB4O1xyXG5cdFx0XHRcdFx0LnVzZXItbG9naW4tbG9nb1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ICAgIG1hcmdpbi1ib3R0b206NXB4IWltcG9ydGFudDtcclxuXHRcdFx0XHRcdCAgICAuZm9yZ290LXRpdGxlXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0ICAgIGZvbnQtc2l6ZToyMHB4O1xyXG5cdFx0XHRcdFx0XHQgICAgbWFyZ2luLXRvcDoxNXB4IWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnRpdGxlY29udGVudFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2NjtcdFx0XHRcdFx0ICAgIFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0ICAgIFttb2JpbGUtbm9uZV1cclxuXHRcdFx0e1xyXG5cdFx0XHQgICAgZGlzcGxheTpub25lO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59Il19 */"

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
                _this.presentToast('We\'re sorry. We weren\'t able to identify you given the information provided.', 'danger');
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