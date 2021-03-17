(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor-request-vendor-request-module"],{

/***/ "./src/app/vendor-request/vendor-request.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/vendor-request/vendor-request.module.ts ***!
  \*********************************************************/
/*! exports provided: VendorRequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorRequestPageModule", function() { return VendorRequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vendor_request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendor-request.page */ "./src/app/vendor-request/vendor-request.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _vendor_request_page__WEBPACK_IMPORTED_MODULE_6__["VendorRequestPage"]
    }
];
var VendorRequestPageModule = /** @class */ (function () {
    function VendorRequestPageModule() {
    }
    VendorRequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_vendor_request_page__WEBPACK_IMPORTED_MODULE_6__["VendorRequestPage"]]
        })
    ], VendorRequestPageModule);
    return VendorRequestPageModule;
}());



/***/ }),

/***/ "./src/app/vendor-request/vendor-request.page.html":
/*!*********************************************************!*\
  !*** ./src/app/vendor-request/vendor-request.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content vendorSignup>\n<div class=\"insideVendor\">\n<div header_height></div>\n\n<div class=\"sign-in-page\" id=\"step_form\">\n\n\n    <div class=\"stepwizard\">\n        <div class=\"stepwizard-row setup-panel\">\n            <div class=\"stepwizard-step col-xs-3\"> \n                <a href=\"#step-1\" type=\"button\" class=\"btn btn-success btn-circle\">1</a>\n                <p><small>Step</small></p>\n            </div>\n            <div class=\"stepwizard-step col-xs-3\"> \n                <a href=\"#step-2\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">2</a>\n                <p><small>Step</small></p>\n            </div>\n            <div class=\"stepwizard-step col-xs-3\"> \n                <a href=\"#step-3\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">3</a>\n                <p><small>Step</small></p>\n            </div>\n            <div class=\"stepwizard-step col-xs-3\"> \n                <a href=\"#step-4\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">4</a>\n                <p><small>Step</small></p>\n            </div>\n            <div class=\"stepwizard-step col-xs-3\"> \n                <a href=\"#step-5\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">5</a>\n                <p><small>Step</small></p>\n            </div>\n        </div>\n    </div>\n    \n    <form role=\"form\">\n        <!-- step 1 -->\n        <div class=\"setup-content\" id=\"step-1\">\n          <div class=\"fullwidth\">\n            <h5 class=\"subhdng\">Signup with your mobile number and email address</h5>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"info-title\" for=\"exampleInputEmail1\">Name</label>\n                <input [(ngModel)]=\"data.name\" name=\"name\" type=\"text\" class=\"form-control unicase-form-control text-input required\" id=\"exampleInputEmail1\" >\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"info-title\" for=\"exampleInputEmail1\">Phone</label>\n                <select [(ngModel)]=\"data.country_code\" name=\"country_code\" class=\"form-control unicase-form-control text-input required\">\n                   <option *ngFor=\"let country of all_countries \" value=\"+{{country.phonecode}}\">+{{country.phonecode}} ({{country.iso}})</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-sm-8\">\n              <div class=\"form-group\">\n                <label class=\"info-title\" for=\"exampleInputEmail1\">&nbsp;</label>\n                <input type=\"number\" [(ngModel)]=\"data.phone\" name=\"phone\" class=\"form-control unicase-form-control text-input required\" id=\"exampleInputEmail1\" >\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"info-title\" for=\"exampleInputEmail1\">Your Email</label>\n                <input type=\"email\" [(ngModel)]=\"data.email\" name=\"email\" class=\"form-control required unicase-form-control text-input\" id=\"exampleInputEmail1\" >\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"info-title\" for=\"exampleInputEmail1\">Password</label>\n                <input type=\"password\" [(ngModel)]=\"data.password\" name=\"password\" class=\"required form-control unicase-form-control text-input\" id=\"exampleInputEmail1\" >\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <a href=\"http://sites.indiit.com/siniyetu/dev/vendors\" class=\"btn-already\" style=\"padding-top: 5px;display:inline-block\">Already have an account?</a>\n            </div>\n            <div class=\"col-sm-6\">\n              <button class=\"btn btn-primary nextBtn pull-right\" type=\"button\">Continue</button>\n            </div>\n          </div>\n        </div>\n        \n        <!-- step 2 -->\n        <div class=\"setup-content\" id=\"step-2\">\n          <div class=\"fullwidth\">\n            <h5 class=\"subhdng\">Enter below details to continue registration</h5>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"info-title\" for=\"exampleInputEmail1\">Company/Business Name</label>\n                <input type=\"text\" [(ngModel)]=\"data.company\" name=\"company\" class=\"form-control unicase-form-control text-input required\" id=\"exampleInputEmail1\" >\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"info-title\" for=\"exampleInputEmail1\">Store Name</label>\n                <input type=\"text\" [(ngModel)]=\"data.store_name\" name=\"store_name\" class=\"form-control unicase-form-control text-input required\" id=\"exampleInputEmail1\" >\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" style=\"display: none;\">\n            \n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"info-title\" for=\"exampleInputEmail1\">Select Product Category</label>\n                <select multiple [(ngModel)]=\"data.category\" name=\"category\" class=\"form-control unicase-form-control text-input\">\n                  <option *ngFor=\"let cat of all_categories \" value=\"{{cat.cat_name}}\">{{cat.cat_name}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <p style=\"margin:20px 0 10px\">Enter your Address</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"info-title\" for=\"exampleInputEmail1\">Pincode</label>\n                <input type=\"text\" [(ngModel)]=\"data.pincode\" name=\"pincode\" class=\"required form-control unicase-form-control text-input\" id=\"exampleInputEmail1\" >\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"info-title\" for=\"exampleInputEmail1\">City</label>\n                <input type=\"text\" [(ngModel)]=\"data.city\" name=\"city\" class=\"required form-control unicase-form-control text-input\" id=\"exampleInputEmail1\" >\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"info-title\" for=\"exampleInputEmail1\">Address Line 1</label>\n                <input type=\"text\" [(ngModel)]=\"data.address1\" name=\"address1\" class=\"required form-control unicase-form-control text-input\" id=\"exampleInputEmail1\" >\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"info-title\" for=\"exampleInputEmail1\">Address Line 2</label>\n                <input type=\"text\" [(ngModel)]=\"data.address2\" name=\"address2\" class=\"form-control unicase-form-control text-input\" id=\"exampleInputEmail1\" >\n              </div>\n            </div>\n          </div>\n            <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"info-title\" for=\"exampleInputEmail1\">State</label>\n                <input type=\"text\" [(ngModel)]=\"data.state\" name=\"state\" class=\"form-control required unicase-form-control text-input\" id=\"exampleInputEmail1\" >\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"info-title\" for=\"exampleInputEmail1\">Country</label>\n                <select [(ngModel)]=\"data.country\" name=\"country\" class=\"required form-control unicase-form-control text-input\">\n                  <option *ngFor=\"let country of all_countries \" value=\"{{country.nicename}}\">{{country.nicename}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <button class=\"btn btn-primary nextBtn pull-right\" type=\"button\">Continue</button>\n            </div>\n          </div>\n        </div>\n        \n        <!-- step 3 -->\n        <div class=\"setup-content\" id=\"step-3\">\n          <div class=\"fullwidth\">\n            <h5 class=\"subhdng\">Update your tax details</h5>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"info-title\" for=\"exampleInputEmail1\">Enter Tax Details</label>\n                <input type=\"text\" [(ngModel)]=\"data.tax_detail\" name=\"tax_detail\" class=\"form-control unicase-form-control text-input\" id=\"exampleInputEmail1\" >\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"info-title\" for=\"exampleInputEmail1\">Provisional GSTIN</label>\n                <input type=\"text\" [(ngModel)]=\"data.gst_number\" name=\"gst_number\" class=\"form-control unicase-form-control text-input\" id=\"exampleInputEmail1\" >\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"info-title\" for=\"exampleInputEmail1\">PAN Number</label>\n                <input type=\"text\" [(ngModel)]=\"data.pan\" name=\"pan\" class=\"form-control unicase-form-control text-input\" id=\"exampleInputEmail1\" >\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <div class=\"checkbox outer-xs m-0\" style=\"margin-bottom: 20px !important;\">\n                  <label>\n                    <input [(ngModel)]=\"data.update_later\" name=\"update_later\" type=\"checkbox\" id=\"optionsRadios2\" value=\"option2\">I will update later\n                    </label>\n                </div>\n                <div class=\"radio outer-xs m-0\">\n                  <label>\n                    <input [(ngModel)]=\"data.checkbox_option\" type=\"radio\" name=\"optionsRadios\" id=\"sell\" value=\"I sell in GST Exempted Category\">I sell in GST Exempted Category.\n                    </label>\n                </div>\n                <div class=\"radio outer-xs m-0\">\n                  <label>\n                    <input [(ngModel)]=\"data.checkbox_option\" type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"I don't have it handy and will update later.\">I don't have it handy and will update later.\n                    </label>\n                </div>\n                <div class=\"radio outer-xs m-0\">\n                  <label>\n                    <input [(ngModel)]=\"data.checkbox_option\" type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"I have never registered for GST.\">I have never registered for GST.\n                    </label>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <button class=\"btn btn-primary nextBtn pull-right\" type=\"button\">Continue</button>\n            </div>\n          </div>\n        </div>\n        \n        <!-- step 4 -->\n        <div class=\"setup-content\" id=\"step-4\">\n\n          <div class=\"fullwidth\">\n            <h5 class=\"subhdng\">Choose categories you wish to sell</h5>\n          </div>\n\n          <div class=\"row\" *ngFor=\"let cat of all_categories; let c_ind = index \">\n            <div class=\"col-sm-12\">\n            <label>{{cat.cat_name}}</label>\n              <div class=\"form-group\">\n                <div class=\"checkbox outer-xs m-0\" *ngFor=\"let subcat of cat.subcats\">\n                  <label>\n                    <input (change)=\"catChanged($event,cat.cat_id,subcat.subcat_id)\" type=\"checkbox\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\">{{subcat.subcat_name}}\n                    </label>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <div class=\"form-group\">\n                  <label class=\"info-title\" for=\"exampleInputEmail1\">What is your annual turnover ?</label>\n                   <input type=\"text\" [(ngModel)]=\"data.annual_turnover\" name=\"annual_turnover\" class=\"required form-control unicase-form-control text-input\" id=\"exampleInputEmail1\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <div class=\"form-group\">\n                  <label class=\"info-title\" for=\"exampleInputEmail1\">How many product do you sell</label>\n                  <input type=\"text\" [(ngModel)]=\"data.product_sell\" name=\"product_sell\" class=\"required form-control unicase-form-control text-input\" id=\"exampleInputEmail1\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <div class=\"form-group\">\n                  <label class=\"info-title\" for=\"exampleInputEmail1\">Do you sell in other websites?</label>\n                  <br>\n                  <div class=\"radio outer-xs m-0 pull-left\" style=\"margin-right:20px!important;\">\n                    <label>\n                      <input class=\"required\" type=\"radio\" [(ngModel)]=\"data.sell_in_other_webs\" name=\"optionsRadios_other\" id=\"sell\" value=\"yes\">Yes\n                      </label>\n                  </div>\n                  <div class=\"radio outer-xs m-0 pull-left\">\n                    <label>\n                      <input class=\"required\" type=\"radio\" [(ngModel)]=\"data.sell_in_other_webs\" name=\"optionsRadios_other\" id=\"sell\" value=\"no\">No\n                      </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <button class=\"btn btn-primary nextBtn pull-right\" type=\"button\">Continue</button>\n            </div>\n          </div>\n\n          <!-- <button class=\"btn btn-success pull-right\" type=\"submit\">Finish!</button> -->\n        </div>\n        \n        <!-- step 5 -->\n        <div class=\"setup-content\" id=\"step-5\">\n\n          <div class=\"fullwidth\">\n            <h5 class=\"subhdng\">Hi {{data?.store_name}}, you are almost there<p style=\"font-size: 12px;\n    margin-top: 10px;\">Please complete the below steps and start selling to millions of customer</p></h5>\n            \n          </div>\n          <div class=\"row\" style=\"display: none;\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <select class=\"form-control unicase-form-control text-input\">\n                  <option label=\"\">Product to Sell</option>\n                  <option>select</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <select class=\"form-control unicase-form-control text-input\">\n                  <option label=\"\">Shipping Fee Details</option>\n                  <option>select</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <select class=\"form-control unicase-form-control text-input\">\n                  <option label=\"\">Bank Account Details</option>\n                  <option>select</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <select class=\"form-control unicase-form-control text-input\">\n                  <option label=\"\">Enter Tax Details</option>\n                  <option>select</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <select class=\"form-control unicase-form-control text-input\">\n                  <option label=\"\">Default Product Tax Code</option>\n                  <option>select</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <select class=\"form-control unicase-form-control text-input\">\n                  <option label=\"\">Signature</option>\n                  <option>select</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <button (click)=\"finalSubmit()\" class=\"btn btn-success pull-right\" type=\"submit\">Start Selling</button>\n            </div>\n          </div>\n        </div>\n    </form>\n  </div><!-- /.row -->\n  <div class=\"alert alert-success sign-in-page text-center\" id=\"success_div\" style=\"display: none;\">\n    <strong>Success!</strong> Your request has been submitted.\n  </div>\n\n</div>\n<app-footer></app-footer>\n</ion-content>"

/***/ }),

