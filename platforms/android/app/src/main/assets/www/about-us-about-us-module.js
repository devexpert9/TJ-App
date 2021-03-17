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

module.exports = "ion-header::after {\n  display: none !important; }\n\nion-header ion-toolbar ion-menu-button {\n  height: 35px;\n  position: inherit;\n  top: inherit;\n  right: inherit;\n  transition: inherit;\n  transition-delay: .1s; }\n\nion-header ion-toolbar ion-menu-button img {\n    max-width: 20px; }\n\nion-header ion-toolbar ion-title {\n  font-weight: 700; }\n\n@media (min-width: 768px) {\n  ion-content .about-page [mob-icon-sec], ion-content .about-page .mob-icon-sec {\n    display: none; } }\n\n@media (max-width: 767px) {\n  ion-content .about-page [head-sec] {\n    margin-bottom: 25px !important; }\n    ion-content .about-page [head-sec] p {\n      font-size: 13px;\n      line-height: 26px;\n      color: #777; }\n    ion-content .about-page [head-sec] .section-title {\n      margin-bottom: 15px; }\n      ion-content .about-page [head-sec] .section-title h3 {\n        font-size: 20px;\n        margin-bottom: 0px; }\n  ion-content .about-page [about-cont-sec] {\n    background: #fafafa;\n    padding: 15px;\n    border-radius: 10px;\n    margin-bottom: 15px !important; }\n    ion-content .about-page [about-cont-sec] .about-right-content h4 {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 22px;\n      margin-bottom: 0px; }\n      ion-content .about-page [about-cont-sec] .about-right-content h4 .fa.fa-info-circle {\n        top: 0px; }\n      ion-content .about-page [about-cont-sec] .about-right-content h4 .infomtion {\n        top: 100%;\n        left: initial;\n        right: 0px;\n        padding: 5px;\n        min-width: 90px; }\n        ion-content .about-page [about-cont-sec] .about-right-content h4 .infomtion p {\n          line-height: 16px;\n          font-size: 11px;\n          color: #888;\n          text-transform: capitalize; }\n    ion-content .about-page [about-cont-sec] .about-right-content p {\n      line-height: 16px;\n      font-size: 12px;\n      color: #888; }\n      ion-content .about-page [about-cont-sec] .about-right-content p img.payment-image {\n        width: 120px; }\n      ion-content .about-page [about-cont-sec] .about-right-content p.social-icon a i {\n        font-size: 18px; }\n    ion-content .about-page [about-cont-sec] .about-left-icon {\n      height: 40px;\n      min-width: 40px;\n      width: 40px;\n      font-size: 16px;\n      margin-right: 10px !important;\n      margin-bottom: 0px; }\n  ion-content .about-page iframe {\n    max-height: 300px;\n    margin-top: 20px; }\n  ion-content .about-page .header-call-action {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: flex-end; }\n    ion-content .about-page .header-call-action .menu-right-ul {\n      padding: 0; }\n      ion-content .about-page .header-call-action .menu-right-ul li {\n        margin-left: 7px; }\n        ion-content .about-page .header-call-action .menu-right-ul li a {\n          font-size: 16px;\n          padding: 0px;\n          color: #444;\n          width: 30px;\n          height: 30px;\n          line-height: 30px;\n          background: #f1f1f1;\n          border-radius: 50%; }\n          ion-content .about-page .header-call-action .menu-right-ul li a:hover {\n            background: var(--ion-color-primary);\n            color: #fff; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9hYm91dC11cy9hYm91dC11cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHQyx3QkFBc0IsRUFBQTs7QUFIdkI7RUFTRyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFBOztBQWR4QjtJQWlCSSxlQUFlLEVBQUE7O0FBakJuQjtFQXNCRyxnQkFBZSxFQUFBOztBQU1sQjtFQUNJO0lBTUcsYUFBWSxFQUFBLEVBQ2Y7O0FBSUo7RUFDSTtJQU1HLDhCQUE2QixFQUFBO0lBTmhDO01BU0MsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixXQUFXLEVBQUE7SUFYWjtNQWVJLG1CQUFtQixFQUFBO01BZnZCO1FBa0JFLGVBQWU7UUFDZixrQkFBa0IsRUFBQTtFQW5CcEI7SUF5QkEsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQTZCLEVBQUE7SUE1QjdCO01BaUNFLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGtCQUFrQixFQUFBO01BcENwQjtRQXVDTSxRQUFRLEVBQUE7TUF2Q2Q7UUEyQ0csU0FBUztRQUNULGFBQWE7UUFDYixVQUFVO1FBQ1YsWUFBWTtRQUNaLGVBQWUsRUFBQTtRQS9DbEI7VUFrREksaUJBQWlCO1VBQ2pCLGVBQWU7VUFDZixXQUFXO1VBQ1gsMEJBQTBCLEVBQUE7SUFyRDlCO01BMkRFLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsV0FBVyxFQUFBO01BN0RiO1FBa0VJLFlBQVksRUFBQTtNQWxFaEI7UUEyRUssZUFBZSxFQUFBO0lBM0VwQjtNQW1GQyxZQUFZO01BQ1osZUFBZTtNQUNmLFdBQVc7TUFDWCxlQUFlO01BQ2YsNkJBQTRCO01BQzVCLGtCQUFrQixFQUFBO0VBeEZuQjtJQTZGQSxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUE5RmhCO0lBa0dBLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHlCQUF5QixFQUFBO0lBckd6QjtNQXdHSSxVQUFVLEVBQUE7TUF4R2Q7UUEyR0ssZ0JBQWdCLEVBQUE7UUEzR3JCO1VBOEdHLGVBQWU7VUFDZixZQUFZO1VBQ1osV0FBVztVQUNYLFdBQVc7VUFDWCxZQUFZO1VBQ1osaUJBQWlCO1VBQ2pCLG1CQUFtQjtVQUNuQixrQkFBa0IsRUFBQTtVQXJIckI7WUF3SE8sb0NBQW9DO1lBQ3BDLFdBQVcsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcblx0Jjo6YWZ0ZXJcblx0e1xuXHRkaXNwbGF5Om5vbmUhaW1wb3J0YW50O1xuXHR9XG5cdGlvbi10b29sYmFyXG5cdHtcblx0XHRpb24tbWVudS1idXR0b25cblx0XHR7XG5cdFx0XHRoZWlnaHQ6IDM1cHg7XG5cdFx0XHRwb3NpdGlvbjogaW5oZXJpdDtcblx0XHRcdHRvcDogaW5oZXJpdDtcblx0XHRcdHJpZ2h0OiBpbmhlcml0O1xuXHRcdFx0dHJhbnNpdGlvbjogaW5oZXJpdDtcblx0XHRcdHRyYW5zaXRpb24tZGVsYXk6IC4xcztcblx0XHRcdGltZ1xuXHRcdFx0e1xuXHRcdFx0XHRtYXgtd2lkdGg6IDIwcHg7XG5cdFx0XHR9XHRcdFxuXHRcdH1cblx0XHRpb24tdGl0bGVcblx0XHR7XG5cdFx0XHRmb250LXdlaWdodDo3MDA7XG5cdFx0fVxuXHR9XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaW9uLWNvbnRlbnRcblx0e1xuXHRcdC5hYm91dC1wYWdlXG5cdFx0e1xuXHRcdCAgICBbbW9iLWljb24tc2VjXSwgLm1vYi1pY29uLXNlY1xuXHRcdFx0e1xuXHRcdFx0ICAgIGRpc3BsYXk6bm9uZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGlvbi1jb250ZW50XG5cdHtcblx0ICAgIC5hYm91dC1wYWdlXG5cdFx0e1xuXHRcdFx0W2hlYWQtc2VjXSBcblx0XHRcdHtcblx0XHRcdCAgICBtYXJnaW4tYm90dG9tOiAyNXB4IWltcG9ydGFudDtcblx0XHRcdFx0cCBcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjZweDtcblx0XHRcdFx0XHRjb2xvcjogIzc3Nztcblx0XHRcdFx0fVx0XG5cdFx0XHRcdC5zZWN0aW9uLXRpdGxlIFxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHRcdFx0XHRcdGgzIFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDBweDtcblx0XHRcdFx0XHR9XHRcdFx0XHRcblx0XHRcdFx0fVx0XHRcdFx0XG5cdFx0XHR9XG4gICAgICAgICAgICBbYWJvdXQtY29udC1zZWNdXG4gICAgICAgICAgICB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmYWZhZmE7XG5cdFx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1x0XHRcdFxuXHRcdFx0XHQuYWJvdXQtcmlnaHQtY29udGVudFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aDQgXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRcdFx0XHRcdFx0LmZhLmZhLWluZm8tY2lyY2xlXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQgICAgdG9wOiAwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaW5mb210aW9uIFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0b3A6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IGluaXRpYWw7XG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAwcHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0XHRcdFx0bWluLXdpZHRoOiA5MHB4O1xuXHRcdFx0XHRcdFx0XHRwXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTZweDtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICM4ODg7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVx0XG5cdFx0XHRcdFx0fVx0XHRcdFxuXHRcdFx0XHRcdHAgXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE2cHg7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzg4ODtcblx0XHRcdFx0XHRcdGltZ1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHQmLnBheW1lbnQtaW1hZ2UgXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTIwcHg7XG5cdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCYuc29jaWFsLWljb25cblx0XHRcdFx0XHRcdHsgXG5cdFx0XHRcdFx0XHRcdGFcblx0XHRcdFx0XHRcdFx0eyBcblx0XHRcdFx0XHRcdFx0XHRpIFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XHRcdFx0XHRcblx0XHRcdFx0fVx0XHRcblx0XHRcdFx0LmFib3V0LWxlZnQtaWNvblxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHRcdG1pbi13aWR0aDogNDBweDtcblx0XHRcdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4IWltcG9ydGFudDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWZyYW1lIFxuXHRcdFx0e1xuXHRcdFx0XHRtYXgtaGVpZ2h0OiAzMDBweDtcblx0XHRcdFx0bWFyZ2luLXRvcDogMjBweDtcblx0XHRcdH1cblx0XHRcdC5oZWFkZXItY2FsbC1hY3Rpb24gXG5cdFx0XHR7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1x0XHRcdFxuXHRcdFx0XHQubWVudS1yaWdodC11bCBcblx0XHRcdFx0e1xuXHRcdFx0XHQgICAgcGFkZGluZzogMDtcblx0XHRcdFx0XHRsaSBcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG5cdFx0XHRcdFx0XHRhIFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDBweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM0NDQ7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAzMHB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRcdCY6aG92ZXJcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHQgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1x0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdCAgICBjb2xvcjogI2ZmZjtcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XHRcdFx0XG5cdFx0XHRcdFx0fVx0XHRcdFxuXHRcdFx0XHR9XHRcdFx0XG5cdFx0XHR9XHRcdFx0XHRcblx0XHR9XG5cdH1cbn1cbiJdfQ== */"

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