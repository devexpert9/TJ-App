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

module.exports = "ion-content {\n  --background:var(--ion-color-grey);\n  /* Product Comparison Start */\n  /* Product Comparison Ends */ }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0); } }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0);\n      --padding-bottom:var(--ion-padding-0);\n      --padding-start:var(--ion-padding-0);\n      --padding-end:var(--ion-padding-0); } }\n  ion-content [product-comparison] {\n    background-color: var(--ion-color-white);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n    overflow: hidden;\n    margin-bottom: var(--ion-margin-30); }\n  ion-content [product-comparison] [heading-title] {\n      padding: var(--ion-padding-20);\n      font-weight: bold;\n      font-size: var(--ion-font-size-22);\n      color: var(--ion-color-darkgrey);\n      font-family: var(--ion-font-family-2);\n      margin-top: var(--ion-margin-0);\n      margin-bottom: var(--ion-margin-0);\n      border-bottom: 1px #e5e5e5 solid; }\n  ion-content [product-comparison] .table-responsive {\n      padding: var(--ion-padding-20); }\n  ion-content [product-comparison] .table-responsive .compare-table tr {\n        font-family: var(--ion-font-family-2); }\n  ion-content [product-comparison] .table-responsive .compare-table tr th {\n          font-size: var(--ion-font-size-16);\n          font-weight: 600;\n          color: var(--ion-color-darkgrey);\n          padding: var(--ion-padding-18) var(--ion-padding-25);\n          vertical-align: middle;\n          border: 1px solid #e5e5e5; }\n  ion-content [product-comparison] .table-responsive .compare-table tr td {\n          padding: var(--ion-padding-20);\n          border: 1px solid #e5e5e5;\n          vertical-align: middle; }\n  ion-content [product-comparison] .table-responsive .compare-table tr td p {\n            font-size: var(--ion-font-size-14);\n            line-height: var(--ion-value-22);\n            color: var(--ion-color-darkblack); }\n  ion-content [product-comparison] .table-responsive .compare-table tr td ion-img {\n            width: 150px; }\n  ion-content [product-comparison] .table-responsive .compare-table tr td [product] [product-info] [name] {\n            font-size: var(--ion-font-size-15);\n            font-family: var(--ion-font-family-2); }\n  ion-content [product-comparison] .table-responsive .compare-table tr td [product] [product-info] [name] a {\n              color: var(--ion-color-darkblack3); }\n  ion-content [product-comparison] .table-responsive .compare-table tr td [product] [product-info] [name] a:hover {\n                color: var(--ion-color-darkred);\n                text-decoration: none; }\n  ion-content [product-comparison] .table-responsive .compare-table tr td ion-button {\n            font-family: var(--ion-font-family-2);\n            font-size: var(--ion-font-size-13);\n            line-height: var(--ion-value-22);\n            --box-shadow:none; }\n  ion-content [product-comparison] .table-responsive .compare-table tr td ion-button:hover {\n              opacity: 0.8; }\n  ion-content [product-comparison] .table-responsive .compare-table tr td [remove-icon] {\n            font-size: var(--ion-font-size-16);\n            color: var(--ion-color-darkgrey); }\n  ion-content [product-comparison] .table-responsive .compare-table tr td [remove-icon] [filled] {\n              color: var(--ion-color-yellow2); }\n  ion-content [product-comparison] .table-responsive .compare-table tr td [product-price] [price] {\n            font-size: var(--ion-font-size-16);\n            font-weight: 700;\n            line-height: var(--ion-value-30);\n            margin-right: var(--ion-margin-8);\n            color: var(--ion-color-darkred); }\n  ion-content [product-comparison] .table-responsive .compare-table tr td [product-price] [price-before-discount] {\n            color: #D3D3D3;\n            font-size: var(--ion-font-size-14);\n            font-weight: 400;\n            line-height: var(--ion-value-30);\n            text-decoration: line-through; }\n  ion-content [product-comparison] .table-responsive .compare-table tr td [in-stock] {\n            font-size: var(--ion-font-size-15);\n            font-weight: 700;\n            margin-bottom: var(--ion-margin-0);\n            color: var(--ion-color-darkred); }\n  ion-content [mob-product-comparison] [products] {\n    background: var(--ion-color-white); }\n  ion-content [mob-product-comparison] ion-card {\n    font-family: var(--ion-font-family-2);\n    box-shadow: none;\n    border: 1px solid var(--ion-color-ltgrey);\n    border-bottom: none;\n    border-top: none;\n    margin: -1px;\n    border-radius: var(--ion-value-0);\n    background: var(--ion-color-white);\n    padding-top: var(--ion-padding-10); }\n  @media only screen and (max-width: 991px) {\n      ion-content [mob-product-comparison] ion-card img {\n        width: 150px;\n        margin: 0 auto; } }\n  @media only screen and (max-width: 576px) {\n      ion-content [mob-product-comparison] ion-card img {\n        width: 80px;\n        margin: 0 auto; } }\n  ion-content [mob-product-comparison] ion-card [close-icon] {\n      position: absolute;\n      top: var(--ion-value-10);\n      right: var(--ion-value-10);\n      font-size: var(--ion-font-size-18);\n      color: #b2b2b2;\n      cursor: pointer; }\n  ion-content [mob-product-comparison] ion-card ion-card-content {\n      padding: var(--ion-padding-5); }\n  ion-content [mob-product-comparison] ion-card ion-card-content h2 {\n        font-family: var(--ion-font-family-2);\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n  ion-content [mob-product-comparison] ion-card ion-card-content h2 a {\n          font-size: var(--ion-font-size-14);\n          font-family: var(--ion-font-family-2);\n          color: var(--ion-color-darkblack3);\n          font-weight: 700;\n          text-decoration: none; }\n  @media only screen and (max-width: 576px) {\n            ion-content [mob-product-comparison] ion-card ion-card-content h2 a {\n              font-size: var(--ion-font-size-12) !important; } }\n  ion-content [mob-product-comparison] ion-card ion-card-content p[rating] a {\n        color: var(--ion-color-darkgrey); }\n  ion-content [mob-product-comparison] ion-card ion-card-content p[rating] a ion-icon {\n          color: var(--ion-color-yellow2); }\n  ion-content [mob-product-comparison] ion-card ion-card-content [product-price] [price] {\n        font-family: var(--ion-font-family-2);\n        color: var(--ion-color-darkred);\n        font-weight: 700; }\n  ion-content [mob-product-comparison] ion-card ion-card-content [product-price] [price-before-discount] {\n        font-family: var(--ion-font-family-2);\n        color: #D3D3D3;\n        font-weight: 400;\n        line-height: 30px;\n        text-decoration: line-through; }\n  ion-content [mob-product-comparison] ion-card ion-card-content ion-button {\n        font-family: var(--ion-font-family-2);\n        --box-shadow:none;\n        height: var(--ion-wh-28);\n        font-size: var(--ion-font-size-12); }\n  @media only screen and (max-width: 576px) {\n          ion-content [mob-product-comparison] ion-card ion-card-content ion-button {\n            --border-radius: 4px!important; } }\n  ion-content [description] {\n    font-family: var(--ion-font-family-2);\n    background: var(--ion-color-white); }\n  ion-content [description] [section-head] {\n      font-family: var(--ion-font-family-2);\n      background: #efefef;\n      font-size: var(--ion-font-size-14);\n      font-weight: 600;\n      padding: var(--ion-padding-10);\n      margin-top: var(--ion-margin-0);\n      margin-bottom: var(--ion-margin-0);\n      color: var(--ion-color-darkgrey); }\n  ion-content [description] ion-card {\n      font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n        ion-content [description] ion-card {\n          padding-top: var(--ion-padding-10); } }\n  ion-content [description] ion-card p {\n        padding: var(--ion-padding-15);\n        margin-bottom: var(--ion-margin-0); }\n  @media only screen and (max-width: 767px) {\n          ion-content [description] ion-card p {\n            font-size: var(--ion-font-size-12);\n            padding: var(--ion-padding-10) var(--ion-padding-5); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvcHJvZHVjdC1jb21wYXJlL3Byb2R1Y3QtY29tcGFyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFFQSxrQ0FBYTtFQVliLDZCQUFBO0VBcUhBLDRCQUFBLEVBQTZCO0VBaEk3QjtJQUhBO01BS0csa0NBQWMsRUFBQSxFQW9RakI7RUFsUUE7SUFQQTtNQVNHLGtDQUFjO01BQ2QscUNBQWlCO01BQ2pCLG9DQUFnQjtNQUNoQixrQ0FBYyxFQUFBLEVBNlBqQjtFQXpRQTtJQWlCYSx3Q0FBd0M7SUFDakQsMkNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixtQ0FBbUMsRUFBQTtFQXBCdkM7TUFzQkksOEJBQThCO01BQzlCLGlCQUFpQjtNQUNqQixrQ0FBa0M7TUFDbEMsZ0NBQWdDO01BQ2hDLHFDQUFxQztNQUNyQywrQkFBOEI7TUFDZixrQ0FBa0M7TUFDakQsZ0NBQWdDLEVBQUE7RUE3QnBDO01BaUNJLDhCQUE2QixFQUFBO0VBakNqQztRQXNDUyxxQ0FBb0MsRUFBQTtFQXRDN0M7VUF5Q08sa0NBQWtDO1VBQ2xDLGdCQUFnQjtVQUNoQixnQ0FBa0M7VUFDbEMsb0RBQW9EO1VBQ3BELHNCQUFzQjtVQUN0Qix5QkFBeUIsRUFBQTtFQTlDaEM7VUFpRE0sOEJBQThCO1VBQzlCLHlCQUF5QjtVQUN6QixzQkFBcUIsRUFBQTtFQW5EM0I7WUFzRFMsa0NBQWtDO1lBQ1YsZ0NBQWdDO1lBQ3hELGlDQUFnQyxFQUFBO0VBeER6QztZQTJENkIsWUFBWSxFQUFBO0VBM0R6QztZQWtFYSxrQ0FBa0M7WUFDUixxQ0FBb0MsRUFBQTtFQW5FM0U7Y0FzRWEsa0NBQW1DLEVBQUE7RUF0RWhEO2dCQXlFYywrQkFBOEI7Z0JBQzlCLHFCQUFvQixFQUFBO0VBMUVsQztZQW9GTyxxQ0FBb0M7WUFDcEMsa0NBQWtDO1lBQ1YsZ0NBQWdDO1lBQ3hELGlCQUFhLEVBQUE7RUF2RnBCO2NBeUZRLFlBQVcsRUFBQTtFQXpGbkI7WUE2Rlksa0NBQWtDO1lBQ2xDLGdDQUFpQyxFQUFBO0VBOUY3QztjQWlHYSwrQkFBK0IsRUFBQTtFQWpHNUM7WUF3R2dCLGtDQUFrQztZQUN4QyxnQkFBZ0I7WUFDaEIsZ0NBQWdDO1lBQ2hDLGlDQUFpQztZQUNqQywrQkFBK0IsRUFBQTtFQTVHekM7WUFnSGdCLGNBQWM7WUFDcEIsa0NBQWtDO1lBQ2xDLGdCQUFnQjtZQUNoQixnQ0FBZ0M7WUFDaEMsNkJBQTZCLEVBQUE7RUFwSHZDO1lBeUhXLGtDQUFrQztZQUNyQyxnQkFBZ0I7WUFDaEIsa0NBQW1DO1lBQ2hDLCtCQUErQixFQUFBO0VBNUgxQztJQXdJRyxrQ0FBaUMsRUFBQTtFQXhJcEM7SUEySVEscUNBQXFDO0lBQ3ZDLGdCQUFnQjtJQUNuQix5Q0FBNEM7SUFDNUMsbUJBQWtCO0lBQ2xCLGdCQUFlO0lBQ2YsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxrQ0FBa0M7SUFDbEMsa0NBQWlDLEVBQUE7RUFHaEM7TUF0Sko7UUF3SlMsWUFBWTtRQUNNLGNBQWEsRUFBQSxFQVFwQztFQUxBO01BNUpKO1FBOEpTLFdBQVc7UUFDTyxjQUFhLEVBQUEsRUFFcEM7RUFqS0o7TUFvS0ksa0JBQWtCO01BQ2xCLHdCQUF3QjtNQUN4QiwwQkFBMkI7TUFDM0Isa0NBQW1DO01BQ25DLGNBQWM7TUFDZCxlQUFjLEVBQUE7RUF6S2xCO01BNktPLDZCQUE0QixFQUFBO0VBN0tuQztRQStLWSxxQ0FBcUM7UUFDckMsZ0JBQWdCO1FBQ2hCLG1CQUFrQjtRQUN4Qix1QkFBdUIsRUFBQTtFQWxMN0I7VUFxTE0sa0NBQWlDO1VBQ2pDLHFDQUFxQztVQUNyQyxrQ0FBaUM7VUFDakMsZ0JBQWdCO1VBQ2hCLHFCQUFvQixFQUFBO0VBQ0Q7WUExTHpCO2NBNEw0Qiw2Q0FBMkMsRUFBQSxFQUVqRTtFQTlMTjtRQW9NYSxnQ0FBZ0MsRUFBQTtFQXBNN0M7VUFzTU0sK0JBQThCLEVBQUE7RUF0TXBDO1FBOE1NLHFDQUFxQztRQUNyQywrQkFBOEI7UUFDOUIsZ0JBQWUsRUFBQTtFQWhOckI7UUFtTk0scUNBQXFDO1FBQ2pDLGNBQWM7UUFDakIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQiw2QkFBNkIsRUFBQTtFQXZOcEM7UUEyTksscUNBQXFDO1FBQ3JDLGlCQUFhO1FBQ1gsd0JBQXdCO1FBQ04sa0NBQWlDLEVBQUE7RUFDbEQ7VUEvTlI7WUFpT08sOEJBQWdCLEVBQUEsRUFFbEI7RUFuT0w7SUF5T0MscUNBQXFDO0lBQ3JDLGtDQUFpQyxFQUFBO0VBMU9sQztNQTZPRSxxQ0FBcUM7TUFDckMsbUJBQWtCO01BQ2xCLGtDQUFrQztNQUN6QixnQkFBZ0I7TUFDekIsOEJBQThCO01BQzlCLCtCQUFnQztNQUNoQyxrQ0FBa0M7TUFDbEMsZ0NBQStCLEVBQUE7RUFwUGpDO01BdVBLLHFDQUFxQyxFQUFBO0VBQ3pDO1FBeFBEO1VBMFBLLGtDQUFrQyxFQUFBLEVBWXJDO0VBdFFGO1FBOFBJLDhCQUE2QjtRQUM3QixrQ0FBaUMsRUFBQTtFQUNqQztVQWhRSjtZQWtRTSxrQ0FBa0M7WUFDbEMsbURBQWtELEVBQUEsRUFFbEQiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWNvbXBhcmUvcHJvZHVjdC1jb21wYXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBpb24tY29udGVudFxyXG57ICBcclxuXHQtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTFweClcclxuXHR7XHJcblx0ICAgLS1wYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHR9XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdHtcclxuXHQgICAtLXBhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdCAgIC0tcGFkZGluZy1ib3R0b206dmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0ICAgLS1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdCAgIC0tcGFkZGluZy1lbmQ6dmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0fVxyXG5cdC8qIFByb2R1Y3QgQ29tcGFyaXNvbiBTdGFydCAqL1xyXG5cdFx0IFtwcm9kdWN0LWNvbXBhcmlzb25dXHJcblx0XHQgeyAgICAgIFxyXG5cdFx0ICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsLjA4KTtcclxuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTMwKTtcclxuXHRcdFx0ICAgIFtoZWFkaW5nLXRpdGxlXSB7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0yMCk7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0yMik7XHJcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmV5KTtcclxuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCAjZTVlNWU1IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdC50YWJsZS1yZXNwb25zaXZlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0yMCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC5jb21wYXJlLXRhYmxlIFxyXG5cdFx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdFx0IHRyXHJcblx0XHRcdFx0XHRcdCB7ICBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0IHRoIFxyXG5cdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoXHQgLS1pb24tY29sb3ItZGFya2dyZXkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTgpIHZhcigtLWlvbi1wYWRkaW5nLTI1KTtcclxuXHRcdFx0XHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0XHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0ZCB7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMjApO1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcblx0XHRcdFx0XHRcdFx0dmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG5cdFx0XHRcdFx0XHRcdHBcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHQgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTIyKTtcclxuXHRcdFx0XHRcdFx0XHRcdCAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlvbi1pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHRcdFx0W3Byb2R1Y3RdICAgXHJcblx0XHRcdFx0XHRcdFx0eyAgIFxyXG5cdFx0XHRcdFx0XHRcdFtwcm9kdWN0LWluZm9dXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCBbbmFtZV1cclxuXHRcdFx0XHRcdFx0XHRcdFx0IHsgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1x0XHRcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBjb2xvcjogdmFyKCAtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICY6aG92ZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpb24tYnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0e1x0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTsgICBcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0yMik7XHJcblx0XHRcdFx0XHRcdFx0XHQtLWJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdCY6aG92ZXJ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6MC44O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRbcmVtb3ZlLWljb25dXHJcblx0XHRcdFx0XHRcdFx0eyAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgY29sb3I6IHZhciggLS1pb24tY29sb3ItZGFya2dyZXkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0IFtmaWxsZWRdXHJcblx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3IteWVsbG93Mik7XHJcblx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRbcHJvZHVjdC1wcmljZV1cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHQgW3ByaWNlXVxyXG5cdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMzApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLTgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcclxuXHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHQgW3ByaWNlLWJlZm9yZS1kaXNjb3VudF1cclxuXHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgY29sb3I6ICNEM0QzRDM7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMzApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcblx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRbaW4tc3RvY2tdXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206ICB2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gXHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdCAgIH1cclxuXHRcdCB9XHJcblx0LyogUHJvZHVjdCBDb21wYXJpc29uIEVuZHMgKi9cclxuXHRbbW9iLXByb2R1Y3QtY29tcGFyaXNvbl1cclxuXHR7ICBbcHJvZHVjdHNdXHJcblx0XHR7XHJcblx0XHRcdFxyXG5cdFx0XHRcdGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdH1cclxuXHRcdGlvbi1jYXJkXHJcblx0XHR7ICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0ICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIHZhciggIC0taW9uLWNvbG9yLWx0Z3JleSk7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTpub25lO1xyXG5cdFx0XHRcdGJvcmRlci10b3A6bm9uZTtcclxuXHRcdFx0XHRtYXJnaW46IC0xcHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTApO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0cGFkZGluZy10b3A6dmFyKC0taW9uLXBhZGRpbmctMTApO1xyXG5cdFx0XHRcdGltZ1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0ICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0ICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0W2Nsb3NlLWljb25dXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0dG9wOiB2YXIoLS1pb24tdmFsdWUtMTApO1xyXG5cdFx0XHRcdFx0cmlnaHQ6ICB2YXIoLS1pb24tdmFsdWUtMTApO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAgdmFyKC0taW9uLWZvbnQtc2l6ZS0xOCk7XHJcblx0XHRcdFx0XHRjb2xvcjogI2IyYjJiMjtcclxuXHRcdFx0XHRcdGN1cnNvcjpwb2ludGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24tY2FyZC1jb250ZW50XHJcblx0XHRcdFx0eyAgIFxyXG5cdFx0XHRcdCAgICBwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTUpO1xyXG5cdFx0XHRcdFx0aDJcclxuXHRcdFx0XHRcdHsgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTsgXHJcblx0XHRcdFx0XHQgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHRcclxuXHRcdFx0XHRcdCAgICAgICAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG5cdFx0XHRcdFx0XHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1x0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGFcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcclxuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1x0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0XHQgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMikhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHQgIH1cdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQmW3JhdGluZ11cclxuXHRcdFx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdFx0ICBheyAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmV5KTtcclxuXHRcdFx0XHRcdFx0XHQgIGlvbi1pY29ue1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci15ZWxsb3cyKTtcclxuXHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFtwcm9kdWN0LXByaWNlXVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRbcHJpY2VdXHJcblx0XHRcdFx0XHRcdHtmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcclxuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDo3MDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0W3ByaWNlLWJlZm9yZS1kaXNjb3VudF1cclxuXHRcdFx0XHRcdFx0e2ZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0ICAgIGNvbG9yOiAjRDNEM0QzOyAgIFxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlvbi1idXR0b25cclxuXHRcdFx0XHRcdHtmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHQtLWJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHRcdFx0ICBoZWlnaHQ6IHZhcigtLWlvbi13aC0yOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHQgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0XHQgIC0tYm9yZGVyLXJhZGl1czogNHB4IWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRbZGVzY3JpcHRpb25dXHJcblx0e1xyXG5cdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFxyXG5cdFx0W3NlY3Rpb24taGVhZF1cclxuXHRcdHtmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNlZmVmZWY7XHJcblx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcclxuXHRcdFx0bWFyZ2luLXRvcDogIHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrZ3JleSk7XHJcblx0XHR9XHJcblx0XHRpb24tY2FyZCBcclxuXHQgICAge2ZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHR7XHJcblx0XHQgICAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcclxuXHRcdH1cclxuXHRcdCAgcFx0XHJcblx0XHQgIHtcclxuXHRcdFx0ICBwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTE1KTtcclxuXHRcdFx0ICBtYXJnaW4tYm90dG9tOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdCAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KVxyXG5cdFx0XHQgIHtcclxuXHRcdFx0XHQgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdCAgIHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctMTApIHZhcigtLWlvbi1wYWRkaW5nLTUpO1xyXG5cdFx0XHQgIH1cclxuXHQgICAgXHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcbn0iXX0= */"

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