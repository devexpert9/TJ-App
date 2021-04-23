import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, ToastController, LoadingController, Events, AlertController, IonContent, IonSlides } from '@ionic/angular';
import { ChooseLocationPage } from '../choose-location/choose-location.page';
import { WishlistListingPage } from '../wishlist-listing/wishlist-listing.page';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { Router } from '@angular/router';
import { GlobalFooService } from '../services/user/globalFooService.service';
@Component({
  selector: 'app-password-instructions',
  templateUrl: './password-instructions.page.html',
  styleUrls: ['./password-instructions.page.scss'],
})
export class PasswordInstructionsPage {
  @ViewChild('slides') slides: IonSlides;
  @ViewChild('slides1') slides1: IonSlides;
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
  upsell_products:any;
  bottom_banner_last:any;
  best_deals:any;
  best_sellers:any;
  banners_blocks:any;
  getBlogs:any;
  errors : any = ['',null,undefined];

  // slideOpts1: any = {initialSlide: 1, speed: 400, loop: true };
  // slideOpts2: any = {initialSlide: 1, speed: 400, loop: true };

  base_url: any = 'http://dev.indiit.solutions/TJ/dev/dev/public/uploads/userprofile/';
  proImage_url: any = 'http://dev.indiit.solutions/TJ/dev/dev/public/uploads/product_images/';


  total_pages:any;
  current_page:number = 1;
  all_blogs:any;
  featured_products:any;
  sellers:any;
  sliderCount:any = 1;

  constructor(private globalFooService: GlobalFooService, public modalController: ModalController, public userService: UserService, public toastController:ToastController,public loadingController:LoadingController,public events: Events,public router: Router, public alertController: AlertController) {
    this.IMAGES_URL = config.IMAGES_URL;
    events.subscribe('wishlist:true', data => {
      //this.getCartProductsIdaa();
    });
  }

  ionViewDidEnter()
  {
    var token   = localStorage.getItem('sin_auth_token');
    this.userId = this.userService.decryptData(token,config.ENC_SALT);
    
    this.getFeaturedProducts();
    this.content.scrollToTop();
  }

  getFeaturedProducts()
  {
    this.presentLoading();
    this.userService.postData({limit:'150'},'featuredProducts').subscribe((result) => {
      this.stopLoading();
      this.featured_products = result.products;
      // this.cd.detectChanges();
    },
    err => {
      this.featured_products = [];
    });
  }
  

  async presentAlert(product_id) {
    localStorage.setItem('product', product_id);
    this.userService.postData({ product_id: localStorage.getItem('product'), user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId, wish_title: null, is_new: this.userId == 0 ? 3 : 0, wishlist_id: null }, 'addWishlistNew').subscribe((result) => {
        this.stopLoading();
        if(result.status == 1){
           this.presentToast('Product added to wishlist.','success');
           this.events.publish('wishlist:true',{});
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

  suggestThisProduct(proID)
  {
    let dict = {
      'post_id': localStorage.getItem('goForSuggestPost'),
      'product_id': proID,
      'suggested_by_user': localStorage.getItem('sin_auth_userId'),
    };

    this.userService.postData(dict,'addSuggestion').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1)
      {
        this.presentToast('Suggestion added successfully','success');

        localStorage.setItem('goForSuggestPost','');

        this.globalFooService.publishSomeData({
          foo: {'data': "done", 'page': 'suggestionDone'}
        });

        this.modalController.dismiss({
          'dismissed': true
        });

        //this.router.navigate(['/blog']);
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
