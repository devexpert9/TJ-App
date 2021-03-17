import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { ActionSheetController, ModalController, ToastController, LoadingController, AlertController, Events } from '@ionic/angular';
import { FiltersPage } from '../filters/filters.page';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { Router, ActivatedRoute } from '@angular/router';
import { WishlistListingPage } from '../wishlist-listing/wishlist-listing.page';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
	
@ViewChild('content') private content: any;
 hideMe=false;	
hide() {
this.hideMe = !this.hideMe;
}
selectedItem:any = [];
page_view:any = 'grid';
IMAGES_URL:any;
userId:any;
loading:any;
products:any;
searchTerm:any = '';
all_categories:any;
all_sub_categories:any;
my_cart_products:any;
my_wish_products:any;
all_brands:any;
price_values:any;
public buttonClickeddrop: boolean = false;
errors : any = ['',null,undefined];
selected_cats:any = [];
filtered_cats:any = [];
filtered_brands:any = [];
filtered_discount:any = [];
filtered_reviews:any = [];
selected_cats_checked:any = [];
sort_by:any = 'Relevance';
sort_by_value:any = 'relevance';
show_count:number = 10;
current_page:number = 1;
total_pages:number;
min_price:any = 0;
max_price:any = 10000;
total_products:any = 0;
searchImage: any = '';
// selected_subcats:any = [];
  constructor(public actionSheetController: ActionSheetController , public modalController: ModalController,public userService: UserService,public toastController:ToastController,public loadingController:LoadingController,public alertController: AlertController, public events: Events,public activatedRoute: ActivatedRoute,public router: Router, public _zone: NgZone) {
    this.IMAGES_URL = config.IMAGES_URL;
    events.subscribe('wishlist:true', data => {
      this.getCartProductsIdaa();
    });

  }

  getCartProductsIdaa(){
    //this.presentLoading();
    this.userService.postData({user_id:this.userId},'getCartProductsIds').subscribe((result) => {
      this.my_wish_products = result.wishlist;
    },
    err => {
    });
  }

  ngOnInit() {
    this.price_values = {lower: this.min_price, upper: this.max_price};
  }

  ionViewDidEnter()
  {
    var token = localStorage.getItem('sin_auth_token');
    this.userId = this.userService.decryptData(token,config.ENC_SALT);
    this.selected_cats = [];
    // this.selected_subcats = [];
    this.selectedItem = [];
    this.activatedRoute.queryParams.subscribe(params => {
      if(this.errors.indexOf(params['cat']) == -1){
        this.selectedItem.push('item'+params['cat']);
        this.selected_cats_checked.push(Number(params['subcat']));
        this.filtered_cats = [];
        this.filtered_cats.push(Number(params['cat']));
        var subcat_arr = [];
        if(this.errors.indexOf(params['subcat']) == -1){
          subcat_arr.push(Number(params['subcat']));
        }
        this.selected_cats = [];
        this.selected_cats.push({cat_id:Number(params['cat']),sub_cat_id:subcat_arr})
      }

      if(this.errors.indexOf(params['search']) == -1){
        this.searchTerm = params['search'];
      }

      if(this.errors.indexOf(params['searchImage']) == -1){
        this.searchImage = JSON.parse(params['searchImage']);
        this.selected_cats = [];
        for(var i=0; i < this.searchImage.length; i++){
          this.selected_cats.push({cat_id:Number(this.searchImage[i].cat_parent),sub_cat_id:[this.searchImage[i].cat_id]})
        }
        this.searchTerm = '';
      }


      if(this.errors.indexOf(params['searchText']) == -1){
        this.searchImage = JSON.parse(params['searchText']);
        this.selected_cats = [];
        for(var i=0; i < this.searchImage.length; i++){
          if(this.searchImage[i][0].product_cat.split(',').length > 1){
            for(var k=0; k < this.searchImage[i][0].product_cat.split(',').length; k++){
              this.selected_cats.push({cat_id:this.searchImage[i][0].product_cat.split(',')[k],sub_cat_id:[this.searchImage[i][0].product_sub_cat]})
            }
          }else{
            this.selected_cats.push({cat_id:this.searchImage[i][0].product_cat,sub_cat_id:[this.searchImage[i][0].product_sub_cat]})
          }
          
        }
      }
   
      this.getCartProductsIds();
      this.getCategories();
      this.getAllBrands();
    });
  }

  getProducts(params = null)
  {
    this.presentLoading();
    if(params == null){
      params = {user_id:this.userId,cats:this.selected_cats,search:this.searchTerm,sort_by:this.sort_by_value,per_page:this.show_count,page:this.current_page,brands:this.filtered_brands,discounts:this.filtered_discount,reviews:this.filtered_reviews,min_price:this.min_price,max_price:this.max_price}
    }
    this.userService.postData(params,'getAllProducts').subscribe((result) => {
      this.stopLoading();
      this.products = result.products.records;
      this.total_products = result.products.total;
      var records = Math.ceil(result.products.total/this.show_count);
      if(isNaN(records)){
        this.total_pages = 1;
      }
      else{
        this.total_pages = records;
      }
    },
    err => {
      this.stopLoading();
      this.products = [];
    });
  }

  scroll(position){
    var self = this;
    this._zone.run(() => {
      setTimeout(() => {
        self.content.scrollToPoint(0, position , 2000);
      });
    });
  }

  getCartProductsIds(){
    this.userService.postData({user_id:this.userId},'getCartProductsIds').subscribe((result) => {
      this.my_cart_products = result.products;
      this.my_wish_products = result.wishlist;
      this.getProducts();
    },
    err => {
      this.my_cart_products = [];
      this.my_wish_products = [];
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

  getAllBrands(){
    this.userService.postData({},'brand_list').subscribe((result) => {
      this.all_brands = result.brand_list;
    },
    err => {
      this.all_brands = [];
    });
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
          this.presentToast('Product added to cart.','success');
          var p_price;
          if(this.errors.indexOf(product_sale_price) == -1 && product_sale_price != product_purchase_price){
            p_price = product_sale_price;
          }
          else{
            p_price = product_purchase_price;
          }
          this.events.publish('cart_updated:true', {items_in_cart:this.my_cart_products.length,cart_price:p_price,isAdd:true});
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

  // addToWish(product_id){
  //   if(this.userId == 0){
  //     this.router.navigate(['/login']);
  //   }
  //   else{
  //     this.presentLoading();
  //     this.userService.postData({product_id:product_id,user_id:this.userId},'addTowish').subscribe((result) => {
  //       this.stopLoading();
  //       if(result.status == 1){
  //         this.my_wish_products.push(product_id);
  //         this.presentToast('Product added to wishlist.','success');
  //       }
  //       else{
  //         this.presentToast('Error,Please try after some time.','danger');
  //       }
  //     },
  //     err => {
  //       this.stopLoading();
  //       this.presentToast('Error,Please try after some time.','danger');
  //     });
  //   }
  // }
  addToWish(product_id){
    if(this.userId == 0){
      this.router.navigate(['/login']);
    }
    else{
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
    }
  }

  async presentAlert(product_id) {
    localStorage.setItem('product', product_id);

    // const modal = await this.modalController.create({
    //   component: WishlistListingPage,
    //   componentProps: { value: product_id }
    // });
    // return await modal.present();
    this.userService.postData({ product_id: localStorage.getItem('product'), user_id: this.userId, wish_title: null, is_new: 0, wishlist_id: null }, 'addWishlistNew').subscribe((result) => {
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


  callFilter(){
    this.getProducts();
  }

  resetFilter(){
    this.router.navigate(['/products'],{queryParams: {time:new Date().getTime()}});
    location.reload();
    // this.selected_cats = [];
    // this.searchTerm = [];
    // this.sort_by_value = 'relevance';
    // this.show_count = 10;
    // this.current_page = 1;
    // this.filtered_brands = [];
    // this.filtered_discount = [];
    // this.filtered_reviews = [];
    // this.min_price = 0;
    // this.max_price = 10000;
    // this.getProducts();
  }

  sortBy(value,text){
    this.sort_by_value = value;
    this.sort_by = text;
    this.getProducts();
  }

  show_count_change(value){
    this.show_count = value;
    this.getProducts();
  }

  paginate(page){
    if(page == 'next'){
      if(this.total_pages != this.current_page){
        this.current_page = Number(this.current_page) + 1;
        this.scroll(0);
        this.getProducts();
      }
    }
    else if(page == 'prev'){
      if(this.current_page != 1){
        this.current_page = Number(this.current_page) - 1;
        this.scroll(0);
        this.getProducts();
      }
    }
    else{
      if(this.current_page != page){
        this.current_page = page;
        this.scroll(0);
        this.getProducts();
      }
    }
  }

  priceChanged(values){
    this.min_price = values.detail.value.lower;
    this.max_price = values.detail.value.upper;
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  atob(string){
    return atob(string);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Sort By',
      buttons: [
      {
        text: 'Relevance',
        handler: () => {
          this.sortBy('relevance','Relevance');
        }
      },
      {
        text: 'Price - Low to High',
        handler: () => {
          this.sortBy('price_low_to_high','Price - High to Low');
        }
      },
      {
        text: 'Price - High to Low',
        handler: () => {
          this.sortBy('price_high_to_low','Price - High to Low');
        }
      },
      {
        text: 'Discount - Low to High',
        handler: () => {
          this.sortBy('discount_low_to_high','Discount - Low to High');
        }
      },
      {
        text: 'Discount - High to Low',
        handler: () => {
          this.sortBy('discount_high_to_low','Discount - High to Low');
        }
      }]
    });
    await actionSheet.present();
  }

  public onButtonClickdrop() {
    this.buttonClickeddrop = !this.buttonClickeddrop;
  }

  openClose(item){
    if(this.selectedItem.indexOf(item) == -1){
      this.selectedItem.push(item);
    }
    else{
      this.selectedItem.splice(this.selectedItem.indexOf(item),1);
    }
  }

  brandChecked(event,brand_id){
    if(event.detail.checked == true){
      this.filtered_brands.push(brand_id);
    }
    else{
      this.filtered_brands.splice(this.filtered_brands.indexOf(brand_id),1);
    }
    console.log(this.filtered_brands)
  }

  discountChecked(event,discount){
    if(this.filtered_discount.length == 0){
      this.filtered_discount.push(Number(discount));
    }
    else{
      //this.filtered_discount.splice(this.filtered_discount.indexOf(discount),1);
      this.filtered_discount[0] = Number(discount);
    }
    console.log(this.filtered_discount)
  }

  reviewChecked(event,review){
    if(this.filtered_reviews.length == 0){
      this.filtered_reviews.push(Number(review));
    }
    else{
      //this.filtered_reviews.splice(this.filtered_reviews.indexOf(review),1);
      this.filtered_reviews[0] = Number(review);
    }
    console.log(this.filtered_reviews)
  }

  catChecked(event,cat,subcat){
    if(event.detail.checked == true){
      if(this.filtered_cats.indexOf(cat) == -1){
        this.filtered_cats.push(cat);
        var subcat_arr = [];
        subcat_arr.push(subcat);
        this.selected_cats.push({cat_id:cat,sub_cat_id:subcat_arr});
      }
      else{
        var index = this.filtered_cats.indexOf(cat);
        this.selected_cats[index]['sub_cat_id'].push(subcat);
      }
    }
    else{
      var c_index = this.filtered_cats.indexOf(cat);
      if(this.selected_cats[c_index]['sub_cat_id'].length == 1){
        this.filtered_cats.splice(c_index,1);
        this.selected_cats.splice(c_index,1);
      }
      else{
        var sub_index = this.selected_cats[c_index]['sub_cat_id'].indexOf(subcat);
        this.selected_cats[c_index]['sub_cat_id'].splice(sub_index,1);
      }

      if(this.selected_cats_checked.indexOf(subcat) >= 0){
        this.selected_cats_checked = [];
      }
    }
    console.log(this.filtered_cats)
    console.log(this.selected_cats)
    // this.getProducts();
  }

  // subcatChecked(event,value){
  //   if(event.detail.checked == true){
  //     this.selected_subcats.push(value);
  //   }
  //   else{
  //     this.removeArray(this.selected_subcats, value);
  //   }
  //   console.log(this.selected_subcats)
  // }

  removeArray(arr,what) {
    var a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
      what = a[--L];
      while ((ax= arr.indexOf(what)) !== -1) {
          arr.splice(ax, 1);
      }
    }
    return arr;
  }

	async presentModal1() {
    const modal = await this.modalController.create({
      component: FiltersPage,
      componentProps: {
        all_categories: this.all_categories,
        all_brands: this.all_brands,
        userId: this.userId,
        searchTerm: this.searchTerm,
        sort_by_value: this.sort_by_value,
        show_count: this.show_count,
        current_page: this.current_page,
        filtered_brands: this.filtered_brands,
        filtered_discount: this.filtered_discount,
        filtered_reviews: this.filtered_reviews,
        min_price: this.min_price,
        max_price: this.max_price,
        selected_cats: this.selected_cats,
        filtered_cats: this.filtered_cats,
      }
    });

    modal.onDidDismiss().then((detail) => {
       if(this.errors.indexOf(detail.data) == -1) {
        this.min_price = detail.data.min_price;
        this.max_price = detail.data.max_price;
        this.selected_cats = detail.data.cats;
        this.filtered_cats = detail.data.filtered_cats;
        this.filtered_brands = detail.data.brands;
        this.filtered_brands = detail.data.brands;
        this.filtered_discount = detail.data.discounts;
        this.filtered_reviews = detail.data.reviews;
        this.getProducts(detail.data);
       }
    });
    await modal.present();
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
