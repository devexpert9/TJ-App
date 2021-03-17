(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-detail-blog-detail-module"],{

/***/ "./src/app/blog-detail/blog-detail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/blog-detail/blog-detail.module.ts ***!
  \***************************************************/
/*! exports provided: BlogDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailPageModule", function() { return BlogDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _blog_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog-detail.page */ "./src/app/blog-detail/blog-detail.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-sharebuttons */ "./node_modules/ngx-sharebuttons/ngx-sharebuttons.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");











var routes = [
    {
        path: '',
        component: _blog_detail_page__WEBPACK_IMPORTED_MODULE_6__["BlogDetailPage"]
    }
];
var BlogDetailPageModule = /** @class */ (function () {
    function BlogDetailPageModule() {
    }
    BlogDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_8__["ShareButtonsModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_10__["HeaderPageModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientJsonpModule"]
            ],
            declarations: [_blog_detail_page__WEBPACK_IMPORTED_MODULE_6__["BlogDetailPage"]],
            entryComponents: [],
        })
    ], BlogDetailPageModule);
    return BlogDetailPageModule;
}());



/***/ }),

/***/ "./src/app/blog-detail/blog-detail.page.html":
/*!***************************************************!*\
  !*** ./src/app/blog-detail/blog-detail.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"darkred\"  text-uppercase>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Blog Detail\n    </ion-title>\n  <ion-buttons slot=\"end\" > \n          <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n\t     <ion-buttons slot=\"end\">\n          <ion-icon name=\"pin\"></ion-icon>\n    </ion-buttons>\n<ion-buttons slot=\"end\" > \n\t<ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\t\n\t </ion-buttons>\n  </ion-toolbar>\n      <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n\t              <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n\t              <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n\t              <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n\t              <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t   </div>\n</ion-header>  -->\n<ion-header class=\"ion-hide-md-up\">\n  <ion-toolbar color=\"secondary\">\n        <ion-menu-button slot=\"start\">\n\t\t    <img height=\"15px\" src=\"assets/img/menu.png\"/>\n\t\t</ion-menu-button>\n    <ion-title class=\"ion-text-center\">Normal Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<app-header></app-header>\n<div class=\"main-wrapper  home-page\">\n        <div class=\"container\" mob-container>\n            <div class=\"row\">\n\t\t\t\t<div class=\"col-lg-12\" mob-icon-sec>\t\n\t\t\t\t\t<div class=\"header-call-action menu-right\">\n\t\t\t\t\t\t<ul class=\"menu-right-ul\">\n\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><share-button button=\"facebook\" url=\"{{shareURL}}\"></share-button></a></li>\n\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><share-button button=\"linkedin\" url=\"{{shareURL}}\"></share-button></a></li>\n\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><share-button button=\"twitter\" url=\"{{shareURL}}\"></share-button></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\t\n                <div class=\"col-lg-12\" web-sec-mob-none>\n\t\t\t\t\t<div class=\"post-feed-main post-details-main normal-post-details-main\">\n\t\t\t\t\t\t<article class=\"post-feed-item bstrf\">\n\t\t\t\t\t\t\t<div class=\"activity-header\">\n\t\t\t\t\t\t\t\t<div class=\"activity-avatar\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/post-1.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"activity-head\">\n\t\t\t\t\t\t\t\t    <h4><a href=\"javascript:void(0)\">{{blog?.blog_name}}</a></h4>\n\t\t\t\t\t\t\t\t    <p><span class=\"time-since\">{{blog?.added_date | date : 'MMM d, y, h:mm a'}}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"activity-inner\">\n\t\t\t\t\t\t\t\t<p [innerHTML]=\"atob(blog?.blog_description)\"></p>\n\t\t\t\t\t\t\t\t<div class=\"post-feed-img\">\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(blog?.blog_image) >= 0\" src=\"assets/images/products/no_image.svg\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(blog?.blog_image) == -1\" src=\"{{IMAGES_URL}}/blog_images/{{blog?.blog_image}}\" alt=\"Image\" class=\"img-fluid\">\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"post-details-activity-bottom\">\n\t\t\t\t\t\t\t   <ul class=\"like-com likeCommnets\">\n\t\t\t\t\t\t\t\t    <li>\n\t\t\t\t\t\t\t\t\t    <a href=\"javascript:void(0)\"><i class=\"fa fa-thumbs-up\"></i> Like</a>\n\t\t\t\t\t\t\t\t    </li> \n\t\t\t\t\t\t\t\t    <li>\n\t\t\t\t\t\t\t\t\t    <a href=\"javascript:void(0)\"><i class=\"fa fa-comment-o\"></i> Comment</a>\n\t\t\t\t\t\t\t\t    </li>\t\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t    </ul>\n\t\t\t\t\t\t\t\t<div class=\"clsci\">\t\n\t\t\t\t\t\t\t\t\t<a class=\"post-share\" href=\"javascript:void(0)\" (click)=\"hide()\"><i class=\"fa fa-share\"></i>Share</a>\t\n\t\t\t\t\t\t\t\t\t<div social-media class=\"sftdk\" *ngIf=\"hideMe\">\n\t\t\t\t\t\t\t\t\t\t<share-button button=\"facebook\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t\t\t\t\t\t\t<share-button button=\"twitter\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t\t\t\t\t\t\t<share-button button=\"google\" url=\"{{shareURL}}\"></share-button> \n\t\t\t\t\t\t\t\t\t\t<share-button button=\"linkedin\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t\t\t\t\t\t\t<share-button button=\"email\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t</article>\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n                </div>\t\t\t\n                <div class=\"col-lg-12\" mob-mn-sec>\n\t\t\t\t\t<div class=\"post-feed-main post-details-main normal-post-details-main\">\n\t\t\t\t\t\t<article class=\"post-feed-item\">\n\t\t\t\t\t\t\t<div class=\"activity-header\">\n\t\t\t\t\t\t\t\t<div class=\"activity-avatar\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/post-1.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"activity-head\">\n\t\t\t\t\t\t\t\t    <h4><a href=\"javascript:void(0)\">{{blog?.blog_name}}</a></h4>\n\t\t\t\t\t\t\t\t    <p><span class=\"time-since\">{{blog?.added_date | date : 'MMM d, y, h:mm a'}}</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"activity-inner\">\n\n\t\t\t\t\t\t\t\t<div class=\"post-feed-img\">\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(blog?.blog_image) >= 0\" src=\"assets/images/products/no_image.svg\"  class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(blog?.blog_image) == -1\" src=\"{{IMAGES_URL}}/blog_images/{{blog?.blog_image}}\" alt=\"Image\"  class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t<span sharebtn-img><ion-icon name=\"share-social-outline\"></ion-icon></span>\n\t\t\t\t\t\t\t\t\t<div class=\"post-details-activity-bottom\">\n\t\t\t\t\t\t\t\t\t   <ul class=\"like-com likeCommnets\">\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"fa fa-thumbs-up\"></i> Like</a>\n\t\t\t\t\t\t\t\t\t\t\t</li> \n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"fa fa-comment-o\"></i> Comment</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p [innerHTML]=\"atob(blog?.blog_description)\"></p>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t</article>\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n                </div>\n            </div>\n        </div>\n    </div>\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/blog-detail/blog-detail.page.scss":
/*!***************************************************!*\
  !*** ./src/app/blog-detail/blog-detail.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  display: none !important; }\n\nion-header ion-toolbar ion-menu-button {\n  height: 35px;\n  position: inherit;\n  top: inherit;\n  right: inherit;\n  transition: inherit;\n  transition-delay: .1s; }\n\nion-header ion-toolbar ion-menu-button img {\n    max-width: 20px; }\n\nion-header ion-toolbar ion-title {\n  font-weight: 700; }\n\n@media (min-width: 768px) {\n  ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img [sharebtn-img] {\n    display: none; }\n  ion-content .home-page [mob-icon-sec] {\n    display: none; }\n  ion-content .home-page [mob-mn-sec] {\n    display: none; } }\n\n@media (max-width: 767px) {\n  ion-content .home-page [mob-container] {\n    max-width: 100%; }\n  ion-content .home-page [web-sec-mob-none] {\n    display: none; }\n  ion-content .home-page .header-call-action {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: flex-end;\n    margin: 25px 0px; }\n    ion-content .home-page .header-call-action .menu-right-ul {\n      padding: 0; }\n      ion-content .home-page .header-call-action .menu-right-ul li {\n        margin-left: 7px; }\n        ion-content .home-page .header-call-action .menu-right-ul li a {\n          font-size: 16px;\n          padding: 0px;\n          color: #444;\n          width: 30px;\n          height: 30px;\n          line-height: 30px;\n          background: #f1f1f1;\n          border-radius: 50%; }\n          ion-content .home-page .header-call-action .menu-right-ul li a:hover {\n            background: var(--ion-color-primary);\n            color: #fff; }\n  ion-content .home-page .post-feed-main {\n    margin-top: 0px; }\n    ion-content .home-page .post-feed-main article.post-feed-item {\n      padding-bottom: 20px;\n      margin-bottom: 20px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-avatar {\n        width: 45px;\n        height: 45px;\n        margin-right: 10px;\n        border-radius: 50%;\n        overflow: hidden; }\n      ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head h4 {\n        line-height: 20px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head h4 a {\n          font-size: 13px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head p {\n        font-size: 12px;\n        line-height: 20px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .activity-inner {\n        padding: 8px 15px 5px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .activity-inner p {\n          font-size: 12px;\n          line-height: 20px;\n          color: #777; }\n        ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img {\n          margin: 0px 0px 10px; }\n          ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img img {\n            width: 100%;\n            height: 160px;\n            -o-object-fit: cover;\n               object-fit: cover; }\n          ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img [sharebtn-img] {\n            position: absolute;\n            right: 0px;\n            top: 10px;\n            background: rgba(115, 188, 229, 0.8);\n            color: #fff;\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            padding: 6px 10px;\n            font-size: 16px;\n            border-radius: 30px 0px 0px 30px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom {\n        flex-direction: row;\n        align-items: center;\n        position: absolute;\n        bottom: 0px;\n        left: 0px;\n        padding: 8px 15px;\n        right: 0px;\n        background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), transparent); }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li a {\n          font-size: 13px;\n          color: #fff; }\n          ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li a i {\n            margin-right: 3px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .post-share {\n          display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9ibG9nLWRldGFpbC9ibG9nLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHQyx3QkFBc0IsRUFBQTs7QUFIdkI7RUFTRyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFBOztBQWR4QjtJQWlCSSxlQUFlLEVBQUE7O0FBakJuQjtFQXNCRyxnQkFBZSxFQUFBOztBQUtsQjtFQUNDO0lBZ0JRLGFBQVksRUFBQTtFQWhCcEI7SUF5Qk0sYUFBWSxFQUFBO0VBekJsQjtJQTZCTSxhQUFZLEVBQUEsRUFDZjs7QUFJSjtFQUNJO0lBTUcsZUFBZSxFQUFBO0VBTmxCO0lBVUcsYUFBWSxFQUFBO0VBVmY7SUFjQSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDYixnQkFBZ0IsRUFBQTtJQWxCNUI7TUFxQkksVUFBVSxFQUFBO01BckJkO1FBd0JLLGdCQUFnQixFQUFBO1FBeEJyQjtVQTJCRyxlQUFlO1VBQ2YsWUFBWTtVQUNaLFdBQVc7VUFDWCxXQUFXO1VBQ1gsWUFBWTtVQUNaLGlCQUFpQjtVQUNqQixtQkFBbUI7VUFDbkIsa0JBQWtCLEVBQUE7VUFsQ3JCO1lBcUNPLG9DQUFvQztZQUNwQyxXQUFXLEVBQUE7RUF0Q2xCO0lBOENHLGVBQWMsRUFBQTtJQTlDakI7TUFtREssb0JBQW9CO01BQ0wsbUJBQW1CLEVBQUE7TUFwRHZDO1FBeURJLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNNLGdCQUFnQixFQUFBO01BN0Q1QztRQW1FSyxpQkFBaUIsRUFBQTtRQW5FdEI7VUFzRU0sZUFBZSxFQUFBO01BdEVyQjtRQTJFSyxlQUFlO1FBQ2YsaUJBQWlCLEVBQUE7TUE1RXRCO1FBa0ZNLHFCQUFxQixFQUFBO1FBbEYzQjtVQXFGSSxlQUFlO1VBQ2YsaUJBQWlCO1VBQ2pCLFdBQVcsRUFBQTtRQXZGZjtVQTJGTyxvQkFBbUIsRUFBQTtVQTNGMUI7WUE4RkssV0FBVztZQUNYLGFBQWE7WUFDYixvQkFBZ0I7ZUFBaEIsaUJBQWdCLEVBQUE7VUFoR3JCO1lBb0dLLGtCQUFrQjtZQUNsQixVQUFVO1lBQ1YsU0FBUztZQUNULG9DQUF1QztZQUN2QyxXQUFXO1lBQ1gsb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQix1QkFBdUI7WUFDdkIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixnQ0FBZ0MsRUFBQTtNQTlHckM7UUFvSEcsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFNBQVM7UUFDVCxpQkFBaUI7UUFDakIsVUFBVTtRQUNWLGtFQUF1RSxFQUFBO1FBM0gxRTtVQW9Jd0MsZUFBZTtVQUNoRCxXQUFXLEVBQUE7VUFySWxCO1lBd0lRLGlCQUFpQixFQUFBO1FBeEl6QjtVQWdKTyxhQUFZLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctZGV0YWlsL2Jsb2ctZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcblx0Jjo6YWZ0ZXJcclxuXHR7XHJcblx0ZGlzcGxheTpub25lIWltcG9ydGFudDtcclxuXHR9XHJcblx0aW9uLXRvb2xiYXJcclxuXHR7XHJcblx0XHRpb24tbWVudS1idXR0b25cclxuXHRcdHtcclxuXHRcdFx0aGVpZ2h0OiAzNXB4O1xyXG5cdFx0XHRwb3NpdGlvbjogaW5oZXJpdDtcclxuXHRcdFx0dG9wOiBpbmhlcml0O1xyXG5cdFx0XHRyaWdodDogaW5oZXJpdDtcclxuXHRcdFx0dHJhbnNpdGlvbjogaW5oZXJpdDtcclxuXHRcdFx0dHJhbnNpdGlvbi1kZWxheTogLjFzO1xyXG5cdFx0XHRpbWdcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG1heC13aWR0aDogMjBweDtcclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cclxuXHRcdGlvbi10aXRsZVxyXG5cdFx0e1xyXG5cdFx0XHRmb250LXdlaWdodDo3MDA7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHRpb24tY29udGVudFxyXG5cdHtcclxuXHQgICAgLmhvbWUtcGFnZVxyXG5cdFx0e1xyXG5cdFx0XHQucG9zdC1mZWVkLW1haW5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFydGljbGVcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQmLnBvc3QtZmVlZC1pdGVtXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdC5hY3Rpdml0eS1pbm5lclxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0LnBvc3QtZmVlZC1pbWdcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRbc2hhcmVidG4taW1nXVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5Om5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcclxuXHRcdCAgICBbbW9iLWljb24tc2VjXVxyXG5cdFx0XHR7XHJcblx0XHRcdCAgICBkaXNwbGF5Om5vbmU7XHJcblx0XHRcdH1cdFx0XHJcblx0XHQgICAgW21vYi1tbi1zZWNdXHJcblx0XHRcdHtcclxuXHRcdFx0ICAgIGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0fVx0XHRcclxuXHR9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBpb24tY29udGVudFxyXG5cdHtcclxuXHQgICAgLmhvbWUtcGFnZVxyXG5cdFx0e1xyXG5cdFx0ICAgIFttb2ItY29udGFpbmVyXVxyXG5cdFx0XHR7XHJcblx0XHRcdCAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblx0XHRcdH1cclxuXHRcdCAgICBbd2ViLXNlYy1tb2Itbm9uZV1cclxuXHRcdFx0e1xyXG5cdFx0XHQgICAgZGlzcGxheTpub25lO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5oZWFkZXItY2FsbC1hY3Rpb24gXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjVweCAwcHg7XHRcdFx0XHRcclxuXHRcdFx0XHQubWVudS1yaWdodC11bCBcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0ICAgIHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0XHRsaSBcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdCAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG5cdFx0XHRcdFx0XHRhIFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDBweDtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzQ0NDtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzBweDtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2YxZjFmMTtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0Jjpob3ZlclxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1x0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0ICAgIGNvbG9yOiAjZmZmO1x0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHRcdFx0XHJcblx0XHRcdFx0XHR9XHRcdFx0XHJcblx0XHRcdFx0fVx0XHRcdFxyXG5cdFx0XHR9XHRcdFxyXG4gICAgICAgICAgICAucG9zdC1mZWVkLW1haW5cclxuICAgICAgICAgICAge1xyXG5cdFx0XHQgICAgbWFyZ2luLXRvcDowcHg7XHJcblx0XHRcdCAgICBhcnRpY2xlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ji5wb3N0LWZlZWQtaXRlbVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ICAgIHBhZGRpbmctYm90dG9tOiAyMHB4OyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1x0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ICAgIC5hY3Rpdml0eS1oZWFkZXJcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQgICAgLmFjdGl2aXR5LWF2YXRhclxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA0NXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0NXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1x0XHJcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdC5hY3Rpdml0eS1oZWFkXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0aDQgXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRwIFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5hY3Rpdml0eS1pbm5lclxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCAgICBwYWRkaW5nOiA4cHggMTVweCA1cHg7XHJcblx0XHRcdFx0XHRcdFx0cCBcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjNzc3O1xyXG5cdFx0XHRcdFx0XHRcdH1cdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBvc3QtZmVlZC1pbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHRcdFx0XHRcdFx0XHQgICAgbWFyZ2luOjBweCAwcHggMTBweDtcclxuXHRcdFx0XHRcdFx0XHRcdGltZyBcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMTYwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9iamVjdC1maXQ6Y292ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRbc2hhcmVidG4taW1nXSBcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyaWdodDogMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IDEwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMTE1ICwgMTg4ICwgMjI5ICwgMC44KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogNnB4IDEwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMzBweCAwcHggMHB4IDMwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5wb3N0LWRldGFpbHMtYWN0aXZpdHktYm90dG9tXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogMHB4O1xyXG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDBweDtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA4cHggMTVweDtcclxuXHRcdFx0XHRcdFx0XHRyaWdodDogMHB4O1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAgLCAwICwgMCAsIDAuNzApICwgdHJhbnNwYXJlbnQpO1x0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHRcdFx0XHRcdFx0XHRcdCYubGlrZS1jb20gXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDNweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHQgICAgIFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wb3N0LXNoYXJlXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdCAgICBkaXNwbGF5Om5vbmU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/blog-detail/blog-detail.page.ts":
/*!*************************************************!*\
  !*** ./src/app/blog-detail/blog-detail.page.ts ***!
  \*************************************************/
