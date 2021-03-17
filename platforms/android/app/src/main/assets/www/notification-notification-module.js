(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"],{

/***/ "./src/app/notification/notification.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification.page */ "./src/app/notification/notification.page.ts");








var routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_7__["NotificationPage"]
    }
];
var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_7__["NotificationPage"]]
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());



/***/ }),

/***/ "./src/app/notification/notification.page.html":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"darkred\"  text-uppercase>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Notifications\n    </ion-title>\n  <ion-buttons slot=\"end\" > \n          <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n \t     <ion-buttons slot=\"end\">\n          <ion-icon name=\"pin\"></ion-icon>\n    </ion-buttons>\n<ion-buttons slot=\"end\" > \n\t<ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\t\n\t </ion-buttons>\n  </ion-toolbar>\n      <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n\t              <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n\t              <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n\t              <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n\t              <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t   </div>\n</ion-header>  -->\n<ion-content>\n<div class=\"ion-padding\">\n\t<div header_height></div>\n\t<div class=\"container\">\n\t<!-- Breadcrumb Start -->\n\t\t<div breadcrumb  class=\"ion-hide-md-down\">\t\t\n\t\t\t<div breadcrumb-inner>\n\t\t\t\t<ul list-inline list-unstyled>\n\t\t\t\t\t<li><a routerLink=\"/home\">Home</a></li>\n\t\t\t\t\t<li class=\"active\">Notifications</li>\n\t\t\t\t</ul>\n\t\t\t</div><!-- /.breadcrumb-inner -->\n\t\t</div>\n\t<!-- Breadcrumb Ends -->\n\t\t<div notifications>\n\t\t\t<ion-item (click)=\"open(notis)\" [ngClass]=\"notis.isRead == 0 ? 'active' : ''\" lines=\"none\" *ngFor=\"let notis of notifications \">\n\t\t\t  <ion-avatar slot=\"start\">\n\t\t\t\t<img *ngIf=\"notis.noti_type == 1\" src=\"assets/images/products/bag.png\">\n\t\t\t\t<img *ngIf=\"notis.noti_type == 2\" src=\"assets/images/products/cross.png\">\n\t\t\t\t<img *ngIf=\"notis.noti_type == 3\" src=\"assets/images/products/check.png\">\n\t\t\t  </ion-avatar>\n\t\t\t  <ion-label>\n\t\t\t  <ng-container *ngIf=\"notis.noti_type == 1\">\n\t\t\t\t  <h3>Order Placed.</h3>\n\t\t\t\t  <p>Your order (#{{notis.noti_data}}) has been placed successfully.</p>\n\t\t\t  </ng-container>\n\t\t\t  <ng-container *ngIf=\"notis.noti_type == 2\">\n\t\t\t\t  <h3>Order Cancelled.</h3>\n\t\t\t\t  <p>Your order (#{{notis.noti_data}}) has been cancelled.</p>\n\t\t\t  </ng-container>\n\t\t\t  <ng-container *ngIf=\"notis.noti_type == 3\">\n\t\t\t\t  <h3>Order Delivered.</h3>\n\t\t\t\t  <p>Your order (#{{notis.noti_data}}) has been delivered successfully.</p>\n\t\t\t  </ng-container>\n\t\t\t  </ion-label>\n\t\t\t  <ion-note>{{notis.created_at | timeAgo}}</ion-note>\n\t\t\t</ion-item>\n\t\t</div>\n\t\t<div *ngIf=\"notifications == ''\" no_notifications>\n\t\t\t<img src=\"assets/images/products/no_notifications.png\">\n\t\t\t<p>No notifications found</p>\n\t\t</div>\n\t</div>\n</div>\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/notification/notification.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey); }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top: var(--ion-padding-0); } }\n  @media only screen and (max-width: 991px) {\n    ion-content .container {\n      padding: var(--ion-padding-0); } }\n  ion-content [notifications] .container {\n    padding: var(--ion-padding-0); }\n  ion-content [notifications] ion-item {\n    margin-bottom: var(--ion-margin-10);\n    border-left: 2px solid var(--ion-color-darkred);\n    border-radius: 4px; }\n  ion-content [notifications] ion-item h3 {\n      color: var(--ion-color-darkblack3);\n      font-size: var(--ion-font-size-15);\n      font-weight: 700; }\n  @media only screen and (max-width: 991px) {\n        ion-content [notifications] ion-item h3 {\n          font-size: var(--ion-font-size-14);\n          white-space: normal; } }\n  @media only screen and (max-width: 576px) {\n        ion-content [notifications] ion-item h3 {\n          font-size: var(--ion-font-size-11);\n          white-space: normal; } }\n  ion-content [notifications] ion-item ion-note {\n      font-size: var(--ion-font-size-13);\n      color: #a5a5a5;\n      margin-top: var(--ion-margin-10); }\n  @media only screen and (max-width: 991px) {\n        ion-content [notifications] ion-item ion-note {\n          margin-top: var(--ion-margin-5);\n          font-size: var(--ion-font-size-12); } }\n  @media only screen and (max-width: 576px) {\n        ion-content [notifications] ion-item ion-note {\n          font-size: var(--ion-font-size-10); } }\n  ion-content [notifications] ion-item p {\n      font-size: var(--ion-font-size-14);\n      margin-top: var(--ion-margin-5); }\n  @media only screen and (max-width: 991px) {\n        ion-content [notifications] ion-item p {\n          margin-top: var(--ion-margin-0);\n          font-size: var(--ion-font-size-13); } }\n  @media only screen and (max-width: 576px) {\n        ion-content [notifications] ion-item p {\n          font-size: var(--ion-font-size-11); } }\n  ion-content [no_notifications] {\n    margin-top: 10px;\n    text-align: center; }\n  ion-content [no_notifications] p {\n      margin-top: 10px;\n      font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUVBLGtDQUFhLEVBQUE7RUFFYjtJQUpBO01BTUksbUNBQWMsRUFBQSxFQXlFbEI7RUFyRUM7SUFWRDtNQVlFLDZCQUE0QixFQUFBLEVBRTdCO0VBZEQ7SUFtQkcsNkJBQTRCLEVBQUE7RUFuQi9CO0lBc0JNLG1DQUFtQztJQUN0QywrQ0FBK0M7SUFDL0Msa0JBQWtCLEVBQUE7RUF4QnJCO01BMkJHLGtDQUFpQztNQUNqQyxrQ0FBaUM7TUFDakMsZ0JBQWUsRUFBQTtFQUNmO1FBOUJIO1VBZ0NJLGtDQUFpQztVQUNqQyxtQkFBbUIsRUFBQSxFQU9uQjtFQUxFO1FBbkNOO1VBcUNJLGtDQUFpQztVQUNqQyxtQkFBbUIsRUFBQSxFQUVuQjtFQXhDSjtNQTJDRyxrQ0FBaUM7TUFDakMsY0FBYztNQUNkLGdDQUFnQyxFQUFBO0VBQ2hDO1FBOUNIO1VBK0NLLCtCQUErQjtVQUNoQyxrQ0FBaUMsRUFBQSxFQU1qQztFQUpFO1FBbEROO1VBb0RJLGtDQUFpQyxFQUFBLEVBRWpDO0VBdERKO01BeURNLGtDQUFpQztNQUNwQywrQkFBK0IsRUFBQTtFQUMvQjtRQTNESDtVQTREUSwrQkFBK0I7VUFDbkMsa0NBQWlDLEVBQUEsRUFPakM7RUFMRTtRQS9ETjtVQWlFSSxrQ0FBaUMsRUFBQSxFQUdqQztFQXBFSjtJQXdFRSxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7RUF6RXBCO01BMkVHLGdCQUFnQjtNQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gaW9uLWNvbnRlbnRcbnsgIFxuXHQtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuXHRcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxuXHRcdHtcblx0XHRcdCAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctMCk7XG5cdFx0fVxuXHQuY29udGFpbmVyXG5cdHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0e1xuXHRcdFx0cGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0wKTtcblx0XHR9XG5cdH1cblx0XHRbbm90aWZpY2F0aW9uc11cblx0XHR7XG5cdFx0XHQuY29udGFpbmVyXG5cdFx0XHR7XG5cdFx0XHRcdHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctMCk7XG5cdFx0XHR9XG5cdFx0XHRpb24taXRlbVxuXHRcdFx0eyAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApO1xuXHRcdFx0XHRib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRoM1xuXHRcdFx0XHR7ICAgXG5cdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcblx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTUpO1xuXHRcdFx0XHRmb250LXdlaWdodDo3MDA7XG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0eyBcblx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG5cdFx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vcm1hbDtcblx0XHRcdFx0fVxuXHRcdFx0ICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTExKTtcblx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aW9uLW5vdGVcblx0XHRcdFx0e1xuXHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XG5cdFx0XHRcdGNvbG9yOiAjYTVhNWE1O1xuXHRcdFx0XHRtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTEwKTtcblx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdFx0XHR7XHRtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTUpO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKVxuXHRcdFx0XHR9XG5cdFx0XHQgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTApXG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRwXG5cdFx0XHRcdHtcblx0XHRcdCAgICBmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG5cdFx0XHRcdG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tNSk7XG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0eyAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEzKVxuXHRcdFx0XHR9XG5cdFx0XHQgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTEpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0IH1cdFxuXHQgW25vX25vdGlmaWNhdGlvbnNde1xuXHQgXHRtYXJnaW4tdG9wOiAxMHB4O1xuXHQgXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCBcdHB7XG5cdCBcdFx0bWFyZ2luLXRvcDogMTBweDtcbiAgICBcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHQgXHR9XG5cdCB9XG59Il19 */"

