import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { config } from '../config';
import { InvoicePage } from '../invoice/invoice.page';
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {
tabs: string = "Orders";
isAndroid: boolean = false;
userId:any;
IMAGES_URL:any;
loading:any;
orders:any;
open_orders:any = [];
cancelled_orders:any = [];
errors : any = ['',null,undefined];
  constructor(public userService: UserService, public loadingController: LoadingController, public modalController: ModalController) { 
      this.IMAGES_URL = config.IMAGES_URL;
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    var token = localStorage.getItem('sin_auth_token');
    this.userId = this.userService.decryptData(token,config.ENC_SALT);
    if(this.userId != 0){
      this.getOrders();
    }
  }

  getOrders(){
    this.presentLoading();
    this.userService.postData({user_id:this.userId},'getAllOrders').subscribe((result) => {
      console.log(result)
      this.orders = result.orders;
      var self = this;
      if(this.orders.length > 0){
        this.orders.forEach(function(order){
          if(order.order_status == 0){
            self.open_orders.push(order);
          }
          else if(order.order_status == 2){
            self.cancelled_orders.push(order);
          }
        });
      }
      this.stopLoading();
    },
    err => {
      this.stopLoading();
      this.orders = [];
    });
  }
  
  async invoice(order_details){
	  const modal = await this.modalController.create({
      component: InvoicePage,
      componentProps: {order : order_details}
    });
    return await modal.present();
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
