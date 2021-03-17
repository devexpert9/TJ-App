(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-us-about-us-module"],{

/***/ "./src/app/about-us/about-us.module.ts":
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.module.ts ***!
  \*********************************************/
/*! exports provided: AboutUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us.page */ "./src/app/about-us/about-us.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");









var routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]
    }
];
var AboutUsPageModule = /** @class */ (function () {
    function AboutUsPageModule() {
    }
    AboutUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_8__["HeaderPageModule"]
            ],
            declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]],
            entryComponents: [],
        })
    ], AboutUsPageModule);
    return AboutUsPageModule;
}());



/***/ }),

/***/ "./src/app/about-us/about-us.page.html":
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n<app-header></app-header>\n\n\n<div terms-page>\n   <ion-row>\n\t\t<ion-col terms-conditions size=\"12\" no-padding>\n\t\t   <div [innerHTML]=\"page\"></div>\n\t   </ion-col>\t\t\n\t</ion-row><!-- /.row -->\n</div>\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/about-us/about-us.page.scss":
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  display: none !important; }\n\nion-header ion-toolbar ion-menu-button {\n  height: 35px;\n  position: inherit;\n  top: inherit;\n  right: inherit;\n  transition: inherit;\n  transition-delay: .1s; }\n\nion-header ion-toolbar ion-menu-button img {\n    max-width: 20px; }\n\nion-header ion-toolbar ion-title {\n  font-weight: 700; }\n\n@media (min-width: 768px) {\n  ion-content .about-page [mob-icon-sec], ion-content .about-page .mob-icon-sec {\n    display: none; } }\n\n@media (max-width: 767px) {\n  ion-content .about-page [head-sec] {\n    margin-bottom: 25px !important; }\n    ion-content .about-page [head-sec] p {\n      font-size: 13px;\n      line-height: 26px;\n      color: #777; }\n    ion-content .about-page [head-sec] .section-title {\n      margin-bottom: 15px; }\n      ion-content .about-page [head-sec] .section-title h3 {\n        font-size: 20px;\n        margin-bottom: 0px; }\n  ion-content .about-page [about-cont-sec] {\n    background: #fafafa;\n    padding: 15px;\n    border-radius: 10px;\n    margin-bottom: 15px !important; }\n    ion-content .about-page [about-cont-sec] .about-right-content h4 {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 22px;\n      margin-bottom: 0px; }\n      ion-content .about-page [about-cont-sec] .about-right-content h4 .fa.fa-info-circle {\n        top: 0px; }\n      ion-content .about-page [about-cont-sec] .about-right-content h4 .infomtion {\n        top: 100%;\n        left: initial;\n        right: 0px;\n        padding: 5px;\n        min-width: 90px; }\n        ion-content .about-page [about-cont-sec] .about-right-content h4 .infomtion p {\n          line-height: 16px;\n          font-size: 11px;\n          color: #888;\n          text-transform: capitalize; }\n    ion-content .about-page [about-cont-sec] .about-right-content p {\n      line-height: 16px;\n      font-size: 12px;\n      color: #888; }\n      ion-content .about-page [about-cont-sec] .about-right-content p img.payment-image {\n        width: 120px; }\n      ion-content .about-page [about-cont-sec] .about-right-content p.social-icon a i {\n        font-size: 18px; }\n    ion-content .about-page [about-cont-sec] .about-left-icon {\n      height: 40px;\n      min-width: 40px;\n      width: 40px;\n      font-size: 16px;\n      margin-right: 10px !important;\n      margin-bottom: 0px; }\n  ion-content .about-page iframe {\n    max-height: 300px;\n    margin-top: 20px; }\n  ion-content .about-page .header-call-action {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: flex-end; }\n    ion-content .about-page .header-call-action .menu-right-ul {\n      padding: 0; }\n      ion-content .about-page .header-call-action .menu-right-ul li {\n        margin-left: 7px; }\n        ion-content .about-page .header-call-action .menu-right-ul li a {\n          font-size: 16px;\n          padding: 0px;\n          color: #444;\n          width: 30px;\n          height: 30px;\n          line-height: 30px;\n          background: #f1f1f1;\n          border-radius: 50%; }\n          ion-content .about-page .header-call-action .menu-right-ul li a:hover {\n            background: var(--ion-color-primary);\n            color: #fff; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0Msd0JBQXNCLEVBQUE7O0FBSHZCO0VBU0csWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUIsRUFBQTs7QUFkeEI7SUFpQkksZUFBZSxFQUFBOztBQWpCbkI7RUFzQkcsZ0JBQWUsRUFBQTs7QUFNbEI7RUFDSTtJQU1HLGFBQVksRUFBQSxFQUNmOztBQUlKO0VBQ0k7SUFNRyw4QkFBNkIsRUFBQTtJQU5oQztNQVNDLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsV0FBVyxFQUFBO0lBWFo7TUFlSSxtQkFBbUIsRUFBQTtNQWZ2QjtRQWtCRSxlQUFlO1FBQ2Ysa0JBQWtCLEVBQUE7RUFuQnBCO0lBeUJBLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE2QixFQUFBO0lBNUI3QjtNQWlDRSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixrQkFBa0IsRUFBQTtNQXBDcEI7UUF1Q00sUUFBUSxFQUFBO01BdkNkO1FBMkNHLFNBQVM7UUFDVCxhQUFhO1FBQ2IsVUFBVTtRQUNWLFlBQVk7UUFDWixlQUFlLEVBQUE7UUEvQ2xCO1VBa0RJLGlCQUFpQjtVQUNqQixlQUFlO1VBQ2YsV0FBVztVQUNYLDBCQUEwQixFQUFBO0lBckQ5QjtNQTJERSxpQkFBaUI7TUFDakIsZUFBZTtNQUNmLFdBQVcsRUFBQTtNQTdEYjtRQWtFSSxZQUFZLEVBQUE7TUFsRWhCO1FBMkVLLGVBQWUsRUFBQTtJQTNFcEI7TUFtRkMsWUFBWTtNQUNaLGVBQWU7TUFDZixXQUFXO01BQ1gsZUFBZTtNQUNmLDZCQUE0QjtNQUM1QixrQkFBa0IsRUFBQTtFQXhGbkI7SUE2RkEsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0VBOUZoQjtJQWtHQSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix5QkFBeUIsRUFBQTtJQXJHekI7TUF3R0ksVUFBVSxFQUFBO01BeEdkO1FBMkdLLGdCQUFnQixFQUFBO1FBM0dyQjtVQThHRyxlQUFlO1VBQ2YsWUFBWTtVQUNaLFdBQVc7VUFDWCxXQUFXO1VBQ1gsWUFBWTtVQUNaLGlCQUFpQjtVQUNqQixtQkFBbUI7VUFDbkIsa0JBQWtCLEVBQUE7VUFySHJCO1lBd0hPLG9DQUFvQztZQUNwQyxXQUFXLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG5cdCY6OmFmdGVyXG5cdHtcblx0ZGlzcGxheTpub25lIWltcG9ydGFudDtcblx0fVxuXHRpb24tdG9vbGJhclxuXHR7XG5cdFx0aW9uLW1lbnUtYnV0dG9uXG5cdFx0e1xuXHRcdFx0aGVpZ2h0OiAzNXB4O1xuXHRcdFx0cG9zaXRpb246IGluaGVyaXQ7XG5cdFx0XHR0b3A6IGluaGVyaXQ7XG5cdFx0XHRyaWdodDogaW5oZXJpdDtcblx0XHRcdHRyYW5zaXRpb246IGluaGVyaXQ7XG5cdFx0XHR0cmFuc2l0aW9uLWRlbGF5OiAuMXM7XG5cdFx0XHRpbWdcblx0XHRcdHtcblx0XHRcdFx0bWF4LXdpZHRoOiAyMHB4O1xuXHRcdFx0fVx0XHRcblx0XHR9XG5cdFx0aW9uLXRpdGxlXG5cdFx0e1xuXHRcdFx0Zm9udC13ZWlnaHQ6NzAwO1xuXHRcdH1cblx0fVxufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGlvbi1jb250ZW50XG5cdHtcblx0XHQuYWJvdXQtcGFnZVxuXHRcdHtcblx0XHQgICAgW21vYi1pY29uLXNlY10sIC5tb2ItaWNvbi1zZWNcblx0XHRcdHtcblx0XHRcdCAgICBkaXNwbGF5Om5vbmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBpb24tY29udGVudFxuXHR7XG5cdCAgICAuYWJvdXQtcGFnZVxuXHRcdHtcblx0XHRcdFtoZWFkLXNlY10gXG5cdFx0XHR7XG5cdFx0XHQgICAgbWFyZ2luLWJvdHRvbTogMjVweCFpbXBvcnRhbnQ7XG5cdFx0XHRcdHAgXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDI2cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICM3Nzc7XG5cdFx0XHRcdH1cdFxuXHRcdFx0XHQuc2VjdGlvbi10aXRsZSBcblx0XHRcdFx0e1xuXHRcdFx0XHQgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblx0XHRcdFx0XHRoMyBcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XG5cdFx0XHRcdFx0fVx0XHRcdFx0XG5cdFx0XHRcdH1cdFx0XHRcdFxuXHRcdFx0fVxuICAgICAgICAgICAgW2Fib3V0LWNvbnQtc2VjXVxuICAgICAgICAgICAge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuXHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNXB4IWltcG9ydGFudDtcdFx0XHRcblx0XHRcdFx0LmFib3V0LXJpZ2h0LWNvbnRlbnRcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGg0IFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjJweDtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDBweDtcblx0XHRcdFx0XHRcdC5mYS5mYS1pbmZvLWNpcmNsZVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ICAgIHRvcDogMHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmluZm9tdGlvbiBcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dG9wOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiBpbml0aWFsO1xuXHRcdFx0XHRcdFx0XHRyaWdodDogMHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogOTBweDtcblx0XHRcdFx0XHRcdFx0cFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE2cHg7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjODg4O1xuXHRcdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1x0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cdFxuXHRcdFx0XHRcdH1cdFx0XHRcblx0XHRcdFx0XHRwIFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxNnB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICM4ODg7XG5cdFx0XHRcdFx0XHRpbWdcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Ji5wYXltZW50LWltYWdlIFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEyMHB4O1xuXHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQmLnNvY2lhbC1pY29uXG5cdFx0XHRcdFx0XHR7IFxuXHRcdFx0XHRcdFx0XHRhXG5cdFx0XHRcdFx0XHRcdHsgXG5cdFx0XHRcdFx0XHRcdFx0aSBcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fVx0XHRcdFx0XG5cdFx0XHRcdH1cdFx0XG5cdFx0XHRcdC5hYm91dC1sZWZ0LWljb25cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdFx0XHRtaW4td2lkdGg6IDQwcHg7XG5cdFx0XHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweCFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4O1x0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmcmFtZSBcblx0XHRcdHtcblx0XHRcdFx0bWF4LWhlaWdodDogMzAwcHg7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0XHR9XG5cdFx0XHQuaGVhZGVyLWNhbGwtYWN0aW9uIFxuXHRcdFx0e1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcdFx0XHRcblx0XHRcdFx0Lm1lbnUtcmlnaHQtdWwgXG5cdFx0XHRcdHtcblx0XHRcdFx0ICAgIHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0bGkgXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgICBtYXJnaW4tbGVmdDogN3B4O1xuXHRcdFx0XHRcdFx0YSBcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjNDQ0O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzBweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzMHB4O1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMzBweDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2YxZjFmMTtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdFx0XHQmOmhvdmVyXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQgICAgY29sb3I6ICNmZmY7XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVx0XHRcdFxuXHRcdFx0XHRcdH1cdFx0XHRcblx0XHRcdFx0fVx0XHRcdFxuXHRcdFx0fVx0XHRcdFx0XG5cdFx0fVxuXHR9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/about-us/about-us.page.ts":
/*!*******************************************!*\
  !*** ./src/app/about-us/about-us.page.ts ***!
  \*******************************************/
/*! exports provided: AboutUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPage", function() { return AboutUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(userService, loadingController) {
        this.userService = userService;
        this.loadingController = loadingController;
    }
    AboutUsPage.prototype.ngOnInit = function () {
    };
    AboutUsPage.prototype.ionViewDidEnter = function () {
        this.getTerms();
    };
    AboutUsPage.prototype.getTerms = function () {
        var _this = this;
        this.presentLoading();
        this.userService.postData({}, 'aboutUs').subscribe(function (result) {
            _this.page = atob(result.aboutUs.content);
            _this.stopLoading();
        }, function (err) {
            _this.page = [];
            _this.stopLoading();
        });
    };
    AboutUsPage.prototype.presentLoading = function () {
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
    AboutUsPage.prototype.stopLoading = function () {
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
    AboutUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.page.html */ "./src/app/about-us/about-us.page.html"),
            styles: [__webpack_require__(/*! ./about-us.page.scss */ "./src/app/about-us/about-us.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], AboutUsPage);
    return AboutUsPage;
}());



/***/ })

}]);
//# sourceMappingURL=about-us-about-us-module.js.map