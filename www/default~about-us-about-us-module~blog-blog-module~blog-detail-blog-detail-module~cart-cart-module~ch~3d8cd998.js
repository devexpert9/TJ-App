(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~about-us-about-us-module~blog-blog-module~blog-detail-blog-detail-module~cart-cart-module~ch~3d8cd998"],{

/***/ "./src/app/header/header.module.ts":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPageModule", function() { return HeaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _header_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.page */ "./src/app/header/header.page.ts");







var routes = [
    {
        path: '/header',
        component: _header_page__WEBPACK_IMPORTED_MODULE_6__["HeaderPage"]
    }
];
var HeaderPageModule = /** @class */ (function () {
    function HeaderPageModule() {
    }
    HeaderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_header_page__WEBPACK_IMPORTED_MODULE_6__["HeaderPage"]],
            exports: [_header_page__WEBPACK_IMPORTED_MODULE_6__["HeaderPage"]]
        })
    ], HeaderPageModule);
    return HeaderPageModule;
}());



/***/ }),

/***/ "./src/app/header/header.page.html":
/*!*****************************************!*\
  !*** ./src/app/header/header.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"grey2\" text-uppercase style=\"background: var(--ion-color-grey2) !important;\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n     \t<img  class=\"ion-hide-lg-up\"  src=\"assets/images/sign-logo.png\" width=\"80px\"/>\n    </ion-title>\n   <!--  <ion-buttons slot=\"end\" >\n          <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n       <ion-buttons slot=\"end\">\n          <ion-icon name=\"pin\"></ion-icon>\n    </ion-buttons> -->\n      <!-- <ion-buttons slot=\"end\" >\n\t        <ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\t </ion-buttons> -->\n  <!--/ion-toolbar>\n        <!-- <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n          <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n          <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n          <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n          <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t    </div> -->\n<!--/ion-header-->\n<div class=\"cont-shtf\">\n\t<header class=\"header-pos headercusnew\">\n         <div class=\"header-top\">\n            <nav class=\"navbar navbar-expand-md navbar-light\">\n               <div class=\"navbar-brand\" href=\"javascript:void(0)\">\n                 <div class=\"logo\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/blog\"><img src=\"assets/img/logo.png\" alt=\"brand-logo\"></a>\n\t\t\t\t</div>\n               </div>\n              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n              </button>\n\n              <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                <div class=\"search-container\">\n                  <select [(ngModel)]=\"searchType\" style=\"line-height: 16px;opacity: .7;\">\n                    <option value=\"all\">All</option>\n                    <option value=\"category\">Category</option>\n                    <option value=\"product\">Product</option>\n                    <option value=\"people\">People</option>\n                  </select>\n                  <!-- <div class=\"dropdown btn-strsf\">\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                      Select Here\n                    </button>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                      <a class=\"dropdown-item\" href=\"#\">All</a>\n                      <a class=\"dropdown-item\" href=\"#\">Category</a>\n                      <a class=\"dropdown-item\" href=\"#\">Product</a>\n                      <a class=\"dropdown-item\" href=\"#\">People</a>\n                    </div>\n                  </div> -->\n\n                  <!-- <div id=\"dd\" class=\"wrapper-dropdown-3\" tabindex=\"1\">\n                    <span>Transport</span>\n                    <ul class=\"dropdown\">\n                      <li><a href=\"#\"><i class=\"icon-envelope icon-large\"></i>Classic mail</a></li>\n                      <li><a href=\"#\"><i class=\"icon-truck icon-large\"></i>UPS Delivery</a></li>\n                      <li><a href=\"#\"><i class=\"icon-plane icon-large\"></i>Private jet</a></li>\n                    </ul>\n                  </div> -->\n\n                  <input [(ngModel)]=\"searchTerm\" search-field placeholder=\"Search here...\" />\n        \t\t\t\t  <a class=\"search-button\" href=\"javascript:void(0)\" (click)=\"search()\">\n        \t\t\t\t\t<i class=\"fa fa-search\"></i>\n        \t\t\t\t\t</a>\n\n        \t\t\t\t</div>\n                <ul class=\"navbar-nav ml-5 nav-top-menu-ul\">\n                  <li class=\"nav-item\">\n                    <a  routerLink=\"/blog\" class=\"nav-link tooltip-item\" href=\"javascript:void(0)\" data-tooltip=\"News Feed\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"css-i6dzq1\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg></a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link tooltip-item\" routerLink=\"/home\" data-tooltip=\"Shop\">\n                      <svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"css-i6dzq1\">\n                        <path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path>\n                        <line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line>\n                        <path d=\"M16 10a4 4 0 0 1-8 0\"></path>\n                      </svg>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\" *ngIf=\"showSeller == 'false'\">\n                    <a class=\"nav-link tooltip-item\" routerLink=\"/trending\" data-tooltip=\"Trending\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"css-i6dzq1\"><polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"></polyline><polyline points=\"17 6 23 6 23 12\"></polyline></svg></a>\n                  </li>\n\n                  <li class=\"nav-item\"  *ngIf=\"showSeller == 'false'\">\n                    <div class=\"nav-item dropdown notification-dropdown\">\n                      <a class=\"nav-link tooltip-item\" routerLink=\"/wishlist\" data-tooltip=\"Wishlist\">\n                        <svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"css-i6dzq1\"><path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path></svg>\n                      </a>\n                    </div>\n                  </li> \n\n                  <li class=\"nav-item\" *ngIf=\"showSeller == 'true'\">\n                    <div class=\"nav-item dropdown notification-dropdown\">\n                      <a class=\"nav-link tooltip-item\" href='https://dev.indiit.solutions/TJ/vendor-html/' data-tooltip=\"Dashboard\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\" class=\"bi bi-speedometer\" viewBox=\"0 0 16 16\">\n                          <path d=\"M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z\"/>\n                          <path fill-rule=\"evenodd\" d=\"M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z\"/>\n                        </svg>\n                      </a>\n                    </div>\n                  </li>\n\n                  <!-- <li class=\"nav-item\" *ngIf=\"isSeller == 'yes'\">\n                    <div class=\"nav-item dropdown notification-dropdown\">\n                      <a class=\"nav-link tooltip-item\" href='https://dev.indiit.solutions/TJ/vendor-html' data-tooltip=\"Dashboard\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-speedometer2\" viewBox=\"0 0 16 16\">\n                        <path d=\"M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z\"/>\n                        <path fill-rule=\"evenodd\" d=\"M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z\"/>\n                      </svg>\n                      </a>\n                    </div>\n                  </li> -->\n\n                  <li class=\"nav-item\" *ngIf=\"is_logged_in != 'false'\">\n                    <!-- <a class=\"nav-link tooltip-item\" routerLink=\"/wishlist\"  data-tooltip=\"Wishlist\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"css-i6dzq1\"><path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path></svg></a> -->\n                    <div class=\"nav-item dropdown notification-dropdown\">\n                      <a class=\"nav-link tooltip-item\" routerLink=\"/follow\" data-tooltip=\"Follow\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\" class=\"bi bi-person-plus\" viewBox=\"0 0 16 16\">\n                          <path d=\"M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z\"/>\n                          <path fill-rule=\"evenodd\" d=\"M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z\"/>\n                        </svg>\n                      </a>\n                    </div>\n                  </li>\n                  <!-- <li class=\"nav-item\">\n                    <a class=\"nav-link tooltip-item\" href=\"javascript:void(0)\" data-tooltip=\"Dashboard\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"css-i6dzq1\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline></svg></a>\n                  </li> -->\n                </ul>\n              </div>\n\n        <ul class=\"navbar-nav ml-auto\">\n\t\t      <div class=\"nav-item dropdown notification-dropdown\">\n\t\t\t\t\t\t<a class=\"nav-link notification  mr-1 navlink dropdown-toggle\" data-toggle=\"dropdown\" href=\"javascript:void(0)\">\n\t\t\t\t      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\">\n                <path d=\"M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0\"></path>\n              </svg>\n\t\t\t\t\t\t  <span class=\"badge badge-pill badge-primary notification-badge\">1</span>\n\t\t\t\t    </a>\n\t\t\t\t    <ul class=\"dropdown-menu onhover-show-div p-0\">\n              <li>Notification <span class=\"badge badge-pill badge-primary pull-right\">1</span></li>\n              <li>\n                <div class=\"media\">\n                  <div class=\"media-body\">\n                    <h6 class=\"mt-0\">Your order ready for Ship..!</h6>\n                    <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetuer.</p>\n                  </div>\n                </div>\n              </li>\n\n              <li class=\"view-all-notifications\">\n                <a [routerLink]=\"'/notification'\" href=\"javascript:void(0)\">\n                  See More\n                </a>\n              </li>\n            </ul>\n\t\t\t\t\t</div>\n\n\t\t      <div class=\"nav-item dropdown notification-dropdown\">\n\t\t\t\t    <a class=\"nav-link notification  mr-1 navlink dropdown-toggle\" data-toggle=\"dropdown\" href=\"javascript:void(0)\">\n\t\t\t\t      <svg class=\"\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-message-square\">\n                <path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>\n              </svg>\n\t\t\t\t\t\t  <span class=\"badge badge-pill badge-primary notification-badge\">1</span>\n\t\t\t\t    </a>\n\t\t\t\t    \n            <ul class=\"dropdown-menu onhover-show-div p-0\">\n              <li>\n                Messages <span class=\"badge badge-pill badge-primary pull-right\">1</span>\n              </li>\n              <li>\n                <div class=\"media\">\n\t\t\t\t\t\t\t\t\t<div class=\"message-item-img\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/post-4.jpg\">\n\t\t\t\t\t\t\t\t\t</div>\n                  <div class=\"media-body\">\n                      <h6 class=\"mt-0\">Jhon Smith</h6>\n                      <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetuer.</p>\n                  </div>\n                </div>\n              </li>\n              <li class=\"view-all-notifications\">\n                <a routerLink=\"/messages\">See More</a>\n              </li>\n            </ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n          <div class=\"nav-item dropdown notification-dropdown\">\n\t\t\t\t\t\t<a class=\"nav-link notification  mr-1 navlink dropdown-toggle\" data-toggle=\"dropdown\" [routerLink]=\"'/order-history'\">\n\t\t\t\t\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-box\"><path d=\"M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z\"></path><polyline points=\"2.32 6.16 12 11 21.68 6.16\"></polyline><line x1=\"12\" y1=\"22.76\" x2=\"12\" y2=\"11\"></line></svg>\n\t\t\t\t\t\t  <span class=\"badge badge-pill badge-primary notification-badge\">\n                {{ordersLength}}\n              </span>\n\t\t\t\t\t   </a>\n\t\t\t\t\t</div>\n\n          <div class=\"nav-item dropdown notification-dropdown\" *ngIf=\"showSeller != 'true'\">\n            <a class=\"nav-link notification  mr-1 navlink dropdown-toggle\" data-toggle=\"dropdown\" routerLink=\"/cart\">\n              <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n              width=\"24px\" height=\"24px\" viewBox=\"0 0 40 36\" style=\"enable-background:new 0 0 40 36;\" xml:space=\"preserve\">\n              <g id=\"Page-1_4_\" sketch:type=\"MSPage\">\n              <g id=\"Desktop_4_\" transform=\"translate(-84.000000, -410.000000)\" sketch:type=\"MSArtboardGroup\">\n              <path id=\"Cart\" sketch:type=\"MSShapeGroup\" class=\"st0\" d=\"M94.5,434.6h24.8l4.7-15.7H92.2l-1.3-8.9H84v4.8h3.1l3.7,27.8h0.1\n              c0,1.9,1.8,3.4,3.9,3.4c2.2,0,3.9-1.5,3.9-3.4h12.8c0,1.9,1.8,3.4,3.9,3.4c2.2,0,3.9-1.5,3.9-3.4h1.7v-3.9l-25.8-0.1L94.5,434.6\"\n              />\n              </g>\n              </g>\n              </svg>\n              <span class=\"badge badge-pill badge-primary notification-badge\"style=\"top: -5px;\">\n                {{cartLength}}\n              </span>\n              <span class=\"badge badge-pill badge-primary notification-badge\" style=\"top: 36px;width: auto;right:-12px;padding: 3px 9px;text-align: center;\" *ngIf=\"is_logged_in == 'true'\">\n                ${{cart_price}}\n              </span>\n            </a>\n              <!-- <ul class=\"dropdown-menu onhover-show-div p-0\" >\n                <li>\n                  Cart <span class=\"badge badge-pill badge-primary pull-right\">{{cartLength}}</span>\n                  <br/>\n                  <a>View All</a>\n                </li>\n                <li *ngFor=\"let item of cart; let c_index = index \">\n                    <div class=\"media\">\n                        <div class=\"media-body\">\n                          <a entry-thumbnail routerLink=\"/product-details/{{item.product_id}}\">\n                            <img *ngIf=\"errors.indexOf(item.product_image) >= 0\" src=\"assets/images/products/no_image.svg\" style=\"float: left;width: 50px;height:50px;border: 1px solid #c3c3c3;margin: 0 11px 0 0;\">\n                            \n                            <img *ngIf=\"errors.indexOf(item.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{item.product_image}}\" alt=\"{{item.product_name}}\" style=\"float: left;width: 50px;height: 50px;border: 1px solid #c3c3c3;margin: 0 11px 0 0;\">\n                          </a>\n                          <div style=\"float:left\">\n                            <h4 cart-product-description style=\"float:left; width:100%\">\n                              <a routerLink=\"/product-details/{{item.product_id}}\">{{item.product_name}}</a>\n                            </h4>\n\n                            <h5 cart-product-description style=\"float:left; width:100%\">\n                              ${{item.product_sale_price}}\n                            </h5>\n                          </div>\n                        </div>\n                    </div>\n                </li>\n              </ul> -->\n          </div>\n          \n          <div class=\"nav-item dropdown user-profile-dropdown\" *ngIf=\"is_logged_in == 'true'\">\n            <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"nav-link navlink dropdown-toggle user-action\">\n               <img src=\"{{base_url}}{{user_image}}\" class=\"avatar\" alt=\"\"> \n               {{user_name}} <b class=\"caret\"></b>\n             </a>\n            <div class=\"dropdown-menu\">\n              <a routerLink=\"/your-account\" href=\"javascript:void(0)\" class=\"dropdown-item\">\n                <i class=\"fa fa-user-o\"></i> See Your Profile\n              </a>\n               \n              <a routerLink=\"/privacy-policy\" href=\"javascript:void(0)\" class=\"dropdown-item\">\n                <i class=\"fa fa-sliders\"></i> Settings/Privacy\n              </a>\n\n              <a routerLink=\"/help\" class=\"dropdown-item\">\n                <i class=\"fa fa-sliders\"></i> Help\n              </a>\n              \n              <div *ngIf=\"is_logged_in == 'true'\">\n                <a href=\"javascript:void(0)\" (click)=\"logout()\" class=\"dropdown-item\">\n                  <i class=\"fa fa-sign-out\"></i> Logout\n                </a> \n              </div>\n            </div>\n          </div>\n\t\t      \n          <div *ngIf=\"is_logged_in == 'false'\">\n\t\t\t\t    <a routerLink=\"/login\" class=\"nav-link tooltip-item btn-logib\" href=\"javascript:void(0)\" data-tooltip=\"Login Here\">\n\t\t\t\t\t\t  <ion-icon name=\"person\"></ion-icon>\n\t\t\t\t    </a>\n\t\t      </div>\n        </ul>\n      </nav>\n\t\t\t<div class=\"header-top-bottom\">\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t   <div class=\"row align-items-center\">\n\t\t\t\t\t  <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\n\t\t\t\t\t\t <div class=\"flexcus\">\n\t\t\t\t\t\t\t<div class=\"vendor-profile-img1\">\n\t\t\t\t\t\t\t  <!-- <img src=\"assets/img/vendorlogo.png\" alt=\"\"> -->\n\t\t\t\t\t\t\t  <span><!-- Yabli.Store --></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\n              <div class=\" ml-4\" style=\"background: #73bce5;display: flex;align-items: center;padding: 3px;border-radius: 5px;right: 7px;top: -45px;position: absolute;color: #fff;font-size: 16px;\" *ngIf=\"is_logged_in != 'false'\">\n                <button _ngcontent-hhx-c0=\"\" class=\"post-btn\" data-ripple=\"\" type=\"button\" routerLink='/register-seller' *ngIf=\"isSeller == 'no'\">Become A Seller</button>\n\n                <span *ngIf=\"showSeller == 'false'\">\n                  <button _ngcontent-hhx-c0=\"\" class=\"post-btn\" data-ripple=\"\" type=\"button\" (click)='goToSeller()' *ngIf=\"isSeller == 'yes'\">\n                    Switch to seller account\n                  </button>\n                </span>\n\n                <span *ngIf=\"showSeller == 'true'\">\n                  <button _ngcontent-hhx-c0=\"\" class=\"post-btn\" data-ripple=\"\" type=\"button\" (click)='goToBuyer()' *ngIf=\"isSeller == 'yes'\">\n                    Switch to buyer account\n                  </button>\n                </span>\n\n              </div>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t  </div>\n\t\t\t\t   </div>\n\t\t\t\t</div>\n\t\t\t </div>\n         </div>\n         <!-- <div class=\"header-top-menu sticker\">\n            <div class=\"container-fluid\">\n               <div class=\"row\">\n                  <div class=\"col-lg-12\">\n                     <div class=\"top-main-menu\">\n                        <div class=\"main-menu\">\n                           <nav id=\"mobile-menu\">\n                              <ul>\n                                 <li class=\"active\"><a routerLink=\"/home\" href=\"javascript:void(0)\">Posts</a></li>\n                                 <li ><a (click)=\"search()\">Products</a></li>\n                                 <li><a routerLink=\"/reviews\" href=\"javascript:void(0)\">Reviews</a></li>\n                                 <li><a routerLink=\"/about-us\" href=\"javascript:void(0)\">About</a></li>\n                              </ul>\n                           </nav>\n                        </div>\n\n                        <div class=\"header-call-action menu-right\">\n                            <ul class=\"menu-right-ul\">\n                              <li><a target=\"_blank\" href=\"{{socialLinks?.facebook.search('http') >= 0 ? '' : 'http://'}}{{socialLinks?.facebook}}\">\n                              <i class=\"fa fa-facebook-square\"></i></a></li>\n                              <li><a href=\"javascript:void(0)\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></li>\n                              <li><a href=\"{{socialLinks?.facebook.search('http') >= 0 ? '' : 'http://'}}{{socialLinks?.twitter}}\" target=\"_blank\"><i class=\"fa fa-twitter-square\"></i></a></li>\n                              <li class=\"menu-right-li-share\">\n                              <ion-select [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Flag\" class=\"mr-20\">\n                              <ion-select-option value=\"Flag-1\">Flag-1</ion-select-option>\n                              <ion-select-option value=\"Flag-2\">Flag-2</ion-select-option>\n                              <ion-select-option value=\"Flag-3\">Flag-3</ion-select-option>\n                              <ion-select-option value=\"Flag-4\">Flag-4</ion-select-option>\n                              </ion-select>\n                              </li>\n                            </ul>\n                        </div>\n                     </div>\n                  </div>\n                  <div class=\"col-12 d-block d-lg-none\">\n                     <div class=\"mobile-menu\"></div>\n                  </div>\n               </div>\n            </div>\n         </div> -->\n      </header>\n</div>\n<!-- HEADER : END  -->\n\n<ion-card class=\"video_call_div\" style=\"display: none;\">\n  <ion-card-header>\n    <ion-card-title>{{incoming_call_title}}</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n   <ion-button (click)=\"answerVideo()\" color=\"darked\">Answer</ion-button>\n   <ion-button (click)=\"rejectCall()\" color=\"darked\">Reject</ion-button>\n  </ion-card-content>\n</ion-card>\n"

/***/ }),

