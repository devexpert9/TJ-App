import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, Events, LoadingController } from '@ionic/angular';
import { AutoPopupPage } from '../auto-popup/auto-popup.page';
import { ChooseLocationPage } from '../choose-location/choose-location.page';
import { VideoCallPage } from '../video-call/video-call.page';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import * as $ from 'jquery';
import { Socket } from 'ng-socket-io';
import { GlobalFooService } from '../services/user/globalFooService.service';

import { Observable } from 'rxjs/Observable';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
declare var webkitSpeechRecognition;
@Component({  
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {
public buttonClickeddrop: boolean = false; 
public buttonClickedcat: boolean = false;
is_logged_in:boolean;
all_categories:any;
all_top_categories:any;
cart:any;
wishPro:any;
userId:any;
cartLength:any;
cats_array:any = [];
items_in_cart:string='0';
searchTerm:string=''; 
selected_cat:string='Categories';
mob_category:string='Category';
cart_price:any=0;
errors : any = ['',null,undefined];
IMAGES_URL:any;
default_address:any;
new_call_res:any;
end_call_res:any;
incoming_call_title:any;
loading:any = '';
video_call_id:any;
isBrowser: any = localStorage.getItem('isBrowser');
user_name: any = localStorage.getItem('sin_auth_user_name');
user_image: any = localStorage.getItem('sin_auth_user_image');
base_url: any = 'http://dev.indiit.solutions/TJ/dev/dev/public/uploads/userprofile/';
audio: any;
call_from_id: any;
is_call_received:boolean = false;
isStart: any = false;
allowedMimes:any = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp'];
  
  constructor(private globalFooService: GlobalFooService, public modalController: ModalController, public toastController: ToastController,public router: Router, public events: Events, public userService: UserService, private socket: Socket, public loadingController: LoadingController,
  private speechRecognition: SpeechRecognition )
  {

    this.globalFooService.getObservable().subscribe((data) => {
      if(data.foo.page == 'afterLoginUserName')
      {
        this.user_name  = data.foo.data.name;
        this.user_image = data.foo.data.profile_picture;
      }
    });

    var token = localStorage.getItem('sin_auth_token');
    this.userId = this.userService.decryptData(token,config.ENC_SALT);
    this.IMAGES_URL = config.IMAGES_URL;
  	this.checkLogin();
    this.getCategories();
    this.getTopSellingCategories();
    if(this.userId != 0){
      localStorage.removeItem('sin_current_address');
      this.getUserDefaultAddress();
    }
    this.getCartProducts();
    this.getWishlistProducts();
    events.subscribe('call_logout:true', data => {
      this.checkLogin();
    });
    events.subscribe('user_logged_in:true', data => {
      this.checkLogin();
    });
    events.subscribe('current_address_changed:true', data => {
      this.default_address = data;
    });
    events.subscribe('cart_updated:true', data => {
      this.items_in_cart = data.items_in_cart;
      if(data.isAdd == true){
        this.getCartProducts();
        //this.cart_price = Number(this.cart_price) + Number(data.cart_price);
      }
      else{
        this.cart_price = data.cart_price.toFixed(2);
      }
      
    });

    this.getUpdates().subscribe(new_call => {
      console.log('new call')
      console.log(new_call)
      this.new_call_res = new_call;
      if(this.new_call_res.user_id == this.userId){
        $(".video_call_div").show();
        this.playAudio();
        this.incoming_call_title = this.new_call_res.name+' is calling you.';
        this.video_call_id = this.new_call_res.video_call_id;
        this.call_from_id = this.new_call_res.from_id;
        var self = this;
        console.log('calling............')
        // disconnect after 1 min if not received call
        setTimeout(function(){
          if(self.is_call_received == false){
            self.stopAudio();
            $('.video_call_div').hide();
            self.socket.emit('video_call_not_answered', {user_id: self.userId, to_id: self.call_from_id, user_name: (self.errors.indexOf(self.user_name) >= 0 ? 'Unknown' : self.user_name)});
          }
        },60000);
      }
    });

    this.getUpdatesEnded().subscribe(end_call => {
      console.log('end call')
      console.log(end_call)
      this.end_call_res = end_call;
      if(this.end_call_res.user_id == this.userId){
        this.stopAudio();
        $(".video_call_div").hide();
        this.presentToast('Call ended by '+this.end_call_res.name, 'success');
        this.video_call_id = '';
        this.events.publish('video_call_ended:true', '');
        console.log('end calling............')
      }
    });
  }

  ngOnInit()
  {
    console.log('speechRecognition');
    console.log(this.speechRecognition)

    this.audio = new Audio();
    this.audio.src = 'assets/ringtones/ringtone_1.mp3';
    this.audio.load();
    if(localStorage.getItem('sin_auto_popup') != 'success' && this.isBrowser == 'true'){
      localStorage.setItem('sin_auto_popup','success');
      this.automaticPopup();
    }
    var self;
    $('.mega-dropdown-menu').on('click', function(event){
      $(".menu-item").removeClass('open');
      if(event.target.parentNode.id != undefined && event.target.parentNode.id != null && event.target.parentNode.id != ''){
        $("#"+event.target.parentNode.id).addClass('open');
        event.stopPropagation();
      }  
    });

    if(localStorage.getItem('isBrowser') == 'false'){
      this.speechRecognition.hasPermission().then((hasPermission: boolean) => {
        if (!hasPermission) {
        this.speechRecognition.requestPermission()
          .then(
            () => console.log('Granted'),
            () => console.log('Denied')   
          )
        }
      });
    }else{
      let self = this;
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = false;

      /*-----------------------------
      Voice Recognition 
      ------------------------------*/

      // If false, the recording will stop after a few seconds of silence.
      // When true, the silence period is longer (about 15 seconds),
      // allowing us to keep recording even when the user pauses. 
      recognition.continuous = true;

      // This block is called every time the Speech APi captures a line. 
      recognition.onresult = function(event) {

        // event is a SpeechRecognitionEvent object.
        // It holds all the lines we have captured so far. 
        // We only need the current one.
        var current = event.resultIndex;

        // Get a transcript of what was said.
        var transcript = event.results[current][0].transcript;

        // Add the current transcript to the contents of our Note.
        // There is a weird bug on mobile, where everything is repeated twice.
        // There is no official solution so far so we have to handle an edge case.
        var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

        if(!mobileRepeatBug) {
          // noteContent += transcript;
          console.log(transcript);
          self.searchTerm = transcript;
          self.isStart = false;
          recognition.stop();
          self.callSearchFunctionApi();
        }
      };

      recognition.onstart = function() { 
        console.log('Voice recognition activated. Try speaking into the microphone.');
      }

      recognition.onspeechend = function() {
        self.isStart = false;
        console.log('You were quiet for a while so voice recognition turned itself off.');
      }

      recognition.onerror = function(event) {
        if(event.error == 'no-speech') {
          console.log('No speech was detected. Try again.');  
        };
      }



      /*-----------------------------
            App buttons and input 
      ------------------------------*/
      $(document).on('click', '#start-record-btn', function (e) {
      // $('#start-record-btn').on('click', function(e) {
        // if (noteContent.length) {
        //   noteContent += ' ';
        // }
        self.isStart = true;
        recognition.start();
      });

      $(document).on('click', '#pause-record-btn', function (e) {
      // $('#pause-record-btn').on('click', function(e) {
        recognition.stop();
        self.isStart = false;
        console.log('Voice recognition paused.');
      });

      // Sync the text inside the text area with the noteContent variable.
      // noteTextarea.on('input', function() {
      //   noteContent = $(this).val();
      // })

      $('#save-note-btn').on('click', function(e) {
        recognition.stop();

        // if(!noteContent.length) {
        //   instructions.text('Could not save empty note. Please add a message to your note.');
        // }
        // else {
        //   // Save note to localStorage.
        //   // The key is the dateTime with seconds, the value is the content of the note.
        //   saveNote(new Date().toLocaleString(), noteContent);

        //   // Reset variables and update UI.
        //   noteContent = '';
        //   renderNotes(getAllNotes());
        //   noteTextarea.val('');
        //   instructions.text('Note saved successfully.');
        // }

        console.log(e)
            
      })





      /*-----------------------------
            Speech Synthesis 
      ------------------------------*/




     
    }

    
  }

  cartpage()
  {
    this.router.navigate(['/cart']);
  }

  playAudio() { 
    this.audio.play();
    this.audio.loop = true;
  }

  stopAudio() {
    this.audio.pause(); 
  }

  getUpdates() {
    var self = this;
    let observable = new Observable(observer => {
      self.socket.on('new_video_call', (data) => {
        observer.next(data);
      });
    })
    return observable;
  }

  getUpdatesEnded() {
    var self = this;
    let observable = new Observable(observer => {
      self.socket.on('video_call_ended_by_admin', (data) => {
        observer.next(data);
      });
    })
    return observable;
  }

  rejectCall(){
    this.is_call_received = true;
    this.stopAudio();
    $('.video_call_div').hide();
    this.socket.emit('video_call_rejected', {user_id: this.userId, to_id: this.call_from_id, user_name: (this.errors.indexOf(this.user_name) >= 0 ? 'Unknown' : this.user_name)});
  }

  async answerVideo() {
    this.is_call_received = true;
    this.socket.emit('video_call_answered', {user_id: this.userId, to_id: this.call_from_id, user_name: (this.errors.indexOf(this.user_name) >= 0 ? 'Unknown' : this.user_name)});
    this.stopAudio();
    $('.video_call_div').hide();
    const modal = await this.modalController.create({
      component: VideoCallPage,
      componentProps: { video_call_id: this.video_call_id },
      backdropDismiss:false
    });
    modal.onDidDismiss().then((detail) => {
      this.socket.emit('video_call_ended_by_user', {user_id: this.userId, to_id: this.call_from_id, user_name: (this.errors.indexOf(this.user_name) >= 0 ? 'Unknown' : this.user_name)});
    });
    return await modal.present();
  }

  getUserDefaultAddress(){
    this.userService.postData({user_id: this.userId},'getUserDefaultAddress').subscribe((result) => {
      if(this.errors.indexOf(result.address) == -1){
        this.default_address = result.address.full_address+' '+result.address.address_zip_code;
      }
    });
  }

  getCategories(){
    this.userService.getData('getCategories').subscribe((result) => {
      this.all_categories = result.categories;
    },
    err => {
      this.presentToast('Error,Please try after some time.','danger');
    });
  }

  getTopSellingCategories(){
    this.userService.postData({limit:'6'},'topSellingCategories').subscribe((result) => {
      console.log(result);
      this.all_top_categories = result.cats;
    },
    err => {
      this.all_top_categories = [];
    });
  }

  ionViewWillUnload(){
    this.events.unsubscribe('call_logout:true');
    this.events.unsubscribe('user_logged_in:true');
    this.events.unsubscribe('cart_updated:true');
    this.events.unsubscribe('current_address_changed:true');
  }

  productDetails(catId,subcatId){
    this.router.navigate(['/products'],{queryParams : {cat : catId, subcat: subcatId}});
  }

  catDropSelected(catId,subcatId,selected_cat){
    this.cats_array = [];
    this.selected_cat = selected_cat;
    this.cats_array.push({cat_id:catId,sub_cat_id:subcatId});
  }

  catDropSelectedMob(catId,subcatId,selected_cat){
    this.cats_array = [];
    this.mob_category = selected_cat;
    this.cats_array.push({cat_id:catId,sub_cat_id:subcatId});
    this.onButtonClickcat();
    this.search();
  }

  search()
  {
    this.router.navigate(['/products'],{queryParams : {cat : (this.cats_array.length > 0 ? this.cats_array[0].cat_id : ''), subcat: (this.cats_array.length > 0 ? this.cats_array[0].sub_cat_id : ''), search: this.searchTerm}});
  }

  getCartProducts()
  {
    this.userService.postData({user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId},'getCartProducts').subscribe((result) => 
    {
      this.cart = result.products;
      
      console.log("my cart pro");
      this.cartLength = result.products.length;

      this.items_in_cart = this.cart.length;
      if(this.cart != ''){
        this.calculateTotalPrice();
      }
      else{
        this.cart_price = 0;
      }
    },
    err => {
      this.cart = [];
    });
  }

  getWishlistProducts()
  {
    this.userService.postData({user_id:this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId},'getWishlist').subscribe((result) => {
      this.stopLoading();
      console.log(result)
      // this.wishlist = result.data;
      this.wishPro = result.data;
    },
    err => {
      this.stopLoading();
      // this.wishlist = [];
      this.wishPro = [];
    });
  }

  calculateTotalPrice(){
    var self = this; 
    this.cart_price = 0; 
    // this.cart.forEach(function(item){
    //   if(self.errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price){
    //     self.cart_price = Number(self.cart_price) + (item.product_sale_price*item.product_quantity);
    //   }
    //   else{
    //     self.cart_price = Number(self.cart_price) + (item.product_purchase_price*item.product_quantity);
    //   }
    // });

    this.cart.forEach(function(item){
      console.log(self.cart_price);
        if(Number(item.wholesale_price) != 0 && Number(item.product_quantity) >= Number(item.wholesale_products) && self.errors.indexOf(item.wholesale_products) == -1){
          self.cart_price = Number(self.cart_price) + (item.wholesale_price*item.product_quantity);
        }else if(item.is_variation == 1){
          self.cart_price = Number(self.cart_price) + (item.product_price*item.product_quantity);
        }else{
          if(self.errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price){
            if(item.discount_per_piece != null){
              if(item.discount_type == '%'){
                let singleItemPrice = Number(item.product_sale_price) - ((Number(item.discount_per_piece) / Number(item.product_sale_price)) * 100 );
                self.cart_price = Number(self.cart_price) + (singleItemPrice*item.product_quantity);
              }else{
                let singleItemPrice = Number(item.product_sale_price) - Number(item.discount_per_piece);
                self.cart_price = Number(self.cart_price) + (singleItemPrice*item.product_quantity);
              }
            }else{
              self.cart_price = Number(self.cart_price) + (item.product_sale_price*item.product_quantity);
            }
          }
          else{
            if(item.discount_per_piece != null){
              if(item.discount_type == '%'){
                let singleItemPrice = Number(item.product_purchase_price) - ((Number(item.discount_per_piece) / Number(item.product_purchase_price)) * 100 );
                self.cart_price = Number(self.cart_price) + (singleItemPrice*item.product_quantity);
              }else{
                let singleItemPrice = Number(item.product_purchase_price) - Number(item.discount_per_piece) ;
                self.cart_price = Number(self.cart_price) + (singleItemPrice*item.product_quantity);
              }
            }else{
              self.cart_price = Number(self.cart_price) + (item.product_purchase_price*item.product_quantity);
            }
          }
        }
    });

    this.cart_price = this.cart_price.toFixed(2);
    console.log(this.cart_price)
  }

  checkLogin(){
  	var token = localStorage.getItem('sin_auth_token');
  	if(token != '' && token != null && token != undefined){
  		this.is_logged_in = true;
  	}
  	else{
  		this.is_logged_in = false;
  	}
  }

  public onButtonClickdrop() {
    this.buttonClickeddrop = !this.buttonClickeddrop;
  } 

  public onButtonClickcat() {
    this.buttonClickedcat = !this.buttonClickedcat;
  }  

  async chooseLocation() {
    const modal = await this.modalController.create({
      component: ChooseLocationPage
    });
    return await modal.present();
  }

  logout()
  {
  	localStorage.removeItem('sin_auth_token');
  	
    localStorage.setItem('sin_auth_token','');
    localStorage.setItem('sin_auth_user_name','');
    localStorage.setItem('sin_auth_user_image','');

    this.presentToast('Logged out successfully!','success');
    this.events.publish('call_logout_head:true', '');
  	this.checkLogin();
    this.is_logged_in = false;
    this.router.navigate(['/blog']);
  }

  async presentToast(message,color) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: color,
      showCloseButton: true
    });
    toast.present();
  }

  async automaticPopup() {
    const modal = await this.modalController.create({
      component: AutoPopupPage
    });
    return await modal.present();
  }


  uploadImg(event){ 
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
        this.userService.postData(formData,'searchByImage').subscribe((result) => {
          this.stopLoading();
          console.log(result)

          this.router.navigate(['/products'],{queryParams : {cat : (this.cats_array.length > 0 ? this.cats_array[0].cat_id : ''), subcat: (this.cats_array.length > 0 ? this.cats_array[0].sub_cat_id : ''), search: '', searchImage: JSON.stringify(result.imageCats)}});
        },
        err => {
          this.stopLoading();
          this.presentToast('Something went wrong.Please try later.','danger');
        }); 
      }
    }
  };


  callSearchFunctionApi(){
    // this.presentLoading();
    // this.userService.postData({'searchText': this.searchTerm}, 'searchByText').subscribe((result) => {
      // this.stopLoading();
      // console.log(result)
      // if(result.status == 1){
        this.router.navigate(['/products'],{queryParams : {cat : (this.cats_array.length > 0 ? this.cats_array[0].cat_id : ''), subcat: (this.cats_array.length > 0 ? this.cats_array[0].sub_cat_id : ''), search: this.searchTerm }});
      // }else{
        // this.presentToast('No product found related your search.','danger');
      // }
      // for(var i=0; i < result.cats.length;i++){
      //   if(result.cats[i].product_cat.split(',').length > 1){
      //     if(this.cats_array.length == 0){
      //       this.cats_array.push(result.cats[i].product_cat.split(',')[0]);
      //     }

      //     var cats = result.cats[i].product_cat.split(',');
      //     // for(var j=0; j < this.cats_array.length; j++){
      //       // let isCatExist = false;
      //       for(k=0; k < cats.length;k++){
      //       //   if(this.cats_array[j] == cats[k]){
      //           // isCatExist = true;
      //         // }
      //         this.cats_array.push(cats[k]);
      //         this.sub
      //       // }

      //       }
      //   }else{

      //   }
      // }
      
    // },
    // err => {
    //   this.stopLoading();
    //   this.presentToast('Something went wrong.Please try later.','danger');
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


  startListening(){
    // Start the recognition process
    this.speechRecognition.startListening().subscribe((matches: string[]) => 
      console.log(matches),
      (onerror) => console.log('error:', onerror)
    );
  }

  subtotalPrice(item){
    if(item.is_variation == 1){
      return Number(item.product_price);
    }else if(Number(item.wholesale_price) != 0 && Number(item.product_quantity) >= Number(item.wholesale_products) && this.errors.indexOf(item.wholesale_products) == -1){
      return item.wholesale_price;
    }else{
      if(this.errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price){
        if(item.discount_per_piece != null){
          if(item.discount_type == '%'){
            return (Number(item.product_sale_price) - ((Number(item.discount_per_piece) / Number(item.product_sale_price)) * 100 )).toFixed(2);
          }else{
            return (Number(item.product_sale_price) - Number(item.discount_per_piece)).toFixed(2);
          }
        }else{
          return item.product_sale_price;
        }
      }
      else{
        if(item.discount_per_piece != null){
          if(item.discount_type == '%'){
            return (Number(item.product_purchase_price) - ((Number(item.discount_per_piece) / Number(item.product_purchase_price)) * 100 )).toFixed(2);
          }else{
            return (Number(item.product_purchase_price) - Number(item.discount_per_piece)).toFixed(2);
          }
        }else{
          return item.product_purchase_price;
        }
      }
    }
  };

}
