(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"],{

/***/ "./src/app/checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ng4_geoautocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng4-geoautocomplete */ "./node_modules/ng4-geoautocomplete/index.js");










var routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]
    }
];
var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"],
                ng4_geoautocomplete__WEBPACK_IMPORTED_MODULE_9__["Ng4GeoautocompleteModule"]
            ],
            declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.page.html":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"darkred\" text-uppercase>\n\n  <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"cart\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n       Checkout\n    </ion-title>\n<ion-buttons slot=\"end\" > \n\t<ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\t\n\t </ion-buttons>\n  </ion-toolbar>\n      <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n\t              <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n\t              <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n\t              <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n\t              <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t   </div>\n</ion-header>  -->\n<ion-content>\n<div class=\"ion-padding\">\n<div header_height></div>\n<!-- Breadcrumb Start -->\n\t\t<div breadcrumb  class=\"ion-hide-md-down\">\t\t\n\t\t\t\t<div breadcrumb-inner>\n\t\t\t\t\t<ul list-inline list-unstyled>\n\t\t\t\t\t\t<li><a routerLink=\"/home\">Home</a></li>\n\t\t\t\t\t\t<li class=\"active\">Checkout</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- /.breadcrumb-inner -->\n\t\t</div>\n<!-- Breadcrumb Ends -->\n<!---Checkout Section Start -->\n\t<div checkout-box>\n\t\t   <ion-row *ngIf=\"(total_payable_price == 0 || errors.indexOf(total_payable_price) >= 0) && is_loaded == true\">\n\t\t   \t\t<ion-item>No items in cart to checkout.</ion-item>\n\t\t   </ion-row>\n\t\t   <ion-row *ngIf=\"total_payable_price != 0 && errors.indexOf(total_payable_price) == -1\">\n\t\t     <ion-col size-md=\"8\" size-sm=\"12\" size=\"12\">\n\t\t     <p><input checked id=\"rad11\" type=\"radio\" name=\"radio_type\" value=\"0\" (click)=\"chooseAddress($event)\">  \n\t\t\t\t<label class=\"radio-button\" for=\"rad11\">&nbsp;Add Billing address</label>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \n\t\t\t\t<input id=\"rad12\" type=\"radio\" name=\"radio_type\" value=\"1\" (click)=\"chooseAddress($event)\">  \n\t\t\t\t<label class=\"radio-button\" for=\"rad12\">&nbsp;Select from saved addresses</label>\n\t\t\t\t</p>\n\t\t     \t <ion-card panel panel-default no-margin padding *ngIf=\"address_type == '1'\">\n\t\t\t     \t <div panel-heading  checkout-head>\n\t\t\t\t\t    <h4>\n\t\t\t\t\t\t   <a href=\"javascript:void(0)\"  >\n\t\t\t\t\t\t      <span><i class=\"fa fa-file-text\" aria-hidden=\"true\"></i></span>  Billing Address\n\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t</h4>\t\t\t\t\t \n\t\t\t\t\t </div>\n\t\t\t\t\t <div class=\"pad_10\" panel-body *ngFor=\"let address of addresses; let a_ind = index \">\n\t\t\t     \t \t{{address.address_first_name}} {{address.address_last_name}}<br>\n\t\t\t     \t \t{{address.full_address}}, {{address.address_city}}, {{address.address_state}}, {{address.address_zip_code}} ({{address.country_name}})<br>\n\t\t\t     \t \tcontact:- {{address.address_phone}}\n\t\t\t     \t \t<div float-right>\n\t\t\t\t     \t \t<input id=\"check{{a_ind}}\" type=\"radio\" name=\"radio\" value=\"{{a_ind}}\" (click)=\"addressSelected($event)\">  \n\t\t\t\t\t\t\t<label class=\"radio-button\" for=\"check{{a_ind}}\">&nbsp;Select</label> \n\t\t\t\t\t\t</div>\n\t\t\t     \t </div>\n\n\t\t\t     \t <div class=\"pad_10\" panel-body *ngIf=\"addresses.length == 0\">\n\t\t\t     \t \t<span>No address saved yet.</span>\n\t\t\t     \t </div>\n\t\t     \t </ion-card>\t \n\t\t\t\t <ion-card panel panel-default no-margin padding *ngIf=\"address_type == '0'\">\n\t\t\t\t     <div panel-heading  checkout-head>\n\t\t\t\t\t    <h4>\n\t\t\t\t\t\t   <a href=\"javascript:void(0)\">\n\t\t\t\t\t\t      <span><i class=\"fa fa-file-text\" aria-hidden=\"true\"></i></span>  Billing Information\n\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t</h4>\t\t\t\t\t \n\t\t\t\t\t </div>\n                     <div panel-body >\n                      \n                              <ion-row>\n\t\t\t\t\t\t\t     <ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t\t\t\t            <div  form-group>\n\t\t\t\t\t\t\t\t\t\t\t\t  <ion-label  class=\"ion-hide-md-down\" position=\"stacked\">First Name *</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t  <ion-input [(ngModel)]=\"a_first_name\" type=\"text\" placeholder=\"First Name\"></ion-input>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </ion-col>\n\t\t\t\t\t\t\t\t  <ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t\t\t\t              <div  form-group>\n\t\t\t\t\t\t\t\t\t\t\t\t  <ion-label  class=\"ion-hide-md-down\" position=\"stacked\">Last Name *</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t  <ion-input [(ngModel)]=\"a_last_name\" type=\"text\" placeholder=\"Last Name\"></ion-input>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </ion-col>\n\t\t\t\t\t\t\t\t <ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t\t\t\t             <div  form-group>\n\t\t\t\t\t\t\t\t\t\t\t\t  <ion-label  class=\"ion-hide-md-down\" position=\"stacked\">Email Address *</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t  <ion-input [(ngModel)]=\"a_email_address\" type=\"email\" placeholder=\"Email Address \"></ion-input>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </ion-col>\n\t\t\t\t\t\t\t\t  <ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t\t\t\t              <div  form-group>\n\t\t\t\t\t\t\t\t\t\t\t\t  <ion-label  class=\"ion-hide-md-down\" position=\"stacked\" >Phone Number  *</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t  <ion-input [(ngModel)]=\"a_phone_number\" type=\"text\"  placeholder=\"Phone Number\"></ion-input>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </ion-col>\n\t\t\t\t\t\t\t\t   <!-- <ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t\t\t\t             <div  form-group>\n\t\t\t\t\t\t\t\t\t\t\t\t  <ion-label  class=\"ion-hide-md-down\" position=\"stacked\">Company Name *</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t  <ion-input [(ngModel)]=\"a_company_name\" type=\"text\" placeholder=\"Company Name\"></ion-input>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </ion-col> -->\n\t\t\t\t\t\t\t\t  <ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t\t\t\t            <div  form-group>\n\t\t\t\t\t\t\t\t\t\t\t\t  <ion-label  class=\"ion-hide-md-down\" position=\"stacked\">Address  *</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t  <!-- <ion-input [(ngModel)]=\"a_address\" type=\"text\" placeholder=\"Address\"></ion-input> -->\n\t\t\t\t\t\t\t\t\t\t\t\t  <ng4geo-autocomplete [userSettings]=\"userSettings\" (componentCallback)=\"autoCompleteCallback($event)\"></ng4geo-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </ion-col>\n\t\t\t\t\t\t\t\t   <ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t\t\t\t            <div  form-group>\n\t\t\t\t\t\t\t\t\t\t\t\t  <ion-label  class=\"ion-hide-md-down\" position=\"stacked\">City *</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t  <ion-input [(ngModel)]=\"a_city\" type=\"text\" placeholder=\"City\"></ion-input>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </ion-col>\n\t\t\t\t\t\t\t\t  <ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t\t\t\t            <div  form-group>\n\t\t\t\t\t\t\t\t\t\t\t\t  <ion-label  class=\"ion-hide-md-down\" position=\"stacked\">State *</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t  <ion-input [(ngModel)]=\"a_state\" type=\"text\" placeholder=\"State\"></ion-input>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </ion-col>\n\t\t\t\t\t\t\t\t  <ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t\t\t\t              <ion-item  form-group no-padding lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t  <ion-label class=\"ion-hide-md-down\" position=\"stacked\">Country *</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t    <ion-select [(ngModel)]=\"a_country\" placeholder=\"Select Country\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <ion-select-option *ngFor=\"let country of countries\" value=\"{{country.id}}\">{{country.name}}</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t  </ion-col>\n\t\t\t\t\t\t\t\t  <ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t\t\t            <div  form-group>\n\t\t\t\t\t\t\t\t\t\t\t  <ion-label  class=\"ion-hide-md-down\" position=\"stacked\">Zip Code *</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t  <ion-input [(ngModel)]=\"a_zip\" type=\"text\" placeholder=\"Zip Code\"></ion-input>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </ion-col>\n\t\t\t\t\t\t\t\t  <ion-col size=\"12\">\n\t\t\t\t\t\t\t\t       \n\t\t\t\t\t\t\t\t\t   \n\t\t\t\t\t\t\t\t               <div checkbox>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"ion-hide-md-down\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"can_save_address\" > Save for further orders\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t      <ion-item class=\"ion-hide-lg-up\"  no-padding>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t      <ion-label>Save for further orders</ion-label>\n                                                              <ion-checkbox [(ngModel)]=\"can_save_address\" slot=\"start\" color=\"darkred\" ></ion-checkbox>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t </ion-item>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t   \n\t\t\t\t\t\t\t\t              <!--  <div checkbox>\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"ion-hide-md-down\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" class=\"\" name=\"\" value=\"1\"> Click here for express delivery\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t       <ion-item class=\"ion-hide-lg-up\" no-padding>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t      <ion-label>Click here for express delivery</ion-label>\n                                                              <ion-checkbox slot=\"start\" color=\"darkred\"></ion-checkbox>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t </ion-item>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t  </ion-col>\n\t\t\t\t\t\t\t\t   <!-- <ion-col size=\"12\">\n\t\t\t\t\t\t\t\t   \n\t\t\t\t\t\t\t\t       <ion-button  color=\"darkred\"  >\n\t\t\t\t\t\t\t\t\t        Continue Checkout\n\t\t\t\t\t\t\t\t\t   </ion-button>\n\t\t\t\t\t\t\t\t   \n\t\t\t\t\t\t\t\t   </ion-col> -->\n\t\t\t\t\t\t\t  </ion-row>\n                     \t\t\t\t\t\t \n\t\t\t\t\t </div>\t\t\t\t \n\t\t\t\t </ion-card>\n\t\t\t  </ion-col>\n\t\t    <ion-col size-md=\"4\" size-sm=\"12\" size=\"12\">\n\t\t\t    <ng-container *ngIf=\"address_type == '0'\">\n\t\t\t    \t<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n\t\t\t\t\t    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\"\n\t\t\t\t\t      (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\n\t\t\t\t\t</agm-map>\n\t\t\t\t</ng-container>\n\t\t\t    <div checkout-progress-sidebar>\n\t\t\t\t   <ion-card  panel panel-default  no-margin padding *ngIf=\"is_wholesale == true\">\n\t\t\t\t      <div panel-heading>\n\t\t\t\t\t     <h4  unicase-checkout-title text-uppercase>\n\t\t\t\t\t\t     Discount Coupon\n\t\t\t\t\t\t </h4>\t\t\t\t\t  \n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div price_single_cost *ngIf=\"is_coupon_applied == false\">\n\t\t\t\t\t    <p>Enter your coupon code if you have one..</p>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<input [(ngModel)]=\"coupon_code\" type=\"text\" class=\"form-control unicase-form-control text-input\" placeholder=\"Your Coupon..\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"clearfix\">\n\t\t\t\t\t\t\t<ion-button color=\"darkred\" (click)=\"applyCoupon()\">\n\t\t\t\t\t\t\t\tAPPLY COUPON\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div price_single_cost *ngIf=\"is_coupon_applied == true\">\n\t\t\t\t\t    <p>Coupon {{coupon_code}} applied \n\t\t\t\t\t\t<ion-button icon action-icons del-icon (click)=\"removeCoupon()\">\n\t\t\t\t\t\t\t<ion-icon name=\"close\"></ion-icon>\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t  </div>\n\t\t\t\t   </ion-card>\n\t\t\t\t   <ion-card panel panel-default  no-margin padding>\n\t\t\t\t      <div panel-heading>\n\t\t\t\t\t     <h4 unicase-checkout-title text-uppercase>\n\t\t\t\t\t\t     Your order\t\n\t\t\t\t\t\t </h4>\t\t\t\t\t  \n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div price_single_cost>\n\t\t\t\t\t    <h4>Subtotal <span float-right>${{total_payable_price.toFixed(2)}}</span></h4>\n\t\t\t\t\t    <h4>Shipping  <span float-right>$0</span></h4>\n\t\t\t\t\t    <!-- <h4>Express Delivery <span float-right>$0</span></h4> -->\n\t\t\t\t\t    <h4 *ngIf=\"is_coupon_applied == true\">Coupon applied <span float-right>-${{coupon_amount}}</span></h4>\n\t\t\t\t\t    <h3>Total Cost <span float-right>${{grand_total.toFixed(2)}}</span></h3>\n\t\t\t\t\t  </div>\n\t\t\t\t   </ion-card >\t\t   \n\t\t\t\t  <ion-card  panel panel-default  no-margin padding>\n\t\t\t\t      <div panel-heading>\n\t\t\t\t\t     <h4  unicase-checkout-title text-uppercase>\n\t\t\t\t\t\t     Payment Information\n\t\t\t\t\t\t </h4>\t\t\t\t\t  \n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div price_single_cost payment-info>\n\t\t\t\t\t       <!-- <p  title-tag-line>Register with us for future convenience:</p> -->\n\t\t\t\t\t      \n\t\t\t\t\t\t\t\t\t\t\t<div class=\"radio radio-checkout-unicase\">  \n\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"pay1\" type=\"radio\" name=\"pay_type\" value=\"1\"  [ngClass]=\"{'active': payment_method === 'paypal'}\"  (click)=\"payment_method = 'paypal';\">  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"radio-button\" for=\"pay1\">Paypal</label>  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input checked id=\"pay2\" type=\"radio\" name=\"pay_type\" value=\"2\"  [ngClass]=\"{'active': payment_method === 'cash'}\"  (click)=\"cashClicked()\">  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"radio-button\" for=\"pay2\">Cash on Delivery</label> \n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t <!--  <ion-item  lines=\"none\" class=\"ion-hide-lg-up\" no-padding [ngClass]=\"{'active': payment_method === 'paypal'}\"  (click)=\"payment_method = 'paypal'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t      <ion-label>Paypal</ion-label>\n                                                              <ion-radio name=\"pay_type\"  slot=\"start\" color=\"darkred\"></ion-radio >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t </ion-item>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <ion-item  lines=\"none\"  class=\"ion-hide-lg-up\" no-padding [ngClass]=\"{'active': payment_method === 'cash'}\"  (click)=\"payment_method = 'cash'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t      <ion-label>Cash on Delivery</ion-label > \n                                                              <ion-radio name=\"pay_type\" slot=\"start\" color=\"darkred\"></ion-radio >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t </ion-item> -->\n\t\t\t\t\t\t\t\t\t\t\t</div>\n                                    <!-- <div desc  paypal  [ngClass]=\"{'active': payment_method === 'paypal'}\"> -->\n                                    <!-- <ion-card panel panel-default no-margin padding *ngIf=\"cards != ''\">\n\t\t\t\t\t\t\t\t\t <div class=\"pad_10\" panel-body *ngFor=\"let card of cards; let c_ind = index \">\n\t\t\t\t\t\t\t     \t \t{{card.card_type}}<br>\n\t\t\t\t\t\t\t     \t \txxxx xxxx xxxx {{card.card_number.slice(-4)}}\n\t\t\t\t\t\t\t     \t \t<div float-right>\n\t\t\t\t\t\t\t\t     \t \t<input id=\"check_card_{{c_ind}}\" type=\"radio\" name=\"radio_card\" value=\"{{c_ind}}\" (click)=\"cardSelected($event)\">  \n\t\t\t\t\t\t\t\t\t\t\t<label class=\"radio-button\" for=\"check_card_{{c_ind}}\">&nbsp;Select</label> \n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t     \t </div>\n\t\t\t\t\t\t     \t </ion-card> -->\n                                    <!-- <ng-container *ngIf=\"cards == ''\">\n\t\t\t\t\t\t\t\t\t   <h2>\n\t\t\t\t\t\t\t\t\t     Paypal\n\t\t\t\t\t\t\t\t\t    <span float-right card-psys> <img src=\"assets/images/cards.png\"></span>\n\t\t\t\t\t\t\t\t\t   </h2>\n\t\t\t\t\t\t\t\t\t   <ion-row>\n\t\t\t\t\t\t\t\t\t\t\t <ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div  form-group>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <ion-label position=\"stacked\">Card Number *</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <ion-input type=\"text\" [(ngModel)]=\"c_card_number\"></ion-input>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t  </ion-col>\n\t\t\t\t\t\t\t\t\t\t\t  <ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-item  form-group no-padding lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-label position=\"stacked\">Card Type *</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-select [(ngModel)]=\"c_card_type\" placeholder=\"Select Card\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"Visa\">Visa</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"Master Card\">Master Card</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"American Express\">American Express</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"Rupay\">Rupay</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"Discover\">Discover</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"Citibank\">Citibank</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t\t\t\t  </ion-col>\n\t\t\t\t\t\t\t\t\t\t\t   <ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div  form-group>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <ion-label position=\"stacked\">Expiry Date *</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <ion-input [(ngModel)]=\"c_expiry_month\" type=\"text\" float-left placeholder=\"MM\" w-50s></ion-input>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <ion-input [(ngModel)]=\"c_expiry_year\" type=\"text\" float-right placeholder=\"YY\" w-50s></ion-input>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t  </ion-col>\n\t\t\t\t\t\t\t\t\t\t\t   <ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div  form-group>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <ion-label position=\"stacked\">CVV *</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <ion-input [(ngModel)]=\"c_card_cvv\" type=\"text\" placeholder=\"\"></ion-input>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t  </ion-col>\n\t\t\t\t\t\t\t\t       </ion-row>\n\t\t\t\t\t\t\t\t       </ng-container> -->\n                                    <!-- </div>\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t\n\t\t\t\t\t  </div>\n\t\t\t\t\t  \t<div *ngIf=\"is_paypal_web_enabled == true\" id=\"paypal-button-container\"></div>\n\t\t\t\t\t   <ion-button *ngIf=\"is_paypal_web_enabled != true\" color=\"darkred\" (click)=\"finalCheckout()\" >\n\t\t\t\t\t\t Proceed To Checkout\n\t\t\t\t\t   </ion-button>\n\t\t\t\t   </ion-card >\t\n\t\t\t\t    \n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t   </ion-row>\t\n\n\t</div>\n</div>\n<!---Checkout Section Ends -->\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/checkout/checkout.page.scss":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px; }\n\nion-content {\n  --background:var(--ion-color-grey);\n  /* checkout section start */\n  /* checkout section ends */ }\n\nion-content .pad_10 {\n    padding: 10px; }\n\n@media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-8)!important;\n      --padding-bottom:var(--ion-padding-8)!important;\n      --padding-start:var(--ion-padding-8)!important;\n      --padding-end:var(--ion-padding-8)!important; } }\n\nion-content [checkout-box] {\n    /* Left Section Start */\n    /* Right Section Start */\n    /* Right Section Ends */ }\n\n@media only screen and (max-width: 991px) {\n      ion-content [checkout-box] ion-card {\n        padding: var(--ion-padding-0); } }\n\nion-content [checkout-box] [checkout-progress-sidebar] ion-card {\n      margin-bottom: var(--ion-margin-20); }\n\n@media only screen and (max-width: 991px) {\n        ion-content [checkout-box] [checkout-progress-sidebar] ion-card {\n          margin-bottom: var(--ion-margin-10);\n          padding-bottom: var(--ion-padding-10); } }\n\nion-content [checkout-box] [checkout-progress-sidebar] ion-card [panel-heading] h4[unicase-checkout-title] {\n        margin: var(--ion-margin-0);\n        font-size: var(--ion-font-size-14);\n        font-weight: bold;\n        border-bottom: 1px #e5e5e5 solid;\n        padding-bottom: var(--ion-padding-14);\n        margin-bottom: var(--ion-margin-10);\n        font-family: var(--ion-font-family-2);\n        color: var(--ion-color-darkblack); }\n\n@media only screen and (max-width: 991px) {\n          ion-content [checkout-box] [checkout-progress-sidebar] ion-card [panel-heading] h4[unicase-checkout-title] {\n            padding: var(--ion-padding-15);\n            margin-bottom: var(--ion-margin-0); } }\n\nion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] {\n        font-family: var(--ion-font-family-2); }\n\n@media only screen and (max-width: 991px) {\n          ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost][payment-info] {\n            padding: var(--ion-padding-15) var(--ion-padding-15) var(--ion-padding-0); }\n            ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost][payment-info] [checks-lft] ion-item {\n              border-bottom: 1px solid #eee; } }\n\nion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] {\n          background: var(--ion-color-greyf8);\n          padding: var(--ion-padding-15) var(--ion-padding-15) var(--ion-padding-15);\n          margin-bottom: var(--ion-margin-25);\n          display: none;\n          border: 1px solid #eee; }\n\n@media only screen and (max-width: 991px) {\n            ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] {\n              background: var(--ion-color-white);\n              padding: var(--ion-padding-0);\n              border: none; } }\n\nion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] ion-input, ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] ion-select {\n            height: var(--ion-wh-36) !important; }\n\nion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] ion-select {\n            padding: var(--ion-padding-7) var(--ion-padding-10) !important; }\n\n@media only screen and (max-width: 991px) {\n              ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] ion-select {\n                border: none; } }\n\nion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] h2 {\n            color: var(--ion-color-darkblack);\n            border: none;\n            font-weight: 700;\n            font-size: var(--ion-font-size-18);\n            margin-bottom: var(--ion-margin-15);\n            margin-top: var(--ion-margin-0);\n            border-bottom: 1px solid #eee;\n            padding-bottom: var(--ion-padding-15); }\n\n@media only screen and (max-width: 991px) {\n              ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] h2 {\n                font-size: var(--ion-font-size-14); } }\n\nion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] [card-psys] img {\n            width: 200px; }\n\nion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc] [w-50s] {\n            width: 48%;\n            display: inline-block; }\n\nion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] [desc].active {\n            display: block; }\n\nion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] h4 {\n          font-size: var(--ion-font-size-14);\n          font-weight: normal;\n          color: #797979;\n          border-bottom: 1px solid #eee;\n          padding: var(--ion-padding-12) var(--ion-padding-10);\n          margin-bottom: var(--ion-margin-0); }\n\n@media only screen and (max-width: 991px) {\n            ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] h4 {\n              font-size: var(--ion-font-size-14);\n              padding: var(--ion-padding-12) var(--ion-padding-15);\n              margin-top: var(--ion-margin-0); } }\n\nion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] h3 {\n          font-size: var(--ion-font-size-18);\n          font-weight: bold;\n          color: var(--ion-color-darkblack4);\n          text-transform: uppercase;\n          margin-bottom: var(--ion-margin-10);\n          margin-top: var(--ion-margin-14); }\n\n@media only screen and (max-width: 991px) {\n            ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] h3 {\n              font-size: var(--ion-font-size-14);\n              padding: var(--ion-padding-0) var(--ion-padding-15); } }\n\nion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] p {\n          font-size: var(--ion-font-size-14);\n          color: var(--ion-color-darkblack);\n          font-family: var(--ion-font-family-2); }\n\n@media only screen and (max-width: 991px) {\n          ion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] .radio-checkout-unicase ion-label {\n            font-size: var(--ion-font-size-14); } }\n\nion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] .radio-checkout-unicase input[type=\"radio\"] {\n          margin-left: var(--ion-margin-0); }\n\nion-content [checkout-box] [checkout-progress-sidebar] ion-card [price_single_cost] .radio-checkout-unicase .radio-button {\n          margin-bottom: var(--ion-margin-10);\n          font-size: var(--ion-font-size-14);\n          color: var(--ion-color-darkblack);\n          font-family: var(--ion-font-family-2); }\n\nion-content [checkout-box] ion-card {\n      background: var(--ion-color-white);\n      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n      /* Left Section Ends */ }\n\nion-content [checkout-box] ion-card [panel-heading][checkout-head] {\n        background: #f5f5f5; }\n\nion-content [checkout-box] ion-card [panel-heading][checkout-head] h4 {\n          margin-top: var(--ion-margin-0); }\n\n@media only screen and (max-width: 991px) {\n            ion-content [checkout-box] ion-card [panel-heading][checkout-head] h4 {\n              margin-bottom: var(--ion-margin-0); } }\n\nion-content [checkout-box] ion-card [panel-heading][checkout-head] h4 a {\n            font-family: var(--ion-font-family-2);\n            color: var(--ion-color-darkblack3);\n            text-transform: uppercase;\n            display: block;\n            margin: var(--ion-margin-0);\n            font-size: var(--ion-font-size-13);\n            font-weight: bold;\n            text-decoration: none; }\n\nion-content [checkout-box] ion-card [panel-heading][checkout-head] h4 a.selected span {\n              background: var(--ion-color-darkred); }\n\nion-content [checkout-box] ion-card [panel-heading][checkout-head] h4 a span {\n              color: var(--ion-color-white);\n              display: inline-block;\n              margin-right: var(--ion-margin-10);\n              padding: var(--ion-padding-15) var(--ion-padding-20);\n              background: #aaaaaa; }\n\n@media only screen and (max-width: 991px) {\n        ion-content [checkout-box] ion-card [panel-body] .register-form ion-col {\n          padding-left: var(--ion-padding-0);\n          padding-right: var(--ion-padding-0); } }\n\nion-content [checkout-box] ion-card [panel-body] .register-form [checkbox] {\n        display: block; }\n\n@media only screen and (max-width: 991px) {\n          ion-content [checkout-box] ion-card [panel-body] .register-form [checkbox] {\n            padding-left: var(--ion-padding-15);\n            padding-right: var(--ion-padding-15); } }\n\nion-content [checkout-box] ion-card [panel-body] .register-form [checkbox] label, ion-content [checkout-box] ion-card [panel-body] .register-form [checkbox] ion-label {\n          font-size: var(--ion-font-size-14);\n          font-family: var(--ion-font-family-2);\n          font-weight: normal;\n          color: var(--ion-color-darkblack); }\n\nion-content [checkout-box] ion-card [form-group] {\n        --background: transparent!important;\n        margin-bottom: var(--ion-margin-10); }\n\n@media only screen and (max-width: 991px) {\n          ion-content [checkout-box] ion-card [form-group] {\n            margin-bottom: var(--ion-margin-0); } }\n\nion-content [checkout-box] ion-card [form-group] ion-label {\n          display: inline-block;\n          max-width: 100%;\n          margin-bottom: var(--ion-margin-5);\n          font-weight: 700;\n          color: var(--ion-color-darkblack);\n          font-size: var(--ion-font-size-14);\n          font-family: var(--ion-font-family-2);\n          -webkit-transform: scale(1);\n                  transform: scale(1); }\n\n@media only screen and (max-width: 991px) {\n            ion-content [checkout-box] ion-card [form-group] ion-label {\n              margin-bottom: var(--ion-margin-0);\n              font-weight: normal;\n              display: block; } }\n\nion-content [checkout-box] ion-card [form-group] ion-input, ion-content [checkout-box] ion-card [form-group] ion-select {\n          border-radius: var(--ion-value-3);\n          box-shadow: none;\n          font-size: var(--ion-font-size-14);\n          border: 1px solid #eee;\n          background: var(--ion-color-white);\n          height: var(--ion-wh-42) !important;\n          padding: var(--ion-padding-10) var(--ion-padding-10) !important;\n          font-family: var(--ion-font-family-2); }\n\n@media only screen and (max-width: 991px) {\n            ion-content [checkout-box] ion-card [form-group] ion-input, ion-content [checkout-box] ion-card [form-group] ion-select {\n              background: transparent;\n              height: auto;\n              border-radius: var(--ion-value-0);\n              border-width: var(--ion-value-0) var(--ion-value-0) 1px var(--ion-value-0);\n              /*padding:  inherit!important; */ } }\n\nion-content [checkout-box] ion-button {\n      font-family: var(--ion-font-family-2);\n      --border-radius:0px;\n      --box-shadow:none; }\n\nion-content [checkout-box] ion-button:hover {\n        opacity: 0.8; }\n\n@media only screen and (max-width: 991px) {\n        ion-content [checkout-box] ion-button {\n          font-size: var(--ion-font-size-14);\n          margin-left: var(--ion-margin-15); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBS0Esa0NBQWE7RUFRYiwyQkFBQTtFQXdUQSwwQkFBQSxFQUEyQjs7QUFyVTNCO0lBR0MsYUFBYSxFQUFBOztBQUdaO0lBTkY7TUFRSyw0Q0FBYztNQUNmLCtDQUFpQjtNQUNqQiw4Q0FBZ0I7TUFDaEIsNENBQWMsRUFBQSxFQTRUakI7O0FBdlVEO0lBZ0JBLHVCQUFBO0lBUUEsd0JBQUE7SUE4SkEsdUJBQUEsRUFBd0I7O0FBbkt0QjtNQW5CRjtRQXFCRyw2QkFBNEIsRUFBQSxFQUU5Qjs7QUF2QkQ7TUE0QkksbUNBQW1DLEVBQUE7O0FBQ3ZDO1FBN0JBO1VBK0JDLG1DQUFtQztVQUNuQyxxQ0FBcUMsRUFBQSxFQW1KbkM7O0FBbkxIO1FBdUNXLDJCQUEyQjtRQUNqQyxrQ0FBa0M7UUFDbEMsaUJBQWlCO1FBQ2pCLGdDQUFnQztRQUNoQyxxQ0FBc0M7UUFDdEMsbUNBQWtDO1FBQ2xDLHFDQUFxQztRQUNwQyxpQ0FBaUMsRUFBQTs7QUFDL0I7VUEvQ1I7WUFpRE8sOEJBQStCO1lBQy9CLGtDQUFrQyxFQUFBLEVBRW5DOztBQXBETjtRQXdETyxxQ0FBcUMsRUFBQTs7QUFHeEM7VUEzREo7WUE2REkseUVBQTJFLEVBQUE7WUE3RC9FO2NBa0VLLDZCQUE0QixFQUFBLEVBQzVCOztBQW5FTDtVQXlFUyxtQ0FBb0M7VUFDekMsMEVBQTBFO1VBTTFFLG1DQUFtQztVQUNsQyxhQUFZO1VBQUssc0JBQXNCLEVBQUE7O0FBTnhDO1lBM0VKO2NBNkVNLGtDQUFtQztjQUNyQyw2QkFBNkI7Y0FBQyxZQUFXLEVBQUEsRUE0Q3pDOztBQTFISjtZQW1GUSxtQ0FBa0MsRUFBQTs7QUFuRjFDO1lBc0ZLLDhEQUE4RCxFQUFBOztBQUM5RDtjQXZGTDtnQkF5RlUsWUFBWSxFQUFBLEVBRWhCOztBQTNGTjtZQTZGVyxpQ0FBaUM7WUFDbkMsWUFBWTtZQUNmLGdCQUFnQjtZQUNoQixrQ0FBa0M7WUFDbEMsbUNBQW1DO1lBQ25DLCtCQUErQjtZQUMvQiw2QkFBNkI7WUFDN0IscUNBQXFDLEVBQUE7O0FBQ3JDO2NBckdOO2dCQXNHVyxrQ0FBa0MsRUFBQSxFQUl4Qzs7QUExR0w7WUE4R1MsWUFBWSxFQUFBOztBQTlHckI7WUFrSE0sVUFBVTtZQUNWLHFCQUFxQixFQUFBOztBQW5IM0I7WUF3SE0sY0FBYSxFQUFBOztBQXhIbkI7VUE2SG9CLGtDQUFrQztVQUNqRCxtQkFBbUI7VUFDbkIsY0FBYztVQUNkLDZCQUE2QjtVQUM3QixvREFBb0Q7VUFDcEQsa0NBQWtDLEVBQUE7O0FBQ2xDO1lBbklMO2NBb0lTLGtDQUFrQztjQUNsQyxvREFBb0Q7Y0FBSywrQkFBK0IsRUFBQSxFQUU3Rjs7QUF2SUo7VUEySVUsa0NBQWtDO1VBQ3hDLGlCQUFpQjtVQUNqQixrQ0FBa0M7VUFDbEMseUJBQXlCO1VBQ3pCLG1DQUFtQztVQUNuQyxnQ0FBZ0MsRUFBQTs7QUFDaEM7WUFqSko7Y0FrSlMsa0NBQWtDO2NBQ2xDLG1EQUFtRCxFQUFBLEVBR3pEOztBQXRKSDtVQXlKUyxrQ0FBa0M7VUFDdkMsaUNBQWlDO1VBQ2hDLHFDQUFxQyxFQUFBOztBQU10QztVQWpLSjtZQWtLUyxrQ0FBa0MsRUFBQSxFQUVyQzs7QUFwS047VUF1S1UsZ0NBQStCLEVBQUE7O0FBdkt6QztVQTRLbUIsbUNBQW1DO1VBQ25DLGtDQUFrQztVQUM5QyxpQ0FBaUM7VUFDaEMscUNBQXFDLEVBQUE7O0FBL0s3QztNQXdMSyxrQ0FBaUM7TUFDL0IsMkNBQXVDO01BcUg5QyxzQkFBQSxFQUF1Qjs7QUE5U3ZCO1FBNkxLLG1CQUFrQixFQUFBOztBQTdMdkI7VUFpTVEsK0JBQThCLEVBQUE7O0FBQzlCO1lBbE1SO2NBb01XLGtDQUFpQyxFQUFBLEVBNEJyQzs7QUFoT1A7WUF1TWtCLHFDQUFxQztZQUM5QyxrQ0FBa0M7WUFDbEMseUJBQXlCO1lBQ3pCLGNBQWM7WUFDZCwyQkFBNEI7WUFDNUIsa0NBQWtDO1lBQ2xDLGlCQUFpQjtZQUNqQixxQkFBb0IsRUFBQTs7QUE5TTdCO2NBb05hLG9DQUFvQyxFQUFBOztBQXBOakQ7Y0F5TlMsNkJBQTZCO2NBQzdCLHFCQUFxQjtjQUNyQixrQ0FBa0M7Y0FDbEMsb0RBQXFEO2NBQ3JELG1CQUFrQixFQUFBOztBQVUzQjtRQXZPQTtVQTBPRyxrQ0FBbUM7VUFDbkMsbUNBQW1DLEVBQUEsRUFDbkM7O0FBNU9IO1FBK09VLGNBQWEsRUFBQTs7QUFDWDtVQWhQWjtZQWtQUyxtQ0FBb0M7WUFDakIsb0NBQW9DLEVBQUEsRUFTekQ7O0FBNVBQO1VBdVBTLGtDQUFrQztVQUNsQyxxQ0FBcUM7VUFDckMsbUJBQWtCO1VBQ00saUNBQWlDLEVBQUE7O0FBMVBsRTtRQWtRa0IsbUNBQWE7UUFDckIsbUNBQW1DLEVBQUE7O0FBQ3hDO1VBcFFMO1lBc1FPLGtDQUFrQyxFQUFBLEVBdUNuQzs7QUE3U047VUEwUWdCLHFCQUFxQjtVQUM3QixlQUFlO1VBQ2Ysa0NBQWtDO1VBQ2xDLGdCQUFnQjtVQUNoQixpQ0FBaUM7VUFDakMsa0NBQWtDO1VBQ2xDLHFDQUFxQztVQUNyQywyQkFBbUI7a0JBQW5CLG1CQUFtQixFQUFBOztBQUNuQjtZQWxSUjtjQW9SUyxrQ0FBa0M7Y0FDbEMsbUJBQW1CO2NBQ2hCLGNBQWEsRUFBQSxFQUVsQjs7QUF4UlA7VUEwUmdCLGlDQUFpQztVQUMxQyxnQkFBZ0I7VUFDaEIsa0NBQWtDO1VBQ2xDLHNCQUFzQjtVQUN0QixrQ0FBaUM7VUFDakMsbUNBQWtDO1VBQ2xDLCtEQUFnRTtVQUNoRSxxQ0FBcUMsRUFBQTs7QUFDckM7WUFsU1A7Y0FvU1ksdUJBQXNCO2NBQ3RCLFlBQVk7Y0FDZixpQ0FBaUM7Y0FDakMsMEVBQXlFO2NBQ3pFLGdDQUFBLEVBQWlDLEVBR25DOztBQTNTUDtNQW9URyxxQ0FBcUM7TUFDckMsbUJBQWdCO01BQ2hCLGlCQUFhLEVBQUE7O0FBdFRoQjtRQXlUSSxZQUFXLEVBQUE7O0FBRVo7UUEzVEg7VUE2VEksa0NBQWtDO1VBQ2xDLGlDQUFnQyxFQUFBLEVBRWpDIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cbmlvbi1jb250ZW50XG57ICBcbi5wYWRfMTB7XG5cdHBhZGRpbmc6IDEwcHg7XG59XG4tLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0eyBcblx0XHQgICAtLXBhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLTgpIWltcG9ydGFudDtcblx0ICAgLS1wYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZy04KSFpbXBvcnRhbnQ7XG5cdCAgIC0tcGFkZGluZy1zdGFydDp2YXIoLS1pb24tcGFkZGluZy04KSFpbXBvcnRhbnQ7XG5cdCAgIC0tcGFkZGluZy1lbmQ6dmFyKC0taW9uLXBhZGRpbmctOCkhaW1wb3J0YW50O1xuXHRcdH1cbi8qIGNoZWNrb3V0IHNlY3Rpb24gc3RhcnQgKi9cbltjaGVja291dC1ib3hdXG57IFxuLyogTGVmdCBTZWN0aW9uIFN0YXJ0ICovXG5pb24tY2FyZFxue1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0eyBcblx0XHQgcGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0wKTtcblx0XHR9XG59XHRcbi8qIFJpZ2h0IFNlY3Rpb24gU3RhcnQgKi9cdFx0XG5bY2hlY2tvdXQtcHJvZ3Jlc3Mtc2lkZWJhcl1cbnsgIFxuaW9uLWNhcmRcbnsgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTIwKTtcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcbntcbiBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTEwKTtcbiBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctMTApO1xufVxuXHQgIFtwYW5lbC1oZWFkaW5nXSBcblx0ICB7XG5cdFx0IGg0XG5cdFx0IHtcblx0XHQgICAmW3VuaWNhc2UtY2hlY2tvdXQtdGl0bGVdXG5cdFx0ICAgeyAgICAgbWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHQgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcblx0XHRcdFx0IGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHQgYm9yZGVyLWJvdHRvbTogMXB4ICNlNWU1ZTUgc29saWQ7XG5cdFx0XHRcdCBwYWRkaW5nLWJvdHRvbTogdmFyKCAtLWlvbi1wYWRkaW5nLTE0KTtcblx0XHRcdFx0IG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi0xMCk7XG5cdFx0XHRcdCBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdFx0XHQgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcblx0XHRcdCAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHRcdHsgXG5cdFx0XHRcdFx0ICBwYWRkaW5nOiB2YXIoIC0taW9uLXBhZGRpbmctMTUpO1xuXHRcdFx0XHRcdCAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdFx0XHR9XG5cdFx0ICAgfVxuXHRcdCB9XHQgXG5cdCAgfVxuXHQgIFtwcmljZV9zaW5nbGVfY29zdF1cblx0ICB7IFx0IGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdCAgJltwYXltZW50LWluZm9dXG5cdCAge1xuXHRcdCAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdCAge1xuXHRcdFx0IHBhZGRpbmc6dmFyKCAtLWlvbi1wYWRkaW5nLTE1KSB2YXIoIC0taW9uLXBhZGRpbmctMTUpIHZhciggLS1pb24tcGFkZGluZy0wKTtcblx0XHRcdCAgW2NoZWNrcy1sZnRdXG5cdFx0XHQgIHtcbiAgICAgICAgICAgICAgICBpb24taXRlbVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VlZTtcblx0XHRcdFx0fVxuXHRcdFx0ICB9ICBcblx0XHQgIH1cblx0ICB9XG5cdCAgW2Rlc2NdXG5cdCAge1xuXHRcdCAgICAgICBiYWNrZ3JvdW5kOiB2YXIoIC0taW9uLWNvbG9yLWdyZXlmOCk7XG5cdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMTUpO1xuXHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQgYmFja2dyb3VuZDogdmFyKCAtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO2JvcmRlcjpub25lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMjUpO1xuXHRcdFx0XHRcdGRpc3BsYXk6bm9uZTsgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcdFx0XHRcdFx0XG5cdFx0XHRcdFx0aW9uLWlucHV0ICwgaW9uLXNlbGVjdHtcblx0XHRcdFx0XHQgIFx0aGVpZ2h0OiB2YXIoLS1pb24td2gtMzYpIWltcG9ydGFudDtcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpb24tc2VsZWN0e1xuXHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTcpICB2YXIoLS1pb24tcGFkZGluZy0xMCkhaW1wb3J0YW50O1x0XG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCAgICBib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0aDJcblx0XHRcdFx0eyAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcblx0XHRcdFx0XHQgICAgYm9yZGVyOiBub25lO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xOCk7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTE1KTtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy0xNSk7XG5cdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0XHRcdFx0XHRcdHsgIFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KVxuXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdFx0W2NhcmQtcHN5c11cblx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRcdFx0ICB3aWR0aDogMjAwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0ICAgICAgICAgICAgfVxuXHRcdFx0XHQgICBbdy01MHNdIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA0OCU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0XHQmLmFjdGl2ZVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0XHRcdFx0fVxuXHQgIH1cblx0XHQgaDRcblx0XHQgeyAgXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHRcdFx0XHRjb2xvcjogIzc5Nzk3OTtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcblx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xMikgdmFyKC0taW9uLXBhZGRpbmctMTApO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHRcdHsgIFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcblx0XHRcdFx0XHQgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTIpIHZhcigtLWlvbi1wYWRkaW5nLTE1KTsgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdFx0XHR9XG5cdFx0IH1cblx0XHRoM1xuXHRcdHtcbiAgICAgICAgIFxuXHRcdCAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE4KTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrNCk7XG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTE0KTtcblx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHRcdHsgIFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcblx0XHRcdFx0XHQgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCkgdmFyKC0taW9uLXBhZGRpbmctMTUpO1xuXHRcdFx0XHRcdH1cblx0XHQgXG5cdFx0fVx0XG5cdFx0cFxuXHRcdHtcblx0XHRcdCAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcblx0XHRcdFx0IGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0fVxuXHRcdCAucmFkaW8tY2hlY2tvdXQtdW5pY2FzZVxuXHRcdCB7ICAgXG5cdFx0ICAgICAgaW9uLWxhYmVsXG5cdFx0XHQgIHtcblx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHRcdHsgIFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KVxuXHRcdFx0XHRcdH1cblx0XHRcdCAgfVxuXHRcdFx0ICBpbnB1dFt0eXBlPVwicmFkaW9cIl1cblx0XHRcdCAge1xuXHRcdFx0XHQgICAgICBtYXJnaW4tbGVmdDp2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0ICB9XG5cdFx0XHQgIC5yYWRpby1idXR0b25cblx0XHRcdCAge1xuXHRcdFx0XHQgICBcbiAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTEwKTtcbiAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdFx0XHQgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG5cdFx0XHRcdCAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdFx0ICB9XG5cdFx0IH1cblx0ICB9XG4gIH1cblxufVx0XG4vKiBSaWdodCBTZWN0aW9uIEVuZHMgKi9cdFxuXHQgaW9uLWNhcmRcblx0IHsgIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0ICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwuMDgpO1xuXHRcdFx0XHRbcGFuZWwtaGVhZGluZ11cblx0XHRcdFx0eyAgICAgJltjaGVja291dC1oZWFkXVxuXHRcdCAgICAgICAgICAgICB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDojZjVmNWY1O1xuXHRcdFx0XHRcdCBcblx0XHRcdFx0XHQgaDRcblx0XHRcdFx0XHQge1xuXHRcdFx0XHRcdFx0ICBtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0XHQgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0XHRcdCAge1xuXHRcdFx0XHRcdFx0XHQgICAgbWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0XHQgYVxuXHRcdFx0XHRcdFx0IHsgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrMyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46ICB2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdCYuc2VsZWN0ZWRcblx0XHRcdFx0XHRcdFx0XHRcdHsgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgc3BhblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1x0IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCBzcGFuXG5cdFx0XHRcdFx0XHRcdCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbi0xMCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAgdmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6I2FhYWFhYTtcdCBcblx0XHRcdFx0XHRcdFx0IH1cblx0XHRcdFx0XHRcdCB9XG5cdFx0XHRcdFx0IH1cblx0XHRcdFx0fVxuXHRcdH1cblx0XHQgW3BhbmVsLWJvZHldXG4gICAgICAgICB7XG4gICAgICAgICAgIC5yZWdpc3Rlci1mb3JtXG5cdFx0ICAgeyBcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcbntcblx0XHRpb24tY29sIHtcblx0XHRcdHBhZGRpbmctbGVmdDogIHZhcigtLWlvbi1wYWRkaW5nLTApO1xuXHRcdFx0cGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmctMCk7XG5cdFx0fVx0XG59XG5cdFx0ICAgW2NoZWNrYm94XVxuXHRcdFx0XHQgIHsgICBkaXNwbGF5OmJsb2NrO1xuXHRcdFx0XHRcdCAgICBcdCAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogIHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZy0xNSk7XHRcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWwgICwgaW9uLWxhYmVsXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDpub3JtYWw7XHRcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHQgIH1cblx0XHRcdCBcdFx0ICBcblx0XHQgICB9XG5cdFx0IH1cbiBbZm9ybS1ncm91cF1cblx0XHRcdCAge1xuICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG5cdFx0XHRcdCAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApO1xuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgaW9uLWxhYmVsXG5cdFx0XHRcdCAge1xuXHRcdFx0XHRcdCAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTUpO1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xuXHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHRcdFx0XHRcdFx0XHQgICAgZGlzcGxheTpibG9jaztcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgfVxuXHRcdFx0XHQgIGlvbi1pbnB1dCAsIGlvbi1zZWxlY3Rcblx0XHRcdFx0ICB7ICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTMpO1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogdmFyKC0taW9uLXdoLTQyKSFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICB2YXIoLS1pb24tcGFkZGluZy0xMCkgIHZhcigtLWlvbi1wYWRkaW5nLTEwKSFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0XHRcdFx0XHR7ICAgXG5cdFx0XHRcdFx0XHRcdFx0ICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHRcdFx0ICAgIGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS0wKTtcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci13aWR0aDp2YXIoLS1pb24tdmFsdWUtMCkgdmFyKC0taW9uLXZhbHVlLTApIDFweCB2YXIoLS1pb24tdmFsdWUtMCk7XG5cdFx0XHRcdFx0XHRcdFx0XHQvKnBhZGRpbmc6ICBpbmhlcml0IWltcG9ydGFudDsgKi9cblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0ICB9XG5cdFx0XHRcdCAgXG5cdFx0XHQgIH1cdFx0XHQgXG4vKiBMZWZ0IFNlY3Rpb24gRW5kcyAqL1x0XHQgXG5cdCBcbn1cblx0IFxuXHQgaW9uLWJ1dHRvbiBcblx0IHtcblx0XHQgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0XHQgLS1ib3JkZXItcmFkaXVzOjBweDtcblx0XHQgLS1ib3gtc2hhZG93Om5vbmU7XG5cdFx0ICY6aG92ZXJcblx0XHQge1xuXHRcdFx0IG9wYWNpdHk6MC44O1xuXHRcdCB9XG5cdFx0IEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdHsgXG5cdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OnZhcigtLWlvbi1tYXJnaW4tMTUpO1xuXHRcdFx0fVxuXHQgfVxufVxuXG5cbiBcbi8qIGNoZWNrb3V0IHNlY3Rpb24gZW5kcyAqL1xuXG59ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiXX0= */"

/***/ }),

