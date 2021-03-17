(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faq-faq-module"],{

/***/ "./src/app/faq/faq.module.ts":
/*!***********************************!*\
  !*** ./src/app/faq/faq.module.ts ***!
  \***********************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq.page */ "./src/app/faq/faq.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]
    }
];
var FaqPageModule = /** @class */ (function () {
    function FaqPageModule() {
    }
    FaqPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
        })
    ], FaqPageModule);
    return FaqPageModule;
}());



/***/ }),

/***/ "./src/app/faq/faq.page.html":
/*!***********************************!*\
  !*** ./src/app/faq/faq.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"darkred\" text-uppercase>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n       FAQ\n    </ion-title>\n  <ion-buttons slot=\"end\" > \n          <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n\t     <ion-buttons slot=\"end\">\n          <ion-icon name=\"pin\"></ion-icon>\n    </ion-buttons>\n<ion-buttons slot=\"end\" > \n\t<ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\t\n\t </ion-buttons>\n  </ion-toolbar>\n      <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n\t              <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n\t              <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n\t              <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n\t              <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t   </div>\n</ion-header>  -->\n<ion-content>\n<div class=\"ion-padding\">\n<div header_height></div>\n<!-- Breadcrumb Start -->\n\t\t<div breadcrumb  class=\"ion-hide-md-down\">\t\t\n\t\t\t\t<div breadcrumb-inner>\n\t\t\t\t\t<ul list-inline list-unstyled>\n\t\t\t\t\t<li><a routerLink=\"/home\">Home</a></li>\n\t\t\t\t\t\t<li class=\"active\">FAQ</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- /.breadcrumb-inner -->\n\t\t</div>\n<!-- Breadcrumb Ends -->\n<div checkout-box>\n\t<ion-card no-margin padding>\n\t<h2 heading-title class=\"ion-hide-md-down\">Frequently Asked Questions</h2>\n\t<!-- <span title-tag class=\"ion-hide-md-down\">Last Updated on November 02, 2019</span> -->\n\t <h4 mob-head text-center text-uppercase  class=\"ion-hide-lg-up\">\n\t   Frequently Asked Questions\n\t </h4>\n\t\t <div panel panel-default *ngFor=\"let faq of faqs; let f_ind = index \">\n\t\t\t <div panel-heading  checkout-head>\n\t\t\t\t<h4>\n\t\t\t\t   <a href=\"javascript:void(0)\" [ngClass]=\"{'active': selectedItem.indexOf('item'+f_ind) >= 0}\"  (click)=\"faqClicked('item'+f_ind)\">\n\t\t\t\t\t  <span>{{f_ind+1}}</span>  {{faq.questions}}\t        \n\t\t\t\t   </a>\n\t\t\t\t</h4>\t\t\t\t\t \n\t\t\t </div>\n\t\t\t <div panel-body [ngClass]=\"{'active': selectedItem.indexOf('item'+f_ind) >= 0}\" [innerHTML]=\"decode(faq.answer)\"></div>\t\t \n\t\t</div>\t \n\t\t<ion-item *ngIf=\"faqs == ''\">\n\t\t\t<p>No faqs added.</p>\n\t\t</ion-item> \t\t\t\t\t\t\t\n\t</ion-card>\n</div>\n</div>\n<app-footer></app-footer>\n</ion-content>"

/***/ }),

