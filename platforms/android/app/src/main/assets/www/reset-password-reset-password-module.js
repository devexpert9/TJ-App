(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password-reset-password-module"],{

/***/ "./src/app/reset-password/reset-password.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.module.ts ***!
  \*********************************************************/
/*! exports provided: ResetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password.page */ "./src/app/reset-password/reset-password.page.ts");







var routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]
    }
];
var ResetPasswordPageModule = /** @class */ (function () {
    function ResetPasswordPageModule() {
    }
    ResetPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]]
        })
    ], ResetPasswordPageModule);
    return ResetPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.page.html":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding style=\"--background:url('assets/images/bg-image.jpg')no-repeat top center / cover; \">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t <ion-col size-lg=\"6\"  size-md=\"10\"  offset-md=\"1\" offset-lg=\"3\">\n\t\t\t\t\t\t<ion-list no-bg text-center lines=\"none\">\n\t\t\t\t\t\t <div sign-logo>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<img  class=\"ion-hide-lg-up\"  src=\"assets/images/sign-logo.png\" width=\"170px\"/>\n\t\t\t\t\t\t\t<img  class=\"ion-hide-md-down\" src=\"assets/images/sign-logo-dark.png\" width=\"170px\"/>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div sign-in>\t\n\t\t\t\t\t\t\t\t <h4 text-left head-p>Create new password</h4> \n\t\t\t\t\t\t\t\t  <p sub-title text-left>We\\'ll ask for this password whenever you sign in.</p>\n\t\t\t\t\t\t\t\t<div textinput>\n                                   <ion-label  class=\"ion-hide-md-down\" text-left>New password</ion-label>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<ion-item new-input>\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"mail\" class=\"ion-hide-lg-up\"></ion-icon><ion-input  type=\"password\" placeholder=\"New password\" [(ngModel)]=\"npassword\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div textinput>\n                                   <ion-label  class=\"ion-hide-md-down\" text-left>Password again</ion-label>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<ion-item new-input>\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"mail\" class=\"ion-hide-lg-up\"></ion-icon><ion-input  type=\"password\" placeholder=\"Confirm password\" [(ngModel)]=\"cpassword\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\t\n\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t <div btn-login>\n\t\t\t\t\t\t\t\t\t \t<ion-button  expand=\"full\" color=\"darkred\" (click)=\"updatePassword(npassword, cpassword)\">Save changes & sign in</ion-button>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<!-- <div text-center para-p><strong routerLink=\"/login\">Back To Login</strong></div> -->\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t</ion-list>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n</ion-content>\n<!-- <ion-footer class=\"footer  ion-hide-sm-down ion-padding-top  ion-padding-bottom\">\n    <div sign-footer text-center>\n            <ul list-unstyled>\n                \n                <li><a href=\"#\" >Terms &amp; Conditions</a></li>\n                <li><a href=\"#\">Privacy Policy</a></li>\n            </ul>\n        </div>\n\t\t<div text-center copyright-bar class=\"ion-padding-top\">\n           \n                    <p> Copyright © 2019 <a href=\"#\"> Siniyetu </a>. All Rights Reserved. </p>\n                 \n        </div>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/reset-password/reset-password.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content [clearfix] {\n  clear: both; }\n\n@media only screen and (min-width: 991px) {\n  ion-content {\n    background-color: var(--ion-color-grey) !important;\n    --background: none!important; } }\n\nion-content [no-bg] {\n  background: none; }\n\nion-content [sign-logo] img {\n  margin-top: var(--ion-margin-35);\n  margin-bottom: var(--ion-margin-35);\n  margin-left: auto;\n  margin-right: auto; }\n\n@media only screen and (min-width: 991px) {\n    ion-content [sign-logo] img {\n      width: 202px;\n      margin-top: var(--ion-margin-0);\n      margin-bottom: var(--ion-margin-0); } }\n\n@media only screen and (max-width: 991px) {\n  ion-content [sign-in] [sub-title] {\n    color: var(--ion-color-white);\n    line-height: 22px;\n    margin-bottom: var(--ion-margin-20); } }\n\n@media only screen and (min-width: 991px) {\n  ion-content [sign-in] {\n    margin-bottom: var(--ion-margin-20);\n    background-color: var(--ion-color-white);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n    padding: var(--ion-padding-20);\n    overflow: hidden; }\n    ion-content [sign-in] p {\n      font-size: var(--ion-font-size-15);\n      color: var(--ion-color-darkgrey); }\n      ion-content [sign-in] p a {\n        text-decoration: none;\n        color: var(--ion-color-darkred); }\n    ion-content [sign-in] ion-label {\n      display: block;\n      font-size: var(--ion-font-size-14);\n      font-family: var(--ion-font-family-2);\n      font-weight: 400;\n      max-width: 100%;\n      margin-bottom: var(--ion-margin-5); } }\n\nion-content [sign-in] [new-input] {\n  margin-bottom: var(--ion-margin-25);\n  font-size: var(--ion-font-size-14);\n  --background: transparent;\n  border: 1px solid #ffffff;\n  border-radius: 4px;\n  --min-height:38px;\n  color: var(--ion-color-white); }\n\n@media only screen and (min-width: 991px) {\n    ion-content [sign-in] [new-input] {\n      border-color: var(--ion-color-greyblue);\n      --min-height:42px; } }\n\nion-content [sign-in] [new-input] ion-icon {\n    font-size: var(--ion-font-size-20);\n    color: var(--ion-color-white);\n    border-right: 1px solid var(--ion-color-white);\n    padding-right: var(--ion-font-size-10); }\n\nion-content [sign-in] [new-input] ion-icon .item-inner {\n      border: none; }\n\nion-content [sign-in] [new-input] ion-input {\n    padding-left: var(--ion-padding-10) !important;\n    --min-height: 38px; }\n\n@media only screen and (min-width: 991px) {\n      ion-content [sign-in] [new-input] ion-input {\n        font-family: var(--ion-font-family-2);\n        --min-height:42px;\n        color: var(--ion-color-darkblack) !important;\n        padding-left: var(--ion-padding-0) !important; } }\n\nion-content [sign-in] [logo-img] img {\n  margin-top: var(--ion-margin-35);\n  margin-bottom: var(--ion-margin-35); }\n\nion-content [sign-in] [head-p] {\n  color: var(--ion-color-white);\n  font-family: var(--ion-font-family);\n  margin: 20px 0px;\n  font-weight: 700; }\n\n@media only screen and (min-width: 991px) {\n    ion-content [sign-in] [head-p] {\n      color: var(--ion-color-darkblack);\n      font-size: var(--ion-font-size-18);\n      font-family: var(--ion-font-family-2);\n      padding-bottom: var(--ion-padding-14);\n      border-bottom: 1px solid #ddd; } }\n\nion-content [sign-in] [para-q] {\n  color: var(--ion-color-white);\n  font-family: var(--ion-font-family);\n  font-size: var(--ion-font-size-14);\n  display: flex;\n  align-items: center;\n  margin-top: var(--ion-margin-0);\n  margin-bottom: var(--ion-margin-25); }\n\nion-content [sign-in] [para-q] ion-checkbox {\n    margin-right: var(--ion-margin-15); }\n\n@media only screen and (min-width: 991px) {\n    ion-content [sign-in] [para-q] {\n      color: var(--ion-color-darkred); }\n      ion-content [sign-in] [para-q][keep-me] {\n        color: var(--ion-color-darkblack) !important; } }\n\nion-content [sign-in] [para-p] {\n  color: var(--ion-color-white);\n  font-family: var(--ion-font-family);\n  margin: var(--ion-margin-35) var(--ion-margin-0); }\n\n@media only screen and (min-width: 991px) {\n    ion-content [sign-in] [para-p] {\n      font-family: var(--ion-font-family-2);\n      font-size: var(--ion-font-size-15);\n      color: var(--ion-color-darkgrey);\n      margin: var(--ion-margin-18) var(--ion-margin-0);\n      text-align: left !important;\n      font-weight: 600; }\n      ion-content [sign-in] [para-p] strong {\n        cursor: pointer;\n        color: var(--ion-color-darkred);\n        font-weight: 600; } }\n\nion-content [sign-in] [btn-login] ion-button {\n  --box-shadow:none;\n  color: var(--ion-color-white);\n  width: 100%;\n  font-weight: 600;\n  height: var(--ion-font-size-40);\n  font-family: var(--ion-font-family); }\n\n@media only screen and (min-width: 991px) {\n    ion-content [sign-in] [btn-login] ion-button {\n      --box-shadow:none;\n      font-family: var(--ion-font-family-2);\n      max-width: 202px !important;\n      height: var(--ion-font-size-35);\n      font-weight: 300;\n      font-size: var(--ion-font-size-13); }\n      ion-content [sign-in] [btn-login] ion-button:hover {\n        opacity: 0.8; } }\n\nion-footer {\n  background: var(--ion-color-darkblack2); }\n\nion-footer [sign-footer] ul {\n    margin: var(--ion-margin-0); }\n\nion-footer [sign-footer] ul li {\n      display: inline-block;\n      margin: var(--ion-margin-0) var(--ion-margin-10); }\n\nion-footer [sign-footer] ul li a {\n        text-decoration: none;\n        font-size: var(--ion-font-size-14);\n        color: var(--ion-color-white); }\n\nion-footer [copyright-bar] p {\n    font-size: var(--ion-font-size-14);\n    margin: var(--ion-margin-0);\n    color: var(--ion-color-whitergba); }\n\nion-footer [copyright-bar] p a {\n      text-decoration: none;\n      color: var(--ion-color-white); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSxXQUFXLEVBQUE7O0FBRWY7RUFMRjtJQU9JLGtEQUFnRDtJQUM5Qyw0QkFBYSxFQUFBLEVBeUxsQjs7QUFqTUQ7RUFZQyxnQkFBZSxFQUFBOztBQVpoQjtFQW1CSyxnQ0FBZ0M7RUFDbkMsbUNBQWtDO0VBQ2xDLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFBQTs7QUFDZjtJQXZCSjtNQXlCYSxZQUFZO01BQ3JCLCtCQUErQjtNQUMvQixrQ0FBa0MsRUFBQSxFQUdwQzs7QUFNRDtFQXBDRDtJQXdDSSw2QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLG1DQUFrQyxFQUFBLEVBQ2xDOztBQUVIO0VBN0NEO0lBK0NHLG1DQUFtQztJQW1CakMsd0NBQXdDO0lBQ3hDLDJDQUF1QztJQUN2Qyw4QkFBOEI7SUFDOUIsZ0JBQWdCLEVBQUE7SUFyRXJCO01Ba0RTLGtDQUFrQztNQUNyQyxnQ0FBK0IsRUFBQTtNQW5EckM7UUFxRFUscUJBQW9CO1FBQ3ZCLCtCQUE4QixFQUFBO0lBdERyQztNQTJESSxjQUFjO01BQ2Qsa0NBQW1DO01BQ25DLHFDQUFzQztNQUN0QyxnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGtDQUFrQyxFQUFBLEVBQ3JDOztBQWpFRDtFQXdFSyxtQ0FBa0M7RUFDckMsa0NBQWtDO0VBQ2pDLHlCQUFhO0VBQ2QseUJBQXdCO0VBQ3hCLGtCQUFpQjtFQUNsQixpQkFBYTtFQUNaLDZCQUE0QixFQUFBOztBQUM1QjtJQS9FRjtNQWdGTSx1Q0FBdUM7TUFBQyxpQkFBYSxFQUFBLEVBc0J6RDs7QUF0R0Y7SUFtRkUsa0NBQWlDO0lBQ2pDLDZCQUE0QjtJQUM1Qiw4Q0FBOEM7SUFDOUMsc0NBQXNDLEVBQUE7O0FBdEZ4QztNQXdGRSxZQUFZLEVBQUE7O0FBeEZkO0lBNkZFLDhDQUE2QztJQUM5QyxrQkFBYSxFQUFBOztBQUNaO01BL0ZGO1FBZ0dNLHFDQUFvQztRQUN4QyxpQkFBYTtRQUNiLDRDQUEyQztRQUMxQyw2Q0FBNEMsRUFBQSxFQUU3Qzs7QUFyR0Y7RUEwR00sZ0NBQWdDO0VBQ25DLG1DQUFrQyxFQUFBOztBQTNHckM7RUF1SEUsNkJBQTRCO0VBQzVCLG1DQUFrQztFQUNsQyxnQkFBZTtFQUNmLGdCQUFnQixFQUFBOztBQVhoQjtJQS9HRjtNQWlIVSxpQ0FBZ0M7TUFDbEMsa0NBQWtDO01BQ2xDLHFDQUFxQztNQUN4QyxxQ0FBcUM7TUFDckMsNkJBQTZCLEVBQUEsRUFNaEM7O0FBM0hGO0VBOEhFLDZCQUE0QjtFQUM1QixtQ0FBa0M7RUFDbEMsa0NBQWlDO0VBQ2pDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLG1DQUFtQyxFQUFBOztBQXBJckM7SUF1SUcsa0NBQWlDLEVBQUE7O0FBRWhDO0lBeklKO01BMklhLCtCQUE4QixFQUFBO01BM0kzQztRQThJTSw0Q0FBMEMsRUFBQSxFQUMzQzs7QUEvSUw7RUFxSkUsNkJBQTRCO0VBQzVCLG1DQUFrQztFQUNsQyxnREFBaUQsRUFBQTs7QUFDL0M7SUF4Sko7TUEwSkcscUNBQW9DO01BQ3BDLGtDQUFpQztNQUNqQyxnQ0FBK0I7TUFDL0IsZ0RBQWdEO01BQ2hELDJCQUF5QjtNQUN6QixnQkFBZSxFQUFBO01BL0psQjtRQWlLTyxlQUFjO1FBQ2pCLCtCQUE4QjtRQUM5QixnQkFBZSxFQUFBLEVBQ2Y7O0FBcEtKO0VBMktlLGlCQUFhO0VBQzFCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixtQ0FBa0MsRUFBQTs7QUFDaEM7SUFqTEo7TUFrTG1CLGlCQUFhO01BQ2xCLHFDQUFvQztNQUNyQywyQkFBMEI7TUFDaEMsK0JBQStCO01BQ3RCLGdCQUFnQjtNQUNoQixrQ0FBa0MsRUFBQTtNQXZMbEQ7UUEwTFEsWUFBVyxFQUFBLEVBQ1g7O0FBT1I7RUFFRyx1Q0FBc0MsRUFBQTs7QUFGekM7SUFNTywyQkFBMkIsRUFBQTs7QUFObEM7TUFTSSxxQkFBcUI7TUFDckIsZ0RBQWdELEVBQUE7O0FBVnBEO1FBWVEscUJBQW9CO1FBQ3BCLGtDQUFpQztRQUNwQyw2QkFBNEIsRUFBQTs7QUFkakM7SUFzQlMsa0NBQWlDO0lBQ3JDLDJCQUEwQjtJQUMxQixpQ0FBaUMsRUFBQTs7QUF4QnRDO01BMEJXLHFCQUFvQjtNQUMxQiw2QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50XG57ICAgW2NsZWFyZml4XVxuXHR7XG5cdFx0ICAgIGNsZWFyOiBib3RoO1xuXHR9XG5cdCBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkxcHgpXG5cdFx0XHR7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLWdyZXkpIWltcG9ydGFudDsgXG5cdFx0XHQgICAtLWJhY2tncm91bmQ6IG5vbmUhaW1wb3J0YW50O1xuXHRcdFx0IFx0XG5cdFx0XHR9XG5bbm8tYmdde1xuXHRiYWNrZ3JvdW5kOm5vbmU7XG5cdFxufVxuW3NpZ24tbG9nb11cbntcblx0XG5cdGltZ1xuXHR7ICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0zNSk7XG5cdFx0bWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLTM1KTtcblx0XHRtYXJnaW4tbGVmdDphdXRvO1xuXHRcdG1hcmdpbi1yaWdodDphdXRvO1xuXHRcdCAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxuXHRcdFx0e1x0XG4gICAgICAgICAgICAgd2lkdGg6IDIwMnB4O1xuXHRcdFx0IG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0XHQgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTtcdFx0XG5cdFx0XHR9XG4gICAgICBcdFx0XHRcblx0fVxufVxuXG5bc2lnbi1pbl1cbnsgICAgICAgIFxuXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxuIHtcbiAgICAgICBbc3ViLXRpdGxlXVxuXHRcdFx0e1xuXHRcdFx0IGNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7ICBcblx0XHRcdCBsaW5lLWhlaWdodDogMjJweDtcblx0XHRcdCBtYXJnaW4tYm90dG9tOnZhcigtLWlvbi1tYXJnaW4tMjApO1xuXHRcdFx0fVxuIH1cbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkxcHgpXG5cdFx0XHR7ICAgXHRcdFxuXHRcdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0yMCk7XHRcblx0XHRcdFxuICAgIFx0XHRcdHBcblx0XHRcdFx0IHsgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTUpO1xuXHRcdFx0XHRcdCBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya2dyZXkpO1xuXHRcdFx0XHRcdCBhXG5cdFx0XHRcdFx0IHsgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0XHRcdFx0XHRcdCBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG5cdFx0XHRcdFx0IH1cblx0XHRcdFx0IH1cblx0XG5pb24tbGFiZWxcbnsgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6ICB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICBmb250LWZhbWlseTogIHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTUpO1xufVx0XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLC4wOCk7XG5cdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMjApO1xuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHR9XG5cdFtuZXctaW5wdXRdIFxuXHR7ICAgbWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLTI1KTtcblx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdCAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1x0XG5cdFx0Ym9yZGVyOjFweCBzb2xpZCAjZmZmZmZmO1xuXHRcdGJvcmRlci1yYWRpdXM6NHB4O1xuXHQtLW1pbi1oZWlnaHQ6MzhweDtcblx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTFweClcblx0XHR7ICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JleWJsdWUpOy0tbWluLWhlaWdodDo0MnB4O1xuXHRcdH1cblx0XHRpb24taWNvbntcblx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0yMCk7XG5cdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1mb250LXNpemUtMTApO1x0XHRcblx0XHQuaXRlbS1pbm5lciB7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHR9XG5cdH1cblx0aW9uLWlucHV0XG5cdHtcdFxuXHQgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZy0xMCkhaW1wb3J0YW50O1xuXHQtLW1pbi1oZWlnaHQ6IDM4cHg7XHQgXG5cdCBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkxcHgpXG5cdFx0eyAgXHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7IFxuXHRcdC0tbWluLWhlaWdodDo0MnB4O1x0XG5cdFx0Y29sb3I6dmFyKCAtLWlvbi1jb2xvci1kYXJrYmxhY2spIWltcG9ydGFudDtcblx0XHQgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZy0wKSFpbXBvcnRhbnQ7XG5cdFx0fVxuXHR9XG5cdH1cblx0W2xvZ28taW1nXVxuXHR7XG5cdFx0aW1nXG5cdFx0eyAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMzUpO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLTM1KTtcblx0XHR9XG5cdH1cblx0W2hlYWQtcF17XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxuXHRcdHsgICAgICAgXG4gICAgICAgIFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcblx0XHRcdCAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE4KTtcblx0XHRcdCAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcblx0XHRcdFx0IHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy0xNCk7XG5cdFx0XHRcdCBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcdFx0XHRcblx0XHR9XHRcdFxuXHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5KTsgXG5cdFx0bWFyZ2luOjIwcHggMHB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdH1cblx0W3BhcmEtcV1cblx0e1xuXHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5KTsgXG5cdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMjUpO1xuXHRcdGlvbi1jaGVja2JveFxuXHRcdHtcblx0XHRcdG1hcmdpbi1yaWdodDp2YXIoLS1pb24tbWFyZ2luLTE1KTtcblx0XHR9IFxuXHQgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkxcHgpXG5cdFx0eyBcbiAgICAgICAgICAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG5cdFx0XHQgJltrZWVwLW1lXVxuXHRcdFx0IHtcblx0XHRcdFx0ICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKSFpbXBvcnRhbnQ7IFxuXHRcdFx0IH1cblx0XHR9XHRcdFxuXHRcdFxuXHR9XG5cdFtwYXJhLXBdXG5cdHtcblx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSk7IFxuXHRcdG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbi0zNSkgIHZhcigtLWlvbi1tYXJnaW4tMCkgO1xuXHRcdCAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxuXHRcdFx0eyBcdFxuXHRcdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpOyBcblx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTE1KTsgXG5cdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya2dyZXkpO1xuXHRcdFx0bWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLTE4KSB2YXIoLS1pb24tbWFyZ2luLTApIDtcblx0XHRcdHRleHQtYWxpZ246bGVmdCFpbXBvcnRhbnQ7XG5cdFx0XHRmb250LXdlaWdodDo2MDA7XG5cdFx0XHRzdHJvbmdcblx0XHRcdHsgICBjdXJzb3I6cG9pbnRlcjtcblx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuXHRcdFx0XHRmb250LXdlaWdodDo2MDA7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdH1cblx0XG5cblx0W2J0bi1sb2dpbl0gXG5cdHtcblx0aW9uLWJ1dHRvbiAgeyAtLWJveC1zaGFkb3c6bm9uZTtcblx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGhlaWdodDogdmFyKC0taW9uLWZvbnQtc2l6ZS00MCk7XG5cdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcblx0XHQgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTFweClcblx0XHRcdHsgICAgICAgICAgICAgICAtLWJveC1zaGFkb3c6bm9uZTtcblx0XHRcdFx0ICAgICAgICAgXHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5cdFx0XHRcdFx0ICAgICAgICBtYXgtd2lkdGg6IDIwMnB4IWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiB2YXIoLS1pb24tZm9udC1zaXplLTM1KTtcblx0XHRcdFx0ICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcblx0XHRcdFx0ICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcblx0XHRcdFx0XHRcdFx0Jjpob3ZlclxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTowLjg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9XG5cdH1cblx0fVxufVxufVxuaW9uLWZvb3Rlclxue1xuXHQgIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWRhcmtibGFjazIpO1xuXHQgIFtzaWduLWZvb3Rlcl1cblx0ICB7XG5cdFx0ICB1bCBcblx0XHQgIHsgIG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHRcdCAgbGkgXG5cdFx0XHQgIHtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCkgdmFyKC0taW9uLW1hcmdpbi0xMCk7XG5cdFx0XHRcdGFcblx0XHRcdFx0eyAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHRcdFx0XHQgICAgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuXHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdCAgfVxuXHRcdCAgfVxuICAgfVxuICAgW2NvcHlyaWdodC1iYXJdXG4gICB7XG5cdCAgIHBcblx0ICAgeyAgICBmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG5cdFx0ICAgbWFyZ2luOnZhcigtLWlvbi1tYXJnaW4tMCk7XG5cdFx0ICAgY29sb3I6dmFyKCAtLWlvbi1jb2xvci13aGl0ZXJnYmEpO1xuXHRcdCAgIGF7XG5cdFx0XHQgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7ICBcblx0XHQgICB9XG5cdCAgIH1cbiAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/reset-password/reset-password.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.ts ***!
  \*******************************************************/
