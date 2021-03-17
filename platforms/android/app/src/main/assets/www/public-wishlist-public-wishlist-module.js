(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-wishlist-public-wishlist-module"],{

/***/ "./src/app/public-wishlist/public-wishlist.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/public-wishlist/public-wishlist.module.ts ***!
  \***********************************************************/
/*! exports provided: PublicWishlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicWishlistPageModule", function() { return PublicWishlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-stars */ "./node_modules/ngx-stars/fesm5/ngx-stars.js");
/* harmony import */ var _public_wishlist_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./public-wishlist.page */ "./src/app/public-wishlist/public-wishlist.page.ts");









var routes = [
    {
        path: '',
        component: _public_wishlist_page__WEBPACK_IMPORTED_MODULE_8__["PublicWishlistPage"]
    }
];
var PublicWishlistPageModule = /** @class */ (function () {
    function PublicWishlistPageModule() {
    }
    PublicWishlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ngx_stars__WEBPACK_IMPORTED_MODULE_7__["NgxStarsModule"]
            ],
            declarations: [_public_wishlist_page__WEBPACK_IMPORTED_MODULE_8__["PublicWishlistPage"]]
        })
    ], PublicWishlistPageModule);
    return PublicWishlistPageModule;
}());



/***/ }),

/***/ "./src/app/public-wishlist/public-wishlist.page.html":
/*!***********************************************************!*\
  !*** ./src/app/public-wishlist/public-wishlist.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n<div class=\"ion-padding\">\n<div header_height></div>\n<!-- Breadcrumb Start -->\n\n<div breadcrumb  class=\"ion-hide-md-down\">\n\t<div breadcrumb-inner>\n\t\t<ul list-inline list-unstyled>\n\t\t<li><a routerLink=\"/home\">Home</a></li>\n\t\t\t<li class=\"active\"> Wishlist</li>\n\t\t</ul>\n\t</div><!-- /.breadcrumb-inner -->\n</div>\n\n<!-- Breadcrumb Ends -->\n\n\n<!-- Wishist browser Start -->\n<div my-wishlist-page class=\"ion-hide-md-down\">\n\n<div mainSecWishlist>\n\t<!-- hdng -->\n\t<div subHdng *ngIf=\"all_wishlist != ''\">\n\t\t<h4 heading-title>Shared Wishlist\n\t\t\t\t\n\t\t</h4>\n\t</div>\n\n\t<!-- Lists -->\n\n\t<ng-container *ngFor=\"let item of wishlist;let i = index;\">\n\t<h4 catHdng>\n\t\t{{item.wish_title}}\n\t\t\n\n\t\t<div ritActions2>\n\t   \t\t<ion-button color=\"darkred\" (click)=\"placeOrder(item)\">\n\t   \t\t\t<i class=\"fa fa-shopping-bag\"></i>\n\t   \t\t</ion-button>\n\t   </div>\n\n\t  \n\t</h4>\n\t<div wishlistList *ngFor=\"let product of item.products; let w_ind = index \" >\n\t\t<div class=\"col-sm-1\">\n\t\t<a proImg routerLink=\"/product-details/{{product.product_id}}\">\n\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{product.product_image}}\" alt=\"{{product.product_name}}\">\n\t\t</a>\n\t\t</div>\n\t\t<div class=\"col-sm-7\">\n\t\t\t<div product-name>\n\t\t\t   <a routerLink=\"/product-details/{{product.product_id}}\">\n\t\t\t      {{product.product_name}}\n\t\t\t   </a>\n\t\t\t</div>\n\t\t\t<div rating rateit>\n\t\t\t\t<ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"product?.Average_Review\" [color]=\"'#a01616'\" *ngIf=\"product?.Average_Review != null\"></ngx-stars>\n\t\t\t\t<ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"0\" [color]=\"'#a01616'\" *ngIf=\"product.Average_Review == null\"></ngx-stars>\n\t\t\t\t<!-- <span class=\"review\">( {{product?.product_reviews?.length}} {{product?.product_reviews?.length == '1' ? 'Review' : 'Reviews'}} )</span> -->\n\t\t\t</div>\n\t\t\t<div price>\n\t\t\t\t<ng-container *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price\"> Now for ${{product?.product_sale_price}}  </ng-container>\n\n    \t\t\t<ng-container *ngIf=\"errors.indexOf(product?.product_sale_price) >= 0 || product?.product_sale_price == product?.product_purchase_price\"> ${{product?.product_purchase_price}}  </ng-container>\n\n    \t\t\t<span *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price\" price-before-discount> from ${{product?.product_purchase_price}}</span>\n\t\t\t</div>\n\t\t\t<div vendor-info>\n\t\t\t\t<p *ngIf=\"product?.product_user_type == 'Vendor'\" vendor-name>Sold by <a href=\"javascript:void(0)\">{{product?.Vendors[0]?.vendor_company}}</a></p>\n\t\t\t\t<!-- <p>Item added on {{product?.wish_date | date : 'MMM d, y'}}</p> -->\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-2\">\n\t\t\t<ng-container *ngIf=\"product?.product_quantity != 0 && errors.indexOf(product?.product_quantity) == -1\">\n\t\t\t\t<ion-button color=\"darkred\" *ngIf=\"my_cart_products.indexOf(product.product_id) == -1\" (click)=\"addToCart(product.product_id,product.product_sale_price,product.product_purchase_price)\">\n\t\t\t\t\tAdd to cart\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-button color=\"darkred\" *ngIf=\"my_cart_products.indexOf(product.product_id) >= 0\">\n\t\t\t\t\tIn cart\n\t\t\t\t</ion-button>\n\t\t\t</ng-container>\n\t\t\t<ng-container tag new *ngIf=\"product?.product_quantity == 0 || errors.indexOf(product?.product_quantity) >= 0\">\n\t\t\tOut of stock\n\t\t\t</ng-container>\n\t\t</div>\n\t\t<!-- <div class=\"col-md-1\" close-btn *ngIf=\"userId == item.user_id\">\n\t\t\t<a (click)=\"removeProduct(item.wish_id, product.product_id)\">\n\t\t\t   <i class=\"fa fa-times\"></i>\n\t\t\t</a>\n\t\t</div> -->\n \t</div>\n</ng-container>\n<div *ngIf=\"wishlist == ''\" style=\"padding: 14px;\">\n\t<span>No items added in wishlist</span>\n</div>\n<div *ngIf=\"all_wishlist != '' && wishlist == ''\" style=\"padding: 14px;\">\n\t<span>No matching records found.</span>\n</div>\n\n</div>\n\n</div>\n<!-- Wishist browser End -->\n<!-- Wishist mobile Start -->\n<div wishlist-mob class=\"ion-hide-lg-up\">\n  <div wishlist-items>\n  \t<div checkout-box>\n  \t\t<!-- main hdng -->\n\t  \t<h3 class=\"mainWishHdng\">My Wishlists <ion-button addnewwishlistApp=\"\" color=\"darkred\" (click)=\"presentAlertPromptAdd()\" class=\"ion-color ion-color-darkred ios button button-solid ion-activatable ion-focusable hydrated\">\n\t\t\t\t<i class=\"fa fa-plus\"></i>\n\t\t\t</ion-button>\n\t\t</h3>\n\n\t\t<ion-card no-margin padding>\n\t\t\t<div panel panel-default *ngFor=\"let item of wishlist; let i = index \">\n\t\t\t\t <div panel-heading checkout-head>\n\t\t\t\t\t<h4>\n\t\t\t\t\t   <a href=\"javascript:void(0)\" [ngClass]=\"{'active': selectedItem.indexOf('item'+i) >= 0}\"  (click)=\"faqClicked('item'+i)\">\n\t\t\t\t\t\t  <span>1</span> {{item.wish_title}}\n\n\t\t\t\t\t\t  \t<!-- <div sharedTitle *ngIf=\"item.share_with_user.length > 0 && userId == item.user_id\"> shared with {{item.share_with_user[0].name}} {{item.share_with_user[0].last_name}}</div>\n\n\t\t\t\t\t\t\t<div sharedTitle *ngIf=\"item.share_with_user.length > 0 && userId != item.user_id\"> shared  by {{item.userData[0].name}} {{item.userData[0].last_name}}</div>  -->\n\t\t\t\t\t   </a>\n\t\t\t\t\t   <div ritActions>\n\t\t\t\t\t   \t\t<ion-button color=\"darkred\" (click)=\"placeOrder(item)\">\n\t\t\t\t\t   \t\t\t<i class=\"fa fa-shopping-bag\"></i>\n\t\t\t\t\t   \t\t</ion-button>\n\t\t\t\t\t   </div>\n\t\t\t\t\t   \n\t\t\t\t\t</h4>\n\t\t\t\t </div>\n\t\t\t\t <div panel-body  [ngClass]=\"{'active': selectedItem.indexOf('item'+i) >= 0}\">\n\n\t\t\t\t \t<ion-grid productsDiv>\n\n\t\t\t\t \t\t<ion-item lines=\"none\" *ngFor=\"let product of item.products; let wm_ind = index \">\n\t\t\t\t\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t\t\t\t\t  <a routerLink=\"/product-details/{{product.product_id}}\">\n\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{product.product_image}}\" alt=\"{{product.product_name}}\">\n\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t</ion-thumbnail>\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<h3>{{product.product_name}}</h3>\n\t\t\t\t\t\t\t<p price-main>\n\t\t\t\t\t\t\t\t<span *ngIf=\"errors.indexOf(product.product_sale_price) == -1 && product.product_sale_price != product.product_purchase_price\"> ${{product.product_sale_price}}  </span>\n\n\t\t\t\t\t            <span *ngIf=\"errors.indexOf(product.product_sale_price) >= 0 || product.product_sale_price == product.product_purchase_price\"> ${{product.product_purchase_price}}  </span>\n\n\t\t\t\t\t            <span *ngIf=\"errors.indexOf(product.product_sale_price) == -1 && product.product_sale_price != product.product_purchase_price\" price-before-discount>${{product.product_purchase_price}}</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div rating>\n\t\t\t\t\t\t\t\t<ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"product?.Average_Review\" [color]=\"'#a01616'\" *ngIf=\"product?.Average_Review != null\"></ngx-stars>\n\t\t\t\t\t\t\t\t<ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"0\" [color]=\"'#a01616'\" *ngIf=\"product.Average_Review == null\"></ngx-stars>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t   \t</label>\n\n\t\t\t\t\t\t\t<ion-button color=\"grey2\" size=\"small\" fill=\"outline\" slot=\"end\" *ngIf=\"product?.product_quantity != 0 && errors.indexOf(product?.product_quantity) == -1\">\n\t\t\t\t\t\t\t\t<ion-icon title=\"Add to Cart\"  *ngIf=\"my_cart_products.indexOf(product.product_id) == -1\" (click)=\"addToCart(product.product_id,product.product_sale_price,product.product_purchase_price)\" name=\"cart\"></ion-icon>\n\n\t\t\t\t\t\t\t\t<ion-icon title=\"In cart\" *ngIf=\"my_cart_products.indexOf(product.product_id) >= 0\" name=\"checkmark\"></ion-icon>\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t\t<ion-item lines=\"none\" *ngIf=\"all_wishlist != '' && wishlist == ''\">\n\t\t\t\t\t\t\tNo matching records found.\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item lines=\"none\" *ngIf=\"all_wishlist == ''\">\n\t\t\t\t\t\t\tNo items added in wishlist.\n\t\t\t\t\t\t</ion-item>\n\n\t\t\t\t \t</ion-grid>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-card>\n\t</div>\n\n  </div>\n</div>\n<!-- Wishist mobile End -->\n<app-recently-viewed></app-recently-viewed>\n<app-upsell-products></app-upsell-products>\n</div>\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/public-wishlist/public-wishlist.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/public-wishlist/public-wishlist.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey);\n  /*  Wishlist Page   Start*/\n  /*  Wishlist Page   Ends*/\n  /*\n\t-------------------------------------------\n\t \tMobile Wishlist Start\n\t--------------------------------\n*/\n  /* Mobile Wishlist Ends*/ }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0); } }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0);\n      --padding-bottom:var(--ion-padding-0);\n      --padding-start:var(--ion-padding-0);\n      --padding-end:var(--ion-padding-0); } }\n  ion-content [my-wishlist-page] {\n    background-color: var(--ion-color-white);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n    padding: var(--ion-padding-0);\n    overflow: hidden; }\n  ion-content [my-wishlist-page] table {\n      margin-bottom: var(--ion-margin-0); }\n  ion-content [my-wishlist-page] table tr {\n        font-family: var(--ion-font-family-2); }\n  ion-content [my-wishlist-page] table tr td {\n          vertical-align: middle;\n          padding: var(--ion-padding-15); }\n  ion-content [my-wishlist-page] table tr td[close-btn] a {\n            color: var(--ion-color-darkred);\n            text-decoration: none; }\n  ion-content [my-wishlist-page] table tr td [product-name] {\n            font-size: var(--ion-font-size-16);\n            font-family: var(--ion-font-family-2);\n            padding-bottom: var(--ion-padding-6); }\n  ion-content [my-wishlist-page] table tr td [product-name] a {\n              color: #434343;\n              text-decoration: none; }\n  ion-content [my-wishlist-page] table tr td [price] {\n            color: var(--ion-color-darkred);\n            font-size: var(--ion-font-size-16);\n            padding-top: var(--ion-padding-4);\n            font-weight: 700; }\n  ion-content [my-wishlist-page] table tr td [price] span {\n              font-size: var(--ion-font-size-15);\n              color: var(--ion-color-ltgrey);\n              text-decoration: line-through;\n              padding-left: var(--ion-padding-10); }\n  ion-content [my-wishlist-page] table tr td p {\n            font-size: var(--ion-font-size-14);\n            color: var(--ion-color-darkblack);\n            font-family: var(--ion-font-family-2); }\n  ion-content [my-wishlist-page] table tr td p[vendor-name] {\n              margin-top: 10px; }\n  ion-content [my-wishlist-page] table tr td p[vendor-name] a {\n                color: var(--ion-color-darkred);\n                text-decoration: none; }\n  ion-content [my-wishlist-page] table tr td [rating] ion-icon {\n            color: #dcdcdc; }\n  ion-content [my-wishlist-page] table tr td [rating] ion-icon[filled] {\n              color: var(--ion-color-yellow); }\n  ion-content [my-wishlist-page] table tr td ion-button {\n            --box-shadow:none;\n            font-family: var(--ion-font-family-2);\n            border-radius: var(--ion-value-0); }\n  ion-content [panel] [panel-heading][checkout-head] {\n    background: #f5f5f5;\n    position: relative; }\n  ion-content [panel] [panel-heading][checkout-head] h4 {\n      margin-top: var(--ion-margin-0); }\n  ion-content [panel] [panel-heading][checkout-head] h4 a {\n        font-family: var(--ion-font-family-2);\n        color: var(--ion-color-darkblack3);\n        text-transform: uppercase;\n        display: block;\n        margin: var(--ion-margin-0);\n        font-size: var(--ion-font-size-13);\n        font-weight: bold;\n        text-decoration: none; }\n  @media only screen and (max-width: 991px) {\n          ion-content [panel] [panel-heading][checkout-head] h4 a {\n            padding-right: var(--ion-padding-10);\n            background: var(--ion-color-white); } }\n  ion-content [panel] [panel-heading][checkout-head] h4 a.active span {\n          background: var(--ion-color-darkred); }\n  @media only screen and (max-width: 991px) {\n          ion-content [panel] [panel-heading][checkout-head] h4 a {\n            display: flex;\n            align-items: center;\n            font-size: var(--ion-font-size-12); } }\n  ion-content [panel] [panel-heading][checkout-head] h4 a span {\n          color: var(--ion-color-white);\n          display: inline-block;\n          margin-right: var(--ion-margin-10);\n          padding: var(--ion-padding-15) var(--ion-padding-20);\n          background: #aaaaaa; }\n  @media only screen and (max-width: 991px) {\n            ion-content [panel] [panel-heading][checkout-head] h4 a span {\n              padding: var(--ion-padding-15) var(--ion-padding-15); } }\n  ion-content [panel] [panel-body] {\n    display: none;\n    padding: var(--ion-padding-10) var(--ion-padding-0) var(--ion-padding-22);\n    font-family: var(--ion-font-family-2); }\n  ion-content [panel] [panel-body].active {\n      display: block; }\n  ion-content [ritActions] {\n    right: 3px;\n    top: -4px;\n    position: absolute; }\n  ion-content [ritActions] ion-button {\n      width: 25px;\n      margin-right: 8px; }\n  ion-content [panel-body] {\n    padding: 0 !important; }\n  ion-content [productsdiv] {\n    padding: 0; }\n  ion-content [productsdiv] .item-native {\n      background: #f1f1f1;\n      border: 1px solid #ddd; }\n  ion-content [productsdiv] ion-item {\n      box-shadow: none !important; }\n  ion-content [productsdiv] ion-item ion-thumbnail {\n        margin: 0 15px 0 0 !important; }\n  ion-content .stars-line i.fa.fa-star {\n    margin-right: 3px !important; }\n  ion-content [mainSecWishlist] {\n    padding: 0 20px; }\n  ion-content [mainSecWishlist] [wishlistlist] {\n      display: flex;\n      align-items: center;\n      border-bottom: 1px solid #eee;\n      padding: 10px 0;\n      margin-bottom: 20px; }\n  ion-content [mainSecWishlist] [catHdng] {\n      font-size: 18px;\n      display: flex;\n      font-weight: 600;\n      color: #23303e;\n      justify-content: space-between;\n      border: 1px solid #ddd;\n      padding: 0px 13px;\n      align-items: center;\n      background: #f1f1f1;\n      border-radius: 2px; }\n  ion-content [mainSecWishlist] [catHdng] [bullets] {\n        background: #a02718;\n        padding: 12px 19px;\n        left: 0px;\n        position: relative;\n        margin: 0;\n        margin-left: -14px !important;\n        color: #fff; }\n  ion-content [mainSecWishlist] [catHdng] [sharedTitle] {\n        color: #ffffff;\n        font-size: 13px;\n        /* float: right; */\n        right: 22%;\n        position: absolute;\n        background: #222f3ebf;\n        padding: 4px 16px;\n        border-radius: 3px; }\n  ion-content [mainSecWishlist] [proimg] img {\n      max-width: 70px; }\n  ion-content [subHdng] {\n    vertical-align: middle; }\n  ion-content [subHdng] [heading-title] {\n      font-weight: bold;\n      font-size: var(--ion-font-size-22);\n      color: var(--ion-color-darkblack);\n      border-bottom: 1px #e5e5e5 solid;\n      padding-bottom: 14px; }\n  ion-content [subHdng] [heading-title] [srch-filter] {\n        float: right; }\n  ion-content [subHdng] [heading-title] [srch-filter] [search-input] {\n          font-size: var(--ion-font-size-14);\n          font-weight: 500;\n          padding: var(--ion-padding-5) var(--ion-padding-15);\n          border: 1px solid #E0E0E0;\n          float: left;\n          height: 32px; }\n  ion-content [subHdng] [heading-title] [srch-filter] [search-button] {\n          float: left;\n          width: var(--ion-wh-32);\n          height: var(--ion-wh-32);\n          background: var(--ion-color-darkred);\n          text-align: center;\n          line-height: var(--ion-value-32);\n          font-size: var(--ion-font-size-16);\n          color: var(--ion-color-white); }\n  ion-content [addNewWishlist] {\n    width: 30px;\n    margin: -14px 0 0;\n    height: 30px; }\n  ion-content [ritActions2] ion-checkbox {\n    -webkit-transform: translate(-10px, 9px);\n            transform: translate(-10px, 9px); }\n  ion-content h3.mainWishHdng {\n    margin: 0 0 10px;\n    width: 100%;\n    float: left;\n    font-size: 18px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  ion-content h3.mainWishHdng [addnewwishlistApp] {\n      width: 30px;\n      margin: 0px 0 0 4px;\n      height: 30px;\n      float: right; }\n  ion-content [ritActions] ion-checkbox {\n    -webkit-transform: translate(-1px, 11px);\n            transform: translate(-1px, 11px);\n    width: 30px;\n    height: 30px;\n    --border-radius: 8px; }\n  ion-content [ritActions] ion-button {\n    margin-right: 8px;\n    height: 30px;\n    margin-top: -4px; }\n  ion-content [wishlist-mob] [wishlist-items] ion-item {\n    --padding-start: var( --ion-padding-10);\n    --padding-end: var( --ion-padding-0);\n    --padding-top: var( --ion-padding-10);\n    --padding-bottom: var( --ion-padding-10);\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);\n    margin-bottom: var(--ion-margin-10); }\n  @media only screen and (max-width: 991px) {\n      ion-content [wishlist-mob] [wishlist-items] ion-item {\n        border-bottom: 1px solid var(--ion-color-grey);\n        display: flex;\n        margin-bottom: var(--ion-margin-0); } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item ion-thumbnail {\n      /*\n\t\t\t\t\t\twidth: var( --ion-value-90);\n\t\t\t\t\t   height: var( --ion-value-90);\n\t\t\t\t\t  margin-top:var(--ion-margin-0);\n\t\t\t\t\t   margin-bottom:var(--ion-margin-0);*/ }\n  @media only screen and (max-width: 991px) {\n        ion-content [wishlist-mob] [wishlist-items] ion-item ion-thumbnail {\n          height: 100%; } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label {\n      width: 100%; }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label h3 {\n        margin-top: var(--ion-margin-0);\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-14);\n        font-weight: 700;\n        margin-bottom: var(--ion-margin-3); }\n  @media only screen and (max-width: 576px) {\n          ion-content [wishlist-mob] [wishlist-items] ion-item label h3 {\n            font-size: var(--ion-font-size-12); } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [price-main] {\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-14);\n        font-weight: 600;\n        margin-bottom: var(--ion-margin-3); }\n  @media only screen and (max-width: 576px) {\n          ion-content [wishlist-mob] [wishlist-items] ion-item label [price-main] {\n            font-size: var(--ion-font-size-12); } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [price-main] [price] {\n          color: var(--ion-color-darkred); }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [price-main] [price-discount] {\n          text-decoration: line-through;\n          color: var(--ion-color-ltgrey);\n          margin-left: var(--ion-value-5); }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [rating] ion-icon {\n        color: #d3d3d3; }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [rating] ion-icon[filled] {\n          color: var(--ion-color-yellow); }\n  @media only screen and (max-width: 576px) {\n          ion-content [wishlist-mob] [wishlist-items] ion-item label [rating] ion-icon {\n            font-size: var(--ion-font-size-12); } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item ion-button {\n      --padding-start: var( --ion-padding-4);\n      --padding-start: var( --ion-padding-4);\n      --padding-end: var( --ion-padding-4);\n      height: var(--ion-value-22);\n      margin: var(--ion-value-0) var(--ion-value-0) var(--ion-value-0) var(--ion-value-5);\n      font-size: var(--ion-font-size-12);\n      --border-radius:var( --ion-value-0);\n      --border-width:1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9wdWJsaWMtd2lzaGxpc3QvcHVibGljLXdpc2hsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHVibGljLXdpc2hsaXN0L3B1YmxpYy13aXNobGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFFQSxrQ0FBYTtFQVliLDBCQUFBO0VBdVJBLHlCQUFBO0VBVUQ7Ozs7Q0N2U0M7RUQwYUEsd0JBQUEsRUFBeUI7RUEvYXpCO0lBSEE7TUFLRyxrQ0FBYyxFQUFBLEVBOGFqQjtFQTVhQztJQVBEO01BU0csa0NBQWM7TUFDZCxxQ0FBaUI7TUFDakIsb0NBQWdCO01BQ2hCLGtDQUFjLEVBQUEsRUF1YWpCO0VBbmJBO0lBZ0JHLHdDQUF1QztJQUN2QywyQ0FBdUM7SUFDdkMsNkJBQTZCO0lBQzdCLGdCQUFnQixFQUFBO0VBbkJuQjtNQXFCSyxrQ0FBa0MsRUFBQTtFQXJCdkM7UUF1Qk8scUNBQXFDLEVBQUE7RUF2QjVDO1VBMkJHLHNCQUFxQjtVQUNyQiw4QkFBOEIsRUFBQTtFQTVCakM7WUFpQ3dCLCtCQUErQjtZQUNqRCxxQkFBb0IsRUFBQTtFQWxDMUI7WUF1Q0ssa0NBQWtDO1lBQy9CLHFDQUFxQztZQUN4QyxvQ0FBb0MsRUFBQTtFQXpDekM7Y0E0Q1EsY0FBYztjQUNoQixxQkFBb0IsRUFBQTtFQTdDMUI7WUFtRFMsK0JBQWdDO1lBQ25DLGtDQUFrQztZQUNsQyxpQ0FBaUM7WUFDakMsZ0JBQWUsRUFBQTtFQXREckI7Y0F5RGEsa0NBQWtDO2NBQ3ZDLDhCQUE4QjtjQUM5Qiw2QkFBNkI7Y0FDN0IsbUNBQW1DLEVBQUE7RUE1RDNDO1lBaUVTLGtDQUFrQztZQUNuQixpQ0FBbUM7WUFDbkMscUNBQXFDLEVBQUE7RUFuRTdEO2NBcUV5QixnQkFBZ0IsRUFBQTtFQXJFekM7Z0JBd0V3QiwrQkFBK0I7Z0JBQ2hELHFCQUFvQixFQUFBO0VBekUzQjtZQWdGVyxjQUFhLEVBQUE7RUFoRnhCO2NBbUZTLDhCQUE2QixFQUFBO0VBbkZ0QztZQTRGSSxpQkFBYTtZQUNWLHFDQUFxQztZQUNyQyxpQ0FBZ0MsRUFBQTtFQTlGdkM7SUEyR0ssbUJBQWtCO0lBQ2xCLGtCQUFpQixFQUFBO0VBNUd0QjtNQWdIUSwrQkFBOEIsRUFBQTtFQWhIdEM7UUFtSG9CLHFDQUFxQztRQUNoRCxrQ0FBa0M7UUFDbEMseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCwyQkFBNEI7UUFDNUIsa0NBQWtDO1FBQ2xDLGlCQUFpQjtRQUNqQixxQkFBb0IsRUFBQTtFQUNVO1VBM0h2QztZQTZIVSxvQ0FBcUM7WUFDakMsa0NBQWtDLEVBQUEsRUEyQnhDO0VBekpSO1VBb0lhLG9DQUFvQyxFQUFBO0VBR3hDO1VBdklUO1lBeUljLGFBQWE7WUFDaEIsbUJBQW1CO1lBQ25CLGtDQUFrQyxFQUFBLEVBY3JDO0VBekpSO1VBK0lTLDZCQUE2QjtVQUM3QixxQkFBcUI7VUFDckIsa0NBQWtDO1VBQ2xDLG9EQUFxRDtVQUNyRCxtQkFBa0IsRUFBQTtFQUNoQjtZQXBKWDtjQXNKVSxvREFBcUQsRUFBQSxFQUV0RDtFQXhKVDtJQThKTyxhQUFZO0lBQ1oseUVBQTJFO0lBQzlFLHFDQUFxQyxFQUFBO0VBaEt6QztNQWtLUSxjQUFhLEVBQUE7RUFsS3JCO0lBeUtBLFVBQVU7SUFDUCxTQUFTO0lBQ1Qsa0JBQWlCLEVBQUE7RUEzS3BCO01BOEtJLFdBQVU7TUFDUCxpQkFBaUIsRUFBQTtFQS9LeEI7SUFtTEEscUJBQW9CLEVBQUE7RUFuTHBCO0lBc0xBLFVBQVMsRUFBQTtFQXRMVDtNQXdMQyxtQkFBbUI7TUFDaEIsc0JBQXNCLEVBQUE7RUF6TDFCO01BNExDLDJCQUEwQixFQUFBO0VBNUwzQjtRQThMRSw2QkFBNEIsRUFBQTtFQTlMOUI7SUFvTUMsNEJBQTJCLEVBQUE7RUFwTTVCO0lBd01HLGVBQWUsRUFBQTtFQXhNbEI7TUEwTU8sYUFBYTtNQUNoQixtQkFBbUI7TUFDbkIsNkJBQTZCO01BQzdCLGVBQWU7TUFDZixtQkFBbUIsRUFBQTtFQTlNdkI7TUFpTkMsZUFBZTtNQUNaLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLDhCQUE4QjtNQUM5QixzQkFBc0I7TUFDdEIsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsa0JBQWtCLEVBQUE7RUExTnRCO1FBNE5RLG1CQUFtQjtRQUN0QixrQkFBa0I7UUFDbEIsU0FBUztRQUNULGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsNkJBQTZCO1FBQzdCLFdBQVcsRUFBQTtFQWxPaEI7UUFxT1EsY0FBYztRQUNqQixlQUFlO1FBQ2Ysa0JBQUE7UUFDQSxVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsa0JBQWtCLEVBQUE7RUE1T3ZCO01BaVBFLGVBQWMsRUFBQTtFQWpQaEI7SUF1UEEsc0JBQXFCLEVBQUE7RUF2UHJCO01BMlBHLGlCQUFpQjtNQUNkLGtDQUFrQztNQUNyQyxpQ0FBbUM7TUFDbkMsZ0NBQWdDO01BQzlCLG9CQUFvQixFQUFBO0VBL1B6QjtRQWlRSyxZQUFXLEVBQUE7RUFqUWhCO1VBb1FRLGtDQUFrQztVQUNyQyxnQkFBZ0I7VUFDYixtREFBb0Q7VUFDdkQseUJBQXlCO1VBQ3pCLFdBQVc7VUFDVixZQUFXLEVBQUE7RUF6UWpCO1VBNlFTLFdBQVc7VUFDZCx1QkFBdUI7VUFDdkIsd0JBQXVCO1VBQ3ZCLG9DQUFvQztVQUNwQyxrQkFBa0I7VUFDbEIsZ0NBQWdDO1VBQ2hDLGtDQUFrQztVQUNsQyw2QkFBNEIsRUFBQTtFQXBSbEM7SUEwUkEsV0FBVztJQUNSLGlCQUFpQjtJQUNqQixZQUFZLEVBQUE7RUE1UmY7SUFnU0Msd0NBQWdDO1lBQWhDLGdDQUFnQyxFQUFBO0VBaFNqQztJQXNUQSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNSLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUIsRUFBQTtFQTVUdEI7TUE4VEMsV0FBVztNQUNSLG1CQUFrQjtNQUNsQixZQUFZO01BQ1osWUFBVyxFQUFBO0VBalVmO0lBdVVDLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDN0IsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBZ0IsRUFBQTtFQTFVcEI7SUE2VUksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTtFQS9VcEI7SUEwVkksdUNBQWdCO0lBQ2hCLG9DQUFjO0lBQ2QscUNBQWM7SUFDZCx3Q0FBaUI7SUFDakIsMkNBQTJDO0lBQzFDLG1DQUFxQyxFQUFBO0VBQ3JDO01BaFdMO1FBaVdPLDhDQUE2QztRQUMxQyxhQUFhO1FBQ2hCLGtDQUFvQyxFQUFBLEVBNEVyQztFQS9hTjtNQTBXSTs7OzsyQ0M3SHNDLEVEaUlDO0VBUm5DO1FBdFdSO1VBd1dVLFlBQVksRUFBQSxFQU9sQjtFQS9XSjtNQWlYTyxXQUFXLEVBQUE7RUFqWGxCO1FBb1hLLCtCQUE4QjtRQUM5QixxQ0FBb0M7UUFDcEMsa0NBQWlDO1FBQ2pDLGdCQUFlO1FBQ2Qsa0NBQWtDLEVBQUE7RUFDbEM7VUF6WE47WUEyWE0sa0NBQWlDLEVBQUEsRUFFbEM7RUE3WEw7UUFnWU0scUNBQW9DO1FBQ3BDLGtDQUFpQztRQUNqQyxnQkFBZTtRQUNmLGtDQUFrQyxFQUFBO0VBQ2pDO1VBcFlQO1lBc1lNLGtDQUFpQyxFQUFBLEVBWWxDO0VBbFpMO1VBMFlNLCtCQUE4QixFQUFBO0VBMVlwQztVQThZVSw2QkFBNkI7VUFDaEMsOEJBQStCO1VBQy9CLCtCQUE4QixFQUFBO0VBaFpyQztRQXVaUyxjQUFhLEVBQUE7RUF2WnRCO1VBMFpPLDhCQUE2QixFQUFBO0VBRTdCO1VBNVpQO1lBOFpNLGtDQUFpQyxFQUFBLEVBRWpDO0VBaGFOO01Bc2FPLHNDQUFnQjtNQUNoQixzQ0FBZ0I7TUFDaEIsb0NBQWM7TUFDZCwyQkFBNEI7TUFDNUIsbUZBQW9GO01BQ3BGLGtDQUFvQztNQUNwQyxtQ0FBZ0I7TUFDaEIsa0JBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy13aXNobGlzdC9wdWJsaWMtd2lzaGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGlvbi1jb250ZW50XG57ICBcblx0LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5KTtcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxuXHR7XG5cdCAgIC0tcGFkZGluZy10b3A6dmFyKC0taW9uLXBhZGRpbmctMCk7XG5cdH1cblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdHtcblx0ICAgLS1wYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZy0wKTtcblx0ICAgLS1wYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZy0wKTtcblx0ICAgLS1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLTApO1xuXHQgICAtLXBhZGRpbmctZW5kOnZhcigtLWlvbi1wYWRkaW5nLTApO1xuXHR9XG4gLyogIFdpc2hsaXN0IFBhZ2UgICBTdGFydCovXG4gW215LXdpc2hsaXN0LXBhZ2VdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwuMDgpO1xuICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cdHRhYmxlXG5cdHsgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHR0clxuXHRcdHtcdCAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1x0XHRcblx0XHRcdFxuXHRcdFx0dGRcblx0XHRcdHtcblx0XHRcdFx0dmVydGljYWwtYWxpZ246bWlkZGxlOyAgIFxuXHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSk7XG5cdFx0XHRcdCZbY2xvc2UtYnRuXVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ICAgYVxuICAgICAgICAgICAgICAgICAgICAgICB7XHRcdFx0XHRcdCAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7IFxuXHRcdFx0XHRcdFx0IHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHRcdFx0XHRcdCAgIH1cblx0XHRcdFx0fVxuXHRcdFx0XHRbcHJvZHVjdC1uYW1lXVxuXHRcdFx0XHR7ICAgICBcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XG5cdFx0XHRcdFx0ICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHRcdFxuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTYpO1xuXHRcdFx0XHQgICAgYVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgICAgY29sb3I6ICM0MzQzNDM7XG5cdFx0XHRcdFx0XHQgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdFx0XHRcdCAgIH1cblx0XHRcdFx0XG5cdFx0XHRcdH0gXG5cdFx0XHRcdCBbcHJpY2VdXG5cdFx0XHRcdCB7XG5cdFx0XHRcdFx0ICAgICBjb2xvcjogIHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcblx0XHRcdFx0XHRcdCBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTYpO1xuXHRcdFx0XHRcdFx0IHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZy00KTtcblx0XHRcdFx0XHRcdCBmb250LXdlaWdodDo3MDA7XG5cdFx0XHRcdFx0XHQgc3BhblxuXHRcdFx0XHRcdFx0IHtcblx0XHRcdFx0XHRcdFx0ICAgICAgXHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1sdGdyZXkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcblx0XHRcdFx0XHRcdCB9XG5cdFx0XHRcdCB9XG5cdFx0XHRcdCAgIHBcblx0XHRcdFx0ICAge1xuXHRcdFx0XHRcdCAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKCAgLS1pb24tY29sb3ItZGFya2JsYWNrKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcdFxuXHRcdFx0XHRcdCZbdmVuZG9yLW5hbWVdXG4gICAgICAgICAgICAgICAgICAgIHsgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRcdFx0ICAgYVxuICAgICAgICAgICAgICAgICAgICAgICB7XHRcdFx0XHRcdCAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG5cdFx0XHRcdFx0XHQgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHRcdFx0XHRcdCAgIH1cblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxuXHRcdFx0XHQgICB9XG5cdFx0XHRcdCAgIFtyYXRpbmddXG5cdFx0XHRcdCAgIHtcblx0XHRcdFx0XHQgICBpb24taWNvblxuXHRcdFx0XHRcdCAgIHsgICBjb2xvcjojZGNkY2RjO1xuXHRcdFx0XHRcdFx0ICAgJltmaWxsZWRdXG5cdFx0XHRcdFx0XHQgICB7XG5cdFx0XHRcdFx0XHRcdCAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci15ZWxsb3cpO1xuXHRcdFx0XHRcdFx0ICAgfVxuXHRcdFx0XHRcdCAgIH1cblx0XHRcdFx0XHQgICAucmV2aWV3XG5cdFx0XHRcdFx0ICAge1xuXHRcdFx0XHRcdCAgIH1cblx0XHRcdFx0ICAgfVxuXHRcdFx0XHRpb24tYnV0dG9uXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQtLWJveC1zaGFkb3c6bm9uZTtcblx0XHRcdFx0XHQgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1x0XHRcblx0XHRcdFx0XHQgICBib3JkZXItcmFkaXVzOnZhcigtLWlvbi12YWx1ZS0wKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0fVxufVxuXG5bcGFuZWxdXG5cdFx0XHQgIHtcblx0XHRcdFx0XHRbcGFuZWwtaGVhZGluZ117XG5cdFx0XHRcdFx0ICAgICZbY2hlY2tvdXQtaGVhZF1cblx0XHRcdFx0XHRcdCB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNmNWY1ZjU7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0XHRcdFx0XHRcdCBcblx0XHRcdFx0XHRcdCBoNFxuXHRcdFx0XHRcdFx0IHtcblx0XHRcdFx0XHRcdFx0ICBtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0XHRcdCBhXG5cdFx0XHRcdFx0XHRcdCB7ICAgICAgICAgIFxuICAgXHRcdFx0XHRcdFx0XHQgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrMyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46ICB2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHRcdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyAgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDogIHZhcigtLWlvbi1wYWRkaW5nLTEwKSA7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHQgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmLmFjdGl2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgc3BhblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcdCBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ICBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0IHNwYW5cblx0XHRcdFx0XHRcdFx0XHQge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tMTApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAgdmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDojYWFhYWFhO1x0IFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ICBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAgdmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdCB9XG5cdFx0XHRcdFx0XHRcdCB9XG5cdFx0XHRcdFx0XHQgfVxuXHRcdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCBbcGFuZWwtYm9keV1cblx0XHRcdCB7ICAgZGlzcGxheTpub25lO1xuXHRcdFx0ICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xMCkgIHZhcigtLWlvbi1wYWRkaW5nLTApICB2YXIoLS1pb24tcGFkZGluZy0yMik7ICBcblx0XHRcdFx0IGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHQgICYuYWN0aXZlXG5cdFx0XHQgICB7ICBkaXNwbGF5OmJsb2NrO1xuXHRcdFx0XHRcdFx0ICBcblx0XHRcdCAgIH1cblx0XHRcdCB9XG5cdCAgfVxuXG5bcml0QWN0aW9uc117XG5cdHJpZ2h0OiAzcHg7XG4gICAgdG9wOiAtNHB4O1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuXG4gICAgaW9uLWJ1dHRvbntcbiAgICBcdHdpZHRoOjI1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cbn1cbltwYW5lbC1ib2R5XXtcblx0cGFkZGluZzowICFpbXBvcnRhbnQ7XG59XG5bcHJvZHVjdHNkaXZde1xuXHRwYWRkaW5nOjA7XG5cdC5pdGVtLW5hdGl2ZXtcblx0XHRiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIFx0Ym9yZGVyOiAxcHggc29saWQgI2RkZDtcblx0fVxuXHRpb24taXRlbXtcblx0XHRib3gtc2hhZG93Om5vbmUgIWltcG9ydGFudDtcblx0XHRpb24tdGh1bWJuYWlse1xuXHRcdFx0bWFyZ2luOjAgMTVweCAwIDAgIWltcG9ydGFudDtcblx0XHR9XG5cdH1cbn1cbi5zdGFycy1saW5le1xuXHRpLmZhLmZhLXN0YXJ7XG5cdFx0bWFyZ2luLXJpZ2h0OjNweCAhaW1wb3J0YW50O1xuXHR9XG59XG5bbWFpblNlY1dpc2hsaXN0XXtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgW3dpc2hsaXN0bGlzdF17XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cdCAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXHQgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG5cdCAgICBwYWRkaW5nOiAxMHB4IDA7XG5cdCAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblx0W2NhdEhkbmdde1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0ICAgIGRpc3BsYXk6IGZsZXg7XG5cdCAgICBmb250LXdlaWdodDogNjAwO1xuXHQgICAgY29sb3I6ICMyMzMwM2U7XG5cdCAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdCAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuXHQgICAgcGFkZGluZzogMHB4IDEzcHg7XG5cdCAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXHQgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcblx0ICAgIGJvcmRlci1yYWRpdXM6IDJweDtcblx0ICAgIFtidWxsZXRzXXtcbiAgICBcdCAgICBiYWNrZ3JvdW5kOiAjYTAyNzE4O1xuXHRcdCAgICBwYWRkaW5nOiAxMnB4IDE5cHg7XG5cdFx0ICAgIGxlZnQ6IDBweDtcblx0XHQgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdCAgICBtYXJnaW46IDA7XG5cdFx0ICAgIG1hcmdpbi1sZWZ0OiAtMTRweCAhaW1wb3J0YW50O1xuXHRcdCAgICBjb2xvcjogI2ZmZjtcblx0ICAgIH1cblx0ICAgIFtzaGFyZWRUaXRsZV17XG4gICAgXHQgICAgY29sb3I6ICNmZmZmZmY7XG5cdFx0ICAgIGZvbnQtc2l6ZTogMTNweDtcblx0XHQgICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xuXHRcdCAgICByaWdodDogMjIlO1xuXHRcdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0ICAgIGJhY2tncm91bmQ6ICMyMjJmM2ViZjtcblx0XHQgICAgcGFkZGluZzogNHB4IDE2cHg7XG5cdFx0ICAgIGJvcmRlci1yYWRpdXM6IDNweDtcblx0ICAgIH1cblx0fVxuXHRbcHJvaW1nXXtcblx0XHRpbWd7XG5cdFx0XHRtYXgtd2lkdGg6NzBweDtcblx0XHR9XG5cdH1cbn1cblxuW3N1Ykhkbmdde1xuXHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG5cblx0XHRbaGVhZGluZy10aXRsZV0ge1xuXHRcdFx0XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0ICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0yMik7XG5cdFx0XHRcdGNvbG9yOiB2YXIoICAtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggI2U1ZTVlNSBzb2xpZDtcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxNHB4O1xuXHRcdFx0XHRbc3JjaC1maWx0ZXJdXG5cdFx0XHRcdHsgZmxvYXQ6cmlnaHQ7XG5cdFx0XHRcdFx0W3NlYXJjaC1pbnB1dF1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdCAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy01KSAgdmFyKC0taW9uLXBhZGRpbmctMTUpO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI0UwRTBFMDtcblx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6MzJweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0W3NlYXJjaC1idXR0b25dXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ICAgIGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogdmFyKC0taW9uLXdoLTMyKTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OnZhcigtLWlvbi13aC0zMik7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTMyKTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcblx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdFx0XHR9XG5cdFx0ICAgICAgICB9XHQgIFxuXHRcdH1cblx0fVxuW2FkZE5ld1dpc2hsaXN0XXtcblx0d2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luOiAtMTRweCAwIDA7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuW3JpdEFjdGlvbnMyXXtcblx0aW9uLWNoZWNrYm94e1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCA5cHgpO1xuXHR9XG59XG5cblxuIC8qICBXaXNobGlzdCBQYWdlICAgRW5kcyovXG5cblxuXG5cblxuXG5cblxuXG4vKlxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCBcdE1vYmlsZSBXaXNobGlzdCBTdGFydFxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuaDMubWFpbldpc2hIZG5ne1xuXHRtYXJnaW46IDAgMCAxMHB4O1xuXHR3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBbYWRkbmV3d2lzaGxpc3RBcHBde1xuXHRcdHdpZHRoOiAzMHB4O1xuXHQgICAgbWFyZ2luOjBweCAwIDAgNHB4O1xuXHQgICAgaGVpZ2h0OiAzMHB4O1xuXHQgICAgZmxvYXQ6cmlnaHQ7XG5cdH1cbn1cblxuW3JpdEFjdGlvbnNde1xuXHRpb24tY2hlY2tib3h7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMTFweCk7XG5cdCAgICB3aWR0aDogMzBweDtcblx0ICAgIGhlaWdodDogMzBweDtcblx0ICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuXHR9XG5cdGlvbi1idXR0b257XG5cdCAgICBtYXJnaW4tcmlnaHQ6IDhweDtcblx0ICAgIGhlaWdodDogMzBweDtcblx0ICAgIG1hcmdpbi10b3A6IC00cHg7XG5cdH1cbn1cblxuXG5cbiBbd2lzaGxpc3QtbW9iXVxueyBcblx0XHQgW3dpc2hsaXN0LWl0ZW1zXVxuXHRcdFx0XHR7XG5cdFx0XHRpb24taXRlbXtcblx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IHZhciggLS1pb24tcGFkZGluZy0xMCk7XG5cdFx0XHRcdFx0LS1wYWRkaW5nLWVuZDogdmFyKCAtLWlvbi1wYWRkaW5nLTApO1xuXHRcdFx0XHRcdC0tcGFkZGluZy10b3A6IHZhciggLS1pb24tcGFkZGluZy0xMCk7XG5cdFx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogdmFyKCAtLWlvbi1wYWRkaW5nLTEwKTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogIHZhciggLS1pb24tbWFyZ2luLTEwKTtcblx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0XHRcdHtcdGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5KTtcblx0XHRcdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogIHZhciggLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0aW9uLXRodW1ibmFpbFxuXHRcdFx0XHR7ICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ICAgIGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0IC8qXG5cdFx0XHRcdFx0XHR3aWR0aDogdmFyKCAtLWlvbi12YWx1ZS05MCk7XG5cdFx0XHRcdFx0ICAgaGVpZ2h0OiB2YXIoIC0taW9uLXZhbHVlLTkwKTtcblx0XHRcdFx0XHQgIG1hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdFx0XHQgICBtYXJnaW4tYm90dG9tOnZhcigtLWlvbi1tYXJnaW4tMCk7Ki9cblx0XHRcdFx0fVxuXHRcdFx0XHRsYWJlbFxuXHRcdFx0XHR7ICAgd2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0aDNcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDo3MDA7XG5cdFx0XHRcdFx0XHQgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0zKTtcblx0XHRcdFx0XHRcdCBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXG5cdFx0XHRcdFx0XHQge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IFxuXHRcdFx0XHRcdFx0IH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0W3ByaWNlLW1haW5dXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0IGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0XHRcdFx0XHRcdCBmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG5cdFx0XHRcdFx0XHQgZm9udC13ZWlnaHQ6NjAwO1x0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0IG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMyk7XG5cdFx0XHRcdFx0XHQgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcblx0XHRcdFx0XHRcdCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgXG5cdFx0XHRcdFx0XHQgfVxuXHRcdFx0XHRcdFx0IFtwcmljZV1cblx0XHRcdFx0XHRcdCB7ICBcdFx0XHRcdFx0XHQgICAgIFxuXHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG5cdFx0XHRcdFx0XHQgfVxuXHRcdFx0XHRcdFx0ICBbcHJpY2UtZGlzY291bnRdXG5cdFx0XHRcdFx0XHQgeyAgXG5cdFx0XHRcdFx0XHQgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuXHRcdFx0XHRcdFx0XHQgY29sb3I6dmFyKCAgLS1pb24tY29sb3ItbHRncmV5KTtcblx0XHRcdFx0XHRcdFx0IG1hcmdpbi1sZWZ0OnZhcigtLWlvbi12YWx1ZS01KTtcblx0XHRcdFx0XHRcdCB9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFtyYXRpbmddXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aW9uLWljb25cblx0XHRcdFx0XHRcdHsgIFxuXHRcdFx0XHRcdFx0ICAgIGNvbG9yOiNkM2QzZDM7XG5cdFx0XHRcdFx0XHRcdCZbZmlsbGVkXVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXllbGxvdyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0IEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcblx0XHRcdFx0XHRcdCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgXG5cdFx0XHRcdFx0XHQgfVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpb24tYnV0dG9uXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdC0tcGFkZGluZy1zdGFydDogdmFyKCAtLWlvbi1wYWRkaW5nLTQpO1xuXHRcdFx0XHRcdFx0XHRcdC0tcGFkZGluZy1zdGFydDogdmFyKCAtLWlvbi1wYWRkaW5nLTQpO1xuXHRcdFx0XHRcdFx0XHRcdC0tcGFkZGluZy1lbmQ6IHZhciggLS1pb24tcGFkZGluZy00KTtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IHZhciggLS1pb24tdmFsdWUtMjIpO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjp2YXIoLS1pb24tdmFsdWUtMCkgIHZhcigtLWlvbi12YWx1ZS0wKSAgdmFyKC0taW9uLXZhbHVlLTApIHZhcigtLWlvbi12YWx1ZS01KTtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6ICB2YXIoIC0taW9uLWZvbnQtc2l6ZS0xMik7XG5cdFx0XHRcdFx0XHRcdFx0LS1ib3JkZXItcmFkaXVzOnZhciggLS1pb24tdmFsdWUtMCk7XG5cdFx0XHRcdFx0XHRcdFx0LS1ib3JkZXItd2lkdGg6MXB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdCAgIH1cblx0XHR9XG59XHRcdFxuIC8qIE1vYmlsZSBXaXNobGlzdCBFbmRzKi9cbn1cdCIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5KTtcbiAgLyogIFdpc2hsaXN0IFBhZ2UgICBTdGFydCovXG4gIC8qICBXaXNobGlzdCBQYWdlICAgRW5kcyovXG4gIC8qXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0IFx0TW9iaWxlIFdpc2hsaXN0IFN0YXJ0XG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuICAvKiBNb2JpbGUgV2lzaGxpc3QgRW5kcyovIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgIC0tcGFkZGluZy10b3A6dmFyKC0taW9uLXBhZGRpbmctMCk7IH0gfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgLS1wYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZy0wKTtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206dmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgICAtLXBhZGRpbmctZW5kOnZhcigtLWlvbi1wYWRkaW5nLTApOyB9IH1cbiAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTApOyB9XG4gICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpOyB9XG4gICAgICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB0ciB0ZCB7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSk7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIgdGRbY2xvc2UtYnRuXSBhIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIgdGQgW3Byb2R1Y3QtbmFtZV0ge1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctNik7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB0ciB0ZCBbcHJvZHVjdC1uYW1lXSBhIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM0MzQzNDM7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB0ciB0ZCBbcHJpY2VdIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTYpO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLTQpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHRyIHRkIFtwcmljZV0gc3BhbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNSk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbHRncmV5KTtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmctMTApOyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHRyIHRkIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB0ciB0ZCBwW3ZlbmRvci1uYW1lXSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHRyIHRkIHBbdmVuZG9yLW5hbWVdIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHRyIHRkIFtyYXRpbmddIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZGNkY2RjOyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIgdGQgW3JhdGluZ10gaW9uLWljb25bZmlsbGVkXSB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3IteWVsbG93KTsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB0ciB0ZCBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS0wKTsgfVxuICBpb24tY29udGVudCBbcGFuZWxdIFtwYW5lbC1oZWFkaW5nXVtjaGVja291dC1oZWFkXSB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICBpb24tY29udGVudCBbcGFuZWxdIFtwYW5lbC1oZWFkaW5nXVtjaGVja291dC1oZWFkXSBoNCB7XG4gICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTApOyB9XG4gICAgICBpb24tY29udGVudCBbcGFuZWxdIFtwYW5lbC1oZWFkaW5nXVtjaGVja291dC1oZWFkXSBoNCBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbi0wKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3BhbmVsXSBbcGFuZWwtaGVhZGluZ11bY2hlY2tvdXQtaGVhZF0gaDQgYSB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZy0xMCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpOyB9IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3BhbmVsXSBbcGFuZWwtaGVhZGluZ11bY2hlY2tvdXQtaGVhZF0gaDQgYS5hY3RpdmUgc3BhbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpOyB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICBpb24tY29udGVudCBbcGFuZWxdIFtwYW5lbC1oZWFkaW5nXVtjaGVja291dC1oZWFkXSBoNCBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFtwYW5lbF0gW3BhbmVsLWhlYWRpbmddW2NoZWNrb3V0LWhlYWRdIGg0IGEgc3BhbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbi0xMCk7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYWFhYWFhOyB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3BhbmVsXSBbcGFuZWwtaGVhZGluZ11bY2hlY2tvdXQtaGVhZF0gaDQgYSBzcGFuIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTE1KTsgfSB9XG4gIGlvbi1jb250ZW50IFtwYW5lbF0gW3BhbmVsLWJvZHldIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEwKSB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0yMik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTsgfVxuICAgIGlvbi1jb250ZW50IFtwYW5lbF0gW3BhbmVsLWJvZHldLmFjdGl2ZSB7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxuICBpb24tY29udGVudCBbcml0QWN0aW9uc10ge1xuICAgIHJpZ2h0OiAzcHg7XG4gICAgdG9wOiAtNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAgIGlvbi1jb250ZW50IFtyaXRBY3Rpb25zXSBpb24tYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cbiAgaW9uLWNvbnRlbnQgW3BhbmVsLWJvZHldIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IH1cbiAgaW9uLWNvbnRlbnQgW3Byb2R1Y3RzZGl2XSB7XG4gICAgcGFkZGluZzogMDsgfVxuICAgIGlvbi1jb250ZW50IFtwcm9kdWN0c2Rpdl0gLml0ZW0tbmF0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyB9XG4gICAgaW9uLWNvbnRlbnQgW3Byb2R1Y3RzZGl2XSBpb24taXRlbSB7XG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgICAgIGlvbi1jb250ZW50IFtwcm9kdWN0c2Rpdl0gaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCB7XG4gICAgICAgIG1hcmdpbjogMCAxNXB4IDAgMCAhaW1wb3J0YW50OyB9XG4gIGlvbi1jb250ZW50IC5zdGFycy1saW5lIGkuZmEuZmEtc3RhciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHggIWltcG9ydGFudDsgfVxuICBpb24tY29udGVudCBbbWFpblNlY1dpc2hsaXN0XSB7XG4gICAgcGFkZGluZzogMCAyMHB4OyB9XG4gICAgaW9uLWNvbnRlbnQgW21haW5TZWNXaXNobGlzdF0gW3dpc2hsaXN0bGlzdF0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbiAgICBpb24tY29udGVudCBbbWFpblNlY1dpc2hsaXN0XSBbY2F0SGRuZ10ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzIzMzAzZTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBwYWRkaW5nOiAwcHggMTNweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4OyB9XG4gICAgICBpb24tY29udGVudCBbbWFpblNlY1dpc2hsaXN0XSBbY2F0SGRuZ10gW2J1bGxldHNdIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2EwMjcxODtcbiAgICAgICAgcGFkZGluZzogMTJweCAxOXB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTE0cHggIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cbiAgICAgIGlvbi1jb250ZW50IFttYWluU2VjV2lzaGxpc3RdIFtjYXRIZG5nXSBbc2hhcmVkVGl0bGVdIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xuICAgICAgICByaWdodDogMjIlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjJmM2ViZjtcbiAgICAgICAgcGFkZGluZzogNHB4IDE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgfVxuICAgIGlvbi1jb250ZW50IFttYWluU2VjV2lzaGxpc3RdIFtwcm9pbWddIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDcwcHg7IH1cbiAgaW9uLWNvbnRlbnQgW3N1YkhkbmddIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgaW9uLWNvbnRlbnQgW3N1YkhkbmddIFtoZWFkaW5nLXRpdGxlXSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0yMik7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggI2U1ZTVlNSBzb2xpZDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNHB4OyB9XG4gICAgICBpb24tY29udGVudCBbc3ViSGRuZ10gW2hlYWRpbmctdGl0bGVdIFtzcmNoLWZpbHRlcl0ge1xuICAgICAgICBmbG9hdDogcmlnaHQ7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3N1YkhkbmddIFtoZWFkaW5nLXRpdGxlXSBbc3JjaC1maWx0ZXJdIFtzZWFyY2gtaW5wdXRdIHtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctNSkgdmFyKC0taW9uLXBhZGRpbmctMTUpO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4OyB9XG4gICAgICAgIGlvbi1jb250ZW50IFtzdWJIZG5nXSBbaGVhZGluZy10aXRsZV0gW3NyY2gtZmlsdGVyXSBbc2VhcmNoLWJ1dHRvbl0ge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIHdpZHRoOiB2YXIoLS1pb24td2gtMzIpO1xuICAgICAgICAgIGhlaWdodDogdmFyKC0taW9uLXdoLTMyKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMzIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7IH1cbiAgaW9uLWNvbnRlbnQgW2FkZE5ld1dpc2hsaXN0XSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luOiAtMTRweCAwIDA7XG4gICAgaGVpZ2h0OiAzMHB4OyB9XG4gIGlvbi1jb250ZW50IFtyaXRBY3Rpb25zMl0gaW9uLWNoZWNrYm94IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgOXB4KTsgfVxuICBpb24tY29udGVudCBoMy5tYWluV2lzaEhkbmcge1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICBpb24tY29udGVudCBoMy5tYWluV2lzaEhkbmcgW2FkZG5ld3dpc2hsaXN0QXBwXSB7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIG1hcmdpbjogMHB4IDAgMCA0cHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBmbG9hdDogcmlnaHQ7IH1cbiAgaW9uLWNvbnRlbnQgW3JpdEFjdGlvbnNdIGlvbi1jaGVja2JveCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMTFweCk7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4OyB9XG4gIGlvbi1jb250ZW50IFtyaXRBY3Rpb25zXSBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogLTRweDsgfVxuICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IHZhciggLS1pb24tcGFkZGluZy0xMCk7XG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKCAtLWlvbi1wYWRkaW5nLTApO1xuICAgIC0tcGFkZGluZy10b3A6IHZhciggLS1pb24tcGFkZGluZy0xMCk7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKCAtLWlvbi1wYWRkaW5nLTEwKTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApOyB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMCk7IH0gfVxuICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCB7XG4gICAgICAvKlxuXHRcdFx0XHRcdFx0d2lkdGg6IHZhciggLS1pb24tdmFsdWUtOTApO1xuXHRcdFx0XHRcdCAgIGhlaWdodDogdmFyKCAtLWlvbi12YWx1ZS05MCk7XG5cdFx0XHRcdFx0ICBtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0ICAgbWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLTApOyovIH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7IH0gfVxuICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gbGFiZWwge1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gbGFiZWwgaDMge1xuICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTApO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTMpOyB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IH0gfVxuICAgICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCBbcHJpY2UtbWFpbl0ge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTMpOyB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIFtwcmljZS1tYWluXSB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCBbcHJpY2UtbWFpbl0gW3ByaWNlXSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTsgfVxuICAgICAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIFtwcmljZS1tYWluXSBbcHJpY2UtZGlzY291bnRdIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWx0Z3JleSk7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi12YWx1ZS01KTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCBbcmF0aW5nXSBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjZDNkM2QzOyB9XG4gICAgICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gbGFiZWwgW3JhdGluZ10gaW9uLWljb25bZmlsbGVkXSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci15ZWxsb3cpOyB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIFtyYXRpbmddIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IH0gfVxuICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gaW9uLWJ1dHRvbiB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhciggLS1pb24tcGFkZGluZy00KTtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKCAtLWlvbi1wYWRkaW5nLTQpO1xuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKCAtLWlvbi1wYWRkaW5nLTQpO1xuICAgICAgaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMjIpO1xuICAgICAgbWFyZ2luOiB2YXIoLS1pb24tdmFsdWUtMCkgdmFyKC0taW9uLXZhbHVlLTApIHZhcigtLWlvbi12YWx1ZS0wKSB2YXIoLS1pb24tdmFsdWUtNSk7XG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOnZhciggLS1pb24tdmFsdWUtMCk7XG4gICAgICAtLWJvcmRlci13aWR0aDoxcHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/public-wishlist/public-wishlist.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/public-wishlist/public-wishlist.page.ts ***!
  \*********************************************************/
/*! exports provided: PublicWishlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicWishlistPage", function() { return PublicWishlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _update_wishlist_update_wishlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../update-wishlist/update-wishlist.page */ "./src/app/update-wishlist/update-wishlist.page.ts");







