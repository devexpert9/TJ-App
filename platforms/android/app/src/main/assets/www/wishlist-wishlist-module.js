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
                ngx_stars__WEBPACK_IMPORTED_MODULE_8__["NgxStarsModule"]
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

module.exports = "\n<ion-content>\n<div class=\"ion-padding\">\n<div header_height></div>\n<!-- Breadcrumb Start -->\n\n<div breadcrumb  class=\"ion-hide-md-down\">\n\t<div breadcrumb-inner>\n\t\t<ul list-inline list-unstyled>\n\t\t<li><a routerLink=\"/home\">Home</a></li>\n\t\t\t<li class=\"active\"> Wishlist</li>\n\t\t</ul>\n\t</div><!-- /.breadcrumb-inner -->\n</div>\n\n<!-- Breadcrumb Ends -->\n\n\n<!-- Wishist browser Start -->\n<div my-wishlist-page class=\"ion-hide-md-down\">\n\n<div mainSecWishlist>\n\t<!-- hdng -->\n\t<div subHdng *ngIf=\"all_wishlist != ''\">\n\t\t<h4 heading-title>My Wishlists\n\t\t\t\t<ion-button addNewWishlist color=\"darkred\" (click)=\"presentAlertPromptAdd()\">\n\t\t\t\t\t<i class=\"fa fa-plus\"></i>\n\t\t\t\t</ion-button>\n\t\t   <div srch-filter>\n\t\t\t\t<input (input)=\"searchWishlist($event)\" search-input placeholder=\"Search this list...\">\n\t\t\t\t<a search-button>\n\t\t\t\t   <i class=\"fa fa-search\"></i>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</h4>\n\t</div>\n\n\t<!-- Lists -->\n\n\t<ng-container *ngFor=\"let item of wishlist;let i = index;\">\n\t<h4 catHdng>\n\t\t{{item.wish_title}}\n\t\t<!-- <div sharedTitle *ngIf=\"item.share_with_user.length > 0 && userId == item.user_id\"> Wishlist shared with {{item.share_with_user[0].name}} {{item.share_with_user[0].last_name}}</div>\n\n\t\t<div sharedTitle *ngIf=\"item.share_with_user.length > 0 && userId != item.user_id\"> Wishlist shared with you by {{item.userData[0].name}} {{item.userData[0].last_name}}</div> -->\n\n\t\t<div ritActions2 *ngIf=\"userId == item.user_id || guestUserId == item.user_id\">\n\t\t\t<ion-checkbox color=\"darkred\" [checked]=\"item.is_default == 1\" *ngIf=\"item.is_default == 1\" ></ion-checkbox>\n\t   \t\t<ion-checkbox  color=\"darkred\" *ngIf=\"item.is_default != 1\" (ionChange)=\"setDefault(item.wish_id)\" ></ion-checkbox>\n\n\t   \t\t<ion-button color=\"darkred\" (click)=\"addAddressForWishlist(item)\">\n\t   \t\t\t<i class=\"fa fa-pencil\"></i>\n\t   \t\t</ion-button>\n\t   \t\t<!-- <ion-button color=\"darkred\" (click)=\"share(item, i)\" *ngIf=\"item.share_with_user.length == 0\">\n\t   \t\t\t<i class=\"fa fa-share-alt\"></i>\n\t   \t\t</ion-button>\n\t   \t\t<ion-button disabled *ngIf=\"item.share_with_user.length > 0\" class=\"disbale\">\n\t   \t\t\t<i class=\"fa fa-share-alt\"></i>\n\t   \t\t</ion-button> -->\n\t   \t\t<ion-button color=\"darkred\" (click)=\"share(item, i)\">\n\t   \t\t\t<i class=\"fa fa-share-alt\"></i>\n\t   \t\t</ion-button>\n\t   \t\t<ion-button color=\"darkred\"  (click)=\"deleteWishlist(item.wish_id)\" *ngIf=\"item.is_default != 1\">\n\t   \t\t\t<i class=\"fa fa-trash\"></i>\n\t   \t\t</ion-button>\n\t   \t\t<ion-button color=\"darkred\" (click)=\"placeOrder(item)\">\n\t   \t\t\t<i class=\"fa fa-shopping-bag\"></i>\n\t   \t\t</ion-button>\n\t   </div>\n\n\t   <div ritActions2 *ngIf=\"userId != item.user_id && guestUserId != item.user_id\">\n\t   \t\t<ion-button color=\"darkred\" (click)=\"placeOrder(item)\">\n\t   \t\t\t<i class=\"fa fa-shopping-bag\"></i>\n\t   \t\t</ion-button>\n\t   </div>\n\t</h4>\n\t<div wishlistList *ngFor=\"let product of item.products; let w_ind = index \" >\n\t\t<div class=\"col-sm-1\">\n\t\t<a proImg routerLink=\"/product-details/{{product.product_id}}\">\n\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{product.product_image}}\" alt=\"{{product.product_name}}\">\n\t\t</a>\n\t\t</div>\n\t\t<div class=\"col-sm-7\">\n\t\t\t<div product-name>\n\t\t\t   <a routerLink=\"/product-details/{{product.product_id}}\">\n\t\t\t      {{product.product_name}}\n\t\t\t   </a>\n\t\t\t</div>\n\t\t\t<div rating rateit>\n\t\t\t\t<ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"product?.Average_Review\" [color]=\"'#a01616'\" *ngIf=\"product?.Average_Review != null\"></ngx-stars>\n\t\t\t\t<ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"0\" [color]=\"'#a01616'\" *ngIf=\"product.Average_Review == null\"></ngx-stars>\n\t\t\t\t<!-- <span class=\"review\">( {{product?.product_reviews?.length}} {{product?.product_reviews?.length == '1' ? 'Review' : 'Reviews'}} )</span> -->\n\t\t\t</div>\n\t\t\t<div price>\n\t\t\t\t<ng-container *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price\"> Now for ${{product?.product_sale_price}}  </ng-container>\n\n    \t\t\t<ng-container *ngIf=\"errors.indexOf(product?.product_sale_price) >= 0 || product?.product_sale_price == product?.product_purchase_price\"> ${{product?.product_purchase_price}}  </ng-container>\n\n    \t\t\t<span *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price\" price-before-discount> from ${{product?.product_purchase_price}}</span>\n\t\t\t</div>\n\t\t\t<div vendor-info>\n\t\t\t\t<p *ngIf=\"product?.product_user_type == 'Vendor'\" vendor-name>Sold by <a href=\"javascript:void(0)\">{{product?.Vendors[0]?.vendor_company}}</a></p>\n\t\t\t\t<!-- <p>Item added on {{product?.wish_date | date : 'MMM d, y'}}</p> -->\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-2\">\n\t\t\t<ng-container *ngIf=\"product?.product_quantity != 0 && errors.indexOf(product?.product_quantity) == -1\">\n\t\t\t\t<ion-button color=\"darkred\" *ngIf=\"my_cart_products.indexOf(product.product_id) == -1\" (click)=\"addToCart(product.product_id,product.product_sale_price,product.product_purchase_price)\">\n\t\t\t\t\tAdd to cart\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-button color=\"darkred\" *ngIf=\"my_cart_products.indexOf(product.product_id) >= 0\">\n\t\t\t\t\tIn cart\n\t\t\t\t</ion-button>\n\t\t\t</ng-container>\n\t\t\t<ng-container tag new *ngIf=\"product?.product_quantity == 0 || errors.indexOf(product?.product_quantity) >= 0\">\n\t\t\tOut of stock\n\t\t\t</ng-container>\n\t\t</div>\n\t\t<div class=\"col-md-1\" close-btn *ngIf=\"userId == item.user_id || guestUserId == item.user_id\">\n\t\t\t<a (click)=\"removeProduct(item.wish_id, product.product_id)\">\n\t\t\t   <i class=\"fa fa-times\"></i>\n\t\t\t</a>\n\t\t</div>\n \t</div>\n</ng-container>\n<div *ngIf=\"wishlist == ''\" style=\"padding: 14px;\">\n\t<span>No items added in wishlist</span>\n</div>\n<div *ngIf=\"all_wishlist != '' && wishlist == ''\" style=\"padding: 14px;\">\n\t<span>No matching records found.</span>\n</div>\n\n</div>\n\n</div>\n<!-- Wishist browser End -->\n<!-- Wishist mobile Start -->\n<div wishlist-mob class=\"ion-hide-lg-up\">\n  <div wishlist-items>\n  \t<div checkout-box>\n  \t\t<!-- main hdng -->\n\t  \t<h3 class=\"mainWishHdng\">My Wishlists <ion-button addnewwishlistApp=\"\" color=\"darkred\" (click)=\"presentAlertPromptAdd()\" class=\"ion-color ion-color-darkred ios button button-solid ion-activatable ion-focusable hydrated\">\n\t\t\t\t<i class=\"fa fa-plus\"></i>\n\t\t\t</ion-button>\n\t\t</h3>\n\n\t\t<ion-card no-margin padding>\n\t\t\t<div panel panel-default *ngFor=\"let item of wishlist; let i = index \">\n\t\t\t\t <div panel-heading checkout-head>\n\t\t\t\t\t<h4>\n\t\t\t\t\t   <a href=\"javascript:void(0)\" [ngClass]=\"{'active': selectedItem.indexOf('item'+i) >= 0}\"  (click)=\"faqClicked('item'+i)\">\n\t\t\t\t\t\t  <span>1</span> {{item.wish_title}}\n\n\t\t\t\t\t\t  \t<!-- <div sharedTitle *ngIf=\"item.share_with_user.length > 0 && userId == item.user_id\"> shared with {{item.share_with_user[0].name}} {{item.share_with_user[0].last_name}}</div>\n\n\t\t\t\t\t\t\t<div sharedTitle *ngIf=\"item.share_with_user.length > 0 && userId != item.user_id\"> shared  by {{item.userData[0].name}} {{item.userData[0].last_name}}</div>  -->\n\n\t\t\t\t\t   </a>\n\t\t\t\t\t   <div ritActions *ngIf=\"userId == item.user_id || guestUserId == item.user_id\">\n\t\t\t\t\t   \t\t<ion-checkbox color=\"darkred\" [checked]=\"item.is_default == 1\"  *ngIf=\"item.is_default == 1\"></ion-checkbox>\n\t\t\t\t\t   \t\t<ion-checkbox color=\"darkred\" *ngIf=\"item.is_default != 1\" (ionChange)=\"setDefault(item.wish_id)\" ></ion-checkbox>\n\t\t\t\t\t   \t\t<ion-button color=\"darkred\" (click)=\"addAddressForWishlist(item)\">\n\t\t\t\t\t   \t\t\t<i class=\"fa fa-pencil\"></i>\n\t\t\t\t\t   \t\t</ion-button>\n\t\t\t\t\t   \t\t<!-- <ion-button color=\"darkred\" (click)=\"share(item, i)\" *ngIf=\"item.share_with_user.length == 0\">\n\t\t\t\t\t   \t\t\t<i class=\"fa fa-share-alt\"></i>\n\t\t\t\t\t   \t\t</ion-button> -->\n\t\t\t\t\t   \t<!-- \t<ion-button disabled *ngIf=\"item.share_with_user.length > 0\" class=\"disbale\">\n\t\t\t\t\t   \t\t\t<i class=\"fa fa-share-alt\"></i>\n\t\t\t\t\t   \t\t</ion-button> -->\n\t\t\t\t\t   \t\t<ion-button color=\"darkred\" (click)=\"share(item, i)\" *ngIf=\"item.share_with_user.length == 0\">\n\t\t\t\t\t   \t\t\t<i class=\"fa fa-share-alt\"></i>\n\t\t\t\t\t   \t\t</ion-button>\n\n\t\t\t\t\t   \t\t<ion-button color=\"darkred\" (click)=\"placeOrder(item)\">\n\t\t\t\t\t   \t\t\t<i class=\"fa fa-shopping-bag\"></i>\n\t\t\t\t\t   \t\t</ion-button>\n\n\t\t\t\t\t   \t\t<ion-button color=\"darkred\"  (click)=\"deleteWishlist(item.wish_id)\" *ngIf=\"item.is_default != 1\">\n\t\t\t\t\t   \t\t\t<i class=\"fa fa-trash\"></i>\n\t\t\t\t\t   \t\t</ion-button>\n\n\n\t\t\t\t\t   </div>\n\t\t\t\t\t   <div ritActions *ngIf=\"userId != item.user_id && guestUserId != item.user_id\">\n\t\t\t\t\t   \t\t<ion-button color=\"darkred\" (click)=\"placeOrder(item)\">\n\t\t\t\t\t   \t\t\t<i class=\"fa fa-shopping-bag\"></i>\n\t\t\t\t\t   \t\t</ion-button>\n\t\t\t\t\t   </div>\n\t\t\t\t\t</h4>\n\t\t\t\t </div>\n\t\t\t\t <div panel-body  [ngClass]=\"{'active': selectedItem.indexOf('item'+i) >= 0}\">\n\n\t\t\t\t \t<ion-grid productsDiv>\n\n\t\t\t\t \t\t<ion-item lines=\"none\" *ngFor=\"let product of item.products; let wm_ind = index \">\n\t\t\t\t\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t\t\t\t\t  <a routerLink=\"/product-details/{{product.product_id}}\">\n\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{product.product_image}}\" alt=\"{{product.product_name}}\">\n\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t</ion-thumbnail>\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<h3>{{product.product_name}}</h3>\n\t\t\t\t\t\t\t<p price-main>\n\t\t\t\t\t\t\t\t<span *ngIf=\"errors.indexOf(product.product_sale_price) == -1 && product.product_sale_price != product.product_purchase_price\"> ${{product.product_sale_price}}  </span>\n\n\t\t\t\t\t            <span *ngIf=\"errors.indexOf(product.product_sale_price) >= 0 || product.product_sale_price == product.product_purchase_price\"> ${{product.product_purchase_price}}  </span>\n\n\t\t\t\t\t            <span *ngIf=\"errors.indexOf(product.product_sale_price) == -1 && product.product_sale_price != product.product_purchase_price\" price-before-discount>${{product.product_purchase_price}}</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div rating>\n\t\t\t\t\t\t\t\t<ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"product?.Average_Review\" [color]=\"'#a01616'\" *ngIf=\"product?.Average_Review != null\"></ngx-stars>\n\t\t\t\t\t\t\t\t<ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"0\" [color]=\"'#a01616'\" *ngIf=\"product.Average_Review == null\"></ngx-stars>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t   \t</label>\n\n\t\t\t\t\t\t\t<ion-button color=\"grey2\" size=\"small\" fill=\"outline\" slot=\"end\" *ngIf=\"product?.product_quantity != 0 && errors.indexOf(product?.product_quantity) == -1\">\n\t\t\t\t\t\t\t\t<ion-icon title=\"Add to Cart\"  *ngIf=\"my_cart_products.indexOf(product.product_id) == -1\" (click)=\"addToCart(product.product_id,product.product_sale_price,product.product_purchase_price)\" name=\"cart\"></ion-icon>\n\n\t\t\t\t\t\t\t\t<ion-icon title=\"In cart\" *ngIf=\"my_cart_products.indexOf(product.product_id) >= 0\" name=\"checkmark\"></ion-icon>\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t<ion-button color=\"grey2\" size=\"small\" fill=\"outline\" slot=\"end\" (click)=\"removeWishlist(wm_ind,product.wish_id)\" *ngIf=\"userId == item.user_id || guestUserId == item.user_id\">\n\t\t\t\t\t\t\t\t<ion-icon name=\"trash\"></ion-icon>\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t\t<ion-item lines=\"none\" *ngIf=\"all_wishlist != '' && wishlist == ''\">\n\t\t\t\t\t\t\tNo matching records found.\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item lines=\"none\" *ngIf=\"all_wishlist == ''\">\n\t\t\t\t\t\t\tNo items added in wishlist.\n\t\t\t\t\t\t</ion-item>\n\n\t\t\t\t \t</ion-grid>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-card>\n\t</div>\n\n  </div>\n</div>\n<div *ngIf=\"showShareDiv\" class=\"sharedDiv\">\n\n\t<a _ngcontent-iqv-c6=\"\" search-button=\"\" (click)=\"closePopUp()\"><i _ngcontent-iqv-c6=\"\" class=\"fa fa-close\"></i></a>\n\t<h4>Sharable Link:</h4>\n\t<span>{{publicUrl}}</span>\n\n</div>\n<!-- Wishist mobile End -->\n<app-recently-viewed></app-recently-viewed>\n<app-upsell-products></app-upsell-products>\n</div>\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/wishlist/wishlist.page.scss":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey);\n  /*  Wishlist Page   Start*/\n  /*  Wishlist Page   Ends*/\n  /*\r\n\t-------------------------------------------\r\n\t \tMobile Wishlist Start\r\n\t--------------------------------\r\n*/\n  /* Mobile Wishlist Ends*/ }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0); } }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0);\n      --padding-bottom:var(--ion-padding-0);\n      --padding-start:var(--ion-padding-0);\n      --padding-end:var(--ion-padding-0); } }\n  ion-content [my-wishlist-page] {\n    background-color: var(--ion-color-white);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n    padding: var(--ion-padding-0);\n    overflow: hidden; }\n  ion-content [my-wishlist-page] table {\n      margin-bottom: var(--ion-margin-0); }\n  ion-content [my-wishlist-page] table tr {\n        font-family: var(--ion-font-family-2); }\n  ion-content [my-wishlist-page] table tr td {\n          vertical-align: middle;\n          padding: var(--ion-padding-15); }\n  ion-content [my-wishlist-page] table tr td[close-btn] a {\n            color: var(--ion-color-darkred);\n            text-decoration: none; }\n  ion-content [my-wishlist-page] table tr td [product-name] {\n            font-size: var(--ion-font-size-16);\n            font-family: var(--ion-font-family-2);\n            padding-bottom: var(--ion-padding-6); }\n  ion-content [my-wishlist-page] table tr td [product-name] a {\n              color: #434343;\n              text-decoration: none; }\n  ion-content [my-wishlist-page] table tr td [price] {\n            color: var(--ion-color-darkred);\n            font-size: var(--ion-font-size-16);\n            padding-top: var(--ion-padding-4);\n            font-weight: 700; }\n  ion-content [my-wishlist-page] table tr td [price] span {\n              font-size: var(--ion-font-size-15);\n              color: var(--ion-color-ltgrey);\n              text-decoration: line-through;\n              padding-left: var(--ion-padding-10); }\n  ion-content [my-wishlist-page] table tr td p {\n            font-size: var(--ion-font-size-14);\n            color: var(--ion-color-darkblack);\n            font-family: var(--ion-font-family-2); }\n  ion-content [my-wishlist-page] table tr td p[vendor-name] {\n              margin-top: 10px; }\n  ion-content [my-wishlist-page] table tr td p[vendor-name] a {\n                color: var(--ion-color-darkred);\n                text-decoration: none; }\n  ion-content [my-wishlist-page] table tr td [rating] ion-icon {\n            color: #dcdcdc; }\n  ion-content [my-wishlist-page] table tr td [rating] ion-icon[filled] {\n              color: var(--ion-color-yellow); }\n  ion-content [my-wishlist-page] table tr td ion-button {\n            --box-shadow:none;\n            font-family: var(--ion-font-family-2);\n            border-radius: var(--ion-value-0); }\n  ion-content .sharedDiv {\n    position: fixed;\n    top: 40%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    background: #ffffff;\n    z-index: 88888;\n    margin: auto;\n    border: 1px solid #222f3e;\n    height: 30%; }\n  ion-content .sharedDiv a {\n      float: right;\n      padding: 6px 10px;\n      background: #a02718;\n      vertical-align: middle;\n      margin: 7px;\n      color: #fff; }\n  ion-content .sharedDiv span {\n      border: 1px solid #ededed;\n      padding: 17px;\n      margin: 6px 8px;\n      position: absolute;\n      width: 90%;\n      background: #f0f0f0; }\n  ion-content .sharedDiv h4 {\n      margin: 8px; }\n  ion-content [panel] [panel-heading][checkout-head] {\n    background: #f5f5f5;\n    position: relative; }\n  ion-content [panel] [panel-heading][checkout-head] h4 {\n      margin-top: var(--ion-margin-0); }\n  ion-content [panel] [panel-heading][checkout-head] h4 a {\n        font-family: var(--ion-font-family-2);\n        color: var(--ion-color-darkblack3);\n        text-transform: uppercase;\n        display: block;\n        margin: var(--ion-margin-0);\n        font-size: var(--ion-font-size-13);\n        font-weight: bold;\n        text-decoration: none; }\n  @media only screen and (max-width: 991px) {\n          ion-content [panel] [panel-heading][checkout-head] h4 a {\n            padding-right: var(--ion-padding-10);\n            background: var(--ion-color-white); } }\n  ion-content [panel] [panel-heading][checkout-head] h4 a.active span {\n          background: var(--ion-color-darkred); }\n  @media only screen and (max-width: 991px) {\n          ion-content [panel] [panel-heading][checkout-head] h4 a {\n            display: flex;\n            align-items: center;\n            font-size: var(--ion-font-size-12); } }\n  ion-content [panel] [panel-heading][checkout-head] h4 a span {\n          color: var(--ion-color-white);\n          display: inline-block;\n          margin-right: var(--ion-margin-10);\n          padding: var(--ion-padding-15) var(--ion-padding-20);\n          background: #aaaaaa; }\n  @media only screen and (max-width: 991px) {\n            ion-content [panel] [panel-heading][checkout-head] h4 a span {\n              padding: var(--ion-padding-15) var(--ion-padding-15); } }\n  ion-content [panel] [panel-body] {\n    display: none;\n    padding: var(--ion-padding-10) var(--ion-padding-0) var(--ion-padding-22);\n    font-family: var(--ion-font-family-2); }\n  ion-content [panel] [panel-body].active {\n      display: block; }\n  ion-content [ritActions] {\n    right: 3px;\n    top: -4px;\n    position: absolute; }\n  ion-content [ritActions] ion-button {\n      width: 25px;\n      margin-right: 8px; }\n  ion-content [panel-body] {\n    padding: 0 !important; }\n  ion-content [productsdiv] {\n    padding: 0; }\n  ion-content [productsdiv] .item-native {\n      background: #f1f1f1;\n      border: 1px solid #ddd; }\n  ion-content [productsdiv] ion-item {\n      box-shadow: none !important; }\n  ion-content [productsdiv] ion-item ion-thumbnail {\n        margin: 0 15px 0 0 !important; }\n  ion-content .stars-line i.fa.fa-star {\n    margin-right: 3px !important; }\n  ion-content [mainSecWishlist] {\n    padding: 0 20px; }\n  ion-content [mainSecWishlist] [wishlistlist] {\n      display: flex;\n      align-items: center;\n      border-bottom: 1px solid #eee;\n      padding: 10px 0;\n      margin-bottom: 20px; }\n  ion-content [mainSecWishlist] [catHdng] {\n      font-size: 18px;\n      display: flex;\n      font-weight: 600;\n      color: #23303e;\n      justify-content: space-between;\n      border: 1px solid #ddd;\n      padding: 0px 13px;\n      align-items: center;\n      background: #f1f1f1;\n      border-radius: 2px; }\n  ion-content [mainSecWishlist] [catHdng] [bullets] {\n        background: #a02718;\n        padding: 12px 19px;\n        left: 0px;\n        position: relative;\n        margin: 0;\n        margin-left: -14px !important;\n        color: #fff; }\n  ion-content [mainSecWishlist] [catHdng] [sharedTitle] {\n        color: #ffffff;\n        font-size: 13px;\n        /* float: right; */\n        right: 22%;\n        position: absolute;\n        background: #222f3ebf;\n        padding: 4px 16px;\n        border-radius: 3px; }\n  ion-content [mainSecWishlist] [proimg] img {\n      max-width: 70px; }\n  ion-content [subHdng] {\n    vertical-align: middle; }\n  ion-content [subHdng] [heading-title] {\n      font-weight: bold;\n      font-size: var(--ion-font-size-22);\n      color: var(--ion-color-darkblack);\n      border-bottom: 1px #e5e5e5 solid;\n      padding-bottom: 14px; }\n  ion-content [subHdng] [heading-title] [srch-filter] {\n        float: right; }\n  ion-content [subHdng] [heading-title] [srch-filter] [search-input] {\n          font-size: var(--ion-font-size-14);\n          font-weight: 500;\n          padding: var(--ion-padding-5) var(--ion-padding-15);\n          border: 1px solid #E0E0E0;\n          float: left;\n          height: 32px; }\n  ion-content [subHdng] [heading-title] [srch-filter] [search-button] {\n          float: left;\n          width: var(--ion-wh-32);\n          height: var(--ion-wh-32);\n          background: var(--ion-color-darkred);\n          text-align: center;\n          line-height: var(--ion-value-32);\n          font-size: var(--ion-font-size-16);\n          color: var(--ion-color-white); }\n  ion-content [addNewWishlist] {\n    width: 30px;\n    margin: -14px 0 0;\n    height: 30px; }\n  ion-content [ritActions2] ion-checkbox {\n    -webkit-transform: translate(-10px, 9px);\n            transform: translate(-10px, 9px); }\n  ion-content h3.mainWishHdng {\n    margin: 0 0 10px;\n    width: 100%;\n    float: left;\n    font-size: 18px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  ion-content h3.mainWishHdng [addnewwishlistApp] {\n      width: 30px;\n      margin: 0px 0 0 4px;\n      height: 30px;\n      float: right; }\n  ion-content [ritActions] ion-checkbox {\n    -webkit-transform: translate(-1px, 11px);\n            transform: translate(-1px, 11px);\n    width: 30px;\n    height: 30px;\n    --border-radius: 8px; }\n  ion-content [ritActions] ion-button {\n    margin-right: 8px;\n    height: 30px;\n    margin-top: -4px; }\n  ion-content [wishlist-mob] [wishlist-items] ion-item {\n    --padding-start: var( --ion-padding-10);\n    --padding-end: var( --ion-padding-0);\n    --padding-top: var( --ion-padding-10);\n    --padding-bottom: var( --ion-padding-10);\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);\n    margin-bottom: var(--ion-margin-10); }\n  @media only screen and (max-width: 991px) {\n      ion-content [wishlist-mob] [wishlist-items] ion-item {\n        border-bottom: 1px solid var(--ion-color-grey);\n        display: flex;\n        margin-bottom: var(--ion-margin-0); } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item ion-thumbnail {\n      /*\r\n\t\t\t\t\t\twidth: var( --ion-value-90);\r\n\t\t\t\t\t   height: var( --ion-value-90);\r\n\t\t\t\t\t  margin-top:var(--ion-margin-0);\r\n\t\t\t\t\t   margin-bottom:var(--ion-margin-0);*/ }\n  @media only screen and (max-width: 991px) {\n        ion-content [wishlist-mob] [wishlist-items] ion-item ion-thumbnail {\n          height: 100%; } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label {\n      width: 100%; }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label h3 {\n        margin-top: var(--ion-margin-0);\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-14);\n        font-weight: 700;\n        margin-bottom: var(--ion-margin-3); }\n  @media only screen and (max-width: 576px) {\n          ion-content [wishlist-mob] [wishlist-items] ion-item label h3 {\n            font-size: var(--ion-font-size-12); } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [price-main] {\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-14);\n        font-weight: 600;\n        margin-bottom: var(--ion-margin-3); }\n  @media only screen and (max-width: 576px) {\n          ion-content [wishlist-mob] [wishlist-items] ion-item label [price-main] {\n            font-size: var(--ion-font-size-12); } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [price-main] [price] {\n          color: var(--ion-color-darkred); }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [price-main] [price-discount] {\n          text-decoration: line-through;\n          color: var(--ion-color-ltgrey);\n          margin-left: var(--ion-value-5); }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [rating] ion-icon {\n        color: #d3d3d3; }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [rating] ion-icon[filled] {\n          color: var(--ion-color-yellow); }\n  @media only screen and (max-width: 576px) {\n          ion-content [wishlist-mob] [wishlist-items] ion-item label [rating] ion-icon {\n            font-size: var(--ion-font-size-12); } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item ion-button {\n      --padding-start: var( --ion-padding-4);\n      --padding-start: var( --ion-padding-4);\n      --padding-end: var( --ion-padding-4);\n      height: var(--ion-value-22);\n      margin: var(--ion-value-0) var(--ion-value-0) var(--ion-value-0) var(--ion-value-5);\n      font-size: var(--ion-font-size-12);\n      --border-radius:var( --ion-value-0);\n      --border-width:1px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC93aXNobGlzdC93aXNobGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3dpc2hsaXN0L3dpc2hsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUVBLGtDQUFhO0VBWWIsMEJBQUE7RUF1VEEseUJBQUE7RUFVRDs7OztDQ3ZVQztFRDBjQSx3QkFBQSxFQUF5QjtFQS9jekI7SUFIQTtNQUtHLGtDQUFjLEVBQUEsRUE4Y2pCO0VBNWNDO0lBUEQ7TUFTRyxrQ0FBYztNQUNkLHFDQUFpQjtNQUNqQixvQ0FBZ0I7TUFDaEIsa0NBQWMsRUFBQSxFQXVjakI7RUFuZEE7SUFnQkcsd0NBQXVDO0lBQ3ZDLDJDQUF1QztJQUN2Qyw2QkFBNkI7SUFDN0IsZ0JBQWdCLEVBQUE7RUFuQm5CO01BcUJLLGtDQUFrQyxFQUFBO0VBckJ2QztRQXVCTyxxQ0FBcUMsRUFBQTtFQXZCNUM7VUEyQkcsc0JBQXFCO1VBQ3JCLDhCQUE4QixFQUFBO0VBNUJqQztZQWlDd0IsK0JBQStCO1lBQ2pELHFCQUFvQixFQUFBO0VBbEMxQjtZQXVDSyxrQ0FBa0M7WUFDL0IscUNBQXFDO1lBQ3hDLG9DQUFvQyxFQUFBO0VBekN6QztjQTRDUSxjQUFjO2NBQ2hCLHFCQUFvQixFQUFBO0VBN0MxQjtZQW1EUywrQkFBZ0M7WUFDbkMsa0NBQWtDO1lBQ2xDLGlDQUFpQztZQUNqQyxnQkFBZSxFQUFBO0VBdERyQjtjQXlEYSxrQ0FBa0M7Y0FDdkMsOEJBQThCO2NBQzlCLDZCQUE2QjtjQUM3QixtQ0FBbUMsRUFBQTtFQTVEM0M7WUFpRVMsa0NBQWtDO1lBQ25CLGlDQUFtQztZQUNuQyxxQ0FBcUMsRUFBQTtFQW5FN0Q7Y0FxRXlCLGdCQUFnQixFQUFBO0VBckV6QztnQkF3RXdCLCtCQUErQjtnQkFDaEQscUJBQW9CLEVBQUE7RUF6RTNCO1lBZ0ZXLGNBQWEsRUFBQTtFQWhGeEI7Y0FtRlMsOEJBQTZCLEVBQUE7RUFuRnRDO1lBNEZJLGlCQUFhO1lBQ1YscUNBQXFDO1lBQ3JDLGlDQUFnQyxFQUFBO0VBOUZ2QztJQXVHRyxlQUFlO0lBQ2YsUUFBUTtJQUNSLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixXQUFXLEVBQUE7RUFoSGQ7TUFrSEksWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsc0JBQXNCO01BQ3RCLFdBQVc7TUFDWCxXQUFXLEVBQUE7RUF2SGY7TUEwSEkseUJBQXlCO01BQ3pCLGFBQWE7TUFDYixlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixtQkFBbUIsRUFBQTtFQS9IdkI7TUFrSUMsV0FBVyxFQUFBO0VBbElaO0lBMklLLG1CQUFrQjtJQUNsQixrQkFBaUIsRUFBQTtFQTVJdEI7TUFnSlEsK0JBQThCLEVBQUE7RUFoSnRDO1FBbUpvQixxQ0FBcUM7UUFDaEQsa0NBQWtDO1FBQ2xDLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QsMkJBQTRCO1FBQzVCLGtDQUFrQztRQUNsQyxpQkFBaUI7UUFDakIscUJBQW9CLEVBQUE7RUFDVTtVQTNKdkM7WUE2SlUsb0NBQXFDO1lBQ2pDLGtDQUFrQyxFQUFBLEVBMkJ4QztFQXpMUjtVQW9LYSxvQ0FBb0MsRUFBQTtFQUd4QztVQXZLVDtZQXlLYyxhQUFhO1lBQ2hCLG1CQUFtQjtZQUNuQixrQ0FBa0MsRUFBQSxFQWNyQztFQXpMUjtVQStLUyw2QkFBNkI7VUFDN0IscUJBQXFCO1VBQ3JCLGtDQUFrQztVQUNsQyxvREFBcUQ7VUFDckQsbUJBQWtCLEVBQUE7RUFDaEI7WUFwTFg7Y0FzTFUsb0RBQXFELEVBQUEsRUFFdEQ7RUF4TFQ7SUE4TE8sYUFBWTtJQUNaLHlFQUEyRTtJQUM5RSxxQ0FBcUMsRUFBQTtFQWhNekM7TUFrTVEsY0FBYSxFQUFBO0VBbE1yQjtJQXlNQSxVQUFVO0lBQ1AsU0FBUztJQUNULGtCQUFpQixFQUFBO0VBM01wQjtNQThNSSxXQUFVO01BQ1AsaUJBQWlCLEVBQUE7RUEvTXhCO0lBbU5BLHFCQUFvQixFQUFBO0VBbk5wQjtJQXNOQSxVQUFTLEVBQUE7RUF0TlQ7TUF3TkMsbUJBQW1CO01BQ2hCLHNCQUFzQixFQUFBO0VBek4xQjtNQTROQywyQkFBMEIsRUFBQTtFQTVOM0I7UUE4TkUsNkJBQTRCLEVBQUE7RUE5TjlCO0lBb09DLDRCQUEyQixFQUFBO0VBcE81QjtJQXdPRyxlQUFlLEVBQUE7RUF4T2xCO01BME9PLGFBQWE7TUFDaEIsbUJBQW1CO01BQ25CLDZCQUE2QjtNQUM3QixlQUFlO01BQ2YsbUJBQW1CLEVBQUE7RUE5T3ZCO01BaVBDLGVBQWU7TUFDWixhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCw4QkFBOEI7TUFDOUIsc0JBQXNCO01BQ3RCLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLGtCQUFrQixFQUFBO0VBMVB0QjtRQTRQUSxtQkFBbUI7UUFDdEIsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsU0FBUztRQUNULDZCQUE2QjtRQUM3QixXQUFXLEVBQUE7RUFsUWhCO1FBcVFRLGNBQWM7UUFDakIsZUFBZTtRQUNmLGtCQUFBO1FBQ0EsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGtCQUFrQixFQUFBO0VBNVF2QjtNQWlSRSxlQUFjLEVBQUE7RUFqUmhCO0lBdVJBLHNCQUFxQixFQUFBO0VBdlJyQjtNQTJSRyxpQkFBaUI7TUFDZCxrQ0FBa0M7TUFDckMsaUNBQW1DO01BQ25DLGdDQUFnQztNQUM5QixvQkFBb0IsRUFBQTtFQS9SekI7UUFpU0ssWUFBVyxFQUFBO0VBalNoQjtVQW9TUSxrQ0FBa0M7VUFDckMsZ0JBQWdCO1VBQ2IsbURBQW9EO1VBQ3ZELHlCQUF5QjtVQUN6QixXQUFXO1VBQ1YsWUFBVyxFQUFBO0VBelNqQjtVQTZTUyxXQUFXO1VBQ2QsdUJBQXVCO1VBQ3ZCLHdCQUF1QjtVQUN2QixvQ0FBb0M7VUFDcEMsa0JBQWtCO1VBQ2xCLGdDQUFnQztVQUNoQyxrQ0FBa0M7VUFDbEMsNkJBQTRCLEVBQUE7RUFwVGxDO0lBMFRBLFdBQVc7SUFDUixpQkFBaUI7SUFDakIsWUFBWSxFQUFBO0VBNVRmO0lBZ1VDLHdDQUFnQztZQUFoQyxnQ0FBZ0MsRUFBQTtFQWhVakM7SUFzVkEsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDUixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CLEVBQUE7RUE1VnRCO01BOFZDLFdBQVc7TUFDUixtQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFlBQVcsRUFBQTtFQWpXZjtJQXVXQyx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWdCLEVBQUE7RUExV3BCO0lBNldJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7RUEvV3BCO0lBMFhJLHVDQUFnQjtJQUNoQixvQ0FBYztJQUNkLHFDQUFjO0lBQ2Qsd0NBQWlCO0lBQ2pCLDJDQUEyQztJQUMxQyxtQ0FBcUMsRUFBQTtFQUNyQztNQWhZTDtRQWlZTyw4Q0FBNkM7UUFDMUMsYUFBYTtRQUNoQixrQ0FBb0MsRUFBQSxFQTRFckM7RUEvY047TUEwWUk7Ozs7MkNDbElzQyxFRHNJQztFQVJuQztRQXRZUjtVQXdZVSxZQUFZLEVBQUEsRUFPbEI7RUEvWUo7TUFpWk8sV0FBVyxFQUFBO0VBalpsQjtRQW9aSywrQkFBOEI7UUFDOUIscUNBQW9DO1FBQ3BDLGtDQUFpQztRQUNqQyxnQkFBZTtRQUNkLGtDQUFrQyxFQUFBO0VBQ2xDO1VBelpOO1lBMlpNLGtDQUFpQyxFQUFBLEVBRWxDO0VBN1pMO1FBZ2FNLHFDQUFvQztRQUNwQyxrQ0FBaUM7UUFDakMsZ0JBQWU7UUFDZixrQ0FBa0MsRUFBQTtFQUNqQztVQXBhUDtZQXNhTSxrQ0FBaUMsRUFBQSxFQVlsQztFQWxiTDtVQTBhTSwrQkFBOEIsRUFBQTtFQTFhcEM7VUE4YVUsNkJBQTZCO1VBQ2hDLDhCQUErQjtVQUMvQiwrQkFBOEIsRUFBQTtFQWhickM7UUF1YlMsY0FBYSxFQUFBO0VBdmJ0QjtVQTBiTyw4QkFBNkIsRUFBQTtFQUU3QjtVQTViUDtZQThiTSxrQ0FBaUMsRUFBQSxFQUVqQztFQWhjTjtNQXNjTyxzQ0FBZ0I7TUFDaEIsc0NBQWdCO01BQ2hCLG9DQUFjO01BQ2QsMkJBQTRCO01BQzVCLG1GQUFvRjtNQUNwRixrQ0FBb0M7TUFDcEMsbUNBQWdCO01BQ2hCLGtCQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93aXNobGlzdC93aXNobGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgaW9uLWNvbnRlbnRcclxueyAgXHJcblx0LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5KTtcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkxcHgpXHJcblx0e1xyXG5cdCAgIC0tcGFkZGluZy10b3A6dmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0fVxyXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdHtcclxuXHQgICAtLXBhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdCAgIC0tcGFkZGluZy1ib3R0b206dmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0ICAgLS1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdCAgIC0tcGFkZGluZy1lbmQ6dmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0fVxyXG4gLyogIFdpc2hsaXN0IFBhZ2UgICBTdGFydCovXHJcbiBbbXktd2lzaGxpc3QtcGFnZV0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwuMDgpO1xyXG4gICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHRhYmxlXHJcblx0eyAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0dHJcclxuXHRcdHtcdCAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1x0XHRcclxuXHRcdFx0XHJcblx0XHRcdHRkXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7ICAgXHJcblx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTUpO1xyXG5cdFx0XHRcdCZbY2xvc2UtYnRuXVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdCAgIGFcclxuICAgICAgICAgICAgICAgICAgICAgICB7XHRcdFx0XHRcdCAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTsgXHJcblx0XHRcdFx0XHRcdCB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0W3Byb2R1Y3QtbmFtZV1cclxuXHRcdFx0XHR7ICAgICBcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcclxuXHRcdFx0XHRcdCAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1x0XHRcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTYpO1xyXG5cdFx0XHRcdCAgICBhXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHQgICAgY29sb3I6ICM0MzQzNDM7XHJcblx0XHRcdFx0XHRcdCB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0fSBcclxuXHRcdFx0XHQgW3ByaWNlXVxyXG5cdFx0XHRcdCB7XHJcblx0XHRcdFx0XHQgICAgIGNvbG9yOiAgdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdFx0XHQgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcclxuXHRcdFx0XHRcdFx0IHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZy00KTtcclxuXHRcdFx0XHRcdFx0IGZvbnQtd2VpZ2h0OjcwMDtcclxuXHRcdFx0XHRcdFx0IHNwYW5cclxuXHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICBcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbHRncmV5KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmctMTApO1xyXG5cdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0ICAgcFxyXG5cdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdCAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoICAtLWlvbi1jb2xvci1kYXJrYmxhY2spOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHRcclxuXHRcdFx0XHRcdCZbdmVuZG9yLW5hbWVdXHJcbiAgICAgICAgICAgICAgICAgICAgeyAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHRcdFx0XHRcdCAgIGFcclxuICAgICAgICAgICAgICAgICAgICAgICB7XHRcdFx0XHRcdCAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcclxuXHRcdFx0XHRcdFx0ICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdH1cdFx0XHRcdFx0XHJcblx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdCAgIFtyYXRpbmddXHJcblx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0ICAgaW9uLWljb25cclxuXHRcdFx0XHRcdCAgIHsgICBjb2xvcjojZGNkY2RjO1xyXG5cdFx0XHRcdFx0XHQgICAmW2ZpbGxlZF1cclxuXHRcdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHRcdCAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci15ZWxsb3cpO1xyXG5cdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHQgICAucmV2aWV3XHJcblx0XHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdGlvbi1idXR0b25cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQtLWJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHRcdCAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHRcdFxyXG5cdFx0XHRcdFx0ICAgYm9yZGVyLXJhZGl1czp2YXIoLS1pb24tdmFsdWUtMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcbn1cclxuXHJcbi5zaGFyZWREaXZ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgei1pbmRleDogODg4ODg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjIyZjNlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBhIHtcclxuICAgIFx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdCAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuXHQgICAgYmFja2dyb3VuZDogI2EwMjcxODtcclxuXHQgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHQgICAgbWFyZ2luOiA3cHg7XHJcblx0ICAgIGNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHRzcGFuIHtcclxuXHQgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWRlZDtcclxuXHQgICAgcGFkZGluZzogMTdweDtcclxuXHQgICAgbWFyZ2luOiA2cHggOHB4O1xyXG5cdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgIHdpZHRoOiA5MCU7XHJcblx0ICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcblx0fVxyXG5cdGg0e1xyXG5cdFx0bWFyZ2luOiA4cHg7XHJcblx0fVxyXG59XHJcblxyXG5bcGFuZWxdXHJcblx0XHRcdCAge1xyXG5cdFx0XHRcdFx0W3BhbmVsLWhlYWRpbmdde1xyXG5cdFx0XHRcdFx0ICAgICZbY2hlY2tvdXQtaGVhZF1cclxuXHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDojZjVmNWY1O1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHQgaDRcclxuXHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHQgIG1hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdFx0XHQgYVxyXG5cdFx0XHRcdFx0XHRcdCB7ICAgICAgICAgIFxyXG4gICBcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjazMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAgdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1x0XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6ICB2YXIoLS1pb24tcGFkZGluZy0xMCkgO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHQgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ji5hY3RpdmVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcdCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0IHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbi0xMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogIHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0yMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDojYWFhYWFhO1x0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAgdmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0IFtwYW5lbC1ib2R5XVxyXG5cdFx0XHQgeyAgIGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0ICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xMCkgIHZhcigtLWlvbi1wYWRkaW5nLTApICB2YXIoLS1pb24tcGFkZGluZy0yMik7ICBcclxuXHRcdFx0XHQgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0ICAmLmFjdGl2ZVxyXG5cdFx0XHQgICB7ICBkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHQgICB9XHJcblx0XHRcdCB9XHJcblx0ICB9XHJcblxyXG5bcml0QWN0aW9uc117XHJcblx0cmlnaHQ6IDNweDtcclxuICAgIHRvcDogLTRweDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG5cclxuICAgIGlvbi1idXR0b257XHJcbiAgICBcdHdpZHRoOjI1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbn1cclxuW3BhbmVsLWJvZHlde1xyXG5cdHBhZGRpbmc6MCAhaW1wb3J0YW50O1xyXG59XHJcbltwcm9kdWN0c2Rpdl17XHJcblx0cGFkZGluZzowO1xyXG5cdC5pdGVtLW5hdGl2ZXtcclxuXHRcdGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICBcdGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcblx0fVxyXG5cdGlvbi1pdGVte1xyXG5cdFx0Ym94LXNoYWRvdzpub25lICFpbXBvcnRhbnQ7XHJcblx0XHRpb24tdGh1bWJuYWlse1xyXG5cdFx0XHRtYXJnaW46MCAxNXB4IDAgMCAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uc3RhcnMtbGluZXtcclxuXHRpLmZhLmZhLXN0YXJ7XHJcblx0XHRtYXJnaW4tcmlnaHQ6M3B4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcblttYWluU2VjV2lzaGxpc3Rde1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgW3dpc2hsaXN0bGlzdF17XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHQgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcblx0ICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHQgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHRbY2F0SGRuZ117XHJcblx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0ICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0ICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0ICAgIGNvbG9yOiAjMjMzMDNlO1xyXG5cdCAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0ICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcblx0ICAgIHBhZGRpbmc6IDBweCAxM3B4O1xyXG5cdCAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdCAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG5cdCAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcblx0ICAgIFtidWxsZXRzXXtcclxuICAgIFx0ICAgIGJhY2tncm91bmQ6ICNhMDI3MTg7XHJcblx0XHQgICAgcGFkZGluZzogMTJweCAxOXB4O1xyXG5cdFx0ICAgIGxlZnQ6IDBweDtcclxuXHRcdCAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHQgICAgbWFyZ2luOiAwO1xyXG5cdFx0ICAgIG1hcmdpbi1sZWZ0OiAtMTRweCAhaW1wb3J0YW50O1xyXG5cdFx0ICAgIGNvbG9yOiAjZmZmO1xyXG5cdCAgICB9XHJcblx0ICAgIFtzaGFyZWRUaXRsZV17XHJcbiAgICBcdCAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHRcdCAgICBmb250LXNpemU6IDEzcHg7XHJcblx0XHQgICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xyXG5cdFx0ICAgIHJpZ2h0OiAyMiU7XHJcblx0XHQgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0ICAgIGJhY2tncm91bmQ6ICMyMjJmM2ViZjtcclxuXHRcdCAgICBwYWRkaW5nOiA0cHggMTZweDtcclxuXHRcdCAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0ICAgIH1cclxuXHR9XHJcblx0W3Byb2ltZ117XHJcblx0XHRpbWd7XHJcblx0XHRcdG1heC13aWR0aDo3MHB4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuW3N1Ykhkbmdde1xyXG5cdHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuXHJcblx0XHRbaGVhZGluZy10aXRsZV0ge1xyXG5cdFx0XHRcclxuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0ICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0yMik7XHJcblx0XHRcdFx0Y29sb3I6IHZhciggIC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4ICNlNWU1ZTUgc29saWQ7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG5cdFx0XHRcdFtzcmNoLWZpbHRlcl1cclxuXHRcdFx0XHR7IGZsb2F0OnJpZ2h0O1xyXG5cdFx0XHRcdFx0W3NlYXJjaC1pbnB1dF1cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdCAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0ICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTUpICB2YXIoLS1pb24tcGFkZGluZy0xNSk7XHJcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XHJcblx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDozMnB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0W3NlYXJjaC1idXR0b25dXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogdmFyKC0taW9uLXdoLTMyKTtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6dmFyKC0taW9uLXdoLTMyKTtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHJcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMzIpO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdCAgICAgICAgfVx0ICBcclxuXHRcdH1cclxuXHR9XHJcblthZGROZXdXaXNobGlzdF17XHJcblx0d2lkdGg6IDMwcHg7XHJcbiAgICBtYXJnaW46IC0xNHB4IDAgMDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5bcml0QWN0aW9uczJde1xyXG5cdGlvbi1jaGVja2JveHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCA5cHgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbiAvKiAgV2lzaGxpc3QgUGFnZSAgIEVuZHMqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQgXHRNb2JpbGUgV2lzaGxpc3QgU3RhcnRcclxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG5cclxuaDMubWFpbldpc2hIZG5ne1xyXG5cdG1hcmdpbjogMCAwIDEwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgW2FkZG5ld3dpc2hsaXN0QXBwXXtcclxuXHRcdHdpZHRoOiAzMHB4O1xyXG5cdCAgICBtYXJnaW46MHB4IDAgMCA0cHg7XHJcblx0ICAgIGhlaWdodDogMzBweDtcclxuXHQgICAgZmxvYXQ6cmlnaHQ7XHJcblx0fVxyXG59XHJcblxyXG5bcml0QWN0aW9uc117XHJcblx0aW9uLWNoZWNrYm94e1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMTFweCk7XHJcblx0ICAgIHdpZHRoOiAzMHB4O1xyXG5cdCAgICBoZWlnaHQ6IDMwcHg7XHJcblx0ICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cdH1cclxuXHRpb24tYnV0dG9ue1xyXG5cdCAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHQgICAgaGVpZ2h0OiAzMHB4O1xyXG5cdCAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4gW3dpc2hsaXN0LW1vYl1cclxueyBcclxuXHRcdCBbd2lzaGxpc3QtaXRlbXNdXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRpb24taXRlbXtcclxuXHRcdFx0XHRcdC0tcGFkZGluZy1zdGFydDogdmFyKCAtLWlvbi1wYWRkaW5nLTEwKTtcclxuXHRcdFx0XHRcdC0tcGFkZGluZy1lbmQ6IHZhciggLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdFx0XHRcdC0tcGFkZGluZy10b3A6IHZhciggLS1pb24tcGFkZGluZy0xMCk7XHJcblx0XHRcdFx0XHQtLXBhZGRpbmctYm90dG9tOiB2YXIoIC0taW9uLXBhZGRpbmctMTApO1xyXG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogIHZhciggLS1pb24tbWFyZ2luLTEwKTtcclxuXHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHR7XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleSk7XHJcblx0XHRcdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAgdmFyKCAtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0aW9uLXRodW1ibmFpbFxyXG5cdFx0XHRcdHsgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0ICAgIGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCAvKlxyXG5cdFx0XHRcdFx0XHR3aWR0aDogdmFyKCAtLWlvbi12YWx1ZS05MCk7XHJcblx0XHRcdFx0XHQgICBoZWlnaHQ6IHZhciggLS1pb24tdmFsdWUtOTApO1xyXG5cdFx0XHRcdFx0ICBtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHQgICBtYXJnaW4tYm90dG9tOnZhcigtLWlvbi1tYXJnaW4tMCk7Ki9cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGFiZWxcclxuXHRcdFx0XHR7ICAgd2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRoM1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDo3MDA7XHJcblx0XHRcdFx0XHRcdCBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTMpO1xyXG5cdFx0XHRcdFx0XHQgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgXHJcblx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRbcHJpY2UtbWFpbl1cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0IGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0IGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0XHRcdFx0IGZvbnQtd2VpZ2h0OjYwMDtcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0IG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMyk7XHJcblx0XHRcdFx0XHRcdCAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgXHJcblx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdCBbcHJpY2VdXHJcblx0XHRcdFx0XHRcdCB7ICBcdFx0XHRcdFx0XHQgICAgIFxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcclxuXHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0ICBbcHJpY2UtZGlzY291bnRdXHJcblx0XHRcdFx0XHRcdCB7ICBcclxuXHRcdFx0XHRcdFx0ICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuXHRcdFx0XHRcdFx0XHQgY29sb3I6dmFyKCAgLS1pb24tY29sb3ItbHRncmV5KTtcclxuXHRcdFx0XHRcdFx0XHQgbWFyZ2luLWxlZnQ6dmFyKC0taW9uLXZhbHVlLTUpO1xyXG5cdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0W3JhdGluZ11cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW9uLWljb25cclxuXHRcdFx0XHRcdFx0eyAgXHJcblx0XHRcdFx0XHRcdCAgICBjb2xvcjojZDNkM2QzO1xyXG5cdFx0XHRcdFx0XHRcdCZbZmlsbGVkXVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci15ZWxsb3cpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgXHJcblx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpb24tYnV0dG9uXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IHZhciggLS1pb24tcGFkZGluZy00KTtcclxuXHRcdFx0XHRcdFx0XHRcdC0tcGFkZGluZy1zdGFydDogdmFyKCAtLWlvbi1wYWRkaW5nLTQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLWVuZDogdmFyKCAtLWlvbi1wYWRkaW5nLTQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiB2YXIoIC0taW9uLXZhbHVlLTIyKTtcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjp2YXIoLS1pb24tdmFsdWUtMCkgIHZhcigtLWlvbi12YWx1ZS0wKSAgdmFyKC0taW9uLXZhbHVlLTApIHZhcigtLWlvbi12YWx1ZS01KTtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogIHZhciggLS1pb24tZm9udC1zaXplLTEyKTtcclxuXHRcdFx0XHRcdFx0XHRcdC0tYm9yZGVyLXJhZGl1czp2YXIoIC0taW9uLXZhbHVlLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0LS1ib3JkZXItd2lkdGg6MXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHQgICB9XHJcblx0XHR9XHJcbn1cdFx0XHJcbiAvKiBNb2JpbGUgV2lzaGxpc3QgRW5kcyovXHJcbn1cdFxyXG5cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuICAvKiAgV2lzaGxpc3QgUGFnZSAgIFN0YXJ0Ki9cbiAgLyogIFdpc2hsaXN0IFBhZ2UgICBFbmRzKi9cbiAgLypcclxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0IFx0TW9iaWxlIFdpc2hsaXN0IFN0YXJ0XHJcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cbiAgLyogTW9iaWxlIFdpc2hsaXN0IEVuZHMqLyB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAtLXBhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLTApOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgIC0tcGFkZGluZy10b3A6dmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOnZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgLS1wYWRkaW5nLWVuZDp2YXIoLS1pb24tcGFkZGluZy0wKTsgfSB9XG4gIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHRyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTsgfVxuICAgICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIgdGQge1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTUpOyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHRyIHRkW2Nsb3NlLWJ0bl0gYSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHRyIHRkIFtwcm9kdWN0LW5hbWVdIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTYpOyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIgdGQgW3Byb2R1Y3QtbmFtZV0gYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIgdGQgW3ByaWNlXSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZy00KTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB0ciB0ZCBbcHJpY2VdIHNwYW4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTUpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWx0Z3JleSk7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLTEwKTsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB0ciB0ZCBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpOyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIgdGQgcFt2ZW5kb3ItbmFtZV0ge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB0ciB0ZCBwW3ZlbmRvci1uYW1lXSBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB0ciB0ZCBbcmF0aW5nXSBpb24taWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogI2RjZGNkYzsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHRyIHRkIFtyYXRpbmddIGlvbi1pY29uW2ZpbGxlZF0ge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXllbGxvdyk7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIgdGQgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pb24tdmFsdWUtMCk7IH1cbiAgaW9uLWNvbnRlbnQgLnNoYXJlZERpdiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHotaW5kZXg6IDg4ODg4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjIyZjNlO1xuICAgIGhlaWdodDogMzAlOyB9XG4gICAgaW9uLWNvbnRlbnQgLnNoYXJlZERpdiBhIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogI2EwMjcxODtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBtYXJnaW46IDdweDtcbiAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgaW9uLWNvbnRlbnQgLnNoYXJlZERpdiBzcGFuIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XG4gICAgICBwYWRkaW5nOiAxN3B4O1xuICAgICAgbWFyZ2luOiA2cHggOHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7IH1cbiAgICBpb24tY29udGVudCAuc2hhcmVkRGl2IGg0IHtcbiAgICAgIG1hcmdpbjogOHB4OyB9XG4gIGlvbi1jb250ZW50IFtwYW5lbF0gW3BhbmVsLWhlYWRpbmddW2NoZWNrb3V0LWhlYWRdIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIGlvbi1jb250ZW50IFtwYW5lbF0gW3BhbmVsLWhlYWRpbmddW2NoZWNrb3V0LWhlYWRdIGg0IHtcbiAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7IH1cbiAgICAgIGlvbi1jb250ZW50IFtwYW5lbF0gW3BhbmVsLWhlYWRpbmddW2NoZWNrb3V0LWhlYWRdIGg0IGEge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjazMpO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLTApO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICBpb24tY29udGVudCBbcGFuZWxdIFtwYW5lbC1oZWFkaW5nXVtjaGVja291dC1oZWFkXSBoNCBhIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7IH0gfVxuICAgICAgICBpb24tY29udGVudCBbcGFuZWxdIFtwYW5lbC1oZWFkaW5nXVtjaGVja291dC1oZWFkXSBoNCBhLmFjdGl2ZSBzcGFuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7IH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgIGlvbi1jb250ZW50IFtwYW5lbF0gW3BhbmVsLWhlYWRpbmddW2NoZWNrb3V0LWhlYWRdIGg0IGEge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3BhbmVsXSBbcGFuZWwtaGVhZGluZ11bY2hlY2tvdXQtaGVhZF0gaDQgYSBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLTEwKTtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMjApO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNhYWFhYWE7IH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICBpb24tY29udGVudCBbcGFuZWxdIFtwYW5lbC1oZWFkaW5nXVtjaGVja291dC1oZWFkXSBoNCBhIHNwYW4ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMTUpOyB9IH1cbiAgaW9uLWNvbnRlbnQgW3BhbmVsXSBbcGFuZWwtYm9keV0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTApIHZhcigtLWlvbi1wYWRkaW5nLTApIHZhcigtLWlvbi1wYWRkaW5nLTIyKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpOyB9XG4gICAgaW9uLWNvbnRlbnQgW3BhbmVsXSBbcGFuZWwtYm9keV0uYWN0aXZlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gIGlvbi1jb250ZW50IFtyaXRBY3Rpb25zXSB7XG4gICAgcmlnaHQ6IDNweDtcbiAgICB0b3A6IC00cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gICAgaW9uLWNvbnRlbnQgW3JpdEFjdGlvbnNdIGlvbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxuICBpb24tY29udGVudCBbcGFuZWwtYm9keV0ge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfVxuICBpb24tY29udGVudCBbcHJvZHVjdHNkaXZdIHtcbiAgICBwYWRkaW5nOiAwOyB9XG4gICAgaW9uLWNvbnRlbnQgW3Byb2R1Y3RzZGl2XSAuaXRlbS1uYXRpdmUge1xuICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IH1cbiAgICBpb24tY29udGVudCBbcHJvZHVjdHNkaXZdIGlvbi1pdGVtIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsgfVxuICAgICAgaW9uLWNvbnRlbnQgW3Byb2R1Y3RzZGl2XSBpb24taXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgbWFyZ2luOiAwIDE1cHggMCAwICFpbXBvcnRhbnQ7IH1cbiAgaW9uLWNvbnRlbnQgLnN0YXJzLWxpbmUgaS5mYS5mYS1zdGFyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweCAhaW1wb3J0YW50OyB9XG4gIGlvbi1jb250ZW50IFttYWluU2VjV2lzaGxpc3RdIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7IH1cbiAgICBpb24tY29udGVudCBbbWFpblNlY1dpc2hsaXN0XSBbd2lzaGxpc3RsaXN0XSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuICAgIGlvbi1jb250ZW50IFttYWluU2VjV2lzaGxpc3RdIFtjYXRIZG5nXSB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMjMzMDNlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIHBhZGRpbmc6IDBweCAxM3B4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7IH1cbiAgICAgIGlvbi1jb250ZW50IFttYWluU2VjV2lzaGxpc3RdIFtjYXRIZG5nXSBbYnVsbGV0c10ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYTAyNzE4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDE5cHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTRweCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogI2ZmZjsgfVxuICAgICAgaW9uLWNvbnRlbnQgW21haW5TZWNXaXNobGlzdF0gW2NhdEhkbmddIFtzaGFyZWRUaXRsZV0ge1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAvKiBmbG9hdDogcmlnaHQ7ICovXG4gICAgICAgIHJpZ2h0OiAyMiU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzIyMmYzZWJmO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4OyB9XG4gICAgaW9uLWNvbnRlbnQgW21haW5TZWNXaXNobGlzdF0gW3Byb2ltZ10gaW1nIHtcbiAgICAgIG1heC13aWR0aDogNzBweDsgfVxuICBpb24tY29udGVudCBbc3ViSGRuZ10ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cbiAgICBpb24tY29udGVudCBbc3ViSGRuZ10gW2hlYWRpbmctdGl0bGVdIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTIyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCAjZTVlNWU1IHNvbGlkO1xuICAgICAgcGFkZGluZy1ib3R0b206IDE0cHg7IH1cbiAgICAgIGlvbi1jb250ZW50IFtzdWJIZG5nXSBbaGVhZGluZy10aXRsZV0gW3NyY2gtZmlsdGVyXSB7XG4gICAgICAgIGZsb2F0OiByaWdodDsgfVxuICAgICAgICBpb24tY29udGVudCBbc3ViSGRuZ10gW2hlYWRpbmctdGl0bGVdIFtzcmNoLWZpbHRlcl0gW3NlYXJjaC1pbnB1dF0ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy01KSB2YXIoLS1pb24tcGFkZGluZy0xNSk7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0UwRTBFMDtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3N1YkhkbmddIFtoZWFkaW5nLXRpdGxlXSBbc3JjaC1maWx0ZXJdIFtzZWFyY2gtYnV0dG9uXSB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgd2lkdGg6IHZhcigtLWlvbi13aC0zMik7XG4gICAgICAgICAgaGVpZ2h0OiB2YXIoLS1pb24td2gtMzIpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0zMik7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTsgfVxuICBpb24tY29udGVudCBbYWRkTmV3V2lzaGxpc3RdIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBtYXJnaW46IC0xNHB4IDAgMDtcbiAgICBoZWlnaHQ6IDMwcHg7IH1cbiAgaW9uLWNvbnRlbnQgW3JpdEFjdGlvbnMyXSBpb24tY2hlY2tib3gge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCA5cHgpOyB9XG4gIGlvbi1jb250ZW50IGgzLm1haW5XaXNoSGRuZyB7XG4gICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgIGlvbi1jb250ZW50IGgzLm1haW5XaXNoSGRuZyBbYWRkbmV3d2lzaGxpc3RBcHBdIHtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgbWFyZ2luOiAwcHggMCAwIDRweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGZsb2F0OiByaWdodDsgfVxuICBpb24tY29udGVudCBbcml0QWN0aW9uc10gaW9uLWNoZWNrYm94IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAxMXB4KTtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7IH1cbiAgaW9uLWNvbnRlbnQgW3JpdEFjdGlvbnNdIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAtNHB4OyB9XG4gIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKCAtLWlvbi1wYWRkaW5nLTEwKTtcbiAgICAtLXBhZGRpbmctZW5kOiB2YXIoIC0taW9uLXBhZGRpbmctMCk7XG4gICAgLS1wYWRkaW5nLXRvcDogdmFyKCAtLWlvbi1wYWRkaW5nLTEwKTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoIC0taW9uLXBhZGRpbmctMTApO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xMCk7IH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTsgfSB9XG4gICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgICAgIC8qXHJcblx0XHRcdFx0XHRcdHdpZHRoOiB2YXIoIC0taW9uLXZhbHVlLTkwKTtcclxuXHRcdFx0XHRcdCAgIGhlaWdodDogdmFyKCAtLWlvbi12YWx1ZS05MCk7XHJcblx0XHRcdFx0XHQgIG1hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdCAgIG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi0wKTsqLyB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlOyB9IH1cbiAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIHtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIGgzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0zKTsgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gbGFiZWwgW3ByaWNlLW1haW5dIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0zKTsgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCBbcHJpY2UtbWFpbl0ge1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gbGFiZWwgW3ByaWNlLW1haW5dIFtwcmljZV0ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCBbcHJpY2UtbWFpbl0gW3ByaWNlLWRpc2NvdW50XSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sdGdyZXkpO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tdmFsdWUtNSk7IH1cbiAgICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gbGFiZWwgW3JhdGluZ10gaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogI2QzZDNkMzsgfVxuICAgICAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIFtyYXRpbmddIGlvbi1pY29uW2ZpbGxlZF0ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3IteWVsbG93KTsgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCBbcmF0aW5nXSBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIGlvbi1idXR0b24ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoIC0taW9uLXBhZGRpbmctNCk7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhciggLS1pb24tcGFkZGluZy00KTtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhciggLS1pb24tcGFkZGluZy00KTtcbiAgICAgIGhlaWdodDogdmFyKC0taW9uLXZhbHVlLTIyKTtcbiAgICAgIG1hcmdpbjogdmFyKC0taW9uLXZhbHVlLTApIHZhcigtLWlvbi12YWx1ZS0wKSB2YXIoLS1pb24tdmFsdWUtMCkgdmFyKC0taW9uLXZhbHVlLTUpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czp2YXIoIC0taW9uLXZhbHVlLTApO1xuICAgICAgLS1ib3JkZXItd2lkdGg6MXB4OyB9XG4iXX0= */"

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
        // if(this.userId == 0){
        //   this.router.navigate(['/login']);
        // }
        // else{
        this.presentLoading();
        this.userService.postData({ product_id: product_id, user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId, product_qty: 1 }, 'addTocart').subscribe(function (result) {
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