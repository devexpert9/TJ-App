(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["your-account-your-account-module"],{

/***/ "./src/app/your-account/your-account.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/your-account/your-account.module.ts ***!
  \*****************************************************/
/*! exports provided: YourAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourAccountPageModule", function() { return YourAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _your_account_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./your-account.page */ "./src/app/your-account/your-account.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm2015/ckeditor4-angular.js");










var routes = [
    {
        path: '',
        component: _your_account_page__WEBPACK_IMPORTED_MODULE_7__["YourAccountPage"]
    }
];
var YourAccountPageModule = /** @class */ (function () {
    function YourAccountPageModule() {
    }
    YourAccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [_your_account_page__WEBPACK_IMPORTED_MODULE_7__["YourAccountPage"]]
        })
    ], YourAccountPageModule);
    return YourAccountPageModule;
}());



/***/ }),

/***/ "./src/app/your-account/your-account.page.html":
/*!*****************************************************!*\
  !*** ./src/app/your-account/your-account.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-content  #content> -->\n<ion-content >\n<app-header></app-header>\n\n<div class=\"ion-padding\">\n<div header_height></div>\n<div class=\"container\">\n\n<div breadcrumb  class=\"ion-hide-md-down\">\t\t  \n<div breadcrumb-inner>\n<ul list-inline list-unstyled style='margin:0 0 15px 0'>\n<li style=\"float:left;margin:0 10px 0 0\"><a routerLink=\"/blog\">Home</a></li>\n<li class=\"active\">  Your Account</li>\n</ul>\n</div>\n</div> \n<!-- Breadcrumb Ends -->\n\n<ion-row  your-account>\n<!--  Title Start -->\n<!--ion-col size-lg=\"12\" size-md=\"12\" size-sm=\"12\" size=\"12\" account-title  class=\"ion-hide-md-down\" no-padding>\n<h5 head-account>YOUR ACCOUNT</h5>\n</ion-col-->\n<!--  Title End--> \n<!--   ACCOUNT Start -->\n<ion-col size-lg=\"12\" size-md=\"12\" size-sm=\"12\" size=\"12\" no-padding>\t\t \n<div product-tabs> \n<ion-segment  [(ngModel)]=\"tabs\" >\n\n<ion-segment-button value=\"posts\">\n<ion-label class=\"ion-hide-md-down\">My Posts</ion-label>\n<ion-icon name=\"person\" class=\"ion-hide-lg-up\"></ion-icon>\n</ion-segment-button>\t\n\n<ion-segment-button value=\"profile\" class=\"ion-hide-md-down\">\n<ion-label class=\"ion-hide-md-down\">Profile</ion-label>\n<ion-icon name=\"person\"  class=\"ion-hide-lg-up\"></ion-icon>\n</ion-segment-button>\n\n<ion-segment-button value=\"Orders\" class=\"ion-hide-md-down\">\n<ion-label  class=\"ion-hide-md-down\">Your Orders</ion-label>\n<ion-icon name=\"cart\" class=\"ion-hide-lg-up\"></ion-icon>\n</ion-segment-button>\n\n<!-- <ion-segment-button value=\"Registry\" class=\"ion-hide-md-down\">\n<ion-label  class=\"ion-hide-md-down\">Registries</ion-label>\n<ion-icon name=\"cart\" class=\"ion-hide-lg-up\"></ion-icon>\n</ion-segment-button> -->\n\n<ion-segment-button value=\"payment\">\n<ion-label  class=\"ion-hide-md-down\">Payment Options</ion-label>\n<ion-icon name=\"cash\" class=\"ion-hide-lg-up\"></ion-icon>\n</ion-segment-button>\n<ion-segment-button value=\"addresses\">\n<ion-label  class=\"ion-hide-md-down\">Your Addresses</ion-label>\n<ion-icon name=\"pin\" class=\"ion-hide-lg-up\"></ion-icon>\n</ion-segment-button>\t\t\t\t\t\t\t\t\t\t   \n<ion-segment-button value=\"login\">\n<ion-label  class=\"ion-hide-md-down\">Login Details</ion-label>\n<ion-icon name=\"information-circle-outline\" class=\"ion-hide-lg-up\"></ion-icon>\n</ion-segment-button>\n\n<!-- <ion-segment-button value=\"messages\" class=\"ion-hide-md-down\">\n<ion-label  class=\"ion-hide-md-down\">Messages</ion-label>\n<ion-icon name=\"chatbubbles\" class=\"ion-hide-lg-up\"></ion-icon>\n</ion-segment-button> -->\n\n<!-- <a link-notification float-right class=\"ion-hide-md-down\">\nNotifications\n</a> -->\t\t\t\t\t\t\t\t\t\t\t   \n</ion-segment>\n<div  tab-content [ngSwitch]=\"tabs\">\n<ion-list *ngSwitchCase=\"'posts'\">\n\t<div product-tab class=\"table-responsive\">\n\t\t<div>\n\t\t\t<!-- ADD TABS HERE ----------------------------------->\n\t\t\t\t<ion-segment tabsInside  [(ngModel)]=\"tabsInside\" *ngIf=\"is_logged_in == 'true'\">\n\t\t\t\t\t<ion-segment-button value=\"simpleposts\">\n\t\t\t\t\t\t<ion-label class=\"ion-hide-md-down\">Simple Post</ion-label>\n\t\t\t\t\t\t<ion-icon name=\"person\" class=\"ion-hide-lg-up\"></ion-icon>\n\t\t\t\t\t</ion-segment-button>\t\n\n\t\t\t\t\t<ion-segment-button value=\"poll\" class=\"ion-hide-md-down\">\n\t\t\t\t\t\t<ion-label class=\"ion-hide-md-down\">Poll Post</ion-label>\n\t\t\t\t\t\t<ion-icon name=\"person\"  class=\"ion-hide-lg-up\"></ion-icon>\n\t\t\t\t\t</ion-segment-button>\n\n\t\t\t\t\t<ion-segment-button value=\"products\" class=\"ion-hide-md-down\">\n\t\t\t\t\t\t<ion-label class=\"ion-hide-md-down\">Products Post</ion-label>\n\t\t\t\t\t\t<ion-icon name=\"person\"  class=\"ion-hide-lg-up\"></ion-icon>\n\t\t\t\t\t</ion-segment-button>\n\n\t\t\t\t\t<ion-segment-button value=\"suggestion\" class=\"ion-hide-md-down\">\n\t\t\t\t\t\t<ion-label class=\"ion-hide-md-down\">Suggestion Post</ion-label>\n\t\t\t\t\t\t<ion-icon name=\"person\"  class=\"ion-hide-lg-up\"></ion-icon>\n\t\t\t\t\t</ion-segment-button>\n\t\t\t\t</ion-segment>\n\t\t\t\t<div  tab-content [ngSwitch]=\"tabsInside\">\n\t\t\t\t\t<ion-list *ngSwitchCase=\"'simpleposts'\">\n\t\t\t\t\t\t<div product-tab class=\"table-responsive\" style=\"overflow:hidden;height:100%;padding:0 0 20px 0\">\n\t\t\t\t\t\t \t<div class=\"newsfeedinner mb-0\" *ngIf=\"is_logged_in == 'true'\" style=\"margin-bottom:35px; display:inline-block;width:100%;\">\n\t\t\t\t\t\t\t\t<div class=\"newsfeed-header\" form-group>\n\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t<div class=\"message-item-img\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{userImage}}\" alt=\"\" style=\"height:70px;width:70px\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"newsfeed_post-popup\" >\n\t\t\t\t\t\t\t\t\t\t\t<ion-textarea class=\"form-control\" placeholder=\"Share some what you are thinking?\" [(ngModel)]=\"content\"></ion-textarea>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <ckeditor placeholder=\"Share some what you are thinking?\" [(ngModel)]=\"content\"></ckeditor> -->\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"newsfeed-post-bottom\">\n\t\t\t\t\t\t\t\t\t<div class=\"newsfeed-attachments\">\n\t\t\t\t\t\t\t\t\t\t<ul *ngIf=\"simpleAction == 'add'\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"tooltip-item\" data-tooltip=\"Add Photos/Videos\" data-placement=\"right\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-image\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"fileContainer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" (change)=\"uploadImg1($event)\" [(ngModel)]=\"file\">\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t\t\t<li *ngIf='uploadedFile != \"\"'>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{uploadedFile}}\" alt=\"\" style=\"height:70px;width:70px\" *ngIf=\"uploadedFile.indexOf('.mp4') == -1\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<video width=\"100\" height=\"100\" controls *ngIf=\"uploadedFile.indexOf('.mp4') !== -1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<source src=\"{{pic_url}}{{uploadedFile}}\" type=\"video/mp4\">\n\t\t\t\t\t\t\t\t\t\t\t\t</video>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<button class=\"post-btn\" (click)=\"addPost(content,file)\" data-ripple=\"\" *ngIf=\"simpleAction == 'add'\">\n\t\t\t\t\t\t\t\t\t\t\tPost Status\n\t\t\t\t\t\t\t\t\t\t</button>\n\n\t\t\t\t\t\t\t\t\t\t<button class=\"post-btn\" (click)=\"updatePost(content,simplePostId)\" data-ripple=\"\" *ngIf=\"simpleAction == 'update'\">\n\t\t\t\t\t\t\t\t\t\t\tUpdate Post\n\t\t\t\t\t\t\t\t\t\t</button>\n\n\t\t\t\t\t\t\t\t\t\t<button class=\"post-btn\" (click)=\"cancelSimple()\" data-ripple=\"\" *ngIf=\"simpleAction == 'update'\" style=\"background:orange; border-color:orange;\">\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-list>\n\t\t\t\t\t\n\t\t\t\t\t<!-- *********************************** -->\n\t\t\t\t\t<ion-list *ngSwitchCase=\"'poll'\" style='height:210px'>\n\t\t\t\t\t\t<div product-tab class=\"table-responsive\" style=\"overflow:hidden;height:100%\">\n\t\t\t\t\t\t\t<div class=\"newsfeedinner mb-0\" *ngIf=\"is_logged_in == 'true'\" style=\"margin-bottom:35px; display:inline-block;width:100%;\">\n\t\t\t\t\t\t\t\t<div class=\"newsfeed-header\" form-group>\n\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t<div class=\"message-item-img\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{userImage}}\" alt=\"\" style=\"height:70px;width:70px\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"newsfeed_post-popup\" (click)=\"presentModal()\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-textarea class=\"form-control\" placeholder=\"Enter your question\" [(ngModel)]=\"contentPoll\"></ion-textarea>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"newsfeed-post-bottom\" style=\"margin:9px 0 0 90px\">\n\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  [(ngModel)]=\"button1\" placeholder=\"YES\" style=\"float:left; width:15%\">\n\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  [(ngModel)]=\"button2\" placeholder=\"NO\" style=\"margin:0 0 0 6px; float:left; width:15%\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"newsfeed-post-bottom\" style=\"float:left;width:100%\">\n\t\t\t\t\t\t\t\t\t<div class=\"newsfeed-attachments\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"post-btn\" (click)=\"addPollPost(contentPoll,button1,button2)\" data-ripple=\"\">\n\t\t\t\t\t\t\t\t\t\t\tPost Status\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-list>\n\n\t\t\t\t\t<!-- *********************************** -->\n\t\t\t\t\t<ion-list *ngSwitchCase=\"'products'\">\n\t\t\t\t\t\t<div product-tab class=\"table-responsive\" style=\"overflow:hidden;height:100%; padding:0 0 20px 0\">\n\t\t\t\t\t\t \t<div class=\"newsfeedinner mb-0\" *ngIf=\"is_logged_in == 'true'\" style=\"margin-bottom:35px; display:inline-block;width:100%;\">\n\t\t\t\t\t\t\t\t<div class=\"newsfeed-header\" form-group>\n\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t<div class=\"message-item-img\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{userImage}}\" alt=\"\" style=\"height:70px;width:70px\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"newsfeed_post-popup\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-textarea class=\"form-control\" placeholder=\"Product Description\" [(ngModel)]=\"desc\"></ion-textarea>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- <ckeditor placeholder=\"Enter product description\" [(ngModel)]=\"desc\"></ckeditor> -->\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"newsfeed-post-bottom\">\n\t\t\t\t\t\t\t\t\t<div class=\"newsfeed-attachments\">\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"fileContainer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"product_name\" placeholder=\"Product Name\" style=\"color:#333;\">\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"fileContainer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input min=\"0\" max=\"100000\" type=\"number\" [(ngModel)]=\"price\" placeholder=\"Price\" style=\"color:#333;\">\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"tooltip-item\" data-tooltip=\"Add Product Photo\" positionV=\"top\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-image\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"fileContainer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" (change)=\"uploadProImg($event)\" [(ngModel)]=\"filepro\">\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{uploadedFilePro}}\" alt=\"\" style=\"height:70px;width:70px\" *ngIf='uploadedFilePro != \"\"'>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<button class=\"post-btn\" (click)=\"addProductPost(desc,product_name,price,filepro)\" data-ripple=\"\">\n\t\t\t\t\t\t\t\t\t\t\tPost Status\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-list>\n\n\t\t\t\t\t<!--***********************************-->\n\t\t\t\t\t<ion-list *ngSwitchCase=\"'suggestion'\">\n\t\t\t\t\t\t<div product-tab class=\"table-responsive\" style=\"overflow:hidden;height:100%; padding:0 0 20px 0\">\n\t\t\t\t\t\t \t<div class=\"newsfeedinner mb-0\" *ngIf=\"is_logged_in == 'true'\" style=\"margin-bottom:35px; display:inline-block;width:100%;\">\n\t\t\t\t\t\t\t\t<div class=\"newsfeed-header\" form-group>\n\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t<div class=\"message-item-img\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{userImage}}\" alt=\"\" style=\"height:70px;width:70px\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"newsfeed_post-popup\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-textarea class=\"form-control\" placeholder=\"Ask for any suggestion\" [(ngModel)]=\"suggestion\"></ion-textarea>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"newsfeed-post-bottom\">\n\t\t\t\t\t\t\t\t\t<div class=\"newsfeed-attachments\">\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"tooltip-item\" data-tooltip=\"Add Photo\" positionV=\"top\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-image\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"fileContainer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" (change)=\"uploadSuggesImg($event)\" [(ngModel)]=\"fileSuggestion\">\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{uploadedFileSuggestion}}\" alt=\"\" style=\"height:70px;width:70px\" *ngIf='uploadedFileSuggestion != \"\"'>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<button class=\"post-btn\" (click)=\"addSuggestionPost(suggestion,fileSuggestion)\" data-ripple=\"\">\n\t\t\t\t\t\t\t\t\t\t\tPost Status\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div> \n\t\t\t<!---------------------------------------------------->\n\t\t\t<div class=\"post-feed-main\" *ngIf=\"all_blogs?.length > 0\">\n\t\t\t\t<article class=\"post-feed-item\" *ngFor=\"let blog of all_blogs\" style=\"display:inline-block; padding:0 0 10px 0; width: 100%\">\n\t\t\t\t\t<div class=\"activity-header\" style=\"padding-bottom:0px;display: inline-block;width: 100%;\">\n\t\t\t\t\t\t<div class=\"activity-avatar\" style=\"float:left\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{blog.profile_picture}}\" alt=\"\" style=\"height:100%;width:100%\">\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"activity-head\" style=\"width: 88%;display: inline-block;\">\n\t\t\t\t\t\t\t<h4 style=\"float:left;\">\n\t\t\t\t\t\t\t\t<!-- <a routerLink=\"/blog-detail/{{blog.blog_id}}\"> -->\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t\t{{blog.name}}\n\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t<span class=\"time-since\" style=\"text-transform:capitalize;color: #0488d2;font-weight: bold;\">\n\t\t\t\t\t\t\t\t\t\t{{blog.post_date | date}}\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</h4>\n\n\t\t\t\t\t\t\t<div *ngIf=\"is_logged_in == 'true'\">\n\t\t\t\t\t\t\t\t<p style=\" float: right;border: 1px solid red;padding: 1px 10px; cursor:pointer;margin:0 0 0 15px;\">\n\t\t\t\t\t\t\t\t\t<a title=\"Delete\" (click)='deletePost(blog?.post_id)' style=\"font-weight: bolder;color: red;\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t<p style=\" float: right;border: 1px solid #0488d2;padding: 1px 10px; cursor:pointer;margin:0 0 0 15px;\" *ngIf='blog.post_type == \"simple\"'>\n\t\t\t\t\t\t\t\t\t<a title=\"Edit\" (click)='editPost(blog)' style=\"font-weight: bolder;color: #0488d2;\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t<p style=\" float: right;border: 1px solid #1088d2; color:#1088d2; padding: 1px 10px; cursor:pointer;\" *ngIf='blog.post_type == \"poll\"'>\n\t\t\t\t\t\t\t\t\t<span style=\"font-weight: bolder;\">\n\t\t\t\t\t\t\t\t\t\t{{blog?.poolingCount}}% Polling\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <p *ngIf='blog.post_type == \"poll\"' style=\"float: right;border: 1px solid #1088d2;color:#1088d2;padding: 0;cursor:pointer;width: 200px;height: 14px;\">\n\t\t\t\t\t\t\t\t<span style=\"font-size: 2px;padding: 0;width:{{blog?.poolingCount}};margin: 0;background: #2597d8;float: left;height: 13px;\">\n\t\t\t\t\t\t\t\t\t{{blog?.poolingCount}}\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</p> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- IN CASE OF SIMPLE POST -->\n\t\t\t\t\t<div class=\"activity-inner\" *ngIf='blog.post_type == \"simple\"' style=\"border-top:#f7ecec\">\n\t\t\t\t\t\t<div class=\"post-feed-img dft\" style=\"float:left;width:20%\" >\n\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{blog.file}}\" alt=\"\" style=\"width:100%\" *ngIf=\"blog.file.indexOf('.mp4') == -1\">\n\n\t\t\t\t\t\t\t<video style=\"width:100%\" controls *ngIf=\"blog.file.indexOf('.mp4') !== -1\">\n\t\t\t\t\t\t\t\t<source src=\"{{pic_url}}{{blog.file}}\" type=\"video/mp4\">\n\t\t\t\t\t\t\t</video>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"post-feed-img dft\" style=\"float:left;width:70%;padding:0 20px\">\n\t\t\t\t\t\t\t<p *ngIf=\"blog.content.length <= 500\" [innerHTML]=\"blog.content\"></p>\n\n\t\t\t\t\t\t\t<p *ngIf=\"blog.content.length > 500\" [innerHTML]=\"blog.content.substr(0,500)+'...'\"></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- IN CASE OF POLL POST -->\n\t\t\t\t\t<div class=\"activity-inner\" *ngIf='blog.post_type == \"poll\"' style=\"border-top:#f7ecec\">\n\t\t\t\t\t\t<div class=\"post-feed-img dft\" style=\"float:left;width:100%;text-align: center;padding:0 20px;\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<p *ngIf=\"blog.content.length <= 500\" [innerHTML]=\"blog.content\"></p>\n\n\t\t\t\t\t\t\t<p *ngIf=\"blog.content.length > 500\" [innerHTML]=\"blog.content.substr(0,500)+'...'\"></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- IN CASE OF PRODUCT POST -->\n\t\t\t\t\t<div class=\"activity-inner\" *ngIf='blog.post_type == \"product\"' style=\"border-top:#f7ecec\">\n\n\t\t\t\t\t\t<div class=\"post-feed-img dft\" style=\"float:left;width:20%\" >\n\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{blog.file}}\" alt=\"\" style=\"width:100%\">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"post-feed-img dft\" style=\"float:left;width:70%;padding:0 20px\">\n\t\t\t\t\t\t\t<p style=\"font-size: 23px;margin: 0 0 10px 0;padding: 0 0 10px 0;\">\n\t\t\t\t\t\t\t\t{{blog.product_name}}\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p style=\"color: #73bce5;font-weight: bold; font-size:20px\">\n\t\t\t\t\t\t\t\t${{blog.price}}\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p *ngIf=\"blog.content.length <= 500\" [innerHTML]=\"blog.content\"></p>\n\n\t\t\t\t\t\t\t<p *ngIf=\"blog.content.length > 500\" [innerHTML]=\"blog.content.substr(0,500)+'...'\"></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- IN CASE OF SUGGESTION POST -->\n\t\t\t\t\t<div class=\"activity-inner\" *ngIf='blog.post_type == \"suggestion\"' style=\"border-top:#f7ecec\">\n\n\t\t\t\t\t\t<div class=\"post-feed-img dft\" style=\"float:left;width:100%;padding:0 20px;text-align:center;\" *ngIf='blog.content != null'>\n\t\t\t\t\t\t\t<p [innerHTML]=\"blog.content\"></p>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"post-feed-img dft\" style=\"float:left;width:100%;text-align:center;\" *ngIf='blog.file != null'>\n\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{blog.file}}\" alt=\"\" style=\"width:20%\">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"post-details-activity-bottom pb-10\" style=\"float:left;width:100%;\">\n\t\t\t\t\t\t<ul class=\"like-com\" *ngIf='blog.post_type == \"simple\" || blog.post_type == \"product\"'>\n\t\t\t\t\t\t\t<li *ngIf=\"is_logged_in == 'true'\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"fa fa-thumbs-up\"></i> Like</a>\n\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"fa fa-share-square-o\"></i> Share</a>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t<li *ngIf=\"is_logged_in == 'false'\">\n\t\t\t\t\t\t\t\t<a routerLink='/login'>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-thumbs-up\"></i> \n\t\t\t\t\t\t\t\t\tLike\n\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t<a routerLink='/login'>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-share-square-o\"></i> \n\t\t\t\t\t\t\t\t\tShare\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t<div *ngIf=\"is_logged_in == 'true'\" style=\"margin:0 auto\">\n\t\t\t\t\t\t\t<ul class=\"like-com\" *ngIf='blog.post_type == \"poll\"' style=\"margin:0 auto\">\n\t\t\t\t\t\t\t\t<li style=\"background:#81a8bf\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;padding: 5px 17px;margin-right: 0;margin-left:0;border-right:1px solid\" (click)=\"givePoll(blog,blog?.button1)\" *ngIf=\"!userAlreadyExist(blog)\">\n\t\t\t\t\t\t\t\t\t\t{{blog?.button1}}\n\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;padding: 5px 17px;margin-right: 0;margin-left:0;\" (click)=\"givePoll(blog,blog?.button2)\" *ngIf=\"!userAlreadyExist(blog)\">\n\t\t\t\t\t\t\t\t\t\t{{blog?.button2}}\n\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"userAlreadyExistWithButton1(blog)\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;padding: 5px 17px;margin-right: 0;margin-left:0;border-right:1px solid\"  >\n\t\t\t\t\t\t\t\t\t\t{{blog?.button1}}\n\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;padding: 5px 17px;margin-right: 0;margin-left:0;border-right:1px solid;background: #c1c1c1\"  >\n\t\t\t\t\t\t\t\t\t\t{{blog?.button2}}\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"userAlreadyExistWithButton2(blog)\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;padding: 5px 17px;margin-right: 0;margin-left:0;border-right:1px solid;background: #c1c1c1\"  >\n\t\t\t\t\t\t\t\t\t\t{{blog?.button1}}\n\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;padding: 5px 17px;margin-right: 0;margin-left:0;border-right:1px solid\"  >\n\t\t\t\t\t\t\t\t\t\t{{blog?.button2}}\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t<ul class=\"like-com\" *ngIf='blog.post_type == \"suggestion\"' style=\"margin:0 auto\">\n\t\t\t\t\t\t\t\t<li style=\"background:#81a8bf\" *ngIf=\"is_logged_in == 'true'\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;padding: 5px 17px;margin-right: 0;margin-left:0;border-right:1px solid\" (click)=\"showAllPros(blog?.post_id)\">\n\t\t\t\t\t\t\t\t\t\tSuggest\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div *ngIf=\"is_logged_in == 'false'\" style=\"margin:0 auto\">\n\t\t\t\t\t\t\t<ul class=\"like-com\" *ngIf='blog.post_type == \"suggestion\"' style=\"margin:0 auto\">\n\t\t\t\t\t\t\t\t<li style=\"background:#81a8bf\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;padding: 5px 17px;margin-right: 0;margin-left:0;border-right:1px solid\" routerLink='/login'>\n\t\t\t\t\t\t\t\t\t\tSuggest\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t<ul class=\"like-com\" *ngIf='blog.post_type == \"poll\"' style=\"margin:0 auto\">\n\t\t\t\t\t\t\t\t<li style=\"background:#81a8bf\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;padding: 5px 17px;margin-right: 0;margin-left:0;border-right:1px solid\" routerLink='/login'>\n\t\t\t\t\t\t\t\t\t\t{{blog?.button1}}\n\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"font-size: 16px;align-items: center;color: #fff;padding: 5px 17px;margin-right: 0;margin-left:0;\" routerLink='/login'>\n\t\t\t\t\t\t\t\t\t\t{{blog?.button2}}\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<!-- <div class=\"mini-cart-option\">\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf='blog.post_type == \"suggestion\"'>\n\t\t\t\t\t\t<div commentsArea *ngIf=\"blog?.count_suggestion > 0\">\n\t\t\t\t\t\t\t<h5 (click)='makeToggle(blog.post_id)' style=\"cursor:pointer;\" >\n\t\t\t\t\t\t\t\t{{blog?.count_suggestion}} Suggestions\n\t\t\t\t\t\t\t</h5>\n\n\t\t\t\t\t\t\t<div scrollArea *ngIf='toggle == blog.post_id' style=\" border-top: 2px solid #fff; padding-top:4px;\">\n\n\t\t\t\t\t\t\t\t<div style=\"width: 100%;float: left;text-align: right;margin: 0 0 7px 0;cursor: pointer;\" (click)='HideToggle()'> [Hide Comments]</div>\n\n\t\t\t\t\t\t\t\t<div comntRow *ngFor=\"let suggests of blog?.all_suggestions\" style=\" background: #ffffff;padding: 10px; cursor:pointer\" (click)=\"productDetailPage(suggests?.product_id)\">\n\t\t\t\t\t\t\t\t\t<span style=\"width:75px;height:75px;\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{IMAGES_URL}}/product_images/{{suggests.product_image}}\">\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<div comntRit  style=\"display:inline-block;margin:0 0 0 15px\">\n\t\t\t\t\t\t\t\t\t\t<div comntbg>\n\t\t\t\t\t\t\t\t\t\t\t<h4>{{suggests?.product_name}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\tSuggested By: {{suggests?.name}} {{suggests?.last_name}}\n\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t{{suggests?.suggested_date | date}}\n\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- <div class=\"tag-box\"></div> -->\n\t\t\t\t\t<!-- <div class=\"comment-section\"> -->\n\t\t\t\t\t\t<!-- <ion-input type=\"text\" placeholder=\"Write Your Comment...\" class=\"commnetbar\"></ion-input>\n\t\t\t\t\t\t<button class=\"btn-style\"><i class=\"fa fa-reply\" aria-hidden=\"true\"></i></button>  -->\n\t\t\t\t\t<!-- </div> -->\n\t\t\t\t</article>\n\t\t\t</div>\n\n\t\t\t<div class=\"post-feed-main\" *ngIf=\"all_blogs?.length == 0\" style=\"margin-top:0\">\n\t\t\t\t<article class=\"post-feed-item\" style=\"border:0\">\n\t\t\t\t\tNo any post added yet\n\t\t\t\t</article>\t\t\t\t\t\t\t\t\t\t\n\t\t\t</div>\n\t\t</div> \n\t</div>\n</ion-list>\n\n<ion-list *ngSwitchCase=\"'profile'\">\n<div product-tab class=\"table-responsive\">\n<h5 head-account class=\"ion-hide-md-down\">YOUR PROFILE \n<span  (click)=\"editProfile()\" class=\"btn btn-success btn-sm add-payment-btn\" float-right>\nEdit \n</span>      \n</h5>\n<div class=\"media\">\n<ion-row>\n<ion-col size-lg=\"2\" size-sm=\"12\" size-md=\"12\" size=\"12\">\n<div float-left class=\"media-link\">\n<div class=\"media-object img-bg\">\n<img *ngIf=\"errors.indexOf(profile?.profile_picture) >= 0\" src=\"assets/images/default.png\">\n<img *ngIf=\"errors.indexOf(profile?.profile_picture) == -1\" src=\"{{IMAGES_URL}}/userprofile/{{profile?.profile_picture}}\">\n<div img-edit class=\"\">\n<label for=\"user-img\"><ion-icon name=\"camera\"></ion-icon></label>\n<!-- ng2FileSelect [uploader]=\"uploader\" -->\n<input (change)=\"uploadImg($event)\" id=\"user-img\" type=\"file\" style=\"display:none\"/>\n</div>\n</div>\t\n<p name-user text-center class=\"ion-hide-lg-up\">{{profile?.name}} {{profile?.last_name}}</p>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n</div>\n</ion-col>\n<ion-col size-lg=\"10\" size-sm=\"12\" size-md=\"12\" size=\"12\">\n<div class=\"media-body\">\n<ion-list class=\"ion-hide-lg-up\" no-margin>\n<ion-item lines=\"none\" class=\"ion-hide-md-down\">\n<ion-label><b>First Name</b> <span float-right>{{profile?.name}}</span></ion-label>\n</ion-item>\n<ion-item lines=\"none\"  class=\"ion-hide-md-down\">\n<ion-label><b>Last Name</b> <span float-right>{{profile?.last_name}} </span></ion-label>\n</ion-item>\n<ion-item lines=\"none\">\n<ion-label><b>Email</b> <span float-right>{{profile?.email}} </span></ion-label>\n</ion-item> \n<ion-item lines=\"none\">\n<ion-label><b>Contact No</b> <span float-right>{{profile?.phone}} </span></ion-label>\n</ion-item>\n<ion-item lines=\"none\">\n<ion-label><b>Address</b> <span float-right>{{profile?.address}}</span></ion-label>\n</ion-item>\n<ion-item lines=\"none\">\n<ion-label><b>City</b> <span float-right>{{profile?.city}}</span></ion-label>\n</ion-item>\n<ion-item lines=\"none\">\n<ion-label><b>State</b> <span float-right>{{profile?.state}}</span></ion-label>\n</ion-item>\n<ion-item lines=\"none\">\n<ion-label><b>Country</b> <span float-right>{{profile?.country_name}}</span></ion-label>\n</ion-item>\n<ion-item lines=\"none\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t     \n<ion-button size=\"small\" (click)=\"editProfile()\" color=\"darkred\"><ion-icon name=\"create\"></ion-icon>Edit</ion-button>\n</ion-item>\t \n</ion-list>\n<table class=\"table table-condensed ion-hide-md-down\">\n<tbody><tr>\n<td><b>First Name</b></td>\n<td align=\"left\">{{profile?.name}}</td>\n<td><b>Last Name</b></td>\n<td>{{profile?.last_name}}</td>\n</tr>\n<tr>\n<td><b>Email</b></td>\n<td>{{profile?.email}}</td>\n<td><b>Contact No</b></td>\n<td>+{{profile?.countryCode}}-{{profile?.phone}}</td>\n</tr>\n<tr>\n<td><b>Address</b></td>\n<td>{{profile?.address}}</td>\n<td><b>City</b></td>\n<td>{{profile?.city}}</td>\n</tr>\n<tr>\n<td><b>State</b></td>\n<td>{{profile?.state}}</td>\n<td><b>Country</b></td>\n\n<td>{{profile?.country_name}}</td>\n</tr>\n</tbody>\n</table>\n</div>\n</ion-col>\n\n<!-- <ion-col  size-md=\"6\" size=\"12\" class=\"ion-hide-md-down\">\n\t<h3 block-title><span>Purchase Summary</span></h3>\n\t<div class=\"widget widget-categories\">\n\t<ul profile_ul>\n\t<li><a>Total Purchase: <b *ngIf=\"purchase_All != null\">${{purchase_All.toFixed(2)}}</b></a></li>\n\t<li><a>Last 7 Days: <b *ngIf=\"purchase_days7 != null\">${{purchase_days7.toFixed(2)}}</b></a></li>\n\t<li><a>Last 30 Days: <b *ngIf=\"purchase_days30 != null\">${{purchase_days30.toFixed(2)}}</b></a></li>\n\t</ul>\n\t</div>\n</ion-col>\n<ion-col  size-md=\"6\" size=\"12\" class=\"ion-hide-md-down\">\n\t<h3 block-title><span>Others Info</span></h3>\n\t<div class=\"widget widget-categories\">\n\t<ul profile_ul>\n\t<li><a>Wished Products: <b>{{my_wish_products?.length}}</b></a></li>\n\t<li><a>User Since: <b>{{user_created_at | date : 'd MMM, y'}}</b></a></li>\n\t<li><a>Last Login: <b>{{user_last_login | date : 'd MMM, y'}}</b></a></li>\n\t</ul>\n\t</div>\n</ion-col> -->\n\n</ion-row>\t\t\n</div>                              \n</div>\n<!-- Edit Profile Start -->\n<div panel panel-default   *ngIf=\"buttonClicked\" >\n<div panel-heading  account-head>\n<h4>\n<a href=\"javascript:void(0)\">\n<span><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span>  Edit Profile Details\n</a>\n</h4>\t\t\t\t\t \n</div>\n<div panel-body>\n<!-- <form class=\"register-form\"> -->\n<ion-row>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">First Name *</ion-label>\n<ion-input [(ngModel)]=\"profile_name\" type=\"text\" placeholder=\"First Name\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Last Name *</ion-label>\n<ion-input type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"profile_last_name\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Email Address *</ion-label>\n<ion-input [(ngModel)]=\"profile_email\" type=\"email\" placeholder=\"Email Address\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Contact No *</ion-label>\n<ion-input [(ngModel)]=\"profile_phone\" type=\"number\" placeholder=\"Phone Number\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Address *</ion-label>\n<ion-input [(ngModel)]=\"profile_address\" type=\"text\" placeholder=\"Address\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">City *</ion-label>\n<ion-input [(ngModel)]=\"profile_city\" type=\"text\" placeholder=\"City\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">State *</ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"profile_state\" placeholder=\"State\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<ion-item  form-group no-padding lines=\"none\">\n<ion-label position=\"stacked\">Country *</ion-label>\n<ion-select placeholder=\"Select Country\" [(ngModel)]=\"profile_country\">\n\t<ion-select-option *ngFor=\"let country of countries\" value=\"{{country.id}}\">{{country.name}}</ion-select-option>\n</ion-select>\n</ion-item>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n</ion-col>\n\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t<ion-col size-md=\"3\" size-sm=\"12\" size=\"12\">\n\t\t<ion-item  form-group no-padding lines=\"none\">\n\t\t\t<ion-button color=\"darkred\" (click)=\"updateProfile()\" class='updateBtn'>\n\t\t\t\tUpdate\n\t\t\t</ion-button>\n\n\t\t\t<ion-button color=\"greyc\" (click)=\"cancelProfile()\" class='updateBtn'cancelProfile>\n\t\t\t\tCancel\n\t\t\t</ion-button>\n\t\t</ion-item>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t</ion-col>\n\t<ion-col size-md=\"3\" size-sm=\"12\" size=\"12\">\n\t\t<ion-item  form-group no-padding lines=\"none\">\n\t\t\t\n\t\t</ion-item>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t</ion-col>\n</ion-col>\n\n</ion-row>\n<!-- </form>\t\t   -->\n</div>\n</div>\n<!-- Edit Profile Ends -->\n</ion-list>\n<ion-list *ngSwitchCase=\"'Orders'\">\n<div product-tab class=\"table-responsive\" orders>\t\n\n<div mob-orders class=\"ion-hide-lg-up\">\t\t\t\t\t\t\t\t\t\t  \n\t<ion-item lines=\"none\" *ngFor=\"let order of orders; let om_index = index \">\n\t<ion-thumbnail slot=\"start\">\n\t\t<img src=\"assets/images/velvetlipstick.png\">\n\t</ion-thumbnail>\n\t<ion-label>\n\t\t<h3>{{order.product_name}}</h3>\n\t\t<ion-badge color=\"danger\">Due</ion-badge>\n\t\t<!-- <ion-badge color=\"success\">Paid</ion-badge> -->\n\t\t<p>\n\t\t\t<ion-icon name=\"alert\" color=\"darkred\"></ion-icon> Pending\n\t\t\t<!-- <ion-icon name=\"checkmark-circle\" color=\"success\"></ion-icon> Delivered -->\n\t\t</p>\n\t</ion-label>\n\t<div price-time>\n\t\t<h3 text-right>$33.15</h3>\n\t\t<ion-note  text-right>\n\t\t\t{{order.order_date | date : 'd MMM y'}}\n\t\t</ion-note>\n\t\t<a (click)=\"invoice(order)\" text-right>Invoice</a>\n\t</div>\t\t\t\t\t\t\t\t\t\t\t  \n\t</ion-item>\n\t<ion-item lines=\"none\" *ngIf=\"orders == ''\">\n\tNo orders yet.\n\t</ion-item>\n</div>\t\n\n<h5 head-account class=\"ion-hide-md-down\">ORDERS</h5>\n<table class=\"ion-hide-md-down table table-bordered\">\n\t<thead>\n\t\t<tr *ngIf=\"orders != ''\">\n\t\t\t<th>Order Id</th>\n\t\t\t<th>Products</th>\n\t\t\t<th>Order Placed</th>\n\t\t\t<th>Amount</th>\n\t\t\t<th>Payment Status</th>\n\t\t\t<th>Delivery Status</th>\n\t\t\t<th>Invoice</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let order of orders; let o_index = index \">\n\t\t\t<td>{{order.rand_order_id}}</td>\n\t\t\t<td payment_type>\n\t\t\t\t<div *ngFor=\"let product of order.order_products \">\n\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{product.product_image}}\" alt=\"{{product.product_name}}\">\t\n\t\t\t\t\t{{product.product_name}} ({{product.product_quantity}})\n\t\t\t\t</div>\n\t\t\t</td>\n\t\t\t<td>{{order.order_date | date : 'd MMM y'}}</td>\n\t\t\t<td>${{convertIntoNumber(order.total_amount)}}</td>\n\t\t\t<td order-id>\n\t\t\t<span *ngIf=\"order.payment_method == 'cash'\" class=\"label label-danger\">Cash on delivery</span>\n\t\t\t<span *ngIf=\"order.payment_method != 'cash'\" class=\"label label-success\">Paid</span>\n\t\t\t</td>\n\t\t\t<td order-id>\n\t\t\t<span *ngIf=\"order.order_status == 0\" class=\"label label-danger\">Pending</span>\n\t\t\t<span *ngIf=\"order.order_status == 2\" class=\"label label-warning\">Cancelled</span>\n\t\t\t<span *ngIf=\"order.order_status == 1\" class=\"label label-success\">Delivered</span>\n\t\t\t</td>\n\t\t\t<td add>\n\t\t\t<a (click)=\"invoice(order)\" class=\"btn btn-theme btn-theme-xs\">Invoice</a>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr *ngIf=\"orders == ''\">\n\t\t<td colspan=\"8\">No orders yet.</td>\n\t\t</tr>\n\t</tbody>\n</table>\n</div>\n\n\n</ion-list>\t\n\n\n<ion-list *ngSwitchCase=\"'Registry'\">\n<div product-tab class=\"table-responsive\" orders>\t\n\n<div mob-orders class=\"ion-hide-lg-up\">\t\t\t\t\t\t\t\t\t\t  \n\t<ion-item lines=\"none\" *ngFor=\"let order of registries; let om_index = index \">\n\t<ion-thumbnail slot=\"start\">\n\t\t<img src=\"assets/images/velvetlipstick.png\">\n\t</ion-thumbnail>\n\t<ion-label>\n\t\t<h3>{{order.product_name}}</h3>\n\t\t<ion-badge color=\"danger\">Due</ion-badge>\n\t\t<!-- <ion-badge color=\"success\">Paid</ion-badge> -->\n\t\t<p>\n\t\t\t<ion-icon name=\"alert\" color=\"darkred\"></ion-icon> Pending\n\t\t\t<!-- <ion-icon name=\"checkmark-circle\" color=\"success\"></ion-icon> Delivered -->\n\t\t</p>\n\t</ion-label>\n\t<div price-time>\n\t\t<h3 text-right>$33.15</h3>\n\t\t<ion-note  text-right>\n\t\t\t{{order.order_date | date : 'd MMM y'}}\n\t\t</ion-note>\n\t\t<a (click)=\"invoice(order)\" text-right>Invoice</a>\n\t</div>\t\t\t\t\t\t\t\t\t\t\t  \n\t</ion-item>\n\t<ion-item lines=\"none\" *ngIf=\"registries == ''\">\n\tNo registry yet.\n\t</ion-item>\n</div>\t\n\n<h5 head-account class=\"ion-hide-md-down\">Registries</h5>\n<table class=\"ion-hide-md-down table table-bordered\">\n\t<thead>\n\t\t<tr *ngIf=\"orders != ''\">\n\t\t\t<th>Order Id</th>\n\t\t\t<th>Products</th>\n\t\t\t<th>Order Placed</th>\n\t\t\t<th>Order Placed By</th>\n\t\t\t<th>Amount</th>\n\t\t\t<th>Payment Status</th>\n\t\t\t<th>Delivery Status</th>\n\t\t\t<th>Invoice</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let order of registries; let o_index = index \">\n\t\t\t<td>{{order.rand_order_id}}</td>\n\t\t\t<td payment_type>\n\t\t\t\t<div *ngFor=\"let product of order.order_products \">\n\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{product.product_image}}\" alt=\"{{product.product_name}}\">\t\n\t\t\t\t\t{{product.product_name}} ({{product.product_quantity}})\n\t\t\t\t</div>\n\t\t\t</td>\n\t\t\t<td>{{order.order_date | date : 'd MMM y'}}</td>\n\t\t\t<td>{{order.user_name}}</td>\n\t\t\t<td>${{convertIntoNumber(order.total_amount)}}</td>\n\t\t\t<td order-id>\n\t\t\t<span *ngIf=\"order.payment_method == 'cash'\" class=\"label label-danger\">Cash on delivery</span>\n\t\t\t<span *ngIf=\"order.payment_method != 'cash'\" class=\"label label-success\">Paid</span>\n\t\t\t</td>\n\t\t\t<td order-id>\n\t\t\t<span *ngIf=\"order.order_status == 0\" class=\"label label-danger\">Pending</span>\n\t\t\t<span *ngIf=\"order.order_status == 2\" class=\"label label-warning\">Cancelled</span>\n\t\t\t<span *ngIf=\"order.order_status == 1\" class=\"label label-success\">Delivered</span>\n\t\t\t</td>\n\t\t\t<td add>\n\t\t\t<a (click)=\"invoice(order)\" class=\"btn btn-theme btn-theme-xs\">Invoice</a>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr *ngIf=\"registries == ''\">\n\t\t<td colspan=\"8\">No orders yet.</td>\n\t\t</tr>\n\t</tbody>\n</table>\n</div>\n\n\n</ion-list>\t\n\n\n<ion-list *ngSwitchCase=\"'payment'\">\n<div product-tab class=\"table-responsive\"  orders>\t\t\t\t\t\t\t\t\t\n<div mob-orders class=\"ion-hide-lg-up\">\t\n\n<ion-item-sliding *ngFor=\"let card of cards; let cm_index = index \">\n<ion-item-options side=\"start\">\n<ion-item-option  (click)=\"Addpay('edit',cm_index,card)\" color=\"success\">Edit</ion-item-option>\t\t\t\t\t \n</ion-item-options>\t\n<ion-item-options side=\"end\">\t\t\t\t\t\t\t\t\n<ion-item-option (click)=\"deleteCard(card.card_id,cm_index)\" color=\"danger\">Delete</ion-item-option>\n</ion-item-options>\t\t\t\t\t\t\t\t\n<ion-item lines=\"none\">\n<ion-label>\n<h3>{{card.card_type}}</h3>\n<p>xxxx xxxx xxxx {{card.card_number.slice(-4)}}</p>\n<ion-badge color=\"success\" *ngIf=\"card.card_status == 1\">Active</ion-badge>\n<ion-badge color=\"danger\" *ngIf=\"card.card_status == 0\">In-active</ion-badge>\n</ion-label>\t\n<ion-icon arrow-small name=\"arrow-forward\" slot=\"end\"></ion-icon>\t\t  \n</ion-item>\n</ion-item-sliding>\n\n<ion-item *ngIf=\"cards == ''\">\nNo payment options stored.\n</ion-item>\n\n<ion-item lines=\"none\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n<ion-button size=\"small\" (click)=\"Addpay()\" color=\"success\"><ion-icon name=\"add\"></ion-icon>Add New</ion-button>\n</ion-item>\t\n</div>\n\n<h5 head-account class=\"ion-hide-md-down\">PAYMENT OPTIONS\n<span  (click)=\"Addpay()\" class=\"btn btn-success btn-sm add-payment-btn\" float-right>\nAdd New \n</span>      \n</h5>\n<table class=\"ion-hide-md-down table table-bordered\">\n<thead>\n<tr *ngIf=\"cards != ''\">\n<th>S NO.</th>\n<th>Payment Method</th>\n<th>Account Details</th>\n<th>Status</th>\n<th>Action</th>\n</tr>\n</thead>\n<tbody>\n\n<tr *ngFor=\"let card of cards; let c_index = index \">\n<td>{{c_index + 1}}</td>\t\t\t\t\t\t\t\t\t\t\t\t\t\n<td order-id>\n<span class=\"label label-primary\">{{card.card_type}}</span>\n</td>\n<td>\nxxxx xxxx xxxx {{card.card_number.slice(-4)}}\n</td>\n<td order-id>\n<span class=\"label label-success\" *ngIf=\"card.card_status == 1\">Active</span>\n<span class=\"label label-danger\" *ngIf=\"card.card_status == 0\">In-active</span>\n</td>\n<td view_details>\t\t\t\t\t\t\t\t\t\t                                           \n<a (click)=\"Addpay('edit',c_index,card)\" class=\"btn btn-success btn-sm  btn-circle\">\n<i class=\"fa fa-pencil\"></i> \n</a>\n<a (click)=\"deleteCard(card.card_id,c_index)\" class=\"btn btn-danger btn-sm btn-circle\">\n<i class=\"fa fa-trash\"></i>  \n</a>\n</td>\n</tr>\n\n<tr *ngIf=\"cards == ''\">\n<td colspan=\"5\">No payment options stored.</td>\n</tr>\n\n</tbody>\n</table>\n</div>\n<!-- PAYMENT OPTIONS Start -->\n<div panel panel-default  *ngIf=\"AddpayClicked\">\n<div panel-heading  account-head>\n<h4>\n<a href=\"javascript:void(0)\">\n<span><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>  {{cards_title}} Payment Method\n</a>\n</h4>\t\t\t\t\t \n</div>\n<div panel-body>\n<ion-row>\n<ion-col size-md=\"12\" size-sm=\"12\" size=\"12\" head-payment>\nCredit or Debit Cards \n<span float-right class=\"card-psys\"> <img src=\"assets/images/cards.png\"></span>\n\n</ion-col>\n<ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Card Number *</ion-label>\n<ion-input [(ngModel)]=\"pay_card_number\" type=\"text\" placeholder=\"Card Number\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n<ion-item  form-group no-padding lines=\"none\">\n<ion-label position=\"stacked\">Card Type *</ion-label>\n<ion-select [(ngModel)]=\"pay_card_type\"  placeholder=\"Select Card Type\">\n<ion-select-option value=\"Visa\">Visa</ion-select-option>\n<ion-select-option value=\"Master Card\">Master Card</ion-select-option>\n<ion-select-option value=\"American Express\">American Express</ion-select-option>\n<ion-select-option value=\"Rupay\">Rupay</ion-select-option>\n<ion-select-option value=\"Discover\">Discover</ion-select-option>\n<ion-select-option value=\"Citibank\">Citibank</ion-select-option>\n</ion-select>\n</ion-item>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n</ion-col>\n<ion-col size-md=\"3\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Expiry Date *</ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"pay_expiry_month\" placeholder=\"MM\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"3\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\"></ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"pay_expiry_year\" placeholder=\"YY\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">CVV *</ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"pay_cvv\" placeholder=\"CVV\"></ion-input>\n</div>\n</ion-col>\n<!-- <ion-col  size-md=\"12\" size-sm=\"12\" size=\"12\">\n<div class=\"checkbox checks-s\">\n<label>\n<input type=\"checkbox\"> Save for further orders.\n</label>\n</div>\n</ion-col> -->\n\n<ion-col size=\"12\">\n<ion-button color=\"darkred\" (click)=\"updatePaymentCard(pay_card_number,pay_card_type,pay_expiry_month,pay_expiry_year,pay_cvv)\" style=\"position: initial;float: left;\">\nSave\n</ion-button>\n<ion-button color=\"greyc\" (click)=\"cancelPay()\"style=\"position: initial;float: left;\">\nCancel\n</ion-button>\n</ion-col>\n</ion-row>\t  \n</div>\n</div>\n\n<!-- <div panel panel-default  *ngIf=\"EditpayClicked\">\n<div panel-heading  account-head>\n<h4>\n<a href=\"javascript:void(0)\">\n<span><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span> Edit Card Information\n</a>\n</h4>\t\t\t\t\t \n</div>\n<div panel-body>\n<form class=\"register-form\">\n<ion-row>\n<ion-col size-md=\"12\" size-sm=\"12\" size=\"12\" head-payment>\nCredit or Debit Cards \n<span float-right class=\"card-psys\"> <img src=\"assets/images/cards.png\"></span>\n\n</ion-col>\n<ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Card Number *</ion-label>\n<ion-input type=\"text\" placeholder=\"1252 1200 4566 8522\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n<ion-item  form-group no-padding lines=\"none\">\n<ion-label position=\"stacked\">Card Type *</ion-label>\n<ion-select placeholder=\"Select Card Type\">\n<ion-select-option value=\"Visa\">Visa</ion-select-option>\n<ion-select-option value=\"Master Card\">Master Card</ion-select-option>\n</ion-select>\n</ion-item>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n</ion-col>\n<ion-col size-md=\"3\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Expiry Date *</ion-label>\n<ion-input type=\"text\" placeholder=\"04\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"3\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\"></ion-label>\n<ion-input type=\"text\" placeholder=\"2021\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">CVV *</ion-label>\n<ion-input type=\"text\" placeholder=\"522\"></ion-input>\n</div>\n</ion-col>\n<ion-col  size-md=\"12\" size-sm=\"12\" size=\"12\">\n<div class=\"checkbox checks-s\">\n<label>\n<input type=\"checkbox\"> Save for further orders.\n</label>\n</div>\n</ion-col>\n\n<ion-col size=\"12\">\n<ion-button color=\"darkred\">\nSave\n</ion-button>\n<ion-button color=\"greyc\">\nCancel\n</ion-button>\n</ion-col>\n</ion-row>\n</form>\t\t  \n</div>\n</div> -->\n<!-- PAYMENT OPTIONSe Ends -->\n</ion-list>\n<ion-list *ngSwitchCase=\"'addresses'\">\n<div product-tab class=\"table-responsive\"  orders>\t\n<div mob-orders class=\"ion-hide-lg-up\">\t\t\n<ion-item-sliding *ngFor=\"let address of addresses; let adm_index = index \">\n\t<ion-item-options side=\"start\">\n\t<ion-item-option (click)=\"setAddressDefault(address.address_id,adm_index)\" *ngIf=\"address.set_as_default == 0\" color=\"darkred\">Set Default</ion-item-option>\t\t  \n\t<ion-item-option (click)=\"addaddressClick('edit',address,adm_index)\" color=\"success\">Edit</ion-item-option>\t\t\t\t\t\t\t \n\t</ion-item-options>\t\n\t<ion-item-options side=\"end\">\t\t\t\t\t\t\t\t\n\t<ion-item-option (click)=\"deleteAddress(address.address_id,adm_index)\" color=\"danger\">Delete</ion-item-option>\n\t</ion-item-options>\t\t\t\t\t\t\t\t\n\t<ion-item lines=\"none\">\n\t<ion-label>\n\t<h3>{{address.address_first_name}} {{address.address_last_name}}</h3>\n\t<p>{{address.full_address}}, {{address.address_city}}, {{address.address_state}}, {{address.address_zip_code}} ({{address.country_name}})</p>\n\t<p>{{address.address_phone}}</p>\n\t</ion-label>\t\n\t<ion-icon arrow-small name=\"arrow-forward\" slot=\"end\"></ion-icon>\t\t  \n\t</ion-item>\n</ion-item-sliding>\n<ion-item *ngIf=\"addresses == ''\">\n\tNo address added yet.\n</ion-item>\n\n<ion-item lines=\"none\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  \n<ion-button size=\"small\" (click)=\"addaddressClick('add')\" color=\"success\"><ion-icon name=\"add\"></ion-icon>Add New</ion-button>\n</ion-item>\t\n</div>\t\t\t\t\t\t\t\t\t\t\t\t\n<h5 head-account class=\"ion-hide-md-down\">Your Addresses\n<span (click)=\"addaddressClick('add')\" class=\"btn btn-success btn-sm add-payment-btn\" float-right>\nAdd New\n</span>      \n</h5>\n<table class=\"ion-hide-md-down table table-bordered\">\n<thead *ngIf=\"addresses != ''\">\n<tr>\n<th>S NO.</th>\n<th>Name</th>\n<th>Address</th>\n<th>Contact No</th>\n<th>Action</th>\n</tr>\n</thead>\n<tbody>\n\n<tr *ngFor=\"let address of addresses; let ad_index = index \">\n\t<td>{{ad_index + 1}}</td>\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t<td order-id>\n\t{{address.address_first_name}} {{address.address_last_name}}\n\t</td>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t<td order-id>\n\t<span class=\"label label-primary\">\n\t\t{{address.full_address}}, {{address.address_city}}, {{address.address_state}}, {{address.address_zip_code}} ({{address.country_name}})\n\t</span>\n\t</td>\n\t<td>\n\t{{address.address_phone}}\n\t</td>\n\t<td view_details>\t\n\t<a (click)=\"setAddressDefault(address.address_id,ad_index)\" title=\"Set Default\" *ngIf=\"address.set_as_default == 0\" class=\"btn btn-success btn-sm  btn-circle action-icons\">\n\t<i class=\"fa fa-check\"></i>\n\t</a>\t\t   \t\t\t\t\t\t\t                                           \n\t<a (click)=\"addaddressClick('edit',address,ad_index)\" class=\"btn btn-success btn-sm  btn-circle\">\n\t<i class=\"fa fa-pencil\"></i> \n\t</a>\n\t<a class=\"btn btn-danger btn-sm btn-circle\" (click)=\"deleteAddress(address.address_id,ad_index)\">\n\t<i class=\"fa fa-trash\"></i>  \n\t</a>\n\t</td>\n</tr>\n<tr *ngIf=\"addresses == ''\" >\n<td colspan=\"5\">No address added yet.</td>\n</tr>\n\n</tbody>\n</table>\n</div>\n\n<!-- Add Addresses Start -->\n<div panel panel-default *ngIf=\"addaddressClicked\">\n<div panel-heading  account-head>\n<h4>\n<a href=\"javascript:void(0)\">\n<span><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>  {{address_title}} Address\n</a>\n</h4>\t\t\t\t\t \n</div>\n<div panel-body>\n\n<ion-row>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">First Name *</ion-label>\n<ion-input [(ngModel)]=\"ad_first_name\" type=\"text\" placeholder=\"\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Last Name *</ion-label>\n<ion-input [(ngModel)]=\"ad_last_name\" type=\"text\" placeholder=\"\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Address *</ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"ad_address\" placeholder=\"\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">City *</ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"ad_city\" placeholder=\"\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">State *</ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"ad_state\" placeholder=\"\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<ion-item  form-group no-padding lines=\"none\">\n<ion-label position=\"stacked\">Country *</ion-label>\n<ion-select placeholder=\"Select Country\" [(ngModel)]=\"ad_country\">\n<ion-select-option *ngFor=\"let country of countries\" value=\"{{country.id}}\">{{country.name}}</ion-select-option>\n</ion-select>\n</ion-item>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Zip Code *</ion-label>\n<ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"ad_zip\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Phone Number *</ion-label>\n<ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"ad_phone\"></ion-input>\n</div>\n</ion-col>\n<ion-col  size-md=\"12\" size-sm=\"12\" size=\"12\">\n<div class=\"checkbox checks-s\">\n<label>\n<input type=\"checkbox\" [(ngModel)]=\"ad_is_default\"> Set as Default Address\n</label>\n</div>\n</ion-col>\n<ion-col size=\"12\">\n<ion-button color=\"darkred\" (click)=\"saveAddress(ad_first_name,ad_last_name,ad_address,ad_city,ad_state,ad_country,ad_zip,ad_phone,ad_is_default)\"style=\"position: initial;float: left;\">\n{{address_title}} Address\n</ion-button>\n<ion-button color=\"greyc\" (click)=\"cancelAddAdress()\"style=\"position: initial;float: left;\">\nCancel\n</ion-button>\n</ion-col>\n</ion-row>\n\t  \n</div>\n</div>\n<!--Add Addresses Ends -->\n\n<!-- Edit Addresses Start -->\n<!-- <div panel panel-default   *ngIf=\"editaddressClicked\" >\n<div panel-heading  account-head>\n<h4>\n<a href=\"javascript:void(0)\">\n<span><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span>  Edit Address\n</a>\n</h4>\t\t\t\t\t \n</div>\n<div panel-body>\n\n<ion-row>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">First Name *</ion-label>\n<ion-input type=\"text\" placeholder=\"Demo\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Last Name *</ion-label>\n<ion-input type=\"text\" placeholder=\"Customer\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Address *</ion-label>\n<ion-input type=\"text\" placeholder=\"123 Street\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">City *</ion-label>\n<ion-input type=\"text\" placeholder=\"CA\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">State *</ion-label>\n<ion-input type=\"text\" placeholder=\"CA\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<ion-item  form-group no-padding lines=\"none\">\n<ion-label position=\"stacked\">Country *</ion-label>\n<ion-select placeholder=\"Select Country\">\n<ion-select-option value=\"In\">India</ion-select-option>\n<ion-select-option value=\"US\">USA</ion-select-option>\n<ion-select-option value=\"C\">Canada</ion-select-option>\n<ion-select-option value=\"UA\">UAE</ion-select-option>\n</ion-select>\n</ion-item>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Zip Code *</ion-label>\n<ion-input type=\"text\" placeholder=\"4656\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Phone Number *</ion-label>\n<ion-input type=\"text\" placeholder=\"7899846565\"></ion-input>\n</div>\n</ion-col>\n<ion-col  size-md=\"12\" size-sm=\"12\" size=\"12\">\n<div class=\"checkbox checks-s\">\n<label>\n<input type=\"checkbox\"> Set as Default Address\n</label>\n</div>\n</ion-col>\n<ion-col size=\"12\">\n<ion-button color=\"darkred\">\nUpdate Address\n</ion-button>\n<ion-button color=\"greyc\">\nCancel\n</ion-button>\n</ion-col>\n</ion-row>\n\t  \n</div>\n</div> -->\n<!-- Edit Addresses Ends -->\n\n</ion-list>\n<ion-list *ngSwitchCase=\"'login'\">\n<div product-tab class=\"table-responsive\"  orders login-detail>\t\t\n<ion-list class=\"ion-hide-lg-up\" no-margin>\n<ion-item>\n<ion-label><b>Name</b> <span float-right>{{profile?.name}} {{profile?.last_name}}</span></ion-label>\n</ion-item>\n<ion-item>\n<ion-label><b>Contact No</b> <span float-right>{{profile?.phone}}</span></ion-label>\n</ion-item>\n<ion-item>\n<ion-label><b>Email</b> <span float-right>{{profile?.email}}</span></ion-label>\n</ion-item> \n<ion-item>\n<ion-label><b>Password</b> <span float-right>******** <ion-button (click)=\"editpasswordClick()\" size=\"small\" color=\"success\"><ion-icon name=\"create\"></ion-icon></ion-button></span></ion-label>\n</ion-item>\n<!-- <ion-item lines=\"none\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t     \n<ion-button  edit-login size=\"small\" (click)=\"editdetailClick()\"  color=\"success\"><ion-icon name=\"create\"></ion-icon>Edit Details</ion-button>\n</ion-item>\t -->\n</ion-list>                                               \t\t\t\t\t\t\t\t\t\t\t\t \n<h5 head-account class=\"ion-hide-md-down\">LOGIN DETAILS\n<!-- <span  (click)=\"editdetailClick()\"  class=\"btn btn-success btn-sm add-payment-btn\" float-right>\nEdit\n</span> -->      \n</h5>\n<table class=\"ion-hide-md-down table table-condensed\">\n<tbody> \n<tr>\n<td><b>Name</b></td>\n<td align=\"left\">{{profile?.name}} {{profile?.last_name}}</td>\n<td><b>Email</b></td>\n<td>{{profile?.email}}</td>\n</tr>\n<tr>\n<td><b>Contact No</b></td>\n<td>{{profile?.phone}}</td>\n\n<td><b>Password</b></td>\n<td>******** \n<a  (click)=\"editpasswordClick()\" class=\"btn btn-success btn-sm btn-circle pull-right\">\n<i class=\"fa fa-pencil\"></i> \n</a>\n</td>\n</tr>\n\n</tbody>\n</table>\n</div>\n<!-- Add Addresses Start -->\n<!-- <div panel panel-default   *ngIf=\"editdetailClicked\" >\n<div panel-heading  account-head>\n<h4>\n<a href=\"javascript:void(0)\">\n<span><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span>  Edit Details\n</a>\n</h4>\t\t\t\t\t \n</div>\n<div panel-body>\n<form class=\"register-form\">\n<ion-row>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Name *</ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"name\" placeholder=\"Name\"></ion-input>\n</div>\n</ion-col>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Email *</ion-label>\n<ion-input type=\"email\" [(ngModel)]=\"email\" placeholder=\"Email\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Phone Number *</ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"phone\" placeholder=\"Phone Number\"></ion-input>\n</div>\n</ion-col>\n<ion-col size=\"12\">\n<ion-button color=\"darkred\">\nUpdate\n</ion-button>\n<ion-button color=\"greyc\">\nCancel\n</ion-button>\n</ion-col>\n</ion-row>\n</form>\t\t  \n</div>\n</div> -->\n<!--Add Addresses Ends -->\n\n<!-- Edit Addresses Start -->\n<div panel panel-default   *ngIf=\"editpasswordClicked\" >\n<div panel-heading  account-head>\n<h4>\n<a href=\"javascript:void(0)\">\n<span><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span>Edit Password\n</a>\n</h4>\t\t\t\t\t \n</div>\n<div panel-body>\n<ion-row>\n\t<ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n\t<div  form-group>\n\t<ion-label position=\"stacked\">Current Password</ion-label>\n\t<ion-input type=\"password\" [(ngModel)]=\"current_password\" placeholder=\"Current password\"></ion-input>\n\t</div>\n\t</ion-col>\n\t<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t<div  form-group>\n\t<ion-label position=\"stacked\">New Password</ion-label>\n\t<ion-input type=\"password\" [(ngModel)]=\"new_password\" placeholder=\"New Password\"></ion-input>\n\t</div>\n\t</ion-col>\n\t<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t<div  form-group>\n\t<ion-label position=\"stacked\">Re-enter New Password</ion-label>\n\t<ion-input type=\"password\" [(ngModel)]=\"confirm_password\" placeholder=\"Re-enter New Password\"></ion-input>\n\t</div>\n\t</ion-col>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  \n\t<ion-col size=\"12\">\n\t\t<ion-button color=\"darkred\" (click)=\"updatePassword(current_password,new_password,confirm_password)\" style=\"position: initial;float: left;\">\n\t\tUpdate\n\t\t</ion-button>\n\t\t<ion-button color=\"greyc\" (click)=\"cancelPassword()\" style=\"position: initial;float: left;\">\n\t\tCancel\n\t\t</ion-button>\n\t</ion-col>\n</ion-row>\t  \n</div>\n</div>\n<!-- Edit Addresses Ends -->\n</ion-list>\n<ion-list *ngSwitchCase=\"'messages'\">\n<ion-row>\n<ion-col size-lg=\"6\" offset-lg=\"3\" size-md=\"8\" offset-md=\"2\">\n<div product-tab users-list>\t\t\t\t\t\t\t\t\t\t\t\t     \n\n<ion-item  lines=\"none\" routerLink=\"/messages\">\n<ion-avatar slot=\"start\">\n<img src=\"assets/images/testimonials/member1.png\">\n</ion-avatar>\n<ion-label>\n<h3>John Smith</h3>\n<ion-note>Today at 11:45 am</ion-note>\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n</ion-label>\n</ion-item>\n<ion-item  lines=\"none\"  routerLink=\"/messages\">\n<ion-avatar slot=\"start\"> \n<img src=\"assets/images/testimonials/member2.png\"> \n</ion-avatar>\n<ion-label>\n<h3>David Smith</h3>\n<ion-note>Today at 11:45 am</ion-note>\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n</ion-label>\n</ion-item>\n<ion-item  lines=\"none\"  routerLink=\"/messages\">\n<ion-avatar slot=\"start\">\n<img src=\"assets/images/testimonials/member3.png\">\n</ion-avatar>\n<ion-label>\n<h3>Steve Jones</h3>\n<ion-note>Today at 11:45 am</ion-note>\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n</ion-label>\n</ion-item>\n<ion-item  lines=\"none\"  routerLink=\"/messages\">\n<ion-avatar slot=\"start\">\n<img src=\"assets/images/testimonials/member4.png\">\n</ion-avatar>\n<ion-label>\n<h3>Johnson Charles</h3>\n<ion-note>Today at 11:45 am</ion-note>\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n</ion-label>\n</ion-item>\n<ion-item  lines=\"none\"  routerLink=\"/messages\">\n<ion-avatar slot=\"start\">\n<img src=\"assets/images/testimonials/member1.png\">\n</ion-avatar>\n<ion-label>\n<h3>Andrew Doe</h3>\n<ion-note>Today at 11:45 am</ion-note>\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n</ion-label>\n</ion-item>\n\n</div>\n</ion-col>\n</ion-row>\n</ion-list>\t\t \n</div>\n</div>\t\n</ion-col>\t\t\t\t \n</ion-row>\t\n\n<!-- <app-recently-viewed></app-recently-viewed> -->\n<!-- <app-featured-products></app-featured-products> -->\n\n</div>\n<!-- Container Ends-->\t\n</div>\n<app-footer></app-footer>\t\n</ion-content>\n"

/***/ }),

