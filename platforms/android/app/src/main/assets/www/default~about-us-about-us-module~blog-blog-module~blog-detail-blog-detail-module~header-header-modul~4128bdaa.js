(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~about-us-about-us-module~blog-blog-module~blog-detail-blog-detail-module~header-header-modul~4128bdaa"],{

/***/ "./src/app/header/header.module.ts":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPageModule", function() { return HeaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _header_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.page */ "./src/app/header/header.page.ts");







var routes = [
    {
        path: '/header',
        component: _header_page__WEBPACK_IMPORTED_MODULE_6__["HeaderPage"]
    }
];
var HeaderPageModule = /** @class */ (function () {
    function HeaderPageModule() {
    }
    HeaderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_header_page__WEBPACK_IMPORTED_MODULE_6__["HeaderPage"]],
            exports: [_header_page__WEBPACK_IMPORTED_MODULE_6__["HeaderPage"]]
        })
    ], HeaderPageModule);
    return HeaderPageModule;
}());



/***/ }),

/***/ "./src/app/header/header.page.html":
/*!*****************************************!*\
  !*** ./src/app/header/header.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"grey2\" text-uppercase style=\"background: var(--ion-color-grey2) !important;\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n     \t<img  class=\"ion-hide-lg-up\"  src=\"assets/images/sign-logo.png\" width=\"80px\"/>\n    </ion-title>\n   <!--  <ion-buttons slot=\"end\" > \n          <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n       <ion-buttons slot=\"end\">\n          <ion-icon name=\"pin\"></ion-icon>\n    </ion-buttons> -->\n      <!-- <ion-buttons slot=\"end\" > \n\t        <ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\t </ion-buttons> -->\n  <!--/ion-toolbar>\n        <!-- <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n          <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n          <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n          <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n          <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t    </div> -->\n<!--/ion-header--> \n<div class=\"cont-shtf\">\n\t<header class=\"header-pos headercusnew\">\n         <div class=\"header-top\">\n            <nav class=\"navbar navbar-expand-md navbar-light\">\n               <div class=\"navbar-brand\" href=\"javascript:void(0)\">\n                 <div class=\"logo\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/home\"><img src=\"assets/img/logo.png\" alt=\"brand-logo\"></a>\n\t\t\t\t</div>\n               </div>\n              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n              </button>\n\n              <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                <div class=\"search-container\">\n                  <input [(ngModel)]=\"searchTerm\" search-field placeholder=\"Search here...\" />\n\t\t\t\t  <a class=\"search-button\" href=\"javascript:void(0)\" (click)=\"search()\">\n\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n                <ul class=\"navbar-nav ml-5 nav-top-menu-ul\">\n                  <li class=\"nav-item\">\n                    <a  routerLink=\"/blog\" class=\"nav-link tooltip-item\" href=\"javascript:void(0)\" data-tooltip=\"News Feed\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"css-i6dzq1\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg></a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link tooltip-item\" href=\"javascript:void(0)\" data-tooltip=\"Shop\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"css-i6dzq1\"><path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><path d=\"M16 10a4 4 0 0 1-8 0\"></path></svg></a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link tooltip-item\" href=\"javascript:void(0)\" data-tooltip=\"Trending\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"css-i6dzq1\"><polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"></polyline><polyline points=\"17 6 23 6 23 12\"></polyline></svg></a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link tooltip-item\" href=\"javascript:void(0)\" data-tooltip=\"Wishlist\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"css-i6dzq1\"><path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path></svg></a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link tooltip-item\" href=\"javascript:void(0)\" data-tooltip=\"Dashboard\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"css-i6dzq1\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline></svg></a>\n                  </li>\t\t\t\t  \n                </ul>\n              </div>\n              <ul class=\"navbar-nav ml-auto\">\n              \n\t\t\t   \n\t\t\t   \n\t\t\t   <div class=\"nav-item dropdown notification-dropdown\">\n\t\t\t\t\t\t<a class=\"nav-link notification  mr-1 navlink dropdown-toggle\" data-toggle=\"dropdown\" href=\"javascript:void(0)\">\n\t\t\t\t\t\t <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0\"></path></svg>\n\t\t\t\t\t\t  <span class=\"badge badge-pill badge-primary notification-badge\">2</span>\t  \n\t\t\t\t\t   </a>\n\t\t\t\t\t   <ul class=\"dropdown-menu onhover-show-div p-0\">\n                            <li>Notification <span class=\"badge badge-pill badge-primary pull-right\">2</span></li>\n                            <li>\n                                <div class=\"media\">\n                                    <div class=\"media-body\">\n                                        <h6 class=\"mt-0\">Your order ready for Ship..!</h6>\n                                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetuer.</p>\n                                    </div>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"media\">\n                                    <div class=\"media-body\">\n                                        <h6 class=\"mt-0 txt-success\">Download Complete</h6>\n                                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetuer.</p>\n                                    </div>\n                                </div>\n                            </li>\n                           \n                            <li class=\"view-all-notifications\"><a [routerLink]=\"'/notification'\" href=\"javascript:void(0)\">All notifications</a> </li>\n                        </ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\n    \n\t\t\t\t   <div class=\"nav-item dropdown notification-dropdown\">\n\t\t\t\t\t\t<a class=\"nav-link notification  mr-1 navlink dropdown-toggle\" data-toggle=\"dropdown\" href=\"javascript:void(0)\">\n\t\t\t\t\t\t <svg class=\"\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-message-square\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path></svg>\n\t\t\t\t\t\t  <span class=\"badge badge-pill badge-primary notification-badge\">3</span>\t  \n\t\t\t\t\t   </a>\n\t\t\t\t\t   <ul class=\"dropdown-menu onhover-show-div p-0\">\n                            <li>Messages <span class=\"badge badge-pill badge-primary pull-right\">3</span></li>\n                            <li>\n                                <div class=\"media\">\n\t\t\t\t\t\t\t\t\t<div class=\"message-item-img\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/post-4.jpg\">\n\t\t\t\t\t\t\t\t\t</div>\n                                    <div class=\"media-body\">\n                                        <h6 class=\"mt-0\">Jhon Smith</h6>\n                                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetuer.</p>\n                                    </div>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"media\">\n\t\t\t\t\t\t\t\t\t<div class=\"message-item-img\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/post-1.png\">\n\t\t\t\t\t\t\t\t\t</div>\n                                    <div class=\"media-body\">\n                                        <h6 class=\"mt-0 txt-success\"> Wilson </h6>\n                                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetuer.</p>\n                                    </div>\n                                </div>\n                            </li>\n                           \n                            <li class=\"view-all-notifications\"><a routerLink=\"/message\" href=\"javascript:void(0)\">All Messages</a> </li>\n                        </ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item dropdown notification-dropdown\">\n\t\t\t\t\t\t<a class=\"nav-link notification  mr-1 navlink dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n\t\t\t\t\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-box\"><path d=\"M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z\"></path><polyline points=\"2.32 6.16 12 11 21.68 6.16\"></polyline><line x1=\"12\" y1=\"22.76\" x2=\"12\" y2=\"11\"></line></svg>\n\t\t\t\t\t\t  <span class=\"badge badge-pill badge-primary notification-badge\">3</span>\t  \n\t\t\t\t\t   </a>\n\t\t\t\t\t   <ul class=\"dropdown-menu onhover-show-div p-0\">\n                            <li>Orders <span class=\"badge badge-pill badge-primary pull-right\">3</span></li>\n                            <li>\n                                <div class=\"media\">\n                                    <div class=\"media-body\">\n                                        <h6 class=\"mt-0\">Lorem ipsum dolor sit amet !</h6>\n                                       \n                                    </div>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"media\">\n                                    <div class=\"media-body\">\n                                        <h6 class=\"mt-0 txt-success\">Lorem ipsum dolor sit amet !</h6>\n                                       \n                                    </div>\n                                </div>\n                            </li>\n\t\t\t\t\t\t\t<li class=\"view-all-notifications\"><a [routerLink]=\"'/order-history'\" href=\"javascript:void(0)\">All Orders</a> </li>\n                           \n                            \n                        </ul>\n\t\t\t\t\t</div>\n               <div class=\"nav-item dropdown user-profile-dropdown\" *ngIf=\"is_logged_in == true\">\n                  <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"nav-link navlink dropdown-toggle user-action\">\n                     <img src=\"assets/img/2.jpg\" class=\"avatar\" alt=\"\"> Paula Wilson <b class=\"caret\"></b></a>\n                  <div class=\"dropdown-menu\">\n                     <a routerLink=\"/your-account\" href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"fa fa-user-o\"></i> Profile</a>\n                     <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"fa fa-sliders\"></i> Settings</a>\n                    <div *ngIf=\"is_logged_in == true\"> <a href=\"javascript:void(0)\" (click)=\"logout()\" class=\"dropdown-item\"><i class=\"fa fa-sign-out\"></i> Logout</a> </div>\n                  </div>\n               </div>\n\t\t\t   <div *ngIf=\"is_logged_in == false\">\n\t\t\t\t\t<a routerLink=\"/login\" class=\"nav-link tooltip-item btn-logib\" href=\"javascript:void(0)\" data-tooltip=\"Login Here\">\n\t\t\t\t\t\t<ion-icon name=\"person\"></ion-icon>\n\t\t\t\t\t</a>\n\t\t\t   </div>\n              </ul>\n            </nav> \n\t\t\t<div class=\"header-top-bottom\">\t\t\t\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t   <div class=\"row align-items-center\">\n\t\t\t\t\t  <div class=\"col-lg-4 col-md-7 col-sm-8 col-12\">\n\t\t\t\t\t\t <div class=\"flexcus\">\n\t\t\t\t\t\t\t<div class=\"vendor-profile-img1\">\n\t\t\t\t\t\t\t  <img src=\"assets/img/vendorlogo.png\" alt=\"\">\n\t\t\t\t\t\t\t  <span>Yabli.Store</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"site-overall-rating ml-4\">\n\t\t\t\t\t\t\t   <div class=\"rating-icon mr-2\">\n\t\t\t\t\t\t\t\t  <i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t  <i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t  <i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t  <i class=\"fa fa-star-half-o\"></i>\n\t\t\t\t\t\t\t\t  <i class=\"fa fa-star-o\"></i>\n\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t   <span>3.5</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t  </div>\n\t\t\t\t   </div>\n\t\t\t\t</div>\n\t\t\t </div>\t\t\t\n         </div>\n         <div class=\"header-top-menu sticker\">\n            <div class=\"container-fluid\">\n               <div class=\"row\">\n                  <div class=\"col-lg-12\">\n                     <div class=\"top-main-menu\">\n                        <div class=\"main-menu\">\n                           <nav id=\"mobile-menu\">\n                              <ul>\n                                 <li class=\"active\"><a routerLink=\"/home\" href=\"javascript:void(0)\">Posts</a></li>\n                                 <li><a routerLink=\"/shop\" href=\"javascript:void(0)\">Products</a></li>\n                                 <li><a routerLink=\"/reviews\" href=\"javascript:void(0)\">Reviews</a></li>\n                                 <li><a routerLink=\"/about-us\" href=\"javascript:void(0)\">About</a></li>\n                              </ul>\n                           </nav>\n                        </div>\n                        <!-- </div> end main menu -->\n                        <div class=\"header-call-action menu-right\">\n                            <ul class=\"menu-right-ul\">\n\t\t\t\t\t\t\t\t<li><a target=\"_blank\" href=\"{{socialLinks?.facebook.search('http') >= 0 ? '' : 'http://'}}{{socialLinks?.facebook}}\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i></a></li>\n                                <li><a href=\"javascript:void(0)\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"{{socialLinks?.facebook.search('http') >= 0 ? '' : 'http://'}}{{socialLinks?.twitter}}\" target=\"_blank\"><i class=\"fa fa-twitter-square\"></i></a></li>\n                                <li class=\"menu-right-li-share\">\n\t\t\t\t\t\t\t\t\t<ion-select [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Flag\" class=\"mr-20\">\n\t\t\t\t\t\t\t\t\t    <ion-select-option value=\"Flag-1\">Flag-1</ion-select-option>\n\t\t\t\t\t\t\t\t\t    <ion-select-option value=\"Flag-2\">Flag-2</ion-select-option>\n\t\t\t\t\t\t\t\t\t    <ion-select-option value=\"Flag-3\">Flag-3</ion-select-option>\n\t\t\t\t\t\t\t\t\t    <ion-select-option value=\"Flag-4\">Flag-4</ion-select-option>\n\t\t\t\t\t\t\t\t\t</ion-select>\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t<!--select class=\"form-control mr-20\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t<option >Flag</option>\n\t\t\t\t\t\t\t\t\t\t<option class=\"facebook\">Flag-1</option>\n\t\t\t\t\t\t\t\t\t\t<option class=\"twitter\">Flag-2</option>\n\t\t\t\t\t\t\t\t\t\t<option class=\"linkedin\">Flag-3</option>\n\t\t\t\t\t\t\t\t\t</select-->\n                              </li>\n                            </ul>\n                        </div>\n                     </div>\n                  </div>\n                  <div class=\"col-12 d-block d-lg-none\">\n                     <div class=\"mobile-menu\"></div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </header>\n</div>\n<!-- HEADER : END  -->\n\n<ion-card class=\"video_call_div\" style=\"display: none;\">\n  <ion-card-header>\n    <ion-card-title>{{incoming_call_title}}</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n   <ion-button (click)=\"answerVideo()\" color=\"darked\">Answer</ion-button>\n   <ion-button (click)=\"rejectCall()\" color=\"darked\">Reject</ion-button>\n  </ion-card-content>\n</ion-card>"

/***/ }),

