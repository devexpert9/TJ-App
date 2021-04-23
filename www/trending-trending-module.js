(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trending-trending-module"],{

/***/ "./src/app/trending/trending.module.ts":
/*!*********************************************!*\
  !*** ./src/app/trending/trending.module.ts ***!
  \*********************************************/
/*! exports provided: TrendingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingPageModule", function() { return TrendingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-stars */ "./node_modules/ngx-stars/fesm5/ngx-stars.js");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _trending_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./trending.page */ "./src/app/trending/trending.page.ts");










var routes = [
    {
        path: '',
        component: _trending_page__WEBPACK_IMPORTED_MODULE_9__["TrendingPage"]
    }
];
var TrendingPageModule = /** @class */ (function () {
    function TrendingPageModule() {
    }
    TrendingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ngx_stars__WEBPACK_IMPORTED_MODULE_7__["NgxStarsModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_8__["HeaderPageModule"]
            ],
            declarations: [_trending_page__WEBPACK_IMPORTED_MODULE_9__["TrendingPage"]],
            entryComponents: [],
        })
    ], TrendingPageModule);
    return TrendingPageModule;
}());



/***/ }),

/***/ "./src/app/trending/trending.page.html":
/*!*********************************************!*\
  !*** ./src/app/trending/trending.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-hide-md-up\">\n  <ion-toolbar color=\"secondary\">\n        <ion-menu-button slot=\"start\">\n\t\t    <img height=\"15px\" src=\"assets/img/menu.png\"/>\n\t\t</ion-menu-button>\n    <ion-title class=\"ion-text-center\">Shop</ion-title>\n\t<ion-buttons slot=\"end\" mar-10 (click)=\"hide()\"><ion-icon name=\"options-outline\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content #content> \n<app-header></app-header>\n<div class=\"ion-padding\">\n\n<div class=\"logo-rating-sec\">\t\n   <ion-row>\n\t  <ion-col size=\"6\" class=\"ion-align-self-center\">\n\t\t <div class=\"logo-mn-sec\">\n\t\t\t<div class=\"vendor-profile-img1\">\n\t\t\t  <img src=\"assets/img/vendorlogo.png\" alt=\"\">\n\t\t\t</div>\n\t\t\t<div class=\"logo-rating\">\n\t\t\t\t<span name-logo>Yabli.Store</span>\n\t\t\t   <div class=\"rating-icon\">\n\t\t\t\t  <i class=\"fa fa-star\"></i>\n\t\t\t\t  <i class=\"fa fa-star\"></i>\n\t\t\t\t  <i class=\"fa fa-star\"></i>\n\t\t\t\t  <i class=\"fa fa-star-half-o\"></i>\n\t\t\t\t  <i class=\"fa fa-star-o\"></i>\n\t\t\t\t<span>3.5</span>\n\t\t\t   </div>\n\t\t\t</div>\n\t\t </div>\n\t  </ion-col>\n\t  <ion-col size=\"6\" class=\"ion-text-right ion-align-self-center\">\n\t\t\t\t<div class=\"header-call-action menu-right\">\n\t\t\t\t\t<ul class=\"menu-right-ul\">\n\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t<li class=\"menu-right-li-share\">\n\t\t\t\t\t\t\t<ion-select [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Flag\">\n\t\t\t\t\t\t\t\t<ion-select-option value=\"Flag-1\">Flag-1</ion-select-option>\n\t\t\t\t\t\t\t\t<ion-select-option value=\"Flag-2\">Flag-2</ion-select-option>\n\t\t\t\t\t\t\t\t<ion-select-option value=\"Flag-3\">Flag-3</ion-select-option>\n\t\t\t\t\t\t\t\t<ion-select-option value=\"Flag-4\">Flag-4</ion-select-option>\n\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t  </li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t  </ion-col>\n   </ion-row>\n</div>\t\n<div class=\"main-wrapper pt-35\">\t\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div filerweb-none class=\"col-lg-12\" *ngIf=\"hideMe\">\n                    <div class=\"shop-sidebar-inner shopsidebar mb-3\">\n                        <div class=\"d-flex\">\n\t\t\t\t\t\t\t<div class=\"single-sidebar\">\n\t\t\t\t\t\t\t   <div class=\"dropdown\">\n\t\t\t\t\t\t\t\t    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Categories\n\t\t\t\t\t\t\t\t    <span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t    <ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t    <li  *ngFor=\"let cat of all_categories; let cat_index = index \">\n\t\t\t\t\t\t\t\t\t\t\t<ion-list *ngFor=\"let subcat of cat.subcats\" class=\"padd-ics\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-item p-lr-0 border-none lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>{{subcat.subcat_name}}</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-checkbox slot=\"start\" [checked]=\"filtered_cats.indexOf(cat.cat_id) >= 0 && selected_cats_checked.indexOf(subcat.subcat_id) >= 0\" (ionChange)=\"catChecked($event,cat.cat_id,subcat.subcat_id)\" ></ion-checkbox>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-item> \n\t\t\t\t\t\t\t\t\t\t\t</ion-list>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t    </ul>\n\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"single-sidebar\">\n\t\t\t\t\t\t\t    <div class=\"dropdown\">\n\t\t\t\t\t\t\t\t    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Fillter By Price\n\t\t\t\t\t\t\t\t    <span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t    <ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t    <li>\n\t\t\t\t\t\t\t\t\t  \t    <div class=\"sidebar-content-box\">\n\t\t\t\t\t\t\t\t\t  \t        <div class=\"filter-price-content shop-range\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-item id=\"price-slider\" lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-range [(ngModel)]=\"price_values\" (ionChange)=\"priceChanged($event)\"  dualKnobs=\"true\"  min=\"0\" max=\"10000\" step=\"20\" snaps=\"true\" ticks=\"true\" color=\"darkred\"></ion-range>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\t\t\n                                                    <div class=\"filter-price-cont\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t${{min_price}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t${{max_price}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                                    </div>\t\t\n\t\t\t\t\t\t\t\t\t  \t        </div>\n\t\t\t\t\t\t\t\t\t  \t    </div>\n\t\t\t\t\t\t\t\t\t    </li>\n\t\t\t\t\t\t\t\t    </ul>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"single-sidebar\">\n\t\t\t\t\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Sort\n\t\t\t\t\t\t\t\t\t<span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu hsr\">\n\t\t\t\t\t\t\t\t\t\t  <li (click)=\"sortBy('relevance','Relevance')\"><a>Relevance</a></li>\n\t\t\t\t\t\t\t\t\t\t  <li (click)=\"sortBy('price_low_to_high','Price - Low to High')\"><a>Price - Low to High</a></li>\n\t\t\t\t\t\t\t\t\t\t  <li (click)=\"sortBy('price_high_to_low','Price - High to Low')\"><a>Price - High to Low</a></li>\n\t\t\t\t\t\t\t\t\t\t  <li (click)=\"sortBy('discount_low_to_high','Discount - Low to High')\"><a>Discount - Low to High</a></li>\n\t\t\t\t\t\t\t\t\t\t  <li (click)=\"sortBy('discount_high_to_low','Discount - High to Low')\"><a>Discount - High to Low</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"single-sidebar mdys\">\n\t\t\t\t\t\t\t\t<button class=\"applybtn\" (click)=\"callFilter()\">\n\t\t\t\t\t\t\t\tApply \n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button class=\"applybtn reset-flts\" (click)=\"resetFilter()\">\n\t\t\t\t\t\t\t\tReset \n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n                        </div>\n                    </div>\n                </div>\t\t\t\n                <div class=\"col-lg-12\" filermob-none>\n                    <div class=\"section-title mt-0\">\n                        <h3><span> Trending </span> Products</h3>\n                    </div>\n\n                    <div home-cate-sec>\n\t\t\t\t   \t    <div class=\"container\">\n\t\t\t\t   \t\t    <div class=\"row\">\t\t\n\t\t\t\t   \t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t   \t\t\t\t\t<button type=\"submit\" float-left ion-button class=\"btnPrev\" (click)=\"prev()\"><ion-icon name=\"arrow-back\"></ion-icon></button>\n\t\t\t\t   \t\t\t\t\t<button type=\"submit\" float-right ion-button class=\"btnNext\" (click)=\"next()\"><ion-icon name=\"arrow-forward\"></ion-icon></button>\t\t\n\t\t\t\t   \t\t\t\t\t\n\t\t\t\t                  <ion-slides pager [options]=\"slideOpts1\" #slides>\n\t\t\t\t   \t\t\t\t\t\t<ion-slide *ngFor=\"let product of products \">\t\n\t\t\t\t   \t\t\t\t\t\t\t<div new-users-mn>\n\t\t\t\t   \t\t\t\t\t\t\t\t<div class=\"product-item mb-30\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-thumb\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/product-details/{{product.product_id}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{product.product_image}}\" alt=\"{{product.product_name}}\">\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"product?.product_quantity == 0 || errors.indexOf(product?.product_quantity) >= 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-product label_sale\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <span>Sold Out</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"product?.product_quantity != 0 && errors.indexOf(product?.product_quantity) == -1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"box-label bg-grrns\" *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-product label_sale\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <span>Sale</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-label\" *ngIf=\"errors.indexOf(product?.product_sale_price) >= 0 || product?.product_sale_price == product?.product_purchase_price\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-product label_sale\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   <span>{{product?.product_featured == '1' ? 'featured' : 'new'}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-links\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-button class=\"bnt\" [disabled]=\"product?.product_quantity == 0 || errors.indexOf(product?.product_quantity) >= 0\" *ngIf=\"my_cart_products.indexOf(product.product_id) == -1\" (click)=\"addToCart(product.product_id,product.product_sale_price,product.product_purchase_price)\" title=\"Add Cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"lnr lnr-magnifier\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-button class=\"bnt\"  *ngIf=\"my_cart_products.indexOf(product.product_id) >= 0\" add-to-cart color=\"darkred\" title=\"Added\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"checkmark\"></ion-icon> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-button class=\"bnt\" *ngIf=\"my_wish_products.indexOf(product.product_id) == -1\" (click)=\"addToWish(product.product_id)\" title=\"Wishlist\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"lnr lnr-heart\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-button class=\"bnt\" *ngIf=\"my_wish_products.indexOf(product.product_id) >= 0\" title=\"Added\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <i class=\"red_heart fa fa-heart\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-caption\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--div class=\"manufacture-product\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"product?.product_user_type != 'Admin'\" vendor-name  class=\"ion-hide-md-down\">Sold by <a>{{product?.vendor_company}}</a></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"manufacture-product\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><a href=\"javascript:void(0)\">apple</a></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4><a routerLink=\"/product-details/{{product.product_id}}\">{{product.product_name}}</a></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ratings\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div rating rateit-small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"product?.Review_Average\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price-box\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"regular-price\" *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"special-price\">${{product?.product_sale_price}} </span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span class=\"regular-price\" *ngIf=\"errors.indexOf(product?.product_sale_price) >= 0 || product?.product_sale_price == product?.product_purchase_price\">${{product?.product_purchase_price}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span class=\"old-price\" *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price\" price-before-discount ><del>${{product?.product_purchase_price}}</del></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn-cart\" [disabled]=\"product?.product_quantity == 0 || errors.indexOf(product?.product_quantity) >= 0\" *ngIf=\"my_cart_products.indexOf(product.product_id) == -1\" (click)=\"addToCart(product.product_id,product.product_sale_price,product.product_purchase_price)\" title=\"Add Cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd to cart\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"  class=\"btn-cart\" *ngIf=\"my_cart_products.indexOf(product.product_id) >= 0\"  title=\"Added\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"checkmark\"></ion-icon> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t   \t\t\t\t\t\t\t</div>\n\t\t\t\t   \t\t\t\t\t\t</ion-slide>\n\t\t\t\t   \t\t\t\t\t\t\n\t\t\t\t   \t\t\t\t\t</ion-slides>\t\t\t\t\n\t\t\t\t   \t\t\t\t</div>\n\t\t\t\t   \t\t\t</div>\n\t\t\t\t   \t\t</div>\n\t\t\t\t   \t</div>\n                </div>\n\n                <!-- <div class=\"col-lg-12 text-right productdisplayed mb-3\">\n\t\t\t\t\t<span filter (click)=\"presentModal1()\" class=\"ion-hide-lg-up\"><ion-icon name=\"funnel\" class=\"ion-hide-lg-up\"></ion-icon> Filter</span>\n\t\t\t\t\t<div lbl-cnt class=\"ion-hide-md-down cont-str\">\n\t\t\t\t\t <span lbl>No of Products Displayed</span>\n\t\t\t\t\t\t<div fld>\n\t\t\t\t\t\t  <div class=\"dropdown\">\n\t\t\t\t\t\t\t\t<button data-toggle=\"dropdown\" type=\"button\" class=\"btn dropdown-toggle\"> {{show_count}}<span class=\"caret\"></span> </button>\n\t\t\t\t\t\t\t\t<ul role=\"menu\" class=\"dropdown-menu pull-right\">\n\t\t\t\t\t\t\t\t  <li (click)=\"show_count_change(10)\"><a>0-10</a></li>\n\t\t\t\t\t\t\t\t  <li (click)=\"show_count_change(20)\"><a>11-20</a></li>\n\t\t\t\t\t\t\t\t  <li (click)=\"show_count_change(30)\"><a>21-30</a></li>\n\t\t\t\t\t\t\t\t  <li (click)=\"show_count_change(40)\"><a>31-40</a></li>\n\t\t\t\t\t\t\t\t  <li (click)=\"show_count_change(50)\"><a>41-50</a></li>\n\t\t\t\t\t\t\t\t</ul>  \n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>                   \n\t\t\t\t\t</div>\n                </div>\n                <div class=\"col-lg-12  order-lg-last\">\n                    <div class=\"product-shop-main-wrapper mb-50\">\n                        <div class=\"shop-product-wrap grid column_3 row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-xl-3 col-md-4 col-sm-12\" *ngFor=\"let product of products \">\n\t\t\t\t\t\t\t    <div class=\"product-item mb-30\">\n\t\t\t\t\t\t\t\t\t<div class=\"product-thumb\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/product-details/{{product.product_id}}\">\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{product.product_image}}\" alt=\"{{product.product_name}}\">\t\n\t\t\t\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"product?.product_quantity == 0 || errors.indexOf(product?.product_quantity) >= 0\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-product label_sale\">\n\t\t\t\t\t\t\t\t\t\t\t\t   <span>Sold Out</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"product?.product_quantity != 0 && errors.indexOf(product?.product_quantity) == -1\">\n\t\t\t\t\t\t\t\t\t\t\t<div  class=\"box-label bg-grrns\" *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-product label_sale\">\n\t\t\t\t\t\t\t\t\t\t\t\t   <span>Sale</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-label\" *ngIf=\"errors.indexOf(product?.product_sale_price) >= 0 || product?.product_sale_price == product?.product_purchase_price\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-product label_sale\">\n\t\t\t\t\t\t\t\t\t\t\t\t   <span>{{product?.product_featured == '1' ? 'featured' : 'new'}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t<div class=\"action-links\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-button class=\"bnt\" [disabled]=\"product?.product_quantity == 0 || errors.indexOf(product?.product_quantity) >= 0\" *ngIf=\"my_cart_products.indexOf(product.product_id) == -1\" (click)=\"addToCart(product.product_id,product.product_sale_price,product.product_purchase_price)\" title=\"Add Cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"lnr lnr-magnifier\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-button class=\"bnt\"  *ngIf=\"my_cart_products.indexOf(product.product_id) >= 0\" add-to-cart color=\"darkred\" title=\"Added\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"checkmark\"></ion-icon> \n\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-button class=\"bnt\" *ngIf=\"my_wish_products.indexOf(product.product_id) == -1\" (click)=\"addToWish(product.product_id)\" title=\"Wishlist\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"lnr lnr-heart\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-button class=\"bnt\" *ngIf=\"my_wish_products.indexOf(product.product_id) >= 0\" title=\"Added\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <i class=\"red_heart fa fa-heart\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"product-caption\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"manufacture-product\">\n\t\t\t\t\t\t\t\t\t\t\t<p><a href=\"javascript:void(0)\">apple</a></p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"product-name\">\n\t\t\t\t\t\t\t\t\t\t\t<h4><a routerLink=\"/product-details/{{product.product_id}}\">{{product.product_name}}</a></h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"ratings\">\n\t\t\t\t\t\t\t\t\t\t\t<div rating rateit-small>\n\t\t\t\t\t\t\t\t\t\t\t\t<ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"product?.Review_Average\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"price-box\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"regular-price\" *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price\" >\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"special-price\">${{product?.product_sale_price}} </span></span>\n\t\t\t\t\t\t\t\t\t\t\t <span class=\"regular-price\" *ngIf=\"errors.indexOf(product?.product_sale_price) >= 0 || product?.product_sale_price == product?.product_purchase_price\">${{product?.product_purchase_price}}</span>\n\t\t\t\t\t\t\t\t\t\t\t <span class=\"old-price\" *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price\" price-before-discount ><del>${{product?.product_purchase_price}}</del></span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn-cart\" [disabled]=\"product?.product_quantity == 0 || errors.indexOf(product?.product_quantity) >= 0\" *ngIf=\"my_cart_products.indexOf(product.product_id) == -1\" (click)=\"addToCart(product.product_id,product.product_sale_price,product.product_purchase_price)\" title=\"Add Cart\">\n\t\t\t\t\t\t\t\t\t\t\tAdd to cart\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\"  class=\"btn-cart\" *ngIf=\"my_cart_products.indexOf(product.product_id) >= 0\"  title=\"Added\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"checkmark\"></ion-icon> \n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</div>\n                        </div>\n\t\t\t\t\t\t <div class=\"paginatoin-area style-2 pt-35 pb-20\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t   <div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t  <div class=\"pagination-area\">\n\t\t\t\t\t\t\t\t\t <p>Showing 1 to 9 of 9 (1 Pages)</p>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t </div>\n                    </div>\n                </div> -->\n                \n            </div>\n        </div>\n    </div>\n\t\n</div>\t\n<!--- Product Main section Ends -->\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/trending/trending.page.scss":
/*!*********************************************!*\
  !*** ./src/app/trending/trending.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  display: none !important; }\n\nion-header ion-toolbar ion-menu-button {\n  height: 35px;\n  position: inherit;\n  top: inherit;\n  right: inherit;\n  transition: inherit;\n  transition-delay: .1s; }\n\nion-header ion-toolbar ion-menu-button img {\n    max-width: 20px; }\n\nion-header ion-toolbar ion-title {\n  font-weight: 700; }\n\nion-header ion-toolbar ion-buttons {\n  font-size: 22px; }\n\nion-header ion-toolbar ion-buttons[mar-10] {\n    margin-right: 10px; }\n\nion-content ion-slide [new-users-mn] {\n  outline: 0px; }\n\nion-content [home-cate-sec] {\n  position: relative;\n  padding: 40px 0px 10px; }\n\nion-content [home-cate-sec] button.btnNext {\n    position: absolute;\n    right: -15px;\n    width: 40px;\n    height: 40px;\n    background: var(--ion-color-primary);\n    border-radius: 50%;\n    color: #fff !important;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    -webkit-transform: translate;\n            transform: translate;\n    font-size: 20px;\n    z-index: 11; }\n\nion-content [home-cate-sec] button.btnPrev {\n    position: absolute;\n    left: -15px;\n    width: 40px;\n    height: 40px;\n    background: var(--ion-color-primary);\n    border-radius: 50%;\n    color: #fff !important;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    font-size: 20px;\n    z-index: 11; }\n\n@media (min-width: 768px) {\n  ion-content [filerweb-none] {\n    display: none; }\n  ion-content .logo-rating-sec {\n    display: none; } }\n\n@media (max-width: 767px) {\n  ion-content .productdisplayed ion-select {\n    --padding-start: 12px;\n    --padding-end: 7px;\n    font-size: 11px;\n    --padding-bottom: 5px;\n    --padding-top: 5px; }\n  ion-content .logo-rating-sec {\n    display: block;\n    padding: 20px 5px;\n    position: relative;\n    background: url('header-bg.jpg') no-repeat center center/cover; }\n    ion-content .logo-rating-sec .vendor-profile-img1 img {\n      width: 48px;\n      height: 48px;\n      border: 1px solid #fff;\n      margin-right: 5px;\n      padding: 4px; }\n    ion-content .logo-rating-sec .vendor-profile-img1 span {\n      font-size: 14px; }\n    ion-content .logo-rating-sec .logo-mn-sec {\n      display: flex;\n      align-items: center; }\n      ion-content .logo-rating-sec .logo-mn-sec .logo-rating [name-logo] {\n        font-size: 13px;\n        color: #fff; }\n      ion-content .logo-rating-sec .logo-mn-sec .logo-rating .rating-icon {\n        color: #fff;\n        font-size: 12px;\n        margin-top: 1px; }\n        ion-content .logo-rating-sec .logo-mn-sec .logo-rating .rating-icon i {\n          color: var(--ion-color-primary); }\n        ion-content .logo-rating-sec .logo-mn-sec .logo-rating .rating-icon span {\n          margin-left: 4px; }\n    ion-content .logo-rating-sec .header-call-action .menu-right-ul li a {\n      font-size: 18px;\n      padding: 0px 3px; }\n  ion-content .shop-product-wrap .product-item {\n    display: flex;\n    align-items: center;\n    background: #f9f9f9;\n    padding: 12px 10px;\n    margin-bottom: 20px; }\n    ion-content .shop-product-wrap .product-item .product-thumb img {\n      max-height: 120px;\n      min-height: 120px;\n      width: 120px;\n      min-width: 120px;\n      -o-object-fit: cover;\n         object-fit: cover; }\n    ion-content .shop-product-wrap .product-item .product-thumb .action-links {\n      right: 5px;\n      top: 5px; }\n      ion-content .shop-product-wrap .product-item .product-thumb .action-links a {\n        font-size: 14px;\n        height: 28px;\n        width: 28px; }\n        ion-content .shop-product-wrap .product-item .product-thumb .action-links a i {\n          line-height: 28px; }\n    ion-content .shop-product-wrap .product-item .product-thumb .box-label .label-product {\n      top: 5px;\n      font-size: 10px;\n      line-height: 20px;\n      min-width: 30px;\n      padding: 0 8px; }\n    ion-content .shop-product-wrap .product-item .product-caption {\n      padding: 0px 4px 0px 10px; }\n      ion-content .shop-product-wrap .product-item .product-caption .manufacture-product p {\n        line-height: 18px; }\n        ion-content .shop-product-wrap .product-item .product-caption .manufacture-product p a {\n          color: #979797;\n          font-size: 12px;\n          line-height: 17px; }\n      ion-content .shop-product-wrap .product-item .product-caption .product-name h4 {\n        font-size: 12px;\n        font-weight: 600;\n        line-height: 19px;\n        padding: 3px 0; }\n      ion-content .shop-product-wrap .product-item .product-caption .ratings {\n        padding: 2px 0; }\n        ion-content .shop-product-wrap .product-item .product-caption .ratings span {\n          font-size: 12px;\n          margin-right: 1px;\n          color: #7c7c7c; }\n          ion-content .shop-product-wrap .product-item .product-caption .ratings span.yellow {\n            color: var(--ion-color-secondary); }\n      ion-content .shop-product-wrap .product-item .product-caption .price-box .regular-price {\n        color: #7c7c7c;\n        font-size: 13px;\n        font-weight: 600; }\n      ion-content .shop-product-wrap .product-item .product-caption .btn-cart {\n        font-size: 12px;\n        line-height: 30px;\n        padding: 0 18px;\n        bottom: 2px; }\n  ion-content .shop-sidebar-inner.shopsidebar {\n    position: fixed;\n    top: 56px;\n    left: 0px;\n    right: 0px;\n    background: #fff;\n    z-index: 999;\n    display: block;\n    border-radius: 0px;\n    padding: 15px 15px 30px; }\n    ion-content .shop-sidebar-inner.shopsidebar .single-sidebar {\n      display: inline-block;\n      width: 47%;\n      margin: 0px 4px;\n      box-sizing: border-box; }\n      ion-content .shop-sidebar-inner.shopsidebar .single-sidebar .dropdown {\n        display: block; }\n        ion-content .shop-sidebar-inner.shopsidebar .single-sidebar .dropdown .dropdown-toggle {\n          min-width: 100%;\n          font-size: 14px;\n          height: 42px; }\n      ion-content .shop-sidebar-inner.shopsidebar .single-sidebar .applybtn {\n        height: 42px;\n        min-width: 100%; }\n  ion-content [filermob-none] {\n    display: none; } }\n\n.cont-str {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end; }\n\n.cont-str button.btn {\n    margin-left: 10px;\n    min-width: 70px; }\n\n.cont-str .dropdown-menu li {\n    padding: 7px 10px;\n    font-size: 14px;\n    min-width: 120px; }\n\n.product-caption .btn-cart {\n  right: 0;\n  left: 0;\n  margin: auto; }\n\n.action-links {\n  position: absolute;\n  right: -6px;\n  top: -5px; }\n\n[rateit-small] {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvdHJlbmRpbmcvdHJlbmRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC90cmVuZGluZy90cmVuZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHQSx3QkFBc0IsRUFBQTs7QUFIdEI7RUFTRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFBOztBQWR2QjtJQWlCTSxlQUFlLEVBQUE7O0FBakJyQjtFQXNCRSxnQkFBZSxFQUFBOztBQXRCakI7RUF5QkUsZUFBYyxFQUFBOztBQXpCaEI7SUE0Qkksa0JBQWlCLEVBQUE7O0FBV3JCO0VBTU0sWUFBVyxFQUFBOztBQU5qQjtFQVdFLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFaeEI7SUFpQkksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLDRCQUFtQjtZQUFuQixvQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVcsRUFBQTs7QUEvQmY7SUFtQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixXQUFXLEVBQUE7O0FBTWY7RUFDQztJQUlXLGFBQVksRUFBQTtFQUp2QjtJQVFLLGFBQVksRUFBQSxFQUNmOztBQUdIO0VBQ0M7SUFNRSxxQkFBZ0I7SUFDaEIsa0JBQWM7SUFDZCxlQUFlO0lBQ2YscUJBQWlCO0lBQ2pCLGtCQUFjLEVBQUE7RUFWaEI7SUFlRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw4REFBNkUsRUFBQTtJQWxCL0U7TUF1QkksV0FBVztNQUNYLFlBQVk7TUFDWixzQkFBc0I7TUFDdEIsaUJBQWlCO01BQ2pCLFlBQVksRUFBQTtJQTNCaEI7TUErQkksZUFBZSxFQUFBO0lBL0JuQjtNQW9DRyxhQUFhO01BQ2IsbUJBQW1CLEVBQUE7TUFyQ3RCO1FBMENLLGVBQWU7UUFDZixXQUFXLEVBQUE7TUEzQ2hCO1FBK0NLLFdBQVc7UUFDWCxlQUFlO1FBQ2YsZUFBZSxFQUFBO1FBakRwQjtVQW9ETSwrQkFBK0IsRUFBQTtRQXBEckM7VUF3RE0sZ0JBQWdCLEVBQUE7SUF4RHRCO01BcUVNLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtFQXRFdEI7SUFnRkcsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ04sbUJBQW1CLEVBQUE7SUFwRmxDO01BeUZLLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixvQkFBaUI7U0FBakIsaUJBQWlCLEVBQUE7SUE3RnRCO01BaUdLLFVBQVU7TUFDVixRQUFRLEVBQUE7TUFsR2I7UUFxR00sZUFBZTtRQUNmLFlBQVk7UUFDWixXQUFXLEVBQUE7UUF2R2pCO1VBMEdPLGlCQUFpQixFQUFBO0lBMUd4QjtNQWtITSxRQUFRO01BQ1IsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsY0FBYyxFQUFBO0lBdEhwQjtNQTRIbUIseUJBQXlCLEVBQUE7TUE1SDVDO1FBaUlNLGlCQUFpQixFQUFBO1FBakl2QjtVQW9JTyxjQUFjO1VBQ2QsZUFBZTtVQUNmLGlCQUFpQixFQUFBO01BdEl4QjtRQThJTSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixjQUFjLEVBQUE7TUFqSnBCO1FBc0pRLGNBQWMsRUFBQTtRQXRKdEI7VUF5Sk0sZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixjQUFjLEVBQUE7VUEzSnBCO1lBOEpVLGlDQUFpQyxFQUFBO01BOUozQztRQXNLTSxjQUFjO1FBQ2QsZUFBZTtRQUNmLGdCQUFnQixFQUFBO01BeEt0QjtRQTZLSyxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixXQUFXLEVBQUE7RUFoTGhCO0lBeUxHLGVBQWU7SUFDZixTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDZix1QkFBdUIsRUFBQTtJQWpNN0I7TUFvTUkscUJBQXFCO01BQ3JCLFVBQVU7TUFDVixlQUFlO01BQ2Ysc0JBQXNCLEVBQUE7TUF2TTFCO1FBME1JLGNBQWEsRUFBQTtRQTFNakI7VUE2TU0sZUFBZTtVQUNmLGVBQWU7VUFDZixZQUFZLEVBQUE7TUEvTWxCO1FBb05LLFlBQVk7UUFDWixlQUFlLEVBQUE7RUFyTnBCO0lBNE5LLGFBQVksRUFBQSxFQUNmOztBQUdIO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUIsRUFBQTs7QUFIN0I7SUFLRSxpQkFBaUI7SUFDakIsZUFBZSxFQUFBOztBQU5qQjtJQVNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0MsUUFBTztFQUNQLE9BQU07RUFDTixZQUFXLEVBQUE7O0FBRVo7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVMsRUFBQTs7QUNqSmI7RURvSkMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RyZW5kaW5nL3RyZW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4mOjphZnRlclxue1xuZGlzcGxheTpub25lIWltcG9ydGFudDtcbn1cbiBpb24tdG9vbGJhclxuIHtcbiAgICBpb24tbWVudS1idXR0b25cblx0e1xuXHRcdGhlaWdodDogMzVweDtcblx0XHRwb3NpdGlvbjogaW5oZXJpdDtcblx0XHR0b3A6IGluaGVyaXQ7XG5cdFx0cmlnaHQ6IGluaGVyaXQ7XG5cdFx0dHJhbnNpdGlvbjogaW5oZXJpdDtcblx0XHR0cmFuc2l0aW9uLWRlbGF5OiAuMXM7XG4gICAgICAgIGltZ1xuICAgICAgICB7XG5cdFx0ICAgIG1heC13aWR0aDogMjBweDtcblx0XHR9XHRcdFxuXHR9XG5cdGlvbi10aXRsZVxuXHR7XG5cdFx0Zm9udC13ZWlnaHQ6NzAwO1xuXHR9IFxuICAgIGlvbi1idXR0b25zXG5cdHtmb250LXNpemU6MjJweDtcblx0ICAmW21hci0xMF1cblx0ICB7XG5cdCAgIG1hcmdpbi1yaWdodDoxMHB4O1xuXHQgIH1cblx0fVxuIH1cblxufVxuXG5cblxuXG5cbmlvbi1jb250ZW50XG57XG4gICAgaW9uLXNsaWRlXG5cdHtcblx0ICAgIFtuZXctdXNlcnMtbW5dXG5cdFx0e1xuXHRcdCAgICBvdXRsaW5lOjBweDtcblx0XHR9XG5cdH1cblx0W2hvbWUtY2F0ZS1zZWNdIFxuXHR7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHBhZGRpbmc6IDQwcHggMHB4IDEwcHg7XG5cdFx0YnV0dG9uXG5cdFx0e1xuXHRcdFx0Ji5idG5OZXh0IFxuXHRcdFx0e1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHJpZ2h0OiAtMTVweDtcblx0XHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHR0b3A6IDUwJTtcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHRcdFx0XHR0cmFuc2Zvcm06dHJhbnNsYXRlO1xuXHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdHotaW5kZXg6IDExO1xuXHRcdFx0fVxuXHRcdFx0Ji5idG5QcmV2IFxuXHRcdFx0e1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGxlZnQ6IC0xNXB4O1xuXHRcdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0Y29sb3I6ICNmZmYgIWltcG9ydGFudDtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdHRvcDogNTAlO1xuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0ei1pbmRleDogMTE7XG5cdFx0XHR9XHRcdFxuXHRcdH1cdFx0XG5cdH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdGlvbi1jb250ZW50XG5cdHtcblx0ICAgIFtmaWxlcndlYi1ub25lXVxuXHRcdHtcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcdFx0ICAgICBcblx0XHR9XG5cdFx0LmxvZ28tcmF0aW5nLXNlY1xuXHRcdHtcblx0XHQgICAgZGlzcGxheTpub25lO1xuXHRcdH1cblx0fVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdGlvbi1jb250ZW50XG5cdHtcblx0LnByb2R1Y3RkaXNwbGF5ZWQgXG5cdHtcblx0XHRpb24tc2VsZWN0IFxuXHRcdHtcblx0XHRcdC0tcGFkZGluZy1zdGFydDogMTJweDtcblx0XHRcdC0tcGFkZGluZy1lbmQ6IDdweDtcblx0XHRcdGZvbnQtc2l6ZTogMTFweDtcblx0XHRcdC0tcGFkZGluZy1ib3R0b206IDVweDtcblx0XHRcdC0tcGFkZGluZy10b3A6IDVweDtcblx0XHR9XHRcblx0fVx0XG5cdCAgICAubG9nby1yYXRpbmctc2VjXG5cdFx0e1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRwYWRkaW5nOiAyMHB4IDVweDtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2hlYWRlci1iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1x0XG5cdFx0XHQudmVuZG9yLXByb2ZpbGUtaW1nMSBcblx0XHRcdHtcblx0XHRcdFx0aW1nIFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0d2lkdGg6IDQ4cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiA0OHB4O1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XG5cdFx0XHRcdFx0cGFkZGluZzogNHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNwYW4gXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdH1cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0LmxvZ28tbW4tc2VjXG4gICAgICAgICAgICB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLmxvZ28tcmF0aW5nXG4gICAgICAgICAgICAgICAge1xuXHRcdFx0XHRcdFtuYW1lLWxvZ29dIFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucmF0aW5nLWljb25cblx0XHRcdFx0XHR7IFxuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxcHg7XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aSBcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblx0XHRcdFx0XHRcdH1cdFxuXHRcdFx0XHRcdFx0c3BhbiBcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDRweDtcblx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxuXHRcdFx0XHR9XHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdC5oZWFkZXItY2FsbC1hY3Rpb24gXG5cdFx0XHR7XG5cdFx0XHRcdC5tZW51LXJpZ2h0LXVsIFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGkgXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0YSBcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwcHggM3B4O1xuXHRcdFx0XHRcdFx0fVx0XHRcdFxuXHRcdFx0XHRcdH1cdFx0XHRcblx0XHRcdFx0fVx0XHRcdFxuXHRcdFx0fVx0XHRcdFxuXHRcdH1cblx0XHQuc2hvcC1wcm9kdWN0LXdyYXAgXG5cdFx0e1xuXHRcdFx0LnByb2R1Y3QtaXRlbVxuXHRcdFx0eyBcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y5ZjlmOTtcblx0XHRcdFx0cGFkZGluZzogMTJweCAxMHB4O1x0XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcdFx0XHRcdFxuXHRcdFx0XHQucHJvZHVjdC10aHVtYlxuXHRcdFx0XHR7IFxuXHRcdFx0XHRcdGltZyBcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRtYXgtaGVpZ2h0OiAxMjBweDtcblx0XHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDEyMHB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEyMHB4O1xuXHRcdFx0XHRcdFx0bWluLXdpZHRoOiAxMjBweDtcblx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRcdH1cdFxuXHRcdFx0XHRcdC5hY3Rpb24tbGlua3MgXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDVweDtcblx0XHRcdFx0XHRcdHRvcDogNXB4O1xuXHRcdFx0XHRcdFx0YSBcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDI4cHg7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAyOHB4O1xuXHRcdFx0XHRcdFx0XHRpIFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDI4cHg7XG5cdFx0XHRcdFx0XHRcdH1cdFxuXHRcdFx0XHRcdFx0fVx0XG5cdFx0XHRcdFx0fVx0XG5cdFx0XHRcdFx0LmJveC1sYWJlbFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC5sYWJlbC1wcm9kdWN0IFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0b3A6IDVweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjBweDtcblx0XHRcdFx0XHRcdFx0bWluLXdpZHRoOiAzMHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDhweDtcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVx0XG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcblx0XHRcdFx0fVx0XHRcdFxuXHRcdFx0XHQucHJvZHVjdC1jYXB0aW9uXG5cdFx0XHRcdHsgXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA0cHggMHB4IDEwcHg7XHRcdFx0XHRcblx0XHRcdFx0XHQubWFudWZhY3R1cmUtcHJvZHVjdCBcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRwIFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMThweDtcblx0XHRcdFx0XHRcdFx0YSBcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjOTc5Nzk3O1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTdweDtcblx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVx0XHRcdFxuXHRcdFx0XHRcdC5wcm9kdWN0LW5hbWUgXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aDQgXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE5cHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDNweCAwO1x0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cdFx0XHRcblx0XHRcdFx0XHQucmF0aW5ncyBcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICAgIHBhZGRpbmc6IDJweCAwO1xuXHRcdFx0XHRcdFx0c3BhbiBcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDFweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM3YzdjN2M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi55ZWxsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG5cdFx0XHRcdFx0XHRcdCAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG5cdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cdFx0XHRcblx0XHRcdFx0XHQucHJpY2UtYm94IFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC5yZWd1bGFyLXByaWNlIFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzdjN2M3Yztcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuYnRuLWNhcnQgXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDE4cHg7XG5cdFx0XHRcdFx0XHRib3R0b206IDJweDtcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxuXHRcdFx0XHR9XHRcdFxuXHRcdFx0fVx0XHRcblx0XHR9XHRcblx0XHQuc2hvcC1zaWRlYmFyLWlubmVyXG5cdFx0e1xuXHRcdFx0Ji5zaG9wc2lkZWJhclxuXHRcdFx0e1xuXHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdHRvcDogNTZweDtcblx0XHRcdFx0bGVmdDogMHB4O1xuXHRcdFx0XHRyaWdodDogMHB4O1x0XHRcdFx0XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRcdHotaW5kZXg6IDk5OTtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDBweDtcblx0XHRcdCAgICBwYWRkaW5nOiAxNXB4IDE1cHggMzBweDtcdFxuXHRcdFx0XHQuc2luZ2xlLXNpZGViYXIgXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0d2lkdGg6IDQ3JTtcblx0XHRcdFx0XHRtYXJnaW46IDBweCA0cHg7XG5cdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHQuZHJvcGRvd25cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ZGlzcGxheTpibG9jaztcblx0XHRcdFx0XHRcdC5kcm9wZG93bi10b2dnbGUgXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDQycHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5hcHBseWJ0biBcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDQycHg7XG5cdFx0XHRcdFx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0fVx0XHRcdFxuXHRcdFx0XHR9XHRcdFxuXHRcdFx0fVxuXHRcdH1cblx0XHRbZmlsZXJtb2Itbm9uZV1cblx0XHR7XG5cdFx0ICAgIGRpc3BsYXk6bm9uZTtcblx0XHR9XG5cdH1cbn1cbi5jb250LXN0ciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdGJ1dHRvbi5idG4ge1xuXHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdG1pbi13aWR0aDogNzBweDtcblx0fVxuXHQuZHJvcGRvd24tbWVudSBsaSB7XG5cdFx0cGFkZGluZzogN3B4IDEwcHg7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdG1pbi13aWR0aDogMTIwcHg7XG5cdH1cbn0gXG4ucHJvZHVjdC1jYXB0aW9uIC5idG4tY2FydHtcblx0cmlnaHQ6MDtcblx0bGVmdDowO1xuXHRtYXJnaW46YXV0bztcbn1cbi5hY3Rpb24tbGlua3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTZweDtcbiAgICB0b3A6IC01cHg7XG59XG5bcmF0ZWl0LXNtYWxsXXtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59IiwiaW9uLWhlYWRlcjo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tbWVudS1idXR0b24ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xuICB0b3A6IGluaGVyaXQ7XG4gIHJpZ2h0OiBpbmhlcml0O1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAuMXM7IH1cbiAgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tbWVudS1idXR0b24gaW1nIHtcbiAgICBtYXgtd2lkdGg6IDIwcHg7IH1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwOyB9XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMge1xuICBmb250LXNpemU6IDIycHg7IH1cbiAgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9uc1ttYXItMTBdIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cblxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlIFtuZXctdXNlcnMtbW5dIHtcbiAgb3V0bGluZTogMHB4OyB9XG5cbmlvbi1jb250ZW50IFtob21lLWNhdGUtc2VjXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNDBweCAwcHggMTBweDsgfVxuICBpb24tY29udGVudCBbaG9tZS1jYXRlLXNlY10gYnV0dG9uLmJ0bk5leHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTE1cHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB6LWluZGV4OiAxMTsgfVxuICBpb24tY29udGVudCBbaG9tZS1jYXRlLXNlY10gYnV0dG9uLmJ0blByZXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMTVweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHotaW5kZXg6IDExOyB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBpb24tY29udGVudCBbZmlsZXJ3ZWItbm9uZV0ge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgaW9uLWNvbnRlbnQgLmxvZ28tcmF0aW5nLXNlYyB7XG4gICAgZGlzcGxheTogbm9uZTsgfSB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBpb24tY29udGVudCAucHJvZHVjdGRpc3BsYXllZCBpb24tc2VsZWN0IHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgLS1wYWRkaW5nLWVuZDogN3B4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogNXB4OyB9XG4gIGlvbi1jb250ZW50IC5sb2dvLXJhdGluZy1zZWMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDIwcHggNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9oZWFkZXItYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjsgfVxuICAgIGlvbi1jb250ZW50IC5sb2dvLXJhdGluZy1zZWMgLnZlbmRvci1wcm9maWxlLWltZzEgaW1nIHtcbiAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgcGFkZGluZzogNHB4OyB9XG4gICAgaW9uLWNvbnRlbnQgLmxvZ28tcmF0aW5nLXNlYyAudmVuZG9yLXByb2ZpbGUtaW1nMSBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDsgfVxuICAgIGlvbi1jb250ZW50IC5sb2dvLXJhdGluZy1zZWMgLmxvZ28tbW4tc2VjIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgICBpb24tY29udGVudCAubG9nby1yYXRpbmctc2VjIC5sb2dvLW1uLXNlYyAubG9nby1yYXRpbmcgW25hbWUtbG9nb10ge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgICBpb24tY29udGVudCAubG9nby1yYXRpbmctc2VjIC5sb2dvLW1uLXNlYyAubG9nby1yYXRpbmcgLnJhdGluZy1pY29uIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMXB4OyB9XG4gICAgICAgIGlvbi1jb250ZW50IC5sb2dvLXJhdGluZy1zZWMgLmxvZ28tbW4tc2VjIC5sb2dvLXJhdGluZyAucmF0aW5nLWljb24gaSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgfVxuICAgICAgICBpb24tY29udGVudCAubG9nby1yYXRpbmctc2VjIC5sb2dvLW1uLXNlYyAubG9nby1yYXRpbmcgLnJhdGluZy1pY29uIHNwYW4ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7IH1cbiAgICBpb24tY29udGVudCAubG9nby1yYXRpbmctc2VjIC5oZWFkZXItY2FsbC1hY3Rpb24gLm1lbnUtcmlnaHQtdWwgbGkgYSB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBwYWRkaW5nOiAwcHggM3B4OyB9XG4gIGlvbi1jb250ZW50IC5zaG9wLXByb2R1Y3Qtd3JhcCAucHJvZHVjdC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBwYWRkaW5nOiAxMnB4IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuICAgIGlvbi1jb250ZW50IC5zaG9wLXByb2R1Y3Qtd3JhcCAucHJvZHVjdC1pdGVtIC5wcm9kdWN0LXRodW1iIGltZyB7XG4gICAgICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XG4gICAgaW9uLWNvbnRlbnQgLnNob3AtcHJvZHVjdC13cmFwIC5wcm9kdWN0LWl0ZW0gLnByb2R1Y3QtdGh1bWIgLmFjdGlvbi1saW5rcyB7XG4gICAgICByaWdodDogNXB4O1xuICAgICAgdG9wOiA1cHg7IH1cbiAgICAgIGlvbi1jb250ZW50IC5zaG9wLXByb2R1Y3Qtd3JhcCAucHJvZHVjdC1pdGVtIC5wcm9kdWN0LXRodW1iIC5hY3Rpb24tbGlua3MgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICB3aWR0aDogMjhweDsgfVxuICAgICAgICBpb24tY29udGVudCAuc2hvcC1wcm9kdWN0LXdyYXAgLnByb2R1Y3QtaXRlbSAucHJvZHVjdC10aHVtYiAuYWN0aW9uLWxpbmtzIGEgaSB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7IH1cbiAgICBpb24tY29udGVudCAuc2hvcC1wcm9kdWN0LXdyYXAgLnByb2R1Y3QtaXRlbSAucHJvZHVjdC10aHVtYiAuYm94LWxhYmVsIC5sYWJlbC1wcm9kdWN0IHtcbiAgICAgIHRvcDogNXB4O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgICBwYWRkaW5nOiAwIDhweDsgfVxuICAgIGlvbi1jb250ZW50IC5zaG9wLXByb2R1Y3Qtd3JhcCAucHJvZHVjdC1pdGVtIC5wcm9kdWN0LWNhcHRpb24ge1xuICAgICAgcGFkZGluZzogMHB4IDRweCAwcHggMTBweDsgfVxuICAgICAgaW9uLWNvbnRlbnQgLnNob3AtcHJvZHVjdC13cmFwIC5wcm9kdWN0LWl0ZW0gLnByb2R1Y3QtY2FwdGlvbiAubWFudWZhY3R1cmUtcHJvZHVjdCBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgLnNob3AtcHJvZHVjdC13cmFwIC5wcm9kdWN0LWl0ZW0gLnByb2R1Y3QtY2FwdGlvbiAubWFudWZhY3R1cmUtcHJvZHVjdCBwIGEge1xuICAgICAgICAgIGNvbG9yOiAjOTc5Nzk3O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDsgfVxuICAgICAgaW9uLWNvbnRlbnQgLnNob3AtcHJvZHVjdC13cmFwIC5wcm9kdWN0LWl0ZW0gLnByb2R1Y3QtY2FwdGlvbiAucHJvZHVjdC1uYW1lIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAgICAgcGFkZGluZzogM3B4IDA7IH1cbiAgICAgIGlvbi1jb250ZW50IC5zaG9wLXByb2R1Y3Qtd3JhcCAucHJvZHVjdC1pdGVtIC5wcm9kdWN0LWNhcHRpb24gLnJhdGluZ3Mge1xuICAgICAgICBwYWRkaW5nOiAycHggMDsgfVxuICAgICAgICBpb24tY29udGVudCAuc2hvcC1wcm9kdWN0LXdyYXAgLnByb2R1Y3QtaXRlbSAucHJvZHVjdC1jYXB0aW9uIC5yYXRpbmdzIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgICAgICAgICBjb2xvcjogIzdjN2M3YzsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IC5zaG9wLXByb2R1Y3Qtd3JhcCAucHJvZHVjdC1pdGVtIC5wcm9kdWN0LWNhcHRpb24gLnJhdGluZ3Mgc3Bhbi55ZWxsb3cge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpOyB9XG4gICAgICBpb24tY29udGVudCAuc2hvcC1wcm9kdWN0LXdyYXAgLnByb2R1Y3QtaXRlbSAucHJvZHVjdC1jYXB0aW9uIC5wcmljZS1ib3ggLnJlZ3VsYXItcHJpY2Uge1xuICAgICAgICBjb2xvcjogIzdjN2M3YztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwOyB9XG4gICAgICBpb24tY29udGVudCAuc2hvcC1wcm9kdWN0LXdyYXAgLnByb2R1Y3QtaXRlbSAucHJvZHVjdC1jYXB0aW9uIC5idG4tY2FydCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMThweDtcbiAgICAgICAgYm90dG9tOiAycHg7IH1cbiAgaW9uLWNvbnRlbnQgLnNob3Atc2lkZWJhci1pbm5lci5zaG9wc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTZweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDMwcHg7IH1cbiAgICBpb24tY29udGVudCAuc2hvcC1zaWRlYmFyLWlubmVyLnNob3BzaWRlYmFyIC5zaW5nbGUtc2lkZWJhciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogNDclO1xuICAgICAgbWFyZ2luOiAwcHggNHB4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgICAgaW9uLWNvbnRlbnQgLnNob3Atc2lkZWJhci1pbm5lci5zaG9wc2lkZWJhciAuc2luZ2xlLXNpZGViYXIgLmRyb3Bkb3duIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgLnNob3Atc2lkZWJhci1pbm5lci5zaG9wc2lkZWJhciAuc2luZ2xlLXNpZGViYXIgLmRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MnB4OyB9XG4gICAgICBpb24tY29udGVudCAuc2hvcC1zaWRlYmFyLWlubmVyLnNob3BzaWRlYmFyIC5zaW5nbGUtc2lkZWJhciAuYXBwbHlidG4ge1xuICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIG1pbi13aWR0aDogMTAwJTsgfVxuICBpb24tY29udGVudCBbZmlsZXJtb2Itbm9uZV0ge1xuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuXG4uY29udC1zdHIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XG4gIC5jb250LXN0ciBidXR0b24uYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtaW4td2lkdGg6IDcwcHg7IH1cbiAgLmNvbnQtc3RyIC5kcm9wZG93bi1tZW51IGxpIHtcbiAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWluLXdpZHRoOiAxMjBweDsgfVxuXG4ucHJvZHVjdC1jYXB0aW9uIC5idG4tY2FydCB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IGF1dG87IH1cblxuLmFjdGlvbi1saW5rcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC02cHg7XG4gIHRvcDogLTVweDsgfVxuXG5bcmF0ZWl0LXNtYWxsXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/trending/trending.page.ts":
/*!*******************************************!*\
  !*** ./src/app/trending/trending.page.ts ***!
  \*******************************************/
