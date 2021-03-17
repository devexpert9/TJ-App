import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, AlertController, Events } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
public buttonClickeddrop: boolean = false;
IMAGES_URL:any;
userId:any;
loading:any;
cart:any;
coupon_code:any;
total_payable_price:number = 0;
grand_total:number = 0;
applied_coupon_type:any;
applied_coupon:Boolean = false;
applied_coupon_amount:any = 0;
errors : any = ['',null,undefined];
total_coupon_amount:any = 0;
applied_coupon_id:any;
my_wish_products:any;
  constructor(public userService: UserService,public toastController:ToastController,public loadingController:LoadingController,public alertController: AlertController,public router: Router,public events: Events)
  {
    this.IMAGES_URL = config.IMAGES_URL;
    this.events.subscribe('cart_updated:true', data => {
      // this.getCartProducts();
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
    var token = localStorage.getItem('sin_auth_token');
    this.userId = this.userService.decryptData(token,config.ENC_SALT);
    localStorage.removeItem('coupon_applied');
    
    this.total_payable_price = 0;
    this.grand_total = 0;
    this.getCartProductsIds();
    this.getCartProducts();
  }

  getCartProductsIds(){
    this.presentLoading();
    this.userService.postData({user_id:this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId},'getCartProductsIds').subscribe((result) => {
      this.my_wish_products = result.wishlist;
      this.getCartProducts();
    },
    err => {
      this.getCartProducts();
      this.my_wish_products = [];
    });
  }

  getCartProducts()
  {
    this.userService.postData({user_id:this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId},'getCartProducts').subscribe((result) => 
    {
      this.stopLoading();
      for(let i =0; i < result.products.length; i++)
      {
        // if(typeof(result.products[i].product_variations) == 'string')
        if(result.products[i].product_variations)
        {
          result.products[i].product_variations = JSON.parse(result.products[i].product_variations)
        }
      }
      this.cart = result.products;

      //console.log('HERE I AM');
      //console.log(this.cart);

      if(this.cart != '')
      {
        this.calculateTotalPrice();
      }
      else
      {
        this.events.publish('cart_updated:true', {items_in_cart:0,cart_price:0});
      }
    },
    err => {
      this.stopLoading();
      this.cart = [];
    });
  }

  addToWish(product_id){
    // if(this.userId == 0){
    //   this.router.navigate(['/login']);
    // }
    // else{
      this.presentLoading();
      this.userService.postData({product_id:product_id, user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId, wish_title: null, is_new: this.userId == 0 ? 3 : 0 , wishlist_id: null }, 'addWishlistNew').subscribe((result) => {
        this.stopLoading();
        if(result.status == 1){
          this.my_wish_products.push(product_id);
          this.presentToast('Product added to wishlist.','success');
        }
        else{
          this.presentToast('Error,Please try after some time.','danger');
        }
      },
      err => {
        this.stopLoading();
        this.presentToast('Error,Please try after some time.','danger');
      });
    // }
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
          this.applied_coupon = true;
          this.applied_coupon_amount = Number(result.coupon.discount_value);
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
    this.applied_coupon = false;
    this.applied_coupon_amount = 0;
    this.calculateTotalPrice();
  }

  calculateTotalPrice(){
    var self = this;
    this.total_payable_price = 0;
    this.grand_total = 0;
    if(this.cart.length > 0){
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
      this.events.publish('cart_updated:true', {items_in_cart:this.cart.length,cart_price:this.total_payable_price});
    }
    else{
      this.events.publish('cart_updated:true', {items_in_cart:0,cart_price:0});
    }
    if(this.applied_coupon == true){
      var coupon_amount;
      if(this.applied_coupon_type == 'Percent'){
        coupon_amount = (this.applied_coupon_amount/100)*this.total_payable_price;
      }
      else{
        coupon_amount = this.applied_coupon_amount
      }
      this.total_coupon_amount = Number(coupon_amount);
      this.grand_total = Number(this.total_payable_price) - Number(coupon_amount);
    }
    else{
      this.grand_total = this.total_payable_price;
    }
  }

  plusQuantity(index,cart_id)
  {
    this.presentLoading();
    this.cart[index]['product_quantity'] = Number(this.cart[index]['product_quantity']) + 1;
    this.updateCartQuantity(cart_id, this.cart[index]['product_quantity']);
    if(this.errors.indexOf(this.cart[index]['product_sale_price']) == -1 && this.cart[index]['product_sale_price'] != this.cart[index]['product_purchase_price'])
    {
      this.total_payable_price = Number(this.total_payable_price) + Number(this.cart[index]['product_sale_price']);
    }
    else{
      this.total_payable_price = Number(this.total_payable_price) + Number(this.cart[index]['product_purchase_price']);
    }
    this.calculateTotalPrice();

    this.stopLoading();
    
    this.events.publish('cart_updated:true', {items_in_cart:this.cart.length,cart_price:this.total_payable_price});
  }

  minusQuantity(index,cart_id)
  {
    this.presentLoading();
    if(this.cart[index]['product_quantity'] != 1){
      this.cart[index]['product_quantity'] = Number(this.cart[index]['product_quantity']) - 1;
      this.updateCartQuantity(cart_id, this.cart[index]['product_quantity']);
      if(this.errors.indexOf(this.cart[index]['product_sale_price']) == -1 && this.cart[index]['product_sale_price'] != this.cart[index]['product_purchase_price']){
        this.total_payable_price = Number(this.total_payable_price) - Number(this.cart[index]['product_sale_price']);
      }
      else{
        this.total_payable_price = Number(this.total_payable_price) - Number(this.cart[index]['product_purchase_price']);
      }
      this.calculateTotalPrice();
      this.stopLoading();
      this.events.publish('cart_updated:true', {items_in_cart:this.cart.length,cart_price:this.total_payable_price});
    }
  }

  updateCartQuantity(cart_id,quantity)
  {
    this.presentLoading();
    this.userService.postData({cart_id: cart_id, quantity:quantity },'updateCartQuantity').subscribe((result) => {
        this.stopLoading();
        if(result.status == 1)
        {
          this.presentToast('Product quantity updated.','success');
        }
        else
        {
          this.presentToast('Error,Please try after some time.','danger');
        }
      },
      err => {
        this.presentToast('Error,Please try after some time.','danger');
      });
  }

  checkout(){
    // this.presentLoading();
    if(this.errors.indexOf(this.userId) >= 0)
    {
      // this.stopLoading();
      this.presentToast('Please login to checkout.','danger');
      this.router.navigate(['/login']);
    }
    else{
      // this.presentLoading();
      if(this.applied_coupon == true)
      {
        localStorage.setItem('coupon_applied','success');
        localStorage.setItem('coupon_applied_amount',this.total_coupon_amount);
        localStorage.setItem('applied_coupon_id',this.applied_coupon_id);
      }
      // this.stopLoading();
      this.router.navigate(['/checkout']);
    }
  }

  async remove(cart_id,index)
  {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to remove this product?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (res) => {
            console.log('Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.presentLoading();
            this.userService.postData({cart_id: cart_id},'removeCartProduct').subscribe((result) => {
              this.stopLoading();
              if(result.status == 1){
                this.cart.splice(index,1);
                this.calculateTotalPrice();
                this.presentToast('Product removed from cart.','success');
              }
              else{
                this.presentToast('Error,Please try after some time.','danger');
              }
            },
            err => {
              this.presentToast('Error,Please try after some time.','danger');
            });
          }
        }
      ]
    });
    await alert.present();
  }

  public onButtonClickdrop() {
    this.buttonClickeddrop = !this.buttonClickeddrop;
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

  subtotalPrice(item){
    if(item.is_variation == 1){
      return Number(item.product_price);
    }else if(Number(item.wholesale_price) != 0 && Number(item.product_quantity) >= Number(item.wholesale_products) && this.errors.indexOf(item.wholesale_products) == -1){
      return item.wholesale_price;
    }else{
      if(this.errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price){
        if(item.discount_per_piece != null){
          if(item.discount_type == '%'){
            return (Number(item.product_sale_price) - ((Number(item.discount_per_piece) / Number(item.product_sale_price)) * 100 )).toFixed(2);
          }else{
            return (Number(item.product_sale_price) - Number(item.discount_per_piece)).toFixed(2);
          }
        }else{
          return item.product_sale_price;
        }
      }
      else{
        if(item.discount_per_piece != null){
          if(item.discount_type == '%'){
            return (Number(item.product_purchase_price) - ((Number(item.discount_per_piece) / Number(item.product_purchase_price)) * 100 )).toFixed(2);
          }else{
            return (Number(item.product_purchase_price) - Number(item.discount_per_piece)).toFixed(2);
          }
        }else{
          return item.product_purchase_price;
        }
      }
    }
  };

  grandTotalPrice(item){
    if(item.is_variation == 1){
      return Number(item.product_price) * Number(item.product_quantity);
    }else if(Number(item.wholesale_price) != 0 && Number(item.product_quantity) >= Number(item.wholesale_products) && this.errors.indexOf(item.wholesale_products) == -1){
      return item.wholesale_price * item.product_quantity;
    }else{
      if(this.errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price){

        if(item.discount_per_piece != null){
          if(item.discount_type == '%'){
            return ((Number(item.product_sale_price) - ((Number(item.discount_per_piece) / Number(item.product_sale_price)) * 100 )) * item.product_quantity).toFixed(2);
          }else{
            return ((Number(item.product_sale_price) - Number(item.discount_per_piece)) * item.product_quantity).toFixed(2);
          }
        }else{
          return item.product_sale_price * item.product_quantity;
        }
      }
      else{
        if(item.discount_per_piece != null){
          if(item.discount_type == '%'){
            return ((Number(item.product_purchase_price) - ((Number(item.discount_per_piece) / Number(item.product_purchase_price)) * 100 )) * item.product_quantity).toFixed(2);
          }else{
            return ((Number(item.product_purchase_price) - Number(item.discount_per_piece)) * item.product_quantity).toFixed(2);
          }
        }else{
          return item.product_purchase_price * item.product_quantity;
        }
      }
    }
  };

}
