(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module"],{

/***/ "./src/app/messages/messages.module.ts":
/*!*********************************************!*\
  !*** ./src/app/messages/messages.module.ts ***!
  \*********************************************/
/*! exports provided: MessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages.page */ "./src/app/messages/messages.page.ts");








var routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_7__["MessagesPage"]
    }
];
var MessagesPageModule = /** @class */ (function () {
    function MessagesPageModule() {
    }
    MessagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_7__["MessagesPage"]]
        })
    ], MessagesPageModule);
    return MessagesPageModule;
}());



/***/ }),

/***/ "./src/app/messages/messages.page.html":
/*!*********************************************!*\
  !*** ./src/app/messages/messages.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"darkred\"  text-uppercase>\n <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"user-contacts\"></ion-back-button>\n    </ion-buttons>\n\t\t<ion-buttons slot=\"end\">\n  <ion-icon name=\"videocam\"></ion-icon>\n    </ion-buttons>\n    <ion-title>\n     <ion-item no-padding lines=\"none\" style=\"--background:transparent;color:var(--ion-color-white)\">\n\t\t  <ion-avatar slot=\"start\">\n\t\t\t<img src=\"assets/images/avatar.png\">\n\t\t\t<span></span>\n\t\t  </ion-avatar>\n\t\t  <ion-label>\n\t\t  <h3>John Smith</h3>\n\t\t  <p>Online</p>\n\t\t  </ion-label>\n\t\t</ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header> --> \n<ion-content>\n<div header_height></div>\n\t<!-- Breadcrumb Start -->\n\t\t<div breadcrumb  class=\"ion-hide-md-down\">\t\t\n\t\t\t<div breadcrumb-inner>\n\t\t\t\t<ul list-inline list-unstyled>\n\t\t\t\t\t<li><a routerLink=\"/home\">Home</a></li>\n\t\t\t\t\t<li class=\"active\">messages</li>\n\t\t\t\t</ul>\n\t\t\t</div><!-- /.breadcrumb-inner -->\n\t\t</div>\n<!-- Breadcrumb Ends -->\n\t\t   <ion-row>\n\t\t   <ion-col size-lg=\"4\" size-md=\"3\">\n\t\t   \t\t<div class=\"headind_srch\">\n\t\t\t\t\t<div class=\"recent_heading\">\n\t\t\t\t\t  <h4>Recent</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"srch_bar\">\n\t\t\t\t\t  <div class=\"stylish-input-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"search-bar\"  placeholder=\"Search\" >\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"inbox_chat scroll\" *ngFor=\"let user of chat_users\">\n\t\t\t\t\t<div class=\"chat_list active_chat\" (click)=\"getChat(user)\">\n\t\t\t\t\t  <div class=\"chat_people\">\n\t\t\t\t\t\t<div class=\"chat_img\"> \n\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(user?.profile_picture) >= 0\" src=\"assets/images/default.png\">\n\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(user?.profile_picture) == -1\" src=\"{{IMAGES_URL}}/userprofile/{{user?.profile_picture}}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"chat_ib\">\n\t\t\t\t\t\t  <h5>{{user.to_user_type}} <span class=\"chat_date\">{{user.created_at | timeAgo}}</span></h5>\n\t\t\t\t\t\t  <p>{{user.message}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t    </ion-col>\n\t\t\t<ion-col size-lg=\"8\" size-md=\"9\">\n\t\t\t\t<div messages-list>\t\n\t\t\t\t\t<ng-container *ngIf=\"is_chat_window == true\">\t\t\t\t\t\n\t\t\t\t\t\t<ng-container *ngIf=\"is_chat_loaded == true\">\t\t\t\t\n\t\t\t\t\t\t\t<div chat-head class=\"ion-hide-sm-down\">\t\t\t\t\n\t\t\t\t\t\t\t\t<h3 chat-title> name name </h3>\n\t\t\t\t\t\t\t</div>\t\n\t\t                    <div top-chat>\n\t\t                    \t<ng-container *ngFor=\"let chat of chat_list\">\t\t\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\" [ngClass]=\"chat.from_user_id == userId ? 'chat-right' : 'chat-left'\" no-padding>\n\t\t\t\t\t\t\t\t\t<ion-avatar slot=\"{{chat.from_user_id == userId ? 'end' : 'start'}}\">\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"chat.from_user_id == userId\">\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(chat?.user_profile_picture) >= 0\" src=\"assets/images/default.png\">\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(chat?.user_profile_picture) == -1\" src=\"{{IMAGES_URL}}/userprofile/{{chat?.user_profile_picture}}\">\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"chat.from_user_id != userId\">\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(chat?.profile_picture) >= 0\" src=\"assets/images/default.png\">\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(chat?.profile_picture) == -1\" src=\"{{IMAGES_URL}}/{{chat?.from_user_type == 'vendor' ? 'vendors' : 'sub_users'}}/{{chat?.profile_picture}}\">\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t<p>{{chat.message}}</p>\n\t\t\t\t\t\t\t\t\t\t<ion-note><ion-icon name=\"timer\"></ion-icon> {{chat.created_at | timeAgo}}</ion-note>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div chat-bottom class=\"ion-hide-sm-down\">\n\t\t\t\t\t\t\t\t<form (ngSubmit)=\"addChat(message)\" name=\"chat_form_web\">\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"message\" name=\"message\" placeholder=\"Send a Message\"></ion-input>\n\t\t\t\t\t\t\t\t\t<ion-button type=\"submit\" color=\"darkred\"> <ion-icon name=\"paper-plane\"></ion-icon></ion-button>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t<ng-container *ngIf=\"is_chat_loaded == false\">\n\t\t\t\t\t\t\t<div top-chat>\t\t\t\t\n\t\t\t\t\t\t\t\t<h3 chat-title> Loading chat... </h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t<ng-container *ngIf=\"is_chat_window == false\">\n\t\t\t\t\t\t<div top-chat>\t\t\t\t\n\t\t\t\t\t\t\t<h3 chat-title> Click on users list to chat... </h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t </ion-row>\t\n<ion-footer class=\"ion-hide-md-up\">\t\n\t<form (ngSubmit)=\"addChat(message)\" name=\"chat_form\">\n\t\t<div chat-bottom>            \n\t\t\t<ion-icon attach-icon name=\"attach\"></ion-icon>\n\t\t\t<ion-input [(ngModel)]=\"message\" name=\"message\" placeholder=\"Send a Message\"></ion-input>\n\t\t\t<ion-button type=\"submit\" color=\"darkred\"> <ion-icon name=\"paper-plane\"></ion-icon></ion-button>\n\t\t</div>\n\t</form>\t \n</ion-footer>\n<app-footer></app-footer>\t\t\t\t\t\t\t\t \n</ion-content>\n"

/***/ }),

