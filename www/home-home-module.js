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

module.exports = "<ion-content>\n<app-header ></app-header>\n\t\t<div class=\"logo-rating-sec\">\t\n\t\t\t<ion-row>\n\t\t\t\t <ion-col size=\"12\" class=\"ion-text-right ion-align-self-center\">\n\t\t\t\t\t<div class=\"header-call-action menu-right\">\n\t\t\t\t\t\t<ul class=\"menu-right-ul\">\n\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<ion-select [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Flag\">\n\t\t\t\t\t\t\t<ion-select-option value=\"Flag-1\">Flag-1</ion-select-option>\n\t\t\t\t\t\t\t<ion-select-option value=\"Flag-2\">Flag-2</ion-select-option>\n\t\t\t\t\t\t\t<ion-select-option value=\"Flag-3\">Flag-3</ion-select-option>\n\t\t\t\t\t\t\t<ion-select-option value=\"Flag-4\">Flag-4</ion-select-option>\n\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</div>\n   \t<div home-cate-sec>\n   \t    <div class=\"container\">\n   \t\t    <div class=\"row\">\t\t\n   \t\t\t\t<div class=\"col-lg-12\">\n   \t\t\t\t\t<button type=\"submit\" float-left ion-button class=\"btnPrev\" (click)=\"prev()\"><ion-icon name=\"arrow-back\"></ion-icon></button>\n   \t\t\t\t\t<button type=\"submit\" float-right ion-button class=\"btnNext\" (click)=\"next()\"><ion-icon name=\"arrow-forward\"></ion-icon></button>\t\t\n   \t\t\t\t\t\n                  <ion-slides pager [options]=\"slideOpts1\" #slides>\n   \t\t\t\t\t\t<ion-slide *ngFor=\"let pro of new_products\">\t\t\t\n   \t\t\t\t\t\t\t<div new-users-mn routerLink=\"/product-post\">\n   \t\t\t\t\t\t\t\t<img src=\"{{proImage_url}}{{pro?.product_image}}\" alt=\"\" />\n   \t\t\t\t\t\t\t</div>\n   \t\t\t\t\t\t</ion-slide>\n   \t\t\t\t\t\t\n   \t\t\t\t\t</ion-slides>\t\t\t\t\n   \t\t\t\t</div>\n   \t\t\t</div>\n   \t\t</div>\n   \t</div>\n      <div class=\"main-wrapper  home-page\">\n         <div class=\"container-fluid\">\n            <div class=\"row\">\n               <div class=\"col-lg-5\">\n                  <div headmn-sec class=\"section-title module-three\">\n                     <h3><span>Featured </span> Products</h3>\n                  </div>\n                  <div>\n\t\t\t\t\t\t   <app-featured-products class=\"row\"></app-featured-products>\n                     \n                     <!-- <div class=\"col-md-12 text-center mb-30\">\n                        <button class=\"header-button-item\">View All Product</button>\n                     </div> -->\n                  </div>\n               </div>\n               <div class=\"col-lg-7\">\n                  <div class=\"post-feed-main\">\n                     <article class=\"post-feed-item\" *ngFor=\"let blog of all_blogs \">\n                        <div class=\"activity-header\">\n                           <div class=\"activity-avatar\">\n                              <a href=\"javascript:void(0)\">\n                                 <img alt=\"\" src=\"assets/img/post-1.png\">\n\t\t\t\t\t\t            </a>\t\t\t\t\t\t\t  \n                           </div>\n                           <div class=\"activity-head\">\n                              <h4>\n                                 <a routerLink=\"/blog-detail/{{blog.blog_id}}\">\n\t\t\t\t\t\t\t              {{blog.blog_name}}\n\t\t\t\t\t\t               </a>\n                              </h4>\n                              <p><span class=\"time-since\">Apple</span></p>\n                           </div>\n                        </div>\n                        <div class=\"activity-inner\">\n      \t\t\t\t\t\t\t<p *ngIf=\"atob(blog.blog_description).length <= 200\" [innerHTML]=\"atob(blog.blog_description)\"></p>\n      \t\t\t\t\t\t\t<p *ngIf=\"atob(blog.blog_description).length > 200\" [innerHTML]=\"atob(blog.blog_description).substr(0,200)+'...'\"></p>\n                           <div class=\"post-feed-img\">\n      \t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(blog.blog_image) >= 0\" src=\"assets/images/products/no_image.svg\" class=\"img-fluid\">\n      \t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(blog.blog_image) == -1\" src=\"{{IMAGES_URL}}/blog_images/{{blog.blog_image}}\" alt=\"Image\" class=\"img-fluid\">\n      \t\t\t\t\t\t\t    <span sharebtn-img><ion-icon name=\"share-social-outline\"></ion-icon></span>\n                           </div>\n                        </div>\n                        <div class=\"post-details-activity-bottom pb-10\">\n                           <ul class=\"like-com\">\n                              <li>\n                                 <a href=\"javascript:void(0)\"><i class=\"fa fa-thumbs-up\"></i> Like</a>\n                                 <div class=\"likedby-images\">\n                                    <span><img src=\"assets/img/post-1.png\" class=\"img-fluid\"></span>\n                                    <span><img src=\"assets/img/post-2.png\" class=\"img-fluid\"></span>\n                                    <span><img src=\"assets/img/post-3.jpg\" class=\"img-fluid\"></span>\n                                    <span><img src=\"assets/img/post-4.jpg\" class=\"img-fluid\"></span>\n                                    <span class=\"likedbycount\">15</span>\n                                 </div>\n                              </li>\n                           </ul>\n                           <div class=\"mini-cart-option\">\n                              <ul class=\"like-com\">\n                                 <li class=\"post-button-item buy-button-item\"><a class=\"mr-0 ml-0\" href=\"javascript:void(0)\"><span class=\"lnr lnr-cart mr-0\"></span> Buy</a></li>\n                                 <li class=\"post-button-item wishlist-button-item\"><a class=\"mr-0\" href=\"javascript:void(0)\"><span class=\"lnr lnr-heart mr-0\"></span> Wishlist </a></li>\n                                 <li class=\"post-button-item suggest-button-item\"><a class=\"mr-0\" href=\"javascript:void(0)\"><span class=\"fa fa-paper-plane\"></span> Suggest</a></li>\n                              </ul>\n                           </div>\n                        </div>\n                        <div class=\"tag-box\">\n                           <div class=\"tagword\">\n                              <div class=\"aside-title\">\n                                 <h6>Tags</h6>\n                              </div>\n                              <div class=\"tagcloud\">\n                                 <a href=\"javascript:void(0);\">Business</a>\n                                 <a href=\"javascript:void(0);\">Marketing</a>\n                                 <a href=\"javascript:void(0);\">SEO</a>\n                                 <a href=\"javascript:void(0);\">strategy</a>\n                                 <a href=\"javascript:void(0);\">Map</a>\n                              </div>\n                           </div>\n                           <div class=\"like-com\">\n                              <a href=\"javascript:void(0)\"><i class=\"fa fa-share-square-o\"></i> Share</a>\n                           </div>\n                        </div>\n                        <div class=\"comment-section\">\n                           <ion-input type=\"text\" placeholder=\"Write Your Comment...\" class=\"commnetbar\"></ion-input>\n                           <button class=\"btn-style\"><i class=\"fa fa-reply\" aria-hidden=\"true\"></i></button>\n                        </div>\n                     </article>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n<!--Mobile Screen Ends-->\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  display: none !important; }\n\nion-header ion-toolbar ion-menu-button {\n  height: 35px;\n  position: inherit;\n  top: inherit;\n  right: inherit;\n  transition: inherit;\n  transition-delay: .1s; }\n\nion-header ion-toolbar ion-menu-button img {\n    max-width: 20px; }\n\nion-header ion-toolbar ion-title {\n  font-weight: 700; }\n\nion-header ion-toolbar ion-buttons {\n  font-size: 20px; }\n\nion-header ion-toolbar ion-buttons[mar-10] {\n    margin-right: 10px; }\n\n.commnetbar::-webkit-input-placeholder {\n  color: #444; }\n\n.commnetbar::-moz-placeholder {\n  color: #444; }\n\n.commnetbar:-ms-input-placeholder {\n  color: #444; }\n\n.commnetbar::-ms-input-placeholder {\n  color: #444; }\n\n.commnetbar::placeholder {\n  color: #444; }\n\n.swiper-slide img {\n  width: 189px !important;\n  max-width: 100% !important;\n  height: 200px !important;\n  max-height: 100% !important; }\n\nion-content ion-slide [new-users-mn] {\n  outline: 0px; }\n\nion-content [home-cate-sec] {\n  position: relative;\n  padding: 40px 0px 10px; }\n\nion-content [home-cate-sec] button.btnNext {\n    position: absolute;\n    right: -15px;\n    width: 40px;\n    height: 40px;\n    background: var(--ion-color-primary);\n    border-radius: 50%;\n    color: #fff !important;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    -webkit-transform: translate;\n            transform: translate;\n    font-size: 20px;\n    z-index: 11; }\n\nion-content [home-cate-sec] button.btnPrev {\n    position: absolute;\n    left: -15px;\n    width: 40px;\n    height: 40px;\n    background: var(--ion-color-primary);\n    border-radius: 50%;\n    color: #fff !important;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    font-size: 20px;\n    z-index: 11; }\n\n@media (min-width: 768px) {\n  ion-content .post-feed-main article.post-feed-item .activity-inner .post-feed-img [sharebtn-img] {\n    display: none; }\n  ion-content .logo-rating-sec {\n    display: none; } }\n\n@media (max-width: 767px) {\n  ion-content .logo-rating-sec {\n    display: block;\n    padding: 20px 5px;\n    position: relative;\n    background: url('header-bg.jpg') no-repeat center center/cover; }\n    ion-content .logo-rating-sec .vendor-profile-img1 img {\n      width: 48px;\n      height: 48px;\n      border: 1px solid #fff;\n      margin-right: 5px;\n      padding: 4px; }\n    ion-content .logo-rating-sec .vendor-profile-img1 span {\n      font-size: 14px; }\n    ion-content .logo-rating-sec .header-call-action {\n      display: flex;\n      width: 100%;\n      align-items: center;\n      justify-content: space-between; }\n      ion-content .logo-rating-sec .header-call-action .menu-right-ul {\n        padding: 0; }\n        ion-content .logo-rating-sec .header-call-action .menu-right-ul li a {\n          font-size: 20px;\n          padding: 0px 5px; }\n      ion-content .logo-rating-sec .header-call-action ion-select {\n        color: #fff;\n        --placeholder-opacity: 1; }\n  ion-content [home-cate-sec] {\n    padding: 20px 0px 10px; }\n    ion-content [home-cate-sec] button.btnNext {\n      display: none; }\n    ion-content [home-cate-sec] button.btnPrev {\n      display: none; }\n    ion-content [home-cate-sec] ion-slides {\n      padding-bottom: 20px; }\n  ion-content .home-page [headmn-sec] {\n    margin-bottom: 15px; }\n    ion-content .home-page [headmn-sec] h3 {\n      font-size: 20px;\n      margin-bottom: 0px; }\n  ion-content .home-page .product-item {\n    display: flex;\n    align-items: center;\n    background: #f9f9f9;\n    padding: 12px 10px;\n    margin-bottom: 20px; }\n    ion-content .home-page .product-item .product-thumb img {\n      max-height: 120px;\n      min-height: 120px;\n      width: 120px;\n      min-width: 120px;\n      -o-object-fit: cover;\n         object-fit: cover; }\n    ion-content .home-page .product-item .product-thumb .action-links {\n      right: 5px;\n      top: 5px; }\n      ion-content .home-page .product-item .product-thumb .action-links a {\n        font-size: 14px;\n        height: 28px;\n        width: 28px; }\n        ion-content .home-page .product-item .product-thumb .action-links a i {\n          line-height: 28px; }\n    ion-content .home-page .product-item .product-thumb .box-label .label-product {\n      top: 5px;\n      font-size: 10px;\n      line-height: 20px;\n      min-width: 30px;\n      padding: 0 8px; }\n    ion-content .home-page .product-item .product-caption {\n      padding: 0px 4px 0px 10px; }\n      ion-content .home-page .product-item .product-caption .manufacture-product p {\n        line-height: 18px; }\n        ion-content .home-page .product-item .product-caption .manufacture-product p a {\n          color: #979797;\n          font-size: 12px;\n          line-height: 17px; }\n      ion-content .home-page .product-item .product-caption .product-name h4 {\n        font-size: 12px;\n        font-weight: 600;\n        line-height: 19px;\n        padding: 3px 0; }\n      ion-content .home-page .product-item .product-caption .ratings {\n        padding: 2px 0; }\n        ion-content .home-page .product-item .product-caption .ratings span {\n          font-size: 12px;\n          margin-right: 1px;\n          color: #7c7c7c; }\n          ion-content .home-page .product-item .product-caption .ratings span.yellow {\n            color: var(--ion-color-secondary); }\n      ion-content .home-page .product-item .product-caption .price-box .regular-price {\n        color: #7c7c7c;\n        font-size: 13px;\n        font-weight: 600; }\n      ion-content .home-page .product-item .product-caption .btn-cart {\n        font-size: 12px;\n        line-height: 30px;\n        padding: 0 18px;\n        bottom: 2px; }\n  ion-content .home-page .post-feed-main article.post-feed-item {\n    padding-bottom: 20px;\n    margin-bottom: 20px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-avatar {\n      width: 45px;\n      height: 45px;\n      margin-right: 10px;\n      border-radius: 50%;\n      overflow: hidden; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head h4 {\n      line-height: 20px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head h4 a {\n        font-size: 13px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head p {\n      font-size: 12px;\n      line-height: 20px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-inner p {\n      font-size: 12px;\n      line-height: 20px;\n      color: #777; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img img {\n      width: 100%;\n      height: 160px;\n      -o-object-fit: cover;\n         object-fit: cover; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img [sharebtn-img] {\n      position: absolute;\n      right: 0px;\n      top: 10px;\n      background: rgba(115, 188, 229, 0.8);\n      color: #fff;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      padding: 6px 10px;\n      font-size: 16px;\n      border-radius: 30px 0px 0px 30px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom {\n      padding-bottom: 0px !important;\n      flex-direction: row;\n      align-items: center; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li a {\n        font-size: 13px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li a i {\n          margin-right: 3px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images {\n        margin-right: 0px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images span {\n          width: 28px;\n          height: 28px;\n          left: 0px;\n          margin-left: -15px; }\n          ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images span:first-child {\n            margin-left: 0px; }\n          ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images span.likedbycount {\n            width: 28px;\n            height: 28px;\n            line-height: 26px;\n            font-size: 11px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option {\n        margin-top: 0px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item {\n          margin: 0px 0px 0px 4px !important; }\n          ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item a {\n            height: 26px;\n            width: 26px;\n            padding: 0px 8px;\n            font-size: 0px !important; }\n            ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item a span {\n              padding: 0px;\n              margin: 0px;\n              font-size: 10px; }\n            ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item a:hover {\n              margin-left: 0px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom [share-mb-none] {\n        display: none; }\n    ion-content .home-page .post-feed-main article.post-feed-item .commnetbar {\n      padding-left: 10px !important; }\n    ion-content .home-page .post-feed-main article.post-feed-item .tag-box {\n      padding-bottom: 5px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .tag-box .tagword .aside-title {\n        margin-bottom: 8px;\n        display: none; }\n      ion-content .home-page .post-feed-main article.post-feed-item .tag-box .tagword .tagcloud a {\n        padding: 3px 8px;\n        margin-right: 4px;\n        margin-bottom: 6px;\n        font-size: 10px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .tag-box .like-com {\n        display: none; }\n    ion-content .home-page .post-feed-main article.post-feed-item .comment-section {\n      margin: 5px 0px 0px;\n      padding: 0 15px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .comment-section ion-input.commnetbar {\n        font-size: 12px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlFLHdCQUFzQixFQUFBOztBQUp4QjtFQVVHLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQXFCLEVBQUE7O0FBZnhCO0lBa0JJLGVBQWUsRUFBQTs7QUFsQm5CO0VBdUJHLGdCQUFlLEVBQUE7O0FBdkJsQjtFQTJCRyxlQUFjLEVBQUE7O0FBM0JqQjtJQThCSSxrQkFBaUIsRUFBQTs7QUFLckI7RUFFSSxXQUFVLEVBQUE7O0FBRmQ7RUFFSSxXQUFVLEVBQUE7O0FBRmQ7RUFFSSxXQUFVLEVBQUE7O0FBRmQ7RUFFSSxXQUFVLEVBQUE7O0FBRmQ7RUFFSSxXQUFVLEVBQUE7O0FBRWQ7RUFDSSx1QkFBc0I7RUFDdEIsMEJBQXlCO0VBQ3pCLHdCQUF1QjtFQUN2QiwyQkFBMEIsRUFBQTs7QUFFOUI7RUFNTSxZQUFXLEVBQUE7O0FBTmpCO0VBV0Usa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQVp4QjtJQWlCSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsNEJBQW1CO1lBQW5CLG9CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVyxFQUFBOztBQS9CZjtJQW1DSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLFdBQVcsRUFBQTs7QUFNZjtFQUNDO0lBY08sYUFBWSxFQUFBO0VBZG5CO0lBdUJLLGFBQVksRUFBQSxFQUNmOztBQUdIO0VBQ0M7SUFJRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw4REFBNkUsRUFBQTtJQVAvRTtNQVlJLFdBQVc7TUFDWCxZQUFZO01BQ1osc0JBQXNCO01BQ3RCLGlCQUFpQjtNQUNqQixZQUFZLEVBQUE7SUFoQmhCO01Bb0JJLGVBQWUsRUFBQTtJQXBCbkI7TUF5QkcsYUFBYTtNQUNiLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsOEJBQThCLEVBQUE7TUE1QmpDO1FBK0JPLFVBQVUsRUFBQTtRQS9CakI7VUFvQ00sZUFBZTtVQUNmLGdCQUFnQixFQUFBO01BckN0QjtRQTJDSSxXQUFXO1FBQ1gsd0JBQXNCLEVBQUE7RUE1QzFCO0lBa0RLLHNCQUFzQixFQUFBO0lBbEQzQjtNQXVESSxhQUFZLEVBQUE7SUF2RGhCO01BMkRJLGFBQVksRUFBQTtJQTNEaEI7TUFnRUcsb0JBQW9CLEVBQUE7RUFoRXZCO0lBdUVNLG1CQUFtQixFQUFBO0lBdkV6QjtNQTBFSSxlQUFlO01BQ2Ysa0JBQWtCLEVBQUE7RUEzRXRCO0lBZ0ZHLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNOLG1CQUFtQixFQUFBO0lBcEZsQztNQXlGSyxpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsb0JBQWlCO1NBQWpCLGlCQUFpQixFQUFBO0lBN0Z0QjtNQWlHSyxVQUFVO01BQ1YsUUFBUSxFQUFBO01BbEdiO1FBcUdNLGVBQWU7UUFDZixZQUFZO1FBQ1osV0FBVyxFQUFBO1FBdkdqQjtVQTBHTyxpQkFBaUIsRUFBQTtJQTFHeEI7TUFrSE0sUUFBUTtNQUNSLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGNBQWMsRUFBQTtJQXRIcEI7TUE0SG1CLHlCQUF5QixFQUFBO01BNUg1QztRQWlJTSxpQkFBaUIsRUFBQTtRQWpJdkI7VUFvSU8sY0FBYztVQUNkLGVBQWU7VUFDZixpQkFBaUIsRUFBQTtNQXRJeEI7UUE4SU0sZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsY0FBYyxFQUFBO01BakpwQjtRQXNKUSxjQUFjLEVBQUE7UUF0SnRCO1VBeUpNLGVBQWU7VUFDZixpQkFBaUI7VUFDakIsY0FBYyxFQUFBO1VBM0pwQjtZQThKVSxpQ0FBaUMsRUFBQTtNQTlKM0M7UUFzS00sY0FBYztRQUNkLGVBQWU7UUFDZixnQkFBZ0IsRUFBQTtNQXhLdEI7UUE2S0ssZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsV0FBVyxFQUFBO0VBaExoQjtJQTBMUSxvQkFBb0I7SUFDTCxtQkFBbUIsRUFBQTtJQTNMMUM7TUFnTU8sV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ00sZ0JBQWdCLEVBQUE7SUFwTS9DO01BME1RLGlCQUFpQixFQUFBO01BMU16QjtRQTZNUyxlQUFlLEVBQUE7SUE3TXhCO01Ba05RLGVBQWU7TUFDZixpQkFBaUIsRUFBQTtJQW5OekI7TUEyTk8sZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixXQUFXLEVBQUE7SUE3TmxCO01BbU9RLFdBQVc7TUFDWCxhQUFhO01BQ2Isb0JBQWdCO1NBQWhCLGlCQUFnQixFQUFBO0lBck94QjtNQXlPUSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFNBQVM7TUFDVCxvQ0FBdUM7TUFDdkMsV0FBVztNQUNYLG9CQUFvQjtNQUNwQixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsZ0NBQWdDLEVBQUE7SUFuUHhDO01BeVAyQiw4QkFBNkI7TUFDbEQsbUJBQW1CO01BQ25CLG1CQUFtQixFQUFBO01BM1B6QjtRQW9RMkMsZUFBZSxFQUFBO1FBcFExRDtVQXVRVyxpQkFBaUIsRUFBQTtNQXZRNUI7UUE0UWEsaUJBQWdCLEVBQUE7UUE1UTdCO1VBK1FXLFdBQVc7VUFDWCxZQUFZO1VBQ1osU0FBUztVQUNULGtCQUFrQixFQUFBO1VBbFI3QjtZQXFSWSxnQkFBZ0IsRUFBQTtVQXJSNUI7WUF5UlksV0FBVztZQUNYLFlBQVk7WUFDMkIsaUJBQWlCO1lBQ2pCLGVBQWUsRUFBQTtNQTVSbEU7UUFxU1UsZUFBZSxFQUFBO1FBclN6QjtVQThTYyxrQ0FBaUMsRUFBQTtVQTlTL0M7WUFpVFksWUFBWTtZQUNaLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIseUJBQXdCLEVBQUE7WUFwVHBDO2NBdVRhLFlBQVk7Y0FDWixXQUFXO2NBQ1gsZUFBZSxFQUFBO1lBelQ1QjtjQTZUYSxnQkFBZ0IsRUFBQTtNQTdUN0I7UUF1VVUsYUFBWSxFQUFBO0lBdlV0QjtNQTJVTSw2QkFBNkIsRUFBQTtJQTNVbkM7TUErVVMsbUJBQW1CLEVBQUE7TUEvVTVCO1FBb1ZRLGtCQUFrQjtRQUNsQixhQUFZLEVBQUE7TUFyVnBCO1FBMlZTLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGVBQWUsRUFBQTtNQTlWeEI7UUFvV1UsYUFBWSxFQUFBO0lBcFd0QjtNQXlXUyxtQkFBbUI7TUFDdEIsZUFBZSxFQUFBO01BMVdyQjtRQStXVyxlQUFlLEVBQUEsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlclxue1xuXHQmOjphZnRlclxuXHR7XG5cdFx0ZGlzcGxheTpub25lIWltcG9ydGFudDtcblx0fVxuXHRpb24tdG9vbGJhclxuXHR7XG5cdFx0aW9uLW1lbnUtYnV0dG9uXG5cdFx0e1xuXHRcdFx0aGVpZ2h0OiAzNXB4O1xuXHRcdFx0cG9zaXRpb246IGluaGVyaXQ7XG5cdFx0XHR0b3A6IGluaGVyaXQ7XG5cdFx0XHRyaWdodDogaW5oZXJpdDtcblx0XHRcdHRyYW5zaXRpb246IGluaGVyaXQ7XG5cdFx0XHR0cmFuc2l0aW9uLWRlbGF5OiAuMXM7XG5cdFx0XHRpbWdcblx0XHRcdHtcblx0XHRcdFx0bWF4LXdpZHRoOiAyMHB4O1xuXHRcdFx0fVx0XHRcblx0XHR9XG5cdFx0aW9uLXRpdGxlXG5cdFx0e1xuXHRcdFx0Zm9udC13ZWlnaHQ6NzAwO1xuXHRcdH0gXG5cdFx0aW9uLWJ1dHRvbnNcblx0XHR7XG5cdFx0XHRmb250LXNpemU6MjBweDtcblx0XHRcdCZbbWFyLTEwXVxuXHRcdFx0e1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6MTBweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbi5jb21tbmV0YmFyOjpwbGFjZWhvbGRlclxue1xuICAgIGNvbG9yOiM0NDQ7XG59XG4uc3dpcGVyLXNsaWRlIGltZ3tcbiAgICB3aWR0aDogMTg5cHghaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyMDBweCFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudFxue1xuICAgIGlvbi1zbGlkZVxuXHR7XG5cdCAgICBbbmV3LXVzZXJzLW1uXVxuXHRcdHtcblx0XHQgICAgb3V0bGluZTowcHg7XG5cdFx0fVxuXHR9XG5cdFtob21lLWNhdGUtc2VjXSBcblx0e1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRwYWRkaW5nOiA0MHB4IDBweCAxMHB4O1xuXHRcdGJ1dHRvblxuXHRcdHtcblx0XHRcdCYuYnRuTmV4dCBcblx0XHRcdHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRyaWdodDogLTE1cHg7XG5cdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0dG9wOiA1MCU7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0XHRcdFx0dHJhbnNmb3JtOnRyYW5zbGF0ZTtcblx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHR6LWluZGV4OiAxMTtcblx0XHRcdH1cblx0XHRcdCYuYnRuUHJldiBcblx0XHRcdHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRsZWZ0OiAtMTVweDtcblx0XHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHR0b3A6IDUwJTtcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdHotaW5kZXg6IDExO1xuXHRcdFx0fVx0XHRcblx0XHR9XHRcdFxuXHR9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXHRpb24tY29udGVudFxuXHR7XG5cdFx0LnBvc3QtZmVlZC1tYWluXG5cdFx0e1xuXHRcdFx0YXJ0aWNsZVxuXHRcdFx0e1xuXHRcdFx0XHQmLnBvc3QtZmVlZC1pdGVtXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQuYWN0aXZpdHktaW5uZXJcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQucG9zdC1mZWVkLWltZ1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRbc2hhcmVidG4taW1nXVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTpub25lO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5sb2dvLXJhdGluZy1zZWNcblx0XHR7XG5cdFx0ICAgIGRpc3BsYXk6bm9uZTtcblx0XHR9XHRcdFxuXHR9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcblx0aW9uLWNvbnRlbnRcblx0e1xuXHQgICAgLmxvZ28tcmF0aW5nLXNlY1xuXHRcdHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0cGFkZGluZzogMjBweCA1cHg7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9oZWFkZXItYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcdFxuXHRcdFx0LnZlbmRvci1wcm9maWxlLWltZzEgXG5cdFx0XHR7XG5cdFx0XHRcdGltZyBcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHdpZHRoOiA0OHB4O1xuXHRcdFx0XHRcdGhlaWdodDogNDhweDtcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogNXB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDRweDtcblx0XHRcdFx0fVxuXHRcdFx0XHRzcGFuIFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHR9XHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdC5oZWFkZXItY2FsbC1hY3Rpb24gXG5cdFx0XHR7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHRcdFx0XG5cdFx0XHRcdC5tZW51LXJpZ2h0LXVsIFxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgICBwYWRkaW5nOiAwO1xuXHRcdFx0XHRcdGxpIFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGEgXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMHB4IDVweDtcblx0XHRcdFx0XHRcdH1cdFx0XHRcblx0XHRcdFx0XHR9XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdFx0aW9uLXNlbGVjdCBcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcblx0XHRcdFx0fVx0XHRcdFx0XG5cdFx0XHR9XHRcdFx0XG5cdFx0fVx0XG5cdFx0W2hvbWUtY2F0ZS1zZWNdIFxuXHRcdHtcdFxuXHRcdCAgICBwYWRkaW5nOiAyMHB4IDBweCAxMHB4O1xuXHRcdFx0YnV0dG9uXG5cdFx0XHR7XG5cdFx0XHRcdCYuYnRuTmV4dCBcblx0XHRcdFx0e1x0XHRcdFxuXHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHQmLmJ0blByZXYgXG5cdFx0XHRcdHtcdFx0XHRcblx0XHRcdFx0XHRkaXNwbGF5Om5vbmU7XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlvbi1zbGlkZXNcblx0XHRcdHtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDIwcHg7XHRcdFxuXHRcdFx0fVx0XHRcdFxuXHRcdH1cblx0XHQuaG9tZS1wYWdlXG5cdFx0e1x0XG5cdFx0XHRbaGVhZG1uLXNlY10gXG5cdFx0XHR7XG5cdFx0XHQgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblx0XHRcdFx0aDMgXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRcdFx0XHR9XHRcdFx0XHRcblx0XHRcdH1cdFxuXHRcdFx0LnByb2R1Y3QtaXRlbVxuXHRcdFx0eyBcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y5ZjlmOTtcblx0XHRcdFx0cGFkZGluZzogMTJweCAxMHB4O1x0XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcdFx0XHRcdFxuXHRcdFx0XHQucHJvZHVjdC10aHVtYlxuXHRcdFx0XHR7IFxuXHRcdFx0XHRcdGltZyBcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRtYXgtaGVpZ2h0OiAxMjBweDtcblx0XHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDEyMHB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEyMHB4O1xuXHRcdFx0XHRcdFx0bWluLXdpZHRoOiAxMjBweDtcblx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRcdH1cdFxuXHRcdFx0XHRcdC5hY3Rpb24tbGlua3MgXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDVweDtcblx0XHRcdFx0XHRcdHRvcDogNXB4O1xuXHRcdFx0XHRcdFx0YSBcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDI4cHg7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAyOHB4O1xuXHRcdFx0XHRcdFx0XHRpIFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDI4cHg7XG5cdFx0XHRcdFx0XHRcdH1cdFxuXHRcdFx0XHRcdFx0fVx0XG5cdFx0XHRcdFx0fVx0XG5cdFx0XHRcdFx0LmJveC1sYWJlbFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC5sYWJlbC1wcm9kdWN0IFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0b3A6IDVweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjBweDtcblx0XHRcdFx0XHRcdFx0bWluLXdpZHRoOiAzMHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDhweDtcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVx0XG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcblx0XHRcdFx0fVx0XHRcdFxuXHRcdFx0XHQucHJvZHVjdC1jYXB0aW9uXG5cdFx0XHRcdHsgXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA0cHggMHB4IDEwcHg7XHRcdFx0XHRcblx0XHRcdFx0XHQubWFudWZhY3R1cmUtcHJvZHVjdCBcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRwIFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMThweDtcblx0XHRcdFx0XHRcdFx0YSBcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjOTc5Nzk3O1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTdweDtcblx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVx0XHRcdFxuXHRcdFx0XHRcdC5wcm9kdWN0LW5hbWUgXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aDQgXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE5cHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDNweCAwO1x0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cdFx0XHRcblx0XHRcdFx0XHQucmF0aW5ncyBcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICAgIHBhZGRpbmc6IDJweCAwO1xuXHRcdFx0XHRcdFx0c3BhbiBcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDFweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM3YzdjN2M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi55ZWxsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG5cdFx0XHRcdFx0XHRcdCAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG5cdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cdFx0XHRcblx0XHRcdFx0XHQucHJpY2UtYm94IFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC5yZWd1bGFyLXByaWNlIFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzdjN2M3Yztcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuYnRuLWNhcnQgXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDE4cHg7XG5cdFx0XHRcdFx0XHRib3R0b206IDJweDtcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxuXHRcdFx0XHR9XHRcdFxuXHRcdFx0fVxuICAgICAgICAgICAgLnBvc3QtZmVlZC1tYWluXG4gICAgICAgICAgICB7XG5cdFx0XHQgICAgYXJ0aWNsZVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ji5wb3N0LWZlZWQtaXRlbVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgICAgcGFkZGluZy1ib3R0b206IDIwcHg7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1x0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdCAgICAuYWN0aXZpdHktaGVhZGVyXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQgICAgLmFjdGl2aXR5LWF2YXRhclxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDQ1cHg7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0NXB4O1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcdFxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0LmFjdGl2aXR5LWhlYWRcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGg0IFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0YSBcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRwIFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuYWN0aXZpdHktaW5uZXJcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cCBcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjBweDtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogIzc3Nztcblx0XHRcdFx0XHRcdFx0fVx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBvc3QtZmVlZC1pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG5cdFx0XHRcdFx0XHRcdFx0aW1nIFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxNjBweDtcblx0XHRcdFx0XHRcdFx0XHRcdG9iamVjdC1maXQ6Y292ZXI7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFtzaGFyZWJ0bi1pbWddIFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0XHRcdHJpZ2h0OiAwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDExNSAsIDE4OCAsIDIyOSAsIDAuOCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRcdFx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogNnB4IDEwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAzMHB4IDBweCAwcHggMzBweDtcblx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5wb3N0LWRldGFpbHMtYWN0aXZpdHktYm90dG9tXG5cdFx0XHRcdFx0XHR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweCFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHRcdFx0XHRcdFx0XHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcblx0XHRcdFx0XHRcdFx0XHQmLmxpa2UtY29tIFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGxpXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgYVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogM3B4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lmxpa2VkYnktaW1hZ2VzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIG1hcmdpbi1yaWdodDowcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3BhbiBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMjhweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMjhweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6IDBweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMTVweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCY6Zmlyc3QtY2hpbGRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ji5saWtlZGJ5Y291bnRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDI4cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMjhweDtcdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHQgICAgIFxuXHRcdFx0XHRcdFx0XHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1pbmktY2FydC1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG5cdFx0XHRcdFx0XHRcdCAgICBtYXJnaW4tdG9wOiAwcHg7XG5cdFx0XHRcdFx0XHRcdCAgICB1bFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHQgICAgJi5saWtlLWNvbVxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIGxpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQmLnBvc3QtYnV0dG9uLWl0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIG1hcmdpbjogMHB4IDBweCAwcHggNHB4IWltcG9ydGFudDsgICAgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDI2cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAyNnB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwcHggOHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDBweCFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNwYW4gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCY6aG92ZXIgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NoYXJlLW1iLW5vbmVdXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHQgICAgZGlzcGxheTpub25lO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuY29tbW5ldGJhciB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnRhZy1ib3hcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuXHRcdFx0XHRcdFx0ICAgIC50YWd3b3JkXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHQuYXNpZGUtdGl0bGUgXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTpub25lO1xuXHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQgICAgLnRhZ2Nsb3VkXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0YSBcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogM3B4IDhweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA0cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDZweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lmxpa2UtY29tXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ICAgIGRpc3BsYXk6bm9uZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmNvbW1lbnQtc2VjdGlvblxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ICAgIG1hcmdpbjogNXB4IDBweCAwcHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMTVweDtcblx0XHRcdFx0XHRcdFx0aW9uLWlucHV0XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ICAgICYuY29tbW5ldGJhclxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHQgICAgZm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVx0XHRcdFxuXHRcdH1cdFx0XG5cdH1cbn0iXX0= */"

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
        this.base_url = 'http://dev.indiit.solutions/TJ/dev/dev/public/uploads/userprofile/';
        this.proImage_url = 'http://dev.indiit.solutions/TJ/dev/dev/public/uploads/product_images/';
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
        this.userService.postData({ limit: '10' }, 'newProducts').subscribe(function (result) {
            _this.new_products = result.products;
            console.log();
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