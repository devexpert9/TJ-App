(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~about-us-about-us-module~blog-blog-module~blog-detail-blog-detail-module~cart-cart-module~ch~4cebd84d"],{

/***/ "./src/app/featured-products/featured-products.page.html":
/*!***************************************************************!*\
  !*** ./src/app/featured-products/featured-products.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6 col-md-4 col-sm-12\" *ngFor=\"let recent of featured_products \">\n\t<div class=\"product-item mb-30\">\n\t   <div class=\"product-thumb\">\n\t\t  <a (click)=\"productDetails(recent.product_id)\">\n\t\t\t<img *ngIf=\"errors.indexOf(recent.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t<img *ngIf=\"errors.indexOf(recent.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{recent.product_image}}\" alt=\"{{recent.product_name}}\">\n\t\t   </a> \n\t\t  <div class=\"box-label\">\n\t\t\t <div class=\"label-product label_new\" *ngIf=\"recent?.product_quantity == 0 || errors.indexOf(recent?.product_quantity) >= 0\">\n\t\t\t\t <span>Sold out</span>\n\t\t\t </div>\n\t\t\t <!--div class=\"label-product label_sale\">\n\t\t\t\t<span>-10%</span>\n\t\t\t </div-->\n\t\t  </div>\n\t\t  <!--div class=\"action-links\">\n\t\t\t <a href=\"javascript:void(0)\" title=\"Wishlist\" *ngIf=\"my_wish_products.indexOf(recent.product_id) == -1\" (click)=\"addToWish(recent.product_id)\"><i class=\"lnr lnr-heart\"></i></a>\n\t\t\t <a href=\"javascript:void(0)\" title=\"Added to Wishlist\" *ngIf=\"my_wish_products.indexOf(recent.product_id) >= 0\" color=\"darkblue\" add-to-cart title=\"Added\"><i class=\"lnr lnr-heart\"></i></a>\n\t\t\t\n\t\t\t\n\t\t\t <a href=\"javascript:void(0)\" title=\"Add to Cart\" [disabled]=\"recent?.product_quantity == 0 || errors.indexOf(recent?.product_quantity) >= 0\"  *ngIf=\"my_cart_products.indexOf(recent.product_id) == -1\" (click)=\"addToCart(recent.product_id,recent.product_sale_price,recent.product_purchase_price)\"><i class=\"lnr lnr-magnifier\"></i></a>\n\t\t  </div-->\n\t\t  <div class=\"action-links\">\n\t\t\t\t<ion-button class=\"bnt\" [disabled]=\"recent?.product_quantity == 0 || errors.indexOf(recent?.product_quantity) >= 0\"  *ngIf=\"my_cart_products.indexOf(recent.product_id) == -1\" (click)=\"addToCart(recent.product_id,recent.product_sale_price,recent.product_purchase_price)\" title=\"Add Cart\">\n\t\t\t \t\t<i class=\"lnr lnr-magnifier\"></i>\n\t\t\t  \t</ion-button>\n\t\t\t  \t\n\t\t\t  \t<ion-button class=\"bnt\" *ngIf=\"my_cart_products.indexOf(recent.product_id) >= 0\" add-to-cart title=\"Added\">\n\t\t\t \t\t<ion-icon name=\"checkmark-circle-outline\"></ion-icon> \n\t\t\t  \t</ion-button>\n\t\t\t   \t\n\t\t\t   \t<ion-button class=\"bnt\" *ngIf=\"my_wish_products.indexOf(recent.product_id) == -1\" (click)=\"addToWish(recent.product_id)\" title=\"Wishlist\">\n\t\t\t\t\t<i class=\"lnr lnr-heart\"></i>\n\t\t\t  \t</ion-button>\n\n\n\t\t  \t\t<ion-button class=\"bnt\" *ngIf=\"my_wish_products.indexOf(recent.product_id) >= 0\" add-to-cart title=\"Added\">\n\t\t\t \t\t<i class=\"red_heart fa fa-heart\"></i>\n\t\t\t  \t</ion-button>\n\t\t  </div>\n\t\t\t<!--ul list-unstyled>\n\t\t\t  <li add-cart-button btn-group>                             \n\t\t\t  <ion-button [disabled]=\"recent?.product_quantity == 0 || errors.indexOf(recent?.product_quantity) >= 0\"  *ngIf=\"my_cart_products.indexOf(recent.product_id) == -1\" (click)=\"addToCart(recent.product_id,recent.product_sale_price,recent.product_purchase_price)\" add-to-cart color=\"darkred\" title=\"Add Cart\">\n\t\t\t\t <ion-icon name=\"cart\"></ion-icon> \n\t\t\t  </ion-button>\n\t\t\t  <ion-button *ngIf=\"my_cart_products.indexOf(recent.product_id) >= 0\" add-to-cart color=\"darkred\" title=\"Added\">\n\t\t\t\t <ion-icon name=\"checkmark\"></ion-icon> \n\t\t\t  </ion-button>\n\t\t\t  </li>\n\t\t\t  <li lnk wishlist>\n\t\t\t  <ion-button *ngIf=\"my_wish_products.indexOf(recent.product_id) == -1\" (click)=\"addToWish(recent.product_id)\" color=\"darkblue\" add-to-cart title=\"Wishlist\">\n\t\t\t\t<ion-icon name=\"heart\"></ion-icon> \n\t\t\t  </ion-button>\n\t\t\t  <ion-button *ngIf=\"my_wish_products.indexOf(recent.product_id) >= 0\" color=\"darkblue\" add-to-cart title=\"Added\">\n\t\t\t\t <ion-icon red_heart name=\"heart\"></ion-icon> \n\t\t\t  </ion-button>  \n\t\t\t  </li>\n\t\t\t</ul--> \n\t   </div>\n\t   <div class=\"product-caption\">\n\t\t  <div class=\"manufacture-product\">\n\t\t\t <p><a href=\"javascript:void(0)\">apple</a></p>\n\t\t  </div>\n\t\t  <div class=\"product-name\">\n\t\t\t <h4><a (click)=\"productDetails(recent.product_id)\">{{recent.product_name}}</a></h4>\n\t\t  </div>\n\t\t  <div class=\"ratings\">\n\t\t\t<div rating rateit-small>\n\t\t\t\t<ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"recent?.Average_Review\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t   </div>\n\t\t  </div>\n\t\t  <div class=\"price-box\">\n\t\t\t <span class=\"regular-price\" *ngIf=\"errors.indexOf(recent.product_sale_price) == -1 && recent.product_sale_price != recent.product_purchase_price\" ><span class=\"special-price\">${{recent.product_sale_price}} </span></span>\n\t\t\t <span class=\"regular-price\" *ngIf=\"errors.indexOf(recent.product_sale_price) >= 0 || recent.product_sale_price == recent.product_purchase_price\">${{recent.product_purchase_price}}</span>\n\t\t\t <span class=\"old-price\" *ngIf=\"errors.indexOf(recent.product_sale_price) == -1 && recent.product_sale_price != recent.product_purchase_price\" ><del>${{recent.product_purchase_price}}</del></span>\n\t\t  </div>\n\t\t  <button class=\"btn-cart\" type=\"button\" [disabled]=\"recent?.product_quantity == 0 || errors.indexOf(recent?.product_quantity) >= 0\"  *ngIf=\"my_cart_products.indexOf(recent.product_id) == -1\" (click)=\"addToCart(recent.product_id,recent.product_sale_price,recent.product_purchase_price)\">add to cart</button>\n\t\t  <button class=\"btn-cart\" type=\"button\" *ngIf=\"my_cart_products.indexOf(recent.product_id) >= 0\">\n\t\t\t <ion-icon name=\"checkmark\"></ion-icon> \n\t\t  </button>\n\t   </div>\n\t</div>\n\t<!-- end single grid item -->\n </div>\n<!--div  class=\"ion-padding\">\n<ion-col class=\"ion-hide-md-down\" size-lg=\"12\" size-md=\"12\" size-sm=\"12\" size=\"12\" new-product *ngIf=\"featured_products != ''\">\n\t<ion-card id=\"product-tabs-slider\" scroll-tabs no-margin>\n\t\t  <div more-info-tab>\n\t\t\t<h3 new-product-title float-left>Featured Products</h3>\t \n\t\t  </div>\t   \n\t\t   <div product-slider> \n\t\t\t<ion-row padding>\n\t\t\t<ion-col>\n<owl-carousel\n     [options]=\"{items: 6, dots: false, nav:true, margin: 20, navigation: true}\"\n     [items]=\"featured_products\"\n     [carouselClasses]=\"['owl-theme', 'sliding']\">\n\t\t\t  <div size-lg=\"2\" size-md=\"3\" *ngFor=\"let recent of featured_products \">\t\n\t\t\t\t<div products>\n\t\t\t\t\t<div product>\n\t\t\t\t\t\t<div product-image>\n\t\t\t\t\t\t\t<div image> \n\t\t\t\t\t\t\t\t   <a (click)=\"productDetails(recent.product_id)\">\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(recent.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(recent.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{recent.product_image}}\" alt=\"{{recent.product_name}}\">\n\t\t\t\t\t\t\t\t   </a> \n\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t<div tag new *ngIf=\"recent?.product_quantity == 0 || errors.indexOf(recent?.product_quantity) >= 0\">\n\t\t\t\t\t\t\t   <span>Sold out</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div tag hot *ngIf=\"recent?.product_quantity != 0 && errors.indexOf(recent?.product_quantity) == -1\">\n\t\t\t\t\t\t\t   <span>featured</span>\n\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t</div>\n\t\t\t\t   <div product-info text-left>\n\t\t\t\t\t\t  <h3 name><a (click)=\"productDetails(recent.product_id)\">{{recent.product_name}}</a></h3>\n\t\t\t\t\t\t  <div rating rateit-small>\n\t\t\t\t\t\t   <ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"recent?.Average_Review\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t  <div description></div>\n\t\t\t\t\t\t  <div product-price> \n\t\t\t\t\t\t\t  <span *ngIf=\"errors.indexOf(recent.product_sale_price) == -1 && recent.product_sale_price != recent.product_purchase_price\" price> ${{recent.product_sale_price}}  </span> \n\n\t\t                      <span *ngIf=\"errors.indexOf(recent.product_sale_price) >= 0 || recent.product_sale_price == recent.product_purchase_price\" price> ${{recent.product_purchase_price}}  </span> \n\n\t\t                      <span *ngIf=\"errors.indexOf(recent.product_sale_price) == -1 && recent.product_sale_price != recent.product_purchase_price\" price-before-discount>${{recent.product_purchase_price}}</span>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t   <div cart>\n\t\t\t\t\t  <div action>\n\t\t\t\t\t\t<ul list-unstyled>\n\t\t\t\t\t\t  <li add-cart-button btn-group>                             \n\t\t\t\t\t\t  <ion-button [disabled]=\"recent?.product_quantity == 0 || errors.indexOf(recent?.product_quantity) >= 0\"  *ngIf=\"my_cart_products.indexOf(recent.product_id) == -1\" (click)=\"addToCart(recent.product_id,recent.product_sale_price,recent.product_purchase_price)\" add-to-cart color=\"darkred\" title=\"Add Cart\">\n\t\t\t\t\t\t\t <ion-icon name=\"cart\"></ion-icon> \n\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t  <ion-button *ngIf=\"my_cart_products.indexOf(recent.product_id) >= 0\" add-to-cart color=\"darkred\" title=\"Added\">\n\t\t\t\t\t\t\t <ion-icon name=\"checkmark\"></ion-icon> \n\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t  <li lnk wishlist>\n\t\t\t\t\t\t  <ion-button *ngIf=\"my_wish_products.indexOf(recent.product_id) == -1\" (click)=\"addToWish(recent.product_id)\" color=\"darkblue\" add-to-cart title=\"Wishlist\">\n\t\t\t\t\t\t \t<ion-icon name=\"heart\"></ion-icon> \n\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t  <ion-button *ngIf=\"my_wish_products.indexOf(recent.product_id) >= 0\" color=\"darkblue\" add-to-cart title=\"Added\">\n\t\t\t\t\t\t\t <ion-icon red_heart name=\"heart\"></ion-icon> \n\t\t\t\t\t\t  </ion-button>  \n\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p *ngIf=\"recent?.product_user_type != 'Admin'\" vendor-name>Sold by <a>{{recent.vendor_company}}</a></p>\n\t\t\t\t\t</div>\t\t\t\n\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t\t</owl-carousel> \n\t\t\t\t</ion-col>\n\t\t\t  </ion-row>\t\n\t\t\t</div>\t\n    </ion-card>\n\n</ion-col>\n\n<div mob-recently-viewed padding10 class=\"ion-hide-lg-up\"  style=\"background: url(assets/images/cat-bg.jpg) no-repeat top center/cover;\" *ngIf=\"featured_products != ''\">\n\t<h4 mob-head text-center text-uppercase>\n\tFeatured Products\n\t</h4> \n\t<ion-row>\n\t<ion-col>\n\t<owl-carousel\n     [options]=\"{items: 2, dots: false, nav:true, margin: 20, navigation: true}\"\n     [items]=\"featured_products\"\n     [carouselClasses]=\"['owl-theme', 'sliding']\">\n\t\t<div size-md=\"4\" size-sm=\"6\" size-xs=\"6\" size=\"12\" *ngFor=\"let recent of featured_products\">\n\t\t <ion-card  no-margin>\n\t        <img routerLink=\"/product-details/{{recent.product_id}}\" *ngIf=\"errors.indexOf(recent.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t<img routerLink=\"/product-details/{{recent.product_id}}\" *ngIf=\"errors.indexOf(recent.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{recent.product_image}}\" alt=\"{{recent.product_name}}\">\n\t\t  <ion-card-content>\n\t\t      <ion-row>\n                  <ion-col size=\"9\">\n                    <h2 routerLink=\"/product-details/{{recent.product_id}}\">{{recent.product_name}}</h2>\n                  </ion-col>\n                  <ion-col size=\"3\" *ngIf=\"errors.indexOf(recent.product_sale_price) == -1 && recent.product_sale_price != recent.product_purchase_price\">\n\t\t\t\t\t<ion-badge float-right color=\"darkgreymb\">\n                       {{(((recent.product_purchase_price-recent.product_sale_price)/recent.product_purchase_price)*100).toFixed(0)}}%\n\t\t\t\t\t</ion-badge> \n                  </ion-col>\n\t\t\t  \t    <ion-col size=\"12\">\n\t\t\t\t\t    <div rating>\n\t\t\t\t\t      <ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"recent?.Average_Review\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t </ion-col>\t \n\t\t      </ion-row>\n              <ion-row align-items-center>\n                  <ion-col size=\"9\">\n                      <div product-price> \n                        <span *ngIf=\"errors.indexOf(recent.product_sale_price) == -1 && recent.product_sale_price != recent.product_purchase_price\" price> ${{recent.product_sale_price}}  </span> \n\n\t                    <span *ngIf=\"errors.indexOf(recent.product_sale_price) >= 0 || recent.product_sale_price == recent.product_purchase_price\" price> ${{recent.product_purchase_price}}  </span> \n\n\t                    <span *ngIf=\"errors.indexOf(recent.product_sale_price) == -1 && recent.product_sale_price != recent.product_purchase_price\" price-before-discount>${{recent.product_purchase_price}}</span>\n                       </div>\n                  </ion-col>\n                  <ion-col size=\"3\" *ngIf=\"recent?.product_quantity != 0 && errors.indexOf(recent?.product_quantity) == -1\">\n                    <ion-buttons  float-right *ngIf=\"my_cart_products.indexOf(recent.product_id) == -1\" (click)=\"addToCart(recent.product_id,recent.product_sale_price,recent.product_purchase_price)\">\n                        <ion-icon name=\"cart\"></ion-icon>\n                    </ion-buttons>\n                    <ion-buttons float-right *ngIf=\"my_cart_products.indexOf(recent.product_id) >= 0\">\n                        <ion-icon name=\"checkmark\"></ion-icon>\n                    </ion-buttons>\n                  </ion-col>\n\t\t      </ion-row>\n\t\t  </ion-card-content>\n\t\t</ion-card>\n\t</div>\n\t</owl-carousel>\n\t</ion-col>\n\t<ion-col size=\"12\" text-center >\n\t\t<ion-button color=\"grey2\" routerLink=\"/products\" text-capitalize>View More\n\t\t</ion-button>\n\t</ion-col>\n\t</ion-row>\n</div>\n</div-->"

/***/ }),

