(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-contacts-user-contacts-module"],{

/***/ "./src/app/user-contacts/user-contacts.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/user-contacts/user-contacts.module.ts ***!
  \*******************************************************/
/*! exports provided: UserContactsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContactsPageModule", function() { return UserContactsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-contacts.page */ "./src/app/user-contacts/user-contacts.page.ts");







var routes = [
    {
        path: '',
        component: _user_contacts_page__WEBPACK_IMPORTED_MODULE_6__["UserContactsPage"]
    }
];
var UserContactsPageModule = /** @class */ (function () {
    function UserContactsPageModule() {
    }
    UserContactsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_contacts_page__WEBPACK_IMPORTED_MODULE_6__["UserContactsPage"]]
        })
    ], UserContactsPageModule);
    return UserContactsPageModule;
}());



/***/ }),

/***/ "./src/app/user-contacts/user-contacts.page.html":
/*!*******************************************************!*\
  !*** ./src/app/user-contacts/user-contacts.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"darkred\" text-uppercase>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Chats\n    </ion-title>\n  <ion-buttons slot=\"end\" > \n          <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n\t     <ion-buttons slot=\"end\">\n          <ion-icon name=\"pin\"></ion-icon>\n    </ion-buttons>\n<ion-buttons slot=\"end\" > \n\t<ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\t\n\t </ion-buttons>\n  </ion-toolbar>\n      <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n\t              <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n\t              <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n\t              <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n\t              <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t   </div>\n</ion-header> --> \n\n<ion-content>\n<div header_height></div>\n <div users-list>\t\t\t\t\t\t\t\t\t\t\t\t     \n\t\t\n\t\t<ion-item  lines=\"none\" routerLink=\"/messages\">\n\t\t  <ion-avatar slot=\"start\">\n\t\t\t<img src=\"assets/images/testimonials/member1.png\">\n\t\t  </ion-avatar>\n\t\t  <ion-label>\n\t\t  <h3>John Smith</h3>\n\t\t  <ion-note>Today at 11:45 am</ion-note>\n\t\t  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n\t\t  </ion-label>\n\t\t</ion-item>\n\t\t<ion-item  lines=\"none\"  routerLink=\"/messages\">\n\t\t  <ion-avatar slot=\"start\"> \n\t\t\t<img src=\"assets/images/testimonials/member2.png\"> \n\t\t  </ion-avatar>\n\t\t  <ion-label>\n\t\t  <h3>David Smith</h3>\n\t\t  <ion-note>Today at 11:45 am</ion-note>\n\t\t  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n\t\t  </ion-label>\n\t\t</ion-item>\n\t\t<ion-item  lines=\"none\"  routerLink=\"/messages\">\n\t\t  <ion-avatar slot=\"start\">\n\t\t\t<img src=\"assets/images/testimonials/member3.png\">\n\t\t  </ion-avatar>\n\t\t  <ion-label>\n\t\t  <h3>Steve Jones</h3>\n\t\t  <ion-note>Today at 11:45 am</ion-note>\n\t\t  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n\t\t  </ion-label>\n\t\t</ion-item>\n\t\t<ion-item  lines=\"none\"  routerLink=\"/messages\">\n\t\t  <ion-avatar slot=\"start\">\n\t\t\t<img src=\"assets/images/testimonials/member4.png\">\n\t\t  </ion-avatar>\n\t\t  <ion-label>\n\t\t  <h3>Johnson Charles</h3>\n\t\t  <ion-note>Today at 11:45 am</ion-note>\n\t\t  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n\t\t  </ion-label>\n\t\t</ion-item>\n\t\t<ion-item  lines=\"none\"  routerLink=\"/messages\">\n\t\t  <ion-avatar slot=\"start\">\n\t\t\t<img src=\"assets/images/testimonials/member1.png\">\n\t\t  </ion-avatar>\n\t\t  <ion-label>\n\t\t  <h3>Andrew Doe</h3>\n\t\t  <ion-note>Today at 11:45 am</ion-note>\n\t\t  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n\t\t  </ion-label>\n\t\t</ion-item>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/user-contacts/user-contacts.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/user-contacts/user-contacts.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey); }\n  ion-content [users-list] {\n    padding: var(--ion-padding-15); }\n  ion-content [users-list] ion-item {\n      margin-bottom: var(--ion-margin-10);\n      border-left: 2px solid var(--ion-color-darkred);\n      border-radius: 4px;\n      --background:var(--ion-color-white); }\n  ion-content [users-list] ion-item h3 {\n        font-size: var(--ion-font-size-14);\n        font-weight: 700; }\n  @media only screen and (max-width: 991px) {\n          ion-content [users-list] ion-item h3 {\n            margin-bottom: -5px;\n            font-size: var(--ion-font-size-14); } }\n  @media only screen and (max-width: 576px) {\n          ion-content [users-list] ion-item h3 {\n            font-size: var(--ion-font-size-12); } }\n  ion-content [users-list] ion-item ion-note {\n        font-size: var(--ion-font-size-13);\n        color: #a5a5a5; }\n  @media only screen and (max-width: 991px) {\n          ion-content [users-list] ion-item ion-note {\n            font-size: var(--ion-font-size-12); } }\n  @media only screen and (max-width: 576px) {\n          ion-content [users-list] ion-item ion-note {\n            font-size: var(--ion-font-size-10); } }\n  ion-content [users-list] ion-item p {\n        font-size: var(--ion-font-size-14); }\n  @media only screen and (max-width: 991px) {\n          ion-content [users-list] ion-item p {\n            font-size: var(--ion-font-size-13); } }\n  @media only screen and (max-width: 576px) {\n          ion-content [users-list] ion-item p {\n            font-size: var(--ion-font-size-12); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvdXNlci1jb250YWN0cy91c2VyLWNvbnRhY3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUVBLGtDQUFhLEVBQUE7RUFGYjtJQUtJLDhCQUE2QixFQUFBO0VBTGpDO01BT00sbUNBQW1DO01BQ3RDLCtDQUErQztNQUMvQyxrQkFBa0I7TUFDbEIsbUNBQWEsRUFBQTtFQVZoQjtRQWNHLGtDQUFpQztRQUNqQyxnQkFBZSxFQUFBO0VBQ2Y7VUFoQkg7WUFpQkksbUJBQW1CO1lBQ25CLGtDQUFpQyxFQUFBLEVBTWpDO0VBSkU7VUFwQk47WUFzQkksa0NBQWlDLEVBQUEsRUFFakM7RUF4Qko7UUEyQkcsa0NBQWlDO1FBQ2pDLGNBQWMsRUFBQTtFQUNkO1VBN0JIO1lBK0JJLGtDQUFpQyxFQUFBLEVBTWpDO0VBSkU7VUFqQ047WUFtQ0ksa0NBQWlDLEVBQUEsRUFFakM7RUFyQ0o7UUF3Q00sa0NBQWlDLEVBQUE7RUFDcEM7VUF6Q0g7WUEyQ0ksa0NBQWlDLEVBQUEsRUFNakM7RUFKRTtVQTdDTjtZQStDSSxrQ0FBaUMsRUFBQSxFQUVqQyIsImZpbGUiOiJzcmMvYXBwL3VzZXItY29udGFjdHMvdXNlci1jb250YWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgaW9uLWNvbnRlbnRcclxueyAgXHJcblx0LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5KTtcclxuICBbdXNlcnMtbGlzdF1cclxuXHRcdHtcclxuXHRcdFx0ICBwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTE1KTtcdFxyXG5cdFx0XHRpb24taXRlbVxyXG5cdFx0XHR7ICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xMCk7XHJcblx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0XHRcdC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdGgzXHJcblx0XHRcdFx0eyAgIFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0XHRmb250LXdlaWdodDo3MDA7XHJcblx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdHttYXJnaW4tYm90dG9tOiAtNXB4O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW9uLW5vdGVcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG5cdFx0XHRcdGNvbG9yOiAjYTVhNWE1O1xyXG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMilcclxuXHRcdFx0XHR9XHJcblx0XHRcdCAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTApXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRwXHJcblx0XHRcdFx0e1xyXG5cdFx0XHQgICAgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpO1xyXG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMylcclxuXHRcdFx0XHR9XHJcblx0XHRcdCAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTIpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdCB9XHRcclxuXHRcclxufVx0Il19 */"

/***/ }),

/***/ "./src/app/user-contacts/user-contacts.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-contacts/user-contacts.page.ts ***!
  \*****************************************************/
/*! exports provided: UserContactsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContactsPage", function() { return UserContactsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserContactsPage = /** @class */ (function () {
    function UserContactsPage() {
        this.buttonClickeddrop = false; //Whatever you want to initialise it as
    }
    UserContactsPage.prototype.ngOnInit = function () {
    };
    UserContactsPage.prototype.onButtonClickdrop = function () {
        this.buttonClickeddrop = !this.buttonClickeddrop;
    };
    UserContactsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-contacts',
            template: __webpack_require__(/*! ./user-contacts.page.html */ "./src/app/user-contacts/user-contacts.page.html"),
            styles: [__webpack_require__(/*! ./user-contacts.page.scss */ "./src/app/user-contacts/user-contacts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserContactsPage);
    return UserContactsPage;
}());



/***/ })

}]);
//# sourceMappingURL=user-contacts-user-contacts-module.js.map