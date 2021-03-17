import { Component, OnInit } from '@angular/core';
import { ModalController , AlertController, Events, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { config } from '../config';
import { UserService } from '../services/user/user.service';

 
@Component({
  selector: 'app-wishlist-listing',
  templateUrl: './wishlist-listing.page.html',
  styleUrls: ['./wishlist-listing.page.scss'],
})
export class WishlistListingPage implements OnInit {
	wish:any;
	userId:any;
	loading:any;
	product_id: any;
	product: any;
	my_wish_products: any;
	wishlist: any = [];
	item: any;
	selectedWishlist: any;
	all_wishlist: any = [];
	data: any;
  	constructor(private modalCtrl:ModalController , public alertController: AlertController, public events: Events, public router: Router, public userService: UserService, public loadingController: LoadingController, public toastController: ToastController) { 
  		
  	}

  	ngOnInit() {
	    var token = localStorage.getItem('sin_auth_token');
	    this.userId = this.userService.decryptData(token,config.ENC_SALT);
	    this.getWishList();
  	}

  	closeModal(){
   	 	this.modalCtrl.dismiss();
  	}

  	getWishList(){
	    this.userService.postData({user_id:this.userId},'getWishlist').subscribe((result) => {
	      this.stopLoading();
	      console.log(result)
	      for(var i=0; i < result.data.length; i++){
	      	if(this.userId == result.data[i].user_id){
	      		this.wishlist.push(result.data[i]);
	      	}
	      }
	      if(this.wishlist[0].products.length == 0 && this.wishlist.length == 1){
	      	this.presentLoading();
		 	this.userService.postData({ product_id: localStorage.getItem('product'), user_id: this.userId, wish_title: null, is_new: 0, wishlist_id: this.wishlist[0].wish_id }, 'addWishlistNew').subscribe((result) => {
			    this.stopLoading(); 
			    if(result.status == 1){
			      // this.my_wish_products.push(product_id);
			       this.presentToast('Product added to wishlist.','success');
			       this.events.publish('wishlist:true',{});
			       this.modalCtrl.dismiss();
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
	      //this.wishlist= result.data;
	      this.all_wishlist = result.data;
	    },
	    err => {
	      this.stopLoading();
	      this.wishlist = [];
	      this.all_wishlist = [];
	    });
  	}

  	async presentAlertPrompt() {
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
			 	this.userService.postData({ product_id: localStorage.getItem('product'), user_id: this.userId, wish_title: data.name1, is_new: 1, wishlist_id: null }, 'addWishlistNew').subscribe((result) => {
				    this.stopLoading();
				    if(result.status == 1){
				      // this.my_wish_products.push(product_id);
				       this.presentToast('Product added to wishlist.','success');
				        this.events.publish('wishlist:true',{});

				       this.modalCtrl.dismiss();
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

  autoCompleteCallback(selectedData:any) {
    localStorage.setItem('sin_current_address',JSON.stringify(selectedData.data));
    this.events.publish('current_address_changed:true', selectedData.data.name);
    this.closeModal(); 
  }

  select(wish_id){
  	this.selectedWishlist = wish_id;
  	console.log(wish_id)
  }

  addToWishlist(){
  	this.presentLoading();
 	this.userService.postData({ product_id: localStorage.getItem('product'), user_id: this.userId, wish_title: null, is_new: 0, wishlist_id: this.selectedWishlist }, 'addWishlistNew').subscribe((result) => {
	    this.stopLoading();
	    if(result.status == 1){
	      // this.my_wish_products.push(product_id);
	       this.presentToast('Product added to wishlist.','success');
	       this.events.publish('wishlist:true',{});
	       this.modalCtrl.dismiss();
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

  address(){
    this.closeModal();
    this.router.navigate(['/your-account'],{
      queryParams : { address : true }
    });
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
  	};

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

  	removeProduct(id, ids){

  	}


}
