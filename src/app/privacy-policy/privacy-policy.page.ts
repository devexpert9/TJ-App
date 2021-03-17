import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {
page:any;
loading:any;
  constructor(public userService: UserService,public loadingController:LoadingController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getPrivacyPolicy();
  }

  getPrivacyPolicy(){
    this.presentLoading();
    this.userService.postData({},'privacyPolicy').subscribe((result) => {
      this.page = atob(result.policy.privacy_content);
      this.stopLoading();
    },
    err => {
      this.stopLoading();
      this.page = [];
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
  }
}
