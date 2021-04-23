(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacy-policy-privacy-policy-module"],{

/***/ "./src/app/privacy-policy/privacy-policy.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.module.ts ***!
  \*********************************************************/
/*! exports provided: PrivacyPolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageModule", function() { return PrivacyPolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy-policy.page */ "./src/app/privacy-policy/privacy-policy.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");









var routes = [
    {
        path: '',
        component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]
    }
];
var PrivacyPolicyPageModule = /** @class */ (function () {
    function PrivacyPolicyPageModule() {
    }
    PrivacyPolicyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_8__["HeaderPageModule"]
            ],
            declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]]
        })
    ], PrivacyPolicyPageModule);
    return PrivacyPolicyPageModule;
}());



/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.page.html":
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n\t\t<app-header ></app-header>\n\n<div   class=\"ion-padding\">\n<div header_height></div>\n<!-- Breadcrumb Start -->\n\n<div breadcrumb  class=\"ion-hide-md-down\">\t\t\n\t<div breadcrumb-inner>\n\t\t<ul list-inline list-unstyled style='margin:0 0 15px 0'>\n\t\t    <li style=\"float:left;margin:0 10px 0 0\">\n\t\t    \t<a routerLink=\"/blog\">Home</a></li>\n\t\t\t<li class=\"active\"> Privacy Policy</li>\n\t\t</ul>\n\t</div><!-- /.breadcrumb-inner -->\n</div>\n<!-- Breadcrumb Ends -->\n<!-- Privacy Section  Start -->\n\t\t<div privacy-page>\n\t\t   <ion-row>\n\t\t\t\t<ion-col terms-conditions size=\"12\" no-padding>\n\t\t\t\t   <div [innerHTML]=\"page\"></div>\n\t\t\t   </ion-col>\t\t\n\t\t\t</ion-row><!-- /.row -->\n\t\t</div>\n</div>\n<!-- Privacy Section  Ends -->\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey);\n  /* Privacy Start */\n  /* Privacy Ends */ }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0); } }\n  ion-content [privacy-page] {\n    background-color: var(--ion-color-white);\n    box-shadow: var(--ion-value-0) var(--ion-value-2) var(--ion-value-4) var(--ion-value-0) rgba(0, 0, 0, 0.08);\n    padding: var(--ion-padding-20);\n    overflow: hidden; }\n  ion-content [privacy-page] [heading-title] {\n      text-align: left;\n      padding: var(--ion-padding-0) var(--ion-padding-0) var(--ion-padding-15) var(--ion-padding-0);\n      font-weight: bold;\n      font-size: var(--ion-font-size-22);\n      border-bottom: 1px #e5e5e5 solid;\n      color: var(--ion-color-darkblack3);\n      margin-top: var(--ion-margin-0);\n      font-family: var(--ion-font-family-2); }\n  ion-content [privacy-page] h3 {\n      font-size: var(--ion-font-size-14);\n      text-transform: uppercase;\n      color: var(--ion-color-darkblack3);\n      font-family: var(--ion-font-family-2);\n      margin-bottom: var(--ion-margin-15);\n      font-weight: bold; }\n  @media only screen and (max-width: 991px) {\n        ion-content [privacy-page] h3 {\n          font-size: var(--ion-font-size-13);\n          margin-top: var(--ion-margin-0);\n          margin-bottom: var(--ion-margin-10); } }\n  ion-content [privacy-page] ol {\n      padding-left: var(--ion-padding-22); }\n  @media only screen and (max-width: 991px) {\n        ion-content [privacy-page] ol {\n          padding-left: var(--ion-padding-15); } }\n  ion-content [privacy-page] ol li {\n        font-style: normal;\n        font-size: var(--ion-font-size-13);\n        color: var(--ion-color-darkgrey);\n        padding-bottom: var(--ion-padding-20);\n        font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n          ion-content [privacy-page] ol li {\n            padding-bottom: var(--ion-padding-10);\n            font-size: var(--ion-font-size-12); } }\n  ion-content [privacy-page] p {\n      font-style: normal;\n      font-size: var(--ion-font-size-13);\n      color: var(--ion-color-darkgrey);\n      line-height: 22px;\n      padding-bottom: var(--ion-padding-20);\n      font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n        ion-content [privacy-page] p {\n          padding-bottom: var(--ion-padding-10);\n          font-size: var(--ion-font-size-12); } }\n  ion-content [privacy-page] p a {\n        color: var(--ion-color-darkred); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBRUEsa0NBQWE7RUFLZCxrQkFBQTtFQWtFQSxpQkFBQSxFQUFrQjtFQXRFbEI7SUFIQztNQUtHLGtDQUFjLEVBQUEsRUFxRWpCO0VBMUVBO0lBVUcsd0NBQXdDO0lBQ3hDLDJHQUF1RztJQUN2Ryw4QkFBOEI7SUFDOUIsZ0JBQWdCLEVBQUE7RUFibkI7TUFlRyxnQkFBZ0I7TUFDaEIsNkZBQTZGO01BQzdGLGlCQUFpQjtNQUNqQixrQ0FBa0M7TUFDbEMsZ0NBQWdDO01BQ2hDLGtDQUFrQztNQUNsQywrQkFBOEI7TUFDOUIscUNBQW9DLEVBQUE7RUF0QnZDO01BMEJJLGtDQUFrQztNQUNuQyx5QkFBeUI7TUFDekIsa0NBQWtDO01BQ2xDLHFDQUFvQztNQUNwQyxtQ0FBbUM7TUFDbkMsaUJBQWlCLEVBQUE7RUFDckI7UUFoQ0M7VUFpQ0Msa0NBQWtDO1VBQ25DLCtCQUErQjtVQUMvQixtQ0FBbUMsRUFBQSxFQUVuQztFQXJDQTtNQXVDRyxtQ0FBbUMsRUFBQTtFQUN2QztRQXhDQztVQTBDQyxtQ0FBbUMsRUFBQSxFQWFwQztFQXZEQTtRQTZDRyxrQkFBa0I7UUFDbEIsa0NBQWtDO1FBQ2xDLGdDQUFnQztRQUNoQyxxQ0FBcUM7UUFDckMscUNBQW9DLEVBQUE7RUFDeEM7VUFsREM7WUFtREMscUNBQXFDO1lBQ3JDLGtDQUFrQyxFQUFBLEVBRW5DO0VBdERBO01BeURHLGtCQUFrQjtNQUNsQixrQ0FBa0M7TUFDbEMsZ0NBQWdDO01BQ2hDLGlCQUFpQjtNQUNqQixxQ0FBcUM7TUFDckMscUNBQW9DLEVBQUE7RUFDeEM7UUEvREM7VUFnRUEscUNBQXFDO1VBQ3BDLGtDQUFrQyxFQUFBLEVBTW5DO0VBdkVBO1FBcUVFLCtCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGlvbi1jb250ZW50XHJcbnsgIFxyXG5cdC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZ3JleSk7XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTFweClcclxue1xyXG4gICAgLS1wYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZy0wKTtcclxufVxyXG4vKiBQcml2YWN5IFN0YXJ0ICovXHJcbltwcml2YWN5LXBhZ2VdXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1pb24tdmFsdWUtMCkgdmFyKC0taW9uLXZhbHVlLTIpIHZhcigtLWlvbi12YWx1ZS00KSB2YXIoLS1pb24tdmFsdWUtMCkgcmdiYSgwLDAsMCwuMDgpO1xyXG4gICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMjApO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuW2hlYWRpbmctdGl0bGVdIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0yMik7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggI2U1ZTVlNSBzb2xpZDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrMyk7XHJcbiAgICBtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcbiAgICBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcbn1cclxuaDNcclxue1xyXG4gICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcclxuICAgIGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxueyBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG4gbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApO1xyXG59XHJcbn1cclxub2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZy0yMik7XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxue1xyXG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmctMTUpO1xyXG59XHJcbiBsaSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JleSk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctMjApO1xyXG4gICAgZm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcbnsgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG59XHJcbn1cclxufVxyXG5wIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmV5KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcclxuICAgIGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG57cGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG59XHJcbmFcclxue1xyXG4gICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya3JlZClcclxufVxyXG59XHJcbn1cclxuLyogUHJpdmFjeSBFbmRzICovXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.ts ***!
  \*******************************************************/
