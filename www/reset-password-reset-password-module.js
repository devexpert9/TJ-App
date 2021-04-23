(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password-reset-password-module"],{

/***/ "./src/app/reset-password/reset-password.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.module.ts ***!
  \*********************************************************/
/*! exports provided: ResetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password.page */ "./src/app/reset-password/reset-password.page.ts");







var routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]
    }
];
var ResetPasswordPageModule = /** @class */ (function () {
    function ResetPasswordPageModule() {
    }
    ResetPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]]
        })
    ], ResetPasswordPageModule);
    return ResetPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.page.html":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\t<div class=\"user-login-main\">\t\n\t\t<div class=\"container-fluid px-0\">\n\t\t\t<div class=\"row no-gutters min-vh-100\">\n\t\t\t\t<div class=\"col-md-6 col-lg-5 col-xl-4 d-flex flex-column bg-light  user-login-left shadow-lg order-2 order-md-1\">\n\t\t\t\t\t<div class=\"user-login-inner\">\n\t\t\t\t\t\t<div class=\"user-login-logo mb-4\"> \n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t    <img src=\"assets/img/user-logo.png\" class=\"logo\" alt=\"logo\">\n\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t\t<h2 class=\"mt-4 forgot-title\">Create new password</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-border\">\n\t\t\t\t\t\t\t<h4 class=\"text-center mb-3 titlecontent\">We'll ask for this password whenever you sign in.</h4>\n\n\t\t\t\t\t\t\t<div form-group>\n                               <ion-label  class=\"ion-hide-md-down\" text-left>New password</ion-label>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<ion-item new-input>\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"mail\" class=\"ion-hide-lg-up\"></ion-icon><ion-input  type=\"password\" placeholder=\"New password\" [(ngModel)]=\"npassword\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div form-group>\n                               <ion-label  class=\"ion-hide-md-down\" text-left>Password again</ion-label>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<ion-item new-input>\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"mail\" class=\"ion-hide-lg-up\"></ion-icon><ion-input  type=\"password\" placeholder=\"Confirm password\" [(ngModel)]=\"cpassword\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\t\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<ion-button  expand=\"full\" color=\"darkred\" (click)=\"updatePassword(npassword, cpassword)\" style=\"position:initial;height: 39px;width:90%;margin: 0 auto; margin-bottom:1.5rem!important;\">\n\t\t\t\t\t\t\t\tSet the password & Login\n\t\t\t\t\t\t\t</ion-button>\n\n\n\t\t\t\t\t\t\t<p class=\"register-here-btn\">Return to<a routerLink=\"/forgotpassword\" href=\"javascript:void(0)\"> Forgot Password Page</a></p>\n\t\t\t\t\t\t</div>\t\t\t  \t\t\t  \n\t\t\t\t\t</div> \n\t\t\t\t</div>\t\t\t\t\n\t\t\t\t<div mobile-none class=\"col-md-6 col-lg-7 col-xl-8 order-1 order-md-2\">\n\t\t\t\t\t<div class=\"user-hero-wrap d-flex align-items-center h-100\">\n\t\t\t\t\t\t<div class=\"user-hero-bg user-hero-bg-scroll\"></div>\n\t\t\t\t\t\t\t<!--div class=\"user-login-hero-content mx-auto w-100 h-100 d-flex flex-column\">\n\t\t\t\t\t\t\t\t<div class=\"row no-gutters my-auto py-5\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-10 col-lg-9 mx-auto text-center\"> \t \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div-->\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/reset-password/reset-password.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .user-login-main [form-group] {\n  margin-bottom: 20px; }\n  ion-content .user-login-main [form-group] ion-item {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    border-radius: 0px;\n    --padding-start: 0px;\n    --background:transparent;\n    --inner-padding-end: 0px;\n    --min-height: 52px;\n    font-size: 14px;\n    --padding-bottom: 0px;\n    --padding-top: 0px; }\n  ion-content .user-login-main [form-group] ion-item ion-input {\n      color: #000;\n      --placeholder-opacity: 0.7; }\n  @media (max-width: 767px) {\n  ion-content .user-login-main .user-login-left {\n    position: relative;\n    z-index: 1;\n    box-shadow: none; }\n    ion-content .user-login-main .user-login-left:before {\n      position: absolute;\n      content: \"\";\n      width: 100%;\n      height: 100%;\n      background: url('login.jpg') no-repeat center center/cover;\n      opacity: 0.05;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: -1; }\n    ion-content .user-login-main .user-login-left .user-login-inner {\n      padding: 30px; }\n      ion-content .user-login-main .user-login-left .user-login-inner .user-login-logo {\n        margin-bottom: 5px !important; }\n        ion-content .user-login-main .user-login-left .user-login-inner .user-login-logo .forgot-title {\n          font-size: 20px;\n          margin-top: 15px !important; }\n      ion-content .user-login-main .user-login-left .user-login-inner .titlecontent {\n        font-size: 14px;\n        line-height: 24px;\n        color: #666; }\n  ion-content .user-login-main [mobile-none] {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBTUcsbUJBQW1CLEVBQUE7RUFOdEI7SUFTSSw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLG9CQUFnQjtJQUNoQix3QkFBYTtJQUNiLHdCQUFvQjtJQUNwQixrQkFBYTtJQUNiLGVBQWU7SUFDZixxQkFBaUI7SUFDakIsa0JBQWMsRUFBQTtFQWpCbEI7TUFvQlEsV0FBVTtNQUNWLDBCQUFzQixFQUFBO0VBTzlCO0VBQ0k7SUFNQSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFlLEVBQUE7SUFSZjtNQVdDLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsV0FBVztNQUNYLFlBQVk7TUFDWiwwREFBMkU7TUFDM0UsYUFBYTtNQUNiLE1BQU07TUFDTixPQUFPO01BQ1AsUUFBUTtNQUNSLFNBQVM7TUFDVCxXQUFVLEVBQUE7SUFyQlg7TUF5QkMsYUFBWSxFQUFBO01BekJiO1FBNEJLLDZCQUEyQixFQUFBO1FBNUJoQztVQStCTSxlQUFjO1VBQ2QsMkJBQXlCLEVBQUE7TUFoQy9CO1FBcUNFLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsV0FBVyxFQUFBO0VBdkNiO0lBNkNHLGFBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnRcbntcbiAgICAudXNlci1sb2dpbi1tYWluXG5cdHtcblx0XHRbZm9ybS1ncm91cF1cblx0XHR7ICAgIFxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0XHRcdGlvbi1pdGVtXG5cdFx0XHR7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAwcHg7XG5cdFx0XHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xuXHRcdFx0XHQtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG5cdFx0XHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblx0XHRcdFx0LS1taW4taGVpZ2h0OiA1MnB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdC0tcGFkZGluZy1ib3R0b206IDBweDtcblx0XHRcdFx0LS1wYWRkaW5nLXRvcDogMHB4O1x0XG5cdFx0XHRcdGlvbi1pbnB1dFxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgICBjb2xvcjojMDAwO1xuXHRcdFx0XHQgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjc7XHRcblx0XHRcdFx0fVxuXHRcdFx0fVx0XHRcdFxuXHRcdH1cdFxuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGlvbi1jb250ZW50XG5cdHtcblx0ICAgIC51c2VyLWxvZ2luLW1haW5cblx0XHR7XG5cdFx0ICAgIC51c2VyLWxvZ2luLWxlZnRcblx0XHRcdHtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0XHRib3gtc2hhZG93Om5vbmU7XG5cdFx0XHRcdCY6YmVmb3JlIFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9sb2dpbi5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3Zlcjtcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjA1O1xuXHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHR6LWluZGV4Oi0xO1xuXHRcdFx0XHR9XHRcdFx0XHRcblx0XHRcdFx0LnVzZXItbG9naW4taW5uZXJcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHBhZGRpbmc6MzBweDtcblx0XHRcdFx0XHQudXNlci1sb2dpbi1sb2dvXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgICBtYXJnaW4tYm90dG9tOjVweCFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0ICAgIC5mb3Jnb3QtdGl0bGVcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCAgICBmb250LXNpemU6MjBweDtcblx0XHRcdFx0XHRcdCAgICBtYXJnaW4tdG9wOjE1cHghaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQudGl0bGVjb250ZW50XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2NjtcdFx0XHRcdFx0ICAgIFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCAgICBbbW9iaWxlLW5vbmVdXG5cdFx0XHR7XG5cdFx0XHQgICAgZGlzcGxheTpub25lO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/reset-password/reset-password.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.ts ***!
  \*******************************************************/
