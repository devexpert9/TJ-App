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

module.exports = "ion-header::after {\n  display: none !important; }\n\nion-header ion-toolbar ion-menu-button {\n  height: 35px;\n  position: inherit;\n  top: inherit;\n  right: inherit;\n  transition: inherit;\n  transition-delay: .1s; }\n\nion-header ion-toolbar ion-menu-button img {\n    max-width: 20px; }\n\nion-header ion-toolbar ion-title {\n  font-weight: 700; }\n\n@media (min-width: 768px) {\n  ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img [sharebtn-img] {\n    display: none; }\n  ion-content .home-page [mob-icon-sec] {\n    display: none; } }\n\n@media (max-width: 767px) {\n  ion-content .home-page [mob-container] {\n    max-width: 100%; }\n  ion-content .home-page .header-call-action {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: flex-end;\n    padding: 20px 0px; }\n    ion-content .home-page .header-call-action .menu-right-ul {\n      padding: 0; }\n      ion-content .home-page .header-call-action .menu-right-ul li {\n        margin-left: 7px; }\n        ion-content .home-page .header-call-action .menu-right-ul li a {\n          font-size: 16px;\n          padding: 0px;\n          color: #444;\n          width: 30px;\n          height: 30px;\n          line-height: 30px;\n          background: #f1f1f1;\n          border-radius: 50%; }\n          ion-content .home-page .header-call-action .menu-right-ul li a:hover {\n            background: var(--ion-color-primary);\n            color: #fff; }\n  ion-content .home-page .newsfeedinner {\n    margin-top: 0px; }\n    ion-content .home-page .newsfeedinner .newsfeed-header .media .message-item-img {\n      width: 50px;\n      min-width: 50px;\n      height: 50px; }\n      ion-content .home-page .newsfeedinner .newsfeed-header .media .message-item-img img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n    ion-content .home-page .newsfeedinner .newsfeed-header .media .media-body a.newsfeed_post-popup {\n      margin-left: 0px; }\n      ion-content .home-page .newsfeedinner .newsfeed-header .media .media-body a.newsfeed_post-popup ion-textarea {\n        height: 50px;\n        margin: 0px;\n        font-size: 12px;\n        --padding-bottom: 5px;\n        --padding-top: 5px;\n        --padding-start: 15px;\n        --padding-end: 15px;\n        padding: 0px; }\n    ion-content .home-page .newsfeedinner .newsfeed-header .newsfeed-post-bottom .newsfeed-attachments {\n      padding: 0px; }\n      ion-content .home-page .newsfeedinner .newsfeed-header .newsfeed-post-bottom .newsfeed-attachments ul li {\n        font-size: 18px; }\n      ion-content .home-page .newsfeedinner .newsfeed-header .newsfeed-post-bottom .newsfeed-attachments button.post-btn {\n        padding: 4px 12px;\n        font-size: 12px !important; }\n  ion-content .home-page .post-feed-main article.post-feed-item {\n    padding-bottom: 20px;\n    margin-bottom: 20px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-avatar {\n      width: 45px;\n      height: 45px;\n      margin-right: 10px;\n      border-radius: 50%;\n      overflow: hidden; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head h4 {\n      line-height: 20px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head h4 a {\n        font-size: 13px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head p {\n      font-size: 12px;\n      line-height: 20px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-inner p {\n      font-size: 12px;\n      line-height: 20px;\n      color: #777; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img img {\n      width: 100%;\n      height: 160px;\n      -o-object-fit: cover;\n         object-fit: cover; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img [sharebtn-img] {\n      position: absolute;\n      right: 0px;\n      top: 10px;\n      background: rgba(115, 188, 229, 0.8);\n      color: #fff;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      padding: 6px 10px;\n      font-size: 16px;\n      border-radius: 30px 0px 0px 30px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom {\n      padding-bottom: 0px !important;\n      flex-direction: row;\n      align-items: center; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li a {\n        font-size: 13px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li a i {\n          margin-right: 3px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images {\n        margin-right: 0px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images span {\n          width: 28px;\n          height: 28px;\n          left: 0px;\n          margin-left: -15px; }\n          ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images span:first-child {\n            margin-left: 0px; }\n          ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images span.likedbycount {\n            width: 28px;\n            height: 28px;\n            line-height: 26px;\n            font-size: 11px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option {\n        margin-top: 0px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item {\n          margin: 0px 0px 0px 4px !important; }\n          ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item a {\n            height: 26px;\n            width: 26px;\n            padding: 0px 8px;\n            font-size: 0px !important; }\n            ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item a span {\n              padding: 0px;\n              margin: 0px;\n              font-size: 10px; }\n            ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item a:hover {\n              margin-left: 0px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom [share-mb-none] {\n        display: none; }\n    ion-content .home-page .post-feed-main article.post-feed-item .tag-box {\n      padding-bottom: 5px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .tag-box .tagword .aside-title {\n        margin-bottom: 8px;\n        display: none; }\n      ion-content .home-page .post-feed-main article.post-feed-item .tag-box .tagword .tagcloud a {\n        padding: 3px 8px;\n        margin-right: 4px;\n        margin-bottom: 6px;\n        font-size: 10px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .tag-box .like-com {\n        display: none; }\n    ion-content .home-page .post-feed-main article.post-feed-item .comment-section {\n      margin: 5px 0px 0px;\n      padding: 0 15px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .comment-section ion-input.commnetbar {\n        font-size: 12px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvYmxvZy9ibG9nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdDLHdCQUFzQixFQUFBOztBQUh2QjtFQVNHLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQXFCLEVBQUE7O0FBZHhCO0lBaUJJLGVBQWUsRUFBQTs7QUFqQm5CO0VBc0JHLGdCQUFlLEVBQUE7O0FBS2xCO0VBQ0k7SUFnQkssYUFBWSxFQUFBO0VBaEJqQjtJQXlCRyxhQUFZLEVBQUEsRUFDZjs7QUFJSjtFQUNJO0lBTUEsZUFBZSxFQUFBO0VBTmY7SUFVQSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDYixpQkFBaUIsRUFBQTtJQWQ3QjtNQWlCSSxVQUFVLEVBQUE7TUFqQmQ7UUFvQkssZ0JBQWdCLEVBQUE7UUFwQnJCO1VBdUJHLGVBQWU7VUFDZixZQUFZO1VBQ1osV0FBVztVQUNYLFdBQVc7VUFDWCxZQUFZO1VBQ1osaUJBQWlCO1VBQ2pCLG1CQUFtQjtVQUNuQixrQkFBa0IsRUFBQTtVQTlCckI7WUFpQ08sb0NBQW9DO1lBQ3BDLFdBQVcsRUFBQTtFQWxDbEI7SUEwQ0csZUFBYyxFQUFBO0lBMUNqQjtNQWlERyxXQUFXO01BQ1gsZUFBZTtNQUNmLFlBQVksRUFBQTtNQW5EZjtRQXNETyxXQUFVO1FBQ2IsWUFBVztRQUNSLG9CQUFpQjtXQUFqQixpQkFBaUIsRUFBQTtJQXhEeEI7TUFpRUssZ0JBQWdCLEVBQUE7TUFqRXJCO1FBb0VNLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZTtRQUNmLHFCQUFpQjtRQUNqQixrQkFBYztRQUNkLHFCQUFnQjtRQUNoQixtQkFBYztRQUNkLFlBQVksRUFBQTtJQTNFbEI7TUFxRkcsWUFBWSxFQUFBO01BckZmO1FBMEZLLGVBQWUsRUFBQTtNQTFGcEI7UUFpR0ssaUJBQWlCO1FBQ2pCLDBCQUEwQixFQUFBO0VBbEcvQjtJQWdIRSxvQkFBb0I7SUFDcEIsbUJBQW1CLEVBQUE7SUFqSHJCO01Bc0hJLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixnQkFBZ0IsRUFBQTtJQTFIcEI7TUFnSUssaUJBQWlCLEVBQUE7TUFoSXRCO1FBbUlNLGVBQWUsRUFBQTtJQW5JckI7TUF3SUssZUFBZTtNQUNmLGlCQUFpQixFQUFBO0lBekl0QjtNQWlKSSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLFdBQVcsRUFBQTtJQW5KZjtNQXlKSyxXQUFXO01BQ1gsYUFBYTtNQUNiLG9CQUFnQjtTQUFoQixpQkFBZ0IsRUFBQTtJQTNKckI7TUErSkssa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixTQUFTO01BQ1Qsb0NBQXVDO01BQ3ZDLFdBQVc7TUFDWCxvQkFBb0I7TUFDcEIsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGdDQUFnQyxFQUFBO0lBektyQztNQStLRyw4QkFBNkI7TUFDN0IsbUJBQW1CO01BQ25CLG1CQUFtQixFQUFBO01Bakx0QjtRQTBMTyxlQUFlLEVBQUE7UUExTHRCO1VBNkxRLGlCQUFpQixFQUFBO01BN0x6QjtRQWtNTyxpQkFBZ0IsRUFBQTtRQWxNdkI7VUFxTVEsV0FBVztVQUNYLFlBQVk7VUFDWixTQUFTO1VBQ1Qsa0JBQWtCLEVBQUE7VUF4TTFCO1lBMk1TLGdCQUFnQixFQUFBO1VBM016QjtZQStNUyxXQUFXO1lBQ1gsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixlQUFlLEVBQUE7TUFsTnhCO1FBMk5JLGVBQWUsRUFBQTtRQTNObkI7VUFvT1Esa0NBQWlDLEVBQUE7VUFwT3pDO1lBdU9TLFlBQVk7WUFDWixXQUFXO1lBQ1gsZ0JBQWdCO1lBQ2hCLHlCQUF3QixFQUFBO1lBMU9qQztjQTZPVSxZQUFZO2NBQ1osV0FBVztjQUNYLGVBQWUsRUFBQTtZQS9PekI7Y0FtUFUsZ0JBQWdCLEVBQUE7TUFuUDFCO1FBNlBJLGFBQVksRUFBQTtJQTdQaEI7TUFrUUcsbUJBQW1CLEVBQUE7TUFsUXRCO1FBdVFLLGtCQUFrQjtRQUNsQixhQUFZLEVBQUE7TUF4UWpCO1FBOFFNLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGVBQWUsRUFBQTtNQWpSckI7UUF1UkksYUFBWSxFQUFBO0lBdlJoQjtNQTRSRyxtQkFBbUI7TUFDbkIsZUFBZSxFQUFBO01BN1JsQjtRQWtTSyxlQUFlLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG5cdCY6OmFmdGVyXHJcblx0e1xyXG5cdGRpc3BsYXk6bm9uZSFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdGlvbi10b29sYmFyXHJcblx0e1xyXG5cdFx0aW9uLW1lbnUtYnV0dG9uXHJcblx0XHR7XHJcblx0XHRcdGhlaWdodDogMzVweDtcclxuXHRcdFx0cG9zaXRpb246IGluaGVyaXQ7XHJcblx0XHRcdHRvcDogaW5oZXJpdDtcclxuXHRcdFx0cmlnaHQ6IGluaGVyaXQ7XHJcblx0XHRcdHRyYW5zaXRpb246IGluaGVyaXQ7XHJcblx0XHRcdHRyYW5zaXRpb24tZGVsYXk6IC4xcztcclxuXHRcdFx0aW1nXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXgtd2lkdGg6IDIwcHg7XHJcblx0XHRcdH1cdFx0XHJcblx0XHR9XHJcblx0XHRpb24tdGl0bGVcclxuXHRcdHtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6NzAwO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBpb24tY29udGVudFxyXG5cdHtcclxuXHRcdC5ob21lLXBhZ2VcclxuXHRcdHtcclxuXHRcdFx0LnBvc3QtZmVlZC1tYWluXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhcnRpY2xlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ji5wb3N0LWZlZWQtaXRlbVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQuYWN0aXZpdHktaW5uZXJcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdC5wb3N0LWZlZWQtaW1nXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0W3NoYXJlYnRuLWltZ11cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTpub25lO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVx0XHRcclxuXHRcdCAgICBbbW9iLWljb24tc2VjXVxyXG5cdFx0XHR7XHJcblx0XHRcdCAgICBkaXNwbGF5Om5vbmU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBpb24tY29udGVudFxyXG5cdHtcclxuXHQgICAgLmhvbWUtcGFnZVxyXG5cdFx0e1xyXG5cdFx0XHRbbW9iLWNvbnRhaW5lcl0gXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0XHRcdH1cdFx0XHJcblx0XHRcdC5oZWFkZXItY2FsbC1hY3Rpb24gXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcdFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwcHg7XHRcdFx0XHRcclxuXHRcdFx0XHQubWVudS1yaWdodC11bCBcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0ICAgIHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0XHRsaSBcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdCAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG5cdFx0XHRcdFx0XHRhIFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDBweDtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzQ0NDtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzBweDtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2YxZjFmMTtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0Jjpob3ZlclxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1x0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0ICAgIGNvbG9yOiAjZmZmO1x0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHRcdFx0XHJcblx0XHRcdFx0XHR9XHRcdFx0XHJcblx0XHRcdFx0fVx0XHRcdFxyXG5cdFx0XHR9XHRcdFxyXG5cdFx0XHQubmV3c2ZlZWRpbm5lclxyXG5cdFx0XHR7XHJcblx0XHRcdCAgICBtYXJnaW4tdG9wOjBweDtcclxuXHRcdFx0XHQubmV3c2ZlZWQtaGVhZGVyXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdCAgICAubWVkaWFcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Lm1lc3NhZ2UtaXRlbS1pbWcgXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogNTBweDtcclxuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDUwcHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0XHRcdFx0XHRcdGltZ1xyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQgICAgd2lkdGg6MTAwJTtcclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDoxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdCAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Lm1lZGlhLWJvZHlcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGFcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHQmLm5ld3NmZWVkX3Bvc3QtcG9wdXAgXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlvbi10ZXh0YXJlYSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogNTBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC0tcGFkZGluZy10b3A6IDVweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLWVuZDogMTVweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5uZXdzZmVlZC1wb3N0LWJvdHRvbVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQubmV3c2ZlZWQtYXR0YWNobWVudHMgXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRcdFx0XHRcdFx0dWxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRsaSBcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0Ji5wb3N0LWJ0blxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA0cHggMTJweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0LnBvc3QtZmVlZC1tYWluXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhcnRpY2xlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ji5wb3N0LWZlZWQtaXRlbVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMjBweDsgICBcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0LmFjdGl2aXR5LWhlYWRlclxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0LmFjdGl2aXR5LWF2YXRhclxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA0NXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0NXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1x0XHJcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1x0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0LmFjdGl2aXR5LWhlYWRcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRoNCBcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGEgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHAgXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LmFjdGl2aXR5LWlubmVyXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRwIFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICM3Nzc7XHJcblx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdFx0LnBvc3QtZmVlZC1pbWdcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRpbWcgXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE2MHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvYmplY3QtZml0OmNvdmVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0W3NoYXJlYnRuLWltZ10gXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmlnaHQ6IDBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dG9wOiAxMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDExNSAsIDE4OCAsIDIyOSAsIDAuOCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDZweCAxMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDMwcHggMHB4IDBweCAzMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQucG9zdC1kZXRhaWxzLWFjdGl2aXR5LWJvdHRvbVxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDBweCFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1x0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0dWxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHQmLmxpa2UtY29tIFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogM3B4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lmxpa2VkYnktaW1hZ2VzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNwYW4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAyOHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDI4cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6IDBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQmOmZpcnN0LWNoaWxkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMHB4O1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ji5saWtlZGJ5Y291bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAyOHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMjhweDtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTFweDtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0ICAgICBcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Lm1pbmktY2FydC1vcHRpb25cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHR1bFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQmLmxpa2UtY29tXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCYucG9zdC1idXR0b24taXRlbVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDBweCAwcHggMHB4IDRweCFpbXBvcnRhbnQ7ICAgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyNnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAyNnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDBweCA4cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwcHghaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNwYW4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCY6aG92ZXIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0W3NoYXJlLW1iLW5vbmVdXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5Om5vbmU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC50YWctYm94XHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cdFx0XHRcdFx0XHRcdC50YWd3b3JkXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0LmFzaWRlLXRpdGxlIFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0LnRhZ2Nsb3VkXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGEgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAzcHggOHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogNHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDZweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC5saWtlLWNvbVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LmNvbW1lbnQtc2VjdGlvblxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiA1cHggMHB4IDBweDtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0XHRcdFx0XHRcdFx0aW9uLWlucHV0XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0Ji5jb21tbmV0YmFyXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcbn0iXX0= */"

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