/***/ "./src/app/header/header.page.scss":
/*!*****************************************!*\
  !*** ./src/app/header/header.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  display: none !important; }\n\nion-header ion-toolbar ion-menu-button {\n  height: 35px;\n  position: inherit;\n  top: inherit;\n  right: inherit;\n  transition: inherit;\n  transition-delay: .1s; }\n\nion-header ion-toolbar ion-menu-button img {\n    max-width: 24px; }\n\nion-header ion-toolbar ion-title {\n  font-weight: 700; }\n\nion-header ion-toolbar ion-buttons {\n  font-size: 20px; }\n\nion-header ion-toolbar ion-buttons[mar-10] {\n    margin-right: 10px; }\n\n@media (min-width: 768px) {\n  ion-header {\n    display: none; } }\n\n@media (max-width: 767px) {\n  header {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9oZWFkZXIvaGVhZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdBLHdCQUFzQixFQUFBOztBQUh0QjtFQVNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQXFCLEVBQUE7O0FBZHZCO0lBaUJNLGVBQWUsRUFBQTs7QUFqQnJCO0VBc0JFLGdCQUFlLEVBQUE7O0FBdEJqQjtFQXlCRSxlQUFjLEVBQUE7O0FBekJoQjtJQTRCSSxrQkFBaUIsRUFBQTs7QUFPckI7RUFDSTtJQUVDLGFBQVksRUFBQSxFQUNmOztBQUVGO0VBQ0k7SUFFQyxhQUFZLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiY6OmFmdGVyXG57XG5kaXNwbGF5Om5vbmUhaW1wb3J0YW50O1xufVxuIGlvbi10b29sYmFyXG4ge1xuICAgIGlvbi1tZW51LWJ1dHRvblxuXHR7XG5cdFx0aGVpZ2h0OiAzNXB4O1xuXHRcdHBvc2l0aW9uOiBpbmhlcml0O1xuXHRcdHRvcDogaW5oZXJpdDtcblx0XHRyaWdodDogaW5oZXJpdDtcblx0XHR0cmFuc2l0aW9uOiBpbmhlcml0O1xuXHRcdHRyYW5zaXRpb24tZGVsYXk6IC4xcztcbiAgICAgICAgaW1nXG4gICAgICAgIHtcblx0XHQgICAgbWF4LXdpZHRoOiAyNHB4O1xuXHRcdH1cdFx0XG5cdH1cblx0aW9uLXRpdGxlXG5cdHtcblx0XHRmb250LXdlaWdodDo3MDA7XG5cdH0gXG4gICAgaW9uLWJ1dHRvbnNcblx0e2ZvbnQtc2l6ZToyMHB4O1xuXHQgICZbbWFyLTEwXVxuXHQgIHtcblx0ICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG5cdCAgfVxuXHR9XG4gfVxuXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGlvbi1oZWFkZXJcblx0e1xuXHQgICAgZGlzcGxheTpub25lO1xuXHR9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBoZWFkZXJcblx0e1xuXHQgICAgZGlzcGxheTpub25lO1xuXHR9XG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.page.ts":
/*!***************************************!*\
  !*** ./src/app/header/header.page.ts ***!
  \***************************************/
