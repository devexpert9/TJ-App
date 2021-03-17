import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, Events } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { Router } from '@angular/router';
import { GlobalFooService } from '../services/user/globalFooService.service';

import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html', 
  styleUrls: ['./login.page.scss'],
  providers: [ UserService ]
})
export class LoginPage implements OnInit {
errors : any = ['',null,undefined];
email:any;
password:any; 
loading:any;
ENC_SALT:any = config.ENC_SALT;
isBrowser:any = localStorage.getItem('isBrowser');
  constructor(private globalFooService: GlobalFooService, public toastController: ToastController, public userService: UserService, public loadingController: LoadingController, public router: Router, public events: Events, private socialAuthService: AuthService, private fb: Facebook, private googlePlus: GooglePlus) { 
  }

  ngOnInit()
  {

  }

  goToHome()
  {
    this.router.navigate(['/blog']);
  }

  ionViewDidEnter()
  {
    if(localStorage.getItem('sin_auth_token'))
    {
      this.router.navigate(['/blog']);
    }
    else{
      // alert('nahi hai');
    }

    if(this.loading != undefined){
      this.stopLoading();
    }
  }

  login(email,password){
    let IsNumber = false;
    let regexStr = /^(?:[1-9]\d*|\d)$/;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	if(this.errors.indexOf(email) >= 0){
  		this.presentToast('Please enter your email address or mobile number.','danger');
  		return false;
  	}else if(regexStr.test(String(email).toLowerCase())){
      IsNumber = true;
    }else if(!re.test(String(email).toLowerCase()) && IsNumber == false){
      this.presentToast('Please enter valid email address.','danger');
      return false;
    }else if(this.errors.indexOf(password) >= 0){
  		this.presentToast('Please enter your password.','danger');
  		return false;
  	}

    let dict = {
      email: IsNumber == true ? null : email,
      phone: IsNumber == true ? email : null,
      password: password
    };
  	this.presentLoading();
  	this.userService.postData(dict,'loginUser').subscribe((result) => {
  		this.stopLoading();
  		if(result.status == 1)
      {
        console.log(result);

        this.presentToast('Login successfully!','success');
        var userId = this.userService.encryptData(result.data.id,this.ENC_SALT);
        
        localStorage.setItem('sin_auth_token',userId);
        localStorage.setItem('sin_auth_user_name',result.data.name +' '+result.data.last_name);
        localStorage.setItem('sin_auth_user_image',result.data.profile_picture);
        
        this.events.publish('user_logged_in:true',result.data);

        this.userService.postData({'guest_user_id': localStorage.getItem('guestUserId'), 'real_user_id': result.data.id},'replace_guestUser_to_realUser').subscribe((result1) => {
            this.globalFooService.publishSomeData({
              foo: {'data': result.data, 'page': 'afterLoginUserName'}
            });

            if(result.data.type == 'user')
            {
              this.router.navigate(['/blog']);
            }
            else
            {
              this.router.navigate(['/blog']);
            }
            
        });
  		}
  		else if(result.status == 2)
      {
  			this.presentToast('Your account is not active!','danger');
  		}
  		else{
  			this.presentToast('Invalid credentials!','danger');
  		}
  	},
    err => {
    	this.stopLoading();
        this.presentToast('Technical error,Please try after some time.','danger');
    });
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.socialLogin(userData.name,userData.email,userData.provider,userData.id);   
    });
  }

  facebookLoginMobile(){
    this.fb.login(['public_profile', 'email'])
    .then((res: FacebookLoginResponse) => 
       this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        if(this.errors.indexOf(profile) == -1){
          // profile['picture_large']['data']['url']
          this.socialLogin(profile['name'],profile['email'],'facebook',profile['id'])
        }
        else{
          this.presentToast('Error,Please try after some time.','danger')
        }
      })
      ).catch(e => 
        this.presentToast('Error,Please try after some time.','danger')
      );
  }

  googleLoginMobile(){
     var ptr = this;
      this.googlePlus.login({}).then(res => {
        console.log(res);
        this.presentLoading();

        let dict = {
          g_id: res.userId,
          email: res.email,
          picture: null,
          name: res.displayName.split(' ')[0],
          lname: res.displayName.split(' ')[1]
        }

        this.socialLogin('',res.email,'google', res.userId);
      })
      .catch(err => console.error(err));
  }

  socialLogin(name,email,provider,id){
    this.presentLoading();
      this.userService.postData({name:name,email:email,phone:'',password:'', provider: provider, id:id},'socialLogin').subscribe((result) => {
        this.stopLoading();
        if(result.status == 1 || result.status == 2){
          this.presentToast('Login successfully!','success');
          var userId = this.userService.encryptData(result.data.id,this.ENC_SALT);
          localStorage.setItem('sin_auth_token',userId);
          localStorage.setItem('sin_auth_user_name',result.data.name +' '+result.data.last_name);
          localStorage.setItem('sin_auth_user_image',result.data.profile_picture);
          this.events.publish('user_logged_in:true',result.data);
          //this.router.navigate(['/home']);
          this.userService.postData({'guest_user_id': localStorage.getItem('guestUserId'), 'real_user_id': result.data.id},'replace_guestUser_to_realUser').subscribe((result) => {
            this.router.navigate(['/blog']);
          });
        }
        else{
          this.presentToast('Invalid credentials!','danger');
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
