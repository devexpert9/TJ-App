import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, ToastController, LoadingController, Events, AlertController, IonContent, IonSlides } from '@ionic/angular';
import { ChooseLocationPage } from '../choose-location/choose-location.page';
import { WishlistListingPage } from '../wishlist-listing/wishlist-listing.page';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
@ViewChild('slides') slides: IonSlides;
@ViewChild(IonContent) content: IonContent;


public buttonClickeddrop: boolean = false;
public buttonClickedcat: boolean = false;
new_products:any;
recent_products:any;
loading:any;
userId:any;
IMAGES_URL:any;
my_cart_products:any;
my_wish_products:any;
all_categories:any;
cart:any;
top_banners:any;
bottom_banners:any;
side_banner:any;
bottom_banner_last:any;
best_deals:any;
best_sellers:any;
banners_blocks:any;
errors : any = ['',null,undefined];
slideOpts: any = {initialSlide: 1, speed: 400 };
base_url: any = 'http://dev.indiit.solutions/TJ/dev/dev/public/uploads/userprofile/';
proImage_url: any = 'http://dev.indiit.solutions/TJ/dev/dev/public/uploads/product_images/';


total_pages:any;
current_page:number = 1;
all_blogs:any;

	constructor(public modalController: ModalController, public userService: UserService, public toastController:ToastController,public loadingController:LoadingController,public events: Events,public router: Router, public alertController: AlertController) {
    this.IMAGES_URL = config.IMAGES_URL;
    events.subscribe('wishlist:true', data => {
      this.getCartProductsIdaa();
    });
  }

  ionViewDidEnter()
  {
    var token   = localStorage.getItem('sin_auth_token');
    this.userId = this.userService.decryptData(token,config.ENC_SALT);
    
    this.getTopBanners();
    this.getBannerBlock();
    this.getBottomBanners();
    this.getCartProductsIds();
    this.getCategories();
    this.getCartProducts();
    this.content.scrollToTop();
    this.getBlogs();
  }

  getTopBanners(){
    this.userService.postData({},'top_banners').subscribe((result) => {
      this.top_banners = result.top_banners;
    },
    err => {
      this.top_banners = [];
    });
  }

  getBannerBlock(){
    this.userService.postData({},'belowBannerBlock').subscribe((result) => {
      this.banners_blocks = result.data;
    },
    err => {
      this.banners_blocks = [];
    });
  }

  getBottomBanners(){
    this.userService.postData({},'bottom_banners').subscribe((result) => {
      this.bottom_banners = result.bottom_banners;
      this.side_banner = result.side_banner;
      this.bottom_banner_last = result.bottom_banners2;
    },
    err => {
      this.bottom_banners = [];
    });
  }

  getCartProductsIds(){
    // this.presentLoading();
    this.userService.postData({user_id:this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId},'getCartProductsIds').subscribe((result) => {
      this.my_cart_products = result.products;
      this.my_wish_products = result.wishlist;
      this.getRecentViewed();
    },
    err => {
      this.getRecentViewed();
      this.my_cart_products = [];
      this.my_wish_products = [];
    });
  }


  getCartProductsIdaa(){
    //this.presentLoading();
    this.userService.postData({user_id:this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId},'getCartProductsIds').subscribe((result) => {
      this.my_wish_products = result.wishlist;
    },
    err => {
    });
  }



  getRecentViewed(){
    this.userService.postData({limit:'10',user_id:this.userId},'allRecentViewProducts').subscribe((result) => {
      this.recent_products = result.products;
      this.getNewProducts();
    },
    err => {
      this.getNewProducts();
      this.recent_products = [];
    });
  }

  getNewProducts(){
    this.userService.postData({limit:'10'},'newProducts').subscribe((result) => {
      this.new_products = result.products;
      console.log()
      this.getBestDeals();
    },
    err => {
      this.getBestDeals();
      this.new_products = [];
    });
  }

  getBestDeals(){
    this.userService.postData({limit:'15'},'bestDealsProducts').subscribe((result) => {
      this.getBestSellers();
      this.best_deals = result.products;
      console.log(this.best_deals)
    },
    err => {
      this.stopLoading();
      this.best_deals = [];
    });
  }

  getBestSellers(){
    this.userService.postData({limit:'15'},'bestSellerProducts').subscribe((result) => {
      this.stopLoading();
      this.best_sellers = result.products;
    },
    err => {
      this.stopLoading();
      this.best_sellers = [];
    });
  }

  getCategories(){
    this.userService.getData('getCategories').subscribe((result) => {
      this.all_categories = result.categories;
    },
    err => {
      this.all_categories = [];
    });
  }

  getCartProducts(){
    this.userService.postData({user_id:this.userId},'getCartProducts').subscribe((result) => {
      this.cart = result.products;
    },
    err => {
      this.cart = [];
    });
  }

  addToCart(product_id,product_sale_price,product_purchase_price){
    // if(this.userId == 0){
    //   //this.router.navigate(['/login']);
    // }
    // else{
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
          this.getCartProducts();
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
    // }
  }

  addToWish(product_id){
    // if(this.userId == 0){
    //   this.router.navigate(['/login']);
    // }
    // else{
      this.presentAlert(product_id);

      // this.presentLoading();
      // this.userService.postData({product_id:product_id,user_id:this.userId},'addTowish').subscribe((result) => {
      //   this.stopLoading();
      //   if(result.status == 1){
      //     this.my_wish_products.push(product_id);
      //     this.presentToast('Product added to wishlist.','success');
      //   }
      //   else{
      //     this.presentToast('Error,Please try after some time.','danger');
      //   }
      // },
      // err => {
      //   this.stopLoading();
      //   this.presentToast('Error,Please try after some time.','danger');
      // });
    // }
  }

  async presentAlert(product_id) {
    localStorage.setItem('product', product_id);
    //
    // const modal = await this.modalController.create({
    //   component: WishlistListingPage,
    //   componentProps: { value: product_id },
    //   cssClass: 'wishListModal'
    // });
    // return await modal.present();
    this.userService.postData({ product_id: localStorage.getItem('product'), user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId, wish_title: null, is_new: this.userId == 0 ? 3 : 0, wishlist_id: null }, 'addWishlistNew').subscribe((result) => {
  	    this.stopLoading();
  	    if(result.status == 1){
  	      // this.my_wish_products.push(product_id);
  	       this.presentToast('Product added to wishlist.','success');
  	       this.events.publish('wishlist:true',{});
  	       //this.modalCtrl.dismiss();
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

  productDetails(catId,subcatId){
    this.router.navigate(['/products'],{queryParams : {cat : catId, subcat: subcatId}});
  }

  public onButtonClickdrop() {
    this.buttonClickeddrop = !this.buttonClickeddrop;
  }

  public onButtonClickcat() {
    this.buttonClickedcat = !this.buttonClickedcat;
  }

	async presentModal() {
    const modal = await this.modalController.create({
      component: ChooseLocationPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
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

  calculatePercentage( deal ){
    return (((Number(deal.product_purchase_price)-Number(deal.product_sale_price))/Number(deal.product_purchase_price))*100).toFixed(0);
  }

  isPurchasePriceGreater( deal ){
    if(Number(deal.product_purchase_price) > Number(deal.product_sale_price)){
      return true;
    }else{
      return false;
    }
  }

  slideOpts1 = {
      slidesPerView: 6,
      spaceBetween: 0,
      loop:true,
      speed: 1000,
      autoplay:true,
      breakpoints: {
          1024: {
              slidesPerView: 6,
              spaceBetween: 40
          },
          768: {
              slidesPerView: 4,
              spaceBetween: 30,
          },
          640: {
              slidesPerView: 3,
              spaceBetween: 10
          },
          320: {
              slidesPerView: 3,
              spaceBetween: 6
          }
      }
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }





  getBlogs(){
    this.presentLoading();
    this.userService.postData({per_page: '4', page : this.current_page},'allBlogs').subscribe((result) => {
      this.stopLoading();
      this.all_blogs = result.blogs;
      var records = Math.ceil(result.total_blogs/4);
      if(isNaN(records)){
        this.total_pages = 1;
      }
      else{
        this.total_pages = records;
      }
    },
    err => {
      this.stopLoading();
      this.all_blogs = [];
    });
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  atob(string){
    return atob(string);
  }

  paginate(page){
    if(page == 'next'){
      if(this.total_pages != this.current_page){
        this.current_page = Number(this.current_page) + 1;
        this.getBlogs();
      }
    }
    else if(page == 'prev'){
      if(this.current_page != 1){
        this.current_page = Number(this.current_page) - 1;
        this.getBlogs();
      }
    }
    else{
      if(this.current_page != page){
        this.current_page = page;
        this.getBlogs();
      }
    }
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
