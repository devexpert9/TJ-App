(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-seller-register-seller-module"],{

/***/ "./src/app/register-seller/register-seller.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/register-seller/register-seller.module.ts ***!
  \***********************************************************/
/*! exports provided: RegisterSellerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterSellerPageModule", function() { return RegisterSellerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_seller_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-seller.page */ "./src/app/register-seller/register-seller.page.ts");







var routes = [
    {
        path: '',
        component: _register_seller_page__WEBPACK_IMPORTED_MODULE_6__["RegisterSellerPage"]
    }
];
var RegisterSellerPageModule = /** @class */ (function () {
    function RegisterSellerPageModule() {
    }
    RegisterSellerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_seller_page__WEBPACK_IMPORTED_MODULE_6__["RegisterSellerPage"]]
        })
    ], RegisterSellerPageModule);
    return RegisterSellerPageModule;
}());



/***/ }),

/***/ "./src/app/register-seller/register-seller.page.html":
/*!***********************************************************!*\
  !*** ./src/app/register-seller/register-seller.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n<div class=\"user-login-main\">\t\n\t\t<div class=\"container-fluid px-0\">\n\t\t\t<div class=\"row no-gutters min-vh-100\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"user-login-inner\" style=\"width: 83%;padding: 25px 50px;margin: 0 auto;\">\n\t\t\t\t\t\t<div class=\"user-login-logo mb-4\"> \n\t\t\t\t\t\t\t<a (click)='goToHome()'>\n\t\t\t\t\t\t\t    <img src=\"assets/img/user-logo.png\" class=\"logo\" alt=\"logo\">\n\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div _ngcontent-ctx-c0=\"\" class=\"user-login-logo mb-4\"><span style=\"\n\t\t\t\t\t\t    font-size: 25px;\n\t\t\t\t\t\t    width: 100%;\n\t\t\t\t\t\t    border-bottom: 1px solid #73bce5;\n\t\t\t\t\t\t    float: left;\n\t\t\t\t\t\t    margin: 0 0 20px 0;\">\n\t\t\t\t\t\t\tBecome A Seller\n\t\t\t\t\t\t</span></div>\n\n\t\t\t\t\t\t<div class=\"form-border\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"clear: both;padding: 5px 11px;background: #d0e5f1;font-size: 18px;margin: 0 0 6px 0;\">\n\t\t\t\t\t\t\t\t<span>Business Details</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div form-group class=\"col-md-6\" style=\"float:left;\">\t\n\t\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"shop_name\" type=\"text\" placeholder=\"Shop Name\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div form-group class=\"col-md-6\" style=\"float:left;\">\t\n\t\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t<ion-input type=\"number\" [(ngModel)]=\"phone\"  placeholder=\"Store Number\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\t\n\n\t\t\t\t\t\t\t\t<div form-group class=\"col-md-6\" style=\"float:left;\">\t\n\t\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"location\" type=\"text\" placeholder=\"Location/Address\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div form-group class=\"col-md-6\" style=\"float:left;\">\t\n\t\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"country\" type=\"text\" placeholder=\"Country\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div form-group class=\"col-md-6\" style=\"float:left;\">\t\n\t\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"state\" type=\"text\" placeholder=\"State\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div form-group class=\"col-md-6\" style=\"float:left;\">\t\n\t\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"city\" type=\"text\" placeholder=\"City\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div form-group class=\"col-md-6\" style=\"float:left;\">\t\n\t\t\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"postal\" type=\"number\" placeholder=\"Postal\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"clear:both\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t<a class=\"btn btn-primary btn-block text-uppercase my-4\" href=\"javascript:void(0)\" (click)=\"register(shop_name,phone,location,country,state,city,postal)\" style=\"width: 30%;margin: 0 auto;\">\n\t\t\t\t\t\t\t\t\tRegister As Seller\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p class=\"register-here-btn\">Go back to <a routerLink=\"/blog\" href=\"javascript:void(0)\"> Website</a></p>\n\t\t\t\t\t\t</div>\t\t\t  \t\t\t  \n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register-seller/register-seller.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/register-seller/register-seller.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .user-login-main [form-group] {\n  margin-bottom: 20px; }\n  ion-content .user-login-main [form-group] ion-item {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    border-radius: 0px;\n    --padding-start: 0px;\n    --background:transparent;\n    --inner-padding-end: 0px;\n    --min-height: 52px;\n    font-size: 14px;\n    --padding-bottom: 0px;\n    --padding-top: 0px; }\n  ion-content .user-login-main [form-group] ion-item ion-input {\n      color: #000;\n      --placeholder-opacity: 0.7; }\n  ion-content .user-login-main .checkbox .form-check {\n  padding-left: 0px; }\n  ion-content .user-login-main .checkbox .form-check ion-item {\n    --padding-start: 0px;\n    --inner-padding-end: 0px;\n    --min-height: 24px;\n    --background:transparent; }\n  ion-content .user-login-main .checkbox .form-check ion-item ion-label {\n      margin: 0px;\n      font-size: 14px;\n      color: #84757d;\n      white-space: initial;\n      font-weight: 500; }\n  ion-content .user-login-main .checkbox .form-check ion-item ion-label a {\n        color: var(--ion-color-primary); }\n  ion-content .user-login-main .checkbox .form-check ion-item ion-label a:hover {\n          color: var(--ion-color-secondary); }\n  ion-content .user-login-main .checkbox .form-check ion-item ion-checkbox {\n      margin: 0px 6px 0px 0px;\n      --size: 13px;\n      --border-width: 1px; }\n  .select-placeholder {\n  color: currentColor !important;\n  opacity: 0.66 !important; }\n  @media (max-width: 767px) {\n  ion-content .user-login-main .user-login-left {\n    position: relative;\n    z-index: 1;\n    box-shadow: none; }\n    ion-content .user-login-main .user-login-left:before {\n      position: absolute;\n      content: \"\";\n      width: 100%;\n      height: 100%;\n      background: url('login.jpg') no-repeat center center/cover;\n      opacity: 0.05;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: -1; }\n    ion-content .user-login-main .user-login-left .user-login-inner {\n      padding: 30px; }\n  ion-content .user-login-main [mobile-none] {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvcmVnaXN0ZXItc2VsbGVyL3JlZ2lzdGVyLXNlbGxlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFRRyxtQkFBbUIsRUFBQTtFQVJ0QjtJQVdJLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsb0JBQWdCO0lBQ2hCLHdCQUFhO0lBQ2Isd0JBQW9CO0lBQ3BCLGtCQUFhO0lBQ2IsZUFBZTtJQUNmLHFCQUFpQjtJQUNqQixrQkFBYyxFQUFBO0VBbkJsQjtNQXNCUSxXQUFVO01BQ1YsMEJBQXNCLEVBQUE7RUF2QjlCO0VBK0JPLGlCQUFnQixFQUFBO0VBL0J2QjtJQWtDSyxvQkFBZ0I7SUFDaEIsd0JBQW9CO0lBQ2pCLGtCQUFhO0lBQ2hCLHdCQUFhLEVBQUE7RUFyQ2xCO01Bd0NNLFdBQVc7TUFDWCxlQUFlO01BQ2YsY0FBYztNQUNkLG9CQUFvQjtNQUNwQixnQkFBZ0IsRUFBQTtFQTVDdEI7UUErQ1UsK0JBQStCLEVBQUE7RUEvQ3pDO1VBa0RXLGlDQUFpQyxFQUFBO0VBbEQ1QztNQXdETSx1QkFBdUI7TUFDdkIsWUFBTztNQUNQLG1CQUFlLEVBQUE7RUFRckI7RUFDSyw4QkFBNkI7RUFDN0Isd0JBQXVCLEVBQUE7RUFHNUI7RUFDSTtJQU1BLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWUsRUFBQTtJQVJmO01BV0Msa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxXQUFXO01BQ1gsWUFBWTtNQUNaLDBEQUEyRTtNQUMzRSxhQUFhO01BQ2IsTUFBTTtNQUNOLE9BQU87TUFDUCxRQUFRO01BQ1IsU0FBUztNQUNULFdBQVUsRUFBQTtJQXJCWDtNQXlCQyxhQUFZLEVBQUE7RUF6QmI7SUE4QkcsYUFBWSxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci1zZWxsZXIvcmVnaXN0ZXItc2VsbGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50XG57XG5cdFxuXG4gICAgLnVzZXItbG9naW4tbWFpblxuXHR7XG5cdFx0W2Zvcm0tZ3JvdXBdXG5cdFx0eyAgICBcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0XHRpb24taXRlbVxuXHRcdFx0e1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMHB4O1xuXHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcblx0XHRcdFx0LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuXHRcdFx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cdFx0XHRcdC0tbWluLWhlaWdodDogNTJweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHQtLXBhZGRpbmctYm90dG9tOiAwcHg7XG5cdFx0XHRcdC0tcGFkZGluZy10b3A6IDBweDtcdFxuXHRcdFx0XHRpb24taW5wdXRcblx0XHRcdFx0e1xuXHRcdFx0XHQgICAgY29sb3I6IzAwMDtcblx0XHRcdFx0ICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC43O1x0XG5cdFx0XHRcdH1cblx0XHRcdH1cdFx0XHRcblx0XHR9XG4gICAgICAgIC5jaGVja2JveFxuICAgICAgICB7XG5cdFx0ICAgIC5mb3JtLWNoZWNrXG5cdFx0XHR7XG5cdFx0XHQgICAgcGFkZGluZy1sZWZ0OjBweDtcblx0XHRcdCAgICBpb24taXRlbVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG5cdFx0XHRcdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHRcdFx0XHQgICAgLS1taW4taGVpZ2h0OiAyNHB4O1x0XG5cdFx0XHRcdFx0LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWxcbiAgICAgICAgICAgICAgICAgICAge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzg0NzU3ZDtcblx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBpbml0aWFsO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdGFcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0XHRcdFx0XHQmOmhvdmVyXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cdFx0XG4gICAgICAgICAgICAgICAgICAgIGlvbi1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDBweCA2cHggMHB4IDBweDtcblx0XHRcdFx0XHRcdC0tc2l6ZTogMTNweDtcdFxuXHRcdFx0XHRcdFx0LS1ib3JkZXItd2lkdGg6IDFweDtcdFxuXHRcdFx0XHRcdH1cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XHRcdFxuXHR9XG59XG5cbi5zZWxlY3QtcGxhY2Vob2xkZXIge1xuXHQgICAgY29sb3I6IGN1cnJlbnRDb2xvciFpbXBvcnRhbnQ7XG5cdCAgICBvcGFjaXR5OiAwLjY2IWltcG9ydGFudDtcblx0fVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBpb24tY29udGVudFxuXHR7XG5cdCAgICAudXNlci1sb2dpbi1tYWluXG5cdFx0e1xuXHRcdCAgICAudXNlci1sb2dpbi1sZWZ0XG5cdFx0XHR7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0ei1pbmRleDogMTtcblx0XHRcdFx0Ym94LXNoYWRvdzpub25lO1xuXHRcdFx0XHQmOmJlZm9yZSBcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvbG9naW4uanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XG5cdFx0XHRcdFx0b3BhY2l0eTogMC4wNTtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0ei1pbmRleDotMTtcblx0XHRcdFx0fVx0XHRcdFx0XG5cdFx0XHRcdC51c2VyLWxvZ2luLWlubmVyXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwYWRkaW5nOjMwcHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQgICAgW21vYmlsZS1ub25lXVxuXHRcdFx0e1xuXHRcdFx0ICAgIGRpc3BsYXk6bm9uZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/register-seller/register-seller.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/register-seller/register-seller.page.ts ***!
  \*********************************************************/
