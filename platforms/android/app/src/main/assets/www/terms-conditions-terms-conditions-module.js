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

module.exports = "ion-content {\n  --background:var(--ion-color-grey);\n  /*Terms Start */\n  /* Terms Ends */ }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0); } }\n  ion-content [terms-page] {\n    background-color: var(--ion-color-white);\n    box-shadow: var(--ion-value-0) var(--ion-value-2) var(--ion-value-4) var(--ion-value-0) rgba(0, 0, 0, 0.08);\n    padding: var(--ion-padding-20);\n    overflow: hidden; }\n  ion-content [terms-page] [heading-title] {\n      text-align: left;\n      padding: var(--ion-padding-0) var(--ion-padding-0) var(--ion-padding-15) var(--ion-padding-0);\n      font-weight: bold;\n      font-size: var(--ion-font-size-22);\n      border-bottom: 1px #e5e5e5 solid;\n      color: var(--ion-color-darkblack3);\n      margin-top: var(--ion-margin-0);\n      font-family: var(--ion-font-family-2); }\n  ion-content [terms-page] h3 {\n      font-size: var(--ion-font-size-14);\n      text-transform: uppercase;\n      color: var(--ion-color-darkblack3);\n      font-family: var(--ion-font-family-2);\n      margin-bottom: var(--ion-margin-15);\n      font-weight: bold; }\n  @media only screen and (max-width: 991px) {\n        ion-content [terms-page] h3 {\n          font-size: var(--ion-font-size-13);\n          margin-top: var(--ion-margin-0);\n          margin-bottom: var(--ion-margin-10); } }\n  ion-content [terms-page] ol {\n      padding-left: var(--ion-padding-22); }\n  @media only screen and (max-width: 991px) {\n        ion-content [terms-page] ol {\n          padding-left: var(--ion-padding-15); } }\n  ion-content [terms-page] ol li {\n        font-style: normal;\n        font-size: var(--ion-font-size-13);\n        color: var(--ion-color-darkgrey);\n        padding-bottom: var(--ion-padding-20);\n        font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n          ion-content [terms-page] ol li {\n            padding-bottom: var(--ion-padding-10);\n            font-size: var(--ion-font-size-12); } }\n  ion-content [terms-page] p {\n      font-style: normal;\n      font-size: var(--ion-font-size-13);\n      color: var(--ion-color-darkgrey);\n      line-height: 22px;\n      padding-bottom: var(--ion-padding-20);\n      font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n        ion-content [terms-page] p {\n          padding-bottom: var(--ion-padding-10);\n          font-size: var(--ion-font-size-12); } }\n  ion-content [terms-page] p a {\n        color: var(--ion-color-darkred); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC90ZXJtcy1jb25kaXRpb25zL3Rlcm1zLWNvbmRpdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBRUEsa0NBQWE7RUFLZCxlQUFBO0VBa0VBLGVBQUEsRUFBZ0I7RUF0RWhCO0lBSEM7TUFLRyxrQ0FBYyxFQUFBLEVBcUVqQjtFQTFFQTtJQVVHLHdDQUF3QztJQUN4QywyR0FBdUc7SUFDdkcsOEJBQThCO0lBQzlCLGdCQUFnQixFQUFBO0VBYm5CO01BZUcsZ0JBQWdCO01BQ2hCLDZGQUE2RjtNQUM3RixpQkFBaUI7TUFDakIsa0NBQWtDO01BQ2xDLGdDQUFnQztNQUNoQyxrQ0FBa0M7TUFDbEMsK0JBQThCO01BQzlCLHFDQUFvQyxFQUFBO0VBdEJ2QztNQTBCSSxrQ0FBa0M7TUFDbkMseUJBQXlCO01BQ3pCLGtDQUFrQztNQUNsQyxxQ0FBb0M7TUFDcEMsbUNBQW1DO01BQ25DLGlCQUFpQixFQUFBO0VBQ3JCO1FBaENDO1VBaUNDLGtDQUFrQztVQUNuQywrQkFBK0I7VUFDL0IsbUNBQW1DLEVBQUEsRUFFbkM7RUFyQ0E7TUF1Q0csbUNBQW1DLEVBQUE7RUFDdkM7UUF4Q0M7VUEwQ0MsbUNBQW1DLEVBQUEsRUFhcEM7RUF2REE7UUE2Q0csa0JBQWtCO1FBQ2xCLGtDQUFrQztRQUNsQyxnQ0FBZ0M7UUFDaEMscUNBQXFDO1FBQ3JDLHFDQUFvQyxFQUFBO0VBQ3hDO1VBbERDO1lBbURDLHFDQUFxQztZQUNyQyxrQ0FBa0MsRUFBQSxFQUVuQztFQXREQTtNQXlERyxrQkFBa0I7TUFDbEIsa0NBQWtDO01BQ2xDLGdDQUFnQztNQUNoQyxpQkFBaUI7TUFDakIscUNBQXFDO01BQ3JDLHFDQUFvQyxFQUFBO0VBQ3hDO1FBL0RDO1VBZ0VBLHFDQUFxQztVQUNwQyxrQ0FBa0MsRUFBQSxFQU1uQztFQXZFQTtRQXFFRSwrQkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zLWNvbmRpdGlvbnMvdGVybXMtY29uZGl0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgaW9uLWNvbnRlbnRcclxueyAgXHJcblx0LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5KTtcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxyXG57XHJcbiAgICAtLXBhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG59XHJcbi8qVGVybXMgU3RhcnQgKi9cclxuW3Rlcm1zLXBhZ2VdXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1pb24tdmFsdWUtMCkgdmFyKC0taW9uLXZhbHVlLTIpIHZhcigtLWlvbi12YWx1ZS00KSB2YXIoLS1pb24tdmFsdWUtMCkgcmdiYSgwLDAsMCwuMDgpO1xyXG4gICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMjApO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuW2hlYWRpbmctdGl0bGVdIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0yMik7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggI2U1ZTVlNSBzb2xpZDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrMyk7XHJcbiAgICBtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcbiAgICBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcbn1cclxuaDNcclxue1xyXG4gICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcclxuICAgIGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxueyBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG4gbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApO1xyXG59XHJcbn1cclxub2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZy0yMik7XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxue1xyXG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmctMTUpO1xyXG59XHJcbiBsaSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JleSk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctMjApO1xyXG4gICAgZm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcbnsgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG59XHJcbn1cclxufVxyXG5wIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmV5KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcclxuICAgIGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG57cGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG59XHJcbmFcclxue1xyXG4gICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya3JlZClcclxufVxyXG59XHJcbn1cclxuLyogVGVybXMgRW5kcyAqL1xyXG59Il19 */"

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