var PublicWishlistPage = /** @class */ (function () {
    function PublicWishlistPage(userService, toastController, loadingController, router, events, alertController, modalController) {
        this.userService = userService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.router = router;
        this.events = events;
        this.alertController = alertController;
        this.modalController = modalController;
        this.wishId = '';
        this.selectedItem = [];
        this.errors = ['', null, undefined];
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_4__["config"].IMAGES_URL;
        this.wishId = window.location.href.split('public-wishlist?')[1];
        console.log(this.wishId);
    }
    PublicWishlistPage.prototype.ngOnInit = function () {
    };
    PublicWishlistPage.prototype.ionViewDidEnter = function () {
        var token = localStorage.getItem('sin_auth_token');
        this.userId = this.userService.decryptData(token, _config__WEBPACK_IMPORTED_MODULE_4__["config"].ENC_SALT);
        this.getCartProductsIds();
    };
    PublicWishlistPage.prototype.getCartProductsIds = function () {
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
    PublicWishlistPage.prototype.getWishList = function () {
        var _this = this;
        this.wishId = window.location.href.split('public-wishlist?')[1];
        console.log(this.wishId);
        this.userService.postData({ wish_id: this.wishId }, 'getWishlist_by_wish_id').subscribe(function (result) {
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
    PublicWishlistPage.prototype.searchWishlist = function (ev) {
        console.log(ev);
        this.wishlist = this.all_wishlist;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.wishlist = this.wishlist.filter(function (item) {
                return (item.product_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    PublicWishlistPage.prototype.addToCart = function (product_id, product_sale_price, product_purchase_price) {
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
    PublicWishlistPage.prototype.removeWishlist = function (index, wid) {
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
    PublicWishlistPage.prototype.presentToast = function (message, color) {
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
    PublicWishlistPage.prototype.presentLoading = function () {
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
    PublicWishlistPage.prototype.stopLoading = function () {
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
    PublicWishlistPage.prototype.faqClicked = function (index) {
        if (this.selectedItem.indexOf(index) == -1) {
            this.selectedItem.push(index);
        }
        else {
            this.selectedItem.splice(this.selectedItem.indexOf(index), 1);
        }
    };
    PublicWishlistPage.prototype.share = function (item, index) {
        console.log(item);
        if (item.wish_full_address == null) {
            this.presentAlertPromptAddress(item);
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
    PublicWishlistPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    PublicWishlistPage.prototype.presentAlertPrompt = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Enter Email/Number',
                            inputs: [
                                {
                                    name: 'name1',
                                    type: 'text',
                                    placeholder: 'Email/number of another user'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Share',
                                    cssClass: 'darkred',
                                    handler: function (data) {
                                        console.log(data);
                                        if (data.name1 == undefined || data.name1 == '') {
                                            _this.presentToast('Error,To share with user please provide user email or contact number.', 'danger');
                                        }
                                        else {
                                            var regexStr = /^(?:[1-9]\d*|\d)$/;
                                            if (regexStr.test(String(data.name1).toLowerCase())) {
                                                //write code here for success
                                                var dict = {
                                                    phone: data.name1,
                                                    wish_id: item.wish_id,
                                                    email: null
                                                };
                                                _this.shareWishListWithAnotherUser(dict, index);
                                            }
                                            else {
                                                // write code for failure
                                                if (_this.validateEmail(data.name1)) {
                                                    var dict = {
                                                        phone: null,
                                                        wish_id: item.wish_id,
                                                        email: data.name1
                                                    };
                                                    _this.shareWishListWithAnotherUser(dict, index);
                                                }
                                                else {
                                                    _this.presentToast('Error,Please enter correct email address.', 'danger');
                                                }
                                            }
                                        }
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
    ;
    PublicWishlistPage.prototype.shareWishListWithAnotherUser = function (dict, index) {
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
    PublicWishlistPage.prototype.deleteWishlist = function (wish_id) {
        console.log(wish_id);
        this.presentAlertPromptDelete(wish_id);
    };
    PublicWishlistPage.prototype.presentAlertPromptDelete = function (id) {
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
    PublicWishlistPage.prototype.presentAlertPromptAddress = function (item) {
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
                                        _this.addAddressForWishlist(item);
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
    PublicWishlistPage.prototype.addAddressForWishlist = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
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
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PublicWishlistPage.prototype.placeOrder = function (item) {
        if (item.wish_full_address == null) {
            this.addAddressForWishlist(item);
        }
        else if (item.products.length > 0 && this.userId != 0) {
            localStorage.setItem('wishlist', JSON.stringify(item));
            this.router.navigate(['/wishlist-checkout']);
        }
        else if (this.userId == 0) {
            // this.presentToast('To share the wishlist, Please add atleast one product.','danger');
            this.router.navigate(['/login']);
        }
        else {
            this.presentToast('No product added in wishlist yet!', 'danger');
        }
    };
    PublicWishlistPage.prototype.removeProduct = function (wish_id, product_id) {
        this.presentAlertPromptDeleteProduct(wish_id, product_id);
    };
    PublicWishlistPage.prototype.presentAlertPromptDeleteProduct = function (wish_id, product_id) {
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
    PublicWishlistPage.prototype.presentAlertPromptAdd = function () {
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
                                        _this.userService.postData({ product_id: null, user_id: _this.userId, wish_title: data.name1, is_new: 1, wishlist_id: null }, 'addWishlistNew').subscribe(function (result) {
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
    PublicWishlistPage.prototype.setDefault = function (wish_id) {
        var _this = this;
        this.presentLoading();
        this.userService.postData({ user_id: this.userId, wishlist_id: wish_id }, 'wish_as_default').subscribe(function (result) {
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
    PublicWishlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-public-wishlist',
            template: __webpack_require__(/*! ./public-wishlist.page.html */ "./src/app/public-wishlist/public-wishlist.page.html"),
            styles: [__webpack_require__(/*! ./public-wishlist.page.scss */ "./src/app/public-wishlist/public-wishlist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], PublicWishlistPage);
    return PublicWishlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-wishlist-public-wishlist-module.js.map