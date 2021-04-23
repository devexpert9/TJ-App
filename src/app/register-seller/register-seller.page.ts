import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController,Events } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/user/globalFooService.service';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.page.html',
  styleUrls: ['./register-seller.page.scss'],
})
export class RegisterSellerPage implements OnInit {
errors : any = ['',null,undefined];
loading:any;
name:any;
email:any;
userEmail = localStorage.getItem('sin_auth_user_email');
phone:any;
password:any;
confirm_password:any;
ENC_SALT:any = config.ENC_SALT;
  constructor(private globalFooService: GlobalFooService, public toastController: ToastController, public userService: UserService, public loadingController: LoadingController, public router: Router, public events: Events) { }

  ngOnInit() {
    this.userEmail = localStorage.getItem('sin_auth_user_email');
  }

  goToHome()
  {
    this.router.navigate(['/blogic']);
  }

  register(shop_name,phone,location,country,state,city,postal)
  {
    if(this.errors.indexOf(shop_name) >= 0){
      this.presentToast('Please enter shop name.','danger');
      return false;
    }

    if(this.errors.indexOf(phone) >= 0){
      this.presentToast('Please enter your store number.','danger');
      return false;
    }
    
    if(this.errors.indexOf(location) >= 0){
      this.presentToast('Please enter location.','danger');
      return false;
    }    
    if(this.errors.indexOf(country) >= 0){
      this.presentToast('Please enter country.','danger');
      return false;
    }
    if(this.errors.indexOf(state) >= 0){
      this.presentToast('Please enter state.','danger');
      return false;
    }
    if(this.errors.indexOf(city) >= 0){
      this.presentToast('Please enter city.','danger');
      return false;
    }
    if(this.errors.indexOf(postal) >= 0){
      this.presentToast('Please enter postal.','danger');
      return false;
    }

  	this.presentLoading();
    let dict ={
      name: "",
      email: this.userEmail,
      phone: phone,
      password: "",
      shop_name:shop_name,
      location:location,
      country:country,
      state:state,
      city:city,
      postal:postal
    };

  	this.userService.postData(dict,'registerSeller').subscribe((result) => {
  		this.stopLoading();
  		if(result.status == 1)
  		{
        this.globalFooService.publishSomeData({
          foo: {'data': "seller", 'page': 'sellerDone'}
        });

        this.presentToast('You have successfully registered as seller!','success');
        this.router.navigate(['/blog']);  
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
