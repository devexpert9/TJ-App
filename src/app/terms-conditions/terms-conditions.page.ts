import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.page.html', 
  styleUrls: ['./terms-conditions.page.scss'],
})
export class TermsConditionsPage implements OnInit {
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
    this.userService.postData({},'termsAndConditions').subscribe((result) => {
      this.page = atob(result.terms.content);
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
