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
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm2015/ckeditor4-angular.js");









//import { CKEditorModule } from 'ng2-ckeditor';

//import {AccordionModule} from "ngx-accordion";
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
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_8__["HeaderPageModule"],
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

module.exports = "\n<ion-content [scrollEvents]=\"true\" #contentPage>\n<app-header></app-header>\n<div class=\"main-wrapper  home-page newsfeed\">\n\t<div header_height></div>\n\n\t<div breadcrumb  class=\"ion-hide-md-down\">\t\t\n\t\t<div class=\"container\">\n\t\t\t<ul style=\"padding:15px;\">\n\t\t\t\t<li style=\"float:left;\"><a routerLink=\"/blog\">Home / </a></li>\n\t\t\t\t<li class=\"active\"> News Feeds</li>\n\t\t\t</ul>\n\t\t</div><!-- /.breadcrumb-inner -->\n\t</div>\n\n   <div mob-container class=\"container\">\n   \t\t<div class=\"row\">\n   \t\t\t<div class=\"col-lg-12\">\n\t   \t\t\t<div class=\"col-lg-9\" style=\"float:left\">\n\t\t\t\t   \t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-12\" mob-icon-sec>\t\n\t\t\t\t\t\t\t<div class=\"header-call-action menu-right\">\n\t\t\t\t\t\t\t\t<ul class=\"menu-right-ul\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\t   \n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div product-tabs id='TopOfPost'> \n\t\t\t\t\t\t\t\t<ion-segment  [(ngModel)]=\"tabs\" *ngIf=\"is_logged_in == 'true'\">\n\t\t\t\t\t\t\t\t\t<ion-segment-button value=\"posts\">\n\t\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-hide-md-down\">Simple Post</ion-label>\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"person\" class=\"ion-hide-lg-up\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-segment-button>\t\n\n\t\t\t\t\t\t\t\t\t<ion-segment-button value=\"poll\" class=\"ion-hide-md-down\">\n\t\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-hide-md-down\">Poll Post</ion-label>\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"person\"  class=\"ion-hide-lg-up\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-segment-button>\n\n\t\t\t\t\t\t\t\t\t<ion-segment-button value=\"product\" class=\"ion-hide-md-down\">\n\t\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-hide-md-down\">Products Post</ion-label>\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"person\"  class=\"ion-hide-lg-up\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-segment-button>\n\n\t\t\t\t\t\t\t\t\t<ion-segment-button value=\"suggestion\" class=\"ion-hide-md-down\">\n\t\t\t\t\t\t\t\t\t\t<ion-label class=\"ion-hide-md-down\">Suggestion Post</ion-label>\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"person\"  class=\"ion-hide-lg-up\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</ion-segment-button>\n\t\t\t\t\t\t\t\t</ion-segment>\n\n\t\t\t\t\t\t\t\t<div  tab-content [ngSwitch]=\"tabs\" *ngIf=\"is_logged_in == 'true'\">\n\t\t\t\t\t\t\t\t\t<ion-list *ngSwitchCase=\"'posts'\">\n\t\t\t\t\t\t\t\t\t\t<div product-tab class=\"table-responsive\" style=\"overflow:hidden;height:100%;padding:0 0 20px 0\">\n\t\t\t\t\t\t\t\t\t\t \t<div class=\"newsfeedinner mb-0\" *ngIf=\"is_logged_in == 'true'\" style=\"margin-bottom:35px; display:inline-block;width:100%;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"newsfeed-header\" form-group>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"message-item-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{userImage}}\" alt=\"\" style=\"height:70px;width:70px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"newsfeed_post-popup\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-textarea class=\"form-control\" placeholder=\"Share some what you are thinking?\" [(ngModel)]=\"content\"></ion-textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <ckeditor placeholder=\"Share some what you are thinking?\" [(ngModel)]=\"content\"></ckeditor> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"newsfeed-post-bottom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"newsfeed-attachments\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul *ngIf=\"simpleAction == 'add'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"tooltip-item\" data-tooltip=\"Add Photos/Videos\" data-placement=\"right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-image\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"fileContainer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" (change)=\"uploadImg($event)\" [(ngModel)]=\"file\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf='uploadedFile != \"\"'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{uploadedFile}}\" alt=\"\" style=\"height:70px;width:70px\" *ngIf=\"uploadedFile.indexOf('.mp4') == -1\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<video width=\"100\" height=\"100\" controls *ngIf=\"uploadedFile.indexOf('.mp4') !== -1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<source src=\"{{pic_url}}{{uploadedFile}}\" type=\"video/mp4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</video>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"post-btn\" (click)=\"addPost(content,file)\" data-ripple=\"\" *ngIf=\"simpleAction == 'add'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPost Status\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"post-btn\" (click)=\"updatePost(content,simplePostId)\" data-ripple=\"\" *ngIf=\"simpleAction == 'update'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpdate Post\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"post-btn\" (click)=\"cancelSimple()\" data-ripple=\"\" *ngIf=\"simpleAction == 'update'\" style=\"background:orange; border-color:orange;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ion-list>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!--***********************************-->\n\t\t\t\t\t\t\t\t\t<ion-list *ngSwitchCase=\"'poll'\" style='height:210px'>\n\t\t\t\t\t\t\t\t\t\t<div product-tab class=\"table-responsive\" style=\"overflow:hidden;height:100%\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"newsfeedinner mb-0\" *ngIf=\"is_logged_in == 'true'\" style=\"margin-bottom:35px; display:inline-block;width:100%;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"newsfeed-header\" form-group>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"message-item-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{userImage}}\" alt=\"\" style=\"height:70px;width:70px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"newsfeed_post-popup\" (click)=\"presentModal()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-textarea class=\"form-control\" placeholder=\"Enter your question\" [(ngModel)]=\"contentPoll\"></ion-textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"newsfeed-post-bottom\" style=\"margin:9px 0 0 90px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  [(ngModel)]=\"button1\" placeholder=\"YES\" style=\"float:left; width:15%\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  [(ngModel)]=\"button2\" placeholder=\"NO\" style=\"margin:0 0 0 6px; float:left; width:15%\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"newsfeed-post-bottom\" style=\"float:left;width:100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"newsfeed-attachments\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"post-btn\" (click)=\"addPollPost(contentPoll,button1,button2)\" data-ripple=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPost Status\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ion-list>\n\n\t\t\t\t\t\t\t\t<!--***********************************-->\n\t\t\t\t\t\t\t\t\t<ion-list *ngSwitchCase=\"'product'\">\n\t\t\t\t\t\t\t\t\t\t<div product-tab class=\"table-responsive\" style=\"overflow:hidden;height:100%; padding:0 0 20px 0\">\n\t\t\t\t\t\t\t\t\t\t \t<div class=\"newsfeedinner mb-0\" *ngIf=\"is_logged_in == 'true'\" style=\"margin-bottom:35px; display:inline-block;width:100%;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"newsfeed-header\" form-group>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"message-item-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{userImage}}\" alt=\"\" style=\"height:70px;width:70px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"newsfeed_post-popup\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-textarea class=\"form-control\" placeholder=\"Product Description\" [(ngModel)]=\"desc\"></ion-textarea>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <ckeditor placeholder=\"Enter product description\" [(ngModel)]=\"desc\"></ckeditor> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"newsfeed-post-bottom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"newsfeed-attachments\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"fileContainer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"product_name\" placeholder=\"Product Name\" style=\"color:#333;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"fileContainer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input min=\"0\" max=\"100000\" type=\"number\" [(ngModel)]=\"price\" placeholder=\"Price\" style=\"color:#333;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"tooltip-item\" data-tooltip=\"Add Product Photo\" positionV=\"top\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-image\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"fileContainer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" (change)=\"uploadProImg($event)\" [(ngModel)]=\"filepro\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{uploadedFilePro}}\" alt=\"\" style=\"height:70px;width:70px\" *ngIf='uploadedFilePro != \"\"'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"post-btn\" (click)=\"addProductPost(desc,product_name,price,filepro)\" data-ripple=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPost Status\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ion-list>\n\n\t\t\t\t\t\t\t\t<!--***********************************-->\n\t\t\t\t\t\t\t\t\t<ion-list *ngSwitchCase=\"'suggestion'\">\n\t\t\t\t\t\t\t\t\t\t<div product-tab class=\"table-responsive\" style=\"overflow:hidden;height:100%; padding:0 0 20px 0\">\n\t\t\t\t\t\t\t\t\t\t \t<div class=\"newsfeedinner mb-0\" *ngIf=\"is_logged_in == 'true'\" style=\"margin-bottom:35px; display:inline-block;width:100%;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"newsfeed-header\" form-group>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"message-item-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{userImage}}\" alt=\"\" style=\"height:70px;width:70px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"newsfeed_post-popup\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-textarea class=\"form-control\" placeholder=\"Ask for any suggestion\" [(ngModel)]=\"suggestion\"></ion-textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"newsfeed-post-bottom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"newsfeed-attachments\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"tooltip-item\" data-tooltip=\"Add Photo\" positionV=\"top\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-image\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"fileContainer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" (change)=\"uploadSuggesImg($event)\" [(ngModel)]=\"fileSuggestion\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{uploadedFileSuggestion}}\" alt=\"\" style=\"height:70px;width:70px\" *ngIf='uploadedFileSuggestion != \"\"'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"post-btn\" (click)=\"addSuggestionPost(suggestion,fileSuggestion)\" data-ripple=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPost Status\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ion-list>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<!-- ALL POSTS STARTS FROM HERE -->\n\t\t\t\t\t\t\t<div class=\"post-feed-main\">\n\t\t\t\t\t\t\t\t<article class=\"post-feed-item\" *ngFor=\"let blog of all_blogs\" style=\"display:inline-block; padding:0 0 10px 0; width: 100%\">\n\t\t\t\t\t\t\t\t<!-- <article class=\"post-feed-item\" *ngFor=\"let blog of all_blogs | sort: {property: column, order: post_date}\"> -->\n\n\n\t\t\t\t\t\t\t\t\t<div class=\"activity-header\" style=\"padding-bottom:0px;display: inline-block;width: 100%;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"activity-avatar\" style=\"float:left\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{blog.profile_picture}}\" alt=\"\" style=\"height:100%;width:100%\">\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"activity-head\" style=\"width: 88%;display: inline-block;\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 style=\"float:left;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a routerLink=\"/blog-detail/{{blog.blog_id}}\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{blog.name}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"time-since\" style=\"text-transform:capitalize;color: #0488d2;font-weight: bold;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- {{blog.post_date}} -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{blog.post_date | timeAgo}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</h4>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"is_logged_in == 'true'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p style=\" float: right;border: 1px solid red;padding: 1px 10px; cursor:pointer;margin:0 0 0 15px;\" *ngIf='blog.user_id == currentUserID'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a title=\"Delete\" (click)='deletePost(blog?.post_id)' style=\"font-weight: bolder;color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<p style=\" float: right;border: 1px solid #0488d2;padding: 1px 10px; cursor:pointer;margin:0 0 0 15px;\" *ngIf='blog.user_id == currentUserID && blog.post_type == \"simple\"'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a title=\"Edit\" (click)='editPost(blog)' style=\"font-weight: bolder;color: #0488d2;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <p *ngIf='blog.post_type == \"poll\"' style=\"float: right;border: 1px solid #1088d2;color:#1088d2;padding: 0;cursor:pointer;width: 200px;height: 14px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"font-size: 2px;padding: 0;width:{{blog?.poolingCount}};margin: 0;background: #2597d8;float: left;height: 13px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{blog?.poolingCount}}\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</p> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<!-- IN CASE OF SIMPLE POST -->\n\t\t\t\t\t\t\t\t\t<div class=\"activity-inner\" *ngIf='blog.post_type == \"simple\"' style=\"border-top:#f7ecec\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"post-feed-img dft\" style=\"float:left;width:30%\" >\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{blog.file}}\" alt=\"\" style=\"width:100%\" *ngIf=\"blog.file.indexOf('.mp4') == -1\">\n\n\t\t\t\t\t\t\t\t\t\t\t<video style=\"width:100%\" controls *ngIf=\"blog.file.indexOf('.mp4') !== -1\">\n\t\t\t\t\t\t\t\t\t\t\t\t<source src=\"{{pic_url}}{{blog.file}}\" type=\"video/mp4\">\n\t\t\t\t\t\t\t\t\t\t\t</video>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"post-feed-img dft\" style=\"float:left;width:70%;padding:0 20px\">\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"blog.content.length <= 500\" [innerHTML]=\"blog.content\"></p>\n\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"blog.content.length > 500\" [innerHTML]=\"blog.content.substr(0,500)+'...'\"></p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<!-- IN CASE OF POLL POST -->\n\t\t\t\t\t\t\t\t\t<div class=\"activity-inner\" *ngIf='blog.post_type == \"poll\"' style=\"border-top:#f7ecec\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"post-feed-img dft\" style=\"float:left;width:100%;text-align: center;padding:0 20px;\">\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"blog.content.length <= 500\" [innerHTML]=\"blog.content\"></p>\n\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"blog.content.length > 500\" [innerHTML]=\"blog.content.substr(0,500)+'...'\"></p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<!-- IN CASE OF PRODUCT POST -->\n\t\t\t\t\t\t\t\t\t<div class=\"activity-inner\" *ngIf='blog.post_type == \"product\"' style=\"border-top:#f7ecec\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"post-feed-img dft\" style=\"float:left;width:30%\" >\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{blog.file}}\" alt=\"\" style=\"width:100%\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"post-feed-img dft\" style=\"float:left;width:70%;padding:0 20px\">\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 23px;margin: 0 0 10px 0;padding: 0 0 10px 0;\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{blog.product_name}}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"color: #73bce5;font-weight: bold; font-size:20px\">\n\t\t\t\t\t\t\t\t\t\t\t\t${{blog.price}}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"blog.content.length <= 500\" [innerHTML]=\"blog.content\"></p>\n\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"blog.content.length > 500\" [innerHTML]=\"blog.content.substr(0,500)+'...'\"></p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<!-- IN CASE OF SUGGESTION POST -->\n\t\t\t\t\t\t\t\t\t<div class=\"activity-inner\" *ngIf='blog.post_type == \"suggestion\"' style=\"border-top:#f7ecec\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"post-feed-img dft\" style=\"float:left;width:100%;padding:0 20px;text-align:center;\" *ngIf='blog.content != null'>\n\t\t\t\t\t\t\t\t\t\t\t<p [innerHTML]=\"blog.content\"></p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"post-feed-img dft\" style=\"float:left;width:100%;text-align:center;\" *ngIf='blog.file != null'>\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{blog.file}}\" alt=\"\" style=\"width:20%\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"post-details-activity-bottom pb-10\" style=\"float:left;width:100%;\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"like-com\" *ngIf='blog.post_type == \"simple\" || blog.post_type == \"product\"'>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"is_logged_in == 'true'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"fa fa-thumbs-up\"></i> Like</a>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"fa fa-share-square-o\"></i> Share</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"is_logged_in == 'false'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink='/login'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-thumbs-up\"></i> \n\t\t\t\t\t\t\t\t\t\t\t\t\tLike\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink='/login'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-share-square-o\"></i> \n\t\t\t\t\t\t\t\t\t\t\t\t\tShare\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"is_logged_in == 'true'\" style=\"margin:0 auto\">\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"like-com\" *ngIf='blog.post_type == \"poll\"' style=\"margin:0 auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;margin-right: 0;margin-left:0;border-right:1px solid\" (click)=\"givePoll(blog,blog?.button1)\" *ngIf=\"!userAlreadyExist(blog)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"float: left;padding:2px 15px;background-image: linear-gradient(#1c86c7, #b9d8ea);color: #fff;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"float: left;width: 100%;text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{blog?.button1}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"font-weight: 600;float: left;width: 100%;text-align: center;margin: 5px 0 0 0;font-size: 20px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{blog?.optin1_polling}}%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;margin-right: 0;margin-left:0;\" (click)=\"givePoll(blog,blog?.button2)\" *ngIf=\"!userAlreadyExist(blog)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"float: left;padding:2px 15px;margin: 0 0 0 0;background-image: linear-gradient(#1c86c7, #b9d8ea);color: #fff;border-left: 1px solid #fff;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"float: left;width: 100%;text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{blog?.button2}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"font-weight: 600;float: left;width: 100%;text-align: center;margin: 5px 0 0 0;font-size: 20px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{blog?.optin2_polling}}%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"userAlreadyExistWithButton1(blog)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;margin-right: 0;margin-left:0;border-right:1px solid\"  >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"float: left;padding:2px 15px;background-image: linear-gradient(#1c86c7, #b9d8ea);color: #fff;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"float: left;width: 100%;text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{blog?.button1}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"font-weight: 600;float: left;width: 100%;text-align: center;margin: 5px 0 0 0;font-size: 20px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{blog?.optin1_polling}}%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;margin-right: 0;margin-left:0;border-right:1px solid;background: #c1c1c1\"  >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"float: left;padding:2px 15px;margin: 0 0 0 0;border-left: 1px solid #fff;border-radius:0px 10px 10px 0px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"float: left;width: 100%;text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{blog?.button2}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"font-weight: 600;float: left;width: 100%;text-align: center;margin: 5px 0 0 0;font-size: 20px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{blog?.optin2_polling}}%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"userAlreadyExistWithButton2(blog)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;margin-right: 0;margin-left:0;border-right:1px solid;\"  >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"float: left;padding:2px 15px;border-radius:10px 0 0 10px;background: #c1c1c1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"float: left;width: 100%;text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{blog?.button1}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"font-weight: 600;float: left;width: 100%;text-align: center;margin: 5px 0 0 0;font-size: 20px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{blog?.optin1_polling}}%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;margin-right: 0;margin-left:0;border-right:1px solid\"  >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"float: left;padding:2px 15px;margin: 0 0 0 0;background-image: linear-gradient(#1c86c7, #b9d8ea);color: #fff;border-left: 1px solid #fff;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"float: left;width: 100%;text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{blog?.button2}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"font-weight: 600;float: left;width: 100%;text-align: center;margin: 5px 0 0 0;font-size: 20px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{blog?.optin2_polling}}%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"like-com\" *ngIf='blog.post_type == \"suggestion\"' style=\"margin:0 auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li style=\"background:#81a8bf\" *ngIf=\"is_logged_in == 'true'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;padding: 5px 17px;margin-right: 0;margin-left:0;border-right:1px solid\" (click)=\"showAllPros(blog?.post_id)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tSuggest\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"is_logged_in == 'false'\" style=\"margin:0 auto\">\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"like-com\" *ngIf='blog.post_type == \"suggestion\"' style=\"margin:0 auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li style=\"background:#81a8bf\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;padding: 5px 17px;margin-right: 0;margin-left:0;border-right:1px solid\" routerLink='/login'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tSuggest\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"like-com\" *ngIf='blog.post_type == \"poll\"' style=\"margin:0 auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li style=\"background:#81a8bf\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;padding: 5px 17px;margin-right: 0;margin-left:0;border-right:1px solid\" routerLink='/login'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{blog?.button1}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;padding: 5px 17px;margin-right: 0;margin-left:0;\" routerLink='/login'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{blog?.button2}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div *ngIf='blog.post_type == \"suggestion\"'>\n\t\t\t\t\t\t\t\t\t\t<div commentsArea *ngIf=\"blog?.count_suggestion > 0\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 (click)='makeToggle(blog.post_id)' style=\"cursor:pointer;\" *ngIf='blog?.count_suggestion > 1'>\n\t\t\t\t\t\t\t\t\t\t\t\t{{blog?.count_suggestion}} Suggestions\n\t\t\t\t\t\t\t\t\t\t\t</h5>\n\n\t\t\t\t\t\t\t\t\t\t\t<h5 (click)='makeToggle(blog.post_id)' style=\"cursor:pointer;\" *ngIf='blog?.count_suggestion == 1'>\n\t\t\t\t\t\t\t\t\t\t\t\t{{blog?.count_suggestion}} Suggestion\n\t\t\t\t\t\t\t\t\t\t\t</h5>\n\n\t\t\t\t\t\t\t\t\t\t\t<div scrollArea *ngIf='toggle == blog.post_id' style=\" border-top: 2px solid #fff; padding-top:4px;\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"width: 100%;float: left;text-align: right;margin: 0 0 7px 0;cursor: pointer;\" (click)='HideToggle()'> [Hide Comments]</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div comntRow *ngFor=\"let suggests of blog?.all_suggestions\" style=\" background: #ffffff;padding: 10px; cursor:pointer\" (click)=\"productDetailPage(suggests?.product_id)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span  style=\"width:75px;height:75px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{IMAGES_URL}}/product_images/{{suggests.product_image}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div comntRit style=\"display:inline-block;margin:0 0 0 15px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div comntbg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>{{suggests?.product_name}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSuggested By: {{suggests?.name}} {{suggests?.last_name}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{suggests?.suggested_date | date}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"tag-box\"></div> -->\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"comment-section\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <ion-input type=\"text\" placeholder=\"Write Your Comment...\" class=\"commnetbar\"></ion-input>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn-style\"><i class=\"fa fa-reply\" aria-hidden=\"true\"></i></button>  -->\n\t\t\t\t\t\t\t\t\t<!-- </div> -->\n\t\t\t\t\t\t\t\t</article>\t\n\n\t\t\t\t\t\t\t\t<article class=\"post-feed-item\" *ngIf=\"all_blogs?.length == 0 \" style=\"text-align: center;padding: 10px 0;color: #777;\">\n\t\t\t\t\t\t\t\t\tNo post found\n\t\t\t\t\t\t\t\t</article>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>            \t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t   \t</div>\n\n\t\t\t\t\t<!-- <ion-row>\n\t\t\t\t\t\t<ion-col size=\"12\" *ngIf=\"all_blogs != ''\">\n\t\t\t\t\t\t\t<div pagination-container text-right class=\"ion-hide-md-down\">\n\t\t\t\t\t\t\t\t<ul class=\"list-inline list-unstyled list-sytr\">\n\t\t\t\t\t\t\t\t\t<li (click)=\"paginate('prev')\" class=\"prev\"><a><i class=\"fa fa-angle-left\"></i></a></li>\n\t\t\t\t\t\t\t\t\t<li (click)=\"paginate(i+1)\" *ngFor=\"let p of arrayOne(total_pages); let i = index \" [ngClass]=\"current_page == i+1 ? 'active' : ''\"><a>{{i+1}}</a></li>\n\t\t\t\t\t\t\t\t\t<li (click)=\"paginate('next')\" class=\"next\"><a><i class=\"fa fa-angle-right\"></i></a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row> -->\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-3\" style=\"float:left;border: 2px solid #e3e3e3;\">\n\t\t\t\t\t<h3 style=\"border-bottom: 1px solid #f2faff;margin: 0 0 10px 0;\">Suggestions</h3>\n\n\t\t\t\t\t<ul style=\"height:600px;overflow-y: scroll;\">\n\t\t\t\t\t\t<li *ngFor=\"let usr of users\" style=\"background: #f2faff;margin-bottom:10px;display: inline-block;width: 100%;padding: 10px;\">\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{usr?.profile_picture}}\" style=\"width:40px;float:left;\">\n\t\t\t\t\t\t\t\t<h4 style=\"float:left;margin:0 0 0 10px\">\n\t\t\t\t\t\t\t\t\t{{usr?.name}} {{usr?.lastname}}\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<p style=\"font-size: 11px;line-height: 3px;margin: 0 0 25px 0;\">\n\t\t\t\t\t\t\t\t\t\t{{usr?.email}}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div style=\"float:left;width: 100%;\"  *ngIf=\"is_login == 'true'\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)='follow_user(usr)' *ngIf='usr?.followedUser == \"0\"' style=\"border-color:green;color:green;border: 1px solid green;padding: 0 21px;float: right;\">\n\t\t\t\t\t\t\t\t\tFollow\n\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)='unfollow_user(usr)' *ngIf='usr?.followedUser == \"1\"' style=\"border-color:red;color:red;border: 1px solid red;padding: 0 21px;float: right;\">\n\t\t\t\t\t\t\t\t\tUnFollow\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div style=\"float:left;width: 100%;\"  *ngIf=\"is_login == 'false'\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink='/login' style=\"border-color:green;color:green;border: 1px solid green;padding: 0 21px;float: right;\">\n\t\t\t\t\t\t\t\t\tFollow\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<ul *ngIf=\"users?.length == 0\">\n\t\t\t\t\t\t<li>No any user(s) yet!</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- <div class=\"col-lg-3\" style=\"float:left;border: 2px solid #e3e3e3;\" *ngIf=\"is_login == 'false'\">\n\t\t\t\t\t<h3 style=\"border-bottom: 1px solid #f2faff;margin: 0 0 10px 0;\">Suggestions</h3>\n\n\t\t\t\t\t<ul style=\"height:600px;overflow-y: scroll;\">\n\t\t\t\t\t\t<li *ngFor=\"let usr of usersAll\" style=\"background: #f2faff;margin-bottom:10px;display: inline-block;width: 100%;padding: 10px;\">\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{usr?.profile_picture}}\" style=\"width:40px;float:left;\">\n\t\t\t\t\t\t\t\t<h4 style=\"float:left;margin:0 0 0 10px\">\n\t\t\t\t\t\t\t\t\t{{usr?.name}} {{usr?.lastname}}\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<p style=\"font-size: 11px;line-height: 3px;margin: 0 0 25px 0;\">\n\t\t\t\t\t\t\t\t\t\t{{usr?.email}}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div style=\"float:left;width: 100%;\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/login\" style=\"border-color:green;color:green;border: 1px solid green;padding: 0 21px;float: right;\">\n\t\t\t\t\t\t\t\t\tFollow\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<ul *ngIf=\"users?.length == 0\">\n\t\t\t\t\t\t<li>No any user(s) yet!</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div> -->\n\t\t\t</div>\n\t\t</div>\n   </div>\n</div>\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/blog/blog.page.scss":
/*!*************************************!*\
  !*** ./src/app/blog/blog.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  display: none !important; }\n\nion-header ion-toolbar ion-menu-button {\n  height: 35px;\n  position: inherit;\n  top: inherit;\n  right: inherit;\n  transition: inherit;\n  transition-delay: .1s; }\n\nion-header ion-toolbar ion-menu-button img {\n    max-width: 20px; }\n\nion-header ion-toolbar ion-title {\n  font-weight: 700; }\n\n@media (min-width: 768px) {\n  ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img [sharebtn-img] {\n    display: none; }\n  ion-content .home-page [mob-icon-sec] {\n    display: none; } }\n\n@media (max-width: 767px) {\n  ion-content .home-page [mob-container] {\n    max-width: 100%; }\n  ion-content .home-page .header-call-action {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: flex-end;\n    padding: 20px 0px; }\n    ion-content .home-page .header-call-action .menu-right-ul {\n      padding: 0; }\n      ion-content .home-page .header-call-action .menu-right-ul li {\n        margin-left: 7px; }\n        ion-content .home-page .header-call-action .menu-right-ul li a {\n          font-size: 16px;\n          padding: 0px;\n          color: #444;\n          width: 30px;\n          height: 30px;\n          line-height: 30px;\n          background: #f1f1f1;\n          border-radius: 50%; }\n          ion-content .home-page .header-call-action .menu-right-ul li a:hover {\n            background: var(--ion-color-primary);\n            color: #fff; }\n  ion-content .home-page .newsfeedinner {\n    margin-top: 0px; }\n    ion-content .home-page .newsfeedinner .newsfeed-header .media .message-item-img {\n      width: 50px;\n      min-width: 50px;\n      height: 50px; }\n      ion-content .home-page .newsfeedinner .newsfeed-header .media .message-item-img img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n    ion-content .home-page .newsfeedinner .newsfeed-header .media .media-body a.newsfeed_post-popup {\n      margin-left: 0px; }\n      ion-content .home-page .newsfeedinner .newsfeed-header .media .media-body a.newsfeed_post-popup ion-textarea {\n        height: 50px;\n        margin: 0px;\n        font-size: 12px;\n        --padding-bottom: 5px;\n        --padding-top: 5px;\n        --padding-start: 15px;\n        --padding-end: 15px;\n        padding: 0px; }\n    ion-content .home-page .newsfeedinner .newsfeed-header .newsfeed-post-bottom .newsfeed-attachments {\n      padding: 0px; }\n      ion-content .home-page .newsfeedinner .newsfeed-header .newsfeed-post-bottom .newsfeed-attachments ul li {\n        font-size: 18px; }\n      ion-content .home-page .newsfeedinner .newsfeed-header .newsfeed-post-bottom .newsfeed-attachments button.post-btn {\n        padding: 4px 12px;\n        font-size: 12px !important; }\n  ion-content .home-page .post-feed-main article.post-feed-item {\n    padding-bottom: 20px;\n    margin-bottom: 20px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-avatar {\n      width: 45px;\n      height: 45px;\n      margin-right: 10px;\n      border-radius: 50%;\n      overflow: hidden; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head h4 {\n      line-height: 20px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head h4 a {\n        font-size: 13px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-header .activity-head p {\n      font-size: 12px;\n      line-height: 20px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-inner p {\n      font-size: 12px;\n      line-height: 20px;\n      color: #777; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img img {\n      width: 100%;\n      height: 160px;\n      -o-object-fit: cover;\n         object-fit: cover; }\n    ion-content .home-page .post-feed-main article.post-feed-item .activity-inner .post-feed-img [sharebtn-img] {\n      position: absolute;\n      right: 0px;\n      top: 10px;\n      background: rgba(115, 188, 229, 0.8);\n      color: #fff;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      padding: 6px 10px;\n      font-size: 16px;\n      border-radius: 30px 0px 0px 30px; }\n    ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom {\n      padding-bottom: 0px !important;\n      flex-direction: row;\n      align-items: center; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li a {\n        font-size: 13px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li a i {\n          margin-right: 3px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images {\n        margin-right: 0px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images span {\n          width: 28px;\n          height: 28px;\n          left: 0px;\n          margin-left: -15px; }\n          ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images span:first-child {\n            margin-left: 0px; }\n          ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom ul.like-com li .likedby-images span.likedbycount {\n            width: 28px;\n            height: 28px;\n            line-height: 26px;\n            font-size: 11px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option {\n        margin-top: 0px; }\n        ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item {\n          margin: 0px 0px 0px 4px !important; }\n          ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item a {\n            height: 26px;\n            width: 26px;\n            padding: 0px 8px;\n            font-size: 0px !important; }\n            ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item a span {\n              padding: 0px;\n              margin: 0px;\n              font-size: 10px; }\n            ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom .mini-cart-option ul.like-com li.post-button-item a:hover {\n              margin-left: 0px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .post-details-activity-bottom [share-mb-none] {\n        display: none; }\n    ion-content .home-page .post-feed-main article.post-feed-item .tag-box {\n      padding-bottom: 5px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .tag-box .tagword .aside-title {\n        margin-bottom: 8px;\n        display: none; }\n      ion-content .home-page .post-feed-main article.post-feed-item .tag-box .tagword .tagcloud a {\n        padding: 3px 8px;\n        margin-right: 4px;\n        margin-bottom: 6px;\n        font-size: 10px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .tag-box .like-com {\n        display: none; }\n    ion-content .home-page .post-feed-main article.post-feed-item .comment-section {\n      margin: 5px 0px 0px;\n      padding: 0 15px; }\n      ion-content .home-page .post-feed-main article.post-feed-item .comment-section ion-input.commnetbar {\n        font-size: 12px; } }\n\n[commentsArea] {\n  float: left;\n  clear: both;\n  border-top: 1px solid #eee;\n  padding: 20px 0 0;\n  margin: 15px 0 0;\n  background: #f3f3f3;\n  width: 100%;\n  border-radius: 0 0 10px 10px; }\n\n[commentsArea] h5 {\n    color: #666;\n    font-size: 15px;\n    margin: 0 20px 15px;\n    font-weight: 400; }\n\n[commentsArea] [scrollArea] {\n    max-height: 400px;\n    overflow-y: auto;\n    padding: 0 20px; }\n\n[commentsArea] [comntRow] {\n    display: flex;\n    margin: 0 0 20px; }\n\n[commentsArea] [comntRow] span {\n      min-width: 50px; }\n\n[commentsArea] [comntRow] span img {\n        width: 100%;\n        height: 100%;\n        border: 1px solid #eee;\n        margin: 0 25px 0 0; }\n\n[commentsArea] [comntRow] [comntRit] {\n      /*margin-left:auto;*/ }\n\n[commentsArea] [comntRow] [comntRit] [comntbg] {\n        background: #fff;\n        border-radius: 10px;\n        box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.03);\n        padding: 5px 12px 10px; }\n\n[commentsArea] [comntRow] [comntRit] [comntbg] h3 {\n          font-weight: 500;\n          margin: 0 0 7px;\n          color: #222; }\n\n[commentsArea] [comntRow] [comntRit] [comntbg] p {\n          font-weight: 400;\n          margin: 0 0 0px;\n          color: #555; }\n\n[commentsArea] [comntRow] [comntRit] small {\n        margin: 10px 0 0;\n        font-size: 13px;\n        color: #888;\n        font-style: italic; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvYmxvZy9ibG9nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYmxvZy9ibG9nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdDLHdCQUFzQixFQUFBOztBQUh2QjtFQVNHLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQXFCLEVBQUE7O0FBZHhCO0lBaUJJLGVBQWUsRUFBQTs7QUFqQm5CO0VBc0JHLGdCQUFlLEVBQUE7O0FBS2xCO0VBQ0k7SUFnQkssYUFBWSxFQUFBO0VBaEJqQjtJQXlCRyxhQUFZLEVBQUEsRUFDZjs7QUFJSjtFQUNJO0lBTUEsZUFBZSxFQUFBO0VBTmY7SUFVQSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDYixpQkFBaUIsRUFBQTtJQWQ3QjtNQWlCSSxVQUFVLEVBQUE7TUFqQmQ7UUFvQkssZ0JBQWdCLEVBQUE7UUFwQnJCO1VBdUJHLGVBQWU7VUFDZixZQUFZO1VBQ1osV0FBVztVQUNYLFdBQVc7VUFDWCxZQUFZO1VBQ1osaUJBQWlCO1VBQ2pCLG1CQUFtQjtVQUNuQixrQkFBa0IsRUFBQTtVQTlCckI7WUFpQ08sb0NBQW9DO1lBQ3BDLFdBQVcsRUFBQTtFQWxDbEI7SUEwQ0csZUFBYyxFQUFBO0lBMUNqQjtNQWlERyxXQUFXO01BQ1gsZUFBZTtNQUNmLFlBQVksRUFBQTtNQW5EZjtRQXNETyxXQUFVO1FBQ2IsWUFBVztRQUNSLG9CQUFpQjtXQUFqQixpQkFBaUIsRUFBQTtJQXhEeEI7TUFpRUssZ0JBQWdCLEVBQUE7TUFqRXJCO1FBb0VNLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZTtRQUNmLHFCQUFpQjtRQUNqQixrQkFBYztRQUNkLHFCQUFnQjtRQUNoQixtQkFBYztRQUNkLFlBQVksRUFBQTtJQTNFbEI7TUFxRkcsWUFBWSxFQUFBO01BckZmO1FBMEZLLGVBQWUsRUFBQTtNQTFGcEI7UUFpR0ssaUJBQWlCO1FBQ2pCLDBCQUEwQixFQUFBO0VBbEcvQjtJQWdIRSxvQkFBb0I7SUFDcEIsbUJBQW1CLEVBQUE7SUFqSHJCO01Bc0hJLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixnQkFBZ0IsRUFBQTtJQTFIcEI7TUFnSUssaUJBQWlCLEVBQUE7TUFoSXRCO1FBbUlNLGVBQWUsRUFBQTtJQW5JckI7TUF3SUssZUFBZTtNQUNmLGlCQUFpQixFQUFBO0lBekl0QjtNQWlKSSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLFdBQVcsRUFBQTtJQW5KZjtNQXlKSyxXQUFXO01BQ1gsYUFBYTtNQUNiLG9CQUFnQjtTQUFoQixpQkFBZ0IsRUFBQTtJQTNKckI7TUErSkssa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixTQUFTO01BQ1Qsb0NBQXVDO01BQ3ZDLFdBQVc7TUFDWCxvQkFBb0I7TUFDcEIsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGdDQUFnQyxFQUFBO0lBektyQztNQStLRyw4QkFBNkI7TUFDN0IsbUJBQW1CO01BQ25CLG1CQUFtQixFQUFBO01Bakx0QjtRQTBMTyxlQUFlLEVBQUE7UUExTHRCO1VBNkxRLGlCQUFpQixFQUFBO01BN0x6QjtRQWtNTyxpQkFBZ0IsRUFBQTtRQWxNdkI7VUFxTVEsV0FBVztVQUNYLFlBQVk7VUFDWixTQUFTO1VBQ1Qsa0JBQWtCLEVBQUE7VUF4TTFCO1lBMk1TLGdCQUFnQixFQUFBO1VBM016QjtZQStNUyxXQUFXO1lBQ1gsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixlQUFlLEVBQUE7TUFsTnhCO1FBMk5JLGVBQWUsRUFBQTtRQTNObkI7VUFvT1Esa0NBQWlDLEVBQUE7VUFwT3pDO1lBdU9TLFlBQVk7WUFDWixXQUFXO1lBQ1gsZ0JBQWdCO1lBQ2hCLHlCQUF3QixFQUFBO1lBMU9qQztjQTZPVSxZQUFZO2NBQ1osV0FBVztjQUNYLGVBQWUsRUFBQTtZQS9PekI7Y0FtUFUsZ0JBQWdCLEVBQUE7TUFuUDFCO1FBNlBJLGFBQVksRUFBQTtJQTdQaEI7TUFrUUcsbUJBQW1CLEVBQUE7TUFsUXRCO1FBdVFLLGtCQUFrQjtRQUNsQixhQUFZLEVBQUE7TUF4UWpCO1FBOFFNLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGVBQWUsRUFBQTtNQWpSckI7UUF1UkksYUFBWSxFQUFBO0lBdlJoQjtNQTRSRyxtQkFBbUI7TUFDbkIsZUFBZSxFQUFBO01BN1JsQjtRQWtTSyxlQUFlLEVBQUEsRUFDZjs7QUN0TFQ7RURrTUMsV0FBVztFQUNSLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDRCQUE0QixFQUFBOztBQ2hNOUI7SURrTUEsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7O0FDaE1oQjtJRG1NQSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWMsRUFBQTs7QUNqTWQ7SURvTUEsYUFBYTtJQUNiLGdCQUFlLEVBQUE7O0FDbE1iO01Eb01ELGVBQWMsRUFBQTs7QUNsTVg7UURvTUYsV0FBVztRQUNSLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsa0JBQWtCLEVBQUE7O0FDbE1yQjtNRHNNRCxvQkFBQSxFQUFxQjs7QUNwTWxCO1FEc01GLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsMkNBQXdDO1FBQ3hDLHNCQUFxQixFQUFBOztBQ3BNakI7VURzTUgsZ0JBQWU7VUFDZixlQUFjO1VBQ2QsV0FBVyxFQUFBOztBQ3BNUjtVRHVNSCxnQkFBZTtVQUNmLGVBQWM7VUFDZCxXQUFXLEVBQUE7O0FDck1WO1FEeU1GLGdCQUFlO1FBQ2YsZUFBZTtRQUNmLFdBQVc7UUFDWCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG5cdCY6OmFmdGVyXHJcblx0e1xyXG5cdGRpc3BsYXk6bm9uZSFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdGlvbi10b29sYmFyXHJcblx0e1xyXG5cdFx0aW9uLW1lbnUtYnV0dG9uXHJcblx0XHR7XHJcblx0XHRcdGhlaWdodDogMzVweDtcclxuXHRcdFx0cG9zaXRpb246IGluaGVyaXQ7XHJcblx0XHRcdHRvcDogaW5oZXJpdDtcclxuXHRcdFx0cmlnaHQ6IGluaGVyaXQ7XHJcblx0XHRcdHRyYW5zaXRpb246IGluaGVyaXQ7XHJcblx0XHRcdHRyYW5zaXRpb24tZGVsYXk6IC4xcztcclxuXHRcdFx0aW1nXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXgtd2lkdGg6IDIwcHg7XHJcblx0XHRcdH1cdFx0XHJcblx0XHR9XHJcblx0XHRpb24tdGl0bGVcclxuXHRcdHtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6NzAwO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBpb24tY29udGVudFxyXG5cdHtcclxuXHRcdC5ob21lLXBhZ2VcclxuXHRcdHtcclxuXHRcdFx0LnBvc3QtZmVlZC1tYWluXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhcnRpY2xlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ji5wb3N0LWZlZWQtaXRlbVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQuYWN0aXZpdHktaW5uZXJcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdC5wb3N0LWZlZWQtaW1nXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0W3NoYXJlYnRuLWltZ11cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTpub25lO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVx0XHRcclxuXHRcdCAgICBbbW9iLWljb24tc2VjXVxyXG5cdFx0XHR7XHJcblx0XHRcdCAgICBkaXNwbGF5Om5vbmU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBpb24tY29udGVudFxyXG5cdHtcclxuXHQgICAgLmhvbWUtcGFnZVxyXG5cdFx0e1xyXG5cdFx0XHRbbW9iLWNvbnRhaW5lcl0gXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0XHRcdH1cdFx0XHJcblx0XHRcdC5oZWFkZXItY2FsbC1hY3Rpb24gXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcdFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwcHg7XHRcdFx0XHRcclxuXHRcdFx0XHQubWVudS1yaWdodC11bCBcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0ICAgIHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0XHRsaSBcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdCAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG5cdFx0XHRcdFx0XHRhIFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDBweDtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzQ0NDtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzBweDtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2YxZjFmMTtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0Jjpob3ZlclxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1x0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0ICAgIGNvbG9yOiAjZmZmO1x0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHRcdFx0XHJcblx0XHRcdFx0XHR9XHRcdFx0XHJcblx0XHRcdFx0fVx0XHRcdFxyXG5cdFx0XHR9XHRcdFxyXG5cdFx0XHQubmV3c2ZlZWRpbm5lclxyXG5cdFx0XHR7XHJcblx0XHRcdCAgICBtYXJnaW4tdG9wOjBweDtcclxuXHRcdFx0XHQubmV3c2ZlZWQtaGVhZGVyXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdCAgICAubWVkaWFcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Lm1lc3NhZ2UtaXRlbS1pbWcgXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogNTBweDtcclxuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDUwcHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0XHRcdFx0XHRcdGltZ1xyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQgICAgd2lkdGg6MTAwJTtcclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDoxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdCAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Lm1lZGlhLWJvZHlcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGFcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHQmLm5ld3NmZWVkX3Bvc3QtcG9wdXAgXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlvbi10ZXh0YXJlYSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogNTBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC0tcGFkZGluZy10b3A6IDVweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LS1wYWRkaW5nLWVuZDogMTVweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5uZXdzZmVlZC1wb3N0LWJvdHRvbVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQubmV3c2ZlZWQtYXR0YWNobWVudHMgXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRcdFx0XHRcdFx0dWxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRsaSBcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0Ji5wb3N0LWJ0blxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA0cHggMTJweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0LnBvc3QtZmVlZC1tYWluXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhcnRpY2xlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ji5wb3N0LWZlZWQtaXRlbVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMjBweDsgICBcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0LmFjdGl2aXR5LWhlYWRlclxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0LmFjdGl2aXR5LWF2YXRhclxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA0NXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0NXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1x0XHJcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1x0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0LmFjdGl2aXR5LWhlYWRcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRoNCBcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGEgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHAgXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LmFjdGl2aXR5LWlubmVyXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRwIFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICM3Nzc7XHJcblx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdFx0LnBvc3QtZmVlZC1pbWdcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRpbWcgXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE2MHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvYmplY3QtZml0OmNvdmVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0W3NoYXJlYnRuLWltZ10gXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmlnaHQ6IDBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dG9wOiAxMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDExNSAsIDE4OCAsIDIyOSAsIDAuOCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDZweCAxMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDMwcHggMHB4IDBweCAzMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQucG9zdC1kZXRhaWxzLWFjdGl2aXR5LWJvdHRvbVxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDBweCFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1x0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0dWxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHQmLmxpa2UtY29tIFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogM3B4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lmxpa2VkYnktaW1hZ2VzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNwYW4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAyOHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDI4cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6IDBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQmOmZpcnN0LWNoaWxkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMHB4O1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ji5saWtlZGJ5Y291bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAyOHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMjhweDtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTFweDtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0ICAgICBcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Lm1pbmktY2FydC1vcHRpb25cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHR1bFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQmLmxpa2UtY29tXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCYucG9zdC1idXR0b24taXRlbVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDBweCAwcHggMHB4IDRweCFpbXBvcnRhbnQ7ICAgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyNnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAyNnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDBweCA4cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwcHghaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNwYW4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCY6aG92ZXIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0W3NoYXJlLW1iLW5vbmVdXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5Om5vbmU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC50YWctYm94XHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cdFx0XHRcdFx0XHRcdC50YWd3b3JkXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0LmFzaWRlLXRpdGxlIFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0LnRhZ2Nsb3VkXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGEgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAzcHggOHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogNHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDZweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC5saWtlLWNvbVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LmNvbW1lbnQtc2VjdGlvblxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiA1cHggMHB4IDBweDtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0XHRcdFx0XHRcdFx0aW9uLWlucHV0XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0Ji5jb21tbmV0YmFyXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcbn1cclxuXHJcbltjb21tZW50c0FyZWFde1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAwO1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgMDtcclxuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcblx0aDV7XHJcblx0XHRjb2xvcjogIzY2NjtcclxuXHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdG1hcmdpbjowIDIwcHggMTVweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0fVxyXG5cdFtzY3JvbGxBcmVhXXtcclxuXHRcdG1heC1oZWlnaHQ6IDQwMHB4O1xyXG5cdFx0b3ZlcmZsb3cteTogYXV0bztcclxuXHRcdHBhZGRpbmc6MCAyMHB4O1xyXG5cdH1cclxuXHRbY29tbnRSb3dde1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdG1hcmdpbjowIDAgMjBweDtcclxuXHRcdHNwYW57XHJcblx0XHRcdG1pbi13aWR0aDo1MHB4O1xyXG5cdFx0XHRpbWd7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdCAgICBoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdCAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG5cdFx0XHQgICAgbWFyZ2luOiAwIDI1cHggMCAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRbY29tbnRSaXRde1xyXG5cdFx0XHQvKm1hcmdpbi1sZWZ0OmF1dG87Ki9cclxuXHRcdFx0W2NvbW50Ymdde1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0XHRib3gtc2hhZG93OiAxcHggMXB4IDBweCByZ2JhKDAsMCwwLCAuMDMpO1xyXG5cdFx0XHRcdHBhZGRpbmc6NXB4IDEycHggMTBweDtcclxuXHRcdFx0XHRoM3tcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuXHRcdFx0XHRcdG1hcmdpbjowIDAgN3B4O1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMyMjI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHB7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDo0MDA7XHJcblx0XHRcdFx0XHRtYXJnaW46MCAwIDBweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAjNTU1O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRzbWFsbHtcclxuXHRcdFx0XHRtYXJnaW46MTBweCAwIDA7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRcdGNvbG9yOiAjODg4O1xyXG5cdFx0XHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSIsImlvbi1oZWFkZXI6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgdG9wOiBpbmhlcml0O1xuICByaWdodDogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbi1kZWxheTogLjFzOyB9XG4gIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9uIGltZyB7XG4gICAgbWF4LXdpZHRoOiAyMHB4OyB9XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaW9uLWNvbnRlbnQgLmhvbWUtcGFnZSAucG9zdC1mZWVkLW1haW4gYXJ0aWNsZS5wb3N0LWZlZWQtaXRlbSAuYWN0aXZpdHktaW5uZXIgLnBvc3QtZmVlZC1pbWcgW3NoYXJlYnRuLWltZ10ge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgaW9uLWNvbnRlbnQgLmhvbWUtcGFnZSBbbW9iLWljb24tc2VjXSB7XG4gICAgZGlzcGxheTogbm9uZTsgfSB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBpb24tY29udGVudCAuaG9tZS1wYWdlIFttb2ItY29udGFpbmVyXSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9XG4gIGlvbi1jb250ZW50IC5ob21lLXBhZ2UgLmhlYWRlci1jYWxsLWFjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMjBweCAwcHg7IH1cbiAgICBpb24tY29udGVudCAuaG9tZS1wYWdlIC5oZWFkZXItY2FsbC1hY3Rpb24gLm1lbnUtcmlnaHQtdWwge1xuICAgICAgcGFkZGluZzogMDsgfVxuICAgICAgaW9uLWNvbnRlbnQgLmhvbWUtcGFnZSAuaGVhZGVyLWNhbGwtYWN0aW9uIC5tZW51LXJpZ2h0LXVsIGxpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDsgfVxuICAgICAgICBpb24tY29udGVudCAuaG9tZS1wYWdlIC5oZWFkZXItY2FsbC1hY3Rpb24gLm1lbnUtcmlnaHQtdWwgbGkgYSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cbiAgICAgICAgICBpb24tY29udGVudCAuaG9tZS1wYWdlIC5oZWFkZXItY2FsbC1hY3Rpb24gLm1lbnUtcmlnaHQtdWwgbGkgYTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxuICBpb24tY29udGVudCAuaG9tZS1wYWdlIC5uZXdzZmVlZGlubmVyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7IH1cbiAgICBpb24tY29udGVudCAuaG9tZS1wYWdlIC5uZXdzZmVlZGlubmVyIC5uZXdzZmVlZC1oZWFkZXIgLm1lZGlhIC5tZXNzYWdlLWl0ZW0taW1nIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4OyB9XG4gICAgICBpb24tY29udGVudCAuaG9tZS1wYWdlIC5uZXdzZmVlZGlubmVyIC5uZXdzZmVlZC1oZWFkZXIgLm1lZGlhIC5tZXNzYWdlLWl0ZW0taW1nIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XG4gICAgaW9uLWNvbnRlbnQgLmhvbWUtcGFnZSAubmV3c2ZlZWRpbm5lciAubmV3c2ZlZWQtaGVhZGVyIC5tZWRpYSAubWVkaWEtYm9keSBhLm5ld3NmZWVkX3Bvc3QtcG9wdXAge1xuICAgICAgbWFyZ2luLWxlZnQ6IDBweDsgfVxuICAgICAgaW9uLWNvbnRlbnQgLmhvbWUtcGFnZSAubmV3c2ZlZWRpbm5lciAubmV3c2ZlZWQtaGVhZGVyIC5tZWRpYSAubWVkaWEtYm9keSBhLm5ld3NmZWVkX3Bvc3QtcG9wdXAgaW9uLXRleHRhcmVhIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7IH1cbiAgICBpb24tY29udGVudCAuaG9tZS1wYWdlIC5uZXdzZmVlZGlubmVyIC5uZXdzZmVlZC1oZWFkZXIgLm5ld3NmZWVkLXBvc3QtYm90dG9tIC5uZXdzZmVlZC1hdHRhY2htZW50cyB7XG4gICAgICBwYWRkaW5nOiAwcHg7IH1cbiAgICAgIGlvbi1jb250ZW50IC5ob21lLXBhZ2UgLm5ld3NmZWVkaW5uZXIgLm5ld3NmZWVkLWhlYWRlciAubmV3c2ZlZWQtcG9zdC1ib3R0b20gLm5ld3NmZWVkLWF0dGFjaG1lbnRzIHVsIGxpIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4OyB9XG4gICAgICBpb24tY29udGVudCAuaG9tZS1wYWdlIC5uZXdzZmVlZGlubmVyIC5uZXdzZmVlZC1oZWFkZXIgLm5ld3NmZWVkLXBvc3QtYm90dG9tIC5uZXdzZmVlZC1hdHRhY2htZW50cyBidXR0b24ucG9zdC1idG4ge1xuICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7IH1cbiAgaW9uLWNvbnRlbnQgLmhvbWUtcGFnZSAucG9zdC1mZWVkLW1haW4gYXJ0aWNsZS5wb3N0LWZlZWQtaXRlbSB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuICAgIGlvbi1jb250ZW50IC5ob21lLXBhZ2UgLnBvc3QtZmVlZC1tYWluIGFydGljbGUucG9zdC1mZWVkLWl0ZW0gLmFjdGl2aXR5LWhlYWRlciAuYWN0aXZpdHktYXZhdGFyIHtcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgIGlvbi1jb250ZW50IC5ob21lLXBhZ2UgLnBvc3QtZmVlZC1tYWluIGFydGljbGUucG9zdC1mZWVkLWl0ZW0gLmFjdGl2aXR5LWhlYWRlciAuYWN0aXZpdHktaGVhZCBoNCB7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDsgfVxuICAgICAgaW9uLWNvbnRlbnQgLmhvbWUtcGFnZSAucG9zdC1mZWVkLW1haW4gYXJ0aWNsZS5wb3N0LWZlZWQtaXRlbSAuYWN0aXZpdHktaGVhZGVyIC5hY3Rpdml0eS1oZWFkIGg0IGEge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7IH1cbiAgICBpb24tY29udGVudCAuaG9tZS1wYWdlIC5wb3N0LWZlZWQtbWFpbiBhcnRpY2xlLnBvc3QtZmVlZC1pdGVtIC5hY3Rpdml0eS1oZWFkZXIgLmFjdGl2aXR5LWhlYWQgcCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDsgfVxuICAgIGlvbi1jb250ZW50IC5ob21lLXBhZ2UgLnBvc3QtZmVlZC1tYWluIGFydGljbGUucG9zdC1mZWVkLWl0ZW0gLmFjdGl2aXR5LWlubmVyIHAge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBjb2xvcjogIzc3NzsgfVxuICAgIGlvbi1jb250ZW50IC5ob21lLXBhZ2UgLnBvc3QtZmVlZC1tYWluIGFydGljbGUucG9zdC1mZWVkLWl0ZW0gLmFjdGl2aXR5LWlubmVyIC5wb3N0LWZlZWQtaW1nIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjsgfVxuICAgIGlvbi1jb250ZW50IC5ob21lLXBhZ2UgLnBvc3QtZmVlZC1tYWluIGFydGljbGUucG9zdC1mZWVkLWl0ZW0gLmFjdGl2aXR5LWlubmVyIC5wb3N0LWZlZWQtaW1nIFtzaGFyZWJ0bi1pbWddIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDExNSwgMTg4LCAyMjksIDAuOCk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4IDBweCAwcHggMzBweDsgfVxuICAgIGlvbi1jb250ZW50IC5ob21lLXBhZ2UgLnBvc3QtZmVlZC1tYWluIGFydGljbGUucG9zdC1mZWVkLWl0ZW0gLnBvc3QtZGV0YWlscy1hY3Rpdml0eS1ib3R0b20ge1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAgIGlvbi1jb250ZW50IC5ob21lLXBhZ2UgLnBvc3QtZmVlZC1tYWluIGFydGljbGUucG9zdC1mZWVkLWl0ZW0gLnBvc3QtZGV0YWlscy1hY3Rpdml0eS1ib3R0b20gdWwubGlrZS1jb20gbGkgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDsgfVxuICAgICAgICBpb24tY29udGVudCAuaG9tZS1wYWdlIC5wb3N0LWZlZWQtbWFpbiBhcnRpY2xlLnBvc3QtZmVlZC1pdGVtIC5wb3N0LWRldGFpbHMtYWN0aXZpdHktYm90dG9tIHVsLmxpa2UtY29tIGxpIGEgaSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7IH1cbiAgICAgIGlvbi1jb250ZW50IC5ob21lLXBhZ2UgLnBvc3QtZmVlZC1tYWluIGFydGljbGUucG9zdC1mZWVkLWl0ZW0gLnBvc3QtZGV0YWlscy1hY3Rpdml0eS1ib3R0b20gdWwubGlrZS1jb20gbGkgLmxpa2VkYnktaW1hZ2VzIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgLmhvbWUtcGFnZSAucG9zdC1mZWVkLW1haW4gYXJ0aWNsZS5wb3N0LWZlZWQtaXRlbSAucG9zdC1kZXRhaWxzLWFjdGl2aXR5LWJvdHRvbSB1bC5saWtlLWNvbSBsaSAubGlrZWRieS1pbWFnZXMgc3BhbiB7XG4gICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7IH1cbiAgICAgICAgICBpb24tY29udGVudCAuaG9tZS1wYWdlIC5wb3N0LWZlZWQtbWFpbiBhcnRpY2xlLnBvc3QtZmVlZC1pdGVtIC5wb3N0LWRldGFpbHMtYWN0aXZpdHktYm90dG9tIHVsLmxpa2UtY29tIGxpIC5saWtlZGJ5LWltYWdlcyBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7IH1cbiAgICAgICAgICBpb24tY29udGVudCAuaG9tZS1wYWdlIC5wb3N0LWZlZWQtbWFpbiBhcnRpY2xlLnBvc3QtZmVlZC1pdGVtIC5wb3N0LWRldGFpbHMtYWN0aXZpdHktYm90dG9tIHVsLmxpa2UtY29tIGxpIC5saWtlZGJ5LWltYWdlcyBzcGFuLmxpa2VkYnljb3VudCB7XG4gICAgICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4OyB9XG4gICAgICBpb24tY29udGVudCAuaG9tZS1wYWdlIC5wb3N0LWZlZWQtbWFpbiBhcnRpY2xlLnBvc3QtZmVlZC1pdGVtIC5wb3N0LWRldGFpbHMtYWN0aXZpdHktYm90dG9tIC5taW5pLWNhcnQtb3B0aW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4OyB9XG4gICAgICAgIGlvbi1jb250ZW50IC5ob21lLXBhZ2UgLnBvc3QtZmVlZC1tYWluIGFydGljbGUucG9zdC1mZWVkLWl0ZW0gLnBvc3QtZGV0YWlscy1hY3Rpdml0eS1ib3R0b20gLm1pbmktY2FydC1vcHRpb24gdWwubGlrZS1jb20gbGkucG9zdC1idXR0b24taXRlbSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCA0cHggIWltcG9ydGFudDsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IC5ob21lLXBhZ2UgLnBvc3QtZmVlZC1tYWluIGFydGljbGUucG9zdC1mZWVkLWl0ZW0gLnBvc3QtZGV0YWlscy1hY3Rpdml0eS1ib3R0b20gLm1pbmktY2FydC1vcHRpb24gdWwubGlrZS1jb20gbGkucG9zdC1idXR0b24taXRlbSBhIHtcbiAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDhweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMHB4ICFpbXBvcnRhbnQ7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IC5ob21lLXBhZ2UgLnBvc3QtZmVlZC1tYWluIGFydGljbGUucG9zdC1mZWVkLWl0ZW0gLnBvc3QtZGV0YWlscy1hY3Rpdml0eS1ib3R0b20gLm1pbmktY2FydC1vcHRpb24gdWwubGlrZS1jb20gbGkucG9zdC1idXR0b24taXRlbSBhIHNwYW4ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IC5ob21lLXBhZ2UgLnBvc3QtZmVlZC1tYWluIGFydGljbGUucG9zdC1mZWVkLWl0ZW0gLnBvc3QtZGV0YWlscy1hY3Rpdml0eS1ib3R0b20gLm1pbmktY2FydC1vcHRpb24gdWwubGlrZS1jb20gbGkucG9zdC1idXR0b24taXRlbSBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDsgfVxuICAgICAgaW9uLWNvbnRlbnQgLmhvbWUtcGFnZSAucG9zdC1mZWVkLW1haW4gYXJ0aWNsZS5wb3N0LWZlZWQtaXRlbSAucG9zdC1kZXRhaWxzLWFjdGl2aXR5LWJvdHRvbSBbc2hhcmUtbWItbm9uZV0ge1xuICAgICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgaW9uLWNvbnRlbnQgLmhvbWUtcGFnZSAucG9zdC1mZWVkLW1haW4gYXJ0aWNsZS5wb3N0LWZlZWQtaXRlbSAudGFnLWJveCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4OyB9XG4gICAgICBpb24tY29udGVudCAuaG9tZS1wYWdlIC5wb3N0LWZlZWQtbWFpbiBhcnRpY2xlLnBvc3QtZmVlZC1pdGVtIC50YWctYm94IC50YWd3b3JkIC5hc2lkZS10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgICAgaW9uLWNvbnRlbnQgLmhvbWUtcGFnZSAucG9zdC1mZWVkLW1haW4gYXJ0aWNsZS5wb3N0LWZlZWQtaXRlbSAudGFnLWJveCAudGFnd29yZCAudGFnY2xvdWQgYSB7XG4gICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDsgfVxuICAgICAgaW9uLWNvbnRlbnQgLmhvbWUtcGFnZSAucG9zdC1mZWVkLW1haW4gYXJ0aWNsZS5wb3N0LWZlZWQtaXRlbSAudGFnLWJveCAubGlrZS1jb20ge1xuICAgICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgaW9uLWNvbnRlbnQgLmhvbWUtcGFnZSAucG9zdC1mZWVkLW1haW4gYXJ0aWNsZS5wb3N0LWZlZWQtaXRlbSAuY29tbWVudC1zZWN0aW9uIHtcbiAgICAgIG1hcmdpbjogNXB4IDBweCAwcHg7XG4gICAgICBwYWRkaW5nOiAwIDE1cHg7IH1cbiAgICAgIGlvbi1jb250ZW50IC5ob21lLXBhZ2UgLnBvc3QtZmVlZC1tYWluIGFydGljbGUucG9zdC1mZWVkLWl0ZW0gLmNvbW1lbnQtc2VjdGlvbiBpb24taW5wdXQuY29tbW5ldGJhciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDsgfSB9XG5cbltjb21tZW50c0FyZWFdIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBib3RoO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgcGFkZGluZzogMjBweCAwIDA7XG4gIG1hcmdpbjogMTVweCAwIDA7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4OyB9XG4gIFtjb21tZW50c0FyZWFdIGg1IHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luOiAwIDIwcHggMTVweDtcbiAgICBmb250LXdlaWdodDogNDAwOyB9XG4gIFtjb21tZW50c0FyZWFdIFtzY3JvbGxBcmVhXSB7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiAwIDIwcHg7IH1cbiAgW2NvbW1lbnRzQXJlYV0gW2NvbW50Um93XSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgMCAyMHB4OyB9XG4gICAgW2NvbW1lbnRzQXJlYV0gW2NvbW50Um93XSBzcGFuIHtcbiAgICAgIG1pbi13aWR0aDogNTBweDsgfVxuICAgICAgW2NvbW1lbnRzQXJlYV0gW2NvbW50Um93XSBzcGFuIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgIG1hcmdpbjogMCAyNXB4IDAgMDsgfVxuICAgIFtjb21tZW50c0FyZWFdIFtjb21udFJvd10gW2NvbW50Uml0XSB7XG4gICAgICAvKm1hcmdpbi1sZWZ0OmF1dG87Ki8gfVxuICAgICAgW2NvbW1lbnRzQXJlYV0gW2NvbW50Um93XSBbY29tbnRSaXRdIFtjb21udGJnXSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMnB4IDEwcHg7IH1cbiAgICAgICAgW2NvbW1lbnRzQXJlYV0gW2NvbW50Um93XSBbY29tbnRSaXRdIFtjb21udGJnXSBoMyB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBtYXJnaW46IDAgMCA3cHg7XG4gICAgICAgICAgY29sb3I6ICMyMjI7IH1cbiAgICAgICAgW2NvbW1lbnRzQXJlYV0gW2NvbW50Um93XSBbY29tbnRSaXRdIFtjb21udGJnXSBwIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDBweDtcbiAgICAgICAgICBjb2xvcjogIzU1NTsgfVxuICAgICAgW2NvbW1lbnRzQXJlYV0gW2NvbW50Um93XSBbY29tbnRSaXRdIHNtYWxsIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljOyB9XG4iXX0= */"

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
/* harmony import */ var _services_user_globalFooService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user/globalFooService.service */ "./src/app/services/user/globalFooService.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var BlogPage = /** @class */ (function () {
    function BlogPage(modalController, router, globalFooService, cd, toastController, loadingController, userService) {
        var _this = this;
        this.modalController = modalController;
        this.router = router;
        this.globalFooService = globalFooService;
        this.cd = cd;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.userService = userService;
        this.tabs = "posts";
        this.simpleContent = "";
        this.simpleAction = "add";
        this.simplePostId = "";
        this.errors = ['', null, undefined];
        this.is_logged_in = localStorage.getItem('is_login');
        this.is_login = localStorage.getItem('is_login');
        this.uploadedFile = "";
        this.uploadedFilePro = "";
        this.uploadedFileSuggestion = "";
        this.isSeller = '';
        this.isSelectedImage = '';
        this.contentPoll = '';
        this.currentUserID = localStorage.getItem('sin_auth_userId');
        this.toggle = '0';
        this.current_page = 1;
        this.pic_url = "http://dev.indiit.solutions/TJ/dev/dev/public/uploads/userprofile/";
        this.allowedMimes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp', 'video/mp4'];
        this.allowedProMimes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp'];
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_4__["config"].IMAGES_URL;
        this.globalFooService.getObservable().subscribe(function (data) {
            if (data.foo.page == 'afterLoginUserName') {
                // alert('login Here');
                _this.is_logged_in = 'true';
                _this.user_name = data.foo.data.name;
                _this.user_image = data.foo.data.profile_picture;
                // this.getSellerAccount();
                _this.getAllUsers();
                _this.getBlogs();
            }
            else if (data.foo.page == 'suggestionDone') {
                // alert('login Here');
                _this.is_logged_in = 'true';
                _this.user_name = data.foo.data.name;
                _this.user_image = data.foo.data.profile_picture;
                // this.getSellerAccount();
                _this.getAllUsers();
                _this.getBlogs();
            }
            else if (data.foo.page == 'sellerDone') {
                _this.getSellerAccount();
            }
            else if (data.foo.page == 'logout') {
                // alert('logout here');
                _this.is_logged_in = 'false';
                _this.ordersLength = '0';
                _this.cartLength = '0';
                _this.getAllUsers();
                _this.getBlogs();
            }
        });
    }
    BlogPage.prototype.ngOnInit = function () {
    };
    BlogPage.prototype.getSellerAccount = function () {
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
    BlogPage.prototype.makeToggle = function (post_id) {
        this.toggle = post_id;
        this.cd.detectChanges();
    };
    BlogPage.prototype.HideToggle = function () {
        this.toggle = '0';
        this.cd.detectChanges();
    };
    BlogPage.prototype.productDetailPage = function (productId) {
        this.router.navigate(['/product-details/' + productId]);
    };
    BlogPage.prototype.ionViewDidEnter = function () {
        if (localStorage.getItem('comeFrom') == 'register') {
            this.router.navigate(['/interest']);
            return;
        }
        this.currentUserID = localStorage.getItem('sin_auth_userId');
        this.is_login = localStorage.getItem('is_login');
        this.is_logged_in = localStorage.getItem('is_login');
        this.userImage = localStorage.getItem('sin_auth_user_image');
        this.getAllUsers();
        this.getBlogs();
    };
    BlogPage.prototype.ionViewDidLoad = function () {
        if (localStorage.getItem('comeFrom') == 'register') {
            this.router.navigate(['/interest']);
            return;
        }
        this.currentUserID = localStorage.getItem('sin_auth_userId');
        this.is_login = localStorage.getItem('is_login');
        this.getAllUsers();
        this.getBlogs();
    };
    BlogPage.prototype.getAllUsers = function () {
        var _this = this;
        var emailMatch = localStorage.getItem('sin_auth_user_email');
        if (emailMatch == null) {
            emailMatch = "xx@demo.com";
        }
        this.userService.postData({ email: emailMatch }, 'getAllUsers').subscribe(function (result) {
            _this.stopLoading();
            _this.users = result.data;
            _this.is_login = localStorage.getItem('is_login');
            _this.cd.detectChanges();
        }, function (err) {
            _this.stopLoading();
            _this.users = [];
        });
    };
    BlogPage.prototype.follow_user = function (user) {
        var _this = this;
        this.presentLoading();
        var userId = user.id;
        var dict = {
            'follow_by': localStorage.getItem('sin_auth_userId'),
            'follow_to': userId,
            'follow_to_type': 'user'
        };
        this.userService.postData(dict, 'followUser').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.presentToast('Followed successfully', 'success');
                _this.getAllUsers();
                _this.cd.detectChanges();
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    BlogPage.prototype.unfollow_user = function (user) {
        var _this = this;
        this.presentLoading();
        var userId = user.id;
        var dict = {
            'follow_by': localStorage.getItem('sin_auth_userId'),
            'follow_to': userId,
            'follow_to_type': 'user'
        };
        this.userService.postData(dict, 'unfollowUser').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.presentToast('unfollow successfully', 'success');
                _this.getAllUsers();
                _this.cd.detectChanges();
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    BlogPage.prototype.getBlogs = function () {
        var _this = this;
        // alert(this.is_login);
        if (this.is_login == 'false' || this.is_login == null) {
            var dict = {
                // 'user_id': localStorage.getItem('sin_auth_userId')
                'user_id': null
            };
            // this.presentLoading();
            this.userService.postData(dict, 'getPosts').subscribe(function (result) {
                // this.stopLoading();
                if (result.status == 1) {
                    _this.all_blogs = result.data.reverse();
                    _this.cd.detectChanges();
                }
                else {
                    _this.all_blogs = [];
                    _this.presentToast('Error,Please try after some time.', 'danger');
                }
            }, function (err) {
                _this.presentToast('Error,Please try after some time.', 'danger');
            });
        }
        else //-- IF LOGGED IN TRUE---------------------
         {
            var dict = {
                'user_id': localStorage.getItem('sin_auth_userId')
            };
            this.userService.postData(dict, 'getPostsFollow').subscribe(function (result) {
                if (result.status == 1) {
                    _this.all_blogs = result.data;
                    _this.all_blogs = _this.all_blogs.sort(function (a, b) { return b.post_id - a.post_id; });
                    // alert("SORT");
                    console.log(_this.all_blogs);
                    _this.cd.detectChanges();
                }
                else {
                    _this.all_blogs = [];
                    _this.presentToast('Error,Please try after some time.', 'danger');
                }
            }, function (err) {
                _this.presentToast('Error,Please try after some time.', 'danger');
            });
        }
    };
    BlogPage.prototype.deletePost = function (post_id) {
        var _this = this;
        if (confirm('Are you sure you want to delete this post ?')) {
            var dict = {
                'post_id': post_id
            };
            this.presentLoading();
            this.userService.postData(dict, 'deletePost').subscribe(function (result) {
                _this.stopLoading();
                if (result.status == 1) {
                    _this.presentToast('Post deleted successfully', 'success');
                    _this.getBlogs();
                    _this.cd.detectChanges();
                }
                else {
                    _this.all_blogs = [];
                    _this.presentToast('Error,Please try after some time.', 'danger');
                }
            }, function (err) {
                _this.presentToast('Error,Please try after some time.', 'danger');
            });
        }
    };
    BlogPage.prototype.editPost = function (post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.contentPage.scrollToTop(400);
                // this.content.scrollToTop();
                if (post.post_type == 'simple') {
                    this.tabs = "posts";
                    this.content = post.content;
                    this.simpleAction = "update";
                    this.simplePostId = post.post_id;
                    this.cd.detectChanges();
                }
                return [2 /*return*/];
            });
        });
    };
    BlogPage.prototype.arrayOne = function (n) {
        return Array(n);
    };
    BlogPage.prototype.atob = function (string) {
        return atob(string);
    };
    BlogPage.prototype.uploadImg = function (event) {
        var _this = this;
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            var image_file = event.target.files[0];
            if (self.allowedMimes.indexOf(image_file.type) == -1) {
                this.presentToast('Please select image with extension (png,jpg,jpeg,gif,webp) or mp4 video.', 'danger');
            }
            else {
                var formData = new FormData();
                formData.append('file', image_file);
                formData.append('userId', self.userId);
                this.presentLoading();
                this.userService.postData(formData, 'updateProfilePic').subscribe(function (result) {
                    if (result.status == 1) {
                        _this.uploadedFile = result.data;
                        _this.stopLoading();
                        _this.cd.detectChanges();
                    }
                    else {
                        _this.stopLoading();
                        _this.presentToast('Error while updating image,Please try later.', 'danger');
                    }
                }, function (err) {
                    _this.stopLoading();
                    _this.presentToast('Error while updating image,Please try later.', 'danger');
                });
            }
        }
    };
    BlogPage.prototype.uploadProImg = function (event) {
        var _this = this;
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            var image_file = event.target.files[0];
            if (self.allowedProMimes.indexOf(image_file.type) == -1) {
                this.presentToast('Please select image with extension (png,jpg,jpeg,gif,webp)', 'danger');
            }
            else {
                var formData = new FormData();
                formData.append('file', image_file);
                formData.append('userId', self.userId);
                this.presentLoading();
                this.userService.postData(formData, 'updateProfilePic').subscribe(function (result) {
                    if (result.status == 1) {
                        _this.uploadedFilePro = result.data;
                        _this.stopLoading();
                        _this.cd.detectChanges();
                    }
                    else {
                        _this.stopLoading();
                        _this.presentToast('Error while updating image,Please try later.', 'danger');
                    }
                }, function (err) {
                    _this.stopLoading();
                    _this.presentToast('Error while updating image,Please try later.', 'danger');
                });
            }
        }
    };
    BlogPage.prototype.uploadSuggesImg = function (event) {
        var _this = this;
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            var image_file = event.target.files[0];
            if (self.allowedProMimes.indexOf(image_file.type) == -1) {
                this.presentToast('Please select image with extension (png,jpg,jpeg,gif,webp)', 'danger');
            }
            else {
                var formData = new FormData();
                formData.append('file', image_file);
                formData.append('userId', self.userId);
                this.presentLoading();
                this.userService.postData(formData, 'updateProfilePic').subscribe(function (result) {
                    if (result.status == 1) {
                        _this.uploadedFileSuggestion = result.data;
                        _this.stopLoading();
                        _this.cd.detectChanges();
                    }
                    else {
                        _this.stopLoading();
                        _this.presentToast('Error while updating image,Please try later.', 'danger');
                    }
                }, function (err) {
                    _this.stopLoading();
                    _this.presentToast('Error while updating image,Please try later.', 'danger');
                });
            }
        }
    };
    BlogPage.prototype.addPost = function (content, file) {
        var _this = this;
        if (this.errors.indexOf(this.content) >= 0) {
            this.presentToast('Please enter the content.', 'danger');
            return false;
        }
        if (this.uploadedFile == '') {
            this.presentToast('Please upload Image/Video.', 'danger');
            return false;
        }
        var dict = {
            'user_id': localStorage.getItem('sin_auth_userId'),
            'content': content,
            'file': this.uploadedFile,
            'post_type': 'simple',
            'product_name': '',
            'price': '',
            'button1': '',
            'button2': '',
        };
        this.presentLoading();
        this.userService.postData(dict, 'addPost').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.uploadedFile = "";
                _this.content = "";
                _this.presentToast('Post added successfully', 'success');
                _this.getBlogs();
                _this.cd.detectChanges();
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    BlogPage.prototype.updatePost = function (content, postId) {
        var _this = this;
        if (this.errors.indexOf(this.content) >= 0) {
            this.presentToast('Please enter the content.', 'danger');
            return false;
        }
        var dict = {
            'post_id': postId,
            'content': content
        };
        this.presentLoading();
        this.userService.postData(dict, 'updatePost').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.uploadedFile = "";
                _this.content = "";
                _this.tabs = "posts";
                _this.content = "";
                _this.simpleAction = "add";
                _this.simplePostId = "";
                _this.presentToast('Post updated successfully', 'success');
                _this.getBlogs();
                _this.cd.detectChanges();
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    BlogPage.prototype.cancelSimple = function () {
        this.tabs = "posts";
        this.content = "";
        this.simpleAction = "add";
        this.simplePostId = "";
    };
    BlogPage.prototype.addProductPost = function (desc, product_name, price, filepro) {
        var _this = this;
        if (this.errors.indexOf(this.desc) >= 0) {
            this.presentToast('Please enter product description.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.product_name) >= 0) {
            this.presentToast('Please enter product name.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.price) >= 0) {
            this.presentToast('Please enter product price.', 'danger');
            return false;
        }
        if (this.price <= 0) {
            this.presentToast('Price should be more than 0.', 'danger');
            return false;
        }
        if (this.uploadedFilePro == '') {
            this.presentToast('Please upload product Image.', 'danger');
            return false;
        }
        var dict = {
            'user_id': localStorage.getItem('sin_auth_userId'),
            'content': desc,
            'file': this.uploadedFilePro,
            'post_type': 'product',
            'product_name': product_name,
            'price': price,
            'button1': '',
            'button2': ''
        };
        this.presentLoading();
        this.userService.postData(dict, 'addPost').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.uploadedFilePro = "";
                _this.desc = "";
                _this.price = "";
                _this.product_name = "";
                _this.presentToast('Post added successfully', 'success');
                _this.getBlogs();
                _this.cd.detectChanges();
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    BlogPage.prototype.addSuggestionPost = function (suggestion, fileSuggestion) {
        var _this = this;
        if (this.errors.indexOf(this.suggestion) >= 0 && this.uploadedFileSuggestion == '') {
            this.presentToast('Please add any suggestion or upload any image.', 'danger');
            return false;
        }
        var dict = {
            'user_id': localStorage.getItem('sin_auth_userId'),
            'content': suggestion,
            'file': this.uploadedFileSuggestion,
            'post_type': 'suggestion',
            'product_name': "",
            'price': "",
            'button1': '',
            'button2': ''
        };
        this.presentLoading();
        this.userService.postData(dict, 'addPost').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.uploadedFileSuggestion = "";
                _this.suggestion = "";
                _this.presentToast('Post added successfully', 'success');
                _this.getBlogs();
                _this.cd.detectChanges();
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    BlogPage.prototype.addPollPost = function (contentPoll, button1, button2) {
        var _this = this;
        if (this.errors.indexOf(this.contentPoll) >= 0) {
            this.presentToast('Please enter your question.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.button1) >= 0) {
            this.presentToast('Please enter both the options.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.button2) >= 0) {
            this.presentToast('Please enter both the options.', 'danger');
            return false;
        }
        var dict = {
            'user_id': localStorage.getItem('sin_auth_userId'),
            'content': contentPoll,
            'file': "",
            'post_type': 'poll',
            'product_name': '',
            'price': '',
            'button1': button1,
            'button2': button2
        };
        // this.presentLoading()
        this.userService.postData(dict, 'addPost').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.uploadedFile = "";
                _this.contentPoll = "";
                _this.button1 = "";
                _this.button2 = "";
                _this.presentToast('Post added successfully', 'success');
                _this.getBlogs();
                _this.cd.detectChanges();
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    BlogPage.prototype.givePoll = function (postData, selection) {
        var _this = this;
        var dict = {
            'post_id': postData.post_id,
            'poll_by_user': localStorage.getItem('sin_auth_userId'),
            'poll_reply': selection
        };
        this.presentLoading();
        this.userService.postData(dict, 'addPostPoll').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.presentToast('Polling done', 'success');
                _this.getBlogs();
                _this.cd.detectChanges();
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
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
    BlogPage.prototype.showAllPros = function (postID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                localStorage.setItem('goForSuggestPost', postID);
                this.router.navigate(['/home']);
                return [2 /*return*/];
            });
        });
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
    ;
    BlogPage.prototype.userAlreadyExist = function (blog) {
        var userExists = false;
        for (var i = 0; i < blog.polling_data.length; i++) {
            if (localStorage.getItem('sin_auth_userId') == blog.polling_data[i].poll_by_user) {
                userExists = true;
            }
        }
        return userExists;
    };
    BlogPage.prototype.userAlreadyExistWithButton1 = function (blog) {
        var userExists = false;
        for (var i = 0; i < blog.polling_data.length; i++) {
            if (localStorage.getItem('sin_auth_userId') == blog.polling_data[i].poll_by_user && blog.button1 == blog.polling_data[i].poll_reply) {
                userExists = true;
            }
        }
        return userExists;
    };
    BlogPage.prototype.userAlreadyExistWithButton2 = function (blog) {
        var userExists = false;
        for (var i = 0; i < blog.polling_data.length; i++) {
            if (localStorage.getItem('sin_auth_userId') == blog.polling_data[i].poll_by_user && blog.button2 == blog.polling_data[i].poll_reply) {
                userExists = true;
            }
        }
        return userExists;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], BlogPage.prototype, "contentPage", void 0);
    BlogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.page.html */ "./src/app/blog/blog.page.html"),
            styles: [__webpack_require__(/*! ./blog.page.scss */ "./src/app/blog/blog.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_user_globalFooService_service__WEBPACK_IMPORTED_MODULE_5__["GlobalFooService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], BlogPage);
    return BlogPage;
}());



/***/ })

}]);
//# sourceMappingURL=blog-blog-module.js.map