/***/ "./src/app/header/header.page.scss":
/*!*****************************************!*\
  !*** ./src/app/header/header.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  display: none !important; }\n\nion-header ion-toolbar ion-menu-button {\n  height: 35px;\n  position: inherit;\n  top: inherit;\n  right: inherit;\n  transition: inherit;\n  transition-delay: .1s; }\n\nion-header ion-toolbar ion-menu-button img {\n    max-width: 24px; }\n\nion-header ion-toolbar ion-title {\n  font-weight: 700; }\n\nion-header ion-toolbar ion-buttons {\n  font-size: 20px; }\n\nion-header ion-toolbar ion-buttons[mar-10] {\n    margin-right: 10px; }\n\n@media (min-width: 768px) {\n  ion-header {\n    display: none; } }\n\n@media (max-width: 767px) {\n  header {\n    display: none; } }\n\n#Cart {\n  fill: white; }\n\n.search-container input {\n  background: transparent;\n  display: inline-block;\n  box-shadow: none !important;\n  border: transparent;\n  padding-left: 15px;\n  width: 100%; }\n\n.search-container select {\n  text-align: center;\n  background: transparent;\n  border: transparent;\n  font-family: 'Open Sans', sans-serif; }\n\n.search-container {\n  border-radius: 50px;\n  border: 1px solid var(--ion-color-primary);\n  background: transparent;\n  color: var(--ion-color-primary);\n  padding: 0 2px;\n  --padding-start: 20px;\n  --padding-end: 34px;\n  width: 290px;\n  line-height: 24px;\n  height: 38px;\n  --placeholder-color: #fff;\n  --placeholder-opacity: 1;\n  display: inline-flex; }\n\n.search-container select:focus {\n  outline: none; }\n\n.search-container .select-text {\n  min-width: 98px !important;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: #fff;\n  opacity: 1;\n  line-height: 15px; }\n\n.select-icon {\n  width: 19px;\n  height: 19px;\n  color: #fff;\n  /* background: #fff; */\n  right: -11px;\n  position: absolute; }\n\nion-select.ng-valid.md.hydrated.ng-touched.ng-dirty.ion-valid.ion-touched.ion-dirty {\n  adding: 10px 15px;\n  min-width: 95px !important;\n  overflow: visible; }\n\nion-select.ng-untouched.ng-pristine.ng-valid.ion-untouched.ion-pristine.ion-valid.md.hydrated {\n  color: #fff;\n  opacity: .9 !important;\n  width: 183px;\n  line-height: 17px; }\n\n.select-text {\n  line-height: 16px;\n  --color: #fff !important;\n  opacity: .9; }\n\n.wrapper-dropdown-3 .dropdown {\n  /* Size & position */\n  position: absolute;\n  top: 140%;\n  left: 0;\n  right: 0;\n  /* Styles */\n  background: white;\n  border-radius: inherit;\n  border: 1px solid rgba(0, 0, 0, 0.17);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n  font-weight: normal;\n  transition: all 0.5s ease-in;\n  list-style: none;\n  /* Hiding */\n  opacity: 0;\n  pointer-events: none; }\n\n.wrapper-dropdown-3 .dropdown li a {\n  display: block;\n  padding: 10px;\n  text-decoration: none;\n  color: #8aa8bd;\n  border-bottom: 1px solid #e6e8ea;\n  box-shadow: inset 0 1px 0 white;\n  transition: all 0.3s ease-out; }\n\n.wrapper-dropdown-3 .dropdown li i {\n  float: right;\n  color: inherit; }\n\n.wrapper-dropdown-3 .dropdown li:first-of-type a {\n  border-radius: 7px 7px 0 0; }\n\n.wrapper-dropdown-3 .dropdown li:last-of-type a {\n  border-radius: 0 0 7px 7px;\n  border: none; }\n\n/* Hover state */\n\n.wrapper-dropdown-3 .dropdown li:hover a {\n  background: #f3f8f8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHQSx3QkFBc0IsRUFBQTs7QUFIdEI7RUFTRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFBOztBQWR2QjtJQWlCTSxlQUFlLEVBQUE7O0FBakJyQjtFQXNCRSxnQkFBZSxFQUFBOztBQXRCakI7RUF5QkUsZUFBYyxFQUFBOztBQXpCaEI7SUE0Qkksa0JBQWlCLEVBQUE7O0FBT3JCO0VBQ0k7SUFFQyxhQUFZLEVBQUEsRUFDZjs7QUFFRjtFQUNJO0lBRUMsYUFBWSxFQUFBLEVBQ2Y7O0FBR0Y7RUFDRSxXQUFVLEVBQUE7O0FBRVo7RUFDSSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFDZDtFQUNJLGtCQUFrQjtFQUNuQix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQ25CLG9DQUFvQyxFQUFBOztBQUV4QztFQUNJLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsdUJBQXVCO0VBQ3ZCLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QscUJBQWdCO0VBQ2hCLG1CQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJBQW9CO0VBQ3BCLHdCQUFzQjtFQUN0QixvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQUE7RUFDQSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBQ3JCO0VBQ0csaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxpQkFBaUI7RUFDakIsd0JBQVE7RUFDUixXQUFXLEVBQUE7O0FBS2Y7RUFDRSxvQkFBQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFFUixXQUFBO0VBQ0EsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixxQ0FBa0M7RUFDbEMsc0NBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBRWhCLFdBQUE7RUFDQSxVQUFVO0VBQ1Ysb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksY0FBYztFQUNkLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdDQUFnQztFQUNoQywrQkFBNkM7RUFDN0MsNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSwwQkFBMEI7RUFDMUIsWUFBWSxFQUFBOztBQUdoQixnQkFBQTs7QUFFQTtFQUNJLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuJjo6YWZ0ZXJcbntcbmRpc3BsYXk6bm9uZSFpbXBvcnRhbnQ7XG59XG4gaW9uLXRvb2xiYXJcbiB7XG4gICAgaW9uLW1lbnUtYnV0dG9uXG5cdHtcblx0XHRoZWlnaHQ6IDM1cHg7XG5cdFx0cG9zaXRpb246IGluaGVyaXQ7XG5cdFx0dG9wOiBpbmhlcml0O1xuXHRcdHJpZ2h0OiBpbmhlcml0O1xuXHRcdHRyYW5zaXRpb246IGluaGVyaXQ7XG5cdFx0dHJhbnNpdGlvbi1kZWxheTogLjFzO1xuICAgICAgICBpbWdcbiAgICAgICAge1xuXHRcdCAgICBtYXgtd2lkdGg6IDI0cHg7XG5cdFx0fVx0XHRcblx0fVxuXHRpb24tdGl0bGVcblx0e1xuXHRcdGZvbnQtd2VpZ2h0OjcwMDtcblx0fSBcbiAgICBpb24tYnV0dG9uc1xuXHR7Zm9udC1zaXplOjIwcHg7XG5cdCAgJlttYXItMTBdXG5cdCAge1xuXHQgICBtYXJnaW4tcmlnaHQ6MTBweDtcblx0ICB9XG5cdH1cbiB9XG5cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaW9uLWhlYWRlclxuXHR7XG5cdCAgICBkaXNwbGF5Om5vbmU7XG5cdH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGhlYWRlclxuXHR7XG5cdCAgICBkaXNwbGF5Om5vbmU7XG5cdH1cbn1cblxuI0NhcnR7XG4gIGZpbGw6d2hpdGU7XG59XG4uc2VhcmNoLWNvbnRhaW5lciBpbnB1dCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbn0uc2VhcmNoLWNvbnRhaW5lciBzZWxlY3R7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBwYWRkaW5nOiAwIDJweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMzRweDtcbiAgICB3aWR0aDogMjkwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmY7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLnNlYXJjaC1jb250YWluZXIgc2VsZWN0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLnNlYXJjaC1jb250YWluZXIgLnNlbGVjdC10ZXh0IHtcbiAgICBtaW4td2lkdGg6IDk4cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY29sb3I6ICNmZmY7XG4gICAgb3BhY2l0eTogMTtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbn1cbi5zZWxlY3QtaWNvbiB7XG4gICAgd2lkdGg6IDE5cHg7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIC8qIGJhY2tncm91bmQ6ICNmZmY7ICovXG4gICAgcmlnaHQ6IC0xMXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1pb24tc2VsZWN0Lm5nLXZhbGlkLm1kLmh5ZHJhdGVkLm5nLXRvdWNoZWQubmctZGlydHkuaW9uLXZhbGlkLmlvbi10b3VjaGVkLmlvbi1kaXJ0eSB7XG4gICAgYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgbWluLXdpZHRoOiA5NXB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5pb24tc2VsZWN0Lm5nLXVudG91Y2hlZC5uZy1wcmlzdGluZS5uZy12YWxpZC5pb24tdW50b3VjaGVkLmlvbi1wcmlzdGluZS5pb24tdmFsaWQubWQuaHlkcmF0ZWQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG9wYWNpdHk6IC45ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDE4M3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xufVxuLnNlbGVjdC10ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogLjk7XG5cbn1cblxuXG4ud3JhcHBlci1kcm9wZG93bi0zIC5kcm9wZG93biB7XG4gIC8qIFNpemUgJiBwb3NpdGlvbiAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE0MCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcblxuICAgIC8qIFN0eWxlcyAqL1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE3KTtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgIC8qIEhpZGluZyAqL1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi53cmFwcGVyLWRyb3Bkb3duLTMgLmRyb3Bkb3duIGxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjOGFhOGJkO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlOGVhO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbn1cblxuLndyYXBwZXItZHJvcGRvd24tMyAuZHJvcGRvd24gbGkgaSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG4ud3JhcHBlci1kcm9wZG93bi0zIC5kcm9wZG93biBsaTpmaXJzdC1vZi10eXBlIGEge1xuICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMCAwO1xufVxuXG4ud3JhcHBlci1kcm9wZG93bi0zIC5kcm9wZG93biBsaTpsYXN0LW9mLXR5cGUgYSB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDdweCA3cHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4vKiBIb3ZlciBzdGF0ZSAqL1xuXG4ud3JhcHBlci1kcm9wZG93bi0zIC5kcm9wZG93biBsaTpob3ZlciBhIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmOGY4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.page.ts":
/*!***************************************!*\
  !*** ./src/app/header/header.page.ts ***!
  \***************************************/
/*! exports provided: HeaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPage", function() { return HeaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _choose_location_choose_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../choose-location/choose-location.page */ "./src/app/choose-location/choose-location.page.ts");
/* harmony import */ var _video_call_video_call_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../video-call/video-call.page */ "./src/app/video-call/video-call.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_user_globalFooService_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/user/globalFooService.service */ "./src/app/services/user/globalFooService.service.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ "./node_modules/@ionic-native/speech-recognition/ngx/index.js");











