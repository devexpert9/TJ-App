import { Component, OnInit, ViewChild,NgZone,ChangeDetectorRef } from '@angular/core';
import { ToastController, LoadingController, Events, AlertController, ModalController, IonContent } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { config } from '../config';
import { InvoicePage } from '../invoice/invoice.page';
import { PasswordInstructionsPage } from '../password-instructions/password-instructions.page';

import { GlobalFooService } from '../services/user/globalFooService.service';
import { ProductsPage } from '../products/products.page';

@Component({
  selector: 'app-your-account',
  templateUrl: './your-account.page.html',
  styleUrls: ['./your-account.page.scss'],
})
export class YourAccountPage implements OnInit {
@ViewChild('content') private content: any;
@ViewChild(IonContent) contentPage: IonContent;

tabs: string = "posts";
tabs2: string = "posts2";
tabsInside: string = "simpleposts";
users:any;
simpleContent:any = "";
user_name:any;
user_image:any;
simpleAction:any = "add";
simplePostId:any = "";

buttonClicked: boolean = false;
// EditpayClicked: boolean = false; 
AddpayClicked: boolean = false; 
// editaddressClicked: boolean = false; 
addaddressClicked: boolean = false;
// editdetailClicked: boolean = false;  
editpasswordClicked: boolean = false;
public buttonClickeddrop: boolean = false; 
profile:any;
countries:any;
addresses:any;
orders:any;
is_logged_in:any  = localStorage.getItem('is_login');
is_login:any      = localStorage.getItem('is_login');
registries: any;
cards:any;

uploadedFile:any = "";
uploadedFilePro:any = "";
uploadedFileSuggestion:any = "";

button1:any;
button2:any;

desc:any;
suggestion:any;
price:any;
product_name:any;

contentPoll:any = "";
// button1:any = "";
// button2:any = "";

userImage:any;

toggle:any='0';

purchase_All:any;
purchase_days7:any;
purchase_days30:any;
isEdit:any;
userId:any;
loading:any;
current_address_index:any;
address_title:any;
current_address_id:any = null;
errors : any = ['',null,undefined];
isBrowser:any = localStorage.getItem('isBrowser');
profile_:any = {};
profile_name:any;
profile_last_name:any;
profile_email :any;
profile_phone :any;
profile_address :any;
profile_city :any;
profile_state :any;
profile_country :any;
user_created_at :any;
user_last_login :any;
ad_first_name :any;
ad_last_name :any;
ad_address :any;
ad_city :any;
ad_state :any;
ad_country :any;
ad_zip :any;
ad_phone :any;
ad_is_default :any;
current_password:any;
new_password:any;
confirm_password:any;
isEdit_card :any;
current_card_index :any;
cards_title :any;
current_card_id :any;
pay_card_number :any;
pay_card_type :any;
pay_expiry_month :any;
pay_expiry_year :any;
pay_cvv:any;
blogs:any;
my_wish_products:any = [];

current_page:number = 1;
total_pages:any;
all_blogs:any;
IMAGES_URL:any;
pic_url:any= "http://dev.indiit.solutions/TJ/dev/dev/public/uploads/userprofile/";

allowedMimes:any = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp', 'video/mp4'];
allowedProMimes:any = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp'];
    
