import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  page:any;
loading:any;
  constructor(public userService: UserService,public loadingController:LoadingController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getTerms();
  }

  getTerms(){
    this.presentLoading();
    this.userService.postData({},'aboutUs').subscribe((result) => {
      this.page = atob(result.aboutUs.content);
      this.stopLoading();
    },
    err => {
      this.page = [];
      this.stopLoading();
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
