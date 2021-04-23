import { Component, OnInit,ChangeDetectorRef, ViewChild } from '@angular/core';
import { ToastController, LoadingController, ModalController, IonContent } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { GlobalFooService } from '../services/user/globalFooService.service';
import { Router } from '@angular/router';
import { PasswordInstructionsPage } from '../password-instructions/password-instructions.page';
import { ProductsPage } from '../products/products.page';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
// @ViewChild(Content) content: Content;
 @ViewChild(IonContent) contentPage: IonContent;

tabs: string = "posts";
simpleContent:any = "";

simpleAction:any = "add";
simplePostId:any = "";

all_blogs:any;
loading:any;
IMAGES_URL:any;
errors : any      = ['',null,undefined];
total_pages:any;
is_logged_in:any  = localStorage.getItem('is_login');
is_login:any      = localStorage.getItem('is_login');
users:any;
user_name:any;
user_image:any;
uploadedFile:any = "";
uploadedFilePro:any = "";
uploadedFileSuggestion:any = "";
isSeller:any      = '';
isSelectedImage:any      = '';
contentPoll:any='';
itemId: any;
// users:any;
usersAll:any;
userId:any;
content:any;
// contentPoll:any;
userImage:any;
ordersLength:any;
cartLength:any;

button1:any;
button2:any;

desc:any;
suggestion:any;
price:any;
product_name:any;

currentUserID:any = localStorage.getItem('sin_auth_userId');

toggle:any='0';

current_page:number = 1;
pic_url:any= "http://dev.indiit.solutions/TJ/dev/dev/public/uploads/userprofile/";
  