/*! exports provided: TrendingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingPage", function() { return TrendingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _filters_filters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filters/filters.page */ "./src/app/filters/filters.page.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var TrendingPage = /** @class */ (function () {
    // selected_subcats:any = [];
    function TrendingPage(actionSheetController, modalController, userService, toastController, loadingController, alertController, events, activatedRoute, router, _zone) {
        var _this = this;
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.userService = userService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.events = events;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._zone = _zone;
        this.hideMe = false;
        this.selectedItem = [];
        this.page_view = 'grid';
        this.searchTerm = '';
        this.buttonClickeddrop = false;
        this.errors = ['', null, undefined];
        this.selected_cats = [];
        this.filtered_cats = [];
        this.filtered_brands = [];
        this.filtered_discount = [];
        this.filtered_reviews = [];
        this.selected_cats_checked = [];
        this.sort_by = 'Relevance';
        this.sort_by_value = 'relevance';
        this.show_count = 10;
        this.current_page = 1;
        this.min_price = 0;
        this.max_price = 10000;
        this.total_products = 0;
        this.searchImage = '';
        this.slideOpts1 = {
            slidesPerView: 6,
            spaceBetween: 10,
            loop: true,
            speed: 1000,
            autoplay: true,
            breakpoints: {
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                320: {
                    slidesPerView: 3,
                    spaceBetween: 6
                }
            }
        };
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_5__["config"].IMAGES_URL;
        events.subscribe('wishlist:true', function (data) {
            _this.getCartProductsIdaa();
        });
    }
    TrendingPage.prototype.hide = function () {
        this.hideMe = !this.hideMe;
    };
    TrendingPage.prototype.getCartProductsIdaa = function () {
        var _this = this;
        //this.presentLoading();
        this.userService.postData({ user_id: this.userId }, 'getCartProductsIds').subscribe(function (result) {
            _this.my_wish_products = result.wishlist;
        }, function (err) {
        });
    };
    TrendingPage.prototype.ngOnInit = function () {
        this.price_values = { lower: this.min_price, upper: this.max_price };
    };
    TrendingPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var token = localStorage.getItem('sin_auth_token');
        this.userId = this.userService.decryptData(token, _config__WEBPACK_IMPORTED_MODULE_5__["config"].ENC_SALT);
        this.selected_cats = [];
        // this.selected_subcats = [];
        this.selectedItem = [];
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (_this.errors.indexOf(params['cat']) == -1) {
                _this.selectedItem.push('item' + params['cat']);
                _this.selected_cats_checked.push(Number(params['subcat']));
                _this.filtered_cats = [];
                _this.filtered_cats.push(Number(params['cat']));
                var subcat_arr = [];
                if (_this.errors.indexOf(params['subcat']) == -1) {
                    subcat_arr.push(Number(params['subcat']));
                }
                _this.selected_cats = [];
                _this.selected_cats.push({ cat_id: Number(params['cat']), sub_cat_id: subcat_arr });
            }
            if (_this.errors.indexOf(params['search']) == -1) {
                _this.searchTerm = params['search'];
            }
            if (_this.errors.indexOf(params['searchImage']) == -1) {
                _this.searchImage = JSON.parse(params['searchImage']);
                _this.selected_cats = [];
                for (var i = 0; i < _this.searchImage.length; i++) {
                    _this.selected_cats.push({ cat_id: Number(_this.searchImage[i].cat_parent), sub_cat_id: [_this.searchImage[i].cat_id] });
                }
                _this.searchTerm = '';
            }
            if (_this.errors.indexOf(params['searchText']) == -1) {
                _this.searchImage = JSON.parse(params['searchText']);
                _this.selected_cats = [];
                for (var i = 0; i < _this.searchImage.length; i++) {
                    if (_this.searchImage[i][0].product_cat.split(',').length > 1) {
                        for (var k = 0; k < _this.searchImage[i][0].product_cat.split(',').length; k++) {
                            _this.selected_cats.push({ cat_id: _this.searchImage[i][0].product_cat.split(',')[k], sub_cat_id: [_this.searchImage[i][0].product_sub_cat] });
                        }
                    }
                    else {
                        _this.selected_cats.push({ cat_id: _this.searchImage[i][0].product_cat, sub_cat_id: [_this.searchImage[i][0].product_sub_cat] });
                    }
                }
            }
            _this.getCartProductsIds();
            _this.getCategories();
            _this.getAllBrands();
        });
    };
    TrendingPage.prototype.getProducts = function (params) {
        var _this = this;
        if (params === void 0) { params = null; }
        this.presentLoading();
        if (params == null) {
            // params = {user_id:this.userId,cats:this.selected_cats,search:this.searchTerm,sort_by:this.sort_by_value,per_page:this.show_count,page:this.current_page,brands:this.filtered_brands,discounts:this.filtered_discount,reviews:this.filtered_reviews,min_price:this.min_price,max_price:this.max_price}
            params = { limit: '10' };
        }
        this.userService.postData(params, 'bestSellerProducts').subscribe(function (result) {
            _this.stopLoading();
            _this.products = result.products.reverse();
            _this.total_products = result.products.length;
            var records = Math.ceil(result.products.length / _this.show_count);
            if (isNaN(records)) {
                _this.total_pages = 1;
            }
            else {
                _this.total_pages = records;
            }
        }, function (err) {
            _this.stopLoading();
            _this.products = [];
        });
    };
    TrendingPage.prototype.scroll = function (position) {
        var self = this;
        this._zone.run(function () {
            setTimeout(function () {
                self.content.scrollToPoint(0, position, 2000);
            });
        });
    };
    TrendingPage.prototype.getCartProductsIds = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId }, 'getCartProductsIds').subscribe(function (result) {
            _this.my_cart_products = result.products;
            _this.my_wish_products = result.wishlist;
            _this.getProducts();
        }, function (err) {
            _this.my_cart_products = [];
            _this.my_wish_products = [];
        });
    };
    TrendingPage.prototype.getCategories = function () {
        var _this = this;
        this.userService.getData('getCategories').subscribe(function (result) {
            _this.all_categories = result.categories;
        }, function (err) {
            _this.all_categories = [];
        });
    };
    TrendingPage.prototype.getAllBrands = function () {
        var _this = this;
        this.userService.postData({}, 'brand_list').subscribe(function (result) {
            _this.all_brands = result.brand_list;
        }, function (err) {
            _this.all_brands = [];
        });
    };
    TrendingPage.prototype.addToCart = function (product_id, product_sale_price, product_purchase_price) {
        var _this = this;
        if (this.userId == 0) {
            this.router.navigate(['/login']);
        }
        else {
            this.presentLoading();
            this.userService.postData({ product_id: product_id, user_id: this.userId, product_qty: 1, is_variation: false, product_price: 0, product_variations: [] }, 'addTocart').subscribe(function (result) {
                _this.stopLoading();
                if (result.status == 1) {
                    _this.my_cart_products.push(product_id);
                    _this.presentToast('Product added to cart.', 'success');
                    var p_price;
                    if (_this.errors.indexOf(product_sale_price) == -1 && product_sale_price != product_purchase_price) {
                        p_price = product_sale_price;
                    }
                    else {
                        p_price = product_purchase_price;
                    }
                    _this.events.publish('cart_updated:true', { items_in_cart: _this.my_cart_products.length, cart_price: p_price, isAdd: true });
                }
                else {
                    _this.presentToast('Error,Please try after some time.', 'danger');
                }
            }, function (err) {
                _this.stopLoading();
                _this.presentToast('Error,Please try after some time.', 'danger');
            });
        }
    };
    TrendingPage.prototype.addToWish = function (product_id) {
        if (this.userId == 0) {
            this.router.navigate(['/login']);
        }
        else {
            this.presentAlert(product_id);
        }
    };
    TrendingPage.prototype.presentAlert = function (product_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                localStorage.setItem('product', product_id);
                // const modal = await this.modalController.create({
                //   component: WishlistListingPage,
                //   componentProps: { value: product_id }
                // });
                // return await modal.present();
                this.userService.postData({ product_id: localStorage.getItem('product'), user_id: this.userId, wish_title: null, is_new: 0, wishlist_id: null }, 'addWishlistNew').subscribe(function (result) {
                    _this.stopLoading();
                    if (result.status == 1) {
                        // this.my_wish_products.push(product_id);
                        _this.presentToast('Product added to wishlist.', 'success');
                        _this.events.publish('wishlist:true', {});
                        //this.modalCtrl.dismiss();
                    }
                    else {
                        _this.presentToast('Error,Please try after some time.', 'danger');
                    }
                }, function (err) {
                    _this.stopLoading();
                    _this.presentToast('Error,Please try after some time.', 'danger');
                });
                return [2 /*return*/];
            });
        });
    };
    TrendingPage.prototype.callFilter = function () {
        this.getProducts();
    };
    TrendingPage.prototype.resetFilter = function () {
        this.router.navigate(['/products'], { queryParams: { time: new Date().getTime() } });
        location.reload();
        // this.selected_cats = [];
        // this.searchTerm = [];
        // this.sort_by_value = 'relevance';
        // this.show_count = 10;
        // this.current_page = 1;
        // this.filtered_brands = [];
        // this.filtered_discount = [];
        // this.filtered_reviews = [];
        // this.min_price = 0;
        // this.max_price = 10000;
        // this.getProducts();
    };
    TrendingPage.prototype.sortBy = function (value, text) {
        this.sort_by_value = value;
        this.sort_by = text;
        this.getProducts();
    };
    TrendingPage.prototype.show_count_change = function (value) {
        this.show_count = value;
        this.getProducts();
    };
    TrendingPage.prototype.paginate = function (page) {
        if (page == 'next') {
            if (this.total_pages != this.current_page) {
                this.current_page = Number(this.current_page) + 1;
                this.scroll(0);
                this.getProducts();
            }
        }
        else if (page == 'prev') {
            if (this.current_page != 1) {
                this.current_page = Number(this.current_page) - 1;
                this.scroll(0);
                this.getProducts();
            }
        }
        else {
            if (this.current_page != page) {
                this.current_page = page;
                this.scroll(0);
                this.getProducts();
            }
        }
    };
    TrendingPage.prototype.priceChanged = function (values) {
        this.min_price = values.detail.value.lower;
        this.max_price = values.detail.value.upper;
    };
    TrendingPage.prototype.arrayOne = function (n) {
        return Array(n);
    };
    TrendingPage.prototype.atob = function (string) {
        return atob(string);
    };
    TrendingPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Sort By',
                            buttons: [
                                {
                                    text: 'Relevance',
                                    handler: function () {
                                        _this.sortBy('relevance', 'Relevance');
                                    }
                                },
                                {
                                    text: 'Price - Low to High',
                                    handler: function () {
                                        _this.sortBy('price_low_to_high', 'Price - High to Low');
                                    }
                                },
                                {
                                    text: 'Price - High to Low',
                                    handler: function () {
                                        _this.sortBy('price_high_to_low', 'Price - High to Low');
                                    }
                                },
                                {
                                    text: 'Discount - Low to High',
                                    handler: function () {
                                        _this.sortBy('discount_low_to_high', 'Discount - Low to High');
                                    }
                                },
                                {
                                    text: 'Discount - High to Low',
                                    handler: function () {
                                        _this.sortBy('discount_high_to_low', 'Discount - High to Low');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrendingPage.prototype.onButtonClickdrop = function () {
        this.buttonClickeddrop = !this.buttonClickeddrop;
    };
    TrendingPage.prototype.openClose = function (item) {
        if (this.selectedItem.indexOf(item) == -1) {
            this.selectedItem.push(item);
        }
        else {
            this.selectedItem.splice(this.selectedItem.indexOf(item), 1);
        }
    };
    TrendingPage.prototype.brandChecked = function (event, brand_id) {
        if (event.detail.checked == true) {
            this.filtered_brands.push(brand_id);
        }
        else {
            this.filtered_brands.splice(this.filtered_brands.indexOf(brand_id), 1);
        }
        console.log(this.filtered_brands);
    };
    TrendingPage.prototype.discountChecked = function (event, discount) {
        if (this.filtered_discount.length == 0) {
            this.filtered_discount.push(Number(discount));
        }
        else {
            //this.filtered_discount.splice(this.filtered_discount.indexOf(discount),1);
            this.filtered_discount[0] = Number(discount);
        }
        console.log(this.filtered_discount);
    };
    TrendingPage.prototype.reviewChecked = function (event, review) {
        if (this.filtered_reviews.length == 0) {
            this.filtered_reviews.push(Number(review));
        }
        else {
            //this.filtered_reviews.splice(this.filtered_reviews.indexOf(review),1);
            this.filtered_reviews[0] = Number(review);
        }
        console.log(this.filtered_reviews);
    };
    TrendingPage.prototype.catChecked = function (event, cat, subcat) {
        if (event.detail.checked == true) {
            if (this.filtered_cats.indexOf(cat) == -1) {
                this.filtered_cats.push(cat);
                var subcat_arr = [];
                subcat_arr.push(subcat);
                this.selected_cats.push({ cat_id: cat, sub_cat_id: subcat_arr });
            }
            else {
                var index = this.filtered_cats.indexOf(cat);
                this.selected_cats[index]['sub_cat_id'].push(subcat);
            }
        }
        else {
            var c_index = this.filtered_cats.indexOf(cat);
            if (this.selected_cats[c_index]['sub_cat_id'].length == 1) {
                this.filtered_cats.splice(c_index, 1);
                this.selected_cats.splice(c_index, 1);
            }
            else {
                var sub_index = this.selected_cats[c_index]['sub_cat_id'].indexOf(subcat);
                this.selected_cats[c_index]['sub_cat_id'].splice(sub_index, 1);
            }
            if (this.selected_cats_checked.indexOf(subcat) >= 0) {
                this.selected_cats_checked = [];
            }
        }
        console.log(this.filtered_cats);
        console.log(this.selected_cats);
        // this.getProducts();
    };
    // subcatChecked(event,value){
    //   if(event.detail.checked == true){
    //     this.selected_subcats.push(value);
    //   }
    //   else{
    //     this.removeArray(this.selected_subcats, value);
    //   }
    //   console.log(this.selected_subcats)
    // }
    TrendingPage.prototype.removeArray = function (arr, what) {
        var a = arguments, L = a.length, ax;
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax = arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
            }
        }
        return arr;
    };
    TrendingPage.prototype.presentModal1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _filters_filters_page__WEBPACK_IMPORTED_MODULE_3__["FiltersPage"],
                            componentProps: {
                                all_categories: this.all_categories,
                                all_brands: this.all_brands,
                                userId: this.userId,
                                searchTerm: this.searchTerm,
                                sort_by_value: this.sort_by_value,
                                show_count: this.show_count,
                                current_page: this.current_page,
                                filtered_brands: this.filtered_brands,
                                filtered_discount: this.filtered_discount,
                                filtered_reviews: this.filtered_reviews,
                                min_price: this.min_price,
                                max_price: this.max_price,
                                selected_cats: this.selected_cats,
                                filtered_cats: this.filtered_cats,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (_this.errors.indexOf(detail.data) == -1) {
                                _this.min_price = detail.data.min_price;
                                _this.max_price = detail.data.max_price;
                                _this.selected_cats = detail.data.cats;
                                _this.filtered_cats = detail.data.filtered_cats;
                                _this.filtered_brands = detail.data.brands;
                                _this.filtered_brands = detail.data.brands;
                                _this.filtered_discount = detail.data.discounts;
                                _this.filtered_reviews = detail.data.reviews;
                                _this.getProducts(detail.data);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrendingPage.prototype.presentToast = function (message, color) {
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
    TrendingPage.prototype.presentLoading = function () {
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
    TrendingPage.prototype.stopLoading = function () {
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
    TrendingPage.prototype.next = function () {
        this.slides.slideNext();
    };
    TrendingPage.prototype.prev = function () {
        this.slides.slidePrev();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], TrendingPage.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TrendingPage.prototype, "content", void 0);
    TrendingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trending',
            template: __webpack_require__(/*! ./trending.page.html */ "./src/app/trending/trending.page.html"),
            styles: [__webpack_require__(/*! ./trending.page.scss */ "./src/app/trending/trending.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], TrendingPage);
    return TrendingPage;
}());



/***/ })

}]);
//# sourceMappingURL=trending-trending-module.js.map