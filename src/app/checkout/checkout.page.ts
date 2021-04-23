import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { config } from '../config';
import { ToastController, LoadingController, AlertController, Events } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { GlobalFooService } from '../services/user/globalFooService.service';

declare var google;
declare var window;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
payment_method:any;
userId:any;
loading:any;
cart:any;
total_payable_price:number;
grand_total:number;
errors : any = ['',null,undefined];
public buttonClickeddrop: boolean = false;
profile:any;
countries:any;
addresses:any;
cards:any;
selected_address:any;
selected_card:any;
c_card_number:any;
c_card_type:any;
c_expiry_month:any;
c_expiry_year:any;
c_card_cvv:any;
a_first_name:any;
a_last_name:any = '';
a_email_address:any;
a_phone_number:any;
a_address:any;
a_city:any;
a_state:any;
a_country:any;
a_zip:any;
can_save_address:any;
choosed_address:any;
choosed_card:any;
coupon_amount:any;
coupon_id:any;
is_loaded:Boolean = false;
is_coupon_applied:Boolean = false;
is_paypal_web_enabled:Boolean = false;
address_type:string = '0';
coupon_code:any;
applied_coupon_id:any;
is_wholesale:Boolean;
applied_coupon_type:any;
transaction_id:any;
isBrowser:any = localStorage.getItem('isBrowser');
latitude: number;
longitude: number;
zoom:number;
address: string;
private geoCoder;
@ViewChild('search')
public searchElementRef: ElementRef;
userSettings = {inputPlaceholderText:'Enter your address...'}
  constructor(private globalFooService: GlobalFooService, public userService: UserService,public toastController:ToastController,public loadingController:LoadingController,public router: Router, public events: Events, public activatedRoute: ActivatedRoute, private payPal: PayPal, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone)
  {
    events.subscribe('current_address_changed:true', data => {
      this.current_address();
    });
  }

  ngOnInit() {
    //load Places Autocomplete
    // this.mapsAPILoader.load().then(() => {
    //   this.setCurrentLocation();
    //   this.geoCoder = new google.maps.Geocoder;

    //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    //     types: ["address"]
    //   });
    //   autocomplete.addListener("place_changed", () => {
    //     this.ngZone.run(() => {
    //       //get the place result
    //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();

    //       //verify result
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }

    //       this.latitude = place.geometry.location.lat();
    //       this.longitude = place.geometry.location.lng();
    //       this.zoom = 12;
    //     });
    //   });
    // });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude, true);
      });
    }
  }

  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude, true);
  }

  autoCompleteCallback(selectedData:any) {
    console.log('running...')
    this.latitude = selectedData.data.geometry.location.lat;
    this.longitude = selectedData.data.geometry.location.lng;
    this.getAddress(this.latitude, this.longitude, false);
  }

  getAddress(latitude, longitude, is_update) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
          this.a_address = this.address;
          if(is_update == true){
            this.userSettings['inputString'] = this.address;
            this.userSettings = Object.assign({},this.userSettings)
          }
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  ionViewDidEnter()
  {
    if(localStorage.getItem('comeFrom') == 'register')
    {
      this.router.navigate(['/interest']);
      return;
    }

    this.transaction_id = '';
    this.address_type = '0';
    this.current_address();
    var direct  = this.activatedRoute.snapshot.paramMap.get('direct');
    var token   = localStorage.getItem('sin_auth_token');
    this.userId = this.userService.decryptData(token,config.ENC_SALT);
    this.payment_method = 'cash';
    
    if(direct != 'direct')
    {
      this.is_wholesale = false;
      var is_coupon_applied = localStorage.getItem('coupon_applied');
      if(is_coupon_applied == 'success')
      {
        this.is_coupon_applied = true;
        this.coupon_amount = localStorage.getItem('coupon_applied_amount');
        this.coupon_id = localStorage.getItem('applied_coupon_id');
        this.applied_coupon_type = 'Dollar';
      }
      this.total_payable_price = 0;
      this.grand_total = 0;
      this.getCartProducts();
      if(this.userId != 0){
        
        this.getProfile();
      }
    }
    else{
      this.getCartProducts();
      this.is_wholesale = true;
      // if(this.userId != 0){
        this.cart = JSON.parse(localStorage.getItem('sin_wholesale_items'));
        if(this.cart != ''){
          this.is_loaded = true;
          this.total_payable_price = this.cart[0].product_purchase_price;
          this.grand_total = this.total_payable_price;
        }
        this.getProfile();
      // }
    }
    console.log(this.cart)
  }

  initializePaypalWeb(){
    let _this = this;
    setTimeout(() => {
      // Render the PayPal button into #paypal-button-container
      window.paypal.Buttons({
        style: {
            color:  'blue', //gold,blue,silver,black,white
            shape:  'pill',
            label:  'pay',
            height: 40
        },
        // Set up the transaction
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: _this.grand_total
              }
            }]
          });
        },

        // Finalize the transaction
        onApprove: function (data, actions) {
          return actions.order.capture()
            .then(function (details) {
              // Show a success message to the buyer
              if(details.status == 'COMPLETED'){
                _this.transaction_id = details.purchase_units[0]['payments']['captures'][0]['id'];
                _this.placeOrder();
              }
              else{
                _this.presentToast('Payment unsuccessful!','danger');
              }
            })
            .catch(err => {
              _this.presentToast('Error while processing payment!','danger');
            })
        }
      }).render('#paypal-button-container');
    }, 500);
  }

  current_address(){
    var current_address = JSON.parse(localStorage.getItem('sin_current_address'));
    if(this.errors.indexOf(current_address) == -1){
      this.a_address = current_address.name +', '+ current_address.vicinity;
    }
  }

  ionViewWillUnload(){
    this.events.unsubscribe('current_address_changed:true');
  }

  applyCoupon(){
    if(this.errors.indexOf(this.coupon_code) >= 0){
      this.presentToast('Please enter coupon code.','danger');
      return false;
    }
    else{
      this.presentLoading();
      this.userService.postData({coupon_code:this.coupon_code,user_id:this.userId},'applyCoupon').subscribe((result) => {
        this.stopLoading();
        if(result.status == 1){
          this.presentToast('Coupon applied successfully.','success');
          this.applied_coupon_id = result.coupon.coupon_id;
          this.is_coupon_applied = true;
          this.coupon_amount = Number(result.coupon.discount_value);
          this.applied_coupon_type = result.coupon.discount_type;
          this.calculateTotalPrice();
        }
        else if(result.status == 2){
          this.presentToast('Coupon already applied.','danger');
        }
        else{
          this.presentToast('Invalid coupon.','danger');
        }
      },
      err => {
        this.presentToast('Error,Please try after some time.','danger');
        this.stopLoading();
      });
    }
  }

  removeCoupon(){
    this.applied_coupon_id = 0;
    this.coupon_code = '';
    this.is_coupon_applied = false;
    this.coupon_amount = 0;
    this.calculateTotalPrice();
  }

  getCartProducts(){
    this.presentLoading();
    this.userService.postData({user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId},'getCartProducts').subscribe((result) => {
      this.is_loaded = true;
      this.stopLoading();
      this.cart = result.products;
      if(this.cart != ''){
        this.calculateTotalPrice();
      }
    },
    err => {
      this.is_loaded = true;
      this.stopLoading();
      this.cart = [];
    });
  }

  getProfile(){
    this.userService.postData({userId: this.userId},'getProfile').subscribe((result) => {
      this.profile = result.profile;
      this.countries = result.countries;
      this.addresses = result.addresses;
      this.cards = result.cards;
    },
    err => {
      this.presentToast('Error,Please try after some time.','danger');
    });
  }

  addressSelected(event){
    this.selected_address = event.target.value;
    this.choosed_address = this.addresses[this.selected_address];
  }

  chooseAddress(event){
    this.address_type = event.target.value;
  }

  cardSelected(event){
    this.selected_card = event.target.value;
    this.choosed_card = this.cards[this.selected_card];
  }

  finalCheckout()
  {
    
    if(this.userId != 0)
    {
      var main_address;
      if(this.address_type == '1')
      {
        if(this.errors.indexOf(this.selected_address) >= 0){
          this.presentToast('Please select billing address.','danger');
          return false;
        }
        else{
          main_address = this.selected_address.full_address + ' ' + this.selected_address.address_city + ' ' + this.selected_address.address_state + ' ' + this.selected_address.country_name;
        }
      }
      if(this.address_type == '0'){
        if(this.errors.indexOf(this.a_first_name) >= 0){
          this.presentToast('Please enter first name.','danger');
          return false;
        }
        if(this.errors.indexOf(this.a_last_name) >= 0){
          this.presentToast('Please enter last name.','danger');
          return false;
        }
        if(this.errors.indexOf(this.a_email_address) >= 0){
          this.presentToast('Please enter email address.','danger');
          return false;
        }
        var reg= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(reg.test(this.a_email_address) == false){
          this.presentToast('Please enter valid email address.','danger');
            return false;
        }
        if(this.errors.indexOf(this.a_phone_number) >= 0){
          this.presentToast('Please enter phone number.','danger');
          return false;
        }
        if(this.errors.indexOf(this.a_address) >= 0){
          this.presentToast('Please enter address.','danger');
          return false;
        }
        if(this.errors.indexOf(this.a_city) >= 0){
          this.presentToast('Please enter city.','danger');
          return false;
        }
        if(this.errors.indexOf(this.a_state) >= 0){
          this.presentToast('Please enter state.','danger');
          return false;
        }
        if(this.errors.indexOf(this.a_country) >= 0){
          this.presentToast('Please enter country.','danger');
          return false;
        }
        if(this.errors.indexOf(this.a_zip) >= 0){
          this.presentToast('Please enter zip code.','danger');
          return false;
        }
        main_address = this.a_address + ' ' + this.a_city + ' ' + this.a_state + ' ' + this.a_country;
        this.choosed_address = {
          address_first_name : this.a_first_name,
          address_last_name : this.a_last_name,
          full_address : this.a_address,
          address_city : this.a_city,
          address_state : this.a_state,
          address_country : this.a_country,
          address_phone : this.a_phone_number,
          address_zip_code : this.a_zip,
          set_as_default : 0,
          user_id : this.userId,
          isAdd : 1,
          address_id : null
        };
      }

      var self = this;

      if(self.payment_method == 'paypal')
      {
        if(self.isBrowser == 'false'){
          self.payWithPaypal();
        }
        else{
          console.log('enter4')
          self.is_paypal_web_enabled = true;
          setTimeout(function(){
            self.initializePaypalWeb();
          },3000);
        }
      }
      else{
        self.placeOrder();
      }

      // var geocoder = new google.maps.Geocoder();
      // geocoder.geocode({'address': main_address }, function(results, status) 
      // {
      //   var latitude = '', longitude = '';
      //   if (status === 'OK') {
      //     latitude = results[0].geometry.location.lat();
      //     longitude = results[0].geometry.location.lng();
      //   }
      //     self.choosed_address['latitude'] = latitude;
      //     self.choosed_address['longitude'] = longitude;

      // });
    }else{
      this.router.navigate(['/login']);
    }
  }

  placeOrder()
  {
    var params = {
      user_id:        this.userId,
      products:       this.cart,
      address:        this.choosed_address,
      payment_method: this.payment_method,
      payment_card:   this.choosed_card,
      coupon:         this.is_coupon_applied,
      coupon_id:      (this.errors.indexOf(this.coupon_id) >= 0 ? 0 : this.coupon_id),
      total_amount :  this.grand_total.toFixed(2),
      transaction_id: this.transaction_id,
      wish_id:        0,
      is_registry:    0,
      shared_by:      0
    }
    this.presentLoading();
    this.userService.postData(params,'place_order').subscribe((result) => {
      if(result.status == 1)
      {

        this.globalFooService.publishSomeData({
          foo: {'data': "done", 'page': 'orderPlaced'}
        });

        localStorage.removeItem('sin_wholesale_items');
        this.transaction_id = '';
        var success_msg = 'Success! Your order has been placed successfully.';
        if(this.can_save_address == true)
        {
          this.userService.postData(this.choosed_address,'updateUserAddress').subscribe((address_added) => {
              this.stopLoading();
              this.presentToast(success_msg,'success');
              
              localStorage.setItem('transaction_id',result.products);

              this.events.publish('cart_updated:true', {items_in_cart:0,cart_price:0});
              this.router.navigate(['/thankyou/'+result.products]);
          },
          err => {
            this.stopLoading();
            localStorage.setItem('transaction_id',result.products);
            this.presentToast(success_msg,'success');
            this.events.publish('cart_updated:true', {items_in_cart:0,cart_price:0});
            this.router.navigate(['/thankyou/'+result.products]);
          });
        }
        else{
          this.stopLoading();
          localStorage.setItem('transaction_id',result.products);
          this.presentToast(success_msg,'success');
          this.events.publish('cart_updated:true', {items_in_cart:0,cart_price:0});
          this.router.navigate(['/thankyou/'+result.products]);
        }
      }
      else{
        this.stopLoading();
        this.presentToast('Error:'+result.msg,'danger');
      }
    }, err => {
      this.stopLoading();
      this.presentToast('Error,Please try after some time.','danger');
    });
  };

  payWithPaypal() {
    this.payPal.init({
     PayPalEnvironmentProduction: config.PAYPAL_PRODUCTION_CLIENT_ID,
     PayPalEnvironmentSandbox: config.PAYPAL_SANDBOX_CLIENT_ID
    }).then(() => {
     this.payPal.prepareToRender(config.PAYPAL_ENVIRONMENT, new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
       let payment = new PayPalPayment(this.grand_total.toString(), 'USD', 'Siniyetu payment', 'sale');
       this.payPal.renderSinglePaymentUI(payment).then((res) => {
         this.transaction_id = res.response.id;
         this.placeOrder();
          // Successfully paid
       }, (err) => {
          // Error or render dialog closed without being successful
         this.presentToast('Payment unsuccessful!','danger');
       });
     }, (err) => {
        // Error in configuration
       this.presentToast('Error while processing payment!','danger');
     });
   }, (err) => {
      // Error in initialization, maybe PayPal isn't supported or something else
     this.presentToast('Error while processing payment!','danger');
   });
  }

  calculateTotalPrice(){
    var self = this;
    this.cart.forEach(function(item){
        if(Number(item.wholesale_price) != 0 && Number(item.product_quantity) >= Number(item.wholesale_products) && self.errors.indexOf(item.wholesale_products) == -1){
          self.total_payable_price = Number(self.total_payable_price) + (item.wholesale_price*item.product_quantity);
        }else if(item.is_variation == 1){
          self.total_payable_price = Number(self.total_payable_price) + (item.product_price*item.product_quantity);
        }else{
          if(self.errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price){
            if(item.discount_per_piece != null){
              if(item.discount_type == '%'){
                let singleItemPrice = Number(item.product_sale_price) - ((Number(item.discount_per_piece) / Number(item.product_sale_price)) * 100 );
                self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice*item.product_quantity);
              }else{
                let singleItemPrice = Number(item.product_sale_price) - Number(item.discount_per_piece);
                self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice*item.product_quantity);
              }
            }else{
              self.total_payable_price = Number(self.total_payable_price) + (item.product_sale_price*item.product_quantity);
            }
          }
          else{
            if(item.discount_per_piece != null){
              if(item.discount_type == '%'){
                let singleItemPrice = Number(item.product_purchase_price) - ((Number(item.discount_per_piece) / Number(item.product_purchase_price)) * 100 );
                self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice*item.product_quantity);
              }else{
                let singleItemPrice = Number(item.product_purchase_price) - Number(item.discount_per_piece) ;
                self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice*item.product_quantity);
              }
            }else{
              self.total_payable_price = Number(self.total_payable_price) + (item.product_purchase_price*item.product_quantity);
            }

          }
        }
    });
    var coupon_amount = 0;
    if(this.is_coupon_applied == true){
      if(this.applied_coupon_type == 'Percent'){
        coupon_amount = (this.coupon_amount/100)*this.total_payable_price;
      }
      else{
        coupon_amount = this.coupon_amount;
      }
    }
    this.coupon_amount = coupon_amount;
    this.grand_total = this.total_payable_price - Number(coupon_amount);
  }

  cashClicked(){
    this.payment_method = 'cash';
    this.is_paypal_web_enabled = false;
  }

  async presentToast(message,color) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: color,
      showCloseButton: true
    });
    toast.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create();
    await this.loading.present();
  }

  async stopLoading() {
    if(this.loading != undefined){
      await this.loading.dismiss();
    }
    else{
      var self = this;
      setTimeout(function(){
        self.stopLoading();
      },1000);
    }
  }
}

