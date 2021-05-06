import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { config } from '../config';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.page.html',
  styleUrls: ['./follow.page.scss'],
})
export class FollowPage implements OnInit {
  tabs: string = "Buyer";
  product_id:any;
  vendor_type:any;
  vendor_id:any;
  IMAGES_URL:any;
  users:any;
  sellers:any;
  requests:any;
  userId:any;
  loading:any;
  chat_list:any; 
  active_chat:any;
  message:any;
  is_chat_window:Boolean = false;
  is_chat_loaded:Boolean = false;
  errors : any = ['',null,undefined];

  pic_url:any= "http://dev.indiit.solutions/TJ/dev/dev/public/uploads/userprofile/";

  constructor(private cd: ChangeDetectorRef, public activatedRoute: ActivatedRoute,public userService: UserService, public toastController:ToastController,public alertController: AlertController, public loadingController:LoadingController) { 
  	this.product_id = activatedRoute.snapshot.paramMap.get('product_id');
  	this.vendor_type = activatedRoute.snapshot.paramMap.get('vendor_type');
  	this.vendor_id = activatedRoute.snapshot.paramMap.get('vendor_id');
    this.IMAGES_URL = config.IMAGES_URL;
  }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
  	this.getAllUsers();
    this.getAllShops();
    this.getAllRequests();
  }

  getAllUsers()
  {
    this.presentLoading();
  	this.userService.postData({email:localStorage.getItem('sin_auth_user_email')},'getAllUsers').subscribe((result) => {
      this.stopLoading();
      this.users = result.data;
    },
    err => {
      this.stopLoading();
      this.users = [];
    });
  }

  getAllShops()
  {
    this.userService.postData({email:localStorage.getItem('sin_auth_user_email')},'getAllSellers').subscribe((result) => {
      this.sellers = result.data;
    },
    err => {
      this.sellers = [];
    });
  }

  getAllRequests()
  {
    this.userService.postData({user_id:localStorage.getItem('sin_auth_userId')},'getAllFollowRequests').subscribe((result) => {
      this.requests = result.data;
    },
    err => {
      this.requests = [];
    });
  }

  accept(reqId)
  {
    let dict = {
      'reqId': reqId
    };

    this.presentLoading();
    this.userService.postData(dict,'acceptFollowRequest').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1)
      {
        this.presentToast('Request accepted successfully','success');

        this.getAllRequests();
        this.cd.detectChanges();
      }
      else
      {
        this.presentToast('Error,Please try after some time.','danger');
      }
    },
    err => {
      this.presentToast('Error,Please try after some time.','danger');
    });
  }

  reject(reqId)
  {
    let dict = {
      'reqId': reqId
    };

    this.presentLoading();
    this.userService.postData(dict,'rejectFollowRequest').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1)
      {
        this.presentToast('Request rejected successfully','success');

        this.getAllRequests();
        this.cd.detectChanges();
      }
      else
      {
        this.presentToast('Error,Please try after some time.','danger');
      }
    },
    err => {
      this.presentToast('Error,Please try after some time.','danger');
    });
  }

  follow_user(user)
  {
    this.presentLoading();
    let userId = user.id;

    let dict = {
      'follow_by': localStorage.getItem('sin_auth_userId'),
      'follow_to': userId,
      'follow_to_type': 'user'
    };

    this.userService.postData(dict,'followUser').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1)
      {
        this.presentToast('Followed successfully','success');

        this.getAllUsers();
        this.cd.detectChanges();
      }
      else
      {
        this.presentToast('Error,Please try after some time.','danger');
      }
    },
    err => {
      this.presentToast('Error,Please try after some time.','danger');
    });
  }

  follow_seller(user)
  {
    this.presentLoading();
    let userId = user.id;

    let dict = {
      'follow_by': localStorage.getItem('sin_auth_userId'),
      'follow_to': userId,
      'follow_to_type': 'seller'
    };

    this.userService.postData(dict,'followSeller').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1)
      {
        this.presentToast('Followed successfully','success');

        this.getAllShops();
        this.cd.detectChanges();
      }
      else
      {
        this.presentToast('Error,Please try after some time.','danger');
      }
    },
    err => {
      this.presentToast('Error,Please try after some time.','danger');
    });
  }

  unfollow_user(user)
  {
    this.presentLoading();
    let userId = user.id;

    let dict = {
      'follow_by': localStorage.getItem('sin_auth_userId'),
      'follow_to': userId,
      'follow_to_type': 'user'
    };

    this.userService.postData(dict,'unfollowUser').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1)
      {
        this.presentToast('Un-followed successfully','success');

        this.getAllUsers();
        this.cd.detectChanges();
      }
      else
      {
        this.presentToast('Error,Please try after some time.','danger');
      }
    },
    err => {
      this.presentToast('Error,Please try after some time.','danger');
    });
  }

  unfollow_seller(user)
  {
    this.presentLoading();
    let userId = user.id;

    let dict = {
      'follow_by': localStorage.getItem('sin_auth_userId'),
      'follow_to': userId,
      'follow_to_type': 'seller'
    };

    this.userService.postData(dict,'unfollowSeller').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1)
      {
        this.presentToast('Un-followed successfully','success');

        this.getAllShops();
        this.cd.detectChanges();
      }
      else
      {
        this.presentToast('Error,Please try after some time.','danger');
      }
    },
    err => {
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