/***/ "./src/app/vendor-request/vendor-request.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/vendor-request/vendor-request.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sign-in-page {\n  max-width: 550px;\n  margin: 50px auto 0;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  padding: 20px; }\n  .sign-in-page h5.subhdng {\n    width: 100%;\n    text-align: center;\n    font-weight: 600;\n    font-size: 18px;\n    margin: 20px auto 30px;\n    max-width: 80%; }\n  .sign-in-page label {\n    font-weight: 600; }\n  .sign-in-page .stepwizard {\n    display: table;\n    width: 100%;\n    position: relative; }\n  .sign-in-page .stepwizard .stepwizard-row.setup-panel {\n      display: flex; }\n  .sign-in-page .stepwizard .stepwizard-row.setup-panel .stepwizard-step.col-xs-3 {\n        flex: 1;\n        text-align: center; }\n  .sign-in-page .stepwizard .stepwizard-row.setup-panel .stepwizard-step.col-xs-3 .btn-circle {\n          width: 30px;\n          height: 30px;\n          text-align: center;\n          padding: 6px 0;\n          font-size: 12px;\n          line-height: 1.428571429;\n          border-radius: 15px; }\n  .sign-in-page .stepwizard .stepwizard-row.setup-panel .stepwizard-step.col-xs-3 p {\n          margin-top: 0px;\n          color: #666; }\n  .sign-in-page .stepwizard .stepwizard-row:before {\n      top: 14px;\n      bottom: 0;\n      position: absolute;\n      content: \" \";\n      width: 100%;\n      height: 1px;\n      background-color: #ccc;\n      z-index: 0; }\n  .sign-in-page .radio + .radio, .sign-in-page .checkbox + .checkbox {\n    margin-top: 10px; }\n  [vendorSignup] {\n  background: #f7f7f7; }\n  [vendorSignup] .insideVendor {\n    background: #f7f7f7;\n    padding-bottom: 50px; }\n  [vendorSignup] .btn.btn-primary {\n    background: #a01616;\n    border-color: #a01616;\n    border-radius: 2px; }\n  [vendorSignup] input, [vendorSignup] select {\n    border-radius: 2px;\n    box-shadow: none;\n    border-color: #eee;\n    color: #111;\n    min-height: 40px; }\n  [vendorSignup] input:focus, [vendorSignup] select:focus {\n      border-color: #ddd; }\n  [vendorSignup] input[type=\"checkbox\"], [vendorSignup] input[type=\"radio\"] {\n    min-height: 1px; }\n  [vendorSignup] .btn-already {\n    color: #a01616;\n    text-decoration: none; }\n  [vendorSignup] .btn-already:hover {\n      color: #2a6496; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC92ZW5kb3ItcmVxdWVzdC92ZW5kb3ItcmVxdWVzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZlbmRvci1yZXF1ZXN0L3ZlbmRvci1yZXF1ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUNBQW9DO0VBQ3BDLGFBQVksRUFBQTtFQU5iO0lBUUssV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixjQUFjLEVBQUE7RUFibkI7SUFnQkUsZ0JBQWdCLEVBQUE7RUFoQmxCO0lBbUJLLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7RUFyQnZCO01BdUJNLGFBQWEsRUFBQTtFQXZCbkI7UUF5Qk8sT0FBTztRQUNQLGtCQUFrQixFQUFBO0VBMUJ6QjtVQTRCUSxXQUFXO1VBQ1gsWUFBWTtVQUNaLGtCQUFrQjtVQUNsQixjQUFjO1VBQ2QsZUFBZTtVQUNmLHdCQUF3QjtVQUN4QixtQkFBbUIsRUFBQTtFQWxDM0I7VUFxQ1EsZUFBZTtVQUNmLFdBQVcsRUFBQTtFQXRDbkI7TUEyQ00sU0FBUztNQUNULFNBQVM7TUFDVCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFdBQVc7TUFDWCxXQUFXO01BQ1gsc0JBQXNCO01BQ3RCLFVBQVUsRUFBQTtFQWxEaEI7SUFzREssZ0JBQWdCLEVBQUE7RUNOckI7RURVQyxtQkFBbUIsRUFBQTtFQ1JsQjtJRFVBLG1CQUFtQjtJQUNuQixvQkFBb0IsRUFBQTtFQ1JwQjtJRFdBLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7RUNUbEI7SURZQSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7RUNWZDtNRFlELGtCQUFrQixFQUFBO0VDVm5CO0lEY0EsZUFBZSxFQUFBO0VDWmY7SURlQSxjQUFjO0lBQ2QscUJBQXFCLEVBQUE7RUNibkI7TURlRCxjQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3ItcmVxdWVzdC92ZW5kb3ItcmVxdWVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi1pbi1wYWdle1xuXHRtYXgtd2lkdGg6NTUwcHg7XG5cdG1hcmdpbjo1MHB4IGF1dG8gMDtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0Ym94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwgLjIpO1xuXHRwYWRkaW5nOjIwcHg7XG5cdGg1LnN1Ymhkbmcge1xuXHQgICAgd2lkdGg6IDEwMCU7XG5cdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCAgICBmb250LXdlaWdodDogNjAwO1xuXHQgICAgZm9udC1zaXplOiAxOHB4O1xuXHQgICAgbWFyZ2luOiAyMHB4IGF1dG8gMzBweDtcblx0ICAgIG1heC13aWR0aDogODAlO1xuXHR9XG5cdGxhYmVse1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdH1cblx0LnN0ZXB3aXphcmQge1xuXHQgICAgZGlzcGxheTogdGFibGU7XG5cdCAgICB3aWR0aDogMTAwJTtcblx0ICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ICAgIC5zdGVwd2l6YXJkLXJvdy5zZXR1cC1wYW5lbCB7XG5cdFx0ICAgIGRpc3BsYXk6IGZsZXg7XG5cdFx0ICAgIC5zdGVwd2l6YXJkLXN0ZXAuY29sLXhzLTMge1xuXHRcdFx0ICAgIGZsZXg6IDE7XG5cdFx0XHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0ICAgIC5idG4tY2lyY2xlIHtcblx0XHRcdFx0ICAgIHdpZHRoOiAzMHB4O1xuXHRcdFx0XHQgICAgaGVpZ2h0OiAzMHB4O1xuXHRcdFx0XHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHQgICAgcGFkZGluZzogNnB4IDA7XG5cdFx0XHRcdCAgICBmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdCAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XG5cdFx0XHRcdCAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHB7XG5cdFx0XHRcdCAgICBtYXJnaW4tdG9wOiAwcHg7XG5cdFx0XHRcdCAgICBjb2xvcjogIzY2Njtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQuc3RlcHdpemFyZC1yb3c6YmVmb3JlIHtcblx0XHQgICAgdG9wOiAxNHB4O1xuXHRcdCAgICBib3R0b206IDA7XG5cdFx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHQgICAgY29udGVudDogXCIgXCI7XG5cdFx0ICAgIHdpZHRoOiAxMDAlO1xuXHRcdCAgICBoZWlnaHQ6IDFweDtcblx0XHQgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcblx0XHQgICAgei1pbmRleDogMDtcblx0XHR9XG5cdH1cblx0LnJhZGlvKy5yYWRpbywgLmNoZWNrYm94Ky5jaGVja2JveCB7XG5cdCAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXHR9XG59XG5bdmVuZG9yU2lnbnVwXXtcblx0YmFja2dyb3VuZDogI2Y3ZjdmNztcblx0Lmluc2lkZVZlbmRvcntcblx0XHRiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuXHRcdHBhZGRpbmctYm90dG9tOiA1MHB4O1xuXHR9XG5cdC5idG4uYnRuLXByaW1hcnl7XG5cdFx0YmFja2dyb3VuZDogI2EwMTYxNjtcblx0XHRib3JkZXItY29sb3I6ICNhMDE2MTY7XG5cdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHR9XG5cdGlucHV0LCBzZWxlY3R7XG5cdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjZWVlO1xuXHRcdGNvbG9yOiAjMTExO1xuXHRcdG1pbi1oZWlnaHQ6IDQwcHg7XG5cdFx0Jjpmb2N1c3tcblx0XHRcdGJvcmRlci1jb2xvcjogI2RkZDtcblx0XHR9XG5cdH1cblx0aW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl17XG5cdFx0bWluLWhlaWdodDogMXB4O1xuXHR9XG5cdC5idG4tYWxyZWFkeXtcblx0XHRjb2xvcjogI2EwMTYxNjtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0Jjpob3Zlcntcblx0XHRcdGNvbG9yOiMyYTY0OTY7XG5cdFx0fVxuXHR9XG59IiwiLnNpZ24taW4tcGFnZSB7XG4gIG1heC13aWR0aDogNTUwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvIDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcGFkZGluZzogMjBweDsgfVxuICAuc2lnbi1pbi1wYWdlIGg1LnN1Ymhkbmcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDIwcHggYXV0byAzMHB4O1xuICAgIG1heC13aWR0aDogODAlOyB9XG4gIC5zaWduLWluLXBhZ2UgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgLnNpZ24taW4tcGFnZSAuc3RlcHdpemFyZCB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLnNpZ24taW4tcGFnZSAuc3RlcHdpemFyZCAuc3RlcHdpemFyZC1yb3cuc2V0dXAtcGFuZWwge1xuICAgICAgZGlzcGxheTogZmxleDsgfVxuICAgICAgLnNpZ24taW4tcGFnZSAuc3RlcHdpemFyZCAuc3RlcHdpemFyZC1yb3cuc2V0dXAtcGFuZWwgLnN0ZXB3aXphcmQtc3RlcC5jb2wteHMtMyB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgICAuc2lnbi1pbi1wYWdlIC5zdGVwd2l6YXJkIC5zdGVwd2l6YXJkLXJvdy5zZXR1cC1wYW5lbCAuc3RlcHdpemFyZC1zdGVwLmNvbC14cy0zIC5idG4tY2lyY2xlIHtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDZweCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgfVxuICAgICAgICAuc2lnbi1pbi1wYWdlIC5zdGVwd2l6YXJkIC5zdGVwd2l6YXJkLXJvdy5zZXR1cC1wYW5lbCAuc3RlcHdpemFyZC1zdGVwLmNvbC14cy0zIHAge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICBjb2xvcjogIzY2NjsgfVxuICAgIC5zaWduLWluLXBhZ2UgLnN0ZXB3aXphcmQgLnN0ZXB3aXphcmQtcm93OmJlZm9yZSB7XG4gICAgICB0b3A6IDE0cHg7XG4gICAgICBib3R0b206IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgICAgei1pbmRleDogMDsgfVxuICAuc2lnbi1pbi1wYWdlIC5yYWRpbyArIC5yYWRpbywgLnNpZ24taW4tcGFnZSAuY2hlY2tib3ggKyAuY2hlY2tib3gge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cblxuW3ZlbmRvclNpZ251cF0ge1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3OyB9XG4gIFt2ZW5kb3JTaWdudXBdIC5pbnNpZGVWZW5kb3Ige1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7IH1cbiAgW3ZlbmRvclNpZ251cF0gLmJ0bi5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZDogI2EwMTYxNjtcbiAgICBib3JkZXItY29sb3I6ICNhMDE2MTY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4OyB9XG4gIFt2ZW5kb3JTaWdudXBdIGlucHV0LCBbdmVuZG9yU2lnbnVwXSBzZWxlY3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogIzExMTtcbiAgICBtaW4taGVpZ2h0OiA0MHB4OyB9XG4gICAgW3ZlbmRvclNpZ251cF0gaW5wdXQ6Zm9jdXMsIFt2ZW5kb3JTaWdudXBdIHNlbGVjdDpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICNkZGQ7IH1cbiAgW3ZlbmRvclNpZ251cF0gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBbdmVuZG9yU2lnbnVwXSBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIG1pbi1oZWlnaHQ6IDFweDsgfVxuICBbdmVuZG9yU2lnbnVwXSAuYnRuLWFscmVhZHkge1xuICAgIGNvbG9yOiAjYTAxNjE2O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgIFt2ZW5kb3JTaWdudXBdIC5idG4tYWxyZWFkeTpob3ZlciB7XG4gICAgICBjb2xvcjogIzJhNjQ5NjsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/vendor-request/vendor-request.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/vendor-request/vendor-request.page.ts ***!
  \*******************************************************/
