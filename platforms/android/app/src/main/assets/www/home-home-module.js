(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-stars */ "./node_modules/ngx-stars/fesm5/ngx-stars.js");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");











var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8__["OwlModule"],
                ngx_stars__WEBPACK_IMPORTED_MODULE_9__["NgxStarsModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_10__["HeaderPageModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
            entryComponents: [],
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n<app-header ></app-header>\n\t\t<div class=\"logo-rating-sec\">\t\n\t\t\t<ion-row>\n\t\t\t\t <ion-col size=\"12\" class=\"ion-text-right ion-align-self-center\">\n\t\t\t\t\t<div class=\"header-call-action menu-right\">\n\t\t\t\t\t\t<ul class=\"menu-right-ul\">\n\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<ion-select [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Flag\">\n\t\t\t\t\t\t\t<ion-select-option value=\"Flag-1\">Flag-1</ion-select-option>\n\t\t\t\t\t\t\t<ion-select-option value=\"Flag-2\">Flag-2</ion-select-option>\n\t\t\t\t\t\t\t<ion-select-option value=\"Flag-3\">Flag-3</ion-select-option>\n\t\t\t\t\t\t\t<ion-select-option value=\"Flag-4\">Flag-4</ion-select-option>\n\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</div>\n\t<div home-cate-sec>\n\t    <div class=\"container\">\n\t\t    <div class=\"row\">\t\t\n\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t<button type=\"submit\" float-left ion-button class=\"btnPrev\" (click)=\"prev()\"><ion-icon name=\"arrow-back\"></ion-icon></button>\n\t\t\t\t\t<button type=\"submit\" float-right ion-button class=\"btnNext\" (click)=\"next()\"><ion-icon name=\"arrow-forward\"></ion-icon></button>\t\t\n\t\t\t\t\t<ion-slides pager=\"true\" [options]=\"slideOpts1\" #slides>\n\t\t\t\t\t\t<ion-slide>\t\t\t\n\t\t\t\t\t\t\t<div new-users-mn routerLink=\"/product-post\">\n\t\t\t\t\t\t\t\t<img src=\"assets/img/product/product-1.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t<ion-slide>\t\t\t\n\t\t\t\t\t\t\t<div new-users-mn routerLink=\"/product-post\">\n\t\t\t\t\t\t\t\t<img src=\"assets/img/product/product-2.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t<ion-slide>\t\t\t\n\t\t\t\t\t\t\t<div new-users-mn routerLink=\"/product-post\">\n\t\t\t\t\t\t\t\t<img src=\"assets/img/product/product-3.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t<ion-slide>\t\t\t\n\t\t\t\t\t\t\t<div new-users-mn routerLink=\"/product-post\">\n\t\t\t\t\t\t\t\t<img src=\"assets/img/product/product-4.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t<ion-slide>\t\t\t\n\t\t\t\t\t\t\t<div new-users-mn routerLink=\"/product-post\">\n\t\t\t\t\t\t\t\t<img src=\"assets/img/product/product-5.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t<ion-slide>\t\t\t\n\t\t\t\t\t\t\t<div new-users-mn routerLink=\"/product-post\">\n\t\t\t\t\t\t\t\t<img src=\"assets/img/product/product-6.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t</ion-slides>\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  <div class=\"main-wrapper  home-page\">\n         <div class=\"container-fluid\">\n            <div class=\"row\">\n               <div class=\"col-lg-5\">\n                  <div headmn-sec class=\"section-title module-three\">\n                     <h3><span>Featured </span> Products</h3>\n                  </div>\n                  <div>\n\t\t\t\t\t\t<app-featured-products  class=\"row\"></app-featured-products>\n                     \n                     <div class=\"col-md-12 text-center mb-30\">\n                        <button class=\"header-button-item\">View All Product</button>\n                     </div>\n                  </div>\n               </div>\n               <div class=\"col-lg-7\">\n                  <div class=\"post-feed-main\">\n                     <article class=\"post-feed-item\" *ngFor=\"let blog of all_blogs \">\n                        <div class=\"activity-header\">\n                           <div class=\"activity-avatar\">\n                              <a href=\"javascript:void(0)\">\n                              <img alt=\"\" src=\"assets/img/post-1.png\">\n\t\t\t\t\t\t\t  </a>\t\t\t\t\t\t\t  \n                           </div>\n                           <div class=\"activity-head\">\n                              <h4><a routerLink=\"/blog-detail/{{blog.blog_id}}\">\n\t\t\t\t\t\t\t\t{{blog.blog_name}}\n\t\t\t\t\t\t\t</a></h4>\n                              <p><span class=\"time-since\">Apple</span></p>\n                           </div>\n                        </div>\n                        <div class=\"activity-inner\">\n\t\t\t\t\t\t\t<p *ngIf=\"atob(blog.blog_description).length <= 200\" [innerHTML]=\"atob(blog.blog_description)\"></p>\n\t\t\t\t\t\t\t<p *ngIf=\"atob(blog.blog_description).length > 200\" [innerHTML]=\"atob(blog.blog_description).substr(0,200)+'...'\"></p>\n                           <div class=\"post-feed-img\">\n\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(blog.blog_image) >= 0\" src=\"assets/images/products/no_image.svg\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(blog.blog_image) == -1\" src=\"{{IMAGES_URL}}/blog_images/{{blog.blog_image}}\" alt=\"Image\" class=\"img-fluid\">\n\t\t\t\t\t\t\t    <span sharebtn-img><ion-icon name=\"share-social-outline\"></ion-icon></span>\n                           </div>\n                        </div>\n                        <div class=\"post-details-activity-bottom pb-10\">\n                           <ul class=\"like-com\">\n                              <li>\n                                 <a href=\"javascript:void(0)\"><i class=\"fa fa-thumbs-up\"></i> Like</a>\n                                 <div class=\"likedby-images\">\n                                    <span><img src=\"assets/img/post-1.png\" class=\"img-fluid\"></span>\n                                    <span><img src=\"assets/img/post-2.png\" class=\"img-fluid\"></span>\n                                    <span><img src=\"assets/img/post-3.jpg\" class=\"img-fluid\"></span>\n                                    <span><img src=\"assets/img/post-4.jpg\" class=\"img-fluid\"></span>\n                                    <span class=\"likedbycount\">15</span>\n                                 </div>\n                              </li>\n                           </ul>\n                           <div class=\"mini-cart-option\">\n                              <ul class=\"like-com\">\n                                 <li class=\"post-button-item buy-button-item\"><a class=\"mr-0 ml-0\" href=\"javascript:void(0)\"><span class=\"lnr lnr-cart mr-0\"></span> Buy</a></li>\n                                 <li class=\"post-button-item wishlist-button-item\"><a class=\"mr-0\" href=\"javascript:void(0)\"><span class=\"lnr lnr-heart mr-0\"></span> Wishlist </a></li>\n                                 <li class=\"post-button-item suggest-button-item\"><a class=\"mr-0\" href=\"javascript:void(0)\"><span class=\"fa fa-paper-plane\"></span> Suggest</a></li>\n                              </ul>\n                           </div>\n                        </div>\n                        <div class=\"tag-box\">\n                           <div class=\"tagword\">\n                              <div class=\"aside-title\">\n                                 <h6>Tags</h6>\n                              </div>\n                              <div class=\"tagcloud\">\n                                 <a href=\"javascript:void(0);\">Business</a>\n                                 <a href=\"javascript:void(0);\">Marketing</a>\n                                 <a href=\"javascript:void(0);\">SEO</a>\n                                 <a href=\"javascript:void(0);\">strategy</a>\n                                 <a href=\"javascript:void(0);\">Map</a>\n                              </div>\n                           </div>\n                           <div class=\"like-com\">\n                              <a href=\"javascript:void(0)\"><i class=\"fa fa-share-square-o\"></i> Share</a>\n                           </div>\n                        </div>\n                        <div class=\"comment-section\">\n                           <ion-input type=\"text\" placeholder=\"Write Your Comment...\" class=\"commnetbar\"></ion-input>\n                           <button class=\"btn-style\"><i class=\"fa fa-reply\" aria-hidden=\"true\"></i></button>\n                        </div>\n                     </article>\n                     <!--article class=\"post-feed-item\">\n                        <div class=\"activity-header\">\n                           <div class=\"activity-avatar\">\n                              <a href=\"javascript:void(0)\">\n                              <img alt=\"\" src=\"assets/img/post-2.png\">\n\t\t\t\t\t\t\t  </a>\n                           </div>\n                           <div class=\"activity-head\">\n                              <h4><a href=\"javascript:void(0)\">jony XB10 Portable Wireless Speake</a></h4>\n                              <p><span class=\"time-since\">Apple</span></p>\n                           </div>\n                        </div>\n                        <div class=\"activity-inner\">\n                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>\n                           <div class=\"post-feed-img\">\n                                <img src=\"assets/img/fashion-post-2.jpg\" class=\"img-fluid\">\n\t\t\t\t\t\t\t    <span sharebtn-img><ion-icon name=\"share-social-outline\"></ion-icon></span>  \n                           </div>\n                        </div>\n                        <div class=\"post-details-activity-bottom normal-post-details-item pb-20\">\n                           <ul class=\"like-com\">\n                              <li>\n                                 <a href=\"javascript:void(0)\"><i class=\"fa fa-thumbs-up\"></i> Like</a>\n                              </li>\n                              <li>\n                                 <a href=\"javascript:void(0)\"><i class=\"fa fa-comment-o\"></i> Comment</a>\n                              </li>\n                           </ul>\n                           <div share-mb-none class=\"like-com\">\n                              <a href=\"javascript:void(0)\"><i class=\"fa fa-share-square-o\"></i> Share</a>\n                           </div>\n                        </div>\n                     </article-->\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n<!--Mobile Screen Ends-->\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  display: none !important; }\n\nion-header ion-toolbar ion-menu-button {\n  height: 35px;\n  position: inherit;\n  top: inherit;\n  right: inherit;\n  transition: inherit;\n  transition-delay: .1s; }\n\nion-header ion-toolbar ion-menu-button img {\n    max-width: 20px; }\n\nion-header ion-toolbar ion-title {\n  font-weight: 700; }\n\nion-header ion-toolbar ion-buttons {\n  font-size: 20px; }\n\nion-header ion-toolbar ion-buttons[mar-10] {\n    margin-right: 10px; }\n\n.commnetbar::-webkit-input-placeholder {\n  color: #444; }\n\n.commnetbar::-moz-placeholder {\n  color: #444; }\n\n.commnetbar:-ms-input-placeholder {\n  color: #444; }\n\n.commnetbar::-ms-input-placeholder {\n  color: #444; }\n\n.commnetbar::placeholder {\n  color: #444; }\n\nion-content ion-slide [new-users-mn] {\n  outline: 0px; }\n\nion-content [home-cate-sec] {\n  position: relative;\n  padding: 40px 0px 10px; }\n\nion-content [home-cate-sec] button.btnNext {\n    position: absolute;\n    right: -15px;\n    width: 40px;\n    height: 40px;\n    background: var(--ion-color-primary);\n    border-radius: 50%;\n    color: #fff !important;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    -webkit-transform: translate;\n            transform: translate;\n    font-size: 20px;\n    z-index: 11; }\n\nion-content [home-cate-sec] button.btnPrev {\n    position: absolute;\n    left: -15px;\n    width: 40px;\n    height: 40px;\n    background: var(--ion-color-primary);\n    border-radius: 50%;\n    color: #fff !important;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    font-size: 20px;\n    z-index: 11; }\n\n@media (min-width: 768px) {\n  ion-content .post-feed-main article.post-feed-item .activity-inner .post-feed-img [sharebtn-img] {\n    display: none; }\n  ion-content .logo-rating-sec {\n    display: none; } }\n\n@media (max-width: 767px) {\n  ion-content .logo-rating-sec {\n    display: block;\n    padding: 20px 5px;\n    position: relative;\n    background: url('header-bg.jpg') no-repeat center center/cover; }\n    ion-content .logo-rating-sec .vendor-profile-img1 img {\n      width: 48px;\n      height: 48px;\n      border: 1px solid #fff;\n      margin-right: 5px;\n      padding: 4px; }\n    ion-content .logo-rating-sec .vendor-profile-img1 span {\n      font-size: 14px; }\n    ion-content .logo-rating-sec .header-call-action {\n      display: flex;\n      width: 100%;\n      align-items: center;\n      justify-content: space-between; }\n      ion-content .logo-rating-sec .header-call-action .menu-right-ul {\n        padding: 0; }\n        ion-content .logo-rating-sec .header-call-action .menu-right-ul li a {\n          font-size: 20px;\n          padding: 0px 5px; }\n      ion-content .logo-rating-sec .header-call-action ion-select {\n        color: #fff;\n        --placeholder-opacity: 1; }\n  ion-content [home-cate-sec] {\n    padding: 20px 0px 10px; }\n    ion-content [home-cate-sec] button.btnNext {\n      display: none; }\n    ion-content [home-cate-sec] button.btnPrev {\n      display: none; }\n    ion-content [home-cate-sec] ion-slides {\n      padding-bottom: 20px; }\n  ion-content .home-page [headmn-sec] {\n    margin-bottom: 15px; }\n    ion-content .home-page [headmn-sec] h3 {\n      font-size: 20px;\n      margin-bottom: 0px; }\n  ion-content .home-page .product-item {\n    display: flex;\n    align-items: center;\n    background: #f9f9f9;\n    padding: 12px 10px;\n    margin-bottom: 20px; }\n    ion-content .home-page .product-item .product-thumb img {\n      max-height: 120px;\n      min-height: 120px;\n      width: 120px;\n      min-width: 120px;\n      -o-object-fit: cover;\n         object-fit: cover; }\n    ion-content .home-page .product-item .product-thumb .action-links {\n      right: 5px;\n      top: 5px; }\n      ion-content .home-page .product-item .product-thumb .action-links a {\n        font-size: 14px;\n        height: 28px;\n        width: 28px; }\n        ion-content .home-page .product-item .product-thumb .action-links a i {\n          line-height: 28px; }\n    ion-content .home-page .product-item .product-thumb .box-label .label-product {\n      top: 5px;\n      font-size: 10px;\n      line-height: 20px;\n      min-width: 30px;\n      padding: 0 8px; }\n    ion-content .home-page .product-item .product-caption {\n      padding: 0px 4px 0px 10px; }\n      ion-content .home-page .product-item .product-caption .manufacture-product p {\n        line-height: 18px; }\n        ion-content .home-page .product-item .product-caption .manufacture-product p a {\n          color: #979797;\n          font-size: 12px;\n          line-height: 17px; }\n      ion-content .home-page .product-item .product-caption .product-name h4 {\n        font-size: 12px;\n        font-weight: 600;\n        line-height: 19px;\n        padding: 3px 0; }\n      ion-content .home-page .product-item .product-caption .ratings {\n        padding: 2px 0; }\n        ion-content .home-page .product-item .product-caption .ratings span {\n          font-size: 12px;\n          margin-right: 1px;\n          color: #7c7c7c; }\n          ion-content .home-page .product-item .product-caption .ratings span.yellow {\n            color: var(--ion-color-secondary); }\n      ion-content .home-page .product-item .product-caption .price-box .regular-price {\n        color: #7c7c7c;\n        font-size: 13px;\n        font-weight: 600; }\n      ion-content .home-page .product-item .product-caption .btn-cart {\n        font-size: 12px;\n        line-height: 30px;\n        padding: 0 18px;\n        bottom: 2px; }\n  ion-content .home-page .post-feed-main article.post-feed-item {\n    padding-bottom: 20px;\n    margin-bottom: 20px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-avatar {\n      width: 45px;\n      height: 45px;\n      margin-right: 10px;\n      border-radius: 50%;\n      overflow: hidden; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head h4 {\n      line-height: 20px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head h4 a {\n        font-size: 13px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head p {\n      font-size: 12px;\n      line-height: 20px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-inner p {\n      font-size: 12px;\n      line-height: 20px;\n      color: #777; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img img {\n      width: 100%;\n      height: 160px;\n      -o-object-fit: cover;\n         object-fit: cover; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img [sharebtn-img] {\n      position: absolute;\n      right: 0px;\n      top: 10px;\n      background: rgba(115, 188, 229, 0.8);\n      color: #fff;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      padding: 6px 10px;\n      font-size: 16px;\n      border-radius: 30px 0px 0px 30px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom {\n      padding-bottom: 0px !important;\n      flex-direction: row;\n      align-items: center; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li a {\n        font-size: 13px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li a i {\n          margin-right: 3px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images {\n        margin-right: 0px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images span {\n          width: 28px;\n          height: 28px;\n          left: 0px;\n          margin-left: -15px; }\n          ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images span:first-child {\n            margin-left: 0px; }\n          ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images span.likedbycount {\n            width: 28px;\n            height: 28px;\n            line-height: 26px;\n            font-size: 11px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option {\n        margin-top: 0px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item {\n          margin: 0px 0px 0px 4px !important; }\n          ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item a {\n            height: 26px;\n            width: 26px;\n            padding: 0px 8px;\n            font-size: 0px !important; }\n            ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item a span {\n              padding: 0px;\n              margin: 0px;\n              font-size: 10px; }\n            ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item a:hover {\n              margin-left: 0px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom [share-mb-none] {\n        display: none; }\n    ion-content .home-page .post-feed-main article.post-feed-item .commnetbar {\n      padding-left: 10px !important; }\n    ion-content .home-page .post-feed-main article.post-feed-item .tag-box {\n      padding-bottom: 5px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .tag-box .tagword .aside-title {\n        margin-bottom: 8px;\n        display: none; }\n      ion-content .home-page .post-feed-main article.post-feed-item .tag-box .tagword .tagcloud a {\n        padding: 3px 8px;\n        margin-right: 4px;\n        margin-bottom: 6px;\n        font-size: 10px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .tag-box .like-com {\n        display: none; }\n    ion-content .home-page .post-feed-main article.post-feed-item .comment-section {\n      margin: 5px 0px 0px;\n      padding: 0 15px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .comment-section ion-input.commnetbar {\n        font-size: 12px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUUsd0JBQXNCLEVBQUE7O0FBSnhCO0VBVUcsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUIsRUFBQTs7QUFmeEI7SUFrQkksZUFBZSxFQUFBOztBQWxCbkI7RUF1QkcsZ0JBQWUsRUFBQTs7QUF2QmxCO0VBMkJHLGVBQWMsRUFBQTs7QUEzQmpCO0lBOEJJLGtCQUFpQixFQUFBOztBQUtyQjtFQUVJLFdBQVUsRUFBQTs7QUFGZDtFQUVJLFdBQVUsRUFBQTs7QUFGZDtFQUVJLFdBQVUsRUFBQTs7QUFGZDtFQUVJLFdBQVUsRUFBQTs7QUFGZDtFQUVJLFdBQVUsRUFBQTs7QUFFZDtFQU1NLFlBQVcsRUFBQTs7QUFOakI7RUFXRSxrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBWnhCO0lBaUJJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiw0QkFBbUI7WUFBbkIsb0JBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXLEVBQUE7O0FBL0JmO0lBbUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsV0FBVyxFQUFBOztBQU1mO0VBQ0M7SUFjTyxhQUFZLEVBQUE7RUFkbkI7SUF1QkssYUFBWSxFQUFBLEVBQ2Y7O0FBR0g7RUFDQztJQUlFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDhEQUE2RSxFQUFBO0lBUC9FO01BWUksV0FBVztNQUNYLFlBQVk7TUFDWixzQkFBc0I7TUFDdEIsaUJBQWlCO01BQ2pCLFlBQVksRUFBQTtJQWhCaEI7TUFvQkksZUFBZSxFQUFBO0lBcEJuQjtNQXlCRyxhQUFhO01BQ2IsV0FBVztNQUNYLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTtNQTVCakM7UUErQk8sVUFBVSxFQUFBO1FBL0JqQjtVQW9DTSxlQUFlO1VBQ2YsZ0JBQWdCLEVBQUE7TUFyQ3RCO1FBMkNJLFdBQVc7UUFDWCx3QkFBc0IsRUFBQTtFQTVDMUI7SUFrREssc0JBQXNCLEVBQUE7SUFsRDNCO01BdURJLGFBQVksRUFBQTtJQXZEaEI7TUEyREksYUFBWSxFQUFBO0lBM0RoQjtNQWdFRyxvQkFBb0IsRUFBQTtFQWhFdkI7SUF1RU0sbUJBQW1CLEVBQUE7SUF2RXpCO01BMEVJLGVBQWU7TUFDZixrQkFBa0IsRUFBQTtFQTNFdEI7SUFnRkcsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ04sbUJBQW1CLEVBQUE7SUFwRmxDO01BeUZLLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixvQkFBaUI7U0FBakIsaUJBQWlCLEVBQUE7SUE3RnRCO01BaUdLLFVBQVU7TUFDVixRQUFRLEVBQUE7TUFsR2I7UUFxR00sZUFBZTtRQUNmLFlBQVk7UUFDWixXQUFXLEVBQUE7UUF2R2pCO1VBMEdPLGlCQUFpQixFQUFBO0lBMUd4QjtNQWtITSxRQUFRO01BQ1IsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsY0FBYyxFQUFBO0lBdEhwQjtNQTRIbUIseUJBQXlCLEVBQUE7TUE1SDVDO1FBaUlNLGlCQUFpQixFQUFBO1FBakl2QjtVQW9JTyxjQUFjO1VBQ2QsZUFBZTtVQUNmLGlCQUFpQixFQUFBO01BdEl4QjtRQThJTSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixjQUFjLEVBQUE7TUFqSnBCO1FBc0pRLGNBQWMsRUFBQTtRQXRKdEI7VUF5Sk0sZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixjQUFjLEVBQUE7VUEzSnBCO1lBOEpVLGlDQUFpQyxFQUFBO01BOUozQztRQXNLTSxjQUFjO1FBQ2QsZUFBZTtRQUNmLGdCQUFnQixFQUFBO01BeEt0QjtRQTZLSyxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixXQUFXLEVBQUE7RUFoTGhCO0lBMExRLG9CQUFvQjtJQUNMLG1CQUFtQixFQUFBO0lBM0wxQztNQWdNTyxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDTSxnQkFBZ0IsRUFBQTtJQXBNL0M7TUEwTVEsaUJBQWlCLEVBQUE7TUExTXpCO1FBNk1TLGVBQWUsRUFBQTtJQTdNeEI7TUFrTlEsZUFBZTtNQUNmLGlCQUFpQixFQUFBO0lBbk56QjtNQTJOTyxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLFdBQVcsRUFBQTtJQTdObEI7TUFtT1EsV0FBVztNQUNYLGFBQWE7TUFDYixvQkFBZ0I7U0FBaEIsaUJBQWdCLEVBQUE7SUFyT3hCO01BeU9RLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsU0FBUztNQUNULG9DQUF1QztNQUN2QyxXQUFXO01BQ1gsb0JBQW9CO01BQ3BCLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixnQ0FBZ0MsRUFBQTtJQW5QeEM7TUF5UDJCLDhCQUE2QjtNQUNsRCxtQkFBbUI7TUFDbkIsbUJBQW1CLEVBQUE7TUEzUHpCO1FBb1EyQyxlQUFlLEVBQUE7UUFwUTFEO1VBdVFXLGlCQUFpQixFQUFBO01BdlE1QjtRQTRRYSxpQkFBZ0IsRUFBQTtRQTVRN0I7VUErUVcsV0FBVztVQUNYLFlBQVk7VUFDWixTQUFTO1VBQ1Qsa0JBQWtCLEVBQUE7VUFsUjdCO1lBcVJZLGdCQUFnQixFQUFBO1VBclI1QjtZQXlSWSxXQUFXO1lBQ1gsWUFBWTtZQUMyQixpQkFBaUI7WUFDakIsZUFBZSxFQUFBO01BNVJsRTtRQXFTVSxlQUFlLEVBQUE7UUFyU3pCO1VBOFNjLGtDQUFpQyxFQUFBO1VBOVMvQztZQWlUWSxZQUFZO1lBQ1osV0FBVztZQUNYLGdCQUFnQjtZQUNoQix5QkFBd0IsRUFBQTtZQXBUcEM7Y0F1VGEsWUFBWTtjQUNaLFdBQVc7Y0FDWCxlQUFlLEVBQUE7WUF6VDVCO2NBNlRhLGdCQUFnQixFQUFBO01BN1Q3QjtRQXVVVSxhQUFZLEVBQUE7SUF2VXRCO01BMlVNLDZCQUE2QixFQUFBO0lBM1VuQztNQStVUyxtQkFBbUIsRUFBQTtNQS9VNUI7UUFvVlEsa0JBQWtCO1FBQ2xCLGFBQVksRUFBQTtNQXJWcEI7UUEyVlMsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsZUFBZSxFQUFBO01BOVZ4QjtRQW9XVSxhQUFZLEVBQUE7SUFwV3RCO01BeVdTLG1CQUFtQjtNQUN0QixlQUFlLEVBQUE7TUExV3JCO1FBK1dXLGVBQWUsRUFBQSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyXG57XG5cdCY6OmFmdGVyXG5cdHtcblx0XHRkaXNwbGF5Om5vbmUhaW1wb3J0YW50O1xuXHR9XG5cdGlvbi10b29sYmFyXG5cdHtcblx0XHRpb24tbWVudS1idXR0b25cblx0XHR7XG5cdFx0XHRoZWlnaHQ6IDM1cHg7XG5cdFx0XHRwb3NpdGlvbjogaW5oZXJpdDtcblx0XHRcdHRvcDogaW5oZXJpdDtcblx0XHRcdHJpZ2h0OiBpbmhlcml0O1xuXHRcdFx0dHJhbnNpdGlvbjogaW5oZXJpdDtcblx0XHRcdHRyYW5zaXRpb24tZGVsYXk6IC4xcztcblx0XHRcdGltZ1xuXHRcdFx0e1xuXHRcdFx0XHRtYXgtd2lkdGg6IDIwcHg7XG5cdFx0XHR9XHRcdFxuXHRcdH1cblx0XHRpb24tdGl0bGVcblx0XHR7XG5cdFx0XHRmb250LXdlaWdodDo3MDA7XG5cdFx0fSBcblx0XHRpb24tYnV0dG9uc1xuXHRcdHtcblx0XHRcdGZvbnQtc2l6ZToyMHB4O1xuXHRcdFx0JlttYXItMTBdXG5cdFx0XHR7XG5cdFx0XHRcdG1hcmdpbi1yaWdodDoxMHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuLmNvbW1uZXRiYXI6OnBsYWNlaG9sZGVyXG57XG4gICAgY29sb3I6IzQ0NDtcbn1cbmlvbi1jb250ZW50XG57XG4gICAgaW9uLXNsaWRlXG5cdHtcblx0ICAgIFtuZXctdXNlcnMtbW5dXG5cdFx0e1xuXHRcdCAgICBvdXRsaW5lOjBweDtcblx0XHR9XG5cdH1cblx0W2hvbWUtY2F0ZS1zZWNdIFxuXHR7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHBhZGRpbmc6IDQwcHggMHB4IDEwcHg7XG5cdFx0YnV0dG9uXG5cdFx0e1xuXHRcdFx0Ji5idG5OZXh0IFxuXHRcdFx0e1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHJpZ2h0OiAtMTVweDtcblx0XHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHR0b3A6IDUwJTtcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHRcdFx0XHR0cmFuc2Zvcm06dHJhbnNsYXRlO1xuXHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdHotaW5kZXg6IDExO1xuXHRcdFx0fVxuXHRcdFx0Ji5idG5QcmV2IFxuXHRcdFx0e1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGxlZnQ6IC0xNXB4O1xuXHRcdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0Y29sb3I6ICNmZmYgIWltcG9ydGFudDtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdHRvcDogNTAlO1xuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0ei1pbmRleDogMTE7XG5cdFx0XHR9XHRcdFxuXHRcdH1cdFx0XG5cdH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdGlvbi1jb250ZW50XG5cdHtcblx0XHQucG9zdC1mZWVkLW1haW5cblx0XHR7XG5cdFx0XHRhcnRpY2xlXG5cdFx0XHR7XG5cdFx0XHRcdCYucG9zdC1mZWVkLWl0ZW1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdC5hY3Rpdml0eS1pbm5lclxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC5wb3N0LWZlZWQtaW1nXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFtzaGFyZWJ0bi1pbWddXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5Om5vbmU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LmxvZ28tcmF0aW5nLXNlY1xuXHRcdHtcblx0XHQgICAgZGlzcGxheTpub25lO1xuXHRcdH1cdFx0XG5cdH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuXHRpb24tY29udGVudFxuXHR7XG5cdCAgICAubG9nby1yYXRpbmctc2VjXG5cdFx0e1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRwYWRkaW5nOiAyMHB4IDVweDtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2hlYWRlci1iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1x0XG5cdFx0XHQudmVuZG9yLXByb2ZpbGUtaW1nMSBcblx0XHRcdHtcblx0XHRcdFx0aW1nIFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0d2lkdGg6IDQ4cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiA0OHB4O1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XG5cdFx0XHRcdFx0cGFkZGluZzogNHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNwYW4gXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdH1cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0LmhlYWRlci1jYWxsLWFjdGlvbiBcblx0XHRcdHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcdFx0XHRcblx0XHRcdFx0Lm1lbnUtcmlnaHQtdWwgXG5cdFx0XHRcdHtcblx0XHRcdFx0ICAgIHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0bGkgXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0YSBcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwcHggNXB4O1xuXHRcdFx0XHRcdFx0fVx0XHRcdFxuXHRcdFx0XHRcdH1cdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHRpb24tc2VsZWN0IFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0LS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuXHRcdFx0XHR9XHRcdFx0XHRcblx0XHRcdH1cdFx0XHRcblx0XHR9XHRcblx0XHRbaG9tZS1jYXRlLXNlY10gXG5cdFx0e1x0XG5cdFx0ICAgIHBhZGRpbmc6IDIwcHggMHB4IDEwcHg7XG5cdFx0XHRidXR0b25cblx0XHRcdHtcblx0XHRcdFx0Ji5idG5OZXh0IFxuXHRcdFx0XHR7XHRcdFx0XG5cdFx0XHRcdFx0ZGlzcGxheTpub25lO1x0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHRcdCYuYnRuUHJldiBcblx0XHRcdFx0e1x0XHRcdFxuXHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aW9uLXNsaWRlc1xuXHRcdFx0e1xuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMjBweDtcdFx0XG5cdFx0XHR9XHRcdFx0XG5cdFx0fVxuXHRcdC5ob21lLXBhZ2Vcblx0XHR7XHRcblx0XHRcdFtoZWFkbW4tc2VjXSBcblx0XHRcdHtcblx0XHRcdCAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHRcdFx0XHRoMyBcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XG5cdFx0XHRcdH1cdFx0XHRcdFxuXHRcdFx0fVx0XG5cdFx0XHQucHJvZHVjdC1pdGVtXG5cdFx0XHR7IFxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuXHRcdFx0XHRwYWRkaW5nOiAxMnB4IDEwcHg7XHRcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1x0XHRcdFx0XG5cdFx0XHRcdC5wcm9kdWN0LXRodW1iXG5cdFx0XHRcdHsgXG5cdFx0XHRcdFx0aW1nIFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG1heC1oZWlnaHQ6IDEyMHB4O1xuXHRcdFx0XHRcdFx0bWluLWhlaWdodDogMTIwcHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTIwcHg7XG5cdFx0XHRcdFx0XHRtaW4td2lkdGg6IDEyMHB4O1xuXHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0fVx0XG5cdFx0XHRcdFx0LmFjdGlvbi1saW5rcyBcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRyaWdodDogNXB4O1xuXHRcdFx0XHRcdFx0dG9wOiA1cHg7XG5cdFx0XHRcdFx0XHRhIFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMjhweDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDI4cHg7XG5cdFx0XHRcdFx0XHRcdGkgXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjhweDtcblx0XHRcdFx0XHRcdFx0fVx0XG5cdFx0XHRcdFx0XHR9XHRcblx0XHRcdFx0XHR9XHRcblx0XHRcdFx0XHQuYm94LWxhYmVsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0LmxhYmVsLXByb2R1Y3QgXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRvcDogNXB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDMwcHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgOHB4O1x0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XHRcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxuXHRcdFx0XHR9XHRcdFx0XG5cdFx0XHRcdC5wcm9kdWN0LWNhcHRpb25cblx0XHRcdFx0eyBcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDRweCAwcHggMTBweDtcdFx0XHRcdFxuXHRcdFx0XHRcdC5tYW51ZmFjdHVyZS1wcm9kdWN0IFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHAgXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxOHB4O1xuXHRcdFx0XHRcdFx0XHRhIFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICM5Nzk3OTc7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxN3B4O1xuXHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XHRcdFx0XG5cdFx0XHRcdFx0LnByb2R1Y3QtbmFtZSBcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRoNCBcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTlweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogM3B4IDA7XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVx0XHRcdFxuXHRcdFx0XHRcdC5yYXRpbmdzIFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgICAgcGFkZGluZzogMnB4IDA7XG5cdFx0XHRcdFx0XHRzcGFuIFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMXB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzdjN2M3YztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnllbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcblx0XHRcdFx0XHRcdFx0ICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcblx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVx0XHRcdFxuXHRcdFx0XHRcdC5wcmljZS1ib3ggXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0LnJlZ3VsYXItcHJpY2UgXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjN2M3YzdjO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5idG4tY2FydCBcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMzBweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMThweDtcblx0XHRcdFx0XHRcdGJvdHRvbTogMnB4O1xuXHRcdFx0XHRcdH1cdFx0XHRcdFx0XG5cdFx0XHRcdH1cdFx0XG5cdFx0XHR9XG4gICAgICAgICAgICAucG9zdC1mZWVkLW1haW5cbiAgICAgICAgICAgIHtcblx0XHRcdCAgICBhcnRpY2xlXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQmLnBvc3QtZmVlZC1pdGVtXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgICBwYWRkaW5nLWJvdHRvbTogMjBweDsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0ICAgIC5hY3Rpdml0eS1oZWFkZXJcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCAgICAuYWN0aXZpdHktYXZhdGFyXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogNDVweDtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDQ1cHg7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1x0XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1x0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQuYWN0aXZpdHktaGVhZFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0aDQgXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRhIFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHAgXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5hY3Rpdml0eS1pbm5lclxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRwIFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjNzc3O1xuXHRcdFx0XHRcdFx0XHR9XHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucG9zdC1mZWVkLWltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcblx0XHRcdFx0XHRcdFx0XHRpbWcgXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE2MHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0b2JqZWN0LWZpdDpjb3Zlcjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0W3NoYXJlYnRuLWltZ10gXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmlnaHQ6IDBweDtcblx0XHRcdFx0XHRcdFx0XHRcdHRvcDogMTBweDtcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMTE1ICwgMTg4ICwgMjI5ICwgMC44KTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA2cHggMTBweDtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDMwcHggMHB4IDBweCAzMHB4O1xuXHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnBvc3QtZGV0YWlscy1hY3Rpdml0eS1ib3R0b21cblx0XHRcdFx0XHRcdHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4IWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcdFx0XHRcdFx0XHRcdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuXHRcdFx0XHRcdFx0XHRcdCYubGlrZS1jb20gXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0bGlcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAzcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQubGlrZWRieS1pbWFnZXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgbWFyZ2luLXJpZ2h0OjBweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcGFuIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAyOHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyOHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogMHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0xNXB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JjpmaXJzdC1jaGlsZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMHB4O1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQmLmxpa2VkYnljb3VudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMjhweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyOHB4O1x0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdCAgICAgXG5cdFx0XHRcdFx0XHRcdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWluaS1jYXJ0LW9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcblx0XHRcdFx0XHRcdFx0ICAgIG1hcmdpbi10b3A6IDBweDtcblx0XHRcdFx0XHRcdFx0ICAgIHVsXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdCAgICAmLmxpa2UtY29tXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgbGlcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCYucG9zdC1idXR0b24taXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgbWFyZ2luOiAwcHggMHB4IDBweCA0cHghaW1wb3J0YW50OyAgICBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGEgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMjZweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDI2cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDBweCA4cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMHB4IWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3BhbiBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDBweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Jjpob3ZlciBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2hhcmUtbWItbm9uZV1cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdCAgICBkaXNwbGF5Om5vbmU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5jb21tbmV0YmFyIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQudGFnLWJveFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG5cdFx0XHRcdFx0XHQgICAgLnRhZ3dvcmRcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdC5hc2lkZS10aXRsZSBcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5Om5vbmU7XG5cdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdCAgICAudGFnY2xvdWRcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRhIFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAzcHggOHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDRweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNnB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQubGlrZS1jb21cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHQgICAgZGlzcGxheTpub25lO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuY29tbWVudC1zZWN0aW9uXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQgICAgbWFyZ2luOiA1cHggMHB4IDBweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMCAxNXB4O1xuXHRcdFx0XHRcdFx0XHRpb24taW5wdXRcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHQgICAgJi5jb21tbmV0YmFyXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdCAgICBmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XHRcdFx0XG5cdFx0fVx0XHRcblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _choose_location_choose_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../choose-location/choose-location.page */ "./src/app/choose-location/choose-location.page.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var HomePage = /** @class */ (function () {
    function HomePage(modalController, userService, toastController, loadingController, events, router, alertController) {
        var _this = this;
        this.modalController = modalController;
        this.userService = userService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.events = events;
        this.router = router;
        this.alertController = alertController;
        this.buttonClickeddrop = false;
        this.buttonClickedcat = false;
        this.errors = ['', null, undefined];
        this.slideOpts = { initialSlide: 1, speed: 400 };
        this.current_page = 1;
        this.slideOpts1 = {
            slidesPerView: 6,
            spaceBetween: 0,
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
    HomePage.prototype.ionViewDidEnter = function () {
        var token = localStorage.getItem('sin_auth_token');
        this.userId = this.userService.decryptData(token, _config__WEBPACK_IMPORTED_MODULE_5__["config"].ENC_SALT);
        this.getTopBanners();
        this.getBannerBlock();
        this.getBottomBanners();
        this.getCartProductsIds();
        this.getCategories();
        this.getCartProducts();
        this.content.scrollToTop();
        this.getBlogs();
    };
    HomePage.prototype.getTopBanners = function () {
        var _this = this;
        this.userService.postData({}, 'top_banners').subscribe(function (result) {
            _this.top_banners = result.top_banners;
        }, function (err) {
            _this.top_banners = [];
        });
    };
    HomePage.prototype.getBannerBlock = function () {
        var _this = this;
        this.userService.postData({}, 'belowBannerBlock').subscribe(function (result) {
            _this.banners_blocks = result.data;
        }, function (err) {
            _this.banners_blocks = [];
        });
    };
    HomePage.prototype.getBottomBanners = function () {
        var _this = this;
        this.userService.postData({}, 'bottom_banners').subscribe(function (result) {
            _this.bottom_banners = result.bottom_banners;
            _this.side_banner = result.side_banner;
            _this.bottom_banner_last = result.bottom_banners2;
        }, function (err) {
            _this.bottom_banners = [];
        });
    };
    HomePage.prototype.getCartProductsIds = function () {
        var _this = this;
        // this.presentLoading();
        this.userService.postData({ user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId }, 'getCartProductsIds').subscribe(function (result) {
            _this.my_cart_products = result.products;
            _this.my_wish_products = result.wishlist;
            _this.getRecentViewed();
        }, function (err) {
            _this.getRecentViewed();
            _this.my_cart_products = [];
            _this.my_wish_products = [];
        });
    };
    HomePage.prototype.getCartProductsIdaa = function () {
        var _this = this;
        //this.presentLoading();
        this.userService.postData({ user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId }, 'getCartProductsIds').subscribe(function (result) {
            _this.my_wish_products = result.wishlist;
        }, function (err) {
        });
    };
    HomePage.prototype.getRecentViewed = function () {
        var _this = this;
        this.userService.postData({ limit: '10', user_id: this.userId }, 'allRecentViewProducts').subscribe(function (result) {
            _this.recent_products = result.products;
            _this.getNewProducts();
        }, function (err) {
            _this.getNewProducts();
            _this.recent_products = [];
        });
    };
    HomePage.prototype.getNewProducts = function () {
        var _this = this;
        this.userService.postData({ limit: '15' }, 'newProducts').subscribe(function (result) {
            _this.new_products = result.products;
            _this.getBestDeals();
        }, function (err) {
            _this.getBestDeals();
            _this.new_products = [];
        });
    };
    HomePage.prototype.getBestDeals = function () {
        var _this = this;
        this.userService.postData({ limit: '15' }, 'bestDealsProducts').subscribe(function (result) {
            _this.getBestSellers();
            _this.best_deals = result.products;
            console.log(_this.best_deals);
        }, function (err) {
            _this.stopLoading();
            _this.best_deals = [];
        });
    };
    HomePage.prototype.getBestSellers = function () {
        var _this = this;
        this.userService.postData({ limit: '15' }, 'bestSellerProducts').subscribe(function (result) {
            _this.stopLoading();
            _this.best_sellers = result.products;
        }, function (err) {
            _this.stopLoading();
            _this.best_sellers = [];
        });
    };
    HomePage.prototype.getCategories = function () {
        var _this = this;
        this.userService.getData('getCategories').subscribe(function (result) {
            _this.all_categories = result.categories;
        }, function (err) {
            _this.all_categories = [];
        });
    };
    HomePage.prototype.getCartProducts = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId }, 'getCartProducts').subscribe(function (result) {
            _this.cart = result.products;
        }, function (err) {
            _this.cart = [];
        });
    };
    HomePage.prototype.addToCart = function (product_id, product_sale_price, product_purchase_price) {
        var _this = this;
        // if(this.userId == 0){
        //   //this.router.navigate(['/login']);
        // }
        // else{
        this.presentLoading();
        this.userService.postData({ product_id: product_id, user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId, product_qty: 1, is_variation: false, product_price: 0, product_variations: [] }, 'addTocart').subscribe(function (result) {
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
                _this.getCartProducts();
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
    HomePage.prototype.addToWish = function (product_id) {
        // if(this.userId == 0){
        //   this.router.navigate(['/login']);
        // }
        // else{
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
        // }
    };
    HomePage.prototype.presentAlert = function (product_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                localStorage.setItem('product', product_id);
                //
                // const modal = await this.modalController.create({
                //   component: WishlistListingPage,
                //   componentProps: { value: product_id },
                //   cssClass: 'wishListModal'
                // });
                // return await modal.present();
                this.userService.postData({ product_id: localStorage.getItem('product'), user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId, wish_title: null, is_new: this.userId == 0 ? 3 : 0, wishlist_id: null }, 'addWishlistNew').subscribe(function (result) {
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
    HomePage.prototype.productDetails = function (catId, subcatId) {
        this.router.navigate(['/products'], { queryParams: { cat: catId, subcat: subcatId } });
    };
    HomePage.prototype.onButtonClickdrop = function () {
        this.buttonClickeddrop = !this.buttonClickeddrop;
    };
    HomePage.prototype.onButtonClickcat = function () {
        this.buttonClickedcat = !this.buttonClickedcat;
    };
    HomePage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _choose_location_choose_location_page__WEBPACK_IMPORTED_MODULE_3__["ChooseLocationPage"],
                            componentProps: { value: 123 }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.presentToast = function (message, color) {
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
    HomePage.prototype.presentLoading = function () {
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
    HomePage.prototype.calculatePercentage = function (deal) {
        return (((Number(deal.product_purchase_price) - Number(deal.product_sale_price)) / Number(deal.product_purchase_price)) * 100).toFixed(0);
    };
    HomePage.prototype.isPurchasePriceGreater = function (deal) {
        if (Number(deal.product_purchase_price) > Number(deal.product_sale_price)) {
            return true;
        }
        else {
            return false;
        }
    };
    HomePage.prototype.next = function () {
        this.slides.slideNext();
    };
    HomePage.prototype.prev = function () {
        this.slides.slidePrev();
    };
    HomePage.prototype.getBlogs = function () {
        var _this = this;
        this.presentLoading();
        this.userService.postData({ per_page: '4', page: this.current_page }, 'allBlogs').subscribe(function (result) {
            _this.stopLoading();
            _this.all_blogs = result.blogs;
            var records = Math.ceil(result.total_blogs / 4);
            if (isNaN(records)) {
                _this.total_pages = 1;
            }
            else {
                _this.total_pages = records;
            }
        }, function (err) {
            _this.stopLoading();
            _this.all_blogs = [];
        });
    };
    HomePage.prototype.arrayOne = function (n) {
        return Array(n);
    };
    HomePage.prototype.atob = function (string) {
        return atob(string);
    };
    HomePage.prototype.paginate = function (page) {
        if (page == 'next') {
            if (this.total_pages != this.current_page) {
                this.current_page = Number(this.current_page) + 1;
                this.getBlogs();
            }
        }
        else if (page == 'prev') {
            if (this.current_page != 1) {
                this.current_page = Number(this.current_page) - 1;
                this.getBlogs();
            }
        }
        else {
            if (this.current_page != page) {
                this.current_page = page;
                this.getBlogs();
            }
        }
    };
    HomePage.prototype.stopLoading = function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], HomePage.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], HomePage.prototype, "content", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map