/*! exports provided: RegisterSellerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterSellerPage", function() { return RegisterSellerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _services_user_globalFooService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user/globalFooService.service */ "./src/app/services/user/globalFooService.service.ts");







var RegisterSellerPage = /** @class */ (function () {
    function RegisterSellerPage(globalFooService, toastController, userService, loadingController, router, events) {
        this.globalFooService = globalFooService;
        this.toastController = toastController;
        this.userService = userService;
        this.loadingController = loadingController;
        this.router = router;
        this.events = events;
        this.errors = ['', null, undefined];
        this.userEmail = localStorage.getItem('sin_auth_user_email');
        this.ENC_SALT = _config__WEBPACK_IMPORTED_MODULE_5__["config"].ENC_SALT;
    }
    RegisterSellerPage.prototype.ngOnInit = function () {
        this.userEmail = localStorage.getItem('sin_auth_user_email');
    };
    RegisterSellerPage.prototype.goToHome = function () {
        this.router.navigate(['/blogic']);
    };
    RegisterSellerPage.prototype.register = function (shop_name, phone, location, country, state, city, postal) {
        var _this = this;
        if (this.errors.indexOf(shop_name) >= 0) {
            this.presentToast('Please enter shop name.', 'danger');
            return false;
        }
        if (this.errors.indexOf(phone) >= 0) {
            this.presentToast('Please enter your store number.', 'danger');
            return false;
        }
        if (this.errors.indexOf(location) >= 0) {
            this.presentToast('Please enter location.', 'danger');
            return false;
        }
        if (this.errors.indexOf(country) >= 0) {
            this.presentToast('Please enter country.', 'danger');
            return false;
        }
        if (this.errors.indexOf(state) >= 0) {
            this.presentToast('Please enter state.', 'danger');
            return false;
        }
        if (this.errors.indexOf(city) >= 0) {
            this.presentToast('Please enter city.', 'danger');
            return false;
        }
        if (this.errors.indexOf(postal) >= 0) {
            this.presentToast('Please enter postal.', 'danger');
            return false;
        }
        this.presentLoading();
        var dict = {
            name: "",
            email: this.userEmail,
            phone: phone,
            password: "",
            shop_name: shop_name,
            location: location,
            country: country,
            state: state,
            city: city,
            postal: postal
        };
        this.userService.postData(dict, 'registerSeller').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.globalFooService.publishSomeData({
                    foo: { 'data': "seller", 'page': 'sellerDone' }
                });
                _this.presentToast('You have successfully registered as seller!', 'success');
                _this.router.navigate(['/blog']);
            }
            else if (result.status == 2) {
                _this.presentToast('Your provided Email or Number has already been used. Please use another Email address or phone number.', 'danger');
            }
            else if (result.status == 3) {
                _this.presentToast('Your provided Number has already been used. Please use another Phone number.', 'danger');
            }
            else {
                _this.presentToast('Error while signing up! Please try later.', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Technical error,Please try after some time.', 'danger');
        });
    };
    RegisterSellerPage.prototype.presentToast = function (message, color) {
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
    RegisterSellerPage.prototype.presentLoading = function () {
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
    RegisterSellerPage.prototype.stopLoading = function () {
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
    RegisterSellerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-seller',
            template: __webpack_require__(/*! ./register-seller.page.html */ "./src/app/register-seller/register-seller.page.html"),
            styles: [__webpack_require__(/*! ./register-seller.page.scss */ "./src/app/register-seller/register-seller.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_globalFooService_service__WEBPACK_IMPORTED_MODULE_6__["GlobalFooService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], RegisterSellerPage);
    return RegisterSellerPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-seller-register-seller-module.js.map