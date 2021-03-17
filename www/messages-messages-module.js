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

module.exports = "/* Footer Start */\nion-footer [chat-bottom] {\n  padding: var(--ion-padding-15) var(--ion-padding-15) var(--ion-padding-10);\n  display: inline-block;\n  width: 100%;\n  border-top: 1px solid var(--ion-color-grey-chat); }\nion-footer [chat-bottom] ion-input {\n    background: var(--ion-color-white);\n    border: 1px solid var(--ion-color-grey-chat);\n    border-radius: var(--ion-value-30);\n    width: calc(100% - 50px);\n    float: left; }\nion-footer [chat-bottom] [attach-icon] {\n    position: absolute;\n    right: 75px;\n    top: var(--ion-value-28);\n    z-index: 9;\n    font-size: var(--ion-font-size-18); }\nion-footer [chat-bottom] ion-button {\n    width: var(--ion-wh-40);\n    float: right;\n    --border-radius: 50%;\n    height: var(--ion-wh-40);\n    font-size: var(--ion-font-size-10);\n    margin: var(--ion-margin-0); }\nion-footer [chat-bottom] ion-button ion-icon {\n      font-size: var(--ion-font-size-20); }\nion-footer:before {\n  display: none; }\n/* Footer Ends */\nion-content {\n  --background:var(--ion-color-grey);\n  /* Messages List Start */\n  /* Messages List Ends */ }\n@media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-start: var(--ion-padding-0);\n      --padding-end: var(--ion-padding-0);\n      --padding-top: var(--ion-padding-0);\n      --padding-bottom: var(--ion-padding-0); } }\n@media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top: var(--ion-padding-0); } }\n@media only screen and (max-width: 991px) {\n    ion-content .container {\n      padding: var(--ion-padding-0); } }\nion-content [messages-list] {\n    background: var(--ion-color-white);\n    display: inline-block;\n    width: 100%;\n    /*margin:var(--ion-margin-30) var(--ion-margin-0);*/ }\n@media only screen and (max-width: 767px) {\n      ion-content [messages-list] {\n        margin: var(--ion-margin-0);\n        background: transparent; } }\n@media only screen and (max-width: 768px) {\n      ion-content [messages-list] {\n        margin: var(--ion-margin-0); } }\nion-content [messages-list] [chat-head] {\n      padding: var(--ion-padding-15);\n      border-bottom: 1px solid var(--ion-color-grey-chat); }\nion-content [messages-list] [chat-head] [chat-title] {\n        margin: var(--ion-margin-0);\n        font-weight: 600;\n        font-size: var(--ion-font-size-16); }\nion-content [messages-list] [chat-head] p {\n        margin: var(--ion-margin-0); }\nion-content [messages-list] [top-chat] {\n      padding: var(--ion-padding-15); }\n@media only screen and (max-width: 767px) {\n        ion-content [messages-list] [top-chat] {\n          padding: var(--ion-padding-15) var(--ion-padding-0) var(--ion-padding-15) var(--ion-padding-15); } }\nion-content [messages-list] [chat-bottom] {\n      padding: var(--ion-padding-15) var(--ion-padding-15) var(--ion-padding-10);\n      display: inline-block;\n      width: 100%;\n      border-top: 1px solid var(--ion-color-grey-chat); }\nion-content [messages-list] [chat-bottom] ion-input {\n        background: var(--ion-color-white);\n        border: 1px solid var(--ion-color-grey-chat);\n        border-radius: var(--ion-value-30);\n        width: calc(100% - 50px);\n        float: left; }\nion-content [messages-list] [chat-bottom] ion-button {\n        width: var(--ion-wh-40);\n        float: right;\n        --border-radius: 50%;\n        height: var(--ion-wh-40);\n        font-size: var(--ion-font-size-10);\n        margin: var(--ion-margin-0); }\nion-content [messages-list] [chat-bottom] ion-button ion-icon {\n          font-size: var(--ion-font-size-20); }\nion-content [messages-list] ion-item {\n      --background: transparent; }\nion-content [messages-list] ion-item.chat-left ion-label {\n        background: var(--ion-color-grey-chat); }\n@media only screen and (max-width: 576px) {\n          ion-content [messages-list] ion-item.chat-left ion-label {\n            padding: var(--ion-padding-10) var(--ion-padding-10); } }\nion-content [messages-list] ion-item.chat-right ion-label {\n        background: var(--ion-color-darkblue); }\n@media only screen and (max-width: 576px) {\n          ion-content [messages-list] ion-item.chat-right ion-label {\n            padding: var(--ion-padding-10) var(--ion-padding-10); } }\nion-content [messages-list] ion-item.chat-right ion-label p, ion-content [messages-list] ion-item.chat-right ion-label ion-note {\n          color: var(--ion-color-white); }\nion-content [messages-list] ion-item.chat-right ion-label:after {\n          content: '';\n          right: 90px;\n          left: initial;\n          -webkit-transform: rotate(73deg);\n                  transform: rotate(73deg);\n          border-color: var(--ion-color-darkblue) transparent transparent; }\nion-content [messages-list] ion-item ion-label {\n        border-radius: var(--ion-value-4);\n        padding: var(--ion-padding-10) var(--ion-padding-10); }\n@media only screen and (max-width: 576px) {\n          ion-content [messages-list] ion-item ion-label {\n            padding: var(--ion-padding-10) var(--ion-padding-10); } }\nion-content [messages-list] ion-item ion-label p {\n          font-size: var(--ion-font-size-12);\n          color: var(--ion-color-black);\n          white-space: normal; }\n@media only screen and (max-width: 576px) {\n            ion-content [messages-list] ion-item ion-label p {\n              white-space: nowrap;\n              margin-bottom: var(--ion-margin-0);\n              line-height: normal; } }\nion-content [messages-list] ion-item ion-label ion-note {\n          font-size: var(--ion-font-size-10); }\nion-content [messages-list] ion-item ion-label:after {\n          content: '';\n          border-width: 10px;\n          border-style: solid;\n          border-color: #e6e5eb transparent transparent;\n          position: absolute;\n          bottom: -1px;\n          left: 13px;\n          -webkit-transform: rotate(-73deg);\n                  transform: rotate(-73deg); }\nion-content .recent_heading {\n    float: left;\n    width: 40%; }\nion-content .srch_bar {\n    display: inline-block;\n    text-align: right;\n    width: 60%; }\nion-content .headind_srch {\n    padding: 10px 29px 10px 20px;\n    overflow: hidden;\n    border-bottom: 1px solid var(--ion-color-grey-chat); }\nion-content .recent_heading h4 {\n    color: #a01616;\n    font-size: 16px;\n    margin: auto;\n    line-height: 29px; }\nion-content .srch_bar input {\n    outline: none;\n    border: 1px solid var(--ion-color-grey-chat);\n    border-width: 0 0 1px 0;\n    width: 80%;\n    padding: 2px 0 4px 6px;\n    background: none; }\nion-content .srch_bar .input-group-addon button {\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n    border: medium none;\n    padding: 0;\n    color: #707070;\n    font-size: 18px; }\nion-content .srch_bar .input-group-addon {\n    margin: 0 0 0 -27px; }\nion-content .chat_ib h5 {\n    font-size: 15px;\n    color: #464646;\n    margin: 0 0 8px 0; }\nion-content .chat_ib h5 span {\n    font-size: 13px;\n    float: right; }\nion-content .chat_ib p {\n    font-size: 12px;\n    color: #989898;\n    margin: auto;\n    display: inline-block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\nion-content .chat_img {\n    float: left;\n    width: 11%; }\nion-content .chat_img img {\n    width: 100%; }\nion-content .chat_ib {\n    float: left;\n    padding: 0 0 0 15px;\n    width: 88%; }\nion-content .chat_people {\n    overflow: hidden;\n    clear: both; }\nion-content .chat_list {\n    border-bottom: 1px solid var(--ion-color-grey-chat);\n    margin: 0;\n    padding: 18px 16px 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FBQ0E7RUFHVSwwRUFBeUU7RUFDekUscUJBQXFCO0VBQ3hCLFdBQVc7RUFDWCxnREFBK0MsRUFBQTtBQU50RDtJQVFXLGtDQUFpQztJQUNwQyw0Q0FBMkM7SUFDM0Msa0NBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4QixXQUFVLEVBQUE7QUFabEI7SUFnQk8sa0JBQWtCO0lBQ25CLFdBQVc7SUFDWCx3QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGtDQUFrQyxFQUFBO0FBcEJ4QztJQXdCVSx1QkFBdUI7SUFDMUIsWUFBWTtJQUNaLG9CQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsa0NBQWtDO0lBQ2pDLDJCQUE0QixFQUFBO0FBN0JwQztNQStCUSxrQ0FBa0MsRUFBQTtBQS9CMUM7RUFxQ0MsYUFBWSxFQUFBO0FBR2IsZ0JBQUE7QUFDQztFQUVBLGtDQUFhO0VBbUJkLHdCQUFBO0VBNklNLHVCQUFBLEVBQXdCO0FBL0o3QjtJQUhBO01BS0UscUNBQWdCO01BQ2YsbUNBQWM7TUFDZCxtQ0FBYztNQUNkLHNDQUFpQixFQUFBLEVBeVBwQjtBQXZQQTtJQVZBO01BWUksbUNBQWMsRUFBQSxFQXFQbEI7QUFqUEM7SUFoQkQ7TUFrQkUsNkJBQTRCLEVBQUEsRUFFN0I7QUFwQkQ7SUF3QlUsa0NBQWtDO0lBQ3hDLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsbURBQUEsRUFBb0Q7QUFDbEQ7TUE1Qk47UUE4Qk8sMkJBQTBCO1FBQ3pCLHVCQUFzQixFQUFBLEVBa0l4QjtBQS9IRjtNQWxDSjtRQW9DTSwyQkFBMEIsRUFBQSxFQTZIMUI7QUFqS047TUF3Q0ssOEJBQTZCO01BQzdCLG1EQUFrRCxFQUFBO0FBekN2RDtRQTRDTSwyQkFBMEI7UUFDMUIsZ0JBQWdCO1FBQ0ssa0NBQWtDLEVBQUE7QUE5QzdEO1FBa0RNLDJCQUEwQixFQUFBO0FBbERoQztNQXVEa0IsOEJBQTZCLEVBQUE7QUFDekM7UUF4RE47VUEwRE0sK0ZBQThGLEVBQUEsRUFHN0Y7QUE3RFA7TUErRFMsMEVBQXlFO01BQ3pFLHFCQUFxQjtNQUN4QixXQUFXO01BQ1gsZ0RBQStDLEVBQUE7QUFsRXJEO1FBb0VVLGtDQUFpQztRQUNwQyw0Q0FBMkM7UUFDM0Msa0NBQWlDO1FBQ2pDLHdCQUF3QjtRQUN4QixXQUFVLEVBQUE7QUF4RWpCO1FBNEVTLHVCQUF1QjtRQUMxQixZQUFZO1FBQ1osb0JBQWdCO1FBQ2hCLHdCQUF3QjtRQUN4QixrQ0FBa0M7UUFDakMsMkJBQTRCLEVBQUE7QUFqRm5DO1VBbUZPLGtDQUFrQyxFQUFBO0FBbkZ6QztNQXdGUSx5QkFBYSxFQUFBO0FBeEZyQjtRQTZGVyxzQ0FBcUMsRUFBQTtBQUNuQztVQTlGYjtZQWdHUSxvREFBbUQsRUFBQSxFQUVsRDtBQWxHVDtRQXlHVyxxQ0FBb0MsRUFBQTtBQUNsQztVQTFHYjtZQTRHUSxvREFBbUQsRUFBQSxFQWFsRDtBQXpIVDtVQWdIUSw2QkFBNEIsRUFBQTtBQWhIcEM7VUFvSFcsV0FBVztVQUNkLFdBQVc7VUFDWCxhQUFhO1VBQUssZ0NBQXdCO2tCQUF4Qix3QkFBd0I7VUFDMUMsK0RBQStELEVBQUE7QUF2SHZFO1FBK0hNLGlDQUFnQztRQUNoQyxvREFBbUQsRUFBQTtBQUNuRDtVQWpJTjtZQW1JTyxvREFBbUQsRUFBQSxFQTRCcEQ7QUEvSk47VUF1SU8sa0NBQWlDO1VBQ2pDLDZCQUE0QjtVQUM1QixtQkFBbUIsRUFBQTtBQUNuQjtZQTFJUDtjQTJJUSxtQkFBbUI7Y0FDbkIsa0NBQWlDO2NBQ2pDLG1CQUFtQixFQUFBLEVBR3BCO0FBaEpQO1VBbUpPLGtDQUFpQyxFQUFBO0FBbkp4QztVQXNKTyxXQUFXO1VBQ1gsa0JBQWtCO1VBQ2xCLG1CQUFtQjtVQUNuQiw2Q0FBNkM7VUFDN0Msa0JBQWtCO1VBQ2xCLFlBQVk7VUFDWixVQUFVO1VBQ1YsaUNBQXlCO2tCQUF6Qix5QkFBeUIsRUFBQTtBQTdKaEM7SUFxS0EsV0FBVztJQUNYLFVBQVUsRUFBQTtBQXRLVjtJQTBLQSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFVBQVUsRUFBQTtBQTVLVjtJQWlMQSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLG1EQUFtRCxFQUFBO0FBbkxuRDtJQXVMQSxjQUFjO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtBQTFMcEI7SUE4TEEsYUFBYTtJQUNiLDRDQUE0QztJQUM1Qyx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixnQkFBZ0IsRUFBQTtBQW5NaEI7SUF1TUEsbURBQW1EO0lBQ25ELG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsY0FBYztJQUNkLGVBQWUsRUFBQTtBQTNNZjtJQStNQSxtQkFBbUIsRUFBQTtBQS9NbkI7SUFtTkEsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTtBQXJOakI7SUF5TkEsZUFBZTtJQUNmLFlBQVksRUFBQTtBQTFOWjtJQThORyxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUIsRUFBQTtBQXBPMUI7SUF3T0EsV0FBVztJQUNYLFVBQVUsRUFBQTtBQXpPVjtJQTZPQSxXQUNELEVBQUE7QUE5T0M7SUFpUEEsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixVQUFVLEVBQUE7QUFuUFY7SUF1UEEsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBQTtBQXhQWDtJQTRQQSxtREFBbUQ7SUFDbkQsU0FBUztJQUNULHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRm9vdGVyIFN0YXJ0ICovXHJcbmlvbi1mb290ZXJcclxue1xyXG4gICBbY2hhdC1ib3R0b21dXHJcblx0XHRcdFx0ICAgeyAgcGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcclxuXHRcdFx0XHQgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHQgIHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0ICBib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleS1jaGF0KTtcclxuXHRcdFx0XHRcdCAgaW9uLWlucHV0XHJcblx0XHRcdFx0XHQgIHsgICBiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHRcdCAgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleS1jaGF0KTtcclxuXHRcdFx0XHRcdFx0ICBib3JkZXItcmFkaXVzOnZhcigtLWlvbi12YWx1ZS0zMCk7XHJcblx0XHRcdFx0XHRcdCAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG5cdFx0XHRcdFx0XHQgIGZsb2F0OmxlZnQ7XHJcblx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdCAgW2F0dGFjaC1pY29uXVxyXG5cdFx0XHRcdFx0ICB7XHJcblx0XHRcdFx0XHQgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0cmlnaHQ6IDc1cHg7XHJcblx0XHRcdFx0XHRcdHRvcDp2YXIoLS1pb24tdmFsdWUtMjgpO1xyXG5cdFx0XHRcdFx0XHR6LWluZGV4OiA5O1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTgpO1xyXG5cdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHQgIGlvbi1idXR0b25cclxuXHRcdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0XHQgICAgd2lkdGg6IHZhcigtLWlvbi13aC00MCk7XHJcblx0XHRcdFx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogdmFyKC0taW9uLXdoLTQwKTtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTApO1xyXG5cdFx0XHRcdFx0XHRcdCBtYXJnaW46ICB2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRcdGlvbi1pY29uXHJcblx0XHRcdFx0XHRcdFx0e2ZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0yMCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0ICAgfSBcclxuJjpiZWZvcmVcclxue1xyXG5cdGRpc3BsYXk6bm9uZTtcclxufVx0XHJcbn1cdFx0XHRcdCAgIFxyXG4vKiBGb290ZXIgRW5kcyAqL1xyXG4gaW9uLWNvbnRlbnRcclxueyAgXHJcblx0LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5KTtcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0e1xyXG4gICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcbiAgICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdH1cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkxcHgpXHJcblx0XHR7XHJcblx0XHRcdCAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0XHR9XHJcblx0LmNvbnRhaW5lclxyXG5cdHtcclxuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdHtcclxuXHRcdFx0cGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdH1cclxuXHR9XHJcbi8qIE1lc3NhZ2VzIExpc3QgU3RhcnQgKi9cclxuXHRcdFx0ICAgW21lc3NhZ2VzLWxpc3RdXHJcblx0XHRcdCAgIHsgIFxyXG5cdFx0XHQgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHQvKm1hcmdpbjp2YXIoLS1pb24tbWFyZ2luLTMwKSB2YXIoLS1pb24tbWFyZ2luLTApOyovXHJcblx0XHRcdFx0XHQgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweClcclxuXHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0XHQgbWFyZ2luOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0ICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1x0XHRcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQgICB9XHRcclxuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdCAgbWFyZ2luOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRbY2hhdC1oZWFkXVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTE1KTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXktY2hhdCk7XHJcblx0XHRcdFx0XHRcdFtjaGF0LXRpdGxlXVxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cdFxyXG4gICAgICAgICAgICAgICAgIFt0b3AtY2hhdF1cclxuXHRcdFx0XHQgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgcGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0xNSk7XHJcblx0XHRcdFx0XHQgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweClcclxuXHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0IHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTApIHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0xNSk7XHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCAgIH1cdFxyXG5cdFx0XHRcdCAgIH1cdFx0XHRcdCAgIFxyXG5cdFx0XHRcdCAgIFtjaGF0LWJvdHRvbV1cclxuXHRcdFx0XHQgICB7ICBwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMTApO1xyXG5cdFx0XHRcdCAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdCAgd2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHQgIGJvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5LWNoYXQpO1xyXG5cdFx0XHRcdFx0ICBpb24taW5wdXRcclxuXHRcdFx0XHRcdCAgeyAgIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdFx0ICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5LWNoYXQpO1xyXG5cdFx0XHRcdFx0XHQgIGJvcmRlci1yYWRpdXM6dmFyKC0taW9uLXZhbHVlLTMwKTtcclxuXHRcdFx0XHRcdFx0ICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XHJcblx0XHRcdFx0XHRcdCAgZmxvYXQ6bGVmdDtcclxuXHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0ICBpb24tYnV0dG9uXHJcblx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdFx0ICAgIHdpZHRoOiB2YXIoLS1pb24td2gtNDApO1xyXG5cdFx0XHRcdFx0XHRcdGZsb2F0OiByaWdodDtcclxuXHRcdFx0XHRcdFx0XHQtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IHZhcigtLWlvbi13aC00MCk7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEwKTtcclxuXHRcdFx0XHRcdFx0XHQgbWFyZ2luOiAgdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdFx0XHRpb24taWNvblxyXG5cdFx0XHRcdFx0XHRcdHtmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMjApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdCAgIH0gIFxyXG5cdFx0XHRcdCAgaW9uLWl0ZW1cclxuXHRcdFx0XHQgIHsgXHQtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0ICAgJi5jaGF0LWxlZnRcclxuXHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0ICBcclxuXHRcdFx0XHRcdFx0ICAgaW9uLWxhYmVsXHJcblx0XHRcdFx0XHRcdCAgIHsgXHRiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5LWNoYXQpO1xyXG5cdFx0XHRcdFx0XHQgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0xMCkgdmFyKC0taW9uLXBhZGRpbmctMTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdCAgIFxyXG5cdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHQgICAmLmNoYXQtcmlnaHRcclxuXHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0ICBcclxuXHRcdFx0XHRcdFx0ICAgaW9uLWxhYmVsXHJcblx0XHRcdFx0XHRcdCAgIHsgXHRiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XHJcblx0XHRcdFx0XHRcdCAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTEwKSB2YXIoLS1pb24tcGFkZGluZy0xMCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRwICAsIGlvbi1ub3RlXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQmOmFmdGVyXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgY29udGVudDogJyc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJpZ2h0OiA5MHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZWZ0OiBpbml0aWFsOyAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3M2RlZyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibHVlKSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHQgICBcclxuXHRcdFx0XHRcdCAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOnZhcigtLWlvbi12YWx1ZS00KTtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTEwKSB2YXIoLS1pb24tcGFkZGluZy0xMCk7XHJcblx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctMTApIHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0cFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1ibGFjayk7XHJcblx0XHRcdFx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG5cdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0e3doaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpb24tbm90ZVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEwKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0JjphZnRlciB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJztcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci13aWR0aDogMTBweDtcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItY29sb3I6ICNlNmU1ZWIgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0XHRib3R0b206IC0xcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAxM3B4O1xyXG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTczZGVnKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHQgIH1cdFx0XHRcdCAgXHJcblx0XHRcdCAgIH1cclxuXHRcdFx0ICAgLyogTWVzc2FnZXMgTGlzdCBFbmRzICovXHJcblxyXG4gLnJlY2VudF9oZWFkaW5nIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uc3JjaF9iYXIge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHR3aWR0aDogNjAlO1xyXG5cclxufVxyXG5cclxuLmhlYWRpbmRfc3JjaCB7XHJcblx0cGFkZGluZzogMTBweCAyOXB4IDEwcHggMjBweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleS1jaGF0KTtcclxufVxyXG5cclxuLnJlY2VudF9oZWFkaW5nIGg0IHtcclxuXHRjb2xvcjogI2EwMTYxNjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG59XHJcblxyXG4uc3JjaF9iYXIgaW5wdXQge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXktY2hhdCk7XHJcblx0Ym9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XHJcblx0d2lkdGg6IDgwJTtcclxuXHRwYWRkaW5nOiAycHggMCA0cHggNnB4O1xyXG5cdGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5zcmNoX2JhciAuaW5wdXQtZ3JvdXAtYWRkb24gYnV0dG9uIHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcblx0Ym9yZGVyOiBtZWRpdW0gbm9uZTtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGNvbG9yOiAjNzA3MDcwO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiB7XHJcblx0bWFyZ2luOiAwIDAgMCAtMjdweDtcclxufVxyXG5cclxuLmNoYXRfaWIgaDUge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRjb2xvcjogIzQ2NDY0NjtcclxuXHRtYXJnaW46IDAgMCA4cHggMDtcclxufVxyXG5cclxuLmNoYXRfaWIgaDUgc3BhbiB7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmNoYXRfaWIgcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzk4OTg5ODtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5jaGF0X2ltZyB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6IDExJTtcclxufVxyXG5cclxuLmNoYXRfaW1nIGltZyB7XHJcblx0d2lkdGg6IDEwMCVcclxufVxyXG5cclxuLmNoYXRfaWIge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHBhZGRpbmc6IDAgMCAwIDE1cHg7XHJcblx0d2lkdGg6IDg4JTtcclxufVxyXG5cclxuLmNoYXRfcGVvcGxlIHtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uY2hhdF9saXN0IHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXktY2hhdCk7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDE4cHggMTZweCAxMHB4O1xyXG59XHJcblxyXG59XHRcdFx0ICAgIl19 */"

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