/***/ "./src/app/messages/messages.page.scss":
/*!*********************************************!*\
  !*** ./src/app/messages/messages.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Footer Start */\nion-footer [chat-bottom] {\n  padding: var(--ion-padding-15) var(--ion-padding-15) var(--ion-padding-10);\n  display: inline-block;\n  width: 100%;\n  border-top: 1px solid var(--ion-color-grey-chat); }\nion-footer [chat-bottom] ion-input {\n    background: var(--ion-color-white);\n    border: 1px solid var(--ion-color-grey-chat);\n    border-radius: var(--ion-value-30);\n    width: calc(100% - 50px);\n    float: left; }\nion-footer [chat-bottom] [attach-icon] {\n    position: absolute;\n    right: 75px;\n    top: var(--ion-value-28);\n    z-index: 9;\n    font-size: var(--ion-font-size-18); }\nion-footer [chat-bottom] ion-button {\n    width: var(--ion-wh-40);\n    float: right;\n    --border-radius: 50%;\n    height: var(--ion-wh-40);\n    font-size: var(--ion-font-size-10);\n    margin: var(--ion-margin-0); }\nion-footer [chat-bottom] ion-button ion-icon {\n      font-size: var(--ion-font-size-20); }\nion-footer:before {\n  display: none; }\n/* Footer Ends */\nion-content {\n  --background:var(--ion-color-grey);\n  /* Messages List Start */\n  /* Messages List Ends */ }\n@media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-start: var(--ion-padding-0);\n      --padding-end: var(--ion-padding-0);\n      --padding-top: var(--ion-padding-0);\n      --padding-bottom: var(--ion-padding-0); } }\n@media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top: var(--ion-padding-0); } }\n@media only screen and (max-width: 991px) {\n    ion-content .container {\n      padding: var(--ion-padding-0); } }\nion-content [messages-list] {\n    background: var(--ion-color-white);\n    display: inline-block;\n    width: 100%;\n    /*margin:var(--ion-margin-30) var(--ion-margin-0);*/ }\n@media only screen and (max-width: 767px) {\n      ion-content [messages-list] {\n        margin: var(--ion-margin-0);\n        background: transparent; } }\n@media only screen and (max-width: 768px) {\n      ion-content [messages-list] {\n        margin: var(--ion-margin-0); } }\nion-content [messages-list] [chat-head] {\n      padding: var(--ion-padding-15);\n      border-bottom: 1px solid var(--ion-color-grey-chat); }\nion-content [messages-list] [chat-head] [chat-title] {\n        margin: var(--ion-margin-0);\n        font-weight: 600;\n        font-size: var(--ion-font-size-16); }\nion-content [messages-list] [chat-head] p {\n        margin: var(--ion-margin-0); }\nion-content [messages-list] [top-chat] {\n      padding: var(--ion-padding-15); }\n@media only screen and (max-width: 767px) {\n        ion-content [messages-list] [top-chat] {\n          padding: var(--ion-padding-15) var(--ion-padding-0) var(--ion-padding-15) var(--ion-padding-15); } }\nion-content [messages-list] [chat-bottom] {\n      padding: var(--ion-padding-15) var(--ion-padding-15) var(--ion-padding-10);\n      display: inline-block;\n      width: 100%;\n      border-top: 1px solid var(--ion-color-grey-chat); }\nion-content [messages-list] [chat-bottom] ion-input {\n        background: var(--ion-color-white);\n        border: 1px solid var(--ion-color-grey-chat);\n        border-radius: var(--ion-value-30);\n        width: calc(100% - 50px);\n        float: left; }\nion-content [messages-list] [chat-bottom] ion-button {\n        width: var(--ion-wh-40);\n        float: right;\n        --border-radius: 50%;\n        height: var(--ion-wh-40);\n        font-size: var(--ion-font-size-10);\n        margin: var(--ion-margin-0); }\nion-content [messages-list] [chat-bottom] ion-button ion-icon {\n          font-size: var(--ion-font-size-20); }\nion-content [messages-list] ion-item {\n      --background: transparent; }\nion-content [messages-list] ion-item.chat-left ion-label {\n        background: var(--ion-color-grey-chat); }\n@media only screen and (max-width: 576px) {\n          ion-content [messages-list] ion-item.chat-left ion-label {\n            padding: var(--ion-padding-10) var(--ion-padding-10); } }\nion-content [messages-list] ion-item.chat-right ion-label {\n        background: var(--ion-color-darkblue); }\n@media only screen and (max-width: 576px) {\n          ion-content [messages-list] ion-item.chat-right ion-label {\n            padding: var(--ion-padding-10) var(--ion-padding-10); } }\nion-content [messages-list] ion-item.chat-right ion-label p, ion-content [messages-list] ion-item.chat-right ion-label ion-note {\n          color: var(--ion-color-white); }\nion-content [messages-list] ion-item.chat-right ion-label:after {\n          content: '';\n          right: 90px;\n          left: initial;\n          -webkit-transform: rotate(73deg);\n                  transform: rotate(73deg);\n          border-color: var(--ion-color-darkblue) transparent transparent; }\nion-content [messages-list] ion-item ion-label {\n        border-radius: var(--ion-value-4);\n        padding: var(--ion-padding-10) var(--ion-padding-10); }\n@media only screen and (max-width: 576px) {\n          ion-content [messages-list] ion-item ion-label {\n            padding: var(--ion-padding-10) var(--ion-padding-10); } }\nion-content [messages-list] ion-item ion-label p {\n          font-size: var(--ion-font-size-12);\n          color: var(--ion-color-black);\n          white-space: normal; }\n@media only screen and (max-width: 576px) {\n            ion-content [messages-list] ion-item ion-label p {\n              white-space: nowrap;\n              margin-bottom: var(--ion-margin-0);\n              line-height: normal; } }\nion-content [messages-list] ion-item ion-label ion-note {\n          font-size: var(--ion-font-size-10); }\nion-content [messages-list] ion-item ion-label:after {\n          content: '';\n          border-width: 10px;\n          border-style: solid;\n          border-color: #e6e5eb transparent transparent;\n          position: absolute;\n          bottom: -1px;\n          left: 13px;\n          -webkit-transform: rotate(-73deg);\n                  transform: rotate(-73deg); }\nion-content .recent_heading {\n    float: left;\n    width: 40%; }\nion-content .srch_bar {\n    display: inline-block;\n    text-align: right;\n    width: 60%; }\nion-content .headind_srch {\n    padding: 10px 29px 10px 20px;\n    overflow: hidden;\n    border-bottom: 1px solid var(--ion-color-grey-chat); }\nion-content .recent_heading h4 {\n    color: #a01616;\n    font-size: 16px;\n    margin: auto;\n    line-height: 29px; }\nion-content .srch_bar input {\n    outline: none;\n    border: 1px solid var(--ion-color-grey-chat);\n    border-width: 0 0 1px 0;\n    width: 80%;\n    padding: 2px 0 4px 6px;\n    background: none; }\nion-content .srch_bar .input-group-addon button {\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n    border: medium none;\n    padding: 0;\n    color: #707070;\n    font-size: 18px; }\nion-content .srch_bar .input-group-addon {\n    margin: 0 0 0 -27px; }\nion-content .chat_ib h5 {\n    font-size: 15px;\n    color: #464646;\n    margin: 0 0 8px 0; }\nion-content .chat_ib h5 span {\n    font-size: 13px;\n    float: right; }\nion-content .chat_ib p {\n    font-size: 12px;\n    color: #989898;\n    margin: auto;\n    display: inline-block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\nion-content .chat_img {\n    float: left;\n    width: 11%; }\nion-content .chat_img img {\n    width: 100%; }\nion-content .chat_ib {\n    float: left;\n    padding: 0 0 0 15px;\n    width: 88%; }\nion-content .chat_people {\n    overflow: hidden;\n    clear: both; }\nion-content .chat_list {\n    border-bottom: 1px solid var(--ion-color-grey-chat);\n    margin: 0;\n    padding: 18px 16px 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUFDQTtFQUdVLDBFQUF5RTtFQUN6RSxxQkFBcUI7RUFDeEIsV0FBVztFQUNYLGdEQUErQyxFQUFBO0FBTnREO0lBUVcsa0NBQWlDO0lBQ3BDLDRDQUEyQztJQUMzQyxrQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLFdBQVUsRUFBQTtBQVpsQjtJQWdCTyxrQkFBa0I7SUFDbkIsV0FBVztJQUNYLHdCQUF1QjtJQUN2QixVQUFVO0lBQ1Ysa0NBQWtDLEVBQUE7QUFwQnhDO0lBd0JVLHVCQUF1QjtJQUMxQixZQUFZO0lBQ1osb0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixrQ0FBa0M7SUFDakMsMkJBQTRCLEVBQUE7QUE3QnBDO01BK0JRLGtDQUFrQyxFQUFBO0FBL0IxQztFQXFDQyxhQUFZLEVBQUE7QUFHYixnQkFBQTtBQUNDO0VBRUEsa0NBQWE7RUFtQmQsd0JBQUE7RUE2SU0sdUJBQUEsRUFBd0I7QUEvSjdCO0lBSEE7TUFLRSxxQ0FBZ0I7TUFDZixtQ0FBYztNQUNkLG1DQUFjO01BQ2Qsc0NBQWlCLEVBQUEsRUF5UHBCO0FBdlBBO0lBVkE7TUFZSSxtQ0FBYyxFQUFBLEVBcVBsQjtBQWpQQztJQWhCRDtNQWtCRSw2QkFBNEIsRUFBQSxFQUU3QjtBQXBCRDtJQXdCVSxrQ0FBa0M7SUFDeEMscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxtREFBQSxFQUFvRDtBQUNsRDtNQTVCTjtRQThCTywyQkFBMEI7UUFDekIsdUJBQXNCLEVBQUEsRUFrSXhCO0FBL0hGO01BbENKO1FBb0NNLDJCQUEwQixFQUFBLEVBNkgxQjtBQWpLTjtNQXdDSyw4QkFBNkI7TUFDN0IsbURBQWtELEVBQUE7QUF6Q3ZEO1FBNENNLDJCQUEwQjtRQUMxQixnQkFBZ0I7UUFDSyxrQ0FBa0MsRUFBQTtBQTlDN0Q7UUFrRE0sMkJBQTBCLEVBQUE7QUFsRGhDO01BdURrQiw4QkFBNkIsRUFBQTtBQUN6QztRQXhETjtVQTBETSwrRkFBOEYsRUFBQSxFQUc3RjtBQTdEUDtNQStEUywwRUFBeUU7TUFDekUscUJBQXFCO01BQ3hCLFdBQVc7TUFDWCxnREFBK0MsRUFBQTtBQWxFckQ7UUFvRVUsa0NBQWlDO1FBQ3BDLDRDQUEyQztRQUMzQyxrQ0FBaUM7UUFDakMsd0JBQXdCO1FBQ3hCLFdBQVUsRUFBQTtBQXhFakI7UUE0RVMsdUJBQXVCO1FBQzFCLFlBQVk7UUFDWixvQkFBZ0I7UUFDaEIsd0JBQXdCO1FBQ3hCLGtDQUFrQztRQUNqQywyQkFBNEIsRUFBQTtBQWpGbkM7VUFtRk8sa0NBQWtDLEVBQUE7QUFuRnpDO01Bd0ZRLHlCQUFhLEVBQUE7QUF4RnJCO1FBNkZXLHNDQUFxQyxFQUFBO0FBQ25DO1VBOUZiO1lBZ0dRLG9EQUFtRCxFQUFBLEVBRWxEO0FBbEdUO1FBeUdXLHFDQUFvQyxFQUFBO0FBQ2xDO1VBMUdiO1lBNEdRLG9EQUFtRCxFQUFBLEVBYWxEO0FBekhUO1VBZ0hRLDZCQUE0QixFQUFBO0FBaEhwQztVQW9IVyxXQUFXO1VBQ2QsV0FBVztVQUNYLGFBQWE7VUFBSyxnQ0FBd0I7a0JBQXhCLHdCQUF3QjtVQUMxQywrREFBK0QsRUFBQTtBQXZIdkU7UUErSE0saUNBQWdDO1FBQ2hDLG9EQUFtRCxFQUFBO0FBQ25EO1VBaklOO1lBbUlPLG9EQUFtRCxFQUFBLEVBNEJwRDtBQS9KTjtVQXVJTyxrQ0FBaUM7VUFDakMsNkJBQTRCO1VBQzVCLG1CQUFtQixFQUFBO0FBQ25CO1lBMUlQO2NBMklRLG1CQUFtQjtjQUNuQixrQ0FBaUM7Y0FDakMsbUJBQW1CLEVBQUEsRUFHcEI7QUFoSlA7VUFtSk8sa0NBQWlDLEVBQUE7QUFuSnhDO1VBc0pPLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIsbUJBQW1CO1VBQ25CLDZDQUE2QztVQUM3QyxrQkFBa0I7VUFDbEIsWUFBWTtVQUNaLFVBQVU7VUFDVixpQ0FBeUI7a0JBQXpCLHlCQUF5QixFQUFBO0FBN0poQztJQXFLQSxXQUFXO0lBQ1gsVUFBVSxFQUFBO0FBdEtWO0lBMEtBLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsVUFBVSxFQUFBO0FBNUtWO0lBaUxBLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsbURBQW1ELEVBQUE7QUFuTG5EO0lBdUxBLGNBQWM7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQixFQUFBO0FBMUxwQjtJQThMQSxhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGdCQUFnQixFQUFBO0FBbk1oQjtJQXVNQSxtREFBbUQ7SUFDbkQsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZSxFQUFBO0FBM01mO0lBK01BLG1CQUFtQixFQUFBO0FBL01uQjtJQW1OQSxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQixFQUFBO0FBck5qQjtJQXlOQSxlQUFlO0lBQ2YsWUFBWSxFQUFBO0FBMU5aO0lBOE5HLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBO0FBcE8xQjtJQXdPQSxXQUFXO0lBQ1gsVUFBVSxFQUFBO0FBek9WO0lBNk9BLFdBQ0QsRUFBQTtBQTlPQztJQWlQQSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFVBQVUsRUFBQTtBQW5QVjtJQXVQQSxnQkFBZ0I7SUFDaEIsV0FBVyxFQUFBO0FBeFBYO0lBNFBBLG1EQUFtRDtJQUNuRCxTQUFTO0lBQ1QsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGb290ZXIgU3RhcnQgKi9cclxuaW9uLWZvb3RlclxyXG57XHJcbiAgIFtjaGF0LWJvdHRvbV1cclxuXHRcdFx0XHQgICB7ICBwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMTApO1xyXG5cdFx0XHRcdCAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdCAgd2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHQgIGJvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5LWNoYXQpO1xyXG5cdFx0XHRcdFx0ICBpb24taW5wdXRcclxuXHRcdFx0XHRcdCAgeyAgIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdFx0ICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5LWNoYXQpO1xyXG5cdFx0XHRcdFx0XHQgIGJvcmRlci1yYWRpdXM6dmFyKC0taW9uLXZhbHVlLTMwKTtcclxuXHRcdFx0XHRcdFx0ICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XHJcblx0XHRcdFx0XHRcdCAgZmxvYXQ6bGVmdDtcclxuXHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0ICBbYXR0YWNoLWljb25dXHJcblx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdCAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRyaWdodDogNzVweDtcclxuXHRcdFx0XHRcdFx0dG9wOnZhcigtLWlvbi12YWx1ZS0yOCk7XHJcblx0XHRcdFx0XHRcdHotaW5kZXg6IDk7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xOCk7XHJcblx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdCAgaW9uLWJ1dHRvblxyXG5cdFx0XHRcdFx0ICB7XHJcblx0XHRcdFx0XHRcdCAgICB3aWR0aDogdmFyKC0taW9uLXdoLTQwKTtcclxuXHRcdFx0XHRcdFx0XHRmbG9hdDogcmlnaHQ7XHJcblx0XHRcdFx0XHRcdFx0LS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiB2YXIoLS1pb24td2gtNDApO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMCk7XHJcblx0XHRcdFx0XHRcdFx0IG1hcmdpbjogIHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0aW9uLWljb25cclxuXHRcdFx0XHRcdFx0XHR7Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTIwKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHQgICB9IFxyXG4mOmJlZm9yZVxyXG57XHJcblx0ZGlzcGxheTpub25lO1xyXG59XHRcclxufVx0XHRcdFx0ICAgXHJcbi8qIEZvb3RlciBFbmRzICovXHJcbiBpb24tY29udGVudFxyXG57ICBcclxuXHQtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHR7XHJcbiAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcbiAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuICAgIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0fVxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTFweClcclxuXHRcdHtcclxuXHRcdFx0ICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdH1cclxuXHQuY29udGFpbmVyXHJcblx0e1xyXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0e1xyXG5cdFx0XHRwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdFx0fVxyXG5cdH1cclxuLyogTWVzc2FnZXMgTGlzdCBTdGFydCAqL1xyXG5cdFx0XHQgICBbbWVzc2FnZXMtbGlzdF1cclxuXHRcdFx0ICAgeyAgXHJcblx0XHRcdCAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdC8qbWFyZ2luOnZhcigtLWlvbi1tYXJnaW4tMzApIHZhcigtLWlvbi1tYXJnaW4tMCk7Ki9cclxuXHRcdFx0XHRcdCAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KVxyXG5cdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHRcdCBtYXJnaW46dmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdFx0XHQgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCAgIH1cdFxyXG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ICBtYXJnaW46dmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFtjaGF0LWhlYWRdXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctMTUpO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleS1jaGF0KTtcclxuXHRcdFx0XHRcdFx0W2NoYXQtdGl0bGVdXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46dmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRwXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46dmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVx0XHJcbiAgICAgICAgICAgICAgICAgW3RvcC1jaGF0XVxyXG5cdFx0XHRcdCAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICBwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTE1KTtcclxuXHRcdFx0XHRcdCAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KVxyXG5cdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHQgcGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMCkgdmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ICAgfVx0XHJcblx0XHRcdFx0ICAgfVx0XHRcdFx0ICAgXHJcblx0XHRcdFx0ICAgW2NoYXQtYm90dG9tXVxyXG5cdFx0XHRcdCAgIHsgIHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0xMCk7XHJcblx0XHRcdFx0ICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0ICB3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdCAgYm9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXktY2hhdCk7XHJcblx0XHRcdFx0XHQgIGlvbi1pbnB1dFxyXG5cdFx0XHRcdFx0ICB7ICAgYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHQgIGJvcmRlcjoxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXktY2hhdCk7XHJcblx0XHRcdFx0XHRcdCAgYm9yZGVyLXJhZGl1czp2YXIoLS1pb24tdmFsdWUtMzApO1xyXG5cdFx0XHRcdFx0XHQgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuXHRcdFx0XHRcdFx0ICBmbG9hdDpsZWZ0O1xyXG5cdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHQgIGlvbi1idXR0b25cclxuXHRcdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0XHQgICAgd2lkdGg6IHZhcigtLWlvbi13aC00MCk7XHJcblx0XHRcdFx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogdmFyKC0taW9uLXdoLTQwKTtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTApO1xyXG5cdFx0XHRcdFx0XHRcdCBtYXJnaW46ICB2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRcdGlvbi1pY29uXHJcblx0XHRcdFx0XHRcdFx0e2ZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0yMCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0ICAgfSAgXHJcblx0XHRcdFx0ICBpb24taXRlbVxyXG5cdFx0XHRcdCAgeyBcdC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHQgICAmLmNoYXQtbGVmdFxyXG5cdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdFx0XHQgICBpb24tbGFiZWxcclxuXHRcdFx0XHRcdFx0ICAgeyBcdGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXktY2hhdCk7XHJcblx0XHRcdFx0XHRcdCAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTEwKSB2YXIoLS1pb24tcGFkZGluZy0xMCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdFx0ICAgXHJcblx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdCAgICYuY2hhdC1yaWdodFxyXG5cdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdFx0XHQgICBpb24tbGFiZWxcclxuXHRcdFx0XHRcdFx0ICAgeyBcdGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWRhcmtibHVlKTtcclxuXHRcdFx0XHRcdFx0ICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctMTApIHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHAgICwgaW9uLW5vdGVcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdCY6YWZ0ZXJcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgICBjb250ZW50OiAnJztcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmlnaHQ6IDkwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6IGluaXRpYWw7ICAgIHRyYW5zZm9ybTogcm90YXRlKDczZGVnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsdWUpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdCAgIFxyXG5cdFx0XHRcdFx0ICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6dmFyKC0taW9uLXZhbHVlLTQpO1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctMTApIHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcclxuXHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0xMCkgdmFyKC0taW9uLXBhZGRpbmctMTApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRwXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcblx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0XHRcdFx0XHR7d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogbm9ybWFsO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlvbi1ub3RlXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXdpZHRoOiAxMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1jb2xvcjogI2U2ZTVlYiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogLTFweDtcclxuXHRcdFx0XHRcdFx0XHRcdGxlZnQ6IDEzcHg7XHJcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtNzNkZWcpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCAgfVx0XHRcdFx0ICBcclxuXHRcdFx0ICAgfVxyXG5cdFx0XHQgICAvKiBNZXNzYWdlcyBMaXN0IEVuZHMgKi9cclxuXHJcbiAucmVjZW50X2hlYWRpbmcge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5zcmNoX2JhciB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdHdpZHRoOiA2MCU7XHJcblxyXG59XHJcblxyXG4uaGVhZGluZF9zcmNoIHtcclxuXHRwYWRkaW5nOiAxMHB4IDI5cHggMTBweCAyMHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5LWNoYXQpO1xyXG59XHJcblxyXG4ucmVjZW50X2hlYWRpbmcgaDQge1xyXG5cdGNvbG9yOiAjYTAxNjE2O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbn1cclxuXHJcbi5zcmNoX2JhciBpbnB1dCB7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleS1jaGF0KTtcclxuXHRib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcclxuXHR3aWR0aDogODAlO1xyXG5cdHBhZGRpbmc6IDJweCAwIDRweCA2cHg7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiBidXR0b24ge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuXHRib3JkZXI6IG1lZGl1bSBub25lO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Y29sb3I6ICM3MDcwNzA7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIHtcclxuXHRtYXJnaW46IDAgMCAwIC0yN3B4O1xyXG59XHJcblxyXG4uY2hhdF9pYiBoNSB7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGNvbG9yOiAjNDY0NjQ2O1xyXG5cdG1hcmdpbjogMCAwIDhweCAwO1xyXG59XHJcblxyXG4uY2hhdF9pYiBoNSBzcGFuIHtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY2hhdF9pYiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjOTg5ODk4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLmNoYXRfaW1nIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogMTElO1xyXG59XHJcblxyXG4uY2hhdF9pbWcgaW1nIHtcclxuXHR3aWR0aDogMTAwJVxyXG59XHJcblxyXG4uY2hhdF9pYiB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0cGFkZGluZzogMCAwIDAgMTVweDtcclxuXHR3aWR0aDogODglO1xyXG59XHJcblxyXG4uY2hhdF9wZW9wbGUge1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Y2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5jaGF0X2xpc3Qge1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleS1jaGF0KTtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMThweCAxNnB4IDEwcHg7XHJcbn1cclxuXHJcbn1cdFx0XHQgICAiXX0= */"

/***/ }),