/*! exports provided: BlogDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailPage", function() { return BlogDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var BlogDetailPage = /** @class */ (function () {
    function BlogDetailPage(toastController, loadingController, userService, activatedRoute) {
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.selectedItem = 'item1';
        this.errors = ['', null, undefined];
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_4__["config"].IMAGES_URL;
        this.blog_id = activatedRoute.snapshot.paramMap.get('blog_id');
        this.shareURL = _config__WEBPACK_IMPORTED_MODULE_4__["config"].BASE_URL + '#/blog-detail/' + this.blog_id;
    }
    BlogDetailPage.prototype.hide = function () {
        this.hideMe = !this.hideMe;
    };
    BlogDetailPage.prototype.ngOnInit = function () {
    };
    BlogDetailPage.prototype.ionViewDidEnter = function () {
        this.getBlogDetails();
    };
    BlogDetailPage.prototype.getBlogDetails = function () {
        var _this = this;
        this.presentLoading();
        this.userService.postData({ blog_id: this.blog_id, limit: '3' }, 'blogDetails').subscribe(function (result) {
            _this.stopLoading();
            console.log(result);
            _this.blog = result.blogs;
            _this.related_blogs = result.relatedBlogs;
            _this.recent_blogs = result.recentBlogs;
        }, function (err) {
            _this.stopLoading();
            _this.blog = [];
            _this.related_blogs = [];
            _this.recent_blogs = [];
        });
    };
    BlogDetailPage.prototype.atob = function (string) {
        return atob(string);
    };
    BlogDetailPage.prototype.presentToast = function (message, color) {
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
    BlogDetailPage.prototype.presentLoading = function () {
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
    BlogDetailPage.prototype.stopLoading = function () {
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
    BlogDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-detail',
            template: __webpack_require__(/*! ./blog-detail.page.html */ "./src/app/blog-detail/blog-detail.page.html"),
            styles: [__webpack_require__(/*! ./blog-detail.page.scss */ "./src/app/blog-detail/blog-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], BlogDetailPage);
    return BlogDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=blog-detail-blog-detail-module.js.map