/***/ }),

/***/ "./src/app/notification/notification.page.ts":
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var NotificationPage = /** @class */ (function () {
    function NotificationPage(toastController, loadingController, userService, router) {
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.userService = userService;
        this.router = router;
    }
    NotificationPage.prototype.ngOnInit = function () {
    };
    NotificationPage.prototype.ionViewDidEnter = function () {
        var token = localStorage.getItem('sin_auth_token');
        this.userId = this.userService.decryptData(token, _config__WEBPACK_IMPORTED_MODULE_4__["config"].ENC_SALT);
        if (this.userId != 0) {
            this.getNotifications();
        }
    };
    NotificationPage.prototype.getNotifications = function () {
        var _this = this;
        this.presentLoading();
        this.userService.postData({ user_id: this.userId }, 'getNotifications').subscribe(function (result) {
            _this.stopLoading();
            console.log(result);
            _this.notifications = result.notifications;
        }, function (err) {
            _this.stopLoading();
            _this.notifications = [];
        });
    };
    NotificationPage.prototype.open = function (notis) {
        var order_notis_type = [1, 2, 3];
        this.userService.postData({ noti_id: notis.noti_id }, 'readNotification').subscribe(function (result) {
            console.log(result);
        });
        if (order_notis_type.indexOf(notis.noti_type) >= 0) {
            this.router.navigate(['/order-history']);
        }
    };
    NotificationPage.prototype.presentToast = function (message, color) {
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
    NotificationPage.prototype.presentLoading = function () {
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
    NotificationPage.prototype.stopLoading = function () {
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
    NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.page.html */ "./src/app/notification/notification.page.html"),
            styles: [__webpack_require__(/*! ./notification.page.scss */ "./src/app/notification/notification.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NotificationPage);
    return NotificationPage;
}());



/***/ })

}]);
//# sourceMappingURL=notification-notification-module.js.map