import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, Events } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  	errors : any = ['',null,undefined];
	email:any;
	password:any; 
	loading:any;
	ENC_SALT:any = config.ENC_SALT;
	isBrowser:any = localStorage.getItem('isBrowser');

  	constructor(public toastController: ToastController, public userService: UserService, public loadingController: LoadingController, public router: Router, public events: Events) { 
  	}

  	ngOnInit() {
  	}

  	ionViewDidEnter(){
	    if(this.loading != undefined){
	      this.stopLoading();
	    }
  	}

	sendEmail(email){
	  	if(this.errors.indexOf(email) >= 0){
	  		this.presentToast('Please enter your email address.','danger');
	  		return false;
	  	}
	  	this.presentLoading();
	  	this.userService.postData({email:email},'forgotPassword').subscribe((result) => {
	  		this.stopLoading();
	  		if(result.status == 1){
	  			//this.presentToast('Password reset link has been sent to your email address!','success');
	  			localStorage.setItem('email', email);
	  			this.router.navigate(['/authentication-otp']);
	  		}
	  		else{
	  			this.presentToast('We\'re sorry. We weren\'t able to identify the provided email.','danger');
	  		}
	  	},
	    err => {
	    	this.stopLoading();
	        this.presentToast('Technical error,Please try after some time.','danger');
	    });
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

}
 