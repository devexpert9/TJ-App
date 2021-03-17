(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-conditions-terms-conditions-module"],{

/***/ "./src/app/terms-conditions/terms-conditions.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.module.ts ***!
  \*************************************************************/
/*! exports provided: TermsConditionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsPageModule", function() { return TermsConditionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms-conditions.page */ "./src/app/terms-conditions/terms-conditions.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _terms_conditions_page__WEBPACK_IMPORTED_MODULE_6__["TermsConditionsPage"]
    }
];
var TermsConditionsPageModule = /** @class */ (function () {
    function TermsConditionsPageModule() {
    }
    TermsConditionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_terms_conditions_page__WEBPACK_IMPORTED_MODULE_6__["TermsConditionsPage"]]
        })
    ], TermsConditionsPageModule);
    return TermsConditionsPageModule;
}());



/***/ }),

/***/ "./src/app/terms-conditions/terms-conditions.page.html":
/*!*************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"darkred\" text-uppercase>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n       Terms & Conditions\n    </ion-title>\n  <ion-buttons slot=\"end\" > \n          <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n\t     <ion-buttons slot=\"end\">\n          <ion-icon name=\"pin\"></ion-icon>\n    </ion-buttons>\n<ion-buttons slot=\"end\" > \n\t<ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\t\n\t </ion-buttons>\n  </ion-toolbar>\n      <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n\t              <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n\t              <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n\t              <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n\t              <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t   </div>\n</ion-header> --> \n<ion-content>\n<div class=\"ion-padding\">\n<div header_height></div>\n<!-- Breadcrumb Start -->\n\n<div breadcrumb  class=\"ion-hide-md-down\">\t\t\n\t<div breadcrumb-inner>\n\t\t<ul list-inline list-unstyled>\n\t\t<li><a routerLink=\"/home\">Home</a></li>\n\t\t\t<li class=\"active\"> Terms & Conditions</li>\n\t\t</ul>\n\t</div><!-- /.breadcrumb-inner -->\n</div>\n\n<!-- Breadcrumb Ends -->\n<!-- Terms & Conditions Section  Start -->\n<div terms-page>\n   <ion-row>\n\t\t<ion-col terms-conditions size=\"12\" no-padding>\n\t\t   <div [innerHTML]=\"page\"></div>\n\t   </ion-col>\t\t\n\t</ion-row><!-- /.row -->\n</div>\n</div>\n<!-- Privacy Section  Ends -->\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/terms-conditions/terms-conditions.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey);\n  /*Terms Start */\n  /* Terms Ends */ }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0); } }\n  ion-content [terms-page] {\n    background-color: var(--ion-color-white);\n    box-shadow: var(--ion-value-0) var(--ion-value-2) var(--ion-value-4) var(--ion-value-0) rgba(0, 0, 0, 0.08);\n    padding: var(--ion-padding-20);\n    overflow: hidden; }\n  ion-content [terms-page] [heading-title] {\n      text-align: left;\n      padding: var(--ion-padding-0) var(--ion-padding-0) var(--ion-padding-15) var(--ion-padding-0);\n      font-weight: bold;\n      font-size: var(--ion-font-size-22);\n      border-bottom: 1px #e5e5e5 solid;\n      color: var(--ion-color-darkblack3);\n      margin-top: var(--ion-margin-0);\n      font-family: var(--ion-font-family-2); }\n  ion-content [terms-page] h3 {\n      font-size: var(--ion-font-size-14);\n      text-transform: uppercase;\n      color: var(--ion-color-darkblack3);\n      font-family: var(--ion-font-family-2);\n      margin-bottom: var(--ion-margin-15);\n      font-weight: bold; }\n  @media only screen and (max-width: 991px) {\n        ion-content [terms-page] h3 {\n          font-size: var(--ion-font-size-13);\n          margin-top: var(--ion-margin-0);\n          margin-bottom: var(--ion-margin-10); } }\n  ion-content [terms-page] ol {\n      padding-left: var(--ion-padding-22); }\n  @media only screen and (max-width: 991px) {\n        ion-content [terms-page] ol {\n          padding-left: var(--ion-padding-15); } }\n  ion-content [terms-page] ol li {\n        font-style: normal;\n        font-size: var(--ion-font-size-13);\n        color: var(--ion-color-darkgrey);\n        padding-bottom: var(--ion-padding-20);\n        font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n          ion-content [terms-page] ol li {\n            padding-bottom: var(--ion-padding-10);\n            font-size: var(--ion-font-size-12); } }\n  ion-content [terms-page] p {\n      font-style: normal;\n      font-size: var(--ion-font-size-13);\n      color: var(--ion-color-darkgrey);\n      line-height: 22px;\n      padding-bottom: var(--ion-padding-20);\n      font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n        ion-content [terms-page] p {\n          padding-bottom: var(--ion-padding-10);\n          font-size: var(--ion-font-size-12); } }\n  ion-content [terms-page] p a {\n        color: var(--ion-color-darkred); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvdGVybXMtY29uZGl0aW9ucy90ZXJtcy1jb25kaXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUVBLGtDQUFhO0VBS2QsZUFBQTtFQWtFQSxlQUFBLEVBQWdCO0VBdEVoQjtJQUhDO01BS0csa0NBQWMsRUFBQSxFQXFFakI7RUExRUE7SUFVRyx3Q0FBd0M7SUFDeEMsMkdBQXVHO0lBQ3ZHLDhCQUE4QjtJQUM5QixnQkFBZ0IsRUFBQTtFQWJuQjtNQWVHLGdCQUFnQjtNQUNoQiw2RkFBNkY7TUFDN0YsaUJBQWlCO01BQ2pCLGtDQUFrQztNQUNsQyxnQ0FBZ0M7TUFDaEMsa0NBQWtDO01BQ2xDLCtCQUE4QjtNQUM5QixxQ0FBb0MsRUFBQTtFQXRCdkM7TUEwQkksa0NBQWtDO01BQ25DLHlCQUF5QjtNQUN6QixrQ0FBa0M7TUFDbEMscUNBQW9DO01BQ3BDLG1DQUFtQztNQUNuQyxpQkFBaUIsRUFBQTtFQUNyQjtRQWhDQztVQWlDQyxrQ0FBa0M7VUFDbkMsK0JBQStCO1VBQy9CLG1DQUFtQyxFQUFBLEVBRW5DO0VBckNBO01BdUNHLG1DQUFtQyxFQUFBO0VBQ3ZDO1FBeENDO1VBMENDLG1DQUFtQyxFQUFBLEVBYXBDO0VBdkRBO1FBNkNHLGtCQUFrQjtRQUNsQixrQ0FBa0M7UUFDbEMsZ0NBQWdDO1FBQ2hDLHFDQUFxQztRQUNyQyxxQ0FBb0MsRUFBQTtFQUN4QztVQWxEQztZQW1EQyxxQ0FBcUM7WUFDckMsa0NBQWtDLEVBQUEsRUFFbkM7RUF0REE7TUF5REcsa0JBQWtCO01BQ2xCLGtDQUFrQztNQUNsQyxnQ0FBZ0M7TUFDaEMsaUJBQWlCO01BQ2pCLHFDQUFxQztNQUNyQyxxQ0FBb0MsRUFBQTtFQUN4QztRQS9EQztVQWdFQSxxQ0FBcUM7VUFDcEMsa0NBQWtDLEVBQUEsRUFNbkM7RUF2RUE7UUFxRUUsK0JBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90ZXJtcy1jb25kaXRpb25zL3Rlcm1zLWNvbmRpdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGlvbi1jb250ZW50XHJcbnsgIFxyXG5cdC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZ3JleSk7XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTFweClcclxue1xyXG4gICAgLS1wYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZy0wKTtcclxufVxyXG4vKlRlcm1zIFN0YXJ0ICovXHJcblt0ZXJtcy1wYWdlXVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0taW9uLXZhbHVlLTApIHZhcigtLWlvbi12YWx1ZS0yKSB2YXIoLS1pb24tdmFsdWUtNCkgdmFyKC0taW9uLXZhbHVlLTApIHJnYmEoMCwwLDAsLjA4KTtcclxuICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbltoZWFkaW5nLXRpdGxlXSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCkgdmFyKC0taW9uLXBhZGRpbmctMCkgdmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMjIpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4ICNlNWU1ZTUgc29saWQ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjazMpO1xyXG4gICAgbWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLTApO1xyXG4gICAgZm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG59XHJcbmgzXHJcbntcclxuICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrMyk7XHJcbiAgICBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTE1KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcbnsgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcclxuIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcbiBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTEwKTtcclxufVxyXG59XHJcbm9sIHtcclxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmctMjIpO1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcbntcclxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcclxufVxyXG4gbGkge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyZXkpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcclxuICAgIGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG57IHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy0xMCk7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcclxufVxyXG59XHJcbn1cclxucCB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JleSk7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy0yMCk7XHJcbiAgICBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxue3BhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy0xMCk7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcclxufVxyXG5hXHJcbntcclxuICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpXHJcbn1cclxufVxyXG59XHJcbi8qIFRlcm1zIEVuZHMgKi9cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/terms-conditions/terms-conditions.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.page.ts ***!
  \***********************************************************/
/*! exports provided: TermsConditionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsPage", function() { return TermsConditionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var TermsConditionsPage = /** @class */ (function () {
    function TermsConditionsPage(userService, loadingController) {
        this.userService = userService;
        this.loadingController = loadingController;
    }
    TermsConditionsPage.prototype.ngOnInit = function () {
    };
    TermsConditionsPage.prototype.ionViewDidEnter = function () {
        this.getTerms();
    };
    TermsConditionsPage.prototype.getTerms = function () {
        var _this = this;
        this.presentLoading();
        this.userService.postData({}, 'termsAndConditions').subscribe(function (result) {
            _this.page = atob(result.terms.content);
            _this.stopLoading();
        }, function (err) {
            _this.page = [];
            _this.stopLoading();
        });
    };
    TermsConditionsPage.prototype.presentLoading = function () {
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
    TermsConditionsPage.prototype.stopLoading = function () {
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
    TermsConditionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terms-conditions',
            template: __webpack_require__(/*! ./terms-conditions.page.html */ "./src/app/terms-conditions/terms-conditions.page.html"),
            styles: [__webpack_require__(/*! ./terms-conditions.page.scss */ "./src/app/terms-conditions/terms-conditions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], TermsConditionsPage);
    return TermsConditionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=terms-conditions-terms-conditions-module.js.map