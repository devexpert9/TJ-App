import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, Events } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  	errors : any = ['',null,undefined];
	email:any;
	password:any; 
	loading:any;
	ENC_SALT:any = config.ENC_SALT;
	isBrowser:any = localStorage.getItem('isBrowser');
	npassword:any;
	cpassword:any;

  	constructor(public toastController: ToastController, public userService: UserService, public loadingController: LoadingController, public router: Router, public events: Events) { 
  		this.email = localStorage.getItem('email');
  	}

  	ngOnInit() {
  	}

  	ionViewDidEnter(){
	    if(this.loading != undefined){
	      this.stopLoading();
	    }
  	}
 
	updatePassword(npwd, cpwd){
	  	if(this.errors.indexOf(npwd) >= 0){
	  		this.presentToast('Please enter password.','danger');
	  		return false;
	  	}else if(npwd != cpwd){
	  		this.presentToast('Password not matched.','danger');
	  		return false;
	  	}
	  	this.presentLoading();
	  	this.userService.postData({password:npwd, email: this.email},'updatePassword').subscribe((result) => {
	  		this.stopLoading();
	  		if(result.status == 1){
	  			this.presentToast('Login successfully!','success');
	  			var userId = this.userService.encryptData(result.data.id,this.ENC_SALT);
	        localStorage.setItem('sin_auth_token',userId);
	        localStorage.setItem('sin_auth_user_name',result.data.name +' '+result.data.last_name);
	  			localStorage.setItem('sin_auth_user_image',result.data.profile_picture);
	        this.events.publish('user_logged_in:true',result.data);
	  			this.router.navigate(['/home']);
	  		}
	  		else if(result.status == 2){
	  			this.presentToast('Your account is not active!','danger');
	  		}
	  		else{
	  			this.presentToast('We\'re sorry. We weren\'t able to identify you given the information provided.','danger');
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
 