/***/ "./src/app/checkout/checkout.page.ts":
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");








var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(userService, toastController, loadingController, router, events, activatedRoute, payPal, mapsAPILoader, ngZone) {
        var _this_1 = this;
        this.userService = userService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.router = router;
        this.events = events;
        this.activatedRoute = activatedRoute;
        this.payPal = payPal;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.errors = ['', null, undefined];
        this.buttonClickeddrop = false;
        this.a_last_name = '';
        this.is_loaded = false;
        this.is_coupon_applied = false;
        this.is_paypal_web_enabled = false;
        this.address_type = '0';
        this.isBrowser = localStorage.getItem('isBrowser');
        this.userSettings = { inputPlaceholderText: 'Enter your address...' };
        events.subscribe('current_address_changed:true', function (data) {
            _this_1.current_address();
        });
    }
    CheckoutPage.prototype.ngOnInit = function () {
        var _this_1 = this;
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            _this_1.setCurrentLocation();
            _this_1.geoCoder = new google.maps.Geocoder;
            var autocomplete = new google.maps.places.Autocomplete(_this_1.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this_1.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this_1.latitude = place.geometry.location.lat();
                    _this_1.longitude = place.geometry.location.lng();
                    _this_1.zoom = 12;
                });
            });
        });
    };
    CheckoutPage.prototype.setCurrentLocation = function () {
        var _this_1 = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this_1.latitude = position.coords.latitude;
                _this_1.longitude = position.coords.longitude;
                _this_1.zoom = 8;
                _this_1.getAddress(_this_1.latitude, _this_1.longitude, true);
            });
        }
    };
    CheckoutPage.prototype.markerDragEnd = function ($event) {
        console.log($event);
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude, true);
    };
    CheckoutPage.prototype.autoCompleteCallback = function (selectedData) {
        console.log('running...');
        this.latitude = selectedData.data.geometry.location.lat;
        this.longitude = selectedData.data.geometry.location.lng;
        this.getAddress(this.latitude, this.longitude, false);
    };
    CheckoutPage.prototype.getAddress = function (latitude, longitude, is_update) {
        var _this_1 = this;
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
            console.log(results);
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    _this_1.zoom = 12;
                    _this_1.address = results[0].formatted_address;
                    _this_1.a_address = _this_1.address;
                    if (is_update == true) {
                        _this_1.userSettings['inputString'] = _this_1.address;
                        _this_1.userSettings = Object.assign({}, _this_1.userSettings);
                    }
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    CheckoutPage.prototype.ionViewDidEnter = function () {
        this.transaction_id = '';
        this.address_type = '0';
        this.current_address();
        var direct = this.activatedRoute.snapshot.paramMap.get('direct');
        var token = localStorage.getItem('sin_auth_token');
        this.userId = this.userService.decryptData(token, _config__WEBPACK_IMPORTED_MODULE_2__["config"].ENC_SALT);
        this.payment_method = 'cash';
        if (direct != 'direct') {
            this.is_wholesale = false;
            var is_coupon_applied = localStorage.getItem('coupon_applied');
            if (is_coupon_applied == 'success') {
                this.is_coupon_applied = true;
                this.coupon_amount = localStorage.getItem('coupon_applied_amount');
                this.coupon_id = localStorage.getItem('applied_coupon_id');
                this.applied_coupon_type = 'Dollar';
            }
            this.total_payable_price = 0;
            this.grand_total = 0;
            this.getCartProducts();
            if (this.userId != 0) {
                this.getProfile();
            }
        }
        else {
            this.getCartProducts();
            this.is_wholesale = true;
            // if(this.userId != 0){
            this.cart = JSON.parse(localStorage.getItem('sin_wholesale_items'));
            if (this.cart != '') {
                this.is_loaded = true;
                this.total_payable_price = this.cart[0].product_purchase_price;
                this.grand_total = this.total_payable_price;
            }
            this.getProfile();
            // }
        }
        console.log(this.cart);
    };
    CheckoutPage.prototype.initializePaypalWeb = function () {
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
    CheckoutPage.prototype.current_address = function () {
        var current_address = JSON.parse(localStorage.getItem('sin_current_address'));
        if (this.errors.indexOf(current_address) == -1) {
            this.a_address = current_address.name + ', ' + current_address.vicinity;
        }
    };
    CheckoutPage.prototype.ionViewWillUnload = function () {
        this.events.unsubscribe('current_address_changed:true');
    };
    CheckoutPage.prototype.applyCoupon = function () {
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
    CheckoutPage.prototype.removeCoupon = function () {
        this.applied_coupon_id = 0;
        this.coupon_code = '';
        this.is_coupon_applied = false;
        this.coupon_amount = 0;
        this.calculateTotalPrice();
    };
    CheckoutPage.prototype.getCartProducts = function () {
        var _this_1 = this;
        this.presentLoading();
        this.userService.postData({ user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId }, 'getCartProducts').subscribe(function (result) {
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
    CheckoutPage.prototype.getProfile = function () {
        var _this_1 = this;
        this.userService.postData({ userId: this.userId }, 'getProfile').subscribe(function (result) {
            _this_1.profile = result.profile;
            _this_1.countries = result.countries;
            _this_1.addresses = result.addresses;
            _this_1.cards = result.cards;
        }, function (err) {
            _this_1.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    CheckoutPage.prototype.addressSelected = function (event) {
        this.selected_address = event.target.value;
        this.choosed_address = this.addresses[this.selected_address];
    };
    CheckoutPage.prototype.chooseAddress = function (event) {
        this.address_type = event.target.value;
    };
    CheckoutPage.prototype.cardSelected = function (event) {
        this.selected_card = event.target.value;
        this.choosed_card = this.cards[this.selected_card];
    };
    CheckoutPage.prototype.finalCheckout = function () {
        if (this.userId != 0) {
            var main_address;
            if (this.address_type == '1') {
                if (this.errors.indexOf(this.selected_address) >= 0) {
                    this.presentToast('Please select billing address.', 'danger');
                    return false;
                }
                else {
                    main_address = this.selected_address.full_address + ' ' + this.selected_address.address_city + ' ' + this.selected_address.address_state + ' ' + this.selected_address.country_name;
                }
            }
            if (this.address_type == '0') {
                if (this.errors.indexOf(this.a_first_name) >= 0) {
                    this.presentToast('Please enter first name.', 'danger');
                    return false;
                }
                if (this.errors.indexOf(this.a_last_name) >= 0) {
                    this.presentToast('Please enter last name.', 'danger');
                    return false;
                }
                if (this.errors.indexOf(this.a_email_address) >= 0) {
                    this.presentToast('Please enter email address.', 'danger');
                    return false;
                }
                var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (reg.test(this.a_email_address) == false) {
                    this.presentToast('Please enter valid email address.', 'danger');
                    return false;
                }
                if (this.errors.indexOf(this.a_phone_number) >= 0) {
                    this.presentToast('Please enter phone number.', 'danger');
                    return false;
                }
                if (this.errors.indexOf(this.a_address) >= 0) {
                    this.presentToast('Please enter address.', 'danger');
                    return false;
                }
                if (this.errors.indexOf(this.a_city) >= 0) {
                    this.presentToast('Please enter city.', 'danger');
                    return false;
                }
                if (this.errors.indexOf(this.a_state) >= 0) {
                    this.presentToast('Please enter state.', 'danger');
                    return false;
                }
                if (this.errors.indexOf(this.a_country) >= 0) {
                    this.presentToast('Please enter country.', 'danger');
                    return false;
                }
                if (this.errors.indexOf(this.a_zip) >= 0) {
                    this.presentToast('Please enter zip code.', 'danger');
                    return false;
                }
                main_address = this.a_address + ' ' + this.a_city + ' ' + this.a_state + ' ' + this.a_country;
                this.choosed_address = {
                    address_first_name: this.a_first_name,
                    address_last_name: this.a_last_name,
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
            }
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
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    CheckoutPage.prototype.placeOrder = function () {
        var _this_1 = this;
        var params = {
            user_id: this.userId,
            products: this.cart,
            address: this.choosed_address,
            payment_method: this.payment_method,
            payment_card: this.choosed_card,
            coupon: this.is_coupon_applied,
            coupon_id: (this.errors.indexOf(this.coupon_id) >= 0 ? 0 : this.coupon_id),
            total_amount: this.grand_total.toFixed(2),
            transaction_id: this.transaction_id,
            wish_id: 0,
            is_registry: 0,
            shared_by: 0
        };
        this.presentLoading();
        this.userService.postData(params, 'place_order').subscribe(function (result) {
            if (result.status == 1) {
                localStorage.removeItem('sin_wholesale_items');
                _this_1.transaction_id = '';
                var success_msg = 'Success! Your order has been placed successfully.';
                if (_this_1.can_save_address == true) {
                    _this_1.userService.postData(_this_1.choosed_address, 'updateUserAddress').subscribe(function (address_added) {
                        _this_1.stopLoading();
                        _this_1.presentToast(success_msg, 'success');
                        _this_1.events.publish('cart_updated:true', { items_in_cart: 0, cart_price: 0 });
                        _this_1.router.navigate(['/thankyou/' + result.products]);
                    }, function (err) {
                        _this_1.stopLoading();
                        _this_1.presentToast(success_msg, 'success');
                        _this_1.events.publish('cart_updated:true', { items_in_cart: 0, cart_price: 0 });
                        _this_1.router.navigate(['/thankyou/' + result.products]);
                    });
                }
                else {
                    _this_1.stopLoading();
                    _this_1.presentToast(success_msg, 'success');
                    _this_1.events.publish('cart_updated:true', { items_in_cart: 0, cart_price: 0 });
                    _this_1.router.navigate(['/thankyou/' + result.products]);
                }
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
    CheckoutPage.prototype.payWithPaypal = function () {
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
    CheckoutPage.prototype.calculateTotalPrice = function () {
        var self = this;
        this.cart.forEach(function (item) {
            if (Number(item.wholesale_price) != 0 && Number(item.product_quantity) >= Number(item.wholesale_products) && self.errors.indexOf(item.wholesale_products) == -1) {
                self.total_payable_price = Number(self.total_payable_price) + (item.wholesale_price * item.product_quantity);
            }
            else if (item.is_variation == 1) {
                self.total_payable_price = Number(self.total_payable_price) + (item.product_price * item.product_quantity);
            }
            else {
                if (self.errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price) {
                    if (item.discount_per_piece != null) {
                        if (item.discount_type == '%') {
                            var singleItemPrice = Number(item.product_sale_price) - ((Number(item.discount_per_piece) / Number(item.product_sale_price)) * 100);
                            self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice * item.product_quantity);
                        }
                        else {
                            var singleItemPrice = Number(item.product_sale_price) - Number(item.discount_per_piece);
                            self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice * item.product_quantity);
                        }
                    }
                    else {
                        self.total_payable_price = Number(self.total_payable_price) + (item.product_sale_price * item.product_quantity);
                    }
                }
                else {
                    if (item.discount_per_piece != null) {
                        if (item.discount_type == '%') {
                            var singleItemPrice = Number(item.product_purchase_price) - ((Number(item.discount_per_piece) / Number(item.product_purchase_price)) * 100);
                            self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice * item.product_quantity);
                        }
                        else {
                            var singleItemPrice = Number(item.product_purchase_price) - Number(item.discount_per_piece);
                            self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice * item.product_quantity);
                        }
                    }
                    else {
                        self.total_payable_price = Number(self.total_payable_price) + (item.product_purchase_price * item.product_quantity);
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
    };
    CheckoutPage.prototype.cashClicked = function () {
        this.payment_method = 'cash';
        this.is_paypal_web_enabled = false;
    };
    CheckoutPage.prototype.presentToast = function (message, color) {
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
    CheckoutPage.prototype.presentLoading = function () {
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
    CheckoutPage.prototype.stopLoading = function () {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CheckoutPage.prototype, "searchElementRef", void 0);
    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.page.html */ "./src/app/checkout/checkout.page.html"),
            styles: [__webpack_require__(/*! ./checkout.page.scss */ "./src/app/checkout/checkout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__["PayPal"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], CheckoutPage);
    return CheckoutPage;
}());

// if(this.cards != ''){
//   if(this.errors.indexOf(this.selected_card) >= 0){
//     this.presentToast('Please select payment card.','danger');
//     return false;
//   }
// }
// if(this.cards == ''){
//   if(this.errors.indexOf(this.c_card_number) >= 0){
//     this.presentToast('Please enter card number.','danger');
//     return false;
//   }
//   if(this.errors.indexOf(this.c_card_type) >= 0){
//     this.presentToast('Please select card type.','danger');
//     return false;
//   }
//   if(this.errors.indexOf(this.c_expiry_month) >= 0){
//     this.presentToast('Please enter expiry month.','danger');
//     return false;
//   }
//   if(this.errors.indexOf(this.c_expiry_year) >= 0){
//     this.presentToast('Please enter expiry year.','danger');
//     return false;
//   }
//   if(this.errors.indexOf(this.c_card_cvv) >= 0){
//     this.presentToast('Please enter card cvv.','danger');
//     return false;
//   }
//   this.choosed_card = {
//     card_number : this.c_card_number,
//     card_type : this.c_card_type,
//     expiry_month : this.c_expiry_month,
//     expiry_year : this.c_expiry_year,
//     cvv : this.c_card_cvv,
//     user_id : this.userId,
//     isAdd : 1,
//     card_id : null
//   };
// }


/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module.js.map