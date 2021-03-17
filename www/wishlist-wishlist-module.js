(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wishlist-wishlist-module"],{

/***/ "./src/app/wishlist/wishlist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.module.ts ***!
  \*********************************************/
/*! exports provided: WishlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist.page */ "./src/app/wishlist/wishlist.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-stars */ "./node_modules/ngx-stars/fesm5/ngx-stars.js");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");










var routes = [
    {
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]
    }
];
var WishlistPageModule = /** @class */ (function () {
    function WishlistPageModule() {
    }
    WishlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ngx_stars__WEBPACK_IMPORTED_MODULE_8__["NgxStarsModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_9__["HeaderPageModule"]
            ],
            declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]]
        })
    ], WishlistPageModule);
    return WishlistPageModule;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.page.html":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n<app-header ></app-header>\n<div class=\"ion-padding\">\n\t<div header_height></div>\n\t<!-- Breadcrumb Start -->\n\n\t<div breadcrumb  class=\"ion-hide-md-down\">\n\t\t<div breadcrumb-inner>\n\t\t\t<ul list-inline list-unstyled style='margin:0 0 15px 0'>\n\t\t\t    <li style=\"float:left;margin:0 10px 0 0\">\n\t\t\t    \t<a routerLink=\"/blog\">Home / </a>\n\t\t\t    </li>\n\t\t\t\t<li class=\"active\">Wishlist</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n<div my-wishlist-page class=\"ion-hide-md-down\">\n\n<div mainSecWishlist>\n\t<!-- hdng -->\n\t<div subHdng *ngIf=\"all_wishlist != ''\">\n\t\t<!-- <h4 heading-title>My Wishlists\n\t\t\t<ion-button addNewWishlist color=\"darkred\" (click)=\"presentAlertPromptAdd()\">\n\t\t\t\t<i class=\"fa fa-plus\"></i>\n\t\t\t</ion-button>\n\t\t   \t<div srch-filter>\n\t\t\t\t<input (input)=\"searchWishlist($event)\" search-input placeholder=\"Search this list...\">\n\t\t\t\t<a search-button>\n\t\t\t\t   <i class=\"fa fa-search\"></i>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</h4> -->\n\t</div>\n\n\t<!-- Lists -->\n\n\t<ng-container *ngFor=\"let item of wishlist;let i = index;\">\n\t\t<h4 style=\"margin:15px 0\" catHdng>\n\t\t\t{{item.wish_title}}\n\n\t\t\t<!-- <div ritActions2 *ngIf=\"userId == item.user_id || guestUserId == item.user_id\">\n\t\t\t\t<ion-checkbox color=\"darkred\" [checked]=\"item.is_default == 1\" *ngIf=\"item.is_default == 1\" ></ion-checkbox>\n\t\t   \t\t<ion-checkbox  color=\"darkred\" *ngIf=\"item.is_default != 1\" (ionChange)=\"setDefault(item.wish_id)\" ></ion-checkbox>\n\n\t\t   \t\t<ion-button color=\"darkred\" (click)=\"addAddressForWishlist(item)\">\n\t\t   \t\t\t<i class=\"fa fa-pencil\"></i>\n\t\t   \t\t</ion-button>\n\n\t\t   \t\t<ion-button color=\"darkred\" (click)=\"share(item, i)\">\n\t\t   \t\t\t<i class=\"fa fa-share-alt\"></i>\n\t\t   \t\t</ion-button>\n\t\t   \t\t<ion-button color=\"darkred\"  (click)=\"deleteWishlist(item.wish_id)\" *ngIf=\"item.is_default != 1\">\n\t\t   \t\t\t<i class=\"fa fa-trash\"></i>\n\t\t   \t\t</ion-button>\n\t\t   \t\t<ion-button color=\"darkred\" (click)=\"placeOrder(item)\">\n\t\t   \t\t\t<i class=\"fa fa-shopping-bag\"></i>\n\t\t   \t\t</ion-button>\n\t\t   \t</div>\n\n\t\t   \t<div ritActions2 *ngIf=\"userId != item.user_id && guestUserId != item.user_id\">\n\t\t   \t\t<ion-button color=\"darkred\" (click)=\"placeOrder(item)\">\n\t\t   \t\t\t<i class=\"fa fa-shopping-bag\"></i>\n\t\t   \t\t</ion-button>\n\t\t   \t</div> -->\n\t\t</h4>\n\n\t\t<div wishlistList *ngFor=\"let product of item.products; let w_ind = index \" >\n\t\t\t<div class=\"col-sm-1\">\n\t\t\t<a proImg routerLink=\"/product-details/{{product.product_id}}\">\n\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{product.product_image}}\" alt=\"{{product.product_name}}\">\n\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t<div product-name>\n\t\t\t\t   <a routerLink=\"/product-details/{{product.product_id}}\">\n\t\t\t\t      {{product.product_name}}\n\t\t\t\t   </a>\n\t\t\t\t</div>\n\t\t\t\t<div rating rateit>\n\t\t\t\t\t<ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"product?.Average_Review\" [color]=\"'#a01616'\" *ngIf=\"product?.Average_Review != null\"></ngx-stars>\n\t\t\t\t\t<ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"0\" [color]=\"'#a01616'\" *ngIf=\"product.Average_Review == null\"></ngx-stars>\n\t\t\t\t\t<!-- <span class=\"review\">( {{product?.product_reviews?.length}} {{product?.product_reviews?.length == '1' ? 'Review' : 'Reviews'}} )</span> -->\n\t\t\t\t</div>\n\t\t\t\t<div price>\n\t\t\t\t\t<ng-container *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price\"> Now for ${{product?.product_sale_price}}  </ng-container>\n\n\t    \t\t\t<ng-container *ngIf=\"errors.indexOf(product?.product_sale_price) >= 0 || product?.product_sale_price == product?.product_purchase_price\"> ${{product?.product_purchase_price}}  </ng-container>\n\n\t    \t\t\t<span *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price\" price-before-discount> from ${{product?.product_purchase_price}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div vendor-info>\n\t\t\t\t\t<p *ngIf=\"product?.product_user_type == 'Vendor'\" vendor-name>Sold by <a href=\"javascript:void(0)\">{{product?.Vendors[0]?.vendor_company}}</a></p>\n\t\t\t\t\t<!-- <p>Item added on {{product?.wish_date | date : 'MMM d, y'}}</p> -->\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-12\" style=\" float: left;width: 100%;\">\n\t\t\t\t\t<ng-container *ngIf=\"product?.product_quantity != 0 && errors.indexOf(product?.product_quantity) == -1\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<ion-button color=\"darkred\" *ngIf=\"userId == item.user_id || guestUserId == item.user_id\" style=\"float: right;display: inline-block;position: initial;\">\n\t\t\t\t\t\t\t<a (click)=\"removeProduct(item.wish_id, product.product_id)\">\n\t\t\t\t\t\t   \t\t<i class=\"fa fa-times\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</ion-button>\n\n\t\t\t\t\t\t<ion-button color=\"darkred\" *ngIf=\"my_cart_products.indexOf(product.product_id) == -1\" (click)=\"addToCart(product.product_id,product.product_sale_price,product.product_purchase_price)\" style=\"float: right;display: inline-block;position: initial;\">\n\t\t\t\t\t\t\tAdd to cart\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t<ion-button color=\"darkred\" *ngIf=\"my_cart_products.indexOf(product.product_id) >= 0\" style=\"float: right;display: inline-block;position: initial;\">\n\t\t\t\t\t\t\tIn cart\n\t\t\t\t\t\t</ion-button>\n\n\t\t\t\t\t\t\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t<ng-container tag new *ngIf=\"product?.product_quantity == 0 || errors.indexOf(product?.product_quantity) >= 0\" style=\"float: left;width: 100%;margin: 0;padding: 0;color: maroon;\">\n\t\t\t\t\t\tOut of stock\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t</div>\n\t \t</div>\n\t</ng-container>\n\n\t<div *ngIf=\"wishlist == ''\" style=\"padding: 14px;\">\n\t\t<span>No items added in wishlist</span>\n\t</div>\n\t<div *ngIf=\"all_wishlist != '' && wishlist == ''\" style=\"padding: 14px;\">\n\t\t<span>No matching records found.</span>\n\t</div>\n\n</div>\n\n</div>\n<!-- Wishist browser End -->\n<!-- Wishist mobile Start -->\n<div wishlist-mob class=\"ion-hide-lg-up\">\n  <div wishlist-items>\n  \t<div checkout-box>\n  \t\t<!-- main hdng -->\n\t  \t<h3 class=\"mainWishHdng\">\n\t  \t\tMy Wishlists \n\t  \t\t<!-- <ion-button addnewwishlistApp=\"\" color=\"darkred\" (click)=\"presentAlertPromptAdd()\" class=\"ion-color ion-color-darkred ios button button-solid ion-activatable ion-focusable hydrated\">\n\t\t\t\t<i class=\"fa fa-plus\"></i>\n\t\t\t</ion-button> -->\n\t\t</h3>\n\n\t\t<ion-card no-margin padding>\n\t\t\t<div panel panel-default *ngFor=\"let item of wishlist; let i = index \">\n\t\t\t\t <div panel-heading checkout-head>\n\t\t\t\t\t<h4>\n\t\t\t\t\t   <a href=\"javascript:void(0)\" [ngClass]=\"{'active': selectedItem.indexOf('item'+i) >= 0}\"  (click)=\"faqClicked('item'+i)\">\n\t\t\t\t\t\t  <span>1</span> {{item.wish_title}}\n\n\t\t\t\t\t\t  \t<!-- <div sharedTitle *ngIf=\"item.share_with_user.length > 0 && userId == item.user_id\"> shared with {{item.share_with_user[0].name}} {{item.share_with_user[0].last_name}}</div>\n\n\t\t\t\t\t\t\t<div sharedTitle *ngIf=\"item.share_with_user.length > 0 && userId != item.user_id\"> shared  by {{item.userData[0].name}} {{item.userData[0].last_name}}</div>  -->\n\n\t\t\t\t\t   </a>\n\t\t\t\t\t   <div ritActions *ngIf=\"userId == item.user_id || guestUserId == item.user_id\">\n\t\t\t\t\t   \t\t<ion-checkbox color=\"darkred\" [checked]=\"item.is_default == 1\"  *ngIf=\"item.is_default == 1\"></ion-checkbox>\n\t\t\t\t\t   \t\t<ion-checkbox color=\"darkred\" *ngIf=\"item.is_default != 1\" (ionChange)=\"setDefault(item.wish_id)\" ></ion-checkbox>\n\t\t\t\t\t   \t\t<ion-button color=\"darkred\" (click)=\"addAddressForWishlist(item)\">\n\t\t\t\t\t   \t\t\t<i class=\"fa fa-pencil\"></i>\n\t\t\t\t\t   \t\t</ion-button>\n\t\t\t\t\t   \t\t<!-- <ion-button color=\"darkred\" (click)=\"share(item, i)\" *ngIf=\"item.share_with_user.length == 0\">\n\t\t\t\t\t   \t\t\t<i class=\"fa fa-share-alt\"></i>\n\t\t\t\t\t   \t\t</ion-button> -->\n\t\t\t\t\t   \t<!-- \t<ion-button disabled *ngIf=\"item.share_with_user.length > 0\" class=\"disbale\">\n\t\t\t\t\t   \t\t\t<i class=\"fa fa-share-alt\"></i>\n\t\t\t\t\t   \t\t</ion-button> -->\n\t\t\t\t\t   \t\t<ion-button color=\"darkred\" (click)=\"share(item, i)\" *ngIf=\"item.share_with_user.length == 0\">\n\t\t\t\t\t   \t\t\t<i class=\"fa fa-share-alt\"></i>\n\t\t\t\t\t   \t\t</ion-button>\n\n\t\t\t\t\t   \t\t<ion-button color=\"darkred\" (click)=\"placeOrder(item)\">\n\t\t\t\t\t   \t\t\t<i class=\"fa fa-shopping-bag\"></i>\n\t\t\t\t\t   \t\t</ion-button>\n\n\t\t\t\t\t   \t\t<ion-button color=\"darkred\"  (click)=\"deleteWishlist(item.wish_id)\" *ngIf=\"item.is_default != 1\">\n\t\t\t\t\t   \t\t\t<i class=\"fa fa-trash\"></i>\n\t\t\t\t\t   \t\t</ion-button>\n\n\n\t\t\t\t\t   </div>\n\t\t\t\t\t   <div ritActions *ngIf=\"userId != item.user_id && guestUserId != item.user_id\">\n\t\t\t\t\t   \t\t<ion-button color=\"darkred\" (click)=\"placeOrder(item)\">\n\t\t\t\t\t   \t\t\t<i class=\"fa fa-shopping-bag\"></i>\n\t\t\t\t\t   \t\t</ion-button>\n\t\t\t\t\t   </div>\n\t\t\t\t\t</h4>\n\t\t\t\t </div>\n\t\t\t\t <div panel-body  [ngClass]=\"{'active': selectedItem.indexOf('item'+i) >= 0}\">\n\n\t\t\t\t \t<ion-grid productsDiv>\n\n\t\t\t\t \t\t<ion-item lines=\"none\" *ngFor=\"let product of item.products; let wm_ind = index \">\n\t\t\t\t\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t\t\t\t\t  <a routerLink=\"/product-details/{{product.product_id}}\">\n\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{product.product_image}}\" alt=\"{{product.product_name}}\">\n\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t</ion-thumbnail>\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<h3>{{product.product_name}}</h3>\n\t\t\t\t\t\t\t<p price-main>\n\t\t\t\t\t\t\t\t<span *ngIf=\"errors.indexOf(product.product_sale_price) == -1 && product.product_sale_price != product.product_purchase_price\"> ${{product.product_sale_price}}  </span>\n\n\t\t\t\t\t            <span *ngIf=\"errors.indexOf(product.product_sale_price) >= 0 || product.product_sale_price == product.product_purchase_price\"> ${{product.product_purchase_price}}  </span>\n\n\t\t\t\t\t            <span *ngIf=\"errors.indexOf(product.product_sale_price) == -1 && product.product_sale_price != product.product_purchase_price\" price-before-discount>${{product.product_purchase_price}}</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div rating>\n\t\t\t\t\t\t\t\t<ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"product?.Average_Review\" [color]=\"'#a01616'\" *ngIf=\"product?.Average_Review != null\"></ngx-stars>\n\t\t\t\t\t\t\t\t<ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"0\" [color]=\"'#a01616'\" *ngIf=\"product.Average_Review == null\"></ngx-stars>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t   \t</label>\n\n\t\t\t\t\t\t\t<ion-button color=\"grey2\" size=\"small\" fill=\"outline\" slot=\"end\" *ngIf=\"product?.product_quantity != 0 && errors.indexOf(product?.product_quantity) == -1\">\n\t\t\t\t\t\t\t\t<ion-icon title=\"Add to Cart\"  *ngIf=\"my_cart_products.indexOf(product.product_id) == -1\" (click)=\"addToCart(product.product_id,product.product_sale_price,product.product_purchase_price)\" name=\"cart\"></ion-icon>\n\n\t\t\t\t\t\t\t\t<ion-icon title=\"In cart\" *ngIf=\"my_cart_products.indexOf(product.product_id) >= 0\" name=\"checkmark\"></ion-icon>\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t<ion-button color=\"grey2\" size=\"small\" fill=\"outline\" slot=\"end\" (click)=\"removeWishlist(wm_ind,product.wish_id)\" *ngIf=\"userId == item.user_id || guestUserId == item.user_id\">\n\t\t\t\t\t\t\t\t<ion-icon name=\"trash\"></ion-icon>\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t\t<ion-item lines=\"none\" *ngIf=\"all_wishlist != '' && wishlist == ''\">\n\t\t\t\t\t\t\tNo matching records found.\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item lines=\"none\" *ngIf=\"all_wishlist == ''\">\n\t\t\t\t\t\t\tNo items added in wishlist.\n\t\t\t\t\t\t</ion-item>\n\n\t\t\t\t \t</ion-grid>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-card>\n\t</div>\n\n  </div>\n</div>\n<div *ngIf=\"showShareDiv\" class=\"sharedDiv\">\n\n\t<a _ngcontent-iqv-c6=\"\" search-button=\"\" (click)=\"closePopUp()\"><i _ngcontent-iqv-c6=\"\" class=\"fa fa-close\"></i></a>\n\t<h4>Sharable Link:</h4>\n\t<span>{{publicUrl}}</span>\n\n</div>\n<!-- Wishist mobile End -->\n<!-- <app-recently-viewed></app-recently-viewed> -->\n<!-- <app-upsell-products></app-upsell-products> -->\n</div>\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/wishlist/wishlist.page.scss":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey);\n  /*  Wishlist Page   Start*/\n  /*  Wishlist Page   Ends*/\n  /*\r\n\t-------------------------------------------\r\n\t \tMobile Wishlist Start\r\n\t--------------------------------\r\n*/\n  /* Mobile Wishlist Ends*/ }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0); } }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0);\n      --padding-bottom:var(--ion-padding-0);\n      --padding-start:var(--ion-padding-0);\n      --padding-end:var(--ion-padding-0); } }\n  ion-content [my-wishlist-page] {\n    background-color: var(--ion-color-white);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n    padding: var(--ion-padding-0);\n    overflow: hidden; }\n  ion-content [my-wishlist-page] table {\n      margin-bottom: var(--ion-margin-0); }\n  ion-content [my-wishlist-page] table tr {\n        font-family: var(--ion-font-family-2); }\n  ion-content [my-wishlist-page] table tr td {\n          vertical-align: middle;\n          padding: var(--ion-padding-15); }\n  ion-content [my-wishlist-page] table tr td[close-btn] a {\n            color: var(--ion-color-darkred);\n            text-decoration: none; }\n  ion-content [my-wishlist-page] table tr td [product-name] {\n            font-size: var(--ion-font-size-16);\n            font-family: var(--ion-font-family-2);\n            padding-bottom: var(--ion-padding-6); }\n  ion-content [my-wishlist-page] table tr td [product-name] a {\n              color: #434343;\n              text-decoration: none; }\n  ion-content [my-wishlist-page] table tr td [price] {\n            color: var(--ion-color-darkred);\n            font-size: var(--ion-font-size-16);\n            padding-top: var(--ion-padding-4);\n            font-weight: 700; }\n  ion-content [my-wishlist-page] table tr td [price] span {\n              font-size: var(--ion-font-size-15);\n              color: var(--ion-color-ltgrey);\n              text-decoration: line-through;\n              padding-left: var(--ion-padding-10); }\n  ion-content [my-wishlist-page] table tr td p {\n            font-size: var(--ion-font-size-14);\n            color: var(--ion-color-darkblack);\n            font-family: var(--ion-font-family-2); }\n  ion-content [my-wishlist-page] table tr td p[vendor-name] {\n              margin-top: 10px; }\n  ion-content [my-wishlist-page] table tr td p[vendor-name] a {\n                color: var(--ion-color-darkred);\n                text-decoration: none; }\n  ion-content [my-wishlist-page] table tr td [rating] ion-icon {\n            color: #dcdcdc; }\n  ion-content [my-wishlist-page] table tr td [rating] ion-icon[filled] {\n              color: var(--ion-color-yellow); }\n  ion-content [my-wishlist-page] table tr td ion-button {\n            --box-shadow:none;\n            font-family: var(--ion-font-family-2);\n            border-radius: var(--ion-value-0); }\n  ion-content .sharedDiv {\n    position: fixed;\n    top: 40%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    background: #ffffff;\n    z-index: 88888;\n    margin: auto;\n    border: 1px solid #222f3e;\n    height: 30%; }\n  ion-content .sharedDiv a {\n      float: right;\n      padding: 6px 10px;\n      background: #a02718;\n      vertical-align: middle;\n      margin: 7px;\n      color: #fff; }\n  ion-content .sharedDiv span {\n      border: 1px solid #ededed;\n      padding: 17px;\n      margin: 6px 8px;\n      position: absolute;\n      width: 90%;\n      background: #f0f0f0; }\n  ion-content .sharedDiv h4 {\n      margin: 8px; }\n  ion-content [panel] [panel-heading][checkout-head] {\n    background: #f5f5f5;\n    position: relative; }\n  ion-content [panel] [panel-heading][checkout-head] h4 {\n      margin-top: var(--ion-margin-0); }\n  ion-content [panel] [panel-heading][checkout-head] h4 a {\n        font-family: var(--ion-font-family-2);\n        color: var(--ion-color-darkblack3);\n        text-transform: uppercase;\n        display: block;\n        margin: var(--ion-margin-0);\n        font-size: var(--ion-font-size-13);\n        font-weight: bold;\n        text-decoration: none; }\n  @media only screen and (max-width: 991px) {\n          ion-content [panel] [panel-heading][checkout-head] h4 a {\n            padding-right: var(--ion-padding-10);\n            background: var(--ion-color-white); } }\n  ion-content [panel] [panel-heading][checkout-head] h4 a.active span {\n          background: var(--ion-color-darkred); }\n  @media only screen and (max-width: 991px) {\n          ion-content [panel] [panel-heading][checkout-head] h4 a {\n            display: flex;\n            align-items: center;\n            font-size: var(--ion-font-size-12); } }\n  ion-content [panel] [panel-heading][checkout-head] h4 a span {\n          color: var(--ion-color-white);\n          display: inline-block;\n          margin-right: var(--ion-margin-10);\n          padding: var(--ion-padding-15) var(--ion-padding-20);\n          background: #aaaaaa; }\n  @media only screen and (max-width: 991px) {\n            ion-content [panel] [panel-heading][checkout-head] h4 a span {\n              padding: var(--ion-padding-15) var(--ion-padding-15); } }\n  ion-content [panel] [panel-body] {\n    display: none;\n    padding: var(--ion-padding-10) var(--ion-padding-0) var(--ion-padding-22);\n    font-family: var(--ion-font-family-2); }\n  ion-content [panel] [panel-body].active {\n      display: block; }\n  ion-content [ritActions] {\n    right: 3px;\n    top: -4px;\n    position: absolute; }\n  ion-content [ritActions] ion-button {\n      width: 25px;\n      margin-right: 8px; }\n  ion-content [panel-body] {\n    padding: 0 !important; }\n  ion-content [productsdiv] {\n    padding: 0; }\n  ion-content [productsdiv] .item-native {\n      background: #f1f1f1;\n      border: 1px solid #ddd; }\n  ion-content [productsdiv] ion-item {\n      box-shadow: none !important; }\n  ion-content [productsdiv] ion-item ion-thumbnail {\n        margin: 0 15px 0 0 !important; }\n  ion-content .stars-line i.fa.fa-star {\n    margin-right: 3px !important; }\n  ion-content [mainSecWishlist] {\n    padding: 0 20px; }\n  ion-content [mainSecWishlist] [wishlistlist] {\n      display: flex;\n      align-items: center;\n      border-bottom: 1px solid #eee;\n      padding: 10px 0;\n      margin-bottom: 20px; }\n  ion-content [mainSecWishlist] [catHdng] {\n      font-size: 18px;\n      display: flex;\n      font-weight: 600;\n      color: #23303e;\n      justify-content: space-between;\n      border: 1px solid #ddd;\n      padding: 0px 13px;\n      align-items: center;\n      background: #f1f1f1;\n      border-radius: 2px; }\n  ion-content [mainSecWishlist] [catHdng] [bullets] {\n        background: #a02718;\n        padding: 12px 19px;\n        left: 0px;\n        position: relative;\n        margin: 0;\n        margin-left: -14px !important;\n        color: #fff; }\n  ion-content [mainSecWishlist] [catHdng] [sharedTitle] {\n        color: #ffffff;\n        font-size: 13px;\n        /* float: right; */\n        right: 22%;\n        position: absolute;\n        background: #222f3ebf;\n        padding: 4px 16px;\n        border-radius: 3px; }\n  ion-content [mainSecWishlist] [proimg] img {\n      max-width: 70px; }\n  ion-content [subHdng] {\n    vertical-align: middle; }\n  ion-content [subHdng] [heading-title] {\n      font-weight: bold;\n      font-size: var(--ion-font-size-22);\n      color: var(--ion-color-darkblack);\n      border-bottom: 1px #e5e5e5 solid;\n      padding-bottom: 14px; }\n  ion-content [subHdng] [heading-title] [srch-filter] {\n        float: right; }\n  ion-content [subHdng] [heading-title] [srch-filter] [search-input] {\n          font-size: var(--ion-font-size-14);\n          font-weight: 500;\n          padding: var(--ion-padding-5) var(--ion-padding-15);\n          border: 1px solid #E0E0E0;\n          float: left;\n          height: 32px; }\n  ion-content [subHdng] [heading-title] [srch-filter] [search-button] {\n          float: left;\n          width: var(--ion-wh-32);\n          height: var(--ion-wh-32);\n          background: var(--ion-color-darkred);\n          text-align: center;\n          line-height: var(--ion-value-32);\n          font-size: var(--ion-font-size-16);\n          color: var(--ion-color-white); }\n  ion-content [addNewWishlist] {\n    width: 30px;\n    margin: -14px 0 0;\n    height: 30px; }\n  ion-content [ritActions2] ion-checkbox {\n    -webkit-transform: translate(-10px, 9px);\n            transform: translate(-10px, 9px); }\n  ion-content h3.mainWishHdng {\n    margin: 0 0 10px;\n    width: 100%;\n    float: left;\n    font-size: 18px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  ion-content h3.mainWishHdng [addnewwishlistApp] {\n      width: 30px;\n      margin: 0px 0 0 4px;\n      height: 30px;\n      float: right; }\n  ion-content [ritActions] ion-checkbox {\n    -webkit-transform: translate(-1px, 11px);\n            transform: translate(-1px, 11px);\n    width: 30px;\n    height: 30px;\n    --border-radius: 8px; }\n  ion-content [ritActions] ion-button {\n    margin-right: 8px;\n    height: 30px;\n    margin-top: -4px; }\n  ion-content [wishlist-mob] [wishlist-items] ion-item {\n    --padding-start: var( --ion-padding-10);\n    --padding-end: var( --ion-padding-0);\n    --padding-top: var( --ion-padding-10);\n    --padding-bottom: var( --ion-padding-10);\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);\n    margin-bottom: var(--ion-margin-10); }\n  @media only screen and (max-width: 991px) {\n      ion-content [wishlist-mob] [wishlist-items] ion-item {\n        border-bottom: 1px solid var(--ion-color-grey);\n        display: flex;\n        margin-bottom: var(--ion-margin-0); } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item ion-thumbnail {\n      /*\r\n\t\t\t\t\t\twidth: var( --ion-value-90);\r\n\t\t\t\t\t   height: var( --ion-value-90);\r\n\t\t\t\t\t  margin-top:var(--ion-margin-0);\r\n\t\t\t\t\t   margin-bottom:var(--ion-margin-0);*/ }\n  @media only screen and (max-width: 991px) {\n        ion-content [wishlist-mob] [wishlist-items] ion-item ion-thumbnail {\n          height: 100%; } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label {\n      width: 100%; }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label h3 {\n        margin-top: var(--ion-margin-0);\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-14);\n        font-weight: 700;\n        margin-bottom: var(--ion-margin-3); }\n  @media only screen and (max-width: 576px) {\n          ion-content [wishlist-mob] [wishlist-items] ion-item label h3 {\n            font-size: var(--ion-font-size-12); } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [price-main] {\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-14);\n        font-weight: 600;\n        margin-bottom: var(--ion-margin-3); }\n  @media only screen and (max-width: 576px) {\n          ion-content [wishlist-mob] [wishlist-items] ion-item label [price-main] {\n            font-size: var(--ion-font-size-12); } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [price-main] [price] {\n          color: var(--ion-color-darkred); }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [price-main] [price-discount] {\n          text-decoration: line-through;\n          color: var(--ion-color-ltgrey);\n          margin-left: var(--ion-value-5); }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [rating] ion-icon {\n        color: #d3d3d3; }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [rating] ion-icon[filled] {\n          color: var(--ion-color-yellow); }\n  @media only screen and (max-width: 576px) {\n          ion-content [wishlist-mob] [wishlist-items] ion-item label [rating] ion-icon {\n            font-size: var(--ion-font-size-12); } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item ion-button {\n      --padding-start: var( --ion-padding-4);\n      --padding-start: var( --ion-padding-4);\n      --padding-end: var( --ion-padding-4);\n      height: var(--ion-value-22);\n      margin: var(--ion-value-0) var(--ion-value-0) var(--ion-value-0) var(--ion-value-5);\n      font-size: var(--ion-font-size-12);\n      --border-radius:var( --ion-value-0);\n      --border-width:1px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC93aXNobGlzdC93aXNobGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFFQSxrQ0FBYTtFQVliLDBCQUFBO0VBdVRBLHlCQUFBO0VBVUQ7Ozs7Q0N2VUM7RUQwY0Esd0JBQUEsRUFBeUI7RUEvY3pCO0lBSEE7TUFLRyxrQ0FBYyxFQUFBLEVBOGNqQjtFQTVjQztJQVBEO01BU0csa0NBQWM7TUFDZCxxQ0FBaUI7TUFDakIsb0NBQWdCO01BQ2hCLGtDQUFjLEVBQUEsRUF1Y2pCO0VBbmRBO0lBZ0JHLHdDQUF1QztJQUN2QywyQ0FBdUM7SUFDdkMsNkJBQTZCO0lBQzdCLGdCQUFnQixFQUFBO0VBbkJuQjtNQXFCSyxrQ0FBa0MsRUFBQTtFQXJCdkM7UUF1Qk8scUNBQXFDLEVBQUE7RUF2QjVDO1VBMkJHLHNCQUFxQjtVQUNyQiw4QkFBOEIsRUFBQTtFQTVCakM7WUFpQ3dCLCtCQUErQjtZQUNqRCxxQkFBb0IsRUFBQTtFQWxDMUI7WUF1Q0ssa0NBQWtDO1lBQy9CLHFDQUFxQztZQUN4QyxvQ0FBb0MsRUFBQTtFQXpDekM7Y0E0Q1EsY0FBYztjQUNoQixxQkFBb0IsRUFBQTtFQTdDMUI7WUFtRFMsK0JBQWdDO1lBQ25DLGtDQUFrQztZQUNsQyxpQ0FBaUM7WUFDakMsZ0JBQWUsRUFBQTtFQXREckI7Y0F5RGEsa0NBQWtDO2NBQ3ZDLDhCQUE4QjtjQUM5Qiw2QkFBNkI7Y0FDN0IsbUNBQW1DLEVBQUE7RUE1RDNDO1lBaUVTLGtDQUFrQztZQUNuQixpQ0FBbUM7WUFDbkMscUNBQXFDLEVBQUE7RUFuRTdEO2NBcUV5QixnQkFBZ0IsRUFBQTtFQXJFekM7Z0JBd0V3QiwrQkFBK0I7Z0JBQ2hELHFCQUFvQixFQUFBO0VBekUzQjtZQWdGVyxjQUFhLEVBQUE7RUFoRnhCO2NBbUZTLDhCQUE2QixFQUFBO0VBbkZ0QztZQTRGSSxpQkFBYTtZQUNWLHFDQUFxQztZQUNyQyxpQ0FBZ0MsRUFBQTtFQTlGdkM7SUF1R0csZUFBZTtJQUNmLFFBQVE7SUFDUixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVyxFQUFBO0VBaEhkO01Ba0hJLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLHNCQUFzQjtNQUN0QixXQUFXO01BQ1gsV0FBVyxFQUFBO0VBdkhmO01BMEhJLHlCQUF5QjtNQUN6QixhQUFhO01BQ2IsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsbUJBQW1CLEVBQUE7RUEvSHZCO01Ba0lDLFdBQVcsRUFBQTtFQWxJWjtJQTJJSyxtQkFBa0I7SUFDbEIsa0JBQWlCLEVBQUE7RUE1SXRCO01BZ0pRLCtCQUE4QixFQUFBO0VBaEp0QztRQW1Kb0IscUNBQXFDO1FBQ2hELGtDQUFrQztRQUNsQyx5QkFBeUI7UUFDekIsY0FBYztRQUNkLDJCQUE0QjtRQUM1QixrQ0FBa0M7UUFDbEMsaUJBQWlCO1FBQ2pCLHFCQUFvQixFQUFBO0VBQ1U7VUEzSnZDO1lBNkpVLG9DQUFxQztZQUNqQyxrQ0FBa0MsRUFBQSxFQTJCeEM7RUF6TFI7VUFvS2Esb0NBQW9DLEVBQUE7RUFHeEM7VUF2S1Q7WUF5S2MsYUFBYTtZQUNoQixtQkFBbUI7WUFDbkIsa0NBQWtDLEVBQUEsRUFjckM7RUF6TFI7VUErS1MsNkJBQTZCO1VBQzdCLHFCQUFxQjtVQUNyQixrQ0FBa0M7VUFDbEMsb0RBQXFEO1VBQ3JELG1CQUFrQixFQUFBO0VBQ2hCO1lBcExYO2NBc0xVLG9EQUFxRCxFQUFBLEVBRXREO0VBeExUO0lBOExPLGFBQVk7SUFDWix5RUFBMkU7SUFDOUUscUNBQXFDLEVBQUE7RUFoTXpDO01Ba01RLGNBQWEsRUFBQTtFQWxNckI7SUF5TUEsVUFBVTtJQUNQLFNBQVM7SUFDVCxrQkFBaUIsRUFBQTtFQTNNcEI7TUE4TUksV0FBVTtNQUNQLGlCQUFpQixFQUFBO0VBL014QjtJQW1OQSxxQkFBb0IsRUFBQTtFQW5OcEI7SUFzTkEsVUFBUyxFQUFBO0VBdE5UO01Bd05DLG1CQUFtQjtNQUNoQixzQkFBc0IsRUFBQTtFQXpOMUI7TUE0TkMsMkJBQTBCLEVBQUE7RUE1TjNCO1FBOE5FLDZCQUE0QixFQUFBO0VBOU45QjtJQW9PQyw0QkFBMkIsRUFBQTtFQXBPNUI7SUF3T0csZUFBZSxFQUFBO0VBeE9sQjtNQTBPTyxhQUFhO01BQ2hCLG1CQUFtQjtNQUNuQiw2QkFBNkI7TUFDN0IsZUFBZTtNQUNmLG1CQUFtQixFQUFBO0VBOU92QjtNQWlQQyxlQUFlO01BQ1osYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsOEJBQThCO01BQzlCLHNCQUFzQjtNQUN0QixpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixrQkFBa0IsRUFBQTtFQTFQdEI7UUE0UFEsbUJBQW1CO1FBQ3RCLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCw2QkFBNkI7UUFDN0IsV0FBVyxFQUFBO0VBbFFoQjtRQXFRUSxjQUFjO1FBQ2pCLGVBQWU7UUFDZixrQkFBQTtRQUNBLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQixrQkFBa0IsRUFBQTtFQTVRdkI7TUFpUkUsZUFBYyxFQUFBO0VBalJoQjtJQXVSQSxzQkFBcUIsRUFBQTtFQXZSckI7TUEyUkcsaUJBQWlCO01BQ2Qsa0NBQWtDO01BQ3JDLGlDQUFtQztNQUNuQyxnQ0FBZ0M7TUFDOUIsb0JBQW9CLEVBQUE7RUEvUnpCO1FBaVNLLFlBQVcsRUFBQTtFQWpTaEI7VUFvU1Esa0NBQWtDO1VBQ3JDLGdCQUFnQjtVQUNiLG1EQUFvRDtVQUN2RCx5QkFBeUI7VUFDekIsV0FBVztVQUNWLFlBQVcsRUFBQTtFQXpTakI7VUE2U1MsV0FBVztVQUNkLHVCQUF1QjtVQUN2Qix3QkFBdUI7VUFDdkIsb0NBQW9DO1VBQ3BDLGtCQUFrQjtVQUNsQixnQ0FBZ0M7VUFDaEMsa0NBQWtDO1VBQ2xDLDZCQUE0QixFQUFBO0VBcFRsQztJQTBUQSxXQUFXO0lBQ1IsaUJBQWlCO0lBQ2pCLFlBQVksRUFBQTtFQTVUZjtJQWdVQyx3Q0FBZ0M7WUFBaEMsZ0NBQWdDLEVBQUE7RUFoVWpDO0lBc1ZBLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1IsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQixFQUFBO0VBNVZ0QjtNQThWQyxXQUFXO01BQ1IsbUJBQWtCO01BQ2xCLFlBQVk7TUFDWixZQUFXLEVBQUE7RUFqV2Y7SUF1V0Msd0NBQWdDO1lBQWhDLGdDQUFnQztJQUM3QixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFnQixFQUFBO0VBMVdwQjtJQTZXSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0VBL1dwQjtJQTBYSSx1Q0FBZ0I7SUFDaEIsb0NBQWM7SUFDZCxxQ0FBYztJQUNkLHdDQUFpQjtJQUNqQiwyQ0FBMkM7SUFDMUMsbUNBQXFDLEVBQUE7RUFDckM7TUFoWUw7UUFpWU8sOENBQTZDO1FBQzFDLGFBQWE7UUFDaEIsa0NBQW9DLEVBQUEsRUE0RXJDO0VBL2NOO01BMFlJOzs7OzJDQ2xJc0MsRURzSUM7RUFSbkM7UUF0WVI7VUF3WVUsWUFBWSxFQUFBLEVBT2xCO0VBL1lKO01BaVpPLFdBQVcsRUFBQTtFQWpabEI7UUFvWkssK0JBQThCO1FBQzlCLHFDQUFvQztRQUNwQyxrQ0FBaUM7UUFDakMsZ0JBQWU7UUFDZCxrQ0FBa0MsRUFBQTtFQUNsQztVQXpaTjtZQTJaTSxrQ0FBaUMsRUFBQSxFQUVsQztFQTdaTDtRQWdhTSxxQ0FBb0M7UUFDcEMsa0NBQWlDO1FBQ2pDLGdCQUFlO1FBQ2Ysa0NBQWtDLEVBQUE7RUFDakM7VUFwYVA7WUFzYU0sa0NBQWlDLEVBQUEsRUFZbEM7RUFsYkw7VUEwYU0sK0JBQThCLEVBQUE7RUExYXBDO1VBOGFVLDZCQUE2QjtVQUNoQyw4QkFBK0I7VUFDL0IsK0JBQThCLEVBQUE7RUFoYnJDO1FBdWJTLGNBQWEsRUFBQTtFQXZidEI7VUEwYk8sOEJBQTZCLEVBQUE7RUFFN0I7VUE1YlA7WUE4Yk0sa0NBQWlDLEVBQUEsRUFFakM7RUFoY047TUFzY08sc0NBQWdCO01BQ2hCLHNDQUFnQjtNQUNoQixvQ0FBYztNQUNkLDJCQUE0QjtNQUM1QixtRkFBb0Y7TUFDcEYsa0NBQW9DO01BQ3BDLG1DQUFnQjtNQUNoQixrQkFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGlvbi1jb250ZW50XHJcbnsgIFxyXG5cdC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZ3JleSk7XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxyXG5cdHtcclxuXHQgICAtLXBhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdH1cclxuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHR7XHJcblx0ICAgLS1wYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHQgICAtLXBhZGRpbmctYm90dG9tOnZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdCAgIC0tcGFkZGluZy1zdGFydDp2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHQgICAtLXBhZGRpbmctZW5kOnZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdH1cclxuIC8qICBXaXNobGlzdCBQYWdlICAgU3RhcnQqL1xyXG4gW215LXdpc2hsaXN0LXBhZ2VdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsLjA4KTtcclxuICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR0YWJsZVxyXG5cdHsgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdHRyXHJcblx0XHR7XHQgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHR0ZFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmVydGljYWwtYWxpZ246bWlkZGxlOyAgIFxyXG5cdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcclxuXHRcdFx0XHQmW2Nsb3NlLWJ0bl1cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQgICBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAge1x0XHRcdFx0XHQgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7IFxyXG5cdFx0XHRcdFx0XHQgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFtwcm9kdWN0LW5hbWVdXHJcblx0XHRcdFx0eyAgICAgXHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XHJcblx0XHRcdFx0XHQgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcdFx0XHJcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy02KTtcclxuXHRcdFx0XHQgICAgYVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ICAgIGNvbG9yOiAjNDM0MzQzO1xyXG5cdFx0XHRcdFx0XHQgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdH0gXHJcblx0XHRcdFx0IFtwcmljZV1cclxuXHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0ICAgICBjb2xvcjogIHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcclxuXHRcdFx0XHRcdFx0IGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XHJcblx0XHRcdFx0XHRcdCBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctNCk7XHJcblx0XHRcdFx0XHRcdCBmb250LXdlaWdodDo3MDA7XHJcblx0XHRcdFx0XHRcdCBzcGFuXHJcblx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgXHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWx0Z3JleSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcclxuXHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdCAgIHBcclxuXHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHQgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKCAgLS1pb24tY29sb3ItZGFya2JsYWNrKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1x0XHJcblx0XHRcdFx0XHQmW3ZlbmRvci1uYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgIHsgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblx0XHRcdFx0XHQgICBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAge1x0XHRcdFx0XHQgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHJcblx0XHRcdFx0XHRcdCAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxyXG5cdFx0XHRcdCAgIH1cclxuXHRcdFx0XHQgICBbcmF0aW5nXVxyXG5cdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdCAgIGlvbi1pY29uXHJcblx0XHRcdFx0XHQgICB7ICAgY29sb3I6I2RjZGNkYztcclxuXHRcdFx0XHRcdFx0ICAgJltmaWxsZWRdXHJcblx0XHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0XHQgICBjb2xvcjp2YXIoLS1pb24tY29sb3IteWVsbG93KTtcclxuXHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0ICAgLnJldmlld1xyXG5cdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRpb24tYnV0dG9uXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0LS1ib3gtc2hhZG93Om5vbmU7XHJcblx0XHRcdFx0XHQgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1x0XHRcclxuXHRcdFx0XHRcdCAgIGJvcmRlci1yYWRpdXM6dmFyKC0taW9uLXZhbHVlLTApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG59XHJcblxyXG4uc2hhcmVkRGl2e1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHotaW5kZXg6IDg4ODg4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIyMmYzZTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgYSB7XHJcbiAgICBcdGZsb2F0OiByaWdodDtcclxuXHQgICAgcGFkZGluZzogNnB4IDEwcHg7XHJcblx0ICAgIGJhY2tncm91bmQ6ICNhMDI3MTg7XHJcblx0ICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0ICAgIG1hcmdpbjogN3B4O1xyXG5cdCAgICBjb2xvcjogI2ZmZjtcclxuXHR9XHJcblx0c3BhbiB7XHJcblx0ICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XHJcblx0ICAgIHBhZGRpbmc6IDE3cHg7XHJcblx0ICAgIG1hcmdpbjogNnB4IDhweDtcclxuXHQgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdCAgICB3aWR0aDogOTAlO1xyXG5cdCAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG5cdH1cclxuXHRoNHtcclxuXHRcdG1hcmdpbjogOHB4O1xyXG5cdH1cclxufVxyXG5cclxuW3BhbmVsXVxyXG5cdFx0XHQgIHtcclxuXHRcdFx0XHRcdFtwYW5lbC1oZWFkaW5nXXtcclxuXHRcdFx0XHRcdCAgICAmW2NoZWNrb3V0LWhlYWRdXHJcblx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6I2Y1ZjVmNTtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0IGg0XHJcblx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0ICBtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0IGFcclxuXHRcdFx0XHRcdFx0XHQgeyAgICAgICAgICBcclxuICAgXHRcdFx0XHRcdFx0XHQgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogIHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAgdmFyKC0taW9uLXBhZGRpbmctMTApIDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1x0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCYuYWN0aXZlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgc3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHQgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdCBzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tMTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMjApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6I2FhYWFhYTtcdCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogIHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0xNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCBbcGFuZWwtYm9keV1cclxuXHRcdFx0IHsgICBkaXNwbGF5Om5vbmU7XHJcblx0XHRcdCAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTApICB2YXIoLS1pb24tcGFkZGluZy0wKSAgdmFyKC0taW9uLXBhZGRpbmctMjIpOyAgXHJcblx0XHRcdFx0IGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdCAgJi5hY3RpdmVcclxuXHRcdFx0ICAgeyAgZGlzcGxheTpibG9jaztcclxuXHRcdFx0XHRcdFx0ICBcclxuXHRcdFx0ICAgfVxyXG5cdFx0XHQgfVxyXG5cdCAgfVxyXG5cclxuW3JpdEFjdGlvbnNde1xyXG5cdHJpZ2h0OiAzcHg7XHJcbiAgICB0b3A6IC00cHg7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgXHR3aWR0aDoyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG59XHJcbltwYW5lbC1ib2R5XXtcclxuXHRwYWRkaW5nOjAgIWltcG9ydGFudDtcclxufVxyXG5bcHJvZHVjdHNkaXZde1xyXG5cdHBhZGRpbmc6MDtcclxuXHQuaXRlbS1uYXRpdmV7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG5cdH1cclxuXHRpb24taXRlbXtcclxuXHRcdGJveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0aW9uLXRodW1ibmFpbHtcclxuXHRcdFx0bWFyZ2luOjAgMTVweCAwIDAgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLnN0YXJzLWxpbmV7XHJcblx0aS5mYS5mYS1zdGFye1xyXG5cdFx0bWFyZ2luLXJpZ2h0OjNweCAhaW1wb3J0YW50O1xyXG5cdH1cclxufVxyXG5bbWFpblNlY1dpc2hsaXN0XXtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIFt3aXNobGlzdGxpc3Rde1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0ICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG5cdCAgICBwYWRkaW5nOiAxMHB4IDA7XHJcblx0ICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblx0W2NhdEhkbmdde1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdCAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdCAgICBmb250LXdlaWdodDogNjAwO1xyXG5cdCAgICBjb2xvcjogIzIzMzAzZTtcclxuXHQgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdCAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG5cdCAgICBwYWRkaW5nOiAwcHggMTNweDtcclxuXHQgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuXHQgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG5cdCAgICBbYnVsbGV0c117XHJcbiAgICBcdCAgICBiYWNrZ3JvdW5kOiAjYTAyNzE4O1xyXG5cdFx0ICAgIHBhZGRpbmc6IDEycHggMTlweDtcclxuXHRcdCAgICBsZWZ0OiAwcHg7XHJcblx0XHQgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ICAgIG1hcmdpbjogMDtcclxuXHRcdCAgICBtYXJnaW4tbGVmdDogLTE0cHggIWltcG9ydGFudDtcclxuXHRcdCAgICBjb2xvcjogI2ZmZjtcclxuXHQgICAgfVxyXG5cdCAgICBbc2hhcmVkVGl0bGVde1xyXG4gICAgXHQgICAgY29sb3I6ICNmZmZmZmY7XHJcblx0XHQgICAgZm9udC1zaXplOiAxM3B4O1xyXG5cdFx0ICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuXHRcdCAgICByaWdodDogMjIlO1xyXG5cdFx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdCAgICBiYWNrZ3JvdW5kOiAjMjIyZjNlYmY7XHJcblx0XHQgICAgcGFkZGluZzogNHB4IDE2cHg7XHJcblx0XHQgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdCAgICB9XHJcblx0fVxyXG5cdFtwcm9pbWdde1xyXG5cdFx0aW1ne1xyXG5cdFx0XHRtYXgtd2lkdGg6NzBweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbltzdWJIZG5nXXtcclxuXHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcblxyXG5cdFx0W2hlYWRpbmctdGl0bGVdIHtcclxuXHRcdFx0XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdCAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMjIpO1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoICAtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCAjZTVlNWU1IHNvbGlkO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuXHRcdFx0XHRbc3JjaC1maWx0ZXJdXHJcblx0XHRcdFx0eyBmbG9hdDpyaWdodDtcclxuXHRcdFx0XHRcdFtzZWFyY2gtaW5wdXRdXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHQgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdCAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy01KSAgdmFyKC0taW9uLXBhZGRpbmctMTUpO1xyXG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xyXG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6MzJweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFtzZWFyY2gtYnV0dG9uXVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQgICAgZmxvYXQ6IGxlZnQ7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IHZhcigtLWlvbi13aC0zMik7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OnZhcigtLWlvbi13aC0zMik7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTMyKTtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTYpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHQgICAgICAgIH1cdCAgXHJcblx0XHR9XHJcblx0fVxyXG5bYWRkTmV3V2lzaGxpc3Rde1xyXG5cdHdpZHRoOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAtMTRweCAwIDA7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuW3JpdEFjdGlvbnMyXXtcclxuXHRpb24tY2hlY2tib3h7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgOXB4KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4gLyogIFdpc2hsaXN0IFBhZ2UgICBFbmRzKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLypcclxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0IFx0TW9iaWxlIFdpc2hsaXN0IFN0YXJ0XHJcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuXHJcbmgzLm1haW5XaXNoSGRuZ3tcclxuXHRtYXJnaW46IDAgMCAxMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFthZGRuZXd3aXNobGlzdEFwcF17XHJcblx0XHR3aWR0aDogMzBweDtcclxuXHQgICAgbWFyZ2luOjBweCAwIDAgNHB4O1xyXG5cdCAgICBoZWlnaHQ6IDMwcHg7XHJcblx0ICAgIGZsb2F0OnJpZ2h0O1xyXG5cdH1cclxufVxyXG5cclxuW3JpdEFjdGlvbnNde1xyXG5cdGlvbi1jaGVja2JveHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDExcHgpO1xyXG5cdCAgICB3aWR0aDogMzBweDtcclxuXHQgICAgaGVpZ2h0OiAzMHB4O1xyXG5cdCAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcclxuXHR9XHJcblx0aW9uLWJ1dHRvbntcclxuXHQgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcblx0ICAgIGhlaWdodDogMzBweDtcclxuXHQgICAgbWFyZ2luLXRvcDogLTRweDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIFt3aXNobGlzdC1tb2JdXHJcbnsgXHJcblx0XHQgW3dpc2hsaXN0LWl0ZW1zXVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0aW9uLWl0ZW17XHJcblx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IHZhciggLS1pb24tcGFkZGluZy0xMCk7XHJcblx0XHRcdFx0XHQtLXBhZGRpbmctZW5kOiB2YXIoIC0taW9uLXBhZGRpbmctMCk7XHJcblx0XHRcdFx0XHQtLXBhZGRpbmctdG9wOiB2YXIoIC0taW9uLXBhZGRpbmctMTApO1xyXG5cdFx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogdmFyKCAtLWlvbi1wYWRkaW5nLTEwKTtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206ICB2YXIoIC0taW9uLW1hcmdpbi0xMCk7XHJcblx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0e1x0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogIHZhciggLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGlvbi10aHVtYm5haWxcclxuXHRcdFx0XHR7ICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdCAgICBoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHQgLypcclxuXHRcdFx0XHRcdFx0d2lkdGg6IHZhciggLS1pb24tdmFsdWUtOTApO1xyXG5cdFx0XHRcdFx0ICAgaGVpZ2h0OiB2YXIoIC0taW9uLXZhbHVlLTkwKTtcclxuXHRcdFx0XHRcdCAgbWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0ICAgbWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLTApOyovXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxhYmVsXHJcblx0XHRcdFx0eyAgIHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0aDNcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6NzAwO1xyXG5cdFx0XHRcdFx0XHQgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0zKTtcclxuXHRcdFx0XHRcdFx0IEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IFxyXG5cdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0W3ByaWNlLW1haW5dXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdCBmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcblx0XHRcdFx0XHRcdCBmb250LXdlaWdodDo2MDA7XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdCBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTMpO1xyXG5cdFx0XHRcdFx0XHQgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IFxyXG5cdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHQgW3ByaWNlXVxyXG5cdFx0XHRcdFx0XHQgeyAgXHRcdFx0XHRcdFx0ICAgICBcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHJcblx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdCAgW3ByaWNlLWRpc2NvdW50XVxyXG5cdFx0XHRcdFx0XHQgeyAgXHJcblx0XHRcdFx0XHRcdCAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcblx0XHRcdFx0XHRcdFx0IGNvbG9yOnZhciggIC0taW9uLWNvbG9yLWx0Z3JleSk7XHJcblx0XHRcdFx0XHRcdFx0IG1hcmdpbi1sZWZ0OnZhcigtLWlvbi12YWx1ZS01KTtcclxuXHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFtyYXRpbmddXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlvbi1pY29uXHJcblx0XHRcdFx0XHRcdHsgIFxyXG5cdFx0XHRcdFx0XHQgICAgY29sb3I6I2QzZDNkMztcclxuXHRcdFx0XHRcdFx0XHQmW2ZpbGxlZF1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3IteWVsbG93KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0IEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IFxyXG5cdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aW9uLWJ1dHRvblxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiB2YXIoIC0taW9uLXBhZGRpbmctNCk7XHJcblx0XHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IHZhciggLS1pb24tcGFkZGluZy00KTtcclxuXHRcdFx0XHRcdFx0XHRcdC0tcGFkZGluZy1lbmQ6IHZhciggLS1pb24tcGFkZGluZy00KTtcclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogdmFyKCAtLWlvbi12YWx1ZS0yMik7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46dmFyKC0taW9uLXZhbHVlLTApICB2YXIoLS1pb24tdmFsdWUtMCkgIHZhcigtLWlvbi12YWx1ZS0wKSB2YXIoLS1pb24tdmFsdWUtNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6ICB2YXIoIC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcblx0XHRcdFx0XHRcdFx0XHQtLWJvcmRlci1yYWRpdXM6dmFyKCAtLWlvbi12YWx1ZS0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdC0tYm9yZGVyLXdpZHRoOjFweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0ICAgfVxyXG5cdFx0fVxyXG59XHRcdFxyXG4gLyogTW9iaWxlIFdpc2hsaXN0IEVuZHMqL1xyXG59XHRcclxuXHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5KTtcbiAgLyogIFdpc2hsaXN0IFBhZ2UgICBTdGFydCovXG4gIC8qICBXaXNobGlzdCBQYWdlICAgRW5kcyovXG4gIC8qXHJcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCBcdE1vYmlsZSBXaXNobGlzdCBTdGFydFxyXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXG4gIC8qIE1vYmlsZSBXaXNobGlzdCBFbmRzKi8gfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgLS1wYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZy0wKTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAtLXBhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZy0wKTtcbiAgICAgIC0tcGFkZGluZy1zdGFydDp2YXIoLS1pb24tcGFkZGluZy0wKTtcbiAgICAgIC0tcGFkZGluZy1lbmQ6dmFyKC0taW9uLXBhZGRpbmctMCk7IH0gfVxuICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMCk7IH1cbiAgICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB0ciB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHRyIHRkIHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KTsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB0ciB0ZFtjbG9zZS1idG5dIGEge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB0ciB0ZCBbcHJvZHVjdC1uYW1lXSB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTYpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy02KTsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHRyIHRkIFtwcm9kdWN0LW5hbWVdIGEge1xuICAgICAgICAgICAgICBjb2xvcjogIzQzNDM0MztcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHRyIHRkIFtwcmljZV0ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctNCk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwOyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIgdGQgW3ByaWNlXSBzcGFuIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE1KTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sdGdyZXkpO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZy0xMCk7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIgdGQgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHRyIHRkIHBbdmVuZG9yLW5hbWVdIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDsgfVxuICAgICAgICAgICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIgdGQgcFt2ZW5kb3ItbmFtZV0gYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIgdGQgW3JhdGluZ10gaW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6ICNkY2RjZGM7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB0ciB0ZCBbcmF0aW5nXSBpb24taWNvbltmaWxsZWRdIHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci15ZWxsb3cpOyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHRyIHRkIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgLS1ib3gtc2hhZG93Om5vbmU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTApOyB9XG4gIGlvbi1jb250ZW50IC5zaGFyZWREaXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDQwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICB6LWluZGV4OiA4ODg4ODtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIyMmYzZTtcbiAgICBoZWlnaHQ6IDMwJTsgfVxuICAgIGlvbi1jb250ZW50IC5zaGFyZWREaXYgYSB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNhMDI3MTg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgbWFyZ2luOiA3cHg7XG4gICAgICBjb2xvcjogI2ZmZjsgfVxuICAgIGlvbi1jb250ZW50IC5zaGFyZWREaXYgc3BhbiB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZGVkO1xuICAgICAgcGFkZGluZzogMTdweDtcbiAgICAgIG1hcmdpbjogNnB4IDhweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwOyB9XG4gICAgaW9uLWNvbnRlbnQgLnNoYXJlZERpdiBoNCB7XG4gICAgICBtYXJnaW46IDhweDsgfVxuICBpb24tY29udGVudCBbcGFuZWxdIFtwYW5lbC1oZWFkaW5nXVtjaGVja291dC1oZWFkXSB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICBpb24tY29udGVudCBbcGFuZWxdIFtwYW5lbC1oZWFkaW5nXVtjaGVja291dC1oZWFkXSBoNCB7XG4gICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTApOyB9XG4gICAgICBpb24tY29udGVudCBbcGFuZWxdIFtwYW5lbC1oZWFkaW5nXVtjaGVja291dC1oZWFkXSBoNCBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbi0wKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3BhbmVsXSBbcGFuZWwtaGVhZGluZ11bY2hlY2tvdXQtaGVhZF0gaDQgYSB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZy0xMCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpOyB9IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3BhbmVsXSBbcGFuZWwtaGVhZGluZ11bY2hlY2tvdXQtaGVhZF0gaDQgYS5hY3RpdmUgc3BhbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpOyB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICBpb24tY29udGVudCBbcGFuZWxdIFtwYW5lbC1oZWFkaW5nXVtjaGVja291dC1oZWFkXSBoNCBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFtwYW5lbF0gW3BhbmVsLWhlYWRpbmddW2NoZWNrb3V0LWhlYWRdIGg0IGEgc3BhbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbi0xMCk7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYWFhYWFhOyB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3BhbmVsXSBbcGFuZWwtaGVhZGluZ11bY2hlY2tvdXQtaGVhZF0gaDQgYSBzcGFuIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTE1KTsgfSB9XG4gIGlvbi1jb250ZW50IFtwYW5lbF0gW3BhbmVsLWJvZHldIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEwKSB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0yMik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTsgfVxuICAgIGlvbi1jb250ZW50IFtwYW5lbF0gW3BhbmVsLWJvZHldLmFjdGl2ZSB7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxuICBpb24tY29udGVudCBbcml0QWN0aW9uc10ge1xuICAgIHJpZ2h0OiAzcHg7XG4gICAgdG9wOiAtNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAgIGlvbi1jb250ZW50IFtyaXRBY3Rpb25zXSBpb24tYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cbiAgaW9uLWNvbnRlbnQgW3BhbmVsLWJvZHldIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IH1cbiAgaW9uLWNvbnRlbnQgW3Byb2R1Y3RzZGl2XSB7XG4gICAgcGFkZGluZzogMDsgfVxuICAgIGlvbi1jb250ZW50IFtwcm9kdWN0c2Rpdl0gLml0ZW0tbmF0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyB9XG4gICAgaW9uLWNvbnRlbnQgW3Byb2R1Y3RzZGl2XSBpb24taXRlbSB7XG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgICAgIGlvbi1jb250ZW50IFtwcm9kdWN0c2Rpdl0gaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCB7XG4gICAgICAgIG1hcmdpbjogMCAxNXB4IDAgMCAhaW1wb3J0YW50OyB9XG4gIGlvbi1jb250ZW50IC5zdGFycy1saW5lIGkuZmEuZmEtc3RhciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHggIWltcG9ydGFudDsgfVxuICBpb24tY29udGVudCBbbWFpblNlY1dpc2hsaXN0XSB7XG4gICAgcGFkZGluZzogMCAyMHB4OyB9XG4gICAgaW9uLWNvbnRlbnQgW21haW5TZWNXaXNobGlzdF0gW3dpc2hsaXN0bGlzdF0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbiAgICBpb24tY29udGVudCBbbWFpblNlY1dpc2hsaXN0XSBbY2F0SGRuZ10ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzIzMzAzZTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBwYWRkaW5nOiAwcHggMTNweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4OyB9XG4gICAgICBpb24tY29udGVudCBbbWFpblNlY1dpc2hsaXN0XSBbY2F0SGRuZ10gW2J1bGxldHNdIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2EwMjcxODtcbiAgICAgICAgcGFkZGluZzogMTJweCAxOXB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTE0cHggIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cbiAgICAgIGlvbi1jb250ZW50IFttYWluU2VjV2lzaGxpc3RdIFtjYXRIZG5nXSBbc2hhcmVkVGl0bGVdIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xuICAgICAgICByaWdodDogMjIlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjJmM2ViZjtcbiAgICAgICAgcGFkZGluZzogNHB4IDE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgfVxuICAgIGlvbi1jb250ZW50IFttYWluU2VjV2lzaGxpc3RdIFtwcm9pbWddIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDcwcHg7IH1cbiAgaW9uLWNvbnRlbnQgW3N1YkhkbmddIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgaW9uLWNvbnRlbnQgW3N1YkhkbmddIFtoZWFkaW5nLXRpdGxlXSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0yMik7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggI2U1ZTVlNSBzb2xpZDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNHB4OyB9XG4gICAgICBpb24tY29udGVudCBbc3ViSGRuZ10gW2hlYWRpbmctdGl0bGVdIFtzcmNoLWZpbHRlcl0ge1xuICAgICAgICBmbG9hdDogcmlnaHQ7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3N1YkhkbmddIFtoZWFkaW5nLXRpdGxlXSBbc3JjaC1maWx0ZXJdIFtzZWFyY2gtaW5wdXRdIHtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctNSkgdmFyKC0taW9uLXBhZGRpbmctMTUpO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4OyB9XG4gICAgICAgIGlvbi1jb250ZW50IFtzdWJIZG5nXSBbaGVhZGluZy10aXRsZV0gW3NyY2gtZmlsdGVyXSBbc2VhcmNoLWJ1dHRvbl0ge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIHdpZHRoOiB2YXIoLS1pb24td2gtMzIpO1xuICAgICAgICAgIGhlaWdodDogdmFyKC0taW9uLXdoLTMyKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMzIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7IH1cbiAgaW9uLWNvbnRlbnQgW2FkZE5ld1dpc2hsaXN0XSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luOiAtMTRweCAwIDA7XG4gICAgaGVpZ2h0OiAzMHB4OyB9XG4gIGlvbi1jb250ZW50IFtyaXRBY3Rpb25zMl0gaW9uLWNoZWNrYm94IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgOXB4KTsgfVxuICBpb24tY29udGVudCBoMy5tYWluV2lzaEhkbmcge1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICBpb24tY29udGVudCBoMy5tYWluV2lzaEhkbmcgW2FkZG5ld3dpc2hsaXN0QXBwXSB7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIG1hcmdpbjogMHB4IDAgMCA0cHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBmbG9hdDogcmlnaHQ7IH1cbiAgaW9uLWNvbnRlbnQgW3JpdEFjdGlvbnNdIGlvbi1jaGVja2JveCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMTFweCk7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4OyB9XG4gIGlvbi1jb250ZW50IFtyaXRBY3Rpb25zXSBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogLTRweDsgfVxuICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IHZhciggLS1pb24tcGFkZGluZy0xMCk7XG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKCAtLWlvbi1wYWRkaW5nLTApO1xuICAgIC0tcGFkZGluZy10b3A6IHZhciggLS1pb24tcGFkZGluZy0xMCk7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKCAtLWlvbi1wYWRkaW5nLTEwKTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApOyB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMCk7IH0gfVxuICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCB7XG4gICAgICAvKlxyXG5cdFx0XHRcdFx0XHR3aWR0aDogdmFyKCAtLWlvbi12YWx1ZS05MCk7XHJcblx0XHRcdFx0XHQgICBoZWlnaHQ6IHZhciggLS1pb24tdmFsdWUtOTApO1xyXG5cdFx0XHRcdFx0ICBtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHQgICBtYXJnaW4tYm90dG9tOnZhcigtLWlvbi1tYXJnaW4tMCk7Ki8gfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIGlvbi10aHVtYm5haWwge1xuICAgICAgICAgIGhlaWdodDogMTAwJTsgfSB9XG4gICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCB7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCBoMyB7XG4gICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMyk7IH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gbGFiZWwgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgfSB9XG4gICAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIFtwcmljZS1tYWluXSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMyk7IH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gbGFiZWwgW3ByaWNlLW1haW5dIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IH0gfVxuICAgICAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIFtwcmljZS1tYWluXSBbcHJpY2VdIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpOyB9XG4gICAgICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gbGFiZWwgW3ByaWNlLW1haW5dIFtwcmljZS1kaXNjb3VudF0ge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbHRncmV5KTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLXZhbHVlLTUpOyB9XG4gICAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIFtyYXRpbmddIGlvbi1pY29uIHtcbiAgICAgICAgY29sb3I6ICNkM2QzZDM7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCBbcmF0aW5nXSBpb24taWNvbltmaWxsZWRdIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXllbGxvdyk7IH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gbGFiZWwgW3JhdGluZ10gaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgfSB9XG4gICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSBpb24tYnV0dG9uIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKCAtLWlvbi1wYWRkaW5nLTQpO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoIC0taW9uLXBhZGRpbmctNCk7XG4gICAgICAtLXBhZGRpbmctZW5kOiB2YXIoIC0taW9uLXBhZGRpbmctNCk7XG4gICAgICBoZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0yMik7XG4gICAgICBtYXJnaW46IHZhcigtLWlvbi12YWx1ZS0wKSB2YXIoLS1pb24tdmFsdWUtMCkgdmFyKC0taW9uLXZhbHVlLTApIHZhcigtLWlvbi12YWx1ZS01KTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6dmFyKCAtLWlvbi12YWx1ZS0wKTtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOjFweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/wishlist/wishlist.page.ts":
/*!*******************************************!*\
  !*** ./src/app/wishlist/wishlist.page.ts ***!
  \*******************************************/
/*! exports provided: WishlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPage", function() { return WishlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _update_wishlist_update_wishlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../update-wishlist/update-wishlist.page */ "./src/app/update-wishlist/update-wishlist.page.ts");