/*! exports provided: VendorRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorRequestPage", function() { return VendorRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");





var VendorRequestPage = /** @class */ (function () {
    function VendorRequestPage(userService, toastController, loadingController, alertController) {
        this.userService = userService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.data = {};
        this.selected_categories = [];
        this.checked_categories = [];
    }
    VendorRequestPage.prototype.ionViewDidEnter = function () {
        this.getCategories();
        this.getCountries();
    };
    VendorRequestPage.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            var navListItems = jquery__WEBPACK_IMPORTED_MODULE_3__('div.setup-panel div a'), allWells = jquery__WEBPACK_IMPORTED_MODULE_3__('.setup-content'), allNextBtn = jquery__WEBPACK_IMPORTED_MODULE_3__('.nextBtn');
            allWells.hide();
            navListItems.click(function (e) {
                e.preventDefault();
                var $target = jquery__WEBPACK_IMPORTED_MODULE_3__(jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('href')), $item = jquery__WEBPACK_IMPORTED_MODULE_3__(this);
                if (!$item.hasClass('disabled')) {
                    navListItems.removeClass('btn-success').addClass('btn-default');
                    $item.addClass('btn-success');
                    allWells.hide();
                    $target.show();
                    $target.find('input:eq(0)').focus();
                }
            });
            allNextBtn.click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_3__(".error_span").remove();
                var curStep = jquery__WEBPACK_IMPORTED_MODULE_3__(this).closest(".setup-content"), curStepBtn = curStep.attr("id"), nextStepWizard = jquery__WEBPACK_IMPORTED_MODULE_3__('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"), curInputs = curStep.find(".required"), isValid = true;
                jquery__WEBPACK_IMPORTED_MODULE_3__(".form-group").removeClass("has-error");
                for (var i = 0; i < curInputs.length; i++) {
                    if (curInputs[i].value == '' || curInputs[i].value == undefined || curInputs[i].value == null) {
                        isValid = false;
                        jquery__WEBPACK_IMPORTED_MODULE_3__(curInputs[i]).closest(".form-group").addClass("has-error");
                    }
                }
                jquery__WEBPACK_IMPORTED_MODULE_3__(".has-error").append('<span style="color:red;" class="error_span">This field is required.</span>');
                if (isValid)
                    nextStepWizard.removeAttr('disabled').trigger('click');
            });
            //this.content.scrollToTop(1500);
            jquery__WEBPACK_IMPORTED_MODULE_3__('div.setup-panel div a.btn-success').trigger('click');
        });
    };
    VendorRequestPage.prototype.getCategories = function () {
        var _this = this;
        this.userService.getData('getCategories').subscribe(function (result) {
            _this.all_categories = result.categories;
        }, function (err) {
            _this.all_categories = [];
        });
    };
    VendorRequestPage.prototype.getCountries = function () {
        var _this = this;
        this.userService.getData('all_countries').subscribe(function (result) {
            _this.all_countries = result.countries;
        }, function (err) {
            _this.all_countries = [];
        });
    };
    VendorRequestPage.prototype.catChanged = function (event, cat_id, subcat_id) {
        if (event.target.checked == true) {
            if (this.checked_categories.indexOf(cat_id) >= 0) {
                var index = this.checked_categories.indexOf(cat_id);
                this.selected_categories[index]['subcats'].push(subcat_id);
            }
            else {
                this.checked_categories.push(cat_id);
                var sub_arr = [];
                sub_arr.push(subcat_id);
                this.selected_categories.push({ cat_id: cat_id, subcats: sub_arr });
            }
        }
        else {
            var index = this.checked_categories.indexOf(cat_id);
            this.selected_categories[index]['subcats'].splice(this.selected_categories[index]['subcats'].indexOf(subcat_id), 1);
            if (this.selected_categories[index]['subcats'].length == 0) {
                this.checked_categories.splice(index, 1);
                this.selected_categories.splice(index, 1);
            }
        }
    };
    VendorRequestPage.prototype.finalSubmit = function () {
        var _this = this;
        this.data['categories'] = this.selected_categories;
        console.log(this.data);
        var dict = {
            address1: this.data.address1,
            address2: this.data.address2 == undefined ? ' ' : this.data.address2,
            annual_turnover: this.data.annual_turnover,
            categories: this.data.categories,
            checkbox_option: this.data.checkbox_option,
            city: this.data.city,
            company: this.data.company,
            country: this.data.country,
            country_code: this.data.country_code,
            email: this.data.email,
            gst_number: this.data.gst_number,
            fname: this.data.name.split(' ').length > 1 ? this.data.name.split(' ')[0] : this.data.name,
            lname: this.data.name.split(' ').length > 1 ? this.data.name.split(' ')[1] : ' ',
            pan: this.data.pan,
            password: this.data.password,
            phone: this.data.phone,
            pincode: this.data.pincode,
            product_sell: this.data.product_sell,
            sell_in_other_webs: this.data.sell_in_other_webs == 'no' ? 0 : 1,
            state: this.data.state,
            store_name: this.data.store_name,
            tax_detail: this.data.tax_detail,
            products_sell: this.data.product_sell
        };
        this.presentLoading();
        this.userService.postData(dict, 'sellOnSiniyetu').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                jquery__WEBPACK_IMPORTED_MODULE_3__("#step_form").hide();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#success_div").show();
                _this.presentToast('Your request has been submitted successfully. We will be get in touch with you as soon as possible.', 'success');
            }
            else if (result.status == 2) {
                //$("#step_form").hide();
                //$("#success_div").show();
                _this.presentToast('Email address already exist.', 'danger');
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    VendorRequestPage.prototype.presentToast = function (message, color) {
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
    VendorRequestPage.prototype.presentLoading = function () {
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
    VendorRequestPage.prototype.stopLoading = function () {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], VendorRequestPage.prototype, "content", void 0);
    VendorRequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-request',
            template: __webpack_require__(/*! ./vendor-request.page.html */ "./src/app/vendor-request/vendor-request.page.html"),
            styles: [__webpack_require__(/*! ./vendor-request.page.scss */ "./src/app/vendor-request/vendor-request.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], VendorRequestPage);
    return VendorRequestPage;
}());



/***/ })

}]);
//# sourceMappingURL=vendor-request-vendor-request-module.js.map