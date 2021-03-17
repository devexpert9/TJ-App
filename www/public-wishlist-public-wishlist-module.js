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

module.exports = "ion-content {\n  --background:var(--ion-color-grey);\n  /*  Wishlist Page   Start*/\n  /*  Wishlist Page   Ends*/\n  /*\n\t-------------------------------------------\n\t \tMobile Wishlist Start\n\t--------------------------------\n*/\n  /* Mobile Wishlist Ends*/ }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0); } }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0);\n      --padding-bottom:var(--ion-padding-0);\n      --padding-start:var(--ion-padding-0);\n      --padding-end:var(--ion-padding-0); } }\n  ion-content [my-wishlist-page] {\n    background-color: var(--ion-color-white);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n    padding: var(--ion-padding-0);\n    overflow: hidden; }\n  ion-content [my-wishlist-page] table {\n      margin-bottom: var(--ion-margin-0); }\n  ion-content [my-wishlist-page] table tr {\n        font-family: var(--ion-font-family-2); }\n  ion-content [my-wishlist-page] table tr td {\n          vertical-align: middle;\n          padding: var(--ion-padding-15); }\n  ion-content [my-wishlist-page] table tr td[close-btn] a {\n            color: var(--ion-color-darkred);\n            text-decoration: none; }\n  ion-content [my-wishlist-page] table tr td [product-name] {\n            font-size: var(--ion-font-size-16);\n            font-family: var(--ion-font-family-2);\n            padding-bottom: var(--ion-padding-6); }\n  ion-content [my-wishlist-page] table tr td [product-name] a {\n              color: #434343;\n              text-decoration: none; }\n  ion-content [my-wishlist-page] table tr td [price] {\n            color: var(--ion-color-darkred);\n            font-size: var(--ion-font-size-16);\n            padding-top: var(--ion-padding-4);\n            font-weight: 700; }\n  ion-content [my-wishlist-page] table tr td [price] span {\n              font-size: var(--ion-font-size-15);\n              color: var(--ion-color-ltgrey);\n              text-decoration: line-through;\n              padding-left: var(--ion-padding-10); }\n  ion-content [my-wishlist-page] table tr td p {\n            font-size: var(--ion-font-size-14);\n            color: var(--ion-color-darkblack);\n            font-family: var(--ion-font-family-2); }\n  ion-content [my-wishlist-page] table tr td p[vendor-name] {\n              margin-top: 10px; }\n  ion-content [my-wishlist-page] table tr td p[vendor-name] a {\n                color: var(--ion-color-darkred);\n                text-decoration: none; }\n  ion-content [my-wishlist-page] table tr td [rating] ion-icon {\n            color: #dcdcdc; }\n  ion-content [my-wishlist-page] table tr td [rating] ion-icon[filled] {\n              color: var(--ion-color-yellow); }\n  ion-content [my-wishlist-page] table tr td ion-button {\n            --box-shadow:none;\n            font-family: var(--ion-font-family-2);\n            border-radius: var(--ion-value-0); }\n  ion-content [panel] [panel-heading][checkout-head] {\n    background: #f5f5f5;\n    position: relative; }\n  ion-content [panel] [panel-heading][checkout-head] h4 {\n      margin-top: var(--ion-margin-0); }\n  ion-content [panel] [panel-heading][checkout-head] h4 a {\n        font-family: var(--ion-font-family-2);\n        color: var(--ion-color-darkblack3);\n        text-transform: uppercase;\n        display: block;\n        margin: var(--ion-margin-0);\n        font-size: var(--ion-font-size-13);\n        font-weight: bold;\n        text-decoration: none; }\n  @media only screen and (max-width: 991px) {\n          ion-content [panel] [panel-heading][checkout-head] h4 a {\n            padding-right: var(--ion-padding-10);\n            background: var(--ion-color-white); } }\n  ion-content [panel] [panel-heading][checkout-head] h4 a.active span {\n          background: var(--ion-color-darkred); }\n  @media only screen and (max-width: 991px) {\n          ion-content [panel] [panel-heading][checkout-head] h4 a {\n            display: flex;\n            align-items: center;\n            font-size: var(--ion-font-size-12); } }\n  ion-content [panel] [panel-heading][checkout-head] h4 a span {\n          color: var(--ion-color-white);\n          display: inline-block;\n          margin-right: var(--ion-margin-10);\n          padding: var(--ion-padding-15) var(--ion-padding-20);\n          background: #aaaaaa; }\n  @media only screen and (max-width: 991px) {\n            ion-content [panel] [panel-heading][checkout-head] h4 a span {\n              padding: var(--ion-padding-15) var(--ion-padding-15); } }\n  ion-content [panel] [panel-body] {\n    display: none;\n    padding: var(--ion-padding-10) var(--ion-padding-0) var(--ion-padding-22);\n    font-family: var(--ion-font-family-2); }\n  ion-content [panel] [panel-body].active {\n      display: block; }\n  ion-content [ritActions] {\n    right: 3px;\n    top: -4px;\n    position: absolute; }\n  ion-content [ritActions] ion-button {\n      width: 25px;\n      margin-right: 8px; }\n  ion-content [panel-body] {\n    padding: 0 !important; }\n  ion-content [productsdiv] {\n    padding: 0; }\n  ion-content [productsdiv] .item-native {\n      background: #f1f1f1;\n      border: 1px solid #ddd; }\n  ion-content [productsdiv] ion-item {\n      box-shadow: none !important; }\n  ion-content [productsdiv] ion-item ion-thumbnail {\n        margin: 0 15px 0 0 !important; }\n  ion-content .stars-line i.fa.fa-star {\n    margin-right: 3px !important; }\n  ion-content [mainSecWishlist] {\n    padding: 0 20px; }\n  ion-content [mainSecWishlist] [wishlistlist] {\n      display: flex;\n      align-items: center;\n      border-bottom: 1px solid #eee;\n      padding: 10px 0;\n      margin-bottom: 20px; }\n  ion-content [mainSecWishlist] [catHdng] {\n      font-size: 18px;\n      display: flex;\n      font-weight: 600;\n      color: #23303e;\n      justify-content: space-between;\n      border: 1px solid #ddd;\n      padding: 0px 13px;\n      align-items: center;\n      background: #f1f1f1;\n      border-radius: 2px; }\n  ion-content [mainSecWishlist] [catHdng] [bullets] {\n        background: #a02718;\n        padding: 12px 19px;\n        left: 0px;\n        position: relative;\n        margin: 0;\n        margin-left: -14px !important;\n        color: #fff; }\n  ion-content [mainSecWishlist] [catHdng] [sharedTitle] {\n        color: #ffffff;\n        font-size: 13px;\n        /* float: right; */\n        right: 22%;\n        position: absolute;\n        background: #222f3ebf;\n        padding: 4px 16px;\n        border-radius: 3px; }\n  ion-content [mainSecWishlist] [proimg] img {\n      max-width: 70px; }\n  ion-content [subHdng] {\n    vertical-align: middle; }\n  ion-content [subHdng] [heading-title] {\n      font-weight: bold;\n      font-size: var(--ion-font-size-22);\n      color: var(--ion-color-darkblack);\n      border-bottom: 1px #e5e5e5 solid;\n      padding-bottom: 14px; }\n  ion-content [subHdng] [heading-title] [srch-filter] {\n        float: right; }\n  ion-content [subHdng] [heading-title] [srch-filter] [search-input] {\n          font-size: var(--ion-font-size-14);\n          font-weight: 500;\n          padding: var(--ion-padding-5) var(--ion-padding-15);\n          border: 1px solid #E0E0E0;\n          float: left;\n          height: 32px; }\n  ion-content [subHdng] [heading-title] [srch-filter] [search-button] {\n          float: left;\n          width: var(--ion-wh-32);\n          height: var(--ion-wh-32);\n          background: var(--ion-color-darkred);\n          text-align: center;\n          line-height: var(--ion-value-32);\n          font-size: var(--ion-font-size-16);\n          color: var(--ion-color-white); }\n  ion-content [addNewWishlist] {\n    width: 30px;\n    margin: -14px 0 0;\n    height: 30px; }\n  ion-content [ritActions2] ion-checkbox {\n    -webkit-transform: translate(-10px, 9px);\n            transform: translate(-10px, 9px); }\n  ion-content h3.mainWishHdng {\n    margin: 0 0 10px;\n    width: 100%;\n    float: left;\n    font-size: 18px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  ion-content h3.mainWishHdng [addnewwishlistApp] {\n      width: 30px;\n      margin: 0px 0 0 4px;\n      height: 30px;\n      float: right; }\n  ion-content [ritActions] ion-checkbox {\n    -webkit-transform: translate(-1px, 11px);\n            transform: translate(-1px, 11px);\n    width: 30px;\n    height: 30px;\n    --border-radius: 8px; }\n  ion-content [ritActions] ion-button {\n    margin-right: 8px;\n    height: 30px;\n    margin-top: -4px; }\n  ion-content [wishlist-mob] [wishlist-items] ion-item {\n    --padding-start: var( --ion-padding-10);\n    --padding-end: var( --ion-padding-0);\n    --padding-top: var( --ion-padding-10);\n    --padding-bottom: var( --ion-padding-10);\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);\n    margin-bottom: var(--ion-margin-10); }\n  @media only screen and (max-width: 991px) {\n      ion-content [wishlist-mob] [wishlist-items] ion-item {\n        border-bottom: 1px solid var(--ion-color-grey);\n        display: flex;\n        margin-bottom: var(--ion-margin-0); } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item ion-thumbnail {\n      /*\n\t\t\t\t\t\twidth: var( --ion-value-90);\n\t\t\t\t\t   height: var( --ion-value-90);\n\t\t\t\t\t  margin-top:var(--ion-margin-0);\n\t\t\t\t\t   margin-bottom:var(--ion-margin-0);*/ }\n  @media only screen and (max-width: 991px) {\n        ion-content [wishlist-mob] [wishlist-items] ion-item ion-thumbnail {\n          height: 100%; } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label {\n      width: 100%; }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label h3 {\n        margin-top: var(--ion-margin-0);\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-14);\n        font-weight: 700;\n        margin-bottom: var(--ion-margin-3); }\n  @media only screen and (max-width: 576px) {\n          ion-content [wishlist-mob] [wishlist-items] ion-item label h3 {\n            font-size: var(--ion-font-size-12); } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [price-main] {\n        font-family: var(--ion-font-family-2);\n        font-size: var(--ion-font-size-14);\n        font-weight: 600;\n        margin-bottom: var(--ion-margin-3); }\n  @media only screen and (max-width: 576px) {\n          ion-content [wishlist-mob] [wishlist-items] ion-item label [price-main] {\n            font-size: var(--ion-font-size-12); } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [price-main] [price] {\n          color: var(--ion-color-darkred); }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [price-main] [price-discount] {\n          text-decoration: line-through;\n          color: var(--ion-color-ltgrey);\n          margin-left: var(--ion-value-5); }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [rating] ion-icon {\n        color: #d3d3d3; }\n  ion-content [wishlist-mob] [wishlist-items] ion-item label [rating] ion-icon[filled] {\n          color: var(--ion-color-yellow); }\n  @media only screen and (max-width: 576px) {\n          ion-content [wishlist-mob] [wishlist-items] ion-item label [rating] ion-icon {\n            font-size: var(--ion-font-size-12); } }\n  ion-content [wishlist-mob] [wishlist-items] ion-item ion-button {\n      --padding-start: var( --ion-padding-4);\n      --padding-start: var( --ion-padding-4);\n      --padding-end: var( --ion-padding-4);\n      height: var(--ion-value-22);\n      margin: var(--ion-value-0) var(--ion-value-0) var(--ion-value-0) var(--ion-value-5);\n      font-size: var(--ion-font-size-12);\n      --border-radius:var( --ion-value-0);\n      --border-width:1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvcHVibGljLXdpc2hsaXN0L3B1YmxpYy13aXNobGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3B1YmxpYy13aXNobGlzdC9wdWJsaWMtd2lzaGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBRUEsa0NBQWE7RUFZYiwwQkFBQTtFQXVSQSx5QkFBQTtFQVVEOzs7O0NDdlNDO0VEMGFBLHdCQUFBLEVBQXlCO0VBL2F6QjtJQUhBO01BS0csa0NBQWMsRUFBQSxFQThhakI7RUE1YUM7SUFQRDtNQVNHLGtDQUFjO01BQ2QscUNBQWlCO01BQ2pCLG9DQUFnQjtNQUNoQixrQ0FBYyxFQUFBLEVBdWFqQjtFQW5iQTtJQWdCRyx3Q0FBdUM7SUFDdkMsMkNBQXVDO0lBQ3ZDLDZCQUE2QjtJQUM3QixnQkFBZ0IsRUFBQTtFQW5CbkI7TUFxQkssa0NBQWtDLEVBQUE7RUFyQnZDO1FBdUJPLHFDQUFxQyxFQUFBO0VBdkI1QztVQTJCRyxzQkFBcUI7VUFDckIsOEJBQThCLEVBQUE7RUE1QmpDO1lBaUN3QiwrQkFBK0I7WUFDakQscUJBQW9CLEVBQUE7RUFsQzFCO1lBdUNLLGtDQUFrQztZQUMvQixxQ0FBcUM7WUFDeEMsb0NBQW9DLEVBQUE7RUF6Q3pDO2NBNENRLGNBQWM7Y0FDaEIscUJBQW9CLEVBQUE7RUE3QzFCO1lBbURTLCtCQUFnQztZQUNuQyxrQ0FBa0M7WUFDbEMsaUNBQWlDO1lBQ2pDLGdCQUFlLEVBQUE7RUF0RHJCO2NBeURhLGtDQUFrQztjQUN2Qyw4QkFBOEI7Y0FDOUIsNkJBQTZCO2NBQzdCLG1DQUFtQyxFQUFBO0VBNUQzQztZQWlFUyxrQ0FBa0M7WUFDbkIsaUNBQW1DO1lBQ25DLHFDQUFxQyxFQUFBO0VBbkU3RDtjQXFFeUIsZ0JBQWdCLEVBQUE7RUFyRXpDO2dCQXdFd0IsK0JBQStCO2dCQUNoRCxxQkFBb0IsRUFBQTtFQXpFM0I7WUFnRlcsY0FBYSxFQUFBO0VBaEZ4QjtjQW1GUyw4QkFBNkIsRUFBQTtFQW5GdEM7WUE0RkksaUJBQWE7WUFDVixxQ0FBcUM7WUFDckMsaUNBQWdDLEVBQUE7RUE5RnZDO0lBMkdLLG1CQUFrQjtJQUNsQixrQkFBaUIsRUFBQTtFQTVHdEI7TUFnSFEsK0JBQThCLEVBQUE7RUFoSHRDO1FBbUhvQixxQ0FBcUM7UUFDaEQsa0NBQWtDO1FBQ2xDLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QsMkJBQTRCO1FBQzVCLGtDQUFrQztRQUNsQyxpQkFBaUI7UUFDakIscUJBQW9CLEVBQUE7RUFDVTtVQTNIdkM7WUE2SFUsb0NBQXFDO1lBQ2pDLGtDQUFrQyxFQUFBLEVBMkJ4QztFQXpKUjtVQW9JYSxvQ0FBb0MsRUFBQTtFQUd4QztVQXZJVDtZQXlJYyxhQUFhO1lBQ2hCLG1CQUFtQjtZQUNuQixrQ0FBa0MsRUFBQSxFQWNyQztFQXpKUjtVQStJUyw2QkFBNkI7VUFDN0IscUJBQXFCO1VBQ3JCLGtDQUFrQztVQUNsQyxvREFBcUQ7VUFDckQsbUJBQWtCLEVBQUE7RUFDaEI7WUFwSlg7Y0FzSlUsb0RBQXFELEVBQUEsRUFFdEQ7RUF4SlQ7SUE4Sk8sYUFBWTtJQUNaLHlFQUEyRTtJQUM5RSxxQ0FBcUMsRUFBQTtFQWhLekM7TUFrS1EsY0FBYSxFQUFBO0VBbEtyQjtJQXlLQSxVQUFVO0lBQ1AsU0FBUztJQUNULGtCQUFpQixFQUFBO0VBM0twQjtNQThLSSxXQUFVO01BQ1AsaUJBQWlCLEVBQUE7RUEvS3hCO0lBbUxBLHFCQUFvQixFQUFBO0VBbkxwQjtJQXNMQSxVQUFTLEVBQUE7RUF0TFQ7TUF3TEMsbUJBQW1CO01BQ2hCLHNCQUFzQixFQUFBO0VBekwxQjtNQTRMQywyQkFBMEIsRUFBQTtFQTVMM0I7UUE4TEUsNkJBQTRCLEVBQUE7RUE5TDlCO0lBb01DLDRCQUEyQixFQUFBO0VBcE01QjtJQXdNRyxlQUFlLEVBQUE7RUF4TWxCO01BME1PLGFBQWE7TUFDaEIsbUJBQW1CO01BQ25CLDZCQUE2QjtNQUM3QixlQUFlO01BQ2YsbUJBQW1CLEVBQUE7RUE5TXZCO01BaU5DLGVBQWU7TUFDWixhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCw4QkFBOEI7TUFDOUIsc0JBQXNCO01BQ3RCLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLGtCQUFrQixFQUFBO0VBMU50QjtRQTROUSxtQkFBbUI7UUFDdEIsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsU0FBUztRQUNULDZCQUE2QjtRQUM3QixXQUFXLEVBQUE7RUFsT2hCO1FBcU9RLGNBQWM7UUFDakIsZUFBZTtRQUNmLGtCQUFBO1FBQ0EsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGtCQUFrQixFQUFBO0VBNU92QjtNQWlQRSxlQUFjLEVBQUE7RUFqUGhCO0lBdVBBLHNCQUFxQixFQUFBO0VBdlByQjtNQTJQRyxpQkFBaUI7TUFDZCxrQ0FBa0M7TUFDckMsaUNBQW1DO01BQ25DLGdDQUFnQztNQUM5QixvQkFBb0IsRUFBQTtFQS9QekI7UUFpUUssWUFBVyxFQUFBO0VBalFoQjtVQW9RUSxrQ0FBa0M7VUFDckMsZ0JBQWdCO1VBQ2IsbURBQW9EO1VBQ3ZELHlCQUF5QjtVQUN6QixXQUFXO1VBQ1YsWUFBVyxFQUFBO0VBelFqQjtVQTZRUyxXQUFXO1VBQ2QsdUJBQXVCO1VBQ3ZCLHdCQUF1QjtVQUN2QixvQ0FBb0M7VUFDcEMsa0JBQWtCO1VBQ2xCLGdDQUFnQztVQUNoQyxrQ0FBa0M7VUFDbEMsNkJBQTRCLEVBQUE7RUFwUmxDO0lBMFJBLFdBQVc7SUFDUixpQkFBaUI7SUFDakIsWUFBWSxFQUFBO0VBNVJmO0lBZ1NDLHdDQUFnQztZQUFoQyxnQ0FBZ0MsRUFBQTtFQWhTakM7SUFzVEEsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDUixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CLEVBQUE7RUE1VHRCO01BOFRDLFdBQVc7TUFDUixtQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFlBQVcsRUFBQTtFQWpVZjtJQXVVQyx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWdCLEVBQUE7RUExVXBCO0lBNlVJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7RUEvVXBCO0lBMFZJLHVDQUFnQjtJQUNoQixvQ0FBYztJQUNkLHFDQUFjO0lBQ2Qsd0NBQWlCO0lBQ2pCLDJDQUEyQztJQUMxQyxtQ0FBcUMsRUFBQTtFQUNyQztNQWhXTDtRQWlXTyw4Q0FBNkM7UUFDMUMsYUFBYTtRQUNoQixrQ0FBb0MsRUFBQSxFQTRFckM7RUEvYU47TUEwV0k7Ozs7MkNDN0hzQyxFRGlJQztFQVJuQztRQXRXUjtVQXdXVSxZQUFZLEVBQUEsRUFPbEI7RUEvV0o7TUFpWE8sV0FBVyxFQUFBO0VBalhsQjtRQW9YSywrQkFBOEI7UUFDOUIscUNBQW9DO1FBQ3BDLGtDQUFpQztRQUNqQyxnQkFBZTtRQUNkLGtDQUFrQyxFQUFBO0VBQ2xDO1VBelhOO1lBMlhNLGtDQUFpQyxFQUFBLEVBRWxDO0VBN1hMO1FBZ1lNLHFDQUFvQztRQUNwQyxrQ0FBaUM7UUFDakMsZ0JBQWU7UUFDZixrQ0FBa0MsRUFBQTtFQUNqQztVQXBZUDtZQXNZTSxrQ0FBaUMsRUFBQSxFQVlsQztFQWxaTDtVQTBZTSwrQkFBOEIsRUFBQTtFQTFZcEM7VUE4WVUsNkJBQTZCO1VBQ2hDLDhCQUErQjtVQUMvQiwrQkFBOEIsRUFBQTtFQWhackM7UUF1WlMsY0FBYSxFQUFBO0VBdlp0QjtVQTBaTyw4QkFBNkIsRUFBQTtFQUU3QjtVQTVaUDtZQThaTSxrQ0FBaUMsRUFBQSxFQUVqQztFQWhhTjtNQXNhTyxzQ0FBZ0I7TUFDaEIsc0NBQWdCO01BQ2hCLG9DQUFjO01BQ2QsMkJBQTRCO01BQzVCLG1GQUFvRjtNQUNwRixrQ0FBb0M7TUFDcEMsbUNBQWdCO01BQ2hCLGtCQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMtd2lzaGxpc3QvcHVibGljLXdpc2hsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBpb24tY29udGVudFxueyAgXG5cdC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZ3JleSk7XG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTFweClcblx0e1xuXHQgICAtLXBhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLTApO1xuXHR9XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHR7XG5cdCAgIC0tcGFkZGluZy10b3A6dmFyKC0taW9uLXBhZGRpbmctMCk7XG5cdCAgIC0tcGFkZGluZy1ib3R0b206dmFyKC0taW9uLXBhZGRpbmctMCk7XG5cdCAgIC0tcGFkZGluZy1zdGFydDp2YXIoLS1pb24tcGFkZGluZy0wKTtcblx0ICAgLS1wYWRkaW5nLWVuZDp2YXIoLS1pb24tcGFkZGluZy0wKTtcblx0fVxuIC8qICBXaXNobGlzdCBQYWdlICAgU3RhcnQqL1xuIFtteS13aXNobGlzdC1wYWdlXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsLjA4KTtcbiAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXHR0YWJsZVxuXHR7ICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0dHJcblx0XHR7XHQgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcdFx0XG5cdFx0XHRcblx0XHRcdHRkXG5cdFx0XHR7XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOm1pZGRsZTsgICBcblx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTUpO1xuXHRcdFx0XHQmW2Nsb3NlLWJ0bl1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgIGFcbiAgICAgICAgICAgICAgICAgICAgICAge1x0XHRcdFx0XHQgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpOyBcblx0XHRcdFx0XHRcdCB0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0XHRcdFx0XHQgICB9XG5cdFx0XHRcdH1cblx0XHRcdFx0W3Byb2R1Y3QtbmFtZV1cblx0XHRcdFx0eyAgICAgXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTYpO1xuXHRcdFx0XHRcdCAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1x0XHRcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy02KTtcblx0XHRcdFx0ICAgIGFcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICAgIGNvbG9yOiAjNDM0MzQzO1xuXHRcdFx0XHRcdFx0IHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHRcdFx0XHQgICB9XG5cdFx0XHRcdFxuXHRcdFx0XHR9IFxuXHRcdFx0XHQgW3ByaWNlXVxuXHRcdFx0XHQge1xuXHRcdFx0XHRcdCAgICAgY29sb3I6ICB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG5cdFx0XHRcdFx0XHQgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcblx0XHRcdFx0XHRcdCBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctNCk7XG5cdFx0XHRcdFx0XHQgZm9udC13ZWlnaHQ6NzAwO1xuXHRcdFx0XHRcdFx0IHNwYW5cblx0XHRcdFx0XHRcdCB7XG5cdFx0XHRcdFx0XHRcdCAgICAgIFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE1KTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbHRncmV5KTtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuXHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZy0xMCk7XG5cdFx0XHRcdFx0XHQgfVxuXHRcdFx0XHQgfVxuXHRcdFx0XHQgICBwXG5cdFx0XHRcdCAgIHtcblx0XHRcdFx0XHQgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhciggIC0taW9uLWNvbG9yLWRhcmtibGFjayk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHRcblx0XHRcdFx0XHQmW3ZlbmRvci1uYW1lXVxuICAgICAgICAgICAgICAgICAgICB7ICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdFx0XHRcdCAgIGFcbiAgICAgICAgICAgICAgICAgICAgICAge1x0XHRcdFx0XHQgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuXHRcdFx0XHRcdFx0ICB0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0XHRcdFx0XHQgICB9XG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcblx0XHRcdFx0ICAgfVxuXHRcdFx0XHQgICBbcmF0aW5nXVxuXHRcdFx0XHQgICB7XG5cdFx0XHRcdFx0ICAgaW9uLWljb25cblx0XHRcdFx0XHQgICB7ICAgY29sb3I6I2RjZGNkYztcblx0XHRcdFx0XHRcdCAgICZbZmlsbGVkXVxuXHRcdFx0XHRcdFx0ICAge1xuXHRcdFx0XHRcdFx0XHQgICBjb2xvcjp2YXIoLS1pb24tY29sb3IteWVsbG93KTtcblx0XHRcdFx0XHRcdCAgIH1cblx0XHRcdFx0XHQgICB9XG5cdFx0XHRcdFx0ICAgLnJldmlld1xuXHRcdFx0XHRcdCAgIHtcblx0XHRcdFx0XHQgICB9XG5cdFx0XHRcdCAgIH1cblx0XHRcdFx0aW9uLWJ1dHRvblxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0LS1ib3gtc2hhZG93Om5vbmU7XG5cdFx0XHRcdFx0ICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcdFx0XG5cdFx0XHRcdFx0ICAgYm9yZGVyLXJhZGl1czp2YXIoLS1pb24tdmFsdWUtMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdH1cbn1cblxuW3BhbmVsXVxuXHRcdFx0ICB7XG5cdFx0XHRcdFx0W3BhbmVsLWhlYWRpbmdde1xuXHRcdFx0XHRcdCAgICAmW2NoZWNrb3V0LWhlYWRdXG5cdFx0XHRcdFx0XHQge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDojZjVmNWY1O1xuXHRcdFx0XHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XG5cdFx0XHRcdFx0XHQgXG5cdFx0XHRcdFx0XHQgaDRcblx0XHRcdFx0XHRcdCB7XG5cdFx0XHRcdFx0XHRcdCAgbWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdFx0XHQgYVxuXHRcdFx0XHRcdFx0XHQgeyAgICAgICAgICBcbiAgIFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjazMpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAgdmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1x0XHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6ICB2YXIoLS1pb24tcGFkZGluZy0xMCkgO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1x0IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ji5hY3RpdmVcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHNwYW5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHQgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyAgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdCBzcGFuXG5cdFx0XHRcdFx0XHRcdFx0IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLTEwKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogIHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0yMCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6I2FhYWFhYTtcdCBcblx0XHRcdFx0XHRcdFx0XHRcdCAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyAgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogIHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0xNSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQgfVxuXHRcdFx0XHRcdFx0XHQgfVxuXHRcdFx0XHRcdFx0IH1cblx0XHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQgW3BhbmVsLWJvZHldXG5cdFx0XHQgeyAgIGRpc3BsYXk6bm9uZTtcblx0XHRcdCAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTApICB2YXIoLS1pb24tcGFkZGluZy0wKSAgdmFyKC0taW9uLXBhZGRpbmctMjIpOyAgXG5cdFx0XHRcdCBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdFx0ICAmLmFjdGl2ZVxuXHRcdFx0ICAgeyAgZGlzcGxheTpibG9jaztcblx0XHRcdFx0XHRcdCAgXG5cdFx0XHQgICB9XG5cdFx0XHQgfVxuXHQgIH1cblxuW3JpdEFjdGlvbnNde1xuXHRyaWdodDogM3B4O1xuICAgIHRvcDogLTRweDtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcblxuICAgIGlvbi1idXR0b257XG4gICAgXHR3aWR0aDoyNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG59XG5bcGFuZWwtYm9keV17XG5cdHBhZGRpbmc6MCAhaW1wb3J0YW50O1xufVxuW3Byb2R1Y3RzZGl2XXtcblx0cGFkZGluZzowO1xuXHQuaXRlbS1uYXRpdmV7XG5cdFx0YmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBcdGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG5cdH1cblx0aW9uLWl0ZW17XG5cdFx0Ym94LXNoYWRvdzpub25lICFpbXBvcnRhbnQ7XG5cdFx0aW9uLXRodW1ibmFpbHtcblx0XHRcdG1hcmdpbjowIDE1cHggMCAwICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHR9XG59XG4uc3RhcnMtbGluZXtcblx0aS5mYS5mYS1zdGFye1xuXHRcdG1hcmdpbi1yaWdodDozcHggIWltcG9ydGFudDtcblx0fVxufVxuW21haW5TZWNXaXNobGlzdF17XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIFt3aXNobGlzdGxpc3Rde1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXHQgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuXHQgICAgcGFkZGluZzogMTBweCAwO1xuXHQgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cdFtjYXRIZG5nXXtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdCAgICBkaXNwbGF5OiBmbGV4O1xuXHQgICAgZm9udC13ZWlnaHQ6IDYwMDtcblx0ICAgIGNvbG9yOiAjMjMzMDNlO1xuXHQgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHQgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcblx0ICAgIHBhZGRpbmc6IDBweCAxM3B4O1xuXHQgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG5cdCAgICBib3JkZXItcmFkaXVzOiAycHg7XG5cdCAgICBbYnVsbGV0c117XG4gICAgXHQgICAgYmFja2dyb3VuZDogI2EwMjcxODtcblx0XHQgICAgcGFkZGluZzogMTJweCAxOXB4O1xuXHRcdCAgICBsZWZ0OiAwcHg7XG5cdFx0ICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHQgICAgbWFyZ2luOiAwO1xuXHRcdCAgICBtYXJnaW4tbGVmdDogLTE0cHggIWltcG9ydGFudDtcblx0XHQgICAgY29sb3I6ICNmZmY7XG5cdCAgICB9XG5cdCAgICBbc2hhcmVkVGl0bGVde1xuICAgIFx0ICAgIGNvbG9yOiAjZmZmZmZmO1xuXHRcdCAgICBmb250LXNpemU6IDEzcHg7XG5cdFx0ICAgIC8qIGZsb2F0OiByaWdodDsgKi9cblx0XHQgICAgcmlnaHQ6IDIyJTtcblx0XHQgICAgcG9zaXRpb246IGFic29sdXRlO1xuXHRcdCAgICBiYWNrZ3JvdW5kOiAjMjIyZjNlYmY7XG5cdFx0ICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuXHRcdCAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5cdCAgICB9XG5cdH1cblx0W3Byb2ltZ117XG5cdFx0aW1ne1xuXHRcdFx0bWF4LXdpZHRoOjcwcHg7XG5cdFx0fVxuXHR9XG59XG5cbltzdWJIZG5nXXtcblx0dmVydGljYWwtYWxpZ246bWlkZGxlO1xuXG5cdFx0W2hlYWRpbmctdGl0bGVdIHtcblx0XHRcdFxuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdCAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMjIpO1xuXHRcdFx0XHRjb2xvcjogdmFyKCAgLS1pb24tY29sb3ItZGFya2JsYWNrKTtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4ICNlNWU1ZTUgc29saWQ7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTRweDtcblx0XHRcdFx0W3NyY2gtZmlsdGVyXVxuXHRcdFx0XHR7IGZsb2F0OnJpZ2h0O1xuXHRcdFx0XHRcdFtzZWFyY2gtaW5wdXRdXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHQgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctNSkgIHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OjMycHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFtzZWFyY2gtYnV0dG9uXVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCAgICBmbG9hdDogbGVmdDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IHZhcigtLWlvbi13aC0zMik7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDp2YXIoLS1pb24td2gtMzIpO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0zMik7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdCAgICAgICAgfVx0ICBcblx0XHR9XG5cdH1cblthZGROZXdXaXNobGlzdF17XG5cdHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbjogLTE0cHggMCAwO1xuICAgIGhlaWdodDogMzBweDtcbn1cbltyaXRBY3Rpb25zMl17XG5cdGlvbi1jaGVja2JveHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgOXB4KTtcblx0fVxufVxuXG5cbiAvKiAgV2lzaGxpc3QgUGFnZSAgIEVuZHMqL1xuXG5cblxuXG5cblxuXG5cblxuLypcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgXHRNb2JpbGUgV2lzaGxpc3QgU3RhcnRcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbmgzLm1haW5XaXNoSGRuZ3tcblx0bWFyZ2luOiAwIDAgMTBweDtcblx0d2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgW2FkZG5ld3dpc2hsaXN0QXBwXXtcblx0XHR3aWR0aDogMzBweDtcblx0ICAgIG1hcmdpbjowcHggMCAwIDRweDtcblx0ICAgIGhlaWdodDogMzBweDtcblx0ICAgIGZsb2F0OnJpZ2h0O1xuXHR9XG59XG5cbltyaXRBY3Rpb25zXXtcblx0aW9uLWNoZWNrYm94e1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDExcHgpO1xuXHQgICAgd2lkdGg6IDMwcHg7XG5cdCAgICBoZWlnaHQ6IDMwcHg7XG5cdCAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcblx0fVxuXHRpb24tYnV0dG9ue1xuXHQgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG5cdCAgICBoZWlnaHQ6IDMwcHg7XG5cdCAgICBtYXJnaW4tdG9wOiAtNHB4O1xuXHR9XG59XG5cblxuXG4gW3dpc2hsaXN0LW1vYl1cbnsgXG5cdFx0IFt3aXNobGlzdC1pdGVtc11cblx0XHRcdFx0e1xuXHRcdFx0aW9uLWl0ZW17XG5cdFx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiB2YXIoIC0taW9uLXBhZGRpbmctMTApO1xuXHRcdFx0XHRcdC0tcGFkZGluZy1lbmQ6IHZhciggLS1pb24tcGFkZGluZy0wKTtcblx0XHRcdFx0XHQtLXBhZGRpbmctdG9wOiB2YXIoIC0taW9uLXBhZGRpbmctMTApO1xuXHRcdFx0XHRcdC0tcGFkZGluZy1ib3R0b206IHZhciggLS1pb24tcGFkZGluZy0xMCk7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206ICB2YXIoIC0taW9uLW1hcmdpbi0xMCk7XG5cdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0XHRcdFx0XHR7XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleSk7XG5cdFx0XHRcdFx0XHRcdCAgICBkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206ICB2YXIoIC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdGlvbi10aHVtYm5haWxcblx0XHRcdFx0eyAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdCAgICBoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdCAvKlxuXHRcdFx0XHRcdFx0d2lkdGg6IHZhciggLS1pb24tdmFsdWUtOTApO1xuXHRcdFx0XHRcdCAgIGhlaWdodDogdmFyKCAtLWlvbi12YWx1ZS05MCk7XG5cdFx0XHRcdFx0ICBtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0ICAgbWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLTApOyovXG5cdFx0XHRcdH1cblx0XHRcdFx0bGFiZWxcblx0XHRcdFx0eyAgIHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGgzXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6NzAwO1xuXHRcdFx0XHRcdFx0IG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMyk7XG5cdFx0XHRcdFx0XHQgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxuXHRcdFx0XHRcdFx0IHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTIpOyBcblx0XHRcdFx0XHRcdCB9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFtwcmljZS1tYWluXVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHRcdFx0XHQgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdFx0XHRcdFx0IGZvbnQtd2VpZ2h0OjYwMDtcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdCBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTMpO1xuXHRcdFx0XHRcdFx0ICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXG5cdFx0XHRcdFx0XHQge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IFxuXHRcdFx0XHRcdFx0IH1cblx0XHRcdFx0XHRcdCBbcHJpY2VdXG5cdFx0XHRcdFx0XHQgeyAgXHRcdFx0XHRcdFx0ICAgICBcblx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuXHRcdFx0XHRcdFx0IH1cblx0XHRcdFx0XHRcdCAgW3ByaWNlLWRpc2NvdW50XVxuXHRcdFx0XHRcdFx0IHsgIFxuXHRcdFx0XHRcdFx0ICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcblx0XHRcdFx0XHRcdFx0IGNvbG9yOnZhciggIC0taW9uLWNvbG9yLWx0Z3JleSk7XG5cdFx0XHRcdFx0XHRcdCBtYXJnaW4tbGVmdDp2YXIoLS1pb24tdmFsdWUtNSk7XG5cdFx0XHRcdFx0XHQgfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRbcmF0aW5nXVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGlvbi1pY29uXG5cdFx0XHRcdFx0XHR7ICBcblx0XHRcdFx0XHRcdCAgICBjb2xvcjojZDNkM2QzO1xuXHRcdFx0XHRcdFx0XHQmW2ZpbGxlZF1cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci15ZWxsb3cpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXG5cdFx0XHRcdFx0XHQge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IFxuXHRcdFx0XHRcdFx0IH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aW9uLWJ1dHRvblxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IHZhciggLS1pb24tcGFkZGluZy00KTtcblx0XHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IHZhciggLS1pb24tcGFkZGluZy00KTtcblx0XHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctZW5kOiB2YXIoIC0taW9uLXBhZGRpbmctNCk7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiB2YXIoIC0taW9uLXZhbHVlLTIyKTtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46dmFyKC0taW9uLXZhbHVlLTApICB2YXIoLS1pb24tdmFsdWUtMCkgIHZhcigtLWlvbi12YWx1ZS0wKSB2YXIoLS1pb24tdmFsdWUtNSk7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAgdmFyKCAtLWlvbi1mb250LXNpemUtMTIpO1xuXHRcdFx0XHRcdFx0XHRcdC0tYm9yZGVyLXJhZGl1czp2YXIoIC0taW9uLXZhbHVlLTApO1xuXHRcdFx0XHRcdFx0XHRcdC0tYm9yZGVyLXdpZHRoOjFweDtcblx0XHRcdFx0XHR9XG5cdFx0XHQgICB9XG5cdFx0fVxufVx0XHRcbiAvKiBNb2JpbGUgV2lzaGxpc3QgRW5kcyovXG59XHQiLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZ3JleSk7XG4gIC8qICBXaXNobGlzdCBQYWdlICAgU3RhcnQqL1xuICAvKiAgV2lzaGxpc3QgUGFnZSAgIEVuZHMqL1xuICAvKlxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCBcdE1vYmlsZSBXaXNobGlzdCBTdGFydFxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbiAgLyogTW9iaWxlIFdpc2hsaXN0IEVuZHMqLyB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAtLXBhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLTApOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgIC0tcGFkZGluZy10b3A6dmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOnZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgLS1wYWRkaW5nLWVuZDp2YXIoLS1pb24tcGFkZGluZy0wKTsgfSB9XG4gIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHRyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTsgfVxuICAgICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIgdGQge1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTUpOyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHRyIHRkW2Nsb3NlLWJ0bl0gYSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHRyIHRkIFtwcm9kdWN0LW5hbWVdIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTYpOyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIgdGQgW3Byb2R1Y3QtbmFtZV0gYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIgdGQgW3ByaWNlXSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZy00KTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB0ciB0ZCBbcHJpY2VdIHNwYW4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTUpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWx0Z3JleSk7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLTEwKTsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB0ciB0ZCBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpOyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIgdGQgcFt2ZW5kb3ItbmFtZV0ge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB0ciB0ZCBwW3ZlbmRvci1uYW1lXSBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtteS13aXNobGlzdC1wYWdlXSB0YWJsZSB0ciB0ZCBbcmF0aW5nXSBpb24taWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogI2RjZGNkYzsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW215LXdpc2hsaXN0LXBhZ2VdIHRhYmxlIHRyIHRkIFtyYXRpbmddIGlvbi1pY29uW2ZpbGxlZF0ge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXllbGxvdyk7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbbXktd2lzaGxpc3QtcGFnZV0gdGFibGUgdHIgdGQgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pb24tdmFsdWUtMCk7IH1cbiAgaW9uLWNvbnRlbnQgW3BhbmVsXSBbcGFuZWwtaGVhZGluZ11bY2hlY2tvdXQtaGVhZF0ge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgaW9uLWNvbnRlbnQgW3BhbmVsXSBbcGFuZWwtaGVhZGluZ11bY2hlY2tvdXQtaGVhZF0gaDQge1xuICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW3BhbmVsXSBbcGFuZWwtaGVhZGluZ11bY2hlY2tvdXQtaGVhZF0gaDQgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrMyk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgIGlvbi1jb250ZW50IFtwYW5lbF0gW3BhbmVsLWhlYWRpbmddW2NoZWNrb3V0LWhlYWRdIGg0IGEge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmctMTApO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFtwYW5lbF0gW3BhbmVsLWhlYWRpbmddW2NoZWNrb3V0LWhlYWRdIGg0IGEuYWN0aXZlIHNwYW4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTsgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3BhbmVsXSBbcGFuZWwtaGVhZGluZ11bY2hlY2tvdXQtaGVhZF0gaDQgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IH0gfVxuICAgICAgICBpb24tY29udGVudCBbcGFuZWxdIFtwYW5lbC1oZWFkaW5nXVtjaGVja291dC1oZWFkXSBoNCBhIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tMTApO1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0yMCk7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2FhYWFhYTsgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtwYW5lbF0gW3BhbmVsLWhlYWRpbmddW2NoZWNrb3V0LWhlYWRdIGg0IGEgc3BhbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0xNSk7IH0gfVxuICBpb24tY29udGVudCBbcGFuZWxdIFtwYW5lbC1ib2R5XSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xMCkgdmFyKC0taW9uLXBhZGRpbmctMCkgdmFyKC0taW9uLXBhZGRpbmctMjIpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7IH1cbiAgICBpb24tY29udGVudCBbcGFuZWxdIFtwYW5lbC1ib2R5XS5hY3RpdmUge1xuICAgICAgZGlzcGxheTogYmxvY2s7IH1cbiAgaW9uLWNvbnRlbnQgW3JpdEFjdGlvbnNdIHtcbiAgICByaWdodDogM3B4O1xuICAgIHRvcDogLTRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgICBpb24tY29udGVudCBbcml0QWN0aW9uc10gaW9uLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4OyB9XG4gIGlvbi1jb250ZW50IFtwYW5lbC1ib2R5XSB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50OyB9XG4gIGlvbi1jb250ZW50IFtwcm9kdWN0c2Rpdl0ge1xuICAgIHBhZGRpbmc6IDA7IH1cbiAgICBpb24tY29udGVudCBbcHJvZHVjdHNkaXZdIC5pdGVtLW5hdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgfVxuICAgIGlvbi1jb250ZW50IFtwcm9kdWN0c2Rpdl0gaW9uLWl0ZW0ge1xuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyB9XG4gICAgICBpb24tY29udGVudCBbcHJvZHVjdHNkaXZdIGlvbi1pdGVtIGlvbi10aHVtYm5haWwge1xuICAgICAgICBtYXJnaW46IDAgMTVweCAwIDAgIWltcG9ydGFudDsgfVxuICBpb24tY29udGVudCAuc3RhcnMtbGluZSBpLmZhLmZhLXN0YXIge1xuICAgIG1hcmdpbi1yaWdodDogM3B4ICFpbXBvcnRhbnQ7IH1cbiAgaW9uLWNvbnRlbnQgW21haW5TZWNXaXNobGlzdF0ge1xuICAgIHBhZGRpbmc6IDAgMjBweDsgfVxuICAgIGlvbi1jb250ZW50IFttYWluU2VjV2lzaGxpc3RdIFt3aXNobGlzdGxpc3RdIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG4gICAgaW9uLWNvbnRlbnQgW21haW5TZWNXaXNobGlzdF0gW2NhdEhkbmddIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMyMzMwM2U7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgcGFkZGluZzogMHB4IDEzcHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxuICAgICAgaW9uLWNvbnRlbnQgW21haW5TZWNXaXNobGlzdF0gW2NhdEhkbmddIFtidWxsZXRzXSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNhMDI3MTg7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTlweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgICBpb24tY29udGVudCBbbWFpblNlY1dpc2hsaXN0XSBbY2F0SGRuZ10gW3NoYXJlZFRpdGxlXSB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIC8qIGZsb2F0OiByaWdodDsgKi9cbiAgICAgICAgcmlnaHQ6IDIyJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyZjNlYmY7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7IH1cbiAgICBpb24tY29udGVudCBbbWFpblNlY1dpc2hsaXN0XSBbcHJvaW1nXSBpbWcge1xuICAgICAgbWF4LXdpZHRoOiA3MHB4OyB9XG4gIGlvbi1jb250ZW50IFtzdWJIZG5nXSB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuICAgIGlvbi1jb250ZW50IFtzdWJIZG5nXSBbaGVhZGluZy10aXRsZV0ge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMjIpO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4ICNlNWU1ZTUgc29saWQ7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTRweDsgfVxuICAgICAgaW9uLWNvbnRlbnQgW3N1YkhkbmddIFtoZWFkaW5nLXRpdGxlXSBbc3JjaC1maWx0ZXJdIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0OyB9XG4gICAgICAgIGlvbi1jb250ZW50IFtzdWJIZG5nXSBbaGVhZGluZy10aXRsZV0gW3NyY2gtZmlsdGVyXSBbc2VhcmNoLWlucHV0XSB7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTUpIHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwO1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIGhlaWdodDogMzJweDsgfVxuICAgICAgICBpb24tY29udGVudCBbc3ViSGRuZ10gW2hlYWRpbmctdGl0bGVdIFtzcmNoLWZpbHRlcl0gW3NlYXJjaC1idXR0b25dIHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB3aWR0aDogdmFyKC0taW9uLXdoLTMyKTtcbiAgICAgICAgICBoZWlnaHQ6IHZhcigtLWlvbi13aC0zMik7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTMyKTtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTYpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpOyB9XG4gIGlvbi1jb250ZW50IFthZGROZXdXaXNobGlzdF0ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbjogLTE0cHggMCAwO1xuICAgIGhlaWdodDogMzBweDsgfVxuICBpb24tY29udGVudCBbcml0QWN0aW9uczJdIGlvbi1jaGVja2JveCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIDlweCk7IH1cbiAgaW9uLWNvbnRlbnQgaDMubWFpbldpc2hIZG5nIHtcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgaW9uLWNvbnRlbnQgaDMubWFpbldpc2hIZG5nIFthZGRuZXd3aXNobGlzdEFwcF0ge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBtYXJnaW46IDBweCAwIDAgNHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgZmxvYXQ6IHJpZ2h0OyB9XG4gIGlvbi1jb250ZW50IFtyaXRBY3Rpb25zXSBpb24tY2hlY2tib3gge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDExcHgpO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsgfVxuICBpb24tY29udGVudCBbcml0QWN0aW9uc10gaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IC00cHg7IH1cbiAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoIC0taW9uLXBhZGRpbmctMTApO1xuICAgIC0tcGFkZGluZy1lbmQ6IHZhciggLS1pb24tcGFkZGluZy0wKTtcbiAgICAtLXBhZGRpbmctdG9wOiB2YXIoIC0taW9uLXBhZGRpbmctMTApO1xuICAgIC0tcGFkZGluZy1ib3R0b206IHZhciggLS1pb24tcGFkZGluZy0xMCk7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTEwKTsgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0ge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTApOyB9IH1cbiAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIGlvbi10aHVtYm5haWwge1xuICAgICAgLypcblx0XHRcdFx0XHRcdHdpZHRoOiB2YXIoIC0taW9uLXZhbHVlLTkwKTtcblx0XHRcdFx0XHQgICBoZWlnaHQ6IHZhciggLS1pb24tdmFsdWUtOTApO1xuXHRcdFx0XHRcdCAgbWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdCAgIG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi0wKTsqLyB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlOyB9IH1cbiAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIHtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIGgzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0zKTsgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gbGFiZWwgW3ByaWNlLW1haW5dIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0zKTsgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCBbcHJpY2UtbWFpbl0ge1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gbGFiZWwgW3ByaWNlLW1haW5dIFtwcmljZV0ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCBbcHJpY2UtbWFpbl0gW3ByaWNlLWRpc2NvdW50XSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sdGdyZXkpO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tdmFsdWUtNSk7IH1cbiAgICAgIGlvbi1jb250ZW50IFt3aXNobGlzdC1tb2JdIFt3aXNobGlzdC1pdGVtc10gaW9uLWl0ZW0gbGFiZWwgW3JhdGluZ10gaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogI2QzZDNkMzsgfVxuICAgICAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIGxhYmVsIFtyYXRpbmddIGlvbi1pY29uW2ZpbGxlZF0ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3IteWVsbG93KTsgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3dpc2hsaXN0LW1vYl0gW3dpc2hsaXN0LWl0ZW1zXSBpb24taXRlbSBsYWJlbCBbcmF0aW5nXSBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICBpb24tY29udGVudCBbd2lzaGxpc3QtbW9iXSBbd2lzaGxpc3QtaXRlbXNdIGlvbi1pdGVtIGlvbi1idXR0b24ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoIC0taW9uLXBhZGRpbmctNCk7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhciggLS1pb24tcGFkZGluZy00KTtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhciggLS1pb24tcGFkZGluZy00KTtcbiAgICAgIGhlaWdodDogdmFyKC0taW9uLXZhbHVlLTIyKTtcbiAgICAgIG1hcmdpbjogdmFyKC0taW9uLXZhbHVlLTApIHZhcigtLWlvbi12YWx1ZS0wKSB2YXIoLS1pb24tdmFsdWUtMCkgdmFyKC0taW9uLXZhbHVlLTUpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czp2YXIoIC0taW9uLXZhbHVlLTApO1xuICAgICAgLS1ib3JkZXItd2lkdGg6MXB4OyB9XG4iXX0= */"

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