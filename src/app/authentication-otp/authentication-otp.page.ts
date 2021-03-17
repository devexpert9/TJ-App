import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, Events } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentication-otp',
  templateUrl: './authentication-otp.page.html',
  styleUrls: ['./authentication-otp.page.scss'],
})
export class AuthenticationOtpPage implements OnInit {
	email: any;
	otp:any;
	errors : any = ['',null,undefined];
	password:any; 
	loading:any;
	ENC_SALT:any = config.ENC_SALT;
	isBrowser:any = localStorage.getItem('isBrowser');

  	constructor(public toastController: ToastController, public userService: UserService, public loadingController: LoadingController, public router: Router, public events: Events) { 
 
		this.email = localStorage.getItem('email');
   	}

 	ngOnInit() {
  	}

  	resendOTP(){
	  	this.presentLoading();
	  	this.userService.postData({email: this.email},'forgotPassword').subscribe((result) => {
	  		this.stopLoading();
	  		if(result.status == 1){
	  			this.presentToast('A new OTP has been sent to your email.','success');
	  		}
	  		else{
	  			this.presentToast('Technical error,Please try after some time.','danger');
	  		}
	  	},
	    err => {
	    	this.stopLoading();
	        this.presentToast('Technical error,Please try after some time.','danger');
	    });
  	}	

  	validateOTP(otp){
	  	if(this.errors.indexOf(otp) >= 0){
	  		this.presentToast('Please enter your otp sent over your email address.','danger');
	  		return false;
	  	}
	  	this.presentLoading();
	  	this.userService.postData({otp:otp, email: this.email},'validateOtp').subscribe((result) => {
	  		this.stopLoading();
	  		if(result.status == 1){
	  			//this.presentToast('Password reset link has been sent to your email address!','success');
	  			this.router.navigate(['/reset-password']);
	  		}
	  		else{
	  			this.presentToast('Invalid code. Please check your code and try again.','danger');
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
