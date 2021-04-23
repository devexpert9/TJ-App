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
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");









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
                _header_header_module__WEBPACK_IMPORTED_MODULE_8__["HeaderPageModule"],
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

module.exports = "<ion-content>\n<app-header ></app-header>\n<div class=\"ion-padding\">\n\t<div header_height></div>\n\t<div class=\"container\">\n           <div class=\"row\">\n           <div class=\"col-md-10 offset-md-1\">\n\t\t   <div class=\"newsfeedinner\">\n\t\t   <h2 class=\"headinginner\">Notification</h2>\n                                <div class=\"d-flex flex-row comment-row \">\n                                     <div>\n                                        <img src=\"assets/img/post-3.jpg\" alt=\"user\" width=\"50\" class=\"rounded-circle\">\n                                    </div>\n                                    <div class=\"comment-text w-100 mt-1\">\n                                        <h6 class=\"mb-1\">James Anderson  <span class=\"text-muted float-right\">Jan 14, 2020</span></h6>\n                                        <a href=\"#\"><span class=\"m-b-15 d-block mb-0\"> Your order ready for Ship..! </span></a>                                   \n                                    </div>\n                                </div>\n\t\t\t\t\t\t\t\t <div class=\"d-flex flex-row comment-row\">\n                                     <div>\n                                        <img src=\"assets/img/post-2.png\" alt=\"user\" width=\"50\" class=\"rounded-circle\">\n                                    </div>\n                                    <div class=\"comment-text w-100 mt-1\">\n                                        <h6 class=\"mb-1\">Download Complete  <span class=\"text-muted float-right\">Jan 18, 2020</span></h6>\n                                        <a href=\"#\"><span class=\"m-b-15 d-block mb-0\"> Lorem ipsum dolor sit amet, consectetuer</span></a>                                   \n                                    </div>\n                                </div>\n\t\t\t\t\t\t\t\t <div class=\"d-flex flex-row comment-row\">\n                                     <div>\n                                        <img src=\"assets/img/post-4.jpg\" alt=\"user\" width=\"50\" class=\"rounded-circle\">\n                                    </div>\n                                    <div class=\"comment-text w-100 mt-1\">\n                                        <h6 class=\"mb-1\">Elizabeth Lewis  <span class=\"text-muted float-right\">Jan 22, 2020</span></h6>\n                                        <a href=\"#\"><span class=\"m-b-15 d-block mb-0\"> Lorem ipsum dolor sit amet, consectetuer</span></a>                                   \n                                    </div>\n                                </div><div class=\"d-flex flex-row comment-row \">\n                                     <div>\n                                        <img src=\"assets/img/post-3.jpg\" alt=\"user\" width=\"50\" class=\"rounded-circle\">\n                                    </div>\n                                    <div class=\"comment-text w-100 mt-1\">\n                                        <h6 class=\"mb-1\">James Anderson  <span class=\"text-muted float-right\">Jan 14, 2020</span></h6>\n                                        <a href=\"#\"><span class=\"m-b-15 d-block mb-0\"> Your order ready for Ship..! </span></a>                                   \n                                    </div>\n                                </div>\n\t\t\t\t\t\t\t\t <div class=\"d-flex flex-row comment-row\">\n                                     <div>\n                                        <img src=\"assets/img/post-2.png\" alt=\"user\" width=\"50\" class=\"rounded-circle\">\n                                    </div>\n                                    <div class=\"comment-text w-100 mt-1\">\n                                        <h6 class=\"mb-1\">Download Complete  <span class=\"text-muted float-right\">Jan 18, 2020</span></h6>\n                                        <a href=\"#\"><span class=\"m-b-15 d-block mb-0\"> Lorem ipsum dolor sit amet, consectetuer</span></a>                                   \n                                    </div>\n                                </div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n           </div>\n       </div>\n</div>\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/notification/notification.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey); }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top: var(--ion-padding-0); } }\n  @media only screen and (max-width: 991px) {\n    ion-content .container {\n      padding: var(--ion-padding-0); } }\n  ion-content [notifications] .container {\n    padding: var(--ion-padding-0); }\n  ion-content [notifications] ion-item {\n    margin-bottom: var(--ion-margin-10);\n    border-left: 2px solid var(--ion-color-darkred);\n    border-radius: 4px; }\n  ion-content [notifications] ion-item h3 {\n      color: var(--ion-color-darkblack3);\n      font-size: var(--ion-font-size-15);\n      font-weight: 700; }\n  @media only screen and (max-width: 991px) {\n        ion-content [notifications] ion-item h3 {\n          font-size: var(--ion-font-size-14);\n          white-space: normal; } }\n  @media only screen and (max-width: 576px) {\n        ion-content [notifications] ion-item h3 {\n          font-size: var(--ion-font-size-11);\n          white-space: normal; } }\n  ion-content [notifications] ion-item ion-note {\n      font-size: var(--ion-font-size-13);\n      color: #a5a5a5;\n      margin-top: var(--ion-margin-10); }\n  @media only screen and (max-width: 991px) {\n        ion-content [notifications] ion-item ion-note {\n          margin-top: var(--ion-margin-5);\n          font-size: var(--ion-font-size-12); } }\n  @media only screen and (max-width: 576px) {\n        ion-content [notifications] ion-item ion-note {\n          font-size: var(--ion-font-size-10); } }\n  ion-content [notifications] ion-item p {\n      font-size: var(--ion-font-size-14);\n      margin-top: var(--ion-margin-5); }\n  @media only screen and (max-width: 991px) {\n        ion-content [notifications] ion-item p {\n          margin-top: var(--ion-margin-0);\n          font-size: var(--ion-font-size-13); } }\n  @media only screen and (max-width: 576px) {\n        ion-content [notifications] ion-item p {\n          font-size: var(--ion-font-size-11); } }\n  ion-content [no_notifications] {\n    margin-top: 10px;\n    text-align: center; }\n  ion-content [no_notifications] p {\n      margin-top: 10px;\n      font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFFQSxrQ0FBYSxFQUFBO0VBRWI7SUFKQTtNQU1JLG1DQUFjLEVBQUEsRUF5RWxCO0VBckVDO0lBVkQ7TUFZRSw2QkFBNEIsRUFBQSxFQUU3QjtFQWREO0lBbUJHLDZCQUE0QixFQUFBO0VBbkIvQjtJQXNCTSxtQ0FBbUM7SUFDdEMsK0NBQStDO0lBQy9DLGtCQUFrQixFQUFBO0VBeEJyQjtNQTJCRyxrQ0FBaUM7TUFDakMsa0NBQWlDO01BQ2pDLGdCQUFlLEVBQUE7RUFDZjtRQTlCSDtVQWdDSSxrQ0FBaUM7VUFDakMsbUJBQW1CLEVBQUEsRUFPbkI7RUFMRTtRQW5DTjtVQXFDSSxrQ0FBaUM7VUFDakMsbUJBQW1CLEVBQUEsRUFFbkI7RUF4Q0o7TUEyQ0csa0NBQWlDO01BQ2pDLGNBQWM7TUFDZCxnQ0FBZ0MsRUFBQTtFQUNoQztRQTlDSDtVQStDSywrQkFBK0I7VUFDaEMsa0NBQWlDLEVBQUEsRUFNakM7RUFKRTtRQWxETjtVQW9ESSxrQ0FBaUMsRUFBQSxFQUVqQztFQXRESjtNQXlETSxrQ0FBaUM7TUFDcEMsK0JBQStCLEVBQUE7RUFDL0I7UUEzREg7VUE0RFEsK0JBQStCO1VBQ25DLGtDQUFpQyxFQUFBLEVBT2pDO0VBTEU7UUEvRE47VUFpRUksa0NBQWlDLEVBQUEsRUFHakM7RUFwRUo7SUF3RUUsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBO0VBekVwQjtNQTJFRyxnQkFBZ0I7TUFDZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuIGlvbi1jb250ZW50XG57ICBcblx0LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5KTtcblx0XG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTFweClcblx0XHR7XG5cdFx0XHQgIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuXHRcdH1cblx0LmNvbnRhaW5lclxuXHR7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuXHRcdHtcblx0XHRcdHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctMCk7XG5cdFx0fVxuXHR9XG5cdFx0W25vdGlmaWNhdGlvbnNdXG5cdFx0e1xuXHRcdFx0LmNvbnRhaW5lclxuXHRcdFx0e1xuXHRcdFx0XHRwYWRkaW5nOnZhcigtLWlvbi1wYWRkaW5nLTApO1xuXHRcdFx0fVxuXHRcdFx0aW9uLWl0ZW1cblx0XHRcdHsgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTEwKTtcblx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0aDNcblx0XHRcdFx0eyAgIFxuXHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrMyk7XG5cdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTE1KTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6NzAwO1xuXHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0XHRcdHsgXG5cdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3JtYWw7XG5cdFx0XHRcdH1cblx0XHRcdCAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMSk7XG5cdFx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vcm1hbDtcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlvbi1ub3RlXG5cdFx0XHRcdHtcblx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTMpO1xuXHRcdFx0XHRjb2xvcjogI2E1YTVhNTtcblx0XHRcdFx0bWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0xMCk7XG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcblx0XHRcdFx0e1x0bWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi01KTtcblx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMilcblx0XHRcdFx0fVxuXHRcdFx0ICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEwKVxuXHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cFxuXHRcdFx0XHR7XG5cdFx0XHQgICAgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTUpO1xuXHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG5cdFx0XHRcdHsgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMylcblx0XHRcdFx0fVxuXHRcdFx0ICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTExKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdCB9XHRcblx0IFtub19ub3RpZmljYXRpb25zXXtcblx0IFx0bWFyZ2luLXRvcDogMTBweDtcblx0IFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHQgXHRwe1xuXHQgXHRcdG1hcmdpbi10b3A6IDEwcHg7XG4gICAgXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0IFx0fVxuXHQgfVxufSJdfQ== */"

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