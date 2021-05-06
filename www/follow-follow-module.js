(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["follow-follow-module"],{

/***/ "./src/app/follow/follow.module.ts":
/*!*****************************************!*\
  !*** ./src/app/follow/follow.module.ts ***!
  \*****************************************/
/*! exports provided: FollowPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowPageModule", function() { return FollowPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _follow_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./follow.page */ "./src/app/follow/follow.page.ts");









var routes = [
    {
        path: '',
        component: _follow_page__WEBPACK_IMPORTED_MODULE_8__["FollowPage"]
    }
];
var FollowPageModule = /** @class */ (function () {
    function FollowPageModule() {
    }
    FollowPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderPageModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_follow_page__WEBPACK_IMPORTED_MODULE_8__["FollowPage"]]
        })
    ], FollowPageModule);
    return FollowPageModule;
}());



/***/ }),

/***/ "./src/app/follow/follow.page.html":
/*!*****************************************!*\
  !*** ./src/app/follow/follow.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\t<app-header ></app-header>\n\t<div header_height></div>\n\t\n\t<div breadcrumb  class=\"ion-hide-md-down\" style=\"margin:10px\">\n\t\t\t\t<div breadcrumb-inner>\n\t\t\t\t\t<ul list-inline list-unstyled style='margin:0 0 15px 0'>\n\t\t\t\t\t    <li style=\"float:left;margin:0 10px 0 0\">\n\t\t\t\t\t    \t<a routerLink=\"/blog\">Home / </a>\n\t\t\t\t\t    </li>\n\t\t\t\t\t\t<li class=\"active\">Follow</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- /.breadcrumb-inner -->\n\t\t</div>\n\n\t<div followPage>\n\t\t<div product-tabs> \n\t\t  \t<ion-segment [(ngModel)]=\"tabs\" class=\"\">\n\t\t\t  \t<ion-segment-button value=\"Buyer\">Buyers</ion-segment-button>\n\t\t\t  \t<ion-segment-button value=\"Shops\">Shops</ion-segment-button>\n\t\t\t  \t<ion-segment-button value=\"Requests\">Requests</ion-segment-button>\n\t\t\t</ion-segment>\n\t\t    <div  tab-content [ngSwitch]=\"tabs\">\n\t\t\t\t<ion-list *ngSwitchCase=\"'Buyer'\">\n\t\t\t\t\t<ul style=\"height:400px;overflow-y: scroll;\">\n\t\t\t\t\t\t<li *ngFor=\"let usr of users\">\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{usr?.profile_picture}}\" alt=\"\">\n\t\t\t\t\t\t\t\t<h4>{{usr?.name}} {{usr?.lastname}}</h4>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" *ngIf='usr?.approved == \"0\"' style=\"border-color:orange;color:orange;\">\n\t\t\t\t\t\t\t\tRequested\n\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)='unfollow_user(usr)' *ngIf='usr?.approved == \"1\"'>\n\t\t\t\t\t\t\t\tUnFollow\n\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)='follow_user(usr)' *ngIf='usr?.approved == \"NA\" || usr?.approved == \"2\"' style=\"border-color:green;color:green;\">\n\t\t\t\t\t\t\t\tFollow\n\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t<!-- <a href=\"javascript:void(0)\" (click)='follow_user(usr)' *ngIf='usr?.followedUser == \"0\"' style=\"border-color:green;color:green;\">\n\t\t\t\t\t\t\t\tFollow\n\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)='unfollow_user(usr)' *ngIf='usr?.followedUser == \"1\"'>\n\t\t\t\t\t\t\t\tUnFollow\n\t\t\t\t\t\t\t</a> -->\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<ul *ngIf=\"users?.length == 0\">\n\t\t\t\t\t\t<li>No any user(s) yet!</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</ion-list>\n\n\t\t\t\t<!-- GET ALL SHOPS -->\n\t\t\t\t<ion-list *ngSwitchCase=\"'Shops'\">\n\t\t\t\t\t<span *ngIf=\"sellers?.length > 0\">\n\t\t\t\t\t\t<ul style=\"height:400px;overflow-y: scroll;\">\n\t\t\t\t\t\t\t<li *ngFor=\"let usr of sellers\">\n\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{usr?.profile_picture}}\" alt=\"\">\n\t\t\t\t\t\t\t\t\t<h4>{{usr?.shop_name}}</h4>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)='follow_seller(usr)' *ngIf='usr?.followedUser == \"0\"' style=\"border-color:green;color:green;\">\n\t\t\t\t\t\t\t\t\tFollow\n\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)='unfollow_seller(usr)' *ngIf='usr?.followedUser == \"1\"'>\n\t\t\t\t\t\t\t\t\tUnFollow\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</span>\n\n\t\t\t\t\t<ul *ngIf=\"sellers?.length == 0\">\n\t\t\t\t\t\t<li>No any shop(s) yet!</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</ion-list>\n\n\t\t\t\t<!-- GET ALL REQUEST -->\n\t\t\t\t<ion-list *ngSwitchCase=\"'Requests'\">\n\t\t\t\t\t<span *ngIf=\"requests?.length > 0\">\n\t\t\t\t\t\t<ul style=\"height:400px;overflow-y: scroll;\">\n\t\t\t\t\t\t\t<li *ngFor=\"let usr of requests\">\n\t\t\t\t\t\t\t\t<div *ngIf='usr?.approved == \"0\"' style=\"float:left;width:100%\">\n\t\t\t\t\t\t\t\t\t<span style=\"float:left\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{pic_url}}{{usr?.profile_picture}}\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<h4>{{usr?.name}} {{usr?.last_name}}</h4>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf='usr?.approved == \"0\"' style=\"right: 27px; position: absolute;\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)='accept(usr?.id)' style=\"padding:0;color:green;border:none;margin-right:​9px!important;\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)='reject(usr?.id)' style=\"padding:0;color:red;border:none;\">\n\t\t\t\t\t\t\t\t\t\t\t&nbsp;<i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div *ngIf='usr?.approved == \"1\"' style=\"position:absolute;right:25px\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"color:green;border: none;font-weight: bold;\">\n\t\t\t\t\t\t\t\t\t\t\tAccepted\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div *ngIf='usr?.approved == \"2\"' style=\"position:absolute;right:25px\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" style=\"color:red;border: none;font-weight: bold;\">\n\t\t\t\t\t\t\t\t\t\t\tRejected\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</span>\n\n\t\t\t\t\t<ul *ngIf=\"requests?.length == 0\">\n\t\t\t\t\t\t<li>No request yet!</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- <div class=\"ion-padding\">\n\t\t<div header_height></div>\n\t\t<div breadcrumb  class=\"ion-hide-md-down\">\t\t\n\t\t\t<div breadcrumb-inner>\n\t\t\t\t<ul list-inline list-unstyled style='margin:0 0 15px 0'>\n\t\t\t\t\t    <li style=\"float:left;margin:0 10px 0 0\">\n\t\t\t\t\t    \t<a routerLink=\"/home\">Home</a></li>\n\t\t\t\t\t<li class=\"active\">messages</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t   \t<ion-row>\n\t\t   <ion-col size-lg=\"4\" size-md=\"3\">\n\t\t   \t\t<div class=\"headind_srch\">\n\t\t\t\t\t<div class=\"recent_heading\">\n\t\t\t\t\t  <h4>Recent</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"srch_bar\">\n\t\t\t\t\t  <div class=\"stylish-input-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"search-bar\"  placeholder=\"Search\" >\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"inbox_chat scroll\" *ngFor=\"let user of chat_users\">\n\t\t\t\t\t<div class=\"chat_list active_chat\" (click)=\"getChat(user)\">\n\t\t\t\t\t  <div class=\"chat_people\">\n\t\t\t\t\t\t<div class=\"chat_img\"> \n\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(user?.profile_picture) >= 0\" src=\"assets/images/default.png\">\n\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(user?.profile_picture) == -1\" src=\"{{IMAGES_URL}}/userprofile/{{user?.profile_picture}}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"chat_ib\">\n\t\t\t\t\t\t  <h5>{{user.to_user_type}} <span class=\"chat_date\">{{user.created_at | timeAgo}}</span></h5>\n\t\t\t\t\t\t  <p>{{user.message}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t    </ion-col>\n\t\t\t<ion-col size-lg=\"8\" size-md=\"9\">\n\t\t\t\t<div messages-list>\t\n\t\t\t\t\t<ng-container *ngIf=\"is_chat_window == true\">\t\t\t\t\t\n\t\t\t\t\t\t<ng-container *ngIf=\"is_chat_loaded == true\">\t\t\t\t\n\t\t\t\t\t\t\t<div chat-head class=\"ion-hide-sm-down\">\t\t\t\t\n\t\t\t\t\t\t\t\t<h3 chat-title> name name </h3>\n\t\t\t\t\t\t\t</div>\t\n\t\t                    <div top-chat>\n\t\t                    \t<ng-container *ngFor=\"let chat of chat_list\">\t\t\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\" [ngClass]=\"chat.from_user_id == userId ? 'chat-right' : 'chat-left'\" no-padding>\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"{{chat.from_user_id == userId ? 'end' : 'start'}}\">\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"chat.from_user_id == userId\">\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(chat?.user_profile_picture) >= 0\" src=\"assets/images/default.png\">\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(chat?.user_profile_picture) == -1\" src=\"{{IMAGES_URL}}/userprofile/{{chat?.user_profile_picture}}\">\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"chat.from_user_id != userId\">\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(chat?.profile_picture) >= 0\" src=\"assets/images/default.png\">\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(chat?.profile_picture) == -1\" src=\"{{IMAGES_URL}}/{{chat?.from_user_type == 'vendor' ? 'vendors' : 'sub_users'}}/{{chat?.profile_picture}}\">\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t<p>{{chat.message}}</p>\n\t\t\t\t\t\t\t\t\t\t<ion-note><ion-icon name=\"timer\"></ion-icon> {{chat.created_at | timeAgo}}</ion-note>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div chat-bottom class=\"ion-hide-sm-down\">\n\t\t\t\t\t\t\t\t<form (ngSubmit)=\"addChat(message)\" name=\"chat_form_web\">\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"message\" name=\"message\" placeholder=\"Send a Message\"></ion-input>\n\t\t\t\t\t\t\t\t\t<ion-button type=\"submit\" color=\"darkred\" style='position:initial;'> <ion-icon name=\"paper-plane\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t<ng-container *ngIf=\"is_chat_loaded == false\">\n\t\t\t\t\t\t\t<div top-chat>\t\t\t\t\n\t\t\t\t\t\t\t\t<h3 chat-title> Loading chat... </h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t<ng-container *ngIf=\"is_chat_window == false\">\n\t\t\t\t\t\t<div top-chat>\t\t\t\t\n\t\t\t\t\t\t\t<h3 chat-title> Click on users list to chat... </h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t \t</ion-row>\t\n\t\t<ion-footer class=\"ion-hide-md-up\">\t\n\t\t\t<form (ngSubmit)=\"addChat(message)\" name=\"chat_form\">\n\t\t\t\t<div chat-bottom>            \n\t\t\t\t\t<ion-icon attach-icon name=\"attach\"></ion-icon>\n\t\t\t\t\t<ion-input [(ngModel)]=\"message\" name=\"message\" placeholder=\"Send a Message\"></ion-input>\n\t\t\t\t\t<ion-button type=\"submit\" color=\"darkred\"> <ion-icon name=\"paper-plane\"></ion-icon></ion-button>\n\t\t\t\t</div>\n\t\t\t</form>\t \n\t\t</ion-footer>\n\t</div> -->\n\t<app-footer></app-footer>\t\t\t\t\t\t\t\t \n</ion-content>\n"

/***/ }),

