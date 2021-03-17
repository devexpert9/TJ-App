(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/products/products.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-stars */ "./node_modules/ngx-stars/fesm5/ngx-stars.js");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");










var routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
    }
];
var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]],
            entryComponents: [],
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());



/***/ }),

/***/ "./src/app/products/products.page.html":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"darkred\" text-uppercase>\n\n  <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"shop-category\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n        Products\n    </ion-title>\n\n<ion-buttons slot=\"end\" > \n\t<ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\t\n\t </ion-buttons>\n  </ion-toolbar>\n      <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n\t              <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n\t              <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n\t              <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n\t              <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t   </div>\n</ion-header>  -->\n<ion-header class=\"ion-hide-md-up\">\n  <ion-toolbar color=\"secondary\">\n        <ion-menu-button slot=\"start\">\n\t\t    <img height=\"15px\" src=\"assets/img/menu.png\"/>\n\t\t</ion-menu-button>\n    <ion-title class=\"ion-text-center\">Shop</ion-title>\n\t<ion-buttons slot=\"end\" mar-10 (click)=\"hide()\"><ion-icon name=\"options-outline\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content #content> \n<app-header></app-header>\n<div class=\"ion-padding\">\n<!-- <div header-inner class=\"ion-hide-lg-up\">\n<ion-row>\n\n<ion-col size=\"12\">\n<ion-searchbar></ion-searchbar>\n</ion-col>\n</ion-row>\n<div delivery-location (click)=\"presentModal()\">\n<ion-icon name=\"pin\"></ion-icon> Deliver To Chandigarh 160022 <ion-icon name=\"arrow-down\"></ion-icon>\n</div>\n</div> -->\n<!-- Breadcrumb Start -->\n<!-- Breadcrumb Ends -->\n<!--- Product Main section Start -->\n<div class=\"logo-rating-sec\">\t\n   <ion-row>\n\t  <ion-col size=\"6\" class=\"ion-align-self-center\">\n\t\t <div class=\"logo-mn-sec\">\n\t\t\t<div class=\"vendor-profile-img1\">\n\t\t\t  <img src=\"assets/img/vendorlogo.png\" alt=\"\">\n\t\t\t</div>\n\t\t\t<div class=\"logo-rating\">\n\t\t\t\t<span name-logo>Yabli.Store</span>\n\t\t\t   <div class=\"rating-icon\">\n\t\t\t\t  <i class=\"fa fa-star\"></i>\n\t\t\t\t  <i class=\"fa fa-star\"></i>\n\t\t\t\t  <i class=\"fa fa-star\"></i>\n\t\t\t\t  <i class=\"fa fa-star-half-o\"></i>\n\t\t\t\t  <i class=\"fa fa-star-o\"></i>\n\t\t\t\t<span>3.5</span>\n\t\t\t   </div>\n\t\t\t</div>\n\t\t </div>\n\t  </ion-col>\n\t  <ion-col size=\"6\" class=\"ion-text-right ion-align-self-center\">\n\t\t\t\t<div class=\"header-call-action menu-right\">\n\t\t\t\t\t<ul class=\"menu-right-ul\">\n\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t<li class=\"menu-right-li-share\">\n\t\t\t\t\t\t\t<ion-select [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Flag\">\n\t\t\t\t\t\t\t\t<ion-select-option value=\"Flag-1\">Flag-1</ion-select-option>\n\t\t\t\t\t\t\t\t<ion-select-option value=\"Flag-2\">Flag-2</ion-select-option>\n\t\t\t\t\t\t\t\t<ion-select-option value=\"Flag-3\">Flag-3</ion-select-option>\n\t\t\t\t\t\t\t\t<ion-select-option value=\"Flag-4\">Flag-4</ion-select-option>\n\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t  </li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t  </ion-col>\n   </ion-row>\n</div>\t\n<div class=\"main-wrapper pt-35\">\t\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div filerweb-none class=\"col-lg-12\" *ngIf=\"hideMe\">\n                    <div class=\"shop-sidebar-inner shopsidebar mb-3\">\n                        <div class=\"d-flex\">\n\t\t\t\t\t\t\t<div class=\"single-sidebar\">\n\t\t\t\t\t\t\t   <div class=\"dropdown\">\n\t\t\t\t\t\t\t\t    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Categories\n\t\t\t\t\t\t\t\t    <span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t    <ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t    <li  *ngFor=\"let cat of all_categories; let cat_index = index \">\n\t\t\t\t\t\t\t\t\t\t\t<ion-list *ngFor=\"let subcat of cat.subcats\" class=\"padd-ics\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-item p-lr-0 border-none lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>{{subcat.subcat_name}}</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-checkbox slot=\"start\" [checked]=\"filtered_cats.indexOf(cat.cat_id) >= 0 && selected_cats_checked.indexOf(subcat.subcat_id) >= 0\" (ionChange)=\"catChecked($event,cat.cat_id,subcat.subcat_id)\" ></ion-checkbox>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-item> \n\t\t\t\t\t\t\t\t\t\t\t</ion-list>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t    </ul>\n\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"single-sidebar\">\n\t\t\t\t\t\t\t    <div class=\"dropdown\">\n\t\t\t\t\t\t\t\t    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Fillter By Price\n\t\t\t\t\t\t\t\t    <span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t    <ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t    <li>\n\t\t\t\t\t\t\t\t\t  \t    <div class=\"sidebar-content-box\">\n\t\t\t\t\t\t\t\t\t  \t        <div class=\"filter-price-content shop-range\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-item id=\"price-slider\" lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-range [(ngModel)]=\"price_values\" (ionChange)=\"priceChanged($event)\"  dualKnobs=\"true\"  min=\"0\" max=\"10000\" step=\"20\" snaps=\"true\" ticks=\"true\" color=\"darkred\"></ion-range>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\t\t\n                                                    <div class=\"filter-price-cont\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t${{min_price}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t${{max_price}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                                    </div>\t\t\n\t\t\t\t\t\t\t\t\t  \t        </div>\n\t\t\t\t\t\t\t\t\t  \t    </div>\n\t\t\t\t\t\t\t\t\t    </li>\n\t\t\t\t\t\t\t\t    </ul>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"single-sidebar\">\n\t\t\t\t\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Sort\n\t\t\t\t\t\t\t\t\t<span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu hsr\">\n\t\t\t\t\t\t\t\t\t\t  <li (click)=\"sortBy('relevance','Relevance')\"><a>Relevance</a></li>\n\t\t\t\t\t\t\t\t\t\t  <li (click)=\"sortBy('price_low_to_high','Price - Low to High')\"><a>Price - Low to High</a></li>\n\t\t\t\t\t\t\t\t\t\t  <li (click)=\"sortBy('price_high_to_low','Price - High to Low')\"><a>Price - High to Low</a></li>\n\t\t\t\t\t\t\t\t\t\t  <li (click)=\"sortBy('discount_low_to_high','Discount - Low to High')\"><a>Discount - Low to High</a></li>\n\t\t\t\t\t\t\t\t\t\t  <li (click)=\"sortBy('discount_high_to_low','Discount - High to Low')\"><a>Discount - High to Low</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"single-sidebar mdys\">\n\t\t\t\t\t\t\t\t<button class=\"applybtn\" (click)=\"callFilter()\">\n\t\t\t\t\t\t\t\tApply \n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button class=\"applybtn reset-flts\" (click)=\"resetFilter()\">\n\t\t\t\t\t\t\t\tReset \n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n                        </div>\n                    </div>\n                </div>\t\t\t\n                <div class=\"col-lg-12\" filermob-none>\n                    <div class=\"section-title mt-0\">\n                        <h3><span> Filter </span> Products</h3>\n                    </div>\n                    <div class=\"shop-sidebar-inner shopsidebar sticker mb-3\">\n                        <div class=\"d-flex\">\n\t\t\t\t\t\t\t<div class=\"single-sidebar\">\n\t\t\t\t\t\t\t   <div class=\"dropdown\">\n\t\t\t\t\t\t\t\t    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Categories\n\t\t\t\t\t\t\t\t    <span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t    <ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t    <li  *ngFor=\"let cat of all_categories; let cat_index = index \">\n\t\t\t\t\t\t\t\t\t\t\t<ion-list *ngFor=\"let subcat of cat.subcats\" class=\"padd-ics\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-item p-lr-0 border-none lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>{{subcat.subcat_name}}</ion-label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-checkbox slot=\"start\" [checked]=\"filtered_cats.indexOf(cat.cat_id) >= 0 && selected_cats_checked.indexOf(subcat.subcat_id) >= 0\" (ionChange)=\"catChecked($event,cat.cat_id,subcat.subcat_id)\" ></ion-checkbox>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-item> \n\t\t\t\t\t\t\t\t\t\t\t</ion-list>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t    </ul>\n\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"single-sidebar\">\n\t\t\t\t\t\t\t    <div class=\"dropdown\">\n\t\t\t\t\t\t\t\t    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Fillter By Price\n\t\t\t\t\t\t\t\t    <span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t    <ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t    <li>\n\t\t\t\t\t\t\t\t\t  \t    <div class=\"sidebar-content-box\">\n\t\t\t\t\t\t\t\t\t  \t        <div class=\"filter-price-content shop-range\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-item id=\"price-slider\" lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-range [(ngModel)]=\"price_values\" (ionChange)=\"priceChanged($event)\"  dualKnobs=\"true\"  min=\"0\" max=\"10000\" step=\"20\" snaps=\"true\" ticks=\"true\" color=\"darkred\"></ion-range>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\t\t\n                                                    <div class=\"filter-price-cont\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t${{min_price}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t${{max_price}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                                    </div>\t\t\n\t\t\t\t\t\t\t\t\t  \t        </div>\n\t\t\t\t\t\t\t\t\t  \t    </div>\n\t\t\t\t\t\t\t\t\t    </li>\n\t\t\t\t\t\t\t\t    </ul>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"single-sidebar\">\n\t\t\t\t\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Sort\n\t\t\t\t\t\t\t\t\t<span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu hsr\">\n\t\t\t\t\t\t\t\t\t\t  <li (click)=\"sortBy('relevance','Relevance')\"><a>Relevance</a></li>\n\t\t\t\t\t\t\t\t\t\t  <li (click)=\"sortBy('price_low_to_high','Price - Low to High')\"><a>Price - Low to High</a></li>\n\t\t\t\t\t\t\t\t\t\t  <li (click)=\"sortBy('price_high_to_low','Price - High to Low')\"><a>Price - High to Low</a></li>\n\t\t\t\t\t\t\t\t\t\t  <li (click)=\"sortBy('discount_low_to_high','Discount - Low to High')\"><a>Discount - Low to High</a></li>\n\t\t\t\t\t\t\t\t\t\t  <li (click)=\"sortBy('discount_high_to_low','Discount - High to Low')\"><a>Discount - High to Low</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"single-sidebar mdys\">\n\t\t\t\t\t\t\t\t<button class=\"applybtn\" (click)=\"callFilter()\">\n\t\t\t\t\t\t\t\tApply \n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button class=\"applybtn reset-flts\" (click)=\"resetFilter()\">\n\t\t\t\t\t\t\t\tReset \n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 text-right productdisplayed mb-3\">\n\t\t\t\t\t<span filter (click)=\"presentModal1()\" class=\"ion-hide-lg-up\"><ion-icon name=\"funnel\" class=\"ion-hide-lg-up\"></ion-icon> Filter</span>\n\t\t\t\t\t<div lbl-cnt class=\"ion-hide-md-down cont-str\">\n\t\t\t\t\t <span lbl>No of Products Displayed</span>\n\t\t\t\t\t\t<div fld>\n\t\t\t\t\t\t  <div class=\"dropdown\">\n\t\t\t\t\t\t\t\t<button data-toggle=\"dropdown\" type=\"button\" class=\"btn dropdown-toggle\"> {{show_count}}<span class=\"caret\"></span> </button>\n\t\t\t\t\t\t\t\t<ul role=\"menu\" class=\"dropdown-menu pull-right\">\n\t\t\t\t\t\t\t\t  <li (click)=\"show_count_change(10)\"><a>0-10</a></li>\n\t\t\t\t\t\t\t\t  <li (click)=\"show_count_change(20)\"><a>11-20</a></li>\n\t\t\t\t\t\t\t\t  <li (click)=\"show_count_change(30)\"><a>21-30</a></li>\n\t\t\t\t\t\t\t\t  <li (click)=\"show_count_change(40)\"><a>31-40</a></li>\n\t\t\t\t\t\t\t\t  <li (click)=\"show_count_change(50)\"><a>41-50</a></li>\n\t\t\t\t\t\t\t\t</ul>  \n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>                   \n\t\t\t\t\t</div>\n                </div>\n                <div class=\"col-lg-12  order-lg-last\">\n                    <div class=\"product-shop-main-wrapper mb-50\">\n                        <div class=\"shop-product-wrap grid column_3 row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-xl-3 col-md-4 col-sm-12\" *ngFor=\"let product of products \">\n\t\t\t\t\t\t\t    <div class=\"product-item mb-30\">\n\t\t\t\t\t\t\t\t\t<div class=\"product-thumb\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/product-details/{{product.product_id}}\">\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{product.product_image}}\" alt=\"{{product.product_name}}\">\t\n\t\t\t\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"product?.product_quantity == 0 || errors.indexOf(product?.product_quantity) >= 0\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-product label_sale\">\n\t\t\t\t\t\t\t\t\t\t\t\t   <span>Sold Out</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"product?.product_quantity != 0 && errors.indexOf(product?.product_quantity) == -1\">\n\t\t\t\t\t\t\t\t\t\t\t<div  class=\"box-label bg-grrns\" *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-product label_sale\">\n\t\t\t\t\t\t\t\t\t\t\t\t   <span>Sale</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-label\" *ngIf=\"errors.indexOf(product?.product_sale_price) >= 0 || product?.product_sale_price == product?.product_purchase_price\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"label-product label_sale\">\n\t\t\t\t\t\t\t\t\t\t\t\t   <span>{{product?.product_featured == '1' ? 'featured' : 'new'}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t<div class=\"action-links\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-button class=\"bnt\" [disabled]=\"product?.product_quantity == 0 || errors.indexOf(product?.product_quantity) >= 0\" *ngIf=\"my_cart_products.indexOf(product.product_id) == -1\" (click)=\"addToCart(product.product_id,product.product_sale_price,product.product_purchase_price)\" title=\"Add Cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"lnr lnr-magnifier\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-button class=\"bnt\"  *ngIf=\"my_cart_products.indexOf(product.product_id) >= 0\" add-to-cart color=\"darkred\" title=\"Added\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"checkmark\"></ion-icon> \n\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-button class=\"bnt\" *ngIf=\"my_wish_products.indexOf(product.product_id) == -1\" (click)=\"addToWish(product.product_id)\" title=\"Wishlist\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"lnr lnr-heart\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-button class=\"bnt\" *ngIf=\"my_wish_products.indexOf(product.product_id) >= 0\" title=\"Added\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <i class=\"red_heart fa fa-heart\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"product-caption\">\n\t\t\t\t\t\t\t\t\t\t<!--div class=\"manufacture-product\">\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"product?.product_user_type != 'Admin'\" vendor-name  class=\"ion-hide-md-down\">Sold by <a>{{product?.vendor_company}}</a></p>\n\t\t\t\t\t\t\t\t\t\t</div-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"manufacture-product\">\n\t\t\t\t\t\t\t\t\t\t\t<p><a href=\"javascript:void(0)\">apple</a></p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"product-name\">\n\t\t\t\t\t\t\t\t\t\t\t<h4><a routerLink=\"/product-details/{{product.product_id}}\">{{product.product_name}}</a></h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"ratings\">\n\t\t\t\t\t\t\t\t\t\t\t<div rating rateit-small>\n\t\t\t\t\t\t\t\t\t\t\t\t<ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"product?.Review_Average\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"price-box\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"regular-price\" *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price\" >\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"special-price\">${{product?.product_sale_price}} </span></span>\n\t\t\t\t\t\t\t\t\t\t\t <span class=\"regular-price\" *ngIf=\"errors.indexOf(product?.product_sale_price) >= 0 || product?.product_sale_price == product?.product_purchase_price\">${{product?.product_purchase_price}}</span>\n\t\t\t\t\t\t\t\t\t\t\t <span class=\"old-price\" *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price\" price-before-discount ><del>${{product?.product_purchase_price}}</del></span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn-cart\" [disabled]=\"product?.product_quantity == 0 || errors.indexOf(product?.product_quantity) >= 0\" *ngIf=\"my_cart_products.indexOf(product.product_id) == -1\" (click)=\"addToCart(product.product_id,product.product_sale_price,product.product_purchase_price)\" title=\"Add Cart\">\n\t\t\t\t\t\t\t\t\t\t\tAdd to cart\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\"  class=\"btn-cart\" *ngIf=\"my_cart_products.indexOf(product.product_id) >= 0\"  title=\"Added\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"checkmark\"></ion-icon> \n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</div>\n                        </div>\n\t\t\t\t\t\t <div class=\"paginatoin-area style-2 pt-35 pb-20\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t   <div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t  <div class=\"pagination-area\">\n\t\t\t\t\t\t\t\t\t <p>Showing 1 to 9 of 9 (1 Pages)</p>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\t\n</div>\t\n<!--- Product Main section Ends -->\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/products/products.page.scss":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  display: none !important; }\n\nion-header ion-toolbar ion-menu-button {\n  height: 35px;\n  position: inherit;\n  top: inherit;\n  right: inherit;\n  transition: inherit;\n  transition-delay: .1s; }\n\nion-header ion-toolbar ion-menu-button img {\n    max-width: 20px; }\n\nion-header ion-toolbar ion-title {\n  font-weight: 700; }\n\nion-header ion-toolbar ion-buttons {\n  font-size: 22px; }\n\nion-header ion-toolbar ion-buttons[mar-10] {\n    margin-right: 10px; }\n\n@media (min-width: 768px) {\n  ion-content [filerweb-none] {\n    display: none; }\n  ion-content .logo-rating-sec {\n    display: none; } }\n\n@media (max-width: 767px) {\n  ion-content .productdisplayed ion-select {\n    --padding-start: 12px;\n    --padding-end: 7px;\n    font-size: 11px;\n    --padding-bottom: 5px;\n    --padding-top: 5px; }\n  ion-content .logo-rating-sec {\n    display: block;\n    padding: 20px 5px;\n    position: relative;\n    background: url('header-bg.jpg') no-repeat center center/cover; }\n    ion-content .logo-rating-sec .vendor-profile-img1 img {\n      width: 48px;\n      height: 48px;\n      border: 1px solid #fff;\n      margin-right: 5px;\n      padding: 4px; }\n    ion-content .logo-rating-sec .vendor-profile-img1 span {\n      font-size: 14px; }\n    ion-content .logo-rating-sec .logo-mn-sec {\n      display: flex;\n      align-items: center; }\n      ion-content .logo-rating-sec .logo-mn-sec .logo-rating [name-logo] {\n        font-size: 13px;\n        color: #fff; }\n      ion-content .logo-rating-sec .logo-mn-sec .logo-rating .rating-icon {\n        color: #fff;\n        font-size: 12px;\n        margin-top: 1px; }\n        ion-content .logo-rating-sec .logo-mn-sec .logo-rating .rating-icon i {\n          color: var(--ion-color-primary); }\n        ion-content .logo-rating-sec .logo-mn-sec .logo-rating .rating-icon span {\n          margin-left: 4px; }\n    ion-content .logo-rating-sec .header-call-action .menu-right-ul li a {\n      font-size: 18px;\n      padding: 0px 3px; }\n  ion-content .shop-product-wrap .product-item {\n    display: flex;\n    align-items: center;\n    background: #f9f9f9;\n    padding: 12px 10px;\n    margin-bottom: 20px; }\n    ion-content .shop-product-wrap .product-item .product-thumb img {\n      max-height: 120px;\n      min-height: 120px;\n      width: 120px;\n      min-width: 120px;\n      -o-object-fit: cover;\n         object-fit: cover; }\n    ion-content .shop-product-wrap .product-item .product-thumb .action-links {\n      right: 5px;\n      top: 5px; }\n      ion-content .shop-product-wrap .product-item .product-thumb .action-links a {\n        font-size: 14px;\n        height: 28px;\n        width: 28px; }\n        ion-content .shop-product-wrap .product-item .product-thumb .action-links a i {\n          line-height: 28px; }\n    ion-content .shop-product-wrap .product-item .product-thumb .box-label .label-product {\n      top: 5px;\n      font-size: 10px;\n      line-height: 20px;\n      min-width: 30px;\n      padding: 0 8px; }\n    ion-content .shop-product-wrap .product-item .product-caption {\n      padding: 0px 4px 0px 10px; }\n      ion-content .shop-product-wrap .product-item .product-caption .manufacture-product p {\n        line-height: 18px; }\n        ion-content .shop-product-wrap .product-item .product-caption .manufacture-product p a {\n          color: #979797;\n          font-size: 12px;\n          line-height: 17px; }\n      ion-content .shop-product-wrap .product-item .product-caption .product-name h4 {\n        font-size: 12px;\n        font-weight: 600;\n        line-height: 19px;\n        padding: 3px 0; }\n      ion-content .shop-product-wrap .product-item .product-caption .ratings {\n        padding: 2px 0; }\n        ion-content .shop-product-wrap .product-item .product-caption .ratings span {\n          font-size: 12px;\n          margin-right: 1px;\n          color: #7c7c7c; }\n          ion-content .shop-product-wrap .product-item .product-caption .ratings span.yellow {\n            color: var(--ion-color-secondary); }\n      ion-content .shop-product-wrap .product-item .product-caption .price-box .regular-price {\n        color: #7c7c7c;\n        font-size: 13px;\n        font-weight: 600; }\n      ion-content .shop-product-wrap .product-item .product-caption .btn-cart {\n        font-size: 12px;\n        line-height: 30px;\n        padding: 0 18px;\n        bottom: 2px; }\n  ion-content .shop-sidebar-inner.shopsidebar {\n    position: fixed;\n    top: 56px;\n    left: 0px;\n    right: 0px;\n    background: #fff;\n    z-index: 999;\n    display: block;\n    border-radius: 0px;\n    padding: 15px 15px 30px; }\n    ion-content .shop-sidebar-inner.shopsidebar .single-sidebar {\n      display: inline-block;\n      width: 47%;\n      margin: 0px 4px;\n      box-sizing: border-box; }\n      ion-content .shop-sidebar-inner.shopsidebar .single-sidebar .dropdown {\n        display: block; }\n        ion-content .shop-sidebar-inner.shopsidebar .single-sidebar .dropdown .dropdown-toggle {\n          min-width: 100%;\n          font-size: 14px;\n          height: 42px; }\n      ion-content .shop-sidebar-inner.shopsidebar .single-sidebar .applybtn {\n        height: 42px;\n        min-width: 100%; }\n  ion-content [filermob-none] {\n    display: none; } }\n\n.cont-str {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end; }\n\n.cont-str button.btn {\n    margin-left: 10px;\n    min-width: 70px; }\n\n.cont-str .dropdown-menu li {\n    padding: 7px 10px;\n    font-size: 14px;\n    min-width: 120px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHQSx3QkFBc0IsRUFBQTs7QUFIdEI7RUFTRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFBOztBQWR2QjtJQWlCTSxlQUFlLEVBQUE7O0FBakJyQjtFQXNCRSxnQkFBZSxFQUFBOztBQXRCakI7RUF5QkUsZUFBYyxFQUFBOztBQXpCaEI7SUE0Qkksa0JBQWlCLEVBQUE7O0FBTXJCO0VBQ0M7SUFJVyxhQUFZLEVBQUE7RUFKdkI7SUFRSyxhQUFZLEVBQUEsRUFDZjs7QUFHSDtFQUNDO0lBTUUscUJBQWdCO0lBQ2hCLGtCQUFjO0lBQ2QsZUFBZTtJQUNmLHFCQUFpQjtJQUNqQixrQkFBYyxFQUFBO0VBVmhCO0lBZUUsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsOERBQTZFLEVBQUE7SUFsQi9FO01BdUJJLFdBQVc7TUFDWCxZQUFZO01BQ1osc0JBQXNCO01BQ3RCLGlCQUFpQjtNQUNqQixZQUFZLEVBQUE7SUEzQmhCO01BK0JJLGVBQWUsRUFBQTtJQS9CbkI7TUFvQ0csYUFBYTtNQUNiLG1CQUFtQixFQUFBO01BckN0QjtRQTBDSyxlQUFlO1FBQ2YsV0FBVyxFQUFBO01BM0NoQjtRQStDSyxXQUFXO1FBQ1gsZUFBZTtRQUNmLGVBQWUsRUFBQTtRQWpEcEI7VUFvRE0sK0JBQStCLEVBQUE7UUFwRHJDO1VBd0RNLGdCQUFnQixFQUFBO0lBeER0QjtNQXFFTSxlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7RUF0RXRCO0lBZ0ZHLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNOLG1CQUFtQixFQUFBO0lBcEZsQztNQXlGSyxpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsb0JBQWlCO1NBQWpCLGlCQUFpQixFQUFBO0lBN0Z0QjtNQWlHSyxVQUFVO01BQ1YsUUFBUSxFQUFBO01BbEdiO1FBcUdNLGVBQWU7UUFDZixZQUFZO1FBQ1osV0FBVyxFQUFBO1FBdkdqQjtVQTBHTyxpQkFBaUIsRUFBQTtJQTFHeEI7TUFrSE0sUUFBUTtNQUNSLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGNBQWMsRUFBQTtJQXRIcEI7TUE0SG1CLHlCQUF5QixFQUFBO01BNUg1QztRQWlJTSxpQkFBaUIsRUFBQTtRQWpJdkI7VUFvSU8sY0FBYztVQUNkLGVBQWU7VUFDZixpQkFBaUIsRUFBQTtNQXRJeEI7UUE4SU0sZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsY0FBYyxFQUFBO01BakpwQjtRQXNKUSxjQUFjLEVBQUE7UUF0SnRCO1VBeUpNLGVBQWU7VUFDZixpQkFBaUI7VUFDakIsY0FBYyxFQUFBO1VBM0pwQjtZQThKVSxpQ0FBaUMsRUFBQTtNQTlKM0M7UUFzS00sY0FBYztRQUNkLGVBQWU7UUFDZixnQkFBZ0IsRUFBQTtNQXhLdEI7UUE2S0ssZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsV0FBVyxFQUFBO0VBaExoQjtJQXlMRyxlQUFlO0lBQ2YsU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2YsdUJBQXVCLEVBQUE7SUFqTTdCO01Bb01JLHFCQUFxQjtNQUNyQixVQUFVO01BQ1YsZUFBZTtNQUNmLHNCQUFzQixFQUFBO01Bdk0xQjtRQTBNSSxjQUFhLEVBQUE7UUExTWpCO1VBNk1NLGVBQWU7VUFDZixlQUFlO1VBQ2YsWUFBWSxFQUFBO01BL01sQjtRQW9OSyxZQUFZO1FBQ1osZUFBZSxFQUFBO0VBck5wQjtJQTROSyxhQUFZLEVBQUEsRUFDZjs7QUFHSDtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUE7O0FBSDdCO0lBS0UsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTs7QUFOakI7SUFTRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuJjo6YWZ0ZXJcclxue1xyXG5kaXNwbGF5Om5vbmUhaW1wb3J0YW50O1xyXG59XHJcbiBpb24tdG9vbGJhclxyXG4ge1xyXG4gICAgaW9uLW1lbnUtYnV0dG9uXHJcblx0e1xyXG5cdFx0aGVpZ2h0OiAzNXB4O1xyXG5cdFx0cG9zaXRpb246IGluaGVyaXQ7XHJcblx0XHR0b3A6IGluaGVyaXQ7XHJcblx0XHRyaWdodDogaW5oZXJpdDtcclxuXHRcdHRyYW5zaXRpb246IGluaGVyaXQ7XHJcblx0XHR0cmFuc2l0aW9uLWRlbGF5OiAuMXM7XHJcbiAgICAgICAgaW1nXHJcbiAgICAgICAge1xyXG5cdFx0ICAgIG1heC13aWR0aDogMjBweDtcclxuXHRcdH1cdFx0XHJcblx0fVxyXG5cdGlvbi10aXRsZVxyXG5cdHtcclxuXHRcdGZvbnQtd2VpZ2h0OjcwMDtcclxuXHR9IFxyXG4gICAgaW9uLWJ1dHRvbnNcclxuXHR7Zm9udC1zaXplOjIycHg7XHJcblx0ICAmW21hci0xMF1cclxuXHQgIHtcclxuXHQgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuXHQgIH1cclxuXHR9XHJcbiB9XHJcblxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cdGlvbi1jb250ZW50XHJcblx0e1xyXG5cdCAgICBbZmlsZXJ3ZWItbm9uZV1cclxuXHRcdHtcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1x0XHQgICAgIFxyXG5cdFx0fVxyXG5cdFx0LmxvZ28tcmF0aW5nLXNlY1xyXG5cdFx0e1xyXG5cdFx0ICAgIGRpc3BsYXk6bm9uZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblx0aW9uLWNvbnRlbnRcclxuXHR7XHJcblx0LnByb2R1Y3RkaXNwbGF5ZWQgXHJcblx0e1xyXG5cdFx0aW9uLXNlbGVjdCBcclxuXHRcdHtcclxuXHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xyXG5cdFx0XHQtLXBhZGRpbmctZW5kOiA3cHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTFweDtcclxuXHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cdFx0XHQtLXBhZGRpbmctdG9wOiA1cHg7XHJcblx0XHR9XHRcclxuXHR9XHRcclxuXHQgICAgLmxvZ28tcmF0aW5nLXNlY1xyXG5cdFx0e1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0cGFkZGluZzogMjBweCA1cHg7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0YmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvaGVhZGVyLWJnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XHRcclxuXHRcdFx0LnZlbmRvci1wcm9maWxlLWltZzEgXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWcgXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0d2lkdGg6IDQ4cHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDQ4cHg7XHJcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiA0cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNwYW4gXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHRcdC5sb2dvLW1uLXNlY1xyXG4gICAgICAgICAgICB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLmxvZ28tcmF0aW5nXHJcbiAgICAgICAgICAgICAgICB7XHJcblx0XHRcdFx0XHRbbmFtZS1sb2dvXSBcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5yYXRpbmctaWNvblxyXG5cdFx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMXB4O1x0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aSBcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcblx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHRzcGFuIFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDRweDtcclxuXHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0XHQuaGVhZGVyLWNhbGwtYWN0aW9uIFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Lm1lbnUtcmlnaHQtdWwgXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGkgXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGEgXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMHB4IDNweDtcclxuXHRcdFx0XHRcdFx0fVx0XHRcdFxyXG5cdFx0XHRcdFx0fVx0XHRcdFxyXG5cdFx0XHRcdH1cdFx0XHRcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0LnNob3AtcHJvZHVjdC13cmFwIFxyXG5cdFx0e1xyXG5cdFx0XHQucHJvZHVjdC1pdGVtXHJcblx0XHRcdHsgXHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcblx0XHRcdFx0cGFkZGluZzogMTJweCAxMHB4O1x0XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1x0XHRcdFx0XHJcblx0XHRcdFx0LnByb2R1Y3QtdGh1bWJcclxuXHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0aW1nIFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRtYXgtaGVpZ2h0OiAxMjBweDtcclxuXHRcdFx0XHRcdFx0bWluLWhlaWdodDogMTIwcHg7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMjBweDtcclxuXHRcdFx0XHRcdFx0bWluLXdpZHRoOiAxMjBweDtcclxuXHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdC5hY3Rpb24tbGlua3MgXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHJpZ2h0OiA1cHg7XHJcblx0XHRcdFx0XHRcdHRvcDogNXB4O1xyXG5cdFx0XHRcdFx0XHRhIFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMjhweDtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMjhweDtcclxuXHRcdFx0XHRcdFx0XHRpIFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5cdFx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0LmJveC1sYWJlbFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQubGFiZWwtcHJvZHVjdCBcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHRvcDogNXB4O1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDMwcHg7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMCA4cHg7XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cdFx0XHRcclxuXHRcdFx0XHQucHJvZHVjdC1jYXB0aW9uXHJcblx0XHRcdFx0eyBcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNHB4IDBweCAxMHB4O1x0XHRcdFx0XHJcblx0XHRcdFx0XHQubWFudWZhY3R1cmUtcHJvZHVjdCBcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cCBcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdFx0XHRcdFx0XHRcdGEgXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICM5Nzk3OTc7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTdweDtcclxuXHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVx0XHRcdFxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtbmFtZSBcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aDQgXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTlweDtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAzcHggMDtcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVx0XHRcdFxyXG5cdFx0XHRcdFx0LnJhdGluZ3MgXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHQgICAgcGFkZGluZzogMnB4IDA7XHJcblx0XHRcdFx0XHRcdHNwYW4gXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxcHg7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM3YzdjN2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnllbGxvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cdFx0XHRcdFx0XHRcdCAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcblx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cdFx0XHRcclxuXHRcdFx0XHRcdC5wcmljZS1ib3ggXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdC5yZWd1bGFyLXByaWNlIFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM3YzdjN2M7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5idG4tY2FydCBcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAxOHB4O1xyXG5cdFx0XHRcdFx0XHRib3R0b206IDJweDtcclxuXHRcdFx0XHRcdH1cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVx0XHRcclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cdFxyXG5cdFx0LnNob3Atc2lkZWJhci1pbm5lclxyXG5cdFx0e1xyXG5cdFx0XHQmLnNob3BzaWRlYmFyXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRcdFx0dG9wOiA1NnB4O1xyXG5cdFx0XHRcdGxlZnQ6IDBweDtcclxuXHRcdFx0XHRyaWdodDogMHB4O1x0XHRcdFx0XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0XHR6LWluZGV4OiA5OTk7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMHB4O1xyXG5cdFx0XHQgICAgcGFkZGluZzogMTVweCAxNXB4IDMwcHg7XHRcclxuXHRcdFx0XHQuc2luZ2xlLXNpZGViYXIgXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0d2lkdGg6IDQ3JTtcclxuXHRcdFx0XHRcdG1hcmdpbjogMHB4IDRweDtcclxuXHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0XHQuZHJvcGRvd25cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdFx0XHRcdC5kcm9wZG93bi10b2dnbGUgXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNDJweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmFwcGx5YnRuIFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDQycHg7XHJcblx0XHRcdFx0XHRcdG1pbi13aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdH1cdFx0XHRcclxuXHRcdFx0XHR9XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRbZmlsZXJtb2Itbm9uZV1cclxuXHRcdHtcclxuXHRcdCAgICBkaXNwbGF5Om5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbi5jb250LXN0ciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0YnV0dG9uLmJ0biB7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRcdG1pbi13aWR0aDogNzBweDtcclxuXHR9XHJcblx0LmRyb3Bkb3duLW1lbnUgbGkge1xyXG5cdFx0cGFkZGluZzogN3B4IDEwcHg7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRtaW4td2lkdGg6IDEyMHB4O1xyXG5cdH1cclxufSAiXX0= */"

/***/ }),

