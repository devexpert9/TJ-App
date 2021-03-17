import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController} from '@ionic/angular';
import { UserService } from '../services/user/user.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
socialLinks:any;
loading:any;
c_name:any;
c_email:any;
c_phone:any;
c_comments:any;
errors : any = ['',null,undefined];
  constructor(public toastController:ToastController,public loadingController:LoadingController,public userService: UserService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getSocialInfo();
  }

  getSocialInfo(){
    this.userService.postData({},'socialLinks').subscribe((result) => {
      this.socialLinks = result.socialLinks;
    },
    err => {
      console.log('api error');
    });
  }

  contactUs(){
    if(this.errors.indexOf(this.c_name) >= 0){
      this.presentToast('Please enter your name.','danger');
      return false;
    }
    if(this.errors.indexOf(this.c_email) >= 0){
      this.presentToast('Please enter your email.','danger');
      return false;
    }
    var reg= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(reg.test(this.c_email) == false){
      this.presentToast('Please enter valid email address.','danger');
        return false;
    }
    if(this.errors.indexOf(this.c_phone) >= 0){
      this.presentToast('Please enter phone number.','danger');
      return false;
    }
    if(this.errors.indexOf(this.c_comments) >= 0){
      this.presentToast('Please enter your comments.','danger');
      return false;
    }
    this.presentLoading();
    this.userService.postData({name:this.c_name,email:this.c_email,phone:this.c_phone,content:this.c_comments},'contactUs').subscribe((result) => {
      if(result.status == 1){
        this.c_name = '';
        this.c_email = '';
        this.c_phone = '';
        this.c_comments = '';
        this.stopLoading();
        this.presentToast('Thanks! We will get in touch with you as soon as possible.','success');
      }
      else{
        this.stopLoading();
        this.presentToast('Error,Please try after some time.','danger');
      }
    },
    err => {
      this.stopLoading();
      this.presentToast('Error,Please try after some time.','danger');
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
