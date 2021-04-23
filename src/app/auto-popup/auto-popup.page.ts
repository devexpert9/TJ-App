import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModalController, LoadingController} from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auto-popup',
  templateUrl: './auto-popup.page.html',
  styleUrls: ['./auto-popup.page.scss'],
})
export class AutoPopupPage implements OnInit {
  loading:any;
  categories:any;
  errors : any = ['',null,undefined];
  
  constructor(private cd: ChangeDetectorRef,private modalCtrl:ModalController,public userService: UserService,public loadingController:LoadingController, public router: Router) { 
  	this.getPopup();
  }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
    this.getCategories();
  }

  getCategories()
  {

    this.userService.postData({},'getAllCategories').subscribe((result) => {
      this.stopLoading();
      this.categories = result.data;
      this.cd.detectChanges();
    },
    err => {
      this.stopLoading();
      this.categories = [];
    });
  }

  login(cat)
  {
    console.log(cat);
  }

  close(){
  	this.modalCtrl.dismiss();
  }

  productsDetails(){
  	this.modalCtrl.dismiss();
  	this.router.navigate(['/products']);
  }

  getPopup(){
    // this.presentLoading();
    // this.userService.postData({},'auto-popup').subscribe((result) => {
    //   console.log(result)
    //   this.stopLoading();
    // },
    // err => {
    //   var self = this;
    //   setTimeout(function(){
    //     self.stopLoading();
    //   },1000);
    // });
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
