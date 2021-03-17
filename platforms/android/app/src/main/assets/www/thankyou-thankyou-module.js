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
/* harmony import */ var _thankyou_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thankyou.page */ "./src/app/thankyou/thankyou.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _thankyou_page__WEBPACK_IMPORTED_MODULE_6__["ThankyouPage"]
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
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_thankyou_page__WEBPACK_IMPORTED_MODULE_6__["ThankyouPage"]]
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

module.exports = "<!-- <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"darkred\" text-uppercase>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n     Thank You\n    </ion-title>\n\t  <ion-buttons slot=\"end\" >\n          <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n\t     <ion-buttons slot=\"end\">\n          <ion-icon name=\"pin\"></ion-icon>\n    </ion-buttons>\n<ion-buttons slot=\"end\" >\n\t<ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\n\t </ion-buttons>\n  </ion-toolbar> \n      <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n\t              <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n\t              <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n\t              <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n\t              <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t   </div>\n</ion-header>  -->\n<ion-content>\n<div class=\"ion-padding\">\n<div header_height></div>\n<!-- Breadcrumb Start -->\n\t\t<div breadcrumb  class=\"ion-hide-md-down\">\n\t\t\t\t<div breadcrumb-inner>\n\t\t\t\t\t<ul list-inline list-unstyled>\n\t\t\t\t\t<li><a routerLink=\"/home\">Home</a></li>\n\t\t\t\t\t\t<li class=\"active\">  Thank You</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- /.breadcrumb-inner -->\n\t\t</div>\n<!-- Breadcrumb Ends -->\n<!--- thank you start -->\n\n\t\t<ion-row class=\"single-product\">\n            <ion-col size=\"12\" no-padding>\n                <div thankyou-text>\n                    <h3 text class=\"ion-hide-md-down\">Thank You For Your order (#{{order?.rand_order_id}})</h3>\n                    <h3 text class=\"ion-hide-lg-up\">Thank you , your order(#{{order?.rand_order_id}}) has been placed</h3>\n                    <p>We will send you an e-mail confirmation shortly.</p>\n                </div>\n                <div order-summry>\n\t\t\t\t\t<ion-card no-margin class=\"ion-hide-lg-up\">\n\t\t\t\t\t<div class=\"ion-padding\">\n                            <p><b>{{order?.products?.length}} {{order?.products?.length == 1 ? 'item' : 'items'}} will be shipped to {{order?.address_first_name}} {{order?.address_last_name}}</b> at {{order?.full_address}}, {{order?.address_city}}, {{order?.address_state}}, {{order?.country_name}} {{order?.address_zip_code}}</p>\n                          <p no-margin>Guaranteed delivery: <b>July 20, 2019</b></p>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t</ion-card>\n<ion-button routerLink=\"/products\" size=\"full\" color=\"darkred\" class=\"ion-margin-top\">\n\t               Continue Shopping\n\t              </ion-button>\n\t\t\t\t<ion-row class=\"ion-hide-md-down\">\n               <ion-col size=\"12\" size-md=\"8\" no-padding>\n                <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th>Shipping Address</th>\n                    <th>Payment Method</th>\n\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>Name: {{order?.address_first_name}} {{order?.address_last_name}} <br><br>\n                        {{order?.full_address}}, {{order?.address_city}}, {{order?.address_state}} <br>{{order?.country_name}} {{order?.address_zip_code}}</td>\n                        <td>{{order?.payment_method == 'cash' ? 'Cash on delivery' : 'Card Payment'}}</td>\n                       </tr>\n\n                    </tbody>\n                  </table>\n                </ion-col>\n             <ion-col size=\"12\" size-md=\"4\" main-sec-thank no-padding>\n                <table class=\"table\">\n                <thead>\n                <tr>\n                <th>Product</th>\n\t\t\t\t<th>Variations</th>\n                <th>Quantity</th>\n                <th>Price per item</th>\n                </tr>\n                </thead>\n                <tbody>\n\t                <tr *ngFor=\"let product of order?.order_products_data\">\n\t\t                <td>{{product.product_name}}</td>\n\t\t\t\t\t\t<td *ngIf=\"product.is_variation == 0\">-------</td>\n\t\t\t\t\t\t<td *ngIf=\"!product.is_variation\">-------</td>\n\t\t\t\t\t\t<td *ngIf=\"product.is_variation == 1\">\n\t\t\t\t\t\t\t<span *ngFor=\"let variation of product.product_variations\"> {{variation?.name}}: {{variation?.value}}</span>\n\t\t\t\t\t\t</td>\n\t\t                <td>{{product.product_quantity}}</td>\n\t\t                <td><i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n\t\t                \t<span>{{subtotalPrice(product)}}</span>\n\t\t                \t<!-- <span *ngIf=\"(errors.indexOf(product?.product_sale_price) >= 0 || product?.product_sale_price == product?.product_purchase_price) && product.is_variation == 0\">{{product?.product_purchase_price}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"product.is_variation == 1\">{{product?.product_price}}</span> -->\n\n\t\t\t\t\t\t</td>\n\t                </tr>\n\t                <tr>\n\t\t                <td></td>\n\t\t                <td>\n\t\t                \t<div main-sec>\n\t\t                \tTotal: <i class=\"fa fa-usd\" aria-hidden=\"true\"> {{order?.total_amount.toFixed(2)}}\n\t\t                \t</i></div>\n\t\t\t\t\t\t</td>\n\t                </tr>\n                </tbody>\n                </table>\n              </ion-col>\n             </ion-row>\n\n            </div>\n             </ion-col>\n\t\t\t\t<!--  RECOMMENDATIONS BASED ON YOUR ORDERS  Start -->\n<!-- \t\t <ion-col class=\"ion-margin-top ion-hide-md-down\" size-lg=\"12\" size-md=\"12\" size-sm=\"12\" size=\"12\" new-product best-sellers >\n\t\t   <ion-card id=\"product-tabs-slider\" scroll-tabs no-margin>\n\t\t\t  <div more-info-tab>\n\t\t\t       <h3 new-product-title float-left>Recommendations based on your orders</h3>\n\t\t\t  </div>\n\t\t <div product-slider>\n\t\t\t<ion-row padding>\n\t\t\t  <ion-col size-lg=\"2\" size-md=\"3\">\n\t\t\t\t<div products>\n\t\t\t\t\t<div product>\n\t\t\t\t\t\t<div product-image>\n\t\t\t\t\t\t\t<div image>\n\t\t\t\t\t\t\t\t   <a>\n\t\t\t\t\t\t\t\t\t  <img  src=\"assets/images/products/p5.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t<div tag hot>\n\t\t\t\t\t\t\t   <span>hot</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t   <div product-info text-left>\n\t\t\t\t\t\t  <h3 name><a href=\"#\">Reebok Sports Shoes </a></h3>\n\t\t\t\t\t\t  <div rating rateit-small>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t  <div description></div>\n\t\t\t\t\t\t  <div product-price>\n\t\t\t\t\t\t  <span price> $412.99 </span>\n\t\t\t\t\t\t  <span price-before-discount>$ 500</span>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t   <div cart>\n\t\t\t\t\t  <div action>\n\t\t\t\t\t\t<ul list-unstyled>\n\t\t\t\t\t\t  <li add-cart-button btn-group>\n\t\t\t\t\t\t   <ion-button  add-to-cart color=\"darkred\" title=\"Add Cart\">\n\t\t\t\t\t\t\t <ion-icon name=\"cart\"></ion-icon>\n\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t  <li lnk wishlist>\n\t\t\t\t\t\t  <ion-button  color=\"darkblue\" add-to-cart title=\"Wishlist\">\n\t\t\t\t\t\t\t <ion-icon name=\"heart\"></ion-icon>\n\t\t\t\t\t\t  </ion-button> </li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t <ion-col size-lg=\"2\" size-md=\"3\">\n\t\t\t\t<div products>\n\t\t\t\t\t<div product>\n\t\t\t\t\t\t<div product-image>\n\t\t\t\t\t\t\t<div image>\n\t\t\t\t\t\t\t\t   <a>\n\t\t\t\t\t\t\t\t\t  <img  src=\"assets/images/products/p20.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t<div tag hot>\n\t\t\t\t\t\t\t   <span>hot</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t   <div product-info text-left>\n\t\t\t\t\t\t  <h3 name><a href=\"#\">Girls' Carry Bag</a></h3>\n\t\t\t\t\t\t  <div rating rateit-small>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t  <div description></div>\n\t\t\t\t\t\t  <div product-price>\n\t\t\t\t\t\t  <span price> $450.99 </span>\n\t\t\t\t\t\t  <span price-before-discount>$ 800</span>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t   <div cart>\n\t\t\t\t\t  <div action>\n\t\t\t\t\t\t<ul list-unstyled>\n\t\t\t\t\t\t  <li add-cart-button btn-group>\n\t\t\t\t\t\t   <ion-button  add-to-cart color=\"darkred\" title=\"Add Cart\">\n\t\t\t\t\t\t\t <ion-icon name=\"cart\"></ion-icon>\n\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t  <li lnk wishlist>\n\t\t\t\t\t\t  <ion-button  color=\"darkblue\" add-to-cart title=\"Wishlist\">\n\t\t\t\t\t\t\t <ion-icon name=\"heart\"></ion-icon>\n\t\t\t\t\t\t  </ion-button> </li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t<ion-col size-lg=\"2\" size-md=\"3\">\n\t\t\t\t<div products>\n\t\t\t\t\t<div product>\n\t\t\t\t\t\t<div product-image>\n\t\t\t\t\t\t\t<div image>\n\t\t\t\t\t\t\t\t   <a>\n\t\t\t\t\t\t\t\t\t  <img  src=\"assets/images/products/p25.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t<div tag new>\n\t\t\t\t\t\t\t   <span>new</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t   <div product-info text-left>\n\t\t\t\t\t\t  <h3 name><a href=\"#\">Brown T-Shirt Girls</a></h3>\n\t\t\t\t\t\t  <div rating rateit-small>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t  <div description></div>\n\t\t\t\t\t\t  <div product-price>\n\t\t\t\t\t\t  <span price> $450.99 </span>\n\t\t\t\t\t\t  <span price-before-discount>$ 800</span>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t   <div cart>\n\t\t\t\t\t  <div action>\n\t\t\t\t\t\t<ul list-unstyled>\n\t\t\t\t\t\t  <li add-cart-button btn-group>\n\t\t\t\t\t\t   <ion-button  add-to-cart color=\"darkred\" title=\"Add Cart\">\n\t\t\t\t\t\t\t <ion-icon name=\"cart\"></ion-icon>\n\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t  <li lnk wishlist>\n\t\t\t\t\t\t  <ion-button  color=\"darkblue\" add-to-cart title=\"Wishlist\">\n\t\t\t\t\t\t\t <ion-icon name=\"heart\"></ion-icon>\n\t\t\t\t\t\t  </ion-button> </li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t\t  <ion-col size-lg=\"2\" size-md=\"3\">\n\t\t\t\t<div products>\n\t\t\t\t\t<div product>\n\t\t\t\t\t\t<div product-image>\n\t\t\t\t\t\t\t<div image>\n\t\t\t\t\t\t\t\t   <a>\n\t\t\t\t\t\t\t\t\t  <img  src=\"assets/images/products/p27.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t<div tag new>\n\t\t\t\t\t\t\t   <span>new</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t   <div product-info text-left>\n\t\t\t\t\t\t  <h3 name><a href=\"#\">Floral Print Buttoned</a></h3>\n\t\t\t\t\t\t  <div rating rateit-small>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t  <div description></div>\n\t\t\t\t\t\t  <div product-price>\n\t\t\t\t\t\t  <span price> $130.99 </span>\n\t\t\t\t\t\t  <span price-before-discount>$ 140</span>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t   <div cart>\n\t\t\t\t\t  <div action>\n\t\t\t\t\t\t<ul list-unstyled>\n\t\t\t\t\t\t  <li add-cart-button btn-group>\n\t\t\t\t\t\t   <ion-button  add-to-cart color=\"darkred\" title=\"Add Cart\">\n\t\t\t\t\t\t\t <ion-icon name=\"cart\"></ion-icon>\n\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t  <li lnk wishlist>\n\t\t\t\t\t\t  <ion-button  color=\"darkblue\" add-to-cart title=\"Wishlist\">\n\t\t\t\t\t\t\t <ion-icon name=\"heart\"></ion-icon>\n\t\t\t\t\t\t  </ion-button> </li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t\t  <ion-col size-lg=\"2\" size-md=\"3\">\n\t\t\t\t<div products>\n\t\t\t\t\t<div product>\n\t\t\t\t\t\t<div product-image>\n\t\t\t\t\t\t\t<div image>\n\t\t\t\t\t\t\t\t   <a>\n\t\t\t\t\t\t\t\t\t  <img  src=\"assets/images/products/p21.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t<div tag hot>\n\t\t\t\t\t\t\t   <span>hot</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t   <div product-info text-left>\n\t\t\t\t\t\t  <h3 name><a href=\"#\">Aviator Goggles mens</a></h3>\n\t\t\t\t\t\t  <div rating rateit-small>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t  <div description></div>\n\t\t\t\t\t\t  <div product-price>\n\t\t\t\t\t\t  <span price> $170.99 </span>\n\t\t\t\t\t\t  <span price-before-discount>$ 200</span>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t   <div cart>\n\t\t\t\t\t  <div action>\n\t\t\t\t\t\t<ul list-unstyled>\n\t\t\t\t\t\t  <li add-cart-button btn-group>\n\t\t\t\t\t\t   <ion-button  add-to-cart color=\"darkred\" title=\"Add Cart\">\n\t\t\t\t\t\t\t <ion-icon name=\"cart\"></ion-icon>\n\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t  <li lnk wishlist>\n\t\t\t\t\t\t  <ion-button  color=\"darkblue\" add-to-cart title=\"Wishlist\">\n\t\t\t\t\t\t\t <ion-icon name=\"heart\"></ion-icon>\n\t\t\t\t\t\t  </ion-button> </li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t\t  <ion-col size-lg=\"2\" size-md=\"3\">\n\t\t\t\t<div products>\n\t\t\t\t\t<div product>\n\t\t\t\t\t\t<div product-image>\n\t\t\t\t\t\t\t<div image>\n\t\t\t\t\t\t\t\t   <a>\n\t\t\t\t\t\t\t\t\t  <img  src=\"assets/images/products/p23.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t<div tag new>\n\t\t\t\t\t\t\t   <span>new</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t   <div product-info text-left>\n\t\t\t\t\t\t  <h3 name><a href=\"#\">Black Reebok Shoes </a></h3>\n\t\t\t\t\t\t  <div rating rateit-small>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t\t   <ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t  <div description></div>\n\t\t\t\t\t\t  <div product-price>\n\t\t\t\t\t\t  <span price> $450.99 </span>\n\t\t\t\t\t\t  <span price-before-discount>$ 800</span>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t   <div cart>\n\t\t\t\t\t  <div action>\n\t\t\t\t\t\t<ul list-unstyled>\n\t\t\t\t\t\t  <li add-cart-button btn-group>\n\t\t\t\t\t\t   <ion-button  add-to-cart color=\"darkred\" title=\"Add Cart\">\n\t\t\t\t\t\t\t <ion-icon name=\"cart\"></ion-icon>\n\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t  <li lnk wishlist>\n\t\t\t\t\t\t  <ion-button  color=\"darkblue\" add-to-cart title=\"Wishlist\">\n\t\t\t\t\t\t\t <ion-icon name=\"heart\"></ion-icon>\n\t\t\t\t\t\t  </ion-button> </li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t  </ion-row>\n\t\t\t</div>\n\t\t   </ion-card>\n\t\t </ion-col> -->\n\t\t<!--  RECOMMENDATIONS BASED ON YOUR ORDERS   Ends -->\n    </ion-row>\n    <app-recently-viewed></app-recently-viewed>\n<!-- thank you ends -->\n</div>\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/thankyou/thankyou.page.scss":
/*!*********************************************!*\
  !*** ./src/app/thankyou/thankyou.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey); }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0); } }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --background:var(--ion-color-white)!important;\n      --padding-top:var(--ion-padding-0);\n      --padding-bottom:var(--ion-padding-0);\n      --padding-start:var(--ion-padding-0);\n      --padding-end:var(--ion-padding-0); } }\n  ion-content .single-product {\n    /* Thanku You Start */\n    /* Thank You Ends */\n    /* Order Summary Start */\n    /* Order Sumamry Ends */ }\n  @media only screen and (max-width: 991px) {\n      ion-content .single-product {\n        padding: var(--ion-padding-0) var(--ion-padding-15); } }\n  ion-content .single-product [thankyou-text] h3 {\n      font-family: var(--ion-font-family-2); }\n  ion-content .single-product [thankyou-text] h3[text] {\n        color: var(--ion-color-darkblue);\n        font-weight: 700;\n        font-size: var(--ion-font-size-27); }\n  @media only screen and (max-width: 991px) {\n          ion-content .single-product [thankyou-text] h3[text] {\n            font-size: var(--ion-font-size-18); } }\n  ion-content .single-product [thankyou-text] p {\n      font-size: var(--ion-font-size-14);\n      color: var(--ion-color-darkblack);\n      font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n        ion-content .single-product [thankyou-text] p {\n          font-size: var(--ion-font-size-12); } }\n  ion-content .single-product [order-summry] {\n      padding-top: var(--ion-padding-40); }\n  @media only screen and (max-width: 991px) {\n        ion-content .single-product [order-summry] {\n          padding-top: var(--ion-padding-15) !important; } }\n  ion-content .single-product [order-summry] table tr {\n        font-size: var(--ion-font-size-14);\n        color: var(--ion-color-darkblack);\n        font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n          ion-content .single-product [order-summry] table tr {\n            font-size: var(--ion-font-size-12); } }\n  ion-content .single-product [order-summry] table tr th {\n          background: #efefef;\n          padding: var(--ion-padding-13) var(--ion-padding-16);\n          color: var(--ion-color-black);\n          border-bottom: 1px solid var(--ion-color-ltgrey); }\n  @media only screen and (max-width: 991px) {\n            ion-content .single-product [order-summry] table tr th {\n              padding: var(--ion-padding-8); } }\n  ion-content .single-product [order-summry] table tr td {\n          padding: var(--ion-padding-13) var(--ion-padding-16);\n          vertical-align: middle; }\n  @media only screen and (max-width: 991px) {\n            ion-content .single-product [order-summry] table tr td {\n              padding: var(--ion-padding-8) !important; } }\n  ion-content .single-product [order-summry] [main-sec-thank] tr td {\n        border: none;\n        padding: var(--ion-padding-15) var(--ion-padding-15) var(--ion-padding-0); }\n  ion-content .single-product [order-summry] [main-sec-thank] tr td [main-sec] {\n          text-transform: uppercase;\n          font-weight: bold;\n          transition: all linear 0.2s;\n          background: var(--ion-color-darkblue);\n          color: var(--ion-color-white);\n          border: none;\n          font-size: var(--ion-font-size-15);\n          border-radius: var(--ion-value-0);\n          padding: var(--ion-padding-10);\n          font-family: var(--ion-font-family-3);\n          width: 142px;\n          display: inline-block;\n          margin-top: var(--ion-margin-top-10); }\n  @media only screen and (max-width: 991px) {\n            ion-content .single-product [order-summry] [main-sec-thank] tr td [main-sec] {\n              font-size: var(--ion-font-size-12);\n              padding: var(--ion-padding-5); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC90aGFua3lvdS90aGFua3lvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFQyxrQ0FBYSxFQUFBO0VBQ2I7SUFIRDtNQUtJLGtDQUFjLEVBQUEsRUF5SGpCO0VBdkhEO0lBUEE7TUFTSSw2Q0FBYTtNQUNiLGtDQUFjO01BQ2QscUNBQWlCO01BQ2pCLG9DQUFnQjtNQUNoQixrQ0FBYyxFQUFBLEVBaUhqQjtFQTlIRDtJQXNCRyxxQkFBQTtJQTJCQSxtQkFBQTtJQUNBLHdCQUFBO0lBMEVBLHVCQUFBLEVBQXdCO0VBM0czQjtNQWpCQTtRQW1CSyxtREFBb0QsRUFBQSxFQTBHeEQ7RUE3SEQ7TUEwQksscUNBQXFDLEVBQUE7RUExQjFDO1FBNkJPLGdDQUFnQztRQUNoQyxnQkFBZ0I7UUFDVixrQ0FBbUMsRUFBQTtFQUMzQztVQWhDTDtZQWtDVyxrQ0FBa0MsRUFBQSxFQUV6QztFQXBDSjtNQXdDTyxrQ0FBa0M7TUFDL0IsaUNBQWlDO01BQ2pDLHFDQUFxQyxFQUFBO0VBQ3ZDO1FBM0NSO1VBNkNXLGtDQUFrQyxFQUFBLEVBRXpDO0VBL0NKO01BcURLLGtDQUFrQyxFQUFBO0VBQ3BDO1FBdERIO1VBd0RJLDZDQUE0QyxFQUFBLEVBbUU1QztFQTNISjtRQTZEa0Isa0NBQWtDO1FBQzVDLGlDQUFpQztRQUNqQyxxQ0FBcUMsRUFBQTtFQUNuQztVQWhFVjtZQWtFUyxrQ0FBa0MsRUFBQSxFQXdCckM7RUExRk47VUF1RWMsbUJBQW1CO1VBQ0osb0RBQXFEO1VBQ3JELDZCQUE2QjtVQUNsRCxnREFBZ0QsRUFBQTtFQUM5QztZQTNFVjtjQTZFVyw2QkFBNkIsRUFBQSxFQUdoQztFQWhGUjtVQW1GZSxvREFBcUQ7VUFDM0Qsc0JBQXFCLEVBQUE7RUFDckI7WUFyRlQ7Y0F1Rlcsd0NBQXVDLEVBQUEsRUFFMUM7RUF6RlI7UUFrR00sWUFBVztRQUNWLHlFQUE0RSxFQUFBO0VBbkduRjtVQXNHUSx5QkFBeUI7VUFDekIsaUJBQWlCO1VBQ2pCLDJCQUEyQjtVQUMzQixxQ0FBdUM7VUFDdkMsNkJBQTRCO1VBQzVCLFlBQVk7VUFDWixrQ0FBa0M7VUFDbEMsaUNBQWlDO1VBQ2pDLDhCQUE4QjtVQUM3QixxQ0FBcUM7VUFDdEMsWUFBWTtVQUNaLHFCQUFxQjtVQUNyQixvQ0FBb0MsRUFBQTtFQUNsQztZQW5IVjtjQXFIVSxrQ0FBa0M7Y0FBRSw2QkFBNkIsRUFBQSxFQUVsRSIsImZpbGUiOiJzcmMvYXBwL3RoYW5reW91L3RoYW5reW91LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnRcbnsgIFxuXHQtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkxcHgpXG5cdHtcblx0ICAgLS1wYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZy0wKTtcblx0fVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHR7XG5cdCAgIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itd2hpdGUpIWltcG9ydGFudDtcblx0ICAgLS1wYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZy0wKTtcblx0ICAgLS1wYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZy0wKTtcblx0ICAgLS1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLTApO1xuXHQgICAtLXBhZGRpbmctZW5kOnZhcigtLWlvbi1wYWRkaW5nLTApO1xuXHR9XG4uc2luZ2xlLXByb2R1Y3RcbnsgIFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxue1xuXHQgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCkgIHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcblxufVxuICAgLyogVGhhbmt1IFlvdSBTdGFydCAqL1xuICAgW3RoYW5reW91LXRleHRdXG4gICB7XG4gICAgICBoM1xuXHQgIHsgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0ICAgICAmW3RleHRdXG5cdFx0IHtcblx0XHQgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsdWUpO1xuXHRcdCAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICBmb250LXNpemU6IHZhciggLS1pb24tZm9udC1zaXplLTI3KTtcblx0XHRcdCAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHRcdFx0ICAge1xuXHRcdFx0XHRcdFx0XHQgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE4KTtcblx0XHRcdFx0XHRcdCAgIH1cblx0XHQgfVxuXHQgIH1cblx0ICBwXG5cdCAge1xuXHQgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcbiAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdCAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0XHRcdCAgIHtcblx0XHRcdFx0XHRcdFx0ICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XG5cdFx0XHRcdFx0XHQgICB9XG5cdCAgfVxuICAgfVxuICAgLyogVGhhbmsgWW91IEVuZHMgKi9cbiAgIC8qIE9yZGVyIFN1bW1hcnkgU3RhcnQgKi9cbiAgIFtvcmRlci1zdW1tcnldXG4gICB7XG5cdCAgICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctNDApO1xuXHRcdCBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0ICAge1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctMTUpIWltcG9ydGFudDtcblx0XHQgICB9XG5cdFx0ICB0YWJsZVxuXHRcdCAge1xuXHRcdFx0ICB0clxuXHRcdFx0ICB7XHQgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG5cdFx0XHRcdFx0XHQgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcblx0XHRcdFx0XHRcdCAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0XHRcdFx0XHRcdCAgXHQgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHRcdFx0XHQgICB7XG5cdFx0XHRcdFx0XHRcdFx0IGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7ICAgXG5cdFx0XHRcdFx0XHRcdFx0ICAgXG5cdFx0XHRcdFx0XHRcdCAgIH1cblx0XHRcdFx0ICAgdGhcblx0XHRcdFx0ICAge1xuXHRcdFx0XHRcdCAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEzKSAgdmFyKC0taW9uLXBhZGRpbmctMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcblx0XHRcdFx0XHRcdFx0IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbHRncmV5KTtcblx0XHRcdFx0XHRcdFx0ICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHRcdFx0ICAge1xuXHRcdFx0XHRcdFx0XHQgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctOCk7XG5cdFx0XHRcdFx0XHQgICB9XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHQgICB9XG5cdFx0XHRcdCAgIHRkXG5cdFx0XHRcdCAgIHtcblx0XHRcdFx0XHQgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTMpICB2YXIoLS1pb24tcGFkZGluZy0xNik7XG5cdFx0XHRcdFx0XHQgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG5cdFx0XHRcdFx0XHQgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0XHRcdFx0XHQgICB7XG5cdFx0XHRcdFx0XHRcdCAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy04KSFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHQgICB9XG5cdFx0XHRcdCAgIH1cblx0XHRcdCAgfVxuXHRcdCAgfVxuXHRcdCAgW21haW4tc2VjLXRoYW5rXVxuXHRcdCAge1xuXHRcdFx0ICAgdHJcblx0XHRcdCAge1x0ICAgXHRcblx0XHRcdFx0ICAgdGRcblx0XHRcdFx0ICAge1xuXHRcdFx0XHRcdCBib3JkZXI6bm9uZTtcblx0XHRcdFx0XHQgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KSAgIHZhcigtLWlvbi1wYWRkaW5nLTE1KSAgdmFyKC0taW9uLXBhZGRpbmctMCkgO1xuXHRcdFx0XHRcdFx0XHRbbWFpbi1zZWNdIFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMnM7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKCAgLS1pb24tY29sb3ItZGFya2JsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNSk7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTApO1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcblx0XHRcdFx0XHRcdFx0XHQgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0zKTtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTQycHg7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tdG9wLTEwKTtcblx0XHRcdFx0XHRcdFx0XHQgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0XHRcdFx0ICAge1xuXHRcdFx0XHRcdFx0XHRcdCAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTUpO1xuXHRcdFx0XHRcdFx0XHQgICB9XG5cdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0ICAgfVxuXHRcdFx0ICB9XG5cdFx0ICB9XG4gICB9XG4gICAvKiBPcmRlciBTdW1hbXJ5IEVuZHMgKi9cbn1cbn1cdCJdfQ== */"

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
    }
    ThankyouPage.prototype.ionViewDidEnter = function () {
        this.order_id = this.activatedRoute.snapshot.paramMap.get('order_id');
        this.getOrderDetails();
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
        var _this = this;
        this.presentLoading();
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