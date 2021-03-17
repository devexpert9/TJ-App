(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["your-account-your-account-module"],{

/***/ "./src/app/your-account/your-account.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/your-account/your-account.module.ts ***!
  \*****************************************************/
/*! exports provided: YourAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourAccountPageModule", function() { return YourAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _your_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./your-account.page */ "./src/app/your-account/your-account.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _your_account_page__WEBPACK_IMPORTED_MODULE_6__["YourAccountPage"]
    }
];
var YourAccountPageModule = /** @class */ (function () {
    function YourAccountPageModule() {
    }
    YourAccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_your_account_page__WEBPACK_IMPORTED_MODULE_6__["YourAccountPage"]]
        })
    ], YourAccountPageModule);
    return YourAccountPageModule;
}());



/***/ }),

/***/ "./src/app/your-account/your-account.page.html":
/*!*****************************************************!*\
  !*** ./src/app/your-account/your-account.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content  #content>\n<div class=\"ion-padding\">\n<div header_height></div>\n<div class=\"container\">\n\n<div breadcrumb  class=\"ion-hide-md-down\">\t\t  \n<div breadcrumb-inner>\n<ul list-inline list-unstyled>\n<li><a routerLink=\"/home\">Home</a></li>\n<li class=\"active\">  Your Account</li>\n</ul>\n</div>\n</div> \n<!-- Breadcrumb Ends -->\n\n<ion-row  your-account>\n<!--  Title Start -->\n<!--ion-col size-lg=\"12\" size-md=\"12\" size-sm=\"12\" size=\"12\" account-title  class=\"ion-hide-md-down\" no-padding>\n<h5 head-account>YOUR ACCOUNT</h5>\n</ion-col-->\n<!--  Title End--> \n<!--   ACCOUNT Start -->\n<ion-col size-lg=\"12\" size-md=\"12\" size-sm=\"12\" size=\"12\" no-padding>\t\t \n<div product-tabs> \n<ion-segment  [(ngModel)]=\"tabs\" >\n<ion-segment-button value=\"profile\">\n<ion-label class=\"ion-hide-md-down\">Profile</ion-label>\n<ion-icon name=\"person\"  class=\"ion-hide-lg-up\"></ion-icon>\n</ion-segment-button>\n<ion-segment-button value=\"Orders\" class=\"ion-hide-md-down\">\n<ion-label  class=\"ion-hide-md-down\">Your Orders</ion-label>\n<ion-icon name=\"cart\" class=\"ion-hide-lg-up\"></ion-icon>\n</ion-segment-button>\n\n<ion-segment-button value=\"Registry\" class=\"ion-hide-md-down\">\n<ion-label  class=\"ion-hide-md-down\">Registries</ion-label>\n<ion-icon name=\"cart\" class=\"ion-hide-lg-up\"></ion-icon>\n</ion-segment-button>\n\n<ion-segment-button value=\"payment\">\n<ion-label  class=\"ion-hide-md-down\">Payment Options</ion-label>\n<ion-icon name=\"cash\" class=\"ion-hide-lg-up\"></ion-icon>\n</ion-segment-button>\n<ion-segment-button value=\"addresses\">\n<ion-label  class=\"ion-hide-md-down\">Your Addresses</ion-label>\n<ion-icon name=\"pin\" class=\"ion-hide-lg-up\"></ion-icon>\n</ion-segment-button>\t\t\t\t\t\t\t\t\t\t   \n<ion-segment-button value=\"login\">\n<ion-label  class=\"ion-hide-md-down\">Login Details</ion-label>\n<ion-icon name=\"information-circle-outline\" class=\"ion-hide-lg-up\"></ion-icon>\n</ion-segment-button>\n<ion-segment-button value=\"messages\" class=\"ion-hide-md-down\">\n<ion-label  class=\"ion-hide-md-down\">Messages</ion-label>\n<ion-icon name=\"chatbubbles\" class=\"ion-hide-lg-up\"></ion-icon>\n</ion-segment-button>\n<a link-notification float-right class=\"ion-hide-md-down\">\n<!-- Notifications -->\n</a>\t\t\t\t\t\t\t\t\t\t\t   \n</ion-segment>\n<div  tab-content [ngSwitch]=\"tabs\">\n<ion-list *ngSwitchCase=\"'profile'\">\n<div product-tab class=\"table-responsive\">\n<h5 head-account class=\"ion-hide-md-down\">YOUR PROFILE \n<span  (click)=\"editProfile()\" class=\"btn btn-success btn-sm add-payment-btn\" float-right>\nEdit \n</span>      \n</h5>\n<div class=\"media\">\n<ion-row>\n<ion-col size-lg=\"2\" size-sm=\"12\" size-md=\"12\" size=\"12\">\n<div float-left class=\"media-link\">\n<div class=\"media-object img-bg\">\n<img *ngIf=\"errors.indexOf(profile?.profile_picture) >= 0\" src=\"assets/images/default.png\">\n<img *ngIf=\"errors.indexOf(profile?.profile_picture) == -1\" src=\"{{IMAGES_URL}}/userprofile/{{profile?.profile_picture}}\">\n<div img-edit class=\"\">\n<label for=\"user-img\"><ion-icon name=\"camera\"></ion-icon></label>\n<!-- ng2FileSelect [uploader]=\"uploader\" -->\n<input (change)=\"uploadImg($event)\" id=\"user-img\" type=\"file\" style=\"display:none\"/>\n</div>\n</div>\t\n<p name-user text-center class=\"ion-hide-lg-up\">{{profile?.name}} {{profile?.last_name}}</p>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n</div>\n</ion-col>\n<ion-col size-lg=\"10\" size-sm=\"12\" size-md=\"12\" size=\"12\">\n<div class=\"media-body\">\n<ion-list class=\"ion-hide-lg-up\" no-margin>\n<ion-item lines=\"none\" class=\"ion-hide-md-down\">\n<ion-label><b>First Name</b> <span float-right>{{profile?.name}}</span></ion-label>\n</ion-item>\n<ion-item lines=\"none\"  class=\"ion-hide-md-down\">\n<ion-label><b>Last Name</b> <span float-right>{{profile?.last_name}} </span></ion-label>\n</ion-item>\n<ion-item lines=\"none\">\n<ion-label><b>Email</b> <span float-right>{{profile?.email}} </span></ion-label>\n</ion-item> \n<ion-item lines=\"none\">\n<ion-label><b>Contact No</b> <span float-right>{{profile?.phone}} </span></ion-label>\n</ion-item>\n<ion-item lines=\"none\">\n<ion-label><b>Address</b> <span float-right>{{profile?.address}}</span></ion-label>\n</ion-item>\n<ion-item lines=\"none\">\n<ion-label><b>City</b> <span float-right>{{profile?.city}}</span></ion-label>\n</ion-item>\n<ion-item lines=\"none\">\n<ion-label><b>State</b> <span float-right>{{profile?.state}}</span></ion-label>\n</ion-item>\n<ion-item lines=\"none\">\n<ion-label><b>Country</b> <span float-right>{{profile?.country_name}}</span></ion-label>\n</ion-item>\n<ion-item lines=\"none\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t     \n<ion-button size=\"small\" (click)=\"editProfile()\" color=\"darkred\"><ion-icon name=\"create\"></ion-icon>Edit</ion-button>\n</ion-item>\t \n</ion-list>\n<table class=\"table table-condensed ion-hide-md-down\">\n<tbody><tr>\n<td><b>First Name</b></td>\n<td align=\"left\">{{profile?.name}}</td>\n<td><b>Last Name</b></td>\n<td>{{profile?.last_name}}</td>\n</tr>\n<tr>\n<td><b>Email</b></td>\n<td>{{profile?.email}}</td>\n<td><b>Contact No</b></td>\n<td>{{profile?.phone}}</td>\n</tr>\n<tr>\n<td><b>Address</b></td>\n<td>{{profile?.address}}</td>\n<td><b>City</b></td>\n<td>{{profile?.city}}</td>\n</tr>\n<tr>\n<td><b>State</b></td>\n<td>{{profile?.state}}</td>\n<td><b>Country</b></td>\n\n<td>{{profile?.country_name}}</td>\n</tr>\n</tbody>\n</table>\n</div>\n</ion-col>\n<ion-col  size-md=\"6\" size=\"12\" class=\"ion-hide-md-down\">\n<h3 block-title><span>Purchase Summary</span></h3>\n<div class=\"widget widget-categories\">\n<ul profile_ul>\n<li><a>Total Purchase: <b *ngIf=\"purchase_All != null\">${{purchase_All.toFixed(2)}}</b></a></li>\n<li><a>Last 7 Days: <b *ngIf=\"purchase_days7 != null\">${{purchase_days7.toFixed(2)}}</b></a></li>\n<li><a>Last 30 Days: <b *ngIf=\"purchase_days30 != null\">${{purchase_days30.toFixed(2)}}</b></a></li>\n</ul>\n</div>\n</ion-col>\n<ion-col  size-md=\"6\" size=\"12\" class=\"ion-hide-md-down\">\n<h3 block-title><span>Others Info</span></h3>\n<div class=\"widget widget-categories\">\n<ul profile_ul>\n<li><a>Wished Products: <b>{{my_wish_products?.length}}</b></a></li>\n<li><a>User Since: <b>{{user_created_at | date : 'd MMM, y'}}</b></a></li>\n<li><a>Last Login: <b>{{user_last_login | date : 'd MMM, y'}}</b></a></li>\n</ul>\n</div>\n</ion-col>\n</ion-row>\t\t\n</div>                              \n</div>\n<!-- Edit Profile Start -->\n<div panel panel-default   *ngIf=\"buttonClicked\" >\n<div panel-heading  account-head>\n<h4>\n<a href=\"javascript:void(0)\">\n<span><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span>  Edit Profile Details\n</a>\n</h4>\t\t\t\t\t \n</div>\n<div panel-body>\n<!-- <form class=\"register-form\"> -->\n<ion-row>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">First Name *</ion-label>\n<ion-input [(ngModel)]=\"profile_name\" type=\"text\" placeholder=\"First Name\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Last Name *</ion-label>\n<ion-input type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"profile_last_name\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Email Address *</ion-label>\n<ion-input [(ngModel)]=\"profile_email\" type=\"email\" placeholder=\"Email Address\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Contact No *</ion-label>\n<ion-input [(ngModel)]=\"profile_phone\" type=\"text\" placeholder=\"Phone Number\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Address *</ion-label>\n<ion-input [(ngModel)]=\"profile_address\" type=\"text\" placeholder=\"Address\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">City *</ion-label>\n<ion-input [(ngModel)]=\"profile_city\" type=\"text\" placeholder=\"City\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">State *</ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"profile_state\" placeholder=\"State\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<ion-item  form-group no-padding lines=\"none\">\n<ion-label position=\"stacked\">Country *</ion-label>\n<ion-select placeholder=\"Select Country\" [(ngModel)]=\"profile_country\">\n\t<ion-select-option *ngFor=\"let country of countries\" value=\"{{country.id}}\">{{country.name}}</ion-select-option>\n</ion-select>\n</ion-item>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n</ion-col>\n\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t<ion-col size-md=\"3\" size-sm=\"12\" size=\"12\">\n\t\t<ion-item  form-group no-padding lines=\"none\">\n\t\t\t<ion-button color=\"darkred\" (click)=\"updateProfile()\" class='updateBtn'>\n\t\t\t\tUpdate\n\t\t\t</ion-button>\n\n\t\t\t<ion-button color=\"greyc\" (click)=\"cancelProfile()\" class='updateBtn'cancelProfile>\n\t\t\t\tCancel\n\t\t\t</ion-button>\n\t\t</ion-item>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t</ion-col>\n\t<ion-col size-md=\"3\" size-sm=\"12\" size=\"12\">\n\t\t<ion-item  form-group no-padding lines=\"none\">\n\t\t\t\n\t\t</ion-item>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t</ion-col>\n</ion-col>\n\n</ion-row>\n<!-- </form>\t\t   -->\n</div>\n</div>\n<!-- Edit Profile Ends -->\n</ion-list>\n<ion-list *ngSwitchCase=\"'Orders'\">\n<div product-tab class=\"table-responsive\" orders>\t\n\n<div mob-orders class=\"ion-hide-lg-up\">\t\t\t\t\t\t\t\t\t\t  \n\t<ion-item lines=\"none\" *ngFor=\"let order of orders; let om_index = index \">\n\t<ion-thumbnail slot=\"start\">\n\t\t<img src=\"assets/images/velvetlipstick.png\">\n\t</ion-thumbnail>\n\t<ion-label>\n\t\t<h3>{{order.product_name}}</h3>\n\t\t<ion-badge color=\"danger\">Due</ion-badge>\n\t\t<!-- <ion-badge color=\"success\">Paid</ion-badge> -->\n\t\t<p>\n\t\t\t<ion-icon name=\"alert\" color=\"darkred\"></ion-icon> Pending\n\t\t\t<!-- <ion-icon name=\"checkmark-circle\" color=\"success\"></ion-icon> Delivered -->\n\t\t</p>\n\t</ion-label>\n\t<div price-time>\n\t\t<h3 text-right>$33.15</h3>\n\t\t<ion-note  text-right>\n\t\t\t{{order.order_date | date : 'd MMM y'}}\n\t\t</ion-note>\n\t\t<a (click)=\"invoice(order)\" text-right>Invoice</a>\n\t</div>\t\t\t\t\t\t\t\t\t\t\t  \n\t</ion-item>\n\t<ion-item lines=\"none\" *ngIf=\"orders == ''\">\n\tNo orders yet.\n\t</ion-item>\n</div>\t\n\n<h5 head-account class=\"ion-hide-md-down\">ORDERS</h5>\n<table class=\"ion-hide-md-down table table-bordered\">\n\t<thead>\n\t\t<tr *ngIf=\"orders != ''\">\n\t\t\t<th>Order Id</th>\n\t\t\t<th>Products</th>\n\t\t\t<th>Order Placed</th>\n\t\t\t<th>Amount</th>\n\t\t\t<th>Payment Status</th>\n\t\t\t<th>Delivery Status</th>\n\t\t\t<th>Invoice</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let order of orders; let o_index = index \">\n\t\t\t<td>{{order.rand_order_id}}</td>\n\t\t\t<td payment_type>\n\t\t\t\t<div *ngFor=\"let product of order.order_products \">\n\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{product.product_image}}\" alt=\"{{product.product_name}}\">\t\n\t\t\t\t\t{{product.product_name}} ({{product.product_quantity}})\n\t\t\t\t</div>\n\t\t\t</td>\n\t\t\t<td>{{order.order_date | date : 'd MMM y'}}</td>\n\t\t\t<td>${{convertIntoNumber(order.total_amount)}}</td>\n\t\t\t<td order-id>\n\t\t\t<span *ngIf=\"order.payment_method == 'cash'\" class=\"label label-danger\">Cash on delivery</span>\n\t\t\t<span *ngIf=\"order.payment_method != 'cash'\" class=\"label label-success\">Paid</span>\n\t\t\t</td>\n\t\t\t<td order-id>\n\t\t\t<span *ngIf=\"order.order_status == 0\" class=\"label label-danger\">Pending</span>\n\t\t\t<span *ngIf=\"order.order_status == 2\" class=\"label label-warning\">Cancelled</span>\n\t\t\t<span *ngIf=\"order.order_status == 1\" class=\"label label-success\">Delivered</span>\n\t\t\t</td>\n\t\t\t<td add>\n\t\t\t<a (click)=\"invoice(order)\" class=\"btn btn-theme btn-theme-xs\">Invoice</a>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr *ngIf=\"orders == ''\">\n\t\t<td colspan=\"8\">No orders yet.</td>\n\t\t</tr>\n\t</tbody>\n</table>\n</div>\n\n\n</ion-list>\t\n\n\n<ion-list *ngSwitchCase=\"'Registry'\">\n<div product-tab class=\"table-responsive\" orders>\t\n\n<div mob-orders class=\"ion-hide-lg-up\">\t\t\t\t\t\t\t\t\t\t  \n\t<ion-item lines=\"none\" *ngFor=\"let order of registries; let om_index = index \">\n\t<ion-thumbnail slot=\"start\">\n\t\t<img src=\"assets/images/velvetlipstick.png\">\n\t</ion-thumbnail>\n\t<ion-label>\n\t\t<h3>{{order.product_name}}</h3>\n\t\t<ion-badge color=\"danger\">Due</ion-badge>\n\t\t<!-- <ion-badge color=\"success\">Paid</ion-badge> -->\n\t\t<p>\n\t\t\t<ion-icon name=\"alert\" color=\"darkred\"></ion-icon> Pending\n\t\t\t<!-- <ion-icon name=\"checkmark-circle\" color=\"success\"></ion-icon> Delivered -->\n\t\t</p>\n\t</ion-label>\n\t<div price-time>\n\t\t<h3 text-right>$33.15</h3>\n\t\t<ion-note  text-right>\n\t\t\t{{order.order_date | date : 'd MMM y'}}\n\t\t</ion-note>\n\t\t<a (click)=\"invoice(order)\" text-right>Invoice</a>\n\t</div>\t\t\t\t\t\t\t\t\t\t\t  \n\t</ion-item>\n\t<ion-item lines=\"none\" *ngIf=\"registries == ''\">\n\tNo registry yet.\n\t</ion-item>\n</div>\t\n\n<h5 head-account class=\"ion-hide-md-down\">Registries</h5>\n<table class=\"ion-hide-md-down table table-bordered\">\n\t<thead>\n\t\t<tr *ngIf=\"orders != ''\">\n\t\t\t<th>Order Id</th>\n\t\t\t<th>Products</th>\n\t\t\t<th>Order Placed</th>\n\t\t\t<th>Order Placed By</th>\n\t\t\t<th>Amount</th>\n\t\t\t<th>Payment Status</th>\n\t\t\t<th>Delivery Status</th>\n\t\t\t<th>Invoice</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let order of registries; let o_index = index \">\n\t\t\t<td>{{order.rand_order_id}}</td>\n\t\t\t<td payment_type>\n\t\t\t\t<div *ngFor=\"let product of order.order_products \">\n\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t<img *ngIf=\"errors.indexOf(product.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{product.product_image}}\" alt=\"{{product.product_name}}\">\t\n\t\t\t\t\t{{product.product_name}} ({{product.product_quantity}})\n\t\t\t\t</div>\n\t\t\t</td>\n\t\t\t<td>{{order.order_date | date : 'd MMM y'}}</td>\n\t\t\t<td>{{order.user_name}}</td>\n\t\t\t<td>${{convertIntoNumber(order.total_amount)}}</td>\n\t\t\t<td order-id>\n\t\t\t<span *ngIf=\"order.payment_method == 'cash'\" class=\"label label-danger\">Cash on delivery</span>\n\t\t\t<span *ngIf=\"order.payment_method != 'cash'\" class=\"label label-success\">Paid</span>\n\t\t\t</td>\n\t\t\t<td order-id>\n\t\t\t<span *ngIf=\"order.order_status == 0\" class=\"label label-danger\">Pending</span>\n\t\t\t<span *ngIf=\"order.order_status == 2\" class=\"label label-warning\">Cancelled</span>\n\t\t\t<span *ngIf=\"order.order_status == 1\" class=\"label label-success\">Delivered</span>\n\t\t\t</td>\n\t\t\t<td add>\n\t\t\t<a (click)=\"invoice(order)\" class=\"btn btn-theme btn-theme-xs\">Invoice</a>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr *ngIf=\"registries == ''\">\n\t\t<td colspan=\"8\">No orders yet.</td>\n\t\t</tr>\n\t</tbody>\n</table>\n</div>\n\n\n</ion-list>\t\n\n\n<ion-list *ngSwitchCase=\"'payment'\">\n<div product-tab class=\"table-responsive\"  orders>\t\t\t\t\t\t\t\t\t\n<div mob-orders class=\"ion-hide-lg-up\">\t\n\n<ion-item-sliding *ngFor=\"let card of cards; let cm_index = index \">\n<ion-item-options side=\"start\">\n<ion-item-option  (click)=\"Addpay('edit',cm_index,card)\" color=\"success\">Edit</ion-item-option>\t\t\t\t\t \n</ion-item-options>\t\n<ion-item-options side=\"end\">\t\t\t\t\t\t\t\t\n<ion-item-option (click)=\"deleteCard(card.card_id,cm_index)\" color=\"danger\">Delete</ion-item-option>\n</ion-item-options>\t\t\t\t\t\t\t\t\n<ion-item lines=\"none\">\n<ion-label>\n<h3>{{card.card_type}}</h3>\n<p>xxxx xxxx xxxx {{card.card_number.slice(-4)}}</p>\n<ion-badge color=\"success\" *ngIf=\"card.card_status == 1\">Active</ion-badge>\n<ion-badge color=\"danger\" *ngIf=\"card.card_status == 0\">In-active</ion-badge>\n</ion-label>\t\n<ion-icon arrow-small name=\"arrow-forward\" slot=\"end\"></ion-icon>\t\t  \n</ion-item>\n</ion-item-sliding>\n\n<ion-item *ngIf=\"cards == ''\">\nNo payment options stored.\n</ion-item>\n\n<ion-item lines=\"none\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n<ion-button size=\"small\" (click)=\"Addpay()\" color=\"success\"><ion-icon name=\"add\"></ion-icon>Add New</ion-button>\n</ion-item>\t\n</div>\n\n<h5 head-account class=\"ion-hide-md-down\">PAYMENT OPTIONS\n<span  (click)=\"Addpay()\" class=\"btn btn-success btn-sm add-payment-btn\" float-right>\nAdd New \n</span>      \n</h5>\n<table class=\"ion-hide-md-down table table-bordered\">\n<thead>\n<tr *ngIf=\"cards != ''\">\n<th>S NO.</th>\n<th>Payment Method</th>\n<th>Account Details</th>\n<th>Status</th>\n<th>Action</th>\n</tr>\n</thead>\n<tbody>\n\n<tr *ngFor=\"let card of cards; let c_index = index \">\n<td>{{c_index + 1}}</td>\t\t\t\t\t\t\t\t\t\t\t\t\t\n<td order-id>\n<span class=\"label label-primary\">{{card.card_type}}</span>\n</td>\n<td>\nxxxx xxxx xxxx {{card.card_number.slice(-4)}}\n</td>\n<td order-id>\n<span class=\"label label-success\" *ngIf=\"card.card_status == 1\">Active</span>\n<span class=\"label label-danger\" *ngIf=\"card.card_status == 0\">In-active</span>\n</td>\n<td view_details>\t\t\t\t\t\t\t\t\t\t                                           \n<a (click)=\"Addpay('edit',c_index,card)\" class=\"btn btn-success btn-sm  btn-circle\">\n<i class=\"fa fa-pencil\"></i> \n</a>\n<a (click)=\"deleteCard(card.card_id,c_index)\" class=\"btn btn-danger btn-sm btn-circle\">\n<i class=\"fa fa-trash\"></i>  \n</a>\n</td>\n</tr>\n\n<tr *ngIf=\"cards == ''\">\n<td colspan=\"5\">No payment options stored.</td>\n</tr>\n\n</tbody>\n</table>\n</div>\n<!-- PAYMENT OPTIONS Start -->\n<div panel panel-default  *ngIf=\"AddpayClicked\">\n<div panel-heading  account-head>\n<h4>\n<a href=\"javascript:void(0)\">\n<span><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>  {{cards_title}} Payment Method\n</a>\n</h4>\t\t\t\t\t \n</div>\n<div panel-body>\n<ion-row>\n<ion-col size-md=\"12\" size-sm=\"12\" size=\"12\" head-payment>\nCredit or Debit Cards \n<span float-right class=\"card-psys\"> <img src=\"assets/images/cards.png\"></span>\n\n</ion-col>\n<ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Card Number *</ion-label>\n<ion-input [(ngModel)]=\"pay_card_number\" type=\"text\" placeholder=\"Card Number\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n<ion-item  form-group no-padding lines=\"none\">\n<ion-label position=\"stacked\">Card Type *</ion-label>\n<ion-select [(ngModel)]=\"pay_card_type\"  placeholder=\"Select Card Type\">\n<ion-select-option value=\"Visa\">Visa</ion-select-option>\n<ion-select-option value=\"Master Card\">Master Card</ion-select-option>\n<ion-select-option value=\"American Express\">American Express</ion-select-option>\n<ion-select-option value=\"Rupay\">Rupay</ion-select-option>\n<ion-select-option value=\"Discover\">Discover</ion-select-option>\n<ion-select-option value=\"Citibank\">Citibank</ion-select-option>\n</ion-select>\n</ion-item>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n</ion-col>\n<ion-col size-md=\"3\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Expiry Date *</ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"pay_expiry_month\" placeholder=\"MM\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"3\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\"></ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"pay_expiry_year\" placeholder=\"YY\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">CVV *</ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"pay_cvv\" placeholder=\"CVV\"></ion-input>\n</div>\n</ion-col>\n<!-- <ion-col  size-md=\"12\" size-sm=\"12\" size=\"12\">\n<div class=\"checkbox checks-s\">\n<label>\n<input type=\"checkbox\"> Save for further orders.\n</label>\n</div>\n</ion-col> -->\n\n<ion-col size=\"12\">\n<ion-button color=\"darkred\" (click)=\"updatePaymentCard(pay_card_number,pay_card_type,pay_expiry_month,pay_expiry_year,pay_cvv)\">\nSave\n</ion-button>\n<ion-button color=\"greyc\" (click)=\"cancelPay()\">\nCancel\n</ion-button>\n</ion-col>\n</ion-row>\t  \n</div>\n</div>\n\n<!-- <div panel panel-default  *ngIf=\"EditpayClicked\">\n<div panel-heading  account-head>\n<h4>\n<a href=\"javascript:void(0)\">\n<span><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span> Edit Card Information\n</a>\n</h4>\t\t\t\t\t \n</div>\n<div panel-body>\n<form class=\"register-form\">\n<ion-row>\n<ion-col size-md=\"12\" size-sm=\"12\" size=\"12\" head-payment>\nCredit or Debit Cards \n<span float-right class=\"card-psys\"> <img src=\"assets/images/cards.png\"></span>\n\n</ion-col>\n<ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Card Number *</ion-label>\n<ion-input type=\"text\" placeholder=\"1252 1200 4566 8522\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n<ion-item  form-group no-padding lines=\"none\">\n<ion-label position=\"stacked\">Card Type *</ion-label>\n<ion-select placeholder=\"Select Card Type\">\n<ion-select-option value=\"Visa\">Visa</ion-select-option>\n<ion-select-option value=\"Master Card\">Master Card</ion-select-option>\n</ion-select>\n</ion-item>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n</ion-col>\n<ion-col size-md=\"3\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Expiry Date *</ion-label>\n<ion-input type=\"text\" placeholder=\"04\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"3\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\"></ion-label>\n<ion-input type=\"text\" placeholder=\"2021\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">CVV *</ion-label>\n<ion-input type=\"text\" placeholder=\"522\"></ion-input>\n</div>\n</ion-col>\n<ion-col  size-md=\"12\" size-sm=\"12\" size=\"12\">\n<div class=\"checkbox checks-s\">\n<label>\n<input type=\"checkbox\"> Save for further orders.\n</label>\n</div>\n</ion-col>\n\n<ion-col size=\"12\">\n<ion-button color=\"darkred\">\nSave\n</ion-button>\n<ion-button color=\"greyc\">\nCancel\n</ion-button>\n</ion-col>\n</ion-row>\n</form>\t\t  \n</div>\n</div> -->\n<!-- PAYMENT OPTIONSe Ends -->\n</ion-list>\n<ion-list *ngSwitchCase=\"'addresses'\">\n<div product-tab class=\"table-responsive\"  orders>\t\n<div mob-orders class=\"ion-hide-lg-up\">\t\t\n<ion-item-sliding *ngFor=\"let address of addresses; let adm_index = index \">\n\t<ion-item-options side=\"start\">\n\t<ion-item-option (click)=\"setAddressDefault(address.address_id,adm_index)\" *ngIf=\"address.set_as_default == 0\" color=\"darkred\">Set Default</ion-item-option>\t\t  \n\t<ion-item-option (click)=\"addaddressClick('edit',address,adm_index)\" color=\"success\">Edit</ion-item-option>\t\t\t\t\t\t\t \n\t</ion-item-options>\t\n\t<ion-item-options side=\"end\">\t\t\t\t\t\t\t\t\n\t<ion-item-option (click)=\"deleteAddress(address.address_id,adm_index)\" color=\"danger\">Delete</ion-item-option>\n\t</ion-item-options>\t\t\t\t\t\t\t\t\n\t<ion-item lines=\"none\">\n\t<ion-label>\n\t<h3>{{address.address_first_name}} {{address.address_last_name}}</h3>\n\t<p>{{address.full_address}}, {{address.address_city}}, {{address.address_state}}, {{address.address_zip_code}} ({{address.country_name}})</p>\n\t<p>{{address.address_phone}}</p>\n\t</ion-label>\t\n\t<ion-icon arrow-small name=\"arrow-forward\" slot=\"end\"></ion-icon>\t\t  \n\t</ion-item>\n</ion-item-sliding>\n<ion-item *ngIf=\"addresses == ''\">\n\tNo address added yet.\n</ion-item>\n\n<ion-item lines=\"none\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  \n<ion-button size=\"small\" (click)=\"addaddressClick('add')\" color=\"success\"><ion-icon name=\"add\"></ion-icon>Add New</ion-button>\n</ion-item>\t\n</div>\t\t\t\t\t\t\t\t\t\t\t\t\n<h5 head-account class=\"ion-hide-md-down\">Your Addresses\n<span (click)=\"addaddressClick('add')\" class=\"btn btn-success btn-sm add-payment-btn\" float-right>\nAdd New\n</span>      \n</h5>\n<table class=\"ion-hide-md-down table table-bordered\">\n<thead *ngIf=\"addresses != ''\">\n<tr>\n<th>S NO.</th>\n<th>Name</th>\n<th>Address</th>\n<th>Contact No</th>\n<th>Action</th>\n</tr>\n</thead>\n<tbody>\n\n<tr *ngFor=\"let address of addresses; let ad_index = index \">\n\t<td>{{ad_index + 1}}</td>\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t<td order-id>\n\t{{address.address_first_name}} {{address.address_last_name}}\n\t</td>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t<td order-id>\n\t<span class=\"label label-primary\">\n\t\t{{address.full_address}}, {{address.address_city}}, {{address.address_state}}, {{address.address_zip_code}} ({{address.country_name}})\n\t</span>\n\t</td>\n\t<td>\n\t{{address.address_phone}}\n\t</td>\n\t<td view_details>\t\n\t<a (click)=\"setAddressDefault(address.address_id,ad_index)\" title=\"Set Default\" *ngIf=\"address.set_as_default == 0\" class=\"btn btn-success btn-sm  btn-circle action-icons\">\n\t<i class=\"fa fa-check\"></i>\n\t</a>\t\t   \t\t\t\t\t\t\t                                           \n\t<a (click)=\"addaddressClick('edit',address,ad_index)\" class=\"btn btn-success btn-sm  btn-circle\">\n\t<i class=\"fa fa-pencil\"></i> \n\t</a>\n\t<a class=\"btn btn-danger btn-sm btn-circle\" (click)=\"deleteAddress(address.address_id,ad_index)\">\n\t<i class=\"fa fa-trash\"></i>  \n\t</a>\n\t</td>\n</tr>\n<tr *ngIf=\"addresses == ''\" >\n<td colspan=\"5\">No address added yet.</td>\n</tr>\n\n</tbody>\n</table>\n</div>\n\n<!-- Add Addresses Start -->\n<div panel panel-default *ngIf=\"addaddressClicked\">\n<div panel-heading  account-head>\n<h4>\n<a href=\"javascript:void(0)\">\n<span><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>  {{address_title}} Address\n</a>\n</h4>\t\t\t\t\t \n</div>\n<div panel-body>\n\n<ion-row>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">First Name *</ion-label>\n<ion-input [(ngModel)]=\"ad_first_name\" type=\"text\" placeholder=\"\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Last Name *</ion-label>\n<ion-input [(ngModel)]=\"ad_last_name\" type=\"text\" placeholder=\"\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Address *</ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"ad_address\" placeholder=\"\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">City *</ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"ad_city\" placeholder=\"\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">State *</ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"ad_state\" placeholder=\"\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<ion-item  form-group no-padding lines=\"none\">\n<ion-label position=\"stacked\">Country *</ion-label>\n<ion-select placeholder=\"Select Country\" [(ngModel)]=\"ad_country\">\n<ion-select-option *ngFor=\"let country of countries\" value=\"{{country.id}}\">{{country.name}}</ion-select-option>\n</ion-select>\n</ion-item>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Zip Code *</ion-label>\n<ion-input type=\"text\" placeholder=\"\" [(ngModel)]=\"ad_zip\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Phone Number *</ion-label>\n<ion-input type=\"text\" placeholder=\"\" [(ngModel)]=\"ad_phone\"></ion-input>\n</div>\n</ion-col>\n<ion-col  size-md=\"12\" size-sm=\"12\" size=\"12\">\n<div class=\"checkbox checks-s\">\n<label>\n<input type=\"checkbox\" [(ngModel)]=\"ad_is_default\"> Set as Default Address\n</label>\n</div>\n</ion-col>\n<ion-col size=\"12\">\n<ion-button color=\"darkred\" (click)=\"saveAddress(ad_first_name,ad_last_name,ad_address,ad_city,ad_state,ad_country,ad_zip,ad_phone,ad_is_default)\">\n{{address_title}} Address\n</ion-button>\n<ion-button color=\"greyc\" (click)=\"cancelAddAdress()\">\nCancel\n</ion-button>\n</ion-col>\n</ion-row>\n\t  \n</div>\n</div>\n<!--Add Addresses Ends -->\n\n<!-- Edit Addresses Start -->\n<!-- <div panel panel-default   *ngIf=\"editaddressClicked\" >\n<div panel-heading  account-head>\n<h4>\n<a href=\"javascript:void(0)\">\n<span><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span>  Edit Address\n</a>\n</h4>\t\t\t\t\t \n</div>\n<div panel-body>\n\n<ion-row>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">First Name *</ion-label>\n<ion-input type=\"text\" placeholder=\"Demo\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Last Name *</ion-label>\n<ion-input type=\"text\" placeholder=\"Customer\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Address *</ion-label>\n<ion-input type=\"text\" placeholder=\"123 Street\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">City *</ion-label>\n<ion-input type=\"text\" placeholder=\"CA\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">State *</ion-label>\n<ion-input type=\"text\" placeholder=\"CA\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<ion-item  form-group no-padding lines=\"none\">\n<ion-label position=\"stacked\">Country *</ion-label>\n<ion-select placeholder=\"Select Country\">\n<ion-select-option value=\"In\">India</ion-select-option>\n<ion-select-option value=\"US\">USA</ion-select-option>\n<ion-select-option value=\"C\">Canada</ion-select-option>\n<ion-select-option value=\"UA\">UAE</ion-select-option>\n</ion-select>\n</ion-item>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Zip Code *</ion-label>\n<ion-input type=\"text\" placeholder=\"4656\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Phone Number *</ion-label>\n<ion-input type=\"text\" placeholder=\"7899846565\"></ion-input>\n</div>\n</ion-col>\n<ion-col  size-md=\"12\" size-sm=\"12\" size=\"12\">\n<div class=\"checkbox checks-s\">\n<label>\n<input type=\"checkbox\"> Set as Default Address\n</label>\n</div>\n</ion-col>\n<ion-col size=\"12\">\n<ion-button color=\"darkred\">\nUpdate Address\n</ion-button>\n<ion-button color=\"greyc\">\nCancel\n</ion-button>\n</ion-col>\n</ion-row>\n\t  \n</div>\n</div> -->\n<!-- Edit Addresses Ends -->\n\n</ion-list>\n<ion-list *ngSwitchCase=\"'login'\">\n<div product-tab class=\"table-responsive\"  orders login-detail>\t\t\n<ion-list class=\"ion-hide-lg-up\" no-margin>\n<ion-item>\n<ion-label><b>Name</b> <span float-right>{{profile?.name}} {{profile?.last_name}}</span></ion-label>\n</ion-item>\n<ion-item>\n<ion-label><b>Contact No</b> <span float-right>{{profile?.phone}}</span></ion-label>\n</ion-item>\n<ion-item>\n<ion-label><b>Email</b> <span float-right>{{profile?.email}}</span></ion-label>\n</ion-item> \n<ion-item>\n<ion-label><b>Password</b> <span float-right>******** <ion-button (click)=\"editpasswordClick()\" size=\"small\" color=\"success\"><ion-icon name=\"create\"></ion-icon></ion-button></span></ion-label>\n</ion-item>\n<!-- <ion-item lines=\"none\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t     \n<ion-button  edit-login size=\"small\" (click)=\"editdetailClick()\"  color=\"success\"><ion-icon name=\"create\"></ion-icon>Edit Details</ion-button>\n</ion-item>\t -->\n</ion-list>                                               \t\t\t\t\t\t\t\t\t\t\t\t \n<h5 head-account class=\"ion-hide-md-down\">LOGIN DETAILS\n<!-- <span  (click)=\"editdetailClick()\"  class=\"btn btn-success btn-sm add-payment-btn\" float-right>\nEdit\n</span> -->      \n</h5>\n<table class=\"ion-hide-md-down table table-condensed\">\n<tbody> \n<tr>\n<td><b>Name</b></td>\n<td align=\"left\">{{profile?.name}} {{profile?.last_name}}</td>\n<td><b>Email</b></td>\n<td>{{profile?.email}}</td>\n</tr>\n<tr>\n<td><b>Contact No</b></td>\n<td>{{profile?.phone}}</td>\n\n<td><b>Password</b></td>\n<td>******** \n<a  (click)=\"editpasswordClick()\" class=\"btn btn-success btn-sm btn-circle pull-right\">\n<i class=\"fa fa-pencil\"></i> \n</a>\n</td>\n</tr>\n\n</tbody>\n</table>\n</div>\n<!-- Add Addresses Start -->\n<!-- <div panel panel-default   *ngIf=\"editdetailClicked\" >\n<div panel-heading  account-head>\n<h4>\n<a href=\"javascript:void(0)\">\n<span><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span>  Edit Details\n</a>\n</h4>\t\t\t\t\t \n</div>\n<div panel-body>\n<form class=\"register-form\">\n<ion-row>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Name *</ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"name\" placeholder=\"Name\"></ion-input>\n</div>\n</ion-col>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Email *</ion-label>\n<ion-input type=\"email\" [(ngModel)]=\"email\" placeholder=\"Email\"></ion-input>\n</div>\n</ion-col>\n<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n<div  form-group>\n<ion-label position=\"stacked\">Phone Number *</ion-label>\n<ion-input type=\"text\" [(ngModel)]=\"phone\" placeholder=\"Phone Number\"></ion-input>\n</div>\n</ion-col>\n<ion-col size=\"12\">\n<ion-button color=\"darkred\">\nUpdate\n</ion-button>\n<ion-button color=\"greyc\">\nCancel\n</ion-button>\n</ion-col>\n</ion-row>\n</form>\t\t  \n</div>\n</div> -->\n<!--Add Addresses Ends -->\n\n<!-- Edit Addresses Start -->\n<div panel panel-default   *ngIf=\"editpasswordClicked\" >\n<div panel-heading  account-head>\n<h4>\n<a href=\"javascript:void(0)\">\n<span><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span>Edit Password\n</a>\n</h4>\t\t\t\t\t \n</div>\n<div panel-body>\n<ion-row>\n\t<ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n\t<div  form-group>\n\t<ion-label position=\"stacked\">Current Password</ion-label>\n\t<ion-input type=\"password\" [(ngModel)]=\"current_password\" placeholder=\"Current password\"></ion-input>\n\t</div>\n\t</ion-col>\n\t<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t<div  form-group>\n\t<ion-label position=\"stacked\">New Password</ion-label>\n\t<ion-input type=\"password\" [(ngModel)]=\"new_password\" placeholder=\"New Password\"></ion-input>\n\t</div>\n\t</ion-col>\n\t<ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t<div  form-group>\n\t<ion-label position=\"stacked\">Re-enter New Password</ion-label>\n\t<ion-input type=\"password\" [(ngModel)]=\"confirm_password\" placeholder=\"Re-enter New Password\"></ion-input>\n\t</div>\n\t</ion-col>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  \n\t<ion-col size=\"12\">\n\t\t<ion-button color=\"darkred\" (click)=\"updatePassword(current_password,new_password,confirm_password)\">\n\t\tUpdate\n\t\t</ion-button>\n\t\t<ion-button color=\"greyc\" (click)=\"cancelPassword()\">\n\t\tCancel\n\t\t</ion-button>\n\t</ion-col>\n</ion-row>\t  \n</div>\n</div>\n<!-- Edit Addresses Ends -->\n</ion-list>\n<ion-list *ngSwitchCase=\"'messages'\">\n<ion-row>\n<ion-col size-lg=\"6\" offset-lg=\"3\" size-md=\"8\" offset-md=\"2\">\n<div product-tab users-list>\t\t\t\t\t\t\t\t\t\t\t\t     \n\n<ion-item  lines=\"none\" routerLink=\"/messages\">\n<ion-avatar slot=\"start\">\n<img src=\"assets/images/testimonials/member1.png\">\n</ion-avatar>\n<ion-label>\n<h3>John Smith</h3>\n<ion-note>Today at 11:45 am</ion-note>\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n</ion-label>\n</ion-item>\n<ion-item  lines=\"none\"  routerLink=\"/messages\">\n<ion-avatar slot=\"start\"> \n<img src=\"assets/images/testimonials/member2.png\"> \n</ion-avatar>\n<ion-label>\n<h3>David Smith</h3>\n<ion-note>Today at 11:45 am</ion-note>\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n</ion-label>\n</ion-item>\n<ion-item  lines=\"none\"  routerLink=\"/messages\">\n<ion-avatar slot=\"start\">\n<img src=\"assets/images/testimonials/member3.png\">\n</ion-avatar>\n<ion-label>\n<h3>Steve Jones</h3>\n<ion-note>Today at 11:45 am</ion-note>\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n</ion-label>\n</ion-item>\n<ion-item  lines=\"none\"  routerLink=\"/messages\">\n<ion-avatar slot=\"start\">\n<img src=\"assets/images/testimonials/member4.png\">\n</ion-avatar>\n<ion-label>\n<h3>Johnson Charles</h3>\n<ion-note>Today at 11:45 am</ion-note>\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n</ion-label>\n</ion-item>\n<ion-item  lines=\"none\"  routerLink=\"/messages\">\n<ion-avatar slot=\"start\">\n<img src=\"assets/images/testimonials/member1.png\">\n</ion-avatar>\n<ion-label>\n<h3>Andrew Doe</h3>\n<ion-note>Today at 11:45 am</ion-note>\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n</ion-label>\n</ion-item>\n\n</div>\n</ion-col>\n</ion-row>\n</ion-list>\t\t \n</div>\n</div>\t\n</ion-col>\t\t\t\t \n</ion-row>\t\n\n<app-recently-viewed></app-recently-viewed>\n<app-featured-products></app-featured-products>\n\n</div>\n<!-- Container Ends-->\t\n</div>\n<app-footer></app-footer>\t\n</ion-content>\n"

/***/ }),

