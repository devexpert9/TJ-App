(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"],{

/***/ "./src/app/blog/blog.module.ts":
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/*! exports provided: BlogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageModule", function() { return BlogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _blog_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog.page */ "./src/app/blog/blog.page.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");









var routes = [
    {
        path: '',
        component: _blog_page__WEBPACK_IMPORTED_MODULE_7__["BlogPage"]
    }
];
var BlogPageModule = /** @class */ (function () {
    function BlogPageModule() {
    }
    BlogPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_8__["HeaderPageModule"]
            ],
            declarations: [_blog_page__WEBPACK_IMPORTED_MODULE_7__["BlogPage"]],
            entryComponents: [],
        })
    ], BlogPageModule);
    return BlogPageModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.page.html":
/*!*************************************!*\
  !*** ./src/app/blog/blog.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"darkred\"  text-uppercase>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Blog\n    </ion-title>\n  <ion-buttons slot=\"end\" > \n          <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n\t     <ion-buttons slot=\"end\">\n          <ion-icon name=\"pin\"></ion-icon>\n    </ion-buttons>\n<ion-buttons slot=\"end\" > \n\t<ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\t\n\t </ion-buttons>\n  </ion-toolbar>\n      <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n\t              <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n\t              <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n\t              <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n\t              <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t   </div>\n</ion-header>  -->\n<ion-header class=\"ion-hide-md-up\">\n    <ion-toolbar color=\"secondary\">\n        <ion-menu-button slot=\"start\">\n\t  \t    <img height=\"15px\" src=\"assets/img/menu.png\" alt=\"\"/>\n\t  \t</ion-menu-button>\n        <ion-title class=\"ion-text-center\">News Feed</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n<app-header></app-header>\n<div class=\"main-wrapper  home-page newsfeed\">\n   <div mob-container class=\"container\">\n\t   <div class=\"row\">\n\t\t\t<div class=\"col-lg-12\" mob-icon-sec>\t\n\t\t\t\t<div class=\"header-call-action menu-right\">\n\t\t\t\t\t<ul class=\"menu-right-ul\">\n\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t   \n\t\t\t<div class=\"col-md-10 offset-md-1\">\n\t\t\t\t<div class=\"newsfeedinner mb-0\">\n\t\t\t\t\t<div class=\"newsfeed-header\">\n\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t<div class=\"message-item-img\">\n\t\t\t\t\t\t\t\t<img src=\"assets/img/post-4.jpg\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"newsfeed_post-popup\" (click)=\"presentModal()\">\n\t\t\t\t\t\t\t\t\t<ion-textarea class=\"form-control\" placeholder=\"Share some what you are thinking?\"></ion-textarea>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"newsfeed-post-bottom\">\n\t\t\t\t\t\t\t<div class=\"newsfeed-attachments\">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li class=\"tooltip-item\" data-tooltip=\"Check In\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"add-loc\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-map-marker\"></i> \n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"tooltip-item\" data-tooltip=\"Add Photos/Videos\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-image\"></i>\n\t\t\t\t\t\t\t\t\t\t<label class=\"fileContainer\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"tooltip-item\" data-tooltip=\"Go Live \">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-video-camera\"></i>\n\t\t\t\t\t\t\t\t\t\t<label class=\"fileContainer\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<button class=\"post-btn\" type=\"submit\" data-ripple=\"\">Post Status</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"post-feed-main\">\n\t\t\t\t\t<article class=\"post-feed-item\" *ngFor=\"let blog of all_blogs \">\n\t\t\t\t\t\t<div class=\"activity-header\">\n\t\t\t\t\t\t\t<div class=\"activity-avatar\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"  routerLink=\"/blog-detail/{{blog.blog_id}}\">\n\t\t\t\t\t\t\t\t\t<img src=\"assets/img/post-4.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"activity-head\">\n\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/blog-detail/{{blog.blog_id}}\">\n\t\t\t\t\t\t\t\t\t\t{{blog.blog_name}}\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t<p><span class=\"time-since\">Apple</span></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"activity-inner\">\n\t\t\t\t\t\t\t<p *ngIf=\"atob(blog.blog_description).length <= 200\" [innerHTML]=\"atob(blog.blog_description)\"></p>\n\t\t\t\t\t\t\t<p *ngIf=\"atob(blog.blog_description).length > 200\" [innerHTML]=\"atob(blog.blog_description).substr(0,200)+'...'\"></p>\n\t\t\t\t\t\t\t<div class=\"post-feed-img dft\">\n\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(blog.blog_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(blog.blog_image) == -1\" src=\"{{IMAGES_URL}}/blog_images/{{blog.blog_image}}\" alt=\"Image\">\n\t\t\t\t\t\t\t\t<span sharebtn-img><ion-icon name=\"share-social-outline\"></ion-icon></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"post-details-activity-bottom pb-10\">\n\t\t\t\t\t\t\t<ul class=\"like-com\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"fa fa-thumbs-up\"></i> Like</a>\n\t\t\t\t\t\t\t\t\t<div class=\"likedby-images\">\n\t\t\t\t\t\t\t\t\t\t<span><img src=\"assets/img/post-1.png\" class=\"img-fluid\" alt=\"\"></span>\n\t\t\t\t\t\t\t\t\t\t<span><img src=\"assets/img/post-2.png\" class=\"img-fluid\" alt=\"\"></span>\n\t\t\t\t\t\t\t\t\t\t<span><img src=\"assets/img/post-3.jpg\" class=\"img-fluid\" alt=\"\"></span>\n\t\t\t\t\t\t\t\t\t\t<span><img src=\"assets/img/post-4.jpg\" class=\"img-fluid\" alt=\"\"></span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"likedbycount\">15</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"mini-cart-option\">\n\t\t\t\t\t\t\t\t<ul class=\"like-com\">\n\t\t\t\t\t\t\t\t\t<li class=\"post-button-item buy-button-item\"><a class=\"mr-0\" href=\"javascript:void(0)\"><span class=\"lnr lnr-cart\"></span> Buy</a></li>\n\t\t\t\t\t\t\t\t\t<li class=\"post-button-item wishlist-button-item\"><a class=\"mr-0\" href=\"javascript:void(0)\"><span class=\"lnr lnr-heart mr-0\"></span> Wishlist </a></li>\n\t\t\t\t\t\t\t\t\t<li class=\"post-button-item suggest-button-item\"><a class=\"mr-0\" href=\"javascript:void(0)\"><span class=\"fa fa-paper-plane\"></span> Suggest</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"tag-box\">\n\t\t\t\t\t\t\t<div class=\"tagword\">\n\t\t\t\t\t\t\t\t<div class=\"aside-title\">\n\t\t\t\t\t\t\t\t\t<h6>Tags</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"tagcloud\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\">Business</a>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\">Marketing</a>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\">SEO</a>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\">strategy</a>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\">Map</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"like-com\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"fa fa-share-square-o\"></i> Share</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"comment-section\">\n\t\t\t\t\t\t\t<ion-input type=\"text\" placeholder=\"Write Your Comment...\" class=\"commnetbar\"></ion-input>\n\t\t\t\t\t\t\t<button class=\"btn-style\"><i class=\"fa fa-reply\" aria-hidden=\"true\"></i></button> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</article>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t</div>            \t\t\t\t\t\t\n\t\t\t</div>\n\t   </div>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\" *ngIf=\"all_blogs != ''\">\n\t\t\t\t<div pagination-container text-right class=\"ion-hide-md-down\">\n\t\t\t\t\t<ul class=\"list-inline list-unstyled list-sytr\">\n\t\t\t\t\t\t<li (click)=\"paginate('prev')\" class=\"prev\"><a><i class=\"fa fa-angle-left\"></i></a></li>\n\t\t\t\t\t\t<li (click)=\"paginate(i+1)\" *ngFor=\"let p of arrayOne(total_pages); let i = index \" [ngClass]=\"current_page == i+1 ? 'active' : ''\"><a>{{i+1}}</a></li>\n\t\t\t\t\t\t<li (click)=\"paginate('next')\" class=\"next\"><a><i class=\"fa fa-angle-right\"></i></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n   </div>\n</div>\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/blog/blog.page.scss":
/*!*************************************!*\
  !*** ./src/app/blog/blog.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  display: none !important; }\n\nion-header ion-toolbar ion-menu-button {\n  height: 35px;\n  position: inherit;\n  top: inherit;\n  right: inherit;\n  transition: inherit;\n  transition-delay: .1s; }\n\nion-header ion-toolbar ion-menu-button img {\n    max-width: 20px; }\n\nion-header ion-toolbar ion-title {\n  font-weight: 700; }\n\n@media (min-width: 768px) {\n  ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img [sharebtn-img] {\n    display: none; }\n  ion-content .home-page [mob-icon-sec] {\n    display: none; } }\n\n@media (max-width: 767px) {\n  ion-content .home-page [mob-container] {\n    max-width: 100%; }\n  ion-content .home-page .header-call-action {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: flex-end;\n    padding: 20px 0px; }\n    ion-content .home-page .header-call-action .menu-right-ul {\n      padding: 0; }\n      ion-content .home-page .header-call-action .menu-right-ul li {\n        margin-left: 7px; }\n        ion-content .home-page .header-call-action .menu-right-ul li a {\n          font-size: 16px;\n          padding: 0px;\n          color: #444;\n          width: 30px;\n          height: 30px;\n          line-height: 30px;\n          background: #f1f1f1;\n          border-radius: 50%; }\n          ion-content .home-page .header-call-action .menu-right-ul li a:hover {\n            background: var(--ion-color-primary);\n            color: #fff; }\n  ion-content .home-page .newsfeedinner {\n    margin-top: 0px; }\n    ion-content .home-page .newsfeedinner .newsfeed-header .media .message-item-img {\n      width: 50px;\n      min-width: 50px;\n      height: 50px; }\n      ion-content .home-page .newsfeedinner .newsfeed-header .media .message-item-img img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n    ion-content .home-page .newsfeedinner .newsfeed-header .media .media-body a.newsfeed_post-popup {\n      margin-left: 0px; }\n      ion-content .home-page .newsfeedinner .newsfeed-header .media .media-body a.newsfeed_post-popup ion-textarea {\n        height: 50px;\n        margin: 0px;\n        font-size: 12px;\n        --padding-bottom: 5px;\n        --padding-top: 5px;\n        --padding-start: 15px;\n        --padding-end: 15px;\n        padding: 0px; }\n    ion-content .home-page .newsfeedinner .newsfeed-header .newsfeed-post-bottom .newsfeed-attachments {\n      padding: 0px; }\n      ion-content .home-page .newsfeedinner .newsfeed-header .newsfeed-post-bottom .newsfeed-attachments ul li {\n        font-size: 18px; }\n      ion-content .home-page .newsfeedinner .newsfeed-header .newsfeed-post-bottom .newsfeed-attachments button.post-btn {\n        padding: 4px 12px;\n        font-size: 12px !important; }\n  ion-content .home-page .post-feed-main article.post-feed-item {\n    padding-bottom: 20px;\n    margin-bottom: 20px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-avatar {\n      width: 45px;\n      height: 45px;\n      margin-right: 10px;\n      border-radius: 50%;\n      overflow: hidden; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head h4 {\n      line-height: 20px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head h4 a {\n        font-size: 13px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head p {\n      font-size: 12px;\n      line-height: 20px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-inner p {\n      font-size: 12px;\n      line-height: 20px;\n      color: #777; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img img {\n      width: 100%;\n      height: 160px;\n      -o-object-fit: cover;\n         object-fit: cover; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img [sharebtn-img] {\n      position: absolute;\n      right: 0px;\n      top: 10px;\n      background: rgba(115, 188, 229, 0.8);\n      color: #fff;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      padding: 6px 10px;\n      font-size: 16px;\n      border-radius: 30px 0px 0px 30px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom {\n      padding-bottom: 0px !important;\n      flex-direction: row;\n      align-items: center; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li a {\n        font-size: 13px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li a i {\n          margin-right: 3px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images {\n        margin-right: 0px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images span {\n          width: 28px;\n          height: 28px;\n          left: 0px;\n          margin-left: -15px; }\n          ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images span:first-child {\n            margin-left: 0px; }\n          ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images span.likedbycount {\n            width: 28px;\n            height: 28px;\n            line-height: 26px;\n            font-size: 11px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option {\n        margin-top: 0px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item {\n          margin: 0px 0px 0px 4px !important; }\n          ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item a {\n            height: 26px;\n            width: 26px;\n            padding: 0px 8px;\n            font-size: 0px !important; }\n            ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item a span {\n              padding: 0px;\n              margin: 0px;\n              font-size: 10px; }\n            ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item a:hover {\n              margin-left: 0px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom [share-mb-none] {\n        display: none; }\n    ion-content .home-page .post-feed-main article.post-feed-item .tag-box {\n      padding-bottom: 5px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .tag-box .tagword .aside-title {\n        margin-bottom: 8px;\n        display: none; }\n      ion-content .home-page .post-feed-main article.post-feed-item .tag-box .tagword .tagcloud a {\n        padding: 3px 8px;\n        margin-right: 4px;\n        margin-bottom: 6px;\n        font-size: 10px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .tag-box .like-com {\n        display: none; }\n    ion-content .home-page .post-feed-main article.post-feed-item .comment-section {\n      margin: 5px 0px 0px;\n      padding: 0 15px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .comment-section ion-input.commnetbar {\n        font-size: 12px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9ibG9nL2Jsb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0Msd0JBQXNCLEVBQUE7O0FBSHZCO0VBU0csWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUIsRUFBQTs7QUFkeEI7SUFpQkksZUFBZSxFQUFBOztBQWpCbkI7RUFzQkcsZ0JBQWUsRUFBQTs7QUFLbEI7RUFDSTtJQWdCSyxhQUFZLEVBQUE7RUFoQmpCO0lBeUJHLGFBQVksRUFBQSxFQUNmOztBQUlKO0VBQ0k7SUFNQSxlQUFlLEVBQUE7RUFOZjtJQVVBLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUNiLGlCQUFpQixFQUFBO0lBZDdCO01BaUJJLFVBQVUsRUFBQTtNQWpCZDtRQW9CSyxnQkFBZ0IsRUFBQTtRQXBCckI7VUF1QkcsZUFBZTtVQUNmLFlBQVk7VUFDWixXQUFXO1VBQ1gsV0FBVztVQUNYLFlBQVk7VUFDWixpQkFBaUI7VUFDakIsbUJBQW1CO1VBQ25CLGtCQUFrQixFQUFBO1VBOUJyQjtZQWlDTyxvQ0FBb0M7WUFDcEMsV0FBVyxFQUFBO0VBbENsQjtJQTBDRyxlQUFjLEVBQUE7SUExQ2pCO01BaURHLFdBQVc7TUFDWCxlQUFlO01BQ2YsWUFBWSxFQUFBO01BbkRmO1FBc0RPLFdBQVU7UUFDYixZQUFXO1FBQ1Isb0JBQWlCO1dBQWpCLGlCQUFpQixFQUFBO0lBeER4QjtNQWlFSyxnQkFBZ0IsRUFBQTtNQWpFckI7UUFvRU0sWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2YscUJBQWlCO1FBQ2pCLGtCQUFjO1FBQ2QscUJBQWdCO1FBQ2hCLG1CQUFjO1FBQ2QsWUFBWSxFQUFBO0lBM0VsQjtNQXFGRyxZQUFZLEVBQUE7TUFyRmY7UUEwRkssZUFBZSxFQUFBO01BMUZwQjtRQWlHSyxpQkFBaUI7UUFDakIsMEJBQTBCLEVBQUE7RUFsRy9CO0lBZ0hFLG9CQUFvQjtJQUNwQixtQkFBbUIsRUFBQTtJQWpIckI7TUFzSEksV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGdCQUFnQixFQUFBO0lBMUhwQjtNQWdJSyxpQkFBaUIsRUFBQTtNQWhJdEI7UUFtSU0sZUFBZSxFQUFBO0lBbklyQjtNQXdJSyxlQUFlO01BQ2YsaUJBQWlCLEVBQUE7SUF6SXRCO01BaUpJLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsV0FBVyxFQUFBO0lBbkpmO01BeUpLLFdBQVc7TUFDWCxhQUFhO01BQ2Isb0JBQWdCO1NBQWhCLGlCQUFnQixFQUFBO0lBM0pyQjtNQStKSyxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFNBQVM7TUFDVCxvQ0FBdUM7TUFDdkMsV0FBVztNQUNYLG9CQUFvQjtNQUNwQixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsZ0NBQWdDLEVBQUE7SUF6S3JDO01BK0tHLDhCQUE2QjtNQUM3QixtQkFBbUI7TUFDbkIsbUJBQW1CLEVBQUE7TUFqTHRCO1FBMExPLGVBQWUsRUFBQTtRQTFMdEI7VUE2TFEsaUJBQWlCLEVBQUE7TUE3THpCO1FBa01PLGlCQUFnQixFQUFBO1FBbE12QjtVQXFNUSxXQUFXO1VBQ1gsWUFBWTtVQUNaLFNBQVM7VUFDVCxrQkFBa0IsRUFBQTtVQXhNMUI7WUEyTVMsZ0JBQWdCLEVBQUE7VUEzTXpCO1lBK01TLFdBQVc7WUFDWCxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGVBQWUsRUFBQTtNQWxOeEI7UUEyTkksZUFBZSxFQUFBO1FBM05uQjtVQW9PUSxrQ0FBaUMsRUFBQTtVQXBPekM7WUF1T1MsWUFBWTtZQUNaLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIseUJBQXdCLEVBQUE7WUExT2pDO2NBNk9VLFlBQVk7Y0FDWixXQUFXO2NBQ1gsZUFBZSxFQUFBO1lBL096QjtjQW1QVSxnQkFBZ0IsRUFBQTtNQW5QMUI7UUE2UEksYUFBWSxFQUFBO0lBN1BoQjtNQWtRRyxtQkFBbUIsRUFBQTtNQWxRdEI7UUF1UUssa0JBQWtCO1FBQ2xCLGFBQVksRUFBQTtNQXhRakI7UUE4UU0sZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsZUFBZSxFQUFBO01BalJyQjtRQXVSSSxhQUFZLEVBQUE7SUF2UmhCO01BNFJHLG1CQUFtQjtNQUNuQixlQUFlLEVBQUE7TUE3UmxCO1FBa1NLLGVBQWUsRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcblx0Jjo6YWZ0ZXJcclxuXHR7XHJcblx0ZGlzcGxheTpub25lIWltcG9ydGFudDtcclxuXHR9XHJcblx0aW9uLXRvb2xiYXJcclxuXHR7XHJcblx0XHRpb24tbWVudS1idXR0b25cclxuXHRcdHtcclxuXHRcdFx0aGVpZ2h0OiAzNXB4O1xyXG5cdFx0XHRwb3NpdGlvbjogaW5oZXJpdDtcclxuXHRcdFx0dG9wOiBpbmhlcml0O1xyXG5cdFx0XHRyaWdodDogaW5oZXJpdDtcclxuXHRcdFx0dHJhbnNpdGlvbjogaW5oZXJpdDtcclxuXHRcdFx0dHJhbnNpdGlvbi1kZWxheTogLjFzO1xyXG5cdFx0XHRpbWdcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG1heC13aWR0aDogMjBweDtcclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cclxuXHRcdGlvbi10aXRsZVxyXG5cdFx0e1xyXG5cdFx0XHRmb250LXdlaWdodDo3MDA7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGlvbi1jb250ZW50XHJcblx0e1xyXG5cdFx0LmhvbWUtcGFnZVxyXG5cdFx0e1xyXG5cdFx0XHQucG9zdC1mZWVkLW1haW5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFydGljbGVcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQmLnBvc3QtZmVlZC1pdGVtXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdC5hY3Rpdml0eS1pbm5lclxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0LnBvc3QtZmVlZC1pbWdcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRbc2hhcmVidG4taW1nXVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5Om5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcdFxyXG5cdFx0ICAgIFttb2ItaWNvbi1zZWNdXHJcblx0XHRcdHtcclxuXHRcdFx0ICAgIGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGlvbi1jb250ZW50XHJcblx0e1xyXG5cdCAgICAuaG9tZS1wYWdlXHJcblx0XHR7XHJcblx0XHRcdFttb2ItY29udGFpbmVyXSBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG1heC13aWR0aDogMTAwJTtcclxuXHRcdFx0fVx0XHRcclxuXHRcdFx0LmhlYWRlci1jYWxsLWFjdGlvbiBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1x0XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDBweDtcdFx0XHRcdFxyXG5cdFx0XHRcdC5tZW51LXJpZ2h0LXVsIFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHQgICAgcGFkZGluZzogMDtcclxuXHRcdFx0XHRcdGxpIFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcblx0XHRcdFx0XHRcdGEgXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMHB4O1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjNDQ0O1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAzMHB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzBweDtcclxuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdFx0XHQmOmhvdmVyXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdCAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQgICAgY29sb3I6ICNmZmY7XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cdFx0XHRcclxuXHRcdFx0XHRcdH1cdFx0XHRcclxuXHRcdFx0XHR9XHRcdFx0XHJcblx0XHRcdH1cdFx0XHJcblx0XHRcdC5uZXdzZmVlZGlubmVyXHJcblx0XHRcdHtcclxuXHRcdFx0ICAgIG1hcmdpbi10b3A6MHB4O1xyXG5cdFx0XHRcdC5uZXdzZmVlZC1oZWFkZXJcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0ICAgIC5tZWRpYVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQubWVzc2FnZS1pdGVtLWltZyBcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA1MHB4O1xyXG5cdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogNTBweDtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHRcdFx0XHRcdFx0aW1nXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdCAgICB3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OjEwMCU7XHJcblx0XHRcdFx0XHRcdFx0ICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQubWVkaWEtYm9keVxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0YVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdCYubmV3c2ZlZWRfcG9zdC1wb3B1cCBcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aW9uLXRleHRhcmVhIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctYm90dG9tOiA1cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLXRvcDogNXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lm5ld3NmZWVkLXBvc3QtYm90dG9tXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdC5uZXdzZmVlZC1hdHRhY2htZW50cyBcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDBweDtcclxuXHRcdFx0XHRcdFx0XHR1bFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGxpIFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRidXR0b25cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHQmLnBvc3QtYnRuXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDRweCAxMnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQucG9zdC1mZWVkLW1haW5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFydGljbGVcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQmLnBvc3QtZmVlZC1pdGVtXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAyMHB4OyAgIFxyXG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1x0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQuYWN0aXZpdHktaGVhZGVyXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQuYWN0aXZpdHktYXZhdGFyXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDQ1cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDQ1cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHRcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQuYWN0aXZpdHktaGVhZFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGg0IFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0cCBcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuYWN0aXZpdHktaW5uZXJcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHAgXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogIzc3NztcclxuXHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHQucG9zdC1mZWVkLWltZ1xyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGltZyBcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMTYwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9iamVjdC1maXQ6Y292ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRbc2hhcmVidG4taW1nXSBcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyaWdodDogMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IDEwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMTE1ICwgMTg4ICwgMjI5ICwgMC44KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogNnB4IDEwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMzBweCAwcHggMHB4IDMwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5wb3N0LWRldGFpbHMtYWN0aXZpdHktYm90dG9tXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMHB4IWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR1bFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdCYubGlrZS1jb20gXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAzcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQubGlrZWRieS1pbWFnZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6MHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3BhbiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDI4cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMjhweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTE1cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCY6Zmlyc3QtY2hpbGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQmLmxpa2VkYnljb3VudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDI4cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyOHB4O1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDI2cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHQgICAgIFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQubWluaS1jYXJ0LW9wdGlvblxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDBweDtcclxuXHRcdFx0XHRcdFx0XHRcdHVsXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCYubGlrZS1jb21cclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ji5wb3N0LWJ1dHRvbi1pdGVtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMHB4IDBweCAwcHggNHB4IWltcG9ydGFudDsgICAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGEgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDI2cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDI2cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMHB4IDhweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDBweCFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3BhbiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Jjpob3ZlciBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRbc2hhcmUtbWItbm9uZV1cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LnRhZy1ib3hcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblx0XHRcdFx0XHRcdFx0LnRhZ3dvcmRcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHQuYXNpZGUtdGl0bGUgXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDhweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTpub25lO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQudGFnY2xvdWRcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDNweCA4cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA0cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Lmxpa2UtY29tXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTpub25lO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuY29tbWVudC1zZWN0aW9uXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDVweCAwcHggMHB4O1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMTVweDtcclxuXHRcdFx0XHRcdFx0XHRpb24taW5wdXRcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHQmLmNvbW1uZXRiYXJcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/blog/blog.page.ts":
/*!***********************************!*\
  !*** ./src/app/blog/blog.page.ts ***!
  \***********************************/
/*! exports provided: BlogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPage", function() { return BlogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");





var BlogPage = /** @class */ (function () {
    function BlogPage(toastController, loadingController, userService) {
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.userService = userService;
        this.errors = ['', null, undefined];
        this.current_page = 1;
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_4__["config"].IMAGES_URL;
    }
    BlogPage.prototype.ngOnInit = function () {
    };
    BlogPage.prototype.ionViewDidEnter = function () {
        this.getBlogs();
    };
    BlogPage.prototype.getBlogs = function () {
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
    BlogPage.prototype.arrayOne = function (n) {
        return Array(n);
    };
    BlogPage.prototype.atob = function (string) {
        return atob(string);
    };
    BlogPage.prototype.paginate = function (page) {
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
    BlogPage.prototype.presentToast = function (message, color) {
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
    BlogPage.prototype.presentLoading = function () {
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
    BlogPage.prototype.stopLoading = function () {
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
    BlogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.page.html */ "./src/app/blog/blog.page.html"),
            styles: [__webpack_require__(/*! ./blog.page.scss */ "./src/app/blog/blog.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], BlogPage);
    return BlogPage;
}());



/***/ })

}]);
//# sourceMappingURL=blog-blog-module.js.map