  constructor(private globalFooService: GlobalFooService, private cd: ChangeDetectorRef, public toastController: ToastController, public userService: UserService, public loadingController: LoadingController, public router: Router, public _zone: NgZone, public events: Events, public alertController: AlertController, public modalController: ModalController, public activatedRoute: ActivatedRoute) 
    { 
      this.IMAGES_URL = config.IMAGES_URL;

      this.globalFooService.getObservable().subscribe((data) => {
        if(data.foo.page == 'suggestionDone')
        {
          // alert('login Here');
          this.is_logged_in  = 'true';
          this.user_name  = data.foo.data.name;
          this.user_image = data.foo.data.profile_picture;
          // this.getSellerAccount();
          
          this.getAllUsers();
          this.getBlogs();
        }
      });
    }
  
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if(this.errors.indexOf(params['address']) == -1){
        if(params['address'] == 'true'){
          this.tabs = 'addresses';
        }
      }
    });
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

  ionViewDidEnter(){
    var token = localStorage.getItem('sin_auth_token');

    this.is_login = localStorage.getItem('is_login');
    this.userImage = localStorage.getItem('sin_auth_user_image');

    this.userId = this.userService.decryptData(token,config.ENC_SALT);
    if(this.userId != 0){
      this.getProfile();
      this.getBlogs();
      this.getOrders();
      this.getWishedProducts();
    }
  }

  async showAllPros(postID)
  {
    localStorage.setItem('goForSuggestPost',postID);
    const modal = await this.modalController.create({
      component: PasswordInstructionsPage,
      cssClass: 'pswdPopover'
    });

    return await modal.present();
  }

  getBlogs()
  {
    let dict = {
      'user_id': localStorage.getItem('sin_auth_userId')
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

  getProfile(){
    this.presentLoading();
    this.userService.postData({userId: this.userId},'getProfile').subscribe((result) => {
      this.profile = result.profile;
      this.countries = result.countries;
      this.addresses = result.addresses;
      this.cards = result.cards;
      this.purchase_All = result.purchase_All;
      this.purchase_days7 = result.purchase_days7;
      this.purchase_days30 = result.purchase_days30;
      this.stopLoading();
      if(this.profile != ''){
        this.initialize();
      }
    },
    err => {
      this.stopLoading();
      this.presentToast('Error,Please try after some time.','danger');
    });
  }

  getOrders(){
    this.userService.postData({user_id: this.userId},'getAllOrders').subscribe((result) => {
      this.orders = result.orders;
      this.registries = result.registries;
      console.log(result)
    },
    err => {
      this.orders = [];
    });
  }

  getWishedProducts(){
    this.userService.postData({user_id:this.userId},'getCartProductsIds').subscribe((result) => {
      this.my_wish_products = result.wishlist;
    },
    err => {
      this.my_wish_products = [];
    });
  }

  initialize(){
    this.profile_name = this.profile.name;
    this.profile_last_name = this.profile.last_name;
    this.profile_email = this.profile.email;
    this.profile_phone = this.profile.phone;
    this.profile_address = this.profile.address;
    this.profile_city = this.profile.city;
    this.profile_state = this.profile.state;
    this.profile_country = this.profile.country;
    this.user_created_at = this.profile.created_at;
    this.user_last_login = this.profile.last_login;
  }
  
  editProfile() {
    var self = this;
    if(this.buttonClicked == false){
      this.scroll(580);
      this.initialize();
    }
    this.buttonClicked = !this.buttonClicked;
  } 

  updateProfile(){
    if(this.errors.indexOf(this.profile_name) >= 0){
      this.presentToast('Please enter first name.','danger');
      return false;
    }
    if(this.errors.indexOf(this.profile_last_name) >= 0){
      this.presentToast('Please enter last name.','danger');
      return false;
    }
    if(this.errors.indexOf(this.profile_email) >= 0){
      this.presentToast('Please enter email address.','danger');
      return false;
    }
    if(this.errors.indexOf(this.profile_phone) >= 0){
      this.presentToast('Please enter phone number.','danger');
      return false;
    }
    if(this.errors.indexOf(this.profile_address) >= 0){
      this.presentToast('Please enter address.','danger');
      return false;
    }
    if(this.errors.indexOf(this.profile_city) >= 0){
      this.presentToast('Please enter city.','danger');
      return false;
    }
    if(this.errors.indexOf(this.profile_state) >= 0){
      this.presentToast('Please enter state.','danger');
      return false;
    }
    if(this.errors.indexOf(this.profile_country) >= 0){
      this.presentToast('Please select country.','danger');
      return false;
    }
    this.presentLoading();
    var data = {
      id : this.userId,
      name : this.profile_name,
      last_name : this.profile_last_name,
      email : this.profile_email,
      phone : this.profile_phone,
      address : this.profile_address,
      city : this.profile_city,
      state : this.profile_state,
      country : this.profile_country,
    }
    this.userService.postData(data,'updateUserProfile').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1){
        this.profile = result.data;
        this.editProfile();
        this.presentToast('Profile updated successfully.','success');
        this.scroll(0);
        this.profile.profile_picture = result.data.profile_picture;
        var data_ = {
          name : this.profile_name+' '+this.profile_last_name,
          profile_picture : this.profile.profile_picture
        }
        this.events.publish('user_logged_in:true',data_);
        localStorage.setItem('sin_auth_user_name',data_.name);
        localStorage.setItem('sin_auth_user_image',data_.profile_picture);
      }
      else if(result.status == 2){
        this.presentToast('Email already exists.','danger');
      }
      else{
        this.presentToast('Error,Please try after some time.','danger');
      }
    },
    err => {
      this.presentToast('Error,Please try after some time.','danger');
    });
  }

  async invoice(order_details){
    const modal = await this.modalController.create({
      component: InvoicePage,
      componentProps: {order : order_details}
    });
    return await modal.present();
  }


  uploadImg1(event)
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

  uploadImg(event)
  { 
    var self = this;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      var image_file = event.target.files[0];
      if(self.allowedMimes.indexOf(image_file.type) == -1){
        this.presentToast('Please select valid image.','danger');
      }
      else{
        const formData = new FormData();
        formData.append('file', image_file);
        formData.append('userId', self.userId);

        this.presentLoading();
        this.userService.postData(formData,'updateProfilePic').subscribe((result) => {
          this.stopLoading();
          if(result.status == 1){
            this.profile.profile_picture = result.data;
            var data_ = {
              name : this.profile_name+' '+this.profile_last_name,
              profile_picture : this.profile.profile_picture
            }
            this.events.publish('user_logged_in:true',data_);
            localStorage.setItem('sin_auth_user_name',data_.name);
            localStorage.setItem('sin_auth_user_image',data_.profile_picture);
            this.presentToast('Profile picture updated successfully.','success');
          }
          else{
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

  scroll(position){
    var self = this;
    this._zone.run(() => {
      setTimeout(() => {
        self.content.scrollToPoint(0, position , 2000);
      });
    });
  }

  cancelProfile(){
    this.editProfile();
    this.scroll(0);
  }

  // Editpay() {
  //   this.EditpayClicked = !this.EditpayClicked;
  // } 
	
  Addpay(type = null,c_index = null,card = {}) {
    this.AddpayClicked = !this.AddpayClicked;
    if(this.AddpayClicked == true){
      this.scroll(170 + (this.cards.length*55));
    }
    this.cards_title = 'Add New';
    this.isEdit_card = 0;
    this.initializePaymentCard({
        current_card_id : '',pay_card_number : '',pay_card_type : '',pay_expiry_month : '', pay_expiry_year: '', pay_cvv : ''
    });
    if(this.AddpayClicked == true && type == 'edit'){
      this.isEdit_card = 1;
      this.current_card_index = c_index;
      this.cards_title = 'Edit';
      this.initializePaymentCard(card);
    }
  } 

  cancelPay(){
    this.AddpayClicked = false;
    this.scroll(0);
  }

  initializePaymentCard(card){
    this.current_card_id = card.card_id;
    this.pay_card_number = card.card_number;
    this.pay_card_type = card.card_type;
    this.pay_expiry_month = card.expiry_month;
    this.pay_expiry_year = card.expiry_year;
    this.pay_cvv = card.cvv;
  }
	
	// editaddressClick() {
 //    this.editaddressClicked = !this.editaddressClicked;
 //  } 
	
	addaddressClick(type = null,address = {},a_index = null) {
    this.addaddressClicked = !this.addaddressClicked;
    if(this.addaddressClicked == true){
      this.scroll(170 + (this.addresses.length*55));
    }
    this.address_title = 'Add New';
    this.isEdit = 0;
    this.initializeAddress({
        address_first_name : '',address_last_name : '',full_address : '',address_city : '', address_state: '', address_country : '', address_zip_code: '', address_phone : '', set_as_default : 0
    });
    if(this.addaddressClicked == true && type == 'edit'){
      this.isEdit = 1;
      this.current_address_index = a_index;
      this.address_title = 'Edit';
      this.initializeAddress(address);
    }
  } 

  initializeAddress(address){
    this.current_address_id = address.address_id;
    this.ad_first_name = address.address_first_name;
    this.ad_last_name = address.address_last_name;
    this.ad_address = address.full_address;
    this.ad_city = address.address_city;
    this.ad_state = address.address_state;
    this.ad_country = address.address_country;
    this.ad_zip = address.address_zip_code;
    this.ad_phone = address.address_phone;
    this.ad_is_default = address.set_as_default;
  }

  cancelAddAdress(){
    this.addaddressClick();
    this.scroll(0);
  }

  saveAddress(ad_first_name,ad_last_name,ad_address,ad_city,ad_state,ad_country,ad_zip,ad_phone,ad_is_default){
    if(this.errors.indexOf(ad_first_name) >= 0){
      this.presentToast('Please enter first name.','danger');
      return false;
    }
    if(this.errors.indexOf(ad_last_name) >= 0){
      this.presentToast('Please enter last name.','danger');
      return false;
    }
    if(this.errors.indexOf(ad_address) >= 0){
      this.presentToast('Please enter address.','danger');
      return false;
    }
    if(this.errors.indexOf(ad_city) >= 0){
      this.presentToast('Please enter city.','danger');
      return false;
    }
    if(this.errors.indexOf(ad_state) >= 0){
      this.presentToast('Please enter state.','danger');
      return false;
    }
    if(this.errors.indexOf(ad_country) >= 0){
      this.presentToast('Please select country.','danger');
      return false;
    }
    if(this.errors.indexOf(ad_zip) >= 0){
      this.presentToast('Please enter zip code.','danger');
      return false;
    }
    if(this.errors.indexOf(ad_phone) >= 0){
      this.presentToast('Please enter phone number.','danger');
      return false;
    }

    var data = {
      address_first_name : ad_first_name,
      address_last_name : ad_last_name,
      full_address : ad_address,
      address_city : ad_city,
      address_state : ad_state,
      address_country : ad_country,
      address_zip_code : ad_zip,
      address_phone : ad_phone,
      set_as_default : (ad_is_default == true) ? 1 : 0,
      isAdd : (this.isEdit == 1) ? 0 : 1,
      user_id : this.userId,
      address_id : this.current_address_id
    }

    this.presentLoading();
    this.userService.postData(data,'updateUserAddress').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1){
        if(data.isAdd == 1){
          this.addresses.splice(0,0,result.data);
        }
        else{
          this.addresses[this.current_address_index] = result.data;
        }
        this.addaddressClick();
        var msg = (data.isAdd == 1) ? 'added' : 'updated';
        this.presentToast('Address '+msg+' successfully.','success');
        this.scroll(0);
      }
      else{
        this.presentToast('Error,Please try after some time.','danger');
      }
    },
    err => {
      this.presentToast('Error,Please try after some time.','danger');
    });
  }

  updatePaymentCard(card_number,card_type,expiry_month,expiry_year,cvv){
    if(this.errors.indexOf(card_number) >= 0){
      this.presentToast('Please enter card number.','danger');
      return false;
    }
    if(this.errors.indexOf(card_type) >= 0){
      this.presentToast('Please select card type.','danger');
      return false;
    }
    if(this.errors.indexOf(expiry_month) >= 0){
      this.presentToast('Please enter expiry month.','danger');
      return false;
    }
    if(this.errors.indexOf(expiry_year) >= 0){
      this.presentToast('Please enter expiry year.','danger');
      return false;
    }
    if(this.errors.indexOf(cvv) >= 0){
      this.presentToast('Please enter card cvv.','danger');
      return false;
    }

    var data = {
      card_number : card_number,
      card_type : card_type,
      expiry_month : expiry_month,
      expiry_year : expiry_year,
      cvv : cvv,
      isAdd : (this.isEdit_card == 1) ? 0 : 1,
      user_id : this.userId,
      card_id : this.current_card_id
    }

    this.presentLoading();
    this.userService.postData(data,'addPaymentCard').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1){
        if(data.isAdd == 1){
          this.cards.splice(0,0,result.data);
        }
        else{
          this.cards[this.current_card_index] = result.data;
        }
        this.Addpay();
        var msg = (data.isAdd == 1) ? 'added' : 'updated';
        this.presentToast('Card '+msg+' successfully.','success');
        this.scroll(0);
      }
      else{
        this.presentToast('Error,Please try after some time.','danger');
      }
    },
    err => {
      this.presentToast('Error,Please try after some time.','danger');
    });
  }

  async deleteAddress(address_id,index) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (res) => {
            console.log('Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.presentLoading();
            this.userService.postData({address_id: address_id},'deleteUserAddress').subscribe((result) => {
              this.stopLoading();
              if(result.status == 1){
                this.addresses.splice(index,1);
                this.presentToast('Address deleted successfully.','success');
              }
              else{
                this.presentToast('Error,Please try after some time.','danger');
              }
            },
            err => {
              this.presentToast('Error,Please try after some time.','danger');
            });
          }
        }
      ]
    });

    await alert.present();
  }    

  async deleteCard(card_id,index) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (res) => {
            console.log('Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.presentLoading();
            this.userService.postData({card_id: card_id},'deleteUserCard').subscribe((result) => {
              this.stopLoading();
              if(result.status == 1){
                this.cards.splice(index,1);
                this.presentToast('Card deleted successfully.','success');
              }
              else{
                this.presentToast('Error,Please try after some time.','danger');
              }
            },
            err => {
              this.presentToast('Error,Please try after some time.','danger');
            });
          }
        }
      ]
    });

    await alert.present();
  }  

  async setAddressDefault(address_id,index) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to set this address your default?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (res) => {
            console.log('Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.presentLoading();
            this.userService.postData({address_id: address_id, user_id: this.userId},'setDefaultAddress').subscribe((result) => {
              this.stopLoading();
              if(result.status == 1){
                this.updateDefaultAddressOption(index);
                this.presentToast('Address marked as default successfully.','success');
              }
              else{
                this.presentToast('Error,Please try after some time.','danger');
              }
            },
            err => {
              this.presentToast('Error,Please try after some time.','danger');
            });
          }
        }
      ]
    });

    await alert.present();
  }

  updateDefaultAddressOption(index){
    if(this.addresses.length > 0){
      for(var i=0; i<this.addresses.length; i++){
        if(index != i){
          this.addresses[i]['set_as_default'] = 0;
        }
        else{
          this.addresses[i]['set_as_default'] = 1;
        }
      }
    }
  }
	 
	// editdetailClick() {
 //    this.editdetailClicked = !this.editdetailClicked;
 //  } 
	  
	editpasswordClick() {
    this.editpasswordClicked = !this.editpasswordClicked;
    if(this.editpasswordClicked == true){
      this.scroll(320);
    }
  } 

  cancelPassword(){
    this.editpasswordClick();
    this.scroll(0);
  }

  updatePassword(current_password,new_password,confirm_password){
    if(this.errors.indexOf(current_password) >= 0){
      this.presentToast('Please enter current password.','danger');
      return false;
    }
    if(this.errors.indexOf(new_password) >= 0){
      this.presentToast('Please enter new password.','danger');
      return false;
    }
    
    var passExp= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])(?!.*\s).{8,15}$/;

    if(!passExp.test(new_password))
    {
      this.presentToast('New password should have min. 8 characters, One UpperCase & One Lowercase & one special character.','danger');
        return false;
    }

    if(this.errors.indexOf(confirm_password) >= 0){
      this.presentToast('Please re-enter new password.','danger');
      return false;
    }
    if(new_password != confirm_password){
      this.presentToast('Please re-enter the same new password.','danger');
      return false;
    }
    this.presentLoading();
    this.userService.postData({current_password: current_password,new_password: new_password,userId : this.userId},'updateUserPassword').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1){
        this.cancelPassword();
        this.presentToast('Password updated successfully.','success');
        this.current_password = '';
        this.new_password = '';
        this.confirm_password = '';
      }
      else if(result.status == 2){
        this.presentToast('Invalid current password.','danger');
      }
      else{
        this.presentToast('Error,Please try after some time.','danger');
      }
    },
    err => {
      this.presentToast('Error,Please try after some time.','danger');
    });
  }
	
  public onButtonClickdrop() {
    this.buttonClickeddrop = !this.buttonClickeddrop;
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

  convertIntoNumber(value){
    if(typeof(value) == 'string'){
      return Number(value).toFixed(2);
    }else{
      return value;
    }
  }

  userAlreadyExist(blog){
    let userExists = false;
    for(var i=0; i < blog.polling_data.length; i++){
      if(blog.id == blog.polling_data[i].poll_by_user){
        userExists = true;
      }
    }

    return userExists;
  }

  userAlreadyExistWithButton1(blog){
    let userExists = false;
    for(var i=0; i < blog.polling_data.length; i++){
      if(blog.id == blog.polling_data[i].poll_by_user && blog.button1 == blog.polling_data[i].poll_reply){
        userExists = true;
      }
    }

    return userExists;
  }

  userAlreadyExistWithButton2(blog){
    let userExists = false;
    for(var i=0; i < blog.polling_data.length; i++){
      if(blog.id == blog.polling_data[i].poll_by_user && blog.button2 == blog.polling_data[i].poll_reply){
        userExists = true;
      }
    }

    return userExists;
  }

}
