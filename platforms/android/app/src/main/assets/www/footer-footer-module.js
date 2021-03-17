(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["footer-footer-module"],{

/***/ "./src/app/footer/footer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/*! exports provided: FooterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPageModule", function() { return FooterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _footer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer.page */ "./src/app/footer/footer.page.ts");







var routes = [
    {
        path: '',
        component: _footer_page__WEBPACK_IMPORTED_MODULE_6__["FooterPage"]
    }
];
var FooterPageModule = /** @class */ (function () {
    function FooterPageModule() {
    }
    FooterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [],
            exports: []
        })
    ], FooterPageModule);
    return FooterPageModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.page.html":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- footer area start -->  \n      <footer  class=\"ion-hide-md-down\">\n         <!-- footer top area start -->\n         <div class=\"footer-top pt-50 pb-50\">\n            <div class=\"container-fluid\">\n               <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                     <div class=\"footer-single-widget\">\n                        <div class=\"widget-title \">\n                           <div class=\"footer-logo mb-5\">\n                              <a href=\"javascript:void(0)\">\n                              <img src=\"assets/img/footer-logo.png\" alt=\"\">\n                              </a>\n                           </div>\n                        </div>\n                        <div class=\"widget-body\">\n                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br>Lorem Ipsum has been the industry's standard dummy text </p>\n                           <div class=\"payment-method\">\n                              <h4>payment</h4>\n                              <img src=\"assets/img/payment/payment.png\" alt=\"\">\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n                  <!-- single widget end -->\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                     <div class=\"row\">\n                        <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                           <div class=\"footer-single-widget\">\n                              <div class=\"widget-title\">\n                                 <h4>Quick Links</h4>\n                              </div>\n                              <div class=\"widget-body\">\n                                 <div class=\"footer-useful-link\">\n                                    <ul>\n                                       <li><a href=\"javascript:void(0)\" routerLink=\"/about-us\" >About us</a></li>\n                                       <li><a href=\"javascript:void(0)\" >Privacy Policy</a></li>\n                                       <li><a href=\"javascript:void(0)\">Terms & Conditions</a></li>\n                                       <li><a href=\"javascript:void(0)\">Contact Us</a></li>\n                                       <li><a href=\"javascript:void(0)\">Returns</a></li>\n                                    </ul>\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                        <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                           <div class=\"footer-single-widget\">\n                              <div class=\"widget-title\">\n                                 <h4>Information</h4>\n                              </div>\n                              <div class=\"widget-body\">\n                                 <div class=\"footer-useful-link\">\n                                    <ul>\n                                       <li><a href=\"javascript:void(0)\" >Shop</a></li>\n                                       <li><a href=\"javascript:void(0)\" >Delivery Information</a></li>\n                                       <li><a href=\"javascript:void(0)\">Cart</a></li>\n                                       <li><a href=\"javascript:void(0)\">Checkout</a></li>\n                                       <li *ngIf=\"is_logged_in == true\" ><a routerLink=\"/your-account\" href=\"javascript:void(0)\">My Account</a></li>\n                                    </ul>\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                        <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                           <div class=\"footer-single-widget\">\n                              <div class=\"widget-title\">\n                                 <h4>Categories</h4>\n                              </div>\n                              <div class=\"widget-body\">\n                                 <div class=\"footer-useful-link\">\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let cat of all_categories; let first = first; let last = last \" >\n\t\t\t\t\t\t\t\t\t\t  <li class=\"{{(first == true ? 'first' : (last == true ? 'last' : ''))}}\"><a title=\"\" (click)=\"productDetails(cat.cat_id,'')\">{{cat.cat_name}}</a></li>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t</ul>\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n                  <!-- single widget end -->\n               </div>\n            </div>\n         </div>\n         <!-- footer top area end -->\n         <!-- footer bottom area start -->\n         <div class=\"footer-bottom\">\n            <div class=\"container-fluid\">\n               <div class=\"row\">\n                  <div class=\"col-12\">\n                     <div class=\"footer-bottom-content\">\n                        <div class=\"footer-copyright\">\n                           <p>Copyright © 2021. All Right Reserved</p>\n                        </div>\n                        <div class=\"footer-custom-link\">\n                           <a href=\"javascript:void(0)\">Return Policy</a>\n                           <a href=\"javascript:void(0)\" >Privacy Policy</a>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n         <!-- footer bottom area end -->\n      </footer>"

/***/ }),

/***/ "./src/app/footer/footer.page.scss":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/footer/footer.page.ts":
/*!***************************************!*\
  !*** ./src/app/footer/footer.page.ts ***!
  \***************************************/
/*! exports provided: FooterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPage", function() { return FooterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FooterPage = /** @class */ (function () {
    function FooterPage(userService, router) {
        this.userService = userService;
        this.router = router;
        this.getCategories();
        this.getSocialInfo();
    }
    FooterPage.prototype.ngOnInit = function () {
    };
    FooterPage.prototype.getCategories = function () {
        var _this = this;
        this.userService.getData('getCategories').subscribe(function (result) {
            _this.all_categories = result.categories;
        }, function (err) {
            console.log('api error');
        });
    };
    FooterPage.prototype.getSocialInfo = function () {
        var _this = this;
        this.userService.postData({}, 'socialLinks').subscribe(function (result) {
            console.log(result);
            _this.socialLinks = result.socialLinks;
        }, function (err) {
            console.log('api error');
        });
    };
    FooterPage.prototype.productDetails = function (catId, subcatId) {
        this.router.navigate(['/products'], { queryParams: { cat: catId, subcat: subcatId } });
    };
    FooterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.page.html */ "./src/app/footer/footer.page.html"),
            styles: [__webpack_require__(/*! ./footer.page.scss */ "./src/app/footer/footer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FooterPage);
    return FooterPage;
}());



/***/ })

}]);
//# sourceMappingURL=footer-footer-module.js.map