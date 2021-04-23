import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { config } from '../config';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  product_id:any;
  vendor_type:any;
  vendor_id:any;
  IMAGES_URL:any;
  chat_users:any;
  userId:any;
  loading:any;
  chat_list:any;
  active_chat:any;
  message:any;
  is_chat_window:Boolean = false;
  is_chat_loaded:Boolean = false;
  errors : any = ['',null,undefined];
  constructor(public activatedRoute: ActivatedRoute,public userService: UserService, public toastController:ToastController,public loadingController:LoadingController) { 
  	this.product_id = activatedRoute.snapshot.paramMap.get('product_id');
  	this.vendor_type = activatedRoute.snapshot.paramMap.get('vendor_type');
  	this.vendor_id = activatedRoute.snapshot.paramMap.get('vendor_id');
    this.IMAGES_URL = config.IMAGES_URL;
  }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
  	var token = localStorage.getItem('sin_auth_token');
    this.userId = this.userService.decryptData(token,config.ENC_SALT);
  	if(this.userId == 0){
  		this.userId = Math.floor(Math.random() * 100000000);
  	}
  	this.chatList();
  }

  chatList()
  {
  	this.presentLoading();
  	if(this.errors.indexOf(this.product_id) >= 0 || this.errors.indexOf(this.vendor_type) >= 0 || this.errors.indexOf(this.vendor_id) >= 0){
  		this.getChatUsers();
  	}
  	else{
	  	var pro_name = localStorage.getItem('sin_chat_product_name');
	    var pro_id = localStorage.getItem('sin_chat_pro_unique_id');
	    this.userService.postData({from_user_id:this.userId, from_user_type:'user', product_id: this.product_id, to_user_type: (this.vendor_type == '0' ? 'vendor' : 'admin' ), to_user_id: this.vendor_id, message_type: 'text', message: 'Chat started for product '+pro_name+'('+pro_id+')'},'addChat').subscribe((result) => {
	      	this.getChatUsers();
	    },
	    err => {
	      this.stopLoading();
	    });
    }
  }

  getChatUsers(){
  	this.userService.postData({user_id:this.userId},'getChatUsers').subscribe((result) => {
      this.stopLoading();
      this.chat_users = result.users;
    },
    err => {
      this.stopLoading();
      this.chat_users = [];
    });
  }

  getChat(user)
  {
  	this.active_chat = user;
  	this.is_chat_loaded = false;
  	this.is_chat_window = true;
  	this.userService.postData({user_id:this.userId,from_user_type:'user', to_user_id: this.active_chat.to_user_id,to_user_type: this.active_chat.to_user_type},'getChat').subscribe((result) => {
      console.log(result)
      this.is_chat_loaded = true;
      this.chat_list = result.chat;
    },
    err => {
      this.is_chat_loaded = true;
      this.chat_list = [];
    });
  }

  addChat(message){
  	console.log('aaaaaaa')
  	if(this.errors.indexOf(message) == -1){
	  	this.message = '';
	  	this.userService.postData({from_user_id:this.userId, from_user_type:'user', product_id: this.product_id, to_user_type: this.active_chat.to_user_type, to_user_id: this.active_chat.to_user_id, message_type: 'text', message: message},'addChat').subscribe((result) => {
	      console.log(result)
	      this.chat_list.push(result.chat);
	    },
	    err => {
	      this.is_chat_loaded = true;
	    });
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
