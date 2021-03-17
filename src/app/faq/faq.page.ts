import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
selectedItem:any = [];
faqs:any;
loading:any;
  constructor(public userService: UserService,public loadingController:LoadingController) { }

  ngOnInit() {
  } 

  ionViewDidEnter(){
    this.getFaqs();
  }

  getFaqs(){
    this.presentLoading();
    this.userService.postData({},'faq').subscribe((result) => {
      console.log(result)
      this.faqs = result.faq;
      this.stopLoading();
    },
    err => {
      this.stopLoading();
      this.faqs = [];
    });
  }

  faqClicked(index){
  	if(this.selectedItem.indexOf(index) == -1){
  		this.selectedItem.push(index);
  	}
  	else{
  		this.selectedItem.splice(this.selectedItem.indexOf(index),1);
  	}
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

  decode(string){
  	return atob(string);
  }
}