// import { IonContent, IonItem, IonLabel, IonList, IonListHeader, IonSelect, IonSelectOption, IonPage, IonItemDivider } from '@ionic/react';


var HeaderPage = /** @class */ (function () {
    function HeaderPage(cd, globalFooService, modalController, toastController, router, events, userService, socket, loadingController, speechRecognition) {
        var _this = this;
        this.cd = cd;
        this.globalFooService = globalFooService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.router = router;
        this.events = events;
        this.userService = userService;
        this.socket = socket;
        this.loadingController = loadingController;
        this.speechRecognition = speechRecognition;
        this.buttonClickeddrop = false;
        this.buttonClickedcat = false;
        this.wishLength = 0;
        this.cats_array = [];
        this.items_in_cart = '0';
        this.searchTerm = '';
        this.searchType = 'all';
        this.selected_cat = 'Categories';
        this.mob_category = 'Category';
        this.cart_price = '0.00';
        this.errors = ['', null, undefined];
        this.loading = '';
        this.isBrowser = localStorage.getItem('isBrowser');
        this.user_name = localStorage.getItem('sin_auth_user_name');
        this.user_image = 'dummy.jpg';
        this.base_url = 'http://dev.indiit.solutions/TJ/dev/dev/public/uploads/userprofile/';
        this.is_call_received = false;
        this.isStart = false;
        this.showSeller = localStorage.getItem('sellerSwitched');
        this.isSeller = '';
        this.loggedInEmail = '';
        this.allowedMimes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp'];
        this.getSellerAccount();
        this.globalFooService.getObservable().subscribe(function (data) {
            if (data.foo.page == 'afterLoginUserName') {
                _this.showSeller = localStorage.getItem('sellerSwitched');
                _this.user_image = localStorage.getItem('sin_auth_user_image');
                _this.user_name = data.foo.data.name;
                _this.user_image = data.foo.data.profile_picture;
                _this.getSellerAccount();
            }
            else if (data.foo.page == 'registerDone') {
                _this.showSeller = localStorage.getItem('sellerSwitched');
                _this.user_image = localStorage.getItem('sin_auth_user_image');
                _this.getSellerAccount();
                // localStorage.setItem('comeFrom', 're');
                //this.router.navigate(['/auto-popup']);
                // this.automaticPopup();
            }
            else if (data.foo.page == 'sellerDone') {
                _this.getSellerAccount();
            }
            else if (data.foo.page == 'orderPlaced') {
                _this.getOrders();
            }
            else if (data.foo.page == 'logout') {
                _this.is_logged_in = 'false';
                _this.ordersLength = '0';
                _this.cartLength = '0';
            }
        });
        var token = localStorage.getItem('sin_auth_token');
        this.userId = this.userService.decryptData(token, _config__WEBPACK_IMPORTED_MODULE_7__["config"].ENC_SALT);
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_7__["config"].IMAGES_URL;
        this.checkLogin();
        this.getCategories();
        this.getOrders();
        this.getTopSellingCategories();
        if (this.userId != 0) {
            localStorage.removeItem('sin_current_address');
            this.getUserDefaultAddress();
        }
        this.getCartProducts();
        this.getWishlistProducts();
        events.subscribe('call_logout:true', function (data) {
            _this.checkLogin();
        });
        events.subscribe('user_logged_in:true', function (data) {
            _this.checkLogin();
        });
        events.subscribe('current_address_changed:true', function (data) {
            _this.default_address = data;
        });
        events.subscribe('cart_updated:true', function (data) {
            _this.items_in_cart = data.items_in_cart;
            if (data.isAdd == true) {
                _this.getCartProducts();
                //this.cart_price = Number(this.cart_price) + Number(data.cart_price);
            }
            else {
                _this.cart_price = data.cart_price.toFixed(2);
            }
        });
        this.getUpdates().subscribe(function (new_call) {
            console.log('new call');
            console.log(new_call);
            _this.new_call_res = new_call;
            if (_this.new_call_res.user_id == _this.userId) {
                jquery__WEBPACK_IMPORTED_MODULE_8__(".video_call_div").show();
                _this.playAudio();
                _this.incoming_call_title = _this.new_call_res.name + ' is calling you.';
                _this.video_call_id = _this.new_call_res.video_call_id;
                _this.call_from_id = _this.new_call_res.from_id;
                var self = _this;
                console.log('calling............');
                // disconnect after 1 min if not received call
                setTimeout(function () {
                    if (self.is_call_received == false) {
                        self.stopAudio();
                        jquery__WEBPACK_IMPORTED_MODULE_8__('.video_call_div').hide();
                        self.socket.emit('video_call_not_answered', { user_id: self.userId, to_id: self.call_from_id, user_name: (self.errors.indexOf(self.user_name) >= 0 ? 'Unknown' : self.user_name) });
                    }
                }, 60000);
            }
        });
        this.getUpdatesEnded().subscribe(function (end_call) {
            console.log('end call');
            console.log(end_call);
            _this.end_call_res = end_call;
            if (_this.end_call_res.user_id == _this.userId) {
                _this.stopAudio();
                jquery__WEBPACK_IMPORTED_MODULE_8__(".video_call_div").hide();
                _this.presentToast('Call ended by ' + _this.end_call_res.name, 'success');
                _this.video_call_id = '';
                _this.events.publish('video_call_ended:true', '');
                console.log('end calling............');
            }
        });
    }
    HeaderPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('speechRecognition');
        console.log(this.speechRecognition);
        this.getSellerAccount();
        this.showSeller = localStorage.getItem('sellerSwitched');
        this.audio = new Audio();
        this.audio.src = 'assets/ringtones/ringtone_1.mp3';
        this.audio.load();
        if (localStorage.getItem('sin_auto_popup') != 'success' && this.isBrowser == 'true') {
            localStorage.setItem('sin_auto_popup', 'success');
        }
        var self;
        jquery__WEBPACK_IMPORTED_MODULE_8__('.mega-dropdown-menu').on('click', function (event) {
            jquery__WEBPACK_IMPORTED_MODULE_8__(".menu-item").removeClass('open');
            if (event.target.parentNode.id != undefined && event.target.parentNode.id != null && event.target.parentNode.id != '') {
                jquery__WEBPACK_IMPORTED_MODULE_8__("#" + event.target.parentNode.id).addClass('open');
                event.stopPropagation();
            }
        });
        if (localStorage.getItem('isBrowser') == 'false') {
            this.speechRecognition.hasPermission().then(function (hasPermission) {
                if (!hasPermission) {
                    _this.speechRecognition.requestPermission()
                        .then(function () { return console.log('Granted'); }, function () { return console.log('Denied'); });
                }
            });
        }
        else {
            var self_1 = this;
            var recognition_1 = new webkitSpeechRecognition();
            recognition_1.continuous = false;
            /*-----------------------------
            Voice Recognition
            ------------------------------*/
            // If false, the recording will stop after a few seconds of silence.
            // When true, the silence period is longer (about 15 seconds),
            // allowing us to keep recording even when the user pauses. 
            recognition_1.continuous = true;
            // This block is called every time the Speech APi captures a line. 
            recognition_1.onresult = function (event) {
                // event is a SpeechRecognitionEvent object.
                // It holds all the lines we have captured so far. 
                // We only need the current one.
                var current = event.resultIndex;
                // Get a transcript of what was said.
                var transcript = event.results[current][0].transcript;
                // Add the current transcript to the contents of our Note.
                // There is a weird bug on mobile, where everything is repeated twice.
                // There is no official solution so far so we have to handle an edge case.
                var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
                if (!mobileRepeatBug) {
                    // noteContent += transcript;
                    console.log(transcript);
                    self_1.searchTerm = transcript;
                    self_1.isStart = false;
                    recognition_1.stop();
                    self_1.callSearchFunctionApi();
                }
            };
            recognition_1.onstart = function () {
                console.log('Voice recognition activated. Try speaking into the microphone.');
            };
            recognition_1.onspeechend = function () {
                self_1.isStart = false;
                console.log('You were quiet for a while so voice recognition turned itself off.');
            };
            recognition_1.onerror = function (event) {
                if (event.error == 'no-speech') {
                    console.log('No speech was detected. Try again.');
                }
                ;
            };
            /*-----------------------------
                  App buttons and input
            ------------------------------*/
            jquery__WEBPACK_IMPORTED_MODULE_8__(document).on('click', '#start-record-btn', function (e) {
                // $('#start-record-btn').on('click', function(e) {
                // if (noteContent.length) {
                //   noteContent += ' ';
                // }
                self_1.isStart = true;
                recognition_1.start();
            });
            jquery__WEBPACK_IMPORTED_MODULE_8__(document).on('click', '#pause-record-btn', function (e) {
                // $('#pause-record-btn').on('click', function(e) {
                recognition_1.stop();
                self_1.isStart = false;
                console.log('Voice recognition paused.');
            });
            // Sync the text inside the text area with the noteContent variable.
            // noteTextarea.on('input', function() {
            //   noteContent = $(this).val();
            // })
            jquery__WEBPACK_IMPORTED_MODULE_8__('#save-note-btn').on('click', function (e) {
                recognition_1.stop();
                // if(!noteContent.length) {
                //   instructions.text('Could not save empty note. Please add a message to your note.');
                // }
                // else {
                //   // Save note to localStorage.
                //   // The key is the dateTime with seconds, the value is the content of the note.
                //   saveNote(new Date().toLocaleString(), noteContent);
                //   // Reset variables and update UI.
                //   noteContent = '';
                //   renderNotes(getAllNotes());
                //   noteTextarea.val('');
                //   instructions.text('Note saved successfully.');
                // }
                console.log(e);
            });
        }
    };
    HeaderPage.prototype.ionViewDidEnter = function () {
        if (localStorage.getItem('comeFrom') == 'register') {
            this.router.navigate(['/interest']);
            return;
        }
        this.showSeller = localStorage.getItem('sellerSwitched');
        console.log('Entered');
        this.user_image = localStorage.getItem('sin_auth_user_image');
        var token = localStorage.getItem('sin_auth_token');
        // alert(token);
        if (token != '' && token != null && token != undefined) {
            this.is_logged_in = 'true';
        }
        else {
            this.is_logged_in = 'false';
        }
        this.getSellerAccount();
    };
    HeaderPage.prototype.goToSeller = function () {
        localStorage.setItem('sellerSwitched', 'true');
        this.showSeller = localStorage.getItem('sellerSwitched');
        // window.location.replace("https://dev.indiit.solutions/TJ/vendor-html/");
    };
    HeaderPage.prototype.goToBuyer = function () {
        localStorage.setItem('sellerSwitched', 'false');
        this.showSeller = localStorage.getItem('sellerSwitched');
        // window.location.replace("https://dev.indiit.solutions/TJ/vendor-html/");
    };
    HeaderPage.prototype.cartpage = function () {
        this.router.navigate(['/cart']);
    };
    HeaderPage.prototype.playAudio = function () {
        this.audio.play();
        this.audio.loop = true;
    };
    HeaderPage.prototype.stopAudio = function () {
        this.audio.pause();
    };
    HeaderPage.prototype.getUpdates = function () {
        var self = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_11__["Observable"](function (observer) {
            self.socket.on('new_video_call', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    HeaderPage.prototype.getUpdatesEnded = function () {
        var self = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_11__["Observable"](function (observer) {
            self.socket.on('video_call_ended_by_admin', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    HeaderPage.prototype.rejectCall = function () {
        this.is_call_received = true;
        this.stopAudio();
        jquery__WEBPACK_IMPORTED_MODULE_8__('.video_call_div').hide();
        this.socket.emit('video_call_rejected', { user_id: this.userId, to_id: this.call_from_id, user_name: (this.errors.indexOf(this.user_name) >= 0 ? 'Unknown' : this.user_name) });
    };
    HeaderPage.prototype.answerVideo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.is_call_received = true;
                        this.socket.emit('video_call_answered', { user_id: this.userId, to_id: this.call_from_id, user_name: (this.errors.indexOf(this.user_name) >= 0 ? 'Unknown' : this.user_name) });
                        this.stopAudio();
                        jquery__WEBPACK_IMPORTED_MODULE_8__('.video_call_div').hide();
                        return [4 /*yield*/, this.modalController.create({
                                component: _video_call_video_call_page__WEBPACK_IMPORTED_MODULE_4__["VideoCallPage"],
                                componentProps: { video_call_id: this.video_call_id },
                                backdropDismiss: false
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            _this.socket.emit('video_call_ended_by_user', { user_id: _this.userId, to_id: _this.call_from_id, user_name: (_this.errors.indexOf(_this.user_name) >= 0 ? 'Unknown' : _this.user_name) });
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HeaderPage.prototype.getUserDefaultAddress = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId }, 'getUserDefaultAddress').subscribe(function (result) {
            if (_this.errors.indexOf(result.address) == -1) {
                _this.default_address = result.address.full_address + ' ' + result.address.address_zip_code;
            }
        });
    };
    HeaderPage.prototype.getSellerAccount = function () {
        var _this = this;
        this.userService.postData({ email: localStorage.getItem('sin_auth_user_email') }, 'getSellerAccount').subscribe(function (result) {
            if (result.status == 1) {
                _this.isSeller = 'yes';
                _this.cd.detectChanges();
            }
            else {
                _this.isSeller = 'no';
                _this.cd.detectChanges();
            }
        });
    };
    HeaderPage.prototype.getCategories = function () {
        var _this = this;
        this.userService.getData('getCategories').subscribe(function (result) {
            _this.all_categories = result.categories;
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    HeaderPage.prototype.getOrders = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId }, 'getAllOrders').subscribe(function (result) {
            _this.orders = result.orders;
            _this.ordersLength = _this.orders.length;
            _this.cd.detectChanges();
        }, function (err) {
            // this.stopLoading();
            _this.orders = [];
        });
    };
    HeaderPage.prototype.getTopSellingCategories = function () {
        var _this = this;
        this.userService.postData({ limit: '6' }, 'topSellingCategories').subscribe(function (result) {
            console.log(result);
            _this.all_top_categories = result.cats;
        }, function (err) {
            _this.all_top_categories = [];
        });
    };
    HeaderPage.prototype.ionViewDidLoad = function () {
        if (localStorage.getItem('comeFrom') == 'register') {
            this.router.navigate(['/interest']);
            return;
        }
        console.log('Entered');
        this.user_image = localStorage.getItem('sin_auth_user_image');
        var token = localStorage.getItem('sin_auth_token');
        // alert(token);
        if (token != '' && token != null && token != undefined) {
            this.is_logged_in = 'true';
        }
        else {
            this.is_logged_in = 'false';
        }
        this.getSellerAccount();
    };
    HeaderPage.prototype.ionViewWillUnload = function () {
        this.events.unsubscribe('call_logout:true');
        this.events.unsubscribe('user_logged_in:true');
        this.events.unsubscribe('cart_updated:true');
        this.events.unsubscribe('current_address_changed:true');
    };
    HeaderPage.prototype.productDetails = function (catId, subcatId) {
        this.router.navigate(['/products'], { queryParams: { cat: catId, subcat: subcatId } });
    };
    HeaderPage.prototype.catDropSelected = function (catId, subcatId, selected_cat) {
        this.cats_array = [];
        this.selected_cat = selected_cat;
        this.cats_array.push({ cat_id: catId, sub_cat_id: subcatId });
    };
    HeaderPage.prototype.catDropSelectedMob = function (catId, subcatId, selected_cat) {
        this.cats_array = [];
        this.mob_category = selected_cat;
        this.cats_array.push({ cat_id: catId, sub_cat_id: subcatId });
        this.onButtonClickcat();
        this.search();
    };
    HeaderPage.prototype.search = function () {
        if (this.searchType == '') {
            this.presentToast('Please select search type.', 'danger');
            return false;
        }
        if (this.searchTerm == '') {
            this.presentToast('Please enter your search.', 'danger');
            return false;
        }
        //this.router.navigate(['/products'],{queryParams : {cat : (this.cats_array.length > 0 ? this.cats_array[0].cat_id : ''), subcat: (this.cats_array.length > 0 ? this.cats_array[0].sub_cat_id : ''), search: this.searchTerm}});
        this.globalFooService.publishSomeData({
            foo: { 'data': "search", 'page': 'searchPerform' }
        });
        this.router.navigate(['/search'], { queryParams: { searchType: this.searchType, search: this.searchTerm } });
    };
    HeaderPage.prototype.getCartProducts = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId }, 'getCartProducts').subscribe(function (result) {
            _this.cart = result.products;
            console.log("my cart pro");
            _this.cartLength = result.products.length;
            _this.items_in_cart = _this.cart.length;
            if (_this.cart != '') {
                _this.calculateTotalPrice();
            }
            else {
                _this.cart_price = 0.00;
            }
        }, function (err) {
            _this.cart = [];
        });
    };
    HeaderPage.prototype.getWishlistProducts = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId }, 'getWishlist').subscribe(function (result) {
            _this.stopLoading();
            console.log(result);
            if (result.status == 1) {
                _this.wishlist = result.data[0];
            }
            else {
                _this.wishlist = [];
            }
        }, function (err) {
            _this.stopLoading();
            _this.wishlist = [];
        });
    };
    HeaderPage.prototype.calculateTotalPrice = function () {
        var self = this;
        this.cart_price = 0.00;
        // this.cart.forEach(function(item){
        //   if(self.errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price){
        //     self.cart_price = Number(self.cart_price) + (item.product_sale_price*item.product_quantity);
        //   }
        //   else{
        //     self.cart_price = Number(self.cart_price) + (item.product_purchase_price*item.product_quantity);
        //   }
        // });
        this.cart.forEach(function (item) {
            console.log(self.cart_price);
            if (Number(item.wholesale_price) != 0 && Number(item.product_quantity) >= Number(item.wholesale_products) && self.errors.indexOf(item.wholesale_products) == -1) {
                self.cart_price = Number(self.cart_price) + (item.wholesale_price * item.product_quantity);
            }
            else if (item.is_variation == 1) {
                self.cart_price = Number(self.cart_price) + (item.product_price * item.product_quantity);
            }
            else {
                if (self.errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price) {
                    if (item.discount_per_piece != null) {
                        if (item.discount_type == '%') {
                            var singleItemPrice = Number(item.product_sale_price) - ((Number(item.discount_per_piece) / Number(item.product_sale_price)) * 100);
                            self.cart_price = Number(self.cart_price) + (singleItemPrice * item.product_quantity);
                        }
                        else {
                            var singleItemPrice = Number(item.product_sale_price) - Number(item.discount_per_piece);
                            self.cart_price = Number(self.cart_price) + (singleItemPrice * item.product_quantity);
                        }
                    }
                    else {
                        self.cart_price = Number(self.cart_price) + (item.product_sale_price * item.product_quantity);
                    }
                }
                else {
                    if (item.discount_per_piece != null) {
                        if (item.discount_type == '%') {
                            var singleItemPrice = Number(item.product_purchase_price) - ((Number(item.discount_per_piece) / Number(item.product_purchase_price)) * 100);
                            self.cart_price = Number(self.cart_price) + (singleItemPrice * item.product_quantity);
                        }
                        else {
                            var singleItemPrice = Number(item.product_purchase_price) - Number(item.discount_per_piece);
                            self.cart_price = Number(self.cart_price) + (singleItemPrice * item.product_quantity);
                        }
                    }
                    else {
                        self.cart_price = Number(self.cart_price) + (item.product_purchase_price * item.product_quantity);
                    }
                }
            }
        });
        this.cart_price = this.cart_price.toFixed(2);
        console.log(this.cart_price);
    };
    HeaderPage.prototype.checkLogin = function () {
        var token = localStorage.getItem('sin_auth_token');
        if (token != '' && token != null && token != undefined) {
            this.is_logged_in = 'true';
        }
        else {
            this.is_logged_in = 'false';
        }
    };
    HeaderPage.prototype.onButtonClickdrop = function () {
        this.buttonClickeddrop = !this.buttonClickeddrop;
    };
    HeaderPage.prototype.onButtonClickcat = function () {
        this.buttonClickedcat = !this.buttonClickedcat;
    };
    HeaderPage.prototype.chooseLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _choose_location_choose_location_page__WEBPACK_IMPORTED_MODULE_3__["ChooseLocationPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HeaderPage.prototype.logout = function () {
        localStorage.clear();
        this.is_logged_in = 'false';
        this.cd.detectChanges();
        this.presentToast('Logged out successfully!', 'success');
        this.events.publish('call_logout_head:true', '');
        this.globalFooService.publishSomeData({
            foo: { 'data': 'logout is done', 'page': 'logout' }
        });
        localStorage.setItem('is_login', 'false');
        localStorage.setItem('sin_auth_user_email', 'xx@demo.com');
        this.cd.detectChanges();
        this.router.navigate(['/blog']);
    };
    HeaderPage.prototype.presentToast = function (message, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 3000,
                            position: 'top',
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
    HeaderPage.prototype.automaticPopup = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.router.navigate(['/auto-popup']);
                return [2 /*return*/];
            });
        });
    };
    HeaderPage.prototype.uploadImg = function (event) {
        var _this = this;
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            var image_file = event.target.files[0];
            if (self.allowedMimes.indexOf(image_file.type) == -1) {
                this.presentToast('Please select valid image.', 'danger');
            }
            else {
                var formData = new FormData();
                formData.append('file', image_file);
                formData.append('userId', self.userId);
                this.presentLoading();
                this.userService.postData(formData, 'searchByImage').subscribe(function (result) {
                    _this.stopLoading();
                    console.log(result);
                    _this.router.navigate(['/products'], { queryParams: { cat: (_this.cats_array.length > 0 ? _this.cats_array[0].cat_id : ''), subcat: (_this.cats_array.length > 0 ? _this.cats_array[0].sub_cat_id : ''), search: '', searchImage: JSON.stringify(result.imageCats) } });
                }, function (err) {
                    _this.stopLoading();
                    _this.presentToast('Something went wrong.Please try later.', 'danger');
                });
            }
        }
    };
    ;
    HeaderPage.prototype.callSearchFunctionApi = function () {
        // this.presentLoading();
        // this.userService.postData({'searchText': this.searchTerm}, 'searchByText').subscribe((result) => {
        // this.stopLoading();
        // console.log(result)
        // if(result.status == 1){
        this.router.navigate(['/products'], { queryParams: { cat: (this.cats_array.length > 0 ? this.cats_array[0].cat_id : ''), subcat: (this.cats_array.length > 0 ? this.cats_array[0].sub_cat_id : ''), search: this.searchTerm } });
        // }else{
        // this.presentToast('No product found related your search.','danger');
        // }
        // for(var i=0; i < result.cats.length;i++){
        //   if(result.cats[i].product_cat.split(',').length > 1){
        //     if(this.cats_array.length == 0){
        //       this.cats_array.push(result.cats[i].product_cat.split(',')[0]);
        //     }
        //     var cats = result.cats[i].product_cat.split(',');
        //     // for(var j=0; j < this.cats_array.length; j++){
        //       // let isCatExist = false;
        //       for(k=0; k < cats.length;k++){
        //       //   if(this.cats_array[j] == cats[k]){
        //           // isCatExist = true;
        //         // }
        //         this.cats_array.push(cats[k]);
        //         this.sub
        //       // }
        //       }
        //   }else{
        //   }
        // }
        // },
        // err => {
        //   this.stopLoading();
        //   this.presentToast('Something went wrong.Please try later.','danger');
        // });
    };
    HeaderPage.prototype.presentLoading = function () {
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
    HeaderPage.prototype.stopLoading = function () {
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
    HeaderPage.prototype.startListening = function () {
        // Start the recognition process
        this.speechRecognition.startListening().subscribe(function (matches) {
            return console.log(matches);
        }, function (onerror) { return console.log('error:', onerror); });
    };
    HeaderPage.prototype.subtotalPrice = function (item) {
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
    HeaderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.page.html */ "./src/app/header/header.page.html"),
            styles: [__webpack_require__(/*! ./header.page.scss */ "./src/app/header/header.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services_user_globalFooService_service__WEBPACK_IMPORTED_MODULE_10__["GlobalFooService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], ng_socket_io__WEBPACK_IMPORTED_MODULE_9__["Socket"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_12__["SpeechRecognition"]])
    ], HeaderPage);
    return HeaderPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~about-us-about-us-module~blog-blog-module~blog-detail-blog-detail-module~cart-cart-module~ch~3d8cd998.js.map