/*! exports provided: HeaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPage", function() { return HeaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auto_popup_auto_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auto-popup/auto-popup.page */ "./src/app/auto-popup/auto-popup.page.ts");
/* harmony import */ var _choose_location_choose_location_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../choose-location/choose-location.page */ "./src/app/choose-location/choose-location.page.ts");
/* harmony import */ var _video_call_video_call_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../video-call/video-call.page */ "./src/app/video-call/video-call.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ "./node_modules/@ionic-native/speech-recognition/ngx/index.js");













var HeaderPage = /** @class */ (function () {
    function HeaderPage(modalController, toastController, router, events, userService, socket, loadingController, speechRecognition) {
        var _this = this;
        this.modalController = modalController;
        this.toastController = toastController;
        this.router = router;
        this.events = events;
        this.userService = userService;
        this.socket = socket;
        this.loadingController = loadingController;
        this.speechRecognition = speechRecognition;
        this.buttonClickeddrop = false;
        this.buttonClickedcat = false;
        this.cats_array = [];
        this.items_in_cart = '0';
        this.searchTerm = '';
        this.selected_cat = 'Categories';
        this.mob_category = 'Category';
        this.cart_price = 0;
        this.errors = ['', null, undefined];
        this.loading = '';
        this.isBrowser = localStorage.getItem('isBrowser');
        this.user_name = localStorage.getItem('sin_auth_user_name');
        this.is_call_received = false;
        this.isStart = false;
        this.allowedMimes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp'];
        var token = localStorage.getItem('sin_auth_token');
        this.userId = this.userService.decryptData(token, _config__WEBPACK_IMPORTED_MODULE_8__["config"].ENC_SALT);
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_8__["config"].IMAGES_URL;
        this.checkLogin();
        this.getCategories();
        this.getTopSellingCategories();
        if (this.userId != 0) {
            localStorage.removeItem('sin_current_address');
            this.getUserDefaultAddress();
        }
        this.getCartProducts();
        events.subscribe('call_logout:true', function (data) {
            _this.checkLogin();
        });
        events.subscribe('user_logged_in:true', function (data) {
            _this.checkLogin();
        });
        events.subscribe('current_address_changed:true', function (data) {
            _this.default_address = data;
        });
        events.subscribe('cart_updated:true', function (data) {
            _this.items_in_cart = data.items_in_cart;
            if (data.isAdd == true) {
                _this.getCartProducts();
                //this.cart_price = Number(this.cart_price) + Number(data.cart_price);
            }
            else {
                _this.cart_price = data.cart_price.toFixed(2);
            }
        });
        this.getUpdates().subscribe(function (new_call) {
            console.log('new call');
            console.log(new_call);
            _this.new_call_res = new_call;
            if (_this.new_call_res.user_id == _this.userId) {
                jquery__WEBPACK_IMPORTED_MODULE_9__(".video_call_div").show();
                _this.playAudio();
                _this.incoming_call_title = _this.new_call_res.name + ' is calling you.';
                _this.video_call_id = _this.new_call_res.video_call_id;
                _this.call_from_id = _this.new_call_res.from_id;
                var self = _this;
                console.log('calling............');
                // disconnect after 1 min if not received call
                setTimeout(function () {
                    if (self.is_call_received == false) {
                        self.stopAudio();
                        jquery__WEBPACK_IMPORTED_MODULE_9__('.video_call_div').hide();
                        self.socket.emit('video_call_not_answered', { user_id: self.userId, to_id: self.call_from_id, user_name: (self.errors.indexOf(self.user_name) >= 0 ? 'Unknown' : self.user_name) });
                    }
                }, 60000);
            }
        });
        this.getUpdatesEnded().subscribe(function (end_call) {
            console.log('end call');
            console.log(end_call);
            _this.end_call_res = end_call;
            if (_this.end_call_res.user_id == _this.userId) {
                _this.stopAudio();
                jquery__WEBPACK_IMPORTED_MODULE_9__(".video_call_div").hide();
                _this.presentToast('Call ended by ' + _this.end_call_res.name, 'success');
                _this.video_call_id = '';
                _this.events.publish('video_call_ended:true', '');
                console.log('end calling............');
            }
        });
    }
    HeaderPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('speechRecognition');
        console.log(this.speechRecognition);
        this.audio = new Audio();
        this.audio.src = 'assets/ringtones/ringtone_1.mp3';
        this.audio.load();
        if (localStorage.getItem('sin_auto_popup') != 'success' && this.isBrowser == 'true') {
            localStorage.setItem('sin_auto_popup', 'success');
            this.automaticPopup();
        }
        var self;
        jquery__WEBPACK_IMPORTED_MODULE_9__('.mega-dropdown-menu').on('click', function (event) {
            jquery__WEBPACK_IMPORTED_MODULE_9__(".menu-item").removeClass('open');
            if (event.target.parentNode.id != undefined && event.target.parentNode.id != null && event.target.parentNode.id != '') {
                jquery__WEBPACK_IMPORTED_MODULE_9__("#" + event.target.parentNode.id).addClass('open');
                event.stopPropagation();
            }
        });
        if (localStorage.getItem('isBrowser') == 'false') {
            this.speechRecognition.hasPermission().then(function (hasPermission) {
                if (!hasPermission) {
                    _this.speechRecognition.requestPermission()
                        .then(function () { return console.log('Granted'); }, function () { return console.log('Denied'); });
                }
            });
        }
        else {
            var self_1 = this;
            var recognition_1 = new webkitSpeechRecognition();
            recognition_1.continuous = false;
            /*-----------------------------
            Voice Recognition
            ------------------------------*/
            // If false, the recording will stop after a few seconds of silence.
            // When true, the silence period is longer (about 15 seconds),
            // allowing us to keep recording even when the user pauses. 
            recognition_1.continuous = true;
            // This block is called every time the Speech APi captures a line. 
            recognition_1.onresult = function (event) {
                // event is a SpeechRecognitionEvent object.
                // It holds all the lines we have captured so far. 
                // We only need the current one.
                var current = event.resultIndex;
                // Get a transcript of what was said.
                var transcript = event.results[current][0].transcript;
                // Add the current transcript to the contents of our Note.
                // There is a weird bug on mobile, where everything is repeated twice.
                // There is no official solution so far so we have to handle an edge case.
                var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
                if (!mobileRepeatBug) {
                    // noteContent += transcript;
                    console.log(transcript);
                    self_1.searchTerm = transcript;
                    self_1.isStart = false;
                    recognition_1.stop();
                    self_1.callSearchFunctionApi();
                }
            };
            recognition_1.onstart = function () {
                console.log('Voice recognition activated. Try speaking into the microphone.');
            };
            recognition_1.onspeechend = function () {
                self_1.isStart = false;
                console.log('You were quiet for a while so voice recognition turned itself off.');
            };
            recognition_1.onerror = function (event) {
                if (event.error == 'no-speech') {
                    console.log('No speech was detected. Try again.');
                }
                ;
            };
            /*-----------------------------
                  App buttons and input
            ------------------------------*/
            jquery__WEBPACK_IMPORTED_MODULE_9__(document).on('click', '#start-record-btn', function (e) {
                // $('#start-record-btn').on('click', function(e) {
                // if (noteContent.length) {
                //   noteContent += ' ';
                // }
                self_1.isStart = true;
                recognition_1.start();
            });
            jquery__WEBPACK_IMPORTED_MODULE_9__(document).on('click', '#pause-record-btn', function (e) {
                // $('#pause-record-btn').on('click', function(e) {
                recognition_1.stop();
                self_1.isStart = false;
                console.log('Voice recognition paused.');
            });
            // Sync the text inside the text area with the noteContent variable.
            // noteTextarea.on('input', function() {
            //   noteContent = $(this).val();
            // })
            jquery__WEBPACK_IMPORTED_MODULE_9__('#save-note-btn').on('click', function (e) {
                recognition_1.stop();
                // if(!noteContent.length) {
                //   instructions.text('Could not save empty note. Please add a message to your note.');
                // }
                // else {
                //   // Save note to localStorage.
                //   // The key is the dateTime with seconds, the value is the content of the note.
                //   saveNote(new Date().toLocaleString(), noteContent);
                //   // Reset variables and update UI.
                //   noteContent = '';
                //   renderNotes(getAllNotes());
                //   noteTextarea.val('');
                //   instructions.text('Note saved successfully.');
                // }
                console.log(e);
            });
            /*-----------------------------
                  Speech Synthesis
            ------------------------------*/
        }
    };
    HeaderPage.prototype.playAudio = function () {
        this.audio.play();
        this.audio.loop = true;
    };
    HeaderPage.prototype.stopAudio = function () {
        this.audio.pause();
    };
    HeaderPage.prototype.getUpdates = function () {
        var self = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_11__["Observable"](function (observer) {
            self.socket.on('new_video_call', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    HeaderPage.prototype.getUpdatesEnded = function () {
        var self = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_11__["Observable"](function (observer) {
            self.socket.on('video_call_ended_by_admin', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    HeaderPage.prototype.rejectCall = function () {
        this.is_call_received = true;
        this.stopAudio();
        jquery__WEBPACK_IMPORTED_MODULE_9__('.video_call_div').hide();
        this.socket.emit('video_call_rejected', { user_id: this.userId, to_id: this.call_from_id, user_name: (this.errors.indexOf(this.user_name) >= 0 ? 'Unknown' : this.user_name) });
    };
    HeaderPage.prototype.answerVideo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.is_call_received = true;
                        this.socket.emit('video_call_answered', { user_id: this.userId, to_id: this.call_from_id, user_name: (this.errors.indexOf(this.user_name) >= 0 ? 'Unknown' : this.user_name) });
                        this.stopAudio();
                        jquery__WEBPACK_IMPORTED_MODULE_9__('.video_call_div').hide();
                        return [4 /*yield*/, this.modalController.create({
                                component: _video_call_video_call_page__WEBPACK_IMPORTED_MODULE_5__["VideoCallPage"],
                                componentProps: { video_call_id: this.video_call_id },
                                backdropDismiss: false
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            _this.socket.emit('video_call_ended_by_user', { user_id: _this.userId, to_id: _this.call_from_id, user_name: (_this.errors.indexOf(_this.user_name) >= 0 ? 'Unknown' : _this.user_name) });
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HeaderPage.prototype.getUserDefaultAddress = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId }, 'getUserDefaultAddress').subscribe(function (result) {
            if (_this.errors.indexOf(result.address) == -1) {
                _this.default_address = result.address.full_address + ' ' + result.address.address_zip_code;
            }
        });
    };
    HeaderPage.prototype.getCategories = function () {
        var _this = this;
        this.userService.getData('getCategories').subscribe(function (result) {
            _this.all_categories = result.categories;
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    HeaderPage.prototype.getTopSellingCategories = function () {
        var _this = this;
        this.userService.postData({ limit: '6' }, 'topSellingCategories').subscribe(function (result) {
            console.log(result);
            _this.all_top_categories = result.cats;
        }, function (err) {
            _this.all_top_categories = [];
        });
    };
    HeaderPage.prototype.ionViewWillUnload = function () {
        this.events.unsubscribe('call_logout:true');
        this.events.unsubscribe('user_logged_in:true');
        this.events.unsubscribe('cart_updated:true');
        this.events.unsubscribe('current_address_changed:true');
    };
    HeaderPage.prototype.productDetails = function (catId, subcatId) {
        this.router.navigate(['/products'], { queryParams: { cat: catId, subcat: subcatId } });
    };
    HeaderPage.prototype.catDropSelected = function (catId, subcatId, selected_cat) {
        this.cats_array = [];
        this.selected_cat = selected_cat;
        this.cats_array.push({ cat_id: catId, sub_cat_id: subcatId });
    };
    HeaderPage.prototype.catDropSelectedMob = function (catId, subcatId, selected_cat) {
        this.cats_array = [];
        this.mob_category = selected_cat;
        this.cats_array.push({ cat_id: catId, sub_cat_id: subcatId });
        this.onButtonClickcat();
        this.search();
    };
    HeaderPage.prototype.search = function () {
        this.router.navigate(['/products'], { queryParams: { cat: (this.cats_array.length > 0 ? this.cats_array[0].cat_id : ''), subcat: (this.cats_array.length > 0 ? this.cats_array[0].sub_cat_id : ''), search: this.searchTerm } });
    };
    HeaderPage.prototype.getCartProducts = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId }, 'getCartProducts').subscribe(function (result) {
            _this.cart = result.products;
            _this.items_in_cart = _this.cart.length;
            if (_this.cart != '') {
                _this.calculateTotalPrice();
            }
            else {
                _this.cart_price = 0;
            }
        }, function (err) {
            _this.cart = [];
        });
    };
    HeaderPage.prototype.calculateTotalPrice = function () {
        var self = this;
        this.cart_price = 0;
        // this.cart.forEach(function(item){
        //   if(self.errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price){
        //     self.cart_price = Number(self.cart_price) + (item.product_sale_price*item.product_quantity);
        //   }
        //   else{
        //     self.cart_price = Number(self.cart_price) + (item.product_purchase_price*item.product_quantity);
        //   }
        // });
        this.cart.forEach(function (item) {
            console.log(self.cart_price);
            if (Number(item.wholesale_price) != 0 && Number(item.product_quantity) >= Number(item.wholesale_products) && self.errors.indexOf(item.wholesale_products) == -1) {
                self.cart_price = Number(self.cart_price) + (item.wholesale_price * item.product_quantity);
            }
            else if (item.is_variation == 1) {
                self.cart_price = Number(self.cart_price) + (item.product_price * item.product_quantity);
            }
            else {
                if (self.errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price) {
                    if (item.discount_per_piece != null) {
                        if (item.discount_type == '%') {
                            var singleItemPrice = Number(item.product_sale_price) - ((Number(item.discount_per_piece) / Number(item.product_sale_price)) * 100);
                            self.cart_price = Number(self.cart_price) + (singleItemPrice * item.product_quantity);
                        }
                        else {
                            var singleItemPrice = Number(item.product_sale_price) - Number(item.discount_per_piece);
                            self.cart_price = Number(self.cart_price) + (singleItemPrice * item.product_quantity);
                        }
                    }
                    else {
                        self.cart_price = Number(self.cart_price) + (item.product_sale_price * item.product_quantity);
                    }
                }
                else {
                    if (item.discount_per_piece != null) {
                        if (item.discount_type == '%') {
                            var singleItemPrice = Number(item.product_purchase_price) - ((Number(item.discount_per_piece) / Number(item.product_purchase_price)) * 100);
                            self.cart_price = Number(self.cart_price) + (singleItemPrice * item.product_quantity);
                        }
                        else {
                            var singleItemPrice = Number(item.product_purchase_price) - Number(item.discount_per_piece);
                            self.cart_price = Number(self.cart_price) + (singleItemPrice * item.product_quantity);
                        }
                    }
                    else {
                        self.cart_price = Number(self.cart_price) + (item.product_purchase_price * item.product_quantity);
                    }
                }
            }
        });
        this.cart_price = this.cart_price.toFixed(2);
        console.log(this.cart_price);
    };
    HeaderPage.prototype.checkLogin = function () {
        var token = localStorage.getItem('sin_auth_token');
        if (token != '' && token != null && token != undefined) {
            this.is_logged_in = true;
        }
        else {
            this.is_logged_in = false;
        }
    };
    HeaderPage.prototype.onButtonClickdrop = function () {
        this.buttonClickeddrop = !this.buttonClickeddrop;
    };
    HeaderPage.prototype.onButtonClickcat = function () {
        this.buttonClickedcat = !this.buttonClickedcat;
    };
    HeaderPage.prototype.chooseLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _choose_location_choose_location_page__WEBPACK_IMPORTED_MODULE_4__["ChooseLocationPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HeaderPage.prototype.logout = function () {
        localStorage.removeItem('sin_auth_token');
        this.presentToast('Logged out successfully!', 'success');
        this.events.publish('call_logout_head:true', '');
        this.checkLogin();
        this.router.navigate(['/home']);
    };
    HeaderPage.prototype.presentToast = function (message, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 3000,
                            position: 'top',
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
    HeaderPage.prototype.automaticPopup = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _auto_popup_auto_popup_page__WEBPACK_IMPORTED_MODULE_3__["AutoPopupPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HeaderPage.prototype.uploadImg = function (event) {
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
                this.userService.postData(formData, 'searchByImage').subscribe(function (result) {
                    _this.stopLoading();
                    console.log(result);
                    _this.router.navigate(['/products'], { queryParams: { cat: (_this.cats_array.length > 0 ? _this.cats_array[0].cat_id : ''), subcat: (_this.cats_array.length > 0 ? _this.cats_array[0].sub_cat_id : ''), search: '', searchImage: JSON.stringify(result.imageCats) } });
                }, function (err) {
                    _this.stopLoading();
                    _this.presentToast('Something went wrong.Please try later.', 'danger');
                });
            }
        }
    };
    ;
    HeaderPage.prototype.callSearchFunctionApi = function () {
        // this.presentLoading();
        // this.userService.postData({'searchText': this.searchTerm}, 'searchByText').subscribe((result) => {
        // this.stopLoading();
        // console.log(result)
        // if(result.status == 1){
        this.router.navigate(['/products'], { queryParams: { cat: (this.cats_array.length > 0 ? this.cats_array[0].cat_id : ''), subcat: (this.cats_array.length > 0 ? this.cats_array[0].sub_cat_id : ''), search: this.searchTerm } });
        // }else{
        // this.presentToast('No product found related your search.','danger');
        // }
        // for(var i=0; i < result.cats.length;i++){
        //   if(result.cats[i].product_cat.split(',').length > 1){
        //     if(this.cats_array.length == 0){
        //       this.cats_array.push(result.cats[i].product_cat.split(',')[0]);
        //     }
        //     var cats = result.cats[i].product_cat.split(',');
        //     // for(var j=0; j < this.cats_array.length; j++){
        //       // let isCatExist = false;
        //       for(k=0; k < cats.length;k++){
        //       //   if(this.cats_array[j] == cats[k]){
        //           // isCatExist = true;
        //         // }
        //         this.cats_array.push(cats[k]);
        //         this.sub
        //       // }
        //       }
        //   }else{
        //   }
        // }
        // },
        // err => {
        //   this.stopLoading();
        //   this.presentToast('Something went wrong.Please try later.','danger');
        // });
    };
    HeaderPage.prototype.presentLoading = function () {
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
    HeaderPage.prototype.stopLoading = function () {
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
    HeaderPage.prototype.startListening = function () {
        // Start the recognition process
        this.speechRecognition.startListening().subscribe(function (matches) {
            return console.log(matches);
        }, function (onerror) { return console.log('error:', onerror); });
    };
    HeaderPage.prototype.subtotalPrice = function (item) {
        if (item.is_variation == 1) {
            return Number(item.product_price);
        }
        else if (Number(item.wholesale_price) != 0 && Number(item.product_quantity) >= Number(item.wholesale_products) && this.errors.indexOf(item.wholesale_products) == -1) {
            return item.wholesale_price;
        }
        else {
            if (this.errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price) {
                if (item.discount_per_piece != null) {
                    if (item.discount_type == '%') {
                        return (Number(item.product_sale_price) - ((Number(item.discount_per_piece) / Number(item.product_sale_price)) * 100)).toFixed(2);
                    }
                    else {
                        return (Number(item.product_sale_price) - Number(item.discount_per_piece)).toFixed(2);
                    }
                }
                else {
                    return item.product_sale_price;
                }
            }
            else {
                if (item.discount_per_piece != null) {
                    if (item.discount_type == '%') {
                        return (Number(item.product_purchase_price) - ((Number(item.discount_per_piece) / Number(item.product_purchase_price)) * 100)).toFixed(2);
                    }
                    else {
                        return (Number(item.product_purchase_price) - Number(item.discount_per_piece)).toFixed(2);
                    }
                }
                else {
                    return item.product_purchase_price;
                }
            }
        }
    };
    ;
    HeaderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.page.html */ "./src/app/header/header.page.html"),
            styles: [__webpack_require__(/*! ./header.page.scss */ "./src/app/header/header.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], ng_socket_io__WEBPACK_IMPORTED_MODULE_10__["Socket"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_12__["SpeechRecognition"]])
    ], HeaderPage);
    return HeaderPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~about-us-about-us-module~blog-blog-module~blog-detail-blog-detail-module~header-header-modul~4128bdaa.js.map