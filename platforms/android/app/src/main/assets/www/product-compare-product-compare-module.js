(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-compare-product-compare-module"],{

/***/ "./src/app/product-compare/product-compare.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/product-compare/product-compare.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductComparePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComparePageModule", function() { return ProductComparePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_compare_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-compare.page */ "./src/app/product-compare/product-compare.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-stars */ "./node_modules/ngx-stars/fesm5/ngx-stars.js");









var routes = [
    {
        path: '',
        component: _product_compare_page__WEBPACK_IMPORTED_MODULE_6__["ProductComparePage"]
    }
];
var ProductComparePageModule = /** @class */ (function () {
    function ProductComparePageModule() {
    }
    ProductComparePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ngx_stars__WEBPACK_IMPORTED_MODULE_8__["NgxStarsModule"]
            ],
            declarations: [_product_compare_page__WEBPACK_IMPORTED_MODULE_6__["ProductComparePage"]]
        })
    ], ProductComparePageModule);
    return ProductComparePageModule;
}());



/***/ }),

/***/ "./src/app/product-compare/product-compare.page.html":
/*!***********************************************************!*\
  !*** ./src/app/product-compare/product-compare.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"darkred\" text-uppercase>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Product Comparison\n    </ion-title>\n  <ion-buttons slot=\"end\" > \n          <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n\t     <ion-buttons slot=\"end\">\n          <ion-icon name=\"pin\"></ion-icon>\n    </ion-buttons>\n<ion-buttons slot=\"end\" > \n\t<ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\t\n\t </ion-buttons>\n  </ion-toolbar>\n      <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n\t              <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n\t              <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n\t              <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n\t              <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t   </div>\n</ion-header>  -->\n<ion-content>\n<div class=\"ion-padding\">\n<div header_height></div>\n<!-- Breadcrumb Start -->\n\n<div breadcrumb  class=\"ion-hide-md-down\">\t\t\n\t<div breadcrumb-inner>\n\t\t<ul list-inline list-unstyled>\n\t\t\t<li><a routerLink=\"/home\">Home</a></li>\n\t\t\t<li class=\"active\"> Product Comparison</li>\n\t\t</ul>\n\t</div><!-- /.breadcrumb-inner -->\n</div>\n\n<!-- Breadcrumb Ends -->\n<!---  Product Comparison Section Start -->\n<div *ngIf=\"comapred_products_list == ''\">\n\t<div class=\"alert alert-danger text-center\">\n\t    No products added to compare.\n\t</div>\n</div>\n<div product-comparison class=\"ion-hide-md-down\" *ngIf=\"comapred_products_list != ''\">\n   <h1 heading-title>Compare with similar items</h1>\n   <div class=\"table-responsive\">\n       <table class=\"table compare-table\">\n\t      <tbody>\n\t        <tr>\n\t\t\t\t<th>Products</th>\n\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\">\n\t\t\t\t\t<div product>\n\t\t\t\t\t\t<div product-image>\n\t\t\t\t\t\t\t<div image>\n\t\t\t\t\t\t\t\t<a routerLink=\"/product-details/{{pro.product_id}}\">\n\t\t\t\t\t\t\t\t    <img *ngIf=\"errors.indexOf(pro.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t \t\t<img *ngIf=\"errors.indexOf(pro.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{pro.product_image}}\" alt=\"{{pro.product_name}}\">\t\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div product-info text-left>\n\t\t\t\t\t\t\t\t<h3 name>\n\t\t\t\t\t\t\t\t   <a routerLink=\"/product-details/{{pro.product_id}}\">{{pro.product_name}}</a>\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t<div action>\n\t\t\t\t\t\t\t\t   <ion-button text-capitalize color=\"darkred\" [disabled]=\"pro.product_quantity == 0 || errors.indexOf(pro.product_quantity) >= 0\" *ngIf=\"my_cart_products.indexOf(pro.product_id) == -1\" (click)=\"addToCart(pro.product_id,pro.product_sale_price,pro.product_purchase_price)\">{{(pro.product_quantity == 0 || errors.indexOf(pro.product_quantity) >= 0) ? 'Out of Stock' : 'Add To Cart'}} </ion-button>\n\n\t\t\t\t\t\t\t\t   <ion-button text-capitalize color=\"darkred\" routerLink=\"/cart\" *ngIf=\"my_cart_products.indexOf(pro.product_id) >= 0\">In Cart </ion-button>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</td>        \n\t\t\t</tr>\n\t        <tr>\n\t\t\t\t<th>Description</th>\n\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\"> \n\t\t\t\t\t<p [innerHTML]=\"atob(pro.product_description)\"></p>\n\t\t\t\t</td>\n        \t</tr>\n\t\t    <tr>\n\t\t\t\t<th>Brand</th>\n\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\">\n\t\t\t\t     <p>{{pro.brand_name}}</p>\n\t\t\t    </td>\t\t\n        \t</tr>\n        \t<tr>\n\t\t\t\t<th>Customer Rating</th>\n\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\">\n\t\t\t\t     <a remove-icon>\n\t\t\t\t\t   <ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"pro?.total_reviews[0]?.Average_Review\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t </a>\n\t\t\t    </td>\t\t\n        \t</tr>\n\t\t    <tr>\n\t\t\t\t<th>Price</th>\n\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\">\n\t\t\t\t\t<div product-price>\n\t\t\t\t\t\t<span *ngIf=\"errors.indexOf(pro.product_sale_price) == -1 && pro.product_sale_price != pro.product_purchase_price\" price> ${{pro.product_sale_price}}  </span> \n\n\t\t                <span *ngIf=\"errors.indexOf(pro.product_sale_price) >= 0 || pro.product_sale_price == pro.product_purchase_price\" price> ${{pro.product_purchase_price}}  </span> \n\n\t\t                <span *ngIf=\"errors.indexOf(pro.product_sale_price) == -1 && pro.product_sale_price != pro.product_purchase_price\" price-before-discount>${{pro.product_purchase_price}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t    <tr>\n\t\t\t\t<th>Sold By</th>\n\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\">\n\t\t\t\t\t<p in-stock>{{pro.vendor_company}}</p>\n\t\t\t\t</td>\n            </tr>\n<!-- \t\t    <tr>\n\t\t\t\t<th>Headphone Fit</th>\n\t\t\t\t<td>\n\t\t\t\t\t<p>Over-Ear</p>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t    <tr>\n\t\t\t\t<th>Item Dimensions</th>\n\t\t\t\t<td>\n\t\t\t\t\t<p>6.54 x 7.13 x 2.36 in</p>\n\t\t\t\t</td>\n    \t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<th>Item Weight</th>\n\t\t\t\t<td>\n\t\t\t\t\t<p>0.85 lb</p>\n\t\t\t\t</td>\n    \t\t</tr> -->\n\t\t\t<tr>\n\t\t\t\t<th>Remove</th>\n\t\t\t\t<td text-center *ngFor=\"let pro of comapred_products_list; let c_index = index \">\n\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"removeCompared(c_index)\" remove-icon><ion-icon name=\"close\"></ion-icon></a>\n\t\t\t\t</td>\n           </tr>\n\t\t</tbody>\n\t   </table>\n   </div>\n</div>\n<!---  Product Comparison Section Ends -->\n<!-- Product Comparison Mobile Start -->\n<div mob-product-comparison class=\"ion-hide-lg-up\" *ngIf=\"comapred_products_list != ''\">\n\t<ion-row products>\n\t    <ion-col size=\"4\" no-padding *ngFor=\"let pro of comapred_products_list; let cm_index = index \">\n\t\t    <ion-card no-margin product-main>\n\t\t\t<img *ngIf=\"errors.indexOf(pro.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t<img *ngIf=\"errors.indexOf(pro.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{pro.product_image}}\" alt=\"{{pro.product_name}}\">\n\t\t\t<ion-icon (click)=\"removeCompared(cm_index)\" name=\"close-circle\" close-icon></ion-icon>\n\t\t    <ion-card-content text-center>\n\t\t\t    <h2><a>{{pro.product_name}}</a></h2>\n\t\t\t\t<p rating>\n\t\t\t\t <a>\n\t\t\t\t   <ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"pro?.total_reviews[0]?.Average_Review\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t </a>\n\t\t\t\t</p>\n\t\t\t\t    <div product-price>\n\t\t\t\t\t\t<span *ngIf=\"errors.indexOf(pro.product_sale_price) == -1 && pro.product_sale_price != pro.product_purchase_price\" price> ${{pro.product_sale_price}}  </span> \n\n\t\t                <span *ngIf=\"errors.indexOf(pro.product_sale_price) >= 0 || pro.product_sale_price == pro.product_purchase_price\" price> ${{pro.product_purchase_price}}  </span> \n\n\t\t                <span *ngIf=\"errors.indexOf(pro.product_sale_price) == -1 && pro.product_sale_price != pro.product_purchase_price\" price-before-discount>${{pro.product_purchase_price}}</span>\n    \t\t\t   </div>\n                <ion-button text-capitalize color=\"darkred\" [disabled]=\"pro.product_quantity == 0 || errors.indexOf(pro.product_quantity) >= 0\" *ngIf=\"my_cart_products.indexOf(pro.product_id) == -1\" (click)=\"addToCart(pro.product_id,pro.product_sale_price,pro.product_purchase_price)\">{{(pro.product_quantity == 0 || errors.indexOf(pro.product_quantity) >= 0) ? 'Out of Stock' : 'Add To Cart'}} </ion-button>\n\n\t\t\t\t<ion-button text-capitalize color=\"darkred\" routerLink=\"/cart\" *ngIf=\"my_cart_products.indexOf(pro.product_id) >= 0\">In Cart </ion-button>\t\t\t\t\t  \n\t\t     </ion-card-content>\n\t\t  \t</ion-card>\n\t    </ion-col>\n\t</ion-row>\n\t<ion-row class=\"ion-margin-top\" description>\n\t\t<ion-col size=\"12\" no-padding>\n\t\t\t<h2 section-head text-center>Description</h2>\n\t\t</ion-col>\n\t    <ion-col size=\"4\" no-padding *ngFor=\"let pro of comapred_products_list\">\n\t\t    <ion-card no-margin>\n\t\t        <p text-center [innerHTML]=\"atob(pro.product_description)\"></p>\n\t        </ion-card>\n\t    </ion-col>\n\t</ion-row>\n\t\n\t<ion-row class=\"ion-margin-top\" description sold-by>\n\t\t <ion-col size=\"12\" no-padding>\n\t\t\t<h2 section-head text-center>Brand</h2>\n\t\t </ion-col>\n\t    <ion-col size=\"4\" no-padding *ngFor=\"let pro of comapred_products_list\">\n\t\t    <ion-card no-margin>\n\t\t        <p text-center>{{pro.brand_name}}</p>\n\t        </ion-card>\n\t    </ion-col>\n\t</ion-row>\n\n\t<ion-row class=\"ion-margin-top\" description sold-by>\n\t\t <ion-col size=\"12\" no-padding>\n\t\t\t<h2 section-head text-center>Sold By</h2>\n\t\t </ion-col>\n\t    <ion-col size=\"4\" no-padding *ngFor=\"let pro of comapred_products_list\">\n\t\t    <ion-card no-margin>\n\t\t        <p text-center>{{pro.vendor_company}}</p>\n\t        </ion-card>\n\t    </ion-col>\n\t</ion-row>\n\t<!-- <ion-row class=\"ion-margin-top\" description headphone-fit>\n\t\t <ion-col size=\"12\" no-padding>\n\t\t\t<h2 section-head text-center>Headphone Fit</h2>\n\t\t </ion-col>\n\t    <ion-col size=\"4\" no-padding>\n\t\t    <ion-card no-margin>\n\t\t        <p text-center>Over-Ear</p>\n\t        </ion-card>\n\t    </ion-col>\n\t</ion-row>\n\t<ion-row class=\"ion-margin-top\" description item-dimensions>\n\t\t <ion-col size=\"12\" no-padding>\n\t\t\t<h2 section-head text-center>Item Dimensions</h2>\n\t\t </ion-col>\n\t    <ion-col size=\"4\" no-padding>\n\t\t    <ion-card no-margin>\n\t\t        <p text-center>6.54 x 7.13 x 2.36 in</p>\n\t        </ion-card>\n\t    </ion-col>\n\t</ion-row>\n\t<ion-row class=\"ion-margin-top\" description item-weight>\n\t\t <ion-col size=\"12\" no-padding>\n\t\t\t<h2 section-head text-center>Item Weight</h2>\n\t\t </ion-col>\n\t    <ion-col size=\"4\" no-padding>\n\t\t    <ion-card no-margin>\n\t\t        <p text-center>0.85 lb</p>\n\t        </ion-card>\n\t    </ion-col>\n\t</ion-row> -->\n\t</div>\n<!-- Product Comparison Mobile Ends  -->\n\n</div>\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/product-compare/product-compare.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/product-compare/product-compare.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey);\n  /* Product Comparison Start */\n  /* Product Comparison Ends */ }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0); } }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0);\n      --padding-bottom:var(--ion-padding-0);\n      --padding-start:var(--ion-padding-0);\n      --padding-end:var(--ion-padding-0); } }\n  ion-content [product-comparison] {\n    background-color: var(--ion-color-white);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n    overflow: hidden;\n    margin-bottom: var(--ion-margin-30); }\n  ion-content [product-comparison] [heading-title] {\n      padding: var(--ion-padding-20);\n      font-weight: bold;\n      font-size: var(--ion-font-size-22);\n      color: var(--ion-color-darkgrey);\n      font-family: var(--ion-font-family-2);\n      margin-top: var(--ion-margin-0);\n      margin-bottom: var(--ion-margin-0);\n      border-bottom: 1px #e5e5e5 solid; }\n  ion-content [product-comparison] .table-responsive {\n      padding: var(--ion-padding-20); }\n  ion-content [product-comparison] .table-responsive .compare-table tr {\n        font-family: var(--ion-font-family-2); }\n  ion-content [product-comparison] .table-responsive .compare-table tr th {\n          font-size: var(--ion-font-size-16);\n          font-weight: 600;\n          color: var(--ion-color-darkgrey);\n          padding: var(--ion-padding-18) var(--ion-padding-25);\n          vertical-align: middle;\n          border: 1px solid #e5e5e5; }\n  ion-content [product-comparison] .table-responsive .compare-table tr td {\n          padding: var(--ion-padding-20);\n          border: 1px solid #e5e5e5;\n          vertical-align: middle; }\n  ion-content [product-comparison] .table-responsive .compare-table tr td p {\n            font-size: var(--ion-font-size-14);\n            line-height: var(--ion-value-22);\n            color: var(--ion-color-darkblack); }\n  ion-content [product-comparison] .table-responsive .compare-table tr td ion-img {\n            width: 150px; }\n  ion-content [product-comparison] .table-responsive .compare-table tr td [product] [product-info] [name] {\n            font-size: var(--ion-font-size-15);\n            font-family: var(--ion-font-family-2); }\n  ion-content [product-comparison] .table-responsive .compare-table tr td [product] [product-info] [name] a {\n              color: var(--ion-color-darkblack3); }\n  ion-content [product-comparison] .table-responsive .compare-table tr td [product] [product-info] [name] a:hover {\n                color: var(--ion-color-darkred);\n                text-decoration: none; }\n  ion-content [product-comparison] .table-responsive .compare-table tr td ion-button {\n            font-family: var(--ion-font-family-2);\n            font-size: var(--ion-font-size-13);\n            line-height: var(--ion-value-22);\n            --box-shadow:none; }\n  ion-content [product-comparison] .table-responsive .compare-table tr td ion-button:hover {\n              opacity: 0.8; }\n  ion-content [product-comparison] .table-responsive .compare-table tr td [remove-icon] {\n            font-size: var(--ion-font-size-16);\n            color: var(--ion-color-darkgrey); }\n  ion-content [product-comparison] .table-responsive .compare-table tr td [remove-icon] [filled] {\n              color: var(--ion-color-yellow2); }\n  ion-content [product-comparison] .table-responsive .compare-table tr td [product-price] [price] {\n            font-size: var(--ion-font-size-16);\n            font-weight: 700;\n            line-height: var(--ion-value-30);\n            margin-right: var(--ion-margin-8);\n            color: var(--ion-color-darkred); }\n  ion-content [product-comparison] .table-responsive .compare-table tr td [product-price] [price-before-discount] {\n            color: #D3D3D3;\n            font-size: var(--ion-font-size-14);\n            font-weight: 400;\n            line-height: var(--ion-value-30);\n            text-decoration: line-through; }\n  ion-content [product-comparison] .table-responsive .compare-table tr td [in-stock] {\n            font-size: var(--ion-font-size-15);\n            font-weight: 700;\n            margin-bottom: var(--ion-margin-0);\n            color: var(--ion-color-darkred); }\n  ion-content [mob-product-comparison] [products] {\n    background: var(--ion-color-white); }\n  ion-content [mob-product-comparison] ion-card {\n    font-family: var(--ion-font-family-2);\n    box-shadow: none;\n    border: 1px solid var(--ion-color-ltgrey);\n    border-bottom: none;\n    border-top: none;\n    margin: -1px;\n    border-radius: var(--ion-value-0);\n    background: var(--ion-color-white);\n    padding-top: var(--ion-padding-10); }\n  @media only screen and (max-width: 991px) {\n      ion-content [mob-product-comparison] ion-card img {\n        width: 150px;\n        margin: 0 auto; } }\n  @media only screen and (max-width: 576px) {\n      ion-content [mob-product-comparison] ion-card img {\n        width: 80px;\n        margin: 0 auto; } }\n  ion-content [mob-product-comparison] ion-card [close-icon] {\n      position: absolute;\n      top: var(--ion-value-10);\n      right: var(--ion-value-10);\n      font-size: var(--ion-font-size-18);\n      color: #b2b2b2;\n      cursor: pointer; }\n  ion-content [mob-product-comparison] ion-card ion-card-content {\n      padding: var(--ion-padding-5); }\n  ion-content [mob-product-comparison] ion-card ion-card-content h2 {\n        font-family: var(--ion-font-family-2);\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n  ion-content [mob-product-comparison] ion-card ion-card-content h2 a {\n          font-size: var(--ion-font-size-14);\n          font-family: var(--ion-font-family-2);\n          color: var(--ion-color-darkblack3);\n          font-weight: 700;\n          text-decoration: none; }\n  @media only screen and (max-width: 576px) {\n            ion-content [mob-product-comparison] ion-card ion-card-content h2 a {\n              font-size: var(--ion-font-size-12) !important; } }\n  ion-content [mob-product-comparison] ion-card ion-card-content p[rating] a {\n        color: var(--ion-color-darkgrey); }\n  ion-content [mob-product-comparison] ion-card ion-card-content p[rating] a ion-icon {\n          color: var(--ion-color-yellow2); }\n  ion-content [mob-product-comparison] ion-card ion-card-content [product-price] [price] {\n        font-family: var(--ion-font-family-2);\n        color: var(--ion-color-darkred);\n        font-weight: 700; }\n  ion-content [mob-product-comparison] ion-card ion-card-content [product-price] [price-before-discount] {\n        font-family: var(--ion-font-family-2);\n        color: #D3D3D3;\n        font-weight: 400;\n        line-height: 30px;\n        text-decoration: line-through; }\n  ion-content [mob-product-comparison] ion-card ion-card-content ion-button {\n        font-family: var(--ion-font-family-2);\n        --box-shadow:none;\n        height: var(--ion-wh-28);\n        font-size: var(--ion-font-size-12); }\n  @media only screen and (max-width: 576px) {\n          ion-content [mob-product-comparison] ion-card ion-card-content ion-button {\n            --border-radius: 4px!important; } }\n  ion-content [description] {\n    font-family: var(--ion-font-family-2);\n    background: var(--ion-color-white); }\n  ion-content [description] [section-head] {\n      font-family: var(--ion-font-family-2);\n      background: #efefef;\n      font-size: var(--ion-font-size-14);\n      font-weight: 600;\n      padding: var(--ion-padding-10);\n      margin-top: var(--ion-margin-0);\n      margin-bottom: var(--ion-margin-0);\n      color: var(--ion-color-darkgrey); }\n  ion-content [description] ion-card {\n      font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n        ion-content [description] ion-card {\n          padding-top: var(--ion-padding-10); } }\n  ion-content [description] ion-card p {\n        padding: var(--ion-padding-15);\n        margin-bottom: var(--ion-margin-0); }\n  @media only screen and (max-width: 767px) {\n          ion-content [description] ion-card p {\n            font-size: var(--ion-font-size-12);\n            padding: var(--ion-padding-10) var(--ion-padding-5); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9wcm9kdWN0LWNvbXBhcmUvcHJvZHVjdC1jb21wYXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUVBLGtDQUFhO0VBWWIsNkJBQUE7RUFxSEEsNEJBQUEsRUFBNkI7RUFoSTdCO0lBSEE7TUFLRyxrQ0FBYyxFQUFBLEVBb1FqQjtFQWxRQTtJQVBBO01BU0csa0NBQWM7TUFDZCxxQ0FBaUI7TUFDakIsb0NBQWdCO01BQ2hCLGtDQUFjLEVBQUEsRUE2UGpCO0VBelFBO0lBaUJhLHdDQUF3QztJQUNqRCwyQ0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLG1DQUFtQyxFQUFBO0VBcEJ2QztNQXNCSSw4QkFBOEI7TUFDOUIsaUJBQWlCO01BQ2pCLGtDQUFrQztNQUNsQyxnQ0FBZ0M7TUFDaEMscUNBQXFDO01BQ3JDLCtCQUE4QjtNQUNmLGtDQUFrQztNQUNqRCxnQ0FBZ0MsRUFBQTtFQTdCcEM7TUFpQ0ksOEJBQTZCLEVBQUE7RUFqQ2pDO1FBc0NTLHFDQUFvQyxFQUFBO0VBdEM3QztVQXlDTyxrQ0FBa0M7VUFDbEMsZ0JBQWdCO1VBQ2hCLGdDQUFrQztVQUNsQyxvREFBb0Q7VUFDcEQsc0JBQXNCO1VBQ3RCLHlCQUF5QixFQUFBO0VBOUNoQztVQWlETSw4QkFBOEI7VUFDOUIseUJBQXlCO1VBQ3pCLHNCQUFxQixFQUFBO0VBbkQzQjtZQXNEUyxrQ0FBa0M7WUFDVixnQ0FBZ0M7WUFDeEQsaUNBQWdDLEVBQUE7RUF4RHpDO1lBMkQ2QixZQUFZLEVBQUE7RUEzRHpDO1lBa0VhLGtDQUFrQztZQUNSLHFDQUFvQyxFQUFBO0VBbkUzRTtjQXNFYSxrQ0FBbUMsRUFBQTtFQXRFaEQ7Z0JBeUVjLCtCQUE4QjtnQkFDOUIscUJBQW9CLEVBQUE7RUExRWxDO1lBb0ZPLHFDQUFvQztZQUNwQyxrQ0FBa0M7WUFDVixnQ0FBZ0M7WUFDeEQsaUJBQWEsRUFBQTtFQXZGcEI7Y0F5RlEsWUFBVyxFQUFBO0VBekZuQjtZQTZGWSxrQ0FBa0M7WUFDbEMsZ0NBQWlDLEVBQUE7RUE5RjdDO2NBaUdhLCtCQUErQixFQUFBO0VBakc1QztZQXdHZ0Isa0NBQWtDO1lBQ3hDLGdCQUFnQjtZQUNoQixnQ0FBZ0M7WUFDaEMsaUNBQWlDO1lBQ2pDLCtCQUErQixFQUFBO0VBNUd6QztZQWdIZ0IsY0FBYztZQUNwQixrQ0FBa0M7WUFDbEMsZ0JBQWdCO1lBQ2hCLGdDQUFnQztZQUNoQyw2QkFBNkIsRUFBQTtFQXBIdkM7WUF5SFcsa0NBQWtDO1lBQ3JDLGdCQUFnQjtZQUNoQixrQ0FBbUM7WUFDaEMsK0JBQStCLEVBQUE7RUE1SDFDO0lBd0lHLGtDQUFpQyxFQUFBO0VBeElwQztJQTJJUSxxQ0FBcUM7SUFDdkMsZ0JBQWdCO0lBQ25CLHlDQUE0QztJQUM1QyxtQkFBa0I7SUFDbEIsZ0JBQWU7SUFDZixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQyxrQ0FBaUMsRUFBQTtFQUdoQztNQXRKSjtRQXdKUyxZQUFZO1FBQ00sY0FBYSxFQUFBLEVBUXBDO0VBTEE7TUE1Sko7UUE4SlMsV0FBVztRQUNPLGNBQWEsRUFBQSxFQUVwQztFQWpLSjtNQW9LSSxrQkFBa0I7TUFDbEIsd0JBQXdCO01BQ3hCLDBCQUEyQjtNQUMzQixrQ0FBbUM7TUFDbkMsY0FBYztNQUNkLGVBQWMsRUFBQTtFQXpLbEI7TUE2S08sNkJBQTRCLEVBQUE7RUE3S25DO1FBK0tZLHFDQUFxQztRQUNyQyxnQkFBZ0I7UUFDaEIsbUJBQWtCO1FBQ3hCLHVCQUF1QixFQUFBO0VBbEw3QjtVQXFMTSxrQ0FBaUM7VUFDakMscUNBQXFDO1VBQ3JDLGtDQUFpQztVQUNqQyxnQkFBZ0I7VUFDaEIscUJBQW9CLEVBQUE7RUFDRDtZQTFMekI7Y0E0TDRCLDZDQUEyQyxFQUFBLEVBRWpFO0VBOUxOO1FBb01hLGdDQUFnQyxFQUFBO0VBcE03QztVQXNNTSwrQkFBOEIsRUFBQTtFQXRNcEM7UUE4TU0scUNBQXFDO1FBQ3JDLCtCQUE4QjtRQUM5QixnQkFBZSxFQUFBO0VBaE5yQjtRQW1OTSxxQ0FBcUM7UUFDakMsY0FBYztRQUNqQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLDZCQUE2QixFQUFBO0VBdk5wQztRQTJOSyxxQ0FBcUM7UUFDckMsaUJBQWE7UUFDWCx3QkFBd0I7UUFDTixrQ0FBaUMsRUFBQTtFQUNsRDtVQS9OUjtZQWlPTyw4QkFBZ0IsRUFBQSxFQUVsQjtFQW5PTDtJQXlPQyxxQ0FBcUM7SUFDckMsa0NBQWlDLEVBQUE7RUExT2xDO01BNk9FLHFDQUFxQztNQUNyQyxtQkFBa0I7TUFDbEIsa0NBQWtDO01BQ3pCLGdCQUFnQjtNQUN6Qiw4QkFBOEI7TUFDOUIsK0JBQWdDO01BQ2hDLGtDQUFrQztNQUNsQyxnQ0FBK0IsRUFBQTtFQXBQakM7TUF1UEsscUNBQXFDLEVBQUE7RUFDekM7UUF4UEQ7VUEwUEssa0NBQWtDLEVBQUEsRUFZckM7RUF0UUY7UUE4UEksOEJBQTZCO1FBQzdCLGtDQUFpQyxFQUFBO0VBQ2pDO1VBaFFKO1lBa1FNLGtDQUFrQztZQUNsQyxtREFBa0QsRUFBQSxFQUVsRCIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtY29tcGFyZS9wcm9kdWN0LWNvbXBhcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGlvbi1jb250ZW50XHJcbnsgIFxyXG5cdC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZ3JleSk7XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxyXG5cdHtcclxuXHQgICAtLXBhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdH1cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0e1xyXG5cdCAgIC0tcGFkZGluZy10b3A6dmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0ICAgLS1wYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHQgICAtLXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0ICAgLS1wYWRkaW5nLWVuZDp2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHR9XHJcblx0LyogUHJvZHVjdCBDb21wYXJpc29uIFN0YXJ0ICovXHJcblx0XHQgW3Byb2R1Y3QtY29tcGFyaXNvbl1cclxuXHRcdCB7ICAgICAgXHJcblx0XHQgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwuMDgpO1xyXG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMzApO1xyXG5cdFx0XHQgICAgW2hlYWRpbmctdGl0bGVdIHtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTIyKTtcclxuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyZXkpO1xyXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbi0wKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4ICNlNWU1ZTUgc29saWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0LnRhYmxlLXJlc3BvbnNpdmVcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTIwKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0LmNvbXBhcmUtdGFibGUgXHJcblx0XHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0XHQgdHJcclxuXHRcdFx0XHRcdFx0IHsgIGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHQgdGggXHJcblx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcihcdCAtLWlvbi1jb2xvci1kYXJrZ3JleSk7XHJcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xOCkgdmFyKC0taW9uLXBhZGRpbmctMjUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHRkIHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0yMCk7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuXHRcdFx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcblx0XHRcdFx0XHRcdFx0cFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMjIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aW9uLWltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcdFx0XHRbcHJvZHVjdF0gICBcclxuXHRcdFx0XHRcdFx0XHR7ICAgXHJcblx0XHRcdFx0XHRcdFx0W3Byb2R1Y3QtaW5mb11cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0IFtuYW1lXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgeyAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHRcdFx0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLWRhcmtibGFjazMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgJjpob3ZlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlvbi1idXR0b25cclxuXHRcdFx0XHRcdFx0XHR7XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpOyAgIFxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTIyKTtcclxuXHRcdFx0XHRcdFx0XHRcdC0tYm94LXNoYWRvdzpub25lO1xyXG5cdFx0XHRcdFx0XHRcdFx0Jjpob3ZlcntcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTowLjg7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFtyZW1vdmUtaWNvbl1cclxuXHRcdFx0XHRcdFx0XHR7ICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICBjb2xvcjogdmFyKCAtLWlvbi1jb2xvci1kYXJrZ3JleSk7XHJcblx0XHRcdFx0XHRcdFx0XHQgW2ZpbGxlZF1cclxuXHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci15ZWxsb3cyKTtcclxuXHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFtwcm9kdWN0LXByaWNlXVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdCBbcHJpY2VdXHJcblx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0zMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tOCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdCBbcHJpY2UtYmVmb3JlLWRpc2NvdW50XVxyXG5cdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBjb2xvcjogI0QzRDNEMztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0zMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuXHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFtpbi1zdG9ja11cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE1KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogIHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBcclxuICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0ICAgfVxyXG5cdFx0IH1cclxuXHQvKiBQcm9kdWN0IENvbXBhcmlzb24gRW5kcyAqL1xyXG5cdFttb2ItcHJvZHVjdC1jb21wYXJpc29uXVxyXG5cdHsgIFtwcm9kdWN0c11cclxuXHRcdHtcclxuXHRcdFx0XHJcblx0XHRcdFx0YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0fVxyXG5cdFx0aW9uLWNhcmRcclxuXHRcdHsgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHQgICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAgdmFyKCAgLS1pb24tY29sb3ItbHRncmV5KTtcclxuXHRcdFx0XHRib3JkZXItYm90dG9tOm5vbmU7XHJcblx0XHRcdFx0Ym9yZGVyLXRvcDpub25lO1xyXG5cdFx0XHRcdG1hcmdpbjogLTFweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiB2YXIoLS1pb24tdmFsdWUtMCk7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRwYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZy0xMCk7XHJcblx0XHRcdFx0aW1nXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRbY2xvc2UtaWNvbl1cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHR0b3A6IHZhcigtLWlvbi12YWx1ZS0xMCk7XHJcblx0XHRcdFx0XHRyaWdodDogIHZhcigtLWlvbi12YWx1ZS0xMCk7XHJcblx0XHRcdFx0XHRmb250LXNpemU6ICB2YXIoLS1pb24tZm9udC1zaXplLTE4KTtcclxuXHRcdFx0XHRcdGNvbG9yOiAjYjJiMmIyO1xyXG5cdFx0XHRcdFx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlvbi1jYXJkLWNvbnRlbnRcclxuXHRcdFx0XHR7ICAgXHJcblx0XHRcdFx0ICAgIHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctNSk7XHJcblx0XHRcdFx0XHRoMlxyXG5cdFx0XHRcdFx0eyAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpOyBcclxuXHRcdFx0XHRcdCAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcdFxyXG5cdFx0XHRcdFx0ICAgICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcblx0XHRcdFx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0YVxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtibGFjazMpO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0XHRcdCAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKSFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdCAgfVx0XHRcdFx0XHRcdCAgXHJcblx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRwXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCZbcmF0aW5nXVxyXG5cdFx0XHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0XHQgIGF7ICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyZXkpO1xyXG5cdFx0XHRcdFx0XHRcdCAgaW9uLWljb257XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXllbGxvdzIpO1xyXG5cdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0W3Byb2R1Y3QtcHJpY2VdXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFtwcmljZV1cclxuXHRcdFx0XHRcdFx0e2ZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OjcwMDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRbcHJpY2UtYmVmb3JlLWRpc2NvdW50XVxyXG5cdFx0XHRcdFx0XHR7Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgY29sb3I6ICNEM0QzRDM7ICAgXHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aW9uLWJ1dHRvblxyXG5cdFx0XHRcdFx0e2ZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdC0tYm94LXNoYWRvdzpub25lO1xyXG5cdFx0XHRcdFx0XHQgIGhlaWdodDogdmFyKC0taW9uLXdoLTI4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcblx0XHRcdFx0XHRcdCAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0ICB7XHJcblx0XHRcdFx0XHRcdCAgLS1ib3JkZXItcmFkaXVzOiA0cHghaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFtkZXNjcmlwdGlvbl1cclxuXHR7XHJcblx0XHRmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHJcblx0XHRbc2VjdGlvbi1oZWFkXVxyXG5cdFx0e2ZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdGJhY2tncm91bmQ6I2VmZWZlZjtcclxuXHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTApO1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAgdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtncmV5KTtcclxuXHRcdH1cclxuXHRcdGlvbi1jYXJkIFxyXG5cdCAgICB7Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdHtcclxuXHRcdCAgICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctMTApO1xyXG5cdFx0fVxyXG5cdFx0ICBwXHRcclxuXHRcdCAge1xyXG5cdFx0XHQgIHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctMTUpO1xyXG5cdFx0XHQgIG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0ICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpXHJcblx0XHRcdCAge1xyXG5cdFx0XHRcdCAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcblx0XHRcdFx0ICAgcGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0xMCkgdmFyKC0taW9uLXBhZGRpbmctNSk7XHJcblx0XHRcdCAgfVxyXG5cdCAgICBcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/product-compare/product-compare.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/product-compare/product-compare.page.ts ***!
  \*********************************************************/
/*! exports provided: ProductComparePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComparePage", function() { return ProductComparePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ProductComparePage = /** @class */ (function () {
    function ProductComparePage(toastController, loadingController, userService, router, events) {
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.userService = userService;
        this.router = router;
        this.events = events;
        this.errors = ['', null, undefined];
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_4__["config"].IMAGES_URL;
    }
    ProductComparePage.prototype.ngOnInit = function () {
    };
    ProductComparePage.prototype.ionViewDidEnter = function () {
        var token = localStorage.getItem('sin_auth_token');
        this.userId = this.userService.decryptData(token, _config__WEBPACK_IMPORTED_MODULE_4__["config"].ENC_SALT);
        this.getCartProductsIds();
    };
    ProductComparePage.prototype.getCartProductsIds = function () {
        var _this = this;
        this.presentLoading();
        this.userService.postData({ user_id: this.userId }, 'getCartProductsIds').subscribe(function (result) {
            _this.stopLoading();
            _this.my_cart_products = result.products;
            _this.getCompareProducts();
        }, function (err) {
            _this.stopLoading();
            _this.getCompareProducts();
            _this.my_cart_products = [];
        });
    };
    ProductComparePage.prototype.getCompareProducts = function () {
        this.comapred_products_list = [];
        var all_compare = JSON.parse(localStorage.getItem('sin_compare_products'));
        if (this.errors.indexOf(all_compare) >= 0) {
            this.comapred_products_list = [];
        }
        else {
            this.comapred_products_list = all_compare;
        }
        console.log(this.comapred_products_list);
    };
    ProductComparePage.prototype.addToCart = function (product_id, product_sale_price, product_purchase_price) {
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
        }
    };
    ProductComparePage.prototype.removeCompared = function (index) {
        this.comapred_products_list.splice(index, 1);
        localStorage.setItem('sin_compare_products', JSON.stringify(this.comapred_products_list));
    };
    ProductComparePage.prototype.atob = function (string) {
        return atob(string);
    };
    ProductComparePage.prototype.presentToast = function (message, color) {
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
    ProductComparePage.prototype.presentLoading = function () {
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
    ProductComparePage.prototype.stopLoading = function () {
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
    ProductComparePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-compare',
            template: __webpack_require__(/*! ./product-compare.page.html */ "./src/app/product-compare/product-compare.page.html"),
            styles: [__webpack_require__(/*! ./product-compare.page.scss */ "./src/app/product-compare/product-compare.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], ProductComparePage);
    return ProductComparePage;
}());



/***/ })

}]);
//# sourceMappingURL=product-compare-product-compare-module.js.map