// if(this.cards != ''){
      //   if(this.errors.indexOf(this.selected_card) >= 0){
      //     this.presentToast('Please select payment card.','danger');
      //     return false;
      //   }
      // }
      // if(this.cards == ''){
      //   if(this.errors.indexOf(this.c_card_number) >= 0){
      //     this.presentToast('Please enter card number.','danger');
      //     return false;
      //   }
      //   if(this.errors.indexOf(this.c_card_type) >= 0){
      //     this.presentToast('Please select card type.','danger');
      //     return false;
      //   }
      //   if(this.errors.indexOf(this.c_expiry_month) >= 0){
      //     this.presentToast('Please enter expiry month.','danger');
      //     return false;
      //   }
      //   if(this.errors.indexOf(this.c_expiry_year) >= 0){
      //     this.presentToast('Please enter expiry year.','danger');
      //     return false;
      //   }
      //   if(this.errors.indexOf(this.c_card_cvv) >= 0){
      //     this.presentToast('Please enter card cvv.','danger');
      //     return false;
      //   }
      //   this.choosed_card = {
      //     card_number : this.c_card_number,
      //     card_type : this.c_card_type,
      //     expiry_month : this.c_expiry_month,
      //     expiry_year : this.c_expiry_year,
      //     cvv : this.c_card_cvv,
      //     user_id : this.userId,
      //     isAdd : 1,
      //     card_id : null
      //   };
      // }