/*! exports provided: ResetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function() { return ResetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(toastController, userService, loadingController, router, events) {
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
    ResetPasswordPage.prototype.ngOnInit = function () {
    };
    ResetPasswordPage.prototype.ionViewDidEnter = function () {
        if (this.loading != undefined) {
            this.stopLoading();
        }
    };
    ResetPasswordPage.prototype.updatePassword = function (npwd, cpwd) {
        var _this = this;
        if (this.errors.indexOf(npwd) >= 0) {
            this.presentToast('Please enter password.', 'danger');
            return false;
        }
        var passExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])(?!.*\s).{8,15}$/;
        if (!passExp.test(npwd)) {
            this.presentToast('Password should have min. 8 characters, One UpperCase & One Lowercase & one special character.', 'danger');
            return false;
        }
        if (npwd != cpwd) {
            this.presentToast('Password not matched.', 'danger');
            return false;
        }
        this.presentLoading();
        this.userService.postData({ password: npwd, email: this.email }, 'updatePassword').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.presentToast('Login successfully!', 'success');
                var userId = _this.userService.encryptData(result.data.id, _this.ENC_SALT);
                localStorage.setItem('sin_auth_token', userId);
                localStorage.setItem('sin_auth_user_name', result.data.name + ' ' + result.data.last_name);
                localStorage.setItem('sin_auth_user_image', result.data.profile_picture);
                _this.events.publish('user_logged_in:true', result.data);
                _this.router.navigate(['/home']);
            }
            else if (result.status == 2) {
                _this.presentToast('Your account is not active!', 'danger');
            }
            else {
                _this.presentToast('We\'re sorry. We weren\'t able to identify you given the information provided.', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Technical error,Please try after some time.', 'danger');
        });
    };
    ResetPasswordPage.prototype.stopLoading = function () {
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
    ResetPasswordPage.prototype.presentToast = function (message, color) {
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
    ResetPasswordPage.prototype.presentLoading = function () {
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
    ResetPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.page.html */ "./src/app/reset-password/reset-password.page.html"),
            styles: [__webpack_require__(/*! ./reset-password.page.scss */ "./src/app/reset-password/reset-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=reset-password-reset-password-module.js.map