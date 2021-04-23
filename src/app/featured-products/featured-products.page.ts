import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ToastController, LoadingController, Events } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { Router } from '@angular/router';
@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.page.html',
  styleUrls: ['./featured-products.page.scss'],
})
export class FeaturedProductsPage implements OnInit {
IMAGES_URL:any;
userId:any;
loading:any;
featured_products:any;
my_cart_products:any;
my_wish_products:any;
errors : any = ['',null,undefined];
  constructor(private cd: ChangeDetectorRef,public userService: UserService,public toastController:ToastController,public loadingController:LoadingController, public events: Events, public router: Router) {
  	this.IMAGES_URL = config.IMAGES_URL;
    var token = localStorage.getItem('sin_auth_token');
    this.userId = this.userService.decryptData(token,config.ENC_SALT);
    this.getCartProductsIds();
    events.subscribe('wishlist:true', data => {
      this.getCartProductsIds();
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
    this.getCartProductsIds();
    var token   = localStorage.getItem('sin_auth_token');
    this.userId = this.userService.decryptData(token,config.ENC_SALT);
  }

  getCartProductsIds(){
    this.userService.postData({user_id:this.userId},'getCartProductsIds').subscribe((result) => {
      console.log(result.wishlist);
      this.my_cart_products = result.products;
      this.my_wish_products = result.wishlist;
      
      this.getFeaturedProducts();
    },
    err => {
      this.getFeaturedProducts();
      this.my_cart_products = [];
      this.my_wish_products = [];
      this.cd.detectChanges();
    });
  }

  getFeaturedProducts(){
    this.userService.postData({limit:'150'},'featuredProducts').subscribe((result) => {
      this.featured_products = result.products;
      this.cd.detectChanges();
    },
    err => {
      this.featured_products = [];
    });
  }

  addToCart(product_id,product_sale_price,product_purchase_price)
  {
  	if(this.userId == 0)
    {
      this.router.navigate(['/login']);
    }
  	else
    {
	    this.presentLoading();
	    this.userService.postData({product_id:product_id,user_id:this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId,product_qty:1,is_variation: false, product_price:0, product_variations:[]},'addTocart').subscribe((result) => {
	      this.stopLoading();
	      if(result.status == 1){
	        this.my_cart_products.push(product_id);
	        var p_price;
	        if(this.errors.indexOf(product_sale_price) == -1 && product_sale_price != product_purchase_price){
	          p_price = product_sale_price;
	        }
	        else{
	          p_price = product_purchase_price;
	        }
	        this.events.publish('cart_updated:true', {items_in_cart:this.my_cart_products.length,cart_price:p_price,isAdd:true});
	        this.presentToast('Product added to cart.','success');
	      }
	      else{
	        this.presentToast('Error,Please try after some time.','danger');
	      }
	    },
	    err => {
	      this.stopLoading();
	      this.presentToast('Error,Please try after some time.','danger');
	    });
    }
  }

  addToWish(product_id)
  {
    if(localStorage.getItem('sin_auth_token') == '')
    {
      this.router.navigate(['/login']);
    }
    else{
      this.presentLoading(); 
      this.userService.postData({product_id:product_id, user_id:this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId, wish_title: null, is_new: this.userId == 0 ? 3 : 0 , wishlist_id: null }, 'addWishlistNew').subscribe((result) => {
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
    }
  }

  productDetails(productId){
  	this.router.navigate(['/product-details/'+productId]);
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