/***/ "./src/app/follow/follow.page.scss":
/*!*****************************************!*\
  !*** ./src/app/follow/follow.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[followPage] {\n  padding: 50px 0; }\n  [followPage] ion-segment {\n    max-width: 450px;\n    margin: 0 auto; }\n  [followPage] [tab-content] {\n    max-width: 450px;\n    margin: 0 auto; }\n  [followPage] [tab-content] ul {\n      list-style: none;\n      padding: 0;\n      margin: 0; }\n  [followPage] [tab-content] ul li {\n        margin: 0;\n        padding: 10px;\n        display: flex;\n        align-items: center; }\n  [followPage] [tab-content] ul li span {\n          display: flex;\n          align-items: center; }\n  [followPage] [tab-content] ul li span img {\n            width: 40px;\n            height: 40px;\n            border-radius: 50px; }\n  [followPage] [tab-content] ul li span h4 {\n            margin: 0;\n            font-size: 17px;\n            font-weight: 600;\n            margin-left: 10px; }\n  [followPage] [tab-content] ul li a {\n          margin-left: auto;\n          border: 1px solid red;\n          color: red;\n          padding: 7px 25px;\n          font-size: 17px;\n          font-weight: 400; }\n  [followPage] [tab-content] ul li:nth-child(even) {\n          background: #eee; }\n  /* Footer Start */\n  ion-footer [chat-bottom] {\n  padding: var(--ion-padding-15) var(--ion-padding-15) var(--ion-padding-10);\n  display: inline-block;\n  width: 100%;\n  border-top: 1px solid var(--ion-color-grey-chat); }\n  ion-footer [chat-bottom] ion-input {\n    background: var(--ion-color-white);\n    border: 1px solid var(--ion-color-grey-chat);\n    border-radius: var(--ion-value-30);\n    width: calc(100% - 50px);\n    float: left; }\n  ion-footer [chat-bottom] [attach-icon] {\n    position: absolute;\n    right: 75px;\n    top: var(--ion-value-28);\n    z-index: 9;\n    font-size: var(--ion-font-size-18); }\n  ion-footer [chat-bottom] ion-button {\n    width: var(--ion-wh-40);\n    float: right;\n    --border-radius: 50%;\n    height: var(--ion-wh-40);\n    font-size: var(--ion-font-size-10);\n    margin: var(--ion-margin-0); }\n  ion-footer [chat-bottom] ion-button ion-icon {\n      font-size: var(--ion-font-size-20); }\n  ion-footer:before {\n  display: none; }\n  /* Footer Ends */\n  ion-content {\n  --background:var(--ion-color-grey);\n  /* Messages List Start */\n  /* Messages List Ends */ }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-start: var(--ion-padding-0);\n      --padding-end: var(--ion-padding-0);\n      --padding-top: var(--ion-padding-0);\n      --padding-bottom: var(--ion-padding-0); } }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top: var(--ion-padding-0); } }\n  @media only screen and (max-width: 991px) {\n    ion-content .container {\n      padding: var(--ion-padding-0); } }\n  ion-content [messages-list] {\n    background: var(--ion-color-white);\n    display: inline-block;\n    width: 100%;\n    /*margin:var(--ion-margin-30) var(--ion-margin-0);*/ }\n  @media only screen and (max-width: 767px) {\n      ion-content [messages-list] {\n        margin: var(--ion-margin-0);\n        background: transparent; } }\n  @media only screen and (max-width: 768px) {\n      ion-content [messages-list] {\n        margin: var(--ion-margin-0); } }\n  ion-content [messages-list] [chat-head] {\n      padding: var(--ion-padding-15);\n      border-bottom: 1px solid var(--ion-color-grey-chat); }\n  ion-content [messages-list] [chat-head] [chat-title] {\n        margin: var(--ion-margin-0);\n        font-weight: 600;\n        font-size: var(--ion-font-size-16); }\n  ion-content [messages-list] [chat-head] p {\n        margin: var(--ion-margin-0); }\n  ion-content [messages-list] [top-chat] {\n      padding: var(--ion-padding-15); }\n  @media only screen and (max-width: 767px) {\n        ion-content [messages-list] [top-chat] {\n          padding: var(--ion-padding-15) var(--ion-padding-0) var(--ion-padding-15) var(--ion-padding-15); } }\n  ion-content [messages-list] [chat-bottom] {\n      padding: var(--ion-padding-15) var(--ion-padding-15) var(--ion-padding-10);\n      display: inline-block;\n      width: 100%;\n      border-top: 1px solid var(--ion-color-grey-chat); }\n  ion-content [messages-list] [chat-bottom] ion-input {\n        background: var(--ion-color-white);\n        border: 1px solid var(--ion-color-grey-chat);\n        border-radius: var(--ion-value-30);\n        width: calc(100% - 50px);\n        float: left; }\n  ion-content [messages-list] [chat-bottom] ion-button {\n        width: var(--ion-wh-40);\n        float: right;\n        --border-radius: 50%;\n        height: var(--ion-wh-40);\n        font-size: var(--ion-font-size-10);\n        margin: var(--ion-margin-0); }\n  ion-content [messages-list] [chat-bottom] ion-button ion-icon {\n          font-size: var(--ion-font-size-20); }\n  ion-content [messages-list] ion-item {\n      --background: transparent; }\n  ion-content [messages-list] ion-item.chat-left ion-label {\n        background: var(--ion-color-grey-chat); }\n  @media only screen and (max-width: 576px) {\n          ion-content [messages-list] ion-item.chat-left ion-label {\n            padding: var(--ion-padding-10) var(--ion-padding-10); } }\n  ion-content [messages-list] ion-item.chat-right ion-label {\n        background: var(--ion-color-darkblue); }\n  @media only screen and (max-width: 576px) {\n          ion-content [messages-list] ion-item.chat-right ion-label {\n            padding: var(--ion-padding-10) var(--ion-padding-10); } }\n  ion-content [messages-list] ion-item.chat-right ion-label p, ion-content [messages-list] ion-item.chat-right ion-label ion-note {\n          color: var(--ion-color-white); }\n  ion-content [messages-list] ion-item.chat-right ion-label:after {\n          content: '';\n          right: 90px;\n          left: initial;\n          -webkit-transform: rotate(73deg);\n                  transform: rotate(73deg);\n          border-color: var(--ion-color-darkblue) transparent transparent; }\n  ion-content [messages-list] ion-item ion-label {\n        border-radius: var(--ion-value-4);\n        padding: var(--ion-padding-10) var(--ion-padding-10); }\n  @media only screen and (max-width: 576px) {\n          ion-content [messages-list] ion-item ion-label {\n            padding: var(--ion-padding-10) var(--ion-padding-10); } }\n  ion-content [messages-list] ion-item ion-label p {\n          font-size: var(--ion-font-size-12);\n          color: var(--ion-color-black);\n          white-space: normal; }\n  @media only screen and (max-width: 576px) {\n            ion-content [messages-list] ion-item ion-label p {\n              white-space: nowrap;\n              margin-bottom: var(--ion-margin-0);\n              line-height: normal; } }\n  ion-content [messages-list] ion-item ion-label ion-note {\n          font-size: var(--ion-font-size-10); }\n  ion-content [messages-list] ion-item ion-label:after {\n          content: '';\n          border-width: 10px;\n          border-style: solid;\n          border-color: #e6e5eb transparent transparent;\n          position: absolute;\n          bottom: -1px;\n          left: 13px;\n          -webkit-transform: rotate(-73deg);\n                  transform: rotate(-73deg); }\n  ion-content .recent_heading {\n    float: left;\n    width: 40%; }\n  ion-content .srch_bar {\n    display: inline-block;\n    text-align: right;\n    width: 60%; }\n  ion-content .headind_srch {\n    padding: 10px 29px 10px 20px;\n    overflow: hidden;\n    border-bottom: 1px solid var(--ion-color-grey-chat); }\n  ion-content .recent_heading h4 {\n    color: #a01616;\n    font-size: 16px;\n    margin: auto;\n    line-height: 29px; }\n  ion-content .srch_bar input {\n    outline: none;\n    border: 1px solid var(--ion-color-grey-chat);\n    border-width: 0 0 1px 0;\n    width: 80%;\n    padding: 2px 0 4px 6px;\n    background: none; }\n  ion-content .srch_bar .input-group-addon button {\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n    border: medium none;\n    padding: 0;\n    color: #707070;\n    font-size: 18px; }\n  ion-content .srch_bar .input-group-addon {\n    margin: 0 0 0 -27px; }\n  ion-content .chat_ib h5 {\n    font-size: 15px;\n    color: #464646;\n    margin: 0 0 8px 0; }\n  ion-content .chat_ib h5 span {\n    font-size: 13px;\n    float: right; }\n  ion-content .chat_ib p {\n    font-size: 12px;\n    color: #989898;\n    margin: auto;\n    display: inline-block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  ion-content .chat_img {\n    float: left;\n    width: 11%; }\n  ion-content .chat_img img {\n    width: 100%; }\n  ion-content .chat_ib {\n    float: left;\n    padding: 0 0 0 15px;\n    width: 88%; }\n  ion-content .chat_people {\n    overflow: hidden;\n    clear: both; }\n  ion-content .chat_list {\n    border-bottom: 1px solid var(--ion-color-grey-chat);\n    margin: 0;\n    padding: 18px 16px 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sbG93L2ZvbGxvdy5wYWdlLnNjc3MiLCIvaG9tZS9pbmRpL0RvY3VtZW50cy9USi9zcmMvYXBwL2ZvbGxvdy9mb2xsb3cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VDQ0MsZUFBYyxFQUFBO0VEQ2I7SUNDQSxnQkFBZTtJQUNmLGNBQWEsRUFBQTtFRENiO0lDRUEsZ0JBQWU7SUFDZixjQUFhLEVBQUE7RURBWDtNQ0VELGdCQUFnQjtNQUNoQixVQUFTO01BQ1QsU0FBUSxFQUFBO0VEQUw7UUNFRixTQUFRO1FBQ1IsYUFBWTtRQUNaLGFBQWE7UUFDVixtQkFBbUIsRUFBQTtFREFsQjtVQ0VILGFBQWE7VUFDVixtQkFBbUIsRUFBQTtFREFqQjtZQ0VKLFdBQVU7WUFDVixZQUFXO1lBQ1gsbUJBQW1CLEVBQUE7RURBZjtZQ0dKLFNBQVE7WUFDUixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGlCQUFpQixFQUFBO0VERGY7VUNLSCxpQkFBZ0I7VUFDaEIscUJBQW9CO1VBQ3BCLFVBQVM7VUFDVCxpQkFBZ0I7VUFDaEIsZUFBZTtVQUNmLGdCQUFnQixFQUFBO0VESGI7VUNNSCxnQkFBZ0IsRUFBQTtFQVNyQixpQkFBQTtFQUNBO0VBR1UsMEVBQXlFO0VBQ3pFLHFCQUFxQjtFQUN4QixXQUFXO0VBQ1gsZ0RBQStDLEVBQUE7RUFOdEQ7SUFRVyxrQ0FBaUM7SUFDcEMsNENBQTJDO0lBQzNDLGtDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEIsV0FBVSxFQUFBO0VBWmxCO0lBZ0JPLGtCQUFrQjtJQUNuQixXQUFXO0lBQ1gsd0JBQXVCO0lBQ3ZCLFVBQVU7SUFDVixrQ0FBa0MsRUFBQTtFQXBCeEM7SUF3QlUsdUJBQXVCO0lBQzFCLFlBQVk7SUFDWixvQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGtDQUFrQztJQUNqQywyQkFBNEIsRUFBQTtFQTdCcEM7TUErQlEsa0NBQWtDLEVBQUE7RUEvQjFDO0VBcUNDLGFBQVksRUFBQTtFQUdiLGdCQUFBO0VBQ0M7RUFFQSxrQ0FBYTtFQW1CZCx3QkFBQTtFQTZJTSx1QkFBQSxFQUF3QjtFQS9KN0I7SUFIQTtNQUtFLHFDQUFnQjtNQUNmLG1DQUFjO01BQ2QsbUNBQWM7TUFDZCxzQ0FBaUIsRUFBQSxFQXlQcEI7RUF2UEE7SUFWQTtNQVlJLG1DQUFjLEVBQUEsRUFxUGxCO0VBalBDO0lBaEJEO01Ba0JFLDZCQUE0QixFQUFBLEVBRTdCO0VBcEJEO0lBd0JVLGtDQUFrQztJQUN4QyxxQkFBcUI7SUFDckIsV0FBVztJQUNYLG1EQUFBLEVBQW9EO0VBQ2xEO01BNUJOO1FBOEJPLDJCQUEwQjtRQUN6Qix1QkFBc0IsRUFBQSxFQWtJeEI7RUEvSEY7TUFsQ0o7UUFvQ00sMkJBQTBCLEVBQUEsRUE2SDFCO0VBaktOO01Bd0NLLDhCQUE2QjtNQUM3QixtREFBa0QsRUFBQTtFQXpDdkQ7UUE0Q00sMkJBQTBCO1FBQzFCLGdCQUFnQjtRQUNLLGtDQUFrQyxFQUFBO0VBOUM3RDtRQWtETSwyQkFBMEIsRUFBQTtFQWxEaEM7TUF1RGtCLDhCQUE2QixFQUFBO0VBQ3pDO1FBeEROO1VBMERNLCtGQUE4RixFQUFBLEVBRzdGO0VBN0RQO01BK0RTLDBFQUF5RTtNQUN6RSxxQkFBcUI7TUFDeEIsV0FBVztNQUNYLGdEQUErQyxFQUFBO0VBbEVyRDtRQW9FVSxrQ0FBaUM7UUFDcEMsNENBQTJDO1FBQzNDLGtDQUFpQztRQUNqQyx3QkFBd0I7UUFDeEIsV0FBVSxFQUFBO0VBeEVqQjtRQTRFUyx1QkFBdUI7UUFDMUIsWUFBWTtRQUNaLG9CQUFnQjtRQUNoQix3QkFBd0I7UUFDeEIsa0NBQWtDO1FBQ2pDLDJCQUE0QixFQUFBO0VBakZuQztVQW1GTyxrQ0FBa0MsRUFBQTtFQW5GekM7TUF3RlEseUJBQWEsRUFBQTtFQXhGckI7UUE2Rlcsc0NBQXFDLEVBQUE7RUFDbkM7VUE5RmI7WUFnR1Esb0RBQW1ELEVBQUEsRUFFbEQ7RUFsR1Q7UUF5R1cscUNBQW9DLEVBQUE7RUFDbEM7VUExR2I7WUE0R1Esb0RBQW1ELEVBQUEsRUFhbEQ7RUF6SFQ7VUFnSFEsNkJBQTRCLEVBQUE7RUFoSHBDO1VBb0hXLFdBQVc7VUFDZCxXQUFXO1VBQ1gsYUFBYTtVQUFLLGdDQUF3QjtrQkFBeEIsd0JBQXdCO1VBQzFDLCtEQUErRCxFQUFBO0VBdkh2RTtRQStITSxpQ0FBZ0M7UUFDaEMsb0RBQW1ELEVBQUE7RUFDbkQ7VUFqSU47WUFtSU8sb0RBQW1ELEVBQUEsRUE0QnBEO0VBL0pOO1VBdUlPLGtDQUFpQztVQUNqQyw2QkFBNEI7VUFDNUIsbUJBQW1CLEVBQUE7RUFDbkI7WUExSVA7Y0EySVEsbUJBQW1CO2NBQ25CLGtDQUFpQztjQUNqQyxtQkFBbUIsRUFBQSxFQUdwQjtFQWhKUDtVQW1KTyxrQ0FBaUMsRUFBQTtFQW5KeEM7VUFzSk8sV0FBVztVQUNYLGtCQUFrQjtVQUNsQixtQkFBbUI7VUFDbkIsNkNBQTZDO1VBQzdDLGtCQUFrQjtVQUNsQixZQUFZO1VBQ1osVUFBVTtVQUNWLGlDQUF5QjtrQkFBekIseUJBQXlCLEVBQUE7RUE3SmhDO0lBcUtBLFdBQVc7SUFDWCxVQUFVLEVBQUE7RUF0S1Y7SUEwS0EscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixVQUFVLEVBQUE7RUE1S1Y7SUFpTEEsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixtREFBbUQsRUFBQTtFQW5MbkQ7SUF1TEEsY0FBYztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUExTHBCO0lBOExBLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZ0JBQWdCLEVBQUE7RUFuTWhCO0lBdU1BLG1EQUFtRDtJQUNuRCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlLEVBQUE7RUEzTWY7SUErTUEsbUJBQW1CLEVBQUE7RUEvTW5CO0lBbU5BLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCLEVBQUE7RUFyTmpCO0lBeU5BLGVBQWU7SUFDZixZQUFZLEVBQUE7RUExTlo7SUE4TkcsZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCLEVBQUE7RUFwTzFCO0lBd09BLFdBQVc7SUFDWCxVQUFVLEVBQUE7RUF6T1Y7SUE2T0EsV0FDRCxFQUFBO0VBOU9DO0lBaVBBLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsVUFBVSxFQUFBO0VBblBWO0lBdVBBLGdCQUFnQjtJQUNoQixXQUFXLEVBQUE7RUF4UFg7SUE0UEEsbURBQW1EO0lBQ25ELFNBQVM7SUFDVCx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvbGxvdy9mb2xsb3cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2ZvbGxvd1BhZ2VdIHtcbiAgcGFkZGluZzogNTBweCAwOyB9XG4gIFtmb2xsb3dQYWdlXSBpb24tc2VnbWVudCB7XG4gICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICBtYXJnaW46IDAgYXV0bzsgfVxuICBbZm9sbG93UGFnZV0gW3RhYi1jb250ZW50XSB7XG4gICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICBtYXJnaW46IDAgYXV0bzsgfVxuICAgIFtmb2xsb3dQYWdlXSBbdGFiLWNvbnRlbnRdIHVsIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwOyB9XG4gICAgICBbZm9sbG93UGFnZV0gW3RhYi1jb250ZW50XSB1bCBsaSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgICAgICBbZm9sbG93UGFnZV0gW3RhYi1jb250ZW50XSB1bCBsaSBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAgICAgICBbZm9sbG93UGFnZV0gW3RhYi1jb250ZW50XSB1bCBsaSBzcGFuIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cbiAgICAgICAgICBbZm9sbG93UGFnZV0gW3RhYi1jb250ZW50XSB1bCBsaSBzcGFuIGg0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDsgfVxuICAgICAgICBbZm9sbG93UGFnZV0gW3RhYi1jb250ZW50XSB1bCBsaSBhIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICBwYWRkaW5nOiA3cHggMjVweDtcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAgICAgICBbZm9sbG93UGFnZV0gW3RhYi1jb250ZW50XSB1bCBsaTpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7IH1cblxuLyogRm9vdGVyIFN0YXJ0ICovXG5pb24tZm9vdGVyIFtjaGF0LWJvdHRvbV0ge1xuICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5LWNoYXQpOyB9XG4gIGlvbi1mb290ZXIgW2NoYXQtYm90dG9tXSBpb24taW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXktY2hhdCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTMwKTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4gICAgZmxvYXQ6IGxlZnQ7IH1cbiAgaW9uLWZvb3RlciBbY2hhdC1ib3R0b21dIFthdHRhY2gtaWNvbl0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNzVweDtcbiAgICB0b3A6IHZhcigtLWlvbi12YWx1ZS0yOCk7XG4gICAgei1pbmRleDogOTtcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTgpOyB9XG4gIGlvbi1mb290ZXIgW2NoYXQtYm90dG9tXSBpb24tYnV0dG9uIHtcbiAgICB3aWR0aDogdmFyKC0taW9uLXdoLTQwKTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiB2YXIoLS1pb24td2gtNDApO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMCk7XG4gICAgbWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLTApOyB9XG4gICAgaW9uLWZvb3RlciBbY2hhdC1ib3R0b21dIGlvbi1idXR0b24gaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTIwKTsgfVxuXG5pb24tZm9vdGVyOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLyogRm9vdGVyIEVuZHMgKi9cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5KTtcbiAgLyogTWVzc2FnZXMgTGlzdCBTdGFydCAqL1xuICAvKiBNZXNzYWdlcyBMaXN0IEVuZHMgKi8gfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZy0wKTtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy0wKTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZy0wKTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICBpb24tY29udGVudCAuY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApOyB9IH1cbiAgaW9uLWNvbnRlbnQgW21lc3NhZ2VzLWxpc3RdIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKm1hcmdpbjp2YXIoLS1pb24tbWFyZ2luLTMwKSB2YXIoLS1pb24tbWFyZ2luLTApOyovIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICBpb24tY29udGVudCBbbWVzc2FnZXMtbGlzdF0ge1xuICAgICAgICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9IH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBpb24tY29udGVudCBbbWVzc2FnZXMtbGlzdF0ge1xuICAgICAgICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7IH0gfVxuICAgIGlvbi1jb250ZW50IFttZXNzYWdlcy1saXN0XSBbY2hhdC1oZWFkXSB7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSk7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXktY2hhdCk7IH1cbiAgICAgIGlvbi1jb250ZW50IFttZXNzYWdlcy1saXN0XSBbY2hhdC1oZWFkXSBbY2hhdC10aXRsZV0ge1xuICAgICAgICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7IH1cbiAgICAgIGlvbi1jb250ZW50IFttZXNzYWdlcy1saXN0XSBbY2hhdC1oZWFkXSBwIHtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLTApOyB9XG4gICAgaW9uLWNvbnRlbnQgW21lc3NhZ2VzLWxpc3RdIFt0b3AtY2hhdF0ge1xuICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTUpOyB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgIGlvbi1jb250ZW50IFttZXNzYWdlcy1saXN0XSBbdG9wLWNoYXRdIHtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMCkgdmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTE1KTsgfSB9XG4gICAgaW9uLWNvbnRlbnQgW21lc3NhZ2VzLWxpc3RdIFtjaGF0LWJvdHRvbV0ge1xuICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0xMCk7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleS1jaGF0KTsgfVxuICAgICAgaW9uLWNvbnRlbnQgW21lc3NhZ2VzLWxpc3RdIFtjaGF0LWJvdHRvbV0gaW9uLWlucHV0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXktY2hhdCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS0zMCk7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7IH1cbiAgICAgIGlvbi1jb250ZW50IFttZXNzYWdlcy1saXN0XSBbY2hhdC1ib3R0b21dIGlvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogdmFyKC0taW9uLXdoLTQwKTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1pb24td2gtNDApO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTApO1xuICAgICAgICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW21lc3NhZ2VzLWxpc3RdIFtjaGF0LWJvdHRvbV0gaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTIwKTsgfVxuICAgIGlvbi1jb250ZW50IFttZXNzYWdlcy1saXN0XSBpb24taXRlbSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG4gICAgICBpb24tY29udGVudCBbbWVzc2FnZXMtbGlzdF0gaW9uLWl0ZW0uY2hhdC1sZWZ0IGlvbi1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmV5LWNoYXQpOyB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICBpb24tY29udGVudCBbbWVzc2FnZXMtbGlzdF0gaW9uLWl0ZW0uY2hhdC1sZWZ0IGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xMCkgdmFyKC0taW9uLXBhZGRpbmctMTApOyB9IH1cbiAgICAgIGlvbi1jb250ZW50IFttZXNzYWdlcy1saXN0XSBpb24taXRlbS5jaGF0LXJpZ2h0IGlvbi1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7IH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgIGlvbi1jb250ZW50IFttZXNzYWdlcy1saXN0XSBpb24taXRlbS5jaGF0LXJpZ2h0IGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xMCkgdmFyKC0taW9uLXBhZGRpbmctMTApOyB9IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW21lc3NhZ2VzLWxpc3RdIGlvbi1pdGVtLmNoYXQtcmlnaHQgaW9uLWxhYmVsIHAsIGlvbi1jb250ZW50IFttZXNzYWdlcy1saXN0XSBpb24taXRlbS5jaGF0LXJpZ2h0IGlvbi1sYWJlbCBpb24tbm90ZSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW21lc3NhZ2VzLWxpc3RdIGlvbi1pdGVtLmNoYXQtcmlnaHQgaW9uLWxhYmVsOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICByaWdodDogOTBweDtcbiAgICAgICAgICBsZWZ0OiBpbml0aWFsO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDczZGVnKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7IH1cbiAgICAgIGlvbi1jb250ZW50IFttZXNzYWdlcy1saXN0XSBpb24taXRlbSBpb24tbGFiZWwge1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pb24tdmFsdWUtNCk7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEwKSB2YXIoLS1pb24tcGFkZGluZy0xMCk7IH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgIGlvbi1jb250ZW50IFttZXNzYWdlcy1saXN0XSBpb24taXRlbSBpb24tbGFiZWwge1xuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTApIHZhcigtLWlvbi1wYWRkaW5nLTEwKTsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFttZXNzYWdlcy1saXN0XSBpb24taXRlbSBpb24tbGFiZWwgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW21lc3NhZ2VzLWxpc3RdIGlvbi1pdGVtIGlvbi1sYWJlbCBwIHtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFttZXNzYWdlcy1saXN0XSBpb24taXRlbSBpb24tbGFiZWwgaW9uLW5vdGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMCk7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW21lc3NhZ2VzLWxpc3RdIGlvbi1pdGVtIGlvbi1sYWJlbDphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZTZlNWViIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IC0xcHg7XG4gICAgICAgICAgbGVmdDogMTNweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNzNkZWcpOyB9XG4gIGlvbi1jb250ZW50IC5yZWNlbnRfaGVhZGluZyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDQwJTsgfVxuICBpb24tY29udGVudCAuc3JjaF9iYXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB3aWR0aDogNjAlOyB9XG4gIGlvbi1jb250ZW50IC5oZWFkaW5kX3NyY2gge1xuICAgIHBhZGRpbmc6IDEwcHggMjlweCAxMHB4IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXktY2hhdCk7IH1cbiAgaW9uLWNvbnRlbnQgLnJlY2VudF9oZWFkaW5nIGg0IHtcbiAgICBjb2xvcjogI2EwMTYxNjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGxpbmUtaGVpZ2h0OiAyOXB4OyB9XG4gIGlvbi1jb250ZW50IC5zcmNoX2JhciBpbnB1dCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleS1jaGF0KTtcbiAgICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmc6IDJweCAwIDRweCA2cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTsgfVxuICBpb24tY29udGVudCAuc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBmb250LXNpemU6IDE4cHg7IH1cbiAgaW9uLWNvbnRlbnQgLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gICAgbWFyZ2luOiAwIDAgMCAtMjdweDsgfVxuICBpb24tY29udGVudCAuY2hhdF9pYiBoNSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjNDY0NjQ2O1xuICAgIG1hcmdpbjogMCAwIDhweCAwOyB9XG4gIGlvbi1jb250ZW50IC5jaGF0X2liIGg1IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmbG9hdDogcmlnaHQ7IH1cbiAgaW9uLWNvbnRlbnQgLmNoYXRfaWIgcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjOTg5ODk4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIGlvbi1jb250ZW50IC5jaGF0X2ltZyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDExJTsgfVxuICBpb24tY29udGVudCAuY2hhdF9pbWcgaW1nIHtcbiAgICB3aWR0aDogMTAwJTsgfVxuICBpb24tY29udGVudCAuY2hhdF9pYiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMCAwIDAgMTVweDtcbiAgICB3aWR0aDogODglOyB9XG4gIGlvbi1jb250ZW50IC5jaGF0X3Blb3BsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjbGVhcjogYm90aDsgfVxuICBpb24tY29udGVudCAuY2hhdF9saXN0IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXktY2hhdCk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDE4cHggMTZweCAxMHB4OyB9XG4iLCJbZm9sbG93UGFnZV17XG5cdHBhZGRpbmc6NTBweCAwO1xuXHRpb24tc2VnbWVudHtcblx0XHRtYXgtd2lkdGg6NDUwcHg7XG5cdFx0bWFyZ2luOjAgYXV0bztcblx0fVxuXHRbdGFiLWNvbnRlbnRde1xuXHRcdG1heC13aWR0aDo0NTBweDtcblx0XHRtYXJnaW46MCBhdXRvO1xuXHRcdHVse1xuXHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRcdHBhZGRpbmc6MDtcblx0XHRcdG1hcmdpbjowO1xuXHRcdFx0bGl7XG5cdFx0XHRcdG1hcmdpbjowO1xuXHRcdFx0XHRwYWRkaW5nOjEwcHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG4gICAgXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0c3Bhbntcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuICAgIFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRpbWd7XG5cdFx0XHRcdFx0XHR3aWR0aDo0MHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OjQwcHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRoNHtcblx0XHRcdFx0XHRcdG1hcmdpbjowO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxN3B4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRhe1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OmF1dG87XG5cdFx0XHRcdFx0Ym9yZGVyOjFweCBzb2xpZCByZWQ7XG5cdFx0XHRcdFx0Y29sb3I6cmVkO1xuXHRcdFx0XHRcdHBhZGRpbmc6N3B4IDI1cHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxN3B4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0JjpudGgtY2hpbGQoZXZlbil7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2VlZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5cblxuLyogRm9vdGVyIFN0YXJ0ICovXG5pb24tZm9vdGVyXG57XG4gICBbY2hhdC1ib3R0b21dXG5cdFx0XHRcdCAgIHsgIHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0xMCk7XG5cdFx0XHRcdCAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHQgIHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdCAgYm9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXktY2hhdCk7XG5cdFx0XHRcdFx0ICBpb24taW5wdXRcblx0XHRcdFx0XHQgIHsgICBiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRcdFx0XHQgIGJvcmRlcjoxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXktY2hhdCk7XG5cdFx0XHRcdFx0XHQgIGJvcmRlci1yYWRpdXM6dmFyKC0taW9uLXZhbHVlLTMwKTtcblx0XHRcdFx0XHRcdCAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuXHRcdFx0XHRcdFx0ICBmbG9hdDpsZWZ0O1xuXHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdCAgW2F0dGFjaC1pY29uXVxuXHRcdFx0XHRcdCAge1xuXHRcdFx0XHRcdCAgcG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDc1cHg7XG5cdFx0XHRcdFx0XHR0b3A6dmFyKC0taW9uLXZhbHVlLTI4KTtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDk7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTgpO1xuXHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdCAgaW9uLWJ1dHRvblxuXHRcdFx0XHRcdCAge1xuXHRcdFx0XHRcdFx0ICAgIHdpZHRoOiB2YXIoLS1pb24td2gtNDApO1xuXHRcdFx0XHRcdFx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0XHRcdFx0XHRcdC0tYm9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IHZhcigtLWlvbi13aC00MCk7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMCk7XG5cdFx0XHRcdFx0XHRcdCBtYXJnaW46ICB2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdFx0XHRpb24taWNvblxuXHRcdFx0XHRcdFx0XHR7Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTIwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCAgfVxuXHRcdFx0XHQgICB9IFxuJjpiZWZvcmVcbntcblx0ZGlzcGxheTpub25lO1xufVx0XG59XHRcdFx0XHQgICBcbi8qIEZvb3RlciBFbmRzICovXG4gaW9uLWNvbnRlbnRcbnsgIFxuXHQtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdHtcbiAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctMCk7XG5cdH1cblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxuXHRcdHtcblx0XHRcdCAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctMCk7XG5cdFx0fVxuXHQuY29udGFpbmVyXG5cdHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0e1xuXHRcdFx0cGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0wKTtcblx0XHR9XG5cdH1cbi8qIE1lc3NhZ2VzIExpc3QgU3RhcnQgKi9cblx0XHRcdCAgIFttZXNzYWdlcy1saXN0XVxuXHRcdFx0ICAgeyAgXG5cdFx0XHQgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHRcdFx0XHRcdFxuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHQvKm1hcmdpbjp2YXIoLS1pb24tbWFyZ2luLTMwKSB2YXIoLS1pb24tbWFyZ2luLTApOyovXG5cdFx0XHRcdFx0ICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpXG5cdFx0XHRcdFx0ICAge1xuXHRcdFx0XHRcdFx0XHQgbWFyZ2luOnZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0XHRcdCAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcdFx0XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHQgICB9XHRcblx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgbWFyZ2luOnZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFtjaGF0LWhlYWRdXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0xNSk7XG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleS1jaGF0KTtcblx0XHRcdFx0XHRcdFtjaGF0LXRpdGxlXVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46dmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTYpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46dmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XHRcbiAgICAgICAgICAgICAgICAgW3RvcC1jaGF0XVxuXHRcdFx0XHQgICB7IFxuICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctMTUpO1xuXHRcdFx0XHRcdCAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KVxuXHRcdFx0XHRcdCAgIHtcblx0XHRcdFx0XHRcdCBwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMTUpO1x0XHRcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdCAgIH1cdFxuXHRcdFx0XHQgICB9XHRcdFx0XHQgICBcblx0XHRcdFx0ICAgW2NoYXQtYm90dG9tXVxuXHRcdFx0XHQgICB7ICBwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMTApO1xuXHRcdFx0XHQgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0ICB3aWR0aDogMTAwJTtcblx0XHRcdFx0XHQgIGJvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5LWNoYXQpO1xuXHRcdFx0XHRcdCAgaW9uLWlucHV0XG5cdFx0XHRcdFx0ICB7ICAgYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdFx0XHRcdFx0ICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5LWNoYXQpO1xuXHRcdFx0XHRcdFx0ICBib3JkZXItcmFkaXVzOnZhcigtLWlvbi12YWx1ZS0zMCk7XG5cdFx0XHRcdFx0XHQgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcblx0XHRcdFx0XHRcdCAgZmxvYXQ6bGVmdDtcblx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHQgIGlvbi1idXR0b25cblx0XHRcdFx0XHQgIHtcblx0XHRcdFx0XHRcdCAgICB3aWR0aDogdmFyKC0taW9uLXdoLTQwKTtcblx0XHRcdFx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0XHRcdFx0XHQtLWJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiB2YXIoLS1pb24td2gtNDApO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTApO1xuXHRcdFx0XHRcdFx0XHQgbWFyZ2luOiAgdmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdFx0XHRcdFx0aW9uLWljb25cblx0XHRcdFx0XHRcdFx0e2ZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0yMCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQgIH1cblx0XHRcdFx0ICAgfSAgXG5cdFx0XHRcdCAgaW9uLWl0ZW1cblx0XHRcdFx0ICB7IFx0LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHQgICAmLmNoYXQtbGVmdFxuXHRcdFx0XHRcdCAgIHtcblx0XHRcdFx0XHRcdCAgXG5cdFx0XHRcdFx0XHQgICBpb24tbGFiZWxcblx0XHRcdFx0XHRcdCAgIHsgXHRiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5LWNoYXQpO1xuXHRcdFx0XHRcdFx0ICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0xMCkgdmFyKC0taW9uLXBhZGRpbmctMTApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCAgIH1cblx0XHRcdFx0XHRcdCAgIFxuXHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdCAgICYuY2hhdC1yaWdodFxuXHRcdFx0XHRcdCAgIHtcblx0XHRcdFx0XHRcdCAgXG5cdFx0XHRcdFx0XHQgICBpb24tbGFiZWxcblx0XHRcdFx0XHRcdCAgIHsgXHRiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XG5cdFx0XHRcdFx0XHQgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTEwKSB2YXIoLS1pb24tcGFkZGluZy0xMCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHAgICwgaW9uLW5vdGVcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQmOmFmdGVyXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdCAgICBjb250ZW50OiAnJztcblx0XHRcdFx0XHRcdFx0XHRcdHJpZ2h0OiA5MHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogaW5pdGlhbDsgICAgdHJhbnNmb3JtOiByb3RhdGUoNzNkZWcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsdWUpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCAgIH1cblx0XHRcdFx0XHRcdCAgIFxuXHRcdFx0XHRcdCAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czp2YXIoLS1pb24tdmFsdWUtNCk7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctMTApIHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcblx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0xMCkgdmFyKC0taW9uLXBhZGRpbmctMTApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHBcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3ItYmxhY2spO1xuXHRcdFx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3JtYWw7XG5cdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxuXHRcdFx0XHRcdFx0XHRcdHt3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aW9uLW5vdGVcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJztcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItd2lkdGg6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItY29sb3I6ICNlNmU1ZWIgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogLTFweDtcblx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAxM3B4O1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC03M2RlZyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0ICB9XHRcdFx0XHQgIFxuXHRcdFx0ICAgfVxuXHRcdFx0ICAgLyogTWVzc2FnZXMgTGlzdCBFbmRzICovXG5cbiAucmVjZW50X2hlYWRpbmcge1xuXHRmbG9hdDogbGVmdDtcblx0d2lkdGg6IDQwJTtcbn1cblxuLnNyY2hfYmFyIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0d2lkdGg6IDYwJTtcblxufVxuXG4uaGVhZGluZF9zcmNoIHtcblx0cGFkZGluZzogMTBweCAyOXB4IDEwcHggMjBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5LWNoYXQpO1xufVxuXG4ucmVjZW50X2hlYWRpbmcgaDQge1xuXHRjb2xvcjogI2EwMTYxNjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuXG4uc3JjaF9iYXIgaW5wdXQge1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleS1jaGF0KTtcblx0Ym9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XG5cdHdpZHRoOiA4MCU7XG5cdHBhZGRpbmc6IDJweCAwIDRweCA2cHg7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5zcmNoX2JhciAuaW5wdXQtZ3JvdXAtYWRkb24gYnV0dG9uIHtcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuXHRib3JkZXI6IG1lZGl1bSBub25lO1xuXHRwYWRkaW5nOiAwO1xuXHRjb2xvcjogIzcwNzA3MDtcblx0Zm9udC1zaXplOiAxOHB4O1xufVxuXG4uc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIHtcblx0bWFyZ2luOiAwIDAgMCAtMjdweDtcbn1cblxuLmNoYXRfaWIgaDUge1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGNvbG9yOiAjNDY0NjQ2O1xuXHRtYXJnaW46IDAgMCA4cHggMDtcbn1cblxuLmNoYXRfaWIgaDUgc3BhbiB7XG5cdGZvbnQtc2l6ZTogMTNweDtcblx0ZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY2hhdF9pYiBwIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM5ODk4OTg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jaGF0X2ltZyB7XG5cdGZsb2F0OiBsZWZ0O1xuXHR3aWR0aDogMTElO1xufVxuXG4uY2hhdF9pbWcgaW1nIHtcblx0d2lkdGg6IDEwMCVcbn1cblxuLmNoYXRfaWIge1xuXHRmbG9hdDogbGVmdDtcblx0cGFkZGluZzogMCAwIDAgMTVweDtcblx0d2lkdGg6IDg4JTtcbn1cblxuLmNoYXRfcGVvcGxlIHtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Y2xlYXI6IGJvdGg7XG59XG5cbi5jaGF0X2xpc3Qge1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXktY2hhdCk7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMThweCAxNnB4IDEwcHg7XG59XG5cbn1cdFx0XHQgICAiXX0= */"

/***/ }),

