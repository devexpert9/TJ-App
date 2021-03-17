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

module.exports = ".jbm-sitemap-section {\n  float: left;\n  width: 100%; }\n\n.jbm-sitemap-section.padding-bottom-100 {\n  padding: 40px 0 !important; }\n\n.jbm-sitemap-section ul {\n  list-style: none;\n  padding-left: 0px;\n  font-family: 'Open Sans', sans-serif; }\n\n.jbm-sitemap > ul > li {\n  position: relative;\n  display: block; }\n\n.jbm-sitemap > ul > li > a:before {\n  display: none; }\n\n.jbm-sitemap > ul > li > a:after {\n  display: none; }\n\n.jbm-sitemap-section ul li a {\n  color: #454545;\n  font-size: 15px;\n  font-weight: 400;\n  width: 165px;\n  text-align: center;\n  background-color: #e3e3e3;\n  padding: 15px 0;\n  margin-bottom: 20px;\n  display: inline-block;\n  position: relative; }\n\n.jbm-sitemap-section ul ul {\n  padding-left: 70px;\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  margin-left: 60px; }\n\n.jbm-sitemap-section ul ul:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 3px;\n  width: 2px;\n  height: 100%;\n  z-index: 9;\n  background-color: #a01616; }\n\n.jbm-sitemap-section ul ul li {\n  position: relative; }\n\n.jbm-sitemap-section ul li a {\n  color: #454545;\n  font-size: 15px;\n  font-weight: 400;\n  width: 165px;\n  text-align: center;\n  background-color: #e3e3e3;\n  padding: 15px 0;\n  margin-bottom: 20px;\n  display: inline-block;\n  position: relative; }\n\n.jbm-sitemap ul ul li a {\n  width: 280px; }\n\n.jbm-sitemap-section ul li a:before {\n  content: '';\n  position: absolute;\n  top: 19px;\n  left: -5px;\n  width: 12px;\n  height: 12px;\n  background-color: #a01616;\n  border-radius: 50%; }\n\n.jbm-sitemap-section ul li a:after {\n  content: '';\n  position: absolute;\n  top: 25px;\n  right: 100%;\n  width: 66px;\n  height: 2px;\n  background-color: #a01616; }\n\n.jbm-sitemap-section ul ul:after {\n  font-family: 'Fontawesome';\n  content: \"\\f111\";\n  position: absolute;\n  top: 25px;\n  left: -65px;\n  width: 70px;\n  height: 2px;\n  line-height: 2px;\n  text-indent: -5px;\n  background-color: #a01616;\n  color: #a01616; }\n\n.jbm-sitemap-section ul li a {\n  transition: 0.3s ease-in-out; }\n\n.jbm-sitemap-section ul li a:hover {\n  text-decoration: none;\n  background: #a01616;\n  color: #fff;\n  transition: 0.3s ease-in-out; }\n\n@media only screen and (max-width: 767px) {\n  .jbm-sitemap-section ul li a {\n    font-size: 14px;\n    width: auto;\n    padding: 9px 14px;\n    min-width: 130px;\n    margin-bottom: 10px; }\n  .jbm-sitemap ul ul li a {\n    width: auto;\n    padding: 9px 14px;\n    min-width: 160px; }\n  .jbm-sitemap-section ul li a:before {\n    top: 14px; }\n  .jbm-sitemap-section ul li a:after {\n    top: 20px;\n    width: 30px; }\n  .jbm-sitemap-section ul ul:after {\n    top: 20px;\n    left: -25px;\n    width: 30px; }\n  .jbm-sitemap-section ul ul {\n    padding-left: 35px;\n    margin-left: 40px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvc2l0ZW1hcC9zaXRlbWFwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBRWY7RUFDSSwwQkFBMEIsRUFBQTs7QUFFOUI7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ3BCLG9DQUFvQyxFQUFBOztBQUVyQztFQUNJLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBRWxCO0VBQWtDLGFBQVksRUFBQTs7QUFDOUM7RUFBaUMsYUFBWSxFQUFBOztBQUM3QztFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0VBQ2IseUJBQXlCLEVBQUE7O0FBRTFCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUVmO0VBQThCLDRCQUEyQixFQUFBOztBQUN6RDtFQUNJLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsV0FBVztFQUNkLDRCQUEyQixFQUFBOztBQUc1QjtFQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBO0VBRXBCO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtFQUVwQjtJQUNHLFNBQVMsRUFBQTtFQUVaO0lBQ0ssU0FBUztJQUNaLFdBQVcsRUFBQTtFQUViO0lBQ0ksU0FBUztJQUNaLFdBQVc7SUFDUixXQUFXLEVBQUE7RUFFZjtJQUNJLGtCQUFrQjtJQUNqQixpQkFBaUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NpdGVtYXAvc2l0ZW1hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuamJtLXNpdGVtYXAtc2VjdGlvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uamJtLXNpdGVtYXAtc2VjdGlvbi5wYWRkaW5nLWJvdHRvbS0xMDAge1xuICAgIHBhZGRpbmc6IDQwcHggMCAhaW1wb3J0YW50O1xufVxuLmpibS1zaXRlbWFwLXNlY3Rpb24gdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cbi5qYm0tc2l0ZW1hcCA+IHVsID4gbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5qYm0tc2l0ZW1hcCA+IHVsID4gbGkgPiBhOmJlZm9yZXtkaXNwbGF5Om5vbmV9XG4uamJtLXNpdGVtYXAgPiB1bCA+IGxpID4gYTphZnRlcntkaXNwbGF5Om5vbmV9XG4uamJtLXNpdGVtYXAtc2VjdGlvbiB1bCBsaSBhIHtcbiAgICBjb2xvcjogIzQ1NDU0NTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB3aWR0aDogMTY1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5qYm0tc2l0ZW1hcC1zZWN0aW9uIHVsIHVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG4uamJtLXNpdGVtYXAtc2VjdGlvbiB1bCB1bDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogM3B4O1xuICAgIHdpZHRoOiAycHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDk7XG5cdGJhY2tncm91bmQtY29sb3I6ICNhMDE2MTY7XG59XG4uamJtLXNpdGVtYXAtc2VjdGlvbiB1bCB1bCBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmpibS1zaXRlbWFwLXNlY3Rpb24gdWwgbGkgYSB7XG4gICAgY29sb3I6ICM0NTQ1NDU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgd2lkdGg6IDE2NXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uamJtLXNpdGVtYXAgdWwgdWwgbGkgYSB7XG4gICAgd2lkdGg6IDI4MHB4O1xufVxuLmpibS1zaXRlbWFwLXNlY3Rpb24gdWwgbGkgYTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE5cHg7XG4gICAgbGVmdDogLTVweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwMTYxNjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uamJtLXNpdGVtYXAtc2VjdGlvbiB1bCBsaSBhOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNXB4O1xuICAgIHJpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA2NnB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMDE2MTY7XG59XG4uamJtLXNpdGVtYXAtc2VjdGlvbiB1bCB1bDphZnRlciB7XG4gICAgZm9udC1mYW1pbHk6ICdGb250YXdlc29tZSc7XG4gICAgY29udGVudDogXCJcXGYxMTFcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNXB4O1xuICAgIGxlZnQ6IC02NXB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAycHg7XG4gICAgdGV4dC1pbmRlbnQ6IC01cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNhMDE2MTY7XG5cdGNvbG9yOiAjYTAxNjE2O1xufVxuLmpibS1zaXRlbWFwLXNlY3Rpb24gdWwgbGkgYSB7dHJhbnNpdGlvbjowLjNzIGVhc2UtaW4tb3V0OyB9XG4uamJtLXNpdGVtYXAtc2VjdGlvbiB1bCBsaSBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2EwMTYxNjtcbiAgICBjb2xvcjogI2ZmZjtcblx0dHJhbnNpdGlvbjowLjNzIGVhc2UtaW4tb3V0O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcbi5qYm0tc2l0ZW1hcC1zZWN0aW9uIHVsIGxpIGEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiA5cHggMTRweDtcblx0bWluLXdpZHRoOiAxMzBweDtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5qYm0tc2l0ZW1hcCB1bCB1bCBsaSBhIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiA5cHggMTRweDtcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xufVxuLmpibS1zaXRlbWFwLXNlY3Rpb24gdWwgbGkgYTpiZWZvcmUge1xuICAgdG9wOiAxNHB4O1xufVxuLmpibS1zaXRlbWFwLXNlY3Rpb24gdWwgbGkgYTphZnRlciB7XG4gICAgIHRvcDogMjBweDtcblx0IHdpZHRoOiAzMHB4O1xufVxuLmpibS1zaXRlbWFwLXNlY3Rpb24gdWwgdWw6YWZ0ZXIge1xuICAgIHRvcDogMjBweDtcblx0bGVmdDogLTI1cHg7XG4gICAgd2lkdGg6IDMwcHg7XG59XG4uamJtLXNpdGVtYXAtc2VjdGlvbiB1bCB1bCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuXHQgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG5cdH1cbn0iXX0= */"

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