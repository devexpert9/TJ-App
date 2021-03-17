(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-us-contact-us-module"],{

/***/ "./src/app/contact-us/contact-us.module.ts":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.module.ts ***!
  \*************************************************/
/*! exports provided: ContactUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us.page */ "./src/app/contact-us/contact-us.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]
    }
];
var ContactUsPageModule = /** @class */ (function () {
    function ContactUsPageModule() {
    }
    ContactUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]]
        })
    ], ContactUsPageModule);
    return ContactUsPageModule;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.page.html":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"darkred\" text-uppercase>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n       Contact Us\n    </ion-title>\n  <ion-buttons slot=\"end\" > \n          <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n\t     <ion-buttons slot=\"end\">\n          <ion-icon name=\"pin\"></ion-icon>\n    </ion-buttons>\n<ion-buttons slot=\"end\" > \n\t<ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\t\n\t </ion-buttons>\n  </ion-toolbar>\n      <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n\t              <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n\t              <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n\t              <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n\t              <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t   </div>\n</ion-header> --> \n<ion-content >\n<div class=\"ion-padding\">\n<div header_height></div>\n<!-- Breadcrumb Start -->\n\t\t<div breadcrumb  class=\"ion-hide-md-down\">\t\t\n\t\t\t\t<div breadcrumb-inner>\n\t\t\t\t\t<ul list-inline list-unstyled>\n\t\t\t\t\t\t<li><a routerLink=\"/home\">Home</a></li>\n\t\t\t\t\t\t<li class=\"active\">Contact</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- /.breadcrumb-inner -->\n\t\t</div>\n<!-- Breadcrumb Ends -->\n<!---  Contact Section Start -->\n<div contact-page>\n <ion-row>\n   <ion-col size-md=\"12\" size=\"12\" contact-map class=\"ion-hide-md-down\">\n\t\t<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83327.3577570667!2d-123.19394410957479!3d49.2578263206911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C+BC%2C+Canada!5e0!3m2!1sen!2sin!4v1551704675976\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>\n\t\t</iframe>\n   </ion-col>\n   <ion-col size-md=\"12\" size-lg=\"9\" size=\"12\" contact-form>\n      \n\t     <ion-row>\n\t\t     <ion-col size-md=\"12\" size=\"12\">\n\t\t\t   <div contact-title><h4>Contact Form</h4><p class=\"ion-hide-lg-up\">Please fill the form below if any query</p></div>\t\t\t \n\t\t\t </ion-col>\n\t\t\t  <ion-col size-md=\"4\" size-lg=\"4\" size=\"12\">\n               <div textinput>\n\t\t\t\t \t<ion-label  text-left class=\"ion-hide-md-down\">Your Name <span>*</span></ion-label>\n\t\t\t\t\t<ion-item new-input lines=\"none\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t<ion-icon name=\"person\" class=\"ion-hide-lg-up\"></ion-icon>\n\t\t\t\t\t\t<ion-input [(ngModel)]=\"c_name\" type=\"text\" placeholder=\"Your Name\" class=\"col-bg-blck\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t </div>\t\n\t\t\t  </ion-col>\n\t\t\t    <ion-col size-md=\"4\" size-lg=\"4\" size=\"12\">\n\t               <div textinput>\n\t\t\t\t\t \t<ion-label  text-left class=\"ion-hide-md-down\">Email Address  <span>*</span></ion-label>\n\t\t\t\t\t\t<ion-item new-input lines=\"none\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<ion-icon name=\"mail\" class=\"ion-hide-lg-up\"></ion-icon>\n\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"c_email\" type=\"email\" placeholder=\"Email Address\" class=\"col-bg-blck\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t </div>\t\n\t\t\t  </ion-col>\n\t\t\t    <ion-col size-md=\"4\" size-lg=\"4\" size=\"12\">\n\t               <div textinput>\n\t\t\t\t\t \t<ion-label  text-left class=\"ion-hide-md-down\">Phone Number <span>*</span></ion-label>\n\t\t\t\t\t\t<ion-item new-input lines=\"none\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<ion-icon name=\"pricetags\" class=\"ion-hide-lg-up\"></ion-icon>\n\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"c_phone\" type=\"number\" placeholder=\"Phone Number\" class=\"col-bg-blck\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t </div>\t\n\t\t\t  </ion-col>\n\t\t\t  <ion-col size-md=\"12\" size-lg=\"12\" size=\"12\">\n\t\t\t       <div textinput>\n\t\t\t\t\t \t<ion-label  text-left class=\"ion-hide-md-down\">Your Comments  <span>*</span></ion-label>\n\t\t\t\t\t\t<ion-item new-input lines=\"none\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t <ion-textarea [(ngModel)]=\"c_comments\" placeholder=\"Your Comments \" style=\"height:146px\" class=\"col-bg-blck\"></ion-textarea>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t    </div>\t\n\t\t\t\t\n\t\t\t  </ion-col>\n\t\t\t    <ion-col size-md=\"12\" size-lg=\"12\" size=\"12\">\n\t\t\t\t   <ion-button (click)=\"contactUs()\" color=\"darkred\">Send Message</ion-button>\n\t\t\t\t\n\t\t\t\t</ion-col>\n\t\t </ion-row>\t  \n\t  \n   </ion-col>\n  <ion-col size-md=\"3\" size-lg=\"3\" size=\"12\" contact-info class=\"ion-hide-md-down\">\n       <div contact-title>\n\t\t\t   <h4>Contact Form</h4>\n\t   </div>\n\t   <div class=\"clearfix\"  phone-no>\n\t        <span contact-i><i class=\"fa fa-mobile\"></i></span>\n\t\t\t<span contact-span>{{socialLinks?.contactDetails?.gen_set_system_phone}}</span>\n\t   </div>\n\t     <div class=\"clearfix\"  email>\n\t        <span contact-i><i class=\"fa fa-envelope\"></i></span>\n\t\t\t<span contact-span><a href=\"mailto:{{socialLinks?.contactDetails?.gen_set_system_email}}\">{{socialLinks?.contactDetails?.gen_set_system_email}}</a></span>\n\t   </div>\n  </ion-col>\n </ion-row>\n</div>\n</div>\n\n<!---  Contact Section Ends -->\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.page.scss":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey2); }\n  ion-content [contact-page] {\n    background-color: var(--ion-color-white);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n    padding: var(--ion-padding-20);\n    overflow: hidden;\n    margin-bottom: var(--ion-margin-60); }\n  @media only screen and (max-width: 991px) {\n      ion-content [contact-page] {\n        padding: var(--ion-padding-0);\n        background-color: transparent;\n        box-shadow: none; }\n        ion-content [contact-page] ion-col {\n          padding-left: var(--ion-value-0);\n          padding-right: var(--ion-value-0); } }\n  ion-content [contact-page] [contact-title] h4 {\n      margin-bottom: var(--ion-margin-5);\n      font-size: var(--ion-font-size-16);\n      font-family: var(--ion-font-family-2);\n      font-weight: 900;\n      color: var(--ion-color-white); }\n  ion-content [contact-page] [contact-title] p {\n      color: var(--ion-color-white);\n      font-size: var(--ion-font-size-14);\n      margin-bottom: var(--ion-margin-20); }\n  ion-content [contact-page] [contact-form] ion-button {\n      --box-shadow:none;\n      --border-radius:var(--ion-value-0)!important;\n      font-family: var(--ion-font-family-2); }\n  ion-content [contact-page] [contact-form] ion-button:hover {\n        opacity: 0.8; }\n  ion-content [contact-page] [contact-form] [textinput] ion-textarea {\n      color: var(--ion-color-white);\n      font-family: var(--ion-font-family-2); }\n  ion-content [contact-page] [contact-form] [textinput] ion-label {\n      color: var(--ion-color-darkgrey9);\n      font-size: var(--ion-font-size-13);\n      font-family: var(--ion-font-family-2);\n      font-weight: normal;\n      margin-bottom: var(--ion-margin-5);\n      display: inline-block; }\n  ion-content [contact-page] [contact-form] [textinput] ion-label span {\n        color: red; }\n  ion-content [contact-page] [contact-form] [textinput] [new-input] {\n      margin-bottom: var(--ion-margin-10);\n      font-size: var(--ion-font-size-13);\n      --background: transparent;\n      border: 1px solid  #eee;\n      border-radius: 4px; }\n  @media only screen and (max-width: 991px) {\n        ion-content [contact-page] [contact-form] [textinput] [new-input] {\n          background: transparent;\n          margin-bottom: var(--ion-margin-0);\n          --min-height:var(--ion-wh-30)!important; } }\n  @media only screen and (min-width: 991px) {\n        ion-content [contact-page] [contact-form] [textinput] [new-input] {\n          border-color: #eee;\n          --min-height:var(--ion-wh-40); } }\n  ion-content [contact-page] [contact-form] [textinput] [new-input] ion-icon {\n        font-size: var(--ion-font-size-20);\n        color: var(--ion-color-white);\n        border-right: 1px solid #eee;\n        padding-right: var(--ion-font-size-10); }\n  ion-content [contact-page] [contact-form] [textinput] [new-input] ion-icon .item-inner {\n          border: none; }\n  ion-content [contact-page] [contact-form] [textinput] [new-input] ion-input {\n        padding-left: var(--ion-padding-10) !important;\n        color: var(--ion-color-white); }\n  @media only screen and (min-width: 991px) {\n          ion-content [contact-page] [contact-form] [textinput] [new-input] ion-input {\n            font-family: var(--ion-font-family-2);\n            --min-height:40px;\n            color: var(--ion-color-black) !important;\n            padding-left: var(--ion-padding-0) !important; } }\n  ion-content [contact-page] [contact-info] [phone-no], ion-content [contact-page] [contact-info] [email] {\n      margin-bottom: var(--ion-margin-10); }\n  ion-content [contact-page] [contact-info] [phone-no] [contact-i], ion-content [contact-page] [contact-info] [email] [contact-i] {\n        background-color: var(--ion-color-darkred);\n        display: inline-block;\n        height: 30px;\n        width: 30px;\n        text-align: center;\n        border-radius: var(--ion-value-50);\n        color: var(--ion-color-white);\n        margin-right: var(--ion-margin-16);\n        float: left; }\n  ion-content [contact-page] [contact-info] [phone-no] [contact-i] i, ion-content [contact-page] [contact-info] [email] [contact-i] i {\n          padding-top: var(--ion-padding-8);\n          font-size: var(--ion-font-size-14); }\n  ion-content [contact-page] [contact-info] [contact-span] {\n      font-family: var(--ion-font-family-2);\n      display: block;\n      font-size: var(--ion-font-size-13);\n      color: var(--ion-color-darkgrey); }\n  ion-content [contact-page] [contact-info] [contact-span] a {\n        font-family: var(--ion-font-family-2);\n        color: var(--ion-color-darkred); }\n  @media only screen and (max-width: 991px) {\n      ion-content [contact-page] [mob-head] {\n        margin-top: var(--ion-margin-0); } }\n  @media only screen and (min-width: 991px) {\n      ion-content [contact-page] .col-bg-blck {\n        color: #000 !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsbUNBQWEsRUFBQTtFQUZiO0lBS1Esd0NBQXdDO0lBQzlDLDJDQUF1QztJQUN2Qyw4QkFBK0I7SUFZL0IsZ0JBQWdCO0lBQ2hCLG1DQUFvQyxFQUFBO0VBWnBDO01BUkY7UUFVSyw2QkFBOEI7UUFDOUIsNkJBQTZCO1FBQzdCLGdCQUFlLEVBQUE7UUFacEI7VUFlTSxnQ0FBK0I7VUFDL0IsaUNBQWdDLEVBQUEsRUFDaEM7RUFqQk47TUF5QlUsa0NBQWtDO01BQ3hDLGtDQUFrQztNQUNsQyxxQ0FBcUM7TUFDckMsZ0JBQWdCO01BQ2hCLDZCQUE2QixFQUFBO0VBN0JqQztNQWdDTSw2QkFBNkI7TUFBQyxrQ0FBa0M7TUFBRSxtQ0FBbUMsRUFBQTtFQWhDM0c7TUF1Q0ksaUJBQWE7TUFDYiw0Q0FBZ0I7TUFDaEIscUNBQXFDLEVBQUE7RUF6Q3pDO1FBNENPLFlBQVcsRUFBQTtFQTVDbEI7TUFvRE0sNkJBQTZCO01BQzdCLHFDQUFxQyxFQUFBO0VBckQzQztNQXlETyxpQ0FBZ0M7TUFDbkMsa0NBQWtDO01BQ2xDLHFDQUFvQztNQUN4QixtQkFBbUI7TUFDL0Isa0NBQWtDO01BQ2xDLHFCQUFxQixFQUFBO0VBOUR6QjtRQWlFSSxVQUFVLEVBQUE7RUFqRWQ7TUFzRU0sbUNBQWtDO01BTXJDLGtDQUFrQztNQUNsQyx5QkFBYTtNQUNkLHVCQUFzQjtNQUN0QixrQkFBaUIsRUFBQTtFQVJoQjtRQXZFSDtVQXdFTyx1QkFBc0I7VUFDekIsa0NBQWlDO1VBQ25DLHVDQUFhLEVBQUEsRUFtQ2I7RUE3QkE7UUFoRkY7VUFpRk0sa0JBQWtCO1VBQ25CLDZCQUFhLEVBQUEsRUEyQmhCO0VBN0dGO1FBc0ZHLGtDQUFpQztRQUNqQyw2QkFBNEI7UUFDNUIsNEJBQTRCO1FBQzVCLHNDQUFzQyxFQUFBO0VBekZ6QztVQTZGTSxZQUFZLEVBQUE7RUE3RmxCO1FBa0dFLDhDQUE2QztRQUMxQyw2QkFBNkIsRUFBQTtFQUNoQztVQXBHRjtZQXNHTyxxQ0FBb0M7WUFDckMsaUJBQWE7WUFDYix3Q0FBdUM7WUFDdkMsNkNBQTRDLEVBQUEsRUFHaEQ7RUE1R0Y7TUFtSFcsbUNBQW1DLEVBQUE7RUFuSDlDO1FBc0hlLDBDQUEwQztRQUMxQyxxQkFBcUI7UUFDOUIsWUFBWTtRQUNaLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsa0NBQWtDO1FBQ2xDLDZCQUE2QjtRQUM3QixrQ0FBa0M7UUFDbEMsV0FBVyxFQUFBO0VBOUhqQjtVQWdJdUIsaUNBQWlDO1VBQ2pDLGtDQUFrQyxFQUFBO0VBakl6RDtNQXNJVSxxQ0FBb0M7TUFDcEMsY0FBYztNQUNwQixrQ0FBa0M7TUFDbEMsZ0NBQWlDLEVBQUE7RUF6SXJDO1FBMklVLHFDQUFvQztRQUN2QywrQkFBK0IsRUFBQTtFQUlwQztNQWhKRjtRQW1KSSwrQkFBOEIsRUFBQSxFQUM5QjtFQUdGO01BdkpGO1FBeUppQixzQkFBcUIsRUFBQSxFQUFHIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50XHJcbnsgIFxyXG4tLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXkyKTtcclxuW2NvbnRhY3QtcGFnZV1cclxue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLC4wOCk7XHJcblx0XHRwYWRkaW5nOiB2YXIoIC0taW9uLXBhZGRpbmctMjApO1xyXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0e1xyXG5cdFx0ICAgcGFkZGluZzogdmFyKCAtLWlvbi1wYWRkaW5nLTApO1xyXG5cdFx0ICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHQgICBib3gtc2hhZG93Om5vbmU7XHJcblx0XHQgICBpb24tY29sXHJcblx0XHQgICB7XHJcblx0XHRcdCAgIHBhZGRpbmctbGVmdDp2YXIoLS1pb24tdmFsdWUtMCk7XHJcblx0XHRcdCAgIHBhZGRpbmctcmlnaHQ6dmFyKC0taW9uLXZhbHVlLTApO1xyXG5cdFx0ICAgfVxyXG5cdCAgIH1cdFx0XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogdmFyKCAtLWlvbi1tYXJnaW4tNjApO1xyXG5cdFx0XHRbY29udGFjdC10aXRsZV1cclxuXHRcdHtcclxuXHRcdCAgIGg0XHJcblx0XHQgICB7XHJcblx0XHQgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tNSk7XHJcblx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcclxuXHRcdFx0XHRmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA5MDA7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHQgICB9XHJcblx0XHQgICBwXHJcblx0XHQgICB7Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTsgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0yMCk7XHJcblx0XHQgICB9XHJcblx0XHR9XHJcblx0XHRbY29udGFjdC1mb3JtXVxyXG5cdFx0e1xyXG5cdFx0aW9uLWJ1dHRvbiBcclxuXHRcdHtcclxuXHRcdCAgLS1ib3gtc2hhZG93Om5vbmU7XHJcblx0XHQgIC0tYm9yZGVyLXJhZGl1czp2YXIoLS1pb24tdmFsdWUtMCkhaW1wb3J0YW50O1xyXG5cdFx0ICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0ICAmOmhvdmVyXHJcblx0XHQgIHtcclxuXHRcdCAgICAgb3BhY2l0eTowLjg7XHJcblx0XHQgIH1cclxuXHRcdH1cclxuXHRcclxuXHRcdFt0ZXh0aW5wdXRdXHJcblx0XHR7XHJcblx0XHRcdFx0aW9uLXRleHRhcmVhIFxyXG5cdFx0XHRcdHsgXHJcblx0XHRcdFx0ICBjb2xvcjp2YXIoIC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHQgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0ICBpb24tbGFiZWxcclxuXHRcdCAge1xyXG5cdFx0ICAgIFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtncmV5OSk7XHJcblx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcclxuXHRcdFx0XHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tNSk7XHJcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdHNwYW5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0Y29sb3I6IHJlZDtcclxuXHRcdFx0XHR9XHJcblx0XHQgIH1cclxuXHRcdCBbbmV3LWlucHV0XSBcclxuXHQgICAge1xyXG5cdCAgICAgbWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLTEwKTtcclxuXHRcdCBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHR7ICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcblx0XHQgIG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdC0tbWluLWhlaWdodDp2YXIoLS1pb24td2gtMzApIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHRcdCBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG5cdFx0IC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHRcclxuXHRcdGJvcmRlcjoxcHggc29saWQgICNlZWU7XHJcblx0XHRib3JkZXItcmFkaXVzOjRweDtcdFxyXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxyXG5cdFx0eyAgIGJvcmRlci1jb2xvcjogI2VlZTtcclxuXHRcdCAgIC0tbWluLWhlaWdodDp2YXIoLS1pb24td2gtNDApO1xyXG5cdFx0fVxyXG5cdFx0aW9uLWljb25cclxuXHRcdHtcclxuXHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMjApO1xyXG5cdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xyXG5cdFx0XHRwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tZm9udC1zaXplLTEwKTtcdFx0XHJcblx0XHRcdFxyXG5cdFx0Lml0ZW0taW5uZXJcclxuXHRcdHtcclxuXHQgICAgXHRib3JkZXI6IG5vbmU7XHJcblx0ICAgIH1cclxuXHR9XHJcblx0aW9uLWlucHV0XHJcblx0e1x0XHJcblx0IHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmctMTApIWltcG9ydGFudDtcclxuICAgICBjb2xvcjp2YXIoIC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHQgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxyXG5cdFx0eyAgXHJcbiAgICAgXHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTsgXHJcblx0XHQgICAgLS1taW4taGVpZ2h0OjQwcHg7XHRcclxuXHRcdCAgICBjb2xvcjp2YXIoIC0taW9uLWNvbG9yLWJsYWNrKSFpbXBvcnRhbnQ7XHJcblx0XHQgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZy0wKSFpbXBvcnRhbnQ7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHR9XHJcblx0fVxyXG5cdFx0fVxyXG5cdFx0W2NvbnRhY3QtaW5mb11cclxuXHRcdHtcclxuXHRcdCAgW3Bob25lLW5vXSAsIFtlbWFpbF1cclxuXHRcdCAgeyAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApO1xyXG5cdFx0ICAgICAgW2NvbnRhY3QtaV0gXHJcblx0XHRcdCAgeyAgICAgICAgICAgICBcclxuXHRcdFx0ICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHQgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMzBweDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDMwcHg7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTUwKTtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbi0xNik7XHJcblx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0XHRcdFx0XHRpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0ICB9XHJcblx0XHQgICAgfVxyXG5cdFx0ICB9XHJcblx0XHQgIFtjb250YWN0LXNwYW5dXHJcblx0XHQgIHsgICAgXHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7IFxyXG5cdFx0ICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLWRhcmtncmV5KTtcclxuXHRcdFx0XHRhIFxyXG5cdFx0XHRcdHsgICAgXHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0ICBcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHJcblx0XHRcdFx0fVxyXG4gICBcdFx0ICB9XHJcblx0XHR9XHJcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHR7XHJcblx0XHQgW21vYi1oZWFkXSB7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHR9XHJcblx0XHRcclxuXHRcdH1cclxuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTFweClcclxuXHRcdHtcclxuXHRcdCAuY29sLWJnLWJsY2sge2NvbG9yOiMwMDAgIWltcG9ydGFudDt9XHJcblx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG59XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.page.ts":
/*!***********************************************!*\
  !*** ./src/app/contact-us/contact-us.page.ts ***!
  \***********************************************/
/*! exports provided: ContactUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPage", function() { return ContactUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");




var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(toastController, loadingController, userService) {
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.userService = userService;
        this.errors = ['', null, undefined];
    }
    ContactUsPage.prototype.ngOnInit = function () {
    };
    ContactUsPage.prototype.ionViewDidEnter = function () {
        this.getSocialInfo();
    };
    ContactUsPage.prototype.getSocialInfo = function () {
        var _this = this;
        this.userService.postData({}, 'socialLinks').subscribe(function (result) {
            _this.socialLinks = result.socialLinks;
        }, function (err) {
            console.log('api error');
        });
    };
    ContactUsPage.prototype.contactUs = function () {
        var _this = this;
        if (this.errors.indexOf(this.c_name) >= 0) {
            this.presentToast('Please enter your name.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.c_email) >= 0) {
            this.presentToast('Please enter your email.', 'danger');
            return false;
        }
        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (reg.test(this.c_email) == false) {
            this.presentToast('Please enter valid email address.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.c_phone) >= 0) {
            this.presentToast('Please enter phone number.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.c_comments) >= 0) {
            this.presentToast('Please enter your comments.', 'danger');
            return false;
        }
        this.presentLoading();
        this.userService.postData({ name: this.c_name, email: this.c_email, phone: this.c_phone, content: this.c_comments }, 'contactUs').subscribe(function (result) {
            if (result.status == 1) {
                _this.c_name = '';
                _this.c_email = '';
                _this.c_phone = '';
                _this.c_comments = '';
                _this.stopLoading();
                _this.presentToast('Thanks! We will get in touch with you as soon as possible.', 'success');
            }
            else {
                _this.stopLoading();
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    ContactUsPage.prototype.presentToast = function (message, color) {
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
    ContactUsPage.prototype.presentLoading = function () {
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
    ContactUsPage.prototype.stopLoading = function () {
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
    ContactUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.page.html */ "./src/app/contact-us/contact-us.page.html"),
            styles: [__webpack_require__(/*! ./contact-us.page.scss */ "./src/app/contact-us/contact-us.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ContactUsPage);
    return ContactUsPage;
}());



/***/ })

}]);
//# sourceMappingURL=contact-us-contact-us-module.js.map