(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.page.html":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"darkred\" text-uppercase>\n\n  <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"product-details\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n       My Cart\n    </ion-title>\n  <ion-buttons slot=\"end\" >\n          <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n\t     <ion-buttons slot=\"end\">\n          <ion-icon name=\"pin\"></ion-icon>\n    </ion-buttons>\n<ion-buttons slot=\"end\" >\n\t<ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\n\t </ion-buttons>\n  </ion-toolbar>\n      <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n\t              <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n\t              <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n\t              <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n\t              <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t   </div>\n</ion-header>  -->\n<ion-content >\n<div class=\"ion-padding\">\n<div header_height></div>\n<!-- Breadcrumb Start -->\n\t\t<div breadcrumb  class=\"ion-hide-md-down\">\n\t\t\t\t<div breadcrumb-inner>\n\t\t\t\t\t<ul list-inline list-unstyled>\n\t\t\t\t\t\t<li><a routerLink=\"/home\">Home</a></li>\n\t\t\t\t\t\t<li class=\"active\">Cart</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- /.breadcrumb-inner -->\n\t\t</div>\n<!-- Breadcrumb Ends -->\n<!--  Cart Section Start  -->\n\t<div cart-page  >\n\t\t\t\t<ion-row class=\"ion-hide-md-down\">\n\t\t\t\t\t\t<ion-col *ngIf=\"cart == ''\">\n\t\t\t\t\t\t\t<ion-item>No products added in cart. <ion-button routerLink=\"/products\" color=\"darkred\" float-left >Continue Shopping</ion-button></ion-item>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size-lg=\"9\" size-md=\"9\" size-sm=\"12\" size=\"12\" *ngIf=\"cart != ''\">\n\t\t\t\t\t\t   <div shopping-cart>\n\t\t\t\t\t\t\t   <div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t <table class=\"table\">\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th text-center cart-remove>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th text-center cart-description>Image</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th text-center cart-product-name>Product Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th text-center cart-qty>Quantity</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th text-center cart-sub-total>Subtotal</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th text-center cart-total>Grandtotal</th>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div shopping-cart-btn>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-button routerLink=\"/products\" color=\"darkred\" float-left >Continue Shopping</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t<ion-button  color=\"darkred\" float-right>Update Shopping Cart</ion-button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t <tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of cart; let c_index = index \">\n\t\t\t\t\t\t\t\t\t\t\t\t<td remove-item text-center>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a href=\"javascript:void(0)\"  icon action-icons default-icon mr-10>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-exchange\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\t -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/product-details/{{item.product_id}}\" href=\"javascript:void(0)\" icon action-icons mr-10>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-reply\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"remove(item.cart_id,c_index)\" href=\"javascript:void(0)\"  icon action-icons del-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <i class=\"fa fa-trash-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td cart-image>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a entry-thumbnail routerLink=\"/product-details/{{item.product_id}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(item.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t  \t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(item.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{item.product_image}}\" alt=\"{{item.product_name}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td cart-product-name-info>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 cart-product-description>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/product-details/{{item.product_id}}\">{{item.product_name}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div rating rateit-small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-col  size=\"8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div reviews>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(0 Reviews)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-col >\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-row><!-- /.row -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div cart-product-info *ngIf=\"item.is_variation == 1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let variation of item.product_variations\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span product-color>{{variation.name}}: <span>{{variation.value}}</span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td cart-product-quantity text-center>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div quant-input>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div arrows>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div arrow plus gradient (click)=\"plusQuantity(c_index,item.cart_id)\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span ir>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon fa fa-sort-asc\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div arrow minus gradient (click)=\"minusQuantity(c_index,item.cart_id)\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span ir>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon fa fa-sort-desc\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [disabled]=\"true\" type=\"text\" value=\"{{item.product_quantity}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td cart-product-sub-total text-center>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <span  cart-sub-total-price>${{subtotalPrice(item)}}</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t <!-- <span *ngIf=\"errors.indexOf(item.product_sale_price) >= 0 || item.product_sale_price == item.product_purchase_price\" cart-sub-total-price>${{item.product_purchase_price}}</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td cart-product-grand-total text-center>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <span cart-grand-total-price>${{grandTotalPrice(item)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--  <span *ngIf=\"errors.indexOf(item.product_sale_price) >= 0 || item.product_sale_price == item.product_purchase_price\"  cart-grand-total-price>${{item.product_purchase_price*item.product_quantity}}</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t   </tbody>\n\t\t\t\t\t\t\t\t\t  </table>\n\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size-lg=\"3\" size-md=\"3\" size-sm=\"12\" size=\"12\" *ngIf=\"cart != ''\">\n\t\t\t\t\t\t\t <div shopping-cart cart-sidebar>\n\t\t\t\t\t\t\t\t<div class=\"table-responsive\" estimate-ship-tax>\n\t\t\t\t\t\t\t\t\t  <table class=\"table\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span estimate-title>Discount Code</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"applied_coupon == false\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Enter your coupon code if you have one..</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"coupon_code\" type=\"text\" class=\"form-control unicase-form-control text-input\" placeholder=\"Your Coupon..\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-button color=\"darkred\" (click)=\"applyCoupon()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAPPLY COUPON\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"applied_coupon == true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Coupon {{coupon_code}} applied\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-button icon action-icons del-icon (click)=\"removeCoupon()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"close\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody><!-- /tbody -->\n\t\t\t\t\t\t\t\t\t   </table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"cart-shopping-total table-responsive\">\n\t\t\t\t\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div cart-sub-total>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSubtotal<span inner-left-md>${{total_payable_price.toFixed(2)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div cart-grand-total *ngIf=\"applied_coupon == true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCoupon applied<span inner-left-md>-${{total_coupon_amount.toFixed(2)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div cart-grand-total>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tGrand Total<span inner-left-md>${{grand_total.toFixed(2)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead><!-- /thead -->\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div cart-checkout-btn>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-button color=\"darkred\" (click)=\"checkout()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPROCEED TO CHECKOUT\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody><!-- /tbody -->\n\t\t\t\t\t\t\t\t\t   </table><!-- /table -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t </div>\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t  <!--  New Products  Start-->\n\n\t\t\t\t <!--  New Products Ends -->\n\t\t\t\t<!--  Best Sellers Start -->\n\t\t<!--  Best Sellers   Ends -->\n\n\t\t\t\t</ion-row>\n\n\n\n\t</div>\n<!--  Cart Section Ends  -->\n<!--  Cart Mobile Section Start  -->\n<div cart-mob class=\"ion-hide-lg-up\">\n\n\t\t\t\t <div cart-subtotal>\n\t\t\t\t   <ion-card  no-margin padding>\n\t\t\t\t\t   <ion-row>\n\t\t\t\t\t\t <ion-col size=\"12\" no-padding>\n\t\t\t\t\t\t\t <h2>Subtotal ({{cart?.length}} {{cart?.length == 1 ? 'item' : 'items'}}): <span price> ${{total_payable_price}}</span></h2>\n\t\t\t\t\t\t </ion-col>\n\t\t\t\t\t   </ion-row>\n\t\t\t\t\t<ion-button size=\"full\" color=\"darkred\" routerLink=\"/checkout\">\n\t               Proceed To Checkout\n\t              </ion-button>\n\t\t\t\t   </ion-card>\n\t\t\t\t </div>\n\t\t\t\t  <div cart-items>\n\t\t\t\t\t<ion-item lines=\"none\" *ngFor=\"let item of cart; let cm_index = index \">\n\t\t\t\t\t   <ion-thumbnail slot=\"start\">\n\t\t\t\t\t\t  <img *ngIf=\"errors.indexOf(item.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t  <img *ngIf=\"errors.indexOf(item.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{item.product_image}}\" alt=\"{{item.product_name}}\">\n\t\t\t\t\t   </ion-thumbnail>\n\t\t\t\t\t   <label>\n\t\t\t\t\t\t  <h3>{{item.product_name}}</h3>\n\t\t\t\t\t\t  <p>\n\t\t\t\t\t\t  \t<span *ngIf=\"errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price\">${{item.product_sale_price}}</span>\n\n\t\t\t\t\t\t\t<span *ngIf=\"errors.indexOf(item.product_sale_price) >= 0 || item.product_sale_price == item.product_purchase_price\">${{item.product_purchase_price}}</span>\n\t\t\t\t\t\t  </p>\n\n\t\t\t\t\t\t  <ion-row>\n\t\t\t\t\t\t\t <ion-col no-padding  size=\"6\">\n\n\t\t\t\t\t\t\t\t  <ion-button color=\"greyc\" size=\"small\" fill=\"outline\" *ngIf=\"my_wish_products.indexOf(item.product_id) == -1\" (click)=\"addToWish(item.product_id)\" color=\"darkblue\" add-to-cart title=\"Wishlist\">\n\t\t\t\t\t\t\t\t\t <ion-icon name=\"heart\"></ion-icon>\n\t\t\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t\t\t  <ion-button color=\"greyc\" size=\"small\" fill=\"outline\" *ngIf=\"my_wish_products.indexOf(item.product_id) >= 0\" color=\"darkblue\" add-to-cart title=\"Added\">\n\t\t\t\t\t\t\t\t\t <ion-icon red_heart name=\"heart\"></ion-icon>\n\t\t\t\t\t\t\t\t  </ion-button>\n\n\t\t\t\t\t\t\t\t   <ion-button (click)=\"remove(item.cart_id,cm_index)\" color=\"greyc\" size=\"small\" fill=\"outline\">\n\t\t\t\t\t\t\t\t\t\t<ion-icon  name=\"trash\"></ion-icon>\n\t\t\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t\t  </ion-col>\n\t\t\t\t\t\t\t   <ion-col no-padding text-right align-item-center  add-quantity>\n\t\t\t\t\t\t\t\t  <ion-button (click)=\"minusQuantity(cm_index,item.cart_id)\" color=\"greyc\" size=\"small\">\n\t\t\t\t\t\t\t\t\t\t<ion-icon  name=\"remove\"></ion-icon>\n\t\t\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t\t\t   <span num-quantity>\n\t\t\t\t\t\t\t\t\t\t{{item.product_quantity}}\n\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t   <ion-button (click)=\"plusQuantity(cm_index,item.cart_id)\" color=\"greyc\" size=\"small\">\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"add\"></ion-icon>\n\t\t\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t   </ion-row>\n\t\t\t\t\t   </label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item lines=\"none\" *ngIf=\"cart == ''\">\n\t\t\t\t\t\tNo products added in cart.\n\t\t\t\t\t\t<ion-button routerLink=\"/products\" color=\"darkred\" float-left >Continue Shopping</ion-button>\n\t\t\t\t\t</ion-item>\n\t\t\t\t </div>\n</div>\n\n<app-recently-viewed></app-recently-viewed>\n<app-upsell-products></app-upsell-products>\n<!--  Cart Mobile Section Ends  -->\n</div>\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey);\n  /* Cart Section Start*/\n  /* Cart Section Ends*/\n  /* Cart Mobile Section Start*/\n  /* Cart Mobile Section Ends*/ }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-start: var(--ion-value-0);\n      --padding-end: var(--ion-value-0);\n      --padding-top:  var(--ion-value-0);\n      --padding-bottom:  var(--ion-value-0); } }\n  ion-content [cart-page] [best-sellers] {\n    margin-top: var(--ion-margin-20); }\n  ion-content [cart-page] [shopping-cart] {\n    margin-bottom: var(--ion-margin-20);\n    background-color: var(--ion-color-white);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08); }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] {\n      padding: var(--ion-padding-20); }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] ion-button {\n        --box-shadow:none;\n        --border-radius:0;\n        font-size: var(--ion-font-size-13); }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] ion-button:hover {\n          opacity: 0.8; }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] .cart-shopping-total {\n        background: var(--ion-color-greyf8); }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] .cart-shopping-total table {\n          margin: var(--ion-margin-0); }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] .cart-shopping-total table th {\n            font-family: var(--ion-font-family-2);\n            background-color: #fafafa;\n            text-align: left;\n            padding: var(--ion-padding-15);\n            border-bottom: 1px solid #eee; }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] .cart-shopping-total table th [cart-sub-total], ion-content [cart-page] [shopping-cart][cart-sidebar] .cart-shopping-total table th [cart-grand-total] {\n              color: var(--ion-color-darkblack3);\n              margin-bottom: var(--ion-margin-7); }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] .cart-shopping-total table th [cart-sub-total] [inner-left-md], ion-content [cart-page] [shopping-cart][cart-sidebar] .cart-shopping-total table th [cart-grand-total] [inner-left-md] {\n                padding-left: var(--ion-padding-0);\n                float: right; }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] .cart-shopping-total table th [cart-grand-total] {\n              color: #84b943 !important; }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] [estimate-ship-tax] th {\n        padding: var(--ion-padding-0) var(--ion-padding-0) var(--ion-padding-15) var(--ion-padding-0); }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] [estimate-ship-tax] td {\n        padding: var(--ion-padding-15) var(--ion-padding-0) var(--ion-padding-0); }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] [estimate-ship-tax] [estimate-title] {\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-14);\n        color: var(--ion-color-darkblack3);\n        margin-bottom: var(--ion-margin-2);\n        margin-top: var(--ion-margin-0);\n        display: block; }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] [estimate-ship-tax] input {\n        font-family: var(--ion-font-family-2);\n        box-shadow: none;\n        font-size: var(--ion-font-size-13);\n        font-weight: normal;\n        color: var(--ion-color-darkgrey9);\n        height: auto;\n        padding: var(--ion-padding-10) var(--ion-padding-12);\n        border-radius: var(--ion-value-3); }\n  ion-content [cart-page] [shopping-cart] table tr th {\n      color: var(--ion-color-darkblack);\n      padding: var(--ion-padding-15);\n      font-family: var(--ion-font-family-2);\n      font-size: var(--ion-font-size-15);\n      border-bottom: 1px solid #e5e5e5; }\n  ion-content [cart-page] [shopping-cart] table tr td {\n      font-family: var(--ion-font-family-2);\n      padding: var(--ion-padding-15);\n      vertical-align: middle;\n      border: none; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-image] img {\n        width: 100px; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-image] [entry-thumbnail] {\n        display: block;\n        text-align: center; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-sub-total] [cart-sub-total-price], ion-content [cart-page] [shopping-cart] table tr td[cart-product-sub-total] [cart-grand-total-price], ion-content [cart-page] [shopping-cart] table tr td[cart-product-grand-total] [cart-sub-total-price], ion-content [cart-page] [shopping-cart] table tr td[cart-product-grand-total] [cart-grand-total-price] {\n        display: block;\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-16);\n        color: var(--ion-color-darkblack3);\n        text-transform: uppercase; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-name-info] [cart-product-description] {\n        margin-top: var(--ion-margin-0);\n        font-size: var(--ion-font-size-16); }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-name-info] [cart-product-description] a {\n          font-family: var(--ion-font-family-2);\n          font-size: var(--ion-font-size-16);\n          color: var(--ion-color-darkblack3);\n          text-decoration: none; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-name-info] [rating] {\n        display: flex;\n        margin-left: -6px; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-name-info] [rating] ion-icon {\n          color: var(--ion-color-yellow); }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-name-info] [reviews] {\n        font-size: var(--ion-font-size-11);\n        color: #aaa; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-name-info] [cart-product-info] {\n        margin-top: var(--ion-margin-10); }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-name-info] [cart-product-info] [product-color] {\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-12);\n        color: var(--ion-color-darkgrey);\n        text-transform: uppercase; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-name-info] [cart-product-info] [product-color] span {\n          color: #84b943;\n          text-transform: lowercase;\n          margin-left: var(--ion-margin-14); }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-quantity] [quant-input] {\n        display: inline-block;\n        height: var(--ion-wh-35);\n        position: relative;\n        width: var(--ion-wh-70); }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-quantity] [quant-input] [arrows] {\n          height: 100%;\n          position: absolute;\n          right: var(--ion-value-10);\n          top: var(--ion-value-0);\n          z-index: 2; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-quantity] [quant-input] [arrows] [arrow]:hover {\n            color: var(--ion-color-darkred);\n            cursor: pointer; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-quantity] [quant-input] [arrows] [arrow][minus] .icon {\n            top: -7px !important; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-quantity] [quant-input] [arrows] [arrow] .icon {\n            top: 5px;\n            position: relative; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-quantity] [quant-input] input {\n          background: var(--ion-color-white);\n          border: 1px solid #F2F2F2;\n          box-sizing: border-box;\n          font-size: var(--ion-font-size-15);\n          height: var(--ion-wh-35);\n          left: var(--ion-value-0);\n          padding: var(--ion-padding-0) var(--ion-padding-20) var(--ion-padding-0) var(--ion-padding-18);\n          position: absolute;\n          top: var(--ion-value-0);\n          width: var(--ion-wh-70);\n          z-index: 1; }\n  ion-content [cart-page] [shopping-cart] table tr td[remove-item] [action-icons] {\n        cursor: pointer;\n        background: #5cb85c;\n        text-align: center;\n        color: var(--ion-color-white);\n        width: var(--ion-value-30);\n        height: var(--ion-value-30);\n        display: inline-block;\n        line-height: var(--ion-value-30);\n        border-radius: 50%;\n        font-size: var(--ion-font-size-14);\n        padding: var(--ion-padding-0);\n        border: var(--ion-value-0); }\n  ion-content [cart-page] [shopping-cart] table tr td[remove-item] [action-icons]:hover {\n          opacity: 0.8; }\n  ion-content [cart-page] [shopping-cart] table tr td[remove-item] [action-icons][mr-10] {\n          margin-right: var(--ion-margin-10); }\n  ion-content [cart-page] [shopping-cart] table tr td[remove-item] [action-icons][default-icon] {\n          background: #fe3a90; }\n  ion-content [cart-page] [shopping-cart] table tr td[remove-item] [action-icons][del-icon] {\n          background: #d9534f; }\n  ion-content [cart-page] [shopping-cart] table tfoot [shopping-cart-btn] ion-button {\n      --border-radius:var( --ion-value-0);\n      --box-shadow:none;\n      font-size: var(--ion-font-size-13); }\n  ion-content [cart-page] [shopping-cart] table tfoot [shopping-cart-btn] ion-button:hover {\n        opacity: 0.8; }\n  ion-content [cart-mob] {\n    /* Coupon Code Start */\n    /* Coupon Code Ends */\n    /* Cart Subtotal Start */\n    /* Cart Subtotal Ends */ }\n  ion-content [cart-mob] [cart-items] ion-item {\n      --padding-start: var( --ion-padding-10);\n      --padding-end: var( --ion-padding-0);\n      --padding-top: var( --ion-padding-10);\n      --padding-bottom: var( --ion-padding-10);\n      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);\n      margin-bottom: var(--ion-margin-10); }\n  @media only screen and (max-width: 991px) {\n        ion-content [cart-mob] [cart-items] ion-item {\n          display: flex;\n          box-shadow: none;\n          border-bottom: 1px solid var(--ion-color-grey);\n          margin-bottom: var(--ion-margin-0); } }\n  ion-content [cart-mob] [cart-items] ion-item ion-thumbnail {\n        /*\n\t\t\t\t\t\twidth: var( --ion-value-90);\n\t\t\t\t\t   height: var( --ion-value-90);\n\t\t\t\t\t  margin-top:var(--ion-margin-0);\n\t\t\t\t\t   margin-bottom:var(--ion-margin-0);*/ }\n  @media only screen and (max-width: 991px) {\n          ion-content [cart-mob] [cart-items] ion-item ion-thumbnail {\n            height: 100%; } }\n  ion-content [cart-mob] [cart-items] ion-item label {\n        width: 100%; }\n  ion-content [cart-mob] [cart-items] ion-item label h3 {\n          margin-top: var(--ion-margin-0);\n          font-family: var(--ion-font-family-2);\n          font-size: var(--ion-font-size-14);\n          font-weight: 700;\n          margin-bottom: var(--ion-margin-3); }\n  @media only screen and (max-width: 576px) {\n            ion-content [cart-mob] [cart-items] ion-item label h3 {\n              font-size: var(--ion-font-size-12); } }\n  ion-content [cart-mob] [cart-items] ion-item label p {\n          font-family: var(--ion-font-family-2);\n          font-size: var(--ion-font-size-14);\n          font-weight: normal;\n          color: var(--ion-color-darkred);\n          margin-bottom: var(--ion-margin-3); }\n  @media only screen and (max-width: 576px) {\n            ion-content [cart-mob] [cart-items] ion-item label p {\n              font-size: var(--ion-font-size-12); } }\n  ion-content [cart-mob] [cart-items] ion-item label ion-button {\n          --padding-start: var( --ion-padding-4);\n          --padding-start: var( --ion-padding-4);\n          --padding-end: var( --ion-padding-4);\n          height: var(--ion-value-22);\n          font-size: var(--ion-font-size-12);\n          --border-radius:var( --ion-value-0);\n          --border-width:1px;\n          --box-shadow: none; }\n  ion-content [cart-mob] [cart-items] ion-item label [add-quantity] [num-quantity] {\n          position: relative;\n          top: var(--ion-value-6);\n          font-weight: normal;\n          margin: var(--ion-margin-0); }\n  ion-content [cart-mob] [cart-coupon] ion-input {\n      background: var(--ion-color-white); }\n  ion-content [cart-mob] [cart-coupon] ion-button {\n      --border-radius:var(--ion-value-0);\n      margin: var(--ion-margin-0);\n      height: var(--ion-value-40);\n      --box-shadow: none; }\n  ion-content [cart-mob] [cart-subtotal] ion-card {\n      background: var(--ion-color-white);\n      --border-radius:var(--ion-value-0);\n      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);\n      margin-bottom: var(--ion-margin-10); }\n  ion-content [cart-mob] [cart-subtotal] ion-card ion-button {\n        --box-shadow:none;\n        --border-radius:var(--ion-value-4); }\n  ion-content [cart-mob] [cart-subtotal] ion-card h2 {\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-14);\n        color: var(--ion-color-black);\n        margin-top: var(--ion-margin-10); }\n  ion-content [cart-mob] [cart-subtotal] ion-card h2 [price] {\n          color: var(--ion-color-darkred);\n          font-weight: 700; }\n  ion-content [cart-mob] [cart-subtotal] ion-card p {\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-14);\n        color: var(--ion-color-black);\n        margin-top: var(--ion-margin-10); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBVUEsa0NBQWE7RUFDYixzQkFBQTtFQXFSQSxxQkFBQTtFQUVBLDZCQUFBO0VBdUlBLDRCQUFBLEVBQTZCO0VBdmE3QjtJQUZBO01BSUksbUNBQWdCO01BQ2hCLGlDQUFjO01BQ2Qsa0NBQWM7TUFDZCxxQ0FBaUIsRUFBQSxFQW1hcEI7RUExYUQ7SUFlUSxnQ0FBZ0MsRUFBQTtFQWZ4QztJQWtCYSxtQ0FBbUM7SUFDNUMsd0NBQXdDO0lBQ3hDLDJDQUF1QyxFQUFBO0VBcEIzQztNQXVCYSw4QkFBK0IsRUFBQTtFQXZCNUM7UUEwQm9CLGlCQUFhO1FBQzVCLGlCQUFnQjtRQUNoQixrQ0FBa0MsRUFBQTtFQTVCdkM7VUErQnNCLFlBQVksRUFBQTtFQS9CbEM7UUFvQ1EsbUNBQW9DLEVBQUE7RUFwQzVDO1VBc0NNLDJCQUEwQixFQUFBO0VBdENoQztZQXdDWSxxQ0FBb0M7WUFDcEMseUJBQXlCO1lBQzlCLGdCQUFnQjtZQUNoQiw4QkFBK0I7WUFDL0IsNkJBQTZCLEVBQUE7RUE1Q3BDO2NBK0NZLGtDQUFrQztjQUNWLGtDQUFtQyxFQUFBO0VBaER2RTtnQkFrRFUsa0NBQW1DO2dCQUNuQyxZQUFZLEVBQUE7RUFuRHRCO2NBd0RRLHlCQUF3QixFQUFBO0VBeERoQztRQWlFUSw2RkFBb0csRUFBQTtFQWpFNUc7UUFxRVEsd0VBQStFLEVBQUE7RUFyRXZGO1FBeUVPLHFDQUFvQztRQUNwQyxrQ0FBa0M7UUFDbEMsa0NBQWtDO1FBQ2xDLGtDQUFrQztRQUNsQywrQkFBK0I7UUFDL0IsY0FBYyxFQUFBO0VBOUVyQjtRQWtGd0IscUNBQW9DO1FBQ3RELGdCQUFlO1FBQ0csa0NBQWtDO1FBQ3BELG1CQUFtQjtRQUNuQixpQ0FBaUM7UUFDakMsWUFBWTtRQUNaLG9EQUFvRDtRQUNwRCxpQ0FBaUMsRUFBQTtFQXpGdkM7TUFvR1MsaUNBQWlDO01BQ3BDLDhCQUE4QjtNQUM5QixxQ0FBcUM7TUFDckMsa0NBQWtDO01BQ2hCLGdDQUFnQyxFQUFBO0VBeEd4RDtNQTJHUyxxQ0FBcUM7TUFDckMsOEJBQThCO01BQ2pDLHNCQUFxQjtNQUNyQixZQUFZLEVBQUE7RUE5R2xCO1FBa0hTLFlBQVksRUFBQTtFQWxIckI7UUFxSFEsY0FBYztRQUNkLGtCQUFrQixFQUFBO0VBdEgxQjtRQThIaUIsY0FBYztRQUNwQixxQ0FBcUM7UUFDckMsa0NBQWtDO1FBQ2xDLGtDQUFrQztRQUNsQyx5QkFBeUIsRUFBQTtFQWxJcEM7UUF5SVksK0JBQStCO1FBQy9CLGtDQUFtQyxFQUFBO0VBMUkvQztVQThJUyxxQ0FBcUM7VUFDbEMsa0NBQW1DO1VBQ3RDLGtDQUFpQztVQUNqQyxxQkFBb0IsRUFBQTtFQWpKN0I7UUFxSmMsYUFBYTtRQUNLLGlCQUFpQixFQUFBO0VBdEpqRDtVQXdKUyw4QkFBOEIsRUFBQTtFQXhKdkM7UUE0SmlDLGtDQUFtQztRQUNsQyxXQUFXLEVBQUE7RUE3SjdDO1FBZ0tnQyxnQ0FBZ0MsRUFBQTtFQWhLaEU7UUFzS2dCLHFDQUFvQztRQUMxQyxrQ0FBa0M7UUFDbEMsZ0NBQWdDO1FBQ2hDLHlCQUF5QixFQUFBO0VBektuQztVQTRLYSxjQUFjO1VBQ2QseUJBQXlCO1VBQ0ssaUNBQWlDLEVBQUE7RUE5SzVFO1FBdUxvQyxxQkFBcUI7UUFDaEQsd0JBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQix1QkFBd0IsRUFBQTtFQTFMakM7VUE2TFUsWUFBWTtVQUNaLGtCQUFrQjtVQUNsQiwwQkFBNEI7VUFDNUIsdUJBQXdCO1VBQ3hCLFVBQVUsRUFBQTtFQWpNcEI7WUFzTVksK0JBQThCO1lBQzlCLGVBQWMsRUFBQTtFQXZNMUI7WUE2TWtCLG9CQUFtQixFQUFBO0VBN01yQztZQWtOYSxRQUFRO1lBQ1Isa0JBQWlCLEVBQUE7RUFuTjlCO1VBeU5TLGtDQUFpQztVQUNqQyx5QkFBeUI7VUFDekIsc0JBQXNCO1VBQ3RCLGtDQUFrQztVQUNsQyx3QkFBMEI7VUFDMUIsd0JBQXlCO1VBQ3pCLDhGQUE4RjtVQUM5RixrQkFBa0I7VUFDbEIsdUJBQXdCO1VBQ3hCLHVCQUF5QjtVQUN6QixVQUFVLEVBQUE7RUFuT25CO1FBNk9PLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLDZCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIsMkJBQTJCO1FBQzNCLHFCQUFxQjtRQUNyQixnQ0FBaUM7UUFDakMsa0JBQWtCO1FBQ2xCLGtDQUFtQztRQUNuQyw2QkFBNkI7UUFDN0IsMEJBQTBCLEVBQUE7RUF4UGpDO1VBMlBTLFlBQVksRUFBQTtFQTNQckI7VUErUFMsa0NBQWlDLEVBQUE7RUEvUDFDO1VBa1FtQyxtQkFBbUIsRUFBQTtFQWxRdEQ7VUFxUWlDLG1CQUFtQixFQUFBO0VBclFwRDtNQWlSSyxtQ0FBZ0I7TUFDaEIsaUJBQWE7TUFDWCxrQ0FBa0MsRUFBQTtFQW5SekM7UUFzUnNCLFlBQVksRUFBQTtFQXRSbEM7SUFvWEUsc0JBQUE7SUFnQkEscUJBQUE7SUFDQSx3QkFBQTtJQWtDQSx1QkFBQSxFQUF3QjtFQXZhMUI7TUF3U0ssdUNBQWdCO01BQ2hCLG9DQUFjO01BQ2QscUNBQWM7TUFDZCx3Q0FBaUI7TUFDakIsMkNBQTJDO01BQzFDLG1DQUFxQyxFQUFBO0VBQ3JDO1FBOVNOO1VBZ1RXLGFBQWE7VUFDaEIsZ0JBQWU7VUFDZiw4Q0FBNkM7VUFDN0Msa0NBQW9DLEVBQUEsRUErRHJDO0VBbFhQO1FBdVRLOzs7OzJDQ3JIc0MsRUR5SEM7RUFDcEM7VUE1VFI7WUE4VFcsWUFBWSxFQUFBLEVBRWxCO0VBaFVMO1FBa1VRLFdBQVcsRUFBQTtFQWxVbkI7VUFxVU0sK0JBQThCO1VBQzlCLHFDQUFvQztVQUNwQyxrQ0FBaUM7VUFDakMsZ0JBQWU7VUFDZCxrQ0FBa0MsRUFBQTtFQUNoQztZQTFVVDtjQTRVTyxrQ0FBaUMsRUFBQSxFQUVsQztFQTlVTjtVQWlWTyxxQ0FBb0M7VUFDcEMsa0NBQWlDO1VBQ2pDLG1CQUFrQjtVQUNsQiwrQkFBOEI7VUFDOUIsa0NBQWtDLEVBQUE7RUFDaEM7WUF0VlQ7Y0F3Vk8sa0NBQWlDLEVBQUEsRUFHbEM7RUEzVk47VUE4VlEsc0NBQWdCO1VBQ2hCLHNDQUFnQjtVQUNoQixvQ0FBYztVQUNkLDJCQUE0QjtVQUM1QixrQ0FBb0M7VUFDcEMsbUNBQWdCO1VBQ2hCLGtCQUFlO1VBQ1gsa0JBQWEsRUFBQTtFQXJXekI7VUEwV08sa0JBQWtCO1VBQ2xCLHVCQUF3QjtVQUN4QixtQkFBbUI7VUFDbkIsMkJBQTZCLEVBQUE7RUE3V3BDO01BeVhLLGtDQUFpQyxFQUFBO0VBelh0QztNQThYSSxrQ0FBZ0I7TUFDaEIsMkJBQTBCO01BQzFCLDJCQUE2QjtNQUN6QixrQkFBYSxFQUFBO0VBallyQjtNQTBZUSxrQ0FBaUM7TUFDcEMsa0NBQWdCO01BQ2hCLDJDQUEyQztNQUMzQyxtQ0FBbUMsRUFBQTtFQTdZeEM7UUFnWkssaUJBQWE7UUFBTSxrQ0FBZ0IsRUFBQTtFQWhaeEM7UUFvWk8scUNBQW9DO1FBQ3BDLGtDQUFpQztRQUNqQyw2QkFBNEI7UUFDNUIsZ0NBQStCLEVBQUE7RUF2WnRDO1VBMFpPLCtCQUE4QjtVQUM5QixnQkFBZSxFQUFBO0VBM1p0QjtRQWdhTyxxQ0FBb0M7UUFDcEMsa0NBQWlDO1FBQ2pDLDZCQUE0QjtRQUM1QixnQ0FBK0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudFxueyAgXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG57XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tdmFsdWUtMCk7XG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXZhbHVlLTApO1xuICAgIC0tcGFkZGluZy10b3A6ICB2YXIoLS1pb24tdmFsdWUtMCk7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogIHZhcigtLWlvbi12YWx1ZS0wKTtcblx0XG59XG4tLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuLyogQ2FydCBTZWN0aW9uIFN0YXJ0Ki9cbiAgIFtjYXJ0LXBhZ2VdXG4gICB7IFsgYmVzdC1zZWxsZXJzXVxuXHQgICB7XG5cdFx0ICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0yMCk7XG5cdCAgIH1cbiAgICAgIFtzaG9wcGluZy1jYXJ0XVxuXHQgIHsgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTIwKTtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdFx0Ym94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwuMDgpO1xuXHRcdFx0XHQmWyBjYXJ0LXNpZGViYXJdXG5cdFx0XHRcdHtcblx0ICAgICAgICAgICAgcGFkZGluZzogdmFyKCAtLWlvbi1wYWRkaW5nLTIwKTtcblx0XHQgICAgIGlvbi1idXR0b25cblx0XHQgICBcdFx0e1xuICAgICAgICAgICAgICAgICAgICAtLWJveC1zaGFkb3c6bm9uZTtcblx0XHRcdFx0XHQtLWJvcmRlci1yYWRpdXM6MDtcblx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xuXHRcdFx0XHRcdCY6aG92ZXJcblx0XHRcdFx0XHR7XG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdH1cdFxuXHRcdFx0XHQuY2FydC1zaG9wcGluZy10b3RhbFxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgICBiYWNrZ3JvdW5kOiB2YXIoIC0taW9uLWNvbG9yLWdyZXlmOCk7XG5cdFx0XHRcdFx0dGFibGVcblx0XHRcdFx0XHR7bWFyZ2luOnZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0ICB0aFxuXHRcdFx0XHRcdCAgeyAgICBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHRcdFx0ICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhciggLS1pb24tcGFkZGluZy0xNSk7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuXHRcdFx0XHRcdFx0XHRbY2FydC1zdWItdG90YWxdICAsIFx0W2NhcnQtZ3JhbmQtdG90YWxdXG5cdFx0XHRcdFx0XHRcdHsgICAgXG5cdFx0XHRcdFx0XHRcdFx0ICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAgdmFyKC0taW9uLW1hcmdpbi03KTtcblx0XHRcdFx0XHRcdFx0XHRcdFtpbm5lci1sZWZ0LW1kXSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogdmFyKCAtLWlvbi1wYWRkaW5nLTApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0XHRcdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0W2NhcnQtZ3JhbmQtdG90YWxdXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogIzg0Yjk0MyFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHQgICBbZXN0aW1hdGUtc2hpcC10YXhdXG5cdFx0XHQgICB7ICB0aFxuXHRcdFx0XHRcdCAge1xuXHRcdFx0XHRcdFx0IFx0cGFkZGluZzogdmFyKCAtLWlvbi1wYWRkaW5nLTApICB2YXIoIC0taW9uLXBhZGRpbmctMCkgIHZhciggLS1pb24tcGFkZGluZy0xNSkgIHZhciggLS1pb24tcGFkZGluZy0wKTsgXG5cdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0ICB0ZFxuXHRcdFx0XHRcdCAge1xuXHRcdFx0XHRcdFx0ICBwYWRkaW5nOiAgIHZhciggLS1pb24tcGFkZGluZy0xNSkgdmFyKCAtLWlvbi1wYWRkaW5nLTApICAgdmFyKCAtLWlvbi1wYWRkaW5nLTApOyBcblx0XHRcdFx0XHQgIH1cblx0XHRcdFx0ICAgICBcdFtlc3RpbWF0ZS10aXRsZV1cblx0XHRcdCAgICAgICAgICAgIHsgXG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0yKTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0ICAgfSBcblx0XHRcdFx0aW5wdXRcblx0XHRcdFx0e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzpub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmV5OSk7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xMCkgdmFyKC0taW9uLXBhZGRpbmctMTIpO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTMpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdH1cdFxuICAgICAgICAgICAgICAgXHRcdFx0XG5cdFx0XHQgICAgfVxuXHRcdH1cdFxuXHQgICAgIHRhYmxlXG5cdFx0IHtcblx0XHQgICB0clxuXHQgICAgICAgIHtcblx0XHRcdCAgIHRoXG5cdFx0XHQgICB7XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTsgXHQgICAgICAgXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSk7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xuXHRcdFx0ICAgfVxuXHRcdFx0ICAgdGRcblx0XHRcdCAgIHsgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHQgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSk7XG5cdFx0XHRcdCAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuXHRcdFx0XHQgIGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHQmW2NhcnQtaW1hZ2VdXG5cdFx0XHRcdFx0ICB7XG5cdFx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0ICAgd2lkdGg6IDEwMHB4O1xuXHRcdFx0XHRcdFx0IH1cblx0XHRcdFx0XHRcdCBbZW50cnktdGh1bWJuYWlsXSB7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0ICAmW2NhcnQtcHJvZHVjdC1zdWItdG90YWxdICwgJltjYXJ0LXByb2R1Y3QtZ3JhbmQtdG90YWxdXG5cdFx0XHRcdFx0ICB7XG5cdFx0XHRcdFx0XHQgICAgIFtjYXJ0LXN1Yi10b3RhbC1wcmljZV0gICwgW2NhcnQtZ3JhbmQtdG90YWwtcHJpY2VdXG5cdFx0XHRcdFx0XHRcdCB7XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjazMpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdCB9XG5cdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0ICAmW2NhcnQtcHJvZHVjdC1uYW1lLWluZm9dXG5cdFx0XHRcdFx0ICB7XG5cdFx0XHRcdFx0ICAgICAgW2NhcnQtcHJvZHVjdC1kZXNjcmlwdGlvbl1cblx0XHRcdFx0XHRcdCAgeyAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0XHQgICAgICBmb250LXNpemU6ICB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcblx0XHRcdFx0XHRcdCAgICBhXG5cdFx0XHRcdFx0XHRcdHsgXG5cdFx0XHRcdFx0XHRcdCAgICAgXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdFx0XHRcdFx0XHRcdCAgICBmb250LXNpemU6ICB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHRcdCAgW3JhdGluZ11cblx0XHRcdFx0XHRcdCAgeyAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC02cHg7XG5cdFx0XHRcdFx0XHRcdCAgaW9uLWljb24ge1xuXHRcdFx0XHRcdFx0XHRcdCBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXllbGxvdyk7XG5cdFx0XHRcdFx0XHRcdCAgfVx0XHRcdFx0XHRcdFx0IFxuXHRcdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0XHQgICBbcmV2aWV3c10ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAgdmFyKC0taW9uLWZvbnQtc2l6ZS0xMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNhYWE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdFx0XHRcdCAgW2NhcnQtcHJvZHVjdC1pbmZvXSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0XHRcdFx0ICBbY2FydC1wcm9kdWN0LWluZm9dXG5cdFx0XHRcdFx0XHRcdCAge1xuXHRcdFx0XHRcdFx0XHQgICAgIFtwcm9kdWN0LWNvbG9yXVxuXHRcdFx0XHRcdFx0XHRcdCB7XG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyZXkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcGFuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgY29sb3I6ICM4NGI5NDM7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4tMTQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0IH1cblx0XHRcdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0ICAmW2NhcnQtcHJvZHVjdC1xdWFudGl0eV1cblx0XHRcdFx0XHQgIHsgXG5cdFx0XHRcdFx0XHQgIFtxdWFudC1pbnB1dF1cblx0XHRcdFx0XHRcdCAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogIHZhciggLS1pb24td2gtMzUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IHZhciggLS1pb24td2gtNzApO1xuXHRcdFx0XHRcdFx0XHRcdFx0W2Fycm93c11cblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJpZ2h0OiAgdmFyKCAtLWlvbi12YWx1ZS0xMCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRvcDogdmFyKCAtLWlvbi12YWx1ZS0wKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ei1pbmRleDogMjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0W2Fycm93XVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ICAgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Jjpob3ZlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnNvcjpwb2ludGVyO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ICZbbWludXNdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgeyBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAuaWNvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICB0b3A6IC03cHghaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfVx0IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuaWNvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB0b3A6IDVweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBwb3NpdGlvbjpyZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdCAgICAgfVxuXHRcdFx0XHRcdFx0XHRcdCAgICBpbnB1dCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjRjJGMkYyO1xuXHRcdFx0XHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6ICB2YXIoIC0taW9uLXdoLTM1KTtcblx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6IHZhciggLS1pb24tdmFsdWUtMCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0yMCkgdmFyKC0taW9uLXBhZGRpbmctMCkgdmFyKC0taW9uLXBhZGRpbmctMTgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0dG9wOiB2YXIoIC0taW9uLXZhbHVlLTApO1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICB2YXIoIC0taW9uLXdoLTcwKTtcblx0XHRcdFx0XHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0XHRcdFx0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHRcdFx0XHRcdFx0ICBcblx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHQgICZbcmVtb3ZlLWl0ZW1dXG5cdFx0XHRcdFx0ICB7XG5cdFx0XHRcdFx0ICAgIFxuXHRcdFx0XHRcdCBcblx0XHRcdFx0XHQgICBbYWN0aW9uLWljb25zXVxuICAgXHRcdFx0XHRcdCAgICAge1xuXHRcdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICM1Y2I4NWM7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXdoaXRlKSA7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiB2YXIoLS1pb24tdmFsdWUtMzApO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0zMCk7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6ICB2YXIoLS1pb24tdmFsdWUtMzApO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogIHZhcigtLWlvbi1mb250LXNpemUtMTQpIDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7XG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogdmFyKC0taW9uLXZhbHVlLTApO1xuXHRcdFx0XHRcdFx0XHQmOmhvdmVyXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ICBvcGFjaXR5OiAwLjg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Jlttci0xMF1cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHQgIG1hcmdpbi1yaWdodDp2YXIoLS1pb24tbWFyZ2luLTEwKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCZbZGVmYXVsdC1pY29uXSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZTNhOTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0XHQgICAmW2RlbC1pY29uXSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDk1MzRmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0XHRcdCB9XHRcblx0XHRcdCAgICAgICAgIH1cblx0XHRcdFx0IH1cblx0XHRcdH1cblx0XHRcdHRmb290XG5cdFx0XHR7ICBcblx0XHRcdFx0W3Nob3BwaW5nLWNhcnQtYnRuXVxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgaW9uLWJ1dHRvblxuXHRcdFx0XHQgIHtcblx0XHRcdFx0XHQtLWJvcmRlci1yYWRpdXM6dmFyKCAtLWlvbi12YWx1ZS0wKTtcblx0XHRcdFx0XHQtLWJveC1zaGFkb3c6bm9uZTtcblx0XHRcdFx0XHQgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XG5cdFx0XHRcdFx0Jjpob3ZlclxuXHRcdFx0XHRcdHtcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0ICB9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQgXG5cdFx0IH1cblx0ICB9XG4gICBcbiAgIH0gXG4vKiBDYXJ0IFNlY3Rpb24gRW5kcyovICAgXG5cbi8qIENhcnQgTW9iaWxlIFNlY3Rpb24gU3RhcnQqL1xuW2NhcnQtbW9iXVxue1xuXHRcdFtjYXJ0LWl0ZW1zXVxuXHRcdHtcblx0XHRcdGlvbi1pdGVte1xuXHRcdFx0XHRcdC0tcGFkZGluZy1zdGFydDogdmFyKCAtLWlvbi1wYWRkaW5nLTEwKTtcblx0XHRcdFx0XHQtLXBhZGRpbmctZW5kOiB2YXIoIC0taW9uLXBhZGRpbmctMCk7XG5cdFx0XHRcdFx0LS1wYWRkaW5nLXRvcDogdmFyKCAtLWlvbi1wYWRkaW5nLTEwKTtcblx0XHRcdFx0XHQtLXBhZGRpbmctYm90dG9tOiB2YXIoIC0taW9uLXBhZGRpbmctMTApO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAgdmFyKCAtLWlvbi1tYXJnaW4tMTApO1xuXHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHQgICAgZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0XHRib3gtc2hhZG93Om5vbmU7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206ICB2YXIoIC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0aW9uLXRodW1ibmFpbFxuXHRcdFx0XHR7IFxuXHRcdFx0XHQgLypcblx0XHRcdFx0XHRcdHdpZHRoOiB2YXIoIC0taW9uLXZhbHVlLTkwKTtcblx0XHRcdFx0XHQgICBoZWlnaHQ6IHZhciggLS1pb24tdmFsdWUtOTApO1xuXHRcdFx0XHRcdCAgbWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdCAgIG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi0wKTsqL1xuXHRcdFx0XHRcdCAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ICAgIGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRsYWJlbFxuXHRcdFx0XHR7ICAgd2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0aDNcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDo3MDA7XG5cdFx0XHRcdFx0XHQgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0zKTtcblx0XHRcdFx0XHRcdCAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcblx0XHRcdFx0XHRcdCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgXG5cdFx0XHRcdFx0XHQgfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0IGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0XHRcdFx0XHRcdCBmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG5cdFx0XHRcdFx0XHQgZm9udC13ZWlnaHQ6bm9ybWFsO1xuXHRcdFx0XHRcdFx0IGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcblx0XHRcdFx0XHRcdCBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTMpO1xuXHRcdFx0XHRcdFx0ICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxuXHRcdFx0XHRcdFx0IHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTIpOyBcblx0XHRcdFx0XHRcdCB9XG5cdFx0XHRcdFx0XHQgXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlvbi1idXR0b25cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiB2YXIoIC0taW9uLXBhZGRpbmctNCk7XG5cdFx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiB2YXIoIC0taW9uLXBhZGRpbmctNCk7XG5cdFx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLWVuZDogdmFyKCAtLWlvbi1wYWRkaW5nLTQpO1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogdmFyKCAtLWlvbi12YWx1ZS0yMik7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAgdmFyKCAtLWlvbi1mb250LXNpemUtMTIpO1xuXHRcdFx0XHRcdFx0XHRcdC0tYm9yZGVyLXJhZGl1czp2YXIoIC0taW9uLXZhbHVlLTApO1xuXHRcdFx0XHRcdFx0XHRcdC0tYm9yZGVyLXdpZHRoOjFweDtcblx0XHRcdFx0XHRcdFx0XHQgICAgLS1ib3gtc2hhZG93OiBub25lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRbYWRkLXF1YW50aXR5XVxuXHRcdFx0XHRcdHsgICAgW251bS1xdWFudGl0eV1cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IHZhciggLS1pb24tdmFsdWUtNik7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogIHZhciggLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdFx0fSAgICBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHQgICB9XG5cdFx0fVxuXHRcdC8qIENvdXBvbiBDb2RlIFN0YXJ0ICovXG5cdFx0W2NhcnQtY291cG9uXVxuXHRcdHtcblx0XHQgaW9uLWlucHV0XG5cdFx0ICB7XG5cdFx0XHQgIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdCAgXG5cdFx0ICB9XG5cdFx0ICBpb24tYnV0dG9uXG5cdFx0ICB7XG5cdFx0XHQgLS1ib3JkZXItcmFkaXVzOnZhcigtLWlvbi12YWx1ZS0wKTtcblx0XHRcdCBtYXJnaW46dmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdCBoZWlnaHQ6ICB2YXIoIC0taW9uLXZhbHVlLTQwKTtcblx0XHRcdCAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuXHRcdCAgfVxuXHRcdH1cblx0XHQvKiBDb3Vwb24gQ29kZSBFbmRzICovXG5cdFx0LyogQ2FydCBTdWJ0b3RhbCBTdGFydCAqL1xuXHRcdFtjYXJ0LXN1YnRvdGFsXVxuXHRcdHtcblx0XHRcdCBpb24tY2FyZFxuXHRcdFx0IHtcblx0XHRcdFx0ICAgIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdFx0XHQtLWJvcmRlci1yYWRpdXM6dmFyKC0taW9uLXZhbHVlLTApO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xMCk7XHRcblx0XHRcdFx0XHRpb24tYnV0dG9uIFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQtLWJveC1zaGFkb3c6bm9uZTtcdC0tYm9yZGVyLXJhZGl1czp2YXIoLS1pb24tdmFsdWUtNCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGgyXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0IGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0XHRcdFx0XHRcdCBmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7IFxuXHRcdFx0XHRcdFx0IGNvbG9yOnZhcigtLWlvbi1jb2xvci1ibGFjayk7XG5cdFx0XHRcdFx0XHQgbWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLTEwKTtcblx0XHRcdFx0XHRcdFtwcmljZV1cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG5cdFx0XHRcdFx0XHQgZm9udC13ZWlnaHQ6NzAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cdFxuXHRcdFx0XHRcdHBcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQgZm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdFx0XHRcdFx0IGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTE0KTsgXG5cdFx0XHRcdFx0XHQgY29sb3I6dmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcblx0XHRcdFx0XHRcdCBtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMTApO1xuXHRcdFx0XHRcdH1cdFxuXHRcdFx0IH1cblx0XHR9XG5cdFx0LyogQ2FydCBTdWJ0b3RhbCBFbmRzICovXG59XG4vKiBDYXJ0IE1vYmlsZSBTZWN0aW9uIEVuZHMqL1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5KTtcbiAgLyogQ2FydCBTZWN0aW9uIFN0YXJ0Ki9cbiAgLyogQ2FydCBTZWN0aW9uIEVuZHMqL1xuICAvKiBDYXJ0IE1vYmlsZSBTZWN0aW9uIFN0YXJ0Ki9cbiAgLyogQ2FydCBNb2JpbGUgU2VjdGlvbiBFbmRzKi8gfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tdmFsdWUtMCk7XG4gICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tdmFsdWUtMCk7XG4gICAgICAtLXBhZGRpbmctdG9wOiAgdmFyKC0taW9uLXZhbHVlLTApO1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogIHZhcigtLWlvbi12YWx1ZS0wKTsgfSB9XG4gIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtiZXN0LXNlbGxlcnNdIHtcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTIwKTsgfVxuICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0ge1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMjApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTsgfVxuICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XVtjYXJ0LXNpZGViYXJdIHtcbiAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTIwKTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdW2NhcnQtc2lkZWJhcl0gaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6MDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTsgfVxuICAgICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF1bY2FydC1zaWRlYmFyXSBpb24tYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7IH1cbiAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XVtjYXJ0LXNpZGViYXJdIC5jYXJ0LXNob3BwaW5nLXRvdGFsIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZXlmOCk7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdW2NhcnQtc2lkZWJhcl0gLmNhcnQtc2hvcHBpbmctdG90YWwgdGFibGUge1xuICAgICAgICAgIG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbi0wKTsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XVtjYXJ0LXNpZGViYXJdIC5jYXJ0LXNob3BwaW5nLXRvdGFsIHRhYmxlIHRoIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlOyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF1bY2FydC1zaWRlYmFyXSAuY2FydC1zaG9wcGluZy10b3RhbCB0YWJsZSB0aCBbY2FydC1zdWItdG90YWxdLCBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF1bY2FydC1zaWRlYmFyXSAuY2FydC1zaG9wcGluZy10b3RhbCB0YWJsZSB0aCBbY2FydC1ncmFuZC10b3RhbF0ge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjazMpO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTcpOyB9XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XVtjYXJ0LXNpZGViYXJdIC5jYXJ0LXNob3BwaW5nLXRvdGFsIHRhYmxlIHRoIFtjYXJ0LXN1Yi10b3RhbF0gW2lubmVyLWxlZnQtbWRdLCBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF1bY2FydC1zaWRlYmFyXSAuY2FydC1zaG9wcGluZy10b3RhbCB0YWJsZSB0aCBbY2FydC1ncmFuZC10b3RhbF0gW2lubmVyLWxlZnQtbWRdIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdW2NhcnQtc2lkZWJhcl0gLmNhcnQtc2hvcHBpbmctdG90YWwgdGFibGUgdGggW2NhcnQtZ3JhbmQtdG90YWxdIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM4NGI5NDMgIWltcG9ydGFudDsgfVxuICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdW2NhcnQtc2lkZWJhcl0gW2VzdGltYXRlLXNoaXAtdGF4XSB0aCB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApIHZhcigtLWlvbi1wYWRkaW5nLTApIHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0wKTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdW2NhcnQtc2lkZWJhcl0gW2VzdGltYXRlLXNoaXAtdGF4XSB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0wKTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdW2NhcnQtc2lkZWJhcl0gW2VzdGltYXRlLXNoaXAtdGF4XSBbZXN0aW1hdGUtdGl0bGVdIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0yKTtcbiAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XVtjYXJ0LXNpZGViYXJdIFtlc3RpbWF0ZS1zaGlwLXRheF0gaW5wdXQge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmV5OSk7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTApIHZhcigtLWlvbi1wYWRkaW5nLTEyKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTMpOyB9XG4gICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRoIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcbiAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTUpO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7IH1cbiAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGQge1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBib3JkZXI6IG5vbmU7IH1cbiAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XSB0YWJsZSB0ciB0ZFtjYXJ0LWltYWdlXSBpbWcge1xuICAgICAgICB3aWR0aDogMTAwcHg7IH1cbiAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XSB0YWJsZSB0ciB0ZFtjYXJ0LWltYWdlXSBbZW50cnktdGh1bWJuYWlsXSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XSB0YWJsZSB0ciB0ZFtjYXJ0LXByb2R1Y3Qtc3ViLXRvdGFsXSBbY2FydC1zdWItdG90YWwtcHJpY2VdLCBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbY2FydC1wcm9kdWN0LXN1Yi10b3RhbF0gW2NhcnQtZ3JhbmQtdG90YWwtcHJpY2VdLCBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbY2FydC1wcm9kdWN0LWdyYW5kLXRvdGFsXSBbY2FydC1zdWItdG90YWwtcHJpY2VdLCBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbY2FydC1wcm9kdWN0LWdyYW5kLXRvdGFsXSBbY2FydC1ncmFuZC10b3RhbC1wcmljZV0ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW2NhcnQtcHJvZHVjdC1uYW1lLWluZm9dIFtjYXJ0LXByb2R1Y3QtZGVzY3JpcHRpb25dIHtcbiAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTsgfVxuICAgICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbY2FydC1wcm9kdWN0LW5hbWUtaW5mb10gW2NhcnQtcHJvZHVjdC1kZXNjcmlwdGlvbl0gYSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTYpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrMyk7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbY2FydC1wcm9kdWN0LW5hbWUtaW5mb10gW3JhdGluZ10ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTZweDsgfVxuICAgICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbY2FydC1wcm9kdWN0LW5hbWUtaW5mb10gW3JhdGluZ10gaW9uLWljb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3IteWVsbG93KTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW2NhcnQtcHJvZHVjdC1uYW1lLWluZm9dIFtyZXZpZXdzXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMSk7XG4gICAgICAgIGNvbG9yOiAjYWFhOyB9XG4gICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbY2FydC1wcm9kdWN0LW5hbWUtaW5mb10gW2NhcnQtcHJvZHVjdC1pbmZvXSB7XG4gICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMTApOyB9XG4gICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbY2FydC1wcm9kdWN0LW5hbWUtaW5mb10gW2NhcnQtcHJvZHVjdC1pbmZvXSBbcHJvZHVjdC1jb2xvcl0ge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmV5KTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbY2FydC1wcm9kdWN0LW5hbWUtaW5mb10gW2NhcnQtcHJvZHVjdC1pbmZvXSBbcHJvZHVjdC1jb2xvcl0gc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICM4NGI5NDM7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbi0xNCk7IH1cbiAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XSB0YWJsZSB0ciB0ZFtjYXJ0LXByb2R1Y3QtcXVhbnRpdHldIFtxdWFudC1pbnB1dF0ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogdmFyKC0taW9uLXdoLTM1KTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogdmFyKC0taW9uLXdoLTcwKTsgfVxuICAgICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbY2FydC1wcm9kdWN0LXF1YW50aXR5XSBbcXVhbnQtaW5wdXRdIFthcnJvd3NdIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMTApO1xuICAgICAgICAgIHRvcDogdmFyKC0taW9uLXZhbHVlLTApO1xuICAgICAgICAgIHotaW5kZXg6IDI7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbY2FydC1wcm9kdWN0LXF1YW50aXR5XSBbcXVhbnQtaW5wdXRdIFthcnJvd3NdIFthcnJvd106aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XSB0YWJsZSB0ciB0ZFtjYXJ0LXByb2R1Y3QtcXVhbnRpdHldIFtxdWFudC1pbnB1dF0gW2Fycm93c10gW2Fycm93XVttaW51c10gLmljb24ge1xuICAgICAgICAgICAgdG9wOiAtN3B4ICFpbXBvcnRhbnQ7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbY2FydC1wcm9kdWN0LXF1YW50aXR5XSBbcXVhbnQtaW5wdXRdIFthcnJvd3NdIFthcnJvd10gLmljb24ge1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW2NhcnQtcHJvZHVjdC1xdWFudGl0eV0gW3F1YW50LWlucHV0XSBpbnB1dCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjJGMkYyO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE1KTtcbiAgICAgICAgICBoZWlnaHQ6IHZhcigtLWlvbi13aC0zNSk7XG4gICAgICAgICAgbGVmdDogdmFyKC0taW9uLXZhbHVlLTApO1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApIHZhcigtLWlvbi1wYWRkaW5nLTIwKSB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0xOCk7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogdmFyKC0taW9uLXZhbHVlLTApO1xuICAgICAgICAgIHdpZHRoOiB2YXIoLS1pb24td2gtNzApO1xuICAgICAgICAgIHotaW5kZXg6IDE7IH1cbiAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XSB0YWJsZSB0ciB0ZFtyZW1vdmUtaXRlbV0gW2FjdGlvbi1pY29uc10ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6ICM1Y2I4NWM7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1pb24tdmFsdWUtMzApO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0zMCk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0zMCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgICAgIGJvcmRlcjogdmFyKC0taW9uLXZhbHVlLTApOyB9XG4gICAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XSB0YWJsZSB0ciB0ZFtyZW1vdmUtaXRlbV0gW2FjdGlvbi1pY29uc106aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuODsgfVxuICAgICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbcmVtb3ZlLWl0ZW1dIFthY3Rpb24taWNvbnNdW21yLTEwXSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLTEwKTsgfVxuICAgICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbcmVtb3ZlLWl0ZW1dIFthY3Rpb24taWNvbnNdW2RlZmF1bHQtaWNvbl0ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZTNhOTA7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW3JlbW92ZS1pdGVtXSBbYWN0aW9uLWljb25zXVtkZWwtaWNvbl0ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkOTUzNGY7IH1cbiAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdGZvb3QgW3Nob3BwaW5nLWNhcnQtYnRuXSBpb24tYnV0dG9uIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czp2YXIoIC0taW9uLXZhbHVlLTApO1xuICAgICAgLS1ib3gtc2hhZG93Om5vbmU7XG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpOyB9XG4gICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdGZvb3QgW3Nob3BwaW5nLWNhcnQtYnRuXSBpb24tYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC44OyB9XG4gIGlvbi1jb250ZW50IFtjYXJ0LW1vYl0ge1xuICAgIC8qIENvdXBvbiBDb2RlIFN0YXJ0ICovXG4gICAgLyogQ291cG9uIENvZGUgRW5kcyAqL1xuICAgIC8qIENhcnQgU3VidG90YWwgU3RhcnQgKi9cbiAgICAvKiBDYXJ0IFN1YnRvdGFsIEVuZHMgKi8gfVxuICAgIGlvbi1jb250ZW50IFtjYXJ0LW1vYl0gW2NhcnQtaXRlbXNdIGlvbi1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKCAtLWlvbi1wYWRkaW5nLTEwKTtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhciggLS1pb24tcGFkZGluZy0wKTtcbiAgICAgIC0tcGFkZGluZy10b3A6IHZhciggLS1pb24tcGFkZGluZy0xMCk7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoIC0taW9uLXBhZGRpbmctMTApO1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApOyB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIGlvbi1jb250ZW50IFtjYXJ0LW1vYl0gW2NhcnQtaXRlbXNdIGlvbi1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5KTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTApOyB9IH1cbiAgICAgIGlvbi1jb250ZW50IFtjYXJ0LW1vYl0gW2NhcnQtaXRlbXNdIGlvbi1pdGVtIGlvbi10aHVtYm5haWwge1xuICAgICAgICAvKlxuXHRcdFx0XHRcdFx0d2lkdGg6IHZhciggLS1pb24tdmFsdWUtOTApO1xuXHRcdFx0XHRcdCAgIGhlaWdodDogdmFyKCAtLWlvbi12YWx1ZS05MCk7XG5cdFx0XHRcdFx0ICBtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0ICAgbWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLTApOyovIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgIGlvbi1jb250ZW50IFtjYXJ0LW1vYl0gW2NhcnQtaXRlbXNdIGlvbi1pdGVtIGlvbi10aHVtYm5haWwge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyB9IH1cbiAgICAgIGlvbi1jb250ZW50IFtjYXJ0LW1vYl0gW2NhcnQtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtbW9iXSBbY2FydC1pdGVtc10gaW9uLWl0ZW0gbGFiZWwgaDMge1xuICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0zKTsgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtjYXJ0LW1vYl0gW2NhcnQtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIGgzIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFtjYXJ0LW1vYl0gW2NhcnQtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIHAge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0zKTsgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtjYXJ0LW1vYl0gW2NhcnQtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIHAge1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtbW9iXSBbY2FydC1pdGVtc10gaW9uLWl0ZW0gbGFiZWwgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoIC0taW9uLXBhZGRpbmctNCk7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoIC0taW9uLXBhZGRpbmctNCk7XG4gICAgICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKCAtLWlvbi1wYWRkaW5nLTQpO1xuICAgICAgICAgIGhlaWdodDogdmFyKC0taW9uLXZhbHVlLTIyKTtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czp2YXIoIC0taW9uLXZhbHVlLTApO1xuICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOjFweDtcbiAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtbW9iXSBbY2FydC1pdGVtc10gaW9uLWl0ZW0gbGFiZWwgW2FkZC1xdWFudGl0eV0gW251bS1xdWFudGl0eV0ge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IHZhcigtLWlvbi12YWx1ZS02KTtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbi0wKTsgfVxuICAgIGlvbi1jb250ZW50IFtjYXJ0LW1vYl0gW2NhcnQtY291cG9uXSBpb24taW5wdXQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTsgfVxuICAgIGlvbi1jb250ZW50IFtjYXJ0LW1vYl0gW2NhcnQtY291cG9uXSBpb24tYnV0dG9uIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czp2YXIoLS1pb24tdmFsdWUtMCk7XG4gICAgICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7XG4gICAgICBoZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS00MCk7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7IH1cbiAgICBpb24tY29udGVudCBbY2FydC1tb2JdIFtjYXJ0LXN1YnRvdGFsXSBpb24tY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOnZhcigtLWlvbi12YWx1ZS0wKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTEwKTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtbW9iXSBbY2FydC1zdWJ0b3RhbF0gaW9uLWNhcmQgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6dmFyKC0taW9uLXZhbHVlLTQpOyB9XG4gICAgICBpb24tY29udGVudCBbY2FydC1tb2JdIFtjYXJ0LXN1YnRvdGFsXSBpb24tY2FyZCBoMiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2spO1xuICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTEwKTsgfVxuICAgICAgICBpb24tY29udGVudCBbY2FydC1tb2JdIFtjYXJ0LXN1YnRvdGFsXSBpb24tY2FyZCBoMiBbcHJpY2VdIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cbiAgICAgIGlvbi1jb250ZW50IFtjYXJ0LW1vYl0gW2NhcnQtc3VidG90YWxdIGlvbi1jYXJkIHAge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcbiAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0xMCk7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CartPage = /** @class */ (function () {
    function CartPage(userService, toastController, loadingController, alertController, router, events) {
        var _this = this;
        this.userService = userService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.events = events;
        this.buttonClickeddrop = false;
        this.total_payable_price = 0;
        this.grand_total = 0;
        this.applied_coupon = false;
        this.applied_coupon_amount = 0;
        this.errors = ['', null, undefined];
        this.total_coupon_amount = 0;
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_4__["config"].IMAGES_URL;
        this.events.subscribe('cart_updated:true', function (data) {
            _this.getCartProducts();
        });
    }
    CartPage.prototype.ngOnInit = function () {
    };
    CartPage.prototype.ionViewDidEnter = function () {
        var token = localStorage.getItem('sin_auth_token');
        this.userId = this.userService.decryptData(token, _config__WEBPACK_IMPORTED_MODULE_4__["config"].ENC_SALT);
        localStorage.removeItem('coupon_applied');
        this.total_payable_price = 0;
        this.grand_total = 0;
        this.getCartProductsIds();
    };
    CartPage.prototype.getCartProductsIds = function () {
        var _this = this;
        this.presentLoading();
        this.userService.postData({ user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId }, 'getCartProductsIds').subscribe(function (result) {
            _this.my_wish_products = result.wishlist;
            _this.getCartProducts();
        }, function (err) {
            _this.getCartProducts();
            _this.my_wish_products = [];
        });
    };
    CartPage.prototype.getCartProducts = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId }, 'getCartProducts').subscribe(function (result) {
            _this.stopLoading();
            for (var i = 0; i < result.products.length; i++) {
                if (typeof (result.products[i].product_variations) == 'string') {
                    result.products[i].product_variations = JSON.parse(result.products[i].product_variations);
                }
            }
            _this.cart = result.products;
            if (_this.cart != '') {
                _this.calculateTotalPrice();
            }
            else {
                _this.events.publish('cart_updated:true', { items_in_cart: 0, cart_price: 0 });
            }
        }, function (err) {
            _this.stopLoading();
            _this.cart = [];
        });
    };
    CartPage.prototype.addToWish = function (product_id) {
        var _this = this;
        // if(this.userId == 0){
        //   this.router.navigate(['/login']);
        // }
        // else{
        this.presentLoading();
        this.userService.postData({ product_id: product_id, user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId, wish_title: null, is_new: this.userId == 0 ? 3 : 0, wishlist_id: null }, 'addWishlistNew').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.my_wish_products.push(product_id);
                _this.presentToast('Product added to wishlist.', 'success');
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
        // }
    };
    CartPage.prototype.applyCoupon = function () {
        var _this = this;
        if (this.errors.indexOf(this.coupon_code) >= 0) {
            this.presentToast('Please enter coupon code.', 'danger');
            return false;
        }
        else {
            this.presentLoading();
            this.userService.postData({ coupon_code: this.coupon_code, user_id: this.userId }, 'applyCoupon').subscribe(function (result) {
                _this.stopLoading();
                if (result.status == 1) {
                    _this.presentToast('Coupon applied successfully.', 'success');
                    _this.applied_coupon_id = result.coupon.coupon_id;
                    _this.applied_coupon = true;
                    _this.applied_coupon_amount = Number(result.coupon.discount_value);
                    _this.applied_coupon_type = result.coupon.discount_type;
                    _this.calculateTotalPrice();
                }
                else if (result.status == 2) {
                    _this.presentToast('Coupon already applied.', 'danger');
                }
                else {
                    _this.presentToast('Invalid coupon.', 'danger');
                }
            }, function (err) {
                _this.presentToast('Error,Please try after some time.', 'danger');
                _this.stopLoading();
            });
        }
    };
    CartPage.prototype.removeCoupon = function () {
        this.applied_coupon_id = 0;
        this.coupon_code = '';
        this.applied_coupon = false;
        this.applied_coupon_amount = 0;
        this.calculateTotalPrice();
    };
    CartPage.prototype.calculateTotalPrice = function () {
        var self = this;
        this.total_payable_price = 0;
        this.grand_total = 0;
        if (this.cart.length > 0) {
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
            this.events.publish('cart_updated:true', { items_in_cart: this.cart.length, cart_price: this.total_payable_price });
        }
        else {
            this.events.publish('cart_updated:true', { items_in_cart: 0, cart_price: 0 });
        }
        if (this.applied_coupon == true) {
            var coupon_amount;
            if (this.applied_coupon_type == 'Percent') {
                coupon_amount = (this.applied_coupon_amount / 100) * this.total_payable_price;
            }
            else {
                coupon_amount = this.applied_coupon_amount;
            }
            this.total_coupon_amount = Number(coupon_amount);
            this.grand_total = Number(this.total_payable_price) - Number(coupon_amount);
        }
        else {
            this.grand_total = this.total_payable_price;
        }
    };
    CartPage.prototype.plusQuantity = function (index, cart_id) {
        this.cart[index]['product_quantity'] = Number(this.cart[index]['product_quantity']) + 1;
        this.updateCartQuantity(cart_id, this.cart[index]['product_quantity']);
        if (this.errors.indexOf(this.cart[index]['product_sale_price']) == -1 && this.cart[index]['product_sale_price'] != this.cart[index]['product_purchase_price']) {
            this.total_payable_price = Number(this.total_payable_price) + Number(this.cart[index]['product_sale_price']);
        }
        else {
            this.total_payable_price = Number(this.total_payable_price) + Number(this.cart[index]['product_purchase_price']);
        }
        this.calculateTotalPrice();
        this.events.publish('cart_updated:true', { items_in_cart: this.cart.length, cart_price: this.total_payable_price });
    };
    CartPage.prototype.minusQuantity = function (index, cart_id) {
        if (this.cart[index]['product_quantity'] != 1) {
            this.cart[index]['product_quantity'] = Number(this.cart[index]['product_quantity']) - 1;
            this.updateCartQuantity(cart_id, this.cart[index]['product_quantity']);
            if (this.errors.indexOf(this.cart[index]['product_sale_price']) == -1 && this.cart[index]['product_sale_price'] != this.cart[index]['product_purchase_price']) {
                this.total_payable_price = Number(this.total_payable_price) - Number(this.cart[index]['product_sale_price']);
            }
            else {
                this.total_payable_price = Number(this.total_payable_price) - Number(this.cart[index]['product_purchase_price']);
            }
            this.calculateTotalPrice();
            this.events.publish('cart_updated:true', { items_in_cart: this.cart.length, cart_price: this.total_payable_price });
        }
    };
    CartPage.prototype.updateCartQuantity = function (cart_id, quantity) {
        var _this = this;
        this.userService.postData({ cart_id: cart_id, quantity: quantity }, 'updateCartQuantity').subscribe(function (result) {
            if (result.status == 1) {
                _this.presentToast('Product quantity updated.', 'success');
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    CartPage.prototype.checkout = function () {
        if (this.errors.indexOf(this.userId) >= 0) {
            this.presentToast('Please login to checkout.', 'danger');
            this.router.navigate(['/login']);
        }
        else {
            if (this.applied_coupon == true) {
                localStorage.setItem('coupon_applied', 'success');
                localStorage.setItem('coupon_applied_amount', this.total_coupon_amount);
                localStorage.setItem('applied_coupon_id', this.applied_coupon_id);
            }
            this.router.navigate(['/checkout']);
        }
    };
    CartPage.prototype.remove = function (cart_id, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Are you sure you want to remove this product?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (res) {
                                        console.log('Cancel');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.presentLoading();
                                        _this.userService.postData({ cart_id: cart_id }, 'removeCartProduct').subscribe(function (result) {
                                            _this.stopLoading();
                                            if (result.status == 1) {
                                                _this.cart.splice(index, 1);
                                                _this.calculateTotalPrice();
                                                _this.presentToast('Product removed from cart.', 'success');
                                            }
                                            else {
                                                _this.presentToast('Error,Please try after some time.', 'danger');
                                            }
                                        }, function (err) {
                                            _this.presentToast('Error,Please try after some time.', 'danger');
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartPage.prototype.onButtonClickdrop = function () {
        this.buttonClickeddrop = !this.buttonClickeddrop;
    };
    CartPage.prototype.presentToast = function (message, color) {
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
    CartPage.prototype.presentLoading = function () {
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
    CartPage.prototype.stopLoading = function () {
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
    CartPage.prototype.subtotalPrice = function (item) {
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
    CartPage.prototype.grandTotalPrice = function (item) {
        if (item.is_variation == 1) {
            return Number(item.product_price) * Number(item.product_quantity);
        }
        else if (Number(item.wholesale_price) != 0 && Number(item.product_quantity) >= Number(item.wholesale_products) && this.errors.indexOf(item.wholesale_products) == -1) {
            return item.wholesale_price * item.product_quantity;
        }
        else {
            if (this.errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price) {
                if (item.discount_per_piece != null) {
                    if (item.discount_type == '%') {
                        return ((Number(item.product_sale_price) - ((Number(item.discount_per_piece) / Number(item.product_sale_price)) * 100)) * item.product_quantity).toFixed(2);
                    }
                    else {
                        return ((Number(item.product_sale_price) - Number(item.discount_per_piece)) * item.product_quantity).toFixed(2);
                    }
                }
                else {
                    return item.product_sale_price * item.product_quantity;
                }
            }
            else {
                if (item.discount_per_piece != null) {
                    if (item.discount_type == '%') {
                        return ((Number(item.product_purchase_price) - ((Number(item.discount_per_piece) / Number(item.product_purchase_price)) * 100)) * item.product_quantity).toFixed(2);
                    }
                    else {
                        return ((Number(item.product_purchase_price) - Number(item.discount_per_piece)) * item.product_quantity).toFixed(2);
                    }
                }
                else {
                    return item.product_purchase_price * item.product_quantity;
                }
            }
        }
    };
    ;
    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.page.html */ "./src/app/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], CartPage);
    return CartPage;
}());



/***/ })

}]);
//# sourceMappingURL=cart-cart-module.js.map