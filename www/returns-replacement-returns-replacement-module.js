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

module.exports = "ion-content {\n  --background:var(--ion-color-grey); }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0); } }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0);\n      --padding-bottom:var(--ion-padding-0);\n      --padding-start:var(--ion-padding-0);\n      --padding-end:var(--ion-padding-0); } }\n  ion-content [returns-page] {\n    margin-bottom: var(--ion-value-30);\n    background-color: var(--ion-color-white);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n    padding: var(--ion-padding-20);\n    overflow: hidden;\n    /* Return Process Start */\n    /* Return Process Ends */\n    /* Other Info Start */\n    /* Other Info Ends */ }\n  @media only screen and (max-width: 991px) {\n      ion-content [returns-page] {\n        box-shadow: none;\n        padding: var(--ion-padding-10); }\n        ion-content [returns-page] [mob-head] {\n          margin-top: var(--ion-margin-10); } }\n  ion-content [returns-page] h3[section-title] {\n      font-size: var(--ion-font-size-14);\n      font-family: var(--ion-font-family-2);\n      border-bottom: 1px solid #e3e3e3;\n      padding-bottom: var(--ion-padding-12);\n      text-transform: uppercase;\n      font-weight: bold;\n      margin-top: var(--ion-margin-0);\n      color: var(--ion-color-darkblack); }\n  @media only screen and (max-width: 991px) {\n        ion-content [returns-page] h3[section-title] {\n          font-size: var(--ion-font-size-13);\n          border: none; } }\n  ion-content [returns-page] [widget-return] {\n      font-family: var(--ion-font-family-2);\n      background: var(--ion-color-greyf8);\n      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n      padding: var(--ion-padding-20);\n      margin-bottom: var(--ion-value-0); }\n  @media only screen and (max-width: 991px) {\n        ion-content [returns-page] [widget-return] {\n          border: 1px solid #e3e3e3;\n          box-shadow: none;\n          text-align: center;\n          background-color: transparent; } }\n  ion-content [returns-page] [widget-return] p {\n        color: var(--ion-color-darkblack);\n        margin-top: var(--ion-margin-20); }\n  @media only screen and (max-width: 991px) {\n          ion-content [returns-page] [widget-return] p {\n            font-size: var(--ion-font-size-12);\n            margin-top: var(--ion-margin-0); } }\n  ion-content [returns-page] [widget-return] ion-button {\n        font-size: var(--ion-font-size-13);\n        --box-shadow:none;\n        text-transform: Capitalize; }\n  @media only screen and (max-width: 991px) {\n          ion-content [returns-page] [widget-return] ion-button {\n            height: var(--ion-wh-30);\n            font-size: var(--ion-font-size-12); } }\n  ion-content [returns-page] [widget-return] ion-button:hover {\n          opacity: 0.8; }\n  ion-content [returns-page] [returns-process] {\n      margin-top: var(--ion-margin-30); }\n  ion-content [returns-page] [returns-process] p {\n        font-weight: 600;\n        font-size: var(--ion-font-size-16);\n        color: var(--ion-color-darkblack);\n        font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n          ion-content [returns-page] [returns-process] p {\n            font-size: var(--ion-font-size-12);\n            margin-top: var(--ion-margin-10); } }\n  ion-content [returns-page] [returns-process] ion-img {\n        margin: 0 auto;\n        max-width: 235px; }\n  @media only screen and (max-width: 576px) {\n          ion-content [returns-page] [returns-process] ion-img {\n            max-width: 150px; } }\n  ion-content [returns-page] [other-sec] {\n      margin-top: var(--ion-margin-30); }\n  ion-content [returns-page] [other-sec] p {\n        font-size: var(--ion-font-size-14);\n        color: var(--ion-color-darkblack);\n        font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n          ion-content [returns-page] [other-sec] p {\n            font-size: var(--ion-font-size-12); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvcmV0dXJucy1yZXBsYWNlbWVudC9yZXR1cm5zLXJlcGxhY2VtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUVBLGtDQUFhLEVBQUE7RUFDYjtJQUhBO01BS0csa0NBQWMsRUFBQSxFQStIakI7RUE3SEE7SUFQQTtNQVNHLGtDQUFjO01BQ2QscUNBQWlCO01BQ2pCLG9DQUFnQjtNQUNoQixrQ0FBYyxFQUFBLEVBd0hqQjtFQXBJQTtJQWdCQyxrQ0FBa0M7SUFDbEMsd0NBQXdDO0lBQ3hDLDJDQUF1QztJQUN2Qyw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBb0VoQix5QkFBQTtJQXlCQSx3QkFBQTtJQUNDLHFCQUFBO0lBZ0JELG9CQUFBLEVBQXFCO0VBN0dyQjtNQXJCRDtRQXVCRyxnQkFBZ0I7UUFHaEIsOEJBQThCLEVBQUE7UUExQmpDO1VBNkJNLGdDQUErQixFQUFBLEVBQ2hDO0VBOUJMO01BbUNJLGtDQUFrQztNQUNsQyxxQ0FBcUM7TUFDckMsZ0NBQWdDO01BQ2hDLHFDQUFxQztNQUNyQyx5QkFBeUI7TUFDekIsaUJBQWlCO01BQ2pCLCtCQUErQjtNQUMvQixpQ0FBaUMsRUFBQTtFQUNqQztRQTNDSjtVQTZDSyxrQ0FBa0M7VUFDbEMsWUFBVyxFQUFBLEVBRVo7RUFoREo7TUFtREcscUNBQXFDO01BQ3JDLG1DQUFrQztNQUNsQywyQ0FBdUM7TUFDdkMsOEJBQTZCO01BQzdCLGlDQUFpQyxFQUFBO0VBQ2xDO1FBeERGO1VBeURJLHlCQUF5QjtVQUN2QixnQkFBZ0I7VUFDaEIsa0JBQWlCO1VBQ3BCLDZCQUE0QixFQUFBLEVBMkI3QjtFQXZGRjtRQWdFSyxpQ0FBaUM7UUFDcEMsZ0NBQWdDLEVBQUE7RUFDaEM7VUFsRUY7WUFvRUssa0NBQWtDO1lBQ2xDLCtCQUErQixFQUFBLEVBRWhDO0VBdkVKO1FBMEVHLGtDQUFrQztRQUNqQyxpQkFBYTtRQUNmLDBCQUF5QixFQUFBO0VBQ3pCO1VBN0VGO1lBK0VPLHdCQUF3QjtZQUNaLGtDQUFrQyxFQUFBLEVBTWpEO0VBdEZKO1VBb0ZJLFlBQVcsRUFBQTtFQXBGZjtNQTJGVSxnQ0FBZ0MsRUFBQTtFQTNGMUM7UUE2RkUsZ0JBQWdCO1FBQ2hCLGtDQUFrQztRQUNsQyxpQ0FBaUM7UUFDakMscUNBQXFDLEVBQUE7RUFDckM7VUFqR0Y7WUFtR0ssa0NBQWtDO1lBQ2xDLGdDQUFnQyxFQUFBLEVBRW5DO0VBdEdGO1FBeUdNLGNBQWM7UUFDTCxnQkFBZ0IsRUFBQTtFQUM3QjtVQTNHRjtZQTZHTyxnQkFBZ0IsRUFBQSxFQUVyQjtFQS9HRjtNQXFIVSxnQ0FBZ0MsRUFBQTtFQXJIMUM7UUF5SEUsa0NBQWtDO1FBQ2xDLGlDQUFpQztRQUNqQyxxQ0FBcUMsRUFBQTtFQUNwQztVQTVISDtZQThITyxrQ0FBa0MsRUFBQSxFQUV2QyIsImZpbGUiOiJzcmMvYXBwL3JldHVybnMtcmVwbGFjZW1lbnQvcmV0dXJucy1yZXBsYWNlbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgaW9uLWNvbnRlbnRcclxueyAgXHJcblx0LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5KTtcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkxcHgpXHJcblx0e1xyXG5cdCAgIC0tcGFkZGluZy10b3A6dmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0fVx0XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdHtcclxuXHQgICAtLXBhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdCAgIC0tcGFkZGluZy1ib3R0b206dmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0ICAgLS1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdCAgIC0tcGFkZGluZy1lbmQ6dmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0fVxyXG5cdFtyZXR1cm5zLXBhZ2VdXHJcblx0e1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLXZhbHVlLTMwKTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLC4wOCk7XHJcblx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0yMCk7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0e1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcclxuXHRcdCAgIFttb2ItaGVhZF1cclxuXHRcdCAgIHtcclxuXHRcdFx0ICAgIG1hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbi0xMCk7XHJcblx0XHQgICB9XHJcblx0XHR9XHJcblx0XHQgICBoM1xyXG5cdFx0ICAge1xyXG5cdFx0XHQgICAmW3NlY3Rpb24tdGl0bGVdIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcblx0XHRcdFx0XHRmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XHJcblx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctMTIpO1xyXG5cdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdGNvbG9yOnZhciggLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0e1xyXG5cdFx0XHQgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG5cdFx0XHQgICBib3JkZXI6bm9uZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdCAgfVxyXG5cdFx0W3dpZGdldC1yZXR1cm5dXHJcblx0XHR7IGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHQgIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXlmOCk7XHJcblx0XHQgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsLjA4KTtcclxuXHRcdCAgcGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0yMCk7XHJcblx0XHQgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi12YWx1ZS0wKTtcclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHR7XHRib3JkZXI6IDFweCBzb2xpZCAjZTNlM2UzO1xyXG5cdFx0XHQgICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0ICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcblx0XHRcdH1cdFx0ICBcclxuXHRcdCAgcFxyXG5cdFx0ICB7XHJcblx0XHQgICAgY29sb3I6dmFyKCAtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xyXG5cdFx0XHRtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTIwKTtcclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHR7XHJcblx0XHRcdCAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcblx0XHRcdCAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdH1cclxuXHRcdCAgfVxyXG5cdFx0ICBpb24tYnV0dG9uXHJcblx0XHQgIHtcclxuXHRcdCBcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XHJcblx0XHQgICAtLWJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0dGV4dC10cmFuc2Zvcm06Q2FwaXRhbGl6ZTtcclxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ICAgIGhlaWdodDogdmFyKC0taW9uLXdoLTMwKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdCY6aG92ZXJcclxuXHRcdFx0e1xyXG5cdFx0XHQgIG9wYWNpdHk6MC44O1xyXG5cdFx0XHR9XHJcblx0XHQgIH1cclxuXHRcdH1cclxuXHRcdC8qIFJldHVybiBQcm9jZXNzIFN0YXJ0ICovXHJcblx0XHRbcmV0dXJucy1wcm9jZXNzXVxyXG5cdFx0e1xyXG4gICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMzApO1xyXG5cdFx0ICAgIHAge1xyXG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTYpO1xyXG5cdFx0XHRjb2xvcjp2YXIoIC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHJcblx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0e1xyXG5cdFx0XHQgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHQgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTEwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aW9uLWltZ1xyXG5cdFx0e1xyXG5cdFx0XHQgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIzNXB4O1xyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdHtcclxuXHRcdFx0IFx0ICAgbWF4LXdpZHRoOiAxNTBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG4gICAgICAgIH1cclxuXHRcdC8qIFJldHVybiBQcm9jZXNzIEVuZHMgKi9cclxuXHRcdFx0LyogT3RoZXIgSW5mbyBTdGFydCAqL1xyXG5cdFx0W290aGVyLXNlY11cclxuXHRcdHtcclxuICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTMwKTtcclxuXHRcdCBcclxuXHRcdCBwIHtcclxuXHRcdFx0IFxyXG5cdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xyXG5cdFx0XHRjb2xvcjp2YXIoIC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHJcblx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHR7XHJcblx0XHRcdCBcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuICAgICAgICB9XHJcblx0XHQvKiBPdGhlciBJbmZvIEVuZHMgKi9cclxuXHR9XHRcclxufSJdfQ== */"

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