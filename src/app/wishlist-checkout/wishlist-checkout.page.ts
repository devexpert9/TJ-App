import { Component, OnInit } from '@angular/core';
import { config } from '../config';
import { ToastController, LoadingController, AlertController, Events } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
declare var google;
declare var window;

@Component({
  selector: 'app-wishlist-checkout',
  templateUrl: './wishlist-checkout.page.html',
  styleUrls: ['./wishlist-checkout.page.scss'],
})

export class WishlistCheckoutPage implements OnInit {

payment_method:any;
userId:any;
loading:any;
cart:any;
total_payable_price:number = 0;
grand_total:number = 0;
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
wishlist: any = '';  
isBrowser:any = localStorage.getItem('isBrowser');
  	constructor(public userService: UserService,public toastController:ToastController,public loadingController:LoadingController,public router: Router, public events: Events, public activatedRoute: ActivatedRoute, private payPal: PayPal) { 
	  	
  	}

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.transaction_id = '';

    var direct = this.activatedRoute.snapshot.paramMap.get('direct');
    var token = localStorage.getItem('sin_auth_token');
    this.userId = this.userService.decryptData(token,config.ENC_SALT);
    this.payment_method = 'cash';

    this.wishlist = JSON.parse(localStorage.getItem('wishlist'));
  	console.log(this.wishlist)
  	this.a_first_name = this.wishlist.userData[0].name;
    this.a_last_name = this.wishlist.userData[0].lname;
    this.a_address = this.wishlist.wish_full_address;
    this.a_city = this.wishlist.wish_city;
    this.a_state = this.wishlist.wish_state;
    this.a_country = this.wishlist.country_name;
    this.a_phone_number = this.wishlist.wish_phone;
    this.a_zip = this.wishlist.wish_zip;
    this.a_email_address = this.wishlist.wish_email;
    this.calculateTotalPrice();
    this.getProfile();
    // if(this.userId != 0){
        
    //     for(var i=0; i< this.wishlist.products.length; i++){
    //     	if(this.wishlist.products[i].product_sale_price == undefined){
    //     		this.total_payable_price += Number(this.wishlist.products[i].product_purchase_price);
    //     	}else{
    //     		this.total_payable_price += Number(this.wishlist.products[i].product_sale_price);
    //     	}
        	
    //     }
    //     if(this.cart != ''){
    //       this.is_loaded = true;
    //       this.grand_total = this.total_payable_price;
    //     }
    //     this.getProfile();
    // }
    
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
    this.userService.postData({user_id:this.userId},'getCartProducts').subscribe((result) => {
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
      this.cards = result.cards;
      this.countries = result.countries;
    },
    err => {
      this.presentToast('Error,Please try after some time.','danger');
    });
  }


  cardSelected(event){
    this.selected_card = event.target.value;
    this.choosed_card = this.cards[this.selected_card];
  }

  finalCheckout(){
    var main_address;
   

    main_address = this.a_address + ' ' + this.a_city + ' ' + this.a_state + ' ' + this.a_country;
    this.choosed_address = {
        address_first_name : this.a_first_name,
        address_last_name : this.a_last_name == undefined ? ' ' : this.a_last_name,
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
    

    var self = this;
    var geocoder = new google.maps.Geocoder(); 
    geocoder.geocode({'address': main_address }, function(results, status) {
      var latitude = '', longitude = '';
      if (status === 'OK') {
        latitude = results[0].geometry.location.lat();
        longitude = results[0].geometry.location.lng();
      } 
        self.choosed_address['latitude'] = latitude;
        self.choosed_address['longitude'] = longitude;
        if(self.payment_method == 'paypal'){
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
    });
  }

  placeOrder(){
    for(var i=0; i < this.wishlist.products.length; i++){
      this.wishlist.products[i].product_quantity = 1;
    }

    var params = {
      user_id: this.userId,
      products: this.wishlist.products,
      address: this.choosed_address,
      payment_method: this.payment_method,
      payment_card: this.choosed_card,
      coupon: this.is_coupon_applied,
      coupon_id: (this.errors.indexOf(this.coupon_id) >= 0 ? 0 : this.coupon_id),
      total_amount : this.grand_total,
      transaction_id: this.transaction_id,
      wish_id: this.wishlist.wish_id,
      is_registry:  this.wishlist.user_id == this.userId ? 0 : 1,
      shared_by: this.wishlist.user_id
    }
    this.presentLoading();
    this.userService.postData(params,'place_order').subscribe((result) => {
      if(result.status == 1){
        localStorage.removeItem('sin_wholesale_items');
        this.transaction_id = '';
        var success_msg = 'Success! Your order has been placed successfully.';
       
        
        this.stopLoading();
        this.presentToast(success_msg,'success');
        this.router.navigate(['/thankyou/'+result.products]);
        
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
    this.total_payable_price = 0;
    this.grand_total = 0;
    this.wishlist.products.forEach(function(item){
        if(Number(item.wholesale_price) != 0 && Number(1) >= Number(item.wholesale_products) && self.errors.indexOf(item.wholesale_products) == -1){
          self.total_payable_price = Number(self.total_payable_price) + (item.wholesale_price*1);
        }else if(item.is_variation == 1){
          self.total_payable_price = Number(self.total_payable_price) + (item.product_price*1);
        }else{
          if(self.errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price){
            if(item.discount_per_piece != null){
              if(item.discount_type == '%'){
                let singleItemPrice = Number(item.product_sale_price) - ((Number(item.discount_per_piece) / Number(item.product_sale_price)) * 100 );
                self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice*1);
              }else{
                let singleItemPrice = Number(item.product_sale_price) - Number(item.discount_per_piece);
                self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice*1);
              }
            }else{
              self.total_payable_price = Number(self.total_payable_price) + (item.product_sale_price*1);
            }
          }
          else{
            if(item.discount_per_piece != null){
              if(item.discount_type == '%'){
                let singleItemPrice = Number(item.product_purchase_price) - ((Number(item.discount_per_piece) / Number(item.product_purchase_price)) * 100 );
                self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice*1);
              }else{
                let singleItemPrice = Number(item.product_purchase_price) - Number(item.discount_per_piece) ;
                self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice*1);
              }
            }else{
              self.total_payable_price = Number(self.total_payable_price) + (item.product_purchase_price*1);
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
    this.total_payable_price = Number(this.total_payable_price.toFixed(2));
    this.grand_total = Number(this.grand_total.toFixed(2));
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


