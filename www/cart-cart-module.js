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
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");









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
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_8__["HeaderPageModule"]
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

module.exports = "<!-- <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"darkred\" text-uppercase>\n\n  <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"product-details\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n       My Cart\n    </ion-title>\n  <ion-buttons slot=\"end\" >\n          <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n\t     <ion-buttons slot=\"end\">\n          <ion-icon name=\"pin\"></ion-icon>\n    </ion-buttons>\n<ion-buttons slot=\"end\" >\n\t<ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\n\t </ion-buttons>\n  </ion-toolbar>\n      <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n\t              <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n\t              <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n\t              <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n\t              <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t   </div>\n</ion-header>  -->\n<ion-content >\n\t<app-header ></app-header>\n\n<div class=\"ion-padding\">\n<div header_height></div>\n<!-- Breadcrumb Start -->\n\t\t<div breadcrumb  class=\"ion-hide-md-down\">\n\t\t\t\t<div breadcrumb-inner>\n\t\t\t\t\t<ul list-inline list-unstyled style='margin:0 0 15px 0'>\n\t\t\t\t\t    <li style=\"float:left;margin:0 10px 0 0\">\n\t\t\t\t\t    \t<a routerLink=\"/blog\">Home / </a>\n\t\t\t\t\t    </li>\n\t\t\t\t\t\t<li class=\"active\">Cart</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- /.breadcrumb-inner -->\n\t\t</div>\n<!-- Breadcrumb Ends -->\n<!--  Cart Section Start  -->\n\t<div cart-page  >\n\t\t\t\t<ion-row class=\"ion-hide-md-down\">\n\t\t\t\t\t\t<ion-col *ngIf=\"cart == ''\">\n\t\t\t\t\t\t\t<ion-item>No products added in cart. <ion-button routerLink=\"/products\" color=\"darkred\" float-left >Continue Shopping</ion-button></ion-item>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size-lg=\"9\" size-md=\"9\" size-sm=\"12\" size=\"12\" *ngIf=\"cart != ''\">\n\t\t\t\t\t\t   <div shopping-cart>\n\t\t\t\t\t\t\t   <div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t <table class=\"table\">\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th text-center cart-description>Image</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th text-center cart-product-name>Product Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th text-center cart-qty>Quantity</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th text-center cart-sub-total>Product Price</th><th text-center cart-sub-total>Discount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th text-center cart-total>Subtotal</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th text-center cart-total>Grandtotal</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th text-center cart-remove>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div shopping-cart-btn>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-button routerLink=\"/products\" color=\"darkred\" float-left style=\"display: inline-block;float: right!important;position: initial;padding: 0 0;height: 40px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tContinue Shopping\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t <tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of cart; let c_index = index \">\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<td cart-image>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a entry-thumbnail routerLink=\"/product-details/{{item.product_id}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(item.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t  \t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(item.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{item.product_image}}\" alt=\"{{item.product_name}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td cart-product-name-info>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 cart-product-description>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/product-details/{{item.product_id}}\">{{item.product_name}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <ion-row>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div rating rateit-small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-col  size=\"8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div reviews>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(0 Reviews)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-col >\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-row> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div cart-product-info *ngIf=\"item.is_variation == 1\" style=\"float:left;width:100%;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let variation of item.product_variations\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span product-color>{{variation.name}}: <span>{{variation.value}}</span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td cart-product-quantity text-center>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div quant-input>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div arrows>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div arrow plus gradient (click)=\"plusQuantity(c_index,item.cart_id)\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span ir>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon fa fa-sort-asc\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div arrow minus gradient (click)=\"minusQuantity(c_index,item.cart_id)\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span ir>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon fa fa-sort-desc\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [disabled]=\"true\" type=\"text\" value=\"{{item.product_quantity}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td cart-product-discount text-center>\n\t\t\t\t\t\t\t\t\t\t\t\t \t<span cart-discount-price>\n\t\t\t\t\t\t\t\t\t\t\t\t \t\t{{item.product_sale_price}}\n\t\t\t\t\t\t\t\t\t\t\t\t \t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td cart-product-discount text-center>\n\t\t\t\t\t\t\t\t\t\t\t\t \t<span cart-discount-price *ngIf=\"item.discount_type == '%'\">\n\t\t\t\t\t\t\t\t\t\t\t\t \t\t{{item.discount_per_piece}}\n\t\t\t\t\t\t\t\t\t\t\t\t \t\t{{item.discount_type}}\n\t\t\t\t\t\t\t\t\t\t\t\t \t</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t \t<span cart-discount-price *ngIf=\"item.discount_type != '%'\">\n\t\t\t\t\t\t\t\t\t\t\t\t \t\t{{item.discount_type}}\n\t\t\t\t\t\t\t\t\t\t\t\t \t\t{{item.discount_per_piece}}\n\t\t\t\t\t\t\t\t\t\t\t\t \t\t\n\t\t\t\t\t\t\t\t\t\t\t\t \t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<td cart-product-sub-total text-center>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <span  cart-sub-total-price>${{subtotalPrice(item)}}</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t <!-- <span *ngIf=\"errors.indexOf(item.product_sale_price) >= 0 || item.product_sale_price == item.product_purchase_price\" cart-sub-total-price>${{item.product_purchase_price}}</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td cart-product-grand-total text-center>\n\t\t\t\t\t\t\t\t\t\t\t\t \t<span cart-grand-total-price>${{grandTotalPrice(item)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<td remove-item text-center>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a href=\"javascript:void(0)\"  icon action-icons default-icon mr-10>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-exchange\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\t -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/product-details/{{item.product_id}}\" href=\"javascript:void(0)\" icon action-icons mr-10 title='View Product'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"remove(item.cart_id,c_index,item.product_id,item.product_sale_price,item.product_purchase_price)\" href=\"javascript:void(0)\" icon action-icons del-icon  title='Delete From Cart'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <i class=\"fa fa-trash-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t   </tbody>\n\t\t\t\t\t\t\t\t\t  </table>\n\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size-lg=\"3\" size-md=\"3\" size-sm=\"12\" size=\"12\" *ngIf=\"cart != ''\">\n\t\t\t\t\t\t\t <div shopping-cart cart-sidebar>\n\t\t\t\t\t\t\t\t<div class=\"table-responsive\" estimate-ship-tax>\n\t\t\t\t\t\t\t\t\t  <table class=\"table\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span estimate-title>Discount Code</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"applied_coupon == false\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Enter your coupon code if you have one..</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"coupon_code\" type=\"text\" class=\"form-control unicase-form-control text-input\" placeholder=\"Your Coupon..\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-button color=\"darkred\" (click)=\"applyCoupon()\" style=\"position: initial;float: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAPPLY COUPON\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"applied_coupon == true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Coupon <b>{{coupon_code}}</b> applied\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-button icon action-icons del-icon (click)=\"removeCoupon()\" style=\"position: initial;margin: -11px 0 0 0;padding: 0 0;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"close\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody><!-- /tbody -->\n\t\t\t\t\t\t\t\t\t   </table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"cart-shopping-total table-responsive\">\n\t\t\t\t\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div cart-sub-total>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSubtotal<span inner-left-md>${{total_payable_price.toFixed(2)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div cart-grand-total *ngIf=\"applied_coupon == true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCoupon applied<span inner-left-md>-${{total_coupon_amount.toFixed(2)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div cart-grand-total>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tGrand Total<span inner-left-md>${{grand_total.toFixed(2)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead><!-- /thead -->\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div cart-checkout-btn>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-button color=\"darkred\" (click)=\"checkout()\" style='display: inline-block;float: right!important;position: initial;padding: 0 0;height: 40px;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPROCEED TO CHECKOUT\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <ion-button color=\"darkred\"  style='display: inline-block;float: right!important;position: initial;padding: 0 0;height: 40px;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPROCEED TO CHECKOUT\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody><!-- /tbody -->\n\t\t\t\t\t\t\t\t\t   </table><!-- /table -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t </div>\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t  <!--  New Products  Start-->\n\n\t\t\t\t <!--  New Products Ends -->\n\t\t\t\t<!--  Best Sellers Start -->\n\t\t<!--  Best Sellers   Ends -->\n\n\t\t\t\t</ion-row>\n\n\n\n\t</div>\n<!--  Cart Section Ends  -->\n<!--  Cart Mobile Section Start  -->\n<div cart-mob class=\"ion-hide-lg-up\">\n\n\t\t\t\t <div cart-subtotal>\n\t\t\t\t   <ion-card  no-margin padding>\n\t\t\t\t\t   <ion-row>\n\t\t\t\t\t\t <ion-col size=\"12\" no-padding>\n\t\t\t\t\t\t\t <h2>Subtotal ({{cart?.length}} {{cart?.length == 1 ? 'item' : 'items'}}): <span price> ${{total_payable_price}}</span></h2>\n\t\t\t\t\t\t </ion-col>\n\t\t\t\t\t   </ion-row>\n\t\t\t\t\t<ion-button size=\"full\" color=\"darkred\" routerLink=\"/checkout\">\n\t               Proceed To Checkout\n\t              </ion-button>\n\t\t\t\t   </ion-card>\n\t\t\t\t </div>\n\t\t\t\t  <div cart-items>\n\t\t\t\t\t<ion-item lines=\"none\" *ngFor=\"let item of cart; let cm_index = index \">\n\t\t\t\t\t   <ion-thumbnail slot=\"start\">\n\t\t\t\t\t\t  <img *ngIf=\"errors.indexOf(item.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t  <img *ngIf=\"errors.indexOf(item.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{item.product_image}}\" alt=\"{{item.product_name}}\">\n\t\t\t\t\t   </ion-thumbnail>\n\t\t\t\t\t   <label>\n\t\t\t\t\t\t  <h3>{{item.product_name}}</h3>\n\t\t\t\t\t\t  <p>\n\t\t\t\t\t\t  \t<span *ngIf=\"errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price\">${{item.product_sale_price}}</span>\n\n\t\t\t\t\t\t\t<span *ngIf=\"errors.indexOf(item.product_sale_price) >= 0 || item.product_sale_price == item.product_purchase_price\">${{item.product_purchase_price}}</span>\n\t\t\t\t\t\t  </p>\n\n\t\t\t\t\t\t  <ion-row>\n\t\t\t\t\t\t\t <ion-col no-padding  size=\"6\">\n\n\t\t\t\t\t\t\t\t  <ion-button color=\"greyc\" size=\"small\" fill=\"outline\" *ngIf=\"my_wish_products.indexOf(item.product_id) == -1\" (click)=\"addToWish(item.product_id)\" color=\"darkblue\" add-to-cart title=\"Wishlist\">\n\t\t\t\t\t\t\t\t\t <ion-icon name=\"heart\"></ion-icon>\n\t\t\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t\t\t  <ion-button color=\"greyc\" size=\"small\" fill=\"outline\" *ngIf=\"my_wish_products.indexOf(item.product_id) >= 0\" color=\"darkblue\" add-to-cart title=\"Added\">\n\t\t\t\t\t\t\t\t\t <ion-icon red_heart name=\"heart\"></ion-icon>\n\t\t\t\t\t\t\t\t  </ion-button>\n\n\t\t\t\t\t\t\t\t   <ion-button (click)=\"remove(item.cart_id,cm_index)\" color=\"greyc\" size=\"small\" fill=\"outline\">\n\t\t\t\t\t\t\t\t\t\t<ion-icon  name=\"trash\"></ion-icon>\n\t\t\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t\t  </ion-col>\n\t\t\t\t\t\t\t   <ion-col no-padding text-right align-item-center  add-quantity>\n\t\t\t\t\t\t\t\t  <ion-button (click)=\"minusQuantity(cm_index,item.cart_id)\" color=\"greyc\" size=\"small\">\n\t\t\t\t\t\t\t\t\t\t<ion-icon  name=\"remove\"></ion-icon>\n\t\t\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t\t\t   <span num-quantity>\n\t\t\t\t\t\t\t\t\t\t{{item.product_quantity}}\n\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t   <ion-button (click)=\"plusQuantity(cm_index,item.cart_id)\" color=\"greyc\" size=\"small\">\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"add\"></ion-icon>\n\t\t\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t   </ion-row>\n\t\t\t\t\t   </label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item lines=\"none\" *ngIf=\"cart == ''\">\n\t\t\t\t\t\tNo products added in cart.\n\t\t\t\t\t\t<ion-button routerLink=\"/products\" color=\"darkred\" float-left >Continue Shopping</ion-button>\n\t\t\t\t\t</ion-item>\n\t\t\t\t </div>\n</div>\n\n<!-- <app-recently-viewed></app-recently-viewed> -->\n<!-- <app-upsell-products></app-upsell-products> -->\n<!--  Cart Mobile Section Ends  -->\n</div>\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey);\n  /* Cart Section Start*/\n  /* Cart Section Ends*/\n  /* Cart Mobile Section Start*/\n  /* Cart Mobile Section Ends*/ }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-start: var(--ion-value-0);\n      --padding-end: var(--ion-value-0);\n      --padding-top:  var(--ion-value-0);\n      --padding-bottom:  var(--ion-value-0); } }\n  ion-content [cart-page] [best-sellers] {\n    margin-top: var(--ion-margin-20); }\n  ion-content [cart-page] [shopping-cart] {\n    margin-bottom: var(--ion-margin-20);\n    background-color: var(--ion-color-white);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08); }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] {\n      padding: var(--ion-padding-20); }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] ion-button {\n        --box-shadow:none;\n        --border-radius:0;\n        font-size: var(--ion-font-size-13); }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] ion-button:hover {\n          opacity: 0.8; }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] .cart-shopping-total {\n        background: var(--ion-color-greyf8); }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] .cart-shopping-total table {\n          margin: var(--ion-margin-0); }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] .cart-shopping-total table th {\n            font-family: var(--ion-font-family-2);\n            background-color: #fafafa;\n            text-align: left;\n            padding: var(--ion-padding-15);\n            border-bottom: 1px solid #eee; }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] .cart-shopping-total table th [cart-sub-total], ion-content [cart-page] [shopping-cart][cart-sidebar] .cart-shopping-total table th [cart-grand-total] {\n              color: var(--ion-color-darkblack3);\n              margin-bottom: var(--ion-margin-7); }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] .cart-shopping-total table th [cart-sub-total] [inner-left-md], ion-content [cart-page] [shopping-cart][cart-sidebar] .cart-shopping-total table th [cart-grand-total] [inner-left-md] {\n                padding-left: var(--ion-padding-0);\n                float: right; }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] .cart-shopping-total table th [cart-grand-total] {\n              color: #84b943 !important; }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] [estimate-ship-tax] th {\n        padding: var(--ion-padding-0) var(--ion-padding-0) var(--ion-padding-15) var(--ion-padding-0); }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] [estimate-ship-tax] td {\n        padding: var(--ion-padding-15) var(--ion-padding-0) var(--ion-padding-0); }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] [estimate-ship-tax] [estimate-title] {\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-14);\n        color: var(--ion-color-darkblack3);\n        margin-bottom: var(--ion-margin-2);\n        margin-top: var(--ion-margin-0);\n        display: block; }\n  ion-content [cart-page] [shopping-cart][cart-sidebar] [estimate-ship-tax] input {\n        font-family: var(--ion-font-family-2);\n        box-shadow: none;\n        font-size: var(--ion-font-size-13);\n        font-weight: normal;\n        color: var(--ion-color-darkgrey9);\n        height: auto;\n        padding: var(--ion-padding-10) var(--ion-padding-12);\n        border-radius: var(--ion-value-3); }\n  ion-content [cart-page] [shopping-cart] table tr th {\n      color: var(--ion-color-darkblack);\n      padding: var(--ion-padding-15);\n      font-family: var(--ion-font-family-2);\n      font-size: var(--ion-font-size-15);\n      border-bottom: 1px solid #e5e5e5; }\n  ion-content [cart-page] [shopping-cart] table tr td {\n      font-family: var(--ion-font-family-2);\n      padding: var(--ion-padding-15);\n      vertical-align: middle;\n      border: none; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-image] img {\n        width: 100px; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-image] [entry-thumbnail] {\n        display: block;\n        text-align: center; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-sub-total] [cart-sub-total-price], ion-content [cart-page] [shopping-cart] table tr td[cart-product-sub-total] [cart-grand-total-price], ion-content [cart-page] [shopping-cart] table tr td[cart-product-grand-total] [cart-sub-total-price], ion-content [cart-page] [shopping-cart] table tr td[cart-product-grand-total] [cart-grand-total-price] {\n        display: block;\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-16);\n        color: var(--ion-color-darkblack3);\n        text-transform: uppercase; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-name-info] [cart-product-description] {\n        margin-top: var(--ion-margin-0);\n        font-size: var(--ion-font-size-16); }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-name-info] [cart-product-description] a {\n          font-family: var(--ion-font-family-2);\n          font-size: var(--ion-font-size-16);\n          color: var(--ion-color-darkblack3);\n          text-decoration: none; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-name-info] [rating] {\n        display: flex;\n        margin-left: -6px; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-name-info] [rating] ion-icon {\n          color: var(--ion-color-yellow); }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-name-info] [reviews] {\n        font-size: var(--ion-font-size-11);\n        color: #aaa; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-name-info] [cart-product-info] {\n        margin-top: var(--ion-margin-10); }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-name-info] [cart-product-info] [product-color] {\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-12);\n        color: var(--ion-color-darkgrey);\n        text-transform: uppercase; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-name-info] [cart-product-info] [product-color] span {\n          color: #84b943;\n          text-transform: lowercase;\n          margin-left: var(--ion-margin-14); }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-quantity] [quant-input] {\n        display: inline-block;\n        height: var(--ion-wh-35);\n        position: relative;\n        width: var(--ion-wh-70); }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-quantity] [quant-input] [arrows] {\n          height: 100%;\n          position: absolute;\n          right: var(--ion-value-10);\n          top: var(--ion-value-0);\n          z-index: 2; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-quantity] [quant-input] [arrows] [arrow]:hover {\n            color: var(--ion-color-darkred);\n            cursor: pointer; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-quantity] [quant-input] [arrows] [arrow][minus] .icon {\n            top: -7px !important; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-quantity] [quant-input] [arrows] [arrow] .icon {\n            top: 5px;\n            position: relative; }\n  ion-content [cart-page] [shopping-cart] table tr td[cart-product-quantity] [quant-input] input {\n          background: var(--ion-color-white);\n          border: 1px solid #F2F2F2;\n          box-sizing: border-box;\n          font-size: var(--ion-font-size-15);\n          height: var(--ion-wh-35);\n          left: var(--ion-value-0);\n          padding: var(--ion-padding-0) var(--ion-padding-20) var(--ion-padding-0) var(--ion-padding-18);\n          position: absolute;\n          top: var(--ion-value-0);\n          width: var(--ion-wh-70);\n          z-index: 1; }\n  ion-content [cart-page] [shopping-cart] table tr td[remove-item] [action-icons] {\n        cursor: pointer;\n        background: #5cb85c;\n        text-align: center;\n        color: var(--ion-color-white);\n        width: var(--ion-value-30);\n        height: var(--ion-value-30);\n        display: inline-block;\n        line-height: var(--ion-value-30);\n        border-radius: 50%;\n        font-size: var(--ion-font-size-14);\n        padding: var(--ion-padding-0);\n        border: var(--ion-value-0); }\n  ion-content [cart-page] [shopping-cart] table tr td[remove-item] [action-icons]:hover {\n          opacity: 0.8; }\n  ion-content [cart-page] [shopping-cart] table tr td[remove-item] [action-icons][mr-10] {\n          margin-right: var(--ion-margin-10); }\n  ion-content [cart-page] [shopping-cart] table tr td[remove-item] [action-icons][default-icon] {\n          background: #fe3a90; }\n  ion-content [cart-page] [shopping-cart] table tr td[remove-item] [action-icons][del-icon] {\n          background: #d9534f; }\n  ion-content [cart-page] [shopping-cart] table tfoot [shopping-cart-btn] ion-button {\n      --border-radius:var( --ion-value-0);\n      --box-shadow:none;\n      font-size: var(--ion-font-size-13); }\n  ion-content [cart-page] [shopping-cart] table tfoot [shopping-cart-btn] ion-button:hover {\n        opacity: 0.8; }\n  ion-content [cart-mob] {\n    /* Coupon Code Start */\n    /* Coupon Code Ends */\n    /* Cart Subtotal Start */\n    /* Cart Subtotal Ends */ }\n  ion-content [cart-mob] [cart-items] ion-item {\n      --padding-start: var( --ion-padding-10);\n      --padding-end: var( --ion-padding-0);\n      --padding-top: var( --ion-padding-10);\n      --padding-bottom: var( --ion-padding-10);\n      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);\n      margin-bottom: var(--ion-margin-10); }\n  @media only screen and (max-width: 991px) {\n        ion-content [cart-mob] [cart-items] ion-item {\n          display: flex;\n          box-shadow: none;\n          border-bottom: 1px solid var(--ion-color-grey);\n          margin-bottom: var(--ion-margin-0); } }\n  ion-content [cart-mob] [cart-items] ion-item ion-thumbnail {\n        /*\n\t\t\t\t\t\twidth: var( --ion-value-90);\n\t\t\t\t\t   height: var( --ion-value-90);\n\t\t\t\t\t  margin-top:var(--ion-margin-0);\n\t\t\t\t\t   margin-bottom:var(--ion-margin-0);*/ }\n  @media only screen and (max-width: 991px) {\n          ion-content [cart-mob] [cart-items] ion-item ion-thumbnail {\n            height: 100%; } }\n  ion-content [cart-mob] [cart-items] ion-item label {\n        width: 100%; }\n  ion-content [cart-mob] [cart-items] ion-item label h3 {\n          margin-top: var(--ion-margin-0);\n          font-family: var(--ion-font-family-2);\n          font-size: var(--ion-font-size-14);\n          font-weight: 700;\n          margin-bottom: var(--ion-margin-3); }\n  @media only screen and (max-width: 576px) {\n            ion-content [cart-mob] [cart-items] ion-item label h3 {\n              font-size: var(--ion-font-size-12); } }\n  ion-content [cart-mob] [cart-items] ion-item label p {\n          font-family: var(--ion-font-family-2);\n          font-size: var(--ion-font-size-14);\n          font-weight: normal;\n          color: var(--ion-color-darkred);\n          margin-bottom: var(--ion-margin-3); }\n  @media only screen and (max-width: 576px) {\n            ion-content [cart-mob] [cart-items] ion-item label p {\n              font-size: var(--ion-font-size-12); } }\n  ion-content [cart-mob] [cart-items] ion-item label ion-button {\n          --padding-start: var( --ion-padding-4);\n          --padding-start: var( --ion-padding-4);\n          --padding-end: var( --ion-padding-4);\n          height: var(--ion-value-22);\n          font-size: var(--ion-font-size-12);\n          --border-radius:var( --ion-value-0);\n          --border-width:1px;\n          --box-shadow: none; }\n  ion-content [cart-mob] [cart-items] ion-item label [add-quantity] [num-quantity] {\n          position: relative;\n          top: var(--ion-value-6);\n          font-weight: normal;\n          margin: var(--ion-margin-0); }\n  ion-content [cart-mob] [cart-coupon] ion-input {\n      background: var(--ion-color-white); }\n  ion-content [cart-mob] [cart-coupon] ion-button {\n      --border-radius:var(--ion-value-0);\n      margin: var(--ion-margin-0);\n      height: var(--ion-value-40);\n      --box-shadow: none; }\n  ion-content [cart-mob] [cart-subtotal] ion-card {\n      background: var(--ion-color-white);\n      --border-radius:var(--ion-value-0);\n      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);\n      margin-bottom: var(--ion-margin-10); }\n  ion-content [cart-mob] [cart-subtotal] ion-card ion-button {\n        --box-shadow:none;\n        --border-radius:var(--ion-value-4); }\n  ion-content [cart-mob] [cart-subtotal] ion-card h2 {\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-14);\n        color: var(--ion-color-black);\n        margin-top: var(--ion-margin-10); }\n  ion-content [cart-mob] [cart-subtotal] ion-card h2 [price] {\n          color: var(--ion-color-darkred);\n          font-weight: 700; }\n  ion-content [cart-mob] [cart-subtotal] ion-card p {\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-14);\n        color: var(--ion-color-black);\n        margin-top: var(--ion-margin-10); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQVVBLGtDQUFhO0VBQ2Isc0JBQUE7RUFxUkEscUJBQUE7RUFFQSw2QkFBQTtFQXVJQSw0QkFBQSxFQUE2QjtFQXZhN0I7SUFGQTtNQUlJLG1DQUFnQjtNQUNoQixpQ0FBYztNQUNkLGtDQUFjO01BQ2QscUNBQWlCLEVBQUEsRUFtYXBCO0VBMWFEO0lBZVEsZ0NBQWdDLEVBQUE7RUFmeEM7SUFrQmEsbUNBQW1DO0lBQzVDLHdDQUF3QztJQUN4QywyQ0FBdUMsRUFBQTtFQXBCM0M7TUF1QmEsOEJBQStCLEVBQUE7RUF2QjVDO1FBMEJvQixpQkFBYTtRQUM1QixpQkFBZ0I7UUFDaEIsa0NBQWtDLEVBQUE7RUE1QnZDO1VBK0JzQixZQUFZLEVBQUE7RUEvQmxDO1FBb0NRLG1DQUFvQyxFQUFBO0VBcEM1QztVQXNDTSwyQkFBMEIsRUFBQTtFQXRDaEM7WUF3Q1kscUNBQW9DO1lBQ3BDLHlCQUF5QjtZQUM5QixnQkFBZ0I7WUFDaEIsOEJBQStCO1lBQy9CLDZCQUE2QixFQUFBO0VBNUNwQztjQStDWSxrQ0FBa0M7Y0FDVixrQ0FBbUMsRUFBQTtFQWhEdkU7Z0JBa0RVLGtDQUFtQztnQkFDbkMsWUFBWSxFQUFBO0VBbkR0QjtjQXdEUSx5QkFBd0IsRUFBQTtFQXhEaEM7UUFpRVEsNkZBQW9HLEVBQUE7RUFqRTVHO1FBcUVRLHdFQUErRSxFQUFBO0VBckV2RjtRQXlFTyxxQ0FBb0M7UUFDcEMsa0NBQWtDO1FBQ2xDLGtDQUFrQztRQUNsQyxrQ0FBa0M7UUFDbEMsK0JBQStCO1FBQy9CLGNBQWMsRUFBQTtFQTlFckI7UUFrRndCLHFDQUFvQztRQUN0RCxnQkFBZTtRQUNHLGtDQUFrQztRQUNwRCxtQkFBbUI7UUFDbkIsaUNBQWlDO1FBQ2pDLFlBQVk7UUFDWixvREFBb0Q7UUFDcEQsaUNBQWlDLEVBQUE7RUF6RnZDO01Bb0dTLGlDQUFpQztNQUNwQyw4QkFBOEI7TUFDOUIscUNBQXFDO01BQ3JDLGtDQUFrQztNQUNoQixnQ0FBZ0MsRUFBQTtFQXhHeEQ7TUEyR1MscUNBQXFDO01BQ3JDLDhCQUE4QjtNQUNqQyxzQkFBcUI7TUFDckIsWUFBWSxFQUFBO0VBOUdsQjtRQWtIUyxZQUFZLEVBQUE7RUFsSHJCO1FBcUhRLGNBQWM7UUFDZCxrQkFBa0IsRUFBQTtFQXRIMUI7UUE4SGlCLGNBQWM7UUFDcEIscUNBQXFDO1FBQ3JDLGtDQUFrQztRQUNsQyxrQ0FBa0M7UUFDbEMseUJBQXlCLEVBQUE7RUFsSXBDO1FBeUlZLCtCQUErQjtRQUMvQixrQ0FBbUMsRUFBQTtFQTFJL0M7VUE4SVMscUNBQXFDO1VBQ2xDLGtDQUFtQztVQUN0QyxrQ0FBaUM7VUFDakMscUJBQW9CLEVBQUE7RUFqSjdCO1FBcUpjLGFBQWE7UUFDSyxpQkFBaUIsRUFBQTtFQXRKakQ7VUF3SlMsOEJBQThCLEVBQUE7RUF4SnZDO1FBNEppQyxrQ0FBbUM7UUFDbEMsV0FBVyxFQUFBO0VBN0o3QztRQWdLZ0MsZ0NBQWdDLEVBQUE7RUFoS2hFO1FBc0tnQixxQ0FBb0M7UUFDMUMsa0NBQWtDO1FBQ2xDLGdDQUFnQztRQUNoQyx5QkFBeUIsRUFBQTtFQXpLbkM7VUE0S2EsY0FBYztVQUNkLHlCQUF5QjtVQUNLLGlDQUFpQyxFQUFBO0VBOUs1RTtRQXVMb0MscUJBQXFCO1FBQ2hELHdCQUEwQjtRQUMxQixrQkFBa0I7UUFDbEIsdUJBQXdCLEVBQUE7RUExTGpDO1VBNkxVLFlBQVk7VUFDWixrQkFBa0I7VUFDbEIsMEJBQTRCO1VBQzVCLHVCQUF3QjtVQUN4QixVQUFVLEVBQUE7RUFqTXBCO1lBc01ZLCtCQUE4QjtZQUM5QixlQUFjLEVBQUE7RUF2TTFCO1lBNk1rQixvQkFBbUIsRUFBQTtFQTdNckM7WUFrTmEsUUFBUTtZQUNSLGtCQUFpQixFQUFBO0VBbk45QjtVQXlOUyxrQ0FBaUM7VUFDakMseUJBQXlCO1VBQ3pCLHNCQUFzQjtVQUN0QixrQ0FBa0M7VUFDbEMsd0JBQTBCO1VBQzFCLHdCQUF5QjtVQUN6Qiw4RkFBOEY7VUFDOUYsa0JBQWtCO1VBQ2xCLHVCQUF3QjtVQUN4Qix1QkFBeUI7VUFDekIsVUFBVSxFQUFBO0VBbk9uQjtRQTZPTyxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQiw2QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLDJCQUEyQjtRQUMzQixxQkFBcUI7UUFDckIsZ0NBQWlDO1FBQ2pDLGtCQUFrQjtRQUNsQixrQ0FBbUM7UUFDbkMsNkJBQTZCO1FBQzdCLDBCQUEwQixFQUFBO0VBeFBqQztVQTJQUyxZQUFZLEVBQUE7RUEzUHJCO1VBK1BTLGtDQUFpQyxFQUFBO0VBL1AxQztVQWtRbUMsbUJBQW1CLEVBQUE7RUFsUXREO1VBcVFpQyxtQkFBbUIsRUFBQTtFQXJRcEQ7TUFpUkssbUNBQWdCO01BQ2hCLGlCQUFhO01BQ1gsa0NBQWtDLEVBQUE7RUFuUnpDO1FBc1JzQixZQUFZLEVBQUE7RUF0UmxDO0lBb1hFLHNCQUFBO0lBZ0JBLHFCQUFBO0lBQ0Esd0JBQUE7SUFrQ0EsdUJBQUEsRUFBd0I7RUF2YTFCO01Bd1NLLHVDQUFnQjtNQUNoQixvQ0FBYztNQUNkLHFDQUFjO01BQ2Qsd0NBQWlCO01BQ2pCLDJDQUEyQztNQUMxQyxtQ0FBcUMsRUFBQTtFQUNyQztRQTlTTjtVQWdUVyxhQUFhO1VBQ2hCLGdCQUFlO1VBQ2YsOENBQTZDO1VBQzdDLGtDQUFvQyxFQUFBLEVBK0RyQztFQWxYUDtRQXVUSzs7OzsyQ0NySHNDLEVEeUhDO0VBQ3BDO1VBNVRSO1lBOFRXLFlBQVksRUFBQSxFQUVsQjtFQWhVTDtRQWtVUSxXQUFXLEVBQUE7RUFsVW5CO1VBcVVNLCtCQUE4QjtVQUM5QixxQ0FBb0M7VUFDcEMsa0NBQWlDO1VBQ2pDLGdCQUFlO1VBQ2Qsa0NBQWtDLEVBQUE7RUFDaEM7WUExVVQ7Y0E0VU8sa0NBQWlDLEVBQUEsRUFFbEM7RUE5VU47VUFpVk8scUNBQW9DO1VBQ3BDLGtDQUFpQztVQUNqQyxtQkFBa0I7VUFDbEIsK0JBQThCO1VBQzlCLGtDQUFrQyxFQUFBO0VBQ2hDO1lBdFZUO2NBd1ZPLGtDQUFpQyxFQUFBLEVBR2xDO0VBM1ZOO1VBOFZRLHNDQUFnQjtVQUNoQixzQ0FBZ0I7VUFDaEIsb0NBQWM7VUFDZCwyQkFBNEI7VUFDNUIsa0NBQW9DO1VBQ3BDLG1DQUFnQjtVQUNoQixrQkFBZTtVQUNYLGtCQUFhLEVBQUE7RUFyV3pCO1VBMFdPLGtCQUFrQjtVQUNsQix1QkFBd0I7VUFDeEIsbUJBQW1CO1VBQ25CLDJCQUE2QixFQUFBO0VBN1dwQztNQXlYSyxrQ0FBaUMsRUFBQTtFQXpYdEM7TUE4WEksa0NBQWdCO01BQ2hCLDJCQUEwQjtNQUMxQiwyQkFBNkI7TUFDekIsa0JBQWEsRUFBQTtFQWpZckI7TUEwWVEsa0NBQWlDO01BQ3BDLGtDQUFnQjtNQUNoQiwyQ0FBMkM7TUFDM0MsbUNBQW1DLEVBQUE7RUE3WXhDO1FBZ1pLLGlCQUFhO1FBQU0sa0NBQWdCLEVBQUE7RUFoWnhDO1FBb1pPLHFDQUFvQztRQUNwQyxrQ0FBaUM7UUFDakMsNkJBQTRCO1FBQzVCLGdDQUErQixFQUFBO0VBdlp0QztVQTBaTywrQkFBOEI7VUFDOUIsZ0JBQWUsRUFBQTtFQTNadEI7UUFnYU8scUNBQW9DO1FBQ3BDLGtDQUFpQztRQUNqQyw2QkFBNEI7UUFDNUIsZ0NBQStCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnRcbnsgIFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxue1xuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXZhbHVlLTApO1xuICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi12YWx1ZS0wKTtcbiAgICAtLXBhZGRpbmctdG9wOiAgdmFyKC0taW9uLXZhbHVlLTApO1xuICAgIC0tcGFkZGluZy1ib3R0b206ICB2YXIoLS1pb24tdmFsdWUtMCk7XG5cdFxufVxuLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5KTtcbi8qIENhcnQgU2VjdGlvbiBTdGFydCovXG4gICBbY2FydC1wYWdlXVxuICAgeyBbIGJlc3Qtc2VsbGVyc11cblx0ICAge1xuXHRcdCAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMjApO1xuXHQgICB9XG4gICAgICBbc2hvcHBpbmctY2FydF1cblx0ICB7ICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0yMCk7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsLjA4KTtcblx0XHRcdFx0JlsgY2FydC1zaWRlYmFyXVxuXHRcdFx0XHR7XG5cdCAgICAgICAgICAgIHBhZGRpbmc6IHZhciggLS1pb24tcGFkZGluZy0yMCk7XG5cdFx0ICAgICBpb24tYnV0dG9uXG5cdFx0ICAgXHRcdHtcbiAgICAgICAgICAgICAgICAgICAgLS1ib3gtc2hhZG93Om5vbmU7XG5cdFx0XHRcdFx0LS1ib3JkZXItcmFkaXVzOjA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcblx0XHRcdFx0XHQmOmhvdmVyXG5cdFx0XHRcdFx0e1xuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHR9XHRcblx0XHRcdFx0LmNhcnQtc2hvcHBpbmctdG90YWxcblx0XHRcdFx0e1xuXHRcdFx0XHQgICAgYmFja2dyb3VuZDogdmFyKCAtLWlvbi1jb2xvci1ncmV5ZjgpO1xuXHRcdFx0XHRcdHRhYmxlXG5cdFx0XHRcdFx0e21hcmdpbjp2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdCAgdGhcblx0XHRcdFx0XHQgIHsgICAgZm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdFx0XHRcdCAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoIC0taW9uLXBhZGRpbmctMTUpO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcblx0XHRcdFx0XHRcdFx0W2NhcnQtc3ViLXRvdGFsXSAgLCBcdFtjYXJ0LWdyYW5kLXRvdGFsXVxuXHRcdFx0XHRcdFx0XHR7ICAgIFxuXHRcdFx0XHRcdFx0XHRcdCAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjazMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogIHZhcigtLWlvbi1tYXJnaW4tNyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRbaW5uZXItbGVmdC1tZF0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IHZhciggLS1pb24tcGFkZGluZy0wKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFtjYXJ0LWdyYW5kLXRvdGFsXVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICM4NGI5NDMhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0ICAgW2VzdGltYXRlLXNoaXAtdGF4XVxuXHRcdFx0ICAgeyAgdGhcblx0XHRcdFx0XHQgIHtcblx0XHRcdFx0XHRcdCBcdHBhZGRpbmc6IHZhciggLS1pb24tcGFkZGluZy0wKSAgdmFyKCAtLWlvbi1wYWRkaW5nLTApICB2YXIoIC0taW9uLXBhZGRpbmctMTUpICB2YXIoIC0taW9uLXBhZGRpbmctMCk7IFxuXHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdCAgdGRcblx0XHRcdFx0XHQgIHtcblx0XHRcdFx0XHRcdCAgcGFkZGluZzogICB2YXIoIC0taW9uLXBhZGRpbmctMTUpIHZhciggLS1pb24tcGFkZGluZy0wKSAgIHZhciggLS1pb24tcGFkZGluZy0wKTsgXG5cdFx0XHRcdFx0ICB9XG5cdFx0XHRcdCAgICAgXHRbZXN0aW1hdGUtdGl0bGVdXG5cdFx0XHQgICAgICAgICAgICB7IFxuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrMyk7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMik7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdCAgIH0gXG5cdFx0XHRcdGlucHV0XG5cdFx0XHRcdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JleTkpO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTApIHZhcigtLWlvbi1wYWRkaW5nLTEyKTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS0zKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHR9XHRcbiAgICAgICAgICAgICAgIFx0XHRcdFxuXHRcdFx0ICAgIH1cblx0XHR9XHRcblx0ICAgICB0YWJsZVxuXHRcdCB7XG5cdFx0ICAgdHJcblx0ICAgICAgICB7XG5cdFx0XHQgICB0aFxuXHRcdFx0ICAge1x0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7IFx0ICAgICAgIFxuXHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTUpO1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcblx0XHRcdCAgIH1cblx0XHRcdCAgIHRkXG5cdFx0XHQgICB7ICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdFx0ICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTUpO1xuXHRcdFx0XHQgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcblx0XHRcdFx0ICBib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0JltjYXJ0LWltYWdlXVxuXHRcdFx0XHRcdCAge1xuXHRcdFx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRcdCAgIHdpZHRoOiAxMDBweDtcblx0XHRcdFx0XHRcdCB9XG5cdFx0XHRcdFx0XHQgW2VudHJ5LXRodW1ibmFpbF0ge1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdCAgJltjYXJ0LXByb2R1Y3Qtc3ViLXRvdGFsXSAsICZbY2FydC1wcm9kdWN0LWdyYW5kLXRvdGFsXVxuXHRcdFx0XHRcdCAge1xuXHRcdFx0XHRcdFx0ICAgICBbY2FydC1zdWItdG90YWwtcHJpY2VdICAsIFtjYXJ0LWdyYW5kLXRvdGFsLXByaWNlXVxuXHRcdFx0XHRcdFx0XHQge1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQgfVxuXHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdCAgJltjYXJ0LXByb2R1Y3QtbmFtZS1pbmZvXVxuXHRcdFx0XHRcdCAge1xuXHRcdFx0XHRcdCAgICAgIFtjYXJ0LXByb2R1Y3QtZGVzY3JpcHRpb25dXG5cdFx0XHRcdFx0XHQgIHsgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdFx0ICAgICAgZm9udC1zaXplOiAgdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XG5cdFx0XHRcdFx0XHQgICAgYVxuXHRcdFx0XHRcdFx0XHR7IFxuXHRcdFx0XHRcdFx0XHQgICAgIFxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0XHRcdFx0XHRcdFx0XHQgICAgZm9udC1zaXplOiAgdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrMyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0XHQgIFtyYXRpbmddXG5cdFx0XHRcdFx0XHQgIHsgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xuXHRcdFx0XHRcdFx0XHQgIGlvbi1pY29uIHtcblx0XHRcdFx0XHRcdFx0XHQgY29sb3I6IHZhcigtLWlvbi1jb2xvci15ZWxsb3cpO1xuXHRcdFx0XHRcdFx0XHQgIH1cdFx0XHRcdFx0XHRcdCBcblx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdFx0ICAgW3Jldmlld3NdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogIHZhcigtLWlvbi1mb250LXNpemUtMTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYWFhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0XHQgIFtjYXJ0LXByb2R1Y3QtaW5mb10ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdFx0XHRcdCAgW2NhcnQtcHJvZHVjdC1pbmZvXVxuXHRcdFx0XHRcdFx0XHQgIHtcblx0XHRcdFx0XHRcdFx0ICAgICBbcHJvZHVjdC1jb2xvcl1cblx0XHRcdFx0XHRcdFx0XHQge1xuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmV5KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3BhblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGNvbG9yOiAjODRiOTQzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLTE0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdCB9XG5cdFx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdCAgJltjYXJ0LXByb2R1Y3QtcXVhbnRpdHldXG5cdFx0XHRcdFx0ICB7IFxuXHRcdFx0XHRcdFx0ICBbcXVhbnQtaW5wdXRdXG5cdFx0XHRcdFx0XHQgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6ICB2YXIoIC0taW9uLXdoLTM1KTtcblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiB2YXIoIC0taW9uLXdoLTcwKTtcblx0XHRcdFx0XHRcdFx0XHRcdFthcnJvd3NdXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyaWdodDogIHZhciggLS1pb24tdmFsdWUtMTApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0b3A6IHZhciggLS1pb24tdmFsdWUtMCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHotaW5kZXg6IDI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFthcnJvd11cblx0XHRcdFx0XHRcdFx0XHRcdFx0eyAgIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCY6aG92ZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJzb3I6cG9pbnRlcjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAmW21pbnVzXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHsgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgLmljb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgdG9wOiAtN3B4IWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IH1cdCBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lmljb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgdG9wOiA1cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgcG9zaXRpb246cmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQgICAgIH1cblx0XHRcdFx0XHRcdFx0XHQgICAgaW5wdXQge1xuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI0YyRjJGMjtcblx0XHRcdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAgdmFyKCAtLWlvbi13aC0zNSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRsZWZ0OiB2YXIoIC0taW9uLXZhbHVlLTApO1xuXHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCkgdmFyKC0taW9uLXBhZGRpbmctMjApIHZhcigtLWlvbi1wYWRkaW5nLTApIHZhcigtLWlvbi1wYWRkaW5nLTE4KTtcblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0XHRcdHRvcDogdmFyKCAtLWlvbi12YWx1ZS0wKTtcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAgdmFyKCAtLWlvbi13aC03MCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0XHRcdFx0XHRcdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVx0XHRcdFx0XHRcdCAgXG5cdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0ICAmW3JlbW92ZS1pdGVtXVxuXHRcdFx0XHRcdCAge1xuXHRcdFx0XHRcdCAgICBcblx0XHRcdFx0XHQgXG5cdFx0XHRcdFx0ICAgW2FjdGlvbi1pY29uc11cbiAgIFx0XHRcdFx0XHQgICAgIHtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjNWNiODVjO1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSkgO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogdmFyKC0taW9uLXZhbHVlLTMwKTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMzApO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAgdmFyKC0taW9uLXZhbHVlLTMwKTtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6ICB2YXIoLS1pb24tZm9udC1zaXplLTE0KSA7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuXHRcdFx0XHRcdFx0XHRib3JkZXI6IHZhcigtLWlvbi12YWx1ZS0wKTtcblx0XHRcdFx0XHRcdFx0Jjpob3ZlclxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdCAgb3BhY2l0eTogMC44O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCZbbXItMTBdXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ICBtYXJnaW4tcmlnaHQ6dmFyKC0taW9uLW1hcmdpbi0xMClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQmW2RlZmF1bHQtaWNvbl0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmUzYTkwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0XHRcdFx0ICAgJltkZWwtaWNvbl0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q5NTM0ZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdFx0XHQgfVx0XG5cdFx0XHQgICAgICAgICB9XG5cdFx0XHRcdCB9XG5cdFx0XHR9XG5cdFx0XHR0Zm9vdFxuXHRcdFx0eyAgXG5cdFx0XHRcdFtzaG9wcGluZy1jYXJ0LWJ0bl1cblx0XHRcdFx0e1xuXHRcdFx0XHQgIGlvbi1idXR0b25cblx0XHRcdFx0ICB7XG5cdFx0XHRcdFx0LS1ib3JkZXItcmFkaXVzOnZhciggLS1pb24tdmFsdWUtMCk7XG5cdFx0XHRcdFx0LS1ib3gtc2hhZG93Om5vbmU7XG5cdFx0XHRcdFx0ICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xuXHRcdFx0XHRcdCY6aG92ZXJcblx0XHRcdFx0XHR7XG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdCAgfVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0IFxuXHRcdCB9XG5cdCAgfVxuICAgXG4gICB9IFxuLyogQ2FydCBTZWN0aW9uIEVuZHMqLyAgIFxuXG4vKiBDYXJ0IE1vYmlsZSBTZWN0aW9uIFN0YXJ0Ki9cbltjYXJ0LW1vYl1cbntcblx0XHRbY2FydC1pdGVtc11cblx0XHR7XG5cdFx0XHRpb24taXRlbXtcblx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IHZhciggLS1pb24tcGFkZGluZy0xMCk7XG5cdFx0XHRcdFx0LS1wYWRkaW5nLWVuZDogdmFyKCAtLWlvbi1wYWRkaW5nLTApO1xuXHRcdFx0XHRcdC0tcGFkZGluZy10b3A6IHZhciggLS1pb24tcGFkZGluZy0xMCk7XG5cdFx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogdmFyKCAtLWlvbi1wYWRkaW5nLTEwKTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogIHZhciggLS1pb24tbWFyZ2luLTEwKTtcblx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzpub25lO1xuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5KTtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAgdmFyKCAtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdGlvbi10aHVtYm5haWxcblx0XHRcdFx0eyBcblx0XHRcdFx0IC8qXG5cdFx0XHRcdFx0XHR3aWR0aDogdmFyKCAtLWlvbi12YWx1ZS05MCk7XG5cdFx0XHRcdFx0ICAgaGVpZ2h0OiB2YXIoIC0taW9uLXZhbHVlLTkwKTtcblx0XHRcdFx0XHQgIG1hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdFx0XHQgICBtYXJnaW4tYm90dG9tOnZhcigtLWlvbi1tYXJnaW4tMCk7Ki9cblx0XHRcdFx0XHQgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdCAgICBoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bGFiZWxcblx0XHRcdFx0eyAgIHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGgzXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6NzAwO1xuXHRcdFx0XHRcdFx0IG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMyk7XG5cdFx0XHRcdFx0XHQgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXG5cdFx0XHRcdFx0XHQge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IFxuXHRcdFx0XHRcdFx0IH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHRcdFx0XHQgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdFx0XHRcdFx0IGZvbnQtd2VpZ2h0Om5vcm1hbDtcblx0XHRcdFx0XHRcdCBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG5cdFx0XHRcdFx0XHQgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0zKTtcblx0XHRcdFx0XHRcdCAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcblx0XHRcdFx0XHRcdCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgXG5cdFx0XHRcdFx0XHQgfVxuXHRcdFx0XHRcdFx0IFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpb24tYnV0dG9uXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdC0tcGFkZGluZy1zdGFydDogdmFyKCAtLWlvbi1wYWRkaW5nLTQpO1xuXHRcdFx0XHRcdFx0XHRcdC0tcGFkZGluZy1zdGFydDogdmFyKCAtLWlvbi1wYWRkaW5nLTQpO1xuXHRcdFx0XHRcdFx0XHRcdC0tcGFkZGluZy1lbmQ6IHZhciggLS1pb24tcGFkZGluZy00KTtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IHZhciggLS1pb24tdmFsdWUtMjIpO1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogIHZhciggLS1pb24tZm9udC1zaXplLTEyKTtcblx0XHRcdFx0XHRcdFx0XHQtLWJvcmRlci1yYWRpdXM6dmFyKCAtLWlvbi12YWx1ZS0wKTtcblx0XHRcdFx0XHRcdFx0XHQtLWJvcmRlci13aWR0aDoxcHg7XG5cdFx0XHRcdFx0XHRcdFx0ICAgIC0tYm94LXNoYWRvdzogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0W2FkZC1xdWFudGl0eV1cblx0XHRcdFx0XHR7ICAgIFtudW0tcXVhbnRpdHldXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0dG9wOiB2YXIoIC0taW9uLXZhbHVlLTYpO1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46ICB2YXIoIC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdFx0XHRcdH0gICAgXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0ICAgfVxuXHRcdH1cblx0XHQvKiBDb3Vwb24gQ29kZSBTdGFydCAqL1xuXHRcdFtjYXJ0LWNvdXBvbl1cblx0XHR7XG5cdFx0IGlvbi1pbnB1dFxuXHRcdCAge1xuXHRcdFx0ICBiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHQgIFxuXHRcdCAgfVxuXHRcdCAgaW9uLWJ1dHRvblxuXHRcdCAge1xuXHRcdFx0IC0tYm9yZGVyLXJhZGl1czp2YXIoLS1pb24tdmFsdWUtMCk7XG5cdFx0XHQgbWFyZ2luOnZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHQgaGVpZ2h0OiAgdmFyKCAtLWlvbi12YWx1ZS00MCk7XG5cdFx0XHQgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcblx0XHQgIH1cblx0XHR9XG5cdFx0LyogQ291cG9uIENvZGUgRW5kcyAqL1xuXHRcdC8qIENhcnQgU3VidG90YWwgU3RhcnQgKi9cblx0XHRbY2FydC1zdWJ0b3RhbF1cblx0XHR7XG5cdFx0XHQgaW9uLWNhcmRcblx0XHRcdCB7XG5cdFx0XHRcdCAgICBiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRcdFx0LS1ib3JkZXItcmFkaXVzOnZhcigtLWlvbi12YWx1ZS0wKTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApO1x0XG5cdFx0XHRcdFx0aW9uLWJ1dHRvbiBcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0LS1ib3gtc2hhZG93Om5vbmU7XHQtLWJvcmRlci1yYWRpdXM6dmFyKC0taW9uLXZhbHVlLTQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRoMlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHRcdFx0XHQgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpOyBcblx0XHRcdFx0XHRcdCBjb2xvcjp2YXIoLS1pb24tY29sb3ItYmxhY2spO1xuXHRcdFx0XHRcdFx0IG1hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbi0xMCk7XG5cdFx0XHRcdFx0XHRbcHJpY2VdXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuXHRcdFx0XHRcdFx0IGZvbnQtd2VpZ2h0OjcwMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XHRcblx0XHRcdFx0XHRwXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0IGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0XHRcdFx0XHRcdCBmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7IFxuXHRcdFx0XHRcdFx0IGNvbG9yOnZhcigtLWlvbi1jb2xvci1ibGFjayk7XG5cdFx0XHRcdFx0XHQgbWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLTEwKTtcblx0XHRcdFx0XHR9XHRcblx0XHRcdCB9XG5cdFx0fVxuXHRcdC8qIENhcnQgU3VidG90YWwgRW5kcyAqL1xufVxuLyogQ2FydCBNb2JpbGUgU2VjdGlvbiBFbmRzKi9cbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZ3JleSk7XG4gIC8qIENhcnQgU2VjdGlvbiBTdGFydCovXG4gIC8qIENhcnQgU2VjdGlvbiBFbmRzKi9cbiAgLyogQ2FydCBNb2JpbGUgU2VjdGlvbiBTdGFydCovXG4gIC8qIENhcnQgTW9iaWxlIFNlY3Rpb24gRW5kcyovIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXZhbHVlLTApO1xuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXZhbHVlLTApO1xuICAgICAgLS1wYWRkaW5nLXRvcDogIHZhcigtLWlvbi12YWx1ZS0wKTtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206ICB2YXIoLS1pb24tdmFsdWUtMCk7IH0gfVxuICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbYmVzdC1zZWxsZXJzXSB7XG4gICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0yMCk7IH1cbiAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTIwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7IH1cbiAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF1bY2FydC1zaWRlYmFyXSB7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0yMCk7IH1cbiAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XVtjYXJ0LXNpZGViYXJdIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOjA7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdW2NhcnQtc2lkZWJhcl0gaW9uLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC44OyB9XG4gICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF1bY2FydC1zaWRlYmFyXSAuY2FydC1zaG9wcGluZy10b3RhbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmV5ZjgpOyB9XG4gICAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XVtjYXJ0LXNpZGViYXJdIC5jYXJ0LXNob3BwaW5nLXRvdGFsIHRhYmxlIHtcbiAgICAgICAgICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF1bY2FydC1zaWRlYmFyXSAuY2FydC1zaG9wcGluZy10b3RhbCB0YWJsZSB0aCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSk7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdW2NhcnQtc2lkZWJhcl0gLmNhcnQtc2hvcHBpbmctdG90YWwgdGFibGUgdGggW2NhcnQtc3ViLXRvdGFsXSwgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdW2NhcnQtc2lkZWJhcl0gLmNhcnQtc2hvcHBpbmctdG90YWwgdGFibGUgdGggW2NhcnQtZ3JhbmQtdG90YWxdIHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi03KTsgfVxuICAgICAgICAgICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF1bY2FydC1zaWRlYmFyXSAuY2FydC1zaG9wcGluZy10b3RhbCB0YWJsZSB0aCBbY2FydC1zdWItdG90YWxdIFtpbm5lci1sZWZ0LW1kXSwgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdW2NhcnQtc2lkZWJhcl0gLmNhcnQtc2hvcHBpbmctdG90YWwgdGFibGUgdGggW2NhcnQtZ3JhbmQtdG90YWxdIFtpbm5lci1sZWZ0LW1kXSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZy0wKTtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XVtjYXJ0LXNpZGViYXJdIC5jYXJ0LXNob3BwaW5nLXRvdGFsIHRhYmxlIHRoIFtjYXJ0LWdyYW5kLXRvdGFsXSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjODRiOTQzICFpbXBvcnRhbnQ7IH1cbiAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XVtjYXJ0LXNpZGViYXJdIFtlc3RpbWF0ZS1zaGlwLXRheF0gdGgge1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMCk7IH1cbiAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XVtjYXJ0LXNpZGViYXJdIFtlc3RpbWF0ZS1zaGlwLXRheF0gdGQge1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMCkgdmFyKC0taW9uLXBhZGRpbmctMCk7IH1cbiAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XVtjYXJ0LXNpZGViYXJdIFtlc3RpbWF0ZS1zaGlwLXRheF0gW2VzdGltYXRlLXRpdGxlXSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrMyk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMik7XG4gICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF1bY2FydC1zaWRlYmFyXSBbZXN0aW1hdGUtc2hpcC10YXhdIGlucHV0IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JleTkpO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEwKSB2YXIoLS1pb24tcGFkZGluZy0xMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS0zKTsgfVxuICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XSB0YWJsZSB0ciB0aCB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSk7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE1KTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1OyB9XG4gICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkIHtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSk7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgYm9yZGVyOiBub25lOyB9XG4gICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbY2FydC1pbWFnZV0gaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4OyB9XG4gICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbY2FydC1pbWFnZV0gW2VudHJ5LXRodW1ibmFpbF0ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbY2FydC1wcm9kdWN0LXN1Yi10b3RhbF0gW2NhcnQtc3ViLXRvdGFsLXByaWNlXSwgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW2NhcnQtcHJvZHVjdC1zdWItdG90YWxdIFtjYXJ0LWdyYW5kLXRvdGFsLXByaWNlXSwgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW2NhcnQtcHJvZHVjdC1ncmFuZC10b3RhbF0gW2NhcnQtc3ViLXRvdGFsLXByaWNlXSwgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW2NhcnQtcHJvZHVjdC1ncmFuZC10b3RhbF0gW2NhcnQtZ3JhbmQtdG90YWwtcHJpY2VdIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrMyk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XSB0YWJsZSB0ciB0ZFtjYXJ0LXByb2R1Y3QtbmFtZS1pbmZvXSBbY2FydC1wcm9kdWN0LWRlc2NyaXB0aW9uXSB7XG4gICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW2NhcnQtcHJvZHVjdC1uYW1lLWluZm9dIFtjYXJ0LXByb2R1Y3QtZGVzY3JpcHRpb25dIGEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjazMpO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW2NhcnQtcHJvZHVjdC1uYW1lLWluZm9dIFtyYXRpbmddIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC02cHg7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW2NhcnQtcHJvZHVjdC1uYW1lLWluZm9dIFtyYXRpbmddIGlvbi1pY29uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXllbGxvdyk7IH1cbiAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XSB0YWJsZSB0ciB0ZFtjYXJ0LXByb2R1Y3QtbmFtZS1pbmZvXSBbcmV2aWV3c10ge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTEpO1xuICAgICAgICBjb2xvcjogI2FhYTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW2NhcnQtcHJvZHVjdC1uYW1lLWluZm9dIFtjYXJ0LXByb2R1Y3QtaW5mb10ge1xuICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTEwKTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW2NhcnQtcHJvZHVjdC1uYW1lLWluZm9dIFtjYXJ0LXByb2R1Y3QtaW5mb10gW3Byb2R1Y3QtY29sb3JdIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JleSk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW2NhcnQtcHJvZHVjdC1uYW1lLWluZm9dIFtjYXJ0LXByb2R1Y3QtaW5mb10gW3Byb2R1Y3QtY29sb3JdIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjODRiOTQzO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4tMTQpOyB9XG4gICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbY2FydC1wcm9kdWN0LXF1YW50aXR5XSBbcXVhbnQtaW5wdXRdIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWlvbi13aC0zNSk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IHZhcigtLWlvbi13aC03MCk7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW2NhcnQtcHJvZHVjdC1xdWFudGl0eV0gW3F1YW50LWlucHV0XSBbYXJyb3dzXSB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogdmFyKC0taW9uLXZhbHVlLTEwKTtcbiAgICAgICAgICB0b3A6IHZhcigtLWlvbi12YWx1ZS0wKTtcbiAgICAgICAgICB6LWluZGV4OiAyOyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW2NhcnQtcHJvZHVjdC1xdWFudGl0eV0gW3F1YW50LWlucHV0XSBbYXJyb3dzXSBbYXJyb3ddOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbY2FydC1wcm9kdWN0LXF1YW50aXR5XSBbcXVhbnQtaW5wdXRdIFthcnJvd3NdIFthcnJvd11bbWludXNdIC5pY29uIHtcbiAgICAgICAgICAgIHRvcDogLTdweCAhaW1wb3J0YW50OyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW2NhcnQtcHJvZHVjdC1xdWFudGl0eV0gW3F1YW50LWlucHV0XSBbYXJyb3dzXSBbYXJyb3ddIC5pY29uIHtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XSB0YWJsZSB0ciB0ZFtjYXJ0LXByb2R1Y3QtcXVhbnRpdHldIFtxdWFudC1pbnB1dF0gaW5wdXQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YyRjJGMjtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNSk7XG4gICAgICAgICAgaGVpZ2h0OiB2YXIoLS1pb24td2gtMzUpO1xuICAgICAgICAgIGxlZnQ6IHZhcigtLWlvbi12YWx1ZS0wKTtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0yMCkgdmFyKC0taW9uLXBhZGRpbmctMCkgdmFyKC0taW9uLXBhZGRpbmctMTgpO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IHZhcigtLWlvbi12YWx1ZS0wKTtcbiAgICAgICAgICB3aWR0aDogdmFyKC0taW9uLXdoLTcwKTtcbiAgICAgICAgICB6LWluZGV4OiAxOyB9XG4gICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbcmVtb3ZlLWl0ZW1dIFthY3Rpb24taWNvbnNdIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNWNiODVjO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICB3aWR0aDogdmFyKC0taW9uLXZhbHVlLTMwKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMzApO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMzApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgICBib3JkZXI6IHZhcigtLWlvbi12YWx1ZS0wKTsgfVxuICAgICAgICBpb24tY29udGVudCBbY2FydC1wYWdlXSBbc2hvcHBpbmctY2FydF0gdGFibGUgdHIgdGRbcmVtb3ZlLWl0ZW1dIFthY3Rpb24taWNvbnNdOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW3JlbW92ZS1pdGVtXSBbYWN0aW9uLWljb25zXVttci0xMF0ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbi0xMCk7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRyIHRkW3JlbW92ZS1pdGVtXSBbYWN0aW9uLWljb25zXVtkZWZhdWx0LWljb25dIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmUzYTkwOyB9XG4gICAgICAgIGlvbi1jb250ZW50IFtjYXJ0LXBhZ2VdIFtzaG9wcGluZy1jYXJ0XSB0YWJsZSB0ciB0ZFtyZW1vdmUtaXRlbV0gW2FjdGlvbi1pY29uc11bZGVsLWljb25dIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDk1MzRmOyB9XG4gICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRmb290IFtzaG9wcGluZy1jYXJ0LWJ0bl0gaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6dmFyKCAtLWlvbi12YWx1ZS0wKTtcbiAgICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtcGFnZV0gW3Nob3BwaW5nLWNhcnRdIHRhYmxlIHRmb290IFtzaG9wcGluZy1jYXJ0LWJ0bl0gaW9uLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuODsgfVxuICBpb24tY29udGVudCBbY2FydC1tb2JdIHtcbiAgICAvKiBDb3Vwb24gQ29kZSBTdGFydCAqL1xuICAgIC8qIENvdXBvbiBDb2RlIEVuZHMgKi9cbiAgICAvKiBDYXJ0IFN1YnRvdGFsIFN0YXJ0ICovXG4gICAgLyogQ2FydCBTdWJ0b3RhbCBFbmRzICovIH1cbiAgICBpb24tY29udGVudCBbY2FydC1tb2JdIFtjYXJ0LWl0ZW1zXSBpb24taXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhciggLS1pb24tcGFkZGluZy0xMCk7XG4gICAgICAtLXBhZGRpbmctZW5kOiB2YXIoIC0taW9uLXBhZGRpbmctMCk7XG4gICAgICAtLXBhZGRpbmctdG9wOiB2YXIoIC0taW9uLXBhZGRpbmctMTApO1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKCAtLWlvbi1wYWRkaW5nLTEwKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTEwKTsgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICBpb24tY29udGVudCBbY2FydC1tb2JdIFtjYXJ0LWl0ZW1zXSBpb24taXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleSk7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTsgfSB9XG4gICAgICBpb24tY29udGVudCBbY2FydC1tb2JdIFtjYXJ0LWl0ZW1zXSBpb24taXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgLypcblx0XHRcdFx0XHRcdHdpZHRoOiB2YXIoIC0taW9uLXZhbHVlLTkwKTtcblx0XHRcdFx0XHQgICBoZWlnaHQ6IHZhciggLS1pb24tdmFsdWUtOTApO1xuXHRcdFx0XHRcdCAgbWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdCAgIG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi0wKTsqLyB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICBpb24tY29udGVudCBbY2FydC1tb2JdIFtjYXJ0LWl0ZW1zXSBpb24taXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTsgfSB9XG4gICAgICBpb24tY29udGVudCBbY2FydC1tb2JdIFtjYXJ0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICAgIGlvbi1jb250ZW50IFtjYXJ0LW1vYl0gW2NhcnQtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIGgzIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTApO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMyk7IH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICBpb24tY29udGVudCBbY2FydC1tb2JdIFtjYXJ0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCBoMyB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IH0gfVxuICAgICAgICBpb24tY29udGVudCBbY2FydC1tb2JdIFtjYXJ0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCBwIHtcbiAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMyk7IH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICBpb24tY29udGVudCBbY2FydC1tb2JdIFtjYXJ0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFtjYXJ0LW1vYl0gW2NhcnQtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIGlvbi1idXR0b24ge1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKCAtLWlvbi1wYWRkaW5nLTQpO1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKCAtLWlvbi1wYWRkaW5nLTQpO1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IHZhciggLS1pb24tcGFkZGluZy00KTtcbiAgICAgICAgICBoZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0yMik7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6dmFyKCAtLWlvbi12YWx1ZS0wKTtcbiAgICAgICAgICAtLWJvcmRlci13aWR0aDoxcHg7XG4gICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lOyB9XG4gICAgICAgIGlvbi1jb250ZW50IFtjYXJ0LW1vYl0gW2NhcnQtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIFthZGQtcXVhbnRpdHldIFtudW0tcXVhbnRpdHldIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiB2YXIoLS1pb24tdmFsdWUtNik7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7IH1cbiAgICBpb24tY29udGVudCBbY2FydC1tb2JdIFtjYXJ0LWNvdXBvbl0gaW9uLWlucHV0IHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7IH1cbiAgICBpb24tY29udGVudCBbY2FydC1tb2JdIFtjYXJ0LWNvdXBvbl0gaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6dmFyKC0taW9uLXZhbHVlLTApO1xuICAgICAgbWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLTApO1xuICAgICAgaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtNDApO1xuICAgICAgLS1ib3gtc2hhZG93OiBub25lOyB9XG4gICAgaW9uLWNvbnRlbnQgW2NhcnQtbW9iXSBbY2FydC1zdWJ0b3RhbF0gaW9uLWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czp2YXIoLS1pb24tdmFsdWUtMCk7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xMCk7IH1cbiAgICAgIGlvbi1jb250ZW50IFtjYXJ0LW1vYl0gW2NhcnQtc3VidG90YWxdIGlvbi1jYXJkIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOnZhcigtLWlvbi12YWx1ZS00KTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtbW9iXSBbY2FydC1zdWJ0b3RhbF0gaW9uLWNhcmQgaDIge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcbiAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0xMCk7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW2NhcnQtbW9iXSBbY2FydC1zdWJ0b3RhbF0gaW9uLWNhcmQgaDIgW3ByaWNlXSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwOyB9XG4gICAgICBpb24tY29udGVudCBbY2FydC1tb2JdIFtjYXJ0LXN1YnRvdGFsXSBpb24tY2FyZCBwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XG4gICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMTApOyB9XG4iXX0= */"

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
        this.getCartProductsIds();
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_4__["config"].IMAGES_URL;
        this.events.subscribe('cart_updated:true', function (data) {
            _this.getCartProducts1();
        });
        // events.subscribe('wishlist:true', data => {
        //   this.getCartProductsIds();
        // });
    }
    CartPage.prototype.ngOnInit = function () {
    };
    CartPage.prototype.ionViewDidEnter = function () {
        if (localStorage.getItem('comeFrom') == 'register') {
            this.router.navigate(['/interest']);
            return;
        }
        var token = localStorage.getItem('sin_auth_token');
        this.userId = this.userService.decryptData(token, _config__WEBPACK_IMPORTED_MODULE_4__["config"].ENC_SALT);
        localStorage.removeItem('coupon_applied');
        this.total_payable_price = 0;
        this.grand_total = 0;
        this.getCartProductsIds();
        this.getCartProducts1();
    };
    CartPage.prototype.getCartProductsIds = function () {
        var _this = this;
        // this.presentLoading();
        this.userService.postData({ user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId }, 'getCartProductsIds').subscribe(function (result) {
            // this.stopLoading();
            _this.my_wish_products = result.wishlist;
            // this.my_cart_products = result.products;
            _this.getCartProducts1();
        }, function (err) {
            // this.stopLoading();
            _this.getCartProducts1();
            // this.my_cart_products = [];
            _this.my_wish_products = [];
        });
    };
    CartPage.prototype.getCartProducts1 = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId }, 'getCartProducts').subscribe(function (result) {
            _this.stopLoading();
            _this.my_cart_products = result.products;
            for (var i = 0; i < result.products.length; i++) {
                // if(typeof(result.products[i].product_variations) == 'string')
                if (result.products[i].product_variations) {
                    result.products[i].product_variations = JSON.parse(result.products[i].product_variations);
                }
            }
            _this.cart = result.products;
            //console.log('HERE I AM');
            //console.log(this.cart);
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
        // this.presentLoading();
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
        // this.presentLoading();
        if (this.cart[index]['product_quantity'] != 1) {
            this.cart[index]['product_quantity'] = Number(this.cart[index]['product_quantity']) - 1;
            this.updateCartQuantity(cart_id, this.cart[index]['product_quantity']);
            if (this.errors.indexOf(this.cart[index]['product_sale_price']) == -1 && this.cart[index]['product_sale_price'] != this.cart[index]['product_purchase_price']) {
                this.total_payable_price = Number(this.total_payable_price) - Number(this.cart[index]['product_sale_price']);
            }
            else {
                this.total_payable_price = Number(this.total_payable_price) - Number(this.cart[index]['product_purchase_price']);
            }
            // this.stopLoading();
            this.calculateTotalPrice();
            this.events.publish('cart_updated:true', { items_in_cart: this.cart.length, cart_price: this.total_payable_price });
        }
    };
    CartPage.prototype.updateCartQuantity = function (cart_id, quantity) {
        var _this = this;
        this.presentLoading();
        this.userService.postData({ cart_id: cart_id, quantity: quantity }, 'updateCartQuantity').subscribe(function (result) {
            _this.stopLoading();
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
        // this.presentLoading();
        if (this.errors.indexOf(this.userId) >= 0) {
            // this.stopLoading();
            this.presentToast('Please login to checkout.', 'danger');
            this.router.navigate(['/login']);
        }
        else {
            // this.presentLoading();
            if (this.applied_coupon == true) {
                localStorage.setItem('coupon_applied', 'success');
                localStorage.setItem('coupon_applied_amount', this.total_coupon_amount);
                localStorage.setItem('applied_coupon_id', this.applied_coupon_id);
            }
            // this.stopLoading();
            this.router.navigate(['/checkout']);
        }
    };
    CartPage.prototype.remove = function (cart_id, index, product_id, product_sale_price, product_purchase_price) {
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
                                                _this.my_cart_products = _this.my_cart_products.length - 1;
                                                var p_price;
                                                if (_this.errors.indexOf(product_sale_price) == -1 && product_sale_price != product_purchase_price) {
                                                    p_price = product_sale_price;
                                                }
                                                else {
                                                    p_price = product_purchase_price;
                                                }
                                                _this.events.publish('cart_updated:true', { items_in_cart: _this.my_cart_products.length, cart_price: p_price, isAdd: true });
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