/*! exports provided: ResetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function() { return ResetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(toastController, userService, loadingController, router, events) {
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
    ResetPasswordPage.prototype.ngOnInit = function () {
    };
    ResetPasswordPage.prototype.ionViewDidEnter = function () {
        if (this.loading != undefined) {
            this.stopLoading();
        }
    };
    ResetPasswordPage.prototype.updatePassword = function (npwd, cpwd) {
        var _this = this;
        if (this.errors.indexOf(npwd) >= 0) {
            this.presentToast('Please enter password.', 'danger');
            return false;
        }
        else if (npwd != cpwd) {
            this.presentToast('Password not matched.', 'danger');
            return false;
        }
        this.presentLoading();
        this.userService.postData({ password: npwd, email: this.email }, 'updatePassword').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.presentToast('Login successfully!', 'success');
                var userId = _this.userService.encryptData(result.data.id, _this.ENC_SALT);
                localStorage.setItem('sin_auth_token', userId);
                localStorage.setItem('sin_auth_user_name', result.data.name + ' ' + result.data.last_name);
                localStorage.setItem('sin_auth_user_image', result.data.profile_picture);
                _this.events.publish('user_logged_in:true', result.data);
                _this.router.navigate(['/home']);
            }
            else if (result.status == 2) {
                _this.presentToast('Your account is not active!', 'danger');
            }
            else {
                _this.presentToast('We\'re sorry. We weren\'t able to identify you given the information provided.', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Technical error,Please try after some time.', 'danger');
        });
    };
    ResetPasswordPage.prototype.stopLoading = function () {
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
    ResetPasswordPage.prototype.presentToast = function (message, color) {
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
    ResetPasswordPage.prototype.presentLoading = function () {
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
    ResetPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.page.html */ "./src/app/reset-password/reset-password.page.html"),
            styles: [__webpack_require__(/*! ./reset-password.page.scss */ "./src/app/reset-password/reset-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=reset-password-reset-password-module.js.map