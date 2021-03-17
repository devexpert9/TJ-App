import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
notifications:any;
userId:any;
loading:any;
  constructor(public toastController: ToastController, public loadingController: LoadingController, public userService: UserService, public router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    var token = localStorage.getItem('sin_auth_token');
    this.userId = this.userService.decryptData(token,config.ENC_SALT);
    if(this.userId != 0){
      this.getNotifications();
    }
  }

  getNotifications(){
    this.presentLoading();
    this.userService.postData({user_id : this.userId},'getNotifications').subscribe((result) => {
      this.stopLoading();
      console.log(result)
      this.notifications = result.notifications;
    },
    err => {
      this.stopLoading();
      this.notifications = [];
    });
  }

  open(notis){
    var order_notis_type = [1,2,3];
    this.userService.postData({noti_id : notis.noti_id},'readNotification').subscribe((result) => {
      console.log(result)
    });
    if(order_notis_type.indexOf(notis.noti_type) >= 0){
      this.router.navigate(['/order-history']);
    }
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