var WishlistPage = /** @class */ (function () {
    function WishlistPage(userService, toastController, loadingController, router, events, alertController, modalController) {
        var _this = this;
        this.userService = userService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.router = router;
        this.events = events;
        this.alertController = alertController;
        this.modalController = modalController;
        this.selectedItem = [];
        this.errors = ['', null, undefined];
        this.showShareDiv = false;
        this.publicUrl = '';
        this.guestUserId = localStorage.getItem('guestUserId');
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_4__["config"].IMAGES_URL;
        events.subscribe('wish-list:true', function (data) {
            _this.getWishList();
        });
    }
    WishlistPage.prototype.ngOnInit = function () {
    };
    WishlistPage.prototype.ionViewDidEnter = function () {
        var token = localStorage.getItem('sin_auth_token');
        this.userId = this.userService.decryptData(token, _config__WEBPACK_IMPORTED_MODULE_4__["config"].ENC_SALT);
        this.getCartProductsIds();
    };
    WishlistPage.prototype.getCartProductsIds = function () {
        var _this = this;
        this.presentLoading();
        this.userService.postData({ user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId }, 'getCartProductsIds').subscribe(function (result) {
            _this.my_cart_products = result.products;
            _this.getWishList();
        }, function (err) {
            _this.getWishList();
            _this.my_cart_products = [];
        });
    };
    WishlistPage.prototype.getWishList = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId }, 'getWishlist').subscribe(function (result) {
            _this.stopLoading();
            console.log(result);
            _this.wishlist = result.data;
            _this.all_wishlist = result.data;
        }, function (err) {
            _this.stopLoading();
            _this.wishlist = [];
            _this.all_wishlist = [];
        });
    };
    WishlistPage.prototype.searchWishlist = function (ev) {
        console.log(ev);
        this.wishlist = this.all_wishlist;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.wishlist = this.wishlist.filter(function (item) {
                return (item.product_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    WishlistPage.prototype.addToCart = function (product_id, product_sale_price, product_purchase_price) {
        var _this = this;
        // alert(product_id+'--'+product_sale_price+'--'+product_purchase_price);
        // if(this.userId == 0){
        //   this.router.navigate(['/login']);
        // }
        // else{
        this.presentLoading();
        var proVariation = [];
        var dict = {
            'product_id': product_id,
            'product_price': product_sale_price,
            'is_variation': 0,
            'product_variations': proVariation,
            'user_id': this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId,
            'product_qty': '1'
        };
        this.userService.postData(dict, 'addTocart').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.my_cart_products.push(product_id);
                var p_price;
                if (_this.errors.indexOf(product_sale_price) == -1 && product_sale_price != product_purchase_price) {
                    p_price = product_sale_price;
                }
                else {
                    p_price = product_purchase_price;
                }
                _this.events.publish('cart_updated:true', { items_in_cart: _this.my_cart_products.length, cart_price: p_price, isAdd: true });
                _this.presentToast('Product added to cart.', 'success');
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
    WishlistPage.prototype.removeWishlist = function (index, wid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Are you sure you want to remove this product from wishlist?',
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
                                        _this.userService.postData({ wish_id: wid }, 'removeWishlistProduct').subscribe(function (result) {
                                            _this.stopLoading();
                                            if (result.status == 1) {
                                                _this.wishlist.splice(index, 1);
                                                _this.presentToast('Product removed from wishlist.', 'success');
                                            }
                                            else {
                                                _this.presentToast('Error,Please try after some time.', 'danger');
                                            }
                                        }, function (err) {
                                            _this.stopLoading();
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
    WishlistPage.prototype.presentToast = function (message, color) {
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
    WishlistPage.prototype.presentLoading = function () {
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
    WishlistPage.prototype.stopLoading = function () {
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
    WishlistPage.prototype.faqClicked = function (index) {
        if (this.selectedItem.indexOf(index) == -1) {
            this.selectedItem.push(index);
        }
        else {
            this.selectedItem.splice(this.selectedItem.indexOf(index), 1);
        }
    };
    WishlistPage.prototype.share = function (item, index) {
        console.log(item);
        if (item.wish_full_address == null) {
            this.presentAlertPromptAddress(item, index);
        }
        else {
            if (item.products.length > 0) {
                this.presentAlertPrompt(item, index);
            }
            else {
                this.presentToast('To share the wishlist, Please add atleast one product.', 'danger');
            }
        }
    };
    WishlistPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    WishlistPage.prototype.presentAlertPrompt = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sharedUrl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                sharedUrl = 'http://siniyetu.tk/#/public-wishlist?' + item.wish_id;
                console.log('shared url' + sharedUrl);
                this.showShareDiv = true;
                this.publicUrl = sharedUrl;
                return [2 /*return*/];
            });
        });
    };
    ;
    WishlistPage.prototype.closePopUp = function () {
        this.showShareDiv = false;
    };
    WishlistPage.prototype.shareWishListWithAnotherUser = function (dict, index) {
        var _this = this;
        this.presentLoading();
        this.userService.postData(dict, 'shareWishlist').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.presentToast('Wishlist has been shared succesfully.', 'success');
                _this.getWishList();
                //this.modalCtrl.dismiss();
            }
            else {
                if (dict.email == null) {
                    _this.presentToast('Error,There is no user associated with this contact number.', 'danger');
                }
                else {
                    _this.presentToast('Error,There is no user associated with this email address.', 'danger');
                }
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    ;
    WishlistPage.prototype.deleteWishlist = function (wish_id) {
        console.log(wish_id);
        this.presentAlertPromptDelete(wish_id);
    };
    WishlistPage.prototype.presentAlertPromptDelete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm! Delete wishlist',
                            message: 'Are you sure, you want to delete selected wishlist?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.presentLoading();
                                        _this.userService.postData({ wish_id: id }, 'deleteWishlist').subscribe(function (result) {
                                            _this.stopLoading();
                                            if (result.status == 1) {
                                                _this.presentToast('Wishlist has been deleted succesfully.', 'success');
                                                _this.getWishList();
                                                //this.modalCtrl.dismiss();
                                            }
                                            else {
                                                _this.presentToast('Error,Please try after some time.', 'danger');
                                            }
                                        }, function (err) {
                                            _this.stopLoading();
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
    ;
    WishlistPage.prototype.presentAlertPromptAddress = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Wishlist Address',
                            message: 'Are you sure, you want to share selected wishlist?Please add address for selected wishlist.',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.addAddressForWishlist(item, index);
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
    ;
    WishlistPage.prototype.addAddressForWishlist = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        localStorage.setItem('wishlist', JSON.stringify(item));
                        return [4 /*yield*/, this.modalController.create({
                                component: _update_wishlist_update_wishlist_page__WEBPACK_IMPORTED_MODULE_6__["UpdateWishlistPage"],
                                componentProps: { value: item.wish_id }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            // Here's your selected user!
                            console.log(data);
                            if (data != '') {
                                if (item.products.length > 0) {
                                    _this.presentAlertPrompt(item, index);
                                }
                                else {
                                    _this.presentToast('To share the wishlist, Please add atleast one product.', 'danger');
                                }
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    WishlistPage.prototype.placeOrder = function (item) {
        if (item.wish_full_address == null) {
            this.addAddressForWishlist(item, null);
        }
        else if (item.products.length > 0) {
            localStorage.setItem('wishlist', JSON.stringify(item));
            this.router.navigate(['/wishlist-checkout']);
        }
        else {
            this.presentToast('To share the wishlist, Please add atleast one product.', 'danger');
        }
    };
    WishlistPage.prototype.removeProduct = function (wish_id, product_id) {
        this.presentAlertPromptDeleteProduct(wish_id, product_id);
    };
    WishlistPage.prototype.presentAlertPromptDeleteProduct = function (wish_id, product_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm! Delete product',
                            message: 'Are you sure, you want to delete selected product?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.presentLoading();
                                        _this.userService.postData({ wish_id: wish_id, product_id: product_id }, 'deleteWishlistProduct').subscribe(function (result) {
                                            _this.stopLoading();
                                            if (result.status == 1) {
                                                _this.presentToast('Product has been deleted succesfully.', 'success');
                                                _this.getWishList();
                                                //this.modalCtrl.dismiss();
                                            }
                                            else {
                                                _this.presentToast('Error,Please try after some time.', 'danger');
                                            }
                                        }, function (err) {
                                            _this.stopLoading();
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
    ;
    WishlistPage.prototype.presentAlertPromptAdd = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Enter wishlist name',
                            inputs: [
                                {
                                    name: 'name1',
                                    type: 'text',
                                    placeholder: 'wishlist name'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Save',
                                    cssClass: 'darkred',
                                    handler: function (data) {
                                        console.log(data);
                                        _this.presentLoading();
                                        _this.userService.postData({ product_id: null, user_id: _this.userId == 0 ? localStorage.getItem('guestUserId') : _this.userId, wish_title: data.name1, is_new: 1, wishlist_id: null }, 'addWishlistNew').subscribe(function (result) {
                                            _this.stopLoading();
                                            if (result.status == 1) {
                                                _this.presentToast('Wishlist has been created succesfully.', 'success');
                                                _this.getWishList();
                                            }
                                            else if (result.status == 2) {
                                                _this.presentToast('Wishlist title already exist.Please try using another one.', 'danger');
                                            }
                                            else {
                                                _this.presentToast('Error,Please try after some time.', 'danger');
                                            }
                                        }, function (err) {
                                            _this.stopLoading();
                                            _this.presentToast('Error,Please try after some time.', 'danger');
                                        });
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'default',
                                    handler: function () {
                                        console.log('Confirm Cancel');
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
    WishlistPage.prototype.setDefault = function (wish_id) {
        var _this = this;
        this.presentLoading();
        this.userService.postData({ user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId, wishlist_id: wish_id }, 'wish_as_default').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.presentToast('Wishlist has been set as default succesfully.', 'success');
                _this.getWishList();
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    WishlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.page.html */ "./src/app/wishlist/wishlist.page.html"),
            styles: [__webpack_require__(/*! ./wishlist.page.scss */ "./src/app/wishlist/wishlist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], WishlistPage);
    return WishlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=wishlist-wishlist-module.js.map