/*! exports provided: PrivacyPolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPage", function() { return PrivacyPolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var PrivacyPolicyPage = /** @class */ (function () {
    function PrivacyPolicyPage(userService, loadingController) {
        this.userService = userService;
        this.loadingController = loadingController;
    }
    PrivacyPolicyPage.prototype.ngOnInit = function () {
    };
    PrivacyPolicyPage.prototype.ionViewDidEnter = function () {
        this.getPrivacyPolicy();
    };
    PrivacyPolicyPage.prototype.getPrivacyPolicy = function () {
        var _this = this;
        this.presentLoading();
        this.userService.postData({}, 'privacyPolicy').subscribe(function (result) {
            _this.page = atob(result.policy.privacy_content);
            _this.stopLoading();
        }, function (err) {
            _this.stopLoading();
            _this.page = [];
        });
    };
    PrivacyPolicyPage.prototype.presentLoading = function () {
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
    PrivacyPolicyPage.prototype.stopLoading = function () {
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
    PrivacyPolicyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__(/*! ./privacy-policy.page.html */ "./src/app/privacy-policy/privacy-policy.page.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.page.scss */ "./src/app/privacy-policy/privacy-policy.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], PrivacyPolicyPage);
    return PrivacyPolicyPage;
}());



/***/ })

}]);
//# sourceMappingURL=privacy-policy-privacy-policy-module.js.map