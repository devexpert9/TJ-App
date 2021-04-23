import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ToastController, LoadingController, Events, AlertController, ModalController } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { Router } from '@angular/router';
import { UpdateWishlistPage } from '../update-wishlist/update-wishlist.page';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
userId:any;
wishlist:any;
all_wishlist:any;
loading:any;
my_cart_products:any;
IMAGES_URL:any;
selectedItem: any = [];
errors : any = ['',null,undefined];
showShareDiv: any = false;
publicUrl: any = '';
guestUserId: any = localStorage.getItem('guestUserId');

  constructor(private cd: ChangeDetectorRef,public userService: UserService,public toastController:ToastController,public loadingController:LoadingController,public router: Router,public events: Events, public alertController: AlertController, public modalController: ModalController) {
      this.IMAGES_URL = config.IMAGES_URL;
      events.subscribe('wish-list:true', data => {
      this.getWishList();
    });
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
    this.userService.postData({user_id:this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId},'getCartProductsIds').subscribe((result) => {
      this.my_cart_products = result.products;
      this.getWishList();
    },
    err => {
      this.getWishList();
      this.my_cart_products = [];
    });
  }

  getWishList(){
    this.userService.postData({user_id:this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId},'getWishlist').subscribe((result) => {
      this.stopLoading();
      console.log(result)
      
      if(result.status != 0)
      {
        this.wishlist = result.data;
        this.all_wishlist = result.data;  
      }
      else
      {
        this.wishlist = [];
        this.all_wishlist = [];  
      }
      
    },
    err => {
      this.stopLoading();
      this.wishlist = [];
      this.all_wishlist = [];
    });
  }

  searchWishlist(ev){
    console.log(ev)
    this.wishlist=this.all_wishlist;
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.wishlist = this.wishlist.filter((item) => {
        return (item.product_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  addToCart(wishlist,product_id,product_sale_price,product_purchase_price)
  {
    // alert(product_id+'--'+product_sale_price+'--'+product_purchase_price);
    // if(this.userId == 0){
    //   this.router.navigate(['/login']);
    // }
    // else{
      this.presentLoading();
      let proVariation = [];
      let dict = {
        'product_id':         product_id,
        'product_price':      product_sale_price,
        'is_variation':       0,
        'product_variations': proVariation,
        'user_id':    this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId,
        'product_qty':        '1',
        'wishlist'  :         wishlist
      };

      //es api ch wishlist to product delete krado n w

      this.userService.postData(dict,'addTocart').subscribe((result) => {
          this.stopLoading();
          if(result.status == 1)
          {
            this.my_cart_products.push(product_id);
            var p_price;
            if(this.errors.indexOf(product_sale_price) == -1 && product_sale_price != product_purchase_price){
              p_price = product_sale_price;
            }
            else{
              p_price = product_purchase_price;
            }
            this.events.publish('cart_updated:true', {items_in_cart:this.my_cart_products.length,cart_price:p_price,isAdd:true});
            
            this.getWishList();
            this.cd.detectChanges();
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

  async removeWishlist(index,wid){
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to remove this product from wishlist?',
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
            this.userService.postData({wish_id: wid},'removeWishlistProduct').subscribe((result) => {
              this.stopLoading();
              if(result.status == 1){
                this.wishlist.splice(index,1);
                this.presentToast('Product removed from wishlist.','success');
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
      ]
    });
    await alert.present();
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

  faqClicked(index){
    if(this.selectedItem.indexOf(index) == -1){
      this.selectedItem.push(index);
    }
    else{
      this.selectedItem.splice(this.selectedItem.indexOf(index),1);
    }
  }

  share(item, index){
    console.log(item);
    if(item.wish_full_address == null){
      this.presentAlertPromptAddress(item, index);
    }else{
      if(item.products.length > 0){
        this.presentAlertPrompt(item, index);
      }else{
        this.presentToast('To share the wishlist, Please add atleast one product.','danger');
      }
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  async presentAlertPrompt(item, index) {
    // const alert = await this.alertController.create({
    //   header: 'Enter Email/Number',
    //   inputs: [
    //     {
    //       name: 'name1',
    //       type: 'text',
    //       placeholder: 'Email/number of another user'
    //     }
    //   ],
    //   buttons: [
    //     {
    //       text: 'Share',
    //       cssClass: 'darkred',
    //       handler: (data) => {
    //         console.log(data);
    //         if(data.name1 == undefined || data.name1 == ''){
    //           this.presentToast('Error,To share with user please provide user email or contact number.','danger');
    //         }else{
    //           let regexStr = /^(?:[1-9]\d*|\d)$/;
    //           if(regexStr.test(String(data.name1).toLowerCase())){
    //             //write code here for success
    //             let dict = {
    //               phone: data.name1,
    //               wish_id: item.wish_id,
    //               email: null
    //             };
    //             this.shareWishListWithAnotherUser(dict, index);
    //           }else{
    //             // write code for failure
    //             if(this.validateEmail(data.name1)){
    //               let dict = {
    //                 phone: null,
    //                 wish_id: item.wish_id,
    //                 email: data.name1
    //               };
    //               this.shareWishListWithAnotherUser(dict, index);
    //             }else{
    //               this.presentToast('Error,Please enter correct email address.','danger');
    //             }
    //           }
    //         }
    //       }
    //     },
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       cssClass: 'default',
    //       handler: () => {
    //         console.log('Confirm Cancel');
    //       }
    //     }
    //   ]
    // });

    // await alert.present();
    let sharedUrl = 'http://siniyetu.tk/#/public-wishlist?' + item.wish_id;
    console.log('shared url' + sharedUrl);
    this.showShareDiv = true;
    this.publicUrl = sharedUrl;
  };

  closePopUp(){
    this.showShareDiv = false;
  }


  shareWishListWithAnotherUser(dict, index){
    this.presentLoading();
    this.userService.postData(dict, 'shareWishlist').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1){
        this.presentToast('Wishlist has been shared succesfully.','success');
        this.getWishList();
        //this.modalCtrl.dismiss();
      }
      else{
        if(dict.email == null){
          this.presentToast('Error,There is no user associated with this contact number.','danger');
        }else{
          this.presentToast('Error,There is no user associated with this email address.','danger');
        }
      }
    },
    err => {
      this.stopLoading();
      this.presentToast('Error,Please try after some time.','danger');
    });
  };

  deleteWishlist(wish_id){
    console.log(wish_id)
    this.presentAlertPromptDelete(wish_id);
  }

  async presentAlertPromptDelete(id) {
    const alert = await this.alertController.create({
      header: 'Confirm! Delete wishlist',
      message: 'Are you sure, you want to delete selected wishlist?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.presentLoading();
            this.userService.postData({wish_id: id}, 'deleteWishlist').subscribe((result) => {
              this.stopLoading();
              if(result.status == 1){
                this.presentToast('Wishlist has been deleted succesfully.','success');
                this.getWishList();
                //this.modalCtrl.dismiss();
              }else{
                this.presentToast('Error,Please try after some time.','danger');
              }
            },
            err => {
              this.stopLoading();
              this.presentToast('Error,Please try after some time.','danger');
            });
          }
        }
      ]
    });

    await alert.present();
  };

  async presentAlertPromptAddress(item, index) {
    const alert = await this.alertController.create({
      header: 'Wishlist Address',
      message: 'Are you sure, you want to share selected wishlist?Please add address for selected wishlist.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.addAddressForWishlist(item, index);
          }
        }
      ]
    });

    await alert.present();
  };

  async addAddressForWishlist(item, index){
    localStorage.setItem('wishlist', JSON.stringify(item));

    const modal = await this.modalController.create({
      component: UpdateWishlistPage,
      componentProps: { value: item.wish_id }
    });

    modal.onDidDismiss().then((data) => {
        // Here's your selected user!
        console.log(data)
        if(data != ''){
          if(item.products.length > 0){
            this.presentAlertPrompt(item, index);
          }else{
            this.presentToast('To share the wishlist, Please add atleast one product.','danger');
          }
        }
    });
    return await modal.present();
  }

  placeOrder(item){
    if(item.wish_full_address == null){
      this.addAddressForWishlist(item, null);
    }else if(item.products.length > 0){
      localStorage.setItem('wishlist', JSON.stringify(item));
      this.router.navigate(['/wishlist-checkout']);
    }else{
      this.presentToast('To share the wishlist, Please add atleast one product.','danger');
    }
  }

  removeProduct(wish_id, product_id){
    this.presentAlertPromptDeleteProduct(wish_id, product_id);
  }

  async presentAlertPromptDeleteProduct(wish_id, product_id) {
    const alert = await this.alertController.create({
      header: 'Confirm! Delete product',
      message: 'Are you sure, you want to delete selected product?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.presentLoading();
            this.userService.postData({wish_id: wish_id, product_id: product_id}, 'deleteWishlistProduct').subscribe((result) => {
              this.stopLoading();
              if(result.status == 1){
                this.presentToast('Product has been deleted succesfully.','success');
                this.getWishList();
                //this.modalCtrl.dismiss();
              }else{
                this.presentToast('Error,Please try after some time.','danger');
              }
            },
            err => {
              this.stopLoading();
              this.presentToast('Error,Please try after some time.','danger');
            });
          }
        }
      ]
    });

    await alert.present();
  };

  async presentAlertPromptAdd() {
	    const alert = await this.alertController.create({
	      header: 'Enter wishlist name',
	      inputs: [
	        {
	          name: 'name1',
	          type: 'text',
	          placeholder: 'wishlist name'
	        }
	      ],
	      buttons: [
	        {
	          text: 'Save',
	           cssClass: 'darkred',
	          handler: (data) => {
	            console.log(data);
	            this.presentLoading();
      			 	this.userService.postData({ product_id: null, user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId, wish_title: data.name1, is_new: 1, wishlist_id: null }, 'addWishlistNew').subscribe((result) => {
      				    this.stopLoading();
      				    if(result.status == 1){
			                this.presentToast('Wishlist has been created succesfully.','success');
			                this.getWishList();
      				    }else if(result.status == 2){
			                this.presentToast('Wishlist title already exist.Please try using another one.','danger');
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
	        },
			    {
	          text: 'Cancel',
	          role: 'cancel',
	          cssClass: 'default',
	          handler: () => {
	            console.log('Confirm Cancel');
	          }
	        }
	      ]
	    });

    	await alert.present();
  	}


    setDefault(wish_id){
      this.presentLoading();
      this.userService.postData({user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId, wishlist_id: wish_id}, 'wish_as_default').subscribe((result) => {
          this.stopLoading();
          if(result.status == 1){
              this.presentToast('Wishlist has been set as default succesfully.','success');
              this.getWishList();
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
