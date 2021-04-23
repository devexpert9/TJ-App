(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-help-module"],{

/***/ "./src/app/help/help.module.ts":
/*!*************************************!*\
  !*** ./src/app/help/help.module.ts ***!
  \*************************************/
/*! exports provided: HelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./help.page */ "./src/app/help/help.page.ts");








var routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_7__["HelpPage"]
    }
];
var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_help_page__WEBPACK_IMPORTED_MODULE_7__["HelpPage"]]
        })
    ], HelpPageModule);
    return HelpPageModule;
}());



/***/ }),

/***/ "./src/app/help/help.page.html":
/*!*************************************!*\
  !*** ./src/app/help/help.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\t<app-header></app-header>\n\t<div class=\"ion-padding\">\n\t\t<div header_height></div>\n\n\t\t<div breadcrumb  class=\"ion-hide-md-down\">\t\t\n\t\t\t<div breadcrumb-inner>\n\t\t\t\t<ul list-inline list-unstyled style='margin:0 0 15px 0'>\n\t\t\t\t    <li style=\"float:left;margin:0 10px 0 0\">\n\t\t\t\t    \t<a routerLink=\"/blog\">Home</a></li>\n\t\t\t\t\t<li class=\"active\"> Help</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div privacy-page>\n\t\t   <ion-row>\n\t\t\t\t<ion-col terms-conditions size=\"12\" no-padding>\n\t\t\t\t   \t<div>\n\t\t\t\t   \t\tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\t\t\t\t   \t</div>\n\n\t\t\t\t   \t<div>\n\t\t\t\t   \t\tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\t\t\t\t   \t</div>\n\t\t\t   </ion-col>\t\t\n\t\t\t</ion-row>\n\t\t</div>\n\t</div>\n\n\t<!-- <app-footer></app-footer> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/help/help.page.scss":
/*!*************************************!*\
  !*** ./src/app/help/help.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey);\n  /* Privacy Start */\n  /* Privacy Ends */ }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top:var(--ion-padding-0); } }\n  ion-content [privacy-page] {\n    background-color: var(--ion-color-white);\n    box-shadow: var(--ion-value-0) var(--ion-value-2) var(--ion-value-4) var(--ion-value-0) rgba(0, 0, 0, 0.08);\n    padding: var(--ion-padding-20);\n    overflow: hidden; }\n  ion-content [privacy-page] [heading-title] {\n      text-align: left;\n      padding: var(--ion-padding-0) var(--ion-padding-0) var(--ion-padding-15) var(--ion-padding-0);\n      font-weight: bold;\n      font-size: var(--ion-font-size-22);\n      border-bottom: 1px #e5e5e5 solid;\n      color: var(--ion-color-darkblack3);\n      margin-top: var(--ion-margin-0);\n      font-family: var(--ion-font-family-2); }\n  ion-content [privacy-page] h3 {\n      font-size: var(--ion-font-size-14);\n      text-transform: uppercase;\n      color: var(--ion-color-darkblack3);\n      font-family: var(--ion-font-family-2);\n      margin-bottom: var(--ion-margin-15);\n      font-weight: bold; }\n  @media only screen and (max-width: 991px) {\n        ion-content [privacy-page] h3 {\n          font-size: var(--ion-font-size-13);\n          margin-top: var(--ion-margin-0);\n          margin-bottom: var(--ion-margin-10); } }\n  ion-content [privacy-page] ol {\n      padding-left: var(--ion-padding-22); }\n  @media only screen and (max-width: 991px) {\n        ion-content [privacy-page] ol {\n          padding-left: var(--ion-padding-15); } }\n  ion-content [privacy-page] ol li {\n        font-style: normal;\n        font-size: var(--ion-font-size-13);\n        color: var(--ion-color-darkgrey);\n        padding-bottom: var(--ion-padding-20);\n        font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n          ion-content [privacy-page] ol li {\n            padding-bottom: var(--ion-padding-10);\n            font-size: var(--ion-font-size-12); } }\n  ion-content [privacy-page] p {\n      font-style: normal;\n      font-size: var(--ion-font-size-13);\n      color: var(--ion-color-darkgrey);\n      line-height: 22px;\n      padding-bottom: var(--ion-padding-20);\n      font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n        ion-content [privacy-page] p {\n          padding-bottom: var(--ion-padding-10);\n          font-size: var(--ion-font-size-12); } }\n  ion-content [privacy-page] p a {\n        color: var(--ion-color-darkred); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvaGVscC9oZWxwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUVBLGtDQUFhO0VBS2Qsa0JBQUE7RUFrRUEsaUJBQUEsRUFBa0I7RUF0RWxCO0lBSEM7TUFLRyxrQ0FBYyxFQUFBLEVBcUVqQjtFQTFFQTtJQVVHLHdDQUF3QztJQUN4QywyR0FBdUc7SUFDdkcsOEJBQThCO0lBQzlCLGdCQUFnQixFQUFBO0VBYm5CO01BZUcsZ0JBQWdCO01BQ2hCLDZGQUE2RjtNQUM3RixpQkFBaUI7TUFDakIsa0NBQWtDO01BQ2xDLGdDQUFnQztNQUNoQyxrQ0FBa0M7TUFDbEMsK0JBQThCO01BQzlCLHFDQUFvQyxFQUFBO0VBdEJ2QztNQTBCSSxrQ0FBa0M7TUFDbkMseUJBQXlCO01BQ3pCLGtDQUFrQztNQUNsQyxxQ0FBb0M7TUFDcEMsbUNBQW1DO01BQ25DLGlCQUFpQixFQUFBO0VBQ3JCO1FBaENDO1VBaUNDLGtDQUFrQztVQUNuQywrQkFBK0I7VUFDL0IsbUNBQW1DLEVBQUEsRUFFbkM7RUFyQ0E7TUF1Q0csbUNBQW1DLEVBQUE7RUFDdkM7UUF4Q0M7VUEwQ0MsbUNBQW1DLEVBQUEsRUFhcEM7RUF2REE7UUE2Q0csa0JBQWtCO1FBQ2xCLGtDQUFrQztRQUNsQyxnQ0FBZ0M7UUFDaEMscUNBQXFDO1FBQ3JDLHFDQUFvQyxFQUFBO0VBQ3hDO1VBbERDO1lBbURDLHFDQUFxQztZQUNyQyxrQ0FBa0MsRUFBQSxFQUVuQztFQXREQTtNQXlERyxrQkFBa0I7TUFDbEIsa0NBQWtDO01BQ2xDLGdDQUFnQztNQUNoQyxpQkFBaUI7TUFDakIscUNBQXFDO01BQ3JDLHFDQUFvQyxFQUFBO0VBQ3hDO1FBL0RDO1VBZ0VBLHFDQUFxQztVQUNwQyxrQ0FBa0MsRUFBQSxFQU1uQztFQXZFQTtRQXFFRSwrQkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgaW9uLWNvbnRlbnRcbnsgIFxuXHQtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxue1xuICAgIC0tcGFkZGluZy10b3A6dmFyKC0taW9uLXBhZGRpbmctMCk7XG59XG4vKiBQcml2YWN5IFN0YXJ0ICovXG5bcHJpdmFjeS1wYWdlXVxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0taW9uLXZhbHVlLTApIHZhcigtLWlvbi12YWx1ZS0yKSB2YXIoLS1pb24tdmFsdWUtNCkgdmFyKC0taW9uLXZhbHVlLTApIHJnYmEoMCwwLDAsLjA4KTtcbiAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0yMCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbltoZWFkaW5nLXRpdGxlXSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTIyKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggI2U1ZTVlNSBzb2xpZDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjazMpO1xuICAgIG1hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbi0wKTtcbiAgICBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG59XG5oM1xue1xuICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcbiAgICBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xNSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG57IGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XG4gbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcbiBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTEwKTtcbn1cbn1cbm9sIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLTIyKTtcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcbntcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZy0xNSk7XG59XG4gbGkge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyZXkpO1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy0yMCk7XG4gICAgZm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxueyBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctMTApO1xuICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xufVxufVxufVxucCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JleSk7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcbiAgICBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXG57cGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcbn1cbmFcbntcbiAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrcmVkKVxufVxufVxufVxuLyogUHJpdmFjeSBFbmRzICovXG59Il19 */"

/***/ }),

/***/ "./src/app/help/help.page.ts":
/*!***********************************!*\
  !*** ./src/app/help/help.page.ts ***!
  \***********************************/
/*! exports provided: HelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPage", function() { return HelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpPage = /** @class */ (function () {
    function HelpPage() {
    }
    HelpPage.prototype.ngOnInit = function () {
    };
    HelpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.page.html */ "./src/app/help/help.page.html"),
            styles: [__webpack_require__(/*! ./help.page.scss */ "./src/app/help/help.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpPage);
    return HelpPage;
}());



/***/ })

}]);
//# sourceMappingURL=help-help-module.js.map