/***/ "./src/app/your-account/your-account.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/your-account/your-account.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey); }\n  ion-content .updateBtn {\n    position: inherit; }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-start: var(--ion-padding-0);\n      --padding-end: var(--ion-padding-0);\n      --padding-top: var(--ion-padding-0);\n      --padding-bottom: var(--ion-padding-0); } }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top: var(--ion-padding-0); } }\n  @media only screen and (max-width: 991px) {\n    ion-content .container {\n      padding: var(--ion-padding-0); } }\n  ion-content [your-account] {\n    margin-bottom: var(--ion-margin-20);\n    font-family: var(--ion-font-family-2);\n    /* profile page */ }\n  @media only screen and (max-width: 991px) {\n      ion-content [your-account] {\n        margin-bottom: var(--ion-margin-0); }\n        ion-content [your-account] ion-col {\n          padding: var(--ion-padding-0); } }\n  ion-content [your-account] [head-account] {\n      font-family: var(--ion-font-family-2);\n      padding: var(--ion-padding-15) var(--ion-padding-15);\n      font-size: var(--ion-font-size-17);\n      font-weight: 700;\n      background: var(--ion-color-darkblue);\n      margin: var(--ion-margin-0) var(--ion-margin-0) var(--ion-margin-20);\n      color: var(--ion-color-white);\n      text-align: center; }\n  ion-content [your-account] [head-account] .add-payment-btn {\n        margin-top: -5px; }\n  ion-content [your-account] [product-tabs] {\n      background: var(--ion-color-white); }\n  ion-content [your-account] [product-tabs] ion-segment [link-notification] {\n        color: var(--ion-color-white);\n        text-decoration: none;\n        padding: var(--ion-padding-4) var(--ion-padding-15);\n        background: var(--ion-color-darkred);\n        font-size: var(--ion-font-size-12);\n        border-radius: 4px;\n        cursor: pointer;\n        margin: var(--ion-margin-11) var(--ion-margin-20); }\n  @media only screen and (max-width: 991px) {\n        ion-content [your-account] [product-tabs] ion-segment {\n          display: flex;\n          border: none;\n          border-bottom: 2px solid var(--ion-color-grey2); } }\n  @media only screen and (max-width: 991px) {\n        ion-content [your-account] [product-tabs] ion-segment ion-segment-button {\n          border: none;\n          height: var(--ion-wh-30);\n          background: var(--ion-color-white);\n          font-size: var(--ion-font-size-10); }\n          ion-content [your-account] [product-tabs] ion-segment ion-segment-button ion-icon {\n            font-size: var(--ion-font-size-20);\n            margin-top: var(--ion-margin-0);\n            color: var(--ion-color-darkblue); } }\n  ion-content [your-account] [product-tabs] ion-segment ion-segment-button ion-label {\n        margin-bottom: var(--ion-margin-0); }\n  ion-content [your-account] [product-tabs] [tab-content] {\n        padding: var(--ion-padding-10) var(--ion-padding-20) var(--ion-padding-0);\n        /*Login Detail Starts*/\n        /* Login Detail Ends */\n        /*Orders Starts*/\n        /*Orders Ends*/\n        /* Add Edit Form Start*/\n        /* Add Edit Form Ends*/ }\n  @media only screen and (max-width: 991px) {\n          ion-content [your-account] [product-tabs] [tab-content] {\n            padding: var(--ion-padding-0); }\n            ion-content [your-account] [product-tabs] [tab-content] ion-list {\n              padding-top: var(--ion-padding-0); } }\n  ion-content [your-account] [product-tabs] [tab-content] [product-tab] {\n          /* Users List Start*/\n          /* Users List Ends*/ }\n  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] {\n            padding: var(--ion-padding-15); }\n  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item {\n              margin-bottom: var(--ion-margin-10);\n              border-left: 2px solid var(--ion-color-darkred);\n              border-radius: 4px;\n              --background:var(--ion-color-grey); }\n  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item h3 {\n                font-size: var(--ion-font-size-14);\n                font-weight: 700; }\n  @media only screen and (max-width: 991px) {\n                  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item h3 {\n                    margin-bottom: -5px;\n                    font-size: var(--ion-font-size-14); } }\n  @media only screen and (max-width: 576px) {\n                  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item h3 {\n                    font-size: var(--ion-font-size-12); } }\n  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item ion-note {\n                font-size: var(--ion-font-size-13);\n                color: #a5a5a5; }\n  @media only screen and (max-width: 991px) {\n                  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item ion-note {\n                    font-size: var(--ion-font-size-12); } }\n  @media only screen and (max-width: 576px) {\n                  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item ion-note {\n                    font-size: var(--ion-font-size-10); } }\n  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item p {\n                font-size: var(--ion-font-size-14); }\n  @media only screen and (max-width: 991px) {\n                  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item p {\n                    font-size: var(--ion-font-size-13); } }\n  @media only screen and (max-width: 576px) {\n                  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item p {\n                    font-size: var(--ion-font-size-12); } }\n  @media only screen and (max-width: 991px) {\n            ion-content [your-account] [product-tabs] [tab-content] [product-tab] {\n              border: none; }\n              ion-content [your-account] [product-tabs] [tab-content] [product-tab] .media {\n                margin-top: var(--ion-margin-0); }\n              ion-content [your-account] [product-tabs] [tab-content] [product-tab] .media-link {\n                background: #c8ccc9;\n                padding: var(--ion-padding-20);\n                width: 100%;\n                text-align: center; }\n                ion-content [your-account] [product-tabs] [tab-content] [product-tab] .media-link [name-user] {\n                  color: var(--ion-color-black);\n                  font-weight: 700;\n                  text-transform: capitalize;\n                  margin-top: var(--ion-margin-10);\n                  margin-bottom: var(--ion-margin-0); }\n                ion-content [your-account] [product-tabs] [tab-content] [product-tab] .media-link .media-object {\n                  position: relative; }\n                ion-content [your-account] [product-tabs] [tab-content] [product-tab] .media-link img {\n                  border-radius: 50%;\n                  width: 100px;\n                  height: 100px;\n                  border: 2px solid var(--ion-color-white);\n                  -o-object-fit: cover;\n                     object-fit: cover; }\n                ion-content [your-account] [product-tabs] [tab-content] [product-tab] .media-link [img-edit] label {\n                  width: var(--ion-wh-30);\n                  height: var(--ion-wh-30);\n                  line-height: var(--ion-value-35);\n                  border-radius: 50%;\n                  color: var(--ion-color-white);\n                  position: absolute;\n                  z-index: 1;\n                  font-size: var(--ion-font-size-16);\n                  bottom: var(--ion-value-5);\n                  margin: 0 auto;\n                  left: var(--ion-value-0);\n                  right: var(--ion-value-0);\n                  background: rgba(0, 0, 0, 0.5); }\n              ion-content [your-account] [product-tabs] [tab-content] [product-tab] .media-body ion-list ion-item {\n                font-family: var(--ion-font-family-2);\n                font-size: var(--ion-font-size-12);\n                border-bottom: 1px solid var(--ion-color-ltgrey); } }\n  @media only screen and (max-width: 991px) and (max-width: 991px) {\n      ion-content [your-account] [product-tabs] [tab-content] [product-tab] .media-body ion-list ion-item ion-button {\n        --box-shadow:none; } }\n  ion-content [your-account] [product-tabs] [tab-content] .btn-circle {\n          border-radius: 50%;\n          margin-right: var(--ion-margin-5);\n          width: var(--ion-wh-30);\n          height: var(--ion-wh-30);\n          line-height: var(--ion-wh-30);\n          padding: var(--ion-padding-0); }\n  ion-content [your-account] [product-tabs] [tab-content] [login-detail] ion-button {\n          --box-shadow:none; }\n  @media only screen and (max-width: 991px) {\n            ion-content [your-account] [product-tabs] [tab-content] [login-detail] ion-button {\n              --border-radius: 50%;\n              width: 30px;\n              height: 30px;\n              font-size: 10px;\n              margin-top: 0; } }\n  ion-content [your-account] [product-tabs] [tab-content] [login-detail] tr td {\n          padding: var(--ion-padding-10) !important;\n          border-bottom: 1px solid var(--ion-color-ltgrey) !important;\n          vertical-align: middle; }\n  @media only screen and (max-width: 991px) {\n          ion-content [your-account] [product-tabs] [tab-content] [login-detail] ion-item {\n            font-size: var(--ion-font-size-14); } }\n  ion-content [your-account] [product-tabs] [tab-content] [orders] [head-account] {\n          margin-bottom: var(--ion-margin-0); }\n  @media only screen and (max-width: 991px) {\n          ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item {\n            border-bottom: 1px solid #e3e3e3;\n            padding: var(--ion-padding-0); }\n            ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item img {\n              border-radius: var(--ion-value-4); }\n            ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item h3 {\n              font-size: var(--ion-font-size-12);\n              font-weight: 700;\n              font-family: var(--ion-font-family-2); }\n            ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item ion-badge {\n              font-size: var(--ion-font-size-10);\n              height: var(--ion-wh-16); }\n            ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item p {\n              font-size: var(--ion-font-size-12);\n              color: var(--ion-color-darkblack);\n              display: flex;\n              align-items: center;\n              font-weight: 600;\n              font-family: var(--ion-font-family-2); }\n            ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item [arrow-small] {\n              font-size: var(--ion-font-size-14); }\n            ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item [price-time] h3, ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item [price-time] ion-note {\n              font-size: var(--ion-font-size-12);\n              margin: var(--ion-margin-0); }\n            ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item [price-time] a {\n              display: block;\n              color: var(--ion-color-darkblue);\n              font-size: var(--ion-font-size-12);\n              text-decoration: underline; } }\n  ion-content [your-account] [product-tabs] [tab-content] [orders] table tr {\n          color: var(--ion-color-darkblack);\n          font-family: var(--ion-font-family-2); }\n  ion-content [your-account] [product-tabs] [tab-content] [orders] table tr td {\n            padding: var(--ion-padding-20) var(--ion-padding-15); }\n  ion-content [your-account] [product-tabs] [tab-content] [orders] table tr th, ion-content [your-account] [product-tabs] [tab-content] [orders] table tr td {\n            vertical-align: middle;\n            border: 1px solid var(--ion-color-ltgrey); }\n  ion-content [your-account] [product-tabs] [tab-content] [orders] table tr th[view_details] .action-icons, ion-content [your-account] [product-tabs] [tab-content] [orders] table tr td[view_details] .action-icons {\n              background: var(--ion-color-darkred);\n              border-color: var(--ion-color-darkred); }\n  ion-content [your-account] [product-tabs] [tab-content] [orders] table tr th img, ion-content [your-account] [product-tabs] [tab-content] [orders] table tr td img {\n              width: var(--ion-wh-70);\n              border-radius: 50%;\n              border: 2px solid #ccc;\n              padding: 2px;\n              height: var(--ion-wh-70);\n              -o-object-fit: cover;\n                 object-fit: cover; }\n  ion-content [your-account] [product-tabs] [tab-content] [orders] table tr th .btn-theme, ion-content [your-account] [product-tabs] [tab-content] [orders] table tr td .btn-theme {\n              font-family: var(--ion-font-family-2);\n              background-color: var(--ion-color-darkblue);\n              border-color: var(--ion-color-darkblue);\n              color: var(--ion-color-white);\n              padding: var(--ion-padding-6) var(--ion-padding-12);\n              border-radius: var(--ion-color-darkblue); }\n  ion-content [your-account] [product-tabs] [tab-content] [orders] table tr th .btn-theme:hover, ion-content [your-account] [product-tabs] [tab-content] [orders] table tr td .btn-theme:hover {\n                opacity: 0.8; }\n  ion-content [your-account] [product-tabs] [tab-content] [block-title] {\n          text-transform: uppercase;\n          font-size: var(--ion-font-size-15);\n          font-weight: 700;\n          color: var(--ion-color-darkblue);\n          font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n            ion-content [your-account] [product-tabs] [tab-content] [block-title] {\n              padding: var(--ion-value-0) var(--ion-value-15); } }\n  @media only screen and (max-width: 991px) {\n          ion-content [your-account] [product-tabs] [tab-content] [panel] {\n            padding: var(--ion-value-0) var(--ion-value-15); } }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-heading] {\n          font-family: var(--ion-font-family-2);\n          font-size: var(--ion-font-size-20);\n          text-transform: uppercase;\n          padding: var(--ion-padding-0);\n          border: none;\n          color: var(--ion-color-darkblack);\n          background-color: #f5f5f5; }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-heading] h4 a {\n            font-family: var(--ion-font-family-2);\n            color: var(--ion-color-darkblack3);\n            text-transform: uppercase;\n            display: block;\n            margin: var(--ion-margin-0);\n            font-size: var(--ion-font-size-13);\n            font-weight: bold;\n            text-decoration: none; }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-heading] h4 a span {\n              background: var(--ion-color-darkred);\n              color: var(--ion-color-white);\n              display: inline-block;\n              margin-right: var(--ion-margin-10);\n              padding: var(--ion-padding-15) var(--ion-padding-20); }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] {\n          background: var(--ion-color-greyf8);\n          padding: var(--ion-padding-10) var(--ion-padding-20) var(--ion-padding-20);\n          margin-bottom: var(--ion-margin-20);\n          margin-top: var(--ion-margin-20);\n          font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n            ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] {\n              background: var(--ion-color-white);\n              padding: var(--ion-padding-0); }\n              ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] ion-button {\n                height: var(--ion-wh-30);\n                --box-shadow:none; } }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [head-payment] {\n            font-weight: 700;\n            padding-bottom: var(--ion-padding-15);\n            border-bottom: 1px solid #eee;\n            margin-bottom: var(--ion-margin-20);\n            color: var(--ion-color-darkblack);\n            font-size: var(--ion-font-size-18); }\n  @media only screen and (max-width: 991px) {\n              ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [head-payment] {\n                font-size: var(--ion-font-size-12); } }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] .card-psys img {\n            width: 200px; }\n  @media only screen and (max-width: 991px) {\n              ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] .card-psys img {\n                width: 150px; } }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] ion-button {\n            --box-shadow:none; }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] ion-button:hover {\n              opacity: 0.8; }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [form-group] {\n            --background: transparent!important;\n            margin-bottom: var(--ion-margin-10); }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [form-group] ion-label {\n              display: inline-block;\n              max-width: 100%;\n              margin-bottom: var(--ion-margin-5);\n              font-weight: 700;\n              color: var(--ion-color-darkblack);\n              font-size: var(--ion-font-size-14);\n              font-family: var(--ion-font-family-2);\n              -webkit-transform: scale(1);\n                      transform: scale(1); }\n  @media only screen and (max-width: 991px) {\n                ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [form-group] ion-label {\n                  font-size: var(--ion-font-size-12);\n                  margin-bottom: var(--ion-margin-0);\n                  font-weight: normal;\n                  display: block; } }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [form-group] ion-input, ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [form-group] ion-select {\n              border-radius: var(--ion-value-3);\n              box-shadow: none;\n              font-size: var(--ion-font-size-14);\n              border: 1px solid #eee;\n              background: var(--ion-color-white);\n              height: var(--ion-wh-42) !important;\n              padding: var(--ion-padding-10) var(--ion-padding-10) !important;\n              font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n                ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [form-group] ion-input, ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [form-group] ion-select {\n                  background: transparent;\n                  height: auto !important;\n                  font-size: var(--ion-font-size-12);\n                  border-radius: var(--ion-value-0);\n                  border-width: var(--ion-value-0) var(--ion-value-0) 1px var(--ion-value-0);\n                  padding: inherit !important; } }\n  ion-content [your-account] [product-tabs] [tab-content] .table tr {\n          font-family: var(--ion-font-family-2); }\n  ion-content [your-account] [product-tabs] [tab-content] .table tr td {\n            padding: var(--ion-padding-9) var(--ion-padding-15);\n            border: none;\n            border-bottom: 1px solid #d0d0d0; }\n  @media only screen and (max-width: 991px) {\n          ion-content [your-account] [product-tabs] [tab-content] .widget {\n            padding: var(--ion-value-0) var(--ion-value-15); } }\n  ion-content [your-account] [product-tabs] [tab-content] .widget [profile_ul] {\n          padding: var(--ion-padding-10);\n          background-color: var(--ion-color-white);\n          border-radius: var(--ion-value-10);\n          border: 1px solid var(--ion-color-ltgrey);\n          box-shadow: 0px 0px 22px 0px #dcdcdc;\n          list-style: none; }\n  ion-content [your-account] [product-tabs] [tab-content] .widget [profile_ul] li a {\n            font-family: var(--ion-font-family-2);\n            color: var(--ion-color-black);\n            position: relative;\n            display: block;\n            padding: var(--ion-value-5) var(--ion-value-0) var(--ion-value-5) var(--ion-value-20);\n            position: relative;\n            border: transparent;\n            border-bottom: 1px solid var(--ion-color-ltgrey);\n            text-decoration: none; }\n  ion-content [your-account] [product-tabs] [tab-content] .widget [profile_ul] li a:before {\n              content: '\\f0a9';\n              font-family: 'FontAwesome';\n              position: absolute;\n              left: var(--ion-value-0);\n              top: var(--ion-value-5); }\n  [tabsInside] {\n  max-width: 720px;\n  width: 80%;\n  margin: 25px auto 0;\n  background: #eee;\n  border-radius: 50px; }\n  [tabsInside] ion-segment-button {\n    border-radius: 50px;\n    padding: 0 20px; }\n  [tabsInside] ion-segment-button.segment-button-checked {\n      border-radius: 50px;\n      background: var(--color-checked);\n      color: #fff; }\n  [commentsArea] {\n  float: left;\n  clear: both;\n  border-top: 1px solid #eee;\n  padding: 20px 0 0;\n  margin: 15px 0 0;\n  background: #f3f3f3;\n  width: 100%;\n  border-radius: 0 0 10px 10px; }\n  [commentsArea] h5 {\n    color: #666;\n    font-size: 15px;\n    margin: 0 20px 15px;\n    font-weight: 400; }\n  [commentsArea] [scrollArea] {\n    max-height: 400px;\n    overflow-y: auto;\n    padding: 0 20px; }\n  [commentsArea] [comntRow] {\n    display: flex;\n    margin: 0 0 20px; }\n  [commentsArea] [comntRow] span {\n      min-width: 50px; }\n  [commentsArea] [comntRow] span img {\n        width: 100%;\n        height: 100%;\n        border: 1px solid #eee;\n        margin: 0 25px 0 0; }\n  [commentsArea] [comntRow] [comntRit] {\n      /*margin-left:auto;*/ }\n  [commentsArea] [comntRow] [comntRit] [comntbg] {\n        background: #fff;\n        border-radius: 10px;\n        box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.03);\n        padding: 5px 12px 10px; }\n  [commentsArea] [comntRow] [comntRit] [comntbg] h3 {\n          font-weight: 500;\n          margin: 0 0 7px;\n          color: #222; }\n  [commentsArea] [comntRow] [comntRit] [comntbg] p {\n          font-weight: 400;\n          margin: 0 0 0px;\n          color: #555; }\n  [commentsArea] [comntRow] [comntRit] small {\n        margin: 10px 0 0;\n        font-size: 13px;\n        color: #888;\n        font-style: italic; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAveW91ci1hY2NvdW50L3lvdXItYWNjb3VudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3lvdXItYWNjb3VudC95b3VyLWFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBS0Esa0NBQWEsRUFBQTtFQUxiO0lBR0MsaUJBQWdCLEVBQUE7RUFHakI7SUFOQTtNQVFFLHFDQUFnQjtNQUNmLG1DQUFjO01BQ2QsbUNBQWM7TUFDZCxzQ0FBaUIsRUFBQSxFQWlrQnBCO0VBL2pCQTtJQWJBO01BZUksbUNBQWMsRUFBQSxFQTZqQmxCO0VBempCQztJQW5CRDtNQXFCRSw2QkFBNEIsRUFBQSxFQUU3QjtFQXZCRDtJQTBCSSxtQ0FBbUM7SUFDbkMscUNBQXFDO0lBd0J2QyxpQkFBQSxFQUFrQjtFQXRCbkI7TUE3QkQ7UUErQkcsa0NBQWtDLEVBQUE7UUEvQnJDO1VBa0NHLDZCQUE0QixFQUFBLEVBQzNCO0VBbkNKO01Bc0NTLHFDQUFxQztNQUNyQyxvREFBb0Q7TUFDMUQsa0NBQW1DO01BQ25DLGdCQUFnQjtNQUNoQixxQ0FBc0M7TUFDdEMsb0VBQXNFO01BQ3RFLDZCQUE2QjtNQUM3QixrQkFBa0IsRUFBQTtFQTdDckI7UUFnRFEsZ0JBQWdCLEVBQUE7RUFoRHhCO01Bc0RLLGtDQUFpQyxFQUFBO0VBdER0QztRQTREaUIsNkJBQTZCO1FBQ3pDLHFCQUFxQjtRQUNyQixtREFBbUQ7UUFDbkQsb0NBQW9DO1FBQ3BDLGtDQUFrQztRQUNsQyxrQkFBa0I7UUFDbEIsZUFBYztRQUNkLGlEQUFrRCxFQUFBO0VBRWpEO1FBckVOO1VBdUVRLGFBQWE7VUFDYixZQUFXO1VBQ1gsK0NBQThDLEVBQUEsRUF1QmxEO0VBbkJJO1FBN0VSO1VBOEVjLFlBQVc7VUFDaEIsd0JBQXdCO1VBQ3BCLGtDQUFrQztVQUNyQyxrQ0FBa0MsRUFBQTtVQWpGNUM7WUFtRlMsa0NBQWtDO1lBQ2xDLCtCQUErQjtZQUMvQixnQ0FBZ0MsRUFBQSxFQUNsQztFQXRGUDtRQTBGTyxrQ0FBaUMsRUFBQTtFQTFGeEM7UUFtR2MseUVBQXlFO1FBbUpyRixzQkFBQTtRQWtDRyxzQkFBQTtRQUNDLGdCQUFBO1FBNkdELGNBQUE7UUFZQSx1QkFBQTtRQWtJRixzQkFBQSxFQUF1QjtFQTlhckI7VUF0R0w7WUF3R21CLDZCQUE2QixFQUFBO1lBeEdoRDtjQTJHTSxpQ0FBZ0MsRUFBQSxFQUMvQjtFQTVHUDtVQStHTyxvQkFBQTtVQWtERixtQkFBQSxFQUFvQjtFQWpLekI7WUFrSEksOEJBQTZCLEVBQUE7RUFsSGpDO2NBb0hNLG1DQUFtQztjQUN0QywrQ0FBK0M7Y0FDL0Msa0JBQWtCO2NBQ2xCLGtDQUFhLEVBQUE7RUF2SGhCO2dCQTJIRyxrQ0FBaUM7Z0JBQ2pDLGdCQUFlLEVBQUE7RUFDZjtrQkE3SEg7b0JBOEhJLG1CQUFtQjtvQkFDbkIsa0NBQWlDLEVBQUEsRUFNakM7RUFKRTtrQkFqSU47b0JBbUlJLGtDQUFpQyxFQUFBLEVBRWpDO0VBcklKO2dCQXdJRyxrQ0FBaUM7Z0JBQ2pDLGNBQWMsRUFBQTtFQUNkO2tCQTFJSDtvQkE0SUksa0NBQWlDLEVBQUEsRUFNakM7RUFKRTtrQkE5SU47b0JBZ0pJLGtDQUFpQyxFQUFBLEVBRWpDO0VBbEpKO2dCQXFKTSxrQ0FBaUMsRUFBQTtFQUNwQztrQkF0Skg7b0JBd0pJLGtDQUFpQyxFQUFBLEVBTWpDO0VBSkU7a0JBMUpOO29CQTRKSSxrQ0FBaUMsRUFBQSxFQUVqQztFQUlBO1lBbEtKO2NBb0trQixZQUFjLEVBQUE7Y0FwS2hDO2dCQXdLTywrQkFBOEIsRUFBQTtjQXhLckM7Z0JBMktXLG1CQUFtQjtnQkFDUCw4QkFBOEI7Z0JBYTlDLFdBQVU7Z0JBQ1Ysa0JBQWlCLEVBQUE7Z0JBMUx4QjtrQkErS00sNkJBQTZCO2tCQUM3QixnQkFBZ0I7a0JBQ2hCLDBCQUEwQjtrQkFDMUIsZ0NBQWdDO2tCQUNoQyxrQ0FBa0MsRUFBQTtnQkFuTHhDO2tCQXVMUSxrQkFBa0IsRUFBQTtnQkF2TDFCO2tCQTZMTSxrQkFBa0I7a0JBQ2xCLFlBQVk7a0JBQ1osYUFBYTtrQkFBRSx3Q0FBd0M7a0JBQ3ZELG9CQUFpQjtxQkFBakIsaUJBQWlCLEVBQUE7Z0JBaE12QjtrQkFzTVEsdUJBQXVCO2tCQUN2Qix3QkFBd0I7a0JBQ3hCLGdDQUFpQztrQkFDakMsa0JBQWtCO2tCQUNsQiw2QkFBNkI7a0JBQzdCLGtCQUFrQjtrQkFDbEIsVUFBVTtrQkFDVixrQ0FBa0M7a0JBQ2xDLDBCQUEyQjtrQkFDM0IsY0FBYztrQkFDZCx3QkFBd0I7a0JBQ3hCLHlCQUEwQjtrQkFDMUIsOEJBQThCLEVBQUE7Y0FsTnRDO2dCQThOUSxxQ0FBb0M7Z0JBQ3BDLGtDQUFpQztnQkFDMUMsZ0RBQStDLEVBQUEsRUFRckM7RUFQTDtNQWpPSjtRQXFPTyxpQkFBYSxFQUFBLEVBQ2Q7RUF0T047VUErT1csa0JBQWlCO1VBQ2pCLGlDQUFnQztVQUNoQyx1QkFBdUI7VUFDdkIsd0JBQXlCO1VBQ3pCLDZCQUE4QjtVQUM5Qiw2QkFBNkIsRUFBQTtFQXBQeEM7VUEyUE8saUJBQWEsRUFBQTtFQUNiO1lBNVBQO2NBOFBZLG9CQUFnQjtjQUNyQixXQUFXO2NBQ1gsWUFBWTtjQUNaLGVBQWU7Y0FDZixhQUFhLEVBQUEsRUFFYjtFQXBRUDtVQTBRTyx5Q0FBeUM7VUFDekMsMkRBQTJEO1VBQzNELHNCQUFxQixFQUFBO0VBS3hCO1VBalJKO1lBb1JPLGtDQUFrQyxFQUFBLEVBQ2pDO0VBclJSO1VBOFJJLGtDQUFpQyxFQUFBO0VBRWxDO1VBaFNIO1lBc1NlLGdDQUFnQztZQUNMLDZCQUE2QixFQUFBO1lBdlN2RTtjQTJTVyxpQ0FBaUMsRUFBQTtZQTNTNUM7Y0ErUzhDLGtDQUFrQztjQUNuRSxnQkFBZTtjQUNmLHFDQUFxQyxFQUFBO1lBalRsRDtjQXFUaUIsa0NBQWtDO2NBQ0Qsd0JBQXdCLEVBQUE7WUF0VDFFO2NBeVRzQixrQ0FBa0M7Y0FDRCxpQ0FBaUM7Y0FDeEUsYUFBYTtjQUNoQixtQkFBbUI7Y0FDbkIsZ0JBQWdCO2NBQ2UscUNBQXFDLEVBQUE7WUE5VGpGO2NBa1VjLGtDQUFrQyxFQUFBO1lBbFVoRDtjQXdVc0Qsa0NBQWtDO2NBQ2xDLDJCQUEyQixFQUFBO1lBelVqRjtjQTZVMkQsY0FBYztjQUMzRCxnQ0FBZ0M7Y0FDaEMsa0NBQWtDO2NBQ2xDLDBCQUEwQixFQUFBLEVBQzNCO0VBalZiO1VBeVYyQixpQ0FBaUM7VUFDdEQscUNBQXFDLEVBQUE7RUExVjNDO1lBNlZXLG9EQUFvRCxFQUFBO0VBN1YvRDtZQWlXa0Msc0JBQXFCO1lBQzFDLHlDQUF5QyxFQUFBO0VBbFd0RDtjQXlXd0Msb0NBQW1DO2NBQ25DLHNDQUFxQyxFQUFBO0VBMVc3RTtjQStXZSx1QkFBdUI7Y0FDN0Isa0JBQWtCO2NBQ2xCLHNCQUFzQjtjQUN0QixZQUFZO2NBQ1osd0JBQXlCO2NBQ3pCLG9CQUFpQjtpQkFBakIsaUJBQWlCLEVBQUE7RUFwWDFCO2NBdVhPLHFDQUFxQztjQUNyQywyQ0FBMkM7Y0FDM0MsdUNBQXVDO2NBQ3ZDLDZCQUE2QjtjQUMxQixtREFBb0Q7Y0FDdkQsd0NBQXdDLEVBQUE7RUE1WC9DO2dCQStYUSxZQUFXLEVBQUE7RUEvWG5CO1VBd1lJLHlCQUF5QjtVQUN6QixrQ0FBa0M7VUFDbEMsZ0JBQWdCO1VBQ2hCLGdDQUFnQztVQUNoQyxxQ0FBcUMsRUFBQTtFQUNsQztZQTdZUDtjQStZTywrQ0FBa0QsRUFBQSxFQUV0RDtFQUdHO1VBcFpOO1lBc1pPLCtDQUFrRCxFQUFBLEVBNkh0RDtFQW5oQkg7VUF5WlEscUNBQXFDO1VBQ3hDLGtDQUFrQztVQUNsQyx5QkFBeUI7VUFDekIsNkJBQThCO1VBQzlCLFlBQVk7VUFDWixpQ0FBaUM7VUFDakMseUJBQXlCLEVBQUE7RUEvWjlCO1lBb2FXLHFDQUFxQztZQUN4QyxrQ0FBa0M7WUFDbEMseUJBQXlCO1lBQ3pCLGNBQWM7WUFDZCwyQkFBMkI7WUFDM0Isa0NBQWtDO1lBQ2xDLGlCQUFpQjtZQUNqQixxQkFBcUIsRUFBQTtFQTNhN0I7Y0ErYVUsb0NBQW9DO2NBQ3BDLDZCQUE2QjtjQUM5QixxQkFBcUI7Y0FDckIsa0NBQWtDO2NBQ2xDLG9EQUFvRCxFQUFBO0VBbmI3RDtVQTBiUSxtQ0FBb0M7VUFDdkMsMEVBQTRFO1VBQzVFLG1DQUFvQztVQUNwQyxnQ0FBZ0M7VUFDN0IscUNBQXFDLEVBQUE7RUFDckM7WUEvYlI7Y0FpY1csa0NBQWtDO2NBQ2IsNkJBQTZCLEVBQUE7Y0FsYzdEO2dCQXFjUyx3QkFBdUI7Z0JBQ3ZCLGlCQUFhLEVBQUEsRUFDYjtFQXZjVDtZQTJjVSxnQkFBZ0I7WUFDbkIscUNBQXFDO1lBQ3JDLDZCQUE2QjtZQUM3QixtQ0FBb0M7WUFDcEMsaUNBQWdDO1lBQ2hDLGtDQUFpQyxFQUFBO0VBQ2hDO2NBamRSO2dCQW1kYSxrQ0FBaUMsRUFBQSxFQUV4QztFQXJkTjtZQTBkVyxZQUFZLEVBQUE7RUFDZDtjQTNkVDtnQkE2ZGMsWUFBWSxFQUFBLEVBRW5CO0VBL2RQO1lBbWVNLGlCQUFhLEVBQUE7RUFuZW5CO2NBc2VPLFlBQVcsRUFBQTtFQXRlbEI7WUEyZWlCLG1DQUFhO1lBQ3JCLG1DQUFtQyxFQUFBO0VBNWU1QztjQWdmZSxxQkFBcUI7Y0FDN0IsZUFBZTtjQUNmLGtDQUFrQztjQUNsQyxnQkFBZ0I7Y0FDaEIsaUNBQWlDO2NBQ2pDLGtDQUFrQztjQUNsQyxxQ0FBcUM7Y0FDckMsMkJBQW1CO3NCQUFuQixtQkFBbUIsRUFBQTtFQUNuQjtnQkF4ZlA7a0JBeWZRLGtDQUFrQztrQkFDbEMsa0NBQWtDO2tCQUNsQyxtQkFBbUI7a0JBQ2hCLGNBQWEsRUFBQSxFQUVsQjtFQTlmTjtjQWdnQmUsaUNBQWlDO2NBQzFDLGdCQUFnQjtjQUNoQixrQ0FBa0M7Y0FDbEMsc0JBQXNCO2NBQ3RCLGtDQUFpQztjQUNqQyxtQ0FBa0M7Y0FDbEMsK0RBQWdFO2NBQ2hFLHFDQUFxQyxFQUFBO0VBQ3JDO2dCQXhnQk47a0JBeWdCVSx1QkFBc0I7a0JBQ3JCLHVCQUFzQjtrQkFBQyxrQ0FBa0M7a0JBQzFELGlDQUFpQztrQkFDbkMsMEVBQXlFO2tCQUN6RSwyQkFBMkIsRUFBQSxFQUU3QjtFQS9nQk47VUF5aEJJLHFDQUFxQyxFQUFBO0VBemhCekM7WUE0aEJTLG1EQUFtRDtZQUN0RCxZQUFZO1lBQ1osZ0NBQWdDLEVBQUE7RUFNcEM7VUFwaUJGO1lBc2lCSSwrQ0FBa0QsRUFBQSxFQWtDbkQ7RUF4a0JIO1VBMGlCRyw4QkFBOEI7VUFDOUIsd0NBQXVDO1VBQ3ZDLGtDQUFrQztVQUNsQyx5Q0FBeUM7VUFDekMsb0NBQW9DO1VBQ3BDLGdCQUFlLEVBQUE7RUEvaUJsQjtZQW9qQlMscUNBQXFDO1lBQ3hDLDZCQUE2QjtZQUMxQixrQkFBaUI7WUFDakIsY0FBYztZQUNqQixxRkFBeUY7WUFDekYsa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQixnREFBZ0Q7WUFDaEQscUJBQW9CLEVBQUE7RUE1akIxQjtjQThqQk0sZ0JBQWdCO2NBQ2hCLDBCQUEwQjtjQUMxQixrQkFBa0I7Y0FDbEIsd0JBQXlCO2NBQ3pCLHVCQUF1QixFQUFBO0VDMU05QjtFRHdOQyxnQkFBZ0I7RUFDaEIsVUFBUztFQUNULG1CQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQUE7RUN0TmpCO0lEd05BLG1CQUFtQjtJQUNoQixlQUFlLEVBQUE7RUN0TmhCO01Ed05ELG1CQUFtQjtNQUNuQixnQ0FBZ0M7TUFDaEMsV0FBVSxFQUFBO0VDck5iO0VEMk5DLFdBQVc7RUFDUixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw0QkFBNEIsRUFBQTtFQ3pOOUI7SUQyTkEsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7RUN6TmhCO0lENE5BLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBYyxFQUFBO0VDMU5kO0lENk5BLGFBQWE7SUFDYixnQkFBZSxFQUFBO0VDM05iO01ENk5ELGVBQWMsRUFBQTtFQzNOWDtRRDZORixXQUFXO1FBQ1IsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixrQkFBa0IsRUFBQTtFQzNOckI7TUQrTkQsb0JBQUEsRUFBcUI7RUM3TmxCO1FEK05GLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsMkNBQXdDO1FBQ3hDLHNCQUFxQixFQUFBO0VDN05qQjtVRCtOSCxnQkFBZTtVQUNmLGVBQWM7VUFDZCxXQUFXLEVBQUE7RUM3TlI7VURnT0gsZ0JBQWU7VUFDZixlQUFjO1VBQ2QsV0FBVyxFQUFBO0VDOU5WO1FEa09GLGdCQUFlO1FBQ2YsZUFBZTtRQUNmLFdBQVc7UUFDWCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3lvdXItYWNjb3VudC95b3VyLWFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGlvbi1jb250ZW50XHJcbnsgIFxyXG5cdC51cGRhdGVCdG57XHJcblx0XHRwb3NpdGlvbjppbmhlcml0O1x0XHJcblx0fVxyXG5cdC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZ3JleSk7XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdHtcclxuICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHR9XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxyXG5cdFx0e1xyXG5cdFx0XHQgIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdFx0fVxyXG5cdC5jb250YWluZXJcclxuXHR7XHJcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHR7XHJcblx0XHRcdHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFt5b3VyLWFjY291bnRdXHJcblx0eyBcclxuXHQgICAgbWFyZ2luLWJvdHRvbTp2YXIoIC0taW9uLW1hcmdpbi0yMCk7XHJcblx0ICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcclxuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0eyBcclxuXHRcdFx0IG1hcmdpbi1ib3R0b206dmFyKCAtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0aW9uLWNvbFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdCBbaGVhZC1hY2NvdW50XVxyXG5cdFx0IHsgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0ICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMTUpO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogdmFyKCAtLWlvbi1mb250LXNpemUtMTcpO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKCAtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XHJcblx0XHRcdFx0bWFyZ2luOnZhciggLS1pb24tbWFyZ2luLTApIHZhciggLS1pb24tbWFyZ2luLTApIHZhciggLS1pb24tbWFyZ2luLTIwKTtcclxuXHRcdFx0XHRjb2xvcjp2YXIoIC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0LmFkZC1wYXltZW50LWJ0blxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdCAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdCB9XHJcblx0XHQgLyogcHJvZmlsZSBwYWdlICovXHJcblx0ICBbcHJvZHVjdC10YWJzIF1cclxuXHQgIHsgICBcclxuXHQgICAgIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdCBcclxuXHRcdCAgaW9uLXNlZ21lbnRcclxuXHRcdCAge1xyXG5cdFx0XHRcdCAgW2xpbmstbm90aWZpY2F0aW9uXVxyXG5cdFx0XHRcdCAge1xyXG5cdFx0ICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTQpIHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0XHRcdGN1cnNvcjpwb2ludGVyO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46ICB2YXIoLS1pb24tbWFyZ2luLTExKSB2YXIoLS1pb24tbWFyZ2luLTIwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHQgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0XHRcdCAgZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0XHQgIGJvcmRlcjpub25lO1xyXG5cdFx0XHRcdFx0XHRcdCAgYm9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXkyKTtcclxuXHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdGlvbi1zZWdtZW50LWJ1dHRvblxyXG5cdFx0XHRcdCAgeyAgICBcclxuXHRcdFx0XHQgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdCAgeyAgICAgICBib3JkZXI6bm9uZTtcclxuXHRcdFx0XHRcdCAgICAgaGVpZ2h0OiB2YXIoLS1pb24td2gtMzApO1xyXG5cdFx0XHRcdFx0ICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdFx0ICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTApO1xyXG5cdFx0XHRcdFx0XHQgICAgaW9uLWljb257XHJcblx0XHRcdFx0XHRcdFx0XHQgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0yMCk7XHJcblx0XHRcdFx0XHRcdFx0XHQgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHQgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdCAgIGlvbi1sYWJlbFxyXG5cdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdCAgIG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHQgICB9XHJcblx0XHRcdFx0ICAgXHJcblx0XHRcdCAgIFxyXG5cdFx0XHRcdCAgXHJcblx0XHRcdCAgfVxyXG5cdFx0ICB9XHJcblx0XHQgW3RhYi1jb250ZW50XVxyXG5cdFx0IHtcclxuICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTApIHZhcigtLWlvbi1wYWRkaW5nLTIwKSB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdFx0ICAgXHJcblx0XHRcdCAgXHJcblx0XHRcdCAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApIDtcclxuXHRcdFx0XHRcdGlvbi1saXN0XHJcblx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0ICBwYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdFx0XHQgICB9XHJcblx0XHRcdFx0IH1cdFx0XHRcdCBcclxuXHRcdFx0ICAgW3Byb2R1Y3QtdGFiXVxyXG5cdFx0XHQgICB7IC8qIFVzZXJzIExpc3QgU3RhcnQqL1xyXG5cdFx0XHQgICAmW3VzZXJzLWxpc3RdXHJcblx0XHR7XHJcblx0XHRcdCAgcGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0xNSk7XHRcclxuXHRcdFx0aW9uLWl0ZW1cclxuXHRcdFx0eyAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApO1xyXG5cdFx0XHRcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdFx0XHQtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG5cdFx0XHRcdGgzXHJcblx0XHRcdFx0eyAgIFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0XHRmb250LXdlaWdodDo3MDA7XHJcblx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdHttYXJnaW4tYm90dG9tOiAtNXB4O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW9uLW5vdGVcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG5cdFx0XHRcdGNvbG9yOiAjYTVhNWE1O1xyXG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMilcclxuXHRcdFx0XHR9XHJcblx0XHRcdCAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTApXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRwXHJcblx0XHRcdFx0e1xyXG5cdFx0XHQgICAgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpO1xyXG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMylcclxuXHRcdFx0XHR9XHJcblx0XHRcdCAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTIpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdCB9XHRcclxuXHRcdFx0ICAgLyogVXNlcnMgTGlzdCBFbmRzKi9cclxuXHRcdFx0XHQgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdCB7XHJcbiAgICAgICAgICAgICAgICAgICBib3JkZXI6bm9uZSAgIDtcclxuXHRcdFx0XHQgICBcclxuXHRcdFx0XHQgICAubWVkaWFcclxuXHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHQgICBtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMClcclxuXHRcdFx0XHQgICB9XHJcblx0XHRcdFx0ICAgLm1lZGlhLWxpbmtcclxuXHRcdFx0XHQgICB7ICAgIGJhY2tncm91bmQ6ICNjOGNjYzk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcclxuXHRcdFx0XHRcdFx0W25hbWUtdXNlcl1cclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2spO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0xMCk7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ICAgLm1lZGlhLW9iamVjdFxyXG5cdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHQgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHQgICB3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdFx0ICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0XHRcdFx0XHQgICBpbWdcclxuXHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMHB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwcHg7XHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0ICAgW2ltZy1lZGl0XVxyXG5cdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdFx0XHRcdCAgIGxhYmVsIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IHZhcigtLWlvbi13aC0zMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogdmFyKC0taW9uLXdoLTMwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6ICB2YXIoLS1pb24tdmFsdWUtMzUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogIHZhcigtLWlvbi12YWx1ZS01KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6IHZhcigtLWlvbi12YWx1ZS0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmlnaHQ6ICB2YXIoLS1pb24tdmFsdWUtMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdCAgIH1cclxuXHRcdFx0XHQgICAubWVkaWEtYm9keVxyXG5cdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdCAgIGlvbi1saXN0XHJcblx0XHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHRcdCAgIGlvbi1pdGVtXHJcblx0XHRcdFx0XHRcdCAgIHsgIFxyXG5cdFx0XHRcdFx0XHRcdCAgZm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHRcdCAgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTIpO1x0XHJcbmJvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1sdGdyZXkpO1xyXG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpb24tYnV0dG9uXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQgLS1ib3gtc2hhZG93Om5vbmU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdCB9XHRcdFx0XHQgXHJcblx0XHRcdCAgIH1cclxuXHRcdFx0IC5idG4tY2lyY2xlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IG1hcmdpbi1yaWdodDp2YXIoLS1pb24tbWFyZ2luLTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHdpZHRoOiB2YXIoLS1pb24td2gtMzApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGhlaWdodDogIHZhcigtLWlvbi13aC0zMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgbGluZS1oZWlnaHQ6ICB2YXIoLS1pb24td2gtMzApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHQvKkxvZ2luIERldGFpbCBTdGFydHMqL1xyXG5cdFx0XHQgICBbbG9naW4tZGV0YWlsXVxyXG5cdFx0XHQgICB7XHJcblx0XHRcdFx0ICAgaW9uLWJ1dHRvblxyXG5cdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdCAgIC0tYm94LXNoYWRvdzpub25lO1xyXG5cdFx0XHRcdFx0ICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHQgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMzBweDtcclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMzBweDtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7ICBcclxuXHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHQgICB9XHJcblx0XHRcdFx0ICAgIHRyXHJcblx0XHRcdFx0XHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGRcclxuXHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0ICBcclxuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEwKSAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1sdGdyZXkpICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHRcdFx0XHRcdH1cdFxyXG4gICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0IHsgICBpb24taXRlbVxyXG5cdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHQgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7IFxyXG5cdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHQgfVx0XHRcdFx0XHQgICBcclxuXHRcdFx0ICAgfVxyXG5cdFx0XHQgICAvKiBMb2dpbiBEZXRhaWwgRW5kcyAqL1xyXG5cdFx0XHQgICBcdC8qT3JkZXJzIFN0YXJ0cyovXHJcblx0XHRbb3JkZXJzXVxyXG5cdFx0IHtcclxuXHRcdFx0IFtoZWFkLWFjY291bnRdXHJcblx0XHRcdCB7XHJcblx0XHRcdFx0IG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0IH1cclxuXHRcdFx0IEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0IHtcclxuXHRcdFx0XHQgW21vYi1vcmRlcnNdXHJcblx0XHRcdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgaW9uLWl0ZW1cclxuXHRcdFx0XHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS00KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBoM1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgZm9udC13ZWlnaHQ6NzAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpb24tYmFkZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1pb24td2gtMTYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFthcnJvdy1zbWFsbF1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtwcmljZS10aW1lXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaDMgLCBpb24tbm90ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHQgfVxyXG5cdFx0XHQgdGFibGV7XHJcblx0XHRcdFx0XHRcdHRyXHJcblx0XHRcdFx0XHRcdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHRcdHRkXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTIwKSB2YXIoLS1pb24tcGFkZGluZy0xNSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dGggLCB0ZFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1sdGdyZXkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgXHJcblx0XHRcdFx0XHRcdFx0XHQgICAmW3ZpZXdfZGV0YWlsc11cclxuXHRcdFx0XHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFjdGlvbi1pY29uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIH1cdFx0XHRcdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHRcdCAgIGltZ1xyXG5cdFx0XHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgd2lkdGg6IHZhcigtLWlvbi13aC03MCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMnB4O1x0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogIHZhcigtLWlvbi13aC03MCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHRcdCAgIC5idG4tdGhlbWUge1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctNikgIHZhcigtLWlvbi1wYWRkaW5nLTEyKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHQmOmhvdmVyXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6MC44O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHQgfVxyXG5cdFx0ICAgXHQvKk9yZGVycyBFbmRzKi9cclxuXHRcdFx0W2Jsb2NrLXRpdGxlXXtcclxuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTUpO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsdWUpO1xyXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdCAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQgIHBhZGRpbmc6IHZhcigtLWlvbi12YWx1ZS0wKSAgICB2YXIoLS1pb24tdmFsdWUtMTUpIFx0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ICBcdC8qIEFkZCBFZGl0IEZvcm0gU3RhcnQqL1xyXG5cdFx0XHRbcGFuZWxdXHJcblx0XHRcdHsgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0ICBwYWRkaW5nOiB2YXIoLS1pb24tdmFsdWUtMCkgICAgdmFyKC0taW9uLXZhbHVlLTE1KSBcdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFtwYW5lbC1oZWFkaW5nXVxyXG5cdFx0XHRcdHsgICBcdGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0yMCk7XHJcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6ICB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcblx0XHRcdFx0XHRcdGg0XHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRhXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrMyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdCBzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7ICAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tMTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0yMCk7XHJcblx0XHRcdFx0XHRcdFx0XHQgfVx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0W3BhbmVsLWJvZHldXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ICAgIGJhY2tncm91bmQ6IHZhciggLS1pb24tY29sb3ItZ3JleWY4KTtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTApICB2YXIoLS1pb24tcGFkZGluZy0yMCkgIHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogIHZhcigtLWlvbi1tYXJnaW4tMjApO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTIwKTtcclxuXHRcdFx0XHRcdFx0ICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0ICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdCBpb24tYnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgaGVpZ2h0OnZhcigtLWlvbi13aC0zMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAtLWJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdFx0W2hlYWQtcGF5bWVudF1cclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdCAgICBmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogIHZhcigtLWlvbi1tYXJnaW4tMjApO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xOCk7XHJcblx0XHRcdFx0XHRcdFx0XHQgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgXHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcblx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LmNhcmQtcHN5c1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aW1nXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIHdpZHRoOiAyMDBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0IEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgd2lkdGg6IDE1MHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpb24tYnV0dG9uXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQtLWJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHRcdFx0XHQmOmhvdmVyXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTowLjg7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFtmb3JtLWdyb3VwXVxyXG5cdFx0XHQgIHtcclxuICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0ICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xMCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQgIGlvbi1sYWJlbFxyXG5cdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0ICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdHtmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIGRpc3BsYXk6YmxvY2s7XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0ICB9XHJcblx0XHRcdFx0ICBpb24taW5wdXQgLCBpb24tc2VsZWN0XHJcblx0XHRcdFx0ICB7ICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTMpO1xyXG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IHZhcigtLWlvbi13aC00MikhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICB2YXIoLS1pb24tcGFkZGluZy0xMCkgIHZhcigtLWlvbi1wYWRkaW5nLTEwKSFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHR7ICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBib3JkZXItcmFkaXVzOiB2YXIoLS1pb24tdmFsdWUtMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci13aWR0aDp2YXIoLS1pb24tdmFsdWUtMCkgdmFyKC0taW9uLXZhbHVlLTApIDFweCB2YXIoLS1pb24tdmFsdWUtMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICBpbmhlcml0IWltcG9ydGFudDsgIFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCAgfVxyXG5cdFx0XHRcdCAgXHJcblx0XHRcdCAgfVx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFx0LyogQWRkIEVkaXQgRm9ybSBFbmRzKi9cclxuXHRcdFx0LnRhYmxlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0clxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHR0ZFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctOSkgdmFyKC0taW9uLXBhZGRpbmctMTUpO1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QwZDBkMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0LndpZGdldCBcclxuXHRcdFx0e1xyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdHtcclxuXHRcdFx0ICBwYWRkaW5nOiB2YXIoLS1pb24tdmFsdWUtMCkgICAgdmFyKC0taW9uLXZhbHVlLTE1KSBcdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRbcHJvZmlsZV91bF1cclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTEwKTtcclxuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbHRncmV5KTtcclxuXHRcdFx0XHRib3gtc2hhZG93OiAwcHggMHB4IDIycHggMHB4ICNkY2RjZGM7XHJcblx0XHRcdFx0bGlzdC1zdHlsZTpub25lO1xyXG5cdFx0XHRcdFx0bGlcclxuXHRcdFx0XHRcdHsgXHJcblx0XHRcdFx0XHQgYVxyXG5cdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0ICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XHJcblx0XHRcdFx0XHRcdCAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICB2YXIoLS1pb24tdmFsdWUtNSkgIHZhcigtLWlvbi12YWx1ZS0wKSAgdmFyKC0taW9uLXZhbHVlLTUpICB2YXIoLS1pb24tdmFsdWUtMjApO1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXI6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbHRncmV5KTtcclxuXHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHRcdFx0XHRcdFx0JjpiZWZvcmUge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICdcXGYwYTknO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHRsZWZ0OiAgdmFyKC0taW9uLXZhbHVlLTApO1xyXG5cdFx0XHRcdFx0XHRcdHRvcDogdmFyKC0taW9uLXZhbHVlLTUpO1xyXG5cdFx0XHRcdFx0XHR9IFxyXG5cdFx0XHRcdFx0IFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0IH1cdFx0IFxyXG5cdCAgfVxyXG5cdH1cclxufVxyXG5cclxuXHJcblt0YWJzSW5zaWRlXXtcclxuXHRtYXgtd2lkdGg6IDcyMHB4O1xyXG5cdHdpZHRoOjgwJTtcclxuXHRtYXJnaW46MjVweCBhdXRvIDA7XHJcblx0YmFja2dyb3VuZDogI2VlZTtcclxuXHRib3JkZXItcmFkaXVzOjUwcHg7XHJcblx0aW9uLXNlZ21lbnQtYnV0dG9ue1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIFx0cGFkZGluZzogMCAyMHB4O1xyXG5cdFx0Ji5zZWdtZW50LWJ1dHRvbi1jaGVja2Vke1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbltjb21tZW50c0FyZWFde1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAwO1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgMDtcclxuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcblx0aDV7XHJcblx0XHRjb2xvcjogIzY2NjtcclxuXHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdG1hcmdpbjowIDIwcHggMTVweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0fVxyXG5cdFtzY3JvbGxBcmVhXXtcclxuXHRcdG1heC1oZWlnaHQ6IDQwMHB4O1xyXG5cdFx0b3ZlcmZsb3cteTogYXV0bztcclxuXHRcdHBhZGRpbmc6MCAyMHB4O1xyXG5cdH1cclxuXHRbY29tbnRSb3dde1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdG1hcmdpbjowIDAgMjBweDtcclxuXHRcdHNwYW57XHJcblx0XHRcdG1pbi13aWR0aDo1MHB4O1xyXG5cdFx0XHRpbWd7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdCAgICBoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdCAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG5cdFx0XHQgICAgbWFyZ2luOiAwIDI1cHggMCAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRbY29tbnRSaXRde1xyXG5cdFx0XHQvKm1hcmdpbi1sZWZ0OmF1dG87Ki9cclxuXHRcdFx0W2NvbW50Ymdde1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0XHRib3gtc2hhZG93OiAxcHggMXB4IDBweCByZ2JhKDAsMCwwLCAuMDMpO1xyXG5cdFx0XHRcdHBhZGRpbmc6NXB4IDEycHggMTBweDtcclxuXHRcdFx0XHRoM3tcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuXHRcdFx0XHRcdG1hcmdpbjowIDAgN3B4O1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMyMjI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHB7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDo0MDA7XHJcblx0XHRcdFx0XHRtYXJnaW46MCAwIDBweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAjNTU1O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRzbWFsbHtcclxuXHRcdFx0XHRtYXJnaW46MTBweCAwIDA7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRcdGNvbG9yOiAjODg4O1xyXG5cdFx0XHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5KTsgfVxuICBpb24tY29udGVudCAudXBkYXRlQnRuIHtcbiAgICBwb3NpdGlvbjogaW5oZXJpdDsgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZy0wKTtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy0wKTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZy0wKTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICBpb24tY29udGVudCAuY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApOyB9IH1cbiAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0ge1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMjApO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgLyogcHJvZmlsZSBwYWdlICovIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMCk7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gaW9uLWNvbCB7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7IH0gfVxuICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtoZWFkLWFjY291bnRdIHtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMTUpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE3KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya2JsdWUpO1xuICAgICAgbWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLTApIHZhcigtLWlvbi1tYXJnaW4tMCkgdmFyKC0taW9uLW1hcmdpbi0yMCk7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW2hlYWQtYWNjb3VudF0gLmFkZC1wYXltZW50LWJ0biB7XG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7IH1cbiAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpOyB9XG4gICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBpb24tc2VnbWVudCBbbGluay1ub3RpZmljYXRpb25dIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctNCkgdmFyKC0taW9uLXBhZGRpbmctMTUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMTEpIHZhcigtLWlvbi1tYXJnaW4tMjApOyB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIGlvbi1zZWdtZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXkyKTsgfSB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGhlaWdodDogdmFyKC0taW9uLXdoLTMwKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMCk7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTIwKTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibHVlKTsgfSB9XG4gICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEwKSB2YXIoLS1pb24tcGFkZGluZy0yMCkgdmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgICAgIC8qTG9naW4gRGV0YWlsIFN0YXJ0cyovXG4gICAgICAgIC8qIExvZ2luIERldGFpbCBFbmRzICovXG4gICAgICAgIC8qT3JkZXJzIFN0YXJ0cyovXG4gICAgICAgIC8qT3JkZXJzIEVuZHMqL1xuICAgICAgICAvKiBBZGQgRWRpdCBGb3JtIFN0YXJ0Ki9cbiAgICAgICAgLyogQWRkIEVkaXQgRm9ybSBFbmRzKi8gfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSB7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKTsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSBpb24tbGlzdCB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZy0wKTsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3Byb2R1Y3QtdGFiXSB7XG4gICAgICAgICAgLyogVXNlcnMgTGlzdCBTdGFydCovXG4gICAgICAgICAgLyogVXNlcnMgTGlzdCBFbmRzKi8gfVxuICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3Byb2R1Y3QtdGFiXVt1c2Vycy1saXN0XSB7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSk7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3Byb2R1Y3QtdGFiXVt1c2Vycy1saXN0XSBpb24taXRlbSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApO1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXkpOyB9XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3Byb2R1Y3QtdGFiXVt1c2Vycy1saXN0XSBpb24taXRlbSBoMyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwOyB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSBbcHJvZHVjdC10YWJdW3VzZXJzLWxpc3RdIGlvbi1pdGVtIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTsgfSB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSBbcHJvZHVjdC10YWJdW3VzZXJzLWxpc3RdIGlvbi1pdGVtIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgfSB9XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3Byb2R1Y3QtdGFiXVt1c2Vycy1saXN0XSBpb24taXRlbSBpb24tbm90ZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2E1YTVhNTsgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3Byb2R1Y3QtdGFiXVt1c2Vycy1saXN0XSBpb24taXRlbSBpb24tbm90ZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IH0gfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3Byb2R1Y3QtdGFiXVt1c2Vycy1saXN0XSBpb24taXRlbSBpb24tbm90ZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMCk7IH0gfVxuICAgICAgICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtwcm9kdWN0LXRhYl1bdXNlcnMtbGlzdF0gaW9uLWl0ZW0gcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTsgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3Byb2R1Y3QtdGFiXVt1c2Vycy1saXN0XSBpb24taXRlbSBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTsgfSB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSBbcHJvZHVjdC10YWJdW3VzZXJzLWxpc3RdIGlvbi1pdGVtIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtwcm9kdWN0LXRhYl0ge1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7IH1cbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSBbcHJvZHVjdC10YWJdIC5tZWRpYSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTsgfVxuICAgICAgICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtwcm9kdWN0LXRhYl0gLm1lZGlhLWxpbmsge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjOGNjYzk7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMjApO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3Byb2R1Y3QtdGFiXSAubWVkaWEtbGluayBbbmFtZS11c2VyXSB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMTApO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTsgfVxuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3Byb2R1Y3QtdGFiXSAubWVkaWEtbGluayAubWVkaWEtb2JqZWN0IHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3Byb2R1Y3QtdGFiXSAubWVkaWEtbGluayBpbWcge1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjsgfVxuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3Byb2R1Y3QtdGFiXSAubWVkaWEtbGluayBbaW1nLWVkaXRdIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1pb24td2gtMzApO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1pb24td2gtMzApO1xuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0zNSk7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTYpO1xuICAgICAgICAgICAgICAgICAgYm90dG9tOiB2YXIoLS1pb24tdmFsdWUtNSk7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IHZhcigtLWlvbi12YWx1ZS0wKTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMCk7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSBbcHJvZHVjdC10YWJdIC5tZWRpYS1ib2R5IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1sdGdyZXkpOyB9IH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3Byb2R1Y3QtdGFiXSAubWVkaWEtYm9keSBpb24tbGlzdCBpb24taXRlbSBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1ib3gtc2hhZG93Om5vbmU7IH0gfVxuICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIC5idG4tY2lyY2xlIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLTUpO1xuICAgICAgICAgIHdpZHRoOiB2YXIoLS1pb24td2gtMzApO1xuICAgICAgICAgIGhlaWdodDogdmFyKC0taW9uLXdoLTMwKTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0taW9uLXdoLTMwKTtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKTsgfVxuICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtsb2dpbi1kZXRhaWxdIGlvbi1idXR0b24ge1xuICAgICAgICAgIC0tYm94LXNoYWRvdzpub25lOyB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSBbbG9naW4tZGV0YWlsXSBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW2xvZ2luLWRldGFpbF0gdHIgdGQge1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEwKSAhaW1wb3J0YW50O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbHRncmV5KSAhaW1wb3J0YW50O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW2xvZ2luLWRldGFpbF0gaW9uLWl0ZW0ge1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW29yZGVyc10gW2hlYWQtYWNjb3VudF0ge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMCk7IH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW29yZGVyc10gW21vYi1vcmRlcnNdIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW29yZGVyc10gW21vYi1vcmRlcnNdIGlvbi1pdGVtIGltZyB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS00KTsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSBbb3JkZXJzXSBbbW9iLW9yZGVyc10gaW9uLWl0ZW0gaDMge1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpOyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtvcmRlcnNdIFttb2Itb3JkZXJzXSBpb24taXRlbSBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTApO1xuICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWlvbi13aC0xNik7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW29yZGVyc10gW21vYi1vcmRlcnNdIGlvbi1pdGVtIHAge1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW29yZGVyc10gW21vYi1vcmRlcnNdIGlvbi1pdGVtIFthcnJvdy1zbWFsbF0ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpOyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtvcmRlcnNdIFttb2Itb3JkZXJzXSBpb24taXRlbSBbcHJpY2UtdGltZV0gaDMsIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW29yZGVyc10gW21vYi1vcmRlcnNdIGlvbi1pdGVtIFtwcmljZS10aW1lXSBpb24tbm90ZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XG4gICAgICAgICAgICAgIG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbi0wKTsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSBbb3JkZXJzXSBbbW9iLW9yZGVyc10gaW9uLWl0ZW0gW3ByaWNlLXRpbWVdIGEge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSBbb3JkZXJzXSB0YWJsZSB0ciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtvcmRlcnNdIHRhYmxlIHRyIHRkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTIwKSB2YXIoLS1pb24tcGFkZGluZy0xNSk7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtvcmRlcnNdIHRhYmxlIHRyIHRoLCBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtvcmRlcnNdIHRhYmxlIHRyIHRkIHtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbHRncmV5KTsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSBbb3JkZXJzXSB0YWJsZSB0ciB0aFt2aWV3X2RldGFpbHNdIC5hY3Rpb24taWNvbnMsIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW29yZGVyc10gdGFibGUgdHIgdGRbdmlld19kZXRhaWxzXSAuYWN0aW9uLWljb25zIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSBbb3JkZXJzXSB0YWJsZSB0ciB0aCBpbWcsIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW29yZGVyc10gdGFibGUgdHIgdGQgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLWlvbi13aC03MCk7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWlvbi13aC03MCk7XG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtvcmRlcnNdIHRhYmxlIHRyIHRoIC5idG4tdGhlbWUsIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW29yZGVyc10gdGFibGUgdHIgdGQgLmJ0bi10aGVtZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibHVlKTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTYpIHZhcigtLWlvbi1wYWRkaW5nLTEyKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLWNvbG9yLWRhcmtibHVlKTsgfVxuICAgICAgICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtvcmRlcnNdIHRhYmxlIHRyIHRoIC5idG4tdGhlbWU6aG92ZXIsIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW29yZGVyc10gdGFibGUgdHIgdGQgLmJ0bi10aGVtZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44OyB9XG4gICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW2Jsb2NrLXRpdGxlXSB7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTUpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTsgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW2Jsb2NrLXRpdGxlXSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi12YWx1ZS0wKSB2YXIoLS1pb24tdmFsdWUtMTUpOyB9IH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3BhbmVsXSB7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tdmFsdWUtMCkgdmFyKC0taW9uLXZhbHVlLTE1KTsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3BhbmVsXSBbcGFuZWwtaGVhZGluZ10ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTIwKTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3BhbmVsXSBbcGFuZWwtaGVhZGluZ10gaDQgYSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbi0wKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSBbcGFuZWxdIFtwYW5lbC1oZWFkaW5nXSBoNCBhIHNwYW4ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbi0xMCk7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0yMCk7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSBbcGFuZWxdIFtwYW5lbC1ib2R5XSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZXlmOCk7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTApIHZhcigtLWlvbi1wYWRkaW5nLTIwKSB2YXIoLS1pb24tcGFkZGluZy0yMCk7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0yMCk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0yMCk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTsgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3BhbmVsXSBbcGFuZWwtYm9keV0ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKTsgfVxuICAgICAgICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtwYW5lbF0gW3BhbmVsLWJvZHldIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogdmFyKC0taW9uLXdoLTMwKTtcbiAgICAgICAgICAgICAgICAtLWJveC1zaGFkb3c6bm9uZTsgfSB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSBbcGFuZWxdIFtwYW5lbC1ib2R5XSBbaGVhZC1wYXltZW50XSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0yMCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTgpOyB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3BhbmVsXSBbcGFuZWwtYm9keV0gW2hlYWQtcGF5bWVudF0ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IH0gfVxuICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3BhbmVsXSBbcGFuZWwtYm9keV0gLmNhcmQtcHN5cyBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4OyB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3BhbmVsXSBbcGFuZWwtYm9keV0gLmNhcmQtcHN5cyBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDsgfSB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSBbcGFuZWxdIFtwYW5lbC1ib2R5XSBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIC0tYm94LXNoYWRvdzpub25lOyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtwYW5lbF0gW3BhbmVsLWJvZHldIGlvbi1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtwYW5lbF0gW3BhbmVsLWJvZHldIFtmb3JtLWdyb3VwXSB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApOyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtwYW5lbF0gW3BhbmVsLWJvZHldIFtmb3JtLWdyb3VwXSBpb24tbGFiZWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi01KTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtwYW5lbF0gW3BhbmVsLWJvZHldIFtmb3JtLWdyb3VwXSBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMCk7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7IH0gfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSBbcGFuZWxdIFtwYW5lbC1ib2R5XSBbZm9ybS1ncm91cF0gaW9uLWlucHV0LCBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtwYW5lbF0gW3BhbmVsLWJvZHldIFtmb3JtLWdyb3VwXSBpb24tc2VsZWN0IHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTMpO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWlvbi13aC00MikgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTApIHZhcigtLWlvbi1wYWRkaW5nLTEwKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpOyB9XG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIFtwYW5lbF0gW3BhbmVsLWJvZHldIFtmb3JtLWdyb3VwXSBpb24taW5wdXQsIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gW3BhbmVsXSBbcGFuZWwtYm9keV0gW2Zvcm0tZ3JvdXBdIGlvbi1zZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pb24tdmFsdWUtMCk7XG4gICAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IHZhcigtLWlvbi12YWx1ZS0wKSB2YXIoLS1pb24tdmFsdWUtMCkgMXB4IHZhcigtLWlvbi12YWx1ZS0wKTtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IGluaGVyaXQgIWltcG9ydGFudDsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gLnRhYmxlIHRyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpOyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSAudGFibGUgdHIgdGQge1xuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctOSkgdmFyKC0taW9uLXBhZGRpbmctMTUpO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQwZDA7IH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gLndpZGdldCB7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tdmFsdWUtMCkgdmFyKC0taW9uLXZhbHVlLTE1KTsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFt5b3VyLWFjY291bnRdIFtwcm9kdWN0LXRhYnNdIFt0YWItY29udGVudF0gLndpZGdldCBbcHJvZmlsZV91bF0ge1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS0xMCk7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWx0Z3JleSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyMnB4IDBweCAjZGNkY2RjO1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbeW91ci1hY2NvdW50XSBbcHJvZHVjdC10YWJzXSBbdGFiLWNvbnRlbnRdIC53aWRnZXQgW3Byb2ZpbGVfdWxdIGxpIGEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2spO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tdmFsdWUtNSkgdmFyKC0taW9uLXZhbHVlLTApIHZhcigtLWlvbi12YWx1ZS01KSB2YXIoLS1pb24tdmFsdWUtMjApO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbHRncmV5KTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3lvdXItYWNjb3VudF0gW3Byb2R1Y3QtdGFic10gW3RhYi1jb250ZW50XSAud2lkZ2V0IFtwcm9maWxlX3VsXSBsaSBhOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYwYTknO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiB2YXIoLS1pb24tdmFsdWUtMCk7XG4gICAgICAgICAgICAgIHRvcDogdmFyKC0taW9uLXZhbHVlLTUpOyB9XG5cblt0YWJzSW5zaWRlXSB7XG4gIG1heC13aWR0aDogNzIwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMjVweCBhdXRvIDA7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cbiAgW3RhYnNJbnNpZGVdIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7IH1cbiAgICBbdGFic0luc2lkZV0gaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xuICAgICAgY29sb3I6ICNmZmY7IH1cblxuW2NvbW1lbnRzQXJlYV0ge1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGJvdGg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICBwYWRkaW5nOiAyMHB4IDAgMDtcbiAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7IH1cbiAgW2NvbW1lbnRzQXJlYV0gaDUge1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDAgMjBweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiAgW2NvbW1lbnRzQXJlYV0gW3Njcm9sbEFyZWFdIHtcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMjBweDsgfVxuICBbY29tbWVudHNBcmVhXSBbY29tbnRSb3ddIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCAwIDIwcHg7IH1cbiAgICBbY29tbWVudHNBcmVhXSBbY29tbnRSb3ddIHNwYW4ge1xuICAgICAgbWluLXdpZHRoOiA1MHB4OyB9XG4gICAgICBbY29tbWVudHNBcmVhXSBbY29tbnRSb3ddIHNwYW4gaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgbWFyZ2luOiAwIDI1cHggMCAwOyB9XG4gICAgW2NvbW1lbnRzQXJlYV0gW2NvbW50Um93XSBbY29tbnRSaXRdIHtcbiAgICAgIC8qbWFyZ2luLWxlZnQ6YXV0bzsqLyB9XG4gICAgICBbY29tbWVudHNBcmVhXSBbY29tbnRSb3ddIFtjb21udFJpdF0gW2NvbW50YmddIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICAgICAgcGFkZGluZzogNXB4IDEycHggMTBweDsgfVxuICAgICAgICBbY29tbWVudHNBcmVhXSBbY29tbnRSb3ddIFtjb21udFJpdF0gW2NvbW50YmddIGgzIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDdweDtcbiAgICAgICAgICBjb2xvcjogIzIyMjsgfVxuICAgICAgICBbY29tbWVudHNBcmVhXSBbY29tbnRSb3ddIFtjb21udFJpdF0gW2NvbW50YmddIHAge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMHB4O1xuICAgICAgICAgIGNvbG9yOiAjNTU1OyB9XG4gICAgICBbY29tbWVudHNBcmVhXSBbY29tbnRSb3ddIFtjb21udFJpdF0gc21hbGwge1xuICAgICAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/your-account/your-account.page.ts":
/*!***************************************************!*\
  !*** ./src/app/your-account/your-account.page.ts ***!
  \***************************************************/