/***/ "./src/app/your-account/your-account.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/your-account/your-account.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey); }\n  ion-content .updateBtn {\n    position: inherit; }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-start: var(--ion-padding-0);\n      --padding-end: var(--ion-padding-0);\n      --padding-top: var(--ion-padding-0);\n      --padding-bottom: var(--ion-padding-0); } }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top: var(--ion-padding-0); } }\n  @media only screen and (max-width: 991px) {\n    ion-content .container {\n      padding: var(--ion-padding-0); } }\n  ion-content [your-account] {\n    margin-bottom: var(--ion-margin-20);\n    font-family: var(--ion-font-family-2);\n    /* profile page */ }\n  @media only screen and (max-width: 991px) {\n      ion-content [your-account] {\n        margin-bottom: var(--ion-margin-0); }\n        ion-content [your-account] ion-col {\n          padding: var(--ion-padding-0); } }\n  ion-content [your-account] [head-account] {\n      font-family: var(--ion-font-family-2);\n      padding: var(--ion-padding-15) var(--ion-padding-15);\n      font-size: var(--ion-font-size-17);\n      font-weight: 700;\n      background: var(--ion-color-darkblue);\n      margin: var(--ion-margin-0) var(--ion-margin-0) var(--ion-margin-20);\n      color: var(--ion-color-white);\n      text-align: center; }\n  ion-content [your-account] [head-account] .add-payment-btn {\n        margin-top: -5px; }\n  ion-content [your-account] [product-tabs] {\n      background: var(--ion-color-white); }\n  ion-content [your-account] [product-tabs] ion-segment {\n        display: inline-block;\n        width: 100%;\n        border: 1px solid #f5f5f5; }\n  ion-content [your-account] [product-tabs] ion-segment [link-notification] {\n          color: var(--ion-color-white);\n          text-decoration: none;\n          padding: var(--ion-padding-4) var(--ion-padding-15);\n          background: var(--ion-color-darkred);\n          font-size: var(--ion-font-size-12);\n          border-radius: 4px;\n          cursor: pointer;\n          margin: var(--ion-margin-11) var(--ion-margin-20); }\n  @media only screen and (max-width: 991px) {\n          ion-content [your-account] [product-tabs] ion-segment {\n            display: flex;\n            border: none;\n            border-bottom: 2px solid var(--ion-color-grey2); } }\n  ion-content [your-account] [product-tabs] ion-segment ion-segment-button {\n          border-radius: var(--ion-value-0) !important;\n          display: inline-block;\n          min-width: initial !important;\n          max-width: initial !important;\n          float: left;\n          height: var(--ion-wh-48);\n          border: 1px solid #ececec;\n          font-weight: bold;\n          color: var(--ion-color-darkblack3);\n          font-size: var(--ion-font-size-13);\n          font-family: var(--ion-font-family-2);\n          margin-bottom: -1px; }\n  @media only screen and (max-width: 991px) {\n            ion-content [your-account] [product-tabs] ion-segment ion-segment-button {\n              border: none;\n              height: var(--ion-wh-30);\n              background: var(--ion-color-white);\n              font-size: var(--ion-font-size-10); }\n              ion-content [your-account] [product-tabs] ion-segment ion-segment-button ion-icon {\n                font-size: var(--ion-font-size-20);\n                margin-top: var(--ion-margin-0);\n                color: var(--ion-color-darkblue); } }\n  ion-content [your-account] [product-tabs] ion-segment ion-segment-button ion-label {\n            margin-bottom: var(--ion-margin-0); }\n  ion-content [your-account] [product-tabs] ion-segment ion-segment-button.segment-button-checked {\n            color: var(--ion-color-darkblue);\n            height: var(--ion-wh-48);\n            background: #ececec; }\n  @media only screen and (max-width: 991px) {\n              ion-content [your-account] [product-tabs] ion-segment ion-segment-button.segment-button-checked {\n                height: var(--ion-wh-30);\n                background: var(--ion-color-darkblue);\n                color: var(--ion-color-white); }\n                ion-content [your-account] [product-tabs] ion-segment ion-segment-button.segment-button-checked ion-icon {\n                  color: var(--ion-color-white); } }\n  ion-content [your-account] [product-tabs] ion-segment ion-segment-button:hover {\n            color: var(--ion-color-white);\n            background: var(--ion-color-darkblue); }\n  @media only screen and (max-width: 991px) {\n              ion-content [your-account] [product-tabs] ion-segment ion-segment-button:hover {\n                color: var(--ion-color-white); }\n                ion-content [your-account] [product-tabs] ion-segment ion-segment-button:hover ion-icon {\n                  color: var(--ion-color-white); } }\n  ion-content [your-account] [product-tabs] [tab-content] {\n        padding: var(--ion-padding-10) var(--ion-padding-20) var(--ion-padding-0);\n        /*Login Detail Starts*/\n        /* Login Detail Ends */\n        /*Orders Starts*/\n        /*Orders Ends*/\n        /* Add Edit Form Start*/\n        /* Add Edit Form Ends*/ }\n  @media only screen and (max-width: 991px) {\n          ion-content [your-account] [product-tabs] [tab-content] {\n            padding: var(--ion-padding-0); }\n            ion-content [your-account] [product-tabs] [tab-content] ion-list {\n              padding-top: var(--ion-padding-0); } }\n  ion-content [your-account] [product-tabs] [tab-content] [product-tab] {\n          /* Users List Start*/\n          /* Users List Ends*/ }\n  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] {\n            padding: var(--ion-padding-15); }\n  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item {\n              margin-bottom: var(--ion-margin-10);\n              border-left: 2px solid var(--ion-color-darkred);\n              border-radius: 4px;\n              --background:var(--ion-color-grey); }\n  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item h3 {\n                font-size: var(--ion-font-size-14);\n                font-weight: 700; }\n  @media only screen and (max-width: 991px) {\n                  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item h3 {\n                    margin-bottom: -5px;\n                    font-size: var(--ion-font-size-14); } }\n  @media only screen and (max-width: 576px) {\n                  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item h3 {\n                    font-size: var(--ion-font-size-12); } }\n  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item ion-note {\n                font-size: var(--ion-font-size-13);\n                color: #a5a5a5; }\n  @media only screen and (max-width: 991px) {\n                  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item ion-note {\n                    font-size: var(--ion-font-size-12); } }\n  @media only screen and (max-width: 576px) {\n                  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item ion-note {\n                    font-size: var(--ion-font-size-10); } }\n  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item p {\n                font-size: var(--ion-font-size-14); }\n  @media only screen and (max-width: 991px) {\n                  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item p {\n                    font-size: var(--ion-font-size-13); } }\n  @media only screen and (max-width: 576px) {\n                  ion-content [your-account] [product-tabs] [tab-content] [product-tab][users-list] ion-item p {\n                    font-size: var(--ion-font-size-12); } }\n  @media only screen and (max-width: 991px) {\n            ion-content [your-account] [product-tabs] [tab-content] [product-tab] {\n              border: none; }\n              ion-content [your-account] [product-tabs] [tab-content] [product-tab] .media {\n                margin-top: var(--ion-margin-0); }\n              ion-content [your-account] [product-tabs] [tab-content] [product-tab] .media-link {\n                background: #c8ccc9;\n                padding: var(--ion-padding-20);\n                width: 100%;\n                text-align: center; }\n                ion-content [your-account] [product-tabs] [tab-content] [product-tab] .media-link [name-user] {\n                  color: var(--ion-color-black);\n                  font-weight: 700;\n                  text-transform: capitalize;\n                  margin-top: var(--ion-margin-10);\n                  margin-bottom: var(--ion-margin-0); }\n                ion-content [your-account] [product-tabs] [tab-content] [product-tab] .media-link .media-object {\n                  position: relative; }\n                ion-content [your-account] [product-tabs] [tab-content] [product-tab] .media-link img {\n                  border-radius: 50%;\n                  width: 100px;\n                  height: 100px;\n                  border: 2px solid var(--ion-color-white);\n                  -o-object-fit: cover;\n                     object-fit: cover; }\n                ion-content [your-account] [product-tabs] [tab-content] [product-tab] .media-link [img-edit] label {\n                  width: var(--ion-wh-30);\n                  height: var(--ion-wh-30);\n                  line-height: var(--ion-value-35);\n                  border-radius: 50%;\n                  color: var(--ion-color-white);\n                  position: absolute;\n                  z-index: 1;\n                  font-size: var(--ion-font-size-16);\n                  bottom: var(--ion-value-5);\n                  margin: 0 auto;\n                  left: var(--ion-value-0);\n                  right: var(--ion-value-0);\n                  background: rgba(0, 0, 0, 0.5); }\n              ion-content [your-account] [product-tabs] [tab-content] [product-tab] .media-body ion-list ion-item {\n                font-family: var(--ion-font-family-2);\n                font-size: var(--ion-font-size-12);\n                border-bottom: 1px solid var(--ion-color-ltgrey); } }\n  @media only screen and (max-width: 991px) and (max-width: 991px) {\n      ion-content [your-account] [product-tabs] [tab-content] [product-tab] .media-body ion-list ion-item ion-button {\n        --box-shadow:none; } }\n  ion-content [your-account] [product-tabs] [tab-content] .btn-circle {\n          border-radius: 50%;\n          margin-right: var(--ion-margin-5);\n          width: var(--ion-wh-30);\n          height: var(--ion-wh-30);\n          line-height: var(--ion-wh-30);\n          padding: var(--ion-padding-0); }\n  ion-content [your-account] [product-tabs] [tab-content] [login-detail] ion-button {\n          --box-shadow:none; }\n  @media only screen and (max-width: 991px) {\n            ion-content [your-account] [product-tabs] [tab-content] [login-detail] ion-button {\n              --border-radius: 50%;\n              width: 30px;\n              height: 30px;\n              font-size: 10px;\n              margin-top: 0; } }\n  ion-content [your-account] [product-tabs] [tab-content] [login-detail] tr td {\n          padding: var(--ion-padding-10) !important;\n          border-bottom: 1px solid var(--ion-color-ltgrey) !important;\n          vertical-align: middle; }\n  @media only screen and (max-width: 991px) {\n          ion-content [your-account] [product-tabs] [tab-content] [login-detail] ion-item {\n            font-size: var(--ion-font-size-14); } }\n  ion-content [your-account] [product-tabs] [tab-content] [orders] [head-account] {\n          margin-bottom: var(--ion-margin-0); }\n  @media only screen and (max-width: 991px) {\n          ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item {\n            border-bottom: 1px solid #e3e3e3;\n            padding: var(--ion-padding-0); }\n            ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item img {\n              border-radius: var(--ion-value-4); }\n            ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item h3 {\n              font-size: var(--ion-font-size-12);\n              font-weight: 700;\n              font-family: var(--ion-font-family-2); }\n            ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item ion-badge {\n              font-size: var(--ion-font-size-10);\n              height: var(--ion-wh-16); }\n            ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item p {\n              font-size: var(--ion-font-size-12);\n              color: var(--ion-color-darkblack);\n              display: flex;\n              align-items: center;\n              font-weight: 600;\n              font-family: var(--ion-font-family-2); }\n            ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item [arrow-small] {\n              font-size: var(--ion-font-size-14); }\n            ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item [price-time] h3, ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item [price-time] ion-note {\n              font-size: var(--ion-font-size-12);\n              margin: var(--ion-margin-0); }\n            ion-content [your-account] [product-tabs] [tab-content] [orders] [mob-orders] ion-item [price-time] a {\n              display: block;\n              color: var(--ion-color-darkblue);\n              font-size: var(--ion-font-size-12);\n              text-decoration: underline; } }\n  ion-content [your-account] [product-tabs] [tab-content] [orders] table tr {\n          color: var(--ion-color-darkblack);\n          font-family: var(--ion-font-family-2); }\n  ion-content [your-account] [product-tabs] [tab-content] [orders] table tr td {\n            padding: var(--ion-padding-20) var(--ion-padding-15); }\n  ion-content [your-account] [product-tabs] [tab-content] [orders] table tr th, ion-content [your-account] [product-tabs] [tab-content] [orders] table tr td {\n            vertical-align: middle;\n            border: 1px solid var(--ion-color-ltgrey); }\n  ion-content [your-account] [product-tabs] [tab-content] [orders] table tr th[view_details] .action-icons, ion-content [your-account] [product-tabs] [tab-content] [orders] table tr td[view_details] .action-icons {\n              background: var(--ion-color-darkred);\n              border-color: var(--ion-color-darkred); }\n  ion-content [your-account] [product-tabs] [tab-content] [orders] table tr th img, ion-content [your-account] [product-tabs] [tab-content] [orders] table tr td img {\n              width: var(--ion-wh-70);\n              border-radius: 50%;\n              border: 2px solid #ccc;\n              padding: 2px;\n              height: var(--ion-wh-70);\n              -o-object-fit: cover;\n                 object-fit: cover; }\n  ion-content [your-account] [product-tabs] [tab-content] [orders] table tr th .btn-theme, ion-content [your-account] [product-tabs] [tab-content] [orders] table tr td .btn-theme {\n              font-family: var(--ion-font-family-2);\n              background-color: var(--ion-color-darkblue);\n              border-color: var(--ion-color-darkblue);\n              color: var(--ion-color-white);\n              padding: var(--ion-padding-6) var(--ion-padding-12);\n              border-radius: var(--ion-color-darkblue); }\n  ion-content [your-account] [product-tabs] [tab-content] [orders] table tr th .btn-theme:hover, ion-content [your-account] [product-tabs] [tab-content] [orders] table tr td .btn-theme:hover {\n                opacity: 0.8; }\n  ion-content [your-account] [product-tabs] [tab-content] [block-title] {\n          text-transform: uppercase;\n          font-size: var(--ion-font-size-15);\n          font-weight: 700;\n          color: var(--ion-color-darkblue);\n          font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n            ion-content [your-account] [product-tabs] [tab-content] [block-title] {\n              padding: var(--ion-value-0) var(--ion-value-15); } }\n  @media only screen and (max-width: 991px) {\n          ion-content [your-account] [product-tabs] [tab-content] [panel] {\n            padding: var(--ion-value-0) var(--ion-value-15); } }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-heading] {\n          font-family: var(--ion-font-family-2);\n          font-size: var(--ion-font-size-20);\n          text-transform: uppercase;\n          padding: var(--ion-padding-0);\n          border: none;\n          color: var(--ion-color-darkblack);\n          background-color: #f5f5f5; }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-heading] h4 a {\n            font-family: var(--ion-font-family-2);\n            color: var(--ion-color-darkblack3);\n            text-transform: uppercase;\n            display: block;\n            margin: var(--ion-margin-0);\n            font-size: var(--ion-font-size-13);\n            font-weight: bold;\n            text-decoration: none; }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-heading] h4 a span {\n              background: var(--ion-color-darkred);\n              color: var(--ion-color-white);\n              display: inline-block;\n              margin-right: var(--ion-margin-10);\n              padding: var(--ion-padding-15) var(--ion-padding-20); }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] {\n          background: var(--ion-color-greyf8);\n          padding: var(--ion-padding-10) var(--ion-padding-20) var(--ion-padding-20);\n          margin-bottom: var(--ion-margin-20);\n          margin-top: var(--ion-margin-20);\n          font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n            ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] {\n              background: var(--ion-color-white);\n              padding: var(--ion-padding-0); }\n              ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] ion-button {\n                height: var(--ion-wh-30);\n                --box-shadow:none; } }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [head-payment] {\n            font-weight: 700;\n            padding-bottom: var(--ion-padding-15);\n            border-bottom: 1px solid #eee;\n            margin-bottom: var(--ion-margin-20);\n            color: var(--ion-color-darkblack);\n            font-size: var(--ion-font-size-18); }\n  @media only screen and (max-width: 991px) {\n              ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [head-payment] {\n                font-size: var(--ion-font-size-12); } }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] .card-psys img {\n            width: 200px; }\n  @media only screen and (max-width: 991px) {\n              ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] .card-psys img {\n                width: 150px; } }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] ion-button {\n            --box-shadow:none; }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] ion-button:hover {\n              opacity: 0.8; }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [form-group] {\n            --background: transparent!important;\n            margin-bottom: var(--ion-margin-10); }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [form-group] ion-label {\n              display: inline-block;\n              max-width: 100%;\n              margin-bottom: var(--ion-margin-5);\n              font-weight: 700;\n              color: var(--ion-color-darkblack);\n              font-size: var(--ion-font-size-14);\n              font-family: var(--ion-font-family-2);\n              -webkit-transform: scale(1);\n                      transform: scale(1); }\n  @media only screen and (max-width: 991px) {\n                ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [form-group] ion-label {\n                  font-size: var(--ion-font-size-12);\n                  margin-bottom: var(--ion-margin-0);\n                  font-weight: normal;\n                  display: block; } }\n  ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [form-group] ion-input, ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [form-group] ion-select {\n              border-radius: var(--ion-value-3);\n              box-shadow: none;\n              font-size: var(--ion-font-size-14);\n              border: 1px solid #eee;\n              background: var(--ion-color-white);\n              height: var(--ion-wh-42) !important;\n              padding: var(--ion-padding-10) var(--ion-padding-10) !important;\n              font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n                ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [form-group] ion-input, ion-content [your-account] [product-tabs] [tab-content] [panel] [panel-body] [form-group] ion-select {\n                  background: transparent;\n                  height: auto !important;\n                  font-size: var(--ion-font-size-12);\n                  border-radius: var(--ion-value-0);\n                  border-width: var(--ion-value-0) var(--ion-value-0) 1px var(--ion-value-0);\n                  padding: inherit !important; } }\n  ion-content [your-account] [product-tabs] [tab-content] .table tr {\n          font-family: var(--ion-font-family-2); }\n  ion-content [your-account] [product-tabs] [tab-content] .table tr td {\n            padding: var(--ion-padding-9) var(--ion-padding-15);\n            border: none;\n            border-bottom: 1px solid #d0d0d0; }\n  @media only screen and (max-width: 991px) {\n          ion-content [your-account] [product-tabs] [tab-content] .widget {\n            padding: var(--ion-value-0) var(--ion-value-15); } }\n  ion-content [your-account] [product-tabs] [tab-content] .widget [profile_ul] {\n          padding: var(--ion-padding-10);\n          background-color: var(--ion-color-white);\n          border-radius: var(--ion-value-10);\n          border: 1px solid var(--ion-color-ltgrey);\n          box-shadow: 0px 0px 22px 0px #dcdcdc;\n          list-style: none; }\n  ion-content [your-account] [product-tabs] [tab-content] .widget [profile_ul] li a {\n            font-family: var(--ion-font-family-2);\n            color: var(--ion-color-black);\n            position: relative;\n            display: block;\n            padding: var(--ion-value-5) var(--ion-value-0) var(--ion-value-5) var(--ion-value-20);\n            position: relative;\n            border: transparent;\n            border-bottom: 1px solid var(--ion-color-ltgrey);\n            text-decoration: none; }\n  ion-content [your-account] [product-tabs] [tab-content] .widget [profile_ul] li a:before {\n              content: '\\f0a9';\n              font-family: 'FontAwesome';\n              position: absolute;\n              left: var(--ion-value-0);\n              top: var(--ion-value-5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAveW91ci1hY2NvdW50L3lvdXItYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFLQSxrQ0FBYSxFQUFBO0VBTGI7SUFHQyxpQkFBZ0IsRUFBQTtFQUdqQjtJQU5BO01BUUUscUNBQWdCO01BQ2YsbUNBQWM7TUFDZCxtQ0FBYztNQUNkLHNDQUFpQixFQUFBLEVBdW1CcEI7RUFybUJBO0lBYkE7TUFlSSxtQ0FBYyxFQUFBLEVBbW1CbEI7RUEvbEJDO0lBbkJEO01BcUJFLDZCQUE0QixFQUFBLEVBRTdCO0VBdkJEO0lBMEJJLG1DQUFtQztJQUNuQyxxQ0FBcUM7SUF3QnZDLGlCQUFBLEVBQWtCO0VBdEJuQjtNQTdCRDtRQStCRyxrQ0FBa0MsRUFBQTtRQS9CckM7VUFrQ0csNkJBQTRCLEVBQUEsRUFDM0I7RUFuQ0o7TUFzQ1MscUNBQXFDO01BQ3JDLG9EQUFvRDtNQUMxRCxrQ0FBbUM7TUFDbkMsZ0JBQWdCO01BQ2hCLHFDQUFzQztNQUN0QyxvRUFBc0U7TUFDdEUsNkJBQTZCO01BQzdCLGtCQUFrQixFQUFBO0VBN0NyQjtRQWdEUSxnQkFBZ0IsRUFBQTtFQWhEeEI7TUFzREssa0NBQWlDLEVBQUE7RUF0RHRDO1FBMERHLHFCQUFvQjtRQUNwQixXQUFVO1FBQ1YseUJBQXlCLEVBQUE7RUE1RDVCO1VBK0RpQiw2QkFBNkI7VUFDekMscUJBQXFCO1VBQ3JCLG1EQUFtRDtVQUNuRCxvQ0FBb0M7VUFDcEMsa0NBQWtDO1VBQ2xDLGtCQUFrQjtVQUNsQixlQUFjO1VBQ2QsaURBQWtELEVBQUE7RUFFakQ7VUF4RU47WUEwRVEsYUFBYTtZQUNiLFlBQVc7WUFDWCwrQ0FBOEMsRUFBQSxFQTBEbEQ7RUF0SUo7VUErRVUsNENBQTJDO1VBQy9DLHFCQUFvQjtVQUNoQiw2QkFBNEI7VUFDaEIsNkJBQTRCO1VBQ3pDLFdBQVU7VUFDYix3QkFBd0I7VUFDeEIseUJBQXdCO1VBQ3hCLGlCQUFnQjtVQUNoQixrQ0FBa0M7VUFDbEMsa0NBQWtDO1VBQ2xDLHFDQUFxQztVQUNyQyxtQkFBa0IsRUFBQTtFQUNoQjtZQTNGUjtjQTRGYyxZQUFXO2NBQ2hCLHdCQUF3QjtjQUNwQixrQ0FBa0M7Y0FDckMsa0NBQWtDLEVBQUE7Y0EvRjVDO2dCQWlHUyxrQ0FBa0M7Z0JBQ2xDLCtCQUErQjtnQkFDL0IsZ0NBQWdDLEVBQUEsRUFDbEM7RUFwR1A7WUF3R08sa0NBQWlDLEVBQUE7RUF4R3hDO1lBNEdZLGdDQUFpQztZQUN2Qyx3QkFBeUI7WUFDekIsbUJBQW1CLEVBQUE7RUFDbEI7Y0EvR1A7Z0JBZ0hTLHdCQUF3QjtnQkFDdkIscUNBQXNDO2dCQUN4Qyw2QkFBOEIsRUFBQTtnQkFsSHRDO2tCQW9IUyw2QkFBOEIsRUFBQSxFQUNoQztFQXJIUDtZQTBIWSw2QkFBNkI7WUFDbkMscUNBQXFDLEVBQUE7RUFDckM7Y0E1SE47Z0JBOEhRLDZCQUE4QixFQUFBO2dCQTlIdEM7a0JBZ0lTLDZCQUE4QixFQUFBLEVBQ2hDO0VBaklQO1FBeUljLHlFQUF5RTtRQW1KckYsc0JBQUE7UUFrQ0csc0JBQUE7UUFDQyxnQkFBQTtRQTZHRCxjQUFBO1FBWUEsdUJBQUE7UUFrSUYsc0JBQUEsRUFBdUI7RUE5YXJCO1VBNUlMO1lBOEltQiw2QkFBNkIsRUFBQTtZQTlJaEQ7Y0FpSk0saUNBQWdDLEVBQUEsRUFDL0I7RUFsSlA7VUFxSk8sb0JBQUE7VUFrREYsbUJBQUEsRUFBb0I7RUF2TXpCO1lBd0pJLDhCQUE2QixFQUFBO0VBeEpqQztjQTBKTSxtQ0FBbUM7Y0FDdEMsK0NBQStDO2NBQy9DLGtCQUFrQjtjQUNsQixrQ0FBYSxFQUFBO0VBN0poQjtnQkFpS0csa0NBQWlDO2dCQUNqQyxnQkFBZSxFQUFBO0VBQ2Y7a0JBbktIO29CQW9LSSxtQkFBbUI7b0JBQ25CLGtDQUFpQyxFQUFBLEVBTWpDO0VBSkU7a0JBdktOO29CQXlLSSxrQ0FBaUMsRUFBQSxFQUVqQztFQTNLSjtnQkE4S0csa0NBQWlDO2dCQUNqQyxjQUFjLEVBQUE7RUFDZDtrQkFoTEg7b0JBa0xJLGtDQUFpQyxFQUFBLEVBTWpDO0VBSkU7a0JBcExOO29CQXNMSSxrQ0FBaUMsRUFBQSxFQUVqQztFQXhMSjtnQkEyTE0sa0NBQWlDLEVBQUE7RUFDcEM7a0JBNUxIO29CQThMSSxrQ0FBaUMsRUFBQSxFQU1qQztFQUpFO2tCQWhNTjtvQkFrTUksa0NBQWlDLEVBQUEsRUFFakM7RUFJQTtZQXhNSjtjQTBNa0IsWUFBYyxFQUFBO2NBMU1oQztnQkE4TU8sK0JBQThCLEVBQUE7Y0E5TXJDO2dCQWlOVyxtQkFBbUI7Z0JBQ1AsOEJBQThCO2dCQWE5QyxXQUFVO2dCQUNWLGtCQUFpQixFQUFBO2dCQWhPeEI7a0JBcU5NLDZCQUE2QjtrQkFDN0IsZ0JBQWdCO2tCQUNoQiwwQkFBMEI7a0JBQzFCLGdDQUFnQztrQkFDaEMsa0NBQWtDLEVBQUE7Z0JBek54QztrQkE2TlEsa0JBQWtCLEVBQUE7Z0JBN04xQjtrQkFtT00sa0JBQWtCO2tCQUNsQixZQUFZO2tCQUNaLGFBQWE7a0JBQUUsd0NBQXdDO2tCQUN2RCxvQkFBaUI7cUJBQWpCLGlCQUFpQixFQUFBO2dCQXRPdkI7a0JBNE9RLHVCQUF1QjtrQkFDdkIsd0JBQXdCO2tCQUN4QixnQ0FBaUM7a0JBQ2pDLGtCQUFrQjtrQkFDbEIsNkJBQTZCO2tCQUM3QixrQkFBa0I7a0JBQ2xCLFVBQVU7a0JBQ1Ysa0NBQWtDO2tCQUNsQywwQkFBMkI7a0JBQzNCLGNBQWM7a0JBQ2Qsd0JBQXdCO2tCQUN4Qix5QkFBMEI7a0JBQzFCLDhCQUE4QixFQUFBO2NBeFB0QztnQkFvUVEscUNBQW9DO2dCQUNwQyxrQ0FBaUM7Z0JBQzFDLGdEQUErQyxFQUFBLEVBUXJDO0VBUEw7TUF2UUo7UUEyUU8saUJBQWEsRUFBQSxFQUNkO0VBNVFOO1VBcVJXLGtCQUFpQjtVQUNqQixpQ0FBZ0M7VUFDaEMsdUJBQXVCO1VBQ3ZCLHdCQUF5QjtVQUN6Qiw2QkFBOEI7VUFDOUIsNkJBQTZCLEVBQUE7RUExUnhDO1VBaVNPLGlCQUFhLEVBQUE7RUFDYjtZQWxTUDtjQW9TWSxvQkFBZ0I7Y0FDckIsV0FBVztjQUNYLFlBQVk7Y0FDWixlQUFlO2NBQ2YsYUFBYSxFQUFBLEVBRWI7RUExU1A7VUFnVE8seUNBQXlDO1VBQ3pDLDJEQUEyRDtVQUMzRCxzQkFBcUIsRUFBQTtFQUt4QjtVQXZUSjtZQTBUTyxrQ0FBa0MsRUFBQSxFQUNqQztFQTNUUjtVQW9VSSxrQ0FBaUMsRUFBQTtFQUVsQztVQXRVSDtZQTRVZSxnQ0FBZ0M7WUFDTCw2QkFBNkIsRUFBQTtZQTdVdkU7Y0FpVlcsaUNBQWlDLEVBQUE7WUFqVjVDO2NBcVY4QyxrQ0FBa0M7Y0FDbkUsZ0JBQWU7Y0FDZixxQ0FBcUMsRUFBQTtZQXZWbEQ7Y0EyVmlCLGtDQUFrQztjQUNELHdCQUF3QixFQUFBO1lBNVYxRTtjQStWc0Isa0NBQWtDO2NBQ0QsaUNBQWlDO2NBQ3hFLGFBQWE7Y0FDaEIsbUJBQW1CO2NBQ25CLGdCQUFnQjtjQUNlLHFDQUFxQyxFQUFBO1lBcFdqRjtjQXdXYyxrQ0FBa0MsRUFBQTtZQXhXaEQ7Y0E4V3NELGtDQUFrQztjQUNsQywyQkFBMkIsRUFBQTtZQS9XakY7Y0FtWDJELGNBQWM7Y0FDM0QsZ0NBQWdDO2NBQ2hDLGtDQUFrQztjQUNsQywwQkFBMEIsRUFBQSxFQUMzQjtFQXZYYjtVQStYMkIsaUNBQWlDO1VBQ3RELHFDQUFxQyxFQUFBO0VBaFkzQztZQW1ZVyxvREFBb0QsRUFBQTtFQW5ZL0Q7WUF1WWtDLHNCQUFxQjtZQUMxQyx5Q0FBeUMsRUFBQTtFQXhZdEQ7Y0ErWXdDLG9DQUFtQztjQUNuQyxzQ0FBcUMsRUFBQTtFQWhaN0U7Y0FxWmUsdUJBQXVCO2NBQzdCLGtCQUFrQjtjQUNsQixzQkFBc0I7Y0FDdEIsWUFBWTtjQUNaLHdCQUF5QjtjQUN6QixvQkFBaUI7aUJBQWpCLGlCQUFpQixFQUFBO0VBMVoxQjtjQTZaTyxxQ0FBcUM7Y0FDckMsMkNBQTJDO2NBQzNDLHVDQUF1QztjQUN2Qyw2QkFBNkI7Y0FDMUIsbURBQW9EO2NBQ3ZELHdDQUF3QyxFQUFBO0VBbGEvQztnQkFxYVEsWUFBVyxFQUFBO0VBcmFuQjtVQThhSSx5QkFBeUI7VUFDekIsa0NBQWtDO1VBQ2xDLGdCQUFnQjtVQUNoQixnQ0FBZ0M7VUFDaEMscUNBQXFDLEVBQUE7RUFDbEM7WUFuYlA7Y0FxYk8sK0NBQWtELEVBQUEsRUFFdEQ7RUFHRztVQTFiTjtZQTRiTywrQ0FBa0QsRUFBQSxFQTZIdEQ7RUF6akJIO1VBK2JRLHFDQUFxQztVQUN4QyxrQ0FBa0M7VUFDbEMseUJBQXlCO1VBQ3pCLDZCQUE4QjtVQUM5QixZQUFZO1VBQ1osaUNBQWlDO1VBQ2pDLHlCQUF5QixFQUFBO0VBcmM5QjtZQTBjVyxxQ0FBcUM7WUFDeEMsa0NBQWtDO1lBQ2xDLHlCQUF5QjtZQUN6QixjQUFjO1lBQ2QsMkJBQTJCO1lBQzNCLGtDQUFrQztZQUNsQyxpQkFBaUI7WUFDakIscUJBQXFCLEVBQUE7RUFqZDdCO2NBcWRVLG9DQUFvQztjQUNwQyw2QkFBNkI7Y0FDOUIscUJBQXFCO2NBQ3JCLGtDQUFrQztjQUNsQyxvREFBb0QsRUFBQTtFQXpkN0Q7VUFnZVEsbUNBQW9DO1VBQ3ZDLDBFQUE0RTtVQUM1RSxtQ0FBb0M7VUFDcEMsZ0NBQWdDO1VBQzdCLHFDQUFxQyxFQUFBO0VBQ3JDO1lBcmVSO2NBdWVXLGtDQUFrQztjQUNiLDZCQUE2QixFQUFBO2NBeGU3RDtnQkEyZVMsd0JBQXVCO2dCQUN2QixpQkFBYSxFQUFBLEVBQ2I7RUE3ZVQ7WUFpZlUsZ0JBQWdCO1lBQ25CLHFDQUFxQztZQUNyQyw2QkFBNkI7WUFDN0IsbUNBQW9DO1lBQ3BDLGlDQUFnQztZQUNoQyxrQ0FBaUMsRUFBQTtFQUNoQztjQXZmUjtnQkF5ZmEsa0NBQWlDLEVBQUEsRUFFeEM7RUEzZk47WUFnZ0JXLFlBQVksRUFBQTtFQUNkO2NBamdCVDtnQkFtZ0JjLFlBQVksRUFBQSxFQUVuQjtFQXJnQlA7WUF5Z0JNLGlCQUFhLEVBQUE7RUF6Z0JuQjtjQTRnQk8sWUFBVyxFQUFBO0VBNWdCbEI7WUFpaEJpQixtQ0FBYTtZQUNyQixtQ0FBbUMsRUFBQTtFQWxoQjVDO2NBc2hCZSxxQkFBcUI7Y0FDN0IsZUFBZTtjQUNmLGtDQUFrQztjQUNsQyxnQkFBZ0I7Y0FDaEIsaUNBQWlDO2NBQ2pDLGtDQUFrQztjQUNsQyxxQ0FBcUM7Y0FDckMsMkJBQW1CO3NCQUFuQixtQkFBbUIsRUFBQTtFQUNuQjtnQkE5aEJQO2tCQStoQlEsa0NBQWtDO2tCQUNsQyxrQ0FBa0M7a0JBQ2xDLG1CQUFtQjtrQkFDaEIsY0FBYSxFQUFBLEVBRWxCO0VBcGlCTjtjQXNpQmUsaUNBQWlDO2NBQzFDLGdCQUFnQjtjQUNoQixrQ0FBa0M7Y0FDbEMsc0JBQXNCO2NBQ3RCLGtDQUFpQztjQUNqQyxtQ0FBa0M7Y0FDbEMsK0RBQWdFO2NBQ2hFLHFDQUFxQyxFQUFBO0VBQ3JDO2dCQTlpQk47a0JBK2lCVSx1QkFBc0I7a0JBQ3JCLHVCQUFzQjtrQkFBQyxrQ0FBa0M7a0JBQzFELGlDQUFpQztrQkFDbkMsMEVBQXlFO2tCQUN6RSwyQkFBMkIsRUFBQSxFQUU3QjtFQXJqQk47VUErakJJLHFDQUFxQyxFQUFBO0VBL2pCekM7WUFra0JTLG1EQUFtRDtZQUN0RCxZQUFZO1lBQ1osZ0NBQWdDLEVBQUE7RUFNcEM7VUExa0JGO1lBNGtCSSwrQ0FBa0QsRUFBQSxFQWtDbkQ7RUE5bUJIO1VBZ2xCRyw4QkFBOEI7VUFDOUIsd0NBQXVDO1VBQ3ZDLGtDQUFrQztVQUNsQyx5Q0FBeUM7VUFDekMsb0NBQW9DO1VBQ3BDLGdCQUFlLEVBQUE7RUFybEJsQjtZQTBsQlMscUNBQXFDO1lBQ3hDLDZCQUE2QjtZQUMxQixrQkFBaUI7WUFDakIsY0FBYztZQUNqQixxRkFBeUY7WUFDekYsa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQixnREFBZ0Q7WUFDaEQscUJBQW9CLEVBQUE7RUFsbUIxQjtjQW9tQk0sZ0JBQWdCO2NBQ2hCLDBCQUEwQjtjQUMxQixrQkFBa0I7Y0FDbEIsd0JBQXlCO2NBQ3pCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAveW91ci1hY2NvdW50L3lvdXItYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgaW9uLWNvbnRlbnRcclxueyAgXHJcblx0LnVwZGF0ZUJ0bntcclxuXHRcdHBvc2l0aW9uOmluaGVyaXQ7XHRcclxuXHR9XHJcblx0LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmV5KTtcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0e1xyXG4gICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcbiAgICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdH1cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkxcHgpXHJcblx0XHR7XHJcblx0XHRcdCAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0XHR9XHJcblx0LmNvbnRhaW5lclxyXG5cdHtcclxuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdHtcclxuXHRcdFx0cGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdH1cclxuXHR9XHJcblx0W3lvdXItYWNjb3VudF1cclxuXHR7IFxyXG5cdCAgICBtYXJnaW4tYm90dG9tOnZhciggLS1pb24tbWFyZ2luLTIwKTtcclxuXHQgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFxyXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHR7IFxyXG5cdFx0XHQgbWFyZ2luLWJvdHRvbTp2YXIoIC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRpb24tY29sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0IFtoZWFkLWFjY291bnRdXHJcblx0XHQgeyAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHQgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0xNSk7XHJcblx0XHRcdFx0Zm9udC1zaXplOiB2YXIoIC0taW9uLWZvbnQtc2l6ZS0xNyk7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoIC0taW9uLWNvbG9yLWRhcmtibHVlKTtcclxuXHRcdFx0XHRtYXJnaW46dmFyKCAtLWlvbi1tYXJnaW4tMCkgdmFyKCAtLWlvbi1tYXJnaW4tMCkgdmFyKCAtLWlvbi1tYXJnaW4tMjApO1xyXG5cdFx0XHRcdGNvbG9yOnZhciggLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHQuYWRkLXBheW1lbnQtYnRuXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ICAgIG1hcmdpbi10b3A6IC01cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0IH1cclxuXHRcdCAvKiBwcm9maWxlIHBhZ2UgKi9cclxuXHQgIFtwcm9kdWN0LXRhYnMgXVxyXG5cdCAgeyAgIFxyXG5cdCAgICAgYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0IFxyXG5cdFx0ICBpb24tc2VnbWVudFxyXG5cdFx0ICB7XHJcblx0XHQgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdFx0ICB3aWR0aDoxMDAlO1xyXG5cdFx0ICBib3JkZXI6IDFweCBzb2xpZCAjZjVmNWY1O1xyXG5cdFx0XHRcdCAgW2xpbmstbm90aWZpY2F0aW9uXVxyXG5cdFx0XHRcdCAge1xyXG5cdFx0ICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTQpIHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0XHRcdGN1cnNvcjpwb2ludGVyO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46ICB2YXIoLS1pb24tbWFyZ2luLTExKSB2YXIoLS1pb24tbWFyZ2luLTIwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHQgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0XHRcdCAgZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0XHQgIGJvcmRlcjpub25lO1xyXG5cdFx0XHRcdFx0XHRcdCAgYm9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXkyKTtcclxuXHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdGlvbi1zZWdtZW50LWJ1dHRvblxyXG5cdFx0XHRcdCAgeyAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pb24tdmFsdWUtMCkhaW1wb3J0YW50O1xyXG5cdFx0XHRcdCAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdCAgICAgICBtaW4td2lkdGg6IGluaXRpYWwhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogaW5pdGlhbCFpbXBvcnRhbnQ7XHJcblx0XHRcdCAgICAgICBmbG9hdDpsZWZ0O1x0XHRcclxuXHRcdFx0XHQgICBoZWlnaHQ6IHZhcigtLWlvbi13aC00OCk7XHJcblx0XHRcdFx0ICAgYm9yZGVyOjFweCBzb2xpZCAjZWNlY2VjO1xyXG5cdFx0XHRcdCAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0XHRcdFx0ICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2szKTtcclxuXHRcdFx0XHQgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG5cdFx0XHRcdCAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0ICAgbWFyZ2luLWJvdHRvbTotMXB4O1xyXG5cdFx0XHRcdCAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0ICB7ICAgICAgIGJvcmRlcjpub25lO1xyXG5cdFx0XHRcdFx0ICAgICBoZWlnaHQ6IHZhcigtLWlvbi13aC0zMCk7XHJcblx0XHRcdFx0XHQgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHQgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMCk7XHJcblx0XHRcdFx0XHRcdCAgICBpb24taWNvbntcclxuXHRcdFx0XHRcdFx0XHRcdCAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTIwKTtcclxuXHRcdFx0XHRcdFx0XHRcdCAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdCAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0ICAgaW9uLWxhYmVsXHJcblx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0ICAgbWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdCAgIH1cclxuXHRcdFx0XHQgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgXHJcblx0XHRcdFx0ICAgeyAgICBcclxuICAgICAgICBcdFx0XHRcdCBjb2xvcjp2YXIoICAtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XHJcblx0XHRcdFx0XHRcdCBoZWlnaHQ6ICB2YXIoLS1pb24td2gtNDgpO1xyXG5cdFx0XHRcdFx0XHQgYmFja2dyb3VuZDogI2VjZWNlYztcclxuXHRcdFx0XHRcdFx0ICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdCAgeyBoZWlnaHQ6IHZhcigtLWlvbi13aC0zMCk7XHJcblx0XHRcdFx0XHRcdCAgICAgYmFja2dyb3VuZDp2YXIoICAtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XHJcblx0XHRcdFx0XHRcdCAgIGNvbG9yOnZhciggIC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdFx0ICAgIGlvbi1pY29ue1xyXG5cdFx0XHRcdFx0XHRcdFx0ICBjb2xvcjp2YXIoICAtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHQgICB9XHJcblx0XHRcdCAgICY6aG92ZXJcclxuXHRcdFx0XHQgICB7ICAgIFxyXG4gICAgICAgIFx0XHRcdFx0IGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHQgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtibHVlKTtcclxuXHRcdFx0XHRcdFx0IEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0ICB7IFxyXG5cdFx0XHRcdFx0XHQgICBjb2xvcjp2YXIoICAtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHRcdCAgICBpb24taWNvbntcclxuXHRcdFx0XHRcdFx0XHRcdCAgY29sb3I6dmFyKCAgLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdCAgXHJcblx0XHRcdCAgfVxyXG5cdFx0ICB9XHJcblx0XHQgW3RhYi1jb250ZW50XVxyXG5cdFx0IHtcclxuICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTApIHZhcigtLWlvbi1wYWRkaW5nLTIwKSB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdFx0ICAgXHJcblx0XHRcdCAgXHJcblx0XHRcdCAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApIDtcclxuXHRcdFx0XHRcdGlvbi1saXN0XHJcblx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0ICBwYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdFx0XHQgICB9XHJcblx0XHRcdFx0IH1cdFx0XHRcdCBcclxuXHRcdFx0ICAgW3Byb2R1Y3QtdGFiXVxyXG5cdFx0XHQgICB7IC8qIFVzZXJzIExpc3QgU3RhcnQqL1xyXG5cdFx0XHQgICAmW3VzZXJzLWxpc3RdXHJcblx0XHR7XHJcblx0XHRcdCAgcGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0xNSk7XHRcclxuXHRcdFx0aW9uLWl0ZW1cclxuXHRcdFx0eyAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApO1xyXG5cdFx0XHRcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdFx0XHQtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG5cdFx0XHRcdGgzXHJcblx0XHRcdFx0eyAgIFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0XHRmb250LXdlaWdodDo3MDA7XHJcblx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdHttYXJnaW4tYm90dG9tOiAtNXB4O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW9uLW5vdGVcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG5cdFx0XHRcdGNvbG9yOiAjYTVhNWE1O1xyXG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMilcclxuXHRcdFx0XHR9XHJcblx0XHRcdCAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTApXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRwXHJcblx0XHRcdFx0e1xyXG5cdFx0XHQgICAgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpO1xyXG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMylcclxuXHRcdFx0XHR9XHJcblx0XHRcdCAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTIpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdCB9XHRcclxuXHRcdFx0ICAgLyogVXNlcnMgTGlzdCBFbmRzKi9cclxuXHRcdFx0XHQgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdCB7XHJcbiAgICAgICAgICAgICAgICAgICBib3JkZXI6bm9uZSAgIDtcclxuXHRcdFx0XHQgICBcclxuXHRcdFx0XHQgICAubWVkaWFcclxuXHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHQgICBtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMClcclxuXHRcdFx0XHQgICB9XHJcblx0XHRcdFx0ICAgLm1lZGlhLWxpbmtcclxuXHRcdFx0XHQgICB7ICAgIGJhY2tncm91bmQ6ICNjOGNjYzk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcclxuXHRcdFx0XHRcdFx0W25hbWUtdXNlcl1cclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2spO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0xMCk7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ICAgLm1lZGlhLW9iamVjdFxyXG5cdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHQgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHQgICB3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdFx0ICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0XHRcdFx0XHQgICBpbWdcclxuXHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMHB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwcHg7XHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0ICAgW2ltZy1lZGl0XVxyXG5cdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdFx0XHRcdCAgIGxhYmVsIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IHZhcigtLWlvbi13aC0zMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogdmFyKC0taW9uLXdoLTMwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6ICB2YXIoLS1pb24tdmFsdWUtMzUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogIHZhcigtLWlvbi12YWx1ZS01KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6IHZhcigtLWlvbi12YWx1ZS0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmlnaHQ6ICB2YXIoLS1pb24tdmFsdWUtMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdCAgIH1cclxuXHRcdFx0XHQgICAubWVkaWEtYm9keVxyXG5cdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdCAgIGlvbi1saXN0XHJcblx0XHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHRcdCAgIGlvbi1pdGVtXHJcblx0XHRcdFx0XHRcdCAgIHsgIFxyXG5cdFx0XHRcdFx0XHRcdCAgZm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHRcdCAgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTIpO1x0XHJcbmJvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1sdGdyZXkpO1xyXG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpb24tYnV0dG9uXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQgLS1ib3gtc2hhZG93Om5vbmU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdCB9XHRcdFx0XHQgXHJcblx0XHRcdCAgIH1cclxuXHRcdFx0IC5idG4tY2lyY2xlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IG1hcmdpbi1yaWdodDp2YXIoLS1pb24tbWFyZ2luLTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHdpZHRoOiB2YXIoLS1pb24td2gtMzApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGhlaWdodDogIHZhcigtLWlvbi13aC0zMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgbGluZS1oZWlnaHQ6ICB2YXIoLS1pb24td2gtMzApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHQvKkxvZ2luIERldGFpbCBTdGFydHMqL1xyXG5cdFx0XHQgICBbbG9naW4tZGV0YWlsXVxyXG5cdFx0XHQgICB7XHJcblx0XHRcdFx0ICAgaW9uLWJ1dHRvblxyXG5cdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdCAgIC0tYm94LXNoYWRvdzpub25lO1xyXG5cdFx0XHRcdFx0ICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHQgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMzBweDtcclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMzBweDtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7ICBcclxuXHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHQgICB9XHJcblx0XHRcdFx0ICAgIHRyXHJcblx0XHRcdFx0XHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGRcclxuXHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0ICBcclxuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEwKSAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1sdGdyZXkpICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHRcdFx0XHRcdH1cdFxyXG4gICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0IHsgICBpb24taXRlbVxyXG5cdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHQgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7IFxyXG5cdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHQgfVx0XHRcdFx0XHQgICBcclxuXHRcdFx0ICAgfVxyXG5cdFx0XHQgICAvKiBMb2dpbiBEZXRhaWwgRW5kcyAqL1xyXG5cdFx0XHQgICBcdC8qT3JkZXJzIFN0YXJ0cyovXHJcblx0XHRbb3JkZXJzXVxyXG5cdFx0IHtcclxuXHRcdFx0IFtoZWFkLWFjY291bnRdXHJcblx0XHRcdCB7XHJcblx0XHRcdFx0IG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0IH1cclxuXHRcdFx0IEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0IHtcclxuXHRcdFx0XHQgW21vYi1vcmRlcnNdXHJcblx0XHRcdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgaW9uLWl0ZW1cclxuXHRcdFx0XHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS00KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBoM1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgZm9udC13ZWlnaHQ6NzAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpb24tYmFkZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1pb24td2gtMTYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFthcnJvdy1zbWFsbF1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtwcmljZS10aW1lXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaDMgLCBpb24tbm90ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHQgfVxyXG5cdFx0XHQgdGFibGV7XHJcblx0XHRcdFx0XHRcdHRyXHJcblx0XHRcdFx0XHRcdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHRcdHRkXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTIwKSB2YXIoLS1pb24tcGFkZGluZy0xNSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dGggLCB0ZFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1sdGdyZXkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgXHJcblx0XHRcdFx0XHRcdFx0XHQgICAmW3ZpZXdfZGV0YWlsc11cclxuXHRcdFx0XHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFjdGlvbi1pY29uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIH1cdFx0XHRcdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHRcdCAgIGltZ1xyXG5cdFx0XHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgd2lkdGg6IHZhcigtLWlvbi13aC03MCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMnB4O1x0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogIHZhcigtLWlvbi13aC03MCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHRcdCAgIC5idG4tdGhlbWUge1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctNikgIHZhcigtLWlvbi1wYWRkaW5nLTEyKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHQmOmhvdmVyXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6MC44O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHQgfVxyXG5cdFx0ICAgXHQvKk9yZGVycyBFbmRzKi9cclxuXHRcdFx0W2Jsb2NrLXRpdGxlXXtcclxuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTUpO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsdWUpO1xyXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdCAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQgIHBhZGRpbmc6IHZhcigtLWlvbi12YWx1ZS0wKSAgICB2YXIoLS1pb24tdmFsdWUtMTUpIFx0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ICBcdC8qIEFkZCBFZGl0IEZvcm0gU3RhcnQqL1xyXG5cdFx0XHRbcGFuZWxdXHJcblx0XHRcdHsgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0ICBwYWRkaW5nOiB2YXIoLS1pb24tdmFsdWUtMCkgICAgdmFyKC0taW9uLXZhbHVlLTE1KSBcdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFtwYW5lbC1oZWFkaW5nXVxyXG5cdFx0XHRcdHsgICBcdGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0yMCk7XHJcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6ICB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcblx0XHRcdFx0XHRcdGg0XHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRhXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrMyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdCBzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7ICAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tMTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0yMCk7XHJcblx0XHRcdFx0XHRcdFx0XHQgfVx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0W3BhbmVsLWJvZHldXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ICAgIGJhY2tncm91bmQ6IHZhciggLS1pb24tY29sb3ItZ3JleWY4KTtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTApICB2YXIoLS1pb24tcGFkZGluZy0yMCkgIHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogIHZhcigtLWlvbi1tYXJnaW4tMjApO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTIwKTtcclxuXHRcdFx0XHRcdFx0ICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0ICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdCBpb24tYnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgaGVpZ2h0OnZhcigtLWlvbi13aC0zMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAtLWJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdFx0W2hlYWQtcGF5bWVudF1cclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdCAgICBmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogIHZhcigtLWlvbi1tYXJnaW4tMjApO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xOCk7XHJcblx0XHRcdFx0XHRcdFx0XHQgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgXHRmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcblx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LmNhcmQtcHN5c1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aW1nXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIHdpZHRoOiAyMDBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0IEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgd2lkdGg6IDE1MHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpb24tYnV0dG9uXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQtLWJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHRcdFx0XHQmOmhvdmVyXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTowLjg7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFtmb3JtLWdyb3VwXVxyXG5cdFx0XHQgIHtcclxuICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0ICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xMCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQgIGlvbi1sYWJlbFxyXG5cdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0ICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdHtmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIGRpc3BsYXk6YmxvY2s7XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0ICB9XHJcblx0XHRcdFx0ICBpb24taW5wdXQgLCBpb24tc2VsZWN0XHJcblx0XHRcdFx0ICB7ICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTMpO1xyXG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IHZhcigtLWlvbi13aC00MikhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICB2YXIoLS1pb24tcGFkZGluZy0xMCkgIHZhcigtLWlvbi1wYWRkaW5nLTEwKSFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHR7ICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBib3JkZXItcmFkaXVzOiB2YXIoLS1pb24tdmFsdWUtMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci13aWR0aDp2YXIoLS1pb24tdmFsdWUtMCkgdmFyKC0taW9uLXZhbHVlLTApIDFweCB2YXIoLS1pb24tdmFsdWUtMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICBpbmhlcml0IWltcG9ydGFudDsgIFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCAgfVxyXG5cdFx0XHRcdCAgXHJcblx0XHRcdCAgfVx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFx0LyogQWRkIEVkaXQgRm9ybSBFbmRzKi9cclxuXHRcdFx0LnRhYmxlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0clxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHR0ZFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctOSkgdmFyKC0taW9uLXBhZGRpbmctMTUpO1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QwZDBkMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0LndpZGdldCBcclxuXHRcdFx0e1xyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdHtcclxuXHRcdFx0ICBwYWRkaW5nOiB2YXIoLS1pb24tdmFsdWUtMCkgICAgdmFyKC0taW9uLXZhbHVlLTE1KSBcdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRbcHJvZmlsZV91bF1cclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTEwKTtcclxuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbHRncmV5KTtcclxuXHRcdFx0XHRib3gtc2hhZG93OiAwcHggMHB4IDIycHggMHB4ICNkY2RjZGM7XHJcblx0XHRcdFx0bGlzdC1zdHlsZTpub25lO1xyXG5cdFx0XHRcdFx0bGlcclxuXHRcdFx0XHRcdHsgXHJcblx0XHRcdFx0XHQgYVxyXG5cdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0ICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XHJcblx0XHRcdFx0XHRcdCAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICB2YXIoLS1pb24tdmFsdWUtNSkgIHZhcigtLWlvbi12YWx1ZS0wKSAgdmFyKC0taW9uLXZhbHVlLTUpICB2YXIoLS1pb24tdmFsdWUtMjApO1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXI6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbHRncmV5KTtcclxuXHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHRcdFx0XHRcdFx0JjpiZWZvcmUge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICdcXGYwYTknO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHRsZWZ0OiAgdmFyKC0taW9uLXZhbHVlLTApO1xyXG5cdFx0XHRcdFx0XHRcdHRvcDogdmFyKC0taW9uLXZhbHVlLTUpO1xyXG5cdFx0XHRcdFx0XHR9IFxyXG5cdFx0XHRcdFx0IFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0IH1cdFx0IFxyXG5cdCAgfVxyXG5cdH1cclxufVx0Il19 */"