/***/ "./src/app/featured-products/featured-products.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/featured-products/featured-products.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[vendor-info] p[vendor-name] {\n  font-size: var(--ion-font-size-13);\n  margin-bottom: var(--ion-margin-5);\n  margin-top: var(--ion-margin-10);\n  font-family: var(--ion-font-family-2);\n  color: var(--ion-color-darkblack); }\n  @media only screen and (max-width: 576px) {\n    [vendor-info] p[vendor-name] {\n      margin-bottom: var(--ion-margin-10); } }\n  [vendor-info] p[vendor-name] a {\n    color: var(--ion-color-darkred); }\n  [product-slider] [vendor-name] {\n  margin-bottom: var(--ion-margin-0); }\n  [product-slider] [vendor-name] a {\n    color: var(--ion-color-darkred);\n    text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMucGFnZS5zY3NzIiwiL2hvbWUvaW5kaS9Eb2N1bWVudHMvVEovc3JjL2FwcC9mZWF0dXJlZC1wcm9kdWN0cy9mZWF0dXJlZC1wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUNNTyxrQ0FBa0M7RUFDckMsa0NBQWtDO0VBQ2xDLGdDQUFnQztFQUNoQyxxQ0FBb0M7RUFDcEMsaUNBQWdDLEVBQUE7RUFDaEM7SURKQTtNQ01FLG1DQUFtQyxFQUFBLEVBTXRDO0VEVkQ7SUNRRywrQkFBOEIsRUFBQTtFRExuQztFQ2NNLGtDQUFpQyxFQUFBO0VEWnJDO0lDZUUsK0JBQStCO0lBQy9CLHFCQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW3ZlbmRvci1pbmZvXSBwW3ZlbmRvci1uYW1lXSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tNSk7XG4gIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMTApO1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIFt2ZW5kb3ItaW5mb10gcFt2ZW5kb3ItbmFtZV0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xMCk7IH0gfVxuICBbdmVuZG9yLWluZm9dIHBbdmVuZG9yLW5hbWVdIGEge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7IH1cblxuW3Byb2R1Y3Qtc2xpZGVyXSBbdmVuZG9yLW5hbWVdIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTsgfVxuICBbcHJvZHVjdC1zbGlkZXJdIFt2ZW5kb3ItbmFtZV0gYSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiIsIlt2ZW5kb3ItaW5mb11cbntcblx0cFxuXHR7XG5cdFx0Jlt2ZW5kb3ItbmFtZV1cblx0XHR7XG5cdFx0XHQgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi01KTtcblx0XHRcdFx0bWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0xMCk7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcdFxuXHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcblx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxuXHRcdFx0XHQge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xMCk7XG5cdFx0XHRcdCB9XG5cdFx0XHRcdGFcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcblx0XHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5bcHJvZHVjdC1zbGlkZXJdIFxue1xuICAgW3ZlbmRvci1uYW1lXSBcbiAgIHsgIG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi0wKTtcblx0XHQgICBhXG5cdFx0ICAge1xuXHRcdFx0IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG5cdFx0XHQgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdFx0ICAgfVxuICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/featured-products/featured-products.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/featured-products/featured-products.page.ts ***!
  \*************************************************************/
