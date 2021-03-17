(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wishlist-checkout-wishlist-checkout-module"],{

/***/ "./src/app/wishlist-checkout/wishlist-checkout.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/wishlist-checkout/wishlist-checkout.module.ts ***!
  \***************************************************************/
/*! exports provided: WishlistCheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistCheckoutPageModule", function() { return WishlistCheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wishlist_checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist-checkout.page */ "./src/app/wishlist-checkout/wishlist-checkout.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _wishlist_checkout_page__WEBPACK_IMPORTED_MODULE_6__["WishlistCheckoutPage"]
    }
];
var WishlistCheckoutPageModule = /** @class */ (function () {
    function WishlistCheckoutPageModule() {
    }
    WishlistCheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_wishlist_checkout_page__WEBPACK_IMPORTED_MODULE_6__["WishlistCheckoutPage"]]
        })
    ], WishlistCheckoutPageModule);
    return WishlistCheckoutPageModule;
}());



/***/ }),

/***/ "./src/app/wishlist-checkout/wishlist-checkout.page.html":
/*!***************************************************************!*\
  !*** ./src/app/wishlist-checkout/wishlist-checkout.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n<div class=\"ion-padding\">\n<div header_height></div>\n<!-- Breadcrumb Start -->\n\t\t<div breadcrumb  class=\"ion-hide-md-down\">\t\t\n\t\t\t\t<div breadcrumb-inner>\n\t\t\t\t\t<ul list-inline list-unstyled>\n\t\t\t\t\t\t<li><a routerLink=\"/home\">Home</a></li>\n\t\t\t\t\t\t<li class=\"active\">Checkout</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- /.breadcrumb-inner -->\n\t\t</div>\n<!-- Breadcrumb Ends -->\n<!---Checkout Section Start -->\n\t<div checkout-box>\n\t\t   <ion-row *ngIf=\"total_payable_price == 0 && is_loaded == true\">\n\t\t   \t\t<ion-item>No items in cart to checkout.</ion-item>\n\t\t   </ion-row>\n\t\t   <ion-row >\n\t\t     <ion-col size-md=\"8\" size-sm=\"12\" size=\"12\">\n\t\t\t\t <ion-card panel panel-default no-margin padding >\n\t\t\t     \t <div panel-heading  checkout-head>\n\t\t\t\t\t    <h4>\n\t\t\t\t\t\t   <a href=\"javascript:void(0)\"  >\n\t\t\t\t\t\t      <span><i class=\"fa fa-file-text\" aria-hidden=\"true\"></i></span>  Billing Address\n\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t</h4>\t\t\t\t\t \n\t\t\t\t\t </div>\n\t\t\t\t\t <div class=\"pad_10\" panel-body >\n\t\t\t     \t \t{{a_first_name}} {{a_last_name}}<br>\n\t\t\t     \t \t{{a_address}}, {{a_city}}, {{a_state}}, {{a_zip}} (\n\t\t\t     \t \t{{a_country}})\n\t\t\t     \t \t<br>\n\t\t\t     \t \tcontact:- {{a_phone_number}}\n\t\t\t     \t \t\n\t\t\t     \t </div>\n\t\t     \t </ion-card>\n\t\t\t  </ion-col>\n\t\t    <ion-col size-md=\"4\" size-sm=\"12\" size=\"12\">\n\t\t\t    <div checkout-progress-sidebar>\n\t\t\t\t   <ion-card  panel panel-default  no-margin padding *ngIf=\"is_wholesale == true\">\n\t\t\t\t      <div panel-heading>\n\t\t\t\t\t     <h4  unicase-checkout-title text-uppercase>\n\t\t\t\t\t\t     Discount Coupon\n\t\t\t\t\t\t </h4>\t\t\t\t\t  \n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div price_single_cost *ngIf=\"is_coupon_applied == false\">\n\t\t\t\t\t    <p>Enter your coupon code if you have one..</p>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<input [(ngModel)]=\"coupon_code\" type=\"text\" class=\"form-control unicase-form-control text-input\" placeholder=\"Your Coupon..\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"clearfix\">\n\t\t\t\t\t\t\t<ion-button color=\"darkred\" (click)=\"applyCoupon()\">\n\t\t\t\t\t\t\t\tAPPLY COUPON\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div price_single_cost *ngIf=\"is_coupon_applied == true\">\n\t\t\t\t\t    <p>Coupon {{coupon_code}} applied \n\t\t\t\t\t\t<ion-button icon action-icons del-icon (click)=\"removeCoupon()\">\n\t\t\t\t\t\t\t<ion-icon name=\"close\"></ion-icon>\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t  </div>\n\t\t\t\t   </ion-card>\n\t\t\t\t   <ion-card panel panel-default  no-margin padding>\n\t\t\t\t      <div panel-heading>\n\t\t\t\t\t     <h4 unicase-checkout-title text-uppercase>\n\t\t\t\t\t\t     Your order\t\n\t\t\t\t\t\t </h4> \t\t\t\t\t  \n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div price_single_cost>\n\t\t\t\t\t    <h4>Subtotal <span float-right>${{total_payable_price}}</span></h4>\n\t\t\t\t\t    <h4>Shipping  <span float-right>$0</span></h4>\n\t\t\t\t\t    <h4 *ngIf=\"is_coupon_applied == true\">Coupon applied <span float-right>-${{coupon_amount}}</span></h4>\n\t\t\t\t\t    <h3>Total Cost <span float-right>${{grand_total}}</span></h3>\n\t\t\t\t\t  </div>\n\t\t\t\t   </ion-card >\t\t   \n\t\t\t\t  <ion-card  panel panel-default  no-margin padding>\n\t\t\t\t      <div panel-heading>\n\t\t\t\t\t     <h4  unicase-checkout-title text-uppercase>\n\t\t\t\t\t\t     Payment Information\n\t\t\t\t\t\t </h4>\t\t\t\t\t  \n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div price_single_cost payment-info style=\"margin-left: 7%;\">\n\t\t\t\t\t       <!-- <p  title-tag-line>Register with us for future convenience:</p> -->\n\t\t\t\t\t      \n\t\t\t\t\t\t\t<div class=\"radio radio-checkout-unicase\">  \n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<input id=\"pay1\" type=\"radio\" name=\"pay_type\" value=\"1\"  [ngClass]=\"{'active': payment_method === 'paypal'}\"  (click)=\"payment_method = 'paypal';\">  \n\t\t\t\t\t\t\t\t\t<label class=\"radio-button\" for=\"pay1\">Paypal</label>  \n\t\t\t\t\t\t\t\t\t  <br>\n\t\t\t\t\t\t\t\t\t<input checked id=\"pay2\" type=\"radio\" name=\"pay_type\" value=\"2\"  [ngClass]=\"{'active': payment_method === 'cash'}\"  (click)=\"cashClicked()\">  \n\t\t\t\t\t\t\t\t\t<label class=\"radio-button\" for=\"pay2\">Cash on Delivery</label> \n\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t</div>\n                                   \t\t\t\t\t\t\t \t\t\t\t\t\t\t\n\t\t\t\t\t  </div>\n\t\t\t\t\t  \t<div *ngIf=\"is_paypal_web_enabled == true\" id=\"paypal-button-container\"></div>\n\t\t\t\t\t   <ion-button *ngIf=\"is_paypal_web_enabled != true\" color=\"darkred\" (click)=\"finalCheckout()\" >\n\t\t\t\t\t\t Proceed To Checkout\n\t\t\t\t\t   </ion-button>\n\t\t\t\t   </ion-card >\t\n\t\t\t\t    \n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t   </ion-row>\t\n\n\t</div>\n</div>\n<!---Checkout Section Ends -->\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/wishlist-checkout/wishlist-checkout.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/wishlist-checkout/wishlist-checkout.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey);\n  /* checkout section start */\n  /* checkout section ends */ }\n  ion-content .pad_10 {\n    padding: 10px; }\n  ion-content ion-card[panel] {\n    background: #f5f5f5; }\n  ion-content ion-card[panel] a {\n      font-family: var(--ion-font-family-2);\n      color: var(--ion-color-darkblack3);\n      text-transform: uppercase;\n      display: block;\n      margin: var(--ion-margin-0);\n      font-size: var(--ion-font-size-13);\n      font-weight: bold;\n      text-decoration: none; }\n  ion-content ion-card[panel] a span {\n        color: var(--ion-color-white);\n        display: inline-block;\n        margin-right: var(--ion-margin-10);\n        padding: var(--ion-padding-15) var(--ion-padding-20);\n        background: #aaaaaa; }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-8)!important;\n      --padding-bottom:var(--ion-padding-8)!important;\n      --padding-start:var(--ion-padding-8)!important;\n      --padding-end:var(--ion-padding-8)!important; } }\n  ion-content [checkout-box] {\n    /* Left Section Start */\n    /* Right Section Start */\n    /* Right Section Ends */ }\n  @media only screen and (max-width: 991px) {\n      ion-content [checkout-box] ion-card {\n        padding: var(--ion-padding-0); } }\n  ion-content [checkout-box] [checkout-progress-sidebar] ion-card {\n      margin-bottom: var(--ion-margin-20); }\n  @media only screen and (max-width: 991px) {\n        ion-content [checkout-box] [checkout-progress-sidebar] ion-card {\n          margin-bottom: var(--ion-margin-10);\n          padding-bottom: var(--ion-padding-10); } }\n  ion-content [checkout-box] [checkout-progress-sidebar] ion-card [panel-heading] h4[unicase-checkout-title] {\n        margin: var(--ion-margin-0);\n        font-size: var(--ion-font-size-14);\n        font-weight: bold;\n        border-bottom: 1px #e5e5e5 solid;\n        padding-bottom: var(--ion-padding-14);\n        margin-bottom: var(--ion-margin-10);\n        font-family: var(--ion-font-family-2);\n        color: var(--ion-color-darkblack); }\n  @media only screen and (max-width: 991px) {\n          ion-content [checkout-box] [checkout-progress-sidebar] ion-card [panel-heading] h4[unicase-checkout-title] {\n            padding: var(--ion-padding-15);\n            margin-bottom: var(--ion-margin-0); } }\n  ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] {\n        font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n          ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost][payment-info] {\n            padding: var(--ion-padding-15) var(--ion-padding-15) var(--ion-padding-0); }\n            ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost][payment-info] [checks-lft] ion-item {\n              border-bottom: 1px solid #eee; } }\n  ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] {\n          background: var(--ion-color-greyf8);\n          padding: var(--ion-padding-15) var(--ion-padding-15) var(--ion-padding-15);\n          margin-bottom: var(--ion-margin-25);\n          display: none;\n          border: 1px solid #eee; }\n  @media only screen and (max-width: 991px) {\n            ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] {\n              background: var(--ion-color-white);\n              padding: var(--ion-padding-0);\n              border: none; } }\n  ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] ion-input, ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] ion-select {\n            height: var(--ion-wh-36) !important; }\n  ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] ion-select {\n            padding: var(--ion-padding-7) var(--ion-padding-10) !important; }\n  @media only screen and (max-width: 991px) {\n              ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] ion-select {\n                border: none; } }\n  ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] h2 {\n            color: var(--ion-color-darkblack);\n            border: none;\n            font-weight: 700;\n            font-size: var(--ion-font-size-18);\n            margin-bottom: var(--ion-margin-15);\n            margin-top: var(--ion-margin-0);\n            border-bottom: 1px solid #eee;\n            padding-bottom: var(--ion-padding-15); }\n  @media only screen and (max-width: 991px) {\n              ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] h2 {\n                font-size: var(--ion-font-size-14); } }\n  ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] [card-psys] img {\n            width: 200px; }\n  ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] [w-50s] {\n            width: 48%;\n            display: inline-block; }\n  ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc].active {\n            display: block; }\n  ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] h4 {\n          font-size: var(--ion-font-size-14);\n          font-weight: normal;\n          color: #797979;\n          border-bottom: 1px solid #eee;\n          padding: var(--ion-padding-12) var(--ion-padding-10);\n          margin-bottom: var(--ion-margin-0); }\n  @media only screen and (max-width: 991px) {\n            ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] h4 {\n              font-size: var(--ion-font-size-14);\n              padding: var(--ion-padding-12) var(--ion-padding-15);\n              margin-top: var(--ion-margin-0); } }\n  ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] h3 {\n          font-size: var(--ion-font-size-18);\n          font-weight: bold;\n          color: var(--ion-color-darkblack4);\n          text-transform: uppercase;\n          margin-bottom: var(--ion-margin-10);\n          margin-top: var(--ion-margin-14); }\n  @media only screen and (max-width: 991px) {\n            ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] h3 {\n              font-size: var(--ion-font-size-14);\n              padding: var(--ion-padding-0) var(--ion-padding-15); } }\n  ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] p {\n          font-size: var(--ion-font-size-14);\n          color: var(--ion-color-darkblack);\n          font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n          ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] .radio-checkout-unicase ion-label {\n            font-size: var(--ion-font-size-14); } }\n  ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] .radio-checkout-unicase input[type=\"radio\"] {\n          margin-left: var(--ion-margin-0); }\n  ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] .radio-checkout-unicase .radio-button {\n          margin-bottom: var(--ion-margin-10);\n          font-size: var(--ion-font-size-14);\n          color: var(--ion-color-darkblack);\n          font-family: var(--ion-font-family-2); }\n  ion-content [checkout-box] ion-card {\n      background: var(--ion-color-white);\n      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n      /* Left Section Ends */ }\n  ion-content [checkout-box] ion-card [panel-heading][checkout-head] {\n        background: #f5f5f5; }\n  ion-content [checkout-box] ion-card [panel-heading][checkout-head] h4 {\n          margin-top: var(--ion-margin-0); }\n  @media only screen and (max-width: 991px) {\n            ion-content [checkout-box] ion-card [panel-heading][checkout-head] h4 {\n              margin-bottom: var(--ion-margin-0); } }\n  ion-content [checkout-box] ion-card [panel-heading][checkout-head] h4 a {\n            font-family: var(--ion-font-family-2);\n            color: var(--ion-color-darkblack3);\n            text-transform: uppercase;\n            display: block;\n            margin: var(--ion-margin-0);\n            font-size: var(--ion-font-size-13);\n            font-weight: bold;\n            text-decoration: none; }\n  ion-content [checkout-box] ion-card [panel-heading][checkout-head] h4 a.selected span {\n              background: var(--ion-color-darkred); }\n  ion-content [checkout-box] ion-card [panel-heading][checkout-head] h4 a span {\n              color: var(--ion-color-white);\n              display: inline-block;\n              margin-right: var(--ion-margin-10);\n              padding: var(--ion-padding-15) var(--ion-padding-20);\n              background: #aaaaaa; }\n  @media only screen and (max-width: 991px) {\n        ion-content [checkout-box] ion-card [panel-body] .register-form ion-col {\n          padding-left: var(--ion-padding-0);\n          padding-right: var(--ion-padding-0); } }\n  ion-content [checkout-box] ion-card [panel-body] .register-form [checkbox] {\n        display: block; }\n  @media only screen and (max-width: 991px) {\n          ion-content [checkout-box] ion-card [panel-body] .register-form [checkbox] {\n            padding-left: var(--ion-padding-15);\n            padding-right: var(--ion-padding-15); } }\n  ion-content [checkout-box] ion-card [panel-body] .register-form [checkbox] label, ion-content [checkout-box] ion-card [panel-body] .register-form [checkbox] ion-label {\n          font-size: var(--ion-font-size-14);\n          font-family: var(--ion-font-family-2);\n          font-weight: normal;\n          color: var(--ion-color-darkblack); }\n  ion-content [checkout-box] ion-card [form-group] {\n        --background: transparent!important;\n        margin-bottom: var(--ion-margin-10); }\n  @media only screen and (max-width: 991px) {\n          ion-content [checkout-box] ion-card [form-group] {\n            margin-bottom: var(--ion-margin-0); } }\n  ion-content [checkout-box] ion-card [form-group] ion-label {\n          display: inline-block;\n          max-width: 100%;\n          margin-bottom: var(--ion-margin-5);\n          font-weight: 700;\n          color: var(--ion-color-darkblack);\n          font-size: var(--ion-font-size-14);\n          font-family: var(--ion-font-family-2);\n          -webkit-transform: scale(1);\n                  transform: scale(1); }\n  @media only screen and (max-width: 991px) {\n            ion-content [checkout-box] ion-card [form-group] ion-label {\n              margin-bottom: var(--ion-margin-0);\n              font-weight: normal;\n              display: block; } }\n  ion-content [checkout-box] ion-card [form-group] ion-input, ion-content [checkout-box] ion-card [form-group] ion-select {\n          border-radius: var(--ion-value-3);\n          box-shadow: none;\n          font-size: var(--ion-font-size-14);\n          border: 1px solid #eee;\n          background: var(--ion-color-white);\n          height: var(--ion-wh-42) !important;\n          padding: var(--ion-padding-10) var(--ion-padding-10) !important;\n          font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n            ion-content [checkout-box] ion-card [form-group] ion-input, ion-content [checkout-box] ion-card [form-group] ion-select {\n              background: transparent;\n              height: auto;\n              border-radius: var(--ion-value-0);\n              border-width: var(--ion-value-0) var(--ion-value-0) 1px var(--ion-value-0);\n              /*padding:  inherit!important; */ } }\n  ion-content [checkout-box] ion-button {\n      font-family: var(--ion-font-family-2);\n      --border-radius:0px;\n      --box-shadow:none; }\n  ion-content [checkout-box] ion-button:hover {\n        opacity: 0.8; }\n  @media only screen and (max-width: 991px) {\n        ion-content [checkout-box] ion-button {\n          font-size: var(--ion-font-size-14);\n          margin-left: var(--ion-margin-15); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC93aXNobGlzdC1jaGVja291dC93aXNobGlzdC1jaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUEwQkEsa0NBQWE7RUFRYiwyQkFBQTtFQXdUQSwwQkFBQSxFQUEyQjtFQTFWM0I7SUFHQyxhQUFhLEVBQUE7RUFIZDtJQU9DLG1CQUFtQixFQUFBO0VBUHBCO01BU0UscUNBQXFDO01BQ2xDLGtDQUFrQztNQUNsQyx5QkFBeUI7TUFDekIsY0FBYztNQUNkLDJCQUEyQjtNQUMzQixrQ0FBa0M7TUFDbEMsaUJBQWlCO01BQ2pCLHFCQUFxQixFQUFBO0VBaEIxQjtRQWtCUyw2QkFBNkI7UUFDaEMscUJBQXFCO1FBQ3JCLGtDQUFrQztRQUNsQyxvREFBb0Q7UUFDcEQsbUJBQW1CLEVBQUE7RUFLdkI7SUEzQkY7TUE2QkssNENBQWM7TUFDZiwrQ0FBaUI7TUFDakIsOENBQWdCO01BQ2hCLDRDQUFjLEVBQUEsRUE0VGpCO0VBNVZEO0lBcUNBLHVCQUFBO0lBUUEsd0JBQUE7SUE4SkEsdUJBQUEsRUFBd0I7RUFuS3RCO01BeENGO1FBMENHLDZCQUE0QixFQUFBLEVBRTlCO0VBNUNEO01BaURJLG1DQUFtQyxFQUFBO0VBQ3ZDO1FBbERBO1VBb0RDLG1DQUFtQztVQUNuQyxxQ0FBcUMsRUFBQSxFQW1KbkM7RUF4TUg7UUE0RFcsMkJBQTJCO1FBQ2pDLGtDQUFrQztRQUNsQyxpQkFBaUI7UUFDakIsZ0NBQWdDO1FBQ2hDLHFDQUFzQztRQUN0QyxtQ0FBa0M7UUFDbEMscUNBQXFDO1FBQ3BDLGlDQUFpQyxFQUFBO0VBQy9CO1VBcEVSO1lBc0VPLDhCQUErQjtZQUMvQixrQ0FBa0MsRUFBQSxFQUVuQztFQXpFTjtRQTZFTyxxQ0FBcUMsRUFBQTtFQUd4QztVQWhGSjtZQWtGSSx5RUFBMkUsRUFBQTtZQWxGL0U7Y0F1RkssNkJBQTRCLEVBQUEsRUFDNUI7RUF4Rkw7VUE4RlMsbUNBQW9DO1VBQ3pDLDBFQUEwRTtVQU0xRSxtQ0FBbUM7VUFDbEMsYUFBWTtVQUFLLHNCQUFzQixFQUFBO0VBTnhDO1lBaEdKO2NBa0dNLGtDQUFtQztjQUNyQyw2QkFBNkI7Y0FBQyxZQUFXLEVBQUEsRUE0Q3pDO0VBL0lKO1lBd0dRLG1DQUFrQyxFQUFBO0VBeEcxQztZQTJHSyw4REFBOEQsRUFBQTtFQUM5RDtjQTVHTDtnQkE4R1UsWUFBWSxFQUFBLEVBRWhCO0VBaEhOO1lBa0hXLGlDQUFpQztZQUNuQyxZQUFZO1lBQ2YsZ0JBQWdCO1lBQ2hCLGtDQUFrQztZQUNsQyxtQ0FBbUM7WUFDbkMsK0JBQStCO1lBQy9CLDZCQUE2QjtZQUM3QixxQ0FBcUMsRUFBQTtFQUNyQztjQTFITjtnQkEySFcsa0NBQWtDLEVBQUEsRUFJeEM7RUEvSEw7WUFtSVMsWUFBWSxFQUFBO0VBbklyQjtZQXVJTSxVQUFVO1lBQ1YscUJBQXFCLEVBQUE7RUF4STNCO1lBNklNLGNBQWEsRUFBQTtFQTdJbkI7VUFrSm9CLGtDQUFrQztVQUNqRCxtQkFBbUI7VUFDbkIsY0FBYztVQUNkLDZCQUE2QjtVQUM3QixvREFBb0Q7VUFDcEQsa0NBQWtDLEVBQUE7RUFDbEM7WUF4Skw7Y0F5SlMsa0NBQWtDO2NBQ2xDLG9EQUFvRDtjQUFLLCtCQUErQixFQUFBLEVBRTdGO0VBNUpKO1VBZ0tVLGtDQUFrQztVQUN4QyxpQkFBaUI7VUFDakIsa0NBQWtDO1VBQ2xDLHlCQUF5QjtVQUN6QixtQ0FBbUM7VUFDbkMsZ0NBQWdDLEVBQUE7RUFDaEM7WUF0S0o7Y0F1S1Msa0NBQWtDO2NBQ2xDLG1EQUFtRCxFQUFBLEVBR3pEO0VBM0tIO1VBOEtTLGtDQUFrQztVQUN2QyxpQ0FBaUM7VUFDaEMscUNBQXFDLEVBQUE7RUFNdEM7VUF0TEo7WUF1TFMsa0NBQWtDLEVBQUEsRUFFckM7RUF6TE47VUE0TFUsZ0NBQStCLEVBQUE7RUE1THpDO1VBaU1tQixtQ0FBbUM7VUFDbkMsa0NBQWtDO1VBQzlDLGlDQUFpQztVQUNoQyxxQ0FBcUMsRUFBQTtFQXBNN0M7TUE2TUssa0NBQWlDO01BQy9CLDJDQUF1QztNQXFIOUMsc0JBQUEsRUFBdUI7RUFuVXZCO1FBa05LLG1CQUFrQixFQUFBO0VBbE52QjtVQXNOUSwrQkFBOEIsRUFBQTtFQUM5QjtZQXZOUjtjQXlOVyxrQ0FBaUMsRUFBQSxFQTRCckM7RUFyUFA7WUE0TmtCLHFDQUFxQztZQUM5QyxrQ0FBa0M7WUFDbEMseUJBQXlCO1lBQ3pCLGNBQWM7WUFDZCwyQkFBNEI7WUFDNUIsa0NBQWtDO1lBQ2xDLGlCQUFpQjtZQUNqQixxQkFBb0IsRUFBQTtFQW5PN0I7Y0F5T2Esb0NBQW9DLEVBQUE7RUF6T2pEO2NBOE9TLDZCQUE2QjtjQUM3QixxQkFBcUI7Y0FDckIsa0NBQWtDO2NBQ2xDLG9EQUFxRDtjQUNyRCxtQkFBa0IsRUFBQTtFQVUzQjtRQTVQQTtVQStQRyxrQ0FBbUM7VUFDbkMsbUNBQW1DLEVBQUEsRUFDbkM7RUFqUUg7UUFvUVUsY0FBYSxFQUFBO0VBQ1g7VUFyUVo7WUF1UVMsbUNBQW9DO1lBQ2pCLG9DQUFvQyxFQUFBLEVBU3pEO0VBalJQO1VBNFFTLGtDQUFrQztVQUNsQyxxQ0FBcUM7VUFDckMsbUJBQWtCO1VBQ00saUNBQWlDLEVBQUE7RUEvUWxFO1FBdVJrQixtQ0FBYTtRQUNyQixtQ0FBbUMsRUFBQTtFQUN4QztVQXpSTDtZQTJSTyxrQ0FBa0MsRUFBQSxFQXVDbkM7RUFsVU47VUErUmdCLHFCQUFxQjtVQUM3QixlQUFlO1VBQ2Ysa0NBQWtDO1VBQ2xDLGdCQUFnQjtVQUNoQixpQ0FBaUM7VUFDakMsa0NBQWtDO1VBQ2xDLHFDQUFxQztVQUNyQywyQkFBbUI7a0JBQW5CLG1CQUFtQixFQUFBO0VBQ25CO1lBdlNSO2NBeVNTLGtDQUFrQztjQUNsQyxtQkFBbUI7Y0FDaEIsY0FBYSxFQUFBLEVBRWxCO0VBN1NQO1VBK1NnQixpQ0FBaUM7VUFDMUMsZ0JBQWdCO1VBQ2hCLGtDQUFrQztVQUNsQyxzQkFBc0I7VUFDdEIsa0NBQWlDO1VBQ2pDLG1DQUFrQztVQUNsQywrREFBZ0U7VUFDaEUscUNBQXFDLEVBQUE7RUFDckM7WUF2VFA7Y0F5VFksdUJBQXNCO2NBQ3RCLFlBQVk7Y0FDZixpQ0FBaUM7Y0FDakMsMEVBQXlFO2NBQ3pFLGdDQUFBLEVBQWlDLEVBR25DO0VBaFVQO01BeVVHLHFDQUFxQztNQUNyQyxtQkFBZ0I7TUFDaEIsaUJBQWEsRUFBQTtFQTNVaEI7UUE4VUksWUFBVyxFQUFBO0VBRVo7UUFoVkg7VUFrVkksa0NBQWtDO1VBQ2xDLGlDQUFnQyxFQUFBLEVBRWpDIiwiZmlsZSI6InNyYy9hcHAvd2lzaGxpc3QtY2hlY2tvdXQvd2lzaGxpc3QtY2hlY2tvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudFxueyAgXG4ucGFkXzEwe1xuXHRwYWRkaW5nOiAxMHB4O1xufVxuXG5pb24tY2FyZFtwYW5lbF0ge1xuXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuXHRhIHtcblx0XHRmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHQgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcblx0ICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdCAgICBkaXNwbGF5OiBibG9jaztcblx0ICAgIG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbi0wKTtcblx0ICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XG5cdCAgICBmb250LXdlaWdodDogYm9sZDtcblx0ICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0ICAgIHNwYW4ge1xuICAgIFx0ICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdCAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0ICAgIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbi0xMCk7XG5cdFx0ICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0yMCk7XG5cdFx0ICAgIGJhY2tncm91bmQ6ICNhYWFhYWE7XG5cdCAgICB9XG5cdH1cbn1cbi0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZ3JleSk7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHR7IFxuXHRcdCAgIC0tcGFkZGluZy10b3A6dmFyKC0taW9uLXBhZGRpbmctOCkhaW1wb3J0YW50O1xuXHQgICAtLXBhZGRpbmctYm90dG9tOnZhcigtLWlvbi1wYWRkaW5nLTgpIWltcG9ydGFudDtcblx0ICAgLS1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLTgpIWltcG9ydGFudDtcblx0ICAgLS1wYWRkaW5nLWVuZDp2YXIoLS1pb24tcGFkZGluZy04KSFpbXBvcnRhbnQ7XG5cdFx0fVxuLyogY2hlY2tvdXQgc2VjdGlvbiBzdGFydCAqL1xuW2NoZWNrb3V0LWJveF1cbnsgXG4vKiBMZWZ0IFNlY3Rpb24gU3RhcnQgKi9cbmlvbi1jYXJkXG57XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHR7IFxuXHRcdCBwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTApO1xuXHRcdH1cbn1cdFxuLyogUmlnaHQgU2VjdGlvbiBTdGFydCAqL1x0XHRcbltjaGVja291dC1wcm9ncmVzcy1zaWRlYmFyXVxueyAgXG5pb24tY2FyZFxueyAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMjApO1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxue1xuIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApO1xuIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy0xMCk7XG59XG5cdCAgW3BhbmVsLWhlYWRpbmddIFxuXHQgIHtcblx0XHQgaDRcblx0XHQge1xuXHRcdCAgICZbdW5pY2FzZS1jaGVja291dC10aXRsZV1cblx0XHQgICB7ICAgICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdCBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdFx0XHQgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdCBib3JkZXItYm90dG9tOiAxcHggI2U1ZTVlNSBzb2xpZDtcblx0XHRcdFx0IHBhZGRpbmctYm90dG9tOiB2YXIoIC0taW9uLXBhZGRpbmctMTQpO1xuXHRcdFx0XHQgbWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLTEwKTtcblx0XHRcdFx0IGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHRcdCAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xuXHRcdFx0ICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0XHRcdFx0eyBcblx0XHRcdFx0XHQgIHBhZGRpbmc6IHZhciggLS1pb24tcGFkZGluZy0xNSk7XG5cdFx0XHRcdFx0ICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdH1cblx0XHQgICB9XG5cdFx0IH1cdCBcblx0ICB9XG5cdCAgW3ByaWNlX3NpbmdsZV9jb3N0XVxuXHQgIHsgXHQgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0ICAmW3BheW1lbnQtaW5mb11cblx0ICB7XG5cdFx0ICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0ICB7XG5cdFx0XHQgcGFkZGluZzp2YXIoIC0taW9uLXBhZGRpbmctMTUpIHZhciggLS1pb24tcGFkZGluZy0xNSkgdmFyKCAtLWlvbi1wYWRkaW5nLTApO1xuXHRcdFx0ICBbY2hlY2tzLWxmdF1cblx0XHRcdCAge1xuICAgICAgICAgICAgICAgIGlvbi1pdGVtXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWVlO1xuXHRcdFx0XHR9XG5cdFx0XHQgIH0gIFxuXHRcdCAgfVxuXHQgIH1cblx0ICBbZGVzY11cblx0ICB7XG5cdFx0ICAgICAgIGJhY2tncm91bmQ6IHZhciggLS1pb24tY29sb3ItZ3JleWY4KTtcblx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0xNSk7XG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCBiYWNrZ3JvdW5kOiB2YXIoIC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7Ym9yZGVyOm5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0yNSk7XG5cdFx0XHRcdFx0ZGlzcGxheTpub25lOyAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1x0XHRcdFx0XHRcblx0XHRcdFx0XHRpb24taW5wdXQgLCBpb24tc2VsZWN0e1xuXHRcdFx0XHRcdCAgXHRoZWlnaHQ6IHZhcigtLWlvbi13aC0zNikhaW1wb3J0YW50O1x0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlvbi1zZWxlY3R7XG5cdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctNykgIHZhcigtLWlvbi1wYWRkaW5nLTEwKSFpbXBvcnRhbnQ7XHRcblx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ICAgIGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRoMlxuXHRcdFx0XHR7ICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xuXHRcdFx0XHRcdCAgICBib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE4KTtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTUpO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcblx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0XHRcdFx0eyAgXHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpXG5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHRbY2FyZC1wc3lzXVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0XHQgIHdpZHRoOiAyMDBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHQgICAgICAgICAgICB9XG5cdFx0XHRcdCAgIFt3LTUwc10ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDQ4JTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRcdCYuYWN0aXZlXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZGlzcGxheTpibG9jaztcblx0XHRcdFx0XHR9XG5cdCAgfVxuXHRcdCBoNFxuXHRcdCB7ICBcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRcdGNvbG9yOiAjNzk3OTc5O1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuXHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEyKSB2YXIoLS1pb24tcGFkZGluZy0xMCk7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0XHRcdFx0eyAgXHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdFx0XHRcdCAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xMikgdmFyKC0taW9uLXBhZGRpbmctMTUpOyAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdH1cblx0XHQgfVxuXHRcdGgzXG5cdFx0e1xuICAgICAgICAgXG5cdFx0ICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTgpO1xuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2s0KTtcblx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xMCk7XG5cdFx0XHRcdG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMTQpO1xuXHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0XHRcdFx0eyAgXHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdFx0XHRcdCAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0xNSk7XG5cdFx0XHRcdFx0fVxuXHRcdCBcblx0XHR9XHRcblx0XHRwXG5cdFx0e1xuXHRcdFx0ICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcblx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xuXHRcdFx0XHQgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0XHR9XG5cdFx0IC5yYWRpby1jaGVja291dC11bmljYXNlXG5cdFx0IHsgICBcblx0XHQgICAgICBpb24tbGFiZWxcblx0XHRcdCAge1xuXHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0XHRcdFx0eyAgXHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0ICB9XG5cdFx0XHQgIGlucHV0W3R5cGU9XCJyYWRpb1wiXVxuXHRcdFx0ICB7XG5cdFx0XHRcdCAgICAgIG1hcmdpbi1sZWZ0OnZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHQgIH1cblx0XHRcdCAgLnJhZGlvLWJ1dHRvblxuXHRcdFx0ICB7XG5cdFx0XHRcdCAgIFxuICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApO1xuICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG5cdFx0XHRcdCAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcblx0XHRcdFx0ICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHQgIH1cblx0XHQgfVxuXHQgIH1cbiAgfVxuXG59XHRcbi8qIFJpZ2h0IFNlY3Rpb24gRW5kcyAqL1x0XG5cdCBpb24tY2FyZFxuXHQgeyAgYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHQgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLC4wOCk7XG5cdFx0XHRcdFtwYW5lbC1oZWFkaW5nXVxuXHRcdFx0XHR7ICAgICAmW2NoZWNrb3V0LWhlYWRdXG5cdFx0ICAgICAgICAgICAgIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNmNWY1ZjU7XG5cdFx0XHRcdFx0IFxuXHRcdFx0XHRcdCBoNFxuXHRcdFx0XHRcdCB7XG5cdFx0XHRcdFx0XHQgIG1hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdFx0XHRcdCAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHRcdFx0ICB7XG5cdFx0XHRcdFx0XHRcdCAgICBtYXJnaW4tYm90dG9tOnZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHRcdCBhXG5cdFx0XHRcdFx0XHQgeyAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogIHZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0Ji5zZWxlY3RlZFxuXHRcdFx0XHRcdFx0XHRcdFx0eyBcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBzcGFuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHQgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0IHNwYW5cblx0XHRcdFx0XHRcdFx0IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLTEwKTtcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMjApO1xuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDojYWFhYWFhO1x0IFxuXHRcdFx0XHRcdFx0XHQgfVxuXHRcdFx0XHRcdFx0IH1cblx0XHRcdFx0XHQgfVxuXHRcdFx0XHR9XG5cdFx0fVxuXHRcdCBbcGFuZWwtYm9keV1cbiAgICAgICAgIHtcbiAgICAgICAgICAgLnJlZ2lzdGVyLWZvcm1cblx0XHQgICB7IFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxue1xuXHRcdGlvbi1jb2wge1xuXHRcdFx0cGFkZGluZy1sZWZ0OiAgdmFyKC0taW9uLXBhZGRpbmctMCk7XG5cdFx0XHRwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZy0wKTtcblx0XHR9XHRcbn1cblx0XHQgICBbY2hlY2tib3hdXG5cdFx0XHRcdCAgeyAgIGRpc3BsYXk6YmxvY2s7XG5cdFx0XHRcdFx0ICAgIFx0ICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAgdmFyKC0taW9uLXBhZGRpbmctMTUpO1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcdFxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRsYWJlbCAgLCBpb24tbGFiZWxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0Om5vcm1hbDtcdFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgfVxuXHRcdFx0IFx0XHQgIFxuXHRcdCAgIH1cblx0XHQgfVxuIFtmb3JtLWdyb3VwXVxuXHRcdFx0ICB7XG4gICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcblx0XHRcdFx0ICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xMCk7XG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0ICBpb24tbGFiZWxcblx0XHRcdFx0ICB7XG5cdFx0XHRcdFx0ICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tNSk7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcblx0XHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRcdFx0XHRcdCAgICBkaXNwbGF5OmJsb2NrO1x0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0ICB9XG5cdFx0XHRcdCAgaW9uLWlucHV0ICwgaW9uLXNlbGVjdFxuXHRcdFx0XHQgIHsgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pb24tdmFsdWUtMyk7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiB2YXIoLS1pb24td2gtNDIpIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogIHZhcigtLWlvbi1wYWRkaW5nLTEwKSAgdmFyKC0taW9uLXBhZGRpbmctMTApIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHRcdFx0XHRcdHsgICBcblx0XHRcdFx0XHRcdFx0XHQgICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcblx0XHRcdFx0XHRcdFx0XHQgICAgaGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTApO1xuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXdpZHRoOnZhcigtLWlvbi12YWx1ZS0wKSB2YXIoLS1pb24tdmFsdWUtMCkgMXB4IHZhcigtLWlvbi12YWx1ZS0wKTtcblx0XHRcdFx0XHRcdFx0XHRcdC8qcGFkZGluZzogIGluaGVyaXQhaW1wb3J0YW50OyAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHQgIH1cblx0XHRcdFx0ICBcblx0XHRcdCAgfVx0XHRcdCBcbi8qIExlZnQgU2VjdGlvbiBFbmRzICovXHRcdCBcblx0IFxufVxuXHQgXG5cdCBpb24tYnV0dG9uIFxuXHQge1xuXHRcdCBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdCAtLWJvcmRlci1yYWRpdXM6MHB4O1xuXHRcdCAtLWJveC1zaGFkb3c6bm9uZTtcblx0XHQgJjpob3ZlclxuXHRcdCB7XG5cdFx0XHQgb3BhY2l0eTowLjg7XG5cdFx0IH1cblx0XHQgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0eyBcblx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6dmFyKC0taW9uLW1hcmdpbi0xNSk7XG5cdFx0XHR9XG5cdCB9XG59XG5cblxuIFxuLyogY2hlY2tvdXQgc2VjdGlvbiBlbmRzICovXG5cbn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/wishlist-checkout/wishlist-checkout.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/wishlist-checkout/wishlist-checkout.page.ts ***!
  \*************************************************************/
/*! exports provided: WishlistCheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistCheckoutPage", function() { return WishlistCheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");







var WishlistCheckoutPage = /** @class */ (function () {
    function WishlistCheckoutPage(userService, toastController, loadingController, router, events, activatedRoute, payPal) {
        this.userService = userService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.router = router;
        this.events = events;
        this.activatedRoute = activatedRoute;
        this.payPal = payPal;
        this.total_payable_price = 0;
        this.grand_total = 0;
        this.errors = ['', null, undefined];
        this.buttonClickeddrop = false;
        this.a_last_name = '';
        this.is_loaded = false;
        this.is_coupon_applied = false;
        this.is_paypal_web_enabled = false;
        this.address_type = '0';
        this.wishlist = '';
        this.isBrowser = localStorage.getItem('isBrowser');
    }
    WishlistCheckoutPage.prototype.ngOnInit = function () {
    };
    WishlistCheckoutPage.prototype.ionViewDidEnter = function () {
        this.transaction_id = '';
        var direct = this.activatedRoute.snapshot.paramMap.get('direct');
        var token = localStorage.getItem('sin_auth_token');
        this.userId = this.userService.decryptData(token, _config__WEBPACK_IMPORTED_MODULE_2__["config"].ENC_SALT);
        this.payment_method = 'cash';
        this.wishlist = JSON.parse(localStorage.getItem('wishlist'));
        console.log(this.wishlist);
        this.a_first_name = this.wishlist.userData[0].name;
        this.a_last_name = this.wishlist.userData[0].lname;
        this.a_address = this.wishlist.wish_full_address;
        this.a_city = this.wishlist.wish_city;
        this.a_state = this.wishlist.wish_state;
        this.a_country = this.wishlist.country_name;
        this.a_phone_number = this.wishlist.wish_phone;
        this.a_zip = this.wishlist.wish_zip;
        this.a_email_address = this.wishlist.wish_email;
        this.calculateTotalPrice();
        this.getProfile();
        // if(this.userId != 0){
        //     for(var i=0; i< this.wishlist.products.length; i++){
        //     	if(this.wishlist.products[i].product_sale_price == undefined){
        //     		this.total_payable_price += Number(this.wishlist.products[i].product_purchase_price);
        //     	}else{
        //     		this.total_payable_price += Number(this.wishlist.products[i].product_sale_price);
        //     	}
        //     }
        //     if(this.cart != ''){
        //       this.is_loaded = true;
        //       this.grand_total = this.total_payable_price;
        //     }
        //     this.getProfile();
        // }
    };
    WishlistCheckoutPage.prototype.initializePaypalWeb = function () {
        var _this = this;
        setTimeout(function () {
            // Render the PayPal button into #paypal-button-container
            window.paypal.Buttons({
                style: {
                    color: 'blue',
                    shape: 'pill',
                    label: 'pay',
                    height: 40
                },
                // Set up the transaction
                createOrder: function (data, actions) {
                    return actions.order.create({
                        purchase_units: [{
                                amount: {
                                    value: _this.grand_total
                                }
                            }]
                    });
                },
                // Finalize the transaction
                onApprove: function (data, actions) {
                    return actions.order.capture()
                        .then(function (details) {
                        // Show a success message to the buyer
                        if (details.status == 'COMPLETED') {
                            _this.transaction_id = details.purchase_units[0]['payments']['captures'][0]['id'];
                            _this.placeOrder();
                        }
                        else {
                            _this.presentToast('Payment unsuccessful!', 'danger');
                        }
                    })
                        .catch(function (err) {
                        _this.presentToast('Error while processing payment!', 'danger');
                    });
                }
            }).render('#paypal-button-container');
        }, 500);
    };
    WishlistCheckoutPage.prototype.ionViewWillUnload = function () {
        this.events.unsubscribe('current_address_changed:true');
    };
    WishlistCheckoutPage.prototype.applyCoupon = function () {
        var _this_1 = this;
        if (this.errors.indexOf(this.coupon_code) >= 0) {
            this.presentToast('Please enter coupon code.', 'danger');
            return false;
        }
        else {
            this.presentLoading();
            this.userService.postData({ coupon_code: this.coupon_code, user_id: this.userId }, 'applyCoupon').subscribe(function (result) {
                _this_1.stopLoading();
                if (result.status == 1) {
                    _this_1.presentToast('Coupon applied successfully.', 'success');
                    _this_1.applied_coupon_id = result.coupon.coupon_id;
                    _this_1.is_coupon_applied = true;
                    _this_1.coupon_amount = Number(result.coupon.discount_value);
                    _this_1.applied_coupon_type = result.coupon.discount_type;
                    _this_1.calculateTotalPrice();
                }
                else if (result.status == 2) {
                    _this_1.presentToast('Coupon already applied.', 'danger');
                }
                else {
                    _this_1.presentToast('Invalid coupon.', 'danger');
                }
            }, function (err) {
                _this_1.presentToast('Error,Please try after some time.', 'danger');
                _this_1.stopLoading();
            });
        }
    };
    WishlistCheckoutPage.prototype.removeCoupon = function () {
        this.applied_coupon_id = 0;
        this.coupon_code = '';
        this.is_coupon_applied = false;
        this.coupon_amount = 0;
        this.calculateTotalPrice();
    };
    WishlistCheckoutPage.prototype.getCartProducts = function () {
        var _this_1 = this;
        this.presentLoading();
        this.userService.postData({ user_id: this.userId }, 'getCartProducts').subscribe(function (result) {
            _this_1.is_loaded = true;
            _this_1.stopLoading();
            _this_1.cart = result.products;
            if (_this_1.cart != '') {
                _this_1.calculateTotalPrice();
            }
        }, function (err) {
            _this_1.is_loaded = true;
            _this_1.stopLoading();
            _this_1.cart = [];
        });
    };
    WishlistCheckoutPage.prototype.getProfile = function () {
        var _this_1 = this;
        this.userService.postData({ userId: this.userId }, 'getProfile').subscribe(function (result) {
            _this_1.profile = result.profile;
            _this_1.cards = result.cards;
            _this_1.countries = result.countries;
        }, function (err) {
            _this_1.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    WishlistCheckoutPage.prototype.cardSelected = function (event) {
        this.selected_card = event.target.value;
        this.choosed_card = this.cards[this.selected_card];
    };
    WishlistCheckoutPage.prototype.finalCheckout = function () {
        var main_address;
        main_address = this.a_address + ' ' + this.a_city + ' ' + this.a_state + ' ' + this.a_country;
        this.choosed_address = {
            address_first_name: this.a_first_name,
            address_last_name: this.a_last_name == undefined ? ' ' : this.a_last_name,
            full_address: this.a_address,
            address_city: this.a_city,
            address_state: this.a_state,
            address_country: this.a_country,
            address_phone: this.a_phone_number,
            address_zip_code: this.a_zip,
            set_as_default: 0,
            user_id: this.userId,
            isAdd: 1,
            address_id: null
        };
        var self = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': main_address }, function (results, status) {
            var latitude = '', longitude = '';
            if (status === 'OK') {
                latitude = results[0].geometry.location.lat();
                longitude = results[0].geometry.location.lng();
            }
            self.choosed_address['latitude'] = latitude;
            self.choosed_address['longitude'] = longitude;
            if (self.payment_method == 'paypal') {
                if (self.isBrowser == 'false') {
                    self.payWithPaypal();
                }
                else {
                    console.log('enter4');
                    self.is_paypal_web_enabled = true;
                    setTimeout(function () {
                        self.initializePaypalWeb();
                    }, 3000);
                }
            }
            else {
                self.placeOrder();
            }
        });
    };
    WishlistCheckoutPage.prototype.placeOrder = function () {
        var _this_1 = this;
        for (var i = 0; i < this.wishlist.products.length; i++) {
            this.wishlist.products[i].product_quantity = 1;
        }
        var params = {
            user_id: this.userId,
            products: this.wishlist.products,
            address: this.choosed_address,
            payment_method: this.payment_method,
            payment_card: this.choosed_card,
            coupon: this.is_coupon_applied,
            coupon_id: (this.errors.indexOf(this.coupon_id) >= 0 ? 0 : this.coupon_id),
            total_amount: this.grand_total,
            transaction_id: this.transaction_id,
            wish_id: this.wishlist.wish_id,
            is_registry: this.wishlist.user_id == this.userId ? 0 : 1,
            shared_by: this.wishlist.user_id
        };
        this.presentLoading();
        this.userService.postData(params, 'place_order').subscribe(function (result) {
            if (result.status == 1) {
                localStorage.removeItem('sin_wholesale_items');
                _this_1.transaction_id = '';
                var success_msg = 'Success! Your order has been placed successfully.';
                _this_1.stopLoading();
                _this_1.presentToast(success_msg, 'success');
                _this_1.router.navigate(['/thankyou/' + result.products]);
            }
            else {
                _this_1.stopLoading();
                _this_1.presentToast('Error:' + result.msg, 'danger');
            }
        }, function (err) {
            _this_1.stopLoading();
            _this_1.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    ;
    WishlistCheckoutPage.prototype.payWithPaypal = function () {
        var _this_1 = this;
        this.payPal.init({
            PayPalEnvironmentProduction: _config__WEBPACK_IMPORTED_MODULE_2__["config"].PAYPAL_PRODUCTION_CLIENT_ID,
            PayPalEnvironmentSandbox: _config__WEBPACK_IMPORTED_MODULE_2__["config"].PAYPAL_SANDBOX_CLIENT_ID
        }).then(function () {
            _this_1.payPal.prepareToRender(_config__WEBPACK_IMPORTED_MODULE_2__["config"].PAYPAL_ENVIRONMENT, new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__["PayPalConfiguration"]({
                // Only needed if you get an "Internal Service Error" after PayPal login!
                payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(function () {
                var payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__["PayPalPayment"](_this_1.grand_total.toString(), 'USD', 'Siniyetu payment', 'sale');
                _this_1.payPal.renderSinglePaymentUI(payment).then(function (res) {
                    _this_1.transaction_id = res.response.id;
                    _this_1.placeOrder();
                    // Successfully paid
                }, function (err) {
                    // Error or render dialog closed without being successful
                    _this_1.presentToast('Payment unsuccessful!', 'danger');
                });
            }, function (err) {
                // Error in configuration
                _this_1.presentToast('Error while processing payment!', 'danger');
            });
        }, function (err) {
            // Error in initialization, maybe PayPal isn't supported or something else
            _this_1.presentToast('Error while processing payment!', 'danger');
        });
    };
    WishlistCheckoutPage.prototype.calculateTotalPrice = function () {
        var self = this;
        this.total_payable_price = 0;
        this.grand_total = 0;
        this.wishlist.products.forEach(function (item) {
            if (Number(item.wholesale_price) != 0 && Number(1) >= Number(item.wholesale_products) && self.errors.indexOf(item.wholesale_products) == -1) {
                self.total_payable_price = Number(self.total_payable_price) + (item.wholesale_price * 1);
            }
            else if (item.is_variation == 1) {
                self.total_payable_price = Number(self.total_payable_price) + (item.product_price * 1);
            }
            else {
                if (self.errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price) {
                    if (item.discount_per_piece != null) {
                        if (item.discount_type == '%') {
                            var singleItemPrice = Number(item.product_sale_price) - ((Number(item.discount_per_piece) / Number(item.product_sale_price)) * 100);
                            self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice * 1);
                        }
                        else {
                            var singleItemPrice = Number(item.product_sale_price) - Number(item.discount_per_piece);
                            self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice * 1);
                        }
                    }
                    else {
                        self.total_payable_price = Number(self.total_payable_price) + (item.product_sale_price * 1);
                    }
                }
                else {
                    if (item.discount_per_piece != null) {
                        if (item.discount_type == '%') {
                            var singleItemPrice = Number(item.product_purchase_price) - ((Number(item.discount_per_piece) / Number(item.product_purchase_price)) * 100);
                            self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice * 1);
                        }
                        else {
                            var singleItemPrice = Number(item.product_purchase_price) - Number(item.discount_per_piece);
                            self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice * 1);
                        }
                    }
                    else {
                        self.total_payable_price = Number(self.total_payable_price) + (item.product_purchase_price * 1);
                    }
                }
            }
        });
        var coupon_amount = 0;
        if (this.is_coupon_applied == true) {
            if (this.applied_coupon_type == 'Percent') {
                coupon_amount = (this.coupon_amount / 100) * this.total_payable_price;
            }
            else {
                coupon_amount = this.coupon_amount;
            }
        }
        this.coupon_amount = coupon_amount;
        this.grand_total = this.total_payable_price - Number(coupon_amount);
        this.total_payable_price = Number(this.total_payable_price.toFixed(2));
        this.grand_total = Number(this.grand_total.toFixed(2));
    };
    WishlistCheckoutPage.prototype.cashClicked = function () {
        this.payment_method = 'cash';
        this.is_paypal_web_enabled = false;
    };
    WishlistCheckoutPage.prototype.presentToast = function (message, color) {
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
    WishlistCheckoutPage.prototype.presentLoading = function () {
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
    WishlistCheckoutPage.prototype.stopLoading = function () {
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
    WishlistCheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wishlist-checkout',
            template: __webpack_require__(/*! ./wishlist-checkout.page.html */ "./src/app/wishlist-checkout/wishlist-checkout.page.html"),
            styles: [__webpack_require__(/*! ./wishlist-checkout.page.scss */ "./src/app/wishlist-checkout/wishlist-checkout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__["PayPal"]])
    ], WishlistCheckoutPage);
    return WishlistCheckoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=wishlist-checkout-wishlist-checkout-module.js.map