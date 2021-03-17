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

module.exports = "ion-content {\n  --background:var(--ion-color-grey2); }\n  ion-content [contact-page] {\n    background-color: var(--ion-color-white);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n    padding: var(--ion-padding-20);\n    overflow: hidden;\n    margin-bottom: var(--ion-margin-60); }\n  @media only screen and (max-width: 991px) {\n      ion-content [contact-page] {\n        padding: var(--ion-padding-0);\n        background-color: transparent;\n        box-shadow: none; }\n        ion-content [contact-page] ion-col {\n          padding-left: var(--ion-value-0);\n          padding-right: var(--ion-value-0); } }\n  ion-content [contact-page] [contact-title] h4 {\n      margin-bottom: var(--ion-margin-5);\n      font-size: var(--ion-font-size-16);\n      font-family: var(--ion-font-family-2);\n      font-weight: 900;\n      color: var(--ion-color-white); }\n  ion-content [contact-page] [contact-title] p {\n      color: var(--ion-color-white);\n      font-size: var(--ion-font-size-14);\n      margin-bottom: var(--ion-margin-20); }\n  ion-content [contact-page] [contact-form] ion-button {\n      --box-shadow:none;\n      --border-radius:var(--ion-value-0)!important;\n      font-family: var(--ion-font-family-2); }\n  ion-content [contact-page] [contact-form] ion-button:hover {\n        opacity: 0.8; }\n  ion-content [contact-page] [contact-form] [textinput] ion-textarea {\n      color: var(--ion-color-white);\n      font-family: var(--ion-font-family-2); }\n  ion-content [contact-page] [contact-form] [textinput] ion-label {\n      color: var(--ion-color-darkgrey9);\n      font-size: var(--ion-font-size-13);\n      font-family: var(--ion-font-family-2);\n      font-weight: normal;\n      margin-bottom: var(--ion-margin-5);\n      display: inline-block; }\n  ion-content [contact-page] [contact-form] [textinput] ion-label span {\n        color: red; }\n  ion-content [contact-page] [contact-form] [textinput] [new-input] {\n      margin-bottom: var(--ion-margin-10);\n      font-size: var(--ion-font-size-13);\n      --background: transparent;\n      border: 1px solid  #eee;\n      border-radius: 4px; }\n  @media only screen and (max-width: 991px) {\n        ion-content [contact-page] [contact-form] [textinput] [new-input] {\n          background: transparent;\n          margin-bottom: var(--ion-margin-0);\n          --min-height:var(--ion-wh-30)!important; } }\n  @media only screen and (min-width: 991px) {\n        ion-content [contact-page] [contact-form] [textinput] [new-input] {\n          border-color: #eee;\n          --min-height:var(--ion-wh-40); } }\n  ion-content [contact-page] [contact-form] [textinput] [new-input] ion-icon {\n        font-size: var(--ion-font-size-20);\n        color: var(--ion-color-white);\n        border-right: 1px solid #eee;\n        padding-right: var(--ion-font-size-10); }\n  ion-content [contact-page] [contact-form] [textinput] [new-input] ion-icon .item-inner {\n          border: none; }\n  ion-content [contact-page] [contact-form] [textinput] [new-input] ion-input {\n        padding-left: var(--ion-padding-10) !important;\n        color: var(--ion-color-white); }\n  @media only screen and (min-width: 991px) {\n          ion-content [contact-page] [contact-form] [textinput] [new-input] ion-input {\n            font-family: var(--ion-font-family-2);\n            --min-height:40px;\n            color: var(--ion-color-black) !important;\n            padding-left: var(--ion-padding-0) !important; } }\n  ion-content [contact-page] [contact-info] [phone-no], ion-content [contact-page] [contact-info] [email] {\n      margin-bottom: var(--ion-margin-10); }\n  ion-content [contact-page] [contact-info] [phone-no] [contact-i], ion-content [contact-page] [contact-info] [email] [contact-i] {\n        background-color: var(--ion-color-darkred);\n        display: inline-block;\n        height: 30px;\n        width: 30px;\n        text-align: center;\n        border-radius: var(--ion-value-50);\n        color: var(--ion-color-white);\n        margin-right: var(--ion-margin-16);\n        float: left; }\n  ion-content [contact-page] [contact-info] [phone-no] [contact-i] i, ion-content [contact-page] [contact-info] [email] [contact-i] i {\n          padding-top: var(--ion-padding-8);\n          font-size: var(--ion-font-size-14); }\n  ion-content [contact-page] [contact-info] [contact-span] {\n      font-family: var(--ion-font-family-2);\n      display: block;\n      font-size: var(--ion-font-size-13);\n      color: var(--ion-color-darkgrey); }\n  ion-content [contact-page] [contact-info] [contact-span] a {\n        font-family: var(--ion-font-family-2);\n        color: var(--ion-color-darkred); }\n  @media only screen and (max-width: 991px) {\n      ion-content [contact-page] [mob-head] {\n        margin-top: var(--ion-margin-0); } }\n  @media only screen and (min-width: 991px) {\n      ion-content [contact-page] .col-bg-blck {\n        color: #000 !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLG1DQUFhLEVBQUE7RUFGYjtJQUtRLHdDQUF3QztJQUM5QywyQ0FBdUM7SUFDdkMsOEJBQStCO0lBWS9CLGdCQUFnQjtJQUNoQixtQ0FBb0MsRUFBQTtFQVpwQztNQVJGO1FBVUssNkJBQThCO1FBQzlCLDZCQUE2QjtRQUM3QixnQkFBZSxFQUFBO1FBWnBCO1VBZU0sZ0NBQStCO1VBQy9CLGlDQUFnQyxFQUFBLEVBQ2hDO0VBakJOO01BeUJVLGtDQUFrQztNQUN4QyxrQ0FBa0M7TUFDbEMscUNBQXFDO01BQ3JDLGdCQUFnQjtNQUNoQiw2QkFBNkIsRUFBQTtFQTdCakM7TUFnQ00sNkJBQTZCO01BQUMsa0NBQWtDO01BQUUsbUNBQW1DLEVBQUE7RUFoQzNHO01BdUNJLGlCQUFhO01BQ2IsNENBQWdCO01BQ2hCLHFDQUFxQyxFQUFBO0VBekN6QztRQTRDTyxZQUFXLEVBQUE7RUE1Q2xCO01Bb0RNLDZCQUE2QjtNQUM3QixxQ0FBcUMsRUFBQTtFQXJEM0M7TUF5RE8saUNBQWdDO01BQ25DLGtDQUFrQztNQUNsQyxxQ0FBb0M7TUFDeEIsbUJBQW1CO01BQy9CLGtDQUFrQztNQUNsQyxxQkFBcUIsRUFBQTtFQTlEekI7UUFpRUksVUFBVSxFQUFBO0VBakVkO01Bc0VNLG1DQUFrQztNQU1yQyxrQ0FBa0M7TUFDbEMseUJBQWE7TUFDZCx1QkFBc0I7TUFDdEIsa0JBQWlCLEVBQUE7RUFSaEI7UUF2RUg7VUF3RU8sdUJBQXNCO1VBQ3pCLGtDQUFpQztVQUNuQyx1Q0FBYSxFQUFBLEVBbUNiO0VBN0JBO1FBaEZGO1VBaUZNLGtCQUFrQjtVQUNuQiw2QkFBYSxFQUFBLEVBMkJoQjtFQTdHRjtRQXNGRyxrQ0FBaUM7UUFDakMsNkJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1QixzQ0FBc0MsRUFBQTtFQXpGekM7VUE2Rk0sWUFBWSxFQUFBO0VBN0ZsQjtRQWtHRSw4Q0FBNkM7UUFDMUMsNkJBQTZCLEVBQUE7RUFDaEM7VUFwR0Y7WUFzR08scUNBQW9DO1lBQ3JDLGlCQUFhO1lBQ2Isd0NBQXVDO1lBQ3ZDLDZDQUE0QyxFQUFBLEVBR2hEO0VBNUdGO01BbUhXLG1DQUFtQyxFQUFBO0VBbkg5QztRQXNIZSwwQ0FBMEM7UUFDMUMscUJBQXFCO1FBQzlCLFlBQVk7UUFDWixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGtDQUFrQztRQUNsQyw2QkFBNkI7UUFDN0Isa0NBQWtDO1FBQ2xDLFdBQVcsRUFBQTtFQTlIakI7VUFnSXVCLGlDQUFpQztVQUNqQyxrQ0FBa0MsRUFBQTtFQWpJekQ7TUFzSVUscUNBQW9DO01BQ3BDLGNBQWM7TUFDcEIsa0NBQWtDO01BQ2xDLGdDQUFpQyxFQUFBO0VBeklyQztRQTJJVSxxQ0FBb0M7UUFDdkMsK0JBQStCLEVBQUE7RUFJcEM7TUFoSkY7UUFtSkksK0JBQThCLEVBQUEsRUFDOUI7RUFHRjtNQXZKRjtRQXlKaUIsc0JBQXFCLEVBQUEsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudFxyXG57ICBcclxuLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5Mik7XHJcbltjb250YWN0LXBhZ2VdXHJcbntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0Ym94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwuMDgpO1xyXG5cdFx0cGFkZGluZzogdmFyKCAtLWlvbi1wYWRkaW5nLTIwKTtcclxuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdHtcclxuXHRcdCAgIHBhZGRpbmc6IHZhciggLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdCAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0ICAgYm94LXNoYWRvdzpub25lO1xyXG5cdFx0ICAgaW9uLWNvbFxyXG5cdFx0ICAge1xyXG5cdFx0XHQgICBwYWRkaW5nLWxlZnQ6dmFyKC0taW9uLXZhbHVlLTApO1xyXG5cdFx0XHQgICBwYWRkaW5nLXJpZ2h0OnZhcigtLWlvbi12YWx1ZS0wKTtcclxuXHRcdCAgIH1cclxuXHQgICB9XHRcdFxyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdG1hcmdpbi1ib3R0b206IHZhciggLS1pb24tbWFyZ2luLTYwKTtcclxuXHRcdFx0W2NvbnRhY3QtdGl0bGVdXHJcblx0XHR7XHJcblx0XHQgICBoNFxyXG5cdFx0ICAge1xyXG5cdFx0ICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTUpO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRmb250LXdlaWdodDogOTAwO1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0ICAgfVxyXG5cdFx0ICAgcFxyXG5cdFx0ICAge2NvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO2ZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7IG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMjApO1xyXG5cdFx0ICAgfVxyXG5cdFx0fVxyXG5cdFx0W2NvbnRhY3QtZm9ybV1cclxuXHRcdHtcclxuXHRcdGlvbi1idXR0b24gXHJcblx0XHR7XHJcblx0XHQgIC0tYm94LXNoYWRvdzpub25lO1xyXG5cdFx0ICAtLWJvcmRlci1yYWRpdXM6dmFyKC0taW9uLXZhbHVlLTApIWltcG9ydGFudDtcclxuXHRcdCAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdCAgJjpob3ZlclxyXG5cdFx0ICB7XHJcblx0XHQgICAgIG9wYWNpdHk6MC44O1xyXG5cdFx0ICB9XHJcblx0XHR9XHJcblx0XHJcblx0XHRbdGV4dGlucHV0XVxyXG5cdFx0e1xyXG5cdFx0XHRcdGlvbi10ZXh0YXJlYSBcclxuXHRcdFx0XHR7IFxyXG5cdFx0XHRcdCAgY29sb3I6dmFyKCAtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0ICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdCAgaW9uLWxhYmVsXHJcblx0XHQgIHtcclxuXHRcdCAgICBcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrZ3JleTkpO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTUpO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRzcGFuXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdGNvbG9yOiByZWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0ICB9XHJcblx0XHQgW25ldy1pbnB1dF0gXHJcblx0ICAgIHtcclxuXHQgICAgIG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi0xMCk7XHJcblx0XHQgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0eyAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5cdFx0ICBtYXJnaW4tYm90dG9tOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHQtLW1pbi1oZWlnaHQ6dmFyKC0taW9uLXdoLTMwKSFpbXBvcnRhbnQ7XHJcblx0XHR9XHJcblx0XHQgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcclxuXHRcdCAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1x0XHJcblx0XHRib3JkZXI6MXB4IHNvbGlkICAjZWVlO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czo0cHg7XHRcclxuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTFweClcclxuXHRcdHsgICBib3JkZXItY29sb3I6ICNlZWU7XHJcblx0XHQgICAtLW1pbi1oZWlnaHQ6dmFyKC0taW9uLXdoLTQwKTtcclxuXHRcdH1cclxuXHRcdGlvbi1pY29uXHJcblx0XHR7XHJcblx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTIwKTtcclxuXHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZTtcclxuXHRcdFx0cGFkZGluZy1yaWdodDogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMCk7XHRcdFxyXG5cdFx0XHRcclxuXHRcdC5pdGVtLWlubmVyXHJcblx0XHR7XHJcblx0ICAgIFx0Ym9yZGVyOiBub25lO1xyXG5cdCAgICB9XHJcblx0fVxyXG5cdGlvbi1pbnB1dFxyXG5cdHtcdFxyXG5cdCBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLTEwKSFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6dmFyKCAtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0IEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTFweClcclxuXHRcdHsgIFxyXG4gICAgIFx0XHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7IFxyXG5cdFx0ICAgIC0tbWluLWhlaWdodDo0MHB4O1x0XHJcblx0XHQgICAgY29sb3I6dmFyKCAtLWlvbi1jb2xvci1ibGFjaykhaW1wb3J0YW50O1xyXG5cdFx0ICAgIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmctMCkhaW1wb3J0YW50O1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblx0fVxyXG5cdH1cclxuXHRcdH1cclxuXHRcdFtjb250YWN0LWluZm9dXHJcblx0XHR7XHJcblx0XHQgIFtwaG9uZS1ub10gLCBbZW1haWxdXHJcblx0XHQgIHsgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTEwKTtcclxuXHRcdCAgICAgIFtjb250YWN0LWldIFxyXG5cdFx0XHQgIHsgICAgICAgICAgICAgXHJcblx0XHRcdCAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcclxuXHRcdFx0ICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAzMHB4O1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS01MCk7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tMTYpO1xyXG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0aSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLTgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcblx0XHRcdCAgfVxyXG5cdFx0ICAgIH1cclxuXHRcdCAgfVxyXG5cdFx0ICBbY29udGFjdC1zcGFuXVxyXG5cdFx0ICB7ICAgIFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpOyBcclxuXHRcdCAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcclxuXHRcdFx0XHRjb2xvcjogdmFyKCAtLWlvbi1jb2xvci1kYXJrZ3JleSk7XHJcblx0XHRcdFx0YSBcclxuXHRcdFx0XHR7ICAgIFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdCAgXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdH1cclxuICAgXHRcdCAgfVxyXG5cdFx0fVxyXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0e1xyXG5cdFx0IFttb2ItaGVhZF0ge1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHR9XHJcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkxcHgpXHJcblx0XHR7XHJcblx0XHQgLmNvbC1iZy1ibGNrIHtjb2xvcjojMDAwICFpbXBvcnRhbnQ7fVxyXG5cdFx0XHJcblx0XHR9XHJcblx0XHRcclxufVxyXG5cclxufSJdfQ== */"

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