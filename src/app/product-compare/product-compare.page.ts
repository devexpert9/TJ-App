import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, Events } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-compare',
  templateUrl: './product-compare.page.html',
  styleUrls: ['./product-compare.page.scss'],
})
export class ProductComparePage implements OnInit {
loading:any;
comapred_products_list:any;
userId:any;
my_cart_products:any;
IMAGES_URL:any;
errors : any = ['',null,undefined];
  constructor(public toastController: ToastController, public loadingController:LoadingController, public userService: UserService, public router: Router, public events: Events) {
    this.IMAGES_URL = config.IMAGES_URL;
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    var token = localStorage.getItem('sin_auth_token');
    this.userId = this.userService.decryptData(token,config.ENC_SALT);
    this.getCartProductsIds();
  }

  getCartProductsIds(){
    this.presentLoading();
    this.userService.postData({user_id:this.userId},'getCartProductsIds').subscribe((result) => {
      this.stopLoading();
      this.my_cart_products = result.products;
      this.getCompareProducts();
    },
    err => {
      this.stopLoading();
      this.getCompareProducts();
      this.my_cart_products = [];
    });
  }

  getCompareProducts(){
    this.comapred_products_list = [];
    var all_compare = JSON.parse(localStorage.getItem('sin_compare_products'));
    if(this.errors.indexOf(all_compare) >= 0){
      this.comapred_products_list = [];
    }
    else{
      this.comapred_products_list = all_compare;
    }
    console.log(this.comapred_products_list)
  }

  addToCart(product_id,product_sale_price,product_purchase_price){
    if(this.userId == 0){
      this.router.navigate(['/login']);
    }
    else{
      this.presentLoading();
      this.userService.postData({product_id:product_id,user_id:this.userId,product_qty:1,is_variation: false, product_price:0, product_variations:[]},'addTocart').subscribe((result) => {
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

  removeCompared(index){
    this.comapred_products_list.splice(index,1);
    localStorage.setItem('sin_compare_products',JSON.stringify(this.comapred_products_list));
  }

  atob(string){
    return atob(string);
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
