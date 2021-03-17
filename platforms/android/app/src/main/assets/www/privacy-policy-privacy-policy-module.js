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
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
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

module.exports = "<!-- <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"darkred\"  text-uppercase>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n       Privacy Policy\n    </ion-title>\n  <ion-buttons slot=\"end\" > \n          <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n\t     <ion-buttons slot=\"end\">\n          <ion-icon name=\"pin\"></ion-icon>\n    </ion-buttons>\n<ion-buttons slot=\"end\" > \n\t<ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\t\n\t </ion-buttons>\n  </ion-toolbar>\n      <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n\t              <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n\t              <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n\t              <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n\t              <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t   </div>\n</ion-header> --> \n<ion-content>\n<div   class=\"ion-padding\">\n<div header_height></div>\n<!-- Breadcrumb Start -->\n\n<div breadcrumb  class=\"ion-hide-md-down\">\t\t\n\t<div breadcrumb-inner>\n\t\t<ul list-inline list-unstyled>\n\t\t\t<li><a routerLink=\"/home\">Home</a></li>\n\t\t\t<li class=\"active\"> Privacy Policy</li>\n\t\t</ul>\n\t</div><!-- /.breadcrumb-inner -->\n</div>\n<!-- Breadcrumb Ends -->\n<!-- Privacy Section  Start -->\n\t\t<div privacy-page>\n\t\t   <ion-row>\n\t\t\t\t<ion-col terms-conditions size=\"12\" no-padding>\n\t\t\t\t   <div [innerHTML]=\"page\"></div>\n\t\t\t   </ion-col>\t\t\n\t\t\t</ion-row><!-- /.row -->\n\t\t</div>\n</div>\n<!-- Privacy Section  Ends -->\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey);\n  /* Privacy Start */\n  /* Privacy Ends */ }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0); } }\n  ion-content [privacy-page] {\n    background-color: var(--ion-color-white);\n    box-shadow: var(--ion-value-0) var(--ion-value-2) var(--ion-value-4) var(--ion-value-0) rgba(0, 0, 0, 0.08);\n    padding: var(--ion-padding-20);\n    overflow: hidden; }\n  ion-content [privacy-page] [heading-title] {\n      text-align: left;\n      padding: var(--ion-padding-0) var(--ion-padding-0) var(--ion-padding-15) var(--ion-padding-0);\n      font-weight: bold;\n      font-size: var(--ion-font-size-22);\n      border-bottom: 1px #e5e5e5 solid;\n      color: var(--ion-color-darkblack3);\n      margin-top: var(--ion-margin-0);\n      font-family: var(--ion-font-family-2); }\n  ion-content [privacy-page] h3 {\n      font-size: var(--ion-font-size-14);\n      text-transform: uppercase;\n      color: var(--ion-color-darkblack3);\n      font-family: var(--ion-font-family-2);\n      margin-bottom: var(--ion-margin-15);\n      font-weight: bold; }\n  @media only screen and (max-width: 991px) {\n        ion-content [privacy-page] h3 {\n          font-size: var(--ion-font-size-13);\n          margin-top: var(--ion-margin-0);\n          margin-bottom: var(--ion-margin-10); } }\n  ion-content [privacy-page] ol {\n      padding-left: var(--ion-padding-22); }\n  @media only screen and (max-width: 991px) {\n        ion-content [privacy-page] ol {\n          padding-left: var(--ion-padding-15); } }\n  ion-content [privacy-page] ol li {\n        font-style: normal;\n        font-size: var(--ion-font-size-13);\n        color: var(--ion-color-darkgrey);\n        padding-bottom: var(--ion-padding-20);\n        font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n          ion-content [privacy-page] ol li {\n            padding-bottom: var(--ion-padding-10);\n            font-size: var(--ion-font-size-12); } }\n  ion-content [privacy-page] p {\n      font-style: normal;\n      font-size: var(--ion-font-size-13);\n      color: var(--ion-color-darkgrey);\n      line-height: 22px;\n      padding-bottom: var(--ion-padding-20);\n      font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n        ion-content [privacy-page] p {\n          padding-bottom: var(--ion-padding-10);\n          font-size: var(--ion-font-size-12); } }\n  ion-content [privacy-page] p a {\n        color: var(--ion-color-darkred); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFFQSxrQ0FBYTtFQUtkLGtCQUFBO0VBa0VBLGlCQUFBLEVBQWtCO0VBdEVsQjtJQUhDO01BS0csa0NBQWMsRUFBQSxFQXFFakI7RUExRUE7SUFVRyx3Q0FBd0M7SUFDeEMsMkdBQXVHO0lBQ3ZHLDhCQUE4QjtJQUM5QixnQkFBZ0IsRUFBQTtFQWJuQjtNQWVHLGdCQUFnQjtNQUNoQiw2RkFBNkY7TUFDN0YsaUJBQWlCO01BQ2pCLGtDQUFrQztNQUNsQyxnQ0FBZ0M7TUFDaEMsa0NBQWtDO01BQ2xDLCtCQUE4QjtNQUM5QixxQ0FBb0MsRUFBQTtFQXRCdkM7TUEwQkksa0NBQWtDO01BQ25DLHlCQUF5QjtNQUN6QixrQ0FBa0M7TUFDbEMscUNBQW9DO01BQ3BDLG1DQUFtQztNQUNuQyxpQkFBaUIsRUFBQTtFQUNyQjtRQWhDQztVQWlDQyxrQ0FBa0M7VUFDbkMsK0JBQStCO1VBQy9CLG1DQUFtQyxFQUFBLEVBRW5DO0VBckNBO01BdUNHLG1DQUFtQyxFQUFBO0VBQ3ZDO1FBeENDO1VBMENDLG1DQUFtQyxFQUFBLEVBYXBDO0VBdkRBO1FBNkNHLGtCQUFrQjtRQUNsQixrQ0FBa0M7UUFDbEMsZ0NBQWdDO1FBQ2hDLHFDQUFxQztRQUNyQyxxQ0FBb0MsRUFBQTtFQUN4QztVQWxEQztZQW1EQyxxQ0FBcUM7WUFDckMsa0NBQWtDLEVBQUEsRUFFbkM7RUF0REE7TUF5REcsa0JBQWtCO01BQ2xCLGtDQUFrQztNQUNsQyxnQ0FBZ0M7TUFDaEMsaUJBQWlCO01BQ2pCLHFDQUFxQztNQUNyQyxxQ0FBb0MsRUFBQTtFQUN4QztRQS9EQztVQWdFQSxxQ0FBcUM7VUFDcEMsa0NBQWtDLEVBQUEsRUFNbkM7RUF2RUE7UUFxRUUsK0JBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgaW9uLWNvbnRlbnRcclxueyAgXHJcblx0LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5KTtcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxyXG57XHJcbiAgICAtLXBhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG59XHJcbi8qIFByaXZhY3kgU3RhcnQgKi9cclxuW3ByaXZhY3ktcGFnZV1cclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWlvbi12YWx1ZS0wKSB2YXIoLS1pb24tdmFsdWUtMikgdmFyKC0taW9uLXZhbHVlLTQpIHZhcigtLWlvbi12YWx1ZS0wKSByZ2JhKDAsMCwwLC4wOCk7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0yMCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5baGVhZGluZy10aXRsZV0ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApIHZhcigtLWlvbi1wYWRkaW5nLTApIHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTIyKTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCAjZTVlNWU1IHNvbGlkO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcclxuICAgIG1hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbi0wKTtcclxuICAgIGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxufVxyXG5oM1xyXG57XHJcbiAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjazMpO1xyXG4gICAgZm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xNSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG57IGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XHJcbiBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTApO1xyXG4gbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xMCk7XHJcbn1cclxufVxyXG5vbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLTIyKTtcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG57XHJcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZy0xNSk7XHJcbn1cclxuIGxpIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmV5KTtcclxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy0yMCk7XHJcbiAgICBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxueyBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctMTApO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcbn1cclxufVxyXG59XHJcbnAge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyZXkpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctMjApO1xyXG4gICAgZm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcbntwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctMTApO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcbn1cclxuYVxyXG57XHJcbiAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrcmVkKVxyXG59XHJcbn1cclxufVxyXG4vKiBQcml2YWN5IEVuZHMgKi9cclxufSJdfQ== */"

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