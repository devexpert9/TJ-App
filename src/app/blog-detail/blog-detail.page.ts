import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.page.html',
  styleUrls: ['./blog-detail.page.scss'],
})
export class BlogDetailPage implements OnInit {
hideMe:any;
hide() {
	 this.hideMe = !this.hideMe;
	}
selectedItem:any = 'item1';
blog:any;
loading:any;
IMAGES_URL:any;
blog_id:any;
shareURL:any;
errors : any = ['',null,undefined];
related_blogs:any;
recent_blogs:any;
  constructor(public toastController: ToastController, public loadingController:LoadingController, public userService: UserService, public activatedRoute: ActivatedRoute) { 
    this.IMAGES_URL = config.IMAGES_URL;
    this.blog_id = activatedRoute.snapshot.paramMap.get('blog_id');
    this.shareURL = config.BASE_URL+'#/blog-detail/'+this.blog_id;
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getBlogDetails();
  }

  getBlogDetails(){
    this.presentLoading();
    this.userService.postData({blog_id: this.blog_id, limit : '3'},'blogDetails').subscribe((result) => {
      this.stopLoading();
      console.log(result)
      this.blog = result.blogs;
      this.related_blogs = result.relatedBlogs;
      this.recent_blogs = result.recentBlogs;
    },
    err => {
      this.stopLoading();
      this.blog = [];
      this.related_blogs = [];
      this.recent_blogs = [];
    });
  }

  atob(string){
    return atob(string);
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
