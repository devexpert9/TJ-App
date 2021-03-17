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

module.exports = "ion-header::after {\n  display: none !important; }\n\nion-header ion-toolbar ion-menu-button {\n  height: 35px;\n  position: inherit;\n  top: inherit;\n  right: inherit;\n  transition: inherit;\n  transition-delay: .1s; }\n\nion-header ion-toolbar ion-menu-button img {\n    max-width: 20px; }\n\nion-header ion-toolbar ion-title {\n  font-weight: 700; }\n\n@media (min-width: 768px) {\n  ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img [sharebtn-img] {\n    display: none; }\n  ion-content .home-page [mob-icon-sec] {\n    display: none; }\n  ion-content .home-page [mob-mn-sec] {\n    display: none; } }\n\n@media (max-width: 767px) {\n  ion-content .home-page [mob-container] {\n    max-width: 100%; }\n  ion-content .home-page [web-sec-mob-none] {\n    display: none; }\n  ion-content .home-page .header-call-action {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: flex-end;\n    margin: 25px 0px; }\n    ion-content .home-page .header-call-action .menu-right-ul {\n      padding: 0; }\n      ion-content .home-page .header-call-action .menu-right-ul li {\n        margin-left: 7px; }\n        ion-content .home-page .header-call-action .menu-right-ul li a {\n          font-size: 16px;\n          padding: 0px;\n          color: #444;\n          width: 30px;\n          height: 30px;\n          line-height: 30px;\n          background: #f1f1f1;\n          border-radius: 50%; }\n          ion-content .home-page .header-call-action .menu-right-ul li a:hover {\n            background: var(--ion-color-primary);\n            color: #fff; }\n  ion-content .home-page .post-feed-main {\n    margin-top: 0px; }\n    ion-content .home-page .post-feed-main article.post-feed-item {\n      padding-bottom: 20px;\n      margin-bottom: 20px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-avatar {\n        width: 45px;\n        height: 45px;\n        margin-right: 10px;\n        border-radius: 50%;\n        overflow: hidden; }\n      ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head h4 {\n        line-height: 20px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head h4 a {\n          font-size: 13px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head p {\n        font-size: 12px;\n        line-height: 20px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .activity-inner {\n        padding: 8px 15px 5px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .activity-inner p {\n          font-size: 12px;\n          line-height: 20px;\n          color: #777; }\n        ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img {\n          margin: 0px 0px 10px; }\n          ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img img {\n            width: 100%;\n            height: 160px;\n            -o-object-fit: cover;\n               object-fit: cover; }\n          ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img [sharebtn-img] {\n            position: absolute;\n            right: 0px;\n            top: 10px;\n            background: rgba(115, 188, 229, 0.8);\n            color: #fff;\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            padding: 6px 10px;\n            font-size: 16px;\n            border-radius: 30px 0px 0px 30px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom {\n        flex-direction: row;\n        align-items: center;\n        position: absolute;\n        bottom: 0px;\n        left: 0px;\n        padding: 8px 15px;\n        right: 0px;\n        background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), transparent); }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li a {\n          font-size: 13px;\n          color: #fff; }\n          ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li a i {\n            margin-right: 3px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .post-share {\n          display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvYmxvZy1kZXRhaWwvYmxvZy1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0Msd0JBQXNCLEVBQUE7O0FBSHZCO0VBU0csWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUIsRUFBQTs7QUFkeEI7SUFpQkksZUFBZSxFQUFBOztBQWpCbkI7RUFzQkcsZ0JBQWUsRUFBQTs7QUFLbEI7RUFDQztJQWdCUSxhQUFZLEVBQUE7RUFoQnBCO0lBeUJNLGFBQVksRUFBQTtFQXpCbEI7SUE2Qk0sYUFBWSxFQUFBLEVBQ2Y7O0FBSUo7RUFDSTtJQU1HLGVBQWUsRUFBQTtFQU5sQjtJQVVHLGFBQVksRUFBQTtFQVZmO0lBY0EsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ2IsZ0JBQWdCLEVBQUE7SUFsQjVCO01BcUJJLFVBQVUsRUFBQTtNQXJCZDtRQXdCSyxnQkFBZ0IsRUFBQTtRQXhCckI7VUEyQkcsZUFBZTtVQUNmLFlBQVk7VUFDWixXQUFXO1VBQ1gsV0FBVztVQUNYLFlBQVk7VUFDWixpQkFBaUI7VUFDakIsbUJBQW1CO1VBQ25CLGtCQUFrQixFQUFBO1VBbENyQjtZQXFDTyxvQ0FBb0M7WUFDcEMsV0FBVyxFQUFBO0VBdENsQjtJQThDRyxlQUFjLEVBQUE7SUE5Q2pCO01BbURLLG9CQUFvQjtNQUNMLG1CQUFtQixFQUFBO01BcER2QztRQXlESSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDTSxnQkFBZ0IsRUFBQTtNQTdENUM7UUFtRUssaUJBQWlCLEVBQUE7UUFuRXRCO1VBc0VNLGVBQWUsRUFBQTtNQXRFckI7UUEyRUssZUFBZTtRQUNmLGlCQUFpQixFQUFBO01BNUV0QjtRQWtGTSxxQkFBcUIsRUFBQTtRQWxGM0I7VUFxRkksZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixXQUFXLEVBQUE7UUF2RmY7VUEyRk8sb0JBQW1CLEVBQUE7VUEzRjFCO1lBOEZLLFdBQVc7WUFDWCxhQUFhO1lBQ2Isb0JBQWdCO2VBQWhCLGlCQUFnQixFQUFBO1VBaEdyQjtZQW9HSyxrQkFBa0I7WUFDbEIsVUFBVTtZQUNWLFNBQVM7WUFDVCxvQ0FBdUM7WUFDdkMsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsdUJBQXVCO1lBQ3ZCLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2YsZ0NBQWdDLEVBQUE7TUE5R3JDO1FBb0hHLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxTQUFTO1FBQ1QsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixrRUFBdUUsRUFBQTtRQTNIMUU7VUFvSXdDLGVBQWU7VUFDaEQsV0FBVyxFQUFBO1VBcklsQjtZQXdJUSxpQkFBaUIsRUFBQTtRQXhJekI7VUFnSk8sYUFBWSxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9ibG9nLWRldGFpbC9ibG9nLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG5cdCY6OmFmdGVyXHJcblx0e1xyXG5cdGRpc3BsYXk6bm9uZSFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdGlvbi10b29sYmFyXHJcblx0e1xyXG5cdFx0aW9uLW1lbnUtYnV0dG9uXHJcblx0XHR7XHJcblx0XHRcdGhlaWdodDogMzVweDtcclxuXHRcdFx0cG9zaXRpb246IGluaGVyaXQ7XHJcblx0XHRcdHRvcDogaW5oZXJpdDtcclxuXHRcdFx0cmlnaHQ6IGluaGVyaXQ7XHJcblx0XHRcdHRyYW5zaXRpb246IGluaGVyaXQ7XHJcblx0XHRcdHRyYW5zaXRpb24tZGVsYXk6IC4xcztcclxuXHRcdFx0aW1nXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXgtd2lkdGg6IDIwcHg7XHJcblx0XHRcdH1cdFx0XHJcblx0XHR9XHJcblx0XHRpb24tdGl0bGVcclxuXHRcdHtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6NzAwO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblx0aW9uLWNvbnRlbnRcclxuXHR7XHJcblx0ICAgIC5ob21lLXBhZ2VcclxuXHRcdHtcclxuXHRcdFx0LnBvc3QtZmVlZC1tYWluXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhcnRpY2xlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ji5wb3N0LWZlZWQtaXRlbVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQuYWN0aXZpdHktaW5uZXJcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdC5wb3N0LWZlZWQtaW1nXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0W3NoYXJlYnRuLWltZ11cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTpub25lO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVx0XHJcblx0XHQgICAgW21vYi1pY29uLXNlY11cclxuXHRcdFx0e1xyXG5cdFx0XHQgICAgZGlzcGxheTpub25lO1xyXG5cdFx0XHR9XHRcdFxyXG5cdFx0ICAgIFttb2ItbW4tc2VjXVxyXG5cdFx0XHR7XHJcblx0XHRcdCAgICBkaXNwbGF5Om5vbmU7XHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdH1cdFx0XHJcblx0fVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgaW9uLWNvbnRlbnRcclxuXHR7XHJcblx0ICAgIC5ob21lLXBhZ2VcclxuXHRcdHtcclxuXHRcdCAgICBbbW9iLWNvbnRhaW5lcl1cclxuXHRcdFx0e1xyXG5cdFx0XHQgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cdFx0XHR9XHJcblx0XHQgICAgW3dlYi1zZWMtbW9iLW5vbmVdXHJcblx0XHRcdHtcclxuXHRcdFx0ICAgIGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0fVxyXG5cdFx0XHQuaGVhZGVyLWNhbGwtYWN0aW9uIFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggMHB4O1x0XHRcdFx0XHJcblx0XHRcdFx0Lm1lbnUtcmlnaHQtdWwgXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdCAgICBwYWRkaW5nOiAwO1xyXG5cdFx0XHRcdFx0bGkgXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHQgICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuXHRcdFx0XHRcdFx0YSBcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM0NDQ7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDMwcHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzMHB4O1xyXG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0XHRcdCY6aG92ZXJcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0ICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdCAgICBjb2xvcjogI2ZmZjtcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVx0XHRcdFxyXG5cdFx0XHRcdFx0fVx0XHRcdFxyXG5cdFx0XHRcdH1cdFx0XHRcclxuXHRcdFx0fVx0XHRcclxuICAgICAgICAgICAgLnBvc3QtZmVlZC1tYWluXHJcbiAgICAgICAgICAgIHtcclxuXHRcdFx0ICAgIG1hcmdpbi10b3A6MHB4O1xyXG5cdFx0XHQgICAgYXJ0aWNsZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdCYucG9zdC1mZWVkLWl0ZW1cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdCAgICBwYWRkaW5nLWJvdHRvbTogMjBweDsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCAgICAuYWN0aXZpdHktaGVhZGVyXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0ICAgIC5hY3Rpdml0eS1hdmF0YXJcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogNDVweDtcclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogNDVweDtcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQuYWN0aXZpdHktaGVhZFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGg0IFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0cCBcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuYWN0aXZpdHktaW5uZXJcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQgICAgcGFkZGluZzogOHB4IDE1cHggNXB4O1xyXG5cdFx0XHRcdFx0XHRcdHAgXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogIzc3NztcclxuXHRcdFx0XHRcdFx0XHR9XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wb3N0LWZlZWQtaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblx0XHRcdFx0XHRcdFx0ICAgIG1hcmdpbjowcHggMHB4IDEwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRpbWcgXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE2MHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvYmplY3QtZml0OmNvdmVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0W3NoYXJlYnRuLWltZ10gXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmlnaHQ6IDBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dG9wOiAxMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDExNSAsIDE4OCAsIDIyOSAsIDAuOCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDZweCAxMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDMwcHggMHB4IDBweCAzMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQucG9zdC1kZXRhaWxzLWFjdGl2aXR5LWJvdHRvbVxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHRib3R0b206IDBweDtcclxuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwcHg7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogOHB4IDE1cHg7XHJcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IDBweDtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwICwgMCAsIDAgLCAwLjcwKSAsIHRyYW5zcGFyZW50KTtcdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblx0XHRcdFx0XHRcdFx0XHQmLmxpa2UtY29tIFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAzcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0ICAgICBcclxuXHRcdFx0XHRcdFx0XHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucG9zdC1zaGFyZVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQgICAgZGlzcGxheTpub25lO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cclxuXHR9XHJcbn0iXX0= */"

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