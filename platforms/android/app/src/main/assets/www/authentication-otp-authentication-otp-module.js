(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-otp-authentication-otp-module"],{

/***/ "./src/app/authentication-otp/authentication-otp.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentication-otp/authentication-otp.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationOtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationOtpPageModule", function() { return AuthenticationOtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _authentication_otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication-otp.page */ "./src/app/authentication-otp/authentication-otp.page.ts");







var routes = [
    {
        path: '',
        component: _authentication_otp_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationOtpPage"]
    }
];
var AuthenticationOtpPageModule = /** @class */ (function () {
    function AuthenticationOtpPageModule() {
    }
    AuthenticationOtpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_authentication_otp_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationOtpPage"]]
        })
    ], AuthenticationOtpPageModule);
    return AuthenticationOtpPageModule;
}());



/***/ }),

/***/ "./src/app/authentication-otp/authentication-otp.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/authentication-otp/authentication-otp.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding style=\"--background:url('assets/images/bg-image.jpg')no-repeat top center / cover; \">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t <ion-col size-lg=\"6\"  size-md=\"10\"  offset-md=\"1\" offset-lg=\"3\">\n\t\t\t\t\t\t<ion-list no-bg text-center lines=\"none\">\n\t\t\t\t\t\t <div sign-logo>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<img  class=\"ion-hide-lg-up\"  src=\"assets/images/sign-logo.png\" width=\"170px\"/>\n\t\t\t\t\t\t\t<img  class=\"ion-hide-md-down\" src=\"assets/images/sign-logo-dark.png\" width=\"170px\"/>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div sign-in>\t\n\t\t\t\t\t\t\t\t <h4 text-left head-p>Authentication required</h4> \n\t\t\t\t\t\t\t\t  <p sub-title text-left>For your security, we need to authenticate your request. We've sent an OTP to the email {{email}}. Please enter it below to complete verification</p>\n\t\t\t\t\t\t\t\t<div textinput>\n                                   <ion-label  class=\"ion-hide-md-down\" text-left>Enter OTP</ion-label>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<ion-item new-input>\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"mail\" class=\"ion-hide-lg-up\"></ion-icon><ion-input  type=\"number\" placeholder=\"Enter OTP\" [(ngModel)]=\"otp\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\t\n\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t <div btn-login>\n\t\t\t\t\t\t\t\t\t \t<ion-button  expand=\"full\" color=\"darkred\" (click)=\"validateOTP(otp)\">Continue</ion-button>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div text-center para-p (click)=\"resendOTP()\"><strong >Resend OTP</strong></div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n</ion-content>\n<!-- <ion-footer class=\"footer  ion-hide-sm-down ion-padding-top  ion-padding-bottom\">\n    <div sign-footer text-center>\n            <ul list-unstyled>\n                \n                <li><a href=\"#\" >Terms &amp; Conditions</a></li>\n                <li><a href=\"#\">Privacy Policy</a></li>\n            </ul>\n        </div>\n\t\t<div text-center copyright-bar class=\"ion-padding-top\">\n           \n                    <p> Copyright © 2019 <a href=\"#\"> Siniyetu </a>. All Rights Reserved. </p>\n                 \n        </div>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/authentication-otp/authentication-otp.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/authentication-otp/authentication-otp.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content [clearfix] {\n  clear: both; }\n\n@media only screen and (min-width: 991px) {\n  ion-content {\n    background-color: var(--ion-color-grey) !important;\n    --background: none!important; } }\n\nion-content [no-bg] {\n  background: none; }\n\nion-content [sign-logo] img {\n  margin-top: var(--ion-margin-35);\n  margin-bottom: var(--ion-margin-35);\n  margin-left: auto;\n  margin-right: auto; }\n\n@media only screen and (min-width: 991px) {\n    ion-content [sign-logo] img {\n      width: 150px;\n      margin-top: var(--ion-margin-0);\n      margin-bottom: var(--ion-margin-0); } }\n\n@media only screen and (max-width: 991px) {\n  ion-content [sign-in] [sub-title] {\n    color: var(--ion-color-white);\n    line-height: 22px;\n    margin-bottom: var(--ion-margin-20); } }\n\n@media only screen and (min-width: 991px) {\n  ion-content [sign-in] {\n    margin-bottom: var(--ion-margin-20);\n    background-color: var(--ion-color-white);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n    padding: var(--ion-padding-20);\n    overflow: hidden; }\n    ion-content [sign-in] p {\n      font-size: var(--ion-font-size-15);\n      color: var(--ion-color-darkgrey); }\n      ion-content [sign-in] p a {\n        text-decoration: none;\n        color: var(--ion-color-darkred); }\n    ion-content [sign-in] ion-label {\n      display: block;\n      font-size: var(--ion-font-size-14);\n      font-family: var(--ion-font-family-2);\n      font-weight: 400;\n      max-width: 100%;\n      margin-bottom: var(--ion-margin-5); } }\n\nion-content [sign-in] [new-input] {\n  margin-bottom: var(--ion-margin-25);\n  font-size: var(--ion-font-size-14);\n  --background: transparent;\n  border: 1px solid #ffffff;\n  border-radius: 4px;\n  --min-height:38px;\n  color: var(--ion-color-white); }\n\n@media only screen and (min-width: 991px) {\n    ion-content [sign-in] [new-input] {\n      border-color: var(--ion-color-greyblue);\n      --min-height:42px; } }\n\nion-content [sign-in] [new-input] ion-icon {\n    font-size: var(--ion-font-size-20);\n    color: var(--ion-color-white);\n    border-right: 1px solid var(--ion-color-white);\n    padding-right: var(--ion-font-size-10); }\n\nion-content [sign-in] [new-input] ion-icon .item-inner {\n      border: none; }\n\nion-content [sign-in] [new-input] ion-input {\n    padding-left: var(--ion-padding-10) !important;\n    --min-height: 38px; }\n\n@media only screen and (min-width: 991px) {\n      ion-content [sign-in] [new-input] ion-input {\n        font-family: var(--ion-font-family-2);\n        --min-height:42px;\n        color: var(--ion-color-darkblack) !important;\n        padding-left: var(--ion-padding-0) !important; } }\n\nion-content [sign-in] [logo-img] img {\n  margin-top: var(--ion-margin-35);\n  margin-bottom: var(--ion-margin-35); }\n\nion-content [sign-in] [head-p] {\n  color: var(--ion-color-white);\n  font-family: var(--ion-font-family);\n  margin: 20px 0px;\n  font-weight: 700; }\n\n@media only screen and (min-width: 991px) {\n    ion-content [sign-in] [head-p] {\n      color: var(--ion-color-darkblack);\n      font-size: var(--ion-font-size-18);\n      font-family: var(--ion-font-family-2);\n      padding-bottom: var(--ion-padding-14);\n      border-bottom: 1px solid #ddd; } }\n\nion-content [sign-in] [para-q] {\n  color: var(--ion-color-white);\n  font-family: var(--ion-font-family);\n  font-size: var(--ion-font-size-14);\n  display: flex;\n  align-items: center;\n  margin-top: var(--ion-margin-0);\n  margin-bottom: var(--ion-margin-25); }\n\nion-content [sign-in] [para-q] ion-checkbox {\n    margin-right: var(--ion-margin-15); }\n\n@media only screen and (min-width: 991px) {\n    ion-content [sign-in] [para-q] {\n      color: var(--ion-color-darkred); }\n      ion-content [sign-in] [para-q][keep-me] {\n        color: var(--ion-color-darkblack) !important; } }\n\nion-content [sign-in] [para-p] {\n  color: var(--ion-color-white);\n  font-family: var(--ion-font-family);\n  margin: var(--ion-margin-35) var(--ion-margin-0); }\n\n@media only screen and (min-width: 991px) {\n    ion-content [sign-in] [para-p] {\n      font-family: var(--ion-font-family-2);\n      font-size: var(--ion-font-size-15);\n      color: var(--ion-color-darkgrey);\n      margin: var(--ion-margin-18) var(--ion-margin-0);\n      text-align: left !important;\n      font-weight: 600; }\n      ion-content [sign-in] [para-p] strong {\n        cursor: pointer;\n        color: var(--ion-color-darkred);\n        font-weight: 600; } }\n\nion-content [sign-in] [btn-login] ion-button {\n  --box-shadow:none;\n  color: var(--ion-color-white);\n  width: 100%;\n  font-weight: 600;\n  height: var(--ion-font-size-40);\n  font-family: var(--ion-font-family); }\n\n@media only screen and (min-width: 991px) {\n    ion-content [sign-in] [btn-login] ion-button {\n      --box-shadow:none;\n      font-family: var(--ion-font-family-2);\n      max-width: 150px !important;\n      height: var(--ion-font-size-35);\n      font-weight: 300;\n      font-size: var(--ion-font-size-13); }\n      ion-content [sign-in] [btn-login] ion-button:hover {\n        opacity: 0.8; } }\n\nion-footer {\n  background: var(--ion-color-darkblack2); }\n\nion-footer [sign-footer] ul {\n    margin: var(--ion-margin-0); }\n\nion-footer [sign-footer] ul li {\n      display: inline-block;\n      margin: var(--ion-margin-0) var(--ion-margin-10); }\n\nion-footer [sign-footer] ul li a {\n        text-decoration: none;\n        font-size: var(--ion-font-size-14);\n        color: var(--ion-color-white); }\n\nion-footer [copyright-bar] p {\n    font-size: var(--ion-font-size-14);\n    margin: var(--ion-margin-0);\n    color: var(--ion-color-whitergba); }\n\nion-footer [copyright-bar] p a {\n      text-decoration: none;\n      color: var(--ion-color-white); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9hdXRoZW50aWNhdGlvbi1vdHAvYXV0aGVudGljYXRpb24tb3RwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdNLFdBQVcsRUFBQTs7QUFFZjtFQUxGO0lBT0ksa0RBQWdEO0lBQzlDLDRCQUFhLEVBQUEsRUF5TGxCOztBQWpNRDtFQVlDLGdCQUFlLEVBQUE7O0FBWmhCO0VBbUJLLGdDQUFnQztFQUNuQyxtQ0FBa0M7RUFDbEMsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUFBOztBQUNmO0lBdkJKO01BeUJhLFlBQVk7TUFDckIsK0JBQStCO01BQy9CLGtDQUFrQyxFQUFBLEVBR3BDOztBQU1EO0VBcENEO0lBd0NJLDZCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsbUNBQWtDLEVBQUEsRUFDbEM7O0FBRUg7RUE3Q0Q7SUErQ0csbUNBQW1DO0lBbUJqQyx3Q0FBd0M7SUFDeEMsMkNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5QixnQkFBZ0IsRUFBQTtJQXJFckI7TUFrRFMsa0NBQWtDO01BQ3JDLGdDQUErQixFQUFBO01BbkRyQztRQXFEVSxxQkFBb0I7UUFDdkIsK0JBQThCLEVBQUE7SUF0RHJDO01BMkRJLGNBQWM7TUFDZCxrQ0FBbUM7TUFDbkMscUNBQXNDO01BQ3RDLGdCQUFnQjtNQUNoQixlQUFlO01BQ2Ysa0NBQWtDLEVBQUEsRUFDckM7O0FBakVEO0VBd0VLLG1DQUFrQztFQUNyQyxrQ0FBa0M7RUFDakMseUJBQWE7RUFDZCx5QkFBd0I7RUFDeEIsa0JBQWlCO0VBQ2xCLGlCQUFhO0VBQ1osNkJBQTRCLEVBQUE7O0FBQzVCO0lBL0VGO01BZ0ZNLHVDQUF1QztNQUFDLGlCQUFhLEVBQUEsRUFzQnpEOztBQXRHRjtJQW1GRSxrQ0FBaUM7SUFDakMsNkJBQTRCO0lBQzVCLDhDQUE4QztJQUM5QyxzQ0FBc0MsRUFBQTs7QUF0RnhDO01Bd0ZFLFlBQVksRUFBQTs7QUF4RmQ7SUE2RkUsOENBQTZDO0lBQzlDLGtCQUFhLEVBQUE7O0FBQ1o7TUEvRkY7UUFnR00scUNBQW9DO1FBQ3hDLGlCQUFhO1FBQ2IsNENBQTJDO1FBQzFDLDZDQUE0QyxFQUFBLEVBRTdDOztBQXJHRjtFQTBHTSxnQ0FBZ0M7RUFDbkMsbUNBQWtDLEVBQUE7O0FBM0dyQztFQXVIRSw2QkFBNEI7RUFDNUIsbUNBQWtDO0VBQ2xDLGdCQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBWGhCO0lBL0dGO01BaUhVLGlDQUFnQztNQUNsQyxrQ0FBa0M7TUFDbEMscUNBQXFDO01BQ3hDLHFDQUFxQztNQUNyQyw2QkFBNkIsRUFBQSxFQU1oQzs7QUEzSEY7RUE4SEUsNkJBQTRCO0VBQzVCLG1DQUFrQztFQUNsQyxrQ0FBaUM7RUFDakMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsbUNBQW1DLEVBQUE7O0FBcElyQztJQXVJRyxrQ0FBaUMsRUFBQTs7QUFFaEM7SUF6SUo7TUEySWEsK0JBQThCLEVBQUE7TUEzSTNDO1FBOElNLDRDQUEwQyxFQUFBLEVBQzNDOztBQS9JTDtFQXFKRSw2QkFBNEI7RUFDNUIsbUNBQWtDO0VBQ2xDLGdEQUFpRCxFQUFBOztBQUMvQztJQXhKSjtNQTBKRyxxQ0FBb0M7TUFDcEMsa0NBQWlDO01BQ2pDLGdDQUErQjtNQUMvQixnREFBZ0Q7TUFDaEQsMkJBQXlCO01BQ3pCLGdCQUFlLEVBQUE7TUEvSmxCO1FBaUtPLGVBQWM7UUFDakIsK0JBQThCO1FBQzlCLGdCQUFlLEVBQUEsRUFDZjs7QUFwS0o7RUEyS2UsaUJBQWE7RUFDMUIsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLG1DQUFrQyxFQUFBOztBQUNoQztJQWpMSjtNQWtMbUIsaUJBQWE7TUFDbEIscUNBQW9DO01BQ3JDLDJCQUEwQjtNQUNoQywrQkFBK0I7TUFDdEIsZ0JBQWdCO01BQ2hCLGtDQUFrQyxFQUFBO01BdkxsRDtRQTBMUSxZQUFXLEVBQUEsRUFDWDs7QUFPUjtFQUVHLHVDQUFzQyxFQUFBOztBQUZ6QztJQU1PLDJCQUEyQixFQUFBOztBQU5sQztNQVNJLHFCQUFxQjtNQUNyQixnREFBZ0QsRUFBQTs7QUFWcEQ7UUFZUSxxQkFBb0I7UUFDcEIsa0NBQWlDO1FBQ3BDLDZCQUE0QixFQUFBOztBQWRqQztJQXNCUyxrQ0FBaUM7SUFDckMsMkJBQTBCO0lBQzFCLGlDQUFpQyxFQUFBOztBQXhCdEM7TUEwQlcscUJBQW9CO01BQzFCLDZCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24tb3RwL2F1dGhlbnRpY2F0aW9uLW90cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudFxueyAgIFtjbGVhcmZpeF1cblx0e1xuXHRcdCAgICBjbGVhcjogYm90aDtcblx0fVxuXHQgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxuXHRcdFx0e1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci1ncmV5KSFpbXBvcnRhbnQ7IFxuXHRcdFx0ICAgLS1iYWNrZ3JvdW5kOiBub25lIWltcG9ydGFudDtcblx0XHRcdCBcdFxuXHRcdFx0fVxuW25vLWJnXXtcblx0YmFja2dyb3VuZDpub25lO1xuXHRcbn1cbltzaWduLWxvZ29dXG57XG5cdFxuXHRpbWdcblx0eyAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMzUpO1xuXHRcdG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi0zNSk7XG5cdFx0bWFyZ2luLWxlZnQ6YXV0bztcblx0XHRtYXJnaW4tcmlnaHQ6YXV0bztcblx0XHQgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTFweClcblx0XHRcdHtcdFxuICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcblx0XHRcdCBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdFx0IG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMCk7XHRcdFxuXHRcdFx0fVxuICAgICAgXHRcdFx0XG5cdH1cbn1cblxuW3NpZ24taW5dXG57ICAgICAgICBcblxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcbiB7XG4gICAgICAgW3N1Yi10aXRsZV1cblx0XHRcdHtcblx0XHRcdCBjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpOyAgXG5cdFx0XHQgbGluZS1oZWlnaHQ6IDIycHg7XG5cdFx0XHQgbWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLTIwKTtcblx0XHRcdH1cbiB9XG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxuXHRcdFx0eyAgIFx0XHRcblx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMjApO1x0XG5cdFx0XHRcbiAgICBcdFx0XHRwXG5cdFx0XHRcdCB7ICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE1KTtcblx0XHRcdFx0XHQgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtncmV5KTtcblx0XHRcdFx0XHQgYVxuXHRcdFx0XHRcdCB7ICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdFx0XHRcdFx0XHQgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuXHRcdFx0XHRcdCB9XG5cdFx0XHRcdCB9XG5cdFxuaW9uLWxhYmVsXG57ICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAgdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgZm9udC1mYW1pbHk6ICB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi01KTtcbn1cdFxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwuMDgpO1xuXHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcblx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0fVxuXHRbbmV3LWlucHV0XSBcblx0eyAgIG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi0yNSk7XG5cdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcblx0XHQgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcdFxuXHRcdGJvcmRlcjoxcHggc29saWQgI2ZmZmZmZjtcblx0XHRib3JkZXItcmFkaXVzOjRweDtcblx0LS1taW4taGVpZ2h0OjM4cHg7XG5cdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkxcHgpXG5cdFx0eyAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXlibHVlKTstLW1pbi1oZWlnaHQ6NDJweDtcblx0XHR9XG5cdFx0aW9uLWljb257XG5cdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMjApO1xuXHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tZm9udC1zaXplLTEwKTtcdFx0XG5cdFx0Lml0ZW0taW5uZXIge1xuXHRcdGJvcmRlcjogbm9uZTtcblx0fVxuXHR9XG5cdGlvbi1pbnB1dFxuXHR7XHRcblx0IHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmctMTApIWltcG9ydGFudDtcblx0LS1taW4taGVpZ2h0OiAzOHB4O1x0IFxuXHQgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxuXHRcdHsgIFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpOyBcblx0XHQtLW1pbi1oZWlnaHQ6NDJweDtcdFxuXHRcdGNvbG9yOnZhciggLS1pb24tY29sb3ItZGFya2JsYWNrKSFpbXBvcnRhbnQ7XG5cdFx0IHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmctMCkhaW1wb3J0YW50O1xuXHRcdH1cblx0fVxuXHR9XG5cdFtsb2dvLWltZ11cblx0e1xuXHRcdGltZ1xuXHRcdHsgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTM1KTtcblx0XHRcdG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi0zNSk7XG5cdFx0fVxuXHR9XG5cdFtoZWFkLXBde1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTFweClcblx0XHR7ICAgICAgIFxuICAgICAgICBcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG5cdFx0XHQgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xOCk7XG5cdFx0XHQgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHRcdCBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctMTQpO1xuXHRcdFx0XHQgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHRcdFx0XG5cdFx0fVx0XHRcblx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSk7IFxuXHRcdG1hcmdpbjoyMHB4IDBweDtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHR9XG5cdFtwYXJhLXFdXG5cdHtcblx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSk7IFxuXHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0bWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTI1KTtcblx0XHRpb24tY2hlY2tib3hcblx0XHR7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6dmFyKC0taW9uLW1hcmdpbi0xNSk7XG5cdFx0fSBcblx0ICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxuXHRcdHsgXG4gICAgICAgICAgICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuXHRcdFx0ICZba2VlcC1tZV1cblx0XHRcdCB7XG5cdFx0XHRcdCAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtibGFjaykhaW1wb3J0YW50OyBcblx0XHRcdCB9XG5cdFx0fVx0XHRcblx0XHRcblx0fVxuXHRbcGFyYS1wXVxuXHR7XG5cdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHkpOyBcblx0XHRtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMzUpICB2YXIoLS1pb24tbWFyZ2luLTApIDtcblx0XHQgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTFweClcblx0XHRcdHsgXHRcblx0XHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTsgXG5cdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xNSk7IFxuXHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtncmV5KTtcblx0XHRcdG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbi0xOCkgdmFyKC0taW9uLW1hcmdpbi0wKSA7XG5cdFx0XHR0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50O1xuXHRcdFx0Zm9udC13ZWlnaHQ6NjAwO1xuXHRcdFx0c3Ryb25nXG5cdFx0XHR7ICAgY3Vyc29yOnBvaW50ZXI7XG5cdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6NjAwO1xuXHRcdFx0fVxuXHRcdFx0fVxuXHR9XG5cdFxuXG5cdFtidG4tbG9naW5dIFxuXHR7XG5cdGlvbi1idXR0b24gIHsgLS1ib3gtc2hhZG93Om5vbmU7XG5cdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRoZWlnaHQ6IHZhcigtLWlvbi1mb250LXNpemUtNDApO1xuXHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSk7XG5cdFx0ICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkxcHgpXG5cdFx0XHR7ICAgICAgICAgICAgICAgLS1ib3gtc2hhZG93Om5vbmU7XG5cdFx0XHRcdCAgICAgICAgIFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuXHRcdFx0XHRcdCAgICAgICAgbWF4LXdpZHRoOiAxNTBweCFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogdmFyKC0taW9uLWZvbnQtc2l6ZS0zNSk7XG5cdFx0XHRcdCAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRcdCAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XG5cdFx0XHRcdFx0XHRcdCY6aG92ZXJcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6MC44O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHR9XG5cdH1cbn1cbn1cbmlvbi1mb290ZXJcbntcblx0ICBiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2syKTtcblx0ICBbc2lnbi1mb290ZXJdXG5cdCAge1xuXHRcdCAgdWwgXG5cdFx0ICB7ICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHQgIGxpIFxuXHRcdFx0ICB7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0bWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLTApIHZhcigtLWlvbi1tYXJnaW4tMTApO1xuXHRcdFx0XHRhXG5cdFx0XHRcdHsgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0XHRcdFx0ICAgIGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcblx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHQgIH1cblx0XHQgIH1cbiAgIH1cbiAgIFtjb3B5cmlnaHQtYmFyXVxuICAge1xuXHQgICBwXG5cdCAgIHsgICAgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdCAgIG1hcmdpbjp2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdCAgIGNvbG9yOnZhciggLS1pb24tY29sb3Itd2hpdGVyZ2JhKTtcblx0XHQgICBhe1xuXHRcdFx0ICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpOyAgXG5cdFx0ICAgfVxuXHQgICB9XG4gICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/authentication-otp/authentication-otp.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/authentication-otp/authentication-otp.page.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationOtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationOtpPage", function() { return AuthenticationOtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuthenticationOtpPage = /** @class */ (function () {
    function AuthenticationOtpPage(toastController, userService, loadingController, router, events) {
        this.toastController = toastController;
        this.userService = userService;
        this.loadingController = loadingController;
        this.router = router;
        this.events = events;
        this.errors = ['', null, undefined];
        this.ENC_SALT = _config__WEBPACK_IMPORTED_MODULE_4__["config"].ENC_SALT;
        this.isBrowser = localStorage.getItem('isBrowser');
        this.email = localStorage.getItem('email');
    }
    AuthenticationOtpPage.prototype.ngOnInit = function () {
    };
    AuthenticationOtpPage.prototype.resendOTP = function () {
        var _this = this;
        this.presentLoading();
        this.userService.postData({ email: this.email }, 'forgotPassword').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.presentToast('A new OTP has been sent to your email.', 'success');
            }
            else {
                _this.presentToast('Technical error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Technical error,Please try after some time.', 'danger');
        });
    };
    AuthenticationOtpPage.prototype.validateOTP = function (otp) {
        var _this = this;
        if (this.errors.indexOf(otp) >= 0) {
            this.presentToast('Please enter your otp sent over your email address.', 'danger');
            return false;
        }
        this.presentLoading();
        this.userService.postData({ otp: otp, email: this.email }, 'validateOtp').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                //this.presentToast('Password reset link has been sent to your email address!','success');
                _this.router.navigate(['/reset-password']);
            }
            else {
                _this.presentToast('Invalid code. Please check your code and try again.', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Technical error,Please try after some time.', 'danger');
        });
    };
    AuthenticationOtpPage.prototype.stopLoading = function () {
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
    AuthenticationOtpPage.prototype.presentToast = function (message, color) {
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
    AuthenticationOtpPage.prototype.presentLoading = function () {
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
    AuthenticationOtpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authentication-otp',
            template: __webpack_require__(/*! ./authentication-otp.page.html */ "./src/app/authentication-otp/authentication-otp.page.html"),
            styles: [__webpack_require__(/*! ./authentication-otp.page.scss */ "./src/app/authentication-otp/authentication-otp.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], AuthenticationOtpPage);
    return AuthenticationOtpPage;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-otp-authentication-otp-module.js.map