/***/ "./src/app/follow/follow.page.ts":
/*!***************************************!*\
  !*** ./src/app/follow/follow.page.ts ***!
  \***************************************/
/*! exports provided: FollowPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowPage", function() { return FollowPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");






var FollowPage = /** @class */ (function () {
    function FollowPage(cd, activatedRoute, userService, toastController, alertController, loadingController) {
        this.cd = cd;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.tabs = "Buyer";
        this.is_chat_window = false;
        this.is_chat_loaded = false;
        this.errors = ['', null, undefined];
        this.pic_url = "http://dev.indiit.solutions/TJ/dev/dev/public/uploads/userprofile/";
        this.product_id = activatedRoute.snapshot.paramMap.get('product_id');
        this.vendor_type = activatedRoute.snapshot.paramMap.get('vendor_type');
        this.vendor_id = activatedRoute.snapshot.paramMap.get('vendor_id');
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_5__["config"].IMAGES_URL;
    }
    FollowPage.prototype.ngOnInit = function () {
    };
    FollowPage.prototype.ionViewDidEnter = function () {
        this.getAllUsers();
        this.getAllShops();
        this.getAllRequests();
    };
    FollowPage.prototype.getAllUsers = function () {
        var _this = this;
        this.presentLoading();
        this.userService.postData({ email: localStorage.getItem('sin_auth_user_email') }, 'getAllUsers').subscribe(function (result) {
            _this.stopLoading();
            _this.users = result.data;
        }, function (err) {
            _this.stopLoading();
            _this.users = [];
        });
    };
    FollowPage.prototype.getAllShops = function () {
        var _this = this;
        this.userService.postData({ email: localStorage.getItem('sin_auth_user_email') }, 'getAllSellers').subscribe(function (result) {
            _this.sellers = result.data;
        }, function (err) {
            _this.sellers = [];
        });
    };
    FollowPage.prototype.getAllRequests = function () {
        var _this = this;
        this.userService.postData({ user_id: localStorage.getItem('sin_auth_userId') }, 'getAllFollowRequests').subscribe(function (result) {
            _this.requests = result.data;
        }, function (err) {
            _this.requests = [];
        });
    };
    FollowPage.prototype.accept = function (reqId) {
        var _this = this;
        var dict = {
            'reqId': reqId
        };
        this.presentLoading();
        this.userService.postData(dict, 'acceptFollowRequest').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.presentToast('Request accepted successfully', 'success');
                _this.getAllRequests();
                _this.cd.detectChanges();
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    FollowPage.prototype.reject = function (reqId) {
        var _this = this;
        var dict = {
            'reqId': reqId
        };
        this.presentLoading();
        this.userService.postData(dict, 'rejectFollowRequest').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.presentToast('Request rejected successfully', 'success');
                _this.getAllRequests();
                _this.cd.detectChanges();
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    FollowPage.prototype.follow_user = function (user) {
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
    FollowPage.prototype.follow_seller = function (user) {
        var _this = this;
        this.presentLoading();
        var userId = user.id;
        var dict = {
            'follow_by': localStorage.getItem('sin_auth_userId'),
            'follow_to': userId,
            'follow_to_type': 'seller'
        };
        this.userService.postData(dict, 'followSeller').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.presentToast('Followed successfully', 'success');
                _this.getAllShops();
                _this.cd.detectChanges();
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    FollowPage.prototype.unfollow_user = function (user) {
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
                _this.presentToast('Un-followed successfully', 'success');
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
    FollowPage.prototype.unfollow_seller = function (user) {
        var _this = this;
        this.presentLoading();
        var userId = user.id;
        var dict = {
            'follow_by': localStorage.getItem('sin_auth_userId'),
            'follow_to': userId,
            'follow_to_type': 'seller'
        };
        this.userService.postData(dict, 'unfollowSeller').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.presentToast('Un-followed successfully', 'success');
                _this.getAllShops();
                _this.cd.detectChanges();
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    FollowPage.prototype.presentToast = function (message, color) {
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
    FollowPage.prototype.presentLoading = function () {
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
    FollowPage.prototype.stopLoading = function () {
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
    FollowPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-follow',
            template: __webpack_require__(/*! ./follow.page.html */ "./src/app/follow/follow.page.html"),
            styles: [__webpack_require__(/*! ./follow.page.scss */ "./src/app/follow/follow.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], FollowPage);
    return FollowPage;
}());



/***/ })

}]);
//# sourceMappingURL=follow-follow-module.js.map