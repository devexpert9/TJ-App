(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thankyou-thankyou-module"],{

/***/ "./src/app/thankyou/thankyou.module.ts":
/*!*********************************************!*\
  !*** ./src/app/thankyou/thankyou.module.ts ***!
  \*********************************************/
/*! exports provided: ThankyouPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPageModule", function() { return ThankyouPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _thankyou_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./thankyou.page */ "./src/app/thankyou/thankyou.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









var routes = [
    {
        path: '',
        component: _thankyou_page__WEBPACK_IMPORTED_MODULE_7__["ThankyouPage"]
    }
];
var ThankyouPageModule = /** @class */ (function () {
    function ThankyouPageModule() {
    }
    ThankyouPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderPageModule"]
            ],
            declarations: [_thankyou_page__WEBPACK_IMPORTED_MODULE_7__["ThankyouPage"]]
        })
    ], ThankyouPageModule);
    return ThankyouPageModule;
}());



/***/ }),

/***/ "./src/app/thankyou/thankyou.page.html":
/*!*********************************************!*\
  !*** ./src/app/thankyou/thankyou.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n<app-header ></app-header>\n\n<div class=\"ion-padding\">\n<div header_height></div>\n<!-- Breadcrumb Start -->\n\t\t<div breadcrumb  class=\"ion-hide-md-down\">\n\t\t\t\t<div breadcrumb-inner>\n\t\t\t\t\t<ul list-inline list-unstyled style='margin:0 0 15px 0'>\n\t\t\t\t\t    <li style=\"float:left;margin:0 10px 0 0\">\n\t\t\t\t\t    \t<a routerLink=\"/blog\">Home</a>\n\t\t\t\t\t    </li>\n\t\t\t\t\t\t<li class=\"active\">  Thank You</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- /.breadcrumb-inner -->\n\t\t</div>\n\n\t\t<ion-row class=\"single-product\">\n            <ion-col size=\"12\" no-padding>\n                <div thankyou-text style=\"text-align:center;\">\n                    <h3 text class=\"ion-hide-md-down\">Thank You For Your order (#{{order?.rand_order_id}})</h3>\n                    <h3 text class=\"ion-hide-lg-up\">Thank you , your order(#{{trasacId}}) has been placed</h3>\n                    <!-- <p>We will send you an e-mail confirmation shortly.</p> -->\n                </div>\n\n                <div order-summry style=\"padding: 20px 0;text-align: center;\">\n\t\t\t\t\t<ion-card no-margin >\n\t\t\t\t\t\t<div class=\"ion-padding\">\n                            <p><b>{{order?.products?.length}} {{order?.products?.length == 1 ? 'item' : 'items'}} will be shipped to {{order?.address_first_name}} {{order?.address_last_name}}</b> at {{order?.full_address}}, {{order?.address_city}}, {{order?.address_state}}, {{order?.country_name}} {{order?.address_zip_code}}</p>\n                          <p no-margin>Guaranteed delivery: <b>July 20, 2019</b></p>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t</ion-card>\n\t\t\t\t\t<ion-button routerLink=\"/products\" size=\"full\" color=\"darkred\" class=\"ion-margin-top\" style=\"position: initial;width: 18%;height: 45px; margin:0 auto; margin-top:20px;\">\n\t               \t\tContinue Shopping\n\t              \t</ion-button>\n\n\t\t\t\t\t<!-- <ion-row class=\"ion-hide-md-down\" >\n\t\t               \t<ion-col size=\"12\" size-md=\"8\" no-padding>\n\t\t                \t<table class=\"table\">\n\t\t                    <thead>\n\t\t                      <tr>\n\t\t                        <th>Shipping Address</th>\n\t\t                    <th>Payment Method</th>\n\n\t\t                      </tr>\n\t\t                    </thead>\n\t\t                    <tbody>\n\t\t                      <tr>\n\t\t                        <td>Name: {{order?.address_first_name}} {{order?.address_last_name}} <br><br>\n\t\t                        {{order?.full_address}}, {{order?.address_city}}, {{order?.address_state}} <br>{{order?.country_name}} {{order?.address_zip_code}}</td>\n\t\t                        <td>{{order?.payment_method == 'cash' ? 'Cash on delivery' : 'Card Payment'}}</td>\n\t\t                       </tr>\n\n\t\t                    </tbody>\n\t\t                  </table>\n\t\t                </ion-col>\n\t\t             \t<ion-col size=\"12\" size-md=\"4\" main-sec-thank no-padding>\n\t\t\t                <table class=\"table\">\n\t\t\t                <thead>\n\t\t\t                <tr>\n\t\t\t                <th>Product</th>\n\t\t\t\t\t\t\t<th>Variations</th>\n\t\t\t                <th>Quantity</th>\n\t\t\t                <th>Price per item</th>\n\t\t\t                </tr>\n\t\t\t                </thead>\n\t\t\t                <tbody>\n\t\t\t\t                <tr *ngFor=\"let product of order?.order_products_data\">\n\t\t\t\t\t                <td>{{product.product_name}}</td>\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"product.is_variation == 0\">-------</td>\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"!product.is_variation\">-------</td>\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"product.is_variation == 1\">\n\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let variation of product.product_variations\"> {{variation?.name}}: {{variation?.value}}</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t                <td>{{product.product_quantity}}</td>\n\t\t\t\t\t                <td><i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n\t\t\t\t\t                \t<span>{{subtotalPrice(product)}}</span>\n\t\t\t\t\t                \t\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t                </tr>\n\t\t\t\t                <tr>\n\t\t\t\t\t                <td></td>\n\t\t\t\t\t                <td>\n\t\t\t\t\t                \t<div main-sec>\n\t\t\t\t\t                \tTotal: <i class=\"fa fa-usd\" aria-hidden=\"true\"> {{order?.total_amount.toFixed(2)}}\n\t\t\t\t\t                \t</i></div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t                </tr>\n\t\t\t                </tbody>\n\t\t\t                </table>\n\t\t              </ion-col>\n\t             \t</ion-row> -->\n            \t</div>\n         \t</ion-col>\n\t\t</ion-row>\n    <!-- <app-recently-viewed></app-recently-viewed> -->\n<!-- thank you ends -->\n</div>\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/thankyou/thankyou.page.scss":
/*!*********************************************!*\
  !*** ./src/app/thankyou/thankyou.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey); }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0); } }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --background:var(--ion-color-white)!important;\n      --padding-top:var(--ion-padding-0);\n      --padding-bottom:var(--ion-padding-0);\n      --padding-start:var(--ion-padding-0);\n      --padding-end:var(--ion-padding-0); } }\n  ion-content .single-product {\n    /* Thanku You Start */\n    /* Thank You Ends */\n    /* Order Summary Start */\n    /* Order Sumamry Ends */ }\n  @media only screen and (max-width: 991px) {\n      ion-content .single-product {\n        padding: var(--ion-padding-0) var(--ion-padding-15); } }\n  ion-content .single-product [thankyou-text] h3 {\n      font-family: var(--ion-font-family-2); }\n  ion-content .single-product [thankyou-text] h3[text] {\n        color: var(--ion-color-darkblue);\n        font-weight: 700;\n        font-size: var(--ion-font-size-27); }\n  @media only screen and (max-width: 991px) {\n          ion-content .single-product [thankyou-text] h3[text] {\n            font-size: var(--ion-font-size-18); } }\n  ion-content .single-product [thankyou-text] p {\n      font-size: var(--ion-font-size-14);\n      color: var(--ion-color-darkblack);\n      font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n        ion-content .single-product [thankyou-text] p {\n          font-size: var(--ion-font-size-12); } }\n  ion-content .single-product [order-summry] {\n      padding-top: var(--ion-padding-40); }\n  @media only screen and (max-width: 991px) {\n        ion-content .single-product [order-summry] {\n          padding-top: var(--ion-padding-15) !important; } }\n  ion-content .single-product [order-summry] table tr {\n        font-size: var(--ion-font-size-14);\n        color: var(--ion-color-darkblack);\n        font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n          ion-content .single-product [order-summry] table tr {\n            font-size: var(--ion-font-size-12); } }\n  ion-content .single-product [order-summry] table tr th {\n          background: #efefef;\n          padding: var(--ion-padding-13) var(--ion-padding-16);\n          color: var(--ion-color-black);\n          border-bottom: 1px solid var(--ion-color-ltgrey); }\n  @media only screen and (max-width: 991px) {\n            ion-content .single-product [order-summry] table tr th {\n              padding: var(--ion-padding-8); } }\n  ion-content .single-product [order-summry] table tr td {\n          padding: var(--ion-padding-13) var(--ion-padding-16);\n          vertical-align: middle; }\n  @media only screen and (max-width: 991px) {\n            ion-content .single-product [order-summry] table tr td {\n              padding: var(--ion-padding-8) !important; } }\n  ion-content .single-product [order-summry] [main-sec-thank] tr td {\n        border: none;\n        padding: var(--ion-padding-15) var(--ion-padding-15) var(--ion-padding-0); }\n  ion-content .single-product [order-summry] [main-sec-thank] tr td [main-sec] {\n          text-transform: uppercase;\n          font-weight: bold;\n          transition: all linear 0.2s;\n          background: var(--ion-color-darkblue);\n          color: var(--ion-color-white);\n          border: none;\n          font-size: var(--ion-font-size-15);\n          border-radius: var(--ion-value-0);\n          padding: var(--ion-padding-10);\n          font-family: var(--ion-font-family-3);\n          width: 142px;\n          display: inline-block;\n          margin-top: var(--ion-margin-top-10); }\n  @media only screen and (max-width: 991px) {\n            ion-content .single-product [order-summry] [main-sec-thank] tr td [main-sec] {\n              font-size: var(--ion-font-size-12);\n              padding: var(--ion-padding-5); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvdGhhbmt5b3UvdGhhbmt5b3UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUMsa0NBQWEsRUFBQTtFQUNiO0lBSEQ7TUFLSSxrQ0FBYyxFQUFBLEVBeUhqQjtFQXZIRDtJQVBBO01BU0ksNkNBQWE7TUFDYixrQ0FBYztNQUNkLHFDQUFpQjtNQUNqQixvQ0FBZ0I7TUFDaEIsa0NBQWMsRUFBQSxFQWlIakI7RUE5SEQ7SUFzQkcscUJBQUE7SUEyQkEsbUJBQUE7SUFDQSx3QkFBQTtJQTBFQSx1QkFBQSxFQUF3QjtFQTNHM0I7TUFqQkE7UUFtQkssbURBQW9ELEVBQUEsRUEwR3hEO0VBN0hEO01BMEJLLHFDQUFxQyxFQUFBO0VBMUIxQztRQTZCTyxnQ0FBZ0M7UUFDaEMsZ0JBQWdCO1FBQ1Ysa0NBQW1DLEVBQUE7RUFDM0M7VUFoQ0w7WUFrQ1csa0NBQWtDLEVBQUEsRUFFekM7RUFwQ0o7TUF3Q08sa0NBQWtDO01BQy9CLGlDQUFpQztNQUNqQyxxQ0FBcUMsRUFBQTtFQUN2QztRQTNDUjtVQTZDVyxrQ0FBa0MsRUFBQSxFQUV6QztFQS9DSjtNQXFESyxrQ0FBa0MsRUFBQTtFQUNwQztRQXRESDtVQXdESSw2Q0FBNEMsRUFBQSxFQW1FNUM7RUEzSEo7UUE2RGtCLGtDQUFrQztRQUM1QyxpQ0FBaUM7UUFDakMscUNBQXFDLEVBQUE7RUFDbkM7VUFoRVY7WUFrRVMsa0NBQWtDLEVBQUEsRUF3QnJDO0VBMUZOO1VBdUVjLG1CQUFtQjtVQUNKLG9EQUFxRDtVQUNyRCw2QkFBNkI7VUFDbEQsZ0RBQWdELEVBQUE7RUFDOUM7WUEzRVY7Y0E2RVcsNkJBQTZCLEVBQUEsRUFHaEM7RUFoRlI7VUFtRmUsb0RBQXFEO1VBQzNELHNCQUFxQixFQUFBO0VBQ3JCO1lBckZUO2NBdUZXLHdDQUF1QyxFQUFBLEVBRTFDO0VBekZSO1FBa0dNLFlBQVc7UUFDVix5RUFBNEUsRUFBQTtFQW5HbkY7VUFzR1EseUJBQXlCO1VBQ3pCLGlCQUFpQjtVQUNqQiwyQkFBMkI7VUFDM0IscUNBQXVDO1VBQ3ZDLDZCQUE0QjtVQUM1QixZQUFZO1VBQ1osa0NBQWtDO1VBQ2xDLGlDQUFpQztVQUNqQyw4QkFBOEI7VUFDN0IscUNBQXFDO1VBQ3RDLFlBQVk7VUFDWixxQkFBcUI7VUFDckIsb0NBQW9DLEVBQUE7RUFDbEM7WUFuSFY7Y0FxSFUsa0NBQWtDO2NBQUUsNkJBQTZCLEVBQUEsRUFFbEUiLCJmaWxlIjoic3JjL2FwcC90aGFua3lvdS90aGFua3lvdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50XG57ICBcblx0LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5KTtcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxuXHR7XG5cdCAgIC0tcGFkZGluZy10b3A6dmFyKC0taW9uLXBhZGRpbmctMCk7XG5cdH1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0e1xuXHQgICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXdoaXRlKSFpbXBvcnRhbnQ7XG5cdCAgIC0tcGFkZGluZy10b3A6dmFyKC0taW9uLXBhZGRpbmctMCk7XG5cdCAgIC0tcGFkZGluZy1ib3R0b206dmFyKC0taW9uLXBhZGRpbmctMCk7XG5cdCAgIC0tcGFkZGluZy1zdGFydDp2YXIoLS1pb24tcGFkZGluZy0wKTtcblx0ICAgLS1wYWRkaW5nLWVuZDp2YXIoLS1pb24tcGFkZGluZy0wKTtcblx0fVxuLnNpbmdsZS1wcm9kdWN0XG57ICBcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcbntcblx0ICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApICB2YXIoLS1pb24tcGFkZGluZy0xNSk7XG5cbn1cbiAgIC8qIFRoYW5rdSBZb3UgU3RhcnQgKi9cbiAgIFt0aGFua3lvdS10ZXh0XVxuICAge1xuICAgICAgaDNcblx0ICB7IGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdCAgICAgJlt0ZXh0XVxuXHRcdCB7XG5cdFx0ICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibHVlKTtcblx0XHQgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoIC0taW9uLWZvbnQtc2l6ZS0yNyk7XG5cdFx0XHQgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0XHRcdCAgIHtcblx0XHRcdFx0XHRcdFx0ICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xOCk7XG5cdFx0XHRcdFx0XHQgICB9XG5cdFx0IH1cblx0ICB9XG5cdCAgcFxuXHQgIHtcblx0ICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0XHQgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0XHRcdFx0XHQgICB7XG5cdFx0XHRcdFx0XHRcdCAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xuXHRcdFx0XHRcdFx0ICAgfVxuXHQgIH1cbiAgIH1cbiAgIC8qIFRoYW5rIFlvdSBFbmRzICovXG4gICAvKiBPcmRlciBTdW1tYXJ5IFN0YXJ0ICovXG4gICBbb3JkZXItc3VtbXJ5XVxuICAge1xuXHQgICAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLTQwKTtcblx0XHQgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdCAgIHtcblx0XHRcdFx0cGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLTE1KSFpbXBvcnRhbnQ7XG5cdFx0ICAgfVxuXHRcdCAgdGFibGVcblx0XHQgIHtcblx0XHRcdCAgdHJcblx0XHRcdCAge1x0ICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdFx0XHRcdFx0ICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG5cdFx0XHRcdFx0XHQgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHRcdFx0XHQgIFx0IEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0XHRcdFx0ICAge1xuXHRcdFx0XHRcdFx0XHRcdCBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyAgIFxuXHRcdFx0XHRcdFx0XHRcdCAgIFxuXHRcdFx0XHRcdFx0XHQgICB9XG5cdFx0XHRcdCAgIHRoXG5cdFx0XHRcdCAgIHtcblx0XHRcdFx0XHQgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xMykgIHZhcigtLWlvbi1wYWRkaW5nLTE2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XG5cdFx0XHRcdFx0XHRcdCBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWx0Z3JleSk7XG5cdFx0XHRcdFx0XHRcdCAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0XHRcdCAgIHtcblx0XHRcdFx0XHRcdFx0ICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTgpO1xuXHRcdFx0XHRcdFx0ICAgfVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0ICAgfVxuXHRcdFx0XHQgICB0ZFxuXHRcdFx0XHQgICB7XG5cdFx0XHRcdFx0ICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEzKSAgdmFyKC0taW9uLXBhZGRpbmctMTYpO1xuXHRcdFx0XHRcdFx0ICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuXHRcdFx0XHRcdFx0ICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHRcdFx0ICAge1xuXHRcdFx0XHRcdFx0XHQgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctOCkhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0ICAgfVxuXHRcdFx0XHQgICB9XG5cdFx0XHQgIH1cblx0XHQgIH1cblx0XHQgIFttYWluLXNlYy10aGFua11cblx0XHQgIHtcblx0XHRcdCAgIHRyXG5cdFx0XHQgIHtcdCAgIFx0XG5cdFx0XHRcdCAgIHRkXG5cdFx0XHRcdCAgIHtcblx0XHRcdFx0XHQgYm9yZGVyOm5vbmU7XG5cdFx0XHRcdFx0ICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSkgICB2YXIoLS1pb24tcGFkZGluZy0xNSkgIHZhcigtLWlvbi1wYWRkaW5nLTApIDtcblx0XHRcdFx0XHRcdFx0W21haW4tc2VjXSBcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjJzO1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhciggIC0taW9uLWNvbG9yLWRhcmtibHVlKTtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTUpO1xuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS0wKTtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xMCk7XG5cdFx0XHRcdFx0XHRcdFx0IGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMyk7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDE0MnB4O1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLXRvcC0xMCk7XG5cdFx0XHRcdFx0XHRcdFx0ICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0XHRcdFx0XHRcdCAgIHtcblx0XHRcdFx0XHRcdFx0XHQgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy01KTtcblx0XHRcdFx0XHRcdFx0ICAgfVxuXHRcdFx0XHRcdFx0ICB9XG5cdFx0XHRcdCAgIH1cblx0XHRcdCAgfVxuXHRcdCAgfVxuICAgfVxuICAgLyogT3JkZXIgU3VtYW1yeSBFbmRzICovXG59XG59XHQiXX0= */"

/***/ }),

