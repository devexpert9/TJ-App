(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["returns-replacement-returns-replacement-module"],{

/***/ "./src/app/returns-replacement/returns-replacement.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/returns-replacement/returns-replacement.module.ts ***!
  \*******************************************************************/
/*! exports provided: ReturnsReplacementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnsReplacementPageModule", function() { return ReturnsReplacementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _returns_replacement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./returns-replacement.page */ "./src/app/returns-replacement/returns-replacement.page.ts");







var routes = [
    {
        path: '',
        component: _returns_replacement_page__WEBPACK_IMPORTED_MODULE_6__["ReturnsReplacementPage"]
    }
];
var ReturnsReplacementPageModule = /** @class */ (function () {
    function ReturnsReplacementPageModule() {
    }
    ReturnsReplacementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_returns_replacement_page__WEBPACK_IMPORTED_MODULE_6__["ReturnsReplacementPage"]]
        })
    ], ReturnsReplacementPageModule);
    return ReturnsReplacementPageModule;
}());



/***/ }),

/***/ "./src/app/returns-replacement/returns-replacement.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/returns-replacement/returns-replacement.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"darkred\" text-uppercase>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n       Returns & Replacement\n    </ion-title>\n  <ion-buttons slot=\"end\" > \n          <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n<ion-buttons slot=\"end\" > \n\t<ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\t\n\t </ion-buttons>\n  </ion-toolbar>\n      <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n\t              <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n\t              <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n\t              <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n\t              <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t   </div>\n</ion-header>  -->\n<ion-content class=\"ion-padding\">\n<div header_height></div>\n<!-- <div header-inner class=\"ion-hide-lg-up\">\n<div delivery-location (click)=\"presentModal()\">\n<ion-icon name=\"pin\"></ion-icon> Deliver To Chandigarh 160022 <ion-icon name=\"arrow-down\"></ion-icon>\n</div>\n</div> -->\n<!-- Breadcrumb Start -->\n\t\t<div breadcrumb  class=\"ion-hide-md-down\">\t\t\n\t\t\t\t<div breadcrumb-inner>\n\t\t\t\t\t<ul list-inline list-unstyled>\n\t\t\t\t\t\t<li><a routerLink=\"/home\">Home</a></li>\n\t\t\t\t\t\t<li class=\"active\">    Returns & Replacement</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- /.breadcrumb-inner -->\n\t\t</div>\n<!-- Breadcrumb Ends -->\n<!---  Return Replacement Section Start  --->\n<div returns-page>\n    <ion-row>\n\t  <ion-col size-lg=\"4\" size-md=\"6\" size-sm=\"6\" size=\"12\">\n\t     <div widget-return>\n\t\t    <h3 section-title>Start a Return</h3>\n\t\t\t\n\t\t    <p>Return, replace or exchange items</p>\n\t\t\t<ion-button color=\"darkred\">Return Items</ion-button>\n\t\t </div>\n\t  </ion-col>\n\t   <ion-col  size-lg=\"4\" size-md=\"6\" size-sm=\"6\" size=\"12\">\n\t     <div widget-return>\n\t\t    <h3 section-title>View return status</h3>\n\t\t    <p>Print return labels and check the status of your returns </p>\n\t\t\t<ion-button color=\"darkred\">Manage Returns</ion-button>\n\t\t </div>\n\t  </ion-col>\n\t  <!--- RETURNS ARE EASY Start ---->\n\t\t  <ion-col size=\"12\">\n\t\t\t\t<div returns-process>\n\t\t\t\t  <h3 section-title class=\"ion-hide-md-down\">Returns are easy</h3>\n\t\t\t\t <h4 mob-head text-center text-uppercase class=\"ion-hide-lg-up\">\n\t\t\t\t     Returns are easy\n\t\t\t\t  </h4>\n\t\t\t\t  <ion-row>\n\t\t\t\t\t <ion-col size-md=\"3\" size-sm=\"6\" size=\"6\" text-center>\n\t\t\t\t\t   <ion-img src=\"assets/images/returns-icon.png\"></ion-img>\n\t\t\t\t\t   <p>Print label and authorization</p>\n\t\t\t\t\t </ion-col>\n\t\t\t\t\t <ion-col size-md=\"3\" size-sm=\"6\" size=\"6\" text-center>\n\t\t\t\t\t   <ion-img src=\"assets/images/returns-icon1.png\"></ion-img>\n\t\t\t\t\t   <p>Prepare Package</p>\n\t\t\t\t\t </ion-col>\n\t\t\t\t\t <ion-col size-md=\"3\" size-sm=\"6\" size=\"6\" text-center>\n\t\t\t\t\t   <ion-img src=\"assets/images/returns-icon2.png\"></ion-img>\n\t\t\t\t\t   <p>Attach Return Label</p>\n\t\t\t\t\t </ion-col>\n\t\t\t\t\t <ion-col size-md=\"3\" size-sm=\"6\" size=\"6\" text-center>\n\t\t\t\t\t   <ion-img src=\"assets/images/returns-icon3.png\"></ion-img>\n\t\t\t\t\t   <p>Ship It!</p>\n\t\t\t\t\t </ion-col>\n\t\t\t\t  </ion-row>\n\t\t\t   </div>\t  \n\t\t  </ion-col>\n\t  <!--- RETURNS ARE EASY End ---->\n\t  \t  <!---Other Info Start ---->\n\t\t  <ion-col size=\"12\">\n\t\t\t\t<div other-sec>\n\t\t\t\t  <h3 section-title class=\"ion-hide-md-down\">Other Info</h3>\n\t\t\t\t   <h4 mob-head text-center text-uppercase class=\"ion-hide-lg-up\">\n\t\t\t\t     Other Info\n\t\t\t\t  </h4>\n\t\t\t\t <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\t\t\t\t Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor \n\t\t\t\t in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n\t\t\t\t sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n\t\t\t\t eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco\n\t\t\t\t laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\n\t\t\t\t eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim\n\t\t\t\t id est laborum.</p>\n\t\t\t   </div>\t  \n\t\t  </ion-col>\n\t  <!---Other Info End ---->\n\t</ion-row>\n\n</div>\n<!---  Return Replacement Section Ends  --->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/returns-replacement/returns-replacement.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/returns-replacement/returns-replacement.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey); }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0); } }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0);\n      --padding-bottom:var(--ion-padding-0);\n      --padding-start:var(--ion-padding-0);\n      --padding-end:var(--ion-padding-0); } }\n  ion-content [returns-page] {\n    margin-bottom: var(--ion-value-30);\n    background-color: var(--ion-color-white);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n    padding: var(--ion-padding-20);\n    overflow: hidden;\n    /* Return Process Start */\n    /* Return Process Ends */\n    /* Other Info Start */\n    /* Other Info Ends */ }\n  @media only screen and (max-width: 991px) {\n      ion-content [returns-page] {\n        box-shadow: none;\n        padding: var(--ion-padding-10); }\n        ion-content [returns-page] [mob-head] {\n          margin-top: var(--ion-margin-10); } }\n  ion-content [returns-page] h3[section-title] {\n      font-size: var(--ion-font-size-14);\n      font-family: var(--ion-font-family-2);\n      border-bottom: 1px solid #e3e3e3;\n      padding-bottom: var(--ion-padding-12);\n      text-transform: uppercase;\n      font-weight: bold;\n      margin-top: var(--ion-margin-0);\n      color: var(--ion-color-darkblack); }\n  @media only screen and (max-width: 991px) {\n        ion-content [returns-page] h3[section-title] {\n          font-size: var(--ion-font-size-13);\n          border: none; } }\n  ion-content [returns-page] [widget-return] {\n      font-family: var(--ion-font-family-2);\n      background: var(--ion-color-greyf8);\n      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n      padding: var(--ion-padding-20);\n      margin-bottom: var(--ion-value-0); }\n  @media only screen and (max-width: 991px) {\n        ion-content [returns-page] [widget-return] {\n          border: 1px solid #e3e3e3;\n          box-shadow: none;\n          text-align: center;\n          background-color: transparent; } }\n  ion-content [returns-page] [widget-return] p {\n        color: var(--ion-color-darkblack);\n        margin-top: var(--ion-margin-20); }\n  @media only screen and (max-width: 991px) {\n          ion-content [returns-page] [widget-return] p {\n            font-size: var(--ion-font-size-12);\n            margin-top: var(--ion-margin-0); } }\n  ion-content [returns-page] [widget-return] ion-button {\n        font-size: var(--ion-font-size-13);\n        --box-shadow:none;\n        text-transform: Capitalize; }\n  @media only screen and (max-width: 991px) {\n          ion-content [returns-page] [widget-return] ion-button {\n            height: var(--ion-wh-30);\n            font-size: var(--ion-font-size-12); } }\n  ion-content [returns-page] [widget-return] ion-button:hover {\n          opacity: 0.8; }\n  ion-content [returns-page] [returns-process] {\n      margin-top: var(--ion-margin-30); }\n  ion-content [returns-page] [returns-process] p {\n        font-weight: 600;\n        font-size: var(--ion-font-size-16);\n        color: var(--ion-color-darkblack);\n        font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n          ion-content [returns-page] [returns-process] p {\n            font-size: var(--ion-font-size-12);\n            margin-top: var(--ion-margin-10); } }\n  ion-content [returns-page] [returns-process] ion-img {\n        margin: 0 auto;\n        max-width: 235px; }\n  @media only screen and (max-width: 576px) {\n          ion-content [returns-page] [returns-process] ion-img {\n            max-width: 150px; } }\n  ion-content [returns-page] [other-sec] {\n      margin-top: var(--ion-margin-30); }\n  ion-content [returns-page] [other-sec] p {\n        font-size: var(--ion-font-size-14);\n        color: var(--ion-color-darkblack);\n        font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n          ion-content [returns-page] [other-sec] p {\n            font-size: var(--ion-font-size-12); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9yZXR1cm5zLXJlcGxhY2VtZW50L3JldHVybnMtcmVwbGFjZW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBRUEsa0NBQWEsRUFBQTtFQUNiO0lBSEE7TUFLRyxrQ0FBYyxFQUFBLEVBK0hqQjtFQTdIQTtJQVBBO01BU0csa0NBQWM7TUFDZCxxQ0FBaUI7TUFDakIsb0NBQWdCO01BQ2hCLGtDQUFjLEVBQUEsRUF3SGpCO0VBcElBO0lBZ0JDLGtDQUFrQztJQUNsQyx3Q0FBd0M7SUFDeEMsMkNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFvRWhCLHlCQUFBO0lBeUJBLHdCQUFBO0lBQ0MscUJBQUE7SUFnQkQsb0JBQUEsRUFBcUI7RUE3R3JCO01BckJEO1FBdUJHLGdCQUFnQjtRQUdoQiw4QkFBOEIsRUFBQTtRQTFCakM7VUE2Qk0sZ0NBQStCLEVBQUEsRUFDaEM7RUE5Qkw7TUFtQ0ksa0NBQWtDO01BQ2xDLHFDQUFxQztNQUNyQyxnQ0FBZ0M7TUFDaEMscUNBQXFDO01BQ3JDLHlCQUF5QjtNQUN6QixpQkFBaUI7TUFDakIsK0JBQStCO01BQy9CLGlDQUFpQyxFQUFBO0VBQ2pDO1FBM0NKO1VBNkNLLGtDQUFrQztVQUNsQyxZQUFXLEVBQUEsRUFFWjtFQWhESjtNQW1ERyxxQ0FBcUM7TUFDckMsbUNBQWtDO01BQ2xDLDJDQUF1QztNQUN2Qyw4QkFBNkI7TUFDN0IsaUNBQWlDLEVBQUE7RUFDbEM7UUF4REY7VUF5REkseUJBQXlCO1VBQ3ZCLGdCQUFnQjtVQUNoQixrQkFBaUI7VUFDcEIsNkJBQTRCLEVBQUEsRUEyQjdCO0VBdkZGO1FBZ0VLLGlDQUFpQztRQUNwQyxnQ0FBZ0MsRUFBQTtFQUNoQztVQWxFRjtZQW9FSyxrQ0FBa0M7WUFDbEMsK0JBQStCLEVBQUEsRUFFaEM7RUF2RUo7UUEwRUcsa0NBQWtDO1FBQ2pDLGlCQUFhO1FBQ2YsMEJBQXlCLEVBQUE7RUFDekI7VUE3RUY7WUErRU8sd0JBQXdCO1lBQ1osa0NBQWtDLEVBQUEsRUFNakQ7RUF0Rko7VUFvRkksWUFBVyxFQUFBO0VBcEZmO01BMkZVLGdDQUFnQyxFQUFBO0VBM0YxQztRQTZGRSxnQkFBZ0I7UUFDaEIsa0NBQWtDO1FBQ2xDLGlDQUFpQztRQUNqQyxxQ0FBcUMsRUFBQTtFQUNyQztVQWpHRjtZQW1HSyxrQ0FBa0M7WUFDbEMsZ0NBQWdDLEVBQUEsRUFFbkM7RUF0R0Y7UUF5R00sY0FBYztRQUNMLGdCQUFnQixFQUFBO0VBQzdCO1VBM0dGO1lBNkdPLGdCQUFnQixFQUFBLEVBRXJCO0VBL0dGO01BcUhVLGdDQUFnQyxFQUFBO0VBckgxQztRQXlIRSxrQ0FBa0M7UUFDbEMsaUNBQWlDO1FBQ2pDLHFDQUFxQyxFQUFBO0VBQ3BDO1VBNUhIO1lBOEhPLGtDQUFrQyxFQUFBLEVBRXZDIiwiZmlsZSI6InNyYy9hcHAvcmV0dXJucy1yZXBsYWNlbWVudC9yZXR1cm5zLXJlcGxhY2VtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBpb24tY29udGVudFxyXG57ICBcclxuXHQtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTFweClcclxuXHR7XHJcblx0ICAgLS1wYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHR9XHRcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0e1xyXG5cdCAgIC0tcGFkZGluZy10b3A6dmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0ICAgLS1wYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHQgICAtLXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0ICAgLS1wYWRkaW5nLWVuZDp2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHR9XHJcblx0W3JldHVybnMtcGFnZV1cclxuXHR7XHJcblx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tdmFsdWUtMzApO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsLjA4KTtcclxuXHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHR7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTApO1xyXG5cdFx0ICAgW21vYi1oZWFkXVxyXG5cdFx0ICAge1xyXG5cdFx0XHQgICAgbWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLTEwKTtcclxuXHRcdCAgIH1cclxuXHRcdH1cclxuXHRcdCAgIGgzXHJcblx0XHQgICB7XHJcblx0XHRcdCAgICZbc2VjdGlvbi10aXRsZV0ge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcclxuXHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy0xMik7XHJcblx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0Y29sb3I6dmFyKCAtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xyXG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHR7XHJcblx0XHRcdCAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XHJcblx0XHRcdCAgIGJvcmRlcjpub25lO1xyXG5cdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0ICB9XHJcblx0XHRbd2lkZ2V0LXJldHVybl1cclxuXHRcdHsgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdCAgYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZ3JleWY4KTtcclxuXHRcdCAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwuMDgpO1xyXG5cdFx0ICBwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTIwKTtcclxuXHRcdCAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLXZhbHVlLTApO1xyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdHtcdGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTM7XHJcblx0XHRcdCAgICBib3gtc2hhZG93OiBub25lO1xyXG5cdFx0XHQgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuXHRcdFx0fVx0XHQgIFxyXG5cdFx0ICBwXHJcblx0XHQgIHtcclxuXHRcdCAgICBjb2xvcjp2YXIoIC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHJcblx0XHRcdG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMjApO1xyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdHtcclxuXHRcdFx0ICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcclxuXHRcdFx0ICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0fVxyXG5cdFx0ICB9XHJcblx0XHQgIGlvbi1idXR0b25cclxuXHRcdCAge1xyXG5cdFx0IFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcclxuXHRcdCAgIC0tYm94LXNoYWRvdzpub25lO1xyXG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTpDYXBpdGFsaXplO1xyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQgICAgaGVpZ2h0OiB2YXIoLS1pb24td2gtMzApO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcblx0XHRcdH1cclxuXHRcdFx0Jjpob3ZlclxyXG5cdFx0XHR7XHJcblx0XHRcdCAgb3BhY2l0eTowLjg7XHJcblx0XHRcdH1cclxuXHRcdCAgfVxyXG5cdFx0fVxyXG5cdFx0LyogUmV0dXJuIFByb2Nlc3MgU3RhcnQgKi9cclxuXHRcdFtyZXR1cm5zLXByb2Nlc3NdXHJcblx0XHR7XHJcbiAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0zMCk7XHJcblx0XHQgICAgcCB7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XHJcblx0XHRcdGNvbG9yOnZhciggLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHR7XHJcblx0XHRcdCAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcblx0XHRcdCAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMTApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpb24taW1nXHJcblx0XHR7XHJcblx0XHRcdCAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjM1cHg7XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0e1xyXG5cdFx0XHQgXHQgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcbiAgICAgICAgfVxyXG5cdFx0LyogUmV0dXJuIFByb2Nlc3MgRW5kcyAqL1xyXG5cdFx0XHQvKiBPdGhlciBJbmZvIFN0YXJ0ICovXHJcblx0XHRbb3RoZXItc2VjXVxyXG5cdFx0e1xyXG4gICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMzApO1xyXG5cdFx0IFxyXG5cdFx0IHAge1xyXG5cdFx0XHQgXHJcblx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcblx0XHRcdGNvbG9yOnZhciggLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdHtcclxuXHRcdFx0IFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG4gICAgICAgIH1cclxuXHRcdC8qIE90aGVyIEluZm8gRW5kcyAqL1xyXG5cdH1cdFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/returns-replacement/returns-replacement.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/returns-replacement/returns-replacement.page.ts ***!
  \*****************************************************************/
/*! exports provided: ReturnsReplacementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnsReplacementPage", function() { return ReturnsReplacementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReturnsReplacementPage = /** @class */ (function () {
    function ReturnsReplacementPage() {
        this.buttonClickeddrop = false; //Whatever you want to initialise it as
    }
    ReturnsReplacementPage.prototype.ngOnInit = function () {
    };
    ReturnsReplacementPage.prototype.onButtonClickdrop = function () {
        this.buttonClickeddrop = !this.buttonClickeddrop;
    };
    ReturnsReplacementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-returns-replacement',
            template: __webpack_require__(/*! ./returns-replacement.page.html */ "./src/app/returns-replacement/returns-replacement.page.html"),
            styles: [__webpack_require__(/*! ./returns-replacement.page.scss */ "./src/app/returns-replacement/returns-replacement.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReturnsReplacementPage);
    return ReturnsReplacementPage;
}());



/***/ })

}]);
//# sourceMappingURL=returns-replacement-returns-replacement-module.js.map