/***/ }),

/***/ "./src/app/your-account/your-account.page.ts":
/*!***************************************************!*\
  !*** ./src/app/your-account/your-account.page.ts ***!
  \***************************************************/
/*! exports provided: YourAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourAccountPage", function() { return YourAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _invoice_invoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../invoice/invoice.page */ "./src/app/invoice/invoice.page.ts");







var YourAccountPage = /** @class */ (function () {
    function YourAccountPage(toastController, userService, loadingController, router, _zone, events, alertController, modalController, activatedRoute) {
        this.toastController = toastController;
        this.userService = userService;
        this.loadingController = loadingController;
        this.router = router;
        this._zone = _zone;
        this.events = events;
        this.alertController = alertController;
        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
        this.tabs = "profile";
        this.buttonClicked = false;
        // EditpayClicked: boolean = false; 
        this.AddpayClicked = false;
        // editaddressClicked: boolean = false; 
        this.addaddressClicked = false;
        // editdetailClicked: boolean = false;  
        this.editpasswordClicked = false;
        this.buttonClickeddrop = false;
        this.current_address_id = null;
        this.errors = ['', null, undefined];
        this.isBrowser = localStorage.getItem('isBrowser');
        this.profile_ = {};
        this.my_wish_products = [];
        this.allowedMimes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp'];
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_5__["config"].IMAGES_URL;
    }
    YourAccountPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (_this.errors.indexOf(params['address']) == -1) {
                if (params['address'] == 'true') {
                    _this.tabs = 'addresses';
                }
            }
        });
    };
    YourAccountPage.prototype.ionViewDidEnter = function () {
        var token = localStorage.getItem('sin_auth_token');
        this.userId = this.userService.decryptData(token, _config__WEBPACK_IMPORTED_MODULE_5__["config"].ENC_SALT);
        if (this.userId != 0) {
            this.getProfile();
            this.getOrders();
            this.getWishedProducts();
        }
    };
    YourAccountPage.prototype.getProfile = function () {
        var _this = this;
        this.presentLoading();
        this.userService.postData({ userId: this.userId }, 'getProfile').subscribe(function (result) {
            _this.profile = result.profile;
            _this.countries = result.countries;
            _this.addresses = result.addresses;
            _this.cards = result.cards;
            _this.purchase_All = result.purchase_All;
            _this.purchase_days7 = result.purchase_days7;
            _this.purchase_days30 = result.purchase_days30;
            _this.stopLoading();
            if (_this.profile != '') {
                _this.initialize();
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    YourAccountPage.prototype.getOrders = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId }, 'getAllOrders').subscribe(function (result) {
            _this.orders = result.orders;
            _this.registries = result.registries;
            console.log(result);
        }, function (err) {
            _this.orders = [];
        });
    };
    YourAccountPage.prototype.getWishedProducts = function () {
        var _this = this;
        this.userService.postData({ user_id: this.userId }, 'getCartProductsIds').subscribe(function (result) {
            _this.my_wish_products = result.wishlist;
        }, function (err) {
            _this.my_wish_products = [];
        });
    };
    YourAccountPage.prototype.initialize = function () {
        this.profile_name = this.profile.name;
        this.profile_last_name = this.profile.last_name;
        this.profile_email = this.profile.email;
        this.profile_phone = this.profile.phone;
        this.profile_address = this.profile.address;
        this.profile_city = this.profile.city;
        this.profile_state = this.profile.state;
        this.profile_country = this.profile.country;
        this.user_created_at = this.profile.created_at;
        this.user_last_login = this.profile.last_login;
    };
    YourAccountPage.prototype.editProfile = function () {
        var self = this;
        if (this.buttonClicked == false) {
            this.scroll(580);
            this.initialize();
        }
        this.buttonClicked = !this.buttonClicked;
    };
    YourAccountPage.prototype.updateProfile = function () {
        var _this = this;
        if (this.errors.indexOf(this.profile_name) >= 0) {
            this.presentToast('Please enter first name.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.profile_last_name) >= 0) {
            this.presentToast('Please enter last name.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.profile_email) >= 0) {
            this.presentToast('Please enter email address.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.profile_phone) >= 0) {
            this.presentToast('Please enter phone number.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.profile_address) >= 0) {
            this.presentToast('Please enter address.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.profile_city) >= 0) {
            this.presentToast('Please enter city.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.profile_state) >= 0) {
            this.presentToast('Please enter state.', 'danger');
            return false;
        }
        if (this.errors.indexOf(this.profile_country) >= 0) {
            this.presentToast('Please select country.', 'danger');
            return false;
        }
        this.presentLoading();
        var data = {
            id: this.userId,
            name: this.profile_name,
            last_name: this.profile_last_name,
            email: this.profile_email,
            phone: this.profile_phone,
            address: this.profile_address,
            city: this.profile_city,
            state: this.profile_state,
            country: this.profile_country,
        };
        this.userService.postData(data, 'updateUserProfile').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.profile = result.data;
                _this.editProfile();
                _this.presentToast('Profile updated successfully.', 'success');
                _this.scroll(0);
                _this.profile.profile_picture = result.data.profile_picture;
                var data_ = {
                    name: _this.profile_name + ' ' + _this.profile_last_name,
                    profile_picture: _this.profile.profile_picture
                };
                _this.events.publish('user_logged_in:true', data_);
                localStorage.setItem('sin_auth_user_name', data_.name);
                localStorage.setItem('sin_auth_user_image', data_.profile_picture);
            }
            else if (result.status == 2) {
                _this.presentToast('Email already exists.', 'danger');
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    YourAccountPage.prototype.invoice = function (order_details) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _invoice_invoice_page__WEBPACK_IMPORTED_MODULE_6__["InvoicePage"],
                            componentProps: { order: order_details }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    YourAccountPage.prototype.uploadImg = function (event) {
        var _this = this;
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            var image_file = event.target.files[0];
            if (self.allowedMimes.indexOf(image_file.type) == -1) {
                this.presentToast('Please select valid image.', 'danger');
            }
            else {
                var formData = new FormData();
                formData.append('file', image_file);
                formData.append('userId', self.userId);
                this.presentLoading();
                this.userService.postData(formData, 'updateProfilePic').subscribe(function (result) {
                    _this.stopLoading();
                    if (result.status == 1) {
                        _this.profile.profile_picture = result.data;
                        var data_ = {
                            name: _this.profile_name + ' ' + _this.profile_last_name,
                            profile_picture: _this.profile.profile_picture
                        };
                        _this.events.publish('user_logged_in:true', data_);
                        localStorage.setItem('sin_auth_user_name', data_.name);
                        localStorage.setItem('sin_auth_user_image', data_.profile_picture);
                        _this.presentToast('Profile picture updated successfully.', 'success');
                    }
                    else {
                        _this.presentToast('Error while updating image,Please try later.', 'danger');
                    }
                }, function (err) {
                    _this.stopLoading();
                    _this.presentToast('Error while updating image,Please try later.', 'danger');
                });
            }
        }
    };
    YourAccountPage.prototype.scroll = function (position) {
        var self = this;
        this._zone.run(function () {
            setTimeout(function () {
                self.content.scrollToPoint(0, position, 2000);
            });
        });
    };
    YourAccountPage.prototype.cancelProfile = function () {
        this.editProfile();
        this.scroll(0);
    };
    // Editpay() {
    //   this.EditpayClicked = !this.EditpayClicked;
    // } 
    YourAccountPage.prototype.Addpay = function (type, c_index, card) {
        if (type === void 0) { type = null; }
        if (c_index === void 0) { c_index = null; }
        if (card === void 0) { card = {}; }
        this.AddpayClicked = !this.AddpayClicked;
        if (this.AddpayClicked == true) {
            this.scroll(170 + (this.cards.length * 55));
        }
        this.cards_title = 'Add New';
        this.isEdit_card = 0;
        this.initializePaymentCard({
            current_card_id: '', pay_card_number: '', pay_card_type: '', pay_expiry_month: '', pay_expiry_year: '', pay_cvv: ''
        });
        if (this.AddpayClicked == true && type == 'edit') {
            this.isEdit_card = 1;
            this.current_card_index = c_index;
            this.cards_title = 'Edit';
            this.initializePaymentCard(card);
        }
    };
    YourAccountPage.prototype.cancelPay = function () {
        this.AddpayClicked = false;
        this.scroll(0);
    };
    YourAccountPage.prototype.initializePaymentCard = function (card) {
        this.current_card_id = card.card_id;
        this.pay_card_number = card.card_number;
        this.pay_card_type = card.card_type;
        this.pay_expiry_month = card.expiry_month;
        this.pay_expiry_year = card.expiry_year;
        this.pay_cvv = card.cvv;
    };
    // editaddressClick() {
    //    this.editaddressClicked = !this.editaddressClicked;
    //  } 
    YourAccountPage.prototype.addaddressClick = function (type, address, a_index) {
        if (type === void 0) { type = null; }
        if (address === void 0) { address = {}; }
        if (a_index === void 0) { a_index = null; }
        this.addaddressClicked = !this.addaddressClicked;
        if (this.addaddressClicked == true) {
            this.scroll(170 + (this.addresses.length * 55));
        }
        this.address_title = 'Add New';
        this.isEdit = 0;
        this.initializeAddress({
            address_first_name: '', address_last_name: '', full_address: '', address_city: '', address_state: '', address_country: '', address_zip_code: '', address_phone: '', set_as_default: 0
        });
        if (this.addaddressClicked == true && type == 'edit') {
            this.isEdit = 1;
            this.current_address_index = a_index;
            this.address_title = 'Edit';
            this.initializeAddress(address);
        }
    };
    YourAccountPage.prototype.initializeAddress = function (address) {
        this.current_address_id = address.address_id;
        this.ad_first_name = address.address_first_name;
        this.ad_last_name = address.address_last_name;
        this.ad_address = address.full_address;
        this.ad_city = address.address_city;
        this.ad_state = address.address_state;
        this.ad_country = address.address_country;
        this.ad_zip = address.address_zip_code;
        this.ad_phone = address.address_phone;
        this.ad_is_default = address.set_as_default;
    };
    YourAccountPage.prototype.cancelAddAdress = function () {
        this.addaddressClick();
        this.scroll(0);
    };
    YourAccountPage.prototype.saveAddress = function (ad_first_name, ad_last_name, ad_address, ad_city, ad_state, ad_country, ad_zip, ad_phone, ad_is_default) {
        var _this = this;
        if (this.errors.indexOf(ad_first_name) >= 0) {
            this.presentToast('Please enter first name.', 'danger');
            return false;
        }
        if (this.errors.indexOf(ad_last_name) >= 0) {
            this.presentToast('Please enter last name.', 'danger');
            return false;
        }
        if (this.errors.indexOf(ad_address) >= 0) {
            this.presentToast('Please enter address.', 'danger');
            return false;
        }
        if (this.errors.indexOf(ad_city) >= 0) {
            this.presentToast('Please enter city.', 'danger');
            return false;
        }
        if (this.errors.indexOf(ad_state) >= 0) {
            this.presentToast('Please enter state.', 'danger');
            return false;
        }
        if (this.errors.indexOf(ad_country) >= 0) {
            this.presentToast('Please select country.', 'danger');
            return false;
        }
        if (this.errors.indexOf(ad_zip) >= 0) {
            this.presentToast('Please enter zip code.', 'danger');
            return false;
        }
        if (this.errors.indexOf(ad_phone) >= 0) {
            this.presentToast('Please enter phone number.', 'danger');
            return false;
        }
        var data = {
            address_first_name: ad_first_name,
            address_last_name: ad_last_name,
            full_address: ad_address,
            address_city: ad_city,
            address_state: ad_state,
            address_country: ad_country,
            address_zip_code: ad_zip,
            address_phone: ad_phone,
            set_as_default: (ad_is_default == true) ? 1 : 0,
            isAdd: (this.isEdit == 1) ? 0 : 1,
            user_id: this.userId,
            address_id: this.current_address_id
        };
        this.presentLoading();
        this.userService.postData(data, 'updateUserAddress').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                if (data.isAdd == 1) {
                    _this.addresses.splice(0, 0, result.data);
                }
                else {
                    _this.addresses[_this.current_address_index] = result.data;
                }
                _this.addaddressClick();
                var msg = (data.isAdd == 1) ? 'added' : 'updated';
                _this.presentToast('Address ' + msg + ' successfully.', 'success');
                _this.scroll(0);
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    YourAccountPage.prototype.updatePaymentCard = function (card_number, card_type, expiry_month, expiry_year, cvv) {
        var _this = this;
        if (this.errors.indexOf(card_number) >= 0) {
            this.presentToast('Please enter card number.', 'danger');
            return false;
        }
        if (this.errors.indexOf(card_type) >= 0) {
            this.presentToast('Please select card type.', 'danger');
            return false;
        }
        if (this.errors.indexOf(expiry_month) >= 0) {
            this.presentToast('Please enter expiry month.', 'danger');
            return false;
        }
        if (this.errors.indexOf(expiry_year) >= 0) {
            this.presentToast('Please enter expiry year.', 'danger');
            return false;
        }
        if (this.errors.indexOf(cvv) >= 0) {
            this.presentToast('Please enter card cvv.', 'danger');
            return false;
        }
        var data = {
            card_number: card_number,
            card_type: card_type,
            expiry_month: expiry_month,
            expiry_year: expiry_year,
            cvv: cvv,
            isAdd: (this.isEdit_card == 1) ? 0 : 1,
            user_id: this.userId,
            card_id: this.current_card_id
        };
        this.presentLoading();
        this.userService.postData(data, 'addPaymentCard').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                if (data.isAdd == 1) {
                    _this.cards.splice(0, 0, result.data);
                }
                else {
                    _this.cards[_this.current_card_index] = result.data;
                }
                _this.Addpay();
                var msg = (data.isAdd == 1) ? 'added' : 'updated';
                _this.presentToast('Card ' + msg + ' successfully.', 'success');
                _this.scroll(0);
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    YourAccountPage.prototype.deleteAddress = function (address_id, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Are you sure you want to delete?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (res) {
                                        console.log('Cancel');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.presentLoading();
                                        _this.userService.postData({ address_id: address_id }, 'deleteUserAddress').subscribe(function (result) {
                                            _this.stopLoading();
                                            if (result.status == 1) {
                                                _this.addresses.splice(index, 1);
                                                _this.presentToast('Address deleted successfully.', 'success');
                                            }
                                            else {
                                                _this.presentToast('Error,Please try after some time.', 'danger');
                                            }
                                        }, function (err) {
                                            _this.presentToast('Error,Please try after some time.', 'danger');
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    YourAccountPage.prototype.deleteCard = function (card_id, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Are you sure you want to delete?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (res) {
                                        console.log('Cancel');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.presentLoading();
                                        _this.userService.postData({ card_id: card_id }, 'deleteUserCard').subscribe(function (result) {
                                            _this.stopLoading();
                                            if (result.status == 1) {
                                                _this.cards.splice(index, 1);
                                                _this.presentToast('Card deleted successfully.', 'success');
                                            }
                                            else {
                                                _this.presentToast('Error,Please try after some time.', 'danger');
                                            }
                                        }, function (err) {
                                            _this.presentToast('Error,Please try after some time.', 'danger');
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    YourAccountPage.prototype.setAddressDefault = function (address_id, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Are you sure you want to set this address your default?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (res) {
                                        console.log('Cancel');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.presentLoading();
                                        _this.userService.postData({ address_id: address_id, user_id: _this.userId }, 'setDefaultAddress').subscribe(function (result) {
                                            _this.stopLoading();
                                            if (result.status == 1) {
                                                _this.updateDefaultAddressOption(index);
                                                _this.presentToast('Address marked as default successfully.', 'success');
                                            }
                                            else {
                                                _this.presentToast('Error,Please try after some time.', 'danger');
                                            }
                                        }, function (err) {
                                            _this.presentToast('Error,Please try after some time.', 'danger');
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    YourAccountPage.prototype.updateDefaultAddressOption = function (index) {
        if (this.addresses.length > 0) {
            for (var i = 0; i < this.addresses.length; i++) {
                if (index != i) {
                    this.addresses[i]['set_as_default'] = 0;
                }
                else {
                    this.addresses[i]['set_as_default'] = 1;
                }
            }
        }
    };
    // editdetailClick() {
    //    this.editdetailClicked = !this.editdetailClicked;
    //  } 
    YourAccountPage.prototype.editpasswordClick = function () {
        this.editpasswordClicked = !this.editpasswordClicked;
        if (this.editpasswordClicked == true) {
            this.scroll(320);
        }
    };
    YourAccountPage.prototype.cancelPassword = function () {
        this.editpasswordClick();
        this.scroll(0);
    };
    YourAccountPage.prototype.updatePassword = function (current_password, new_password, confirm_password) {
        var _this = this;
        if (this.errors.indexOf(current_password) >= 0) {
            this.presentToast('Please enter current password.', 'danger');
            return false;
        }
        if (this.errors.indexOf(new_password) >= 0) {
            this.presentToast('Please enter new password.', 'danger');
            return false;
        }
        if (new_password.length < 6) {
            this.presentToast('New password should be atleast 6 digits long.', 'danger');
            return false;
        }
        if (this.errors.indexOf(confirm_password) >= 0) {
            this.presentToast('Please re-enter new password.', 'danger');
            return false;
        }
        if (new_password != confirm_password) {
            this.presentToast('Please re-enter the same new password.', 'danger');
            return false;
        }
        this.presentLoading();
        this.userService.postData({ current_password: current_password, new_password: new_password, userId: this.userId }, 'updateUserPassword').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.cancelPassword();
                _this.presentToast('Password updated successfully.', 'success');
                _this.current_password = '';
                _this.new_password = '';
                _this.confirm_password = '';
            }
            else if (result.status == 2) {
                _this.presentToast('Invalid current password.', 'danger');
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    YourAccountPage.prototype.onButtonClickdrop = function () {
        this.buttonClickeddrop = !this.buttonClickeddrop;
    };
    YourAccountPage.prototype.presentToast = function (message, color) {
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
    YourAccountPage.prototype.presentLoading = function () {
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
    YourAccountPage.prototype.stopLoading = function () {
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
    YourAccountPage.prototype.convertIntoNumber = function (value) {
        if (typeof (value) == 'string') {
            return Number(value).toFixed(2);
        }
        else {
            return value;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], YourAccountPage.prototype, "content", void 0);
    YourAccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-your-account',
            template: __webpack_require__(/*! ./your-account.page.html */ "./src/app/your-account/your-account.page.html"),
            styles: [__webpack_require__(/*! ./your-account.page.scss */ "./src/app/your-account/your-account.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], YourAccountPage);
    return YourAccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=your-account-your-account-module.js.map