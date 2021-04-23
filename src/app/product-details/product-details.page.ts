import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ModalController, ToastController, LoadingController, Events } from '@ionic/angular';
import { ChooseLocationPage } from '../choose-location/choose-location.page';
import { UserService } from '../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { config } from '../config';
 
import * as $ from 'jquery';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';
import { WishlistListingPage } from '../wishlist-listing/wishlist-listing.page';
import { Injectable } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  tabs: string = "description";
  isAndroid: boolean = false;
  public buttonClickeddrop: boolean = false;
  product_id:any;
  IMAGES_URL:any;
  product:any;
  loading:any;
  userId:any;
  comapred_products:any = [];
  comapred_products_list:any = [];
  compare_product_sub_cat:any='';
  show_reply_text:any;
  reply_comment:any;
  review_text:any;
  my_wish_products:any=[];
  given_stars:number = 0;
  choosed_wholesale_quantity:number = 1;
  related_products:any; 
  errors : any = ['',null,undefined];
  final_quantity : number = 1;
  my_cart_products:any=[];
  is_loaded:boolean = false;
  isBrowser: any = localStorage.getItem('isBrowser');
  user_name: any = localStorage.getItem('sin_auth_user_name');
  max_compare:any;
  limit_reached:boolean = false;
  product_variations:any = [];
  shareURL:any;
  chat_list:any = [{
    'user_type': 'system',
    'message': 'Hello',
    'type': 'text',
    'date': new Date()
  }, {
    'user_type': 'system',
    'message': 'How may I assist you?',
    'type': 'text',
    'date': new Date()
  }];
  message:any;
  loginId:any;
  new_notis_res:any;
  socket_room_id:any;
  timestamp:any;
  recordRTC:any;
  stream:any;
  variations:any = [];
  selectedVariations:any = [];
  IsApplyVariation:any = false;
  variationPrice:any = 0;
  @ViewChild('video') video: any;

  audio: any;
  constructor(public modalController:ModalController,public toastController: ToastController, public userService: UserService, public loadingController: LoadingController, public activatedRoute:ActivatedRoute, public router:Router, public events: Events, private socket: Socket, public sanitizer:DomSanitizer, public cdr: ChangeDetectorRef) {
    this.product_id = Number(activatedRoute.snapshot.paramMap.get('product_id'));
    this.IMAGES_URL = config.IMAGES_URL;
    this.shareURL = config.BASE_URL+'#/product-details/'+this.product_id;
    var current_date = new Date();
    this.timestamp = current_date.getTime();
    events.subscribe('wishlist:true', data => {
      this.getCartProductsIds();
    });
    // if(this.errors.indexOf(this.product) == -1){
      this.getUpdates().subscribe(new_notis => {
        console.log('new_notis')
        console.log(new_notis)
        this.new_notis_res = new_notis;
        if(this.new_notis_res.room_id == this.socket_room_id){
          this.chat_list.push(this.new_notis_res);
        }
      });
    // }
  }

  ngOnInit() {
    $(document).on('click', '#'+this.timestamp+' .panel-heading span.icon_minim', function (e) {
        var $this = $(this);
        if (!$this.hasClass('panel-collapsed')) {
            $this.parents('.panel').find('.panel-body').slideUp();
            $this.parents('.panel').find('.panel-footer').hide();
            $this.addClass('panel-collapsed');
            $this.removeClass('glyphicon-minus').addClass('glyphicon-plus');
        } else {
            $this.parents('.panel').find('.panel-body').slideDown();
            $this.parents('.panel').find('.panel-footer').show();
            $this.removeClass('panel-collapsed');
            $this.removeClass('glyphicon-plus').addClass('glyphicon-minus');
        }
    });
    $(window).on('unload', function() {
      alert('end......')
    });
    let self = this;
    $(document).on('click', '#chat_window_1', function (e) {
      var $this = $(this);
      // if(document.getElementsByClassName('chat-window')){
        document.getElementById(self.timestamp).style.display = 'none'; 
        if(self.chat_list.length > 2){
          self.storeChat();
        }
      // }
      
    });

    
  }

  ngAfterViewInit() {
    // set the initial state of the video
    // let video:HTMLVideoElement = this.video.nativeElement;
    // video.muted = false;
    // video.controls = true;
    // video.autoplay = false;
  }

  startRecording() {
    $(".mike_icon").attr('name','code-working');
    let mediaConstraints = {
      // video: {
      //   mandatory: {
      //     minWidth: 1280,
      //     minHeight: 720
      //   }
      // },
      audio: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  errorCallback(stream: MediaStream){
    console.log('error.........')
  }

  successCallback(stream: MediaStream) {
    var options = {
      mimeType: 'audio/mp3', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000,
      bitsPerSecond: 128000 // if this line is provided, skip above two
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    // let video: HTMLVideoElement = this.video.nativeElement;
    // video.src = window.URL.createObjectURL(stream);
    // this.toggleControls();
  }

  toggleControls() {
    // let video: HTMLVideoElement = this.video.nativeElement;
    // video.muted = !video.muted;
    // video.controls = !video.controls;
    // video.autoplay = !video.autoplay;
  }

  stopRecording() {
    $(".mike_icon").attr('name','mic');
    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());
  }

  processVideo(audioVideoWebMURL) {
    // let video: HTMLVideoElement = this.video.nativeElement;
    let recordRTC = this.recordRTC;
    // video.src = audioVideoWebMURL;
    this.toggleControls();
    var recordedBlob = recordRTC.getBlob();
    var self = this;
    recordRTC.getDataURL(function (dataURL) {
      console.log(dataURL)
      self.emitMessage('audio',dataURL);
      // self.download();
    });
  }

  download() {
    console.log('downloading......')
    this.recordRTC.save('audio.mp3');
  }

  playAudio(url){
    this.audio = new Audio();
    this.audio.src = url;
    this.audio.load();
    this.audio.play();
  }

  ionViewDidEnter(){
    // this.chat_list = [];
    this.comapred_products = [];
    this.comapred_products_list = [];
    localStorage.removeItem('sin_wholesale_items');
    var token = localStorage.getItem('sin_auth_token');
    this.userId = this.userService.decryptData(token,config.ENC_SALT);
    if(this.userId == 0){
      this.loginId = localStorage.getItem('guestUserId');
    }
    else{
      this.loginId = this.userId;
    }

    var all_compared = JSON.parse(localStorage.getItem('sin_compare_products'));
    if(this.errors.indexOf(all_compared) == -1){
      this.comapred_products_list = all_compared;
      var self = this;
      this.comapred_products_list.forEach(function(pro){
        self.comapred_products.push(pro.product_id.toString());
      })
    }
    else{
      this.comapred_products_list = [];
    }
    if(this.isBrowser == 'true'){
      this.max_compare = 4;
    }
    else{
      this.max_compare = 3;
    }
    this.compare_product_sub_cat = localStorage.getItem('sin_compare_product_sub_cat');
    this.getCartProductsIds();
    if(this.userId != 0){
      this.addProductViewCount();
    }


  }

  ionViewWillLeave(){
    if(this.chat_list.length > 0){
      this.storeChat();
    }
  }

  storeChat(){
    this.userService.postData({product_id:this.product_id, user_id: this.userId, chat_array: this.chat_list, to_user_id: this.product.product_added_by, to_user_type: this.product.product_user_type},'storeChat').subscribe((result) => {
      console.log('chat stored');
      console.log(result);
    });
  }

  getProductDetails(){
    this.userService.postData({product_id:this.product_id, user_id: this.userId},'getProductDetails').subscribe((result) => {
      this.stopLoading();
      this.product = result.products;
      this.socket_room_id = this.product.product_user_type+'_'+this.product.product_added_by+'_'+this.loginId;
      console.log(this.socket_room_id)
      console.log(this.product)
      //this.variations = this.product.product_variations;
      var product_variations = this.product.product_variations;
      if(product_variations != ''){
        var all_variations = [];
        for(var key in product_variations) {
            var array = product_variations[key];
            console.log(array);
            let afterRemoveRedundantEntries = [];
            for(let i=0; i < array.length; i++){
              let IsValueExist = false;
              for(let j=0; j < afterRemoveRedundantEntries.length; j++){
                console.log(array[i].value);
                console.log(afterRemoveRedundantEntries[j].value)
                if(array[i].value == afterRemoveRedundantEntries[j].value){
                  IsValueExist = true;
                }
              }
              if(!IsValueExist){
                afterRemoveRedundantEntries.push(array[i]);
              }
            }
            all_variations.push({name : key, values : afterRemoveRedundantEntries});
            this.variations.push({name : key, values : array})
        }
        this.product_variations = all_variations;

      }
      console.log(this.product_variations)
      this.is_loaded = true;
      this.getRelatedProducts();
      $( "#minim_chat_window" ).trigger( "click" );
    },
    err => {
      this.stopLoading();
      this.product = [];
    });
  }

  getCartProductsIds(){
    this.presentLoading();
    this.userService.postData({user_id:this.userId},'getCartProductsIds').subscribe((result) => {
      this.my_cart_products = result.products;
      this.my_wish_products = result.wishlist;
      this.getProductDetails();
    },
    err => {
      this.stopLoading();
      this.my_cart_products = [];
      this.my_wish_products = [];
    });
  }

  getRelatedProducts(){
    this.userService.postData({limit: '15', cat_id:this.product.product_sub_cat, product_id: this.product_id},'relatedProducts').subscribe((result) => {
      this.related_products = result.products;
    },
    err => {
      this.related_products = [];
    });
  }

  compareChecked(event){
    if(event.detail.checked == true){
      if(this.comapred_products.indexOf(this.product_id) == -1){
        if(this.comapred_products.length == this.max_compare){
          this.limit_reached = true;
          this.presentToast("You can't compare more than "+this.max_compare+" products.",'danger');
        }
        else{
            if(this.comapred_products.length == 0)
            {
              this.compare_product_sub_cat = this.product.product_sub_cat;
              localStorage.setItem('sin_compare_product_sub_cat',this.compare_product_sub_cat);
              this.comapred_products.push(this.product_id);
              this.comapred_products_list.push(this.product);
              
              localStorage.setItem('sin_compare_products',"");

              localStorage.setItem('sin_compare_products',JSON.stringify(this.comapred_products_list));
            }
            else{
              if(this.compare_product_sub_cat == this.product.product_sub_cat){
                this.comapred_products.push(this.product_id);
                this.comapred_products_list.push(this.product);
                
                localStorage.setItem('sin_compare_products',"");

                localStorage.setItem('sin_compare_products',JSON.stringify(this.comapred_products_list));
              }
              else{
                this.limit_reached = true;
                this.presentToast("You can compare only same type of products.",'danger');
              }
            }
        }
      }
    }
    else{
      var index = this.comapred_products.indexOf(this.product_id);
      if(index >= 0){
        this.comapred_products.splice(index,1);
        this.comapred_products_list.splice(index,1);
        
        localStorage.setItem('sin_compare_products',"");

        localStorage.setItem('sin_compare_products',JSON.stringify(this.comapred_products_list));
      }
    }
  }

  removeCompared(index){
    this.comapred_products.splice(index,1);
    this.comapred_products_list.splice(index,1);
    localStorage.setItem('sin_compare_products',"");
  }

  addProductViewCount(){
    this.userService.postData({user_id:this.userId, product_id:this.product_id},'addProductViewCount').subscribe((result) => {
      // added
    },
    err => {
      console.log('Error')
    });
  }

  plusQuantity(){
    this.final_quantity = this.final_quantity + 1;
  }

  plusWholeSaleQuantity(){
    this.choosed_wholesale_quantity = this.choosed_wholesale_quantity + 1;
  }

  minusQuantity(){
    if(this.final_quantity != 1){
      this.final_quantity = this.final_quantity - 1;
    }
  }

  minusWholeSaleQuantity(){
    if(this.choosed_wholesale_quantity != 1){
      this.choosed_wholesale_quantity = this.choosed_wholesale_quantity - 1;
    }
  }

  checkOutWholeSale(wholesale_price,wholesale_products){
    var product_arr = [];
    product_arr.push({product_id:this.product_id,product_quantity:(this.choosed_wholesale_quantity*wholesale_products),product_purchase_price:(this.choosed_wholesale_quantity*wholesale_price),product_sale_price:0});
    localStorage.setItem('sin_wholesale_items',JSON.stringify(product_arr));
    this.router.navigate(['/checkout/direct'])
  }

  addToCart(product_id,product_sale_price,product_purchase_price,quantity=null){
    // if(this.userId == 0){
    //   this.router.navigate(['/login']);
    // }
    // else{
      if(this.product_variations == ''){
        this.productAddToCart(product_id,product_sale_price,product_purchase_price,quantity=null);
      }else{
        if(this.selectedVariations.length < this.product_variations.length - 1){
          //error
          this.presentToast('Error,Please select all variations.','danger');
        }else{
          this.productAddToCart(product_id,product_sale_price,product_purchase_price,quantity=null)
        }
      }
    // }
  }

  productAddToCart(product_id,product_sale_price,product_purchase_price,quantity=null){
    quantity = quantity == null ? this.final_quantity : quantity;
    this.presentLoading();
    this.userService.postData({product_id:product_id,user_id:this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId,product_qty:quantity, is_variation: this.IsApplyVariation, product_price:this.variationPrice, product_variations:this.selectedVariations},'addTocart').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1){
        this.my_cart_products.push(product_id);
        var p_price;
        if(this.errors.indexOf(product_sale_price) == -1 && product_sale_price != product_purchase_price){
          p_price = product_sale_price;
        }
        else{
          p_price = product_purchase_price;
        }
        this.events.publish('cart_updated:true', {items_in_cart:this.my_cart_products.length,cart_price:p_price,isAdd:true});
        this.presentToast('Product added to cart.','success');
      }
      else{
        this.presentToast('Error,Please try after some time.','danger');
      }
    },
    err => {
      this.stopLoading();
      this.presentToast('Error,Please try after some time.','danger');
    });
  }
  // addToWish(product_id){
  //   if(this.userId == 0){
  //     this.router.navigate(['/login']);
  //   }
  //   else{
  //     this.presentLoading();
  //     this.userService.postData({product_id:product_id,user_id:this.userId},'addTowish').subscribe((result) => {
  //       this.stopLoading();
  //       if(result.status == 1){
  //         this.my_wish_products.push(product_id);
  //         this.presentToast('Product added to wishlist.','success');
  //       }
  //       else{
  //         this.presentToast('Error,Please try after some time.','danger');
  //       }
  //     },
  //     err => {
  //       this.stopLoading();
  //       this.presentToast('Error,Please try after some time.','danger');
  //     });
  //   }
  // }
  addToWish(product_id){
    if(this.userId == 0){
      this.router.navigate(['/login']);
    }
    else{
      this.presentAlert(product_id);

      // this.presentLoading();
      // this.userService.postData({product_id:product_id,user_id:this.userId},'addTowish').subscribe((result) => {
      //   this.stopLoading();
      //   if(result.status == 1){
      //     this.my_wish_products.push(product_id);
      //     this.presentToast('Product added to wishlist.','success');
      //   }
      //   else{
      //     this.presentToast('Error,Please try after some time.','danger');
      //   }
      // },
      // err => {
      //   this.stopLoading();
      //   this.presentToast('Error,Please try after some time.','danger');
      // });
    }
  }

  async presentAlert(product_id) {
    localStorage.setItem('product', product_id);

    // const modal = await this.modalController.create({
    //   component: WishlistListingPage,
    //   componentProps: { value: product_id }
    // });
    // return await modal.present();
    this.userService.postData({ product_id: localStorage.getItem('product'), user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId, wish_title: null, is_new: this.userId == 0 ? 3 : 0 , wishlist_id: null }, 'addWishlistNew').subscribe((result) => {
  	    this.stopLoading();
  	    if(result.status == 1){
  	      // this.my_wish_products.push(product_id);
  	       this.presentToast('Product added to wishlist.','success');
  	       this.events.publish('wishlist:true',{});
  	      // this.modalCtrl.dismiss();
  	    }
  	    else{
  	       this.presentToast('Error,Please try after some time.','danger');
  	    }
   	},
    err => {
     	this.stopLoading();
     	this.presentToast('Error,Please try after some time.','danger');
    });
  }
  messages(){
    var vendor_type = 0;
    if(this.product.product_user_type == 'Admin'){
      vendor_type = 1;
    }
    localStorage.setItem('sin_chat_product_name',this.product.product_name);
    localStorage.setItem('sin_chat_pro_unique_id',this.product.pro_unique_id);
    this.router.navigate(['/messages/'+this.product_id+'/'+vendor_type+'/'+this.product.product_added_by]);
  }

  onRatingSet(stars){
    this.given_stars = stars;
  }

  addReview(review_text){
    if(this.errors.indexOf(review_text) >= 0){
      this.presentToast('Please enter your reviews.','danger');
      return false;
    }
    else{
      this.postReview(review_text,0);
    }
  }

  replyReview(review_id,reply_comment,r_ind){
    if(this.errors.indexOf(reply_comment) >= 0){
      this.presentToast('Please enter your reply.','danger');
      return false;
    }
    else{
      this.postReview(reply_comment,review_id,r_ind);
    }
  }

  atob(string){
    return atob(string);
  }

  postReview(review_text,review_id,index = null){
    this.presentLoading();
    this.userService.postData({product_id:this.product_id,user_id:this.userId,review:review_text,stars:this.given_stars,parent:review_id},'addReview').subscribe((result) => {
      this.stopLoading();
      if(result.status == 1){
        if(review_id == 0){
          this.review_text = '';
          this.product.product_reviews.splice(0,0,result.data);
          this.given_stars = 0;
          this.presentToast('Thanks! Your review has been posted.','success');
        }
        else{
          this.show_reply_text = '';
          this.presentToast('Thanks! Your reply has been posted.','success');
          if(this.errors.indexOf(this.product.product_reviews[index]['review_comments']) >= 0){
            this.product.product_reviews[index]['review_comments'] = [];
          }
          this.product.product_reviews[index]['review_comments'].splice(0,0,result.data);
        }
      }
      else{
        this.presentToast('Error,Please try after some time.','danger');
      }
    },
    err => {
      this.given_stars = 0;
      this.stopLoading();
      this.presentToast('Error,Please try after some time.','danger');
    });
  }

  addChat(message){
    if(this.errors.indexOf(message) == -1){
      this.message = '';
      this.emitMessage('text',message);
    }
  }

  emitMessage(type,message){
    this.socket.connect();
    var current_date = new Date();
    var socket_msg_id = this.product.product_user_type+'_'+this.product.product_added_by+'_'+this.loginId;
    var socket_to_id = this.product.product_user_type+'_'+this.product.product_added_by;
    var start_msg = 'Chat started for product '+this.product.product_name+' ('+this.product.pro_unique_id+').'
    this.socket.emit('send_notification', {message:message,date:current_date,user_type:'user',room_id: socket_msg_id, to_id : socket_to_id, user_id: this.loginId, start_msg: start_msg, user_name : (this.userId == 0 ? 'Unknown' : this.user_name), type: type });
    this.chat_list.push({message:message,date:current_date,user_type:'user',type:type});
  }

  getUpdates() {
    var self = this;
    let observable = new Observable(observer => {
      self.socket.on('new_notification', (data) => {
        observer.next(data);
      });
    })
    return observable;
  }

  public onButtonClickdrop() {
    this.buttonClickeddrop = !this.buttonClickeddrop;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ChooseLocationPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
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

  selectedValue(variation, value){
    // console.log(variation);
    // console.log(value);
    if(this.selectedVariations.length == 0){
      let name = '';
      for(let i=0; i< variation.values.length; i++){
        if(variation.values[i].id == value){
          name = variation.values[i].value;
        }
      }
      this.selectedVariations.push({
        name: variation.name,
        selectedValue: value,
        value: name
      });
    }else{
      let IsVariationExist = false;
      let index = 0;
      for(let i=0; i<this.selectedVariations.length; i++){
        if(variation.name == this.selectedVariations[i].name){
          IsVariationExist = true;
          index = i;
        }
      }
      if(!IsVariationExist){
        let name = '';
        for(let i=0; i< variation.values.length; i++){
          if(variation.values[i].id == value){
            name = variation.values[i].value;
          }
        }
        this.selectedVariations.push({
          name: variation.name,
          selectedValue: value,
          value: name
        });
      }else{
        let name = '';
        for(let i=0; i< variation.values.length; i++){
          if(variation.values[i].id == value){
            name = variation.values[i].value;
          }
        }
        this.selectedVariations[index] = {
          name: variation.name,
          selectedValue: value,
          value: name
        };
      }
    }

    //here calculate variation
    //get only filtered variation values based on selected variation value
    let ExistedIndex = [];
    let selectedVariationIndex = 0;
    for(let j=0; j< this.variations.length; j++){
      if(variation.name == this.variations[j].name){
        for(let k=0; k < this.variations[j].values.length; k++){
          if(value == this.variations[j].values[k].id){
            ExistedIndex.push(k);
          }
        }
      }
    }

    //return only filtered variation values based on selected variation value
    for(let j=0; j< this.variations.length; j++){
      let IsVariationSelected = false;
      for(let h=0; h< this.selectedVariations.length; h++){
        if(this.selectedVariations[h].name == this.variations[j].name){
          IsVariationSelected = true;
          selectedVariationIndex = h;
        }
      }

      if(!IsVariationSelected){
        let filteredValuesArray = [];
        for(let k=0; k < ExistedIndex.length; k++){
          filteredValuesArray.push(this.variations[j].values[ExistedIndex[k]]);
        }
        this.product_variations[j] = [];
        this.product_variations[j] = {
          values: filteredValuesArray,
          name: this.variations[j].name
        };
      }else{
        // if variation selected
        //get all varations array which we have to skip before maing condition
        let skipedVariationsArray = [];
        let lastSkipedVariationIndex = 0;
        for(let i=0; i < this.selectedVariations.length; i++){
          if(this.selectedVariations[i].name == variation.name){
            lastSkipedVariationIndex = i;
          }
        }
        //all skiped varations list
        for(let i=0; i <= lastSkipedVariationIndex; i++){
          skipedVariationsArray.push(this.selectedVariations[i].name);
        }

        let IsVariationExistInSkippedArray = false;
        for(let m=0; m < skipedVariationsArray.length; m++){
          if(skipedVariationsArray[m] == this.variations[j].name){
            IsVariationExistInSkippedArray = true;
          }
        }

        if(!IsVariationExistInSkippedArray){
          for(let n = 0; n < this.selectedVariations.length; n++){
            if(this.selectedVariations[n].name == this.variations[j].name){
              this.selectedVariations.splice(n, 1);
            }
          }
          let filteredValuesArray = [];
          for(let k=0; k < ExistedIndex.length; k++){
            filteredValuesArray.push(this.variations[j].values[ExistedIndex[k]]);
          }
          this.product_variations[j] = [];
          this.product_variations[j] = {
            values: filteredValuesArray,
            name: this.variations[j].name
          };
        }
      }
    }

    if(this.selectedVariations.length == this.variations.length - 1){
      for(let i=0; i < this.product_variations.length; i++){
        if(this.product_variations[i].name == 'price'){
          this.IsApplyVariation = true;
          this.variationPrice = this.product_variations[i].values[0];
        }
      }
    }else{
      this.IsApplyVariation = false;
    }
    this.cdr.detectChanges();
    console.log(this.product_variations)
  }
}