/*! exports provided: FeaturedProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedProductsPage", function() { return FeaturedProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FeaturedProductsPage = /** @class */ (function () {
    function FeaturedProductsPage(userService, toastController, loadingController, events, router) {
        var _this = this;
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
        events.subscribe('wishlist:true', function (data) {
            _this.getCartProductsIds();
        });
    }
    FeaturedProductsPage.prototype.ngOnInit = function () {
    };
    FeaturedProductsPage.prototype.getCartProductsIds = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId }, 'getCartProductsIds').subscribe(function (result) {
            _this.my_cart_products = result.products;
            _this.my_wish_products = result.wishlist;
            _this.getFeaturedProducts();
        }, function (err) {
            _this.getFeaturedProducts();
            _this.my_cart_products = [];
            _this.my_wish_products = [];
        });
    };
    FeaturedProductsPage.prototype.getFeaturedProducts = function () {
        var _this = this;
        this.userService.postData({ limit: '15' }, 'featuredProducts').subscribe(function (result) {
            _this.featured_products = result.products;
        }, function (err) {
            _this.featured_products = [];
        });
    };
    FeaturedProductsPage.prototype.addToCart = function (product_id, product_sale_price, product_purchase_price) {
        var _this = this;
        if (localStorage.getItem('sin_auth_token') == '') {
            this.router.navigate(['/login']);
        }
        else {
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
        }
    };
    FeaturedProductsPage.prototype.addToWish = function (product_id) {
        var _this = this;
        if (localStorage.getItem('sin_auth_token') == '') {
            this.router.navigate(['/login']);
        }
        else {
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
        }
    };
    FeaturedProductsPage.prototype.productDetails = function (productId) {
        this.router.navigate(['/product-details/' + productId]);
    };
    FeaturedProductsPage.prototype.presentToast = function (message, color) {
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
    FeaturedProductsPage.prototype.presentLoading = function () {
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
    FeaturedProductsPage.prototype.stopLoading = function () {
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
    FeaturedProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-featured-products',
            template: __webpack_require__(/*! ./featured-products.page.html */ "./src/app/featured-products/featured-products.page.html"),
            styles: [__webpack_require__(/*! ./featured-products.page.scss */ "./src/app/featured-products/featured-products.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FeaturedProductsPage);
    return FeaturedProductsPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~about-us-about-us-module~blog-blog-module~blog-detail-blog-detail-module~cart-cart-module~ch~4cebd84d.js.map