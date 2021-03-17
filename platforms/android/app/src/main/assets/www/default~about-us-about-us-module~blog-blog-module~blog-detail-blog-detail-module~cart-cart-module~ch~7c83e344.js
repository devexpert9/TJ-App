(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~about-us-about-us-module~blog-blog-module~blog-detail-blog-detail-module~cart-cart-module~ch~7c83e344"],{

/***/ "./src/app/upsell-products/upsell-products.page.html":
/*!***********************************************************!*\
  !*** ./src/app/upsell-products/upsell-products.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"ion-padding\">\n<ion-col class=\"ion-margin-top ion-hide-md-down\" size-lg=\"12\" size-md=\"12\" size-sm=\"12\" size=\"12\" new-product best-sellers *ngIf=\"upsell_products != ''\">\n\t<ion-card id=\"product-tabs-slider\" scroll-tabs no-margin>\n\t\t  <div more-info-tab>\n\t\t\t<h3 new-product-title float-left>Upsell Products</h3>\t \n\t\t  </div>\t   \n\t\t   <div product-slider> \n\t\t\t<ion-row padding>\n\t\t\t<ion-col>\n\t\t\t  <owl-carousel\n     [options]=\"{items: 6, dots: false, nav:true, margin: 20, navigation: true}\"\n     [items]=\"upsell_products\"\n     [carouselClasses]=\"['owl-theme', 'sliding']\">\n\t\t\t  <div size-lg=\"2\" size-md=\"3\" *ngFor=\"let recent of upsell_products \">\t\n\t\t\t\t<div products>\n\t\t\t\t\t<div product>\n\t\t\t\t\t\t<div product-image>\n\t\t\t\t\t\t\t<div image> \n\t\t\t\t\t\t\t\t   <a (click)=\"productDetails(recent?.product_id)\">\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(recent?.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(recent?.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{recent?.product_image}}\" alt=\"{{recent?.product_name}}\">\n\t\t\t\t\t\t\t\t   </a> \n\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t<div tag new *ngIf=\"recent?.product_quantity == 0 || errors.indexOf(recent?.product_quantity) >= 0\">\n\t\t\t\t\t\t\t   <span>Sold out</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div tag hot *ngIf=\"recent?.product_quantity != 0 && errors.indexOf(recent?.product_quantity) == -1\">\n\t\t\t\t\t\t\t   <span>new</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div tag hot>\n\t\t\t\t\t\t\t   <span>hot</span>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t   <div product-info text-left>\n\t\t\t\t\t\t  <h3 name><a (click)=\"productDetails(recent?.product_id)\">{{recent?.product_name}}</a></h3>\n\t\t\t\t\t\t  <div rating rateit-small>\n\t\t\t\t\t\t   <ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"recent?.Average_Review\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t  <div description></div>\n\t\t\t\t\t\t  <div product-price> \n\t\t\t\t\t\t\t  <span *ngIf=\"errors.indexOf(recent?.product_sale_price) == -1 && recent?.product_sale_price != recent?.product_purchase_price\" price> ${{recent?.product_sale_price}}  </span> \n\n\t\t                      <span *ngIf=\"errors.indexOf(recent?.product_sale_price) >= 0 || recent?.product_sale_price == recent?.product_purchase_price\" price> ${{recent?.product_purchase_price}}  </span> \n\n\t\t                      <span *ngIf=\"errors.indexOf(recent?.product_sale_price) == -1 && recent?.product_sale_price != recent?.product_purchase_price\" price-before-discount>${{recent?.product_purchase_price}}</span>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t   <div cart>\n\t\t\t\t\t  <div action>\n\t\t\t\t\t\t<ul list-unstyled>\n\t\t\t\t\t\t  <li add-cart-button btn-group>                             \n\t\t\t\t\t\t  <ion-button [disabled]=\"recent?.product_quantity == 0 || errors.indexOf(recent?.product_quantity) >= 0\"  *ngIf=\"my_cart_products.indexOf(recent?.product_id) == -1\" (click)=\"addToCart(recent?.product_id,recent?.product_sale_price,recent?.product_purchase_price)\" add-to-cart color=\"darkred\" title=\"Add Cart\">\n\t\t\t\t\t\t\t <ion-icon name=\"cart\"></ion-icon> \n\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t  <ion-button *ngIf=\"my_cart_products.indexOf(recent?.product_id) >= 0\" add-to-cart color=\"darkred\" title=\"Added\">\n\t\t\t\t\t\t\t <ion-icon name=\"checkmark\"></ion-icon> \n\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t  <li lnk wishlist>\n\t\t\t\t\t\t  <ion-button *ngIf=\"my_wish_products.indexOf(recent?.product_id) == -1\" (click)=\"addToWish(recent?.product_id)\" color=\"darkblue\" add-to-cart title=\"Wishlist\">\n\t\t\t\t\t\t \t<ion-icon name=\"heart\"></ion-icon> \n\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t  <ion-button *ngIf=\"my_wish_products.indexOf(recent?.product_id) >= 0\" color=\"darkblue\" add-to-cart title=\"Added\">\n\t\t\t\t\t\t\t <ion-icon red_heart name=\"heart\"></ion-icon> \n\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p *ngIf=\"recent?.product_user_type != 'Admin'\" vendor-name>Sold by <a>{{recent?.vendor_company}}</a></p>\n\t\t\t\t\t</div>\t\t\t\n\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t\t</owl-carousel>\n\t\t\t\t</ion-col>  \n\t\t\t  </ion-row>\t\n\t\t\t</div>\t\n    </ion-card>\n</ion-col>\n\n<div mob-recently-viewed padding10 class=\"ion-hide-lg-up\" *ngIf=\"upsell_products != ''\">\n\t<h4 mob-head text-center text-uppercase>\n\tBest  Seller\n\t</h4> \n\t<ion-row>\n\t<ion-col>\n\t<owl-carousel\n     [options]=\"{items: 2, dots: false, nav:true, margin: 20, navigation: true}\"\n     [items]=\"upsell_products\"\n     [carouselClasses]=\"['owl-theme', 'sliding']\">\n\t\t<div size-md=\"4\" size-sm=\"6\" size-xs=\"6\" size=\"12\" *ngFor=\"let recent of upsell_products\">\n\t\t\t <ion-card  no-margin>\n\t\t        <img routerLink=\"/product-details/{{recent?.product_id}}\" *ngIf=\"errors.indexOf(recent?.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t<img routerLink=\"/product-details/{{recent?.product_id}}\" *ngIf=\"errors.indexOf(recent?.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{recent?.product_image}}\" alt=\"{{recent?.product_name}}\">\n\t\t\t  <ion-card-content>\n\t\t\t      <ion-row>\n\t                  <ion-col size=\"9\">\n\t                    <h2 routerLink=\"/product-details/{{recent?.product_id}}\">{{recent?.product_name}}</h2>\n\t                  </ion-col>\n\t                  <ion-col size=\"3\" *ngIf=\"errors.indexOf(recent?.product_sale_price) == -1 && recent?.product_sale_price != recent?.product_purchase_price\">\n\t\t\t\t\t\t<ion-badge float-right color=\"darkgreymb\">\n\t                       {{(((recent?.product_purchase_price-recent?.product_sale_price)/recent?.product_purchase_price)*100).toFixed(0)}}%\n\t\t\t\t\t\t</ion-badge> \n\t                  </ion-col>\n\t\t\t\t  \t    <ion-col size=\"12\">\n\t\t\t\t\t\t    <div rating>\n\t\t\t\t\t\t      <ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"recent?.Average_Review\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t </ion-col>\t \n\t\t\t      </ion-row>\n\t              <ion-row align-items-center>\n\t                  <ion-col size=\"9\">\n\t                      <div product-price> \n\t                        <span *ngIf=\"errors.indexOf(recent?.product_sale_price) == -1 && recent?.product_sale_price != recent?.product_purchase_price\" price> ${{recent?.product_sale_price}}  </span> \n\n\t\t                    <span *ngIf=\"errors.indexOf(recent?.product_sale_price) >= 0 || recent?.product_sale_price == recent?.product_purchase_price\" price> ${{recent?.product_purchase_price}}  </span> \n\n\t\t                    <span *ngIf=\"errors.indexOf(recent?.product_sale_price) == -1 && recent?.product_sale_price != recent?.product_purchase_price\" price-before-discount>${{recent?.product_purchase_price}}</span>\n\t                       </div>\n\t                  </ion-col>\n\t                  <ion-col size=\"3\" *ngIf=\"recent?.product_quantity != 0 && errors.indexOf(recent?.product_quantity) == -1\">\n\t                    <ion-buttons float-right *ngIf=\"my_cart_products.indexOf(recent?.product_id) == -1\" (click)=\"addToCart(recent?.product_id,recent?.product_sale_price,recent?.product_purchase_price)\">\n\t                        <ion-icon name=\"cart\"></ion-icon>\n\t                    </ion-buttons>\n\t                    <ion-buttons float-right *ngIf=\"my_cart_products.indexOf(recent?.product_id) >= 0\">\n\t                        <ion-icon name=\"checkmark\"></ion-icon>\n\t                    </ion-buttons>\n\t                  </ion-col>\n\t\t\t      </ion-row>\n\t\t\t  </ion-card-content>\n\t\t\t</ion-card>\n\t\t</div>\n\t\t</owl-carousel>\n\t\t</ion-col>\n\t\t<ion-col size=\"12\" text-center >\n\t\t\t<ion-button color=\"grey2\" routerLink=\"/products\" text-capitalize>View More\n\t\t\t</ion-button>\n\t\t</ion-col>\n\t</ion-row>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/upsell-products/upsell-products.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/upsell-products/upsell-products.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[vendor-info] p[vendor-name] {\n  font-size: var(--ion-font-size-13);\n  margin-bottom: var(--ion-margin-5);\n  margin-top: var(--ion-margin-10);\n  font-family: var(--ion-font-family-2);\n  color: var(--ion-color-darkblack); }\n  @media only screen and (max-width: 576px) {\n    [vendor-info] p[vendor-name] {\n      margin-bottom: var(--ion-margin-10); } }\n  [vendor-info] p[vendor-name] a {\n    color: var(--ion-color-darkred); }\n  [product-slider] [vendor-name] {\n  margin-bottom: var(--ion-margin-0); }\n  [product-slider] [vendor-name] a {\n    color: var(--ion-color-darkred);\n    text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBzZWxsLXByb2R1Y3RzL3Vwc2VsbC1wcm9kdWN0cy5wYWdlLnNjc3MiLCIvaG9tZS9pbmRpL0RvY3VtZW50cy9kb2N1L3RqL3NyYy9hcHAvdXBzZWxsLXByb2R1Y3RzL3Vwc2VsbC1wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUNNTyxrQ0FBa0M7RUFDckMsa0NBQWtDO0VBQ2xDLGdDQUFnQztFQUNoQyxxQ0FBb0M7RUFDcEMsaUNBQWdDLEVBQUE7RUFDaEM7SURKQTtNQ01FLG1DQUFtQyxFQUFBLEVBTXRDO0VEVkQ7SUNRRywrQkFBOEIsRUFBQTtFRExuQztFQ2NNLGtDQUFpQyxFQUFBO0VEWnJDO0lDZUUsK0JBQStCO0lBQy9CLHFCQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXBzZWxsLXByb2R1Y3RzL3Vwc2VsbC1wcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbdmVuZG9yLWluZm9dIHBbdmVuZG9yLW5hbWVdIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi01KTtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0xMCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTsgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgW3ZlbmRvci1pbmZvXSBwW3ZlbmRvci1uYW1lXSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTEwKTsgfSB9XG4gIFt2ZW5kb3ItaW5mb10gcFt2ZW5kb3ItbmFtZV0gYSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTsgfVxuXG5bcHJvZHVjdC1zbGlkZXJdIFt2ZW5kb3ItbmFtZV0ge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTApOyB9XG4gIFtwcm9kdWN0LXNsaWRlcl0gW3ZlbmRvci1uYW1lXSBhIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuIiwiW3ZlbmRvci1pbmZvXVxue1xuXHRwXG5cdHtcblx0XHQmW3ZlbmRvci1uYW1lXVxuXHRcdHtcblx0XHRcdCAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTUpO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTEwKTtcblx0XHRcdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1x0XG5cdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xuXHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXG5cdFx0XHRcdCB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTEwKTtcblx0XHRcdFx0IH1cblx0XHRcdFx0YVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuXHRcdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbltwcm9kdWN0LXNsaWRlcl0gXG57XG4gICBbdmVuZG9yLW5hbWVdIFxuICAgeyAgbWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLTApO1xuXHRcdCAgIGFcblx0XHQgICB7XG5cdFx0XHQgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcblx0XHRcdCB0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0XHQgICB9XG4gICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/upsell-products/upsell-products.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/upsell-products/upsell-products.page.ts ***!
  \*********************************************************/
/*! exports provided: UpsellProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpsellProductsPage", function() { return UpsellProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UpsellProductsPage = /** @class */ (function () {
    function UpsellProductsPage(userService, toastController, loadingController, events, router) {
        this.userService = userService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.events = events;
        this.router = router;
        this.errors = ['', null, undefined];
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_4__["config"].IMAGES_URL;
        var token = localStorage.getItem('sin_auth_token');
        this.userId = this.userService.decryptData(token, _config__WEBPACK_IMPORTED_MODULE_4__["config"].ENC_SALT);
        this.getCartProductsIds();
    }
    UpsellProductsPage.prototype.ngOnInit = function () {
    };
    UpsellProductsPage.prototype.getCartProductsIds = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId }, 'getCartProductsIds').subscribe(function (result) {
            _this.my_cart_products = result.products;
            _this.my_wish_products = result.wishlist;
            _this.getUpsellProducts();
        }, function (err) {
            _this.getUpsellProducts();
            _this.my_cart_products = [];
            _this.my_wish_products = [];
        });
    };
    UpsellProductsPage.prototype.getUpsellProducts = function () {
        var _this = this;
        this.userService.postData({ limit: '15', user_id: this.userId }, 'bestSellerProducts').subscribe(function (result) {
            _this.upsell_products = result.products;
        }, function (err) {
            _this.upsell_products = [];
        });
    };
    UpsellProductsPage.prototype.addToCart = function (product_id, product_sale_price, product_purchase_price) {
        var _this = this;
        // if(this.userId == 0){
        // 	this.router.navigate(['/login']);
        // }
        // else{
        this.presentLoading();
        this.userService.postData({ product_id: product_id, user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId, product_qty: 1, is_variation: false, product_price: 0, product_variations: [] }, 'addTocart').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.my_cart_products.push(product_id);
                var p_price;
                if (_this.errors.indexOf(product_sale_price) == -1 && product_sale_price != product_purchase_price) {
                    p_price = product_sale_price;
                }
                else {
                    p_price = product_purchase_price;
                }
                // this.getUpsellProducts();
                _this.events.publish('cart_updated:true', { items_in_cart: _this.my_cart_products.length, cart_price: p_price, isAdd: true });
                _this.presentToast('Product added to cart.', 'success');
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
        // }
    };
    UpsellProductsPage.prototype.addToWish = function (product_id) {
        var _this = this;
        // if(this.userId == 0){
        //   this.router.navigate(['/login']);
        // }
        // else{
        this.presentLoading();
        this.userService.postData({ product_id: product_id, user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId, wish_title: null, is_new: this.userId == 0 ? 3 : 0, wishlist_id: null }, 'addWishlistNew').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.my_wish_products.push(product_id);
                _this.presentToast('Product added to wishlist.', 'success');
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
        // }
    };
    UpsellProductsPage.prototype.productDetails = function (productId) {
        this.router.navigate(['/product-details/' + productId]);
    };
    UpsellProductsPage.prototype.presentToast = function (message, color) {
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
    UpsellProductsPage.prototype.presentLoading = function () {
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
    UpsellProductsPage.prototype.stopLoading = function () {
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
    UpsellProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upsell-products',
            template: __webpack_require__(/*! ./upsell-products.page.html */ "./src/app/upsell-products/upsell-products.page.html"),
            styles: [__webpack_require__(/*! ./upsell-products.page.scss */ "./src/app/upsell-products/upsell-products.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UpsellProductsPage);
    return UpsellProductsPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~about-us-about-us-module~blog-blog-module~blog-detail-blog-detail-module~cart-cart-module~ch~7c83e344.js.map