/***/ "./src/app/products/products.page.ts":
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _filters_filters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filters/filters.page */ "./src/app/filters/filters.page.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ProductsPage = /** @class */ (function () {
    // selected_subcats:any = [];
    function ProductsPage(actionSheetController, modalController, userService, toastController, loadingController, alertController, events, activatedRoute, router, _zone) {
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
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_5__["config"].IMAGES_URL;
        events.subscribe('wishlist:true', function (data) {
            _this.getCartProductsIdaa();
        });
    }
    ProductsPage.prototype.hide = function () {
        this.hideMe = !this.hideMe;
    };
    ProductsPage.prototype.getCartProductsIdaa = function () {
        var _this = this;
        //this.presentLoading();
        this.userService.postData({ user_id: this.userId }, 'getCartProductsIds').subscribe(function (result) {
            _this.my_wish_products = result.wishlist;
        }, function (err) {
        });
    };
    ProductsPage.prototype.ngOnInit = function () {
        this.price_values = { lower: this.min_price, upper: this.max_price };
    };
    ProductsPage.prototype.ionViewDidEnter = function () {
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
    ProductsPage.prototype.getProducts = function (params) {
        var _this = this;
        if (params === void 0) { params = null; }
        this.presentLoading();
        if (params == null) {
            params = { user_id: this.userId, cats: this.selected_cats, search: this.searchTerm, sort_by: this.sort_by_value, per_page: this.show_count, page: this.current_page, brands: this.filtered_brands, discounts: this.filtered_discount, reviews: this.filtered_reviews, min_price: this.min_price, max_price: this.max_price };
        }
        this.userService.postData(params, 'getAllProducts').subscribe(function (result) {
            _this.stopLoading();
            _this.products = result.products.records;
            _this.total_products = result.products.total;
            var records = Math.ceil(result.products.total / _this.show_count);
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
    ProductsPage.prototype.scroll = function (position) {
        var self = this;
        this._zone.run(function () {
            setTimeout(function () {
                self.content.scrollToPoint(0, position, 2000);
            });
        });
    };
    ProductsPage.prototype.getCartProductsIds = function () {
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
    ProductsPage.prototype.getCategories = function () {
        var _this = this;
        this.userService.getData('getCategories').subscribe(function (result) {
            _this.all_categories = result.categories;
        }, function (err) {
            _this.all_categories = [];
        });
    };
    ProductsPage.prototype.getAllBrands = function () {
        var _this = this;
        this.userService.postData({}, 'brand_list').subscribe(function (result) {
            _this.all_brands = result.brand_list;
        }, function (err) {
            _this.all_brands = [];
        });
    };
    ProductsPage.prototype.addToCart = function (product_id, product_sale_price, product_purchase_price) {
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
    // addToWish(product_id){
    //   if(this.userId == 0){
    //     this.router.navigate(['/login']);
    //   }
    //   else{
    //     this.presentLoading();
    //     this.userService.postData({product_id:product_id,user_id:this.userId},'addTowish').subscribe((result) => {
    //       this.stopLoading();
    //       if(result.status == 1){
    //         this.my_wish_products.push(product_id);
    //         this.presentToast('Product added to wishlist.','success');
    //       }
    //       else{
    //         this.presentToast('Error,Please try after some time.','danger');
    //       }
    //     },
    //     err => {
    //       this.stopLoading();
    //       this.presentToast('Error,Please try after some time.','danger');
    //     });
    //   }
    // }
    ProductsPage.prototype.addToWish = function (product_id) {
        if (this.userId == 0) {
            this.router.navigate(['/login']);
        }
        else {
            this.presentAlert(product_id);
            // this.presentLoading();
            // this.userService.postData({product_id:product_id,user_id:this.userId},'addTowish').subscribe((result) => {
            //   this.stopLoading();
            //   if(result.status == 1){
            //     this.my_wish_products.push(product_id);
            //     this.presentToast('Product added to wishlist.','success');
            //   }
            //   else{
            //     this.presentToast('Error,Please try after some time.','danger');
            //   }
            // },
            // err => {
            //   this.stopLoading();
            //   this.presentToast('Error,Please try after some time.','danger');
            // });
        }
    };
    ProductsPage.prototype.presentAlert = function (product_id) {
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
    ProductsPage.prototype.callFilter = function () {
        this.getProducts();
    };
    ProductsPage.prototype.resetFilter = function () {
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
    ProductsPage.prototype.sortBy = function (value, text) {
        this.sort_by_value = value;
        this.sort_by = text;
        this.getProducts();
    };
    ProductsPage.prototype.show_count_change = function (value) {
        this.show_count = value;
        this.getProducts();
    };
    ProductsPage.prototype.paginate = function (page) {
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
    ProductsPage.prototype.priceChanged = function (values) {
        this.min_price = values.detail.value.lower;
        this.max_price = values.detail.value.upper;
    };
    ProductsPage.prototype.arrayOne = function (n) {
        return Array(n);
    };
    ProductsPage.prototype.atob = function (string) {
        return atob(string);
    };
    ProductsPage.prototype.presentActionSheet = function () {
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
    ProductsPage.prototype.onButtonClickdrop = function () {
        this.buttonClickeddrop = !this.buttonClickeddrop;
    };
    ProductsPage.prototype.openClose = function (item) {
        if (this.selectedItem.indexOf(item) == -1) {
            this.selectedItem.push(item);
        }
        else {
            this.selectedItem.splice(this.selectedItem.indexOf(item), 1);
        }
    };
    ProductsPage.prototype.brandChecked = function (event, brand_id) {
        if (event.detail.checked == true) {
            this.filtered_brands.push(brand_id);
        }
        else {
            this.filtered_brands.splice(this.filtered_brands.indexOf(brand_id), 1);
        }
        console.log(this.filtered_brands);
    };
    ProductsPage.prototype.discountChecked = function (event, discount) {
        if (this.filtered_discount.length == 0) {
            this.filtered_discount.push(Number(discount));
        }
        else {
            //this.filtered_discount.splice(this.filtered_discount.indexOf(discount),1);
            this.filtered_discount[0] = Number(discount);
        }
        console.log(this.filtered_discount);
    };
    ProductsPage.prototype.reviewChecked = function (event, review) {
        if (this.filtered_reviews.length == 0) {
            this.filtered_reviews.push(Number(review));
        }
        else {
            //this.filtered_reviews.splice(this.filtered_reviews.indexOf(review),1);
            this.filtered_reviews[0] = Number(review);
        }
        console.log(this.filtered_reviews);
    };
    ProductsPage.prototype.catChecked = function (event, cat, subcat) {
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
    ProductsPage.prototype.removeArray = function (arr, what) {
        var a = arguments, L = a.length, ax;
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax = arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
            }
        }
        return arr;
    };
    ProductsPage.prototype.presentModal1 = function () {
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
    ProductsPage.prototype.presentToast = function (message, color) {
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
    ProductsPage.prototype.presentLoading = function () {
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
    ProductsPage.prototype.stopLoading = function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductsPage.prototype, "content", void 0);
    ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.page.html */ "./src/app/products/products.page.html"),
            styles: [__webpack_require__(/*! ./products.page.scss */ "./src/app/products/products.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], ProductsPage);
    return ProductsPage;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map