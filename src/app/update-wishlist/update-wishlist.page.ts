import { Component, OnInit } from '@angular/core';
import { ModalController , AlertController, Events, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { config } from '../config';
import { UserService } from '../services/user/user.service';

declare var google;

@Component({
  selector: 'app-update-wishlist',
  templateUrl: './update-wishlist.page.html',
  styleUrls: ['./update-wishlist.page.scss'],
})
export class UpdateWishlistPage implements OnInit {
	countries: any = [];
	userId:any;
	loading:any;
	a_address: any = '';
	a_email: any = '';
	a_number: any = '';
	a_city: any = '';
	a_state: any = '';
	a_country: any = '';
	a_zip: any = '';
	a_title: any = '';
  	constructor(private modalCtrl:ModalController , public alertController: AlertController, public events: Events, public router: Router, public userService: UserService, public loadingController: LoadingController, public toastController: ToastController) { 
  		
  	}

  	ngOnInit() {
	    var token = localStorage.getItem('sin_auth_token');
	    this.userId = this.userService.decryptData(token,config.ENC_SALT);
	    this.getProfile();
  	}

  	closeModal(){
   	 	this.modalCtrl.dismiss('');
  	}

 	getProfile(){
	    this.userService.postData({userId: this.userId},'getProfile').subscribe((result) => {
	      this.countries = result.countries;
	      let wish = JSON.parse(localStorage.getItem('wishlist'));
	      this.a_title = wish.wish_title;
	      this.a_address = wish.wish_full_address;
	      this.a_email = wish.wish_email;
	      this.a_number = wish.wish_phone;
	      this.a_city = wish.wish_city;
	      this.a_country = wish.wish_country;
	      this.a_zip = wish.wish_zip;
	      this.a_state = wish.wish_state;
	    },
	    err => {
	      // this.presentToast('Error,Please try after some time.','danger');
	    });
  	}

  	addToWishlist(title, email, number, address, city, state, zip, country){
  		let regexStr = /^(?:[1-9]\d*|\d)$/;
  		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  		if(title == undefined || title == ''){
  			this.presentToast('Please enter email.','danger');
  		}else if(email == undefined || email == ''){
  			this.presentToast('Please enter email.','danger');
  		}else if(!re.test(String(email).toLowerCase())){
  			this.presentToast('Please enter valid email address.','danger');
  		}else if(number == undefined || number == ''){
  			this.presentToast('Please enter contact number.','danger');
  		}else if(!regexStr.test(String(number).toLowerCase())){
  			this.presentToast('Please enter valid contact number.','danger');
  		}else if(address == undefined || address == ''){
  			this.presentToast('Please enter address.','danger');
  		}else if(city == undefined || city == ''){
  			this.presentToast('Please enter city.','danger');
  		}else if(state == undefined || state == ''){
  			this.presentToast('Please enter state.','danger');
  		}else if(country == undefined || country == ''){
  			this.presentToast('Please select country.','danger');
  		}else if(zip == undefined || zip == ''){
  			this.presentToast('Please enter zip.','danger');
  		}else if(!regexStr.test(String(zip).toLowerCase())){
  			this.presentToast('Please enter valid zip code.','danger');
  		}else{
  			var wish = JSON.parse(localStorage.getItem('wishlist'));
  			var self = this;
		    var geocoder = new google.maps.Geocoder(); 
		    geocoder.geocode({'address': address }, function(results, status) {
		      	var latitude = '', longitude = '';
		      	if (status === 'OK') {
			        latitude = results[0].geometry.location.lat();
			        longitude = results[0].geometry.location.lng();
		      	} 
		      	let dict = {
		      		wishlist_id: wish.wish_id,
					wish_title: title,
					wish_full_address: address,
					wish_city: city,
					wish_state: state,
					wish_country: country,
					wish_zip: zip,
					wish_phone: number,
					wish_latitude: latitude,
		      		wish_longitude: longitude,
		      		wish_email: email
		      	};
		        
		        self.userService.postData(dict, 'updateWishlistNew').subscribe((result) => {
			      	if(result.status == 1){
				        self.presentToast('Wishlist has been updated succesfully.','success');
				        self.events.publish('wish-list:true',{});
				       	self.modalCtrl.dismiss(result);
			      	}
			      	else{
				        self.presentToast('Error,Please try after some time.','danger');
			      	}
			    },
			    err => {
			      	self.presentToast('Error,Please try after some time.','danger');
			    });
		    });
  		}
  	};

 	async presentToast(message, color) {
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