/***/ "./src/app/faq/faq.page.scss":
/*!***********************************!*\
  !*** ./src/app/faq/faq.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey); }\n  ion-content [heading-title] {\n    text-align: left;\n    text-transform: none;\n    padding: var(--ion-padding-0) var(--ion-padding-0) var(--ion-padding-15) var(--ion-padding-0);\n    font-weight: bold;\n    font-size: var(--ion-font-size-22);\n    font-family: var(--ion-font-family-2);\n    border-bottom: 1px #e5e5e5 solid;\n    color: var(--ion-color-darkblack3); }\n  ion-content [title-tag] {\n    text-align: left;\n    padding-bottom: var(--ion-padding-30);\n    display: block;\n    font-style: normal;\n    font-size: var(--ion-font-size-14);\n    color: var(--ion-color-darkgrey); }\n  ion-content ion-card {\n    background: var(--ion-color-white);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08); }\n  @media only screen and (max-width: 991px) {\n      ion-content ion-card {\n        padding: var(--ion-padding-0);\n        background: transparent;\n        box-shadow: none; } }\n  ion-content ion-card [panel] [panel-heading][checkout-head] {\n      background: #f5f5f5; }\n  ion-content ion-card [panel] [panel-heading][checkout-head] h4 {\n        margin-top: var(--ion-margin-0); }\n  ion-content ion-card [panel] [panel-heading][checkout-head] h4 a {\n          font-family: var(--ion-font-family-2);\n          color: var(--ion-color-darkblack3);\n          text-transform: uppercase;\n          display: block;\n          margin: var(--ion-margin-0);\n          font-size: var(--ion-font-size-13);\n          font-weight: bold;\n          text-decoration: none; }\n  @media only screen and (max-width: 991px) {\n            ion-content ion-card [panel] [panel-heading][checkout-head] h4 a {\n              padding-right: var(--ion-padding-10);\n              background: var(--ion-color-white); } }\n  ion-content ion-card [panel] [panel-heading][checkout-head] h4 a.active span {\n            background: var(--ion-color-darkred); }\n  @media only screen and (max-width: 991px) {\n            ion-content ion-card [panel] [panel-heading][checkout-head] h4 a {\n              display: flex;\n              align-items: center;\n              font-size: var(--ion-font-size-12); } }\n  ion-content ion-card [panel] [panel-heading][checkout-head] h4 a span {\n            color: var(--ion-color-white);\n            display: inline-block;\n            margin-right: var(--ion-margin-10);\n            padding: var(--ion-padding-15) var(--ion-padding-20);\n            background: #aaaaaa; }\n  @media only screen and (max-width: 991px) {\n              ion-content ion-card [panel] [panel-heading][checkout-head] h4 a span {\n                padding: var(--ion-padding-15) var(--ion-padding-15); } }\n  ion-content ion-card [panel] [panel-body] {\n      display: none;\n      padding: var(--ion-padding-10) var(--ion-padding-0) var(--ion-padding-22);\n      font-family: var(--ion-font-family-2); }\n  ion-content ion-card [panel] [panel-body].active {\n        display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvZmFxL2ZhcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFFQSxrQ0FBYSxFQUFBO0VBRmI7SUFLRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLDZGQUFpRztJQUNqRyxpQkFBaUI7SUFDakIsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQyxnQ0FBZ0M7SUFDaEMsa0NBQWtDLEVBQUE7RUFacEM7SUFlRyxnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGdDQUFnQyxFQUFBO0VBcEJuQztJQXdCTyxrQ0FBaUM7SUFDcEMsMkNBQXVDLEVBQUE7RUFDdEM7TUExQkw7UUE0QkssNkJBQThCO1FBQzlCLHVCQUFzQjtRQUNiLGdCQUFnQixFQUFBLEVBa0U3QjtFQWhHRDtNQXFDSyxtQkFBa0IsRUFBQTtFQXJDdkI7UUF5Q1EsK0JBQThCLEVBQUE7RUF6Q3RDO1VBNENvQixxQ0FBcUM7VUFDaEQsa0NBQWtDO1VBQ2xDLHlCQUF5QjtVQUN6QixjQUFjO1VBQ2QsMkJBQTRCO1VBQzVCLGtDQUFrQztVQUNsQyxpQkFBaUI7VUFDakIscUJBQW9CLEVBQUE7RUFDVTtZQXBEdkM7Y0FzRFUsb0NBQXFDO2NBQ2pDLGtDQUFrQyxFQUFBLEVBMkJ4QztFQWxGUjtZQTZEYSxvQ0FBb0MsRUFBQTtFQUd4QztZQWhFVDtjQWtFYyxhQUFhO2NBQ2hCLG1CQUFtQjtjQUNuQixrQ0FBa0MsRUFBQSxFQWNyQztFQWxGUjtZQXdFUyw2QkFBNkI7WUFDN0IscUJBQXFCO1lBQ3JCLGtDQUFrQztZQUNsQyxvREFBcUQ7WUFDckQsbUJBQWtCLEVBQUE7RUFDaEI7Y0E3RVg7Z0JBK0VVLG9EQUFxRCxFQUFBLEVBRXREO0VBakZUO01BdUZPLGFBQVk7TUFDWix5RUFBMkU7TUFDOUUscUNBQXFDLEVBQUE7RUF6RnpDO1FBMkZRLGNBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZhcS9mYXEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGlvbi1jb250ZW50XHJcbnsgIFxyXG5cdC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZ3JleSk7XHJcblx0W2hlYWRpbmctdGl0bGVdXHJcblx0e1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuXHRcdFx0cGFkZGluZzogIHZhcigtLWlvbi1wYWRkaW5nLTApICB2YXIoLS1pb24tcGFkZGluZy0wKSAgdmFyKC0taW9uLXBhZGRpbmctMTUpICB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0yMik7XHJcblx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCAjZTVlNWU1IHNvbGlkO1xyXG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjazMpO1xyXG4gICAgIH1cclxuXHRbdGl0bGUtdGFnXSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTMwKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyZXkpO1xyXG4gIH1cclxuXHQgaW9uLWNhcmRcclxuXHQgIHsgIFx0ICBcclxuXHRcdCAgICAgIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0ICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLC4wOCk7XHJcblx0XHRcdCAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdHsgIFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAgdmFyKC0taW9uLXBhZGRpbmctMCkgO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5cdFx0XHQgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG5cdFx0XHRcdFx0fVx0XHJcblx0XHRcdCAgW3BhbmVsXVxyXG5cdFx0XHQgIHtcclxuXHRcdFx0XHRcdFtwYW5lbC1oZWFkaW5nXVxyXG5cdFx0XHRcdFx0eyAgICAgJltjaGVja291dC1oZWFkXVxyXG5cdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNmNWY1ZjU7XHJcblx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0IGg0XHJcblx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0ICBtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0IGFcclxuXHRcdFx0XHRcdFx0XHQgeyAgICAgICAgICBcclxuICAgXHRcdFx0XHRcdFx0XHQgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogIHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAgdmFyKC0taW9uLXBhZGRpbmctMTApIDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1x0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCYuYWN0aXZlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgc3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHQgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdCBzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tMTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMjApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6I2FhYWFhYTtcdCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogIHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0xNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCBbcGFuZWwtYm9keV1cclxuXHRcdFx0IHsgICBkaXNwbGF5Om5vbmU7XHJcblx0XHRcdCAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTApICB2YXIoLS1pb24tcGFkZGluZy0wKSAgdmFyKC0taW9uLXBhZGRpbmctMjIpOyAgXHJcblx0XHRcdFx0IGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdCAgJi5hY3RpdmVcclxuXHRcdFx0ICAgeyAgZGlzcGxheTpibG9jaztcclxuXHRcdFx0XHRcdFx0ICBcclxuXHRcdFx0ICAgfVxyXG5cdFx0XHQgfVxyXG5cdCAgfVx0XHJcblx0fVx0IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/faq/faq.page.ts":
/*!*********************************!*\
  !*** ./src/app/faq/faq.page.ts ***!
  \*********************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var FaqPage = /** @class */ (function () {
    function FaqPage(userService, loadingController) {
        this.userService = userService;
        this.loadingController = loadingController;
        this.selectedItem = [];
    }
    FaqPage.prototype.ngOnInit = function () {
    };
    FaqPage.prototype.ionViewDidEnter = function () {
        this.getFaqs();
    };
    FaqPage.prototype.getFaqs = function () {
        var _this = this;
        this.presentLoading();
        this.userService.postData({}, 'faq').subscribe(function (result) {
            console.log(result);
            _this.faqs = result.faq;
            _this.stopLoading();
        }, function (err) {
            _this.stopLoading();
            _this.faqs = [];
        });
    };
    FaqPage.prototype.faqClicked = function (index) {
        if (this.selectedItem.indexOf(index) == -1) {
            this.selectedItem.push(index);
        }
        else {
            this.selectedItem.splice(this.selectedItem.indexOf(index), 1);
        }
    };
    FaqPage.prototype.presentLoading = function () {
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
    FaqPage.prototype.stopLoading = function () {
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
    FaqPage.prototype.decode = function (string) {
        return atob(string);
    };
    FaqPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.page.html */ "./src/app/faq/faq.page.html"),
            styles: [__webpack_require__(/*! ./faq.page.scss */ "./src/app/faq/faq.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], FaqPage);
    return FaqPage;
}());



/***/ })

}]);
//# sourceMappingURL=faq-faq-module.js.map