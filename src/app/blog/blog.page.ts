import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
all_blogs:any;
loading:any;
IMAGES_URL:any;
errors : any = ['',null,undefined];
total_pages:any;
current_page:number = 1;
  constructor(public toastController: ToastController, public loadingController:LoadingController, public userService: UserService) { 
    this.IMAGES_URL = config.IMAGES_URL;
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getBlogs();
  }

  getBlogs(){
    this.presentLoading();
    this.userService.postData({per_page: '4', page : this.current_page},'allBlogs').subscribe((result) => {
      this.stopLoading();
      this.all_blogs = result.blogs;
      var records = Math.ceil(result.total_blogs/4);
      if(isNaN(records)){
        this.total_pages = 1;
      }
      else{
        this.total_pages = records;
      }
    },
    err => {
      this.stopLoading();
      this.all_blogs = [];
    });
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  atob(string){
    return atob(string);
  }

  paginate(page){
    if(page == 'next'){
      if(this.total_pages != this.current_page){
        this.current_page = Number(this.current_page) + 1;
        this.getBlogs();
      }
    }
    else if(page == 'prev'){
      if(this.current_page != 1){
        this.current_page = Number(this.current_page) - 1;
        this.getBlogs();
      }
    }
    else{
      if(this.current_page != page){
        this.current_page = page;
        this.getBlogs();
      }
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
