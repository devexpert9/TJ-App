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

module.exports = ".sign-in-page {\n  max-width: 550px;\n  margin: 50px auto 0;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  padding: 20px; }\n  .sign-in-page h5.subhdng {\n    width: 100%;\n    text-align: center;\n    font-weight: 600;\n    font-size: 18px;\n    margin: 20px auto 30px;\n    max-width: 80%; }\n  .sign-in-page label {\n    font-weight: 600; }\n  .sign-in-page .stepwizard {\n    display: table;\n    width: 100%;\n    position: relative; }\n  .sign-in-page .stepwizard .stepwizard-row.setup-panel {\n      display: flex; }\n  .sign-in-page .stepwizard .stepwizard-row.setup-panel .stepwizard-step.col-xs-3 {\n        flex: 1;\n        text-align: center; }\n  .sign-in-page .stepwizard .stepwizard-row.setup-panel .stepwizard-step.col-xs-3 .btn-circle {\n          width: 30px;\n          height: 30px;\n          text-align: center;\n          padding: 6px 0;\n          font-size: 12px;\n          line-height: 1.428571429;\n          border-radius: 15px; }\n  .sign-in-page .stepwizard .stepwizard-row.setup-panel .stepwizard-step.col-xs-3 p {\n          margin-top: 0px;\n          color: #666; }\n  .sign-in-page .stepwizard .stepwizard-row:before {\n      top: 14px;\n      bottom: 0;\n      position: absolute;\n      content: \" \";\n      width: 100%;\n      height: 1px;\n      background-color: #ccc;\n      z-index: 0; }\n  .sign-in-page .radio + .radio, .sign-in-page .checkbox + .checkbox {\n    margin-top: 10px; }\n  [vendorSignup] {\n  background: #f7f7f7; }\n  [vendorSignup] .insideVendor {\n    background: #f7f7f7;\n    padding-bottom: 50px; }\n  [vendorSignup] .btn.btn-primary {\n    background: #a01616;\n    border-color: #a01616;\n    border-radius: 2px; }\n  [vendorSignup] input, [vendorSignup] select {\n    border-radius: 2px;\n    box-shadow: none;\n    border-color: #eee;\n    color: #111;\n    min-height: 40px; }\n  [vendorSignup] input:focus, [vendorSignup] select:focus {\n      border-color: #ddd; }\n  [vendorSignup] input[type=\"checkbox\"], [vendorSignup] input[type=\"radio\"] {\n    min-height: 1px; }\n  [vendorSignup] .btn-already {\n    color: #a01616;\n    text-decoration: none; }\n  [vendorSignup] .btn-already:hover {\n      color: #2a6496; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvdmVuZG9yLXJlcXVlc3QvdmVuZG9yLXJlcXVlc3QucGFnZS5zY3NzIiwic3JjL2FwcC92ZW5kb3ItcmVxdWVzdC92ZW5kb3ItcmVxdWVzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVDQUFvQztFQUNwQyxhQUFZLEVBQUE7RUFOYjtJQVFLLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsY0FBYyxFQUFBO0VBYm5CO0lBZ0JFLGdCQUFnQixFQUFBO0VBaEJsQjtJQW1CSyxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQixFQUFBO0VBckJ2QjtNQXVCTSxhQUFhLEVBQUE7RUF2Qm5CO1FBeUJPLE9BQU87UUFDUCxrQkFBa0IsRUFBQTtFQTFCekI7VUE0QlEsV0FBVztVQUNYLFlBQVk7VUFDWixrQkFBa0I7VUFDbEIsY0FBYztVQUNkLGVBQWU7VUFDZix3QkFBd0I7VUFDeEIsbUJBQW1CLEVBQUE7RUFsQzNCO1VBcUNRLGVBQWU7VUFDZixXQUFXLEVBQUE7RUF0Q25CO01BMkNNLFNBQVM7TUFDVCxTQUFTO01BQ1Qsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixXQUFXO01BQ1gsV0FBVztNQUNYLHNCQUFzQjtNQUN0QixVQUFVLEVBQUE7RUFsRGhCO0lBc0RLLGdCQUFnQixFQUFBO0VDTnJCO0VEVUMsbUJBQW1CLEVBQUE7RUNSbEI7SURVQSxtQkFBbUI7SUFDbkIsb0JBQW9CLEVBQUE7RUNScEI7SURXQSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFBO0VDVGxCO0lEWUEsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQixFQUFBO0VDVmQ7TURZRCxrQkFBa0IsRUFBQTtFQ1ZuQjtJRGNBLGVBQWUsRUFBQTtFQ1pmO0lEZUEsY0FBYztJQUNkLHFCQUFxQixFQUFBO0VDYm5CO01EZUQsY0FBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9yLXJlcXVlc3QvdmVuZG9yLXJlcXVlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ24taW4tcGFnZXtcblx0bWF4LXdpZHRoOjU1MHB4O1xuXHRtYXJnaW46NTBweCBhdXRvIDA7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsIC4yKTtcblx0cGFkZGluZzoyMHB4O1xuXHRoNS5zdWJoZG5nIHtcblx0ICAgIHdpZHRoOiAxMDAlO1xuXHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHQgICAgZm9udC13ZWlnaHQ6IDYwMDtcblx0ICAgIGZvbnQtc2l6ZTogMThweDtcblx0ICAgIG1hcmdpbjogMjBweCBhdXRvIDMwcHg7XG5cdCAgICBtYXgtd2lkdGg6IDgwJTtcblx0fVxuXHRsYWJlbHtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHR9XG5cdC5zdGVwd2l6YXJkIHtcblx0ICAgIGRpc3BsYXk6IHRhYmxlO1xuXHQgICAgd2lkdGg6IDEwMCU7XG5cdCAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCAgICAuc3RlcHdpemFyZC1yb3cuc2V0dXAtcGFuZWwge1xuXHRcdCAgICBkaXNwbGF5OiBmbGV4O1xuXHRcdCAgICAuc3RlcHdpemFyZC1zdGVwLmNvbC14cy0zIHtcblx0XHRcdCAgICBmbGV4OiAxO1xuXHRcdFx0ICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdCAgICAuYnRuLWNpcmNsZSB7XG5cdFx0XHRcdCAgICB3aWR0aDogMzBweDtcblx0XHRcdFx0ICAgIGhlaWdodDogMzBweDtcblx0XHRcdFx0ICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0ICAgIHBhZGRpbmc6IDZweCAwO1xuXHRcdFx0XHQgICAgZm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHQgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xuXHRcdFx0XHQgICAgYm9yZGVyLXJhZGl1czogMTVweDtcblx0XHRcdFx0fVxuXHRcdFx0XHRwe1xuXHRcdFx0XHQgICAgbWFyZ2luLXRvcDogMHB4O1xuXHRcdFx0XHQgICAgY29sb3I6ICM2NjY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LnN0ZXB3aXphcmQtcm93OmJlZm9yZSB7XG5cdFx0ICAgIHRvcDogMTRweDtcblx0XHQgICAgYm90dG9tOiAwO1xuXHRcdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0ICAgIGNvbnRlbnQ6IFwiIFwiO1xuXHRcdCAgICB3aWR0aDogMTAwJTtcblx0XHQgICAgaGVpZ2h0OiAxcHg7XG5cdFx0ICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG5cdFx0ICAgIHotaW5kZXg6IDA7XG5cdFx0fVxuXHR9XG5cdC5yYWRpbysucmFkaW8sIC5jaGVja2JveCsuY2hlY2tib3gge1xuXHQgICAgbWFyZ2luLXRvcDogMTBweDtcblx0fVxufVxuW3ZlbmRvclNpZ251cF17XG5cdGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG5cdC5pbnNpZGVWZW5kb3J7XG5cdFx0YmFja2dyb3VuZDogI2Y3ZjdmNztcblx0XHRwYWRkaW5nLWJvdHRvbTogNTBweDtcblx0fVxuXHQuYnRuLmJ0bi1wcmltYXJ5e1xuXHRcdGJhY2tncm91bmQ6ICNhMDE2MTY7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjYTAxNjE2O1xuXHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0fVxuXHRpbnB1dCwgc2VsZWN0e1xuXHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdGJvcmRlci1jb2xvcjogI2VlZTtcblx0XHRjb2xvcjogIzExMTtcblx0XHRtaW4taGVpZ2h0OiA0MHB4O1xuXHRcdCY6Zm9jdXN7XG5cdFx0XHRib3JkZXItY29sb3I6ICNkZGQ7XG5cdFx0fVxuXHR9XG5cdGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSwgaW5wdXRbdHlwZT1cInJhZGlvXCJde1xuXHRcdG1pbi1oZWlnaHQ6IDFweDtcblx0fVxuXHQuYnRuLWFscmVhZHl7XG5cdFx0Y29sb3I6ICNhMDE2MTY7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdCY6aG92ZXJ7XG5cdFx0XHRjb2xvcjojMmE2NDk2O1xuXHRcdH1cblx0fVxufSIsIi5zaWduLWluLXBhZ2Uge1xuICBtYXgtd2lkdGg6IDU1MHB4O1xuICBtYXJnaW46IDUwcHggYXV0byAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBhZGRpbmc6IDIwcHg7IH1cbiAgLnNpZ24taW4tcGFnZSBoNS5zdWJoZG5nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMzBweDtcbiAgICBtYXgtd2lkdGg6IDgwJTsgfVxuICAuc2lnbi1pbi1wYWdlIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNjAwOyB9XG4gIC5zaWduLWluLXBhZ2UgLnN0ZXB3aXphcmQge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5zaWduLWluLXBhZ2UgLnN0ZXB3aXphcmQgLnN0ZXB3aXphcmQtcm93LnNldHVwLXBhbmVsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgICAgIC5zaWduLWluLXBhZ2UgLnN0ZXB3aXphcmQgLnN0ZXB3aXphcmQtcm93LnNldHVwLXBhbmVsIC5zdGVwd2l6YXJkLXN0ZXAuY29sLXhzLTMge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgICAgLnNpZ24taW4tcGFnZSAuc3RlcHdpemFyZCAuc3RlcHdpemFyZC1yb3cuc2V0dXAtcGFuZWwgLnN0ZXB3aXphcmQtc3RlcC5jb2wteHMtMyAuYnRuLWNpcmNsZSB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7IH1cbiAgICAgICAgLnNpZ24taW4tcGFnZSAuc3RlcHdpemFyZCAuc3RlcHdpemFyZC1yb3cuc2V0dXAtcGFuZWwgLnN0ZXB3aXphcmQtc3RlcC5jb2wteHMtMyBwIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgY29sb3I6ICM2NjY7IH1cbiAgICAuc2lnbi1pbi1wYWdlIC5zdGVwd2l6YXJkIC5zdGVwd2l6YXJkLXJvdzpiZWZvcmUge1xuICAgICAgdG9wOiAxNHB4O1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgIHotaW5kZXg6IDA7IH1cbiAgLnNpZ24taW4tcGFnZSAucmFkaW8gKyAucmFkaW8sIC5zaWduLWluLXBhZ2UgLmNoZWNrYm94ICsgLmNoZWNrYm94IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XG5cblt2ZW5kb3JTaWdudXBdIHtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNzsgfVxuICBbdmVuZG9yU2lnbnVwXSAuaW5zaWRlVmVuZG9yIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4OyB9XG4gIFt2ZW5kb3JTaWdudXBdIC5idG4uYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6ICNhMDE2MTY7XG4gICAgYm9yZGVyLWNvbG9yOiAjYTAxNjE2O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxuICBbdmVuZG9yU2lnbnVwXSBpbnB1dCwgW3ZlbmRvclNpZ251cF0gc2VsZWN0IHtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItY29sb3I6ICNlZWU7XG4gICAgY29sb3I6ICMxMTE7XG4gICAgbWluLWhlaWdodDogNDBweDsgfVxuICAgIFt2ZW5kb3JTaWdudXBdIGlucHV0OmZvY3VzLCBbdmVuZG9yU2lnbnVwXSBzZWxlY3Q6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGRkOyB9XG4gIFt2ZW5kb3JTaWdudXBdIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSwgW3ZlbmRvclNpZ251cF0gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICBtaW4taGVpZ2h0OiAxcHg7IH1cbiAgW3ZlbmRvclNpZ251cF0gLmJ0bi1hbHJlYWR5IHtcbiAgICBjb2xvcjogI2EwMTYxNjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgICBbdmVuZG9yU2lnbnVwXSAuYnRuLWFscmVhZHk6aG92ZXIge1xuICAgICAgY29sb3I6ICMyYTY0OTY7IH1cbiJdfQ== */"

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