allowedMimes:any = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp', 'video/mp4'];
allowedProMimes:any = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp'];
     
  constructor(public modalController: ModalController, public router: Router,private globalFooService: GlobalFooService,private cd: ChangeDetectorRef,public toastController: ToastController, public loadingController:LoadingController, public userService: UserService)
  { 
    this.IMAGES_URL = config.IMAGES_URL;

    this.globalFooService.getObservable().subscribe((data) => {
      if(data.foo.page == 'afterLoginUserName')
      {
        // alert('login Here');
        this.is_logged_in  = 'true';
        this.user_name  = data.foo.data.name;
        this.user_image = data.foo.data.profile_picture;
        // this.getSellerAccount();
        
        this.getAllUsers();
        this.getBlogs();
      }
      else if(data.foo.page == 'suggestionDone')
      {
        // alert('login Here');
        this.is_logged_in  = 'true';
        this.user_name  = data.foo.data.name;
        this.user_image = data.foo.data.profile_picture;
        // this.getSellerAccount();
        
        this.getAllUsers();
        this.getBlogs();
      }
      else if(data.foo.page == 'sellerDone')
      {
        this.getSellerAccount();
      }
      else if(data.foo.page == 'logout')
      {
        // alert('logout here');
        this.is_logged_in  = 'false';

        this.ordersLength = '0';
        this.cartLength   = '0';
        
        this.getAllUsers();
        this.getBlogs();
      }
    });
  }

  ngOnInit() {
    
  }

  getSellerAccount()
  {
    this.userService.postData({email: localStorage.getItem('sin_auth_user_email')},'getSellerAccount').subscribe((result) => {
      if(result.status == 1)
      {
        this.isSeller = 'yes';
        this.cd.detectChanges();
      }
      else
      {
        this.isSeller = 'no'; 
        this.cd.detectChanges();
      }
    });
  }
  
  makeToggle(post_id)
  {
    this.toggle = post_id;
    this.cd.detectChanges();
  }

  HideToggle()
  {
    this.toggle = '0';
    this.cd.detectChanges(); 
  }

  productDetailPage(productId)
  {
    this.router.navigate(['/product-details/'+productId]);
  }

  ionViewDidEnter()
  {
    if(localStorage.getItem('comeFrom') == 'register')
    {
      this.router.navigate(['/interest']);
      return;
    }

    this.currentUserID = localStorage.getItem('sin_auth_userId');
    this.is_login = localStorage.getItem('is_login');
    this.userImage = localStorage.getItem('sin_auth_user_image');
    this.getAllUsers();
    this.getBlogs();
  }

  ionViewDidLoad()
  {
    if(localStorage.getItem('comeFrom') == 'register')
    {
      this.router.navigate(['/interest']);
      return;
    }
    
    this.currentUserID = localStorage.getItem('sin_auth_userId');
    this.is_login = localStorage.getItem('is_login');
    this.getAllUsers();
    this.getBlogs();
  }

  getAllUsers()
  {
    let emailMatch = localStorage.getItem('sin_auth_user_email');
    if(emailMatch == null){
      emailMatch = "xx@demo.com";
    }
    
    this.userService.postData({email:emailMatch},'getAllUsers').subscribe((result) => {
      this.stopLoading();
      this.users = result.data;
      this.is_login = localStorage.getItem('is_login');
      this.cd.detectChanges();
    },
    err => {
      this.stopLoading();
      this.users = [];
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
        this.presentToast('unfollow successfully','success');

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
    
  getBlogs()
  {
    let dict = {
      // 'user_id': localStorage.getItem('sin_auth_userId')
      'user_id': null
    };

    // this.presentLoading();
    this.userService.postData(dict,'getPosts').subscribe((result) => {
      // this.stopLoading();
      if(result.status == 1)
      {
        this.all_blogs = result.data.reverse();
        this.cd.detectChanges();
      }
      else
      {
        this.all_blogs = [];
        this.presentToast('Error,Please try after some time.','danger');
      }
    },
    err => {
      this.presentToast('Error,Please try after some time.','danger');
    });
  }

  deletePost(post_id)
  {
    if(confirm('Are you sure you want to delete this post ?'))
    {
      let dict = {
        'post_id': post_id
      };

      this.presentLoading();
      this.userService.postData(dict,'deletePost').subscribe((result) => {
        this.stopLoading();
        if(result.status == 1)
        {
          this.presentToast('Post deleted successfully','success');
          this.getBlogs();

          this.cd.detectChanges();
        }
        else
        {
          this.all_blogs = [];
          this.presentToast('Error,Please try after some time.','danger');
        }
      },
      err => {
        this.presentToast('Error,Please try after some time.','danger');
      });
    }
  }

  async editPost(post)
  {
    this.contentPage.scrollToTop(400);
    // this.content.scrollToTop();
    if(post.post_type == 'simple')
    {
      this.tabs = "posts";
      this.content = post.content;
      this.simpleAction = "update";
      this.simplePostId = post.post_id;
      this.cd.detectChanges();
    }


  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  atob(string){
    return atob(string);
  }

  uploadImg(event)
  { 
    var self = this;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      var image_file = event.target.files[0];
      if(self.allowedMimes.indexOf(image_file.type) == -1)
      {
        this.presentToast('Please select image with extension (png,jpg,jpeg,gif,webp) or mp4 video.','danger');
      }
      else{
        const formData = new FormData();
        formData.append('file', image_file);
        formData.append('userId', self.userId);

        this.presentLoading();
        this.userService.postData(formData,'updateProfilePic').subscribe((result) => {
          
          if(result.status == 1)
          {
            this.uploadedFile = result.data;
            this.stopLoading();
            this.cd.detectChanges();
          }
          else{
            this.stopLoading();
            this.presentToast('Error while updating image,Please try later.','danger');
          }
        },
        err => {
          this.stopLoading();
          this.presentToast('Error while updating image,Please try later.','danger');
        });
      }
    }
  }

  uploadProImg(event)
  { 
    var self = this;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      var image_file = event.target.files[0];
      if(self.allowedProMimes.indexOf(image_file.type) == -1)
      {
        this.presentToast('Please select image with extension (png,jpg,jpeg,gif,webp)','danger');
      }
      else{
        const formData = new FormData();
        formData.append('file', image_file);
        formData.append('userId', self.userId);

        this.presentLoading();
        this.userService.postData(formData,'updateProfilePic').subscribe((result) => {
          
          if(result.status == 1)
          {
            this.uploadedFilePro = result.data;
            this.stopLoading();
            this.cd.detectChanges();
          }
          else{
            this.stopLoading();
            this.presentToast('Error while updating image,Please try later.','danger');
          }
        },
        err => {
          this.stopLoading();
          this.presentToast('Error while updating image,Please try later.','danger');
        });
      }
    }
  }

  uploadSuggesImg(event)
  { 
    var self = this;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      var image_file = event.target.files[0];
      if(self.allowedProMimes.indexOf(image_file.type) == -1)
      {
        this.presentToast('Please select image with extension (png,jpg,jpeg,gif,webp)','danger');
      }
      else{
        const formData = new FormData();
        formData.append('file', image_file);
        formData.append('userId', self.userId);

        this.presentLoading();
        this.userService.postData(formData,'updateProfilePic').subscribe((result) => {
          
          if(result.status == 1)
          {
            this.uploadedFileSuggestion = result.data;
            this.stopLoading();
            this.cd.detectChanges();
          }
          else{
            this.stopLoading();
            this.presentToast('Error while updating image,Please try later.','danger');
          }
        },
        err => {
          this.stopLoading();
          this.presentToast('Error while updating image,Please try later.','danger');
        });
      }
    }
  }

  addPost(content,file)
  {
    if(this.errors.indexOf(this.content) >= 0)
    {
      this.presentToast('Please enter the content.','danger');
      return false;
    }

    if(this.uploadedFile == '')
    {
      this.presentToast('Please upload Image/Video.','danger');
      return false;
    }

    let dict = {
      'user_id': localStorage.getItem('sin_auth_userId'),
      'content': content,
      'file': this.uploadedFile,      
      'post_type': 'simple',
      'product_name': '',
      'price': '',
      'button1': '',
      'button2': '',
    };
    this.presentLoading()
    this.userService.postData(dict,'addPost').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1)
      {
        this.uploadedFile = "";
        this.content = "";
        this.presentToast('Post added successfully','success');

        this.getBlogs();
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

  updatePost(content,postId)
  {
    if(this.errors.indexOf(this.content) >= 0)
    {
      this.presentToast('Please enter the content.','danger');
      return false;
    }

    let dict = {
      'post_id': postId,
      'content': content
    };
    this.presentLoading()
    this.userService.postData(dict,'updatePost').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1)
      {
        this.uploadedFile = "";
        this.content = "";

        this.tabs     = "posts";
        this.content  = "";
        this.simpleAction = "add";
        this.simplePostId = "";

        this.presentToast('Post updated successfully','success');

        this.getBlogs();
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

  cancelSimple()
  {
    this.tabs     = "posts";
    this.content  = "";
    this.simpleAction = "add";
    this.simplePostId = "";
  }

  addProductPost(desc,product_name,price,filepro)
  {
    if(this.errors.indexOf(this.desc) >= 0)
    {
      this.presentToast('Please enter product description.','danger');
      return false;
    }

    if(this.errors.indexOf(this.product_name) >= 0)
    {
      this.presentToast('Please enter product name.','danger');
      return false;
    }

    if(this.errors.indexOf(this.price) >= 0)
    {
      this.presentToast('Please enter product price.','danger');
      return false;
    }
    if(this.price <= 0){
      this.presentToast('Price should be more than 0.','danger');
      return false; 
    }

    if(this.uploadedFilePro == '')
    {
      this.presentToast('Please upload product Image.','danger');
      return false;
    }

    let dict = {
      'user_id': localStorage.getItem('sin_auth_userId'),
      'content': desc,
      'file': this.uploadedFilePro,      
      'post_type': 'product',
      'product_name': product_name,
      'price': price,
      'button1': '',
      'button2': ''
    };
    this.presentLoading()
    this.userService.postData(dict,'addPost').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1)
      {
        this.uploadedFilePro = "";
        this.desc   = "";
        this.price  = "";
        this.product_name  = "";
        this.presentToast('Post added successfully','success');

        this.getBlogs();
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

  addSuggestionPost(suggestion,fileSuggestion)
  {
    if(this.errors.indexOf(this.suggestion) >= 0 && this.uploadedFileSuggestion == '')
    {
      this.presentToast('Please add any suggestion or upload any image.','danger');
      return false;
    }

    let dict = {
      'user_id':    localStorage.getItem('sin_auth_userId'),
      'content':    suggestion,
      'file':       this.uploadedFileSuggestion,      
      'post_type':  'suggestion',
      'product_name': "",
      'price':      "",
      'button1':    '',
      'button2':    ''
    };
    this.presentLoading()
    this.userService.postData(dict,'addPost').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1)
      {
        this.uploadedFileSuggestion = "";
        this.suggestion   = "";
        this.presentToast('Post added successfully','success');

        this.getBlogs();
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

  addPollPost(contentPoll,button1,button2)
  {
    if(this.errors.indexOf(this.contentPoll) >= 0)
    {
      this.presentToast('Please enter your question.','danger');
      return false;
    }

    if(this.errors.indexOf(this.button1) >= 0)
    {
      this.presentToast('Please enter both the options.','danger');
      return false;
    }

    if(this.errors.indexOf(this.button2) >= 0)
    {
      this.presentToast('Please enter both the options.','danger');
      return false;
    }
    
    let dict = {
      'user_id': localStorage.getItem('sin_auth_userId'),
      'content': contentPoll,
      'file': "",
      'post_type': 'poll',
      'product_name': '',
      'price': '',
      'button1': button1,
      'button2': button2
    };
    // this.presentLoading()
    this.userService.postData(dict,'addPost').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1)
      {
        this.uploadedFile = "";
        this.contentPoll = "";
        this.button1 = "";
        this. button2 = "";
        this.presentToast('Post added successfully','success');

        this.getBlogs();
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

  givePoll(postData,selection)
  {
    let dict = {
      'post_id':      postData.post_id,
      'poll_by_user': localStorage.getItem('sin_auth_userId'),
      'poll_reply':   selection
    };
    this.presentLoading()
    this.userService.postData(dict,'addPostPoll').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1)
      {
        this.presentToast('Polling done','success');

        this.getBlogs();
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

  async showAllPros(postID)
  {
    localStorage.setItem('goForSuggestPost',postID);

    this.router.navigate(['/home']);

    // const modal = await this.modalController.create({
    //   component: PasswordInstructionsPage,
    //   cssClass: 'pswdPopover'
    // });

    // return await modal.present();
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
  };


  userAlreadyExist(blog)
  {
    let userExists = false;
    for(var i=0; i < blog.polling_data.length; i++)
    {
      if(localStorage.getItem('sin_auth_userId') == blog.polling_data[i].poll_by_user)
      {
        userExists = true;
      }
    }

    return userExists;
  }

  userAlreadyExistWithButton1(blog)
  {
    let userExists = false;
    for(var i=0; i < blog.polling_data.length; i++)
    {
      if(localStorage.getItem('sin_auth_userId') == blog.polling_data[i].poll_by_user && blog.button1 == blog.polling_data[i].poll_reply){
        userExists = true;
      }
    }

    return userExists;
  }

  userAlreadyExistWithButton2(blog){
    let userExists = false;
    for(var i=0; i < blog.polling_data.length; i++){
      if(localStorage.getItem('sin_auth_userId') == blog.polling_data[i].poll_by_user && blog.button2 == blog.polling_data[i].poll_reply){
        userExists = true;
      }
    }

    return userExists;
  }


}