/***/ "./src/app/thankyou/thankyou.page.ts":
/*!*******************************************!*\
  !*** ./src/app/thankyou/thankyou.page.ts ***!
  \*******************************************/
/*! exports provided: ThankyouPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPage", function() { return ThankyouPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ThankyouPage = /** @class */ (function () {
    function ThankyouPage(activatedRoute, loadingController, userService) {
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.userService = userService;
        this.buttonClickeddrop = false;
        this.errors = ['', null, undefined];
        this.trasacId = localStorage.getItem('transaction_id');
    }
    ThankyouPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.presentLoading();
        this.trasacId = localStorage.getItem('transaction_id');
        this.order_id = this.activatedRoute.snapshot.paramMap.get('order_id');
        // this.getOrderDetails();
        this.userService.postData({ order_id: this.order_id }, 'getOrderDetails').subscribe(function (result) {
            console.log(result);
            _this.order = result.orders;
            if (typeof (result.orders.order_products_data) == 'string') {
                _this.order.order_products_data = JSON.parse(result.orders.order_products_data);
            }
            for (var i = 0; i < result.orders.order_products_data.length; i++) {
                if (typeof (_this.order.order_products_data[i].product_variations) == 'string') {
                    _this.order.order_products_data[i].product_variations = JSON.parse(_this.order.order_products_data[i].product_variations);
                }
            }
            console.log(_this.order);
            if (typeof (_this.order.total_amount) == "string") {
                _this.order.total_amount = Number(_this.order.total_amount);
            }
            _this.stopLoading();
        }, function (err) {
            _this.stopLoading();
            _this.order = [];
        });
    };
    ThankyouPage.prototype.ngOnInit = function () {
    };
    ThankyouPage.prototype.onButtonClickdrop = function () {
        this.buttonClickeddrop = !this.buttonClickeddrop;
    };
    ThankyouPage.prototype.subtotalPrice = function (item) {
        if (item.is_variation == 1) {
            return Number(item.product_price);
        }
        else if (Number(item.wholesale_price) != 0 && Number(item.product_quantity) >= Number(item.wholesale_products) && this.errors.indexOf(item.wholesale_products) == -1) {
            return item.wholesale_price;
        }
        else {
            if (this.errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price) {
                if (item.discount_per_piece != null) {
                    if (item.discount_type == '%') {
                        return (Number(item.product_sale_price) - ((Number(item.discount_per_piece) / Number(item.product_sale_price)) * 100)).toFixed(2);
                    }
                    else {
                        return (Number(item.product_sale_price) - Number(item.discount_per_piece)).toFixed(2);
                    }
                }
                else {
                    return item.product_sale_price;
                }
            }
            else {
                if (item.discount_per_piece != null) {
                    if (item.discount_type == '%') {
                        return (Number(item.product_purchase_price) - ((Number(item.discount_per_piece) / Number(item.product_purchase_price)) * 100)).toFixed(2);
                    }
                    else {
                        return (Number(item.product_purchase_price) - Number(item.discount_per_piece)).toFixed(2);
                    }
                }
                else {
                    return item.product_purchase_price;
                }
            }
        }
    };
    ;
    ThankyouPage.prototype.getOrderDetails = function () {
        this.presentLoading();
    };
    ThankyouPage.prototype.presentLoading = function () {
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
    ThankyouPage.prototype.stopLoading = function () {
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
    ThankyouPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thankyou',
            template: __webpack_require__(/*! ./thankyou.page.html */ "./src/app/thankyou/thankyou.page.html"),
            styles: [__webpack_require__(/*! ./thankyou.page.scss */ "./src/app/thankyou/thankyou.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ThankyouPage);
    return ThankyouPage;
}());



/***/ })

}]);
//# sourceMappingURL=thankyou-thankyou-module.js.map