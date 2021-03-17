import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController,Events } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { config } from '../config';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
errors : any = ['',null,undefined];
loading:any;
name:any;
email:any;
phone:any;
password:any;
confirm_password:any;
ENC_SALT:any = config.ENC_SALT;
  constructor(public toastController: ToastController, public userService: UserService, public loadingController: LoadingController, public router: Router, public events: Events) { }

  ngOnInit() {
  }

  goToHome()
  {
    this.router.navigate(['/home']);
  }

  register(name,email,phone,password,confirm_password,type)
  {
  	if(this.errors.indexOf(name) >= 0){
  		this.presentToast('Please enter your name.','danger');
  		return false;
  	}
  	// if(this.errors.indexOf(email) >= 0){
  	// 	this.presentToast('Please enter your email address.','danger');
  	// 	return false;
  	// }
    if(this.errors.indexOf(phone) >= 0){
      this.presentToast('Please enter your phone number.','danger');
      return false;
    }
    console.log(email)
  	var reg= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	if(!reg.test(String(email).toLowerCase()) && email != undefined && email != ''){
  		this.presentToast('Please enter valid email address.','danger');
    		return false;
  	}
  	
  	if(this.errors.indexOf(password) >= 0){
  		this.presentToast('Please enter your password.','danger');
  		return false;
  	}
  	if(password.length < 6){
  		this.presentToast('Please enter atleast 6 digits password.','danger');
  		return false;
  	}
  	if(this.errors.indexOf(confirm_password) >= 0){
  		this.presentToast('Please enter confirm password.','danger');
  		return false;
  	}
  	if(password != confirm_password){
  		this.presentToast('Password and Confirm password should be same.','danger');
  		return false;
  	}
    if(this.errors.indexOf(type) >= 0){
      this.presentToast('Please enter type.','danger');
      return false;
    }
  	this.presentLoading();
    let dict ={
      name: name,
      email: email == undefined ? '' : email,
      phone: phone,
      password: password,
      type: type,
      provider:'Direct'
    };
  	this.userService.postData(dict,'registerUser').subscribe((result) => {
  		this.stopLoading();
  		if(result.status == 1){
  			this.presentToast('Registered successfully!','success');
  			var userId = this.userService.encryptData(result.data.id,this.ENC_SALT);
        localStorage.setItem('sin_auth_token',userId);
        localStorage.setItem('sin_auth_user_name',result.data.name +' '+result.data.last_name);
        localStorage.setItem('sin_auth_user_image',result.data.profile_picture);
        this.events.publish('user_logged_in:true',result.data);
        //this.router.navigate(['/home']);
        this.userService.postData({'guest_user_id': localStorage.getItem('guestUserId'), 'real_user_id': result.data.id},'replace_guestUser_to_realUser').subscribe((result) => {
          this.router.navigate(['/home']);
          // window.location.reload();
        });
  		}
  		else if(result.status == 2){
  			this.presentToast('Your provided Email or Number has already been used. Please use another Email address or phone number.','danger');
  		}
      else if(result.status == 3){
        this.presentToast('Your provided Number has already been used. Please use another Phone number.','danger');
      }
  		else{
  			this.presentToast('Error while signing up! Please try later.','danger');
  		}
  	},
    err => {
    	this.stopLoading();
        this.presentToast('Technical error,Please try after some time.','danger');
    });
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
