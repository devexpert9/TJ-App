(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sitemap-sitemap-module"],{

/***/ "./src/app/sitemap/sitemap.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sitemap/sitemap.module.ts ***!
  \*******************************************/
/*! exports provided: SitemapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitemapPageModule", function() { return SitemapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sitemap_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sitemap.page */ "./src/app/sitemap/sitemap.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _sitemap_page__WEBPACK_IMPORTED_MODULE_6__["SitemapPage"]
    }
];
var SitemapPageModule = /** @class */ (function () {
    function SitemapPageModule() {
    }
    SitemapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_sitemap_page__WEBPACK_IMPORTED_MODULE_6__["SitemapPage"]]
        })
    ], SitemapPageModule);
    return SitemapPageModule;
}());



/***/ }),

/***/ "./src/app/sitemap/sitemap.page.html":
/*!*******************************************!*\
  !*** ./src/app/sitemap/sitemap.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n<div header_height></div>\n<!-- Breadcrumb Start -->\n\t\t<div breadcrumb  class=\"ion-hide-md-down\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div breadcrumb-inner>\n\t\t\t\t\t<ul list-inline list-unstyled>\n\t\t\t\t\t\t<li><a routerLink=\"/home\">Home</a></li>\n\t\t\t\t\t\t<li class=\"active\">Sitemap</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- /.breadcrumb-inner -->\n\t\t\t</div><!-- /.container -->\n\t\t</div>\n<!-- Breadcrumb Ends -->\n\n<div class=\"jbm-sitemap-section padding-bottom-100\">\n\t<div class=\"container\">\n\t\t<div class=\"jbm-sitemap\">\n\t\t\t<ul>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\">Customer Service</a>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">My Account</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Order History</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">FAQ</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Specials</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Help Center</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\">Categories</a>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Appliances 1</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Kids</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Men's</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Women's</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Electronics</a>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Laptops</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Desktops</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Cameras</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Mobile Phones</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" title=\"\">Why Choose Us</a>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Shopping Guide</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Blog</a>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Blog Details</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">My Orders</a>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Orders</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Open Orders</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Cancelled Orders</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\n\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" title=\"\">Service</a>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Account</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Wishlist</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Shopping Cart</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Return Policy</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" title=\"\">Information</a>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\" title=\"\">My Account</a>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Profile</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Your Orders</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Payment Options</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Your Addresses</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Login Details</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Messages</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Discount</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Product Compare</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Return Replacement</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Sell on Siniyetu</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" title=\"\">Insider</a>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Sites Map</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Blogs</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">Trends</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">About Us</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" title=\"\">My Orders</a></li>\n\t\t\t\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"clearfix\"></div>\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/sitemap/sitemap.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sitemap/sitemap.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jbm-sitemap-section {\n  float: left;\n  width: 100%; }\n\n.jbm-sitemap-section.padding-bottom-100 {\n  padding: 40px 0 !important; }\n\n.jbm-sitemap-section ul {\n  list-style: none;\n  padding-left: 0px;\n  font-family: 'Open Sans', sans-serif; }\n\n.jbm-sitemap > ul > li {\n  position: relative;\n  display: block; }\n\n.jbm-sitemap > ul > li > a:before {\n  display: none; }\n\n.jbm-sitemap > ul > li > a:after {\n  display: none; }\n\n.jbm-sitemap-section ul li a {\n  color: #454545;\n  font-size: 15px;\n  font-weight: 400;\n  width: 165px;\n  text-align: center;\n  background-color: #e3e3e3;\n  padding: 15px 0;\n  margin-bottom: 20px;\n  display: inline-block;\n  position: relative; }\n\n.jbm-sitemap-section ul ul {\n  padding-left: 70px;\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  margin-left: 60px; }\n\n.jbm-sitemap-section ul ul:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 3px;\n  width: 2px;\n  height: 100%;\n  z-index: 9;\n  background-color: #a01616; }\n\n.jbm-sitemap-section ul ul li {\n  position: relative; }\n\n.jbm-sitemap-section ul li a {\n  color: #454545;\n  font-size: 15px;\n  font-weight: 400;\n  width: 165px;\n  text-align: center;\n  background-color: #e3e3e3;\n  padding: 15px 0;\n  margin-bottom: 20px;\n  display: inline-block;\n  position: relative; }\n\n.jbm-sitemap ul ul li a {\n  width: 280px; }\n\n.jbm-sitemap-section ul li a:before {\n  content: '';\n  position: absolute;\n  top: 19px;\n  left: -5px;\n  width: 12px;\n  height: 12px;\n  background-color: #a01616;\n  border-radius: 50%; }\n\n.jbm-sitemap-section ul li a:after {\n  content: '';\n  position: absolute;\n  top: 25px;\n  right: 100%;\n  width: 66px;\n  height: 2px;\n  background-color: #a01616; }\n\n.jbm-sitemap-section ul ul:after {\n  font-family: 'Fontawesome';\n  content: \"\\f111\";\n  position: absolute;\n  top: 25px;\n  left: -65px;\n  width: 70px;\n  height: 2px;\n  line-height: 2px;\n  text-indent: -5px;\n  background-color: #a01616;\n  color: #a01616; }\n\n.jbm-sitemap-section ul li a {\n  transition: 0.3s ease-in-out; }\n\n.jbm-sitemap-section ul li a:hover {\n  text-decoration: none;\n  background: #a01616;\n  color: #fff;\n  transition: 0.3s ease-in-out; }\n\n@media only screen and (max-width: 767px) {\n  .jbm-sitemap-section ul li a {\n    font-size: 14px;\n    width: auto;\n    padding: 9px 14px;\n    min-width: 130px;\n    margin-bottom: 10px; }\n  .jbm-sitemap ul ul li a {\n    width: auto;\n    padding: 9px 14px;\n    min-width: 160px; }\n  .jbm-sitemap-section ul li a:before {\n    top: 14px; }\n  .jbm-sitemap-section ul li a:after {\n    top: 20px;\n    width: 30px; }\n  .jbm-sitemap-section ul ul:after {\n    top: 20px;\n    left: -25px;\n    width: 30px; }\n  .jbm-sitemap-section ul ul {\n    padding-left: 35px;\n    margin-left: 40px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9zaXRlbWFwL3NpdGVtYXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFFZjtFQUNJLDBCQUEwQixFQUFBOztBQUU5QjtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDcEIsb0NBQW9DLEVBQUE7O0FBRXJDO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFFbEI7RUFBa0MsYUFBWSxFQUFBOztBQUM5QztFQUFpQyxhQUFZLEVBQUE7O0FBQzdDO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFVBQVU7RUFDYix5QkFBeUIsRUFBQTs7QUFFMUI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ3BCLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBRWY7RUFBOEIsNEJBQTJCLEVBQUE7O0FBQ3pEO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ2QsNEJBQTJCLEVBQUE7O0FBRzVCO0VBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7RUFFcEI7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0VBRXBCO0lBQ0csU0FBUyxFQUFBO0VBRVo7SUFDSyxTQUFTO0lBQ1osV0FBVyxFQUFBO0VBRWI7SUFDSSxTQUFTO0lBQ1osV0FBVztJQUNSLFdBQVcsRUFBQTtFQUVmO0lBQ0ksa0JBQWtCO0lBQ2pCLGlCQUFpQixFQUFBLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2l0ZW1hcC9zaXRlbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qYm0tc2l0ZW1hcC1zZWN0aW9uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5qYm0tc2l0ZW1hcC1zZWN0aW9uLnBhZGRpbmctYm90dG9tLTEwMCB7XG4gICAgcGFkZGluZzogNDBweCAwICFpbXBvcnRhbnQ7XG59XG4uamJtLXNpdGVtYXAtc2VjdGlvbiB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuLmpibS1zaXRlbWFwID4gdWwgPiBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmpibS1zaXRlbWFwID4gdWwgPiBsaSA+IGE6YmVmb3Jle2Rpc3BsYXk6bm9uZX1cbi5qYm0tc2l0ZW1hcCA+IHVsID4gbGkgPiBhOmFmdGVye2Rpc3BsYXk6bm9uZX1cbi5qYm0tc2l0ZW1hcC1zZWN0aW9uIHVsIGxpIGEge1xuICAgIGNvbG9yOiAjNDU0NTQ1O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHdpZHRoOiAxNjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMztcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmpibS1zaXRlbWFwLXNlY3Rpb24gdWwgdWwge1xuICAgIHBhZGRpbmctbGVmdDogNzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG5cbi5qYm0tc2l0ZW1hcC1zZWN0aW9uIHVsIHVsOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAzcHg7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogOTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2EwMTYxNjtcbn1cbi5qYm0tc2l0ZW1hcC1zZWN0aW9uIHVsIHVsIGxpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uamJtLXNpdGVtYXAtc2VjdGlvbiB1bCBsaSBhIHtcbiAgICBjb2xvcjogIzQ1NDU0NTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB3aWR0aDogMTY1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5qYm0tc2l0ZW1hcCB1bCB1bCBsaSBhIHtcbiAgICB3aWR0aDogMjgwcHg7XG59XG4uamJtLXNpdGVtYXAtc2VjdGlvbiB1bCBsaSBhOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTlweDtcbiAgICBsZWZ0OiAtNXB4O1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTAxNjE2O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5qYm0tc2l0ZW1hcC1zZWN0aW9uIHVsIGxpIGE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1cHg7XG4gICAgcmlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDY2cHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwMTYxNjtcbn1cbi5qYm0tc2l0ZW1hcC1zZWN0aW9uIHVsIHVsOmFmdGVyIHtcbiAgICBmb250LWZhbWlseTogJ0ZvbnRhd2Vzb21lJztcbiAgICBjb250ZW50OiBcIlxcZjExMVwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1cHg7XG4gICAgbGVmdDogLTY1cHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgbGluZS1oZWlnaHQ6IDJweDtcbiAgICB0ZXh0LWluZGVudDogLTVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2EwMTYxNjtcblx0Y29sb3I6ICNhMDE2MTY7XG59XG4uamJtLXNpdGVtYXAtc2VjdGlvbiB1bCBsaSBhIHt0cmFuc2l0aW9uOjAuM3MgZWFzZS1pbi1vdXQ7IH1cbi5qYm0tc2l0ZW1hcC1zZWN0aW9uIHVsIGxpIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjYTAxNjE2O1xuICAgIGNvbG9yOiAjZmZmO1xuXHR0cmFuc2l0aW9uOjAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuLmpibS1zaXRlbWFwLXNlY3Rpb24gdWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDlweCAxNHB4O1xuXHRtaW4td2lkdGg6IDEzMHB4O1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmpibS1zaXRlbWFwIHVsIHVsIGxpIGEge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDlweCAxNHB4O1xuICAgIG1pbi13aWR0aDogMTYwcHg7XG59XG4uamJtLXNpdGVtYXAtc2VjdGlvbiB1bCBsaSBhOmJlZm9yZSB7XG4gICB0b3A6IDE0cHg7XG59XG4uamJtLXNpdGVtYXAtc2VjdGlvbiB1bCBsaSBhOmFmdGVyIHtcbiAgICAgdG9wOiAyMHB4O1xuXHQgd2lkdGg6IDMwcHg7XG59XG4uamJtLXNpdGVtYXAtc2VjdGlvbiB1bCB1bDphZnRlciB7XG4gICAgdG9wOiAyMHB4O1xuXHRsZWZ0OiAtMjVweDtcbiAgICB3aWR0aDogMzBweDtcbn1cbi5qYm0tc2l0ZW1hcC1zZWN0aW9uIHVsIHVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG5cdCAgICBtYXJnaW4tbGVmdDogNDBweDtcblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sitemap/sitemap.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sitemap/sitemap.page.ts ***!
  \*****************************************/
/*! exports provided: SitemapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitemapPage", function() { return SitemapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SitemapPage = /** @class */ (function () {
    function SitemapPage() {
    }
    SitemapPage.prototype.ngOnInit = function () {
    };
    SitemapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sitemap',
            template: __webpack_require__(/*! ./sitemap.page.html */ "./src/app/sitemap/sitemap.page.html"),
            styles: [__webpack_require__(/*! ./sitemap.page.scss */ "./src/app/sitemap/sitemap.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SitemapPage);
    return SitemapPage;
}());



/***/ })

}]);
//# sourceMappingURL=sitemap-sitemap-module.js.map