/*! exports provided: YourAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourAccountPage", function() { return YourAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _invoice_invoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../invoice/invoice.page */ "./src/app/invoice/invoice.page.ts");
/* harmony import */ var _password_instructions_password_instructions_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../password-instructions/password-instructions.page */ "./src/app/password-instructions/password-instructions.page.ts");
/* harmony import */ var _services_user_globalFooService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user/globalFooService.service */ "./src/app/services/user/globalFooService.service.ts");









var YourAccountPage = /** @class */ (function () {
    function YourAccountPage(globalFooService, cd, toastController, userService, loadingController, router, _zone, events, alertController, modalController, activatedRoute) {
        var _this = this;
        this.globalFooService = globalFooService;
        this.cd = cd;
        this.toastController = toastController;
        this.userService = userService;
        this.loadingController = loadingController;
        this.router = router;
        this._zone = _zone;
        this.events = events;
        this.alertController = alertController;
        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
        this.tabs = "posts";
        this.tabs2 = "posts2";
        this.tabsInside = "simpleposts";
        this.simpleContent = "";
        this.simpleAction = "add";
        this.simplePostId = "";
        this.buttonClicked = false;
        // EditpayClicked: boolean = false; 
        this.AddpayClicked = false;
        // editaddressClicked: boolean = false; 
        this.addaddressClicked = false;
        // editdetailClicked: boolean = false;  
        this.editpasswordClicked = false;
        this.buttonClickeddrop = false;
        this.is_logged_in = localStorage.getItem('is_login');
        this.is_login = localStorage.getItem('is_login');
        this.uploadedFile = "";
        this.uploadedFilePro = "";
        this.uploadedFileSuggestion = "";
        this.contentPoll = "";
        this.toggle = '0';
        this.current_address_id = null;
        this.errors = ['', null, undefined];
        this.isBrowser = localStorage.getItem('isBrowser');
        this.profile_ = {};
        this.my_wish_products = [];
        this.current_page = 1;
        this.pic_url = "http://dev.indiit.solutions/TJ/dev/dev/public/uploads/userprofile/";
        this.allowedMimes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp', 'video/mp4'];
        this.allowedProMimes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp'];
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_5__["config"].IMAGES_URL;
        this.globalFooService.getObservable().subscribe(function (data) {
            if (data.foo.page == 'suggestionDone') {
                // alert('login Here');
                _this.is_logged_in = 'true';
                _this.user_name = data.foo.data.name;
                _this.user_image = data.foo.data.profile_picture;
                // this.getSellerAccount();
                _this.getAllUsers();
                _this.getBlogs();
            }
        });
    }
    YourAccountPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (_this.errors.indexOf(params['address']) == -1) {
                if (params['address'] == 'true') {
                    _this.tabs = 'addresses';
                }
            }
        });
    };
    YourAccountPage.prototype.getAllUsers = function () {
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
    YourAccountPage.prototype.ionViewDidEnter = function () {
        var token = localStorage.getItem('sin_auth_token');
        this.is_login = localStorage.getItem('is_login');
        this.userImage = localStorage.getItem('sin_auth_user_image');
        this.userId = this.userService.decryptData(token, _config__WEBPACK_IMPORTED_MODULE_5__["config"].ENC_SALT);
        if (this.userId != 0) {
            this.getProfile();
            this.getBlogs();
            this.getOrders();
            this.getWishedProducts();
        }
    };
    YourAccountPage.prototype.showAllPros = function (postID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        localStorage.setItem('goForSuggestPost', postID);
                        return [4 /*yield*/, this.modalController.create({
                                component: _password_instructions_password_instructions_page__WEBPACK_IMPORTED_MODULE_7__["PasswordInstructionsPage"],
                                cssClass: 'pswdPopover'
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    YourAccountPage.prototype.getBlogs = function () {
        var _this = this;
        var dict = {
            'user_id': localStorage.getItem('sin_auth_userId')
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
    };
    YourAccountPage.prototype.deletePost = function (post_id) {
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
    YourAccountPage.prototype.makeToggle = function (post_id) {
        this.toggle = post_id;
        this.cd.detectChanges();
    };
    YourAccountPage.prototype.HideToggle = function () {
        this.toggle = '0';
        this.cd.detectChanges();
    };
    YourAccountPage.prototype.productDetailPage = function (productId) {
        this.router.navigate(['/product-details/' + productId]);
    };
    YourAccountPage.prototype.editPost = function (post) {
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
    YourAccountPage.prototype.arrayOne = function (n) {
        return Array(n);
    };
    YourAccountPage.prototype.atob = function (string) {
        return atob(string);
    };
    YourAccountPage.prototype.paginate = function (page) {
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
    YourAccountPage.prototype.addPost = function (content, file) {
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
    YourAccountPage.prototype.updatePost = function (content, postId) {
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
    YourAccountPage.prototype.cancelSimple = function () {
        this.tabs = "posts";
        this.content = "";
        this.simpleAction = "add";
        this.simplePostId = "";
    };
    YourAccountPage.prototype.addProductPost = function (desc, product_name, price, filepro) {
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
    YourAccountPage.prototype.addSuggestionPost = function (suggestion, fileSuggestion) {
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
    YourAccountPage.prototype.addPollPost = function (contentPoll, button1, button2) {
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
    YourAccountPage.prototype.givePoll = function (postData, selection) {
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
    YourAccountPage.prototype.getProfile = function () {
        var _this = this;
        this.presentLoading();
        this.userService.postData({ userId: this.userId }, 'getProfile').subscribe(function (result) {
            _this.profile = result.profile;
            _this.countries = result.countries;
            _this.addresses = result.addresses;
            _this.cards = result.cards;
            _this.purchase_All = result.purchase_All;
            _this.purchase_days7 = result.purchase_days7;
            _this.purchase_days30 = result.purchase_days30;
            _this.stopLoading();
            if (_this.profile != '') {
                _this.initialize();
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    YourAccountPage.prototype.getOrders = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId }, 'getAllOrders').subscribe(function (result) {
            _this.orders = result.orders;
            _this.registries = result.registries;
            console.log(result);
        }, function (err) {
            _this.orders = [];
        });
    };
    YourAccountPage.prototype.getWishedProducts = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId }, 'getCartProductsIds').subscribe(function (result) {
            _this.my_wish_products = result.wishlist;
        }, function (err) {
            _this.my_wish_products = [];
        });
    };
    YourAccountPage.prototype.initialize = function () {
        this.profile_name = this.profile.name;
        this.profile_last_name = this.profile.last_name;
        this.profile_email = this.profile.email;
        this.profile_phone = this.profile.phone;
        this.profile_address = this.profile.address;
        this.profile_city = this.profile.city;
        this.profile_state = this.profile.state;
        this.profile_country = this.profile.country;
        this.user_created_at = this.profile.created_at;
        this.user_last_login = this.profile.last_login;
    };
    YourAccountPage.prototype.editProfile = function () {
        var self = this;
        if (this.buttonClicked == false) {
            this.scroll(580);
            this.initialize();
        }
        this.buttonClicked = !this.buttonClicked;
    };
    YourAccountPage.prototype.updateProfile = function () {
        var _this = this;
        if (this.errors.indexOf(this.profile_name) >= 0) {
            this.presentToast('Please enter first name.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.profile_last_name) >= 0) {
            this.presentToast('Please enter last name.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.profile_email) >= 0) {
            this.presentToast('Please enter email address.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.profile_phone) >= 0) {
            this.presentToast('Please enter phone number.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.profile_address) >= 0) {
            this.presentToast('Please enter address.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.profile_city) >= 0) {
            this.presentToast('Please enter city.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.profile_state) >= 0) {
            this.presentToast('Please enter state.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.profile_country) >= 0) {
            this.presentToast('Please select country.', 'danger');
            return false;
        }
        this.presentLoading();
        var data = {
            id: this.userId,
            name: this.profile_name,
            last_name: this.profile_last_name,
            email: this.profile_email,
            phone: this.profile_phone,
            address: this.profile_address,
            city: this.profile_city,
            state: this.profile_state,
            country: this.profile_country,
        };
        this.userService.postData(data, 'updateUserProfile').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.profile = result.data;
                _this.editProfile();
                _this.presentToast('Profile updated successfully.', 'success');
                _this.scroll(0);
                _this.profile.profile_picture = result.data.profile_picture;
                var data_ = {
                    name: _this.profile_name + ' ' + _this.profile_last_name,
                    profile_picture: _this.profile.profile_picture
                };
                _this.events.publish('user_logged_in:true', data_);
                localStorage.setItem('sin_auth_user_name', data_.name);
                localStorage.setItem('sin_auth_user_image', data_.profile_picture);
            }
            else if (result.status == 2) {
                _this.presentToast('Email already exists.', 'danger');
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    YourAccountPage.prototype.invoice = function (order_details) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _invoice_invoice_page__WEBPACK_IMPORTED_MODULE_6__["InvoicePage"],
                            componentProps: { order: order_details }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    YourAccountPage.prototype.uploadImg1 = function (event) {
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
    YourAccountPage.prototype.uploadImg = function (event) {
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
                this.userService.postData(formData, 'updateProfilePic').subscribe(function (result) {
                    _this.stopLoading();
                    if (result.status == 1) {
                        _this.profile.profile_picture = result.data;
                        var data_ = {
                            name: _this.profile_name + ' ' + _this.profile_last_name,
                            profile_picture: _this.profile.profile_picture
                        };
                        _this.events.publish('user_logged_in:true', data_);
                        localStorage.setItem('sin_auth_user_name', data_.name);
                        localStorage.setItem('sin_auth_user_image', data_.profile_picture);
                        _this.presentToast('Profile picture updated successfully.', 'success');
                    }
                    else {
                        _this.presentToast('Error while updating image,Please try later.', 'danger');
                    }
                }, function (err) {
                    _this.stopLoading();
                    _this.presentToast('Error while updating image,Please try later.', 'danger');
                });
            }
        }
    };
    YourAccountPage.prototype.uploadProImg = function (event) {
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
    YourAccountPage.prototype.uploadSuggesImg = function (event) {
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
    YourAccountPage.prototype.scroll = function (position) {
        var self = this;
        this._zone.run(function () {
            setTimeout(function () {
                self.content.scrollToPoint(0, position, 2000);
            });
        });
    };
    YourAccountPage.prototype.cancelProfile = function () {
        this.editProfile();
        this.scroll(0);
    };
    // Editpay() {
    //   this.EditpayClicked = !this.EditpayClicked;
    // } 
    YourAccountPage.prototype.Addpay = function (type, c_index, card) {
        if (type === void 0) { type = null; }
        if (c_index === void 0) { c_index = null; }
        if (card === void 0) { card = {}; }
        this.AddpayClicked = !this.AddpayClicked;
        if (this.AddpayClicked == true) {
            this.scroll(170 + (this.cards.length * 55));
        }
        this.cards_title = 'Add New';
        this.isEdit_card = 0;
        this.initializePaymentCard({
            current_card_id: '', pay_card_number: '', pay_card_type: '', pay_expiry_month: '', pay_expiry_year: '', pay_cvv: ''
        });
        if (this.AddpayClicked == true && type == 'edit') {
            this.isEdit_card = 1;
            this.current_card_index = c_index;
            this.cards_title = 'Edit';
            this.initializePaymentCard(card);
        }
    };
    YourAccountPage.prototype.cancelPay = function () {
        this.AddpayClicked = false;
        this.scroll(0);
    };
    YourAccountPage.prototype.initializePaymentCard = function (card) {
        this.current_card_id = card.card_id;
        this.pay_card_number = card.card_number;
        this.pay_card_type = card.card_type;
        this.pay_expiry_month = card.expiry_month;
        this.pay_expiry_year = card.expiry_year;
        this.pay_cvv = card.cvv;
    };
    // editaddressClick() {
    //    this.editaddressClicked = !this.editaddressClicked;
    //  } 
    YourAccountPage.prototype.addaddressClick = function (type, address, a_index) {
        if (type === void 0) { type = null; }
        if (address === void 0) { address = {}; }
        if (a_index === void 0) { a_index = null; }
        this.addaddressClicked = !this.addaddressClicked;
        if (this.addaddressClicked == true) {
            this.scroll(170 + (this.addresses.length * 55));
        }
        this.address_title = 'Add New';
        this.isEdit = 0;
        this.initializeAddress({
            address_first_name: '', address_last_name: '', full_address: '', address_city: '', address_state: '', address_country: '', address_zip_code: '', address_phone: '', set_as_default: 0
        });
        if (this.addaddressClicked == true && type == 'edit') {
            this.isEdit = 1;
            this.current_address_index = a_index;
            this.address_title = 'Edit';
            this.initializeAddress(address);
        }
    };
    YourAccountPage.prototype.initializeAddress = function (address) {
        this.current_address_id = address.address_id;
        this.ad_first_name = address.address_first_name;
        this.ad_last_name = address.address_last_name;
        this.ad_address = address.full_address;
        this.ad_city = address.address_city;
        this.ad_state = address.address_state;
        this.ad_country = address.address_country;
        this.ad_zip = address.address_zip_code;
        this.ad_phone = address.address_phone;
        this.ad_is_default = address.set_as_default;
    };
    YourAccountPage.prototype.cancelAddAdress = function () {
        this.addaddressClick();
        this.scroll(0);
    };
    YourAccountPage.prototype.saveAddress = function (ad_first_name, ad_last_name, ad_address, ad_city, ad_state, ad_country, ad_zip, ad_phone, ad_is_default) {
        var _this = this;
        if (this.errors.indexOf(ad_first_name) >= 0) {
            this.presentToast('Please enter first name.', 'danger');
            return false;
        }
        if (this.errors.indexOf(ad_last_name) >= 0) {
            this.presentToast('Please enter last name.', 'danger');
            return false;
        }
        if (this.errors.indexOf(ad_address) >= 0) {
            this.presentToast('Please enter address.', 'danger');
            return false;
        }
        if (this.errors.indexOf(ad_city) >= 0) {
            this.presentToast('Please enter city.', 'danger');
            return false;
        }
        if (this.errors.indexOf(ad_state) >= 0) {
            this.presentToast('Please enter state.', 'danger');
            return false;
        }
        if (this.errors.indexOf(ad_country) >= 0) {
            this.presentToast('Please select country.', 'danger');
            return false;
        }
        if (this.errors.indexOf(ad_zip) >= 0) {
            this.presentToast('Please enter zip code.', 'danger');
            return false;
        }
        if (this.errors.indexOf(ad_phone) >= 0) {
            this.presentToast('Please enter phone number.', 'danger');
            return false;
        }
        var data = {
            address_first_name: ad_first_name,
            address_last_name: ad_last_name,
            full_address: ad_address,
            address_city: ad_city,
            address_state: ad_state,
            address_country: ad_country,
            address_zip_code: ad_zip,
            address_phone: ad_phone,
            set_as_default: (ad_is_default == true) ? 1 : 0,
            isAdd: (this.isEdit == 1) ? 0 : 1,
            user_id: this.userId,
            address_id: this.current_address_id
        };
        this.presentLoading();
        this.userService.postData(data, 'updateUserAddress').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                if (data.isAdd == 1) {
                    _this.addresses.splice(0, 0, result.data);
                }
                else {
                    _this.addresses[_this.current_address_index] = result.data;
                }
                _this.addaddressClick();
                var msg = (data.isAdd == 1) ? 'added' : 'updated';
                _this.presentToast('Address ' + msg + ' successfully.', 'success');
                _this.scroll(0);
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    YourAccountPage.prototype.updatePaymentCard = function (card_number, card_type, expiry_month, expiry_year, cvv) {
        var _this = this;
        if (this.errors.indexOf(card_number) >= 0) {
            this.presentToast('Please enter card number.', 'danger');
            return false;
        }
        if (this.errors.indexOf(card_type) >= 0) {
            this.presentToast('Please select card type.', 'danger');
            return false;
        }
        if (this.errors.indexOf(expiry_month) >= 0) {
            this.presentToast('Please enter expiry month.', 'danger');
            return false;
        }
        if (this.errors.indexOf(expiry_year) >= 0) {
            this.presentToast('Please enter expiry year.', 'danger');
            return false;
        }
        if (this.errors.indexOf(cvv) >= 0) {
            this.presentToast('Please enter card cvv.', 'danger');
            return false;
        }
        var data = {
            card_number: card_number,
            card_type: card_type,
            expiry_month: expiry_month,
            expiry_year: expiry_year,
            cvv: cvv,
            isAdd: (this.isEdit_card == 1) ? 0 : 1,
            user_id: this.userId,
            card_id: this.current_card_id
        };
        this.presentLoading();
        this.userService.postData(data, 'addPaymentCard').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                if (data.isAdd == 1) {
                    _this.cards.splice(0, 0, result.data);
                }
                else {
                    _this.cards[_this.current_card_index] = result.data;
                }
                _this.Addpay();
                var msg = (data.isAdd == 1) ? 'added' : 'updated';
                _this.presentToast('Card ' + msg + ' successfully.', 'success');
                _this.scroll(0);
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    YourAccountPage.prototype.deleteAddress = function (address_id, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Are you sure you want to delete?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (res) {
                                        console.log('Cancel');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.presentLoading();
                                        _this.userService.postData({ address_id: address_id }, 'deleteUserAddress').subscribe(function (result) {
                                            _this.stopLoading();
                                            if (result.status == 1) {
                                                _this.addresses.splice(index, 1);
                                                _this.presentToast('Address deleted successfully.', 'success');
                                            }
                                            else {
                                                _this.presentToast('Error,Please try after some time.', 'danger');
                                            }
                                        }, function (err) {
                                            _this.presentToast('Error,Please try after some time.', 'danger');
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    YourAccountPage.prototype.deleteCard = function (card_id, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Are you sure you want to delete?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (res) {
                                        console.log('Cancel');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.presentLoading();
                                        _this.userService.postData({ card_id: card_id }, 'deleteUserCard').subscribe(function (result) {
                                            _this.stopLoading();
                                            if (result.status == 1) {
                                                _this.cards.splice(index, 1);
                                                _this.presentToast('Card deleted successfully.', 'success');
                                            }
                                            else {
                                                _this.presentToast('Error,Please try after some time.', 'danger');
                                            }
                                        }, function (err) {
                                            _this.presentToast('Error,Please try after some time.', 'danger');
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    YourAccountPage.prototype.setAddressDefault = function (address_id, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Are you sure you want to set this address your default?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (res) {
                                        console.log('Cancel');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.presentLoading();
                                        _this.userService.postData({ address_id: address_id, user_id: _this.userId }, 'setDefaultAddress').subscribe(function (result) {
                                            _this.stopLoading();
                                            if (result.status == 1) {
                                                _this.updateDefaultAddressOption(index);
                                                _this.presentToast('Address marked as default successfully.', 'success');
                                            }
                                            else {
                                                _this.presentToast('Error,Please try after some time.', 'danger');
                                            }
                                        }, function (err) {
                                            _this.presentToast('Error,Please try after some time.', 'danger');
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    YourAccountPage.prototype.updateDefaultAddressOption = function (index) {
        if (this.addresses.length > 0) {
            for (var i = 0; i < this.addresses.length; i++) {
                if (index != i) {
                    this.addresses[i]['set_as_default'] = 0;
                }
                else {
                    this.addresses[i]['set_as_default'] = 1;
                }
            }
        }
    };
    // editdetailClick() {
    //    this.editdetailClicked = !this.editdetailClicked;
    //  } 
    YourAccountPage.prototype.editpasswordClick = function () {
        this.editpasswordClicked = !this.editpasswordClicked;
        if (this.editpasswordClicked == true) {
            this.scroll(320);
        }
    };
    YourAccountPage.prototype.cancelPassword = function () {
        this.editpasswordClick();
        this.scroll(0);
    };
    YourAccountPage.prototype.updatePassword = function (current_password, new_password, confirm_password) {
        var _this = this;
        if (this.errors.indexOf(current_password) >= 0) {
            this.presentToast('Please enter current password.', 'danger');
            return false;
        }
        if (this.errors.indexOf(new_password) >= 0) {
            this.presentToast('Please enter new password.', 'danger');
            return false;
        }
        var passExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])(?!.*\s).{8,15}$/;
        if (!passExp.test(new_password)) {
            this.presentToast('New password should have min. 8 characters, One UpperCase & One Lowercase & one special character.', 'danger');
            return false;
        }
        if (this.errors.indexOf(confirm_password) >= 0) {
            this.presentToast('Please re-enter new password.', 'danger');
            return false;
        }
        if (new_password != confirm_password) {
            this.presentToast('Please re-enter the same new password.', 'danger');
            return false;
        }
        this.presentLoading();
        this.userService.postData({ current_password: current_password, new_password: new_password, userId: this.userId }, 'updateUserPassword').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.cancelPassword();
                _this.presentToast('Password updated successfully.', 'success');
                _this.current_password = '';
                _this.new_password = '';
                _this.confirm_password = '';
            }
            else if (result.status == 2) {
                _this.presentToast('Invalid current password.', 'danger');
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    YourAccountPage.prototype.onButtonClickdrop = function () {
        this.buttonClickeddrop = !this.buttonClickeddrop;
    };
    YourAccountPage.prototype.presentToast = function (message, color) {
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
    YourAccountPage.prototype.presentLoading = function () {
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
    YourAccountPage.prototype.stopLoading = function () {
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
    YourAccountPage.prototype.convertIntoNumber = function (value) {
        if (typeof (value) == 'string') {
            return Number(value).toFixed(2);
        }
        else {
            return value;
        }
    };
    YourAccountPage.prototype.userAlreadyExist = function (blog) {
        var userExists = false;
        for (var i = 0; i < blog.polling_data.length; i++) {
            if (blog.id == blog.polling_data[i].poll_by_user) {
                userExists = true;
            }
        }
        return userExists;
    };
    YourAccountPage.prototype.userAlreadyExistWithButton1 = function (blog) {
        var userExists = false;
        for (var i = 0; i < blog.polling_data.length; i++) {
            if (blog.id == blog.polling_data[i].poll_by_user && blog.button1 == blog.polling_data[i].poll_reply) {
                userExists = true;
            }
        }
        return userExists;
    };
    YourAccountPage.prototype.userAlreadyExistWithButton2 = function (blog) {
        var userExists = false;
        for (var i = 0; i < blog.polling_data.length; i++) {
            if (blog.id == blog.polling_data[i].poll_by_user && blog.button2 == blog.polling_data[i].poll_reply) {
                userExists = true;
            }
        }
        return userExists;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], YourAccountPage.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], YourAccountPage.prototype, "contentPage", void 0);
    YourAccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-your-account',
            template: __webpack_require__(/*! ./your-account.page.html */ "./src/app/your-account/your-account.page.html"),
            styles: [__webpack_require__(/*! ./your-account.page.scss */ "./src/app/your-account/your-account.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_globalFooService_service__WEBPACK_IMPORTED_MODULE_8__["GlobalFooService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], YourAccountPage);
    return YourAccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=your-account-your-account-module.js.map