/***/ "./src/app/messages/messages.page.ts":
/*!*******************************************!*\
  !*** ./src/app/messages/messages.page.ts ***!
  \*******************************************/
/*! exports provided: MessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function() { return MessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");






var MessagesPage = /** @class */ (function () {
    function MessagesPage(activatedRoute, userService, toastController, loadingController) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.is_chat_window = false;
        this.is_chat_loaded = false;
        this.errors = ['', null, undefined];
        this.product_id = activatedRoute.snapshot.paramMap.get('product_id');
        this.vendor_type = activatedRoute.snapshot.paramMap.get('vendor_type');
        this.vendor_id = activatedRoute.snapshot.paramMap.get('vendor_id');
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_5__["config"].IMAGES_URL;
    }
    MessagesPage.prototype.ngOnInit = function () {
    };
    MessagesPage.prototype.ionViewDidEnter = function () {
        var token = localStorage.getItem('sin_auth_token');
        this.userId = this.userService.decryptData(token, _config__WEBPACK_IMPORTED_MODULE_5__["config"].ENC_SALT);
        if (this.userId == 0) {
            this.userId = Math.floor(Math.random() * 100000000);
        }
        this.chatList();
    };
    MessagesPage.prototype.chatList = function () {
        var _this = this;
        this.presentLoading();
        if (this.errors.indexOf(this.product_id) >= 0 || this.errors.indexOf(this.vendor_type) >= 0 || this.errors.indexOf(this.vendor_id) >= 0) {
            this.getChatUsers();
        }
        else {
            var pro_name = localStorage.getItem('sin_chat_product_name');
            var pro_id = localStorage.getItem('sin_chat_pro_unique_id');
            this.userService.postData({ from_user_id: this.userId, from_user_type: 'user', product_id: this.product_id, to_user_type: (this.vendor_type == '0' ? 'vendor' : 'admin'), to_user_id: this.vendor_id, message_type: 'text', message: 'Chat started for product ' + pro_name + '(' + pro_id + ')' }, 'addChat').subscribe(function (result) {
                _this.getChatUsers();
            }, function (err) {
                _this.stopLoading();
            });
        }
    };
    MessagesPage.prototype.getChatUsers = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId }, 'getChatUsers').subscribe(function (result) {
            _this.stopLoading();
            _this.chat_users = result.users;
        }, function (err) {
            _this.stopLoading();
            _this.chat_users = [];
        });
    };
    MessagesPage.prototype.getChat = function (user) {
        var _this = this;
        this.active_chat = user;
        this.is_chat_loaded = false;
        this.is_chat_window = true;
        this.userService.postData({ user_id: this.userId, from_user_type: 'user', to_user_id: this.active_chat.to_user_id, to_user_type: this.active_chat.to_user_type }, 'getChat').subscribe(function (result) {
            console.log(result);
            _this.is_chat_loaded = true;
            _this.chat_list = result.chat;
        }, function (err) {
            _this.is_chat_loaded = true;
            _this.chat_list = [];
        });
    };
    MessagesPage.prototype.addChat = function (message) {
        var _this = this;
        console.log('aaaaaaa');
        if (this.errors.indexOf(message) == -1) {
            this.message = '';
            this.userService.postData({ from_user_id: this.userId, from_user_type: 'user', product_id: this.product_id, to_user_type: this.active_chat.to_user_type, to_user_id: this.active_chat.to_user_id, message_type: 'text', message: message }, 'addChat').subscribe(function (result) {
                console.log(result);
                _this.chat_list.push(result.chat);
            }, function (err) {
                _this.is_chat_loaded = true;
            });
        }
    };
    MessagesPage.prototype.presentToast = function (message, color) {
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
    MessagesPage.prototype.presentLoading = function () {
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
    MessagesPage.prototype.stopLoading = function () {
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
    MessagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.page.html */ "./src/app/messages/messages.page.html"),
            styles: [__webpack_require__(/*! ./messages.page.scss */ "./src/app/messages/messages.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], MessagesPage);
    return MessagesPage;
}());



/***/ })

}]);
//# sourceMappingURL=messages-messages-module.js.map